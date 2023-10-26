/// <reference types="objc/lib/types.d.ts" />
/// <reference types="objc/types/Runtime.d.ts" />
/// <reference types="objc/types/QuartzCore.d.ts" />
/// <reference types="objc/types/Foundation.d.ts" />

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

export class HTMLNSWindowTabGroupElement extends HTMLNSObjectElement {
  readonly nativeObject = NSWindowTabGroup.new();

  // readonly identifier: NSString;
  // readonly windows: NSArray;
  // isOverviewVisible: boolean;
  // readonly isTabBarVisible: boolean;
  // selectedWindow: NSWindow | null;
}

export class HTMLNSAccessibilityCustomRotorSearchParametersElement extends HTMLNSObjectElement {
  readonly nativeObject = NSAccessibilityCustomRotorSearchParameters.new();

  // currentItem: NSAccessibilityCustomRotorItemResult;
  // searchDirection: interop.Enum<typeof NSAccessibilityCustomRotorSearchDirection>;
}

export class HTMLNSFontManagerElement extends HTMLNSObjectElement {
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
  readonly nativeObject = NSCollectionViewUpdateItem.new();

  // readonly indexPathBeforeUpdate: NSIndexPath;
  // readonly indexPathAfterUpdate: NSIndexPath;
  // readonly updateAction: interop.Enum<typeof NSCollectionUpdateAction>;
}

export class HTMLNSControllerElement extends HTMLNSObjectElement {
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
  readonly nativeObject = NSHelpManager.new();

  // sharedHelpManager: NSHelpManager;
  // isContextHelpModeActive: boolean;
}

export class HTMLNSOpenGLPixelFormatElement extends HTMLNSObjectElement {
  readonly nativeObject = NSOpenGLPixelFormat.new();

  // readonly numberOfVirtualScreens: number;
  // readonly CGLPixelFormatObj: interop.Pointer;
}

export class HTMLNSTextAttachmentElement extends HTMLNSObjectElement {
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
  readonly nativeObject = NSCollectionViewLayout.new();

  // readonly collectionView: NSCollectionView;
  // layoutAttributesClass: interop.Object;
  // invalidationContextClass: interop.Object;
  // readonly collectionViewContentSize: CGSize;
}

export class HTMLNSPasteboardItemElement extends HTMLNSObjectElement {
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
  readonly nativeObject = NSScrubberFlowLayout.new();

  // itemSpacing: number;
  // itemSize: CGSize;
}

export class HTMLNSTextElementElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextElement.new();

  // textContentManager: NSTextContentManager;
  // elementRange: NSTextRange;
  // readonly childElements: NSArray;
  // readonly parentElement: NSTextElement;
  // readonly isRepresentedElement: boolean;
}

export class HTMLNSTextSelectionNavigationElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextSelectionNavigation.new();

  // readonly textSelectionDataSource: NSTextSelectionDataSource | null;
  // allowsNonContiguousRanges: boolean;
  // rotatesCoordinateSystemForLayoutOrientation: boolean;
}

export class HTMLNSTextRangeElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextRange.new();

  // readonly isEmpty: boolean;
  // readonly location: NSTextLocation;
  // readonly endLocation: NSTextLocation;
}

export class HTMLNSPressureConfigurationElement extends HTMLNSObjectElement {
  readonly nativeObject = NSPressureConfiguration.new();

  // readonly pressureBehavior: interop.Enum<typeof NSPressureBehavior>;
}

export class HTMLNSHapticFeedbackManagerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSHapticFeedbackManager.new();

  // defaultPerformer: NSHapticFeedbackPerformer;
}

export class HTMLNSTextBlockElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextBlock.new();

  // readonly contentWidth: number;
  // readonly contentWidthValueType: interop.Enum<typeof NSTextBlockValueType>;
  // verticalAlignment: interop.Enum<typeof NSTextBlockVerticalAlignment>;
  // backgroundColor: NSColor;
  // supportsSecureCoding: boolean;
}

export class HTMLNSTextListElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextList.new();

  // readonly markerFormat: NSString;
  // readonly listOptions: interop.Enum<typeof NSTextListOptions>;
  // startingItemNumber: number;
  // readonly isOrdered: boolean;
  // supportsSecureCoding: boolean;
}

export class HTMLNSTreeNodeElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTreeNode.new();

  // readonly representedObject: interop.Object;
  // readonly indexPath: NSIndexPath;
  // readonly isLeaf: boolean;
  // readonly childNodes: NSArray;
  // readonly mutableChildNodes: NSMutableArray;
  // readonly parentNode: NSTreeNode;
}

export class HTMLNSObjectControllerElement extends HTMLNSControllerElement {
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
  readonly nativeObject = NSGlyphInfo.new();

  // readonly glyphID: number;
  // readonly baseString: NSString;
  // readonly glyphName: NSString;
  // readonly characterIdentifier: number;
  // readonly characterCollection: interop.Enum<typeof NSCharacterCollection>;
  // supportsSecureCoding: boolean;
}

export class HTMLNSTableViewDiffableDataSourceElement extends HTMLNSObjectElement {
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
  readonly nativeObject = NSOpenGLPixelBuffer.new();

  // readonly CGLPBufferObj: interop.Pointer;
  // readonly pixelsWide: number;
  // readonly pixelsHigh: number;
  // readonly textureTarget: number;
  // readonly textureInternalFormat: number;
  // readonly textureMaxMipMapLevel: number;
}

export class HTMLNSCellElement extends HTMLNSObjectElement {
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
  readonly nativeObject = NSSpeechRecognizer.new();

  constructor(){
    super();

    const delegate = NSSpeechRecognizerDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // delegate: NSSpeechRecognizerDelegate;
  // listensInForegroundOnly: boolean;
  // blocksOtherRecognizers: boolean;
}

export class HTMLNSCollectionLayoutGroupCustomItemElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCollectionLayoutGroupCustomItem.new();

  // readonly frame: CGRect;
  // readonly zIndex: number;
}

export class HTMLNSTableViewRowActionElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTableViewRowAction.new();

  // readonly style: interop.Enum<typeof NSTableViewRowActionStyle>;
  // backgroundColor: NSColor;
  // image: NSImage;
}

export class HTMLNSTextAttachmentViewProviderElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextAttachmentViewProvider.new();

  // readonly textAttachment: NSTextAttachment | null;
  // readonly textLayoutManager: NSTextLayoutManager;
  // readonly location: NSTextLocation;
  // view: NSView;
  // tracksTextAttachmentViewBounds: boolean;
}

export class HTMLNSToolbarItemElement extends HTMLNSObjectElement {
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
  readonly nativeObject = NSGlyphGenerator.new();

  // sharedGlyphGenerator: NSGlyphGenerator;
}

export class HTMLNSGridCellElement extends HTMLNSObjectElement {
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
  readonly nativeObject = NSColorSampler.new();

}

export class HTMLNSPDFPanelElement extends HTMLNSObjectElement {
  readonly nativeObject = NSPDFPanel.new();

  // accessoryController: NSViewController;
  // options: interop.Enum<typeof NSPDFPanelOptions>;
}

export class HTMLNSPageLayoutElement extends HTMLNSObjectElement {
  readonly nativeObject = NSPageLayout.new();

  // readonly accessoryControllers: NSArray;
  // readonly printInfo: NSPrintInfo;
}

export class HTMLNSScreenElement extends HTMLNSObjectElement {
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
  readonly nativeObject = NSImageSymbolConfiguration.new();

  // supportsSecureCoding: boolean;
}

export class HTMLNSRulerMarkerElement extends HTMLNSObjectElement {
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
  readonly nativeObject = NSColorPicker.new();

  // readonly colorPanel: NSColorPanel;
  // readonly provideNewButtonImage: NSImage;
  // readonly buttonToolTip: NSString;
  // readonly minContentSize: CGSize;
}

export class HTMLNSBrowserCellElement extends HTMLNSCellElement {
  readonly nativeObject = NSBrowserCell.new();

  // branchImage: NSImage;
  // highlightedBranchImage: NSImage;
  // isLeaf: boolean;
  // isLoaded: boolean;
  // image: NSImage;
  // alternateImage: NSImage;
}

export class HTMLNSImageRepElement extends HTMLNSObjectElement {
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
  readonly nativeObject = NSFontCollection.new();

  // fontCollectionWithAllAvailableDescriptors: NSFontCollection;
  // allFontCollectionNames: NSArray;
  // readonly queryDescriptors: NSArray;
  // readonly exclusionDescriptors: NSArray;
  // readonly matchingDescriptors: NSArray;
}

export class HTMLNSFontAssetRequestElement extends HTMLNSObjectElement {
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
  readonly nativeObject = NSGradient.new();

  // readonly colorSpace: NSColorSpace;
  // readonly numberOfColorStops: number;
  // supportsSecureCoding: boolean;
}

export class HTMLNSCollectionLayoutEdgeSpacingElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCollectionLayoutEdgeSpacing.new();

  // readonly leading: NSCollectionLayoutSpacing;
  // readonly top: NSCollectionLayoutSpacing;
  // readonly trailing: NSCollectionLayoutSpacing;
  // readonly bottom: NSCollectionLayoutSpacing;
}

export class HTMLNSCollectionLayoutSizeElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCollectionLayoutSize.new();

  // readonly widthDimension: NSCollectionLayoutDimension;
  // readonly heightDimension: NSCollectionLayoutDimension;
}

export class HTMLNSSharingServicePickerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSSharingServicePicker.new();

  constructor(){
    super();

    const delegate = NSSharingServicePickerDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // delegate: NSSharingServicePickerDelegate;
  // readonly standardShareMenuItem: NSMenuItem;
}

export class HTMLNSCollectionViewCompositionalLayoutConfigurationElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCollectionViewCompositionalLayoutConfiguration.new();

  // scrollDirection: interop.Enum<typeof NSCollectionViewScrollDirection>;
  // interSectionSpacing: number;
}

export class HTMLNSCollectionViewLayoutInvalidationContextElement extends HTMLNSObjectElement {
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
  readonly nativeObject = NSStoryboardSegue.new();

  // readonly identifier: NSString;
  // readonly sourceController: interop.Object;
  // readonly destinationController: interop.Object;
}

export class HTMLNSTouchBarElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTouchBar.new();

  constructor(){
    super();

    const delegate = NSTouchBarDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // readonly itemIdentifiers: NSArray;
  // templateItems: NSSet;
  // delegate: NSTouchBarDelegate;
  // readonly isVisible: boolean;
  // isAutomaticCustomizeTouchBarMenuItemEnabled: boolean;
}

export class HTMLNSActionCellElement extends HTMLNSCellElement {
  readonly nativeObject = NSActionCell.new();

  // target: interop.Object;
  // action: string;
  // tag: number;
}

export class HTMLNSColorListElement extends HTMLNSObjectElement {
  readonly nativeObject = NSColorList.new();

  // availableColorLists: NSArray;
  // readonly name: NSString;
  // readonly allKeys: NSArray;
  // readonly isEditable: boolean;
  // supportsSecureCoding: boolean;
}

export class HTMLNSDocumentElement extends HTMLNSObjectElement {
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
  readonly nativeObject = NSBindingSelectionMarker.new();

  // multipleValuesSelectionMarker: NSBindingSelectionMarker;
  // noSelectionMarker: NSBindingSelectionMarker;
  // notApplicableSelectionMarker: NSBindingSelectionMarker;
}

export class HTMLNSTextTabElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextTab.new();

  // readonly alignment: interop.Enum<typeof NSTextAlignment>;
  // readonly location: number;
  // readonly options: NSDictionary;
  // readonly tabStopType: interop.Enum<typeof NSTextTabType>;
  // supportsSecureCoding: boolean;
}

export class HTMLNSResponderElement extends HTMLNSObjectElement {
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
  readonly nativeObject = NSNib.new();

}

export class HTMLNSMenuToolbarItemElement extends HTMLNSToolbarItemElement {
  readonly nativeObject = NSMenuToolbarItem.new();

  // menu: NSMenu;
  // showsIndicator: boolean;
}

export class HTMLNSSplitViewItemElement extends HTMLNSObjectElement {
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
  readonly nativeObject = NSShadow.new();

  // shadowOffset: CGSize;
  // shadowBlurRadius: number;
  // shadowColor: NSColor;
  // supportsSecureCoding: boolean;
}

export class HTMLNSInputManagerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSInputManager.new();

  // selectedRange: _NSRange;
}

export class HTMLNSEventElement extends HTMLNSObjectElement {
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
  readonly nativeObject = NSSliderAccessory.new();

  // behavior: NSSliderAccessoryBehavior;
  // isEnabled: boolean;
}

export class HTMLNSAccessibilityCustomRotorItemResultElement extends HTMLNSObjectElement {
  readonly nativeObject = NSAccessibilityCustomRotorItemResult.new();

  // readonly targetElement: NSAccessibilityElement;
  // readonly itemLoadingToken: NSObject;
  // targetRange: _NSRange;
}

export class HTMLNSPasteboardElement extends HTMLNSObjectElement {
  readonly nativeObject = NSPasteboard.new();

  // generalPasteboard: NSPasteboard;
  // readonly name: NSString;
  // readonly changeCount: number;
  // readonly pasteboardItems: NSArray;
  // readonly types: NSArray;
}

export class HTMLNSWindowElement extends HTMLNSResponderElement {
  readonly nativeObject = NSWindow.new();

  constructor(){
    super();

    const delegate = NSWindowDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
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
  // delegate: NSWindowDelegate;
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
}

export class HTMLNSScrubberLayoutAttributesElement extends HTMLNSObjectElement {
  readonly nativeObject = NSScrubberLayoutAttributes.new();

  // itemIndex: number;
  // frame: CGRect;
  // alpha: number;
}

export class HTMLNSTextLayoutFragmentElement extends HTMLNSObjectElement {
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
  readonly nativeObject = NSMenuItemBadge.new();

  // readonly itemCount: number;
  // readonly type: interop.Enum<typeof NSMenuItemBadgeType>;
  // readonly stringValue: NSString;
}

export class HTMLNSGridColumnElement extends HTMLNSObjectElement {
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
  readonly nativeObject = NSPathCell.new();

  constructor(){
    super();

    const delegate = NSPathCellDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // pathStyle: interop.Enum<typeof NSPathStyle>;
  // URL: NSURL;
  // delegate: NSPathCellDelegate;
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
}

export class HTMLNSWorkspaceAuthorizationElement extends HTMLNSObjectElement {
  readonly nativeObject = NSWorkspaceAuthorization.new();

}

export class HTMLNSTextLayoutManagerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextLayoutManager.new();

  constructor(){
    super();

    const delegate = NSTextLayoutManagerDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // delegate: NSTextLayoutManagerDelegate;
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
}

export class HTMLNSWindowTabElement extends HTMLNSObjectElement {
  readonly nativeObject = NSWindowTab.new();

  // attributedTitle: NSAttributedString;
  // accessoryView: NSView;
}

export class HTMLNSDrawerElement extends HTMLNSResponderElement {
  readonly nativeObject = NSDrawer.new();

  constructor(){
    super();

    const delegate = NSDrawerDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // parentWindow: NSWindow;
  // contentView: NSView;
  // preferredEdge: interop.Enum<typeof NSRectEdge>;
  // delegate: NSDrawerDelegate;
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
}

export class HTMLNSLayoutManagerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSLayoutManager.new();

  constructor(){
    super();

    const delegate = NSLayoutManagerDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // textStorage: NSTextStorage;
  // readonly textContainers: NSArray;
  // delegate: NSLayoutManagerDelegate;
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
}

export class HTMLNSSharingServiceElement extends HTMLNSObjectElement {
  readonly nativeObject = NSSharingService.new();

  constructor(){
    super();

    const delegate = NSSharingServiceDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // delegate: NSSharingServiceDelegate;
  // readonly title: NSString;
  // readonly image: NSImage;
  // readonly alternateImage: NSImage;
  // readonly messageBody: NSString;
  // readonly permanentLink: NSURL;
  // readonly accountName: NSString;
  // readonly attachmentFileURLs: NSArray;
}

export class HTMLNSTreeControllerElement extends HTMLNSObjectControllerElement {
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
  readonly nativeObject = NSScrubberSelectionStyle.new();

