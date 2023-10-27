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
  appkitdts: {
    type: 'string',
    short: 'a',
    default: resolve(
      import.meta.resolve(`${objcLib}/package.json`).replace(/^file:\/\//, ''),
      '../types/AppKit.d.ts'
    ),
  },
  output: {
    type: 'string',
    short: 'o',
    default: resolve(__dirname, '../src/generated-elements/index.ts'),
  },
};

const {
  values: { appkitdts, output },
} = parseArgs({ args: process.argv.slice(2), options });

const lines = readFileSync(appkitdts, 'utf-8').split('\n');
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
      classes.push({ ...viewClass, fields: [] });
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

      // TODO: See NSRuleEditorDelegate for a delegate with mandatory members
      const delegates = Object.keys(delegatesByClassValue).map((propName) =>
        [
          `    this.${propName} = ${delegatesByClassValue[propName]}Impl.new();`,
          `    this.${propName}.eventTargetDelegate = new WeakRef(this);`,
          `    this.nativeObject.${propName} = this.${propName};`,
        ].join('\n')
      );

      const ctor = delegates.length
        ? [
            ...Object.keys(delegatesByClassValue).map(
              (propName) =>
                `  ${propName}?: ${delegatesByClassValue[propName]}Impl;`
            ),
            '',
            '  constructor(){',
            '    super();',
            '',
            ...delegates,
            '  }',
          ]
        : [];

      const dom0EventHandlers = Object.keys(delegatesByClassValue).flatMap(
        (propName) => {
          const delegateName = delegatesByClassValue[propName];
          const delegateMeta = delegatesRecord[delegateName];
          if (!delegateMeta?.fields.length) {
            return [];
          }

          return delegateMeta.fields
            .map((field) => {
              if (field.type === 'method') {
                return `  declare on${field.name.toLowerCase()}: (evt: CustomEvent<[${
                  field.args
                }]>) => void | null;`;
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
          ...ctor,
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
        ...(dom0EventHandlers.length ? ['', ...dom0EventHandlers] : []),
        footer,
      ].join('\n');
    }
  );

  const processedDelegates = delegates.map(
    ({ implHeader, implContents, implFooter, fields }) => {
      return [
        implHeader,
        '',
        [
          ...implContents,
          '',
          ...fields
            .map((field) => {
              if (field.type === 'method') {
                return `  // ${field.name}${field.optional ? '?' : ''}(${
                  field.args
                }): ${field.returnType};`;
              }
              return null;
            })
            .filter(Boolean),
        ].join('\n'),
        implFooter,
      ].join('\n');
    }
  );

  const HTMLNSObjectElement = `
export abstract class HTMLNSObjectElement extends HTMLElement {
  /**
   * The native object from the Obj-C runtime that this HTML Element wraps.
   */
  abstract readonly nativeObject: NSObject;

  /**
   * All properties in the inheritance hierarchy referring to a delegate.
   */
  protected declare knownDelegates?: Array<
    [key: string, delegate: typeof NSObject]
  >;
}
`.trim();

  return `
${imports.join('\n')}

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

  // We're only interested in view classes.
  if (className.endsWith('Protocol') || superclass === 'NativeObject') {
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
    /**
     * Obj-C can express some relationships that TS can't (e.g. override some
     * methods with an incompatible signature), so we have to resort to ts-ignore
     * sometimes when TS insists that a class is incompatible with its superclass.
     */
    ...(tsIgnoring ? ['\n  // @ts-ignore'] : []),
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
  const implContents = [
    `  static ObjCProtocols = [${delegateName}];`,
    '',
    '  declare eventTargetDelegate?: WeakRef<EventTarget>;',
  ];
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
  const providedClasses = new Set(['NSObject']);
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
