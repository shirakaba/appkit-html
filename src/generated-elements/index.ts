/// <reference types="objc/lib/types.d.ts" />
/// <reference types="objc/types/Runtime.d.ts" />
/// <reference types="objc/types/QuartzCore.d.ts" />
/// <reference types="objc/types/Foundation.d.ts" />

export abstract class HTMLNSObjectElement extends HTMLElement {
  abstract readonly nativeObject: NSObject;
}

export class HTMLNSWindowTabGroupElement extends HTMLNSObjectElement {
  readonly nativeObject = NSWindowTabGroup.new();
}

export class HTMLNSAccessibilityCustomRotorSearchParametersElement extends HTMLNSObjectElement {
  readonly nativeObject = NSAccessibilityCustomRotorSearchParameters.new();
}

export class HTMLNSFontManagerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSFontManager.new();
}

export class HTMLNSScrubberLayoutElement extends HTMLNSObjectElement {
  readonly nativeObject = NSScrubberLayout.new();
}

export class HTMLNSCollectionViewUpdateItemElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCollectionViewUpdateItem.new();
}

export class HTMLNSControllerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSController.new();
}

export class HTMLNSHelpManagerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSHelpManager.new();
}

export class HTMLNSOpenGLPixelFormatElement extends HTMLNSObjectElement {
  readonly nativeObject = NSOpenGLPixelFormat.new();
}

export class HTMLNSTextAttachmentElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextAttachment.new();
}

export class HTMLNSCollectionViewLayoutElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCollectionViewLayout.new();
}

export class HTMLNSPasteboardItemElement extends HTMLNSObjectElement {
  readonly nativeObject = NSPasteboardItem.new();
}

export class HTMLNSScrubberFlowLayoutElement extends HTMLNSScrubberLayoutElement {
  readonly nativeObject = NSScrubberFlowLayout.new();
}

export class HTMLNSTextElementElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextElement.new();
}

export class HTMLNSTextSelectionNavigationElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextSelectionNavigation.new();
}

export class HTMLNSTextRangeElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextRange.new();
}

export class HTMLNSPressureConfigurationElement extends HTMLNSObjectElement {
  readonly nativeObject = NSPressureConfiguration.new();
}

export class HTMLNSHapticFeedbackManagerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSHapticFeedbackManager.new();
}

export class HTMLNSTextBlockElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextBlock.new();
}

export class HTMLNSTextListElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextList.new();
}

export class HTMLNSTreeNodeElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTreeNode.new();
}

export class HTMLNSObjectControllerElement extends HTMLNSControllerElement {
  readonly nativeObject = NSObjectController.new();
}

export class HTMLNSGlyphInfoElement extends HTMLNSObjectElement {
  readonly nativeObject = NSGlyphInfo.new();
}

export class HTMLNSTableViewDiffableDataSourceElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTableViewDiffableDataSource.new();
}

export class HTMLNSOpenGLPixelBufferElement extends HTMLNSObjectElement {
  readonly nativeObject = NSOpenGLPixelBuffer.new();
}

export class HTMLNSCellElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCell.new();
}

export class HTMLNSStatusItemElement extends HTMLNSObjectElement {
  readonly nativeObject = NSStatusItem.new();
}

export class HTMLNSSpeechRecognizerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSSpeechRecognizer.new();
}

export class HTMLNSCollectionLayoutGroupCustomItemElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCollectionLayoutGroupCustomItem.new();
}

export class HTMLNSTableViewRowActionElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTableViewRowAction.new();
}

export class HTMLNSTextAttachmentViewProviderElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextAttachmentViewProvider.new();
}

export class HTMLNSToolbarItemElement extends HTMLNSObjectElement {
  readonly nativeObject = NSToolbarItem.new();
}

export class HTMLNSGlyphGeneratorElement extends HTMLNSObjectElement {
  readonly nativeObject = NSGlyphGenerator.new();
}

export class HTMLNSGridCellElement extends HTMLNSObjectElement {
  readonly nativeObject = NSGridCell.new();
}

export class HTMLNSColorSamplerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSColorSampler.new();
}

export class HTMLNSPDFPanelElement extends HTMLNSObjectElement {
  readonly nativeObject = NSPDFPanel.new();
}

export class HTMLNSPageLayoutElement extends HTMLNSObjectElement {
  readonly nativeObject = NSPageLayout.new();
}

export class HTMLNSScreenElement extends HTMLNSObjectElement {
  readonly nativeObject = NSScreen.new();
}

export class HTMLNSImageSymbolConfigurationElement extends HTMLNSObjectElement {
  readonly nativeObject = NSImageSymbolConfiguration.new();
}

export class HTMLNSRulerMarkerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSRulerMarker.new();
}

export class HTMLNSFilePromiseReceiverElement extends HTMLNSObjectElement {
  readonly nativeObject = NSFilePromiseReceiver.new();
}

export class HTMLNSColorPickerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSColorPicker.new();
}

export class HTMLNSBrowserCellElement extends HTMLNSCellElement {
  readonly nativeObject = NSBrowserCell.new();
}

