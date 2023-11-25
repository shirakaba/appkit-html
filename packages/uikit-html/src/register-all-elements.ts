export async function registerAllElements() {
  const {
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
    HTMLNSDataAssetElement,
    HTMLNSDiffableDataSourceSectionSnapshotElement,
    HTMLNSDiffableDataSourceSectionTransactionElement,
    HTMLNSDiffableDataSourceSnapshotElement,
    HTMLNSDiffableDataSourceTransactionElement,
    HTMLNSLayoutAnchorElement,
    HTMLNSLayoutConstraintElement,
    HTMLNSLayoutDimensionElement,
    HTMLNSLayoutManagerElement,
    HTMLNSLayoutXAxisAnchorElement,
    HTMLNSLayoutYAxisAnchorElement,
    HTMLNSMutableParagraphStyleElement,
    HTMLNSObjectElement,
    HTMLNSParagraphStyleElement,
    HTMLNSShadowElement,
    HTMLNSStringDrawingContextElement,
    HTMLNSTextAttachmentElement,
    HTMLNSTextAttachmentViewProviderElement,
    HTMLNSTextContainerElement,
    HTMLNSTextContentManagerElement,
    HTMLNSTextContentStorageElement,
    HTMLNSTextElementElement,
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
    HTMLNSTextViewportLayoutControllerElement,
    HTMLUIAccelerationElement,
    HTMLUIAccelerometerElement,
    HTMLUIAccessibilityCustomActionElement,
    HTMLUIAccessibilityCustomRotorElement,
    HTMLUIAccessibilityCustomRotorItemResultElement,
    HTMLUIAccessibilityCustomRotorSearchPredicateElement,
    HTMLUIAccessibilityElementElement,
    HTMLUIAccessibilityLocationDescriptorElement,
    HTMLUIActionElement,
    HTMLUIActionSheetElement,
    HTMLUIActivityElement,
    HTMLUIActivityIndicatorViewElement,
    HTMLUIActivityItemsConfigurationElement,
    HTMLUIActivityViewControllerElement,
    HTMLUIAlertActionElement,
    HTMLUIAlertControllerElement,
    HTMLUIAlertViewElement,
    HTMLUIApplicationElement,
    HTMLUIApplicationShortcutIconElement,
    HTMLUIApplicationShortcutItemElement,
    HTMLUIAttachmentBehaviorElement,
    HTMLUIBackgroundConfigurationElement,
    HTMLUIBandSelectionInteractionElement,
    HTMLUIBarAppearanceElement,
    HTMLUIBarButtonItemElement,
    HTMLUIBarButtonItemAppearanceElement,
    HTMLUIBarButtonItemGroupElement,
    HTMLUIBarButtonItemStateAppearanceElement,
    HTMLUIBarItemElement,
    HTMLUIBezierPathElement,
    HTMLUIBlurEffectElement,
    HTMLUIButtonElement,
    HTMLUIButtonConfigurationElement,
    HTMLUICalendarSelectionElement,
    HTMLUICalendarSelectionMultiDateElement,
    HTMLUICalendarSelectionSingleDateElement,
    HTMLUICalendarViewElement,
    HTMLUICalendarViewDecorationElement,
    HTMLUICellAccessoryElement,
    HTMLUICellAccessoryCheckmarkElement,
    HTMLUICellAccessoryCustomViewElement,
    HTMLUICellAccessoryDeleteElement,
    HTMLUICellAccessoryDetailElement,
    HTMLUICellAccessoryDisclosureIndicatorElement,
    HTMLUICellAccessoryInsertElement,
    HTMLUICellAccessoryLabelElement,
    HTMLUICellAccessoryMultiselectElement,
    HTMLUICellAccessoryOutlineDisclosureElement,
    HTMLUICellAccessoryPopUpMenuElement,
    HTMLUICellAccessoryReorderElement,
    HTMLUICellConfigurationStateElement,
    HTMLUICloudSharingControllerElement,
    HTMLUICollectionLayoutListConfigurationElement,
    HTMLUICollectionLayoutSectionOrthogonalScrollingPropertiesElement,
    HTMLUICollectionReusableViewElement,
    HTMLUICollectionViewElement,
    HTMLUICollectionViewCellElement,
    HTMLUICollectionViewCellRegistrationElement,
    HTMLUICollectionViewCompositionalLayoutElement,
    HTMLUICollectionViewCompositionalLayoutConfigurationElement,
    HTMLUICollectionViewControllerElement,
    HTMLUICollectionViewDiffableDataSourceElement,
    HTMLUICollectionViewDiffableDataSourceReorderingHandlersElement,
    HTMLUICollectionViewDiffableDataSourceSectionSnapshotHandlersElement,
    HTMLUICollectionViewDropPlaceholderElement,
    HTMLUICollectionViewDropProposalElement,
    HTMLUICollectionViewFlowLayoutElement,
    HTMLUICollectionViewFlowLayoutInvalidationContextElement,
    HTMLUICollectionViewFocusUpdateContextElement,
    HTMLUICollectionViewLayoutElement,
    HTMLUICollectionViewLayoutAttributesElement,
    HTMLUICollectionViewLayoutInvalidationContextElement,
    HTMLUICollectionViewListCellElement,
    HTMLUICollectionViewPlaceholderElement,
    HTMLUICollectionViewSupplementaryRegistrationElement,
    HTMLUICollectionViewTransitionLayoutElement,
    HTMLUICollectionViewUpdateItemElement,
    HTMLUICollisionBehaviorElement,
    HTMLUIColorElement,
    HTMLUIColorPickerViewControllerElement,
    HTMLUIColorWellElement,
    HTMLUICommandElement,
    HTMLUICommandAlternateElement,
    HTMLUIContentUnavailableButtonPropertiesElement,
    HTMLUIContentUnavailableConfigurationElement,
    HTMLUIContentUnavailableConfigurationStateElement,
    HTMLUIContentUnavailableImagePropertiesElement,
    HTMLUIContentUnavailableTextPropertiesElement,
    HTMLUIContentUnavailableViewElement,
    HTMLUIContextMenuConfigurationElement,
    HTMLUIContextMenuInteractionElement,
    HTMLUIContextualActionElement,
    HTMLUIControlElement,
    HTMLUICubicTimingParametersElement,
    HTMLUIDatePickerElement,
    HTMLUIDeferredMenuElementElement,
    HTMLUIDeviceElement,
    HTMLUIDictationPhraseElement,
    HTMLUIDocumentElement,
    HTMLUIDocumentBrowserActionElement,
    HTMLUIDocumentBrowserTransitionControllerElement,
    HTMLUIDocumentBrowserViewControllerElement,
    HTMLUIDocumentInteractionControllerElement,
    HTMLUIDocumentMenuViewControllerElement,
    HTMLUIDocumentPickerExtensionViewControllerElement,
    HTMLUIDocumentPickerViewControllerElement,
    HTMLUIDocumentPropertiesElement,
    HTMLUIDocumentViewControllerElement,
    HTMLUIDragInteractionElement,
    HTMLUIDragItemElement,
    HTMLUIDragPreviewElement,
    HTMLUIDragPreviewParametersElement,
    HTMLUIDragPreviewTargetElement,
    HTMLUIDropInteractionElement,
    HTMLUIDropProposalElement,
    HTMLUIDynamicAnimatorElement,
    HTMLUIDynamicBehaviorElement,
    HTMLUIDynamicItemBehaviorElement,
    HTMLUIDynamicItemGroupElement,
    HTMLUIEditMenuConfigurationElement,
    HTMLUIEditMenuInteractionElement,
    HTMLUIEventElement,
    HTMLUIEventAttributionElement,
    HTMLUIEventAttributionViewElement,
    HTMLUIFeedbackGeneratorElement,
    HTMLUIFieldBehaviorElement,
    HTMLUIFindInteractionElement,
    HTMLUIFindSessionElement,
    HTMLUIFocusAnimationCoordinatorElement,
    HTMLUIFocusDebuggerElement,
    HTMLUIFocusEffectElement,
    HTMLUIFocusGuideElement,
    HTMLUIFocusHaloEffectElement,
    HTMLUIFocusMovementHintElement,
    HTMLUIFocusSystemElement,
    HTMLUIFocusUpdateContextElement,
    HTMLUIFontElement,
    HTMLUIFontDescriptorElement,
    HTMLUIFontMetricsElement,
    HTMLUIFontPickerViewControllerElement,
    HTMLUIFontPickerViewControllerConfigurationElement,
    HTMLUIGestureRecognizerElement,
    HTMLUIGraphicsImageRendererElement,
    HTMLUIGraphicsImageRendererContextElement,
    HTMLUIGraphicsImageRendererFormatElement,
    HTMLUIGraphicsPDFRendererElement,
    HTMLUIGraphicsPDFRendererContextElement,
    HTMLUIGraphicsPDFRendererFormatElement,
    HTMLUIGraphicsRendererElement,
    HTMLUIGraphicsRendererContextElement,
    HTMLUIGraphicsRendererFormatElement,
    HTMLUIGravityBehaviorElement,
    HTMLUIHoverAutomaticEffectElement,
    HTMLUIHoverGestureRecognizerElement,
    HTMLUIHoverHighlightEffectElement,
    HTMLUIHoverLiftEffectElement,
    HTMLUIHoverStyleElement,
    HTMLUIImageElement,
    HTMLUIImageAssetElement,
    HTMLUIImageConfigurationElement,
    HTMLUIImagePickerControllerElement,
    HTMLUIImageReaderElement,
    HTMLUIImageReaderConfigurationElement,
    HTMLUIImageSymbolConfigurationElement,
    HTMLUIImageViewElement,
    HTMLUIImpactFeedbackGeneratorElement,
    HTMLUIIndirectScribbleInteractionElement,
    HTMLUIInputViewElement,
    HTMLUIInputViewControllerElement,
    HTMLUIInterpolatingMotionEffectElement,
    HTMLUIKeyElement,
    HTMLUIKeyboardLayoutGuideElement,
    HTMLUIKeyCommandElement,
    HTMLUILabelElement,
    HTMLUILargeContentViewerInteractionElement,
    HTMLUILayoutGuideElement,
    HTMLUILexiconElement,
    HTMLUILexiconEntryElement,
    HTMLUIListContentConfigurationElement,
    HTMLUIListContentImagePropertiesElement,
    HTMLUIListContentTextPropertiesElement,
    HTMLUIListContentViewElement,
    HTMLUIListSeparatorConfigurationElement,
    HTMLUILocalizedIndexedCollationElement,
    HTMLUILocalNotificationElement,
    HTMLUILongPressGestureRecognizerElement,
    HTMLUIManagedDocumentElement,
    HTMLUIMarkupTextPrintFormatterElement,
    HTMLUIMenuElement,
    HTMLUIMenuControllerElement,
    HTMLUIMenuElementElement,
    HTMLUIMenuItemElement,
    HTMLUIMenuSystemElement,
    HTMLUIMotionEffectElement,
    HTMLUIMotionEffectGroupElement,
    HTMLUIMutableApplicationShortcutItemElement,
    HTMLUIMutableUserNotificationActionElement,
    HTMLUIMutableUserNotificationCategoryElement,
    HTMLUINavigationBarElement,
    HTMLUINavigationBarAppearanceElement,
    HTMLUINavigationControllerElement,
    HTMLUINavigationItemElement,
    HTMLUINibElement,
    HTMLUINotificationFeedbackGeneratorElement,
    HTMLUIOpenURLContextElement,
    HTMLUIPageControlElement,
    HTMLUIPageControlProgressElement,
    HTMLUIPageControlTimerProgressElement,
    HTMLUIPageViewControllerElement,
    HTMLUIPanGestureRecognizerElement,
    HTMLUIPasteboardElement,
    HTMLUIPasteConfigurationElement,
    HTMLUIPasteControlElement,
    HTMLUIPasteControlConfigurationElement,
    HTMLUIPencilInteractionElement,
    HTMLUIPercentDrivenInteractiveTransitionElement,
    HTMLUIPickerViewElement,
    HTMLUIPinchGestureRecognizerElement,
    HTMLUIPointerAccessoryElement,
    HTMLUIPointerEffectElement,
    HTMLUIPointerHighlightEffectElement,
    HTMLUIPointerHoverEffectElement,
    HTMLUIPointerInteractionElement,
    HTMLUIPointerLiftEffectElement,
    HTMLUIPointerLockStateElement,
    HTMLUIPointerRegionElement,
    HTMLUIPointerRegionRequestElement,
    HTMLUIPointerShapeElement,
    HTMLUIPointerStyleElement,
    HTMLUIPopoverBackgroundViewElement,
    HTMLUIPopoverControllerElement,
    HTMLUIPopoverPresentationControllerElement,
    HTMLUIPresentationControllerElement,
    HTMLUIPressElement,
    HTMLUIPressesEventElement,
    HTMLUIPreviewActionElement,
    HTMLUIPreviewActionGroupElement,
    HTMLUIPreviewInteractionElement,
    HTMLUIPreviewParametersElement,
    HTMLUIPreviewTargetElement,
    HTMLUIPrinterElement,
    HTMLUIPrinterDestinationElement,
    HTMLUIPrinterPickerControllerElement,
    HTMLUIPrintFormatterElement,
    HTMLUIPrintInfoElement,
    HTMLUIPrintInteractionControllerElement,
    HTMLUIPrintPageRendererElement,
    HTMLUIPrintPaperElement,
    HTMLUIPrintServiceExtensionElement,
    HTMLUIProgressViewElement,
    HTMLUIPushBehaviorElement,
    HTMLUIReferenceLibraryViewControllerElement,
    HTMLUIRefreshControlElement,
    HTMLUIRegionElement,
    HTMLUIResolvedShapeElement,
    HTMLUIResponderElement,
    HTMLUIRotationGestureRecognizerElement,
    HTMLUISceneElement,
    HTMLUISceneActivationConditionsElement,
    HTMLUISceneActivationRequestOptionsElement,
    HTMLUISceneConfigurationElement,
    HTMLUISceneConnectionOptionsElement,
    HTMLUISceneDestructionRequestOptionsElement,
    HTMLUISceneOpenExternalURLOptionsElement,
    HTMLUISceneOpenURLOptionsElement,
    HTMLUISceneSessionElement,
    HTMLUISceneSessionActivationRequestElement,
    HTMLUISceneSizeRestrictionsElement,
    HTMLUISceneWindowingBehaviorsElement,
    HTMLUIScreenElement,
    HTMLUIScreenEdgePanGestureRecognizerElement,
    HTMLUIScreenModeElement,
    HTMLUIScreenshotServiceElement,
    HTMLUIScribbleInteractionElement,
    HTMLUIScrollViewElement,
    HTMLUISearchBarElement,
    HTMLUISearchContainerViewControllerElement,
    HTMLUISearchControllerElement,
    HTMLUISearchDisplayControllerElement,
    HTMLUISearchSuggestionItemElement,
    HTMLUISearchTextFieldElement,
    HTMLUISearchTokenElement,
    HTMLUISegmentedControlElement,
    HTMLUISelectionFeedbackGeneratorElement,
    HTMLUIShapeElement,
    HTMLUIShapeResolutionContextElement,
    HTMLUISheetPresentationControllerElement,
    HTMLUISheetPresentationControllerDetentElement,
    HTMLUISimpleTextPrintFormatterElement,
    HTMLUISliderElement,
    HTMLUISnapBehaviorElement,
    HTMLUISplitViewControllerElement,
    HTMLUISpringLoadedInteractionElement,
    HTMLUISpringTimingParametersElement,
    HTMLUIStackViewElement,
    HTMLUIStatusBarManagerElement,
    HTMLUIStepperElement,
    HTMLUIStoryboardElement,
    HTMLUIStoryboardPopoverSegueElement,
    HTMLUIStoryboardSegueElement,
    HTMLUIStoryboardUnwindSegueSourceElement,
    HTMLUISwipeActionsConfigurationElement,
    HTMLUISwipeGestureRecognizerElement,
    HTMLUISwitchElement,
    HTMLUISymbolEffectCompletionContextElement,
    HTMLUITabBarElement,
    HTMLUITabBarAppearanceElement,
    HTMLUITabBarControllerElement,
    HTMLUITabBarItemElement,
    HTMLUITabBarItemAppearanceElement,
    HTMLUITabBarItemStateAppearanceElement,
    HTMLUITableViewElement,
    HTMLUITableViewCellElement,
    HTMLUITableViewControllerElement,
    HTMLUITableViewDiffableDataSourceElement,
    HTMLUITableViewDropPlaceholderElement,
    HTMLUITableViewDropProposalElement,
    HTMLUITableViewFocusUpdateContextElement,
    HTMLUITableViewHeaderFooterViewElement,
    HTMLUITableViewPlaceholderElement,
    HTMLUITableViewRowActionElement,
    HTMLUITapGestureRecognizerElement,
    HTMLUITargetedDragPreviewElement,
    HTMLUITargetedPreviewElement,
    HTMLUITextCheckerElement,
    HTMLUITextDragPreviewRendererElement,
    HTMLUITextDropProposalElement,
    HTMLUITextFieldElement,
    HTMLUITextFormattingCoordinatorElement,
    HTMLUITextInputAssistantItemElement,
    HTMLUITextInputContextElement,
    HTMLUITextInputModeElement,
    HTMLUITextInputPasswordRulesElement,
    HTMLUITextInputStringTokenizerElement,
    HTMLUITextInteractionElement,
    HTMLUITextItemElement,
    HTMLUITextItemMenuConfigurationElement,
    HTMLUITextItemMenuPreviewElement,
    HTMLUITextLoupeSessionElement,
    HTMLUITextPlaceholderElement,
    HTMLUITextPositionElement,
    HTMLUITextRangeElement,
    HTMLUITextSearchingFindSessionElement,
    HTMLUITextSearchOptionsElement,
    HTMLUITextSelectionDisplayInteractionElement,
    HTMLUITextSelectionRectElement,
    HTMLUITextViewElement,
    HTMLUIToolbarElement,
    HTMLUIToolbarAppearanceElement,
    HTMLUIToolTipConfigurationElement,
    HTMLUIToolTipInteractionElement,
    HTMLUITouchElement,
    HTMLUITrackingLayoutGuideElement,
    HTMLUITraitAccessibilityContrastElement,
    HTMLUITraitActiveAppearanceElement,
    HTMLUITraitCollectionElement,
    HTMLUITraitDisplayGamutElement,
    HTMLUITraitDisplayScaleElement,
    HTMLUITraitForceTouchCapabilityElement,
    HTMLUITraitHorizontalSizeClassElement,
    HTMLUITraitImageDynamicRangeElement,
    HTMLUITraitLayoutDirectionElement,
    HTMLUITraitLegibilityWeightElement,
    HTMLUITraitPreferredContentSizeCategoryElement,
    HTMLUITraitSceneCaptureStateElement,
    HTMLUITraitToolbarItemPresentationSizeElement,
    HTMLUITraitTypesettingLanguageElement,
    HTMLUITraitUserInterfaceIdiomElement,
    HTMLUITraitUserInterfaceLevelElement,
    HTMLUITraitUserInterfaceStyleElement,
    HTMLUITraitVerticalSizeClassElement,
    HTMLUIUserNotificationActionElement,
    HTMLUIUserNotificationCategoryElement,
    HTMLUIUserNotificationSettingsElement,
    HTMLUIVibrancyEffectElement,
    HTMLUIVideoEditorControllerElement,
    HTMLUIViewElement,
    HTMLUIViewConfigurationStateElement,
    HTMLUIViewControllerElement,
    HTMLUIViewPrintFormatterElement,
    HTMLUIViewPropertyAnimatorElement,
    HTMLUIVisualEffectElement,
    HTMLUIVisualEffectViewElement,
    HTMLUIWebViewElement,
    HTMLUIWindowElement,
    HTMLUIWindowSceneElement,
    HTMLUIWindowSceneActivationActionElement,
    HTMLUIWindowSceneActivationConfigurationElement,
    HTMLUIWindowSceneActivationInteractionElement,
    HTMLUIWindowSceneActivationRequestOptionsElement,
    HTMLUIWindowSceneDestructionRequestOptionsElement,
    HTMLUIWindowSceneDragInteractionElement,
    HTMLUIWindowSceneGeometryElement,
    HTMLUIWindowSceneGeometryPreferencesElement,
    HTMLUIWindowSceneGeometryPreferencesIOSElement,
    HTMLUIWindowSceneGeometryPreferencesMacElement,
    HTMLUIWindowScenePlacementElement,
    HTMLUIWindowSceneProminentPlacementElement,
    HTMLUIWindowSceneStandardPlacementElement,
  } = await import('./generated-elements.js');

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
  customElements.define('ns-dataasset', HTMLNSDataAssetElement);
  customElements.define(
    'ns-diffabledatasourcesectionsnapshot',
    HTMLNSDiffableDataSourceSectionSnapshotElement
  );
  customElements.define(
    'ns-diffabledatasourcesectiontransaction',
    HTMLNSDiffableDataSourceSectionTransactionElement
  );
  customElements.define(
    'ns-diffabledatasourcesnapshot',
    HTMLNSDiffableDataSourceSnapshotElement
  );
  customElements.define(
    'ns-diffabledatasourcetransaction',
    HTMLNSDiffableDataSourceTransactionElement
  );
  customElements.define('ns-layoutanchor', HTMLNSLayoutAnchorElement);
  customElements.define('ns-layoutconstraint', HTMLNSLayoutConstraintElement);
  customElements.define('ns-layoutdimension', HTMLNSLayoutDimensionElement);
  customElements.define('ns-layoutmanager', HTMLNSLayoutManagerElement);
  customElements.define('ns-layoutxaxisanchor', HTMLNSLayoutXAxisAnchorElement);
  customElements.define('ns-layoutyaxisanchor', HTMLNSLayoutYAxisAnchorElement);
  customElements.define(
    'ns-mutableparagraphstyle',
    HTMLNSMutableParagraphStyleElement
  );
  customElements.define('ns-object', HTMLNSObjectElement);
  customElements.define('ns-paragraphstyle', HTMLNSParagraphStyleElement);
  customElements.define('ns-shadow', HTMLNSShadowElement);
  customElements.define(
    'ns-stringdrawingcontext',
    HTMLNSStringDrawingContextElement
  );
  customElements.define('ns-textattachment', HTMLNSTextAttachmentElement);
  customElements.define(
    'ns-textattachmentviewprovider',
    HTMLNSTextAttachmentViewProviderElement
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
  customElements.define(
    'ns-textviewportlayoutcontroller',
    HTMLNSTextViewportLayoutControllerElement
  );
  customElements.define('ui-acceleration', HTMLUIAccelerationElement);
  customElements.define('ui-accelerometer', HTMLUIAccelerometerElement);
  customElements.define(
    'ui-accessibilitycustomaction',
    HTMLUIAccessibilityCustomActionElement
  );
  customElements.define(
    'ui-accessibilitycustomrotor',
    HTMLUIAccessibilityCustomRotorElement
  );
  customElements.define(
    'ui-accessibilitycustomrotoritemresult',
    HTMLUIAccessibilityCustomRotorItemResultElement
  );
  customElements.define(
    'ui-accessibilitycustomrotorsearchpredicate',
    HTMLUIAccessibilityCustomRotorSearchPredicateElement
  );
  customElements.define(
    'ui-accessibilityelement',
    HTMLUIAccessibilityElementElement
  );
  customElements.define(
    'ui-accessibilitylocationdescriptor',
    HTMLUIAccessibilityLocationDescriptorElement
  );
  customElements.define('ui-action', HTMLUIActionElement);
  customElements.define('ui-actionsheet', HTMLUIActionSheetElement);
  customElements.define('ui-activity', HTMLUIActivityElement);
  customElements.define(
    'ui-activityindicatorview',
    HTMLUIActivityIndicatorViewElement
  );
  customElements.define(
    'ui-activityitemsconfiguration',
    HTMLUIActivityItemsConfigurationElement
  );
  customElements.define(
    'ui-activityviewcontroller',
    HTMLUIActivityViewControllerElement
  );
  customElements.define('ui-alertaction', HTMLUIAlertActionElement);
  customElements.define('ui-alertcontroller', HTMLUIAlertControllerElement);
  customElements.define('ui-alertview', HTMLUIAlertViewElement);
  customElements.define('ui-application', HTMLUIApplicationElement);
  customElements.define(
    'ui-applicationshortcuticon',
    HTMLUIApplicationShortcutIconElement
  );
  customElements.define(
    'ui-applicationshortcutitem',
    HTMLUIApplicationShortcutItemElement
  );
  customElements.define(
    'ui-attachmentbehavior',
    HTMLUIAttachmentBehaviorElement
  );
  customElements.define(
    'ui-backgroundconfiguration',
    HTMLUIBackgroundConfigurationElement
  );
  customElements.define(
    'ui-bandselectioninteraction',
    HTMLUIBandSelectionInteractionElement
  );
  customElements.define('ui-barappearance', HTMLUIBarAppearanceElement);
  customElements.define('ui-barbuttonitem', HTMLUIBarButtonItemElement);
  customElements.define(
    'ui-barbuttonitemappearance',
    HTMLUIBarButtonItemAppearanceElement
  );
  customElements.define(
    'ui-barbuttonitemgroup',
    HTMLUIBarButtonItemGroupElement
  );
  customElements.define(
    'ui-barbuttonitemstateappearance',
    HTMLUIBarButtonItemStateAppearanceElement
  );
  customElements.define('ui-baritem', HTMLUIBarItemElement);
  customElements.define('ui-bezierpath', HTMLUIBezierPathElement);
  customElements.define('ui-blureffect', HTMLUIBlurEffectElement);
  customElements.define('ui-button', HTMLUIButtonElement);
  customElements.define(
    'ui-buttonconfiguration',
    HTMLUIButtonConfigurationElement
  );
  customElements.define('ui-calendarselection', HTMLUICalendarSelectionElement);
  customElements.define(
    'ui-calendarselectionmultidate',
    HTMLUICalendarSelectionMultiDateElement
  );
  customElements.define(
    'ui-calendarselectionsingledate',
    HTMLUICalendarSelectionSingleDateElement
  );
  customElements.define('ui-calendarview', HTMLUICalendarViewElement);
  customElements.define(
    'ui-calendarviewdecoration',
    HTMLUICalendarViewDecorationElement
  );
  customElements.define('ui-cellaccessory', HTMLUICellAccessoryElement);
  customElements.define(
    'ui-cellaccessorycheckmark',
    HTMLUICellAccessoryCheckmarkElement
  );
  customElements.define(
    'ui-cellaccessorycustomview',
    HTMLUICellAccessoryCustomViewElement
  );
  customElements.define(
    'ui-cellaccessorydelete',
    HTMLUICellAccessoryDeleteElement
  );
  customElements.define(
    'ui-cellaccessorydetail',
    HTMLUICellAccessoryDetailElement
  );
  customElements.define(
    'ui-cellaccessorydisclosureindicator',
    HTMLUICellAccessoryDisclosureIndicatorElement
  );
  customElements.define(
    'ui-cellaccessoryinsert',
    HTMLUICellAccessoryInsertElement
  );
  customElements.define(
    'ui-cellaccessorylabel',
    HTMLUICellAccessoryLabelElement
  );
  customElements.define(
    'ui-cellaccessorymultiselect',
    HTMLUICellAccessoryMultiselectElement
  );
  customElements.define(
    'ui-cellaccessoryoutlinedisclosure',
    HTMLUICellAccessoryOutlineDisclosureElement
  );
  customElements.define(
    'ui-cellaccessorypopupmenu',
    HTMLUICellAccessoryPopUpMenuElement
  );
  customElements.define(
    'ui-cellaccessoryreorder',
    HTMLUICellAccessoryReorderElement
  );
  customElements.define(
    'ui-cellconfigurationstate',
    HTMLUICellConfigurationStateElement
  );
  customElements.define(
    'ui-cloudsharingcontroller',
    HTMLUICloudSharingControllerElement
  );
  customElements.define(
    'ui-collectionlayoutlistconfiguration',
    HTMLUICollectionLayoutListConfigurationElement
  );
  customElements.define(
    'ui-collectionlayoutsectionorthogonalscrollingproperties',
    HTMLUICollectionLayoutSectionOrthogonalScrollingPropertiesElement
  );
  customElements.define(
    'ui-collectionreusableview',
    HTMLUICollectionReusableViewElement
  );
  customElements.define('ui-collectionview', HTMLUICollectionViewElement);
  customElements.define(
    'ui-collectionviewcell',
    HTMLUICollectionViewCellElement
  );
  customElements.define(
    'ui-collectionviewcellregistration',
    HTMLUICollectionViewCellRegistrationElement
  );
  customElements.define(
    'ui-collectionviewcompositionallayout',
    HTMLUICollectionViewCompositionalLayoutElement
  );
  customElements.define(
    'ui-collectionviewcompositionallayoutconfiguration',
    HTMLUICollectionViewCompositionalLayoutConfigurationElement
  );
  customElements.define(
    'ui-collectionviewcontroller',
    HTMLUICollectionViewControllerElement
  );
  customElements.define(
    'ui-collectionviewdiffabledatasource',
    HTMLUICollectionViewDiffableDataSourceElement
  );
  customElements.define(
    'ui-collectionviewdiffabledatasourcereorderinghandlers',
    HTMLUICollectionViewDiffableDataSourceReorderingHandlersElement
  );
  customElements.define(
    'ui-collectionviewdiffabledatasourcesectionsnapshothandlers',
    HTMLUICollectionViewDiffableDataSourceSectionSnapshotHandlersElement
  );
  customElements.define(
    'ui-collectionviewdropplaceholder',
    HTMLUICollectionViewDropPlaceholderElement
  );
  customElements.define(
    'ui-collectionviewdropproposal',
    HTMLUICollectionViewDropProposalElement
  );
  customElements.define(
    'ui-collectionviewflowlayout',
    HTMLUICollectionViewFlowLayoutElement
  );
  customElements.define(
    'ui-collectionviewflowlayoutinvalidationcontext',
    HTMLUICollectionViewFlowLayoutInvalidationContextElement
  );
  customElements.define(
    'ui-collectionviewfocusupdatecontext',
    HTMLUICollectionViewFocusUpdateContextElement
  );
  customElements.define(
    'ui-collectionviewlayout',
    HTMLUICollectionViewLayoutElement
  );
  customElements.define(
    'ui-collectionviewlayoutattributes',
    HTMLUICollectionViewLayoutAttributesElement
  );
  customElements.define(
    'ui-collectionviewlayoutinvalidationcontext',
    HTMLUICollectionViewLayoutInvalidationContextElement
  );
  customElements.define(
    'ui-collectionviewlistcell',
    HTMLUICollectionViewListCellElement
  );
  customElements.define(
    'ui-collectionviewplaceholder',
    HTMLUICollectionViewPlaceholderElement
  );
  customElements.define(
    'ui-collectionviewsupplementaryregistration',
    HTMLUICollectionViewSupplementaryRegistrationElement
  );
  customElements.define(
    'ui-collectionviewtransitionlayout',
    HTMLUICollectionViewTransitionLayoutElement
  );
  customElements.define(
    'ui-collectionviewupdateitem',
    HTMLUICollectionViewUpdateItemElement
  );
  customElements.define('ui-collisionbehavior', HTMLUICollisionBehaviorElement);
  customElements.define('ui-color', HTMLUIColorElement);
  customElements.define(
    'ui-colorpickerviewcontroller',
    HTMLUIColorPickerViewControllerElement
  );
  customElements.define('ui-colorwell', HTMLUIColorWellElement);
  customElements.define('ui-command', HTMLUICommandElement);
  customElements.define('ui-commandalternate', HTMLUICommandAlternateElement);
  customElements.define(
    'ui-contentunavailablebuttonproperties',
    HTMLUIContentUnavailableButtonPropertiesElement
  );
  customElements.define(
    'ui-contentunavailableconfiguration',
    HTMLUIContentUnavailableConfigurationElement
  );
  customElements.define(
    'ui-contentunavailableconfigurationstate',
    HTMLUIContentUnavailableConfigurationStateElement
  );
  customElements.define(
    'ui-contentunavailableimageproperties',
    HTMLUIContentUnavailableImagePropertiesElement
  );
  customElements.define(
    'ui-contentunavailabletextproperties',
    HTMLUIContentUnavailableTextPropertiesElement
  );
  customElements.define(
    'ui-contentunavailableview',
    HTMLUIContentUnavailableViewElement
  );
  customElements.define(
    'ui-contextmenuconfiguration',
    HTMLUIContextMenuConfigurationElement
  );
  customElements.define(
    'ui-contextmenuinteraction',
    HTMLUIContextMenuInteractionElement
  );
  customElements.define('ui-contextualaction', HTMLUIContextualActionElement);
  customElements.define('ui-control', HTMLUIControlElement);
  customElements.define(
    'ui-cubictimingparameters',
    HTMLUICubicTimingParametersElement
  );
  customElements.define('ui-datepicker', HTMLUIDatePickerElement);
  customElements.define(
    'ui-deferredmenuelement',
    HTMLUIDeferredMenuElementElement
  );
  customElements.define('ui-device', HTMLUIDeviceElement);
  customElements.define('ui-dictationphrase', HTMLUIDictationPhraseElement);
  customElements.define('ui-document', HTMLUIDocumentElement);
  customElements.define(
    'ui-documentbrowseraction',
    HTMLUIDocumentBrowserActionElement
  );
  customElements.define(
    'ui-documentbrowsertransitioncontroller',
    HTMLUIDocumentBrowserTransitionControllerElement
  );
  customElements.define(
    'ui-documentbrowserviewcontroller',
    HTMLUIDocumentBrowserViewControllerElement
  );
  customElements.define(
    'ui-documentinteractioncontroller',
    HTMLUIDocumentInteractionControllerElement
  );
  customElements.define(
    'ui-documentmenuviewcontroller',
    HTMLUIDocumentMenuViewControllerElement
  );
  customElements.define(
    'ui-documentpickerextensionviewcontroller',
    HTMLUIDocumentPickerExtensionViewControllerElement
  );
  customElements.define(
    'ui-documentpickerviewcontroller',
    HTMLUIDocumentPickerViewControllerElement
  );
  customElements.define(
    'ui-documentproperties',
    HTMLUIDocumentPropertiesElement
  );
  customElements.define(
    'ui-documentviewcontroller',
    HTMLUIDocumentViewControllerElement
  );
  customElements.define('ui-draginteraction', HTMLUIDragInteractionElement);
  customElements.define('ui-dragitem', HTMLUIDragItemElement);
  customElements.define('ui-dragpreview', HTMLUIDragPreviewElement);
  customElements.define(
    'ui-dragpreviewparameters',
    HTMLUIDragPreviewParametersElement
  );
  customElements.define('ui-dragpreviewtarget', HTMLUIDragPreviewTargetElement);
  customElements.define('ui-dropinteraction', HTMLUIDropInteractionElement);
  customElements.define('ui-dropproposal', HTMLUIDropProposalElement);
  customElements.define('ui-dynamicanimator', HTMLUIDynamicAnimatorElement);
  customElements.define('ui-dynamicbehavior', HTMLUIDynamicBehaviorElement);
  customElements.define(
    'ui-dynamicitembehavior',
    HTMLUIDynamicItemBehaviorElement
  );
  customElements.define('ui-dynamicitemgroup', HTMLUIDynamicItemGroupElement);
  customElements.define(
    'ui-editmenuconfiguration',
    HTMLUIEditMenuConfigurationElement
  );
  customElements.define(
    'ui-editmenuinteraction',
    HTMLUIEditMenuInteractionElement
  );
  customElements.define('ui-event', HTMLUIEventElement);
  customElements.define('ui-eventattribution', HTMLUIEventAttributionElement);
  customElements.define(
    'ui-eventattributionview',
    HTMLUIEventAttributionViewElement
  );
  customElements.define('ui-feedbackgenerator', HTMLUIFeedbackGeneratorElement);
  customElements.define('ui-fieldbehavior', HTMLUIFieldBehaviorElement);
  customElements.define('ui-findinteraction', HTMLUIFindInteractionElement);
  customElements.define('ui-findsession', HTMLUIFindSessionElement);
  customElements.define(
    'ui-focusanimationcoordinator',
    HTMLUIFocusAnimationCoordinatorElement
  );
  customElements.define('ui-focusdebugger', HTMLUIFocusDebuggerElement);
  customElements.define('ui-focuseffect', HTMLUIFocusEffectElement);
  customElements.define('ui-focusguide', HTMLUIFocusGuideElement);
  customElements.define('ui-focushaloeffect', HTMLUIFocusHaloEffectElement);
  customElements.define('ui-focusmovementhint', HTMLUIFocusMovementHintElement);
  customElements.define('ui-focussystem', HTMLUIFocusSystemElement);
  customElements.define(
    'ui-focusupdatecontext',
    HTMLUIFocusUpdateContextElement
  );
  customElements.define('ui-font', HTMLUIFontElement);
  customElements.define('ui-fontdescriptor', HTMLUIFontDescriptorElement);
  customElements.define('ui-fontmetrics', HTMLUIFontMetricsElement);
  customElements.define(
    'ui-fontpickerviewcontroller',
    HTMLUIFontPickerViewControllerElement
  );
  customElements.define(
    'ui-fontpickerviewcontrollerconfiguration',
    HTMLUIFontPickerViewControllerConfigurationElement
  );
  customElements.define('ui-gesturerecognizer', HTMLUIGestureRecognizerElement);
  customElements.define(
    'ui-graphicsimagerenderer',
    HTMLUIGraphicsImageRendererElement
  );
  customElements.define(
    'ui-graphicsimagerenderercontext',
    HTMLUIGraphicsImageRendererContextElement
  );
  customElements.define(
    'ui-graphicsimagerendererformat',
    HTMLUIGraphicsImageRendererFormatElement
  );
  customElements.define(
    'ui-graphicspdfrenderer',
    HTMLUIGraphicsPDFRendererElement
  );
  customElements.define(
    'ui-graphicspdfrenderercontext',
    HTMLUIGraphicsPDFRendererContextElement
  );
  customElements.define(
    'ui-graphicspdfrendererformat',
    HTMLUIGraphicsPDFRendererFormatElement
  );
  customElements.define('ui-graphicsrenderer', HTMLUIGraphicsRendererElement);
  customElements.define(
    'ui-graphicsrenderercontext',
    HTMLUIGraphicsRendererContextElement
  );
  customElements.define(
    'ui-graphicsrendererformat',
    HTMLUIGraphicsRendererFormatElement
  );
  customElements.define('ui-gravitybehavior', HTMLUIGravityBehaviorElement);
  customElements.define(
    'ui-hoverautomaticeffect',
    HTMLUIHoverAutomaticEffectElement
  );
  customElements.define(
    'ui-hovergesturerecognizer',
    HTMLUIHoverGestureRecognizerElement
  );
  customElements.define(
    'ui-hoverhighlighteffect',
    HTMLUIHoverHighlightEffectElement
  );
  customElements.define('ui-hoverlifteffect', HTMLUIHoverLiftEffectElement);
  customElements.define('ui-hoverstyle', HTMLUIHoverStyleElement);
  customElements.define('ui-image', HTMLUIImageElement);
  customElements.define('ui-imageasset', HTMLUIImageAssetElement);
  customElements.define(
    'ui-imageconfiguration',
    HTMLUIImageConfigurationElement
  );
  customElements.define(
    'ui-imagepickercontroller',
    HTMLUIImagePickerControllerElement
  );
  customElements.define('ui-imagereader', HTMLUIImageReaderElement);
  customElements.define(
    'ui-imagereaderconfiguration',
    HTMLUIImageReaderConfigurationElement
  );
  customElements.define(
    'ui-imagesymbolconfiguration',
    HTMLUIImageSymbolConfigurationElement
  );
  customElements.define('ui-imageview', HTMLUIImageViewElement);
  customElements.define(
    'ui-impactfeedbackgenerator',
    HTMLUIImpactFeedbackGeneratorElement
  );
  customElements.define(
    'ui-indirectscribbleinteraction',
    HTMLUIIndirectScribbleInteractionElement
  );
  customElements.define('ui-inputview', HTMLUIInputViewElement);
  customElements.define(
    'ui-inputviewcontroller',
    HTMLUIInputViewControllerElement
  );
  customElements.define(
    'ui-interpolatingmotioneffect',
    HTMLUIInterpolatingMotionEffectElement
  );
  customElements.define('ui-key', HTMLUIKeyElement);
  customElements.define(
    'ui-keyboardlayoutguide',
    HTMLUIKeyboardLayoutGuideElement
  );
  customElements.define('ui-keycommand', HTMLUIKeyCommandElement);
  customElements.define('ui-label', HTMLUILabelElement);
  customElements.define(
    'ui-largecontentviewerinteraction',
    HTMLUILargeContentViewerInteractionElement
  );
  customElements.define('ui-layoutguide', HTMLUILayoutGuideElement);
  customElements.define('ui-lexicon', HTMLUILexiconElement);
  customElements.define('ui-lexiconentry', HTMLUILexiconEntryElement);
  customElements.define(
    'ui-listcontentconfiguration',
    HTMLUIListContentConfigurationElement
  );
  customElements.define(
    'ui-listcontentimageproperties',
    HTMLUIListContentImagePropertiesElement
  );
  customElements.define(
    'ui-listcontenttextproperties',
    HTMLUIListContentTextPropertiesElement
  );
  customElements.define('ui-listcontentview', HTMLUIListContentViewElement);
  customElements.define(
    'ui-listseparatorconfiguration',
    HTMLUIListSeparatorConfigurationElement
  );
  customElements.define(
    'ui-localizedindexedcollation',
    HTMLUILocalizedIndexedCollationElement
  );
  customElements.define('ui-localnotification', HTMLUILocalNotificationElement);
  customElements.define(
    'ui-longpressgesturerecognizer',
    HTMLUILongPressGestureRecognizerElement
  );
  customElements.define('ui-manageddocument', HTMLUIManagedDocumentElement);
  customElements.define(
    'ui-markuptextprintformatter',
    HTMLUIMarkupTextPrintFormatterElement
  );
  customElements.define('ui-menu', HTMLUIMenuElement);
  customElements.define('ui-menucontroller', HTMLUIMenuControllerElement);
  customElements.define('ui-menuelement', HTMLUIMenuElementElement);
  customElements.define('ui-menuitem', HTMLUIMenuItemElement);
  customElements.define('ui-menusystem', HTMLUIMenuSystemElement);
  customElements.define('ui-motioneffect', HTMLUIMotionEffectElement);
  customElements.define('ui-motioneffectgroup', HTMLUIMotionEffectGroupElement);
  customElements.define(
    'ui-mutableapplicationshortcutitem',
    HTMLUIMutableApplicationShortcutItemElement
  );
  customElements.define(
    'ui-mutableusernotificationaction',
    HTMLUIMutableUserNotificationActionElement
  );
  customElements.define(
    'ui-mutableusernotificationcategory',
    HTMLUIMutableUserNotificationCategoryElement
  );
  customElements.define('ui-navigationbar', HTMLUINavigationBarElement);
  customElements.define(
    'ui-navigationbarappearance',
    HTMLUINavigationBarAppearanceElement
  );
  customElements.define(
    'ui-navigationcontroller',
    HTMLUINavigationControllerElement
  );
  customElements.define('ui-navigationitem', HTMLUINavigationItemElement);
  customElements.define('ui-nib', HTMLUINibElement);
  customElements.define(
    'ui-notificationfeedbackgenerator',
    HTMLUINotificationFeedbackGeneratorElement
  );
  customElements.define('ui-openurlcontext', HTMLUIOpenURLContextElement);
  customElements.define('ui-pagecontrol', HTMLUIPageControlElement);
  customElements.define(
    'ui-pagecontrolprogress',
    HTMLUIPageControlProgressElement
  );
  customElements.define(
    'ui-pagecontroltimerprogress',
    HTMLUIPageControlTimerProgressElement
  );
  customElements.define(
    'ui-pageviewcontroller',
    HTMLUIPageViewControllerElement
  );
  customElements.define(
    'ui-pangesturerecognizer',
    HTMLUIPanGestureRecognizerElement
  );
  customElements.define('ui-pasteboard', HTMLUIPasteboardElement);
  customElements.define(
    'ui-pasteconfiguration',
    HTMLUIPasteConfigurationElement
  );
  customElements.define('ui-pastecontrol', HTMLUIPasteControlElement);
  customElements.define(
    'ui-pastecontrolconfiguration',
    HTMLUIPasteControlConfigurationElement
  );
  customElements.define('ui-pencilinteraction', HTMLUIPencilInteractionElement);
  customElements.define(
    'ui-percentdriveninteractivetransition',
    HTMLUIPercentDrivenInteractiveTransitionElement
  );
  customElements.define('ui-pickerview', HTMLUIPickerViewElement);
  customElements.define(
    'ui-pinchgesturerecognizer',
    HTMLUIPinchGestureRecognizerElement
  );
  customElements.define('ui-pointeraccessory', HTMLUIPointerAccessoryElement);
  customElements.define('ui-pointereffect', HTMLUIPointerEffectElement);
  customElements.define(
    'ui-pointerhighlighteffect',
    HTMLUIPointerHighlightEffectElement
  );
  customElements.define(
    'ui-pointerhovereffect',
    HTMLUIPointerHoverEffectElement
  );
  customElements.define(
    'ui-pointerinteraction',
    HTMLUIPointerInteractionElement
  );
  customElements.define('ui-pointerlifteffect', HTMLUIPointerLiftEffectElement);
  customElements.define('ui-pointerlockstate', HTMLUIPointerLockStateElement);
  customElements.define('ui-pointerregion', HTMLUIPointerRegionElement);
  customElements.define(
    'ui-pointerregionrequest',
    HTMLUIPointerRegionRequestElement
  );
  customElements.define('ui-pointershape', HTMLUIPointerShapeElement);
  customElements.define('ui-pointerstyle', HTMLUIPointerStyleElement);
  customElements.define(
    'ui-popoverbackgroundview',
    HTMLUIPopoverBackgroundViewElement
  );
  customElements.define('ui-popovercontroller', HTMLUIPopoverControllerElement);
  customElements.define(
    'ui-popoverpresentationcontroller',
    HTMLUIPopoverPresentationControllerElement
  );
  customElements.define(
    'ui-presentationcontroller',
    HTMLUIPresentationControllerElement
  );
  customElements.define('ui-press', HTMLUIPressElement);
  customElements.define('ui-pressesevent', HTMLUIPressesEventElement);
  customElements.define('ui-previewaction', HTMLUIPreviewActionElement);
  customElements.define(
    'ui-previewactiongroup',
    HTMLUIPreviewActionGroupElement
  );
  customElements.define(
    'ui-previewinteraction',
    HTMLUIPreviewInteractionElement
  );
  customElements.define('ui-previewparameters', HTMLUIPreviewParametersElement);
  customElements.define('ui-previewtarget', HTMLUIPreviewTargetElement);
  customElements.define('ui-printer', HTMLUIPrinterElement);
  customElements.define(
    'ui-printerdestination',
    HTMLUIPrinterDestinationElement
  );
  customElements.define(
    'ui-printerpickercontroller',
    HTMLUIPrinterPickerControllerElement
  );
  customElements.define('ui-printformatter', HTMLUIPrintFormatterElement);
  customElements.define('ui-printinfo', HTMLUIPrintInfoElement);
  customElements.define(
    'ui-printinteractioncontroller',
    HTMLUIPrintInteractionControllerElement
  );
  customElements.define('ui-printpagerenderer', HTMLUIPrintPageRendererElement);
  customElements.define('ui-printpaper', HTMLUIPrintPaperElement);
  customElements.define(
    'ui-printserviceextension',
    HTMLUIPrintServiceExtensionElement
  );
  customElements.define('ui-progressview', HTMLUIProgressViewElement);
  customElements.define('ui-pushbehavior', HTMLUIPushBehaviorElement);
  customElements.define(
    'ui-referencelibraryviewcontroller',
    HTMLUIReferenceLibraryViewControllerElement
  );
  customElements.define('ui-refreshcontrol', HTMLUIRefreshControlElement);
  customElements.define('ui-region', HTMLUIRegionElement);
  customElements.define('ui-resolvedshape', HTMLUIResolvedShapeElement);
  customElements.define('ui-responder', HTMLUIResponderElement);
  customElements.define(
    'ui-rotationgesturerecognizer',
    HTMLUIRotationGestureRecognizerElement
  );
  customElements.define('ui-scene', HTMLUISceneElement);
  customElements.define(
    'ui-sceneactivationconditions',
    HTMLUISceneActivationConditionsElement
  );
  customElements.define(
    'ui-sceneactivationrequestoptions',
    HTMLUISceneActivationRequestOptionsElement
  );
  customElements.define(
    'ui-sceneconfiguration',
    HTMLUISceneConfigurationElement
  );
  customElements.define(
    'ui-sceneconnectionoptions',
    HTMLUISceneConnectionOptionsElement
  );
  customElements.define(
    'ui-scenedestructionrequestoptions',
    HTMLUISceneDestructionRequestOptionsElement
  );
  customElements.define(
    'ui-sceneopenexternalurloptions',
    HTMLUISceneOpenExternalURLOptionsElement
  );
  customElements.define(
    'ui-sceneopenurloptions',
    HTMLUISceneOpenURLOptionsElement
  );
  customElements.define('ui-scenesession', HTMLUISceneSessionElement);
  customElements.define(
    'ui-scenesessionactivationrequest',
    HTMLUISceneSessionActivationRequestElement
  );
  customElements.define(
    'ui-scenesizerestrictions',
    HTMLUISceneSizeRestrictionsElement
  );
  customElements.define(
    'ui-scenewindowingbehaviors',
    HTMLUISceneWindowingBehaviorsElement
  );
  customElements.define('ui-screen', HTMLUIScreenElement);
  customElements.define(
    'ui-screenedgepangesturerecognizer',
    HTMLUIScreenEdgePanGestureRecognizerElement
  );
  customElements.define('ui-screenmode', HTMLUIScreenModeElement);
  customElements.define('ui-screenshotservice', HTMLUIScreenshotServiceElement);
  customElements.define(
    'ui-scribbleinteraction',
    HTMLUIScribbleInteractionElement
  );
  customElements.define('ui-scrollview', HTMLUIScrollViewElement);
  customElements.define('ui-searchbar', HTMLUISearchBarElement);
  customElements.define(
    'ui-searchcontainerviewcontroller',
    HTMLUISearchContainerViewControllerElement
  );
  customElements.define('ui-searchcontroller', HTMLUISearchControllerElement);
  customElements.define(
    'ui-searchdisplaycontroller',
    HTMLUISearchDisplayControllerElement
  );
  customElements.define(
    'ui-searchsuggestionitem',
    HTMLUISearchSuggestionItemElement
  );
  customElements.define('ui-searchtextfield', HTMLUISearchTextFieldElement);
  customElements.define('ui-searchtoken', HTMLUISearchTokenElement);
  customElements.define('ui-segmentedcontrol', HTMLUISegmentedControlElement);
  customElements.define(
    'ui-selectionfeedbackgenerator',
    HTMLUISelectionFeedbackGeneratorElement
  );
  customElements.define('ui-shape', HTMLUIShapeElement);
  customElements.define(
    'ui-shaperesolutioncontext',
    HTMLUIShapeResolutionContextElement
  );
  customElements.define(
    'ui-sheetpresentationcontroller',
    HTMLUISheetPresentationControllerElement
  );
  customElements.define(
    'ui-sheetpresentationcontrollerdetent',
    HTMLUISheetPresentationControllerDetentElement
  );
  customElements.define(
    'ui-simpletextprintformatter',
    HTMLUISimpleTextPrintFormatterElement
  );
  customElements.define('ui-slider', HTMLUISliderElement);
  customElements.define('ui-snapbehavior', HTMLUISnapBehaviorElement);
  customElements.define(
    'ui-splitviewcontroller',
    HTMLUISplitViewControllerElement
  );
  customElements.define(
    'ui-springloadedinteraction',
    HTMLUISpringLoadedInteractionElement
  );
  customElements.define(
    'ui-springtimingparameters',
    HTMLUISpringTimingParametersElement
  );
  customElements.define('ui-stackview', HTMLUIStackViewElement);
  customElements.define('ui-statusbarmanager', HTMLUIStatusBarManagerElement);
  customElements.define('ui-stepper', HTMLUIStepperElement);
  customElements.define('ui-storyboard', HTMLUIStoryboardElement);
  customElements.define(
    'ui-storyboardpopoversegue',
    HTMLUIStoryboardPopoverSegueElement
  );
  customElements.define('ui-storyboardsegue', HTMLUIStoryboardSegueElement);
  customElements.define(
    'ui-storyboardunwindseguesource',
    HTMLUIStoryboardUnwindSegueSourceElement
  );
  customElements.define(
    'ui-swipeactionsconfiguration',
    HTMLUISwipeActionsConfigurationElement
  );
  customElements.define(
    'ui-swipegesturerecognizer',
    HTMLUISwipeGestureRecognizerElement
  );
  customElements.define('ui-switch', HTMLUISwitchElement);
  customElements.define(
    'ui-symboleffectcompletioncontext',
    HTMLUISymbolEffectCompletionContextElement
  );
  customElements.define('ui-tabbar', HTMLUITabBarElement);
  customElements.define('ui-tabbarappearance', HTMLUITabBarAppearanceElement);
  customElements.define('ui-tabbarcontroller', HTMLUITabBarControllerElement);
  customElements.define('ui-tabbaritem', HTMLUITabBarItemElement);
  customElements.define(
    'ui-tabbaritemappearance',
    HTMLUITabBarItemAppearanceElement
  );
  customElements.define(
    'ui-tabbaritemstateappearance',
    HTMLUITabBarItemStateAppearanceElement
  );
  customElements.define('ui-tableview', HTMLUITableViewElement);
  customElements.define('ui-tableviewcell', HTMLUITableViewCellElement);
  customElements.define(
    'ui-tableviewcontroller',
    HTMLUITableViewControllerElement
  );
  customElements.define(
    'ui-tableviewdiffabledatasource',
    HTMLUITableViewDiffableDataSourceElement
  );
  customElements.define(
    'ui-tableviewdropplaceholder',
    HTMLUITableViewDropPlaceholderElement
  );
  customElements.define(
    'ui-tableviewdropproposal',
    HTMLUITableViewDropProposalElement
  );
  customElements.define(
    'ui-tableviewfocusupdatecontext',
    HTMLUITableViewFocusUpdateContextElement
  );
  customElements.define(
    'ui-tableviewheaderfooterview',
    HTMLUITableViewHeaderFooterViewElement
  );
  customElements.define(
    'ui-tableviewplaceholder',
    HTMLUITableViewPlaceholderElement
  );
  customElements.define(
    'ui-tableviewrowaction',
    HTMLUITableViewRowActionElement
  );
  customElements.define(
    'ui-tapgesturerecognizer',
    HTMLUITapGestureRecognizerElement
  );
  customElements.define(
    'ui-targeteddragpreview',
    HTMLUITargetedDragPreviewElement
  );
  customElements.define('ui-targetedpreview', HTMLUITargetedPreviewElement);
  customElements.define('ui-textchecker', HTMLUITextCheckerElement);
  customElements.define(
    'ui-textdragpreviewrenderer',
    HTMLUITextDragPreviewRendererElement
  );
  customElements.define('ui-textdropproposal', HTMLUITextDropProposalElement);
  customElements.define('ui-textfield', HTMLUITextFieldElement);
  customElements.define(
    'ui-textformattingcoordinator',
    HTMLUITextFormattingCoordinatorElement
  );
  customElements.define(
    'ui-textinputassistantitem',
    HTMLUITextInputAssistantItemElement
  );
  customElements.define('ui-textinputcontext', HTMLUITextInputContextElement);
  customElements.define('ui-textinputmode', HTMLUITextInputModeElement);
  customElements.define(
    'ui-textinputpasswordrules',
    HTMLUITextInputPasswordRulesElement
  );
  customElements.define(
    'ui-textinputstringtokenizer',
    HTMLUITextInputStringTokenizerElement
  );
  customElements.define('ui-textinteraction', HTMLUITextInteractionElement);
  customElements.define('ui-textitem', HTMLUITextItemElement);
  customElements.define(
    'ui-textitemmenuconfiguration',
    HTMLUITextItemMenuConfigurationElement
  );
  customElements.define(
    'ui-textitemmenupreview',
    HTMLUITextItemMenuPreviewElement
  );
  customElements.define('ui-textloupesession', HTMLUITextLoupeSessionElement);
  customElements.define('ui-textplaceholder', HTMLUITextPlaceholderElement);
  customElements.define('ui-textposition', HTMLUITextPositionElement);
  customElements.define('ui-textrange', HTMLUITextRangeElement);
  customElements.define(
    'ui-textsearchingfindsession',
    HTMLUITextSearchingFindSessionElement
  );
  customElements.define('ui-textsearchoptions', HTMLUITextSearchOptionsElement);
  customElements.define(
    'ui-textselectiondisplayinteraction',
    HTMLUITextSelectionDisplayInteractionElement
  );
  customElements.define('ui-textselectionrect', HTMLUITextSelectionRectElement);
  customElements.define('ui-textview', HTMLUITextViewElement);
  customElements.define('ui-toolbar', HTMLUIToolbarElement);
  customElements.define('ui-toolbarappearance', HTMLUIToolbarAppearanceElement);
  customElements.define(
    'ui-tooltipconfiguration',
    HTMLUIToolTipConfigurationElement
  );
  customElements.define(
    'ui-tooltipinteraction',
    HTMLUIToolTipInteractionElement
  );
  customElements.define('ui-touch', HTMLUITouchElement);
  customElements.define(
    'ui-trackinglayoutguide',
    HTMLUITrackingLayoutGuideElement
  );
  customElements.define(
    'ui-traitaccessibilitycontrast',
    HTMLUITraitAccessibilityContrastElement
  );
  customElements.define(
    'ui-traitactiveappearance',
    HTMLUITraitActiveAppearanceElement
  );
  customElements.define('ui-traitcollection', HTMLUITraitCollectionElement);
  customElements.define('ui-traitdisplaygamut', HTMLUITraitDisplayGamutElement);
  customElements.define('ui-traitdisplayscale', HTMLUITraitDisplayScaleElement);
  customElements.define(
    'ui-traitforcetouchcapability',
    HTMLUITraitForceTouchCapabilityElement
  );
  customElements.define(
    'ui-traithorizontalsizeclass',
    HTMLUITraitHorizontalSizeClassElement
  );
  customElements.define(
    'ui-traitimagedynamicrange',
    HTMLUITraitImageDynamicRangeElement
  );
  customElements.define(
    'ui-traitlayoutdirection',
    HTMLUITraitLayoutDirectionElement
  );
  customElements.define(
    'ui-traitlegibilityweight',
    HTMLUITraitLegibilityWeightElement
  );
  customElements.define(
    'ui-traitpreferredcontentsizecategory',
    HTMLUITraitPreferredContentSizeCategoryElement
  );
  customElements.define(
    'ui-traitscenecapturestate',
    HTMLUITraitSceneCaptureStateElement
  );
  customElements.define(
    'ui-traittoolbaritempresentationsize',
    HTMLUITraitToolbarItemPresentationSizeElement
  );
  customElements.define(
    'ui-traittypesettinglanguage',
    HTMLUITraitTypesettingLanguageElement
  );
  customElements.define(
    'ui-traituserinterfaceidiom',
    HTMLUITraitUserInterfaceIdiomElement
  );
  customElements.define(
    'ui-traituserinterfacelevel',
    HTMLUITraitUserInterfaceLevelElement
  );
  customElements.define(
    'ui-traituserinterfacestyle',
    HTMLUITraitUserInterfaceStyleElement
  );
  customElements.define(
    'ui-traitverticalsizeclass',
    HTMLUITraitVerticalSizeClassElement
  );
  customElements.define(
    'ui-usernotificationaction',
    HTMLUIUserNotificationActionElement
  );
  customElements.define(
    'ui-usernotificationcategory',
    HTMLUIUserNotificationCategoryElement
  );
  customElements.define(
    'ui-usernotificationsettings',
    HTMLUIUserNotificationSettingsElement
  );
  customElements.define('ui-vibrancyeffect', HTMLUIVibrancyEffectElement);
  customElements.define(
    'ui-videoeditorcontroller',
    HTMLUIVideoEditorControllerElement
  );
  customElements.define('ui-view', HTMLUIViewElement);
  customElements.define(
    'ui-viewconfigurationstate',
    HTMLUIViewConfigurationStateElement
  );
  customElements.define('ui-viewcontroller', HTMLUIViewControllerElement);
  customElements.define(
    'ui-viewprintformatter',
    HTMLUIViewPrintFormatterElement
  );
  customElements.define(
    'ui-viewpropertyanimator',
    HTMLUIViewPropertyAnimatorElement
  );
  customElements.define('ui-visualeffect', HTMLUIVisualEffectElement);
  customElements.define('ui-visualeffectview', HTMLUIVisualEffectViewElement);
  customElements.define('ui-webview', HTMLUIWebViewElement);
  customElements.define('ui-window', HTMLUIWindowElement);
  customElements.define('ui-windowscene', HTMLUIWindowSceneElement);
  customElements.define(
    'ui-windowsceneactivationaction',
    HTMLUIWindowSceneActivationActionElement
  );
  customElements.define(
    'ui-windowsceneactivationconfiguration',
    HTMLUIWindowSceneActivationConfigurationElement
  );
  customElements.define(
    'ui-windowsceneactivationinteraction',
    HTMLUIWindowSceneActivationInteractionElement
  );
  customElements.define(
    'ui-windowsceneactivationrequestoptions',
    HTMLUIWindowSceneActivationRequestOptionsElement
  );
  customElements.define(
    'ui-windowscenedestructionrequestoptions',
    HTMLUIWindowSceneDestructionRequestOptionsElement
  );
  customElements.define(
    'ui-windowscenedraginteraction',
    HTMLUIWindowSceneDragInteractionElement
  );
  customElements.define(
    'ui-windowscenegeometry',
    HTMLUIWindowSceneGeometryElement
  );
  customElements.define(
    'ui-windowscenegeometrypreferences',
    HTMLUIWindowSceneGeometryPreferencesElement
  );
  customElements.define(
    'ui-windowscenegeometrypreferencesios',
    HTMLUIWindowSceneGeometryPreferencesIOSElement
  );
  customElements.define(
    'ui-windowscenegeometrypreferencesmac',
    HTMLUIWindowSceneGeometryPreferencesMacElement
  );
  customElements.define(
    'ui-windowsceneplacement',
    HTMLUIWindowScenePlacementElement
  );
  customElements.define(
    'ui-windowsceneprominentplacement',
    HTMLUIWindowSceneProminentPlacementElement
  );
  customElements.define(
    'ui-windowscenestandardplacement',
    HTMLUIWindowSceneStandardPlacementElement
  );
}
