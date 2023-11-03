Worth reading:
https://developer.apple.com/documentation/appkit/views_and_controls?language=objc


Containers:

* √ NSGridView > NSGridRow/NSGridColumn > NSGridCell (need to support .contentView)
* √ NSSplitView
* √ NSStackView
* √ NSTabView
* √ NSScrollView > .documentView (and other customisable props like .findBarView)

Content views:

* NSBrowser > NSBrowserCell
* NSCollectionView > makes NSCollectionViewItem based on NSCollectionViewDataSource (similar to a delegate, but actually a protocol).
* NSOutlineView > makes an `id` based on NSOutlineViewDataSource.
* NSTableView > makes an NSTableCellView based on an NSTableViewDataSource.

Summary:

* `NSStackView extends NSView`, `NSSplitView extends NSView`:
  * `insertArrangedSubviewAtIndex`
* `NSSplitViewController extends NSViewController`:
  * `insertSplitViewItemAtIndex`
* `NSViewController extends NSResponder`:
  ```ts
  view: NSView;
  get childViewControllers(): NSArray;
  sourceItemView: NSView;
  ```
* `NSResponder extends NSObject`:
  ```ts
  nextResponder: NSResponder;
  menu: NSMenu;
  readonly undoManager: NSUndoManager;
  userActivity: NSUserActivity;
  touchBar: NSTouchBar;
  ```
* `NSScrollView extends NSView`, `NSClipView extends NSView`:
  ```ts
  documentView: NSView;
  contentView: NSClipView;
  documentCursor: NSCursor;
  verticalScroller: NSScroller;
  horizontalScroller: NSScroller;
  horizontalRulerView: NSRulerView;
  verticalRulerView: NSRulerView;
  findBarView: NSView;
  ```

Views that take multiple subviews:

```ts
declare class NSTableView
  extends NSControl
  implements
    NSUserInterfaceValidations,
    NSTextViewDelegate,
    NSDraggingSource,
    NSAccessibilityTable
{
  rowForView(view: NSView): number;

  columnForView(view: NSView): number;
}

declare class NSStackView extends NSView {
  readonly arrangedSubviews: NSArray;

  addArrangedSubview(view: NSView): void;

  insertArrangedSubviewAtIndex(view: NSView, index: number): void;

  removeArrangedSubview(view: NSView): void;

  readonly detachedViews: NSArray;

  addViewInGravity(view: NSView, gravity: interop.Enum<typeof NSStackViewGravity>): void;

  insertViewAtIndexInGravity(view: NSView, index: number, gravity: interop.Enum<typeof NSStackViewGravity>): void;

  removeView(view: NSView): void;

  viewsInGravity(gravity: interop.Enum<typeof NSStackViewGravity>): NSArray;

  setViewsInGravity(views: NSArray | unknown[], gravity: interop.Enum<typeof NSStackViewGravity>): void;
}

declare class NSSplitView extends NSView {
  arrangesAllSubviews: boolean;

  readonly arrangedSubviews: NSArray;

  addArrangedSubview(view: NSView): void;

  insertArrangedSubviewAtIndex(view: NSView, index: number): void;

  removeArrangedSubview(view: NSView): void;
}

declare class NSSplitViewController extends NSViewController implements NSSplitViewDelegate, NSUserInterfaceValidations {
  splitView: NSSplitView;

  get splitViewItems(): NSArray;
  set splitViewItems(value: NSArray | unknown[]);

  addSplitViewItem(splitViewItem: NSSplitViewItem): void;

  insertSplitViewItemAtIndex(splitViewItem: NSSplitViewItem, index: number): void;

  removeSplitViewItem(splitViewItem: NSSplitViewItem): void;

  splitViewItemForViewController(viewController: NSViewController): NSSplitViewItem;
}

declare class NSScrollView extends NSView implements NSTextFinderBarContainer {
  addFloatingSubviewForAxis(view: NSView, axis: interop.Enum<typeof NSEventGestureAxis>): void;
}

declare class NSMenu extends NSObject implements NSCopying, NSCoding, NSUserInterfaceItemIdentification, NSAppearanceCustomization, NSAccessibilityElementProtocol, NSAccessibility {
  insertItemAtIndex(newItem: NSMenuItem, index: number): void;

  addItem(newItem: NSMenuItem): void;

  insertItemWithTitleActionKeyEquivalentAtIndex(string: NSString | string, selector: string | null, charCode: NSString | string, index: number): NSMenuItem;

  addItemWithTitleActionKeyEquivalent(string: NSString | string, selector: string | null, charCode: NSString | string): NSMenuItem;

  removeItemAtIndex(index: number): void;

  removeItem(item: NSMenuItem): void;

  setSubmenuForItem(menu: NSMenu | null, item: NSMenuItem): void;

  removeAllItems(): void;

  get itemArray(): NSArray;
  set itemArray(value: NSArray | unknown[]);

  readonly numberOfItems: number;

  itemAtIndex(index: number): NSMenuItem;

  indexOfItem(item: NSMenuItem): number;

  indexOfItemWithTitle(title: NSString | string): number;

  indexOfItemWithTag(tag: number): number;

  indexOfItemWithRepresentedObject(object: interop.Object | null): number;

  indexOfItemWithSubmenu(submenu: NSMenu | null): number;

  indexOfItemWithTargetAndAction(target: interop.Object | null, actionSelector: string | null): number;
}

declare class NSDocumentController extends NSObject implements NSCoding, NSMenuItemValidation, NSUserInterfaceValidations {
  static readonly sharedDocumentController: NSDocumentController;

  init(): this;

  initWithCoder(coder: NSCoder): this;

  readonly documents: NSArray;

  readonly currentDocument: NSDocument;

  readonly currentDirectory: NSString;

  documentForURL(url: NSURL): NSDocument;

  documentForWindow(window: NSWindow): NSDocument;

  addDocument(document: NSDocument): void;

  removeDocument(document: NSDocument): void;

  newDocument(sender: interop.Object | null): void;
}

declare class NSView extends NSResponder implements NSAnimatablePropertyContainer, NSUserInterfaceItemIdentification, NSDraggingDestination, NSAppearanceCustomization, NSAccessibilityElementProtocol, NSAccessibility {
  get subviews(): NSArray;
  set subviews(value: NSArray | unknown[]);

  addSubview(view: NSView): void;

  addSubviewPositionedRelativeTo(view: NSView, place: interop.Enum<typeof NSWindowOrderingMode>, otherView: NSView | null): void;

  removeFromSuperview(): void;

  replaceSubviewWith(oldView: NSView, newView: NSView): void;

  removeFromSuperviewWithoutNeedingDisplay(): void;
}
```