export class HTMLNSImageRepElement extends HTMLNSObjectElement {
  readonly nativeObject = NSImageRep.new();
}

export class HTMLNSFontCollectionElement extends HTMLNSObjectElement {
  readonly nativeObject = NSFontCollection.new();
}

export class HTMLNSFontAssetRequestElement extends HTMLNSObjectElement {
  readonly nativeObject = NSFontAssetRequest.new();
}

export class HTMLNSFontDescriptorElement extends HTMLNSObjectElement {
  readonly nativeObject = NSFontDescriptor.new();
}

export class HTMLNSGradientElement extends HTMLNSObjectElement {
  readonly nativeObject = NSGradient.new();
}

export class HTMLNSCollectionLayoutEdgeSpacingElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCollectionLayoutEdgeSpacing.new();
}

export class HTMLNSCollectionLayoutSizeElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCollectionLayoutSize.new();
}

export class HTMLNSSharingServicePickerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSSharingServicePicker.new();
}

export class HTMLNSCollectionViewCompositionalLayoutConfigurationElement extends HTMLNSObjectElement {
  readonly nativeObject =
    NSCollectionViewCompositionalLayoutConfiguration.new();
}

export class HTMLNSCollectionViewLayoutInvalidationContextElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCollectionViewLayoutInvalidationContext.new();
}

export class HTMLNSStoryboardSegueElement extends HTMLNSObjectElement {
  readonly nativeObject = NSStoryboardSegue.new();
}

export class HTMLNSTouchBarElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTouchBar.new();
}

export class HTMLNSActionCellElement extends HTMLNSCellElement {
  readonly nativeObject = NSActionCell.new();
}

export class HTMLNSColorListElement extends HTMLNSObjectElement {
  readonly nativeObject = NSColorList.new();
}

export class HTMLNSDocumentElement extends HTMLNSObjectElement {
  readonly nativeObject = NSDocument.new();
}

export class HTMLNSBindingSelectionMarkerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSBindingSelectionMarker.new();
}

export class HTMLNSTextTabElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextTab.new();
}

export class HTMLNSResponderElement extends HTMLNSObjectElement {
  readonly nativeObject = NSResponder.new();
}

export class HTMLNSTouchElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTouch.new();
}

export class HTMLNSWorkspaceElement extends HTMLNSObjectElement {
  readonly nativeObject = NSWorkspace.new();
}

export class HTMLNSAccessibilityElementElement extends HTMLNSObjectElement {
  readonly nativeObject = NSAccessibilityElement.new();
}

export class HTMLNSNibElement extends HTMLNSObjectElement {
  readonly nativeObject = NSNib.new();
}

export class HTMLNSMenuToolbarItemElement extends HTMLNSToolbarItemElement {
  readonly nativeObject = NSMenuToolbarItem.new();
}

export class HTMLNSSplitViewItemElement extends HTMLNSObjectElement {
  readonly nativeObject = NSSplitViewItem.new();
}

export class HTMLNSShadowElement extends HTMLNSObjectElement {
  readonly nativeObject = NSShadow.new();
}

export class HTMLNSInputManagerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSInputManager.new();
}

export class HTMLNSEventElement extends HTMLNSObjectElement {
  readonly nativeObject = NSEvent.new();
}

export class HTMLNSSliderAccessoryElement extends HTMLNSObjectElement {
  readonly nativeObject = NSSliderAccessory.new();
}

export class HTMLNSAccessibilityCustomRotorItemResultElement extends HTMLNSObjectElement {
  readonly nativeObject = NSAccessibilityCustomRotorItemResult.new();
}

export class HTMLNSPasteboardElement extends HTMLNSObjectElement {
  readonly nativeObject = NSPasteboard.new();
}

export class HTMLNSWindowElement extends HTMLNSResponderElement {
  readonly nativeObject = NSWindow.new();
}

export class HTMLNSScrubberLayoutAttributesElement extends HTMLNSObjectElement {
  readonly nativeObject = NSScrubberLayoutAttributes.new();
}

export class HTMLNSTextLayoutFragmentElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextLayoutFragment.new();
}

export class HTMLNSCursorElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCursor.new();
}

export class HTMLNSTabViewItemElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTabViewItem.new();
}

export class HTMLNSMenuItemBadgeElement extends HTMLNSObjectElement {
  readonly nativeObject = NSMenuItemBadge.new();
}

export class HTMLNSGridColumnElement extends HTMLNSObjectElement {
  readonly nativeObject = NSGridColumn.new();
}

export class HTMLNSPathCellElement extends HTMLNSActionCellElement {
  readonly nativeObject = NSPathCell.new();
}

export class HTMLNSWorkspaceAuthorizationElement extends HTMLNSObjectElement {
  readonly nativeObject = NSWorkspaceAuthorization.new();
}

export class HTMLNSTextLayoutManagerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextLayoutManager.new();
}

export class HTMLNSWindowTabElement extends HTMLNSObjectElement {
  readonly nativeObject = NSWindowTab.new();
}

export class HTMLNSDrawerElement extends HTMLNSResponderElement {
  readonly nativeObject = NSDrawer.new();
}

export class HTMLNSLayoutManagerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSLayoutManager.new();
}

export class HTMLNSSharingServiceElement extends HTMLNSObjectElement {
  readonly nativeObject = NSSharingService.new();
}

export class HTMLNSTreeControllerElement extends HTMLNSObjectControllerElement {
  readonly nativeObject = NSTreeController.new();
}

export class HTMLNSTypesetterElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTypesetter.new();
}

export class HTMLNSScrubberSelectionStyleElement extends HTMLNSObjectElement {
  readonly nativeObject = NSScrubberSelectionStyle.new();
}

export class HTMLNSPreviewRepresentingActivityItemElement extends HTMLNSObjectElement {
  readonly nativeObject = NSPreviewRepresentingActivityItem.new();
}

export class HTMLNSDraggingSessionElement extends HTMLNSObjectElement {
  readonly nativeObject = NSDraggingSession.new();
}

export class HTMLNSCollectionViewDiffableDataSourceElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCollectionViewDiffableDataSource.new();
}

export class HTMLNSTextContentManagerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextContentManager.new();
}

export class HTMLNSPrinterElement extends HTMLNSObjectElement {
  readonly nativeObject = NSPrinter.new();
}

export class HTMLNSAppearanceElement extends HTMLNSObjectElement {
  readonly nativeObject = NSAppearance.new();
}

export class HTMLNSTextInputContextElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextInputContext.new();
}

export class HTMLNSCustomImageRepElement extends HTMLNSImageRepElement {
  readonly nativeObject = NSCustomImageRep.new();
}

export class HTMLNSTextCheckingControllerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextCheckingController.new();
}

export class HTMLNSColorSpaceElement extends HTMLNSObjectElement {
  readonly nativeObject = NSColorSpace.new();
}

export class HTMLNSAnimationContextElement extends HTMLNSObjectElement {
  readonly nativeObject = NSAnimationContext.new();
}

export class HTMLNSStringDrawingContextElement extends HTMLNSObjectElement {
  readonly nativeObject = NSStringDrawingContext.new();
}

export class HTMLNSBezierPathElement extends HTMLNSObjectElement {
  readonly nativeObject = NSBezierPath.new();
}

export class HTMLNSAccessibilityCustomActionElement extends HTMLNSObjectElement {
  readonly nativeObject = NSAccessibilityCustomAction.new();
}

export class HTMLNSViewElement extends HTMLNSResponderElement {
  readonly nativeObject = NSView.new();
}

export class HTMLNSImageElement extends HTMLNSObjectElement {
  readonly nativeObject = NSImage.new();
}

export class HTMLNSToolbarElement extends HTMLNSObjectElement {
  readonly nativeObject = NSToolbar.new();
}

export class HTMLNSTabViewElement extends HTMLNSViewElement {
  readonly nativeObject = NSTabView.new();
}

export class HTMLNSApplicationElement extends HTMLNSResponderElement {
  readonly nativeObject = NSApplication.new();
}

export class HTMLNSTouchBarItemElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTouchBarItem.new();
}

export class HTMLNSCollectionViewGridLayoutElement extends HTMLNSCollectionViewLayoutElement {
  readonly nativeObject = NSCollectionViewGridLayout.new();
}

export class HTMLNSImageCellElement extends HTMLNSCellElement {
  readonly nativeObject = NSImageCell.new();
}

export class HTMLNSWindowControllerElement extends HTMLNSResponderElement {
  readonly nativeObject = NSWindowController.new();
}

export class HTMLNSTextFieldCellElement extends HTMLNSActionCellElement {
  readonly nativeObject = NSTextFieldCell.new();
}

export class HTMLNSSliderCellElement extends HTMLNSActionCellElement {
  // @ts-ignore
  readonly nativeObject = NSSliderCell.new();
}

export class HTMLNSTokenFieldCellElement extends HTMLNSTextFieldCellElement {
  readonly nativeObject = NSTokenFieldCell.new();
}

export class HTMLNSSharingServicePickerToolbarItemElement extends HTMLNSToolbarItemElement {
  readonly nativeObject = NSSharingServicePickerToolbarItem.new();
}

export class HTMLNSButtonTouchBarItemElement extends HTMLNSTouchBarItemElement {
  // @ts-ignore
  readonly nativeObject = NSButtonTouchBarItem.new();
}

export class HTMLNSTextTableBlockElement extends HTMLNSTextBlockElement {
  readonly nativeObject = NSTextTableBlock.new();
}

export class HTMLNSComboBoxCellElement extends HTMLNSTextFieldCellElement {
  readonly nativeObject = NSComboBoxCell.new();
}

export class HTMLNSSecureTextFieldCellElement extends HTMLNSTextFieldCellElement {
  readonly nativeObject = NSSecureTextFieldCell.new();
}

export class HTMLNSTrackingSeparatorToolbarItemElement extends HTMLNSToolbarItemElement {
  readonly nativeObject = NSTrackingSeparatorToolbarItem.new();
}

export class HTMLNSStepperCellElement extends HTMLNSActionCellElement {
  readonly nativeObject = NSStepperCell.new();
}

