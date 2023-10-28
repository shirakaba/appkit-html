import { parseArgs } from 'node:util';
import { join, resolve, dirname } from 'node:path';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { URL } from 'node:url';

const __dirname = new URL(import.meta.url + '/..').pathname;
/**
 * Not sure yet whether we'll be naming the npm library "objc_runtime", "objc",
 * or something different entirely. For now, it's "objc".
 */
const objcLib = 'objc';

/** @type {import('node:util').ParseArgsConfig['options'] & {}} */
const options = {
  input: {
    type: 'string',
    short: 'i',
    default: resolve(
      import.meta.resolve(`${objcLib}/package.json`).replace(/^file:\/\//, ''),
      '../types'
    ),
  },
  output: {
    type: 'string',
    short: 'o',
    default: resolve(__dirname, '../src/generated-elements/index.ts'),
  },
};

const {
  values: { input, output },
} = parseArgs({ args: process.argv.slice(2), options });

const runtimeLines = readFileSync(
  resolve(input, 'Runtime.d.ts'),
  'utf-8'
).split('\n');
const appKitLines = readFileSync(resolve(input, 'AppKit.d.ts'), 'utf-8').split(
  '\n'
);
const lines = [...runtimeLines, ...appKitLines];
const result = parseDeclaration(lines);
// console.log(result);

mkdirSync(dirname(output), { recursive: true });
writeFileSync(output, result, 'utf-8');

/**
 * @param {Array<string>} lines
 */
function parseDeclaration(lines) {
  /** @type {Map<string, string>} */
  const heredity = new Map();
  /** @type {Array<string>} */
  const imports = [];
  /** @type {Array<ClassMeta & { fields: Array<Field>> }} */
  const classes = [];
  /** @type {Array<DelegateMeta & { fields: Array<Field>> }>} */
  const delegates = [];
  /** @type {{ [delegateName: string]: DelegateMeta & { fields: Array<Field>> } }} */
  const delegatesRecord = {};
  /** @type {{ [className: string]: ClassMeta & { fields: Array<Field>> } }} */
  const classesRecord = {};
  /**
   * key: class name
   * value: a map of delegate prop names to their corresponding classes.
   * @type {{ [className: string]: { [propName: string]: string; }}>}
   * @example
   * {
   *   NSTextStorage: {
   *     delegate: 'NSTextStorageDelegate',
   *   },
   *   WKWebView: {
   *     navigationDelegate: WKNavigationDelegate,
   *     UIDelegate: WKUIDelegate,
   *   },
   * }
   */
  const delegatesByClass = {};

  let tsIgnoring = false;
  /** @type {"class" | "delegate" | null} */
  let inside = null;

  for (const line of lines) {
    const directive = parseImportDirective(line);
    if (directive) {
      imports.push(directive);
      continue;
    }

    const prevTsIgnoring = tsIgnoring;
    tsIgnoring = parseTsIgnore(line);
    if (tsIgnoring) {
      continue;
    }

    if (line === '}') {
      inside = null;
      continue;
    }

    if (inside === 'class' || inside === 'delegate') {
      const currentlyInside =
        inside === 'class' ? classes.at(-1) : delegates.at(-1);
      if (!currentlyInside) {
        continue;
      }

      const field = parseField(line);
      if (!field) {
        continue;
      }

      if (inside === 'class') {
        const current = classes.at(-1);
        if (!current) {
          continue;
        }

        if (isDelegateField(field)) {
          const record = delegatesByClass[current.className] ?? {};
          record[field.name] = field.value;
          delegatesByClass[current.className] = record;
        }

        current.fields.push(field);
      } else {
        const current = delegates.at(-1);
        if (!current) {
          continue;
        }

        current.fields.push(field);
      }

      continue;
    }

    const viewClass = parseViewClassHeader(line, prevTsIgnoring);
    if (viewClass) {
      inside = 'class';
      const { className, superclass } = viewClass;
      heredity.set(className, superclass);
      const value = { ...viewClass, fields: [] };
      classesRecord[viewClass.className] = value;
      classes.push(value);
      continue;
    }

    const delegate = parseDelegateHeader(line);
    if (delegate) {
      inside = 'delegate';
      const value = { ...delegate, fields: [] };
      delegatesRecord[delegate.delegateName] = value;
      delegates.push(value);
      continue;
    }
  }

  const processedClasses = [...sortClasses(classes, heredity)].map(
    ({ header, className, contents, footer, fields }) => {
      /** @type {{ [propName: string]: string; }} */
      const delegatesByClassValue = delegatesByClass[className] ?? {};

      const delegateLazyInits = Object.keys(delegatesByClassValue).map(
        (propName) => {
          const impl = `${delegatesByClassValue[propName]}Impl`;
          return [
            `  get ${propName}(): ${impl} {`,
            `    return (this.nativeObject.${propName} ??= ${impl}.new()) as ${impl};`,
            '  }',
          ].join('\n');
        }
      );

      const delegateMethods = Object.keys(delegatesByClassValue).flatMap(
        (propName) => {
          const delegateName = delegatesByClassValue[propName];
          const delegateMeta = delegatesRecord[delegateName];
          if (!delegateMeta?.fields.length) {
            return [];
          }

          return delegateMeta.fields
            .map((field) => {
              if (field.type === 'method') {
                return [
                  // prettier-ignore
                  `  set ${field.name.toLowerCase()}(value: (${field.args}) => ${field.returnType}) {`,
                  `    this.${propName}.${field.name} = value;`,
                  '  }',
                ].join('\n');
              }

              return '';
            })
            .filter((statement) => !!statement);
        }
      );

      return [
        header,
        [
          ...contents,
          ...delegateLazyInits,
          '',
          ...fields
            .map((field) => {
              // We'll not expose this as an attribute as we're managing it
              // ourselves.
              if (isDelegateField(field)) {
                return null;
              }

              if (field.type === 'property') {
                return `  // ${field.readonly ? 'readonly ' : ''}${
                  field.name
                }: ${field.value};`;
              }
              return null;
            })
            .filter(Boolean),
        ].join('\n'),
        ...(delegateMethods.length ? ['', ...delegateMethods] : []),
        footer,
      ].join('\n');
    }
  );

  const nsObjectImplementedMethods = new Set(
    classesRecord.NSObject.fields
      .filter(({ type, optional }) => type === 'method' && !optional)
      .map(({ name }) => name)
  );

  const processedDelegates = delegates.map(
    ({ implHeader, implContents, implFooter, fields, delegateName }) => {
      const processedFields = fields
        .map((field) => {
          if (field.type === 'method') {
            // Has already been implemented in our ancestor, so no need to mark
            // as optional or even mention it.
            if (nsObjectImplementedMethods.has(field.name)) {
              return null;
            }

            // Implied by `implements WhateverDelegate`.
            if (field.optional) {
              return `  ${field.name}?(${field.args}): ${field.returnType};`;
            }

            return [
              `  ${field.name}(${field.args}): ${field.returnType} {`,
              `    throw new Error("Please provide implementation for: ${delegateName} > ${field.name}");`,
              '  }',
            ].join('\n');
          }
          return null;
        })
        .filter(Boolean);

      return [
        implHeader,
        [
          ...implContents,
          ...(processedFields.length ? [''] : []),
          ...processedFields,
        ].join('\n'),
        implFooter,
      ].join('\n');
    }
  );

  const HTMLNSObjectElement = `
export abstract class HTMLNativeObjectElement extends HTMLElement {
  protected static getAttributesRecord(){
    return Object.getOwnPropertyNames(this.prototype)
    .reduce<Record<string, string>>((acc, prop) => {
      acc[prop.toLowerCase()] = prop;
      return acc;
    }, {});
  }
  protected static readonly attributes = this.getAttributesRecord();

  // Warning: experimental
  getAttributeNS(namespace: string | null, localName: string): string | null {
    const attributes = (
      Object.getPrototypeOf(this).constructor as typeof HTMLNativeObjectElement
    ).attributes;
    const nativeProp = attributes[localName.toLowerCase()];
    if(nativeProp){
      // FIXME: marshal rich values to string where possible
      return (this as any)[nativeProp].toString() ?? null;
    }

    return super.getAttributeNS(namespace, localName);
  }

  // Warning: experimental
  setAttributeNS(namespace: string | null, qualifiedName: string, value: string): void {
    const attributes = (
      Object.getPrototypeOf(this).constructor as typeof HTMLNativeObjectElement
    ).attributes;
    const nativeProp = attributes[qualifiedName.toLowerCase()];
    if(nativeProp){
      // FIXME: marshal string to rich values where possible
      (this as any)[nativeProp] = value;
    }

    super.setAttributeNS(namespace, qualifiedName, value);
  }

  /**
   * The native object from the Obj-C runtime that this HTML Element wraps.
   */
  abstract readonly nativeObject: NativeObject;
}
`.trim();

  return `
${[...new Set(imports)].join('\n')}

${HTMLNSObjectElement}

${processedClasses.join('\n\n')}

// Delegates

${processedDelegates.join('\n\n')}

`.trim();
}

/**
 * @param {string} line
 */
function parseImportDirective(line) {
  const match = line.match(/^\/\/\/ <reference path="(.*?)" ?\/>/);
  if (!match) {
    return null;
  }

  const [, path] = match;
  const typesPath = join(`${objcLib}/types`, path);
  return `/// <reference types="${typesPath}" />`;
}

/**
 * @param {string} line
 */
function parseTsIgnore(line) {
  return /^\/\/ @ts-ignore/.test(line);
}

/**
@typedef {{
  header: string;
  contents: Array<string>;
  footer: string;
  className: string;
  superclass: string;
}} ClassMeta
*/

/**
 * @param {string} line
 * @param {boolean} tsIgnoring whether the header is preceded by @ts-ignore
 */
function parseViewClassHeader(line, tsIgnoring) {
  const match = line.match(
    /^declare class (.*?) extends (.*?) (?:implements (.*?) )?{/
  );
  if (!match) {
    return null;
  }

  // Warning: superclass may come from outside AppKit (NSObject).
  // Warning: class may extend a class that is only declared later on.
  const [_header, className, superclass, _implementees] = match;

  // We're only interested in view classes, and NSObject.
  if (
    className !== 'NSObject' &&
    (className.startsWith('OS_') ||
      className.endsWith('Protocol') ||
      superclass === 'NativeObject')
  ) {
    return null;
  }

  /**
   * Allocate an instance of the given class, except for any singletons.
   */
  const nativeObject =
    className === 'NSApplication'
      ? 'NSApplication.sharedApplication'
      : `${className}.new()`;

  const header = `export class HTML${className}Element extends HTML${superclass}Element {`;
  const contents = [
    '  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };',
    /**
     * Obj-C can express some relationships that TS can't (e.g. override some
     * methods with an incompatible signature), so we have to resort to ts-ignore
     * sometimes when TS insists that a class is incompatible with its superclass.
     */
    ...(tsIgnoring ? ['  // @ts-ignore'] : []),
    `  readonly nativeObject = ${nativeObject};`,
  ];
  const footer = '}';

  return { header, contents, footer, className, superclass };
}

/**
 *
 * @param {string} line
 * @returns {Field|null}
 */
function parseField(line) {
  // "If I'd had more time, I would've written a shorter RegEx"
  // - Blaise Pascal
  // This seems to be sufficient to cover all cases in AppKit. It looks for
  // three cases: generic methods, non-generic methods, and properties.
  const match = line.match(/^\s*(.*?)(\??<|\??\(|\??: \(?)/);
  if (!match) {
    return null;
  }

  const [
    fullMatch,
    /**
     * @example
     * "setCandidatesForSelectedRangeInString"
     * "readonly isCandidateListVisible"
     * "get customizationLabel"
     * "set customizationLabel"
     */
    prelude,
    /**
     * @example
     * "?: "
     * ": "
     * ": ("
     * "?("
     * "("
     * "?<"
     * "<"
     */
    discriminator,
  ] = match;

  switch (discriminator) {
    // Properties
    case '?: ':
    case ': ':
    case ': (': {
      const name = prelude.split(' ').slice(-1)[0];
      const readonly = prelude.startsWith('readonly ');
      const value = line
        .slice(fullMatch.length - (discriminator === ': (' ? '('.length : 0))
        .slice(0, -';'.length);

      return { type: 'property', readonly, name, value };
    }
    // Methods
    case '?(':
    case '(':
    case '?<':
    case '<': {
      let indexOfOpeningBracket = fullMatch.length - 1;
      let openingBracket;
      switch (discriminator) {
        case '?(':
          openingBracket = '(';
          break;
        case '(':
          openingBracket = '(';
          break;
        case '?<':
          openingBracket = '<';
          break;
        case '<':
          openingBracket = '<';
          break;
        default:
          return null;
      }

      const optional = discriminator.startsWith('?');

      let indexOfClosingBracket = findIndexOfMatchingBracket(
        line,
        indexOfOpeningBracket,
        openingBracket
      );

      if (indexOfClosingBracket === -1) {
        return null;
      }

      // We still need to get past the generic.
      if (openingBracket === '<') {
        indexOfOpeningBracket = indexOfClosingBracket + 1;
        openingBracket = '(';
        indexOfClosingBracket = findIndexOfMatchingBracket(
          line,
          indexOfOpeningBracket,
          openingBracket
        );
      }

      const args = line.slice(indexOfOpeningBracket + 1, indexOfClosingBracket);
      const returnType = line
        .slice(indexOfClosingBracket + '): '.length)
        .slice(0, -';'.length);

      // console.log(`ARGS: "${args}"`);
      // console.log(`RETURN: "${returnType}"`);
      // console.log(line.trim());

      // TODO: check whether this handles generics correctly
      const name = prelude.split(' ').slice(-1)[0];

      if (prelude.startsWith('get ')) {
        return { type: 'getter', name, args, returnType };
      }

      if (prelude.startsWith('set ')) {
        return { type: 'setter', name, args };
      }

      return { type: 'method', name, args, optional, returnType };
    }
    default:
      return null;
  }
}

/**
 * @param {Field} field
 * @returns {field is PropertyField}
 */
function isDelegateField(field) {
  return (
    field.type === 'property' &&
    /[dD]elegate$/.test(field.name) &&
    /[dD]elegate$/.test(field.value)
  );
}

/** @typedef {{ type: 'property'; name: string; readonly: boolean; value: string; }} PropertyField */
/** @typedef {{ type: 'getter'; name: string; args: string; returnType: string; }} GetterField */
/** @typedef {{ type: 'setter'; name: string; args: string; }} SetterField */
/** @typedef {{ type: 'method'; name: string; args: string; optional: boolean; returnType: string; }} MethodField */
/**
 @typedef {
  null |
  PropertyField |
  GetterField |
  SetterField |
  MethodField
 } Field
 */

/**
 *
 * @param {string} code
 * @param {number} openingIndex
 * @param {"{"| "(" | "<"} openingBracket
 */
function findIndexOfMatchingBracket(code, openingIndex, openingBracket) {
  /** @type {"}"| ")" | ">"} openingBracket */
  let closingBracket;
  switch (openingBracket) {
    case '{':
      closingBracket = '}';
      break;
    case '(':
      closingBracket = ')';
      break;
    case '<':
      closingBracket = '>';
      break;
    default:
      throw new TypeError(`Unsupported bracket type: ${openingBracket}`);
  }

  if (openingIndex >= code.length || code[openingIndex] !== openingBracket) {
    // If the character at the given index is not an opening bracket, return -1 to indicate an error.
    return -1;
  }

  let bracketCount = 0;

  for (let i = openingIndex; i < code.length; i++) {
    if (code[i] === openingBracket) {
      // Increment the bracket count when an opening bracket is encountered.
      bracketCount++;
    } else if (code[i] === closingBracket) {
      // Check for false positives.
      if (i > 0 && closingBracket === '>' && code[i - 1] === '=') {
        continue;
      }

      // Decrement the bracket count when a closing bracket is encountered.
      bracketCount--;
      if (bracketCount === 0) {
        // When the bracket count reaches 0, we've found the matching closing bracket.
        return i;
      }
    }
  }

  // If we reach this point, there is an imbalance of brackets, so return -1 to indicate an error.
  return -1;
}

/**
@typedef {{
  implHeader: string;
  implContents: Array<string>;
  implFooter: string;
  delegateName: string;
  superinterfaces: string;
}} DelegateMeta
 */

/**
 * @param {string} line
 */
function parseDelegateHeader(line) {
  const match = line.match(/^declare interface (.*?Delegate) extends (.*?) {/);
  if (!match) {
    return null;
  }

  // Warning: superinterface may itself be a delegate.
  const [_header, delegateName, superinterfaces] = match;

  const impl = `${delegateName}Impl`;

  const implHeader = `export class ${impl} extends NSObject implements ${delegateName} {`;
  // TODO: lazy-init protocol conformance (once supported)
  const implContents = [`  static ObjCProtocols = [${delegateName}];`];
  const implFooter = '}';

  return {
    implHeader,
    implContents,
    implFooter,
    delegateName,
    superinterfaces,
  };
}

/**
 *
 * @param {ReadonlyArray<ClassMeta & { fields: Array<Field>}>} classes
 * @param {Map<string, string>} heredity
 */
function* sortClasses(classes, heredity) {
  const providedClasses = new Set(['NativeObject']);
  let classesCopy = [...classes];
  let prevLength = classesCopy.length;

  while (classesCopy.length) {
    /** @type {Set<{ className: string; declaration: string }>} */
    const pendingClasses = new Set();

    for (const [i, clazz] of classesCopy.entries()) {
      const { className } = clazz;

      // We expect all view classes to extend something.
      const superclass = heredity.get(className);
      if (!superclass) {
        classesCopy.splice(i, 1);
        continue;
      }

      if (!providedClasses.has(superclass)) {
        pendingClasses.add(clazz);
        continue;
      }

      classesCopy.splice(i, 1);
      providedClasses.add(className);
      yield clazz;
    }

    // NSTextStorage extends NSMutableAttributedString (from Foundation)
    // NSOpenGLLayer extends CAOpenGLLayer (from QuartzCore)

    classesCopy = [...new Set([...pendingClasses, ...classesCopy])];
    if (prevLength === classesCopy.length) {
      console.log(`Unable to reduce beyond ${prevLength}`);
      return;
    }

    prevLength = classesCopy.length;
  }
}