  // outlineOverlayStyle: NSScrubberSelectionStyle;
  // roundedBackgroundStyle: NSScrubberSelectionStyle;
}

export class HTMLNSPreviewRepresentingActivityItemElement extends HTMLNSObjectElement {
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
  readonly nativeObject = NSDraggingSession.new();

  // draggingFormation: interop.Enum<typeof NSDraggingFormation>;
  // animatesToStartingPositionsOnCancelOrFail: boolean;
  // draggingLeaderIndex: number;
  // readonly draggingPasteboard: NSPasteboard;
  // readonly draggingSequenceNumber: number;
  // readonly draggingLocation: CGPoint;
}

export class HTMLNSCollectionViewDiffableDataSourceElement extends HTMLNSObjectElement {
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
  readonly nativeObject = NSTextContentManager.new();

  constructor(){
    super();

    const delegate = NSTextContentManagerDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // delegate: NSTextContentManagerDelegate;
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
}

export class HTMLNSPrinterElement extends HTMLNSObjectElement {
  readonly nativeObject = NSPrinter.new();

  // printerNames: NSArray;
  // printerTypes: NSArray;
  // readonly name: NSString;
  // readonly type: NSString;
  // readonly languageLevel: number;
  // readonly deviceDescription: NSDictionary;
}

export class HTMLNSAppearanceElement extends HTMLNSObjectElement {
  readonly nativeObject = NSAppearance.new();

  // readonly name: NSString;
  // currentAppearance: NSAppearance;
  // currentDrawingAppearance: NSAppearance;
  // readonly allowsVibrancy: boolean;
  // supportsSecureCoding: boolean;
}

export class HTMLNSTextInputContextElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextInputContext.new();

  // currentInputContext: NSTextInputContext;
  // readonly client: NSTextInputClient;
  // acceptsGlyphInfo: boolean;
  // readonly keyboardInputSources: NSArray;
}

export class HTMLNSCustomImageRepElement extends HTMLNSImageRepElement {
  readonly nativeObject = NSCustomImageRep.new();

  // readonly drawingHandler: (p1: CGRect) => boolean;
  // readonly drawSelector: string;
  // readonly delegate: interop.Object;
}

export class HTMLNSTextCheckingControllerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextCheckingController.new();

  // readonly client: NSTextCheckingClient;
  // spellCheckerDocumentTag: number;
}

export class HTMLNSColorSpaceElement extends HTMLNSObjectElement {
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
  readonly nativeObject = NSAnimationContext.new();

  // currentContext: NSAnimationContext;
  // duration: number;
  // timingFunction: CAMediaTimingFunction;
  // completionHandler: () => void;
  // allowsImplicitAnimation: boolean;
}

export class HTMLNSStringDrawingContextElement extends HTMLNSObjectElement {
  readonly nativeObject = NSStringDrawingContext.new();

  // minimumScaleFactor: number;
  // readonly actualScaleFactor: number;
  // readonly totalBounds: CGRect;
}

export class HTMLNSBezierPathElement extends HTMLNSObjectElement {
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
  readonly nativeObject = NSAccessibilityCustomAction.new();

  // handler: () => boolean;
  // target: NSObject;
  // selector: string;
}

export class HTMLNSViewElement extends HTMLNSResponderElement {
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
  readonly nativeObject = NSImage.new();

  constructor(){
    super();

    const delegate = NSImageDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
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
  // delegate: NSImageDelegate;
  // imageTypes: NSArray;
  // imageUnfilteredTypes: NSArray;
  // cacheMode: interop.Enum<typeof NSImageCacheMode>;
  // alignmentRect: CGRect;
  // isTemplate: boolean;
  // capInsets: NSEdgeInsets;
  // resizingMode: interop.Enum<typeof NSImageResizingMode>;
  // readonly symbolConfiguration: NSImageSymbolConfiguration;
  // readonly locale: NSLocale;
}

export class HTMLNSToolbarElement extends HTMLNSObjectElement {
  readonly nativeObject = NSToolbar.new();

  constructor(){
    super();

    const delegate = NSToolbarDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // delegate: NSToolbarDelegate;
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
}

export class HTMLNSTabViewElement extends HTMLNSViewElement {
  readonly nativeObject = NSTabView.new();

  constructor(){
    super();

    const delegate = NSTabViewDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
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
  // delegate: NSTabViewDelegate;
  // readonly contentRect: CGRect;
  // readonly numberOfTabViewItems: number;
  // controlTint: interop.Enum<typeof NSControlTint>;
}

export class HTMLNSApplicationElement extends HTMLNSResponderElement {
  readonly nativeObject = NSApplication.sharedApplication;

  constructor(){
    super();

    const delegate = NSApplicationDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // sharedApplication: NSApplication;
  // delegate: NSApplicationDelegate;
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
}

export class HTMLNSTouchBarItemElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTouchBarItem.new();

  // readonly identifier: NSString;
  // visibilityPriority: number;
  // readonly view: NSView;
  // readonly viewController: NSViewController;
  // readonly customizationLabel: NSString;
  // readonly isVisible: boolean;
}

export class HTMLNSCollectionViewGridLayoutElement extends HTMLNSCollectionViewLayoutElement {
  readonly nativeObject = NSCollectionViewGridLayout.new();

  // margins: NSEdgeInsets;
  // minimumInteritemSpacing: number;
  // minimumLineSpacing: number;
  // maximumNumberOfRows: number;
  // maximumNumberOfColumns: number;
  // minimumItemSize: CGSize;
  // maximumItemSize: CGSize;
}

export class HTMLNSImageCellElement extends HTMLNSCellElement {
  readonly nativeObject = NSImageCell.new();

  // imageAlignment: interop.Enum<typeof NSImageAlignment>;
  // imageScaling: interop.Enum<typeof NSImageScaling>;
  // imageFrameStyle: interop.Enum<typeof NSImageFrameStyle>;
}

export class HTMLNSWindowControllerElement extends HTMLNSResponderElement {
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
  readonly nativeObject = NSTextFieldCell.new();

  // backgroundColor: NSColor;
  // drawsBackground: boolean;
  // textColor: NSColor;
  // bezelStyle: interop.Enum<typeof NSTextFieldBezelStyle>;
  // placeholderAttributedString: NSAttributedString;
}

export class HTMLNSSliderCellElement extends HTMLNSActionCellElement {

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
  readonly nativeObject = NSTokenFieldCell.new();

  constructor(){
    super();

    const delegate = NSTokenFieldCellDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // tokenStyle: interop.Enum<typeof NSTokenStyle>;
  // completionDelay: number;
  // defaultCompletionDelay: number;
  // tokenizingCharacterSet: NSCharacterSet;
  // defaultTokenizingCharacterSet: NSCharacterSet;
  // delegate: NSTokenFieldCellDelegate;
}

export class HTMLNSSharingServicePickerToolbarItemElement extends HTMLNSToolbarItemElement {
  readonly nativeObject = NSSharingServicePickerToolbarItem.new();

  // delegate: NSSharingServicePickerToolbarItemDelegate | null;
}

export class HTMLNSButtonTouchBarItemElement extends HTMLNSTouchBarItemElement {

  // @ts-ignore
  readonly nativeObject = NSButtonTouchBarItem.new();

  // image: NSImage;
  // bezelColor: NSColor;
  // target: interop.Object;
  // action: string;
  // isEnabled: boolean;
}

export class HTMLNSTextTableBlockElement extends HTMLNSTextBlockElement {
  readonly nativeObject = NSTextTableBlock.new();

  // readonly table: NSTextTable;
  // readonly startingRow: number;
  // readonly rowSpan: number;
  // readonly startingColumn: number;
  // readonly columnSpan: number;
}

export class HTMLNSComboBoxCellElement extends HTMLNSTextFieldCellElement {
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
  readonly nativeObject = NSSecureTextFieldCell.new();

  // echosBullets: boolean;
}

export class HTMLNSTrackingSeparatorToolbarItemElement extends HTMLNSToolbarItemElement {
  readonly nativeObject = NSTrackingSeparatorToolbarItem.new();

  // splitView: NSSplitView;
  // dividerIndex: number;
}

export class HTMLNSStepperCellElement extends HTMLNSActionCellElement {
  readonly nativeObject = NSStepperCell.new();

  // minValue: number;
  // maxValue: number;
  // increment: number;
  // valueWraps: boolean;
  // autorepeat: boolean;
}

export class HTMLNSPopoverTouchBarItemElement extends HTMLNSTouchBarItemElement {

  // @ts-ignore
  readonly nativeObject = NSPopoverTouchBarItem.new();

  // popoverTouchBar: NSTouchBar;
  // collapsedRepresentation: NSView;
  // collapsedRepresentationImage: NSImage;
  // pressAndHoldTouchBar: NSTouchBar;
  // showsCloseButton: boolean;
}

export class HTMLNSPersistentDocumentElement extends HTMLNSDocumentElement {

  // @ts-ignore
  readonly nativeObject = NSPersistentDocument.new();

  // managedObjectContext: NSManagedObjectContext;
  // readonly managedObjectModel: NSManagedObjectModel;
}

export class HTMLNSColorPickerTouchBarItemElement extends HTMLNSTouchBarItemElement {

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
  readonly nativeObject = NSEPSImageRep.new();

  // readonly boundingBox: CGRect;
  // readonly EPSRepresentation: NSData;
}

export class HTMLNSCIImageRepElement extends HTMLNSImageRepElement {
  readonly nativeObject = NSCIImageRep.new();

  // readonly CIImage: CIImage;
}

export class HTMLNSBitmapImageRepElement extends HTMLNSImageRepElement {
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

  // @ts-ignore
  readonly nativeObject = NSMutableFontCollection.new();

  // fontCollectionWithAllAvailableDescriptors: NSMutableFontCollection;
}

export class HTMLNSCollectionViewElement extends HTMLNSViewElement {
  readonly nativeObject = NSCollectionView.new();

  constructor(){
    super();

    const delegate = NSCollectionViewDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // dataSource: NSCollectionViewDataSource;
  // prefetchDataSource: NSCollectionViewPrefetching;
  // delegate: NSCollectionViewDelegate;
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
}

export class HTMLNSButtonCellElement extends HTMLNSActionCellElement {

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
  readonly nativeObject = NSTableCellView.new();

  // objectValue: interop.Object;
  // textField: NSTextField;
  // imageView: NSImageView;
  // backgroundStyle: interop.Enum<typeof NSBackgroundStyle>;
  // rowSizeStyle: interop.Enum<typeof NSTableViewRowSizeStyle>;
  // readonly draggingImageComponents: NSArray;
}

export class HTMLNSVisualEffectViewElement extends HTMLNSViewElement {
  readonly nativeObject = NSVisualEffectView.new();

  // material: interop.Enum<typeof NSVisualEffectMaterial>;
  // readonly interiorBackgroundStyle: interop.Enum<typeof NSBackgroundStyle>;
  // blendingMode: interop.Enum<typeof NSVisualEffectBlendingMode>;
  // state: interop.Enum<typeof NSVisualEffectState>;
  // maskImage: NSImage;
  // isEmphasized: boolean;
}

export class HTMLNSTableRowViewElement extends HTMLNSViewElement {
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

export class HTMLNSCollectionLayoutSpacingElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCollectionLayoutSpacing.new();

  // readonly spacing: number;
  // readonly isFlexibleSpacing: boolean;
  // readonly isFixedSpacing: boolean;
}

export class HTMLNSCachedImageRepElement extends HTMLNSImageRepElement {
  readonly nativeObject = NSCachedImageRep.new();

}

export class HTMLNSDockTileElement extends HTMLNSObjectElement {
  readonly nativeObject = NSDockTile.new();

  // readonly size: CGSize;
  // contentView: NSView;
  // showsApplicationBadge: boolean;
  // readonly owner: interop.Object | null;
}

export class HTMLNSAlertElement extends HTMLNSObjectElement {
  readonly nativeObject = NSAlert.new();

  constructor(){
    super();

    const delegate = NSAlertDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // icon: NSImage;
  // readonly buttons: NSArray;
  // alertStyle: interop.Enum<typeof NSAlertStyle>;
  // showsHelp: boolean;
  // delegate: NSAlertDelegate;
  // accessoryView: NSView;
  // showsSuppressionButton: boolean;
  // readonly suppressionButton: NSButton;
  // readonly window: NSWindow;
}

export class HTMLNSTextLineFragmentElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextLineFragment.new();

  // readonly attributedString: NSAttributedString;
  // readonly characterRange: _NSRange;
  // readonly typographicBounds: CGRect;
  // readonly glyphOrigin: CGPoint;
  // supportsSecureCoding: boolean;
}

export class HTMLNSTextSelectionElement extends HTMLNSObjectElement {
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
  readonly nativeObject = NSAlignmentFeedbackFilter.new();

  // inputEventMask: interop.Enum<typeof NSEventMask>;
}

export class HTMLNSParagraphStyleElement extends HTMLNSObjectElement {
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
  readonly nativeObject = NSDictionaryControllerKeyValuePair.new();

  // value: interop.Object;
  // readonly isExplicitlyIncluded: boolean;
}

export class HTMLNSOpenGLViewElement extends HTMLNSViewElement {
  readonly nativeObject = NSOpenGLView.new();

  // openGLContext: NSOpenGLContext;
  // pixelFormat: NSOpenGLPixelFormat;
  // wantsBestResolutionOpenGLSurface: boolean;
  // wantsExtendedDynamicRangeOpenGLSurface: boolean;
}

export class HTMLNSMovieElement extends HTMLNSObjectElement {
  readonly nativeObject = NSMovie.new();

}

export class HTMLNSDataAssetElement extends HTMLNSObjectElement {
  readonly nativeObject = NSDataAsset.new();

  // readonly name: NSString;
  // readonly data: NSData;
  // readonly typeIdentifier: NSString;
}

export class HTMLNSTableHeaderViewElement extends HTMLNSViewElement {
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
  readonly nativeObject = NSTextInsertionIndicator.new();

  // displayMode: interop.Enum<typeof NSTextInsertionIndicatorDisplayMode>;
  // color: NSColor;
  // automaticModeOptions: interop.Enum<typeof NSTextInsertionIndicatorAutomaticModeOptions>;
  // effectsViewInserter: (p1: NSView) => void;
}

export class HTMLNSSegmentedCellElement extends HTMLNSActionCellElement {
  readonly nativeObject = NSSegmentedCell.new();

  // segmentCount: number;
  // selectedSegment: number;
  // trackingMode: interop.Enum<typeof NSSegmentSwitchTracking>;
  // segmentStyle: interop.Enum<typeof NSSegmentStyle>;
}

export class HTMLNSSliderAccessoryBehaviorElement extends HTMLNSObjectElement {
  readonly nativeObject = NSSliderAccessoryBehavior.new();

  // automaticBehavior: NSSliderAccessoryBehavior;
  // valueStepBehavior: NSSliderAccessoryBehavior;
  // valueResetBehavior: NSSliderAccessoryBehavior;
}

export class HTMLNSInputServerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSInputServer.new();

}

export class HTMLNSFormCellElement extends HTMLNSActionCellElement {

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
  readonly nativeObject = NSLayoutAnchor.new();

  // readonly name: NSString;
  // readonly item: interop.Object;
  // readonly hasAmbiguousLayout: boolean;
  // readonly constraintsAffectingLayout: NSArray;
}

export class HTMLNSCollectionLayoutDimensionElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCollectionLayoutDimension.new();

  // readonly isFractionalWidth: boolean;
  // readonly isFractionalHeight: boolean;
  // readonly isAbsolute: boolean;
  // readonly isEstimated: boolean;
  // readonly dimension: number;
}

export class HTMLNSCollectionViewLayoutAttributesElement extends HTMLNSObjectElement {
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
  readonly nativeObject = NSUserInterfaceCompressionOptions.new();

  // readonly isEmpty: boolean;
  // hideImagesOption: NSUserInterfaceCompressionOptions;
  // hideTextOption: NSUserInterfaceCompressionOptions;
  // reduceMetricsOption: NSUserInterfaceCompressionOptions;
  // breakEqualWidthsOption: NSUserInterfaceCompressionOptions;
  // standardOptions: NSUserInterfaceCompressionOptions;
}

export class HTMLNSTextAttachmentCellElement extends HTMLNSCellElement {

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
  readonly nativeObject = NSAccessibilityCustomRotor.new();

