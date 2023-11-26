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
  sdk: {
    type: 'string',
    short: 'p',
    /**
     * 'macos': just the macOS SDK (AppKit).
     * 'ios': just the iOS SDK (UIKit).
     * '': both.
     */
    default: '',
  },
  input: {
    type: 'string',
    short: 'i',
    /** The path to the objc runtime types. */
    default: (() => {
      try {
        return resolve(
          import.meta
            .resolve(`${objcLib}/package.json`)
            .replace(/^file:\/\//, ''),
          '../types'
        );
      } catch (error) {
        return '';
      }
    })(),
  },
  output: {
    type: 'string',
    short: 'o',
    /** Default to outputting inside this repo. */
    default: resolve(__dirname, '..'),
  },
};

const {
  values: { input, output, sdk },
} = parseArgs({ args: process.argv.slice(2), options });

mkdirSync(dirname(output), { recursive: true });

if (sdk === 'macos' || !sdk) {
  writeFileSync(
    join(output, 'generated-elements.ts'),
    parseDeclaration(
      [
        ...readFileSync(resolve(input, 'macos/Runtime.d.ts'), 'utf-8').split(
          '\n'
        ),
        ...readFileSync(resolve(input, 'macos/AppKit.d.ts'), 'utf-8').split(
          '\n'
        ),
      ],
      'macos'
    ),
    'utf-8'
  );
}

if (sdk === 'ios' || !sdk) {
  writeFileSync(
    join(output, 'generated-elements.ts'),
    parseDeclaration(
      [
        ...readFileSync(resolve(input, 'ios/Runtime.d.ts'), 'utf-8').split(
          '\n'
        ),
        ...readFileSync(resolve(input, 'ios/UIKit.d.ts'), 'utf-8').split('\n'),
      ],
      'ios'
    ),
    'utf-8'
  );
}

/**
 * @param {Array<string>} lines
 * @param {'macos'|'ios'} sdk
 */
