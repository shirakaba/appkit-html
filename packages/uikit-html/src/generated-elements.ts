/// <reference path="./globals.types.ts" />
/// <reference types="objc/lib/types.d.ts" />
/// <reference types="objc/types/ios/Runtime.d.ts" />
/// <reference types="objc/types/ios/Foundation.d.ts" />

// Call e.g. HTMLNSAlertElement.defineCustomElement(); to register each Custom
// Element.
declare global {
  interface UIKitCustomElementTagNameMap {
    "ns-collectionlayoutanchor": HTMLNSCollectionLayoutAnchorElement;
    "ns-collectionlayoutboundarysupplementaryitem": HTMLNSCollectionLayoutBoundarySupplementaryItemElement;
    "ns-collectionlayoutdecorationitem": HTMLNSCollectionLayoutDecorationItemElement;
    "ns-collectionlayoutdimension": HTMLNSCollectionLayoutDimensionElement;
    "ns-collectionlayoutedgespacing": HTMLNSCollectionLayoutEdgeSpacingElement;
    "ns-collectionlayoutgroup": HTMLNSCollectionLayoutGroupElement;
    "ns-collectionlayoutgroupcustomitem": HTMLNSCollectionLayoutGroupCustomItemElement;
    "ns-collectionlayoutitem": HTMLNSCollectionLayoutItemElement;
    "ns-collectionlayoutsection": HTMLNSCollectionLayoutSectionElement;
    "ns-collectionlayoutsize": HTMLNSCollectionLayoutSizeElement;
    "ns-collectionlayoutspacing": HTMLNSCollectionLayoutSpacingElement;
    "ns-collectionlayoutsupplementaryitem": HTMLNSCollectionLayoutSupplementaryItemElement;
    "ns-dataasset": HTMLNSDataAssetElement;
    "ns-diffabledatasourcesectionsnapshot": HTMLNSDiffableDataSourceSectionSnapshotElement;
    "ns-diffabledatasourcesectiontransaction": HTMLNSDiffableDataSourceSectionTransactionElement;
    "ns-diffabledatasourcesnapshot": HTMLNSDiffableDataSourceSnapshotElement;
    "ns-diffabledatasourcetransaction": HTMLNSDiffableDataSourceTransactionElement;
    "ns-layoutanchor": HTMLNSLayoutAnchorElement;
    "ns-layoutconstraint": HTMLNSLayoutConstraintElement;
    "ns-layoutdimension": HTMLNSLayoutDimensionElement;
    "ns-layoutmanager": HTMLNSLayoutManagerElement;
    "ns-layoutxaxisanchor": HTMLNSLayoutXAxisAnchorElement;
    "ns-layoutyaxisanchor": HTMLNSLayoutYAxisAnchorElement;
    "ns-mutableparagraphstyle": HTMLNSMutableParagraphStyleElement;
    "ns-object": HTMLNSObjectElement;
    "ns-paragraphstyle": HTMLNSParagraphStyleElement;
    "ns-shadow": HTMLNSShadowElement;
    "ns-stringdrawingcontext": HTMLNSStringDrawingContextElement;
    "ns-textattachment": HTMLNSTextAttachmentElement;
    "ns-textattachmentviewprovider": HTMLNSTextAttachmentViewProviderElement;
    "ns-textcontainer": HTMLNSTextContainerElement;
    "ns-textcontentmanager": HTMLNSTextContentManagerElement;
    "ns-textcontentstorage": HTMLNSTextContentStorageElement;
    "ns-textelement": HTMLNSTextElementElement;
    "ns-textlayoutfragment": HTMLNSTextLayoutFragmentElement;
    "ns-textlayoutmanager": HTMLNSTextLayoutManagerElement;
    "ns-textlinefragment": HTMLNSTextLineFragmentElement;
    "ns-textlist": HTMLNSTextListElement;
    "ns-textlistelement": HTMLNSTextListElementElement;
    "ns-textparagraph": HTMLNSTextParagraphElement;
    "ns-textrange": HTMLNSTextRangeElement;
    "ns-textselection": HTMLNSTextSelectionElement;
    "ns-textselectionnavigation": HTMLNSTextSelectionNavigationElement;
    "ns-texttab": HTMLNSTextTabElement;
    "ns-textviewportlayoutcontroller": HTMLNSTextViewportLayoutControllerElement;
    "ui-acceleration": HTMLUIAccelerationElement;
    "ui-accelerometer": HTMLUIAccelerometerElement;
    "ui-accessibilitycustomaction": HTMLUIAccessibilityCustomActionElement;
    "ui-accessibilitycustomrotor": HTMLUIAccessibilityCustomRotorElement;
    "ui-accessibilitycustomrotoritemresult": HTMLUIAccessibilityCustomRotorItemResultElement;
    "ui-accessibilitycustomrotorsearchpredicate": HTMLUIAccessibilityCustomRotorSearchPredicateElement;
    "ui-accessibilityelement": HTMLUIAccessibilityElementElement;
    "ui-accessibilitylocationdescriptor": HTMLUIAccessibilityLocationDescriptorElement;
    "ui-action": HTMLUIActionElement;
    "ui-actionsheet": HTMLUIActionSheetElement;
    "ui-activity": HTMLUIActivityElement;
    "ui-activityindicatorview": HTMLUIActivityIndicatorViewElement;
    "ui-activityitemsconfiguration": HTMLUIActivityItemsConfigurationElement;
    "ui-activityviewcontroller": HTMLUIActivityViewControllerElement;
    "ui-alertaction": HTMLUIAlertActionElement;
    "ui-alertcontroller": HTMLUIAlertControllerElement;
    "ui-alertview": HTMLUIAlertViewElement;
    "ui-application": HTMLUIApplicationElement;
    "ui-applicationshortcuticon": HTMLUIApplicationShortcutIconElement;
    "ui-applicationshortcutitem": HTMLUIApplicationShortcutItemElement;
    "ui-attachmentbehavior": HTMLUIAttachmentBehaviorElement;
    "ui-backgroundconfiguration": HTMLUIBackgroundConfigurationElement;
    "ui-bandselectioninteraction": HTMLUIBandSelectionInteractionElement;
    "ui-barappearance": HTMLUIBarAppearanceElement;
    "ui-barbuttonitem": HTMLUIBarButtonItemElement;
    "ui-barbuttonitemappearance": HTMLUIBarButtonItemAppearanceElement;
    "ui-barbuttonitemgroup": HTMLUIBarButtonItemGroupElement;
    "ui-barbuttonitemstateappearance": HTMLUIBarButtonItemStateAppearanceElement;
    "ui-baritem": HTMLUIBarItemElement;
    "ui-bezierpath": HTMLUIBezierPathElement;
    "ui-blureffect": HTMLUIBlurEffectElement;
    "ui-button": HTMLUIButtonElement;
    "ui-buttonconfiguration": HTMLUIButtonConfigurationElement;
    "ui-calendarselection": HTMLUICalendarSelectionElement;
    "ui-calendarselectionmultidate": HTMLUICalendarSelectionMultiDateElement;
    "ui-calendarselectionsingledate": HTMLUICalendarSelectionSingleDateElement;
    "ui-calendarview": HTMLUICalendarViewElement;
    "ui-calendarviewdecoration": HTMLUICalendarViewDecorationElement;
    "ui-cellaccessory": HTMLUICellAccessoryElement;
    "ui-cellaccessorycheckmark": HTMLUICellAccessoryCheckmarkElement;
    "ui-cellaccessorycustomview": HTMLUICellAccessoryCustomViewElement;
    "ui-cellaccessorydelete": HTMLUICellAccessoryDeleteElement;
    "ui-cellaccessorydetail": HTMLUICellAccessoryDetailElement;
    "ui-cellaccessorydisclosureindicator": HTMLUICellAccessoryDisclosureIndicatorElement;
    "ui-cellaccessoryinsert": HTMLUICellAccessoryInsertElement;
    "ui-cellaccessorylabel": HTMLUICellAccessoryLabelElement;
    "ui-cellaccessorymultiselect": HTMLUICellAccessoryMultiselectElement;
    "ui-cellaccessoryoutlinedisclosure": HTMLUICellAccessoryOutlineDisclosureElement;
    "ui-cellaccessorypopupmenu": HTMLUICellAccessoryPopUpMenuElement;
    "ui-cellaccessoryreorder": HTMLUICellAccessoryReorderElement;
    "ui-cellconfigurationstate": HTMLUICellConfigurationStateElement;
    "ui-cloudsharingcontroller": HTMLUICloudSharingControllerElement;
    "ui-collectionlayoutlistconfiguration": HTMLUICollectionLayoutListConfigurationElement;
    "ui-collectionlayoutsectionorthogonalscrollingproperties": HTMLUICollectionLayoutSectionOrthogonalScrollingPropertiesElement;
    "ui-collectionreusableview": HTMLUICollectionReusableViewElement;
    "ui-collectionview": HTMLUICollectionViewElement;
    "ui-collectionviewcell": HTMLUICollectionViewCellElement;
    "ui-collectionviewcellregistration": HTMLUICollectionViewCellRegistrationElement;
    "ui-collectionviewcompositionallayout": HTMLUICollectionViewCompositionalLayoutElement;
    "ui-collectionviewcompositionallayoutconfiguration": HTMLUICollectionViewCompositionalLayoutConfigurationElement;
    "ui-collectionviewcontroller": HTMLUICollectionViewControllerElement;
    "ui-collectionviewdiffabledatasource": HTMLUICollectionViewDiffableDataSourceElement;
    "ui-collectionviewdiffabledatasourcereorderinghandlers": HTMLUICollectionViewDiffableDataSourceReorderingHandlersElement;
    "ui-collectionviewdiffabledatasourcesectionsnapshothandlers": HTMLUICollectionViewDiffableDataSourceSectionSnapshotHandlersElement;
    "ui-collectionviewdropplaceholder": HTMLUICollectionViewDropPlaceholderElement;
    "ui-collectionviewdropproposal": HTMLUICollectionViewDropProposalElement;
    "ui-collectionviewflowlayout": HTMLUICollectionViewFlowLayoutElement;
    "ui-collectionviewflowlayoutinvalidationcontext": HTMLUICollectionViewFlowLayoutInvalidationContextElement;
    "ui-collectionviewfocusupdatecontext": HTMLUICollectionViewFocusUpdateContextElement;
    "ui-collectionviewlayout": HTMLUICollectionViewLayoutElement;
    "ui-collectionviewlayoutattributes": HTMLUICollectionViewLayoutAttributesElement;
    "ui-collectionviewlayoutinvalidationcontext": HTMLUICollectionViewLayoutInvalidationContextElement;
    "ui-collectionviewlistcell": HTMLUICollectionViewListCellElement;
    "ui-collectionviewplaceholder": HTMLUICollectionViewPlaceholderElement;
    "ui-collectionviewsupplementaryregistration": HTMLUICollectionViewSupplementaryRegistrationElement;
    "ui-collectionviewtransitionlayout": HTMLUICollectionViewTransitionLayoutElement;
    "ui-collectionviewupdateitem": HTMLUICollectionViewUpdateItemElement;
    "ui-collisionbehavior": HTMLUICollisionBehaviorElement;
    "ui-color": HTMLUIColorElement;
    "ui-colorpickerviewcontroller": HTMLUIColorPickerViewControllerElement;
    "ui-colorwell": HTMLUIColorWellElement;
    "ui-command": HTMLUICommandElement;
    "ui-commandalternate": HTMLUICommandAlternateElement;
    "ui-contentunavailablebuttonproperties": HTMLUIContentUnavailableButtonPropertiesElement;
    "ui-contentunavailableconfiguration": HTMLUIContentUnavailableConfigurationElement;
    "ui-contentunavailableconfigurationstate": HTMLUIContentUnavailableConfigurationStateElement;
    "ui-contentunavailableimageproperties": HTMLUIContentUnavailableImagePropertiesElement;
    "ui-contentunavailabletextproperties": HTMLUIContentUnavailableTextPropertiesElement;
    "ui-contentunavailableview": HTMLUIContentUnavailableViewElement;
    "ui-contextmenuconfiguration": HTMLUIContextMenuConfigurationElement;
    "ui-contextmenuinteraction": HTMLUIContextMenuInteractionElement;
    "ui-contextualaction": HTMLUIContextualActionElement;
    "ui-control": HTMLUIControlElement;
    "ui-cubictimingparameters": HTMLUICubicTimingParametersElement;
    "ui-datepicker": HTMLUIDatePickerElement;
    "ui-deferredmenuelement": HTMLUIDeferredMenuElementElement;
    "ui-device": HTMLUIDeviceElement;
    "ui-dictationphrase": HTMLUIDictationPhraseElement;
    "ui-document": HTMLUIDocumentElement;
    "ui-documentbrowseraction": HTMLUIDocumentBrowserActionElement;
    "ui-documentbrowsertransitioncontroller": HTMLUIDocumentBrowserTransitionControllerElement;
    "ui-documentbrowserviewcontroller": HTMLUIDocumentBrowserViewControllerElement;
    "ui-documentinteractioncontroller": HTMLUIDocumentInteractionControllerElement;
    "ui-documentmenuviewcontroller": HTMLUIDocumentMenuViewControllerElement;
    "ui-documentpickerextensionviewcontroller": HTMLUIDocumentPickerExtensionViewControllerElement;
    "ui-documentpickerviewcontroller": HTMLUIDocumentPickerViewControllerElement;
    "ui-documentproperties": HTMLUIDocumentPropertiesElement;
    "ui-documentviewcontroller": HTMLUIDocumentViewControllerElement;
    "ui-draginteraction": HTMLUIDragInteractionElement;
    "ui-dragitem": HTMLUIDragItemElement;
    "ui-dragpreview": HTMLUIDragPreviewElement;
    "ui-dragpreviewparameters": HTMLUIDragPreviewParametersElement;
    "ui-dragpreviewtarget": HTMLUIDragPreviewTargetElement;
    "ui-dropinteraction": HTMLUIDropInteractionElement;
    "ui-dropproposal": HTMLUIDropProposalElement;
    "ui-dynamicanimator": HTMLUIDynamicAnimatorElement;
    "ui-dynamicbehavior": HTMLUIDynamicBehaviorElement;
    "ui-dynamicitembehavior": HTMLUIDynamicItemBehaviorElement;
    "ui-dynamicitemgroup": HTMLUIDynamicItemGroupElement;
    "ui-editmenuconfiguration": HTMLUIEditMenuConfigurationElement;
    "ui-editmenuinteraction": HTMLUIEditMenuInteractionElement;
    "ui-event": HTMLUIEventElement;
    "ui-eventattribution": HTMLUIEventAttributionElement;
    "ui-eventattributionview": HTMLUIEventAttributionViewElement;
    "ui-feedbackgenerator": HTMLUIFeedbackGeneratorElement;
    "ui-fieldbehavior": HTMLUIFieldBehaviorElement;
    "ui-findinteraction": HTMLUIFindInteractionElement;
    "ui-findsession": HTMLUIFindSessionElement;
    "ui-focusanimationcoordinator": HTMLUIFocusAnimationCoordinatorElement;
    "ui-focusdebugger": HTMLUIFocusDebuggerElement;
    "ui-focuseffect": HTMLUIFocusEffectElement;
    "ui-focusguide": HTMLUIFocusGuideElement;
    "ui-focushaloeffect": HTMLUIFocusHaloEffectElement;
    "ui-focusmovementhint": HTMLUIFocusMovementHintElement;
    "ui-focussystem": HTMLUIFocusSystemElement;
    "ui-focusupdatecontext": HTMLUIFocusUpdateContextElement;
    "ui-font": HTMLUIFontElement;
    "ui-fontdescriptor": HTMLUIFontDescriptorElement;
    "ui-fontmetrics": HTMLUIFontMetricsElement;
    "ui-fontpickerviewcontroller": HTMLUIFontPickerViewControllerElement;
    "ui-fontpickerviewcontrollerconfiguration": HTMLUIFontPickerViewControllerConfigurationElement;
    "ui-gesturerecognizer": HTMLUIGestureRecognizerElement;
    "ui-graphicsimagerenderer": HTMLUIGraphicsImageRendererElement;
    "ui-graphicsimagerenderercontext": HTMLUIGraphicsImageRendererContextElement;
    "ui-graphicsimagerendererformat": HTMLUIGraphicsImageRendererFormatElement;
    "ui-graphicspdfrenderer": HTMLUIGraphicsPDFRendererElement;
    "ui-graphicspdfrenderercontext": HTMLUIGraphicsPDFRendererContextElement;
    "ui-graphicspdfrendererformat": HTMLUIGraphicsPDFRendererFormatElement;
    "ui-graphicsrenderer": HTMLUIGraphicsRendererElement;
    "ui-graphicsrenderercontext": HTMLUIGraphicsRendererContextElement;
    "ui-graphicsrendererformat": HTMLUIGraphicsRendererFormatElement;
    "ui-gravitybehavior": HTMLUIGravityBehaviorElement;
    "ui-hoverautomaticeffect": HTMLUIHoverAutomaticEffectElement;
    "ui-hovergesturerecognizer": HTMLUIHoverGestureRecognizerElement;
    "ui-hoverhighlighteffect": HTMLUIHoverHighlightEffectElement;
    "ui-hoverlifteffect": HTMLUIHoverLiftEffectElement;
    "ui-hoverstyle": HTMLUIHoverStyleElement;
    "ui-image": HTMLUIImageElement;
    "ui-imageasset": HTMLUIImageAssetElement;
    "ui-imageconfiguration": HTMLUIImageConfigurationElement;
    "ui-imagepickercontroller": HTMLUIImagePickerControllerElement;
    "ui-imagereader": HTMLUIImageReaderElement;
    "ui-imagereaderconfiguration": HTMLUIImageReaderConfigurationElement;
    "ui-imagesymbolconfiguration": HTMLUIImageSymbolConfigurationElement;
    "ui-imageview": HTMLUIImageViewElement;
    "ui-impactfeedbackgenerator": HTMLUIImpactFeedbackGeneratorElement;
    "ui-indirectscribbleinteraction": HTMLUIIndirectScribbleInteractionElement;
    "ui-inputview": HTMLUIInputViewElement;
    "ui-inputviewcontroller": HTMLUIInputViewControllerElement;
    "ui-interpolatingmotioneffect": HTMLUIInterpolatingMotionEffectElement;
    "ui-key": HTMLUIKeyElement;
    "ui-keyboardlayoutguide": HTMLUIKeyboardLayoutGuideElement;
    "ui-keycommand": HTMLUIKeyCommandElement;
    "ui-label": HTMLUILabelElement;
    "ui-largecontentviewerinteraction": HTMLUILargeContentViewerInteractionElement;
    "ui-layoutguide": HTMLUILayoutGuideElement;
    "ui-lexicon": HTMLUILexiconElement;
    "ui-lexiconentry": HTMLUILexiconEntryElement;
    "ui-listcontentconfiguration": HTMLUIListContentConfigurationElement;
    "ui-listcontentimageproperties": HTMLUIListContentImagePropertiesElement;
    "ui-listcontenttextproperties": HTMLUIListContentTextPropertiesElement;
    "ui-listcontentview": HTMLUIListContentViewElement;
    "ui-listseparatorconfiguration": HTMLUIListSeparatorConfigurationElement;
    "ui-localizedindexedcollation": HTMLUILocalizedIndexedCollationElement;
    "ui-localnotification": HTMLUILocalNotificationElement;
    "ui-longpressgesturerecognizer": HTMLUILongPressGestureRecognizerElement;
    "ui-manageddocument": HTMLUIManagedDocumentElement;
    "ui-markuptextprintformatter": HTMLUIMarkupTextPrintFormatterElement;
    "ui-menu": HTMLUIMenuElement;
    "ui-menucontroller": HTMLUIMenuControllerElement;
    "ui-menuelement": HTMLUIMenuElementElement;
    "ui-menuitem": HTMLUIMenuItemElement;
    "ui-menusystem": HTMLUIMenuSystemElement;
    "ui-motioneffect": HTMLUIMotionEffectElement;
    "ui-motioneffectgroup": HTMLUIMotionEffectGroupElement;
    "ui-mutableapplicationshortcutitem": HTMLUIMutableApplicationShortcutItemElement;
    "ui-mutableusernotificationaction": HTMLUIMutableUserNotificationActionElement;
    "ui-mutableusernotificationcategory": HTMLUIMutableUserNotificationCategoryElement;
    "ui-navigationbar": HTMLUINavigationBarElement;
    "ui-navigationbarappearance": HTMLUINavigationBarAppearanceElement;
    "ui-navigationcontroller": HTMLUINavigationControllerElement;
    "ui-navigationitem": HTMLUINavigationItemElement;
    "ui-nib": HTMLUINibElement;
    "ui-notificationfeedbackgenerator": HTMLUINotificationFeedbackGeneratorElement;
    "ui-openurlcontext": HTMLUIOpenURLContextElement;
    "ui-pagecontrol": HTMLUIPageControlElement;
    "ui-pagecontrolprogress": HTMLUIPageControlProgressElement;
    "ui-pagecontroltimerprogress": HTMLUIPageControlTimerProgressElement;
    "ui-pageviewcontroller": HTMLUIPageViewControllerElement;
    "ui-pangesturerecognizer": HTMLUIPanGestureRecognizerElement;
    "ui-pasteboard": HTMLUIPasteboardElement;
    "ui-pasteconfiguration": HTMLUIPasteConfigurationElement;
    "ui-pastecontrol": HTMLUIPasteControlElement;
    "ui-pastecontrolconfiguration": HTMLUIPasteControlConfigurationElement;
    "ui-pencilinteraction": HTMLUIPencilInteractionElement;
    "ui-percentdriveninteractivetransition": HTMLUIPercentDrivenInteractiveTransitionElement;
    "ui-pickerview": HTMLUIPickerViewElement;
    "ui-pinchgesturerecognizer": HTMLUIPinchGestureRecognizerElement;
    "ui-pointeraccessory": HTMLUIPointerAccessoryElement;
    "ui-pointereffect": HTMLUIPointerEffectElement;
    "ui-pointerhighlighteffect": HTMLUIPointerHighlightEffectElement;
    "ui-pointerhovereffect": HTMLUIPointerHoverEffectElement;
    "ui-pointerinteraction": HTMLUIPointerInteractionElement;
    "ui-pointerlifteffect": HTMLUIPointerLiftEffectElement;
    "ui-pointerlockstate": HTMLUIPointerLockStateElement;
    "ui-pointerregion": HTMLUIPointerRegionElement;
    "ui-pointerregionrequest": HTMLUIPointerRegionRequestElement;
    "ui-pointershape": HTMLUIPointerShapeElement;
    "ui-pointerstyle": HTMLUIPointerStyleElement;
    "ui-popoverbackgroundview": HTMLUIPopoverBackgroundViewElement;
    "ui-popovercontroller": HTMLUIPopoverControllerElement;
    "ui-popoverpresentationcontroller": HTMLUIPopoverPresentationControllerElement;
    "ui-presentationcontroller": HTMLUIPresentationControllerElement;
    "ui-press": HTMLUIPressElement;
    "ui-pressesevent": HTMLUIPressesEventElement;
    "ui-previewaction": HTMLUIPreviewActionElement;
    "ui-previewactiongroup": HTMLUIPreviewActionGroupElement;
    "ui-previewinteraction": HTMLUIPreviewInteractionElement;
    "ui-previewparameters": HTMLUIPreviewParametersElement;
    "ui-previewtarget": HTMLUIPreviewTargetElement;
    "ui-printer": HTMLUIPrinterElement;
    "ui-printerdestination": HTMLUIPrinterDestinationElement;
    "ui-printerpickercontroller": HTMLUIPrinterPickerControllerElement;
    "ui-printformatter": HTMLUIPrintFormatterElement;
    "ui-printinfo": HTMLUIPrintInfoElement;
    "ui-printinteractioncontroller": HTMLUIPrintInteractionControllerElement;
    "ui-printpagerenderer": HTMLUIPrintPageRendererElement;
    "ui-printpaper": HTMLUIPrintPaperElement;
    "ui-printserviceextension": HTMLUIPrintServiceExtensionElement;
    "ui-progressview": HTMLUIProgressViewElement;
    "ui-pushbehavior": HTMLUIPushBehaviorElement;
    "ui-referencelibraryviewcontroller": HTMLUIReferenceLibraryViewControllerElement;
    "ui-refreshcontrol": HTMLUIRefreshControlElement;
    "ui-region": HTMLUIRegionElement;
    "ui-resolvedshape": HTMLUIResolvedShapeElement;
    "ui-responder": HTMLUIResponderElement;
    "ui-rotationgesturerecognizer": HTMLUIRotationGestureRecognizerElement;
    "ui-scene": HTMLUISceneElement;
    "ui-sceneactivationconditions": HTMLUISceneActivationConditionsElement;
    "ui-sceneactivationrequestoptions": HTMLUISceneActivationRequestOptionsElement;
    "ui-sceneconfiguration": HTMLUISceneConfigurationElement;
    "ui-sceneconnectionoptions": HTMLUISceneConnectionOptionsElement;
    "ui-scenedestructionrequestoptions": HTMLUISceneDestructionRequestOptionsElement;
    "ui-sceneopenexternalurloptions": HTMLUISceneOpenExternalURLOptionsElement;
    "ui-sceneopenurloptions": HTMLUISceneOpenURLOptionsElement;
    "ui-scenesession": HTMLUISceneSessionElement;
    "ui-scenesessionactivationrequest": HTMLUISceneSessionActivationRequestElement;
    "ui-scenesizerestrictions": HTMLUISceneSizeRestrictionsElement;
    "ui-scenewindowingbehaviors": HTMLUISceneWindowingBehaviorsElement;
    "ui-screen": HTMLUIScreenElement;
    "ui-screenedgepangesturerecognizer": HTMLUIScreenEdgePanGestureRecognizerElement;
    "ui-screenmode": HTMLUIScreenModeElement;
    "ui-screenshotservice": HTMLUIScreenshotServiceElement;
    "ui-scribbleinteraction": HTMLUIScribbleInteractionElement;
    "ui-scrollview": HTMLUIScrollViewElement;
    "ui-searchbar": HTMLUISearchBarElement;
    "ui-searchcontainerviewcontroller": HTMLUISearchContainerViewControllerElement;
    "ui-searchcontroller": HTMLUISearchControllerElement;
    "ui-searchdisplaycontroller": HTMLUISearchDisplayControllerElement;
    "ui-searchsuggestionitem": HTMLUISearchSuggestionItemElement;
    "ui-searchtextfield": HTMLUISearchTextFieldElement;
    "ui-searchtoken": HTMLUISearchTokenElement;
    "ui-segmentedcontrol": HTMLUISegmentedControlElement;
    "ui-selectionfeedbackgenerator": HTMLUISelectionFeedbackGeneratorElement;
    "ui-shape": HTMLUIShapeElement;
    "ui-shaperesolutioncontext": HTMLUIShapeResolutionContextElement;
    "ui-sheetpresentationcontroller": HTMLUISheetPresentationControllerElement;
    "ui-sheetpresentationcontrollerdetent": HTMLUISheetPresentationControllerDetentElement;
    "ui-simpletextprintformatter": HTMLUISimpleTextPrintFormatterElement;
    "ui-slider": HTMLUISliderElement;
    "ui-snapbehavior": HTMLUISnapBehaviorElement;
    "ui-splitviewcontroller": HTMLUISplitViewControllerElement;
    "ui-springloadedinteraction": HTMLUISpringLoadedInteractionElement;
    "ui-springtimingparameters": HTMLUISpringTimingParametersElement;
    "ui-stackview": HTMLUIStackViewElement;
    "ui-statusbarmanager": HTMLUIStatusBarManagerElement;
    "ui-stepper": HTMLUIStepperElement;
    "ui-storyboard": HTMLUIStoryboardElement;
    "ui-storyboardpopoversegue": HTMLUIStoryboardPopoverSegueElement;
    "ui-storyboardsegue": HTMLUIStoryboardSegueElement;
    "ui-storyboardunwindseguesource": HTMLUIStoryboardUnwindSegueSourceElement;
    "ui-swipeactionsconfiguration": HTMLUISwipeActionsConfigurationElement;
    "ui-swipegesturerecognizer": HTMLUISwipeGestureRecognizerElement;
    "ui-switch": HTMLUISwitchElement;
    "ui-symboleffectcompletioncontext": HTMLUISymbolEffectCompletionContextElement;
    "ui-tabbar": HTMLUITabBarElement;
    "ui-tabbarappearance": HTMLUITabBarAppearanceElement;
    "ui-tabbarcontroller": HTMLUITabBarControllerElement;
    "ui-tabbaritem": HTMLUITabBarItemElement;
    "ui-tabbaritemappearance": HTMLUITabBarItemAppearanceElement;
    "ui-tabbaritemstateappearance": HTMLUITabBarItemStateAppearanceElement;
    "ui-tableview": HTMLUITableViewElement;
    "ui-tableviewcell": HTMLUITableViewCellElement;
    "ui-tableviewcontroller": HTMLUITableViewControllerElement;
    "ui-tableviewdiffabledatasource": HTMLUITableViewDiffableDataSourceElement;
    "ui-tableviewdropplaceholder": HTMLUITableViewDropPlaceholderElement;
    "ui-tableviewdropproposal": HTMLUITableViewDropProposalElement;
    "ui-tableviewfocusupdatecontext": HTMLUITableViewFocusUpdateContextElement;
    "ui-tableviewheaderfooterview": HTMLUITableViewHeaderFooterViewElement;
    "ui-tableviewplaceholder": HTMLUITableViewPlaceholderElement;
    "ui-tableviewrowaction": HTMLUITableViewRowActionElement;
    "ui-tapgesturerecognizer": HTMLUITapGestureRecognizerElement;
    "ui-targeteddragpreview": HTMLUITargetedDragPreviewElement;
    "ui-targetedpreview": HTMLUITargetedPreviewElement;
    "ui-textchecker": HTMLUITextCheckerElement;
    "ui-textdragpreviewrenderer": HTMLUITextDragPreviewRendererElement;
    "ui-textdropproposal": HTMLUITextDropProposalElement;
    "ui-textfield": HTMLUITextFieldElement;
    "ui-textformattingcoordinator": HTMLUITextFormattingCoordinatorElement;
    "ui-textinputassistantitem": HTMLUITextInputAssistantItemElement;
    "ui-textinputcontext": HTMLUITextInputContextElement;
    "ui-textinputmode": HTMLUITextInputModeElement;
    "ui-textinputpasswordrules": HTMLUITextInputPasswordRulesElement;
    "ui-textinputstringtokenizer": HTMLUITextInputStringTokenizerElement;
    "ui-textinteraction": HTMLUITextInteractionElement;
    "ui-textitem": HTMLUITextItemElement;
    "ui-textitemmenuconfiguration": HTMLUITextItemMenuConfigurationElement;
    "ui-textitemmenupreview": HTMLUITextItemMenuPreviewElement;
    "ui-textloupesession": HTMLUITextLoupeSessionElement;
    "ui-textplaceholder": HTMLUITextPlaceholderElement;
    "ui-textposition": HTMLUITextPositionElement;
    "ui-textrange": HTMLUITextRangeElement;
    "ui-textsearchingfindsession": HTMLUITextSearchingFindSessionElement;
    "ui-textsearchoptions": HTMLUITextSearchOptionsElement;
    "ui-textselectiondisplayinteraction": HTMLUITextSelectionDisplayInteractionElement;
    "ui-textselectionrect": HTMLUITextSelectionRectElement;
    "ui-textview": HTMLUITextViewElement;
    "ui-toolbar": HTMLUIToolbarElement;
    "ui-toolbarappearance": HTMLUIToolbarAppearanceElement;
    "ui-tooltipconfiguration": HTMLUIToolTipConfigurationElement;
    "ui-tooltipinteraction": HTMLUIToolTipInteractionElement;
    "ui-touch": HTMLUITouchElement;
    "ui-trackinglayoutguide": HTMLUITrackingLayoutGuideElement;
    "ui-traitaccessibilitycontrast": HTMLUITraitAccessibilityContrastElement;
    "ui-traitactiveappearance": HTMLUITraitActiveAppearanceElement;
    "ui-traitcollection": HTMLUITraitCollectionElement;
    "ui-traitdisplaygamut": HTMLUITraitDisplayGamutElement;
    "ui-traitdisplayscale": HTMLUITraitDisplayScaleElement;
    "ui-traitforcetouchcapability": HTMLUITraitForceTouchCapabilityElement;
    "ui-traithorizontalsizeclass": HTMLUITraitHorizontalSizeClassElement;
    "ui-traitimagedynamicrange": HTMLUITraitImageDynamicRangeElement;
    "ui-traitlayoutdirection": HTMLUITraitLayoutDirectionElement;
    "ui-traitlegibilityweight": HTMLUITraitLegibilityWeightElement;
    "ui-traitpreferredcontentsizecategory": HTMLUITraitPreferredContentSizeCategoryElement;
    "ui-traitscenecapturestate": HTMLUITraitSceneCaptureStateElement;
    "ui-traittoolbaritempresentationsize": HTMLUITraitToolbarItemPresentationSizeElement;
    "ui-traittypesettinglanguage": HTMLUITraitTypesettingLanguageElement;
    "ui-traituserinterfaceidiom": HTMLUITraitUserInterfaceIdiomElement;
    "ui-traituserinterfacelevel": HTMLUITraitUserInterfaceLevelElement;
    "ui-traituserinterfacestyle": HTMLUITraitUserInterfaceStyleElement;
    "ui-traitverticalsizeclass": HTMLUITraitVerticalSizeClassElement;
    "ui-usernotificationaction": HTMLUIUserNotificationActionElement;
    "ui-usernotificationcategory": HTMLUIUserNotificationCategoryElement;
    "ui-usernotificationsettings": HTMLUIUserNotificationSettingsElement;
    "ui-vibrancyeffect": HTMLUIVibrancyEffectElement;
    "ui-videoeditorcontroller": HTMLUIVideoEditorControllerElement;
    "ui-view": HTMLUIViewElement;
    "ui-viewconfigurationstate": HTMLUIViewConfigurationStateElement;
    "ui-viewcontroller": HTMLUIViewControllerElement;
    "ui-viewprintformatter": HTMLUIViewPrintFormatterElement;
    "ui-viewpropertyanimator": HTMLUIViewPropertyAnimatorElement;
    "ui-visualeffect": HTMLUIVisualEffectElement;
    "ui-visualeffectview": HTMLUIVisualEffectViewElement;
    "ui-webview": HTMLUIWebViewElement;
    "ui-window": HTMLUIWindowElement;
    "ui-windowscene": HTMLUIWindowSceneElement;
    "ui-windowsceneactivationaction": HTMLUIWindowSceneActivationActionElement;
    "ui-windowsceneactivationconfiguration": HTMLUIWindowSceneActivationConfigurationElement;
    "ui-windowsceneactivationinteraction": HTMLUIWindowSceneActivationInteractionElement;
    "ui-windowsceneactivationrequestoptions": HTMLUIWindowSceneActivationRequestOptionsElement;
    "ui-windowscenedestructionrequestoptions": HTMLUIWindowSceneDestructionRequestOptionsElement;
    "ui-windowscenedraginteraction": HTMLUIWindowSceneDragInteractionElement;
    "ui-windowscenegeometry": HTMLUIWindowSceneGeometryElement;
    "ui-windowscenegeometrypreferences": HTMLUIWindowSceneGeometryPreferencesElement;
    "ui-windowscenegeometrypreferencesios": HTMLUIWindowSceneGeometryPreferencesIOSElement;
    "ui-windowscenegeometrypreferencesmac": HTMLUIWindowSceneGeometryPreferencesMacElement;
    "ui-windowsceneplacement": HTMLUIWindowScenePlacementElement;
    "ui-windowsceneprominentplacement": HTMLUIWindowSceneProminentPlacementElement;
    "ui-windowscenestandardplacement": HTMLUIWindowSceneStandardPlacementElement;
  }

  interface Document {
    createElement<K extends keyof UIKitCustomElementTagNameMap>(
      tagName: K,
      options?: ElementCreationOptions
    ): UIKitCustomElementTagNameMap[K];
  }
}

export abstract class HTMLNativeObjectElement extends HTMLElement {
  static defineCustomElement(){
    const callerClass = this as unknown as typeof HTMLElement;

    const namespace = 'NS';
    const nativeClassName = callerClass.name.replace(/^HTML/, "").replace(/Element$/, "");
    if(!nativeClassName.startsWith(namespace)){
      console.warn(`Unable to define Custom Element "${callerClass.name}", as namespace unexpectedly began with something other than ${namespace}.`);
      return;
    }

    customElements.define(`${namespace}-${nativeClassName.slice(namespace.length)}`.toLowerCase(), callerClass);
  }

  /**
   * Build a record of lowercased native attributes to their original camelcase.
   */
  protected static getOwnNativeAttributes(){
    return Object.getOwnPropertyNames(this.prototype)
    .reduce<Record<string, string>>((acc, prop) => {
      acc[prop.toLowerCase()] = prop;
      return acc;
    }, {});
  }

  /**
   * A record of lowercased native attributes to their original camelcase.
   */
  protected static readonly nativeAttributes = this.getOwnNativeAttributes();

  /**
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements#responding_to_attribute_changes
   */
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);

  attributeChangedCallback(name: string, oldValue: any, newValue: any): void {
    // TODO: should this parse string values to rich values?
    // TODO: should attributes like backgroundColor be relegated to CSS?

    const callerClass = Object.getPrototypeOf(this).constructor as typeof HTMLNativeObjectElement;
    const nativeAttributes = callerClass.nativeAttributes;
    const nativeProp = nativeAttributes[name.toLowerCase()];
    if(nativeProp){
      // FIXME: marshal string to rich values where possible
      (this as any)[nativeProp] = newValue;
    }

    // With reference to setting attributes on HTMLVideoElement:
    // - For boolean properties like `autoplay`, we should set !!newValue.
    // - For string properties like `preload`, we should preserve the string.
    // - For rich properties like `srcObject`, we should preserve the value.
    // ... that said, rich properties aren't attributes in the first place.
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

export class HTMLNSObjectElement extends HTMLNativeObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSObject.new();

  get classForCoder(): interop.Object { return this.nativeObject.classForCoder; }
  get autoContentAccessingProxy(): interop.Object { return this.nativeObject.autoContentAccessingProxy; }
  get observationInfo(): interop.Pointer { return this.nativeObject.observationInfo; }
  set observationInfo(value: interop.PointerConvertible) { this.nativeObject.observationInfo = value; }
  get classForKeyedArchiver(): interop.Object { return this.nativeObject.classForKeyedArchiver; }
  get accessibilityElements(): NSArray { return this.nativeObject.accessibilityElements; }
  set accessibilityElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityElements = value; }
  get accessibilityContainerType(): interop.Enum<typeof UIAccessibilityContainerType> { return this.nativeObject.accessibilityContainerType; }
  set accessibilityContainerType(value: interop.Enum<typeof UIAccessibilityContainerType>) { this.nativeObject.accessibilityContainerType = value; }
  get automationElements(): NSArray { return this.nativeObject.automationElements; }
  set automationElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.automationElements = value; }
  get accessibilityCustomRotors(): NSArray { return this.nativeObject.accessibilityCustomRotors; }
  set accessibilityCustomRotors(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityCustomRotors = value; }
  get accessibilityCustomRotorsBlock(): () => NSArray { return this.nativeObject.accessibilityCustomRotorsBlock; }
  set accessibilityCustomRotorsBlock(value: () => NSArray) { this.nativeObject.accessibilityCustomRotorsBlock = value; }
  get isAccessibilityElement(): boolean { return this.nativeObject.isAccessibilityElement; }
  set isAccessibilityElement(value: boolean) { this.nativeObject.isAccessibilityElement = value; }
  get accessibilityLabel(): string { return this.nativeObject.accessibilityLabel; }
  set accessibilityLabel(value: string) { this.nativeObject.accessibilityLabel = value; }
  get accessibilityAttributedLabel(): NSAttributedString { return this.nativeObject.accessibilityAttributedLabel; }
  set accessibilityAttributedLabel(value: NSAttributedString) { this.nativeObject.accessibilityAttributedLabel = value; }
  get accessibilityHint(): string { return this.nativeObject.accessibilityHint; }
  set accessibilityHint(value: string) { this.nativeObject.accessibilityHint = value; }
  get accessibilityAttributedHint(): NSAttributedString { return this.nativeObject.accessibilityAttributedHint; }
  set accessibilityAttributedHint(value: NSAttributedString) { this.nativeObject.accessibilityAttributedHint = value; }
  get accessibilityValue(): string { return this.nativeObject.accessibilityValue; }
  set accessibilityValue(value: string) { this.nativeObject.accessibilityValue = value; }
  get accessibilityAttributedValue(): NSAttributedString { return this.nativeObject.accessibilityAttributedValue; }
  set accessibilityAttributedValue(value: NSAttributedString) { this.nativeObject.accessibilityAttributedValue = value; }
  get accessibilityTraits(): number { return this.nativeObject.accessibilityTraits; }
  set accessibilityTraits(value: number) { this.nativeObject.accessibilityTraits = value; }
  get accessibilityFrame(): CGRect { return this.nativeObject.accessibilityFrame; }
  set accessibilityFrame(value: CGRect) { this.nativeObject.accessibilityFrame = value; }
  get accessibilityPath(): UIBezierPath { return this.nativeObject.accessibilityPath; }
  set accessibilityPath(value: UIBezierPath) { this.nativeObject.accessibilityPath = value; }
  get accessibilityActivationPoint(): CGPoint { return this.nativeObject.accessibilityActivationPoint; }
  set accessibilityActivationPoint(value: CGPoint) { this.nativeObject.accessibilityActivationPoint = value; }
  get accessibilityLanguage(): string { return this.nativeObject.accessibilityLanguage; }
  set accessibilityLanguage(value: string) { this.nativeObject.accessibilityLanguage = value; }
  get accessibilityElementsHidden(): boolean { return this.nativeObject.accessibilityElementsHidden; }
  set accessibilityElementsHidden(value: boolean) { this.nativeObject.accessibilityElementsHidden = value; }
  get accessibilityViewIsModal(): boolean { return this.nativeObject.accessibilityViewIsModal; }
  set accessibilityViewIsModal(value: boolean) { this.nativeObject.accessibilityViewIsModal = value; }
  get shouldGroupAccessibilityChildren(): boolean { return this.nativeObject.shouldGroupAccessibilityChildren; }
  set shouldGroupAccessibilityChildren(value: boolean) { this.nativeObject.shouldGroupAccessibilityChildren = value; }
  get accessibilityNavigationStyle(): interop.Enum<typeof UIAccessibilityNavigationStyle> { return this.nativeObject.accessibilityNavigationStyle; }
  set accessibilityNavigationStyle(value: interop.Enum<typeof UIAccessibilityNavigationStyle>) { this.nativeObject.accessibilityNavigationStyle = value; }
  get accessibilityRespondsToUserInteraction(): boolean { return this.nativeObject.accessibilityRespondsToUserInteraction; }
  set accessibilityRespondsToUserInteraction(value: boolean) { this.nativeObject.accessibilityRespondsToUserInteraction = value; }
  get accessibilityUserInputLabels(): NSArray { return this.nativeObject.accessibilityUserInputLabels; }
  set accessibilityUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityUserInputLabels = value; }
  get accessibilityAttributedUserInputLabels(): NSArray { return this.nativeObject.accessibilityAttributedUserInputLabels; }
  set accessibilityAttributedUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityAttributedUserInputLabels = value; }
  get accessibilityTextualContext(): string { return this.nativeObject.accessibilityTextualContext; }
  set accessibilityTextualContext(value: string) { this.nativeObject.accessibilityTextualContext = value; }
  get accessibilityDirectTouchOptions(): interop.Enum<typeof UIAccessibilityDirectTouchOptions> { return this.nativeObject.accessibilityDirectTouchOptions; }
  set accessibilityDirectTouchOptions(value: interop.Enum<typeof UIAccessibilityDirectTouchOptions>) { this.nativeObject.accessibilityDirectTouchOptions = value; }
  get isAccessibilityElementBlock(): () => boolean { return this.nativeObject.isAccessibilityElementBlock; }
  set isAccessibilityElementBlock(value: () => boolean) { this.nativeObject.isAccessibilityElementBlock = value; }
  get accessibilityLabelBlock(): () => string { return this.nativeObject.accessibilityLabelBlock; }
  set accessibilityLabelBlock(value: () => string) { this.nativeObject.accessibilityLabelBlock = value; }
  get accessibilityValueBlock(): () => string { return this.nativeObject.accessibilityValueBlock; }
  set accessibilityValueBlock(value: () => string) { this.nativeObject.accessibilityValueBlock = value; }
  get accessibilityHintBlock(): () => string { return this.nativeObject.accessibilityHintBlock; }
  set accessibilityHintBlock(value: () => string) { this.nativeObject.accessibilityHintBlock = value; }
  get accessibilityTraitsBlock(): () => number { return this.nativeObject.accessibilityTraitsBlock; }
  set accessibilityTraitsBlock(value: () => number) { this.nativeObject.accessibilityTraitsBlock = value; }
  get accessibilityIdentifierBlock(): () => string { return this.nativeObject.accessibilityIdentifierBlock; }
  set accessibilityIdentifierBlock(value: () => string) { this.nativeObject.accessibilityIdentifierBlock = value; }
  get accessibilityHeaderElementsBlock(): () => NSArray { return this.nativeObject.accessibilityHeaderElementsBlock; }
  set accessibilityHeaderElementsBlock(value: () => NSArray) { this.nativeObject.accessibilityHeaderElementsBlock = value; }
  get accessibilityAttributedLabelBlock(): () => NSAttributedString { return this.nativeObject.accessibilityAttributedLabelBlock; }
  set accessibilityAttributedLabelBlock(value: () => NSAttributedString) { this.nativeObject.accessibilityAttributedLabelBlock = value; }
  get accessibilityAttributedHintBlock(): () => NSAttributedString { return this.nativeObject.accessibilityAttributedHintBlock; }
  set accessibilityAttributedHintBlock(value: () => NSAttributedString) { this.nativeObject.accessibilityAttributedHintBlock = value; }
  get accessibilityLanguageBlock(): () => string { return this.nativeObject.accessibilityLanguageBlock; }
  set accessibilityLanguageBlock(value: () => string) { this.nativeObject.accessibilityLanguageBlock = value; }
  get accessibilityTextualContextBlock(): () => string { return this.nativeObject.accessibilityTextualContextBlock; }
  set accessibilityTextualContextBlock(value: () => string) { this.nativeObject.accessibilityTextualContextBlock = value; }
  get accessibilityUserInputLabelsBlock(): () => NSArray { return this.nativeObject.accessibilityUserInputLabelsBlock; }
  set accessibilityUserInputLabelsBlock(value: () => NSArray) { this.nativeObject.accessibilityUserInputLabelsBlock = value; }
  get accessibilityAttributedUserInputLabelsBlock(): () => NSArray { return this.nativeObject.accessibilityAttributedUserInputLabelsBlock; }
  set accessibilityAttributedUserInputLabelsBlock(value: () => NSArray) { this.nativeObject.accessibilityAttributedUserInputLabelsBlock = value; }
  get accessibilityAttributedValueBlock(): () => NSAttributedString { return this.nativeObject.accessibilityAttributedValueBlock; }
  set accessibilityAttributedValueBlock(value: () => NSAttributedString) { this.nativeObject.accessibilityAttributedValueBlock = value; }
  get accessibilityElementsHiddenBlock(): () => boolean { return this.nativeObject.accessibilityElementsHiddenBlock; }
  set accessibilityElementsHiddenBlock(value: () => boolean) { this.nativeObject.accessibilityElementsHiddenBlock = value; }
  get accessibilityRespondsToUserInteractionBlock(): () => boolean { return this.nativeObject.accessibilityRespondsToUserInteractionBlock; }
  set accessibilityRespondsToUserInteractionBlock(value: () => boolean) { this.nativeObject.accessibilityRespondsToUserInteractionBlock = value; }
  get accessibilityViewIsModalBlock(): () => boolean { return this.nativeObject.accessibilityViewIsModalBlock; }
  set accessibilityViewIsModalBlock(value: () => boolean) { this.nativeObject.accessibilityViewIsModalBlock = value; }
  get accessibilityShouldGroupAccessibilityChildrenBlock(): () => boolean { return this.nativeObject.accessibilityShouldGroupAccessibilityChildrenBlock; }
  set accessibilityShouldGroupAccessibilityChildrenBlock(value: () => boolean) { this.nativeObject.accessibilityShouldGroupAccessibilityChildrenBlock = value; }
  get accessibilityElementsBlock(): () => NSArray { return this.nativeObject.accessibilityElementsBlock; }
  set accessibilityElementsBlock(value: () => NSArray) { this.nativeObject.accessibilityElementsBlock = value; }
  get automationElementsBlock(): () => NSArray { return this.nativeObject.automationElementsBlock; }
  set automationElementsBlock(value: () => NSArray) { this.nativeObject.automationElementsBlock = value; }
  get accessibilityContainerTypeBlock(): () => interop.Enum<typeof UIAccessibilityContainerType> { return this.nativeObject.accessibilityContainerTypeBlock; }
  set accessibilityContainerTypeBlock(value: () => interop.Enum<typeof UIAccessibilityContainerType>) { this.nativeObject.accessibilityContainerTypeBlock = value; }
  get accessibilityActivationPointBlock(): () => CGPoint { return this.nativeObject.accessibilityActivationPointBlock; }
  set accessibilityActivationPointBlock(value: () => CGPoint) { this.nativeObject.accessibilityActivationPointBlock = value; }
  get accessibilityFrameBlock(): () => CGRect { return this.nativeObject.accessibilityFrameBlock; }
  set accessibilityFrameBlock(value: () => CGRect) { this.nativeObject.accessibilityFrameBlock = value; }
  get accessibilityNavigationStyleBlock(): () => interop.Enum<typeof UIAccessibilityNavigationStyle> { return this.nativeObject.accessibilityNavigationStyleBlock; }
  set accessibilityNavigationStyleBlock(value: () => interop.Enum<typeof UIAccessibilityNavigationStyle>) { this.nativeObject.accessibilityNavigationStyleBlock = value; }
  get accessibilityPathBlock(): () => UIBezierPath { return this.nativeObject.accessibilityPathBlock; }
  set accessibilityPathBlock(value: () => UIBezierPath) { this.nativeObject.accessibilityPathBlock = value; }
  get accessibilityActivateBlock(): () => boolean { return this.nativeObject.accessibilityActivateBlock; }
  set accessibilityActivateBlock(value: () => boolean) { this.nativeObject.accessibilityActivateBlock = value; }
  get accessibilityIncrementBlock(): () => void { return this.nativeObject.accessibilityIncrementBlock; }
  set accessibilityIncrementBlock(value: () => void) { this.nativeObject.accessibilityIncrementBlock = value; }
  get accessibilityDecrementBlock(): () => void { return this.nativeObject.accessibilityDecrementBlock; }
  set accessibilityDecrementBlock(value: () => void) { this.nativeObject.accessibilityDecrementBlock = value; }
  get accessibilityPerformEscapeBlock(): () => boolean { return this.nativeObject.accessibilityPerformEscapeBlock; }
  set accessibilityPerformEscapeBlock(value: () => boolean) { this.nativeObject.accessibilityPerformEscapeBlock = value; }
  get accessibilityMagicTapBlock(): () => boolean { return this.nativeObject.accessibilityMagicTapBlock; }
  set accessibilityMagicTapBlock(value: () => boolean) { this.nativeObject.accessibilityMagicTapBlock = value; }
  get accessibilityCustomActionsBlock(): () => NSArray { return this.nativeObject.accessibilityCustomActionsBlock; }
  set accessibilityCustomActionsBlock(value: () => NSArray) { this.nativeObject.accessibilityCustomActionsBlock = value; }
  get accessibilityCustomActions(): NSArray { return this.nativeObject.accessibilityCustomActions; }
  set accessibilityCustomActions(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityCustomActions = value; }
  get accessibilityDragSourceDescriptors(): NSArray { return this.nativeObject.accessibilityDragSourceDescriptors; }
  set accessibilityDragSourceDescriptors(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityDragSourceDescriptors = value; }
  get accessibilityDropPointDescriptors(): NSArray { return this.nativeObject.accessibilityDropPointDescriptors; }
  set accessibilityDropPointDescriptors(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityDropPointDescriptors = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUIWindowSceneGeometryElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIWindowSceneGeometry.new();

  get interfaceOrientation(): interop.Enum<typeof UIInterfaceOrientation> { return this.nativeObject.interfaceOrientation; }
}

export class HTMLNSCollectionLayoutSpacingElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSCollectionLayoutSpacing.new();

  get spacing(): number { return this.nativeObject.spacing; }
  get isFlexibleSpacing(): boolean { return this.nativeObject.isFlexibleSpacing; }
  get isFixedSpacing(): boolean { return this.nativeObject.isFixedSpacing; }
}

export class HTMLUIPercentDrivenInteractiveTransitionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPercentDrivenInteractiveTransition.new();

  get duration(): number { return this.nativeObject.duration; }
  get percentComplete(): number { return this.nativeObject.percentComplete; }
  get completionSpeed(): number { return this.nativeObject.completionSpeed; }
  set completionSpeed(value: number) { this.nativeObject.completionSpeed = value; }
  get completionCurve(): interop.Enum<typeof UIViewAnimationCurve> { return this.nativeObject.completionCurve; }
  set completionCurve(value: interop.Enum<typeof UIViewAnimationCurve>) { this.nativeObject.completionCurve = value; }
  get timingCurve(): UITimingCurveProvider { return this.nativeObject.timingCurve; }
  set timingCurve(value: UITimingCurveProvider) { this.nativeObject.timingCurve = value; }
  get wantsInteractiveStart(): boolean { return this.nativeObject.wantsInteractiveStart; }
  set wantsInteractiveStart(value: boolean) { this.nativeObject.wantsInteractiveStart = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUICollectionViewSupplementaryRegistrationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICollectionViewSupplementaryRegistration.new();

  get supplementaryClass(): interop.Object { return this.nativeObject.supplementaryClass; }
  get supplementaryNib(): UINib { return this.nativeObject.supplementaryNib; }
  get elementKind(): string { return this.nativeObject.elementKind; }
  get configurationHandler(): (p1: UICollectionReusableView, p2: string, p3: NSIndexPath) => void { return this.nativeObject.configurationHandler; }
}

export class HTMLUINibElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UINib.new();

}

export class HTMLUIActivityElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIActivity.new();

  get activityType(): string { return this.nativeObject.activityType; }
  get activityTitle(): string { return this.nativeObject.activityTitle; }
  get activityImage(): UIImage { return this.nativeObject.activityImage; }
  get activityViewController(): UIViewController { return this.nativeObject.activityViewController; }
}

export class HTMLUITextPlaceholderElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITextPlaceholder.new();

  get rects(): NSArray { return this.nativeObject.rects; }
}

export class HTMLUIPrinterDestinationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPrinterDestination.new();

  get URL(): NSURL { return this.nativeObject.URL; }
  set URL(value: NSURL) { this.nativeObject.URL = value; }
  get displayName(): string { return this.nativeObject.displayName; }
  set displayName(value: string) { this.nativeObject.displayName = value; }
  get txtRecord(): NSData { return this.nativeObject.txtRecord; }
  set txtRecord(value: NSData) { this.nativeObject.txtRecord = value; }
}

export class HTMLUIPrintInfoElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPrintInfo.new();

  get printerID(): string { return this.nativeObject.printerID; }
  set printerID(value: string) { this.nativeObject.printerID = value; }
  get jobName(): string { return this.nativeObject.jobName; }
  set jobName(value: string) { this.nativeObject.jobName = value; }
  get outputType(): interop.Enum<typeof UIPrintInfoOutputType> { return this.nativeObject.outputType; }
  set outputType(value: interop.Enum<typeof UIPrintInfoOutputType>) { this.nativeObject.outputType = value; }
  get orientation(): interop.Enum<typeof UIPrintInfoOrientation> { return this.nativeObject.orientation; }
  set orientation(value: interop.Enum<typeof UIPrintInfoOrientation>) { this.nativeObject.orientation = value; }
  get duplex(): interop.Enum<typeof UIPrintInfoDuplex> { return this.nativeObject.duplex; }
  set duplex(value: interop.Enum<typeof UIPrintInfoDuplex>) { this.nativeObject.duplex = value; }
  get dictionaryRepresentation(): NSDictionary { return this.nativeObject.dictionaryRepresentation; }
}

export class HTMLUIPrintFormatterElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPrintFormatter.new();

  get printPageRenderer(): UIPrintPageRenderer { return this.nativeObject.printPageRenderer; }
  get maximumContentHeight(): number { return this.nativeObject.maximumContentHeight; }
  set maximumContentHeight(value: number) { this.nativeObject.maximumContentHeight = value; }
  get maximumContentWidth(): number { return this.nativeObject.maximumContentWidth; }
  set maximumContentWidth(value: number) { this.nativeObject.maximumContentWidth = value; }
  get contentInsets(): UIEdgeInsets { return this.nativeObject.contentInsets; }
  set contentInsets(value: UIEdgeInsets) { this.nativeObject.contentInsets = value; }
  get perPageContentInsets(): UIEdgeInsets { return this.nativeObject.perPageContentInsets; }
  set perPageContentInsets(value: UIEdgeInsets) { this.nativeObject.perPageContentInsets = value; }
  get startPage(): number { return this.nativeObject.startPage; }
  set startPage(value: number) { this.nativeObject.startPage = value; }
  get pageCount(): number { return this.nativeObject.pageCount; }
  get requiresMainThread(): boolean { return this.nativeObject.requiresMainThread; }
}

export class HTMLUIDocumentBrowserActionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIDocumentBrowserAction.new();

  get identifier(): string { return this.nativeObject.identifier; }
  get localizedTitle(): string { return this.nativeObject.localizedTitle; }
  get availability(): interop.Enum<typeof UIDocumentBrowserActionAvailability> { return this.nativeObject.availability; }
  get image(): UIImage { return this.nativeObject.image; }
  set image(value: UIImage) { this.nativeObject.image = value; }
  get supportedContentTypes(): NSArray { return this.nativeObject.supportedContentTypes; }
  set supportedContentTypes(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.supportedContentTypes = value; }
  get supportsMultipleItems(): boolean { return this.nativeObject.supportsMultipleItems; }
  set supportsMultipleItems(value: boolean) { this.nativeObject.supportsMultipleItems = value; }
}

export class HTMLUIScreenModeElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIScreenMode.new();

  get size(): CGSize { return this.nativeObject.size; }
  get pixelAspectRatio(): number { return this.nativeObject.pixelAspectRatio; }
}

export class HTMLNSTextViewportLayoutControllerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTextViewportLayoutController.new();
  get delegate(): NSTextViewportLayoutControllerDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSTextViewportLayoutControllerDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSTextViewportLayoutControllerDelegateImpl;
  }

  get textLayoutManager(): NSTextLayoutManager | null { return this.nativeObject.textLayoutManager; }
  get viewportBounds(): CGRect { return this.nativeObject.viewportBounds; }
  get viewportRange(): NSTextRange { return this.nativeObject.viewportRange; }

  set viewportBoundsForTextViewportLayoutController(value: (textViewportLayoutController: NSTextViewportLayoutController) => CGRect) {
    this.delegate.viewportBoundsForTextViewportLayoutController = value;
  }
  set textViewportLayoutControllerConfigureRenderingSurfaceForTextLayoutFragment(value: (textViewportLayoutController: NSTextViewportLayoutController, textLayoutFragment: NSTextLayoutFragment) => void) {
    this.delegate.textViewportLayoutControllerConfigureRenderingSurfaceForTextLayoutFragment = value;
  }
  set textViewportLayoutControllerWillLayout(value: (textViewportLayoutController: NSTextViewportLayoutController) => void) {
    this.delegate.textViewportLayoutControllerWillLayout = value;
  }
  set textViewportLayoutControllerDidLayout(value: (textViewportLayoutController: NSTextViewportLayoutController) => void) {
    this.delegate.textViewportLayoutControllerDidLayout = value;
  }
}

export class HTMLNSTextSelectionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTextSelection.new();

  get textRanges(): NSArray { return this.nativeObject.textRanges; }
  get granularity(): interop.Enum<typeof NSTextSelectionGranularity> { return this.nativeObject.granularity; }
  get affinity(): interop.Enum<typeof NSTextSelectionAffinity> { return this.nativeObject.affinity; }
  get isTransient(): boolean { return this.nativeObject.isTransient; }
  get anchorPositionOffset(): number { return this.nativeObject.anchorPositionOffset; }
  set anchorPositionOffset(value: number) { this.nativeObject.anchorPositionOffset = value; }
  get isLogical(): boolean { return this.nativeObject.isLogical; }
  set isLogical(value: boolean) { this.nativeObject.isLogical = value; }
  get secondarySelectionLocation(): NSTextLocation { return this.nativeObject.secondarySelectionLocation; }
  set secondarySelectionLocation(value: NSTextLocation) { this.nativeObject.secondarySelectionLocation = value; }
  get typingAttributes(): NSDictionary { return this.nativeObject.typingAttributes; }
  set typingAttributes(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) { this.nativeObject.typingAttributes = value; }
}

export class HTMLUIContentUnavailableConfigurationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIContentUnavailableConfiguration.new();

  get image(): UIImage { return this.nativeObject.image; }
  set image(value: UIImage) { this.nativeObject.image = value; }
  get imageProperties(): UIContentUnavailableImageProperties { return this.nativeObject.imageProperties; }
  get text(): string { return this.nativeObject.text; }
  set text(value: string) { this.nativeObject.text = value; }
  get attributedText(): NSAttributedString { return this.nativeObject.attributedText; }
  set attributedText(value: NSAttributedString) { this.nativeObject.attributedText = value; }
  get textProperties(): UIContentUnavailableTextProperties { return this.nativeObject.textProperties; }
  get secondaryText(): string { return this.nativeObject.secondaryText; }
  set secondaryText(value: string) { this.nativeObject.secondaryText = value; }
  get secondaryAttributedText(): NSAttributedString { return this.nativeObject.secondaryAttributedText; }
  set secondaryAttributedText(value: NSAttributedString) { this.nativeObject.secondaryAttributedText = value; }
  get secondaryTextProperties(): UIContentUnavailableTextProperties { return this.nativeObject.secondaryTextProperties; }
  get button(): UIButtonConfiguration { return this.nativeObject.button; }
  set button(value: UIButtonConfiguration) { this.nativeObject.button = value; }
  get buttonProperties(): UIContentUnavailableButtonProperties { return this.nativeObject.buttonProperties; }
  get secondaryButton(): UIButtonConfiguration { return this.nativeObject.secondaryButton; }
  set secondaryButton(value: UIButtonConfiguration) { this.nativeObject.secondaryButton = value; }
  get secondaryButtonProperties(): UIContentUnavailableButtonProperties { return this.nativeObject.secondaryButtonProperties; }
  get alignment(): interop.Enum<typeof UIContentUnavailableAlignment> { return this.nativeObject.alignment; }
  set alignment(value: interop.Enum<typeof UIContentUnavailableAlignment>) { this.nativeObject.alignment = value; }
  get axesPreservingSuperviewLayoutMargins(): interop.Enum<typeof UIAxis> { return this.nativeObject.axesPreservingSuperviewLayoutMargins; }
  set axesPreservingSuperviewLayoutMargins(value: interop.Enum<typeof UIAxis>) { this.nativeObject.axesPreservingSuperviewLayoutMargins = value; }
  get directionalLayoutMargins(): NSDirectionalEdgeInsets { return this.nativeObject.directionalLayoutMargins; }
  set directionalLayoutMargins(value: NSDirectionalEdgeInsets) { this.nativeObject.directionalLayoutMargins = value; }
  get imageToTextPadding(): number { return this.nativeObject.imageToTextPadding; }
  set imageToTextPadding(value: number) { this.nativeObject.imageToTextPadding = value; }
  get textToSecondaryTextPadding(): number { return this.nativeObject.textToSecondaryTextPadding; }
  set textToSecondaryTextPadding(value: number) { this.nativeObject.textToSecondaryTextPadding = value; }
  get textToButtonPadding(): number { return this.nativeObject.textToButtonPadding; }
  set textToButtonPadding(value: number) { this.nativeObject.textToButtonPadding = value; }
  get buttonToSecondaryButtonPadding(): number { return this.nativeObject.buttonToSecondaryButtonPadding; }
  set buttonToSecondaryButtonPadding(value: number) { this.nativeObject.buttonToSecondaryButtonPadding = value; }
  get background(): UIBackgroundConfiguration { return this.nativeObject.background; }
  set background(value: UIBackgroundConfiguration) { this.nativeObject.background = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUITraitForceTouchCapabilityElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITraitForceTouchCapability.new();

}

export class HTMLUIToolTipConfigurationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIToolTipConfiguration.new();

  get toolTip(): string { return this.nativeObject.toolTip; }
  get sourceRect(): CGRect { return this.nativeObject.sourceRect; }
}

export class HTMLNSParagraphStyleElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSParagraphStyle.new();

  get lineSpacing(): number { return this.nativeObject.lineSpacing; }
  get paragraphSpacing(): number { return this.nativeObject.paragraphSpacing; }
  get alignment(): interop.Enum<typeof NSTextAlignment> { return this.nativeObject.alignment; }
  get headIndent(): number { return this.nativeObject.headIndent; }
  get tailIndent(): number { return this.nativeObject.tailIndent; }
  get firstLineHeadIndent(): number { return this.nativeObject.firstLineHeadIndent; }
  get minimumLineHeight(): number { return this.nativeObject.minimumLineHeight; }
  get maximumLineHeight(): number { return this.nativeObject.maximumLineHeight; }
  get lineBreakMode(): interop.Enum<typeof NSLineBreakMode> { return this.nativeObject.lineBreakMode; }
  get baseWritingDirection(): interop.Enum<typeof NSWritingDirection> { return this.nativeObject.baseWritingDirection; }
  get lineHeightMultiple(): number { return this.nativeObject.lineHeightMultiple; }
  get paragraphSpacingBefore(): number { return this.nativeObject.paragraphSpacingBefore; }
  get hyphenationFactor(): number { return this.nativeObject.hyphenationFactor; }
  get usesDefaultHyphenation(): boolean { return this.nativeObject.usesDefaultHyphenation; }
  get tabStops(): NSArray { return this.nativeObject.tabStops; }
  get defaultTabInterval(): number { return this.nativeObject.defaultTabInterval; }
  get textLists(): NSArray { return this.nativeObject.textLists; }
  get allowsDefaultTighteningForTruncation(): boolean { return this.nativeObject.allowsDefaultTighteningForTruncation; }
  get lineBreakStrategy(): interop.Enum<typeof NSLineBreakStrategy> { return this.nativeObject.lineBreakStrategy; }
}

export class HTMLUIFocusEffectElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIFocusEffect.new();

}

export class HTMLNSTextLayoutFragmentElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTextLayoutFragment.new();

  get textLayoutManager(): NSTextLayoutManager { return this.nativeObject.textLayoutManager; }
  get textElement(): NSTextElement | null { return this.nativeObject.textElement; }
  get rangeInElement(): NSTextRange { return this.nativeObject.rangeInElement; }
  get textLineFragments(): NSArray { return this.nativeObject.textLineFragments; }
  get layoutQueue(): NSOperationQueue { return this.nativeObject.layoutQueue; }
  set layoutQueue(value: NSOperationQueue) { this.nativeObject.layoutQueue = value; }
  get state(): interop.Enum<typeof NSTextLayoutFragmentState> { return this.nativeObject.state; }
  get layoutFragmentFrame(): CGRect { return this.nativeObject.layoutFragmentFrame; }
  get renderingSurfaceBounds(): CGRect { return this.nativeObject.renderingSurfaceBounds; }
  get leadingPadding(): number { return this.nativeObject.leadingPadding; }
  get trailingPadding(): number { return this.nativeObject.trailingPadding; }
  get topMargin(): number { return this.nativeObject.topMargin; }
  get bottomMargin(): number { return this.nativeObject.bottomMargin; }
  get textAttachmentViewProviders(): NSArray { return this.nativeObject.textAttachmentViewProviders; }
}

export class HTMLUIEventAttributionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIEventAttribution.new();

  get sourceIdentifier(): number { return this.nativeObject.sourceIdentifier; }
  get destinationURL(): NSURL { return this.nativeObject.destinationURL; }
  get reportEndpoint(): NSURL { return this.nativeObject.reportEndpoint; }
  get sourceDescription(): string { return this.nativeObject.sourceDescription; }
  get purchaser(): string { return this.nativeObject.purchaser; }
}

export class HTMLUIPointerAccessoryElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPointerAccessory.new();

  get shape(): UIPointerShape { return this.nativeObject.shape; }
  get position(): UIPointerAccessoryPosition { return this.nativeObject.position; }
  get orientationMatchesAngle(): boolean { return this.nativeObject.orientationMatchesAngle; }
  set orientationMatchesAngle(value: boolean) { this.nativeObject.orientationMatchesAngle = value; }
}

export class HTMLUIPointerRegionRequestElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPointerRegionRequest.new();

  get location(): CGPoint { return this.nativeObject.location; }
  get modifiers(): interop.Enum<typeof UIKeyModifierFlags> { return this.nativeObject.modifiers; }
}

export class HTMLUIPointerInteractionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPointerInteraction.new();
  get delegate(): UIPointerInteractionDelegateImpl {
    // delegate is readonly, so not lazy-initialized.
    return this.nativeObject.delegate as UIPointerInteractionDelegateImpl;
  }

  get isEnabled(): boolean { return this.nativeObject.isEnabled; }
  set isEnabled(value: boolean) { this.nativeObject.isEnabled = value; }
  get view(): UIView { return this.nativeObject.view; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }

  set pointerInteractionRegionForRequestDefaultRegion(value: (interaction: UIPointerInteraction, request: UIPointerRegionRequest, defaultRegion: UIPointerRegion) => UIPointerRegion) {
    this.delegate.pointerInteractionRegionForRequestDefaultRegion = value;
  }
  set pointerInteractionStyleForRegion(value: (interaction: UIPointerInteraction, region: UIPointerRegion) => UIPointerStyle) {
    this.delegate.pointerInteractionStyleForRegion = value;
  }
  set pointerInteractionWillEnterRegionAnimator(value: (interaction: UIPointerInteraction, region: UIPointerRegion, animator: UIPointerInteractionAnimating) => void) {
    this.delegate.pointerInteractionWillEnterRegionAnimator = value;
  }
  set pointerInteractionWillExitRegionAnimator(value: (interaction: UIPointerInteraction, region: UIPointerRegion, animator: UIPointerInteractionAnimating) => void) {
    this.delegate.pointerInteractionWillExitRegionAnimator = value;
  }
}

export class HTMLUIPointerRegionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPointerRegion.new();

  get rect(): CGRect { return this.nativeObject.rect; }
  get identifier(): NSObject { return this.nativeObject.identifier; }
  get latchingAxes(): interop.Enum<typeof UIAxis> { return this.nativeObject.latchingAxes; }
  set latchingAxes(value: interop.Enum<typeof UIAxis>) { this.nativeObject.latchingAxes = value; }
}

export class HTMLUIStatusBarManagerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIStatusBarManager.new();

  get statusBarStyle(): interop.Enum<typeof UIStatusBarStyle> { return this.nativeObject.statusBarStyle; }
  get isStatusBarHidden(): boolean { return this.nativeObject.isStatusBarHidden; }
  get statusBarFrame(): CGRect { return this.nativeObject.statusBarFrame; }
}

export class HTMLUIOpenURLContextElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIOpenURLContext.new();

  get URL(): NSURL { return this.nativeObject.URL; }
  get options(): UISceneOpenURLOptions { return this.nativeObject.options; }
}

export class HTMLUITextLoupeSessionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITextLoupeSession.new();

}

export class HTMLUIFeedbackGeneratorElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIFeedbackGenerator.new();

}

export class HTMLUIRegionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIRegion.new();

}

export class HTMLUISceneActivationConditionsElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UISceneActivationConditions.new();

  get canActivateForTargetContentIdentifierPredicate(): NSPredicate { return this.nativeObject.canActivateForTargetContentIdentifierPredicate; }
  set canActivateForTargetContentIdentifierPredicate(value: NSPredicate) { this.nativeObject.canActivateForTargetContentIdentifierPredicate = value; }
  get prefersToActivateForTargetContentIdentifierPredicate(): NSPredicate { return this.nativeObject.prefersToActivateForTargetContentIdentifierPredicate; }
  set prefersToActivateForTargetContentIdentifierPredicate(value: NSPredicate) { this.nativeObject.prefersToActivateForTargetContentIdentifierPredicate = value; }
}

export class HTMLUIDynamicAnimatorElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIDynamicAnimator.new();
  get delegate(): UIDynamicAnimatorDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UIDynamicAnimatorDelegateImpl.new();
    }
    return this.nativeObject.delegate as UIDynamicAnimatorDelegateImpl;
  }

  get referenceView(): UIView { return this.nativeObject.referenceView; }
  get behaviors(): NSArray { return this.nativeObject.behaviors; }
  get isRunning(): boolean { return this.nativeObject.isRunning; }
  get elapsedTime(): number { return this.nativeObject.elapsedTime; }

  set dynamicAnimatorWillResume(value: (animator: UIDynamicAnimator) => void) {
    this.delegate.dynamicAnimatorWillResume = value;
  }
  set dynamicAnimatorDidPause(value: (animator: UIDynamicAnimator) => void) {
    this.delegate.dynamicAnimatorDidPause = value;
  }
}

export class HTMLUIPreviewInteractionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPreviewInteraction.new();
  get delegate(): UIPreviewInteractionDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UIPreviewInteractionDelegateImpl.new();
    }
    return this.nativeObject.delegate as UIPreviewInteractionDelegateImpl;
  }

  get view(): UIView | null { return this.nativeObject.view; }

  set previewInteractionDidUpdatePreviewTransitionEnded(value: (previewInteraction: UIPreviewInteraction, transitionProgress: number, ended: boolean) => void) {
    this.delegate.previewInteractionDidUpdatePreviewTransitionEnded = value;
  }
  set previewInteractionDidCancel(value: (previewInteraction: UIPreviewInteraction) => void) {
    this.delegate.previewInteractionDidCancel = value;
  }
  set previewInteractionShouldBegin(value: (previewInteraction: UIPreviewInteraction) => boolean) {
    this.delegate.previewInteractionShouldBegin = value;
  }
  set previewInteractionDidUpdateCommitTransitionEnded(value: (previewInteraction: UIPreviewInteraction, transitionProgress: number, ended: boolean) => void) {
    this.delegate.previewInteractionDidUpdateCommitTransitionEnded = value;
  }
}

export class HTMLUISceneSessionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UISceneSession.new();

  get scene(): UIScene { return this.nativeObject.scene; }
  get role(): string { return this.nativeObject.role; }
  get configuration(): UISceneConfiguration { return this.nativeObject.configuration; }
  get persistentIdentifier(): string { return this.nativeObject.persistentIdentifier; }
  get stateRestorationActivity(): NSUserActivity { return this.nativeObject.stateRestorationActivity; }
  set stateRestorationActivity(value: NSUserActivity) { this.nativeObject.stateRestorationActivity = value; }
  get userInfo(): NSDictionary { return this.nativeObject.userInfo; }
  set userInfo(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) { this.nativeObject.userInfo = value; }
}

export class HTMLUIIndirectScribbleInteractionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIIndirectScribbleInteraction.new();
  get delegate(): UIIndirectScribbleInteractionDelegateImpl {
    // delegate is readonly, so not lazy-initialized.
    return this.nativeObject.delegate as UIIndirectScribbleInteractionDelegateImpl;
  }

  get isHandlingWriting(): boolean { return this.nativeObject.isHandlingWriting; }
  get view(): UIView { return this.nativeObject.view; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }

  set indirectScribbleInteractionRequestElementsInRectCompletion(value: (interaction: UIIndirectScribbleInteraction, rect: CGRect, completion: (p1: NSArray<interop.Object> | Array<interop.Object>) => void) => void) {
    this.delegate.indirectScribbleInteractionRequestElementsInRectCompletion = value;
  }
  set indirectScribbleInteractionIsElementFocused(value: (interaction: UIIndirectScribbleInteraction, elementIdentifier: NSCopying) => boolean) {
    this.delegate.indirectScribbleInteractionIsElementFocused = value;
  }
  set indirectScribbleInteractionFrameForElement(value: (interaction: UIIndirectScribbleInteraction, elementIdentifier: NSCopying) => CGRect) {
    this.delegate.indirectScribbleInteractionFrameForElement = value;
  }
  set indirectScribbleInteractionFocusElementIfNeededReferencePointCompletion(value: (interaction: UIIndirectScribbleInteraction, elementIdentifier: NSCopying, focusReferencePoint: CGPoint, completion: (p1: UIResponder) => void | null) => void) {
    this.delegate.indirectScribbleInteractionFocusElementIfNeededReferencePointCompletion = value;
  }
  set indirectScribbleInteractionShouldDelayFocusForElement(value: (interaction: UIIndirectScribbleInteraction, elementIdentifier: NSCopying) => boolean) {
    this.delegate.indirectScribbleInteractionShouldDelayFocusForElement = value;
  }
  set indirectScribbleInteractionWillBeginWritingInElement(value: (interaction: UIIndirectScribbleInteraction, elementIdentifier: NSCopying) => void) {
    this.delegate.indirectScribbleInteractionWillBeginWritingInElement = value;
  }
  set indirectScribbleInteractionDidFinishWritingInElement(value: (interaction: UIIndirectScribbleInteraction, elementIdentifier: NSCopying) => void) {
    this.delegate.indirectScribbleInteractionDidFinishWritingInElement = value;
  }
}

export class HTMLUISearchSuggestionItemElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UISearchSuggestionItem.new();

  get localizedAttributedSuggestion(): NSAttributedString { return this.nativeObject.localizedAttributedSuggestion; }
  get localizedSuggestion(): string { return this.nativeObject.localizedSuggestion; }
  get localizedDescription(): string { return this.nativeObject.localizedDescription; }
  get iconImage(): UIImage { return this.nativeObject.iconImage; }
  get representedObject(): interop.Object { return this.nativeObject.representedObject; }
  set representedObject(value: interop.Object) { this.nativeObject.representedObject = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUIBarButtonItemAppearanceElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = UIBarButtonItemAppearance.new();

  get normal(): UIBarButtonItemStateAppearance { return this.nativeObject.normal; }
  get highlighted(): UIBarButtonItemStateAppearance { return this.nativeObject.highlighted; }
  get disabled(): UIBarButtonItemStateAppearance { return this.nativeObject.disabled; }
  get focused(): UIBarButtonItemStateAppearance { return this.nativeObject.focused; }
}

export class HTMLUITargetedPreviewElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITargetedPreview.new();

  get target(): UIPreviewTarget { return this.nativeObject.target; }
  get view(): UIView { return this.nativeObject.view; }
  get parameters(): UIPreviewParameters { return this.nativeObject.parameters; }
  get size(): CGSize { return this.nativeObject.size; }
}

export class HTMLUIPreviewParametersElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPreviewParameters.new();

  get visiblePath(): UIBezierPath { return this.nativeObject.visiblePath; }
  set visiblePath(value: UIBezierPath) { this.nativeObject.visiblePath = value; }
  get shadowPath(): UIBezierPath { return this.nativeObject.shadowPath; }
  set shadowPath(value: UIBezierPath) { this.nativeObject.shadowPath = value; }
  get backgroundColor(): UIColor { return this.nativeObject.backgroundColor; }
  set backgroundColor(value: UIColor) { this.nativeObject.backgroundColor = value; }
}

export class HTMLUIFindSessionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIFindSession.new();

  get resultCount(): number { return this.nativeObject.resultCount; }
  get highlightedResultIndex(): number { return this.nativeObject.highlightedResultIndex; }
  get searchResultDisplayStyle(): interop.Enum<typeof UIFindSessionSearchResultDisplayStyle> { return this.nativeObject.searchResultDisplayStyle; }
  set searchResultDisplayStyle(value: interop.Enum<typeof UIFindSessionSearchResultDisplayStyle>) { this.nativeObject.searchResultDisplayStyle = value; }
  get supportsReplacement(): boolean { return this.nativeObject.supportsReplacement; }
  get allowsReplacementForCurrentlyHighlightedResult(): boolean { return this.nativeObject.allowsReplacementForCurrentlyHighlightedResult; }
  get allowsReplacement(): boolean { return this.nativeObject.allowsReplacement; }
}

export class HTMLUITextSelectionDisplayInteractionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITextSelectionDisplayInteraction.new();

  get isActivated(): boolean { return this.nativeObject.isActivated; }
  set isActivated(value: boolean) { this.nativeObject.isActivated = value; }
  get textInput(): UITextInput | null { return this.nativeObject.textInput; }
  get delegate(): UITextSelectionDisplayInteractionDelegate | null { return this.nativeObject.delegate; }
  get cursorView(): UIView { return this.nativeObject.cursorView; }
  set cursorView(value: UIView) { this.nativeObject.cursorView = value; }
  get highlightView(): UIView { return this.nativeObject.highlightView; }
  set highlightView(value: UIView) { this.nativeObject.highlightView = value; }
  get handleViews(): NSArray { return this.nativeObject.handleViews; }
  set handleViews(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.handleViews = value; }
  get view(): UIView { return this.nativeObject.view; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUICellAccessoryElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICellAccessory.new();

  get displayedState(): interop.Enum<typeof UICellAccessoryDisplayedState> { return this.nativeObject.displayedState; }
  set displayedState(value: interop.Enum<typeof UICellAccessoryDisplayedState>) { this.nativeObject.displayedState = value; }
  get isHidden(): boolean { return this.nativeObject.isHidden; }
  set isHidden(value: boolean) { this.nativeObject.isHidden = value; }
  get reservedLayoutWidth(): number { return this.nativeObject.reservedLayoutWidth; }
  set reservedLayoutWidth(value: number) { this.nativeObject.reservedLayoutWidth = value; }
  get tintColor(): UIColor { return this.nativeObject.tintColor; }
  set tintColor(value: UIColor) { this.nativeObject.tintColor = value; }
}

export class HTMLUIStoryboardUnwindSegueSourceElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIStoryboardUnwindSegueSource.new();

  get sourceViewController(): UIViewController { return this.nativeObject.sourceViewController; }
  get unwindAction(): string { return this.nativeObject.unwindAction; }
  get sender(): interop.Object { return this.nativeObject.sender; }
}

export class HTMLUISearchDisplayControllerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UISearchDisplayController.new();
  get delegate(): UISearchDisplayDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UISearchDisplayDelegateImpl.new();
    }
    return this.nativeObject.delegate as UISearchDisplayDelegateImpl;
  }
  get searchResultsDelegate(): UITableViewDelegateImpl {
    if(!this.nativeObject.searchResultsDelegate){
      this.nativeObject.searchResultsDelegate = UITableViewDelegateImpl.new();
    }
    return this.nativeObject.searchResultsDelegate as UITableViewDelegateImpl;
  }

  get isActive(): boolean { return this.nativeObject.isActive; }
  set isActive(value: boolean) { this.nativeObject.isActive = value; }
  get searchBar(): UISearchBar { return this.nativeObject.searchBar; }
  get searchContentsController(): UIViewController { return this.nativeObject.searchContentsController; }
  get searchResultsTableView(): UITableView { return this.nativeObject.searchResultsTableView; }
  get searchResultsDataSource(): UITableViewDataSource { return this.nativeObject.searchResultsDataSource; }
  set searchResultsDataSource(value: UITableViewDataSource) { this.nativeObject.searchResultsDataSource = value; }
  get searchResultsTitle(): string { return this.nativeObject.searchResultsTitle; }
  set searchResultsTitle(value: string) { this.nativeObject.searchResultsTitle = value; }
  get displaysSearchBarInNavigationBar(): boolean { return this.nativeObject.displaysSearchBarInNavigationBar; }
  set displaysSearchBarInNavigationBar(value: boolean) { this.nativeObject.displaysSearchBarInNavigationBar = value; }
  get navigationItem(): UINavigationItem { return this.nativeObject.navigationItem; }

  set searchDisplayControllerWillBeginSearch(value: (controller: UISearchDisplayController) => void) {
    this.delegate.searchDisplayControllerWillBeginSearch = value;
  }
  set searchDisplayControllerDidBeginSearch(value: (controller: UISearchDisplayController) => void) {
    this.delegate.searchDisplayControllerDidBeginSearch = value;
  }
  set searchDisplayControllerWillEndSearch(value: (controller: UISearchDisplayController) => void) {
    this.delegate.searchDisplayControllerWillEndSearch = value;
  }
  set searchDisplayControllerDidEndSearch(value: (controller: UISearchDisplayController) => void) {
    this.delegate.searchDisplayControllerDidEndSearch = value;
  }
  set searchDisplayControllerDidLoadSearchResultsTableView(value: (controller: UISearchDisplayController, tableView: UITableView) => void) {
    this.delegate.searchDisplayControllerDidLoadSearchResultsTableView = value;
  }
  set searchDisplayControllerWillUnloadSearchResultsTableView(value: (controller: UISearchDisplayController, tableView: UITableView) => void) {
    this.delegate.searchDisplayControllerWillUnloadSearchResultsTableView = value;
  }
  set searchDisplayControllerWillShowSearchResultsTableView(value: (controller: UISearchDisplayController, tableView: UITableView) => void) {
    this.delegate.searchDisplayControllerWillShowSearchResultsTableView = value;
  }
  set searchDisplayControllerDidShowSearchResultsTableView(value: (controller: UISearchDisplayController, tableView: UITableView) => void) {
    this.delegate.searchDisplayControllerDidShowSearchResultsTableView = value;
  }
  set searchDisplayControllerWillHideSearchResultsTableView(value: (controller: UISearchDisplayController, tableView: UITableView) => void) {
    this.delegate.searchDisplayControllerWillHideSearchResultsTableView = value;
  }
  set searchDisplayControllerDidHideSearchResultsTableView(value: (controller: UISearchDisplayController, tableView: UITableView) => void) {
    this.delegate.searchDisplayControllerDidHideSearchResultsTableView = value;
  }
  set searchDisplayControllerShouldReloadTableForSearchString(value: (controller: UISearchDisplayController, searchString: string | null) => boolean) {
    this.delegate.searchDisplayControllerShouldReloadTableForSearchString = value;
  }
  set searchDisplayControllerShouldReloadTableForSearchScope(value: (controller: UISearchDisplayController, searchOption: number) => boolean) {
    this.delegate.searchDisplayControllerShouldReloadTableForSearchScope = value;
  }
  set tableViewWillDisplayCellForRowAtIndexPath(value: (tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath) => void) {
    this.searchResultsDelegate.tableViewWillDisplayCellForRowAtIndexPath = value;
  }
  set tableViewWillDisplayHeaderViewForSection(value: (tableView: UITableView, view: UIView, section: number) => void) {
    this.searchResultsDelegate.tableViewWillDisplayHeaderViewForSection = value;
  }
  set tableViewWillDisplayFooterViewForSection(value: (tableView: UITableView, view: UIView, section: number) => void) {
    this.searchResultsDelegate.tableViewWillDisplayFooterViewForSection = value;
  }
  set tableViewDidEndDisplayingCellForRowAtIndexPath(value: (tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath) => void) {
    this.searchResultsDelegate.tableViewDidEndDisplayingCellForRowAtIndexPath = value;
  }
  set tableViewDidEndDisplayingHeaderViewForSection(value: (tableView: UITableView, view: UIView, section: number) => void) {
    this.searchResultsDelegate.tableViewDidEndDisplayingHeaderViewForSection = value;
  }
  set tableViewDidEndDisplayingFooterViewForSection(value: (tableView: UITableView, view: UIView, section: number) => void) {
    this.searchResultsDelegate.tableViewDidEndDisplayingFooterViewForSection = value;
  }
  set tableViewHeightForRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => number) {
    this.searchResultsDelegate.tableViewHeightForRowAtIndexPath = value;
  }
  set tableViewHeightForHeaderInSection(value: (tableView: UITableView, section: number) => number) {
    this.searchResultsDelegate.tableViewHeightForHeaderInSection = value;
  }
  set tableViewHeightForFooterInSection(value: (tableView: UITableView, section: number) => number) {
    this.searchResultsDelegate.tableViewHeightForFooterInSection = value;
  }
  set tableViewEstimatedHeightForRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => number) {
    this.searchResultsDelegate.tableViewEstimatedHeightForRowAtIndexPath = value;
  }
  set tableViewEstimatedHeightForHeaderInSection(value: (tableView: UITableView, section: number) => number) {
    this.searchResultsDelegate.tableViewEstimatedHeightForHeaderInSection = value;
  }
  set tableViewEstimatedHeightForFooterInSection(value: (tableView: UITableView, section: number) => number) {
    this.searchResultsDelegate.tableViewEstimatedHeightForFooterInSection = value;
  }
  set tableViewViewForHeaderInSection(value: (tableView: UITableView, section: number) => UIView) {
    this.searchResultsDelegate.tableViewViewForHeaderInSection = value;
  }
  set tableViewViewForFooterInSection(value: (tableView: UITableView, section: number) => UIView) {
    this.searchResultsDelegate.tableViewViewForFooterInSection = value;
  }
  set tableViewAccessoryTypeForRowWithIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => interop.Enum<typeof UITableViewCellAccessoryType>) {
    this.searchResultsDelegate.tableViewAccessoryTypeForRowWithIndexPath = value;
  }
  set tableViewAccessoryButtonTappedForRowWithIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => void) {
    this.searchResultsDelegate.tableViewAccessoryButtonTappedForRowWithIndexPath = value;
  }
  set tableViewShouldHighlightRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => boolean) {
    this.searchResultsDelegate.tableViewShouldHighlightRowAtIndexPath = value;
  }
  set tableViewDidHighlightRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => void) {
    this.searchResultsDelegate.tableViewDidHighlightRowAtIndexPath = value;
  }
  set tableViewDidUnhighlightRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => void) {
    this.searchResultsDelegate.tableViewDidUnhighlightRowAtIndexPath = value;
  }
  set tableViewWillSelectRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => NSIndexPath) {
    this.searchResultsDelegate.tableViewWillSelectRowAtIndexPath = value;
  }
  set tableViewWillDeselectRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => NSIndexPath) {
    this.searchResultsDelegate.tableViewWillDeselectRowAtIndexPath = value;
  }
  set tableViewDidSelectRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => void) {
    this.searchResultsDelegate.tableViewDidSelectRowAtIndexPath = value;
  }
  set tableViewDidDeselectRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => void) {
    this.searchResultsDelegate.tableViewDidDeselectRowAtIndexPath = value;
  }
  set tableViewCanPerformPrimaryActionForRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => boolean) {
    this.searchResultsDelegate.tableViewCanPerformPrimaryActionForRowAtIndexPath = value;
  }
  set tableViewPerformPrimaryActionForRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => void) {
    this.searchResultsDelegate.tableViewPerformPrimaryActionForRowAtIndexPath = value;
  }
  set tableViewEditingStyleForRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => interop.Enum<typeof UITableViewCellEditingStyle>) {
    this.searchResultsDelegate.tableViewEditingStyleForRowAtIndexPath = value;
  }
  set tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => string) {
    this.searchResultsDelegate.tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath = value;
  }
  set tableViewEditActionsForRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => NSArray) {
    this.searchResultsDelegate.tableViewEditActionsForRowAtIndexPath = value;
  }
  set tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => UISwipeActionsConfiguration) {
    this.searchResultsDelegate.tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath = value;
  }
  set tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => UISwipeActionsConfiguration) {
    this.searchResultsDelegate.tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath = value;
  }
  set tableViewShouldIndentWhileEditingRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => boolean) {
    this.searchResultsDelegate.tableViewShouldIndentWhileEditingRowAtIndexPath = value;
  }
  set tableViewWillBeginEditingRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => void) {
    this.searchResultsDelegate.tableViewWillBeginEditingRowAtIndexPath = value;
  }
  set tableViewDidEndEditingRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath | null) => void) {
    this.searchResultsDelegate.tableViewDidEndEditingRowAtIndexPath = value;
  }
  set tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(value: (tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath) => NSIndexPath) {
    this.searchResultsDelegate.tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath = value;
  }
  set tableViewIndentationLevelForRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => number) {
    this.searchResultsDelegate.tableViewIndentationLevelForRowAtIndexPath = value;
  }
  set tableViewShouldShowMenuForRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => boolean) {
    this.searchResultsDelegate.tableViewShouldShowMenuForRowAtIndexPath = value;
  }
  set tableViewCanPerformActionForRowAtIndexPathWithSender(value: (tableView: UITableView, action: string, indexPath: NSIndexPath, sender: interop.Object | null) => boolean) {
    this.searchResultsDelegate.tableViewCanPerformActionForRowAtIndexPathWithSender = value;
  }
  set tableViewPerformActionForRowAtIndexPathWithSender(value: (tableView: UITableView, action: string, indexPath: NSIndexPath, sender: interop.Object | null) => void) {
    this.searchResultsDelegate.tableViewPerformActionForRowAtIndexPathWithSender = value;
  }
  set tableViewCanFocusRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => boolean) {
    this.searchResultsDelegate.tableViewCanFocusRowAtIndexPath = value;
  }
  set tableViewShouldUpdateFocusInContext(value: (tableView: UITableView, context: UITableViewFocusUpdateContext) => boolean) {
    this.searchResultsDelegate.tableViewShouldUpdateFocusInContext = value;
  }
  set tableViewDidUpdateFocusInContextWithAnimationCoordinator(value: (tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator) => void) {
    this.searchResultsDelegate.tableViewDidUpdateFocusInContextWithAnimationCoordinator = value;
  }
  set indexPathForPreferredFocusedViewInTableView(value: (tableView: UITableView) => NSIndexPath) {
    this.searchResultsDelegate.indexPathForPreferredFocusedViewInTableView = value;
  }
  set tableViewSelectionFollowsFocusForRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => boolean) {
    this.searchResultsDelegate.tableViewSelectionFollowsFocusForRowAtIndexPath = value;
  }
  set tableViewShouldSpringLoadRowAtIndexPathWithContext(value: (tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext) => boolean) {
    this.searchResultsDelegate.tableViewShouldSpringLoadRowAtIndexPathWithContext = value;
  }
  set tableViewShouldBeginMultipleSelectionInteractionAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => boolean) {
    this.searchResultsDelegate.tableViewShouldBeginMultipleSelectionInteractionAtIndexPath = value;
  }
  set tableViewDidBeginMultipleSelectionInteractionAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => void) {
    this.searchResultsDelegate.tableViewDidBeginMultipleSelectionInteractionAtIndexPath = value;
  }
  set tableViewDidEndMultipleSelectionInteraction(value: (tableView: UITableView) => void) {
    this.searchResultsDelegate.tableViewDidEndMultipleSelectionInteraction = value;
  }
  set tableViewContextMenuConfigurationForRowAtIndexPathPoint(value: (tableView: UITableView, indexPath: NSIndexPath, point: CGPoint) => UIContextMenuConfiguration) {
    this.searchResultsDelegate.tableViewContextMenuConfigurationForRowAtIndexPathPoint = value;
  }
  set tableViewPreviewForHighlightingContextMenuWithConfiguration(value: (tableView: UITableView, configuration: UIContextMenuConfiguration) => UITargetedPreview) {
    this.searchResultsDelegate.tableViewPreviewForHighlightingContextMenuWithConfiguration = value;
  }
  set tableViewPreviewForDismissingContextMenuWithConfiguration(value: (tableView: UITableView, configuration: UIContextMenuConfiguration) => UITargetedPreview) {
    this.searchResultsDelegate.tableViewPreviewForDismissingContextMenuWithConfiguration = value;
  }
  set tableViewWillPerformPreviewActionForMenuWithConfigurationAnimator(value: (tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionCommitAnimating) => void) {
    this.searchResultsDelegate.tableViewWillPerformPreviewActionForMenuWithConfigurationAnimator = value;
  }
  set tableViewWillDisplayContextMenuWithConfigurationAnimator(value: (tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating | null) => void) {
    this.searchResultsDelegate.tableViewWillDisplayContextMenuWithConfigurationAnimator = value;
  }
  set tableViewWillEndContextMenuInteractionWithConfigurationAnimator(value: (tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating | null) => void) {
    this.searchResultsDelegate.tableViewWillEndContextMenuInteractionWithConfigurationAnimator = value;
  }
}

export class HTMLUISpringTimingParametersElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UISpringTimingParameters.new();

  get initialVelocity(): CGVector { return this.nativeObject.initialVelocity; }
  get timingCurveType(): interop.Enum<typeof UITimingCurveType> { return this.nativeObject.timingCurveType; }
  get cubicTimingParameters(): UICubicTimingParameters { return this.nativeObject.cubicTimingParameters; }
  get springTimingParameters(): UISpringTimingParameters { return this.nativeObject.springTimingParameters; }
}

export class HTMLUIPasteControlConfigurationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPasteControlConfiguration.new();

  get displayMode(): interop.Enum<typeof UIPasteControlDisplayMode> { return this.nativeObject.displayMode; }
  set displayMode(value: interop.Enum<typeof UIPasteControlDisplayMode>) { this.nativeObject.displayMode = value; }
  get cornerStyle(): interop.Enum<typeof UIButtonConfigurationCornerStyle> { return this.nativeObject.cornerStyle; }
  set cornerStyle(value: interop.Enum<typeof UIButtonConfigurationCornerStyle>) { this.nativeObject.cornerStyle = value; }
  get cornerRadius(): number { return this.nativeObject.cornerRadius; }
  set cornerRadius(value: number) { this.nativeObject.cornerRadius = value; }
  get baseForegroundColor(): UIColor { return this.nativeObject.baseForegroundColor; }
  set baseForegroundColor(value: UIColor) { this.nativeObject.baseForegroundColor = value; }
  get baseBackgroundColor(): UIColor { return this.nativeObject.baseBackgroundColor; }
  set baseBackgroundColor(value: UIColor) { this.nativeObject.baseBackgroundColor = value; }
}

export class HTMLUIPageControlProgressElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPageControlProgress.new();
  get delegate(): UIPageControlProgressDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UIPageControlProgressDelegateImpl.new();
    }
    return this.nativeObject.delegate as UIPageControlProgressDelegateImpl;
  }

  get currentProgress(): number { return this.nativeObject.currentProgress; }
  set currentProgress(value: number) { this.nativeObject.currentProgress = value; }
  get isProgressVisible(): boolean { return this.nativeObject.isProgressVisible; }

  set pageControlProgressInitialProgressForPage(value: (progress: UIPageControlProgress, page: number) => number) {
    this.delegate.pageControlProgressInitialProgressForPage = value;
  }
  set pageControlProgressVisibilityDidChange(value: (progress: UIPageControlProgress) => void) {
    this.delegate.pageControlProgressVisibilityDidChange = value;
  }
}

export class HTMLUITextInputContextElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITextInputContext.new();

  get isPencilInputExpected(): boolean { return this.nativeObject.isPencilInputExpected; }
  set isPencilInputExpected(value: boolean) { this.nativeObject.isPencilInputExpected = value; }
  get isDictationInputExpected(): boolean { return this.nativeObject.isDictationInputExpected; }
  set isDictationInputExpected(value: boolean) { this.nativeObject.isDictationInputExpected = value; }
  get isHardwareKeyboardInputExpected(): boolean { return this.nativeObject.isHardwareKeyboardInputExpected; }
  set isHardwareKeyboardInputExpected(value: boolean) { this.nativeObject.isHardwareKeyboardInputExpected = value; }
}

export class HTMLUILocalizedIndexedCollationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UILocalizedIndexedCollation.new();

  get sectionTitles(): NSArray { return this.nativeObject.sectionTitles; }
  get sectionIndexTitles(): NSArray { return this.nativeObject.sectionIndexTitles; }
}

export class HTMLUIResolvedShapeElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIResolvedShape.new();

  get shape(): UIShape { return this.nativeObject.shape; }
  get boundingRect(): CGRect { return this.nativeObject.boundingRect; }
  get path(): UIBezierPath { return this.nativeObject.path; }
}

export class HTMLUIHoverStyleElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIHoverStyle.new();

  get effect(): UIHoverEffect { return this.nativeObject.effect; }
  set effect(value: UIHoverEffect) { this.nativeObject.effect = value; }
  get shape(): UIShape { return this.nativeObject.shape; }
  set shape(value: UIShape) { this.nativeObject.shape = value; }
  get isEnabled(): boolean { return this.nativeObject.isEnabled; }
  set isEnabled(value: boolean) { this.nativeObject.isEnabled = value; }
}

export class HTMLUIHoverAutomaticEffectElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIHoverAutomaticEffect.new();

  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUIHoverHighlightEffectElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIHoverHighlightEffect.new();

  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUIFocusSystemElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIFocusSystem.new();

  get focusedItem(): UIFocusItem { return this.nativeObject.focusedItem; }
}

export class HTMLUIListContentImagePropertiesElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIListContentImageProperties.new();

  get preferredSymbolConfiguration(): UIImageSymbolConfiguration { return this.nativeObject.preferredSymbolConfiguration; }
  set preferredSymbolConfiguration(value: UIImageSymbolConfiguration) { this.nativeObject.preferredSymbolConfiguration = value; }
  get tintColor(): UIColor { return this.nativeObject.tintColor; }
  set tintColor(value: UIColor) { this.nativeObject.tintColor = value; }
  get tintColorTransformer(): (p1: UIColor) => UIColor { return this.nativeObject.tintColorTransformer; }
  set tintColorTransformer(value: (p1: UIColor) => UIColor) { this.nativeObject.tintColorTransformer = value; }
  get cornerRadius(): number { return this.nativeObject.cornerRadius; }
  set cornerRadius(value: number) { this.nativeObject.cornerRadius = value; }
  get maximumSize(): CGSize { return this.nativeObject.maximumSize; }
  set maximumSize(value: CGSize) { this.nativeObject.maximumSize = value; }
  get reservedLayoutSize(): CGSize { return this.nativeObject.reservedLayoutSize; }
  set reservedLayoutSize(value: CGSize) { this.nativeObject.reservedLayoutSize = value; }
  get accessibilityIgnoresInvertColors(): boolean { return this.nativeObject.accessibilityIgnoresInvertColors; }
  set accessibilityIgnoresInvertColors(value: boolean) { this.nativeObject.accessibilityIgnoresInvertColors = value; }
}

export class HTMLUISceneOpenExternalURLOptionsElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UISceneOpenExternalURLOptions.new();

  get universalLinksOnly(): boolean { return this.nativeObject.universalLinksOnly; }
  set universalLinksOnly(value: boolean) { this.nativeObject.universalLinksOnly = value; }
  get eventAttribution(): UIEventAttribution { return this.nativeObject.eventAttribution; }
  set eventAttribution(value: UIEventAttribution) { this.nativeObject.eventAttribution = value; }
}

export class HTMLUISceneConnectionOptionsElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UISceneConnectionOptions.new();

  get URLContexts(): NSSet { return this.nativeObject.URLContexts; }
  get sourceApplication(): string { return this.nativeObject.sourceApplication; }
  get handoffUserActivityType(): string { return this.nativeObject.handoffUserActivityType; }
  get userActivities(): NSSet { return this.nativeObject.userActivities; }
  get notificationResponse(): UNNotificationResponse { return this.nativeObject.notificationResponse; }
  get shortcutItem(): UIApplicationShortcutItem { return this.nativeObject.shortcutItem; }
  get cloudKitShareMetadata(): CKShareMetadata { return this.nativeObject.cloudKitShareMetadata; }
}

export class HTMLUILargeContentViewerInteractionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UILargeContentViewerInteraction.new();
  get delegate(): UILargeContentViewerInteractionDelegateImpl {
    // delegate is readonly, so not lazy-initialized.
    return this.nativeObject.delegate as UILargeContentViewerInteractionDelegateImpl;
  }

  get gestureRecognizerForExclusionRelationship(): UIGestureRecognizer { return this.nativeObject.gestureRecognizerForExclusionRelationship; }
  get view(): UIView { return this.nativeObject.view; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }

  set largeContentViewerInteractionDidEndOnItemAtPoint(value: (interaction: UILargeContentViewerInteraction, item: UILargeContentViewerItem | null, point: CGPoint) => void) {
    this.delegate.largeContentViewerInteractionDidEndOnItemAtPoint = value;
  }
  set largeContentViewerInteractionItemAtPoint(value: (interaction: UILargeContentViewerInteraction, point: CGPoint) => UILargeContentViewerItem) {
    this.delegate.largeContentViewerInteractionItemAtPoint = value;
  }
  set viewControllerForLargeContentViewerInteraction(value: (interaction: UILargeContentViewerInteraction) => UIViewController) {
    this.delegate.viewControllerForLargeContentViewerInteraction = value;
  }
}

export class HTMLUIImageAssetElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIImageAsset.new();

}

export class HTMLNSTextAttachmentViewProviderElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTextAttachmentViewProvider.new();

  get textAttachment(): NSTextAttachment | null { return this.nativeObject.textAttachment; }
  get textLayoutManager(): NSTextLayoutManager { return this.nativeObject.textLayoutManager; }
  get location(): NSTextLocation { return this.nativeObject.location; }
  get view(): UIView { return this.nativeObject.view; }
  set view(value: UIView) { this.nativeObject.view = value; }
  get tracksTextAttachmentViewBounds(): boolean { return this.nativeObject.tracksTextAttachmentViewBounds; }
  set tracksTextAttachmentViewBounds(value: boolean) { this.nativeObject.tracksTextAttachmentViewBounds = value; }
}

export class HTMLUIGraphicsRendererElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIGraphicsRenderer.new();

  get format(): UIGraphicsRendererFormat { return this.nativeObject.format; }
  get allowsImageOutput(): boolean { return this.nativeObject.allowsImageOutput; }
}

export class HTMLUIVisualEffectElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIVisualEffect.new();

}

export class HTMLUIDocumentElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIDocument.new();

  get fileURL(): NSURL { return this.nativeObject.fileURL; }
  get localizedName(): string { return this.nativeObject.localizedName; }
  get fileType(): string { return this.nativeObject.fileType; }
  get fileModificationDate(): NSDate { return this.nativeObject.fileModificationDate; }
  set fileModificationDate(value: NSDate) { this.nativeObject.fileModificationDate = value; }
  get documentState(): interop.Enum<typeof UIDocumentState> { return this.nativeObject.documentState; }
  get progress(): NSProgress { return this.nativeObject.progress; }
  get undoManager(): NSUndoManager { return this.nativeObject.undoManager; }
  set undoManager(value: NSUndoManager) { this.nativeObject.undoManager = value; }
  get hasUnsavedChanges(): boolean { return this.nativeObject.hasUnsavedChanges; }
  get savingFileType(): string { return this.nativeObject.savingFileType; }
  get userActivity(): NSUserActivity { return this.nativeObject.userActivity; }
  set userActivity(value: NSUserActivity) { this.nativeObject.userActivity = value; }
  get presentedItemURL(): NSURL { return this.nativeObject.presentedItemURL; }
  get presentedItemOperationQueue(): NSOperationQueue { return this.nativeObject.presentedItemOperationQueue; }
  get observedPresentedItemUbiquityAttributes(): NSSet { return this.nativeObject.observedPresentedItemUbiquityAttributes; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUIListContentConfigurationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIListContentConfiguration.new();

  get image(): UIImage { return this.nativeObject.image; }
  set image(value: UIImage) { this.nativeObject.image = value; }
  get imageProperties(): UIListContentImageProperties { return this.nativeObject.imageProperties; }
  get text(): string { return this.nativeObject.text; }
  set text(value: string) { this.nativeObject.text = value; }
  get attributedText(): NSAttributedString { return this.nativeObject.attributedText; }
  set attributedText(value: NSAttributedString) { this.nativeObject.attributedText = value; }
  get textProperties(): UIListContentTextProperties { return this.nativeObject.textProperties; }
  get secondaryText(): string { return this.nativeObject.secondaryText; }
  set secondaryText(value: string) { this.nativeObject.secondaryText = value; }
  get secondaryAttributedText(): NSAttributedString { return this.nativeObject.secondaryAttributedText; }
  set secondaryAttributedText(value: NSAttributedString) { this.nativeObject.secondaryAttributedText = value; }
  get secondaryTextProperties(): UIListContentTextProperties { return this.nativeObject.secondaryTextProperties; }
  get axesPreservingSuperviewLayoutMargins(): interop.Enum<typeof UIAxis> { return this.nativeObject.axesPreservingSuperviewLayoutMargins; }
  set axesPreservingSuperviewLayoutMargins(value: interop.Enum<typeof UIAxis>) { this.nativeObject.axesPreservingSuperviewLayoutMargins = value; }
  get directionalLayoutMargins(): NSDirectionalEdgeInsets { return this.nativeObject.directionalLayoutMargins; }
  set directionalLayoutMargins(value: NSDirectionalEdgeInsets) { this.nativeObject.directionalLayoutMargins = value; }
  get prefersSideBySideTextAndSecondaryText(): boolean { return this.nativeObject.prefersSideBySideTextAndSecondaryText; }
  set prefersSideBySideTextAndSecondaryText(value: boolean) { this.nativeObject.prefersSideBySideTextAndSecondaryText = value; }
  get imageToTextPadding(): number { return this.nativeObject.imageToTextPadding; }
  set imageToTextPadding(value: number) { this.nativeObject.imageToTextPadding = value; }
  get textToSecondaryTextHorizontalPadding(): number { return this.nativeObject.textToSecondaryTextHorizontalPadding; }
  set textToSecondaryTextHorizontalPadding(value: number) { this.nativeObject.textToSecondaryTextHorizontalPadding = value; }
  get textToSecondaryTextVerticalPadding(): number { return this.nativeObject.textToSecondaryTextVerticalPadding; }
  set textToSecondaryTextVerticalPadding(value: number) { this.nativeObject.textToSecondaryTextVerticalPadding = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUIListSeparatorConfigurationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIListSeparatorConfiguration.new();

  get topSeparatorVisibility(): interop.Enum<typeof UIListSeparatorVisibility> { return this.nativeObject.topSeparatorVisibility; }
  set topSeparatorVisibility(value: interop.Enum<typeof UIListSeparatorVisibility>) { this.nativeObject.topSeparatorVisibility = value; }
  get bottomSeparatorVisibility(): interop.Enum<typeof UIListSeparatorVisibility> { return this.nativeObject.bottomSeparatorVisibility; }
  set bottomSeparatorVisibility(value: interop.Enum<typeof UIListSeparatorVisibility>) { this.nativeObject.bottomSeparatorVisibility = value; }
  get topSeparatorInsets(): NSDirectionalEdgeInsets { return this.nativeObject.topSeparatorInsets; }
  set topSeparatorInsets(value: NSDirectionalEdgeInsets) { this.nativeObject.topSeparatorInsets = value; }
  get bottomSeparatorInsets(): NSDirectionalEdgeInsets { return this.nativeObject.bottomSeparatorInsets; }
  set bottomSeparatorInsets(value: NSDirectionalEdgeInsets) { this.nativeObject.bottomSeparatorInsets = value; }
  get color(): UIColor { return this.nativeObject.color; }
  set color(value: UIColor) { this.nativeObject.color = value; }
  get multipleSelectionColor(): UIColor { return this.nativeObject.multipleSelectionColor; }
  set multipleSelectionColor(value: UIColor) { this.nativeObject.multipleSelectionColor = value; }
  get visualEffect(): UIVisualEffect { return this.nativeObject.visualEffect; }
  set visualEffect(value: UIVisualEffect) { this.nativeObject.visualEffect = value; }
}

export class HTMLNSDiffableDataSourceSnapshotElement<SectionIdentifierType = interop.Object, ItemIdentifierType = interop.Object> extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSDiffableDataSourceSnapshot.new();

  get numberOfItems(): number { return this.nativeObject.numberOfItems; }
  get numberOfSections(): number { return this.nativeObject.numberOfSections; }
  get sectionIdentifiers(): NSArray { return this.nativeObject.sectionIdentifiers; }
  get itemIdentifiers(): NSArray { return this.nativeObject.itemIdentifiers; }
  get reloadedSectionIdentifiers(): NSArray { return this.nativeObject.reloadedSectionIdentifiers; }
  get reloadedItemIdentifiers(): NSArray { return this.nativeObject.reloadedItemIdentifiers; }
  get reconfiguredItemIdentifiers(): NSArray { return this.nativeObject.reconfiguredItemIdentifiers; }
}

export class HTMLUIContextualActionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIContextualAction.new();

  get handler(): (p1: UIContextualAction, p2: UIView, p3: (p1: boolean) => void) => void { return this.nativeObject.handler; }
  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get backgroundColor(): UIColor { return this.nativeObject.backgroundColor; }
  set backgroundColor(value: UIColor) { this.nativeObject.backgroundColor = value; }
  get image(): UIImage { return this.nativeObject.image; }
  set image(value: UIImage) { this.nativeObject.image = value; }
}

export class HTMLUICellAccessoryLabelElement extends HTMLUICellAccessoryElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICellAccessoryLabel.new();

  get text(): string { return this.nativeObject.text; }
  get font(): UIFont { return this.nativeObject.font; }
  set font(value: UIFont) { this.nativeObject.font = value; }
  get adjustsFontForContentSizeCategory(): boolean { return this.nativeObject.adjustsFontForContentSizeCategory; }
  set adjustsFontForContentSizeCategory(value: boolean) { this.nativeObject.adjustsFontForContentSizeCategory = value; }
}

export class HTMLUICellAccessoryMultiselectElement extends HTMLUICellAccessoryElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICellAccessoryMultiselect.new();

  get backgroundColor(): UIColor { return this.nativeObject.backgroundColor; }
  set backgroundColor(value: UIColor) { this.nativeObject.backgroundColor = value; }
}

export class HTMLUICellAccessoryReorderElement extends HTMLUICellAccessoryElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICellAccessoryReorder.new();

  get showsVerticalSeparator(): boolean { return this.nativeObject.showsVerticalSeparator; }
  set showsVerticalSeparator(value: boolean) { this.nativeObject.showsVerticalSeparator = value; }
}

export class HTMLUISceneOpenURLOptionsElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UISceneOpenURLOptions.new();

  get sourceApplication(): string { return this.nativeObject.sourceApplication; }
  get annotation(): interop.Object { return this.nativeObject.annotation; }
  get openInPlace(): boolean { return this.nativeObject.openInPlace; }
  get eventAttribution(): UIEventAttribution { return this.nativeObject.eventAttribution; }
}

export class HTMLUICellAccessoryCheckmarkElement extends HTMLUICellAccessoryElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICellAccessoryCheckmark.new();

}

export class HTMLNSCollectionLayoutDimensionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSCollectionLayoutDimension.new();

  get isFractionalWidth(): boolean { return this.nativeObject.isFractionalWidth; }
  get isFractionalHeight(): boolean { return this.nativeObject.isFractionalHeight; }
  get isAbsolute(): boolean { return this.nativeObject.isAbsolute; }
  get isEstimated(): boolean { return this.nativeObject.isEstimated; }
  get isUniformAcrossSiblings(): boolean { return this.nativeObject.isUniformAcrossSiblings; }
  get dimension(): number { return this.nativeObject.dimension; }
}

export class HTMLNSCollectionLayoutGroupCustomItemElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSCollectionLayoutGroupCustomItem.new();

  get frame(): CGRect { return this.nativeObject.frame; }
  get zIndex(): number { return this.nativeObject.zIndex; }
}

export class HTMLNSCollectionLayoutSectionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSCollectionLayoutSection.new();

  get contentInsets(): NSDirectionalEdgeInsets { return this.nativeObject.contentInsets; }
  set contentInsets(value: NSDirectionalEdgeInsets) { this.nativeObject.contentInsets = value; }
  get interGroupSpacing(): number { return this.nativeObject.interGroupSpacing; }
  set interGroupSpacing(value: number) { this.nativeObject.interGroupSpacing = value; }
  get contentInsetsReference(): interop.Enum<typeof UIContentInsetsReference> { return this.nativeObject.contentInsetsReference; }
  set contentInsetsReference(value: interop.Enum<typeof UIContentInsetsReference>) { this.nativeObject.contentInsetsReference = value; }
  get supplementaryContentInsetsReference(): interop.Enum<typeof UIContentInsetsReference> { return this.nativeObject.supplementaryContentInsetsReference; }
  set supplementaryContentInsetsReference(value: interop.Enum<typeof UIContentInsetsReference>) { this.nativeObject.supplementaryContentInsetsReference = value; }
  get orthogonalScrollingBehavior(): interop.Enum<typeof UICollectionLayoutSectionOrthogonalScrollingBehavior> { return this.nativeObject.orthogonalScrollingBehavior; }
  set orthogonalScrollingBehavior(value: interop.Enum<typeof UICollectionLayoutSectionOrthogonalScrollingBehavior>) { this.nativeObject.orthogonalScrollingBehavior = value; }
  get orthogonalScrollingProperties(): UICollectionLayoutSectionOrthogonalScrollingProperties { return this.nativeObject.orthogonalScrollingProperties; }
  get boundarySupplementaryItems(): NSArray { return this.nativeObject.boundarySupplementaryItems; }
  set boundarySupplementaryItems(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.boundarySupplementaryItems = value; }
  get visibleItemsInvalidationHandler(): (p1: NSArray<interop.Object> | Array<interop.Object>, p2: CGPoint, p3: NSCollectionLayoutEnvironment) => void { return this.nativeObject.visibleItemsInvalidationHandler; }
  set visibleItemsInvalidationHandler(value: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: CGPoint, p3: NSCollectionLayoutEnvironment) => void) { this.nativeObject.visibleItemsInvalidationHandler = value; }
  get decorationItems(): NSArray { return this.nativeObject.decorationItems; }
  set decorationItems(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.decorationItems = value; }
  get supplementariesFollowContentInsets(): boolean { return this.nativeObject.supplementariesFollowContentInsets; }
  set supplementariesFollowContentInsets(value: boolean) { this.nativeObject.supplementariesFollowContentInsets = value; }
}

export class HTMLUICollectionViewCompositionalLayoutConfigurationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICollectionViewCompositionalLayoutConfiguration.new();

  get scrollDirection(): interop.Enum<typeof UICollectionViewScrollDirection> { return this.nativeObject.scrollDirection; }
  set scrollDirection(value: interop.Enum<typeof UICollectionViewScrollDirection>) { this.nativeObject.scrollDirection = value; }
  get interSectionSpacing(): number { return this.nativeObject.interSectionSpacing; }
  set interSectionSpacing(value: number) { this.nativeObject.interSectionSpacing = value; }
  get boundarySupplementaryItems(): NSArray { return this.nativeObject.boundarySupplementaryItems; }
  set boundarySupplementaryItems(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.boundarySupplementaryItems = value; }
  get contentInsetsReference(): interop.Enum<typeof UIContentInsetsReference> { return this.nativeObject.contentInsetsReference; }
  set contentInsetsReference(value: interop.Enum<typeof UIContentInsetsReference>) { this.nativeObject.contentInsetsReference = value; }
}

export class HTMLNSLayoutAnchorElement<AnchorType = interop.Object> extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSLayoutAnchor.new();

}

export class HTMLUITextInputPasswordRulesElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITextInputPasswordRules.new();

  get passwordRulesDescriptor(): string { return this.nativeObject.passwordRulesDescriptor; }
}

export class HTMLUICollectionViewUpdateItemElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICollectionViewUpdateItem.new();

  get indexPathBeforeUpdate(): NSIndexPath { return this.nativeObject.indexPathBeforeUpdate; }
  get indexPathAfterUpdate(): NSIndexPath { return this.nativeObject.indexPathAfterUpdate; }
  get updateAction(): interop.Enum<typeof UICollectionUpdateAction> { return this.nativeObject.updateAction; }
}

export class HTMLUICollectionViewPlaceholderElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICollectionViewPlaceholder.new();

  get cellUpdateHandler(): (p1: UICollectionViewCell) => void { return this.nativeObject.cellUpdateHandler; }
  set cellUpdateHandler(value: (p1: UICollectionViewCell) => void) { this.nativeObject.cellUpdateHandler = value; }
}

export class HTMLUIButtonConfigurationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIButtonConfiguration.new();

  get background(): UIBackgroundConfiguration { return this.nativeObject.background; }
  set background(value: UIBackgroundConfiguration) { this.nativeObject.background = value; }
  get cornerStyle(): interop.Enum<typeof UIButtonConfigurationCornerStyle> { return this.nativeObject.cornerStyle; }
  set cornerStyle(value: interop.Enum<typeof UIButtonConfigurationCornerStyle>) { this.nativeObject.cornerStyle = value; }
  get buttonSize(): interop.Enum<typeof UIButtonConfigurationSize> { return this.nativeObject.buttonSize; }
  set buttonSize(value: interop.Enum<typeof UIButtonConfigurationSize>) { this.nativeObject.buttonSize = value; }
  get macIdiomStyle(): interop.Enum<typeof UIButtonConfigurationMacIdiomStyle> { return this.nativeObject.macIdiomStyle; }
  set macIdiomStyle(value: interop.Enum<typeof UIButtonConfigurationMacIdiomStyle>) { this.nativeObject.macIdiomStyle = value; }
  get baseForegroundColor(): UIColor { return this.nativeObject.baseForegroundColor; }
  set baseForegroundColor(value: UIColor) { this.nativeObject.baseForegroundColor = value; }
  get baseBackgroundColor(): UIColor { return this.nativeObject.baseBackgroundColor; }
  set baseBackgroundColor(value: UIColor) { this.nativeObject.baseBackgroundColor = value; }
  get image(): UIImage { return this.nativeObject.image; }
  set image(value: UIImage) { this.nativeObject.image = value; }
  get imageColorTransformer(): (p1: UIColor) => UIColor { return this.nativeObject.imageColorTransformer; }
  set imageColorTransformer(value: (p1: UIColor) => UIColor) { this.nativeObject.imageColorTransformer = value; }
  get preferredSymbolConfigurationForImage(): UIImageSymbolConfiguration { return this.nativeObject.preferredSymbolConfigurationForImage; }
  set preferredSymbolConfigurationForImage(value: UIImageSymbolConfiguration) { this.nativeObject.preferredSymbolConfigurationForImage = value; }
  get showsActivityIndicator(): boolean { return this.nativeObject.showsActivityIndicator; }
  set showsActivityIndicator(value: boolean) { this.nativeObject.showsActivityIndicator = value; }
  get activityIndicatorColorTransformer(): (p1: UIColor) => UIColor { return this.nativeObject.activityIndicatorColorTransformer; }
  set activityIndicatorColorTransformer(value: (p1: UIColor) => UIColor) { this.nativeObject.activityIndicatorColorTransformer = value; }
  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get attributedTitle(): NSAttributedString { return this.nativeObject.attributedTitle; }
  set attributedTitle(value: NSAttributedString) { this.nativeObject.attributedTitle = value; }
  get titleTextAttributesTransformer(): (p1: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) => NSDictionary { return this.nativeObject.titleTextAttributesTransformer; }
  set titleTextAttributesTransformer(value: (p1: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) => NSDictionary) { this.nativeObject.titleTextAttributesTransformer = value; }
  get titleLineBreakMode(): interop.Enum<typeof NSLineBreakMode> { return this.nativeObject.titleLineBreakMode; }
  set titleLineBreakMode(value: interop.Enum<typeof NSLineBreakMode>) { this.nativeObject.titleLineBreakMode = value; }
  get subtitle(): string { return this.nativeObject.subtitle; }
  set subtitle(value: string) { this.nativeObject.subtitle = value; }
  get attributedSubtitle(): NSAttributedString { return this.nativeObject.attributedSubtitle; }
  set attributedSubtitle(value: NSAttributedString) { this.nativeObject.attributedSubtitle = value; }
  get subtitleTextAttributesTransformer(): (p1: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) => NSDictionary { return this.nativeObject.subtitleTextAttributesTransformer; }
  set subtitleTextAttributesTransformer(value: (p1: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) => NSDictionary) { this.nativeObject.subtitleTextAttributesTransformer = value; }
  get subtitleLineBreakMode(): interop.Enum<typeof NSLineBreakMode> { return this.nativeObject.subtitleLineBreakMode; }
  set subtitleLineBreakMode(value: interop.Enum<typeof NSLineBreakMode>) { this.nativeObject.subtitleLineBreakMode = value; }
  get indicator(): interop.Enum<typeof UIButtonConfigurationIndicator> { return this.nativeObject.indicator; }
  set indicator(value: interop.Enum<typeof UIButtonConfigurationIndicator>) { this.nativeObject.indicator = value; }
  get indicatorColorTransformer(): (p1: UIColor) => UIColor { return this.nativeObject.indicatorColorTransformer; }
  set indicatorColorTransformer(value: (p1: UIColor) => UIColor) { this.nativeObject.indicatorColorTransformer = value; }
  get contentInsets(): NSDirectionalEdgeInsets { return this.nativeObject.contentInsets; }
  set contentInsets(value: NSDirectionalEdgeInsets) { this.nativeObject.contentInsets = value; }
  get imagePlacement(): interop.Enum<typeof NSDirectionalRectEdge> { return this.nativeObject.imagePlacement; }
  set imagePlacement(value: interop.Enum<typeof NSDirectionalRectEdge>) { this.nativeObject.imagePlacement = value; }
  get imagePadding(): number { return this.nativeObject.imagePadding; }
  set imagePadding(value: number) { this.nativeObject.imagePadding = value; }
  get titlePadding(): number { return this.nativeObject.titlePadding; }
  set titlePadding(value: number) { this.nativeObject.titlePadding = value; }
  get titleAlignment(): interop.Enum<typeof UIButtonConfigurationTitleAlignment> { return this.nativeObject.titleAlignment; }
  set titleAlignment(value: interop.Enum<typeof UIButtonConfigurationTitleAlignment>) { this.nativeObject.titleAlignment = value; }
  get automaticallyUpdateForSelection(): boolean { return this.nativeObject.automaticallyUpdateForSelection; }
  set automaticallyUpdateForSelection(value: boolean) { this.nativeObject.automaticallyUpdateForSelection = value; }
}

export class HTMLNSCollectionLayoutSizeElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSCollectionLayoutSize.new();

  get widthDimension(): NSCollectionLayoutDimension { return this.nativeObject.widthDimension; }
  get heightDimension(): NSCollectionLayoutDimension { return this.nativeObject.heightDimension; }
}

export class HTMLUIBarItemElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIBarItem.new();

  get isEnabled(): boolean { return this.nativeObject.isEnabled; }
  set isEnabled(value: boolean) { this.nativeObject.isEnabled = value; }
  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get image(): UIImage { return this.nativeObject.image; }
  set image(value: UIImage) { this.nativeObject.image = value; }
  get landscapeImagePhone(): UIImage { return this.nativeObject.landscapeImagePhone; }
  set landscapeImagePhone(value: UIImage) { this.nativeObject.landscapeImagePhone = value; }
  get largeContentSizeImage(): UIImage { return this.nativeObject.largeContentSizeImage; }
  set largeContentSizeImage(value: UIImage) { this.nativeObject.largeContentSizeImage = value; }
  get imageInsets(): UIEdgeInsets { return this.nativeObject.imageInsets; }
  set imageInsets(value: UIEdgeInsets) { this.nativeObject.imageInsets = value; }
  get landscapeImagePhoneInsets(): UIEdgeInsets { return this.nativeObject.landscapeImagePhoneInsets; }
  set landscapeImagePhoneInsets(value: UIEdgeInsets) { this.nativeObject.landscapeImagePhoneInsets = value; }
  get largeContentSizeImageInsets(): UIEdgeInsets { return this.nativeObject.largeContentSizeImageInsets; }
  set largeContentSizeImageInsets(value: UIEdgeInsets) { this.nativeObject.largeContentSizeImageInsets = value; }
  get tag(): number { return this.nativeObject.tag; }
  set tag(value: number) { this.nativeObject.tag = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUIAccessibilityCustomActionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIAccessibilityCustomAction.new();

  get name(): string { return this.nativeObject.name; }
  set name(value: string) { this.nativeObject.name = value; }
  get image(): UIImage { return this.nativeObject.image; }
  set image(value: UIImage) { this.nativeObject.image = value; }
  get attributedName(): NSAttributedString { return this.nativeObject.attributedName; }
  set attributedName(value: NSAttributedString) { this.nativeObject.attributedName = value; }
  get target(): interop.Object { return this.nativeObject.target; }
  set target(value: interop.Object) { this.nativeObject.target = value; }
  get selector(): string { return this.nativeObject.selector; }
  set selector(value: string) { this.nativeObject.selector = value; }
  get actionHandler(): (p1: UIAccessibilityCustomAction) => boolean { return this.nativeObject.actionHandler; }
  set actionHandler(value: (p1: UIAccessibilityCustomAction) => boolean) { this.nativeObject.actionHandler = value; }
}

export class HTMLUIAccelerometerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIAccelerometer.new();
  get delegate(): UIAccelerometerDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UIAccelerometerDelegateImpl.new();
    }
    return this.nativeObject.delegate as UIAccelerometerDelegateImpl;
  }

  get updateInterval(): number { return this.nativeObject.updateInterval; }
  set updateInterval(value: number) { this.nativeObject.updateInterval = value; }

  set accelerometerDidAccelerate(value: (accelerometer: UIAccelerometer, acceleration: UIAcceleration) => void) {
    this.delegate.accelerometerDidAccelerate = value;
  }
}

export class HTMLNSStringDrawingContextElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSStringDrawingContext.new();

  get minimumScaleFactor(): number { return this.nativeObject.minimumScaleFactor; }
  set minimumScaleFactor(value: number) { this.nativeObject.minimumScaleFactor = value; }
  get actualScaleFactor(): number { return this.nativeObject.actualScaleFactor; }
  get totalBounds(): CGRect { return this.nativeObject.totalBounds; }
  get minimumTrackingAdjustment(): number { return this.nativeObject.minimumTrackingAdjustment; }
  set minimumTrackingAdjustment(value: number) { this.nativeObject.minimumTrackingAdjustment = value; }
  get actualTrackingAdjustment(): number { return this.nativeObject.actualTrackingAdjustment; }
}

export class HTMLUILexiconEntryElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UILexiconEntry.new();

  get documentText(): string { return this.nativeObject.documentText; }
  get userInput(): string { return this.nativeObject.userInput; }
}

export class HTMLUIAccessibilityCustomRotorElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIAccessibilityCustomRotor.new();

  get name(): string { return this.nativeObject.name; }
  set name(value: string) { this.nativeObject.name = value; }
  get attributedName(): NSAttributedString { return this.nativeObject.attributedName; }
  set attributedName(value: NSAttributedString) { this.nativeObject.attributedName = value; }
  get itemSearchBlock(): (p1: UIAccessibilityCustomRotorSearchPredicate) => UIAccessibilityCustomRotorItemResult { return this.nativeObject.itemSearchBlock; }
  set itemSearchBlock(value: (p1: UIAccessibilityCustomRotorSearchPredicate) => UIAccessibilityCustomRotorItemResult) { this.nativeObject.itemSearchBlock = value; }
  get systemRotorType(): interop.Enum<typeof UIAccessibilityCustomSystemRotorType> { return this.nativeObject.systemRotorType; }
}

export class HTMLUIImageConfigurationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIImageConfiguration.new();

  get traitCollection(): UITraitCollection { return this.nativeObject.traitCollection; }
  get locale(): NSLocale { return this.nativeObject.locale; }
}

export class HTMLNSTextAttachmentElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTextAttachment.new();

  get contents(): NSData { return this.nativeObject.contents; }
  set contents(value: NSData) { this.nativeObject.contents = value; }
  get fileType(): string { return this.nativeObject.fileType; }
  set fileType(value: string) { this.nativeObject.fileType = value; }
  get image(): UIImage { return this.nativeObject.image; }
  set image(value: UIImage) { this.nativeObject.image = value; }
  get bounds(): CGRect { return this.nativeObject.bounds; }
  set bounds(value: CGRect) { this.nativeObject.bounds = value; }
  get fileWrapper(): NSFileWrapper { return this.nativeObject.fileWrapper; }
  set fileWrapper(value: NSFileWrapper) { this.nativeObject.fileWrapper = value; }
  get lineLayoutPadding(): number { return this.nativeObject.lineLayoutPadding; }
  set lineLayoutPadding(value: number) { this.nativeObject.lineLayoutPadding = value; }
  get allowsTextAttachmentView(): boolean { return this.nativeObject.allowsTextAttachmentView; }
  set allowsTextAttachmentView(value: boolean) { this.nativeObject.allowsTextAttachmentView = value; }
  get usesTextAttachmentView(): boolean { return this.nativeObject.usesTextAttachmentView; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUITraitUserInterfaceIdiomElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITraitUserInterfaceIdiom.new();

}

export class HTMLUITraitCollectionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITraitCollection.new();

  get userInterfaceIdiom(): interop.Enum<typeof UIUserInterfaceIdiom> { return this.nativeObject.userInterfaceIdiom; }
  get userInterfaceStyle(): interop.Enum<typeof UIUserInterfaceStyle> { return this.nativeObject.userInterfaceStyle; }
  get layoutDirection(): interop.Enum<typeof UITraitEnvironmentLayoutDirection> { return this.nativeObject.layoutDirection; }
  get displayScale(): number { return this.nativeObject.displayScale; }
  get horizontalSizeClass(): interop.Enum<typeof UIUserInterfaceSizeClass> { return this.nativeObject.horizontalSizeClass; }
  get verticalSizeClass(): interop.Enum<typeof UIUserInterfaceSizeClass> { return this.nativeObject.verticalSizeClass; }
  get forceTouchCapability(): interop.Enum<typeof UIForceTouchCapability> { return this.nativeObject.forceTouchCapability; }
  get preferredContentSizeCategory(): string { return this.nativeObject.preferredContentSizeCategory; }
  get displayGamut(): interop.Enum<typeof UIDisplayGamut> { return this.nativeObject.displayGamut; }
  get accessibilityContrast(): interop.Enum<typeof UIAccessibilityContrast> { return this.nativeObject.accessibilityContrast; }
  get userInterfaceLevel(): interop.Enum<typeof UIUserInterfaceLevel> { return this.nativeObject.userInterfaceLevel; }
  get legibilityWeight(): interop.Enum<typeof UILegibilityWeight> { return this.nativeObject.legibilityWeight; }
  get activeAppearance(): interop.Enum<typeof UIUserInterfaceActiveAppearance> { return this.nativeObject.activeAppearance; }
  get toolbarItemPresentationSize(): interop.Enum<typeof UINSToolbarItemPresentationSize> { return this.nativeObject.toolbarItemPresentationSize; }
  get imageDynamicRange(): interop.Enum<typeof UIImageDynamicRange> { return this.nativeObject.imageDynamicRange; }
  get typesettingLanguage(): string { return this.nativeObject.typesettingLanguage; }
  get sceneCaptureState(): interop.Enum<typeof UISceneCaptureState> { return this.nativeObject.sceneCaptureState; }
  get imageConfiguration(): UIImageConfiguration { return this.nativeObject.imageConfiguration; }
}

export class HTMLUIPasteConfigurationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPasteConfiguration.new();

  get acceptableTypeIdentifiers(): NSArray { return this.nativeObject.acceptableTypeIdentifiers; }
  set acceptableTypeIdentifiers(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.acceptableTypeIdentifiers = value; }
}

export class HTMLUITextInputModeElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITextInputMode.new();

  get primaryLanguage(): string { return this.nativeObject.primaryLanguage; }
}

export class HTMLUITextPositionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITextPosition.new();

}

export class HTMLUITextInputAssistantItemElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITextInputAssistantItem.new();

  get allowsHidingShortcuts(): boolean { return this.nativeObject.allowsHidingShortcuts; }
  set allowsHidingShortcuts(value: boolean) { this.nativeObject.allowsHidingShortcuts = value; }
  get leadingBarButtonGroups(): NSArray { return this.nativeObject.leadingBarButtonGroups; }
  set leadingBarButtonGroups(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.leadingBarButtonGroups = value; }
  get trailingBarButtonGroups(): NSArray { return this.nativeObject.trailingBarButtonGroups; }
  set trailingBarButtonGroups(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.trailingBarButtonGroups = value; }
}

export class HTMLNSCollectionLayoutEdgeSpacingElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSCollectionLayoutEdgeSpacing.new();

  get leading(): NSCollectionLayoutSpacing { return this.nativeObject.leading; }
  get top(): NSCollectionLayoutSpacing { return this.nativeObject.top; }
  get trailing(): NSCollectionLayoutSpacing { return this.nativeObject.trailing; }
  get bottom(): NSCollectionLayoutSpacing { return this.nativeObject.bottom; }
}

export class HTMLNSMutableParagraphStyleElement extends HTMLNSParagraphStyleElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSMutableParagraphStyle.new();

  get lineSpacing(): number { return this.nativeObject.lineSpacing; }
  set lineSpacing(value: number) { this.nativeObject.lineSpacing = value; }
  get paragraphSpacing(): number { return this.nativeObject.paragraphSpacing; }
  set paragraphSpacing(value: number) { this.nativeObject.paragraphSpacing = value; }
  get alignment(): interop.Enum<typeof NSTextAlignment> { return this.nativeObject.alignment; }
  set alignment(value: interop.Enum<typeof NSTextAlignment>) { this.nativeObject.alignment = value; }
  get firstLineHeadIndent(): number { return this.nativeObject.firstLineHeadIndent; }
  set firstLineHeadIndent(value: number) { this.nativeObject.firstLineHeadIndent = value; }
  get headIndent(): number { return this.nativeObject.headIndent; }
  set headIndent(value: number) { this.nativeObject.headIndent = value; }
  get tailIndent(): number { return this.nativeObject.tailIndent; }
  set tailIndent(value: number) { this.nativeObject.tailIndent = value; }
  get lineBreakMode(): interop.Enum<typeof NSLineBreakMode> { return this.nativeObject.lineBreakMode; }
  set lineBreakMode(value: interop.Enum<typeof NSLineBreakMode>) { this.nativeObject.lineBreakMode = value; }
  get minimumLineHeight(): number { return this.nativeObject.minimumLineHeight; }
  set minimumLineHeight(value: number) { this.nativeObject.minimumLineHeight = value; }
  get maximumLineHeight(): number { return this.nativeObject.maximumLineHeight; }
  set maximumLineHeight(value: number) { this.nativeObject.maximumLineHeight = value; }
  get baseWritingDirection(): interop.Enum<typeof NSWritingDirection> { return this.nativeObject.baseWritingDirection; }
  set baseWritingDirection(value: interop.Enum<typeof NSWritingDirection>) { this.nativeObject.baseWritingDirection = value; }
  get lineHeightMultiple(): number { return this.nativeObject.lineHeightMultiple; }
  set lineHeightMultiple(value: number) { this.nativeObject.lineHeightMultiple = value; }
  get paragraphSpacingBefore(): number { return this.nativeObject.paragraphSpacingBefore; }
  set paragraphSpacingBefore(value: number) { this.nativeObject.paragraphSpacingBefore = value; }
  get hyphenationFactor(): number { return this.nativeObject.hyphenationFactor; }
  set hyphenationFactor(value: number) { this.nativeObject.hyphenationFactor = value; }
  get usesDefaultHyphenation(): boolean { return this.nativeObject.usesDefaultHyphenation; }
  set usesDefaultHyphenation(value: boolean) { this.nativeObject.usesDefaultHyphenation = value; }
  get tabStops(): NSArray { return this.nativeObject.tabStops; }
  set tabStops(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.tabStops = value; }
  get defaultTabInterval(): number { return this.nativeObject.defaultTabInterval; }
  set defaultTabInterval(value: number) { this.nativeObject.defaultTabInterval = value; }
  get allowsDefaultTighteningForTruncation(): boolean { return this.nativeObject.allowsDefaultTighteningForTruncation; }
  set allowsDefaultTighteningForTruncation(value: boolean) { this.nativeObject.allowsDefaultTighteningForTruncation = value; }
  get lineBreakStrategy(): interop.Enum<typeof NSLineBreakStrategy> { return this.nativeObject.lineBreakStrategy; }
  set lineBreakStrategy(value: interop.Enum<typeof NSLineBreakStrategy>) { this.nativeObject.lineBreakStrategy = value; }
  get textLists(): NSArray { return this.nativeObject.textLists; }
  set textLists(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.textLists = value; }
}

export class HTMLUICommandAlternateElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICommandAlternate.new();

  get title(): string { return this.nativeObject.title; }
  get action(): string { return this.nativeObject.action; }
  get modifierFlags(): interop.Enum<typeof UIKeyModifierFlags> { return this.nativeObject.modifierFlags; }
}

export class HTMLNSLayoutConstraintElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSLayoutConstraint.new();

  get priority(): number { return this.nativeObject.priority; }
  set priority(value: number) { this.nativeObject.priority = value; }
  get shouldBeArchived(): boolean { return this.nativeObject.shouldBeArchived; }
  set shouldBeArchived(value: boolean) { this.nativeObject.shouldBeArchived = value; }
  get firstItem(): interop.Object { return this.nativeObject.firstItem; }
  get secondItem(): interop.Object { return this.nativeObject.secondItem; }
  get firstAttribute(): interop.Enum<typeof NSLayoutAttribute> { return this.nativeObject.firstAttribute; }
  get secondAttribute(): interop.Enum<typeof NSLayoutAttribute> { return this.nativeObject.secondAttribute; }
  get firstAnchor(): NSLayoutAnchor { return this.nativeObject.firstAnchor; }
  get secondAnchor(): NSLayoutAnchor { return this.nativeObject.secondAnchor; }
  get relation(): interop.Enum<typeof NSLayoutRelation> { return this.nativeObject.relation; }
  get multiplier(): number { return this.nativeObject.multiplier; }
  get constant(): number { return this.nativeObject.constant; }
  set constant(value: number) { this.nativeObject.constant = value; }
  get isActive(): boolean { return this.nativeObject.isActive; }
  set isActive(value: boolean) { this.nativeObject.isActive = value; }
  get identifier(): string { return this.nativeObject.identifier; }
  set identifier(value: string) { this.nativeObject.identifier = value; }
}

export class HTMLUITouchElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITouch.new();

  get timestamp(): number { return this.nativeObject.timestamp; }
  get phase(): interop.Enum<typeof UITouchPhase> { return this.nativeObject.phase; }
  get tapCount(): number { return this.nativeObject.tapCount; }
  get type(): interop.Enum<typeof UITouchType> { return this.nativeObject.type; }
  get majorRadius(): number { return this.nativeObject.majorRadius; }
  get majorRadiusTolerance(): number { return this.nativeObject.majorRadiusTolerance; }
  get window(): UIWindow { return this.nativeObject.window; }
  get view(): UIView { return this.nativeObject.view; }
  get gestureRecognizers(): NSArray { return this.nativeObject.gestureRecognizers; }
  get force(): number { return this.nativeObject.force; }
  get maximumPossibleForce(): number { return this.nativeObject.maximumPossibleForce; }
  get altitudeAngle(): number { return this.nativeObject.altitudeAngle; }
  get estimationUpdateIndex(): NSNumber { return this.nativeObject.estimationUpdateIndex; }
  get estimatedProperties(): interop.Enum<typeof UITouchProperties> { return this.nativeObject.estimatedProperties; }
  get estimatedPropertiesExpectingUpdates(): interop.Enum<typeof UITouchProperties> { return this.nativeObject.estimatedPropertiesExpectingUpdates; }
}

export class HTMLUITraitToolbarItemPresentationSizeElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITraitToolbarItemPresentationSize.new();

}

export class HTMLUITableViewRowActionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITableViewRowAction.new();

  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get backgroundColor(): UIColor { return this.nativeObject.backgroundColor; }
  set backgroundColor(value: UIColor) { this.nativeObject.backgroundColor = value; }
  get backgroundEffect(): UIVisualEffect { return this.nativeObject.backgroundEffect; }
  set backgroundEffect(value: UIVisualEffect) { this.nativeObject.backgroundEffect = value; }
}

export class HTMLUICollectionViewCellRegistrationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICollectionViewCellRegistration.new();

  get cellClass(): interop.Object { return this.nativeObject.cellClass; }
  get cellNib(): UINib { return this.nativeObject.cellNib; }
  get configurationHandler(): (p1: UICollectionViewCell, p2: NSIndexPath, p3: interop.Object) => void { return this.nativeObject.configurationHandler; }
}

export class HTMLUITraitLayoutDirectionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITraitLayoutDirection.new();

}

export class HTMLUIDeviceElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIDevice.new();

  get name(): string { return this.nativeObject.name; }
  get model(): string { return this.nativeObject.model; }
  get localizedModel(): string { return this.nativeObject.localizedModel; }
  get systemName(): string { return this.nativeObject.systemName; }
  get systemVersion(): string { return this.nativeObject.systemVersion; }
  get orientation(): interop.Enum<typeof UIDeviceOrientation> { return this.nativeObject.orientation; }
  get identifierForVendor(): NSUUID { return this.nativeObject.identifierForVendor; }
  get isGeneratingDeviceOrientationNotifications(): boolean { return this.nativeObject.isGeneratingDeviceOrientationNotifications; }
  get isBatteryMonitoringEnabled(): boolean { return this.nativeObject.isBatteryMonitoringEnabled; }
  set isBatteryMonitoringEnabled(value: boolean) { this.nativeObject.isBatteryMonitoringEnabled = value; }
  get batteryState(): interop.Enum<typeof UIDeviceBatteryState> { return this.nativeObject.batteryState; }
  get batteryLevel(): number { return this.nativeObject.batteryLevel; }
  get isProximityMonitoringEnabled(): boolean { return this.nativeObject.isProximityMonitoringEnabled; }
  set isProximityMonitoringEnabled(value: boolean) { this.nativeObject.isProximityMonitoringEnabled = value; }
  get proximityState(): boolean { return this.nativeObject.proximityState; }
  get isMultitaskingSupported(): boolean { return this.nativeObject.isMultitaskingSupported; }
  get userInterfaceIdiom(): interop.Enum<typeof UIUserInterfaceIdiom> { return this.nativeObject.userInterfaceIdiom; }
}

export class HTMLUILayoutGuideElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UILayoutGuide.new();

  get layoutFrame(): CGRect { return this.nativeObject.layoutFrame; }
  get owningView(): UIView { return this.nativeObject.owningView; }
  set owningView(value: UIView) { this.nativeObject.owningView = value; }
  get identifier(): string { return this.nativeObject.identifier; }
  set identifier(value: string) { this.nativeObject.identifier = value; }
  get leadingAnchor(): NSLayoutXAxisAnchor { return this.nativeObject.leadingAnchor; }
  get trailingAnchor(): NSLayoutXAxisAnchor { return this.nativeObject.trailingAnchor; }
  get leftAnchor(): NSLayoutXAxisAnchor { return this.nativeObject.leftAnchor; }
  get rightAnchor(): NSLayoutXAxisAnchor { return this.nativeObject.rightAnchor; }
  get topAnchor(): NSLayoutYAxisAnchor { return this.nativeObject.topAnchor; }
  get bottomAnchor(): NSLayoutYAxisAnchor { return this.nativeObject.bottomAnchor; }
  get widthAnchor(): NSLayoutDimension { return this.nativeObject.widthAnchor; }
  get heightAnchor(): NSLayoutDimension { return this.nativeObject.heightAnchor; }
  get centerXAnchor(): NSLayoutXAxisAnchor { return this.nativeObject.centerXAnchor; }
  get centerYAnchor(): NSLayoutYAxisAnchor { return this.nativeObject.centerYAnchor; }
  get hasAmbiguousLayout(): boolean { return this.nativeObject.hasAmbiguousLayout; }
}

export class HTMLUIColorElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIColor.new();

  get CGColor(): interop.Pointer { return this.nativeObject.CGColor; }
  get CIColor(): CIColor { return this.nativeObject.CIColor; }
  get accessibilityName(): string { return this.nativeObject.accessibilityName; }
}

export class HTMLUIResponderElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = UIResponder.new();

  get nextResponder(): UIResponder { return this.nativeObject.nextResponder; }
  get canBecomeFirstResponder(): boolean { return this.nativeObject.canBecomeFirstResponder; }
  get canResignFirstResponder(): boolean { return this.nativeObject.canResignFirstResponder; }
  get isFirstResponder(): boolean { return this.nativeObject.isFirstResponder; }
  get undoManager(): NSUndoManager { return this.nativeObject.undoManager; }
  get editingInteractionConfiguration(): interop.Enum<typeof UIEditingInteractionConfiguration> { return this.nativeObject.editingInteractionConfiguration; }
  get keyCommands(): NSArray { return this.nativeObject.keyCommands; }
  get inputView(): UIView { return this.nativeObject.inputView; }
  get inputAccessoryView(): UIView { return this.nativeObject.inputAccessoryView; }
  get inputAssistantItem(): UITextInputAssistantItem { return this.nativeObject.inputAssistantItem; }
  get inputViewController(): UIInputViewController { return this.nativeObject.inputViewController; }
  get inputAccessoryViewController(): UIInputViewController { return this.nativeObject.inputAccessoryViewController; }
  get textInputMode(): UITextInputMode { return this.nativeObject.textInputMode; }
  get textInputContextIdentifier(): string { return this.nativeObject.textInputContextIdentifier; }
  get userActivity(): NSUserActivity { return this.nativeObject.userActivity; }
  set userActivity(value: NSUserActivity) { this.nativeObject.userActivity = value; }
  get activityItemsConfiguration(): UIActivityItemsConfigurationReading { return this.nativeObject.activityItemsConfiguration; }
  set activityItemsConfiguration(value: UIActivityItemsConfigurationReading) { this.nativeObject.activityItemsConfiguration = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUITableViewPlaceholderElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITableViewPlaceholder.new();

  get cellUpdateHandler(): (p1: UITableViewCell) => void { return this.nativeObject.cellUpdateHandler; }
  set cellUpdateHandler(value: (p1: UITableViewCell) => void) { this.nativeObject.cellUpdateHandler = value; }
}

export class HTMLUICalendarSelectionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICalendarSelection.new();

}

export class HTMLUITraitTypesettingLanguageElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITraitTypesettingLanguage.new();

}

export class HTMLNSTextLineFragmentElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTextLineFragment.new();

  get attributedString(): NSAttributedString { return this.nativeObject.attributedString; }
  get characterRange(): _NSRange { return this.nativeObject.characterRange; }
  get typographicBounds(): CGRect { return this.nativeObject.typographicBounds; }
  get glyphOrigin(): CGPoint { return this.nativeObject.glyphOrigin; }
}

export class HTMLUIPrinterPickerControllerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPrinterPickerController.new();
  get delegate(): UIPrinterPickerControllerDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UIPrinterPickerControllerDelegateImpl.new();
    }
    return this.nativeObject.delegate as UIPrinterPickerControllerDelegateImpl;
  }

  get selectedPrinter(): UIPrinter { return this.nativeObject.selectedPrinter; }

  set printerPickerControllerParentViewController(value: (printerPickerController: UIPrinterPickerController) => UIViewController) {
    this.delegate.printerPickerControllerParentViewController = value;
  }
  set printerPickerControllerShouldShowPrinter(value: (printerPickerController: UIPrinterPickerController, printer: UIPrinter) => boolean) {
    this.delegate.printerPickerControllerShouldShowPrinter = value;
  }
  set printerPickerControllerWillPresent(value: (printerPickerController: UIPrinterPickerController) => void) {
    this.delegate.printerPickerControllerWillPresent = value;
  }
  set printerPickerControllerDidPresent(value: (printerPickerController: UIPrinterPickerController) => void) {
    this.delegate.printerPickerControllerDidPresent = value;
  }
  set printerPickerControllerWillDismiss(value: (printerPickerController: UIPrinterPickerController) => void) {
    this.delegate.printerPickerControllerWillDismiss = value;
  }
  set printerPickerControllerDidDismiss(value: (printerPickerController: UIPrinterPickerController) => void) {
    this.delegate.printerPickerControllerDidDismiss = value;
  }
  set printerPickerControllerDidSelectPrinter(value: (printerPickerController: UIPrinterPickerController) => void) {
    this.delegate.printerPickerControllerDidSelectPrinter = value;
  }
}

export class HTMLUIPrinterElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPrinter.new();

  get URL(): NSURL { return this.nativeObject.URL; }
  get displayName(): string { return this.nativeObject.displayName; }
  get displayLocation(): string { return this.nativeObject.displayLocation; }
  get supportedJobTypes(): interop.Enum<typeof UIPrinterJobTypes> { return this.nativeObject.supportedJobTypes; }
  get makeAndModel(): string { return this.nativeObject.makeAndModel; }
  get supportsColor(): boolean { return this.nativeObject.supportsColor; }
  get supportsDuplex(): boolean { return this.nativeObject.supportsDuplex; }
}

export class HTMLUIViewPrintFormatterElement extends HTMLUIPrintFormatterElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIViewPrintFormatter.new();

  get view(): UIView { return this.nativeObject.view; }
}

export class HTMLUIViewControllerElement extends HTMLUIResponderElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIViewController.new();
  get transitioningDelegate(): UIViewControllerTransitioningDelegateImpl {
    if(!this.nativeObject.transitioningDelegate){
      this.nativeObject.transitioningDelegate = UIViewControllerTransitioningDelegateImpl.new();
    }
    return this.nativeObject.transitioningDelegate as UIViewControllerTransitioningDelegateImpl;
  }

  get view(): UIView { return this.nativeObject.view; }
  set view(value: UIView) { this.nativeObject.view = value; }
  get viewIfLoaded(): UIView { return this.nativeObject.viewIfLoaded; }
  get isViewLoaded(): boolean { return this.nativeObject.isViewLoaded; }
  get nibName(): string { return this.nativeObject.nibName; }
  get nibBundle(): NSBundle { return this.nativeObject.nibBundle; }
  get storyboard(): UIStoryboard { return this.nativeObject.storyboard; }
  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get parentViewController(): UIViewController { return this.nativeObject.parentViewController; }
  get modalViewController(): UIViewController { return this.nativeObject.modalViewController; }
  get presentedViewController(): UIViewController { return this.nativeObject.presentedViewController; }
  get presentingViewController(): UIViewController { return this.nativeObject.presentingViewController; }
  get definesPresentationContext(): boolean { return this.nativeObject.definesPresentationContext; }
  set definesPresentationContext(value: boolean) { this.nativeObject.definesPresentationContext = value; }
  get providesPresentationContextTransitionStyle(): boolean { return this.nativeObject.providesPresentationContextTransitionStyle; }
  set providesPresentationContextTransitionStyle(value: boolean) { this.nativeObject.providesPresentationContextTransitionStyle = value; }
  get restoresFocusAfterTransition(): boolean { return this.nativeObject.restoresFocusAfterTransition; }
  set restoresFocusAfterTransition(value: boolean) { this.nativeObject.restoresFocusAfterTransition = value; }
  get focusGroupIdentifier(): string { return this.nativeObject.focusGroupIdentifier; }
  set focusGroupIdentifier(value: string) { this.nativeObject.focusGroupIdentifier = value; }
  get interactionActivityTrackingBaseName(): string { return this.nativeObject.interactionActivityTrackingBaseName; }
  set interactionActivityTrackingBaseName(value: string) { this.nativeObject.interactionActivityTrackingBaseName = value; }
  get isBeingPresented(): boolean { return this.nativeObject.isBeingPresented; }
  get isBeingDismissed(): boolean { return this.nativeObject.isBeingDismissed; }
  get isMovingToParentViewController(): boolean { return this.nativeObject.isMovingToParentViewController; }
  get isMovingFromParentViewController(): boolean { return this.nativeObject.isMovingFromParentViewController; }
  get modalTransitionStyle(): interop.Enum<typeof UIModalTransitionStyle> { return this.nativeObject.modalTransitionStyle; }
  set modalTransitionStyle(value: interop.Enum<typeof UIModalTransitionStyle>) { this.nativeObject.modalTransitionStyle = value; }
  get modalPresentationStyle(): interop.Enum<typeof UIModalPresentationStyle> { return this.nativeObject.modalPresentationStyle; }
  set modalPresentationStyle(value: interop.Enum<typeof UIModalPresentationStyle>) { this.nativeObject.modalPresentationStyle = value; }
  get modalPresentationCapturesStatusBarAppearance(): boolean { return this.nativeObject.modalPresentationCapturesStatusBarAppearance; }
  set modalPresentationCapturesStatusBarAppearance(value: boolean) { this.nativeObject.modalPresentationCapturesStatusBarAppearance = value; }
  get disablesAutomaticKeyboardDismissal(): boolean { return this.nativeObject.disablesAutomaticKeyboardDismissal; }
  get wantsFullScreenLayout(): boolean { return this.nativeObject.wantsFullScreenLayout; }
  set wantsFullScreenLayout(value: boolean) { this.nativeObject.wantsFullScreenLayout = value; }
  get edgesForExtendedLayout(): interop.Enum<typeof UIRectEdge> { return this.nativeObject.edgesForExtendedLayout; }
  set edgesForExtendedLayout(value: interop.Enum<typeof UIRectEdge>) { this.nativeObject.edgesForExtendedLayout = value; }
  get extendedLayoutIncludesOpaqueBars(): boolean { return this.nativeObject.extendedLayoutIncludesOpaqueBars; }
  set extendedLayoutIncludesOpaqueBars(value: boolean) { this.nativeObject.extendedLayoutIncludesOpaqueBars = value; }
  get automaticallyAdjustsScrollViewInsets(): boolean { return this.nativeObject.automaticallyAdjustsScrollViewInsets; }
  set automaticallyAdjustsScrollViewInsets(value: boolean) { this.nativeObject.automaticallyAdjustsScrollViewInsets = value; }
  get preferredContentSize(): CGSize { return this.nativeObject.preferredContentSize; }
  set preferredContentSize(value: CGSize) { this.nativeObject.preferredContentSize = value; }
  get preferredStatusBarStyle(): interop.Enum<typeof UIStatusBarStyle> { return this.nativeObject.preferredStatusBarStyle; }
  get prefersStatusBarHidden(): boolean { return this.nativeObject.prefersStatusBarHidden; }
  get preferredStatusBarUpdateAnimation(): interop.Enum<typeof UIStatusBarAnimation> { return this.nativeObject.preferredStatusBarUpdateAnimation; }
  get overrideUserInterfaceStyle(): interop.Enum<typeof UIUserInterfaceStyle> { return this.nativeObject.overrideUserInterfaceStyle; }
  set overrideUserInterfaceStyle(value: interop.Enum<typeof UIUserInterfaceStyle>) { this.nativeObject.overrideUserInterfaceStyle = value; }
  get shouldAutorotate(): boolean { return this.nativeObject.shouldAutorotate; }
  get supportedInterfaceOrientations(): interop.Enum<typeof UIInterfaceOrientationMask> { return this.nativeObject.supportedInterfaceOrientations; }
  get preferredInterfaceOrientationForPresentation(): interop.Enum<typeof UIInterfaceOrientation> { return this.nativeObject.preferredInterfaceOrientationForPresentation; }
  get interfaceOrientation(): interop.Enum<typeof UIInterfaceOrientation> { return this.nativeObject.interfaceOrientation; }
  get isEditing(): boolean { return this.nativeObject.isEditing; }
  set isEditing(value: boolean) { this.nativeObject.isEditing = value; }
  get editButtonItem(): UIBarButtonItem { return this.nativeObject.editButtonItem; }
  get searchDisplayController(): UISearchDisplayController { return this.nativeObject.searchDisplayController; }
  get childViewControllers(): NSArray { return this.nativeObject.childViewControllers; }
  get childViewControllerForStatusBarStyle(): UIViewController { return this.nativeObject.childViewControllerForStatusBarStyle; }
  get childViewControllerForStatusBarHidden(): UIViewController { return this.nativeObject.childViewControllerForStatusBarHidden; }
  get shouldAutomaticallyForwardAppearanceMethods(): boolean { return this.nativeObject.shouldAutomaticallyForwardAppearanceMethods; }
  get restorationIdentifier(): string { return this.nativeObject.restorationIdentifier; }
  set restorationIdentifier(value: string) { this.nativeObject.restorationIdentifier = value; }
  get restorationClass(): UIViewControllerRestoration { return this.nativeObject.restorationClass; }
  set restorationClass(value: UIViewControllerRestoration) { this.nativeObject.restorationClass = value; }
  get topLayoutGuide(): UILayoutSupport { return this.nativeObject.topLayoutGuide; }
  get bottomLayoutGuide(): UILayoutSupport { return this.nativeObject.bottomLayoutGuide; }
  get additionalSafeAreaInsets(): UIEdgeInsets { return this.nativeObject.additionalSafeAreaInsets; }
  set additionalSafeAreaInsets(value: UIEdgeInsets) { this.nativeObject.additionalSafeAreaInsets = value; }
  get systemMinimumLayoutMargins(): NSDirectionalEdgeInsets { return this.nativeObject.systemMinimumLayoutMargins; }
  get viewRespectsSystemMinimumLayoutMargins(): boolean { return this.nativeObject.viewRespectsSystemMinimumLayoutMargins; }
  set viewRespectsSystemMinimumLayoutMargins(value: boolean) { this.nativeObject.viewRespectsSystemMinimumLayoutMargins = value; }
  get performsActionsWhilePresentingModally(): boolean { return this.nativeObject.performsActionsWhilePresentingModally; }
  get extensionContext(): NSExtensionContext { return this.nativeObject.extensionContext; }
  get presentationController(): UIPresentationController { return this.nativeObject.presentationController; }
  get sheetPresentationController(): UISheetPresentationController { return this.nativeObject.sheetPresentationController; }
  get popoverPresentationController(): UIPopoverPresentationController { return this.nativeObject.popoverPresentationController; }
  get activePresentationController(): UIPresentationController { return this.nativeObject.activePresentationController; }
  get isModalInPresentation(): boolean { return this.nativeObject.isModalInPresentation; }
  set isModalInPresentation(value: boolean) { this.nativeObject.isModalInPresentation = value; }
  get childViewControllerForScreenEdgesDeferringSystemGestures(): UIViewController { return this.nativeObject.childViewControllerForScreenEdgesDeferringSystemGestures; }
  get preferredScreenEdgesDeferringSystemGestures(): interop.Enum<typeof UIRectEdge> { return this.nativeObject.preferredScreenEdgesDeferringSystemGestures; }
  get childViewControllerForHomeIndicatorAutoHidden(): UIViewController { return this.nativeObject.childViewControllerForHomeIndicatorAutoHidden; }
  get prefersHomeIndicatorAutoHidden(): boolean { return this.nativeObject.prefersHomeIndicatorAutoHidden; }
  get childViewControllerForPointerLock(): UIViewController { return this.nativeObject.childViewControllerForPointerLock; }
  get prefersPointerLocked(): boolean { return this.nativeObject.prefersPointerLocked; }
  get contentUnavailableConfiguration(): UIContentConfiguration { return this.nativeObject.contentUnavailableConfiguration; }
  set contentUnavailableConfiguration(value: UIContentConfiguration) { this.nativeObject.contentUnavailableConfiguration = value; }
  get contentUnavailableConfigurationState(): UIContentUnavailableConfigurationState { return this.nativeObject.contentUnavailableConfigurationState; }
  get previewActionItems(): NSArray { return this.nativeObject.previewActionItems; }
  get traitOverrides(): UITraitOverrides { return this.nativeObject.traitOverrides; }
  get navigationItem(): UINavigationItem { return this.nativeObject.navigationItem; }
  get hidesBottomBarWhenPushed(): boolean { return this.nativeObject.hidesBottomBarWhenPushed; }
  set hidesBottomBarWhenPushed(value: boolean) { this.nativeObject.hidesBottomBarWhenPushed = value; }
  get navigationController(): UINavigationController { return this.nativeObject.navigationController; }
  get toolbarItems(): NSArray { return this.nativeObject.toolbarItems; }
  set toolbarItems(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.toolbarItems = value; }
  get isModalInPopover(): boolean { return this.nativeObject.isModalInPopover; }
  set isModalInPopover(value: boolean) { this.nativeObject.isModalInPopover = value; }
  get contentSizeForViewInPopover(): CGSize { return this.nativeObject.contentSizeForViewInPopover; }
  set contentSizeForViewInPopover(value: CGSize) { this.nativeObject.contentSizeForViewInPopover = value; }
  get transitionCoordinator(): UIViewControllerTransitionCoordinator { return this.nativeObject.transitionCoordinator; }
  get splitViewController(): UISplitViewController { return this.nativeObject.splitViewController; }
  get tabBarItem(): UITabBarItem { return this.nativeObject.tabBarItem; }
  set tabBarItem(value: UITabBarItem) { this.nativeObject.tabBarItem = value; }
  get tabBarController(): UITabBarController { return this.nativeObject.tabBarController; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
  get traitCollection(): UITraitCollection { return this.nativeObject.traitCollection; }
  get preferredFocusEnvironments(): NSArray { return this.nativeObject.preferredFocusEnvironments; }
  get parentFocusEnvironment(): UIFocusEnvironment { return this.nativeObject.parentFocusEnvironment; }
  get focusItemContainer(): UIFocusItemContainer { return this.nativeObject.focusItemContainer; }
  get preferredFocusedView(): UIView { return this.nativeObject.preferredFocusedView; }

  set animationControllerForPresentedControllerPresentingControllerSourceController(value: (presented: UIViewController, presenting: UIViewController, source: UIViewController) => UIViewControllerAnimatedTransitioning) {
    this.transitioningDelegate.animationControllerForPresentedControllerPresentingControllerSourceController = value;
  }
  set animationControllerForDismissedController(value: (dismissed: UIViewController) => UIViewControllerAnimatedTransitioning) {
    this.transitioningDelegate.animationControllerForDismissedController = value;
  }
  set interactionControllerForPresentation(value: (animator: UIViewControllerAnimatedTransitioning) => UIViewControllerInteractiveTransitioning) {
    this.transitioningDelegate.interactionControllerForPresentation = value;
  }
  set interactionControllerForDismissal(value: (animator: UIViewControllerAnimatedTransitioning) => UIViewControllerInteractiveTransitioning) {
    this.transitioningDelegate.interactionControllerForDismissal = value;
  }
  set presentationControllerForPresentedViewControllerPresentingViewControllerSourceViewController(value: (presented: UIViewController, presenting: UIViewController | null, source: UIViewController) => UIPresentationController) {
    this.transitioningDelegate.presentationControllerForPresentedViewControllerPresentingViewControllerSourceViewController = value;
  }
}

export class HTMLUIViewPropertyAnimatorElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIViewPropertyAnimator.new();

  get timingParameters(): UITimingCurveProvider { return this.nativeObject.timingParameters; }
  get duration(): number { return this.nativeObject.duration; }
  get delay(): number { return this.nativeObject.delay; }
  get isUserInteractionEnabled(): boolean { return this.nativeObject.isUserInteractionEnabled; }
  set isUserInteractionEnabled(value: boolean) { this.nativeObject.isUserInteractionEnabled = value; }
  get isManualHitTestingEnabled(): boolean { return this.nativeObject.isManualHitTestingEnabled; }
  set isManualHitTestingEnabled(value: boolean) { this.nativeObject.isManualHitTestingEnabled = value; }
  get isInterruptible(): boolean { return this.nativeObject.isInterruptible; }
  set isInterruptible(value: boolean) { this.nativeObject.isInterruptible = value; }
  get scrubsLinearly(): boolean { return this.nativeObject.scrubsLinearly; }
  set scrubsLinearly(value: boolean) { this.nativeObject.scrubsLinearly = value; }
  get pausesOnCompletion(): boolean { return this.nativeObject.pausesOnCompletion; }
  set pausesOnCompletion(value: boolean) { this.nativeObject.pausesOnCompletion = value; }
  get state(): interop.Enum<typeof UIViewAnimatingState> { return this.nativeObject.state; }
  get isRunning(): boolean { return this.nativeObject.isRunning; }
  get isReversed(): boolean { return this.nativeObject.isReversed; }
  set isReversed(value: boolean) { this.nativeObject.isReversed = value; }
  get fractionComplete(): number { return this.nativeObject.fractionComplete; }
  set fractionComplete(value: number) { this.nativeObject.fractionComplete = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUITraitUserInterfaceStyleElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITraitUserInterfaceStyle.new();

}

export class HTMLUICollectionViewControllerElement extends HTMLUIViewControllerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICollectionViewController.new();

  get collectionView(): UICollectionView { return this.nativeObject.collectionView; }
  set collectionView(value: UICollectionView) { this.nativeObject.collectionView = value; }
  get clearsSelectionOnViewWillAppear(): boolean { return this.nativeObject.clearsSelectionOnViewWillAppear; }
  set clearsSelectionOnViewWillAppear(value: boolean) { this.nativeObject.clearsSelectionOnViewWillAppear = value; }
  get useLayoutToLayoutNavigationTransitions(): boolean { return this.nativeObject.useLayoutToLayoutNavigationTransitions; }
  set useLayoutToLayoutNavigationTransitions(value: boolean) { this.nativeObject.useLayoutToLayoutNavigationTransitions = value; }
  get collectionViewLayout(): UICollectionViewLayout { return this.nativeObject.collectionViewLayout; }
  get installsStandardGestureForInteractiveMovement(): boolean { return this.nativeObject.installsStandardGestureForInteractiveMovement; }
  set installsStandardGestureForInteractiveMovement(value: boolean) { this.nativeObject.installsStandardGestureForInteractiveMovement = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUIEventElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIEvent.new();

  get type(): interop.Enum<typeof UIEventType> { return this.nativeObject.type; }
  get subtype(): interop.Enum<typeof UIEventSubtype> { return this.nativeObject.subtype; }
  get timestamp(): number { return this.nativeObject.timestamp; }
  get modifierFlags(): interop.Enum<typeof UIKeyModifierFlags> { return this.nativeObject.modifierFlags; }
  get buttonMask(): interop.Enum<typeof UIEventButtonMask> { return this.nativeObject.buttonMask; }
  get allTouches(): NSSet { return this.nativeObject.allTouches; }
}

export class HTMLUITextInteractionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITextInteraction.new();

  get delegate(): UITextInteractionDelegate | null { return this.nativeObject.delegate; }
  set delegate(value: UITextInteractionDelegate | null) { this.nativeObject.delegate = value; }
  get textInput(): UIResponder | null { return this.nativeObject.textInput; }
  set textInput(value: UIResponder | null) { this.nativeObject.textInput = value; }
  get textInteractionMode(): interop.Enum<typeof UITextInteractionMode> { return this.nativeObject.textInteractionMode; }
  get gesturesForFailureRequirements(): NSArray { return this.nativeObject.gesturesForFailureRequirements; }
  get view(): UIView { return this.nativeObject.view; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUIDocumentInteractionControllerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIDocumentInteractionController.new();
  get delegate(): UIDocumentInteractionControllerDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UIDocumentInteractionControllerDelegateImpl.new();
    }
    return this.nativeObject.delegate as UIDocumentInteractionControllerDelegateImpl;
  }

  get URL(): NSURL { return this.nativeObject.URL; }
  set URL(value: NSURL) { this.nativeObject.URL = value; }
  get UTI(): string { return this.nativeObject.UTI; }
  set UTI(value: string) { this.nativeObject.UTI = value; }
  get name(): string { return this.nativeObject.name; }
  set name(value: string) { this.nativeObject.name = value; }
  get icons(): NSArray { return this.nativeObject.icons; }
  get annotation(): interop.Object { return this.nativeObject.annotation; }
  set annotation(value: interop.Object) { this.nativeObject.annotation = value; }
  get gestureRecognizers(): NSArray { return this.nativeObject.gestureRecognizers; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }

  set documentInteractionControllerViewControllerForPreview(value: (controller: UIDocumentInteractionController) => UIViewController) {
    this.delegate.documentInteractionControllerViewControllerForPreview = value;
  }
  set documentInteractionControllerRectForPreview(value: (controller: UIDocumentInteractionController) => CGRect) {
    this.delegate.documentInteractionControllerRectForPreview = value;
  }
  set documentInteractionControllerViewForPreview(value: (controller: UIDocumentInteractionController) => UIView) {
    this.delegate.documentInteractionControllerViewForPreview = value;
  }
  set documentInteractionControllerWillBeginPreview(value: (controller: UIDocumentInteractionController) => void) {
    this.delegate.documentInteractionControllerWillBeginPreview = value;
  }
  set documentInteractionControllerDidEndPreview(value: (controller: UIDocumentInteractionController) => void) {
    this.delegate.documentInteractionControllerDidEndPreview = value;
  }
  set documentInteractionControllerWillPresentOptionsMenu(value: (controller: UIDocumentInteractionController) => void) {
    this.delegate.documentInteractionControllerWillPresentOptionsMenu = value;
  }
  set documentInteractionControllerDidDismissOptionsMenu(value: (controller: UIDocumentInteractionController) => void) {
    this.delegate.documentInteractionControllerDidDismissOptionsMenu = value;
  }
  set documentInteractionControllerWillPresentOpenInMenu(value: (controller: UIDocumentInteractionController) => void) {
    this.delegate.documentInteractionControllerWillPresentOpenInMenu = value;
  }
  set documentInteractionControllerDidDismissOpenInMenu(value: (controller: UIDocumentInteractionController) => void) {
    this.delegate.documentInteractionControllerDidDismissOpenInMenu = value;
  }
  set documentInteractionControllerWillBeginSendingToApplication(value: (controller: UIDocumentInteractionController, application: string | null) => void) {
    this.delegate.documentInteractionControllerWillBeginSendingToApplication = value;
  }
  set documentInteractionControllerDidEndSendingToApplication(value: (controller: UIDocumentInteractionController, application: string | null) => void) {
    this.delegate.documentInteractionControllerDidEndSendingToApplication = value;
  }
  set documentInteractionControllerCanPerformAction(value: (controller: UIDocumentInteractionController, action: string | null) => boolean) {
    this.delegate.documentInteractionControllerCanPerformAction = value;
  }
  set documentInteractionControllerPerformAction(value: (controller: UIDocumentInteractionController, action: string | null) => boolean) {
    this.delegate.documentInteractionControllerPerformAction = value;
  }
}

export class HTMLUIToolTipInteractionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIToolTipInteraction.new();
  get delegate(): UIToolTipInteractionDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UIToolTipInteractionDelegateImpl.new();
    }
    return this.nativeObject.delegate as UIToolTipInteractionDelegateImpl;
  }

  get isEnabled(): boolean { return this.nativeObject.isEnabled; }
  set isEnabled(value: boolean) { this.nativeObject.isEnabled = value; }
  get defaultToolTip(): string { return this.nativeObject.defaultToolTip; }
  set defaultToolTip(value: string) { this.nativeObject.defaultToolTip = value; }
  get view(): UIView { return this.nativeObject.view; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }

  set toolTipInteractionConfigurationAtPoint(value: (interaction: UIToolTipInteraction, point: CGPoint) => UIToolTipConfiguration) {
    this.delegate.toolTipInteractionConfigurationAtPoint = value;
  }
}

export class HTMLUIPrintPageRendererElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPrintPageRenderer.new();

  get headerHeight(): number { return this.nativeObject.headerHeight; }
  set headerHeight(value: number) { this.nativeObject.headerHeight = value; }
  get footerHeight(): number { return this.nativeObject.footerHeight; }
  set footerHeight(value: number) { this.nativeObject.footerHeight = value; }
  get paperRect(): CGRect { return this.nativeObject.paperRect; }
  get printableRect(): CGRect { return this.nativeObject.printableRect; }
  get numberOfPages(): number { return this.nativeObject.numberOfPages; }
  get printFormatters(): NSArray { return this.nativeObject.printFormatters; }
  set printFormatters(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.printFormatters = value; }
}

export class HTMLUIBarAppearanceElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = UIBarAppearance.new();

  get idiom(): interop.Enum<typeof UIUserInterfaceIdiom> { return this.nativeObject.idiom; }
  get backgroundEffect(): UIBlurEffect { return this.nativeObject.backgroundEffect; }
  set backgroundEffect(value: UIBlurEffect) { this.nativeObject.backgroundEffect = value; }
  get backgroundColor(): UIColor { return this.nativeObject.backgroundColor; }
  set backgroundColor(value: UIColor) { this.nativeObject.backgroundColor = value; }
  get backgroundImage(): UIImage { return this.nativeObject.backgroundImage; }
  set backgroundImage(value: UIImage) { this.nativeObject.backgroundImage = value; }
  get backgroundImageContentMode(): interop.Enum<typeof UIViewContentMode> { return this.nativeObject.backgroundImageContentMode; }
  set backgroundImageContentMode(value: interop.Enum<typeof UIViewContentMode>) { this.nativeObject.backgroundImageContentMode = value; }
  get shadowColor(): UIColor { return this.nativeObject.shadowColor; }
  set shadowColor(value: UIColor) { this.nativeObject.shadowColor = value; }
  get shadowImage(): UIImage { return this.nativeObject.shadowImage; }
  set shadowImage(value: UIImage) { this.nativeObject.shadowImage = value; }
}

export class HTMLNSTextLayoutManagerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTextLayoutManager.new();
  get delegate(): NSTextLayoutManagerDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSTextLayoutManagerDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSTextLayoutManagerDelegateImpl;
  }

  get usesFontLeading(): boolean { return this.nativeObject.usesFontLeading; }
  set usesFontLeading(value: boolean) { this.nativeObject.usesFontLeading = value; }
  get limitsLayoutForSuspiciousContents(): boolean { return this.nativeObject.limitsLayoutForSuspiciousContents; }
  set limitsLayoutForSuspiciousContents(value: boolean) { this.nativeObject.limitsLayoutForSuspiciousContents = value; }
  get usesHyphenation(): boolean { return this.nativeObject.usesHyphenation; }
  set usesHyphenation(value: boolean) { this.nativeObject.usesHyphenation = value; }
  get textContentManager(): NSTextContentManager { return this.nativeObject.textContentManager; }
  get textContainer(): NSTextContainer { return this.nativeObject.textContainer; }
  set textContainer(value: NSTextContainer) { this.nativeObject.textContainer = value; }
  get usageBoundsForTextContainer(): CGRect { return this.nativeObject.usageBoundsForTextContainer; }
  get textViewportLayoutController(): NSTextViewportLayoutController { return this.nativeObject.textViewportLayoutController; }
  get layoutQueue(): NSOperationQueue { return this.nativeObject.layoutQueue; }
  set layoutQueue(value: NSOperationQueue) { this.nativeObject.layoutQueue = value; }
  get textSelections(): NSArray { return this.nativeObject.textSelections; }
  set textSelections(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.textSelections = value; }
  get textSelectionNavigation(): NSTextSelectionNavigation { return this.nativeObject.textSelectionNavigation; }
  set textSelectionNavigation(value: NSTextSelectionNavigation) { this.nativeObject.textSelectionNavigation = value; }
  get renderingAttributesValidator(): (p1: NSTextLayoutManager, p2: NSTextLayoutFragment) => void { return this.nativeObject.renderingAttributesValidator; }
  set renderingAttributesValidator(value: (p1: NSTextLayoutManager, p2: NSTextLayoutFragment) => void) { this.nativeObject.renderingAttributesValidator = value; }
  get documentRange(): NSTextRange { return this.nativeObject.documentRange; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }

  set textLayoutManagerTextLayoutFragmentForLocationInTextElement(value: (textLayoutManager: NSTextLayoutManager, location: NSTextLocation, textElement: NSTextElement) => NSTextLayoutFragment) {
    this.delegate.textLayoutManagerTextLayoutFragmentForLocationInTextElement = value;
  }
  set textLayoutManagerShouldBreakLineBeforeLocationHyphenating(value: (textLayoutManager: NSTextLayoutManager, location: NSTextLocation, hyphenating: boolean) => boolean) {
    this.delegate.textLayoutManagerShouldBreakLineBeforeLocationHyphenating = value;
  }
  set textLayoutManagerRenderingAttributesForLinkAtLocationDefaultAttributes(value: (textLayoutManager: NSTextLayoutManager, link: interop.Object, location: NSTextLocation, renderingAttributes: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) => NSDictionary) {
    this.delegate.textLayoutManagerRenderingAttributesForLinkAtLocationDefaultAttributes = value;
  }
}

export class HTMLUIBarButtonItemStateAppearanceElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIBarButtonItemStateAppearance.new();

  get titleTextAttributes(): NSDictionary { return this.nativeObject.titleTextAttributes; }
  set titleTextAttributes(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) { this.nativeObject.titleTextAttributes = value; }
  get titlePositionAdjustment(): UIOffset { return this.nativeObject.titlePositionAdjustment; }
  set titlePositionAdjustment(value: UIOffset) { this.nativeObject.titlePositionAdjustment = value; }
  get backgroundImage(): UIImage { return this.nativeObject.backgroundImage; }
  set backgroundImage(value: UIImage) { this.nativeObject.backgroundImage = value; }
  get backgroundImagePositionAdjustment(): UIOffset { return this.nativeObject.backgroundImagePositionAdjustment; }
  set backgroundImagePositionAdjustment(value: UIOffset) { this.nativeObject.backgroundImagePositionAdjustment = value; }
}

export class HTMLUINavigationItemElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UINavigationItem.new();
  get renameDelegate(): UINavigationItemRenameDelegateImpl {
    if(!this.nativeObject.renameDelegate){
      this.nativeObject.renameDelegate = UINavigationItemRenameDelegateImpl.new();
    }
    return this.nativeObject.renameDelegate as UINavigationItemRenameDelegateImpl;
  }

  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get titleView(): UIView { return this.nativeObject.titleView; }
  set titleView(value: UIView) { this.nativeObject.titleView = value; }
  get prompt(): string { return this.nativeObject.prompt; }
  set prompt(value: string) { this.nativeObject.prompt = value; }
  get backBarButtonItem(): UIBarButtonItem { return this.nativeObject.backBarButtonItem; }
  set backBarButtonItem(value: UIBarButtonItem) { this.nativeObject.backBarButtonItem = value; }
  get backButtonTitle(): string { return this.nativeObject.backButtonTitle; }
  set backButtonTitle(value: string) { this.nativeObject.backButtonTitle = value; }
  get hidesBackButton(): boolean { return this.nativeObject.hidesBackButton; }
  set hidesBackButton(value: boolean) { this.nativeObject.hidesBackButton = value; }
  get backButtonDisplayMode(): interop.Enum<typeof UINavigationItemBackButtonDisplayMode> { return this.nativeObject.backButtonDisplayMode; }
  set backButtonDisplayMode(value: interop.Enum<typeof UINavigationItemBackButtonDisplayMode>) { this.nativeObject.backButtonDisplayMode = value; }
  get backAction(): UIAction { return this.nativeObject.backAction; }
  set backAction(value: UIAction) { this.nativeObject.backAction = value; }
  get titleMenuProvider(): (p1: NSArray<interop.Object> | Array<interop.Object>) => UIMenu | null { return this.nativeObject.titleMenuProvider; }
  set titleMenuProvider(value: (p1: NSArray<interop.Object> | Array<interop.Object>) => UIMenu | null) { this.nativeObject.titleMenuProvider = value; }
  get documentProperties(): UIDocumentProperties { return this.nativeObject.documentProperties; }
  set documentProperties(value: UIDocumentProperties) { this.nativeObject.documentProperties = value; }
  get leftBarButtonItems(): NSArray { return this.nativeObject.leftBarButtonItems; }
  set leftBarButtonItems(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.leftBarButtonItems = value; }
  get rightBarButtonItems(): NSArray { return this.nativeObject.rightBarButtonItems; }
  set rightBarButtonItems(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.rightBarButtonItems = value; }
  get leftItemsSupplementBackButton(): boolean { return this.nativeObject.leftItemsSupplementBackButton; }
  set leftItemsSupplementBackButton(value: boolean) { this.nativeObject.leftItemsSupplementBackButton = value; }
  get leftBarButtonItem(): UIBarButtonItem { return this.nativeObject.leftBarButtonItem; }
  set leftBarButtonItem(value: UIBarButtonItem) { this.nativeObject.leftBarButtonItem = value; }
  get rightBarButtonItem(): UIBarButtonItem { return this.nativeObject.rightBarButtonItem; }
  set rightBarButtonItem(value: UIBarButtonItem) { this.nativeObject.rightBarButtonItem = value; }
  get customizationIdentifier(): string { return this.nativeObject.customizationIdentifier; }
  set customizationIdentifier(value: string) { this.nativeObject.customizationIdentifier = value; }
  get leadingItemGroups(): NSArray { return this.nativeObject.leadingItemGroups; }
  set leadingItemGroups(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.leadingItemGroups = value; }
  get centerItemGroups(): NSArray { return this.nativeObject.centerItemGroups; }
  set centerItemGroups(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.centerItemGroups = value; }
  get trailingItemGroups(): NSArray { return this.nativeObject.trailingItemGroups; }
  set trailingItemGroups(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.trailingItemGroups = value; }
  get pinnedTrailingGroup(): UIBarButtonItemGroup { return this.nativeObject.pinnedTrailingGroup; }
  set pinnedTrailingGroup(value: UIBarButtonItemGroup) { this.nativeObject.pinnedTrailingGroup = value; }
  get additionalOverflowItems(): UIDeferredMenuElement { return this.nativeObject.additionalOverflowItems; }
  set additionalOverflowItems(value: UIDeferredMenuElement) { this.nativeObject.additionalOverflowItems = value; }
  get overflowPresentationSource(): UIPopoverPresentationControllerSourceItem { return this.nativeObject.overflowPresentationSource; }
  get largeTitleDisplayMode(): interop.Enum<typeof UINavigationItemLargeTitleDisplayMode> { return this.nativeObject.largeTitleDisplayMode; }
  set largeTitleDisplayMode(value: interop.Enum<typeof UINavigationItemLargeTitleDisplayMode>) { this.nativeObject.largeTitleDisplayMode = value; }
  get searchController(): UISearchController { return this.nativeObject.searchController; }
  set searchController(value: UISearchController) { this.nativeObject.searchController = value; }
  get hidesSearchBarWhenScrolling(): boolean { return this.nativeObject.hidesSearchBarWhenScrolling; }
  set hidesSearchBarWhenScrolling(value: boolean) { this.nativeObject.hidesSearchBarWhenScrolling = value; }
  get preferredSearchBarPlacement(): interop.Enum<typeof UINavigationItemSearchBarPlacement> { return this.nativeObject.preferredSearchBarPlacement; }
  set preferredSearchBarPlacement(value: interop.Enum<typeof UINavigationItemSearchBarPlacement>) { this.nativeObject.preferredSearchBarPlacement = value; }
  get searchBarPlacement(): interop.Enum<typeof UINavigationItemSearchBarPlacement> { return this.nativeObject.searchBarPlacement; }
  get standardAppearance(): UINavigationBarAppearance { return this.nativeObject.standardAppearance; }
  set standardAppearance(value: UINavigationBarAppearance) { this.nativeObject.standardAppearance = value; }
  get compactAppearance(): UINavigationBarAppearance { return this.nativeObject.compactAppearance; }
  set compactAppearance(value: UINavigationBarAppearance) { this.nativeObject.compactAppearance = value; }
  get scrollEdgeAppearance(): UINavigationBarAppearance { return this.nativeObject.scrollEdgeAppearance; }
  set scrollEdgeAppearance(value: UINavigationBarAppearance) { this.nativeObject.scrollEdgeAppearance = value; }
  get compactScrollEdgeAppearance(): UINavigationBarAppearance { return this.nativeObject.compactScrollEdgeAppearance; }
  set compactScrollEdgeAppearance(value: UINavigationBarAppearance) { this.nativeObject.compactScrollEdgeAppearance = value; }

  set navigationItemDidEndRenamingWithTitle(value: (navigationItem: UINavigationItem, title: string) => void) {
    this.renameDelegate.navigationItemDidEndRenamingWithTitle = value;
  }
  set navigationItemShouldBeginRenaming(value: (navigationItem: UINavigationItem) => boolean) {
    this.renameDelegate.navigationItemShouldBeginRenaming = value;
  }
  set navigationItemWillBeginRenamingWithSuggestedTitleSelectedRange(value: (navigationItem: UINavigationItem, title: string, selectedRange: interop.PointerConvertible) => string) {
    this.renameDelegate.navigationItemWillBeginRenamingWithSuggestedTitleSelectedRange = value;
  }
  set navigationItemShouldEndRenamingWithTitle(value: (navigationItem: UINavigationItem, title: string) => boolean) {
    this.renameDelegate.navigationItemShouldEndRenamingWithTitle = value;
  }
}

export class HTMLUIStoryboardElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIStoryboard.new();

}

export class HTMLNSDiffableDataSourceSectionTransactionElement<SectionIdentifierType = interop.Object, ItemIdentifierType = interop.Object> extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSDiffableDataSourceSectionTransaction.new();

  get sectionIdentifier(): SectionIdentifierType { return this.nativeObject.sectionIdentifier as SectionIdentifierType; }
  get initialSnapshot(): NSDiffableDataSourceSectionSnapshot { return this.nativeObject.initialSnapshot; }
  get finalSnapshot(): NSDiffableDataSourceSectionSnapshot { return this.nativeObject.finalSnapshot; }
  get difference(): NSOrderedCollectionDifference { return this.nativeObject.difference; }
}

export class HTMLUICellAccessoryDetailElement extends HTMLUICellAccessoryElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICellAccessoryDetail.new();

  get actionHandler(): () => void { return this.nativeObject.actionHandler; }
  set actionHandler(value: () => void) { this.nativeObject.actionHandler = value; }
}

export class HTMLNSCollectionLayoutItemElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSCollectionLayoutItem.new();

  get contentInsets(): NSDirectionalEdgeInsets { return this.nativeObject.contentInsets; }
  set contentInsets(value: NSDirectionalEdgeInsets) { this.nativeObject.contentInsets = value; }
  get edgeSpacing(): NSCollectionLayoutEdgeSpacing { return this.nativeObject.edgeSpacing; }
  set edgeSpacing(value: NSCollectionLayoutEdgeSpacing) { this.nativeObject.edgeSpacing = value; }
  get layoutSize(): NSCollectionLayoutSize { return this.nativeObject.layoutSize; }
  get supplementaryItems(): NSArray { return this.nativeObject.supplementaryItems; }
}

export class HTMLUIMenuElementElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIMenuElement.new();

  get title(): string { return this.nativeObject.title; }
  get subtitle(): string { return this.nativeObject.subtitle; }
  set subtitle(value: string) { this.nativeObject.subtitle = value; }
  get image(): UIImage { return this.nativeObject.image; }
}

export class HTMLUIDragPreviewParametersElement extends HTMLUIPreviewParametersElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIDragPreviewParameters.new();

}

export class HTMLUISceneWindowingBehaviorsElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UISceneWindowingBehaviors.new();

  get isClosable(): boolean { return this.nativeObject.isClosable; }
  set isClosable(value: boolean) { this.nativeObject.isClosable = value; }
  get isMiniaturizable(): boolean { return this.nativeObject.isMiniaturizable; }
  set isMiniaturizable(value: boolean) { this.nativeObject.isMiniaturizable = value; }
}

export class HTMLUIPencilInteractionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPencilInteraction.new();
  get delegate(): UIPencilInteractionDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UIPencilInteractionDelegateImpl.new();
    }
    return this.nativeObject.delegate as UIPencilInteractionDelegateImpl;
  }

  get isEnabled(): boolean { return this.nativeObject.isEnabled; }
  set isEnabled(value: boolean) { this.nativeObject.isEnabled = value; }
  get view(): UIView { return this.nativeObject.view; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }

  set pencilInteractionDidTap(value: (interaction: UIPencilInteraction) => void) {
    this.delegate.pencilInteractionDidTap = value;
  }
}

export class HTMLUICommandElement extends HTMLUIMenuElementElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = UICommand.new();

  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get image(): UIImage { return this.nativeObject.image; }
  set image(value: UIImage) { this.nativeObject.image = value; }
  get discoverabilityTitle(): string { return this.nativeObject.discoverabilityTitle; }
  set discoverabilityTitle(value: string) { this.nativeObject.discoverabilityTitle = value; }
  get action(): string { return this.nativeObject.action; }
  get propertyList(): interop.Object { return this.nativeObject.propertyList; }
  get state(): interop.Enum<typeof UIMenuElementState> { return this.nativeObject.state; }
  set state(value: interop.Enum<typeof UIMenuElementState>) { this.nativeObject.state = value; }
  get alternates(): NSArray { return this.nativeObject.alternates; }
  get selectedImage(): UIImage { return this.nativeObject.selectedImage; }
  set selectedImage(value: UIImage) { this.nativeObject.selectedImage = value; }
  get sender(): interop.Object { return this.nativeObject.sender; }
  get presentationSourceItem(): UIPopoverPresentationControllerSourceItem { return this.nativeObject.presentationSourceItem; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLNSDiffableDataSourceSectionSnapshotElement<ItemIdentifierType = interop.Object> extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSDiffableDataSourceSectionSnapshot.new();

  get items(): NSArray { return this.nativeObject.items; }
  get rootItems(): NSArray { return this.nativeObject.rootItems; }
  get visibleItems(): NSArray { return this.nativeObject.visibleItems; }
}

export class HTMLUIManagedDocumentElement extends HTMLUIDocumentElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIManagedDocument.new();

  get managedObjectContext(): NSManagedObjectContext { return this.nativeObject.managedObjectContext; }
  get managedObjectModel(): NSManagedObjectModel { return this.nativeObject.managedObjectModel; }
  get persistentStoreOptions(): NSDictionary { return this.nativeObject.persistentStoreOptions; }
  set persistentStoreOptions(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) { this.nativeObject.persistentStoreOptions = value; }
  get modelConfiguration(): string { return this.nativeObject.modelConfiguration; }
  set modelConfiguration(value: string) { this.nativeObject.modelConfiguration = value; }
}

export class HTMLUIKeyElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIKey.new();

  get characters(): string { return this.nativeObject.characters; }
  get charactersIgnoringModifiers(): string { return this.nativeObject.charactersIgnoringModifiers; }
  get modifierFlags(): interop.Enum<typeof UIKeyModifierFlags> { return this.nativeObject.modifierFlags; }
  get keyCode(): interop.Enum<typeof UIKeyboardHIDUsage> { return this.nativeObject.keyCode; }
}

export class HTMLUIContentUnavailableConfigurationStateElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIContentUnavailableConfigurationState.new();

  get traitCollection(): UITraitCollection { return this.nativeObject.traitCollection; }
  set traitCollection(value: UITraitCollection) { this.nativeObject.traitCollection = value; }
  get searchText(): string { return this.nativeObject.searchText; }
  set searchText(value: string) { this.nativeObject.searchText = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUIBarButtonItemElement extends HTMLUIBarItemElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIBarButtonItem.new();

  get width(): number { return this.nativeObject.width; }
  set width(value: number) { this.nativeObject.width = value; }
  get possibleTitles(): NSSet { return this.nativeObject.possibleTitles; }
  set possibleTitles(value: NSSet) { this.nativeObject.possibleTitles = value; }
  get customView(): UIView { return this.nativeObject.customView; }
  set customView(value: UIView) { this.nativeObject.customView = value; }
  get action(): string { return this.nativeObject.action; }
  set action(value: string) { this.nativeObject.action = value; }
  get target(): interop.Object { return this.nativeObject.target; }
  set target(value: interop.Object) { this.nativeObject.target = value; }
  get primaryAction(): UIAction { return this.nativeObject.primaryAction; }
  set primaryAction(value: UIAction) { this.nativeObject.primaryAction = value; }
  get menu(): UIMenu { return this.nativeObject.menu; }
  set menu(value: UIMenu) { this.nativeObject.menu = value; }
  get preferredMenuElementOrder(): interop.Enum<typeof UIContextMenuConfigurationElementOrder> { return this.nativeObject.preferredMenuElementOrder; }
  set preferredMenuElementOrder(value: interop.Enum<typeof UIContextMenuConfigurationElementOrder>) { this.nativeObject.preferredMenuElementOrder = value; }
  get changesSelectionAsPrimaryAction(): boolean { return this.nativeObject.changesSelectionAsPrimaryAction; }
  set changesSelectionAsPrimaryAction(value: boolean) { this.nativeObject.changesSelectionAsPrimaryAction = value; }
  get isSelected(): boolean { return this.nativeObject.isSelected; }
  set isSelected(value: boolean) { this.nativeObject.isSelected = value; }
  get isHidden(): boolean { return this.nativeObject.isHidden; }
  set isHidden(value: boolean) { this.nativeObject.isHidden = value; }
  get isSymbolAnimationEnabled(): boolean { return this.nativeObject.isSymbolAnimationEnabled; }
  set isSymbolAnimationEnabled(value: boolean) { this.nativeObject.isSymbolAnimationEnabled = value; }
  get menuRepresentation(): UIMenuElement { return this.nativeObject.menuRepresentation; }
  set menuRepresentation(value: UIMenuElement) { this.nativeObject.menuRepresentation = value; }
  get tintColor(): UIColor { return this.nativeObject.tintColor; }
  set tintColor(value: UIColor) { this.nativeObject.tintColor = value; }
  get buttonGroup(): UIBarButtonItemGroup { return this.nativeObject.buttonGroup; }
}

export class HTMLUITextItemMenuConfigurationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITextItemMenuConfiguration.new();

}

export class HTMLNSTextContainerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTextContainer.new();

  get layoutManager(): NSLayoutManager { return this.nativeObject.layoutManager; }
  set layoutManager(value: NSLayoutManager) { this.nativeObject.layoutManager = value; }
  get textLayoutManager(): NSTextLayoutManager { return this.nativeObject.textLayoutManager; }
  get size(): CGSize { return this.nativeObject.size; }
  set size(value: CGSize) { this.nativeObject.size = value; }
  get exclusionPaths(): NSArray { return this.nativeObject.exclusionPaths; }
  set exclusionPaths(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.exclusionPaths = value; }
  get lineBreakMode(): interop.Enum<typeof NSLineBreakMode> { return this.nativeObject.lineBreakMode; }
  set lineBreakMode(value: interop.Enum<typeof NSLineBreakMode>) { this.nativeObject.lineBreakMode = value; }
  get lineFragmentPadding(): number { return this.nativeObject.lineFragmentPadding; }
  set lineFragmentPadding(value: number) { this.nativeObject.lineFragmentPadding = value; }
  get maximumNumberOfLines(): number { return this.nativeObject.maximumNumberOfLines; }
  set maximumNumberOfLines(value: number) { this.nativeObject.maximumNumberOfLines = value; }
  get isSimpleRectangularTextContainer(): boolean { return this.nativeObject.isSimpleRectangularTextContainer; }
  get widthTracksTextView(): boolean { return this.nativeObject.widthTracksTextView; }
  set widthTracksTextView(value: boolean) { this.nativeObject.widthTracksTextView = value; }
  get heightTracksTextView(): boolean { return this.nativeObject.heightTracksTextView; }
  set heightTracksTextView(value: boolean) { this.nativeObject.heightTracksTextView = value; }
  get layoutOrientation(): interop.Enum<typeof NSTextLayoutOrientation> { return this.nativeObject.layoutOrientation; }
}

export class HTMLUITabBarItemAppearanceElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = UITabBarItemAppearance.new();

  get normal(): UITabBarItemStateAppearance { return this.nativeObject.normal; }
  get selected(): UITabBarItemStateAppearance { return this.nativeObject.selected; }
  get disabled(): UITabBarItemStateAppearance { return this.nativeObject.disabled; }
  get focused(): UITabBarItemStateAppearance { return this.nativeObject.focused; }
}

export class HTMLUIColorPickerViewControllerElement extends HTMLUIViewControllerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIColorPickerViewController.new();
  get delegate(): UIColorPickerViewControllerDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UIColorPickerViewControllerDelegateImpl.new();
    }
    return this.nativeObject.delegate as UIColorPickerViewControllerDelegateImpl;
  }

  get selectedColor(): UIColor { return this.nativeObject.selectedColor; }
  set selectedColor(value: UIColor) { this.nativeObject.selectedColor = value; }
  get supportsAlpha(): boolean { return this.nativeObject.supportsAlpha; }
  set supportsAlpha(value: boolean) { this.nativeObject.supportsAlpha = value; }

  set colorPickerViewControllerDidSelectColor(value: (viewController: UIColorPickerViewController) => void) {
    this.delegate.colorPickerViewControllerDidSelectColor = value;
  }
  set colorPickerViewControllerDidSelectColorContinuously(value: (viewController: UIColorPickerViewController, color: UIColor, continuously: boolean) => void) {
    this.delegate.colorPickerViewControllerDidSelectColorContinuously = value;
  }
  set colorPickerViewControllerDidFinish(value: (viewController: UIColorPickerViewController) => void) {
    this.delegate.colorPickerViewControllerDidFinish = value;
  }
}

export class HTMLUITraitHorizontalSizeClassElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITraitHorizontalSizeClass.new();

}

export class HTMLUIBarButtonItemGroupElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIBarButtonItemGroup.new();

  get barButtonItems(): NSArray { return this.nativeObject.barButtonItems; }
  set barButtonItems(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.barButtonItems = value; }
  get representativeItem(): UIBarButtonItem { return this.nativeObject.representativeItem; }
  set representativeItem(value: UIBarButtonItem) { this.nativeObject.representativeItem = value; }
  get isDisplayingRepresentativeItem(): boolean { return this.nativeObject.isDisplayingRepresentativeItem; }
  get alwaysAvailable(): boolean { return this.nativeObject.alwaysAvailable; }
  set alwaysAvailable(value: boolean) { this.nativeObject.alwaysAvailable = value; }
  get menuRepresentation(): UIMenuElement { return this.nativeObject.menuRepresentation; }
  set menuRepresentation(value: UIMenuElement) { this.nativeObject.menuRepresentation = value; }
  get isHidden(): boolean { return this.nativeObject.isHidden; }
  set isHidden(value: boolean) { this.nativeObject.isHidden = value; }
}

export class HTMLUISearchTokenElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UISearchToken.new();

  get representedObject(): interop.Object { return this.nativeObject.representedObject; }
  set representedObject(value: interop.Object) { this.nativeObject.representedObject = value; }
}

export class HTMLUISceneSessionActivationRequestElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UISceneSessionActivationRequest.new();

  get role(): string { return this.nativeObject.role; }
  get session(): UISceneSession { return this.nativeObject.session; }
  get userActivity(): NSUserActivity { return this.nativeObject.userActivity; }
  set userActivity(value: NSUserActivity) { this.nativeObject.userActivity = value; }
  get options(): UISceneActivationRequestOptions { return this.nativeObject.options; }
  set options(value: UISceneActivationRequestOptions) { this.nativeObject.options = value; }
}

export class HTMLUIFindInteractionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIFindInteraction.new();

  get isFindNavigatorVisible(): boolean { return this.nativeObject.isFindNavigatorVisible; }
  get activeFindSession(): UIFindSession { return this.nativeObject.activeFindSession; }
  get searchText(): string { return this.nativeObject.searchText; }
  set searchText(value: string) { this.nativeObject.searchText = value; }
  get replacementText(): string { return this.nativeObject.replacementText; }
  set replacementText(value: string) { this.nativeObject.replacementText = value; }
  get optionsMenuProvider(): (p1: NSArray<interop.Object> | Array<interop.Object>) => UIMenu | null { return this.nativeObject.optionsMenuProvider; }
  set optionsMenuProvider(value: (p1: NSArray<interop.Object> | Array<interop.Object>) => UIMenu | null) { this.nativeObject.optionsMenuProvider = value; }
  get delegate(): UIFindInteractionDelegate | null { return this.nativeObject.delegate; }
  get view(): UIView { return this.nativeObject.view; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUISceneConfigurationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UISceneConfiguration.new();

  get name(): string { return this.nativeObject.name; }
  get role(): string { return this.nativeObject.role; }
  get sceneClass(): interop.Object { return this.nativeObject.sceneClass; }
  set sceneClass(value: interop.Object) { this.nativeObject.sceneClass = value; }
  get delegateClass(): interop.Object { return this.nativeObject.delegateClass; }
  set delegateClass(value: interop.Object) { this.nativeObject.delegateClass = value; }
  get storyboard(): UIStoryboard { return this.nativeObject.storyboard; }
  set storyboard(value: UIStoryboard) { this.nativeObject.storyboard = value; }
}

export class HTMLUIAccessibilityCustomRotorItemResultElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIAccessibilityCustomRotorItemResult.new();

  get targetElement(): NSObject | null { return this.nativeObject.targetElement; }
  set targetElement(value: NSObject | null) { this.nativeObject.targetElement = value; }
  get targetRange(): UITextRange { return this.nativeObject.targetRange; }
  set targetRange(value: UITextRange) { this.nativeObject.targetRange = value; }
}

export class HTMLUITabBarItemStateAppearanceElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITabBarItemStateAppearance.new();

  get titleTextAttributes(): NSDictionary { return this.nativeObject.titleTextAttributes; }
  set titleTextAttributes(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) { this.nativeObject.titleTextAttributes = value; }
  get titlePositionAdjustment(): UIOffset { return this.nativeObject.titlePositionAdjustment; }
  set titlePositionAdjustment(value: UIOffset) { this.nativeObject.titlePositionAdjustment = value; }
  get iconColor(): UIColor { return this.nativeObject.iconColor; }
  set iconColor(value: UIColor) { this.nativeObject.iconColor = value; }
  get badgePositionAdjustment(): UIOffset { return this.nativeObject.badgePositionAdjustment; }
  set badgePositionAdjustment(value: UIOffset) { this.nativeObject.badgePositionAdjustment = value; }
  get badgeBackgroundColor(): UIColor { return this.nativeObject.badgeBackgroundColor; }
  set badgeBackgroundColor(value: UIColor) { this.nativeObject.badgeBackgroundColor = value; }
  get badgeTextAttributes(): NSDictionary { return this.nativeObject.badgeTextAttributes; }
  set badgeTextAttributes(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) { this.nativeObject.badgeTextAttributes = value; }
  get badgeTitlePositionAdjustment(): UIOffset { return this.nativeObject.badgeTitlePositionAdjustment; }
  set badgeTitlePositionAdjustment(value: UIOffset) { this.nativeObject.badgeTitlePositionAdjustment = value; }
}

export class HTMLUIFocusHaloEffectElement extends HTMLUIFocusEffectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIFocusHaloEffect.new();

  get containerView(): UIView { return this.nativeObject.containerView; }
  set containerView(value: UIView) { this.nativeObject.containerView = value; }
  get referenceView(): UIView { return this.nativeObject.referenceView; }
  set referenceView(value: UIView) { this.nativeObject.referenceView = value; }
  get position(): interop.Enum<typeof UIFocusHaloEffectPosition> { return this.nativeObject.position; }
  set position(value: interop.Enum<typeof UIFocusHaloEffectPosition>) { this.nativeObject.position = value; }
}

export class HTMLNSLayoutManagerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSLayoutManager.new();
  get delegate(): NSLayoutManagerDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSLayoutManagerDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSLayoutManagerDelegateImpl;
  }

  get textStorage(): NSTextStorage { return this.nativeObject.textStorage; }
  set textStorage(value: NSTextStorage) { this.nativeObject.textStorage = value; }
  get textContainers(): NSArray { return this.nativeObject.textContainers; }
  get showsInvisibleCharacters(): boolean { return this.nativeObject.showsInvisibleCharacters; }
  set showsInvisibleCharacters(value: boolean) { this.nativeObject.showsInvisibleCharacters = value; }
  get showsControlCharacters(): boolean { return this.nativeObject.showsControlCharacters; }
  set showsControlCharacters(value: boolean) { this.nativeObject.showsControlCharacters = value; }
  get usesFontLeading(): boolean { return this.nativeObject.usesFontLeading; }
  set usesFontLeading(value: boolean) { this.nativeObject.usesFontLeading = value; }
  get allowsNonContiguousLayout(): boolean { return this.nativeObject.allowsNonContiguousLayout; }
  set allowsNonContiguousLayout(value: boolean) { this.nativeObject.allowsNonContiguousLayout = value; }
  get hasNonContiguousLayout(): boolean { return this.nativeObject.hasNonContiguousLayout; }
  get limitsLayoutForSuspiciousContents(): boolean { return this.nativeObject.limitsLayoutForSuspiciousContents; }
  set limitsLayoutForSuspiciousContents(value: boolean) { this.nativeObject.limitsLayoutForSuspiciousContents = value; }
  get usesDefaultHyphenation(): boolean { return this.nativeObject.usesDefaultHyphenation; }
  set usesDefaultHyphenation(value: boolean) { this.nativeObject.usesDefaultHyphenation = value; }
  get numberOfGlyphs(): number { return this.nativeObject.numberOfGlyphs; }
  get extraLineFragmentRect(): CGRect { return this.nativeObject.extraLineFragmentRect; }
  get extraLineFragmentUsedRect(): CGRect { return this.nativeObject.extraLineFragmentUsedRect; }
  get extraLineFragmentTextContainer(): NSTextContainer { return this.nativeObject.extraLineFragmentTextContainer; }
  get hyphenationFactor(): number { return this.nativeObject.hyphenationFactor; }
  set hyphenationFactor(value: number) { this.nativeObject.hyphenationFactor = value; }

  set layoutManagerShouldGenerateGlyphsPropertiesCharacterIndexesFontForGlyphRange(value: (layoutManager: NSLayoutManager, glyphs: interop.PointerConvertible, props: interop.PointerConvertible, charIndexes: interop.PointerConvertible, aFont: UIFont, glyphRange: _NSRange) => number) {
    this.delegate.layoutManagerShouldGenerateGlyphsPropertiesCharacterIndexesFontForGlyphRange = value;
  }
  set layoutManagerLineSpacingAfterGlyphAtIndexWithProposedLineFragmentRect(value: (layoutManager: NSLayoutManager, glyphIndex: number, rect: CGRect) => number) {
    this.delegate.layoutManagerLineSpacingAfterGlyphAtIndexWithProposedLineFragmentRect = value;
  }
  set layoutManagerParagraphSpacingBeforeGlyphAtIndexWithProposedLineFragmentRect(value: (layoutManager: NSLayoutManager, glyphIndex: number, rect: CGRect) => number) {
    this.delegate.layoutManagerParagraphSpacingBeforeGlyphAtIndexWithProposedLineFragmentRect = value;
  }
  set layoutManagerParagraphSpacingAfterGlyphAtIndexWithProposedLineFragmentRect(value: (layoutManager: NSLayoutManager, glyphIndex: number, rect: CGRect) => number) {
    this.delegate.layoutManagerParagraphSpacingAfterGlyphAtIndexWithProposedLineFragmentRect = value;
  }
  set layoutManagerShouldUseActionForControlCharacterAtIndex(value: (layoutManager: NSLayoutManager, action: interop.Enum<typeof NSControlCharacterAction>, charIndex: number) => interop.Enum<typeof NSControlCharacterAction>) {
    this.delegate.layoutManagerShouldUseActionForControlCharacterAtIndex = value;
  }
  set layoutManagerShouldBreakLineByWordBeforeCharacterAtIndex(value: (layoutManager: NSLayoutManager, charIndex: number) => boolean) {
    this.delegate.layoutManagerShouldBreakLineByWordBeforeCharacterAtIndex = value;
  }
  set layoutManagerShouldBreakLineByHyphenatingBeforeCharacterAtIndex(value: (layoutManager: NSLayoutManager, charIndex: number) => boolean) {
    this.delegate.layoutManagerShouldBreakLineByHyphenatingBeforeCharacterAtIndex = value;
  }
  set layoutManagerBoundingBoxForControlGlyphAtIndexForTextContainerProposedLineFragmentGlyphPositionCharacterIndex(value: (layoutManager: NSLayoutManager, glyphIndex: number, textContainer: NSTextContainer, proposedRect: CGRect, glyphPosition: CGPoint, charIndex: number) => CGRect) {
    this.delegate.layoutManagerBoundingBoxForControlGlyphAtIndexForTextContainerProposedLineFragmentGlyphPositionCharacterIndex = value;
  }
  set layoutManagerShouldSetLineFragmentRectLineFragmentUsedRectBaselineOffsetInTextContainerForGlyphRange(value: (layoutManager: NSLayoutManager, lineFragmentRect: interop.PointerConvertible, lineFragmentUsedRect: interop.PointerConvertible, baselineOffset: interop.PointerConvertible, textContainer: NSTextContainer, glyphRange: _NSRange) => boolean) {
    this.delegate.layoutManagerShouldSetLineFragmentRectLineFragmentUsedRectBaselineOffsetInTextContainerForGlyphRange = value;
  }
  set layoutManagerDidInvalidateLayout(value: (sender: NSLayoutManager) => void) {
    this.delegate.layoutManagerDidInvalidateLayout = value;
  }
  set layoutManagerDidCompleteLayoutForTextContainerAtEnd(value: (layoutManager: NSLayoutManager, textContainer: NSTextContainer | null, layoutFinishedFlag: boolean) => void) {
    this.delegate.layoutManagerDidCompleteLayoutForTextContainerAtEnd = value;
  }
  set layoutManagerTextContainerDidChangeGeometryFromSize(value: (layoutManager: NSLayoutManager, textContainer: NSTextContainer, oldSize: CGSize) => void) {
    this.delegate.layoutManagerTextContainerDidChangeGeometryFromSize = value;
  }
}

export class HTMLUICollectionLayoutListConfigurationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICollectionLayoutListConfiguration.new();

  get appearance(): interop.Enum<typeof UICollectionLayoutListAppearance> { return this.nativeObject.appearance; }
  get showsSeparators(): boolean { return this.nativeObject.showsSeparators; }
  set showsSeparators(value: boolean) { this.nativeObject.showsSeparators = value; }
  get separatorConfiguration(): UIListSeparatorConfiguration { return this.nativeObject.separatorConfiguration; }
  set separatorConfiguration(value: UIListSeparatorConfiguration) { this.nativeObject.separatorConfiguration = value; }
  get itemSeparatorHandler(): (p1: NSIndexPath, p2: UIListSeparatorConfiguration) => UIListSeparatorConfiguration { return this.nativeObject.itemSeparatorHandler; }
  set itemSeparatorHandler(value: (p1: NSIndexPath, p2: UIListSeparatorConfiguration) => UIListSeparatorConfiguration) { this.nativeObject.itemSeparatorHandler = value; }
  get backgroundColor(): UIColor { return this.nativeObject.backgroundColor; }
  set backgroundColor(value: UIColor) { this.nativeObject.backgroundColor = value; }
  get leadingSwipeActionsConfigurationProvider(): (p1: NSIndexPath) => UISwipeActionsConfiguration { return this.nativeObject.leadingSwipeActionsConfigurationProvider; }
  set leadingSwipeActionsConfigurationProvider(value: (p1: NSIndexPath) => UISwipeActionsConfiguration) { this.nativeObject.leadingSwipeActionsConfigurationProvider = value; }
  get trailingSwipeActionsConfigurationProvider(): (p1: NSIndexPath) => UISwipeActionsConfiguration { return this.nativeObject.trailingSwipeActionsConfigurationProvider; }
  set trailingSwipeActionsConfigurationProvider(value: (p1: NSIndexPath) => UISwipeActionsConfiguration) { this.nativeObject.trailingSwipeActionsConfigurationProvider = value; }
  get headerMode(): interop.Enum<typeof UICollectionLayoutListHeaderMode> { return this.nativeObject.headerMode; }
  set headerMode(value: interop.Enum<typeof UICollectionLayoutListHeaderMode>) { this.nativeObject.headerMode = value; }
  get footerMode(): interop.Enum<typeof UICollectionLayoutListFooterMode> { return this.nativeObject.footerMode; }
  set footerMode(value: interop.Enum<typeof UICollectionLayoutListFooterMode>) { this.nativeObject.footerMode = value; }
  get headerTopPadding(): number { return this.nativeObject.headerTopPadding; }
  set headerTopPadding(value: number) { this.nativeObject.headerTopPadding = value; }
}

export class HTMLUIContextMenuConfigurationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIContextMenuConfiguration.new();

  get identifier(): NSCopying { return this.nativeObject.identifier; }
  get secondaryItemIdentifiers(): NSSet { return this.nativeObject.secondaryItemIdentifiers; }
  set secondaryItemIdentifiers(value: NSSet) { this.nativeObject.secondaryItemIdentifiers = value; }
  get badgeCount(): number { return this.nativeObject.badgeCount; }
  set badgeCount(value: number) { this.nativeObject.badgeCount = value; }
  get preferredMenuElementOrder(): interop.Enum<typeof UIContextMenuConfigurationElementOrder> { return this.nativeObject.preferredMenuElementOrder; }
  set preferredMenuElementOrder(value: interop.Enum<typeof UIContextMenuConfigurationElementOrder>) { this.nativeObject.preferredMenuElementOrder = value; }
}

export class HTMLUIUserNotificationCategoryElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIUserNotificationCategory.new();

  get identifier(): string { return this.nativeObject.identifier; }
}

export class HTMLUIPopoverControllerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPopoverController.new();
  get delegate(): UIPopoverControllerDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UIPopoverControllerDelegateImpl.new();
    }
    return this.nativeObject.delegate as UIPopoverControllerDelegateImpl;
  }

  get contentViewController(): UIViewController { return this.nativeObject.contentViewController; }
  set contentViewController(value: UIViewController) { this.nativeObject.contentViewController = value; }
  get popoverContentSize(): CGSize { return this.nativeObject.popoverContentSize; }
  set popoverContentSize(value: CGSize) { this.nativeObject.popoverContentSize = value; }
  get isPopoverVisible(): boolean { return this.nativeObject.isPopoverVisible; }
  get popoverArrowDirection(): interop.Enum<typeof UIPopoverArrowDirection> { return this.nativeObject.popoverArrowDirection; }
  get passthroughViews(): NSArray { return this.nativeObject.passthroughViews; }
  set passthroughViews(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.passthroughViews = value; }
  get backgroundColor(): UIColor { return this.nativeObject.backgroundColor; }
  set backgroundColor(value: UIColor) { this.nativeObject.backgroundColor = value; }
  get popoverLayoutMargins(): UIEdgeInsets { return this.nativeObject.popoverLayoutMargins; }
  set popoverLayoutMargins(value: UIEdgeInsets) { this.nativeObject.popoverLayoutMargins = value; }
  get popoverBackgroundViewClass(): interop.Object { return this.nativeObject.popoverBackgroundViewClass; }
  set popoverBackgroundViewClass(value: interop.Object) { this.nativeObject.popoverBackgroundViewClass = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }

  set popoverControllerShouldDismissPopover(value: (popoverController: UIPopoverController) => boolean) {
    this.delegate.popoverControllerShouldDismissPopover = value;
  }
  set popoverControllerDidDismissPopover(value: (popoverController: UIPopoverController) => void) {
    this.delegate.popoverControllerDidDismissPopover = value;
  }
  set popoverControllerWillRepositionPopoverToRectInView(value: (popoverController: UIPopoverController, rect: interop.PointerConvertible, view: interop.PointerConvertible) => void) {
    this.delegate.popoverControllerWillRepositionPopoverToRectInView = value;
  }
}

export class HTMLUIMenuItemElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIMenuItem.new();

  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get action(): string { return this.nativeObject.action; }
  set action(value: string) { this.nativeObject.action = value; }
}

export class HTMLUIFocusUpdateContextElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIFocusUpdateContext.new();

  get previouslyFocusedItem(): UIFocusItem { return this.nativeObject.previouslyFocusedItem; }
  get nextFocusedItem(): UIFocusItem { return this.nativeObject.nextFocusedItem; }
  get previouslyFocusedView(): UIView { return this.nativeObject.previouslyFocusedView; }
  get nextFocusedView(): UIView { return this.nativeObject.nextFocusedView; }
  get focusHeading(): interop.Enum<typeof UIFocusHeading> { return this.nativeObject.focusHeading; }
}

export class HTMLUITargetedDragPreviewElement extends HTMLUITargetedPreviewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = UITargetedDragPreview.new();

}

export class HTMLUIReferenceLibraryViewControllerElement extends HTMLUIViewControllerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIReferenceLibraryViewController.new();

}

export class HTMLUICellAccessoryDisclosureIndicatorElement extends HTMLUICellAccessoryElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICellAccessoryDisclosureIndicator.new();

}

export class HTMLUIFocusAnimationCoordinatorElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIFocusAnimationCoordinator.new();

}

export class HTMLUIAlertActionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIAlertAction.new();

  get title(): string { return this.nativeObject.title; }
  get isEnabled(): boolean { return this.nativeObject.isEnabled; }
  set isEnabled(value: boolean) { this.nativeObject.isEnabled = value; }
}

export class HTMLUIApplicationShortcutIconElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIApplicationShortcutIcon.new();

}

export class HTMLUICalendarSelectionMultiDateElement extends HTMLUICalendarSelectionElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICalendarSelectionMultiDate.new();
  get delegate(): UICalendarSelectionMultiDateDelegateImpl {
    // delegate is readonly, so not lazy-initialized.
    return this.nativeObject.delegate as UICalendarSelectionMultiDateDelegateImpl;
  }

  get selectedDates(): NSArray { return this.nativeObject.selectedDates; }
  set selectedDates(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.selectedDates = value; }

  set multiDateSelectionDidSelectDate(value: (selection: UICalendarSelectionMultiDate, dateComponents: NSDateComponents) => void) {
    this.delegate.multiDateSelectionDidSelectDate = value;
  }
  set multiDateSelectionDidDeselectDate(value: (selection: UICalendarSelectionMultiDate, dateComponents: NSDateComponents) => void) {
    this.delegate.multiDateSelectionDidDeselectDate = value;
  }
  set multiDateSelectionCanSelectDate(value: (selection: UICalendarSelectionMultiDate, dateComponents: NSDateComponents) => boolean) {
    this.delegate.multiDateSelectionCanSelectDate = value;
  }
  set multiDateSelectionCanDeselectDate(value: (selection: UICalendarSelectionMultiDate, dateComponents: NSDateComponents) => boolean) {
    this.delegate.multiDateSelectionCanDeselectDate = value;
  }
}

export class HTMLUITableViewDropPlaceholderElement extends HTMLUITableViewPlaceholderElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITableViewDropPlaceholder.new();

  get previewParametersProvider(): (p1: UITableViewCell) => UIDragPreviewParameters | null { return this.nativeObject.previewParametersProvider; }
  set previewParametersProvider(value: (p1: UITableViewCell) => UIDragPreviewParameters | null) { this.nativeObject.previewParametersProvider = value; }
}

export class HTMLUITabBarAppearanceElement extends HTMLUIBarAppearanceElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITabBarAppearance.new();

  get stackedLayoutAppearance(): UITabBarItemAppearance { return this.nativeObject.stackedLayoutAppearance; }
  set stackedLayoutAppearance(value: UITabBarItemAppearance) { this.nativeObject.stackedLayoutAppearance = value; }
  get inlineLayoutAppearance(): UITabBarItemAppearance { return this.nativeObject.inlineLayoutAppearance; }
  set inlineLayoutAppearance(value: UITabBarItemAppearance) { this.nativeObject.inlineLayoutAppearance = value; }
  get compactInlineLayoutAppearance(): UITabBarItemAppearance { return this.nativeObject.compactInlineLayoutAppearance; }
  set compactInlineLayoutAppearance(value: UITabBarItemAppearance) { this.nativeObject.compactInlineLayoutAppearance = value; }
  get selectionIndicatorTintColor(): UIColor { return this.nativeObject.selectionIndicatorTintColor; }
  set selectionIndicatorTintColor(value: UIColor) { this.nativeObject.selectionIndicatorTintColor = value; }
  get selectionIndicatorImage(): UIImage { return this.nativeObject.selectionIndicatorImage; }
  set selectionIndicatorImage(value: UIImage) { this.nativeObject.selectionIndicatorImage = value; }
  get stackedItemPositioning(): interop.Enum<typeof UITabBarItemPositioning> { return this.nativeObject.stackedItemPositioning; }
  set stackedItemPositioning(value: interop.Enum<typeof UITabBarItemPositioning>) { this.nativeObject.stackedItemPositioning = value; }
  get stackedItemWidth(): number { return this.nativeObject.stackedItemWidth; }
  set stackedItemWidth(value: number) { this.nativeObject.stackedItemWidth = value; }
  get stackedItemSpacing(): number { return this.nativeObject.stackedItemSpacing; }
  set stackedItemSpacing(value: number) { this.nativeObject.stackedItemSpacing = value; }
}

export class HTMLUITableViewControllerElement extends HTMLUIViewControllerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITableViewController.new();

  get tableView(): UITableView { return this.nativeObject.tableView; }
  set tableView(value: UITableView) { this.nativeObject.tableView = value; }
  get clearsSelectionOnViewWillAppear(): boolean { return this.nativeObject.clearsSelectionOnViewWillAppear; }
  set clearsSelectionOnViewWillAppear(value: boolean) { this.nativeObject.clearsSelectionOnViewWillAppear = value; }
  get refreshControl(): UIRefreshControl { return this.nativeObject.refreshControl; }
  set refreshControl(value: UIRefreshControl) { this.nativeObject.refreshControl = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUINotificationFeedbackGeneratorElement extends HTMLUIFeedbackGeneratorElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UINotificationFeedbackGenerator.new();

}

export class HTMLUICellAccessoryCustomViewElement extends HTMLUICellAccessoryElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICellAccessoryCustomView.new();

  get customView(): UIView { return this.nativeObject.customView; }
  get placement(): interop.Enum<typeof UICellAccessoryPlacement> { return this.nativeObject.placement; }
  get maintainsFixedSize(): boolean { return this.nativeObject.maintainsFixedSize; }
  set maintainsFixedSize(value: boolean) { this.nativeObject.maintainsFixedSize = value; }
  get position(): (p1: NSArray<interop.Object> | Array<interop.Object>) => number { return this.nativeObject.position; }
  set position(value: (p1: NSArray<interop.Object> | Array<interop.Object>) => number) { this.nativeObject.position = value; }
}

export class HTMLNSLayoutYAxisAnchorElement extends HTMLNSLayoutAnchorElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSLayoutYAxisAnchor.new();

}

export class HTMLNSLayoutXAxisAnchorElement extends HTMLNSLayoutAnchorElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSLayoutXAxisAnchor.new();

}

export class HTMLUINavigationBarAppearanceElement extends HTMLUIBarAppearanceElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UINavigationBarAppearance.new();

  get titleTextAttributes(): NSDictionary { return this.nativeObject.titleTextAttributes; }
  set titleTextAttributes(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) { this.nativeObject.titleTextAttributes = value; }
  get titlePositionAdjustment(): UIOffset { return this.nativeObject.titlePositionAdjustment; }
  set titlePositionAdjustment(value: UIOffset) { this.nativeObject.titlePositionAdjustment = value; }
  get largeTitleTextAttributes(): NSDictionary { return this.nativeObject.largeTitleTextAttributes; }
  set largeTitleTextAttributes(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) { this.nativeObject.largeTitleTextAttributes = value; }
  get buttonAppearance(): UIBarButtonItemAppearance { return this.nativeObject.buttonAppearance; }
  set buttonAppearance(value: UIBarButtonItemAppearance) { this.nativeObject.buttonAppearance = value; }
  get doneButtonAppearance(): UIBarButtonItemAppearance { return this.nativeObject.doneButtonAppearance; }
  set doneButtonAppearance(value: UIBarButtonItemAppearance) { this.nativeObject.doneButtonAppearance = value; }
  get backButtonAppearance(): UIBarButtonItemAppearance { return this.nativeObject.backButtonAppearance; }
  set backButtonAppearance(value: UIBarButtonItemAppearance) { this.nativeObject.backButtonAppearance = value; }
  get backIndicatorImage(): UIImage { return this.nativeObject.backIndicatorImage; }
  get backIndicatorTransitionMaskImage(): UIImage { return this.nativeObject.backIndicatorTransitionMaskImage; }
}

export class HTMLUITabBarItemElement extends HTMLUIBarItemElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITabBarItem.new();

  get selectedImage(): UIImage { return this.nativeObject.selectedImage; }
  set selectedImage(value: UIImage) { this.nativeObject.selectedImage = value; }
  get badgeValue(): string { return this.nativeObject.badgeValue; }
  set badgeValue(value: string) { this.nativeObject.badgeValue = value; }
  get titlePositionAdjustment(): UIOffset { return this.nativeObject.titlePositionAdjustment; }
  set titlePositionAdjustment(value: UIOffset) { this.nativeObject.titlePositionAdjustment = value; }
  get badgeColor(): UIColor { return this.nativeObject.badgeColor; }
  set badgeColor(value: UIColor) { this.nativeObject.badgeColor = value; }
  get standardAppearance(): UITabBarAppearance { return this.nativeObject.standardAppearance; }
  set standardAppearance(value: UITabBarAppearance) { this.nativeObject.standardAppearance = value; }
  get scrollEdgeAppearance(): UITabBarAppearance { return this.nativeObject.scrollEdgeAppearance; }
  set scrollEdgeAppearance(value: UITabBarAppearance) { this.nativeObject.scrollEdgeAppearance = value; }
}

export class HTMLUITabBarControllerElement extends HTMLUIViewControllerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITabBarController.new();
  get delegate(): UITabBarControllerDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UITabBarControllerDelegateImpl.new();
    }
    return this.nativeObject.delegate as UITabBarControllerDelegateImpl;
  }

  get viewControllers(): NSArray { return this.nativeObject.viewControllers; }
  set viewControllers(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.viewControllers = value; }
  get selectedViewController(): UIViewController { return this.nativeObject.selectedViewController; }
  set selectedViewController(value: UIViewController) { this.nativeObject.selectedViewController = value; }
  get selectedIndex(): number { return this.nativeObject.selectedIndex; }
  set selectedIndex(value: number) { this.nativeObject.selectedIndex = value; }
  get moreNavigationController(): UINavigationController { return this.nativeObject.moreNavigationController; }
  get customizableViewControllers(): NSArray { return this.nativeObject.customizableViewControllers; }
  set customizableViewControllers(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.customizableViewControllers = value; }
  get tabBar(): UITabBar { return this.nativeObject.tabBar; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }

  set tabBarControllerShouldSelectViewController(value: (tabBarController: UITabBarController, viewController: UIViewController) => boolean) {
    this.delegate.tabBarControllerShouldSelectViewController = value;
  }
  set tabBarControllerDidSelectViewController(value: (tabBarController: UITabBarController, viewController: UIViewController) => void) {
    this.delegate.tabBarControllerDidSelectViewController = value;
  }
  set tabBarControllerWillBeginCustomizingViewControllers(value: (tabBarController: UITabBarController, viewControllers: NSArray<interop.Object> | Array<interop.Object>) => void) {
    this.delegate.tabBarControllerWillBeginCustomizingViewControllers = value;
  }
  set tabBarControllerWillEndCustomizingViewControllersChanged(value: (tabBarController: UITabBarController, viewControllers: NSArray<interop.Object> | Array<interop.Object>, changed: boolean) => void) {
    this.delegate.tabBarControllerWillEndCustomizingViewControllersChanged = value;
  }
  set tabBarControllerDidEndCustomizingViewControllersChanged(value: (tabBarController: UITabBarController, viewControllers: NSArray<interop.Object> | Array<interop.Object>, changed: boolean) => void) {
    this.delegate.tabBarControllerDidEndCustomizingViewControllersChanged = value;
  }
  set tabBarControllerSupportedInterfaceOrientations(value: (tabBarController: UITabBarController) => interop.Enum<typeof UIInterfaceOrientationMask>) {
    this.delegate.tabBarControllerSupportedInterfaceOrientations = value;
  }
  set tabBarControllerPreferredInterfaceOrientationForPresentation(value: (tabBarController: UITabBarController) => interop.Enum<typeof UIInterfaceOrientation>) {
    this.delegate.tabBarControllerPreferredInterfaceOrientationForPresentation = value;
  }
  set tabBarControllerInteractionControllerForAnimationController(value: (tabBarController: UITabBarController, animationController: UIViewControllerAnimatedTransitioning) => UIViewControllerInteractiveTransitioning) {
    this.delegate.tabBarControllerInteractionControllerForAnimationController = value;
  }
  set tabBarControllerAnimationControllerForTransitionFromViewControllerToViewController(value: (tabBarController: UITabBarController, fromVC: UIViewController, toVC: UIViewController) => UIViewControllerAnimatedTransitioning) {
    this.delegate.tabBarControllerAnimationControllerForTransitionFromViewControllerToViewController = value;
  }
}

export class HTMLUISearchControllerElement extends HTMLUIViewControllerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UISearchController.new();
  get delegate(): UISearchControllerDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UISearchControllerDelegateImpl.new();
    }
    return this.nativeObject.delegate as UISearchControllerDelegateImpl;
  }

  get searchResultsUpdater(): UISearchResultsUpdating { return this.nativeObject.searchResultsUpdater; }
  set searchResultsUpdater(value: UISearchResultsUpdating) { this.nativeObject.searchResultsUpdater = value; }
  get isActive(): boolean { return this.nativeObject.isActive; }
  set isActive(value: boolean) { this.nativeObject.isActive = value; }
  get dimsBackgroundDuringPresentation(): boolean { return this.nativeObject.dimsBackgroundDuringPresentation; }
  set dimsBackgroundDuringPresentation(value: boolean) { this.nativeObject.dimsBackgroundDuringPresentation = value; }
  get obscuresBackgroundDuringPresentation(): boolean { return this.nativeObject.obscuresBackgroundDuringPresentation; }
  set obscuresBackgroundDuringPresentation(value: boolean) { this.nativeObject.obscuresBackgroundDuringPresentation = value; }
  get hidesNavigationBarDuringPresentation(): boolean { return this.nativeObject.hidesNavigationBarDuringPresentation; }
  set hidesNavigationBarDuringPresentation(value: boolean) { this.nativeObject.hidesNavigationBarDuringPresentation = value; }
  get searchResultsController(): UIViewController { return this.nativeObject.searchResultsController; }
  get searchBar(): UISearchBar { return this.nativeObject.searchBar; }
  get searchBarPlacement(): interop.Enum<typeof UINavigationItemSearchBarPlacement> { return this.nativeObject.searchBarPlacement; }
  get automaticallyShowsSearchResultsController(): boolean { return this.nativeObject.automaticallyShowsSearchResultsController; }
  set automaticallyShowsSearchResultsController(value: boolean) { this.nativeObject.automaticallyShowsSearchResultsController = value; }
  get showsSearchResultsController(): boolean { return this.nativeObject.showsSearchResultsController; }
  set showsSearchResultsController(value: boolean) { this.nativeObject.showsSearchResultsController = value; }
  get automaticallyShowsCancelButton(): boolean { return this.nativeObject.automaticallyShowsCancelButton; }
  set automaticallyShowsCancelButton(value: boolean) { this.nativeObject.automaticallyShowsCancelButton = value; }
  get automaticallyShowsScopeBar(): boolean { return this.nativeObject.automaticallyShowsScopeBar; }
  set automaticallyShowsScopeBar(value: boolean) { this.nativeObject.automaticallyShowsScopeBar = value; }
  get scopeBarActivation(): interop.Enum<typeof UISearchControllerScopeBarActivation> { return this.nativeObject.scopeBarActivation; }
  set scopeBarActivation(value: interop.Enum<typeof UISearchControllerScopeBarActivation>) { this.nativeObject.scopeBarActivation = value; }
  get searchSuggestions(): NSArray { return this.nativeObject.searchSuggestions; }
  set searchSuggestions(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.searchSuggestions = value; }
  get ignoresSearchSuggestionsForSearchBarPlacementStacked(): boolean { return this.nativeObject.ignoresSearchSuggestionsForSearchBarPlacementStacked; }
  set ignoresSearchSuggestionsForSearchBarPlacementStacked(value: boolean) { this.nativeObject.ignoresSearchSuggestionsForSearchBarPlacementStacked = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }

  set willPresentSearchController(value: (searchController: UISearchController) => void) {
    this.delegate.willPresentSearchController = value;
  }
  set didPresentSearchController(value: (searchController: UISearchController) => void) {
    this.delegate.didPresentSearchController = value;
  }
  set willDismissSearchController(value: (searchController: UISearchController) => void) {
    this.delegate.willDismissSearchController = value;
  }
  set didDismissSearchController(value: (searchController: UISearchController) => void) {
    this.delegate.didDismissSearchController = value;
  }
  set presentSearchController(value: (searchController: UISearchController) => void) {
    this.delegate.presentSearchController = value;
  }
  set searchControllerWillChangeToSearchBarPlacement(value: (searchController: UISearchController, newPlacement: interop.Enum<typeof UINavigationItemSearchBarPlacement>) => void) {
    this.delegate.searchControllerWillChangeToSearchBarPlacement = value;
  }
  set searchControllerDidChangeFromSearchBarPlacement(value: (searchController: UISearchController, previousPlacement: interop.Enum<typeof UINavigationItemSearchBarPlacement>) => void) {
    this.delegate.searchControllerDidChangeFromSearchBarPlacement = value;
  }
}

export class HTMLUIPressesEventElement extends HTMLUIEventElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPressesEvent.new();

  get allPresses(): NSSet { return this.nativeObject.allPresses; }
}

export class HTMLUIPageViewControllerElement extends HTMLUIViewControllerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPageViewController.new();
  get delegate(): UIPageViewControllerDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UIPageViewControllerDelegateImpl.new();
    }
    return this.nativeObject.delegate as UIPageViewControllerDelegateImpl;
  }

  get dataSource(): UIPageViewControllerDataSource { return this.nativeObject.dataSource; }
  set dataSource(value: UIPageViewControllerDataSource) { this.nativeObject.dataSource = value; }
  get transitionStyle(): interop.Enum<typeof UIPageViewControllerTransitionStyle> { return this.nativeObject.transitionStyle; }
  get navigationOrientation(): interop.Enum<typeof UIPageViewControllerNavigationOrientation> { return this.nativeObject.navigationOrientation; }
  get spineLocation(): interop.Enum<typeof UIPageViewControllerSpineLocation> { return this.nativeObject.spineLocation; }
  get isDoubleSided(): boolean { return this.nativeObject.isDoubleSided; }
  set isDoubleSided(value: boolean) { this.nativeObject.isDoubleSided = value; }
  get gestureRecognizers(): NSArray { return this.nativeObject.gestureRecognizers; }
  get viewControllers(): NSArray { return this.nativeObject.viewControllers; }

  set pageViewControllerWillTransitionToViewControllers(value: (pageViewController: UIPageViewController, pendingViewControllers: NSArray<interop.Object> | Array<interop.Object>) => void) {
    this.delegate.pageViewControllerWillTransitionToViewControllers = value;
  }
  set pageViewControllerDidFinishAnimatingPreviousViewControllersTransitionCompleted(value: (pageViewController: UIPageViewController, finished: boolean, previousViewControllers: NSArray<interop.Object> | Array<interop.Object>, completed: boolean) => void) {
    this.delegate.pageViewControllerDidFinishAnimatingPreviousViewControllersTransitionCompleted = value;
  }
  set pageViewControllerSpineLocationForInterfaceOrientation(value: (pageViewController: UIPageViewController, orientation: interop.Enum<typeof UIInterfaceOrientation>) => interop.Enum<typeof UIPageViewControllerSpineLocation>) {
    this.delegate.pageViewControllerSpineLocationForInterfaceOrientation = value;
  }
  set pageViewControllerSupportedInterfaceOrientations(value: (pageViewController: UIPageViewController) => interop.Enum<typeof UIInterfaceOrientationMask>) {
    this.delegate.pageViewControllerSupportedInterfaceOrientations = value;
  }
  set pageViewControllerPreferredInterfaceOrientationForPresentation(value: (pageViewController: UIPageViewController) => interop.Enum<typeof UIInterfaceOrientation>) {
    this.delegate.pageViewControllerPreferredInterfaceOrientationForPresentation = value;
  }
}

export class HTMLUIInputViewControllerElement extends HTMLUIViewControllerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = UIInputViewController.new();

  get inputView(): UIInputView { return this.nativeObject.inputView; }
  set inputView(value: UIInputView) { this.nativeObject.inputView = value; }
  get textDocumentProxy(): UITextDocumentProxy { return this.nativeObject.textDocumentProxy; }
  get primaryLanguage(): string { return this.nativeObject.primaryLanguage; }
  set primaryLanguage(value: string) { this.nativeObject.primaryLanguage = value; }
  get hasDictationKey(): boolean { return this.nativeObject.hasDictationKey; }
  set hasDictationKey(value: boolean) { this.nativeObject.hasDictationKey = value; }
  get hasFullAccess(): boolean { return this.nativeObject.hasFullAccess; }
  get needsInputModeSwitchKey(): boolean { return this.nativeObject.needsInputModeSwitchKey; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUINavigationControllerElement extends HTMLUIViewControllerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = UINavigationController.new();
  get delegate(): UINavigationControllerDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UINavigationControllerDelegateImpl.new();
    }
    return this.nativeObject.delegate as UINavigationControllerDelegateImpl;
  }

  get topViewController(): UIViewController { return this.nativeObject.topViewController; }
  get visibleViewController(): UIViewController { return this.nativeObject.visibleViewController; }
  get viewControllers(): NSArray { return this.nativeObject.viewControllers; }
  set viewControllers(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.viewControllers = value; }
  get isNavigationBarHidden(): boolean { return this.nativeObject.isNavigationBarHidden; }
  set isNavigationBarHidden(value: boolean) { this.nativeObject.isNavigationBarHidden = value; }
  get navigationBar(): UINavigationBar { return this.nativeObject.navigationBar; }
  get isToolbarHidden(): boolean { return this.nativeObject.isToolbarHidden; }
  set isToolbarHidden(value: boolean) { this.nativeObject.isToolbarHidden = value; }
  get toolbar(): UIToolbar { return this.nativeObject.toolbar; }
  get interactivePopGestureRecognizer(): UIGestureRecognizer { return this.nativeObject.interactivePopGestureRecognizer; }
  get hidesBarsWhenKeyboardAppears(): boolean { return this.nativeObject.hidesBarsWhenKeyboardAppears; }
  set hidesBarsWhenKeyboardAppears(value: boolean) { this.nativeObject.hidesBarsWhenKeyboardAppears = value; }
  get hidesBarsOnSwipe(): boolean { return this.nativeObject.hidesBarsOnSwipe; }
  set hidesBarsOnSwipe(value: boolean) { this.nativeObject.hidesBarsOnSwipe = value; }
  get barHideOnSwipeGestureRecognizer(): UIPanGestureRecognizer { return this.nativeObject.barHideOnSwipeGestureRecognizer; }
  get hidesBarsWhenVerticallyCompact(): boolean { return this.nativeObject.hidesBarsWhenVerticallyCompact; }
  set hidesBarsWhenVerticallyCompact(value: boolean) { this.nativeObject.hidesBarsWhenVerticallyCompact = value; }
  get hidesBarsOnTap(): boolean { return this.nativeObject.hidesBarsOnTap; }
  set hidesBarsOnTap(value: boolean) { this.nativeObject.hidesBarsOnTap = value; }
  get barHideOnTapGestureRecognizer(): UITapGestureRecognizer { return this.nativeObject.barHideOnTapGestureRecognizer; }

  set navigationControllerWillShowViewControllerAnimated(value: (navigationController: UINavigationController, viewController: UIViewController, animated: boolean) => void) {
    this.delegate.navigationControllerWillShowViewControllerAnimated = value;
  }
  set navigationControllerDidShowViewControllerAnimated(value: (navigationController: UINavigationController, viewController: UIViewController, animated: boolean) => void) {
    this.delegate.navigationControllerDidShowViewControllerAnimated = value;
  }
  set navigationControllerSupportedInterfaceOrientations(value: (navigationController: UINavigationController) => interop.Enum<typeof UIInterfaceOrientationMask>) {
    this.delegate.navigationControllerSupportedInterfaceOrientations = value;
  }
  set navigationControllerPreferredInterfaceOrientationForPresentation(value: (navigationController: UINavigationController) => interop.Enum<typeof UIInterfaceOrientation>) {
    this.delegate.navigationControllerPreferredInterfaceOrientationForPresentation = value;
  }
  set navigationControllerInteractionControllerForAnimationController(value: (navigationController: UINavigationController, animationController: UIViewControllerAnimatedTransitioning) => UIViewControllerInteractiveTransitioning) {
    this.delegate.navigationControllerInteractionControllerForAnimationController = value;
  }
  set navigationControllerAnimationControllerForOperationFromViewControllerToViewController(value: (navigationController: UINavigationController, operation: interop.Enum<typeof UINavigationControllerOperation>, fromVC: UIViewController, toVC: UIViewController) => UIViewControllerAnimatedTransitioning) {
    this.delegate.navigationControllerAnimationControllerForOperationFromViewControllerToViewController = value;
  }
}

export class HTMLUIGraphicsImageRendererElement extends HTMLUIGraphicsRendererElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = UIGraphicsImageRenderer.new();

}

export class HTMLUIFontPickerViewControllerElement extends HTMLUIViewControllerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIFontPickerViewController.new();
  get delegate(): UIFontPickerViewControllerDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UIFontPickerViewControllerDelegateImpl.new();
    }
    return this.nativeObject.delegate as UIFontPickerViewControllerDelegateImpl;
  }

  get configuration(): UIFontPickerViewControllerConfiguration { return this.nativeObject.configuration; }
  get selectedFontDescriptor(): UIFontDescriptor { return this.nativeObject.selectedFontDescriptor; }
  set selectedFontDescriptor(value: UIFontDescriptor) { this.nativeObject.selectedFontDescriptor = value; }

  set fontPickerViewControllerDidCancel(value: (viewController: UIFontPickerViewController) => void) {
    this.delegate.fontPickerViewControllerDidCancel = value;
  }
  set fontPickerViewControllerDidPickFont(value: (viewController: UIFontPickerViewController) => void) {
    this.delegate.fontPickerViewControllerDidPickFont = value;
  }
}

export class HTMLUIDocumentPickerExtensionViewControllerElement extends HTMLUIViewControllerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIDocumentPickerExtensionViewController.new();

  get documentPickerMode(): interop.Enum<typeof UIDocumentPickerMode> { return this.nativeObject.documentPickerMode; }
  get originalURL(): NSURL { return this.nativeObject.originalURL; }
  get validTypes(): NSArray { return this.nativeObject.validTypes; }
  get providerIdentifier(): string { return this.nativeObject.providerIdentifier; }
  get documentStorageURL(): NSURL { return this.nativeObject.documentStorageURL; }
}

export class HTMLUITableViewFocusUpdateContextElement extends HTMLUIFocusUpdateContextElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITableViewFocusUpdateContext.new();

  get previouslyFocusedIndexPath(): NSIndexPath { return this.nativeObject.previouslyFocusedIndexPath; }
  get nextFocusedIndexPath(): NSIndexPath { return this.nativeObject.nextFocusedIndexPath; }
}

export class HTMLUICollectionViewDropPlaceholderElement extends HTMLUICollectionViewPlaceholderElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICollectionViewDropPlaceholder.new();

  get previewParametersProvider(): (p1: UICollectionViewCell) => UIDragPreviewParameters | null { return this.nativeObject.previewParametersProvider; }
  set previewParametersProvider(value: (p1: UICollectionViewCell) => UIDragPreviewParameters | null) { this.nativeObject.previewParametersProvider = value; }
}

export class HTMLUIAccessibilityElementElement extends HTMLUIResponderElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIAccessibilityElement.new();

  get accessibilityContainer(): interop.Object { return this.nativeObject.accessibilityContainer; }
  set accessibilityContainer(value: interop.Object) { this.nativeObject.accessibilityContainer = value; }
  get isAccessibilityElement(): boolean { return this.nativeObject.isAccessibilityElement; }
  set isAccessibilityElement(value: boolean) { this.nativeObject.isAccessibilityElement = value; }
  get accessibilityLabel(): string { return this.nativeObject.accessibilityLabel; }
  set accessibilityLabel(value: string) { this.nativeObject.accessibilityLabel = value; }
  get accessibilityHint(): string { return this.nativeObject.accessibilityHint; }
  set accessibilityHint(value: string) { this.nativeObject.accessibilityHint = value; }
  get accessibilityValue(): string { return this.nativeObject.accessibilityValue; }
  set accessibilityValue(value: string) { this.nativeObject.accessibilityValue = value; }
  get accessibilityFrame(): CGRect { return this.nativeObject.accessibilityFrame; }
  set accessibilityFrame(value: CGRect) { this.nativeObject.accessibilityFrame = value; }
  get accessibilityTraits(): number { return this.nativeObject.accessibilityTraits; }
  set accessibilityTraits(value: number) { this.nativeObject.accessibilityTraits = value; }
  get accessibilityFrameInContainerSpace(): CGRect { return this.nativeObject.accessibilityFrameInContainerSpace; }
  set accessibilityFrameInContainerSpace(value: CGRect) { this.nativeObject.accessibilityFrameInContainerSpace = value; }
  get accessibilityIdentifier(): string { return this.nativeObject.accessibilityIdentifier; }
  set accessibilityIdentifier(value: string) { this.nativeObject.accessibilityIdentifier = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUICollectionViewFocusUpdateContextElement extends HTMLUIFocusUpdateContextElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICollectionViewFocusUpdateContext.new();

  get previouslyFocusedIndexPath(): NSIndexPath { return this.nativeObject.previouslyFocusedIndexPath; }
  get nextFocusedIndexPath(): NSIndexPath { return this.nativeObject.nextFocusedIndexPath; }
}

export class HTMLUIImageSymbolConfigurationElement extends HTMLUIImageConfigurationElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIImageSymbolConfiguration.new();

}

export class HTMLUISceneElement extends HTMLUIResponderElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIScene.new();
  get delegate(): UISceneDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UISceneDelegateImpl.new();
    }
    return this.nativeObject.delegate as UISceneDelegateImpl;
  }

  get session(): UISceneSession { return this.nativeObject.session; }
  get activationState(): interop.Enum<typeof UISceneActivationState> { return this.nativeObject.activationState; }
  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get subtitle(): string { return this.nativeObject.subtitle; }
  set subtitle(value: string) { this.nativeObject.subtitle = value; }
  get activationConditions(): UISceneActivationConditions { return this.nativeObject.activationConditions; }
  set activationConditions(value: UISceneActivationConditions) { this.nativeObject.activationConditions = value; }
  get pointerLockState(): UIPointerLockState { return this.nativeObject.pointerLockState; }

  set sceneWillConnectToSessionOptions(value: (scene: UIScene, session: UISceneSession, connectionOptions: UISceneConnectionOptions) => void) {
    this.delegate.sceneWillConnectToSessionOptions = value;
  }
  set sceneDidDisconnect(value: (scene: UIScene) => void) {
    this.delegate.sceneDidDisconnect = value;
  }
  set sceneDidBecomeActive(value: (scene: UIScene) => void) {
    this.delegate.sceneDidBecomeActive = value;
  }
  set sceneWillResignActive(value: (scene: UIScene) => void) {
    this.delegate.sceneWillResignActive = value;
  }
  set sceneWillEnterForeground(value: (scene: UIScene) => void) {
    this.delegate.sceneWillEnterForeground = value;
  }
  set sceneDidEnterBackground(value: (scene: UIScene) => void) {
    this.delegate.sceneDidEnterBackground = value;
  }
  set sceneOpenURLContexts(value: (scene: UIScene, URLContexts: NSSet) => void) {
    this.delegate.sceneOpenURLContexts = value;
  }
  set stateRestorationActivityForScene(value: (scene: UIScene) => NSUserActivity) {
    this.delegate.stateRestorationActivityForScene = value;
  }
  set sceneRestoreInteractionStateWithUserActivity(value: (scene: UIScene, stateRestorationActivity: NSUserActivity) => void) {
    this.delegate.sceneRestoreInteractionStateWithUserActivity = value;
  }
  set sceneWillContinueUserActivityWithType(value: (scene: UIScene, userActivityType: string) => void) {
    this.delegate.sceneWillContinueUserActivityWithType = value;
  }
  set sceneContinueUserActivity(value: (scene: UIScene, userActivity: NSUserActivity) => void) {
    this.delegate.sceneContinueUserActivity = value;
  }
  set sceneDidFailToContinueUserActivityWithTypeError(value: (scene: UIScene, userActivityType: string, error: NSError) => void) {
    this.delegate.sceneDidFailToContinueUserActivityWithTypeError = value;
  }
  set sceneDidUpdateUserActivity(value: (scene: UIScene, userActivity: NSUserActivity) => void) {
    this.delegate.sceneDidUpdateUserActivity = value;
  }
}

export class HTMLNSCollectionLayoutGroupElement extends HTMLNSCollectionLayoutItemElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSCollectionLayoutGroup.new();

  get supplementaryItems(): NSArray { return this.nativeObject.supplementaryItems; }
  set supplementaryItems(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.supplementaryItems = value; }
  get interItemSpacing(): NSCollectionLayoutSpacing { return this.nativeObject.interItemSpacing; }
  set interItemSpacing(value: NSCollectionLayoutSpacing) { this.nativeObject.interItemSpacing = value; }
  get subitems(): NSArray { return this.nativeObject.subitems; }
}

export class HTMLUIViewElement extends HTMLUIResponderElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIView.new();

  get isUserInteractionEnabled(): boolean { return this.nativeObject.isUserInteractionEnabled; }
  set isUserInteractionEnabled(value: boolean) { this.nativeObject.isUserInteractionEnabled = value; }
  get tag(): number { return this.nativeObject.tag; }
  set tag(value: number) { this.nativeObject.tag = value; }
  get layer(): CALayer { return this.nativeObject.layer; }
  get canBecomeFocused(): boolean { return this.nativeObject.canBecomeFocused; }
  get isFocused(): boolean { return this.nativeObject.isFocused; }
  get focusGroupIdentifier(): string { return this.nativeObject.focusGroupIdentifier; }
  set focusGroupIdentifier(value: string) { this.nativeObject.focusGroupIdentifier = value; }
  get focusGroupPriority(): number { return this.nativeObject.focusGroupPriority; }
  set focusGroupPriority(value: number) { this.nativeObject.focusGroupPriority = value; }
  get focusEffect(): UIFocusEffect { return this.nativeObject.focusEffect; }
  set focusEffect(value: UIFocusEffect) { this.nativeObject.focusEffect = value; }
  get semanticContentAttribute(): interop.Enum<typeof UISemanticContentAttribute> { return this.nativeObject.semanticContentAttribute; }
  set semanticContentAttribute(value: interop.Enum<typeof UISemanticContentAttribute>) { this.nativeObject.semanticContentAttribute = value; }
  get effectiveUserInterfaceLayoutDirection(): interop.Enum<typeof UIUserInterfaceLayoutDirection> { return this.nativeObject.effectiveUserInterfaceLayoutDirection; }
  get frame(): CGRect { return this.nativeObject.frame; }
  set frame(value: CGRect) { this.nativeObject.frame = value; }
  get bounds(): CGRect { return this.nativeObject.bounds; }
  set bounds(value: CGRect) { this.nativeObject.bounds = value; }
  get center(): CGPoint { return this.nativeObject.center; }
  set center(value: CGPoint) { this.nativeObject.center = value; }
  get transform(): CGAffineTransform { return this.nativeObject.transform; }
  set transform(value: CGAffineTransform) { this.nativeObject.transform = value; }
  get transform3D(): CATransform3D { return this.nativeObject.transform3D; }
  set transform3D(value: CATransform3D) { this.nativeObject.transform3D = value; }
  get contentScaleFactor(): number { return this.nativeObject.contentScaleFactor; }
  set contentScaleFactor(value: number) { this.nativeObject.contentScaleFactor = value; }
  get anchorPoint(): CGPoint { return this.nativeObject.anchorPoint; }
  set anchorPoint(value: CGPoint) { this.nativeObject.anchorPoint = value; }
  get isMultipleTouchEnabled(): boolean { return this.nativeObject.isMultipleTouchEnabled; }
  set isMultipleTouchEnabled(value: boolean) { this.nativeObject.isMultipleTouchEnabled = value; }
  get isExclusiveTouch(): boolean { return this.nativeObject.isExclusiveTouch; }
  set isExclusiveTouch(value: boolean) { this.nativeObject.isExclusiveTouch = value; }
  get autoresizesSubviews(): boolean { return this.nativeObject.autoresizesSubviews; }
  set autoresizesSubviews(value: boolean) { this.nativeObject.autoresizesSubviews = value; }
  get autoresizingMask(): interop.Enum<typeof UIViewAutoresizing> { return this.nativeObject.autoresizingMask; }
  set autoresizingMask(value: interop.Enum<typeof UIViewAutoresizing>) { this.nativeObject.autoresizingMask = value; }
  get superview(): UIView { return this.nativeObject.superview; }
  get subviews(): NSArray { return this.nativeObject.subviews; }
  get window(): UIWindow { return this.nativeObject.window; }
  get layoutMargins(): UIEdgeInsets { return this.nativeObject.layoutMargins; }
  set layoutMargins(value: UIEdgeInsets) { this.nativeObject.layoutMargins = value; }
  get directionalLayoutMargins(): NSDirectionalEdgeInsets { return this.nativeObject.directionalLayoutMargins; }
  set directionalLayoutMargins(value: NSDirectionalEdgeInsets) { this.nativeObject.directionalLayoutMargins = value; }
  get preservesSuperviewLayoutMargins(): boolean { return this.nativeObject.preservesSuperviewLayoutMargins; }
  set preservesSuperviewLayoutMargins(value: boolean) { this.nativeObject.preservesSuperviewLayoutMargins = value; }
  get insetsLayoutMarginsFromSafeArea(): boolean { return this.nativeObject.insetsLayoutMarginsFromSafeArea; }
  set insetsLayoutMarginsFromSafeArea(value: boolean) { this.nativeObject.insetsLayoutMarginsFromSafeArea = value; }
  get safeAreaInsets(): UIEdgeInsets { return this.nativeObject.safeAreaInsets; }
  get layoutMarginsGuide(): UILayoutGuide { return this.nativeObject.layoutMarginsGuide; }
  get readableContentGuide(): UILayoutGuide { return this.nativeObject.readableContentGuide; }
  get safeAreaLayoutGuide(): UILayoutGuide { return this.nativeObject.safeAreaLayoutGuide; }
  get keyboardLayoutGuide(): UIKeyboardLayoutGuide { return this.nativeObject.keyboardLayoutGuide; }
  get clipsToBounds(): boolean { return this.nativeObject.clipsToBounds; }
  set clipsToBounds(value: boolean) { this.nativeObject.clipsToBounds = value; }
  get backgroundColor(): UIColor { return this.nativeObject.backgroundColor; }
  set backgroundColor(value: UIColor) { this.nativeObject.backgroundColor = value; }
  get alpha(): number { return this.nativeObject.alpha; }
  set alpha(value: number) { this.nativeObject.alpha = value; }
  get isOpaque(): boolean { return this.nativeObject.isOpaque; }
  set isOpaque(value: boolean) { this.nativeObject.isOpaque = value; }
  get clearsContextBeforeDrawing(): boolean { return this.nativeObject.clearsContextBeforeDrawing; }
  set clearsContextBeforeDrawing(value: boolean) { this.nativeObject.clearsContextBeforeDrawing = value; }
  get isHidden(): boolean { return this.nativeObject.isHidden; }
  set isHidden(value: boolean) { this.nativeObject.isHidden = value; }
  get contentMode(): interop.Enum<typeof UIViewContentMode> { return this.nativeObject.contentMode; }
  set contentMode(value: interop.Enum<typeof UIViewContentMode>) { this.nativeObject.contentMode = value; }
  get contentStretch(): CGRect { return this.nativeObject.contentStretch; }
  set contentStretch(value: CGRect) { this.nativeObject.contentStretch = value; }
  get maskView(): UIView { return this.nativeObject.maskView; }
  set maskView(value: UIView) { this.nativeObject.maskView = value; }
  get tintColor(): UIColor { return this.nativeObject.tintColor; }
  set tintColor(value: UIColor) { this.nativeObject.tintColor = value; }
  get tintAdjustmentMode(): interop.Enum<typeof UIViewTintAdjustmentMode> { return this.nativeObject.tintAdjustmentMode; }
  set tintAdjustmentMode(value: interop.Enum<typeof UIViewTintAdjustmentMode>) { this.nativeObject.tintAdjustmentMode = value; }
  get gestureRecognizers(): NSArray { return this.nativeObject.gestureRecognizers; }
  set gestureRecognizers(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.gestureRecognizers = value; }
  get motionEffects(): NSArray { return this.nativeObject.motionEffects; }
  set motionEffects(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.motionEffects = value; }
  get constraints(): NSArray { return this.nativeObject.constraints; }
  get translatesAutoresizingMaskIntoConstraints(): boolean { return this.nativeObject.translatesAutoresizingMaskIntoConstraints; }
  set translatesAutoresizingMaskIntoConstraints(value: boolean) { this.nativeObject.translatesAutoresizingMaskIntoConstraints = value; }
  get alignmentRectInsets(): UIEdgeInsets { return this.nativeObject.alignmentRectInsets; }
  get viewForFirstBaselineLayout(): UIView { return this.nativeObject.viewForFirstBaselineLayout; }
  get viewForLastBaselineLayout(): UIView { return this.nativeObject.viewForLastBaselineLayout; }
  get intrinsicContentSize(): CGSize { return this.nativeObject.intrinsicContentSize; }
  get layoutGuides(): NSArray { return this.nativeObject.layoutGuides; }
  get leadingAnchor(): NSLayoutXAxisAnchor { return this.nativeObject.leadingAnchor; }
  get trailingAnchor(): NSLayoutXAxisAnchor { return this.nativeObject.trailingAnchor; }
  get leftAnchor(): NSLayoutXAxisAnchor { return this.nativeObject.leftAnchor; }
  get rightAnchor(): NSLayoutXAxisAnchor { return this.nativeObject.rightAnchor; }
  get topAnchor(): NSLayoutYAxisAnchor { return this.nativeObject.topAnchor; }
  get bottomAnchor(): NSLayoutYAxisAnchor { return this.nativeObject.bottomAnchor; }
  get widthAnchor(): NSLayoutDimension { return this.nativeObject.widthAnchor; }
  get heightAnchor(): NSLayoutDimension { return this.nativeObject.heightAnchor; }
  get centerXAnchor(): NSLayoutXAxisAnchor { return this.nativeObject.centerXAnchor; }
  get centerYAnchor(): NSLayoutYAxisAnchor { return this.nativeObject.centerYAnchor; }
  get firstBaselineAnchor(): NSLayoutYAxisAnchor { return this.nativeObject.firstBaselineAnchor; }
  get lastBaselineAnchor(): NSLayoutYAxisAnchor { return this.nativeObject.lastBaselineAnchor; }
  get hasAmbiguousLayout(): boolean { return this.nativeObject.hasAmbiguousLayout; }
  get restorationIdentifier(): string { return this.nativeObject.restorationIdentifier; }
  set restorationIdentifier(value: string) { this.nativeObject.restorationIdentifier = value; }
  get overrideUserInterfaceStyle(): interop.Enum<typeof UIUserInterfaceStyle> { return this.nativeObject.overrideUserInterfaceStyle; }
  set overrideUserInterfaceStyle(value: interop.Enum<typeof UIUserInterfaceStyle>) { this.nativeObject.overrideUserInterfaceStyle = value; }
  get minimumContentSizeCategory(): string { return this.nativeObject.minimumContentSizeCategory; }
  set minimumContentSizeCategory(value: string) { this.nativeObject.minimumContentSizeCategory = value; }
  get maximumContentSizeCategory(): string { return this.nativeObject.maximumContentSizeCategory; }
  set maximumContentSizeCategory(value: string) { this.nativeObject.maximumContentSizeCategory = value; }
  get appliedContentSizeCategoryLimitsDescription(): string { return this.nativeObject.appliedContentSizeCategoryLimitsDescription; }
  get traitOverrides(): UITraitOverrides { return this.nativeObject.traitOverrides; }
  get interactions(): NSArray { return this.nativeObject.interactions; }
  set interactions(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.interactions = value; }
  get accessibilityIgnoresInvertColors(): boolean { return this.nativeObject.accessibilityIgnoresInvertColors; }
  set accessibilityIgnoresInvertColors(value: boolean) { this.nativeObject.accessibilityIgnoresInvertColors = value; }
  get showsLargeContentViewer(): boolean { return this.nativeObject.showsLargeContentViewer; }
  set showsLargeContentViewer(value: boolean) { this.nativeObject.showsLargeContentViewer = value; }
  get largeContentTitle(): string { return this.nativeObject.largeContentTitle; }
  set largeContentTitle(value: string) { this.nativeObject.largeContentTitle = value; }
  get largeContentImage(): UIImage { return this.nativeObject.largeContentImage; }
  set largeContentImage(value: UIImage) { this.nativeObject.largeContentImage = value; }
  get scalesLargeContentImage(): boolean { return this.nativeObject.scalesLargeContentImage; }
  set scalesLargeContentImage(value: boolean) { this.nativeObject.scalesLargeContentImage = value; }
  get largeContentImageInsets(): UIEdgeInsets { return this.nativeObject.largeContentImageInsets; }
  set largeContentImageInsets(value: UIEdgeInsets) { this.nativeObject.largeContentImageInsets = value; }
  get hoverStyle(): UIHoverStyle { return this.nativeObject.hoverStyle; }
  set hoverStyle(value: UIHoverStyle) { this.nativeObject.hoverStyle = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
  get collisionBoundsType(): interop.Enum<typeof UIDynamicItemCollisionBoundsType> { return this.nativeObject.collisionBoundsType; }
  get collisionBoundingPath(): UIBezierPath { return this.nativeObject.collisionBoundingPath; }
  get traitCollection(): UITraitCollection { return this.nativeObject.traitCollection; }
  get isTransparentFocusItem(): boolean { return this.nativeObject.isTransparentFocusItem; }
  get preferredFocusEnvironments(): NSArray { return this.nativeObject.preferredFocusEnvironments; }
  get parentFocusEnvironment(): UIFocusEnvironment { return this.nativeObject.parentFocusEnvironment; }
  get focusItemContainer(): UIFocusItemContainer { return this.nativeObject.focusItemContainer; }
  get preferredFocusedView(): UIView { return this.nativeObject.preferredFocusedView; }
  get coordinateSpace(): UICoordinateSpace { return this.nativeObject.coordinateSpace; }
}

export class HTMLUIKeyCommandElement extends HTMLUICommandElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = UIKeyCommand.new();

  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get image(): UIImage { return this.nativeObject.image; }
  set image(value: UIImage) { this.nativeObject.image = value; }
  get discoverabilityTitle(): string { return this.nativeObject.discoverabilityTitle; }
  set discoverabilityTitle(value: string) { this.nativeObject.discoverabilityTitle = value; }
  get action(): string { return this.nativeObject.action; }
  get input(): string { return this.nativeObject.input; }
  get modifierFlags(): interop.Enum<typeof UIKeyModifierFlags> { return this.nativeObject.modifierFlags; }
  get propertyList(): interop.Object { return this.nativeObject.propertyList; }
  get state(): interop.Enum<typeof UIMenuElementState> { return this.nativeObject.state; }
  set state(value: interop.Enum<typeof UIMenuElementState>) { this.nativeObject.state = value; }
  get alternates(): NSArray { return this.nativeObject.alternates; }
  get wantsPriorityOverSystemBehavior(): boolean { return this.nativeObject.wantsPriorityOverSystemBehavior; }
  set wantsPriorityOverSystemBehavior(value: boolean) { this.nativeObject.wantsPriorityOverSystemBehavior = value; }
  get allowsAutomaticLocalization(): boolean { return this.nativeObject.allowsAutomaticLocalization; }
  set allowsAutomaticLocalization(value: boolean) { this.nativeObject.allowsAutomaticLocalization = value; }
  get allowsAutomaticMirroring(): boolean { return this.nativeObject.allowsAutomaticMirroring; }
  set allowsAutomaticMirroring(value: boolean) { this.nativeObject.allowsAutomaticMirroring = value; }
}

export class HTMLUIPickerViewElement extends HTMLUIViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPickerView.new();
  get delegate(): UIPickerViewDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UIPickerViewDelegateImpl.new();
    }
    return this.nativeObject.delegate as UIPickerViewDelegateImpl;
  }

  get dataSource(): UIPickerViewDataSource { return this.nativeObject.dataSource; }
  set dataSource(value: UIPickerViewDataSource) { this.nativeObject.dataSource = value; }
  get showsSelectionIndicator(): boolean { return this.nativeObject.showsSelectionIndicator; }
  set showsSelectionIndicator(value: boolean) { this.nativeObject.showsSelectionIndicator = value; }
  get numberOfComponents(): number { return this.nativeObject.numberOfComponents; }

  set pickerViewWidthForComponent(value: (pickerView: UIPickerView, component: number) => number) {
    this.delegate.pickerViewWidthForComponent = value;
  }
  set pickerViewRowHeightForComponent(value: (pickerView: UIPickerView, component: number) => number) {
    this.delegate.pickerViewRowHeightForComponent = value;
  }
  set pickerViewTitleForRowForComponent(value: (pickerView: UIPickerView, row: number, component: number) => string) {
    this.delegate.pickerViewTitleForRowForComponent = value;
  }
  set pickerViewAttributedTitleForRowForComponent(value: (pickerView: UIPickerView, row: number, component: number) => NSAttributedString) {
    this.delegate.pickerViewAttributedTitleForRowForComponent = value;
  }
  set pickerViewViewForRowForComponentReusingView(value: (pickerView: UIPickerView, row: number, component: number, view: UIView | null) => UIView) {
    this.delegate.pickerViewViewForRowForComponentReusingView = value;
  }
  set pickerViewDidSelectRowInComponent(value: (pickerView: UIPickerView, row: number, component: number) => void) {
    this.delegate.pickerViewDidSelectRowInComponent = value;
  }
}

export class HTMLUIWebViewElement extends HTMLUIViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIWebView.new();
  get delegate(): UIWebViewDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UIWebViewDelegateImpl.new();
    }
    return this.nativeObject.delegate as UIWebViewDelegateImpl;
  }

  get scrollView(): UIScrollView { return this.nativeObject.scrollView; }
  get request(): NSURLRequest { return this.nativeObject.request; }
  get canGoBack(): boolean { return this.nativeObject.canGoBack; }
  get canGoForward(): boolean { return this.nativeObject.canGoForward; }
  get isLoading(): boolean { return this.nativeObject.isLoading; }
  get scalesPageToFit(): boolean { return this.nativeObject.scalesPageToFit; }
  set scalesPageToFit(value: boolean) { this.nativeObject.scalesPageToFit = value; }
  get detectsPhoneNumbers(): boolean { return this.nativeObject.detectsPhoneNumbers; }
  set detectsPhoneNumbers(value: boolean) { this.nativeObject.detectsPhoneNumbers = value; }
  get dataDetectorTypes(): interop.Enum<typeof UIDataDetectorTypes> { return this.nativeObject.dataDetectorTypes; }
  set dataDetectorTypes(value: interop.Enum<typeof UIDataDetectorTypes>) { this.nativeObject.dataDetectorTypes = value; }
  get allowsInlineMediaPlayback(): boolean { return this.nativeObject.allowsInlineMediaPlayback; }
  set allowsInlineMediaPlayback(value: boolean) { this.nativeObject.allowsInlineMediaPlayback = value; }
  get mediaPlaybackRequiresUserAction(): boolean { return this.nativeObject.mediaPlaybackRequiresUserAction; }
  set mediaPlaybackRequiresUserAction(value: boolean) { this.nativeObject.mediaPlaybackRequiresUserAction = value; }
  get mediaPlaybackAllowsAirPlay(): boolean { return this.nativeObject.mediaPlaybackAllowsAirPlay; }
  set mediaPlaybackAllowsAirPlay(value: boolean) { this.nativeObject.mediaPlaybackAllowsAirPlay = value; }
  get suppressesIncrementalRendering(): boolean { return this.nativeObject.suppressesIncrementalRendering; }
  set suppressesIncrementalRendering(value: boolean) { this.nativeObject.suppressesIncrementalRendering = value; }
  get keyboardDisplayRequiresUserAction(): boolean { return this.nativeObject.keyboardDisplayRequiresUserAction; }
  set keyboardDisplayRequiresUserAction(value: boolean) { this.nativeObject.keyboardDisplayRequiresUserAction = value; }
  get paginationMode(): interop.Enum<typeof UIWebPaginationMode> { return this.nativeObject.paginationMode; }
  set paginationMode(value: interop.Enum<typeof UIWebPaginationMode>) { this.nativeObject.paginationMode = value; }
  get paginationBreakingMode(): interop.Enum<typeof UIWebPaginationBreakingMode> { return this.nativeObject.paginationBreakingMode; }
  set paginationBreakingMode(value: interop.Enum<typeof UIWebPaginationBreakingMode>) { this.nativeObject.paginationBreakingMode = value; }
  get pageLength(): number { return this.nativeObject.pageLength; }
  set pageLength(value: number) { this.nativeObject.pageLength = value; }
  get gapBetweenPages(): number { return this.nativeObject.gapBetweenPages; }
  set gapBetweenPages(value: number) { this.nativeObject.gapBetweenPages = value; }
  get pageCount(): number { return this.nativeObject.pageCount; }
  get allowsPictureInPictureMediaPlayback(): boolean { return this.nativeObject.allowsPictureInPictureMediaPlayback; }
  set allowsPictureInPictureMediaPlayback(value: boolean) { this.nativeObject.allowsPictureInPictureMediaPlayback = value; }
  get allowsLinkPreview(): boolean { return this.nativeObject.allowsLinkPreview; }
  set allowsLinkPreview(value: boolean) { this.nativeObject.allowsLinkPreview = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }

  set webViewShouldStartLoadWithRequestNavigationType(value: (webView: UIWebView, request: NSURLRequest, navigationType: interop.Enum<typeof UIWebViewNavigationType>) => boolean) {
    this.delegate.webViewShouldStartLoadWithRequestNavigationType = value;
  }
  set webViewDidStartLoad(value: (webView: UIWebView) => void) {
    this.delegate.webViewDidStartLoad = value;
  }
  set webViewDidFinishLoad(value: (webView: UIWebView) => void) {
    this.delegate.webViewDidFinishLoad = value;
  }
  set webViewDidFailLoadWithError(value: (webView: UIWebView, error: NSError) => void) {
    this.delegate.webViewDidFailLoadWithError = value;
  }
}

export class HTMLUIWindowElement extends HTMLUIViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIWindow.new();

  get windowScene(): UIWindowScene { return this.nativeObject.windowScene; }
  set windowScene(value: UIWindowScene) { this.nativeObject.windowScene = value; }
  get canResizeToFitContent(): boolean { return this.nativeObject.canResizeToFitContent; }
  set canResizeToFitContent(value: boolean) { this.nativeObject.canResizeToFitContent = value; }
  get screen(): UIScreen { return this.nativeObject.screen; }
  set screen(value: UIScreen) { this.nativeObject.screen = value; }
  get windowLevel(): number { return this.nativeObject.windowLevel; }
  set windowLevel(value: number) { this.nativeObject.windowLevel = value; }
  get isKeyWindow(): boolean { return this.nativeObject.isKeyWindow; }
  get canBecomeKeyWindow(): boolean { return this.nativeObject.canBecomeKeyWindow; }
  get rootViewController(): UIViewController { return this.nativeObject.rootViewController; }
  set rootViewController(value: UIViewController) { this.nativeObject.rootViewController = value; }
  get safeAreaAspectFitLayoutGuide(): UILayoutGuide { return this.nativeObject.safeAreaAspectFitLayoutGuide; }
}

export class HTMLUIEventAttributionViewElement extends HTMLUIViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIEventAttributionView.new();

}

export class HTMLUINavigationBarElement extends HTMLUIViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UINavigationBar.new();
  get delegate(): UINavigationBarDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UINavigationBarDelegateImpl.new();
    }
    return this.nativeObject.delegate as UINavigationBarDelegateImpl;
  }

  get barStyle(): interop.Enum<typeof UIBarStyle> { return this.nativeObject.barStyle; }
  set barStyle(value: interop.Enum<typeof UIBarStyle>) { this.nativeObject.barStyle = value; }
  get isTranslucent(): boolean { return this.nativeObject.isTranslucent; }
  set isTranslucent(value: boolean) { this.nativeObject.isTranslucent = value; }
  get topItem(): UINavigationItem { return this.nativeObject.topItem; }
  get backItem(): UINavigationItem { return this.nativeObject.backItem; }
  get items(): NSArray { return this.nativeObject.items; }
  set items(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.items = value; }
  get prefersLargeTitles(): boolean { return this.nativeObject.prefersLargeTitles; }
  set prefersLargeTitles(value: boolean) { this.nativeObject.prefersLargeTitles = value; }
  get currentNSToolbarSection(): interop.Enum<typeof UINavigationBarNSToolbarSection> { return this.nativeObject.currentNSToolbarSection; }
  get behavioralStyle(): interop.Enum<typeof UIBehavioralStyle> { return this.nativeObject.behavioralStyle; }
  get preferredBehavioralStyle(): interop.Enum<typeof UIBehavioralStyle> { return this.nativeObject.preferredBehavioralStyle; }
  set preferredBehavioralStyle(value: interop.Enum<typeof UIBehavioralStyle>) { this.nativeObject.preferredBehavioralStyle = value; }
  get tintColor(): UIColor { return this.nativeObject.tintColor; }
  set tintColor(value: UIColor) { this.nativeObject.tintColor = value; }
  get barTintColor(): UIColor { return this.nativeObject.barTintColor; }
  set barTintColor(value: UIColor) { this.nativeObject.barTintColor = value; }
  get shadowImage(): UIImage { return this.nativeObject.shadowImage; }
  set shadowImage(value: UIImage) { this.nativeObject.shadowImage = value; }
  get titleTextAttributes(): NSDictionary { return this.nativeObject.titleTextAttributes; }
  set titleTextAttributes(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) { this.nativeObject.titleTextAttributes = value; }
  get largeTitleTextAttributes(): NSDictionary { return this.nativeObject.largeTitleTextAttributes; }
  set largeTitleTextAttributes(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) { this.nativeObject.largeTitleTextAttributes = value; }
  get backIndicatorImage(): UIImage { return this.nativeObject.backIndicatorImage; }
  set backIndicatorImage(value: UIImage) { this.nativeObject.backIndicatorImage = value; }
  get backIndicatorTransitionMaskImage(): UIImage { return this.nativeObject.backIndicatorTransitionMaskImage; }
  set backIndicatorTransitionMaskImage(value: UIImage) { this.nativeObject.backIndicatorTransitionMaskImage = value; }
  get standardAppearance(): UINavigationBarAppearance { return this.nativeObject.standardAppearance; }
  set standardAppearance(value: UINavigationBarAppearance) { this.nativeObject.standardAppearance = value; }
  get compactAppearance(): UINavigationBarAppearance { return this.nativeObject.compactAppearance; }
  set compactAppearance(value: UINavigationBarAppearance) { this.nativeObject.compactAppearance = value; }
  get scrollEdgeAppearance(): UINavigationBarAppearance { return this.nativeObject.scrollEdgeAppearance; }
  set scrollEdgeAppearance(value: UINavigationBarAppearance) { this.nativeObject.scrollEdgeAppearance = value; }
  get compactScrollEdgeAppearance(): UINavigationBarAppearance { return this.nativeObject.compactScrollEdgeAppearance; }
  set compactScrollEdgeAppearance(value: UINavigationBarAppearance) { this.nativeObject.compactScrollEdgeAppearance = value; }
  get barPosition(): interop.Enum<typeof UIBarPosition> { return this.nativeObject.barPosition; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }

  set navigationBarShouldPushItem(value: (navigationBar: UINavigationBar, item: UINavigationItem) => boolean) {
    this.delegate.navigationBarShouldPushItem = value;
  }
  set navigationBarDidPushItem(value: (navigationBar: UINavigationBar, item: UINavigationItem) => void) {
    this.delegate.navigationBarDidPushItem = value;
  }
  set navigationBarShouldPopItem(value: (navigationBar: UINavigationBar, item: UINavigationItem) => boolean) {
    this.delegate.navigationBarShouldPopItem = value;
  }
  set navigationBarDidPopItem(value: (navigationBar: UINavigationBar, item: UINavigationItem) => void) {
    this.delegate.navigationBarDidPopItem = value;
  }
  set navigationBarNSToolbarSection(value: (navigationBar: UINavigationBar) => interop.Enum<typeof UINavigationBarNSToolbarSection>) {
    this.delegate.navigationBarNSToolbarSection = value;
  }
}

export class HTMLUIPageControlTimerProgressElement extends HTMLUIPageControlProgressElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = UIPageControlTimerProgress.new();
  get delegate(): UIPageControlTimerProgressDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UIPageControlTimerProgressDelegateImpl.new();
    }
    return this.nativeObject.delegate as UIPageControlTimerProgressDelegateImpl;
  }

  get resetsToInitialPageAfterEnd(): boolean { return this.nativeObject.resetsToInitialPageAfterEnd; }
  set resetsToInitialPageAfterEnd(value: boolean) { this.nativeObject.resetsToInitialPageAfterEnd = value; }
  get isRunning(): boolean { return this.nativeObject.isRunning; }
  get preferredDuration(): number { return this.nativeObject.preferredDuration; }
  set preferredDuration(value: number) { this.nativeObject.preferredDuration = value; }

  set pageControlTimerProgressDidChange(value: (progress: UIPageControlTimerProgress) => void) {
    this.delegate.pageControlTimerProgressDidChange = value;
  }
  set pageControlTimerProgressShouldAdvanceToPage(value: (progress: UIPageControlTimerProgress, page: number) => boolean) {
    this.delegate.pageControlTimerProgressShouldAdvanceToPage = value;
  }
}

export class HTMLUIFocusGuideElement extends HTMLUILayoutGuideElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIFocusGuide.new();

  get isEnabled(): boolean { return this.nativeObject.isEnabled; }
  set isEnabled(value: boolean) { this.nativeObject.isEnabled = value; }
  get preferredFocusEnvironments(): NSArray { return this.nativeObject.preferredFocusEnvironments; }
  set preferredFocusEnvironments(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.preferredFocusEnvironments = value; }
  get preferredFocusedView(): UIView { return this.nativeObject.preferredFocusedView; }
  set preferredFocusedView(value: UIView) { this.nativeObject.preferredFocusedView = value; }
}

export class HTMLUIShapeResolutionContextElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIShapeResolutionContext.new();

  get contentShape(): UIResolvedShape { return this.nativeObject.contentShape; }
}

export class HTMLUIPasteboardElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPasteboard.new();

  get name(): string { return this.nativeObject.name; }
  get isPersistent(): boolean { return this.nativeObject.isPersistent; }
  get changeCount(): number { return this.nativeObject.changeCount; }
  get itemProviders(): NSArray { return this.nativeObject.itemProviders; }
  set itemProviders(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.itemProviders = value; }
  get pasteboardTypes(): NSArray { return this.nativeObject.pasteboardTypes; }
  get numberOfItems(): number { return this.nativeObject.numberOfItems; }
  get items(): NSArray { return this.nativeObject.items; }
  set items(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.items = value; }
  get string(): string { return this.nativeObject.string; }
  set string(value: string) { this.nativeObject.string = value; }
  get strings(): NSArray { return this.nativeObject.strings; }
  set strings(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.strings = value; }
  get URL(): NSURL { return this.nativeObject.URL; }
  set URL(value: NSURL) { this.nativeObject.URL = value; }
  get URLs(): NSArray { return this.nativeObject.URLs; }
  set URLs(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.URLs = value; }
  get image(): UIImage { return this.nativeObject.image; }
  set image(value: UIImage) { this.nativeObject.image = value; }
  get images(): NSArray { return this.nativeObject.images; }
  set images(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.images = value; }
  get color(): UIColor { return this.nativeObject.color; }
  set color(value: UIColor) { this.nativeObject.color = value; }
  get colors(): NSArray { return this.nativeObject.colors; }
  set colors(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.colors = value; }
  get hasStrings(): boolean { return this.nativeObject.hasStrings; }
  get hasURLs(): boolean { return this.nativeObject.hasURLs; }
  get hasImages(): boolean { return this.nativeObject.hasImages; }
  get hasColors(): boolean { return this.nativeObject.hasColors; }
}

export class HTMLUIPrintPaperElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPrintPaper.new();

  get paperSize(): CGSize { return this.nativeObject.paperSize; }
  get printableRect(): CGRect { return this.nativeObject.printableRect; }
}

export class HTMLUIActivityViewControllerElement extends HTMLUIViewControllerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIActivityViewController.new();

  get completionHandler(): (p1: string, p2: boolean) => void { return this.nativeObject.completionHandler; }
  set completionHandler(value: (p1: string, p2: boolean) => void) { this.nativeObject.completionHandler = value; }
  get completionWithItemsHandler(): (p1: string, p2: boolean, p3: NSArray<interop.Object> | Array<interop.Object>, p4: NSError) => void { return this.nativeObject.completionWithItemsHandler; }
  set completionWithItemsHandler(value: (p1: string, p2: boolean, p3: NSArray<interop.Object> | Array<interop.Object>, p4: NSError) => void) { this.nativeObject.completionWithItemsHandler = value; }
  get excludedActivityTypes(): NSArray { return this.nativeObject.excludedActivityTypes; }
  set excludedActivityTypes(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.excludedActivityTypes = value; }
  get allowsProminentActivity(): boolean { return this.nativeObject.allowsProminentActivity; }
  set allowsProminentActivity(value: boolean) { this.nativeObject.allowsProminentActivity = value; }
}

export class HTMLNSTextElementElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTextElement.new();

  get textContentManager(): NSTextContentManager { return this.nativeObject.textContentManager; }
  set textContentManager(value: NSTextContentManager) { this.nativeObject.textContentManager = value; }
  get elementRange(): NSTextRange { return this.nativeObject.elementRange; }
  set elementRange(value: NSTextRange) { this.nativeObject.elementRange = value; }
  get childElements(): NSArray { return this.nativeObject.childElements; }
  get isRepresentedElement(): boolean { return this.nativeObject.isRepresentedElement; }
}

export class HTMLNSTextRangeElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTextRange.new();

  get isEmpty(): boolean { return this.nativeObject.isEmpty; }
  get location(): NSTextLocation { return this.nativeObject.location; }
  get endLocation(): NSTextLocation { return this.nativeObject.endLocation; }
}

export class HTMLUIContentUnavailableImagePropertiesElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIContentUnavailableImageProperties.new();

  get preferredSymbolConfiguration(): UIImageSymbolConfiguration { return this.nativeObject.preferredSymbolConfiguration; }
  set preferredSymbolConfiguration(value: UIImageSymbolConfiguration) { this.nativeObject.preferredSymbolConfiguration = value; }
  get tintColor(): UIColor { return this.nativeObject.tintColor; }
  set tintColor(value: UIColor) { this.nativeObject.tintColor = value; }
  get cornerRadius(): number { return this.nativeObject.cornerRadius; }
  set cornerRadius(value: number) { this.nativeObject.cornerRadius = value; }
  get maximumSize(): CGSize { return this.nativeObject.maximumSize; }
  set maximumSize(value: CGSize) { this.nativeObject.maximumSize = value; }
  get accessibilityIgnoresInvertColors(): boolean { return this.nativeObject.accessibilityIgnoresInvertColors; }
  set accessibilityIgnoresInvertColors(value: boolean) { this.nativeObject.accessibilityIgnoresInvertColors = value; }
}

export class HTMLNSTextListElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTextList.new();

  get markerFormat(): string { return this.nativeObject.markerFormat; }
  get listOptions(): interop.Enum<typeof NSTextListOptions> { return this.nativeObject.listOptions; }
  get startingItemNumber(): number { return this.nativeObject.startingItemNumber; }
  set startingItemNumber(value: number) { this.nativeObject.startingItemNumber = value; }
  get isOrdered(): boolean { return this.nativeObject.isOrdered; }
}

export class HTMLUITableViewCellElement extends HTMLUIViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITableViewCell.new();

  get configurationState(): UICellConfigurationState { return this.nativeObject.configurationState; }
  get configurationUpdateHandler(): (p1: UITableViewCell, p2: UICellConfigurationState) => void { return this.nativeObject.configurationUpdateHandler; }
  set configurationUpdateHandler(value: (p1: UITableViewCell, p2: UICellConfigurationState) => void) { this.nativeObject.configurationUpdateHandler = value; }
  get contentConfiguration(): UIContentConfiguration { return this.nativeObject.contentConfiguration; }
  set contentConfiguration(value: UIContentConfiguration) { this.nativeObject.contentConfiguration = value; }
  get automaticallyUpdatesContentConfiguration(): boolean { return this.nativeObject.automaticallyUpdatesContentConfiguration; }
  set automaticallyUpdatesContentConfiguration(value: boolean) { this.nativeObject.automaticallyUpdatesContentConfiguration = value; }
  get contentView(): UIView { return this.nativeObject.contentView; }
  get imageView(): UIImageView { return this.nativeObject.imageView; }
  get textLabel(): UILabel { return this.nativeObject.textLabel; }
  get detailTextLabel(): UILabel { return this.nativeObject.detailTextLabel; }
  get backgroundConfiguration(): UIBackgroundConfiguration { return this.nativeObject.backgroundConfiguration; }
  set backgroundConfiguration(value: UIBackgroundConfiguration) { this.nativeObject.backgroundConfiguration = value; }
  get automaticallyUpdatesBackgroundConfiguration(): boolean { return this.nativeObject.automaticallyUpdatesBackgroundConfiguration; }
  set automaticallyUpdatesBackgroundConfiguration(value: boolean) { this.nativeObject.automaticallyUpdatesBackgroundConfiguration = value; }
  get backgroundView(): UIView { return this.nativeObject.backgroundView; }
  set backgroundView(value: UIView) { this.nativeObject.backgroundView = value; }
  get selectedBackgroundView(): UIView { return this.nativeObject.selectedBackgroundView; }
  set selectedBackgroundView(value: UIView) { this.nativeObject.selectedBackgroundView = value; }
  get multipleSelectionBackgroundView(): UIView { return this.nativeObject.multipleSelectionBackgroundView; }
  set multipleSelectionBackgroundView(value: UIView) { this.nativeObject.multipleSelectionBackgroundView = value; }
  get reuseIdentifier(): string { return this.nativeObject.reuseIdentifier; }
  get selectionStyle(): interop.Enum<typeof UITableViewCellSelectionStyle> { return this.nativeObject.selectionStyle; }
  set selectionStyle(value: interop.Enum<typeof UITableViewCellSelectionStyle>) { this.nativeObject.selectionStyle = value; }
  get isSelected(): boolean { return this.nativeObject.isSelected; }
  set isSelected(value: boolean) { this.nativeObject.isSelected = value; }
  get isHighlighted(): boolean { return this.nativeObject.isHighlighted; }
  set isHighlighted(value: boolean) { this.nativeObject.isHighlighted = value; }
  get editingStyle(): interop.Enum<typeof UITableViewCellEditingStyle> { return this.nativeObject.editingStyle; }
  get showsReorderControl(): boolean { return this.nativeObject.showsReorderControl; }
  set showsReorderControl(value: boolean) { this.nativeObject.showsReorderControl = value; }
  get shouldIndentWhileEditing(): boolean { return this.nativeObject.shouldIndentWhileEditing; }
  set shouldIndentWhileEditing(value: boolean) { this.nativeObject.shouldIndentWhileEditing = value; }
  get accessoryType(): interop.Enum<typeof UITableViewCellAccessoryType> { return this.nativeObject.accessoryType; }
  set accessoryType(value: interop.Enum<typeof UITableViewCellAccessoryType>) { this.nativeObject.accessoryType = value; }
  get accessoryView(): UIView { return this.nativeObject.accessoryView; }
  set accessoryView(value: UIView) { this.nativeObject.accessoryView = value; }
  get editingAccessoryType(): interop.Enum<typeof UITableViewCellAccessoryType> { return this.nativeObject.editingAccessoryType; }
  set editingAccessoryType(value: interop.Enum<typeof UITableViewCellAccessoryType>) { this.nativeObject.editingAccessoryType = value; }
  get editingAccessoryView(): UIView { return this.nativeObject.editingAccessoryView; }
  set editingAccessoryView(value: UIView) { this.nativeObject.editingAccessoryView = value; }
  get indentationLevel(): number { return this.nativeObject.indentationLevel; }
  set indentationLevel(value: number) { this.nativeObject.indentationLevel = value; }
  get indentationWidth(): number { return this.nativeObject.indentationWidth; }
  set indentationWidth(value: number) { this.nativeObject.indentationWidth = value; }
  get separatorInset(): UIEdgeInsets { return this.nativeObject.separatorInset; }
  set separatorInset(value: UIEdgeInsets) { this.nativeObject.separatorInset = value; }
  get isEditing(): boolean { return this.nativeObject.isEditing; }
  set isEditing(value: boolean) { this.nativeObject.isEditing = value; }
  get showingDeleteConfirmation(): boolean { return this.nativeObject.showingDeleteConfirmation; }
  get focusStyle(): interop.Enum<typeof UITableViewCellFocusStyle> { return this.nativeObject.focusStyle; }
  set focusStyle(value: interop.Enum<typeof UITableViewCellFocusStyle>) { this.nativeObject.focusStyle = value; }
  get userInteractionEnabledWhileDragging(): boolean { return this.nativeObject.userInteractionEnabledWhileDragging; }
  set userInteractionEnabledWhileDragging(value: boolean) { this.nativeObject.userInteractionEnabledWhileDragging = value; }
  get text(): string { return this.nativeObject.text; }
  set text(value: string) { this.nativeObject.text = value; }
  get font(): UIFont { return this.nativeObject.font; }
  set font(value: UIFont) { this.nativeObject.font = value; }
  get textAlignment(): interop.Enum<typeof NSTextAlignment> { return this.nativeObject.textAlignment; }
  set textAlignment(value: interop.Enum<typeof NSTextAlignment>) { this.nativeObject.textAlignment = value; }
  get lineBreakMode(): interop.Enum<typeof NSLineBreakMode> { return this.nativeObject.lineBreakMode; }
  set lineBreakMode(value: interop.Enum<typeof NSLineBreakMode>) { this.nativeObject.lineBreakMode = value; }
  get textColor(): UIColor { return this.nativeObject.textColor; }
  set textColor(value: UIColor) { this.nativeObject.textColor = value; }
  get selectedTextColor(): UIColor { return this.nativeObject.selectedTextColor; }
  set selectedTextColor(value: UIColor) { this.nativeObject.selectedTextColor = value; }
  get image(): UIImage { return this.nativeObject.image; }
  set image(value: UIImage) { this.nativeObject.image = value; }
  get selectedImage(): UIImage { return this.nativeObject.selectedImage; }
  set selectedImage(value: UIImage) { this.nativeObject.selectedImage = value; }
  get hidesAccessoryWhenEditing(): boolean { return this.nativeObject.hidesAccessoryWhenEditing; }
  set hidesAccessoryWhenEditing(value: boolean) { this.nativeObject.hidesAccessoryWhenEditing = value; }
  get target(): interop.Object { return this.nativeObject.target; }
  set target(value: interop.Object) { this.nativeObject.target = value; }
  get editAction(): string { return this.nativeObject.editAction; }
  set editAction(value: string) { this.nativeObject.editAction = value; }
  get accessoryAction(): string { return this.nativeObject.accessoryAction; }
  set accessoryAction(value: string) { this.nativeObject.accessoryAction = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUISwipeActionsConfigurationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UISwipeActionsConfiguration.new();

  get actions(): NSArray { return this.nativeObject.actions; }
  get performsFirstActionWithFullSwipe(): boolean { return this.nativeObject.performsFirstActionWithFullSwipe; }
  set performsFirstActionWithFullSwipe(value: boolean) { this.nativeObject.performsFirstActionWithFullSwipe = value; }
}

export class HTMLUIWindowSceneActivationInteractionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIWindowSceneActivationInteraction.new();

  get view(): UIView { return this.nativeObject.view; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUIWindowScenePlacementElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIWindowScenePlacement.new();

}

export class HTMLUITextDragPreviewRendererElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITextDragPreviewRenderer.new();

  get layoutManager(): NSLayoutManager { return this.nativeObject.layoutManager; }
  get image(): UIImage { return this.nativeObject.image; }
  get firstLineRect(): CGRect { return this.nativeObject.firstLineRect; }
  get bodyRect(): CGRect { return this.nativeObject.bodyRect; }
  get lastLineRect(): CGRect { return this.nativeObject.lastLineRect; }
}

export class HTMLNSLayoutDimensionElement extends HTMLNSLayoutAnchorElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSLayoutDimension.new();

}

export class HTMLUIActivityItemsConfigurationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIActivityItemsConfiguration.new();

  get localObject(): interop.Object { return this.nativeObject.localObject; }
  set localObject(value: interop.Object) { this.nativeObject.localObject = value; }
  get supportedInteractions(): NSArray { return this.nativeObject.supportedInteractions; }
  set supportedInteractions(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.supportedInteractions = value; }
  get metadataProvider(): (p1: string) => interop.Object | null { return this.nativeObject.metadataProvider; }
  set metadataProvider(value: (p1: string) => interop.Object | null) { this.nativeObject.metadataProvider = value; }
  get perItemMetadataProvider(): (p1: number, p2: string) => interop.Object | null { return this.nativeObject.perItemMetadataProvider; }
  set perItemMetadataProvider(value: (p1: number, p2: string) => interop.Object | null) { this.nativeObject.perItemMetadataProvider = value; }
  get previewProvider(): (p1: number, p2: string, p3: CGSize) => NSItemProvider | null { return this.nativeObject.previewProvider; }
  set previewProvider(value: (p1: number, p2: string, p3: CGSize) => NSItemProvider | null) { this.nativeObject.previewProvider = value; }
  get applicationActivitiesProvider(): () => NSArray { return this.nativeObject.applicationActivitiesProvider; }
  set applicationActivitiesProvider(value: () => NSArray) { this.nativeObject.applicationActivitiesProvider = value; }
  get itemProvidersForActivityItemsConfiguration(): NSArray { return this.nativeObject.itemProvidersForActivityItemsConfiguration; }
  get applicationActivitiesForActivityItemsConfiguration(): NSArray { return this.nativeObject.applicationActivitiesForActivityItemsConfiguration; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUIPreviewTargetElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPreviewTarget.new();

  get container(): UIView { return this.nativeObject.container; }
  get center(): CGPoint { return this.nativeObject.center; }
  get transform(): CGAffineTransform { return this.nativeObject.transform; }
}

export class HTMLUITextSearchOptionsElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITextSearchOptions.new();

  get wordMatchMethod(): interop.Enum<typeof UITextSearchMatchMethod> { return this.nativeObject.wordMatchMethod; }
  get stringCompareOptions(): interop.Enum<typeof NSStringCompareOptions> { return this.nativeObject.stringCompareOptions; }
}

export class HTMLUITabBarElement extends HTMLUIViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITabBar.new();
  get delegate(): UITabBarDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UITabBarDelegateImpl.new();
    }
    return this.nativeObject.delegate as UITabBarDelegateImpl;
  }

  get items(): NSArray { return this.nativeObject.items; }
  set items(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.items = value; }
  get selectedItem(): UITabBarItem { return this.nativeObject.selectedItem; }
  set selectedItem(value: UITabBarItem) { this.nativeObject.selectedItem = value; }
  get isCustomizing(): boolean { return this.nativeObject.isCustomizing; }
  get tintColor(): UIColor { return this.nativeObject.tintColor; }
  set tintColor(value: UIColor) { this.nativeObject.tintColor = value; }
  get barTintColor(): UIColor { return this.nativeObject.barTintColor; }
  set barTintColor(value: UIColor) { this.nativeObject.barTintColor = value; }
  get unselectedItemTintColor(): UIColor { return this.nativeObject.unselectedItemTintColor; }
  set unselectedItemTintColor(value: UIColor) { this.nativeObject.unselectedItemTintColor = value; }
  get selectedImageTintColor(): UIColor { return this.nativeObject.selectedImageTintColor; }
  set selectedImageTintColor(value: UIColor) { this.nativeObject.selectedImageTintColor = value; }
  get backgroundImage(): UIImage { return this.nativeObject.backgroundImage; }
  set backgroundImage(value: UIImage) { this.nativeObject.backgroundImage = value; }
  get selectionIndicatorImage(): UIImage { return this.nativeObject.selectionIndicatorImage; }
  set selectionIndicatorImage(value: UIImage) { this.nativeObject.selectionIndicatorImage = value; }
  get shadowImage(): UIImage { return this.nativeObject.shadowImage; }
  set shadowImage(value: UIImage) { this.nativeObject.shadowImage = value; }
  get itemPositioning(): interop.Enum<typeof UITabBarItemPositioning> { return this.nativeObject.itemPositioning; }
  set itemPositioning(value: interop.Enum<typeof UITabBarItemPositioning>) { this.nativeObject.itemPositioning = value; }
  get itemWidth(): number { return this.nativeObject.itemWidth; }
  set itemWidth(value: number) { this.nativeObject.itemWidth = value; }
  get itemSpacing(): number { return this.nativeObject.itemSpacing; }
  set itemSpacing(value: number) { this.nativeObject.itemSpacing = value; }
  get barStyle(): interop.Enum<typeof UIBarStyle> { return this.nativeObject.barStyle; }
  set barStyle(value: interop.Enum<typeof UIBarStyle>) { this.nativeObject.barStyle = value; }
  get isTranslucent(): boolean { return this.nativeObject.isTranslucent; }
  set isTranslucent(value: boolean) { this.nativeObject.isTranslucent = value; }
  get standardAppearance(): UITabBarAppearance { return this.nativeObject.standardAppearance; }
  set standardAppearance(value: UITabBarAppearance) { this.nativeObject.standardAppearance = value; }
  get scrollEdgeAppearance(): UITabBarAppearance { return this.nativeObject.scrollEdgeAppearance; }
  set scrollEdgeAppearance(value: UITabBarAppearance) { this.nativeObject.scrollEdgeAppearance = value; }

  set tabBarDidSelectItem(value: (tabBar: UITabBar, item: UITabBarItem) => void) {
    this.delegate.tabBarDidSelectItem = value;
  }
  set tabBarWillBeginCustomizingItems(value: (tabBar: UITabBar, items: NSArray<interop.Object> | Array<interop.Object>) => void) {
    this.delegate.tabBarWillBeginCustomizingItems = value;
  }
  set tabBarDidBeginCustomizingItems(value: (tabBar: UITabBar, items: NSArray<interop.Object> | Array<interop.Object>) => void) {
    this.delegate.tabBarDidBeginCustomizingItems = value;
  }
  set tabBarWillEndCustomizingItemsChanged(value: (tabBar: UITabBar, items: NSArray<interop.Object> | Array<interop.Object>, changed: boolean) => void) {
    this.delegate.tabBarWillEndCustomizingItemsChanged = value;
  }
  set tabBarDidEndCustomizingItemsChanged(value: (tabBar: UITabBar, items: NSArray<interop.Object> | Array<interop.Object>, changed: boolean) => void) {
    this.delegate.tabBarDidEndCustomizingItemsChanged = value;
  }
}

export class HTMLUIEditMenuInteractionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIEditMenuInteraction.new();
  get delegate(): UIEditMenuInteractionDelegateImpl {
    // delegate is readonly, so not lazy-initialized.
    return this.nativeObject.delegate as UIEditMenuInteractionDelegateImpl;
  }

  get view(): UIView { return this.nativeObject.view; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }

  set editMenuInteractionMenuForConfigurationSuggestedActions(value: (interaction: UIEditMenuInteraction, configuration: UIEditMenuConfiguration, suggestedActions: NSArray<interop.Object> | Array<interop.Object>) => UIMenu) {
    this.delegate.editMenuInteractionMenuForConfigurationSuggestedActions = value;
  }
  set editMenuInteractionTargetRectForConfiguration(value: (interaction: UIEditMenuInteraction, configuration: UIEditMenuConfiguration) => CGRect) {
    this.delegate.editMenuInteractionTargetRectForConfiguration = value;
  }
  set editMenuInteractionWillPresentMenuForConfigurationAnimator(value: (interaction: UIEditMenuInteraction, configuration: UIEditMenuConfiguration, animator: UIEditMenuInteractionAnimating) => void) {
    this.delegate.editMenuInteractionWillPresentMenuForConfigurationAnimator = value;
  }
  set editMenuInteractionWillDismissMenuForConfigurationAnimator(value: (interaction: UIEditMenuInteraction, configuration: UIEditMenuConfiguration, animator: UIEditMenuInteractionAnimating) => void) {
    this.delegate.editMenuInteractionWillDismissMenuForConfigurationAnimator = value;
  }
}

export class HTMLUITraitActiveAppearanceElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITraitActiveAppearance.new();

}

export class HTMLUIMotionEffectElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIMotionEffect.new();

}

export class HTMLUIToolbarElement extends HTMLUIViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIToolbar.new();
  get delegate(): UIToolbarDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UIToolbarDelegateImpl.new();
    }
    return this.nativeObject.delegate as UIToolbarDelegateImpl;
  }

  get barStyle(): interop.Enum<typeof UIBarStyle> { return this.nativeObject.barStyle; }
  set barStyle(value: interop.Enum<typeof UIBarStyle>) { this.nativeObject.barStyle = value; }
  get items(): NSArray { return this.nativeObject.items; }
  set items(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.items = value; }
  get isTranslucent(): boolean { return this.nativeObject.isTranslucent; }
  set isTranslucent(value: boolean) { this.nativeObject.isTranslucent = value; }
  get tintColor(): UIColor { return this.nativeObject.tintColor; }
  set tintColor(value: UIColor) { this.nativeObject.tintColor = value; }
  get barTintColor(): UIColor { return this.nativeObject.barTintColor; }
  set barTintColor(value: UIColor) { this.nativeObject.barTintColor = value; }
  get standardAppearance(): UIToolbarAppearance { return this.nativeObject.standardAppearance; }
  set standardAppearance(value: UIToolbarAppearance) { this.nativeObject.standardAppearance = value; }
  get compactAppearance(): UIToolbarAppearance { return this.nativeObject.compactAppearance; }
  set compactAppearance(value: UIToolbarAppearance) { this.nativeObject.compactAppearance = value; }
  get scrollEdgeAppearance(): UIToolbarAppearance { return this.nativeObject.scrollEdgeAppearance; }
  set scrollEdgeAppearance(value: UIToolbarAppearance) { this.nativeObject.scrollEdgeAppearance = value; }
  get compactScrollEdgeAppearance(): UIToolbarAppearance { return this.nativeObject.compactScrollEdgeAppearance; }
  set compactScrollEdgeAppearance(value: UIToolbarAppearance) { this.nativeObject.compactScrollEdgeAppearance = value; }
  get barPosition(): interop.Enum<typeof UIBarPosition> { return this.nativeObject.barPosition; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUIFocusMovementHintElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIFocusMovementHint.new();

  get movementDirection(): CGVector { return this.nativeObject.movementDirection; }
  get perspectiveTransform(): CATransform3D { return this.nativeObject.perspectiveTransform; }
  get rotation(): CGVector { return this.nativeObject.rotation; }
  get translation(): CGVector { return this.nativeObject.translation; }
  get interactionTransform(): CATransform3D { return this.nativeObject.interactionTransform; }
}

export class HTMLUIUserNotificationSettingsElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIUserNotificationSettings.new();

  get types(): interop.Enum<typeof UIUserNotificationType> { return this.nativeObject.types; }
  get categories(): NSSet { return this.nativeObject.categories; }
}

export class HTMLUIGraphicsPDFRendererElement extends HTMLUIGraphicsRendererElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = UIGraphicsPDFRenderer.new();

}

export class HTMLUIGraphicsRendererFormatElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIGraphicsRendererFormat.new();

  get bounds(): CGRect { return this.nativeObject.bounds; }
}

export class HTMLUIBlurEffectElement extends HTMLUIVisualEffectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIBlurEffect.new();

}

export class HTMLNSDiffableDataSourceTransactionElement<SectionIdentifierType = interop.Object, ItemIdentifierType = interop.Object> extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSDiffableDataSourceTransaction.new();

  get initialSnapshot(): NSDiffableDataSourceSnapshot { return this.nativeObject.initialSnapshot; }
  get finalSnapshot(): NSDiffableDataSourceSnapshot { return this.nativeObject.finalSnapshot; }
  get difference(): NSOrderedCollectionDifference { return this.nativeObject.difference; }
  get sectionTransactions(): NSArray { return this.nativeObject.sectionTransactions; }
}

export class HTMLUIGestureRecognizerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIGestureRecognizer.new();
  get delegate(): UIGestureRecognizerDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UIGestureRecognizerDelegateImpl.new();
    }
    return this.nativeObject.delegate as UIGestureRecognizerDelegateImpl;
  }

  get state(): interop.Enum<typeof UIGestureRecognizerState> { return this.nativeObject.state; }
  get isEnabled(): boolean { return this.nativeObject.isEnabled; }
  set isEnabled(value: boolean) { this.nativeObject.isEnabled = value; }
  get view(): UIView { return this.nativeObject.view; }
  get cancelsTouchesInView(): boolean { return this.nativeObject.cancelsTouchesInView; }
  set cancelsTouchesInView(value: boolean) { this.nativeObject.cancelsTouchesInView = value; }
  get delaysTouchesBegan(): boolean { return this.nativeObject.delaysTouchesBegan; }
  set delaysTouchesBegan(value: boolean) { this.nativeObject.delaysTouchesBegan = value; }
  get delaysTouchesEnded(): boolean { return this.nativeObject.delaysTouchesEnded; }
  set delaysTouchesEnded(value: boolean) { this.nativeObject.delaysTouchesEnded = value; }
  get allowedTouchTypes(): NSArray { return this.nativeObject.allowedTouchTypes; }
  set allowedTouchTypes(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.allowedTouchTypes = value; }
  get allowedPressTypes(): NSArray { return this.nativeObject.allowedPressTypes; }
  set allowedPressTypes(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.allowedPressTypes = value; }
  get requiresExclusiveTouchType(): boolean { return this.nativeObject.requiresExclusiveTouchType; }
  set requiresExclusiveTouchType(value: boolean) { this.nativeObject.requiresExclusiveTouchType = value; }
  get numberOfTouches(): number { return this.nativeObject.numberOfTouches; }
  get name(): string { return this.nativeObject.name; }
  set name(value: string) { this.nativeObject.name = value; }
  get modifierFlags(): interop.Enum<typeof UIKeyModifierFlags> { return this.nativeObject.modifierFlags; }
  get buttonMask(): interop.Enum<typeof UIEventButtonMask> { return this.nativeObject.buttonMask; }

  set gestureRecognizerShouldBegin(value: (gestureRecognizer: UIGestureRecognizer) => boolean) {
    this.delegate.gestureRecognizerShouldBegin = value;
  }
  set gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(value: (gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer) => boolean) {
    this.delegate.gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer = value;
  }
  set gestureRecognizerShouldRequireFailureOfGestureRecognizer(value: (gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer) => boolean) {
    this.delegate.gestureRecognizerShouldRequireFailureOfGestureRecognizer = value;
  }
  set gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(value: (gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer) => boolean) {
    this.delegate.gestureRecognizerShouldBeRequiredToFailByGestureRecognizer = value;
  }
  set gestureRecognizerShouldReceiveTouch(value: (gestureRecognizer: UIGestureRecognizer, touch: UITouch) => boolean) {
    this.delegate.gestureRecognizerShouldReceiveTouch = value;
  }
  set gestureRecognizerShouldReceivePress(value: (gestureRecognizer: UIGestureRecognizer, press: UIPress) => boolean) {
    this.delegate.gestureRecognizerShouldReceivePress = value;
  }
  set gestureRecognizerShouldReceiveEvent(value: (gestureRecognizer: UIGestureRecognizer, event: UIEvent) => boolean) {
    this.delegate.gestureRecognizerShouldReceiveEvent = value;
  }
}

export class HTMLUIDragPreviewElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIDragPreview.new();

  get view(): UIView { return this.nativeObject.view; }
  get parameters(): UIDragPreviewParameters { return this.nativeObject.parameters; }
}

export class HTMLUICellAccessoryDeleteElement extends HTMLUICellAccessoryElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICellAccessoryDelete.new();

  get backgroundColor(): UIColor { return this.nativeObject.backgroundColor; }
  set backgroundColor(value: UIColor) { this.nativeObject.backgroundColor = value; }
  get actionHandler(): () => void { return this.nativeObject.actionHandler; }
  set actionHandler(value: () => void) { this.nativeObject.actionHandler = value; }
}

export class HTMLUIContentUnavailableButtonPropertiesElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIContentUnavailableButtonProperties.new();

  get primaryAction(): UIAction { return this.nativeObject.primaryAction; }
  set primaryAction(value: UIAction) { this.nativeObject.primaryAction = value; }
  get menu(): UIMenu { return this.nativeObject.menu; }
  set menu(value: UIMenu) { this.nativeObject.menu = value; }
  get isEnabled(): boolean { return this.nativeObject.isEnabled; }
  set isEnabled(value: boolean) { this.nativeObject.isEnabled = value; }
  get role(): interop.Enum<typeof UIButtonRole> { return this.nativeObject.role; }
  set role(value: interop.Enum<typeof UIButtonRole>) { this.nativeObject.role = value; }
}

export class HTMLUICollectionLayoutSectionOrthogonalScrollingPropertiesElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICollectionLayoutSectionOrthogonalScrollingProperties.new();

  get decelerationRate(): number { return this.nativeObject.decelerationRate; }
  set decelerationRate(value: number) { this.nativeObject.decelerationRate = value; }
  get bounce(): interop.Enum<typeof UICollectionLayoutSectionOrthogonalScrollingBounce> { return this.nativeObject.bounce; }
  set bounce(value: interop.Enum<typeof UICollectionLayoutSectionOrthogonalScrollingBounce>) { this.nativeObject.bounce = value; }
}

export class HTMLUICollectionViewLayoutElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICollectionViewLayout.new();

  get collectionView(): UICollectionView { return this.nativeObject.collectionView; }
  get collectionViewContentSize(): CGSize { return this.nativeObject.collectionViewContentSize; }
  get developmentLayoutDirection(): interop.Enum<typeof UIUserInterfaceLayoutDirection> { return this.nativeObject.developmentLayoutDirection; }
  get flipsHorizontallyInOppositeLayoutDirection(): boolean { return this.nativeObject.flipsHorizontallyInOppositeLayoutDirection; }
}

export class HTMLUICollectionViewLayoutAttributesElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICollectionViewLayoutAttributes.new();

  get frame(): CGRect { return this.nativeObject.frame; }
  set frame(value: CGRect) { this.nativeObject.frame = value; }
  get center(): CGPoint { return this.nativeObject.center; }
  set center(value: CGPoint) { this.nativeObject.center = value; }
  get size(): CGSize { return this.nativeObject.size; }
  set size(value: CGSize) { this.nativeObject.size = value; }
  get transform3D(): CATransform3D { return this.nativeObject.transform3D; }
  set transform3D(value: CATransform3D) { this.nativeObject.transform3D = value; }
  get bounds(): CGRect { return this.nativeObject.bounds; }
  set bounds(value: CGRect) { this.nativeObject.bounds = value; }
  get transform(): CGAffineTransform { return this.nativeObject.transform; }
  set transform(value: CGAffineTransform) { this.nativeObject.transform = value; }
  get alpha(): number { return this.nativeObject.alpha; }
  set alpha(value: number) { this.nativeObject.alpha = value; }
  get zIndex(): number { return this.nativeObject.zIndex; }
  set zIndex(value: number) { this.nativeObject.zIndex = value; }
  get isHidden(): boolean { return this.nativeObject.isHidden; }
  set isHidden(value: boolean) { this.nativeObject.isHidden = value; }
  get indexPath(): NSIndexPath { return this.nativeObject.indexPath; }
  set indexPath(value: NSIndexPath) { this.nativeObject.indexPath = value; }
  get representedElementCategory(): interop.Enum<typeof UICollectionElementCategory> { return this.nativeObject.representedElementCategory; }
  get representedElementKind(): string { return this.nativeObject.representedElementKind; }
  get collisionBoundsType(): interop.Enum<typeof UIDynamicItemCollisionBoundsType> { return this.nativeObject.collisionBoundsType; }
  get collisionBoundingPath(): UIBezierPath { return this.nativeObject.collisionBoundingPath; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUIAccessibilityLocationDescriptorElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIAccessibilityLocationDescriptor.new();

  get view(): UIView | null { return this.nativeObject.view; }
  get point(): CGPoint { return this.nativeObject.point; }
  get name(): string { return this.nativeObject.name; }
  get attributedName(): NSAttributedString { return this.nativeObject.attributedName; }
}

export class HTMLUITraitVerticalSizeClassElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITraitVerticalSizeClass.new();

}

export class HTMLUILocalNotificationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UILocalNotification.new();

  get fireDate(): NSDate { return this.nativeObject.fireDate; }
  set fireDate(value: NSDate) { this.nativeObject.fireDate = value; }
  get timeZone(): NSTimeZone { return this.nativeObject.timeZone; }
  set timeZone(value: NSTimeZone) { this.nativeObject.timeZone = value; }
  get repeatInterval(): interop.Enum<typeof NSCalendarUnit> { return this.nativeObject.repeatInterval; }
  set repeatInterval(value: interop.Enum<typeof NSCalendarUnit>) { this.nativeObject.repeatInterval = value; }
  get repeatCalendar(): NSCalendar { return this.nativeObject.repeatCalendar; }
  set repeatCalendar(value: NSCalendar) { this.nativeObject.repeatCalendar = value; }
  get region(): CLRegion { return this.nativeObject.region; }
  set region(value: CLRegion) { this.nativeObject.region = value; }
  get regionTriggersOnce(): boolean { return this.nativeObject.regionTriggersOnce; }
  set regionTriggersOnce(value: boolean) { this.nativeObject.regionTriggersOnce = value; }
  get alertBody(): string { return this.nativeObject.alertBody; }
  set alertBody(value: string) { this.nativeObject.alertBody = value; }
  get hasAction(): boolean { return this.nativeObject.hasAction; }
  set hasAction(value: boolean) { this.nativeObject.hasAction = value; }
  get alertAction(): string { return this.nativeObject.alertAction; }
  set alertAction(value: string) { this.nativeObject.alertAction = value; }
  get alertLaunchImage(): string { return this.nativeObject.alertLaunchImage; }
  set alertLaunchImage(value: string) { this.nativeObject.alertLaunchImage = value; }
  get alertTitle(): string { return this.nativeObject.alertTitle; }
  set alertTitle(value: string) { this.nativeObject.alertTitle = value; }
  get soundName(): string { return this.nativeObject.soundName; }
  set soundName(value: string) { this.nativeObject.soundName = value; }
  get applicationIconBadgeNumber(): number { return this.nativeObject.applicationIconBadgeNumber; }
  set applicationIconBadgeNumber(value: number) { this.nativeObject.applicationIconBadgeNumber = value; }
  get userInfo(): NSDictionary { return this.nativeObject.userInfo; }
  set userInfo(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) { this.nativeObject.userInfo = value; }
  get category(): string { return this.nativeObject.category; }
  set category(value: string) { this.nativeObject.category = value; }
}

export class HTMLNSDataAssetElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSDataAsset.new();

  get name(): string { return this.nativeObject.name; }
  get data(): NSData { return this.nativeObject.data; }
  get typeIdentifier(): string { return this.nativeObject.typeIdentifier; }
}

export class HTMLUIBezierPathElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIBezierPath.new();

  get CGPath(): interop.Pointer { return this.nativeObject.CGPath; }
  set CGPath(value: interop.PointerConvertible) { this.nativeObject.CGPath = value; }
  get isEmpty(): boolean { return this.nativeObject.isEmpty; }
  get bounds(): CGRect { return this.nativeObject.bounds; }
  get currentPoint(): CGPoint { return this.nativeObject.currentPoint; }
  get lineWidth(): number { return this.nativeObject.lineWidth; }
  set lineWidth(value: number) { this.nativeObject.lineWidth = value; }
  get lineCapStyle(): interop.Enum<typeof CGLineCap> { return this.nativeObject.lineCapStyle; }
  set lineCapStyle(value: interop.Enum<typeof CGLineCap>) { this.nativeObject.lineCapStyle = value; }
  get lineJoinStyle(): interop.Enum<typeof CGLineJoin> { return this.nativeObject.lineJoinStyle; }
  set lineJoinStyle(value: interop.Enum<typeof CGLineJoin>) { this.nativeObject.lineJoinStyle = value; }
  get miterLimit(): number { return this.nativeObject.miterLimit; }
  set miterLimit(value: number) { this.nativeObject.miterLimit = value; }
  get flatness(): number { return this.nativeObject.flatness; }
  set flatness(value: number) { this.nativeObject.flatness = value; }
  get usesEvenOddFillRule(): boolean { return this.nativeObject.usesEvenOddFillRule; }
  set usesEvenOddFillRule(value: boolean) { this.nativeObject.usesEvenOddFillRule = value; }
}

export class HTMLUIAlertViewElement extends HTMLUIViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = UIAlertView.new();

  get delegate(): interop.Object { return this.nativeObject.delegate; }
  set delegate(value: interop.Object) { this.nativeObject.delegate = value; }
  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get message(): string { return this.nativeObject.message; }
  set message(value: string) { this.nativeObject.message = value; }
  get numberOfButtons(): number { return this.nativeObject.numberOfButtons; }
  get cancelButtonIndex(): number { return this.nativeObject.cancelButtonIndex; }
  set cancelButtonIndex(value: number) { this.nativeObject.cancelButtonIndex = value; }
  get firstOtherButtonIndex(): number { return this.nativeObject.firstOtherButtonIndex; }
  get isVisible(): boolean { return this.nativeObject.isVisible; }
  get alertViewStyle(): interop.Enum<typeof UIAlertViewStyle> { return this.nativeObject.alertViewStyle; }
  set alertViewStyle(value: interop.Enum<typeof UIAlertViewStyle>) { this.nativeObject.alertViewStyle = value; }
}

export class HTMLUITextRangeElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITextRange.new();

  get isEmpty(): boolean { return this.nativeObject.isEmpty; }
  get start(): UITextPosition { return this.nativeObject.start; }
  get end(): UITextPosition { return this.nativeObject.end; }
}

export class HTMLUIDictationPhraseElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIDictationPhrase.new();

  get text(): string { return this.nativeObject.text; }
  get alternativeInterpretations(): NSArray { return this.nativeObject.alternativeInterpretations; }
}

export class HTMLUIControlElement extends HTMLUIViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIControl.new();

  get isEnabled(): boolean { return this.nativeObject.isEnabled; }
  set isEnabled(value: boolean) { this.nativeObject.isEnabled = value; }
  get isSelected(): boolean { return this.nativeObject.isSelected; }
  set isSelected(value: boolean) { this.nativeObject.isSelected = value; }
  get isHighlighted(): boolean { return this.nativeObject.isHighlighted; }
  set isHighlighted(value: boolean) { this.nativeObject.isHighlighted = value; }
  get contentVerticalAlignment(): interop.Enum<typeof UIControlContentVerticalAlignment> { return this.nativeObject.contentVerticalAlignment; }
  set contentVerticalAlignment(value: interop.Enum<typeof UIControlContentVerticalAlignment>) { this.nativeObject.contentVerticalAlignment = value; }
  get contentHorizontalAlignment(): interop.Enum<typeof UIControlContentHorizontalAlignment> { return this.nativeObject.contentHorizontalAlignment; }
  set contentHorizontalAlignment(value: interop.Enum<typeof UIControlContentHorizontalAlignment>) { this.nativeObject.contentHorizontalAlignment = value; }
  get effectiveContentHorizontalAlignment(): interop.Enum<typeof UIControlContentHorizontalAlignment> { return this.nativeObject.effectiveContentHorizontalAlignment; }
  get state(): interop.Enum<typeof UIControlState> { return this.nativeObject.state; }
  get isTracking(): boolean { return this.nativeObject.isTracking; }
  get isTouchInside(): boolean { return this.nativeObject.isTouchInside; }
  get allTargets(): NSSet { return this.nativeObject.allTargets; }
  get allControlEvents(): interop.Enum<typeof UIControlEvents> { return this.nativeObject.allControlEvents; }
  get contextMenuInteraction(): UIContextMenuInteraction { return this.nativeObject.contextMenuInteraction; }
  get isContextMenuInteractionEnabled(): boolean { return this.nativeObject.isContextMenuInteractionEnabled; }
  set isContextMenuInteractionEnabled(value: boolean) { this.nativeObject.isContextMenuInteractionEnabled = value; }
  get showsMenuAsPrimaryAction(): boolean { return this.nativeObject.showsMenuAsPrimaryAction; }
  set showsMenuAsPrimaryAction(value: boolean) { this.nativeObject.showsMenuAsPrimaryAction = value; }
  get toolTip(): string { return this.nativeObject.toolTip; }
  set toolTip(value: string) { this.nativeObject.toolTip = value; }
  get toolTipInteraction(): UIToolTipInteraction { return this.nativeObject.toolTipInteraction; }
  get isSymbolAnimationEnabled(): boolean { return this.nativeObject.isSymbolAnimationEnabled; }
  set isSymbolAnimationEnabled(value: boolean) { this.nativeObject.isSymbolAnimationEnabled = value; }
}

export class HTMLUIContextMenuInteractionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIContextMenuInteraction.new();

  get delegate(): UIContextMenuInteractionDelegate | null { return this.nativeObject.delegate; }
  get menuAppearance(): interop.Enum<typeof UIContextMenuInteractionAppearance> { return this.nativeObject.menuAppearance; }
  get view(): UIView { return this.nativeObject.view; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUITraitLegibilityWeightElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITraitLegibilityWeight.new();

}

export class HTMLUITraitDisplayScaleElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITraitDisplayScale.new();

}

export class HTMLUIFontElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIFont.new();

  get familyName(): string { return this.nativeObject.familyName; }
  get fontName(): string { return this.nativeObject.fontName; }
  get pointSize(): number { return this.nativeObject.pointSize; }
  get ascender(): number { return this.nativeObject.ascender; }
  get descender(): number { return this.nativeObject.descender; }
  get capHeight(): number { return this.nativeObject.capHeight; }
  get xHeight(): number { return this.nativeObject.xHeight; }
  get lineHeight(): number { return this.nativeObject.lineHeight; }
  get leading(): number { return this.nativeObject.leading; }
  get fontDescriptor(): UIFontDescriptor { return this.nativeObject.fontDescriptor; }
}

export class HTMLUIGraphicsPDFRendererFormatElement extends HTMLUIGraphicsRendererFormatElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIGraphicsPDFRendererFormat.new();

  get documentInfo(): NSDictionary { return this.nativeObject.documentInfo; }
  set documentInfo(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) { this.nativeObject.documentInfo = value; }
}

export class HTMLNSCollectionLayoutDecorationItemElement extends HTMLNSCollectionLayoutItemElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSCollectionLayoutDecorationItem.new();

  get zIndex(): number { return this.nativeObject.zIndex; }
  set zIndex(value: number) { this.nativeObject.zIndex = value; }
  get elementKind(): string { return this.nativeObject.elementKind; }
}

export class HTMLUISheetPresentationControllerDetentElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UISheetPresentationControllerDetent.new();

  get identifier(): string { return this.nativeObject.identifier; }
}

export class HTMLUIViewConfigurationStateElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIViewConfigurationState.new();

  get traitCollection(): UITraitCollection { return this.nativeObject.traitCollection; }
  set traitCollection(value: UITraitCollection) { this.nativeObject.traitCollection = value; }
  get isDisabled(): boolean { return this.nativeObject.isDisabled; }
  set isDisabled(value: boolean) { this.nativeObject.isDisabled = value; }
  get isHighlighted(): boolean { return this.nativeObject.isHighlighted; }
  set isHighlighted(value: boolean) { this.nativeObject.isHighlighted = value; }
  get isSelected(): boolean { return this.nativeObject.isSelected; }
  set isSelected(value: boolean) { this.nativeObject.isSelected = value; }
  get isFocused(): boolean { return this.nativeObject.isFocused; }
  set isFocused(value: boolean) { this.nativeObject.isFocused = value; }
  get isPinned(): boolean { return this.nativeObject.isPinned; }
  set isPinned(value: boolean) { this.nativeObject.isPinned = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLNSTextTabElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTextTab.new();

  get alignment(): interop.Enum<typeof NSTextAlignment> { return this.nativeObject.alignment; }
  get location(): number { return this.nativeObject.location; }
  get options(): NSDictionary { return this.nativeObject.options; }
}

export class HTMLUIScreenshotServiceElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIScreenshotService.new();
  get delegate(): UIScreenshotServiceDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UIScreenshotServiceDelegateImpl.new();
    }
    return this.nativeObject.delegate as UIScreenshotServiceDelegateImpl;
  }

  get windowScene(): UIWindowScene { return this.nativeObject.windowScene; }

  set screenshotServiceGeneratePDFRepresentationWithCompletion(value: (screenshotService: UIScreenshotService, completionHandler: (p1: NSData, p2: number, p3: CGRect) => void | null) => void) {
    this.delegate.screenshotServiceGeneratePDFRepresentationWithCompletion = value;
  }
}

export class HTMLUIApplicationShortcutItemElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIApplicationShortcutItem.new();

  get type(): string { return this.nativeObject.type; }
  get localizedTitle(): string { return this.nativeObject.localizedTitle; }
  get localizedSubtitle(): string { return this.nativeObject.localizedSubtitle; }
  get icon(): UIApplicationShortcutIcon { return this.nativeObject.icon; }
  get userInfo(): NSDictionary { return this.nativeObject.userInfo; }
  get targetContentIdentifier(): interop.Object { return this.nativeObject.targetContentIdentifier; }
}

export class HTMLUIBandSelectionInteractionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIBandSelectionInteraction.new();

  get isEnabled(): boolean { return this.nativeObject.isEnabled; }
  set isEnabled(value: boolean) { this.nativeObject.isEnabled = value; }
  get state(): interop.Enum<typeof UIBandSelectionInteractionState> { return this.nativeObject.state; }
  get selectionRect(): CGRect { return this.nativeObject.selectionRect; }
  get initialModifierFlags(): interop.Enum<typeof UIKeyModifierFlags> { return this.nativeObject.initialModifierFlags; }
  get shouldBeginHandler(): (p1: UIBandSelectionInteraction, p2: CGPoint) => boolean { return this.nativeObject.shouldBeginHandler; }
  set shouldBeginHandler(value: (p1: UIBandSelectionInteraction, p2: CGPoint) => boolean) { this.nativeObject.shouldBeginHandler = value; }
  get view(): UIView { return this.nativeObject.view; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUICellAccessoryOutlineDisclosureElement extends HTMLUICellAccessoryElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICellAccessoryOutlineDisclosure.new();

  get actionHandler(): () => void { return this.nativeObject.actionHandler; }
  set actionHandler(value: () => void) { this.nativeObject.actionHandler = value; }
}

export class HTMLUIStoryboardSegueElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIStoryboardSegue.new();

  get identifier(): string { return this.nativeObject.identifier; }
  get sourceViewController(): UIViewController { return this.nativeObject.sourceViewController; }
  get destinationViewController(): UIViewController { return this.nativeObject.destinationViewController; }
}

export class HTMLUIUserNotificationActionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIUserNotificationAction.new();

  get identifier(): string { return this.nativeObject.identifier; }
  get title(): string { return this.nativeObject.title; }
  get behavior(): interop.Enum<typeof UIUserNotificationActionBehavior> { return this.nativeObject.behavior; }
  get parameters(): NSDictionary { return this.nativeObject.parameters; }
  get activationMode(): interop.Enum<typeof UIUserNotificationActivationMode> { return this.nativeObject.activationMode; }
  get isAuthenticationRequired(): boolean { return this.nativeObject.isAuthenticationRequired; }
  get isDestructive(): boolean { return this.nativeObject.isDestructive; }
}

export class HTMLUIDropProposalElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIDropProposal.new();

  get operation(): interop.Enum<typeof UIDropOperation> { return this.nativeObject.operation; }
  get isPrecise(): boolean { return this.nativeObject.isPrecise; }
  set isPrecise(value: boolean) { this.nativeObject.isPrecise = value; }
  get prefersFullSizePreview(): boolean { return this.nativeObject.prefersFullSizePreview; }
  set prefersFullSizePreview(value: boolean) { this.nativeObject.prefersFullSizePreview = value; }
}

export class HTMLUITextSearchingFindSessionElement extends HTMLUIFindSessionElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITextSearchingFindSession.new();

  get searchableObject(): UITextSearching | null { return this.nativeObject.searchableObject; }
}

export class HTMLUIImpactFeedbackGeneratorElement extends HTMLUIFeedbackGeneratorElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIImpactFeedbackGenerator.new();

}

export class HTMLUIPreviewActionGroupElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPreviewActionGroup.new();

  get title(): string { return this.nativeObject.title; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUIWindowSceneProminentPlacementElement extends HTMLUIWindowScenePlacementElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIWindowSceneProminentPlacement.new();

}

export class HTMLUIPressElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPress.new();

  get timestamp(): number { return this.nativeObject.timestamp; }
  get phase(): interop.Enum<typeof UIPressPhase> { return this.nativeObject.phase; }
  get type(): interop.Enum<typeof UIPressType> { return this.nativeObject.type; }
  get window(): UIWindow { return this.nativeObject.window; }
  get responder(): UIResponder { return this.nativeObject.responder; }
  get gestureRecognizers(): NSArray { return this.nativeObject.gestureRecognizers; }
  get force(): number { return this.nativeObject.force; }
  get key(): UIKey { return this.nativeObject.key; }
}

export class HTMLUIMenuElement extends HTMLUIMenuElementElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIMenu.new();

  get identifier(): string { return this.nativeObject.identifier; }
  get options(): interop.Enum<typeof UIMenuOptions> { return this.nativeObject.options; }
  get preferredElementSize(): interop.Enum<typeof UIMenuElementSize> { return this.nativeObject.preferredElementSize; }
  set preferredElementSize(value: interop.Enum<typeof UIMenuElementSize>) { this.nativeObject.preferredElementSize = value; }
  get children(): NSArray { return this.nativeObject.children; }
  get selectedElements(): NSArray { return this.nativeObject.selectedElements; }
}

export class HTMLUIDynamicItemGroupElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIDynamicItemGroup.new();

  get items(): NSArray { return this.nativeObject.items; }
  get center(): CGPoint { return this.nativeObject.center; }
  set center(value: CGPoint) { this.nativeObject.center = value; }
  get bounds(): CGRect { return this.nativeObject.bounds; }
  get transform(): CGAffineTransform { return this.nativeObject.transform; }
  set transform(value: CGAffineTransform) { this.nativeObject.transform = value; }
  get collisionBoundsType(): interop.Enum<typeof UIDynamicItemCollisionBoundsType> { return this.nativeObject.collisionBoundsType; }
  get collisionBoundingPath(): UIBezierPath { return this.nativeObject.collisionBoundingPath; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUIGraphicsRendererContextElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIGraphicsRendererContext.new();

  get CGContext(): interop.Pointer { return this.nativeObject.CGContext; }
  get format(): UIGraphicsRendererFormat { return this.nativeObject.format; }
}

export class HTMLUITextFormattingCoordinatorElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITextFormattingCoordinator.new();
  get delegate(): UITextFormattingCoordinatorDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UITextFormattingCoordinatorDelegateImpl.new();
    }
    return this.nativeObject.delegate as UITextFormattingCoordinatorDelegateImpl;
  }

  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }

  set updateTextAttributesWithConversionHandler(value: (conversionHandler: (p1: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) => NSDictionary) => void) {
    this.delegate.updateTextAttributesWithConversionHandler = value;
  }
}

export class HTMLNSShadowElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSShadow.new();

  get shadowOffset(): CGSize { return this.nativeObject.shadowOffset; }
  set shadowOffset(value: CGSize) { this.nativeObject.shadowOffset = value; }
  get shadowBlurRadius(): number { return this.nativeObject.shadowBlurRadius; }
  set shadowBlurRadius(value: number) { this.nativeObject.shadowBlurRadius = value; }
  get shadowColor(): interop.Object { return this.nativeObject.shadowColor; }
  set shadowColor(value: interop.Object) { this.nativeObject.shadowColor = value; }
}

export class HTMLUIFontMetricsElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIFontMetrics.new();

}

export class HTMLUICollectionViewDiffableDataSourceReorderingHandlersElement<SectionType = interop.Object, ItemType = interop.Object> extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICollectionViewDiffableDataSourceReorderingHandlers.new();

  get canReorderItemHandler(): (p1: interop.Object) => boolean { return this.nativeObject.canReorderItemHandler; }
  set canReorderItemHandler(value: (p1: interop.Object) => boolean) { this.nativeObject.canReorderItemHandler = value; }
  get willReorderHandler(): (p1: NSDiffableDataSourceTransaction) => void { return this.nativeObject.willReorderHandler; }
  set willReorderHandler(value: (p1: NSDiffableDataSourceTransaction) => void) { this.nativeObject.willReorderHandler = value; }
  get didReorderHandler(): (p1: NSDiffableDataSourceTransaction) => void { return this.nativeObject.didReorderHandler; }
  set didReorderHandler(value: (p1: NSDiffableDataSourceTransaction) => void) { this.nativeObject.didReorderHandler = value; }
}

export class HTMLUIImageReaderConfigurationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIImageReaderConfiguration.new();

  get prefersHighDynamicRange(): boolean { return this.nativeObject.prefersHighDynamicRange; }
  set prefersHighDynamicRange(value: boolean) { this.nativeObject.prefersHighDynamicRange = value; }
  get preparesImagesForDisplay(): boolean { return this.nativeObject.preparesImagesForDisplay; }
  set preparesImagesForDisplay(value: boolean) { this.nativeObject.preparesImagesForDisplay = value; }
  get preferredThumbnailSize(): CGSize { return this.nativeObject.preferredThumbnailSize; }
  set preferredThumbnailSize(value: CGSize) { this.nativeObject.preferredThumbnailSize = value; }
  get pixelsPerInch(): number { return this.nativeObject.pixelsPerInch; }
  set pixelsPerInch(value: number) { this.nativeObject.pixelsPerInch = value; }
}

export class HTMLUIScreenElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIScreen.new();

  get bounds(): CGRect { return this.nativeObject.bounds; }
  get scale(): number { return this.nativeObject.scale; }
  get availableModes(): NSArray { return this.nativeObject.availableModes; }
  get preferredMode(): UIScreenMode { return this.nativeObject.preferredMode; }
  get currentMode(): UIScreenMode { return this.nativeObject.currentMode; }
  set currentMode(value: UIScreenMode) { this.nativeObject.currentMode = value; }
  get overscanCompensation(): interop.Enum<typeof UIScreenOverscanCompensation> { return this.nativeObject.overscanCompensation; }
  set overscanCompensation(value: interop.Enum<typeof UIScreenOverscanCompensation>) { this.nativeObject.overscanCompensation = value; }
  get overscanCompensationInsets(): UIEdgeInsets { return this.nativeObject.overscanCompensationInsets; }
  get mirroredScreen(): UIScreen { return this.nativeObject.mirroredScreen; }
  get isCaptured(): boolean { return this.nativeObject.isCaptured; }
  get brightness(): number { return this.nativeObject.brightness; }
  set brightness(value: number) { this.nativeObject.brightness = value; }
  get wantsSoftwareDimming(): boolean { return this.nativeObject.wantsSoftwareDimming; }
  set wantsSoftwareDimming(value: boolean) { this.nativeObject.wantsSoftwareDimming = value; }
  get coordinateSpace(): UICoordinateSpace { return this.nativeObject.coordinateSpace; }
  get fixedCoordinateSpace(): UICoordinateSpace { return this.nativeObject.fixedCoordinateSpace; }
  get nativeBounds(): CGRect { return this.nativeObject.nativeBounds; }
  get nativeScale(): number { return this.nativeObject.nativeScale; }
  get maximumFramesPerSecond(): number { return this.nativeObject.maximumFramesPerSecond; }
  get calibratedLatency(): number { return this.nativeObject.calibratedLatency; }
  get referenceDisplayModeStatus(): interop.Enum<typeof UIScreenReferenceDisplayModeStatus> { return this.nativeObject.referenceDisplayModeStatus; }
  get currentEDRHeadroom(): number { return this.nativeObject.currentEDRHeadroom; }
  get potentialEDRHeadroom(): number { return this.nativeObject.potentialEDRHeadroom; }
  get focusedItem(): UIFocusItem { return this.nativeObject.focusedItem; }
  get focusedView(): UIView { return this.nativeObject.focusedView; }
  get supportsFocus(): boolean { return this.nativeObject.supportsFocus; }
  get applicationFrame(): CGRect { return this.nativeObject.applicationFrame; }
  get traitCollection(): UITraitCollection { return this.nativeObject.traitCollection; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUIMenuControllerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIMenuController.new();

  get isMenuVisible(): boolean { return this.nativeObject.isMenuVisible; }
  set isMenuVisible(value: boolean) { this.nativeObject.isMenuVisible = value; }
  get arrowDirection(): interop.Enum<typeof UIMenuControllerArrowDirection> { return this.nativeObject.arrowDirection; }
  set arrowDirection(value: interop.Enum<typeof UIMenuControllerArrowDirection>) { this.nativeObject.arrowDirection = value; }
  get menuItems(): NSArray { return this.nativeObject.menuItems; }
  set menuItems(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.menuItems = value; }
  get menuFrame(): CGRect { return this.nativeObject.menuFrame; }
}

export class HTMLUITextItemElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITextItem.new();

  get contentType(): interop.Enum<typeof UITextItemContentType> { return this.nativeObject.contentType; }
  get range(): _NSRange { return this.nativeObject.range; }
  get link(): NSURL { return this.nativeObject.link; }
  get textAttachment(): NSTextAttachment { return this.nativeObject.textAttachment; }
  get tagIdentifier(): string { return this.nativeObject.tagIdentifier; }
}

export class HTMLUIImageReaderElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIImageReader.new();

  get configuration(): UIImageReaderConfiguration { return this.nativeObject.configuration; }
}

export class HTMLUICollectionViewDropProposalElement extends HTMLUIDropProposalElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICollectionViewDropProposal.new();

  get intent(): interop.Enum<typeof UICollectionViewDropIntent> { return this.nativeObject.intent; }
}

export class HTMLUIContentUnavailableViewElement extends HTMLUIViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIContentUnavailableView.new();

  get configuration(): UIContentUnavailableConfiguration { return this.nativeObject.configuration; }
  set configuration(value: UIContentUnavailableConfiguration) { this.nativeObject.configuration = value; }
  get isScrollEnabled(): boolean { return this.nativeObject.isScrollEnabled; }
  set isScrollEnabled(value: boolean) { this.nativeObject.isScrollEnabled = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUISwipeGestureRecognizerElement extends HTMLUIGestureRecognizerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UISwipeGestureRecognizer.new();

  get numberOfTouchesRequired(): number { return this.nativeObject.numberOfTouchesRequired; }
  set numberOfTouchesRequired(value: number) { this.nativeObject.numberOfTouchesRequired = value; }
  get direction(): interop.Enum<typeof UISwipeGestureRecognizerDirection> { return this.nativeObject.direction; }
  set direction(value: interop.Enum<typeof UISwipeGestureRecognizerDirection>) { this.nativeObject.direction = value; }
}

export class HTMLUITableViewHeaderFooterViewElement extends HTMLUIViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITableViewHeaderFooterView.new();

  get configurationState(): UIViewConfigurationState { return this.nativeObject.configurationState; }
  get configurationUpdateHandler(): (p1: UITableViewHeaderFooterView, p2: UIViewConfigurationState) => void { return this.nativeObject.configurationUpdateHandler; }
  set configurationUpdateHandler(value: (p1: UITableViewHeaderFooterView, p2: UIViewConfigurationState) => void) { this.nativeObject.configurationUpdateHandler = value; }
  get contentConfiguration(): UIContentConfiguration { return this.nativeObject.contentConfiguration; }
  set contentConfiguration(value: UIContentConfiguration) { this.nativeObject.contentConfiguration = value; }
  get automaticallyUpdatesContentConfiguration(): boolean { return this.nativeObject.automaticallyUpdatesContentConfiguration; }
  set automaticallyUpdatesContentConfiguration(value: boolean) { this.nativeObject.automaticallyUpdatesContentConfiguration = value; }
  get contentView(): UIView { return this.nativeObject.contentView; }
  get textLabel(): UILabel { return this.nativeObject.textLabel; }
  get detailTextLabel(): UILabel { return this.nativeObject.detailTextLabel; }
  get backgroundConfiguration(): UIBackgroundConfiguration { return this.nativeObject.backgroundConfiguration; }
  set backgroundConfiguration(value: UIBackgroundConfiguration) { this.nativeObject.backgroundConfiguration = value; }
  get automaticallyUpdatesBackgroundConfiguration(): boolean { return this.nativeObject.automaticallyUpdatesBackgroundConfiguration; }
  set automaticallyUpdatesBackgroundConfiguration(value: boolean) { this.nativeObject.automaticallyUpdatesBackgroundConfiguration = value; }
  get backgroundView(): UIView { return this.nativeObject.backgroundView; }
  set backgroundView(value: UIView) { this.nativeObject.backgroundView = value; }
  get reuseIdentifier(): string { return this.nativeObject.reuseIdentifier; }
}

export class HTMLUISegmentedControlElement extends HTMLUIControlElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UISegmentedControl.new();

  get segmentedControlStyle(): interop.Enum<typeof UISegmentedControlStyle> { return this.nativeObject.segmentedControlStyle; }
  set segmentedControlStyle(value: interop.Enum<typeof UISegmentedControlStyle>) { this.nativeObject.segmentedControlStyle = value; }
  get isMomentary(): boolean { return this.nativeObject.isMomentary; }
  set isMomentary(value: boolean) { this.nativeObject.isMomentary = value; }
  get numberOfSegments(): number { return this.nativeObject.numberOfSegments; }
  get apportionsSegmentWidthsByContent(): boolean { return this.nativeObject.apportionsSegmentWidthsByContent; }
  set apportionsSegmentWidthsByContent(value: boolean) { this.nativeObject.apportionsSegmentWidthsByContent = value; }
  get selectedSegmentIndex(): number { return this.nativeObject.selectedSegmentIndex; }
  set selectedSegmentIndex(value: number) { this.nativeObject.selectedSegmentIndex = value; }
  get selectedSegmentTintColor(): UIColor { return this.nativeObject.selectedSegmentTintColor; }
  set selectedSegmentTintColor(value: UIColor) { this.nativeObject.selectedSegmentTintColor = value; }
}

export class HTMLNSTextParagraphElement extends HTMLNSTextElementElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTextParagraph.new();

  get attributedString(): NSAttributedString { return this.nativeObject.attributedString; }
  get paragraphContentRange(): NSTextRange { return this.nativeObject.paragraphContentRange; }
  get paragraphSeparatorRange(): NSTextRange { return this.nativeObject.paragraphSeparatorRange; }
}

export class HTMLUIMotionEffectGroupElement extends HTMLUIMotionEffectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIMotionEffectGroup.new();

  get motionEffects(): NSArray { return this.nativeObject.motionEffects; }
  set motionEffects(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.motionEffects = value; }
}

export class HTMLUIPanGestureRecognizerElement extends HTMLUIGestureRecognizerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPanGestureRecognizer.new();

  get minimumNumberOfTouches(): number { return this.nativeObject.minimumNumberOfTouches; }
  set minimumNumberOfTouches(value: number) { this.nativeObject.minimumNumberOfTouches = value; }
  get maximumNumberOfTouches(): number { return this.nativeObject.maximumNumberOfTouches; }
  set maximumNumberOfTouches(value: number) { this.nativeObject.maximumNumberOfTouches = value; }
  get allowedScrollTypesMask(): interop.Enum<typeof UIScrollTypeMask> { return this.nativeObject.allowedScrollTypesMask; }
  set allowedScrollTypesMask(value: interop.Enum<typeof UIScrollTypeMask>) { this.nativeObject.allowedScrollTypesMask = value; }
}

export class HTMLUIGraphicsImageRendererFormatElement extends HTMLUIGraphicsRendererFormatElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIGraphicsImageRendererFormat.new();

  get scale(): number { return this.nativeObject.scale; }
  set scale(value: number) { this.nativeObject.scale = value; }
  get opaque(): boolean { return this.nativeObject.opaque; }
  set opaque(value: boolean) { this.nativeObject.opaque = value; }
  get prefersExtendedRange(): boolean { return this.nativeObject.prefersExtendedRange; }
  set prefersExtendedRange(value: boolean) { this.nativeObject.prefersExtendedRange = value; }
  get supportsHighDynamicRange(): boolean { return this.nativeObject.supportsHighDynamicRange; }
  get preferredRange(): interop.Enum<typeof UIGraphicsImageRendererFormatRange> { return this.nativeObject.preferredRange; }
  set preferredRange(value: interop.Enum<typeof UIGraphicsImageRendererFormatRange>) { this.nativeObject.preferredRange = value; }
}

export class HTMLUICollectionViewCompositionalLayoutElement extends HTMLUICollectionViewLayoutElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICollectionViewCompositionalLayout.new();

  get configuration(): UICollectionViewCompositionalLayoutConfiguration { return this.nativeObject.configuration; }
  set configuration(value: UICollectionViewCompositionalLayoutConfiguration) { this.nativeObject.configuration = value; }
}

export class HTMLUIActivityIndicatorViewElement extends HTMLUIViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIActivityIndicatorView.new();

  get activityIndicatorViewStyle(): interop.Enum<typeof UIActivityIndicatorViewStyle> { return this.nativeObject.activityIndicatorViewStyle; }
  set activityIndicatorViewStyle(value: interop.Enum<typeof UIActivityIndicatorViewStyle>) { this.nativeObject.activityIndicatorViewStyle = value; }
  get hidesWhenStopped(): boolean { return this.nativeObject.hidesWhenStopped; }
  set hidesWhenStopped(value: boolean) { this.nativeObject.hidesWhenStopped = value; }
  get color(): UIColor { return this.nativeObject.color; }
  set color(value: UIColor) { this.nativeObject.color = value; }
  get isAnimating(): boolean { return this.nativeObject.isAnimating; }
}

export class HTMLUIActionSheetElement extends HTMLUIViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIActionSheet.new();
  get delegate(): UIActionSheetDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UIActionSheetDelegateImpl.new();
    }
    return this.nativeObject.delegate as UIActionSheetDelegateImpl;
  }

  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get actionSheetStyle(): interop.Enum<typeof UIActionSheetStyle> { return this.nativeObject.actionSheetStyle; }
  set actionSheetStyle(value: interop.Enum<typeof UIActionSheetStyle>) { this.nativeObject.actionSheetStyle = value; }
  get numberOfButtons(): number { return this.nativeObject.numberOfButtons; }
  get cancelButtonIndex(): number { return this.nativeObject.cancelButtonIndex; }
  set cancelButtonIndex(value: number) { this.nativeObject.cancelButtonIndex = value; }
  get destructiveButtonIndex(): number { return this.nativeObject.destructiveButtonIndex; }
  set destructiveButtonIndex(value: number) { this.nativeObject.destructiveButtonIndex = value; }
  get firstOtherButtonIndex(): number { return this.nativeObject.firstOtherButtonIndex; }
  get isVisible(): boolean { return this.nativeObject.isVisible; }

  set actionSheetClickedButtonAtIndex(value: (actionSheet: UIActionSheet, buttonIndex: number) => void) {
    this.delegate.actionSheetClickedButtonAtIndex = value;
  }
  set actionSheetCancel(value: (actionSheet: UIActionSheet) => void) {
    this.delegate.actionSheetCancel = value;
  }
  set willPresentActionSheet(value: (actionSheet: UIActionSheet) => void) {
    this.delegate.willPresentActionSheet = value;
  }
  set didPresentActionSheet(value: (actionSheet: UIActionSheet) => void) {
    this.delegate.didPresentActionSheet = value;
  }
  set actionSheetWillDismissWithButtonIndex(value: (actionSheet: UIActionSheet, buttonIndex: number) => void) {
    this.delegate.actionSheetWillDismissWithButtonIndex = value;
  }
  set actionSheetDidDismissWithButtonIndex(value: (actionSheet: UIActionSheet, buttonIndex: number) => void) {
    this.delegate.actionSheetDidDismissWithButtonIndex = value;
  }
}

export class HTMLUIWindowSceneStandardPlacementElement extends HTMLUIWindowScenePlacementElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIWindowSceneStandardPlacement.new();

}

export class HTMLUIButtonElement extends HTMLUIControlElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIButton.new();

  get configuration(): UIButtonConfiguration { return this.nativeObject.configuration; }
  set configuration(value: UIButtonConfiguration) { this.nativeObject.configuration = value; }
  get configurationUpdateHandler(): (p1: UIButton) => void { return this.nativeObject.configurationUpdateHandler; }
  set configurationUpdateHandler(value: (p1: UIButton) => void) { this.nativeObject.configurationUpdateHandler = value; }
  get automaticallyUpdatesConfiguration(): boolean { return this.nativeObject.automaticallyUpdatesConfiguration; }
  set automaticallyUpdatesConfiguration(value: boolean) { this.nativeObject.automaticallyUpdatesConfiguration = value; }
  get tintColor(): UIColor { return this.nativeObject.tintColor; }
  set tintColor(value: UIColor) { this.nativeObject.tintColor = value; }
  get buttonType(): interop.Enum<typeof UIButtonType> { return this.nativeObject.buttonType; }
  get isHovered(): boolean { return this.nativeObject.isHovered; }
  get isHeld(): boolean { return this.nativeObject.isHeld; }
  get role(): interop.Enum<typeof UIButtonRole> { return this.nativeObject.role; }
  set role(value: interop.Enum<typeof UIButtonRole>) { this.nativeObject.role = value; }
  get isPointerInteractionEnabled(): boolean { return this.nativeObject.isPointerInteractionEnabled; }
  set isPointerInteractionEnabled(value: boolean) { this.nativeObject.isPointerInteractionEnabled = value; }
  get pointerStyleProvider(): (p1: UIButton, p2: UIPointerEffect, p3: UIPointerShape) => UIPointerStyle { return this.nativeObject.pointerStyleProvider; }
  set pointerStyleProvider(value: (p1: UIButton, p2: UIPointerEffect, p3: UIPointerShape) => UIPointerStyle) { this.nativeObject.pointerStyleProvider = value; }
  get menu(): UIMenu { return this.nativeObject.menu; }
  set menu(value: UIMenu) { this.nativeObject.menu = value; }
  get preferredMenuElementOrder(): interop.Enum<typeof UIContextMenuConfigurationElementOrder> { return this.nativeObject.preferredMenuElementOrder; }
  set preferredMenuElementOrder(value: interop.Enum<typeof UIContextMenuConfigurationElementOrder>) { this.nativeObject.preferredMenuElementOrder = value; }
  get changesSelectionAsPrimaryAction(): boolean { return this.nativeObject.changesSelectionAsPrimaryAction; }
  set changesSelectionAsPrimaryAction(value: boolean) { this.nativeObject.changesSelectionAsPrimaryAction = value; }
  get currentTitle(): string { return this.nativeObject.currentTitle; }
  get currentTitleColor(): UIColor { return this.nativeObject.currentTitleColor; }
  get currentTitleShadowColor(): UIColor { return this.nativeObject.currentTitleShadowColor; }
  get currentImage(): UIImage { return this.nativeObject.currentImage; }
  get currentBackgroundImage(): UIImage { return this.nativeObject.currentBackgroundImage; }
  get currentPreferredSymbolConfiguration(): UIImageSymbolConfiguration { return this.nativeObject.currentPreferredSymbolConfiguration; }
  get currentAttributedTitle(): NSAttributedString { return this.nativeObject.currentAttributedTitle; }
  get titleLabel(): UILabel { return this.nativeObject.titleLabel; }
  get imageView(): UIImageView { return this.nativeObject.imageView; }
  get subtitleLabel(): UILabel { return this.nativeObject.subtitleLabel; }
  get font(): UIFont { return this.nativeObject.font; }
  set font(value: UIFont) { this.nativeObject.font = value; }
  get lineBreakMode(): interop.Enum<typeof NSLineBreakMode> { return this.nativeObject.lineBreakMode; }
  set lineBreakMode(value: interop.Enum<typeof NSLineBreakMode>) { this.nativeObject.lineBreakMode = value; }
  get titleShadowOffset(): CGSize { return this.nativeObject.titleShadowOffset; }
  set titleShadowOffset(value: CGSize) { this.nativeObject.titleShadowOffset = value; }
  get contentEdgeInsets(): UIEdgeInsets { return this.nativeObject.contentEdgeInsets; }
  set contentEdgeInsets(value: UIEdgeInsets) { this.nativeObject.contentEdgeInsets = value; }
  get titleEdgeInsets(): UIEdgeInsets { return this.nativeObject.titleEdgeInsets; }
  set titleEdgeInsets(value: UIEdgeInsets) { this.nativeObject.titleEdgeInsets = value; }
  get imageEdgeInsets(): UIEdgeInsets { return this.nativeObject.imageEdgeInsets; }
  set imageEdgeInsets(value: UIEdgeInsets) { this.nativeObject.imageEdgeInsets = value; }
  get reversesTitleShadowWhenHighlighted(): boolean { return this.nativeObject.reversesTitleShadowWhenHighlighted; }
  set reversesTitleShadowWhenHighlighted(value: boolean) { this.nativeObject.reversesTitleShadowWhenHighlighted = value; }
  get adjustsImageWhenHighlighted(): boolean { return this.nativeObject.adjustsImageWhenHighlighted; }
  set adjustsImageWhenHighlighted(value: boolean) { this.nativeObject.adjustsImageWhenHighlighted = value; }
  get adjustsImageWhenDisabled(): boolean { return this.nativeObject.adjustsImageWhenDisabled; }
  set adjustsImageWhenDisabled(value: boolean) { this.nativeObject.adjustsImageWhenDisabled = value; }
  get showsTouchWhenHighlighted(): boolean { return this.nativeObject.showsTouchWhenHighlighted; }
  set showsTouchWhenHighlighted(value: boolean) { this.nativeObject.showsTouchWhenHighlighted = value; }
  get behavioralStyle(): interop.Enum<typeof UIBehavioralStyle> { return this.nativeObject.behavioralStyle; }
  get preferredBehavioralStyle(): interop.Enum<typeof UIBehavioralStyle> { return this.nativeObject.preferredBehavioralStyle; }
  set preferredBehavioralStyle(value: interop.Enum<typeof UIBehavioralStyle>) { this.nativeObject.preferredBehavioralStyle = value; }
}

export class HTMLUIColorWellElement extends HTMLUIControlElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIColorWell.new();

  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get supportsAlpha(): boolean { return this.nativeObject.supportsAlpha; }
  set supportsAlpha(value: boolean) { this.nativeObject.supportsAlpha = value; }
  get selectedColor(): UIColor { return this.nativeObject.selectedColor; }
  set selectedColor(value: UIColor) { this.nativeObject.selectedColor = value; }
}

export class HTMLUICollectionViewTransitionLayoutElement extends HTMLUICollectionViewLayoutElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICollectionViewTransitionLayout.new();

  get transitionProgress(): number { return this.nativeObject.transitionProgress; }
  set transitionProgress(value: number) { this.nativeObject.transitionProgress = value; }
  get currentLayout(): UICollectionViewLayout { return this.nativeObject.currentLayout; }
  get nextLayout(): UICollectionViewLayout { return this.nativeObject.nextLayout; }
}

export class HTMLUILongPressGestureRecognizerElement extends HTMLUIGestureRecognizerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UILongPressGestureRecognizer.new();

  get numberOfTapsRequired(): number { return this.nativeObject.numberOfTapsRequired; }
  set numberOfTapsRequired(value: number) { this.nativeObject.numberOfTapsRequired = value; }
  get numberOfTouchesRequired(): number { return this.nativeObject.numberOfTouchesRequired; }
  set numberOfTouchesRequired(value: number) { this.nativeObject.numberOfTouchesRequired = value; }
  get minimumPressDuration(): number { return this.nativeObject.minimumPressDuration; }
  set minimumPressDuration(value: number) { this.nativeObject.minimumPressDuration = value; }
  get allowableMovement(): number { return this.nativeObject.allowableMovement; }
  set allowableMovement(value: number) { this.nativeObject.allowableMovement = value; }
}

export class HTMLUIPasteControlElement extends HTMLUIControlElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPasteControl.new();

  get configuration(): UIPasteControlConfiguration { return this.nativeObject.configuration; }
  get target(): UIPasteConfigurationSupporting { return this.nativeObject.target; }
  set target(value: UIPasteConfigurationSupporting) { this.nativeObject.target = value; }
}

export class HTMLUIMutableUserNotificationActionElement extends HTMLUIUserNotificationActionElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = UIMutableUserNotificationAction.new();

  get identifier(): string { return this.nativeObject.identifier; }
  set identifier(value: string) { this.nativeObject.identifier = value; }
  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get behavior(): interop.Enum<typeof UIUserNotificationActionBehavior> { return this.nativeObject.behavior; }
  set behavior(value: interop.Enum<typeof UIUserNotificationActionBehavior>) { this.nativeObject.behavior = value; }
  get parameters(): NSDictionary { return this.nativeObject.parameters; }
  set parameters(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) { this.nativeObject.parameters = value; }
  get activationMode(): interop.Enum<typeof UIUserNotificationActivationMode> { return this.nativeObject.activationMode; }
  set activationMode(value: interop.Enum<typeof UIUserNotificationActivationMode>) { this.nativeObject.activationMode = value; }
  get isAuthenticationRequired(): boolean { return this.nativeObject.isAuthenticationRequired; }
  set isAuthenticationRequired(value: boolean) { this.nativeObject.isAuthenticationRequired = value; }
  get isDestructive(): boolean { return this.nativeObject.isDestructive; }
  set isDestructive(value: boolean) { this.nativeObject.isDestructive = value; }
}

export class HTMLUIScreenEdgePanGestureRecognizerElement extends HTMLUIPanGestureRecognizerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIScreenEdgePanGestureRecognizer.new();

  get edges(): interop.Enum<typeof UIRectEdge> { return this.nativeObject.edges; }
  set edges(value: interop.Enum<typeof UIRectEdge>) { this.nativeObject.edges = value; }
}

export class HTMLUIPointerStyleElement extends HTMLUIHoverStyleElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = UIPointerStyle.new();

  get accessories(): NSArray { return this.nativeObject.accessories; }
  set accessories(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessories = value; }
}

export class HTMLUIScrollViewElement extends HTMLUIViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIScrollView.new();
  get delegate(): UIScrollViewDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UIScrollViewDelegateImpl.new();
    }
    return this.nativeObject.delegate as UIScrollViewDelegateImpl;
  }

  get contentOffset(): CGPoint { return this.nativeObject.contentOffset; }
  set contentOffset(value: CGPoint) { this.nativeObject.contentOffset = value; }
  get contentSize(): CGSize { return this.nativeObject.contentSize; }
  set contentSize(value: CGSize) { this.nativeObject.contentSize = value; }
  get contentInset(): UIEdgeInsets { return this.nativeObject.contentInset; }
  set contentInset(value: UIEdgeInsets) { this.nativeObject.contentInset = value; }
  get adjustedContentInset(): UIEdgeInsets { return this.nativeObject.adjustedContentInset; }
  get contentInsetAdjustmentBehavior(): interop.Enum<typeof UIScrollViewContentInsetAdjustmentBehavior> { return this.nativeObject.contentInsetAdjustmentBehavior; }
  set contentInsetAdjustmentBehavior(value: interop.Enum<typeof UIScrollViewContentInsetAdjustmentBehavior>) { this.nativeObject.contentInsetAdjustmentBehavior = value; }
  get automaticallyAdjustsScrollIndicatorInsets(): boolean { return this.nativeObject.automaticallyAdjustsScrollIndicatorInsets; }
  set automaticallyAdjustsScrollIndicatorInsets(value: boolean) { this.nativeObject.automaticallyAdjustsScrollIndicatorInsets = value; }
  get contentLayoutGuide(): UILayoutGuide { return this.nativeObject.contentLayoutGuide; }
  get frameLayoutGuide(): UILayoutGuide { return this.nativeObject.frameLayoutGuide; }
  get isDirectionalLockEnabled(): boolean { return this.nativeObject.isDirectionalLockEnabled; }
  set isDirectionalLockEnabled(value: boolean) { this.nativeObject.isDirectionalLockEnabled = value; }
  get bounces(): boolean { return this.nativeObject.bounces; }
  set bounces(value: boolean) { this.nativeObject.bounces = value; }
  get alwaysBounceVertical(): boolean { return this.nativeObject.alwaysBounceVertical; }
  set alwaysBounceVertical(value: boolean) { this.nativeObject.alwaysBounceVertical = value; }
  get alwaysBounceHorizontal(): boolean { return this.nativeObject.alwaysBounceHorizontal; }
  set alwaysBounceHorizontal(value: boolean) { this.nativeObject.alwaysBounceHorizontal = value; }
  get isPagingEnabled(): boolean { return this.nativeObject.isPagingEnabled; }
  set isPagingEnabled(value: boolean) { this.nativeObject.isPagingEnabled = value; }
  get isScrollEnabled(): boolean { return this.nativeObject.isScrollEnabled; }
  set isScrollEnabled(value: boolean) { this.nativeObject.isScrollEnabled = value; }
  get showsVerticalScrollIndicator(): boolean { return this.nativeObject.showsVerticalScrollIndicator; }
  set showsVerticalScrollIndicator(value: boolean) { this.nativeObject.showsVerticalScrollIndicator = value; }
  get showsHorizontalScrollIndicator(): boolean { return this.nativeObject.showsHorizontalScrollIndicator; }
  set showsHorizontalScrollIndicator(value: boolean) { this.nativeObject.showsHorizontalScrollIndicator = value; }
  get indicatorStyle(): interop.Enum<typeof UIScrollViewIndicatorStyle> { return this.nativeObject.indicatorStyle; }
  set indicatorStyle(value: interop.Enum<typeof UIScrollViewIndicatorStyle>) { this.nativeObject.indicatorStyle = value; }
  get verticalScrollIndicatorInsets(): UIEdgeInsets { return this.nativeObject.verticalScrollIndicatorInsets; }
  set verticalScrollIndicatorInsets(value: UIEdgeInsets) { this.nativeObject.verticalScrollIndicatorInsets = value; }
  get horizontalScrollIndicatorInsets(): UIEdgeInsets { return this.nativeObject.horizontalScrollIndicatorInsets; }
  set horizontalScrollIndicatorInsets(value: UIEdgeInsets) { this.nativeObject.horizontalScrollIndicatorInsets = value; }
  get scrollIndicatorInsets(): UIEdgeInsets { return this.nativeObject.scrollIndicatorInsets; }
  set scrollIndicatorInsets(value: UIEdgeInsets) { this.nativeObject.scrollIndicatorInsets = value; }
  get decelerationRate(): number { return this.nativeObject.decelerationRate; }
  set decelerationRate(value: number) { this.nativeObject.decelerationRate = value; }
  get indexDisplayMode(): interop.Enum<typeof UIScrollViewIndexDisplayMode> { return this.nativeObject.indexDisplayMode; }
  set indexDisplayMode(value: interop.Enum<typeof UIScrollViewIndexDisplayMode>) { this.nativeObject.indexDisplayMode = value; }
  get isTracking(): boolean { return this.nativeObject.isTracking; }
  get isDragging(): boolean { return this.nativeObject.isDragging; }
  get isDecelerating(): boolean { return this.nativeObject.isDecelerating; }
  get delaysContentTouches(): boolean { return this.nativeObject.delaysContentTouches; }
  set delaysContentTouches(value: boolean) { this.nativeObject.delaysContentTouches = value; }
  get canCancelContentTouches(): boolean { return this.nativeObject.canCancelContentTouches; }
  set canCancelContentTouches(value: boolean) { this.nativeObject.canCancelContentTouches = value; }
  get minimumZoomScale(): number { return this.nativeObject.minimumZoomScale; }
  set minimumZoomScale(value: number) { this.nativeObject.minimumZoomScale = value; }
  get maximumZoomScale(): number { return this.nativeObject.maximumZoomScale; }
  set maximumZoomScale(value: number) { this.nativeObject.maximumZoomScale = value; }
  get zoomScale(): number { return this.nativeObject.zoomScale; }
  set zoomScale(value: number) { this.nativeObject.zoomScale = value; }
  get bouncesZoom(): boolean { return this.nativeObject.bouncesZoom; }
  set bouncesZoom(value: boolean) { this.nativeObject.bouncesZoom = value; }
  get isZooming(): boolean { return this.nativeObject.isZooming; }
  get isZoomBouncing(): boolean { return this.nativeObject.isZoomBouncing; }
  get scrollsToTop(): boolean { return this.nativeObject.scrollsToTop; }
  set scrollsToTop(value: boolean) { this.nativeObject.scrollsToTop = value; }
  get panGestureRecognizer(): UIPanGestureRecognizer { return this.nativeObject.panGestureRecognizer; }
  get pinchGestureRecognizer(): UIPinchGestureRecognizer { return this.nativeObject.pinchGestureRecognizer; }
  get directionalPressGestureRecognizer(): UIGestureRecognizer { return this.nativeObject.directionalPressGestureRecognizer; }
  get keyboardDismissMode(): interop.Enum<typeof UIScrollViewKeyboardDismissMode> { return this.nativeObject.keyboardDismissMode; }
  set keyboardDismissMode(value: interop.Enum<typeof UIScrollViewKeyboardDismissMode>) { this.nativeObject.keyboardDismissMode = value; }
  get refreshControl(): UIRefreshControl { return this.nativeObject.refreshControl; }
  set refreshControl(value: UIRefreshControl) { this.nativeObject.refreshControl = value; }
  get allowsKeyboardScrolling(): boolean { return this.nativeObject.allowsKeyboardScrolling; }
  set allowsKeyboardScrolling(value: boolean) { this.nativeObject.allowsKeyboardScrolling = value; }
  get visibleSize(): CGSize { return this.nativeObject.visibleSize; }
  get coordinateSpace(): UICoordinateSpace { return this.nativeObject.coordinateSpace; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }

  set scrollViewDidScroll(value: (scrollView: UIScrollView) => void) {
    this.delegate.scrollViewDidScroll = value;
  }
  set scrollViewDidZoom(value: (scrollView: UIScrollView) => void) {
    this.delegate.scrollViewDidZoom = value;
  }
  set scrollViewWillBeginDragging(value: (scrollView: UIScrollView) => void) {
    this.delegate.scrollViewWillBeginDragging = value;
  }
  set scrollViewWillEndDraggingWithVelocityTargetContentOffset(value: (scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.PointerConvertible) => void) {
    this.delegate.scrollViewWillEndDraggingWithVelocityTargetContentOffset = value;
  }
  set scrollViewDidEndDraggingWillDecelerate(value: (scrollView: UIScrollView, decelerate: boolean) => void) {
    this.delegate.scrollViewDidEndDraggingWillDecelerate = value;
  }
  set scrollViewWillBeginDecelerating(value: (scrollView: UIScrollView) => void) {
    this.delegate.scrollViewWillBeginDecelerating = value;
  }
  set scrollViewDidEndDecelerating(value: (scrollView: UIScrollView) => void) {
    this.delegate.scrollViewDidEndDecelerating = value;
  }
  set scrollViewDidEndScrollingAnimation(value: (scrollView: UIScrollView) => void) {
    this.delegate.scrollViewDidEndScrollingAnimation = value;
  }
  set viewForZoomingInScrollView(value: (scrollView: UIScrollView) => UIView) {
    this.delegate.viewForZoomingInScrollView = value;
  }
  set scrollViewWillBeginZoomingWithView(value: (scrollView: UIScrollView, view: UIView | null) => void) {
    this.delegate.scrollViewWillBeginZoomingWithView = value;
  }
  set scrollViewDidEndZoomingWithViewAtScale(value: (scrollView: UIScrollView, view: UIView | null, scale: number) => void) {
    this.delegate.scrollViewDidEndZoomingWithViewAtScale = value;
  }
  set scrollViewShouldScrollToTop(value: (scrollView: UIScrollView) => boolean) {
    this.delegate.scrollViewShouldScrollToTop = value;
  }
  set scrollViewDidScrollToTop(value: (scrollView: UIScrollView) => void) {
    this.delegate.scrollViewDidScrollToTop = value;
  }
  set scrollViewDidChangeAdjustedContentInset(value: (scrollView: UIScrollView) => void) {
    this.delegate.scrollViewDidChangeAdjustedContentInset = value;
  }
}

export class HTMLUIVideoEditorControllerElement extends HTMLUINavigationControllerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIVideoEditorController.new();
  get delegate(): UINavigationControllerDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UINavigationControllerDelegateImpl.new();
    }
    return this.nativeObject.delegate as UINavigationControllerDelegateImpl;
  }

  get videoPath(): string { return this.nativeObject.videoPath; }
  set videoPath(value: string) { this.nativeObject.videoPath = value; }
  get videoMaximumDuration(): number { return this.nativeObject.videoMaximumDuration; }
  set videoMaximumDuration(value: number) { this.nativeObject.videoMaximumDuration = value; }
  get videoQuality(): interop.Enum<typeof UIImagePickerControllerQualityType> { return this.nativeObject.videoQuality; }
  set videoQuality(value: interop.Enum<typeof UIImagePickerControllerQualityType>) { this.nativeObject.videoQuality = value; }

  set navigationControllerWillShowViewControllerAnimated(value: (navigationController: UINavigationController, viewController: UIViewController, animated: boolean) => void) {
    this.delegate.navigationControllerWillShowViewControllerAnimated = value;
  }
  set navigationControllerDidShowViewControllerAnimated(value: (navigationController: UINavigationController, viewController: UIViewController, animated: boolean) => void) {
    this.delegate.navigationControllerDidShowViewControllerAnimated = value;
  }
  set navigationControllerSupportedInterfaceOrientations(value: (navigationController: UINavigationController) => interop.Enum<typeof UIInterfaceOrientationMask>) {
    this.delegate.navigationControllerSupportedInterfaceOrientations = value;
  }
  set navigationControllerPreferredInterfaceOrientationForPresentation(value: (navigationController: UINavigationController) => interop.Enum<typeof UIInterfaceOrientation>) {
    this.delegate.navigationControllerPreferredInterfaceOrientationForPresentation = value;
  }
  set navigationControllerInteractionControllerForAnimationController(value: (navigationController: UINavigationController, animationController: UIViewControllerAnimatedTransitioning) => UIViewControllerInteractiveTransitioning) {
    this.delegate.navigationControllerInteractionControllerForAnimationController = value;
  }
  set navigationControllerAnimationControllerForOperationFromViewControllerToViewController(value: (navigationController: UINavigationController, operation: interop.Enum<typeof UINavigationControllerOperation>, fromVC: UIViewController, toVC: UIViewController) => UIViewControllerAnimatedTransitioning) {
    this.delegate.navigationControllerAnimationControllerForOperationFromViewControllerToViewController = value;
  }
}

export class HTMLUIStoryboardPopoverSegueElement extends HTMLUIStoryboardSegueElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIStoryboardPopoverSegue.new();

  get popoverController(): UIPopoverController { return this.nativeObject.popoverController; }
}

export class HTMLUIPopoverBackgroundViewElement extends HTMLUIViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPopoverBackgroundView.new();

  get arrowOffset(): number { return this.nativeObject.arrowOffset; }
  set arrowOffset(value: number) { this.nativeObject.arrowOffset = value; }
  get arrowDirection(): interop.Enum<typeof UIPopoverArrowDirection> { return this.nativeObject.arrowDirection; }
  set arrowDirection(value: interop.Enum<typeof UIPopoverArrowDirection>) { this.nativeObject.arrowDirection = value; }
}

export class HTMLUIInputViewElement extends HTMLUIViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIInputView.new();

  get inputViewStyle(): interop.Enum<typeof UIInputViewStyle> { return this.nativeObject.inputViewStyle; }
  get allowsSelfSizing(): boolean { return this.nativeObject.allowsSelfSizing; }
  set allowsSelfSizing(value: boolean) { this.nativeObject.allowsSelfSizing = value; }
}

export class HTMLUIMutableApplicationShortcutItemElement extends HTMLUIApplicationShortcutItemElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = UIMutableApplicationShortcutItem.new();

  get type(): string { return this.nativeObject.type; }
  set type(value: string) { this.nativeObject.type = value; }
  get localizedTitle(): string { return this.nativeObject.localizedTitle; }
  set localizedTitle(value: string) { this.nativeObject.localizedTitle = value; }
  get localizedSubtitle(): string { return this.nativeObject.localizedSubtitle; }
  set localizedSubtitle(value: string) { this.nativeObject.localizedSubtitle = value; }
  get icon(): UIApplicationShortcutIcon { return this.nativeObject.icon; }
  set icon(value: UIApplicationShortcutIcon) { this.nativeObject.icon = value; }
  get userInfo(): NSDictionary { return this.nativeObject.userInfo; }
  set userInfo(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) { this.nativeObject.userInfo = value; }
  get targetContentIdentifier(): interop.Object { return this.nativeObject.targetContentIdentifier; }
  set targetContentIdentifier(value: interop.Object) { this.nativeObject.targetContentIdentifier = value; }
}

export class HTMLUIDocumentMenuViewControllerElement extends HTMLUIViewControllerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIDocumentMenuViewController.new();
  get delegate(): UIDocumentMenuDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UIDocumentMenuDelegateImpl.new();
    }
    return this.nativeObject.delegate as UIDocumentMenuDelegateImpl;
  }


  set documentMenuDidPickDocumentPicker(value: (documentMenu: UIDocumentMenuViewController, documentPicker: UIDocumentPickerViewController) => void) {
    this.delegate.documentMenuDidPickDocumentPicker = value;
  }
  set documentMenuWasCancelled(value: (documentMenu: UIDocumentMenuViewController) => void) {
    this.delegate.documentMenuWasCancelled = value;
  }
}

export class HTMLUICollectionViewElement extends HTMLUIScrollViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = UICollectionView.new();
  get delegate(): UICollectionViewDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UICollectionViewDelegateImpl.new();
    }
    return this.nativeObject.delegate as UICollectionViewDelegateImpl;
  }
  get dragDelegate(): UICollectionViewDragDelegateImpl {
    if(!this.nativeObject.dragDelegate){
      this.nativeObject.dragDelegate = UICollectionViewDragDelegateImpl.new();
    }
    return this.nativeObject.dragDelegate as UICollectionViewDragDelegateImpl;
  }
  get dropDelegate(): UICollectionViewDropDelegateImpl {
    if(!this.nativeObject.dropDelegate){
      this.nativeObject.dropDelegate = UICollectionViewDropDelegateImpl.new();
    }
    return this.nativeObject.dropDelegate as UICollectionViewDropDelegateImpl;
  }

  get collectionViewLayout(): UICollectionViewLayout { return this.nativeObject.collectionViewLayout; }
  set collectionViewLayout(value: UICollectionViewLayout) { this.nativeObject.collectionViewLayout = value; }
  get dataSource(): UICollectionViewDataSource { return this.nativeObject.dataSource; }
  set dataSource(value: UICollectionViewDataSource) { this.nativeObject.dataSource = value; }
  get prefetchDataSource(): UICollectionViewDataSourcePrefetching { return this.nativeObject.prefetchDataSource; }
  set prefetchDataSource(value: UICollectionViewDataSourcePrefetching) { this.nativeObject.prefetchDataSource = value; }
  get isPrefetchingEnabled(): boolean { return this.nativeObject.isPrefetchingEnabled; }
  set isPrefetchingEnabled(value: boolean) { this.nativeObject.isPrefetchingEnabled = value; }
  get dragInteractionEnabled(): boolean { return this.nativeObject.dragInteractionEnabled; }
  set dragInteractionEnabled(value: boolean) { this.nativeObject.dragInteractionEnabled = value; }
  get contextMenuInteraction(): UIContextMenuInteraction { return this.nativeObject.contextMenuInteraction; }
  get reorderingCadence(): interop.Enum<typeof UICollectionViewReorderingCadence> { return this.nativeObject.reorderingCadence; }
  set reorderingCadence(value: interop.Enum<typeof UICollectionViewReorderingCadence>) { this.nativeObject.reorderingCadence = value; }
  get selfSizingInvalidation(): interop.Enum<typeof UICollectionViewSelfSizingInvalidation> { return this.nativeObject.selfSizingInvalidation; }
  set selfSizingInvalidation(value: interop.Enum<typeof UICollectionViewSelfSizingInvalidation>) { this.nativeObject.selfSizingInvalidation = value; }
  get backgroundView(): UIView { return this.nativeObject.backgroundView; }
  set backgroundView(value: UIView) { this.nativeObject.backgroundView = value; }
  get allowsSelection(): boolean { return this.nativeObject.allowsSelection; }
  set allowsSelection(value: boolean) { this.nativeObject.allowsSelection = value; }
  get allowsMultipleSelection(): boolean { return this.nativeObject.allowsMultipleSelection; }
  set allowsMultipleSelection(value: boolean) { this.nativeObject.allowsMultipleSelection = value; }
  get indexPathsForSelectedItems(): NSArray { return this.nativeObject.indexPathsForSelectedItems; }
  get hasUncommittedUpdates(): boolean { return this.nativeObject.hasUncommittedUpdates; }
  get numberOfSections(): number { return this.nativeObject.numberOfSections; }
  get visibleCells(): NSArray { return this.nativeObject.visibleCells; }
  get indexPathsForVisibleItems(): NSArray { return this.nativeObject.indexPathsForVisibleItems; }
  get remembersLastFocusedIndexPath(): boolean { return this.nativeObject.remembersLastFocusedIndexPath; }
  set remembersLastFocusedIndexPath(value: boolean) { this.nativeObject.remembersLastFocusedIndexPath = value; }
  get selectionFollowsFocus(): boolean { return this.nativeObject.selectionFollowsFocus; }
  set selectionFollowsFocus(value: boolean) { this.nativeObject.selectionFollowsFocus = value; }
  get allowsFocus(): boolean { return this.nativeObject.allowsFocus; }
  set allowsFocus(value: boolean) { this.nativeObject.allowsFocus = value; }
  get allowsFocusDuringEditing(): boolean { return this.nativeObject.allowsFocusDuringEditing; }
  set allowsFocusDuringEditing(value: boolean) { this.nativeObject.allowsFocusDuringEditing = value; }
  get hasActiveDrag(): boolean { return this.nativeObject.hasActiveDrag; }
  get hasActiveDrop(): boolean { return this.nativeObject.hasActiveDrop; }
  get isEditing(): boolean { return this.nativeObject.isEditing; }
  set isEditing(value: boolean) { this.nativeObject.isEditing = value; }
  get allowsSelectionDuringEditing(): boolean { return this.nativeObject.allowsSelectionDuringEditing; }
  set allowsSelectionDuringEditing(value: boolean) { this.nativeObject.allowsSelectionDuringEditing = value; }
  get allowsMultipleSelectionDuringEditing(): boolean { return this.nativeObject.allowsMultipleSelectionDuringEditing; }
  set allowsMultipleSelectionDuringEditing(value: boolean) { this.nativeObject.allowsMultipleSelectionDuringEditing = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }

  set collectionViewShouldHighlightItemAtIndexPath(value: (collectionView: UICollectionView, indexPath: NSIndexPath) => boolean) {
    this.delegate.collectionViewShouldHighlightItemAtIndexPath = value;
  }
  set collectionViewDidHighlightItemAtIndexPath(value: (collectionView: UICollectionView, indexPath: NSIndexPath) => void) {
    this.delegate.collectionViewDidHighlightItemAtIndexPath = value;
  }
  set collectionViewDidUnhighlightItemAtIndexPath(value: (collectionView: UICollectionView, indexPath: NSIndexPath) => void) {
    this.delegate.collectionViewDidUnhighlightItemAtIndexPath = value;
  }
  set collectionViewShouldSelectItemAtIndexPath(value: (collectionView: UICollectionView, indexPath: NSIndexPath) => boolean) {
    this.delegate.collectionViewShouldSelectItemAtIndexPath = value;
  }
  set collectionViewShouldDeselectItemAtIndexPath(value: (collectionView: UICollectionView, indexPath: NSIndexPath) => boolean) {
    this.delegate.collectionViewShouldDeselectItemAtIndexPath = value;
  }
  set collectionViewDidSelectItemAtIndexPath(value: (collectionView: UICollectionView, indexPath: NSIndexPath) => void) {
    this.delegate.collectionViewDidSelectItemAtIndexPath = value;
  }
  set collectionViewDidDeselectItemAtIndexPath(value: (collectionView: UICollectionView, indexPath: NSIndexPath) => void) {
    this.delegate.collectionViewDidDeselectItemAtIndexPath = value;
  }
  set collectionViewCanPerformPrimaryActionForItemAtIndexPath(value: (collectionView: UICollectionView, indexPath: NSIndexPath) => boolean) {
    this.delegate.collectionViewCanPerformPrimaryActionForItemAtIndexPath = value;
  }
  set collectionViewPerformPrimaryActionForItemAtIndexPath(value: (collectionView: UICollectionView, indexPath: NSIndexPath) => void) {
    this.delegate.collectionViewPerformPrimaryActionForItemAtIndexPath = value;
  }
  set collectionViewWillDisplayCellForItemAtIndexPath(value: (collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath) => void) {
    this.delegate.collectionViewWillDisplayCellForItemAtIndexPath = value;
  }
  set collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath(value: (collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath) => void) {
    this.delegate.collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath = value;
  }
  set collectionViewDidEndDisplayingCellForItemAtIndexPath(value: (collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath) => void) {
    this.delegate.collectionViewDidEndDisplayingCellForItemAtIndexPath = value;
  }
  set collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath(value: (collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath) => void) {
    this.delegate.collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath = value;
  }
  set collectionViewShouldShowMenuForItemAtIndexPath(value: (collectionView: UICollectionView, indexPath: NSIndexPath) => boolean) {
    this.delegate.collectionViewShouldShowMenuForItemAtIndexPath = value;
  }
  set collectionViewCanPerformActionForItemAtIndexPathWithSender(value: (collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: interop.Object | null) => boolean) {
    this.delegate.collectionViewCanPerformActionForItemAtIndexPathWithSender = value;
  }
  set collectionViewPerformActionForItemAtIndexPathWithSender(value: (collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: interop.Object | null) => void) {
    this.delegate.collectionViewPerformActionForItemAtIndexPathWithSender = value;
  }
  set collectionViewTransitionLayoutForOldLayoutNewLayout(value: (collectionView: UICollectionView, fromLayout: UICollectionViewLayout, toLayout: UICollectionViewLayout) => UICollectionViewTransitionLayout) {
    this.delegate.collectionViewTransitionLayoutForOldLayoutNewLayout = value;
  }
  set collectionViewCanFocusItemAtIndexPath(value: (collectionView: UICollectionView, indexPath: NSIndexPath) => boolean) {
    this.delegate.collectionViewCanFocusItemAtIndexPath = value;
  }
  set collectionViewShouldUpdateFocusInContext(value: (collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext) => boolean) {
    this.delegate.collectionViewShouldUpdateFocusInContext = value;
  }
  set collectionViewDidUpdateFocusInContextWithAnimationCoordinator(value: (collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator) => void) {
    this.delegate.collectionViewDidUpdateFocusInContextWithAnimationCoordinator = value;
  }
  set indexPathForPreferredFocusedViewInCollectionView(value: (collectionView: UICollectionView) => NSIndexPath) {
    this.delegate.indexPathForPreferredFocusedViewInCollectionView = value;
  }
  set collectionViewSelectionFollowsFocusForItemAtIndexPath(value: (collectionView: UICollectionView, indexPath: NSIndexPath) => boolean) {
    this.delegate.collectionViewSelectionFollowsFocusForItemAtIndexPath = value;
  }
  set collectionViewTargetIndexPathForMoveOfItemFromOriginalIndexPathAtCurrentIndexPathToProposedIndexPath(value: (collectionView: UICollectionView, originalIndexPath: NSIndexPath, currentIndexPath: NSIndexPath, proposedIndexPath: NSIndexPath) => NSIndexPath) {
    this.delegate.collectionViewTargetIndexPathForMoveOfItemFromOriginalIndexPathAtCurrentIndexPathToProposedIndexPath = value;
  }
  set collectionViewTargetIndexPathForMoveFromItemAtIndexPathToProposedIndexPath(value: (collectionView: UICollectionView, currentIndexPath: NSIndexPath, proposedIndexPath: NSIndexPath) => NSIndexPath) {
    this.delegate.collectionViewTargetIndexPathForMoveFromItemAtIndexPathToProposedIndexPath = value;
  }
  set collectionViewTargetContentOffsetForProposedContentOffset(value: (collectionView: UICollectionView, proposedContentOffset: CGPoint) => CGPoint) {
    this.delegate.collectionViewTargetContentOffsetForProposedContentOffset = value;
  }
  set collectionViewCanEditItemAtIndexPath(value: (collectionView: UICollectionView, indexPath: NSIndexPath) => boolean) {
    this.delegate.collectionViewCanEditItemAtIndexPath = value;
  }
  set collectionViewShouldSpringLoadItemAtIndexPathWithContext(value: (collectionView: UICollectionView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext) => boolean) {
    this.delegate.collectionViewShouldSpringLoadItemAtIndexPathWithContext = value;
  }
  set collectionViewShouldBeginMultipleSelectionInteractionAtIndexPath(value: (collectionView: UICollectionView, indexPath: NSIndexPath) => boolean) {
    this.delegate.collectionViewShouldBeginMultipleSelectionInteractionAtIndexPath = value;
  }
  set collectionViewDidBeginMultipleSelectionInteractionAtIndexPath(value: (collectionView: UICollectionView, indexPath: NSIndexPath) => void) {
    this.delegate.collectionViewDidBeginMultipleSelectionInteractionAtIndexPath = value;
  }
  set collectionViewDidEndMultipleSelectionInteraction(value: (collectionView: UICollectionView) => void) {
    this.delegate.collectionViewDidEndMultipleSelectionInteraction = value;
  }
  set collectionViewContextMenuConfigurationForItemsAtIndexPathsPoint(value: (collectionView: UICollectionView, indexPaths: NSArray<interop.Object> | Array<interop.Object>, point: CGPoint) => UIContextMenuConfiguration) {
    this.delegate.collectionViewContextMenuConfigurationForItemsAtIndexPathsPoint = value;
  }
  set collectionViewContextMenuConfigurationHighlightPreviewForItemAtIndexPath(value: (collectionView: UICollectionView, configuration: UIContextMenuConfiguration, indexPath: NSIndexPath) => UITargetedPreview) {
    this.delegate.collectionViewContextMenuConfigurationHighlightPreviewForItemAtIndexPath = value;
  }
  set collectionViewContextMenuConfigurationDismissalPreviewForItemAtIndexPath(value: (collectionView: UICollectionView, configuration: UIContextMenuConfiguration, indexPath: NSIndexPath) => UITargetedPreview) {
    this.delegate.collectionViewContextMenuConfigurationDismissalPreviewForItemAtIndexPath = value;
  }
  set collectionViewWillPerformPreviewActionForMenuWithConfigurationAnimator(value: (collectionView: UICollectionView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionCommitAnimating) => void) {
    this.delegate.collectionViewWillPerformPreviewActionForMenuWithConfigurationAnimator = value;
  }
  set collectionViewWillDisplayContextMenuWithConfigurationAnimator(value: (collectionView: UICollectionView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating | null) => void) {
    this.delegate.collectionViewWillDisplayContextMenuWithConfigurationAnimator = value;
  }
  set collectionViewWillEndContextMenuInteractionWithConfigurationAnimator(value: (collectionView: UICollectionView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating | null) => void) {
    this.delegate.collectionViewWillEndContextMenuInteractionWithConfigurationAnimator = value;
  }
  set collectionViewSceneActivationConfigurationForItemAtIndexPathPoint(value: (collectionView: UICollectionView, indexPath: NSIndexPath, point: CGPoint) => UIWindowSceneActivationConfiguration) {
    this.delegate.collectionViewSceneActivationConfigurationForItemAtIndexPathPoint = value;
  }
  set collectionViewContextMenuConfigurationForItemAtIndexPathPoint(value: (collectionView: UICollectionView, indexPath: NSIndexPath, point: CGPoint) => UIContextMenuConfiguration) {
    this.delegate.collectionViewContextMenuConfigurationForItemAtIndexPathPoint = value;
  }
  set collectionViewPreviewForHighlightingContextMenuWithConfiguration(value: (collectionView: UICollectionView, configuration: UIContextMenuConfiguration) => UITargetedPreview) {
    this.delegate.collectionViewPreviewForHighlightingContextMenuWithConfiguration = value;
  }
  set collectionViewPreviewForDismissingContextMenuWithConfiguration(value: (collectionView: UICollectionView, configuration: UIContextMenuConfiguration) => UITargetedPreview) {
    this.delegate.collectionViewPreviewForDismissingContextMenuWithConfiguration = value;
  }
  set collectionViewItemsForBeginningDragSessionAtIndexPath(value: (collectionView: UICollectionView, session: UIDragSession, indexPath: NSIndexPath) => NSArray) {
    this.dragDelegate.collectionViewItemsForBeginningDragSessionAtIndexPath = value;
  }
  set collectionViewItemsForAddingToDragSessionAtIndexPathPoint(value: (collectionView: UICollectionView, session: UIDragSession, indexPath: NSIndexPath, point: CGPoint) => NSArray) {
    this.dragDelegate.collectionViewItemsForAddingToDragSessionAtIndexPathPoint = value;
  }
  set collectionViewDragPreviewParametersForItemAtIndexPath(value: (collectionView: UICollectionView, indexPath: NSIndexPath) => UIDragPreviewParameters) {
    this.dragDelegate.collectionViewDragPreviewParametersForItemAtIndexPath = value;
  }
  set collectionViewDragSessionWillBegin(value: (collectionView: UICollectionView, session: UIDragSession) => void) {
    this.dragDelegate.collectionViewDragSessionWillBegin = value;
  }
  set collectionViewDragSessionDidEnd(value: (collectionView: UICollectionView, session: UIDragSession) => void) {
    this.dragDelegate.collectionViewDragSessionDidEnd = value;
  }
  set collectionViewDragSessionAllowsMoveOperation(value: (collectionView: UICollectionView, session: UIDragSession) => boolean) {
    this.dragDelegate.collectionViewDragSessionAllowsMoveOperation = value;
  }
  set collectionViewDragSessionIsRestrictedToDraggingApplication(value: (collectionView: UICollectionView, session: UIDragSession) => boolean) {
    this.dragDelegate.collectionViewDragSessionIsRestrictedToDraggingApplication = value;
  }
  set collectionViewPerformDropWithCoordinator(value: (collectionView: UICollectionView, coordinator: UICollectionViewDropCoordinator) => void) {
    this.dropDelegate.collectionViewPerformDropWithCoordinator = value;
  }
  set collectionViewCanHandleDropSession(value: (collectionView: UICollectionView, session: UIDropSession) => boolean) {
    this.dropDelegate.collectionViewCanHandleDropSession = value;
  }
  set collectionViewDropSessionDidEnter(value: (collectionView: UICollectionView, session: UIDropSession) => void) {
    this.dropDelegate.collectionViewDropSessionDidEnter = value;
  }
  set collectionViewDropSessionDidUpdateWithDestinationIndexPath(value: (collectionView: UICollectionView, session: UIDropSession, destinationIndexPath: NSIndexPath | null) => UICollectionViewDropProposal) {
    this.dropDelegate.collectionViewDropSessionDidUpdateWithDestinationIndexPath = value;
  }
  set collectionViewDropSessionDidExit(value: (collectionView: UICollectionView, session: UIDropSession) => void) {
    this.dropDelegate.collectionViewDropSessionDidExit = value;
  }
  set collectionViewDropSessionDidEnd(value: (collectionView: UICollectionView, session: UIDropSession) => void) {
    this.dropDelegate.collectionViewDropSessionDidEnd = value;
  }
  set collectionViewDropPreviewParametersForItemAtIndexPath(value: (collectionView: UICollectionView, indexPath: NSIndexPath) => UIDragPreviewParameters) {
    this.dropDelegate.collectionViewDropPreviewParametersForItemAtIndexPath = value;
  }
}

export class HTMLUISearchContainerViewControllerElement extends HTMLUIViewControllerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UISearchContainerViewController.new();

  get searchController(): UISearchController { return this.nativeObject.searchController; }
}

export class HTMLUIApplicationElement extends HTMLUIResponderElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIApplication.new();
  get delegate(): UIApplicationDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UIApplicationDelegateImpl.new();
    }
    return this.nativeObject.delegate as UIApplicationDelegateImpl;
  }

  get isIgnoringInteractionEvents(): boolean { return this.nativeObject.isIgnoringInteractionEvents; }
  get isIdleTimerDisabled(): boolean { return this.nativeObject.isIdleTimerDisabled; }
  set isIdleTimerDisabled(value: boolean) { this.nativeObject.isIdleTimerDisabled = value; }
  get keyWindow(): UIWindow { return this.nativeObject.keyWindow; }
  get windows(): NSArray { return this.nativeObject.windows; }
  get isNetworkActivityIndicatorVisible(): boolean { return this.nativeObject.isNetworkActivityIndicatorVisible; }
  set isNetworkActivityIndicatorVisible(value: boolean) { this.nativeObject.isNetworkActivityIndicatorVisible = value; }
  get statusBarStyle(): interop.Enum<typeof UIStatusBarStyle> { return this.nativeObject.statusBarStyle; }
  get isStatusBarHidden(): boolean { return this.nativeObject.isStatusBarHidden; }
  get statusBarOrientation(): interop.Enum<typeof UIInterfaceOrientation> { return this.nativeObject.statusBarOrientation; }
  get statusBarOrientationAnimationDuration(): number { return this.nativeObject.statusBarOrientationAnimationDuration; }
  get statusBarFrame(): CGRect { return this.nativeObject.statusBarFrame; }
  get applicationIconBadgeNumber(): number { return this.nativeObject.applicationIconBadgeNumber; }
  set applicationIconBadgeNumber(value: number) { this.nativeObject.applicationIconBadgeNumber = value; }
  get applicationSupportsShakeToEdit(): boolean { return this.nativeObject.applicationSupportsShakeToEdit; }
  set applicationSupportsShakeToEdit(value: boolean) { this.nativeObject.applicationSupportsShakeToEdit = value; }
  get applicationState(): interop.Enum<typeof UIApplicationState> { return this.nativeObject.applicationState; }
  get backgroundTimeRemaining(): number { return this.nativeObject.backgroundTimeRemaining; }
  get backgroundRefreshStatus(): interop.Enum<typeof UIBackgroundRefreshStatus> { return this.nativeObject.backgroundRefreshStatus; }
  get isProtectedDataAvailable(): boolean { return this.nativeObject.isProtectedDataAvailable; }
  get userInterfaceLayoutDirection(): interop.Enum<typeof UIUserInterfaceLayoutDirection> { return this.nativeObject.userInterfaceLayoutDirection; }
  get preferredContentSizeCategory(): string { return this.nativeObject.preferredContentSizeCategory; }
  get connectedScenes(): NSSet { return this.nativeObject.connectedScenes; }
  get openSessions(): NSSet { return this.nativeObject.openSessions; }
  get supportsMultipleScenes(): boolean { return this.nativeObject.supportsMultipleScenes; }
  get isRegisteredForRemoteNotifications(): boolean { return this.nativeObject.isRegisteredForRemoteNotifications; }
  get scheduledLocalNotifications(): NSArray { return this.nativeObject.scheduledLocalNotifications; }
  set scheduledLocalNotifications(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.scheduledLocalNotifications = value; }
  get currentUserNotificationSettings(): UIUserNotificationSettings { return this.nativeObject.currentUserNotificationSettings; }
  get shortcutItems(): NSArray { return this.nativeObject.shortcutItems; }
  set shortcutItems(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.shortcutItems = value; }
  get supportsAlternateIcons(): boolean { return this.nativeObject.supportsAlternateIcons; }
  get alternateIconName(): string { return this.nativeObject.alternateIconName; }
  get isProximitySensingEnabled(): boolean { return this.nativeObject.isProximitySensingEnabled; }
  set isProximitySensingEnabled(value: boolean) { this.nativeObject.isProximitySensingEnabled = value; }

  set applicationDidFinishLaunching(value: (application: UIApplication) => void) {
    this.delegate.applicationDidFinishLaunching = value;
  }
  set applicationWillFinishLaunchingWithOptions(value: (application: UIApplication, launchOptions: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null) => boolean) {
    this.delegate.applicationWillFinishLaunchingWithOptions = value;
  }
  set applicationDidFinishLaunchingWithOptions(value: (application: UIApplication, launchOptions: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null) => boolean) {
    this.delegate.applicationDidFinishLaunchingWithOptions = value;
  }
  set applicationDidBecomeActive(value: (application: UIApplication) => void) {
    this.delegate.applicationDidBecomeActive = value;
  }
  set applicationWillResignActive(value: (application: UIApplication) => void) {
    this.delegate.applicationWillResignActive = value;
  }
  set applicationHandleOpenURL(value: (application: UIApplication, url: NSURL) => boolean) {
    this.delegate.applicationHandleOpenURL = value;
  }
  set applicationOpenURLSourceApplicationAnnotation(value: (application: UIApplication, url: NSURL, sourceApplication: string | null, annotation: interop.Object) => boolean) {
    this.delegate.applicationOpenURLSourceApplicationAnnotation = value;
  }
  set applicationOpenURLOptions(value: (app: UIApplication, url: NSURL, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) => boolean) {
    this.delegate.applicationOpenURLOptions = value;
  }
  set applicationDidReceiveMemoryWarning(value: (application: UIApplication) => void) {
    this.delegate.applicationDidReceiveMemoryWarning = value;
  }
  set applicationWillTerminate(value: (application: UIApplication) => void) {
    this.delegate.applicationWillTerminate = value;
  }
  set applicationSignificantTimeChange(value: (application: UIApplication) => void) {
    this.delegate.applicationSignificantTimeChange = value;
  }
  set applicationWillChangeStatusBarOrientationDuration(value: (application: UIApplication, newStatusBarOrientation: interop.Enum<typeof UIInterfaceOrientation>, duration: number) => void) {
    this.delegate.applicationWillChangeStatusBarOrientationDuration = value;
  }
  set applicationDidChangeStatusBarOrientation(value: (application: UIApplication, oldStatusBarOrientation: interop.Enum<typeof UIInterfaceOrientation>) => void) {
    this.delegate.applicationDidChangeStatusBarOrientation = value;
  }
  set applicationWillChangeStatusBarFrame(value: (application: UIApplication, newStatusBarFrame: CGRect) => void) {
    this.delegate.applicationWillChangeStatusBarFrame = value;
  }
  set applicationDidChangeStatusBarFrame(value: (application: UIApplication, oldStatusBarFrame: CGRect) => void) {
    this.delegate.applicationDidChangeStatusBarFrame = value;
  }
  set applicationDidRegisterUserNotificationSettings(value: (application: UIApplication, notificationSettings: UIUserNotificationSettings) => void) {
    this.delegate.applicationDidRegisterUserNotificationSettings = value;
  }
  set applicationDidRegisterForRemoteNotificationsWithDeviceToken(value: (application: UIApplication, deviceToken: NSData) => void) {
    this.delegate.applicationDidRegisterForRemoteNotificationsWithDeviceToken = value;
  }
  set applicationDidFailToRegisterForRemoteNotificationsWithError(value: (application: UIApplication, error: NSError) => void) {
    this.delegate.applicationDidFailToRegisterForRemoteNotificationsWithError = value;
  }
  set applicationDidReceiveRemoteNotification(value: (application: UIApplication, userInfo: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) => void) {
    this.delegate.applicationDidReceiveRemoteNotification = value;
  }
  set applicationDidReceiveLocalNotification(value: (application: UIApplication, notification: UILocalNotification) => void) {
    this.delegate.applicationDidReceiveLocalNotification = value;
  }
  set applicationHandleActionWithIdentifierForLocalNotificationCompletionHandler(value: (application: UIApplication, identifier: string | null, notification: UILocalNotification, completionHandler: () => void) => void) {
    this.delegate.applicationHandleActionWithIdentifierForLocalNotificationCompletionHandler = value;
  }
  set applicationHandleActionWithIdentifierForRemoteNotificationWithResponseInfoCompletionHandler(value: (application: UIApplication, identifier: string | null, userInfo: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, responseInfo: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, completionHandler: () => void) => void) {
    this.delegate.applicationHandleActionWithIdentifierForRemoteNotificationWithResponseInfoCompletionHandler = value;
  }
  set applicationHandleActionWithIdentifierForRemoteNotificationCompletionHandler(value: (application: UIApplication, identifier: string | null, userInfo: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, completionHandler: () => void) => void) {
    this.delegate.applicationHandleActionWithIdentifierForRemoteNotificationCompletionHandler = value;
  }
  set applicationHandleActionWithIdentifierForLocalNotificationWithResponseInfoCompletionHandler(value: (application: UIApplication, identifier: string | null, notification: UILocalNotification, responseInfo: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, completionHandler: () => void) => void) {
    this.delegate.applicationHandleActionWithIdentifierForLocalNotificationWithResponseInfoCompletionHandler = value;
  }
  set applicationDidReceiveRemoteNotificationFetchCompletionHandler(value: (application: UIApplication, userInfo: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, completionHandler: (p1: interop.Enum<typeof UIBackgroundFetchResult>) => void) => void) {
    this.delegate.applicationDidReceiveRemoteNotificationFetchCompletionHandler = value;
  }
  set applicationPerformFetchWithCompletionHandler(value: (application: UIApplication, completionHandler: (p1: interop.Enum<typeof UIBackgroundFetchResult>) => void) => void) {
    this.delegate.applicationPerformFetchWithCompletionHandler = value;
  }
  set applicationPerformActionForShortcutItemCompletionHandler(value: (application: UIApplication, shortcutItem: UIApplicationShortcutItem, completionHandler: (p1: boolean) => void) => void) {
    this.delegate.applicationPerformActionForShortcutItemCompletionHandler = value;
  }
  set applicationHandleEventsForBackgroundURLSessionCompletionHandler(value: (application: UIApplication, identifier: string, completionHandler: () => void) => void) {
    this.delegate.applicationHandleEventsForBackgroundURLSessionCompletionHandler = value;
  }
  set applicationHandleWatchKitExtensionRequestReply(value: (application: UIApplication, userInfo: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, reply: (p1: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) => void | null) => void) {
    this.delegate.applicationHandleWatchKitExtensionRequestReply = value;
  }
  set applicationShouldRequestHealthAuthorization(value: (application: UIApplication) => void) {
    this.delegate.applicationShouldRequestHealthAuthorization = value;
  }
  set applicationHandlerForIntent(value: (application: UIApplication, intent: INIntent) => interop.Object) {
    this.delegate.applicationHandlerForIntent = value;
  }
  set applicationHandleIntentCompletionHandler(value: (application: UIApplication, intent: INIntent, completionHandler: (p1: INIntentResponse) => void) => void) {
    this.delegate.applicationHandleIntentCompletionHandler = value;
  }
  set applicationDidEnterBackground(value: (application: UIApplication) => void) {
    this.delegate.applicationDidEnterBackground = value;
  }
  set applicationWillEnterForeground(value: (application: UIApplication) => void) {
    this.delegate.applicationWillEnterForeground = value;
  }
  set applicationProtectedDataWillBecomeUnavailable(value: (application: UIApplication) => void) {
    this.delegate.applicationProtectedDataWillBecomeUnavailable = value;
  }
  set applicationProtectedDataDidBecomeAvailable(value: (application: UIApplication) => void) {
    this.delegate.applicationProtectedDataDidBecomeAvailable = value;
  }
  // TODO: check whether proxying delegate properties actually works
  set window(value: UIWindow) {
    this.delegate.window = value;
  }
  set applicationSupportedInterfaceOrientationsForWindow(value: (application: UIApplication, window: UIWindow | null) => interop.Enum<typeof UIInterfaceOrientationMask>) {
    this.delegate.applicationSupportedInterfaceOrientationsForWindow = value;
  }
  set applicationShouldAllowExtensionPointIdentifier(value: (application: UIApplication, extensionPointIdentifier: string) => boolean) {
    this.delegate.applicationShouldAllowExtensionPointIdentifier = value;
  }
  set applicationViewControllerWithRestorationIdentifierPathCoder(value: (application: UIApplication, identifierComponents: NSArray<interop.Object> | Array<interop.Object>, coder: NSCoder) => UIViewController) {
    this.delegate.applicationViewControllerWithRestorationIdentifierPathCoder = value;
  }
  set applicationShouldSaveSecureApplicationState(value: (application: UIApplication, coder: NSCoder) => boolean) {
    this.delegate.applicationShouldSaveSecureApplicationState = value;
  }
  set applicationShouldRestoreSecureApplicationState(value: (application: UIApplication, coder: NSCoder) => boolean) {
    this.delegate.applicationShouldRestoreSecureApplicationState = value;
  }
  set applicationWillEncodeRestorableStateWithCoder(value: (application: UIApplication, coder: NSCoder) => void) {
    this.delegate.applicationWillEncodeRestorableStateWithCoder = value;
  }
  set applicationDidDecodeRestorableStateWithCoder(value: (application: UIApplication, coder: NSCoder) => void) {
    this.delegate.applicationDidDecodeRestorableStateWithCoder = value;
  }
  set applicationShouldSaveApplicationState(value: (application: UIApplication, coder: NSCoder) => boolean) {
    this.delegate.applicationShouldSaveApplicationState = value;
  }
  set applicationShouldRestoreApplicationState(value: (application: UIApplication, coder: NSCoder) => boolean) {
    this.delegate.applicationShouldRestoreApplicationState = value;
  }
  set applicationWillContinueUserActivityWithType(value: (application: UIApplication, userActivityType: string) => boolean) {
    this.delegate.applicationWillContinueUserActivityWithType = value;
  }
  set applicationContinueUserActivityRestorationHandler(value: (application: UIApplication, userActivity: NSUserActivity, restorationHandler: (p1: NSArray<interop.Object> | Array<interop.Object>) => void | null) => boolean) {
    this.delegate.applicationContinueUserActivityRestorationHandler = value;
  }
  set applicationDidFailToContinueUserActivityWithTypeError(value: (application: UIApplication, userActivityType: string, error: NSError) => void) {
    this.delegate.applicationDidFailToContinueUserActivityWithTypeError = value;
  }
  set applicationDidUpdateUserActivity(value: (application: UIApplication, userActivity: NSUserActivity) => void) {
    this.delegate.applicationDidUpdateUserActivity = value;
  }
  set applicationUserDidAcceptCloudKitShareWithMetadata(value: (application: UIApplication, cloudKitShareMetadata: CKShareMetadata) => void) {
    this.delegate.applicationUserDidAcceptCloudKitShareWithMetadata = value;
  }
  set applicationConfigurationForConnectingSceneSessionOptions(value: (application: UIApplication, connectingSceneSession: UISceneSession, options: UISceneConnectionOptions) => UISceneConfiguration) {
    this.delegate.applicationConfigurationForConnectingSceneSessionOptions = value;
  }
  set applicationDidDiscardSceneSessions(value: (application: UIApplication, sceneSessions: NSSet) => void) {
    this.delegate.applicationDidDiscardSceneSessions = value;
  }
  set applicationShouldAutomaticallyLocalizeKeyCommands(value: (application: UIApplication) => boolean) {
    this.delegate.applicationShouldAutomaticallyLocalizeKeyCommands = value;
  }
}

export class HTMLUIListContentViewElement extends HTMLUIViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIListContentView.new();

  get configuration(): UIListContentConfiguration { return this.nativeObject.configuration; }
  set configuration(value: UIListContentConfiguration) { this.nativeObject.configuration = value; }
  get textLayoutGuide(): UILayoutGuide { return this.nativeObject.textLayoutGuide; }
  get secondaryTextLayoutGuide(): UILayoutGuide { return this.nativeObject.secondaryTextLayoutGuide; }
  get imageLayoutGuide(): UILayoutGuide { return this.nativeObject.imageLayoutGuide; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUIPinchGestureRecognizerElement extends HTMLUIGestureRecognizerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPinchGestureRecognizer.new();

  get scale(): number { return this.nativeObject.scale; }
  set scale(value: number) { this.nativeObject.scale = value; }
  get velocity(): number { return this.nativeObject.velocity; }
}

export class HTMLUIDatePickerElement extends HTMLUIControlElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIDatePicker.new();

  get datePickerMode(): interop.Enum<typeof UIDatePickerMode> { return this.nativeObject.datePickerMode; }
  set datePickerMode(value: interop.Enum<typeof UIDatePickerMode>) { this.nativeObject.datePickerMode = value; }
  get locale(): NSLocale { return this.nativeObject.locale; }
  set locale(value: NSLocale) { this.nativeObject.locale = value; }
  get calendar(): NSCalendar { return this.nativeObject.calendar; }
  set calendar(value: NSCalendar) { this.nativeObject.calendar = value; }
  get timeZone(): NSTimeZone { return this.nativeObject.timeZone; }
  set timeZone(value: NSTimeZone) { this.nativeObject.timeZone = value; }
  get date(): NSDate { return this.nativeObject.date; }
  set date(value: NSDate) { this.nativeObject.date = value; }
  get minimumDate(): NSDate { return this.nativeObject.minimumDate; }
  set minimumDate(value: NSDate) { this.nativeObject.minimumDate = value; }
  get maximumDate(): NSDate { return this.nativeObject.maximumDate; }
  set maximumDate(value: NSDate) { this.nativeObject.maximumDate = value; }
  get countDownDuration(): number { return this.nativeObject.countDownDuration; }
  set countDownDuration(value: number) { this.nativeObject.countDownDuration = value; }
  get minuteInterval(): number { return this.nativeObject.minuteInterval; }
  set minuteInterval(value: number) { this.nativeObject.minuteInterval = value; }
  get preferredDatePickerStyle(): interop.Enum<typeof UIDatePickerStyle> { return this.nativeObject.preferredDatePickerStyle; }
  set preferredDatePickerStyle(value: interop.Enum<typeof UIDatePickerStyle>) { this.nativeObject.preferredDatePickerStyle = value; }
  get datePickerStyle(): interop.Enum<typeof UIDatePickerStyle> { return this.nativeObject.datePickerStyle; }
  get roundsToMinuteInterval(): boolean { return this.nativeObject.roundsToMinuteInterval; }
  set roundsToMinuteInterval(value: boolean) { this.nativeObject.roundsToMinuteInterval = value; }
}

export class HTMLUITapGestureRecognizerElement extends HTMLUIGestureRecognizerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITapGestureRecognizer.new();

  get numberOfTapsRequired(): number { return this.nativeObject.numberOfTapsRequired; }
  set numberOfTapsRequired(value: number) { this.nativeObject.numberOfTapsRequired = value; }
  get numberOfTouchesRequired(): number { return this.nativeObject.numberOfTouchesRequired; }
  set numberOfTouchesRequired(value: number) { this.nativeObject.numberOfTouchesRequired = value; }
  get buttonMaskRequired(): interop.Enum<typeof UIEventButtonMask> { return this.nativeObject.buttonMaskRequired; }
  set buttonMaskRequired(value: interop.Enum<typeof UIEventButtonMask>) { this.nativeObject.buttonMaskRequired = value; }
}

export class HTMLNSCollectionLayoutSupplementaryItemElement extends HTMLNSCollectionLayoutItemElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSCollectionLayoutSupplementaryItem.new();

  get zIndex(): number { return this.nativeObject.zIndex; }
  set zIndex(value: number) { this.nativeObject.zIndex = value; }
  get elementKind(): string { return this.nativeObject.elementKind; }
  get containerAnchor(): NSCollectionLayoutAnchor { return this.nativeObject.containerAnchor; }
  get itemAnchor(): NSCollectionLayoutAnchor { return this.nativeObject.itemAnchor; }
}

export class HTMLUIPrintServiceExtensionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPrintServiceExtension.new();

}

export class HTMLUIDocumentBrowserViewControllerElement extends HTMLUIViewControllerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIDocumentBrowserViewController.new();
  get delegate(): UIDocumentBrowserViewControllerDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UIDocumentBrowserViewControllerDelegateImpl.new();
    }
    return this.nativeObject.delegate as UIDocumentBrowserViewControllerDelegateImpl;
  }

  get allowsDocumentCreation(): boolean { return this.nativeObject.allowsDocumentCreation; }
  set allowsDocumentCreation(value: boolean) { this.nativeObject.allowsDocumentCreation = value; }
  get allowsPickingMultipleItems(): boolean { return this.nativeObject.allowsPickingMultipleItems; }
  set allowsPickingMultipleItems(value: boolean) { this.nativeObject.allowsPickingMultipleItems = value; }
  get allowedContentTypes(): NSArray { return this.nativeObject.allowedContentTypes; }
  get recentDocumentsContentTypes(): NSArray { return this.nativeObject.recentDocumentsContentTypes; }
  get contentTypesForRecentDocuments(): NSArray { return this.nativeObject.contentTypesForRecentDocuments; }
  get shouldShowFileExtensions(): boolean { return this.nativeObject.shouldShowFileExtensions; }
  set shouldShowFileExtensions(value: boolean) { this.nativeObject.shouldShowFileExtensions = value; }
  get additionalLeadingNavigationBarButtonItems(): NSArray { return this.nativeObject.additionalLeadingNavigationBarButtonItems; }
  set additionalLeadingNavigationBarButtonItems(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.additionalLeadingNavigationBarButtonItems = value; }
  get additionalTrailingNavigationBarButtonItems(): NSArray { return this.nativeObject.additionalTrailingNavigationBarButtonItems; }
  set additionalTrailingNavigationBarButtonItems(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.additionalTrailingNavigationBarButtonItems = value; }
  get customActions(): NSArray { return this.nativeObject.customActions; }
  set customActions(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.customActions = value; }
  get browserUserInterfaceStyle(): interop.Enum<typeof UIDocumentBrowserUserInterfaceStyle> { return this.nativeObject.browserUserInterfaceStyle; }
  set browserUserInterfaceStyle(value: interop.Enum<typeof UIDocumentBrowserUserInterfaceStyle>) { this.nativeObject.browserUserInterfaceStyle = value; }
  get localizedCreateDocumentActionTitle(): string { return this.nativeObject.localizedCreateDocumentActionTitle; }
  set localizedCreateDocumentActionTitle(value: string) { this.nativeObject.localizedCreateDocumentActionTitle = value; }
  get defaultDocumentAspectRatio(): number { return this.nativeObject.defaultDocumentAspectRatio; }
  set defaultDocumentAspectRatio(value: number) { this.nativeObject.defaultDocumentAspectRatio = value; }

  set documentBrowserDidPickDocumentURLs(value: (controller: UIDocumentBrowserViewController, documentURLs: NSArray<interop.Object> | Array<interop.Object>) => void) {
    this.delegate.documentBrowserDidPickDocumentURLs = value;
  }
  set documentBrowserDidPickDocumentsAtURLs(value: (controller: UIDocumentBrowserViewController, documentURLs: NSArray<interop.Object> | Array<interop.Object>) => void) {
    this.delegate.documentBrowserDidPickDocumentsAtURLs = value;
  }
  set documentBrowserDidRequestDocumentCreationWithHandler(value: (controller: UIDocumentBrowserViewController, importHandler: (p1: NSURL, p2: interop.Enum<typeof UIDocumentBrowserImportMode>) => void | null) => void) {
    this.delegate.documentBrowserDidRequestDocumentCreationWithHandler = value;
  }
  set documentBrowserDidImportDocumentAtURLToDestinationURL(value: (controller: UIDocumentBrowserViewController, sourceURL: NSURL, destinationURL: NSURL) => void) {
    this.delegate.documentBrowserDidImportDocumentAtURLToDestinationURL = value;
  }
  set documentBrowserFailedToImportDocumentAtURLError(value: (controller: UIDocumentBrowserViewController, documentURL: NSURL, error: NSError | null) => void) {
    this.delegate.documentBrowserFailedToImportDocumentAtURLError = value;
  }
  set documentBrowserApplicationActivitiesForDocumentURLs(value: (controller: UIDocumentBrowserViewController, documentURLs: NSArray<interop.Object> | Array<interop.Object>) => NSArray) {
    this.delegate.documentBrowserApplicationActivitiesForDocumentURLs = value;
  }
  set documentBrowserWillPresentActivityViewController(value: (controller: UIDocumentBrowserViewController, activityViewController: UIActivityViewController) => void) {
    this.delegate.documentBrowserWillPresentActivityViewController = value;
  }
}

export class HTMLUIContentUnavailableTextPropertiesElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIContentUnavailableTextProperties.new();

  get font(): UIFont { return this.nativeObject.font; }
  set font(value: UIFont) { this.nativeObject.font = value; }
  get color(): UIColor { return this.nativeObject.color; }
  set color(value: UIColor) { this.nativeObject.color = value; }
  get lineBreakMode(): interop.Enum<typeof NSLineBreakMode> { return this.nativeObject.lineBreakMode; }
  set lineBreakMode(value: interop.Enum<typeof NSLineBreakMode>) { this.nativeObject.lineBreakMode = value; }
  get numberOfLines(): number { return this.nativeObject.numberOfLines; }
  set numberOfLines(value: number) { this.nativeObject.numberOfLines = value; }
  get adjustsFontSizeToFitWidth(): boolean { return this.nativeObject.adjustsFontSizeToFitWidth; }
  set adjustsFontSizeToFitWidth(value: boolean) { this.nativeObject.adjustsFontSizeToFitWidth = value; }
  get minimumScaleFactor(): number { return this.nativeObject.minimumScaleFactor; }
  set minimumScaleFactor(value: number) { this.nativeObject.minimumScaleFactor = value; }
  get allowsDefaultTighteningForTruncation(): boolean { return this.nativeObject.allowsDefaultTighteningForTruncation; }
  set allowsDefaultTighteningForTruncation(value: boolean) { this.nativeObject.allowsDefaultTighteningForTruncation = value; }
}

export class HTMLUIWindowSceneDragInteractionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIWindowSceneDragInteraction.new();

  get gestureForFailureRelationships(): UIGestureRecognizer { return this.nativeObject.gestureForFailureRelationships; }
  get view(): UIView { return this.nativeObject.view; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUIPointerShapeElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPointerShape.new();

}

export class HTMLUITextItemMenuPreviewElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITextItemMenuPreview.new();

}

export class HTMLUIScribbleInteractionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIScribbleInteraction.new();
  get delegate(): UIScribbleInteractionDelegateImpl {
    // delegate is readonly, so not lazy-initialized.
    return this.nativeObject.delegate as UIScribbleInteractionDelegateImpl;
  }

  get isHandlingWriting(): boolean { return this.nativeObject.isHandlingWriting; }
  get view(): UIView { return this.nativeObject.view; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }

  set scribbleInteractionShouldBeginAtLocation(value: (interaction: UIScribbleInteraction, location: CGPoint) => boolean) {
    this.delegate.scribbleInteractionShouldBeginAtLocation = value;
  }
  set scribbleInteractionShouldDelayFocus(value: (interaction: UIScribbleInteraction) => boolean) {
    this.delegate.scribbleInteractionShouldDelayFocus = value;
  }
  set scribbleInteractionWillBeginWriting(value: (interaction: UIScribbleInteraction) => void) {
    this.delegate.scribbleInteractionWillBeginWriting = value;
  }
  set scribbleInteractionDidFinishWriting(value: (interaction: UIScribbleInteraction) => void) {
    this.delegate.scribbleInteractionDidFinishWriting = value;
  }
}

export class HTMLUIDragItemElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIDragItem.new();

  get itemProvider(): NSItemProvider { return this.nativeObject.itemProvider; }
  get localObject(): interop.Object { return this.nativeObject.localObject; }
  set localObject(value: interop.Object) { this.nativeObject.localObject = value; }
  get previewProvider(): () => UIDragPreview | null { return this.nativeObject.previewProvider; }
  set previewProvider(value: () => UIDragPreview | null) { this.nativeObject.previewProvider = value; }
}

export class HTMLUISplitViewControllerElement extends HTMLUIViewControllerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UISplitViewController.new();
  get delegate(): UISplitViewControllerDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UISplitViewControllerDelegateImpl.new();
    }
    return this.nativeObject.delegate as UISplitViewControllerDelegateImpl;
  }

  get showsSecondaryOnlyButton(): boolean { return this.nativeObject.showsSecondaryOnlyButton; }
  set showsSecondaryOnlyButton(value: boolean) { this.nativeObject.showsSecondaryOnlyButton = value; }
  get preferredSplitBehavior(): interop.Enum<typeof UISplitViewControllerSplitBehavior> { return this.nativeObject.preferredSplitBehavior; }
  set preferredSplitBehavior(value: interop.Enum<typeof UISplitViewControllerSplitBehavior>) { this.nativeObject.preferredSplitBehavior = value; }
  get splitBehavior(): interop.Enum<typeof UISplitViewControllerSplitBehavior> { return this.nativeObject.splitBehavior; }
  get viewControllers(): NSArray { return this.nativeObject.viewControllers; }
  set viewControllers(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.viewControllers = value; }
  get presentsWithGesture(): boolean { return this.nativeObject.presentsWithGesture; }
  set presentsWithGesture(value: boolean) { this.nativeObject.presentsWithGesture = value; }
  get isCollapsed(): boolean { return this.nativeObject.isCollapsed; }
  get preferredDisplayMode(): interop.Enum<typeof UISplitViewControllerDisplayMode> { return this.nativeObject.preferredDisplayMode; }
  set preferredDisplayMode(value: interop.Enum<typeof UISplitViewControllerDisplayMode>) { this.nativeObject.preferredDisplayMode = value; }
  get displayMode(): interop.Enum<typeof UISplitViewControllerDisplayMode> { return this.nativeObject.displayMode; }
  get displayModeButtonItem(): UIBarButtonItem { return this.nativeObject.displayModeButtonItem; }
  get displayModeButtonVisibility(): interop.Enum<typeof UISplitViewControllerDisplayModeButtonVisibility> { return this.nativeObject.displayModeButtonVisibility; }
  set displayModeButtonVisibility(value: interop.Enum<typeof UISplitViewControllerDisplayModeButtonVisibility>) { this.nativeObject.displayModeButtonVisibility = value; }
  get preferredPrimaryColumnWidthFraction(): number { return this.nativeObject.preferredPrimaryColumnWidthFraction; }
  set preferredPrimaryColumnWidthFraction(value: number) { this.nativeObject.preferredPrimaryColumnWidthFraction = value; }
  get preferredPrimaryColumnWidth(): number { return this.nativeObject.preferredPrimaryColumnWidth; }
  set preferredPrimaryColumnWidth(value: number) { this.nativeObject.preferredPrimaryColumnWidth = value; }
  get minimumPrimaryColumnWidth(): number { return this.nativeObject.minimumPrimaryColumnWidth; }
  set minimumPrimaryColumnWidth(value: number) { this.nativeObject.minimumPrimaryColumnWidth = value; }
  get maximumPrimaryColumnWidth(): number { return this.nativeObject.maximumPrimaryColumnWidth; }
  set maximumPrimaryColumnWidth(value: number) { this.nativeObject.maximumPrimaryColumnWidth = value; }
  get primaryColumnWidth(): number { return this.nativeObject.primaryColumnWidth; }
  get preferredSupplementaryColumnWidthFraction(): number { return this.nativeObject.preferredSupplementaryColumnWidthFraction; }
  set preferredSupplementaryColumnWidthFraction(value: number) { this.nativeObject.preferredSupplementaryColumnWidthFraction = value; }
  get preferredSupplementaryColumnWidth(): number { return this.nativeObject.preferredSupplementaryColumnWidth; }
  set preferredSupplementaryColumnWidth(value: number) { this.nativeObject.preferredSupplementaryColumnWidth = value; }
  get minimumSupplementaryColumnWidth(): number { return this.nativeObject.minimumSupplementaryColumnWidth; }
  set minimumSupplementaryColumnWidth(value: number) { this.nativeObject.minimumSupplementaryColumnWidth = value; }
  get maximumSupplementaryColumnWidth(): number { return this.nativeObject.maximumSupplementaryColumnWidth; }
  set maximumSupplementaryColumnWidth(value: number) { this.nativeObject.maximumSupplementaryColumnWidth = value; }
  get supplementaryColumnWidth(): number { return this.nativeObject.supplementaryColumnWidth; }
  get primaryEdge(): interop.Enum<typeof UISplitViewControllerPrimaryEdge> { return this.nativeObject.primaryEdge; }
  set primaryEdge(value: interop.Enum<typeof UISplitViewControllerPrimaryEdge>) { this.nativeObject.primaryEdge = value; }
  get primaryBackgroundStyle(): interop.Enum<typeof UISplitViewControllerBackgroundStyle> { return this.nativeObject.primaryBackgroundStyle; }
  set primaryBackgroundStyle(value: interop.Enum<typeof UISplitViewControllerBackgroundStyle>) { this.nativeObject.primaryBackgroundStyle = value; }

  set splitViewControllerWillChangeToDisplayMode(value: (svc: UISplitViewController, displayMode: interop.Enum<typeof UISplitViewControllerDisplayMode>) => void) {
    this.delegate.splitViewControllerWillChangeToDisplayMode = value;
  }
  set targetDisplayModeForActionInSplitViewController(value: (svc: UISplitViewController) => interop.Enum<typeof UISplitViewControllerDisplayMode>) {
    this.delegate.targetDisplayModeForActionInSplitViewController = value;
  }
  set splitViewControllerShowViewControllerSender(value: (splitViewController: UISplitViewController, vc: UIViewController, sender: interop.Object | null) => boolean) {
    this.delegate.splitViewControllerShowViewControllerSender = value;
  }
  set splitViewControllerShowDetailViewControllerSender(value: (splitViewController: UISplitViewController, vc: UIViewController, sender: interop.Object | null) => boolean) {
    this.delegate.splitViewControllerShowDetailViewControllerSender = value;
  }
  set primaryViewControllerForCollapsingSplitViewController(value: (splitViewController: UISplitViewController) => UIViewController) {
    this.delegate.primaryViewControllerForCollapsingSplitViewController = value;
  }
  set primaryViewControllerForExpandingSplitViewController(value: (splitViewController: UISplitViewController) => UIViewController) {
    this.delegate.primaryViewControllerForExpandingSplitViewController = value;
  }
  set splitViewControllerCollapseSecondaryViewControllerOntoPrimaryViewController(value: (splitViewController: UISplitViewController, secondaryViewController: UIViewController, primaryViewController: UIViewController) => boolean) {
    this.delegate.splitViewControllerCollapseSecondaryViewControllerOntoPrimaryViewController = value;
  }
  set splitViewControllerSeparateSecondaryViewControllerFromPrimaryViewController(value: (splitViewController: UISplitViewController, primaryViewController: UIViewController) => UIViewController) {
    this.delegate.splitViewControllerSeparateSecondaryViewControllerFromPrimaryViewController = value;
  }
  set splitViewControllerSupportedInterfaceOrientations(value: (splitViewController: UISplitViewController) => interop.Enum<typeof UIInterfaceOrientationMask>) {
    this.delegate.splitViewControllerSupportedInterfaceOrientations = value;
  }
  set splitViewControllerPreferredInterfaceOrientationForPresentation(value: (splitViewController: UISplitViewController) => interop.Enum<typeof UIInterfaceOrientation>) {
    this.delegate.splitViewControllerPreferredInterfaceOrientationForPresentation = value;
  }
  set splitViewControllerWillHideViewControllerWithBarButtonItemForPopoverController(value: (svc: UISplitViewController, aViewController: UIViewController, barButtonItem: UIBarButtonItem, pc: UIPopoverController) => void) {
    this.delegate.splitViewControllerWillHideViewControllerWithBarButtonItemForPopoverController = value;
  }
  set splitViewControllerWillShowViewControllerInvalidatingBarButtonItem(value: (svc: UISplitViewController, aViewController: UIViewController, barButtonItem: UIBarButtonItem) => void) {
    this.delegate.splitViewControllerWillShowViewControllerInvalidatingBarButtonItem = value;
  }
  set splitViewControllerPopoverControllerWillPresentViewController(value: (svc: UISplitViewController, pc: UIPopoverController, aViewController: UIViewController) => void) {
    this.delegate.splitViewControllerPopoverControllerWillPresentViewController = value;
  }
  set splitViewControllerShouldHideViewControllerInOrientation(value: (svc: UISplitViewController, vc: UIViewController, orientation: interop.Enum<typeof UIInterfaceOrientation>) => boolean) {
    this.delegate.splitViewControllerShouldHideViewControllerInOrientation = value;
  }
  set splitViewControllerTopColumnForCollapsingToProposedTopColumn(value: (svc: UISplitViewController, proposedTopColumn: interop.Enum<typeof UISplitViewControllerColumn>) => interop.Enum<typeof UISplitViewControllerColumn>) {
    this.delegate.splitViewControllerTopColumnForCollapsingToProposedTopColumn = value;
  }
  set splitViewControllerDisplayModeForExpandingToProposedDisplayMode(value: (svc: UISplitViewController, proposedDisplayMode: interop.Enum<typeof UISplitViewControllerDisplayMode>) => interop.Enum<typeof UISplitViewControllerDisplayMode>) {
    this.delegate.splitViewControllerDisplayModeForExpandingToProposedDisplayMode = value;
  }
  set splitViewControllerDidCollapse(value: (svc: UISplitViewController) => void) {
    this.delegate.splitViewControllerDidCollapse = value;
  }
  set splitViewControllerDidExpand(value: (svc: UISplitViewController) => void) {
    this.delegate.splitViewControllerDidExpand = value;
  }
  set splitViewControllerWillShowColumn(value: (svc: UISplitViewController, column: interop.Enum<typeof UISplitViewControllerColumn>) => void) {
    this.delegate.splitViewControllerWillShowColumn = value;
  }
  set splitViewControllerWillHideColumn(value: (svc: UISplitViewController, column: interop.Enum<typeof UISplitViewControllerColumn>) => void) {
    this.delegate.splitViewControllerWillHideColumn = value;
  }
  set splitViewControllerInteractivePresentationGestureWillBegin(value: (svc: UISplitViewController) => void) {
    this.delegate.splitViewControllerInteractivePresentationGestureWillBegin = value;
  }
  set splitViewControllerInteractivePresentationGestureDidEnd(value: (svc: UISplitViewController) => void) {
    this.delegate.splitViewControllerInteractivePresentationGestureDidEnd = value;
  }
}

export class HTMLUISliderElement extends HTMLUIControlElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UISlider.new();

  get value(): number { return this.nativeObject.value; }
  set value(value: number) { this.nativeObject.value = value; }
  get minimumValue(): number { return this.nativeObject.minimumValue; }
  set minimumValue(value: number) { this.nativeObject.minimumValue = value; }
  get maximumValue(): number { return this.nativeObject.maximumValue; }
  set maximumValue(value: number) { this.nativeObject.maximumValue = value; }
  get minimumValueImage(): UIImage { return this.nativeObject.minimumValueImage; }
  set minimumValueImage(value: UIImage) { this.nativeObject.minimumValueImage = value; }
  get maximumValueImage(): UIImage { return this.nativeObject.maximumValueImage; }
  set maximumValueImage(value: UIImage) { this.nativeObject.maximumValueImage = value; }
  get isContinuous(): boolean { return this.nativeObject.isContinuous; }
  set isContinuous(value: boolean) { this.nativeObject.isContinuous = value; }
  get minimumTrackTintColor(): UIColor { return this.nativeObject.minimumTrackTintColor; }
  set minimumTrackTintColor(value: UIColor) { this.nativeObject.minimumTrackTintColor = value; }
  get maximumTrackTintColor(): UIColor { return this.nativeObject.maximumTrackTintColor; }
  set maximumTrackTintColor(value: UIColor) { this.nativeObject.maximumTrackTintColor = value; }
  get thumbTintColor(): UIColor { return this.nativeObject.thumbTintColor; }
  set thumbTintColor(value: UIColor) { this.nativeObject.thumbTintColor = value; }
  get currentThumbImage(): UIImage { return this.nativeObject.currentThumbImage; }
  get currentMinimumTrackImage(): UIImage { return this.nativeObject.currentMinimumTrackImage; }
  get currentMaximumTrackImage(): UIImage { return this.nativeObject.currentMaximumTrackImage; }
  get behavioralStyle(): interop.Enum<typeof UIBehavioralStyle> { return this.nativeObject.behavioralStyle; }
  get preferredBehavioralStyle(): interop.Enum<typeof UIBehavioralStyle> { return this.nativeObject.preferredBehavioralStyle; }
  set preferredBehavioralStyle(value: interop.Enum<typeof UIBehavioralStyle>) { this.nativeObject.preferredBehavioralStyle = value; }
}

export class HTMLUIHoverLiftEffectElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIHoverLiftEffect.new();

  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUILexiconElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UILexicon.new();

  get entries(): NSArray { return this.nativeObject.entries; }
}

export class HTMLUICloudSharingControllerElement extends HTMLUIViewControllerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICloudSharingController.new();

  get delegate(): UICloudSharingControllerDelegate | null { return this.nativeObject.delegate; }
  set delegate(value: UICloudSharingControllerDelegate | null) { this.nativeObject.delegate = value; }
  get share(): CKShare { return this.nativeObject.share; }
  get availablePermissions(): interop.Enum<typeof UICloudSharingPermissionOptions> { return this.nativeObject.availablePermissions; }
  set availablePermissions(value: interop.Enum<typeof UICloudSharingPermissionOptions>) { this.nativeObject.availablePermissions = value; }
}

export class HTMLUITableViewDropProposalElement extends HTMLUIDropProposalElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITableViewDropProposal.new();

  get intent(): interop.Enum<typeof UITableViewDropIntent> { return this.nativeObject.intent; }
}

export class HTMLUICellAccessoryInsertElement extends HTMLUICellAccessoryElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICellAccessoryInsert.new();

  get backgroundColor(): UIColor { return this.nativeObject.backgroundColor; }
  set backgroundColor(value: UIColor) { this.nativeObject.backgroundColor = value; }
  get actionHandler(): () => void { return this.nativeObject.actionHandler; }
  set actionHandler(value: () => void) { this.nativeObject.actionHandler = value; }
}

export class HTMLUICollectionViewDiffableDataSourceSectionSnapshotHandlersElement<ItemType = interop.Object> extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICollectionViewDiffableDataSourceSectionSnapshotHandlers.new();

  get shouldExpandItemHandler(): (p1: interop.Object) => boolean { return this.nativeObject.shouldExpandItemHandler; }
  set shouldExpandItemHandler(value: (p1: interop.Object) => boolean) { this.nativeObject.shouldExpandItemHandler = value; }
  get willExpandItemHandler(): (p1: interop.Object) => void { return this.nativeObject.willExpandItemHandler; }
  set willExpandItemHandler(value: (p1: interop.Object) => void) { this.nativeObject.willExpandItemHandler = value; }
  get shouldCollapseItemHandler(): (p1: interop.Object) => boolean { return this.nativeObject.shouldCollapseItemHandler; }
  set shouldCollapseItemHandler(value: (p1: interop.Object) => boolean) { this.nativeObject.shouldCollapseItemHandler = value; }
  get willCollapseItemHandler(): (p1: interop.Object) => void { return this.nativeObject.willCollapseItemHandler; }
  set willCollapseItemHandler(value: (p1: interop.Object) => void) { this.nativeObject.willCollapseItemHandler = value; }
  get snapshotForExpandingParentItemHandler(): (p1: interop.Object, p2: NSDiffableDataSourceSectionSnapshot) => NSDiffableDataSourceSectionSnapshot { return this.nativeObject.snapshotForExpandingParentItemHandler; }
  set snapshotForExpandingParentItemHandler(value: (p1: interop.Object, p2: NSDiffableDataSourceSectionSnapshot) => NSDiffableDataSourceSectionSnapshot) { this.nativeObject.snapshotForExpandingParentItemHandler = value; }
}

export class HTMLUICollectionReusableViewElement extends HTMLUIViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICollectionReusableView.new();

  get reuseIdentifier(): string { return this.nativeObject.reuseIdentifier; }
}

export class HTMLUIAccessibilityCustomRotorSearchPredicateElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIAccessibilityCustomRotorSearchPredicate.new();

  get currentItem(): UIAccessibilityCustomRotorItemResult { return this.nativeObject.currentItem; }
  set currentItem(value: UIAccessibilityCustomRotorItemResult) { this.nativeObject.currentItem = value; }
  get searchDirection(): interop.Enum<typeof UIAccessibilityCustomRotorDirection> { return this.nativeObject.searchDirection; }
  set searchDirection(value: interop.Enum<typeof UIAccessibilityCustomRotorDirection>) { this.nativeObject.searchDirection = value; }
}

export class HTMLUIDeferredMenuElementElement extends HTMLUIMenuElementElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIDeferredMenuElement.new();

}

export class HTMLUIPointerLockStateElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPointerLockState.new();

  get isLocked(): boolean { return this.nativeObject.isLocked; }
}

export class HTMLUITextInputStringTokenizerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITextInputStringTokenizer.new();

  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUITrackingLayoutGuideElement extends HTMLUILayoutGuideElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITrackingLayoutGuide.new();

}

export class HTMLUITraitUserInterfaceLevelElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITraitUserInterfaceLevel.new();

}

export class HTMLUIFontDescriptorElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIFontDescriptor.new();

  get postscriptName(): string { return this.nativeObject.postscriptName; }
  get pointSize(): number { return this.nativeObject.pointSize; }
  get matrix(): CGAffineTransform { return this.nativeObject.matrix; }
  get symbolicTraits(): interop.Enum<typeof UIFontDescriptorSymbolicTraits> { return this.nativeObject.symbolicTraits; }
  get fontAttributes(): NSDictionary { return this.nativeObject.fontAttributes; }
}

export class HTMLUIVisualEffectViewElement extends HTMLUIViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIVisualEffectView.new();

  get contentView(): UIView { return this.nativeObject.contentView; }
  get effect(): UIVisualEffect { return this.nativeObject.effect; }
  set effect(value: UIVisualEffect) { this.nativeObject.effect = value; }
}

export class HTMLUIFocusDebuggerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIFocusDebugger.new();

}

export class HTMLUITraitPreferredContentSizeCategoryElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITraitPreferredContentSizeCategory.new();

}

export class HTMLUIDragPreviewTargetElement extends HTMLUIPreviewTargetElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIDragPreviewTarget.new();

}

export class HTMLUITextSelectionRectElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITextSelectionRect.new();

  get rect(): CGRect { return this.nativeObject.rect; }
  get writingDirection(): interop.Enum<typeof NSWritingDirection> { return this.nativeObject.writingDirection; }
  get containsStart(): boolean { return this.nativeObject.containsStart; }
  get containsEnd(): boolean { return this.nativeObject.containsEnd; }
  get isVertical(): boolean { return this.nativeObject.isVertical; }
}

export class HTMLUIWindowSceneGeometryPreferencesElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIWindowSceneGeometryPreferences.new();

}

export class HTMLUIPresentationControllerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPresentationController.new();
  get delegate(): UIAdaptivePresentationControllerDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UIAdaptivePresentationControllerDelegateImpl.new();
    }
    return this.nativeObject.delegate as UIAdaptivePresentationControllerDelegateImpl;
  }

  get presentingViewController(): UIViewController { return this.nativeObject.presentingViewController; }
  get presentedViewController(): UIViewController { return this.nativeObject.presentedViewController; }
  get presentationStyle(): interop.Enum<typeof UIModalPresentationStyle> { return this.nativeObject.presentationStyle; }
  get containerView(): UIView { return this.nativeObject.containerView; }
  get adaptivePresentationStyle(): interop.Enum<typeof UIModalPresentationStyle> { return this.nativeObject.adaptivePresentationStyle; }
  get presentedView(): UIView { return this.nativeObject.presentedView; }
  get frameOfPresentedViewInContainerView(): CGRect { return this.nativeObject.frameOfPresentedViewInContainerView; }
  get shouldPresentInFullscreen(): boolean { return this.nativeObject.shouldPresentInFullscreen; }
  get shouldRemovePresentersView(): boolean { return this.nativeObject.shouldRemovePresentersView; }
  get overrideTraitCollection(): UITraitCollection { return this.nativeObject.overrideTraitCollection; }
  set overrideTraitCollection(value: UITraitCollection) { this.nativeObject.overrideTraitCollection = value; }
  get traitOverrides(): UITraitOverrides { return this.nativeObject.traitOverrides; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
  get traitCollection(): UITraitCollection { return this.nativeObject.traitCollection; }
  get preferredContentSize(): CGSize { return this.nativeObject.preferredContentSize; }
  get preferredFocusEnvironments(): NSArray { return this.nativeObject.preferredFocusEnvironments; }
  get parentFocusEnvironment(): UIFocusEnvironment { return this.nativeObject.parentFocusEnvironment; }
  get focusItemContainer(): UIFocusItemContainer { return this.nativeObject.focusItemContainer; }
  get preferredFocusedView(): UIView { return this.nativeObject.preferredFocusedView; }
  get focusGroupIdentifier(): string { return this.nativeObject.focusGroupIdentifier; }

  set adaptivePresentationStyleForPresentationController(value: (controller: UIPresentationController) => interop.Enum<typeof UIModalPresentationStyle>) {
    this.delegate.adaptivePresentationStyleForPresentationController = value;
  }
  set adaptivePresentationStyleForPresentationControllerTraitCollection(value: (controller: UIPresentationController, traitCollection: UITraitCollection) => interop.Enum<typeof UIModalPresentationStyle>) {
    this.delegate.adaptivePresentationStyleForPresentationControllerTraitCollection = value;
  }
  set presentationControllerPrepareAdaptivePresentationController(value: (presentationController: UIPresentationController, adaptivePresentationController: UIPresentationController) => void) {
    this.delegate.presentationControllerPrepareAdaptivePresentationController = value;
  }
  set presentationControllerViewControllerForAdaptivePresentationStyle(value: (controller: UIPresentationController, style: interop.Enum<typeof UIModalPresentationStyle>) => UIViewController) {
    this.delegate.presentationControllerViewControllerForAdaptivePresentationStyle = value;
  }
  set presentationControllerWillPresentWithAdaptiveStyleTransitionCoordinator(value: (presentationController: UIPresentationController, style: interop.Enum<typeof UIModalPresentationStyle>, transitionCoordinator: UIViewControllerTransitionCoordinator | null) => void) {
    this.delegate.presentationControllerWillPresentWithAdaptiveStyleTransitionCoordinator = value;
  }
  set presentationControllerShouldDismiss(value: (presentationController: UIPresentationController) => boolean) {
    this.delegate.presentationControllerShouldDismiss = value;
  }
  set presentationControllerWillDismiss(value: (presentationController: UIPresentationController) => void) {
    this.delegate.presentationControllerWillDismiss = value;
  }
  set presentationControllerDidDismiss(value: (presentationController: UIPresentationController) => void) {
    this.delegate.presentationControllerDidDismiss = value;
  }
  set presentationControllerDidAttemptToDismiss(value: (presentationController: UIPresentationController) => void) {
    this.delegate.presentationControllerDidAttemptToDismiss = value;
  }
}

export class HTMLUICollectionViewLayoutInvalidationContextElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICollectionViewLayoutInvalidationContext.new();

  get invalidateEverything(): boolean { return this.nativeObject.invalidateEverything; }
  get invalidateDataSourceCounts(): boolean { return this.nativeObject.invalidateDataSourceCounts; }
  get invalidatedItemIndexPaths(): NSArray { return this.nativeObject.invalidatedItemIndexPaths; }
  get invalidatedSupplementaryIndexPaths(): NSDictionary { return this.nativeObject.invalidatedSupplementaryIndexPaths; }
  get invalidatedDecorationIndexPaths(): NSDictionary { return this.nativeObject.invalidatedDecorationIndexPaths; }
  get contentOffsetAdjustment(): CGPoint { return this.nativeObject.contentOffsetAdjustment; }
  set contentOffsetAdjustment(value: CGPoint) { this.nativeObject.contentOffsetAdjustment = value; }
  get contentSizeAdjustment(): CGSize { return this.nativeObject.contentSizeAdjustment; }
  set contentSizeAdjustment(value: CGSize) { this.nativeObject.contentSizeAdjustment = value; }
  get previousIndexPathsForInteractivelyMovingItems(): NSArray { return this.nativeObject.previousIndexPathsForInteractivelyMovingItems; }
  get targetIndexPathsForInteractivelyMovingItems(): NSArray { return this.nativeObject.targetIndexPathsForInteractivelyMovingItems; }
  get interactiveMovementTarget(): CGPoint { return this.nativeObject.interactiveMovementTarget; }
}

export class HTMLUIPointerEffectElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPointerEffect.new();

  get preview(): UITargetedPreview { return this.nativeObject.preview; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUIEditMenuConfigurationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIEditMenuConfiguration.new();

  get identifier(): NSCopying { return this.nativeObject.identifier; }
  get sourcePoint(): CGPoint { return this.nativeObject.sourcePoint; }
  get preferredArrowDirection(): interop.Enum<typeof UIEditMenuArrowDirection> { return this.nativeObject.preferredArrowDirection; }
  set preferredArrowDirection(value: interop.Enum<typeof UIEditMenuArrowDirection>) { this.nativeObject.preferredArrowDirection = value; }
}

export class HTMLUIMenuSystemElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIMenuSystem.new();

}

export class HTMLUIDocumentViewControllerElement extends HTMLUIViewControllerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIDocumentViewController.new();

  get document(): UIDocument { return this.nativeObject.document; }
  set document(value: UIDocument) { this.nativeObject.document = value; }
  get undoRedoItemGroup(): UIBarButtonItemGroup { return this.nativeObject.undoRedoItemGroup; }
}

export class HTMLUITextDropProposalElement extends HTMLUIDropProposalElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITextDropProposal.new();

  get dropAction(): interop.Enum<typeof UITextDropAction> { return this.nativeObject.dropAction; }
  set dropAction(value: interop.Enum<typeof UITextDropAction>) { this.nativeObject.dropAction = value; }
  get dropProgressMode(): interop.Enum<typeof UITextDropProgressMode> { return this.nativeObject.dropProgressMode; }
  set dropProgressMode(value: interop.Enum<typeof UITextDropProgressMode>) { this.nativeObject.dropProgressMode = value; }
  get useFastSameViewOperations(): boolean { return this.nativeObject.useFastSameViewOperations; }
  set useFastSameViewOperations(value: boolean) { this.nativeObject.useFastSameViewOperations = value; }
  get dropPerformer(): interop.Enum<typeof UITextDropPerformer> { return this.nativeObject.dropPerformer; }
  set dropPerformer(value: interop.Enum<typeof UITextDropPerformer>) { this.nativeObject.dropPerformer = value; }
}

export class HTMLUIDropInteractionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIDropInteraction.new();
  get delegate(): UIDropInteractionDelegateImpl {
    // delegate is readonly, so not lazy-initialized.
    return this.nativeObject.delegate as UIDropInteractionDelegateImpl;
  }

  get allowsSimultaneousDropSessions(): boolean { return this.nativeObject.allowsSimultaneousDropSessions; }
  set allowsSimultaneousDropSessions(value: boolean) { this.nativeObject.allowsSimultaneousDropSessions = value; }
  get view(): UIView { return this.nativeObject.view; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }

  set dropInteractionCanHandleSession(value: (interaction: UIDropInteraction, session: UIDropSession) => boolean) {
    this.delegate.dropInteractionCanHandleSession = value;
  }
  set dropInteractionSessionDidEnter(value: (interaction: UIDropInteraction, session: UIDropSession) => void) {
    this.delegate.dropInteractionSessionDidEnter = value;
  }
  set dropInteractionSessionDidUpdate(value: (interaction: UIDropInteraction, session: UIDropSession) => UIDropProposal) {
    this.delegate.dropInteractionSessionDidUpdate = value;
  }
  set dropInteractionSessionDidExit(value: (interaction: UIDropInteraction, session: UIDropSession) => void) {
    this.delegate.dropInteractionSessionDidExit = value;
  }
  set dropInteractionPerformDrop(value: (interaction: UIDropInteraction, session: UIDropSession) => void) {
    this.delegate.dropInteractionPerformDrop = value;
  }
  set dropInteractionConcludeDrop(value: (interaction: UIDropInteraction, session: UIDropSession) => void) {
    this.delegate.dropInteractionConcludeDrop = value;
  }
  set dropInteractionSessionDidEnd(value: (interaction: UIDropInteraction, session: UIDropSession) => void) {
    this.delegate.dropInteractionSessionDidEnd = value;
  }
  set dropInteractionPreviewForDroppingItemWithDefault(value: (interaction: UIDropInteraction, item: UIDragItem, defaultPreview: UITargetedDragPreview) => UITargetedDragPreview) {
    this.delegate.dropInteractionPreviewForDroppingItemWithDefault = value;
  }
  set dropInteractionItemWillAnimateDropWithAnimator(value: (interaction: UIDropInteraction, item: UIDragItem, animator: UIDragAnimating) => void) {
    this.delegate.dropInteractionItemWillAnimateDropWithAnimator = value;
  }
}

export class HTMLUICollectionViewCellElement extends HTMLUICollectionReusableViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICollectionViewCell.new();

  get configurationState(): UICellConfigurationState { return this.nativeObject.configurationState; }
  get configurationUpdateHandler(): (p1: UICollectionViewCell, p2: UICellConfigurationState) => void { return this.nativeObject.configurationUpdateHandler; }
  set configurationUpdateHandler(value: (p1: UICollectionViewCell, p2: UICellConfigurationState) => void) { this.nativeObject.configurationUpdateHandler = value; }
  get contentConfiguration(): UIContentConfiguration { return this.nativeObject.contentConfiguration; }
  set contentConfiguration(value: UIContentConfiguration) { this.nativeObject.contentConfiguration = value; }
  get automaticallyUpdatesContentConfiguration(): boolean { return this.nativeObject.automaticallyUpdatesContentConfiguration; }
  set automaticallyUpdatesContentConfiguration(value: boolean) { this.nativeObject.automaticallyUpdatesContentConfiguration = value; }
  get contentView(): UIView { return this.nativeObject.contentView; }
  get isSelected(): boolean { return this.nativeObject.isSelected; }
  set isSelected(value: boolean) { this.nativeObject.isSelected = value; }
  get isHighlighted(): boolean { return this.nativeObject.isHighlighted; }
  set isHighlighted(value: boolean) { this.nativeObject.isHighlighted = value; }
  get backgroundConfiguration(): UIBackgroundConfiguration { return this.nativeObject.backgroundConfiguration; }
  set backgroundConfiguration(value: UIBackgroundConfiguration) { this.nativeObject.backgroundConfiguration = value; }
  get automaticallyUpdatesBackgroundConfiguration(): boolean { return this.nativeObject.automaticallyUpdatesBackgroundConfiguration; }
  set automaticallyUpdatesBackgroundConfiguration(value: boolean) { this.nativeObject.automaticallyUpdatesBackgroundConfiguration = value; }
  get backgroundView(): UIView { return this.nativeObject.backgroundView; }
  set backgroundView(value: UIView) { this.nativeObject.backgroundView = value; }
  get selectedBackgroundView(): UIView { return this.nativeObject.selectedBackgroundView; }
  set selectedBackgroundView(value: UIView) { this.nativeObject.selectedBackgroundView = value; }
}

export class HTMLUIPointerHoverEffectElement extends HTMLUIPointerEffectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPointerHoverEffect.new();

  get preferredTintMode(): interop.Enum<typeof UIPointerEffectTintMode> { return this.nativeObject.preferredTintMode; }
  set preferredTintMode(value: interop.Enum<typeof UIPointerEffectTintMode>) { this.nativeObject.preferredTintMode = value; }
  get prefersShadow(): boolean { return this.nativeObject.prefersShadow; }
  set prefersShadow(value: boolean) { this.nativeObject.prefersShadow = value; }
  get prefersScaledContent(): boolean { return this.nativeObject.prefersScaledContent; }
  set prefersScaledContent(value: boolean) { this.nativeObject.prefersScaledContent = value; }
}

export class HTMLUIWindowSceneGeometryPreferencesMacElement extends HTMLUIWindowSceneGeometryPreferencesElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIWindowSceneGeometryPreferencesMac.new();

  get systemFrame(): CGRect { return this.nativeObject.systemFrame; }
  set systemFrame(value: CGRect) { this.nativeObject.systemFrame = value; }
}

export class HTMLUITextViewElement extends HTMLUIScrollViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = UITextView.new();
  get delegate(): UITextViewDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UITextViewDelegateImpl.new();
    }
    return this.nativeObject.delegate as UITextViewDelegateImpl;
  }
  get inputDelegate(): UITextInputDelegateImpl {
    if(!this.nativeObject.inputDelegate){
      this.nativeObject.inputDelegate = UITextInputDelegateImpl.new();
    }
    return this.nativeObject.inputDelegate as UITextInputDelegateImpl;
  }

  get text(): string { return this.nativeObject.text; }
  set text(value: string) { this.nativeObject.text = value; }
  get font(): UIFont { return this.nativeObject.font; }
  set font(value: UIFont) { this.nativeObject.font = value; }
  get textColor(): UIColor { return this.nativeObject.textColor; }
  set textColor(value: UIColor) { this.nativeObject.textColor = value; }
  get textAlignment(): interop.Enum<typeof NSTextAlignment> { return this.nativeObject.textAlignment; }
  set textAlignment(value: interop.Enum<typeof NSTextAlignment>) { this.nativeObject.textAlignment = value; }
  get selectedRange(): _NSRange { return this.nativeObject.selectedRange; }
  set selectedRange(value: _NSRange) { this.nativeObject.selectedRange = value; }
  get isEditable(): boolean { return this.nativeObject.isEditable; }
  set isEditable(value: boolean) { this.nativeObject.isEditable = value; }
  get isSelectable(): boolean { return this.nativeObject.isSelectable; }
  set isSelectable(value: boolean) { this.nativeObject.isSelectable = value; }
  get dataDetectorTypes(): interop.Enum<typeof UIDataDetectorTypes> { return this.nativeObject.dataDetectorTypes; }
  set dataDetectorTypes(value: interop.Enum<typeof UIDataDetectorTypes>) { this.nativeObject.dataDetectorTypes = value; }
  get allowsEditingTextAttributes(): boolean { return this.nativeObject.allowsEditingTextAttributes; }
  set allowsEditingTextAttributes(value: boolean) { this.nativeObject.allowsEditingTextAttributes = value; }
  get attributedText(): NSAttributedString { return this.nativeObject.attributedText; }
  set attributedText(value: NSAttributedString) { this.nativeObject.attributedText = value; }
  get typingAttributes(): NSDictionary { return this.nativeObject.typingAttributes; }
  set typingAttributes(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) { this.nativeObject.typingAttributes = value; }
  get inputView(): UIView { return this.nativeObject.inputView; }
  set inputView(value: UIView) { this.nativeObject.inputView = value; }
  get inputAccessoryView(): UIView { return this.nativeObject.inputAccessoryView; }
  set inputAccessoryView(value: UIView) { this.nativeObject.inputAccessoryView = value; }
  get clearsOnInsertion(): boolean { return this.nativeObject.clearsOnInsertion; }
  set clearsOnInsertion(value: boolean) { this.nativeObject.clearsOnInsertion = value; }
  get textContainer(): NSTextContainer { return this.nativeObject.textContainer; }
  get textContainerInset(): UIEdgeInsets { return this.nativeObject.textContainerInset; }
  set textContainerInset(value: UIEdgeInsets) { this.nativeObject.textContainerInset = value; }
  get textLayoutManager(): NSTextLayoutManager { return this.nativeObject.textLayoutManager; }
  get layoutManager(): NSLayoutManager { return this.nativeObject.layoutManager; }
  get textStorage(): NSTextStorage { return this.nativeObject.textStorage; }
  get linkTextAttributes(): NSDictionary { return this.nativeObject.linkTextAttributes; }
  set linkTextAttributes(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) { this.nativeObject.linkTextAttributes = value; }
  get usesStandardTextScaling(): boolean { return this.nativeObject.usesStandardTextScaling; }
  set usesStandardTextScaling(value: boolean) { this.nativeObject.usesStandardTextScaling = value; }
  get findInteraction(): UIFindInteraction { return this.nativeObject.findInteraction; }
  get isFindInteractionEnabled(): boolean { return this.nativeObject.isFindInteractionEnabled; }
  set isFindInteractionEnabled(value: boolean) { this.nativeObject.isFindInteractionEnabled = value; }
  get borderStyle(): interop.Enum<typeof UITextViewBorderStyle> { return this.nativeObject.borderStyle; }
  set borderStyle(value: interop.Enum<typeof UITextViewBorderStyle>) { this.nativeObject.borderStyle = value; }
  get interactionState(): interop.Object { return this.nativeObject.interactionState; }
  set interactionState(value: interop.Object) { this.nativeObject.interactionState = value; }
  get selectedTextRange(): UITextRange { return this.nativeObject.selectedTextRange; }
  set selectedTextRange(value: UITextRange) { this.nativeObject.selectedTextRange = value; }
  get markedTextRange(): UITextRange { return this.nativeObject.markedTextRange; }
  get markedTextStyle(): NSDictionary { return this.nativeObject.markedTextStyle; }
  set markedTextStyle(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) { this.nativeObject.markedTextStyle = value; }
  get beginningOfDocument(): UITextPosition { return this.nativeObject.beginningOfDocument; }
  get endOfDocument(): UITextPosition { return this.nativeObject.endOfDocument; }
  get tokenizer(): UITextInputTokenizer { return this.nativeObject.tokenizer; }
  get textInputView(): UIView { return this.nativeObject.textInputView; }
  get selectionAffinity(): interop.Enum<typeof UITextStorageDirection> { return this.nativeObject.selectionAffinity; }
  set selectionAffinity(value: interop.Enum<typeof UITextStorageDirection>) { this.nativeObject.selectionAffinity = value; }
  get insertDictationResultPlaceholder(): interop.Object { return this.nativeObject.insertDictationResultPlaceholder; }
  get hasText(): boolean { return this.nativeObject.hasText; }
  get autocapitalizationType(): interop.Enum<typeof UITextAutocapitalizationType> { return this.nativeObject.autocapitalizationType; }
  set autocapitalizationType(value: interop.Enum<typeof UITextAutocapitalizationType>) { this.nativeObject.autocapitalizationType = value; }
  get autocorrectionType(): interop.Enum<typeof UITextAutocorrectionType> { return this.nativeObject.autocorrectionType; }
  set autocorrectionType(value: interop.Enum<typeof UITextAutocorrectionType>) { this.nativeObject.autocorrectionType = value; }
  get spellCheckingType(): interop.Enum<typeof UITextSpellCheckingType> { return this.nativeObject.spellCheckingType; }
  set spellCheckingType(value: interop.Enum<typeof UITextSpellCheckingType>) { this.nativeObject.spellCheckingType = value; }
  get smartQuotesType(): interop.Enum<typeof UITextSmartQuotesType> { return this.nativeObject.smartQuotesType; }
  set smartQuotesType(value: interop.Enum<typeof UITextSmartQuotesType>) { this.nativeObject.smartQuotesType = value; }
  get smartDashesType(): interop.Enum<typeof UITextSmartDashesType> { return this.nativeObject.smartDashesType; }
  set smartDashesType(value: interop.Enum<typeof UITextSmartDashesType>) { this.nativeObject.smartDashesType = value; }
  get smartInsertDeleteType(): interop.Enum<typeof UITextSmartInsertDeleteType> { return this.nativeObject.smartInsertDeleteType; }
  set smartInsertDeleteType(value: interop.Enum<typeof UITextSmartInsertDeleteType>) { this.nativeObject.smartInsertDeleteType = value; }
  get inlinePredictionType(): interop.Enum<typeof UITextInlinePredictionType> { return this.nativeObject.inlinePredictionType; }
  set inlinePredictionType(value: interop.Enum<typeof UITextInlinePredictionType>) { this.nativeObject.inlinePredictionType = value; }
  get keyboardType(): interop.Enum<typeof UIKeyboardType> { return this.nativeObject.keyboardType; }
  set keyboardType(value: interop.Enum<typeof UIKeyboardType>) { this.nativeObject.keyboardType = value; }
  get keyboardAppearance(): interop.Enum<typeof UIKeyboardAppearance> { return this.nativeObject.keyboardAppearance; }
  set keyboardAppearance(value: interop.Enum<typeof UIKeyboardAppearance>) { this.nativeObject.keyboardAppearance = value; }
  get returnKeyType(): interop.Enum<typeof UIReturnKeyType> { return this.nativeObject.returnKeyType; }
  set returnKeyType(value: interop.Enum<typeof UIReturnKeyType>) { this.nativeObject.returnKeyType = value; }
  get enablesReturnKeyAutomatically(): boolean { return this.nativeObject.enablesReturnKeyAutomatically; }
  set enablesReturnKeyAutomatically(value: boolean) { this.nativeObject.enablesReturnKeyAutomatically = value; }
  get isSecureTextEntry(): boolean { return this.nativeObject.isSecureTextEntry; }
  set isSecureTextEntry(value: boolean) { this.nativeObject.isSecureTextEntry = value; }
  get textContentType(): string { return this.nativeObject.textContentType; }
  set textContentType(value: string) { this.nativeObject.textContentType = value; }
  get passwordRules(): UITextInputPasswordRules { return this.nativeObject.passwordRules; }
  set passwordRules(value: UITextInputPasswordRules) { this.nativeObject.passwordRules = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
  get adjustsFontForContentSizeCategory(): boolean { return this.nativeObject.adjustsFontForContentSizeCategory; }
  set adjustsFontForContentSizeCategory(value: boolean) { this.nativeObject.adjustsFontForContentSizeCategory = value; }
  get sizingRule(): interop.Enum<typeof UILetterformAwareSizingRule> { return this.nativeObject.sizingRule; }
  set sizingRule(value: interop.Enum<typeof UILetterformAwareSizingRule>) { this.nativeObject.sizingRule = value; }

  set textViewShouldBeginEditing(value: (textView: UITextView) => boolean) {
    this.delegate.textViewShouldBeginEditing = value;
  }
  set textViewShouldEndEditing(value: (textView: UITextView) => boolean) {
    this.delegate.textViewShouldEndEditing = value;
  }
  set textViewDidBeginEditing(value: (textView: UITextView) => void) {
    this.delegate.textViewDidBeginEditing = value;
  }
  set textViewDidEndEditing(value: (textView: UITextView) => void) {
    this.delegate.textViewDidEndEditing = value;
  }
  set textViewShouldChangeTextInRangeReplacementText(value: (textView: UITextView, range: _NSRange, text: string) => boolean) {
    this.delegate.textViewShouldChangeTextInRangeReplacementText = value;
  }
  set textViewDidChange(value: (textView: UITextView) => void) {
    this.delegate.textViewDidChange = value;
  }
  set textViewDidChangeSelection(value: (textView: UITextView) => void) {
    this.delegate.textViewDidChangeSelection = value;
  }
  set textViewEditMenuForTextInRangeSuggestedActions(value: (textView: UITextView, range: _NSRange, suggestedActions: NSArray<interop.Object> | Array<interop.Object>) => UIMenu) {
    this.delegate.textViewEditMenuForTextInRangeSuggestedActions = value;
  }
  set textViewWillPresentEditMenuWithAnimator(value: (textView: UITextView, animator: UIEditMenuInteractionAnimating) => void) {
    this.delegate.textViewWillPresentEditMenuWithAnimator = value;
  }
  set textViewWillDismissEditMenuWithAnimator(value: (textView: UITextView, animator: UIEditMenuInteractionAnimating) => void) {
    this.delegate.textViewWillDismissEditMenuWithAnimator = value;
  }
  set textViewPrimaryActionForTextItemDefaultAction(value: (textView: UITextView, textItem: UITextItem, defaultAction: UIAction) => UIAction) {
    this.delegate.textViewPrimaryActionForTextItemDefaultAction = value;
  }
  set textViewMenuConfigurationForTextItemDefaultMenu(value: (textView: UITextView, textItem: UITextItem, defaultMenu: UIMenu) => UITextItemMenuConfiguration) {
    this.delegate.textViewMenuConfigurationForTextItemDefaultMenu = value;
  }
  set textViewTextItemMenuWillDisplayForTextItemAnimator(value: (textView: UITextView, textItem: UITextItem, animator: UIContextMenuInteractionAnimating) => void) {
    this.delegate.textViewTextItemMenuWillDisplayForTextItemAnimator = value;
  }
  set textViewTextItemMenuWillEndForTextItemAnimator(value: (textView: UITextView, textItem: UITextItem, animator: UIContextMenuInteractionAnimating) => void) {
    this.delegate.textViewTextItemMenuWillEndForTextItemAnimator = value;
  }
  set textViewShouldInteractWithURLInRangeInteraction(value: (textView: UITextView, URL: NSURL, characterRange: _NSRange, interaction: interop.Enum<typeof UITextItemInteraction>) => boolean) {
    this.delegate.textViewShouldInteractWithURLInRangeInteraction = value;
  }
  set textViewShouldInteractWithTextAttachmentInRangeInteraction(value: (textView: UITextView, textAttachment: NSTextAttachment, characterRange: _NSRange, interaction: interop.Enum<typeof UITextItemInteraction>) => boolean) {
    this.delegate.textViewShouldInteractWithTextAttachmentInRangeInteraction = value;
  }
  set textViewShouldInteractWithURLInRange(value: (textView: UITextView, URL: NSURL, characterRange: _NSRange) => boolean) {
    this.delegate.textViewShouldInteractWithURLInRange = value;
  }
  set textViewShouldInteractWithTextAttachmentInRange(value: (textView: UITextView, textAttachment: NSTextAttachment, characterRange: _NSRange) => boolean) {
    this.delegate.textViewShouldInteractWithTextAttachmentInRange = value;
  }
  set selectionWillChange(value: (textInput: UITextInput | null) => void) {
    this.inputDelegate.selectionWillChange = value;
  }
  set selectionDidChange(value: (textInput: UITextInput | null) => void) {
    this.inputDelegate.selectionDidChange = value;
  }
  set textWillChange(value: (textInput: UITextInput | null) => void) {
    this.inputDelegate.textWillChange = value;
  }
  set textDidChange(value: (textInput: UITextInput | null) => void) {
    this.inputDelegate.textDidChange = value;
  }
}

export class HTMLUISheetPresentationControllerElement extends HTMLUIPresentationControllerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = UISheetPresentationController.new();
  get delegate(): UISheetPresentationControllerDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UISheetPresentationControllerDelegateImpl.new();
    }
    return this.nativeObject.delegate as UISheetPresentationControllerDelegateImpl;
  }

  get sourceView(): UIView { return this.nativeObject.sourceView; }
  set sourceView(value: UIView) { this.nativeObject.sourceView = value; }
  get prefersPageSizing(): boolean { return this.nativeObject.prefersPageSizing; }
  set prefersPageSizing(value: boolean) { this.nativeObject.prefersPageSizing = value; }
  get prefersEdgeAttachedInCompactHeight(): boolean { return this.nativeObject.prefersEdgeAttachedInCompactHeight; }
  set prefersEdgeAttachedInCompactHeight(value: boolean) { this.nativeObject.prefersEdgeAttachedInCompactHeight = value; }
  get widthFollowsPreferredContentSizeWhenEdgeAttached(): boolean { return this.nativeObject.widthFollowsPreferredContentSizeWhenEdgeAttached; }
  set widthFollowsPreferredContentSizeWhenEdgeAttached(value: boolean) { this.nativeObject.widthFollowsPreferredContentSizeWhenEdgeAttached = value; }
  get prefersGrabberVisible(): boolean { return this.nativeObject.prefersGrabberVisible; }
  set prefersGrabberVisible(value: boolean) { this.nativeObject.prefersGrabberVisible = value; }
  get preferredCornerRadius(): number { return this.nativeObject.preferredCornerRadius; }
  set preferredCornerRadius(value: number) { this.nativeObject.preferredCornerRadius = value; }
  get detents(): NSArray { return this.nativeObject.detents; }
  set detents(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.detents = value; }
  get selectedDetentIdentifier(): string { return this.nativeObject.selectedDetentIdentifier; }
  set selectedDetentIdentifier(value: string) { this.nativeObject.selectedDetentIdentifier = value; }
  get largestUndimmedDetentIdentifier(): string { return this.nativeObject.largestUndimmedDetentIdentifier; }
  set largestUndimmedDetentIdentifier(value: string) { this.nativeObject.largestUndimmedDetentIdentifier = value; }
  get prefersScrollingExpandsWhenScrolledToEdge(): boolean { return this.nativeObject.prefersScrollingExpandsWhenScrolledToEdge; }
  set prefersScrollingExpandsWhenScrolledToEdge(value: boolean) { this.nativeObject.prefersScrollingExpandsWhenScrolledToEdge = value; }

  set sheetPresentationControllerDidChangeSelectedDetentIdentifier(value: (sheetPresentationController: UISheetPresentationController) => void) {
    this.delegate.sheetPresentationControllerDidChangeSelectedDetentIdentifier = value;
  }
}

export class HTMLUIPointerHighlightEffectElement extends HTMLUIPointerEffectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPointerHighlightEffect.new();

}

export class HTMLUICalendarViewElement extends HTMLUIViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICalendarView.new();
  get delegate(): UICalendarViewDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UICalendarViewDelegateImpl.new();
    }
    return this.nativeObject.delegate as UICalendarViewDelegateImpl;
  }

  get selectionBehavior(): UICalendarSelection { return this.nativeObject.selectionBehavior; }
  set selectionBehavior(value: UICalendarSelection) { this.nativeObject.selectionBehavior = value; }
  get locale(): NSLocale { return this.nativeObject.locale; }
  set locale(value: NSLocale) { this.nativeObject.locale = value; }
  get calendar(): NSCalendar { return this.nativeObject.calendar; }
  set calendar(value: NSCalendar) { this.nativeObject.calendar = value; }
  get timeZone(): NSTimeZone { return this.nativeObject.timeZone; }
  set timeZone(value: NSTimeZone) { this.nativeObject.timeZone = value; }
  get fontDesign(): string { return this.nativeObject.fontDesign; }
  set fontDesign(value: string) { this.nativeObject.fontDesign = value; }
  get availableDateRange(): NSDateInterval { return this.nativeObject.availableDateRange; }
  set availableDateRange(value: NSDateInterval) { this.nativeObject.availableDateRange = value; }
  get visibleDateComponents(): NSDateComponents { return this.nativeObject.visibleDateComponents; }
  set visibleDateComponents(value: NSDateComponents) { this.nativeObject.visibleDateComponents = value; }
  get wantsDateDecorations(): boolean { return this.nativeObject.wantsDateDecorations; }
  set wantsDateDecorations(value: boolean) { this.nativeObject.wantsDateDecorations = value; }

  set calendarViewDecorationForDateComponents(value: (calendarView: UICalendarView, dateComponents: NSDateComponents) => UICalendarViewDecoration) {
    this.delegate.calendarViewDecorationForDateComponents = value;
  }
  set calendarViewDidChangeVisibleDateComponentsFrom(value: (calendarView: UICalendarView, previousDateComponents: NSDateComponents) => void) {
    this.delegate.calendarViewDidChangeVisibleDateComponentsFrom = value;
  }
}

export class HTMLUIPopoverPresentationControllerElement extends HTMLUIPresentationControllerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = UIPopoverPresentationController.new();
  get delegate(): UIPopoverPresentationControllerDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UIPopoverPresentationControllerDelegateImpl.new();
    }
    return this.nativeObject.delegate as UIPopoverPresentationControllerDelegateImpl;
  }

  get permittedArrowDirections(): interop.Enum<typeof UIPopoverArrowDirection> { return this.nativeObject.permittedArrowDirections; }
  set permittedArrowDirections(value: interop.Enum<typeof UIPopoverArrowDirection>) { this.nativeObject.permittedArrowDirections = value; }
  get sourceView(): UIView { return this.nativeObject.sourceView; }
  set sourceView(value: UIView) { this.nativeObject.sourceView = value; }
  get sourceRect(): CGRect { return this.nativeObject.sourceRect; }
  set sourceRect(value: CGRect) { this.nativeObject.sourceRect = value; }
  get canOverlapSourceViewRect(): boolean { return this.nativeObject.canOverlapSourceViewRect; }
  set canOverlapSourceViewRect(value: boolean) { this.nativeObject.canOverlapSourceViewRect = value; }
  get sourceItem(): UIPopoverPresentationControllerSourceItem { return this.nativeObject.sourceItem; }
  set sourceItem(value: UIPopoverPresentationControllerSourceItem) { this.nativeObject.sourceItem = value; }
  get barButtonItem(): UIBarButtonItem { return this.nativeObject.barButtonItem; }
  set barButtonItem(value: UIBarButtonItem) { this.nativeObject.barButtonItem = value; }
  get arrowDirection(): interop.Enum<typeof UIPopoverArrowDirection> { return this.nativeObject.arrowDirection; }
  get passthroughViews(): NSArray { return this.nativeObject.passthroughViews; }
  set passthroughViews(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.passthroughViews = value; }
  get backgroundColor(): UIColor { return this.nativeObject.backgroundColor; }
  set backgroundColor(value: UIColor) { this.nativeObject.backgroundColor = value; }
  get popoverLayoutMargins(): UIEdgeInsets { return this.nativeObject.popoverLayoutMargins; }
  set popoverLayoutMargins(value: UIEdgeInsets) { this.nativeObject.popoverLayoutMargins = value; }
  get popoverBackgroundViewClass(): UIPopoverBackgroundViewMethods { return this.nativeObject.popoverBackgroundViewClass; }
  set popoverBackgroundViewClass(value: UIPopoverBackgroundViewMethods) { this.nativeObject.popoverBackgroundViewClass = value; }
  get adaptiveSheetPresentationController(): UISheetPresentationController { return this.nativeObject.adaptiveSheetPresentationController; }

  set prepareForPopoverPresentation(value: (popoverPresentationController: UIPopoverPresentationController) => void) {
    this.delegate.prepareForPopoverPresentation = value;
  }
  set popoverPresentationControllerShouldDismissPopover(value: (popoverPresentationController: UIPopoverPresentationController) => boolean) {
    this.delegate.popoverPresentationControllerShouldDismissPopover = value;
  }
  set popoverPresentationControllerDidDismissPopover(value: (popoverPresentationController: UIPopoverPresentationController) => void) {
    this.delegate.popoverPresentationControllerDidDismissPopover = value;
  }
  set popoverPresentationControllerWillRepositionPopoverToRectInView(value: (popoverPresentationController: UIPopoverPresentationController, rect: interop.PointerConvertible, view: interop.PointerConvertible) => void) {
    this.delegate.popoverPresentationControllerWillRepositionPopoverToRectInView = value;
  }
}

export class HTMLUIProgressViewElement extends HTMLUIViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIProgressView.new();

  get progressViewStyle(): interop.Enum<typeof UIProgressViewStyle> { return this.nativeObject.progressViewStyle; }
  set progressViewStyle(value: interop.Enum<typeof UIProgressViewStyle>) { this.nativeObject.progressViewStyle = value; }
  get progress(): number { return this.nativeObject.progress; }
  set progress(value: number) { this.nativeObject.progress = value; }
  get progressTintColor(): UIColor { return this.nativeObject.progressTintColor; }
  set progressTintColor(value: UIColor) { this.nativeObject.progressTintColor = value; }
  get trackTintColor(): UIColor { return this.nativeObject.trackTintColor; }
  set trackTintColor(value: UIColor) { this.nativeObject.trackTintColor = value; }
  get progressImage(): UIImage { return this.nativeObject.progressImage; }
  set progressImage(value: UIImage) { this.nativeObject.progressImage = value; }
  get trackImage(): UIImage { return this.nativeObject.trackImage; }
  set trackImage(value: UIImage) { this.nativeObject.trackImage = value; }
  get observedProgress(): NSProgress { return this.nativeObject.observedProgress; }
  set observedProgress(value: NSProgress) { this.nativeObject.observedProgress = value; }
}

export class HTMLUIImagePickerControllerElement extends HTMLUINavigationControllerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = UIImagePickerController.new();
  get delegate(): UIImagePickerControllerDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UIImagePickerControllerDelegateImpl.new();
    }
    return this.nativeObject.delegate as UIImagePickerControllerDelegateImpl;
  }

  get sourceType(): interop.Enum<typeof UIImagePickerControllerSourceType> { return this.nativeObject.sourceType; }
  set sourceType(value: interop.Enum<typeof UIImagePickerControllerSourceType>) { this.nativeObject.sourceType = value; }
  get mediaTypes(): NSArray { return this.nativeObject.mediaTypes; }
  set mediaTypes(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.mediaTypes = value; }
  get allowsEditing(): boolean { return this.nativeObject.allowsEditing; }
  set allowsEditing(value: boolean) { this.nativeObject.allowsEditing = value; }
  get allowsImageEditing(): boolean { return this.nativeObject.allowsImageEditing; }
  set allowsImageEditing(value: boolean) { this.nativeObject.allowsImageEditing = value; }
  get imageExportPreset(): interop.Enum<typeof UIImagePickerControllerImageURLExportPreset> { return this.nativeObject.imageExportPreset; }
  set imageExportPreset(value: interop.Enum<typeof UIImagePickerControllerImageURLExportPreset>) { this.nativeObject.imageExportPreset = value; }
  get videoMaximumDuration(): number { return this.nativeObject.videoMaximumDuration; }
  set videoMaximumDuration(value: number) { this.nativeObject.videoMaximumDuration = value; }
  get videoQuality(): interop.Enum<typeof UIImagePickerControllerQualityType> { return this.nativeObject.videoQuality; }
  set videoQuality(value: interop.Enum<typeof UIImagePickerControllerQualityType>) { this.nativeObject.videoQuality = value; }
  get videoExportPreset(): string { return this.nativeObject.videoExportPreset; }
  set videoExportPreset(value: string) { this.nativeObject.videoExportPreset = value; }
  get showsCameraControls(): boolean { return this.nativeObject.showsCameraControls; }
  set showsCameraControls(value: boolean) { this.nativeObject.showsCameraControls = value; }
  get cameraOverlayView(): UIView { return this.nativeObject.cameraOverlayView; }
  set cameraOverlayView(value: UIView) { this.nativeObject.cameraOverlayView = value; }
  get cameraViewTransform(): CGAffineTransform { return this.nativeObject.cameraViewTransform; }
  set cameraViewTransform(value: CGAffineTransform) { this.nativeObject.cameraViewTransform = value; }
  get cameraCaptureMode(): interop.Enum<typeof UIImagePickerControllerCameraCaptureMode> { return this.nativeObject.cameraCaptureMode; }
  set cameraCaptureMode(value: interop.Enum<typeof UIImagePickerControllerCameraCaptureMode>) { this.nativeObject.cameraCaptureMode = value; }
  get cameraDevice(): interop.Enum<typeof UIImagePickerControllerCameraDevice> { return this.nativeObject.cameraDevice; }
  set cameraDevice(value: interop.Enum<typeof UIImagePickerControllerCameraDevice>) { this.nativeObject.cameraDevice = value; }
  get cameraFlashMode(): interop.Enum<typeof UIImagePickerControllerCameraFlashMode> { return this.nativeObject.cameraFlashMode; }
  set cameraFlashMode(value: interop.Enum<typeof UIImagePickerControllerCameraFlashMode>) { this.nativeObject.cameraFlashMode = value; }

  set imagePickerControllerDidFinishPickingImageEditingInfo(value: (picker: UIImagePickerController, image: UIImage, editingInfo: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null) => void) {
    this.delegate.imagePickerControllerDidFinishPickingImageEditingInfo = value;
  }
  set imagePickerControllerDidFinishPickingMediaWithInfo(value: (picker: UIImagePickerController, info: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) => void) {
    this.delegate.imagePickerControllerDidFinishPickingMediaWithInfo = value;
  }
  set imagePickerControllerDidCancel(value: (picker: UIImagePickerController) => void) {
    this.delegate.imagePickerControllerDidCancel = value;
  }
}

export class HTMLUIKeyboardLayoutGuideElement extends HTMLUITrackingLayoutGuideElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIKeyboardLayoutGuide.new();

  get followsUndockedKeyboard(): boolean { return this.nativeObject.followsUndockedKeyboard; }
  set followsUndockedKeyboard(value: boolean) { this.nativeObject.followsUndockedKeyboard = value; }
  get usesBottomSafeArea(): boolean { return this.nativeObject.usesBottomSafeArea; }
  set usesBottomSafeArea(value: boolean) { this.nativeObject.usesBottomSafeArea = value; }
  get keyboardDismissPadding(): number { return this.nativeObject.keyboardDismissPadding; }
  set keyboardDismissPadding(value: number) { this.nativeObject.keyboardDismissPadding = value; }
}

export class HTMLUIInterpolatingMotionEffectElement extends HTMLUIMotionEffectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIInterpolatingMotionEffect.new();

  get keyPath(): string { return this.nativeObject.keyPath; }
  get type(): interop.Enum<typeof UIInterpolatingMotionEffectType> { return this.nativeObject.type; }
  get minimumRelativeValue(): interop.Object { return this.nativeObject.minimumRelativeValue; }
  set minimumRelativeValue(value: interop.Object) { this.nativeObject.minimumRelativeValue = value; }
  get maximumRelativeValue(): interop.Object { return this.nativeObject.maximumRelativeValue; }
  set maximumRelativeValue(value: interop.Object) { this.nativeObject.maximumRelativeValue = value; }
}

export class HTMLNSTextListElementElement extends HTMLNSTextParagraphElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSTextListElement.new();

  get textList(): NSTextList { return this.nativeObject.textList; }
  get contents(): NSAttributedString { return this.nativeObject.contents; }
  get markerAttributes(): NSDictionary { return this.nativeObject.markerAttributes; }
  get attributedString(): NSAttributedString { return this.nativeObject.attributedString; }
  get childElements(): NSArray { return this.nativeObject.childElements; }
}

export class HTMLUICollectionViewFlowLayoutInvalidationContextElement extends HTMLUICollectionViewLayoutInvalidationContextElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICollectionViewFlowLayoutInvalidationContext.new();

  get invalidateFlowLayoutDelegateMetrics(): boolean { return this.nativeObject.invalidateFlowLayoutDelegateMetrics; }
  set invalidateFlowLayoutDelegateMetrics(value: boolean) { this.nativeObject.invalidateFlowLayoutDelegateMetrics = value; }
  get invalidateFlowLayoutAttributes(): boolean { return this.nativeObject.invalidateFlowLayoutAttributes; }
  set invalidateFlowLayoutAttributes(value: boolean) { this.nativeObject.invalidateFlowLayoutAttributes = value; }
}

export class HTMLUITableViewElement extends HTMLUIScrollViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = UITableView.new();
  get delegate(): UITableViewDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UITableViewDelegateImpl.new();
    }
    return this.nativeObject.delegate as UITableViewDelegateImpl;
  }
  get dragDelegate(): UITableViewDragDelegateImpl {
    if(!this.nativeObject.dragDelegate){
      this.nativeObject.dragDelegate = UITableViewDragDelegateImpl.new();
    }
    return this.nativeObject.dragDelegate as UITableViewDragDelegateImpl;
  }
  get dropDelegate(): UITableViewDropDelegateImpl {
    if(!this.nativeObject.dropDelegate){
      this.nativeObject.dropDelegate = UITableViewDropDelegateImpl.new();
    }
    return this.nativeObject.dropDelegate as UITableViewDropDelegateImpl;
  }

  get dataSource(): UITableViewDataSource { return this.nativeObject.dataSource; }
  set dataSource(value: UITableViewDataSource) { this.nativeObject.dataSource = value; }
  get prefetchDataSource(): UITableViewDataSourcePrefetching { return this.nativeObject.prefetchDataSource; }
  set prefetchDataSource(value: UITableViewDataSourcePrefetching) { this.nativeObject.prefetchDataSource = value; }
  get isPrefetchingEnabled(): boolean { return this.nativeObject.isPrefetchingEnabled; }
  set isPrefetchingEnabled(value: boolean) { this.nativeObject.isPrefetchingEnabled = value; }
  get rowHeight(): number { return this.nativeObject.rowHeight; }
  set rowHeight(value: number) { this.nativeObject.rowHeight = value; }
  get sectionHeaderHeight(): number { return this.nativeObject.sectionHeaderHeight; }
  set sectionHeaderHeight(value: number) { this.nativeObject.sectionHeaderHeight = value; }
  get sectionFooterHeight(): number { return this.nativeObject.sectionFooterHeight; }
  set sectionFooterHeight(value: number) { this.nativeObject.sectionFooterHeight = value; }
  get estimatedRowHeight(): number { return this.nativeObject.estimatedRowHeight; }
  set estimatedRowHeight(value: number) { this.nativeObject.estimatedRowHeight = value; }
  get estimatedSectionHeaderHeight(): number { return this.nativeObject.estimatedSectionHeaderHeight; }
  set estimatedSectionHeaderHeight(value: number) { this.nativeObject.estimatedSectionHeaderHeight = value; }
  get estimatedSectionFooterHeight(): number { return this.nativeObject.estimatedSectionFooterHeight; }
  set estimatedSectionFooterHeight(value: number) { this.nativeObject.estimatedSectionFooterHeight = value; }
  get fillerRowHeight(): number { return this.nativeObject.fillerRowHeight; }
  set fillerRowHeight(value: number) { this.nativeObject.fillerRowHeight = value; }
  get sectionHeaderTopPadding(): number { return this.nativeObject.sectionHeaderTopPadding; }
  set sectionHeaderTopPadding(value: number) { this.nativeObject.sectionHeaderTopPadding = value; }
  get separatorInset(): UIEdgeInsets { return this.nativeObject.separatorInset; }
  set separatorInset(value: UIEdgeInsets) { this.nativeObject.separatorInset = value; }
  get separatorInsetReference(): interop.Enum<typeof UITableViewSeparatorInsetReference> { return this.nativeObject.separatorInsetReference; }
  set separatorInsetReference(value: interop.Enum<typeof UITableViewSeparatorInsetReference>) { this.nativeObject.separatorInsetReference = value; }
  get selfSizingInvalidation(): interop.Enum<typeof UITableViewSelfSizingInvalidation> { return this.nativeObject.selfSizingInvalidation; }
  set selfSizingInvalidation(value: interop.Enum<typeof UITableViewSelfSizingInvalidation>) { this.nativeObject.selfSizingInvalidation = value; }
  get backgroundView(): UIView { return this.nativeObject.backgroundView; }
  set backgroundView(value: UIView) { this.nativeObject.backgroundView = value; }
  get contextMenuInteraction(): UIContextMenuInteraction { return this.nativeObject.contextMenuInteraction; }
  get numberOfSections(): number { return this.nativeObject.numberOfSections; }
  get visibleCells(): NSArray { return this.nativeObject.visibleCells; }
  get indexPathsForVisibleRows(): NSArray { return this.nativeObject.indexPathsForVisibleRows; }
  get hasUncommittedUpdates(): boolean { return this.nativeObject.hasUncommittedUpdates; }
  get isEditing(): boolean { return this.nativeObject.isEditing; }
  set isEditing(value: boolean) { this.nativeObject.isEditing = value; }
  get allowsSelection(): boolean { return this.nativeObject.allowsSelection; }
  set allowsSelection(value: boolean) { this.nativeObject.allowsSelection = value; }
  get allowsSelectionDuringEditing(): boolean { return this.nativeObject.allowsSelectionDuringEditing; }
  set allowsSelectionDuringEditing(value: boolean) { this.nativeObject.allowsSelectionDuringEditing = value; }
  get allowsMultipleSelection(): boolean { return this.nativeObject.allowsMultipleSelection; }
  set allowsMultipleSelection(value: boolean) { this.nativeObject.allowsMultipleSelection = value; }
  get allowsMultipleSelectionDuringEditing(): boolean { return this.nativeObject.allowsMultipleSelectionDuringEditing; }
  set allowsMultipleSelectionDuringEditing(value: boolean) { this.nativeObject.allowsMultipleSelectionDuringEditing = value; }
  get indexPathForSelectedRow(): NSIndexPath { return this.nativeObject.indexPathForSelectedRow; }
  get indexPathsForSelectedRows(): NSArray { return this.nativeObject.indexPathsForSelectedRows; }
  get sectionIndexMinimumDisplayRowCount(): number { return this.nativeObject.sectionIndexMinimumDisplayRowCount; }
  set sectionIndexMinimumDisplayRowCount(value: number) { this.nativeObject.sectionIndexMinimumDisplayRowCount = value; }
  get sectionIndexColor(): UIColor { return this.nativeObject.sectionIndexColor; }
  set sectionIndexColor(value: UIColor) { this.nativeObject.sectionIndexColor = value; }
  get sectionIndexBackgroundColor(): UIColor { return this.nativeObject.sectionIndexBackgroundColor; }
  set sectionIndexBackgroundColor(value: UIColor) { this.nativeObject.sectionIndexBackgroundColor = value; }
  get sectionIndexTrackingBackgroundColor(): UIColor { return this.nativeObject.sectionIndexTrackingBackgroundColor; }
  set sectionIndexTrackingBackgroundColor(value: UIColor) { this.nativeObject.sectionIndexTrackingBackgroundColor = value; }
  get separatorStyle(): interop.Enum<typeof UITableViewCellSeparatorStyle> { return this.nativeObject.separatorStyle; }
  set separatorStyle(value: interop.Enum<typeof UITableViewCellSeparatorStyle>) { this.nativeObject.separatorStyle = value; }
  get separatorColor(): UIColor { return this.nativeObject.separatorColor; }
  set separatorColor(value: UIColor) { this.nativeObject.separatorColor = value; }
  get separatorEffect(): UIVisualEffect { return this.nativeObject.separatorEffect; }
  set separatorEffect(value: UIVisualEffect) { this.nativeObject.separatorEffect = value; }
  get cellLayoutMarginsFollowReadableWidth(): boolean { return this.nativeObject.cellLayoutMarginsFollowReadableWidth; }
  set cellLayoutMarginsFollowReadableWidth(value: boolean) { this.nativeObject.cellLayoutMarginsFollowReadableWidth = value; }
  get insetsContentViewsToSafeArea(): boolean { return this.nativeObject.insetsContentViewsToSafeArea; }
  set insetsContentViewsToSafeArea(value: boolean) { this.nativeObject.insetsContentViewsToSafeArea = value; }
  get tableHeaderView(): UIView { return this.nativeObject.tableHeaderView; }
  set tableHeaderView(value: UIView) { this.nativeObject.tableHeaderView = value; }
  get tableFooterView(): UIView { return this.nativeObject.tableFooterView; }
  set tableFooterView(value: UIView) { this.nativeObject.tableFooterView = value; }
  get remembersLastFocusedIndexPath(): boolean { return this.nativeObject.remembersLastFocusedIndexPath; }
  set remembersLastFocusedIndexPath(value: boolean) { this.nativeObject.remembersLastFocusedIndexPath = value; }
  get selectionFollowsFocus(): boolean { return this.nativeObject.selectionFollowsFocus; }
  set selectionFollowsFocus(value: boolean) { this.nativeObject.selectionFollowsFocus = value; }
  get allowsFocus(): boolean { return this.nativeObject.allowsFocus; }
  set allowsFocus(value: boolean) { this.nativeObject.allowsFocus = value; }
  get allowsFocusDuringEditing(): boolean { return this.nativeObject.allowsFocusDuringEditing; }
  set allowsFocusDuringEditing(value: boolean) { this.nativeObject.allowsFocusDuringEditing = value; }
  get dragInteractionEnabled(): boolean { return this.nativeObject.dragInteractionEnabled; }
  set dragInteractionEnabled(value: boolean) { this.nativeObject.dragInteractionEnabled = value; }
  get hasActiveDrag(): boolean { return this.nativeObject.hasActiveDrag; }
  get hasActiveDrop(): boolean { return this.nativeObject.hasActiveDrop; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }

  set tableViewWillDisplayCellForRowAtIndexPath(value: (tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath) => void) {
    this.delegate.tableViewWillDisplayCellForRowAtIndexPath = value;
  }
  set tableViewWillDisplayHeaderViewForSection(value: (tableView: UITableView, view: UIView, section: number) => void) {
    this.delegate.tableViewWillDisplayHeaderViewForSection = value;
  }
  set tableViewWillDisplayFooterViewForSection(value: (tableView: UITableView, view: UIView, section: number) => void) {
    this.delegate.tableViewWillDisplayFooterViewForSection = value;
  }
  set tableViewDidEndDisplayingCellForRowAtIndexPath(value: (tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath) => void) {
    this.delegate.tableViewDidEndDisplayingCellForRowAtIndexPath = value;
  }
  set tableViewDidEndDisplayingHeaderViewForSection(value: (tableView: UITableView, view: UIView, section: number) => void) {
    this.delegate.tableViewDidEndDisplayingHeaderViewForSection = value;
  }
  set tableViewDidEndDisplayingFooterViewForSection(value: (tableView: UITableView, view: UIView, section: number) => void) {
    this.delegate.tableViewDidEndDisplayingFooterViewForSection = value;
  }
  set tableViewHeightForRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => number) {
    this.delegate.tableViewHeightForRowAtIndexPath = value;
  }
  set tableViewHeightForHeaderInSection(value: (tableView: UITableView, section: number) => number) {
    this.delegate.tableViewHeightForHeaderInSection = value;
  }
  set tableViewHeightForFooterInSection(value: (tableView: UITableView, section: number) => number) {
    this.delegate.tableViewHeightForFooterInSection = value;
  }
  set tableViewEstimatedHeightForRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => number) {
    this.delegate.tableViewEstimatedHeightForRowAtIndexPath = value;
  }
  set tableViewEstimatedHeightForHeaderInSection(value: (tableView: UITableView, section: number) => number) {
    this.delegate.tableViewEstimatedHeightForHeaderInSection = value;
  }
  set tableViewEstimatedHeightForFooterInSection(value: (tableView: UITableView, section: number) => number) {
    this.delegate.tableViewEstimatedHeightForFooterInSection = value;
  }
  set tableViewViewForHeaderInSection(value: (tableView: UITableView, section: number) => UIView) {
    this.delegate.tableViewViewForHeaderInSection = value;
  }
  set tableViewViewForFooterInSection(value: (tableView: UITableView, section: number) => UIView) {
    this.delegate.tableViewViewForFooterInSection = value;
  }
  set tableViewAccessoryTypeForRowWithIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => interop.Enum<typeof UITableViewCellAccessoryType>) {
    this.delegate.tableViewAccessoryTypeForRowWithIndexPath = value;
  }
  set tableViewAccessoryButtonTappedForRowWithIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => void) {
    this.delegate.tableViewAccessoryButtonTappedForRowWithIndexPath = value;
  }
  set tableViewShouldHighlightRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => boolean) {
    this.delegate.tableViewShouldHighlightRowAtIndexPath = value;
  }
  set tableViewDidHighlightRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => void) {
    this.delegate.tableViewDidHighlightRowAtIndexPath = value;
  }
  set tableViewDidUnhighlightRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => void) {
    this.delegate.tableViewDidUnhighlightRowAtIndexPath = value;
  }
  set tableViewWillSelectRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => NSIndexPath) {
    this.delegate.tableViewWillSelectRowAtIndexPath = value;
  }
  set tableViewWillDeselectRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => NSIndexPath) {
    this.delegate.tableViewWillDeselectRowAtIndexPath = value;
  }
  set tableViewDidSelectRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => void) {
    this.delegate.tableViewDidSelectRowAtIndexPath = value;
  }
  set tableViewDidDeselectRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => void) {
    this.delegate.tableViewDidDeselectRowAtIndexPath = value;
  }
  set tableViewCanPerformPrimaryActionForRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => boolean) {
    this.delegate.tableViewCanPerformPrimaryActionForRowAtIndexPath = value;
  }
  set tableViewPerformPrimaryActionForRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => void) {
    this.delegate.tableViewPerformPrimaryActionForRowAtIndexPath = value;
  }
  set tableViewEditingStyleForRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => interop.Enum<typeof UITableViewCellEditingStyle>) {
    this.delegate.tableViewEditingStyleForRowAtIndexPath = value;
  }
  set tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => string) {
    this.delegate.tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath = value;
  }
  set tableViewEditActionsForRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => NSArray) {
    this.delegate.tableViewEditActionsForRowAtIndexPath = value;
  }
  set tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => UISwipeActionsConfiguration) {
    this.delegate.tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath = value;
  }
  set tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => UISwipeActionsConfiguration) {
    this.delegate.tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath = value;
  }
  set tableViewShouldIndentWhileEditingRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => boolean) {
    this.delegate.tableViewShouldIndentWhileEditingRowAtIndexPath = value;
  }
  set tableViewWillBeginEditingRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => void) {
    this.delegate.tableViewWillBeginEditingRowAtIndexPath = value;
  }
  set tableViewDidEndEditingRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath | null) => void) {
    this.delegate.tableViewDidEndEditingRowAtIndexPath = value;
  }
  set tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath(value: (tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath) => NSIndexPath) {
    this.delegate.tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath = value;
  }
  set tableViewIndentationLevelForRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => number) {
    this.delegate.tableViewIndentationLevelForRowAtIndexPath = value;
  }
  set tableViewShouldShowMenuForRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => boolean) {
    this.delegate.tableViewShouldShowMenuForRowAtIndexPath = value;
  }
  set tableViewCanPerformActionForRowAtIndexPathWithSender(value: (tableView: UITableView, action: string, indexPath: NSIndexPath, sender: interop.Object | null) => boolean) {
    this.delegate.tableViewCanPerformActionForRowAtIndexPathWithSender = value;
  }
  set tableViewPerformActionForRowAtIndexPathWithSender(value: (tableView: UITableView, action: string, indexPath: NSIndexPath, sender: interop.Object | null) => void) {
    this.delegate.tableViewPerformActionForRowAtIndexPathWithSender = value;
  }
  set tableViewCanFocusRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => boolean) {
    this.delegate.tableViewCanFocusRowAtIndexPath = value;
  }
  set tableViewShouldUpdateFocusInContext(value: (tableView: UITableView, context: UITableViewFocusUpdateContext) => boolean) {
    this.delegate.tableViewShouldUpdateFocusInContext = value;
  }
  set tableViewDidUpdateFocusInContextWithAnimationCoordinator(value: (tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator) => void) {
    this.delegate.tableViewDidUpdateFocusInContextWithAnimationCoordinator = value;
  }
  set indexPathForPreferredFocusedViewInTableView(value: (tableView: UITableView) => NSIndexPath) {
    this.delegate.indexPathForPreferredFocusedViewInTableView = value;
  }
  set tableViewSelectionFollowsFocusForRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => boolean) {
    this.delegate.tableViewSelectionFollowsFocusForRowAtIndexPath = value;
  }
  set tableViewShouldSpringLoadRowAtIndexPathWithContext(value: (tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext) => boolean) {
    this.delegate.tableViewShouldSpringLoadRowAtIndexPathWithContext = value;
  }
  set tableViewShouldBeginMultipleSelectionInteractionAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => boolean) {
    this.delegate.tableViewShouldBeginMultipleSelectionInteractionAtIndexPath = value;
  }
  set tableViewDidBeginMultipleSelectionInteractionAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => void) {
    this.delegate.tableViewDidBeginMultipleSelectionInteractionAtIndexPath = value;
  }
  set tableViewDidEndMultipleSelectionInteraction(value: (tableView: UITableView) => void) {
    this.delegate.tableViewDidEndMultipleSelectionInteraction = value;
  }
  set tableViewContextMenuConfigurationForRowAtIndexPathPoint(value: (tableView: UITableView, indexPath: NSIndexPath, point: CGPoint) => UIContextMenuConfiguration) {
    this.delegate.tableViewContextMenuConfigurationForRowAtIndexPathPoint = value;
  }
  set tableViewPreviewForHighlightingContextMenuWithConfiguration(value: (tableView: UITableView, configuration: UIContextMenuConfiguration) => UITargetedPreview) {
    this.delegate.tableViewPreviewForHighlightingContextMenuWithConfiguration = value;
  }
  set tableViewPreviewForDismissingContextMenuWithConfiguration(value: (tableView: UITableView, configuration: UIContextMenuConfiguration) => UITargetedPreview) {
    this.delegate.tableViewPreviewForDismissingContextMenuWithConfiguration = value;
  }
  set tableViewWillPerformPreviewActionForMenuWithConfigurationAnimator(value: (tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionCommitAnimating) => void) {
    this.delegate.tableViewWillPerformPreviewActionForMenuWithConfigurationAnimator = value;
  }
  set tableViewWillDisplayContextMenuWithConfigurationAnimator(value: (tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating | null) => void) {
    this.delegate.tableViewWillDisplayContextMenuWithConfigurationAnimator = value;
  }
  set tableViewWillEndContextMenuInteractionWithConfigurationAnimator(value: (tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating | null) => void) {
    this.delegate.tableViewWillEndContextMenuInteractionWithConfigurationAnimator = value;
  }
  set tableViewItemsForBeginningDragSessionAtIndexPath(value: (tableView: UITableView, session: UIDragSession, indexPath: NSIndexPath) => NSArray) {
    this.dragDelegate.tableViewItemsForBeginningDragSessionAtIndexPath = value;
  }
  set tableViewItemsForAddingToDragSessionAtIndexPathPoint(value: (tableView: UITableView, session: UIDragSession, indexPath: NSIndexPath, point: CGPoint) => NSArray) {
    this.dragDelegate.tableViewItemsForAddingToDragSessionAtIndexPathPoint = value;
  }
  set tableViewDragPreviewParametersForRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => UIDragPreviewParameters) {
    this.dragDelegate.tableViewDragPreviewParametersForRowAtIndexPath = value;
  }
  set tableViewDragSessionWillBegin(value: (tableView: UITableView, session: UIDragSession) => void) {
    this.dragDelegate.tableViewDragSessionWillBegin = value;
  }
  set tableViewDragSessionDidEnd(value: (tableView: UITableView, session: UIDragSession) => void) {
    this.dragDelegate.tableViewDragSessionDidEnd = value;
  }
  set tableViewDragSessionAllowsMoveOperation(value: (tableView: UITableView, session: UIDragSession) => boolean) {
    this.dragDelegate.tableViewDragSessionAllowsMoveOperation = value;
  }
  set tableViewDragSessionIsRestrictedToDraggingApplication(value: (tableView: UITableView, session: UIDragSession) => boolean) {
    this.dragDelegate.tableViewDragSessionIsRestrictedToDraggingApplication = value;
  }
  set tableViewPerformDropWithCoordinator(value: (tableView: UITableView, coordinator: UITableViewDropCoordinator) => void) {
    this.dropDelegate.tableViewPerformDropWithCoordinator = value;
  }
  set tableViewCanHandleDropSession(value: (tableView: UITableView, session: UIDropSession) => boolean) {
    this.dropDelegate.tableViewCanHandleDropSession = value;
  }
  set tableViewDropSessionDidEnter(value: (tableView: UITableView, session: UIDropSession) => void) {
    this.dropDelegate.tableViewDropSessionDidEnter = value;
  }
  set tableViewDropSessionDidUpdateWithDestinationIndexPath(value: (tableView: UITableView, session: UIDropSession, destinationIndexPath: NSIndexPath | null) => UITableViewDropProposal) {
    this.dropDelegate.tableViewDropSessionDidUpdateWithDestinationIndexPath = value;
  }
  set tableViewDropSessionDidExit(value: (tableView: UITableView, session: UIDropSession) => void) {
    this.dropDelegate.tableViewDropSessionDidExit = value;
  }
  set tableViewDropSessionDidEnd(value: (tableView: UITableView, session: UIDropSession) => void) {
    this.dropDelegate.tableViewDropSessionDidEnd = value;
  }
  set tableViewDropPreviewParametersForRowAtIndexPath(value: (tableView: UITableView, indexPath: NSIndexPath) => UIDragPreviewParameters) {
    this.dropDelegate.tableViewDropPreviewParametersForRowAtIndexPath = value;
  }
}

export class HTMLUIToolbarAppearanceElement extends HTMLUIBarAppearanceElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIToolbarAppearance.new();

  get buttonAppearance(): UIBarButtonItemAppearance { return this.nativeObject.buttonAppearance; }
  set buttonAppearance(value: UIBarButtonItemAppearance) { this.nativeObject.buttonAppearance = value; }
  get doneButtonAppearance(): UIBarButtonItemAppearance { return this.nativeObject.doneButtonAppearance; }
  set doneButtonAppearance(value: UIBarButtonItemAppearance) { this.nativeObject.doneButtonAppearance = value; }
}

export class HTMLUIRotationGestureRecognizerElement extends HTMLUIGestureRecognizerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIRotationGestureRecognizer.new();

  get rotation(): number { return this.nativeObject.rotation; }
  set rotation(value: number) { this.nativeObject.rotation = value; }
  get velocity(): number { return this.nativeObject.velocity; }
}

export class HTMLUISwitchElement extends HTMLUIControlElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UISwitch.new();

  get onTintColor(): UIColor { return this.nativeObject.onTintColor; }
  set onTintColor(value: UIColor) { this.nativeObject.onTintColor = value; }
  get thumbTintColor(): UIColor { return this.nativeObject.thumbTintColor; }
  set thumbTintColor(value: UIColor) { this.nativeObject.thumbTintColor = value; }
  get onImage(): UIImage { return this.nativeObject.onImage; }
  set onImage(value: UIImage) { this.nativeObject.onImage = value; }
  get offImage(): UIImage { return this.nativeObject.offImage; }
  set offImage(value: UIImage) { this.nativeObject.offImage = value; }
  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get preferredStyle(): interop.Enum<typeof UISwitchStyle> { return this.nativeObject.preferredStyle; }
  set preferredStyle(value: interop.Enum<typeof UISwitchStyle>) { this.nativeObject.preferredStyle = value; }
  get isOn(): boolean { return this.nativeObject.isOn; }
  set isOn(value: boolean) { this.nativeObject.isOn = value; }
}

export class HTMLUICollectionViewListCellElement extends HTMLUICollectionViewCellElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICollectionViewListCell.new();

  get indentationLevel(): number { return this.nativeObject.indentationLevel; }
  set indentationLevel(value: number) { this.nativeObject.indentationLevel = value; }
  get indentationWidth(): number { return this.nativeObject.indentationWidth; }
  set indentationWidth(value: number) { this.nativeObject.indentationWidth = value; }
  get indentsAccessories(): boolean { return this.nativeObject.indentsAccessories; }
  set indentsAccessories(value: boolean) { this.nativeObject.indentsAccessories = value; }
  get accessories(): NSArray { return this.nativeObject.accessories; }
  set accessories(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessories = value; }
  get separatorLayoutGuide(): UILayoutGuide { return this.nativeObject.separatorLayoutGuide; }
}

export class HTMLUIDocumentPickerViewControllerElement extends HTMLUIViewControllerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIDocumentPickerViewController.new();
  get delegate(): UIDocumentPickerDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UIDocumentPickerDelegateImpl.new();
    }
    return this.nativeObject.delegate as UIDocumentPickerDelegateImpl;
  }

  get documentPickerMode(): interop.Enum<typeof UIDocumentPickerMode> { return this.nativeObject.documentPickerMode; }
  get allowsMultipleSelection(): boolean { return this.nativeObject.allowsMultipleSelection; }
  set allowsMultipleSelection(value: boolean) { this.nativeObject.allowsMultipleSelection = value; }
  get shouldShowFileExtensions(): boolean { return this.nativeObject.shouldShowFileExtensions; }
  set shouldShowFileExtensions(value: boolean) { this.nativeObject.shouldShowFileExtensions = value; }
  get directoryURL(): NSURL { return this.nativeObject.directoryURL; }
  set directoryURL(value: NSURL) { this.nativeObject.directoryURL = value; }

  set documentPickerDidPickDocumentsAtURLs(value: (controller: UIDocumentPickerViewController, urls: NSArray<interop.Object> | Array<interop.Object>) => void) {
    this.delegate.documentPickerDidPickDocumentsAtURLs = value;
  }
  set documentPickerWasCancelled(value: (controller: UIDocumentPickerViewController) => void) {
    this.delegate.documentPickerWasCancelled = value;
  }
  set documentPickerDidPickDocumentAtURL(value: (controller: UIDocumentPickerViewController, url: NSURL) => void) {
    this.delegate.documentPickerDidPickDocumentAtURL = value;
  }
}

export class HTMLUIMutableUserNotificationCategoryElement extends HTMLUIUserNotificationCategoryElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = UIMutableUserNotificationCategory.new();

  get identifier(): string { return this.nativeObject.identifier; }
  set identifier(value: string) { this.nativeObject.identifier = value; }
}

export class HTMLUIRefreshControlElement extends HTMLUIControlElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIRefreshControl.new();

  get isRefreshing(): boolean { return this.nativeObject.isRefreshing; }
  get tintColor(): UIColor { return this.nativeObject.tintColor; }
  set tintColor(value: UIColor) { this.nativeObject.tintColor = value; }
  get attributedTitle(): NSAttributedString { return this.nativeObject.attributedTitle; }
  set attributedTitle(value: NSAttributedString) { this.nativeObject.attributedTitle = value; }
}

export class HTMLUIPrintInteractionControllerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPrintInteractionController.new();
  get delegate(): UIPrintInteractionControllerDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UIPrintInteractionControllerDelegateImpl.new();
    }
    return this.nativeObject.delegate as UIPrintInteractionControllerDelegateImpl;
  }

  get printInfo(): UIPrintInfo { return this.nativeObject.printInfo; }
  set printInfo(value: UIPrintInfo) { this.nativeObject.printInfo = value; }
  get showsPageRange(): boolean { return this.nativeObject.showsPageRange; }
  set showsPageRange(value: boolean) { this.nativeObject.showsPageRange = value; }
  get showsNumberOfCopies(): boolean { return this.nativeObject.showsNumberOfCopies; }
  set showsNumberOfCopies(value: boolean) { this.nativeObject.showsNumberOfCopies = value; }
  get showsPaperSelectionForLoadedPapers(): boolean { return this.nativeObject.showsPaperSelectionForLoadedPapers; }
  set showsPaperSelectionForLoadedPapers(value: boolean) { this.nativeObject.showsPaperSelectionForLoadedPapers = value; }
  get showsPaperOrientation(): boolean { return this.nativeObject.showsPaperOrientation; }
  set showsPaperOrientation(value: boolean) { this.nativeObject.showsPaperOrientation = value; }
  get printPaper(): UIPrintPaper { return this.nativeObject.printPaper; }
  get printPageRenderer(): UIPrintPageRenderer { return this.nativeObject.printPageRenderer; }
  set printPageRenderer(value: UIPrintPageRenderer) { this.nativeObject.printPageRenderer = value; }
  get printFormatter(): UIPrintFormatter { return this.nativeObject.printFormatter; }
  set printFormatter(value: UIPrintFormatter) { this.nativeObject.printFormatter = value; }
  get printingItem(): interop.Object { return this.nativeObject.printingItem; }
  set printingItem(value: interop.Object) { this.nativeObject.printingItem = value; }
  get printingItems(): NSArray { return this.nativeObject.printingItems; }
  set printingItems(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.printingItems = value; }

  set printInteractionControllerParentViewController(value: (printInteractionController: UIPrintInteractionController) => UIViewController | null) {
    this.delegate.printInteractionControllerParentViewController = value;
  }
  set printInteractionControllerChoosePaper(value: (printInteractionController: UIPrintInteractionController, paperList: NSArray<interop.Object> | Array<interop.Object>) => UIPrintPaper) {
    this.delegate.printInteractionControllerChoosePaper = value;
  }
  set printInteractionControllerWillPresentPrinterOptions(value: (printInteractionController: UIPrintInteractionController) => void) {
    this.delegate.printInteractionControllerWillPresentPrinterOptions = value;
  }
  set printInteractionControllerDidPresentPrinterOptions(value: (printInteractionController: UIPrintInteractionController) => void) {
    this.delegate.printInteractionControllerDidPresentPrinterOptions = value;
  }
  set printInteractionControllerWillDismissPrinterOptions(value: (printInteractionController: UIPrintInteractionController) => void) {
    this.delegate.printInteractionControllerWillDismissPrinterOptions = value;
  }
  set printInteractionControllerDidDismissPrinterOptions(value: (printInteractionController: UIPrintInteractionController) => void) {
    this.delegate.printInteractionControllerDidDismissPrinterOptions = value;
  }
  set printInteractionControllerWillStartJob(value: (printInteractionController: UIPrintInteractionController) => void) {
    this.delegate.printInteractionControllerWillStartJob = value;
  }
  set printInteractionControllerDidFinishJob(value: (printInteractionController: UIPrintInteractionController) => void) {
    this.delegate.printInteractionControllerDidFinishJob = value;
  }
  set printInteractionControllerCutLengthForPaper(value: (printInteractionController: UIPrintInteractionController, paper: UIPrintPaper) => number) {
    this.delegate.printInteractionControllerCutLengthForPaper = value;
  }
  set printInteractionControllerChooseCutterBehavior(value: (printInteractionController: UIPrintInteractionController, availableBehaviors: NSArray<interop.Object> | Array<interop.Object>) => interop.Enum<typeof UIPrinterCutterBehavior>) {
    this.delegate.printInteractionControllerChooseCutterBehavior = value;
  }
}

export class HTMLNSTextSelectionNavigationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTextSelectionNavigation.new();

  get textSelectionDataSource(): NSTextSelectionDataSource | null { return this.nativeObject.textSelectionDataSource; }
  get allowsNonContiguousRanges(): boolean { return this.nativeObject.allowsNonContiguousRanges; }
  set allowsNonContiguousRanges(value: boolean) { this.nativeObject.allowsNonContiguousRanges = value; }
  get rotatesCoordinateSystemForLayoutOrientation(): boolean { return this.nativeObject.rotatesCoordinateSystemForLayoutOrientation; }
  set rotatesCoordinateSystemForLayoutOrientation(value: boolean) { this.nativeObject.rotatesCoordinateSystemForLayoutOrientation = value; }
}

export class HTMLUICalendarSelectionSingleDateElement extends HTMLUICalendarSelectionElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICalendarSelectionSingleDate.new();
  get delegate(): UICalendarSelectionSingleDateDelegateImpl {
    // delegate is readonly, so not lazy-initialized.
    return this.nativeObject.delegate as UICalendarSelectionSingleDateDelegateImpl;
  }

  get selectedDate(): NSDateComponents { return this.nativeObject.selectedDate; }
  set selectedDate(value: NSDateComponents) { this.nativeObject.selectedDate = value; }

  set dateSelectionDidSelectDate(value: (selection: UICalendarSelectionSingleDate, dateComponents: NSDateComponents | null) => void) {
    this.delegate.dateSelectionDidSelectDate = value;
  }
  set dateSelectionCanSelectDate(value: (selection: UICalendarSelectionSingleDate, dateComponents: NSDateComponents | null) => boolean) {
    this.delegate.dateSelectionCanSelectDate = value;
  }
}

export class HTMLUISpringLoadedInteractionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UISpringLoadedInteraction.new();

  get interactionBehavior(): UISpringLoadedInteractionBehavior { return this.nativeObject.interactionBehavior; }
  get interactionEffect(): UISpringLoadedInteractionEffect { return this.nativeObject.interactionEffect; }
  get view(): UIView { return this.nativeObject.view; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUICubicTimingParametersElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICubicTimingParameters.new();

  get animationCurve(): interop.Enum<typeof UIViewAnimationCurve> { return this.nativeObject.animationCurve; }
  get controlPoint1(): CGPoint { return this.nativeObject.controlPoint1; }
  get controlPoint2(): CGPoint { return this.nativeObject.controlPoint2; }
  get timingCurveType(): interop.Enum<typeof UITimingCurveType> { return this.nativeObject.timingCurveType; }
  get cubicTimingParameters(): UICubicTimingParameters { return this.nativeObject.cubicTimingParameters; }
  get springTimingParameters(): UISpringTimingParameters { return this.nativeObject.springTimingParameters; }
}

export class HTMLUISceneSizeRestrictionsElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UISceneSizeRestrictions.new();

  get minimumSize(): CGSize { return this.nativeObject.minimumSize; }
  set minimumSize(value: CGSize) { this.nativeObject.minimumSize = value; }
  get maximumSize(): CGSize { return this.nativeObject.maximumSize; }
  set maximumSize(value: CGSize) { this.nativeObject.maximumSize = value; }
  get allowsFullScreen(): boolean { return this.nativeObject.allowsFullScreen; }
  set allowsFullScreen(value: boolean) { this.nativeObject.allowsFullScreen = value; }
}

export class HTMLUIListContentTextPropertiesElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIListContentTextProperties.new();

  get font(): UIFont { return this.nativeObject.font; }
  set font(value: UIFont) { this.nativeObject.font = value; }
  get color(): UIColor { return this.nativeObject.color; }
  set color(value: UIColor) { this.nativeObject.color = value; }
  get colorTransformer(): (p1: UIColor) => UIColor { return this.nativeObject.colorTransformer; }
  set colorTransformer(value: (p1: UIColor) => UIColor) { this.nativeObject.colorTransformer = value; }
  get alignment(): interop.Enum<typeof UIListContentTextAlignment> { return this.nativeObject.alignment; }
  set alignment(value: interop.Enum<typeof UIListContentTextAlignment>) { this.nativeObject.alignment = value; }
  get lineBreakMode(): interop.Enum<typeof NSLineBreakMode> { return this.nativeObject.lineBreakMode; }
  set lineBreakMode(value: interop.Enum<typeof NSLineBreakMode>) { this.nativeObject.lineBreakMode = value; }
  get numberOfLines(): number { return this.nativeObject.numberOfLines; }
  set numberOfLines(value: number) { this.nativeObject.numberOfLines = value; }
  get adjustsFontSizeToFitWidth(): boolean { return this.nativeObject.adjustsFontSizeToFitWidth; }
  set adjustsFontSizeToFitWidth(value: boolean) { this.nativeObject.adjustsFontSizeToFitWidth = value; }
  get minimumScaleFactor(): number { return this.nativeObject.minimumScaleFactor; }
  set minimumScaleFactor(value: number) { this.nativeObject.minimumScaleFactor = value; }
  get allowsDefaultTighteningForTruncation(): boolean { return this.nativeObject.allowsDefaultTighteningForTruncation; }
  set allowsDefaultTighteningForTruncation(value: boolean) { this.nativeObject.allowsDefaultTighteningForTruncation = value; }
  get adjustsFontForContentSizeCategory(): boolean { return this.nativeObject.adjustsFontForContentSizeCategory; }
  set adjustsFontForContentSizeCategory(value: boolean) { this.nativeObject.adjustsFontForContentSizeCategory = value; }
  get showsExpansionTextWhenTruncated(): boolean { return this.nativeObject.showsExpansionTextWhenTruncated; }
  set showsExpansionTextWhenTruncated(value: boolean) { this.nativeObject.showsExpansionTextWhenTruncated = value; }
  get transform(): interop.Enum<typeof UIListContentTextTransform> { return this.nativeObject.transform; }
  set transform(value: interop.Enum<typeof UIListContentTextTransform>) { this.nativeObject.transform = value; }
}

export class HTMLNSCollectionLayoutAnchorElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSCollectionLayoutAnchor.new();

  get edges(): interop.Enum<typeof NSDirectionalRectEdge> { return this.nativeObject.edges; }
  get offset(): CGPoint { return this.nativeObject.offset; }
  get isAbsoluteOffset(): boolean { return this.nativeObject.isAbsoluteOffset; }
  get isFractionalOffset(): boolean { return this.nativeObject.isFractionalOffset; }
}

export class HTMLUIImageViewElement extends HTMLUIViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIImageView.new();

  get image(): UIImage { return this.nativeObject.image; }
  set image(value: UIImage) { this.nativeObject.image = value; }
  get highlightedImage(): UIImage { return this.nativeObject.highlightedImage; }
  set highlightedImage(value: UIImage) { this.nativeObject.highlightedImage = value; }
  get preferredSymbolConfiguration(): UIImageSymbolConfiguration { return this.nativeObject.preferredSymbolConfiguration; }
  set preferredSymbolConfiguration(value: UIImageSymbolConfiguration) { this.nativeObject.preferredSymbolConfiguration = value; }
  get isUserInteractionEnabled(): boolean { return this.nativeObject.isUserInteractionEnabled; }
  set isUserInteractionEnabled(value: boolean) { this.nativeObject.isUserInteractionEnabled = value; }
  get isHighlighted(): boolean { return this.nativeObject.isHighlighted; }
  set isHighlighted(value: boolean) { this.nativeObject.isHighlighted = value; }
  get animationImages(): NSArray { return this.nativeObject.animationImages; }
  set animationImages(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.animationImages = value; }
  get highlightedAnimationImages(): NSArray { return this.nativeObject.highlightedAnimationImages; }
  set highlightedAnimationImages(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.highlightedAnimationImages = value; }
  get animationDuration(): number { return this.nativeObject.animationDuration; }
  set animationDuration(value: number) { this.nativeObject.animationDuration = value; }
  get animationRepeatCount(): number { return this.nativeObject.animationRepeatCount; }
  set animationRepeatCount(value: number) { this.nativeObject.animationRepeatCount = value; }
  get tintColor(): UIColor { return this.nativeObject.tintColor; }
  set tintColor(value: UIColor) { this.nativeObject.tintColor = value; }
  get isAnimating(): boolean { return this.nativeObject.isAnimating; }
  get preferredImageDynamicRange(): interop.Enum<typeof UIImageDynamicRange> { return this.nativeObject.preferredImageDynamicRange; }
  set preferredImageDynamicRange(value: interop.Enum<typeof UIImageDynamicRange>) { this.nativeObject.preferredImageDynamicRange = value; }
  get imageDynamicRange(): interop.Enum<typeof UIImageDynamicRange> { return this.nativeObject.imageDynamicRange; }
}

export class HTMLUIImageElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIImage.new();

  get size(): CGSize { return this.nativeObject.size; }
  get CGImage(): interop.Pointer { return this.nativeObject.CGImage; }
  get CIImage(): CIImage { return this.nativeObject.CIImage; }
  get imageOrientation(): interop.Enum<typeof UIImageOrientation> { return this.nativeObject.imageOrientation; }
  get scale(): number { return this.nativeObject.scale; }
  get isSymbolImage(): boolean { return this.nativeObject.isSymbolImage; }
  get images(): NSArray { return this.nativeObject.images; }
  get duration(): number { return this.nativeObject.duration; }
  get capInsets(): UIEdgeInsets { return this.nativeObject.capInsets; }
  get resizingMode(): interop.Enum<typeof UIImageResizingMode> { return this.nativeObject.resizingMode; }
  get alignmentRectInsets(): UIEdgeInsets { return this.nativeObject.alignmentRectInsets; }
  get renderingMode(): interop.Enum<typeof UIImageRenderingMode> { return this.nativeObject.renderingMode; }
  get imageRendererFormat(): UIGraphicsImageRendererFormat { return this.nativeObject.imageRendererFormat; }
  get traitCollection(): UITraitCollection { return this.nativeObject.traitCollection; }
  get imageAsset(): UIImageAsset { return this.nativeObject.imageAsset; }
  get flipsForRightToLeftLayoutDirection(): boolean { return this.nativeObject.flipsForRightToLeftLayoutDirection; }
  get baselineOffsetFromBottom(): number { return this.nativeObject.baselineOffsetFromBottom; }
  get hasBaseline(): boolean { return this.nativeObject.hasBaseline; }
  get configuration(): UIImageConfiguration { return this.nativeObject.configuration; }
  get symbolConfiguration(): UIImageSymbolConfiguration { return this.nativeObject.symbolConfiguration; }
  get isHighDynamicRange(): boolean { return this.nativeObject.isHighDynamicRange; }
  get leftCapWidth(): number { return this.nativeObject.leftCapWidth; }
  get topCapHeight(): number { return this.nativeObject.topCapHeight; }
}

export class HTMLUIDragInteractionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIDragInteraction.new();
  get delegate(): UIDragInteractionDelegateImpl {
    // delegate is readonly, so not lazy-initialized.
    return this.nativeObject.delegate as UIDragInteractionDelegateImpl;
  }

  get allowsSimultaneousRecognitionDuringLift(): boolean { return this.nativeObject.allowsSimultaneousRecognitionDuringLift; }
  set allowsSimultaneousRecognitionDuringLift(value: boolean) { this.nativeObject.allowsSimultaneousRecognitionDuringLift = value; }
  get isEnabled(): boolean { return this.nativeObject.isEnabled; }
  set isEnabled(value: boolean) { this.nativeObject.isEnabled = value; }
  get view(): UIView { return this.nativeObject.view; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }

  set dragInteractionItemsForBeginningSession(value: (interaction: UIDragInteraction, session: UIDragSession) => NSArray) {
    this.delegate.dragInteractionItemsForBeginningSession = value;
  }
  set dragInteractionPreviewForLiftingItemSession(value: (interaction: UIDragInteraction, item: UIDragItem, session: UIDragSession) => UITargetedDragPreview) {
    this.delegate.dragInteractionPreviewForLiftingItemSession = value;
  }
  set dragInteractionWillAnimateLiftWithAnimatorSession(value: (interaction: UIDragInteraction, animator: UIDragAnimating, session: UIDragSession) => void) {
    this.delegate.dragInteractionWillAnimateLiftWithAnimatorSession = value;
  }
  set dragInteractionSessionWillBegin(value: (interaction: UIDragInteraction, session: UIDragSession) => void) {
    this.delegate.dragInteractionSessionWillBegin = value;
  }
  set dragInteractionSessionAllowsMoveOperation(value: (interaction: UIDragInteraction, session: UIDragSession) => boolean) {
    this.delegate.dragInteractionSessionAllowsMoveOperation = value;
  }
  set dragInteractionSessionIsRestrictedToDraggingApplication(value: (interaction: UIDragInteraction, session: UIDragSession) => boolean) {
    this.delegate.dragInteractionSessionIsRestrictedToDraggingApplication = value;
  }
  set dragInteractionPrefersFullSizePreviewsForSession(value: (interaction: UIDragInteraction, session: UIDragSession) => boolean) {
    this.delegate.dragInteractionPrefersFullSizePreviewsForSession = value;
  }
  set dragInteractionSessionDidMove(value: (interaction: UIDragInteraction, session: UIDragSession) => void) {
    this.delegate.dragInteractionSessionDidMove = value;
  }
  set dragInteractionSessionWillEndWithOperation(value: (interaction: UIDragInteraction, session: UIDragSession, operation: interop.Enum<typeof UIDropOperation>) => void) {
    this.delegate.dragInteractionSessionWillEndWithOperation = value;
  }
  set dragInteractionSessionDidEndWithOperation(value: (interaction: UIDragInteraction, session: UIDragSession, operation: interop.Enum<typeof UIDropOperation>) => void) {
    this.delegate.dragInteractionSessionDidEndWithOperation = value;
  }
  set dragInteractionSessionDidTransferItems(value: (interaction: UIDragInteraction, session: UIDragSession) => void) {
    this.delegate.dragInteractionSessionDidTransferItems = value;
  }
  set dragInteractionItemsForAddingToSessionWithTouchAtPoint(value: (interaction: UIDragInteraction, session: UIDragSession, point: CGPoint) => NSArray) {
    this.delegate.dragInteractionItemsForAddingToSessionWithTouchAtPoint = value;
  }
  set dragInteractionSessionForAddingItemsWithTouchAtPoint(value: (interaction: UIDragInteraction, sessions: NSArray<interop.Object> | Array<interop.Object>, point: CGPoint) => UIDragSession) {
    this.delegate.dragInteractionSessionForAddingItemsWithTouchAtPoint = value;
  }
  set dragInteractionSessionWillAddItemsForInteraction(value: (interaction: UIDragInteraction, session: UIDragSession, items: NSArray<interop.Object> | Array<interop.Object>, addingInteraction: UIDragInteraction) => void) {
    this.delegate.dragInteractionSessionWillAddItemsForInteraction = value;
  }
  set dragInteractionPreviewForCancellingItemWithDefault(value: (interaction: UIDragInteraction, item: UIDragItem, defaultPreview: UITargetedDragPreview) => UITargetedDragPreview) {
    this.delegate.dragInteractionPreviewForCancellingItemWithDefault = value;
  }
  set dragInteractionItemWillAnimateCancelWithAnimator(value: (interaction: UIDragInteraction, item: UIDragItem, animator: UIDragAnimating) => void) {
    this.delegate.dragInteractionItemWillAnimateCancelWithAnimator = value;
  }
}

export class HTMLUIDynamicBehaviorElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIDynamicBehavior.new();

  get childBehaviors(): NSArray { return this.nativeObject.childBehaviors; }
  get action(): () => void { return this.nativeObject.action; }
  set action(value: () => void) { this.nativeObject.action = value; }
  get dynamicAnimator(): UIDynamicAnimator { return this.nativeObject.dynamicAnimator; }
}

export class HTMLUISimpleTextPrintFormatterElement extends HTMLUIPrintFormatterElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UISimpleTextPrintFormatter.new();

  get text(): string { return this.nativeObject.text; }
  set text(value: string) { this.nativeObject.text = value; }
  get attributedText(): NSAttributedString { return this.nativeObject.attributedText; }
  set attributedText(value: NSAttributedString) { this.nativeObject.attributedText = value; }
  get font(): UIFont { return this.nativeObject.font; }
  set font(value: UIFont) { this.nativeObject.font = value; }
  get color(): UIColor { return this.nativeObject.color; }
  set color(value: UIColor) { this.nativeObject.color = value; }
  get textAlignment(): interop.Enum<typeof NSTextAlignment> { return this.nativeObject.textAlignment; }
  set textAlignment(value: interop.Enum<typeof NSTextAlignment>) { this.nativeObject.textAlignment = value; }
}

export class HTMLUITraitDisplayGamutElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITraitDisplayGamut.new();

}

export class HTMLUISceneActivationRequestOptionsElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UISceneActivationRequestOptions.new();

  get requestingScene(): UIScene { return this.nativeObject.requestingScene; }
  set requestingScene(value: UIScene) { this.nativeObject.requestingScene = value; }
}

export class HTMLUIDocumentBrowserTransitionControllerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIDocumentBrowserTransitionController.new();

  get loadingProgress(): NSProgress { return this.nativeObject.loadingProgress; }
  set loadingProgress(value: NSProgress) { this.nativeObject.loadingProgress = value; }
  get targetView(): UIView { return this.nativeObject.targetView; }
  set targetView(value: UIView) { this.nativeObject.targetView = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUISymbolEffectCompletionContextElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UISymbolEffectCompletionContext.new();

  get isFinished(): boolean { return this.nativeObject.isFinished; }
  get sender(): interop.Object { return this.nativeObject.sender; }
  get effect(): NSSymbolEffect { return this.nativeObject.effect; }
  get contentTransition(): NSSymbolContentTransition { return this.nativeObject.contentTransition; }
}

export class HTMLUICollectionViewDiffableDataSourceElement<SectionIdentifierType = interop.Object, ItemIdentifierType = interop.Object> extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICollectionViewDiffableDataSource.new();

  get supplementaryViewProvider(): (p1: UICollectionView, p2: string, p3: NSIndexPath) => UICollectionReusableView { return this.nativeObject.supplementaryViewProvider; }
  set supplementaryViewProvider(value: (p1: UICollectionView, p2: string, p3: NSIndexPath) => UICollectionReusableView) { this.nativeObject.supplementaryViewProvider = value; }
  get reorderingHandlers(): UICollectionViewDiffableDataSourceReorderingHandlers { return this.nativeObject.reorderingHandlers; }
  set reorderingHandlers(value: UICollectionViewDiffableDataSourceReorderingHandlers) { this.nativeObject.reorderingHandlers = value; }
  get sectionSnapshotHandlers(): UICollectionViewDiffableDataSourceSectionSnapshotHandlers { return this.nativeObject.sectionSnapshotHandlers; }
  set sectionSnapshotHandlers(value: UICollectionViewDiffableDataSourceSectionSnapshotHandlers) { this.nativeObject.sectionSnapshotHandlers = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUIPreviewActionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPreviewAction.new();

  get handler(): (p1: UIPreviewActionItem, p2: UIViewController) => void { return this.nativeObject.handler; }
  get title(): string { return this.nativeObject.title; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUIWindowSceneActivationRequestOptionsElement extends HTMLUISceneActivationRequestOptionsElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIWindowSceneActivationRequestOptions.new();

  get preferredPresentationStyle(): interop.Enum<typeof UIWindowScenePresentationStyle> { return this.nativeObject.preferredPresentationStyle; }
  set preferredPresentationStyle(value: interop.Enum<typeof UIWindowScenePresentationStyle>) { this.nativeObject.preferredPresentationStyle = value; }
  get placement(): UIWindowScenePlacement { return this.nativeObject.placement; }
  set placement(value: UIWindowScenePlacement) { this.nativeObject.placement = value; }
}

export class HTMLUIFieldBehaviorElement extends HTMLUIDynamicBehaviorElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIFieldBehavior.new();

  get items(): NSArray { return this.nativeObject.items; }
  get position(): CGPoint { return this.nativeObject.position; }
  set position(value: CGPoint) { this.nativeObject.position = value; }
  get region(): UIRegion { return this.nativeObject.region; }
  set region(value: UIRegion) { this.nativeObject.region = value; }
  get strength(): number { return this.nativeObject.strength; }
  set strength(value: number) { this.nativeObject.strength = value; }
  get falloff(): number { return this.nativeObject.falloff; }
  set falloff(value: number) { this.nativeObject.falloff = value; }
  get minimumRadius(): number { return this.nativeObject.minimumRadius; }
  set minimumRadius(value: number) { this.nativeObject.minimumRadius = value; }
  get direction(): CGVector { return this.nativeObject.direction; }
  set direction(value: CGVector) { this.nativeObject.direction = value; }
  get smoothness(): number { return this.nativeObject.smoothness; }
  set smoothness(value: number) { this.nativeObject.smoothness = value; }
  get animationSpeed(): number { return this.nativeObject.animationSpeed; }
  set animationSpeed(value: number) { this.nativeObject.animationSpeed = value; }
}

export class HTMLUIPushBehaviorElement extends HTMLUIDynamicBehaviorElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPushBehavior.new();

  get items(): NSArray { return this.nativeObject.items; }
  get mode(): interop.Enum<typeof UIPushBehaviorMode> { return this.nativeObject.mode; }
  get active(): boolean { return this.nativeObject.active; }
  set active(value: boolean) { this.nativeObject.active = value; }
  get angle(): number { return this.nativeObject.angle; }
  set angle(value: number) { this.nativeObject.angle = value; }
  get magnitude(): number { return this.nativeObject.magnitude; }
  set magnitude(value: number) { this.nativeObject.magnitude = value; }
  get pushDirection(): CGVector { return this.nativeObject.pushDirection; }
  set pushDirection(value: CGVector) { this.nativeObject.pushDirection = value; }
}

export class HTMLUICollisionBehaviorElement extends HTMLUIDynamicBehaviorElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICollisionBehavior.new();
  get collisionDelegate(): UICollisionBehaviorDelegateImpl {
    if(!this.nativeObject.collisionDelegate){
      this.nativeObject.collisionDelegate = UICollisionBehaviorDelegateImpl.new();
    }
    return this.nativeObject.collisionDelegate as UICollisionBehaviorDelegateImpl;
  }

  get items(): NSArray { return this.nativeObject.items; }
  get collisionMode(): interop.Enum<typeof UICollisionBehaviorMode> { return this.nativeObject.collisionMode; }
  set collisionMode(value: interop.Enum<typeof UICollisionBehaviorMode>) { this.nativeObject.collisionMode = value; }
  get translatesReferenceBoundsIntoBoundary(): boolean { return this.nativeObject.translatesReferenceBoundsIntoBoundary; }
  set translatesReferenceBoundsIntoBoundary(value: boolean) { this.nativeObject.translatesReferenceBoundsIntoBoundary = value; }
  get boundaryIdentifiers(): NSArray { return this.nativeObject.boundaryIdentifiers; }

  set collisionBehaviorBeganContactForItemWithItemAtPoint(value: (behavior: UICollisionBehavior, item1: UIDynamicItem, item2: UIDynamicItem, p: CGPoint) => void) {
    this.collisionDelegate.collisionBehaviorBeganContactForItemWithItemAtPoint = value;
  }
  set collisionBehaviorEndedContactForItemWithItem(value: (behavior: UICollisionBehavior, item1: UIDynamicItem, item2: UIDynamicItem) => void) {
    this.collisionDelegate.collisionBehaviorEndedContactForItemWithItem = value;
  }
  set collisionBehaviorBeganContactForItemWithBoundaryIdentifierAtPoint(value: (behavior: UICollisionBehavior, item: UIDynamicItem, identifier: NSCopying | null, p: CGPoint) => void) {
    this.collisionDelegate.collisionBehaviorBeganContactForItemWithBoundaryIdentifierAtPoint = value;
  }
  set collisionBehaviorEndedContactForItemWithBoundaryIdentifier(value: (behavior: UICollisionBehavior, item: UIDynamicItem, identifier: NSCopying | null) => void) {
    this.collisionDelegate.collisionBehaviorEndedContactForItemWithBoundaryIdentifier = value;
  }
}

export class HTMLUIPointerLiftEffectElement extends HTMLUIPointerEffectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPointerLiftEffect.new();

}

export class HTMLUIAttachmentBehaviorElement extends HTMLUIDynamicBehaviorElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIAttachmentBehavior.new();

  get items(): NSArray { return this.nativeObject.items; }
  get attachedBehaviorType(): interop.Enum<typeof UIAttachmentBehaviorType> { return this.nativeObject.attachedBehaviorType; }
  get anchorPoint(): CGPoint { return this.nativeObject.anchorPoint; }
  set anchorPoint(value: CGPoint) { this.nativeObject.anchorPoint = value; }
  get length(): number { return this.nativeObject.length; }
  set length(value: number) { this.nativeObject.length = value; }
  get damping(): number { return this.nativeObject.damping; }
  set damping(value: number) { this.nativeObject.damping = value; }
  get frequency(): number { return this.nativeObject.frequency; }
  set frequency(value: number) { this.nativeObject.frequency = value; }
  get frictionTorque(): number { return this.nativeObject.frictionTorque; }
  set frictionTorque(value: number) { this.nativeObject.frictionTorque = value; }
  get attachmentRange(): UIFloatRange { return this.nativeObject.attachmentRange; }
  set attachmentRange(value: UIFloatRange) { this.nativeObject.attachmentRange = value; }
}

export class HTMLUIStackViewElement extends HTMLUIViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIStackView.new();

  get arrangedSubviews(): NSArray { return this.nativeObject.arrangedSubviews; }
  get axis(): interop.Enum<typeof UILayoutConstraintAxis> { return this.nativeObject.axis; }
  set axis(value: interop.Enum<typeof UILayoutConstraintAxis>) { this.nativeObject.axis = value; }
  get distribution(): interop.Enum<typeof UIStackViewDistribution> { return this.nativeObject.distribution; }
  set distribution(value: interop.Enum<typeof UIStackViewDistribution>) { this.nativeObject.distribution = value; }
  get alignment(): interop.Enum<typeof UIStackViewAlignment> { return this.nativeObject.alignment; }
  set alignment(value: interop.Enum<typeof UIStackViewAlignment>) { this.nativeObject.alignment = value; }
  get spacing(): number { return this.nativeObject.spacing; }
  set spacing(value: number) { this.nativeObject.spacing = value; }
  get isBaselineRelativeArrangement(): boolean { return this.nativeObject.isBaselineRelativeArrangement; }
  set isBaselineRelativeArrangement(value: boolean) { this.nativeObject.isBaselineRelativeArrangement = value; }
  get isLayoutMarginsRelativeArrangement(): boolean { return this.nativeObject.isLayoutMarginsRelativeArrangement; }
  set isLayoutMarginsRelativeArrangement(value: boolean) { this.nativeObject.isLayoutMarginsRelativeArrangement = value; }
}

export class HTMLUIHoverGestureRecognizerElement extends HTMLUIGestureRecognizerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIHoverGestureRecognizer.new();

  get zOffset(): number { return this.nativeObject.zOffset; }
  get altitudeAngle(): number { return this.nativeObject.altitudeAngle; }
}

export class HTMLUIWindowSceneElement extends HTMLUISceneElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIWindowScene.new();

  get screen(): UIScreen { return this.nativeObject.screen; }
  get interfaceOrientation(): interop.Enum<typeof UIInterfaceOrientation> { return this.nativeObject.interfaceOrientation; }
  get coordinateSpace(): UICoordinateSpace { return this.nativeObject.coordinateSpace; }
  get traitCollection(): UITraitCollection { return this.nativeObject.traitCollection; }
  get effectiveGeometry(): UIWindowSceneGeometry { return this.nativeObject.effectiveGeometry; }
  get sizeRestrictions(): UISceneSizeRestrictions { return this.nativeObject.sizeRestrictions; }
  get windows(): NSArray { return this.nativeObject.windows; }
  get keyWindow(): UIWindow { return this.nativeObject.keyWindow; }
  get activityItemsConfigurationSource(): UIActivityItemsConfigurationProviding { return this.nativeObject.activityItemsConfigurationSource; }
  set activityItemsConfigurationSource(value: UIActivityItemsConfigurationProviding) { this.nativeObject.activityItemsConfigurationSource = value; }
  get windowingBehaviors(): UISceneWindowingBehaviors { return this.nativeObject.windowingBehaviors; }
  get isFullScreen(): boolean { return this.nativeObject.isFullScreen; }
  get traitOverrides(): UITraitOverrides { return this.nativeObject.traitOverrides; }
  get focusSystem(): UIFocusSystem { return this.nativeObject.focusSystem; }
  get statusBarManager(): UIStatusBarManager { return this.nativeObject.statusBarManager; }
  get screenshotService(): UIScreenshotService { return this.nativeObject.screenshotService; }
}

export class HTMLUIStepperElement extends HTMLUIControlElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIStepper.new();

  get isContinuous(): boolean { return this.nativeObject.isContinuous; }
  set isContinuous(value: boolean) { this.nativeObject.isContinuous = value; }
  get autorepeat(): boolean { return this.nativeObject.autorepeat; }
  set autorepeat(value: boolean) { this.nativeObject.autorepeat = value; }
  get wraps(): boolean { return this.nativeObject.wraps; }
  set wraps(value: boolean) { this.nativeObject.wraps = value; }
  get value(): number { return this.nativeObject.value; }
  set value(value: number) { this.nativeObject.value = value; }
  get minimumValue(): number { return this.nativeObject.minimumValue; }
  set minimumValue(value: number) { this.nativeObject.minimumValue = value; }
  get maximumValue(): number { return this.nativeObject.maximumValue; }
  set maximumValue(value: number) { this.nativeObject.maximumValue = value; }
  get stepValue(): number { return this.nativeObject.stepValue; }
  set stepValue(value: number) { this.nativeObject.stepValue = value; }
}

export class HTMLUISelectionFeedbackGeneratorElement extends HTMLUIFeedbackGeneratorElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UISelectionFeedbackGenerator.new();

}

export class HTMLUIPageControlElement extends HTMLUIControlElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIPageControl.new();

  get numberOfPages(): number { return this.nativeObject.numberOfPages; }
  set numberOfPages(value: number) { this.nativeObject.numberOfPages = value; }
  get currentPage(): number { return this.nativeObject.currentPage; }
  set currentPage(value: number) { this.nativeObject.currentPage = value; }
  get hidesForSinglePage(): boolean { return this.nativeObject.hidesForSinglePage; }
  set hidesForSinglePage(value: boolean) { this.nativeObject.hidesForSinglePage = value; }
  get progress(): UIPageControlProgress { return this.nativeObject.progress; }
  set progress(value: UIPageControlProgress) { this.nativeObject.progress = value; }
  get pageIndicatorTintColor(): UIColor { return this.nativeObject.pageIndicatorTintColor; }
  set pageIndicatorTintColor(value: UIColor) { this.nativeObject.pageIndicatorTintColor = value; }
  get currentPageIndicatorTintColor(): UIColor { return this.nativeObject.currentPageIndicatorTintColor; }
  set currentPageIndicatorTintColor(value: UIColor) { this.nativeObject.currentPageIndicatorTintColor = value; }
  get backgroundStyle(): interop.Enum<typeof UIPageControlBackgroundStyle> { return this.nativeObject.backgroundStyle; }
  set backgroundStyle(value: interop.Enum<typeof UIPageControlBackgroundStyle>) { this.nativeObject.backgroundStyle = value; }
  get direction(): interop.Enum<typeof UIPageControlDirection> { return this.nativeObject.direction; }
  set direction(value: interop.Enum<typeof UIPageControlDirection>) { this.nativeObject.direction = value; }
  get interactionState(): interop.Enum<typeof UIPageControlInteractionState> { return this.nativeObject.interactionState; }
  get allowsContinuousInteraction(): boolean { return this.nativeObject.allowsContinuousInteraction; }
  set allowsContinuousInteraction(value: boolean) { this.nativeObject.allowsContinuousInteraction = value; }
  get preferredIndicatorImage(): UIImage { return this.nativeObject.preferredIndicatorImage; }
  set preferredIndicatorImage(value: UIImage) { this.nativeObject.preferredIndicatorImage = value; }
  get preferredCurrentPageIndicatorImage(): UIImage { return this.nativeObject.preferredCurrentPageIndicatorImage; }
  set preferredCurrentPageIndicatorImage(value: UIImage) { this.nativeObject.preferredCurrentPageIndicatorImage = value; }
  get defersCurrentPageDisplay(): boolean { return this.nativeObject.defersCurrentPageDisplay; }
  set defersCurrentPageDisplay(value: boolean) { this.nativeObject.defersCurrentPageDisplay = value; }
}

export class HTMLUIAlertControllerElement extends HTMLUIViewControllerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIAlertController.new();

  get actions(): NSArray { return this.nativeObject.actions; }
  get preferredAction(): UIAlertAction { return this.nativeObject.preferredAction; }
  set preferredAction(value: UIAlertAction) { this.nativeObject.preferredAction = value; }
  get textFields(): NSArray { return this.nativeObject.textFields; }
  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get message(): string { return this.nativeObject.message; }
  set message(value: string) { this.nativeObject.message = value; }
  get preferredStyle(): interop.Enum<typeof UIAlertControllerStyle> { return this.nativeObject.preferredStyle; }
  get severity(): interop.Enum<typeof UIAlertControllerSeverity> { return this.nativeObject.severity; }
  set severity(value: interop.Enum<typeof UIAlertControllerSeverity>) { this.nativeObject.severity = value; }
}

export class HTMLUILabelElement extends HTMLUIViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UILabel.new();

  get text(): string { return this.nativeObject.text; }
  set text(value: string) { this.nativeObject.text = value; }
  get font(): UIFont { return this.nativeObject.font; }
  set font(value: UIFont) { this.nativeObject.font = value; }
  get textColor(): UIColor { return this.nativeObject.textColor; }
  set textColor(value: UIColor) { this.nativeObject.textColor = value; }
  get preferredVibrancy(): interop.Enum<typeof UILabelVibrancy> { return this.nativeObject.preferredVibrancy; }
  set preferredVibrancy(value: interop.Enum<typeof UILabelVibrancy>) { this.nativeObject.preferredVibrancy = value; }
  get shadowColor(): UIColor { return this.nativeObject.shadowColor; }
  set shadowColor(value: UIColor) { this.nativeObject.shadowColor = value; }
  get shadowOffset(): CGSize { return this.nativeObject.shadowOffset; }
  set shadowOffset(value: CGSize) { this.nativeObject.shadowOffset = value; }
  get textAlignment(): interop.Enum<typeof NSTextAlignment> { return this.nativeObject.textAlignment; }
  set textAlignment(value: interop.Enum<typeof NSTextAlignment>) { this.nativeObject.textAlignment = value; }
  get lineBreakMode(): interop.Enum<typeof NSLineBreakMode> { return this.nativeObject.lineBreakMode; }
  set lineBreakMode(value: interop.Enum<typeof NSLineBreakMode>) { this.nativeObject.lineBreakMode = value; }
  get attributedText(): NSAttributedString { return this.nativeObject.attributedText; }
  set attributedText(value: NSAttributedString) { this.nativeObject.attributedText = value; }
  get highlightedTextColor(): UIColor { return this.nativeObject.highlightedTextColor; }
  set highlightedTextColor(value: UIColor) { this.nativeObject.highlightedTextColor = value; }
  get isHighlighted(): boolean { return this.nativeObject.isHighlighted; }
  set isHighlighted(value: boolean) { this.nativeObject.isHighlighted = value; }
  get isUserInteractionEnabled(): boolean { return this.nativeObject.isUserInteractionEnabled; }
  set isUserInteractionEnabled(value: boolean) { this.nativeObject.isUserInteractionEnabled = value; }
  get isEnabled(): boolean { return this.nativeObject.isEnabled; }
  set isEnabled(value: boolean) { this.nativeObject.isEnabled = value; }
  get numberOfLines(): number { return this.nativeObject.numberOfLines; }
  set numberOfLines(value: number) { this.nativeObject.numberOfLines = value; }
  get adjustsFontSizeToFitWidth(): boolean { return this.nativeObject.adjustsFontSizeToFitWidth; }
  set adjustsFontSizeToFitWidth(value: boolean) { this.nativeObject.adjustsFontSizeToFitWidth = value; }
  get baselineAdjustment(): interop.Enum<typeof UIBaselineAdjustment> { return this.nativeObject.baselineAdjustment; }
  set baselineAdjustment(value: interop.Enum<typeof UIBaselineAdjustment>) { this.nativeObject.baselineAdjustment = value; }
  get minimumScaleFactor(): number { return this.nativeObject.minimumScaleFactor; }
  set minimumScaleFactor(value: number) { this.nativeObject.minimumScaleFactor = value; }
  get allowsDefaultTighteningForTruncation(): boolean { return this.nativeObject.allowsDefaultTighteningForTruncation; }
  set allowsDefaultTighteningForTruncation(value: boolean) { this.nativeObject.allowsDefaultTighteningForTruncation = value; }
  get lineBreakStrategy(): interop.Enum<typeof NSLineBreakStrategy> { return this.nativeObject.lineBreakStrategy; }
  set lineBreakStrategy(value: interop.Enum<typeof NSLineBreakStrategy>) { this.nativeObject.lineBreakStrategy = value; }
  get preferredMaxLayoutWidth(): number { return this.nativeObject.preferredMaxLayoutWidth; }
  set preferredMaxLayoutWidth(value: number) { this.nativeObject.preferredMaxLayoutWidth = value; }
  get showsExpansionTextWhenTruncated(): boolean { return this.nativeObject.showsExpansionTextWhenTruncated; }
  set showsExpansionTextWhenTruncated(value: boolean) { this.nativeObject.showsExpansionTextWhenTruncated = value; }
  get minimumFontSize(): number { return this.nativeObject.minimumFontSize; }
  set minimumFontSize(value: number) { this.nativeObject.minimumFontSize = value; }
  get adjustsLetterSpacingToFitWidth(): boolean { return this.nativeObject.adjustsLetterSpacingToFitWidth; }
  set adjustsLetterSpacingToFitWidth(value: boolean) { this.nativeObject.adjustsLetterSpacingToFitWidth = value; }
  get adjustsFontForContentSizeCategory(): boolean { return this.nativeObject.adjustsFontForContentSizeCategory; }
  set adjustsFontForContentSizeCategory(value: boolean) { this.nativeObject.adjustsFontForContentSizeCategory = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
  get sizingRule(): interop.Enum<typeof UILetterformAwareSizingRule> { return this.nativeObject.sizingRule; }
  set sizingRule(value: interop.Enum<typeof UILetterformAwareSizingRule>) { this.nativeObject.sizingRule = value; }
}

export class HTMLUIMarkupTextPrintFormatterElement extends HTMLUIPrintFormatterElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIMarkupTextPrintFormatter.new();

  get markupText(): string { return this.nativeObject.markupText; }
  set markupText(value: string) { this.nativeObject.markupText = value; }
}

export class HTMLUIWindowSceneGeometryPreferencesIOSElement extends HTMLUIWindowSceneGeometryPreferencesElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIWindowSceneGeometryPreferencesIOS.new();

  get interfaceOrientations(): interop.Enum<typeof UIInterfaceOrientationMask> { return this.nativeObject.interfaceOrientations; }
  set interfaceOrientations(value: interop.Enum<typeof UIInterfaceOrientationMask>) { this.nativeObject.interfaceOrientations = value; }
}

export class HTMLUIShapeElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIShape.new();

  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUICellAccessoryPopUpMenuElement extends HTMLUICellAccessoryElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICellAccessoryPopUpMenu.new();

  get menu(): UIMenu { return this.nativeObject.menu; }
  get selectedElementDidChangeHandler(): (p1: UIMenu) => void { return this.nativeObject.selectedElementDidChangeHandler; }
  set selectedElementDidChangeHandler(value: (p1: UIMenu) => void) { this.nativeObject.selectedElementDidChangeHandler = value; }
}

export class HTMLUIAccelerationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIAcceleration.new();

  get timestamp(): number { return this.nativeObject.timestamp; }
  get x(): number { return this.nativeObject.x; }
  get y(): number { return this.nativeObject.y; }
  get z(): number { return this.nativeObject.z; }
}

export class HTMLUITraitImageDynamicRangeElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITraitImageDynamicRange.new();

}

export class HTMLUIFontPickerViewControllerConfigurationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIFontPickerViewControllerConfiguration.new();

  get includeFaces(): boolean { return this.nativeObject.includeFaces; }
  set includeFaces(value: boolean) { this.nativeObject.includeFaces = value; }
  get displayUsingSystemFont(): boolean { return this.nativeObject.displayUsingSystemFont; }
  set displayUsingSystemFont(value: boolean) { this.nativeObject.displayUsingSystemFont = value; }
  get filteredTraits(): interop.Enum<typeof UIFontDescriptorSymbolicTraits> { return this.nativeObject.filteredTraits; }
  set filteredTraits(value: interop.Enum<typeof UIFontDescriptorSymbolicTraits>) { this.nativeObject.filteredTraits = value; }
  get filteredLanguagesPredicate(): NSPredicate { return this.nativeObject.filteredLanguagesPredicate; }
  set filteredLanguagesPredicate(value: NSPredicate) { this.nativeObject.filteredLanguagesPredicate = value; }
}

export class HTMLUITableViewDiffableDataSourceElement<SectionIdentifierType = interop.Object, ItemIdentifierType = interop.Object> extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITableViewDiffableDataSource.new();

  get defaultRowAnimation(): interop.Enum<typeof UITableViewRowAnimation> { return this.nativeObject.defaultRowAnimation; }
  set defaultRowAnimation(value: interop.Enum<typeof UITableViewRowAnimation>) { this.nativeObject.defaultRowAnimation = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUIBackgroundConfigurationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIBackgroundConfiguration.new();

  get customView(): UIView { return this.nativeObject.customView; }
  set customView(value: UIView) { this.nativeObject.customView = value; }
  get cornerRadius(): number { return this.nativeObject.cornerRadius; }
  set cornerRadius(value: number) { this.nativeObject.cornerRadius = value; }
  get backgroundInsets(): NSDirectionalEdgeInsets { return this.nativeObject.backgroundInsets; }
  set backgroundInsets(value: NSDirectionalEdgeInsets) { this.nativeObject.backgroundInsets = value; }
  get edgesAddingLayoutMarginsToBackgroundInsets(): interop.Enum<typeof NSDirectionalRectEdge> { return this.nativeObject.edgesAddingLayoutMarginsToBackgroundInsets; }
  set edgesAddingLayoutMarginsToBackgroundInsets(value: interop.Enum<typeof NSDirectionalRectEdge>) { this.nativeObject.edgesAddingLayoutMarginsToBackgroundInsets = value; }
  get backgroundColor(): UIColor { return this.nativeObject.backgroundColor; }
  set backgroundColor(value: UIColor) { this.nativeObject.backgroundColor = value; }
  get backgroundColorTransformer(): (p1: UIColor) => UIColor { return this.nativeObject.backgroundColorTransformer; }
  set backgroundColorTransformer(value: (p1: UIColor) => UIColor) { this.nativeObject.backgroundColorTransformer = value; }
  get visualEffect(): UIVisualEffect { return this.nativeObject.visualEffect; }
  set visualEffect(value: UIVisualEffect) { this.nativeObject.visualEffect = value; }
  get image(): UIImage { return this.nativeObject.image; }
  set image(value: UIImage) { this.nativeObject.image = value; }
  get imageContentMode(): interop.Enum<typeof UIViewContentMode> { return this.nativeObject.imageContentMode; }
  set imageContentMode(value: interop.Enum<typeof UIViewContentMode>) { this.nativeObject.imageContentMode = value; }
  get strokeColor(): UIColor { return this.nativeObject.strokeColor; }
  set strokeColor(value: UIColor) { this.nativeObject.strokeColor = value; }
  get strokeColorTransformer(): (p1: UIColor) => UIColor { return this.nativeObject.strokeColorTransformer; }
  set strokeColorTransformer(value: (p1: UIColor) => UIColor) { this.nativeObject.strokeColorTransformer = value; }
  get strokeWidth(): number { return this.nativeObject.strokeWidth; }
  set strokeWidth(value: number) { this.nativeObject.strokeWidth = value; }
  get strokeOutset(): number { return this.nativeObject.strokeOutset; }
  set strokeOutset(value: number) { this.nativeObject.strokeOutset = value; }
}

export class HTMLUIWindowSceneActivationConfigurationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIWindowSceneActivationConfiguration.new();

  get userActivity(): NSUserActivity { return this.nativeObject.userActivity; }
  get options(): UIWindowSceneActivationRequestOptions { return this.nativeObject.options; }
  set options(value: UIWindowSceneActivationRequestOptions) { this.nativeObject.options = value; }
  get preview(): UITargetedPreview { return this.nativeObject.preview; }
  set preview(value: UITargetedPreview) { this.nativeObject.preview = value; }
}

export class HTMLUIDynamicItemBehaviorElement extends HTMLUIDynamicBehaviorElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIDynamicItemBehavior.new();

  get items(): NSArray { return this.nativeObject.items; }
  get elasticity(): number { return this.nativeObject.elasticity; }
  set elasticity(value: number) { this.nativeObject.elasticity = value; }
  get friction(): number { return this.nativeObject.friction; }
  set friction(value: number) { this.nativeObject.friction = value; }
  get density(): number { return this.nativeObject.density; }
  set density(value: number) { this.nativeObject.density = value; }
  get resistance(): number { return this.nativeObject.resistance; }
  set resistance(value: number) { this.nativeObject.resistance = value; }
  get angularResistance(): number { return this.nativeObject.angularResistance; }
  set angularResistance(value: number) { this.nativeObject.angularResistance = value; }
  get charge(): number { return this.nativeObject.charge; }
  set charge(value: number) { this.nativeObject.charge = value; }
  get isAnchored(): boolean { return this.nativeObject.isAnchored; }
  set isAnchored(value: boolean) { this.nativeObject.isAnchored = value; }
  get allowsRotation(): boolean { return this.nativeObject.allowsRotation; }
  set allowsRotation(value: boolean) { this.nativeObject.allowsRotation = value; }
}

export class HTMLUISnapBehaviorElement extends HTMLUIDynamicBehaviorElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UISnapBehavior.new();

  get snapPoint(): CGPoint { return this.nativeObject.snapPoint; }
  set snapPoint(value: CGPoint) { this.nativeObject.snapPoint = value; }
  get damping(): number { return this.nativeObject.damping; }
  set damping(value: number) { this.nativeObject.damping = value; }
}

export class HTMLNSCollectionLayoutBoundarySupplementaryItemElement extends HTMLNSCollectionLayoutSupplementaryItemElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSCollectionLayoutBoundarySupplementaryItem.new();

  get extendsBoundary(): boolean { return this.nativeObject.extendsBoundary; }
  set extendsBoundary(value: boolean) { this.nativeObject.extendsBoundary = value; }
  get pinToVisibleBounds(): boolean { return this.nativeObject.pinToVisibleBounds; }
  set pinToVisibleBounds(value: boolean) { this.nativeObject.pinToVisibleBounds = value; }
  get alignment(): interop.Enum<typeof NSRectAlignment> { return this.nativeObject.alignment; }
  get offset(): CGPoint { return this.nativeObject.offset; }
}

export class HTMLUICellConfigurationStateElement extends HTMLUIViewConfigurationStateElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICellConfigurationState.new();

  get isEditing(): boolean { return this.nativeObject.isEditing; }
  set isEditing(value: boolean) { this.nativeObject.isEditing = value; }
  get isExpanded(): boolean { return this.nativeObject.isExpanded; }
  set isExpanded(value: boolean) { this.nativeObject.isExpanded = value; }
  get isSwiped(): boolean { return this.nativeObject.isSwiped; }
  set isSwiped(value: boolean) { this.nativeObject.isSwiped = value; }
  get isReordering(): boolean { return this.nativeObject.isReordering; }
  set isReordering(value: boolean) { this.nativeObject.isReordering = value; }
  get cellDragState(): interop.Enum<typeof UICellConfigurationDragState> { return this.nativeObject.cellDragState; }
  set cellDragState(value: interop.Enum<typeof UICellConfigurationDragState>) { this.nativeObject.cellDragState = value; }
  get cellDropState(): interop.Enum<typeof UICellConfigurationDropState> { return this.nativeObject.cellDropState; }
  set cellDropState(value: interop.Enum<typeof UICellConfigurationDropState>) { this.nativeObject.cellDropState = value; }
}

export class HTMLUIVibrancyEffectElement extends HTMLUIVisualEffectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIVibrancyEffect.new();

}

export class HTMLUISceneDestructionRequestOptionsElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UISceneDestructionRequestOptions.new();

}

export class HTMLUITextCheckerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITextChecker.new();

  get ignoredWords(): NSArray { return this.nativeObject.ignoredWords; }
  set ignoredWords(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.ignoredWords = value; }
}

export class HTMLUICollectionViewFlowLayoutElement extends HTMLUICollectionViewLayoutElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICollectionViewFlowLayout.new();

  get minimumLineSpacing(): number { return this.nativeObject.minimumLineSpacing; }
  set minimumLineSpacing(value: number) { this.nativeObject.minimumLineSpacing = value; }
  get minimumInteritemSpacing(): number { return this.nativeObject.minimumInteritemSpacing; }
  set minimumInteritemSpacing(value: number) { this.nativeObject.minimumInteritemSpacing = value; }
  get itemSize(): CGSize { return this.nativeObject.itemSize; }
  set itemSize(value: CGSize) { this.nativeObject.itemSize = value; }
  get estimatedItemSize(): CGSize { return this.nativeObject.estimatedItemSize; }
  set estimatedItemSize(value: CGSize) { this.nativeObject.estimatedItemSize = value; }
  get scrollDirection(): interop.Enum<typeof UICollectionViewScrollDirection> { return this.nativeObject.scrollDirection; }
  set scrollDirection(value: interop.Enum<typeof UICollectionViewScrollDirection>) { this.nativeObject.scrollDirection = value; }
  get headerReferenceSize(): CGSize { return this.nativeObject.headerReferenceSize; }
  set headerReferenceSize(value: CGSize) { this.nativeObject.headerReferenceSize = value; }
  get footerReferenceSize(): CGSize { return this.nativeObject.footerReferenceSize; }
  set footerReferenceSize(value: CGSize) { this.nativeObject.footerReferenceSize = value; }
  get sectionInset(): UIEdgeInsets { return this.nativeObject.sectionInset; }
  set sectionInset(value: UIEdgeInsets) { this.nativeObject.sectionInset = value; }
  get sectionInsetReference(): interop.Enum<typeof UICollectionViewFlowLayoutSectionInsetReference> { return this.nativeObject.sectionInsetReference; }
  set sectionInsetReference(value: interop.Enum<typeof UICollectionViewFlowLayoutSectionInsetReference>) { this.nativeObject.sectionInsetReference = value; }
  get sectionHeadersPinToVisibleBounds(): boolean { return this.nativeObject.sectionHeadersPinToVisibleBounds; }
  set sectionHeadersPinToVisibleBounds(value: boolean) { this.nativeObject.sectionHeadersPinToVisibleBounds = value; }
  get sectionFootersPinToVisibleBounds(): boolean { return this.nativeObject.sectionFootersPinToVisibleBounds; }
  set sectionFootersPinToVisibleBounds(value: boolean) { this.nativeObject.sectionFootersPinToVisibleBounds = value; }
}

export class HTMLNSTextContentManagerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTextContentManager.new();
  get delegate(): NSTextContentManagerDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSTextContentManagerDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSTextContentManagerDelegateImpl;
  }

  get textLayoutManagers(): NSArray { return this.nativeObject.textLayoutManagers; }
  get primaryTextLayoutManager(): NSTextLayoutManager { return this.nativeObject.primaryTextLayoutManager; }
  set primaryTextLayoutManager(value: NSTextLayoutManager) { this.nativeObject.primaryTextLayoutManager = value; }
  get hasEditingTransaction(): boolean { return this.nativeObject.hasEditingTransaction; }
  get automaticallySynchronizesTextLayoutManagers(): boolean { return this.nativeObject.automaticallySynchronizesTextLayoutManagers; }
  set automaticallySynchronizesTextLayoutManagers(value: boolean) { this.nativeObject.automaticallySynchronizesTextLayoutManagers = value; }
  get automaticallySynchronizesToBackingStore(): boolean { return this.nativeObject.automaticallySynchronizesToBackingStore; }
  set automaticallySynchronizesToBackingStore(value: boolean) { this.nativeObject.automaticallySynchronizesToBackingStore = value; }
  get documentRange(): NSTextRange { return this.nativeObject.documentRange; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }

  set textContentManagerTextElementAtLocation(value: (textContentManager: NSTextContentManager, location: NSTextLocation) => NSTextElement) {
    this.delegate.textContentManagerTextElementAtLocation = value;
  }
  set textContentManagerShouldEnumerateTextElementOptions(value: (textContentManager: NSTextContentManager, textElement: NSTextElement, options: interop.Enum<typeof NSTextContentManagerEnumerationOptions>) => boolean) {
    this.delegate.textContentManagerShouldEnumerateTextElementOptions = value;
  }
}

export class HTMLUISearchBarElement extends HTMLUIViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = UISearchBar.new();
  get delegate(): UISearchBarDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UISearchBarDelegateImpl.new();
    }
    return this.nativeObject.delegate as UISearchBarDelegateImpl;
  }

  get barStyle(): interop.Enum<typeof UIBarStyle> { return this.nativeObject.barStyle; }
  set barStyle(value: interop.Enum<typeof UIBarStyle>) { this.nativeObject.barStyle = value; }
  get text(): string { return this.nativeObject.text; }
  set text(value: string) { this.nativeObject.text = value; }
  get prompt(): string { return this.nativeObject.prompt; }
  set prompt(value: string) { this.nativeObject.prompt = value; }
  get placeholder(): string { return this.nativeObject.placeholder; }
  set placeholder(value: string) { this.nativeObject.placeholder = value; }
  get showsBookmarkButton(): boolean { return this.nativeObject.showsBookmarkButton; }
  set showsBookmarkButton(value: boolean) { this.nativeObject.showsBookmarkButton = value; }
  get searchTextField(): UISearchTextField { return this.nativeObject.searchTextField; }
  get showsCancelButton(): boolean { return this.nativeObject.showsCancelButton; }
  set showsCancelButton(value: boolean) { this.nativeObject.showsCancelButton = value; }
  get showsSearchResultsButton(): boolean { return this.nativeObject.showsSearchResultsButton; }
  set showsSearchResultsButton(value: boolean) { this.nativeObject.showsSearchResultsButton = value; }
  get isSearchResultsButtonSelected(): boolean { return this.nativeObject.isSearchResultsButtonSelected; }
  set isSearchResultsButtonSelected(value: boolean) { this.nativeObject.isSearchResultsButtonSelected = value; }
  get inputAssistantItem(): UITextInputAssistantItem { return this.nativeObject.inputAssistantItem; }
  get tintColor(): UIColor { return this.nativeObject.tintColor; }
  set tintColor(value: UIColor) { this.nativeObject.tintColor = value; }
  get barTintColor(): UIColor { return this.nativeObject.barTintColor; }
  set barTintColor(value: UIColor) { this.nativeObject.barTintColor = value; }
  get searchBarStyle(): interop.Enum<typeof UISearchBarStyle> { return this.nativeObject.searchBarStyle; }
  set searchBarStyle(value: interop.Enum<typeof UISearchBarStyle>) { this.nativeObject.searchBarStyle = value; }
  get isTranslucent(): boolean { return this.nativeObject.isTranslucent; }
  set isTranslucent(value: boolean) { this.nativeObject.isTranslucent = value; }
  get scopeButtonTitles(): NSArray { return this.nativeObject.scopeButtonTitles; }
  set scopeButtonTitles(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.scopeButtonTitles = value; }
  get selectedScopeButtonIndex(): number { return this.nativeObject.selectedScopeButtonIndex; }
  set selectedScopeButtonIndex(value: number) { this.nativeObject.selectedScopeButtonIndex = value; }
  get showsScopeBar(): boolean { return this.nativeObject.showsScopeBar; }
  set showsScopeBar(value: boolean) { this.nativeObject.showsScopeBar = value; }
  get inputAccessoryView(): UIView { return this.nativeObject.inputAccessoryView; }
  set inputAccessoryView(value: UIView) { this.nativeObject.inputAccessoryView = value; }
  get isEnabled(): boolean { return this.nativeObject.isEnabled; }
  set isEnabled(value: boolean) { this.nativeObject.isEnabled = value; }
  get backgroundImage(): UIImage { return this.nativeObject.backgroundImage; }
  set backgroundImage(value: UIImage) { this.nativeObject.backgroundImage = value; }
  get scopeBarBackgroundImage(): UIImage { return this.nativeObject.scopeBarBackgroundImage; }
  set scopeBarBackgroundImage(value: UIImage) { this.nativeObject.scopeBarBackgroundImage = value; }
  get searchFieldBackgroundPositionAdjustment(): UIOffset { return this.nativeObject.searchFieldBackgroundPositionAdjustment; }
  set searchFieldBackgroundPositionAdjustment(value: UIOffset) { this.nativeObject.searchFieldBackgroundPositionAdjustment = value; }
  get searchTextPositionAdjustment(): UIOffset { return this.nativeObject.searchTextPositionAdjustment; }
  set searchTextPositionAdjustment(value: UIOffset) { this.nativeObject.searchTextPositionAdjustment = value; }
  get isLookToDictateEnabled(): boolean { return this.nativeObject.isLookToDictateEnabled; }
  set isLookToDictateEnabled(value: boolean) { this.nativeObject.isLookToDictateEnabled = value; }
  get barPosition(): interop.Enum<typeof UIBarPosition> { return this.nativeObject.barPosition; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
  get autocapitalizationType(): interop.Enum<typeof UITextAutocapitalizationType> { return this.nativeObject.autocapitalizationType; }
  set autocapitalizationType(value: interop.Enum<typeof UITextAutocapitalizationType>) { this.nativeObject.autocapitalizationType = value; }
  get autocorrectionType(): interop.Enum<typeof UITextAutocorrectionType> { return this.nativeObject.autocorrectionType; }
  set autocorrectionType(value: interop.Enum<typeof UITextAutocorrectionType>) { this.nativeObject.autocorrectionType = value; }
  get spellCheckingType(): interop.Enum<typeof UITextSpellCheckingType> { return this.nativeObject.spellCheckingType; }
  set spellCheckingType(value: interop.Enum<typeof UITextSpellCheckingType>) { this.nativeObject.spellCheckingType = value; }
  get smartQuotesType(): interop.Enum<typeof UITextSmartQuotesType> { return this.nativeObject.smartQuotesType; }
  set smartQuotesType(value: interop.Enum<typeof UITextSmartQuotesType>) { this.nativeObject.smartQuotesType = value; }
  get smartDashesType(): interop.Enum<typeof UITextSmartDashesType> { return this.nativeObject.smartDashesType; }
  set smartDashesType(value: interop.Enum<typeof UITextSmartDashesType>) { this.nativeObject.smartDashesType = value; }
  get smartInsertDeleteType(): interop.Enum<typeof UITextSmartInsertDeleteType> { return this.nativeObject.smartInsertDeleteType; }
  set smartInsertDeleteType(value: interop.Enum<typeof UITextSmartInsertDeleteType>) { this.nativeObject.smartInsertDeleteType = value; }
  get inlinePredictionType(): interop.Enum<typeof UITextInlinePredictionType> { return this.nativeObject.inlinePredictionType; }
  set inlinePredictionType(value: interop.Enum<typeof UITextInlinePredictionType>) { this.nativeObject.inlinePredictionType = value; }
  get keyboardType(): interop.Enum<typeof UIKeyboardType> { return this.nativeObject.keyboardType; }
  set keyboardType(value: interop.Enum<typeof UIKeyboardType>) { this.nativeObject.keyboardType = value; }
  get keyboardAppearance(): interop.Enum<typeof UIKeyboardAppearance> { return this.nativeObject.keyboardAppearance; }
  set keyboardAppearance(value: interop.Enum<typeof UIKeyboardAppearance>) { this.nativeObject.keyboardAppearance = value; }
  get returnKeyType(): interop.Enum<typeof UIReturnKeyType> { return this.nativeObject.returnKeyType; }
  set returnKeyType(value: interop.Enum<typeof UIReturnKeyType>) { this.nativeObject.returnKeyType = value; }
  get enablesReturnKeyAutomatically(): boolean { return this.nativeObject.enablesReturnKeyAutomatically; }
  set enablesReturnKeyAutomatically(value: boolean) { this.nativeObject.enablesReturnKeyAutomatically = value; }
  get isSecureTextEntry(): boolean { return this.nativeObject.isSecureTextEntry; }
  set isSecureTextEntry(value: boolean) { this.nativeObject.isSecureTextEntry = value; }
  get textContentType(): string { return this.nativeObject.textContentType; }
  set textContentType(value: string) { this.nativeObject.textContentType = value; }
  get passwordRules(): UITextInputPasswordRules { return this.nativeObject.passwordRules; }
  set passwordRules(value: UITextInputPasswordRules) { this.nativeObject.passwordRules = value; }

  set searchBarShouldBeginEditing(value: (searchBar: UISearchBar) => boolean) {
    this.delegate.searchBarShouldBeginEditing = value;
  }
  set searchBarTextDidBeginEditing(value: (searchBar: UISearchBar) => void) {
    this.delegate.searchBarTextDidBeginEditing = value;
  }
  set searchBarShouldEndEditing(value: (searchBar: UISearchBar) => boolean) {
    this.delegate.searchBarShouldEndEditing = value;
  }
  set searchBarTextDidEndEditing(value: (searchBar: UISearchBar) => void) {
    this.delegate.searchBarTextDidEndEditing = value;
  }
  set searchBarTextDidChange(value: (searchBar: UISearchBar, searchText: string) => void) {
    this.delegate.searchBarTextDidChange = value;
  }
  set searchBarShouldChangeTextInRangeReplacementText(value: (searchBar: UISearchBar, range: _NSRange, text: string) => boolean) {
    this.delegate.searchBarShouldChangeTextInRangeReplacementText = value;
  }
  set searchBarSearchButtonClicked(value: (searchBar: UISearchBar) => void) {
    this.delegate.searchBarSearchButtonClicked = value;
  }
  set searchBarBookmarkButtonClicked(value: (searchBar: UISearchBar) => void) {
    this.delegate.searchBarBookmarkButtonClicked = value;
  }
  set searchBarCancelButtonClicked(value: (searchBar: UISearchBar) => void) {
    this.delegate.searchBarCancelButtonClicked = value;
  }
  set searchBarResultsListButtonClicked(value: (searchBar: UISearchBar) => void) {
    this.delegate.searchBarResultsListButtonClicked = value;
  }
  set searchBarSelectedScopeButtonIndexDidChange(value: (searchBar: UISearchBar, selectedScope: number) => void) {
    this.delegate.searchBarSelectedScopeButtonIndexDidChange = value;
  }
}

export class HTMLUIWindowSceneDestructionRequestOptionsElement extends HTMLUISceneDestructionRequestOptionsElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIWindowSceneDestructionRequestOptions.new();

  get windowDismissalAnimation(): interop.Enum<typeof UIWindowSceneDismissalAnimation> { return this.nativeObject.windowDismissalAnimation; }
  set windowDismissalAnimation(value: interop.Enum<typeof UIWindowSceneDismissalAnimation>) { this.nativeObject.windowDismissalAnimation = value; }
}

export class HTMLNSTextContentStorageElement extends HTMLNSTextContentManagerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSTextContentStorage.new();
  get delegate(): NSTextContentStorageDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSTextContentStorageDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSTextContentStorageDelegateImpl;
  }

  get attributedString(): NSAttributedString { return this.nativeObject.attributedString; }
  set attributedString(value: NSAttributedString) { this.nativeObject.attributedString = value; }
  get textStorage(): NSTextStorage { return this.nativeObject.textStorage; }
  set textStorage(value: NSTextStorage) { this.nativeObject.textStorage = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }

  set textContentStorageTextParagraphWithRange(value: (textContentStorage: NSTextContentStorage, range: _NSRange) => NSTextParagraph) {
    this.delegate.textContentStorageTextParagraphWithRange = value;
  }
}

export class HTMLUIGravityBehaviorElement extends HTMLUIDynamicBehaviorElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIGravityBehavior.new();

  get items(): NSArray { return this.nativeObject.items; }
  get gravityDirection(): CGVector { return this.nativeObject.gravityDirection; }
  set gravityDirection(value: CGVector) { this.nativeObject.gravityDirection = value; }
  get angle(): number { return this.nativeObject.angle; }
  set angle(value: number) { this.nativeObject.angle = value; }
  get magnitude(): number { return this.nativeObject.magnitude; }
  set magnitude(value: number) { this.nativeObject.magnitude = value; }
}

export class HTMLUITextFieldElement extends HTMLUIControlElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = UITextField.new();
  get delegate(): UITextFieldDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = UITextFieldDelegateImpl.new();
    }
    return this.nativeObject.delegate as UITextFieldDelegateImpl;
  }
  get inputDelegate(): UITextInputDelegateImpl {
    if(!this.nativeObject.inputDelegate){
      this.nativeObject.inputDelegate = UITextInputDelegateImpl.new();
    }
    return this.nativeObject.inputDelegate as UITextInputDelegateImpl;
  }

  get text(): string { return this.nativeObject.text; }
  set text(value: string) { this.nativeObject.text = value; }
  get attributedText(): NSAttributedString { return this.nativeObject.attributedText; }
  set attributedText(value: NSAttributedString) { this.nativeObject.attributedText = value; }
  get textColor(): UIColor { return this.nativeObject.textColor; }
  set textColor(value: UIColor) { this.nativeObject.textColor = value; }
  get font(): UIFont { return this.nativeObject.font; }
  set font(value: UIFont) { this.nativeObject.font = value; }
  get textAlignment(): interop.Enum<typeof NSTextAlignment> { return this.nativeObject.textAlignment; }
  set textAlignment(value: interop.Enum<typeof NSTextAlignment>) { this.nativeObject.textAlignment = value; }
  get borderStyle(): interop.Enum<typeof UITextBorderStyle> { return this.nativeObject.borderStyle; }
  set borderStyle(value: interop.Enum<typeof UITextBorderStyle>) { this.nativeObject.borderStyle = value; }
  get defaultTextAttributes(): NSDictionary { return this.nativeObject.defaultTextAttributes; }
  set defaultTextAttributes(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) { this.nativeObject.defaultTextAttributes = value; }
  get placeholder(): string { return this.nativeObject.placeholder; }
  set placeholder(value: string) { this.nativeObject.placeholder = value; }
  get attributedPlaceholder(): NSAttributedString { return this.nativeObject.attributedPlaceholder; }
  set attributedPlaceholder(value: NSAttributedString) { this.nativeObject.attributedPlaceholder = value; }
  get clearsOnBeginEditing(): boolean { return this.nativeObject.clearsOnBeginEditing; }
  set clearsOnBeginEditing(value: boolean) { this.nativeObject.clearsOnBeginEditing = value; }
  get adjustsFontSizeToFitWidth(): boolean { return this.nativeObject.adjustsFontSizeToFitWidth; }
  set adjustsFontSizeToFitWidth(value: boolean) { this.nativeObject.adjustsFontSizeToFitWidth = value; }
  get minimumFontSize(): number { return this.nativeObject.minimumFontSize; }
  set minimumFontSize(value: number) { this.nativeObject.minimumFontSize = value; }
  get background(): UIImage { return this.nativeObject.background; }
  set background(value: UIImage) { this.nativeObject.background = value; }
  get disabledBackground(): UIImage { return this.nativeObject.disabledBackground; }
  set disabledBackground(value: UIImage) { this.nativeObject.disabledBackground = value; }
  get isEditing(): boolean { return this.nativeObject.isEditing; }
  get allowsEditingTextAttributes(): boolean { return this.nativeObject.allowsEditingTextAttributes; }
  set allowsEditingTextAttributes(value: boolean) { this.nativeObject.allowsEditingTextAttributes = value; }
  get typingAttributes(): NSDictionary { return this.nativeObject.typingAttributes; }
  set typingAttributes(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) { this.nativeObject.typingAttributes = value; }
  get clearButtonMode(): interop.Enum<typeof UITextFieldViewMode> { return this.nativeObject.clearButtonMode; }
  set clearButtonMode(value: interop.Enum<typeof UITextFieldViewMode>) { this.nativeObject.clearButtonMode = value; }
  get leftView(): UIView { return this.nativeObject.leftView; }
  set leftView(value: UIView) { this.nativeObject.leftView = value; }
  get leftViewMode(): interop.Enum<typeof UITextFieldViewMode> { return this.nativeObject.leftViewMode; }
  set leftViewMode(value: interop.Enum<typeof UITextFieldViewMode>) { this.nativeObject.leftViewMode = value; }
  get rightView(): UIView { return this.nativeObject.rightView; }
  set rightView(value: UIView) { this.nativeObject.rightView = value; }
  get rightViewMode(): interop.Enum<typeof UITextFieldViewMode> { return this.nativeObject.rightViewMode; }
  set rightViewMode(value: interop.Enum<typeof UITextFieldViewMode>) { this.nativeObject.rightViewMode = value; }
  get inputView(): UIView { return this.nativeObject.inputView; }
  set inputView(value: UIView) { this.nativeObject.inputView = value; }
  get inputAccessoryView(): UIView { return this.nativeObject.inputAccessoryView; }
  set inputAccessoryView(value: UIView) { this.nativeObject.inputAccessoryView = value; }
  get clearsOnInsertion(): boolean { return this.nativeObject.clearsOnInsertion; }
  set clearsOnInsertion(value: boolean) { this.nativeObject.clearsOnInsertion = value; }
  get interactionState(): interop.Object { return this.nativeObject.interactionState; }
  set interactionState(value: interop.Object) { this.nativeObject.interactionState = value; }
  get selectedTextRange(): UITextRange { return this.nativeObject.selectedTextRange; }
  set selectedTextRange(value: UITextRange) { this.nativeObject.selectedTextRange = value; }
  get markedTextRange(): UITextRange { return this.nativeObject.markedTextRange; }
  get markedTextStyle(): NSDictionary { return this.nativeObject.markedTextStyle; }
  set markedTextStyle(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) { this.nativeObject.markedTextStyle = value; }
  get beginningOfDocument(): UITextPosition { return this.nativeObject.beginningOfDocument; }
  get endOfDocument(): UITextPosition { return this.nativeObject.endOfDocument; }
  get tokenizer(): UITextInputTokenizer { return this.nativeObject.tokenizer; }
  get textInputView(): UIView { return this.nativeObject.textInputView; }
  get selectionAffinity(): interop.Enum<typeof UITextStorageDirection> { return this.nativeObject.selectionAffinity; }
  set selectionAffinity(value: interop.Enum<typeof UITextStorageDirection>) { this.nativeObject.selectionAffinity = value; }
  get insertDictationResultPlaceholder(): interop.Object { return this.nativeObject.insertDictationResultPlaceholder; }
  get hasText(): boolean { return this.nativeObject.hasText; }
  get autocapitalizationType(): interop.Enum<typeof UITextAutocapitalizationType> { return this.nativeObject.autocapitalizationType; }
  set autocapitalizationType(value: interop.Enum<typeof UITextAutocapitalizationType>) { this.nativeObject.autocapitalizationType = value; }
  get autocorrectionType(): interop.Enum<typeof UITextAutocorrectionType> { return this.nativeObject.autocorrectionType; }
  set autocorrectionType(value: interop.Enum<typeof UITextAutocorrectionType>) { this.nativeObject.autocorrectionType = value; }
  get spellCheckingType(): interop.Enum<typeof UITextSpellCheckingType> { return this.nativeObject.spellCheckingType; }
  set spellCheckingType(value: interop.Enum<typeof UITextSpellCheckingType>) { this.nativeObject.spellCheckingType = value; }
  get smartQuotesType(): interop.Enum<typeof UITextSmartQuotesType> { return this.nativeObject.smartQuotesType; }
  set smartQuotesType(value: interop.Enum<typeof UITextSmartQuotesType>) { this.nativeObject.smartQuotesType = value; }
  get smartDashesType(): interop.Enum<typeof UITextSmartDashesType> { return this.nativeObject.smartDashesType; }
  set smartDashesType(value: interop.Enum<typeof UITextSmartDashesType>) { this.nativeObject.smartDashesType = value; }
  get smartInsertDeleteType(): interop.Enum<typeof UITextSmartInsertDeleteType> { return this.nativeObject.smartInsertDeleteType; }
  set smartInsertDeleteType(value: interop.Enum<typeof UITextSmartInsertDeleteType>) { this.nativeObject.smartInsertDeleteType = value; }
  get inlinePredictionType(): interop.Enum<typeof UITextInlinePredictionType> { return this.nativeObject.inlinePredictionType; }
  set inlinePredictionType(value: interop.Enum<typeof UITextInlinePredictionType>) { this.nativeObject.inlinePredictionType = value; }
  get keyboardType(): interop.Enum<typeof UIKeyboardType> { return this.nativeObject.keyboardType; }
  set keyboardType(value: interop.Enum<typeof UIKeyboardType>) { this.nativeObject.keyboardType = value; }
  get keyboardAppearance(): interop.Enum<typeof UIKeyboardAppearance> { return this.nativeObject.keyboardAppearance; }
  set keyboardAppearance(value: interop.Enum<typeof UIKeyboardAppearance>) { this.nativeObject.keyboardAppearance = value; }
  get returnKeyType(): interop.Enum<typeof UIReturnKeyType> { return this.nativeObject.returnKeyType; }
  set returnKeyType(value: interop.Enum<typeof UIReturnKeyType>) { this.nativeObject.returnKeyType = value; }
  get enablesReturnKeyAutomatically(): boolean { return this.nativeObject.enablesReturnKeyAutomatically; }
  set enablesReturnKeyAutomatically(value: boolean) { this.nativeObject.enablesReturnKeyAutomatically = value; }
  get isSecureTextEntry(): boolean { return this.nativeObject.isSecureTextEntry; }
  set isSecureTextEntry(value: boolean) { this.nativeObject.isSecureTextEntry = value; }
  get textContentType(): string { return this.nativeObject.textContentType; }
  set textContentType(value: string) { this.nativeObject.textContentType = value; }
  get passwordRules(): UITextInputPasswordRules { return this.nativeObject.passwordRules; }
  set passwordRules(value: UITextInputPasswordRules) { this.nativeObject.passwordRules = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
  get adjustsFontForContentSizeCategory(): boolean { return this.nativeObject.adjustsFontForContentSizeCategory; }
  set adjustsFontForContentSizeCategory(value: boolean) { this.nativeObject.adjustsFontForContentSizeCategory = value; }
  get sizingRule(): interop.Enum<typeof UILetterformAwareSizingRule> { return this.nativeObject.sizingRule; }
  set sizingRule(value: interop.Enum<typeof UILetterformAwareSizingRule>) { this.nativeObject.sizingRule = value; }

  set textFieldShouldBeginEditing(value: (textField: UITextField) => boolean) {
    this.delegate.textFieldShouldBeginEditing = value;
  }
  set textFieldDidBeginEditing(value: (textField: UITextField) => void) {
    this.delegate.textFieldDidBeginEditing = value;
  }
  set textFieldShouldEndEditing(value: (textField: UITextField) => boolean) {
    this.delegate.textFieldShouldEndEditing = value;
  }
  set textFieldDidEndEditing(value: (textField: UITextField) => void) {
    this.delegate.textFieldDidEndEditing = value;
  }
  set textFieldDidEndEditingReason(value: (textField: UITextField, reason: interop.Enum<typeof UITextFieldDidEndEditingReason>) => void) {
    this.delegate.textFieldDidEndEditingReason = value;
  }
  set textFieldShouldChangeCharactersInRangeReplacementString(value: (textField: UITextField, range: _NSRange, string: string) => boolean) {
    this.delegate.textFieldShouldChangeCharactersInRangeReplacementString = value;
  }
  set textFieldDidChangeSelection(value: (textField: UITextField) => void) {
    this.delegate.textFieldDidChangeSelection = value;
  }
  set textFieldShouldClear(value: (textField: UITextField) => boolean) {
    this.delegate.textFieldShouldClear = value;
  }
  set textFieldShouldReturn(value: (textField: UITextField) => boolean) {
    this.delegate.textFieldShouldReturn = value;
  }
  set textFieldEditMenuForCharactersInRangeSuggestedActions(value: (textField: UITextField, range: _NSRange, suggestedActions: NSArray<interop.Object> | Array<interop.Object>) => UIMenu) {
    this.delegate.textFieldEditMenuForCharactersInRangeSuggestedActions = value;
  }
  set textFieldWillPresentEditMenuWithAnimator(value: (textField: UITextField, animator: UIEditMenuInteractionAnimating) => void) {
    this.delegate.textFieldWillPresentEditMenuWithAnimator = value;
  }
  set textFieldWillDismissEditMenuWithAnimator(value: (textField: UITextField, animator: UIEditMenuInteractionAnimating) => void) {
    this.delegate.textFieldWillDismissEditMenuWithAnimator = value;
  }
  set selectionWillChange(value: (textInput: UITextInput | null) => void) {
    this.inputDelegate.selectionWillChange = value;
  }
  set selectionDidChange(value: (textInput: UITextInput | null) => void) {
    this.inputDelegate.selectionDidChange = value;
  }
  set textWillChange(value: (textInput: UITextInput | null) => void) {
    this.inputDelegate.textWillChange = value;
  }
  set textDidChange(value: (textInput: UITextInput | null) => void) {
    this.inputDelegate.textDidChange = value;
  }
}

export class HTMLUIActionElement extends HTMLUIMenuElementElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = UIAction.new();

  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get image(): UIImage { return this.nativeObject.image; }
  set image(value: UIImage) { this.nativeObject.image = value; }
  get discoverabilityTitle(): string { return this.nativeObject.discoverabilityTitle; }
  set discoverabilityTitle(value: string) { this.nativeObject.discoverabilityTitle = value; }
  get identifier(): string { return this.nativeObject.identifier; }
  get state(): interop.Enum<typeof UIMenuElementState> { return this.nativeObject.state; }
  set state(value: interop.Enum<typeof UIMenuElementState>) { this.nativeObject.state = value; }
  get sender(): interop.Object { return this.nativeObject.sender; }
  get selectedImage(): UIImage { return this.nativeObject.selectedImage; }
  set selectedImage(value: UIImage) { this.nativeObject.selectedImage = value; }
  get presentationSourceItem(): UIPopoverPresentationControllerSourceItem { return this.nativeObject.presentationSourceItem; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLUIGraphicsPDFRendererContextElement extends HTMLUIGraphicsRendererContextElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIGraphicsPDFRendererContext.new();

  get pdfContextBounds(): CGRect { return this.nativeObject.pdfContextBounds; }
}

export class HTMLUIDocumentPropertiesElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIDocumentProperties.new();

  get metadata(): interop.Object { return this.nativeObject.metadata; }
  set metadata(value: interop.Object) { this.nativeObject.metadata = value; }
  get dragItemsProvider(): (p1: UIDragSession) => NSArray { return this.nativeObject.dragItemsProvider; }
  set dragItemsProvider(value: (p1: UIDragSession) => NSArray) { this.nativeObject.dragItemsProvider = value; }
  get activityViewControllerProvider(): () => UIActivityViewController { return this.nativeObject.activityViewControllerProvider; }
  set activityViewControllerProvider(value: () => UIActivityViewController) { this.nativeObject.activityViewControllerProvider = value; }
  get wantsIconRepresentation(): boolean { return this.nativeObject.wantsIconRepresentation; }
  set wantsIconRepresentation(value: boolean) { this.nativeObject.wantsIconRepresentation = value; }
}

export class HTMLUIWindowSceneActivationActionElement extends HTMLUIActionElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = UIWindowSceneActivationAction.new();

  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
}

export class HTMLUISearchTextFieldElement extends HTMLUITextFieldElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UISearchTextField.new();

  get tokens(): NSArray { return this.nativeObject.tokens; }
  set tokens(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.tokens = value; }
  get textualRange(): UITextRange { return this.nativeObject.textualRange; }
  get tokenBackgroundColor(): UIColor { return this.nativeObject.tokenBackgroundColor; }
  set tokenBackgroundColor(value: UIColor) { this.nativeObject.tokenBackgroundColor = value; }
  get allowsDeletingTokens(): boolean { return this.nativeObject.allowsDeletingTokens; }
  set allowsDeletingTokens(value: boolean) { this.nativeObject.allowsDeletingTokens = value; }
  get allowsCopyingTokens(): boolean { return this.nativeObject.allowsCopyingTokens; }
  set allowsCopyingTokens(value: boolean) { this.nativeObject.allowsCopyingTokens = value; }
  get searchSuggestions(): NSArray { return this.nativeObject.searchSuggestions; }
  set searchSuggestions(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.searchSuggestions = value; }
}

export class HTMLUIGraphicsImageRendererContextElement extends HTMLUIGraphicsRendererContextElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UIGraphicsImageRendererContext.new();

  get currentImage(): UIImage { return this.nativeObject.currentImage; }
}

export class HTMLUITraitSceneCaptureStateElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITraitSceneCaptureState.new();

}

export class HTMLUICalendarViewDecorationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UICalendarViewDecoration.new();

}

export class HTMLUITraitAccessibilityContrastElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = UITraitAccessibilityContrast.new();

}

// Delegates

export class UIContextMenuInteractionDelegateImpl extends NSObject implements UIContextMenuInteractionDelegate {
  static ObjCProtocols = [UIContextMenuInteractionDelegate];
  static {
    NativeClass(this);
  }

  contextMenuInteractionConfigurationForMenuAtLocation(interaction: UIContextMenuInteraction, location: CGPoint): UIContextMenuConfiguration {
    throw new Error("Please provide implementation for: UIContextMenuInteractionDelegate > contextMenuInteractionConfigurationForMenuAtLocation");
  }
  contextMenuInteractionConfigurationHighlightPreviewForItemWithIdentifier?(interaction: UIContextMenuInteraction, configuration: UIContextMenuConfiguration, identifier: NSCopying): UITargetedPreview;
  contextMenuInteractionConfigurationDismissalPreviewForItemWithIdentifier?(interaction: UIContextMenuInteraction, configuration: UIContextMenuConfiguration, identifier: NSCopying): UITargetedPreview;
  contextMenuInteractionWillPerformPreviewActionForMenuWithConfigurationAnimator?(interaction: UIContextMenuInteraction, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionCommitAnimating): void;
  contextMenuInteractionWillDisplayMenuForConfigurationAnimator?(interaction: UIContextMenuInteraction, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating | null): void;
  contextMenuInteractionWillEndForConfigurationAnimator?(interaction: UIContextMenuInteraction, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating | null): void;
  contextMenuInteractionPreviewForHighlightingMenuWithConfiguration?(interaction: UIContextMenuInteraction, configuration: UIContextMenuConfiguration): UITargetedPreview;
  contextMenuInteractionPreviewForDismissingMenuWithConfiguration?(interaction: UIContextMenuInteraction, configuration: UIContextMenuConfiguration): UITargetedPreview;
}

export class UIPrinterPickerControllerDelegateImpl extends NSObject implements UIPrinterPickerControllerDelegate {
  static ObjCProtocols = [UIPrinterPickerControllerDelegate];
  static {
    NativeClass(this);
  }

  printerPickerControllerParentViewController?(printerPickerController: UIPrinterPickerController): UIViewController;
  printerPickerControllerShouldShowPrinter?(printerPickerController: UIPrinterPickerController, printer: UIPrinter): boolean;
  printerPickerControllerWillPresent?(printerPickerController: UIPrinterPickerController): void;
  printerPickerControllerDidPresent?(printerPickerController: UIPrinterPickerController): void;
  printerPickerControllerWillDismiss?(printerPickerController: UIPrinterPickerController): void;
  printerPickerControllerDidDismiss?(printerPickerController: UIPrinterPickerController): void;
  printerPickerControllerDidSelectPrinter?(printerPickerController: UIPrinterPickerController): void;
}

export class UISheetPresentationControllerDelegateImpl extends NSObject implements UISheetPresentationControllerDelegate {
  static ObjCProtocols = [UISheetPresentationControllerDelegate];
  static {
    NativeClass(this);
  }

  sheetPresentationControllerDidChangeSelectedDetentIdentifier?(sheetPresentationController: UISheetPresentationController): void;
}

export class UIPrintInteractionControllerDelegateImpl extends NSObject implements UIPrintInteractionControllerDelegate {
  static ObjCProtocols = [UIPrintInteractionControllerDelegate];
  static {
    NativeClass(this);
  }

  printInteractionControllerParentViewController?(printInteractionController: UIPrintInteractionController): UIViewController | null;
  printInteractionControllerChoosePaper?(printInteractionController: UIPrintInteractionController, paperList: NSArray<interop.Object> | Array<interop.Object>): UIPrintPaper;
  printInteractionControllerWillPresentPrinterOptions?(printInteractionController: UIPrintInteractionController): void;
  printInteractionControllerDidPresentPrinterOptions?(printInteractionController: UIPrintInteractionController): void;
  printInteractionControllerWillDismissPrinterOptions?(printInteractionController: UIPrintInteractionController): void;
  printInteractionControllerDidDismissPrinterOptions?(printInteractionController: UIPrintInteractionController): void;
  printInteractionControllerWillStartJob?(printInteractionController: UIPrintInteractionController): void;
  printInteractionControllerDidFinishJob?(printInteractionController: UIPrintInteractionController): void;
  printInteractionControllerCutLengthForPaper?(printInteractionController: UIPrintInteractionController, paper: UIPrintPaper): number;
  printInteractionControllerChooseCutterBehavior?(printInteractionController: UIPrintInteractionController, availableBehaviors: NSArray<interop.Object> | Array<interop.Object>): interop.Enum<typeof UIPrinterCutterBehavior>;
}

export class NSTextContentStorageDelegateImpl extends NSObject implements NSTextContentStorageDelegate {
  static ObjCProtocols = [NSTextContentStorageDelegate];
  static {
    NativeClass(this);
  }

  textContentStorageTextParagraphWithRange?(textContentStorage: NSTextContentStorage, range: _NSRange): NSTextParagraph;
}

export class UIPageControlTimerProgressDelegateImpl extends NSObject implements UIPageControlTimerProgressDelegate {
  static ObjCProtocols = [UIPageControlTimerProgressDelegate];
  static {
    NativeClass(this);
  }

  pageControlTimerProgressDidChange?(progress: UIPageControlTimerProgress): void;
  pageControlTimerProgressShouldAdvanceToPage?(progress: UIPageControlTimerProgress, page: number): boolean;
}

export class UICalendarSelectionMultiDateDelegateImpl extends NSObject implements UICalendarSelectionMultiDateDelegate {
  static ObjCProtocols = [UICalendarSelectionMultiDateDelegate];
  static {
    NativeClass(this);
  }

  multiDateSelectionDidSelectDate(selection: UICalendarSelectionMultiDate, dateComponents: NSDateComponents): void {
    throw new Error("Please provide implementation for: UICalendarSelectionMultiDateDelegate > multiDateSelectionDidSelectDate");
  }
  multiDateSelectionDidDeselectDate(selection: UICalendarSelectionMultiDate, dateComponents: NSDateComponents): void {
    throw new Error("Please provide implementation for: UICalendarSelectionMultiDateDelegate > multiDateSelectionDidDeselectDate");
  }
  multiDateSelectionCanSelectDate?(selection: UICalendarSelectionMultiDate, dateComponents: NSDateComponents): boolean;
  multiDateSelectionCanDeselectDate?(selection: UICalendarSelectionMultiDate, dateComponents: NSDateComponents): boolean;
}

export class UICalendarSelectionSingleDateDelegateImpl extends NSObject implements UICalendarSelectionSingleDateDelegate {
  static ObjCProtocols = [UICalendarSelectionSingleDateDelegate];
  static {
    NativeClass(this);
  }

  dateSelectionDidSelectDate(selection: UICalendarSelectionSingleDate, dateComponents: NSDateComponents | null): void {
    throw new Error("Please provide implementation for: UICalendarSelectionSingleDateDelegate > dateSelectionDidSelectDate");
  }
  dateSelectionCanSelectDate?(selection: UICalendarSelectionSingleDate, dateComponents: NSDateComponents | null): boolean;
}

export class UICalendarViewDelegateImpl extends NSObject implements UICalendarViewDelegate {
  static ObjCProtocols = [UICalendarViewDelegate];
  static {
    NativeClass(this);
  }

  calendarViewDecorationForDateComponents?(calendarView: UICalendarView, dateComponents: NSDateComponents): UICalendarViewDecoration;
  calendarViewDidChangeVisibleDateComponentsFrom?(calendarView: UICalendarView, previousDateComponents: NSDateComponents): void;
}

export class UIColorPickerViewControllerDelegateImpl extends NSObject implements UIColorPickerViewControllerDelegate {
  static ObjCProtocols = [UIColorPickerViewControllerDelegate];
  static {
    NativeClass(this);
  }

  colorPickerViewControllerDidSelectColor?(viewController: UIColorPickerViewController): void;
  colorPickerViewControllerDidSelectColorContinuously?(viewController: UIColorPickerViewController, color: UIColor, continuously: boolean): void;
  colorPickerViewControllerDidFinish?(viewController: UIColorPickerViewController): void;
}

export class UIPointerInteractionDelegateImpl extends NSObject implements UIPointerInteractionDelegate {
  static ObjCProtocols = [UIPointerInteractionDelegate];
  static {
    NativeClass(this);
  }

  pointerInteractionRegionForRequestDefaultRegion?(interaction: UIPointerInteraction, request: UIPointerRegionRequest, defaultRegion: UIPointerRegion): UIPointerRegion;
  pointerInteractionStyleForRegion?(interaction: UIPointerInteraction, region: UIPointerRegion): UIPointerStyle;
  pointerInteractionWillEnterRegionAnimator?(interaction: UIPointerInteraction, region: UIPointerRegion, animator: UIPointerInteractionAnimating): void;
  pointerInteractionWillExitRegionAnimator?(interaction: UIPointerInteraction, region: UIPointerRegion, animator: UIPointerInteractionAnimating): void;
}

export class UITextFormattingCoordinatorDelegateImpl extends NSObject implements UITextFormattingCoordinatorDelegate {
  static ObjCProtocols = [UITextFormattingCoordinatorDelegate];
  static {
    NativeClass(this);
  }

  updateTextAttributesWithConversionHandler(conversionHandler: (p1: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) => NSDictionary): void {
    throw new Error("Please provide implementation for: UITextFormattingCoordinatorDelegate > updateTextAttributesWithConversionHandler");
  }
}

export class UIPencilInteractionDelegateImpl extends NSObject implements UIPencilInteractionDelegate {
  static ObjCProtocols = [UIPencilInteractionDelegate];
  static {
    NativeClass(this);
  }

  pencilInteractionDidTap?(interaction: UIPencilInteraction): void;
}

export class UITextInteractionDelegateImpl extends NSObject implements UITextInteractionDelegate {
  static ObjCProtocols = [UITextInteractionDelegate];
  static {
    NativeClass(this);
  }

  interactionShouldBeginAtPoint?(interaction: UITextInteraction, point: CGPoint): boolean;
  interactionWillBegin?(interaction: UITextInteraction): void;
  interactionDidEnd?(interaction: UITextInteraction): void;
}

export class UIDynamicAnimatorDelegateImpl extends NSObject implements UIDynamicAnimatorDelegate {
  static ObjCProtocols = [UIDynamicAnimatorDelegate];
  static {
    NativeClass(this);
  }

  dynamicAnimatorWillResume?(animator: UIDynamicAnimator): void;
  dynamicAnimatorDidPause?(animator: UIDynamicAnimator): void;
}

export class UIPopoverPresentationControllerDelegateImpl extends NSObject implements UIPopoverPresentationControllerDelegate {
  static ObjCProtocols = [UIPopoverPresentationControllerDelegate];
  static {
    NativeClass(this);
  }

  prepareForPopoverPresentation?(popoverPresentationController: UIPopoverPresentationController): void;
  popoverPresentationControllerShouldDismissPopover?(popoverPresentationController: UIPopoverPresentationController): boolean;
  popoverPresentationControllerDidDismissPopover?(popoverPresentationController: UIPopoverPresentationController): void;
  popoverPresentationControllerWillRepositionPopoverToRectInView?(popoverPresentationController: UIPopoverPresentationController, rect: interop.PointerConvertible, view: interop.PointerConvertible): void;
}

export class UIDocumentMenuDelegateImpl extends NSObject implements UIDocumentMenuDelegate {
  static ObjCProtocols = [UIDocumentMenuDelegate];
  static {
    NativeClass(this);
  }

  documentMenuDidPickDocumentPicker(documentMenu: UIDocumentMenuViewController, documentPicker: UIDocumentPickerViewController): void {
    throw new Error("Please provide implementation for: UIDocumentMenuDelegate > documentMenuDidPickDocumentPicker");
  }
  documentMenuWasCancelled?(documentMenu: UIDocumentMenuViewController): void;
}

export class NSLayoutManagerDelegateImpl extends NSObject implements NSLayoutManagerDelegate {
  static ObjCProtocols = [NSLayoutManagerDelegate];
  static {
    NativeClass(this);
  }

  layoutManagerShouldGenerateGlyphsPropertiesCharacterIndexesFontForGlyphRange?(layoutManager: NSLayoutManager, glyphs: interop.PointerConvertible, props: interop.PointerConvertible, charIndexes: interop.PointerConvertible, aFont: UIFont, glyphRange: _NSRange): number;
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
}

export class UIVideoEditorControllerDelegateImpl extends NSObject implements UIVideoEditorControllerDelegate {
  static ObjCProtocols = [UIVideoEditorControllerDelegate];
  static {
    NativeClass(this);
  }

  videoEditorControllerDidSaveEditedVideoToPath?(editor: UIVideoEditorController, editedVideoPath: string): void;
  videoEditorControllerDidFailWithError?(editor: UIVideoEditorController, error: NSError): void;
  videoEditorControllerDidCancel?(editor: UIVideoEditorController): void;
}

export class UIToolbarDelegateImpl extends NSObject implements UIToolbarDelegate {
  static ObjCProtocols = [UIToolbarDelegate];
  static {
    NativeClass(this);
  }
}

export class UITextViewDelegateImpl extends NSObject implements UITextViewDelegate {
  static ObjCProtocols = [UITextViewDelegate];
  static {
    NativeClass(this);
  }

  textViewShouldBeginEditing?(textView: UITextView): boolean;
  textViewShouldEndEditing?(textView: UITextView): boolean;
  textViewDidBeginEditing?(textView: UITextView): void;
  textViewDidEndEditing?(textView: UITextView): void;
  textViewShouldChangeTextInRangeReplacementText?(textView: UITextView, range: _NSRange, text: string): boolean;
  textViewDidChange?(textView: UITextView): void;
  textViewDidChangeSelection?(textView: UITextView): void;
  textViewEditMenuForTextInRangeSuggestedActions?(textView: UITextView, range: _NSRange, suggestedActions: NSArray<interop.Object> | Array<interop.Object>): UIMenu;
  textViewWillPresentEditMenuWithAnimator?(textView: UITextView, animator: UIEditMenuInteractionAnimating): void;
  textViewWillDismissEditMenuWithAnimator?(textView: UITextView, animator: UIEditMenuInteractionAnimating): void;
  textViewPrimaryActionForTextItemDefaultAction?(textView: UITextView, textItem: UITextItem, defaultAction: UIAction): UIAction;
  textViewMenuConfigurationForTextItemDefaultMenu?(textView: UITextView, textItem: UITextItem, defaultMenu: UIMenu): UITextItemMenuConfiguration;
  textViewTextItemMenuWillDisplayForTextItemAnimator?(textView: UITextView, textItem: UITextItem, animator: UIContextMenuInteractionAnimating): void;
  textViewTextItemMenuWillEndForTextItemAnimator?(textView: UITextView, textItem: UITextItem, animator: UIContextMenuInteractionAnimating): void;
  textViewShouldInteractWithURLInRangeInteraction?(textView: UITextView, URL: NSURL, characterRange: _NSRange, interaction: interop.Enum<typeof UITextItemInteraction>): boolean;
  textViewShouldInteractWithTextAttachmentInRangeInteraction?(textView: UITextView, textAttachment: NSTextAttachment, characterRange: _NSRange, interaction: interop.Enum<typeof UITextItemInteraction>): boolean;
  textViewShouldInteractWithURLInRange?(textView: UITextView, URL: NSURL, characterRange: _NSRange): boolean;
  textViewShouldInteractWithTextAttachmentInRange?(textView: UITextView, textAttachment: NSTextAttachment, characterRange: _NSRange): boolean;
}

export class UITabBarDelegateImpl extends NSObject implements UITabBarDelegate {
  static ObjCProtocols = [UITabBarDelegate];
  static {
    NativeClass(this);
  }

  tabBarDidSelectItem?(tabBar: UITabBar, item: UITabBarItem): void;
  tabBarWillBeginCustomizingItems?(tabBar: UITabBar, items: NSArray<interop.Object> | Array<interop.Object>): void;
  tabBarDidBeginCustomizingItems?(tabBar: UITabBar, items: NSArray<interop.Object> | Array<interop.Object>): void;
  tabBarWillEndCustomizingItemsChanged?(tabBar: UITabBar, items: NSArray<interop.Object> | Array<interop.Object>, changed: boolean): void;
  tabBarDidEndCustomizingItemsChanged?(tabBar: UITabBar, items: NSArray<interop.Object> | Array<interop.Object>, changed: boolean): void;
}

export class UISearchTextFieldDelegateImpl extends NSObject implements UISearchTextFieldDelegate {
  static ObjCProtocols = [UISearchTextFieldDelegate];
  static {
    NativeClass(this);
  }

  searchTextFieldItemProviderForCopyingToken?(searchTextField: UISearchTextField, token: UISearchToken): NSItemProvider;
  searchTextFieldDidSelectSuggestion?(searchTextField: UISearchTextField, suggestion: UISearchSuggestion): void;
}

export class UIApplicationDelegateImpl extends NSObject implements UIApplicationDelegate {
  static ObjCProtocols = [UIApplicationDelegate];
  static {
    NativeClass(this);
  }

  applicationDidFinishLaunching?(application: UIApplication): void;
  applicationWillFinishLaunchingWithOptions?(application: UIApplication, launchOptions: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): boolean;
  applicationDidFinishLaunchingWithOptions?(application: UIApplication, launchOptions: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): boolean;
  applicationDidBecomeActive?(application: UIApplication): void;
  applicationWillResignActive?(application: UIApplication): void;
  applicationHandleOpenURL?(application: UIApplication, url: NSURL): boolean;
  applicationOpenURLSourceApplicationAnnotation?(application: UIApplication, url: NSURL, sourceApplication: string | null, annotation: interop.Object): boolean;
  applicationOpenURLOptions?(app: UIApplication, url: NSURL, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): boolean;
  applicationDidReceiveMemoryWarning?(application: UIApplication): void;
  applicationWillTerminate?(application: UIApplication): void;
  applicationSignificantTimeChange?(application: UIApplication): void;
  applicationWillChangeStatusBarOrientationDuration?(application: UIApplication, newStatusBarOrientation: interop.Enum<typeof UIInterfaceOrientation>, duration: number): void;
  applicationDidChangeStatusBarOrientation?(application: UIApplication, oldStatusBarOrientation: interop.Enum<typeof UIInterfaceOrientation>): void;
  applicationWillChangeStatusBarFrame?(application: UIApplication, newStatusBarFrame: CGRect): void;
  applicationDidChangeStatusBarFrame?(application: UIApplication, oldStatusBarFrame: CGRect): void;
  applicationDidRegisterUserNotificationSettings?(application: UIApplication, notificationSettings: UIUserNotificationSettings): void;
  applicationDidRegisterForRemoteNotificationsWithDeviceToken?(application: UIApplication, deviceToken: NSData): void;
  applicationDidFailToRegisterForRemoteNotificationsWithError?(application: UIApplication, error: NSError): void;
  applicationDidReceiveRemoteNotification?(application: UIApplication, userInfo: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): void;
  applicationDidReceiveLocalNotification?(application: UIApplication, notification: UILocalNotification): void;
  applicationHandleActionWithIdentifierForLocalNotificationCompletionHandler?(application: UIApplication, identifier: string | null, notification: UILocalNotification, completionHandler: () => void): void;
  applicationHandleActionWithIdentifierForRemoteNotificationWithResponseInfoCompletionHandler?(application: UIApplication, identifier: string | null, userInfo: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, responseInfo: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, completionHandler: () => void): void;
  applicationHandleActionWithIdentifierForRemoteNotificationCompletionHandler?(application: UIApplication, identifier: string | null, userInfo: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, completionHandler: () => void): void;
  applicationHandleActionWithIdentifierForLocalNotificationWithResponseInfoCompletionHandler?(application: UIApplication, identifier: string | null, notification: UILocalNotification, responseInfo: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, completionHandler: () => void): void;
  applicationDidReceiveRemoteNotificationFetchCompletionHandler?(application: UIApplication, userInfo: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, completionHandler: (p1: interop.Enum<typeof UIBackgroundFetchResult>) => void): void;
  applicationPerformFetchWithCompletionHandler?(application: UIApplication, completionHandler: (p1: interop.Enum<typeof UIBackgroundFetchResult>) => void): void;
  applicationPerformActionForShortcutItemCompletionHandler?(application: UIApplication, shortcutItem: UIApplicationShortcutItem, completionHandler: (p1: boolean) => void): void;
  applicationHandleEventsForBackgroundURLSessionCompletionHandler?(application: UIApplication, identifier: string, completionHandler: () => void): void;
  applicationHandleWatchKitExtensionRequestReply?(application: UIApplication, userInfo: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null, reply: (p1: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) => void | null): void;
  applicationShouldRequestHealthAuthorization?(application: UIApplication): void;
  applicationHandlerForIntent?(application: UIApplication, intent: INIntent): interop.Object;
  applicationHandleIntentCompletionHandler?(application: UIApplication, intent: INIntent, completionHandler: (p1: INIntentResponse) => void): void;
  applicationDidEnterBackground?(application: UIApplication): void;
  applicationWillEnterForeground?(application: UIApplication): void;
  applicationProtectedDataWillBecomeUnavailable?(application: UIApplication): void;
  applicationProtectedDataDidBecomeAvailable?(application: UIApplication): void;
  declare window: UIWindow;
  applicationSupportedInterfaceOrientationsForWindow?(application: UIApplication, window: UIWindow | null): interop.Enum<typeof UIInterfaceOrientationMask>;
  applicationShouldAllowExtensionPointIdentifier?(application: UIApplication, extensionPointIdentifier: string): boolean;
  applicationViewControllerWithRestorationIdentifierPathCoder?(application: UIApplication, identifierComponents: NSArray<interop.Object> | Array<interop.Object>, coder: NSCoder): UIViewController;
  applicationShouldSaveSecureApplicationState?(application: UIApplication, coder: NSCoder): boolean;
  applicationShouldRestoreSecureApplicationState?(application: UIApplication, coder: NSCoder): boolean;
  applicationWillEncodeRestorableStateWithCoder?(application: UIApplication, coder: NSCoder): void;
  applicationDidDecodeRestorableStateWithCoder?(application: UIApplication, coder: NSCoder): void;
  applicationShouldSaveApplicationState?(application: UIApplication, coder: NSCoder): boolean;
  applicationShouldRestoreApplicationState?(application: UIApplication, coder: NSCoder): boolean;
  applicationWillContinueUserActivityWithType?(application: UIApplication, userActivityType: string): boolean;
  applicationContinueUserActivityRestorationHandler?(application: UIApplication, userActivity: NSUserActivity, restorationHandler: (p1: NSArray<interop.Object> | Array<interop.Object>) => void | null): boolean;
  applicationDidFailToContinueUserActivityWithTypeError?(application: UIApplication, userActivityType: string, error: NSError): void;
  applicationDidUpdateUserActivity?(application: UIApplication, userActivity: NSUserActivity): void;
  applicationUserDidAcceptCloudKitShareWithMetadata?(application: UIApplication, cloudKitShareMetadata: CKShareMetadata): void;
  applicationConfigurationForConnectingSceneSessionOptions?(application: UIApplication, connectingSceneSession: UISceneSession, options: UISceneConnectionOptions): UISceneConfiguration;
  applicationDidDiscardSceneSessions?(application: UIApplication, sceneSessions: NSSet): void;
  applicationShouldAutomaticallyLocalizeKeyCommands?(application: UIApplication): boolean;
}

export class UIPopoverControllerDelegateImpl extends NSObject implements UIPopoverControllerDelegate {
  static ObjCProtocols = [UIPopoverControllerDelegate];
  static {
    NativeClass(this);
  }

  popoverControllerShouldDismissPopover?(popoverController: UIPopoverController): boolean;
  popoverControllerDidDismissPopover?(popoverController: UIPopoverController): void;
  popoverControllerWillRepositionPopoverToRectInView?(popoverController: UIPopoverController, rect: interop.PointerConvertible, view: interop.PointerConvertible): void;
}

export class UIScrollViewDelegateImpl extends NSObject implements UIScrollViewDelegate {
  static ObjCProtocols = [UIScrollViewDelegate];
  static {
    NativeClass(this);
  }

  scrollViewDidScroll?(scrollView: UIScrollView): void;
  scrollViewDidZoom?(scrollView: UIScrollView): void;
  scrollViewWillBeginDragging?(scrollView: UIScrollView): void;
  scrollViewWillEndDraggingWithVelocityTargetContentOffset?(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.PointerConvertible): void;
  scrollViewDidEndDraggingWillDecelerate?(scrollView: UIScrollView, decelerate: boolean): void;
  scrollViewWillBeginDecelerating?(scrollView: UIScrollView): void;
  scrollViewDidEndDecelerating?(scrollView: UIScrollView): void;
  scrollViewDidEndScrollingAnimation?(scrollView: UIScrollView): void;
  viewForZoomingInScrollView?(scrollView: UIScrollView): UIView;
  scrollViewWillBeginZoomingWithView?(scrollView: UIScrollView, view: UIView | null): void;
  scrollViewDidEndZoomingWithViewAtScale?(scrollView: UIScrollView, view: UIView | null, scale: number): void;
  scrollViewShouldScrollToTop?(scrollView: UIScrollView): boolean;
  scrollViewDidScrollToTop?(scrollView: UIScrollView): void;
  scrollViewDidChangeAdjustedContentInset?(scrollView: UIScrollView): void;
}

export class NSTextViewportLayoutControllerDelegateImpl extends NSObject implements NSTextViewportLayoutControllerDelegate {
  static ObjCProtocols = [NSTextViewportLayoutControllerDelegate];
  static {
    NativeClass(this);
  }

  viewportBoundsForTextViewportLayoutController(textViewportLayoutController: NSTextViewportLayoutController): CGRect {
    throw new Error("Please provide implementation for: NSTextViewportLayoutControllerDelegate > viewportBoundsForTextViewportLayoutController");
  }
  textViewportLayoutControllerConfigureRenderingSurfaceForTextLayoutFragment(textViewportLayoutController: NSTextViewportLayoutController, textLayoutFragment: NSTextLayoutFragment): void {
    throw new Error("Please provide implementation for: NSTextViewportLayoutControllerDelegate > textViewportLayoutControllerConfigureRenderingSurfaceForTextLayoutFragment");
  }
  textViewportLayoutControllerWillLayout?(textViewportLayoutController: NSTextViewportLayoutController): void;
  textViewportLayoutControllerDidLayout?(textViewportLayoutController: NSTextViewportLayoutController): void;
}

export class UILargeContentViewerInteractionDelegateImpl extends NSObject implements UILargeContentViewerInteractionDelegate {
  static ObjCProtocols = [UILargeContentViewerInteractionDelegate];
  static {
    NativeClass(this);
  }

  largeContentViewerInteractionDidEndOnItemAtPoint?(interaction: UILargeContentViewerInteraction, item: UILargeContentViewerItem | null, point: CGPoint): void;
  largeContentViewerInteractionItemAtPoint?(interaction: UILargeContentViewerInteraction, point: CGPoint): UILargeContentViewerItem;
  viewControllerForLargeContentViewerInteraction?(interaction: UILargeContentViewerInteraction): UIViewController;
}

export class UITableViewDropDelegateImpl extends NSObject implements UITableViewDropDelegate {
  static ObjCProtocols = [UITableViewDropDelegate];
  static {
    NativeClass(this);
  }

  tableViewPerformDropWithCoordinator(tableView: UITableView, coordinator: UITableViewDropCoordinator): void {
    throw new Error("Please provide implementation for: UITableViewDropDelegate > tableViewPerformDropWithCoordinator");
  }
  tableViewCanHandleDropSession?(tableView: UITableView, session: UIDropSession): boolean;
  tableViewDropSessionDidEnter?(tableView: UITableView, session: UIDropSession): void;
  tableViewDropSessionDidUpdateWithDestinationIndexPath?(tableView: UITableView, session: UIDropSession, destinationIndexPath: NSIndexPath | null): UITableViewDropProposal;
  tableViewDropSessionDidExit?(tableView: UITableView, session: UIDropSession): void;
  tableViewDropSessionDidEnd?(tableView: UITableView, session: UIDropSession): void;
  tableViewDropPreviewParametersForRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): UIDragPreviewParameters;
}

export class UIIndirectScribbleInteractionDelegateImpl extends NSObject implements UIIndirectScribbleInteractionDelegate {
  static ObjCProtocols = [UIIndirectScribbleInteractionDelegate];
  static {
    NativeClass(this);
  }

  indirectScribbleInteractionRequestElementsInRectCompletion(interaction: UIIndirectScribbleInteraction, rect: CGRect, completion: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): void {
    throw new Error("Please provide implementation for: UIIndirectScribbleInteractionDelegate > indirectScribbleInteractionRequestElementsInRectCompletion");
  }
  indirectScribbleInteractionIsElementFocused(interaction: UIIndirectScribbleInteraction, elementIdentifier: NSCopying): boolean {
    throw new Error("Please provide implementation for: UIIndirectScribbleInteractionDelegate > indirectScribbleInteractionIsElementFocused");
  }
  indirectScribbleInteractionFrameForElement(interaction: UIIndirectScribbleInteraction, elementIdentifier: NSCopying): CGRect {
    throw new Error("Please provide implementation for: UIIndirectScribbleInteractionDelegate > indirectScribbleInteractionFrameForElement");
  }
  indirectScribbleInteractionFocusElementIfNeededReferencePointCompletion(interaction: UIIndirectScribbleInteraction, elementIdentifier: NSCopying, focusReferencePoint: CGPoint, completion: (p1: UIResponder) => void | null): void {
    throw new Error("Please provide implementation for: UIIndirectScribbleInteractionDelegate > indirectScribbleInteractionFocusElementIfNeededReferencePointCompletion");
  }
  indirectScribbleInteractionShouldDelayFocusForElement?(interaction: UIIndirectScribbleInteraction, elementIdentifier: NSCopying): boolean;
  indirectScribbleInteractionWillBeginWritingInElement?(interaction: UIIndirectScribbleInteraction, elementIdentifier: NSCopying): void;
  indirectScribbleInteractionDidFinishWritingInElement?(interaction: UIIndirectScribbleInteraction, elementIdentifier: NSCopying): void;
}

export class UIImagePickerControllerDelegateImpl extends NSObject implements UIImagePickerControllerDelegate {
  static ObjCProtocols = [UIImagePickerControllerDelegate];
  static {
    NativeClass(this);
  }

  imagePickerControllerDidFinishPickingImageEditingInfo?(picker: UIImagePickerController, image: UIImage, editingInfo: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object> | null): void;
  imagePickerControllerDidFinishPickingMediaWithInfo?(picker: UIImagePickerController, info: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): void;
  imagePickerControllerDidCancel?(picker: UIImagePickerController): void;
}

export class UINavigationControllerDelegateImpl extends NSObject implements UINavigationControllerDelegate {
  static ObjCProtocols = [UINavigationControllerDelegate];
  static {
    NativeClass(this);
  }

  navigationControllerWillShowViewControllerAnimated?(navigationController: UINavigationController, viewController: UIViewController, animated: boolean): void;
  navigationControllerDidShowViewControllerAnimated?(navigationController: UINavigationController, viewController: UIViewController, animated: boolean): void;
  navigationControllerSupportedInterfaceOrientations?(navigationController: UINavigationController): interop.Enum<typeof UIInterfaceOrientationMask>;
  navigationControllerPreferredInterfaceOrientationForPresentation?(navigationController: UINavigationController): interop.Enum<typeof UIInterfaceOrientation>;
  navigationControllerInteractionControllerForAnimationController?(navigationController: UINavigationController, animationController: UIViewControllerAnimatedTransitioning): UIViewControllerInteractiveTransitioning;
  navigationControllerAnimationControllerForOperationFromViewControllerToViewController?(navigationController: UINavigationController, operation: interop.Enum<typeof UINavigationControllerOperation>, fromVC: UIViewController, toVC: UIViewController): UIViewControllerAnimatedTransitioning;
}

export class UINavigationItemRenameDelegateImpl extends NSObject implements UINavigationItemRenameDelegate {
  static ObjCProtocols = [UINavigationItemRenameDelegate];
  static {
    NativeClass(this);
  }

  navigationItemDidEndRenamingWithTitle(navigationItem: UINavigationItem, title: string): void {
    throw new Error("Please provide implementation for: UINavigationItemRenameDelegate > navigationItemDidEndRenamingWithTitle");
  }
  navigationItemShouldBeginRenaming?(navigationItem: UINavigationItem): boolean;
  navigationItemWillBeginRenamingWithSuggestedTitleSelectedRange?(navigationItem: UINavigationItem, title: string, selectedRange: interop.PointerConvertible): string;
  navigationItemShouldEndRenamingWithTitle?(navigationItem: UINavigationItem, title: string): boolean;
}

export class UITextPasteDelegateImpl extends NSObject implements UITextPasteDelegate {
  static ObjCProtocols = [UITextPasteDelegate];
  static {
    NativeClass(this);
  }

  textPasteConfigurationSupportingTransformPasteItem?(textPasteConfigurationSupporting: UITextPasteConfigurationSupporting, item: UITextPasteItem): void;
  textPasteConfigurationSupportingCombineItemAttributedStringsForRange?(textPasteConfigurationSupporting: UITextPasteConfigurationSupporting, itemStrings: NSArray<interop.Object> | Array<interop.Object>, textRange: UITextRange): NSAttributedString;
  textPasteConfigurationSupportingPerformPasteOfAttributedStringToRange?(textPasteConfigurationSupporting: UITextPasteConfigurationSupporting, attributedString: NSAttributedString, textRange: UITextRange): UITextRange;
  textPasteConfigurationSupportingShouldAnimatePasteOfAttributedStringToRange?(textPasteConfigurationSupporting: UITextPasteConfigurationSupporting, attributedString: NSAttributedString, textRange: UITextRange): boolean;
}

export class UIPageViewControllerDelegateImpl extends NSObject implements UIPageViewControllerDelegate {
  static ObjCProtocols = [UIPageViewControllerDelegate];
  static {
    NativeClass(this);
  }

  pageViewControllerWillTransitionToViewControllers?(pageViewController: UIPageViewController, pendingViewControllers: NSArray<interop.Object> | Array<interop.Object>): void;
  pageViewControllerDidFinishAnimatingPreviousViewControllersTransitionCompleted?(pageViewController: UIPageViewController, finished: boolean, previousViewControllers: NSArray<interop.Object> | Array<interop.Object>, completed: boolean): void;
  pageViewControllerSpineLocationForInterfaceOrientation?(pageViewController: UIPageViewController, orientation: interop.Enum<typeof UIInterfaceOrientation>): interop.Enum<typeof UIPageViewControllerSpineLocation>;
  pageViewControllerSupportedInterfaceOrientations?(pageViewController: UIPageViewController): interop.Enum<typeof UIInterfaceOrientationMask>;
  pageViewControllerPreferredInterfaceOrientationForPresentation?(pageViewController: UIPageViewController): interop.Enum<typeof UIInterfaceOrientation>;
}

export class UITableViewDelegateImpl extends NSObject implements UITableViewDelegate {
  static ObjCProtocols = [UITableViewDelegate];
  static {
    NativeClass(this);
  }

  tableViewWillDisplayCellForRowAtIndexPath?(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;
  tableViewWillDisplayHeaderViewForSection?(tableView: UITableView, view: UIView, section: number): void;
  tableViewWillDisplayFooterViewForSection?(tableView: UITableView, view: UIView, section: number): void;
  tableViewDidEndDisplayingCellForRowAtIndexPath?(tableView: UITableView, cell: UITableViewCell, indexPath: NSIndexPath): void;
  tableViewDidEndDisplayingHeaderViewForSection?(tableView: UITableView, view: UIView, section: number): void;
  tableViewDidEndDisplayingFooterViewForSection?(tableView: UITableView, view: UIView, section: number): void;
  tableViewHeightForRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): number;
  tableViewHeightForHeaderInSection?(tableView: UITableView, section: number): number;
  tableViewHeightForFooterInSection?(tableView: UITableView, section: number): number;
  tableViewEstimatedHeightForRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): number;
  tableViewEstimatedHeightForHeaderInSection?(tableView: UITableView, section: number): number;
  tableViewEstimatedHeightForFooterInSection?(tableView: UITableView, section: number): number;
  tableViewViewForHeaderInSection?(tableView: UITableView, section: number): UIView;
  tableViewViewForFooterInSection?(tableView: UITableView, section: number): UIView;
  tableViewAccessoryTypeForRowWithIndexPath?(tableView: UITableView, indexPath: NSIndexPath): interop.Enum<typeof UITableViewCellAccessoryType>;
  tableViewAccessoryButtonTappedForRowWithIndexPath?(tableView: UITableView, indexPath: NSIndexPath): void;
  tableViewShouldHighlightRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): boolean;
  tableViewDidHighlightRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): void;
  tableViewDidUnhighlightRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): void;
  tableViewWillSelectRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;
  tableViewWillDeselectRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;
  tableViewDidSelectRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): void;
  tableViewDidDeselectRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): void;
  tableViewCanPerformPrimaryActionForRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): boolean;
  tableViewPerformPrimaryActionForRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): void;
  tableViewEditingStyleForRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): interop.Enum<typeof UITableViewCellEditingStyle>;
  tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): string;
  tableViewEditActionsForRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): NSArray;
  tableViewLeadingSwipeActionsConfigurationForRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;
  tableViewTrailingSwipeActionsConfigurationForRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): UISwipeActionsConfiguration;
  tableViewShouldIndentWhileEditingRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): boolean;
  tableViewWillBeginEditingRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): void;
  tableViewDidEndEditingRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath | null): void;
  tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath?(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;
  tableViewIndentationLevelForRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): number;
  tableViewShouldShowMenuForRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): boolean;
  tableViewCanPerformActionForRowAtIndexPathWithSender?(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: interop.Object | null): boolean;
  tableViewPerformActionForRowAtIndexPathWithSender?(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: interop.Object | null): void;
  tableViewCanFocusRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): boolean;
  tableViewShouldUpdateFocusInContext?(tableView: UITableView, context: UITableViewFocusUpdateContext): boolean;
  tableViewDidUpdateFocusInContextWithAnimationCoordinator?(tableView: UITableView, context: UITableViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;
  indexPathForPreferredFocusedViewInTableView?(tableView: UITableView): NSIndexPath;
  tableViewSelectionFollowsFocusForRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): boolean;
  tableViewShouldSpringLoadRowAtIndexPathWithContext?(tableView: UITableView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;
  tableViewShouldBeginMultipleSelectionInteractionAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): boolean;
  tableViewDidBeginMultipleSelectionInteractionAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): void;
  tableViewDidEndMultipleSelectionInteraction?(tableView: UITableView): void;
  tableViewContextMenuConfigurationForRowAtIndexPathPoint?(tableView: UITableView, indexPath: NSIndexPath, point: CGPoint): UIContextMenuConfiguration;
  tableViewPreviewForHighlightingContextMenuWithConfiguration?(tableView: UITableView, configuration: UIContextMenuConfiguration): UITargetedPreview;
  tableViewPreviewForDismissingContextMenuWithConfiguration?(tableView: UITableView, configuration: UIContextMenuConfiguration): UITargetedPreview;
  tableViewWillPerformPreviewActionForMenuWithConfigurationAnimator?(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionCommitAnimating): void;
  tableViewWillDisplayContextMenuWithConfigurationAnimator?(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating | null): void;
  tableViewWillEndContextMenuInteractionWithConfigurationAnimator?(tableView: UITableView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating | null): void;
}

export class UICollisionBehaviorDelegateImpl extends NSObject implements UICollisionBehaviorDelegate {
  static ObjCProtocols = [UICollisionBehaviorDelegate];
  static {
    NativeClass(this);
  }

  collisionBehaviorBeganContactForItemWithItemAtPoint?(behavior: UICollisionBehavior, item1: UIDynamicItem, item2: UIDynamicItem, p: CGPoint): void;
  collisionBehaviorEndedContactForItemWithItem?(behavior: UICollisionBehavior, item1: UIDynamicItem, item2: UIDynamicItem): void;
  collisionBehaviorBeganContactForItemWithBoundaryIdentifierAtPoint?(behavior: UICollisionBehavior, item: UIDynamicItem, identifier: NSCopying | null, p: CGPoint): void;
  collisionBehaviorEndedContactForItemWithBoundaryIdentifier?(behavior: UICollisionBehavior, item: UIDynamicItem, identifier: NSCopying | null): void;
}

export class UICollectionViewDelegateFlowLayoutImpl extends NSObject implements UICollectionViewDelegateFlowLayout {
  static ObjCProtocols = [UICollectionViewDelegateFlowLayout];
  static {
    NativeClass(this);
  }

  collectionViewLayoutSizeForItemAtIndexPath?(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, indexPath: NSIndexPath): CGSize;
  collectionViewLayoutInsetForSectionAtIndex?(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): UIEdgeInsets;
  collectionViewLayoutMinimumLineSpacingForSectionAtIndex?(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): number;
  collectionViewLayoutMinimumInteritemSpacingForSectionAtIndex?(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): number;
  collectionViewLayoutReferenceSizeForHeaderInSection?(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): CGSize;
  collectionViewLayoutReferenceSizeForFooterInSection?(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): CGSize;
}

export class UISearchBarDelegateImpl extends NSObject implements UISearchBarDelegate {
  static ObjCProtocols = [UISearchBarDelegate];
  static {
    NativeClass(this);
  }

  searchBarShouldBeginEditing?(searchBar: UISearchBar): boolean;
  searchBarTextDidBeginEditing?(searchBar: UISearchBar): void;
  searchBarShouldEndEditing?(searchBar: UISearchBar): boolean;
  searchBarTextDidEndEditing?(searchBar: UISearchBar): void;
  searchBarTextDidChange?(searchBar: UISearchBar, searchText: string): void;
  searchBarShouldChangeTextInRangeReplacementText?(searchBar: UISearchBar, range: _NSRange, text: string): boolean;
  searchBarSearchButtonClicked?(searchBar: UISearchBar): void;
  searchBarBookmarkButtonClicked?(searchBar: UISearchBar): void;
  searchBarCancelButtonClicked?(searchBar: UISearchBar): void;
  searchBarResultsListButtonClicked?(searchBar: UISearchBar): void;
  searchBarSelectedScopeButtonIndexDidChange?(searchBar: UISearchBar, selectedScope: number): void;
}

export class UICollectionViewDropDelegateImpl extends NSObject implements UICollectionViewDropDelegate {
  static ObjCProtocols = [UICollectionViewDropDelegate];
  static {
    NativeClass(this);
  }

  collectionViewPerformDropWithCoordinator(collectionView: UICollectionView, coordinator: UICollectionViewDropCoordinator): void {
    throw new Error("Please provide implementation for: UICollectionViewDropDelegate > collectionViewPerformDropWithCoordinator");
  }
  collectionViewCanHandleDropSession?(collectionView: UICollectionView, session: UIDropSession): boolean;
  collectionViewDropSessionDidEnter?(collectionView: UICollectionView, session: UIDropSession): void;
  collectionViewDropSessionDidUpdateWithDestinationIndexPath?(collectionView: UICollectionView, session: UIDropSession, destinationIndexPath: NSIndexPath | null): UICollectionViewDropProposal;
  collectionViewDropSessionDidExit?(collectionView: UICollectionView, session: UIDropSession): void;
  collectionViewDropSessionDidEnd?(collectionView: UICollectionView, session: UIDropSession): void;
  collectionViewDropPreviewParametersForItemAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): UIDragPreviewParameters;
}

export class UIEditMenuInteractionDelegateImpl extends NSObject implements UIEditMenuInteractionDelegate {
  static ObjCProtocols = [UIEditMenuInteractionDelegate];
  static {
    NativeClass(this);
  }

  editMenuInteractionMenuForConfigurationSuggestedActions?(interaction: UIEditMenuInteraction, configuration: UIEditMenuConfiguration, suggestedActions: NSArray<interop.Object> | Array<interop.Object>): UIMenu;
  editMenuInteractionTargetRectForConfiguration?(interaction: UIEditMenuInteraction, configuration: UIEditMenuConfiguration): CGRect;
  editMenuInteractionWillPresentMenuForConfigurationAnimator?(interaction: UIEditMenuInteraction, configuration: UIEditMenuConfiguration, animator: UIEditMenuInteractionAnimating): void;
  editMenuInteractionWillDismissMenuForConfigurationAnimator?(interaction: UIEditMenuInteraction, configuration: UIEditMenuConfiguration, animator: UIEditMenuInteractionAnimating): void;
}

export class UIPickerViewDelegateImpl extends NSObject implements UIPickerViewDelegate {
  static ObjCProtocols = [UIPickerViewDelegate];
  static {
    NativeClass(this);
  }

  pickerViewWidthForComponent?(pickerView: UIPickerView, component: number): number;
  pickerViewRowHeightForComponent?(pickerView: UIPickerView, component: number): number;
  pickerViewTitleForRowForComponent?(pickerView: UIPickerView, row: number, component: number): string;
  pickerViewAttributedTitleForRowForComponent?(pickerView: UIPickerView, row: number, component: number): NSAttributedString;
  pickerViewViewForRowForComponentReusingView?(pickerView: UIPickerView, row: number, component: number, view: UIView | null): UIView;
  pickerViewDidSelectRowInComponent?(pickerView: UIPickerView, row: number, component: number): void;
}

export class UIAlertViewDelegateImpl extends NSObject implements UIAlertViewDelegate {
  static ObjCProtocols = [UIAlertViewDelegate];
  static {
    NativeClass(this);
  }

  alertViewClickedButtonAtIndex?(alertView: UIAlertView, buttonIndex: number): void;
  alertViewCancel?(alertView: UIAlertView): void;
  willPresentAlertView?(alertView: UIAlertView): void;
  didPresentAlertView?(alertView: UIAlertView): void;
  alertViewWillDismissWithButtonIndex?(alertView: UIAlertView, buttonIndex: number): void;
  alertViewDidDismissWithButtonIndex?(alertView: UIAlertView, buttonIndex: number): void;
  alertViewShouldEnableFirstOtherButton?(alertView: UIAlertView): boolean;
}

export class UITextFieldDelegateImpl extends NSObject implements UITextFieldDelegate {
  static ObjCProtocols = [UITextFieldDelegate];
  static {
    NativeClass(this);
  }

  textFieldShouldBeginEditing?(textField: UITextField): boolean;
  textFieldDidBeginEditing?(textField: UITextField): void;
  textFieldShouldEndEditing?(textField: UITextField): boolean;
  textFieldDidEndEditing?(textField: UITextField): void;
  textFieldDidEndEditingReason?(textField: UITextField, reason: interop.Enum<typeof UITextFieldDidEndEditingReason>): void;
  textFieldShouldChangeCharactersInRangeReplacementString?(textField: UITextField, range: _NSRange, string: string): boolean;
  textFieldDidChangeSelection?(textField: UITextField): void;
  textFieldShouldClear?(textField: UITextField): boolean;
  textFieldShouldReturn?(textField: UITextField): boolean;
  textFieldEditMenuForCharactersInRangeSuggestedActions?(textField: UITextField, range: _NSRange, suggestedActions: NSArray<interop.Object> | Array<interop.Object>): UIMenu;
  textFieldWillPresentEditMenuWithAnimator?(textField: UITextField, animator: UIEditMenuInteractionAnimating): void;
  textFieldWillDismissEditMenuWithAnimator?(textField: UITextField, animator: UIEditMenuInteractionAnimating): void;
}

export class UICollectionViewDelegateImpl extends NSObject implements UICollectionViewDelegate {
  static ObjCProtocols = [UICollectionViewDelegate];
  static {
    NativeClass(this);
  }

  collectionViewShouldHighlightItemAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;
  collectionViewDidHighlightItemAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): void;
  collectionViewDidUnhighlightItemAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): void;
  collectionViewShouldSelectItemAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;
  collectionViewShouldDeselectItemAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;
  collectionViewDidSelectItemAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): void;
  collectionViewDidDeselectItemAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): void;
  collectionViewCanPerformPrimaryActionForItemAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;
  collectionViewPerformPrimaryActionForItemAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): void;
  collectionViewWillDisplayCellForItemAtIndexPath?(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;
  collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath?(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;
  collectionViewDidEndDisplayingCellForItemAtIndexPath?(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;
  collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath?(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;
  collectionViewShouldShowMenuForItemAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;
  collectionViewCanPerformActionForItemAtIndexPathWithSender?(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: interop.Object | null): boolean;
  collectionViewPerformActionForItemAtIndexPathWithSender?(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: interop.Object | null): void;
  collectionViewTransitionLayoutForOldLayoutNewLayout?(collectionView: UICollectionView, fromLayout: UICollectionViewLayout, toLayout: UICollectionViewLayout): UICollectionViewTransitionLayout;
  collectionViewCanFocusItemAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;
  collectionViewShouldUpdateFocusInContext?(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext): boolean;
  collectionViewDidUpdateFocusInContextWithAnimationCoordinator?(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;
  indexPathForPreferredFocusedViewInCollectionView?(collectionView: UICollectionView): NSIndexPath;
  collectionViewSelectionFollowsFocusForItemAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;
  collectionViewTargetIndexPathForMoveOfItemFromOriginalIndexPathAtCurrentIndexPathToProposedIndexPath?(collectionView: UICollectionView, originalIndexPath: NSIndexPath, currentIndexPath: NSIndexPath, proposedIndexPath: NSIndexPath): NSIndexPath;
  collectionViewTargetIndexPathForMoveFromItemAtIndexPathToProposedIndexPath?(collectionView: UICollectionView, currentIndexPath: NSIndexPath, proposedIndexPath: NSIndexPath): NSIndexPath;
  collectionViewTargetContentOffsetForProposedContentOffset?(collectionView: UICollectionView, proposedContentOffset: CGPoint): CGPoint;
  collectionViewCanEditItemAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;
  collectionViewShouldSpringLoadItemAtIndexPathWithContext?(collectionView: UICollectionView, indexPath: NSIndexPath, context: UISpringLoadedInteractionContext): boolean;
  collectionViewShouldBeginMultipleSelectionInteractionAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;
  collectionViewDidBeginMultipleSelectionInteractionAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): void;
  collectionViewDidEndMultipleSelectionInteraction?(collectionView: UICollectionView): void;
  collectionViewContextMenuConfigurationForItemsAtIndexPathsPoint?(collectionView: UICollectionView, indexPaths: NSArray<interop.Object> | Array<interop.Object>, point: CGPoint): UIContextMenuConfiguration;
  collectionViewContextMenuConfigurationHighlightPreviewForItemAtIndexPath?(collectionView: UICollectionView, configuration: UIContextMenuConfiguration, indexPath: NSIndexPath): UITargetedPreview;
  collectionViewContextMenuConfigurationDismissalPreviewForItemAtIndexPath?(collectionView: UICollectionView, configuration: UIContextMenuConfiguration, indexPath: NSIndexPath): UITargetedPreview;
  collectionViewWillPerformPreviewActionForMenuWithConfigurationAnimator?(collectionView: UICollectionView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionCommitAnimating): void;
  collectionViewWillDisplayContextMenuWithConfigurationAnimator?(collectionView: UICollectionView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating | null): void;
  collectionViewWillEndContextMenuInteractionWithConfigurationAnimator?(collectionView: UICollectionView, configuration: UIContextMenuConfiguration, animator: UIContextMenuInteractionAnimating | null): void;
  collectionViewSceneActivationConfigurationForItemAtIndexPathPoint?(collectionView: UICollectionView, indexPath: NSIndexPath, point: CGPoint): UIWindowSceneActivationConfiguration;
  collectionViewContextMenuConfigurationForItemAtIndexPathPoint?(collectionView: UICollectionView, indexPath: NSIndexPath, point: CGPoint): UIContextMenuConfiguration;
  collectionViewPreviewForHighlightingContextMenuWithConfiguration?(collectionView: UICollectionView, configuration: UIContextMenuConfiguration): UITargetedPreview;
  collectionViewPreviewForDismissingContextMenuWithConfiguration?(collectionView: UICollectionView, configuration: UIContextMenuConfiguration): UITargetedPreview;
}

export class UITextDropDelegateImpl extends NSObject implements UITextDropDelegate {
  static ObjCProtocols = [UITextDropDelegate];
  static {
    NativeClass(this);
  }

  textDroppableViewWillBecomeEditableForDrop?(textDroppableView: UIView, drop: UITextDropRequest): interop.Enum<typeof UITextDropEditability>;
  textDroppableViewProposalForDrop?(textDroppableView: UIView, drop: UITextDropRequest): UITextDropProposal;
  textDroppableViewWillPerformDrop?(textDroppableView: UIView, drop: UITextDropRequest): void;
  textDroppableViewPreviewForDroppingAllItemsWithDefault?(textDroppableView: UIView, defaultPreview: UITargetedDragPreview): UITargetedDragPreview;
  textDroppableViewDropSessionDidEnter?(textDroppableView: UIView, session: UIDropSession): void;
  textDroppableViewDropSessionDidUpdate?(textDroppableView: UIView, session: UIDropSession): void;
  textDroppableViewDropSessionDidExit?(textDroppableView: UIView, session: UIDropSession): void;
  textDroppableViewDropSessionDidEnd?(textDroppableView: UIView, session: UIDropSession): void;
}

export class UISplitViewControllerDelegateImpl extends NSObject implements UISplitViewControllerDelegate {
  static ObjCProtocols = [UISplitViewControllerDelegate];
  static {
    NativeClass(this);
  }

  splitViewControllerWillChangeToDisplayMode?(svc: UISplitViewController, displayMode: interop.Enum<typeof UISplitViewControllerDisplayMode>): void;
  targetDisplayModeForActionInSplitViewController?(svc: UISplitViewController): interop.Enum<typeof UISplitViewControllerDisplayMode>;
  splitViewControllerShowViewControllerSender?(splitViewController: UISplitViewController, vc: UIViewController, sender: interop.Object | null): boolean;
  splitViewControllerShowDetailViewControllerSender?(splitViewController: UISplitViewController, vc: UIViewController, sender: interop.Object | null): boolean;
  primaryViewControllerForCollapsingSplitViewController?(splitViewController: UISplitViewController): UIViewController;
  primaryViewControllerForExpandingSplitViewController?(splitViewController: UISplitViewController): UIViewController;
  splitViewControllerCollapseSecondaryViewControllerOntoPrimaryViewController?(splitViewController: UISplitViewController, secondaryViewController: UIViewController, primaryViewController: UIViewController): boolean;
  splitViewControllerSeparateSecondaryViewControllerFromPrimaryViewController?(splitViewController: UISplitViewController, primaryViewController: UIViewController): UIViewController;
  splitViewControllerSupportedInterfaceOrientations?(splitViewController: UISplitViewController): interop.Enum<typeof UIInterfaceOrientationMask>;
  splitViewControllerPreferredInterfaceOrientationForPresentation?(splitViewController: UISplitViewController): interop.Enum<typeof UIInterfaceOrientation>;
  splitViewControllerWillHideViewControllerWithBarButtonItemForPopoverController?(svc: UISplitViewController, aViewController: UIViewController, barButtonItem: UIBarButtonItem, pc: UIPopoverController): void;
  splitViewControllerWillShowViewControllerInvalidatingBarButtonItem?(svc: UISplitViewController, aViewController: UIViewController, barButtonItem: UIBarButtonItem): void;
  splitViewControllerPopoverControllerWillPresentViewController?(svc: UISplitViewController, pc: UIPopoverController, aViewController: UIViewController): void;
  splitViewControllerShouldHideViewControllerInOrientation?(svc: UISplitViewController, vc: UIViewController, orientation: interop.Enum<typeof UIInterfaceOrientation>): boolean;
  splitViewControllerTopColumnForCollapsingToProposedTopColumn?(svc: UISplitViewController, proposedTopColumn: interop.Enum<typeof UISplitViewControllerColumn>): interop.Enum<typeof UISplitViewControllerColumn>;
  splitViewControllerDisplayModeForExpandingToProposedDisplayMode?(svc: UISplitViewController, proposedDisplayMode: interop.Enum<typeof UISplitViewControllerDisplayMode>): interop.Enum<typeof UISplitViewControllerDisplayMode>;
  splitViewControllerDidCollapse?(svc: UISplitViewController): void;
  splitViewControllerDidExpand?(svc: UISplitViewController): void;
  splitViewControllerWillShowColumn?(svc: UISplitViewController, column: interop.Enum<typeof UISplitViewControllerColumn>): void;
  splitViewControllerWillHideColumn?(svc: UISplitViewController, column: interop.Enum<typeof UISplitViewControllerColumn>): void;
  splitViewControllerInteractivePresentationGestureWillBegin?(svc: UISplitViewController): void;
  splitViewControllerInteractivePresentationGestureDidEnd?(svc: UISplitViewController): void;
}

export class UIBarPositioningDelegateImpl extends NSObject implements UIBarPositioningDelegate {
  static ObjCProtocols = [UIBarPositioningDelegate];
  static {
    NativeClass(this);
  }

  positionForBar?(bar: UIBarPositioning): interop.Enum<typeof UIBarPosition>;
}

export class UIWindowSceneDelegateImpl extends NSObject implements UIWindowSceneDelegate {
  static ObjCProtocols = [UIWindowSceneDelegate];
  static {
    NativeClass(this);
  }

  declare window: UIWindow;
  windowSceneDidUpdateCoordinateSpaceInterfaceOrientationTraitCollection?(windowScene: UIWindowScene, previousCoordinateSpace: UICoordinateSpace, previousInterfaceOrientation: interop.Enum<typeof UIInterfaceOrientation>, previousTraitCollection: UITraitCollection): void;
  windowScenePerformActionForShortcutItemCompletionHandler?(windowScene: UIWindowScene, shortcutItem: UIApplicationShortcutItem, completionHandler: (p1: boolean) => void): void;
  windowSceneUserDidAcceptCloudKitShareWithMetadata?(windowScene: UIWindowScene, cloudKitShareMetadata: CKShareMetadata): void;
}

export class UIDropInteractionDelegateImpl extends NSObject implements UIDropInteractionDelegate {
  static ObjCProtocols = [UIDropInteractionDelegate];
  static {
    NativeClass(this);
  }

  dropInteractionCanHandleSession?(interaction: UIDropInteraction, session: UIDropSession): boolean;
  dropInteractionSessionDidEnter?(interaction: UIDropInteraction, session: UIDropSession): void;
  dropInteractionSessionDidUpdate?(interaction: UIDropInteraction, session: UIDropSession): UIDropProposal;
  dropInteractionSessionDidExit?(interaction: UIDropInteraction, session: UIDropSession): void;
  dropInteractionPerformDrop?(interaction: UIDropInteraction, session: UIDropSession): void;
  dropInteractionConcludeDrop?(interaction: UIDropInteraction, session: UIDropSession): void;
  dropInteractionSessionDidEnd?(interaction: UIDropInteraction, session: UIDropSession): void;
  dropInteractionPreviewForDroppingItemWithDefault?(interaction: UIDropInteraction, item: UIDragItem, defaultPreview: UITargetedDragPreview): UITargetedDragPreview;
  dropInteractionItemWillAnimateDropWithAnimator?(interaction: UIDropInteraction, item: UIDragItem, animator: UIDragAnimating): void;
}

export class UIDocumentBrowserViewControllerDelegateImpl extends NSObject implements UIDocumentBrowserViewControllerDelegate {
  static ObjCProtocols = [UIDocumentBrowserViewControllerDelegate];
  static {
    NativeClass(this);
  }

  documentBrowserDidPickDocumentURLs?(controller: UIDocumentBrowserViewController, documentURLs: NSArray<interop.Object> | Array<interop.Object>): void;
  documentBrowserDidPickDocumentsAtURLs?(controller: UIDocumentBrowserViewController, documentURLs: NSArray<interop.Object> | Array<interop.Object>): void;
  documentBrowserDidRequestDocumentCreationWithHandler?(controller: UIDocumentBrowserViewController, importHandler: (p1: NSURL, p2: interop.Enum<typeof UIDocumentBrowserImportMode>) => void | null): void;
  documentBrowserDidImportDocumentAtURLToDestinationURL?(controller: UIDocumentBrowserViewController, sourceURL: NSURL, destinationURL: NSURL): void;
  documentBrowserFailedToImportDocumentAtURLError?(controller: UIDocumentBrowserViewController, documentURL: NSURL, error: NSError | null): void;
  documentBrowserApplicationActivitiesForDocumentURLs?(controller: UIDocumentBrowserViewController, documentURLs: NSArray<interop.Object> | Array<interop.Object>): NSArray;
  documentBrowserWillPresentActivityViewController?(controller: UIDocumentBrowserViewController, activityViewController: UIActivityViewController): void;
}

export class UIPickerViewAccessibilityDelegateImpl extends NSObject implements UIPickerViewAccessibilityDelegate {
  static ObjCProtocols = [UIPickerViewAccessibilityDelegate];
  static {
    NativeClass(this);
  }

  pickerViewAccessibilityLabelForComponent?(pickerView: UIPickerView, component: number): string;
  pickerViewAccessibilityHintForComponent?(pickerView: UIPickerView, component: number): string;
  pickerViewAccessibilityUserInputLabelsForComponent?(pickerView: UIPickerView, component: number): NSArray;
  pickerViewAccessibilityAttributedLabelForComponent?(pickerView: UIPickerView, component: number): NSAttributedString;
  pickerViewAccessibilityAttributedHintForComponent?(pickerView: UIPickerView, component: number): NSAttributedString;
  pickerViewAccessibilityAttributedUserInputLabelsForComponent?(pickerView: UIPickerView, component: number): NSArray;
}

export class NSTextLayoutManagerDelegateImpl extends NSObject implements NSTextLayoutManagerDelegate {
  static ObjCProtocols = [NSTextLayoutManagerDelegate];
  static {
    NativeClass(this);
  }

  textLayoutManagerTextLayoutFragmentForLocationInTextElement?(textLayoutManager: NSTextLayoutManager, location: NSTextLocation, textElement: NSTextElement): NSTextLayoutFragment;
  textLayoutManagerShouldBreakLineBeforeLocationHyphenating?(textLayoutManager: NSTextLayoutManager, location: NSTextLocation, hyphenating: boolean): boolean;
  textLayoutManagerRenderingAttributesForLinkAtLocationDefaultAttributes?(textLayoutManager: NSTextLayoutManager, link: interop.Object, location: NSTextLocation, renderingAttributes: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): NSDictionary;
}

export class UIDocumentInteractionControllerDelegateImpl extends NSObject implements UIDocumentInteractionControllerDelegate {
  static ObjCProtocols = [UIDocumentInteractionControllerDelegate];
  static {
    NativeClass(this);
  }

  documentInteractionControllerViewControllerForPreview?(controller: UIDocumentInteractionController): UIViewController;
  documentInteractionControllerRectForPreview?(controller: UIDocumentInteractionController): CGRect;
  documentInteractionControllerViewForPreview?(controller: UIDocumentInteractionController): UIView;
  documentInteractionControllerWillBeginPreview?(controller: UIDocumentInteractionController): void;
  documentInteractionControllerDidEndPreview?(controller: UIDocumentInteractionController): void;
  documentInteractionControllerWillPresentOptionsMenu?(controller: UIDocumentInteractionController): void;
  documentInteractionControllerDidDismissOptionsMenu?(controller: UIDocumentInteractionController): void;
  documentInteractionControllerWillPresentOpenInMenu?(controller: UIDocumentInteractionController): void;
  documentInteractionControllerDidDismissOpenInMenu?(controller: UIDocumentInteractionController): void;
  documentInteractionControllerWillBeginSendingToApplication?(controller: UIDocumentInteractionController, application: string | null): void;
  documentInteractionControllerDidEndSendingToApplication?(controller: UIDocumentInteractionController, application: string | null): void;
  documentInteractionControllerCanPerformAction?(controller: UIDocumentInteractionController, action: string | null): boolean;
  documentInteractionControllerPerformAction?(controller: UIDocumentInteractionController, action: string | null): boolean;
}

export class UIToolTipInteractionDelegateImpl extends NSObject implements UIToolTipInteractionDelegate {
  static ObjCProtocols = [UIToolTipInteractionDelegate];
  static {
    NativeClass(this);
  }

  toolTipInteractionConfigurationAtPoint?(interaction: UIToolTipInteraction, point: CGPoint): UIToolTipConfiguration;
}

export class UITextDragDelegateImpl extends NSObject implements UITextDragDelegate {
  static ObjCProtocols = [UITextDragDelegate];
  static {
    NativeClass(this);
  }

  textDraggableViewItemsForDrag?(textDraggableView: UIView, dragRequest: UITextDragRequest): NSArray;
  textDraggableViewDragPreviewForLiftingItemSession?(textDraggableView: UIView, item: UIDragItem, session: UIDragSession): UITargetedDragPreview;
  textDraggableViewWillAnimateLiftWithAnimatorSession?(textDraggableView: UIView, animator: UIDragAnimating, session: UIDragSession): void;
  textDraggableViewDragSessionWillBegin?(textDraggableView: UIView, session: UIDragSession): void;
  textDraggableViewDragSessionDidEndWithOperation?(textDraggableView: UIView, session: UIDragSession, operation: interop.Enum<typeof UIDropOperation>): void;
}

export class UIFindInteractionDelegateImpl extends NSObject implements UIFindInteractionDelegate {
  static ObjCProtocols = [UIFindInteractionDelegate];
  static {
    NativeClass(this);
  }

  findInteractionSessionForView(interaction: UIFindInteraction, view: UIView): UIFindSession {
    throw new Error("Please provide implementation for: UIFindInteractionDelegate > findInteractionSessionForView");
  }
  findInteractionDidBeginFindSession?(interaction: UIFindInteraction, session: UIFindSession): void;
  findInteractionDidEndFindSession?(interaction: UIFindInteraction, session: UIFindSession): void;
}

export class UIAccelerometerDelegateImpl extends NSObject implements UIAccelerometerDelegate {
  static ObjCProtocols = [UIAccelerometerDelegate];
  static {
    NativeClass(this);
  }

  accelerometerDidAccelerate?(accelerometer: UIAccelerometer, acceleration: UIAcceleration): void;
}

export class UIScrollViewAccessibilityDelegateImpl extends NSObject implements UIScrollViewAccessibilityDelegate {
  static ObjCProtocols = [UIScrollViewAccessibilityDelegate];
  static {
    NativeClass(this);
  }

  accessibilityScrollStatusForScrollView?(scrollView: UIScrollView): string;
  accessibilityAttributedScrollStatusForScrollView?(scrollView: UIScrollView): NSAttributedString;
}

export class UIPreviewInteractionDelegateImpl extends NSObject implements UIPreviewInteractionDelegate {
  static ObjCProtocols = [UIPreviewInteractionDelegate];
  static {
    NativeClass(this);
  }

  previewInteractionDidUpdatePreviewTransitionEnded(previewInteraction: UIPreviewInteraction, transitionProgress: number, ended: boolean): void {
    throw new Error("Please provide implementation for: UIPreviewInteractionDelegate > previewInteractionDidUpdatePreviewTransitionEnded");
  }
  previewInteractionDidCancel(previewInteraction: UIPreviewInteraction): void {
    throw new Error("Please provide implementation for: UIPreviewInteractionDelegate > previewInteractionDidCancel");
  }
  previewInteractionShouldBegin?(previewInteraction: UIPreviewInteraction): boolean;
  previewInteractionDidUpdateCommitTransitionEnded?(previewInteraction: UIPreviewInteraction, transitionProgress: number, ended: boolean): void;
}

export class UITableViewDragDelegateImpl extends NSObject implements UITableViewDragDelegate {
  static ObjCProtocols = [UITableViewDragDelegate];
  static {
    NativeClass(this);
  }

  tableViewItemsForBeginningDragSessionAtIndexPath(tableView: UITableView, session: UIDragSession, indexPath: NSIndexPath): NSArray {
    throw new Error("Please provide implementation for: UITableViewDragDelegate > tableViewItemsForBeginningDragSessionAtIndexPath");
  }
  tableViewItemsForAddingToDragSessionAtIndexPathPoint?(tableView: UITableView, session: UIDragSession, indexPath: NSIndexPath, point: CGPoint): NSArray;
  tableViewDragPreviewParametersForRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): UIDragPreviewParameters;
  tableViewDragSessionWillBegin?(tableView: UITableView, session: UIDragSession): void;
  tableViewDragSessionDidEnd?(tableView: UITableView, session: UIDragSession): void;
  tableViewDragSessionAllowsMoveOperation?(tableView: UITableView, session: UIDragSession): boolean;
  tableViewDragSessionIsRestrictedToDraggingApplication?(tableView: UITableView, session: UIDragSession): boolean;
}

export class UIFontPickerViewControllerDelegateImpl extends NSObject implements UIFontPickerViewControllerDelegate {
  static ObjCProtocols = [UIFontPickerViewControllerDelegate];
  static {
    NativeClass(this);
  }

  fontPickerViewControllerDidCancel?(viewController: UIFontPickerViewController): void;
  fontPickerViewControllerDidPickFont?(viewController: UIFontPickerViewController): void;
}

export class UITabBarControllerDelegateImpl extends NSObject implements UITabBarControllerDelegate {
  static ObjCProtocols = [UITabBarControllerDelegate];
  static {
    NativeClass(this);
  }

  tabBarControllerShouldSelectViewController?(tabBarController: UITabBarController, viewController: UIViewController): boolean;
  tabBarControllerDidSelectViewController?(tabBarController: UITabBarController, viewController: UIViewController): void;
  tabBarControllerWillBeginCustomizingViewControllers?(tabBarController: UITabBarController, viewControllers: NSArray<interop.Object> | Array<interop.Object>): void;
  tabBarControllerWillEndCustomizingViewControllersChanged?(tabBarController: UITabBarController, viewControllers: NSArray<interop.Object> | Array<interop.Object>, changed: boolean): void;
  tabBarControllerDidEndCustomizingViewControllersChanged?(tabBarController: UITabBarController, viewControllers: NSArray<interop.Object> | Array<interop.Object>, changed: boolean): void;
  tabBarControllerSupportedInterfaceOrientations?(tabBarController: UITabBarController): interop.Enum<typeof UIInterfaceOrientationMask>;
  tabBarControllerPreferredInterfaceOrientationForPresentation?(tabBarController: UITabBarController): interop.Enum<typeof UIInterfaceOrientation>;
  tabBarControllerInteractionControllerForAnimationController?(tabBarController: UITabBarController, animationController: UIViewControllerAnimatedTransitioning): UIViewControllerInteractiveTransitioning;
  tabBarControllerAnimationControllerForTransitionFromViewControllerToViewController?(tabBarController: UITabBarController, fromVC: UIViewController, toVC: UIViewController): UIViewControllerAnimatedTransitioning;
}

export class UICloudSharingControllerDelegateImpl extends NSObject implements UICloudSharingControllerDelegate {
  static ObjCProtocols = [UICloudSharingControllerDelegate];
  static {
    NativeClass(this);
  }

  cloudSharingControllerFailedToSaveShareWithError(csc: UICloudSharingController, error: NSError): void {
    throw new Error("Please provide implementation for: UICloudSharingControllerDelegate > cloudSharingControllerFailedToSaveShareWithError");
  }
  itemTitleForCloudSharingController(csc: UICloudSharingController): string {
    throw new Error("Please provide implementation for: UICloudSharingControllerDelegate > itemTitleForCloudSharingController");
  }
  itemThumbnailDataForCloudSharingController?(csc: UICloudSharingController): NSData;
  itemTypeForCloudSharingController?(csc: UICloudSharingController): string;
  cloudSharingControllerDidSaveShare?(csc: UICloudSharingController): void;
  cloudSharingControllerDidStopSharing?(csc: UICloudSharingController): void;
}

export class UIGestureRecognizerDelegateImpl extends NSObject implements UIGestureRecognizerDelegate {
  static ObjCProtocols = [UIGestureRecognizerDelegate];
  static {
    NativeClass(this);
  }

  gestureRecognizerShouldBegin?(gestureRecognizer: UIGestureRecognizer): boolean;
  gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer?(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;
  gestureRecognizerShouldRequireFailureOfGestureRecognizer?(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;
  gestureRecognizerShouldBeRequiredToFailByGestureRecognizer?(gestureRecognizer: UIGestureRecognizer, otherGestureRecognizer: UIGestureRecognizer): boolean;
  gestureRecognizerShouldReceiveTouch?(gestureRecognizer: UIGestureRecognizer, touch: UITouch): boolean;
  gestureRecognizerShouldReceivePress?(gestureRecognizer: UIGestureRecognizer, press: UIPress): boolean;
  gestureRecognizerShouldReceiveEvent?(gestureRecognizer: UIGestureRecognizer, event: UIEvent): boolean;
}

export class UIGuidedAccessRestrictionDelegateImpl extends NSObject implements UIGuidedAccessRestrictionDelegate {
  static ObjCProtocols = [UIGuidedAccessRestrictionDelegate];
  static {
    NativeClass(this);
  }

  declare readonly guidedAccessRestrictionIdentifiers: NSArray;
  guidedAccessRestrictionWithIdentifierDidChangeState(restrictionIdentifier: string, newRestrictionState: interop.Enum<typeof UIGuidedAccessRestrictionState>): void {
    throw new Error("Please provide implementation for: UIGuidedAccessRestrictionDelegate > guidedAccessRestrictionWithIdentifierDidChangeState");
  }
  textForGuidedAccessRestrictionWithIdentifier(restrictionIdentifier: string): string {
    throw new Error("Please provide implementation for: UIGuidedAccessRestrictionDelegate > textForGuidedAccessRestrictionWithIdentifier");
  }
  detailTextForGuidedAccessRestrictionWithIdentifier?(restrictionIdentifier: string): string;
}

export class UITextSelectionDisplayInteractionDelegateImpl extends NSObject implements UITextSelectionDisplayInteractionDelegate {
  static ObjCProtocols = [UITextSelectionDisplayInteractionDelegate];
  static {
    NativeClass(this);
  }

  selectionContainerViewBelowTextForSelectionDisplayInteraction?(interaction: UITextSelectionDisplayInteraction): UIView;
}

export class UINavigationBarDelegateImpl extends NSObject implements UINavigationBarDelegate {
  static ObjCProtocols = [UINavigationBarDelegate];
  static {
    NativeClass(this);
  }

  navigationBarShouldPushItem?(navigationBar: UINavigationBar, item: UINavigationItem): boolean;
  navigationBarDidPushItem?(navigationBar: UINavigationBar, item: UINavigationItem): void;
  navigationBarShouldPopItem?(navigationBar: UINavigationBar, item: UINavigationItem): boolean;
  navigationBarDidPopItem?(navigationBar: UINavigationBar, item: UINavigationItem): void;
  navigationBarNSToolbarSection?(navigationBar: UINavigationBar): interop.Enum<typeof UINavigationBarNSToolbarSection>;
}

export class UISearchDisplayDelegateImpl extends NSObject implements UISearchDisplayDelegate {
  static ObjCProtocols = [UISearchDisplayDelegate];
  static {
    NativeClass(this);
  }

  searchDisplayControllerWillBeginSearch?(controller: UISearchDisplayController): void;
  searchDisplayControllerDidBeginSearch?(controller: UISearchDisplayController): void;
  searchDisplayControllerWillEndSearch?(controller: UISearchDisplayController): void;
  searchDisplayControllerDidEndSearch?(controller: UISearchDisplayController): void;
  searchDisplayControllerDidLoadSearchResultsTableView?(controller: UISearchDisplayController, tableView: UITableView): void;
  searchDisplayControllerWillUnloadSearchResultsTableView?(controller: UISearchDisplayController, tableView: UITableView): void;
  searchDisplayControllerWillShowSearchResultsTableView?(controller: UISearchDisplayController, tableView: UITableView): void;
  searchDisplayControllerDidShowSearchResultsTableView?(controller: UISearchDisplayController, tableView: UITableView): void;
  searchDisplayControllerWillHideSearchResultsTableView?(controller: UISearchDisplayController, tableView: UITableView): void;
  searchDisplayControllerDidHideSearchResultsTableView?(controller: UISearchDisplayController, tableView: UITableView): void;
  searchDisplayControllerShouldReloadTableForSearchString?(controller: UISearchDisplayController, searchString: string | null): boolean;
  searchDisplayControllerShouldReloadTableForSearchScope?(controller: UISearchDisplayController, searchOption: number): boolean;
}

export class UIScribbleInteractionDelegateImpl extends NSObject implements UIScribbleInteractionDelegate {
  static ObjCProtocols = [UIScribbleInteractionDelegate];
  static {
    NativeClass(this);
  }

  scribbleInteractionShouldBeginAtLocation?(interaction: UIScribbleInteraction, location: CGPoint): boolean;
  scribbleInteractionShouldDelayFocus?(interaction: UIScribbleInteraction): boolean;
  scribbleInteractionWillBeginWriting?(interaction: UIScribbleInteraction): void;
  scribbleInteractionDidFinishWriting?(interaction: UIScribbleInteraction): void;
}

export class UIActionSheetDelegateImpl extends NSObject implements UIActionSheetDelegate {
  static ObjCProtocols = [UIActionSheetDelegate];
  static {
    NativeClass(this);
  }

  actionSheetClickedButtonAtIndex?(actionSheet: UIActionSheet, buttonIndex: number): void;
  actionSheetCancel?(actionSheet: UIActionSheet): void;
  willPresentActionSheet?(actionSheet: UIActionSheet): void;
  didPresentActionSheet?(actionSheet: UIActionSheet): void;
  actionSheetWillDismissWithButtonIndex?(actionSheet: UIActionSheet, buttonIndex: number): void;
  actionSheetDidDismissWithButtonIndex?(actionSheet: UIActionSheet, buttonIndex: number): void;
}

export class NSTextContentManagerDelegateImpl extends NSObject implements NSTextContentManagerDelegate {
  static ObjCProtocols = [NSTextContentManagerDelegate];
  static {
    NativeClass(this);
  }

  textContentManagerTextElementAtLocation?(textContentManager: NSTextContentManager, location: NSTextLocation): NSTextElement;
  textContentManagerShouldEnumerateTextElementOptions?(textContentManager: NSTextContentManager, textElement: NSTextElement, options: interop.Enum<typeof NSTextContentManagerEnumerationOptions>): boolean;
}

export class UICollectionViewDragDelegateImpl extends NSObject implements UICollectionViewDragDelegate {
  static ObjCProtocols = [UICollectionViewDragDelegate];
  static {
    NativeClass(this);
  }

  collectionViewItemsForBeginningDragSessionAtIndexPath(collectionView: UICollectionView, session: UIDragSession, indexPath: NSIndexPath): NSArray {
    throw new Error("Please provide implementation for: UICollectionViewDragDelegate > collectionViewItemsForBeginningDragSessionAtIndexPath");
  }
  collectionViewItemsForAddingToDragSessionAtIndexPathPoint?(collectionView: UICollectionView, session: UIDragSession, indexPath: NSIndexPath, point: CGPoint): NSArray;
  collectionViewDragPreviewParametersForItemAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): UIDragPreviewParameters;
  collectionViewDragSessionWillBegin?(collectionView: UICollectionView, session: UIDragSession): void;
  collectionViewDragSessionDidEnd?(collectionView: UICollectionView, session: UIDragSession): void;
  collectionViewDragSessionAllowsMoveOperation?(collectionView: UICollectionView, session: UIDragSession): boolean;
  collectionViewDragSessionIsRestrictedToDraggingApplication?(collectionView: UICollectionView, session: UIDragSession): boolean;
}

export class UIViewControllerPreviewingDelegateImpl extends NSObject implements UIViewControllerPreviewingDelegate {
  static ObjCProtocols = [UIViewControllerPreviewingDelegate];
  static {
    NativeClass(this);
  }

  previewingContextViewControllerForLocation(previewingContext: UIViewControllerPreviewing, location: CGPoint): UIViewController {
    throw new Error("Please provide implementation for: UIViewControllerPreviewingDelegate > previewingContextViewControllerForLocation");
  }
  previewingContextCommitViewController(previewingContext: UIViewControllerPreviewing, viewControllerToCommit: UIViewController): void {
    throw new Error("Please provide implementation for: UIViewControllerPreviewingDelegate > previewingContextCommitViewController");
  }
}

export class UIViewControllerTransitioningDelegateImpl extends NSObject implements UIViewControllerTransitioningDelegate {
  static ObjCProtocols = [UIViewControllerTransitioningDelegate];
  static {
    NativeClass(this);
  }

  animationControllerForPresentedControllerPresentingControllerSourceController?(presented: UIViewController, presenting: UIViewController, source: UIViewController): UIViewControllerAnimatedTransitioning;
  animationControllerForDismissedController?(dismissed: UIViewController): UIViewControllerAnimatedTransitioning;
  interactionControllerForPresentation?(animator: UIViewControllerAnimatedTransitioning): UIViewControllerInteractiveTransitioning;
  interactionControllerForDismissal?(animator: UIViewControllerAnimatedTransitioning): UIViewControllerInteractiveTransitioning;
  presentationControllerForPresentedViewControllerPresentingViewControllerSourceViewController?(presented: UIViewController, presenting: UIViewController | null, source: UIViewController): UIPresentationController;
}

export class UISceneDelegateImpl extends NSObject implements UISceneDelegate {
  static ObjCProtocols = [UISceneDelegate];
  static {
    NativeClass(this);
  }

  sceneWillConnectToSessionOptions?(scene: UIScene, session: UISceneSession, connectionOptions: UISceneConnectionOptions): void;
  sceneDidDisconnect?(scene: UIScene): void;
  sceneDidBecomeActive?(scene: UIScene): void;
  sceneWillResignActive?(scene: UIScene): void;
  sceneWillEnterForeground?(scene: UIScene): void;
  sceneDidEnterBackground?(scene: UIScene): void;
  sceneOpenURLContexts?(scene: UIScene, URLContexts: NSSet): void;
  stateRestorationActivityForScene?(scene: UIScene): NSUserActivity;
  sceneRestoreInteractionStateWithUserActivity?(scene: UIScene, stateRestorationActivity: NSUserActivity): void;
  sceneWillContinueUserActivityWithType?(scene: UIScene, userActivityType: string): void;
  sceneContinueUserActivity?(scene: UIScene, userActivity: NSUserActivity): void;
  sceneDidFailToContinueUserActivityWithTypeError?(scene: UIScene, userActivityType: string, error: NSError): void;
  sceneDidUpdateUserActivity?(scene: UIScene, userActivity: NSUserActivity): void;
}

export class NSTextStorageDelegateImpl extends NSObject implements NSTextStorageDelegate {
  static ObjCProtocols = [NSTextStorageDelegate];
  static {
    NativeClass(this);
  }

  textStorageWillProcessEditingRangeChangeInLength?(textStorage: NSTextStorage, editedMask: interop.Enum<typeof NSTextStorageEditActions>, editedRange: _NSRange, delta: number): void;
  textStorageDidProcessEditingRangeChangeInLength?(textStorage: NSTextStorage, editedMask: interop.Enum<typeof NSTextStorageEditActions>, editedRange: _NSRange, delta: number): void;
}

export class UIDocumentPickerDelegateImpl extends NSObject implements UIDocumentPickerDelegate {
  static ObjCProtocols = [UIDocumentPickerDelegate];
  static {
    NativeClass(this);
  }

  documentPickerDidPickDocumentsAtURLs?(controller: UIDocumentPickerViewController, urls: NSArray<interop.Object> | Array<interop.Object>): void;
  documentPickerWasCancelled?(controller: UIDocumentPickerViewController): void;
  documentPickerDidPickDocumentAtURL?(controller: UIDocumentPickerViewController, url: NSURL): void;
}

export class UIDragInteractionDelegateImpl extends NSObject implements UIDragInteractionDelegate {
  static ObjCProtocols = [UIDragInteractionDelegate];
  static {
    NativeClass(this);
  }

  dragInteractionItemsForBeginningSession(interaction: UIDragInteraction, session: UIDragSession): NSArray {
    throw new Error("Please provide implementation for: UIDragInteractionDelegate > dragInteractionItemsForBeginningSession");
  }
  dragInteractionPreviewForLiftingItemSession?(interaction: UIDragInteraction, item: UIDragItem, session: UIDragSession): UITargetedDragPreview;
  dragInteractionWillAnimateLiftWithAnimatorSession?(interaction: UIDragInteraction, animator: UIDragAnimating, session: UIDragSession): void;
  dragInteractionSessionWillBegin?(interaction: UIDragInteraction, session: UIDragSession): void;
  dragInteractionSessionAllowsMoveOperation?(interaction: UIDragInteraction, session: UIDragSession): boolean;
  dragInteractionSessionIsRestrictedToDraggingApplication?(interaction: UIDragInteraction, session: UIDragSession): boolean;
  dragInteractionPrefersFullSizePreviewsForSession?(interaction: UIDragInteraction, session: UIDragSession): boolean;
  dragInteractionSessionDidMove?(interaction: UIDragInteraction, session: UIDragSession): void;
  dragInteractionSessionWillEndWithOperation?(interaction: UIDragInteraction, session: UIDragSession, operation: interop.Enum<typeof UIDropOperation>): void;
  dragInteractionSessionDidEndWithOperation?(interaction: UIDragInteraction, session: UIDragSession, operation: interop.Enum<typeof UIDropOperation>): void;
  dragInteractionSessionDidTransferItems?(interaction: UIDragInteraction, session: UIDragSession): void;
  dragInteractionItemsForAddingToSessionWithTouchAtPoint?(interaction: UIDragInteraction, session: UIDragSession, point: CGPoint): NSArray;
  dragInteractionSessionForAddingItemsWithTouchAtPoint?(interaction: UIDragInteraction, sessions: NSArray<interop.Object> | Array<interop.Object>, point: CGPoint): UIDragSession;
  dragInteractionSessionWillAddItemsForInteraction?(interaction: UIDragInteraction, session: UIDragSession, items: NSArray<interop.Object> | Array<interop.Object>, addingInteraction: UIDragInteraction): void;
  dragInteractionPreviewForCancellingItemWithDefault?(interaction: UIDragInteraction, item: UIDragItem, defaultPreview: UITargetedDragPreview): UITargetedDragPreview;
  dragInteractionItemWillAnimateCancelWithAnimator?(interaction: UIDragInteraction, item: UIDragItem, animator: UIDragAnimating): void;
}

export class UIPageControlProgressDelegateImpl extends NSObject implements UIPageControlProgressDelegate {
  static ObjCProtocols = [UIPageControlProgressDelegate];
  static {
    NativeClass(this);
  }

  pageControlProgressInitialProgressForPage?(progress: UIPageControlProgress, page: number): number;
  pageControlProgressVisibilityDidChange?(progress: UIPageControlProgress): void;
}

export class UIAdaptivePresentationControllerDelegateImpl extends NSObject implements UIAdaptivePresentationControllerDelegate {
  static ObjCProtocols = [UIAdaptivePresentationControllerDelegate];
  static {
    NativeClass(this);
  }

  adaptivePresentationStyleForPresentationController?(controller: UIPresentationController): interop.Enum<typeof UIModalPresentationStyle>;
  adaptivePresentationStyleForPresentationControllerTraitCollection?(controller: UIPresentationController, traitCollection: UITraitCollection): interop.Enum<typeof UIModalPresentationStyle>;
  presentationControllerPrepareAdaptivePresentationController?(presentationController: UIPresentationController, adaptivePresentationController: UIPresentationController): void;
  presentationControllerViewControllerForAdaptivePresentationStyle?(controller: UIPresentationController, style: interop.Enum<typeof UIModalPresentationStyle>): UIViewController;
  presentationControllerWillPresentWithAdaptiveStyleTransitionCoordinator?(presentationController: UIPresentationController, style: interop.Enum<typeof UIModalPresentationStyle>, transitionCoordinator: UIViewControllerTransitionCoordinator | null): void;
  presentationControllerShouldDismiss?(presentationController: UIPresentationController): boolean;
  presentationControllerWillDismiss?(presentationController: UIPresentationController): void;
  presentationControllerDidDismiss?(presentationController: UIPresentationController): void;
  presentationControllerDidAttemptToDismiss?(presentationController: UIPresentationController): void;
}

export class UISearchControllerDelegateImpl extends NSObject implements UISearchControllerDelegate {
  static ObjCProtocols = [UISearchControllerDelegate];
  static {
    NativeClass(this);
  }

  willPresentSearchController?(searchController: UISearchController): void;
  didPresentSearchController?(searchController: UISearchController): void;
  willDismissSearchController?(searchController: UISearchController): void;
  didDismissSearchController?(searchController: UISearchController): void;
  presentSearchController?(searchController: UISearchController): void;
  searchControllerWillChangeToSearchBarPlacement?(searchController: UISearchController, newPlacement: interop.Enum<typeof UINavigationItemSearchBarPlacement>): void;
  searchControllerDidChangeFromSearchBarPlacement?(searchController: UISearchController, previousPlacement: interop.Enum<typeof UINavigationItemSearchBarPlacement>): void;
}

export class UITextInputDelegateImpl extends NSObject implements UITextInputDelegate {
  static ObjCProtocols = [UITextInputDelegate];
  static {
    NativeClass(this);
  }

  selectionWillChange(textInput: UITextInput | null): void {
    throw new Error("Please provide implementation for: UITextInputDelegate > selectionWillChange");
  }
  selectionDidChange(textInput: UITextInput | null): void {
    throw new Error("Please provide implementation for: UITextInputDelegate > selectionDidChange");
  }
  textWillChange(textInput: UITextInput | null): void {
    throw new Error("Please provide implementation for: UITextInputDelegate > textWillChange");
  }
  textDidChange(textInput: UITextInput | null): void {
    throw new Error("Please provide implementation for: UITextInputDelegate > textDidChange");
  }
}

export class UIWebViewDelegateImpl extends NSObject implements UIWebViewDelegate {
  static ObjCProtocols = [UIWebViewDelegate];
  static {
    NativeClass(this);
  }

  webViewShouldStartLoadWithRequestNavigationType?(webView: UIWebView, request: NSURLRequest, navigationType: interop.Enum<typeof UIWebViewNavigationType>): boolean;
  webViewDidStartLoad?(webView: UIWebView): void;
  webViewDidFinishLoad?(webView: UIWebView): void;
  webViewDidFailLoadWithError?(webView: UIWebView, error: NSError): void;
}

export class UIScreenshotServiceDelegateImpl extends NSObject implements UIScreenshotServiceDelegate {
  static ObjCProtocols = [UIScreenshotServiceDelegate];
  static {
    NativeClass(this);
  }

  screenshotServiceGeneratePDFRepresentationWithCompletion?(screenshotService: UIScreenshotService, completionHandler: (p1: NSData, p2: number, p3: CGRect) => void | null): void;
}