  // type: interop.Enum<typeof NSAccessibilityCustomRotorType>;
  // itemSearchDelegate: NSAccessibilityCustomRotorItemSearchDelegate | null;
  // itemLoadingDelegate: NSAccessibilityElementLoading;
}

export class HTMLNSClipViewElement extends HTMLNSViewElement {
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
  readonly nativeObject = NSPopover.new();

  constructor(){
    super();

    const delegate = NSPopoverDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // delegate: NSPopoverDelegate;
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
}

export class HTMLNSCustomTouchBarItemElement extends HTMLNSTouchBarItemElement {

  // @ts-ignore
  readonly nativeObject = NSCustomTouchBarItem.new();

  // view: NSView;
  // viewController: NSViewController;
}

export class HTMLNSGestureRecognizerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSGestureRecognizer.new();

  constructor(){
    super();

    const delegate = NSGestureRecognizerDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // target: interop.Object;
  // action: string;
  // readonly state: interop.Enum<typeof NSGestureRecognizerState>;
  // delegate: NSGestureRecognizerDelegate;
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
}

export class HTMLNSStatusBarElement extends HTMLNSObjectElement {
  readonly nativeObject = NSStatusBar.new();

  // systemStatusBar: NSStatusBar;
  // readonly isVertical: boolean;
  // readonly thickness: number;
}

export class HTMLNSPDFInfoElement extends HTMLNSObjectElement {
  readonly nativeObject = NSPDFInfo.new();

  // URL: NSURL;
  // isFileExtensionHidden: boolean;
  // orientation: interop.Enum<typeof NSPaperOrientation>;
  // paperSize: CGSize;
  // readonly attributes: NSMutableDictionary;
}

export class HTMLNSTextTableElement extends HTMLNSTextBlockElement {
  readonly nativeObject = NSTextTable.new();

  // numberOfColumns: number;
  // layoutAlgorithm: interop.Enum<typeof NSTextTableLayoutAlgorithm>;
  // collapsesBorders: boolean;
  // hidesEmptyCells: boolean;
}

export class HTMLNSCollectionViewFlowLayoutInvalidationContextElement extends HTMLNSCollectionViewLayoutInvalidationContextElement {
  readonly nativeObject = NSCollectionViewFlowLayoutInvalidationContext.new();

  // invalidateFlowLayoutDelegateMetrics: boolean;
  // invalidateFlowLayoutAttributes: boolean;
}

export class HTMLNSPrintPanelElement extends HTMLNSObjectElement {
  readonly nativeObject = NSPrintPanel.new();

  // readonly accessoryControllers: NSArray;
  // options: interop.Enum<typeof NSPrintPanelOptions>;
  // readonly printInfo: NSPrintInfo;
}

export class HTMLNSDocumentControllerElement extends HTMLNSObjectElement {
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
  readonly nativeObject = NSTextFinder.new();

  // client: NSTextFinderClient;
  // findBarContainer: NSTextFinderBarContainer;
  // findIndicatorNeedsUpdate: boolean;
  // isIncrementalSearchingEnabled: boolean;
  // incrementalSearchingShouldDimContentView: boolean;
  // readonly incrementalMatchRanges: NSArray;
}

export class HTMLNSCollectionViewTransitionLayoutElement extends HTMLNSCollectionViewLayoutElement {
  readonly nativeObject = NSCollectionViewTransitionLayout.new();

  // transitionProgress: number;
  // readonly currentLayout: NSCollectionViewLayout;
  // readonly nextLayout: NSCollectionViewLayout;
}

export class HTMLNSToolbarItemGroupElement extends HTMLNSToolbarItemElement {
  readonly nativeObject = NSToolbarItemGroup.new();

  // controlRepresentation: interop.Enum<typeof NSToolbarItemGroupControlRepresentation>;
  // selectionMode: interop.Enum<typeof NSToolbarItemGroupSelectionMode>;
  // selectedIndex: number;
}

export class HTMLNSTableColumnElement extends HTMLNSObjectElement {
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
  readonly nativeObject = NSPICTImageRep.new();

  // readonly PICTRepresentation: NSData;
  // readonly boundingBox: CGRect;
}

export class HTMLNSWorkspaceOpenConfigurationElement extends HTMLNSObjectElement {
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
  readonly nativeObject = NSMediaLibraryBrowserController.new();

  // sharedMediaLibraryBrowserController: NSMediaLibraryBrowserController;
  // isVisible: boolean;
  // frame: CGRect;
  // mediaLibraries: interop.Enum<typeof NSMediaLibrary>;
}

export class HTMLNSPathControlItemElement extends HTMLNSObjectElement {
  readonly nativeObject = NSPathControlItem.new();

  // attributedTitle: NSAttributedString;
  // image: NSImage;
  // readonly URL: NSURL;
}

export class HTMLNSSliderTouchBarItemElement extends HTMLNSTouchBarItemElement {

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
  readonly nativeObject = NSTableHeaderCell.new();

}

export class HTMLNSMenuItemCellElement extends HTMLNSButtonCellElement {

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
  readonly nativeObject = NSPanGestureRecognizer.new();

  // buttonMask: number;
  // numberOfTouchesRequired: number;
}

export class HTMLNSClickGestureRecognizerElement extends HTMLNSGestureRecognizerElement {
  readonly nativeObject = NSClickGestureRecognizer.new();

  // buttonMask: number;
  // numberOfClicksRequired: number;
  // numberOfTouchesRequired: number;
}

export class HTMLNSLayoutYAxisAnchorElement extends HTMLNSLayoutAnchorElement {
  readonly nativeObject = NSLayoutYAxisAnchor.new();

}

export class HTMLNSMagnificationGestureRecognizerElement extends HTMLNSGestureRecognizerElement {
  readonly nativeObject = NSMagnificationGestureRecognizer.new();

  // magnification: number;
}

export class HTMLNSCandidateListTouchBarItemElement extends HTMLNSTouchBarItemElement {

  // @ts-ignore
  readonly nativeObject = NSCandidateListTouchBarItem.new();

  constructor(){
    super();

    const delegate = NSCandidateListTouchBarItemDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // client: NSView;
  // delegate: NSCandidateListTouchBarItemDelegate;
  // isCollapsed: boolean;
  // allowsCollapsing: boolean;
  // readonly isCandidateListVisible: boolean;
  // allowsTextInputContextCandidates: boolean;
  // attributedStringForCandidate: (p1: interop.Object, p2: number) => NSAttributedString;
  // readonly candidates: NSArray;
}

export class HTMLNSCollectionViewFlowLayoutElement extends HTMLNSCollectionViewLayoutElement {
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

export class HTMLNSSearchToolbarItemElement extends HTMLNSToolbarItemElement {
  readonly nativeObject = NSSearchToolbarItem.new();

  // searchField: NSSearchField;
  // resignsFirstResponderWithCancel: boolean;
  // preferredWidthForSearchField: number;
}

export class HTMLNSPickerTouchBarItemElement extends HTMLNSTouchBarItemElement {

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
  readonly nativeObject = NSSplitView.new();

  constructor(){
    super();

    const delegate = NSSplitViewDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // isVertical: boolean;
  // dividerStyle: interop.Enum<typeof NSSplitViewDividerStyle>;
  // delegate: NSSplitViewDelegate;
  // readonly dividerColor: NSColor;
  // readonly dividerThickness: number;
  // arrangesAllSubviews: boolean;
  // readonly arrangedSubviews: NSArray;
}

export class HTMLNSLayoutDimensionElement extends HTMLNSLayoutAnchorElement {
  readonly nativeObject = NSLayoutDimension.new();

}

export class HTMLNSDatePickerCellElement extends HTMLNSActionCellElement {
  readonly nativeObject = NSDatePickerCell.new();

  constructor(){
    super();

    const delegate = NSDatePickerCellDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
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
  // delegate: NSDatePickerCellDelegate;
}

export class HTMLNSViewControllerElement extends HTMLNSResponderElement {
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
  readonly nativeObject = NSPressGestureRecognizer.new();

  // buttonMask: number;
  // minimumPressDuration: number;
  // allowableMovement: number;
  // numberOfTouchesRequired: number;
}

export class HTMLNSPopUpButtonCellElement extends HTMLNSMenuItemCellElement {
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

  // @ts-ignore
  readonly nativeObject = NSText.new();

  constructor(){
    super();

    const delegate = NSTextDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // delegate: NSTextDelegate;
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
}

export class HTMLNSRulerViewElement extends HTMLNSViewElement {
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

export class HTMLNSTextViewportLayoutControllerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextViewportLayoutController.new();

  constructor(){
    super();

    const delegate = NSTextViewportLayoutControllerDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // delegate: NSTextViewportLayoutControllerDelegate;
  // readonly textLayoutManager: NSTextLayoutManager | null;
  // readonly viewportBounds: CGRect;
  // readonly viewportRange: NSTextRange;
}

export class HTMLNSTintConfigurationElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTintConfiguration.new();

  // defaultTintConfiguration: NSTintConfiguration;
  // monochromeTintConfiguration: NSTintConfiguration;
  // readonly baseTintColor: NSColor;
  // readonly equivalentContentTintColor: NSColor;
  // readonly adaptsToUserAccentColor: boolean;
  // supportsSecureCoding: boolean;
}

export class HTMLNSUserDefaultsControllerElement extends HTMLNSControllerElement {
  readonly nativeObject = NSUserDefaultsController.new();

  // sharedUserDefaultsController: NSUserDefaultsController;
  // readonly defaults: NSUserDefaults;
  // appliesImmediately: boolean;
  // readonly hasUnappliedChanges: boolean;
  // readonly values: interop.Object;
}

export class HTMLNSOpenGLContextElement extends HTMLNSObjectElement {
  readonly nativeObject = NSOpenGLContext.new();

  // readonly pixelFormat: NSOpenGLPixelFormat;
  // view: NSView;
  // currentContext: NSOpenGLContext;
  // currentVirtualScreen: number;
  // readonly CGLContextObj: interop.Pointer;
}

export class HTMLNSProgressIndicatorElement extends HTMLNSViewElement {

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
  readonly nativeObject = NSScrubberArrangedView.new();

  // isSelected: boolean;
  // isHighlighted: boolean;
}

export class HTMLNSLayoutConstraintElement extends HTMLNSObjectElement {
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
  readonly nativeObject = NSSpeechSynthesizer.new();

  constructor(){
    super();

    const delegate = NSSpeechSynthesizerDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // readonly isSpeaking: boolean;
  // delegate: NSSpeechSynthesizerDelegate;
  // rate: number;
  // volume: number;
  // usesFeedbackWindow: boolean;
  // isAnyApplicationSpeaking: boolean;
  // defaultVoice: NSString;
  // availableVoices: NSArray;
}

export class HTMLNSMutableParagraphStyleElement extends HTMLNSParagraphStyleElement {

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
  readonly nativeObject = NSStoryboard.new();

  // mainStoryboard: NSStoryboard;
}

export class HTMLNSCollectionLayoutItemElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCollectionLayoutItem.new();

  // contentInsets: NSDirectionalEdgeInsets;
  // edgeSpacing: NSCollectionLayoutEdgeSpacing;
  // readonly layoutSize: NSCollectionLayoutSize;
  // readonly supplementaryItems: NSArray;
}

export class HTMLNSCollectionLayoutSectionElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCollectionLayoutSection.new();

  // contentInsets: NSDirectionalEdgeInsets;
  // interGroupSpacing: number;
  // orthogonalScrollingBehavior: interop.Enum<typeof NSCollectionLayoutSectionOrthogonalScrollingBehavior>;
  // supplementariesFollowContentInsets: boolean;
  // visibleItemsInvalidationHandler: (p1: NSArray | unknown[], p2: CGPoint, p3: NSCollectionLayoutEnvironment) => void;
}

export class HTMLNSGroupTouchBarItemElement extends HTMLNSTouchBarItemElement {

  // @ts-ignore
  readonly nativeObject = NSGroupTouchBarItem.new();

  // groupTouchBar: NSTouchBar;
  // groupUserInterfaceLayoutDirection: interop.Enum<typeof NSUserInterfaceLayoutDirection>;
  // prefersEqualWidths: boolean;
  // preferredItemWidth: number;
  // readonly effectiveCompressionOptions: NSUserInterfaceCompressionOptions;
}

export class HTMLNSMenuElement extends HTMLNSObjectElement {
  readonly nativeObject = NSMenu.new();

  constructor(){
    super();

    const delegate = NSMenuDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // supermenu: NSMenu;
  // readonly numberOfItems: number;
  // autoenablesItems: boolean;
  // delegate: NSMenuDelegate;
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
}

export class HTMLNSScrubberProportionalLayoutElement extends HTMLNSScrubberLayoutElement {
  readonly nativeObject = NSScrubberProportionalLayout.new();

  // numberOfVisibleItems: number;
}

export class HTMLNSTextContainerElement extends HTMLNSObjectElement {
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

  // @ts-ignore
  readonly nativeObject = NSPanel.new();

  // isFloatingPanel: boolean;
  // becomesKeyOnlyIfNeeded: boolean;
  // worksWhenModal: boolean;
}

export class HTMLNSTitlebarAccessoryViewControllerElement extends HTMLNSViewControllerElement {
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
  readonly nativeObject = NSRotationGestureRecognizer.new();

  // rotation: number;
  // rotationInDegrees: number;
}

export class HTMLNSDraggingItemElement extends HTMLNSObjectElement {
  readonly nativeObject = NSDraggingItem.new();

  // readonly item: interop.Object;
  // draggingFrame: CGRect;
  // imageComponentsProvider: () => NSArray;
  // readonly imageComponents: NSArray;
}

export class HTMLNSCollectionViewCompositionalLayoutElement extends HTMLNSCollectionViewLayoutElement {
  readonly nativeObject = NSCollectionViewCompositionalLayout.new();

  // configuration: NSCollectionViewCompositionalLayoutConfiguration;
}

export class HTMLNSTrackingAreaElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTrackingArea.new();

  // readonly rect: CGRect;
  // readonly options: interop.Enum<typeof NSTrackingAreaOptions>;
  // readonly owner: interop.Object;
  // readonly userInfo: NSDictionary;
}

export class HTMLNSCollectionLayoutSupplementaryItemElement extends HTMLNSCollectionLayoutItemElement {
  readonly nativeObject = NSCollectionLayoutSupplementaryItem.new();

  // zIndex: number;
  // readonly elementKind: NSString;
  // readonly containerAnchor: NSCollectionLayoutAnchor;
  // readonly itemAnchor: NSCollectionLayoutAnchor;
}

export class HTMLNSCollectionViewItemElement extends HTMLNSViewControllerElement {
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

  // @ts-ignore
  readonly nativeObject = NSDictionaryController.new();

  // initialValue: interop.Object;
}

export class HTMLNSSavePanelElement extends HTMLNSPanelElement {

  // @ts-ignore
  readonly nativeObject = NSSavePanel.new();

  constructor(){
    super();

    const delegate = NSOpenSavePanelDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // readonly URL: NSURL;
  // directoryURL: NSURL;
  // allowsOtherFileTypes: boolean;
  // accessoryView: NSView;
  // delegate: NSOpenSavePanelDelegate;
  // readonly isExpanded: boolean;
  // canCreateDirectories: boolean;
  // canSelectHiddenExtension: boolean;
  // isExtensionHidden: boolean;
  // treatsFilePackagesAsDirectories: boolean;
  // showsHiddenFiles: boolean;
  // showsTagField: boolean;
}

export class HTMLNSCollectionLayoutDecorationItemElement extends HTMLNSCollectionLayoutItemElement {
  readonly nativeObject = NSCollectionLayoutDecorationItem.new();

  // zIndex: number;
  // readonly elementKind: NSString;
}

export class HTMLNSSplitViewControllerElement extends HTMLNSViewControllerElement {
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

  // @ts-ignore
  readonly nativeObject = NSFontPanel.new();