Views that take individual semantic subviews:

```ts
declare class NSMenuToolbarItem extends NSToolbarItem {
  menu: NSMenu;

  showsIndicator: boolean;
}
```

All methods starting with `add`:
```ts
addAnnotationsRange(annotations: NSDictionary | Record<string, unknown>, range: _NSRange): void;
addWindow(window: NSWindow): void;
addItemWithObjectValue(object: interop.Object): void;
addItemsWithObjectValues(objects: NSArray | unknown[]): void;
addCollectionOptions(collectionName: NSString | string, collectionOptions: interop.Enum<typeof NSFontCollectionOptions>): boolean;
addFontDescriptorsToCollection(descriptors: NSArray | unknown[], collectionName: NSString | string): void;
addFontTrait(sender: interop.Object | null): void;
addSymbolEffect(symbolEffect: NSSymbolEffect): void;
addSymbolEffectOptions(symbolEffect: NSSymbolEffect, options: NSSymbolEffectOptions): void;
addSymbolEffectOptionsAnimated(symbolEffect: NSSymbolEffect, options: NSSymbolEffectOptions, animated: boolean): void;
addMarker(marker: NSRulerMarker): void;
addLayoutManager(aLayoutManager: NSLayoutManager): void;
addButtonWithTitle(title: NSString | string): NSButton;
addSelectionIndexes(indexes: NSIndexSet): boolean;
addSelectedObjects(objects: NSArray | unknown[]): boolean;
add(sender: interop.Object | null): void;
addObject(object: interop.Object): void;
addObjects(objects: NSArray | unknown[]): void;
addObject(object: interop.Object): void;
add(sender: interop.Object | null): void;
addItemWithObjectValue(object: interop.Object): void;
addItemsWithObjectValues(objects: NSArray | unknown[]): void;
addTabViewItem(tabViewItem: NSTabViewItem): void;
addRowWithViews(views: NSArray | unknown[]): NSGridRow;
addColumnWithViews(views: NSArray | unknown[]): NSGridColumn;
addItemWithTitle(title: NSString | string): void;
addItemsWithTitles(itemTitles: NSArray | unknown[]): void;
addAccessoryController(accessoryController: NSViewController): void;
addArrangedSubview(view: NSView): void;
addColumn(): void;
addEntry(title: NSString | string): NSFormCell;
addRow(): void;
addRowWithCells(newCells: NSArray | unknown[]): void;
addColumn(): void;
addColumnWithCells(newCells: NSArray | unknown[]): void;
addQueryForDescriptors(descriptors: NSArray | unknown[]): void;
addSpeechDictionary(speechDictionary: NSDictionary | Record<string, unknown>): void;
addTabStop(anObject: NSTextTab): void;
addChildViewController(childViewController: NSViewController): void;
addWindowController(windowController: NSWindowController): void;
addFloatingSubviewForAxis(view: NSView, axis: interop.Enum<typeof NSEventGestureAxis>): void;
addItem(newItem: NSMenuItem): void;
addItemWithTitleActionKeyEquivalent(string: NSString | string, selector: string | null, charCode: NSString | string): NSMenuItem;
addTypesOwner(newTypes: NSArray | unknown[], newOwner: interop.Object | null): number;
addTitlebarAccessoryViewController(childViewController: NSTitlebarAccessoryViewController): void;
addChildWindowOrdered(childWin: NSWindow, place: interop.Enum<typeof NSWindowOrderingMode>): void;
addTabbedWindowOrdered(window: NSWindow, ordered: interop.Enum<typeof NSWindowOrderingMode>): void;
addProgressMark(progressMark: number): void;
addRow(sender: interop.Object | null): void;
addAccessoryController(accessoryController: NSViewController): void;
addRenderingAttributeValueForTextRange(renderingAttribute: NSString | string, value: interop.Object | null, textRange: NSTextRange): void;
addDocument(document: NSDocument): void;
addTextContainer(container: NSTextContainer): void;
addTemporaryAttributesForCharacterRange(attrs: NSDictionary | Record<string, unknown>, charRange: _NSRange): void;
addTemporaryAttributeValueForCharacterRange(attrName: NSString | string, value: interop.Object, charRange: _NSRange): void;
add(sender: interop.Object | null): void;
addChild(sender: interop.Object | null): void;
addSelectionIndexPaths(indexPaths: NSArray | unknown[]): boolean;
addItemWithTitle(title: NSString | string): void;
addItemsWithTitles(itemTitles: NSArray | unknown[]): void;
addTableColumn(tableColumn: NSTableColumn): void;
addTextLayoutManager(textLayoutManager: NSTextLayoutManager): void;
addArrangedSubview(view: NSView): void;
addViewInGravity(view: NSView, gravity: interop.Enum<typeof NSStackViewGravity>): void;
addClip(): void;
addSubview(view: NSView): void;
addSubviewPositionedRelativeTo(view: NSView, place: interop.Enum<typeof NSWindowOrderingMode>, otherView: NSView | null): void;
addToolTipRectOwnerUserData(rect: CGRect, owner: interop.Object, data: interop.PointerConvertible): number;
addGestureRecognizer(gestureRecognizer: NSGestureRecognizer): void;
addTrackingArea(trackingArea: NSTrackingArea): void;
addCursorRectCursor(rect: CGRect, object: NSCursor): void;
addTrackingRectOwnerUserDataAssumeInside(rect: CGRect, owner: interop.Object, data: interop.PointerConvertible, flag: boolean): number;
addConstraint(constraint: NSLayoutConstraint): void;
addConstraints(constraints: NSArray | unknown[]): void;
addLayoutGuide(guide: NSLayoutGuide): void;
addRepresentations(imageReps: NSArray | unknown[]): void;
addRepresentation(imageRep: NSImageRep): void;
addTabViewItem(tabViewItem: NSTabViewItem): void;
addSplitViewItem(splitViewItem: NSSplitViewItem): void;
addWindowsItemTitleFilename(win: NSWindow, string: NSString | string, isFilename: boolean): void;
```