export class HTMLNSPopoverTouchBarItemElement extends HTMLNSTouchBarItemElement {
  // @ts-ignore
  readonly nativeObject = NSPopoverTouchBarItem.new();
}

export class HTMLNSPersistentDocumentElement extends HTMLNSDocumentElement {
  // @ts-ignore
  readonly nativeObject = NSPersistentDocument.new();
}

export class HTMLNSColorPickerTouchBarItemElement extends HTMLNSTouchBarItemElement {
  // @ts-ignore
  readonly nativeObject = NSColorPickerTouchBarItem.new();
}

export class HTMLNSEPSImageRepElement extends HTMLNSImageRepElement {
  readonly nativeObject = NSEPSImageRep.new();
}

export class HTMLNSCIImageRepElement extends HTMLNSImageRepElement {
  readonly nativeObject = NSCIImageRep.new();
}

export class HTMLNSBitmapImageRepElement extends HTMLNSImageRepElement {
  readonly nativeObject = NSBitmapImageRep.new();
}

export class HTMLNSMutableFontCollectionElement extends HTMLNSFontCollectionElement {
  // @ts-ignore
  readonly nativeObject = NSMutableFontCollection.new();
}

export class HTMLNSCollectionViewElement extends HTMLNSViewElement {
  readonly nativeObject = NSCollectionView.new();
}

export class HTMLNSButtonCellElement extends HTMLNSActionCellElement {
  // @ts-ignore
  readonly nativeObject = NSButtonCell.new();
}

export class HTMLNSBoxElement extends HTMLNSViewElement {
  readonly nativeObject = NSBox.new();
}

export class HTMLNSScrollViewElement extends HTMLNSViewElement {
  // @ts-ignore
  readonly nativeObject = NSScrollView.new();
}

export class HTMLNSATSTypesetterElement extends HTMLNSTypesetterElement {
  readonly nativeObject = NSATSTypesetter.new();
}

export class HTMLNSTableCellViewElement extends HTMLNSViewElement {
  readonly nativeObject = NSTableCellView.new();
}

export class HTMLNSVisualEffectViewElement extends HTMLNSViewElement {
  readonly nativeObject = NSVisualEffectView.new();
}

export class HTMLNSTableRowViewElement extends HTMLNSViewElement {
  readonly nativeObject = NSTableRowView.new();
}

export class HTMLNSCollectionLayoutSpacingElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCollectionLayoutSpacing.new();
}

export class HTMLNSCachedImageRepElement extends HTMLNSImageRepElement {
  readonly nativeObject = NSCachedImageRep.new();
}

export class HTMLNSDockTileElement extends HTMLNSObjectElement {
  readonly nativeObject = NSDockTile.new();
}

export class HTMLNSAlertElement extends HTMLNSObjectElement {
  readonly nativeObject = NSAlert.new();
}

export class HTMLNSTextLineFragmentElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextLineFragment.new();
}

export class HTMLNSTextSelectionElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextSelection.new();
}

export class HTMLNSAlignmentFeedbackFilterElement extends HTMLNSObjectElement {
  readonly nativeObject = NSAlignmentFeedbackFilter.new();
}

export class HTMLNSParagraphStyleElement extends HTMLNSObjectElement {
  readonly nativeObject = NSParagraphStyle.new();
}

export class HTMLNSDictionaryControllerKeyValuePairElement extends HTMLNSObjectElement {
  readonly nativeObject = NSDictionaryControllerKeyValuePair.new();
}

export class HTMLNSOpenGLViewElement extends HTMLNSViewElement {
  readonly nativeObject = NSOpenGLView.new();
}

export class HTMLNSMovieElement extends HTMLNSObjectElement {
  readonly nativeObject = NSMovie.new();
}

export class HTMLNSDataAssetElement extends HTMLNSObjectElement {
  readonly nativeObject = NSDataAsset.new();
}

export class HTMLNSTableHeaderViewElement extends HTMLNSViewElement {
  readonly nativeObject = NSTableHeaderView.new();
}

export class HTMLNSTextInsertionIndicatorElement extends HTMLNSViewElement {
  readonly nativeObject = NSTextInsertionIndicator.new();
}

export class HTMLNSSegmentedCellElement extends HTMLNSActionCellElement {
  readonly nativeObject = NSSegmentedCell.new();
}

export class HTMLNSSliderAccessoryBehaviorElement extends HTMLNSObjectElement {
  readonly nativeObject = NSSliderAccessoryBehavior.new();
}

export class HTMLNSInputServerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSInputServer.new();
}

export class HTMLNSFormCellElement extends HTMLNSActionCellElement {
  // @ts-ignore
  readonly nativeObject = NSFormCell.new();
}

export class HTMLNSFontElement extends HTMLNSObjectElement {
  readonly nativeObject = NSFont.new();
}

export class HTMLNSLayoutAnchorElement extends HTMLNSObjectElement {
  readonly nativeObject = NSLayoutAnchor.new();
}

export class HTMLNSCollectionLayoutDimensionElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCollectionLayoutDimension.new();
}

export class HTMLNSCollectionViewLayoutAttributesElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCollectionViewLayoutAttributes.new();
}