  // sharedFontPanel: NSFontPanel;
  // sharedFontPanelExists: boolean;
  // accessoryView: NSView;
  // worksWhenModal: boolean;
  // isEnabled: boolean;
}

export class HTMLNSScrubberItemViewElement extends HTMLNSScrubberArrangedViewElement {
  readonly nativeObject = NSScrubberItemView.new();

}

export class HTMLNSCollectionLayoutBoundarySupplementaryItemElement extends HTMLNSCollectionLayoutSupplementaryItemElement {
  readonly nativeObject = NSCollectionLayoutBoundarySupplementaryItem.new();

  // extendsBoundary: boolean;
  // pinToVisibleBounds: boolean;
  // readonly alignment: interop.Enum<typeof NSRectAlignment>;
  // readonly offset: CGPoint;
}

export class HTMLNSPathComponentCellElement extends HTMLNSTextFieldCellElement {
  readonly nativeObject = NSPathComponentCell.new();

  // image: NSImage;
  // URL: NSURL;
}

export class HTMLNSScrubberElement extends HTMLNSViewElement {
  readonly nativeObject = NSScrubber.new();

  constructor(){
    super();

    const delegate = NSScrubberDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // dataSource: NSScrubberDataSource;
  // delegate: NSScrubberDelegate;
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
}

export class HTMLNSControlElement extends HTMLNSViewElement {

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
  readonly nativeObject = NSStackView.new();

  constructor(){
    super();

    const delegate = NSStackViewDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // delegate: NSStackViewDelegate;
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
}

export class HTMLNSColorWellElement extends HTMLNSControlElement {
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

export class HTMLNSTextAlternativesElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextAlternatives.new();

  // readonly primaryString: NSString;
  // readonly alternativeStrings: NSArray;
  // supportsSecureCoding: boolean;
}

export class HTMLNSSoundElement extends HTMLNSObjectElement {
  readonly nativeObject = NSSound.new();

  constructor(){
    super();

    const delegate = NSSoundDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // readonly name: NSString;
  // soundUnfilteredTypes: NSArray;
  // readonly isPlaying: boolean;
  // delegate: NSSoundDelegate;
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
}

export class HTMLNSGridRowElement extends HTMLNSObjectElement {
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
  readonly nativeObject = NSCollectionLayoutAnchor.new();

  // readonly edges: interop.Enum<typeof NSDirectionalRectEdge>;
  // readonly offset: CGPoint;
  // readonly isAbsoluteOffset: boolean;
  // readonly isFractionalOffset: boolean;
}

export class HTMLNSColorElement extends HTMLNSObjectElement {
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

  // @ts-ignore
  readonly nativeObject = NSCollectionLayoutGroup.new();

  // interItemSpacing: NSCollectionLayoutSpacing;
  // readonly subitems: NSArray;
}

export class HTMLNSLayoutGuideElement extends HTMLNSObjectElement {
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
  readonly nativeObject = NSFilePromiseProvider.new();

  constructor(){
    super();

    const delegate = NSFilePromiseProviderDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // delegate: NSFilePromiseProviderDelegate;
  // userInfo: interop.Object;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
}

export class HTMLNSLevelIndicatorCellElement extends HTMLNSActionCellElement {
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
  readonly nativeObject = NSDatePicker.new();

  constructor(){
    super();

    const delegate = NSDatePickerCellDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
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
  // delegate: NSDatePickerCellDelegate;
}

export class HTMLNSScrubberImageItemViewElement extends HTMLNSScrubberItemViewElement {
  readonly nativeObject = NSScrubberImageItemView.new();

  // readonly imageView: NSImageView;
  // image: NSImage;
  // imageAlignment: interop.Enum<typeof NSImageAlignment>;
}

export class HTMLNSMatrixElement extends HTMLNSControlElement {
  readonly nativeObject = NSMatrix.new();