function parseDeclaration(lines, sdk) {
  /** @type {Map<string, string>} */
  const heredity = new Map();
  /** @type {Array<string>} */
  const imports = ['/// <reference path="./globals.types.ts" />'];
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
   * @type {{ [className: string]: { [propName: string]: { delegateName: string; isReadonly: boolean; }; }}>}
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
    const directive = parseImportDirective(line, sdk);
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

        if (field.type === 'property' && isDelegateField(field)) {
          const record = delegatesByClass[current.className] ?? {};
          record[field.name] = {
            delegateName: field.value,
            isReadonly: field.isReadonly,
          };
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

  // Note: also filters out ineligible classes.
  const sortedClasses = [...sortClasses(classes, heredity)];

  const processedClasses = sortedClasses.map(
    ({ header, className, contents, footer, fields }) => {
      /** @type {{ [propName: string]: { delegateName: string; isReadonly: boolean; }; }} */
      const delegatesByClassValue = delegatesByClass[className] ?? {};

      const delegateLazyInits = Object.keys(delegatesByClassValue).map(
        (propName) => {
          const { delegateName, isReadonly } = delegatesByClassValue[propName];
          const impl = `${delegateName}Impl`;

          if (isReadonly) {
            // TODO: find out whether we can adorn existing delegate
            // implementations at runtime, or whether it's a required use-case
            // in the first place.
            return [
              `  get ${propName}(): ${impl} {`,
              '    // delegate is readonly, so not lazy-initialized.',
              `    return this.nativeObject.${propName} as ${impl};`,
              '  }',
            ].join('\n');
          }

          return [
            `  get ${propName}(): ${impl} {`,
            `    if(!this.nativeObject.${propName}){`,
            `      this.nativeObject.${propName} = ${impl}.new();`,
            '    }',
            `    return this.nativeObject.${propName} as ${impl};`,
            '  }',
          ].join('\n');
        }
      );

      const delegateMethods = Object.keys(delegatesByClassValue).flatMap(
        (propName) => {
          const { delegateName } = delegatesByClassValue[propName];
          const delegateMeta = delegatesRecord[delegateName];
          if (!delegateMeta?.fields.length) {
            return [];
          }

          return delegateMeta.fields
            .map((field) => {
              if (field.type === 'property') {
                return [
                  '  // TODO: check whether proxying delegate properties actually works',
                  // prettier-ignore
                  `  set ${field.name}(value: ${field.value}) {`,
                  `    this.${propName}.${field.name} = value;`,
                  '  }',
                ].join('\n');
              }

              if (field.type === 'method') {
                return [
                  // prettier-ignore
                  `  set ${field.name}(value: (${field.args}) => ${field.returnType}) {`,
                  `    this.${propName}.${field.name} = value;`,
                  '  }',
                ].join('\n');
              }

              return '';
            })
            .filter((statement) => !!statement);
        }
      );

      let nodeOps = '';
      switch (className) {
        case 'NSSplitView':
        case 'NSStackView':
          nodeOps = `
  protected get nativeChildNodesImpl(): NSArray {
    return this.nativeObject.arrangedSubviews;
  }

  protected nativeAppendChildImpl<T extends HTMLNativeObjectElement>(node: T): void {
    if(!(node.nativeObject instanceof NSView)){
      throw new Error("Expected NSView");
    }
    this.nativeObject.addArrangedSubview(node.nativeObject);
  }

  protected nativeRemoveChildImpl<T extends HTMLNativeObjectElement>(child: T): void {
    if(!(child.nativeObject instanceof NSView)){
      throw new Error("Expected NSView");
    }
    this.nativeObject.removeArrangedSubview(child.nativeObject);
  }

  protected nativeInsertAtIndexImpl<T extends HTMLNativeObjectElement>(newNode: T, index: number): void {
    if(!(newNode.nativeObject instanceof NSView)){
      throw new Error("Expected NSView");
    }
    this.nativeObject.insertArrangedSubviewAtIndex(newNode.nativeObject, index);
  }
`.slice('\n'.length);
          break;
        case 'NSView':
          nodeOps = `
  protected get nativeChildNodesImpl(): NSArray<NSView> {
    return this.nativeObject.subviews;
  }

  protected nativeAppendChildImpl<T extends HTMLNativeObjectElement>(node: T): void {
    const view = node.nativeView;
    if(!(view instanceof NSView)){
      throw new Error("Expected NSView");
    }
    this.nativeObject.addSubview(view);
  }

  protected nativeRemoveChildImpl<T extends HTMLNativeObjectElement>(child: T): void {
    const view = child.nativeView;
    if(!(view instanceof NSView)){
      throw new Error("Expected NSView");
    }
    view.removeFromSuperview();
  }

  // TODO: implement solution for nativeInsertAtIndexImpl
`.slice('\n'.length);
          break;
        case 'NSSplitViewController':
          nodeOps = `
  // view seems to show more life than splitView, but still not sure.
  declare viewKey: "view";
  static {
    this.prototype.viewKey = "view";
  }

  protected get nativeChildNodesImpl(): NSArray<NSSplitViewItem> {
    return this.nativeObject.splitViewItems;
  }

  protected nativeAppendChildImpl<T extends HTMLNativeObjectElement>(node: T): void {
    if(!(node.nativeObject instanceof NSSplitViewItem)){
      throw new Error("Expected NSSplitViewItem");
    }
    this.nativeObject.addSplitViewItem(node.nativeObject);
  }

  protected nativeRemoveChildImpl<T extends HTMLNativeObjectElement>(child: T): void {
    if(!(child.nativeObject instanceof NSSplitViewItem)){
      throw new Error("Expected NSSplitViewItem");
    }
    this.nativeObject.removeSplitViewItem(child.nativeObject);
  }

  protected nativeInsertAtIndexImpl<T extends HTMLNativeObjectElement>(newNode: T, index: number): void {
    if(!(newNode.nativeObject instanceof NSSplitViewItem)){
      throw new Error("Expected NSSplitViewItem");
    }
    this.nativeObject.insertSplitViewItemAtIndex(newNode.nativeObject, index);
  }
`.slice('\n'.length);
          break;
        // TODO: Could add a convenience function for getting number of native
        // child nodes (given that we only wanted to read
        // this.nativeObject.numberOfRows in the first place, so building the
        // array is wasteful).
        case 'NSGridView':
          nodeOps = `
  protected nativeAppendChildImpl<T extends HTMLNativeObjectElement>(node: T): void {
    if(node instanceof HTMLNSGridRowElement){
      node.replaceNativeObject(this.nativeObject.addRowWithViews(this.getRowCells(node)));
      return;
    }
    if(node instanceof HTMLNSGridColumnElement){
      node.replaceNativeObject(this.nativeObject.addColumnWithViews(this.getColumnCells(node)));
      return;
    }

    throw new Error("Expected HTMLNSGridRowElement or HTMLNSGridColumnElement");
  }

  protected nativeRemoveChildImpl<T extends HTMLNativeObjectElement>(child: T): void {
    if(child instanceof HTMLNSGridRowElement){
      this.nativeObject.removeRowAtIndex(this.nativeObject.indexOfRow(child.nativeObject));
      return;
    }
    if(child instanceof HTMLNSGridColumnElement){
      this.nativeObject.removeColumnAtIndex(this.nativeObject.indexOfColumn(child.nativeObject));
      return;
    }

    throw new Error("Expected HTMLNSGridRowElement or HTMLNSGridColumnElement");
  }

  protected nativeInsertAtIndexImpl<T extends HTMLNativeObjectElement>(newNode: T, index: number): void {
    if(newNode instanceof HTMLNSGridRowElement){
      newNode.replaceNativeObject(this.nativeObject.insertRowAtIndexWithViews(index, this.getRowCells(newNode)));
      return;
    }
    if(newNode instanceof HTMLNSGridColumnElement){
      newNode.replaceNativeObject(this.nativeObject.insertColumnAtIndexWithViews(index, this.getColumnCells(newNode)));
      return;
    }

    throw new Error("Expected HTMLNSGridRowElement or HTMLNSGridColumnElement");
  }

  private getRowCells(row: HTMLNSGridRowElement): NSMutableArray {
    return (row as any).nativeChildNodesImpl;
  }

  private getColumnCells(col: HTMLNSGridColumnElement): NSMutableArray {
    return (col as any).nativeChildNodesImpl;
  }
`.slice('\n'.length);
          break;
        case 'NSGridRow':
          nodeOps = `
  protected get nativeChildNodesImpl(): NSMutableArray<NSGridCell> {
    const mutableArr = NSMutableArray.new<typeof NSMutableArray<NSGridCell>>();
    for(let i = 0, count = this.nativeObject.numberOfCells; i < count; i++){
      mutableArr.addObject(this.nativeObject.cellAtIndex(i));
    }
    return mutableArr;
  }

  protected nativeAppendChildImpl<T extends HTMLNativeObjectElement>(node: T): void {
    if(!(node instanceof HTMLNSGridCellElement)){
      throw new Error("Expected HTMLNSGridCellElement");
    }

    const currentCells = this.nativeChildNodesImpl;
    currentCells.addObject(node.nativeObject);
    this.regenerateRowWithCells(currentCells);
  }

  protected nativeRemoveChildImpl<T extends HTMLNativeObjectElement>(child: T): void {
    if(!(child instanceof HTMLNSGridCellElement)){
      throw new Error("Expected HTMLNSGridCellElement");
    }

    const currentCells = this.nativeChildNodesImpl;
    currentCells.removeObject(child.nativeObject);
    this.regenerateRowWithCells(currentCells);
  }

  protected nativeInsertAtIndexImpl<T extends HTMLNativeObjectElement>(newNode: T, index: number): void {
    if(!(newNode instanceof HTMLNSGridCellElement)){
      throw new Error("Expected HTMLNSGridCellElement");
    }

    const currentCells = this.nativeChildNodesImpl;
    currentCells.insertObjectAtIndex(newNode.nativeObject, index);
    this.regenerateRowWithCells(currentCells);
  }

  /**
   * NSGridRow lacks an API to add cells, so we need to discard the current row
   * and build a new one.
   */
  private regenerateRowWithCells(cells: NSArray<NSGridCell>) {
    if(!(this.parentNode instanceof HTMLNSGridViewElement)){
      // Can only regenerate NSGridRow when parented by an NSGridView.
      return;
    }

    // Regenerate NSGridRow
    const rowIndex = this.parentNode.nativeObject.indexOfRow(this.nativeObject);
    this.parentNode.nativeObject.removeRowAtIndex(rowIndex);

    const cellViews = new Array<NSView>();
    for(let i = 0, count = cells.count; i < count; i++){
      cellViews.push(cells.objectAtIndex(i).contentView);
    }
    this.replaceNativeObject(this.parentNode.nativeObject.insertRowAtIndexWithViews(rowIndex, cellViews));

    // Regenerate NSGridCells
    let i = 0;
    for(const node of this.childNodes){
      if(!(node instanceof HTMLNSGridCellElement)){
        // Skip Comment nodes, etc.
        continue;
      }

      node.replaceNativeObject(this.nativeObject.cellAtIndex(i));
      i++;
    }
  }

  replaceNativeObject(nativeObject: NSGridRow): void {
    nativeObject.yPlacement = this.nativeObject.yPlacement;
    nativeObject.rowAlignment = this.nativeObject.rowAlignment;
    nativeObject.height = this.nativeObject.height;
    nativeObject.topPadding = this.nativeObject.topPadding;
    nativeObject.bottomPadding = this.nativeObject.bottomPadding;
    nativeObject.isHidden = this.nativeObject.isHidden;

    this.nativeObject = nativeObject;
  }
`.slice('\n'.length);
          break;
        case 'NSGridColumn':
          nodeOps = `
  protected get nativeChildNodesImpl(): NSMutableArray<NSGridCell> {
    const mutableArr = NSMutableArray.new<typeof NSMutableArray<NSGridCell>>();
    for(let i = 0, count = this.nativeObject.numberOfCells; i < count; i++){
      mutableArr.addObject(this.nativeObject.cellAtIndex(i));
    }
    return mutableArr;
  }

  protected nativeAppendChildImpl<T extends HTMLNativeObjectElement>(node: T): void {
    if(!(node instanceof HTMLNSGridCellElement)){
      throw new Error("Expected HTMLNSGridCellElement");
    }

    const currentCells = this.nativeChildNodesImpl;
    currentCells.addObject(node.nativeObject);
    this.regenerateColumnWithCells(currentCells);
  }

  protected nativeRemoveChildImpl<T extends HTMLNativeObjectElement>(child: T): void {
    if(!(child instanceof HTMLNSGridCellElement)){
      throw new Error("Expected HTMLNSGridCellElement");
    }

    const currentCells = this.nativeChildNodesImpl;
    currentCells.removeObject(child.nativeObject);
    this.regenerateColumnWithCells(currentCells);
  }

  protected nativeInsertAtIndexImpl<T extends HTMLNativeObjectElement>(newNode: T, index: number): void {
    if(!(newNode instanceof HTMLNSGridCellElement)){
      throw new Error("Expected HTMLNSGridCellElement");
    }

    const currentCells = this.nativeChildNodesImpl;
    currentCells.insertObjectAtIndex(newNode.nativeObject, index);
    this.regenerateColumnWithCells(currentCells);
  }

  /**
   * NSGridColumn lacks an API to add cells, so we need to discard the current
   * column and build a new one.
   */
  private regenerateColumnWithCells(cells: NSArray<NSGridCell>) {
    if(!(this.parentNode instanceof HTMLNSGridViewElement)){
      // Can only regenerate NSGridColumn when parented by an NSGridView.
      return;
    }

    // Regenerate NSGridColumn
    const columnIndex = this.parentNode.nativeObject.indexOfColumn(this.nativeObject);
    this.parentNode.nativeObject.removeColumnAtIndex(columnIndex);

    const cellViews = new Array<NSView>();
    for(let i = 0, count = cells.count; i < count; i++){
      cellViews.push(cells.objectAtIndex(i).contentView);
    }
    this.replaceNativeObject(this.parentNode.nativeObject.insertColumnAtIndexWithViews(columnIndex, cellViews));

    // Regenerate NSGridCells
    let i = 0;
    for(const node of this.childNodes){
      if(!(node instanceof HTMLNSGridCellElement)){
        // Skip Comment nodes, etc.
        continue;
      }

      node.replaceNativeObject(this.nativeObject.cellAtIndex(i));
      i++;
    }
  }

  /**
   * Sets a new value for this.nativeObject, copying all the previous state over
   * to it. For use by the library, not users.
   * @private
   */
  replaceNativeObject(nativeObject: NSGridColumn): void {
    nativeObject.xPlacement = this.nativeObject.xPlacement;
    nativeObject.width = this.nativeObject.width;
    nativeObject.leadingPadding = this.nativeObject.leadingPadding;
    nativeObject.trailingPadding = this.nativeObject.trailingPadding;
    nativeObject.isHidden = this.nativeObject.isHidden;

    this.nativeObject = nativeObject;
  }
`.slice('\n'.length);
          break;
        case 'NSGridCell':
          nodeOps = `
  declare childSlot: 'contentView';
  static {
    this.prototype.childSlot = 'contentView';
  }

  /**
   * Sets a new value for this.nativeObject, copying all the previous state over
   * to it. For use by the library, not users.
   * @private
   */
  replaceNativeObject(nativeObject: NSGridCell): void {
    nativeObject.xPlacement = this.nativeObject.xPlacement;
    nativeObject.yPlacement = this.nativeObject.yPlacement;
    nativeObject.rowAlignment = this.nativeObject.rowAlignment;
    nativeObject.customPlacementConstraints = this.nativeObject.customPlacementConstraints;

    this.nativeObject = nativeObject;
  }
`.slice('\n'.length);
          break;
        case 'NSTabView':
          nodeOps = `
  protected get nativeChildNodesImpl(): NSArray {
    return this.nativeObject.tabViewItems;
  }

  protected nativeAppendChildImpl<T extends HTMLNativeObjectElement>(node: T): void {
    if(!(node.nativeObject instanceof NSTabViewItem)){
      throw new Error("Expected NSTabViewItem.");
    }
    this.nativeObject.addTabViewItem(node.nativeObject);
  }

  protected nativeRemoveChildImpl<T extends HTMLNativeObjectElement>(child: T): void {
    if(!(child.nativeObject instanceof NSTabViewItem)){
      throw new Error("Expected NSTabViewItem.");
    }
    this.nativeObject.removeTabViewItem(child.nativeObject);
  }

  protected nativeInsertAtIndexImpl<T extends HTMLNativeObjectElement>(newNode: T, index: number): void {
    if(!(newNode.nativeObject instanceof NSTabViewItem)){
      throw new Error("Expected NSTabViewItem.");
    }
    this.nativeObject.insertTabViewItemAtIndex(newNode.nativeObject, index);
  }
`.slice('\n'.length);
          break;
        case 'NSScrollView':
          nodeOps = `
  declare childSlot: 'documentView';
  static {
    this.prototype.childSlot = 'documentView';
  }
`.slice('\n'.length);
          break;
        // TODO: support the static constructor methods somehow
        case 'NSSplitViewItem':
          nodeOps = `
  // We avoid the childSlot approach because we want to call regenerateItem, not
  // simply set a value on a key.
  // declare childSlot: 'viewController';
  // static {
  //   this.prototype.childSlot = 'viewController';
  // }

  // FIXME: Svelte appends from trunk to leaf, so
  // -[NSSplitViewController addSplitViewItem:] runs before we can populate our
  // child.
  protected nativeAppendChildImpl<T extends HTMLNativeObjectElement>(node: T): void {
    if(!(node instanceof HTMLNSViewControllerElement)){
      throw new Error("Expected HTMLNSViewControllerElement");
    }

    this.regenerateItem(node.nativeObject);
  }

  protected nativeRemoveChildImpl<T extends HTMLNativeObjectElement>(child: T): void {
    if(!(child instanceof HTMLNSViewControllerElement)){
      throw new Error("Expected HTMLNSViewControllerElement");
    }

    // You can't set the viewController to null, so best we can do is regenerate
    // with a blank viewController.
    this.regenerateItem(NSViewController.new());
  }

  protected nativeInsertAtIndexImpl<T extends HTMLNativeObjectElement>(newNode: T, index: number): void {
    if(!(newNode instanceof HTMLNSViewControllerElement)){
      throw new Error("Expected HTMLNSViewControllerElement");
    }

    this.regenerateItem(newNode.nativeObject);
  }

  /**
   * NSSplitViewItem can only be (usefully) made using factory methods, so we
   * have to create a new one and transfer styles if the type changes.
   */
  private regenerateItem(
    childViewController: NSViewController,
    behavior: typeof NSSplitViewItemBehavior[keyof typeof NSSplitViewItemBehavior] = NSSplitViewItemBehavior.Default
  ) {
    let item: NSSplitViewItem;
    switch(behavior){
      case NSSplitViewItemBehavior.Default:
        item = NSSplitViewItem.splitViewItemWithViewController(childViewController);
        break;
      case NSSplitViewItemBehavior.Sidebar:
        item = NSSplitViewItem.sidebarWithViewController(childViewController);
        break;
      case NSSplitViewItemBehavior.ContentList:
        item = NSSplitViewItem.contentListWithViewController(childViewController);
        break;
      case NSSplitViewItemBehavior.Inspector:
        item = NSSplitViewItem.inspectorWithViewController(childViewController);
        break;
    }

    this.replaceNativeObject(item);
  }

  replaceNativeObject(nativeObject: NSSplitViewItem): void {
    // TODO: regenerate state

    // nativeObject.yPlacement = this.nativeObject.yPlacement;
    // nativeObject.rowAlignment = this.nativeObject.rowAlignment;
    // nativeObject.height = this.nativeObject.height;
    // nativeObject.topPadding = this.nativeObject.topPadding;
    // nativeObject.bottomPadding = this.nativeObject.bottomPadding;
    // nativeObject.isHidden = this.nativeObject.isHidden;

    // Replace the old one
    if(this.parentNode instanceof HTMLNSSplitViewControllerElement){
      this.parentNode.nativeObject.insertSplitViewItemAtIndex(
        nativeObject,
        this.parentNode.nativeObject.splitViewItems.indexOfObject(this.nativeObject),
      );
      this.parentNode.nativeObject.removeSplitViewItem(this.nativeObject);
    }

    this.nativeObject = nativeObject;
  }
`.slice('\n'.length);
          break;
        case 'NSClipView':
          nodeOps = `
  declare childSlot: 'documentView';
  static {
    this.prototype.childSlot = 'documentView';
  }
`.slice('\n'.length);
          break;
        case 'NSDrawer':
          nodeOps = `
  declare childSlot: 'contentView';
  static {
    this.prototype.childSlot = 'contentView';
  }
`.slice('\n'.length);
          break;
        case 'NSDockTile':
          nodeOps = `
  declare childSlot: 'contentView';
  static {
    this.prototype.childSlot = 'contentView';
  }
`.slice('\n'.length);
          break;
        case 'NSBox':
          nodeOps = `
  declare childSlot: 'contentView';
  static {
    this.prototype.childSlot = 'contentView';
  }
`.slice('\n'.length);
          break;
        case 'NSWindow':
          nodeOps = `
  declare childSlot: 'contentView';
  static {
    this.prototype.childSlot = 'contentView';
  }
`.slice('\n'.length);
          break;
      }

      /**
       * Attribute names that are reserved (generally because they clash with
       * HTML ones).
       */
      const reservedAttributes = new Set([
        'attributes',
        'className',
        'children',
        'childNodes',
        'parentNode',
        'parentElement',
        'style',
        'role',
        'title',
      ]);

      return [
        header,
        [
          ...contents,
          ...delegateLazyInits,
          '',
          ...(nodeOps ? [nodeOps] : []),
          ...fields
            .map((field) => {
              const unreservedName = reservedAttributes.has(field.name)
                ? `${field.name}Native`
                : field.name;

              // We'll not expose this as an attribute as we're managing it
              // ourselves.
              if (field.type === 'property') {
                if (isDelegateField(field)) {
                  return null;
                }

                // Better for users to inspect any static properties by directly
                // accessing the native class itself.
                if (field.isStatic) {
                  return null;
                }

                // Hardly foolproof, but a harmless way to resolve cases like
                // sectionIdentifier, where the underlying type is unknown.
                const maybeGeneric = field.value.endsWith('Type')
                  ? ` as ${field.value}`
                  : '';

                if (field.isReadonly) {
                  return `  get ${unreservedName}(): ${field.value} { return this.nativeObject.${field.name}${maybeGeneric}; }`;
                }

                return [
                  `  get ${unreservedName}(): ${field.value} { return this.nativeObject.${field.name}${maybeGeneric}; }`,
                  `  set ${unreservedName}(value: ${field.value}) { this.nativeObject.${field.name} = value; }`,
                ].join('\n');
              }

              if (field.type === 'getter') {
                return `  get ${unreservedName}(): ${field.returnType} { return this.nativeObject.${field.name}; }`;
              }

              if (field.type === 'setter') {
                // fields.args always uses the name 'value' in practice.
                return `  set ${unreservedName}(${field.args}) { this.nativeObject.${field.name} = value; }`;
              }

              // TODO: Should we expose methods? Given the size of the generated
              // file, holding back for now.

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
          if (field.type === 'property') {
            return `  declare ${field.isReadonly ? 'readonly ' : ''}${
              field.name
            }: ${field.value};`;
          }

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
  /**
   * The suggested tagName to use when defining this Custom Element. Used by the
   * defineCustomElement() convenience method.
   */
  static get tagName(): string {
    throw new Error("Not implemented; expected to be implemented on subclasses.");
  }

  static defineCustomElement(): void {
    customElements.define(this.tagName, this as unknown as typeof HTMLElement);
  }

  /**
   * The native object from the Obj-C runtime that this HTML Element wraps.
   */
  abstract readonly nativeObject: NativeObject;

  /**
   * Informs the parent that its view is found on a key of this.nativeObject
   * rather than this.nativeObject itself.
   */
  viewKey?: string;

  /**
   * The native view that this HTML Element wraps. Usually just the native
   * object itself, but for viewControllers, may be the view managed by it.
   */
  get nativeView(): NativeObject {
    return this.viewKey ? (this.nativeObject as any)[this.viewKey] : this.nativeObject;
  }

  /**
   * Informs the parent of the property name by which to set this node as a
   * child. If set, takes priority over all other DOM-manipulating APIs (e.g.
   * takes priority over this.nativeAppendChildImpl).
   *
   * @example
   * const view = document.createElement("ns-view");
   * view.slot = "documentView";
   *
   * const scrollView = document.createElement("ns-scrollview");
   * scrollView.appendChild(view);
   * // Evaluates:
   * // scrollView.nativeObject.documentView = view;
   */
  declare slot: string;

  /**
   * The property name to set any child with. If set, takes priority over all
   * other DOM-manipulating APIs (e.g. takes priority over
   * this.nativeAppendChildImpl) except child.slot.
   *
   * @example
   * const scrollView = document.createElement("ns-scrollview");
   * scrollView.childSlot = "documentView"
   * scrollView.appendChild(document.createElement("ns-view"));
   * // Evaluates:
   * // scrollView.nativeObject.documentView = view;
   */
  childSlot?: string;

  /**
   * Gets the native child nodes of the nativeObject.
   * @returns the child nodes, if implemented; otherwise, undefined.
   * @example
   * this.nativeChildNodesImpl();
   * // For an HTMLNSStackViewElement, returns:
   * // this.nativeObject.arrangedSubviews;
   */
  protected get nativeChildNodesImpl(): NSArray | undefined {
    return;
  }

  /**
   * Appends a native child node to the nativeObject.
   * @returns the appended child, if implemented; otherwise, undefined.
   * @example
   * this.nativeAppendChildImpl(subview);
   * // For an HTMLNSStackViewElement, evaluates:
   * // this.nativeObject.addArrangedSubview(subview);
   */
  protected nativeAppendChildImpl?<T extends HTMLNativeObjectElement>(node: T): void;

  /**
   * Removes a native child node from the nativeObject.
   * @returns the removed child, if implemented; otherwise, undefined.
   * @example
   * this.nativeRemoveChildImpl(subview);
   * // For an HTMLNSStackViewElement, evaluates:
   * // this.nativeObject.removeArrangedSubview(subview);
   */
  protected nativeRemoveChildImpl?<T extends HTMLNativeObjectElement>(child: T): void;

  /**
   * Removes the native child node at the given index from the nativeObject.
   * @returns the removed child, if implemented; otherwise, undefined.
   * @example
   * this.nativeRemoveChildAtIndexImpl(index);
   * // For an HTMLNSMenuElement, evaluates:
   * // this.nativeObject.removeItemAtIndex(index);
   */
  protected nativeRemoveChildAtIndexImpl?(index: number): void;

  /**
   * Removes a native view from its parent.
   * @example
   * // For an HTMLNSViewElement, evaluates:
   * // this.nativeObject.removeFromSuperview();
   */
  protected nativeRemoveImpl?(): void;

  // /**
  //  * Inserts a new native child before the reference native child.
  //  * @example
  //  * this.nativeInsertBeforeImpl(newNode, referenceNode);
  //  * // For an HTMLNSStackViewElement, evaluates something like:
  //  * // this.nativeObject.insertArrangedSubviewAtIndex(
  //  * //   newNode,
  //  * //   this.nativeChildNodesImpl!.indexOf(referenceNode),
  //  * // );
  //  */
  // protected nativeInsertBeforeImpl?<T extends HTMLNativeObjectElement>(newNode: T, referenceNode: NativeObject | null): void;

  /**
   * Inserts a new native child at the specified index.
   * @example
   * this.nativeInsertAtIndexImpl(newNode, index);
   * // For an HTMLNSStackViewElement, evaluates something like:
   * // this.nativeObject.insertArrangedSubviewAtIndex(newNode, index);
   */
  protected nativeInsertAtIndexImpl?<T extends HTMLNativeObjectElement>(newNode: T, index: number): void;

  /**
   * Inserts the nativeObject for the given node into the nativeSubviews array
   * at the specified index.
   * @param index a positive integer. Can be null, meaning the end of the array.
   */
  protected nativeInsertAtIndex<T extends HTMLNativeObjectElement>(node: T, index: number | null): void {
    if(index !== null && index < 0){
      throw new Error("Index must be a positive integer, or null.");
    }

    const view = node.nativeView;

    if(node.slot){
      (this.nativeObject as any)[node.slot] = view;
      return;
    }

    if(this.childSlot){
      (this.nativeObject as any)[this.childSlot] = view;
      return;
    }

    const childNodesCount = this.nativeChildNodesImpl?.count ?? null;
    if((index === childNodesCount || index === null) && this.nativeAppendChildImpl){
      this.nativeAppendChildImpl(node);
      return;
    }

    if(index === null){
      index = childNodesCount;
    }

    if(typeof index === 'number' && this.nativeInsertAtIndexImpl){
      this.nativeInsertAtIndexImpl(node, index);
      return;
    }

    // if(this.nativeInsertBeforeImpl && this.nativeChildNodesImpl){
    //   this.nativeInsertBeforeImpl(node, this.nativeChildNodesImpl.objectAtIndex(index))
    // }

    throw new Error("Unable to perform nativeInsertAtIndex as nativeAppendChildImpl, nativeChildNodesImpl, and/or nativeInsertAtIndexImpl are missing.");
  }

  appendChild<T extends Node>(node: T): T {
    const result = super.appendChild(node);
    this.nativeAppendChild(node);
    return result;
  }
  nativeAppendChild<T extends Node>(node: T): void {
    // TODO: handle Text nodes, maybe with a class called NativeText.
    if(!(node instanceof HTMLNativeObjectElement)){
      return;
    }

    this.nativeInsertAtIndex(node, null);
  }

  removeChild<T extends Node>(child: T): T {
    const result = super.appendChild(child);
    this.nativeRemoveChild(child);
    return result;
  }
  nativeRemoveChild<T extends Node>(child: T): void {
    // TODO: handle Text nodes, maybe with a class called NativeText.
    if(!(child instanceof HTMLNativeObjectElement)){
      return;
    }

    if(child.slot){
      // TODO: support custom removal method, if nulling out the property ever
      // turns out to be insufficient. UIKit had cases like
      // UINavigationController and UIViewController that may have been such.
      (this.nativeObject as any)[child.slot] = null;
      return;
    }

    if(this.childSlot){
      (this.nativeObject as any)[this.childSlot] = null;
      return;
    }

    if(this.nativeRemoveChildImpl){
      this.nativeRemoveChildImpl(child);
      return;
    }

    if(child.nativeRemoveImpl){
      child.nativeRemoveImpl();
      return;
    }

    const nativeChildNodes = this.nativeChildNodesImpl;
    if(this.nativeRemoveChildAtIndexImpl && nativeChildNodes){
      const childView = child.nativeView;
      const index = nativeChildNodes.indexOfObject(childView) ?? -1;
      if(index === -1){
        throw new Error("Unable to find specified child.");
      }

      this.nativeRemoveChildAtIndexImpl(index);
      return;
    }

    throw new Error("Unable to remove child due to lack of removal methods.");
  }

  remove(): void {
    super.remove();
    this.nativeRemove();
  }
  nativeRemove(): void {
    // TODO: handle Text nodes, maybe with a class called NativeText.
    if(!(this.parentNode instanceof HTMLNativeObjectElement)){
      return;
    }

    this.parentNode.nativeRemoveChild(this);
  }

  append(...nodes: (string | Node)[]): void {
    const processedNodes = nodes.map(
      node => typeof node === 'string' ?
        this.ownerDocument.createTextNode(node) :
        node
    );

    super.append(...processedNodes);
    this.nativeAppend(...processedNodes);
  }
  nativeAppend(...nodes: Node[]): void {
    for(const node of nodes){
      this.nativeAppendChild(node);
    }
  }

  nativePrepend(...nodes: Node[]): void {
    for(const node of nodes){
      this.nativeInsertBefore(node, this.firstChild);
    }
  }
  prepend(...nodes: (string | Node)[]): void {
    const processedNodes = nodes.map(
      node => typeof node === 'string' ?
        this.ownerDocument.createTextNode(node) :
        node
    );

    super.prepend(...processedNodes);
    this.nativePrepend(...processedNodes);
  }

  insertBefore<T extends Node>(node: T, child: Node | null): T {
    const result = super.appendChild(node);
    this.nativeInsertBefore(node, child);
    return result;
  }
  nativeInsertBefore<T extends Node>(newNode: T, referenceNode: Node | null): void {
    // TODO: handle Text nodes, maybe with a class called NativeText.
    if(!(newNode instanceof HTMLNativeObjectElement)){
      return;
    }

    if(referenceNode === null){
      this.nativeAppendChild(newNode);
      return;
    }

    if(referenceNode.parentNode !== this){
      throw new Error("Reference node is not a child of this element.");
    }

    const newView = newNode.nativeView;

    if(newNode.slot){
      (this.nativeObject as any)[newNode.slot] = newView;
      return;
    }

    if(this.childSlot){
      (this.nativeObject as any)[this.childSlot] = newView;
      return;
    }

    const nativeChildNodes = this.nativeChildNodesImpl;
    if(!nativeChildNodes){
      throw new Error("Unable to insert newNode before referenceNode because nativeChildNodesImpl is not implemented.");
    }

    let referenceNodeIndex = referenceNode instanceof HTMLNativeObjectElement ?
      nativeChildNodes.indexOfObject(referenceNode.nativeView) ?? -1 :
      -1;

    // If the referenceNode's nativeObject is not in the nativeChildNodes array
    // (e.g. because it's a Comment node), look through each nextSibling just in
    // case.
    let nextSibling = referenceNode.nextSibling;
    while(nextSibling && referenceNodeIndex === -1){
      referenceNodeIndex = nextSibling instanceof HTMLNativeObjectElement ?
        nativeChildNodes.indexOfObject(nextSibling.nativeView) ?? -1 :
        -1;
      nextSibling = nextSibling.nextSibling;
    }

    // Add it to the end, I guess?
    if(referenceNodeIndex === -1){
      this.nativeAppendChild(referenceNode);
      return;
    }

    this.nativeInsertAtIndex(newNode, referenceNodeIndex);
  }

  insertAdjacentElement(where: InsertPosition, element: Element): Element | null {
    const result = super.insertAdjacentElement(where, element);
    this.nativeInsertAdjacentElement(where, element);
    return result;
  }
  nativeInsertAdjacentElement(where: InsertPosition, element: Element): void {
    // TODO: handle Text nodes, maybe with a class called NativeText.
    if((element instanceof HTMLNativeObjectElement)){
      return;
    }

    throw new Error("Not implemented");
  }

  insertAdjacentHTML(position: InsertPosition, text: string): void {
    super.insertAdjacentHTML(position, text);
    this.nativeInsertAdjacentHTML(position, text);
  }
  nativeInsertAdjacentHTML(position: InsertPosition, text: string): void {
    throw new Error("Not implemented");
  }

  insertAdjacentText(where: InsertPosition, data: string): void {
    super.insertAdjacentText(where, data);
    this.nativeInsertAdjacentText(where, data);
  }
  nativeInsertAdjacentText(where: InsertPosition, data: string): void {
    throw new Error("Not implemented");
  }

  replaceChild<T extends Node>(node: Node, child: T): T {
    // TODO: review all cases to decide whether native actions should always
    // precede non-native ones, or just for removals.
    this.nativeReplaceChild(node, child);
    const result = super.replaceChild(node, child);
    return result;
  }
  nativeReplaceChild<T extends Node>(newChild: Node, oldChild: T): void {
    // TODO: handle Text nodes, maybe with a class called NativeText.
    if(!(newChild instanceof HTMLNativeObjectElement)){
      return;
    }

    const newView = newChild.nativeView;

    if(newChild.slot){
      // TODO: here we simply assign over the old value, but we may find cases
      // where we need to support custom assignment.
      (this.nativeObject as any)[newChild.slot] = newView;
      return;
    }

    if(this.childSlot){
      (this.nativeObject as any)[this.childSlot] = newView;
      return;
    }

    this.nativeInsertBefore(newChild, oldChild);

    if(!(oldChild instanceof HTMLNativeObjectElement)){
      return;
    }

    this.nativeRemoveChild(oldChild);
  }

  replaceWith(...nodes: (string | Node)[]): void {
    const processedNodes = nodes.map(
      node => typeof node === 'string' ?
        this.ownerDocument.createTextNode(node) :
        node
    );
    // TODO: handle Text nodes, maybe with a class called NativeText.
    const hasNativeNode = processedNodes.some(
      node => node instanceof HTMLNativeObjectElement
    );

    if(hasNativeNode){
      if(!(this.parentNode instanceof HTMLNativeObjectElement)){
        throw new Error("Can't replace native nodes unless parent is a HTMLNativeObjectElement.");
      }

      for(const node of processedNodes){
        this.parentNode.nativeInsertBefore(node, this);
      }
      this.nativeRemove();
    }

    super.replaceWith(...processedNodes);
  }

  replaceChildren(...nodes: (string | Node)[]): void {
    const processedNodes = nodes.map(
      node => typeof node === 'string' ?
        this.ownerDocument.createTextNode(node) :
        node
    );

    for(const child of this.childNodes){
      this.nativeRemoveChild(child);
    }

    for(const node of processedNodes){
      this.nativeAppendChild(node);
    }

    super.replaceChildren(...processedNodes);
  }
}
`.trim();

  const tagNameMap = sortedClasses
    .sort((a, b) => {
      const lowerA = a.className.toLowerCase();
      const lowerB = b.className.toLowerCase();

      if (lowerA === lowerB) {
        return 0;
      }

      return lowerA > lowerB ? 1 : -1;
    })
    .map(({ className }) => {
      let tagName = '';
      if (className.startsWith('NS')) {
        const namespace = 'ns';
        const classPortion = className.slice('ns'.length);
        tagName = `${namespace}-${classPortion}`.toLowerCase();
      } else if (className.startsWith('UI')) {
        const namespace = 'ui';
        const classPortion = className.slice('ui'.length);
        tagName = `${namespace}-${classPortion}`.toLowerCase();
      } else {
        return `    // ?: HTML${className}Element;`;
      }

      return `    "${tagName}": HTML${className}Element;`;
    })
    .join('\n');

  const uiFramework = sdk === 'ios' ? 'UIKit' : 'AppKit';

  const globalDeclarations = `
// Call e.g. HTMLNSAlertElement.defineCustomElement(); to register each Custom
// Element.
declare global {
  interface ${uiFramework}CustomElementTagNameMap {
${tagNameMap}
  }

  interface Document {
    createElement<K extends keyof ${uiFramework}CustomElementTagNameMap>(
      tagName: K,
      options?: ElementCreationOptions
    ): ${uiFramework}CustomElementTagNameMap[K];
  }
}
`.trim();

  return `
${[...new Set([...imports])].join('\n')}

${globalDeclarations}

${HTMLNSObjectElement}

${processedClasses.join('\n\n')}

// Delegates

${processedDelegates.join('\n\n')}

`.trim();
}

/**
 * @param {string} line
 * @param {'macos'|'ios'} sdk
 */
function parseImportDirective(line, sdk) {
  const match = line.match(/^\/\/\/ <reference path="(.*?)" ?\/>/);
  if (!match) {
    return null;
  }

  const [, path] = match;
  const typesPath = join(`${objcLib}/types/${sdk}`, path);
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
  classGeneric?: string;
  superclass: string;
}} ClassMeta
*/

/**
 * @param {string} line
 * @param {boolean} tsIgnoring whether the header is preceded by @ts-ignore
 */
function parseViewClassHeader(line, tsIgnoring) {
  const match = line.match(
    /^declare class (.*?)(<.*>)? extends (.*?) (?:implements (.*?) )?{/
  );
  if (!match) {
    return null;
  }

  // Warning: superclass may come from outside AppKit (NSObject).
  // Warning: class may extend a class that is only declared later on.
  const [_header, className, classGeneric, superclass, _implementees] = match;

  // We're only interested in view classes, and NSObject.
  if (
    className !== 'NSObject' &&
    (className.startsWith('OS_') ||
      className.endsWith('Protocol') ||
      superclass === 'NativeObject')
  ) {
    return null;
  }

  let shouldIgnore = tsIgnoring;

  /**
   * Allocate an instance of the given class, except for any singletons.
   * @type {string}
   */
  let factoryMethod;
  switch (className) {
    case 'NSApplication':
      factoryMethod = 'NSApplication.sharedApplication';
      break;
    case 'NSSplitViewItem':
      factoryMethod =
        'NSSplitViewItem.splitViewItemWithViewController(NSViewController.new())';
      break;
    // UIEvent name-clashes with libdom.d.ts, and UIPressesEvent extends it.
    case 'UIEvent':
    case 'UIPressesEvent':
      shouldIgnore = true;
      factoryMethod = `${className}.new()`;
      break;
    default:
      factoryMethod = `${className}.new()`;
      break;
  }

  /**
   * In some cases, the AppKit element maps very poorly to HTML so we have to
   * regenerate its child/grandchild nativeObjects.
   */
  const isNativeObjectReadonly = ![
    'NSGridRow',
    'NSGridColumn',
    'NSGridCell',
    'NSSplitViewItem',
  ].includes(className);

  const header = `export class HTML${className}Element${
    classGeneric ?? ''
  } extends HTML${superclass}Element {`;

  const tagName = /^(NS|UI)/.test(className)
    ? `  static readonly tagName: string = "${`${className.slice(
        0,
        2
      )}-${className.slice(2)}`.toLowerCase()}";`
    : [
        '  static get tagName(): string {',
        "    throw new Error(\"Unable to form tagName as the class name didn't begin with 'NS' or 'UI'\");",
        '  }',
      ].join('\n');

  const contents = [
    tagName,
    /**
     * Obj-C can express some relationships that TS can't (e.g. override some
     * methods with an incompatible signature), so we have to resort to ts-ignore
     * sometimes when TS insists that a class is incompatible with its superclass.
     */
    ...(shouldIgnore ? ['  // @ts-ignore'] : []),
    `  ${
      isNativeObjectReadonly ? 'readonly ' : ''
    }nativeObject = ${factoryMethod};`,
  ];
  const footer = '}';

  return { header, contents, footer, className, classGeneric, superclass };
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
      const isStatic = prelude.startsWith('static');
      const isReadonly = !!prelude.match(/^(static )?readonly /);

      const value = line
        .slice(fullMatch.length - (discriminator === ': (' ? '('.length : 0))
        .slice(0, -';'.length);

      return { type: 'property', isStatic, isReadonly, name, value };
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
 * @param {PropertyField} field
 */
function isDelegateField(field) {
  return /[dD]elegate$/.test(field.name) && /[dD]elegate$/.test(field.value);
}

/** @typedef {{ type: 'property'; name: string; isStatic: boolean; isReadonly: boolean; value: string; }} PropertyField */
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
  /** @type {RegExpMatchArray | null} */
  let match = null;

  // This case is weird as it not only extends a delegate but doesn't itself end
  // with the suffix "Delegate". Unique in each SDK, so not worth generalising.
  const exceptionalCase1 =
    'declare interface NSCollectionViewDelegateFlowLayout extends NSCollectionViewDelegate {';
  const exceptionalCase2 =
    'declare interface UICollectionViewDelegateFlowLayout extends UICollectionViewDelegate {';

  if (line === exceptionalCase1) {
    match = [
      exceptionalCase1,
      'NSCollectionViewDelegateFlowLayout',
      'NSCollectionViewDelegate',
      0,
      exceptionalCase1,
      undefined,
    ];
  } else if (line === exceptionalCase2) {
    match = [
      exceptionalCase2,
      'UICollectionViewDelegateFlowLayout',
      'UICollectionViewDelegate',
      0,
      exceptionalCase2,
      undefined,
    ];
  } else {
    match = line.match(/^declare interface (.*?Delegate)(?: extends (.*?))? {/);
  }

  if (!match) {
    return null;
  }

  // Warning: superinterface may itself be a delegate.
  const [_header, delegateName, superinterfaces] = match;

  const impl = `${delegateName}Impl`;

  const implHeader = `export class ${impl} extends NSObject implements ${delegateName} {`;
  // TODO: lazy-init protocol conformance (once supported)
  const implContents = [
    `  static ObjCProtocols = [${delegateName}];`,
    '  static {',
    '    NativeClass(this);',
    '  }',
  ];
  const implFooter = '}';

  return {
    implHeader,
    implContents,
    implFooter,
    delegateName,
    // While most extend NSObjectProtocol or some base delegate,
    // UISplitViewControllerDelegate actually has no superinterface at all.
    superinterfaces: superinterfaces ?? '',
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