export class HTMLNSUserInterfaceCompressionOptionsElement extends HTMLNSObjectElement {
  readonly nativeObject = NSUserInterfaceCompressionOptions.new();
}

export class HTMLNSTextAttachmentCellElement extends HTMLNSCellElement {
  // @ts-ignore
  readonly nativeObject = NSTextAttachmentCell.new();
}

export class HTMLNSMenuItemElement extends HTMLNSObjectElement {
  readonly nativeObject = NSMenuItem.new();
}

export class HTMLNSPrintOperationElement extends HTMLNSObjectElement {
  readonly nativeObject = NSPrintOperation.new();
}

export class HTMLNSAccessibilityCustomRotorElement extends HTMLNSObjectElement {
  readonly nativeObject = NSAccessibilityCustomRotor.new();
}

export class HTMLNSClipViewElement extends HTMLNSViewElement {
  readonly nativeObject = NSClipView.new();
}

export class HTMLNSPopoverElement extends HTMLNSResponderElement {
  readonly nativeObject = NSPopover.new();
}

export class HTMLNSCustomTouchBarItemElement extends HTMLNSTouchBarItemElement {
  // @ts-ignore
  readonly nativeObject = NSCustomTouchBarItem.new();
}

export class HTMLNSGestureRecognizerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSGestureRecognizer.new();
}

export class HTMLNSStatusBarElement extends HTMLNSObjectElement {
  readonly nativeObject = NSStatusBar.new();
}

export class HTMLNSPDFInfoElement extends HTMLNSObjectElement {
  readonly nativeObject = NSPDFInfo.new();
}

export class HTMLNSTextTableElement extends HTMLNSTextBlockElement {
  readonly nativeObject = NSTextTable.new();
}

export class HTMLNSCollectionViewFlowLayoutInvalidationContextElement extends HTMLNSCollectionViewLayoutInvalidationContextElement {
  readonly nativeObject = NSCollectionViewFlowLayoutInvalidationContext.new();
}

export class HTMLNSPrintPanelElement extends HTMLNSObjectElement {
  readonly nativeObject = NSPrintPanel.new();
}

export class HTMLNSDocumentControllerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSDocumentController.new();
}

export class HTMLNSStepperTouchBarItemElement extends HTMLNSTouchBarItemElement {
  // @ts-ignore
  readonly nativeObject = NSStepperTouchBarItem.new();
}

export class HTMLNSPrintInfoElement extends HTMLNSObjectElement {
  readonly nativeObject = NSPrintInfo.new();
}

export class HTMLNSTextFinderElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextFinder.new();
}

export class HTMLNSCollectionViewTransitionLayoutElement extends HTMLNSCollectionViewLayoutElement {
  readonly nativeObject = NSCollectionViewTransitionLayout.new();
}

export class HTMLNSToolbarItemGroupElement extends HTMLNSToolbarItemElement {
  readonly nativeObject = NSToolbarItemGroup.new();
}

export class HTMLNSTableColumnElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTableColumn.new();
}

export class HTMLNSPICTImageRepElement extends HTMLNSImageRepElement {
  readonly nativeObject = NSPICTImageRep.new();
}

export class HTMLNSWorkspaceOpenConfigurationElement extends HTMLNSObjectElement {
  readonly nativeObject = NSWorkspaceOpenConfiguration.new();
}

export class HTMLNSPredicateEditorRowTemplateElement extends HTMLNSObjectElement {
  readonly nativeObject = NSPredicateEditorRowTemplate.new();
}

export class HTMLNSMediaLibraryBrowserControllerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSMediaLibraryBrowserController.new();
}

export class HTMLNSPathControlItemElement extends HTMLNSObjectElement {
  readonly nativeObject = NSPathControlItem.new();
}

export class HTMLNSSliderTouchBarItemElement extends HTMLNSTouchBarItemElement {
  // @ts-ignore
  readonly nativeObject = NSSliderTouchBarItem.new();
}

export class HTMLNSTableHeaderCellElement extends HTMLNSTextFieldCellElement {
  readonly nativeObject = NSTableHeaderCell.new();
}

export class HTMLNSMenuItemCellElement extends HTMLNSButtonCellElement {
  // @ts-ignore
  readonly nativeObject = NSMenuItemCell.new();
}

export class HTMLNSPanGestureRecognizerElement extends HTMLNSGestureRecognizerElement {
  readonly nativeObject = NSPanGestureRecognizer.new();
}

export class HTMLNSClickGestureRecognizerElement extends HTMLNSGestureRecognizerElement {
  readonly nativeObject = NSClickGestureRecognizer.new();
}

export class HTMLNSLayoutYAxisAnchorElement extends HTMLNSLayoutAnchorElement {
  readonly nativeObject = NSLayoutYAxisAnchor.new();
}

export class HTMLNSMagnificationGestureRecognizerElement extends HTMLNSGestureRecognizerElement {
  readonly nativeObject = NSMagnificationGestureRecognizer.new();
}

export class HTMLNSCandidateListTouchBarItemElement extends HTMLNSTouchBarItemElement {
  // @ts-ignore
  readonly nativeObject = NSCandidateListTouchBarItem.new();
}