  constructor(){
    super();

    const delegate = NSMatrixDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
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
  // delegate: NSMatrixDelegate;
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
  readonly nativeObject = NSRuleEditor.new();

  constructor(){
    super();

    const delegate = NSRuleEditorDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // delegate: NSRuleEditorDelegate;
  // nestingMode: interop.Enum<typeof NSRuleEditorNestingMode>;
  // rowHeight: number;
  // isEditable: boolean;
  // canRemoveAllRows: boolean;
  // readonly predicate: NSPredicate;
  // readonly numberOfRows: number;
  // readonly selectedRowIndexes: NSIndexSet;
  // rowClass: interop.Object;
}

export class HTMLNSSegmentedControlElement extends HTMLNSControlElement {
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

export class HTMLNSPathControlElement extends HTMLNSControlElement {
  readonly nativeObject = NSPathControl.new();

  constructor(){
    super();

    const delegate = NSPathControlDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // isEditable: boolean;
  // placeholderAttributedString: NSAttributedString;
  // URL: NSURL;
  // doubleAction: string;
  // pathStyle: interop.Enum<typeof NSPathStyle>;
  // readonly clickedPathItem: NSPathControlItem;
  // backgroundColor: NSColor;
  // delegate: NSPathControlDelegate;
  // menu: NSMenu;
}

export class HTMLNSBrowserElement extends HTMLNSControlElement {

  // @ts-ignore
  readonly nativeObject = NSBrowser.new();

  constructor(){
    super();

    const delegate = NSBrowserDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // cellClass: interop.Object;
  // readonly isLoaded: boolean;
  // doubleAction: string;
  // cellPrototype: interop.Object;
  // delegate: NSBrowserDelegate;
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
}

export class HTMLNSLevelIndicatorElement extends HTMLNSControlElement {
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

export class HTMLNSComboButtonElement extends HTMLNSControlElement {
  readonly nativeObject = NSComboButton.new();

  // image: NSImage;
  // imageScaling: interop.Enum<typeof NSImageScaling>;
  // menu: NSMenu;
  // style: interop.Enum<typeof NSComboButtonStyle>;
}

export class HTMLNSFormElement extends HTMLNSMatrixElement {
  readonly nativeObject = NSForm.new();

}

export class HTMLNSImageViewElement extends HTMLNSControlElement {
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

export class HTMLNSColorPanelElement extends HTMLNSPanelElement {
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

export class HTMLNSTableViewElement extends HTMLNSControlElement {

  // @ts-ignore
  readonly nativeObject = NSTableView.new();

  constructor(){
    super();

    const delegate = NSTableViewDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // dataSource: NSTableViewDataSource;
  // delegate: NSTableViewDelegate;
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
}

export class HTMLNSLayoutXAxisAnchorElement extends HTMLNSLayoutAnchorElement {
  readonly nativeObject = NSLayoutXAxisAnchor.new();

}

export class HTMLNSScrubberSelectionViewElement extends HTMLNSScrubberArrangedViewElement {
  readonly nativeObject = NSScrubberSelectionView.new();

}

export class HTMLNSDiffableDataSourceSnapshotElement extends HTMLNSObjectElement {
  readonly nativeObject = NSDiffableDataSourceSnapshot.new();

  // readonly numberOfItems: number;
  // readonly numberOfSections: number;
  // readonly sectionIdentifiers: NSArray;
  // readonly itemIdentifiers: NSArray;
}

export class HTMLNSSearchFieldCellElement extends HTMLNSTextFieldCellElement {
  readonly nativeObject = NSSearchFieldCell.new();

  // searchButtonCell: NSButtonCell;
  // cancelButtonCell: NSButtonCell;
  // searchMenuTemplate: NSMenu;
  // sendsWholeSearchString: boolean;
  // maximumRecents: number;
  // sendsSearchStringImmediately: boolean;
}

export class HTMLNSDraggingImageComponentElement extends HTMLNSObjectElement {
  readonly nativeObject = NSDraggingImageComponent.new();

  // contents: interop.Object;
  // frame: CGRect;
}

export class HTMLNSRunningApplicationElement extends HTMLNSObjectElement {
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

export class HTMLNSAnimationElement extends HTMLNSObjectElement {
  readonly nativeObject = NSAnimation.new();

  constructor(){
    super();

    const delegate = NSAnimationDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // readonly isAnimating: boolean;
  // currentProgress: number;
  // duration: number;
  // animationBlockingMode: interop.Enum<typeof NSAnimationBlockingMode>;
  // frameRate: number;
  // animationCurve: interop.Enum<typeof NSAnimationCurve>;
  // readonly currentValue: number;
  // delegate: NSAnimationDelegate;
  // readonly runLoopModesForAnimating: NSArray;
}

export class HTMLNSSpellCheckerElement extends HTMLNSObjectElement {
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

export class HTMLNSOutlineViewElement extends HTMLNSTableViewElement {

  // @ts-ignore
  readonly nativeObject = NSOutlineView.new();

  constructor(){
    super();

    const delegate = NSOutlineViewDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // delegate: NSOutlineViewDelegate;
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
}

export class HTMLNSSliderElement extends HTMLNSControlElement {
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

export class HTMLNSPredicateEditorElement extends HTMLNSRuleEditorElement {
  readonly nativeObject = NSPredicateEditor.new();

}

export class HTMLNSTextFieldElement extends HTMLNSControlElement {

  // @ts-ignore
  readonly nativeObject = NSTextField.new();

  constructor(){
    super();

    const delegate = NSTextFieldDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // placeholderAttributedString: NSAttributedString;
  // backgroundColor: NSColor;
  // drawsBackground: boolean;
  // textColor: NSColor;
  // isBordered: boolean;
  // isBezeled: boolean;
  // isEditable: boolean;
  // isSelectable: boolean;
  // delegate: NSTextFieldDelegate;
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
}

export class HTMLNSScrubberTextItemViewElement extends HTMLNSScrubberItemViewElement {
  readonly nativeObject = NSScrubberTextItemView.new();

  // readonly textField: NSTextField;
}

export class HTMLNSButtonElement extends HTMLNSControlElement {

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

export class HTMLNSSharingServicePickerTouchBarItemElement extends HTMLNSTouchBarItemElement {
  readonly nativeObject = NSSharingServicePickerTouchBarItem.new();

  // delegate: NSSharingServicePickerTouchBarItemDelegate | null;
  // isEnabled: boolean;
  // buttonImage: NSImage;
}

export class HTMLNSSwitchElement extends HTMLNSControlElement {

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

export class HTMLNSTextParagraphElement extends HTMLNSTextElementElement {
  readonly nativeObject = NSTextParagraph.new();

  // readonly attributedString: NSAttributedString;
  // readonly paragraphContentRange: NSTextRange;
  // readonly paragraphSeparatorRange: NSTextRange;
}

export class HTMLNSPageControllerElement extends HTMLNSViewControllerElement {
  readonly nativeObject = NSPageController.new();

  constructor(){
    super();

    const delegate = NSPageControllerDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // delegate: NSPageControllerDelegate;
  // readonly selectedViewController: NSViewController;
  // transitionStyle: interop.Enum<typeof NSPageControllerTransitionStyle>;
  // selectedIndex: number;
}

export class HTMLNSTextListElementElement extends HTMLNSTextParagraphElement {

  // @ts-ignore
  readonly nativeObject = NSTextListElement.new();

  // readonly textList: NSTextList;
  // readonly contents: NSAttributedString;
  // readonly markerAttributes: NSDictionary;
  // readonly attributedString: NSAttributedString;
  // readonly childElements: NSArray;
  // readonly parentElement: NSTextListElement;
}

export class HTMLNSComboBoxElement extends HTMLNSTextFieldElement {

  // @ts-ignore
  readonly nativeObject = NSComboBox.new();

  constructor(){
    super();

    const delegate = NSComboBoxDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
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
  // delegate: NSComboBoxDelegate;
  // dataSource: NSComboBoxDataSource;
  // readonly objectValueOfSelectedItem: interop.Object;
  // readonly objectValues: NSArray;
}

export class HTMLNSSecureTextFieldElement extends HTMLNSTextFieldElement {
  readonly nativeObject = NSSecureTextField.new();

}

export class HTMLNSPopUpButtonElement extends HTMLNSButtonElement {

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

export class HTMLNSScrollerElement extends HTMLNSControlElement {
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

export class HTMLNSViewAnimationElement extends HTMLNSAnimationElement {
  readonly nativeObject = NSViewAnimation.new();

}

export class HTMLNSTabViewControllerElement extends HTMLNSViewControllerElement {
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

export class HTMLNSOpenPanelElement extends HTMLNSSavePanelElement {
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

export class HTMLNSTokenFieldElement extends HTMLNSTextFieldElement {

  // @ts-ignore
  readonly nativeObject = NSTokenField.new();

  constructor(){
    super();

    const delegate = NSTokenFieldDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // delegate: NSTokenFieldDelegate;
  // tokenStyle: interop.Enum<typeof NSTokenStyle>;
  // completionDelay: number;
  // defaultCompletionDelay: number;
  // tokenizingCharacterSet: NSCharacterSet;
  // defaultTokenizingCharacterSet: NSCharacterSet;
}

export class HTMLNSSearchFieldElement extends HTMLNSTextFieldElement {

  // @ts-ignore
  readonly nativeObject = NSSearchField.new();

  constructor(){
    super();

    const delegate = NSSearchFieldDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // readonly searchTextBounds: CGRect;
  // readonly searchButtonBounds: CGRect;
  // readonly cancelButtonBounds: CGRect;
  // searchMenuTemplate: NSMenu;
  // sendsWholeSearchString: boolean;
  // maximumRecents: number;
  // sendsSearchStringImmediately: boolean;
  // delegate: NSSearchFieldDelegate;
  // centersPlaceholder: boolean;
}

export class HTMLNSStepperElement extends HTMLNSControlElement {
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

export class HTMLNSTextContentStorageElement extends HTMLNSTextContentManagerElement {

  // @ts-ignore
  readonly nativeObject = NSTextContentStorage.new();

  constructor(){
    super();

    const delegate = NSTextContentStorageDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
  }

  // delegate: NSTextContentStorageDelegate;
  // attributedString: NSAttributedString;
  // textStorage: NSTextStorage;
  // readonly hash: number;
  // readonly superclass: interop.Object;
  // readonly isProxy: boolean;
  // readonly zone: interop.Pointer;
  // readonly description: NSString;
  // readonly debugDescription: NSString;
}

export class HTMLNSStatusBarButtonElement extends HTMLNSButtonElement {
  readonly nativeObject = NSStatusBarButton.new();

  // appearsDisabled: boolean;
}

export class HTMLNSPDFImageRepElement extends HTMLNSImageRepElement {
  readonly nativeObject = NSPDFImageRep.new();

  // readonly PDFRepresentation: NSData;
  // readonly bounds: CGRect;
  // currentPage: number;
  // readonly pageCount: number;
}

export class HTMLNSTextViewElement extends HTMLNSTextElement {

  // @ts-ignore
  readonly nativeObject = NSTextView.new();

  constructor(){
    super();

    const delegate = NSTextViewDelegateImpl.new();
    delegate.eventTargetDelegate = new WeakRef(this);
    this.nativeObject.delegate = delegate;
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
  // delegate: NSTextViewDelegate;
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
}

// Delegates

export class NSScrubberDelegateImpl extends NSObject implements NSScrubberDelegate {

  static ObjCProtocols = [NSScrubberDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // scrubberDidSelectItemAtIndex?(scrubber: NSScrubber, selectedIndex: number): void;
  // scrubberDidHighlightItemAtIndex?(scrubber: NSScrubber, highlightedIndex: number): void;
  // scrubberDidChangeVisibleRange?(scrubber: NSScrubber, visibleRange: _NSRange): void;
  // didBeginInteractingWithScrubber?(scrubber: NSScrubber): void;
  // didFinishInteractingWithScrubber?(scrubber: NSScrubber): void;
  // didCancelInteractingWithScrubber?(scrubber: NSScrubber): void;
}

export class NSTableViewDelegateImpl extends NSObject implements NSTableViewDelegate {

  static ObjCProtocols = [NSTableViewDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // tableViewViewForTableColumnRow?(tableView: NSTableView, tableColumn: NSTableColumn | null, row: number): NSView;
  // tableViewRowViewForRow?(tableView: NSTableView, row: number): NSTableRowView;
  // tableViewDidAddRowViewForRow?(tableView: NSTableView, rowView: NSTableRowView, row: number): void;
  // tableViewDidRemoveRowViewForRow?(tableView: NSTableView, rowView: NSTableRowView, row: number): void;
  // tableViewWillDisplayCellForTableColumnRow?(tableView: NSTableView, cell: interop.Object, tableColumn: NSTableColumn | null, row: number): void;
  // tableViewShouldEditTableColumnRow?(tableView: NSTableView, tableColumn: NSTableColumn | null, row: number): boolean;
  // tableViewToolTipForCellRectTableColumnRowMouseLocation?(tableView: NSTableView, cell: NSCell, rect: interop.PointerConvertible, tableColumn: NSTableColumn | null, row: number, mouseLocation: CGPoint): NSString;
  // tableViewShouldShowCellExpansionForTableColumnRow?(tableView: NSTableView, tableColumn: NSTableColumn | null, row: number): boolean;
  // tableViewShouldTrackCellForTableColumnRow?(tableView: NSTableView, cell: NSCell, tableColumn: NSTableColumn | null, row: number): boolean;
  // tableViewDataCellForTableColumnRow?(tableView: NSTableView, tableColumn: NSTableColumn | null, row: number): NSCell;
  // selectionShouldChangeInTableView?(tableView: NSTableView): boolean;
  // tableViewShouldSelectRow?(tableView: NSTableView, row: number): boolean;
  // tableViewSelectionIndexesForProposedSelection?(tableView: NSTableView, proposedSelectionIndexes: NSIndexSet): NSIndexSet;
  // tableViewShouldSelectTableColumn?(tableView: NSTableView, tableColumn: NSTableColumn | null): boolean;
  // tableViewMouseDownInHeaderOfTableColumn?(tableView: NSTableView, tableColumn: NSTableColumn): void;
  // tableViewDidClickTableColumn?(tableView: NSTableView, tableColumn: NSTableColumn): void;
  // tableViewDidDragTableColumn?(tableView: NSTableView, tableColumn: NSTableColumn): void;
  // tableViewHeightOfRow?(tableView: NSTableView, row: number): number;
  // tableViewTypeSelectStringForTableColumnRow?(tableView: NSTableView, tableColumn: NSTableColumn | null, row: number): NSString;
  // tableViewNextTypeSelectMatchFromRowToRowForString?(tableView: NSTableView, startRow: number, endRow: number, searchString: NSString | string): number;
  // tableViewShouldTypeSelectForEventWithCurrentSearchString?(tableView: NSTableView, event: NSEvent, searchString: NSString | string | null): boolean;
  // tableViewIsGroupRow?(tableView: NSTableView, row: number): boolean;
  // tableViewSizeToFitWidthOfColumn?(tableView: NSTableView, column: number): number;
  // tableViewShouldReorderColumnToColumn?(tableView: NSTableView, columnIndex: number, newColumnIndex: number): boolean;
  // tableViewRowActionsForRowEdge?(tableView: NSTableView, row: number, edge: interop.Enum<typeof NSTableRowActionEdge>): NSArray;
  // tableViewUserCanChangeVisibilityOfTableColumn?(tableView: NSTableView, column: NSTableColumn): boolean;
  // tableViewUserDidChangeVisibilityOfTableColumns?(tableView: NSTableView, columns: NSArray | unknown[]): void;
  // tableViewSelectionDidChange?(notification: NSNotification): void;
  // tableViewColumnDidMove?(notification: NSNotification): void;
  // tableViewColumnDidResize?(notification: NSNotification): void;
  // tableViewSelectionIsChanging?(notification: NSNotification): void;
}

export class NSSharingServicePickerTouchBarItemDelegateImpl extends NSObject implements NSSharingServicePickerTouchBarItemDelegate {

  static ObjCProtocols = [NSSharingServicePickerTouchBarItemDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // itemsForSharingServicePickerTouchBarItem(pickerTouchBarItem: NSSharingServicePickerTouchBarItem): NSArray;
}

export class NSDrawerDelegateImpl extends NSObject implements NSDrawerDelegate {

  static ObjCProtocols = [NSDrawerDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // drawerShouldOpen?(sender: NSDrawer): boolean;
  // drawerShouldClose?(sender: NSDrawer): boolean;
  // drawerWillResizeContentsToSize?(sender: NSDrawer, contentSize: CGSize): CGSize;
  // drawerWillOpen?(notification: NSNotification): void;
  // drawerDidOpen?(notification: NSNotification): void;
  // drawerWillClose?(notification: NSNotification): void;
  // drawerDidClose?(notification: NSNotification): void;
}

export class NSImageDelegateImpl extends NSObject implements NSImageDelegate {

  static ObjCProtocols = [NSImageDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // imageDidNotDrawInRect?(sender: NSImage, rect: CGRect): NSImage;
  // imageWillLoadRepresentation?(image: NSImage, rep: NSImageRep): void;
  // imageDidLoadRepresentationHeader?(image: NSImage, rep: NSImageRep): void;
  // imageDidLoadPartOfRepresentationWithValidRows?(image: NSImage, rep: NSImageRep, rows: number): void;
  // imageDidLoadRepresentationWithStatus?(image: NSImage, rep: NSImageRep, status: interop.Enum<typeof NSImageLoadStatus>): void;
}

export class NSMenuDelegateImpl extends NSObject implements NSMenuDelegate {

  static ObjCProtocols = [NSMenuDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // menuNeedsUpdate?(menu: NSMenu): void;
  // numberOfItemsInMenu?(menu: NSMenu): number;
  // menuUpdateItemAtIndexShouldCancel?(menu: NSMenu, item: NSMenuItem, index: number, shouldCancel: boolean): boolean;
  // menuHasKeyEquivalentForEventTargetAction?(menu: NSMenu, event: NSEvent, target: interop.PointerConvertible, action: interop.PointerConvertible): boolean;
  // menuWillOpen?(menu: NSMenu): void;
  // menuDidClose?(menu: NSMenu): void;
  // menuWillHighlightItem?(menu: NSMenu, item: NSMenuItem | null): void;
  // confinementRectForMenuOnScreen?(menu: NSMenu, screen: NSScreen | null): CGRect;
}

export class NSStackViewDelegateImpl extends NSObject implements NSStackViewDelegate {

  static ObjCProtocols = [NSStackViewDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // stackViewWillDetachViews?(stackView: NSStackView, views: NSArray | unknown[]): void;
  // stackViewDidReattachViews?(stackView: NSStackView, views: NSArray | unknown[]): void;
}

export class NSViewLayerContentScaleDelegateImpl extends NSObject implements NSViewLayerContentScaleDelegate {

  static ObjCProtocols = [NSViewLayerContentScaleDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // layerShouldInheritContentsScaleFromWindow?(layer: CALayer, newScale: number, window: NSWindow): boolean;
}

export class NSTextContentStorageDelegateImpl extends NSObject implements NSTextContentStorageDelegate {

  static ObjCProtocols = [NSTextContentStorageDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // textContentStorageTextParagraphWithRange?(textContentStorage: NSTextContentStorage, range: _NSRange): NSTextParagraph;
}

export class NSTextViewportLayoutControllerDelegateImpl extends NSObject implements NSTextViewportLayoutControllerDelegate {

  static ObjCProtocols = [NSTextViewportLayoutControllerDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // viewportBoundsForTextViewportLayoutController(textViewportLayoutController: NSTextViewportLayoutController): CGRect;
  // textViewportLayoutControllerConfigureRenderingSurfaceForTextLayoutFragment(textViewportLayoutController: NSTextViewportLayoutController, textLayoutFragment: NSTextLayoutFragment): void;
  // textViewportLayoutControllerWillLayout?(textViewportLayoutController: NSTextViewportLayoutController): void;
  // textViewportLayoutControllerDidLayout?(textViewportLayoutController: NSTextViewportLayoutController): void;
}

export class NSRuleEditorDelegateImpl extends NSObject implements NSRuleEditorDelegate {

  static ObjCProtocols = [NSRuleEditorDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // ruleEditorNumberOfChildrenForCriterionWithRowType(editor: NSRuleEditor, criterion: interop.Object | null, rowType: interop.Enum<typeof NSRuleEditorRowType>): number;
  // ruleEditorChildForCriterionWithRowType(editor: NSRuleEditor, index: number, criterion: interop.Object | null, rowType: interop.Enum<typeof NSRuleEditorRowType>): interop.Object;
  // ruleEditorDisplayValueForCriterionInRow(editor: NSRuleEditor, criterion: interop.Object, row: number): interop.Object;
  // ruleEditorPredicatePartsForCriterionWithDisplayValueInRow?(editor: NSRuleEditor, criterion: interop.Object, value: interop.Object, row: number): NSDictionary;
  // ruleEditorRowsDidChange?(notification: NSNotification): void;
}

export class NSPageControllerDelegateImpl extends NSObject implements NSPageControllerDelegate {

  static ObjCProtocols = [NSPageControllerDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // pageControllerIdentifierForObject?(pageController: NSPageController, object: interop.Object): NSString;
  // pageControllerViewControllerForIdentifier?(pageController: NSPageController, identifier: NSString | string): NSViewController;
  // pageControllerFrameForObject?(pageController: NSPageController, object: interop.Object | null): CGRect;
  // pageControllerPrepareViewControllerWithObject?(pageController: NSPageController, viewController: NSViewController, object: interop.Object | null): void;
  // pageControllerDidTransitionToObject?(pageController: NSPageController, object: interop.Object): void;
  // pageControllerWillStartLiveTransition?(pageController: NSPageController): void;
  // pageControllerDidEndLiveTransition?(pageController: NSPageController): void;
}

export class NSDatePickerCellDelegateImpl extends NSObject implements NSDatePickerCellDelegate {

  static ObjCProtocols = [NSDatePickerCellDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // datePickerCellValidateProposedDateValueTimeInterval?(datePickerCell: NSDatePickerCell, proposedDateValue: interop.PointerConvertible, proposedTimeInterval: interop.PointerConvertible): void;
}

export class NSSoundDelegateImpl extends NSObject implements NSSoundDelegate {

  static ObjCProtocols = [NSSoundDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // soundDidFinishPlaying?(sound: NSSound, flag: boolean): void;
}

export class NSTabViewDelegateImpl extends NSObject implements NSTabViewDelegate {

  static ObjCProtocols = [NSTabViewDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // tabViewShouldSelectTabViewItem?(tabView: NSTabView, tabViewItem: NSTabViewItem | null): boolean;
  // tabViewWillSelectTabViewItem?(tabView: NSTabView, tabViewItem: NSTabViewItem | null): void;
  // tabViewDidSelectTabViewItem?(tabView: NSTabView, tabViewItem: NSTabViewItem | null): void;
  // tabViewDidChangeNumberOfTabViewItems?(tabView: NSTabView): void;
}

export class NSTextViewDelegateImpl extends NSObject implements NSTextViewDelegate {

  static ObjCProtocols = [NSTextViewDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // textViewClickedOnLinkAtIndex?(textView: NSTextView, link: interop.Object, charIndex: number): boolean;
  // textViewClickedOnCellInRectAtIndex?(textView: NSTextView, cell: NSTextAttachmentCell, cellFrame: CGRect, charIndex: number): void;
  // textViewDoubleClickedOnCellInRectAtIndex?(textView: NSTextView, cell: NSTextAttachmentCell, cellFrame: CGRect, charIndex: number): void;
  // textViewDraggedCellInRectEventAtIndex?(view: NSTextView, cell: NSTextAttachmentCell, rect: CGRect, event: NSEvent, charIndex: number): void;
  // textViewWritablePasteboardTypesForCellAtIndex?(view: NSTextView, cell: NSTextAttachmentCell, charIndex: number): NSArray;
  // textViewWriteCellAtIndexToPasteboardType?(view: NSTextView, cell: NSTextAttachmentCell, charIndex: number, pboard: NSPasteboard, type: NSString | string): boolean;
  // textViewWillChangeSelectionFromCharacterRangeToCharacterRange?(textView: NSTextView, oldSelectedCharRange: _NSRange, newSelectedCharRange: _NSRange): _NSRange;
  // textViewWillChangeSelectionFromCharacterRangesToCharacterRanges?(textView: NSTextView, oldSelectedCharRanges: NSArray | unknown[], newSelectedCharRanges: NSArray | unknown[]): NSArray;
  // textViewShouldChangeTextInRangesReplacementStrings?(textView: NSTextView, affectedRanges: NSArray | unknown[], replacementStrings: NSArray | unknown[] | null): boolean;
  // textViewShouldChangeTypingAttributesToAttributes?(textView: NSTextView, oldTypingAttributes: NSDictionary | Record<string, unknown>, newTypingAttributes: NSDictionary | Record<string, unknown>): NSDictionary;
  // textViewDidChangeSelection?(notification: NSNotification): void;
  // textViewDidChangeTypingAttributes?(notification: NSNotification): void;
  // textViewWillDisplayToolTipForCharacterAtIndex?(textView: NSTextView, tooltip: NSString | string, characterIndex: number): NSString;
  // textViewCompletionsForPartialWordRangeIndexOfSelectedItem?(textView: NSTextView, words: NSArray | unknown[], charRange: _NSRange, index: interop.PointerConvertible): NSArray;
  // textViewShouldChangeTextInRangeReplacementString?(textView: NSTextView, affectedCharRange: _NSRange, replacementString: NSString | string | null): boolean;
  // textViewDoCommandBySelector?(textView: NSTextView, commandSelector: string): boolean;
  // textViewShouldSetSpellingStateRange?(textView: NSTextView, value: number, affectedCharRange: _NSRange): number;
  // textViewMenuForEventAtIndex?(view: NSTextView, menu: NSMenu, event: NSEvent, charIndex: number): NSMenu;
  // textViewWillCheckTextInRangeOptionsTypes?(view: NSTextView, range: _NSRange, options: NSDictionary | Record<string, unknown>, checkingTypes: interop.PointerConvertible): NSDictionary;
  // textViewDidCheckTextInRangeTypesOptionsResultsOrthographyWordCount?(view: NSTextView, range: _NSRange, checkingTypes: number, options: NSDictionary | Record<string, unknown>, results: NSArray | unknown[], orthography: NSOrthography, wordCount: number): NSArray;
  // textViewURLForContentsOfTextAttachmentAtIndex?(textView: NSTextView, textAttachment: NSTextAttachment, charIndex: number): NSURL;
  // textViewWillShowSharingServicePickerForItems?(textView: NSTextView, servicePicker: NSSharingServicePicker, items: NSArray | unknown[]): NSSharingServicePicker;
  // undoManagerForTextView?(view: NSTextView): NSUndoManager;
  // textViewShouldUpdateTouchBarItemIdentifiers?(textView: NSTextView, identifiers: NSArray | unknown[]): NSArray;
  // textViewCandidatesForSelectedRange?(textView: NSTextView, selectedRange: _NSRange): NSArray;
  // textViewShouldSelectCandidateAtIndex?(textView: NSTextView, index: number): boolean;
  // textViewClickedOnLink?(textView: NSTextView, link: interop.Object): boolean;
  // textViewClickedOnCellInRect?(textView: NSTextView, cell: NSTextAttachmentCell, cellFrame: CGRect): void;
  // textViewDoubleClickedOnCellInRect?(textView: NSTextView, cell: NSTextAttachmentCell, cellFrame: CGRect): void;
  // textViewDraggedCellInRectEvent?(view: NSTextView, cell: NSTextAttachmentCell, rect: CGRect, event: NSEvent): void;
}

export class NSSharingServiceDelegateImpl extends NSObject implements NSSharingServiceDelegate {

  static ObjCProtocols = [NSSharingServiceDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // sharingServiceWillShareItems?(sharingService: NSSharingService, items: NSArray | unknown[]): void;
  // sharingServiceDidFailToShareItemsError?(sharingService: NSSharingService, items: NSArray | unknown[], error: NSError): void;
  // sharingServiceDidShareItems?(sharingService: NSSharingService, items: NSArray | unknown[]): void;
  // sharingServiceSourceFrameOnScreenForShareItem?(sharingService: NSSharingService, item: interop.Object): CGRect;
  // sharingServiceTransitionImageForShareItemContentRect?(sharingService: NSSharingService, item: interop.Object, contentRect: interop.PointerConvertible): NSImage;
  // sharingServiceSourceWindowForShareItemsSharingContentScope?(sharingService: NSSharingService, items: NSArray | unknown[], sharingContentScope: interop.PointerConvertible): NSWindow;
  // anchoringViewForSharingServiceShowRelativeToRectPreferredEdge?(sharingService: NSSharingService, positioningRect: interop.PointerConvertible, preferredEdge: interop.PointerConvertible): NSView;
}

export class NSTextStorageDelegateImpl extends NSObject implements NSTextStorageDelegate {

  static ObjCProtocols = [NSTextStorageDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // textStorageWillProcessEditingRangeChangeInLength?(textStorage: NSTextStorage, editedMask: interop.Enum<typeof NSTextStorageEditActions>, editedRange: _NSRange, delta: number): void;
  // textStorageDidProcessEditingRangeChangeInLength?(textStorage: NSTextStorage, editedMask: interop.Enum<typeof NSTextStorageEditActions>, editedRange: _NSRange, delta: number): void;
}

export class NSControlTextEditingDelegateImpl extends NSObject implements NSControlTextEditingDelegate {

  static ObjCProtocols = [NSControlTextEditingDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // controlTextDidBeginEditing?(obj: NSNotification): void;
  // controlTextDidEndEditing?(obj: NSNotification): void;
  // controlTextDidChange?(obj: NSNotification): void;
  // controlTextShouldBeginEditing?(control: NSControl, fieldEditor: NSText): boolean;
  // controlTextShouldEndEditing?(control: NSControl, fieldEditor: NSText): boolean;
  // controlDidFailToFormatStringErrorDescription?(control: NSControl, string: NSString | string, error: NSString | string | null): boolean;
  // controlDidFailToValidatePartialStringErrorDescription?(control: NSControl, string: NSString | string, error: NSString | string | null): void;
  // controlIsValidObject?(control: NSControl, obj: interop.Object | null): boolean;
  // controlTextViewDoCommandBySelector?(control: NSControl, textView: NSTextView, commandSelector: string): boolean;
  // controlTextViewCompletionsForPartialWordRangeIndexOfSelectedItem?(control: NSControl, textView: NSTextView, words: NSArray | unknown[], charRange: _NSRange, index: interop.PointerConvertible): NSArray;
}

export class NSTextFieldDelegateImpl extends NSObject implements NSTextFieldDelegate {

  static ObjCProtocols = [NSTextFieldDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // textFieldTextViewCandidatesForSelectedRange?(textField: NSTextField, textView: NSTextView, selectedRange: _NSRange): NSArray;
  // textFieldTextViewShouldSelectCandidateAtIndex?(textField: NSTextField, textView: NSTextView, index: number): boolean;
}

export class NSOpenSavePanelDelegateImpl extends NSObject implements NSOpenSavePanelDelegate {

  static ObjCProtocols = [NSOpenSavePanelDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // panelShouldEnableURL?(sender: interop.Object, url: NSURL): boolean;
  // panelValidateURLError?(sender: interop.Object, url: NSURL, outError: interop.PointerConvertible): boolean;
  // panelDidChangeToDirectoryURL?(sender: interop.Object, url: NSURL | null): void;
  // panelUserEnteredFilenameConfirmed?(sender: interop.Object, filename: NSString | string, okFlag: boolean): NSString;
  // panelWillExpand?(sender: interop.Object, expanding: boolean): void;
  // panelSelectionDidChange?(sender: interop.Object | null): void;
}

export class NSSpeechRecognizerDelegateImpl extends NSObject implements NSSpeechRecognizerDelegate {

  static ObjCProtocols = [NSSpeechRecognizerDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // speechRecognizerDidRecognizeCommand?(sender: NSSpeechRecognizer, command: NSString | string): void;
}

export class NSCloudSharingServiceDelegateImpl extends NSObject implements NSCloudSharingServiceDelegate {

  static ObjCProtocols = [NSCloudSharingServiceDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // sharingServiceDidCompleteForItemsError?(sharingService: NSSharingService, items: NSArray | unknown[], error: NSError | null): void;
  // optionsForSharingServiceShareProvider?(cloudKitSharingService: NSSharingService, provider: NSItemProvider): interop.Enum<typeof NSCloudKitSharingServiceOptions>;
  // sharingServiceDidSaveShare?(sharingService: NSSharingService, share: CKShare): void;
  // sharingServiceDidStopSharing?(sharingService: NSSharingService, share: CKShare): void;
}

export class NSScrubberFlowLayoutDelegateImpl extends NSObject implements NSScrubberFlowLayoutDelegate {

  static ObjCProtocols = [NSScrubberFlowLayoutDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // scrubberLayoutSizeForItemAtIndex?(scrubber: NSScrubber, layout: NSScrubberFlowLayout, itemIndex: number): CGSize;
}

export class NSSpeechSynthesizerDelegateImpl extends NSObject implements NSSpeechSynthesizerDelegate {

  static ObjCProtocols = [NSSpeechSynthesizerDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // speechSynthesizerDidFinishSpeaking?(sender: NSSpeechSynthesizer, finishedSpeaking: boolean): void;
  // speechSynthesizerWillSpeakWordOfString?(sender: NSSpeechSynthesizer, characterRange: _NSRange, string: NSString | string): void;
  // speechSynthesizerWillSpeakPhoneme?(sender: NSSpeechSynthesizer, phonemeOpcode: number): void;
  // speechSynthesizerDidEncounterErrorAtIndexOfStringMessage?(sender: NSSpeechSynthesizer, characterIndex: number, string: NSString | string, message: NSString | string): void;
  // speechSynthesizerDidEncounterSyncMessage?(sender: NSSpeechSynthesizer, message: NSString | string): void;
}

export class NSCandidateListTouchBarItemDelegateImpl extends NSObject implements NSCandidateListTouchBarItemDelegate {

  static ObjCProtocols = [NSCandidateListTouchBarItemDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // candidateListTouchBarItemBeginSelectingCandidateAtIndex?(anItem: NSCandidateListTouchBarItem, index: number): void;
  // candidateListTouchBarItemChangeSelectionFromCandidateAtIndexToIndex?(anItem: NSCandidateListTouchBarItem, previousIndex: number, index: number): void;
  // candidateListTouchBarItemEndSelectingCandidateAtIndex?(anItem: NSCandidateListTouchBarItem, index: number): void;
  // candidateListTouchBarItemChangedCandidateListVisibility?(anItem: NSCandidateListTouchBarItem, isVisible: boolean): void;
}

export class NSBrowserDelegateImpl extends NSObject implements NSBrowserDelegate {

  static ObjCProtocols = [NSBrowserDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // browserNumberOfRowsInColumn?(sender: NSBrowser, column: number): number;
  // browserCreateRowsForColumnInMatrix?(sender: NSBrowser, column: number, matrix: NSMatrix): void;
  // browserNumberOfChildrenOfItem?(browser: NSBrowser, item: interop.Object | null): number;
  // browserChildOfItem?(browser: NSBrowser, index: number, item: interop.Object | null): interop.Object;
  // browserIsLeafItem?(browser: NSBrowser, item: interop.Object | null): boolean;
  // browserObjectValueForItem?(browser: NSBrowser, item: interop.Object | null): interop.Object;
  // browserHeightOfRowInColumn?(browser: NSBrowser, row: number, columnIndex: number): number;
  // rootItemForBrowser?(browser: NSBrowser): interop.Object;
  // browserSetObjectValueForItem?(browser: NSBrowser, object: interop.Object | null, item: interop.Object | null): void;
  // browserShouldEditItem?(browser: NSBrowser, item: interop.Object | null): boolean;
  // browserWillDisplayCellAtRowColumn?(sender: NSBrowser, cell: interop.Object, row: number, column: number): void;
  // browserTitleOfColumn?(sender: NSBrowser, column: number): NSString;
  // browserSelectCellWithStringInColumn?(sender: NSBrowser, title: NSString | string, column: number): boolean;
  // browserSelectRowInColumn?(sender: NSBrowser, row: number, column: number): boolean;
  // browserIsColumnValid?(sender: NSBrowser, column: number): boolean;
  // browserWillScroll?(sender: NSBrowser): void;
  // browserDidScroll?(sender: NSBrowser): void;
  // browserShouldSizeColumnForUserResizeToWidth?(browser: NSBrowser, columnIndex: number, forUserResize: boolean, suggestedWidth: number): number;
  // browserSizeToFitWidthOfColumn?(browser: NSBrowser, columnIndex: number): number;
  // browserColumnConfigurationDidChange?(notification: NSNotification): void;
  // browserShouldShowCellExpansionForRowColumn?(browser: NSBrowser, row: number, column: number): boolean;
  // browserWriteRowsWithIndexesInColumnToPasteboard?(browser: NSBrowser, rowIndexes: NSIndexSet, column: number, pasteboard: NSPasteboard): boolean;
  // browserNamesOfPromisedFilesDroppedAtDestinationForDraggedRowsWithIndexesInColumn?(browser: NSBrowser, dropDestination: NSURL, rowIndexes: NSIndexSet, column: number): NSArray;
  // browserCanDragRowsWithIndexesInColumnWithEvent?(browser: NSBrowser, rowIndexes: NSIndexSet, column: number, event: NSEvent): boolean;
  // browserDraggingImageForRowsWithIndexesInColumnWithEventOffset?(browser: NSBrowser, rowIndexes: NSIndexSet, column: number, event: NSEvent, dragImageOffset: interop.PointerConvertible): NSImage;
  // browserValidateDropProposedRowColumnDropOperation?(browser: NSBrowser, info: NSDraggingInfo, row: interop.PointerConvertible, column: interop.PointerConvertible, dropOperation: interop.PointerConvertible): interop.Enum<typeof NSDragOperation>;
  // browserAcceptDropAtRowColumnDropOperation?(browser: NSBrowser, info: NSDraggingInfo, row: number, column: number, dropOperation: interop.Enum<typeof NSBrowserDropOperation>): boolean;
  // browserTypeSelectStringForRowInColumn?(browser: NSBrowser, row: number, column: number): NSString;
  // browserShouldTypeSelectForEventWithCurrentSearchString?(browser: NSBrowser, event: NSEvent, searchString: NSString | string | null): boolean;
  // browserNextTypeSelectMatchFromRowToRowInColumnForString?(browser: NSBrowser, startRow: number, endRow: number, column: number, searchString: NSString | string | null): number;
  // browserPreviewViewControllerForLeafItem?(browser: NSBrowser, item: interop.Object): NSViewController;
  // browserHeaderViewControllerForItem?(browser: NSBrowser, item: interop.Object | null): NSViewController;
  // browserDidChangeLastColumnToColumn?(browser: NSBrowser, oldLastColumn: number, column: number): void;
  // browserSelectionIndexesForProposedSelectionInColumn?(browser: NSBrowser, proposedSelectionIndexes: NSIndexSet, column: number): NSIndexSet;
}

export class NSWindowDelegateImpl extends NSObject implements NSWindowDelegate {

  static ObjCProtocols = [NSWindowDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // windowShouldClose?(sender: NSWindow): boolean;
  // windowWillReturnFieldEditorToObject?(sender: NSWindow, client: interop.Object | null): interop.Object;
  // windowWillResizeToSize?(sender: NSWindow, frameSize: CGSize): CGSize;
  // windowWillUseStandardFrameDefaultFrame?(window: NSWindow, newFrame: CGRect): CGRect;
  // windowShouldZoomToFrame?(window: NSWindow, newFrame: CGRect): boolean;
  // windowWillReturnUndoManager?(window: NSWindow): NSUndoManager;
  // windowWillPositionSheetUsingRect?(window: NSWindow, sheet: NSWindow, rect: CGRect): CGRect;
  // windowShouldPopUpDocumentPathMenu?(window: NSWindow, menu: NSMenu): boolean;
  // windowShouldDragDocumentWithEventFromWithPasteboard?(window: NSWindow, event: NSEvent, dragImageLocation: CGPoint, pasteboard: NSPasteboard): boolean;
  // windowWillUseFullScreenContentSize?(window: NSWindow, proposedSize: CGSize): CGSize;
  // windowWillUseFullScreenPresentationOptions?(window: NSWindow, proposedOptions: interop.Enum<typeof NSApplicationPresentationOptions>): interop.Enum<typeof NSApplicationPresentationOptions>;
  // customWindowsToEnterFullScreenForWindow?(window: NSWindow): NSArray;
  // windowStartCustomAnimationToEnterFullScreenWithDuration?(window: NSWindow, duration: number): void;
  // windowDidFailToEnterFullScreen?(window: NSWindow): void;
  // customWindowsToExitFullScreenForWindow?(window: NSWindow): NSArray;
  // windowStartCustomAnimationToExitFullScreenWithDuration?(window: NSWindow, duration: number): void;
  // customWindowsToEnterFullScreenForWindowOnScreen?(window: NSWindow, screen: NSScreen): NSArray;
  // windowStartCustomAnimationToEnterFullScreenOnScreenWithDuration?(window: NSWindow, screen: NSScreen, duration: number): void;
  // windowDidFailToExitFullScreen?(window: NSWindow): void;
  // windowWillResizeForVersionBrowserWithMaxPreferredSizeMaxAllowedSize?(window: NSWindow, maxPreferredFrameSize: CGSize, maxAllowedFrameSize: CGSize): CGSize;
  // windowWillEncodeRestorableState?(window: NSWindow, state: NSCoder): void;
  // windowDidDecodeRestorableState?(window: NSWindow, state: NSCoder): void;
  // previewRepresentableActivityItemsForWindow?(window: NSWindow): NSArray | null;
  // windowDidResize?(notification: NSNotification): void;
  // windowDidExpose?(notification: NSNotification): void;
  // windowWillMove?(notification: NSNotification): void;
  // windowDidMove?(notification: NSNotification): void;
  // windowDidBecomeKey?(notification: NSNotification): void;
  // windowDidResignKey?(notification: NSNotification): void;
  // windowDidBecomeMain?(notification: NSNotification): void;
  // windowDidResignMain?(notification: NSNotification): void;
  // windowWillClose?(notification: NSNotification): void;
  // windowWillMiniaturize?(notification: NSNotification): void;
  // windowDidMiniaturize?(notification: NSNotification): void;
  // windowDidDeminiaturize?(notification: NSNotification): void;
  // windowDidUpdate?(notification: NSNotification): void;
  // windowDidChangeScreen?(notification: NSNotification): void;
  // windowDidChangeScreenProfile?(notification: NSNotification): void;
  // windowDidChangeBackingProperties?(notification: NSNotification): void;
  // windowWillBeginSheet?(notification: NSNotification): void;
  // windowDidEndSheet?(notification: NSNotification): void;
  // windowWillStartLiveResize?(notification: NSNotification): void;
  // windowDidEndLiveResize?(notification: NSNotification): void;
  // windowWillEnterFullScreen?(notification: NSNotification): void;
  // windowDidEnterFullScreen?(notification: NSNotification): void;
  // windowWillExitFullScreen?(notification: NSNotification): void;
  // windowDidExitFullScreen?(notification: NSNotification): void;
  // windowWillEnterVersionBrowser?(notification: NSNotification): void;
  // windowDidEnterVersionBrowser?(notification: NSNotification): void;
  // windowWillExitVersionBrowser?(notification: NSNotification): void;
  // windowDidExitVersionBrowser?(notification: NSNotification): void;
  // windowDidChangeOcclusionState?(notification: NSNotification): void;
}

export class NSCollectionViewDelegateImpl extends NSObject implements NSCollectionViewDelegate {

  static ObjCProtocols = [NSCollectionViewDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // collectionViewCanDragItemsAtIndexPathsWithEvent?(collectionView: NSCollectionView, indexPaths: NSSet, event: NSEvent): boolean;
  // collectionViewCanDragItemsAtIndexesWithEvent?(collectionView: NSCollectionView, indexes: NSIndexSet, event: NSEvent): boolean;
  // collectionViewWriteItemsAtIndexPathsToPasteboard?(collectionView: NSCollectionView, indexPaths: NSSet, pasteboard: NSPasteboard): boolean;
  // collectionViewWriteItemsAtIndexesToPasteboard?(collectionView: NSCollectionView, indexes: NSIndexSet, pasteboard: NSPasteboard): boolean;
  // collectionViewNamesOfPromisedFilesDroppedAtDestinationForDraggedItemsAtIndexPaths?(collectionView: NSCollectionView, dropURL: NSURL, indexPaths: NSSet): NSArray;
  // collectionViewNamesOfPromisedFilesDroppedAtDestinationForDraggedItemsAtIndexes?(collectionView: NSCollectionView, dropURL: NSURL, indexes: NSIndexSet): NSArray;
  // collectionViewDraggingImageForItemsAtIndexPathsWithEventOffset?(collectionView: NSCollectionView, indexPaths: NSSet, event: NSEvent, dragImageOffset: interop.PointerConvertible): NSImage;
  // collectionViewDraggingImageForItemsAtIndexesWithEventOffset?(collectionView: NSCollectionView, indexes: NSIndexSet, event: NSEvent, dragImageOffset: interop.PointerConvertible): NSImage;
  // collectionViewValidateDropProposedIndexPathDropOperation?(collectionView: NSCollectionView, draggingInfo: NSDraggingInfo, proposedDropIndexPath: interop.PointerConvertible, proposedDropOperation: interop.PointerConvertible): interop.Enum<typeof NSDragOperation>;
  // collectionViewValidateDropProposedIndexDropOperation?(collectionView: NSCollectionView, draggingInfo: NSDraggingInfo, proposedDropIndex: interop.PointerConvertible, proposedDropOperation: interop.PointerConvertible): interop.Enum<typeof NSDragOperation>;
  // collectionViewAcceptDropIndexPathDropOperation?(collectionView: NSCollectionView, draggingInfo: NSDraggingInfo, indexPath: NSIndexPath, dropOperation: interop.Enum<typeof NSCollectionViewDropOperation>): boolean;
  // collectionViewAcceptDropIndexDropOperation?(collectionView: NSCollectionView, draggingInfo: NSDraggingInfo, index: number, dropOperation: interop.Enum<typeof NSCollectionViewDropOperation>): boolean;
  // collectionViewPasteboardWriterForItemAtIndexPath?(collectionView: NSCollectionView, indexPath: NSIndexPath): NSPasteboardWriting;
  // collectionViewPasteboardWriterForItemAtIndex?(collectionView: NSCollectionView, index: number): NSPasteboardWriting;
  // collectionViewDraggingSessionWillBeginAtPointForItemsAtIndexPaths?(collectionView: NSCollectionView, session: NSDraggingSession, screenPoint: CGPoint, indexPaths: NSSet): void;
  // collectionViewDraggingSessionWillBeginAtPointForItemsAtIndexes?(collectionView: NSCollectionView, session: NSDraggingSession, screenPoint: CGPoint, indexes: NSIndexSet): void;
  // collectionViewDraggingSessionEndedAtPointDragOperation?(collectionView: NSCollectionView, session: NSDraggingSession, screenPoint: CGPoint, operation: interop.Enum<typeof NSDragOperation>): void;
  // collectionViewUpdateDraggingItemsForDrag?(collectionView: NSCollectionView, draggingInfo: NSDraggingInfo): void;
  // collectionViewShouldChangeItemsAtIndexPathsToHighlightState?(collectionView: NSCollectionView, indexPaths: NSSet, highlightState: interop.Enum<typeof NSCollectionViewItemHighlightState>): NSSet;
  // collectionViewDidChangeItemsAtIndexPathsToHighlightState?(collectionView: NSCollectionView, indexPaths: NSSet, highlightState: interop.Enum<typeof NSCollectionViewItemHighlightState>): void;
  // collectionViewShouldSelectItemsAtIndexPaths?(collectionView: NSCollectionView, indexPaths: NSSet): NSSet;
  // collectionViewShouldDeselectItemsAtIndexPaths?(collectionView: NSCollectionView, indexPaths: NSSet): NSSet;
  // collectionViewDidSelectItemsAtIndexPaths?(collectionView: NSCollectionView, indexPaths: NSSet): void;
  // collectionViewDidDeselectItemsAtIndexPaths?(collectionView: NSCollectionView, indexPaths: NSSet): void;
  // collectionViewWillDisplayItemForRepresentedObjectAtIndexPath?(collectionView: NSCollectionView, item: NSCollectionViewItem, indexPath: NSIndexPath): void;
  // collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath?(collectionView: NSCollectionView, view: NSView, elementKind: NSString | string, indexPath: NSIndexPath): void;
  // collectionViewDidEndDisplayingItemForRepresentedObjectAtIndexPath?(collectionView: NSCollectionView, item: NSCollectionViewItem, indexPath: NSIndexPath): void;
  // collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath?(collectionView: NSCollectionView, view: NSView, elementKind: NSString | string, indexPath: NSIndexPath): void;
  // collectionViewTransitionLayoutForOldLayoutNewLayout?(collectionView: NSCollectionView, fromLayout: NSCollectionViewLayout, toLayout: NSCollectionViewLayout): NSCollectionViewTransitionLayout;
}

export class NSAlertDelegateImpl extends NSObject implements NSAlertDelegate {

  static ObjCProtocols = [NSAlertDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // alertShowHelp?(alert: NSAlert): boolean;
}

export class NSTextDelegateImpl extends NSObject implements NSTextDelegate {

  static ObjCProtocols = [NSTextDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // textShouldBeginEditing?(textObject: NSText): boolean;
  // textShouldEndEditing?(textObject: NSText): boolean;
  // textDidBeginEditing?(notification: NSNotification): void;
  // textDidEndEditing?(notification: NSNotification): void;
  // textDidChange?(notification: NSNotification): void;
}

export class NSGestureRecognizerDelegateImpl extends NSObject implements NSGestureRecognizerDelegate {

  static ObjCProtocols = [NSGestureRecognizerDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // gestureRecognizerShouldAttemptToRecognizeWithEvent?(gestureRecognizer: NSGestureRecognizer, event: NSEvent): boolean;
  // gestureRecognizerShouldBegin?(gestureRecognizer: NSGestureRecognizer): boolean;
  // gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer?(gestureRecognizer: NSGestureRecognizer, otherGestureRecognizer: NSGestureRecognizer): boolean;
  // gestureRecognizerShouldRequireFailureOfGestureRecognizer?(gestureRecognizer: NSGestureRecognizer, otherGestureRecognizer: NSGestureRecognizer): boolean;
  // gestureRecognizerShouldBeRequiredToFailByGestureRecognizer?(gestureRecognizer: NSGestureRecognizer, otherGestureRecognizer: NSGestureRecognizer): boolean;
  // gestureRecognizerShouldReceiveTouch?(gestureRecognizer: NSGestureRecognizer, touch: NSTouch): boolean;
}

export class NSTextContentManagerDelegateImpl extends NSObject implements NSTextContentManagerDelegate {

  static ObjCProtocols = [NSTextContentManagerDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // textContentManagerTextElementAtLocation?(textContentManager: NSTextContentManager, location: NSTextLocation): NSTextElement;
  // textContentManagerShouldEnumerateTextElementOptions?(textContentManager: NSTextContentManager, textElement: NSTextElement, options: interop.Enum<typeof NSTextContentManagerEnumerationOptions>): boolean;
}

export class NSTouchBarDelegateImpl extends NSObject implements NSTouchBarDelegate {

  static ObjCProtocols = [NSTouchBarDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // touchBarMakeItemForIdentifier?(touchBar: NSTouchBar, identifier: NSString | string): NSTouchBarItem;
}

export class NSPopoverDelegateImpl extends NSObject implements NSPopoverDelegate {

  static ObjCProtocols = [NSPopoverDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // popoverShouldClose?(popover: NSPopover): boolean;
  // popoverShouldDetach?(popover: NSPopover): boolean;
  // popoverDidDetach?(popover: NSPopover): void;
  // detachableWindowForPopover?(popover: NSPopover): NSWindow;
  // popoverWillShow?(notification: NSNotification): void;
  // popoverDidShow?(notification: NSNotification): void;
  // popoverWillClose?(notification: NSNotification): void;
  // popoverDidClose?(notification: NSNotification): void;
}

export class NSPathCellDelegateImpl extends NSObject implements NSPathCellDelegate {

  static ObjCProtocols = [NSPathCellDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // pathCellWillDisplayOpenPanel?(pathCell: NSPathCell, openPanel: NSOpenPanel): void;
  // pathCellWillPopUpMenu?(pathCell: NSPathCell, menu: NSMenu): void;
}

export class NSAccessibilityCustomRotorItemSearchDelegateImpl extends NSObject implements NSAccessibilityCustomRotorItemSearchDelegate {

  static ObjCProtocols = [NSAccessibilityCustomRotorItemSearchDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // rotorResultForSearchParameters(rotor: NSAccessibilityCustomRotor, searchParameters: NSAccessibilityCustomRotorSearchParameters): NSAccessibilityCustomRotorItemResult;
}

export class NSTokenFieldCellDelegateImpl extends NSObject implements NSTokenFieldCellDelegate {

  static ObjCProtocols = [NSTokenFieldCellDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // tokenFieldCellCompletionsForSubstringIndexOfTokenIndexOfSelectedItem?(tokenFieldCell: NSTokenFieldCell, substring: NSString | string, tokenIndex: number, selectedIndex: interop.PointerConvertible): NSArray;
  // tokenFieldCellShouldAddObjectsAtIndex?(tokenFieldCell: NSTokenFieldCell, tokens: NSArray | unknown[], index: number): NSArray;
  // tokenFieldCellDisplayStringForRepresentedObject?(tokenFieldCell: NSTokenFieldCell, representedObject: interop.Object): NSString;
  // tokenFieldCellEditingStringForRepresentedObject?(tokenFieldCell: NSTokenFieldCell, representedObject: interop.Object): NSString;
  // tokenFieldCellRepresentedObjectForEditingString?(tokenFieldCell: NSTokenFieldCell, editingString: NSString | string): interop.Object;
  // tokenFieldCellWriteRepresentedObjectsToPasteboard?(tokenFieldCell: NSTokenFieldCell, objects: NSArray | unknown[], pboard: NSPasteboard): boolean;
  // tokenFieldCellReadFromPasteboard?(tokenFieldCell: NSTokenFieldCell, pboard: NSPasteboard): NSArray;
  // tokenFieldCellMenuForRepresentedObject?(tokenFieldCell: NSTokenFieldCell, representedObject: interop.Object): NSMenu;
  // tokenFieldCellHasMenuForRepresentedObject?(tokenFieldCell: NSTokenFieldCell, representedObject: interop.Object): boolean;
  // tokenFieldCellStyleForRepresentedObject?(tokenFieldCell: NSTokenFieldCell, representedObject: interop.Object): interop.Enum<typeof NSTokenStyle>;
}

export class NSPathControlDelegateImpl extends NSObject implements NSPathControlDelegate {

  static ObjCProtocols = [NSPathControlDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // pathControlShouldDragItemWithPasteboard?(pathControl: NSPathControl, pathItem: NSPathControlItem, pasteboard: NSPasteboard): boolean;
  // pathControlShouldDragPathComponentCellWithPasteboard?(pathControl: NSPathControl, pathComponentCell: NSPathComponentCell, pasteboard: NSPasteboard): boolean;
  // pathControlValidateDrop?(pathControl: NSPathControl, info: NSDraggingInfo): interop.Enum<typeof NSDragOperation>;
  // pathControlAcceptDrop?(pathControl: NSPathControl, info: NSDraggingInfo): boolean;
  // pathControlWillDisplayOpenPanel?(pathControl: NSPathControl, openPanel: NSOpenPanel): void;
  // pathControlWillPopUpMenu?(pathControl: NSPathControl, menu: NSMenu): void;
}

export class NSFilePromiseProviderDelegateImpl extends NSObject implements NSFilePromiseProviderDelegate {

  static ObjCProtocols = [NSFilePromiseProviderDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // filePromiseProviderFileNameForType(filePromiseProvider: NSFilePromiseProvider, fileType: NSString | string): NSString;
  // filePromiseProviderWritePromiseToURLCompletionHandler(filePromiseProvider: NSFilePromiseProvider, url: NSURL, completionHandler: (p1: NSError) => void | null): void;
  // operationQueueForFilePromiseProvider?(filePromiseProvider: NSFilePromiseProvider): NSOperationQueue;
}

export class NSApplicationDelegateImpl extends NSObject implements NSApplicationDelegate {

  static ObjCProtocols = [NSApplicationDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // applicationShouldTerminate?(sender: NSApplication): interop.Enum<typeof NSApplicationTerminateReply>;
  // applicationOpenURLs?(application: NSApplication, urls: NSArray | unknown[]): void;
  // applicationOpenFile?(sender: NSApplication, filename: NSString | string): boolean;
  // applicationOpenFiles?(sender: NSApplication, filenames: NSArray | unknown[]): void;
  // applicationOpenTempFile?(sender: NSApplication, filename: NSString | string): boolean;
  // applicationShouldOpenUntitledFile?(sender: NSApplication): boolean;
  // applicationOpenUntitledFile?(sender: NSApplication): boolean;
  // applicationOpenFileWithoutUI?(sender: interop.Object, filename: NSString | string): boolean;
  // applicationPrintFile?(sender: NSApplication, filename: NSString | string): boolean;
  // applicationPrintFilesWithSettingsShowPrintPanels?(application: NSApplication, fileNames: NSArray | unknown[], printSettings: NSDictionary | Record<string, unknown>, showPrintPanels: boolean): interop.Enum<typeof NSApplicationPrintReply>;
  // applicationShouldTerminateAfterLastWindowClosed?(sender: NSApplication): boolean;
  // applicationShouldHandleReopenHasVisibleWindows?(sender: NSApplication, flag: boolean): boolean;
  // applicationDockMenu?(sender: NSApplication): NSMenu;
  // applicationWillPresentError?(application: NSApplication, error: NSError): NSError;
  // applicationDidRegisterForRemoteNotificationsWithDeviceToken?(application: NSApplication, deviceToken: NSData): void;
  // applicationDidFailToRegisterForRemoteNotificationsWithError?(application: NSApplication, error: NSError): void;
  // applicationDidReceiveRemoteNotification?(application: NSApplication, userInfo: NSDictionary | Record<string, unknown>): void;
  // applicationSupportsSecureRestorableState?(app: NSApplication): boolean;
  // applicationHandlerForIntent?(application: NSApplication, intent: INIntent): interop.Object;
  // applicationWillEncodeRestorableState?(app: NSApplication, coder: NSCoder): void;
  // applicationDidDecodeRestorableState?(app: NSApplication, coder: NSCoder): void;
  // applicationWillContinueUserActivityWithType?(application: NSApplication, userActivityType: NSString | string): boolean;
  // applicationContinueUserActivityRestorationHandler?(application: NSApplication, userActivity: NSUserActivity, restorationHandler: (p1: NSArray | unknown[]) => void): boolean;
  // applicationDidFailToContinueUserActivityWithTypeError?(application: NSApplication, userActivityType: NSString | string, error: NSError): void;
  // applicationDidUpdateUserActivity?(application: NSApplication, userActivity: NSUserActivity): void;
  // applicationUserDidAcceptCloudKitShareWithMetadata?(application: NSApplication, metadata: CKShareMetadata): void;
  // applicationDelegateHandlesKey?(sender: NSApplication, key: NSString | string): boolean;
  // applicationShouldAutomaticallyLocalizeKeyEquivalents?(application: NSApplication): boolean;
  // applicationWillFinishLaunching?(notification: NSNotification): void;
  // applicationDidFinishLaunching?(notification: NSNotification): void;
  // applicationWillHide?(notification: NSNotification): void;
  // applicationDidHide?(notification: NSNotification): void;
  // applicationWillUnhide?(notification: NSNotification): void;
  // applicationDidUnhide?(notification: NSNotification): void;
  // applicationWillBecomeActive?(notification: NSNotification): void;
  // applicationDidBecomeActive?(notification: NSNotification): void;
  // applicationWillResignActive?(notification: NSNotification): void;
  // applicationDidResignActive?(notification: NSNotification): void;
  // applicationWillUpdate?(notification: NSNotification): void;
  // applicationDidUpdate?(notification: NSNotification): void;
  // applicationWillTerminate?(notification: NSNotification): void;
  // applicationDidChangeScreenParameters?(notification: NSNotification): void;
  // applicationDidChangeOcclusionState?(notification: NSNotification): void;
  // applicationProtectedDataWillBecomeUnavailable?(notification: NSNotification): void;
  // applicationProtectedDataDidBecomeAvailable?(notification: NSNotification): void;
}

export class NSAnimationDelegateImpl extends NSObject implements NSAnimationDelegate {

  static ObjCProtocols = [NSAnimationDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // animationShouldStart?(animation: NSAnimation): boolean;
  // animationDidStop?(animation: NSAnimation): void;
  // animationDidEnd?(animation: NSAnimation): void;
  // animationValueForProgress?(animation: NSAnimation, progress: number): number;
  // animationDidReachProgressMark?(animation: NSAnimation, progress: number): void;
}

export class NSSharingServicePickerToolbarItemDelegateImpl extends NSObject implements NSSharingServicePickerToolbarItemDelegate {

  static ObjCProtocols = [NSSharingServicePickerToolbarItemDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // itemsForSharingServicePickerToolbarItem(pickerToolbarItem: NSSharingServicePickerToolbarItem): NSArray;
}

export class NSOutlineViewDelegateImpl extends NSObject implements NSOutlineViewDelegate {

  static ObjCProtocols = [NSOutlineViewDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // outlineViewViewForTableColumnItem?(outlineView: NSOutlineView, tableColumn: NSTableColumn | null, item: interop.Object): NSView;
  // outlineViewRowViewForItem?(outlineView: NSOutlineView, item: interop.Object): NSTableRowView;
  // outlineViewDidAddRowViewForRow?(outlineView: NSOutlineView, rowView: NSTableRowView, row: number): void;
  // outlineViewDidRemoveRowViewForRow?(outlineView: NSOutlineView, rowView: NSTableRowView, row: number): void;
  // outlineViewWillDisplayCellForTableColumnItem?(outlineView: NSOutlineView, cell: interop.Object, tableColumn: NSTableColumn | null, item: interop.Object): void;
  // outlineViewShouldEditTableColumnItem?(outlineView: NSOutlineView, tableColumn: NSTableColumn | null, item: interop.Object): boolean;
  // selectionShouldChangeInOutlineView?(outlineView: NSOutlineView): boolean;
  // outlineViewShouldSelectItem?(outlineView: NSOutlineView, item: interop.Object): boolean;
  // outlineViewSelectionIndexesForProposedSelection?(outlineView: NSOutlineView, proposedSelectionIndexes: NSIndexSet): NSIndexSet;
  // outlineViewShouldSelectTableColumn?(outlineView: NSOutlineView, tableColumn: NSTableColumn | null): boolean;
  // outlineViewMouseDownInHeaderOfTableColumn?(outlineView: NSOutlineView, tableColumn: NSTableColumn): void;
  // outlineViewDidClickTableColumn?(outlineView: NSOutlineView, tableColumn: NSTableColumn): void;
  // outlineViewDidDragTableColumn?(outlineView: NSOutlineView, tableColumn: NSTableColumn): void;
  // outlineViewToolTipForCellRectTableColumnItemMouseLocation?(outlineView: NSOutlineView, cell: NSCell, rect: interop.PointerConvertible, tableColumn: NSTableColumn | null, item: interop.Object, mouseLocation: CGPoint): NSString;
  // outlineViewHeightOfRowByItem?(outlineView: NSOutlineView, item: interop.Object): number;
  // outlineViewTintConfigurationForItem?(outlineView: NSOutlineView, item: interop.Object): NSTintConfiguration;
  // outlineViewTypeSelectStringForTableColumnItem?(outlineView: NSOutlineView, tableColumn: NSTableColumn | null, item: interop.Object): NSString;
  // outlineViewNextTypeSelectMatchFromItemToItemForString?(outlineView: NSOutlineView, startItem: interop.Object, endItem: interop.Object, searchString: NSString | string): interop.Object;
  // outlineViewShouldTypeSelectForEventWithCurrentSearchString?(outlineView: NSOutlineView, event: NSEvent, searchString: NSString | string | null): boolean;
  // outlineViewShouldShowCellExpansionForTableColumnItem?(outlineView: NSOutlineView, tableColumn: NSTableColumn | null, item: interop.Object): boolean;
  // outlineViewShouldTrackCellForTableColumnItem?(outlineView: NSOutlineView, cell: NSCell, tableColumn: NSTableColumn | null, item: interop.Object): boolean;
  // outlineViewDataCellForTableColumnItem?(outlineView: NSOutlineView, tableColumn: NSTableColumn | null, item: interop.Object): NSCell;
  // outlineViewIsGroupItem?(outlineView: NSOutlineView, item: interop.Object): boolean;
  // outlineViewShouldExpandItem?(outlineView: NSOutlineView, item: interop.Object): boolean;
  // outlineViewShouldCollapseItem?(outlineView: NSOutlineView, item: interop.Object): boolean;
  // outlineViewWillDisplayOutlineCellForTableColumnItem?(outlineView: NSOutlineView, cell: interop.Object, tableColumn: NSTableColumn | null, item: interop.Object): void;
  // outlineViewSizeToFitWidthOfColumn?(outlineView: NSOutlineView, column: number): number;
  // outlineViewShouldReorderColumnToColumn?(outlineView: NSOutlineView, columnIndex: number, newColumnIndex: number): boolean;
  // outlineViewShouldShowOutlineCellForItem?(outlineView: NSOutlineView, item: interop.Object): boolean;
  // outlineViewUserCanChangeVisibilityOfTableColumn?(outlineView: NSOutlineView, column: NSTableColumn): boolean;
  // outlineViewUserDidChangeVisibilityOfTableColumns?(outlineView: NSOutlineView, columns: NSArray | unknown[]): void;
  // outlineViewSelectionDidChange?(notification: NSNotification): void;
  // outlineViewColumnDidMove?(notification: NSNotification): void;
  // outlineViewColumnDidResize?(notification: NSNotification): void;
  // outlineViewSelectionIsChanging?(notification: NSNotification): void;
  // outlineViewItemWillExpand?(notification: NSNotification): void;
  // outlineViewItemDidExpand?(notification: NSNotification): void;
  // outlineViewItemWillCollapse?(notification: NSNotification): void;
  // outlineViewItemDidCollapse?(notification: NSNotification): void;
}

export class NSMatrixDelegateImpl extends NSObject implements NSMatrixDelegate {

  static ObjCProtocols = [NSMatrixDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

}

export class NSSharingServicePickerDelegateImpl extends NSObject implements NSSharingServicePickerDelegate {

  static ObjCProtocols = [NSSharingServicePickerDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // sharingServicePickerSharingServicesForItemsProposedSharingServices?(sharingServicePicker: NSSharingServicePicker, items: NSArray | unknown[], proposedServices: NSArray | unknown[]): NSArray;
  // sharingServicePickerDelegateForSharingService?(sharingServicePicker: NSSharingServicePicker, sharingService: NSSharingService): NSSharingServiceDelegate;
  // sharingServicePickerDidChooseSharingService?(sharingServicePicker: NSSharingServicePicker, service: NSSharingService | null): void;
}

export class NSSplitViewDelegateImpl extends NSObject implements NSSplitViewDelegate {

  static ObjCProtocols = [NSSplitViewDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // splitViewCanCollapseSubview?(splitView: NSSplitView, subview: NSView): boolean;
  // splitViewShouldCollapseSubviewForDoubleClickOnDividerAtIndex?(splitView: NSSplitView, subview: NSView, dividerIndex: number): boolean;
  // splitViewConstrainMinCoordinateOfSubviewAt?(splitView: NSSplitView, proposedMinimumPosition: number, dividerIndex: number): number;
  // splitViewConstrainMaxCoordinateOfSubviewAt?(splitView: NSSplitView, proposedMaximumPosition: number, dividerIndex: number): number;
  // splitViewConstrainSplitPositionOfSubviewAt?(splitView: NSSplitView, proposedPosition: number, dividerIndex: number): number;
  // splitViewResizeSubviewsWithOldSize?(splitView: NSSplitView, oldSize: CGSize): void;
  // splitViewShouldAdjustSizeOfSubview?(splitView: NSSplitView, view: NSView): boolean;
  // splitViewShouldHideDividerAtIndex?(splitView: NSSplitView, dividerIndex: number): boolean;
  // splitViewEffectiveRectForDrawnRectOfDividerAtIndex?(splitView: NSSplitView, proposedEffectiveRect: CGRect, drawnRect: CGRect, dividerIndex: number): CGRect;
  // splitViewAdditionalEffectiveRectOfDividerAtIndex?(splitView: NSSplitView, dividerIndex: number): CGRect;
  // splitViewWillResizeSubviews?(notification: NSNotification): void;
  // splitViewDidResizeSubviews?(notification: NSNotification): void;
}

export class NSComboBoxDelegateImpl extends NSObject implements NSComboBoxDelegate {

  static ObjCProtocols = [NSComboBoxDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // comboBoxWillPopUp?(notification: NSNotification): void;
  // comboBoxWillDismiss?(notification: NSNotification): void;
  // comboBoxSelectionDidChange?(notification: NSNotification): void;
  // comboBoxSelectionIsChanging?(notification: NSNotification): void;
}

export class NSToolbarDelegateImpl extends NSObject implements NSToolbarDelegate {

  static ObjCProtocols = [NSToolbarDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // toolbarItemForItemIdentifierWillBeInsertedIntoToolbar?(toolbar: NSToolbar, itemIdentifier: NSString | string, flag: boolean): NSToolbarItem;
  // toolbarDefaultItemIdentifiers?(toolbar: NSToolbar): NSArray;
  // toolbarAllowedItemIdentifiers?(toolbar: NSToolbar): NSArray;
  // toolbarSelectableItemIdentifiers?(toolbar: NSToolbar): NSArray;
  // toolbarImmovableItemIdentifiers?(toolbar: NSToolbar): NSSet;
  // toolbarItemIdentifierCanBeInsertedAtIndex?(toolbar: NSToolbar, itemIdentifier: NSString | string, index: number): boolean;
  // toolbarWillAddItem?(notification: NSNotification): void;
  // toolbarDidRemoveItem?(notification: NSNotification): void;
}

export class NSTokenFieldDelegateImpl extends NSObject implements NSTokenFieldDelegate {

  static ObjCProtocols = [NSTokenFieldDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // tokenFieldCompletionsForSubstringIndexOfTokenIndexOfSelectedItem?(tokenField: NSTokenField, substring: NSString | string, tokenIndex: number, selectedIndex: interop.PointerConvertible): NSArray;
  // tokenFieldShouldAddObjectsAtIndex?(tokenField: NSTokenField, tokens: NSArray | unknown[], index: number): NSArray;
  // tokenFieldDisplayStringForRepresentedObject?(tokenField: NSTokenField, representedObject: interop.Object): NSString;
  // tokenFieldEditingStringForRepresentedObject?(tokenField: NSTokenField, representedObject: interop.Object): NSString;
  // tokenFieldRepresentedObjectForEditingString?(tokenField: NSTokenField, editingString: NSString | string): interop.Object;
  // tokenFieldWriteRepresentedObjectsToPasteboard?(tokenField: NSTokenField, objects: NSArray | unknown[], pboard: NSPasteboard): boolean;
  // tokenFieldReadFromPasteboard?(tokenField: NSTokenField, pboard: NSPasteboard): NSArray;
  // tokenFieldMenuForRepresentedObject?(tokenField: NSTokenField, representedObject: interop.Object): NSMenu;
  // tokenFieldHasMenuForRepresentedObject?(tokenField: NSTokenField, representedObject: interop.Object): boolean;
  // tokenFieldStyleForRepresentedObject?(tokenField: NSTokenField, representedObject: interop.Object): interop.Enum<typeof NSTokenStyle>;
}

export class NSTextLayoutManagerDelegateImpl extends NSObject implements NSTextLayoutManagerDelegate {

  static ObjCProtocols = [NSTextLayoutManagerDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // textLayoutManagerTextLayoutFragmentForLocationInTextElement?(textLayoutManager: NSTextLayoutManager, location: NSTextLocation, textElement: NSTextElement): NSTextLayoutFragment;
  // textLayoutManagerShouldBreakLineBeforeLocationHyphenating?(textLayoutManager: NSTextLayoutManager, location: NSTextLocation, hyphenating: boolean): boolean;
  // textLayoutManagerRenderingAttributesForLinkAtLocationDefaultAttributes?(textLayoutManager: NSTextLayoutManager, link: interop.Object, location: NSTextLocation, renderingAttributes: NSDictionary | Record<string, unknown>): NSDictionary;
}

export class NSLayoutManagerDelegateImpl extends NSObject implements NSLayoutManagerDelegate {

  static ObjCProtocols = [NSLayoutManagerDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // layoutManagerShouldGenerateGlyphsPropertiesCharacterIndexesFontForGlyphRange?(layoutManager: NSLayoutManager, glyphs: interop.PointerConvertible, props: interop.PointerConvertible, charIndexes: interop.PointerConvertible, aFont: NSFont, glyphRange: _NSRange): number;
  // layoutManagerLineSpacingAfterGlyphAtIndexWithProposedLineFragmentRect?(layoutManager: NSLayoutManager, glyphIndex: number, rect: CGRect): number;
  // layoutManagerParagraphSpacingBeforeGlyphAtIndexWithProposedLineFragmentRect?(layoutManager: NSLayoutManager, glyphIndex: number, rect: CGRect): number;
  // layoutManagerParagraphSpacingAfterGlyphAtIndexWithProposedLineFragmentRect?(layoutManager: NSLayoutManager, glyphIndex: number, rect: CGRect): number;
  // layoutManagerShouldUseActionForControlCharacterAtIndex?(layoutManager: NSLayoutManager, action: interop.Enum<typeof NSControlCharacterAction>, charIndex: number): interop.Enum<typeof NSControlCharacterAction>;
  // layoutManagerShouldBreakLineByWordBeforeCharacterAtIndex?(layoutManager: NSLayoutManager, charIndex: number): boolean;
  // layoutManagerShouldBreakLineByHyphenatingBeforeCharacterAtIndex?(layoutManager: NSLayoutManager, charIndex: number): boolean;
  // layoutManagerBoundingBoxForControlGlyphAtIndexForTextContainerProposedLineFragmentGlyphPositionCharacterIndex?(layoutManager: NSLayoutManager, glyphIndex: number, textContainer: NSTextContainer, proposedRect: CGRect, glyphPosition: CGPoint, charIndex: number): CGRect;
  // layoutManagerShouldSetLineFragmentRectLineFragmentUsedRectBaselineOffsetInTextContainerForGlyphRange?(layoutManager: NSLayoutManager, lineFragmentRect: interop.PointerConvertible, lineFragmentUsedRect: interop.PointerConvertible, baselineOffset: interop.PointerConvertible, textContainer: NSTextContainer, glyphRange: _NSRange): boolean;
  // layoutManagerDidInvalidateLayout?(sender: NSLayoutManager): void;
  // layoutManagerDidCompleteLayoutForTextContainerAtEnd?(layoutManager: NSLayoutManager, textContainer: NSTextContainer | null, layoutFinishedFlag: boolean): void;
  // layoutManagerTextContainerDidChangeGeometryFromSize?(layoutManager: NSLayoutManager, textContainer: NSTextContainer, oldSize: CGSize): void;
  // layoutManagerShouldUseTemporaryAttributesForDrawingToScreenAtCharacterIndexEffectiveRange?(layoutManager: NSLayoutManager, attrs: NSDictionary | Record<string, unknown>, toScreen: boolean, charIndex: number, effectiveCharRange: interop.PointerConvertible): NSDictionary;
}

export class NSSearchFieldDelegateImpl extends NSObject implements NSSearchFieldDelegate {

  static ObjCProtocols = [NSSearchFieldDelegate];

  declare eventTargetDelegate?: WeakRef<EventTarget>;

  // searchFieldDidStartSearching?(sender: NSSearchField): void;
  // searchFieldDidEndSearching?(sender: NSSearchField): void;
}