All methods starting with `remove`:

```ts
removeAnnotationRange(annotationName: NSString | string, range: _NSRange): void;
removeWindow(window: NSWindow): void;
removeItemWithObjectValue(object: interop.Object): void;
removeItemAtIndex(index: number): void;
removeAllItems(): void;
removeCollection(collectionName: NSString | string): boolean;
removeFontDescriptorFromCollection(descriptor: NSFontDescriptor, collection: NSString | string): void;
removeFontTrait(sender: interop.Object | null): void;
removeSymbolEffectOfType(symbolEffect: NSSymbolEffect): void;
removeSymbolEffectOfTypeOptions(symbolEffect: NSSymbolEffect, options: NSSymbolEffectOptions): void;
removeSymbolEffectOfTypeOptionsAnimated(symbolEffect: NSSymbolEffect, options: NSSymbolEffectOptions, animated: boolean): void;
removeAllSymbolEffects(): void;
removeAllSymbolEffectsWithOptions(options: NSSymbolEffectOptions): void;
removeAllSymbolEffectsWithOptionsAnimated(options: NSSymbolEffectOptions, animated: boolean): void;
removeMarker(marker: NSRulerMarker): void;
removeContextHelpForObject(object: interop.Object): void;
removeLayoutManager(aLayoutManager: NSLayoutManager): void;
removeSelectionIndexes(indexes: NSIndexSet): boolean;
removeSelectedObjects(objects: NSArray | unknown[]): boolean;
remove(sender: interop.Object | null): void;
removeObjectAtArrangedObjectIndex(index: number): void;
removeObjectsAtArrangedObjectIndexes(indexes: NSIndexSet): void;
removeObject(object: interop.Object): void;
removeObjects(objects: NSArray | unknown[]): void;
removeObject(object: interop.Object): void;
remove(sender: interop.Object | null): void;
removeItemWithObjectValue(object: interop.Object): void;
removeItemAtIndex(index: number): void;
removeAllItems(): void;
removeTabViewItem(tabViewItem: NSTabViewItem): void;
removeItemsAtIndexesInParentWithAnimation(indexes: NSIndexSet, parent: interop.Object | null, animationOptions: interop.Enum<typeof NSTableViewAnimationOptions>): void;
removeRowAtIndex(index: number): void;
removeColumnAtIndex(index: number): void;
removeItemWithTitle(title: NSString | string): void;
removeItemAtIndex(index: number): void;
removeAllItems(): void;
removeAccessoryController(accessoryController: NSViewController): void;
removeArrangedSubview(view: NSView): void;
removeItemsAtIndexes(indexes: NSIndexSet): void;
removeEntryAtIndex(index: number): void;
removeRow(row: number): void;
removeColumn(col: number): void;
removeQueryForDescriptors(descriptors: NSArray | unknown[]): void;
removeTabStop(anObject: NSTextTab): void;
removeFromParentViewController(): void;
removeChildViewControllerAtIndex(index: number): void;
removeColorWithKey(key: NSString | string): void;
removeFile(): void;
removeWindowController(windowController: NSWindowController): void;
removeItemAtIndex(index: number): void;
removeItem(item: NSMenuItem): void;
removeAllItems(): void;
removeStatusItem(item: NSStatusItem): void;
removeTitlebarAccessoryViewControllerAtIndex(index: number): void;
removeChildWindow(childWin: NSWindow): void;
removeProgressMark(progressMark: number): void;
removeRowAtIndex(rowIndex: number): void;
removeRowsAtIndexesIncludeSubrows(rowIndexes: NSIndexSet, includeSubrows: boolean): void;
removeAccessoryController(accessoryController: NSViewController): void;
removeRenderingAttributeForTextRange(renderingAttribute: NSString | string, textRange: NSTextRange): void;
removeDocument(document: NSDocument): void;
removeTextContainerAtIndex(index: number): void;
removeTemporaryAttributeForCharacterRange(attrName: NSString | string, charRange: _NSRange): void;
remove(sender: interop.Object | null): void;
removeObjectAtArrangedObjectIndexPath(indexPath: NSIndexPath): void;
removeObjectsAtArrangedObjectIndexPaths(indexPaths: NSArray | unknown[]): void;
removeSelectionIndexPaths(indexPaths: NSArray | unknown[]): boolean;
removeItemWithTitle(title: NSString | string): void;
removeItemAtIndex(index: number): void;
removeAllItems(): void;
removeTableColumn(tableColumn: NSTableColumn): void;
removeRowsAtIndexesWithAnimation(indexes: NSIndexSet, animationOptions: interop.Enum<typeof NSTableViewAnimationOptions>): void;
removeTextLayoutManager(textLayoutManager: NSTextLayoutManager): void;
removeArrangedSubview(view: NSView): void;
removeView(view: NSView): void;
removeAllPoints(): void;
removeFromSuperview(): void;
removeFromSuperviewWithoutNeedingDisplay(): void;
removeToolTip(tag: number): void;
removeAllToolTips(): void;
removeGestureRecognizer(gestureRecognizer: NSGestureRecognizer): void;
removeTrackingArea(trackingArea: NSTrackingArea): void;
removeCursorRectCursor(rect: CGRect, object: NSCursor): void;
removeTrackingRect(tag: number): void;
removeConstraint(constraint: NSLayoutConstraint): void;
removeConstraints(constraints: NSArray | unknown[]): void;
removeLayoutGuide(guide: NSLayoutGuide): void;
removeRepresentation(imageRep: NSImageRep): void;
removeItemAtIndex(index: number): void;
removeTabViewItem(tabViewItem: NSTabViewItem): void;
removeSplitViewItem(splitViewItem: NSSplitViewItem): void;
removeWindowsItem(win: NSWindow): void;
```

