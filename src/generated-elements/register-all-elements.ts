export async function registerAllElements() {
  const {
    HTMLNSAccessibilityCustomActionElement,
    HTMLNSAccessibilityCustomRotorElement,
    HTMLNSAccessibilityCustomRotorItemResultElement,
    HTMLNSAccessibilityCustomRotorSearchParametersElement,
    HTMLNSAccessibilityElementElement,
    HTMLNSActionCellElement,
    HTMLNSAlertElement,
    HTMLNSAlignmentFeedbackFilterElement,
    HTMLNSAnimationElement,
    HTMLNSAnimationContextElement,
    HTMLNSAppearanceElement,
    HTMLNSApplicationElement,
    HTMLNSArrayControllerElement,
    HTMLNSATSTypesetterElement,
    HTMLNSBezierPathElement,
    HTMLNSBindingSelectionMarkerElement,
    HTMLNSBitmapImageRepElement,
    HTMLNSBoxElement,
    HTMLNSBrowserElement,
    HTMLNSBrowserCellElement,
    HTMLNSButtonElement,
    HTMLNSButtonCellElement,
    HTMLNSButtonTouchBarItemElement,
    HTMLNSCachedImageRepElement,
    HTMLNSCandidateListTouchBarItemElement,
    HTMLNSCellElement,
    HTMLNSCIImageRepElement,
    HTMLNSClickGestureRecognizerElement,
    HTMLNSClipViewElement,
    HTMLNSCollectionLayoutAnchorElement,
    HTMLNSCollectionLayoutBoundarySupplementaryItemElement,
    HTMLNSCollectionLayoutDecorationItemElement,
    HTMLNSCollectionLayoutDimensionElement,
    HTMLNSCollectionLayoutEdgeSpacingElement,
    HTMLNSCollectionLayoutGroupElement,
    HTMLNSCollectionLayoutGroupCustomItemElement,
    HTMLNSCollectionLayoutItemElement,
    HTMLNSCollectionLayoutSectionElement,
    HTMLNSCollectionLayoutSizeElement,
    HTMLNSCollectionLayoutSpacingElement,
    HTMLNSCollectionLayoutSupplementaryItemElement,
    HTMLNSCollectionViewElement,
    HTMLNSCollectionViewCompositionalLayoutElement,
    HTMLNSCollectionViewCompositionalLayoutConfigurationElement,
    HTMLNSCollectionViewDiffableDataSourceElement,
    HTMLNSCollectionViewFlowLayoutElement,
    HTMLNSCollectionViewFlowLayoutInvalidationContextElement,
    HTMLNSCollectionViewGridLayoutElement,
    HTMLNSCollectionViewItemElement,
    HTMLNSCollectionViewLayoutElement,
    HTMLNSCollectionViewLayoutAttributesElement,
    HTMLNSCollectionViewLayoutInvalidationContextElement,
    HTMLNSCollectionViewTransitionLayoutElement,
    HTMLNSCollectionViewUpdateItemElement,
    HTMLNSColorElement,
    HTMLNSColorListElement,
    HTMLNSColorPanelElement,
    HTMLNSColorPickerElement,
    HTMLNSColorPickerTouchBarItemElement,
    HTMLNSColorSamplerElement,
    HTMLNSColorSpaceElement,
    HTMLNSColorWellElement,
    HTMLNSComboBoxElement,
    HTMLNSComboBoxCellElement,
    HTMLNSComboButtonElement,
    HTMLNSControlElement,
    HTMLNSControllerElement,
    HTMLNSCursorElement,
    HTMLNSCustomImageRepElement,
    HTMLNSCustomTouchBarItemElement,
    HTMLNSDataAssetElement,
    HTMLNSDatePickerElement,
    HTMLNSDatePickerCellElement,
    HTMLNSDictionaryControllerElement,
    HTMLNSDictionaryControllerKeyValuePairElement,
    HTMLNSDiffableDataSourceSnapshotElement,
    HTMLNSDockTileElement,
    HTMLNSDocumentElement,
    HTMLNSDocumentControllerElement,
    HTMLNSDraggingImageComponentElement,
    HTMLNSDraggingItemElement,
    HTMLNSDraggingSessionElement,
    HTMLNSDrawerElement,
    HTMLNSEPSImageRepElement,
    HTMLNSEventElement,
    HTMLNSFilePromiseProviderElement,
    HTMLNSFilePromiseReceiverElement,
    HTMLNSFontElement,
    HTMLNSFontAssetRequestElement,
    HTMLNSFontCollectionElement,
    HTMLNSFontDescriptorElement,
    HTMLNSFontManagerElement,
    HTMLNSFontPanelElement,
    HTMLNSFormElement,
    HTMLNSFormCellElement,
    HTMLNSGestureRecognizerElement,
    HTMLNSGlyphGeneratorElement,
    HTMLNSGlyphInfoElement,
    HTMLNSGradientElement,
    HTMLNSGraphicsContextElement,
    HTMLNSGridCellElement,
    HTMLNSGridColumnElement,
    HTMLNSGridRowElement,
    HTMLNSGridViewElement,
    HTMLNSGroupTouchBarItemElement,
    HTMLNSHapticFeedbackManagerElement,
    HTMLNSHelpManagerElement,
    HTMLNSImageElement,
    HTMLNSImageCellElement,
    HTMLNSImageRepElement,
    HTMLNSImageSymbolConfigurationElement,
    HTMLNSImageViewElement,
    HTMLNSInputManagerElement,
    HTMLNSInputServerElement,
    HTMLNSLayoutAnchorElement,
    HTMLNSLayoutConstraintElement,
    HTMLNSLayoutDimensionElement,
    HTMLNSLayoutGuideElement,
    HTMLNSLayoutManagerElement,
    HTMLNSLayoutXAxisAnchorElement,
    HTMLNSLayoutYAxisAnchorElement,
    HTMLNSLevelIndicatorElement,
    HTMLNSLevelIndicatorCellElement,
    HTMLNSMagnificationGestureRecognizerElement,
    HTMLNSMatrixElement,
    HTMLNSMediaLibraryBrowserControllerElement,
    HTMLNSMenuElement,
    HTMLNSMenuItemElement,
    HTMLNSMenuItemBadgeElement,
    HTMLNSMenuItemCellElement,
    HTMLNSMenuToolbarItemElement,
    HTMLNSMovieElement,
    HTMLNSMutableFontCollectionElement,
    HTMLNSMutableParagraphStyleElement,
    HTMLNSNibElement,
    HTMLNSObjectElement,
    HTMLNSObjectControllerElement,
    HTMLNSOpenGLContextElement,
    HTMLNSOpenGLPixelBufferElement,
    HTMLNSOpenGLPixelFormatElement,
    HTMLNSOpenGLViewElement,
    HTMLNSOpenPanelElement,
    HTMLNSOutlineViewElement,
    HTMLNSPageControllerElement,
    HTMLNSPageLayoutElement,
    HTMLNSPanelElement,
    HTMLNSPanGestureRecognizerElement,
    HTMLNSParagraphStyleElement,
    HTMLNSPasteboardElement,
    HTMLNSPasteboardItemElement,
    HTMLNSPathCellElement,
    HTMLNSPathComponentCellElement,
    HTMLNSPathControlElement,
    HTMLNSPathControlItemElement,
    HTMLNSPDFImageRepElement,
    HTMLNSPDFInfoElement,
    HTMLNSPDFPanelElement,
    HTMLNSPersistentDocumentElement,
    HTMLNSPickerTouchBarItemElement,
    HTMLNSPICTImageRepElement,
    HTMLNSPopoverElement,
    HTMLNSPopoverTouchBarItemElement,
    HTMLNSPopUpButtonElement,
    HTMLNSPopUpButtonCellElement,
    HTMLNSPredicateEditorElement,
    HTMLNSPredicateEditorRowTemplateElement,
    HTMLNSPressGestureRecognizerElement,
    HTMLNSPressureConfigurationElement,
    HTMLNSPreviewRepresentingActivityItemElement,
    HTMLNSPrinterElement,
    HTMLNSPrintInfoElement,
    HTMLNSPrintOperationElement,
    HTMLNSPrintPanelElement,
    HTMLNSProgressIndicatorElement,
    HTMLNSResponderElement,
    HTMLNSRotationGestureRecognizerElement,
    HTMLNSRuleEditorElement,
    HTMLNSRulerMarkerElement,
    HTMLNSRulerViewElement,
    HTMLNSRunningApplicationElement,
    HTMLNSSavePanelElement,
    HTMLNSScreenElement,
    HTMLNSScrollerElement,
    HTMLNSScrollViewElement,
    HTMLNSScrubberElement,
    HTMLNSScrubberArrangedViewElement,
    HTMLNSScrubberFlowLayoutElement,
    HTMLNSScrubberImageItemViewElement,
    HTMLNSScrubberItemViewElement,
    HTMLNSScrubberLayoutElement,
    HTMLNSScrubberLayoutAttributesElement,
    HTMLNSScrubberProportionalLayoutElement,
    HTMLNSScrubberSelectionStyleElement,
    HTMLNSScrubberSelectionViewElement,
    HTMLNSScrubberTextItemViewElement,
    HTMLNSSearchFieldElement,
    HTMLNSSearchFieldCellElement,
    HTMLNSSearchToolbarItemElement,
    HTMLNSSecureTextFieldElement,
    HTMLNSSecureTextFieldCellElement,
    HTMLNSSegmentedCellElement,
    HTMLNSSegmentedControlElement,
    HTMLNSShadowElement,
    HTMLNSSharingServiceElement,
    HTMLNSSharingServicePickerElement,
    HTMLNSSharingServicePickerToolbarItemElement,
    HTMLNSSharingServicePickerTouchBarItemElement,
    HTMLNSSliderElement,
    HTMLNSSliderAccessoryElement,
    HTMLNSSliderAccessoryBehaviorElement,
    HTMLNSSliderCellElement,
    HTMLNSSliderTouchBarItemElement,
    HTMLNSSoundElement,
    HTMLNSSpeechRecognizerElement,
    HTMLNSSpeechSynthesizerElement,
    HTMLNSSpellCheckerElement,
    HTMLNSSplitViewElement,
    HTMLNSSplitViewControllerElement,
    HTMLNSSplitViewItemElement,
    HTMLNSStackViewElement,
    HTMLNSStatusBarElement,
    HTMLNSStatusBarButtonElement,
    HTMLNSStatusItemElement,
    HTMLNSStepperElement,
    HTMLNSStepperCellElement,
    HTMLNSStepperTouchBarItemElement,
    HTMLNSStoryboardElement,
    HTMLNSStoryboardSegueElement,
    HTMLNSStringDrawingContextElement,
    HTMLNSSwitchElement,
    HTMLNSTableCellViewElement,
    HTMLNSTableColumnElement,
    HTMLNSTableHeaderCellElement,
    HTMLNSTableHeaderViewElement,
    HTMLNSTableRowViewElement,
    HTMLNSTableViewElement,
    HTMLNSTableViewDiffableDataSourceElement,
    HTMLNSTableViewRowActionElement,
    HTMLNSTabViewElement,
    HTMLNSTabViewControllerElement,
    HTMLNSTabViewItemElement,
    HTMLNSTextElement,
    HTMLNSTextAlternativesElement,
    HTMLNSTextAttachmentElement,
    HTMLNSTextAttachmentCellElement,
    HTMLNSTextAttachmentViewProviderElement,
    HTMLNSTextBlockElement,
    HTMLNSTextCheckingControllerElement,
    HTMLNSTextContainerElement,
    HTMLNSTextContentManagerElement,
    HTMLNSTextContentStorageElement,
    HTMLNSTextElementElement,
    HTMLNSTextFieldElement,
    HTMLNSTextFieldCellElement,
    HTMLNSTextFinderElement,
    HTMLNSTextInputContextElement,
    HTMLNSTextInsertionIndicatorElement,
    HTMLNSTextLayoutFragmentElement,
    HTMLNSTextLayoutManagerElement,
    HTMLNSTextLineFragmentElement,
    HTMLNSTextListElement,
    HTMLNSTextListElementElement,
    HTMLNSTextParagraphElement,
    HTMLNSTextRangeElement,
    HTMLNSTextSelectionElement,
    HTMLNSTextSelectionNavigationElement,
    HTMLNSTextTabElement,
    HTMLNSTextTableElement,
    HTMLNSTextTableBlockElement,
    HTMLNSTextViewElement,
    HTMLNSTextViewportLayoutControllerElement,
    HTMLNSTintConfigurationElement,
    HTMLNSTitlebarAccessoryViewControllerElement,
    HTMLNSTokenFieldElement,
    HTMLNSTokenFieldCellElement,
    HTMLNSToolbarElement,
    HTMLNSToolbarItemElement,
    HTMLNSToolbarItemGroupElement,
    HTMLNSTouchElement,
    HTMLNSTouchBarElement,
    HTMLNSTouchBarItemElement,
    HTMLNSTrackingAreaElement,
    HTMLNSTrackingSeparatorToolbarItemElement,
    HTMLNSTreeControllerElement,
    HTMLNSTreeNodeElement,
    HTMLNSTypesetterElement,
    HTMLNSUserDefaultsControllerElement,
    HTMLNSUserInterfaceCompressionOptionsElement,
    HTMLNSViewElement,
    HTMLNSViewAnimationElement,
    HTMLNSViewControllerElement,
    HTMLNSVisualEffectViewElement,
    HTMLNSWindowElement,
    HTMLNSWindowControllerElement,
    HTMLNSWindowTabElement,
    HTMLNSWindowTabGroupElement,
    HTMLNSWorkspaceElement,
    HTMLNSWorkspaceAuthorizationElement,
    HTMLNSWorkspaceOpenConfigurationElement,
  } = await import('./index.js');

  customElements.define(
    'ns-accessibilitycustomaction',
    HTMLNSAccessibilityCustomActionElement
  );
  customElements.define(
    'ns-accessibilitycustomrotor',
    HTMLNSAccessibilityCustomRotorElement
  );
  customElements.define(
    'ns-accessibilitycustomrotoritemresult',
    HTMLNSAccessibilityCustomRotorItemResultElement
  );
  customElements.define(
    'ns-accessibilitycustomrotorsearchparameters',
    HTMLNSAccessibilityCustomRotorSearchParametersElement
  );
  customElements.define(
    'ns-accessibilityelement',
    HTMLNSAccessibilityElementElement
  );
  customElements.define('ns-actioncell', HTMLNSActionCellElement);
  customElements.define('ns-alert', HTMLNSAlertElement);
  customElements.define(
    'ns-alignmentfeedbackfilter',
    HTMLNSAlignmentFeedbackFilterElement
  );
  customElements.define('ns-animation', HTMLNSAnimationElement);
  customElements.define('ns-animationcontext', HTMLNSAnimationContextElement);
  customElements.define('ns-appearance', HTMLNSAppearanceElement);
  customElements.define('ns-application', HTMLNSApplicationElement);
  customElements.define('ns-arraycontroller', HTMLNSArrayControllerElement);
  customElements.define('ns-atstypesetter', HTMLNSATSTypesetterElement);
  customElements.define('ns-bezierpath', HTMLNSBezierPathElement);
  customElements.define(
    'ns-bindingselectionmarker',
    HTMLNSBindingSelectionMarkerElement
  );
  customElements.define('ns-bitmapimagerep', HTMLNSBitmapImageRepElement);
  customElements.define('ns-box', HTMLNSBoxElement);
  customElements.define('ns-browser', HTMLNSBrowserElement);
  customElements.define('ns-browsercell', HTMLNSBrowserCellElement);
  customElements.define('ns-button', HTMLNSButtonElement);
  customElements.define('ns-buttoncell', HTMLNSButtonCellElement);
  customElements.define(
    'ns-buttontouchbaritem',
    HTMLNSButtonTouchBarItemElement
  );
  customElements.define('ns-cachedimagerep', HTMLNSCachedImageRepElement);
  customElements.define(
    'ns-candidatelisttouchbaritem',
    HTMLNSCandidateListTouchBarItemElement
  );
  customElements.define('ns-cell', HTMLNSCellElement);
  customElements.define('ns-ciimagerep', HTMLNSCIImageRepElement);
  customElements.define(
    'ns-clickgesturerecognizer',
    HTMLNSClickGestureRecognizerElement
  );
  customElements.define('ns-clipview', HTMLNSClipViewElement);
  customElements.define(
    'ns-collectionlayoutanchor',
    HTMLNSCollectionLayoutAnchorElement
  );
  customElements.define(
    'ns-collectionlayoutboundarysupplementaryitem',
    HTMLNSCollectionLayoutBoundarySupplementaryItemElement
  );
  customElements.define(
    'ns-collectionlayoutdecorationitem',
    HTMLNSCollectionLayoutDecorationItemElement
  );
  customElements.define(
    'ns-collectionlayoutdimension',
    HTMLNSCollectionLayoutDimensionElement
  );
  customElements.define(
    'ns-collectionlayoutedgespacing',
    HTMLNSCollectionLayoutEdgeSpacingElement
  );
  customElements.define(
    'ns-collectionlayoutgroup',
    HTMLNSCollectionLayoutGroupElement
  );
  customElements.define(
    'ns-collectionlayoutgroupcustomitem',
    HTMLNSCollectionLayoutGroupCustomItemElement
  );
  customElements.define(
    'ns-collectionlayoutitem',
    HTMLNSCollectionLayoutItemElement
  );
  customElements.define(
    'ns-collectionlayoutsection',
    HTMLNSCollectionLayoutSectionElement
  );
  customElements.define(
    'ns-collectionlayoutsize',
    HTMLNSCollectionLayoutSizeElement
  );
  customElements.define(
    'ns-collectionlayoutspacing',
    HTMLNSCollectionLayoutSpacingElement
  );
  customElements.define(
    'ns-collectionlayoutsupplementaryitem',
    HTMLNSCollectionLayoutSupplementaryItemElement
  );
  customElements.define('ns-collectionview', HTMLNSCollectionViewElement);
  customElements.define(
    'ns-collectionviewcompositionallayout',
    HTMLNSCollectionViewCompositionalLayoutElement
  );
  customElements.define(
    'ns-collectionviewcompositionallayoutconfiguration',
    HTMLNSCollectionViewCompositionalLayoutConfigurationElement
  );
  customElements.define(
    'ns-collectionviewdiffabledatasource',
    HTMLNSCollectionViewDiffableDataSourceElement
  );
  customElements.define(
    'ns-collectionviewflowlayout',
    HTMLNSCollectionViewFlowLayoutElement
  );
  customElements.define(
    'ns-collectionviewflowlayoutinvalidationcontext',
    HTMLNSCollectionViewFlowLayoutInvalidationContextElement
  );
  customElements.define(
    'ns-collectionviewgridlayout',
    HTMLNSCollectionViewGridLayoutElement
  );
  customElements.define(
    'ns-collectionviewitem',
    HTMLNSCollectionViewItemElement
  );
  customElements.define(
    'ns-collectionviewlayout',
    HTMLNSCollectionViewLayoutElement
  );
  customElements.define(
    'ns-collectionviewlayoutattributes',
    HTMLNSCollectionViewLayoutAttributesElement
  );
  customElements.define(
    'ns-collectionviewlayoutinvalidationcontext',
    HTMLNSCollectionViewLayoutInvalidationContextElement
  );
  customElements.define(
    'ns-collectionviewtransitionlayout',
    HTMLNSCollectionViewTransitionLayoutElement
  );
  customElements.define(
    'ns-collectionviewupdateitem',
    HTMLNSCollectionViewUpdateItemElement
  );
  customElements.define('ns-color', HTMLNSColorElement);
  customElements.define('ns-colorlist', HTMLNSColorListElement);
  customElements.define('ns-colorpanel', HTMLNSColorPanelElement);
  customElements.define('ns-colorpicker', HTMLNSColorPickerElement);
  customElements.define(
    'ns-colorpickertouchbaritem',
    HTMLNSColorPickerTouchBarItemElement
  );
  customElements.define('ns-colorsampler', HTMLNSColorSamplerElement);
  customElements.define('ns-colorspace', HTMLNSColorSpaceElement);
  customElements.define('ns-colorwell', HTMLNSColorWellElement);
  customElements.define('ns-combobox', HTMLNSComboBoxElement);
  customElements.define('ns-comboboxcell', HTMLNSComboBoxCellElement);
  customElements.define('ns-combobutton', HTMLNSComboButtonElement);
  customElements.define('ns-control', HTMLNSControlElement);
  customElements.define('ns-controller', HTMLNSControllerElement);
  customElements.define('ns-cursor', HTMLNSCursorElement);
  customElements.define('ns-customimagerep', HTMLNSCustomImageRepElement);
  customElements.define(
    'ns-customtouchbaritem',
    HTMLNSCustomTouchBarItemElement
  );
  customElements.define('ns-dataasset', HTMLNSDataAssetElement);
  customElements.define('ns-datepicker', HTMLNSDatePickerElement);
  customElements.define('ns-datepickercell', HTMLNSDatePickerCellElement);
  customElements.define(
    'ns-dictionarycontroller',
    HTMLNSDictionaryControllerElement
  );
  customElements.define(
    'ns-dictionarycontrollerkeyvaluepair',
    HTMLNSDictionaryControllerKeyValuePairElement
  );
  customElements.define(
    'ns-diffabledatasourcesnapshot',
    HTMLNSDiffableDataSourceSnapshotElement
  );
  customElements.define('ns-docktile', HTMLNSDockTileElement);
  customElements.define('ns-document', HTMLNSDocumentElement);
  customElements.define(
    'ns-documentcontroller',
    HTMLNSDocumentControllerElement
  );
  customElements.define(
    'ns-draggingimagecomponent',
    HTMLNSDraggingImageComponentElement
  );
  customElements.define('ns-draggingitem', HTMLNSDraggingItemElement);
  customElements.define('ns-draggingsession', HTMLNSDraggingSessionElement);
  customElements.define('ns-drawer', HTMLNSDrawerElement);
  customElements.define('ns-epsimagerep', HTMLNSEPSImageRepElement);
  customElements.define('ns-event', HTMLNSEventElement);
  customElements.define(
    'ns-filepromiseprovider',
    HTMLNSFilePromiseProviderElement
  );
  customElements.define(
    'ns-filepromisereceiver',
    HTMLNSFilePromiseReceiverElement
  );
  customElements.define('ns-font', HTMLNSFontElement);
  customElements.define('ns-fontassetrequest', HTMLNSFontAssetRequestElement);
  customElements.define('ns-fontcollection', HTMLNSFontCollectionElement);
  customElements.define('ns-fontdescriptor', HTMLNSFontDescriptorElement);
  customElements.define('ns-fontmanager', HTMLNSFontManagerElement);
  customElements.define('ns-fontpanel', HTMLNSFontPanelElement);
  customElements.define('ns-form', HTMLNSFormElement);
  customElements.define('ns-formcell', HTMLNSFormCellElement);
  customElements.define('ns-gesturerecognizer', HTMLNSGestureRecognizerElement);
  customElements.define('ns-glyphgenerator', HTMLNSGlyphGeneratorElement);
  customElements.define('ns-glyphinfo', HTMLNSGlyphInfoElement);
  customElements.define('ns-gradient', HTMLNSGradientElement);
  customElements.define('ns-graphicscontext', HTMLNSGraphicsContextElement);
  customElements.define('ns-gridcell', HTMLNSGridCellElement);
  customElements.define('ns-gridcolumn', HTMLNSGridColumnElement);
  customElements.define('ns-gridrow', HTMLNSGridRowElement);
  customElements.define('ns-gridview', HTMLNSGridViewElement);
  customElements.define('ns-grouptouchbaritem', HTMLNSGroupTouchBarItemElement);
  customElements.define(
    'ns-hapticfeedbackmanager',
    HTMLNSHapticFeedbackManagerElement
  );
  customElements.define('ns-helpmanager', HTMLNSHelpManagerElement);
  customElements.define('ns-image', HTMLNSImageElement);
  customElements.define('ns-imagecell', HTMLNSImageCellElement);
  customElements.define('ns-imagerep', HTMLNSImageRepElement);
  customElements.define(
    'ns-imagesymbolconfiguration',
    HTMLNSImageSymbolConfigurationElement
  );
  customElements.define('ns-imageview', HTMLNSImageViewElement);
  customElements.define('ns-inputmanager', HTMLNSInputManagerElement);
  customElements.define('ns-inputserver', HTMLNSInputServerElement);
  customElements.define('ns-layoutanchor', HTMLNSLayoutAnchorElement);
  customElements.define('ns-layoutconstraint', HTMLNSLayoutConstraintElement);
  customElements.define('ns-layoutdimension', HTMLNSLayoutDimensionElement);
  customElements.define('ns-layoutguide', HTMLNSLayoutGuideElement);
  customElements.define('ns-layoutmanager', HTMLNSLayoutManagerElement);
  customElements.define('ns-layoutxaxisanchor', HTMLNSLayoutXAxisAnchorElement);
  customElements.define('ns-layoutyaxisanchor', HTMLNSLayoutYAxisAnchorElement);
  customElements.define('ns-levelindicator', HTMLNSLevelIndicatorElement);
  customElements.define(
    'ns-levelindicatorcell',
    HTMLNSLevelIndicatorCellElement
  );
  customElements.define(
    'ns-magnificationgesturerecognizer',
    HTMLNSMagnificationGestureRecognizerElement
  );
  customElements.define('ns-matrix', HTMLNSMatrixElement);
  customElements.define(
    'ns-medialibrarybrowsercontroller',
    HTMLNSMediaLibraryBrowserControllerElement
  );
  customElements.define('ns-menu', HTMLNSMenuElement);
  customElements.define('ns-menuitem', HTMLNSMenuItemElement);
  customElements.define('ns-menuitembadge', HTMLNSMenuItemBadgeElement);
  customElements.define('ns-menuitemcell', HTMLNSMenuItemCellElement);
  customElements.define('ns-menutoolbaritem', HTMLNSMenuToolbarItemElement);
  customElements.define('ns-movie', HTMLNSMovieElement);
  customElements.define(
    'ns-mutablefontcollection',
    HTMLNSMutableFontCollectionElement
  );
  customElements.define(
    'ns-mutableparagraphstyle',
    HTMLNSMutableParagraphStyleElement
  );
  customElements.define('ns-nib', HTMLNSNibElement);
  customElements.define('ns-object', HTMLNSObjectElement);
  customElements.define('ns-objectcontroller', HTMLNSObjectControllerElement);
  customElements.define('ns-openglcontext', HTMLNSOpenGLContextElement);
  customElements.define('ns-openglpixelbuffer', HTMLNSOpenGLPixelBufferElement);
  customElements.define('ns-openglpixelformat', HTMLNSOpenGLPixelFormatElement);
  customElements.define('ns-openglview', HTMLNSOpenGLViewElement);
  customElements.define('ns-openpanel', HTMLNSOpenPanelElement);
  customElements.define('ns-outlineview', HTMLNSOutlineViewElement);
  customElements.define('ns-pagecontroller', HTMLNSPageControllerElement);
  customElements.define('ns-pagelayout', HTMLNSPageLayoutElement);
  customElements.define('ns-panel', HTMLNSPanelElement);
  customElements.define(
    'ns-pangesturerecognizer',
    HTMLNSPanGestureRecognizerElement
  );
  customElements.define('ns-paragraphstyle', HTMLNSParagraphStyleElement);
  customElements.define('ns-pasteboard', HTMLNSPasteboardElement);
  customElements.define('ns-pasteboarditem', HTMLNSPasteboardItemElement);
  customElements.define('ns-pathcell', HTMLNSPathCellElement);
  customElements.define('ns-pathcomponentcell', HTMLNSPathComponentCellElement);
  customElements.define('ns-pathcontrol', HTMLNSPathControlElement);
  customElements.define('ns-pathcontrolitem', HTMLNSPathControlItemElement);
  customElements.define('ns-pdfimagerep', HTMLNSPDFImageRepElement);
  customElements.define('ns-pdfinfo', HTMLNSPDFInfoElement);
  customElements.define('ns-pdfpanel', HTMLNSPDFPanelElement);
  customElements.define(
    'ns-persistentdocument',
    HTMLNSPersistentDocumentElement
  );
  customElements.define(
    'ns-pickertouchbaritem',
    HTMLNSPickerTouchBarItemElement
  );
  customElements.define('ns-pictimagerep', HTMLNSPICTImageRepElement);
  customElements.define('ns-popover', HTMLNSPopoverElement);
  customElements.define(
    'ns-popovertouchbaritem',
    HTMLNSPopoverTouchBarItemElement
  );
  customElements.define('ns-popupbutton', HTMLNSPopUpButtonElement);
  customElements.define('ns-popupbuttoncell', HTMLNSPopUpButtonCellElement);
  customElements.define('ns-predicateeditor', HTMLNSPredicateEditorElement);
  customElements.define(
    'ns-predicateeditorrowtemplate',
    HTMLNSPredicateEditorRowTemplateElement
  );
  customElements.define(
    'ns-pressgesturerecognizer',
    HTMLNSPressGestureRecognizerElement
  );
  customElements.define(
    'ns-pressureconfiguration',
    HTMLNSPressureConfigurationElement
  );
  customElements.define(
    'ns-previewrepresentingactivityitem',
    HTMLNSPreviewRepresentingActivityItemElement
  );
  customElements.define('ns-printer', HTMLNSPrinterElement);
  customElements.define('ns-printinfo', HTMLNSPrintInfoElement);
  customElements.define('ns-printoperation', HTMLNSPrintOperationElement);
  customElements.define('ns-printpanel', HTMLNSPrintPanelElement);
  customElements.define('ns-progressindicator', HTMLNSProgressIndicatorElement);
  customElements.define('ns-responder', HTMLNSResponderElement);
  customElements.define(
    'ns-rotationgesturerecognizer',
    HTMLNSRotationGestureRecognizerElement
  );
  customElements.define('ns-ruleeditor', HTMLNSRuleEditorElement);
  customElements.define('ns-rulermarker', HTMLNSRulerMarkerElement);
  customElements.define('ns-rulerview', HTMLNSRulerViewElement);
  customElements.define(
    'ns-runningapplication',
    HTMLNSRunningApplicationElement
  );
  customElements.define('ns-savepanel', HTMLNSSavePanelElement);
  customElements.define('ns-screen', HTMLNSScreenElement);
  customElements.define('ns-scroller', HTMLNSScrollerElement);
  customElements.define('ns-scrollview', HTMLNSScrollViewElement);
  customElements.define('ns-scrubber', HTMLNSScrubberElement);
  customElements.define(
    'ns-scrubberarrangedview',
    HTMLNSScrubberArrangedViewElement
  );
  customElements.define(
    'ns-scrubberflowlayout',
    HTMLNSScrubberFlowLayoutElement
  );
  customElements.define(
    'ns-scrubberimageitemview',
    HTMLNSScrubberImageItemViewElement
  );
  customElements.define('ns-scrubberitemview', HTMLNSScrubberItemViewElement);
  customElements.define('ns-scrubberlayout', HTMLNSScrubberLayoutElement);
  customElements.define(
    'ns-scrubberlayoutattributes',
    HTMLNSScrubberLayoutAttributesElement
  );
  customElements.define(
    'ns-scrubberproportionallayout',
    HTMLNSScrubberProportionalLayoutElement
  );
  customElements.define(
    'ns-scrubberselectionstyle',
    HTMLNSScrubberSelectionStyleElement
  );
  customElements.define(
    'ns-scrubberselectionview',
    HTMLNSScrubberSelectionViewElement
  );
  customElements.define(
    'ns-scrubbertextitemview',
    HTMLNSScrubberTextItemViewElement
  );
  customElements.define('ns-searchfield', HTMLNSSearchFieldElement);
  customElements.define('ns-searchfieldcell', HTMLNSSearchFieldCellElement);
  customElements.define('ns-searchtoolbaritem', HTMLNSSearchToolbarItemElement);
  customElements.define('ns-securetextfield', HTMLNSSecureTextFieldElement);
  customElements.define(
    'ns-securetextfieldcell',
    HTMLNSSecureTextFieldCellElement
  );
  customElements.define('ns-segmentedcell', HTMLNSSegmentedCellElement);
  customElements.define('ns-segmentedcontrol', HTMLNSSegmentedControlElement);
  customElements.define('ns-shadow', HTMLNSShadowElement);
  customElements.define('ns-sharingservice', HTMLNSSharingServiceElement);
  customElements.define(
    'ns-sharingservicepicker',
    HTMLNSSharingServicePickerElement
  );
  customElements.define(
    'ns-sharingservicepickertoolbaritem',
    HTMLNSSharingServicePickerToolbarItemElement
  );
  customElements.define(
    'ns-sharingservicepickertouchbaritem',
    HTMLNSSharingServicePickerTouchBarItemElement
  );
  customElements.define('ns-slider', HTMLNSSliderElement);
  customElements.define('ns-slideraccessory', HTMLNSSliderAccessoryElement);
  customElements.define(
    'ns-slideraccessorybehavior',
    HTMLNSSliderAccessoryBehaviorElement
  );
  customElements.define('ns-slidercell', HTMLNSSliderCellElement);
  customElements.define(
    'ns-slidertouchbaritem',
    HTMLNSSliderTouchBarItemElement
  );
  customElements.define('ns-sound', HTMLNSSoundElement);
  customElements.define('ns-speechrecognizer', HTMLNSSpeechRecognizerElement);
  customElements.define('ns-speechsynthesizer', HTMLNSSpeechSynthesizerElement);
  customElements.define('ns-spellchecker', HTMLNSSpellCheckerElement);
  customElements.define('ns-splitview', HTMLNSSplitViewElement);
  customElements.define(
    'ns-splitviewcontroller',
    HTMLNSSplitViewControllerElement
  );
  customElements.define('ns-splitviewitem', HTMLNSSplitViewItemElement);
  customElements.define('ns-stackview', HTMLNSStackViewElement);
  customElements.define('ns-statusbar', HTMLNSStatusBarElement);
  customElements.define('ns-statusbarbutton', HTMLNSStatusBarButtonElement);
  customElements.define('ns-statusitem', HTMLNSStatusItemElement);
  customElements.define('ns-stepper', HTMLNSStepperElement);
  customElements.define('ns-steppercell', HTMLNSStepperCellElement);
  customElements.define(
    'ns-steppertouchbaritem',
    HTMLNSStepperTouchBarItemElement
  );
  customElements.define('ns-storyboard', HTMLNSStoryboardElement);
  customElements.define('ns-storyboardsegue', HTMLNSStoryboardSegueElement);
  customElements.define(
    'ns-stringdrawingcontext',
    HTMLNSStringDrawingContextElement
  );
  customElements.define('ns-switch', HTMLNSSwitchElement);
  customElements.define('ns-tablecellview', HTMLNSTableCellViewElement);
  customElements.define('ns-tablecolumn', HTMLNSTableColumnElement);
  customElements.define('ns-tableheadercell', HTMLNSTableHeaderCellElement);
  customElements.define('ns-tableheaderview', HTMLNSTableHeaderViewElement);
  customElements.define('ns-tablerowview', HTMLNSTableRowViewElement);
  customElements.define('ns-tableview', HTMLNSTableViewElement);
  customElements.define(
    'ns-tableviewdiffabledatasource',
    HTMLNSTableViewDiffableDataSourceElement
  );
  customElements.define(
    'ns-tableviewrowaction',
    HTMLNSTableViewRowActionElement
  );
  customElements.define('ns-tabview', HTMLNSTabViewElement);
  customElements.define('ns-tabviewcontroller', HTMLNSTabViewControllerElement);
  customElements.define('ns-tabviewitem', HTMLNSTabViewItemElement);
  customElements.define('ns-text', HTMLNSTextElement);
  customElements.define('ns-textalternatives', HTMLNSTextAlternativesElement);
  customElements.define('ns-textattachment', HTMLNSTextAttachmentElement);
  customElements.define(
    'ns-textattachmentcell',
    HTMLNSTextAttachmentCellElement
  );
  customElements.define(
    'ns-textattachmentviewprovider',
    HTMLNSTextAttachmentViewProviderElement
  );
  customElements.define('ns-textblock', HTMLNSTextBlockElement);
  customElements.define(
    'ns-textcheckingcontroller',
    HTMLNSTextCheckingControllerElement
  );
  customElements.define('ns-textcontainer', HTMLNSTextContainerElement);
  customElements.define(
    'ns-textcontentmanager',
    HTMLNSTextContentManagerElement
  );
  customElements.define(
    'ns-textcontentstorage',
    HTMLNSTextContentStorageElement
  );
  customElements.define('ns-textelement', HTMLNSTextElementElement);
  customElements.define('ns-textfield', HTMLNSTextFieldElement);
  customElements.define('ns-textfieldcell', HTMLNSTextFieldCellElement);
  customElements.define('ns-textfinder', HTMLNSTextFinderElement);
  customElements.define('ns-textinputcontext', HTMLNSTextInputContextElement);
  customElements.define(
    'ns-textinsertionindicator',
    HTMLNSTextInsertionIndicatorElement
  );
  customElements.define(
    'ns-textlayoutfragment',
    HTMLNSTextLayoutFragmentElement
  );
  customElements.define('ns-textlayoutmanager', HTMLNSTextLayoutManagerElement);
  customElements.define('ns-textlinefragment', HTMLNSTextLineFragmentElement);
  customElements.define('ns-textlist', HTMLNSTextListElement);
  customElements.define('ns-textlistelement', HTMLNSTextListElementElement);
  customElements.define('ns-textparagraph', HTMLNSTextParagraphElement);
  customElements.define('ns-textrange', HTMLNSTextRangeElement);
  customElements.define('ns-textselection', HTMLNSTextSelectionElement);
  customElements.define(
    'ns-textselectionnavigation',
    HTMLNSTextSelectionNavigationElement
  );
  customElements.define('ns-texttab', HTMLNSTextTabElement);
  customElements.define('ns-texttable', HTMLNSTextTableElement);
  customElements.define('ns-texttableblock', HTMLNSTextTableBlockElement);
  customElements.define('ns-textview', HTMLNSTextViewElement);
  customElements.define(
    'ns-textviewportlayoutcontroller',
    HTMLNSTextViewportLayoutControllerElement
  );
  customElements.define('ns-tintconfiguration', HTMLNSTintConfigurationElement);
  customElements.define(
    'ns-titlebaraccessoryviewcontroller',
    HTMLNSTitlebarAccessoryViewControllerElement
  );
  customElements.define('ns-tokenfield', HTMLNSTokenFieldElement);
  customElements.define('ns-tokenfieldcell', HTMLNSTokenFieldCellElement);
  customElements.define('ns-toolbar', HTMLNSToolbarElement);
  customElements.define('ns-toolbaritem', HTMLNSToolbarItemElement);
  customElements.define('ns-toolbaritemgroup', HTMLNSToolbarItemGroupElement);
  customElements.define('ns-touch', HTMLNSTouchElement);
  customElements.define('ns-touchbar', HTMLNSTouchBarElement);
  customElements.define('ns-touchbaritem', HTMLNSTouchBarItemElement);
  customElements.define('ns-trackingarea', HTMLNSTrackingAreaElement);
  customElements.define(
    'ns-trackingseparatortoolbaritem',
    HTMLNSTrackingSeparatorToolbarItemElement
  );
  customElements.define('ns-treecontroller', HTMLNSTreeControllerElement);
  customElements.define('ns-treenode', HTMLNSTreeNodeElement);
  customElements.define('ns-typesetter', HTMLNSTypesetterElement);
  customElements.define(
    'ns-userdefaultscontroller',
    HTMLNSUserDefaultsControllerElement
  );
  customElements.define(
    'ns-userinterfacecompressionoptions',
    HTMLNSUserInterfaceCompressionOptionsElement
  );
  customElements.define('ns-view', HTMLNSViewElement);
  customElements.define('ns-viewanimation', HTMLNSViewAnimationElement);
  customElements.define('ns-viewcontroller', HTMLNSViewControllerElement);
  customElements.define('ns-visualeffectview', HTMLNSVisualEffectViewElement);
  customElements.define('ns-window', HTMLNSWindowElement);
  customElements.define('ns-windowcontroller', HTMLNSWindowControllerElement);
  customElements.define('ns-windowtab', HTMLNSWindowTabElement);
  customElements.define('ns-windowtabgroup', HTMLNSWindowTabGroupElement);
  customElements.define('ns-workspace', HTMLNSWorkspaceElement);
  customElements.define(
    'ns-workspaceauthorization',
    HTMLNSWorkspaceAuthorizationElement
  );
  customElements.define(
    'ns-workspaceopenconfiguration',
    HTMLNSWorkspaceOpenConfigurationElement
  );
}
