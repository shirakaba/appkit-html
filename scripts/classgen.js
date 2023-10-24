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
  /** @type {Array<{ className: string; declaration: string }>} */
  const classes = [];
  /** @type {Array<string>} */
  const delegates = [];

  let tsIgnoring = false;

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

    const viewClass = parseViewClassHeader(line, prevTsIgnoring);
    if (viewClass) {
      const { className, declaration, superclass } = viewClass;
      heredity.set(className, superclass);
      classes.push({ className, declaration });
      continue;
    }

    const delegateHeader = parseDelegateHeader(line);
    if (delegateHeader) {
      delegates.push(delegateHeader);
      continue;
    }
  }

  const sortedClasses = [...sortClasses(classes, heredity)].map(
    (clazz) => clazz.declaration
  );

  const HTMLNSObjectElement = `
export abstract class HTMLNSObjectElement extends HTMLElement {
  abstract readonly nativeObject: NSObject;
}
`.trim();

  return `
${imports.join('\n')}

${HTMLNSObjectElement}

${sortedClasses.join('\n\n')}

${delegates.join('\n\n')}

`.trim();
}

/**
 *
 * @param {ReadonlyArray<{ className: string; declaration: string }} classes
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
   * Obj-C can express some relationships that TS can't (e.g. override some
   * methods with an incompatible signature), so we have to resort to ts-ignore
   * sometimes when TS insists that a class is incompatible with its superclass.
   */
  const tsIgnore = tsIgnoring ? '\n  // @ts-ignore' : '';

  const declaration = `
export class HTML${className}Element extends HTML${superclass}Element {${tsIgnore}
  readonly nativeObject = ${className}.new();
}
`.trim();

  return { declaration, className, superclass };
}

/**
 * @param {string} line
 */
function parseDelegateHeader(line) {
  const match = line.match(/^declare interface (.*?Delegate) extends (.*?) {/);
  if (!match) {
    return null;
  }

  // Warning: superinterface may itself be a delegate.
  const [_header, _delegateName, _superinterface] = match;

  return null;
}