All methods starting with `insert`:

```ts
insertText?(insertString: interop.Object): void;
insertTab?(sender: interop.Object | null): void;
insertBacktab?(sender: interop.Object | null): void;
insertNewline?(sender: interop.Object | null): void;
insertParagraphSeparator?(sender: interop.Object | null): void;
insertNewlineIgnoringFieldEditor?(sender: interop.Object | null): void;
insertTabIgnoringFieldEditor?(sender: interop.Object | null): void;
insertLineBreak?(sender: interop.Object | null): void;
insertContainerBreak?(sender: interop.Object | null): void;
insertSingleQuoteIgnoringSubstitution?(sender: interop.Object | null): void;
insertDoubleQuoteIgnoringSubstitution?(sender: interop.Object | null): void;
insertTextClient(string: interop.Object, sender: interop.Object): void;
insertText(string: interop.Object): void;
insertTextReplacementRange(string: interop.Object, replacementRange: _NSRange): void;
insertNewButtonImageIn(newButtonImage: NSImage, buttonCell: NSButtonCell): void;
insertGlyphsLengthForStartingGlyphAtIndexCharacterIndex(glyphs: interop.PointerConvertible, length: number, glyphIndex: number, charIndex: number): void;
insertWindowAtIndex(window: NSWindow, index: number): void;
insertItemWithObjectValueAtIndex(object: interop.Object, index: number): void;
insertItemsWithIdentifiersBeforeItemWithIdentifier(identifiers: NSArray | unknown[], itemIdentifier: interop.Object): void;
insertItemsWithIdentifiersAfterItemWithIdentifier(identifiers: NSArray | unknown[], itemIdentifier: interop.Object): void;
insertSectionsWithIdentifiersBeforeSectionWithIdentifier(sectionIdentifiers: NSArray | unknown[], toSectionIdentifier: interop.Object): void;
insertSectionsWithIdentifiersAfterSectionWithIdentifier(sectionIdentifiers: NSArray | unknown[], toSectionIdentifier: interop.Object): void;
insert(sender: interop.Object | null): void;
insertObjectAtArrangedObjectIndex(object: interop.Object, index: number): void;
insertObjectsAtArrangedObjectIndexes(objects: NSArray | unknown[], indexes: NSIndexSet): void;
insertItemWithObjectValueAtIndex(object: interop.Object, index: number): void;
insertTabViewItemAtIndex(tabViewItem: NSTabViewItem, index: number): void;
insertItemsAtIndexesInParentWithAnimation(indexes: NSIndexSet, parent: interop.Object | null, animationOptions: interop.Enum<typeof NSTableViewAnimationOptions>): void;
insertRowAtIndexWithViews(index: number, views: NSArray | unknown[]): NSGridRow;
insertColumnAtIndexWithViews(index: number, views: NSArray | unknown[]): NSGridColumn;
insertItemWithTitleAtIndex(title: NSString | string, index: number): void;
insertArrangedSubviewAtIndex(view: NSView, index: number): void;
insertItemsAtIndexes(indexes: NSIndexSet): void;
insertTextClient(string: interop.Object, sender: interop.Object): void;
insertNewButtonImageIn(newButtonImage: NSImage, buttonCell: NSButtonCell): void;
insertEntryAtIndex(title: NSString | string, index: number): NSFormCell;
insertRow(row: number): void;
insertRowWithCells(row: number, newCells: NSArray | unknown[] | null): void;
insertColumn(column: number): void;
insertColumnWithCells(column: number, newCells: NSArray | unknown[] | null): void;
insertSections(sections: NSIndexSet): void;
insertItemsAtIndexPaths(indexPaths: NSSet): void;
insertChildViewControllerAtIndex(childViewController: NSViewController, index: number): void;
insertColorKeyAtIndex(color: NSColor, key: NSString | string, loc: number): void;
insertText(string: interop.Object): void;
insertItemAtIndex(newItem: NSMenuItem, index: number): void;
insertItemWithTitleActionKeyEquivalentAtIndex(string: NSString | string, selector: string | null, charCode: NSString | string, index: number): NSMenuItem;
insertTitlebarAccessoryViewControllerAtIndex(childViewController: NSTitlebarAccessoryViewController, index: number): void;
insertRowAtIndexWithTypeAsSubrowOfRowAnimate(rowIndex: number, rowType: interop.Enum<typeof NSRuleEditorRowType>, parentRow: number, shouldAnimate: boolean): void;
insertTextContainerAtIndex(container: NSTextContainer, index: number): void;
insertGlyphsLengthForStartingGlyphAtIndexCharacterIndex(glyphs: interop.PointerConvertible, length: number, glyphIndex: number, charIndex: number): void;
insertGlyphAtGlyphIndexCharacterIndex(glyph: number, glyphIndex: number, charIndex: number): void;
insert(sender: interop.Object | null): void;
insertChild(sender: interop.Object | null): void;
insertObjectAtArrangedObjectIndexPath(object: interop.Object | null, indexPath: NSIndexPath): void;
insertObjectsAtArrangedObjectIndexPaths(objects: NSArray | unknown[], indexPaths: NSArray | unknown[]): void;
insertGlyphAtGlyphIndexCharacterIndex(glyph: number, glyphIndex: number, characterIndex: number): void;
insertItemWithTitleAtIndex(title: NSString | string, index: number): void;
insertRowsAtIndexesWithAnimation(indexes: NSIndexSet, animationOptions: interop.Enum<typeof NSTableViewAnimationOptions>): void;
insertText(insertString: interop.Object): void;
insertCompletionForPartialWordRangeMovementIsFinal(word: NSString | string, charRange: _NSRange, movement: number, flag: boolean): void;
insertionPointColor: NSColor;
insertTextReplacementRange(string: interop.Object, replacementRange: _NSRange): void;
insertTab(sender: interop.Object | null): void;
insertBacktab(sender: interop.Object | null): void;
insertNewline(sender: interop.Object | null): void;
insertParagraphSeparator(sender: interop.Object | null): void;
insertNewlineIgnoringFieldEditor(sender: interop.Object | null): void;
insertTabIgnoringFieldEditor(sender: interop.Object | null): void;
insertLineBreak(sender: interop.Object | null): void;
insertContainerBreak(sender: interop.Object | null): void;
insertSingleQuoteIgnoringSubstitution(sender: interop.Object | null): void;
insertDoubleQuoteIgnoringSubstitution(sender: interop.Object | null): void;
insertArrangedSubviewAtIndex(view: NSView, index: number): void;
insertViewAtIndexInGravity(view: NSView, index: number, gravity: interop.Enum<typeof NSStackViewGravity>): void;
insertedTextInRange(range: _NSRange): void;
insertItemWithItemIdentifierAtIndex(itemIdentifier: NSString | string, index: number): void;
insertTabViewItemAtIndex(tabViewItem: NSTabViewItem, index: number): void;
insertSplitViewItemAtIndex(splitViewItem: NSSplitViewItem, index: number): void;
```