export class HTMLNSCollectionViewFlowLayoutElement extends HTMLNSCollectionViewLayoutElement {
  readonly nativeObject = NSCollectionViewFlowLayout.new();
}

export class HTMLNSSearchToolbarItemElement extends HTMLNSToolbarItemElement {
  readonly nativeObject = NSSearchToolbarItem.new();
}

export class HTMLNSPickerTouchBarItemElement extends HTMLNSTouchBarItemElement {
  // @ts-ignore
  readonly nativeObject = NSPickerTouchBarItem.new();
}

export class HTMLNSArrayControllerElement extends HTMLNSObjectControllerElement {
  readonly nativeObject = NSArrayController.new();
}

export class HTMLNSGridViewElement extends HTMLNSViewElement {
  readonly nativeObject = NSGridView.new();
}

export class HTMLNSSplitViewElement extends HTMLNSViewElement {
  readonly nativeObject = NSSplitView.new();
}

export class HTMLNSLayoutDimensionElement extends HTMLNSLayoutAnchorElement {
  readonly nativeObject = NSLayoutDimension.new();
}

export class HTMLNSDatePickerCellElement extends HTMLNSActionCellElement {
  readonly nativeObject = NSDatePickerCell.new();
}

export class HTMLNSViewControllerElement extends HTMLNSResponderElement {
  readonly nativeObject = NSViewController.new();
}

export class HTMLNSPressGestureRecognizerElement extends HTMLNSGestureRecognizerElement {
  readonly nativeObject = NSPressGestureRecognizer.new();
}

export class HTMLNSPopUpButtonCellElement extends HTMLNSMenuItemCellElement {
  readonly nativeObject = NSPopUpButtonCell.new();
}

export class HTMLNSTextElement extends HTMLNSViewElement {
  // @ts-ignore
  readonly nativeObject = NSText.new();
}

export class HTMLNSRulerViewElement extends HTMLNSViewElement {
  readonly nativeObject = NSRulerView.new();
}

export class HTMLNSTextViewportLayoutControllerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextViewportLayoutController.new();
}

export class HTMLNSTintConfigurationElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTintConfiguration.new();
}

export class HTMLNSUserDefaultsControllerElement extends HTMLNSControllerElement {
  readonly nativeObject = NSUserDefaultsController.new();
}

export class HTMLNSOpenGLContextElement extends HTMLNSObjectElement {
  readonly nativeObject = NSOpenGLContext.new();
}

export class HTMLNSProgressIndicatorElement extends HTMLNSViewElement {
  // @ts-ignore
  readonly nativeObject = NSProgressIndicator.new();
}

export class HTMLNSScrubberArrangedViewElement extends HTMLNSViewElement {
  readonly nativeObject = NSScrubberArrangedView.new();
}

export class HTMLNSLayoutConstraintElement extends HTMLNSObjectElement {
  readonly nativeObject = NSLayoutConstraint.new();
}

export class HTMLNSSpeechSynthesizerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSSpeechSynthesizer.new();
}

export class HTMLNSMutableParagraphStyleElement extends HTMLNSParagraphStyleElement {
  // @ts-ignore
  readonly nativeObject = NSMutableParagraphStyle.new();
}

export class HTMLNSStoryboardElement extends HTMLNSObjectElement {
  readonly nativeObject = NSStoryboard.new();
}

export class HTMLNSCollectionLayoutItemElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCollectionLayoutItem.new();
}

export class HTMLNSCollectionLayoutSectionElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCollectionLayoutSection.new();
}

export class HTMLNSGroupTouchBarItemElement extends HTMLNSTouchBarItemElement {
  // @ts-ignore
  readonly nativeObject = NSGroupTouchBarItem.new();
}

export class HTMLNSMenuElement extends HTMLNSObjectElement {
  readonly nativeObject = NSMenu.new();
}

export class HTMLNSScrubberProportionalLayoutElement extends HTMLNSScrubberLayoutElement {
  readonly nativeObject = NSScrubberProportionalLayout.new();
}

export class HTMLNSTextContainerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextContainer.new();
}

export class HTMLNSPanelElement extends HTMLNSWindowElement {
  // @ts-ignore
  readonly nativeObject = NSPanel.new();
}

export class HTMLNSTitlebarAccessoryViewControllerElement extends HTMLNSViewControllerElement {
  readonly nativeObject = NSTitlebarAccessoryViewController.new();
}

export class HTMLNSRotationGestureRecognizerElement extends HTMLNSGestureRecognizerElement {
  readonly nativeObject = NSRotationGestureRecognizer.new();
}

export class HTMLNSDraggingItemElement extends HTMLNSObjectElement {
  readonly nativeObject = NSDraggingItem.new();
}

export class HTMLNSCollectionViewCompositionalLayoutElement extends HTMLNSCollectionViewLayoutElement {
  readonly nativeObject = NSCollectionViewCompositionalLayout.new();
}

export class HTMLNSTrackingAreaElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTrackingArea.new();
}

