/// <reference types="objc/lib/types.d.ts" />
/// <reference types="objc/types/Runtime.d.ts" />
/// <reference types="objc/types/QuartzCore.d.ts" />
/// <reference types="objc/types/Foundation.d.ts" />

export abstract class HTMLNativeObjectElement extends HTMLElement {
  protected static getAttributesRecord(){
    return Object.getOwnPropertyNames(this.prototype)
    .reduce<Record<string, string>>((acc, prop) => {
      acc[prop.toLowerCase()] = prop;
      return acc;
    }, {});
  }
  protected static readonly attributes = this.getAttributesRecord();

  /**
   * The native object from the Obj-C runtime that this HTML Element wraps.
   */
  abstract readonly nativeObject: NativeObject;
}

export class HTMLNSObjectElement extends HTMLNativeObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSObject.new();

  // readonly classForCoder: interop.Object;
  // readonly autoContentAccessingProxy: interop.Object;
  // accessInstanceVariablesDirectly: boolean;
  // readonly classForKeyedArchiver: interop.Object;
  // readonly classForArchiver: interop.Object;
  // readonly classForPortCoder: interop.Object;
  // readonly classDescription: NSClassDescription;
  // readonly attributeKeys: NSArray;
  // readonly toOneRelationshipKeys: NSArray;
  // readonly toManyRelationshipKeys: NSArray;
  // readonly classCode: number;
  // readonly className: NSString;
  // readonly objectSpecifier: NSScriptObjectSpecifier;
  // readonly accessibilityFocusedUIElement: interop.Object;
  // readonly accessibilityNotifiesWhenDestroyed: boolean;
  // readonly exposedBindings: NSArray;
  // readonly objectForWebScript: interop.Object;
  // readonly webPlugInContainerSelectionColor: NSColor;
  // readonly webFrame: WebFrame;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
}

export class HTMLNSWindowTabGroupElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSWindowTabGroup.new();

  // readonly identifier: NSString;
  // readonly windows: NSArray;
  // isOverviewVisible: boolean;
  // readonly isTabBarVisible: boolean;
  // selectedWindow: NSWindow | null;
}

export class HTMLNSAccessibilityCustomRotorSearchParametersElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSAccessibilityCustomRotorSearchParameters.new();

  // currentItem: NSAccessibilityCustomRotorItemResult;
  // searchDirection: interop.Enum<typeof NSAccessibilityCustomRotorSearchDirection>;
}

export class HTMLNSFontManagerElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSFontManager.new();

  // sharedFontManager: NSFontManager;
  // readonly isMultiple: boolean;
  // readonly selectedFont: NSFont;
  // readonly availableFonts: NSArray;
  // readonly availableFontFamilies: NSArray;
  // isEnabled: boolean;
  // action: string;
  // delegate: interop.Object;
  // readonly collectionNames: NSArray;
  // readonly currentFontAction: interop.Enum<typeof NSFontAction>;
  // target: interop.Object;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
}

export class HTMLNSScrubberLayoutElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSScrubberLayout.new();

  // layoutAttributesClass: interop.Object;
  // readonly scrubber: NSScrubber;
  // readonly visibleRect: CGRect;
  // readonly scrubberContentSize: CGSize;
  // readonly shouldInvalidateLayoutForSelectionChange: boolean;
  // readonly shouldInvalidateLayoutForHighlightChange: boolean;
  // readonly automaticallyMirrorsInRightToLeftLayout: boolean;
}

export class HTMLNSCollectionViewUpdateItemElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSCollectionViewUpdateItem.new();

  // readonly indexPathBeforeUpdate: NSIndexPath;
  // readonly indexPathAfterUpdate: NSIndexPath;
  // readonly updateAction: interop.Enum<typeof NSCollectionUpdateAction>;
}

export class HTMLNSControllerElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSController.new();

  // readonly isEditing: boolean;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
}

export class HTMLNSHelpManagerElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSHelpManager.new();

  // sharedHelpManager: NSHelpManager;
  // isContextHelpModeActive: boolean;
}

export class HTMLNSOpenGLPixelFormatElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSOpenGLPixelFormat.new();

  // readonly numberOfVirtualScreens: number;
  // readonly CGLPixelFormatObj: interop.Pointer;
}

export class HTMLNSTextAttachmentElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTextAttachment.new();

  // contents: NSData;
  // image: NSImage;
  // bounds: CGRect;
  // fileWrapper: NSFileWrapper;
  // attachmentCell: NSTextAttachmentCell;
  // lineLayoutPadding: number;
  // allowsTextAttachmentView: boolean;
  // readonly usesTextAttachmentView: boolean;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
  // supportsSecureCoding: boolean;
}

export class HTMLNSCollectionViewLayoutElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSCollectionViewLayout.new();

  // readonly collectionView: NSCollectionView;
  // layoutAttributesClass: interop.Object;
  // invalidationContextClass: interop.Object;
  // readonly collectionViewContentSize: CGSize;
}

export class HTMLNSPasteboardItemElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSPasteboardItem.new();

  // readonly types: NSArray;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
}

export class HTMLNSScrubberFlowLayoutElement extends HTMLNSScrubberLayoutElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSScrubberFlowLayout.new();

  // itemSpacing: number;
  // itemSize: CGSize;
}

export class HTMLNSTextElementElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTextElement.new();

  // textContentManager: NSTextContentManager;
  // elementRange: NSTextRange;
  // readonly childElements: NSArray;
  // readonly parentElement: NSTextElement;
  // readonly isRepresentedElement: boolean;
}

export class HTMLNSTextSelectionNavigationElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTextSelectionNavigation.new();

  // readonly textSelectionDataSource: NSTextSelectionDataSource | null;
  // allowsNonContiguousRanges: boolean;
  // rotatesCoordinateSystemForLayoutOrientation: boolean;
}

export class HTMLNSTextRangeElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTextRange.new();

  // readonly isEmpty: boolean;
  // readonly location: NSTextLocation;
  // readonly endLocation: NSTextLocation;
}

export class HTMLNSPressureConfigurationElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSPressureConfiguration.new();

  // readonly pressureBehavior: interop.Enum<typeof NSPressureBehavior>;
}

export class HTMLNSHapticFeedbackManagerElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSHapticFeedbackManager.new();

  // defaultPerformer: NSHapticFeedbackPerformer;
}

export class HTMLNSTextBlockElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTextBlock.new();

  // readonly contentWidth: number;
  // readonly contentWidthValueType: interop.Enum<typeof NSTextBlockValueType>;
  // verticalAlignment: interop.Enum<typeof NSTextBlockVerticalAlignment>;
  // backgroundColor: NSColor;
  // supportsSecureCoding: boolean;
}

export class HTMLNSTextListElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTextList.new();

  // readonly markerFormat: NSString;
  // readonly listOptions: interop.Enum<typeof NSTextListOptions>;
  // startingItemNumber: number;
  // readonly isOrdered: boolean;
  // supportsSecureCoding: boolean;
}

export class HTMLNSTreeNodeElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTreeNode.new();

  // readonly representedObject: interop.Object;
  // readonly indexPath: NSIndexPath;
  // readonly isLeaf: boolean;
  // readonly childNodes: NSArray;
  // readonly mutableChildNodes: NSMutableArray;
  // readonly parentNode: NSTreeNode;
}

export class HTMLNSObjectControllerElement extends HTMLNSControllerElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSObjectController.new();

  // content: interop.Object;
  // readonly selection: interop.Object;
  // readonly selectedObjects: NSArray;
  // automaticallyPreparesContent: boolean;
  // objectClass: interop.Object;
  // isEditable: boolean;
  // readonly canAdd: boolean;
  // readonly canRemove: boolean;
  // managedObjectContext: NSManagedObjectContext;
  // fetchPredicate: NSPredicate;
  // usesLazyFetching: boolean;
}

export class HTMLNSGlyphInfoElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSGlyphInfo.new();

  // readonly glyphID: number;
  // readonly baseString: NSString;
  // readonly glyphName: NSString;
  // readonly characterIdentifier: number;
  // readonly characterCollection: interop.Enum<typeof NSCharacterCollection>;
  // supportsSecureCoding: boolean;
}

export class HTMLNSTableViewDiffableDataSourceElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTableViewDiffableDataSource.new();

  // rowViewProvider: (p1: NSTableView, p2: number, p3: interop.Object) => NSTableRowView;
  // sectionHeaderViewProvider: (p1: NSTableView, p2: number, p3: interop.Object) => NSView;
  // defaultRowAnimation: interop.Enum<typeof NSTableViewAnimationOptions>;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
}

export class HTMLNSOpenGLPixelBufferElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSOpenGLPixelBuffer.new();

  // readonly CGLPBufferObj: interop.Pointer;
  // readonly pixelsWide: number;
  // readonly pixelsHigh: number;
  // readonly textureTarget: number;
  // readonly textureInternalFormat: number;
  // readonly textureMaxMipMapLevel: number;
}

export class HTMLNSCellElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSCell.new();

  // prefersTrackingUntilMouseUp: boolean;
  // controlView: NSView;
  // type: interop.Enum<typeof NSCellType>;
  // state: number;
  // target: interop.Object;
  // action: string;
  // tag: number;
  // readonly isOpaque: boolean;
  // isEnabled: boolean;
  // isContinuous: boolean;
  // isEditable: boolean;
  // isSelectable: boolean;
  // isBordered: boolean;
  // isBezeled: boolean;
  // isScrollable: boolean;
  // isHighlighted: boolean;
  // alignment: interop.Enum<typeof NSTextAlignment>;
  // wraps: boolean;
  // font: NSFont;
  // readonly keyEquivalent: NSString;
  // formatter: NSFormatter;
  // objectValue: interop.Object;
  // readonly hasValidObjectValue: boolean;
  // intValue: number;
  // floatValue: number;
  // doubleValue: number;
  // integerValue: number;
  // image: NSImage;
  // controlSize: interop.Enum<typeof NSControlSize>;
  // representedObject: interop.Object;
  // readonly cellSize: CGSize;
  // readonly mouseDownFlags: number;
  // menu: NSMenu;
  // defaultMenu: NSMenu;
  // sendsActionOnEndEditing: boolean;
  // baseWritingDirection: interop.Enum<typeof NSWritingDirection>;
  // lineBreakMode: interop.Enum<typeof NSLineBreakMode>;
  // allowsUndo: boolean;
  // truncatesLastVisibleLine: boolean;
  // userInterfaceLayoutDirection: interop.Enum<typeof NSUserInterfaceLayoutDirection>;
  // usesSingleLineMode: boolean;
  // refusesFirstResponder: boolean;
  // readonly acceptsFirstResponder: boolean;
  // showsFirstResponder: boolean;
  // focusRingType: interop.Enum<typeof NSFocusRingType>;
  // defaultFocusRingType: interop.Enum<typeof NSFocusRingType>;
  // readonly wantsNotificationForMarkedText: boolean;
  // attributedStringValue: NSAttributedString;
  // allowsEditingTextAttributes: boolean;
  // importsGraphics: boolean;
  // allowsMixedState: boolean;
  // readonly nextState: number;
  // backgroundStyle: interop.Enum<typeof NSBackgroundStyle>;
  // readonly interiorBackgroundStyle: interop.Enum<typeof NSBackgroundStyle>;
  // controlTint: interop.Enum<typeof NSControlTint>;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
  // isAccessibilityElement: boolean;
  // accessibilityFrame: CGRect;
  // isAccessibilityFocused: boolean;
  // accessibilityActivationPoint: CGPoint;
  // accessibilityTopLevelUIElement: interop.Object;
  // accessibilityURL: NSURL;
  // accessibilityValue: interop.Object;
  // accessibilityTitleUIElement: interop.Object;
  // accessibilityOrientation: interop.Enum<typeof NSAccessibilityOrientation>;
  // accessibilityOverflowButton: interop.Object;
  // accessibilityParent: interop.Object;
  // accessibilitySearchButton: interop.Object;
  // accessibilitySearchMenu: interop.Object;
  // isAccessibilitySelected: boolean;
  // accessibilityShownMenu: interop.Object;
  // accessibilityMinValue: interop.Object;
  // accessibilityMaxValue: interop.Object;
  // accessibilityWindow: interop.Object;
  // isAccessibilityExpanded: boolean;
  // isAccessibilityEdited: boolean;
  // isAccessibilityEnabled: boolean;
  // accessibilityClearButton: interop.Object;
  // accessibilityCancelButton: interop.Object;
  // isAccessibilityProtectedContent: boolean;
  // isAccessibilityAlternateUIVisible: boolean;
  // isAccessibilityRequired: boolean;
  // accessibilityApplicationFocusedUIElement: interop.Object;
  // accessibilityMainWindow: interop.Object;
  // isAccessibilityHidden: boolean;
  // isAccessibilityFrontmost: boolean;
  // accessibilityFocusedWindow: interop.Object;
  // accessibilityExtrasMenuBar: interop.Object;
  // accessibilityMenuBar: interop.Object;
  // isAccessibilityOrderedByRow: boolean;
  // accessibilityHorizontalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityVerticalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityWarningValue: interop.Object;
  // accessibilityCriticalValue: interop.Object;
  // isAccessibilityDisclosed: boolean;
  // accessibilityDisclosedByRow: interop.Object;
  // accessibilityDisclosedRows: interop.Object;
  // accessibilityDisclosureLevel: number;
  // accessibilityMarkerValues: interop.Object;
  // accessibilityMarkerGroupUIElement: interop.Object;
  // accessibilityUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityRulerMarkerType: interop.Enum<typeof NSAccessibilityRulerMarkerType>;
  // accessibilityHorizontalScrollBar: interop.Object;
  // accessibilityVerticalScrollBar: interop.Object;
  // accessibilityLabelValue: number;
  // accessibilityDecrementButton: interop.Object;
  // accessibilityIncrementButton: interop.Object;
  // accessibilityHeader: interop.Object;
  // accessibilityColumnCount: number;
  // accessibilityRowCount: number;
  // accessibilityIndex: number;
  // accessibilitySortDirection: interop.Enum<typeof NSAccessibilitySortDirection>;
  // accessibilityRowIndexRange: _NSRange;
  // accessibilityColumnIndexRange: _NSRange;
  // accessibilityInsertionPointLineNumber: number;
  // accessibilitySharedCharacterRange: _NSRange;
  // accessibilityVisibleCharacterRange: _NSRange;
  // accessibilityNumberOfCharacters: number;
  // accessibilitySelectedTextRange: _NSRange;
  // accessibilityToolbarButton: interop.Object;
  // isAccessibilityModal: boolean;
  // accessibilityProxy: interop.Object;
  // isAccessibilityMain: boolean;
  // accessibilityFullScreenButton: interop.Object;
  // accessibilityGrowArea: interop.Object;
  // accessibilityDefaultButton: interop.Object;
  // accessibilityCloseButton: interop.Object;
  // accessibilityZoomButton: interop.Object;
  // accessibilityMinimizeButton: interop.Object;
  // isAccessibilityMinimized: boolean;
}

export class HTMLNSStatusItemElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSStatusItem.new();

  // readonly statusBar: NSStatusBar | null;
  // length: number;
  // menu: NSMenu;
  // readonly button: NSStatusBarButton;
  // behavior: interop.Enum<typeof NSStatusItemBehavior>;
  // isVisible: boolean;
  // action: string;
  // doubleAction: string;
  // target: interop.Object;
  // attributedTitle: NSAttributedString;
  // image: NSImage;
  // alternateImage: NSImage;
  // isEnabled: boolean;
  // highlightMode: boolean;
  // view: NSView;
}

export class HTMLNSSpeechRecognizerElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSSpeechRecognizer.new();
  get delegate(): NSSpeechRecognizerDelegateImpl {
    return (this.nativeObject.delegate ??= NSSpeechRecognizerDelegateImpl.new()) as NSSpeechRecognizerDelegateImpl;
  }

  // listensInForegroundOnly: boolean;
  // blocksOtherRecognizers: boolean;

  set speechrecognizerdidrecognizecommand(value: (sender: NSSpeechRecognizer, command: NSString | string) => void) {
    this.delegate.speechRecognizerDidRecognizeCommand = value;
  }
}

export class HTMLNSCollectionLayoutGroupCustomItemElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSCollectionLayoutGroupCustomItem.new();

  // readonly frame: CGRect;
  // readonly zIndex: number;
}

export class HTMLNSTableViewRowActionElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTableViewRowAction.new();

  // readonly style: interop.Enum<typeof NSTableViewRowActionStyle>;
  // backgroundColor: NSColor;
  // image: NSImage;
}

export class HTMLNSTextAttachmentViewProviderElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTextAttachmentViewProvider.new();

  // readonly textAttachment: NSTextAttachment | null;
  // readonly textLayoutManager: NSTextLayoutManager;
  // readonly location: NSTextLocation;
  // view: NSView;
  // tracksTextAttachmentViewBounds: boolean;
}

export class HTMLNSToolbarItemElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSToolbarItem.new();

  // readonly itemIdentifier: NSString;
  // readonly toolbar: NSToolbar;
  // possibleLabels: NSSet;
  // menuFormRepresentation: NSMenuItem;
  // tag: number;
  // target: interop.Object;
  // action: string;
  // isEnabled: boolean;
  // image: NSImage;
  // isBordered: boolean;
  // isNavigational: boolean;
  // view: NSView;
  // readonly isVisible: boolean;
  // minSize: CGSize;
  // maxSize: CGSize;
  // visibilityPriority: number;
  // autovalidates: boolean;
  // readonly allowsDuplicatesInToolbar: boolean;
}

export class HTMLNSGlyphGeneratorElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSGlyphGenerator.new();

  // sharedGlyphGenerator: NSGlyphGenerator;
}

export class HTMLNSGridCellElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSGridCell.new();

  // contentView: NSView;
  // emptyContentView: NSView;
  // readonly row: NSGridRow | null;
  // readonly column: NSGridColumn | null;
  // xPlacement: interop.Enum<typeof NSGridCellPlacement>;
  // yPlacement: interop.Enum<typeof NSGridCellPlacement>;
  // rowAlignment: interop.Enum<typeof NSGridRowAlignment>;
}

export class HTMLNSColorSamplerElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSColorSampler.new();

}

export class HTMLNSPDFPanelElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSPDFPanel.new();

  // accessoryController: NSViewController;
  // options: interop.Enum<typeof NSPDFPanelOptions>;
}

export class HTMLNSPageLayoutElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSPageLayout.new();

  // readonly accessoryControllers: NSArray;
  // readonly printInfo: NSPrintInfo;
}

export class HTMLNSScreenElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSScreen.new();

  // screens: NSArray;
  // mainScreen: NSScreen;
  // deepestScreen: NSScreen;
  // screensHaveSeparateSpaces: boolean;
  // readonly depth: interop.Enum<typeof NSWindowDepth>;
  // readonly frame: CGRect;
  // readonly visibleFrame: CGRect;
  // readonly deviceDescription: NSDictionary;
  // readonly colorSpace: NSColorSpace;
  // readonly supportedWindowDepths: interop.Pointer;
  // readonly backingScaleFactor: number;
  // readonly localizedName: NSString;
  // readonly safeAreaInsets: NSEdgeInsets;
  // readonly auxiliaryTopLeftArea: CGRect;
  // readonly auxiliaryTopRightArea: CGRect;
  // readonly maximumExtendedDynamicRangeColorComponentValue: number;
  // readonly maximumPotentialExtendedDynamicRangeColorComponentValue: number;
  // readonly maximumReferenceExtendedDynamicRangeColorComponentValue: number;
  // readonly maximumFramesPerSecond: number;
  // readonly minimumRefreshInterval: number;
  // readonly maximumRefreshInterval: number;
  // readonly displayUpdateGranularity: number;
  // readonly lastDisplayUpdateTimestamp: number;
}

export class HTMLNSImageSymbolConfigurationElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSImageSymbolConfiguration.new();

  // supportsSecureCoding: boolean;
}

export class HTMLNSRulerMarkerElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSRulerMarker.new();

  // readonly ruler: NSRulerView | null;
  // markerLocation: number;
  // image: NSImage;
  // imageOrigin: CGPoint;
  // isMovable: boolean;
  // isRemovable: boolean;
  // readonly isDragging: boolean;
  // representedObject: NSCopying;
  // readonly imageRectInRuler: CGRect;
  // readonly thicknessRequiredInRuler: number;
}

export class HTMLNSFilePromiseReceiverElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSFilePromiseReceiver.new();

  // readableDraggedTypes: NSArray;
  // readonly fileTypes: NSArray;
  // readonly fileNames: NSArray;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
}

export class HTMLNSColorPickerElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSColorPicker.new();

  // readonly colorPanel: NSColorPanel;
  // readonly provideNewButtonImage: NSImage;
  // readonly buttonToolTip: NSString;
  // readonly minContentSize: CGSize;
}

export class HTMLNSBrowserCellElement extends HTMLNSCellElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSBrowserCell.new();

  // branchImage: NSImage;
  // highlightedBranchImage: NSImage;
  // isLeaf: boolean;
  // isLoaded: boolean;
  // image: NSImage;
  // alternateImage: NSImage;
}

export class HTMLNSImageRepElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSImageRep.new();

  // size: CGSize;
  // hasAlpha: boolean;
  // isOpaque: boolean;
  // bitsPerSample: number;
  // pixelsWide: number;
  // pixelsHigh: number;
  // layoutDirection: interop.Enum<typeof NSImageLayoutDirection>;
  // registeredImageRepClasses: NSArray;
  // imageUnfilteredTypes: NSArray;
  // imageTypes: NSArray;
}

export class HTMLNSFontCollectionElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSFontCollection.new();

  // fontCollectionWithAllAvailableDescriptors: NSFontCollection;
  // allFontCollectionNames: NSArray;
  // readonly queryDescriptors: NSArray;
  // readonly exclusionDescriptors: NSArray;
  // readonly matchingDescriptors: NSArray;
}

export class HTMLNSFontAssetRequestElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSFontAssetRequest.new();

  // readonly downloadedFontDescriptors: NSArray;
  // readonly progress: NSProgress;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
}

export class HTMLNSFontDescriptorElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSFontDescriptor.new();

  // readonly postscriptName: NSString;
  // readonly pointSize: number;
  // readonly matrix: NSAffineTransform;
  // readonly symbolicTraits: interop.Enum<typeof NSFontDescriptorSymbolicTraits>;
  // readonly requiresFontAssetRequest: boolean;
  // readonly fontAttributes: NSDictionary;
  // supportsSecureCoding: boolean;
}

export class HTMLNSGradientElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSGradient.new();

  // readonly colorSpace: NSColorSpace;
  // readonly numberOfColorStops: number;
  // supportsSecureCoding: boolean;
}

export class HTMLNSCollectionLayoutEdgeSpacingElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSCollectionLayoutEdgeSpacing.new();

  // readonly leading: NSCollectionLayoutSpacing;
  // readonly top: NSCollectionLayoutSpacing;
  // readonly trailing: NSCollectionLayoutSpacing;
  // readonly bottom: NSCollectionLayoutSpacing;
}

export class HTMLNSCollectionLayoutSizeElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSCollectionLayoutSize.new();

  // readonly widthDimension: NSCollectionLayoutDimension;
  // readonly heightDimension: NSCollectionLayoutDimension;
}

export class HTMLNSSharingServicePickerElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSSharingServicePicker.new();
  get delegate(): NSSharingServicePickerDelegateImpl {
    return (this.nativeObject.delegate ??= NSSharingServicePickerDelegateImpl.new()) as NSSharingServicePickerDelegateImpl;
  }

  // readonly standardShareMenuItem: NSMenuItem;

  set sharingservicepickersharingservicesforitemsproposedsharingservices(value: (sharingServicePicker: NSSharingServicePicker, items: NSArray | unknown[], proposedServices: NSArray | unknown[]) => NSArray) {
    this.delegate.sharingServicePickerSharingServicesForItemsProposedSharingServices = value;
  }
  set sharingservicepickerdelegateforsharingservice(value: (sharingServicePicker: NSSharingServicePicker, sharingService: NSSharingService) => NSSharingServiceDelegate) {
    this.delegate.sharingServicePickerDelegateForSharingService = value;
  }
  set sharingservicepickerdidchoosesharingservice(value: (sharingServicePicker: NSSharingServicePicker, service: NSSharingService | null) => void) {
    this.delegate.sharingServicePickerDidChooseSharingService = value;
  }
}

export class HTMLNSCollectionViewCompositionalLayoutConfigurationElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSCollectionViewCompositionalLayoutConfiguration.new();

  // scrollDirection: interop.Enum<typeof NSCollectionViewScrollDirection>;
  // interSectionSpacing: number;
}

export class HTMLNSCollectionViewLayoutInvalidationContextElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSCollectionViewLayoutInvalidationContext.new();

  // readonly invalidateEverything: boolean;
  // readonly invalidateDataSourceCounts: boolean;
  // readonly invalidatedItemIndexPaths: NSSet;
  // readonly invalidatedSupplementaryIndexPaths: NSDictionary;
  // readonly invalidatedDecorationIndexPaths: NSDictionary;
  // contentOffsetAdjustment: CGPoint;
  // contentSizeAdjustment: CGSize;
}

export class HTMLNSStoryboardSegueElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSStoryboardSegue.new();

  // readonly identifier: NSString;
  // readonly sourceController: interop.Object;
  // readonly destinationController: interop.Object;
}

export class HTMLNSTouchBarElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTouchBar.new();
  get delegate(): NSTouchBarDelegateImpl {
    return (this.nativeObject.delegate ??= NSTouchBarDelegateImpl.new()) as NSTouchBarDelegateImpl;
  }

  // readonly itemIdentifiers: NSArray;
  // templateItems: NSSet;
  // readonly isVisible: boolean;
  // isAutomaticCustomizeTouchBarMenuItemEnabled: boolean;

  set touchbarmakeitemforidentifier(value: (touchBar: NSTouchBar, identifier: NSString | string) => NSTouchBarItem) {
    this.delegate.touchBarMakeItemForIdentifier = value;
  }
}

export class HTMLNSActionCellElement extends HTMLNSCellElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSActionCell.new();

  // target: interop.Object;
  // action: string;
  // tag: number;
}

export class HTMLNSColorListElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSColorList.new();

  // availableColorLists: NSArray;
  // readonly name: NSString;
  // readonly allKeys: NSArray;
  // readonly isEditable: boolean;
  // supportsSecureCoding: boolean;
}

export class HTMLNSDocumentElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSDocument.new();

  // fileURL: NSURL;
  // fileModificationDate: NSDate;
  // isDraft: boolean;
  // readonly isEntireFileLoaded: boolean;
  // readonly autosavingIsImplicitlyCancellable: boolean;
  // readonly keepBackupFile: boolean;
  // readonly backupFileURL: NSURL;
  // readonly shouldRunSavePanelWithAccessoryView: boolean;
  // readonly fileNameExtensionWasHiddenInLastRunSavePanel: boolean;
  // readonly fileTypeFromLastRunSavePanel: NSString;
  // readonly hasUnautosavedChanges: boolean;
  // autosavesInPlace: boolean;
  // preservesVersions: boolean;
  // readonly isBrowsingVersions: boolean;
  // autosavesDrafts: boolean;
  // readonly autosavingFileType: NSString;
  // autosavedContentsFileURL: NSURL;
  // readonly isLocked: boolean;
  // printInfo: NSPrintInfo;
  // readonly PDFPrintOperation: NSPrintOperation;
  // readonly allowsDocumentSharing: boolean;
  // readonly isDocumentEdited: boolean;
  // readonly isInViewingMode: boolean;
  // undoManager: NSUndoManager;
  // hasUndoManager: boolean;
  // readonly windowNibName: NSString;
  // readonly windowControllers: NSArray;
  // readonly windowForSheet: NSWindow;
  // readableTypes: NSArray;
  // writableTypes: NSArray;
  // usesUbiquitousStorage: boolean;
  // readonly presentedItemURL: NSURL;
  // readonly observedPresentedItemUbiquityAttributes: NSSet;
  // userActivity: NSUserActivity;
  // readonly objectSpecifier: NSScriptObjectSpecifier;
  // restorableStateKeyPaths: NSArray;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
  // readonly presentedItemOperationQueue: NSOperationQueue;
  // readonly primaryPresentedItemURL: NSURL;
}

export class HTMLNSBindingSelectionMarkerElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSBindingSelectionMarker.new();

  // multipleValuesSelectionMarker: NSBindingSelectionMarker;
  // noSelectionMarker: NSBindingSelectionMarker;
  // notApplicableSelectionMarker: NSBindingSelectionMarker;
}

export class HTMLNSTextTabElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTextTab.new();

  // readonly alignment: interop.Enum<typeof NSTextAlignment>;
  // readonly location: number;
  // readonly options: NSDictionary;
  // readonly tabStopType: interop.Enum<typeof NSTextTabType>;
  // supportsSecureCoding: boolean;
}

export class HTMLNSResponderElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSResponder.new();

  // nextResponder: NSResponder;
  // readonly acceptsFirstResponder: boolean;
  // menu: NSMenu;
  // readonly undoManager: NSUndoManager;
  // userActivity: NSUserActivity;
  // touchBar: NSTouchBar;
  // restorableStateKeyPaths: NSArray;
}

export class HTMLNSTouchElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTouch.new();

  // readonly identity: NSCopying;
  // readonly phase: interop.Enum<typeof NSTouchPhase>;
  // readonly normalizedPosition: CGPoint;
  // readonly isResting: boolean;
  // readonly device: interop.Object;
  // readonly deviceSize: CGSize;
  // readonly type: interop.Enum<typeof NSTouchType>;
}

export class HTMLNSWorkspaceElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSWorkspace.new();

  // sharedWorkspace: NSWorkspace;
  // readonly notificationCenter: NSNotificationCenter;
  // readonly fileLabels: NSArray;
  // readonly fileLabelColors: NSArray;
  // readonly frontmostApplication: NSRunningApplication;
  // readonly menuBarOwningApplication: NSRunningApplication;
  // readonly accessibilityDisplayShouldIncreaseContrast: boolean;
  // readonly accessibilityDisplayShouldDifferentiateWithoutColor: boolean;
  // readonly accessibilityDisplayShouldReduceTransparency: boolean;
  // readonly accessibilityDisplayShouldReduceMotion: boolean;
  // readonly accessibilityDisplayShouldInvertColors: boolean;
  // readonly isVoiceOverEnabled: boolean;
  // readonly isSwitchControlEnabled: boolean;
  // readonly runningApplications: NSArray;
}

export class HTMLNSAccessibilityElementElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSAccessibilityElement.new();

  // accessibilityFrameInParentSpace: CGRect;
  // isAccessibilityElement: boolean;
  // accessibilityFrame: CGRect;
  // isAccessibilityFocused: boolean;
  // accessibilityActivationPoint: CGPoint;
  // accessibilityTopLevelUIElement: interop.Object;
  // accessibilityURL: NSURL;
  // accessibilityValue: interop.Object;
  // accessibilityTitleUIElement: interop.Object;
  // accessibilityOrientation: interop.Enum<typeof NSAccessibilityOrientation>;
  // accessibilityOverflowButton: interop.Object;
  // accessibilityParent: interop.Object;
  // accessibilitySearchButton: interop.Object;
  // accessibilitySearchMenu: interop.Object;
  // isAccessibilitySelected: boolean;
  // accessibilityShownMenu: interop.Object;
  // accessibilityMinValue: interop.Object;
  // accessibilityMaxValue: interop.Object;
  // accessibilityWindow: interop.Object;
  // isAccessibilityExpanded: boolean;
  // isAccessibilityEdited: boolean;
  // isAccessibilityEnabled: boolean;
  // accessibilityClearButton: interop.Object;
  // accessibilityCancelButton: interop.Object;
  // isAccessibilityProtectedContent: boolean;
  // isAccessibilityAlternateUIVisible: boolean;
  // isAccessibilityRequired: boolean;
  // accessibilityApplicationFocusedUIElement: interop.Object;
  // accessibilityMainWindow: interop.Object;
  // isAccessibilityHidden: boolean;
  // isAccessibilityFrontmost: boolean;
  // accessibilityFocusedWindow: interop.Object;
  // accessibilityExtrasMenuBar: interop.Object;
  // accessibilityMenuBar: interop.Object;
  // isAccessibilityOrderedByRow: boolean;
  // accessibilityHorizontalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityVerticalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityWarningValue: interop.Object;
  // accessibilityCriticalValue: interop.Object;
  // isAccessibilityDisclosed: boolean;
  // accessibilityDisclosedByRow: interop.Object;
  // accessibilityDisclosedRows: interop.Object;
  // accessibilityDisclosureLevel: number;
  // accessibilityMarkerValues: interop.Object;
  // accessibilityMarkerGroupUIElement: interop.Object;
  // accessibilityUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityRulerMarkerType: interop.Enum<typeof NSAccessibilityRulerMarkerType>;
  // accessibilityHorizontalScrollBar: interop.Object;
  // accessibilityVerticalScrollBar: interop.Object;
  // accessibilityLabelValue: number;
  // accessibilityDecrementButton: interop.Object;
  // accessibilityIncrementButton: interop.Object;
  // accessibilityHeader: interop.Object;
  // accessibilityColumnCount: number;
  // accessibilityRowCount: number;
  // accessibilityIndex: number;
  // accessibilitySortDirection: interop.Enum<typeof NSAccessibilitySortDirection>;
  // accessibilityRowIndexRange: _NSRange;
  // accessibilityColumnIndexRange: _NSRange;
  // accessibilityInsertionPointLineNumber: number;
  // accessibilitySharedCharacterRange: _NSRange;
  // accessibilityVisibleCharacterRange: _NSRange;
  // accessibilityNumberOfCharacters: number;
  // accessibilitySelectedTextRange: _NSRange;
  // accessibilityToolbarButton: interop.Object;
  // isAccessibilityModal: boolean;
  // accessibilityProxy: interop.Object;
  // isAccessibilityMain: boolean;
  // accessibilityFullScreenButton: interop.Object;
  // accessibilityGrowArea: interop.Object;
  // accessibilityDefaultButton: interop.Object;
  // accessibilityCloseButton: interop.Object;
  // accessibilityZoomButton: interop.Object;
  // accessibilityMinimizeButton: interop.Object;
  // isAccessibilityMinimized: boolean;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
}

export class HTMLNSNibElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSNib.new();

}

export class HTMLNSMenuToolbarItemElement extends HTMLNSToolbarItemElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSMenuToolbarItem.new();

  // menu: NSMenu;
  // showsIndicator: boolean;
}

export class HTMLNSSplitViewItemElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSSplitViewItem.new();

  // readonly behavior: interop.Enum<typeof NSSplitViewItemBehavior>;
  // viewController: NSViewController;
  // isCollapsed: boolean;
  // canCollapse: boolean;
  // collapseBehavior: interop.Enum<typeof NSSplitViewItemCollapseBehavior>;
  // minimumThickness: number;
  // maximumThickness: number;
  // preferredThicknessFraction: number;
  // holdingPriority: number;
  // automaticMaximumThickness: number;
  // isSpringLoaded: boolean;
  // canCollapseFromWindowResize: boolean;
  // allowsFullHeightLayout: boolean;
  // titlebarSeparatorStyle: interop.Enum<typeof NSTitlebarSeparatorStyle>;
}

export class HTMLNSShadowElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSShadow.new();

  // shadowOffset: CGSize;
  // shadowBlurRadius: number;
  // shadowColor: NSColor;
  // supportsSecureCoding: boolean;
}

export class HTMLNSInputManagerElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSInputManager.new();

  // selectedRange: _NSRange;
}

export class HTMLNSEventElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSEvent.new();

  // readonly type: interop.Enum<typeof NSEventType>;
  // readonly modifierFlags: interop.Enum<typeof NSEventModifierFlags>;
  // readonly timestamp: number;
  // readonly window: NSWindow;
  // readonly windowNumber: number;
  // readonly context: NSGraphicsContext;
  // readonly clickCount: number;
  // readonly buttonNumber: number;
  // readonly eventNumber: number;
  // readonly pressure: number;
  // readonly locationInWindow: CGPoint;
  // readonly deltaX: number;
  // readonly deltaY: number;
  // readonly deltaZ: number;
  // readonly hasPreciseScrollingDeltas: boolean;
  // readonly scrollingDeltaX: number;
  // readonly scrollingDeltaY: number;
  // readonly momentumPhase: interop.Enum<typeof NSEventPhase>;
  // readonly isDirectionInvertedFromDevice: boolean;
  // readonly characters: NSString;
  // readonly charactersIgnoringModifiers: NSString;
  // readonly isARepeat: boolean;
  // readonly keyCode: number;
  // readonly trackingNumber: number;
  // readonly userData: interop.Pointer;
  // readonly trackingArea: NSTrackingArea;
  // readonly subtype: interop.Enum<typeof NSEventSubtype>;
  // readonly data1: number;
  // readonly data2: number;
  // readonly eventRef: interop.Pointer;
  // readonly CGEvent: interop.Pointer;
  // isMouseCoalescingEnabled: boolean;
  // readonly magnification: number;
  // readonly deviceID: number;
  // readonly rotation: number;
  // readonly absoluteX: number;
  // readonly absoluteY: number;
  // readonly absoluteZ: number;
  // readonly buttonMask: interop.Enum<typeof NSEventButtonMask>;
  // readonly tilt: CGPoint;
  // readonly tangentialPressure: number;
  // readonly vendorDefined: interop.Object;
  // readonly vendorID: number;
  // readonly tabletID: number;
  // readonly pointingDeviceID: number;
  // readonly systemTabletID: number;
  // readonly vendorPointingDeviceType: number;
  // readonly pointingDeviceSerialNumber: number;
  // readonly uniqueID: number;
  // readonly capabilityMask: number;
  // readonly pointingDeviceType: interop.Enum<typeof NSPointingDeviceType>;
  // readonly isEnteringProximity: boolean;
  // readonly phase: interop.Enum<typeof NSEventPhase>;
  // readonly stage: number;
  // readonly stageTransition: number;
  // readonly associatedEventsMask: interop.Enum<typeof NSEventMask>;
  // readonly pressureBehavior: interop.Enum<typeof NSPressureBehavior>;
  // isSwipeTrackingFromScrollEventsEnabled: boolean;
  // mouseLocation: CGPoint;
  // modifierFlags: interop.Enum<typeof NSEventModifierFlags>;
  // pressedMouseButtons: number;
  // doubleClickInterval: number;
  // keyRepeatDelay: number;
  // keyRepeatInterval: number;
}

export class HTMLNSSliderAccessoryElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSSliderAccessory.new();

  // behavior: NSSliderAccessoryBehavior;
  // isEnabled: boolean;
}

export class HTMLNSAccessibilityCustomRotorItemResultElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSAccessibilityCustomRotorItemResult.new();

  // readonly targetElement: NSAccessibilityElement;
  // readonly itemLoadingToken: NSObject;
  // targetRange: _NSRange;
}

export class HTMLNSPasteboardElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSPasteboard.new();

  // generalPasteboard: NSPasteboard;
  // readonly name: NSString;
  // readonly changeCount: number;
  // readonly pasteboardItems: NSArray;
  // readonly types: NSArray;
}

export class HTMLNSWindowElement extends HTMLNSResponderElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSWindow.new();
  get delegate(): NSWindowDelegateImpl {
    return (this.nativeObject.delegate ??= NSWindowDelegateImpl.new()) as NSWindowDelegateImpl;
  }

  // defaultDepthLimit: interop.Enum<typeof NSWindowDepth>;
  // titleVisibility: interop.Enum<typeof NSWindowTitleVisibility>;
  // titlebarAppearsTransparent: boolean;
  // toolbarStyle: interop.Enum<typeof NSWindowToolbarStyle>;
  // readonly contentLayoutRect: CGRect;
  // readonly contentLayoutGuide: interop.Object;
  // representedURL: NSURL;
  // isExcludedFromWindowsMenu: boolean;
  // contentView: NSView;
  // readonly windowNumber: number;
  // styleMask: interop.Enum<typeof NSWindowStyleMask>;
  // readonly frame: CGRect;
  // readonly inLiveResize: boolean;
  // resizeIncrements: CGSize;
  // aspectRatio: CGSize;
  // contentResizeIncrements: CGSize;
  // contentAspectRatio: CGSize;
  // viewsNeedDisplay: boolean;
  // preservesContentDuringLiveResize: boolean;
  // readonly firstResponder: NSResponder | null;
  // readonly resizeFlags: interop.Enum<typeof NSEventModifierFlags>;
  // isReleasedWhenClosed: boolean;
  // readonly isZoomed: boolean;
  // readonly isMiniaturized: boolean;
  // backgroundColor: NSColor;
  // isMovable: boolean;
  // isMovableByWindowBackground: boolean;
  // hidesOnDeactivate: boolean;
  // canHide: boolean;
  // miniwindowImage: NSImage;
  // readonly dockTile: NSDockTile;
  // isDocumentEdited: boolean;
  // readonly isVisible: boolean;
  // readonly isKeyWindow: boolean;
  // readonly isMainWindow: boolean;
  // readonly canBecomeKeyWindow: boolean;
  // readonly canBecomeMainWindow: boolean;
  // readonly worksWhenModal: boolean;
  // preventsApplicationTerminationWhenModal: boolean;
  // readonly backingScaleFactor: number;
  // allowsToolTipsWhenApplicationIsInactive: boolean;
  // backingType: interop.Enum<typeof NSBackingStoreType>;
  // level: number;
  // depthLimit: interop.Enum<typeof NSWindowDepth>;
  // readonly hasDynamicDepthLimit: boolean;
  // readonly screen: NSScreen;
  // readonly deepestScreen: NSScreen;
  // hasShadow: boolean;
  // alphaValue: number;
  // isOpaque: boolean;
  // sharingType: interop.Enum<typeof NSWindowSharingType>;
  // allowsConcurrentViewDrawing: boolean;
  // displaysWhenScreenProfileChanges: boolean;
  // canBecomeVisibleWithoutLogin: boolean;
  // collectionBehavior: interop.Enum<typeof NSWindowCollectionBehavior>;
  // animationBehavior: interop.Enum<typeof NSWindowAnimationBehavior>;
  // readonly isOnActiveSpace: boolean;
  // readonly stringWithSavedFrame: NSString;
  // readonly frameAutosaveName: NSString;
  // minSize: CGSize;
  // maxSize: CGSize;
  // contentMinSize: CGSize;
  // contentMaxSize: CGSize;
  // minFullScreenContentSize: CGSize;
  // maxFullScreenContentSize: CGSize;
  // readonly deviceDescription: NSDictionary;
  // windowController: NSWindowController;
  // readonly sheets: NSArray;
  // readonly attachedSheet: NSWindow;
  // readonly isSheet: boolean;
  // readonly sheetParent: NSWindow;
  // readonly childWindows: NSArray;
  // parentWindow: NSWindow;
  // appearanceSource: NSObject;
  // colorSpace: NSColorSpace;
  // readonly occlusionState: interop.Enum<typeof NSWindowOcclusionState>;
  // titlebarSeparatorStyle: interop.Enum<typeof NSTitlebarSeparatorStyle>;
  // contentViewController: NSViewController;
  // initialFirstResponder: NSView;
  // readonly keyViewSelectionDirection: interop.Enum<typeof NSSelectionDirection>;
  // defaultButtonCell: NSButtonCell;
  // autorecalculatesKeyViewLoop: boolean;
  // toolbar: NSToolbar;
  // showsToolbarButton: boolean;
  // allowsAutomaticWindowTabbing: boolean;
  // userTabbingPreference: interop.Enum<typeof NSWindowUserTabbingPreference>;
  // tabbingMode: interop.Enum<typeof NSWindowTabbingMode>;
  // readonly tabbedWindows: NSArray;
  // readonly tab: NSWindowTab;
  // readonly tabGroup: NSWindowTabGroup;
  // readonly hasActiveWindowSharingSession: boolean;
  // readonly windowTitlebarLayoutDirection: interop.Enum<typeof NSUserInterfaceLayoutDirection>;
  // readonly currentEvent: NSEvent;
  // acceptsMouseMovedEvents: boolean;
  // ignoresMouseEvents: boolean;
  // readonly mouseLocationOutsideOfEventStream: CGPoint;
  // readonly areCursorRectsEnabled: boolean;
  // readonly windowRef: interop.Pointer;
  // readonly isFlushWindowDisabled: boolean;
  // isAutodisplay: boolean;
  // readonly graphicsContext: NSGraphicsContext;
  // isOneShot: boolean;
  // preferredBackingLocation: interop.Enum<typeof NSWindowBackingLocation>;
  // readonly backingLocation: interop.Enum<typeof NSWindowBackingLocation>;
  // showsResizeIndicator: boolean;
  // readonly drawers: NSArray;
  // readonly hasCloseBox: boolean;
  // readonly hasTitleBar: boolean;
  // readonly isFloatingPanel: boolean;
  // readonly isMiniaturizable: boolean;
  // readonly isModalPanel: boolean;
  // readonly isResizable: boolean;
  // readonly isZoomable: boolean;
  // orderedIndex: number;
  // isRestorable: boolean;
  // restorationClass: NSWindowRestoration;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
  // appearance: NSAppearance;
  // readonly effectiveAppearance: NSAppearance;
  // isAccessibilityElement: boolean;
  // accessibilityFrame: CGRect;
  // isAccessibilityFocused: boolean;
  // accessibilityActivationPoint: CGPoint;
  // accessibilityTopLevelUIElement: interop.Object;
  // accessibilityURL: NSURL;
  // accessibilityValue: interop.Object;
  // accessibilityTitleUIElement: interop.Object;
  // accessibilityOrientation: interop.Enum<typeof NSAccessibilityOrientation>;
  // accessibilityOverflowButton: interop.Object;
  // accessibilityParent: interop.Object;
  // accessibilitySearchButton: interop.Object;
  // accessibilitySearchMenu: interop.Object;
  // isAccessibilitySelected: boolean;
  // accessibilityShownMenu: interop.Object;
  // accessibilityMinValue: interop.Object;
  // accessibilityMaxValue: interop.Object;
  // accessibilityWindow: interop.Object;
  // isAccessibilityExpanded: boolean;
  // isAccessibilityEdited: boolean;
  // isAccessibilityEnabled: boolean;
  // accessibilityClearButton: interop.Object;
  // accessibilityCancelButton: interop.Object;
  // isAccessibilityProtectedContent: boolean;
  // isAccessibilityAlternateUIVisible: boolean;
  // isAccessibilityRequired: boolean;
  // accessibilityApplicationFocusedUIElement: interop.Object;
  // accessibilityMainWindow: interop.Object;
  // isAccessibilityHidden: boolean;
  // isAccessibilityFrontmost: boolean;
  // accessibilityFocusedWindow: interop.Object;
  // accessibilityExtrasMenuBar: interop.Object;
  // accessibilityMenuBar: interop.Object;
  // isAccessibilityOrderedByRow: boolean;
  // accessibilityHorizontalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityVerticalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityWarningValue: interop.Object;
  // accessibilityCriticalValue: interop.Object;
  // isAccessibilityDisclosed: boolean;
  // accessibilityDisclosedByRow: interop.Object;
  // accessibilityDisclosedRows: interop.Object;
  // accessibilityDisclosureLevel: number;
  // accessibilityMarkerValues: interop.Object;
  // accessibilityMarkerGroupUIElement: interop.Object;
  // accessibilityUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityRulerMarkerType: interop.Enum<typeof NSAccessibilityRulerMarkerType>;
  // accessibilityHorizontalScrollBar: interop.Object;
  // accessibilityVerticalScrollBar: interop.Object;
  // accessibilityLabelValue: number;
  // accessibilityDecrementButton: interop.Object;
  // accessibilityIncrementButton: interop.Object;
  // accessibilityHeader: interop.Object;
  // accessibilityColumnCount: number;
  // accessibilityRowCount: number;
  // accessibilityIndex: number;
  // accessibilitySortDirection: interop.Enum<typeof NSAccessibilitySortDirection>;
  // accessibilityRowIndexRange: _NSRange;
  // accessibilityColumnIndexRange: _NSRange;
  // accessibilityInsertionPointLineNumber: number;
  // accessibilitySharedCharacterRange: _NSRange;
  // accessibilityVisibleCharacterRange: _NSRange;
  // accessibilityNumberOfCharacters: number;
  // accessibilitySelectedTextRange: _NSRange;
  // accessibilityToolbarButton: interop.Object;
  // isAccessibilityModal: boolean;
  // accessibilityProxy: interop.Object;
  // isAccessibilityMain: boolean;
  // accessibilityFullScreenButton: interop.Object;
  // accessibilityGrowArea: interop.Object;
  // accessibilityDefaultButton: interop.Object;
  // accessibilityCloseButton: interop.Object;
  // accessibilityZoomButton: interop.Object;
  // accessibilityMinimizeButton: interop.Object;
  // isAccessibilityMinimized: boolean;

  set windowshouldclose(value: (sender: NSWindow) => boolean) {
    this.delegate.windowShouldClose = value;
  }
  set windowwillreturnfieldeditortoobject(value: (sender: NSWindow, client: interop.Object | null) => interop.Object) {
    this.delegate.windowWillReturnFieldEditorToObject = value;
  }
  set windowwillresizetosize(value: (sender: NSWindow, frameSize: CGSize) => CGSize) {
    this.delegate.windowWillResizeToSize = value;
  }
  set windowwillusestandardframedefaultframe(value: (window: NSWindow, newFrame: CGRect) => CGRect) {
    this.delegate.windowWillUseStandardFrameDefaultFrame = value;
  }
  set windowshouldzoomtoframe(value: (window: NSWindow, newFrame: CGRect) => boolean) {
    this.delegate.windowShouldZoomToFrame = value;
  }
  set windowwillreturnundomanager(value: (window: NSWindow) => NSUndoManager) {
    this.delegate.windowWillReturnUndoManager = value;
  }
  set windowwillpositionsheetusingrect(value: (window: NSWindow, sheet: NSWindow, rect: CGRect) => CGRect) {
    this.delegate.windowWillPositionSheetUsingRect = value;
  }
  set windowshouldpopupdocumentpathmenu(value: (window: NSWindow, menu: NSMenu) => boolean) {
    this.delegate.windowShouldPopUpDocumentPathMenu = value;
  }
  set windowshoulddragdocumentwitheventfromwithpasteboard(value: (window: NSWindow, event: NSEvent, dragImageLocation: CGPoint, pasteboard: NSPasteboard) => boolean) {
    this.delegate.windowShouldDragDocumentWithEventFromWithPasteboard = value;
  }
  set windowwillusefullscreencontentsize(value: (window: NSWindow, proposedSize: CGSize) => CGSize) {
    this.delegate.windowWillUseFullScreenContentSize = value;
  }
  set windowwillusefullscreenpresentationoptions(value: (window: NSWindow, proposedOptions: interop.Enum<typeof NSApplicationPresentationOptions>) => interop.Enum<typeof NSApplicationPresentationOptions>) {
    this.delegate.windowWillUseFullScreenPresentationOptions = value;
  }
  set customwindowstoenterfullscreenforwindow(value: (window: NSWindow) => NSArray) {
    this.delegate.customWindowsToEnterFullScreenForWindow = value;
  }
  set windowstartcustomanimationtoenterfullscreenwithduration(value: (window: NSWindow, duration: number) => void) {
    this.delegate.windowStartCustomAnimationToEnterFullScreenWithDuration = value;
  }
  set windowdidfailtoenterfullscreen(value: (window: NSWindow) => void) {
    this.delegate.windowDidFailToEnterFullScreen = value;
  }
  set customwindowstoexitfullscreenforwindow(value: (window: NSWindow) => NSArray) {
    this.delegate.customWindowsToExitFullScreenForWindow = value;
  }
  set windowstartcustomanimationtoexitfullscreenwithduration(value: (window: NSWindow, duration: number) => void) {
    this.delegate.windowStartCustomAnimationToExitFullScreenWithDuration = value;
  }
  set customwindowstoenterfullscreenforwindowonscreen(value: (window: NSWindow, screen: NSScreen) => NSArray) {
    this.delegate.customWindowsToEnterFullScreenForWindowOnScreen = value;
  }
  set windowstartcustomanimationtoenterfullscreenonscreenwithduration(value: (window: NSWindow, screen: NSScreen, duration: number) => void) {
    this.delegate.windowStartCustomAnimationToEnterFullScreenOnScreenWithDuration = value;
  }
  set windowdidfailtoexitfullscreen(value: (window: NSWindow) => void) {
    this.delegate.windowDidFailToExitFullScreen = value;
  }
  set windowwillresizeforversionbrowserwithmaxpreferredsizemaxallowedsize(value: (window: NSWindow, maxPreferredFrameSize: CGSize, maxAllowedFrameSize: CGSize) => CGSize) {
    this.delegate.windowWillResizeForVersionBrowserWithMaxPreferredSizeMaxAllowedSize = value;
  }
  set windowwillencoderestorablestate(value: (window: NSWindow, state: NSCoder) => void) {
    this.delegate.windowWillEncodeRestorableState = value;
  }
  set windowdiddecoderestorablestate(value: (window: NSWindow, state: NSCoder) => void) {
    this.delegate.windowDidDecodeRestorableState = value;
  }
  set previewrepresentableactivityitemsforwindow(value: (window: NSWindow) => NSArray | null) {
    this.delegate.previewRepresentableActivityItemsForWindow = value;
  }
  set windowdidresize(value: (notification: NSNotification) => void) {
    this.delegate.windowDidResize = value;
  }
  set windowdidexpose(value: (notification: NSNotification) => void) {
    this.delegate.windowDidExpose = value;
  }
  set windowwillmove(value: (notification: NSNotification) => void) {
    this.delegate.windowWillMove = value;
  }
  set windowdidmove(value: (notification: NSNotification) => void) {
    this.delegate.windowDidMove = value;
  }
  set windowdidbecomekey(value: (notification: NSNotification) => void) {
    this.delegate.windowDidBecomeKey = value;
  }
  set windowdidresignkey(value: (notification: NSNotification) => void) {
    this.delegate.windowDidResignKey = value;
  }
  set windowdidbecomemain(value: (notification: NSNotification) => void) {
    this.delegate.windowDidBecomeMain = value;
  }
  set windowdidresignmain(value: (notification: NSNotification) => void) {
    this.delegate.windowDidResignMain = value;
  }
  set windowwillclose(value: (notification: NSNotification) => void) {
    this.delegate.windowWillClose = value;
  }
  set windowwillminiaturize(value: (notification: NSNotification) => void) {
    this.delegate.windowWillMiniaturize = value;
  }
  set windowdidminiaturize(value: (notification: NSNotification) => void) {
    this.delegate.windowDidMiniaturize = value;
  }
  set windowdiddeminiaturize(value: (notification: NSNotification) => void) {
    this.delegate.windowDidDeminiaturize = value;
  }
  set windowdidupdate(value: (notification: NSNotification) => void) {
    this.delegate.windowDidUpdate = value;
  }
  set windowdidchangescreen(value: (notification: NSNotification) => void) {
    this.delegate.windowDidChangeScreen = value;
  }
  set windowdidchangescreenprofile(value: (notification: NSNotification) => void) {
    this.delegate.windowDidChangeScreenProfile = value;
  }
  set windowdidchangebackingproperties(value: (notification: NSNotification) => void) {
    this.delegate.windowDidChangeBackingProperties = value;
  }
  set windowwillbeginsheet(value: (notification: NSNotification) => void) {
    this.delegate.windowWillBeginSheet = value;
  }
  set windowdidendsheet(value: (notification: NSNotification) => void) {
    this.delegate.windowDidEndSheet = value;
  }
  set windowwillstartliveresize(value: (notification: NSNotification) => void) {
    this.delegate.windowWillStartLiveResize = value;
  }
  set windowdidendliveresize(value: (notification: NSNotification) => void) {
    this.delegate.windowDidEndLiveResize = value;
  }
  set windowwillenterfullscreen(value: (notification: NSNotification) => void) {
    this.delegate.windowWillEnterFullScreen = value;
  }
  set windowdidenterfullscreen(value: (notification: NSNotification) => void) {
    this.delegate.windowDidEnterFullScreen = value;
  }
  set windowwillexitfullscreen(value: (notification: NSNotification) => void) {
    this.delegate.windowWillExitFullScreen = value;
  }
  set windowdidexitfullscreen(value: (notification: NSNotification) => void) {
    this.delegate.windowDidExitFullScreen = value;
  }
  set windowwillenterversionbrowser(value: (notification: NSNotification) => void) {
    this.delegate.windowWillEnterVersionBrowser = value;
  }
  set windowdidenterversionbrowser(value: (notification: NSNotification) => void) {
    this.delegate.windowDidEnterVersionBrowser = value;
  }
  set windowwillexitversionbrowser(value: (notification: NSNotification) => void) {
    this.delegate.windowWillExitVersionBrowser = value;
  }
  set windowdidexitversionbrowser(value: (notification: NSNotification) => void) {
    this.delegate.windowDidExitVersionBrowser = value;
  }
  set windowdidchangeocclusionstate(value: (notification: NSNotification) => void) {
    this.delegate.windowDidChangeOcclusionState = value;
  }
}

export class HTMLNSScrubberLayoutAttributesElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSScrubberLayoutAttributes.new();

  // itemIndex: number;
  // frame: CGRect;
  // alpha: number;
}

export class HTMLNSTextLayoutFragmentElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTextLayoutFragment.new();

  // readonly textLayoutManager: NSTextLayoutManager;
  // readonly textElement: NSTextElement | null;
  // readonly rangeInElement: NSTextRange;
  // readonly textLineFragments: NSArray;
  // layoutQueue: NSOperationQueue;
  // readonly state: interop.Enum<typeof NSTextLayoutFragmentState>;
  // readonly layoutFragmentFrame: CGRect;
  // readonly renderingSurfaceBounds: CGRect;
  // readonly leadingPadding: number;
  // readonly trailingPadding: number;
  // readonly topMargin: number;
  // readonly bottomMargin: number;
  // readonly textAttachmentViewProviders: NSArray;
  // supportsSecureCoding: boolean;
}

export class HTMLNSCursorElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSCursor.new();

  // currentCursor: NSCursor;
  // currentSystemCursor: NSCursor;
  // arrowCursor: NSCursor;
  // IBeamCursor: NSCursor;
  // pointingHandCursor: NSCursor;
  // closedHandCursor: NSCursor;
  // openHandCursor: NSCursor;
  // resizeLeftCursor: NSCursor;
  // resizeRightCursor: NSCursor;
  // resizeLeftRightCursor: NSCursor;
  // resizeUpCursor: NSCursor;
  // resizeDownCursor: NSCursor;
  // resizeUpDownCursor: NSCursor;
  // crosshairCursor: NSCursor;
  // disappearingItemCursor: NSCursor;
  // operationNotAllowedCursor: NSCursor;
  // dragLinkCursor: NSCursor;
  // dragCopyCursor: NSCursor;
  // contextualMenuCursor: NSCursor;
  // IBeamCursorForVerticalLayout: NSCursor;
  // readonly image: NSImage;
  // readonly hotSpot: CGPoint;
  // readonly isSetOnMouseExited: boolean;
  // readonly isSetOnMouseEntered: boolean;
  // supportsSecureCoding: boolean;
}

export class HTMLNSTabViewItemElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTabViewItem.new();

  // identifier: interop.Object;
  // color: NSColor;
  // image: NSImage;
  // view: NSView;
  // viewController: NSViewController;
  // readonly tabState: interop.Enum<typeof NSTabState>;
  // readonly tabView: NSTabView;
  // initialFirstResponder: NSView;
}

export class HTMLNSMenuItemBadgeElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSMenuItemBadge.new();

  // readonly itemCount: number;
  // readonly type: interop.Enum<typeof NSMenuItemBadgeType>;
  // readonly stringValue: NSString;
}

export class HTMLNSGridColumnElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSGridColumn.new();

  // readonly gridView: NSGridView | null;
  // readonly numberOfCells: number;
  // xPlacement: interop.Enum<typeof NSGridCellPlacement>;
  // width: number;
  // leadingPadding: number;
  // trailingPadding: number;
  // isHidden: boolean;
}

export class HTMLNSPathCellElement extends HTMLNSActionCellElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSPathCell.new();
  get delegate(): NSPathCellDelegateImpl {
    return (this.nativeObject.delegate ??= NSPathCellDelegateImpl.new()) as NSPathCellDelegateImpl;
  }

  // pathStyle: interop.Enum<typeof NSPathStyle>;
  // URL: NSURL;
  // pathComponentCellClass: interop.Object;
  // readonly clickedPathComponentCell: NSPathComponentCell;
  // doubleAction: string;
  // backgroundColor: NSColor;
  // placeholderAttributedString: NSAttributedString;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;

  set pathcellwilldisplayopenpanel(value: (pathCell: NSPathCell, openPanel: NSOpenPanel) => void) {
    this.delegate.pathCellWillDisplayOpenPanel = value;
  }
  set pathcellwillpopupmenu(value: (pathCell: NSPathCell, menu: NSMenu) => void) {
    this.delegate.pathCellWillPopUpMenu = value;
  }
}

export class HTMLNSWorkspaceAuthorizationElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSWorkspaceAuthorization.new();

}

export class HTMLNSTextLayoutManagerElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTextLayoutManager.new();
  get delegate(): NSTextLayoutManagerDelegateImpl {
    return (this.nativeObject.delegate ??= NSTextLayoutManagerDelegateImpl.new()) as NSTextLayoutManagerDelegateImpl;
  }

  // usesFontLeading: boolean;
  // limitsLayoutForSuspiciousContents: boolean;
  // usesHyphenation: boolean;
  // readonly textContentManager: NSTextContentManager;
  // textContainer: NSTextContainer;
  // readonly usageBoundsForTextContainer: CGRect;
  // readonly textViewportLayoutController: NSTextViewportLayoutController;
  // layoutQueue: NSOperationQueue;
  // textSelectionNavigation: NSTextSelectionNavigation;
  // renderingAttributesValidator: (p1: NSTextLayoutManager, p2: NSTextLayoutFragment) => void;
  // linkRenderingAttributes: NSDictionary;
  // supportsSecureCoding: boolean;
  // readonly documentRange: NSTextRange;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;

  set textlayoutmanagertextlayoutfragmentforlocationintextelement(value: (textLayoutManager: NSTextLayoutManager, location: NSTextLocation, textElement: NSTextElement) => NSTextLayoutFragment) {
    this.delegate.textLayoutManagerTextLayoutFragmentForLocationInTextElement = value;
  }
  set textlayoutmanagershouldbreaklinebeforelocationhyphenating(value: (textLayoutManager: NSTextLayoutManager, location: NSTextLocation, hyphenating: boolean) => boolean) {
    this.delegate.textLayoutManagerShouldBreakLineBeforeLocationHyphenating = value;
  }
  set textlayoutmanagerrenderingattributesforlinkatlocationdefaultattributes(value: (textLayoutManager: NSTextLayoutManager, link: interop.Object, location: NSTextLocation, renderingAttributes: NSDictionary | Record<string, unknown>) => NSDictionary) {
    this.delegate.textLayoutManagerRenderingAttributesForLinkAtLocationDefaultAttributes = value;
  }
}

export class HTMLNSWindowTabElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSWindowTab.new();

  // attributedTitle: NSAttributedString;
  // accessoryView: NSView;
}

export class HTMLNSDrawerElement extends HTMLNSResponderElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSDrawer.new();
  get delegate(): NSDrawerDelegateImpl {
    return (this.nativeObject.delegate ??= NSDrawerDelegateImpl.new()) as NSDrawerDelegateImpl;
  }

  // parentWindow: NSWindow;
  // contentView: NSView;
  // preferredEdge: interop.Enum<typeof NSRectEdge>;
  // readonly state: number;
  // readonly edge: interop.Enum<typeof NSRectEdge>;
  // contentSize: CGSize;
  // minContentSize: CGSize;
  // maxContentSize: CGSize;
  // leadingOffset: number;
  // trailingOffset: number;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
  // isAccessibilityElement: boolean;
  // accessibilityFrame: CGRect;
  // isAccessibilityFocused: boolean;
  // accessibilityActivationPoint: CGPoint;
  // accessibilityTopLevelUIElement: interop.Object;
  // accessibilityURL: NSURL;
  // accessibilityValue: interop.Object;
  // accessibilityTitleUIElement: interop.Object;
  // accessibilityOrientation: interop.Enum<typeof NSAccessibilityOrientation>;
  // accessibilityOverflowButton: interop.Object;
  // accessibilityParent: interop.Object;
  // accessibilitySearchButton: interop.Object;
  // accessibilitySearchMenu: interop.Object;
  // isAccessibilitySelected: boolean;
  // accessibilityShownMenu: interop.Object;
  // accessibilityMinValue: interop.Object;
  // accessibilityMaxValue: interop.Object;
  // accessibilityWindow: interop.Object;
  // isAccessibilityExpanded: boolean;
  // isAccessibilityEdited: boolean;
  // isAccessibilityEnabled: boolean;
  // accessibilityClearButton: interop.Object;
  // accessibilityCancelButton: interop.Object;
  // isAccessibilityProtectedContent: boolean;
  // isAccessibilityAlternateUIVisible: boolean;
  // isAccessibilityRequired: boolean;
  // accessibilityApplicationFocusedUIElement: interop.Object;
  // accessibilityMainWindow: interop.Object;
  // isAccessibilityHidden: boolean;
  // isAccessibilityFrontmost: boolean;
  // accessibilityFocusedWindow: interop.Object;
  // accessibilityExtrasMenuBar: interop.Object;
  // accessibilityMenuBar: interop.Object;
  // isAccessibilityOrderedByRow: boolean;
  // accessibilityHorizontalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityVerticalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityWarningValue: interop.Object;
  // accessibilityCriticalValue: interop.Object;
  // isAccessibilityDisclosed: boolean;
  // accessibilityDisclosedByRow: interop.Object;
  // accessibilityDisclosedRows: interop.Object;
  // accessibilityDisclosureLevel: number;
  // accessibilityMarkerValues: interop.Object;
  // accessibilityMarkerGroupUIElement: interop.Object;
  // accessibilityUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityRulerMarkerType: interop.Enum<typeof NSAccessibilityRulerMarkerType>;
  // accessibilityHorizontalScrollBar: interop.Object;
  // accessibilityVerticalScrollBar: interop.Object;
  // accessibilityLabelValue: number;
  // accessibilityDecrementButton: interop.Object;
  // accessibilityIncrementButton: interop.Object;
  // accessibilityHeader: interop.Object;
  // accessibilityColumnCount: number;
  // accessibilityRowCount: number;
  // accessibilityIndex: number;
  // accessibilitySortDirection: interop.Enum<typeof NSAccessibilitySortDirection>;
  // accessibilityRowIndexRange: _NSRange;
  // accessibilityColumnIndexRange: _NSRange;
  // accessibilityInsertionPointLineNumber: number;
  // accessibilitySharedCharacterRange: _NSRange;
  // accessibilityVisibleCharacterRange: _NSRange;
  // accessibilityNumberOfCharacters: number;
  // accessibilitySelectedTextRange: _NSRange;
  // accessibilityToolbarButton: interop.Object;
  // isAccessibilityModal: boolean;
  // accessibilityProxy: interop.Object;
  // isAccessibilityMain: boolean;
  // accessibilityFullScreenButton: interop.Object;
  // accessibilityGrowArea: interop.Object;
  // accessibilityDefaultButton: interop.Object;
  // accessibilityCloseButton: interop.Object;
  // accessibilityZoomButton: interop.Object;
  // accessibilityMinimizeButton: interop.Object;
  // isAccessibilityMinimized: boolean;

  set drawershouldopen(value: (sender: NSDrawer) => boolean) {
    this.delegate.drawerShouldOpen = value;
  }
  set drawershouldclose(value: (sender: NSDrawer) => boolean) {
    this.delegate.drawerShouldClose = value;
  }
  set drawerwillresizecontentstosize(value: (sender: NSDrawer, contentSize: CGSize) => CGSize) {
    this.delegate.drawerWillResizeContentsToSize = value;
  }
  set drawerwillopen(value: (notification: NSNotification) => void) {
    this.delegate.drawerWillOpen = value;
  }
  set drawerdidopen(value: (notification: NSNotification) => void) {
    this.delegate.drawerDidOpen = value;
  }
  set drawerwillclose(value: (notification: NSNotification) => void) {
    this.delegate.drawerWillClose = value;
  }
  set drawerdidclose(value: (notification: NSNotification) => void) {
    this.delegate.drawerDidClose = value;
  }
}

export class HTMLNSLayoutManagerElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSLayoutManager.new();
  get delegate(): NSLayoutManagerDelegateImpl {
    return (this.nativeObject.delegate ??= NSLayoutManagerDelegateImpl.new()) as NSLayoutManagerDelegateImpl;
  }

  // textStorage: NSTextStorage;
  // readonly textContainers: NSArray;
  // showsInvisibleCharacters: boolean;
  // showsControlCharacters: boolean;
  // usesDefaultHyphenation: boolean;
  // usesFontLeading: boolean;
  // allowsNonContiguousLayout: boolean;
  // readonly hasNonContiguousLayout: boolean;
  // limitsLayoutForSuspiciousContents: boolean;
  // backgroundLayoutEnabled: boolean;
  // defaultAttachmentScaling: interop.Enum<typeof NSImageScaling>;
  // typesetter: NSTypesetter;
  // typesetterBehavior: interop.Enum<typeof NSTypesetterBehavior>;
  // readonly numberOfGlyphs: number;
  // readonly extraLineFragmentRect: CGRect;
  // readonly extraLineFragmentUsedRect: CGRect;
  // readonly extraLineFragmentTextContainer: NSTextContainer;
  // readonly firstTextView: NSTextView;
  // readonly textViewForBeginningOfSelection: NSTextView;
  // usesScreenFonts: boolean;
  // hyphenationFactor: number;
  // glyphGenerator: NSGlyphGenerator;
  // supportsSecureCoding: boolean;

  set layoutmanagershouldgenerateglyphspropertiescharacterindexesfontforglyphrange(value: (layoutManager: NSLayoutManager, glyphs: interop.PointerConvertible, props: interop.PointerConvertible, charIndexes: interop.PointerConvertible, aFont: NSFont, glyphRange: _NSRange) => number) {
    this.delegate.layoutManagerShouldGenerateGlyphsPropertiesCharacterIndexesFontForGlyphRange = value;
  }
  set layoutmanagerlinespacingafterglyphatindexwithproposedlinefragmentrect(value: (layoutManager: NSLayoutManager, glyphIndex: number, rect: CGRect) => number) {
    this.delegate.layoutManagerLineSpacingAfterGlyphAtIndexWithProposedLineFragmentRect = value;
  }
  set layoutmanagerparagraphspacingbeforeglyphatindexwithproposedlinefragmentrect(value: (layoutManager: NSLayoutManager, glyphIndex: number, rect: CGRect) => number) {
    this.delegate.layoutManagerParagraphSpacingBeforeGlyphAtIndexWithProposedLineFragmentRect = value;
  }
  set layoutmanagerparagraphspacingafterglyphatindexwithproposedlinefragmentrect(value: (layoutManager: NSLayoutManager, glyphIndex: number, rect: CGRect) => number) {
    this.delegate.layoutManagerParagraphSpacingAfterGlyphAtIndexWithProposedLineFragmentRect = value;
  }
  set layoutmanagershoulduseactionforcontrolcharacteratindex(value: (layoutManager: NSLayoutManager, action: interop.Enum<typeof NSControlCharacterAction>, charIndex: number) => interop.Enum<typeof NSControlCharacterAction>) {
    this.delegate.layoutManagerShouldUseActionForControlCharacterAtIndex = value;
  }
  set layoutmanagershouldbreaklinebywordbeforecharacteratindex(value: (layoutManager: NSLayoutManager, charIndex: number) => boolean) {
    this.delegate.layoutManagerShouldBreakLineByWordBeforeCharacterAtIndex = value;
  }
  set layoutmanagershouldbreaklinebyhyphenatingbeforecharacteratindex(value: (layoutManager: NSLayoutManager, charIndex: number) => boolean) {
    this.delegate.layoutManagerShouldBreakLineByHyphenatingBeforeCharacterAtIndex = value;
  }
  set layoutmanagerboundingboxforcontrolglyphatindexfortextcontainerproposedlinefragmentglyphpositioncharacterindex(value: (layoutManager: NSLayoutManager, glyphIndex: number, textContainer: NSTextContainer, proposedRect: CGRect, glyphPosition: CGPoint, charIndex: number) => CGRect) {
    this.delegate.layoutManagerBoundingBoxForControlGlyphAtIndexForTextContainerProposedLineFragmentGlyphPositionCharacterIndex = value;
  }
  set layoutmanagershouldsetlinefragmentrectlinefragmentusedrectbaselineoffsetintextcontainerforglyphrange(value: (layoutManager: NSLayoutManager, lineFragmentRect: interop.PointerConvertible, lineFragmentUsedRect: interop.PointerConvertible, baselineOffset: interop.PointerConvertible, textContainer: NSTextContainer, glyphRange: _NSRange) => boolean) {
    this.delegate.layoutManagerShouldSetLineFragmentRectLineFragmentUsedRectBaselineOffsetInTextContainerForGlyphRange = value;
  }
  set layoutmanagerdidinvalidatelayout(value: (sender: NSLayoutManager) => void) {
    this.delegate.layoutManagerDidInvalidateLayout = value;
  }
  set layoutmanagerdidcompletelayoutfortextcontaineratend(value: (layoutManager: NSLayoutManager, textContainer: NSTextContainer | null, layoutFinishedFlag: boolean) => void) {
    this.delegate.layoutManagerDidCompleteLayoutForTextContainerAtEnd = value;
  }
  set layoutmanagertextcontainerdidchangegeometryfromsize(value: (layoutManager: NSLayoutManager, textContainer: NSTextContainer, oldSize: CGSize) => void) {
    this.delegate.layoutManagerTextContainerDidChangeGeometryFromSize = value;
  }
  set layoutmanagershouldusetemporaryattributesfordrawingtoscreenatcharacterindexeffectiverange(value: (layoutManager: NSLayoutManager, attrs: NSDictionary | Record<string, unknown>, toScreen: boolean, charIndex: number, effectiveCharRange: interop.PointerConvertible) => NSDictionary) {
    this.delegate.layoutManagerShouldUseTemporaryAttributesForDrawingToScreenAtCharacterIndexEffectiveRange = value;
  }
}

export class HTMLNSSharingServiceElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSSharingService.new();
  get delegate(): NSSharingServiceDelegateImpl {
    return (this.nativeObject.delegate ??= NSSharingServiceDelegateImpl.new()) as NSSharingServiceDelegateImpl;
  }

  // readonly title: NSString;
  // readonly image: NSImage;
  // readonly alternateImage: NSImage;
  // readonly messageBody: NSString;
  // readonly permanentLink: NSURL;
  // readonly accountName: NSString;
  // readonly attachmentFileURLs: NSArray;

  set sharingservicewillshareitems(value: (sharingService: NSSharingService, items: NSArray | unknown[]) => void) {
    this.delegate.sharingServiceWillShareItems = value;
  }
  set sharingservicedidfailtoshareitemserror(value: (sharingService: NSSharingService, items: NSArray | unknown[], error: NSError) => void) {
    this.delegate.sharingServiceDidFailToShareItemsError = value;
  }
  set sharingservicedidshareitems(value: (sharingService: NSSharingService, items: NSArray | unknown[]) => void) {
    this.delegate.sharingServiceDidShareItems = value;
  }
  set sharingservicesourceframeonscreenforshareitem(value: (sharingService: NSSharingService, item: interop.Object) => CGRect) {
    this.delegate.sharingServiceSourceFrameOnScreenForShareItem = value;
  }
  set sharingservicetransitionimageforshareitemcontentrect(value: (sharingService: NSSharingService, item: interop.Object, contentRect: interop.PointerConvertible) => NSImage) {
    this.delegate.sharingServiceTransitionImageForShareItemContentRect = value;
  }
  set sharingservicesourcewindowforshareitemssharingcontentscope(value: (sharingService: NSSharingService, items: NSArray | unknown[], sharingContentScope: interop.PointerConvertible) => NSWindow) {
    this.delegate.sharingServiceSourceWindowForShareItemsSharingContentScope = value;
  }
  set anchoringviewforsharingserviceshowrelativetorectpreferrededge(value: (sharingService: NSSharingService, positioningRect: interop.PointerConvertible, preferredEdge: interop.PointerConvertible) => NSView) {
    this.delegate.anchoringViewForSharingServiceShowRelativeToRectPreferredEdge = value;
  }
}

export class HTMLNSTreeControllerElement extends HTMLNSObjectControllerElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTreeController.new();

  // readonly arrangedObjects: NSTreeNode;
  // content: interop.Object;
  // readonly canInsert: boolean;
  // readonly canInsertChild: boolean;
  // readonly canAddChild: boolean;
  // avoidsEmptySelection: boolean;
  // preservesSelection: boolean;
  // selectsInsertedObjects: boolean;
  // alwaysUsesMultipleValuesMarker: boolean;
  // readonly selectedObjects: NSArray;
  // readonly selectionIndexPaths: NSArray;
  // readonly selectionIndexPath: NSIndexPath;
  // readonly selectedNodes: NSArray;
}

export class HTMLNSTypesetterElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTypesetter.new();

  // usesFontLeading: boolean;
  // typesetterBehavior: interop.Enum<typeof NSTypesetterBehavior>;
  // hyphenationFactor: number;
  // lineFragmentPadding: number;
  // bidiProcessingEnabled: boolean;
  // attributedString: NSAttributedString;
  // readonly paragraphGlyphRange: _NSRange;
  // readonly paragraphSeparatorGlyphRange: _NSRange;
  // readonly paragraphCharacterRange: _NSRange;
  // readonly paragraphSeparatorCharacterRange: _NSRange;
  // readonly attributesForExtraLineFragment: NSDictionary;
  // readonly layoutManager: NSLayoutManager;
  // readonly textContainers: NSArray;
  // readonly currentTextContainer: NSTextContainer;
  // readonly currentParagraphStyle: NSParagraphStyle;
  // sharedSystemTypesetter: NSTypesetter;
  // defaultTypesetterBehavior: interop.Enum<typeof NSTypesetterBehavior>;
}

export class HTMLNSScrubberSelectionStyleElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSScrubberSelectionStyle.new();

  // outlineOverlayStyle: NSScrubberSelectionStyle;
  // roundedBackgroundStyle: NSScrubberSelectionStyle;
}

export class HTMLNSPreviewRepresentingActivityItemElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSPreviewRepresentingActivityItem.new();

  // readonly item: interop.Object;
  // readonly title: NSString;
  // readonly imageProvider: NSItemProvider;
  // readonly iconProvider: NSItemProvider;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
}

export class HTMLNSDraggingSessionElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSDraggingSession.new();

  // draggingFormation: interop.Enum<typeof NSDraggingFormation>;
  // animatesToStartingPositionsOnCancelOrFail: boolean;
  // draggingLeaderIndex: number;
  // readonly draggingPasteboard: NSPasteboard;
  // readonly draggingSequenceNumber: number;
  // readonly draggingLocation: CGPoint;
}

export class HTMLNSCollectionViewDiffableDataSourceElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSCollectionViewDiffableDataSource.new();

  // supplementaryViewProvider: (p1: NSCollectionView, p2: NSString | string, p3: NSIndexPath) => NSView;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
}

export class HTMLNSTextContentManagerElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTextContentManager.new();
  get delegate(): NSTextContentManagerDelegateImpl {
    return (this.nativeObject.delegate ??= NSTextContentManagerDelegateImpl.new()) as NSTextContentManagerDelegateImpl;
  }

  // readonly textLayoutManagers: NSArray;
  // primaryTextLayoutManager: NSTextLayoutManager;
  // readonly hasEditingTransaction: boolean;
  // automaticallySynchronizesTextLayoutManagers: boolean;
  // automaticallySynchronizesToBackingStore: boolean;
  // readonly documentRange: NSTextRange;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
  // supportsSecureCoding: boolean;

  set textcontentmanagertextelementatlocation(value: (textContentManager: NSTextContentManager, location: NSTextLocation) => NSTextElement) {
    this.delegate.textContentManagerTextElementAtLocation = value;
  }
  set textcontentmanagershouldenumeratetextelementoptions(value: (textContentManager: NSTextContentManager, textElement: NSTextElement, options: interop.Enum<typeof NSTextContentManagerEnumerationOptions>) => boolean) {
    this.delegate.textContentManagerShouldEnumerateTextElementOptions = value;
  }
}

export class HTMLNSPrinterElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSPrinter.new();

  // printerNames: NSArray;
  // printerTypes: NSArray;
  // readonly name: NSString;
  // readonly type: NSString;
  // readonly languageLevel: number;
  // readonly deviceDescription: NSDictionary;
}

export class HTMLNSAppearanceElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSAppearance.new();

  // readonly name: NSString;
  // currentAppearance: NSAppearance;
  // currentDrawingAppearance: NSAppearance;
  // readonly allowsVibrancy: boolean;
  // supportsSecureCoding: boolean;
}

export class HTMLNSTextInputContextElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTextInputContext.new();

  // currentInputContext: NSTextInputContext;
  // readonly client: NSTextInputClient;
  // acceptsGlyphInfo: boolean;
  // readonly keyboardInputSources: NSArray;
}

export class HTMLNSCustomImageRepElement extends HTMLNSImageRepElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSCustomImageRep.new();

  // readonly drawingHandler: (p1: CGRect) => boolean;
  // readonly drawSelector: string;
  // readonly delegate: interop.Object;
}

export class HTMLNSTextCheckingControllerElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTextCheckingController.new();

  // readonly client: NSTextCheckingClient;
  // spellCheckerDocumentTag: number;
}

export class HTMLNSColorSpaceElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSColorSpace.new();

  // readonly ICCProfileData: NSData;
  // readonly colorSyncProfile: interop.Pointer;
  // readonly CGColorSpace: interop.Pointer;
  // readonly numberOfColorComponents: number;
  // readonly colorSpaceModel: interop.Enum<typeof NSColorSpaceModel>;
  // readonly localizedName: NSString;
  // sRGBColorSpace: NSColorSpace;
  // genericGamma22GrayColorSpace: NSColorSpace;
  // extendedSRGBColorSpace: NSColorSpace;
  // extendedGenericGamma22GrayColorSpace: NSColorSpace;
  // displayP3ColorSpace: NSColorSpace;
  // adobeRGB1998ColorSpace: NSColorSpace;
  // genericRGBColorSpace: NSColorSpace;
  // genericGrayColorSpace: NSColorSpace;
  // genericCMYKColorSpace: NSColorSpace;
  // deviceRGBColorSpace: NSColorSpace;
  // deviceGrayColorSpace: NSColorSpace;
  // deviceCMYKColorSpace: NSColorSpace;
  // supportsSecureCoding: boolean;
}

export class HTMLNSAnimationContextElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSAnimationContext.new();

  // currentContext: NSAnimationContext;
  // duration: number;
  // timingFunction: CAMediaTimingFunction;
  // completionHandler: () => void;
  // allowsImplicitAnimation: boolean;
}

export class HTMLNSStringDrawingContextElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSStringDrawingContext.new();

  // minimumScaleFactor: number;
  // readonly actualScaleFactor: number;
  // readonly totalBounds: CGRect;
}

export class HTMLNSBezierPathElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSBezierPath.new();

  // defaultMiterLimit: number;
  // defaultFlatness: number;
  // defaultWindingRule: interop.Enum<typeof NSWindingRule>;
  // defaultLineCapStyle: interop.Enum<typeof NSLineCapStyle>;
  // defaultLineJoinStyle: interop.Enum<typeof NSLineJoinStyle>;
  // defaultLineWidth: number;
  // lineWidth: number;
  // lineCapStyle: interop.Enum<typeof NSLineCapStyle>;
  // lineJoinStyle: interop.Enum<typeof NSLineJoinStyle>;
  // windingRule: interop.Enum<typeof NSWindingRule>;
  // miterLimit: number;
  // flatness: number;
  // readonly bezierPathByFlatteningPath: NSBezierPath;
  // readonly bezierPathByReversingPath: NSBezierPath;
  // readonly isEmpty: boolean;
  // readonly currentPoint: CGPoint;
  // readonly controlPointBounds: CGRect;
  // readonly bounds: CGRect;
  // readonly elementCount: number;
  // supportsSecureCoding: boolean;
}

export class HTMLNSAccessibilityCustomActionElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSAccessibilityCustomAction.new();

  // handler: () => boolean;
  // target: NSObject;
  // selector: string;
}

export class HTMLNSViewElement extends HTMLNSResponderElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSView.new();

  // readonly window: NSWindow;
  // readonly superview: NSView;
  // readonly opaqueAncestor: NSView;
  // isHidden: boolean;
  // readonly isHiddenOrHasHiddenAncestor: boolean;
  // readonly wantsDefaultClipping: boolean;
  // postsFrameChangedNotifications: boolean;
  // autoresizesSubviews: boolean;
  // autoresizingMask: interop.Enum<typeof NSAutoresizingMaskOptions>;
  // frame: CGRect;
  // frameRotation: number;
  // frameCenterRotation: number;
  // boundsRotation: number;
  // bounds: CGRect;
  // readonly isFlipped: boolean;
  // readonly isRotatedFromBase: boolean;
  // readonly isRotatedOrScaledFromBase: boolean;
  // readonly isOpaque: boolean;
  // canDrawConcurrently: boolean;
  // readonly canDraw: boolean;
  // needsDisplay: boolean;
  // focusView: NSView;
  // readonly visibleRect: CGRect;
  // readonly tag: number;
  // readonly needsPanelToBecomeKey: boolean;
  // readonly mouseDownCanMoveWindow: boolean;
  // acceptsTouchEvents: boolean;
  // wantsRestingTouches: boolean;
  // layerContentsRedrawPolicy: interop.Enum<typeof NSViewLayerContentsRedrawPolicy>;
  // layerContentsPlacement: interop.Enum<typeof NSViewLayerContentsPlacement>;
  // wantsLayer: boolean;
  // layer: CALayer;
  // readonly wantsUpdateLayer: boolean;
  // canDrawSubviewsIntoLayer: boolean;
  // needsLayout: boolean;
  // alphaValue: number;
  // layerUsesCoreImageFilters: boolean;
  // compositingFilter: CIFilter;
  // shadow: NSShadow;
  // clipsToBounds: boolean;
  // postsBoundsChangedNotifications: boolean;
  // readonly enclosingScrollView: NSScrollView;
  // defaultMenu: NSMenu;
  // readonly inLiveResize: boolean;
  // readonly preservesContentDuringLiveResize: boolean;
  // readonly rectPreservedDuringLiveResize: CGRect;
  // readonly inputContext: NSTextInputContext;
  // userInterfaceLayoutDirection: interop.Enum<typeof NSUserInterfaceLayoutDirection>;
  // isCompatibleWithResponsiveScrolling: boolean;
  // preparedContentRect: CGRect;
  // readonly allowsVibrancy: boolean;
  // nextKeyView: NSView;
  // readonly previousKeyView: NSView;
  // readonly nextValidKeyView: NSView;
  // readonly previousValidKeyView: NSView;
  // readonly canBecomeKeyView: boolean;
  // focusRingType: interop.Enum<typeof NSFocusRingType>;
  // defaultFocusRingType: interop.Enum<typeof NSFocusRingType>;
  // readonly focusRingMaskBounds: CGRect;
  // readonly heightAdjustLimit: number;
  // readonly widthAdjustLimit: number;
  // readonly pageHeader: NSAttributedString;
  // readonly pageFooter: NSAttributedString;
  // readonly printJobTitle: NSString;
  // readonly registeredDraggedTypes: NSArray;
  // readonly isInFullScreenMode: boolean;
  // readonly isDrawingFindIndicator: boolean;
  // allowedTouchTypes: interop.Enum<typeof NSTouchTypeMask>;
  // readonly safeAreaInsets: NSEdgeInsets;
  // additionalSafeAreaInsets: NSEdgeInsets;
  // readonly safeAreaLayoutGuide: NSLayoutGuide;
  // readonly safeAreaRect: CGRect;
  // readonly layoutMarginsGuide: NSLayoutGuide;
  // readonly trackingAreas: NSArray;
  // readonly enclosingMenuItem: NSMenuItem;
  // readonly candidateListTouchBarItem: NSCandidateListTouchBarItem;
  // readonly leadingAnchor: NSLayoutXAxisAnchor;
  // readonly trailingAnchor: NSLayoutXAxisAnchor;
  // readonly leftAnchor: NSLayoutXAxisAnchor;
  // readonly rightAnchor: NSLayoutXAxisAnchor;
  // readonly topAnchor: NSLayoutYAxisAnchor;
  // readonly bottomAnchor: NSLayoutYAxisAnchor;
  // readonly widthAnchor: NSLayoutDimension;
  // readonly heightAnchor: NSLayoutDimension;
  // readonly centerXAnchor: NSLayoutXAxisAnchor;
  // readonly centerYAnchor: NSLayoutYAxisAnchor;
  // readonly firstBaselineAnchor: NSLayoutYAxisAnchor;
  // readonly lastBaselineAnchor: NSLayoutYAxisAnchor;
  // readonly constraints: NSArray;
  // needsUpdateConstraints: boolean;
  // translatesAutoresizingMaskIntoConstraints: boolean;
  // requiresConstraintBasedLayout: boolean;
  // readonly alignmentRectInsets: NSEdgeInsets;
  // readonly firstBaselineOffsetFromTop: number;
  // readonly lastBaselineOffsetFromBottom: number;
  // readonly baselineOffsetFromBottom: number;
  // readonly intrinsicContentSize: CGSize;
  // isHorizontalContentSizeConstraintActive: boolean;
  // isVerticalContentSizeConstraintActive: boolean;
  // readonly fittingSize: CGSize;
  // readonly hasAmbiguousLayout: boolean;
  // readonly layoutGuides: NSArray;
  // wantsBestResolutionOpenGLSurface: boolean;
  // wantsExtendedDynamicRangeOpenGLSurface: boolean;
  // pressureConfiguration: NSPressureConfiguration;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
  // appearance: NSAppearance;
  // readonly effectiveAppearance: NSAppearance;
  // isAccessibilityElement: boolean;
  // accessibilityFrame: CGRect;
  // isAccessibilityFocused: boolean;
  // accessibilityActivationPoint: CGPoint;
  // accessibilityTopLevelUIElement: interop.Object;
  // accessibilityURL: NSURL;
  // accessibilityValue: interop.Object;
  // accessibilityTitleUIElement: interop.Object;
  // accessibilityOrientation: interop.Enum<typeof NSAccessibilityOrientation>;
  // accessibilityOverflowButton: interop.Object;
  // accessibilityParent: interop.Object;
  // accessibilitySearchButton: interop.Object;
  // accessibilitySearchMenu: interop.Object;
  // isAccessibilitySelected: boolean;
  // accessibilityShownMenu: interop.Object;
  // accessibilityMinValue: interop.Object;
  // accessibilityMaxValue: interop.Object;
  // accessibilityWindow: interop.Object;
  // isAccessibilityExpanded: boolean;
  // isAccessibilityEdited: boolean;
  // isAccessibilityEnabled: boolean;
  // accessibilityClearButton: interop.Object;
  // accessibilityCancelButton: interop.Object;
  // isAccessibilityProtectedContent: boolean;
  // isAccessibilityAlternateUIVisible: boolean;
  // isAccessibilityRequired: boolean;
  // accessibilityApplicationFocusedUIElement: interop.Object;
  // accessibilityMainWindow: interop.Object;
  // isAccessibilityHidden: boolean;
  // isAccessibilityFrontmost: boolean;
  // accessibilityFocusedWindow: interop.Object;
  // accessibilityExtrasMenuBar: interop.Object;
  // accessibilityMenuBar: interop.Object;
  // isAccessibilityOrderedByRow: boolean;
  // accessibilityHorizontalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityVerticalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityWarningValue: interop.Object;
  // accessibilityCriticalValue: interop.Object;
  // isAccessibilityDisclosed: boolean;
  // accessibilityDisclosedByRow: interop.Object;
  // accessibilityDisclosedRows: interop.Object;
  // accessibilityDisclosureLevel: number;
  // accessibilityMarkerValues: interop.Object;
  // accessibilityMarkerGroupUIElement: interop.Object;
  // accessibilityUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityRulerMarkerType: interop.Enum<typeof NSAccessibilityRulerMarkerType>;
  // accessibilityHorizontalScrollBar: interop.Object;
  // accessibilityVerticalScrollBar: interop.Object;
  // accessibilityLabelValue: number;
  // accessibilityDecrementButton: interop.Object;
  // accessibilityIncrementButton: interop.Object;
  // accessibilityHeader: interop.Object;
  // accessibilityColumnCount: number;
  // accessibilityRowCount: number;
  // accessibilityIndex: number;
  // accessibilitySortDirection: interop.Enum<typeof NSAccessibilitySortDirection>;
  // accessibilityRowIndexRange: _NSRange;
  // accessibilityColumnIndexRange: _NSRange;
  // accessibilityInsertionPointLineNumber: number;
  // accessibilitySharedCharacterRange: _NSRange;
  // accessibilityVisibleCharacterRange: _NSRange;
  // accessibilityNumberOfCharacters: number;
  // accessibilitySelectedTextRange: _NSRange;
  // accessibilityToolbarButton: interop.Object;
  // isAccessibilityModal: boolean;
  // accessibilityProxy: interop.Object;
  // isAccessibilityMain: boolean;
  // accessibilityFullScreenButton: interop.Object;
  // accessibilityGrowArea: interop.Object;
  // accessibilityDefaultButton: interop.Object;
  // accessibilityCloseButton: interop.Object;
  // accessibilityZoomButton: interop.Object;
  // accessibilityMinimizeButton: interop.Object;
  // isAccessibilityMinimized: boolean;
}

export class HTMLNSImageElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSImage.new();
  get delegate(): NSImageDelegateImpl {
    return (this.nativeObject.delegate ??= NSImageDelegateImpl.new()) as NSImageDelegateImpl;
  }

  // size: CGSize;
  // backgroundColor: NSColor;
  // usesEPSOnResolutionMismatch: boolean;
  // prefersColorMatch: boolean;
  // matchesOnMultipleResolution: boolean;
  // matchesOnlyOnBestFittingAxis: boolean;
  // readonly TIFFRepresentation: NSData;
  // readonly representations: NSArray;
  // readonly isValid: boolean;
  // imageTypes: NSArray;
  // imageUnfilteredTypes: NSArray;
  // cacheMode: interop.Enum<typeof NSImageCacheMode>;
  // alignmentRect: CGRect;
  // isTemplate: boolean;
  // capInsets: NSEdgeInsets;
  // resizingMode: interop.Enum<typeof NSImageResizingMode>;
  // readonly symbolConfiguration: NSImageSymbolConfiguration;
  // readonly locale: NSLocale;

  set imagedidnotdrawinrect(value: (sender: NSImage, rect: CGRect) => NSImage) {
    this.delegate.imageDidNotDrawInRect = value;
  }
  set imagewillloadrepresentation(value: (image: NSImage, rep: NSImageRep) => void) {
    this.delegate.imageWillLoadRepresentation = value;
  }
  set imagedidloadrepresentationheader(value: (image: NSImage, rep: NSImageRep) => void) {
    this.delegate.imageDidLoadRepresentationHeader = value;
  }
  set imagedidloadpartofrepresentationwithvalidrows(value: (image: NSImage, rep: NSImageRep, rows: number) => void) {
    this.delegate.imageDidLoadPartOfRepresentationWithValidRows = value;
  }
  set imagedidloadrepresentationwithstatus(value: (image: NSImage, rep: NSImageRep, status: interop.Enum<typeof NSImageLoadStatus>) => void) {
    this.delegate.imageDidLoadRepresentationWithStatus = value;
  }
}

export class HTMLNSToolbarElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSToolbar.new();
  get delegate(): NSToolbarDelegateImpl {
    return (this.nativeObject.delegate ??= NSToolbarDelegateImpl.new()) as NSToolbarDelegateImpl;
  }

  // isVisible: boolean;
  // readonly customizationPaletteIsRunning: boolean;
  // displayMode: interop.Enum<typeof NSToolbarDisplayMode>;
  // sizeMode: interop.Enum<typeof NSToolbarSizeMode>;
  // showsBaselineSeparator: boolean;
  // allowsUserCustomization: boolean;
  // readonly identifier: NSString;
  // readonly items: NSArray;
  // readonly visibleItems: NSArray;
  // centeredItemIdentifiers: NSSet;
  // autosavesConfiguration: boolean;
  // readonly configurationDictionary: NSDictionary;
  // allowsExtensionItems: boolean;
  // fullScreenAccessoryView: NSView;
  // fullScreenAccessoryViewMinHeight: number;
  // fullScreenAccessoryViewMaxHeight: number;

  set toolbaritemforitemidentifierwillbeinsertedintotoolbar(value: (toolbar: NSToolbar, itemIdentifier: NSString | string, flag: boolean) => NSToolbarItem) {
    this.delegate.toolbarItemForItemIdentifierWillBeInsertedIntoToolbar = value;
  }
  set toolbardefaultitemidentifiers(value: (toolbar: NSToolbar) => NSArray) {
    this.delegate.toolbarDefaultItemIdentifiers = value;
  }
  set toolbaralloweditemidentifiers(value: (toolbar: NSToolbar) => NSArray) {
    this.delegate.toolbarAllowedItemIdentifiers = value;
  }
  set toolbarselectableitemidentifiers(value: (toolbar: NSToolbar) => NSArray) {
    this.delegate.toolbarSelectableItemIdentifiers = value;
  }
  set toolbarimmovableitemidentifiers(value: (toolbar: NSToolbar) => NSSet) {
    this.delegate.toolbarImmovableItemIdentifiers = value;
  }
  set toolbaritemidentifiercanbeinsertedatindex(value: (toolbar: NSToolbar, itemIdentifier: NSString | string, index: number) => boolean) {
    this.delegate.toolbarItemIdentifierCanBeInsertedAtIndex = value;
  }
  set toolbarwilladditem(value: (notification: NSNotification) => void) {
    this.delegate.toolbarWillAddItem = value;
  }
  set toolbardidremoveitem(value: (notification: NSNotification) => void) {
    this.delegate.toolbarDidRemoveItem = value;
  }
}

export class HTMLNSTabViewElement extends HTMLNSViewElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTabView.new();
  get delegate(): NSTabViewDelegateImpl {
    return (this.nativeObject.delegate ??= NSTabViewDelegateImpl.new()) as NSTabViewDelegateImpl;
  }

  // readonly selectedTabViewItem: NSTabViewItem;
  // font: NSFont;
  // tabViewType: interop.Enum<typeof NSTabViewType>;
  // tabPosition: interop.Enum<typeof NSTabPosition>;
  // tabViewBorderType: interop.Enum<typeof NSTabViewBorderType>;
  // allowsTruncatedLabels: boolean;
  // readonly minimumSize: CGSize;
  // drawsBackground: boolean;
  // controlSize: interop.Enum<typeof NSControlSize>;
  // readonly contentRect: CGRect;
  // readonly numberOfTabViewItems: number;
  // controlTint: interop.Enum<typeof NSControlTint>;

  set tabviewshouldselecttabviewitem(value: (tabView: NSTabView, tabViewItem: NSTabViewItem | null) => boolean) {
    this.delegate.tabViewShouldSelectTabViewItem = value;
  }
  set tabviewwillselecttabviewitem(value: (tabView: NSTabView, tabViewItem: NSTabViewItem | null) => void) {
    this.delegate.tabViewWillSelectTabViewItem = value;
  }
  set tabviewdidselecttabviewitem(value: (tabView: NSTabView, tabViewItem: NSTabViewItem | null) => void) {
    this.delegate.tabViewDidSelectTabViewItem = value;
  }
  set tabviewdidchangenumberoftabviewitems(value: (tabView: NSTabView) => void) {
    this.delegate.tabViewDidChangeNumberOfTabViewItems = value;
  }
}

export class HTMLNSApplicationElement extends HTMLNSResponderElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSApplication.sharedApplication;
  get delegate(): NSApplicationDelegateImpl {
    return (this.nativeObject.delegate ??= NSApplicationDelegateImpl.new()) as NSApplicationDelegateImpl;
  }

  // sharedApplication: NSApplication;
  // readonly mainWindow: NSWindow;
  // readonly keyWindow: NSWindow;
  // readonly isActive: boolean;
  // readonly isHidden: boolean;
  // readonly isRunning: boolean;
  // readonly modalWindow: NSWindow;
  // readonly windows: NSArray;
  // mainMenu: NSMenu;
  // helpMenu: NSMenu;
  // applicationIconImage: NSImage;
  // readonly dockTile: NSDockTile;
  // presentationOptions: interop.Enum<typeof NSApplicationPresentationOptions>;
  // readonly currentSystemPresentationOptions: interop.Enum<typeof NSApplicationPresentationOptions>;
  // readonly occlusionState: interop.Enum<typeof NSApplicationOcclusionState>;
  // readonly isProtectedDataAvailable: boolean;
  // appearance: NSAppearance;
  // readonly effectiveAppearance: NSAppearance;
  // readonly currentEvent: NSEvent;
  // windowsMenu: NSMenu;
  // readonly isFullKeyboardAccessEnabled: boolean;
  // servicesMenu: NSMenu;
  // servicesProvider: interop.Object;
  // readonly userInterfaceLayoutDirection: interop.Enum<typeof NSUserInterfaceLayoutDirection>;
  // readonly isRegisteredForRemoteNotifications: boolean;
  // readonly enabledRemoteNotificationTypes: interop.Enum<typeof NSRemoteNotificationType>;
  // readonly context: NSGraphicsContext;
  // isAutomaticCustomizeTouchBarMenuItemEnabled: boolean;
  // readonly orderedDocuments: NSArray;
  // readonly orderedWindows: NSArray;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
  // isAccessibilityElement: boolean;
  // accessibilityFrame: CGRect;
  // isAccessibilityFocused: boolean;
  // accessibilityActivationPoint: CGPoint;
  // accessibilityTopLevelUIElement: interop.Object;
  // accessibilityURL: NSURL;
  // accessibilityValue: interop.Object;
  // accessibilityTitleUIElement: interop.Object;
  // accessibilityOrientation: interop.Enum<typeof NSAccessibilityOrientation>;
  // accessibilityOverflowButton: interop.Object;
  // accessibilityParent: interop.Object;
  // accessibilitySearchButton: interop.Object;
  // accessibilitySearchMenu: interop.Object;
  // isAccessibilitySelected: boolean;
  // accessibilityShownMenu: interop.Object;
  // accessibilityMinValue: interop.Object;
  // accessibilityMaxValue: interop.Object;
  // accessibilityWindow: interop.Object;
  // isAccessibilityExpanded: boolean;
  // isAccessibilityEdited: boolean;
  // isAccessibilityEnabled: boolean;
  // accessibilityClearButton: interop.Object;
  // accessibilityCancelButton: interop.Object;
  // isAccessibilityProtectedContent: boolean;
  // isAccessibilityAlternateUIVisible: boolean;
  // isAccessibilityRequired: boolean;
  // accessibilityApplicationFocusedUIElement: interop.Object;
  // accessibilityMainWindow: interop.Object;
  // isAccessibilityHidden: boolean;
  // isAccessibilityFrontmost: boolean;
  // accessibilityFocusedWindow: interop.Object;
  // accessibilityExtrasMenuBar: interop.Object;
  // accessibilityMenuBar: interop.Object;
  // isAccessibilityOrderedByRow: boolean;
  // accessibilityHorizontalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityVerticalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityWarningValue: interop.Object;
  // accessibilityCriticalValue: interop.Object;
  // isAccessibilityDisclosed: boolean;
  // accessibilityDisclosedByRow: interop.Object;
  // accessibilityDisclosedRows: interop.Object;
  // accessibilityDisclosureLevel: number;
  // accessibilityMarkerValues: interop.Object;
  // accessibilityMarkerGroupUIElement: interop.Object;
  // accessibilityUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityRulerMarkerType: interop.Enum<typeof NSAccessibilityRulerMarkerType>;
  // accessibilityHorizontalScrollBar: interop.Object;
  // accessibilityVerticalScrollBar: interop.Object;
  // accessibilityLabelValue: number;
  // accessibilityDecrementButton: interop.Object;
  // accessibilityIncrementButton: interop.Object;
  // accessibilityHeader: interop.Object;
  // accessibilityColumnCount: number;
  // accessibilityRowCount: number;
  // accessibilityIndex: number;
  // accessibilitySortDirection: interop.Enum<typeof NSAccessibilitySortDirection>;
  // accessibilityRowIndexRange: _NSRange;
  // accessibilityColumnIndexRange: _NSRange;
  // accessibilityInsertionPointLineNumber: number;
  // accessibilitySharedCharacterRange: _NSRange;
  // accessibilityVisibleCharacterRange: _NSRange;
  // accessibilityNumberOfCharacters: number;
  // accessibilitySelectedTextRange: _NSRange;
  // accessibilityToolbarButton: interop.Object;
  // isAccessibilityModal: boolean;
  // accessibilityProxy: interop.Object;
  // isAccessibilityMain: boolean;
  // accessibilityFullScreenButton: interop.Object;
  // accessibilityGrowArea: interop.Object;
  // accessibilityDefaultButton: interop.Object;
  // accessibilityCloseButton: interop.Object;
  // accessibilityZoomButton: interop.Object;
  // accessibilityMinimizeButton: interop.Object;
  // isAccessibilityMinimized: boolean;

  set applicationshouldterminate(value: (sender: NSApplication) => interop.Enum<typeof NSApplicationTerminateReply>) {
    this.delegate.applicationShouldTerminate = value;
  }
  set applicationopenurls(value: (application: NSApplication, urls: NSArray | unknown[]) => void) {
    this.delegate.applicationOpenURLs = value;
  }
  set applicationopenfile(value: (sender: NSApplication, filename: NSString | string) => boolean) {
    this.delegate.applicationOpenFile = value;
  }
  set applicationopenfiles(value: (sender: NSApplication, filenames: NSArray | unknown[]) => void) {
    this.delegate.applicationOpenFiles = value;
  }
  set applicationopentempfile(value: (sender: NSApplication, filename: NSString | string) => boolean) {
    this.delegate.applicationOpenTempFile = value;
  }
  set applicationshouldopenuntitledfile(value: (sender: NSApplication) => boolean) {
    this.delegate.applicationShouldOpenUntitledFile = value;
  }
  set applicationopenuntitledfile(value: (sender: NSApplication) => boolean) {
    this.delegate.applicationOpenUntitledFile = value;
  }
  set applicationopenfilewithoutui(value: (sender: interop.Object, filename: NSString | string) => boolean) {
    this.delegate.applicationOpenFileWithoutUI = value;
  }
  set applicationprintfile(value: (sender: NSApplication, filename: NSString | string) => boolean) {
    this.delegate.applicationPrintFile = value;
  }
  set applicationprintfileswithsettingsshowprintpanels(value: (application: NSApplication, fileNames: NSArray | unknown[], printSettings: NSDictionary | Record<string, unknown>, showPrintPanels: boolean) => interop.Enum<typeof NSApplicationPrintReply>) {
    this.delegate.applicationPrintFilesWithSettingsShowPrintPanels = value;
  }
  set applicationshouldterminateafterlastwindowclosed(value: (sender: NSApplication) => boolean) {
    this.delegate.applicationShouldTerminateAfterLastWindowClosed = value;
  }
  set applicationshouldhandlereopenhasvisiblewindows(value: (sender: NSApplication, flag: boolean) => boolean) {
    this.delegate.applicationShouldHandleReopenHasVisibleWindows = value;
  }
  set applicationdockmenu(value: (sender: NSApplication) => NSMenu) {
    this.delegate.applicationDockMenu = value;
  }
  set applicationwillpresenterror(value: (application: NSApplication, error: NSError) => NSError) {
    this.delegate.applicationWillPresentError = value;
  }
  set applicationdidregisterforremotenotificationswithdevicetoken(value: (application: NSApplication, deviceToken: NSData) => void) {
    this.delegate.applicationDidRegisterForRemoteNotificationsWithDeviceToken = value;
  }
  set applicationdidfailtoregisterforremotenotificationswitherror(value: (application: NSApplication, error: NSError) => void) {
    this.delegate.applicationDidFailToRegisterForRemoteNotificationsWithError = value;
  }
  set applicationdidreceiveremotenotification(value: (application: NSApplication, userInfo: NSDictionary | Record<string, unknown>) => void) {
    this.delegate.applicationDidReceiveRemoteNotification = value;
  }
  set applicationsupportssecurerestorablestate(value: (app: NSApplication) => boolean) {
    this.delegate.applicationSupportsSecureRestorableState = value;
  }
  set applicationhandlerforintent(value: (application: NSApplication, intent: INIntent) => interop.Object) {
    this.delegate.applicationHandlerForIntent = value;
  }
  set applicationwillencoderestorablestate(value: (app: NSApplication, coder: NSCoder) => void) {
    this.delegate.applicationWillEncodeRestorableState = value;
  }
  set applicationdiddecoderestorablestate(value: (app: NSApplication, coder: NSCoder) => void) {
    this.delegate.applicationDidDecodeRestorableState = value;
  }
  set applicationwillcontinueuseractivitywithtype(value: (application: NSApplication, userActivityType: NSString | string) => boolean) {
    this.delegate.applicationWillContinueUserActivityWithType = value;
  }
  set applicationcontinueuseractivityrestorationhandler(value: (application: NSApplication, userActivity: NSUserActivity, restorationHandler: (p1: NSArray | unknown[]) => void) => boolean) {
    this.delegate.applicationContinueUserActivityRestorationHandler = value;
  }
  set applicationdidfailtocontinueuseractivitywithtypeerror(value: (application: NSApplication, userActivityType: NSString | string, error: NSError) => void) {
    this.delegate.applicationDidFailToContinueUserActivityWithTypeError = value;
  }
  set applicationdidupdateuseractivity(value: (application: NSApplication, userActivity: NSUserActivity) => void) {
    this.delegate.applicationDidUpdateUserActivity = value;
  }
  set applicationuserdidacceptcloudkitsharewithmetadata(value: (application: NSApplication, metadata: CKShareMetadata) => void) {
    this.delegate.applicationUserDidAcceptCloudKitShareWithMetadata = value;
  }
  set applicationdelegatehandleskey(value: (sender: NSApplication, key: NSString | string) => boolean) {
    this.delegate.applicationDelegateHandlesKey = value;
  }
  set applicationshouldautomaticallylocalizekeyequivalents(value: (application: NSApplication) => boolean) {
    this.delegate.applicationShouldAutomaticallyLocalizeKeyEquivalents = value;
  }
  set applicationwillfinishlaunching(value: (notification: NSNotification) => void) {
    this.delegate.applicationWillFinishLaunching = value;
  }
  set applicationdidfinishlaunching(value: (notification: NSNotification) => void) {
    this.delegate.applicationDidFinishLaunching = value;
  }
  set applicationwillhide(value: (notification: NSNotification) => void) {
    this.delegate.applicationWillHide = value;
  }
  set applicationdidhide(value: (notification: NSNotification) => void) {
    this.delegate.applicationDidHide = value;
  }
  set applicationwillunhide(value: (notification: NSNotification) => void) {
    this.delegate.applicationWillUnhide = value;
  }
  set applicationdidunhide(value: (notification: NSNotification) => void) {
    this.delegate.applicationDidUnhide = value;
  }
  set applicationwillbecomeactive(value: (notification: NSNotification) => void) {
    this.delegate.applicationWillBecomeActive = value;
  }
  set applicationdidbecomeactive(value: (notification: NSNotification) => void) {
    this.delegate.applicationDidBecomeActive = value;
  }
  set applicationwillresignactive(value: (notification: NSNotification) => void) {
    this.delegate.applicationWillResignActive = value;
  }
  set applicationdidresignactive(value: (notification: NSNotification) => void) {
    this.delegate.applicationDidResignActive = value;
  }
  set applicationwillupdate(value: (notification: NSNotification) => void) {
    this.delegate.applicationWillUpdate = value;
  }
  set applicationdidupdate(value: (notification: NSNotification) => void) {
    this.delegate.applicationDidUpdate = value;
  }
  set applicationwillterminate(value: (notification: NSNotification) => void) {
    this.delegate.applicationWillTerminate = value;
  }
  set applicationdidchangescreenparameters(value: (notification: NSNotification) => void) {
    this.delegate.applicationDidChangeScreenParameters = value;
  }
  set applicationdidchangeocclusionstate(value: (notification: NSNotification) => void) {
    this.delegate.applicationDidChangeOcclusionState = value;
  }
  set applicationprotecteddatawillbecomeunavailable(value: (notification: NSNotification) => void) {
    this.delegate.applicationProtectedDataWillBecomeUnavailable = value;
  }
  set applicationprotecteddatadidbecomeavailable(value: (notification: NSNotification) => void) {
    this.delegate.applicationProtectedDataDidBecomeAvailable = value;
  }
}

export class HTMLNSTouchBarItemElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTouchBarItem.new();

  // readonly identifier: NSString;
  // visibilityPriority: number;
  // readonly view: NSView;
  // readonly viewController: NSViewController;
  // readonly customizationLabel: NSString;
  // readonly isVisible: boolean;
}

export class HTMLNSCandidateListTouchBarItemElement extends HTMLNSTouchBarItemElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSCandidateListTouchBarItem.new();
  get delegate(): NSCandidateListTouchBarItemDelegateImpl {
    return (this.nativeObject.delegate ??= NSCandidateListTouchBarItemDelegateImpl.new()) as NSCandidateListTouchBarItemDelegateImpl;
  }

  // client: NSView;
  // isCollapsed: boolean;
  // allowsCollapsing: boolean;
  // readonly isCandidateListVisible: boolean;
  // allowsTextInputContextCandidates: boolean;
  // attributedStringForCandidate: (p1: interop.Object, p2: number) => NSAttributedString;
  // readonly candidates: NSArray;

  set candidatelisttouchbaritembeginselectingcandidateatindex(value: (anItem: NSCandidateListTouchBarItem, index: number) => void) {
    this.delegate.candidateListTouchBarItemBeginSelectingCandidateAtIndex = value;
  }
  set candidatelisttouchbaritemchangeselectionfromcandidateatindextoindex(value: (anItem: NSCandidateListTouchBarItem, previousIndex: number, index: number) => void) {
    this.delegate.candidateListTouchBarItemChangeSelectionFromCandidateAtIndexToIndex = value;
  }
  set candidatelisttouchbaritemendselectingcandidateatindex(value: (anItem: NSCandidateListTouchBarItem, index: number) => void) {
    this.delegate.candidateListTouchBarItemEndSelectingCandidateAtIndex = value;
  }
  set candidatelisttouchbaritemchangedcandidatelistvisibility(value: (anItem: NSCandidateListTouchBarItem, isVisible: boolean) => void) {
    this.delegate.candidateListTouchBarItemChangedCandidateListVisibility = value;
  }
}

export class HTMLNSWindowControllerElement extends HTMLNSResponderElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSWindowController.new();

  // readonly windowNibName: NSString;
  // readonly windowNibPath: NSString;
  // readonly owner: interop.Object | null;
  // shouldCascadeWindows: boolean;
  // document: interop.Object;
  // shouldCloseDocument: boolean;
  // contentViewController: NSViewController;
  // window: NSWindow;
  // readonly isWindowLoaded: boolean;
  // readonly storyboard: NSStoryboard;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
}

export class HTMLNSTextFieldCellElement extends HTMLNSActionCellElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTextFieldCell.new();

  // backgroundColor: NSColor;
  // drawsBackground: boolean;
  // textColor: NSColor;
  // bezelStyle: interop.Enum<typeof NSTextFieldBezelStyle>;
  // placeholderAttributedString: NSAttributedString;
}

export class HTMLNSSliderCellElement extends HTMLNSActionCellElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSSliderCell.new();

  // prefersTrackingUntilMouseUp: boolean;
  // minValue: number;
  // maxValue: number;
  // altIncrementValue: number;
  // sliderType: interop.Enum<typeof NSSliderType>;
  // isVertical: boolean;
  // readonly trackRect: CGRect;
  // readonly knobThickness: number;
  // numberOfTickMarks: number;
  // tickMarkPosition: interop.Enum<typeof NSTickMarkPosition>;
  // allowsTickMarkValuesOnly: boolean;
  // image: NSImage;
}

export class HTMLNSTokenFieldCellElement extends HTMLNSTextFieldCellElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTokenFieldCell.new();
  get delegate(): NSTokenFieldCellDelegateImpl {
    return (this.nativeObject.delegate ??= NSTokenFieldCellDelegateImpl.new()) as NSTokenFieldCellDelegateImpl;
  }

  // tokenStyle: interop.Enum<typeof NSTokenStyle>;
  // completionDelay: number;
  // defaultCompletionDelay: number;
  // tokenizingCharacterSet: NSCharacterSet;
  // defaultTokenizingCharacterSet: NSCharacterSet;

  set tokenfieldcellcompletionsforsubstringindexoftokenindexofselecteditem(value: (tokenFieldCell: NSTokenFieldCell, substring: NSString | string, tokenIndex: number, selectedIndex: interop.PointerConvertible) => NSArray) {
    this.delegate.tokenFieldCellCompletionsForSubstringIndexOfTokenIndexOfSelectedItem = value;
  }
  set tokenfieldcellshouldaddobjectsatindex(value: (tokenFieldCell: NSTokenFieldCell, tokens: NSArray | unknown[], index: number) => NSArray) {
    this.delegate.tokenFieldCellShouldAddObjectsAtIndex = value;
  }
  set tokenfieldcelldisplaystringforrepresentedobject(value: (tokenFieldCell: NSTokenFieldCell, representedObject: interop.Object) => NSString) {
    this.delegate.tokenFieldCellDisplayStringForRepresentedObject = value;
  }
  set tokenfieldcelleditingstringforrepresentedobject(value: (tokenFieldCell: NSTokenFieldCell, representedObject: interop.Object) => NSString) {
    this.delegate.tokenFieldCellEditingStringForRepresentedObject = value;
  }
  set tokenfieldcellrepresentedobjectforeditingstring(value: (tokenFieldCell: NSTokenFieldCell, editingString: NSString | string) => interop.Object) {
    this.delegate.tokenFieldCellRepresentedObjectForEditingString = value;
  }
  set tokenfieldcellwriterepresentedobjectstopasteboard(value: (tokenFieldCell: NSTokenFieldCell, objects: NSArray | unknown[], pboard: NSPasteboard) => boolean) {
    this.delegate.tokenFieldCellWriteRepresentedObjectsToPasteboard = value;
  }
  set tokenfieldcellreadfrompasteboard(value: (tokenFieldCell: NSTokenFieldCell, pboard: NSPasteboard) => NSArray) {
    this.delegate.tokenFieldCellReadFromPasteboard = value;
  }
  set tokenfieldcellmenuforrepresentedobject(value: (tokenFieldCell: NSTokenFieldCell, representedObject: interop.Object) => NSMenu) {
    this.delegate.tokenFieldCellMenuForRepresentedObject = value;
  }
  set tokenfieldcellhasmenuforrepresentedobject(value: (tokenFieldCell: NSTokenFieldCell, representedObject: interop.Object) => boolean) {
    this.delegate.tokenFieldCellHasMenuForRepresentedObject = value;
  }
  set tokenfieldcellstyleforrepresentedobject(value: (tokenFieldCell: NSTokenFieldCell, representedObject: interop.Object) => interop.Enum<typeof NSTokenStyle>) {
    this.delegate.tokenFieldCellStyleForRepresentedObject = value;
  }
}

export class HTMLNSSharingServicePickerToolbarItemElement extends HTMLNSToolbarItemElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSSharingServicePickerToolbarItem.new();

  // delegate: NSSharingServicePickerToolbarItemDelegate | null;
}

export class HTMLNSButtonTouchBarItemElement extends HTMLNSTouchBarItemElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSButtonTouchBarItem.new();

  // image: NSImage;
  // bezelColor: NSColor;
  // target: interop.Object;
  // action: string;
  // isEnabled: boolean;
}

export class HTMLNSTextTableBlockElement extends HTMLNSTextBlockElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTextTableBlock.new();

  // readonly table: NSTextTable;
  // readonly startingRow: number;
  // readonly rowSpan: number;
  // readonly startingColumn: number;
  // readonly columnSpan: number;
}

export class HTMLNSComboBoxCellElement extends HTMLNSTextFieldCellElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSComboBoxCell.new();

  // hasVerticalScroller: boolean;
  // intercellSpacing: CGSize;
  // itemHeight: number;
  // numberOfVisibleItems: number;
  // isButtonBordered: boolean;
  // usesDataSource: boolean;
  // readonly indexOfSelectedItem: number;
  // readonly numberOfItems: number;
  // completes: boolean;
  // dataSource: NSComboBoxCellDataSource;
  // readonly objectValueOfSelectedItem: interop.Object;
  // readonly objectValues: NSArray;
}

export class HTMLNSSecureTextFieldCellElement extends HTMLNSTextFieldCellElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSSecureTextFieldCell.new();

  // echosBullets: boolean;
}

export class HTMLNSTrackingSeparatorToolbarItemElement extends HTMLNSToolbarItemElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTrackingSeparatorToolbarItem.new();

  // splitView: NSSplitView;
  // dividerIndex: number;
}

export class HTMLNSStepperCellElement extends HTMLNSActionCellElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSStepperCell.new();

  // minValue: number;
  // maxValue: number;
  // increment: number;
  // valueWraps: boolean;
  // autorepeat: boolean;
}

export class HTMLNSPopoverTouchBarItemElement extends HTMLNSTouchBarItemElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSPopoverTouchBarItem.new();

  // popoverTouchBar: NSTouchBar;
  // collapsedRepresentation: NSView;
  // collapsedRepresentationImage: NSImage;
  // pressAndHoldTouchBar: NSTouchBar;
  // showsCloseButton: boolean;
}

export class HTMLNSPersistentDocumentElement extends HTMLNSDocumentElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSPersistentDocument.new();

  // managedObjectContext: NSManagedObjectContext;
  // readonly managedObjectModel: NSManagedObjectModel;
}

export class HTMLNSColorPickerTouchBarItemElement extends HTMLNSTouchBarItemElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSColorPickerTouchBarItem.new();

  // color: NSColor;
  // showsAlpha: boolean;
  // colorList: NSColorList;
  // target: interop.Object;
  // action: string;
  // isEnabled: boolean;
}

export class HTMLNSEPSImageRepElement extends HTMLNSImageRepElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSEPSImageRep.new();

  // readonly boundingBox: CGRect;
  // readonly EPSRepresentation: NSData;
}

export class HTMLNSCIImageRepElement extends HTMLNSImageRepElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSCIImageRep.new();

  // readonly CIImage: CIImage;
}

export class HTMLNSBitmapImageRepElement extends HTMLNSImageRepElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSBitmapImageRep.new();

  // readonly bitmapData: interop.Pointer;
  // readonly isPlanar: boolean;
  // readonly samplesPerPixel: number;
  // readonly bitsPerPixel: number;
  // readonly bytesPerRow: number;
  // readonly bytesPerPlane: number;
  // readonly numberOfPlanes: number;
  // readonly bitmapFormat: interop.Enum<typeof NSBitmapFormat>;
  // readonly TIFFRepresentation: NSData;
  // readonly CGImage: interop.Pointer;
  // readonly colorSpace: NSColorSpace;
  // supportsSecureCoding: boolean;
}

export class HTMLNSMutableFontCollectionElement extends HTMLNSFontCollectionElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSMutableFontCollection.new();

  // fontCollectionWithAllAvailableDescriptors: NSMutableFontCollection;
}

export class HTMLNSCollectionViewElement extends HTMLNSViewElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSCollectionView.new();
  get delegate(): NSCollectionViewDelegateImpl {
    return (this.nativeObject.delegate ??= NSCollectionViewDelegateImpl.new()) as NSCollectionViewDelegateImpl;
  }

  // dataSource: NSCollectionViewDataSource;
  // prefetchDataSource: NSCollectionViewPrefetching;
  // backgroundView: NSView;
  // backgroundViewScrollsWithContent: boolean;
  // collectionViewLayout: NSCollectionViewLayout;
  // readonly numberOfSections: number;
  // readonly isFirstResponder: boolean;
  // isSelectable: boolean;
  // allowsEmptySelection: boolean;
  // allowsMultipleSelection: boolean;
  // selectionIndexes: NSIndexSet;
  // selectionIndexPaths: NSSet;
  // itemPrototype: NSCollectionViewItem;
  // maxNumberOfRows: number;
  // maxNumberOfColumns: number;
  // minItemSize: CGSize;
  // maxItemSize: CGSize;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;

  set collectionviewcandragitemsatindexpathswithevent(value: (collectionView: NSCollectionView, indexPaths: NSSet, event: NSEvent) => boolean) {
    this.delegate.collectionViewCanDragItemsAtIndexPathsWithEvent = value;
  }
  set collectionviewcandragitemsatindexeswithevent(value: (collectionView: NSCollectionView, indexes: NSIndexSet, event: NSEvent) => boolean) {
    this.delegate.collectionViewCanDragItemsAtIndexesWithEvent = value;
  }
  set collectionviewwriteitemsatindexpathstopasteboard(value: (collectionView: NSCollectionView, indexPaths: NSSet, pasteboard: NSPasteboard) => boolean) {
    this.delegate.collectionViewWriteItemsAtIndexPathsToPasteboard = value;
  }
  set collectionviewwriteitemsatindexestopasteboard(value: (collectionView: NSCollectionView, indexes: NSIndexSet, pasteboard: NSPasteboard) => boolean) {
    this.delegate.collectionViewWriteItemsAtIndexesToPasteboard = value;
  }
  set collectionviewnamesofpromisedfilesdroppedatdestinationfordraggeditemsatindexpaths(value: (collectionView: NSCollectionView, dropURL: NSURL, indexPaths: NSSet) => NSArray) {
    this.delegate.collectionViewNamesOfPromisedFilesDroppedAtDestinationForDraggedItemsAtIndexPaths = value;
  }
  set collectionviewnamesofpromisedfilesdroppedatdestinationfordraggeditemsatindexes(value: (collectionView: NSCollectionView, dropURL: NSURL, indexes: NSIndexSet) => NSArray) {
    this.delegate.collectionViewNamesOfPromisedFilesDroppedAtDestinationForDraggedItemsAtIndexes = value;
  }
  set collectionviewdraggingimageforitemsatindexpathswitheventoffset(value: (collectionView: NSCollectionView, indexPaths: NSSet, event: NSEvent, dragImageOffset: interop.PointerConvertible) => NSImage) {
    this.delegate.collectionViewDraggingImageForItemsAtIndexPathsWithEventOffset = value;
  }
  set collectionviewdraggingimageforitemsatindexeswitheventoffset(value: (collectionView: NSCollectionView, indexes: NSIndexSet, event: NSEvent, dragImageOffset: interop.PointerConvertible) => NSImage) {
    this.delegate.collectionViewDraggingImageForItemsAtIndexesWithEventOffset = value;
  }
  set collectionviewvalidatedropproposedindexpathdropoperation(value: (collectionView: NSCollectionView, draggingInfo: NSDraggingInfo, proposedDropIndexPath: interop.PointerConvertible, proposedDropOperation: interop.PointerConvertible) => interop.Enum<typeof NSDragOperation>) {
    this.delegate.collectionViewValidateDropProposedIndexPathDropOperation = value;
  }
  set collectionviewvalidatedropproposedindexdropoperation(value: (collectionView: NSCollectionView, draggingInfo: NSDraggingInfo, proposedDropIndex: interop.PointerConvertible, proposedDropOperation: interop.PointerConvertible) => interop.Enum<typeof NSDragOperation>) {
    this.delegate.collectionViewValidateDropProposedIndexDropOperation = value;
  }
  set collectionviewacceptdropindexpathdropoperation(value: (collectionView: NSCollectionView, draggingInfo: NSDraggingInfo, indexPath: NSIndexPath, dropOperation: interop.Enum<typeof NSCollectionViewDropOperation>) => boolean) {
    this.delegate.collectionViewAcceptDropIndexPathDropOperation = value;
  }
  set collectionviewacceptdropindexdropoperation(value: (collectionView: NSCollectionView, draggingInfo: NSDraggingInfo, index: number, dropOperation: interop.Enum<typeof NSCollectionViewDropOperation>) => boolean) {
    this.delegate.collectionViewAcceptDropIndexDropOperation = value;
  }
  set collectionviewpasteboardwriterforitematindexpath(value: (collectionView: NSCollectionView, indexPath: NSIndexPath) => NSPasteboardWriting) {
    this.delegate.collectionViewPasteboardWriterForItemAtIndexPath = value;
  }
  set collectionviewpasteboardwriterforitematindex(value: (collectionView: NSCollectionView, index: number) => NSPasteboardWriting) {
    this.delegate.collectionViewPasteboardWriterForItemAtIndex = value;
  }
  set collectionviewdraggingsessionwillbeginatpointforitemsatindexpaths(value: (collectionView: NSCollectionView, session: NSDraggingSession, screenPoint: CGPoint, indexPaths: NSSet) => void) {
    this.delegate.collectionViewDraggingSessionWillBeginAtPointForItemsAtIndexPaths = value;
  }
  set collectionviewdraggingsessionwillbeginatpointforitemsatindexes(value: (collectionView: NSCollectionView, session: NSDraggingSession, screenPoint: CGPoint, indexes: NSIndexSet) => void) {
    this.delegate.collectionViewDraggingSessionWillBeginAtPointForItemsAtIndexes = value;
  }
  set collectionviewdraggingsessionendedatpointdragoperation(value: (collectionView: NSCollectionView, session: NSDraggingSession, screenPoint: CGPoint, operation: interop.Enum<typeof NSDragOperation>) => void) {
    this.delegate.collectionViewDraggingSessionEndedAtPointDragOperation = value;
  }
  set collectionviewupdatedraggingitemsfordrag(value: (collectionView: NSCollectionView, draggingInfo: NSDraggingInfo) => void) {
    this.delegate.collectionViewUpdateDraggingItemsForDrag = value;
  }
  set collectionviewshouldchangeitemsatindexpathstohighlightstate(value: (collectionView: NSCollectionView, indexPaths: NSSet, highlightState: interop.Enum<typeof NSCollectionViewItemHighlightState>) => NSSet) {
    this.delegate.collectionViewShouldChangeItemsAtIndexPathsToHighlightState = value;
  }
  set collectionviewdidchangeitemsatindexpathstohighlightstate(value: (collectionView: NSCollectionView, indexPaths: NSSet, highlightState: interop.Enum<typeof NSCollectionViewItemHighlightState>) => void) {
    this.delegate.collectionViewDidChangeItemsAtIndexPathsToHighlightState = value;
  }
  set collectionviewshouldselectitemsatindexpaths(value: (collectionView: NSCollectionView, indexPaths: NSSet) => NSSet) {
    this.delegate.collectionViewShouldSelectItemsAtIndexPaths = value;
  }
  set collectionviewshoulddeselectitemsatindexpaths(value: (collectionView: NSCollectionView, indexPaths: NSSet) => NSSet) {
    this.delegate.collectionViewShouldDeselectItemsAtIndexPaths = value;
  }
  set collectionviewdidselectitemsatindexpaths(value: (collectionView: NSCollectionView, indexPaths: NSSet) => void) {
    this.delegate.collectionViewDidSelectItemsAtIndexPaths = value;
  }
  set collectionviewdiddeselectitemsatindexpaths(value: (collectionView: NSCollectionView, indexPaths: NSSet) => void) {
    this.delegate.collectionViewDidDeselectItemsAtIndexPaths = value;
  }
  set collectionviewwilldisplayitemforrepresentedobjectatindexpath(value: (collectionView: NSCollectionView, item: NSCollectionViewItem, indexPath: NSIndexPath) => void) {
    this.delegate.collectionViewWillDisplayItemForRepresentedObjectAtIndexPath = value;
  }
  set collectionviewwilldisplaysupplementaryviewforelementkindatindexpath(value: (collectionView: NSCollectionView, view: NSView, elementKind: NSString | string, indexPath: NSIndexPath) => void) {
    this.delegate.collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath = value;
  }
  set collectionviewdidenddisplayingitemforrepresentedobjectatindexpath(value: (collectionView: NSCollectionView, item: NSCollectionViewItem, indexPath: NSIndexPath) => void) {
    this.delegate.collectionViewDidEndDisplayingItemForRepresentedObjectAtIndexPath = value;
  }
  set collectionviewdidenddisplayingsupplementaryviewforelementofkindatindexpath(value: (collectionView: NSCollectionView, view: NSView, elementKind: NSString | string, indexPath: NSIndexPath) => void) {
    this.delegate.collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath = value;
  }
  set collectionviewtransitionlayoutforoldlayoutnewlayout(value: (collectionView: NSCollectionView, fromLayout: NSCollectionViewLayout, toLayout: NSCollectionViewLayout) => NSCollectionViewTransitionLayout) {
    this.delegate.collectionViewTransitionLayoutForOldLayoutNewLayout = value;
  }
}

export class HTMLNSButtonCellElement extends HTMLNSActionCellElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSButtonCell.new();

  // bezelStyle: interop.Enum<typeof NSBezelStyle>;
  // highlightsBy: interop.Enum<typeof NSCellStyleMask>;
  // showsStateBy: interop.Enum<typeof NSCellStyleMask>;
  // attributedTitle: NSAttributedString;
  // attributedAlternateTitle: NSAttributedString;
  // alternateImage: NSImage;
  // imagePosition: interop.Enum<typeof NSCellImagePosition>;
  // imageScaling: interop.Enum<typeof NSImageScaling>;
  // keyEquivalentModifierMask: interop.Enum<typeof NSEventModifierFlags>;
  // isTransparent: boolean;
  // readonly isOpaque: boolean;
  // imageDimsWhenDisabled: boolean;
  // showsBorderOnlyWhileMouseInside: boolean;
  // sound: NSSound;
  // backgroundColor: NSColor;
  // gradientType: interop.Enum<typeof NSGradientType>;
  // keyEquivalentFont: NSFont;
}

export class HTMLNSBoxElement extends HTMLNSViewElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSBox.new();

  // boxType: interop.Enum<typeof NSBoxType>;
  // titlePosition: interop.Enum<typeof NSTitlePosition>;
  // titleFont: NSFont;
  // readonly borderRect: CGRect;
  // readonly titleRect: CGRect;
  // readonly titleCell: interop.Object;
  // contentViewMargins: CGSize;
  // contentView: NSView;
  // isTransparent: boolean;
  // borderWidth: number;
  // cornerRadius: number;
  // borderColor: NSColor;
  // fillColor: NSColor;
  // borderType: interop.Enum<typeof NSBorderType>;
}

export class HTMLNSScrollViewElement extends HTMLNSViewElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSScrollView.new();

  // readonly documentVisibleRect: CGRect;
  // readonly contentSize: CGSize;
  // documentView: NSView;
  // contentView: NSClipView;
  // documentCursor: NSCursor;
  // borderType: interop.Enum<typeof NSBorderType>;
  // backgroundColor: NSColor;
  // drawsBackground: boolean;
  // hasVerticalScroller: boolean;
  // hasHorizontalScroller: boolean;
  // verticalScroller: NSScroller;
  // horizontalScroller: NSScroller;
  // autohidesScrollers: boolean;
  // horizontalLineScroll: number;
  // verticalLineScroll: number;
  // lineScroll: number;
  // horizontalPageScroll: number;
  // verticalPageScroll: number;
  // pageScroll: number;
  // scrollsDynamically: boolean;
  // scrollerStyle: interop.Enum<typeof NSScrollerStyle>;
  // scrollerKnobStyle: interop.Enum<typeof NSScrollerKnobStyle>;
  // horizontalScrollElasticity: interop.Enum<typeof NSScrollElasticity>;
  // verticalScrollElasticity: interop.Enum<typeof NSScrollElasticity>;
  // usesPredominantAxisScrolling: boolean;
  // allowsMagnification: boolean;
  // magnification: number;
  // maxMagnification: number;
  // minMagnification: number;
  // automaticallyAdjustsContentInsets: boolean;
  // contentInsets: NSEdgeInsets;
  // scrollerInsets: NSEdgeInsets;
  // rulerViewClass: interop.Object;
  // rulersVisible: boolean;
  // hasHorizontalRuler: boolean;
  // hasVerticalRuler: boolean;
  // horizontalRulerView: NSRulerView;
  // verticalRulerView: NSRulerView;
  // findBarPosition: interop.Enum<typeof NSScrollViewFindBarPosition>;
  // findBarView: NSView;
  // isFindBarVisible: boolean;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
}

export class HTMLNSATSTypesetterElement extends HTMLNSTypesetterElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSATSTypesetter.new();

  // sharedTypesetter: NSATSTypesetter;
  // usesFontLeading: boolean;
  // typesetterBehavior: interop.Enum<typeof NSTypesetterBehavior>;
  // hyphenationFactor: number;
  // lineFragmentPadding: number;
  // bidiProcessingEnabled: boolean;
  // attributedString: NSAttributedString;
  // readonly paragraphGlyphRange: _NSRange;
  // readonly paragraphSeparatorGlyphRange: _NSRange;
  // readonly layoutManager: NSLayoutManager;
  // readonly currentTextContainer: NSTextContainer;
}

export class HTMLNSTableCellViewElement extends HTMLNSViewElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTableCellView.new();

  // objectValue: interop.Object;
  // textField: NSTextField;
  // imageView: NSImageView;
  // backgroundStyle: interop.Enum<typeof NSBackgroundStyle>;
  // rowSizeStyle: interop.Enum<typeof NSTableViewRowSizeStyle>;
  // readonly draggingImageComponents: NSArray;
}

export class HTMLNSVisualEffectViewElement extends HTMLNSViewElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSVisualEffectView.new();

  // material: interop.Enum<typeof NSVisualEffectMaterial>;
  // readonly interiorBackgroundStyle: interop.Enum<typeof NSBackgroundStyle>;
  // blendingMode: interop.Enum<typeof NSVisualEffectBlendingMode>;
  // state: interop.Enum<typeof NSVisualEffectState>;
  // maskImage: NSImage;
  // isEmphasized: boolean;
}

export class HTMLNSTableRowViewElement extends HTMLNSViewElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTableRowView.new();

  // selectionHighlightStyle: interop.Enum<typeof NSTableViewSelectionHighlightStyle>;
  // isEmphasized: boolean;
  // isGroupRowStyle: boolean;
  // isSelected: boolean;
  // isPreviousRowSelected: boolean;
  // isNextRowSelected: boolean;
  // isFloating: boolean;
  // isTargetForDropOperation: boolean;
  // draggingDestinationFeedbackStyle: interop.Enum<typeof NSTableViewDraggingDestinationFeedbackStyle>;
  // indentationForDropOperation: number;
  // readonly interiorBackgroundStyle: interop.Enum<typeof NSBackgroundStyle>;
  // backgroundColor: NSColor;
  // readonly numberOfColumns: number;
  // accessibilityIndex: number;
  // accessibilityDisclosureLevel: number;
  // accessibilityFrame: CGRect;
  // accessibilityParent: interop.Object;
  // isAccessibilityFocused: boolean;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
}

export class HTMLNSCollectionViewGridLayoutElement extends HTMLNSCollectionViewLayoutElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSCollectionViewGridLayout.new();

  // margins: NSEdgeInsets;
  // minimumInteritemSpacing: number;
  // minimumLineSpacing: number;
  // maximumNumberOfRows: number;
  // maximumNumberOfColumns: number;
  // minimumItemSize: CGSize;
  // maximumItemSize: CGSize;
}

export class HTMLNSCollectionLayoutSpacingElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSCollectionLayoutSpacing.new();

  // readonly spacing: number;
  // readonly isFlexibleSpacing: boolean;
  // readonly isFixedSpacing: boolean;
}

export class HTMLNSCachedImageRepElement extends HTMLNSImageRepElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSCachedImageRep.new();

}

export class HTMLNSDockTileElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSDockTile.new();

  // readonly size: CGSize;
  // contentView: NSView;
  // showsApplicationBadge: boolean;
  // readonly owner: interop.Object | null;
}

export class HTMLNSAlertElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSAlert.new();
  get delegate(): NSAlertDelegateImpl {
    return (this.nativeObject.delegate ??= NSAlertDelegateImpl.new()) as NSAlertDelegateImpl;
  }

  // icon: NSImage;
  // readonly buttons: NSArray;
  // alertStyle: interop.Enum<typeof NSAlertStyle>;
  // showsHelp: boolean;
  // accessoryView: NSView;
  // showsSuppressionButton: boolean;
  // readonly suppressionButton: NSButton;
  // readonly window: NSWindow;

  set alertshowhelp(value: (alert: NSAlert) => boolean) {
    this.delegate.alertShowHelp = value;
  }
}

export class HTMLNSTextLineFragmentElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTextLineFragment.new();

  // readonly attributedString: NSAttributedString;
  // readonly characterRange: _NSRange;
  // readonly typographicBounds: CGRect;
  // readonly glyphOrigin: CGPoint;
  // supportsSecureCoding: boolean;
}

export class HTMLNSTextSelectionElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTextSelection.new();

  // readonly textRanges: NSArray;
  // readonly granularity: interop.Enum<typeof NSTextSelectionGranularity>;
  // readonly affinity: interop.Enum<typeof NSTextSelectionAffinity>;
  // readonly isTransient: boolean;
  // anchorPositionOffset: number;
  // isLogical: boolean;
  // secondarySelectionLocation: NSTextLocation;
  // supportsSecureCoding: boolean;
}

export class HTMLNSAlignmentFeedbackFilterElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSAlignmentFeedbackFilter.new();

  // inputEventMask: interop.Enum<typeof NSEventMask>;
}

export class HTMLNSParagraphStyleElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSParagraphStyle.new();

  // defaultParagraphStyle: NSParagraphStyle;
  // readonly lineSpacing: number;
  // readonly paragraphSpacing: number;
  // readonly alignment: interop.Enum<typeof NSTextAlignment>;
  // readonly headIndent: number;
  // readonly tailIndent: number;
  // readonly firstLineHeadIndent: number;
  // readonly minimumLineHeight: number;
  // readonly maximumLineHeight: number;
  // readonly lineBreakMode: interop.Enum<typeof NSLineBreakMode>;
  // readonly baseWritingDirection: interop.Enum<typeof NSWritingDirection>;
  // readonly lineHeightMultiple: number;
  // readonly paragraphSpacingBefore: number;
  // readonly hyphenationFactor: number;
  // readonly usesDefaultHyphenation: boolean;
  // readonly tabStops: NSArray;
  // readonly defaultTabInterval: number;
  // readonly allowsDefaultTighteningForTruncation: boolean;
  // readonly tighteningFactorForTruncation: number;
  // readonly textBlocks: NSArray;
  // readonly textLists: NSArray;
  // readonly headerLevel: number;
  // readonly lineBreakStrategy: interop.Enum<typeof NSLineBreakStrategy>;
  // supportsSecureCoding: boolean;
}

export class HTMLNSDictionaryControllerKeyValuePairElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSDictionaryControllerKeyValuePair.new();

  // value: interop.Object;
  // readonly isExplicitlyIncluded: boolean;
}

export class HTMLNSOpenGLViewElement extends HTMLNSViewElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSOpenGLView.new();

  // openGLContext: NSOpenGLContext;
  // pixelFormat: NSOpenGLPixelFormat;
  // wantsBestResolutionOpenGLSurface: boolean;
  // wantsExtendedDynamicRangeOpenGLSurface: boolean;
}

export class HTMLNSMovieElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSMovie.new();

}

export class HTMLNSDataAssetElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSDataAsset.new();

  // readonly name: NSString;
  // readonly data: NSData;
  // readonly typeIdentifier: NSString;
}

export class HTMLNSTableHeaderViewElement extends HTMLNSViewElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTableHeaderView.new();

  // tableView: NSTableView;
  // readonly draggedColumn: number;
  // readonly draggedDistance: number;
  // readonly resizedColumn: number;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
}

export class HTMLNSTextInsertionIndicatorElement extends HTMLNSViewElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTextInsertionIndicator.new();

  // displayMode: interop.Enum<typeof NSTextInsertionIndicatorDisplayMode>;
  // color: NSColor;
  // automaticModeOptions: interop.Enum<typeof NSTextInsertionIndicatorAutomaticModeOptions>;
  // effectsViewInserter: (p1: NSView) => void;
}

export class HTMLNSSegmentedCellElement extends HTMLNSActionCellElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSSegmentedCell.new();

  // segmentCount: number;
  // selectedSegment: number;
  // trackingMode: interop.Enum<typeof NSSegmentSwitchTracking>;
  // segmentStyle: interop.Enum<typeof NSSegmentStyle>;
}

export class HTMLNSSliderAccessoryBehaviorElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSSliderAccessoryBehavior.new();

  // automaticBehavior: NSSliderAccessoryBehavior;
  // valueStepBehavior: NSSliderAccessoryBehavior;
  // valueResetBehavior: NSSliderAccessoryBehavior;
}

export class HTMLNSInputServerElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSInputServer.new();

}

export class HTMLNSFormCellElement extends HTMLNSActionCellElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSFormCell.new();

  // titleWidth: number;
  // titleFont: NSFont;
  // readonly isOpaque: boolean;
  // placeholderAttributedString: NSAttributedString;
  // titleAlignment: interop.Enum<typeof NSTextAlignment>;
  // titleBaseWritingDirection: interop.Enum<typeof NSWritingDirection>;
  // preferredTextFieldWidth: number;
  // attributedTitle: NSAttributedString;
}

export class HTMLNSFontElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSFont.new();

  // systemFontSize: number;
  // smallSystemFontSize: number;
  // labelFontSize: number;
  // readonly fontName: NSString;
  // readonly pointSize: number;
  // readonly matrix: interop.Pointer;
  // readonly familyName: NSString;
  // readonly displayName: NSString;
  // readonly fontDescriptor: NSFontDescriptor;
  // readonly textTransform: NSAffineTransform;
  // readonly numberOfGlyphs: number;
  // readonly mostCompatibleStringEncoding: number;
  // readonly coveredCharacterSet: NSCharacterSet;
  // readonly boundingRectForFont: CGRect;
  // readonly maximumAdvancement: CGSize;
  // readonly ascender: number;
  // readonly descender: number;
  // readonly leading: number;
  // readonly underlinePosition: number;
  // readonly underlineThickness: number;
  // readonly italicAngle: number;
  // readonly capHeight: number;
  // readonly xHeight: number;
  // readonly isFixedPitch: boolean;
  // readonly verticalFont: NSFont;
  // readonly isVertical: boolean;
  // readonly printerFont: NSFont;
  // readonly screenFont: NSFont;
  // readonly renderingMode: interop.Enum<typeof NSFontRenderingMode>;
  // supportsSecureCoding: boolean;
}

export class HTMLNSLayoutAnchorElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSLayoutAnchor.new();

  // readonly name: NSString;
  // readonly item: interop.Object;
  // readonly hasAmbiguousLayout: boolean;
  // readonly constraintsAffectingLayout: NSArray;
}

export class HTMLNSCollectionLayoutDimensionElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSCollectionLayoutDimension.new();

  // readonly isFractionalWidth: boolean;
  // readonly isFractionalHeight: boolean;
  // readonly isAbsolute: boolean;
  // readonly isEstimated: boolean;
  // readonly dimension: number;
}

export class HTMLNSCollectionViewLayoutAttributesElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSCollectionViewLayoutAttributes.new();

  // frame: CGRect;
  // size: CGSize;
  // alpha: number;
  // zIndex: number;
  // isHidden: boolean;
  // indexPath: NSIndexPath;
  // readonly representedElementCategory: interop.Enum<typeof NSCollectionElementCategory>;
  // readonly representedElementKind: NSString;
}

export class HTMLNSUserInterfaceCompressionOptionsElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSUserInterfaceCompressionOptions.new();

  // readonly isEmpty: boolean;
  // hideImagesOption: NSUserInterfaceCompressionOptions;
  // hideTextOption: NSUserInterfaceCompressionOptions;
  // reduceMetricsOption: NSUserInterfaceCompressionOptions;
  // breakEqualWidthsOption: NSUserInterfaceCompressionOptions;
  // standardOptions: NSUserInterfaceCompressionOptions;
}

export class HTMLNSTextAttachmentCellElement extends HTMLNSCellElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSTextAttachmentCell.new();

  // readonly cellSize: CGSize;
  // attachment: NSTextAttachment;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
}

export class HTMLNSMenuItemElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSMenuItem.new();

  // usesUserKeyEquivalents: boolean;
  // menu: NSMenu;
  // readonly hasSubmenu: boolean;
  // submenu: NSMenu;
  // readonly parentItem: NSMenuItem;
  // attributedTitle: NSAttributedString;
  // readonly isSeparatorItem: boolean;
  // readonly isSectionHeader: boolean;
  // keyEquivalentModifierMask: interop.Enum<typeof NSEventModifierFlags>;
  // readonly userKeyEquivalent: NSString;
  // allowsKeyEquivalentWhenHidden: boolean;
  // allowsAutomaticKeyEquivalentLocalization: boolean;
  // allowsAutomaticKeyEquivalentMirroring: boolean;
  // image: NSImage;
  // state: number;
  // onStateImage: NSImage;
  // offStateImage: NSImage;
  // mixedStateImage: NSImage;
  // isEnabled: boolean;
  // isAlternate: boolean;
  // indentationLevel: number;
  // target: interop.Object;
  // action: string;
  // tag: number;
  // representedObject: interop.Object;
  // view: NSView;
  // readonly isHighlighted: boolean;
  // isHidden: boolean;
  // readonly isHiddenOrHasHiddenAncestor: boolean;
  // badge: NSMenuItemBadge;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
  // isAccessibilityElement: boolean;
  // accessibilityFrame: CGRect;
  // isAccessibilityFocused: boolean;
  // accessibilityActivationPoint: CGPoint;
  // accessibilityTopLevelUIElement: interop.Object;
  // accessibilityURL: NSURL;
  // accessibilityValue: interop.Object;
  // accessibilityTitleUIElement: interop.Object;
  // accessibilityOrientation: interop.Enum<typeof NSAccessibilityOrientation>;
  // accessibilityOverflowButton: interop.Object;
  // accessibilityParent: interop.Object;
  // accessibilitySearchButton: interop.Object;
  // accessibilitySearchMenu: interop.Object;
  // isAccessibilitySelected: boolean;
  // accessibilityShownMenu: interop.Object;
  // accessibilityMinValue: interop.Object;
  // accessibilityMaxValue: interop.Object;
  // accessibilityWindow: interop.Object;
  // isAccessibilityExpanded: boolean;
  // isAccessibilityEdited: boolean;
  // isAccessibilityEnabled: boolean;
  // accessibilityClearButton: interop.Object;
  // accessibilityCancelButton: interop.Object;
  // isAccessibilityProtectedContent: boolean;
  // isAccessibilityAlternateUIVisible: boolean;
  // isAccessibilityRequired: boolean;
  // accessibilityApplicationFocusedUIElement: interop.Object;
  // accessibilityMainWindow: interop.Object;
  // isAccessibilityHidden: boolean;
  // isAccessibilityFrontmost: boolean;
  // accessibilityFocusedWindow: interop.Object;
  // accessibilityExtrasMenuBar: interop.Object;
  // accessibilityMenuBar: interop.Object;
  // isAccessibilityOrderedByRow: boolean;
  // accessibilityHorizontalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityVerticalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityWarningValue: interop.Object;
  // accessibilityCriticalValue: interop.Object;
  // isAccessibilityDisclosed: boolean;
  // accessibilityDisclosedByRow: interop.Object;
  // accessibilityDisclosedRows: interop.Object;
  // accessibilityDisclosureLevel: number;
  // accessibilityMarkerValues: interop.Object;
  // accessibilityMarkerGroupUIElement: interop.Object;
  // accessibilityUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityRulerMarkerType: interop.Enum<typeof NSAccessibilityRulerMarkerType>;
  // accessibilityHorizontalScrollBar: interop.Object;
  // accessibilityVerticalScrollBar: interop.Object;
  // accessibilityLabelValue: number;
  // accessibilityDecrementButton: interop.Object;
  // accessibilityIncrementButton: interop.Object;
  // accessibilityHeader: interop.Object;
  // accessibilityColumnCount: number;
  // accessibilityRowCount: number;
  // accessibilityIndex: number;
  // accessibilitySortDirection: interop.Enum<typeof NSAccessibilitySortDirection>;
  // accessibilityRowIndexRange: _NSRange;
  // accessibilityColumnIndexRange: _NSRange;
  // accessibilityInsertionPointLineNumber: number;
  // accessibilitySharedCharacterRange: _NSRange;
  // accessibilityVisibleCharacterRange: _NSRange;
  // accessibilityNumberOfCharacters: number;
  // accessibilitySelectedTextRange: _NSRange;
  // accessibilityToolbarButton: interop.Object;
  // isAccessibilityModal: boolean;
  // accessibilityProxy: interop.Object;
  // isAccessibilityMain: boolean;
  // accessibilityFullScreenButton: interop.Object;
  // accessibilityGrowArea: interop.Object;
  // accessibilityDefaultButton: interop.Object;
  // accessibilityCloseButton: interop.Object;
  // accessibilityZoomButton: interop.Object;
  // accessibilityMinimizeButton: interop.Object;
  // isAccessibilityMinimized: boolean;
}

export class HTMLNSPrintOperationElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSPrintOperation.new();

  // currentOperation: NSPrintOperation;
  // readonly isCopyingOperation: boolean;
  // readonly preferredRenderingQuality: interop.Enum<typeof NSPrintRenderingQuality>;
  // showsPrintPanel: boolean;
  // showsProgressPanel: boolean;
  // printPanel: NSPrintPanel;
  // PDFPanel: NSPDFPanel;
  // canSpawnSeparateThread: boolean;
  // pageOrder: interop.Enum<typeof NSPrintingPageOrder>;
  // readonly view: NSView;
  // printInfo: NSPrintInfo;
  // readonly context: NSGraphicsContext;
  // readonly pageRange: _NSRange;
  // readonly currentPage: number;
}

export class HTMLNSAccessibilityCustomRotorElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSAccessibilityCustomRotor.new();

  // type: interop.Enum<typeof NSAccessibilityCustomRotorType>;
  // itemSearchDelegate: NSAccessibilityCustomRotorItemSearchDelegate | null;
  // itemLoadingDelegate: NSAccessibilityElementLoading;
}

export class HTMLNSClipViewElement extends HTMLNSViewElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSClipView.new();

  // backgroundColor: NSColor;
  // drawsBackground: boolean;
  // documentView: NSView;
  // readonly documentRect: CGRect;
  // documentCursor: NSCursor;
  // readonly documentVisibleRect: CGRect;
  // contentInsets: NSEdgeInsets;
  // automaticallyAdjustsContentInsets: boolean;
  // copiesOnScroll: boolean;
}

export class HTMLNSPopoverElement extends HTMLNSResponderElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSPopover.new();
  get delegate(): NSPopoverDelegateImpl {
    return (this.nativeObject.delegate ??= NSPopoverDelegateImpl.new()) as NSPopoverDelegateImpl;
  }

  // appearance: NSAppearance;
  // readonly effectiveAppearance: NSAppearance;
  // behavior: interop.Enum<typeof NSPopoverBehavior>;
  // animates: boolean;
  // contentViewController: NSViewController;
  // contentSize: CGSize;
  // readonly isShown: boolean;
  // readonly isDetached: boolean;
  // positioningRect: CGRect;
  // hasFullSizeContent: boolean;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
  // isAccessibilityElement: boolean;
  // accessibilityFrame: CGRect;
  // isAccessibilityFocused: boolean;
  // accessibilityActivationPoint: CGPoint;
  // accessibilityTopLevelUIElement: interop.Object;
  // accessibilityURL: NSURL;
  // accessibilityValue: interop.Object;
  // accessibilityTitleUIElement: interop.Object;
  // accessibilityOrientation: interop.Enum<typeof NSAccessibilityOrientation>;
  // accessibilityOverflowButton: interop.Object;
  // accessibilityParent: interop.Object;
  // accessibilitySearchButton: interop.Object;
  // accessibilitySearchMenu: interop.Object;
  // isAccessibilitySelected: boolean;
  // accessibilityShownMenu: interop.Object;
  // accessibilityMinValue: interop.Object;
  // accessibilityMaxValue: interop.Object;
  // accessibilityWindow: interop.Object;
  // isAccessibilityExpanded: boolean;
  // isAccessibilityEdited: boolean;
  // isAccessibilityEnabled: boolean;
  // accessibilityClearButton: interop.Object;
  // accessibilityCancelButton: interop.Object;
  // isAccessibilityProtectedContent: boolean;
  // isAccessibilityAlternateUIVisible: boolean;
  // isAccessibilityRequired: boolean;
  // accessibilityApplicationFocusedUIElement: interop.Object;
  // accessibilityMainWindow: interop.Object;
  // isAccessibilityHidden: boolean;
  // isAccessibilityFrontmost: boolean;
  // accessibilityFocusedWindow: interop.Object;
  // accessibilityExtrasMenuBar: interop.Object;
  // accessibilityMenuBar: interop.Object;
  // isAccessibilityOrderedByRow: boolean;
  // accessibilityHorizontalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityVerticalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityWarningValue: interop.Object;
  // accessibilityCriticalValue: interop.Object;
  // isAccessibilityDisclosed: boolean;
  // accessibilityDisclosedByRow: interop.Object;
  // accessibilityDisclosedRows: interop.Object;
  // accessibilityDisclosureLevel: number;
  // accessibilityMarkerValues: interop.Object;
  // accessibilityMarkerGroupUIElement: interop.Object;
  // accessibilityUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityRulerMarkerType: interop.Enum<typeof NSAccessibilityRulerMarkerType>;
  // accessibilityHorizontalScrollBar: interop.Object;
  // accessibilityVerticalScrollBar: interop.Object;
  // accessibilityLabelValue: number;
  // accessibilityDecrementButton: interop.Object;
  // accessibilityIncrementButton: interop.Object;
  // accessibilityHeader: interop.Object;
  // accessibilityColumnCount: number;
  // accessibilityRowCount: number;
  // accessibilityIndex: number;
  // accessibilitySortDirection: interop.Enum<typeof NSAccessibilitySortDirection>;
  // accessibilityRowIndexRange: _NSRange;
  // accessibilityColumnIndexRange: _NSRange;
  // accessibilityInsertionPointLineNumber: number;
  // accessibilitySharedCharacterRange: _NSRange;
  // accessibilityVisibleCharacterRange: _NSRange;
  // accessibilityNumberOfCharacters: number;
  // accessibilitySelectedTextRange: _NSRange;
  // accessibilityToolbarButton: interop.Object;
  // isAccessibilityModal: boolean;
  // accessibilityProxy: interop.Object;
  // isAccessibilityMain: boolean;
  // accessibilityFullScreenButton: interop.Object;
  // accessibilityGrowArea: interop.Object;
  // accessibilityDefaultButton: interop.Object;
  // accessibilityCloseButton: interop.Object;
  // accessibilityZoomButton: interop.Object;
  // accessibilityMinimizeButton: interop.Object;
  // isAccessibilityMinimized: boolean;

  set popovershouldclose(value: (popover: NSPopover) => boolean) {
    this.delegate.popoverShouldClose = value;
  }
  set popovershoulddetach(value: (popover: NSPopover) => boolean) {
    this.delegate.popoverShouldDetach = value;
  }
  set popoverdiddetach(value: (popover: NSPopover) => void) {
    this.delegate.popoverDidDetach = value;
  }
  set detachablewindowforpopover(value: (popover: NSPopover) => NSWindow) {
    this.delegate.detachableWindowForPopover = value;
  }
  set popoverwillshow(value: (notification: NSNotification) => void) {
    this.delegate.popoverWillShow = value;
  }
  set popoverdidshow(value: (notification: NSNotification) => void) {
    this.delegate.popoverDidShow = value;
  }
  set popoverwillclose(value: (notification: NSNotification) => void) {
    this.delegate.popoverWillClose = value;
  }
  set popoverdidclose(value: (notification: NSNotification) => void) {
    this.delegate.popoverDidClose = value;
  }
}

export class HTMLNSCustomTouchBarItemElement extends HTMLNSTouchBarItemElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSCustomTouchBarItem.new();

  // view: NSView;
  // viewController: NSViewController;
}

export class HTMLNSGestureRecognizerElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSGestureRecognizer.new();
  get delegate(): NSGestureRecognizerDelegateImpl {
    return (this.nativeObject.delegate ??= NSGestureRecognizerDelegateImpl.new()) as NSGestureRecognizerDelegateImpl;
  }

  // target: interop.Object;
  // action: string;
  // readonly state: interop.Enum<typeof NSGestureRecognizerState>;
  // isEnabled: boolean;
  // readonly view: NSView;
  // pressureConfiguration: NSPressureConfiguration;
  // delaysPrimaryMouseButtonEvents: boolean;
  // delaysSecondaryMouseButtonEvents: boolean;
  // delaysOtherMouseButtonEvents: boolean;
  // delaysKeyEvents: boolean;
  // delaysMagnificationEvents: boolean;
  // delaysRotationEvents: boolean;
  // allowedTouchTypes: interop.Enum<typeof NSTouchTypeMask>;

  set gesturerecognizershouldattempttorecognizewithevent(value: (gestureRecognizer: NSGestureRecognizer, event: NSEvent) => boolean) {
    this.delegate.gestureRecognizerShouldAttemptToRecognizeWithEvent = value;
  }
  set gesturerecognizershouldbegin(value: (gestureRecognizer: NSGestureRecognizer) => boolean) {
    this.delegate.gestureRecognizerShouldBegin = value;
  }
  set gesturerecognizershouldrecognizesimultaneouslywithgesturerecognizer(value: (gestureRecognizer: NSGestureRecognizer, otherGestureRecognizer: NSGestureRecognizer) => boolean) {
    this.delegate.gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer = value;
  }
  set gesturerecognizershouldrequirefailureofgesturerecognizer(value: (gestureRecognizer: NSGestureRecognizer, otherGestureRecognizer: NSGestureRecognizer) => boolean) {
    this.delegate.gestureRecognizerShouldRequireFailureOfGestureRecognizer = value;
  }
  set gesturerecognizershouldberequiredtofailbygesturerecognizer(value: (gestureRecognizer: NSGestureRecognizer, otherGestureRecognizer: NSGestureRecognizer) => boolean) {
    this.delegate.gestureRecognizerShouldBeRequiredToFailByGestureRecognizer = value;
  }
  set gesturerecognizershouldreceivetouch(value: (gestureRecognizer: NSGestureRecognizer, touch: NSTouch) => boolean) {
    this.delegate.gestureRecognizerShouldReceiveTouch = value;
  }
}

export class HTMLNSStatusBarElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSStatusBar.new();

  // systemStatusBar: NSStatusBar;
  // readonly isVertical: boolean;
  // readonly thickness: number;
}

export class HTMLNSPDFInfoElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSPDFInfo.new();

  // URL: NSURL;
  // isFileExtensionHidden: boolean;
  // orientation: interop.Enum<typeof NSPaperOrientation>;
  // paperSize: CGSize;
  // readonly attributes: NSMutableDictionary;
}

export class HTMLNSTextTableElement extends HTMLNSTextBlockElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTextTable.new();

  // numberOfColumns: number;
  // layoutAlgorithm: interop.Enum<typeof NSTextTableLayoutAlgorithm>;
  // collapsesBorders: boolean;
  // hidesEmptyCells: boolean;
}

export class HTMLNSCollectionViewFlowLayoutInvalidationContextElement extends HTMLNSCollectionViewLayoutInvalidationContextElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSCollectionViewFlowLayoutInvalidationContext.new();

  // invalidateFlowLayoutDelegateMetrics: boolean;
  // invalidateFlowLayoutAttributes: boolean;
}

export class HTMLNSPrintPanelElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSPrintPanel.new();

  // readonly accessoryControllers: NSArray;
  // options: interop.Enum<typeof NSPrintPanelOptions>;
  // readonly printInfo: NSPrintInfo;
}

export class HTMLNSDocumentControllerElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSDocumentController.new();

  // sharedDocumentController: NSDocumentController;
  // readonly documents: NSArray;
  // readonly currentDocument: NSDocument;
  // readonly currentDirectory: NSString;
  // autosavingDelay: number;
  // readonly hasEditedDocuments: boolean;
  // readonly allowsAutomaticShareMenu: boolean;
  // readonly maximumRecentDocumentCount: number;
  // readonly recentDocumentURLs: NSArray;
  // readonly defaultType: NSString;
  // readonly documentClassNames: NSArray;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
}

export class HTMLNSStepperTouchBarItemElement extends HTMLNSTouchBarItemElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSStepperTouchBarItem.new();

  // maxValue: number;
  // minValue: number;
  // increment: number;
  // value: number;
  // target: interop.Object;
  // action: string;
}

export class HTMLNSPrintInfoElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSPrintInfo.new();

  // sharedPrintInfo: NSPrintInfo;
  // paperSize: CGSize;
  // orientation: interop.Enum<typeof NSPaperOrientation>;
  // scalingFactor: number;
  // leftMargin: number;
  // rightMargin: number;
  // topMargin: number;
  // bottomMargin: number;
  // isHorizontallyCentered: boolean;
  // isVerticallyCentered: boolean;
  // horizontalPagination: interop.Enum<typeof NSPrintingPaginationMode>;
  // verticalPagination: interop.Enum<typeof NSPrintingPaginationMode>;
  // printer: NSPrinter;
  // readonly imageablePageBounds: CGRect;
  // readonly localizedPaperName: NSString;
  // defaultPrinter: NSPrinter;
  // readonly printSettings: NSMutableDictionary;
  // isSelectionOnly: boolean;
}

export class HTMLNSTextFinderElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTextFinder.new();

  // client: NSTextFinderClient;
  // findBarContainer: NSTextFinderBarContainer;
  // findIndicatorNeedsUpdate: boolean;
  // isIncrementalSearchingEnabled: boolean;
  // incrementalSearchingShouldDimContentView: boolean;
  // readonly incrementalMatchRanges: NSArray;
}

export class HTMLNSCollectionViewTransitionLayoutElement extends HTMLNSCollectionViewLayoutElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSCollectionViewTransitionLayout.new();

  // transitionProgress: number;
  // readonly currentLayout: NSCollectionViewLayout;
  // readonly nextLayout: NSCollectionViewLayout;
}

export class HTMLNSToolbarItemGroupElement extends HTMLNSToolbarItemElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSToolbarItemGroup.new();

  // controlRepresentation: interop.Enum<typeof NSToolbarItemGroupControlRepresentation>;
  // selectionMode: interop.Enum<typeof NSToolbarItemGroupSelectionMode>;
  // selectedIndex: number;
}

export class HTMLNSTableColumnElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTableColumn.new();

  // tableView: NSTableView;
  // width: number;
  // minWidth: number;
  // maxWidth: number;
  // headerCell: NSTableHeaderCell;
  // isEditable: boolean;
  // sortDescriptorPrototype: NSSortDescriptor;
  // resizingMask: interop.Enum<typeof NSTableColumnResizingOptions>;
  // isHidden: boolean;
  // dataCell: interop.Object;
}

export class HTMLNSPICTImageRepElement extends HTMLNSImageRepElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSPICTImageRep.new();

  // readonly PICTRepresentation: NSData;
  // readonly boundingBox: CGRect;
}

export class HTMLNSWorkspaceOpenConfigurationElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSWorkspaceOpenConfiguration.new();

  // promptsUserIfNeeded: boolean;
  // addsToRecentItems: boolean;
  // activates: boolean;
  // hides: boolean;
  // hidesOthers: boolean;
  // isForPrinting: boolean;
  // createsNewApplicationInstance: boolean;
  // allowsRunningApplicationSubstitution: boolean;
  // appleEvent: NSAppleEventDescriptor;
  // architecture: number;
  // requiresUniversalLinks: boolean;
}

export class HTMLNSPredicateEditorRowTemplateElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSPredicateEditorRowTemplate.new();

  // readonly templateViews: NSArray;
  // readonly leftExpressions: NSArray;
  // readonly rightExpressions: NSArray;
  // readonly rightExpressionAttributeType: interop.Enum<typeof NSAttributeType>;
  // readonly modifier: interop.Enum<typeof NSComparisonPredicateModifier>;
  // readonly operators: NSArray;
  // readonly options: number;
  // readonly compoundTypes: NSArray;
}

export class HTMLNSMediaLibraryBrowserControllerElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSMediaLibraryBrowserController.new();

  // sharedMediaLibraryBrowserController: NSMediaLibraryBrowserController;
  // isVisible: boolean;
  // frame: CGRect;
  // mediaLibraries: interop.Enum<typeof NSMediaLibrary>;
}

export class HTMLNSPathControlItemElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSPathControlItem.new();

  // attributedTitle: NSAttributedString;
  // image: NSImage;
  // readonly URL: NSURL;
}

export class HTMLNSSliderTouchBarItemElement extends HTMLNSTouchBarItemElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSSliderTouchBarItem.new();

  // readonly view: NSView;
  // slider: NSSlider;
  // doubleValue: number;
  // minimumSliderWidth: number;
  // maximumSliderWidth: number;
  // minimumValueAccessory: NSSliderAccessory;
  // maximumValueAccessory: NSSliderAccessory;
  // valueAccessoryWidth: number;
  // target: interop.Object;
  // action: string;
}

export class HTMLNSTableHeaderCellElement extends HTMLNSTextFieldCellElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTableHeaderCell.new();

}

export class HTMLNSMenuItemCellElement extends HTMLNSButtonCellElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSMenuItemCell.new();

  // menuItem: NSMenuItem;
  // needsSizing: boolean;
  // needsDisplay: boolean;
  // readonly stateImageWidth: number;
  // readonly imageWidth: number;
  // readonly titleWidth: number;
  // readonly keyEquivalentWidth: number;
  // tag: number;
}

export class HTMLNSPanGestureRecognizerElement extends HTMLNSGestureRecognizerElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSPanGestureRecognizer.new();

  // buttonMask: number;
  // numberOfTouchesRequired: number;
}

export class HTMLNSClickGestureRecognizerElement extends HTMLNSGestureRecognizerElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSClickGestureRecognizer.new();

  // buttonMask: number;
  // numberOfClicksRequired: number;
  // numberOfTouchesRequired: number;
}

export class HTMLNSLayoutYAxisAnchorElement extends HTMLNSLayoutAnchorElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSLayoutYAxisAnchor.new();

}

export class HTMLNSMagnificationGestureRecognizerElement extends HTMLNSGestureRecognizerElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSMagnificationGestureRecognizer.new();

  // magnification: number;
}

export class HTMLNSImageCellElement extends HTMLNSCellElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSImageCell.new();

  // imageAlignment: interop.Enum<typeof NSImageAlignment>;
  // imageScaling: interop.Enum<typeof NSImageScaling>;
  // imageFrameStyle: interop.Enum<typeof NSImageFrameStyle>;
}

export class HTMLNSSearchToolbarItemElement extends HTMLNSToolbarItemElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSSearchToolbarItem.new();

  // searchField: NSSearchField;
  // resignsFirstResponderWithCancel: boolean;
  // preferredWidthForSearchField: number;
}

export class HTMLNSPickerTouchBarItemElement extends HTMLNSTouchBarItemElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSPickerTouchBarItem.new();

  // controlRepresentation: interop.Enum<typeof NSPickerTouchBarItemControlRepresentation>;
  // collapsedRepresentationImage: NSImage;
  // selectedIndex: number;
  // selectionColor: NSColor;
  // selectionMode: interop.Enum<typeof NSPickerTouchBarItemSelectionMode>;
  // numberOfOptions: number;
  // target: interop.Object;
  // action: string;
  // isEnabled: boolean;
}

export class HTMLNSArrayControllerElement extends HTMLNSObjectControllerElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSArrayController.new();

  // automaticallyRearrangesObjects: boolean;
  // readonly automaticRearrangementKeyPaths: NSArray;
  // filterPredicate: NSPredicate;
  // clearsFilterPredicateOnInsertion: boolean;
  // readonly arrangedObjects: interop.Object;
  // avoidsEmptySelection: boolean;
  // preservesSelection: boolean;
  // selectsInsertedObjects: boolean;
  // alwaysUsesMultipleValuesMarker: boolean;
  // readonly selectionIndexes: NSIndexSet;
  // readonly selectionIndex: number;
  // readonly selectedObjects: NSArray;
  // readonly canInsert: boolean;
  // readonly canSelectNext: boolean;
  // readonly canSelectPrevious: boolean;
}

export class HTMLNSGridViewElement extends HTMLNSViewElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSGridView.new();

  // readonly numberOfRows: number;
  // readonly numberOfColumns: number;
  // xPlacement: interop.Enum<typeof NSGridCellPlacement>;
  // yPlacement: interop.Enum<typeof NSGridCellPlacement>;
  // rowAlignment: interop.Enum<typeof NSGridRowAlignment>;
  // rowSpacing: number;
  // columnSpacing: number;
}

export class HTMLNSSplitViewElement extends HTMLNSViewElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSSplitView.new();
  get delegate(): NSSplitViewDelegateImpl {
    return (this.nativeObject.delegate ??= NSSplitViewDelegateImpl.new()) as NSSplitViewDelegateImpl;
  }

  // isVertical: boolean;
  // dividerStyle: interop.Enum<typeof NSSplitViewDividerStyle>;
  // readonly dividerColor: NSColor;
  // readonly dividerThickness: number;
  // arrangesAllSubviews: boolean;
  // readonly arrangedSubviews: NSArray;

  set splitviewcancollapsesubview(value: (splitView: NSSplitView, subview: NSView) => boolean) {
    this.delegate.splitViewCanCollapseSubview = value;
  }
  set splitviewshouldcollapsesubviewfordoubleclickondivideratindex(value: (splitView: NSSplitView, subview: NSView, dividerIndex: number) => boolean) {
    this.delegate.splitViewShouldCollapseSubviewForDoubleClickOnDividerAtIndex = value;
  }
  set splitviewconstrainmincoordinateofsubviewat(value: (splitView: NSSplitView, proposedMinimumPosition: number, dividerIndex: number) => number) {
    this.delegate.splitViewConstrainMinCoordinateOfSubviewAt = value;
  }
  set splitviewconstrainmaxcoordinateofsubviewat(value: (splitView: NSSplitView, proposedMaximumPosition: number, dividerIndex: number) => number) {
    this.delegate.splitViewConstrainMaxCoordinateOfSubviewAt = value;
  }
  set splitviewconstrainsplitpositionofsubviewat(value: (splitView: NSSplitView, proposedPosition: number, dividerIndex: number) => number) {
    this.delegate.splitViewConstrainSplitPositionOfSubviewAt = value;
  }
  set splitviewresizesubviewswitholdsize(value: (splitView: NSSplitView, oldSize: CGSize) => void) {
    this.delegate.splitViewResizeSubviewsWithOldSize = value;
  }
  set splitviewshouldadjustsizeofsubview(value: (splitView: NSSplitView, view: NSView) => boolean) {
    this.delegate.splitViewShouldAdjustSizeOfSubview = value;
  }
  set splitviewshouldhidedivideratindex(value: (splitView: NSSplitView, dividerIndex: number) => boolean) {
    this.delegate.splitViewShouldHideDividerAtIndex = value;
  }
  set splitvieweffectiverectfordrawnrectofdivideratindex(value: (splitView: NSSplitView, proposedEffectiveRect: CGRect, drawnRect: CGRect, dividerIndex: number) => CGRect) {
    this.delegate.splitViewEffectiveRectForDrawnRectOfDividerAtIndex = value;
  }
  set splitviewadditionaleffectiverectofdivideratindex(value: (splitView: NSSplitView, dividerIndex: number) => CGRect) {
    this.delegate.splitViewAdditionalEffectiveRectOfDividerAtIndex = value;
  }
  set splitviewwillresizesubviews(value: (notification: NSNotification) => void) {
    this.delegate.splitViewWillResizeSubviews = value;
  }
  set splitviewdidresizesubviews(value: (notification: NSNotification) => void) {
    this.delegate.splitViewDidResizeSubviews = value;
  }
}

export class HTMLNSLayoutDimensionElement extends HTMLNSLayoutAnchorElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSLayoutDimension.new();

}

export class HTMLNSDatePickerCellElement extends HTMLNSActionCellElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSDatePickerCell.new();
  get delegate(): NSDatePickerCellDelegateImpl {
    return (this.nativeObject.delegate ??= NSDatePickerCellDelegateImpl.new()) as NSDatePickerCellDelegateImpl;
  }

  // datePickerStyle: interop.Enum<typeof NSDatePickerStyle>;
  // drawsBackground: boolean;
  // backgroundColor: NSColor;
  // textColor: NSColor;
  // datePickerMode: interop.Enum<typeof NSDatePickerMode>;
  // datePickerElements: interop.Enum<typeof NSDatePickerElementFlags>;
  // calendar: NSCalendar;
  // locale: NSLocale;
  // timeZone: NSTimeZone;
  // dateValue: NSDate;
  // timeInterval: number;
  // minDate: NSDate;
  // maxDate: NSDate;

  set datepickercellvalidateproposeddatevaluetimeinterval(value: (datePickerCell: NSDatePickerCell, proposedDateValue: interop.PointerConvertible, proposedTimeInterval: interop.PointerConvertible) => void) {
    this.delegate.datePickerCellValidateProposedDateValueTimeInterval = value;
  }
}

export class HTMLNSViewControllerElement extends HTMLNSResponderElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSViewController.new();

  // readonly nibName: NSString;
  // readonly nibBundle: NSBundle;
  // representedObject: interop.Object;
  // view: NSView;
  // readonly viewIfLoaded: NSView;
  // readonly isViewLoaded: boolean;
  // preferredContentSize: CGSize;
  // readonly presentedViewControllers: NSArray;
  // readonly presentingViewController: NSViewController;
  // readonly parentViewController: NSViewController;
  // readonly storyboard: NSStoryboard;
  // readonly extensionContext: NSExtensionContext;
  // sourceItemView: NSView;
  // preferredScreenOrigin: CGPoint;
  // readonly preferredMinimumSize: CGSize;
  // readonly preferredMaximumSize: CGSize;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
}

export class HTMLNSPressGestureRecognizerElement extends HTMLNSGestureRecognizerElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSPressGestureRecognizer.new();

  // buttonMask: number;
  // minimumPressDuration: number;
  // allowableMovement: number;
  // numberOfTouchesRequired: number;
}

export class HTMLNSPopUpButtonCellElement extends HTMLNSMenuItemCellElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSPopUpButtonCell.new();

  // menu: NSMenu;
  // pullsDown: boolean;
  // autoenablesItems: boolean;
  // preferredEdge: interop.Enum<typeof NSRectEdge>;
  // usesItemFromMenu: boolean;
  // altersStateOfSelectedItem: boolean;
  // readonly itemArray: NSArray;
  // readonly numberOfItems: number;
  // readonly lastItem: NSMenuItem;
  // readonly selectedItem: NSMenuItem;
  // readonly indexOfSelectedItem: number;
  // readonly itemTitles: NSArray;
  // readonly titleOfSelectedItem: NSString;
  // arrowPosition: interop.Enum<typeof NSPopUpArrowPosition>;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
}

export class HTMLNSTextElement extends HTMLNSViewElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSText.new();
  get delegate(): NSTextDelegateImpl {
    return (this.nativeObject.delegate ??= NSTextDelegateImpl.new()) as NSTextDelegateImpl;
  }

  // isEditable: boolean;
  // isSelectable: boolean;
  // isRichText: boolean;
  // importsGraphics: boolean;
  // isFieldEditor: boolean;
  // usesFontPanel: boolean;
  // drawsBackground: boolean;
  // backgroundColor: NSColor;
  // readonly isRulerVisible: boolean;
  // selectedRange: _NSRange;
  // font: NSFont;
  // textColor: NSColor;
  // alignment: interop.Enum<typeof NSTextAlignment>;
  // baseWritingDirection: interop.Enum<typeof NSWritingDirection>;
  // maxSize: CGSize;
  // minSize: CGSize;
  // isHorizontallyResizable: boolean;
  // isVerticallyResizable: boolean;

  set textshouldbeginediting(value: (textObject: NSText) => boolean) {
    this.delegate.textShouldBeginEditing = value;
  }
  set textshouldendediting(value: (textObject: NSText) => boolean) {
    this.delegate.textShouldEndEditing = value;
  }
  set textdidbeginediting(value: (notification: NSNotification) => void) {
    this.delegate.textDidBeginEditing = value;
  }
  set textdidendediting(value: (notification: NSNotification) => void) {
    this.delegate.textDidEndEditing = value;
  }
  set textdidchange(value: (notification: NSNotification) => void) {
    this.delegate.textDidChange = value;
  }
}

export class HTMLNSDiffableDataSourceSnapshotElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSDiffableDataSourceSnapshot.new();

  // readonly numberOfItems: number;
  // readonly numberOfSections: number;
  // readonly sectionIdentifiers: NSArray;
  // readonly itemIdentifiers: NSArray;
}

export class HTMLNSTextViewportLayoutControllerElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTextViewportLayoutController.new();
  get delegate(): NSTextViewportLayoutControllerDelegateImpl {
    return (this.nativeObject.delegate ??= NSTextViewportLayoutControllerDelegateImpl.new()) as NSTextViewportLayoutControllerDelegateImpl;
  }

  // readonly textLayoutManager: NSTextLayoutManager | null;
  // readonly viewportBounds: CGRect;
  // readonly viewportRange: NSTextRange;

  set viewportboundsfortextviewportlayoutcontroller(value: (textViewportLayoutController: NSTextViewportLayoutController) => CGRect) {
    this.delegate.viewportBoundsForTextViewportLayoutController = value;
  }
  set textviewportlayoutcontrollerconfigurerenderingsurfacefortextlayoutfragment(value: (textViewportLayoutController: NSTextViewportLayoutController, textLayoutFragment: NSTextLayoutFragment) => void) {
    this.delegate.textViewportLayoutControllerConfigureRenderingSurfaceForTextLayoutFragment = value;
  }
  set textviewportlayoutcontrollerwilllayout(value: (textViewportLayoutController: NSTextViewportLayoutController) => void) {
    this.delegate.textViewportLayoutControllerWillLayout = value;
  }
  set textviewportlayoutcontrollerdidlayout(value: (textViewportLayoutController: NSTextViewportLayoutController) => void) {
    this.delegate.textViewportLayoutControllerDidLayout = value;
  }
}

export class HTMLNSTintConfigurationElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTintConfiguration.new();

  // defaultTintConfiguration: NSTintConfiguration;
  // monochromeTintConfiguration: NSTintConfiguration;
  // readonly baseTintColor: NSColor;
  // readonly equivalentContentTintColor: NSColor;
  // readonly adaptsToUserAccentColor: boolean;
  // supportsSecureCoding: boolean;
}

export class HTMLNSUserDefaultsControllerElement extends HTMLNSControllerElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSUserDefaultsController.new();

  // sharedUserDefaultsController: NSUserDefaultsController;
  // readonly defaults: NSUserDefaults;
  // appliesImmediately: boolean;
  // readonly hasUnappliedChanges: boolean;
  // readonly values: interop.Object;
}

export class HTMLNSOpenGLContextElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSOpenGLContext.new();

  // readonly pixelFormat: NSOpenGLPixelFormat;
  // view: NSView;
  // currentContext: NSOpenGLContext;
  // currentVirtualScreen: number;
  // readonly CGLContextObj: interop.Pointer;
}

export class HTMLNSProgressIndicatorElement extends HTMLNSViewElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSProgressIndicator.new();

  // isIndeterminate: boolean;
  // controlSize: interop.Enum<typeof NSControlSize>;
  // doubleValue: number;
  // minValue: number;
  // maxValue: number;
  // observedProgress: NSProgress;
  // usesThreadedAnimation: boolean;
  // style: interop.Enum<typeof NSProgressIndicatorStyle>;
  // isDisplayedWhenStopped: boolean;
  // isBezeled: boolean;
  // controlTint: interop.Enum<typeof NSControlTint>;
  // accessibilityValue: NSNumber;
  // accessibilityFrame: CGRect;
  // accessibilityParent: interop.Object;
  // isAccessibilityFocused: boolean;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
}

export class HTMLNSScrubberArrangedViewElement extends HTMLNSViewElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSScrubberArrangedView.new();

  // isSelected: boolean;
  // isHighlighted: boolean;
}

export class HTMLNSLayoutConstraintElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSLayoutConstraint.new();

  // priority: number;
  // shouldBeArchived: boolean;
  // readonly firstItem: interop.Object;
  // readonly secondItem: interop.Object;
  // readonly firstAttribute: interop.Enum<typeof NSLayoutAttribute>;
  // readonly secondAttribute: interop.Enum<typeof NSLayoutAttribute>;
  // readonly firstAnchor: NSLayoutAnchor;
  // readonly secondAnchor: NSLayoutAnchor;
  // readonly relation: interop.Enum<typeof NSLayoutRelation>;
  // readonly multiplier: number;
  // constant: number;
  // isActive: boolean;
}

export class HTMLNSSpeechSynthesizerElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSSpeechSynthesizer.new();
  get delegate(): NSSpeechSynthesizerDelegateImpl {
    return (this.nativeObject.delegate ??= NSSpeechSynthesizerDelegateImpl.new()) as NSSpeechSynthesizerDelegateImpl;
  }

  // readonly isSpeaking: boolean;
  // rate: number;
  // volume: number;
  // usesFeedbackWindow: boolean;
  // isAnyApplicationSpeaking: boolean;
  // defaultVoice: NSString;
  // availableVoices: NSArray;

  set speechsynthesizerdidfinishspeaking(value: (sender: NSSpeechSynthesizer, finishedSpeaking: boolean) => void) {
    this.delegate.speechSynthesizerDidFinishSpeaking = value;
  }
  set speechsynthesizerwillspeakwordofstring(value: (sender: NSSpeechSynthesizer, characterRange: _NSRange, string: NSString | string) => void) {
    this.delegate.speechSynthesizerWillSpeakWordOfString = value;
  }
  set speechsynthesizerwillspeakphoneme(value: (sender: NSSpeechSynthesizer, phonemeOpcode: number) => void) {
    this.delegate.speechSynthesizerWillSpeakPhoneme = value;
  }
  set speechsynthesizerdidencountererroratindexofstringmessage(value: (sender: NSSpeechSynthesizer, characterIndex: number, string: NSString | string, message: NSString | string) => void) {
    this.delegate.speechSynthesizerDidEncounterErrorAtIndexOfStringMessage = value;
  }
  set speechsynthesizerdidencountersyncmessage(value: (sender: NSSpeechSynthesizer, message: NSString | string) => void) {
    this.delegate.speechSynthesizerDidEncounterSyncMessage = value;
  }
}

export class HTMLNSMutableParagraphStyleElement extends HTMLNSParagraphStyleElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSMutableParagraphStyle.new();

  // lineSpacing: number;
  // paragraphSpacing: number;
  // alignment: interop.Enum<typeof NSTextAlignment>;
  // firstLineHeadIndent: number;
  // headIndent: number;
  // tailIndent: number;
  // lineBreakMode: interop.Enum<typeof NSLineBreakMode>;
  // minimumLineHeight: number;
  // maximumLineHeight: number;
  // baseWritingDirection: interop.Enum<typeof NSWritingDirection>;
  // lineHeightMultiple: number;
  // paragraphSpacingBefore: number;
  // hyphenationFactor: number;
  // usesDefaultHyphenation: boolean;
  // defaultTabInterval: number;
  // allowsDefaultTighteningForTruncation: boolean;
  // tighteningFactorForTruncation: number;
  // headerLevel: number;
  // lineBreakStrategy: interop.Enum<typeof NSLineBreakStrategy>;
}

export class HTMLNSStoryboardElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSStoryboard.new();

  // mainStoryboard: NSStoryboard;
}

export class HTMLNSCollectionLayoutItemElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSCollectionLayoutItem.new();

  // contentInsets: NSDirectionalEdgeInsets;
  // edgeSpacing: NSCollectionLayoutEdgeSpacing;
  // readonly layoutSize: NSCollectionLayoutSize;
  // readonly supplementaryItems: NSArray;
}

export class HTMLNSCollectionLayoutSectionElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSCollectionLayoutSection.new();

  // contentInsets: NSDirectionalEdgeInsets;
  // interGroupSpacing: number;
  // orthogonalScrollingBehavior: interop.Enum<typeof NSCollectionLayoutSectionOrthogonalScrollingBehavior>;
  // supplementariesFollowContentInsets: boolean;
  // visibleItemsInvalidationHandler: (p1: NSArray | unknown[], p2: CGPoint, p3: NSCollectionLayoutEnvironment) => void;
}

export class HTMLNSGroupTouchBarItemElement extends HTMLNSTouchBarItemElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSGroupTouchBarItem.new();

  // groupTouchBar: NSTouchBar;
  // groupUserInterfaceLayoutDirection: interop.Enum<typeof NSUserInterfaceLayoutDirection>;
  // prefersEqualWidths: boolean;
  // preferredItemWidth: number;
  // readonly effectiveCompressionOptions: NSUserInterfaceCompressionOptions;
}

export class HTMLNSMenuElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSMenu.new();
  get delegate(): NSMenuDelegateImpl {
    return (this.nativeObject.delegate ??= NSMenuDelegateImpl.new()) as NSMenuDelegateImpl;
  }

  // supermenu: NSMenu;
  // readonly numberOfItems: number;
  // autoenablesItems: boolean;
  // readonly menuBarHeight: number;
  // readonly highlightedItem: NSMenuItem;
  // minimumWidth: number;
  // readonly size: CGSize;
  // font: NSFont;
  // allowsContextMenuPlugIns: boolean;
  // showsStateColumn: boolean;
  // userInterfaceLayoutDirection: interop.Enum<typeof NSUserInterfaceLayoutDirection>;
  // presentationStyle: interop.Enum<typeof NSMenuPresentationStyle>;
  // selectionMode: interop.Enum<typeof NSMenuSelectionMode>;
  // readonly propertiesToUpdate: interop.Enum<typeof NSMenuProperties>;
  // menuChangedMessagesEnabled: boolean;
  // readonly isTornOff: boolean;
  // appearance: NSAppearance;
  // readonly effectiveAppearance: NSAppearance;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
  // isAccessibilityElement: boolean;
  // accessibilityFrame: CGRect;
  // isAccessibilityFocused: boolean;
  // accessibilityActivationPoint: CGPoint;
  // accessibilityTopLevelUIElement: interop.Object;
  // accessibilityURL: NSURL;
  // accessibilityValue: interop.Object;
  // accessibilityTitleUIElement: interop.Object;
  // accessibilityOrientation: interop.Enum<typeof NSAccessibilityOrientation>;
  // accessibilityOverflowButton: interop.Object;
  // accessibilityParent: interop.Object;
  // accessibilitySearchButton: interop.Object;
  // accessibilitySearchMenu: interop.Object;
  // isAccessibilitySelected: boolean;
  // accessibilityShownMenu: interop.Object;
  // accessibilityMinValue: interop.Object;
  // accessibilityMaxValue: interop.Object;
  // accessibilityWindow: interop.Object;
  // isAccessibilityExpanded: boolean;
  // isAccessibilityEdited: boolean;
  // isAccessibilityEnabled: boolean;
  // accessibilityClearButton: interop.Object;
  // accessibilityCancelButton: interop.Object;
  // isAccessibilityProtectedContent: boolean;
  // isAccessibilityAlternateUIVisible: boolean;
  // isAccessibilityRequired: boolean;
  // accessibilityApplicationFocusedUIElement: interop.Object;
  // accessibilityMainWindow: interop.Object;
  // isAccessibilityHidden: boolean;
  // isAccessibilityFrontmost: boolean;
  // accessibilityFocusedWindow: interop.Object;
  // accessibilityExtrasMenuBar: interop.Object;
  // accessibilityMenuBar: interop.Object;
  // isAccessibilityOrderedByRow: boolean;
  // accessibilityHorizontalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityVerticalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityWarningValue: interop.Object;
  // accessibilityCriticalValue: interop.Object;
  // isAccessibilityDisclosed: boolean;
  // accessibilityDisclosedByRow: interop.Object;
  // accessibilityDisclosedRows: interop.Object;
  // accessibilityDisclosureLevel: number;
  // accessibilityMarkerValues: interop.Object;
  // accessibilityMarkerGroupUIElement: interop.Object;
  // accessibilityUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityRulerMarkerType: interop.Enum<typeof NSAccessibilityRulerMarkerType>;
  // accessibilityHorizontalScrollBar: interop.Object;
  // accessibilityVerticalScrollBar: interop.Object;
  // accessibilityLabelValue: number;
  // accessibilityDecrementButton: interop.Object;
  // accessibilityIncrementButton: interop.Object;
  // accessibilityHeader: interop.Object;
  // accessibilityColumnCount: number;
  // accessibilityRowCount: number;
  // accessibilityIndex: number;
  // accessibilitySortDirection: interop.Enum<typeof NSAccessibilitySortDirection>;
  // accessibilityRowIndexRange: _NSRange;
  // accessibilityColumnIndexRange: _NSRange;
  // accessibilityInsertionPointLineNumber: number;
  // accessibilitySharedCharacterRange: _NSRange;
  // accessibilityVisibleCharacterRange: _NSRange;
  // accessibilityNumberOfCharacters: number;
  // accessibilitySelectedTextRange: _NSRange;
  // accessibilityToolbarButton: interop.Object;
  // isAccessibilityModal: boolean;
  // accessibilityProxy: interop.Object;
  // isAccessibilityMain: boolean;
  // accessibilityFullScreenButton: interop.Object;
  // accessibilityGrowArea: interop.Object;
  // accessibilityDefaultButton: interop.Object;
  // accessibilityCloseButton: interop.Object;
  // accessibilityZoomButton: interop.Object;
  // accessibilityMinimizeButton: interop.Object;
  // isAccessibilityMinimized: boolean;

  set menuneedsupdate(value: (menu: NSMenu) => void) {
    this.delegate.menuNeedsUpdate = value;
  }
  set numberofitemsinmenu(value: (menu: NSMenu) => number) {
    this.delegate.numberOfItemsInMenu = value;
  }
  set menuupdateitematindexshouldcancel(value: (menu: NSMenu, item: NSMenuItem, index: number, shouldCancel: boolean) => boolean) {
    this.delegate.menuUpdateItemAtIndexShouldCancel = value;
  }
  set menuhaskeyequivalentforeventtargetaction(value: (menu: NSMenu, event: NSEvent, target: interop.PointerConvertible, action: interop.PointerConvertible) => boolean) {
    this.delegate.menuHasKeyEquivalentForEventTargetAction = value;
  }
  set menuwillopen(value: (menu: NSMenu) => void) {
    this.delegate.menuWillOpen = value;
  }
  set menudidclose(value: (menu: NSMenu) => void) {
    this.delegate.menuDidClose = value;
  }
  set menuwillhighlightitem(value: (menu: NSMenu, item: NSMenuItem | null) => void) {
    this.delegate.menuWillHighlightItem = value;
  }
  set confinementrectformenuonscreen(value: (menu: NSMenu, screen: NSScreen | null) => CGRect) {
    this.delegate.confinementRectForMenuOnScreen = value;
  }
}

export class HTMLNSScrubberProportionalLayoutElement extends HTMLNSScrubberLayoutElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSScrubberProportionalLayout.new();

  // numberOfVisibleItems: number;
}

export class HTMLNSTextContainerElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTextContainer.new();

  // layoutManager: NSLayoutManager;
  // readonly textLayoutManager: NSTextLayoutManager;
  // size: CGSize;
  // lineBreakMode: interop.Enum<typeof NSLineBreakMode>;
  // lineFragmentPadding: number;
  // maximumNumberOfLines: number;
  // readonly isSimpleRectangularTextContainer: boolean;
  // widthTracksTextView: boolean;
  // heightTracksTextView: boolean;
  // textView: NSTextView;
  // containerSize: CGSize;
  // supportsSecureCoding: boolean;
  // readonly layoutOrientation: interop.Enum<typeof NSTextLayoutOrientation>;
}

export class HTMLNSPanelElement extends HTMLNSWindowElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSPanel.new();

  // isFloatingPanel: boolean;
  // becomesKeyOnlyIfNeeded: boolean;
  // worksWhenModal: boolean;
}

export class HTMLNSTitlebarAccessoryViewControllerElement extends HTMLNSViewControllerElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTitlebarAccessoryViewController.new();

  // layoutAttribute: interop.Enum<typeof NSLayoutAttribute>;
  // fullScreenMinHeight: number;
  // isHidden: boolean;
  // automaticallyAdjustsSize: boolean;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
}

export class HTMLNSRotationGestureRecognizerElement extends HTMLNSGestureRecognizerElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSRotationGestureRecognizer.new();

  // rotation: number;
  // rotationInDegrees: number;
}

export class HTMLNSDraggingItemElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSDraggingItem.new();

  // readonly item: interop.Object;
  // draggingFrame: CGRect;
  // imageComponentsProvider: () => NSArray;
  // readonly imageComponents: NSArray;
}

export class HTMLNSCollectionViewCompositionalLayoutElement extends HTMLNSCollectionViewLayoutElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSCollectionViewCompositionalLayout.new();

  // configuration: NSCollectionViewCompositionalLayoutConfiguration;
}

export class HTMLNSTrackingAreaElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTrackingArea.new();

  // readonly rect: CGRect;
  // readonly options: interop.Enum<typeof NSTrackingAreaOptions>;
  // readonly owner: interop.Object;
  // readonly userInfo: NSDictionary;
}

export class HTMLNSCollectionLayoutSupplementaryItemElement extends HTMLNSCollectionLayoutItemElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSCollectionLayoutSupplementaryItem.new();

  // zIndex: number;
  // readonly elementKind: NSString;
  // readonly containerAnchor: NSCollectionLayoutAnchor;
  // readonly itemAnchor: NSCollectionLayoutAnchor;
}

export class HTMLNSCollectionViewItemElement extends HTMLNSViewControllerElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSCollectionViewItem.new();

  // readonly collectionView: NSCollectionView;
  // isSelected: boolean;
  // highlightState: interop.Enum<typeof NSCollectionViewItemHighlightState>;
  // imageView: NSImageView;
  // textField: NSTextField;
  // readonly draggingImageComponents: NSArray;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
}

export class HTMLNSDictionaryControllerElement extends HTMLNSArrayControllerElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSDictionaryController.new();

  // initialValue: interop.Object;
}

export class HTMLNSSavePanelElement extends HTMLNSPanelElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSSavePanel.new();
  get delegate(): NSOpenSavePanelDelegateImpl {
    return (this.nativeObject.delegate ??= NSOpenSavePanelDelegateImpl.new()) as NSOpenSavePanelDelegateImpl;
  }

  // readonly URL: NSURL;
  // directoryURL: NSURL;
  // allowsOtherFileTypes: boolean;
  // accessoryView: NSView;
  // readonly isExpanded: boolean;
  // canCreateDirectories: boolean;
  // canSelectHiddenExtension: boolean;
  // isExtensionHidden: boolean;
  // treatsFilePackagesAsDirectories: boolean;
  // showsHiddenFiles: boolean;
  // showsTagField: boolean;

  set panelshouldenableurl(value: (sender: interop.Object, url: NSURL) => boolean) {
    this.delegate.panelShouldEnableURL = value;
  }
  set panelvalidateurlerror(value: (sender: interop.Object, url: NSURL, outError: interop.PointerConvertible) => boolean) {
    this.delegate.panelValidateURLError = value;
  }
  set paneldidchangetodirectoryurl(value: (sender: interop.Object, url: NSURL | null) => void) {
    this.delegate.panelDidChangeToDirectoryURL = value;
  }
  set paneluserenteredfilenameconfirmed(value: (sender: interop.Object, filename: NSString | string, okFlag: boolean) => NSString) {
    this.delegate.panelUserEnteredFilenameConfirmed = value;
  }
  set panelwillexpand(value: (sender: interop.Object, expanding: boolean) => void) {
    this.delegate.panelWillExpand = value;
  }
  set panelselectiondidchange(value: (sender: interop.Object | null) => void) {
    this.delegate.panelSelectionDidChange = value;
  }
}

export class HTMLNSCollectionLayoutDecorationItemElement extends HTMLNSCollectionLayoutItemElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSCollectionLayoutDecorationItem.new();

  // zIndex: number;
  // readonly elementKind: NSString;
}

export class HTMLNSSplitViewControllerElement extends HTMLNSViewControllerElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSSplitViewController.new();

  // splitView: NSSplitView;
  // minimumThicknessForInlineSidebars: number;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
}

export class HTMLNSFontPanelElement extends HTMLNSPanelElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSFontPanel.new();

  // sharedFontPanel: NSFontPanel;
  // sharedFontPanelExists: boolean;
  // accessoryView: NSView;
  // worksWhenModal: boolean;
  // isEnabled: boolean;
}

export class HTMLNSScrubberItemViewElement extends HTMLNSScrubberArrangedViewElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSScrubberItemView.new();

}

export class HTMLNSCollectionLayoutBoundarySupplementaryItemElement extends HTMLNSCollectionLayoutSupplementaryItemElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSCollectionLayoutBoundarySupplementaryItem.new();

  // extendsBoundary: boolean;
  // pinToVisibleBounds: boolean;
  // readonly alignment: interop.Enum<typeof NSRectAlignment>;
  // readonly offset: CGPoint;
}

export class HTMLNSCollectionViewFlowLayoutElement extends HTMLNSCollectionViewLayoutElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSCollectionViewFlowLayout.new();

  // minimumLineSpacing: number;
  // minimumInteritemSpacing: number;
  // itemSize: CGSize;
  // estimatedItemSize: CGSize;
  // scrollDirection: interop.Enum<typeof NSCollectionViewScrollDirection>;
  // headerReferenceSize: CGSize;
  // footerReferenceSize: CGSize;
  // sectionInset: NSEdgeInsets;
  // sectionHeadersPinToVisibleBounds: boolean;
  // sectionFootersPinToVisibleBounds: boolean;
}

export class HTMLNSPathComponentCellElement extends HTMLNSTextFieldCellElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSPathComponentCell.new();

  // image: NSImage;
  // URL: NSURL;
}

export class HTMLNSScrubberElement extends HTMLNSViewElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSScrubber.new();
  get delegate(): NSScrubberDelegateImpl {
    return (this.nativeObject.delegate ??= NSScrubberDelegateImpl.new()) as NSScrubberDelegateImpl;
  }

  // dataSource: NSScrubberDataSource;
  // scrubberLayout: NSScrubberLayout;
  // readonly numberOfItems: number;
  // readonly highlightedIndex: number;
  // selectedIndex: number;
  // mode: interop.Enum<typeof NSScrubberMode>;
  // itemAlignment: interop.Enum<typeof NSScrubberAlignment>;
  // isContinuous: boolean;
  // floatsSelectionViews: boolean;
  // selectionBackgroundStyle: NSScrubberSelectionStyle;
  // selectionOverlayStyle: NSScrubberSelectionStyle;
  // showsArrowButtons: boolean;
  // showsAdditionalContentIndicators: boolean;
  // backgroundColor: NSColor;
  // backgroundView: NSView;

  set scrubberdidselectitematindex(value: (scrubber: NSScrubber, selectedIndex: number) => void) {
    this.delegate.scrubberDidSelectItemAtIndex = value;
  }
  set scrubberdidhighlightitematindex(value: (scrubber: NSScrubber, highlightedIndex: number) => void) {
    this.delegate.scrubberDidHighlightItemAtIndex = value;
  }
  set scrubberdidchangevisiblerange(value: (scrubber: NSScrubber, visibleRange: _NSRange) => void) {
    this.delegate.scrubberDidChangeVisibleRange = value;
  }
  set didbegininteractingwithscrubber(value: (scrubber: NSScrubber) => void) {
    this.delegate.didBeginInteractingWithScrubber = value;
  }
  set didfinishinteractingwithscrubber(value: (scrubber: NSScrubber) => void) {
    this.delegate.didFinishInteractingWithScrubber = value;
  }
  set didcancelinteractingwithscrubber(value: (scrubber: NSScrubber) => void) {
    this.delegate.didCancelInteractingWithScrubber = value;
  }
}

export class HTMLNSControlElement extends HTMLNSViewElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSControl.new();

  // target: interop.Object;
  // action: string;
  // tag: number;
  // ignoresMultiClick: boolean;
  // isContinuous: boolean;
  // isEnabled: boolean;
  // refusesFirstResponder: boolean;
  // isHighlighted: boolean;
  // controlSize: interop.Enum<typeof NSControlSize>;
  // formatter: NSFormatter;
  // objectValue: interop.Object;
  // attributedStringValue: NSAttributedString;
  // intValue: number;
  // integerValue: number;
  // floatValue: number;
  // doubleValue: number;
  // font: NSFont;
  // usesSingleLineMode: boolean;
  // lineBreakMode: interop.Enum<typeof NSLineBreakMode>;
  // alignment: interop.Enum<typeof NSTextAlignment>;
  // baseWritingDirection: interop.Enum<typeof NSWritingDirection>;
  // allowsExpansionToolTips: boolean;
  // cellClass: interop.Object;
  // cell: NSCell;
  // readonly selectedCell: NSCell;
  // readonly selectedTag: number;
}

export class HTMLNSStackViewElement extends HTMLNSViewElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSStackView.new();
  get delegate(): NSStackViewDelegateImpl {
    return (this.nativeObject.delegate ??= NSStackViewDelegateImpl.new()) as NSStackViewDelegateImpl;
  }

  // orientation: interop.Enum<typeof NSUserInterfaceLayoutOrientation>;
  // alignment: interop.Enum<typeof NSLayoutAttribute>;
  // edgeInsets: NSEdgeInsets;
  // distribution: interop.Enum<typeof NSStackViewDistribution>;
  // spacing: number;
  // detachesHiddenViews: boolean;
  // readonly arrangedSubviews: NSArray;
  // readonly detachedViews: NSArray;
  // readonly views: NSArray;
  // hasEqualSpacing: boolean;

  set stackviewwilldetachviews(value: (stackView: NSStackView, views: NSArray | unknown[]) => void) {
    this.delegate.stackViewWillDetachViews = value;
  }
  set stackviewdidreattachviews(value: (stackView: NSStackView, views: NSArray | unknown[]) => void) {
    this.delegate.stackViewDidReattachViews = value;
  }
}

export class HTMLNSRulerViewElement extends HTMLNSViewElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSRulerView.new();

  // scrollView: NSScrollView;
  // orientation: interop.Enum<typeof NSRulerOrientation>;
  // readonly baselineLocation: number;
  // readonly requiredThickness: number;
  // ruleThickness: number;
  // reservedThicknessForMarkers: number;
  // reservedThicknessForAccessoryView: number;
  // originOffset: number;
  // clientView: NSView;
  // accessoryView: NSView;
  // readonly isFlipped: boolean;
}

export class HTMLNSTextAlternativesElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTextAlternatives.new();

  // readonly primaryString: NSString;
  // readonly alternativeStrings: NSArray;
  // supportsSecureCoding: boolean;
}

export class HTMLNSSoundElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSSound.new();
  get delegate(): NSSoundDelegateImpl {
    return (this.nativeObject.delegate ??= NSSoundDelegateImpl.new()) as NSSoundDelegateImpl;
  }

  // readonly name: NSString;
  // soundUnfilteredTypes: NSArray;
  // readonly isPlaying: boolean;
  // readonly duration: number;
  // volume: number;
  // currentTime: number;
  // loops: boolean;
  // supportsSecureCoding: boolean;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;

  set sounddidfinishplaying(value: (sound: NSSound, flag: boolean) => void) {
    this.delegate.soundDidFinishPlaying = value;
  }
}

export class HTMLNSGridRowElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSGridRow.new();

  // readonly gridView: NSGridView | null;
  // readonly numberOfCells: number;
  // yPlacement: interop.Enum<typeof NSGridCellPlacement>;
  // rowAlignment: interop.Enum<typeof NSGridRowAlignment>;
  // height: number;
  // topPadding: number;
  // bottomPadding: number;
  // isHidden: boolean;
}

export class HTMLNSCollectionLayoutAnchorElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSCollectionLayoutAnchor.new();

  // readonly edges: interop.Enum<typeof NSDirectionalRectEdge>;
  // readonly offset: CGPoint;
  // readonly isAbsoluteOffset: boolean;
  // readonly isFractionalOffset: boolean;
}

export class HTMLNSColorElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSColor.new();

  // readonly type: interop.Enum<typeof NSColorType>;
  // blackColor: NSColor;
  // darkGrayColor: NSColor;
  // lightGrayColor: NSColor;
  // whiteColor: NSColor;
  // grayColor: NSColor;
  // redColor: NSColor;
  // greenColor: NSColor;
  // blueColor: NSColor;
  // cyanColor: NSColor;
  // yellowColor: NSColor;
  // magentaColor: NSColor;
  // orangeColor: NSColor;
  // purpleColor: NSColor;
  // brownColor: NSColor;
  // clearColor: NSColor;
  // labelColor: NSColor;
  // secondaryLabelColor: NSColor;
  // tertiaryLabelColor: NSColor;
  // quaternaryLabelColor: NSColor;
  // quinaryLabelColor: NSColor;
  // linkColor: NSColor;
  // placeholderTextColor: NSColor;
  // windowFrameTextColor: NSColor;
  // selectedMenuItemTextColor: NSColor;
  // alternateSelectedControlTextColor: NSColor;
  // headerTextColor: NSColor;
  // separatorColor: NSColor;
  // gridColor: NSColor;
  // windowBackgroundColor: NSColor;
  // underPageBackgroundColor: NSColor;
  // controlBackgroundColor: NSColor;
  // selectedContentBackgroundColor: NSColor;
  // unemphasizedSelectedContentBackgroundColor: NSColor;
  // alternatingContentBackgroundColors: NSArray;
  // findHighlightColor: NSColor;
  // textColor: NSColor;
  // textBackgroundColor: NSColor;
  // textInsertionPointColor: NSColor;
  // selectedTextColor: NSColor;
  // selectedTextBackgroundColor: NSColor;
  // unemphasizedSelectedTextBackgroundColor: NSColor;
  // unemphasizedSelectedTextColor: NSColor;
  // controlColor: NSColor;
  // controlTextColor: NSColor;
  // selectedControlColor: NSColor;
  // selectedControlTextColor: NSColor;
  // disabledControlTextColor: NSColor;
  // keyboardFocusIndicatorColor: NSColor;
  // scrubberTexturedBackgroundColor: NSColor;
  // systemRedColor: NSColor;
  // systemGreenColor: NSColor;
  // systemBlueColor: NSColor;
  // systemOrangeColor: NSColor;
  // systemYellowColor: NSColor;
  // systemBrownColor: NSColor;
  // systemPinkColor: NSColor;
  // systemPurpleColor: NSColor;
  // systemGrayColor: NSColor;
  // systemTealColor: NSColor;
  // systemIndigoColor: NSColor;
  // systemMintColor: NSColor;
  // systemCyanColor: NSColor;
  // systemFillColor: NSColor;
  // secondarySystemFillColor: NSColor;
  // tertiarySystemFillColor: NSColor;
  // quaternarySystemFillColor: NSColor;
  // quinarySystemFillColor: NSColor;
  // controlAccentColor: NSColor;
  // currentControlTint: interop.Enum<typeof NSControlTint>;
  // highlightColor: NSColor;
  // shadowColor: NSColor;
  // readonly catalogNameComponent: NSString;
  // readonly colorNameComponent: NSString;
  // readonly localizedCatalogNameComponent: NSString;
  // readonly localizedColorNameComponent: NSString;
  // readonly redComponent: number;
  // readonly greenComponent: number;
  // readonly blueComponent: number;
  // readonly hueComponent: number;
  // readonly saturationComponent: number;
  // readonly brightnessComponent: number;
  // readonly whiteComponent: number;
  // readonly cyanComponent: number;
  // readonly magentaComponent: number;
  // readonly yellowComponent: number;
  // readonly blackComponent: number;
  // readonly colorSpace: NSColorSpace;
  // readonly numberOfComponents: number;
  // readonly patternImage: NSImage;
  // readonly alphaComponent: number;
  // readonly CGColor: interop.Pointer;
  // ignoresAlpha: boolean;
  // controlHighlightColor: NSColor;
  // controlLightHighlightColor: NSColor;
  // controlShadowColor: NSColor;
  // controlDarkShadowColor: NSColor;
  // scrollBarColor: NSColor;
  // knobColor: NSColor;
  // selectedKnobColor: NSColor;
  // windowFrameColor: NSColor;
  // selectedMenuItemColor: NSColor;
  // headerColor: NSColor;
  // secondarySelectedControlColor: NSColor;
  // alternateSelectedControlColor: NSColor;
  // controlAlternatingRowBackgroundColors: NSArray;
  // readonly colorSpaceName: NSString;
  // supportsSecureCoding: boolean;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
}

export class HTMLNSGraphicsContextElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSGraphicsContext.new();

  // currentContext: NSGraphicsContext;
  // readonly attributes: NSDictionary;
  // readonly isDrawingToScreen: boolean;
  // readonly CGContext: interop.Pointer;
  // readonly isFlipped: boolean;
  // shouldAntialias: boolean;
  // imageInterpolation: interop.Enum<typeof NSImageInterpolation>;
  // patternPhase: CGPoint;
  // compositingOperation: interop.Enum<typeof NSCompositingOperation>;
  // colorRenderingIntent: interop.Enum<typeof NSColorRenderingIntent>;
  // readonly CIContext: CIContext;
  // readonly graphicsPort: interop.Pointer;
}

export class HTMLNSCollectionLayoutGroupElement extends HTMLNSCollectionLayoutItemElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSCollectionLayoutGroup.new();

  // interItemSpacing: NSCollectionLayoutSpacing;
  // readonly subitems: NSArray;
}

export class HTMLNSLayoutGuideElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSLayoutGuide.new();

  // readonly frame: CGRect;
  // owningView: NSView;
  // readonly leadingAnchor: NSLayoutXAxisAnchor;
  // readonly trailingAnchor: NSLayoutXAxisAnchor;
  // readonly leftAnchor: NSLayoutXAxisAnchor;
  // readonly rightAnchor: NSLayoutXAxisAnchor;
  // readonly topAnchor: NSLayoutYAxisAnchor;
  // readonly bottomAnchor: NSLayoutYAxisAnchor;
  // readonly widthAnchor: NSLayoutDimension;
  // readonly heightAnchor: NSLayoutDimension;
  // readonly centerXAnchor: NSLayoutXAxisAnchor;
  // readonly centerYAnchor: NSLayoutYAxisAnchor;
  // readonly hasAmbiguousLayout: boolean;
}

export class HTMLNSFilePromiseProviderElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSFilePromiseProvider.new();
  get delegate(): NSFilePromiseProviderDelegateImpl {
    return (this.nativeObject.delegate ??= NSFilePromiseProviderDelegateImpl.new()) as NSFilePromiseProviderDelegateImpl;
  }

  // userInfo: interop.Object;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;

  set filepromiseproviderfilenamefortype(value: (filePromiseProvider: NSFilePromiseProvider, fileType: NSString | string) => NSString) {
    this.delegate.filePromiseProviderFileNameForType = value;
  }
  set filepromiseproviderwritepromisetourlcompletionhandler(value: (filePromiseProvider: NSFilePromiseProvider, url: NSURL, completionHandler: (p1: NSError) => void | null) => void) {
    this.delegate.filePromiseProviderWritePromiseToURLCompletionHandler = value;
  }
  set operationqueueforfilepromiseprovider(value: (filePromiseProvider: NSFilePromiseProvider) => NSOperationQueue) {
    this.delegate.operationQueueForFilePromiseProvider = value;
  }
}

export class HTMLNSLevelIndicatorCellElement extends HTMLNSActionCellElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSLevelIndicatorCell.new();

  // levelIndicatorStyle: interop.Enum<typeof NSLevelIndicatorStyle>;
  // minValue: number;
  // maxValue: number;
  // warningValue: number;
  // criticalValue: number;
  // tickMarkPosition: interop.Enum<typeof NSTickMarkPosition>;
  // numberOfTickMarks: number;
  // numberOfMajorTickMarks: number;
}

export class HTMLNSDatePickerElement extends HTMLNSControlElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSDatePicker.new();
  get delegate(): NSDatePickerCellDelegateImpl {
    return (this.nativeObject.delegate ??= NSDatePickerCellDelegateImpl.new()) as NSDatePickerCellDelegateImpl;
  }

  // datePickerStyle: interop.Enum<typeof NSDatePickerStyle>;
  // isBezeled: boolean;
  // isBordered: boolean;
  // drawsBackground: boolean;
  // backgroundColor: NSColor;
  // textColor: NSColor;
  // datePickerMode: interop.Enum<typeof NSDatePickerMode>;
  // datePickerElements: interop.Enum<typeof NSDatePickerElementFlags>;
  // calendar: NSCalendar;
  // locale: NSLocale;
  // timeZone: NSTimeZone;
  // dateValue: NSDate;
  // timeInterval: number;
  // minDate: NSDate;
  // maxDate: NSDate;
  // presentsCalendarOverlay: boolean;

  set datepickercellvalidateproposeddatevaluetimeinterval(value: (datePickerCell: NSDatePickerCell, proposedDateValue: interop.PointerConvertible, proposedTimeInterval: interop.PointerConvertible) => void) {
    this.delegate.datePickerCellValidateProposedDateValueTimeInterval = value;
  }
}

export class HTMLNSScrubberImageItemViewElement extends HTMLNSScrubberItemViewElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSScrubberImageItemView.new();

  // readonly imageView: NSImageView;
  // image: NSImage;
  // imageAlignment: interop.Enum<typeof NSImageAlignment>;
}

export class HTMLNSMatrixElement extends HTMLNSControlElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSMatrix.new();
  get delegate(): NSMatrixDelegateImpl {
    return (this.nativeObject.delegate ??= NSMatrixDelegateImpl.new()) as NSMatrixDelegateImpl;
  }

  // cellClass: interop.Object;
  // prototype: NSCell;
  // mode: interop.Enum<typeof NSMatrixMode>;
  // allowsEmptySelection: boolean;
  // readonly cells: NSArray;
  // readonly selectedCell: NSCell;
  // readonly selectedCells: NSArray;
  // readonly selectedRow: number;
  // readonly selectedColumn: number;
  // isSelectionByRect: boolean;
  // cellSize: CGSize;
  // intercellSpacing: CGSize;
  // backgroundColor: NSColor;
  // cellBackgroundColor: NSColor;
  // drawsCellBackground: boolean;
  // drawsBackground: boolean;
  // readonly numberOfRows: number;
  // readonly numberOfColumns: number;
  // doubleAction: string;
  // autosizesCells: boolean;
  // isAutoscroll: boolean;
  // readonly mouseDownFlags: number;
  // autorecalculatesCellSize: boolean;
  // tabKeyTraversesCells: boolean;
  // keyCell: NSCell;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
}

export class HTMLNSRuleEditorElement extends HTMLNSControlElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSRuleEditor.new();
  get delegate(): NSRuleEditorDelegateImpl {
    return (this.nativeObject.delegate ??= NSRuleEditorDelegateImpl.new()) as NSRuleEditorDelegateImpl;
  }

  // nestingMode: interop.Enum<typeof NSRuleEditorNestingMode>;
  // rowHeight: number;
  // isEditable: boolean;
  // canRemoveAllRows: boolean;
  // readonly predicate: NSPredicate;
  // readonly numberOfRows: number;
  // readonly selectedRowIndexes: NSIndexSet;
  // rowClass: interop.Object;

  set ruleeditornumberofchildrenforcriterionwithrowtype(value: (editor: NSRuleEditor, criterion: interop.Object | null, rowType: interop.Enum<typeof NSRuleEditorRowType>) => number) {
    this.delegate.ruleEditorNumberOfChildrenForCriterionWithRowType = value;
  }
  set ruleeditorchildforcriterionwithrowtype(value: (editor: NSRuleEditor, index: number, criterion: interop.Object | null, rowType: interop.Enum<typeof NSRuleEditorRowType>) => interop.Object) {
    this.delegate.ruleEditorChildForCriterionWithRowType = value;
  }
  set ruleeditordisplayvalueforcriterioninrow(value: (editor: NSRuleEditor, criterion: interop.Object, row: number) => interop.Object) {
    this.delegate.ruleEditorDisplayValueForCriterionInRow = value;
  }
  set ruleeditorpredicatepartsforcriterionwithdisplayvalueinrow(value: (editor: NSRuleEditor, criterion: interop.Object, value: interop.Object, row: number) => NSDictionary) {
    this.delegate.ruleEditorPredicatePartsForCriterionWithDisplayValueInRow = value;
  }
  set ruleeditorrowsdidchange(value: (notification: NSNotification) => void) {
    this.delegate.ruleEditorRowsDidChange = value;
  }
}

export class HTMLNSSegmentedControlElement extends HTMLNSControlElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSSegmentedControl.new();

  // segmentCount: number;
  // selectedSegment: number;
  // segmentStyle: interop.Enum<typeof NSSegmentStyle>;
  // isSpringLoaded: boolean;
  // trackingMode: interop.Enum<typeof NSSegmentSwitchTracking>;
  // readonly doubleValueForSelectedSegment: number;
  // selectedSegmentBezelColor: NSColor;
  // readonly indexOfSelectedItem: number;
  // segmentDistribution: interop.Enum<typeof NSSegmentDistribution>;
  // readonly activeCompressionOptions: NSUserInterfaceCompressionOptions;
}

export class HTMLNSStepperElement extends HTMLNSControlElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSStepper.new();

  // minValue: number;
  // maxValue: number;
  // increment: number;
  // valueWraps: boolean;
  // autorepeat: boolean;
  // accessibilityValue: interop.Object;
  // accessibilityFrame: CGRect;
  // accessibilityParent: interop.Object;
  // isAccessibilityFocused: boolean;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
}

export class HTMLNSBrowserElement extends HTMLNSControlElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSBrowser.new();
  get delegate(): NSBrowserDelegateImpl {
    return (this.nativeObject.delegate ??= NSBrowserDelegateImpl.new()) as NSBrowserDelegateImpl;
  }

  // cellClass: interop.Object;
  // readonly isLoaded: boolean;
  // doubleAction: string;
  // cellPrototype: interop.Object;
  // reusesColumns: boolean;
  // hasHorizontalScroller: boolean;
  // autohidesScroller: boolean;
  // separatesColumns: boolean;
  // isTitled: boolean;
  // minColumnWidth: number;
  // maxVisibleColumns: number;
  // allowsMultipleSelection: boolean;
  // allowsBranchSelection: boolean;
  // allowsEmptySelection: boolean;
  // takesTitleFromPreviousColumn: boolean;
  // sendsActionOnArrowKeys: boolean;
  // readonly clickedColumn: number;
  // readonly clickedRow: number;
  // readonly selectedColumn: number;
  // readonly selectedCell: interop.Object;
  // readonly selectedCells: NSArray;
  // selectionIndexPath: NSIndexPath;
  // lastColumn: number;
  // readonly numberOfVisibleColumns: number;
  // readonly firstVisibleColumn: number;
  // readonly lastVisibleColumn: number;
  // readonly titleHeight: number;
  // columnResizingType: interop.Enum<typeof NSBrowserColumnResizingType>;
  // prefersAllColumnUserResizing: boolean;
  // rowHeight: number;
  // allowsTypeSelect: boolean;
  // backgroundColor: NSColor;

  set browsernumberofrowsincolumn(value: (sender: NSBrowser, column: number) => number) {
    this.delegate.browserNumberOfRowsInColumn = value;
  }
  set browsercreaterowsforcolumninmatrix(value: (sender: NSBrowser, column: number, matrix: NSMatrix) => void) {
    this.delegate.browserCreateRowsForColumnInMatrix = value;
  }
  set browsernumberofchildrenofitem(value: (browser: NSBrowser, item: interop.Object | null) => number) {
    this.delegate.browserNumberOfChildrenOfItem = value;
  }
  set browserchildofitem(value: (browser: NSBrowser, index: number, item: interop.Object | null) => interop.Object) {
    this.delegate.browserChildOfItem = value;
  }
  set browserisleafitem(value: (browser: NSBrowser, item: interop.Object | null) => boolean) {
    this.delegate.browserIsLeafItem = value;
  }
  set browserobjectvalueforitem(value: (browser: NSBrowser, item: interop.Object | null) => interop.Object) {
    this.delegate.browserObjectValueForItem = value;
  }
  set browserheightofrowincolumn(value: (browser: NSBrowser, row: number, columnIndex: number) => number) {
    this.delegate.browserHeightOfRowInColumn = value;
  }
  set rootitemforbrowser(value: (browser: NSBrowser) => interop.Object) {
    this.delegate.rootItemForBrowser = value;
  }
  set browsersetobjectvalueforitem(value: (browser: NSBrowser, object: interop.Object | null, item: interop.Object | null) => void) {
    this.delegate.browserSetObjectValueForItem = value;
  }
  set browsershouldedititem(value: (browser: NSBrowser, item: interop.Object | null) => boolean) {
    this.delegate.browserShouldEditItem = value;
  }
  set browserwilldisplaycellatrowcolumn(value: (sender: NSBrowser, cell: interop.Object, row: number, column: number) => void) {
    this.delegate.browserWillDisplayCellAtRowColumn = value;
  }
  set browsertitleofcolumn(value: (sender: NSBrowser, column: number) => NSString) {
    this.delegate.browserTitleOfColumn = value;
  }
  set browserselectcellwithstringincolumn(value: (sender: NSBrowser, title: NSString | string, column: number) => boolean) {
    this.delegate.browserSelectCellWithStringInColumn = value;
  }
  set browserselectrowincolumn(value: (sender: NSBrowser, row: number, column: number) => boolean) {
    this.delegate.browserSelectRowInColumn = value;
  }
  set browseriscolumnvalid(value: (sender: NSBrowser, column: number) => boolean) {
    this.delegate.browserIsColumnValid = value;
  }
  set browserwillscroll(value: (sender: NSBrowser) => void) {
    this.delegate.browserWillScroll = value;
  }
  set browserdidscroll(value: (sender: NSBrowser) => void) {
    this.delegate.browserDidScroll = value;
  }
  set browsershouldsizecolumnforuserresizetowidth(value: (browser: NSBrowser, columnIndex: number, forUserResize: boolean, suggestedWidth: number) => number) {
    this.delegate.browserShouldSizeColumnForUserResizeToWidth = value;
  }
  set browsersizetofitwidthofcolumn(value: (browser: NSBrowser, columnIndex: number) => number) {
    this.delegate.browserSizeToFitWidthOfColumn = value;
  }
  set browsercolumnconfigurationdidchange(value: (notification: NSNotification) => void) {
    this.delegate.browserColumnConfigurationDidChange = value;
  }
  set browsershouldshowcellexpansionforrowcolumn(value: (browser: NSBrowser, row: number, column: number) => boolean) {
    this.delegate.browserShouldShowCellExpansionForRowColumn = value;
  }
  set browserwriterowswithindexesincolumntopasteboard(value: (browser: NSBrowser, rowIndexes: NSIndexSet, column: number, pasteboard: NSPasteboard) => boolean) {
    this.delegate.browserWriteRowsWithIndexesInColumnToPasteboard = value;
  }
  set browsernamesofpromisedfilesdroppedatdestinationfordraggedrowswithindexesincolumn(value: (browser: NSBrowser, dropDestination: NSURL, rowIndexes: NSIndexSet, column: number) => NSArray) {
    this.delegate.browserNamesOfPromisedFilesDroppedAtDestinationForDraggedRowsWithIndexesInColumn = value;
  }
  set browsercandragrowswithindexesincolumnwithevent(value: (browser: NSBrowser, rowIndexes: NSIndexSet, column: number, event: NSEvent) => boolean) {
    this.delegate.browserCanDragRowsWithIndexesInColumnWithEvent = value;
  }
  set browserdraggingimageforrowswithindexesincolumnwitheventoffset(value: (browser: NSBrowser, rowIndexes: NSIndexSet, column: number, event: NSEvent, dragImageOffset: interop.PointerConvertible) => NSImage) {
    this.delegate.browserDraggingImageForRowsWithIndexesInColumnWithEventOffset = value;
  }
  set browservalidatedropproposedrowcolumndropoperation(value: (browser: NSBrowser, info: NSDraggingInfo, row: interop.PointerConvertible, column: interop.PointerConvertible, dropOperation: interop.PointerConvertible) => interop.Enum<typeof NSDragOperation>) {
    this.delegate.browserValidateDropProposedRowColumnDropOperation = value;
  }
  set browseracceptdropatrowcolumndropoperation(value: (browser: NSBrowser, info: NSDraggingInfo, row: number, column: number, dropOperation: interop.Enum<typeof NSBrowserDropOperation>) => boolean) {
    this.delegate.browserAcceptDropAtRowColumnDropOperation = value;
  }
  set browsertypeselectstringforrowincolumn(value: (browser: NSBrowser, row: number, column: number) => NSString) {
    this.delegate.browserTypeSelectStringForRowInColumn = value;
  }
  set browsershouldtypeselectforeventwithcurrentsearchstring(value: (browser: NSBrowser, event: NSEvent, searchString: NSString | string | null) => boolean) {
    this.delegate.browserShouldTypeSelectForEventWithCurrentSearchString = value;
  }
  set browsernexttypeselectmatchfromrowtorowincolumnforstring(value: (browser: NSBrowser, startRow: number, endRow: number, column: number, searchString: NSString | string | null) => number) {
    this.delegate.browserNextTypeSelectMatchFromRowToRowInColumnForString = value;
  }
  set browserpreviewviewcontrollerforleafitem(value: (browser: NSBrowser, item: interop.Object) => NSViewController) {
    this.delegate.browserPreviewViewControllerForLeafItem = value;
  }
  set browserheaderviewcontrollerforitem(value: (browser: NSBrowser, item: interop.Object | null) => NSViewController) {
    this.delegate.browserHeaderViewControllerForItem = value;
  }
  set browserdidchangelastcolumntocolumn(value: (browser: NSBrowser, oldLastColumn: number, column: number) => void) {
    this.delegate.browserDidChangeLastColumnToColumn = value;
  }
  set browserselectionindexesforproposedselectionincolumn(value: (browser: NSBrowser, proposedSelectionIndexes: NSIndexSet, column: number) => NSIndexSet) {
    this.delegate.browserSelectionIndexesForProposedSelectionInColumn = value;
  }
}

export class HTMLNSTextFieldElement extends HTMLNSControlElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSTextField.new();
  get delegate(): NSTextFieldDelegateImpl {
    return (this.nativeObject.delegate ??= NSTextFieldDelegateImpl.new()) as NSTextFieldDelegateImpl;
  }

  // placeholderAttributedString: NSAttributedString;
  // backgroundColor: NSColor;
  // drawsBackground: boolean;
  // textColor: NSColor;
  // isBordered: boolean;
  // isBezeled: boolean;
  // isEditable: boolean;
  // isSelectable: boolean;
  // readonly acceptsFirstResponder: boolean;
  // bezelStyle: interop.Enum<typeof NSTextFieldBezelStyle>;
  // preferredMaxLayoutWidth: number;
  // maximumNumberOfLines: number;
  // allowsDefaultTighteningForTruncation: boolean;
  // lineBreakStrategy: interop.Enum<typeof NSLineBreakStrategy>;
  // isAutomaticTextCompletionEnabled: boolean;
  // allowsCharacterPickerTouchBarItem: boolean;
  // allowsEditingTextAttributes: boolean;
  // importsGraphics: boolean;
  // accessibilityVisibleCharacterRange: _NSRange;
  // accessibilityFrame: CGRect;
  // accessibilityParent: interop.Object;
  // isAccessibilityFocused: boolean;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;

  set textfieldtextviewcandidatesforselectedrange(value: (textField: NSTextField, textView: NSTextView, selectedRange: _NSRange) => NSArray) {
    this.delegate.textFieldTextViewCandidatesForSelectedRange = value;
  }
  set textfieldtextviewshouldselectcandidateatindex(value: (textField: NSTextField, textView: NSTextView, index: number) => boolean) {
    this.delegate.textFieldTextViewShouldSelectCandidateAtIndex = value;
  }
}

export class HTMLNSLevelIndicatorElement extends HTMLNSControlElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSLevelIndicator.new();

  // levelIndicatorStyle: interop.Enum<typeof NSLevelIndicatorStyle>;
  // isEditable: boolean;
  // minValue: number;
  // maxValue: number;
  // warningValue: number;
  // criticalValue: number;
  // tickMarkPosition: interop.Enum<typeof NSTickMarkPosition>;
  // numberOfTickMarks: number;
  // numberOfMajorTickMarks: number;
  // fillColor: NSColor;
  // warningFillColor: NSColor;
  // criticalFillColor: NSColor;
  // drawsTieredCapacityLevels: boolean;
  // placeholderVisibility: interop.Enum<typeof NSLevelIndicatorPlaceholderVisibility>;
  // ratingImage: NSImage;
  // ratingPlaceholderImage: NSImage;
}

export class HTMLNSFormElement extends HTMLNSMatrixElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSForm.new();

}

export class HTMLNSImageViewElement extends HTMLNSControlElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSImageView.new();

  // image: NSImage;
  // isEditable: boolean;
  // imageAlignment: interop.Enum<typeof NSImageAlignment>;
  // imageScaling: interop.Enum<typeof NSImageScaling>;
  // imageFrameStyle: interop.Enum<typeof NSImageFrameStyle>;
  // symbolConfiguration: NSImageSymbolConfiguration;
  // contentTintColor: NSColor;
  // animates: boolean;
  // allowsCutCopyPaste: boolean;
  // defaultPreferredImageDynamicRange: interop.Enum<typeof NSImageDynamicRange>;
  // preferredImageDynamicRange: interop.Enum<typeof NSImageDynamicRange>;
  // readonly imageDynamicRange: interop.Enum<typeof NSImageDynamicRange>;
  // accessibilityFrame: CGRect;
  // accessibilityParent: interop.Object;
  // isAccessibilityFocused: boolean;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
}

export class HTMLNSSecureTextFieldElement extends HTMLNSTextFieldElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSSecureTextField.new();

}

export class HTMLNSTextViewElement extends HTMLNSTextElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSTextView.new();
  get delegate(): NSTextViewDelegateImpl {
    return (this.nativeObject.delegate ??= NSTextViewDelegateImpl.new()) as NSTextViewDelegateImpl;
  }

  // textContainer: NSTextContainer;
  // textContainerInset: CGSize;
  // readonly textContainerOrigin: CGPoint;
  // readonly layoutManager: NSLayoutManager;
  // readonly textStorage: NSTextStorage;
  // readonly textLayoutManager: NSTextLayoutManager;
  // readonly textContentStorage: NSTextContentStorage;
  // readonly shouldDrawInsertionPoint: boolean;
  // stronglyReferencesTextStorage: boolean;
  // usesAdaptiveColorMappingForDarkAppearance: boolean;
  // readonly rangeForUserCompletion: _NSRange;
  // readonly writablePasteboardTypes: NSArray;
  // readonly readablePasteboardTypes: NSArray;
  // readonly acceptableDragTypes: NSArray;
  // readonly selectionAffinity: interop.Enum<typeof NSSelectionAffinity>;
  // selectionGranularity: interop.Enum<typeof NSSelectionGranularity>;
  // insertionPointColor: NSColor;
  // displaysLinkToolTips: boolean;
  // acceptsGlyphInfo: boolean;
  // usesRuler: boolean;
  // usesInspectorBar: boolean;
  // isContinuousSpellCheckingEnabled: boolean;
  // readonly spellCheckerDocumentTag: number;
  // isGrammarCheckingEnabled: boolean;
  // readonly rangesForUserTextChange: NSArray;
  // readonly rangesForUserCharacterAttributeChange: NSArray;
  // readonly rangesForUserParagraphAttributeChange: NSArray;
  // readonly rangeForUserTextChange: _NSRange;
  // readonly rangeForUserCharacterAttributeChange: _NSRange;
  // readonly rangeForUserParagraphAttributeChange: _NSRange;
  // allowsDocumentBackgroundColorChange: boolean;
  // defaultParagraphStyle: NSParagraphStyle;
  // allowsUndo: boolean;
  // readonly isCoalescingUndo: boolean;
  // allowsImageEditing: boolean;
  // usesRolloverButtonForSelection: boolean;
  // isEditable: boolean;
  // isSelectable: boolean;
  // isRichText: boolean;
  // importsGraphics: boolean;
  // drawsBackground: boolean;
  // backgroundColor: NSColor;
  // isFieldEditor: boolean;
  // usesFontPanel: boolean;
  // isRulerVisible: boolean;
  // smartInsertDeleteEnabled: boolean;
  // isAutomaticQuoteSubstitutionEnabled: boolean;
  // isAutomaticLinkDetectionEnabled: boolean;
  // isAutomaticDataDetectionEnabled: boolean;
  // isAutomaticDashSubstitutionEnabled: boolean;
  // isAutomaticTextReplacementEnabled: boolean;
  // isAutomaticSpellingCorrectionEnabled: boolean;
  // enabledTextCheckingTypes: number;
  // usesFindPanel: boolean;
  // usesFindBar: boolean;
  // isIncrementalSearchingEnabled: boolean;
  // inlinePredictionType: interop.Enum<typeof NSTextInputTraitType>;
  // isAutomaticTextCompletionEnabled: boolean;
  // allowsCharacterPickerTouchBarItem: boolean;
  // readonly candidateListTouchBarItem: NSCandidateListTouchBarItem;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
  // selectedRange: _NSRange;
  // readonly unionRectInVisibleSelectedRange: CGRect;
  // readonly documentVisibleRect: CGRect;
  // readonly layoutOrientation: interop.Enum<typeof NSTextLayoutOrientation>;
  // accessibilityVisibleCharacterRange: _NSRange;
  // accessibilityFrame: CGRect;
  // accessibilityParent: interop.Object;
  // isAccessibilityFocused: boolean;

  set textviewclickedonlinkatindex(value: (textView: NSTextView, link: interop.Object, charIndex: number) => boolean) {
    this.delegate.textViewClickedOnLinkAtIndex = value;
  }
  set textviewclickedoncellinrectatindex(value: (textView: NSTextView, cell: NSTextAttachmentCell, cellFrame: CGRect, charIndex: number) => void) {
    this.delegate.textViewClickedOnCellInRectAtIndex = value;
  }
  set textviewdoubleclickedoncellinrectatindex(value: (textView: NSTextView, cell: NSTextAttachmentCell, cellFrame: CGRect, charIndex: number) => void) {
    this.delegate.textViewDoubleClickedOnCellInRectAtIndex = value;
  }
  set textviewdraggedcellinrecteventatindex(value: (view: NSTextView, cell: NSTextAttachmentCell, rect: CGRect, event: NSEvent, charIndex: number) => void) {
    this.delegate.textViewDraggedCellInRectEventAtIndex = value;
  }
  set textviewwritablepasteboardtypesforcellatindex(value: (view: NSTextView, cell: NSTextAttachmentCell, charIndex: number) => NSArray) {
    this.delegate.textViewWritablePasteboardTypesForCellAtIndex = value;
  }
  set textviewwritecellatindextopasteboardtype(value: (view: NSTextView, cell: NSTextAttachmentCell, charIndex: number, pboard: NSPasteboard, type: NSString | string) => boolean) {
    this.delegate.textViewWriteCellAtIndexToPasteboardType = value;
  }
  set textviewwillchangeselectionfromcharacterrangetocharacterrange(value: (textView: NSTextView, oldSelectedCharRange: _NSRange, newSelectedCharRange: _NSRange) => _NSRange) {
    this.delegate.textViewWillChangeSelectionFromCharacterRangeToCharacterRange = value;
  }
  set textviewwillchangeselectionfromcharacterrangestocharacterranges(value: (textView: NSTextView, oldSelectedCharRanges: NSArray | unknown[], newSelectedCharRanges: NSArray | unknown[]) => NSArray) {
    this.delegate.textViewWillChangeSelectionFromCharacterRangesToCharacterRanges = value;
  }
  set textviewshouldchangetextinrangesreplacementstrings(value: (textView: NSTextView, affectedRanges: NSArray | unknown[], replacementStrings: NSArray | unknown[] | null) => boolean) {
    this.delegate.textViewShouldChangeTextInRangesReplacementStrings = value;
  }
  set textviewshouldchangetypingattributestoattributes(value: (textView: NSTextView, oldTypingAttributes: NSDictionary | Record<string, unknown>, newTypingAttributes: NSDictionary | Record<string, unknown>) => NSDictionary) {
    this.delegate.textViewShouldChangeTypingAttributesToAttributes = value;
  }
  set textviewdidchangeselection(value: (notification: NSNotification) => void) {
    this.delegate.textViewDidChangeSelection = value;
  }
  set textviewdidchangetypingattributes(value: (notification: NSNotification) => void) {
    this.delegate.textViewDidChangeTypingAttributes = value;
  }
  set textviewwilldisplaytooltipforcharacteratindex(value: (textView: NSTextView, tooltip: NSString | string, characterIndex: number) => NSString) {
    this.delegate.textViewWillDisplayToolTipForCharacterAtIndex = value;
  }
  set textviewcompletionsforpartialwordrangeindexofselecteditem(value: (textView: NSTextView, words: NSArray | unknown[], charRange: _NSRange, index: interop.PointerConvertible) => NSArray) {
    this.delegate.textViewCompletionsForPartialWordRangeIndexOfSelectedItem = value;
  }
  set textviewshouldchangetextinrangereplacementstring(value: (textView: NSTextView, affectedCharRange: _NSRange, replacementString: NSString | string | null) => boolean) {
    this.delegate.textViewShouldChangeTextInRangeReplacementString = value;
  }
  set textviewdocommandbyselector(value: (textView: NSTextView, commandSelector: string) => boolean) {
    this.delegate.textViewDoCommandBySelector = value;
  }
  set textviewshouldsetspellingstaterange(value: (textView: NSTextView, value: number, affectedCharRange: _NSRange) => number) {
    this.delegate.textViewShouldSetSpellingStateRange = value;
  }
  set textviewmenuforeventatindex(value: (view: NSTextView, menu: NSMenu, event: NSEvent, charIndex: number) => NSMenu) {
    this.delegate.textViewMenuForEventAtIndex = value;
  }
  set textviewwillchecktextinrangeoptionstypes(value: (view: NSTextView, range: _NSRange, options: NSDictionary | Record<string, unknown>, checkingTypes: interop.PointerConvertible) => NSDictionary) {
    this.delegate.textViewWillCheckTextInRangeOptionsTypes = value;
  }
  set textviewdidchecktextinrangetypesoptionsresultsorthographywordcount(value: (view: NSTextView, range: _NSRange, checkingTypes: number, options: NSDictionary | Record<string, unknown>, results: NSArray | unknown[], orthography: NSOrthography, wordCount: number) => NSArray) {
    this.delegate.textViewDidCheckTextInRangeTypesOptionsResultsOrthographyWordCount = value;
  }
  set textviewurlforcontentsoftextattachmentatindex(value: (textView: NSTextView, textAttachment: NSTextAttachment, charIndex: number) => NSURL) {
    this.delegate.textViewURLForContentsOfTextAttachmentAtIndex = value;
  }
  set textviewwillshowsharingservicepickerforitems(value: (textView: NSTextView, servicePicker: NSSharingServicePicker, items: NSArray | unknown[]) => NSSharingServicePicker) {
    this.delegate.textViewWillShowSharingServicePickerForItems = value;
  }
  set undomanagerfortextview(value: (view: NSTextView) => NSUndoManager) {
    this.delegate.undoManagerForTextView = value;
  }
  set textviewshouldupdatetouchbaritemidentifiers(value: (textView: NSTextView, identifiers: NSArray | unknown[]) => NSArray) {
    this.delegate.textViewShouldUpdateTouchBarItemIdentifiers = value;
  }
  set textviewcandidatesforselectedrange(value: (textView: NSTextView, selectedRange: _NSRange) => NSArray) {
    this.delegate.textViewCandidatesForSelectedRange = value;
  }
  set textviewshouldselectcandidateatindex(value: (textView: NSTextView, index: number) => boolean) {
    this.delegate.textViewShouldSelectCandidateAtIndex = value;
  }
  set textviewclickedonlink(value: (textView: NSTextView, link: interop.Object) => boolean) {
    this.delegate.textViewClickedOnLink = value;
  }
  set textviewclickedoncellinrect(value: (textView: NSTextView, cell: NSTextAttachmentCell, cellFrame: CGRect) => void) {
    this.delegate.textViewClickedOnCellInRect = value;
  }
  set textviewdoubleclickedoncellinrect(value: (textView: NSTextView, cell: NSTextAttachmentCell, cellFrame: CGRect) => void) {
    this.delegate.textViewDoubleClickedOnCellInRect = value;
  }
  set textviewdraggedcellinrectevent(value: (view: NSTextView, cell: NSTextAttachmentCell, rect: CGRect, event: NSEvent) => void) {
    this.delegate.textViewDraggedCellInRectEvent = value;
  }
}

export class HTMLNSColorWellElement extends HTMLNSControlElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSColorWell.new();

  // readonly isActive: boolean;
  // isBordered: boolean;
  // color: NSColor;
  // colorWellStyle: interop.Enum<typeof NSColorWellStyle>;
  // image: NSImage;
  // pulldownTarget: interop.Object;
  // pulldownAction: string;
  // supportsAlpha: boolean;
}

export class HTMLNSLayoutXAxisAnchorElement extends HTMLNSLayoutAnchorElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSLayoutXAxisAnchor.new();

}

export class HTMLNSTabViewControllerElement extends HTMLNSViewControllerElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTabViewController.new();

  // tabStyle: interop.Enum<typeof NSTabViewControllerTabStyle>;
  // tabView: NSTabView;
  // transitionOptions: interop.Enum<typeof NSViewControllerTransitionOptions>;
  // canPropagateSelectedChildViewControllerTitle: boolean;
  // selectedTabViewItemIndex: number;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
}

export class HTMLNSSharingServicePickerTouchBarItemElement extends HTMLNSTouchBarItemElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSSharingServicePickerTouchBarItem.new();

  // delegate: NSSharingServicePickerTouchBarItemDelegate | null;
  // isEnabled: boolean;
  // buttonImage: NSImage;
}

export class HTMLNSTextContentStorageElement extends HTMLNSTextContentManagerElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSTextContentStorage.new();
  get delegate(): NSTextContentStorageDelegateImpl {
    return (this.nativeObject.delegate ??= NSTextContentStorageDelegateImpl.new()) as NSTextContentStorageDelegateImpl;
  }

  // attributedString: NSAttributedString;
  // textStorage: NSTextStorage;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;

  set textcontentstoragetextparagraphwithrange(value: (textContentStorage: NSTextContentStorage, range: _NSRange) => NSTextParagraph) {
    this.delegate.textContentStorageTextParagraphWithRange = value;
  }
}

export class HTMLNSSwitchElement extends HTMLNSControlElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSSwitch.new();

  // state: number;
  // accessibilityFrame: CGRect;
  // accessibilityParent: interop.Object;
  // isAccessibilityFocused: boolean;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
}

export class HTMLNSOpenPanelElement extends HTMLNSSavePanelElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSOpenPanel.new();

  // readonly URLs: NSArray;
  // resolvesAliases: boolean;
  // canChooseDirectories: boolean;
  // allowsMultipleSelection: boolean;
  // canChooseFiles: boolean;
  // canResolveUbiquitousConflicts: boolean;
  // canDownloadUbiquitousContents: boolean;
  // isAccessoryViewDisclosed: boolean;
}

export class HTMLNSTextParagraphElement extends HTMLNSTextElementElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSTextParagraph.new();

  // readonly attributedString: NSAttributedString;
  // readonly paragraphContentRange: NSTextRange;
  // readonly paragraphSeparatorRange: NSTextRange;
}

export class HTMLNSPDFImageRepElement extends HTMLNSImageRepElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSPDFImageRep.new();

  // readonly PDFRepresentation: NSData;
  // readonly bounds: CGRect;
  // currentPage: number;
  // readonly pageCount: number;
}

export class HTMLNSPageControllerElement extends HTMLNSViewControllerElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSPageController.new();
  get delegate(): NSPageControllerDelegateImpl {
    return (this.nativeObject.delegate ??= NSPageControllerDelegateImpl.new()) as NSPageControllerDelegateImpl;
  }

  // readonly selectedViewController: NSViewController;
  // transitionStyle: interop.Enum<typeof NSPageControllerTransitionStyle>;
  // selectedIndex: number;

  set pagecontrolleridentifierforobject(value: (pageController: NSPageController, object: interop.Object) => NSString) {
    this.delegate.pageControllerIdentifierForObject = value;
  }
  set pagecontrollerviewcontrollerforidentifier(value: (pageController: NSPageController, identifier: NSString | string) => NSViewController) {
    this.delegate.pageControllerViewControllerForIdentifier = value;
  }
  set pagecontrollerframeforobject(value: (pageController: NSPageController, object: interop.Object | null) => CGRect) {
    this.delegate.pageControllerFrameForObject = value;
  }
  set pagecontrollerprepareviewcontrollerwithobject(value: (pageController: NSPageController, viewController: NSViewController, object: interop.Object | null) => void) {
    this.delegate.pageControllerPrepareViewControllerWithObject = value;
  }
  set pagecontrollerdidtransitiontoobject(value: (pageController: NSPageController, object: interop.Object) => void) {
    this.delegate.pageControllerDidTransitionToObject = value;
  }
  set pagecontrollerwillstartlivetransition(value: (pageController: NSPageController) => void) {
    this.delegate.pageControllerWillStartLiveTransition = value;
  }
  set pagecontrollerdidendlivetransition(value: (pageController: NSPageController) => void) {
    this.delegate.pageControllerDidEndLiveTransition = value;
  }
}

export class HTMLNSComboBoxElement extends HTMLNSTextFieldElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSComboBox.new();
  get delegate(): NSComboBoxDelegateImpl {
    return (this.nativeObject.delegate ??= NSComboBoxDelegateImpl.new()) as NSComboBoxDelegateImpl;
  }

  // hasVerticalScroller: boolean;
  // intercellSpacing: CGSize;
  // itemHeight: number;
  // numberOfVisibleItems: number;
  // isButtonBordered: boolean;
  // usesDataSource: boolean;
  // readonly indexOfSelectedItem: number;
  // readonly numberOfItems: number;
  // completes: boolean;
  // dataSource: NSComboBoxDataSource;
  // readonly objectValueOfSelectedItem: interop.Object;
  // readonly objectValues: NSArray;

  set comboboxwillpopup(value: (notification: NSNotification) => void) {
    this.delegate.comboBoxWillPopUp = value;
  }
  set comboboxwilldismiss(value: (notification: NSNotification) => void) {
    this.delegate.comboBoxWillDismiss = value;
  }
  set comboboxselectiondidchange(value: (notification: NSNotification) => void) {
    this.delegate.comboBoxSelectionDidChange = value;
  }
  set comboboxselectionischanging(value: (notification: NSNotification) => void) {
    this.delegate.comboBoxSelectionIsChanging = value;
  }
}

export class HTMLNSSliderElement extends HTMLNSControlElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSSlider.new();

  // sliderType: interop.Enum<typeof NSSliderType>;
  // minValue: number;
  // maxValue: number;
  // altIncrementValue: number;
  // readonly knobThickness: number;
  // isVertical: boolean;
  // trackFillColor: NSColor;
  // numberOfTickMarks: number;
  // tickMarkPosition: interop.Enum<typeof NSTickMarkPosition>;
  // allowsTickMarkValuesOnly: boolean;
  // accessibilityValue: interop.Object;
  // accessibilityFrame: CGRect;
  // accessibilityParent: interop.Object;
  // isAccessibilityFocused: boolean;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
}

export class HTMLNSSearchFieldElement extends HTMLNSTextFieldElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSSearchField.new();
  get delegate(): NSSearchFieldDelegateImpl {
    return (this.nativeObject.delegate ??= NSSearchFieldDelegateImpl.new()) as NSSearchFieldDelegateImpl;
  }

  // readonly searchTextBounds: CGRect;
  // readonly searchButtonBounds: CGRect;
  // readonly cancelButtonBounds: CGRect;
  // searchMenuTemplate: NSMenu;
  // sendsWholeSearchString: boolean;
  // maximumRecents: number;
  // sendsSearchStringImmediately: boolean;
  // centersPlaceholder: boolean;

  set searchfielddidstartsearching(value: (sender: NSSearchField) => void) {
    this.delegate.searchFieldDidStartSearching = value;
  }
  set searchfielddidendsearching(value: (sender: NSSearchField) => void) {
    this.delegate.searchFieldDidEndSearching = value;
  }
}

export class HTMLNSTokenFieldElement extends HTMLNSTextFieldElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSTokenField.new();
  get delegate(): NSTokenFieldDelegateImpl {
    return (this.nativeObject.delegate ??= NSTokenFieldDelegateImpl.new()) as NSTokenFieldDelegateImpl;
  }

  // tokenStyle: interop.Enum<typeof NSTokenStyle>;
  // completionDelay: number;
  // defaultCompletionDelay: number;
  // tokenizingCharacterSet: NSCharacterSet;
  // defaultTokenizingCharacterSet: NSCharacterSet;

  set tokenfieldcompletionsforsubstringindexoftokenindexofselecteditem(value: (tokenField: NSTokenField, substring: NSString | string, tokenIndex: number, selectedIndex: interop.PointerConvertible) => NSArray) {
    this.delegate.tokenFieldCompletionsForSubstringIndexOfTokenIndexOfSelectedItem = value;
  }
  set tokenfieldshouldaddobjectsatindex(value: (tokenField: NSTokenField, tokens: NSArray | unknown[], index: number) => NSArray) {
    this.delegate.tokenFieldShouldAddObjectsAtIndex = value;
  }
  set tokenfielddisplaystringforrepresentedobject(value: (tokenField: NSTokenField, representedObject: interop.Object) => NSString) {
    this.delegate.tokenFieldDisplayStringForRepresentedObject = value;
  }
  set tokenfieldeditingstringforrepresentedobject(value: (tokenField: NSTokenField, representedObject: interop.Object) => NSString) {
    this.delegate.tokenFieldEditingStringForRepresentedObject = value;
  }
  set tokenfieldrepresentedobjectforeditingstring(value: (tokenField: NSTokenField, editingString: NSString | string) => interop.Object) {
    this.delegate.tokenFieldRepresentedObjectForEditingString = value;
  }
  set tokenfieldwriterepresentedobjectstopasteboard(value: (tokenField: NSTokenField, objects: NSArray | unknown[], pboard: NSPasteboard) => boolean) {
    this.delegate.tokenFieldWriteRepresentedObjectsToPasteboard = value;
  }
  set tokenfieldreadfrompasteboard(value: (tokenField: NSTokenField, pboard: NSPasteboard) => NSArray) {
    this.delegate.tokenFieldReadFromPasteboard = value;
  }
  set tokenfieldmenuforrepresentedobject(value: (tokenField: NSTokenField, representedObject: interop.Object) => NSMenu) {
    this.delegate.tokenFieldMenuForRepresentedObject = value;
  }
  set tokenfieldhasmenuforrepresentedobject(value: (tokenField: NSTokenField, representedObject: interop.Object) => boolean) {
    this.delegate.tokenFieldHasMenuForRepresentedObject = value;
  }
  set tokenfieldstyleforrepresentedobject(value: (tokenField: NSTokenField, representedObject: interop.Object) => interop.Enum<typeof NSTokenStyle>) {
    this.delegate.tokenFieldStyleForRepresentedObject = value;
  }
}

export class HTMLNSTableViewElement extends HTMLNSControlElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSTableView.new();
  get delegate(): NSTableViewDelegateImpl {
    return (this.nativeObject.delegate ??= NSTableViewDelegateImpl.new()) as NSTableViewDelegateImpl;
  }

  // dataSource: NSTableViewDataSource;
  // headerView: NSTableHeaderView;
  // cornerView: NSView;
  // allowsColumnReordering: boolean;
  // allowsColumnResizing: boolean;
  // columnAutoresizingStyle: interop.Enum<typeof NSTableViewColumnAutoresizingStyle>;
  // gridStyleMask: interop.Enum<typeof NSTableViewGridLineStyle>;
  // intercellSpacing: CGSize;
  // usesAlternatingRowBackgroundColors: boolean;
  // backgroundColor: NSColor;
  // gridColor: NSColor;
  // rowSizeStyle: interop.Enum<typeof NSTableViewRowSizeStyle>;
  // readonly effectiveRowSizeStyle: interop.Enum<typeof NSTableViewRowSizeStyle>;
  // rowHeight: number;
  // readonly tableColumns: NSArray;
  // readonly numberOfColumns: number;
  // readonly numberOfRows: number;
  // readonly editedColumn: number;
  // readonly editedRow: number;
  // readonly clickedColumn: number;
  // readonly clickedRow: number;
  // doubleAction: string;
  // highlightedTableColumn: NSTableColumn;
  // verticalMotionCanBeginDrag: boolean;
  // allowsMultipleSelection: boolean;
  // allowsEmptySelection: boolean;
  // allowsColumnSelection: boolean;
  // readonly selectedColumnIndexes: NSIndexSet;
  // readonly selectedRowIndexes: NSIndexSet;
  // readonly selectedColumn: number;
  // readonly selectedRow: number;
  // readonly numberOfSelectedColumns: number;
  // readonly numberOfSelectedRows: number;
  // allowsTypeSelect: boolean;
  // style: interop.Enum<typeof NSTableViewStyle>;
  // readonly effectiveStyle: interop.Enum<typeof NSTableViewStyle>;
  // selectionHighlightStyle: interop.Enum<typeof NSTableViewSelectionHighlightStyle>;
  // draggingDestinationFeedbackStyle: interop.Enum<typeof NSTableViewDraggingDestinationFeedbackStyle>;
  // autosaveTableColumns: boolean;
  // floatsGroupRows: boolean;
  // rowActionsVisible: boolean;
  // readonly hiddenRowIndexes: NSIndexSet;
  // readonly registeredNibsByIdentifier: NSDictionary;
  // usesStaticContents: boolean;
  // userInterfaceLayoutDirection: interop.Enum<typeof NSUserInterfaceLayoutDirection>;
  // usesAutomaticRowHeights: boolean;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
  // accessibilityFrame: CGRect;
  // accessibilityParent: interop.Object;
  // isAccessibilityFocused: boolean;

  set tableviewviewfortablecolumnrow(value: (tableView: NSTableView, tableColumn: NSTableColumn | null, row: number) => NSView) {
    this.delegate.tableViewViewForTableColumnRow = value;
  }
  set tableviewrowviewforrow(value: (tableView: NSTableView, row: number) => NSTableRowView) {
    this.delegate.tableViewRowViewForRow = value;
  }
  set tableviewdidaddrowviewforrow(value: (tableView: NSTableView, rowView: NSTableRowView, row: number) => void) {
    this.delegate.tableViewDidAddRowViewForRow = value;
  }
  set tableviewdidremoverowviewforrow(value: (tableView: NSTableView, rowView: NSTableRowView, row: number) => void) {
    this.delegate.tableViewDidRemoveRowViewForRow = value;
  }
  set tableviewwilldisplaycellfortablecolumnrow(value: (tableView: NSTableView, cell: interop.Object, tableColumn: NSTableColumn | null, row: number) => void) {
    this.delegate.tableViewWillDisplayCellForTableColumnRow = value;
  }
  set tableviewshouldedittablecolumnrow(value: (tableView: NSTableView, tableColumn: NSTableColumn | null, row: number) => boolean) {
    this.delegate.tableViewShouldEditTableColumnRow = value;
  }
  set tableviewtooltipforcellrecttablecolumnrowmouselocation(value: (tableView: NSTableView, cell: NSCell, rect: interop.PointerConvertible, tableColumn: NSTableColumn | null, row: number, mouseLocation: CGPoint) => NSString) {
    this.delegate.tableViewToolTipForCellRectTableColumnRowMouseLocation = value;
  }
  set tableviewshouldshowcellexpansionfortablecolumnrow(value: (tableView: NSTableView, tableColumn: NSTableColumn | null, row: number) => boolean) {
    this.delegate.tableViewShouldShowCellExpansionForTableColumnRow = value;
  }
  set tableviewshouldtrackcellfortablecolumnrow(value: (tableView: NSTableView, cell: NSCell, tableColumn: NSTableColumn | null, row: number) => boolean) {
    this.delegate.tableViewShouldTrackCellForTableColumnRow = value;
  }
  set tableviewdatacellfortablecolumnrow(value: (tableView: NSTableView, tableColumn: NSTableColumn | null, row: number) => NSCell) {
    this.delegate.tableViewDataCellForTableColumnRow = value;
  }
  set selectionshouldchangeintableview(value: (tableView: NSTableView) => boolean) {
    this.delegate.selectionShouldChangeInTableView = value;
  }
  set tableviewshouldselectrow(value: (tableView: NSTableView, row: number) => boolean) {
    this.delegate.tableViewShouldSelectRow = value;
  }
  set tableviewselectionindexesforproposedselection(value: (tableView: NSTableView, proposedSelectionIndexes: NSIndexSet) => NSIndexSet) {
    this.delegate.tableViewSelectionIndexesForProposedSelection = value;
  }
  set tableviewshouldselecttablecolumn(value: (tableView: NSTableView, tableColumn: NSTableColumn | null) => boolean) {
    this.delegate.tableViewShouldSelectTableColumn = value;
  }
  set tableviewmousedowninheaderoftablecolumn(value: (tableView: NSTableView, tableColumn: NSTableColumn) => void) {
    this.delegate.tableViewMouseDownInHeaderOfTableColumn = value;
  }
  set tableviewdidclicktablecolumn(value: (tableView: NSTableView, tableColumn: NSTableColumn) => void) {
    this.delegate.tableViewDidClickTableColumn = value;
  }
  set tableviewdiddragtablecolumn(value: (tableView: NSTableView, tableColumn: NSTableColumn) => void) {
    this.delegate.tableViewDidDragTableColumn = value;
  }
  set tableviewheightofrow(value: (tableView: NSTableView, row: number) => number) {
    this.delegate.tableViewHeightOfRow = value;
  }
  set tableviewtypeselectstringfortablecolumnrow(value: (tableView: NSTableView, tableColumn: NSTableColumn | null, row: number) => NSString) {
    this.delegate.tableViewTypeSelectStringForTableColumnRow = value;
  }
  set tableviewnexttypeselectmatchfromrowtorowforstring(value: (tableView: NSTableView, startRow: number, endRow: number, searchString: NSString | string) => number) {
    this.delegate.tableViewNextTypeSelectMatchFromRowToRowForString = value;
  }
  set tableviewshouldtypeselectforeventwithcurrentsearchstring(value: (tableView: NSTableView, event: NSEvent, searchString: NSString | string | null) => boolean) {
    this.delegate.tableViewShouldTypeSelectForEventWithCurrentSearchString = value;
  }
  set tableviewisgrouprow(value: (tableView: NSTableView, row: number) => boolean) {
    this.delegate.tableViewIsGroupRow = value;
  }
  set tableviewsizetofitwidthofcolumn(value: (tableView: NSTableView, column: number) => number) {
    this.delegate.tableViewSizeToFitWidthOfColumn = value;
  }
  set tableviewshouldreordercolumntocolumn(value: (tableView: NSTableView, columnIndex: number, newColumnIndex: number) => boolean) {
    this.delegate.tableViewShouldReorderColumnToColumn = value;
  }
  set tableviewrowactionsforrowedge(value: (tableView: NSTableView, row: number, edge: interop.Enum<typeof NSTableRowActionEdge>) => NSArray) {
    this.delegate.tableViewRowActionsForRowEdge = value;
  }
  set tableviewusercanchangevisibilityoftablecolumn(value: (tableView: NSTableView, column: NSTableColumn) => boolean) {
    this.delegate.tableViewUserCanChangeVisibilityOfTableColumn = value;
  }
  set tableviewuserdidchangevisibilityoftablecolumns(value: (tableView: NSTableView, columns: NSArray | unknown[]) => void) {
    this.delegate.tableViewUserDidChangeVisibilityOfTableColumns = value;
  }
  set tableviewselectiondidchange(value: (notification: NSNotification) => void) {
    this.delegate.tableViewSelectionDidChange = value;
  }
  set tableviewcolumndidmove(value: (notification: NSNotification) => void) {
    this.delegate.tableViewColumnDidMove = value;
  }
  set tableviewcolumndidresize(value: (notification: NSNotification) => void) {
    this.delegate.tableViewColumnDidResize = value;
  }
  set tableviewselectionischanging(value: (notification: NSNotification) => void) {
    this.delegate.tableViewSelectionIsChanging = value;
  }
}

export class HTMLNSScrubberTextItemViewElement extends HTMLNSScrubberItemViewElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSScrubberTextItemView.new();

  // readonly textField: NSTextField;
}

export class HTMLNSButtonElement extends HTMLNSControlElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSButton.new();

  // attributedTitle: NSAttributedString;
  // attributedAlternateTitle: NSAttributedString;
  // hasDestructiveAction: boolean;
  // sound: NSSound;
  // isSpringLoaded: boolean;
  // maxAcceleratorLevel: number;
  // bezelStyle: interop.Enum<typeof NSBezelStyle>;
  // isBordered: boolean;
  // isTransparent: boolean;
  // showsBorderOnlyWhileMouseInside: boolean;
  // bezelColor: NSColor;
  // contentTintColor: NSColor;
  // image: NSImage;
  // alternateImage: NSImage;
  // imagePosition: interop.Enum<typeof NSCellImagePosition>;
  // imageScaling: interop.Enum<typeof NSImageScaling>;
  // imageHugsTitle: boolean;
  // symbolConfiguration: NSImageSymbolConfiguration;
  // state: number;
  // allowsMixedState: boolean;
  // keyEquivalentModifierMask: interop.Enum<typeof NSEventModifierFlags>;
  // readonly activeCompressionOptions: NSUserInterfaceCompressionOptions;
  // accessibilityFrame: CGRect;
  // accessibilityParent: interop.Object;
  // isAccessibilityFocused: boolean;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
}

export class HTMLNSScrubberSelectionViewElement extends HTMLNSScrubberArrangedViewElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSScrubberSelectionView.new();

}

export class HTMLNSSearchFieldCellElement extends HTMLNSTextFieldCellElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSSearchFieldCell.new();

  // searchButtonCell: NSButtonCell;
  // cancelButtonCell: NSButtonCell;
  // searchMenuTemplate: NSMenu;
  // sendsWholeSearchString: boolean;
  // maximumRecents: number;
  // sendsSearchStringImmediately: boolean;
}

export class HTMLNSRunningApplicationElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSRunningApplication.new();

  // readonly isTerminated: boolean;
  // readonly isFinishedLaunching: boolean;
  // readonly isHidden: boolean;
  // readonly isActive: boolean;
  // readonly ownsMenuBar: boolean;
  // readonly activationPolicy: interop.Enum<typeof NSApplicationActivationPolicy>;
  // readonly localizedName: NSString;
  // readonly bundleIdentifier: NSString;
  // readonly bundleURL: NSURL;
  // readonly executableURL: NSURL;
  // readonly processIdentifier: number;
  // readonly launchDate: NSDate;
  // readonly icon: NSImage;
  // readonly executableArchitecture: number;
  // currentApplication: NSRunningApplication;
}

export class HTMLNSSpellCheckerElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSSpellChecker.new();

  // sharedSpellChecker: NSSpellChecker;
  // sharedSpellCheckerExists: boolean;
  // readonly userReplacementsDictionary: NSDictionary;
  // readonly spellingPanel: NSPanel;
  // accessoryView: NSView;
  // readonly substitutionsPanel: NSPanel;
  // substitutionsPanelAccessoryViewController: NSViewController;
  // readonly availableLanguages: NSArray;
  // readonly userPreferredLanguages: NSArray;
  // automaticallyIdentifiesLanguages: boolean;
  // isAutomaticTextReplacementEnabled: boolean;
  // isAutomaticSpellingCorrectionEnabled: boolean;
  // isAutomaticQuoteSubstitutionEnabled: boolean;
  // isAutomaticDashSubstitutionEnabled: boolean;
  // isAutomaticCapitalizationEnabled: boolean;
  // isAutomaticPeriodSubstitutionEnabled: boolean;
  // isAutomaticTextCompletionEnabled: boolean;
  // isAutomaticInlinePredictionEnabled: boolean;
}

export class HTMLNSPopUpButtonElement extends HTMLNSButtonElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSPopUpButton.new();

  // menu: NSMenu;
  // pullsDown: boolean;
  // autoenablesItems: boolean;
  // preferredEdge: interop.Enum<typeof NSRectEdge>;
  // readonly itemArray: NSArray;
  // readonly numberOfItems: number;
  // readonly lastItem: NSMenuItem;
  // readonly selectedItem: NSMenuItem;
  // readonly indexOfSelectedItem: number;
  // readonly selectedTag: number;
  // readonly itemTitles: NSArray;
  // readonly titleOfSelectedItem: NSString;
}

export class HTMLNSStatusBarButtonElement extends HTMLNSButtonElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSStatusBarButton.new();

  // appearsDisabled: boolean;
}

export class HTMLNSTextListElementElement extends HTMLNSTextParagraphElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSTextListElement.new();

  // readonly textList: NSTextList;
  // readonly contents: NSAttributedString;
  // readonly markerAttributes: NSDictionary;
  // readonly attributedString: NSAttributedString;
  // readonly childElements: NSArray;
  // readonly parentElement: NSTextListElement;
}

export class HTMLNSPredicateEditorElement extends HTMLNSRuleEditorElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSPredicateEditor.new();

}

export class HTMLNSColorPanelElement extends HTMLNSPanelElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSColorPanel.new();

  // sharedColorPanel: NSColorPanel;
  // sharedColorPanelExists: boolean;
  // accessoryView: NSView;
  // isContinuous: boolean;
  // showsAlpha: boolean;
  // mode: interop.Enum<typeof NSColorPanelMode>;
  // color: NSColor;
  // readonly alpha: number;
}

export class HTMLNSPathControlElement extends HTMLNSControlElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSPathControl.new();
  get delegate(): NSPathControlDelegateImpl {
    return (this.nativeObject.delegate ??= NSPathControlDelegateImpl.new()) as NSPathControlDelegateImpl;
  }

  // isEditable: boolean;
  // placeholderAttributedString: NSAttributedString;
  // URL: NSURL;
  // doubleAction: string;
  // pathStyle: interop.Enum<typeof NSPathStyle>;
  // readonly clickedPathItem: NSPathControlItem;
  // backgroundColor: NSColor;
  // menu: NSMenu;

  set pathcontrolshoulddragitemwithpasteboard(value: (pathControl: NSPathControl, pathItem: NSPathControlItem, pasteboard: NSPasteboard) => boolean) {
    this.delegate.pathControlShouldDragItemWithPasteboard = value;
  }
  set pathcontrolshoulddragpathcomponentcellwithpasteboard(value: (pathControl: NSPathControl, pathComponentCell: NSPathComponentCell, pasteboard: NSPasteboard) => boolean) {
    this.delegate.pathControlShouldDragPathComponentCellWithPasteboard = value;
  }
  set pathcontrolvalidatedrop(value: (pathControl: NSPathControl, info: NSDraggingInfo) => interop.Enum<typeof NSDragOperation>) {
    this.delegate.pathControlValidateDrop = value;
  }
  set pathcontrolacceptdrop(value: (pathControl: NSPathControl, info: NSDraggingInfo) => boolean) {
    this.delegate.pathControlAcceptDrop = value;
  }
  set pathcontrolwilldisplayopenpanel(value: (pathControl: NSPathControl, openPanel: NSOpenPanel) => void) {
    this.delegate.pathControlWillDisplayOpenPanel = value;
  }
  set pathcontrolwillpopupmenu(value: (pathControl: NSPathControl, menu: NSMenu) => void) {
    this.delegate.pathControlWillPopUpMenu = value;
  }
}

export class HTMLNSAnimationElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSAnimation.new();
  get delegate(): NSAnimationDelegateImpl {
    return (this.nativeObject.delegate ??= NSAnimationDelegateImpl.new()) as NSAnimationDelegateImpl;
  }

  // readonly isAnimating: boolean;
  // currentProgress: number;
  // duration: number;
  // animationBlockingMode: interop.Enum<typeof NSAnimationBlockingMode>;
  // frameRate: number;
  // animationCurve: interop.Enum<typeof NSAnimationCurve>;
  // readonly currentValue: number;
  // readonly runLoopModesForAnimating: NSArray;

  set animationshouldstart(value: (animation: NSAnimation) => boolean) {
    this.delegate.animationShouldStart = value;
  }
  set animationdidstop(value: (animation: NSAnimation) => void) {
    this.delegate.animationDidStop = value;
  }
  set animationdidend(value: (animation: NSAnimation) => void) {
    this.delegate.animationDidEnd = value;
  }
  set animationvalueforprogress(value: (animation: NSAnimation, progress: number) => number) {
    this.delegate.animationValueForProgress = value;
  }
  set animationdidreachprogressmark(value: (animation: NSAnimation, progress: number) => void) {
    this.delegate.animationDidReachProgressMark = value;
  }
}

export class HTMLNSViewAnimationElement extends HTMLNSAnimationElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSViewAnimation.new();

}

export class HTMLNSScrollerElement extends HTMLNSControlElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSScroller.new();

  // isCompatibleWithOverlayScrollers: boolean;
  // preferredScrollerStyle: interop.Enum<typeof NSScrollerStyle>;
  // scrollerStyle: interop.Enum<typeof NSScrollerStyle>;
  // knobStyle: interop.Enum<typeof NSScrollerKnobStyle>;
  // readonly usableParts: interop.Enum<typeof NSUsableScrollerParts>;
  // controlSize: interop.Enum<typeof NSControlSize>;
  // readonly hitPart: interop.Enum<typeof NSScrollerPart>;
  // knobProportion: number;
  // arrowsPosition: interop.Enum<typeof NSScrollArrowPosition>;
  // controlTint: interop.Enum<typeof NSControlTint>;
}

export class HTMLNSComboButtonElement extends HTMLNSControlElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSComboButton.new();

  // image: NSImage;
  // imageScaling: interop.Enum<typeof NSImageScaling>;
  // menu: NSMenu;
  // style: interop.Enum<typeof NSComboButtonStyle>;
}

export class HTMLNSOutlineViewElement extends HTMLNSTableViewElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  // @ts-ignore
  readonly nativeObject = NSOutlineView.new();
  get delegate(): NSOutlineViewDelegateImpl {
    return (this.nativeObject.delegate ??= NSOutlineViewDelegateImpl.new()) as NSOutlineViewDelegateImpl;
  }

  // dataSource: NSOutlineViewDataSource;
  // outlineTableColumn: NSTableColumn;
  // indentationPerLevel: number;
  // indentationMarkerFollowsCell: boolean;
  // autoresizesOutlineColumn: boolean;
  // autosaveExpandedItems: boolean;
  // userInterfaceLayoutDirection: interop.Enum<typeof NSUserInterfaceLayoutDirection>;
  // stronglyReferencesItems: boolean;
  // accessibilityFrame: CGRect;
  // accessibilityParent: interop.Object;
  // isAccessibilityFocused: boolean;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;

  set outlineviewviewfortablecolumnitem(value: (outlineView: NSOutlineView, tableColumn: NSTableColumn | null, item: interop.Object) => NSView) {
    this.delegate.outlineViewViewForTableColumnItem = value;
  }
  set outlineviewrowviewforitem(value: (outlineView: NSOutlineView, item: interop.Object) => NSTableRowView) {
    this.delegate.outlineViewRowViewForItem = value;
  }
  set outlineviewdidaddrowviewforrow(value: (outlineView: NSOutlineView, rowView: NSTableRowView, row: number) => void) {
    this.delegate.outlineViewDidAddRowViewForRow = value;
  }
  set outlineviewdidremoverowviewforrow(value: (outlineView: NSOutlineView, rowView: NSTableRowView, row: number) => void) {
    this.delegate.outlineViewDidRemoveRowViewForRow = value;
  }
  set outlineviewwilldisplaycellfortablecolumnitem(value: (outlineView: NSOutlineView, cell: interop.Object, tableColumn: NSTableColumn | null, item: interop.Object) => void) {
    this.delegate.outlineViewWillDisplayCellForTableColumnItem = value;
  }
  set outlineviewshouldedittablecolumnitem(value: (outlineView: NSOutlineView, tableColumn: NSTableColumn | null, item: interop.Object) => boolean) {
    this.delegate.outlineViewShouldEditTableColumnItem = value;
  }
  set selectionshouldchangeinoutlineview(value: (outlineView: NSOutlineView) => boolean) {
    this.delegate.selectionShouldChangeInOutlineView = value;
  }
  set outlineviewshouldselectitem(value: (outlineView: NSOutlineView, item: interop.Object) => boolean) {
    this.delegate.outlineViewShouldSelectItem = value;
  }
  set outlineviewselectionindexesforproposedselection(value: (outlineView: NSOutlineView, proposedSelectionIndexes: NSIndexSet) => NSIndexSet) {
    this.delegate.outlineViewSelectionIndexesForProposedSelection = value;
  }
  set outlineviewshouldselecttablecolumn(value: (outlineView: NSOutlineView, tableColumn: NSTableColumn | null) => boolean) {
    this.delegate.outlineViewShouldSelectTableColumn = value;
  }
  set outlineviewmousedowninheaderoftablecolumn(value: (outlineView: NSOutlineView, tableColumn: NSTableColumn) => void) {
    this.delegate.outlineViewMouseDownInHeaderOfTableColumn = value;
  }
  set outlineviewdidclicktablecolumn(value: (outlineView: NSOutlineView, tableColumn: NSTableColumn) => void) {
    this.delegate.outlineViewDidClickTableColumn = value;
  }
  set outlineviewdiddragtablecolumn(value: (outlineView: NSOutlineView, tableColumn: NSTableColumn) => void) {
    this.delegate.outlineViewDidDragTableColumn = value;
  }
  set outlineviewtooltipforcellrecttablecolumnitemmouselocation(value: (outlineView: NSOutlineView, cell: NSCell, rect: interop.PointerConvertible, tableColumn: NSTableColumn | null, item: interop.Object, mouseLocation: CGPoint) => NSString) {
    this.delegate.outlineViewToolTipForCellRectTableColumnItemMouseLocation = value;
  }
  set outlineviewheightofrowbyitem(value: (outlineView: NSOutlineView, item: interop.Object) => number) {
    this.delegate.outlineViewHeightOfRowByItem = value;
  }
  set outlineviewtintconfigurationforitem(value: (outlineView: NSOutlineView, item: interop.Object) => NSTintConfiguration) {
    this.delegate.outlineViewTintConfigurationForItem = value;
  }
  set outlineviewtypeselectstringfortablecolumnitem(value: (outlineView: NSOutlineView, tableColumn: NSTableColumn | null, item: interop.Object) => NSString) {
    this.delegate.outlineViewTypeSelectStringForTableColumnItem = value;
  }
  set outlineviewnexttypeselectmatchfromitemtoitemforstring(value: (outlineView: NSOutlineView, startItem: interop.Object, endItem: interop.Object, searchString: NSString | string) => interop.Object) {
    this.delegate.outlineViewNextTypeSelectMatchFromItemToItemForString = value;
  }
  set outlineviewshouldtypeselectforeventwithcurrentsearchstring(value: (outlineView: NSOutlineView, event: NSEvent, searchString: NSString | string | null) => boolean) {
    this.delegate.outlineViewShouldTypeSelectForEventWithCurrentSearchString = value;
  }
  set outlineviewshouldshowcellexpansionfortablecolumnitem(value: (outlineView: NSOutlineView, tableColumn: NSTableColumn | null, item: interop.Object) => boolean) {
    this.delegate.outlineViewShouldShowCellExpansionForTableColumnItem = value;
  }
  set outlineviewshouldtrackcellfortablecolumnitem(value: (outlineView: NSOutlineView, cell: NSCell, tableColumn: NSTableColumn | null, item: interop.Object) => boolean) {
    this.delegate.outlineViewShouldTrackCellForTableColumnItem = value;
  }
  set outlineviewdatacellfortablecolumnitem(value: (outlineView: NSOutlineView, tableColumn: NSTableColumn | null, item: interop.Object) => NSCell) {
    this.delegate.outlineViewDataCellForTableColumnItem = value;
  }
  set outlineviewisgroupitem(value: (outlineView: NSOutlineView, item: interop.Object) => boolean) {
    this.delegate.outlineViewIsGroupItem = value;
  }
  set outlineviewshouldexpanditem(value: (outlineView: NSOutlineView, item: interop.Object) => boolean) {
    this.delegate.outlineViewShouldExpandItem = value;
  }
  set outlineviewshouldcollapseitem(value: (outlineView: NSOutlineView, item: interop.Object) => boolean) {
    this.delegate.outlineViewShouldCollapseItem = value;
  }
  set outlineviewwilldisplayoutlinecellfortablecolumnitem(value: (outlineView: NSOutlineView, cell: interop.Object, tableColumn: NSTableColumn | null, item: interop.Object) => void) {
    this.delegate.outlineViewWillDisplayOutlineCellForTableColumnItem = value;
  }
  set outlineviewsizetofitwidthofcolumn(value: (outlineView: NSOutlineView, column: number) => number) {
    this.delegate.outlineViewSizeToFitWidthOfColumn = value;
  }
  set outlineviewshouldreordercolumntocolumn(value: (outlineView: NSOutlineView, columnIndex: number, newColumnIndex: number) => boolean) {
    this.delegate.outlineViewShouldReorderColumnToColumn = value;
  }
  set outlineviewshouldshowoutlinecellforitem(value: (outlineView: NSOutlineView, item: interop.Object) => boolean) {
    this.delegate.outlineViewShouldShowOutlineCellForItem = value;
  }
  set outlineviewusercanchangevisibilityoftablecolumn(value: (outlineView: NSOutlineView, column: NSTableColumn) => boolean) {
    this.delegate.outlineViewUserCanChangeVisibilityOfTableColumn = value;
  }
  set outlineviewuserdidchangevisibilityoftablecolumns(value: (outlineView: NSOutlineView, columns: NSArray | unknown[]) => void) {
    this.delegate.outlineViewUserDidChangeVisibilityOfTableColumns = value;
  }
  set outlineviewselectiondidchange(value: (notification: NSNotification) => void) {
    this.delegate.outlineViewSelectionDidChange = value;
  }
  set outlineviewcolumndidmove(value: (notification: NSNotification) => void) {
    this.delegate.outlineViewColumnDidMove = value;
  }
  set outlineviewcolumndidresize(value: (notification: NSNotification) => void) {
    this.delegate.outlineViewColumnDidResize = value;
  }
  set outlineviewselectionischanging(value: (notification: NSNotification) => void) {
    this.delegate.outlineViewSelectionIsChanging = value;
  }
  set outlineviewitemwillexpand(value: (notification: NSNotification) => void) {
    this.delegate.outlineViewItemWillExpand = value;
  }
  set outlineviewitemdidexpand(value: (notification: NSNotification) => void) {
    this.delegate.outlineViewItemDidExpand = value;
  }
  set outlineviewitemwillcollapse(value: (notification: NSNotification) => void) {
    this.delegate.outlineViewItemWillCollapse = value;
  }
  set outlineviewitemdidcollapse(value: (notification: NSNotification) => void) {
    this.delegate.outlineViewItemDidCollapse = value;
  }
}

export class HTMLNSDraggingImageComponentElement extends HTMLNSObjectElement {
  static readonly attributes = { ...super.attributes, ...this.getAttributesRecord() };
  readonly nativeObject = NSDraggingImageComponent.new();

  // contents: interop.Object;
  // frame: CGRect;
}

// Delegates

export class NSScrubberDelegateImpl extends NSObject implements NSScrubberDelegate {
  static ObjCProtocols = [NSScrubberDelegate];

  scrubberDidSelectItemAtIndex?(scrubber: NSScrubber, selectedIndex: number): void;
  scrubberDidHighlightItemAtIndex?(scrubber: NSScrubber, highlightedIndex: number): void;
  scrubberDidChangeVisibleRange?(scrubber: NSScrubber, visibleRange: _NSRange): void;
  didBeginInteractingWithScrubber?(scrubber: NSScrubber): void;
  didFinishInteractingWithScrubber?(scrubber: NSScrubber): void;
  didCancelInteractingWithScrubber?(scrubber: NSScrubber): void;
}

export class NSTableViewDelegateImpl extends NSObject implements NSTableViewDelegate {
  static ObjCProtocols = [NSTableViewDelegate];

  tableViewViewForTableColumnRow?(tableView: NSTableView, tableColumn: NSTableColumn | null, row: number): NSView;
  tableViewRowViewForRow?(tableView: NSTableView, row: number): NSTableRowView;
  tableViewDidAddRowViewForRow?(tableView: NSTableView, rowView: NSTableRowView, row: number): void;
  tableViewDidRemoveRowViewForRow?(tableView: NSTableView, rowView: NSTableRowView, row: number): void;
  tableViewWillDisplayCellForTableColumnRow?(tableView: NSTableView, cell: interop.Object, tableColumn: NSTableColumn | null, row: number): void;
  tableViewShouldEditTableColumnRow?(tableView: NSTableView, tableColumn: NSTableColumn | null, row: number): boolean;
  tableViewToolTipForCellRectTableColumnRowMouseLocation?(tableView: NSTableView, cell: NSCell, rect: interop.PointerConvertible, tableColumn: NSTableColumn | null, row: number, mouseLocation: CGPoint): NSString;
  tableViewShouldShowCellExpansionForTableColumnRow?(tableView: NSTableView, tableColumn: NSTableColumn | null, row: number): boolean;
  tableViewShouldTrackCellForTableColumnRow?(tableView: NSTableView, cell: NSCell, tableColumn: NSTableColumn | null, row: number): boolean;
  tableViewDataCellForTableColumnRow?(tableView: NSTableView, tableColumn: NSTableColumn | null, row: number): NSCell;
  selectionShouldChangeInTableView?(tableView: NSTableView): boolean;
  tableViewShouldSelectRow?(tableView: NSTableView, row: number): boolean;
  tableViewSelectionIndexesForProposedSelection?(tableView: NSTableView, proposedSelectionIndexes: NSIndexSet): NSIndexSet;
  tableViewShouldSelectTableColumn?(tableView: NSTableView, tableColumn: NSTableColumn | null): boolean;
  tableViewMouseDownInHeaderOfTableColumn?(tableView: NSTableView, tableColumn: NSTableColumn): void;
  tableViewDidClickTableColumn?(tableView: NSTableView, tableColumn: NSTableColumn): void;
  tableViewDidDragTableColumn?(tableView: NSTableView, tableColumn: NSTableColumn): void;
  tableViewHeightOfRow?(tableView: NSTableView, row: number): number;
  tableViewTypeSelectStringForTableColumnRow?(tableView: NSTableView, tableColumn: NSTableColumn | null, row: number): NSString;
  tableViewNextTypeSelectMatchFromRowToRowForString?(tableView: NSTableView, startRow: number, endRow: number, searchString: NSString | string): number;
  tableViewShouldTypeSelectForEventWithCurrentSearchString?(tableView: NSTableView, event: NSEvent, searchString: NSString | string | null): boolean;
  tableViewIsGroupRow?(tableView: NSTableView, row: number): boolean;
  tableViewSizeToFitWidthOfColumn?(tableView: NSTableView, column: number): number;
  tableViewShouldReorderColumnToColumn?(tableView: NSTableView, columnIndex: number, newColumnIndex: number): boolean;
  tableViewRowActionsForRowEdge?(tableView: NSTableView, row: number, edge: interop.Enum<typeof NSTableRowActionEdge>): NSArray;
  tableViewUserCanChangeVisibilityOfTableColumn?(tableView: NSTableView, column: NSTableColumn): boolean;
  tableViewUserDidChangeVisibilityOfTableColumns?(tableView: NSTableView, columns: NSArray | unknown[]): void;
  tableViewSelectionDidChange?(notification: NSNotification): void;
  tableViewColumnDidMove?(notification: NSNotification): void;
  tableViewColumnDidResize?(notification: NSNotification): void;
  tableViewSelectionIsChanging?(notification: NSNotification): void;
}

export class NSSharingServicePickerTouchBarItemDelegateImpl extends NSObject implements NSSharingServicePickerTouchBarItemDelegate {
  static ObjCProtocols = [NSSharingServicePickerTouchBarItemDelegate];

  itemsForSharingServicePickerTouchBarItem(pickerTouchBarItem: NSSharingServicePickerTouchBarItem): NSArray {
    throw new Error("Please provide implementation for: NSSharingServicePickerTouchBarItemDelegate > itemsForSharingServicePickerTouchBarItem");
  }
}

export class NSDrawerDelegateImpl extends NSObject implements NSDrawerDelegate {
  static ObjCProtocols = [NSDrawerDelegate];

  drawerShouldOpen?(sender: NSDrawer): boolean;
  drawerShouldClose?(sender: NSDrawer): boolean;
  drawerWillResizeContentsToSize?(sender: NSDrawer, contentSize: CGSize): CGSize;
  drawerWillOpen?(notification: NSNotification): void;
  drawerDidOpen?(notification: NSNotification): void;
  drawerWillClose?(notification: NSNotification): void;
  drawerDidClose?(notification: NSNotification): void;
}

export class NSImageDelegateImpl extends NSObject implements NSImageDelegate {
  static ObjCProtocols = [NSImageDelegate];

  imageDidNotDrawInRect?(sender: NSImage, rect: CGRect): NSImage;
  imageWillLoadRepresentation?(image: NSImage, rep: NSImageRep): void;
  imageDidLoadRepresentationHeader?(image: NSImage, rep: NSImageRep): void;
  imageDidLoadPartOfRepresentationWithValidRows?(image: NSImage, rep: NSImageRep, rows: number): void;
  imageDidLoadRepresentationWithStatus?(image: NSImage, rep: NSImageRep, status: interop.Enum<typeof NSImageLoadStatus>): void;
}

export class NSMenuDelegateImpl extends NSObject implements NSMenuDelegate {
  static ObjCProtocols = [NSMenuDelegate];

  menuNeedsUpdate?(menu: NSMenu): void;
  numberOfItemsInMenu?(menu: NSMenu): number;
  menuUpdateItemAtIndexShouldCancel?(menu: NSMenu, item: NSMenuItem, index: number, shouldCancel: boolean): boolean;
  menuHasKeyEquivalentForEventTargetAction?(menu: NSMenu, event: NSEvent, target: interop.PointerConvertible, action: interop.PointerConvertible): boolean;
  menuWillOpen?(menu: NSMenu): void;
  menuDidClose?(menu: NSMenu): void;
  menuWillHighlightItem?(menu: NSMenu, item: NSMenuItem | null): void;
  confinementRectForMenuOnScreen?(menu: NSMenu, screen: NSScreen | null): CGRect;
}

export class NSStackViewDelegateImpl extends NSObject implements NSStackViewDelegate {
  static ObjCProtocols = [NSStackViewDelegate];

  stackViewWillDetachViews?(stackView: NSStackView, views: NSArray | unknown[]): void;
  stackViewDidReattachViews?(stackView: NSStackView, views: NSArray | unknown[]): void;
}

export class NSViewLayerContentScaleDelegateImpl extends NSObject implements NSViewLayerContentScaleDelegate {
  static ObjCProtocols = [NSViewLayerContentScaleDelegate];
}

export class NSTextContentStorageDelegateImpl extends NSObject implements NSTextContentStorageDelegate {
  static ObjCProtocols = [NSTextContentStorageDelegate];

  textContentStorageTextParagraphWithRange?(textContentStorage: NSTextContentStorage, range: _NSRange): NSTextParagraph;
}

export class NSTextViewportLayoutControllerDelegateImpl extends NSObject implements NSTextViewportLayoutControllerDelegate {
  static ObjCProtocols = [NSTextViewportLayoutControllerDelegate];

  viewportBoundsForTextViewportLayoutController(textViewportLayoutController: NSTextViewportLayoutController): CGRect {
    throw new Error("Please provide implementation for: NSTextViewportLayoutControllerDelegate > viewportBoundsForTextViewportLayoutController");
  }
  textViewportLayoutControllerConfigureRenderingSurfaceForTextLayoutFragment(textViewportLayoutController: NSTextViewportLayoutController, textLayoutFragment: NSTextLayoutFragment): void {
    throw new Error("Please provide implementation for: NSTextViewportLayoutControllerDelegate > textViewportLayoutControllerConfigureRenderingSurfaceForTextLayoutFragment");
  }
  textViewportLayoutControllerWillLayout?(textViewportLayoutController: NSTextViewportLayoutController): void;
  textViewportLayoutControllerDidLayout?(textViewportLayoutController: NSTextViewportLayoutController): void;
}

export class NSRuleEditorDelegateImpl extends NSObject implements NSRuleEditorDelegate {
  static ObjCProtocols = [NSRuleEditorDelegate];

  ruleEditorNumberOfChildrenForCriterionWithRowType(editor: NSRuleEditor, criterion: interop.Object | null, rowType: interop.Enum<typeof NSRuleEditorRowType>): number {
    throw new Error("Please provide implementation for: NSRuleEditorDelegate > ruleEditorNumberOfChildrenForCriterionWithRowType");
  }
  ruleEditorChildForCriterionWithRowType(editor: NSRuleEditor, index: number, criterion: interop.Object | null, rowType: interop.Enum<typeof NSRuleEditorRowType>): interop.Object {
    throw new Error("Please provide implementation for: NSRuleEditorDelegate > ruleEditorChildForCriterionWithRowType");
  }
  ruleEditorDisplayValueForCriterionInRow(editor: NSRuleEditor, criterion: interop.Object, row: number): interop.Object {
    throw new Error("Please provide implementation for: NSRuleEditorDelegate > ruleEditorDisplayValueForCriterionInRow");
  }
  ruleEditorPredicatePartsForCriterionWithDisplayValueInRow?(editor: NSRuleEditor, criterion: interop.Object, value: interop.Object, row: number): NSDictionary;
  ruleEditorRowsDidChange?(notification: NSNotification): void;
}

export class NSPageControllerDelegateImpl extends NSObject implements NSPageControllerDelegate {
  static ObjCProtocols = [NSPageControllerDelegate];

  pageControllerIdentifierForObject?(pageController: NSPageController, object: interop.Object): NSString;
  pageControllerViewControllerForIdentifier?(pageController: NSPageController, identifier: NSString | string): NSViewController;
  pageControllerFrameForObject?(pageController: NSPageController, object: interop.Object | null): CGRect;
  pageControllerPrepareViewControllerWithObject?(pageController: NSPageController, viewController: NSViewController, object: interop.Object | null): void;
  pageControllerDidTransitionToObject?(pageController: NSPageController, object: interop.Object): void;
  pageControllerWillStartLiveTransition?(pageController: NSPageController): void;
  pageControllerDidEndLiveTransition?(pageController: NSPageController): void;
}

export class NSDatePickerCellDelegateImpl extends NSObject implements NSDatePickerCellDelegate {
  static ObjCProtocols = [NSDatePickerCellDelegate];

  datePickerCellValidateProposedDateValueTimeInterval?(datePickerCell: NSDatePickerCell, proposedDateValue: interop.PointerConvertible, proposedTimeInterval: interop.PointerConvertible): void;
}

export class NSSoundDelegateImpl extends NSObject implements NSSoundDelegate {
  static ObjCProtocols = [NSSoundDelegate];

  soundDidFinishPlaying?(sound: NSSound, flag: boolean): void;
}

export class NSTabViewDelegateImpl extends NSObject implements NSTabViewDelegate {
  static ObjCProtocols = [NSTabViewDelegate];

  tabViewShouldSelectTabViewItem?(tabView: NSTabView, tabViewItem: NSTabViewItem | null): boolean;
  tabViewWillSelectTabViewItem?(tabView: NSTabView, tabViewItem: NSTabViewItem | null): void;
  tabViewDidSelectTabViewItem?(tabView: NSTabView, tabViewItem: NSTabViewItem | null): void;
  tabViewDidChangeNumberOfTabViewItems?(tabView: NSTabView): void;
}

export class NSTextViewDelegateImpl extends NSObject implements NSTextViewDelegate {
  static ObjCProtocols = [NSTextViewDelegate];

  textViewClickedOnLinkAtIndex?(textView: NSTextView, link: interop.Object, charIndex: number): boolean;
  textViewClickedOnCellInRectAtIndex?(textView: NSTextView, cell: NSTextAttachmentCell, cellFrame: CGRect, charIndex: number): void;
  textViewDoubleClickedOnCellInRectAtIndex?(textView: NSTextView, cell: NSTextAttachmentCell, cellFrame: CGRect, charIndex: number): void;
  textViewDraggedCellInRectEventAtIndex?(view: NSTextView, cell: NSTextAttachmentCell, rect: CGRect, event: NSEvent, charIndex: number): void;
  textViewWritablePasteboardTypesForCellAtIndex?(view: NSTextView, cell: NSTextAttachmentCell, charIndex: number): NSArray;
  textViewWriteCellAtIndexToPasteboardType?(view: NSTextView, cell: NSTextAttachmentCell, charIndex: number, pboard: NSPasteboard, type: NSString | string): boolean;
  textViewWillChangeSelectionFromCharacterRangeToCharacterRange?(textView: NSTextView, oldSelectedCharRange: _NSRange, newSelectedCharRange: _NSRange): _NSRange;
  textViewWillChangeSelectionFromCharacterRangesToCharacterRanges?(textView: NSTextView, oldSelectedCharRanges: NSArray | unknown[], newSelectedCharRanges: NSArray | unknown[]): NSArray;
  textViewShouldChangeTextInRangesReplacementStrings?(textView: NSTextView, affectedRanges: NSArray | unknown[], replacementStrings: NSArray | unknown[] | null): boolean;
  textViewShouldChangeTypingAttributesToAttributes?(textView: NSTextView, oldTypingAttributes: NSDictionary | Record<string, unknown>, newTypingAttributes: NSDictionary | Record<string, unknown>): NSDictionary;
  textViewDidChangeSelection?(notification: NSNotification): void;
  textViewDidChangeTypingAttributes?(notification: NSNotification): void;
  textViewWillDisplayToolTipForCharacterAtIndex?(textView: NSTextView, tooltip: NSString | string, characterIndex: number): NSString;
  textViewCompletionsForPartialWordRangeIndexOfSelectedItem?(textView: NSTextView, words: NSArray | unknown[], charRange: _NSRange, index: interop.PointerConvertible): NSArray;
  textViewShouldChangeTextInRangeReplacementString?(textView: NSTextView, affectedCharRange: _NSRange, replacementString: NSString | string | null): boolean;
  textViewDoCommandBySelector?(textView: NSTextView, commandSelector: string): boolean;
  textViewShouldSetSpellingStateRange?(textView: NSTextView, value: number, affectedCharRange: _NSRange): number;
  textViewMenuForEventAtIndex?(view: NSTextView, menu: NSMenu, event: NSEvent, charIndex: number): NSMenu;
  textViewWillCheckTextInRangeOptionsTypes?(view: NSTextView, range: _NSRange, options: NSDictionary | Record<string, unknown>, checkingTypes: interop.PointerConvertible): NSDictionary;
  textViewDidCheckTextInRangeTypesOptionsResultsOrthographyWordCount?(view: NSTextView, range: _NSRange, checkingTypes: number, options: NSDictionary | Record<string, unknown>, results: NSArray | unknown[], orthography: NSOrthography, wordCount: number): NSArray;
  textViewURLForContentsOfTextAttachmentAtIndex?(textView: NSTextView, textAttachment: NSTextAttachment, charIndex: number): NSURL;
  textViewWillShowSharingServicePickerForItems?(textView: NSTextView, servicePicker: NSSharingServicePicker, items: NSArray | unknown[]): NSSharingServicePicker;
  undoManagerForTextView?(view: NSTextView): NSUndoManager;
  textViewShouldUpdateTouchBarItemIdentifiers?(textView: NSTextView, identifiers: NSArray | unknown[]): NSArray;
  textViewCandidatesForSelectedRange?(textView: NSTextView, selectedRange: _NSRange): NSArray;
  textViewShouldSelectCandidateAtIndex?(textView: NSTextView, index: number): boolean;
  textViewClickedOnLink?(textView: NSTextView, link: interop.Object): boolean;
  textViewClickedOnCellInRect?(textView: NSTextView, cell: NSTextAttachmentCell, cellFrame: CGRect): void;
  textViewDoubleClickedOnCellInRect?(textView: NSTextView, cell: NSTextAttachmentCell, cellFrame: CGRect): void;
  textViewDraggedCellInRectEvent?(view: NSTextView, cell: NSTextAttachmentCell, rect: CGRect, event: NSEvent): void;
}

export class NSSharingServiceDelegateImpl extends NSObject implements NSSharingServiceDelegate {
  static ObjCProtocols = [NSSharingServiceDelegate];

  sharingServiceWillShareItems?(sharingService: NSSharingService, items: NSArray | unknown[]): void;
  sharingServiceDidFailToShareItemsError?(sharingService: NSSharingService, items: NSArray | unknown[], error: NSError): void;
  sharingServiceDidShareItems?(sharingService: NSSharingService, items: NSArray | unknown[]): void;
  sharingServiceSourceFrameOnScreenForShareItem?(sharingService: NSSharingService, item: interop.Object): CGRect;
  sharingServiceTransitionImageForShareItemContentRect?(sharingService: NSSharingService, item: interop.Object, contentRect: interop.PointerConvertible): NSImage;
  sharingServiceSourceWindowForShareItemsSharingContentScope?(sharingService: NSSharingService, items: NSArray | unknown[], sharingContentScope: interop.PointerConvertible): NSWindow;
  anchoringViewForSharingServiceShowRelativeToRectPreferredEdge?(sharingService: NSSharingService, positioningRect: interop.PointerConvertible, preferredEdge: interop.PointerConvertible): NSView;
}

export class NSTextStorageDelegateImpl extends NSObject implements NSTextStorageDelegate {
  static ObjCProtocols = [NSTextStorageDelegate];

  textStorageWillProcessEditingRangeChangeInLength?(textStorage: NSTextStorage, editedMask: interop.Enum<typeof NSTextStorageEditActions>, editedRange: _NSRange, delta: number): void;
  textStorageDidProcessEditingRangeChangeInLength?(textStorage: NSTextStorage, editedMask: interop.Enum<typeof NSTextStorageEditActions>, editedRange: _NSRange, delta: number): void;
}

export class NSControlTextEditingDelegateImpl extends NSObject implements NSControlTextEditingDelegate {
  static ObjCProtocols = [NSControlTextEditingDelegate];

  controlTextShouldBeginEditing?(control: NSControl, fieldEditor: NSText): boolean;
  controlTextShouldEndEditing?(control: NSControl, fieldEditor: NSText): boolean;
  controlDidFailToFormatStringErrorDescription?(control: NSControl, string: NSString | string, error: NSString | string | null): boolean;
  controlDidFailToValidatePartialStringErrorDescription?(control: NSControl, string: NSString | string, error: NSString | string | null): void;
  controlIsValidObject?(control: NSControl, obj: interop.Object | null): boolean;
  controlTextViewDoCommandBySelector?(control: NSControl, textView: NSTextView, commandSelector: string): boolean;
  controlTextViewCompletionsForPartialWordRangeIndexOfSelectedItem?(control: NSControl, textView: NSTextView, words: NSArray | unknown[], charRange: _NSRange, index: interop.PointerConvertible): NSArray;
}

export class NSTextFieldDelegateImpl extends NSObject implements NSTextFieldDelegate {
  static ObjCProtocols = [NSTextFieldDelegate];

  textFieldTextViewCandidatesForSelectedRange?(textField: NSTextField, textView: NSTextView, selectedRange: _NSRange): NSArray;
  textFieldTextViewShouldSelectCandidateAtIndex?(textField: NSTextField, textView: NSTextView, index: number): boolean;
}

export class NSOpenSavePanelDelegateImpl extends NSObject implements NSOpenSavePanelDelegate {
  static ObjCProtocols = [NSOpenSavePanelDelegate];

  panelShouldEnableURL?(sender: interop.Object, url: NSURL): boolean;
  panelValidateURLError?(sender: interop.Object, url: NSURL, outError: interop.PointerConvertible): boolean;
  panelDidChangeToDirectoryURL?(sender: interop.Object, url: NSURL | null): void;
  panelUserEnteredFilenameConfirmed?(sender: interop.Object, filename: NSString | string, okFlag: boolean): NSString;
  panelWillExpand?(sender: interop.Object, expanding: boolean): void;
  panelSelectionDidChange?(sender: interop.Object | null): void;
}

export class NSSpeechRecognizerDelegateImpl extends NSObject implements NSSpeechRecognizerDelegate {
  static ObjCProtocols = [NSSpeechRecognizerDelegate];

  speechRecognizerDidRecognizeCommand?(sender: NSSpeechRecognizer, command: NSString | string): void;
}

export class NSCloudSharingServiceDelegateImpl extends NSObject implements NSCloudSharingServiceDelegate {
  static ObjCProtocols = [NSCloudSharingServiceDelegate];

  sharingServiceDidCompleteForItemsError?(sharingService: NSSharingService, items: NSArray | unknown[], error: NSError | null): void;
  optionsForSharingServiceShareProvider?(cloudKitSharingService: NSSharingService, provider: NSItemProvider): interop.Enum<typeof NSCloudKitSharingServiceOptions>;
  sharingServiceDidSaveShare?(sharingService: NSSharingService, share: CKShare): void;
  sharingServiceDidStopSharing?(sharingService: NSSharingService, share: CKShare): void;
}

export class NSScrubberFlowLayoutDelegateImpl extends NSObject implements NSScrubberFlowLayoutDelegate {
  static ObjCProtocols = [NSScrubberFlowLayoutDelegate];

  scrubberLayoutSizeForItemAtIndex?(scrubber: NSScrubber, layout: NSScrubberFlowLayout, itemIndex: number): CGSize;
}

export class NSSpeechSynthesizerDelegateImpl extends NSObject implements NSSpeechSynthesizerDelegate {
  static ObjCProtocols = [NSSpeechSynthesizerDelegate];

  speechSynthesizerDidFinishSpeaking?(sender: NSSpeechSynthesizer, finishedSpeaking: boolean): void;
  speechSynthesizerWillSpeakWordOfString?(sender: NSSpeechSynthesizer, characterRange: _NSRange, string: NSString | string): void;
  speechSynthesizerWillSpeakPhoneme?(sender: NSSpeechSynthesizer, phonemeOpcode: number): void;
  speechSynthesizerDidEncounterErrorAtIndexOfStringMessage?(sender: NSSpeechSynthesizer, characterIndex: number, string: NSString | string, message: NSString | string): void;
  speechSynthesizerDidEncounterSyncMessage?(sender: NSSpeechSynthesizer, message: NSString | string): void;
}

export class NSCandidateListTouchBarItemDelegateImpl extends NSObject implements NSCandidateListTouchBarItemDelegate {
  static ObjCProtocols = [NSCandidateListTouchBarItemDelegate];

  candidateListTouchBarItemBeginSelectingCandidateAtIndex?(anItem: NSCandidateListTouchBarItem, index: number): void;
  candidateListTouchBarItemChangeSelectionFromCandidateAtIndexToIndex?(anItem: NSCandidateListTouchBarItem, previousIndex: number, index: number): void;
  candidateListTouchBarItemEndSelectingCandidateAtIndex?(anItem: NSCandidateListTouchBarItem, index: number): void;
  candidateListTouchBarItemChangedCandidateListVisibility?(anItem: NSCandidateListTouchBarItem, isVisible: boolean): void;
}

export class NSBrowserDelegateImpl extends NSObject implements NSBrowserDelegate {
  static ObjCProtocols = [NSBrowserDelegate];

  browserNumberOfRowsInColumn?(sender: NSBrowser, column: number): number;
  browserCreateRowsForColumnInMatrix?(sender: NSBrowser, column: number, matrix: NSMatrix): void;
  browserNumberOfChildrenOfItem?(browser: NSBrowser, item: interop.Object | null): number;
  browserChildOfItem?(browser: NSBrowser, index: number, item: interop.Object | null): interop.Object;
  browserIsLeafItem?(browser: NSBrowser, item: interop.Object | null): boolean;
  browserObjectValueForItem?(browser: NSBrowser, item: interop.Object | null): interop.Object;
  browserHeightOfRowInColumn?(browser: NSBrowser, row: number, columnIndex: number): number;
  rootItemForBrowser?(browser: NSBrowser): interop.Object;
  browserSetObjectValueForItem?(browser: NSBrowser, object: interop.Object | null, item: interop.Object | null): void;
  browserShouldEditItem?(browser: NSBrowser, item: interop.Object | null): boolean;
  browserWillDisplayCellAtRowColumn?(sender: NSBrowser, cell: interop.Object, row: number, column: number): void;
  browserTitleOfColumn?(sender: NSBrowser, column: number): NSString;
  browserSelectCellWithStringInColumn?(sender: NSBrowser, title: NSString | string, column: number): boolean;
  browserSelectRowInColumn?(sender: NSBrowser, row: number, column: number): boolean;
  browserIsColumnValid?(sender: NSBrowser, column: number): boolean;
  browserWillScroll?(sender: NSBrowser): void;
  browserDidScroll?(sender: NSBrowser): void;
  browserShouldSizeColumnForUserResizeToWidth?(browser: NSBrowser, columnIndex: number, forUserResize: boolean, suggestedWidth: number): number;
  browserSizeToFitWidthOfColumn?(browser: NSBrowser, columnIndex: number): number;
  browserColumnConfigurationDidChange?(notification: NSNotification): void;
  browserShouldShowCellExpansionForRowColumn?(browser: NSBrowser, row: number, column: number): boolean;
  browserWriteRowsWithIndexesInColumnToPasteboard?(browser: NSBrowser, rowIndexes: NSIndexSet, column: number, pasteboard: NSPasteboard): boolean;
  browserNamesOfPromisedFilesDroppedAtDestinationForDraggedRowsWithIndexesInColumn?(browser: NSBrowser, dropDestination: NSURL, rowIndexes: NSIndexSet, column: number): NSArray;
  browserCanDragRowsWithIndexesInColumnWithEvent?(browser: NSBrowser, rowIndexes: NSIndexSet, column: number, event: NSEvent): boolean;
  browserDraggingImageForRowsWithIndexesInColumnWithEventOffset?(browser: NSBrowser, rowIndexes: NSIndexSet, column: number, event: NSEvent, dragImageOffset: interop.PointerConvertible): NSImage;
  browserValidateDropProposedRowColumnDropOperation?(browser: NSBrowser, info: NSDraggingInfo, row: interop.PointerConvertible, column: interop.PointerConvertible, dropOperation: interop.PointerConvertible): interop.Enum<typeof NSDragOperation>;
  browserAcceptDropAtRowColumnDropOperation?(browser: NSBrowser, info: NSDraggingInfo, row: number, column: number, dropOperation: interop.Enum<typeof NSBrowserDropOperation>): boolean;
  browserTypeSelectStringForRowInColumn?(browser: NSBrowser, row: number, column: number): NSString;
  browserShouldTypeSelectForEventWithCurrentSearchString?(browser: NSBrowser, event: NSEvent, searchString: NSString | string | null): boolean;
  browserNextTypeSelectMatchFromRowToRowInColumnForString?(browser: NSBrowser, startRow: number, endRow: number, column: number, searchString: NSString | string | null): number;
  browserPreviewViewControllerForLeafItem?(browser: NSBrowser, item: interop.Object): NSViewController;
  browserHeaderViewControllerForItem?(browser: NSBrowser, item: interop.Object | null): NSViewController;
  browserDidChangeLastColumnToColumn?(browser: NSBrowser, oldLastColumn: number, column: number): void;
  browserSelectionIndexesForProposedSelectionInColumn?(browser: NSBrowser, proposedSelectionIndexes: NSIndexSet, column: number): NSIndexSet;
}

export class NSWindowDelegateImpl extends NSObject implements NSWindowDelegate {
  static ObjCProtocols = [NSWindowDelegate];

  windowShouldClose?(sender: NSWindow): boolean;
  windowWillReturnFieldEditorToObject?(sender: NSWindow, client: interop.Object | null): interop.Object;
  windowWillResizeToSize?(sender: NSWindow, frameSize: CGSize): CGSize;
  windowWillUseStandardFrameDefaultFrame?(window: NSWindow, newFrame: CGRect): CGRect;
  windowShouldZoomToFrame?(window: NSWindow, newFrame: CGRect): boolean;
  windowWillReturnUndoManager?(window: NSWindow): NSUndoManager;
  windowWillPositionSheetUsingRect?(window: NSWindow, sheet: NSWindow, rect: CGRect): CGRect;
  windowShouldPopUpDocumentPathMenu?(window: NSWindow, menu: NSMenu): boolean;
  windowShouldDragDocumentWithEventFromWithPasteboard?(window: NSWindow, event: NSEvent, dragImageLocation: CGPoint, pasteboard: NSPasteboard): boolean;
  windowWillUseFullScreenContentSize?(window: NSWindow, proposedSize: CGSize): CGSize;
  windowWillUseFullScreenPresentationOptions?(window: NSWindow, proposedOptions: interop.Enum<typeof NSApplicationPresentationOptions>): interop.Enum<typeof NSApplicationPresentationOptions>;
  customWindowsToEnterFullScreenForWindow?(window: NSWindow): NSArray;
  windowStartCustomAnimationToEnterFullScreenWithDuration?(window: NSWindow, duration: number): void;
  windowDidFailToEnterFullScreen?(window: NSWindow): void;
  customWindowsToExitFullScreenForWindow?(window: NSWindow): NSArray;
  windowStartCustomAnimationToExitFullScreenWithDuration?(window: NSWindow, duration: number): void;
  customWindowsToEnterFullScreenForWindowOnScreen?(window: NSWindow, screen: NSScreen): NSArray;
  windowStartCustomAnimationToEnterFullScreenOnScreenWithDuration?(window: NSWindow, screen: NSScreen, duration: number): void;
  windowDidFailToExitFullScreen?(window: NSWindow): void;
  windowWillResizeForVersionBrowserWithMaxPreferredSizeMaxAllowedSize?(window: NSWindow, maxPreferredFrameSize: CGSize, maxAllowedFrameSize: CGSize): CGSize;
  windowWillEncodeRestorableState?(window: NSWindow, state: NSCoder): void;
  windowDidDecodeRestorableState?(window: NSWindow, state: NSCoder): void;
  previewRepresentableActivityItemsForWindow?(window: NSWindow): NSArray | null;
  windowDidResize?(notification: NSNotification): void;
  windowDidExpose?(notification: NSNotification): void;
  windowWillMove?(notification: NSNotification): void;
  windowDidMove?(notification: NSNotification): void;
  windowDidBecomeKey?(notification: NSNotification): void;
  windowDidResignKey?(notification: NSNotification): void;
  windowDidBecomeMain?(notification: NSNotification): void;
  windowDidResignMain?(notification: NSNotification): void;
  windowWillClose?(notification: NSNotification): void;
  windowWillMiniaturize?(notification: NSNotification): void;
  windowDidMiniaturize?(notification: NSNotification): void;
  windowDidDeminiaturize?(notification: NSNotification): void;
  windowDidUpdate?(notification: NSNotification): void;
  windowDidChangeScreen?(notification: NSNotification): void;
  windowDidChangeScreenProfile?(notification: NSNotification): void;
  windowDidChangeBackingProperties?(notification: NSNotification): void;
  windowWillBeginSheet?(notification: NSNotification): void;
  windowDidEndSheet?(notification: NSNotification): void;
  windowWillStartLiveResize?(notification: NSNotification): void;
  windowDidEndLiveResize?(notification: NSNotification): void;
  windowWillEnterFullScreen?(notification: NSNotification): void;
  windowDidEnterFullScreen?(notification: NSNotification): void;
  windowWillExitFullScreen?(notification: NSNotification): void;
  windowDidExitFullScreen?(notification: NSNotification): void;
  windowWillEnterVersionBrowser?(notification: NSNotification): void;
  windowDidEnterVersionBrowser?(notification: NSNotification): void;
  windowWillExitVersionBrowser?(notification: NSNotification): void;
  windowDidExitVersionBrowser?(notification: NSNotification): void;
  windowDidChangeOcclusionState?(notification: NSNotification): void;
}

export class NSCollectionViewDelegateImpl extends NSObject implements NSCollectionViewDelegate {
  static ObjCProtocols = [NSCollectionViewDelegate];

  collectionViewCanDragItemsAtIndexPathsWithEvent?(collectionView: NSCollectionView, indexPaths: NSSet, event: NSEvent): boolean;
  collectionViewCanDragItemsAtIndexesWithEvent?(collectionView: NSCollectionView, indexes: NSIndexSet, event: NSEvent): boolean;
  collectionViewWriteItemsAtIndexPathsToPasteboard?(collectionView: NSCollectionView, indexPaths: NSSet, pasteboard: NSPasteboard): boolean;
  collectionViewWriteItemsAtIndexesToPasteboard?(collectionView: NSCollectionView, indexes: NSIndexSet, pasteboard: NSPasteboard): boolean;
  collectionViewNamesOfPromisedFilesDroppedAtDestinationForDraggedItemsAtIndexPaths?(collectionView: NSCollectionView, dropURL: NSURL, indexPaths: NSSet): NSArray;
  collectionViewNamesOfPromisedFilesDroppedAtDestinationForDraggedItemsAtIndexes?(collectionView: NSCollectionView, dropURL: NSURL, indexes: NSIndexSet): NSArray;
  collectionViewDraggingImageForItemsAtIndexPathsWithEventOffset?(collectionView: NSCollectionView, indexPaths: NSSet, event: NSEvent, dragImageOffset: interop.PointerConvertible): NSImage;
  collectionViewDraggingImageForItemsAtIndexesWithEventOffset?(collectionView: NSCollectionView, indexes: NSIndexSet, event: NSEvent, dragImageOffset: interop.PointerConvertible): NSImage;
  collectionViewValidateDropProposedIndexPathDropOperation?(collectionView: NSCollectionView, draggingInfo: NSDraggingInfo, proposedDropIndexPath: interop.PointerConvertible, proposedDropOperation: interop.PointerConvertible): interop.Enum<typeof NSDragOperation>;
  collectionViewValidateDropProposedIndexDropOperation?(collectionView: NSCollectionView, draggingInfo: NSDraggingInfo, proposedDropIndex: interop.PointerConvertible, proposedDropOperation: interop.PointerConvertible): interop.Enum<typeof NSDragOperation>;
  collectionViewAcceptDropIndexPathDropOperation?(collectionView: NSCollectionView, draggingInfo: NSDraggingInfo, indexPath: NSIndexPath, dropOperation: interop.Enum<typeof NSCollectionViewDropOperation>): boolean;
  collectionViewAcceptDropIndexDropOperation?(collectionView: NSCollectionView, draggingInfo: NSDraggingInfo, index: number, dropOperation: interop.Enum<typeof NSCollectionViewDropOperation>): boolean;
  collectionViewPasteboardWriterForItemAtIndexPath?(collectionView: NSCollectionView, indexPath: NSIndexPath): NSPasteboardWriting;
  collectionViewPasteboardWriterForItemAtIndex?(collectionView: NSCollectionView, index: number): NSPasteboardWriting;
  collectionViewDraggingSessionWillBeginAtPointForItemsAtIndexPaths?(collectionView: NSCollectionView, session: NSDraggingSession, screenPoint: CGPoint, indexPaths: NSSet): void;
  collectionViewDraggingSessionWillBeginAtPointForItemsAtIndexes?(collectionView: NSCollectionView, session: NSDraggingSession, screenPoint: CGPoint, indexes: NSIndexSet): void;
  collectionViewDraggingSessionEndedAtPointDragOperation?(collectionView: NSCollectionView, session: NSDraggingSession, screenPoint: CGPoint, operation: interop.Enum<typeof NSDragOperation>): void;
  collectionViewUpdateDraggingItemsForDrag?(collectionView: NSCollectionView, draggingInfo: NSDraggingInfo): void;
  collectionViewShouldChangeItemsAtIndexPathsToHighlightState?(collectionView: NSCollectionView, indexPaths: NSSet, highlightState: interop.Enum<typeof NSCollectionViewItemHighlightState>): NSSet;
  collectionViewDidChangeItemsAtIndexPathsToHighlightState?(collectionView: NSCollectionView, indexPaths: NSSet, highlightState: interop.Enum<typeof NSCollectionViewItemHighlightState>): void;
  collectionViewShouldSelectItemsAtIndexPaths?(collectionView: NSCollectionView, indexPaths: NSSet): NSSet;
  collectionViewShouldDeselectItemsAtIndexPaths?(collectionView: NSCollectionView, indexPaths: NSSet): NSSet;
  collectionViewDidSelectItemsAtIndexPaths?(collectionView: NSCollectionView, indexPaths: NSSet): void;
  collectionViewDidDeselectItemsAtIndexPaths?(collectionView: NSCollectionView, indexPaths: NSSet): void;
  collectionViewWillDisplayItemForRepresentedObjectAtIndexPath?(collectionView: NSCollectionView, item: NSCollectionViewItem, indexPath: NSIndexPath): void;
  collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath?(collectionView: NSCollectionView, view: NSView, elementKind: NSString | string, indexPath: NSIndexPath): void;
  collectionViewDidEndDisplayingItemForRepresentedObjectAtIndexPath?(collectionView: NSCollectionView, item: NSCollectionViewItem, indexPath: NSIndexPath): void;
  collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath?(collectionView: NSCollectionView, view: NSView, elementKind: NSString | string, indexPath: NSIndexPath): void;
  collectionViewTransitionLayoutForOldLayoutNewLayout?(collectionView: NSCollectionView, fromLayout: NSCollectionViewLayout, toLayout: NSCollectionViewLayout): NSCollectionViewTransitionLayout;
}

export class NSAlertDelegateImpl extends NSObject implements NSAlertDelegate {
  static ObjCProtocols = [NSAlertDelegate];

  alertShowHelp?(alert: NSAlert): boolean;
}

export class NSTextDelegateImpl extends NSObject implements NSTextDelegate {
  static ObjCProtocols = [NSTextDelegate];

  textShouldBeginEditing?(textObject: NSText): boolean;
  textShouldEndEditing?(textObject: NSText): boolean;
  textDidBeginEditing?(notification: NSNotification): void;
  textDidEndEditing?(notification: NSNotification): void;
  textDidChange?(notification: NSNotification): void;
}

export class NSGestureRecognizerDelegateImpl extends NSObject implements NSGestureRecognizerDelegate {
  static ObjCProtocols = [NSGestureRecognizerDelegate];

  gestureRecognizerShouldAttemptToRecognizeWithEvent?(gestureRecognizer: NSGestureRecognizer, event: NSEvent): boolean;
  gestureRecognizerShouldBegin?(gestureRecognizer: NSGestureRecognizer): boolean;
  gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer?(gestureRecognizer: NSGestureRecognizer, otherGestureRecognizer: NSGestureRecognizer): boolean;
  gestureRecognizerShouldRequireFailureOfGestureRecognizer?(gestureRecognizer: NSGestureRecognizer, otherGestureRecognizer: NSGestureRecognizer): boolean;
  gestureRecognizerShouldBeRequiredToFailByGestureRecognizer?(gestureRecognizer: NSGestureRecognizer, otherGestureRecognizer: NSGestureRecognizer): boolean;
  gestureRecognizerShouldReceiveTouch?(gestureRecognizer: NSGestureRecognizer, touch: NSTouch): boolean;
}

export class NSTextContentManagerDelegateImpl extends NSObject implements NSTextContentManagerDelegate {
  static ObjCProtocols = [NSTextContentManagerDelegate];

  textContentManagerTextElementAtLocation?(textContentManager: NSTextContentManager, location: NSTextLocation): NSTextElement;
  textContentManagerShouldEnumerateTextElementOptions?(textContentManager: NSTextContentManager, textElement: NSTextElement, options: interop.Enum<typeof NSTextContentManagerEnumerationOptions>): boolean;
}

export class NSTouchBarDelegateImpl extends NSObject implements NSTouchBarDelegate {
  static ObjCProtocols = [NSTouchBarDelegate];

  touchBarMakeItemForIdentifier?(touchBar: NSTouchBar, identifier: NSString | string): NSTouchBarItem;
}

export class NSPopoverDelegateImpl extends NSObject implements NSPopoverDelegate {
  static ObjCProtocols = [NSPopoverDelegate];

  popoverShouldClose?(popover: NSPopover): boolean;
  popoverShouldDetach?(popover: NSPopover): boolean;
  popoverDidDetach?(popover: NSPopover): void;
  detachableWindowForPopover?(popover: NSPopover): NSWindow;
  popoverWillShow?(notification: NSNotification): void;
  popoverDidShow?(notification: NSNotification): void;
  popoverWillClose?(notification: NSNotification): void;
  popoverDidClose?(notification: NSNotification): void;
}

export class NSPathCellDelegateImpl extends NSObject implements NSPathCellDelegate {
  static ObjCProtocols = [NSPathCellDelegate];

  pathCellWillDisplayOpenPanel?(pathCell: NSPathCell, openPanel: NSOpenPanel): void;
  pathCellWillPopUpMenu?(pathCell: NSPathCell, menu: NSMenu): void;
}

export class NSAccessibilityCustomRotorItemSearchDelegateImpl extends NSObject implements NSAccessibilityCustomRotorItemSearchDelegate {
  static ObjCProtocols = [NSAccessibilityCustomRotorItemSearchDelegate];

  rotorResultForSearchParameters(rotor: NSAccessibilityCustomRotor, searchParameters: NSAccessibilityCustomRotorSearchParameters): NSAccessibilityCustomRotorItemResult {
    throw new Error("Please provide implementation for: NSAccessibilityCustomRotorItemSearchDelegate > rotorResultForSearchParameters");
  }
}

export class NSTokenFieldCellDelegateImpl extends NSObject implements NSTokenFieldCellDelegate {
  static ObjCProtocols = [NSTokenFieldCellDelegate];

  tokenFieldCellCompletionsForSubstringIndexOfTokenIndexOfSelectedItem?(tokenFieldCell: NSTokenFieldCell, substring: NSString | string, tokenIndex: number, selectedIndex: interop.PointerConvertible): NSArray;
  tokenFieldCellShouldAddObjectsAtIndex?(tokenFieldCell: NSTokenFieldCell, tokens: NSArray | unknown[], index: number): NSArray;
  tokenFieldCellDisplayStringForRepresentedObject?(tokenFieldCell: NSTokenFieldCell, representedObject: interop.Object): NSString;
  tokenFieldCellEditingStringForRepresentedObject?(tokenFieldCell: NSTokenFieldCell, representedObject: interop.Object): NSString;
  tokenFieldCellRepresentedObjectForEditingString?(tokenFieldCell: NSTokenFieldCell, editingString: NSString | string): interop.Object;
  tokenFieldCellWriteRepresentedObjectsToPasteboard?(tokenFieldCell: NSTokenFieldCell, objects: NSArray | unknown[], pboard: NSPasteboard): boolean;
  tokenFieldCellReadFromPasteboard?(tokenFieldCell: NSTokenFieldCell, pboard: NSPasteboard): NSArray;
  tokenFieldCellMenuForRepresentedObject?(tokenFieldCell: NSTokenFieldCell, representedObject: interop.Object): NSMenu;
  tokenFieldCellHasMenuForRepresentedObject?(tokenFieldCell: NSTokenFieldCell, representedObject: interop.Object): boolean;
  tokenFieldCellStyleForRepresentedObject?(tokenFieldCell: NSTokenFieldCell, representedObject: interop.Object): interop.Enum<typeof NSTokenStyle>;
}

export class NSPathControlDelegateImpl extends NSObject implements NSPathControlDelegate {
  static ObjCProtocols = [NSPathControlDelegate];

  pathControlShouldDragItemWithPasteboard?(pathControl: NSPathControl, pathItem: NSPathControlItem, pasteboard: NSPasteboard): boolean;
  pathControlShouldDragPathComponentCellWithPasteboard?(pathControl: NSPathControl, pathComponentCell: NSPathComponentCell, pasteboard: NSPasteboard): boolean;
  pathControlValidateDrop?(pathControl: NSPathControl, info: NSDraggingInfo): interop.Enum<typeof NSDragOperation>;
  pathControlAcceptDrop?(pathControl: NSPathControl, info: NSDraggingInfo): boolean;
  pathControlWillDisplayOpenPanel?(pathControl: NSPathControl, openPanel: NSOpenPanel): void;
  pathControlWillPopUpMenu?(pathControl: NSPathControl, menu: NSMenu): void;
}

export class NSFilePromiseProviderDelegateImpl extends NSObject implements NSFilePromiseProviderDelegate {
  static ObjCProtocols = [NSFilePromiseProviderDelegate];

  filePromiseProviderFileNameForType(filePromiseProvider: NSFilePromiseProvider, fileType: NSString | string): NSString {
    throw new Error("Please provide implementation for: NSFilePromiseProviderDelegate > filePromiseProviderFileNameForType");
  }
  filePromiseProviderWritePromiseToURLCompletionHandler(filePromiseProvider: NSFilePromiseProvider, url: NSURL, completionHandler: (p1: NSError) => void | null): void {
    throw new Error("Please provide implementation for: NSFilePromiseProviderDelegate > filePromiseProviderWritePromiseToURLCompletionHandler");
  }
  operationQueueForFilePromiseProvider?(filePromiseProvider: NSFilePromiseProvider): NSOperationQueue;
}

export class NSApplicationDelegateImpl extends NSObject implements NSApplicationDelegate {
  static ObjCProtocols = [NSApplicationDelegate];

  applicationShouldTerminate?(sender: NSApplication): interop.Enum<typeof NSApplicationTerminateReply>;
  applicationOpenURLs?(application: NSApplication, urls: NSArray | unknown[]): void;
  applicationOpenFile?(sender: NSApplication, filename: NSString | string): boolean;
  applicationOpenFiles?(sender: NSApplication, filenames: NSArray | unknown[]): void;
  applicationOpenTempFile?(sender: NSApplication, filename: NSString | string): boolean;
  applicationShouldOpenUntitledFile?(sender: NSApplication): boolean;
  applicationOpenUntitledFile?(sender: NSApplication): boolean;
  applicationOpenFileWithoutUI?(sender: interop.Object, filename: NSString | string): boolean;
  applicationPrintFile?(sender: NSApplication, filename: NSString | string): boolean;
  applicationPrintFilesWithSettingsShowPrintPanels?(application: NSApplication, fileNames: NSArray | unknown[], printSettings: NSDictionary | Record<string, unknown>, showPrintPanels: boolean): interop.Enum<typeof NSApplicationPrintReply>;
  applicationShouldTerminateAfterLastWindowClosed?(sender: NSApplication): boolean;
  applicationShouldHandleReopenHasVisibleWindows?(sender: NSApplication, flag: boolean): boolean;
  applicationDockMenu?(sender: NSApplication): NSMenu;
  applicationWillPresentError?(application: NSApplication, error: NSError): NSError;
  applicationDidRegisterForRemoteNotificationsWithDeviceToken?(application: NSApplication, deviceToken: NSData): void;
  applicationDidFailToRegisterForRemoteNotificationsWithError?(application: NSApplication, error: NSError): void;
  applicationDidReceiveRemoteNotification?(application: NSApplication, userInfo: NSDictionary | Record<string, unknown>): void;
  applicationSupportsSecureRestorableState?(app: NSApplication): boolean;
  applicationHandlerForIntent?(application: NSApplication, intent: INIntent): interop.Object;
  applicationWillEncodeRestorableState?(app: NSApplication, coder: NSCoder): void;
  applicationDidDecodeRestorableState?(app: NSApplication, coder: NSCoder): void;
  applicationWillContinueUserActivityWithType?(application: NSApplication, userActivityType: NSString | string): boolean;
  applicationContinueUserActivityRestorationHandler?(application: NSApplication, userActivity: NSUserActivity, restorationHandler: (p1: NSArray | unknown[]) => void): boolean;
  applicationDidFailToContinueUserActivityWithTypeError?(application: NSApplication, userActivityType: NSString | string, error: NSError): void;
  applicationDidUpdateUserActivity?(application: NSApplication, userActivity: NSUserActivity): void;
  applicationUserDidAcceptCloudKitShareWithMetadata?(application: NSApplication, metadata: CKShareMetadata): void;
  applicationShouldAutomaticallyLocalizeKeyEquivalents?(application: NSApplication): boolean;
  applicationWillFinishLaunching?(notification: NSNotification): void;
  applicationDidFinishLaunching?(notification: NSNotification): void;
  applicationWillHide?(notification: NSNotification): void;
  applicationDidHide?(notification: NSNotification): void;
  applicationWillUnhide?(notification: NSNotification): void;
  applicationDidUnhide?(notification: NSNotification): void;
  applicationWillBecomeActive?(notification: NSNotification): void;
  applicationDidBecomeActive?(notification: NSNotification): void;
  applicationWillResignActive?(notification: NSNotification): void;
  applicationDidResignActive?(notification: NSNotification): void;
  applicationWillUpdate?(notification: NSNotification): void;
  applicationDidUpdate?(notification: NSNotification): void;
  applicationWillTerminate?(notification: NSNotification): void;
  applicationDidChangeScreenParameters?(notification: NSNotification): void;
  applicationDidChangeOcclusionState?(notification: NSNotification): void;
  applicationProtectedDataWillBecomeUnavailable?(notification: NSNotification): void;
  applicationProtectedDataDidBecomeAvailable?(notification: NSNotification): void;
}

export class NSAnimationDelegateImpl extends NSObject implements NSAnimationDelegate {
  static ObjCProtocols = [NSAnimationDelegate];

  animationShouldStart?(animation: NSAnimation): boolean;
  animationDidStop?(animation: NSAnimation): void;
  animationDidEnd?(animation: NSAnimation): void;
  animationValueForProgress?(animation: NSAnimation, progress: number): number;
  animationDidReachProgressMark?(animation: NSAnimation, progress: number): void;
}

export class NSSharingServicePickerToolbarItemDelegateImpl extends NSObject implements NSSharingServicePickerToolbarItemDelegate {
  static ObjCProtocols = [NSSharingServicePickerToolbarItemDelegate];

  itemsForSharingServicePickerToolbarItem(pickerToolbarItem: NSSharingServicePickerToolbarItem): NSArray {
    throw new Error("Please provide implementation for: NSSharingServicePickerToolbarItemDelegate > itemsForSharingServicePickerToolbarItem");
  }
}

export class NSOutlineViewDelegateImpl extends NSObject implements NSOutlineViewDelegate {
  static ObjCProtocols = [NSOutlineViewDelegate];

  outlineViewViewForTableColumnItem?(outlineView: NSOutlineView, tableColumn: NSTableColumn | null, item: interop.Object): NSView;
  outlineViewRowViewForItem?(outlineView: NSOutlineView, item: interop.Object): NSTableRowView;
  outlineViewDidAddRowViewForRow?(outlineView: NSOutlineView, rowView: NSTableRowView, row: number): void;
  outlineViewDidRemoveRowViewForRow?(outlineView: NSOutlineView, rowView: NSTableRowView, row: number): void;
  outlineViewWillDisplayCellForTableColumnItem?(outlineView: NSOutlineView, cell: interop.Object, tableColumn: NSTableColumn | null, item: interop.Object): void;
  outlineViewShouldEditTableColumnItem?(outlineView: NSOutlineView, tableColumn: NSTableColumn | null, item: interop.Object): boolean;
  selectionShouldChangeInOutlineView?(outlineView: NSOutlineView): boolean;
  outlineViewShouldSelectItem?(outlineView: NSOutlineView, item: interop.Object): boolean;
  outlineViewSelectionIndexesForProposedSelection?(outlineView: NSOutlineView, proposedSelectionIndexes: NSIndexSet): NSIndexSet;
  outlineViewShouldSelectTableColumn?(outlineView: NSOutlineView, tableColumn: NSTableColumn | null): boolean;
  outlineViewMouseDownInHeaderOfTableColumn?(outlineView: NSOutlineView, tableColumn: NSTableColumn): void;
  outlineViewDidClickTableColumn?(outlineView: NSOutlineView, tableColumn: NSTableColumn): void;
  outlineViewDidDragTableColumn?(outlineView: NSOutlineView, tableColumn: NSTableColumn): void;
  outlineViewToolTipForCellRectTableColumnItemMouseLocation?(outlineView: NSOutlineView, cell: NSCell, rect: interop.PointerConvertible, tableColumn: NSTableColumn | null, item: interop.Object, mouseLocation: CGPoint): NSString;
  outlineViewHeightOfRowByItem?(outlineView: NSOutlineView, item: interop.Object): number;
  outlineViewTintConfigurationForItem?(outlineView: NSOutlineView, item: interop.Object): NSTintConfiguration;
  outlineViewTypeSelectStringForTableColumnItem?(outlineView: NSOutlineView, tableColumn: NSTableColumn | null, item: interop.Object): NSString;
  outlineViewNextTypeSelectMatchFromItemToItemForString?(outlineView: NSOutlineView, startItem: interop.Object, endItem: interop.Object, searchString: NSString | string): interop.Object;
  outlineViewShouldTypeSelectForEventWithCurrentSearchString?(outlineView: NSOutlineView, event: NSEvent, searchString: NSString | string | null): boolean;
  outlineViewShouldShowCellExpansionForTableColumnItem?(outlineView: NSOutlineView, tableColumn: NSTableColumn | null, item: interop.Object): boolean;
  outlineViewShouldTrackCellForTableColumnItem?(outlineView: NSOutlineView, cell: NSCell, tableColumn: NSTableColumn | null, item: interop.Object): boolean;
  outlineViewDataCellForTableColumnItem?(outlineView: NSOutlineView, tableColumn: NSTableColumn | null, item: interop.Object): NSCell;
  outlineViewIsGroupItem?(outlineView: NSOutlineView, item: interop.Object): boolean;
  outlineViewShouldExpandItem?(outlineView: NSOutlineView, item: interop.Object): boolean;
  outlineViewShouldCollapseItem?(outlineView: NSOutlineView, item: interop.Object): boolean;
  outlineViewWillDisplayOutlineCellForTableColumnItem?(outlineView: NSOutlineView, cell: interop.Object, tableColumn: NSTableColumn | null, item: interop.Object): void;
  outlineViewSizeToFitWidthOfColumn?(outlineView: NSOutlineView, column: number): number;
  outlineViewShouldReorderColumnToColumn?(outlineView: NSOutlineView, columnIndex: number, newColumnIndex: number): boolean;
  outlineViewShouldShowOutlineCellForItem?(outlineView: NSOutlineView, item: interop.Object): boolean;
  outlineViewUserCanChangeVisibilityOfTableColumn?(outlineView: NSOutlineView, column: NSTableColumn): boolean;
  outlineViewUserDidChangeVisibilityOfTableColumns?(outlineView: NSOutlineView, columns: NSArray | unknown[]): void;
  outlineViewSelectionDidChange?(notification: NSNotification): void;
  outlineViewColumnDidMove?(notification: NSNotification): void;
  outlineViewColumnDidResize?(notification: NSNotification): void;
  outlineViewSelectionIsChanging?(notification: NSNotification): void;
  outlineViewItemWillExpand?(notification: NSNotification): void;
  outlineViewItemDidExpand?(notification: NSNotification): void;
  outlineViewItemWillCollapse?(notification: NSNotification): void;
  outlineViewItemDidCollapse?(notification: NSNotification): void;
}

export class NSMatrixDelegateImpl extends NSObject implements NSMatrixDelegate {
  static ObjCProtocols = [NSMatrixDelegate];
}

export class NSSharingServicePickerDelegateImpl extends NSObject implements NSSharingServicePickerDelegate {
  static ObjCProtocols = [NSSharingServicePickerDelegate];

  sharingServicePickerSharingServicesForItemsProposedSharingServices?(sharingServicePicker: NSSharingServicePicker, items: NSArray | unknown[], proposedServices: NSArray | unknown[]): NSArray;
  sharingServicePickerDelegateForSharingService?(sharingServicePicker: NSSharingServicePicker, sharingService: NSSharingService): NSSharingServiceDelegate;
  sharingServicePickerDidChooseSharingService?(sharingServicePicker: NSSharingServicePicker, service: NSSharingService | null): void;
}

export class NSSplitViewDelegateImpl extends NSObject implements NSSplitViewDelegate {
  static ObjCProtocols = [NSSplitViewDelegate];

  splitViewCanCollapseSubview?(splitView: NSSplitView, subview: NSView): boolean;
  splitViewShouldCollapseSubviewForDoubleClickOnDividerAtIndex?(splitView: NSSplitView, subview: NSView, dividerIndex: number): boolean;
  splitViewConstrainMinCoordinateOfSubviewAt?(splitView: NSSplitView, proposedMinimumPosition: number, dividerIndex: number): number;
  splitViewConstrainMaxCoordinateOfSubviewAt?(splitView: NSSplitView, proposedMaximumPosition: number, dividerIndex: number): number;
  splitViewConstrainSplitPositionOfSubviewAt?(splitView: NSSplitView, proposedPosition: number, dividerIndex: number): number;
  splitViewResizeSubviewsWithOldSize?(splitView: NSSplitView, oldSize: CGSize): void;
  splitViewShouldAdjustSizeOfSubview?(splitView: NSSplitView, view: NSView): boolean;
  splitViewShouldHideDividerAtIndex?(splitView: NSSplitView, dividerIndex: number): boolean;
  splitViewEffectiveRectForDrawnRectOfDividerAtIndex?(splitView: NSSplitView, proposedEffectiveRect: CGRect, drawnRect: CGRect, dividerIndex: number): CGRect;
  splitViewAdditionalEffectiveRectOfDividerAtIndex?(splitView: NSSplitView, dividerIndex: number): CGRect;
  splitViewWillResizeSubviews?(notification: NSNotification): void;
  splitViewDidResizeSubviews?(notification: NSNotification): void;
}

export class NSComboBoxDelegateImpl extends NSObject implements NSComboBoxDelegate {
  static ObjCProtocols = [NSComboBoxDelegate];

  comboBoxWillPopUp?(notification: NSNotification): void;
  comboBoxWillDismiss?(notification: NSNotification): void;
  comboBoxSelectionDidChange?(notification: NSNotification): void;
  comboBoxSelectionIsChanging?(notification: NSNotification): void;
}

export class NSToolbarDelegateImpl extends NSObject implements NSToolbarDelegate {
  static ObjCProtocols = [NSToolbarDelegate];

  toolbarItemForItemIdentifierWillBeInsertedIntoToolbar?(toolbar: NSToolbar, itemIdentifier: NSString | string, flag: boolean): NSToolbarItem;
  toolbarDefaultItemIdentifiers?(toolbar: NSToolbar): NSArray;
  toolbarAllowedItemIdentifiers?(toolbar: NSToolbar): NSArray;
  toolbarSelectableItemIdentifiers?(toolbar: NSToolbar): NSArray;
  toolbarImmovableItemIdentifiers?(toolbar: NSToolbar): NSSet;
  toolbarItemIdentifierCanBeInsertedAtIndex?(toolbar: NSToolbar, itemIdentifier: NSString | string, index: number): boolean;
  toolbarWillAddItem?(notification: NSNotification): void;
  toolbarDidRemoveItem?(notification: NSNotification): void;
}

export class NSTokenFieldDelegateImpl extends NSObject implements NSTokenFieldDelegate {
  static ObjCProtocols = [NSTokenFieldDelegate];

  tokenFieldCompletionsForSubstringIndexOfTokenIndexOfSelectedItem?(tokenField: NSTokenField, substring: NSString | string, tokenIndex: number, selectedIndex: interop.PointerConvertible): NSArray;
  tokenFieldShouldAddObjectsAtIndex?(tokenField: NSTokenField, tokens: NSArray | unknown[], index: number): NSArray;
  tokenFieldDisplayStringForRepresentedObject?(tokenField: NSTokenField, representedObject: interop.Object): NSString;
  tokenFieldEditingStringForRepresentedObject?(tokenField: NSTokenField, representedObject: interop.Object): NSString;
  tokenFieldRepresentedObjectForEditingString?(tokenField: NSTokenField, editingString: NSString | string): interop.Object;
  tokenFieldWriteRepresentedObjectsToPasteboard?(tokenField: NSTokenField, objects: NSArray | unknown[], pboard: NSPasteboard): boolean;
  tokenFieldReadFromPasteboard?(tokenField: NSTokenField, pboard: NSPasteboard): NSArray;
  tokenFieldMenuForRepresentedObject?(tokenField: NSTokenField, representedObject: interop.Object): NSMenu;
  tokenFieldHasMenuForRepresentedObject?(tokenField: NSTokenField, representedObject: interop.Object): boolean;
  tokenFieldStyleForRepresentedObject?(tokenField: NSTokenField, representedObject: interop.Object): interop.Enum<typeof NSTokenStyle>;
}

export class NSTextLayoutManagerDelegateImpl extends NSObject implements NSTextLayoutManagerDelegate {
  static ObjCProtocols = [NSTextLayoutManagerDelegate];

  textLayoutManagerTextLayoutFragmentForLocationInTextElement?(textLayoutManager: NSTextLayoutManager, location: NSTextLocation, textElement: NSTextElement): NSTextLayoutFragment;
  textLayoutManagerShouldBreakLineBeforeLocationHyphenating?(textLayoutManager: NSTextLayoutManager, location: NSTextLocation, hyphenating: boolean): boolean;
  textLayoutManagerRenderingAttributesForLinkAtLocationDefaultAttributes?(textLayoutManager: NSTextLayoutManager, link: interop.Object, location: NSTextLocation, renderingAttributes: NSDictionary | Record<string, unknown>): NSDictionary;
}

export class NSLayoutManagerDelegateImpl extends NSObject implements NSLayoutManagerDelegate {
  static ObjCProtocols = [NSLayoutManagerDelegate];

  layoutManagerShouldGenerateGlyphsPropertiesCharacterIndexesFontForGlyphRange?(layoutManager: NSLayoutManager, glyphs: interop.PointerConvertible, props: interop.PointerConvertible, charIndexes: interop.PointerConvertible, aFont: NSFont, glyphRange: _NSRange): number;
  layoutManagerLineSpacingAfterGlyphAtIndexWithProposedLineFragmentRect?(layoutManager: NSLayoutManager, glyphIndex: number, rect: CGRect): number;
  layoutManagerParagraphSpacingBeforeGlyphAtIndexWithProposedLineFragmentRect?(layoutManager: NSLayoutManager, glyphIndex: number, rect: CGRect): number;
  layoutManagerParagraphSpacingAfterGlyphAtIndexWithProposedLineFragmentRect?(layoutManager: NSLayoutManager, glyphIndex: number, rect: CGRect): number;
  layoutManagerShouldUseActionForControlCharacterAtIndex?(layoutManager: NSLayoutManager, action: interop.Enum<typeof NSControlCharacterAction>, charIndex: number): interop.Enum<typeof NSControlCharacterAction>;
  layoutManagerShouldBreakLineByWordBeforeCharacterAtIndex?(layoutManager: NSLayoutManager, charIndex: number): boolean;
  layoutManagerShouldBreakLineByHyphenatingBeforeCharacterAtIndex?(layoutManager: NSLayoutManager, charIndex: number): boolean;
  layoutManagerBoundingBoxForControlGlyphAtIndexForTextContainerProposedLineFragmentGlyphPositionCharacterIndex?(layoutManager: NSLayoutManager, glyphIndex: number, textContainer: NSTextContainer, proposedRect: CGRect, glyphPosition: CGPoint, charIndex: number): CGRect;
  layoutManagerShouldSetLineFragmentRectLineFragmentUsedRectBaselineOffsetInTextContainerForGlyphRange?(layoutManager: NSLayoutManager, lineFragmentRect: interop.PointerConvertible, lineFragmentUsedRect: interop.PointerConvertible, baselineOffset: interop.PointerConvertible, textContainer: NSTextContainer, glyphRange: _NSRange): boolean;
  layoutManagerDidInvalidateLayout?(sender: NSLayoutManager): void;
  layoutManagerDidCompleteLayoutForTextContainerAtEnd?(layoutManager: NSLayoutManager, textContainer: NSTextContainer | null, layoutFinishedFlag: boolean): void;
  layoutManagerTextContainerDidChangeGeometryFromSize?(layoutManager: NSLayoutManager, textContainer: NSTextContainer, oldSize: CGSize): void;
  layoutManagerShouldUseTemporaryAttributesForDrawingToScreenAtCharacterIndexEffectiveRange?(layoutManager: NSLayoutManager, attrs: NSDictionary | Record<string, unknown>, toScreen: boolean, charIndex: number, effectiveCharRange: interop.PointerConvertible): NSDictionary;
}

export class NSSearchFieldDelegateImpl extends NSObject implements NSSearchFieldDelegate {
  static ObjCProtocols = [NSSearchFieldDelegate];

  searchFieldDidStartSearching?(sender: NSSearchField): void;
  searchFieldDidEndSearching?(sender: NSSearchField): void;
}