export class HTMLNSCollectionLayoutSupplementaryItemElement extends HTMLNSCollectionLayoutItemElement {
  readonly nativeObject = NSCollectionLayoutSupplementaryItem.new();
}

export class HTMLNSCollectionViewItemElement extends HTMLNSViewControllerElement {
  readonly nativeObject = NSCollectionViewItem.new();
}

export class HTMLNSDictionaryControllerElement extends HTMLNSArrayControllerElement {
  // @ts-ignore
  readonly nativeObject = NSDictionaryController.new();
}

export class HTMLNSSavePanelElement extends HTMLNSPanelElement {
  // @ts-ignore
  readonly nativeObject = NSSavePanel.new();
}

export class HTMLNSCollectionLayoutDecorationItemElement extends HTMLNSCollectionLayoutItemElement {
  readonly nativeObject = NSCollectionLayoutDecorationItem.new();
}

export class HTMLNSSplitViewControllerElement extends HTMLNSViewControllerElement {
  readonly nativeObject = NSSplitViewController.new();
}

export class HTMLNSFontPanelElement extends HTMLNSPanelElement {
  // @ts-ignore
  readonly nativeObject = NSFontPanel.new();
}

export class HTMLNSScrubberItemViewElement extends HTMLNSScrubberArrangedViewElement {
  readonly nativeObject = NSScrubberItemView.new();
}

export class HTMLNSCollectionLayoutBoundarySupplementaryItemElement extends HTMLNSCollectionLayoutSupplementaryItemElement {
  readonly nativeObject = NSCollectionLayoutBoundarySupplementaryItem.new();
}

export class HTMLNSPathComponentCellElement extends HTMLNSTextFieldCellElement {
  readonly nativeObject = NSPathComponentCell.new();
}

export class HTMLNSScrubberElement extends HTMLNSViewElement {
  readonly nativeObject = NSScrubber.new();
}

export class HTMLNSControlElement extends HTMLNSViewElement {
  // @ts-ignore
  readonly nativeObject = NSControl.new();
}

export class HTMLNSStackViewElement extends HTMLNSViewElement {
  readonly nativeObject = NSStackView.new();
}

export class HTMLNSColorWellElement extends HTMLNSControlElement {
  readonly nativeObject = NSColorWell.new();
}

export class HTMLNSTextAlternativesElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextAlternatives.new();
}

export class HTMLNSSoundElement extends HTMLNSObjectElement {
  readonly nativeObject = NSSound.new();
}

export class HTMLNSGridRowElement extends HTMLNSObjectElement {
  readonly nativeObject = NSGridRow.new();
}

export class HTMLNSCollectionLayoutAnchorElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCollectionLayoutAnchor.new();
}

export class HTMLNSColorElement extends HTMLNSObjectElement {
  readonly nativeObject = NSColor.new();
}

export class HTMLNSGraphicsContextElement extends HTMLNSObjectElement {
  readonly nativeObject = NSGraphicsContext.new();
}

export class HTMLNSCollectionLayoutGroupElement extends HTMLNSCollectionLayoutItemElement {
  // @ts-ignore
  readonly nativeObject = NSCollectionLayoutGroup.new();
}

export class HTMLNSLayoutGuideElement extends HTMLNSObjectElement {
  readonly nativeObject = NSLayoutGuide.new();
}

export class HTMLNSFilePromiseProviderElement extends HTMLNSObjectElement {
  readonly nativeObject = NSFilePromiseProvider.new();
}

export class HTMLNSLevelIndicatorCellElement extends HTMLNSActionCellElement {
  readonly nativeObject = NSLevelIndicatorCell.new();
}

export class HTMLNSDatePickerElement extends HTMLNSControlElement {
  readonly nativeObject = NSDatePicker.new();
}

export class HTMLNSScrubberImageItemViewElement extends HTMLNSScrubberItemViewElement {
  readonly nativeObject = NSScrubberImageItemView.new();
}

export class HTMLNSMatrixElement extends HTMLNSControlElement {
  readonly nativeObject = NSMatrix.new();
}

export class HTMLNSRuleEditorElement extends HTMLNSControlElement {
  readonly nativeObject = NSRuleEditor.new();
}

export class HTMLNSSegmentedControlElement extends HTMLNSControlElement {
  readonly nativeObject = NSSegmentedControl.new();
}

export class HTMLNSPathControlElement extends HTMLNSControlElement {
  readonly nativeObject = NSPathControl.new();
}

export class HTMLNSBrowserElement extends HTMLNSControlElement {
  // @ts-ignore
  readonly nativeObject = NSBrowser.new();
}

export class HTMLNSLevelIndicatorElement extends HTMLNSControlElement {
  readonly nativeObject = NSLevelIndicator.new();
}

export class HTMLNSComboButtonElement extends HTMLNSControlElement {
  readonly nativeObject = NSComboButton.new();
}

export class HTMLNSFormElement extends HTMLNSMatrixElement {
  readonly nativeObject = NSForm.new();
}

export class HTMLNSImageViewElement extends HTMLNSControlElement {
  readonly nativeObject = NSImageView.new();
}

export class HTMLNSColorPanelElement extends HTMLNSPanelElement {
  readonly nativeObject = NSColorPanel.new();
}

export class HTMLNSTableViewElement extends HTMLNSControlElement {
  // @ts-ignore
  readonly nativeObject = NSTableView.new();
}

export class HTMLNSLayoutXAxisAnchorElement extends HTMLNSLayoutAnchorElement {
  readonly nativeObject = NSLayoutXAxisAnchor.new();
}

export class HTMLNSScrubberSelectionViewElement extends HTMLNSScrubberArrangedViewElement {
  readonly nativeObject = NSScrubberSelectionView.new();
}

export class HTMLNSDiffableDataSourceSnapshotElement extends HTMLNSObjectElement {
  readonly nativeObject = NSDiffableDataSourceSnapshot.new();
}

export class HTMLNSSearchFieldCellElement extends HTMLNSTextFieldCellElement {
  readonly nativeObject = NSSearchFieldCell.new();
}

export class HTMLNSDraggingImageComponentElement extends HTMLNSObjectElement {
  readonly nativeObject = NSDraggingImageComponent.new();
}

export class HTMLNSRunningApplicationElement extends HTMLNSObjectElement {
  readonly nativeObject = NSRunningApplication.new();
}

export class HTMLNSAnimationElement extends HTMLNSObjectElement {
  readonly nativeObject = NSAnimation.new();
}

export class HTMLNSSpellCheckerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSSpellChecker.new();
}

export class HTMLNSOutlineViewElement extends HTMLNSTableViewElement {
  // @ts-ignore
  readonly nativeObject = NSOutlineView.new();
}

export class HTMLNSSliderElement extends HTMLNSControlElement {
  readonly nativeObject = NSSlider.new();
}

export class HTMLNSPredicateEditorElement extends HTMLNSRuleEditorElement {
  readonly nativeObject = NSPredicateEditor.new();
}

export class HTMLNSTextFieldElement extends HTMLNSControlElement {
  // @ts-ignore
  readonly nativeObject = NSTextField.new();
}

export class HTMLNSScrubberTextItemViewElement extends HTMLNSScrubberItemViewElement {
  readonly nativeObject = NSScrubberTextItemView.new();
}

export class HTMLNSButtonElement extends HTMLNSControlElement {
  // @ts-ignore
  readonly nativeObject = NSButton.new();
}

export class HTMLNSSharingServicePickerTouchBarItemElement extends HTMLNSTouchBarItemElement {
  readonly nativeObject = NSSharingServicePickerTouchBarItem.new();
}

export class HTMLNSSwitchElement extends HTMLNSControlElement {
  // @ts-ignore
  readonly nativeObject = NSSwitch.new();
}

export class HTMLNSTextParagraphElement extends HTMLNSTextElementElement {
  readonly nativeObject = NSTextParagraph.new();
}

export class HTMLNSPageControllerElement extends HTMLNSViewControllerElement {
  readonly nativeObject = NSPageController.new();
}

export class HTMLNSTextListElementElement extends HTMLNSTextParagraphElement {
  // @ts-ignore
  readonly nativeObject = NSTextListElement.new();
}

export class HTMLNSComboBoxElement extends HTMLNSTextFieldElement {
  // @ts-ignore
  readonly nativeObject = NSComboBox.new();
}

export class HTMLNSSecureTextFieldElement extends HTMLNSTextFieldElement {
  readonly nativeObject = NSSecureTextField.new();
}

export class HTMLNSPopUpButtonElement extends HTMLNSButtonElement {
  // @ts-ignore
  readonly nativeObject = NSPopUpButton.new();
}

export class HTMLNSScrollerElement extends HTMLNSControlElement {
  readonly nativeObject = NSScroller.new();
}

export class HTMLNSViewAnimationElement extends HTMLNSAnimationElement {
  readonly nativeObject = NSViewAnimation.new();
}

export class HTMLNSTabViewControllerElement extends HTMLNSViewControllerElement {
  readonly nativeObject = NSTabViewController.new();
}

export class HTMLNSOpenPanelElement extends HTMLNSSavePanelElement {
  readonly nativeObject = NSOpenPanel.new();
}

export class HTMLNSTokenFieldElement extends HTMLNSTextFieldElement {
  // @ts-ignore
  readonly nativeObject = NSTokenField.new();
}

export class HTMLNSSearchFieldElement extends HTMLNSTextFieldElement {
  // @ts-ignore
  readonly nativeObject = NSSearchField.new();
}

export class HTMLNSStepperElement extends HTMLNSControlElement {
  readonly nativeObject = NSStepper.new();
}

export class HTMLNSTextContentStorageElement extends HTMLNSTextContentManagerElement {
  // @ts-ignore
  readonly nativeObject = NSTextContentStorage.new();
}

export class HTMLNSStatusBarButtonElement extends HTMLNSButtonElement {
  readonly nativeObject = NSStatusBarButton.new();
}

export class HTMLNSPDFImageRepElement extends HTMLNSImageRepElement {
  readonly nativeObject = NSPDFImageRep.new();
}

export class HTMLNSTextViewElement extends HTMLNSTextElement {
  // @ts-ignore
  readonly nativeObject = NSTextView.new();
}
