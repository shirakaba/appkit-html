/// <reference types="objc/lib/types.d.ts" />
/// <reference types="objc/types/macos/Runtime.d.ts" />
/// <reference types="objc/types/macos/QuartzCore.d.ts" />
/// <reference types="objc/types/macos/Foundation.d.ts" />
/// <reference types="objc/types/macos/AppKit.d.ts" />

// Call e.g. HTMLNSAlertElement.defineCustomElement(); to register each Custom
// Element.
declare global {
  interface AppKitCustomElementTagNameMap {
    "ns-accessibilitycustomaction": HTMLNSAccessibilityCustomActionElement;
    "ns-accessibilitycustomrotor": HTMLNSAccessibilityCustomRotorElement;
    "ns-accessibilitycustomrotoritemresult": HTMLNSAccessibilityCustomRotorItemResultElement;
    "ns-accessibilitycustomrotorsearchparameters": HTMLNSAccessibilityCustomRotorSearchParametersElement;
    "ns-accessibilityelement": HTMLNSAccessibilityElementElement;
    "ns-actioncell": HTMLNSActionCellElement;
    "ns-alert": HTMLNSAlertElement;
    "ns-alignmentfeedbackfilter": HTMLNSAlignmentFeedbackFilterElement;
    "ns-animation": HTMLNSAnimationElement;
    "ns-animationcontext": HTMLNSAnimationContextElement;
    "ns-appearance": HTMLNSAppearanceElement;
    "ns-application": HTMLNSApplicationElement;
    "ns-arraycontroller": HTMLNSArrayControllerElement;
    "ns-atstypesetter": HTMLNSATSTypesetterElement;
    "ns-bezierpath": HTMLNSBezierPathElement;
    "ns-bindingselectionmarker": HTMLNSBindingSelectionMarkerElement;
    "ns-bitmapimagerep": HTMLNSBitmapImageRepElement;
    "ns-box": HTMLNSBoxElement;
    "ns-browser": HTMLNSBrowserElement;
    "ns-browsercell": HTMLNSBrowserCellElement;
    "ns-button": HTMLNSButtonElement;
    "ns-buttoncell": HTMLNSButtonCellElement;
    "ns-buttontouchbaritem": HTMLNSButtonTouchBarItemElement;
    "ns-cachedimagerep": HTMLNSCachedImageRepElement;
    "ns-candidatelisttouchbaritem": HTMLNSCandidateListTouchBarItemElement;
    "ns-cell": HTMLNSCellElement;
    "ns-ciimagerep": HTMLNSCIImageRepElement;
    "ns-clickgesturerecognizer": HTMLNSClickGestureRecognizerElement;
    "ns-clipview": HTMLNSClipViewElement;
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
    "ns-collectionview": HTMLNSCollectionViewElement;
    "ns-collectionviewcompositionallayout": HTMLNSCollectionViewCompositionalLayoutElement;
    "ns-collectionviewcompositionallayoutconfiguration": HTMLNSCollectionViewCompositionalLayoutConfigurationElement;
    "ns-collectionviewdiffabledatasource": HTMLNSCollectionViewDiffableDataSourceElement;
    "ns-collectionviewflowlayout": HTMLNSCollectionViewFlowLayoutElement;
    "ns-collectionviewflowlayoutinvalidationcontext": HTMLNSCollectionViewFlowLayoutInvalidationContextElement;
    "ns-collectionviewgridlayout": HTMLNSCollectionViewGridLayoutElement;
    "ns-collectionviewitem": HTMLNSCollectionViewItemElement;
    "ns-collectionviewlayout": HTMLNSCollectionViewLayoutElement;
    "ns-collectionviewlayoutattributes": HTMLNSCollectionViewLayoutAttributesElement;
    "ns-collectionviewlayoutinvalidationcontext": HTMLNSCollectionViewLayoutInvalidationContextElement;
    "ns-collectionviewtransitionlayout": HTMLNSCollectionViewTransitionLayoutElement;
    "ns-collectionviewupdateitem": HTMLNSCollectionViewUpdateItemElement;
    "ns-color": HTMLNSColorElement;
    "ns-colorlist": HTMLNSColorListElement;
    "ns-colorpanel": HTMLNSColorPanelElement;
    "ns-colorpicker": HTMLNSColorPickerElement;
    "ns-colorpickertouchbaritem": HTMLNSColorPickerTouchBarItemElement;
    "ns-colorsampler": HTMLNSColorSamplerElement;
    "ns-colorspace": HTMLNSColorSpaceElement;
    "ns-colorwell": HTMLNSColorWellElement;
    "ns-combobox": HTMLNSComboBoxElement;
    "ns-comboboxcell": HTMLNSComboBoxCellElement;
    "ns-combobutton": HTMLNSComboButtonElement;
    "ns-control": HTMLNSControlElement;
    "ns-controller": HTMLNSControllerElement;
    "ns-cursor": HTMLNSCursorElement;
    "ns-customimagerep": HTMLNSCustomImageRepElement;
    "ns-customtouchbaritem": HTMLNSCustomTouchBarItemElement;
    "ns-dataasset": HTMLNSDataAssetElement;
    "ns-datepicker": HTMLNSDatePickerElement;
    "ns-datepickercell": HTMLNSDatePickerCellElement;
    "ns-dictionarycontroller": HTMLNSDictionaryControllerElement;
    "ns-dictionarycontrollerkeyvaluepair": HTMLNSDictionaryControllerKeyValuePairElement;
    "ns-diffabledatasourcesnapshot": HTMLNSDiffableDataSourceSnapshotElement;
    "ns-docktile": HTMLNSDockTileElement;
    "ns-document": HTMLNSDocumentElement;
    "ns-documentcontroller": HTMLNSDocumentControllerElement;
    "ns-draggingimagecomponent": HTMLNSDraggingImageComponentElement;
    "ns-draggingitem": HTMLNSDraggingItemElement;
    "ns-draggingsession": HTMLNSDraggingSessionElement;
    "ns-drawer": HTMLNSDrawerElement;
    "ns-epsimagerep": HTMLNSEPSImageRepElement;
    "ns-event": HTMLNSEventElement;
    "ns-filepromiseprovider": HTMLNSFilePromiseProviderElement;
    "ns-filepromisereceiver": HTMLNSFilePromiseReceiverElement;
    "ns-font": HTMLNSFontElement;
    "ns-fontassetrequest": HTMLNSFontAssetRequestElement;
    "ns-fontcollection": HTMLNSFontCollectionElement;
    "ns-fontdescriptor": HTMLNSFontDescriptorElement;
    "ns-fontmanager": HTMLNSFontManagerElement;
    "ns-fontpanel": HTMLNSFontPanelElement;
    "ns-form": HTMLNSFormElement;
    "ns-formcell": HTMLNSFormCellElement;
    "ns-gesturerecognizer": HTMLNSGestureRecognizerElement;
    "ns-glyphgenerator": HTMLNSGlyphGeneratorElement;
    "ns-glyphinfo": HTMLNSGlyphInfoElement;
    "ns-gradient": HTMLNSGradientElement;
    "ns-graphicscontext": HTMLNSGraphicsContextElement;
    "ns-gridcell": HTMLNSGridCellElement;
    "ns-gridcolumn": HTMLNSGridColumnElement;
    "ns-gridrow": HTMLNSGridRowElement;
    "ns-gridview": HTMLNSGridViewElement;
    "ns-grouptouchbaritem": HTMLNSGroupTouchBarItemElement;
    "ns-hapticfeedbackmanager": HTMLNSHapticFeedbackManagerElement;
    "ns-helpmanager": HTMLNSHelpManagerElement;
    "ns-image": HTMLNSImageElement;
    "ns-imagecell": HTMLNSImageCellElement;
    "ns-imagerep": HTMLNSImageRepElement;
    "ns-imagesymbolconfiguration": HTMLNSImageSymbolConfigurationElement;
    "ns-imageview": HTMLNSImageViewElement;
    "ns-inputmanager": HTMLNSInputManagerElement;
    "ns-inputserver": HTMLNSInputServerElement;
    "ns-layoutanchor": HTMLNSLayoutAnchorElement;
    "ns-layoutconstraint": HTMLNSLayoutConstraintElement;
    "ns-layoutdimension": HTMLNSLayoutDimensionElement;
    "ns-layoutguide": HTMLNSLayoutGuideElement;
    "ns-layoutmanager": HTMLNSLayoutManagerElement;
    "ns-layoutxaxisanchor": HTMLNSLayoutXAxisAnchorElement;
    "ns-layoutyaxisanchor": HTMLNSLayoutYAxisAnchorElement;
    "ns-levelindicator": HTMLNSLevelIndicatorElement;
    "ns-levelindicatorcell": HTMLNSLevelIndicatorCellElement;
    "ns-magnificationgesturerecognizer": HTMLNSMagnificationGestureRecognizerElement;
    "ns-matrix": HTMLNSMatrixElement;
    "ns-medialibrarybrowsercontroller": HTMLNSMediaLibraryBrowserControllerElement;
    "ns-menu": HTMLNSMenuElement;
    "ns-menuitem": HTMLNSMenuItemElement;
    "ns-menuitembadge": HTMLNSMenuItemBadgeElement;
    "ns-menuitemcell": HTMLNSMenuItemCellElement;
    "ns-menutoolbaritem": HTMLNSMenuToolbarItemElement;
    "ns-movie": HTMLNSMovieElement;
    "ns-mutablefontcollection": HTMLNSMutableFontCollectionElement;
    "ns-mutableparagraphstyle": HTMLNSMutableParagraphStyleElement;
    "ns-nib": HTMLNSNibElement;
    "ns-object": HTMLNSObjectElement;
    "ns-objectcontroller": HTMLNSObjectControllerElement;
    "ns-openglcontext": HTMLNSOpenGLContextElement;
    "ns-openglpixelbuffer": HTMLNSOpenGLPixelBufferElement;
    "ns-openglpixelformat": HTMLNSOpenGLPixelFormatElement;
    "ns-openglview": HTMLNSOpenGLViewElement;
    "ns-openpanel": HTMLNSOpenPanelElement;
    "ns-outlineview": HTMLNSOutlineViewElement;
    "ns-pagecontroller": HTMLNSPageControllerElement;
    "ns-pagelayout": HTMLNSPageLayoutElement;
    "ns-panel": HTMLNSPanelElement;
    "ns-pangesturerecognizer": HTMLNSPanGestureRecognizerElement;
    "ns-paragraphstyle": HTMLNSParagraphStyleElement;
    "ns-pasteboard": HTMLNSPasteboardElement;
    "ns-pasteboarditem": HTMLNSPasteboardItemElement;
    "ns-pathcell": HTMLNSPathCellElement;
    "ns-pathcomponentcell": HTMLNSPathComponentCellElement;
    "ns-pathcontrol": HTMLNSPathControlElement;
    "ns-pathcontrolitem": HTMLNSPathControlItemElement;
    "ns-pdfimagerep": HTMLNSPDFImageRepElement;
    "ns-pdfinfo": HTMLNSPDFInfoElement;
    "ns-pdfpanel": HTMLNSPDFPanelElement;
    "ns-persistentdocument": HTMLNSPersistentDocumentElement;
    "ns-pickertouchbaritem": HTMLNSPickerTouchBarItemElement;
    "ns-pictimagerep": HTMLNSPICTImageRepElement;
    "ns-popover": HTMLNSPopoverElement;
    "ns-popovertouchbaritem": HTMLNSPopoverTouchBarItemElement;
    "ns-popupbutton": HTMLNSPopUpButtonElement;
    "ns-popupbuttoncell": HTMLNSPopUpButtonCellElement;
    "ns-predicateeditor": HTMLNSPredicateEditorElement;
    "ns-predicateeditorrowtemplate": HTMLNSPredicateEditorRowTemplateElement;
    "ns-pressgesturerecognizer": HTMLNSPressGestureRecognizerElement;
    "ns-pressureconfiguration": HTMLNSPressureConfigurationElement;
    "ns-previewrepresentingactivityitem": HTMLNSPreviewRepresentingActivityItemElement;
    "ns-printer": HTMLNSPrinterElement;
    "ns-printinfo": HTMLNSPrintInfoElement;
    "ns-printoperation": HTMLNSPrintOperationElement;
    "ns-printpanel": HTMLNSPrintPanelElement;
    "ns-progressindicator": HTMLNSProgressIndicatorElement;
    "ns-responder": HTMLNSResponderElement;
    "ns-rotationgesturerecognizer": HTMLNSRotationGestureRecognizerElement;
    "ns-ruleeditor": HTMLNSRuleEditorElement;
    "ns-rulermarker": HTMLNSRulerMarkerElement;
    "ns-rulerview": HTMLNSRulerViewElement;
    "ns-runningapplication": HTMLNSRunningApplicationElement;
    "ns-savepanel": HTMLNSSavePanelElement;
    "ns-screen": HTMLNSScreenElement;
    "ns-scroller": HTMLNSScrollerElement;
    "ns-scrollview": HTMLNSScrollViewElement;
    "ns-scrubber": HTMLNSScrubberElement;
    "ns-scrubberarrangedview": HTMLNSScrubberArrangedViewElement;
    "ns-scrubberflowlayout": HTMLNSScrubberFlowLayoutElement;
    "ns-scrubberimageitemview": HTMLNSScrubberImageItemViewElement;
    "ns-scrubberitemview": HTMLNSScrubberItemViewElement;
    "ns-scrubberlayout": HTMLNSScrubberLayoutElement;
    "ns-scrubberlayoutattributes": HTMLNSScrubberLayoutAttributesElement;
    "ns-scrubberproportionallayout": HTMLNSScrubberProportionalLayoutElement;
    "ns-scrubberselectionstyle": HTMLNSScrubberSelectionStyleElement;
    "ns-scrubberselectionview": HTMLNSScrubberSelectionViewElement;
    "ns-scrubbertextitemview": HTMLNSScrubberTextItemViewElement;
    "ns-searchfield": HTMLNSSearchFieldElement;
    "ns-searchfieldcell": HTMLNSSearchFieldCellElement;
    "ns-searchtoolbaritem": HTMLNSSearchToolbarItemElement;
    "ns-securetextfield": HTMLNSSecureTextFieldElement;
    "ns-securetextfieldcell": HTMLNSSecureTextFieldCellElement;
    "ns-segmentedcell": HTMLNSSegmentedCellElement;
    "ns-segmentedcontrol": HTMLNSSegmentedControlElement;
    "ns-shadow": HTMLNSShadowElement;
    "ns-sharingservice": HTMLNSSharingServiceElement;
    "ns-sharingservicepicker": HTMLNSSharingServicePickerElement;
    "ns-sharingservicepickertoolbaritem": HTMLNSSharingServicePickerToolbarItemElement;
    "ns-sharingservicepickertouchbaritem": HTMLNSSharingServicePickerTouchBarItemElement;
    "ns-slider": HTMLNSSliderElement;
    "ns-slideraccessory": HTMLNSSliderAccessoryElement;
    "ns-slideraccessorybehavior": HTMLNSSliderAccessoryBehaviorElement;
    "ns-slidercell": HTMLNSSliderCellElement;
    "ns-slidertouchbaritem": HTMLNSSliderTouchBarItemElement;
    "ns-sound": HTMLNSSoundElement;
    "ns-speechrecognizer": HTMLNSSpeechRecognizerElement;
    "ns-speechsynthesizer": HTMLNSSpeechSynthesizerElement;
    "ns-spellchecker": HTMLNSSpellCheckerElement;
    "ns-splitview": HTMLNSSplitViewElement;
    "ns-splitviewcontroller": HTMLNSSplitViewControllerElement;
    "ns-splitviewitem": HTMLNSSplitViewItemElement;
    "ns-stackview": HTMLNSStackViewElement;
    "ns-statusbar": HTMLNSStatusBarElement;
    "ns-statusbarbutton": HTMLNSStatusBarButtonElement;
    "ns-statusitem": HTMLNSStatusItemElement;
    "ns-stepper": HTMLNSStepperElement;
    "ns-steppercell": HTMLNSStepperCellElement;
    "ns-steppertouchbaritem": HTMLNSStepperTouchBarItemElement;
    "ns-storyboard": HTMLNSStoryboardElement;
    "ns-storyboardsegue": HTMLNSStoryboardSegueElement;
    "ns-stringdrawingcontext": HTMLNSStringDrawingContextElement;
    "ns-switch": HTMLNSSwitchElement;
    "ns-tablecellview": HTMLNSTableCellViewElement;
    "ns-tablecolumn": HTMLNSTableColumnElement;
    "ns-tableheadercell": HTMLNSTableHeaderCellElement;
    "ns-tableheaderview": HTMLNSTableHeaderViewElement;
    "ns-tablerowview": HTMLNSTableRowViewElement;
    "ns-tableview": HTMLNSTableViewElement;
    "ns-tableviewdiffabledatasource": HTMLNSTableViewDiffableDataSourceElement;
    "ns-tableviewrowaction": HTMLNSTableViewRowActionElement;
    "ns-tabview": HTMLNSTabViewElement;
    "ns-tabviewcontroller": HTMLNSTabViewControllerElement;
    "ns-tabviewitem": HTMLNSTabViewItemElement;
    "ns-text": HTMLNSTextElement;
    "ns-textalternatives": HTMLNSTextAlternativesElement;
    "ns-textattachment": HTMLNSTextAttachmentElement;
    "ns-textattachmentcell": HTMLNSTextAttachmentCellElement;
    "ns-textattachmentviewprovider": HTMLNSTextAttachmentViewProviderElement;
    "ns-textblock": HTMLNSTextBlockElement;
    "ns-textcheckingcontroller": HTMLNSTextCheckingControllerElement;
    "ns-textcontainer": HTMLNSTextContainerElement;
    "ns-textcontentmanager": HTMLNSTextContentManagerElement;
    "ns-textcontentstorage": HTMLNSTextContentStorageElement;
    "ns-textelement": HTMLNSTextElementElement;
    "ns-textfield": HTMLNSTextFieldElement;
    "ns-textfieldcell": HTMLNSTextFieldCellElement;
    "ns-textfinder": HTMLNSTextFinderElement;
    "ns-textinputcontext": HTMLNSTextInputContextElement;
    "ns-textinsertionindicator": HTMLNSTextInsertionIndicatorElement;
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
    "ns-texttable": HTMLNSTextTableElement;
    "ns-texttableblock": HTMLNSTextTableBlockElement;
    "ns-textview": HTMLNSTextViewElement;
    "ns-textviewportlayoutcontroller": HTMLNSTextViewportLayoutControllerElement;
    "ns-tintconfiguration": HTMLNSTintConfigurationElement;
    "ns-titlebaraccessoryviewcontroller": HTMLNSTitlebarAccessoryViewControllerElement;
    "ns-tokenfield": HTMLNSTokenFieldElement;
    "ns-tokenfieldcell": HTMLNSTokenFieldCellElement;
    "ns-toolbar": HTMLNSToolbarElement;
    "ns-toolbaritem": HTMLNSToolbarItemElement;
    "ns-toolbaritemgroup": HTMLNSToolbarItemGroupElement;
    "ns-touch": HTMLNSTouchElement;
    "ns-touchbar": HTMLNSTouchBarElement;
    "ns-touchbaritem": HTMLNSTouchBarItemElement;
    "ns-trackingarea": HTMLNSTrackingAreaElement;
    "ns-trackingseparatortoolbaritem": HTMLNSTrackingSeparatorToolbarItemElement;
    "ns-treecontroller": HTMLNSTreeControllerElement;
    "ns-treenode": HTMLNSTreeNodeElement;
    "ns-typesetter": HTMLNSTypesetterElement;
    "ns-userdefaultscontroller": HTMLNSUserDefaultsControllerElement;
    "ns-userinterfacecompressionoptions": HTMLNSUserInterfaceCompressionOptionsElement;
    "ns-view": HTMLNSViewElement;
    "ns-viewanimation": HTMLNSViewAnimationElement;
    "ns-viewcontroller": HTMLNSViewControllerElement;
    "ns-visualeffectview": HTMLNSVisualEffectViewElement;
    "ns-window": HTMLNSWindowElement;
    "ns-windowcontroller": HTMLNSWindowControllerElement;
    "ns-windowtab": HTMLNSWindowTabElement;
    "ns-windowtabgroup": HTMLNSWindowTabGroupElement;
    "ns-workspace": HTMLNSWorkspaceElement;
    "ns-workspaceauthorization": HTMLNSWorkspaceAuthorizationElement;
    "ns-workspaceopenconfiguration": HTMLNSWorkspaceOpenConfigurationElement;
  }

  interface Document {
    createElement<K extends keyof AppKitCustomElementTagNameMap>(
      tagName: K,
      options?: ElementCreationOptions
    ): AppKitCustomElementTagNameMap[K];
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
  protected abstract nativeAppendChildImpl?<T extends NativeObject>(node: T): T;

  /**
   * Removes a native child node from the nativeObject.
   * @returns the removed child, if implemented; otherwise, undefined.
   * @example
   * this.nativeRemoveChildImpl(subview);
   * // For an HTMLNSStackViewElement, evaluates:
   * // this.nativeObject.removeArrangedSubview(subview);
   */
  protected abstract nativeRemoveChildImpl?<T extends NativeObject>(child: T): T;

  /**
   * Removes the native child node at the given index from the nativeObject.
   * @returns the removed child, if implemented; otherwise, undefined.
   * @example
   * this.nativeRemoveChildAtIndexImpl(index);
   * // For an HTMLNSMenuElement, evaluates:
   * // this.nativeObject.removeItemAtIndex(index);
   */
  protected abstract nativeRemoveChildAtIndexImpl?<T extends NativeObject>(index: number): T;

  /**
   * Removes a native view from its parent.
   * @example
   * // For an HTMLNSViewElement, evaluates:
   * // this.nativeObject.removeFromSuperview();
   */
  protected abstract nativeRemoveImpl?(): void;

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
  // protected abstract nativeInsertBeforeImpl?<T extends NativeObject>(newNode: T, referenceNode: NativeObject | null): T;

  /**
   * Inserts a new native child at the specified index.
   * @example
   * this.nativeInsertAtIndexImpl(newNode, index);
   * // For an HTMLNSStackViewElement, evaluates something like:
   * // this.nativeObject.insertArrangedSubviewAtIndex(newNode, index);
   */
  protected abstract nativeInsertAtIndexImpl?<T extends NativeObject>(newNode: T, index: number): T;

  /**
   * Inserts the nativeObject for the given node into the nativeSubviews array
   * at the specified index.
   * @param index a positive integer. Can be null, meaning the end of the array.
   */
  protected nativeInsertAtIndex<T extends HTMLNativeObjectElement>(node: T, index: number | null): void {
    if(index !== null && index < 0){
      throw new Error("Index must be a positive integer, or null.");
    }

    const childNodesCount = this.nativeChildNodesImpl?.count ?? null;
    if(index === childNodesCount && this.nativeAppendChildImpl){
      this.nativeAppendChildImpl(node.nativeObject);
      return;
    }

    if(index === null){
      index = childNodesCount;
    }

    if(typeof index === 'number' && this.nativeInsertAtIndexImpl){
      this.nativeInsertAtIndexImpl(node.nativeObject, index);
      return;
    }

    // if(this.nativeInsertBeforeImpl && this.nativeChildNodesImpl){
    //   this.nativeInsertBeforeImpl(node.nativeObject, this.nativeChildNodesImpl.objectAtIndex(index))
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

    if(this.nativeRemoveChildImpl){
      this.nativeRemoveChildImpl(child.nativeObject);
      return;
    }

    if(child.nativeRemoveImpl){
      child.nativeRemoveImpl();
      return;
    }

    const nativeChildNodes = this.nativeChildNodesImpl;
    if(this.nativeRemoveChildAtIndexImpl && nativeChildNodes){
      const index = nativeChildNodes.indexOfObject(child.nativeObject) ?? -1;
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

    const nativeSubviews = this.getNativeSubviews(newNode.nativeSubviewsProp);
    let referenceNodeIndex = referenceNode instanceof HTMLNativeObjectElement ?
      nativeSubviews?.indexOfObject(referenceNode.nativeObject) ?? -1 :
      -1;

    // If the referenceNode's nativeObject is not in the nativeSubviews array
    // (e.g. because it's a Comment node), look through each nextSibling just in
    // case.
    let nextSibling = referenceNode.nextSibling;
    while(nextSibling && referenceNodeIndex === -1){
      referenceNodeIndex = nextSibling instanceof HTMLNativeObjectElement ?
        nativeSubviews?.indexOfObject(nextSibling.nativeObject) ?? -1 :
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
    const result = super.replaceChild(node, child);
    this.nativeReplaceChild(node, child);
    return result;
  }
  nativeReplaceChild<T extends Node>(newChild: Node, oldChild: T): void {
    // TODO: handle Text nodes, maybe with a class called NativeText.
    if(!(newChild instanceof HTMLNativeObjectElement)){
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

    super.replaceWith(...processedNodes);
    this.nativeReplaceWith(...processedNodes);
  }
  nativeReplaceWith(...nodes: Node[]): void {
    for(const node of nodes){
      // TODO: handle Text nodes, maybe with a class called NativeText.
      if(!(node instanceof HTMLNativeObjectElement)){
        continue;
      }

      // TODO
    }
  }

  replaceChildren(...nodes: (string | Node)[]): void {
    const processedNodes = nodes.map(
      node => typeof node === 'string' ?
        this.ownerDocument.createTextNode(node) :
        node
    );
    super.replaceChildren(...processedNodes);
    this.nativeReplaceChildren(...processedNodes);
  }
  nativeReplaceChildren(...nodes: Node[]): void {
    for(const node of nodes){
      // TODO: handle Text nodes, maybe with a class called NativeText.
      if(!(node instanceof HTMLNativeObjectElement)){
        continue;
      }

      // TODO
    }
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
  get classForArchiver(): interop.Object { return this.nativeObject.classForArchiver; }
  get classForPortCoder(): interop.Object { return this.nativeObject.classForPortCoder; }
  get classDescription(): NSClassDescription { return this.nativeObject.classDescription; }
  get attributeKeys(): NSArray { return this.nativeObject.attributeKeys; }
  get toOneRelationshipKeys(): NSArray { return this.nativeObject.toOneRelationshipKeys; }
  get toManyRelationshipKeys(): NSArray { return this.nativeObject.toManyRelationshipKeys; }
  get scriptingProperties(): NSDictionary { return this.nativeObject.scriptingProperties; }
  set scriptingProperties(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) { this.nativeObject.scriptingProperties = value; }
  get classCode(): number { return this.nativeObject.classCode; }
  get objectSpecifier(): NSScriptObjectSpecifier { return this.nativeObject.objectSpecifier; }
  get accessibilityFocusedUIElement(): interop.Object { return this.nativeObject.accessibilityFocusedUIElement; }
  get accessibilityNotifiesWhenDestroyed(): boolean { return this.nativeObject.accessibilityNotifiesWhenDestroyed; }
  get exposedBindings(): NSArray { return this.nativeObject.exposedBindings; }
  get objectForWebScript(): interop.Object { return this.nativeObject.objectForWebScript; }
  get webPlugInContainerSelectionColor(): NSColor { return this.nativeObject.webPlugInContainerSelectionColor; }
  get webFrame(): WebFrame { return this.nativeObject.webFrame; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLNSWindowTabGroupElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSWindowTabGroup.new();

  get identifier(): string { return this.nativeObject.identifier; }
  get windows(): NSArray { return this.nativeObject.windows; }
  get isOverviewVisible(): boolean { return this.nativeObject.isOverviewVisible; }
  set isOverviewVisible(value: boolean) { this.nativeObject.isOverviewVisible = value; }
  get isTabBarVisible(): boolean { return this.nativeObject.isTabBarVisible; }
  get selectedWindow(): NSWindow | null { return this.nativeObject.selectedWindow; }
  set selectedWindow(value: NSWindow | null) { this.nativeObject.selectedWindow = value; }
}

export class HTMLNSAccessibilityCustomRotorSearchParametersElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSAccessibilityCustomRotorSearchParameters.new();

  get currentItem(): NSAccessibilityCustomRotorItemResult { return this.nativeObject.currentItem; }
  set currentItem(value: NSAccessibilityCustomRotorItemResult) { this.nativeObject.currentItem = value; }
  get searchDirection(): interop.Enum<typeof NSAccessibilityCustomRotorSearchDirection> { return this.nativeObject.searchDirection; }
  set searchDirection(value: interop.Enum<typeof NSAccessibilityCustomRotorSearchDirection>) { this.nativeObject.searchDirection = value; }
  get filterString(): string { return this.nativeObject.filterString; }
  set filterString(value: string) { this.nativeObject.filterString = value; }
}

export class HTMLNSFontManagerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSFontManager.new();

  get isMultiple(): boolean { return this.nativeObject.isMultiple; }
  get selectedFont(): NSFont { return this.nativeObject.selectedFont; }
  get availableFonts(): NSArray { return this.nativeObject.availableFonts; }
  get availableFontFamilies(): NSArray { return this.nativeObject.availableFontFamilies; }
  get isEnabled(): boolean { return this.nativeObject.isEnabled; }
  set isEnabled(value: boolean) { this.nativeObject.isEnabled = value; }
  get action(): string { return this.nativeObject.action; }
  set action(value: string) { this.nativeObject.action = value; }
  get delegate(): interop.Object { return this.nativeObject.delegate; }
  set delegate(value: interop.Object) { this.nativeObject.delegate = value; }
  get collectionNames(): NSArray { return this.nativeObject.collectionNames; }
  get currentFontAction(): interop.Enum<typeof NSFontAction> { return this.nativeObject.currentFontAction; }
  get target(): interop.Object { return this.nativeObject.target; }
  set target(value: interop.Object) { this.nativeObject.target = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLNSScrubberLayoutElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSScrubberLayout.new();

  get scrubber(): NSScrubber { return this.nativeObject.scrubber; }
  get visibleRect(): CGRect { return this.nativeObject.visibleRect; }
  get scrubberContentSize(): CGSize { return this.nativeObject.scrubberContentSize; }
  get shouldInvalidateLayoutForSelectionChange(): boolean { return this.nativeObject.shouldInvalidateLayoutForSelectionChange; }
  get shouldInvalidateLayoutForHighlightChange(): boolean { return this.nativeObject.shouldInvalidateLayoutForHighlightChange; }
  get automaticallyMirrorsInRightToLeftLayout(): boolean { return this.nativeObject.automaticallyMirrorsInRightToLeftLayout; }
}

export class HTMLNSCollectionViewUpdateItemElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSCollectionViewUpdateItem.new();

  get indexPathBeforeUpdate(): NSIndexPath { return this.nativeObject.indexPathBeforeUpdate; }
  get indexPathAfterUpdate(): NSIndexPath { return this.nativeObject.indexPathAfterUpdate; }
  get updateAction(): interop.Enum<typeof NSCollectionUpdateAction> { return this.nativeObject.updateAction; }
}

export class HTMLNSControllerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSController.new();

  get isEditing(): boolean { return this.nativeObject.isEditing; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLNSHelpManagerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSHelpManager.new();

}

export class HTMLNSOpenGLPixelFormatElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSOpenGLPixelFormat.new();

  get numberOfVirtualScreens(): number { return this.nativeObject.numberOfVirtualScreens; }
  get CGLPixelFormatObj(): interop.Pointer { return this.nativeObject.CGLPixelFormatObj; }
}

export class HTMLNSTextAttachmentElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTextAttachment.new();

  get contents(): NSData { return this.nativeObject.contents; }
  set contents(value: NSData) { this.nativeObject.contents = value; }
  get fileType(): string { return this.nativeObject.fileType; }
  set fileType(value: string) { this.nativeObject.fileType = value; }
  get image(): NSImage { return this.nativeObject.image; }
  set image(value: NSImage) { this.nativeObject.image = value; }
  get bounds(): CGRect { return this.nativeObject.bounds; }
  set bounds(value: CGRect) { this.nativeObject.bounds = value; }
  get fileWrapper(): NSFileWrapper { return this.nativeObject.fileWrapper; }
  set fileWrapper(value: NSFileWrapper) { this.nativeObject.fileWrapper = value; }
  get attachmentCell(): NSTextAttachmentCell { return this.nativeObject.attachmentCell; }
  set attachmentCell(value: NSTextAttachmentCell) { this.nativeObject.attachmentCell = value; }
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

export class HTMLNSCollectionViewLayoutElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSCollectionViewLayout.new();

  get collectionView(): NSCollectionView { return this.nativeObject.collectionView; }
  get collectionViewContentSize(): CGSize { return this.nativeObject.collectionViewContentSize; }
}

export class HTMLNSPasteboardItemElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSPasteboardItem.new();

  get types(): NSArray { return this.nativeObject.types; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLNSScrubberFlowLayoutElement extends HTMLNSScrubberLayoutElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSScrubberFlowLayout.new();

  get itemSpacing(): number { return this.nativeObject.itemSpacing; }
  set itemSpacing(value: number) { this.nativeObject.itemSpacing = value; }
  get itemSize(): CGSize { return this.nativeObject.itemSize; }
  set itemSize(value: CGSize) { this.nativeObject.itemSize = value; }
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

export class HTMLNSTextRangeElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTextRange.new();

  get isEmpty(): boolean { return this.nativeObject.isEmpty; }
  get location(): NSTextLocation { return this.nativeObject.location; }
  get endLocation(): NSTextLocation { return this.nativeObject.endLocation; }
}

export class HTMLNSPressureConfigurationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSPressureConfiguration.new();

  get pressureBehavior(): interop.Enum<typeof NSPressureBehavior> { return this.nativeObject.pressureBehavior; }
}

export class HTMLNSHapticFeedbackManagerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSHapticFeedbackManager.new();

}

export class HTMLNSTextBlockElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTextBlock.new();

  get contentWidth(): number { return this.nativeObject.contentWidth; }
  get contentWidthValueType(): interop.Enum<typeof NSTextBlockValueType> { return this.nativeObject.contentWidthValueType; }
  get verticalAlignment(): interop.Enum<typeof NSTextBlockVerticalAlignment> { return this.nativeObject.verticalAlignment; }
  set verticalAlignment(value: interop.Enum<typeof NSTextBlockVerticalAlignment>) { this.nativeObject.verticalAlignment = value; }
  get backgroundColor(): NSColor { return this.nativeObject.backgroundColor; }
  set backgroundColor(value: NSColor) { this.nativeObject.backgroundColor = value; }
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

export class HTMLNSTreeNodeElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTreeNode.new();

  get representedObject(): interop.Object { return this.nativeObject.representedObject; }
  get indexPath(): NSIndexPath { return this.nativeObject.indexPath; }
  get isLeaf(): boolean { return this.nativeObject.isLeaf; }
  get mutableChildNodes(): NSMutableArray { return this.nativeObject.mutableChildNodes; }
}

export class HTMLNSObjectControllerElement extends HTMLNSControllerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSObjectController.new();

  get content(): interop.Object { return this.nativeObject.content; }
  set content(value: interop.Object) { this.nativeObject.content = value; }
  get selection(): interop.Object { return this.nativeObject.selection; }
  get selectedObjects(): NSArray { return this.nativeObject.selectedObjects; }
  get automaticallyPreparesContent(): boolean { return this.nativeObject.automaticallyPreparesContent; }
  set automaticallyPreparesContent(value: boolean) { this.nativeObject.automaticallyPreparesContent = value; }
  get objectClass(): interop.Object { return this.nativeObject.objectClass; }
  set objectClass(value: interop.Object) { this.nativeObject.objectClass = value; }
  get isEditable(): boolean { return this.nativeObject.isEditable; }
  set isEditable(value: boolean) { this.nativeObject.isEditable = value; }
  get canAdd(): boolean { return this.nativeObject.canAdd; }
  get canRemove(): boolean { return this.nativeObject.canRemove; }
  get managedObjectContext(): NSManagedObjectContext { return this.nativeObject.managedObjectContext; }
  set managedObjectContext(value: NSManagedObjectContext) { this.nativeObject.managedObjectContext = value; }
  get entityName(): string { return this.nativeObject.entityName; }
  set entityName(value: string) { this.nativeObject.entityName = value; }
  get fetchPredicate(): NSPredicate { return this.nativeObject.fetchPredicate; }
  set fetchPredicate(value: NSPredicate) { this.nativeObject.fetchPredicate = value; }
  get usesLazyFetching(): boolean { return this.nativeObject.usesLazyFetching; }
  set usesLazyFetching(value: boolean) { this.nativeObject.usesLazyFetching = value; }
}

export class HTMLNSGlyphInfoElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSGlyphInfo.new();

  get glyphID(): number { return this.nativeObject.glyphID; }
  get baseString(): string { return this.nativeObject.baseString; }
  get glyphName(): string { return this.nativeObject.glyphName; }
  get characterIdentifier(): number { return this.nativeObject.characterIdentifier; }
  get characterCollection(): interop.Enum<typeof NSCharacterCollection> { return this.nativeObject.characterCollection; }
}

export class HTMLNSTableViewDiffableDataSourceElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTableViewDiffableDataSource.new();

  get rowViewProvider(): (p1: NSTableView, p2: number, p3: interop.Object) => NSTableRowView { return this.nativeObject.rowViewProvider; }
  set rowViewProvider(value: (p1: NSTableView, p2: number, p3: interop.Object) => NSTableRowView) { this.nativeObject.rowViewProvider = value; }
  get sectionHeaderViewProvider(): (p1: NSTableView, p2: number, p3: interop.Object) => NSView { return this.nativeObject.sectionHeaderViewProvider; }
  set sectionHeaderViewProvider(value: (p1: NSTableView, p2: number, p3: interop.Object) => NSView) { this.nativeObject.sectionHeaderViewProvider = value; }
  get defaultRowAnimation(): interop.Enum<typeof NSTableViewAnimationOptions> { return this.nativeObject.defaultRowAnimation; }
  set defaultRowAnimation(value: interop.Enum<typeof NSTableViewAnimationOptions>) { this.nativeObject.defaultRowAnimation = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLNSOpenGLPixelBufferElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSOpenGLPixelBuffer.new();

  get CGLPBufferObj(): interop.Pointer { return this.nativeObject.CGLPBufferObj; }
  get pixelsWide(): number { return this.nativeObject.pixelsWide; }
  get pixelsHigh(): number { return this.nativeObject.pixelsHigh; }
  get textureTarget(): number { return this.nativeObject.textureTarget; }
  get textureInternalFormat(): number { return this.nativeObject.textureInternalFormat; }
  get textureMaxMipMapLevel(): number { return this.nativeObject.textureMaxMipMapLevel; }
}

export class HTMLNSCellElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSCell.new();

  get controlView(): NSView { return this.nativeObject.controlView; }
  set controlView(value: NSView) { this.nativeObject.controlView = value; }
  get type(): interop.Enum<typeof NSCellType> { return this.nativeObject.type; }
  set type(value: interop.Enum<typeof NSCellType>) { this.nativeObject.type = value; }
  get state(): number { return this.nativeObject.state; }
  set state(value: number) { this.nativeObject.state = value; }
  get target(): interop.Object { return this.nativeObject.target; }
  set target(value: interop.Object) { this.nativeObject.target = value; }
  get action(): string { return this.nativeObject.action; }
  set action(value: string) { this.nativeObject.action = value; }
  get tag(): number { return this.nativeObject.tag; }
  set tag(value: number) { this.nativeObject.tag = value; }
  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get isOpaque(): boolean { return this.nativeObject.isOpaque; }
  get isEnabled(): boolean { return this.nativeObject.isEnabled; }
  set isEnabled(value: boolean) { this.nativeObject.isEnabled = value; }
  get isContinuous(): boolean { return this.nativeObject.isContinuous; }
  set isContinuous(value: boolean) { this.nativeObject.isContinuous = value; }
  get isEditable(): boolean { return this.nativeObject.isEditable; }
  set isEditable(value: boolean) { this.nativeObject.isEditable = value; }
  get isSelectable(): boolean { return this.nativeObject.isSelectable; }
  set isSelectable(value: boolean) { this.nativeObject.isSelectable = value; }
  get isBordered(): boolean { return this.nativeObject.isBordered; }
  set isBordered(value: boolean) { this.nativeObject.isBordered = value; }
  get isBezeled(): boolean { return this.nativeObject.isBezeled; }
  set isBezeled(value: boolean) { this.nativeObject.isBezeled = value; }
  get isScrollable(): boolean { return this.nativeObject.isScrollable; }
  set isScrollable(value: boolean) { this.nativeObject.isScrollable = value; }
  get isHighlighted(): boolean { return this.nativeObject.isHighlighted; }
  set isHighlighted(value: boolean) { this.nativeObject.isHighlighted = value; }
  get alignment(): interop.Enum<typeof NSTextAlignment> { return this.nativeObject.alignment; }
  set alignment(value: interop.Enum<typeof NSTextAlignment>) { this.nativeObject.alignment = value; }
  get wraps(): boolean { return this.nativeObject.wraps; }
  set wraps(value: boolean) { this.nativeObject.wraps = value; }
  get font(): NSFont { return this.nativeObject.font; }
  set font(value: NSFont) { this.nativeObject.font = value; }
  get keyEquivalent(): string { return this.nativeObject.keyEquivalent; }
  get formatter(): NSFormatter { return this.nativeObject.formatter; }
  set formatter(value: NSFormatter) { this.nativeObject.formatter = value; }
  get objectValue(): interop.Object { return this.nativeObject.objectValue; }
  set objectValue(value: interop.Object) { this.nativeObject.objectValue = value; }
  get hasValidObjectValue(): boolean { return this.nativeObject.hasValidObjectValue; }
  get stringValue(): string { return this.nativeObject.stringValue; }
  set stringValue(value: string) { this.nativeObject.stringValue = value; }
  get intValue(): number { return this.nativeObject.intValue; }
  set intValue(value: number) { this.nativeObject.intValue = value; }
  get floatValue(): number { return this.nativeObject.floatValue; }
  set floatValue(value: number) { this.nativeObject.floatValue = value; }
  get doubleValue(): number { return this.nativeObject.doubleValue; }
  set doubleValue(value: number) { this.nativeObject.doubleValue = value; }
  get integerValue(): number { return this.nativeObject.integerValue; }
  set integerValue(value: number) { this.nativeObject.integerValue = value; }
  get image(): NSImage { return this.nativeObject.image; }
  set image(value: NSImage) { this.nativeObject.image = value; }
  get controlSize(): interop.Enum<typeof NSControlSize> { return this.nativeObject.controlSize; }
  set controlSize(value: interop.Enum<typeof NSControlSize>) { this.nativeObject.controlSize = value; }
  get representedObject(): interop.Object { return this.nativeObject.representedObject; }
  set representedObject(value: interop.Object) { this.nativeObject.representedObject = value; }
  get cellSize(): CGSize { return this.nativeObject.cellSize; }
  get mouseDownFlags(): number { return this.nativeObject.mouseDownFlags; }
  get menu(): NSMenu { return this.nativeObject.menu; }
  set menu(value: NSMenu) { this.nativeObject.menu = value; }
  get sendsActionOnEndEditing(): boolean { return this.nativeObject.sendsActionOnEndEditing; }
  set sendsActionOnEndEditing(value: boolean) { this.nativeObject.sendsActionOnEndEditing = value; }
  get baseWritingDirection(): interop.Enum<typeof NSWritingDirection> { return this.nativeObject.baseWritingDirection; }
  set baseWritingDirection(value: interop.Enum<typeof NSWritingDirection>) { this.nativeObject.baseWritingDirection = value; }
  get lineBreakMode(): interop.Enum<typeof NSLineBreakMode> { return this.nativeObject.lineBreakMode; }
  set lineBreakMode(value: interop.Enum<typeof NSLineBreakMode>) { this.nativeObject.lineBreakMode = value; }
  get allowsUndo(): boolean { return this.nativeObject.allowsUndo; }
  set allowsUndo(value: boolean) { this.nativeObject.allowsUndo = value; }
  get truncatesLastVisibleLine(): boolean { return this.nativeObject.truncatesLastVisibleLine; }
  set truncatesLastVisibleLine(value: boolean) { this.nativeObject.truncatesLastVisibleLine = value; }
  get userInterfaceLayoutDirection(): interop.Enum<typeof NSUserInterfaceLayoutDirection> { return this.nativeObject.userInterfaceLayoutDirection; }
  set userInterfaceLayoutDirection(value: interop.Enum<typeof NSUserInterfaceLayoutDirection>) { this.nativeObject.userInterfaceLayoutDirection = value; }
  get usesSingleLineMode(): boolean { return this.nativeObject.usesSingleLineMode; }
  set usesSingleLineMode(value: boolean) { this.nativeObject.usesSingleLineMode = value; }
  get refusesFirstResponder(): boolean { return this.nativeObject.refusesFirstResponder; }
  set refusesFirstResponder(value: boolean) { this.nativeObject.refusesFirstResponder = value; }
  get acceptsFirstResponder(): boolean { return this.nativeObject.acceptsFirstResponder; }
  get showsFirstResponder(): boolean { return this.nativeObject.showsFirstResponder; }
  set showsFirstResponder(value: boolean) { this.nativeObject.showsFirstResponder = value; }
  get focusRingType(): interop.Enum<typeof NSFocusRingType> { return this.nativeObject.focusRingType; }
  set focusRingType(value: interop.Enum<typeof NSFocusRingType>) { this.nativeObject.focusRingType = value; }
  get wantsNotificationForMarkedText(): boolean { return this.nativeObject.wantsNotificationForMarkedText; }
  get attributedStringValue(): NSAttributedString { return this.nativeObject.attributedStringValue; }
  set attributedStringValue(value: NSAttributedString) { this.nativeObject.attributedStringValue = value; }
  get allowsEditingTextAttributes(): boolean { return this.nativeObject.allowsEditingTextAttributes; }
  set allowsEditingTextAttributes(value: boolean) { this.nativeObject.allowsEditingTextAttributes = value; }
  get importsGraphics(): boolean { return this.nativeObject.importsGraphics; }
  set importsGraphics(value: boolean) { this.nativeObject.importsGraphics = value; }
  get allowsMixedState(): boolean { return this.nativeObject.allowsMixedState; }
  set allowsMixedState(value: boolean) { this.nativeObject.allowsMixedState = value; }
  get nextState(): number { return this.nativeObject.nextState; }
  get backgroundStyle(): interop.Enum<typeof NSBackgroundStyle> { return this.nativeObject.backgroundStyle; }
  set backgroundStyle(value: interop.Enum<typeof NSBackgroundStyle>) { this.nativeObject.backgroundStyle = value; }
  get interiorBackgroundStyle(): interop.Enum<typeof NSBackgroundStyle> { return this.nativeObject.interiorBackgroundStyle; }
  get controlTint(): interop.Enum<typeof NSControlTint> { return this.nativeObject.controlTint; }
  set controlTint(value: interop.Enum<typeof NSControlTint>) { this.nativeObject.controlTint = value; }
  get identifier(): string { return this.nativeObject.identifier; }
  set identifier(value: string) { this.nativeObject.identifier = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
  get isAccessibilityElement(): boolean { return this.nativeObject.isAccessibilityElement; }
  set isAccessibilityElement(value: boolean) { this.nativeObject.isAccessibilityElement = value; }
  get accessibilityFrame(): CGRect { return this.nativeObject.accessibilityFrame; }
  set accessibilityFrame(value: CGRect) { this.nativeObject.accessibilityFrame = value; }
  get isAccessibilityFocused(): boolean { return this.nativeObject.isAccessibilityFocused; }
  set isAccessibilityFocused(value: boolean) { this.nativeObject.isAccessibilityFocused = value; }
  get accessibilityActivationPoint(): CGPoint { return this.nativeObject.accessibilityActivationPoint; }
  set accessibilityActivationPoint(value: CGPoint) { this.nativeObject.accessibilityActivationPoint = value; }
  get accessibilityTopLevelUIElement(): interop.Object { return this.nativeObject.accessibilityTopLevelUIElement; }
  set accessibilityTopLevelUIElement(value: interop.Object) { this.nativeObject.accessibilityTopLevelUIElement = value; }
  get accessibilityURL(): NSURL { return this.nativeObject.accessibilityURL; }
  set accessibilityURL(value: NSURL) { this.nativeObject.accessibilityURL = value; }
  get accessibilityValue(): interop.Object { return this.nativeObject.accessibilityValue; }
  set accessibilityValue(value: interop.Object) { this.nativeObject.accessibilityValue = value; }
  get accessibilityValueDescription(): string { return this.nativeObject.accessibilityValueDescription; }
  set accessibilityValueDescription(value: string) { this.nativeObject.accessibilityValueDescription = value; }
  get accessibilityVisibleChildren(): NSArray { return this.nativeObject.accessibilityVisibleChildren; }
  set accessibilityVisibleChildren(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleChildren = value; }
  get accessibilitySubrole(): string { return this.nativeObject.accessibilitySubrole; }
  set accessibilitySubrole(value: string) { this.nativeObject.accessibilitySubrole = value; }
  get accessibilityTitle(): string { return this.nativeObject.accessibilityTitle; }
  set accessibilityTitle(value: string) { this.nativeObject.accessibilityTitle = value; }
  get accessibilityTitleUIElement(): interop.Object { return this.nativeObject.accessibilityTitleUIElement; }
  set accessibilityTitleUIElement(value: interop.Object) { this.nativeObject.accessibilityTitleUIElement = value; }
  get accessibilityNextContents(): NSArray { return this.nativeObject.accessibilityNextContents; }
  set accessibilityNextContents(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityNextContents = value; }
  get accessibilityOrientation(): interop.Enum<typeof NSAccessibilityOrientation> { return this.nativeObject.accessibilityOrientation; }
  set accessibilityOrientation(value: interop.Enum<typeof NSAccessibilityOrientation>) { this.nativeObject.accessibilityOrientation = value; }
  get accessibilityOverflowButton(): interop.Object { return this.nativeObject.accessibilityOverflowButton; }
  set accessibilityOverflowButton(value: interop.Object) { this.nativeObject.accessibilityOverflowButton = value; }
  get accessibilityParent(): interop.Object { return this.nativeObject.accessibilityParent; }
  set accessibilityParent(value: interop.Object) { this.nativeObject.accessibilityParent = value; }
  get accessibilityPlaceholderValue(): string { return this.nativeObject.accessibilityPlaceholderValue; }
  set accessibilityPlaceholderValue(value: string) { this.nativeObject.accessibilityPlaceholderValue = value; }
  get accessibilityPreviousContents(): NSArray { return this.nativeObject.accessibilityPreviousContents; }
  set accessibilityPreviousContents(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityPreviousContents = value; }
  get accessibilityRole(): string { return this.nativeObject.accessibilityRole; }
  set accessibilityRole(value: string) { this.nativeObject.accessibilityRole = value; }
  get accessibilityRoleDescription(): string { return this.nativeObject.accessibilityRoleDescription; }
  set accessibilityRoleDescription(value: string) { this.nativeObject.accessibilityRoleDescription = value; }
  get accessibilitySearchButton(): interop.Object { return this.nativeObject.accessibilitySearchButton; }
  set accessibilitySearchButton(value: interop.Object) { this.nativeObject.accessibilitySearchButton = value; }
  get accessibilitySearchMenu(): interop.Object { return this.nativeObject.accessibilitySearchMenu; }
  set accessibilitySearchMenu(value: interop.Object) { this.nativeObject.accessibilitySearchMenu = value; }
  get isAccessibilitySelected(): boolean { return this.nativeObject.isAccessibilitySelected; }
  set isAccessibilitySelected(value: boolean) { this.nativeObject.isAccessibilitySelected = value; }
  get accessibilitySelectedChildren(): NSArray { return this.nativeObject.accessibilitySelectedChildren; }
  set accessibilitySelectedChildren(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedChildren = value; }
  get accessibilityServesAsTitleForUIElements(): NSArray { return this.nativeObject.accessibilityServesAsTitleForUIElements; }
  set accessibilityServesAsTitleForUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityServesAsTitleForUIElements = value; }
  get accessibilityShownMenu(): interop.Object { return this.nativeObject.accessibilityShownMenu; }
  set accessibilityShownMenu(value: interop.Object) { this.nativeObject.accessibilityShownMenu = value; }
  get accessibilityMinValue(): interop.Object { return this.nativeObject.accessibilityMinValue; }
  set accessibilityMinValue(value: interop.Object) { this.nativeObject.accessibilityMinValue = value; }
  get accessibilityMaxValue(): interop.Object { return this.nativeObject.accessibilityMaxValue; }
  set accessibilityMaxValue(value: interop.Object) { this.nativeObject.accessibilityMaxValue = value; }
  get accessibilityLinkedUIElements(): NSArray { return this.nativeObject.accessibilityLinkedUIElements; }
  set accessibilityLinkedUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityLinkedUIElements = value; }
  get accessibilityWindow(): interop.Object { return this.nativeObject.accessibilityWindow; }
  set accessibilityWindow(value: interop.Object) { this.nativeObject.accessibilityWindow = value; }
  get accessibilityIdentifier(): string { return this.nativeObject.accessibilityIdentifier; }
  set accessibilityIdentifier(value: string) { this.nativeObject.accessibilityIdentifier = value; }
  get accessibilityHelp(): string { return this.nativeObject.accessibilityHelp; }
  set accessibilityHelp(value: string) { this.nativeObject.accessibilityHelp = value; }
  get accessibilityFilename(): string { return this.nativeObject.accessibilityFilename; }
  set accessibilityFilename(value: string) { this.nativeObject.accessibilityFilename = value; }
  get isAccessibilityExpanded(): boolean { return this.nativeObject.isAccessibilityExpanded; }
  set isAccessibilityExpanded(value: boolean) { this.nativeObject.isAccessibilityExpanded = value; }
  get isAccessibilityEdited(): boolean { return this.nativeObject.isAccessibilityEdited; }
  set isAccessibilityEdited(value: boolean) { this.nativeObject.isAccessibilityEdited = value; }
  get isAccessibilityEnabled(): boolean { return this.nativeObject.isAccessibilityEnabled; }
  set isAccessibilityEnabled(value: boolean) { this.nativeObject.isAccessibilityEnabled = value; }
  get accessibilityChildren(): NSArray { return this.nativeObject.accessibilityChildren; }
  set accessibilityChildren(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityChildren = value; }
  get accessibilityChildrenInNavigationOrder(): NSArray { return this.nativeObject.accessibilityChildrenInNavigationOrder; }
  set accessibilityChildrenInNavigationOrder(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityChildrenInNavigationOrder = value; }
  get accessibilityClearButton(): interop.Object { return this.nativeObject.accessibilityClearButton; }
  set accessibilityClearButton(value: interop.Object) { this.nativeObject.accessibilityClearButton = value; }
  get accessibilityCancelButton(): interop.Object { return this.nativeObject.accessibilityCancelButton; }
  set accessibilityCancelButton(value: interop.Object) { this.nativeObject.accessibilityCancelButton = value; }
  get isAccessibilityProtectedContent(): boolean { return this.nativeObject.isAccessibilityProtectedContent; }
  set isAccessibilityProtectedContent(value: boolean) { this.nativeObject.isAccessibilityProtectedContent = value; }
  get accessibilityContents(): NSArray { return this.nativeObject.accessibilityContents; }
  set accessibilityContents(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityContents = value; }
  get accessibilityLabel(): string { return this.nativeObject.accessibilityLabel; }
  set accessibilityLabel(value: string) { this.nativeObject.accessibilityLabel = value; }
  get isAccessibilityAlternateUIVisible(): boolean { return this.nativeObject.isAccessibilityAlternateUIVisible; }
  set isAccessibilityAlternateUIVisible(value: boolean) { this.nativeObject.isAccessibilityAlternateUIVisible = value; }
  get accessibilitySharedFocusElements(): NSArray { return this.nativeObject.accessibilitySharedFocusElements; }
  set accessibilitySharedFocusElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySharedFocusElements = value; }
  get isAccessibilityRequired(): boolean { return this.nativeObject.isAccessibilityRequired; }
  set isAccessibilityRequired(value: boolean) { this.nativeObject.isAccessibilityRequired = value; }
  get accessibilityCustomRotors(): NSArray { return this.nativeObject.accessibilityCustomRotors; }
  set accessibilityCustomRotors(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityCustomRotors = value; }
  get accessibilityUserInputLabels(): NSArray { return this.nativeObject.accessibilityUserInputLabels; }
  set accessibilityUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityUserInputLabels = value; }
  get accessibilityAttributedUserInputLabels(): NSArray { return this.nativeObject.accessibilityAttributedUserInputLabels; }
  set accessibilityAttributedUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityAttributedUserInputLabels = value; }
  get accessibilityApplicationFocusedUIElement(): interop.Object { return this.nativeObject.accessibilityApplicationFocusedUIElement; }
  set accessibilityApplicationFocusedUIElement(value: interop.Object) { this.nativeObject.accessibilityApplicationFocusedUIElement = value; }
  get accessibilityMainWindow(): interop.Object { return this.nativeObject.accessibilityMainWindow; }
  set accessibilityMainWindow(value: interop.Object) { this.nativeObject.accessibilityMainWindow = value; }
  get isAccessibilityHidden(): boolean { return this.nativeObject.isAccessibilityHidden; }
  set isAccessibilityHidden(value: boolean) { this.nativeObject.isAccessibilityHidden = value; }
  get isAccessibilityFrontmost(): boolean { return this.nativeObject.isAccessibilityFrontmost; }
  set isAccessibilityFrontmost(value: boolean) { this.nativeObject.isAccessibilityFrontmost = value; }
  get accessibilityFocusedWindow(): interop.Object { return this.nativeObject.accessibilityFocusedWindow; }
  set accessibilityFocusedWindow(value: interop.Object) { this.nativeObject.accessibilityFocusedWindow = value; }
  get accessibilityWindows(): NSArray { return this.nativeObject.accessibilityWindows; }
  set accessibilityWindows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityWindows = value; }
  get accessibilityExtrasMenuBar(): interop.Object { return this.nativeObject.accessibilityExtrasMenuBar; }
  set accessibilityExtrasMenuBar(value: interop.Object) { this.nativeObject.accessibilityExtrasMenuBar = value; }
  get accessibilityMenuBar(): interop.Object { return this.nativeObject.accessibilityMenuBar; }
  set accessibilityMenuBar(value: interop.Object) { this.nativeObject.accessibilityMenuBar = value; }
  get accessibilityColumnTitles(): NSArray { return this.nativeObject.accessibilityColumnTitles; }
  set accessibilityColumnTitles(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityColumnTitles = value; }
  get isAccessibilityOrderedByRow(): boolean { return this.nativeObject.isAccessibilityOrderedByRow; }
  set isAccessibilityOrderedByRow(value: boolean) { this.nativeObject.isAccessibilityOrderedByRow = value; }
  get accessibilityHorizontalUnits(): interop.Enum<typeof NSAccessibilityUnits> { return this.nativeObject.accessibilityHorizontalUnits; }
  set accessibilityHorizontalUnits(value: interop.Enum<typeof NSAccessibilityUnits>) { this.nativeObject.accessibilityHorizontalUnits = value; }
  get accessibilityVerticalUnits(): interop.Enum<typeof NSAccessibilityUnits> { return this.nativeObject.accessibilityVerticalUnits; }
  set accessibilityVerticalUnits(value: interop.Enum<typeof NSAccessibilityUnits>) { this.nativeObject.accessibilityVerticalUnits = value; }
  get accessibilityHorizontalUnitDescription(): string { return this.nativeObject.accessibilityHorizontalUnitDescription; }
  set accessibilityHorizontalUnitDescription(value: string) { this.nativeObject.accessibilityHorizontalUnitDescription = value; }
  get accessibilityVerticalUnitDescription(): string { return this.nativeObject.accessibilityVerticalUnitDescription; }
  set accessibilityVerticalUnitDescription(value: string) { this.nativeObject.accessibilityVerticalUnitDescription = value; }
  get accessibilityHandles(): NSArray { return this.nativeObject.accessibilityHandles; }
  set accessibilityHandles(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityHandles = value; }
  get accessibilityWarningValue(): interop.Object { return this.nativeObject.accessibilityWarningValue; }
  set accessibilityWarningValue(value: interop.Object) { this.nativeObject.accessibilityWarningValue = value; }
  get accessibilityCriticalValue(): interop.Object { return this.nativeObject.accessibilityCriticalValue; }
  set accessibilityCriticalValue(value: interop.Object) { this.nativeObject.accessibilityCriticalValue = value; }
  get isAccessibilityDisclosed(): boolean { return this.nativeObject.isAccessibilityDisclosed; }
  set isAccessibilityDisclosed(value: boolean) { this.nativeObject.isAccessibilityDisclosed = value; }
  get accessibilityDisclosedByRow(): interop.Object { return this.nativeObject.accessibilityDisclosedByRow; }
  set accessibilityDisclosedByRow(value: interop.Object) { this.nativeObject.accessibilityDisclosedByRow = value; }
  get accessibilityDisclosedRows(): interop.Object { return this.nativeObject.accessibilityDisclosedRows; }
  set accessibilityDisclosedRows(value: interop.Object) { this.nativeObject.accessibilityDisclosedRows = value; }
  get accessibilityDisclosureLevel(): number { return this.nativeObject.accessibilityDisclosureLevel; }
  set accessibilityDisclosureLevel(value: number) { this.nativeObject.accessibilityDisclosureLevel = value; }
  get accessibilityMarkerUIElements(): NSArray { return this.nativeObject.accessibilityMarkerUIElements; }
  set accessibilityMarkerUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityMarkerUIElements = value; }
  get accessibilityMarkerValues(): interop.Object { return this.nativeObject.accessibilityMarkerValues; }
  set accessibilityMarkerValues(value: interop.Object) { this.nativeObject.accessibilityMarkerValues = value; }
  get accessibilityMarkerGroupUIElement(): interop.Object { return this.nativeObject.accessibilityMarkerGroupUIElement; }
  set accessibilityMarkerGroupUIElement(value: interop.Object) { this.nativeObject.accessibilityMarkerGroupUIElement = value; }
  get accessibilityUnits(): interop.Enum<typeof NSAccessibilityUnits> { return this.nativeObject.accessibilityUnits; }
  set accessibilityUnits(value: interop.Enum<typeof NSAccessibilityUnits>) { this.nativeObject.accessibilityUnits = value; }
  get accessibilityUnitDescription(): string { return this.nativeObject.accessibilityUnitDescription; }
  set accessibilityUnitDescription(value: string) { this.nativeObject.accessibilityUnitDescription = value; }
  get accessibilityRulerMarkerType(): interop.Enum<typeof NSAccessibilityRulerMarkerType> { return this.nativeObject.accessibilityRulerMarkerType; }
  set accessibilityRulerMarkerType(value: interop.Enum<typeof NSAccessibilityRulerMarkerType>) { this.nativeObject.accessibilityRulerMarkerType = value; }
  get accessibilityMarkerTypeDescription(): string { return this.nativeObject.accessibilityMarkerTypeDescription; }
  set accessibilityMarkerTypeDescription(value: string) { this.nativeObject.accessibilityMarkerTypeDescription = value; }
  get accessibilityHorizontalScrollBar(): interop.Object { return this.nativeObject.accessibilityHorizontalScrollBar; }
  set accessibilityHorizontalScrollBar(value: interop.Object) { this.nativeObject.accessibilityHorizontalScrollBar = value; }
  get accessibilityVerticalScrollBar(): interop.Object { return this.nativeObject.accessibilityVerticalScrollBar; }
  set accessibilityVerticalScrollBar(value: interop.Object) { this.nativeObject.accessibilityVerticalScrollBar = value; }
  get accessibilityAllowedValues(): NSArray { return this.nativeObject.accessibilityAllowedValues; }
  set accessibilityAllowedValues(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityAllowedValues = value; }
  get accessibilityLabelUIElements(): NSArray { return this.nativeObject.accessibilityLabelUIElements; }
  set accessibilityLabelUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityLabelUIElements = value; }
  get accessibilityLabelValue(): number { return this.nativeObject.accessibilityLabelValue; }
  set accessibilityLabelValue(value: number) { this.nativeObject.accessibilityLabelValue = value; }
  get accessibilitySplitters(): NSArray { return this.nativeObject.accessibilitySplitters; }
  set accessibilitySplitters(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySplitters = value; }
  get accessibilityDecrementButton(): interop.Object { return this.nativeObject.accessibilityDecrementButton; }
  set accessibilityDecrementButton(value: interop.Object) { this.nativeObject.accessibilityDecrementButton = value; }
  get accessibilityIncrementButton(): interop.Object { return this.nativeObject.accessibilityIncrementButton; }
  set accessibilityIncrementButton(value: interop.Object) { this.nativeObject.accessibilityIncrementButton = value; }
  get accessibilityTabs(): NSArray { return this.nativeObject.accessibilityTabs; }
  set accessibilityTabs(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityTabs = value; }
  get accessibilityHeader(): interop.Object { return this.nativeObject.accessibilityHeader; }
  set accessibilityHeader(value: interop.Object) { this.nativeObject.accessibilityHeader = value; }
  get accessibilityColumnCount(): number { return this.nativeObject.accessibilityColumnCount; }
  set accessibilityColumnCount(value: number) { this.nativeObject.accessibilityColumnCount = value; }
  get accessibilityRowCount(): number { return this.nativeObject.accessibilityRowCount; }
  set accessibilityRowCount(value: number) { this.nativeObject.accessibilityRowCount = value; }
  get accessibilityIndex(): number { return this.nativeObject.accessibilityIndex; }
  set accessibilityIndex(value: number) { this.nativeObject.accessibilityIndex = value; }
  get accessibilityColumns(): NSArray { return this.nativeObject.accessibilityColumns; }
  set accessibilityColumns(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityColumns = value; }
  get accessibilityRows(): NSArray { return this.nativeObject.accessibilityRows; }
  set accessibilityRows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityRows = value; }
  get accessibilityVisibleRows(): NSArray { return this.nativeObject.accessibilityVisibleRows; }
  set accessibilityVisibleRows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleRows = value; }
  get accessibilitySelectedRows(): NSArray { return this.nativeObject.accessibilitySelectedRows; }
  set accessibilitySelectedRows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedRows = value; }
  get accessibilityVisibleColumns(): NSArray { return this.nativeObject.accessibilityVisibleColumns; }
  set accessibilityVisibleColumns(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleColumns = value; }
  get accessibilitySelectedColumns(): NSArray { return this.nativeObject.accessibilitySelectedColumns; }
  set accessibilitySelectedColumns(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedColumns = value; }
  get accessibilitySortDirection(): interop.Enum<typeof NSAccessibilitySortDirection> { return this.nativeObject.accessibilitySortDirection; }
  set accessibilitySortDirection(value: interop.Enum<typeof NSAccessibilitySortDirection>) { this.nativeObject.accessibilitySortDirection = value; }
  get accessibilityRowHeaderUIElements(): NSArray { return this.nativeObject.accessibilityRowHeaderUIElements; }
  set accessibilityRowHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityRowHeaderUIElements = value; }
  get accessibilitySelectedCells(): NSArray { return this.nativeObject.accessibilitySelectedCells; }
  set accessibilitySelectedCells(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedCells = value; }
  get accessibilityVisibleCells(): NSArray { return this.nativeObject.accessibilityVisibleCells; }
  set accessibilityVisibleCells(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleCells = value; }
  get accessibilityColumnHeaderUIElements(): NSArray { return this.nativeObject.accessibilityColumnHeaderUIElements; }
  set accessibilityColumnHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityColumnHeaderUIElements = value; }
  get accessibilityRowIndexRange(): _NSRange { return this.nativeObject.accessibilityRowIndexRange; }
  set accessibilityRowIndexRange(value: _NSRange) { this.nativeObject.accessibilityRowIndexRange = value; }
  get accessibilityColumnIndexRange(): _NSRange { return this.nativeObject.accessibilityColumnIndexRange; }
  set accessibilityColumnIndexRange(value: _NSRange) { this.nativeObject.accessibilityColumnIndexRange = value; }
  get accessibilityInsertionPointLineNumber(): number { return this.nativeObject.accessibilityInsertionPointLineNumber; }
  set accessibilityInsertionPointLineNumber(value: number) { this.nativeObject.accessibilityInsertionPointLineNumber = value; }
  get accessibilitySharedCharacterRange(): _NSRange { return this.nativeObject.accessibilitySharedCharacterRange; }
  set accessibilitySharedCharacterRange(value: _NSRange) { this.nativeObject.accessibilitySharedCharacterRange = value; }
  get accessibilitySharedTextUIElements(): NSArray { return this.nativeObject.accessibilitySharedTextUIElements; }
  set accessibilitySharedTextUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySharedTextUIElements = value; }
  get accessibilityVisibleCharacterRange(): _NSRange { return this.nativeObject.accessibilityVisibleCharacterRange; }
  set accessibilityVisibleCharacterRange(value: _NSRange) { this.nativeObject.accessibilityVisibleCharacterRange = value; }
  get accessibilityNumberOfCharacters(): number { return this.nativeObject.accessibilityNumberOfCharacters; }
  set accessibilityNumberOfCharacters(value: number) { this.nativeObject.accessibilityNumberOfCharacters = value; }
  get accessibilitySelectedText(): string { return this.nativeObject.accessibilitySelectedText; }
  set accessibilitySelectedText(value: string) { this.nativeObject.accessibilitySelectedText = value; }
  get accessibilitySelectedTextRange(): _NSRange { return this.nativeObject.accessibilitySelectedTextRange; }
  set accessibilitySelectedTextRange(value: _NSRange) { this.nativeObject.accessibilitySelectedTextRange = value; }
  get accessibilitySelectedTextRanges(): NSArray { return this.nativeObject.accessibilitySelectedTextRanges; }
  set accessibilitySelectedTextRanges(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedTextRanges = value; }
  get accessibilityToolbarButton(): interop.Object { return this.nativeObject.accessibilityToolbarButton; }
  set accessibilityToolbarButton(value: interop.Object) { this.nativeObject.accessibilityToolbarButton = value; }
  get isAccessibilityModal(): boolean { return this.nativeObject.isAccessibilityModal; }
  set isAccessibilityModal(value: boolean) { this.nativeObject.isAccessibilityModal = value; }
  get accessibilityProxy(): interop.Object { return this.nativeObject.accessibilityProxy; }
  set accessibilityProxy(value: interop.Object) { this.nativeObject.accessibilityProxy = value; }
  get isAccessibilityMain(): boolean { return this.nativeObject.isAccessibilityMain; }
  set isAccessibilityMain(value: boolean) { this.nativeObject.isAccessibilityMain = value; }
  get accessibilityFullScreenButton(): interop.Object { return this.nativeObject.accessibilityFullScreenButton; }
  set accessibilityFullScreenButton(value: interop.Object) { this.nativeObject.accessibilityFullScreenButton = value; }
  get accessibilityGrowArea(): interop.Object { return this.nativeObject.accessibilityGrowArea; }
  set accessibilityGrowArea(value: interop.Object) { this.nativeObject.accessibilityGrowArea = value; }
  get accessibilityDocument(): string { return this.nativeObject.accessibilityDocument; }
  set accessibilityDocument(value: string) { this.nativeObject.accessibilityDocument = value; }
  get accessibilityDefaultButton(): interop.Object { return this.nativeObject.accessibilityDefaultButton; }
  set accessibilityDefaultButton(value: interop.Object) { this.nativeObject.accessibilityDefaultButton = value; }
  get accessibilityCloseButton(): interop.Object { return this.nativeObject.accessibilityCloseButton; }
  set accessibilityCloseButton(value: interop.Object) { this.nativeObject.accessibilityCloseButton = value; }
  get accessibilityZoomButton(): interop.Object { return this.nativeObject.accessibilityZoomButton; }
  set accessibilityZoomButton(value: interop.Object) { this.nativeObject.accessibilityZoomButton = value; }
  get accessibilityMinimizeButton(): interop.Object { return this.nativeObject.accessibilityMinimizeButton; }
  set accessibilityMinimizeButton(value: interop.Object) { this.nativeObject.accessibilityMinimizeButton = value; }
  get isAccessibilityMinimized(): boolean { return this.nativeObject.isAccessibilityMinimized; }
  set isAccessibilityMinimized(value: boolean) { this.nativeObject.isAccessibilityMinimized = value; }
  get accessibilityCustomActions(): NSArray { return this.nativeObject.accessibilityCustomActions; }
  set accessibilityCustomActions(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityCustomActions = value; }
}

export class HTMLNSStatusItemElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSStatusItem.new();

  get statusBar(): NSStatusBar | null { return this.nativeObject.statusBar; }
  get length(): number { return this.nativeObject.length; }
  set length(value: number) { this.nativeObject.length = value; }
  get menu(): NSMenu { return this.nativeObject.menu; }
  set menu(value: NSMenu) { this.nativeObject.menu = value; }
  get button(): NSStatusBarButton { return this.nativeObject.button; }
  get behavior(): interop.Enum<typeof NSStatusItemBehavior> { return this.nativeObject.behavior; }
  set behavior(value: interop.Enum<typeof NSStatusItemBehavior>) { this.nativeObject.behavior = value; }
  get isVisible(): boolean { return this.nativeObject.isVisible; }
  set isVisible(value: boolean) { this.nativeObject.isVisible = value; }
  get autosaveName(): string { return this.nativeObject.autosaveName; }
  set autosaveName(value: string) { this.nativeObject.autosaveName = value; }
  get action(): string { return this.nativeObject.action; }
  set action(value: string) { this.nativeObject.action = value; }
  get doubleAction(): string { return this.nativeObject.doubleAction; }
  set doubleAction(value: string) { this.nativeObject.doubleAction = value; }
  get target(): interop.Object { return this.nativeObject.target; }
  set target(value: interop.Object) { this.nativeObject.target = value; }
  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get attributedTitle(): NSAttributedString { return this.nativeObject.attributedTitle; }
  set attributedTitle(value: NSAttributedString) { this.nativeObject.attributedTitle = value; }
  get image(): NSImage { return this.nativeObject.image; }
  set image(value: NSImage) { this.nativeObject.image = value; }
  get alternateImage(): NSImage { return this.nativeObject.alternateImage; }
  set alternateImage(value: NSImage) { this.nativeObject.alternateImage = value; }
  get isEnabled(): boolean { return this.nativeObject.isEnabled; }
  set isEnabled(value: boolean) { this.nativeObject.isEnabled = value; }
  get highlightMode(): boolean { return this.nativeObject.highlightMode; }
  set highlightMode(value: boolean) { this.nativeObject.highlightMode = value; }
  get toolTip(): string { return this.nativeObject.toolTip; }
  set toolTip(value: string) { this.nativeObject.toolTip = value; }
  get view(): NSView { return this.nativeObject.view; }
  set view(value: NSView) { this.nativeObject.view = value; }
}

export class HTMLNSSpeechRecognizerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSSpeechRecognizer.new();
  get delegate(): NSSpeechRecognizerDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSSpeechRecognizerDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSSpeechRecognizerDelegateImpl;
  }

  get commands(): NSArray { return this.nativeObject.commands; }
  set commands(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.commands = value; }
  get displayedCommandsTitle(): string { return this.nativeObject.displayedCommandsTitle; }
  set displayedCommandsTitle(value: string) { this.nativeObject.displayedCommandsTitle = value; }
  get listensInForegroundOnly(): boolean { return this.nativeObject.listensInForegroundOnly; }
  set listensInForegroundOnly(value: boolean) { this.nativeObject.listensInForegroundOnly = value; }
  get blocksOtherRecognizers(): boolean { return this.nativeObject.blocksOtherRecognizers; }
  set blocksOtherRecognizers(value: boolean) { this.nativeObject.blocksOtherRecognizers = value; }

  set speechRecognizerDidRecognizeCommand(value: (sender: NSSpeechRecognizer, command: string) => void) {
    this.delegate.speechRecognizerDidRecognizeCommand = value;
  }
}

export class HTMLNSCollectionLayoutGroupCustomItemElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSCollectionLayoutGroupCustomItem.new();

  get frame(): CGRect { return this.nativeObject.frame; }
  get zIndex(): number { return this.nativeObject.zIndex; }
}

export class HTMLNSTableViewRowActionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTableViewRowAction.new();

  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get backgroundColor(): NSColor { return this.nativeObject.backgroundColor; }
  set backgroundColor(value: NSColor) { this.nativeObject.backgroundColor = value; }
  get image(): NSImage { return this.nativeObject.image; }
  set image(value: NSImage) { this.nativeObject.image = value; }
}

export class HTMLNSTextAttachmentViewProviderElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTextAttachmentViewProvider.new();

  get textAttachment(): NSTextAttachment | null { return this.nativeObject.textAttachment; }
  get textLayoutManager(): NSTextLayoutManager { return this.nativeObject.textLayoutManager; }
  get location(): NSTextLocation { return this.nativeObject.location; }
  get view(): NSView { return this.nativeObject.view; }
  set view(value: NSView) { this.nativeObject.view = value; }
  get tracksTextAttachmentViewBounds(): boolean { return this.nativeObject.tracksTextAttachmentViewBounds; }
  set tracksTextAttachmentViewBounds(value: boolean) { this.nativeObject.tracksTextAttachmentViewBounds = value; }
}

export class HTMLNSToolbarItemElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSToolbarItem.new();

  get itemIdentifier(): string { return this.nativeObject.itemIdentifier; }
  get toolbar(): NSToolbar { return this.nativeObject.toolbar; }
  get label(): string { return this.nativeObject.label; }
  set label(value: string) { this.nativeObject.label = value; }
  get paletteLabel(): string { return this.nativeObject.paletteLabel; }
  set paletteLabel(value: string) { this.nativeObject.paletteLabel = value; }
  get possibleLabels(): NSSet { return this.nativeObject.possibleLabels; }
  set possibleLabels(value: NSSet) { this.nativeObject.possibleLabels = value; }
  get toolTip(): string { return this.nativeObject.toolTip; }
  set toolTip(value: string) { this.nativeObject.toolTip = value; }
  get menuFormRepresentation(): NSMenuItem { return this.nativeObject.menuFormRepresentation; }
  set menuFormRepresentation(value: NSMenuItem) { this.nativeObject.menuFormRepresentation = value; }
  get tag(): number { return this.nativeObject.tag; }
  set tag(value: number) { this.nativeObject.tag = value; }
  get target(): interop.Object { return this.nativeObject.target; }
  set target(value: interop.Object) { this.nativeObject.target = value; }
  get action(): string { return this.nativeObject.action; }
  set action(value: string) { this.nativeObject.action = value; }
  get isEnabled(): boolean { return this.nativeObject.isEnabled; }
  set isEnabled(value: boolean) { this.nativeObject.isEnabled = value; }
  get image(): NSImage { return this.nativeObject.image; }
  set image(value: NSImage) { this.nativeObject.image = value; }
  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get isBordered(): boolean { return this.nativeObject.isBordered; }
  set isBordered(value: boolean) { this.nativeObject.isBordered = value; }
  get isNavigational(): boolean { return this.nativeObject.isNavigational; }
  set isNavigational(value: boolean) { this.nativeObject.isNavigational = value; }
  get view(): NSView { return this.nativeObject.view; }
  set view(value: NSView) { this.nativeObject.view = value; }
  get isVisible(): boolean { return this.nativeObject.isVisible; }
  get minSize(): CGSize { return this.nativeObject.minSize; }
  set minSize(value: CGSize) { this.nativeObject.minSize = value; }
  get maxSize(): CGSize { return this.nativeObject.maxSize; }
  set maxSize(value: CGSize) { this.nativeObject.maxSize = value; }
  get visibilityPriority(): number { return this.nativeObject.visibilityPriority; }
  set visibilityPriority(value: number) { this.nativeObject.visibilityPriority = value; }
  get autovalidates(): boolean { return this.nativeObject.autovalidates; }
  set autovalidates(value: boolean) { this.nativeObject.autovalidates = value; }
  get allowsDuplicatesInToolbar(): boolean { return this.nativeObject.allowsDuplicatesInToolbar; }
}

export class HTMLNSGlyphGeneratorElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSGlyphGenerator.new();

}

export class HTMLNSGridCellElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSGridCell.new();

  get contentView(): NSView { return this.nativeObject.contentView; }
  set contentView(value: NSView) { this.nativeObject.contentView = value; }
  get row(): NSGridRow | null { return this.nativeObject.row; }
  get column(): NSGridColumn | null { return this.nativeObject.column; }
  get xPlacement(): interop.Enum<typeof NSGridCellPlacement> { return this.nativeObject.xPlacement; }
  set xPlacement(value: interop.Enum<typeof NSGridCellPlacement>) { this.nativeObject.xPlacement = value; }
  get yPlacement(): interop.Enum<typeof NSGridCellPlacement> { return this.nativeObject.yPlacement; }
  set yPlacement(value: interop.Enum<typeof NSGridCellPlacement>) { this.nativeObject.yPlacement = value; }
  get rowAlignment(): interop.Enum<typeof NSGridRowAlignment> { return this.nativeObject.rowAlignment; }
  set rowAlignment(value: interop.Enum<typeof NSGridRowAlignment>) { this.nativeObject.rowAlignment = value; }
  get customPlacementConstraints(): NSArray { return this.nativeObject.customPlacementConstraints; }
  set customPlacementConstraints(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.customPlacementConstraints = value; }
}

export class HTMLNSColorSamplerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSColorSampler.new();

}

export class HTMLNSPDFPanelElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSPDFPanel.new();

  get accessoryController(): NSViewController { return this.nativeObject.accessoryController; }
  set accessoryController(value: NSViewController) { this.nativeObject.accessoryController = value; }
  get options(): interop.Enum<typeof NSPDFPanelOptions> { return this.nativeObject.options; }
  set options(value: interop.Enum<typeof NSPDFPanelOptions>) { this.nativeObject.options = value; }
  get defaultFileName(): string { return this.nativeObject.defaultFileName; }
  set defaultFileName(value: string) { this.nativeObject.defaultFileName = value; }
}

export class HTMLNSPageLayoutElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSPageLayout.new();

  get accessoryControllers(): NSArray { return this.nativeObject.accessoryControllers; }
  get printInfo(): NSPrintInfo { return this.nativeObject.printInfo; }
}

export class HTMLNSScreenElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSScreen.new();

  get depth(): interop.Enum<typeof NSWindowDepth> { return this.nativeObject.depth; }
  get frame(): CGRect { return this.nativeObject.frame; }
  get visibleFrame(): CGRect { return this.nativeObject.visibleFrame; }
  get deviceDescription(): NSDictionary { return this.nativeObject.deviceDescription; }
  get colorSpace(): NSColorSpace { return this.nativeObject.colorSpace; }
  get supportedWindowDepths(): interop.Pointer { return this.nativeObject.supportedWindowDepths; }
  get backingScaleFactor(): number { return this.nativeObject.backingScaleFactor; }
  get localizedName(): string { return this.nativeObject.localizedName; }
  get safeAreaInsets(): NSEdgeInsets { return this.nativeObject.safeAreaInsets; }
  get auxiliaryTopLeftArea(): CGRect { return this.nativeObject.auxiliaryTopLeftArea; }
  get auxiliaryTopRightArea(): CGRect { return this.nativeObject.auxiliaryTopRightArea; }
  get maximumExtendedDynamicRangeColorComponentValue(): number { return this.nativeObject.maximumExtendedDynamicRangeColorComponentValue; }
  get maximumPotentialExtendedDynamicRangeColorComponentValue(): number { return this.nativeObject.maximumPotentialExtendedDynamicRangeColorComponentValue; }
  get maximumReferenceExtendedDynamicRangeColorComponentValue(): number { return this.nativeObject.maximumReferenceExtendedDynamicRangeColorComponentValue; }
  get maximumFramesPerSecond(): number { return this.nativeObject.maximumFramesPerSecond; }
  get minimumRefreshInterval(): number { return this.nativeObject.minimumRefreshInterval; }
  get maximumRefreshInterval(): number { return this.nativeObject.maximumRefreshInterval; }
  get displayUpdateGranularity(): number { return this.nativeObject.displayUpdateGranularity; }
  get lastDisplayUpdateTimestamp(): number { return this.nativeObject.lastDisplayUpdateTimestamp; }
}

export class HTMLNSImageSymbolConfigurationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSImageSymbolConfiguration.new();

}

export class HTMLNSRulerMarkerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSRulerMarker.new();

  get ruler(): NSRulerView | null { return this.nativeObject.ruler; }
  get markerLocation(): number { return this.nativeObject.markerLocation; }
  set markerLocation(value: number) { this.nativeObject.markerLocation = value; }
  get image(): NSImage { return this.nativeObject.image; }
  set image(value: NSImage) { this.nativeObject.image = value; }
  get imageOrigin(): CGPoint { return this.nativeObject.imageOrigin; }
  set imageOrigin(value: CGPoint) { this.nativeObject.imageOrigin = value; }
  get isMovable(): boolean { return this.nativeObject.isMovable; }
  set isMovable(value: boolean) { this.nativeObject.isMovable = value; }
  get isRemovable(): boolean { return this.nativeObject.isRemovable; }
  set isRemovable(value: boolean) { this.nativeObject.isRemovable = value; }
  get isDragging(): boolean { return this.nativeObject.isDragging; }
  get representedObject(): NSCopying { return this.nativeObject.representedObject; }
  set representedObject(value: NSCopying) { this.nativeObject.representedObject = value; }
  get imageRectInRuler(): CGRect { return this.nativeObject.imageRectInRuler; }
  get thicknessRequiredInRuler(): number { return this.nativeObject.thicknessRequiredInRuler; }
}

export class HTMLNSFilePromiseReceiverElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSFilePromiseReceiver.new();

  get fileTypes(): NSArray { return this.nativeObject.fileTypes; }
  get fileNames(): NSArray { return this.nativeObject.fileNames; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLNSColorPickerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSColorPicker.new();

  get colorPanel(): NSColorPanel { return this.nativeObject.colorPanel; }
  get provideNewButtonImage(): NSImage { return this.nativeObject.provideNewButtonImage; }
  get buttonToolTip(): string { return this.nativeObject.buttonToolTip; }
  get minContentSize(): CGSize { return this.nativeObject.minContentSize; }
}

export class HTMLNSBrowserCellElement extends HTMLNSCellElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSBrowserCell.new();

  get isLeaf(): boolean { return this.nativeObject.isLeaf; }
  set isLeaf(value: boolean) { this.nativeObject.isLeaf = value; }
  get isLoaded(): boolean { return this.nativeObject.isLoaded; }
  set isLoaded(value: boolean) { this.nativeObject.isLoaded = value; }
  get image(): NSImage { return this.nativeObject.image; }
  set image(value: NSImage) { this.nativeObject.image = value; }
  get alternateImage(): NSImage { return this.nativeObject.alternateImage; }
  set alternateImage(value: NSImage) { this.nativeObject.alternateImage = value; }
}

export class HTMLNSImageRepElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSImageRep.new();

  get size(): CGSize { return this.nativeObject.size; }
  set size(value: CGSize) { this.nativeObject.size = value; }
  get hasAlpha(): boolean { return this.nativeObject.hasAlpha; }
  set hasAlpha(value: boolean) { this.nativeObject.hasAlpha = value; }
  get isOpaque(): boolean { return this.nativeObject.isOpaque; }
  set isOpaque(value: boolean) { this.nativeObject.isOpaque = value; }
  get colorSpaceName(): string { return this.nativeObject.colorSpaceName; }
  set colorSpaceName(value: string) { this.nativeObject.colorSpaceName = value; }
  get bitsPerSample(): number { return this.nativeObject.bitsPerSample; }
  set bitsPerSample(value: number) { this.nativeObject.bitsPerSample = value; }
  get pixelsWide(): number { return this.nativeObject.pixelsWide; }
  set pixelsWide(value: number) { this.nativeObject.pixelsWide = value; }
  get pixelsHigh(): number { return this.nativeObject.pixelsHigh; }
  set pixelsHigh(value: number) { this.nativeObject.pixelsHigh = value; }
  get layoutDirection(): interop.Enum<typeof NSImageLayoutDirection> { return this.nativeObject.layoutDirection; }
  set layoutDirection(value: interop.Enum<typeof NSImageLayoutDirection>) { this.nativeObject.layoutDirection = value; }
}

export class HTMLNSFontCollectionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSFontCollection.new();

  get queryDescriptors(): NSArray { return this.nativeObject.queryDescriptors; }
  get exclusionDescriptors(): NSArray { return this.nativeObject.exclusionDescriptors; }
  get matchingDescriptors(): NSArray { return this.nativeObject.matchingDescriptors; }
}

export class HTMLNSFontAssetRequestElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSFontAssetRequest.new();

  get downloadedFontDescriptors(): NSArray { return this.nativeObject.downloadedFontDescriptors; }
  get progress(): NSProgress { return this.nativeObject.progress; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLNSFontDescriptorElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSFontDescriptor.new();

  get postscriptName(): string { return this.nativeObject.postscriptName; }
  get pointSize(): number { return this.nativeObject.pointSize; }
  get matrix(): NSAffineTransform { return this.nativeObject.matrix; }
  get symbolicTraits(): interop.Enum<typeof NSFontDescriptorSymbolicTraits> { return this.nativeObject.symbolicTraits; }
  get requiresFontAssetRequest(): boolean { return this.nativeObject.requiresFontAssetRequest; }
  get fontAttributes(): NSDictionary { return this.nativeObject.fontAttributes; }
}

export class HTMLNSGradientElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSGradient.new();

  get colorSpace(): NSColorSpace { return this.nativeObject.colorSpace; }
  get numberOfColorStops(): number { return this.nativeObject.numberOfColorStops; }
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

export class HTMLNSCollectionLayoutSizeElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSCollectionLayoutSize.new();

  get widthDimension(): NSCollectionLayoutDimension { return this.nativeObject.widthDimension; }
  get heightDimension(): NSCollectionLayoutDimension { return this.nativeObject.heightDimension; }
}

export class HTMLNSSharingServicePickerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSSharingServicePicker.new();
  get delegate(): NSSharingServicePickerDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSSharingServicePickerDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSSharingServicePickerDelegateImpl;
  }

  get standardShareMenuItem(): NSMenuItem { return this.nativeObject.standardShareMenuItem; }

  set sharingServicePickerSharingServicesForItemsProposedSharingServices(value: (sharingServicePicker: NSSharingServicePicker, items: NSArray<interop.Object> | Array<interop.Object>, proposedServices: NSArray<interop.Object> | Array<interop.Object>) => NSArray) {
    this.delegate.sharingServicePickerSharingServicesForItemsProposedSharingServices = value;
  }
  set sharingServicePickerDelegateForSharingService(value: (sharingServicePicker: NSSharingServicePicker, sharingService: NSSharingService) => NSSharingServiceDelegate) {
    this.delegate.sharingServicePickerDelegateForSharingService = value;
  }
  set sharingServicePickerDidChooseSharingService(value: (sharingServicePicker: NSSharingServicePicker, service: NSSharingService | null) => void) {
    this.delegate.sharingServicePickerDidChooseSharingService = value;
  }
}

export class HTMLNSCollectionViewCompositionalLayoutConfigurationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSCollectionViewCompositionalLayoutConfiguration.new();

  get scrollDirection(): interop.Enum<typeof NSCollectionViewScrollDirection> { return this.nativeObject.scrollDirection; }
  set scrollDirection(value: interop.Enum<typeof NSCollectionViewScrollDirection>) { this.nativeObject.scrollDirection = value; }
  get interSectionSpacing(): number { return this.nativeObject.interSectionSpacing; }
  set interSectionSpacing(value: number) { this.nativeObject.interSectionSpacing = value; }
  get boundarySupplementaryItems(): NSArray { return this.nativeObject.boundarySupplementaryItems; }
  set boundarySupplementaryItems(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.boundarySupplementaryItems = value; }
}

export class HTMLNSCollectionViewLayoutInvalidationContextElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSCollectionViewLayoutInvalidationContext.new();

  get invalidateEverything(): boolean { return this.nativeObject.invalidateEverything; }
  get invalidateDataSourceCounts(): boolean { return this.nativeObject.invalidateDataSourceCounts; }
  get invalidatedItemIndexPaths(): NSSet { return this.nativeObject.invalidatedItemIndexPaths; }
  get invalidatedSupplementaryIndexPaths(): NSDictionary { return this.nativeObject.invalidatedSupplementaryIndexPaths; }
  get invalidatedDecorationIndexPaths(): NSDictionary { return this.nativeObject.invalidatedDecorationIndexPaths; }
  get contentOffsetAdjustment(): CGPoint { return this.nativeObject.contentOffsetAdjustment; }
  set contentOffsetAdjustment(value: CGPoint) { this.nativeObject.contentOffsetAdjustment = value; }
  get contentSizeAdjustment(): CGSize { return this.nativeObject.contentSizeAdjustment; }
  set contentSizeAdjustment(value: CGSize) { this.nativeObject.contentSizeAdjustment = value; }
}

export class HTMLNSStoryboardSegueElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSStoryboardSegue.new();

  get identifier(): string { return this.nativeObject.identifier; }
  get sourceController(): interop.Object { return this.nativeObject.sourceController; }
  get destinationController(): interop.Object { return this.nativeObject.destinationController; }
}

export class HTMLNSTouchBarElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTouchBar.new();
  get delegate(): NSTouchBarDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSTouchBarDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSTouchBarDelegateImpl;
  }

  get customizationIdentifier(): string { return this.nativeObject.customizationIdentifier; }
  set customizationIdentifier(value: string) { this.nativeObject.customizationIdentifier = value; }
  get customizationAllowedItemIdentifiers(): NSArray { return this.nativeObject.customizationAllowedItemIdentifiers; }
  set customizationAllowedItemIdentifiers(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.customizationAllowedItemIdentifiers = value; }
  get customizationRequiredItemIdentifiers(): NSArray { return this.nativeObject.customizationRequiredItemIdentifiers; }
  set customizationRequiredItemIdentifiers(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.customizationRequiredItemIdentifiers = value; }
  get defaultItemIdentifiers(): NSArray { return this.nativeObject.defaultItemIdentifiers; }
  set defaultItemIdentifiers(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.defaultItemIdentifiers = value; }
  get itemIdentifiers(): NSArray { return this.nativeObject.itemIdentifiers; }
  get principalItemIdentifier(): string { return this.nativeObject.principalItemIdentifier; }
  set principalItemIdentifier(value: string) { this.nativeObject.principalItemIdentifier = value; }
  get escapeKeyReplacementItemIdentifier(): string { return this.nativeObject.escapeKeyReplacementItemIdentifier; }
  set escapeKeyReplacementItemIdentifier(value: string) { this.nativeObject.escapeKeyReplacementItemIdentifier = value; }
  get templateItems(): NSSet { return this.nativeObject.templateItems; }
  set templateItems(value: NSSet) { this.nativeObject.templateItems = value; }
  get isVisible(): boolean { return this.nativeObject.isVisible; }

  set touchBarMakeItemForIdentifier(value: (touchBar: NSTouchBar, identifier: string) => NSTouchBarItem) {
    this.delegate.touchBarMakeItemForIdentifier = value;
  }
}

export class HTMLNSActionCellElement extends HTMLNSCellElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSActionCell.new();

  get target(): interop.Object { return this.nativeObject.target; }
  set target(value: interop.Object) { this.nativeObject.target = value; }
  get action(): string { return this.nativeObject.action; }
  set action(value: string) { this.nativeObject.action = value; }
  get tag(): number { return this.nativeObject.tag; }
  set tag(value: number) { this.nativeObject.tag = value; }
}

export class HTMLNSColorListElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSColorList.new();

  get name(): string { return this.nativeObject.name; }
  get allKeys(): NSArray { return this.nativeObject.allKeys; }
  get isEditable(): boolean { return this.nativeObject.isEditable; }
}

export class HTMLNSDocumentElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSDocument.new();

  get fileType(): string { return this.nativeObject.fileType; }
  set fileType(value: string) { this.nativeObject.fileType = value; }
  get fileURL(): NSURL { return this.nativeObject.fileURL; }
  set fileURL(value: NSURL) { this.nativeObject.fileURL = value; }
  get fileModificationDate(): NSDate { return this.nativeObject.fileModificationDate; }
  set fileModificationDate(value: NSDate) { this.nativeObject.fileModificationDate = value; }
  get isDraft(): boolean { return this.nativeObject.isDraft; }
  set isDraft(value: boolean) { this.nativeObject.isDraft = value; }
  get isEntireFileLoaded(): boolean { return this.nativeObject.isEntireFileLoaded; }
  get autosavingIsImplicitlyCancellable(): boolean { return this.nativeObject.autosavingIsImplicitlyCancellable; }
  get keepBackupFile(): boolean { return this.nativeObject.keepBackupFile; }
  get backupFileURL(): NSURL { return this.nativeObject.backupFileURL; }
  get shouldRunSavePanelWithAccessoryView(): boolean { return this.nativeObject.shouldRunSavePanelWithAccessoryView; }
  get fileNameExtensionWasHiddenInLastRunSavePanel(): boolean { return this.nativeObject.fileNameExtensionWasHiddenInLastRunSavePanel; }
  get fileTypeFromLastRunSavePanel(): string { return this.nativeObject.fileTypeFromLastRunSavePanel; }
  get hasUnautosavedChanges(): boolean { return this.nativeObject.hasUnautosavedChanges; }
  get isBrowsingVersions(): boolean { return this.nativeObject.isBrowsingVersions; }
  get autosavingFileType(): string { return this.nativeObject.autosavingFileType; }
  get autosavedContentsFileURL(): NSURL { return this.nativeObject.autosavedContentsFileURL; }
  set autosavedContentsFileURL(value: NSURL) { this.nativeObject.autosavedContentsFileURL = value; }
  get isLocked(): boolean { return this.nativeObject.isLocked; }
  get printInfo(): NSPrintInfo { return this.nativeObject.printInfo; }
  set printInfo(value: NSPrintInfo) { this.nativeObject.printInfo = value; }
  get PDFPrintOperation(): NSPrintOperation { return this.nativeObject.PDFPrintOperation; }
  get allowsDocumentSharing(): boolean { return this.nativeObject.allowsDocumentSharing; }
  get previewRepresentableActivityItems(): NSArray { return this.nativeObject.previewRepresentableActivityItems; }
  set previewRepresentableActivityItems(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.previewRepresentableActivityItems = value; }
  get isDocumentEdited(): boolean { return this.nativeObject.isDocumentEdited; }
  get isInViewingMode(): boolean { return this.nativeObject.isInViewingMode; }
  get undoManager(): NSUndoManager { return this.nativeObject.undoManager; }
  set undoManager(value: NSUndoManager) { this.nativeObject.undoManager = value; }
  get hasUndoManager(): boolean { return this.nativeObject.hasUndoManager; }
  set hasUndoManager(value: boolean) { this.nativeObject.hasUndoManager = value; }
  get windowNibName(): string { return this.nativeObject.windowNibName; }
  get windowControllers(): NSArray { return this.nativeObject.windowControllers; }
  get displayName(): string { return this.nativeObject.displayName; }
  set displayName(value: string) { this.nativeObject.displayName = value; }
  get windowForSheet(): NSWindow { return this.nativeObject.windowForSheet; }
  get presentedItemURL(): NSURL { return this.nativeObject.presentedItemURL; }
  get observedPresentedItemUbiquityAttributes(): NSSet { return this.nativeObject.observedPresentedItemUbiquityAttributes; }
  get userActivity(): NSUserActivity { return this.nativeObject.userActivity; }
  set userActivity(value: NSUserActivity) { this.nativeObject.userActivity = value; }
  get lastComponentOfFileName(): string { return this.nativeObject.lastComponentOfFileName; }
  set lastComponentOfFileName(value: string) { this.nativeObject.lastComponentOfFileName = value; }
  get objectSpecifier(): NSScriptObjectSpecifier { return this.nativeObject.objectSpecifier; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
  get presentedItemOperationQueue(): NSOperationQueue { return this.nativeObject.presentedItemOperationQueue; }
  get primaryPresentedItemURL(): NSURL { return this.nativeObject.primaryPresentedItemURL; }
}

export class HTMLNSBindingSelectionMarkerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSBindingSelectionMarker.new();

}

export class HTMLNSTextTabElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTextTab.new();

  get alignment(): interop.Enum<typeof NSTextAlignment> { return this.nativeObject.alignment; }
  get location(): number { return this.nativeObject.location; }
  get options(): NSDictionary { return this.nativeObject.options; }
  get tabStopType(): interop.Enum<typeof NSTextTabType> { return this.nativeObject.tabStopType; }
}

export class HTMLNSResponderElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSResponder.new();

  get nextResponder(): NSResponder { return this.nativeObject.nextResponder; }
  set nextResponder(value: NSResponder) { this.nativeObject.nextResponder = value; }
  get acceptsFirstResponder(): boolean { return this.nativeObject.acceptsFirstResponder; }
  get menu(): NSMenu { return this.nativeObject.menu; }
  set menu(value: NSMenu) { this.nativeObject.menu = value; }
  get undoManager(): NSUndoManager { return this.nativeObject.undoManager; }
  get userActivity(): NSUserActivity { return this.nativeObject.userActivity; }
  set userActivity(value: NSUserActivity) { this.nativeObject.userActivity = value; }
  get touchBar(): NSTouchBar { return this.nativeObject.touchBar; }
  set touchBar(value: NSTouchBar) { this.nativeObject.touchBar = value; }
}

export class HTMLNSTouchElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTouch.new();

  get identity(): NSCopying { return this.nativeObject.identity; }
  get phase(): interop.Enum<typeof NSTouchPhase> { return this.nativeObject.phase; }
  get normalizedPosition(): CGPoint { return this.nativeObject.normalizedPosition; }
  get isResting(): boolean { return this.nativeObject.isResting; }
  get device(): interop.Object { return this.nativeObject.device; }
  get deviceSize(): CGSize { return this.nativeObject.deviceSize; }
  get type(): interop.Enum<typeof NSTouchType> { return this.nativeObject.type; }
}

export class HTMLNSWorkspaceElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSWorkspace.new();

  get notificationCenter(): NSNotificationCenter { return this.nativeObject.notificationCenter; }
  get fileLabels(): NSArray { return this.nativeObject.fileLabels; }
  get fileLabelColors(): NSArray { return this.nativeObject.fileLabelColors; }
  get frontmostApplication(): NSRunningApplication { return this.nativeObject.frontmostApplication; }
  get menuBarOwningApplication(): NSRunningApplication { return this.nativeObject.menuBarOwningApplication; }
  get accessibilityDisplayShouldIncreaseContrast(): boolean { return this.nativeObject.accessibilityDisplayShouldIncreaseContrast; }
  get accessibilityDisplayShouldDifferentiateWithoutColor(): boolean { return this.nativeObject.accessibilityDisplayShouldDifferentiateWithoutColor; }
  get accessibilityDisplayShouldReduceTransparency(): boolean { return this.nativeObject.accessibilityDisplayShouldReduceTransparency; }
  get accessibilityDisplayShouldReduceMotion(): boolean { return this.nativeObject.accessibilityDisplayShouldReduceMotion; }
  get accessibilityDisplayShouldInvertColors(): boolean { return this.nativeObject.accessibilityDisplayShouldInvertColors; }
  get isVoiceOverEnabled(): boolean { return this.nativeObject.isVoiceOverEnabled; }
  get isSwitchControlEnabled(): boolean { return this.nativeObject.isSwitchControlEnabled; }
  get runningApplications(): NSArray { return this.nativeObject.runningApplications; }
}

export class HTMLNSAccessibilityElementElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSAccessibilityElement.new();

  get accessibilityFrameInParentSpace(): CGRect { return this.nativeObject.accessibilityFrameInParentSpace; }
  set accessibilityFrameInParentSpace(value: CGRect) { this.nativeObject.accessibilityFrameInParentSpace = value; }
  get isAccessibilityElement(): boolean { return this.nativeObject.isAccessibilityElement; }
  set isAccessibilityElement(value: boolean) { this.nativeObject.isAccessibilityElement = value; }
  get accessibilityFrame(): CGRect { return this.nativeObject.accessibilityFrame; }
  set accessibilityFrame(value: CGRect) { this.nativeObject.accessibilityFrame = value; }
  get isAccessibilityFocused(): boolean { return this.nativeObject.isAccessibilityFocused; }
  set isAccessibilityFocused(value: boolean) { this.nativeObject.isAccessibilityFocused = value; }
  get accessibilityActivationPoint(): CGPoint { return this.nativeObject.accessibilityActivationPoint; }
  set accessibilityActivationPoint(value: CGPoint) { this.nativeObject.accessibilityActivationPoint = value; }
  get accessibilityTopLevelUIElement(): interop.Object { return this.nativeObject.accessibilityTopLevelUIElement; }
  set accessibilityTopLevelUIElement(value: interop.Object) { this.nativeObject.accessibilityTopLevelUIElement = value; }
  get accessibilityURL(): NSURL { return this.nativeObject.accessibilityURL; }
  set accessibilityURL(value: NSURL) { this.nativeObject.accessibilityURL = value; }
  get accessibilityValue(): interop.Object { return this.nativeObject.accessibilityValue; }
  set accessibilityValue(value: interop.Object) { this.nativeObject.accessibilityValue = value; }
  get accessibilityValueDescription(): string { return this.nativeObject.accessibilityValueDescription; }
  set accessibilityValueDescription(value: string) { this.nativeObject.accessibilityValueDescription = value; }
  get accessibilityVisibleChildren(): NSArray { return this.nativeObject.accessibilityVisibleChildren; }
  set accessibilityVisibleChildren(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleChildren = value; }
  get accessibilitySubrole(): string { return this.nativeObject.accessibilitySubrole; }
  set accessibilitySubrole(value: string) { this.nativeObject.accessibilitySubrole = value; }
  get accessibilityTitle(): string { return this.nativeObject.accessibilityTitle; }
  set accessibilityTitle(value: string) { this.nativeObject.accessibilityTitle = value; }
  get accessibilityTitleUIElement(): interop.Object { return this.nativeObject.accessibilityTitleUIElement; }
  set accessibilityTitleUIElement(value: interop.Object) { this.nativeObject.accessibilityTitleUIElement = value; }
  get accessibilityNextContents(): NSArray { return this.nativeObject.accessibilityNextContents; }
  set accessibilityNextContents(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityNextContents = value; }
  get accessibilityOrientation(): interop.Enum<typeof NSAccessibilityOrientation> { return this.nativeObject.accessibilityOrientation; }
  set accessibilityOrientation(value: interop.Enum<typeof NSAccessibilityOrientation>) { this.nativeObject.accessibilityOrientation = value; }
  get accessibilityOverflowButton(): interop.Object { return this.nativeObject.accessibilityOverflowButton; }
  set accessibilityOverflowButton(value: interop.Object) { this.nativeObject.accessibilityOverflowButton = value; }
  get accessibilityParent(): interop.Object { return this.nativeObject.accessibilityParent; }
  set accessibilityParent(value: interop.Object) { this.nativeObject.accessibilityParent = value; }
  get accessibilityPlaceholderValue(): string { return this.nativeObject.accessibilityPlaceholderValue; }
  set accessibilityPlaceholderValue(value: string) { this.nativeObject.accessibilityPlaceholderValue = value; }
  get accessibilityPreviousContents(): NSArray { return this.nativeObject.accessibilityPreviousContents; }
  set accessibilityPreviousContents(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityPreviousContents = value; }
  get accessibilityRole(): string { return this.nativeObject.accessibilityRole; }
  set accessibilityRole(value: string) { this.nativeObject.accessibilityRole = value; }
  get accessibilityRoleDescription(): string { return this.nativeObject.accessibilityRoleDescription; }
  set accessibilityRoleDescription(value: string) { this.nativeObject.accessibilityRoleDescription = value; }
  get accessibilitySearchButton(): interop.Object { return this.nativeObject.accessibilitySearchButton; }
  set accessibilitySearchButton(value: interop.Object) { this.nativeObject.accessibilitySearchButton = value; }
  get accessibilitySearchMenu(): interop.Object { return this.nativeObject.accessibilitySearchMenu; }
  set accessibilitySearchMenu(value: interop.Object) { this.nativeObject.accessibilitySearchMenu = value; }
  get isAccessibilitySelected(): boolean { return this.nativeObject.isAccessibilitySelected; }
  set isAccessibilitySelected(value: boolean) { this.nativeObject.isAccessibilitySelected = value; }
  get accessibilitySelectedChildren(): NSArray { return this.nativeObject.accessibilitySelectedChildren; }
  set accessibilitySelectedChildren(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedChildren = value; }
  get accessibilityServesAsTitleForUIElements(): NSArray { return this.nativeObject.accessibilityServesAsTitleForUIElements; }
  set accessibilityServesAsTitleForUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityServesAsTitleForUIElements = value; }
  get accessibilityShownMenu(): interop.Object { return this.nativeObject.accessibilityShownMenu; }
  set accessibilityShownMenu(value: interop.Object) { this.nativeObject.accessibilityShownMenu = value; }
  get accessibilityMinValue(): interop.Object { return this.nativeObject.accessibilityMinValue; }
  set accessibilityMinValue(value: interop.Object) { this.nativeObject.accessibilityMinValue = value; }
  get accessibilityMaxValue(): interop.Object { return this.nativeObject.accessibilityMaxValue; }
  set accessibilityMaxValue(value: interop.Object) { this.nativeObject.accessibilityMaxValue = value; }
  get accessibilityLinkedUIElements(): NSArray { return this.nativeObject.accessibilityLinkedUIElements; }
  set accessibilityLinkedUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityLinkedUIElements = value; }
  get accessibilityWindow(): interop.Object { return this.nativeObject.accessibilityWindow; }
  set accessibilityWindow(value: interop.Object) { this.nativeObject.accessibilityWindow = value; }
  get accessibilityIdentifier(): string { return this.nativeObject.accessibilityIdentifier; }
  set accessibilityIdentifier(value: string) { this.nativeObject.accessibilityIdentifier = value; }
  get accessibilityHelp(): string { return this.nativeObject.accessibilityHelp; }
  set accessibilityHelp(value: string) { this.nativeObject.accessibilityHelp = value; }
  get accessibilityFilename(): string { return this.nativeObject.accessibilityFilename; }
  set accessibilityFilename(value: string) { this.nativeObject.accessibilityFilename = value; }
  get isAccessibilityExpanded(): boolean { return this.nativeObject.isAccessibilityExpanded; }
  set isAccessibilityExpanded(value: boolean) { this.nativeObject.isAccessibilityExpanded = value; }
  get isAccessibilityEdited(): boolean { return this.nativeObject.isAccessibilityEdited; }
  set isAccessibilityEdited(value: boolean) { this.nativeObject.isAccessibilityEdited = value; }
  get isAccessibilityEnabled(): boolean { return this.nativeObject.isAccessibilityEnabled; }
  set isAccessibilityEnabled(value: boolean) { this.nativeObject.isAccessibilityEnabled = value; }
  get accessibilityChildren(): NSArray { return this.nativeObject.accessibilityChildren; }
  set accessibilityChildren(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityChildren = value; }
  get accessibilityChildrenInNavigationOrder(): NSArray { return this.nativeObject.accessibilityChildrenInNavigationOrder; }
  set accessibilityChildrenInNavigationOrder(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityChildrenInNavigationOrder = value; }
  get accessibilityClearButton(): interop.Object { return this.nativeObject.accessibilityClearButton; }
  set accessibilityClearButton(value: interop.Object) { this.nativeObject.accessibilityClearButton = value; }
  get accessibilityCancelButton(): interop.Object { return this.nativeObject.accessibilityCancelButton; }
  set accessibilityCancelButton(value: interop.Object) { this.nativeObject.accessibilityCancelButton = value; }
  get isAccessibilityProtectedContent(): boolean { return this.nativeObject.isAccessibilityProtectedContent; }
  set isAccessibilityProtectedContent(value: boolean) { this.nativeObject.isAccessibilityProtectedContent = value; }
  get accessibilityContents(): NSArray { return this.nativeObject.accessibilityContents; }
  set accessibilityContents(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityContents = value; }
  get accessibilityLabel(): string { return this.nativeObject.accessibilityLabel; }
  set accessibilityLabel(value: string) { this.nativeObject.accessibilityLabel = value; }
  get isAccessibilityAlternateUIVisible(): boolean { return this.nativeObject.isAccessibilityAlternateUIVisible; }
  set isAccessibilityAlternateUIVisible(value: boolean) { this.nativeObject.isAccessibilityAlternateUIVisible = value; }
  get accessibilitySharedFocusElements(): NSArray { return this.nativeObject.accessibilitySharedFocusElements; }
  set accessibilitySharedFocusElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySharedFocusElements = value; }
  get isAccessibilityRequired(): boolean { return this.nativeObject.isAccessibilityRequired; }
  set isAccessibilityRequired(value: boolean) { this.nativeObject.isAccessibilityRequired = value; }
  get accessibilityCustomRotors(): NSArray { return this.nativeObject.accessibilityCustomRotors; }
  set accessibilityCustomRotors(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityCustomRotors = value; }
  get accessibilityUserInputLabels(): NSArray { return this.nativeObject.accessibilityUserInputLabels; }
  set accessibilityUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityUserInputLabels = value; }
  get accessibilityAttributedUserInputLabels(): NSArray { return this.nativeObject.accessibilityAttributedUserInputLabels; }
  set accessibilityAttributedUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityAttributedUserInputLabels = value; }
  get accessibilityApplicationFocusedUIElement(): interop.Object { return this.nativeObject.accessibilityApplicationFocusedUIElement; }
  set accessibilityApplicationFocusedUIElement(value: interop.Object) { this.nativeObject.accessibilityApplicationFocusedUIElement = value; }
  get accessibilityMainWindow(): interop.Object { return this.nativeObject.accessibilityMainWindow; }
  set accessibilityMainWindow(value: interop.Object) { this.nativeObject.accessibilityMainWindow = value; }
  get isAccessibilityHidden(): boolean { return this.nativeObject.isAccessibilityHidden; }
  set isAccessibilityHidden(value: boolean) { this.nativeObject.isAccessibilityHidden = value; }
  get isAccessibilityFrontmost(): boolean { return this.nativeObject.isAccessibilityFrontmost; }
  set isAccessibilityFrontmost(value: boolean) { this.nativeObject.isAccessibilityFrontmost = value; }
  get accessibilityFocusedWindow(): interop.Object { return this.nativeObject.accessibilityFocusedWindow; }
  set accessibilityFocusedWindow(value: interop.Object) { this.nativeObject.accessibilityFocusedWindow = value; }
  get accessibilityWindows(): NSArray { return this.nativeObject.accessibilityWindows; }
  set accessibilityWindows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityWindows = value; }
  get accessibilityExtrasMenuBar(): interop.Object { return this.nativeObject.accessibilityExtrasMenuBar; }
  set accessibilityExtrasMenuBar(value: interop.Object) { this.nativeObject.accessibilityExtrasMenuBar = value; }
  get accessibilityMenuBar(): interop.Object { return this.nativeObject.accessibilityMenuBar; }
  set accessibilityMenuBar(value: interop.Object) { this.nativeObject.accessibilityMenuBar = value; }
  get accessibilityColumnTitles(): NSArray { return this.nativeObject.accessibilityColumnTitles; }
  set accessibilityColumnTitles(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityColumnTitles = value; }
  get isAccessibilityOrderedByRow(): boolean { return this.nativeObject.isAccessibilityOrderedByRow; }
  set isAccessibilityOrderedByRow(value: boolean) { this.nativeObject.isAccessibilityOrderedByRow = value; }
  get accessibilityHorizontalUnits(): interop.Enum<typeof NSAccessibilityUnits> { return this.nativeObject.accessibilityHorizontalUnits; }
  set accessibilityHorizontalUnits(value: interop.Enum<typeof NSAccessibilityUnits>) { this.nativeObject.accessibilityHorizontalUnits = value; }
  get accessibilityVerticalUnits(): interop.Enum<typeof NSAccessibilityUnits> { return this.nativeObject.accessibilityVerticalUnits; }
  set accessibilityVerticalUnits(value: interop.Enum<typeof NSAccessibilityUnits>) { this.nativeObject.accessibilityVerticalUnits = value; }
  get accessibilityHorizontalUnitDescription(): string { return this.nativeObject.accessibilityHorizontalUnitDescription; }
  set accessibilityHorizontalUnitDescription(value: string) { this.nativeObject.accessibilityHorizontalUnitDescription = value; }
  get accessibilityVerticalUnitDescription(): string { return this.nativeObject.accessibilityVerticalUnitDescription; }
  set accessibilityVerticalUnitDescription(value: string) { this.nativeObject.accessibilityVerticalUnitDescription = value; }
  get accessibilityHandles(): NSArray { return this.nativeObject.accessibilityHandles; }
  set accessibilityHandles(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityHandles = value; }
  get accessibilityWarningValue(): interop.Object { return this.nativeObject.accessibilityWarningValue; }
  set accessibilityWarningValue(value: interop.Object) { this.nativeObject.accessibilityWarningValue = value; }
  get accessibilityCriticalValue(): interop.Object { return this.nativeObject.accessibilityCriticalValue; }
  set accessibilityCriticalValue(value: interop.Object) { this.nativeObject.accessibilityCriticalValue = value; }
  get isAccessibilityDisclosed(): boolean { return this.nativeObject.isAccessibilityDisclosed; }
  set isAccessibilityDisclosed(value: boolean) { this.nativeObject.isAccessibilityDisclosed = value; }
  get accessibilityDisclosedByRow(): interop.Object { return this.nativeObject.accessibilityDisclosedByRow; }
  set accessibilityDisclosedByRow(value: interop.Object) { this.nativeObject.accessibilityDisclosedByRow = value; }
  get accessibilityDisclosedRows(): interop.Object { return this.nativeObject.accessibilityDisclosedRows; }
  set accessibilityDisclosedRows(value: interop.Object) { this.nativeObject.accessibilityDisclosedRows = value; }
  get accessibilityDisclosureLevel(): number { return this.nativeObject.accessibilityDisclosureLevel; }
  set accessibilityDisclosureLevel(value: number) { this.nativeObject.accessibilityDisclosureLevel = value; }
  get accessibilityMarkerUIElements(): NSArray { return this.nativeObject.accessibilityMarkerUIElements; }
  set accessibilityMarkerUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityMarkerUIElements = value; }
  get accessibilityMarkerValues(): interop.Object { return this.nativeObject.accessibilityMarkerValues; }
  set accessibilityMarkerValues(value: interop.Object) { this.nativeObject.accessibilityMarkerValues = value; }
  get accessibilityMarkerGroupUIElement(): interop.Object { return this.nativeObject.accessibilityMarkerGroupUIElement; }
  set accessibilityMarkerGroupUIElement(value: interop.Object) { this.nativeObject.accessibilityMarkerGroupUIElement = value; }
  get accessibilityUnits(): interop.Enum<typeof NSAccessibilityUnits> { return this.nativeObject.accessibilityUnits; }
  set accessibilityUnits(value: interop.Enum<typeof NSAccessibilityUnits>) { this.nativeObject.accessibilityUnits = value; }
  get accessibilityUnitDescription(): string { return this.nativeObject.accessibilityUnitDescription; }
  set accessibilityUnitDescription(value: string) { this.nativeObject.accessibilityUnitDescription = value; }
  get accessibilityRulerMarkerType(): interop.Enum<typeof NSAccessibilityRulerMarkerType> { return this.nativeObject.accessibilityRulerMarkerType; }
  set accessibilityRulerMarkerType(value: interop.Enum<typeof NSAccessibilityRulerMarkerType>) { this.nativeObject.accessibilityRulerMarkerType = value; }
  get accessibilityMarkerTypeDescription(): string { return this.nativeObject.accessibilityMarkerTypeDescription; }
  set accessibilityMarkerTypeDescription(value: string) { this.nativeObject.accessibilityMarkerTypeDescription = value; }
  get accessibilityHorizontalScrollBar(): interop.Object { return this.nativeObject.accessibilityHorizontalScrollBar; }
  set accessibilityHorizontalScrollBar(value: interop.Object) { this.nativeObject.accessibilityHorizontalScrollBar = value; }
  get accessibilityVerticalScrollBar(): interop.Object { return this.nativeObject.accessibilityVerticalScrollBar; }
  set accessibilityVerticalScrollBar(value: interop.Object) { this.nativeObject.accessibilityVerticalScrollBar = value; }
  get accessibilityAllowedValues(): NSArray { return this.nativeObject.accessibilityAllowedValues; }
  set accessibilityAllowedValues(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityAllowedValues = value; }
  get accessibilityLabelUIElements(): NSArray { return this.nativeObject.accessibilityLabelUIElements; }
  set accessibilityLabelUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityLabelUIElements = value; }
  get accessibilityLabelValue(): number { return this.nativeObject.accessibilityLabelValue; }
  set accessibilityLabelValue(value: number) { this.nativeObject.accessibilityLabelValue = value; }
  get accessibilitySplitters(): NSArray { return this.nativeObject.accessibilitySplitters; }
  set accessibilitySplitters(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySplitters = value; }
  get accessibilityDecrementButton(): interop.Object { return this.nativeObject.accessibilityDecrementButton; }
  set accessibilityDecrementButton(value: interop.Object) { this.nativeObject.accessibilityDecrementButton = value; }
  get accessibilityIncrementButton(): interop.Object { return this.nativeObject.accessibilityIncrementButton; }
  set accessibilityIncrementButton(value: interop.Object) { this.nativeObject.accessibilityIncrementButton = value; }
  get accessibilityTabs(): NSArray { return this.nativeObject.accessibilityTabs; }
  set accessibilityTabs(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityTabs = value; }
  get accessibilityHeader(): interop.Object { return this.nativeObject.accessibilityHeader; }
  set accessibilityHeader(value: interop.Object) { this.nativeObject.accessibilityHeader = value; }
  get accessibilityColumnCount(): number { return this.nativeObject.accessibilityColumnCount; }
  set accessibilityColumnCount(value: number) { this.nativeObject.accessibilityColumnCount = value; }
  get accessibilityRowCount(): number { return this.nativeObject.accessibilityRowCount; }
  set accessibilityRowCount(value: number) { this.nativeObject.accessibilityRowCount = value; }
  get accessibilityIndex(): number { return this.nativeObject.accessibilityIndex; }
  set accessibilityIndex(value: number) { this.nativeObject.accessibilityIndex = value; }
  get accessibilityColumns(): NSArray { return this.nativeObject.accessibilityColumns; }
  set accessibilityColumns(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityColumns = value; }
  get accessibilityRows(): NSArray { return this.nativeObject.accessibilityRows; }
  set accessibilityRows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityRows = value; }
  get accessibilityVisibleRows(): NSArray { return this.nativeObject.accessibilityVisibleRows; }
  set accessibilityVisibleRows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleRows = value; }
  get accessibilitySelectedRows(): NSArray { return this.nativeObject.accessibilitySelectedRows; }
  set accessibilitySelectedRows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedRows = value; }
  get accessibilityVisibleColumns(): NSArray { return this.nativeObject.accessibilityVisibleColumns; }
  set accessibilityVisibleColumns(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleColumns = value; }
  get accessibilitySelectedColumns(): NSArray { return this.nativeObject.accessibilitySelectedColumns; }
  set accessibilitySelectedColumns(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedColumns = value; }
  get accessibilitySortDirection(): interop.Enum<typeof NSAccessibilitySortDirection> { return this.nativeObject.accessibilitySortDirection; }
  set accessibilitySortDirection(value: interop.Enum<typeof NSAccessibilitySortDirection>) { this.nativeObject.accessibilitySortDirection = value; }
  get accessibilityRowHeaderUIElements(): NSArray { return this.nativeObject.accessibilityRowHeaderUIElements; }
  set accessibilityRowHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityRowHeaderUIElements = value; }
  get accessibilitySelectedCells(): NSArray { return this.nativeObject.accessibilitySelectedCells; }
  set accessibilitySelectedCells(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedCells = value; }
  get accessibilityVisibleCells(): NSArray { return this.nativeObject.accessibilityVisibleCells; }
  set accessibilityVisibleCells(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleCells = value; }
  get accessibilityColumnHeaderUIElements(): NSArray { return this.nativeObject.accessibilityColumnHeaderUIElements; }
  set accessibilityColumnHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityColumnHeaderUIElements = value; }
  get accessibilityRowIndexRange(): _NSRange { return this.nativeObject.accessibilityRowIndexRange; }
  set accessibilityRowIndexRange(value: _NSRange) { this.nativeObject.accessibilityRowIndexRange = value; }
  get accessibilityColumnIndexRange(): _NSRange { return this.nativeObject.accessibilityColumnIndexRange; }
  set accessibilityColumnIndexRange(value: _NSRange) { this.nativeObject.accessibilityColumnIndexRange = value; }
  get accessibilityInsertionPointLineNumber(): number { return this.nativeObject.accessibilityInsertionPointLineNumber; }
  set accessibilityInsertionPointLineNumber(value: number) { this.nativeObject.accessibilityInsertionPointLineNumber = value; }
  get accessibilitySharedCharacterRange(): _NSRange { return this.nativeObject.accessibilitySharedCharacterRange; }
  set accessibilitySharedCharacterRange(value: _NSRange) { this.nativeObject.accessibilitySharedCharacterRange = value; }
  get accessibilitySharedTextUIElements(): NSArray { return this.nativeObject.accessibilitySharedTextUIElements; }
  set accessibilitySharedTextUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySharedTextUIElements = value; }
  get accessibilityVisibleCharacterRange(): _NSRange { return this.nativeObject.accessibilityVisibleCharacterRange; }
  set accessibilityVisibleCharacterRange(value: _NSRange) { this.nativeObject.accessibilityVisibleCharacterRange = value; }
  get accessibilityNumberOfCharacters(): number { return this.nativeObject.accessibilityNumberOfCharacters; }
  set accessibilityNumberOfCharacters(value: number) { this.nativeObject.accessibilityNumberOfCharacters = value; }
  get accessibilitySelectedText(): string { return this.nativeObject.accessibilitySelectedText; }
  set accessibilitySelectedText(value: string) { this.nativeObject.accessibilitySelectedText = value; }
  get accessibilitySelectedTextRange(): _NSRange { return this.nativeObject.accessibilitySelectedTextRange; }
  set accessibilitySelectedTextRange(value: _NSRange) { this.nativeObject.accessibilitySelectedTextRange = value; }
  get accessibilitySelectedTextRanges(): NSArray { return this.nativeObject.accessibilitySelectedTextRanges; }
  set accessibilitySelectedTextRanges(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedTextRanges = value; }
  get accessibilityToolbarButton(): interop.Object { return this.nativeObject.accessibilityToolbarButton; }
  set accessibilityToolbarButton(value: interop.Object) { this.nativeObject.accessibilityToolbarButton = value; }
  get isAccessibilityModal(): boolean { return this.nativeObject.isAccessibilityModal; }
  set isAccessibilityModal(value: boolean) { this.nativeObject.isAccessibilityModal = value; }
  get accessibilityProxy(): interop.Object { return this.nativeObject.accessibilityProxy; }
  set accessibilityProxy(value: interop.Object) { this.nativeObject.accessibilityProxy = value; }
  get isAccessibilityMain(): boolean { return this.nativeObject.isAccessibilityMain; }
  set isAccessibilityMain(value: boolean) { this.nativeObject.isAccessibilityMain = value; }
  get accessibilityFullScreenButton(): interop.Object { return this.nativeObject.accessibilityFullScreenButton; }
  set accessibilityFullScreenButton(value: interop.Object) { this.nativeObject.accessibilityFullScreenButton = value; }
  get accessibilityGrowArea(): interop.Object { return this.nativeObject.accessibilityGrowArea; }
  set accessibilityGrowArea(value: interop.Object) { this.nativeObject.accessibilityGrowArea = value; }
  get accessibilityDocument(): string { return this.nativeObject.accessibilityDocument; }
  set accessibilityDocument(value: string) { this.nativeObject.accessibilityDocument = value; }
  get accessibilityDefaultButton(): interop.Object { return this.nativeObject.accessibilityDefaultButton; }
  set accessibilityDefaultButton(value: interop.Object) { this.nativeObject.accessibilityDefaultButton = value; }
  get accessibilityCloseButton(): interop.Object { return this.nativeObject.accessibilityCloseButton; }
  set accessibilityCloseButton(value: interop.Object) { this.nativeObject.accessibilityCloseButton = value; }
  get accessibilityZoomButton(): interop.Object { return this.nativeObject.accessibilityZoomButton; }
  set accessibilityZoomButton(value: interop.Object) { this.nativeObject.accessibilityZoomButton = value; }
  get accessibilityMinimizeButton(): interop.Object { return this.nativeObject.accessibilityMinimizeButton; }
  set accessibilityMinimizeButton(value: interop.Object) { this.nativeObject.accessibilityMinimizeButton = value; }
  get isAccessibilityMinimized(): boolean { return this.nativeObject.isAccessibilityMinimized; }
  set isAccessibilityMinimized(value: boolean) { this.nativeObject.isAccessibilityMinimized = value; }
  get accessibilityCustomActions(): NSArray { return this.nativeObject.accessibilityCustomActions; }
  set accessibilityCustomActions(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityCustomActions = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLNSNibElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSNib.new();

}

export class HTMLNSMenuToolbarItemElement extends HTMLNSToolbarItemElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSMenuToolbarItem.new();

  get menu(): NSMenu { return this.nativeObject.menu; }
  set menu(value: NSMenu) { this.nativeObject.menu = value; }
  get showsIndicator(): boolean { return this.nativeObject.showsIndicator; }
  set showsIndicator(value: boolean) { this.nativeObject.showsIndicator = value; }
}

export class HTMLNSSplitViewItemElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSSplitViewItem.new();

  get behavior(): interop.Enum<typeof NSSplitViewItemBehavior> { return this.nativeObject.behavior; }
  get viewController(): NSViewController { return this.nativeObject.viewController; }
  set viewController(value: NSViewController) { this.nativeObject.viewController = value; }
  get isCollapsed(): boolean { return this.nativeObject.isCollapsed; }
  set isCollapsed(value: boolean) { this.nativeObject.isCollapsed = value; }
  get canCollapse(): boolean { return this.nativeObject.canCollapse; }
  set canCollapse(value: boolean) { this.nativeObject.canCollapse = value; }
  get collapseBehavior(): interop.Enum<typeof NSSplitViewItemCollapseBehavior> { return this.nativeObject.collapseBehavior; }
  set collapseBehavior(value: interop.Enum<typeof NSSplitViewItemCollapseBehavior>) { this.nativeObject.collapseBehavior = value; }
  get minimumThickness(): number { return this.nativeObject.minimumThickness; }
  set minimumThickness(value: number) { this.nativeObject.minimumThickness = value; }
  get maximumThickness(): number { return this.nativeObject.maximumThickness; }
  set maximumThickness(value: number) { this.nativeObject.maximumThickness = value; }
  get preferredThicknessFraction(): number { return this.nativeObject.preferredThicknessFraction; }
  set preferredThicknessFraction(value: number) { this.nativeObject.preferredThicknessFraction = value; }
  get holdingPriority(): number { return this.nativeObject.holdingPriority; }
  set holdingPriority(value: number) { this.nativeObject.holdingPriority = value; }
  get automaticMaximumThickness(): number { return this.nativeObject.automaticMaximumThickness; }
  set automaticMaximumThickness(value: number) { this.nativeObject.automaticMaximumThickness = value; }
  get isSpringLoaded(): boolean { return this.nativeObject.isSpringLoaded; }
  set isSpringLoaded(value: boolean) { this.nativeObject.isSpringLoaded = value; }
  get canCollapseFromWindowResize(): boolean { return this.nativeObject.canCollapseFromWindowResize; }
  set canCollapseFromWindowResize(value: boolean) { this.nativeObject.canCollapseFromWindowResize = value; }
  get allowsFullHeightLayout(): boolean { return this.nativeObject.allowsFullHeightLayout; }
  set allowsFullHeightLayout(value: boolean) { this.nativeObject.allowsFullHeightLayout = value; }
  get titlebarSeparatorStyle(): interop.Enum<typeof NSTitlebarSeparatorStyle> { return this.nativeObject.titlebarSeparatorStyle; }
  set titlebarSeparatorStyle(value: interop.Enum<typeof NSTitlebarSeparatorStyle>) { this.nativeObject.titlebarSeparatorStyle = value; }
  get animations(): NSDictionary { return this.nativeObject.animations; }
  set animations(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) { this.nativeObject.animations = value; }
}

export class HTMLNSShadowElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSShadow.new();

  get shadowOffset(): CGSize { return this.nativeObject.shadowOffset; }
  set shadowOffset(value: CGSize) { this.nativeObject.shadowOffset = value; }
  get shadowBlurRadius(): number { return this.nativeObject.shadowBlurRadius; }
  set shadowBlurRadius(value: number) { this.nativeObject.shadowBlurRadius = value; }
  get shadowColor(): NSColor { return this.nativeObject.shadowColor; }
  set shadowColor(value: NSColor) { this.nativeObject.shadowColor = value; }
}

export class HTMLNSInputManagerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSInputManager.new();

  get selectedRange(): _NSRange { return this.nativeObject.selectedRange; }
  set selectedRange(value: _NSRange) { this.nativeObject.selectedRange = value; }
}

export class HTMLNSEventElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSEvent.new();

  get type(): interop.Enum<typeof NSEventType> { return this.nativeObject.type; }
  get modifierFlags(): interop.Enum<typeof NSEventModifierFlags> { return this.nativeObject.modifierFlags; }
  get timestamp(): number { return this.nativeObject.timestamp; }
  get window(): NSWindow { return this.nativeObject.window; }
  get windowNumber(): number { return this.nativeObject.windowNumber; }
  get context(): NSGraphicsContext { return this.nativeObject.context; }
  get clickCount(): number { return this.nativeObject.clickCount; }
  get buttonNumber(): number { return this.nativeObject.buttonNumber; }
  get eventNumber(): number { return this.nativeObject.eventNumber; }
  get pressure(): number { return this.nativeObject.pressure; }
  get locationInWindow(): CGPoint { return this.nativeObject.locationInWindow; }
  get deltaX(): number { return this.nativeObject.deltaX; }
  get deltaY(): number { return this.nativeObject.deltaY; }
  get deltaZ(): number { return this.nativeObject.deltaZ; }
  get hasPreciseScrollingDeltas(): boolean { return this.nativeObject.hasPreciseScrollingDeltas; }
  get scrollingDeltaX(): number { return this.nativeObject.scrollingDeltaX; }
  get scrollingDeltaY(): number { return this.nativeObject.scrollingDeltaY; }
  get momentumPhase(): interop.Enum<typeof NSEventPhase> { return this.nativeObject.momentumPhase; }
  get isDirectionInvertedFromDevice(): boolean { return this.nativeObject.isDirectionInvertedFromDevice; }
  get characters(): string { return this.nativeObject.characters; }
  get charactersIgnoringModifiers(): string { return this.nativeObject.charactersIgnoringModifiers; }
  get isARepeat(): boolean { return this.nativeObject.isARepeat; }
  get keyCode(): number { return this.nativeObject.keyCode; }
  get trackingNumber(): number { return this.nativeObject.trackingNumber; }
  get userData(): interop.Pointer { return this.nativeObject.userData; }
  get trackingArea(): NSTrackingArea { return this.nativeObject.trackingArea; }
  get subtype(): interop.Enum<typeof NSEventSubtype> { return this.nativeObject.subtype; }
  get data1(): number { return this.nativeObject.data1; }
  get data2(): number { return this.nativeObject.data2; }
  get eventRef(): interop.Pointer { return this.nativeObject.eventRef; }
  get CGEvent(): interop.Pointer { return this.nativeObject.CGEvent; }
  get magnification(): number { return this.nativeObject.magnification; }
  get deviceID(): number { return this.nativeObject.deviceID; }
  get rotation(): number { return this.nativeObject.rotation; }
  get absoluteX(): number { return this.nativeObject.absoluteX; }
  get absoluteY(): number { return this.nativeObject.absoluteY; }
  get absoluteZ(): number { return this.nativeObject.absoluteZ; }
  get buttonMask(): interop.Enum<typeof NSEventButtonMask> { return this.nativeObject.buttonMask; }
  get tilt(): CGPoint { return this.nativeObject.tilt; }
  get tangentialPressure(): number { return this.nativeObject.tangentialPressure; }
  get vendorDefined(): interop.Object { return this.nativeObject.vendorDefined; }
  get vendorID(): number { return this.nativeObject.vendorID; }
  get tabletID(): number { return this.nativeObject.tabletID; }
  get pointingDeviceID(): number { return this.nativeObject.pointingDeviceID; }
  get systemTabletID(): number { return this.nativeObject.systemTabletID; }
  get vendorPointingDeviceType(): number { return this.nativeObject.vendorPointingDeviceType; }
  get pointingDeviceSerialNumber(): number { return this.nativeObject.pointingDeviceSerialNumber; }
  get uniqueID(): number { return this.nativeObject.uniqueID; }
  get capabilityMask(): number { return this.nativeObject.capabilityMask; }
  get pointingDeviceType(): interop.Enum<typeof NSPointingDeviceType> { return this.nativeObject.pointingDeviceType; }
  get isEnteringProximity(): boolean { return this.nativeObject.isEnteringProximity; }
  get phase(): interop.Enum<typeof NSEventPhase> { return this.nativeObject.phase; }
  get stage(): number { return this.nativeObject.stage; }
  get stageTransition(): number { return this.nativeObject.stageTransition; }
  get associatedEventsMask(): interop.Enum<typeof NSEventMask> { return this.nativeObject.associatedEventsMask; }
  get pressureBehavior(): interop.Enum<typeof NSPressureBehavior> { return this.nativeObject.pressureBehavior; }
}

export class HTMLNSSliderAccessoryElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSSliderAccessory.new();

  get behavior(): NSSliderAccessoryBehavior { return this.nativeObject.behavior; }
  set behavior(value: NSSliderAccessoryBehavior) { this.nativeObject.behavior = value; }
  get isEnabled(): boolean { return this.nativeObject.isEnabled; }
  set isEnabled(value: boolean) { this.nativeObject.isEnabled = value; }
}

export class HTMLNSAccessibilityCustomRotorItemResultElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSAccessibilityCustomRotorItemResult.new();

  get targetElement(): NSAccessibilityElement { return this.nativeObject.targetElement; }
  get itemLoadingToken(): NSObject { return this.nativeObject.itemLoadingToken; }
  get targetRange(): _NSRange { return this.nativeObject.targetRange; }
  set targetRange(value: _NSRange) { this.nativeObject.targetRange = value; }
  get customLabel(): string { return this.nativeObject.customLabel; }
  set customLabel(value: string) { this.nativeObject.customLabel = value; }
}

export class HTMLNSPasteboardElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSPasteboard.new();

  get name(): string { return this.nativeObject.name; }
  get changeCount(): number { return this.nativeObject.changeCount; }
  get pasteboardItems(): NSArray { return this.nativeObject.pasteboardItems; }
  get types(): NSArray { return this.nativeObject.types; }
}

export class HTMLNSWindowElement extends HTMLNSResponderElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSWindow.new();
  get delegate(): NSWindowDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSWindowDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSWindowDelegateImpl;
  }

  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get subtitle(): string { return this.nativeObject.subtitle; }
  set subtitle(value: string) { this.nativeObject.subtitle = value; }
  get titleVisibility(): interop.Enum<typeof NSWindowTitleVisibility> { return this.nativeObject.titleVisibility; }
  set titleVisibility(value: interop.Enum<typeof NSWindowTitleVisibility>) { this.nativeObject.titleVisibility = value; }
  get titlebarAppearsTransparent(): boolean { return this.nativeObject.titlebarAppearsTransparent; }
  set titlebarAppearsTransparent(value: boolean) { this.nativeObject.titlebarAppearsTransparent = value; }
  get toolbarStyle(): interop.Enum<typeof NSWindowToolbarStyle> { return this.nativeObject.toolbarStyle; }
  set toolbarStyle(value: interop.Enum<typeof NSWindowToolbarStyle>) { this.nativeObject.toolbarStyle = value; }
  get contentLayoutRect(): CGRect { return this.nativeObject.contentLayoutRect; }
  get contentLayoutGuide(): interop.Object { return this.nativeObject.contentLayoutGuide; }
  get titlebarAccessoryViewControllers(): NSArray { return this.nativeObject.titlebarAccessoryViewControllers; }
  set titlebarAccessoryViewControllers(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.titlebarAccessoryViewControllers = value; }
  get representedURL(): NSURL { return this.nativeObject.representedURL; }
  set representedURL(value: NSURL) { this.nativeObject.representedURL = value; }
  get representedFilename(): string { return this.nativeObject.representedFilename; }
  set representedFilename(value: string) { this.nativeObject.representedFilename = value; }
  get isExcludedFromWindowsMenu(): boolean { return this.nativeObject.isExcludedFromWindowsMenu; }
  set isExcludedFromWindowsMenu(value: boolean) { this.nativeObject.isExcludedFromWindowsMenu = value; }
  get contentView(): NSView { return this.nativeObject.contentView; }
  set contentView(value: NSView) { this.nativeObject.contentView = value; }
  get windowNumber(): number { return this.nativeObject.windowNumber; }
  get styleMask(): interop.Enum<typeof NSWindowStyleMask> { return this.nativeObject.styleMask; }
  set styleMask(value: interop.Enum<typeof NSWindowStyleMask>) { this.nativeObject.styleMask = value; }
  get frame(): CGRect { return this.nativeObject.frame; }
  get inLiveResize(): boolean { return this.nativeObject.inLiveResize; }
  get resizeIncrements(): CGSize { return this.nativeObject.resizeIncrements; }
  set resizeIncrements(value: CGSize) { this.nativeObject.resizeIncrements = value; }
  get aspectRatio(): CGSize { return this.nativeObject.aspectRatio; }
  set aspectRatio(value: CGSize) { this.nativeObject.aspectRatio = value; }
  get contentResizeIncrements(): CGSize { return this.nativeObject.contentResizeIncrements; }
  set contentResizeIncrements(value: CGSize) { this.nativeObject.contentResizeIncrements = value; }
  get contentAspectRatio(): CGSize { return this.nativeObject.contentAspectRatio; }
  set contentAspectRatio(value: CGSize) { this.nativeObject.contentAspectRatio = value; }
  get viewsNeedDisplay(): boolean { return this.nativeObject.viewsNeedDisplay; }
  set viewsNeedDisplay(value: boolean) { this.nativeObject.viewsNeedDisplay = value; }
  get preservesContentDuringLiveResize(): boolean { return this.nativeObject.preservesContentDuringLiveResize; }
  set preservesContentDuringLiveResize(value: boolean) { this.nativeObject.preservesContentDuringLiveResize = value; }
  get firstResponder(): NSResponder | null { return this.nativeObject.firstResponder; }
  get resizeFlags(): interop.Enum<typeof NSEventModifierFlags> { return this.nativeObject.resizeFlags; }
  get isReleasedWhenClosed(): boolean { return this.nativeObject.isReleasedWhenClosed; }
  set isReleasedWhenClosed(value: boolean) { this.nativeObject.isReleasedWhenClosed = value; }
  get isZoomed(): boolean { return this.nativeObject.isZoomed; }
  get isMiniaturized(): boolean { return this.nativeObject.isMiniaturized; }
  get backgroundColor(): NSColor { return this.nativeObject.backgroundColor; }
  set backgroundColor(value: NSColor) { this.nativeObject.backgroundColor = value; }
  get isMovable(): boolean { return this.nativeObject.isMovable; }
  set isMovable(value: boolean) { this.nativeObject.isMovable = value; }
  get isMovableByWindowBackground(): boolean { return this.nativeObject.isMovableByWindowBackground; }
  set isMovableByWindowBackground(value: boolean) { this.nativeObject.isMovableByWindowBackground = value; }
  get hidesOnDeactivate(): boolean { return this.nativeObject.hidesOnDeactivate; }
  set hidesOnDeactivate(value: boolean) { this.nativeObject.hidesOnDeactivate = value; }
  get canHide(): boolean { return this.nativeObject.canHide; }
  set canHide(value: boolean) { this.nativeObject.canHide = value; }
  get miniwindowImage(): NSImage { return this.nativeObject.miniwindowImage; }
  set miniwindowImage(value: NSImage) { this.nativeObject.miniwindowImage = value; }
  get miniwindowTitle(): string { return this.nativeObject.miniwindowTitle; }
  set miniwindowTitle(value: string) { this.nativeObject.miniwindowTitle = value; }
  get dockTile(): NSDockTile { return this.nativeObject.dockTile; }
  get isDocumentEdited(): boolean { return this.nativeObject.isDocumentEdited; }
  set isDocumentEdited(value: boolean) { this.nativeObject.isDocumentEdited = value; }
  get isVisible(): boolean { return this.nativeObject.isVisible; }
  get isKeyWindow(): boolean { return this.nativeObject.isKeyWindow; }
  get isMainWindow(): boolean { return this.nativeObject.isMainWindow; }
  get canBecomeKeyWindow(): boolean { return this.nativeObject.canBecomeKeyWindow; }
  get canBecomeMainWindow(): boolean { return this.nativeObject.canBecomeMainWindow; }
  get worksWhenModal(): boolean { return this.nativeObject.worksWhenModal; }
  get preventsApplicationTerminationWhenModal(): boolean { return this.nativeObject.preventsApplicationTerminationWhenModal; }
  set preventsApplicationTerminationWhenModal(value: boolean) { this.nativeObject.preventsApplicationTerminationWhenModal = value; }
  get backingScaleFactor(): number { return this.nativeObject.backingScaleFactor; }
  get allowsToolTipsWhenApplicationIsInactive(): boolean { return this.nativeObject.allowsToolTipsWhenApplicationIsInactive; }
  set allowsToolTipsWhenApplicationIsInactive(value: boolean) { this.nativeObject.allowsToolTipsWhenApplicationIsInactive = value; }
  get backingType(): interop.Enum<typeof NSBackingStoreType> { return this.nativeObject.backingType; }
  set backingType(value: interop.Enum<typeof NSBackingStoreType>) { this.nativeObject.backingType = value; }
  get level(): number { return this.nativeObject.level; }
  set level(value: number) { this.nativeObject.level = value; }
  get depthLimit(): interop.Enum<typeof NSWindowDepth> { return this.nativeObject.depthLimit; }
  set depthLimit(value: interop.Enum<typeof NSWindowDepth>) { this.nativeObject.depthLimit = value; }
  get hasDynamicDepthLimit(): boolean { return this.nativeObject.hasDynamicDepthLimit; }
  get screen(): NSScreen { return this.nativeObject.screen; }
  get deepestScreen(): NSScreen { return this.nativeObject.deepestScreen; }
  get hasShadow(): boolean { return this.nativeObject.hasShadow; }
  set hasShadow(value: boolean) { this.nativeObject.hasShadow = value; }
  get alphaValue(): number { return this.nativeObject.alphaValue; }
  set alphaValue(value: number) { this.nativeObject.alphaValue = value; }
  get isOpaque(): boolean { return this.nativeObject.isOpaque; }
  set isOpaque(value: boolean) { this.nativeObject.isOpaque = value; }
  get sharingType(): interop.Enum<typeof NSWindowSharingType> { return this.nativeObject.sharingType; }
  set sharingType(value: interop.Enum<typeof NSWindowSharingType>) { this.nativeObject.sharingType = value; }
  get allowsConcurrentViewDrawing(): boolean { return this.nativeObject.allowsConcurrentViewDrawing; }
  set allowsConcurrentViewDrawing(value: boolean) { this.nativeObject.allowsConcurrentViewDrawing = value; }
  get displaysWhenScreenProfileChanges(): boolean { return this.nativeObject.displaysWhenScreenProfileChanges; }
  set displaysWhenScreenProfileChanges(value: boolean) { this.nativeObject.displaysWhenScreenProfileChanges = value; }
  get canBecomeVisibleWithoutLogin(): boolean { return this.nativeObject.canBecomeVisibleWithoutLogin; }
  set canBecomeVisibleWithoutLogin(value: boolean) { this.nativeObject.canBecomeVisibleWithoutLogin = value; }
  get collectionBehavior(): interop.Enum<typeof NSWindowCollectionBehavior> { return this.nativeObject.collectionBehavior; }
  set collectionBehavior(value: interop.Enum<typeof NSWindowCollectionBehavior>) { this.nativeObject.collectionBehavior = value; }
  get animationBehavior(): interop.Enum<typeof NSWindowAnimationBehavior> { return this.nativeObject.animationBehavior; }
  set animationBehavior(value: interop.Enum<typeof NSWindowAnimationBehavior>) { this.nativeObject.animationBehavior = value; }
  get isOnActiveSpace(): boolean { return this.nativeObject.isOnActiveSpace; }
  get stringWithSavedFrame(): string { return this.nativeObject.stringWithSavedFrame; }
  get frameAutosaveName(): string { return this.nativeObject.frameAutosaveName; }
  get minSize(): CGSize { return this.nativeObject.minSize; }
  set minSize(value: CGSize) { this.nativeObject.minSize = value; }
  get maxSize(): CGSize { return this.nativeObject.maxSize; }
  set maxSize(value: CGSize) { this.nativeObject.maxSize = value; }
  get contentMinSize(): CGSize { return this.nativeObject.contentMinSize; }
  set contentMinSize(value: CGSize) { this.nativeObject.contentMinSize = value; }
  get contentMaxSize(): CGSize { return this.nativeObject.contentMaxSize; }
  set contentMaxSize(value: CGSize) { this.nativeObject.contentMaxSize = value; }
  get minFullScreenContentSize(): CGSize { return this.nativeObject.minFullScreenContentSize; }
  set minFullScreenContentSize(value: CGSize) { this.nativeObject.minFullScreenContentSize = value; }
  get maxFullScreenContentSize(): CGSize { return this.nativeObject.maxFullScreenContentSize; }
  set maxFullScreenContentSize(value: CGSize) { this.nativeObject.maxFullScreenContentSize = value; }
  get deviceDescription(): NSDictionary { return this.nativeObject.deviceDescription; }
  get windowController(): NSWindowController { return this.nativeObject.windowController; }
  set windowController(value: NSWindowController) { this.nativeObject.windowController = value; }
  get sheets(): NSArray { return this.nativeObject.sheets; }
  get attachedSheet(): NSWindow { return this.nativeObject.attachedSheet; }
  get isSheet(): boolean { return this.nativeObject.isSheet; }
  get sheetParent(): NSWindow { return this.nativeObject.sheetParent; }
  get childWindows(): NSArray { return this.nativeObject.childWindows; }
  get parentWindow(): NSWindow { return this.nativeObject.parentWindow; }
  set parentWindow(value: NSWindow) { this.nativeObject.parentWindow = value; }
  get appearanceSource(): NSObject { return this.nativeObject.appearanceSource; }
  set appearanceSource(value: NSObject) { this.nativeObject.appearanceSource = value; }
  get colorSpace(): NSColorSpace { return this.nativeObject.colorSpace; }
  set colorSpace(value: NSColorSpace) { this.nativeObject.colorSpace = value; }
  get occlusionState(): interop.Enum<typeof NSWindowOcclusionState> { return this.nativeObject.occlusionState; }
  get titlebarSeparatorStyle(): interop.Enum<typeof NSTitlebarSeparatorStyle> { return this.nativeObject.titlebarSeparatorStyle; }
  set titlebarSeparatorStyle(value: interop.Enum<typeof NSTitlebarSeparatorStyle>) { this.nativeObject.titlebarSeparatorStyle = value; }
  get contentViewController(): NSViewController { return this.nativeObject.contentViewController; }
  set contentViewController(value: NSViewController) { this.nativeObject.contentViewController = value; }
  get initialFirstResponder(): NSView { return this.nativeObject.initialFirstResponder; }
  set initialFirstResponder(value: NSView) { this.nativeObject.initialFirstResponder = value; }
  get keyViewSelectionDirection(): interop.Enum<typeof NSSelectionDirection> { return this.nativeObject.keyViewSelectionDirection; }
  get defaultButtonCell(): NSButtonCell { return this.nativeObject.defaultButtonCell; }
  set defaultButtonCell(value: NSButtonCell) { this.nativeObject.defaultButtonCell = value; }
  get autorecalculatesKeyViewLoop(): boolean { return this.nativeObject.autorecalculatesKeyViewLoop; }
  set autorecalculatesKeyViewLoop(value: boolean) { this.nativeObject.autorecalculatesKeyViewLoop = value; }
  get toolbar(): NSToolbar { return this.nativeObject.toolbar; }
  set toolbar(value: NSToolbar) { this.nativeObject.toolbar = value; }
  get showsToolbarButton(): boolean { return this.nativeObject.showsToolbarButton; }
  set showsToolbarButton(value: boolean) { this.nativeObject.showsToolbarButton = value; }
  get tabbingMode(): interop.Enum<typeof NSWindowTabbingMode> { return this.nativeObject.tabbingMode; }
  set tabbingMode(value: interop.Enum<typeof NSWindowTabbingMode>) { this.nativeObject.tabbingMode = value; }
  get tabbingIdentifier(): string { return this.nativeObject.tabbingIdentifier; }
  set tabbingIdentifier(value: string) { this.nativeObject.tabbingIdentifier = value; }
  get tabbedWindows(): NSArray { return this.nativeObject.tabbedWindows; }
  get tab(): NSWindowTab { return this.nativeObject.tab; }
  get tabGroup(): NSWindowTabGroup { return this.nativeObject.tabGroup; }
  get hasActiveWindowSharingSession(): boolean { return this.nativeObject.hasActiveWindowSharingSession; }
  get windowTitlebarLayoutDirection(): interop.Enum<typeof NSUserInterfaceLayoutDirection> { return this.nativeObject.windowTitlebarLayoutDirection; }
  get currentEvent(): NSEvent { return this.nativeObject.currentEvent; }
  get acceptsMouseMovedEvents(): boolean { return this.nativeObject.acceptsMouseMovedEvents; }
  set acceptsMouseMovedEvents(value: boolean) { this.nativeObject.acceptsMouseMovedEvents = value; }
  get ignoresMouseEvents(): boolean { return this.nativeObject.ignoresMouseEvents; }
  set ignoresMouseEvents(value: boolean) { this.nativeObject.ignoresMouseEvents = value; }
  get mouseLocationOutsideOfEventStream(): CGPoint { return this.nativeObject.mouseLocationOutsideOfEventStream; }
  get areCursorRectsEnabled(): boolean { return this.nativeObject.areCursorRectsEnabled; }
  get windowRef(): interop.Pointer { return this.nativeObject.windowRef; }
  get isFlushWindowDisabled(): boolean { return this.nativeObject.isFlushWindowDisabled; }
  get isAutodisplay(): boolean { return this.nativeObject.isAutodisplay; }
  set isAutodisplay(value: boolean) { this.nativeObject.isAutodisplay = value; }
  get graphicsContext(): NSGraphicsContext { return this.nativeObject.graphicsContext; }
  get isOneShot(): boolean { return this.nativeObject.isOneShot; }
  set isOneShot(value: boolean) { this.nativeObject.isOneShot = value; }
  get preferredBackingLocation(): interop.Enum<typeof NSWindowBackingLocation> { return this.nativeObject.preferredBackingLocation; }
  set preferredBackingLocation(value: interop.Enum<typeof NSWindowBackingLocation>) { this.nativeObject.preferredBackingLocation = value; }
  get backingLocation(): interop.Enum<typeof NSWindowBackingLocation> { return this.nativeObject.backingLocation; }
  get showsResizeIndicator(): boolean { return this.nativeObject.showsResizeIndicator; }
  set showsResizeIndicator(value: boolean) { this.nativeObject.showsResizeIndicator = value; }
  get drawers(): NSArray { return this.nativeObject.drawers; }
  get hasCloseBox(): boolean { return this.nativeObject.hasCloseBox; }
  get hasTitleBar(): boolean { return this.nativeObject.hasTitleBar; }
  get isFloatingPanel(): boolean { return this.nativeObject.isFloatingPanel; }
  get isMiniaturizable(): boolean { return this.nativeObject.isMiniaturizable; }
  get isModalPanel(): boolean { return this.nativeObject.isModalPanel; }
  get isResizable(): boolean { return this.nativeObject.isResizable; }
  get isZoomable(): boolean { return this.nativeObject.isZoomable; }
  get orderedIndex(): number { return this.nativeObject.orderedIndex; }
  set orderedIndex(value: number) { this.nativeObject.orderedIndex = value; }
  get isRestorable(): boolean { return this.nativeObject.isRestorable; }
  set isRestorable(value: boolean) { this.nativeObject.isRestorable = value; }
  get restorationClass(): NSWindowRestoration { return this.nativeObject.restorationClass; }
  set restorationClass(value: NSWindowRestoration) { this.nativeObject.restorationClass = value; }
  get animations(): NSDictionary { return this.nativeObject.animations; }
  set animations(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) { this.nativeObject.animations = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
  get identifier(): string { return this.nativeObject.identifier; }
  set identifier(value: string) { this.nativeObject.identifier = value; }
  get appearance(): NSAppearance { return this.nativeObject.appearance; }
  set appearance(value: NSAppearance) { this.nativeObject.appearance = value; }
  get effectiveAppearance(): NSAppearance { return this.nativeObject.effectiveAppearance; }
  get isAccessibilityElement(): boolean { return this.nativeObject.isAccessibilityElement; }
  set isAccessibilityElement(value: boolean) { this.nativeObject.isAccessibilityElement = value; }
  get accessibilityFrame(): CGRect { return this.nativeObject.accessibilityFrame; }
  set accessibilityFrame(value: CGRect) { this.nativeObject.accessibilityFrame = value; }
  get isAccessibilityFocused(): boolean { return this.nativeObject.isAccessibilityFocused; }
  set isAccessibilityFocused(value: boolean) { this.nativeObject.isAccessibilityFocused = value; }
  get accessibilityActivationPoint(): CGPoint { return this.nativeObject.accessibilityActivationPoint; }
  set accessibilityActivationPoint(value: CGPoint) { this.nativeObject.accessibilityActivationPoint = value; }
  get accessibilityTopLevelUIElement(): interop.Object { return this.nativeObject.accessibilityTopLevelUIElement; }
  set accessibilityTopLevelUIElement(value: interop.Object) { this.nativeObject.accessibilityTopLevelUIElement = value; }
  get accessibilityURL(): NSURL { return this.nativeObject.accessibilityURL; }
  set accessibilityURL(value: NSURL) { this.nativeObject.accessibilityURL = value; }
  get accessibilityValue(): interop.Object { return this.nativeObject.accessibilityValue; }
  set accessibilityValue(value: interop.Object) { this.nativeObject.accessibilityValue = value; }
  get accessibilityValueDescription(): string { return this.nativeObject.accessibilityValueDescription; }
  set accessibilityValueDescription(value: string) { this.nativeObject.accessibilityValueDescription = value; }
  get accessibilityVisibleChildren(): NSArray { return this.nativeObject.accessibilityVisibleChildren; }
  set accessibilityVisibleChildren(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleChildren = value; }
  get accessibilitySubrole(): string { return this.nativeObject.accessibilitySubrole; }
  set accessibilitySubrole(value: string) { this.nativeObject.accessibilitySubrole = value; }
  get accessibilityTitle(): string { return this.nativeObject.accessibilityTitle; }
  set accessibilityTitle(value: string) { this.nativeObject.accessibilityTitle = value; }
  get accessibilityTitleUIElement(): interop.Object { return this.nativeObject.accessibilityTitleUIElement; }
  set accessibilityTitleUIElement(value: interop.Object) { this.nativeObject.accessibilityTitleUIElement = value; }
  get accessibilityNextContents(): NSArray { return this.nativeObject.accessibilityNextContents; }
  set accessibilityNextContents(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityNextContents = value; }
  get accessibilityOrientation(): interop.Enum<typeof NSAccessibilityOrientation> { return this.nativeObject.accessibilityOrientation; }
  set accessibilityOrientation(value: interop.Enum<typeof NSAccessibilityOrientation>) { this.nativeObject.accessibilityOrientation = value; }
  get accessibilityOverflowButton(): interop.Object { return this.nativeObject.accessibilityOverflowButton; }
  set accessibilityOverflowButton(value: interop.Object) { this.nativeObject.accessibilityOverflowButton = value; }
  get accessibilityParent(): interop.Object { return this.nativeObject.accessibilityParent; }
  set accessibilityParent(value: interop.Object) { this.nativeObject.accessibilityParent = value; }
  get accessibilityPlaceholderValue(): string { return this.nativeObject.accessibilityPlaceholderValue; }
  set accessibilityPlaceholderValue(value: string) { this.nativeObject.accessibilityPlaceholderValue = value; }
  get accessibilityPreviousContents(): NSArray { return this.nativeObject.accessibilityPreviousContents; }
  set accessibilityPreviousContents(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityPreviousContents = value; }
  get accessibilityRole(): string { return this.nativeObject.accessibilityRole; }
  set accessibilityRole(value: string) { this.nativeObject.accessibilityRole = value; }
  get accessibilityRoleDescription(): string { return this.nativeObject.accessibilityRoleDescription; }
  set accessibilityRoleDescription(value: string) { this.nativeObject.accessibilityRoleDescription = value; }
  get accessibilitySearchButton(): interop.Object { return this.nativeObject.accessibilitySearchButton; }
  set accessibilitySearchButton(value: interop.Object) { this.nativeObject.accessibilitySearchButton = value; }
  get accessibilitySearchMenu(): interop.Object { return this.nativeObject.accessibilitySearchMenu; }
  set accessibilitySearchMenu(value: interop.Object) { this.nativeObject.accessibilitySearchMenu = value; }
  get isAccessibilitySelected(): boolean { return this.nativeObject.isAccessibilitySelected; }
  set isAccessibilitySelected(value: boolean) { this.nativeObject.isAccessibilitySelected = value; }
  get accessibilitySelectedChildren(): NSArray { return this.nativeObject.accessibilitySelectedChildren; }
  set accessibilitySelectedChildren(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedChildren = value; }
  get accessibilityServesAsTitleForUIElements(): NSArray { return this.nativeObject.accessibilityServesAsTitleForUIElements; }
  set accessibilityServesAsTitleForUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityServesAsTitleForUIElements = value; }
  get accessibilityShownMenu(): interop.Object { return this.nativeObject.accessibilityShownMenu; }
  set accessibilityShownMenu(value: interop.Object) { this.nativeObject.accessibilityShownMenu = value; }
  get accessibilityMinValue(): interop.Object { return this.nativeObject.accessibilityMinValue; }
  set accessibilityMinValue(value: interop.Object) { this.nativeObject.accessibilityMinValue = value; }
  get accessibilityMaxValue(): interop.Object { return this.nativeObject.accessibilityMaxValue; }
  set accessibilityMaxValue(value: interop.Object) { this.nativeObject.accessibilityMaxValue = value; }
  get accessibilityLinkedUIElements(): NSArray { return this.nativeObject.accessibilityLinkedUIElements; }
  set accessibilityLinkedUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityLinkedUIElements = value; }
  get accessibilityWindow(): interop.Object { return this.nativeObject.accessibilityWindow; }
  set accessibilityWindow(value: interop.Object) { this.nativeObject.accessibilityWindow = value; }
  get accessibilityIdentifier(): string { return this.nativeObject.accessibilityIdentifier; }
  set accessibilityIdentifier(value: string) { this.nativeObject.accessibilityIdentifier = value; }
  get accessibilityHelp(): string { return this.nativeObject.accessibilityHelp; }
  set accessibilityHelp(value: string) { this.nativeObject.accessibilityHelp = value; }
  get accessibilityFilename(): string { return this.nativeObject.accessibilityFilename; }
  set accessibilityFilename(value: string) { this.nativeObject.accessibilityFilename = value; }
  get isAccessibilityExpanded(): boolean { return this.nativeObject.isAccessibilityExpanded; }
  set isAccessibilityExpanded(value: boolean) { this.nativeObject.isAccessibilityExpanded = value; }
  get isAccessibilityEdited(): boolean { return this.nativeObject.isAccessibilityEdited; }
  set isAccessibilityEdited(value: boolean) { this.nativeObject.isAccessibilityEdited = value; }
  get isAccessibilityEnabled(): boolean { return this.nativeObject.isAccessibilityEnabled; }
  set isAccessibilityEnabled(value: boolean) { this.nativeObject.isAccessibilityEnabled = value; }
  get accessibilityChildren(): NSArray { return this.nativeObject.accessibilityChildren; }
  set accessibilityChildren(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityChildren = value; }
  get accessibilityChildrenInNavigationOrder(): NSArray { return this.nativeObject.accessibilityChildrenInNavigationOrder; }
  set accessibilityChildrenInNavigationOrder(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityChildrenInNavigationOrder = value; }
  get accessibilityClearButton(): interop.Object { return this.nativeObject.accessibilityClearButton; }
  set accessibilityClearButton(value: interop.Object) { this.nativeObject.accessibilityClearButton = value; }
  get accessibilityCancelButton(): interop.Object { return this.nativeObject.accessibilityCancelButton; }
  set accessibilityCancelButton(value: interop.Object) { this.nativeObject.accessibilityCancelButton = value; }
  get isAccessibilityProtectedContent(): boolean { return this.nativeObject.isAccessibilityProtectedContent; }
  set isAccessibilityProtectedContent(value: boolean) { this.nativeObject.isAccessibilityProtectedContent = value; }
  get accessibilityContents(): NSArray { return this.nativeObject.accessibilityContents; }
  set accessibilityContents(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityContents = value; }
  get accessibilityLabel(): string { return this.nativeObject.accessibilityLabel; }
  set accessibilityLabel(value: string) { this.nativeObject.accessibilityLabel = value; }
  get isAccessibilityAlternateUIVisible(): boolean { return this.nativeObject.isAccessibilityAlternateUIVisible; }
  set isAccessibilityAlternateUIVisible(value: boolean) { this.nativeObject.isAccessibilityAlternateUIVisible = value; }
  get accessibilitySharedFocusElements(): NSArray { return this.nativeObject.accessibilitySharedFocusElements; }
  set accessibilitySharedFocusElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySharedFocusElements = value; }
  get isAccessibilityRequired(): boolean { return this.nativeObject.isAccessibilityRequired; }
  set isAccessibilityRequired(value: boolean) { this.nativeObject.isAccessibilityRequired = value; }
  get accessibilityCustomRotors(): NSArray { return this.nativeObject.accessibilityCustomRotors; }
  set accessibilityCustomRotors(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityCustomRotors = value; }
  get accessibilityUserInputLabels(): NSArray { return this.nativeObject.accessibilityUserInputLabels; }
  set accessibilityUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityUserInputLabels = value; }
  get accessibilityAttributedUserInputLabels(): NSArray { return this.nativeObject.accessibilityAttributedUserInputLabels; }
  set accessibilityAttributedUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityAttributedUserInputLabels = value; }
  get accessibilityApplicationFocusedUIElement(): interop.Object { return this.nativeObject.accessibilityApplicationFocusedUIElement; }
  set accessibilityApplicationFocusedUIElement(value: interop.Object) { this.nativeObject.accessibilityApplicationFocusedUIElement = value; }
  get accessibilityMainWindow(): interop.Object { return this.nativeObject.accessibilityMainWindow; }
  set accessibilityMainWindow(value: interop.Object) { this.nativeObject.accessibilityMainWindow = value; }
  get isAccessibilityHidden(): boolean { return this.nativeObject.isAccessibilityHidden; }
  set isAccessibilityHidden(value: boolean) { this.nativeObject.isAccessibilityHidden = value; }
  get isAccessibilityFrontmost(): boolean { return this.nativeObject.isAccessibilityFrontmost; }
  set isAccessibilityFrontmost(value: boolean) { this.nativeObject.isAccessibilityFrontmost = value; }
  get accessibilityFocusedWindow(): interop.Object { return this.nativeObject.accessibilityFocusedWindow; }
  set accessibilityFocusedWindow(value: interop.Object) { this.nativeObject.accessibilityFocusedWindow = value; }
  get accessibilityWindows(): NSArray { return this.nativeObject.accessibilityWindows; }
  set accessibilityWindows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityWindows = value; }
  get accessibilityExtrasMenuBar(): interop.Object { return this.nativeObject.accessibilityExtrasMenuBar; }
  set accessibilityExtrasMenuBar(value: interop.Object) { this.nativeObject.accessibilityExtrasMenuBar = value; }
  get accessibilityMenuBar(): interop.Object { return this.nativeObject.accessibilityMenuBar; }
  set accessibilityMenuBar(value: interop.Object) { this.nativeObject.accessibilityMenuBar = value; }
  get accessibilityColumnTitles(): NSArray { return this.nativeObject.accessibilityColumnTitles; }
  set accessibilityColumnTitles(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityColumnTitles = value; }
  get isAccessibilityOrderedByRow(): boolean { return this.nativeObject.isAccessibilityOrderedByRow; }
  set isAccessibilityOrderedByRow(value: boolean) { this.nativeObject.isAccessibilityOrderedByRow = value; }
  get accessibilityHorizontalUnits(): interop.Enum<typeof NSAccessibilityUnits> { return this.nativeObject.accessibilityHorizontalUnits; }
  set accessibilityHorizontalUnits(value: interop.Enum<typeof NSAccessibilityUnits>) { this.nativeObject.accessibilityHorizontalUnits = value; }
  get accessibilityVerticalUnits(): interop.Enum<typeof NSAccessibilityUnits> { return this.nativeObject.accessibilityVerticalUnits; }
  set accessibilityVerticalUnits(value: interop.Enum<typeof NSAccessibilityUnits>) { this.nativeObject.accessibilityVerticalUnits = value; }
  get accessibilityHorizontalUnitDescription(): string { return this.nativeObject.accessibilityHorizontalUnitDescription; }
  set accessibilityHorizontalUnitDescription(value: string) { this.nativeObject.accessibilityHorizontalUnitDescription = value; }
  get accessibilityVerticalUnitDescription(): string { return this.nativeObject.accessibilityVerticalUnitDescription; }
  set accessibilityVerticalUnitDescription(value: string) { this.nativeObject.accessibilityVerticalUnitDescription = value; }
  get accessibilityHandles(): NSArray { return this.nativeObject.accessibilityHandles; }
  set accessibilityHandles(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityHandles = value; }
  get accessibilityWarningValue(): interop.Object { return this.nativeObject.accessibilityWarningValue; }
  set accessibilityWarningValue(value: interop.Object) { this.nativeObject.accessibilityWarningValue = value; }
  get accessibilityCriticalValue(): interop.Object { return this.nativeObject.accessibilityCriticalValue; }
  set accessibilityCriticalValue(value: interop.Object) { this.nativeObject.accessibilityCriticalValue = value; }
  get isAccessibilityDisclosed(): boolean { return this.nativeObject.isAccessibilityDisclosed; }
  set isAccessibilityDisclosed(value: boolean) { this.nativeObject.isAccessibilityDisclosed = value; }
  get accessibilityDisclosedByRow(): interop.Object { return this.nativeObject.accessibilityDisclosedByRow; }
  set accessibilityDisclosedByRow(value: interop.Object) { this.nativeObject.accessibilityDisclosedByRow = value; }
  get accessibilityDisclosedRows(): interop.Object { return this.nativeObject.accessibilityDisclosedRows; }
  set accessibilityDisclosedRows(value: interop.Object) { this.nativeObject.accessibilityDisclosedRows = value; }
  get accessibilityDisclosureLevel(): number { return this.nativeObject.accessibilityDisclosureLevel; }
  set accessibilityDisclosureLevel(value: number) { this.nativeObject.accessibilityDisclosureLevel = value; }
  get accessibilityMarkerUIElements(): NSArray { return this.nativeObject.accessibilityMarkerUIElements; }
  set accessibilityMarkerUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityMarkerUIElements = value; }
  get accessibilityMarkerValues(): interop.Object { return this.nativeObject.accessibilityMarkerValues; }
  set accessibilityMarkerValues(value: interop.Object) { this.nativeObject.accessibilityMarkerValues = value; }
  get accessibilityMarkerGroupUIElement(): interop.Object { return this.nativeObject.accessibilityMarkerGroupUIElement; }
  set accessibilityMarkerGroupUIElement(value: interop.Object) { this.nativeObject.accessibilityMarkerGroupUIElement = value; }
  get accessibilityUnits(): interop.Enum<typeof NSAccessibilityUnits> { return this.nativeObject.accessibilityUnits; }
  set accessibilityUnits(value: interop.Enum<typeof NSAccessibilityUnits>) { this.nativeObject.accessibilityUnits = value; }
  get accessibilityUnitDescription(): string { return this.nativeObject.accessibilityUnitDescription; }
  set accessibilityUnitDescription(value: string) { this.nativeObject.accessibilityUnitDescription = value; }
  get accessibilityRulerMarkerType(): interop.Enum<typeof NSAccessibilityRulerMarkerType> { return this.nativeObject.accessibilityRulerMarkerType; }
  set accessibilityRulerMarkerType(value: interop.Enum<typeof NSAccessibilityRulerMarkerType>) { this.nativeObject.accessibilityRulerMarkerType = value; }
  get accessibilityMarkerTypeDescription(): string { return this.nativeObject.accessibilityMarkerTypeDescription; }
  set accessibilityMarkerTypeDescription(value: string) { this.nativeObject.accessibilityMarkerTypeDescription = value; }
  get accessibilityHorizontalScrollBar(): interop.Object { return this.nativeObject.accessibilityHorizontalScrollBar; }
  set accessibilityHorizontalScrollBar(value: interop.Object) { this.nativeObject.accessibilityHorizontalScrollBar = value; }
  get accessibilityVerticalScrollBar(): interop.Object { return this.nativeObject.accessibilityVerticalScrollBar; }
  set accessibilityVerticalScrollBar(value: interop.Object) { this.nativeObject.accessibilityVerticalScrollBar = value; }
  get accessibilityAllowedValues(): NSArray { return this.nativeObject.accessibilityAllowedValues; }
  set accessibilityAllowedValues(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityAllowedValues = value; }
  get accessibilityLabelUIElements(): NSArray { return this.nativeObject.accessibilityLabelUIElements; }
  set accessibilityLabelUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityLabelUIElements = value; }
  get accessibilityLabelValue(): number { return this.nativeObject.accessibilityLabelValue; }
  set accessibilityLabelValue(value: number) { this.nativeObject.accessibilityLabelValue = value; }
  get accessibilitySplitters(): NSArray { return this.nativeObject.accessibilitySplitters; }
  set accessibilitySplitters(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySplitters = value; }
  get accessibilityDecrementButton(): interop.Object { return this.nativeObject.accessibilityDecrementButton; }
  set accessibilityDecrementButton(value: interop.Object) { this.nativeObject.accessibilityDecrementButton = value; }
  get accessibilityIncrementButton(): interop.Object { return this.nativeObject.accessibilityIncrementButton; }
  set accessibilityIncrementButton(value: interop.Object) { this.nativeObject.accessibilityIncrementButton = value; }
  get accessibilityTabs(): NSArray { return this.nativeObject.accessibilityTabs; }
  set accessibilityTabs(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityTabs = value; }
  get accessibilityHeader(): interop.Object { return this.nativeObject.accessibilityHeader; }
  set accessibilityHeader(value: interop.Object) { this.nativeObject.accessibilityHeader = value; }
  get accessibilityColumnCount(): number { return this.nativeObject.accessibilityColumnCount; }
  set accessibilityColumnCount(value: number) { this.nativeObject.accessibilityColumnCount = value; }
  get accessibilityRowCount(): number { return this.nativeObject.accessibilityRowCount; }
  set accessibilityRowCount(value: number) { this.nativeObject.accessibilityRowCount = value; }
  get accessibilityIndex(): number { return this.nativeObject.accessibilityIndex; }
  set accessibilityIndex(value: number) { this.nativeObject.accessibilityIndex = value; }
  get accessibilityColumns(): NSArray { return this.nativeObject.accessibilityColumns; }
  set accessibilityColumns(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityColumns = value; }
  get accessibilityRows(): NSArray { return this.nativeObject.accessibilityRows; }
  set accessibilityRows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityRows = value; }
  get accessibilityVisibleRows(): NSArray { return this.nativeObject.accessibilityVisibleRows; }
  set accessibilityVisibleRows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleRows = value; }
  get accessibilitySelectedRows(): NSArray { return this.nativeObject.accessibilitySelectedRows; }
  set accessibilitySelectedRows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedRows = value; }
  get accessibilityVisibleColumns(): NSArray { return this.nativeObject.accessibilityVisibleColumns; }
  set accessibilityVisibleColumns(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleColumns = value; }
  get accessibilitySelectedColumns(): NSArray { return this.nativeObject.accessibilitySelectedColumns; }
  set accessibilitySelectedColumns(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedColumns = value; }
  get accessibilitySortDirection(): interop.Enum<typeof NSAccessibilitySortDirection> { return this.nativeObject.accessibilitySortDirection; }
  set accessibilitySortDirection(value: interop.Enum<typeof NSAccessibilitySortDirection>) { this.nativeObject.accessibilitySortDirection = value; }
  get accessibilityRowHeaderUIElements(): NSArray { return this.nativeObject.accessibilityRowHeaderUIElements; }
  set accessibilityRowHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityRowHeaderUIElements = value; }
  get accessibilitySelectedCells(): NSArray { return this.nativeObject.accessibilitySelectedCells; }
  set accessibilitySelectedCells(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedCells = value; }
  get accessibilityVisibleCells(): NSArray { return this.nativeObject.accessibilityVisibleCells; }
  set accessibilityVisibleCells(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleCells = value; }
  get accessibilityColumnHeaderUIElements(): NSArray { return this.nativeObject.accessibilityColumnHeaderUIElements; }
  set accessibilityColumnHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityColumnHeaderUIElements = value; }
  get accessibilityRowIndexRange(): _NSRange { return this.nativeObject.accessibilityRowIndexRange; }
  set accessibilityRowIndexRange(value: _NSRange) { this.nativeObject.accessibilityRowIndexRange = value; }
  get accessibilityColumnIndexRange(): _NSRange { return this.nativeObject.accessibilityColumnIndexRange; }
  set accessibilityColumnIndexRange(value: _NSRange) { this.nativeObject.accessibilityColumnIndexRange = value; }
  get accessibilityInsertionPointLineNumber(): number { return this.nativeObject.accessibilityInsertionPointLineNumber; }
  set accessibilityInsertionPointLineNumber(value: number) { this.nativeObject.accessibilityInsertionPointLineNumber = value; }
  get accessibilitySharedCharacterRange(): _NSRange { return this.nativeObject.accessibilitySharedCharacterRange; }
  set accessibilitySharedCharacterRange(value: _NSRange) { this.nativeObject.accessibilitySharedCharacterRange = value; }
  get accessibilitySharedTextUIElements(): NSArray { return this.nativeObject.accessibilitySharedTextUIElements; }
  set accessibilitySharedTextUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySharedTextUIElements = value; }
  get accessibilityVisibleCharacterRange(): _NSRange { return this.nativeObject.accessibilityVisibleCharacterRange; }
  set accessibilityVisibleCharacterRange(value: _NSRange) { this.nativeObject.accessibilityVisibleCharacterRange = value; }
  get accessibilityNumberOfCharacters(): number { return this.nativeObject.accessibilityNumberOfCharacters; }
  set accessibilityNumberOfCharacters(value: number) { this.nativeObject.accessibilityNumberOfCharacters = value; }
  get accessibilitySelectedText(): string { return this.nativeObject.accessibilitySelectedText; }
  set accessibilitySelectedText(value: string) { this.nativeObject.accessibilitySelectedText = value; }
  get accessibilitySelectedTextRange(): _NSRange { return this.nativeObject.accessibilitySelectedTextRange; }
  set accessibilitySelectedTextRange(value: _NSRange) { this.nativeObject.accessibilitySelectedTextRange = value; }
  get accessibilitySelectedTextRanges(): NSArray { return this.nativeObject.accessibilitySelectedTextRanges; }
  set accessibilitySelectedTextRanges(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedTextRanges = value; }
  get accessibilityToolbarButton(): interop.Object { return this.nativeObject.accessibilityToolbarButton; }
  set accessibilityToolbarButton(value: interop.Object) { this.nativeObject.accessibilityToolbarButton = value; }
  get isAccessibilityModal(): boolean { return this.nativeObject.isAccessibilityModal; }
  set isAccessibilityModal(value: boolean) { this.nativeObject.isAccessibilityModal = value; }
  get accessibilityProxy(): interop.Object { return this.nativeObject.accessibilityProxy; }
  set accessibilityProxy(value: interop.Object) { this.nativeObject.accessibilityProxy = value; }
  get isAccessibilityMain(): boolean { return this.nativeObject.isAccessibilityMain; }
  set isAccessibilityMain(value: boolean) { this.nativeObject.isAccessibilityMain = value; }
  get accessibilityFullScreenButton(): interop.Object { return this.nativeObject.accessibilityFullScreenButton; }
  set accessibilityFullScreenButton(value: interop.Object) { this.nativeObject.accessibilityFullScreenButton = value; }
  get accessibilityGrowArea(): interop.Object { return this.nativeObject.accessibilityGrowArea; }
  set accessibilityGrowArea(value: interop.Object) { this.nativeObject.accessibilityGrowArea = value; }
  get accessibilityDocument(): string { return this.nativeObject.accessibilityDocument; }
  set accessibilityDocument(value: string) { this.nativeObject.accessibilityDocument = value; }
  get accessibilityDefaultButton(): interop.Object { return this.nativeObject.accessibilityDefaultButton; }
  set accessibilityDefaultButton(value: interop.Object) { this.nativeObject.accessibilityDefaultButton = value; }
  get accessibilityCloseButton(): interop.Object { return this.nativeObject.accessibilityCloseButton; }
  set accessibilityCloseButton(value: interop.Object) { this.nativeObject.accessibilityCloseButton = value; }
  get accessibilityZoomButton(): interop.Object { return this.nativeObject.accessibilityZoomButton; }
  set accessibilityZoomButton(value: interop.Object) { this.nativeObject.accessibilityZoomButton = value; }
  get accessibilityMinimizeButton(): interop.Object { return this.nativeObject.accessibilityMinimizeButton; }
  set accessibilityMinimizeButton(value: interop.Object) { this.nativeObject.accessibilityMinimizeButton = value; }
  get isAccessibilityMinimized(): boolean { return this.nativeObject.isAccessibilityMinimized; }
  set isAccessibilityMinimized(value: boolean) { this.nativeObject.isAccessibilityMinimized = value; }
  get accessibilityCustomActions(): NSArray { return this.nativeObject.accessibilityCustomActions; }
  set accessibilityCustomActions(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityCustomActions = value; }

  set windowShouldClose(value: (sender: NSWindow) => boolean) {
    this.delegate.windowShouldClose = value;
  }
  set windowWillReturnFieldEditorToObject(value: (sender: NSWindow, client: interop.Object | null) => interop.Object) {
    this.delegate.windowWillReturnFieldEditorToObject = value;
  }
  set windowWillResizeToSize(value: (sender: NSWindow, frameSize: CGSize) => CGSize) {
    this.delegate.windowWillResizeToSize = value;
  }
  set windowWillUseStandardFrameDefaultFrame(value: (window: NSWindow, newFrame: CGRect) => CGRect) {
    this.delegate.windowWillUseStandardFrameDefaultFrame = value;
  }
  set windowShouldZoomToFrame(value: (window: NSWindow, newFrame: CGRect) => boolean) {
    this.delegate.windowShouldZoomToFrame = value;
  }
  set windowWillReturnUndoManager(value: (window: NSWindow) => NSUndoManager) {
    this.delegate.windowWillReturnUndoManager = value;
  }
  set windowWillPositionSheetUsingRect(value: (window: NSWindow, sheet: NSWindow, rect: CGRect) => CGRect) {
    this.delegate.windowWillPositionSheetUsingRect = value;
  }
  set windowShouldPopUpDocumentPathMenu(value: (window: NSWindow, menu: NSMenu) => boolean) {
    this.delegate.windowShouldPopUpDocumentPathMenu = value;
  }
  set windowShouldDragDocumentWithEventFromWithPasteboard(value: (window: NSWindow, event: NSEvent, dragImageLocation: CGPoint, pasteboard: NSPasteboard) => boolean) {
    this.delegate.windowShouldDragDocumentWithEventFromWithPasteboard = value;
  }
  set windowWillUseFullScreenContentSize(value: (window: NSWindow, proposedSize: CGSize) => CGSize) {
    this.delegate.windowWillUseFullScreenContentSize = value;
  }
  set windowWillUseFullScreenPresentationOptions(value: (window: NSWindow, proposedOptions: interop.Enum<typeof NSApplicationPresentationOptions>) => interop.Enum<typeof NSApplicationPresentationOptions>) {
    this.delegate.windowWillUseFullScreenPresentationOptions = value;
  }
  set customWindowsToEnterFullScreenForWindow(value: (window: NSWindow) => NSArray) {
    this.delegate.customWindowsToEnterFullScreenForWindow = value;
  }
  set windowStartCustomAnimationToEnterFullScreenWithDuration(value: (window: NSWindow, duration: number) => void) {
    this.delegate.windowStartCustomAnimationToEnterFullScreenWithDuration = value;
  }
  set windowDidFailToEnterFullScreen(value: (window: NSWindow) => void) {
    this.delegate.windowDidFailToEnterFullScreen = value;
  }
  set customWindowsToExitFullScreenForWindow(value: (window: NSWindow) => NSArray) {
    this.delegate.customWindowsToExitFullScreenForWindow = value;
  }
  set windowStartCustomAnimationToExitFullScreenWithDuration(value: (window: NSWindow, duration: number) => void) {
    this.delegate.windowStartCustomAnimationToExitFullScreenWithDuration = value;
  }
  set customWindowsToEnterFullScreenForWindowOnScreen(value: (window: NSWindow, screen: NSScreen) => NSArray) {
    this.delegate.customWindowsToEnterFullScreenForWindowOnScreen = value;
  }
  set windowStartCustomAnimationToEnterFullScreenOnScreenWithDuration(value: (window: NSWindow, screen: NSScreen, duration: number) => void) {
    this.delegate.windowStartCustomAnimationToEnterFullScreenOnScreenWithDuration = value;
  }
  set windowDidFailToExitFullScreen(value: (window: NSWindow) => void) {
    this.delegate.windowDidFailToExitFullScreen = value;
  }
  set windowWillResizeForVersionBrowserWithMaxPreferredSizeMaxAllowedSize(value: (window: NSWindow, maxPreferredFrameSize: CGSize, maxAllowedFrameSize: CGSize) => CGSize) {
    this.delegate.windowWillResizeForVersionBrowserWithMaxPreferredSizeMaxAllowedSize = value;
  }
  set windowWillEncodeRestorableState(value: (window: NSWindow, state: NSCoder) => void) {
    this.delegate.windowWillEncodeRestorableState = value;
  }
  set windowDidDecodeRestorableState(value: (window: NSWindow, state: NSCoder) => void) {
    this.delegate.windowDidDecodeRestorableState = value;
  }
  set previewRepresentableActivityItemsForWindow(value: (window: NSWindow) => NSArray | null) {
    this.delegate.previewRepresentableActivityItemsForWindow = value;
  }
  set windowDidResize(value: (notification: NSNotification) => void) {
    this.delegate.windowDidResize = value;
  }
  set windowDidExpose(value: (notification: NSNotification) => void) {
    this.delegate.windowDidExpose = value;
  }
  set windowWillMove(value: (notification: NSNotification) => void) {
    this.delegate.windowWillMove = value;
  }
  set windowDidMove(value: (notification: NSNotification) => void) {
    this.delegate.windowDidMove = value;
  }
  set windowDidBecomeKey(value: (notification: NSNotification) => void) {
    this.delegate.windowDidBecomeKey = value;
  }
  set windowDidResignKey(value: (notification: NSNotification) => void) {
    this.delegate.windowDidResignKey = value;
  }
  set windowDidBecomeMain(value: (notification: NSNotification) => void) {
    this.delegate.windowDidBecomeMain = value;
  }
  set windowDidResignMain(value: (notification: NSNotification) => void) {
    this.delegate.windowDidResignMain = value;
  }
  set windowWillClose(value: (notification: NSNotification) => void) {
    this.delegate.windowWillClose = value;
  }
  set windowWillMiniaturize(value: (notification: NSNotification) => void) {
    this.delegate.windowWillMiniaturize = value;
  }
  set windowDidMiniaturize(value: (notification: NSNotification) => void) {
    this.delegate.windowDidMiniaturize = value;
  }
  set windowDidDeminiaturize(value: (notification: NSNotification) => void) {
    this.delegate.windowDidDeminiaturize = value;
  }
  set windowDidUpdate(value: (notification: NSNotification) => void) {
    this.delegate.windowDidUpdate = value;
  }
  set windowDidChangeScreen(value: (notification: NSNotification) => void) {
    this.delegate.windowDidChangeScreen = value;
  }
  set windowDidChangeScreenProfile(value: (notification: NSNotification) => void) {
    this.delegate.windowDidChangeScreenProfile = value;
  }
  set windowDidChangeBackingProperties(value: (notification: NSNotification) => void) {
    this.delegate.windowDidChangeBackingProperties = value;
  }
  set windowWillBeginSheet(value: (notification: NSNotification) => void) {
    this.delegate.windowWillBeginSheet = value;
  }
  set windowDidEndSheet(value: (notification: NSNotification) => void) {
    this.delegate.windowDidEndSheet = value;
  }
  set windowWillStartLiveResize(value: (notification: NSNotification) => void) {
    this.delegate.windowWillStartLiveResize = value;
  }
  set windowDidEndLiveResize(value: (notification: NSNotification) => void) {
    this.delegate.windowDidEndLiveResize = value;
  }
  set windowWillEnterFullScreen(value: (notification: NSNotification) => void) {
    this.delegate.windowWillEnterFullScreen = value;
  }
  set windowDidEnterFullScreen(value: (notification: NSNotification) => void) {
    this.delegate.windowDidEnterFullScreen = value;
  }
  set windowWillExitFullScreen(value: (notification: NSNotification) => void) {
    this.delegate.windowWillExitFullScreen = value;
  }
  set windowDidExitFullScreen(value: (notification: NSNotification) => void) {
    this.delegate.windowDidExitFullScreen = value;
  }
  set windowWillEnterVersionBrowser(value: (notification: NSNotification) => void) {
    this.delegate.windowWillEnterVersionBrowser = value;
  }
  set windowDidEnterVersionBrowser(value: (notification: NSNotification) => void) {
    this.delegate.windowDidEnterVersionBrowser = value;
  }
  set windowWillExitVersionBrowser(value: (notification: NSNotification) => void) {
    this.delegate.windowWillExitVersionBrowser = value;
  }
  set windowDidExitVersionBrowser(value: (notification: NSNotification) => void) {
    this.delegate.windowDidExitVersionBrowser = value;
  }
  set windowDidChangeOcclusionState(value: (notification: NSNotification) => void) {
    this.delegate.windowDidChangeOcclusionState = value;
  }
}

export class HTMLNSScrubberLayoutAttributesElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSScrubberLayoutAttributes.new();

  get itemIndex(): number { return this.nativeObject.itemIndex; }
  set itemIndex(value: number) { this.nativeObject.itemIndex = value; }
  get frame(): CGRect { return this.nativeObject.frame; }
  set frame(value: CGRect) { this.nativeObject.frame = value; }
  get alpha(): number { return this.nativeObject.alpha; }
  set alpha(value: number) { this.nativeObject.alpha = value; }
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

export class HTMLNSCursorElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSCursor.new();

  get image(): NSImage { return this.nativeObject.image; }
  get hotSpot(): CGPoint { return this.nativeObject.hotSpot; }
  get isSetOnMouseExited(): boolean { return this.nativeObject.isSetOnMouseExited; }
  get isSetOnMouseEntered(): boolean { return this.nativeObject.isSetOnMouseEntered; }
}

export class HTMLNSTabViewItemElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTabViewItem.new();

  get identifier(): interop.Object { return this.nativeObject.identifier; }
  set identifier(value: interop.Object) { this.nativeObject.identifier = value; }
  get color(): NSColor { return this.nativeObject.color; }
  set color(value: NSColor) { this.nativeObject.color = value; }
  get label(): string { return this.nativeObject.label; }
  set label(value: string) { this.nativeObject.label = value; }
  get image(): NSImage { return this.nativeObject.image; }
  set image(value: NSImage) { this.nativeObject.image = value; }
  get view(): NSView { return this.nativeObject.view; }
  set view(value: NSView) { this.nativeObject.view = value; }
  get viewController(): NSViewController { return this.nativeObject.viewController; }
  set viewController(value: NSViewController) { this.nativeObject.viewController = value; }
  get tabState(): interop.Enum<typeof NSTabState> { return this.nativeObject.tabState; }
  get tabView(): NSTabView { return this.nativeObject.tabView; }
  get initialFirstResponder(): NSView { return this.nativeObject.initialFirstResponder; }
  set initialFirstResponder(value: NSView) { this.nativeObject.initialFirstResponder = value; }
  get toolTip(): string { return this.nativeObject.toolTip; }
  set toolTip(value: string) { this.nativeObject.toolTip = value; }
}

export class HTMLNSMenuItemBadgeElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSMenuItemBadge.new();

  get itemCount(): number { return this.nativeObject.itemCount; }
  get type(): interop.Enum<typeof NSMenuItemBadgeType> { return this.nativeObject.type; }
  get stringValue(): string { return this.nativeObject.stringValue; }
}

export class HTMLNSGridColumnElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSGridColumn.new();

  get gridView(): NSGridView | null { return this.nativeObject.gridView; }
  get numberOfCells(): number { return this.nativeObject.numberOfCells; }
  get xPlacement(): interop.Enum<typeof NSGridCellPlacement> { return this.nativeObject.xPlacement; }
  set xPlacement(value: interop.Enum<typeof NSGridCellPlacement>) { this.nativeObject.xPlacement = value; }
  get width(): number { return this.nativeObject.width; }
  set width(value: number) { this.nativeObject.width = value; }
  get leadingPadding(): number { return this.nativeObject.leadingPadding; }
  set leadingPadding(value: number) { this.nativeObject.leadingPadding = value; }
  get trailingPadding(): number { return this.nativeObject.trailingPadding; }
  set trailingPadding(value: number) { this.nativeObject.trailingPadding = value; }
  get isHidden(): boolean { return this.nativeObject.isHidden; }
  set isHidden(value: boolean) { this.nativeObject.isHidden = value; }
}

export class HTMLNSPathCellElement extends HTMLNSActionCellElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSPathCell.new();
  get delegate(): NSPathCellDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSPathCellDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSPathCellDelegateImpl;
  }

  get pathStyle(): interop.Enum<typeof NSPathStyle> { return this.nativeObject.pathStyle; }
  set pathStyle(value: interop.Enum<typeof NSPathStyle>) { this.nativeObject.pathStyle = value; }
  get URL(): NSURL { return this.nativeObject.URL; }
  set URL(value: NSURL) { this.nativeObject.URL = value; }
  get allowedTypes(): NSArray { return this.nativeObject.allowedTypes; }
  set allowedTypes(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.allowedTypes = value; }
  get pathComponentCells(): NSArray { return this.nativeObject.pathComponentCells; }
  set pathComponentCells(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.pathComponentCells = value; }
  get clickedPathComponentCell(): NSPathComponentCell { return this.nativeObject.clickedPathComponentCell; }
  get doubleAction(): string { return this.nativeObject.doubleAction; }
  set doubleAction(value: string) { this.nativeObject.doubleAction = value; }
  get backgroundColor(): NSColor { return this.nativeObject.backgroundColor; }
  set backgroundColor(value: NSColor) { this.nativeObject.backgroundColor = value; }
  get placeholderString(): string { return this.nativeObject.placeholderString; }
  set placeholderString(value: string) { this.nativeObject.placeholderString = value; }
  get placeholderAttributedString(): NSAttributedString { return this.nativeObject.placeholderAttributedString; }
  set placeholderAttributedString(value: NSAttributedString) { this.nativeObject.placeholderAttributedString = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }

  set pathCellWillDisplayOpenPanel(value: (pathCell: NSPathCell, openPanel: NSOpenPanel) => void) {
    this.delegate.pathCellWillDisplayOpenPanel = value;
  }
  set pathCellWillPopUpMenu(value: (pathCell: NSPathCell, menu: NSMenu) => void) {
    this.delegate.pathCellWillPopUpMenu = value;
  }
}

export class HTMLNSWorkspaceAuthorizationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSWorkspaceAuthorization.new();

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

export class HTMLNSWindowTabElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSWindowTab.new();

  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get attributedTitle(): NSAttributedString { return this.nativeObject.attributedTitle; }
  set attributedTitle(value: NSAttributedString) { this.nativeObject.attributedTitle = value; }
  get toolTip(): string { return this.nativeObject.toolTip; }
  set toolTip(value: string) { this.nativeObject.toolTip = value; }
  get accessoryView(): NSView { return this.nativeObject.accessoryView; }
  set accessoryView(value: NSView) { this.nativeObject.accessoryView = value; }
}

export class HTMLNSDrawerElement extends HTMLNSResponderElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSDrawer.new();
  get delegate(): NSDrawerDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSDrawerDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSDrawerDelegateImpl;
  }

  get parentWindow(): NSWindow { return this.nativeObject.parentWindow; }
  set parentWindow(value: NSWindow) { this.nativeObject.parentWindow = value; }
  get contentView(): NSView { return this.nativeObject.contentView; }
  set contentView(value: NSView) { this.nativeObject.contentView = value; }
  get preferredEdge(): interop.Enum<typeof NSRectEdge> { return this.nativeObject.preferredEdge; }
  set preferredEdge(value: interop.Enum<typeof NSRectEdge>) { this.nativeObject.preferredEdge = value; }
  get state(): number { return this.nativeObject.state; }
  get edge(): interop.Enum<typeof NSRectEdge> { return this.nativeObject.edge; }
  get contentSize(): CGSize { return this.nativeObject.contentSize; }
  set contentSize(value: CGSize) { this.nativeObject.contentSize = value; }
  get minContentSize(): CGSize { return this.nativeObject.minContentSize; }
  set minContentSize(value: CGSize) { this.nativeObject.minContentSize = value; }
  get maxContentSize(): CGSize { return this.nativeObject.maxContentSize; }
  set maxContentSize(value: CGSize) { this.nativeObject.maxContentSize = value; }
  get leadingOffset(): number { return this.nativeObject.leadingOffset; }
  set leadingOffset(value: number) { this.nativeObject.leadingOffset = value; }
  get trailingOffset(): number { return this.nativeObject.trailingOffset; }
  set trailingOffset(value: number) { this.nativeObject.trailingOffset = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
  get isAccessibilityElement(): boolean { return this.nativeObject.isAccessibilityElement; }
  set isAccessibilityElement(value: boolean) { this.nativeObject.isAccessibilityElement = value; }
  get accessibilityFrame(): CGRect { return this.nativeObject.accessibilityFrame; }
  set accessibilityFrame(value: CGRect) { this.nativeObject.accessibilityFrame = value; }
  get isAccessibilityFocused(): boolean { return this.nativeObject.isAccessibilityFocused; }
  set isAccessibilityFocused(value: boolean) { this.nativeObject.isAccessibilityFocused = value; }
  get accessibilityActivationPoint(): CGPoint { return this.nativeObject.accessibilityActivationPoint; }
  set accessibilityActivationPoint(value: CGPoint) { this.nativeObject.accessibilityActivationPoint = value; }
  get accessibilityTopLevelUIElement(): interop.Object { return this.nativeObject.accessibilityTopLevelUIElement; }
  set accessibilityTopLevelUIElement(value: interop.Object) { this.nativeObject.accessibilityTopLevelUIElement = value; }
  get accessibilityURL(): NSURL { return this.nativeObject.accessibilityURL; }
  set accessibilityURL(value: NSURL) { this.nativeObject.accessibilityURL = value; }
  get accessibilityValue(): interop.Object { return this.nativeObject.accessibilityValue; }
  set accessibilityValue(value: interop.Object) { this.nativeObject.accessibilityValue = value; }
  get accessibilityValueDescription(): string { return this.nativeObject.accessibilityValueDescription; }
  set accessibilityValueDescription(value: string) { this.nativeObject.accessibilityValueDescription = value; }
  get accessibilityVisibleChildren(): NSArray { return this.nativeObject.accessibilityVisibleChildren; }
  set accessibilityVisibleChildren(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleChildren = value; }
  get accessibilitySubrole(): string { return this.nativeObject.accessibilitySubrole; }
  set accessibilitySubrole(value: string) { this.nativeObject.accessibilitySubrole = value; }
  get accessibilityTitle(): string { return this.nativeObject.accessibilityTitle; }
  set accessibilityTitle(value: string) { this.nativeObject.accessibilityTitle = value; }
  get accessibilityTitleUIElement(): interop.Object { return this.nativeObject.accessibilityTitleUIElement; }
  set accessibilityTitleUIElement(value: interop.Object) { this.nativeObject.accessibilityTitleUIElement = value; }
  get accessibilityNextContents(): NSArray { return this.nativeObject.accessibilityNextContents; }
  set accessibilityNextContents(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityNextContents = value; }
  get accessibilityOrientation(): interop.Enum<typeof NSAccessibilityOrientation> { return this.nativeObject.accessibilityOrientation; }
  set accessibilityOrientation(value: interop.Enum<typeof NSAccessibilityOrientation>) { this.nativeObject.accessibilityOrientation = value; }
  get accessibilityOverflowButton(): interop.Object { return this.nativeObject.accessibilityOverflowButton; }
  set accessibilityOverflowButton(value: interop.Object) { this.nativeObject.accessibilityOverflowButton = value; }
  get accessibilityParent(): interop.Object { return this.nativeObject.accessibilityParent; }
  set accessibilityParent(value: interop.Object) { this.nativeObject.accessibilityParent = value; }
  get accessibilityPlaceholderValue(): string { return this.nativeObject.accessibilityPlaceholderValue; }
  set accessibilityPlaceholderValue(value: string) { this.nativeObject.accessibilityPlaceholderValue = value; }
  get accessibilityPreviousContents(): NSArray { return this.nativeObject.accessibilityPreviousContents; }
  set accessibilityPreviousContents(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityPreviousContents = value; }
  get accessibilityRole(): string { return this.nativeObject.accessibilityRole; }
  set accessibilityRole(value: string) { this.nativeObject.accessibilityRole = value; }
  get accessibilityRoleDescription(): string { return this.nativeObject.accessibilityRoleDescription; }
  set accessibilityRoleDescription(value: string) { this.nativeObject.accessibilityRoleDescription = value; }
  get accessibilitySearchButton(): interop.Object { return this.nativeObject.accessibilitySearchButton; }
  set accessibilitySearchButton(value: interop.Object) { this.nativeObject.accessibilitySearchButton = value; }
  get accessibilitySearchMenu(): interop.Object { return this.nativeObject.accessibilitySearchMenu; }
  set accessibilitySearchMenu(value: interop.Object) { this.nativeObject.accessibilitySearchMenu = value; }
  get isAccessibilitySelected(): boolean { return this.nativeObject.isAccessibilitySelected; }
  set isAccessibilitySelected(value: boolean) { this.nativeObject.isAccessibilitySelected = value; }
  get accessibilitySelectedChildren(): NSArray { return this.nativeObject.accessibilitySelectedChildren; }
  set accessibilitySelectedChildren(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedChildren = value; }
  get accessibilityServesAsTitleForUIElements(): NSArray { return this.nativeObject.accessibilityServesAsTitleForUIElements; }
  set accessibilityServesAsTitleForUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityServesAsTitleForUIElements = value; }
  get accessibilityShownMenu(): interop.Object { return this.nativeObject.accessibilityShownMenu; }
  set accessibilityShownMenu(value: interop.Object) { this.nativeObject.accessibilityShownMenu = value; }
  get accessibilityMinValue(): interop.Object { return this.nativeObject.accessibilityMinValue; }
  set accessibilityMinValue(value: interop.Object) { this.nativeObject.accessibilityMinValue = value; }
  get accessibilityMaxValue(): interop.Object { return this.nativeObject.accessibilityMaxValue; }
  set accessibilityMaxValue(value: interop.Object) { this.nativeObject.accessibilityMaxValue = value; }
  get accessibilityLinkedUIElements(): NSArray { return this.nativeObject.accessibilityLinkedUIElements; }
  set accessibilityLinkedUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityLinkedUIElements = value; }
  get accessibilityWindow(): interop.Object { return this.nativeObject.accessibilityWindow; }
  set accessibilityWindow(value: interop.Object) { this.nativeObject.accessibilityWindow = value; }
  get accessibilityIdentifier(): string { return this.nativeObject.accessibilityIdentifier; }
  set accessibilityIdentifier(value: string) { this.nativeObject.accessibilityIdentifier = value; }
  get accessibilityHelp(): string { return this.nativeObject.accessibilityHelp; }
  set accessibilityHelp(value: string) { this.nativeObject.accessibilityHelp = value; }
  get accessibilityFilename(): string { return this.nativeObject.accessibilityFilename; }
  set accessibilityFilename(value: string) { this.nativeObject.accessibilityFilename = value; }
  get isAccessibilityExpanded(): boolean { return this.nativeObject.isAccessibilityExpanded; }
  set isAccessibilityExpanded(value: boolean) { this.nativeObject.isAccessibilityExpanded = value; }
  get isAccessibilityEdited(): boolean { return this.nativeObject.isAccessibilityEdited; }
  set isAccessibilityEdited(value: boolean) { this.nativeObject.isAccessibilityEdited = value; }
  get isAccessibilityEnabled(): boolean { return this.nativeObject.isAccessibilityEnabled; }
  set isAccessibilityEnabled(value: boolean) { this.nativeObject.isAccessibilityEnabled = value; }
  get accessibilityChildren(): NSArray { return this.nativeObject.accessibilityChildren; }
  set accessibilityChildren(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityChildren = value; }
  get accessibilityChildrenInNavigationOrder(): NSArray { return this.nativeObject.accessibilityChildrenInNavigationOrder; }
  set accessibilityChildrenInNavigationOrder(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityChildrenInNavigationOrder = value; }
  get accessibilityClearButton(): interop.Object { return this.nativeObject.accessibilityClearButton; }
  set accessibilityClearButton(value: interop.Object) { this.nativeObject.accessibilityClearButton = value; }
  get accessibilityCancelButton(): interop.Object { return this.nativeObject.accessibilityCancelButton; }
  set accessibilityCancelButton(value: interop.Object) { this.nativeObject.accessibilityCancelButton = value; }
  get isAccessibilityProtectedContent(): boolean { return this.nativeObject.isAccessibilityProtectedContent; }
  set isAccessibilityProtectedContent(value: boolean) { this.nativeObject.isAccessibilityProtectedContent = value; }
  get accessibilityContents(): NSArray { return this.nativeObject.accessibilityContents; }
  set accessibilityContents(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityContents = value; }
  get accessibilityLabel(): string { return this.nativeObject.accessibilityLabel; }
  set accessibilityLabel(value: string) { this.nativeObject.accessibilityLabel = value; }
  get isAccessibilityAlternateUIVisible(): boolean { return this.nativeObject.isAccessibilityAlternateUIVisible; }
  set isAccessibilityAlternateUIVisible(value: boolean) { this.nativeObject.isAccessibilityAlternateUIVisible = value; }
  get accessibilitySharedFocusElements(): NSArray { return this.nativeObject.accessibilitySharedFocusElements; }
  set accessibilitySharedFocusElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySharedFocusElements = value; }
  get isAccessibilityRequired(): boolean { return this.nativeObject.isAccessibilityRequired; }
  set isAccessibilityRequired(value: boolean) { this.nativeObject.isAccessibilityRequired = value; }
  get accessibilityCustomRotors(): NSArray { return this.nativeObject.accessibilityCustomRotors; }
  set accessibilityCustomRotors(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityCustomRotors = value; }
  get accessibilityUserInputLabels(): NSArray { return this.nativeObject.accessibilityUserInputLabels; }
  set accessibilityUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityUserInputLabels = value; }
  get accessibilityAttributedUserInputLabels(): NSArray { return this.nativeObject.accessibilityAttributedUserInputLabels; }
  set accessibilityAttributedUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityAttributedUserInputLabels = value; }
  get accessibilityApplicationFocusedUIElement(): interop.Object { return this.nativeObject.accessibilityApplicationFocusedUIElement; }
  set accessibilityApplicationFocusedUIElement(value: interop.Object) { this.nativeObject.accessibilityApplicationFocusedUIElement = value; }
  get accessibilityMainWindow(): interop.Object { return this.nativeObject.accessibilityMainWindow; }
  set accessibilityMainWindow(value: interop.Object) { this.nativeObject.accessibilityMainWindow = value; }
  get isAccessibilityHidden(): boolean { return this.nativeObject.isAccessibilityHidden; }
  set isAccessibilityHidden(value: boolean) { this.nativeObject.isAccessibilityHidden = value; }
  get isAccessibilityFrontmost(): boolean { return this.nativeObject.isAccessibilityFrontmost; }
  set isAccessibilityFrontmost(value: boolean) { this.nativeObject.isAccessibilityFrontmost = value; }
  get accessibilityFocusedWindow(): interop.Object { return this.nativeObject.accessibilityFocusedWindow; }
  set accessibilityFocusedWindow(value: interop.Object) { this.nativeObject.accessibilityFocusedWindow = value; }
  get accessibilityWindows(): NSArray { return this.nativeObject.accessibilityWindows; }
  set accessibilityWindows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityWindows = value; }
  get accessibilityExtrasMenuBar(): interop.Object { return this.nativeObject.accessibilityExtrasMenuBar; }
  set accessibilityExtrasMenuBar(value: interop.Object) { this.nativeObject.accessibilityExtrasMenuBar = value; }
  get accessibilityMenuBar(): interop.Object { return this.nativeObject.accessibilityMenuBar; }
  set accessibilityMenuBar(value: interop.Object) { this.nativeObject.accessibilityMenuBar = value; }
  get accessibilityColumnTitles(): NSArray { return this.nativeObject.accessibilityColumnTitles; }
  set accessibilityColumnTitles(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityColumnTitles = value; }
  get isAccessibilityOrderedByRow(): boolean { return this.nativeObject.isAccessibilityOrderedByRow; }
  set isAccessibilityOrderedByRow(value: boolean) { this.nativeObject.isAccessibilityOrderedByRow = value; }
  get accessibilityHorizontalUnits(): interop.Enum<typeof NSAccessibilityUnits> { return this.nativeObject.accessibilityHorizontalUnits; }
  set accessibilityHorizontalUnits(value: interop.Enum<typeof NSAccessibilityUnits>) { this.nativeObject.accessibilityHorizontalUnits = value; }
  get accessibilityVerticalUnits(): interop.Enum<typeof NSAccessibilityUnits> { return this.nativeObject.accessibilityVerticalUnits; }
  set accessibilityVerticalUnits(value: interop.Enum<typeof NSAccessibilityUnits>) { this.nativeObject.accessibilityVerticalUnits = value; }
  get accessibilityHorizontalUnitDescription(): string { return this.nativeObject.accessibilityHorizontalUnitDescription; }
  set accessibilityHorizontalUnitDescription(value: string) { this.nativeObject.accessibilityHorizontalUnitDescription = value; }
  get accessibilityVerticalUnitDescription(): string { return this.nativeObject.accessibilityVerticalUnitDescription; }
  set accessibilityVerticalUnitDescription(value: string) { this.nativeObject.accessibilityVerticalUnitDescription = value; }
  get accessibilityHandles(): NSArray { return this.nativeObject.accessibilityHandles; }
  set accessibilityHandles(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityHandles = value; }
  get accessibilityWarningValue(): interop.Object { return this.nativeObject.accessibilityWarningValue; }
  set accessibilityWarningValue(value: interop.Object) { this.nativeObject.accessibilityWarningValue = value; }
  get accessibilityCriticalValue(): interop.Object { return this.nativeObject.accessibilityCriticalValue; }
  set accessibilityCriticalValue(value: interop.Object) { this.nativeObject.accessibilityCriticalValue = value; }
  get isAccessibilityDisclosed(): boolean { return this.nativeObject.isAccessibilityDisclosed; }
  set isAccessibilityDisclosed(value: boolean) { this.nativeObject.isAccessibilityDisclosed = value; }
  get accessibilityDisclosedByRow(): interop.Object { return this.nativeObject.accessibilityDisclosedByRow; }
  set accessibilityDisclosedByRow(value: interop.Object) { this.nativeObject.accessibilityDisclosedByRow = value; }
  get accessibilityDisclosedRows(): interop.Object { return this.nativeObject.accessibilityDisclosedRows; }
  set accessibilityDisclosedRows(value: interop.Object) { this.nativeObject.accessibilityDisclosedRows = value; }
  get accessibilityDisclosureLevel(): number { return this.nativeObject.accessibilityDisclosureLevel; }
  set accessibilityDisclosureLevel(value: number) { this.nativeObject.accessibilityDisclosureLevel = value; }
  get accessibilityMarkerUIElements(): NSArray { return this.nativeObject.accessibilityMarkerUIElements; }
  set accessibilityMarkerUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityMarkerUIElements = value; }
  get accessibilityMarkerValues(): interop.Object { return this.nativeObject.accessibilityMarkerValues; }
  set accessibilityMarkerValues(value: interop.Object) { this.nativeObject.accessibilityMarkerValues = value; }
  get accessibilityMarkerGroupUIElement(): interop.Object { return this.nativeObject.accessibilityMarkerGroupUIElement; }
  set accessibilityMarkerGroupUIElement(value: interop.Object) { this.nativeObject.accessibilityMarkerGroupUIElement = value; }
  get accessibilityUnits(): interop.Enum<typeof NSAccessibilityUnits> { return this.nativeObject.accessibilityUnits; }
  set accessibilityUnits(value: interop.Enum<typeof NSAccessibilityUnits>) { this.nativeObject.accessibilityUnits = value; }
  get accessibilityUnitDescription(): string { return this.nativeObject.accessibilityUnitDescription; }
  set accessibilityUnitDescription(value: string) { this.nativeObject.accessibilityUnitDescription = value; }
  get accessibilityRulerMarkerType(): interop.Enum<typeof NSAccessibilityRulerMarkerType> { return this.nativeObject.accessibilityRulerMarkerType; }
  set accessibilityRulerMarkerType(value: interop.Enum<typeof NSAccessibilityRulerMarkerType>) { this.nativeObject.accessibilityRulerMarkerType = value; }
  get accessibilityMarkerTypeDescription(): string { return this.nativeObject.accessibilityMarkerTypeDescription; }
  set accessibilityMarkerTypeDescription(value: string) { this.nativeObject.accessibilityMarkerTypeDescription = value; }
  get accessibilityHorizontalScrollBar(): interop.Object { return this.nativeObject.accessibilityHorizontalScrollBar; }
  set accessibilityHorizontalScrollBar(value: interop.Object) { this.nativeObject.accessibilityHorizontalScrollBar = value; }
  get accessibilityVerticalScrollBar(): interop.Object { return this.nativeObject.accessibilityVerticalScrollBar; }
  set accessibilityVerticalScrollBar(value: interop.Object) { this.nativeObject.accessibilityVerticalScrollBar = value; }
  get accessibilityAllowedValues(): NSArray { return this.nativeObject.accessibilityAllowedValues; }
  set accessibilityAllowedValues(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityAllowedValues = value; }
  get accessibilityLabelUIElements(): NSArray { return this.nativeObject.accessibilityLabelUIElements; }
  set accessibilityLabelUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityLabelUIElements = value; }
  get accessibilityLabelValue(): number { return this.nativeObject.accessibilityLabelValue; }
  set accessibilityLabelValue(value: number) { this.nativeObject.accessibilityLabelValue = value; }
  get accessibilitySplitters(): NSArray { return this.nativeObject.accessibilitySplitters; }
  set accessibilitySplitters(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySplitters = value; }
  get accessibilityDecrementButton(): interop.Object { return this.nativeObject.accessibilityDecrementButton; }
  set accessibilityDecrementButton(value: interop.Object) { this.nativeObject.accessibilityDecrementButton = value; }
  get accessibilityIncrementButton(): interop.Object { return this.nativeObject.accessibilityIncrementButton; }
  set accessibilityIncrementButton(value: interop.Object) { this.nativeObject.accessibilityIncrementButton = value; }
  get accessibilityTabs(): NSArray { return this.nativeObject.accessibilityTabs; }
  set accessibilityTabs(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityTabs = value; }
  get accessibilityHeader(): interop.Object { return this.nativeObject.accessibilityHeader; }
  set accessibilityHeader(value: interop.Object) { this.nativeObject.accessibilityHeader = value; }
  get accessibilityColumnCount(): number { return this.nativeObject.accessibilityColumnCount; }
  set accessibilityColumnCount(value: number) { this.nativeObject.accessibilityColumnCount = value; }
  get accessibilityRowCount(): number { return this.nativeObject.accessibilityRowCount; }
  set accessibilityRowCount(value: number) { this.nativeObject.accessibilityRowCount = value; }
  get accessibilityIndex(): number { return this.nativeObject.accessibilityIndex; }
  set accessibilityIndex(value: number) { this.nativeObject.accessibilityIndex = value; }
  get accessibilityColumns(): NSArray { return this.nativeObject.accessibilityColumns; }
  set accessibilityColumns(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityColumns = value; }
  get accessibilityRows(): NSArray { return this.nativeObject.accessibilityRows; }
  set accessibilityRows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityRows = value; }
  get accessibilityVisibleRows(): NSArray { return this.nativeObject.accessibilityVisibleRows; }
  set accessibilityVisibleRows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleRows = value; }
  get accessibilitySelectedRows(): NSArray { return this.nativeObject.accessibilitySelectedRows; }
  set accessibilitySelectedRows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedRows = value; }
  get accessibilityVisibleColumns(): NSArray { return this.nativeObject.accessibilityVisibleColumns; }
  set accessibilityVisibleColumns(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleColumns = value; }
  get accessibilitySelectedColumns(): NSArray { return this.nativeObject.accessibilitySelectedColumns; }
  set accessibilitySelectedColumns(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedColumns = value; }
  get accessibilitySortDirection(): interop.Enum<typeof NSAccessibilitySortDirection> { return this.nativeObject.accessibilitySortDirection; }
  set accessibilitySortDirection(value: interop.Enum<typeof NSAccessibilitySortDirection>) { this.nativeObject.accessibilitySortDirection = value; }
  get accessibilityRowHeaderUIElements(): NSArray { return this.nativeObject.accessibilityRowHeaderUIElements; }
  set accessibilityRowHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityRowHeaderUIElements = value; }
  get accessibilitySelectedCells(): NSArray { return this.nativeObject.accessibilitySelectedCells; }
  set accessibilitySelectedCells(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedCells = value; }
  get accessibilityVisibleCells(): NSArray { return this.nativeObject.accessibilityVisibleCells; }
  set accessibilityVisibleCells(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleCells = value; }
  get accessibilityColumnHeaderUIElements(): NSArray { return this.nativeObject.accessibilityColumnHeaderUIElements; }
  set accessibilityColumnHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityColumnHeaderUIElements = value; }
  get accessibilityRowIndexRange(): _NSRange { return this.nativeObject.accessibilityRowIndexRange; }
  set accessibilityRowIndexRange(value: _NSRange) { this.nativeObject.accessibilityRowIndexRange = value; }
  get accessibilityColumnIndexRange(): _NSRange { return this.nativeObject.accessibilityColumnIndexRange; }
  set accessibilityColumnIndexRange(value: _NSRange) { this.nativeObject.accessibilityColumnIndexRange = value; }
  get accessibilityInsertionPointLineNumber(): number { return this.nativeObject.accessibilityInsertionPointLineNumber; }
  set accessibilityInsertionPointLineNumber(value: number) { this.nativeObject.accessibilityInsertionPointLineNumber = value; }
  get accessibilitySharedCharacterRange(): _NSRange { return this.nativeObject.accessibilitySharedCharacterRange; }
  set accessibilitySharedCharacterRange(value: _NSRange) { this.nativeObject.accessibilitySharedCharacterRange = value; }
  get accessibilitySharedTextUIElements(): NSArray { return this.nativeObject.accessibilitySharedTextUIElements; }
  set accessibilitySharedTextUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySharedTextUIElements = value; }
  get accessibilityVisibleCharacterRange(): _NSRange { return this.nativeObject.accessibilityVisibleCharacterRange; }
  set accessibilityVisibleCharacterRange(value: _NSRange) { this.nativeObject.accessibilityVisibleCharacterRange = value; }
  get accessibilityNumberOfCharacters(): number { return this.nativeObject.accessibilityNumberOfCharacters; }
  set accessibilityNumberOfCharacters(value: number) { this.nativeObject.accessibilityNumberOfCharacters = value; }
  get accessibilitySelectedText(): string { return this.nativeObject.accessibilitySelectedText; }
  set accessibilitySelectedText(value: string) { this.nativeObject.accessibilitySelectedText = value; }
  get accessibilitySelectedTextRange(): _NSRange { return this.nativeObject.accessibilitySelectedTextRange; }
  set accessibilitySelectedTextRange(value: _NSRange) { this.nativeObject.accessibilitySelectedTextRange = value; }
  get accessibilitySelectedTextRanges(): NSArray { return this.nativeObject.accessibilitySelectedTextRanges; }
  set accessibilitySelectedTextRanges(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedTextRanges = value; }
  get accessibilityToolbarButton(): interop.Object { return this.nativeObject.accessibilityToolbarButton; }
  set accessibilityToolbarButton(value: interop.Object) { this.nativeObject.accessibilityToolbarButton = value; }
  get isAccessibilityModal(): boolean { return this.nativeObject.isAccessibilityModal; }
  set isAccessibilityModal(value: boolean) { this.nativeObject.isAccessibilityModal = value; }
  get accessibilityProxy(): interop.Object { return this.nativeObject.accessibilityProxy; }
  set accessibilityProxy(value: interop.Object) { this.nativeObject.accessibilityProxy = value; }
  get isAccessibilityMain(): boolean { return this.nativeObject.isAccessibilityMain; }
  set isAccessibilityMain(value: boolean) { this.nativeObject.isAccessibilityMain = value; }
  get accessibilityFullScreenButton(): interop.Object { return this.nativeObject.accessibilityFullScreenButton; }
  set accessibilityFullScreenButton(value: interop.Object) { this.nativeObject.accessibilityFullScreenButton = value; }
  get accessibilityGrowArea(): interop.Object { return this.nativeObject.accessibilityGrowArea; }
  set accessibilityGrowArea(value: interop.Object) { this.nativeObject.accessibilityGrowArea = value; }
  get accessibilityDocument(): string { return this.nativeObject.accessibilityDocument; }
  set accessibilityDocument(value: string) { this.nativeObject.accessibilityDocument = value; }
  get accessibilityDefaultButton(): interop.Object { return this.nativeObject.accessibilityDefaultButton; }
  set accessibilityDefaultButton(value: interop.Object) { this.nativeObject.accessibilityDefaultButton = value; }
  get accessibilityCloseButton(): interop.Object { return this.nativeObject.accessibilityCloseButton; }
  set accessibilityCloseButton(value: interop.Object) { this.nativeObject.accessibilityCloseButton = value; }
  get accessibilityZoomButton(): interop.Object { return this.nativeObject.accessibilityZoomButton; }
  set accessibilityZoomButton(value: interop.Object) { this.nativeObject.accessibilityZoomButton = value; }
  get accessibilityMinimizeButton(): interop.Object { return this.nativeObject.accessibilityMinimizeButton; }
  set accessibilityMinimizeButton(value: interop.Object) { this.nativeObject.accessibilityMinimizeButton = value; }
  get isAccessibilityMinimized(): boolean { return this.nativeObject.isAccessibilityMinimized; }
  set isAccessibilityMinimized(value: boolean) { this.nativeObject.isAccessibilityMinimized = value; }
  get accessibilityCustomActions(): NSArray { return this.nativeObject.accessibilityCustomActions; }
  set accessibilityCustomActions(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityCustomActions = value; }

  set drawerShouldOpen(value: (sender: NSDrawer) => boolean) {
    this.delegate.drawerShouldOpen = value;
  }
  set drawerShouldClose(value: (sender: NSDrawer) => boolean) {
    this.delegate.drawerShouldClose = value;
  }
  set drawerWillResizeContentsToSize(value: (sender: NSDrawer, contentSize: CGSize) => CGSize) {
    this.delegate.drawerWillResizeContentsToSize = value;
  }
  set drawerWillOpen(value: (notification: NSNotification) => void) {
    this.delegate.drawerWillOpen = value;
  }
  set drawerDidOpen(value: (notification: NSNotification) => void) {
    this.delegate.drawerDidOpen = value;
  }
  set drawerWillClose(value: (notification: NSNotification) => void) {
    this.delegate.drawerWillClose = value;
  }
  set drawerDidClose(value: (notification: NSNotification) => void) {
    this.delegate.drawerDidClose = value;
  }
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
  get usesDefaultHyphenation(): boolean { return this.nativeObject.usesDefaultHyphenation; }
  set usesDefaultHyphenation(value: boolean) { this.nativeObject.usesDefaultHyphenation = value; }
  get usesFontLeading(): boolean { return this.nativeObject.usesFontLeading; }
  set usesFontLeading(value: boolean) { this.nativeObject.usesFontLeading = value; }
  get allowsNonContiguousLayout(): boolean { return this.nativeObject.allowsNonContiguousLayout; }
  set allowsNonContiguousLayout(value: boolean) { this.nativeObject.allowsNonContiguousLayout = value; }
  get hasNonContiguousLayout(): boolean { return this.nativeObject.hasNonContiguousLayout; }
  get limitsLayoutForSuspiciousContents(): boolean { return this.nativeObject.limitsLayoutForSuspiciousContents; }
  set limitsLayoutForSuspiciousContents(value: boolean) { this.nativeObject.limitsLayoutForSuspiciousContents = value; }
  get backgroundLayoutEnabled(): boolean { return this.nativeObject.backgroundLayoutEnabled; }
  set backgroundLayoutEnabled(value: boolean) { this.nativeObject.backgroundLayoutEnabled = value; }
  get defaultAttachmentScaling(): interop.Enum<typeof NSImageScaling> { return this.nativeObject.defaultAttachmentScaling; }
  set defaultAttachmentScaling(value: interop.Enum<typeof NSImageScaling>) { this.nativeObject.defaultAttachmentScaling = value; }
  get typesetter(): NSTypesetter { return this.nativeObject.typesetter; }
  set typesetter(value: NSTypesetter) { this.nativeObject.typesetter = value; }
  get typesetterBehavior(): interop.Enum<typeof NSTypesetterBehavior> { return this.nativeObject.typesetterBehavior; }
  set typesetterBehavior(value: interop.Enum<typeof NSTypesetterBehavior>) { this.nativeObject.typesetterBehavior = value; }
  get numberOfGlyphs(): number { return this.nativeObject.numberOfGlyphs; }
  get extraLineFragmentRect(): CGRect { return this.nativeObject.extraLineFragmentRect; }
  get extraLineFragmentUsedRect(): CGRect { return this.nativeObject.extraLineFragmentUsedRect; }
  get extraLineFragmentTextContainer(): NSTextContainer { return this.nativeObject.extraLineFragmentTextContainer; }
  get firstTextView(): NSTextView { return this.nativeObject.firstTextView; }
  get textViewForBeginningOfSelection(): NSTextView { return this.nativeObject.textViewForBeginningOfSelection; }
  get usesScreenFonts(): boolean { return this.nativeObject.usesScreenFonts; }
  set usesScreenFonts(value: boolean) { this.nativeObject.usesScreenFonts = value; }
  get hyphenationFactor(): number { return this.nativeObject.hyphenationFactor; }
  set hyphenationFactor(value: number) { this.nativeObject.hyphenationFactor = value; }
  get glyphGenerator(): NSGlyphGenerator { return this.nativeObject.glyphGenerator; }
  set glyphGenerator(value: NSGlyphGenerator) { this.nativeObject.glyphGenerator = value; }

  set layoutManagerShouldGenerateGlyphsPropertiesCharacterIndexesFontForGlyphRange(value: (layoutManager: NSLayoutManager, glyphs: interop.PointerConvertible, props: interop.PointerConvertible, charIndexes: interop.PointerConvertible, aFont: NSFont, glyphRange: _NSRange) => number) {
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
  set layoutManagerShouldUseTemporaryAttributesForDrawingToScreenAtCharacterIndexEffectiveRange(value: (layoutManager: NSLayoutManager, attrs: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, toScreen: boolean, charIndex: number, effectiveCharRange: interop.PointerConvertible) => NSDictionary) {
    this.delegate.layoutManagerShouldUseTemporaryAttributesForDrawingToScreenAtCharacterIndexEffectiveRange = value;
  }
}

export class HTMLNSSharingServiceElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSSharingService.new();
  get delegate(): NSSharingServiceDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSSharingServiceDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSSharingServiceDelegateImpl;
  }

  get title(): string { return this.nativeObject.title; }
  get image(): NSImage { return this.nativeObject.image; }
  get alternateImage(): NSImage { return this.nativeObject.alternateImage; }
  get menuItemTitle(): string { return this.nativeObject.menuItemTitle; }
  set menuItemTitle(value: string) { this.nativeObject.menuItemTitle = value; }
  get recipients(): NSArray { return this.nativeObject.recipients; }
  set recipients(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.recipients = value; }
  get subject(): string { return this.nativeObject.subject; }
  set subject(value: string) { this.nativeObject.subject = value; }
  get messageBody(): string { return this.nativeObject.messageBody; }
  get permanentLink(): NSURL { return this.nativeObject.permanentLink; }
  get accountName(): string { return this.nativeObject.accountName; }
  get attachmentFileURLs(): NSArray { return this.nativeObject.attachmentFileURLs; }

  set sharingServiceWillShareItems(value: (sharingService: NSSharingService, items: NSArray<interop.Object> | Array<interop.Object>) => void) {
    this.delegate.sharingServiceWillShareItems = value;
  }
  set sharingServiceDidFailToShareItemsError(value: (sharingService: NSSharingService, items: NSArray<interop.Object> | Array<interop.Object>, error: NSError) => void) {
    this.delegate.sharingServiceDidFailToShareItemsError = value;
  }
  set sharingServiceDidShareItems(value: (sharingService: NSSharingService, items: NSArray<interop.Object> | Array<interop.Object>) => void) {
    this.delegate.sharingServiceDidShareItems = value;
  }
  set sharingServiceSourceFrameOnScreenForShareItem(value: (sharingService: NSSharingService, item: interop.Object) => CGRect) {
    this.delegate.sharingServiceSourceFrameOnScreenForShareItem = value;
  }
  set sharingServiceTransitionImageForShareItemContentRect(value: (sharingService: NSSharingService, item: interop.Object, contentRect: interop.PointerConvertible) => NSImage) {
    this.delegate.sharingServiceTransitionImageForShareItemContentRect = value;
  }
  set sharingServiceSourceWindowForShareItemsSharingContentScope(value: (sharingService: NSSharingService, items: NSArray<interop.Object> | Array<interop.Object>, sharingContentScope: interop.PointerConvertible) => NSWindow) {
    this.delegate.sharingServiceSourceWindowForShareItemsSharingContentScope = value;
  }
  set anchoringViewForSharingServiceShowRelativeToRectPreferredEdge(value: (sharingService: NSSharingService, positioningRect: interop.PointerConvertible, preferredEdge: interop.PointerConvertible) => NSView) {
    this.delegate.anchoringViewForSharingServiceShowRelativeToRectPreferredEdge = value;
  }
}

export class HTMLNSTreeControllerElement extends HTMLNSObjectControllerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTreeController.new();

  get arrangedObjects(): NSTreeNode { return this.nativeObject.arrangedObjects; }
  get childrenKeyPath(): string { return this.nativeObject.childrenKeyPath; }
  set childrenKeyPath(value: string) { this.nativeObject.childrenKeyPath = value; }
  get countKeyPath(): string { return this.nativeObject.countKeyPath; }
  set countKeyPath(value: string) { this.nativeObject.countKeyPath = value; }
  get leafKeyPath(): string { return this.nativeObject.leafKeyPath; }
  set leafKeyPath(value: string) { this.nativeObject.leafKeyPath = value; }
  get sortDescriptors(): NSArray { return this.nativeObject.sortDescriptors; }
  set sortDescriptors(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.sortDescriptors = value; }
  get content(): interop.Object { return this.nativeObject.content; }
  set content(value: interop.Object) { this.nativeObject.content = value; }
  get canInsert(): boolean { return this.nativeObject.canInsert; }
  get canInsertChild(): boolean { return this.nativeObject.canInsertChild; }
  get canAddChild(): boolean { return this.nativeObject.canAddChild; }
  get avoidsEmptySelection(): boolean { return this.nativeObject.avoidsEmptySelection; }
  set avoidsEmptySelection(value: boolean) { this.nativeObject.avoidsEmptySelection = value; }
  get preservesSelection(): boolean { return this.nativeObject.preservesSelection; }
  set preservesSelection(value: boolean) { this.nativeObject.preservesSelection = value; }
  get selectsInsertedObjects(): boolean { return this.nativeObject.selectsInsertedObjects; }
  set selectsInsertedObjects(value: boolean) { this.nativeObject.selectsInsertedObjects = value; }
  get alwaysUsesMultipleValuesMarker(): boolean { return this.nativeObject.alwaysUsesMultipleValuesMarker; }
  set alwaysUsesMultipleValuesMarker(value: boolean) { this.nativeObject.alwaysUsesMultipleValuesMarker = value; }
  get selectedObjects(): NSArray { return this.nativeObject.selectedObjects; }
  get selectionIndexPaths(): NSArray { return this.nativeObject.selectionIndexPaths; }
  get selectionIndexPath(): NSIndexPath { return this.nativeObject.selectionIndexPath; }
  get selectedNodes(): NSArray { return this.nativeObject.selectedNodes; }
}

export class HTMLNSTypesetterElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTypesetter.new();

  get usesFontLeading(): boolean { return this.nativeObject.usesFontLeading; }
  set usesFontLeading(value: boolean) { this.nativeObject.usesFontLeading = value; }
  get typesetterBehavior(): interop.Enum<typeof NSTypesetterBehavior> { return this.nativeObject.typesetterBehavior; }
  set typesetterBehavior(value: interop.Enum<typeof NSTypesetterBehavior>) { this.nativeObject.typesetterBehavior = value; }
  get hyphenationFactor(): number { return this.nativeObject.hyphenationFactor; }
  set hyphenationFactor(value: number) { this.nativeObject.hyphenationFactor = value; }
  get lineFragmentPadding(): number { return this.nativeObject.lineFragmentPadding; }
  set lineFragmentPadding(value: number) { this.nativeObject.lineFragmentPadding = value; }
  get bidiProcessingEnabled(): boolean { return this.nativeObject.bidiProcessingEnabled; }
  set bidiProcessingEnabled(value: boolean) { this.nativeObject.bidiProcessingEnabled = value; }
  get attributedString(): NSAttributedString { return this.nativeObject.attributedString; }
  set attributedString(value: NSAttributedString) { this.nativeObject.attributedString = value; }
  get paragraphGlyphRange(): _NSRange { return this.nativeObject.paragraphGlyphRange; }
  get paragraphSeparatorGlyphRange(): _NSRange { return this.nativeObject.paragraphSeparatorGlyphRange; }
  get paragraphCharacterRange(): _NSRange { return this.nativeObject.paragraphCharacterRange; }
  get paragraphSeparatorCharacterRange(): _NSRange { return this.nativeObject.paragraphSeparatorCharacterRange; }
  get attributesForExtraLineFragment(): NSDictionary { return this.nativeObject.attributesForExtraLineFragment; }
  get layoutManager(): NSLayoutManager { return this.nativeObject.layoutManager; }
  get textContainers(): NSArray { return this.nativeObject.textContainers; }
  get currentTextContainer(): NSTextContainer { return this.nativeObject.currentTextContainer; }
  get currentParagraphStyle(): NSParagraphStyle { return this.nativeObject.currentParagraphStyle; }
}

export class HTMLNSScrubberSelectionStyleElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSScrubberSelectionStyle.new();

}

export class HTMLNSPreviewRepresentingActivityItemElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSPreviewRepresentingActivityItem.new();

  get item(): interop.Object { return this.nativeObject.item; }
  get title(): string { return this.nativeObject.title; }
  get imageProvider(): NSItemProvider { return this.nativeObject.imageProvider; }
  get iconProvider(): NSItemProvider { return this.nativeObject.iconProvider; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLNSDraggingSessionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSDraggingSession.new();

  get draggingFormation(): interop.Enum<typeof NSDraggingFormation> { return this.nativeObject.draggingFormation; }
  set draggingFormation(value: interop.Enum<typeof NSDraggingFormation>) { this.nativeObject.draggingFormation = value; }
  get animatesToStartingPositionsOnCancelOrFail(): boolean { return this.nativeObject.animatesToStartingPositionsOnCancelOrFail; }
  set animatesToStartingPositionsOnCancelOrFail(value: boolean) { this.nativeObject.animatesToStartingPositionsOnCancelOrFail = value; }
  get draggingLeaderIndex(): number { return this.nativeObject.draggingLeaderIndex; }
  set draggingLeaderIndex(value: number) { this.nativeObject.draggingLeaderIndex = value; }
  get draggingPasteboard(): NSPasteboard { return this.nativeObject.draggingPasteboard; }
  get draggingSequenceNumber(): number { return this.nativeObject.draggingSequenceNumber; }
  get draggingLocation(): CGPoint { return this.nativeObject.draggingLocation; }
}

export class HTMLNSCollectionViewDiffableDataSourceElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSCollectionViewDiffableDataSource.new();

  get supplementaryViewProvider(): (p1: NSCollectionView, p2: string, p3: NSIndexPath) => NSView { return this.nativeObject.supplementaryViewProvider; }
  set supplementaryViewProvider(value: (p1: NSCollectionView, p2: string, p3: NSIndexPath) => NSView) { this.nativeObject.supplementaryViewProvider = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
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

export class HTMLNSPrinterElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSPrinter.new();

  get name(): string { return this.nativeObject.name; }
  get type(): string { return this.nativeObject.type; }
  get languageLevel(): number { return this.nativeObject.languageLevel; }
  get deviceDescription(): NSDictionary { return this.nativeObject.deviceDescription; }
}

export class HTMLNSAppearanceElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSAppearance.new();

  get name(): string { return this.nativeObject.name; }
  get allowsVibrancy(): boolean { return this.nativeObject.allowsVibrancy; }
}

export class HTMLNSTextInputContextElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTextInputContext.new();

  get client(): NSTextInputClient { return this.nativeObject.client; }
  get acceptsGlyphInfo(): boolean { return this.nativeObject.acceptsGlyphInfo; }
  set acceptsGlyphInfo(value: boolean) { this.nativeObject.acceptsGlyphInfo = value; }
  get allowedInputSourceLocales(): NSArray { return this.nativeObject.allowedInputSourceLocales; }
  set allowedInputSourceLocales(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.allowedInputSourceLocales = value; }
  get keyboardInputSources(): NSArray { return this.nativeObject.keyboardInputSources; }
  get selectedKeyboardInputSource(): string { return this.nativeObject.selectedKeyboardInputSource; }
  set selectedKeyboardInputSource(value: string) { this.nativeObject.selectedKeyboardInputSource = value; }
}

export class HTMLNSCustomImageRepElement extends HTMLNSImageRepElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSCustomImageRep.new();

  get drawingHandler(): (p1: CGRect) => boolean { return this.nativeObject.drawingHandler; }
  get drawSelector(): string { return this.nativeObject.drawSelector; }
  get delegate(): interop.Object { return this.nativeObject.delegate; }
}

export class HTMLNSTextCheckingControllerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTextCheckingController.new();

  get client(): NSTextCheckingClient { return this.nativeObject.client; }
  get spellCheckerDocumentTag(): number { return this.nativeObject.spellCheckerDocumentTag; }
  set spellCheckerDocumentTag(value: number) { this.nativeObject.spellCheckerDocumentTag = value; }
}

export class HTMLNSColorSpaceElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSColorSpace.new();

  get ICCProfileData(): NSData { return this.nativeObject.ICCProfileData; }
  get colorSyncProfile(): interop.Pointer { return this.nativeObject.colorSyncProfile; }
  get CGColorSpace(): interop.Pointer { return this.nativeObject.CGColorSpace; }
  get numberOfColorComponents(): number { return this.nativeObject.numberOfColorComponents; }
  get colorSpaceModel(): interop.Enum<typeof NSColorSpaceModel> { return this.nativeObject.colorSpaceModel; }
  get localizedName(): string { return this.nativeObject.localizedName; }
}

export class HTMLNSAnimationContextElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSAnimationContext.new();

  get duration(): number { return this.nativeObject.duration; }
  set duration(value: number) { this.nativeObject.duration = value; }
  get timingFunction(): CAMediaTimingFunction { return this.nativeObject.timingFunction; }
  set timingFunction(value: CAMediaTimingFunction) { this.nativeObject.timingFunction = value; }
  get completionHandler(): () => void { return this.nativeObject.completionHandler; }
  set completionHandler(value: () => void) { this.nativeObject.completionHandler = value; }
  get allowsImplicitAnimation(): boolean { return this.nativeObject.allowsImplicitAnimation; }
  set allowsImplicitAnimation(value: boolean) { this.nativeObject.allowsImplicitAnimation = value; }
}

export class HTMLNSStringDrawingContextElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSStringDrawingContext.new();

  get minimumScaleFactor(): number { return this.nativeObject.minimumScaleFactor; }
  set minimumScaleFactor(value: number) { this.nativeObject.minimumScaleFactor = value; }
  get actualScaleFactor(): number { return this.nativeObject.actualScaleFactor; }
  get totalBounds(): CGRect { return this.nativeObject.totalBounds; }
}

export class HTMLNSBezierPathElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSBezierPath.new();

  get CGPath(): interop.Pointer { return this.nativeObject.CGPath; }
  set CGPath(value: interop.PointerConvertible) { this.nativeObject.CGPath = value; }
  get lineWidth(): number { return this.nativeObject.lineWidth; }
  set lineWidth(value: number) { this.nativeObject.lineWidth = value; }
  get lineCapStyle(): interop.Enum<typeof NSLineCapStyle> { return this.nativeObject.lineCapStyle; }
  set lineCapStyle(value: interop.Enum<typeof NSLineCapStyle>) { this.nativeObject.lineCapStyle = value; }
  get lineJoinStyle(): interop.Enum<typeof NSLineJoinStyle> { return this.nativeObject.lineJoinStyle; }
  set lineJoinStyle(value: interop.Enum<typeof NSLineJoinStyle>) { this.nativeObject.lineJoinStyle = value; }
  get windingRule(): interop.Enum<typeof NSWindingRule> { return this.nativeObject.windingRule; }
  set windingRule(value: interop.Enum<typeof NSWindingRule>) { this.nativeObject.windingRule = value; }
  get miterLimit(): number { return this.nativeObject.miterLimit; }
  set miterLimit(value: number) { this.nativeObject.miterLimit = value; }
  get flatness(): number { return this.nativeObject.flatness; }
  set flatness(value: number) { this.nativeObject.flatness = value; }
  get bezierPathByFlatteningPath(): NSBezierPath { return this.nativeObject.bezierPathByFlatteningPath; }
  get bezierPathByReversingPath(): NSBezierPath { return this.nativeObject.bezierPathByReversingPath; }
  get isEmpty(): boolean { return this.nativeObject.isEmpty; }
  get currentPoint(): CGPoint { return this.nativeObject.currentPoint; }
  get controlPointBounds(): CGRect { return this.nativeObject.controlPointBounds; }
  get bounds(): CGRect { return this.nativeObject.bounds; }
  get elementCount(): number { return this.nativeObject.elementCount; }
}

export class HTMLNSAccessibilityCustomActionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSAccessibilityCustomAction.new();

  get name(): string { return this.nativeObject.name; }
  set name(value: string) { this.nativeObject.name = value; }
  get handler(): () => boolean { return this.nativeObject.handler; }
  set handler(value: () => boolean) { this.nativeObject.handler = value; }
  get target(): NSObject { return this.nativeObject.target; }
  set target(value: NSObject) { this.nativeObject.target = value; }
  get selector(): string { return this.nativeObject.selector; }
  set selector(value: string) { this.nativeObject.selector = value; }
}

export class HTMLNSViewElement extends HTMLNSResponderElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSView.new();

  get window(): NSWindow { return this.nativeObject.window; }
  get superview(): NSView { return this.nativeObject.superview; }
  get subviews(): NSArray { return this.nativeObject.subviews; }
  set subviews(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.subviews = value; }
  get opaqueAncestor(): NSView { return this.nativeObject.opaqueAncestor; }
  get isHidden(): boolean { return this.nativeObject.isHidden; }
  set isHidden(value: boolean) { this.nativeObject.isHidden = value; }
  get isHiddenOrHasHiddenAncestor(): boolean { return this.nativeObject.isHiddenOrHasHiddenAncestor; }
  get wantsDefaultClipping(): boolean { return this.nativeObject.wantsDefaultClipping; }
  get postsFrameChangedNotifications(): boolean { return this.nativeObject.postsFrameChangedNotifications; }
  set postsFrameChangedNotifications(value: boolean) { this.nativeObject.postsFrameChangedNotifications = value; }
  get autoresizesSubviews(): boolean { return this.nativeObject.autoresizesSubviews; }
  set autoresizesSubviews(value: boolean) { this.nativeObject.autoresizesSubviews = value; }
  get autoresizingMask(): interop.Enum<typeof NSAutoresizingMaskOptions> { return this.nativeObject.autoresizingMask; }
  set autoresizingMask(value: interop.Enum<typeof NSAutoresizingMaskOptions>) { this.nativeObject.autoresizingMask = value; }
  get frame(): CGRect { return this.nativeObject.frame; }
  set frame(value: CGRect) { this.nativeObject.frame = value; }
  get frameRotation(): number { return this.nativeObject.frameRotation; }
  set frameRotation(value: number) { this.nativeObject.frameRotation = value; }
  get frameCenterRotation(): number { return this.nativeObject.frameCenterRotation; }
  set frameCenterRotation(value: number) { this.nativeObject.frameCenterRotation = value; }
  get boundsRotation(): number { return this.nativeObject.boundsRotation; }
  set boundsRotation(value: number) { this.nativeObject.boundsRotation = value; }
  get bounds(): CGRect { return this.nativeObject.bounds; }
  set bounds(value: CGRect) { this.nativeObject.bounds = value; }
  get isFlipped(): boolean { return this.nativeObject.isFlipped; }
  get isRotatedFromBase(): boolean { return this.nativeObject.isRotatedFromBase; }
  get isRotatedOrScaledFromBase(): boolean { return this.nativeObject.isRotatedOrScaledFromBase; }
  get isOpaque(): boolean { return this.nativeObject.isOpaque; }
  get canDrawConcurrently(): boolean { return this.nativeObject.canDrawConcurrently; }
  set canDrawConcurrently(value: boolean) { this.nativeObject.canDrawConcurrently = value; }
  get canDraw(): boolean { return this.nativeObject.canDraw; }
  get needsDisplay(): boolean { return this.nativeObject.needsDisplay; }
  set needsDisplay(value: boolean) { this.nativeObject.needsDisplay = value; }
  get visibleRect(): CGRect { return this.nativeObject.visibleRect; }
  get tag(): number { return this.nativeObject.tag; }
  get needsPanelToBecomeKey(): boolean { return this.nativeObject.needsPanelToBecomeKey; }
  get mouseDownCanMoveWindow(): boolean { return this.nativeObject.mouseDownCanMoveWindow; }
  get acceptsTouchEvents(): boolean { return this.nativeObject.acceptsTouchEvents; }
  set acceptsTouchEvents(value: boolean) { this.nativeObject.acceptsTouchEvents = value; }
  get wantsRestingTouches(): boolean { return this.nativeObject.wantsRestingTouches; }
  set wantsRestingTouches(value: boolean) { this.nativeObject.wantsRestingTouches = value; }
  get layerContentsRedrawPolicy(): interop.Enum<typeof NSViewLayerContentsRedrawPolicy> { return this.nativeObject.layerContentsRedrawPolicy; }
  set layerContentsRedrawPolicy(value: interop.Enum<typeof NSViewLayerContentsRedrawPolicy>) { this.nativeObject.layerContentsRedrawPolicy = value; }
  get layerContentsPlacement(): interop.Enum<typeof NSViewLayerContentsPlacement> { return this.nativeObject.layerContentsPlacement; }
  set layerContentsPlacement(value: interop.Enum<typeof NSViewLayerContentsPlacement>) { this.nativeObject.layerContentsPlacement = value; }
  get wantsLayer(): boolean { return this.nativeObject.wantsLayer; }
  set wantsLayer(value: boolean) { this.nativeObject.wantsLayer = value; }
  get layer(): CALayer { return this.nativeObject.layer; }
  set layer(value: CALayer) { this.nativeObject.layer = value; }
  get wantsUpdateLayer(): boolean { return this.nativeObject.wantsUpdateLayer; }
  get canDrawSubviewsIntoLayer(): boolean { return this.nativeObject.canDrawSubviewsIntoLayer; }
  set canDrawSubviewsIntoLayer(value: boolean) { this.nativeObject.canDrawSubviewsIntoLayer = value; }
  get needsLayout(): boolean { return this.nativeObject.needsLayout; }
  set needsLayout(value: boolean) { this.nativeObject.needsLayout = value; }
  get alphaValue(): number { return this.nativeObject.alphaValue; }
  set alphaValue(value: number) { this.nativeObject.alphaValue = value; }
  get layerUsesCoreImageFilters(): boolean { return this.nativeObject.layerUsesCoreImageFilters; }
  set layerUsesCoreImageFilters(value: boolean) { this.nativeObject.layerUsesCoreImageFilters = value; }
  get backgroundFilters(): NSArray { return this.nativeObject.backgroundFilters; }
  set backgroundFilters(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.backgroundFilters = value; }
  get compositingFilter(): CIFilter { return this.nativeObject.compositingFilter; }
  set compositingFilter(value: CIFilter) { this.nativeObject.compositingFilter = value; }
  get contentFilters(): NSArray { return this.nativeObject.contentFilters; }
  set contentFilters(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.contentFilters = value; }
  get shadow(): NSShadow { return this.nativeObject.shadow; }
  set shadow(value: NSShadow) { this.nativeObject.shadow = value; }
  get clipsToBounds(): boolean { return this.nativeObject.clipsToBounds; }
  set clipsToBounds(value: boolean) { this.nativeObject.clipsToBounds = value; }
  get postsBoundsChangedNotifications(): boolean { return this.nativeObject.postsBoundsChangedNotifications; }
  set postsBoundsChangedNotifications(value: boolean) { this.nativeObject.postsBoundsChangedNotifications = value; }
  get enclosingScrollView(): NSScrollView { return this.nativeObject.enclosingScrollView; }
  get toolTip(): string { return this.nativeObject.toolTip; }
  set toolTip(value: string) { this.nativeObject.toolTip = value; }
  get inLiveResize(): boolean { return this.nativeObject.inLiveResize; }
  get preservesContentDuringLiveResize(): boolean { return this.nativeObject.preservesContentDuringLiveResize; }
  get rectPreservedDuringLiveResize(): CGRect { return this.nativeObject.rectPreservedDuringLiveResize; }
  get inputContext(): NSTextInputContext { return this.nativeObject.inputContext; }
  get userInterfaceLayoutDirection(): interop.Enum<typeof NSUserInterfaceLayoutDirection> { return this.nativeObject.userInterfaceLayoutDirection; }
  set userInterfaceLayoutDirection(value: interop.Enum<typeof NSUserInterfaceLayoutDirection>) { this.nativeObject.userInterfaceLayoutDirection = value; }
  get preparedContentRect(): CGRect { return this.nativeObject.preparedContentRect; }
  set preparedContentRect(value: CGRect) { this.nativeObject.preparedContentRect = value; }
  get allowsVibrancy(): boolean { return this.nativeObject.allowsVibrancy; }
  get nextKeyView(): NSView { return this.nativeObject.nextKeyView; }
  set nextKeyView(value: NSView) { this.nativeObject.nextKeyView = value; }
  get previousKeyView(): NSView { return this.nativeObject.previousKeyView; }
  get nextValidKeyView(): NSView { return this.nativeObject.nextValidKeyView; }
  get previousValidKeyView(): NSView { return this.nativeObject.previousValidKeyView; }
  get canBecomeKeyView(): boolean { return this.nativeObject.canBecomeKeyView; }
  get focusRingType(): interop.Enum<typeof NSFocusRingType> { return this.nativeObject.focusRingType; }
  set focusRingType(value: interop.Enum<typeof NSFocusRingType>) { this.nativeObject.focusRingType = value; }
  get focusRingMaskBounds(): CGRect { return this.nativeObject.focusRingMaskBounds; }
  get heightAdjustLimit(): number { return this.nativeObject.heightAdjustLimit; }
  get widthAdjustLimit(): number { return this.nativeObject.widthAdjustLimit; }
  get pageHeader(): NSAttributedString { return this.nativeObject.pageHeader; }
  get pageFooter(): NSAttributedString { return this.nativeObject.pageFooter; }
  get printJobTitle(): string { return this.nativeObject.printJobTitle; }
  get registeredDraggedTypes(): NSArray { return this.nativeObject.registeredDraggedTypes; }
  get isInFullScreenMode(): boolean { return this.nativeObject.isInFullScreenMode; }
  get isDrawingFindIndicator(): boolean { return this.nativeObject.isDrawingFindIndicator; }
  get gestureRecognizers(): NSArray { return this.nativeObject.gestureRecognizers; }
  set gestureRecognizers(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.gestureRecognizers = value; }
  get allowedTouchTypes(): interop.Enum<typeof NSTouchTypeMask> { return this.nativeObject.allowedTouchTypes; }
  set allowedTouchTypes(value: interop.Enum<typeof NSTouchTypeMask>) { this.nativeObject.allowedTouchTypes = value; }
  get safeAreaInsets(): NSEdgeInsets { return this.nativeObject.safeAreaInsets; }
  get additionalSafeAreaInsets(): NSEdgeInsets { return this.nativeObject.additionalSafeAreaInsets; }
  set additionalSafeAreaInsets(value: NSEdgeInsets) { this.nativeObject.additionalSafeAreaInsets = value; }
  get safeAreaLayoutGuide(): NSLayoutGuide { return this.nativeObject.safeAreaLayoutGuide; }
  get safeAreaRect(): CGRect { return this.nativeObject.safeAreaRect; }
  get layoutMarginsGuide(): NSLayoutGuide { return this.nativeObject.layoutMarginsGuide; }
  get trackingAreas(): NSArray { return this.nativeObject.trackingAreas; }
  get enclosingMenuItem(): NSMenuItem { return this.nativeObject.enclosingMenuItem; }
  get candidateListTouchBarItem(): NSCandidateListTouchBarItem { return this.nativeObject.candidateListTouchBarItem; }
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
  get constraints(): NSArray { return this.nativeObject.constraints; }
  get needsUpdateConstraints(): boolean { return this.nativeObject.needsUpdateConstraints; }
  set needsUpdateConstraints(value: boolean) { this.nativeObject.needsUpdateConstraints = value; }
  get translatesAutoresizingMaskIntoConstraints(): boolean { return this.nativeObject.translatesAutoresizingMaskIntoConstraints; }
  set translatesAutoresizingMaskIntoConstraints(value: boolean) { this.nativeObject.translatesAutoresizingMaskIntoConstraints = value; }
  get alignmentRectInsets(): NSEdgeInsets { return this.nativeObject.alignmentRectInsets; }
  get firstBaselineOffsetFromTop(): number { return this.nativeObject.firstBaselineOffsetFromTop; }
  get lastBaselineOffsetFromBottom(): number { return this.nativeObject.lastBaselineOffsetFromBottom; }
  get baselineOffsetFromBottom(): number { return this.nativeObject.baselineOffsetFromBottom; }
  get intrinsicContentSize(): CGSize { return this.nativeObject.intrinsicContentSize; }
  get isHorizontalContentSizeConstraintActive(): boolean { return this.nativeObject.isHorizontalContentSizeConstraintActive; }
  set isHorizontalContentSizeConstraintActive(value: boolean) { this.nativeObject.isHorizontalContentSizeConstraintActive = value; }
  get isVerticalContentSizeConstraintActive(): boolean { return this.nativeObject.isVerticalContentSizeConstraintActive; }
  set isVerticalContentSizeConstraintActive(value: boolean) { this.nativeObject.isVerticalContentSizeConstraintActive = value; }
  get fittingSize(): CGSize { return this.nativeObject.fittingSize; }
  get hasAmbiguousLayout(): boolean { return this.nativeObject.hasAmbiguousLayout; }
  get layoutGuides(): NSArray { return this.nativeObject.layoutGuides; }
  get wantsBestResolutionOpenGLSurface(): boolean { return this.nativeObject.wantsBestResolutionOpenGLSurface; }
  set wantsBestResolutionOpenGLSurface(value: boolean) { this.nativeObject.wantsBestResolutionOpenGLSurface = value; }
  get wantsExtendedDynamicRangeOpenGLSurface(): boolean { return this.nativeObject.wantsExtendedDynamicRangeOpenGLSurface; }
  set wantsExtendedDynamicRangeOpenGLSurface(value: boolean) { this.nativeObject.wantsExtendedDynamicRangeOpenGLSurface = value; }
  get pressureConfiguration(): NSPressureConfiguration { return this.nativeObject.pressureConfiguration; }
  set pressureConfiguration(value: NSPressureConfiguration) { this.nativeObject.pressureConfiguration = value; }
  get animations(): NSDictionary { return this.nativeObject.animations; }
  set animations(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) { this.nativeObject.animations = value; }
  get identifier(): string { return this.nativeObject.identifier; }
  set identifier(value: string) { this.nativeObject.identifier = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
  get appearance(): NSAppearance { return this.nativeObject.appearance; }
  set appearance(value: NSAppearance) { this.nativeObject.appearance = value; }
  get effectiveAppearance(): NSAppearance { return this.nativeObject.effectiveAppearance; }
  get isAccessibilityElement(): boolean { return this.nativeObject.isAccessibilityElement; }
  set isAccessibilityElement(value: boolean) { this.nativeObject.isAccessibilityElement = value; }
  get accessibilityFrame(): CGRect { return this.nativeObject.accessibilityFrame; }
  set accessibilityFrame(value: CGRect) { this.nativeObject.accessibilityFrame = value; }
  get isAccessibilityFocused(): boolean { return this.nativeObject.isAccessibilityFocused; }
  set isAccessibilityFocused(value: boolean) { this.nativeObject.isAccessibilityFocused = value; }
  get accessibilityActivationPoint(): CGPoint { return this.nativeObject.accessibilityActivationPoint; }
  set accessibilityActivationPoint(value: CGPoint) { this.nativeObject.accessibilityActivationPoint = value; }
  get accessibilityTopLevelUIElement(): interop.Object { return this.nativeObject.accessibilityTopLevelUIElement; }
  set accessibilityTopLevelUIElement(value: interop.Object) { this.nativeObject.accessibilityTopLevelUIElement = value; }
  get accessibilityURL(): NSURL { return this.nativeObject.accessibilityURL; }
  set accessibilityURL(value: NSURL) { this.nativeObject.accessibilityURL = value; }
  get accessibilityValue(): interop.Object { return this.nativeObject.accessibilityValue; }
  set accessibilityValue(value: interop.Object) { this.nativeObject.accessibilityValue = value; }
  get accessibilityValueDescription(): string { return this.nativeObject.accessibilityValueDescription; }
  set accessibilityValueDescription(value: string) { this.nativeObject.accessibilityValueDescription = value; }
  get accessibilityVisibleChildren(): NSArray { return this.nativeObject.accessibilityVisibleChildren; }
  set accessibilityVisibleChildren(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleChildren = value; }
  get accessibilitySubrole(): string { return this.nativeObject.accessibilitySubrole; }
  set accessibilitySubrole(value: string) { this.nativeObject.accessibilitySubrole = value; }
  get accessibilityTitle(): string { return this.nativeObject.accessibilityTitle; }
  set accessibilityTitle(value: string) { this.nativeObject.accessibilityTitle = value; }
  get accessibilityTitleUIElement(): interop.Object { return this.nativeObject.accessibilityTitleUIElement; }
  set accessibilityTitleUIElement(value: interop.Object) { this.nativeObject.accessibilityTitleUIElement = value; }
  get accessibilityNextContents(): NSArray { return this.nativeObject.accessibilityNextContents; }
  set accessibilityNextContents(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityNextContents = value; }
  get accessibilityOrientation(): interop.Enum<typeof NSAccessibilityOrientation> { return this.nativeObject.accessibilityOrientation; }
  set accessibilityOrientation(value: interop.Enum<typeof NSAccessibilityOrientation>) { this.nativeObject.accessibilityOrientation = value; }
  get accessibilityOverflowButton(): interop.Object { return this.nativeObject.accessibilityOverflowButton; }
  set accessibilityOverflowButton(value: interop.Object) { this.nativeObject.accessibilityOverflowButton = value; }
  get accessibilityParent(): interop.Object { return this.nativeObject.accessibilityParent; }
  set accessibilityParent(value: interop.Object) { this.nativeObject.accessibilityParent = value; }
  get accessibilityPlaceholderValue(): string { return this.nativeObject.accessibilityPlaceholderValue; }
  set accessibilityPlaceholderValue(value: string) { this.nativeObject.accessibilityPlaceholderValue = value; }
  get accessibilityPreviousContents(): NSArray { return this.nativeObject.accessibilityPreviousContents; }
  set accessibilityPreviousContents(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityPreviousContents = value; }
  get accessibilityRole(): string { return this.nativeObject.accessibilityRole; }
  set accessibilityRole(value: string) { this.nativeObject.accessibilityRole = value; }
  get accessibilityRoleDescription(): string { return this.nativeObject.accessibilityRoleDescription; }
  set accessibilityRoleDescription(value: string) { this.nativeObject.accessibilityRoleDescription = value; }
  get accessibilitySearchButton(): interop.Object { return this.nativeObject.accessibilitySearchButton; }
  set accessibilitySearchButton(value: interop.Object) { this.nativeObject.accessibilitySearchButton = value; }
  get accessibilitySearchMenu(): interop.Object { return this.nativeObject.accessibilitySearchMenu; }
  set accessibilitySearchMenu(value: interop.Object) { this.nativeObject.accessibilitySearchMenu = value; }
  get isAccessibilitySelected(): boolean { return this.nativeObject.isAccessibilitySelected; }
  set isAccessibilitySelected(value: boolean) { this.nativeObject.isAccessibilitySelected = value; }
  get accessibilitySelectedChildren(): NSArray { return this.nativeObject.accessibilitySelectedChildren; }
  set accessibilitySelectedChildren(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedChildren = value; }
  get accessibilityServesAsTitleForUIElements(): NSArray { return this.nativeObject.accessibilityServesAsTitleForUIElements; }
  set accessibilityServesAsTitleForUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityServesAsTitleForUIElements = value; }
  get accessibilityShownMenu(): interop.Object { return this.nativeObject.accessibilityShownMenu; }
  set accessibilityShownMenu(value: interop.Object) { this.nativeObject.accessibilityShownMenu = value; }
  get accessibilityMinValue(): interop.Object { return this.nativeObject.accessibilityMinValue; }
  set accessibilityMinValue(value: interop.Object) { this.nativeObject.accessibilityMinValue = value; }
  get accessibilityMaxValue(): interop.Object { return this.nativeObject.accessibilityMaxValue; }
  set accessibilityMaxValue(value: interop.Object) { this.nativeObject.accessibilityMaxValue = value; }
  get accessibilityLinkedUIElements(): NSArray { return this.nativeObject.accessibilityLinkedUIElements; }
  set accessibilityLinkedUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityLinkedUIElements = value; }
  get accessibilityWindow(): interop.Object { return this.nativeObject.accessibilityWindow; }
  set accessibilityWindow(value: interop.Object) { this.nativeObject.accessibilityWindow = value; }
  get accessibilityIdentifier(): string { return this.nativeObject.accessibilityIdentifier; }
  set accessibilityIdentifier(value: string) { this.nativeObject.accessibilityIdentifier = value; }
  get accessibilityHelp(): string { return this.nativeObject.accessibilityHelp; }
  set accessibilityHelp(value: string) { this.nativeObject.accessibilityHelp = value; }
  get accessibilityFilename(): string { return this.nativeObject.accessibilityFilename; }
  set accessibilityFilename(value: string) { this.nativeObject.accessibilityFilename = value; }
  get isAccessibilityExpanded(): boolean { return this.nativeObject.isAccessibilityExpanded; }
  set isAccessibilityExpanded(value: boolean) { this.nativeObject.isAccessibilityExpanded = value; }
  get isAccessibilityEdited(): boolean { return this.nativeObject.isAccessibilityEdited; }
  set isAccessibilityEdited(value: boolean) { this.nativeObject.isAccessibilityEdited = value; }
  get isAccessibilityEnabled(): boolean { return this.nativeObject.isAccessibilityEnabled; }
  set isAccessibilityEnabled(value: boolean) { this.nativeObject.isAccessibilityEnabled = value; }
  get accessibilityChildren(): NSArray { return this.nativeObject.accessibilityChildren; }
  set accessibilityChildren(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityChildren = value; }
  get accessibilityChildrenInNavigationOrder(): NSArray { return this.nativeObject.accessibilityChildrenInNavigationOrder; }
  set accessibilityChildrenInNavigationOrder(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityChildrenInNavigationOrder = value; }
  get accessibilityClearButton(): interop.Object { return this.nativeObject.accessibilityClearButton; }
  set accessibilityClearButton(value: interop.Object) { this.nativeObject.accessibilityClearButton = value; }
  get accessibilityCancelButton(): interop.Object { return this.nativeObject.accessibilityCancelButton; }
  set accessibilityCancelButton(value: interop.Object) { this.nativeObject.accessibilityCancelButton = value; }
  get isAccessibilityProtectedContent(): boolean { return this.nativeObject.isAccessibilityProtectedContent; }
  set isAccessibilityProtectedContent(value: boolean) { this.nativeObject.isAccessibilityProtectedContent = value; }
  get accessibilityContents(): NSArray { return this.nativeObject.accessibilityContents; }
  set accessibilityContents(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityContents = value; }
  get accessibilityLabel(): string { return this.nativeObject.accessibilityLabel; }
  set accessibilityLabel(value: string) { this.nativeObject.accessibilityLabel = value; }
  get isAccessibilityAlternateUIVisible(): boolean { return this.nativeObject.isAccessibilityAlternateUIVisible; }
  set isAccessibilityAlternateUIVisible(value: boolean) { this.nativeObject.isAccessibilityAlternateUIVisible = value; }
  get accessibilitySharedFocusElements(): NSArray { return this.nativeObject.accessibilitySharedFocusElements; }
  set accessibilitySharedFocusElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySharedFocusElements = value; }
  get isAccessibilityRequired(): boolean { return this.nativeObject.isAccessibilityRequired; }
  set isAccessibilityRequired(value: boolean) { this.nativeObject.isAccessibilityRequired = value; }
  get accessibilityCustomRotors(): NSArray { return this.nativeObject.accessibilityCustomRotors; }
  set accessibilityCustomRotors(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityCustomRotors = value; }
  get accessibilityUserInputLabels(): NSArray { return this.nativeObject.accessibilityUserInputLabels; }
  set accessibilityUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityUserInputLabels = value; }
  get accessibilityAttributedUserInputLabels(): NSArray { return this.nativeObject.accessibilityAttributedUserInputLabels; }
  set accessibilityAttributedUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityAttributedUserInputLabels = value; }
  get accessibilityApplicationFocusedUIElement(): interop.Object { return this.nativeObject.accessibilityApplicationFocusedUIElement; }
  set accessibilityApplicationFocusedUIElement(value: interop.Object) { this.nativeObject.accessibilityApplicationFocusedUIElement = value; }
  get accessibilityMainWindow(): interop.Object { return this.nativeObject.accessibilityMainWindow; }
  set accessibilityMainWindow(value: interop.Object) { this.nativeObject.accessibilityMainWindow = value; }
  get isAccessibilityHidden(): boolean { return this.nativeObject.isAccessibilityHidden; }
  set isAccessibilityHidden(value: boolean) { this.nativeObject.isAccessibilityHidden = value; }
  get isAccessibilityFrontmost(): boolean { return this.nativeObject.isAccessibilityFrontmost; }
  set isAccessibilityFrontmost(value: boolean) { this.nativeObject.isAccessibilityFrontmost = value; }
  get accessibilityFocusedWindow(): interop.Object { return this.nativeObject.accessibilityFocusedWindow; }
  set accessibilityFocusedWindow(value: interop.Object) { this.nativeObject.accessibilityFocusedWindow = value; }
  get accessibilityWindows(): NSArray { return this.nativeObject.accessibilityWindows; }
  set accessibilityWindows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityWindows = value; }
  get accessibilityExtrasMenuBar(): interop.Object { return this.nativeObject.accessibilityExtrasMenuBar; }
  set accessibilityExtrasMenuBar(value: interop.Object) { this.nativeObject.accessibilityExtrasMenuBar = value; }
  get accessibilityMenuBar(): interop.Object { return this.nativeObject.accessibilityMenuBar; }
  set accessibilityMenuBar(value: interop.Object) { this.nativeObject.accessibilityMenuBar = value; }
  get accessibilityColumnTitles(): NSArray { return this.nativeObject.accessibilityColumnTitles; }
  set accessibilityColumnTitles(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityColumnTitles = value; }
  get isAccessibilityOrderedByRow(): boolean { return this.nativeObject.isAccessibilityOrderedByRow; }
  set isAccessibilityOrderedByRow(value: boolean) { this.nativeObject.isAccessibilityOrderedByRow = value; }
  get accessibilityHorizontalUnits(): interop.Enum<typeof NSAccessibilityUnits> { return this.nativeObject.accessibilityHorizontalUnits; }
  set accessibilityHorizontalUnits(value: interop.Enum<typeof NSAccessibilityUnits>) { this.nativeObject.accessibilityHorizontalUnits = value; }
  get accessibilityVerticalUnits(): interop.Enum<typeof NSAccessibilityUnits> { return this.nativeObject.accessibilityVerticalUnits; }
  set accessibilityVerticalUnits(value: interop.Enum<typeof NSAccessibilityUnits>) { this.nativeObject.accessibilityVerticalUnits = value; }
  get accessibilityHorizontalUnitDescription(): string { return this.nativeObject.accessibilityHorizontalUnitDescription; }
  set accessibilityHorizontalUnitDescription(value: string) { this.nativeObject.accessibilityHorizontalUnitDescription = value; }
  get accessibilityVerticalUnitDescription(): string { return this.nativeObject.accessibilityVerticalUnitDescription; }
  set accessibilityVerticalUnitDescription(value: string) { this.nativeObject.accessibilityVerticalUnitDescription = value; }
  get accessibilityHandles(): NSArray { return this.nativeObject.accessibilityHandles; }
  set accessibilityHandles(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityHandles = value; }
  get accessibilityWarningValue(): interop.Object { return this.nativeObject.accessibilityWarningValue; }
  set accessibilityWarningValue(value: interop.Object) { this.nativeObject.accessibilityWarningValue = value; }
  get accessibilityCriticalValue(): interop.Object { return this.nativeObject.accessibilityCriticalValue; }
  set accessibilityCriticalValue(value: interop.Object) { this.nativeObject.accessibilityCriticalValue = value; }
  get isAccessibilityDisclosed(): boolean { return this.nativeObject.isAccessibilityDisclosed; }
  set isAccessibilityDisclosed(value: boolean) { this.nativeObject.isAccessibilityDisclosed = value; }
  get accessibilityDisclosedByRow(): interop.Object { return this.nativeObject.accessibilityDisclosedByRow; }
  set accessibilityDisclosedByRow(value: interop.Object) { this.nativeObject.accessibilityDisclosedByRow = value; }
  get accessibilityDisclosedRows(): interop.Object { return this.nativeObject.accessibilityDisclosedRows; }
  set accessibilityDisclosedRows(value: interop.Object) { this.nativeObject.accessibilityDisclosedRows = value; }
  get accessibilityDisclosureLevel(): number { return this.nativeObject.accessibilityDisclosureLevel; }
  set accessibilityDisclosureLevel(value: number) { this.nativeObject.accessibilityDisclosureLevel = value; }
  get accessibilityMarkerUIElements(): NSArray { return this.nativeObject.accessibilityMarkerUIElements; }
  set accessibilityMarkerUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityMarkerUIElements = value; }
  get accessibilityMarkerValues(): interop.Object { return this.nativeObject.accessibilityMarkerValues; }
  set accessibilityMarkerValues(value: interop.Object) { this.nativeObject.accessibilityMarkerValues = value; }
  get accessibilityMarkerGroupUIElement(): interop.Object { return this.nativeObject.accessibilityMarkerGroupUIElement; }
  set accessibilityMarkerGroupUIElement(value: interop.Object) { this.nativeObject.accessibilityMarkerGroupUIElement = value; }
  get accessibilityUnits(): interop.Enum<typeof NSAccessibilityUnits> { return this.nativeObject.accessibilityUnits; }
  set accessibilityUnits(value: interop.Enum<typeof NSAccessibilityUnits>) { this.nativeObject.accessibilityUnits = value; }
  get accessibilityUnitDescription(): string { return this.nativeObject.accessibilityUnitDescription; }
  set accessibilityUnitDescription(value: string) { this.nativeObject.accessibilityUnitDescription = value; }
  get accessibilityRulerMarkerType(): interop.Enum<typeof NSAccessibilityRulerMarkerType> { return this.nativeObject.accessibilityRulerMarkerType; }
  set accessibilityRulerMarkerType(value: interop.Enum<typeof NSAccessibilityRulerMarkerType>) { this.nativeObject.accessibilityRulerMarkerType = value; }
  get accessibilityMarkerTypeDescription(): string { return this.nativeObject.accessibilityMarkerTypeDescription; }
  set accessibilityMarkerTypeDescription(value: string) { this.nativeObject.accessibilityMarkerTypeDescription = value; }
  get accessibilityHorizontalScrollBar(): interop.Object { return this.nativeObject.accessibilityHorizontalScrollBar; }
  set accessibilityHorizontalScrollBar(value: interop.Object) { this.nativeObject.accessibilityHorizontalScrollBar = value; }
  get accessibilityVerticalScrollBar(): interop.Object { return this.nativeObject.accessibilityVerticalScrollBar; }
  set accessibilityVerticalScrollBar(value: interop.Object) { this.nativeObject.accessibilityVerticalScrollBar = value; }
  get accessibilityAllowedValues(): NSArray { return this.nativeObject.accessibilityAllowedValues; }
  set accessibilityAllowedValues(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityAllowedValues = value; }
  get accessibilityLabelUIElements(): NSArray { return this.nativeObject.accessibilityLabelUIElements; }
  set accessibilityLabelUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityLabelUIElements = value; }
  get accessibilityLabelValue(): number { return this.nativeObject.accessibilityLabelValue; }
  set accessibilityLabelValue(value: number) { this.nativeObject.accessibilityLabelValue = value; }
  get accessibilitySplitters(): NSArray { return this.nativeObject.accessibilitySplitters; }
  set accessibilitySplitters(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySplitters = value; }
  get accessibilityDecrementButton(): interop.Object { return this.nativeObject.accessibilityDecrementButton; }
  set accessibilityDecrementButton(value: interop.Object) { this.nativeObject.accessibilityDecrementButton = value; }
  get accessibilityIncrementButton(): interop.Object { return this.nativeObject.accessibilityIncrementButton; }
  set accessibilityIncrementButton(value: interop.Object) { this.nativeObject.accessibilityIncrementButton = value; }
  get accessibilityTabs(): NSArray { return this.nativeObject.accessibilityTabs; }
  set accessibilityTabs(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityTabs = value; }
  get accessibilityHeader(): interop.Object { return this.nativeObject.accessibilityHeader; }
  set accessibilityHeader(value: interop.Object) { this.nativeObject.accessibilityHeader = value; }
  get accessibilityColumnCount(): number { return this.nativeObject.accessibilityColumnCount; }
  set accessibilityColumnCount(value: number) { this.nativeObject.accessibilityColumnCount = value; }
  get accessibilityRowCount(): number { return this.nativeObject.accessibilityRowCount; }
  set accessibilityRowCount(value: number) { this.nativeObject.accessibilityRowCount = value; }
  get accessibilityIndex(): number { return this.nativeObject.accessibilityIndex; }
  set accessibilityIndex(value: number) { this.nativeObject.accessibilityIndex = value; }
  get accessibilityColumns(): NSArray { return this.nativeObject.accessibilityColumns; }
  set accessibilityColumns(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityColumns = value; }
  get accessibilityRows(): NSArray { return this.nativeObject.accessibilityRows; }
  set accessibilityRows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityRows = value; }
  get accessibilityVisibleRows(): NSArray { return this.nativeObject.accessibilityVisibleRows; }
  set accessibilityVisibleRows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleRows = value; }
  get accessibilitySelectedRows(): NSArray { return this.nativeObject.accessibilitySelectedRows; }
  set accessibilitySelectedRows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedRows = value; }
  get accessibilityVisibleColumns(): NSArray { return this.nativeObject.accessibilityVisibleColumns; }
  set accessibilityVisibleColumns(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleColumns = value; }
  get accessibilitySelectedColumns(): NSArray { return this.nativeObject.accessibilitySelectedColumns; }
  set accessibilitySelectedColumns(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedColumns = value; }
  get accessibilitySortDirection(): interop.Enum<typeof NSAccessibilitySortDirection> { return this.nativeObject.accessibilitySortDirection; }
  set accessibilitySortDirection(value: interop.Enum<typeof NSAccessibilitySortDirection>) { this.nativeObject.accessibilitySortDirection = value; }
  get accessibilityRowHeaderUIElements(): NSArray { return this.nativeObject.accessibilityRowHeaderUIElements; }
  set accessibilityRowHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityRowHeaderUIElements = value; }
  get accessibilitySelectedCells(): NSArray { return this.nativeObject.accessibilitySelectedCells; }
  set accessibilitySelectedCells(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedCells = value; }
  get accessibilityVisibleCells(): NSArray { return this.nativeObject.accessibilityVisibleCells; }
  set accessibilityVisibleCells(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleCells = value; }
  get accessibilityColumnHeaderUIElements(): NSArray { return this.nativeObject.accessibilityColumnHeaderUIElements; }
  set accessibilityColumnHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityColumnHeaderUIElements = value; }
  get accessibilityRowIndexRange(): _NSRange { return this.nativeObject.accessibilityRowIndexRange; }
  set accessibilityRowIndexRange(value: _NSRange) { this.nativeObject.accessibilityRowIndexRange = value; }
  get accessibilityColumnIndexRange(): _NSRange { return this.nativeObject.accessibilityColumnIndexRange; }
  set accessibilityColumnIndexRange(value: _NSRange) { this.nativeObject.accessibilityColumnIndexRange = value; }
  get accessibilityInsertionPointLineNumber(): number { return this.nativeObject.accessibilityInsertionPointLineNumber; }
  set accessibilityInsertionPointLineNumber(value: number) { this.nativeObject.accessibilityInsertionPointLineNumber = value; }
  get accessibilitySharedCharacterRange(): _NSRange { return this.nativeObject.accessibilitySharedCharacterRange; }
  set accessibilitySharedCharacterRange(value: _NSRange) { this.nativeObject.accessibilitySharedCharacterRange = value; }
  get accessibilitySharedTextUIElements(): NSArray { return this.nativeObject.accessibilitySharedTextUIElements; }
  set accessibilitySharedTextUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySharedTextUIElements = value; }
  get accessibilityVisibleCharacterRange(): _NSRange { return this.nativeObject.accessibilityVisibleCharacterRange; }
  set accessibilityVisibleCharacterRange(value: _NSRange) { this.nativeObject.accessibilityVisibleCharacterRange = value; }
  get accessibilityNumberOfCharacters(): number { return this.nativeObject.accessibilityNumberOfCharacters; }
  set accessibilityNumberOfCharacters(value: number) { this.nativeObject.accessibilityNumberOfCharacters = value; }
  get accessibilitySelectedText(): string { return this.nativeObject.accessibilitySelectedText; }
  set accessibilitySelectedText(value: string) { this.nativeObject.accessibilitySelectedText = value; }
  get accessibilitySelectedTextRange(): _NSRange { return this.nativeObject.accessibilitySelectedTextRange; }
  set accessibilitySelectedTextRange(value: _NSRange) { this.nativeObject.accessibilitySelectedTextRange = value; }
  get accessibilitySelectedTextRanges(): NSArray { return this.nativeObject.accessibilitySelectedTextRanges; }
  set accessibilitySelectedTextRanges(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedTextRanges = value; }
  get accessibilityToolbarButton(): interop.Object { return this.nativeObject.accessibilityToolbarButton; }
  set accessibilityToolbarButton(value: interop.Object) { this.nativeObject.accessibilityToolbarButton = value; }
  get isAccessibilityModal(): boolean { return this.nativeObject.isAccessibilityModal; }
  set isAccessibilityModal(value: boolean) { this.nativeObject.isAccessibilityModal = value; }
  get accessibilityProxy(): interop.Object { return this.nativeObject.accessibilityProxy; }
  set accessibilityProxy(value: interop.Object) { this.nativeObject.accessibilityProxy = value; }
  get isAccessibilityMain(): boolean { return this.nativeObject.isAccessibilityMain; }
  set isAccessibilityMain(value: boolean) { this.nativeObject.isAccessibilityMain = value; }
  get accessibilityFullScreenButton(): interop.Object { return this.nativeObject.accessibilityFullScreenButton; }
  set accessibilityFullScreenButton(value: interop.Object) { this.nativeObject.accessibilityFullScreenButton = value; }
  get accessibilityGrowArea(): interop.Object { return this.nativeObject.accessibilityGrowArea; }
  set accessibilityGrowArea(value: interop.Object) { this.nativeObject.accessibilityGrowArea = value; }
  get accessibilityDocument(): string { return this.nativeObject.accessibilityDocument; }
  set accessibilityDocument(value: string) { this.nativeObject.accessibilityDocument = value; }
  get accessibilityDefaultButton(): interop.Object { return this.nativeObject.accessibilityDefaultButton; }
  set accessibilityDefaultButton(value: interop.Object) { this.nativeObject.accessibilityDefaultButton = value; }
  get accessibilityCloseButton(): interop.Object { return this.nativeObject.accessibilityCloseButton; }
  set accessibilityCloseButton(value: interop.Object) { this.nativeObject.accessibilityCloseButton = value; }
  get accessibilityZoomButton(): interop.Object { return this.nativeObject.accessibilityZoomButton; }
  set accessibilityZoomButton(value: interop.Object) { this.nativeObject.accessibilityZoomButton = value; }
  get accessibilityMinimizeButton(): interop.Object { return this.nativeObject.accessibilityMinimizeButton; }
  set accessibilityMinimizeButton(value: interop.Object) { this.nativeObject.accessibilityMinimizeButton = value; }
  get isAccessibilityMinimized(): boolean { return this.nativeObject.isAccessibilityMinimized; }
  set isAccessibilityMinimized(value: boolean) { this.nativeObject.isAccessibilityMinimized = value; }
  get accessibilityCustomActions(): NSArray { return this.nativeObject.accessibilityCustomActions; }
  set accessibilityCustomActions(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityCustomActions = value; }
}

export class HTMLNSImageElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSImage.new();
  get delegate(): NSImageDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSImageDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSImageDelegateImpl;
  }

  get size(): CGSize { return this.nativeObject.size; }
  set size(value: CGSize) { this.nativeObject.size = value; }
  get backgroundColor(): NSColor { return this.nativeObject.backgroundColor; }
  set backgroundColor(value: NSColor) { this.nativeObject.backgroundColor = value; }
  get usesEPSOnResolutionMismatch(): boolean { return this.nativeObject.usesEPSOnResolutionMismatch; }
  set usesEPSOnResolutionMismatch(value: boolean) { this.nativeObject.usesEPSOnResolutionMismatch = value; }
  get prefersColorMatch(): boolean { return this.nativeObject.prefersColorMatch; }
  set prefersColorMatch(value: boolean) { this.nativeObject.prefersColorMatch = value; }
  get matchesOnMultipleResolution(): boolean { return this.nativeObject.matchesOnMultipleResolution; }
  set matchesOnMultipleResolution(value: boolean) { this.nativeObject.matchesOnMultipleResolution = value; }
  get matchesOnlyOnBestFittingAxis(): boolean { return this.nativeObject.matchesOnlyOnBestFittingAxis; }
  set matchesOnlyOnBestFittingAxis(value: boolean) { this.nativeObject.matchesOnlyOnBestFittingAxis = value; }
  get TIFFRepresentation(): NSData { return this.nativeObject.TIFFRepresentation; }
  get representations(): NSArray { return this.nativeObject.representations; }
  get isValid(): boolean { return this.nativeObject.isValid; }
  get cacheMode(): interop.Enum<typeof NSImageCacheMode> { return this.nativeObject.cacheMode; }
  set cacheMode(value: interop.Enum<typeof NSImageCacheMode>) { this.nativeObject.cacheMode = value; }
  get alignmentRect(): CGRect { return this.nativeObject.alignmentRect; }
  set alignmentRect(value: CGRect) { this.nativeObject.alignmentRect = value; }
  get isTemplate(): boolean { return this.nativeObject.isTemplate; }
  set isTemplate(value: boolean) { this.nativeObject.isTemplate = value; }
  get accessibilityDescription(): string { return this.nativeObject.accessibilityDescription; }
  set accessibilityDescription(value: string) { this.nativeObject.accessibilityDescription = value; }
  get capInsets(): NSEdgeInsets { return this.nativeObject.capInsets; }
  set capInsets(value: NSEdgeInsets) { this.nativeObject.capInsets = value; }
  get resizingMode(): interop.Enum<typeof NSImageResizingMode> { return this.nativeObject.resizingMode; }
  set resizingMode(value: interop.Enum<typeof NSImageResizingMode>) { this.nativeObject.resizingMode = value; }
  get symbolConfiguration(): NSImageSymbolConfiguration { return this.nativeObject.symbolConfiguration; }
  get locale(): NSLocale { return this.nativeObject.locale; }

  set imageDidNotDrawInRect(value: (sender: NSImage, rect: CGRect) => NSImage) {
    this.delegate.imageDidNotDrawInRect = value;
  }
  set imageWillLoadRepresentation(value: (image: NSImage, rep: NSImageRep) => void) {
    this.delegate.imageWillLoadRepresentation = value;
  }
  set imageDidLoadRepresentationHeader(value: (image: NSImage, rep: NSImageRep) => void) {
    this.delegate.imageDidLoadRepresentationHeader = value;
  }
  set imageDidLoadPartOfRepresentationWithValidRows(value: (image: NSImage, rep: NSImageRep, rows: number) => void) {
    this.delegate.imageDidLoadPartOfRepresentationWithValidRows = value;
  }
  set imageDidLoadRepresentationWithStatus(value: (image: NSImage, rep: NSImageRep, status: interop.Enum<typeof NSImageLoadStatus>) => void) {
    this.delegate.imageDidLoadRepresentationWithStatus = value;
  }
}

export class HTMLNSToolbarElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSToolbar.new();
  get delegate(): NSToolbarDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSToolbarDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSToolbarDelegateImpl;
  }

  get isVisible(): boolean { return this.nativeObject.isVisible; }
  set isVisible(value: boolean) { this.nativeObject.isVisible = value; }
  get customizationPaletteIsRunning(): boolean { return this.nativeObject.customizationPaletteIsRunning; }
  get displayMode(): interop.Enum<typeof NSToolbarDisplayMode> { return this.nativeObject.displayMode; }
  set displayMode(value: interop.Enum<typeof NSToolbarDisplayMode>) { this.nativeObject.displayMode = value; }
  get selectedItemIdentifier(): string { return this.nativeObject.selectedItemIdentifier; }
  set selectedItemIdentifier(value: string) { this.nativeObject.selectedItemIdentifier = value; }
  get sizeMode(): interop.Enum<typeof NSToolbarSizeMode> { return this.nativeObject.sizeMode; }
  set sizeMode(value: interop.Enum<typeof NSToolbarSizeMode>) { this.nativeObject.sizeMode = value; }
  get showsBaselineSeparator(): boolean { return this.nativeObject.showsBaselineSeparator; }
  set showsBaselineSeparator(value: boolean) { this.nativeObject.showsBaselineSeparator = value; }
  get allowsUserCustomization(): boolean { return this.nativeObject.allowsUserCustomization; }
  set allowsUserCustomization(value: boolean) { this.nativeObject.allowsUserCustomization = value; }
  get identifier(): string { return this.nativeObject.identifier; }
  get items(): NSArray { return this.nativeObject.items; }
  get visibleItems(): NSArray { return this.nativeObject.visibleItems; }
  get centeredItemIdentifiers(): NSSet { return this.nativeObject.centeredItemIdentifiers; }
  set centeredItemIdentifiers(value: NSSet) { this.nativeObject.centeredItemIdentifiers = value; }
  get centeredItemIdentifier(): string { return this.nativeObject.centeredItemIdentifier; }
  set centeredItemIdentifier(value: string) { this.nativeObject.centeredItemIdentifier = value; }
  get autosavesConfiguration(): boolean { return this.nativeObject.autosavesConfiguration; }
  set autosavesConfiguration(value: boolean) { this.nativeObject.autosavesConfiguration = value; }
  get configurationDictionary(): NSDictionary { return this.nativeObject.configurationDictionary; }
  get allowsExtensionItems(): boolean { return this.nativeObject.allowsExtensionItems; }
  set allowsExtensionItems(value: boolean) { this.nativeObject.allowsExtensionItems = value; }
  get fullScreenAccessoryView(): NSView { return this.nativeObject.fullScreenAccessoryView; }
  set fullScreenAccessoryView(value: NSView) { this.nativeObject.fullScreenAccessoryView = value; }
  get fullScreenAccessoryViewMinHeight(): number { return this.nativeObject.fullScreenAccessoryViewMinHeight; }
  set fullScreenAccessoryViewMinHeight(value: number) { this.nativeObject.fullScreenAccessoryViewMinHeight = value; }
  get fullScreenAccessoryViewMaxHeight(): number { return this.nativeObject.fullScreenAccessoryViewMaxHeight; }
  set fullScreenAccessoryViewMaxHeight(value: number) { this.nativeObject.fullScreenAccessoryViewMaxHeight = value; }

  set toolbarItemForItemIdentifierWillBeInsertedIntoToolbar(value: (toolbar: NSToolbar, itemIdentifier: string, flag: boolean) => NSToolbarItem) {
    this.delegate.toolbarItemForItemIdentifierWillBeInsertedIntoToolbar = value;
  }
  set toolbarDefaultItemIdentifiers(value: (toolbar: NSToolbar) => NSArray) {
    this.delegate.toolbarDefaultItemIdentifiers = value;
  }
  set toolbarAllowedItemIdentifiers(value: (toolbar: NSToolbar) => NSArray) {
    this.delegate.toolbarAllowedItemIdentifiers = value;
  }
  set toolbarSelectableItemIdentifiers(value: (toolbar: NSToolbar) => NSArray) {
    this.delegate.toolbarSelectableItemIdentifiers = value;
  }
  set toolbarImmovableItemIdentifiers(value: (toolbar: NSToolbar) => NSSet) {
    this.delegate.toolbarImmovableItemIdentifiers = value;
  }
  set toolbarItemIdentifierCanBeInsertedAtIndex(value: (toolbar: NSToolbar, itemIdentifier: string, index: number) => boolean) {
    this.delegate.toolbarItemIdentifierCanBeInsertedAtIndex = value;
  }
  set toolbarWillAddItem(value: (notification: NSNotification) => void) {
    this.delegate.toolbarWillAddItem = value;
  }
  set toolbarDidRemoveItem(value: (notification: NSNotification) => void) {
    this.delegate.toolbarDidRemoveItem = value;
  }
}

export class HTMLNSTabViewElement extends HTMLNSViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTabView.new();
  get delegate(): NSTabViewDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSTabViewDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSTabViewDelegateImpl;
  }

  get selectedTabViewItem(): NSTabViewItem { return this.nativeObject.selectedTabViewItem; }
  get font(): NSFont { return this.nativeObject.font; }
  set font(value: NSFont) { this.nativeObject.font = value; }
  get tabViewType(): interop.Enum<typeof NSTabViewType> { return this.nativeObject.tabViewType; }
  set tabViewType(value: interop.Enum<typeof NSTabViewType>) { this.nativeObject.tabViewType = value; }
  get tabPosition(): interop.Enum<typeof NSTabPosition> { return this.nativeObject.tabPosition; }
  set tabPosition(value: interop.Enum<typeof NSTabPosition>) { this.nativeObject.tabPosition = value; }
  get tabViewBorderType(): interop.Enum<typeof NSTabViewBorderType> { return this.nativeObject.tabViewBorderType; }
  set tabViewBorderType(value: interop.Enum<typeof NSTabViewBorderType>) { this.nativeObject.tabViewBorderType = value; }
  get tabViewItems(): NSArray { return this.nativeObject.tabViewItems; }
  set tabViewItems(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.tabViewItems = value; }
  get allowsTruncatedLabels(): boolean { return this.nativeObject.allowsTruncatedLabels; }
  set allowsTruncatedLabels(value: boolean) { this.nativeObject.allowsTruncatedLabels = value; }
  get minimumSize(): CGSize { return this.nativeObject.minimumSize; }
  get drawsBackground(): boolean { return this.nativeObject.drawsBackground; }
  set drawsBackground(value: boolean) { this.nativeObject.drawsBackground = value; }
  get controlSize(): interop.Enum<typeof NSControlSize> { return this.nativeObject.controlSize; }
  set controlSize(value: interop.Enum<typeof NSControlSize>) { this.nativeObject.controlSize = value; }
  get contentRect(): CGRect { return this.nativeObject.contentRect; }
  get numberOfTabViewItems(): number { return this.nativeObject.numberOfTabViewItems; }
  get controlTint(): interop.Enum<typeof NSControlTint> { return this.nativeObject.controlTint; }
  set controlTint(value: interop.Enum<typeof NSControlTint>) { this.nativeObject.controlTint = value; }

  set tabViewShouldSelectTabViewItem(value: (tabView: NSTabView, tabViewItem: NSTabViewItem | null) => boolean) {
    this.delegate.tabViewShouldSelectTabViewItem = value;
  }
  set tabViewWillSelectTabViewItem(value: (tabView: NSTabView, tabViewItem: NSTabViewItem | null) => void) {
    this.delegate.tabViewWillSelectTabViewItem = value;
  }
  set tabViewDidSelectTabViewItem(value: (tabView: NSTabView, tabViewItem: NSTabViewItem | null) => void) {
    this.delegate.tabViewDidSelectTabViewItem = value;
  }
  set tabViewDidChangeNumberOfTabViewItems(value: (tabView: NSTabView) => void) {
    this.delegate.tabViewDidChangeNumberOfTabViewItems = value;
  }
}

export class HTMLNSApplicationElement extends HTMLNSResponderElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSApplication.sharedApplication;
  get delegate(): NSApplicationDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSApplicationDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSApplicationDelegateImpl;
  }

  get mainWindow(): NSWindow { return this.nativeObject.mainWindow; }
  get keyWindow(): NSWindow { return this.nativeObject.keyWindow; }
  get isActive(): boolean { return this.nativeObject.isActive; }
  get isHidden(): boolean { return this.nativeObject.isHidden; }
  get isRunning(): boolean { return this.nativeObject.isRunning; }
  get modalWindow(): NSWindow { return this.nativeObject.modalWindow; }
  get windows(): NSArray { return this.nativeObject.windows; }
  get mainMenu(): NSMenu { return this.nativeObject.mainMenu; }
  set mainMenu(value: NSMenu) { this.nativeObject.mainMenu = value; }
  get helpMenu(): NSMenu { return this.nativeObject.helpMenu; }
  set helpMenu(value: NSMenu) { this.nativeObject.helpMenu = value; }
  get applicationIconImage(): NSImage { return this.nativeObject.applicationIconImage; }
  set applicationIconImage(value: NSImage) { this.nativeObject.applicationIconImage = value; }
  get dockTile(): NSDockTile { return this.nativeObject.dockTile; }
  get presentationOptions(): interop.Enum<typeof NSApplicationPresentationOptions> { return this.nativeObject.presentationOptions; }
  set presentationOptions(value: interop.Enum<typeof NSApplicationPresentationOptions>) { this.nativeObject.presentationOptions = value; }
  get currentSystemPresentationOptions(): interop.Enum<typeof NSApplicationPresentationOptions> { return this.nativeObject.currentSystemPresentationOptions; }
  get occlusionState(): interop.Enum<typeof NSApplicationOcclusionState> { return this.nativeObject.occlusionState; }
  get isProtectedDataAvailable(): boolean { return this.nativeObject.isProtectedDataAvailable; }
  get appearance(): NSAppearance { return this.nativeObject.appearance; }
  set appearance(value: NSAppearance) { this.nativeObject.appearance = value; }
  get effectiveAppearance(): NSAppearance { return this.nativeObject.effectiveAppearance; }
  get currentEvent(): NSEvent { return this.nativeObject.currentEvent; }
  get windowsMenu(): NSMenu { return this.nativeObject.windowsMenu; }
  set windowsMenu(value: NSMenu) { this.nativeObject.windowsMenu = value; }
  get isFullKeyboardAccessEnabled(): boolean { return this.nativeObject.isFullKeyboardAccessEnabled; }
  get servicesMenu(): NSMenu { return this.nativeObject.servicesMenu; }
  set servicesMenu(value: NSMenu) { this.nativeObject.servicesMenu = value; }
  get servicesProvider(): interop.Object { return this.nativeObject.servicesProvider; }
  set servicesProvider(value: interop.Object) { this.nativeObject.servicesProvider = value; }
  get userInterfaceLayoutDirection(): interop.Enum<typeof NSUserInterfaceLayoutDirection> { return this.nativeObject.userInterfaceLayoutDirection; }
  get isRegisteredForRemoteNotifications(): boolean { return this.nativeObject.isRegisteredForRemoteNotifications; }
  get enabledRemoteNotificationTypes(): interop.Enum<typeof NSRemoteNotificationType> { return this.nativeObject.enabledRemoteNotificationTypes; }
  get context(): NSGraphicsContext { return this.nativeObject.context; }
  get isAutomaticCustomizeTouchBarMenuItemEnabled(): boolean { return this.nativeObject.isAutomaticCustomizeTouchBarMenuItemEnabled; }
  set isAutomaticCustomizeTouchBarMenuItemEnabled(value: boolean) { this.nativeObject.isAutomaticCustomizeTouchBarMenuItemEnabled = value; }
  get orderedDocuments(): NSArray { return this.nativeObject.orderedDocuments; }
  get orderedWindows(): NSArray { return this.nativeObject.orderedWindows; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
  get isAccessibilityElement(): boolean { return this.nativeObject.isAccessibilityElement; }
  set isAccessibilityElement(value: boolean) { this.nativeObject.isAccessibilityElement = value; }
  get accessibilityFrame(): CGRect { return this.nativeObject.accessibilityFrame; }
  set accessibilityFrame(value: CGRect) { this.nativeObject.accessibilityFrame = value; }
  get isAccessibilityFocused(): boolean { return this.nativeObject.isAccessibilityFocused; }
  set isAccessibilityFocused(value: boolean) { this.nativeObject.isAccessibilityFocused = value; }
  get accessibilityActivationPoint(): CGPoint { return this.nativeObject.accessibilityActivationPoint; }
  set accessibilityActivationPoint(value: CGPoint) { this.nativeObject.accessibilityActivationPoint = value; }
  get accessibilityTopLevelUIElement(): interop.Object { return this.nativeObject.accessibilityTopLevelUIElement; }
  set accessibilityTopLevelUIElement(value: interop.Object) { this.nativeObject.accessibilityTopLevelUIElement = value; }
  get accessibilityURL(): NSURL { return this.nativeObject.accessibilityURL; }
  set accessibilityURL(value: NSURL) { this.nativeObject.accessibilityURL = value; }
  get accessibilityValue(): interop.Object { return this.nativeObject.accessibilityValue; }
  set accessibilityValue(value: interop.Object) { this.nativeObject.accessibilityValue = value; }
  get accessibilityValueDescription(): string { return this.nativeObject.accessibilityValueDescription; }
  set accessibilityValueDescription(value: string) { this.nativeObject.accessibilityValueDescription = value; }
  get accessibilityVisibleChildren(): NSArray { return this.nativeObject.accessibilityVisibleChildren; }
  set accessibilityVisibleChildren(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleChildren = value; }
  get accessibilitySubrole(): string { return this.nativeObject.accessibilitySubrole; }
  set accessibilitySubrole(value: string) { this.nativeObject.accessibilitySubrole = value; }
  get accessibilityTitle(): string { return this.nativeObject.accessibilityTitle; }
  set accessibilityTitle(value: string) { this.nativeObject.accessibilityTitle = value; }
  get accessibilityTitleUIElement(): interop.Object { return this.nativeObject.accessibilityTitleUIElement; }
  set accessibilityTitleUIElement(value: interop.Object) { this.nativeObject.accessibilityTitleUIElement = value; }
  get accessibilityNextContents(): NSArray { return this.nativeObject.accessibilityNextContents; }
  set accessibilityNextContents(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityNextContents = value; }
  get accessibilityOrientation(): interop.Enum<typeof NSAccessibilityOrientation> { return this.nativeObject.accessibilityOrientation; }
  set accessibilityOrientation(value: interop.Enum<typeof NSAccessibilityOrientation>) { this.nativeObject.accessibilityOrientation = value; }
  get accessibilityOverflowButton(): interop.Object { return this.nativeObject.accessibilityOverflowButton; }
  set accessibilityOverflowButton(value: interop.Object) { this.nativeObject.accessibilityOverflowButton = value; }
  get accessibilityParent(): interop.Object { return this.nativeObject.accessibilityParent; }
  set accessibilityParent(value: interop.Object) { this.nativeObject.accessibilityParent = value; }
  get accessibilityPlaceholderValue(): string { return this.nativeObject.accessibilityPlaceholderValue; }
  set accessibilityPlaceholderValue(value: string) { this.nativeObject.accessibilityPlaceholderValue = value; }
  get accessibilityPreviousContents(): NSArray { return this.nativeObject.accessibilityPreviousContents; }
  set accessibilityPreviousContents(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityPreviousContents = value; }
  get accessibilityRole(): string { return this.nativeObject.accessibilityRole; }
  set accessibilityRole(value: string) { this.nativeObject.accessibilityRole = value; }
  get accessibilityRoleDescription(): string { return this.nativeObject.accessibilityRoleDescription; }
  set accessibilityRoleDescription(value: string) { this.nativeObject.accessibilityRoleDescription = value; }
  get accessibilitySearchButton(): interop.Object { return this.nativeObject.accessibilitySearchButton; }
  set accessibilitySearchButton(value: interop.Object) { this.nativeObject.accessibilitySearchButton = value; }
  get accessibilitySearchMenu(): interop.Object { return this.nativeObject.accessibilitySearchMenu; }
  set accessibilitySearchMenu(value: interop.Object) { this.nativeObject.accessibilitySearchMenu = value; }
  get isAccessibilitySelected(): boolean { return this.nativeObject.isAccessibilitySelected; }
  set isAccessibilitySelected(value: boolean) { this.nativeObject.isAccessibilitySelected = value; }
  get accessibilitySelectedChildren(): NSArray { return this.nativeObject.accessibilitySelectedChildren; }
  set accessibilitySelectedChildren(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedChildren = value; }
  get accessibilityServesAsTitleForUIElements(): NSArray { return this.nativeObject.accessibilityServesAsTitleForUIElements; }
  set accessibilityServesAsTitleForUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityServesAsTitleForUIElements = value; }
  get accessibilityShownMenu(): interop.Object { return this.nativeObject.accessibilityShownMenu; }
  set accessibilityShownMenu(value: interop.Object) { this.nativeObject.accessibilityShownMenu = value; }
  get accessibilityMinValue(): interop.Object { return this.nativeObject.accessibilityMinValue; }
  set accessibilityMinValue(value: interop.Object) { this.nativeObject.accessibilityMinValue = value; }
  get accessibilityMaxValue(): interop.Object { return this.nativeObject.accessibilityMaxValue; }
  set accessibilityMaxValue(value: interop.Object) { this.nativeObject.accessibilityMaxValue = value; }
  get accessibilityLinkedUIElements(): NSArray { return this.nativeObject.accessibilityLinkedUIElements; }
  set accessibilityLinkedUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityLinkedUIElements = value; }
  get accessibilityWindow(): interop.Object { return this.nativeObject.accessibilityWindow; }
  set accessibilityWindow(value: interop.Object) { this.nativeObject.accessibilityWindow = value; }
  get accessibilityIdentifier(): string { return this.nativeObject.accessibilityIdentifier; }
  set accessibilityIdentifier(value: string) { this.nativeObject.accessibilityIdentifier = value; }
  get accessibilityHelp(): string { return this.nativeObject.accessibilityHelp; }
  set accessibilityHelp(value: string) { this.nativeObject.accessibilityHelp = value; }
  get accessibilityFilename(): string { return this.nativeObject.accessibilityFilename; }
  set accessibilityFilename(value: string) { this.nativeObject.accessibilityFilename = value; }
  get isAccessibilityExpanded(): boolean { return this.nativeObject.isAccessibilityExpanded; }
  set isAccessibilityExpanded(value: boolean) { this.nativeObject.isAccessibilityExpanded = value; }
  get isAccessibilityEdited(): boolean { return this.nativeObject.isAccessibilityEdited; }
  set isAccessibilityEdited(value: boolean) { this.nativeObject.isAccessibilityEdited = value; }
  get isAccessibilityEnabled(): boolean { return this.nativeObject.isAccessibilityEnabled; }
  set isAccessibilityEnabled(value: boolean) { this.nativeObject.isAccessibilityEnabled = value; }
  get accessibilityChildren(): NSArray { return this.nativeObject.accessibilityChildren; }
  set accessibilityChildren(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityChildren = value; }
  get accessibilityChildrenInNavigationOrder(): NSArray { return this.nativeObject.accessibilityChildrenInNavigationOrder; }
  set accessibilityChildrenInNavigationOrder(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityChildrenInNavigationOrder = value; }
  get accessibilityClearButton(): interop.Object { return this.nativeObject.accessibilityClearButton; }
  set accessibilityClearButton(value: interop.Object) { this.nativeObject.accessibilityClearButton = value; }
  get accessibilityCancelButton(): interop.Object { return this.nativeObject.accessibilityCancelButton; }
  set accessibilityCancelButton(value: interop.Object) { this.nativeObject.accessibilityCancelButton = value; }
  get isAccessibilityProtectedContent(): boolean { return this.nativeObject.isAccessibilityProtectedContent; }
  set isAccessibilityProtectedContent(value: boolean) { this.nativeObject.isAccessibilityProtectedContent = value; }
  get accessibilityContents(): NSArray { return this.nativeObject.accessibilityContents; }
  set accessibilityContents(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityContents = value; }
  get accessibilityLabel(): string { return this.nativeObject.accessibilityLabel; }
  set accessibilityLabel(value: string) { this.nativeObject.accessibilityLabel = value; }
  get isAccessibilityAlternateUIVisible(): boolean { return this.nativeObject.isAccessibilityAlternateUIVisible; }
  set isAccessibilityAlternateUIVisible(value: boolean) { this.nativeObject.isAccessibilityAlternateUIVisible = value; }
  get accessibilitySharedFocusElements(): NSArray { return this.nativeObject.accessibilitySharedFocusElements; }
  set accessibilitySharedFocusElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySharedFocusElements = value; }
  get isAccessibilityRequired(): boolean { return this.nativeObject.isAccessibilityRequired; }
  set isAccessibilityRequired(value: boolean) { this.nativeObject.isAccessibilityRequired = value; }
  get accessibilityCustomRotors(): NSArray { return this.nativeObject.accessibilityCustomRotors; }
  set accessibilityCustomRotors(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityCustomRotors = value; }
  get accessibilityUserInputLabels(): NSArray { return this.nativeObject.accessibilityUserInputLabels; }
  set accessibilityUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityUserInputLabels = value; }
  get accessibilityAttributedUserInputLabels(): NSArray { return this.nativeObject.accessibilityAttributedUserInputLabels; }
  set accessibilityAttributedUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityAttributedUserInputLabels = value; }
  get accessibilityApplicationFocusedUIElement(): interop.Object { return this.nativeObject.accessibilityApplicationFocusedUIElement; }
  set accessibilityApplicationFocusedUIElement(value: interop.Object) { this.nativeObject.accessibilityApplicationFocusedUIElement = value; }
  get accessibilityMainWindow(): interop.Object { return this.nativeObject.accessibilityMainWindow; }
  set accessibilityMainWindow(value: interop.Object) { this.nativeObject.accessibilityMainWindow = value; }
  get isAccessibilityHidden(): boolean { return this.nativeObject.isAccessibilityHidden; }
  set isAccessibilityHidden(value: boolean) { this.nativeObject.isAccessibilityHidden = value; }
  get isAccessibilityFrontmost(): boolean { return this.nativeObject.isAccessibilityFrontmost; }
  set isAccessibilityFrontmost(value: boolean) { this.nativeObject.isAccessibilityFrontmost = value; }
  get accessibilityFocusedWindow(): interop.Object { return this.nativeObject.accessibilityFocusedWindow; }
  set accessibilityFocusedWindow(value: interop.Object) { this.nativeObject.accessibilityFocusedWindow = value; }
  get accessibilityWindows(): NSArray { return this.nativeObject.accessibilityWindows; }
  set accessibilityWindows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityWindows = value; }
  get accessibilityExtrasMenuBar(): interop.Object { return this.nativeObject.accessibilityExtrasMenuBar; }
  set accessibilityExtrasMenuBar(value: interop.Object) { this.nativeObject.accessibilityExtrasMenuBar = value; }
  get accessibilityMenuBar(): interop.Object { return this.nativeObject.accessibilityMenuBar; }
  set accessibilityMenuBar(value: interop.Object) { this.nativeObject.accessibilityMenuBar = value; }
  get accessibilityColumnTitles(): NSArray { return this.nativeObject.accessibilityColumnTitles; }
  set accessibilityColumnTitles(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityColumnTitles = value; }
  get isAccessibilityOrderedByRow(): boolean { return this.nativeObject.isAccessibilityOrderedByRow; }
  set isAccessibilityOrderedByRow(value: boolean) { this.nativeObject.isAccessibilityOrderedByRow = value; }
  get accessibilityHorizontalUnits(): interop.Enum<typeof NSAccessibilityUnits> { return this.nativeObject.accessibilityHorizontalUnits; }
  set accessibilityHorizontalUnits(value: interop.Enum<typeof NSAccessibilityUnits>) { this.nativeObject.accessibilityHorizontalUnits = value; }
  get accessibilityVerticalUnits(): interop.Enum<typeof NSAccessibilityUnits> { return this.nativeObject.accessibilityVerticalUnits; }
  set accessibilityVerticalUnits(value: interop.Enum<typeof NSAccessibilityUnits>) { this.nativeObject.accessibilityVerticalUnits = value; }
  get accessibilityHorizontalUnitDescription(): string { return this.nativeObject.accessibilityHorizontalUnitDescription; }
  set accessibilityHorizontalUnitDescription(value: string) { this.nativeObject.accessibilityHorizontalUnitDescription = value; }
  get accessibilityVerticalUnitDescription(): string { return this.nativeObject.accessibilityVerticalUnitDescription; }
  set accessibilityVerticalUnitDescription(value: string) { this.nativeObject.accessibilityVerticalUnitDescription = value; }
  get accessibilityHandles(): NSArray { return this.nativeObject.accessibilityHandles; }
  set accessibilityHandles(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityHandles = value; }
  get accessibilityWarningValue(): interop.Object { return this.nativeObject.accessibilityWarningValue; }
  set accessibilityWarningValue(value: interop.Object) { this.nativeObject.accessibilityWarningValue = value; }
  get accessibilityCriticalValue(): interop.Object { return this.nativeObject.accessibilityCriticalValue; }
  set accessibilityCriticalValue(value: interop.Object) { this.nativeObject.accessibilityCriticalValue = value; }
  get isAccessibilityDisclosed(): boolean { return this.nativeObject.isAccessibilityDisclosed; }
  set isAccessibilityDisclosed(value: boolean) { this.nativeObject.isAccessibilityDisclosed = value; }
  get accessibilityDisclosedByRow(): interop.Object { return this.nativeObject.accessibilityDisclosedByRow; }
  set accessibilityDisclosedByRow(value: interop.Object) { this.nativeObject.accessibilityDisclosedByRow = value; }
  get accessibilityDisclosedRows(): interop.Object { return this.nativeObject.accessibilityDisclosedRows; }
  set accessibilityDisclosedRows(value: interop.Object) { this.nativeObject.accessibilityDisclosedRows = value; }
  get accessibilityDisclosureLevel(): number { return this.nativeObject.accessibilityDisclosureLevel; }
  set accessibilityDisclosureLevel(value: number) { this.nativeObject.accessibilityDisclosureLevel = value; }
  get accessibilityMarkerUIElements(): NSArray { return this.nativeObject.accessibilityMarkerUIElements; }
  set accessibilityMarkerUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityMarkerUIElements = value; }
  get accessibilityMarkerValues(): interop.Object { return this.nativeObject.accessibilityMarkerValues; }
  set accessibilityMarkerValues(value: interop.Object) { this.nativeObject.accessibilityMarkerValues = value; }
  get accessibilityMarkerGroupUIElement(): interop.Object { return this.nativeObject.accessibilityMarkerGroupUIElement; }
  set accessibilityMarkerGroupUIElement(value: interop.Object) { this.nativeObject.accessibilityMarkerGroupUIElement = value; }
  get accessibilityUnits(): interop.Enum<typeof NSAccessibilityUnits> { return this.nativeObject.accessibilityUnits; }
  set accessibilityUnits(value: interop.Enum<typeof NSAccessibilityUnits>) { this.nativeObject.accessibilityUnits = value; }
  get accessibilityUnitDescription(): string { return this.nativeObject.accessibilityUnitDescription; }
  set accessibilityUnitDescription(value: string) { this.nativeObject.accessibilityUnitDescription = value; }
  get accessibilityRulerMarkerType(): interop.Enum<typeof NSAccessibilityRulerMarkerType> { return this.nativeObject.accessibilityRulerMarkerType; }
  set accessibilityRulerMarkerType(value: interop.Enum<typeof NSAccessibilityRulerMarkerType>) { this.nativeObject.accessibilityRulerMarkerType = value; }
  get accessibilityMarkerTypeDescription(): string { return this.nativeObject.accessibilityMarkerTypeDescription; }
  set accessibilityMarkerTypeDescription(value: string) { this.nativeObject.accessibilityMarkerTypeDescription = value; }
  get accessibilityHorizontalScrollBar(): interop.Object { return this.nativeObject.accessibilityHorizontalScrollBar; }
  set accessibilityHorizontalScrollBar(value: interop.Object) { this.nativeObject.accessibilityHorizontalScrollBar = value; }
  get accessibilityVerticalScrollBar(): interop.Object { return this.nativeObject.accessibilityVerticalScrollBar; }
  set accessibilityVerticalScrollBar(value: interop.Object) { this.nativeObject.accessibilityVerticalScrollBar = value; }
  get accessibilityAllowedValues(): NSArray { return this.nativeObject.accessibilityAllowedValues; }
  set accessibilityAllowedValues(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityAllowedValues = value; }
  get accessibilityLabelUIElements(): NSArray { return this.nativeObject.accessibilityLabelUIElements; }
  set accessibilityLabelUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityLabelUIElements = value; }
  get accessibilityLabelValue(): number { return this.nativeObject.accessibilityLabelValue; }
  set accessibilityLabelValue(value: number) { this.nativeObject.accessibilityLabelValue = value; }
  get accessibilitySplitters(): NSArray { return this.nativeObject.accessibilitySplitters; }
  set accessibilitySplitters(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySplitters = value; }
  get accessibilityDecrementButton(): interop.Object { return this.nativeObject.accessibilityDecrementButton; }
  set accessibilityDecrementButton(value: interop.Object) { this.nativeObject.accessibilityDecrementButton = value; }
  get accessibilityIncrementButton(): interop.Object { return this.nativeObject.accessibilityIncrementButton; }
  set accessibilityIncrementButton(value: interop.Object) { this.nativeObject.accessibilityIncrementButton = value; }
  get accessibilityTabs(): NSArray { return this.nativeObject.accessibilityTabs; }
  set accessibilityTabs(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityTabs = value; }
  get accessibilityHeader(): interop.Object { return this.nativeObject.accessibilityHeader; }
  set accessibilityHeader(value: interop.Object) { this.nativeObject.accessibilityHeader = value; }
  get accessibilityColumnCount(): number { return this.nativeObject.accessibilityColumnCount; }
  set accessibilityColumnCount(value: number) { this.nativeObject.accessibilityColumnCount = value; }
  get accessibilityRowCount(): number { return this.nativeObject.accessibilityRowCount; }
  set accessibilityRowCount(value: number) { this.nativeObject.accessibilityRowCount = value; }
  get accessibilityIndex(): number { return this.nativeObject.accessibilityIndex; }
  set accessibilityIndex(value: number) { this.nativeObject.accessibilityIndex = value; }
  get accessibilityColumns(): NSArray { return this.nativeObject.accessibilityColumns; }
  set accessibilityColumns(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityColumns = value; }
  get accessibilityRows(): NSArray { return this.nativeObject.accessibilityRows; }
  set accessibilityRows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityRows = value; }
  get accessibilityVisibleRows(): NSArray { return this.nativeObject.accessibilityVisibleRows; }
  set accessibilityVisibleRows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleRows = value; }
  get accessibilitySelectedRows(): NSArray { return this.nativeObject.accessibilitySelectedRows; }
  set accessibilitySelectedRows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedRows = value; }
  get accessibilityVisibleColumns(): NSArray { return this.nativeObject.accessibilityVisibleColumns; }
  set accessibilityVisibleColumns(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleColumns = value; }
  get accessibilitySelectedColumns(): NSArray { return this.nativeObject.accessibilitySelectedColumns; }
  set accessibilitySelectedColumns(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedColumns = value; }
  get accessibilitySortDirection(): interop.Enum<typeof NSAccessibilitySortDirection> { return this.nativeObject.accessibilitySortDirection; }
  set accessibilitySortDirection(value: interop.Enum<typeof NSAccessibilitySortDirection>) { this.nativeObject.accessibilitySortDirection = value; }
  get accessibilityRowHeaderUIElements(): NSArray { return this.nativeObject.accessibilityRowHeaderUIElements; }
  set accessibilityRowHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityRowHeaderUIElements = value; }
  get accessibilitySelectedCells(): NSArray { return this.nativeObject.accessibilitySelectedCells; }
  set accessibilitySelectedCells(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedCells = value; }
  get accessibilityVisibleCells(): NSArray { return this.nativeObject.accessibilityVisibleCells; }
  set accessibilityVisibleCells(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleCells = value; }
  get accessibilityColumnHeaderUIElements(): NSArray { return this.nativeObject.accessibilityColumnHeaderUIElements; }
  set accessibilityColumnHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityColumnHeaderUIElements = value; }
  get accessibilityRowIndexRange(): _NSRange { return this.nativeObject.accessibilityRowIndexRange; }
  set accessibilityRowIndexRange(value: _NSRange) { this.nativeObject.accessibilityRowIndexRange = value; }
  get accessibilityColumnIndexRange(): _NSRange { return this.nativeObject.accessibilityColumnIndexRange; }
  set accessibilityColumnIndexRange(value: _NSRange) { this.nativeObject.accessibilityColumnIndexRange = value; }
  get accessibilityInsertionPointLineNumber(): number { return this.nativeObject.accessibilityInsertionPointLineNumber; }
  set accessibilityInsertionPointLineNumber(value: number) { this.nativeObject.accessibilityInsertionPointLineNumber = value; }
  get accessibilitySharedCharacterRange(): _NSRange { return this.nativeObject.accessibilitySharedCharacterRange; }
  set accessibilitySharedCharacterRange(value: _NSRange) { this.nativeObject.accessibilitySharedCharacterRange = value; }
  get accessibilitySharedTextUIElements(): NSArray { return this.nativeObject.accessibilitySharedTextUIElements; }
  set accessibilitySharedTextUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySharedTextUIElements = value; }
  get accessibilityVisibleCharacterRange(): _NSRange { return this.nativeObject.accessibilityVisibleCharacterRange; }
  set accessibilityVisibleCharacterRange(value: _NSRange) { this.nativeObject.accessibilityVisibleCharacterRange = value; }
  get accessibilityNumberOfCharacters(): number { return this.nativeObject.accessibilityNumberOfCharacters; }
  set accessibilityNumberOfCharacters(value: number) { this.nativeObject.accessibilityNumberOfCharacters = value; }
  get accessibilitySelectedText(): string { return this.nativeObject.accessibilitySelectedText; }
  set accessibilitySelectedText(value: string) { this.nativeObject.accessibilitySelectedText = value; }
  get accessibilitySelectedTextRange(): _NSRange { return this.nativeObject.accessibilitySelectedTextRange; }
  set accessibilitySelectedTextRange(value: _NSRange) { this.nativeObject.accessibilitySelectedTextRange = value; }
  get accessibilitySelectedTextRanges(): NSArray { return this.nativeObject.accessibilitySelectedTextRanges; }
  set accessibilitySelectedTextRanges(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedTextRanges = value; }
  get accessibilityToolbarButton(): interop.Object { return this.nativeObject.accessibilityToolbarButton; }
  set accessibilityToolbarButton(value: interop.Object) { this.nativeObject.accessibilityToolbarButton = value; }
  get isAccessibilityModal(): boolean { return this.nativeObject.isAccessibilityModal; }
  set isAccessibilityModal(value: boolean) { this.nativeObject.isAccessibilityModal = value; }
  get accessibilityProxy(): interop.Object { return this.nativeObject.accessibilityProxy; }
  set accessibilityProxy(value: interop.Object) { this.nativeObject.accessibilityProxy = value; }
  get isAccessibilityMain(): boolean { return this.nativeObject.isAccessibilityMain; }
  set isAccessibilityMain(value: boolean) { this.nativeObject.isAccessibilityMain = value; }
  get accessibilityFullScreenButton(): interop.Object { return this.nativeObject.accessibilityFullScreenButton; }
  set accessibilityFullScreenButton(value: interop.Object) { this.nativeObject.accessibilityFullScreenButton = value; }
  get accessibilityGrowArea(): interop.Object { return this.nativeObject.accessibilityGrowArea; }
  set accessibilityGrowArea(value: interop.Object) { this.nativeObject.accessibilityGrowArea = value; }
  get accessibilityDocument(): string { return this.nativeObject.accessibilityDocument; }
  set accessibilityDocument(value: string) { this.nativeObject.accessibilityDocument = value; }
  get accessibilityDefaultButton(): interop.Object { return this.nativeObject.accessibilityDefaultButton; }
  set accessibilityDefaultButton(value: interop.Object) { this.nativeObject.accessibilityDefaultButton = value; }
  get accessibilityCloseButton(): interop.Object { return this.nativeObject.accessibilityCloseButton; }
  set accessibilityCloseButton(value: interop.Object) { this.nativeObject.accessibilityCloseButton = value; }
  get accessibilityZoomButton(): interop.Object { return this.nativeObject.accessibilityZoomButton; }
  set accessibilityZoomButton(value: interop.Object) { this.nativeObject.accessibilityZoomButton = value; }
  get accessibilityMinimizeButton(): interop.Object { return this.nativeObject.accessibilityMinimizeButton; }
  set accessibilityMinimizeButton(value: interop.Object) { this.nativeObject.accessibilityMinimizeButton = value; }
  get isAccessibilityMinimized(): boolean { return this.nativeObject.isAccessibilityMinimized; }
  set isAccessibilityMinimized(value: boolean) { this.nativeObject.isAccessibilityMinimized = value; }
  get accessibilityCustomActions(): NSArray { return this.nativeObject.accessibilityCustomActions; }
  set accessibilityCustomActions(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityCustomActions = value; }

  set applicationShouldTerminate(value: (sender: NSApplication) => interop.Enum<typeof NSApplicationTerminateReply>) {
    this.delegate.applicationShouldTerminate = value;
  }
  set applicationOpenURLs(value: (application: NSApplication, urls: NSArray<interop.Object> | Array<interop.Object>) => void) {
    this.delegate.applicationOpenURLs = value;
  }
  set applicationOpenFile(value: (sender: NSApplication, filename: string) => boolean) {
    this.delegate.applicationOpenFile = value;
  }
  set applicationOpenFiles(value: (sender: NSApplication, filenames: NSArray<interop.Object> | Array<interop.Object>) => void) {
    this.delegate.applicationOpenFiles = value;
  }
  set applicationOpenTempFile(value: (sender: NSApplication, filename: string) => boolean) {
    this.delegate.applicationOpenTempFile = value;
  }
  set applicationShouldOpenUntitledFile(value: (sender: NSApplication) => boolean) {
    this.delegate.applicationShouldOpenUntitledFile = value;
  }
  set applicationOpenUntitledFile(value: (sender: NSApplication) => boolean) {
    this.delegate.applicationOpenUntitledFile = value;
  }
  set applicationOpenFileWithoutUI(value: (sender: interop.Object, filename: string) => boolean) {
    this.delegate.applicationOpenFileWithoutUI = value;
  }
  set applicationPrintFile(value: (sender: NSApplication, filename: string) => boolean) {
    this.delegate.applicationPrintFile = value;
  }
  set applicationPrintFilesWithSettingsShowPrintPanels(value: (application: NSApplication, fileNames: NSArray<interop.Object> | Array<interop.Object>, printSettings: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, showPrintPanels: boolean) => interop.Enum<typeof NSApplicationPrintReply>) {
    this.delegate.applicationPrintFilesWithSettingsShowPrintPanels = value;
  }
  set applicationShouldTerminateAfterLastWindowClosed(value: (sender: NSApplication) => boolean) {
    this.delegate.applicationShouldTerminateAfterLastWindowClosed = value;
  }
  set applicationShouldHandleReopenHasVisibleWindows(value: (sender: NSApplication, flag: boolean) => boolean) {
    this.delegate.applicationShouldHandleReopenHasVisibleWindows = value;
  }
  set applicationDockMenu(value: (sender: NSApplication) => NSMenu) {
    this.delegate.applicationDockMenu = value;
  }
  set applicationWillPresentError(value: (application: NSApplication, error: NSError) => NSError) {
    this.delegate.applicationWillPresentError = value;
  }
  set applicationDidRegisterForRemoteNotificationsWithDeviceToken(value: (application: NSApplication, deviceToken: NSData) => void) {
    this.delegate.applicationDidRegisterForRemoteNotificationsWithDeviceToken = value;
  }
  set applicationDidFailToRegisterForRemoteNotificationsWithError(value: (application: NSApplication, error: NSError) => void) {
    this.delegate.applicationDidFailToRegisterForRemoteNotificationsWithError = value;
  }
  set applicationDidReceiveRemoteNotification(value: (application: NSApplication, userInfo: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) => void) {
    this.delegate.applicationDidReceiveRemoteNotification = value;
  }
  set applicationSupportsSecureRestorableState(value: (app: NSApplication) => boolean) {
    this.delegate.applicationSupportsSecureRestorableState = value;
  }
  set applicationHandlerForIntent(value: (application: NSApplication, intent: INIntent) => interop.Object) {
    this.delegate.applicationHandlerForIntent = value;
  }
  set applicationWillEncodeRestorableState(value: (app: NSApplication, coder: NSCoder) => void) {
    this.delegate.applicationWillEncodeRestorableState = value;
  }
  set applicationDidDecodeRestorableState(value: (app: NSApplication, coder: NSCoder) => void) {
    this.delegate.applicationDidDecodeRestorableState = value;
  }
  set applicationWillContinueUserActivityWithType(value: (application: NSApplication, userActivityType: string) => boolean) {
    this.delegate.applicationWillContinueUserActivityWithType = value;
  }
  set applicationContinueUserActivityRestorationHandler(value: (application: NSApplication, userActivity: NSUserActivity, restorationHandler: (p1: NSArray<interop.Object> | Array<interop.Object>) => void) => boolean) {
    this.delegate.applicationContinueUserActivityRestorationHandler = value;
  }
  set applicationDidFailToContinueUserActivityWithTypeError(value: (application: NSApplication, userActivityType: string, error: NSError) => void) {
    this.delegate.applicationDidFailToContinueUserActivityWithTypeError = value;
  }
  set applicationDidUpdateUserActivity(value: (application: NSApplication, userActivity: NSUserActivity) => void) {
    this.delegate.applicationDidUpdateUserActivity = value;
  }
  set applicationUserDidAcceptCloudKitShareWithMetadata(value: (application: NSApplication, metadata: CKShareMetadata) => void) {
    this.delegate.applicationUserDidAcceptCloudKitShareWithMetadata = value;
  }
  set applicationDelegateHandlesKey(value: (sender: NSApplication, key: string) => boolean) {
    this.delegate.applicationDelegateHandlesKey = value;
  }
  set applicationShouldAutomaticallyLocalizeKeyEquivalents(value: (application: NSApplication) => boolean) {
    this.delegate.applicationShouldAutomaticallyLocalizeKeyEquivalents = value;
  }
  set applicationWillFinishLaunching(value: (notification: NSNotification) => void) {
    this.delegate.applicationWillFinishLaunching = value;
  }
  set applicationDidFinishLaunching(value: (notification: NSNotification) => void) {
    this.delegate.applicationDidFinishLaunching = value;
  }
  set applicationWillHide(value: (notification: NSNotification) => void) {
    this.delegate.applicationWillHide = value;
  }
  set applicationDidHide(value: (notification: NSNotification) => void) {
    this.delegate.applicationDidHide = value;
  }
  set applicationWillUnhide(value: (notification: NSNotification) => void) {
    this.delegate.applicationWillUnhide = value;
  }
  set applicationDidUnhide(value: (notification: NSNotification) => void) {
    this.delegate.applicationDidUnhide = value;
  }
  set applicationWillBecomeActive(value: (notification: NSNotification) => void) {
    this.delegate.applicationWillBecomeActive = value;
  }
  set applicationDidBecomeActive(value: (notification: NSNotification) => void) {
    this.delegate.applicationDidBecomeActive = value;
  }
  set applicationWillResignActive(value: (notification: NSNotification) => void) {
    this.delegate.applicationWillResignActive = value;
  }
  set applicationDidResignActive(value: (notification: NSNotification) => void) {
    this.delegate.applicationDidResignActive = value;
  }
  set applicationWillUpdate(value: (notification: NSNotification) => void) {
    this.delegate.applicationWillUpdate = value;
  }
  set applicationDidUpdate(value: (notification: NSNotification) => void) {
    this.delegate.applicationDidUpdate = value;
  }
  set applicationWillTerminate(value: (notification: NSNotification) => void) {
    this.delegate.applicationWillTerminate = value;
  }
  set applicationDidChangeScreenParameters(value: (notification: NSNotification) => void) {
    this.delegate.applicationDidChangeScreenParameters = value;
  }
  set applicationDidChangeOcclusionState(value: (notification: NSNotification) => void) {
    this.delegate.applicationDidChangeOcclusionState = value;
  }
  set applicationProtectedDataWillBecomeUnavailable(value: (notification: NSNotification) => void) {
    this.delegate.applicationProtectedDataWillBecomeUnavailable = value;
  }
  set applicationProtectedDataDidBecomeAvailable(value: (notification: NSNotification) => void) {
    this.delegate.applicationProtectedDataDidBecomeAvailable = value;
  }
}

export class HTMLNSTouchBarItemElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTouchBarItem.new();

  get identifier(): string { return this.nativeObject.identifier; }
  get visibilityPriority(): number { return this.nativeObject.visibilityPriority; }
  set visibilityPriority(value: number) { this.nativeObject.visibilityPriority = value; }
  get view(): NSView { return this.nativeObject.view; }
  get viewController(): NSViewController { return this.nativeObject.viewController; }
  get customizationLabel(): string { return this.nativeObject.customizationLabel; }
  get isVisible(): boolean { return this.nativeObject.isVisible; }
}

export class HTMLNSCandidateListTouchBarItemElement extends HTMLNSTouchBarItemElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSCandidateListTouchBarItem.new();
  get delegate(): NSCandidateListTouchBarItemDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSCandidateListTouchBarItemDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSCandidateListTouchBarItemDelegateImpl;
  }

  get client(): NSView { return this.nativeObject.client; }
  set client(value: NSView) { this.nativeObject.client = value; }
  get isCollapsed(): boolean { return this.nativeObject.isCollapsed; }
  set isCollapsed(value: boolean) { this.nativeObject.isCollapsed = value; }
  get allowsCollapsing(): boolean { return this.nativeObject.allowsCollapsing; }
  set allowsCollapsing(value: boolean) { this.nativeObject.allowsCollapsing = value; }
  get isCandidateListVisible(): boolean { return this.nativeObject.isCandidateListVisible; }
  get allowsTextInputContextCandidates(): boolean { return this.nativeObject.allowsTextInputContextCandidates; }
  set allowsTextInputContextCandidates(value: boolean) { this.nativeObject.allowsTextInputContextCandidates = value; }
  get attributedStringForCandidate(): (p1: interop.Object, p2: number) => NSAttributedString { return this.nativeObject.attributedStringForCandidate; }
  set attributedStringForCandidate(value: (p1: interop.Object, p2: number) => NSAttributedString) { this.nativeObject.attributedStringForCandidate = value; }
  get candidates(): NSArray { return this.nativeObject.candidates; }
  get customizationLabel(): string { return this.nativeObject.customizationLabel; }
  set customizationLabel(value: string) { this.nativeObject.customizationLabel = value; }

  set candidateListTouchBarItemBeginSelectingCandidateAtIndex(value: (anItem: NSCandidateListTouchBarItem, index: number) => void) {
    this.delegate.candidateListTouchBarItemBeginSelectingCandidateAtIndex = value;
  }
  set candidateListTouchBarItemChangeSelectionFromCandidateAtIndexToIndex(value: (anItem: NSCandidateListTouchBarItem, previousIndex: number, index: number) => void) {
    this.delegate.candidateListTouchBarItemChangeSelectionFromCandidateAtIndexToIndex = value;
  }
  set candidateListTouchBarItemEndSelectingCandidateAtIndex(value: (anItem: NSCandidateListTouchBarItem, index: number) => void) {
    this.delegate.candidateListTouchBarItemEndSelectingCandidateAtIndex = value;
  }
  set candidateListTouchBarItemChangedCandidateListVisibility(value: (anItem: NSCandidateListTouchBarItem, isVisible: boolean) => void) {
    this.delegate.candidateListTouchBarItemChangedCandidateListVisibility = value;
  }
}

export class HTMLNSWindowControllerElement extends HTMLNSResponderElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSWindowController.new();

  get windowNibName(): string { return this.nativeObject.windowNibName; }
  get windowNibPath(): string { return this.nativeObject.windowNibPath; }
  get owner(): interop.Object | null { return this.nativeObject.owner; }
  get windowFrameAutosaveName(): string { return this.nativeObject.windowFrameAutosaveName; }
  set windowFrameAutosaveName(value: string) { this.nativeObject.windowFrameAutosaveName = value; }
  get shouldCascadeWindows(): boolean { return this.nativeObject.shouldCascadeWindows; }
  set shouldCascadeWindows(value: boolean) { this.nativeObject.shouldCascadeWindows = value; }
  get previewRepresentableActivityItems(): NSArray { return this.nativeObject.previewRepresentableActivityItems; }
  set previewRepresentableActivityItems(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.previewRepresentableActivityItems = value; }
  get document(): interop.Object { return this.nativeObject.document; }
  set document(value: interop.Object) { this.nativeObject.document = value; }
  get shouldCloseDocument(): boolean { return this.nativeObject.shouldCloseDocument; }
  set shouldCloseDocument(value: boolean) { this.nativeObject.shouldCloseDocument = value; }
  get contentViewController(): NSViewController { return this.nativeObject.contentViewController; }
  set contentViewController(value: NSViewController) { this.nativeObject.contentViewController = value; }
  get window(): NSWindow { return this.nativeObject.window; }
  set window(value: NSWindow) { this.nativeObject.window = value; }
  get isWindowLoaded(): boolean { return this.nativeObject.isWindowLoaded; }
  get storyboard(): NSStoryboard { return this.nativeObject.storyboard; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLNSTextFieldCellElement extends HTMLNSActionCellElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTextFieldCell.new();

  get backgroundColor(): NSColor { return this.nativeObject.backgroundColor; }
  set backgroundColor(value: NSColor) { this.nativeObject.backgroundColor = value; }
  get drawsBackground(): boolean { return this.nativeObject.drawsBackground; }
  set drawsBackground(value: boolean) { this.nativeObject.drawsBackground = value; }
  get textColor(): NSColor { return this.nativeObject.textColor; }
  set textColor(value: NSColor) { this.nativeObject.textColor = value; }
  get bezelStyle(): interop.Enum<typeof NSTextFieldBezelStyle> { return this.nativeObject.bezelStyle; }
  set bezelStyle(value: interop.Enum<typeof NSTextFieldBezelStyle>) { this.nativeObject.bezelStyle = value; }
  get placeholderString(): string { return this.nativeObject.placeholderString; }
  set placeholderString(value: string) { this.nativeObject.placeholderString = value; }
  get placeholderAttributedString(): NSAttributedString { return this.nativeObject.placeholderAttributedString; }
  set placeholderAttributedString(value: NSAttributedString) { this.nativeObject.placeholderAttributedString = value; }
  get allowedInputSourceLocales(): NSArray { return this.nativeObject.allowedInputSourceLocales; }
  set allowedInputSourceLocales(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.allowedInputSourceLocales = value; }
}

export class HTMLNSSliderCellElement extends HTMLNSActionCellElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSSliderCell.new();

  get minValue(): number { return this.nativeObject.minValue; }
  set minValue(value: number) { this.nativeObject.minValue = value; }
  get maxValue(): number { return this.nativeObject.maxValue; }
  set maxValue(value: number) { this.nativeObject.maxValue = value; }
  get altIncrementValue(): number { return this.nativeObject.altIncrementValue; }
  set altIncrementValue(value: number) { this.nativeObject.altIncrementValue = value; }
  get sliderType(): interop.Enum<typeof NSSliderType> { return this.nativeObject.sliderType; }
  set sliderType(value: interop.Enum<typeof NSSliderType>) { this.nativeObject.sliderType = value; }
  get isVertical(): boolean { return this.nativeObject.isVertical; }
  set isVertical(value: boolean) { this.nativeObject.isVertical = value; }
  get trackRect(): CGRect { return this.nativeObject.trackRect; }
  get knobThickness(): number { return this.nativeObject.knobThickness; }
  get numberOfTickMarks(): number { return this.nativeObject.numberOfTickMarks; }
  set numberOfTickMarks(value: number) { this.nativeObject.numberOfTickMarks = value; }
  get tickMarkPosition(): interop.Enum<typeof NSTickMarkPosition> { return this.nativeObject.tickMarkPosition; }
  set tickMarkPosition(value: interop.Enum<typeof NSTickMarkPosition>) { this.nativeObject.tickMarkPosition = value; }
  get allowsTickMarkValuesOnly(): boolean { return this.nativeObject.allowsTickMarkValuesOnly; }
  set allowsTickMarkValuesOnly(value: boolean) { this.nativeObject.allowsTickMarkValuesOnly = value; }
  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get image(): NSImage { return this.nativeObject.image; }
  set image(value: NSImage) { this.nativeObject.image = value; }
}

export class HTMLNSTokenFieldCellElement extends HTMLNSTextFieldCellElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTokenFieldCell.new();
  get delegate(): NSTokenFieldCellDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSTokenFieldCellDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSTokenFieldCellDelegateImpl;
  }

  get tokenStyle(): interop.Enum<typeof NSTokenStyle> { return this.nativeObject.tokenStyle; }
  set tokenStyle(value: interop.Enum<typeof NSTokenStyle>) { this.nativeObject.tokenStyle = value; }
  get completionDelay(): number { return this.nativeObject.completionDelay; }
  set completionDelay(value: number) { this.nativeObject.completionDelay = value; }
  get tokenizingCharacterSet(): NSCharacterSet { return this.nativeObject.tokenizingCharacterSet; }
  set tokenizingCharacterSet(value: NSCharacterSet) { this.nativeObject.tokenizingCharacterSet = value; }

  set tokenFieldCellCompletionsForSubstringIndexOfTokenIndexOfSelectedItem(value: (tokenFieldCell: NSTokenFieldCell, substring: string, tokenIndex: number, selectedIndex: interop.PointerConvertible) => NSArray) {
    this.delegate.tokenFieldCellCompletionsForSubstringIndexOfTokenIndexOfSelectedItem = value;
  }
  set tokenFieldCellShouldAddObjectsAtIndex(value: (tokenFieldCell: NSTokenFieldCell, tokens: NSArray<interop.Object> | Array<interop.Object>, index: number) => NSArray) {
    this.delegate.tokenFieldCellShouldAddObjectsAtIndex = value;
  }
  set tokenFieldCellDisplayStringForRepresentedObject(value: (tokenFieldCell: NSTokenFieldCell, representedObject: interop.Object) => string) {
    this.delegate.tokenFieldCellDisplayStringForRepresentedObject = value;
  }
  set tokenFieldCellEditingStringForRepresentedObject(value: (tokenFieldCell: NSTokenFieldCell, representedObject: interop.Object) => string) {
    this.delegate.tokenFieldCellEditingStringForRepresentedObject = value;
  }
  set tokenFieldCellRepresentedObjectForEditingString(value: (tokenFieldCell: NSTokenFieldCell, editingString: string) => interop.Object) {
    this.delegate.tokenFieldCellRepresentedObjectForEditingString = value;
  }
  set tokenFieldCellWriteRepresentedObjectsToPasteboard(value: (tokenFieldCell: NSTokenFieldCell, objects: NSArray<interop.Object> | Array<interop.Object>, pboard: NSPasteboard) => boolean) {
    this.delegate.tokenFieldCellWriteRepresentedObjectsToPasteboard = value;
  }
  set tokenFieldCellReadFromPasteboard(value: (tokenFieldCell: NSTokenFieldCell, pboard: NSPasteboard) => NSArray) {
    this.delegate.tokenFieldCellReadFromPasteboard = value;
  }
  set tokenFieldCellMenuForRepresentedObject(value: (tokenFieldCell: NSTokenFieldCell, representedObject: interop.Object) => NSMenu) {
    this.delegate.tokenFieldCellMenuForRepresentedObject = value;
  }
  set tokenFieldCellHasMenuForRepresentedObject(value: (tokenFieldCell: NSTokenFieldCell, representedObject: interop.Object) => boolean) {
    this.delegate.tokenFieldCellHasMenuForRepresentedObject = value;
  }
  set tokenFieldCellStyleForRepresentedObject(value: (tokenFieldCell: NSTokenFieldCell, representedObject: interop.Object) => interop.Enum<typeof NSTokenStyle>) {
    this.delegate.tokenFieldCellStyleForRepresentedObject = value;
  }
}

export class HTMLNSSharingServicePickerToolbarItemElement extends HTMLNSToolbarItemElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSSharingServicePickerToolbarItem.new();

  get delegate(): NSSharingServicePickerToolbarItemDelegate | null { return this.nativeObject.delegate; }
  set delegate(value: NSSharingServicePickerToolbarItemDelegate | null) { this.nativeObject.delegate = value; }
}

export class HTMLNSButtonTouchBarItemElement extends HTMLNSTouchBarItemElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSButtonTouchBarItem.new();

  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get image(): NSImage { return this.nativeObject.image; }
  set image(value: NSImage) { this.nativeObject.image = value; }
  get bezelColor(): NSColor { return this.nativeObject.bezelColor; }
  set bezelColor(value: NSColor) { this.nativeObject.bezelColor = value; }
  get target(): interop.Object { return this.nativeObject.target; }
  set target(value: interop.Object) { this.nativeObject.target = value; }
  get action(): string { return this.nativeObject.action; }
  set action(value: string) { this.nativeObject.action = value; }
  get isEnabled(): boolean { return this.nativeObject.isEnabled; }
  set isEnabled(value: boolean) { this.nativeObject.isEnabled = value; }
  get customizationLabel(): string { return this.nativeObject.customizationLabel; }
  set customizationLabel(value: string) { this.nativeObject.customizationLabel = value; }
}

export class HTMLNSTextTableBlockElement extends HTMLNSTextBlockElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTextTableBlock.new();

  get table(): NSTextTable { return this.nativeObject.table; }
  get startingRow(): number { return this.nativeObject.startingRow; }
  get rowSpan(): number { return this.nativeObject.rowSpan; }
  get startingColumn(): number { return this.nativeObject.startingColumn; }
  get columnSpan(): number { return this.nativeObject.columnSpan; }
}

export class HTMLNSComboBoxCellElement extends HTMLNSTextFieldCellElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSComboBoxCell.new();

  get hasVerticalScroller(): boolean { return this.nativeObject.hasVerticalScroller; }
  set hasVerticalScroller(value: boolean) { this.nativeObject.hasVerticalScroller = value; }
  get intercellSpacing(): CGSize { return this.nativeObject.intercellSpacing; }
  set intercellSpacing(value: CGSize) { this.nativeObject.intercellSpacing = value; }
  get itemHeight(): number { return this.nativeObject.itemHeight; }
  set itemHeight(value: number) { this.nativeObject.itemHeight = value; }
  get numberOfVisibleItems(): number { return this.nativeObject.numberOfVisibleItems; }
  set numberOfVisibleItems(value: number) { this.nativeObject.numberOfVisibleItems = value; }
  get isButtonBordered(): boolean { return this.nativeObject.isButtonBordered; }
  set isButtonBordered(value: boolean) { this.nativeObject.isButtonBordered = value; }
  get usesDataSource(): boolean { return this.nativeObject.usesDataSource; }
  set usesDataSource(value: boolean) { this.nativeObject.usesDataSource = value; }
  get indexOfSelectedItem(): number { return this.nativeObject.indexOfSelectedItem; }
  get numberOfItems(): number { return this.nativeObject.numberOfItems; }
  get completes(): boolean { return this.nativeObject.completes; }
  set completes(value: boolean) { this.nativeObject.completes = value; }
  get dataSource(): NSComboBoxCellDataSource { return this.nativeObject.dataSource; }
  set dataSource(value: NSComboBoxCellDataSource) { this.nativeObject.dataSource = value; }
  get objectValueOfSelectedItem(): interop.Object { return this.nativeObject.objectValueOfSelectedItem; }
  get objectValues(): NSArray { return this.nativeObject.objectValues; }
}

export class HTMLNSSecureTextFieldCellElement extends HTMLNSTextFieldCellElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSSecureTextFieldCell.new();

  get echosBullets(): boolean { return this.nativeObject.echosBullets; }
  set echosBullets(value: boolean) { this.nativeObject.echosBullets = value; }
}

export class HTMLNSTrackingSeparatorToolbarItemElement extends HTMLNSToolbarItemElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTrackingSeparatorToolbarItem.new();

  get splitView(): NSSplitView { return this.nativeObject.splitView; }
  set splitView(value: NSSplitView) { this.nativeObject.splitView = value; }
  get dividerIndex(): number { return this.nativeObject.dividerIndex; }
  set dividerIndex(value: number) { this.nativeObject.dividerIndex = value; }
}

export class HTMLNSStepperCellElement extends HTMLNSActionCellElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSStepperCell.new();

  get minValue(): number { return this.nativeObject.minValue; }
  set minValue(value: number) { this.nativeObject.minValue = value; }
  get maxValue(): number { return this.nativeObject.maxValue; }
  set maxValue(value: number) { this.nativeObject.maxValue = value; }
  get increment(): number { return this.nativeObject.increment; }
  set increment(value: number) { this.nativeObject.increment = value; }
  get valueWraps(): boolean { return this.nativeObject.valueWraps; }
  set valueWraps(value: boolean) { this.nativeObject.valueWraps = value; }
  get autorepeat(): boolean { return this.nativeObject.autorepeat; }
  set autorepeat(value: boolean) { this.nativeObject.autorepeat = value; }
}

export class HTMLNSPopoverTouchBarItemElement extends HTMLNSTouchBarItemElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSPopoverTouchBarItem.new();

  get popoverTouchBar(): NSTouchBar { return this.nativeObject.popoverTouchBar; }
  set popoverTouchBar(value: NSTouchBar) { this.nativeObject.popoverTouchBar = value; }
  get customizationLabel(): string { return this.nativeObject.customizationLabel; }
  set customizationLabel(value: string) { this.nativeObject.customizationLabel = value; }
  get collapsedRepresentation(): NSView { return this.nativeObject.collapsedRepresentation; }
  set collapsedRepresentation(value: NSView) { this.nativeObject.collapsedRepresentation = value; }
  get collapsedRepresentationImage(): NSImage { return this.nativeObject.collapsedRepresentationImage; }
  set collapsedRepresentationImage(value: NSImage) { this.nativeObject.collapsedRepresentationImage = value; }
  get collapsedRepresentationLabel(): string { return this.nativeObject.collapsedRepresentationLabel; }
  set collapsedRepresentationLabel(value: string) { this.nativeObject.collapsedRepresentationLabel = value; }
  get pressAndHoldTouchBar(): NSTouchBar { return this.nativeObject.pressAndHoldTouchBar; }
  set pressAndHoldTouchBar(value: NSTouchBar) { this.nativeObject.pressAndHoldTouchBar = value; }
  get showsCloseButton(): boolean { return this.nativeObject.showsCloseButton; }
  set showsCloseButton(value: boolean) { this.nativeObject.showsCloseButton = value; }
}

export class HTMLNSPersistentDocumentElement extends HTMLNSDocumentElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSPersistentDocument.new();

  get managedObjectContext(): NSManagedObjectContext { return this.nativeObject.managedObjectContext; }
  set managedObjectContext(value: NSManagedObjectContext) { this.nativeObject.managedObjectContext = value; }
  get managedObjectModel(): NSManagedObjectModel { return this.nativeObject.managedObjectModel; }
}

export class HTMLNSColorPickerTouchBarItemElement extends HTMLNSTouchBarItemElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSColorPickerTouchBarItem.new();

  get color(): NSColor { return this.nativeObject.color; }
  set color(value: NSColor) { this.nativeObject.color = value; }
  get showsAlpha(): boolean { return this.nativeObject.showsAlpha; }
  set showsAlpha(value: boolean) { this.nativeObject.showsAlpha = value; }
  get allowedColorSpaces(): NSArray { return this.nativeObject.allowedColorSpaces; }
  set allowedColorSpaces(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.allowedColorSpaces = value; }
  get colorList(): NSColorList { return this.nativeObject.colorList; }
  set colorList(value: NSColorList) { this.nativeObject.colorList = value; }
  get customizationLabel(): string { return this.nativeObject.customizationLabel; }
  set customizationLabel(value: string) { this.nativeObject.customizationLabel = value; }
  get target(): interop.Object { return this.nativeObject.target; }
  set target(value: interop.Object) { this.nativeObject.target = value; }
  get action(): string { return this.nativeObject.action; }
  set action(value: string) { this.nativeObject.action = value; }
  get isEnabled(): boolean { return this.nativeObject.isEnabled; }
  set isEnabled(value: boolean) { this.nativeObject.isEnabled = value; }
}

export class HTMLNSEPSImageRepElement extends HTMLNSImageRepElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSEPSImageRep.new();

  get boundingBox(): CGRect { return this.nativeObject.boundingBox; }
  get EPSRepresentation(): NSData { return this.nativeObject.EPSRepresentation; }
}

export class HTMLNSCIImageRepElement extends HTMLNSImageRepElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSCIImageRep.new();

  get CIImage(): CIImage { return this.nativeObject.CIImage; }
}

export class HTMLNSBitmapImageRepElement extends HTMLNSImageRepElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSBitmapImageRep.new();

  get bitmapData(): interop.Pointer { return this.nativeObject.bitmapData; }
  get isPlanar(): boolean { return this.nativeObject.isPlanar; }
  get samplesPerPixel(): number { return this.nativeObject.samplesPerPixel; }
  get bitsPerPixel(): number { return this.nativeObject.bitsPerPixel; }
  get bytesPerRow(): number { return this.nativeObject.bytesPerRow; }
  get bytesPerPlane(): number { return this.nativeObject.bytesPerPlane; }
  get numberOfPlanes(): number { return this.nativeObject.numberOfPlanes; }
  get bitmapFormat(): interop.Enum<typeof NSBitmapFormat> { return this.nativeObject.bitmapFormat; }
  get TIFFRepresentation(): NSData { return this.nativeObject.TIFFRepresentation; }
  get CGImage(): interop.Pointer { return this.nativeObject.CGImage; }
  get colorSpace(): NSColorSpace { return this.nativeObject.colorSpace; }
}

export class HTMLNSMutableFontCollectionElement extends HTMLNSFontCollectionElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSMutableFontCollection.new();

  get queryDescriptors(): NSArray { return this.nativeObject.queryDescriptors; }
  set queryDescriptors(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.queryDescriptors = value; }
  get exclusionDescriptors(): NSArray { return this.nativeObject.exclusionDescriptors; }
  set exclusionDescriptors(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.exclusionDescriptors = value; }
}

export class HTMLNSCollectionViewElement extends HTMLNSViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSCollectionView.new();
  get delegate(): NSCollectionViewDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSCollectionViewDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSCollectionViewDelegateImpl;
  }

  get dataSource(): NSCollectionViewDataSource { return this.nativeObject.dataSource; }
  set dataSource(value: NSCollectionViewDataSource) { this.nativeObject.dataSource = value; }
  get prefetchDataSource(): NSCollectionViewPrefetching { return this.nativeObject.prefetchDataSource; }
  set prefetchDataSource(value: NSCollectionViewPrefetching) { this.nativeObject.prefetchDataSource = value; }
  get content(): NSArray { return this.nativeObject.content; }
  set content(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.content = value; }
  get backgroundView(): NSView { return this.nativeObject.backgroundView; }
  set backgroundView(value: NSView) { this.nativeObject.backgroundView = value; }
  get backgroundViewScrollsWithContent(): boolean { return this.nativeObject.backgroundViewScrollsWithContent; }
  set backgroundViewScrollsWithContent(value: boolean) { this.nativeObject.backgroundViewScrollsWithContent = value; }
  get collectionViewLayout(): NSCollectionViewLayout { return this.nativeObject.collectionViewLayout; }
  set collectionViewLayout(value: NSCollectionViewLayout) { this.nativeObject.collectionViewLayout = value; }
  get backgroundColors(): NSArray { return this.nativeObject.backgroundColors; }
  set backgroundColors(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.backgroundColors = value; }
  get numberOfSections(): number { return this.nativeObject.numberOfSections; }
  get isFirstResponder(): boolean { return this.nativeObject.isFirstResponder; }
  get isSelectable(): boolean { return this.nativeObject.isSelectable; }
  set isSelectable(value: boolean) { this.nativeObject.isSelectable = value; }
  get allowsEmptySelection(): boolean { return this.nativeObject.allowsEmptySelection; }
  set allowsEmptySelection(value: boolean) { this.nativeObject.allowsEmptySelection = value; }
  get allowsMultipleSelection(): boolean { return this.nativeObject.allowsMultipleSelection; }
  set allowsMultipleSelection(value: boolean) { this.nativeObject.allowsMultipleSelection = value; }
  get selectionIndexes(): NSIndexSet { return this.nativeObject.selectionIndexes; }
  set selectionIndexes(value: NSIndexSet) { this.nativeObject.selectionIndexes = value; }
  get selectionIndexPaths(): NSSet { return this.nativeObject.selectionIndexPaths; }
  set selectionIndexPaths(value: NSSet) { this.nativeObject.selectionIndexPaths = value; }
  get itemPrototype(): NSCollectionViewItem { return this.nativeObject.itemPrototype; }
  set itemPrototype(value: NSCollectionViewItem) { this.nativeObject.itemPrototype = value; }
  get maxNumberOfRows(): number { return this.nativeObject.maxNumberOfRows; }
  set maxNumberOfRows(value: number) { this.nativeObject.maxNumberOfRows = value; }
  get maxNumberOfColumns(): number { return this.nativeObject.maxNumberOfColumns; }
  set maxNumberOfColumns(value: number) { this.nativeObject.maxNumberOfColumns = value; }
  get minItemSize(): CGSize { return this.nativeObject.minItemSize; }
  set minItemSize(value: CGSize) { this.nativeObject.minItemSize = value; }
  get maxItemSize(): CGSize { return this.nativeObject.maxItemSize; }
  set maxItemSize(value: CGSize) { this.nativeObject.maxItemSize = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }

  set collectionViewCanDragItemsAtIndexPathsWithEvent(value: (collectionView: NSCollectionView, indexPaths: NSSet, event: NSEvent) => boolean) {
    this.delegate.collectionViewCanDragItemsAtIndexPathsWithEvent = value;
  }
  set collectionViewCanDragItemsAtIndexesWithEvent(value: (collectionView: NSCollectionView, indexes: NSIndexSet, event: NSEvent) => boolean) {
    this.delegate.collectionViewCanDragItemsAtIndexesWithEvent = value;
  }
  set collectionViewWriteItemsAtIndexPathsToPasteboard(value: (collectionView: NSCollectionView, indexPaths: NSSet, pasteboard: NSPasteboard) => boolean) {
    this.delegate.collectionViewWriteItemsAtIndexPathsToPasteboard = value;
  }
  set collectionViewWriteItemsAtIndexesToPasteboard(value: (collectionView: NSCollectionView, indexes: NSIndexSet, pasteboard: NSPasteboard) => boolean) {
    this.delegate.collectionViewWriteItemsAtIndexesToPasteboard = value;
  }
  set collectionViewNamesOfPromisedFilesDroppedAtDestinationForDraggedItemsAtIndexPaths(value: (collectionView: NSCollectionView, dropURL: NSURL, indexPaths: NSSet) => NSArray) {
    this.delegate.collectionViewNamesOfPromisedFilesDroppedAtDestinationForDraggedItemsAtIndexPaths = value;
  }
  set collectionViewNamesOfPromisedFilesDroppedAtDestinationForDraggedItemsAtIndexes(value: (collectionView: NSCollectionView, dropURL: NSURL, indexes: NSIndexSet) => NSArray) {
    this.delegate.collectionViewNamesOfPromisedFilesDroppedAtDestinationForDraggedItemsAtIndexes = value;
  }
  set collectionViewDraggingImageForItemsAtIndexPathsWithEventOffset(value: (collectionView: NSCollectionView, indexPaths: NSSet, event: NSEvent, dragImageOffset: interop.PointerConvertible) => NSImage) {
    this.delegate.collectionViewDraggingImageForItemsAtIndexPathsWithEventOffset = value;
  }
  set collectionViewDraggingImageForItemsAtIndexesWithEventOffset(value: (collectionView: NSCollectionView, indexes: NSIndexSet, event: NSEvent, dragImageOffset: interop.PointerConvertible) => NSImage) {
    this.delegate.collectionViewDraggingImageForItemsAtIndexesWithEventOffset = value;
  }
  set collectionViewValidateDropProposedIndexPathDropOperation(value: (collectionView: NSCollectionView, draggingInfo: NSDraggingInfo, proposedDropIndexPath: interop.PointerConvertible, proposedDropOperation: interop.PointerConvertible) => interop.Enum<typeof NSDragOperation>) {
    this.delegate.collectionViewValidateDropProposedIndexPathDropOperation = value;
  }
  set collectionViewValidateDropProposedIndexDropOperation(value: (collectionView: NSCollectionView, draggingInfo: NSDraggingInfo, proposedDropIndex: interop.PointerConvertible, proposedDropOperation: interop.PointerConvertible) => interop.Enum<typeof NSDragOperation>) {
    this.delegate.collectionViewValidateDropProposedIndexDropOperation = value;
  }
  set collectionViewAcceptDropIndexPathDropOperation(value: (collectionView: NSCollectionView, draggingInfo: NSDraggingInfo, indexPath: NSIndexPath, dropOperation: interop.Enum<typeof NSCollectionViewDropOperation>) => boolean) {
    this.delegate.collectionViewAcceptDropIndexPathDropOperation = value;
  }
  set collectionViewAcceptDropIndexDropOperation(value: (collectionView: NSCollectionView, draggingInfo: NSDraggingInfo, index: number, dropOperation: interop.Enum<typeof NSCollectionViewDropOperation>) => boolean) {
    this.delegate.collectionViewAcceptDropIndexDropOperation = value;
  }
  set collectionViewPasteboardWriterForItemAtIndexPath(value: (collectionView: NSCollectionView, indexPath: NSIndexPath) => NSPasteboardWriting) {
    this.delegate.collectionViewPasteboardWriterForItemAtIndexPath = value;
  }
  set collectionViewPasteboardWriterForItemAtIndex(value: (collectionView: NSCollectionView, index: number) => NSPasteboardWriting) {
    this.delegate.collectionViewPasteboardWriterForItemAtIndex = value;
  }
  set collectionViewDraggingSessionWillBeginAtPointForItemsAtIndexPaths(value: (collectionView: NSCollectionView, session: NSDraggingSession, screenPoint: CGPoint, indexPaths: NSSet) => void) {
    this.delegate.collectionViewDraggingSessionWillBeginAtPointForItemsAtIndexPaths = value;
  }
  set collectionViewDraggingSessionWillBeginAtPointForItemsAtIndexes(value: (collectionView: NSCollectionView, session: NSDraggingSession, screenPoint: CGPoint, indexes: NSIndexSet) => void) {
    this.delegate.collectionViewDraggingSessionWillBeginAtPointForItemsAtIndexes = value;
  }
  set collectionViewDraggingSessionEndedAtPointDragOperation(value: (collectionView: NSCollectionView, session: NSDraggingSession, screenPoint: CGPoint, operation: interop.Enum<typeof NSDragOperation>) => void) {
    this.delegate.collectionViewDraggingSessionEndedAtPointDragOperation = value;
  }
  set collectionViewUpdateDraggingItemsForDrag(value: (collectionView: NSCollectionView, draggingInfo: NSDraggingInfo) => void) {
    this.delegate.collectionViewUpdateDraggingItemsForDrag = value;
  }
  set collectionViewShouldChangeItemsAtIndexPathsToHighlightState(value: (collectionView: NSCollectionView, indexPaths: NSSet, highlightState: interop.Enum<typeof NSCollectionViewItemHighlightState>) => NSSet) {
    this.delegate.collectionViewShouldChangeItemsAtIndexPathsToHighlightState = value;
  }
  set collectionViewDidChangeItemsAtIndexPathsToHighlightState(value: (collectionView: NSCollectionView, indexPaths: NSSet, highlightState: interop.Enum<typeof NSCollectionViewItemHighlightState>) => void) {
    this.delegate.collectionViewDidChangeItemsAtIndexPathsToHighlightState = value;
  }
  set collectionViewShouldSelectItemsAtIndexPaths(value: (collectionView: NSCollectionView, indexPaths: NSSet) => NSSet) {
    this.delegate.collectionViewShouldSelectItemsAtIndexPaths = value;
  }
  set collectionViewShouldDeselectItemsAtIndexPaths(value: (collectionView: NSCollectionView, indexPaths: NSSet) => NSSet) {
    this.delegate.collectionViewShouldDeselectItemsAtIndexPaths = value;
  }
  set collectionViewDidSelectItemsAtIndexPaths(value: (collectionView: NSCollectionView, indexPaths: NSSet) => void) {
    this.delegate.collectionViewDidSelectItemsAtIndexPaths = value;
  }
  set collectionViewDidDeselectItemsAtIndexPaths(value: (collectionView: NSCollectionView, indexPaths: NSSet) => void) {
    this.delegate.collectionViewDidDeselectItemsAtIndexPaths = value;
  }
  set collectionViewWillDisplayItemForRepresentedObjectAtIndexPath(value: (collectionView: NSCollectionView, item: NSCollectionViewItem, indexPath: NSIndexPath) => void) {
    this.delegate.collectionViewWillDisplayItemForRepresentedObjectAtIndexPath = value;
  }
  set collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath(value: (collectionView: NSCollectionView, view: NSView, elementKind: string, indexPath: NSIndexPath) => void) {
    this.delegate.collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath = value;
  }
  set collectionViewDidEndDisplayingItemForRepresentedObjectAtIndexPath(value: (collectionView: NSCollectionView, item: NSCollectionViewItem, indexPath: NSIndexPath) => void) {
    this.delegate.collectionViewDidEndDisplayingItemForRepresentedObjectAtIndexPath = value;
  }
  set collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath(value: (collectionView: NSCollectionView, view: NSView, elementKind: string, indexPath: NSIndexPath) => void) {
    this.delegate.collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath = value;
  }
  set collectionViewTransitionLayoutForOldLayoutNewLayout(value: (collectionView: NSCollectionView, fromLayout: NSCollectionViewLayout, toLayout: NSCollectionViewLayout) => NSCollectionViewTransitionLayout) {
    this.delegate.collectionViewTransitionLayoutForOldLayoutNewLayout = value;
  }
}

export class HTMLNSButtonCellElement extends HTMLNSActionCellElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSButtonCell.new();

  get bezelStyle(): interop.Enum<typeof NSBezelStyle> { return this.nativeObject.bezelStyle; }
  set bezelStyle(value: interop.Enum<typeof NSBezelStyle>) { this.nativeObject.bezelStyle = value; }
  get highlightsBy(): interop.Enum<typeof NSCellStyleMask> { return this.nativeObject.highlightsBy; }
  set highlightsBy(value: interop.Enum<typeof NSCellStyleMask>) { this.nativeObject.highlightsBy = value; }
  get showsStateBy(): interop.Enum<typeof NSCellStyleMask> { return this.nativeObject.showsStateBy; }
  set showsStateBy(value: interop.Enum<typeof NSCellStyleMask>) { this.nativeObject.showsStateBy = value; }
  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get attributedTitle(): NSAttributedString { return this.nativeObject.attributedTitle; }
  set attributedTitle(value: NSAttributedString) { this.nativeObject.attributedTitle = value; }
  get alternateTitle(): string { return this.nativeObject.alternateTitle; }
  set alternateTitle(value: string) { this.nativeObject.alternateTitle = value; }
  get attributedAlternateTitle(): NSAttributedString { return this.nativeObject.attributedAlternateTitle; }
  set attributedAlternateTitle(value: NSAttributedString) { this.nativeObject.attributedAlternateTitle = value; }
  get alternateImage(): NSImage { return this.nativeObject.alternateImage; }
  set alternateImage(value: NSImage) { this.nativeObject.alternateImage = value; }
  get imagePosition(): interop.Enum<typeof NSCellImagePosition> { return this.nativeObject.imagePosition; }
  set imagePosition(value: interop.Enum<typeof NSCellImagePosition>) { this.nativeObject.imagePosition = value; }
  get imageScaling(): interop.Enum<typeof NSImageScaling> { return this.nativeObject.imageScaling; }
  set imageScaling(value: interop.Enum<typeof NSImageScaling>) { this.nativeObject.imageScaling = value; }
  get keyEquivalent(): string { return this.nativeObject.keyEquivalent; }
  set keyEquivalent(value: string) { this.nativeObject.keyEquivalent = value; }
  get keyEquivalentModifierMask(): interop.Enum<typeof NSEventModifierFlags> { return this.nativeObject.keyEquivalentModifierMask; }
  set keyEquivalentModifierMask(value: interop.Enum<typeof NSEventModifierFlags>) { this.nativeObject.keyEquivalentModifierMask = value; }
  get isTransparent(): boolean { return this.nativeObject.isTransparent; }
  set isTransparent(value: boolean) { this.nativeObject.isTransparent = value; }
  get isOpaque(): boolean { return this.nativeObject.isOpaque; }
  get imageDimsWhenDisabled(): boolean { return this.nativeObject.imageDimsWhenDisabled; }
  set imageDimsWhenDisabled(value: boolean) { this.nativeObject.imageDimsWhenDisabled = value; }
  get showsBorderOnlyWhileMouseInside(): boolean { return this.nativeObject.showsBorderOnlyWhileMouseInside; }
  set showsBorderOnlyWhileMouseInside(value: boolean) { this.nativeObject.showsBorderOnlyWhileMouseInside = value; }
  get sound(): NSSound { return this.nativeObject.sound; }
  set sound(value: NSSound) { this.nativeObject.sound = value; }
  get backgroundColor(): NSColor { return this.nativeObject.backgroundColor; }
  set backgroundColor(value: NSColor) { this.nativeObject.backgroundColor = value; }
  get gradientType(): interop.Enum<typeof NSGradientType> { return this.nativeObject.gradientType; }
  set gradientType(value: interop.Enum<typeof NSGradientType>) { this.nativeObject.gradientType = value; }
  get keyEquivalentFont(): NSFont { return this.nativeObject.keyEquivalentFont; }
  set keyEquivalentFont(value: NSFont) { this.nativeObject.keyEquivalentFont = value; }
}

export class HTMLNSBoxElement extends HTMLNSViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSBox.new();

  get boxType(): interop.Enum<typeof NSBoxType> { return this.nativeObject.boxType; }
  set boxType(value: interop.Enum<typeof NSBoxType>) { this.nativeObject.boxType = value; }
  get titlePosition(): interop.Enum<typeof NSTitlePosition> { return this.nativeObject.titlePosition; }
  set titlePosition(value: interop.Enum<typeof NSTitlePosition>) { this.nativeObject.titlePosition = value; }
  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get titleFont(): NSFont { return this.nativeObject.titleFont; }
  set titleFont(value: NSFont) { this.nativeObject.titleFont = value; }
  get borderRect(): CGRect { return this.nativeObject.borderRect; }
  get titleRect(): CGRect { return this.nativeObject.titleRect; }
  get titleCell(): interop.Object { return this.nativeObject.titleCell; }
  get contentViewMargins(): CGSize { return this.nativeObject.contentViewMargins; }
  set contentViewMargins(value: CGSize) { this.nativeObject.contentViewMargins = value; }
  get contentView(): NSView { return this.nativeObject.contentView; }
  set contentView(value: NSView) { this.nativeObject.contentView = value; }
  get isTransparent(): boolean { return this.nativeObject.isTransparent; }
  set isTransparent(value: boolean) { this.nativeObject.isTransparent = value; }
  get borderWidth(): number { return this.nativeObject.borderWidth; }
  set borderWidth(value: number) { this.nativeObject.borderWidth = value; }
  get cornerRadius(): number { return this.nativeObject.cornerRadius; }
  set cornerRadius(value: number) { this.nativeObject.cornerRadius = value; }
  get borderColor(): NSColor { return this.nativeObject.borderColor; }
  set borderColor(value: NSColor) { this.nativeObject.borderColor = value; }
  get fillColor(): NSColor { return this.nativeObject.fillColor; }
  set fillColor(value: NSColor) { this.nativeObject.fillColor = value; }
  get borderType(): interop.Enum<typeof NSBorderType> { return this.nativeObject.borderType; }
  set borderType(value: interop.Enum<typeof NSBorderType>) { this.nativeObject.borderType = value; }
}

export class HTMLNSScrollViewElement extends HTMLNSViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSScrollView.new();

  get documentVisibleRect(): CGRect { return this.nativeObject.documentVisibleRect; }
  get contentSize(): CGSize { return this.nativeObject.contentSize; }
  get documentView(): NSView { return this.nativeObject.documentView; }
  set documentView(value: NSView) { this.nativeObject.documentView = value; }
  get contentView(): NSClipView { return this.nativeObject.contentView; }
  set contentView(value: NSClipView) { this.nativeObject.contentView = value; }
  get documentCursor(): NSCursor { return this.nativeObject.documentCursor; }
  set documentCursor(value: NSCursor) { this.nativeObject.documentCursor = value; }
  get borderType(): interop.Enum<typeof NSBorderType> { return this.nativeObject.borderType; }
  set borderType(value: interop.Enum<typeof NSBorderType>) { this.nativeObject.borderType = value; }
  get backgroundColor(): NSColor { return this.nativeObject.backgroundColor; }
  set backgroundColor(value: NSColor) { this.nativeObject.backgroundColor = value; }
  get drawsBackground(): boolean { return this.nativeObject.drawsBackground; }
  set drawsBackground(value: boolean) { this.nativeObject.drawsBackground = value; }
  get hasVerticalScroller(): boolean { return this.nativeObject.hasVerticalScroller; }
  set hasVerticalScroller(value: boolean) { this.nativeObject.hasVerticalScroller = value; }
  get hasHorizontalScroller(): boolean { return this.nativeObject.hasHorizontalScroller; }
  set hasHorizontalScroller(value: boolean) { this.nativeObject.hasHorizontalScroller = value; }
  get verticalScroller(): NSScroller { return this.nativeObject.verticalScroller; }
  set verticalScroller(value: NSScroller) { this.nativeObject.verticalScroller = value; }
  get horizontalScroller(): NSScroller { return this.nativeObject.horizontalScroller; }
  set horizontalScroller(value: NSScroller) { this.nativeObject.horizontalScroller = value; }
  get autohidesScrollers(): boolean { return this.nativeObject.autohidesScrollers; }
  set autohidesScrollers(value: boolean) { this.nativeObject.autohidesScrollers = value; }
  get horizontalLineScroll(): number { return this.nativeObject.horizontalLineScroll; }
  set horizontalLineScroll(value: number) { this.nativeObject.horizontalLineScroll = value; }
  get verticalLineScroll(): number { return this.nativeObject.verticalLineScroll; }
  set verticalLineScroll(value: number) { this.nativeObject.verticalLineScroll = value; }
  get lineScroll(): number { return this.nativeObject.lineScroll; }
  set lineScroll(value: number) { this.nativeObject.lineScroll = value; }
  get horizontalPageScroll(): number { return this.nativeObject.horizontalPageScroll; }
  set horizontalPageScroll(value: number) { this.nativeObject.horizontalPageScroll = value; }
  get verticalPageScroll(): number { return this.nativeObject.verticalPageScroll; }
  set verticalPageScroll(value: number) { this.nativeObject.verticalPageScroll = value; }
  get pageScroll(): number { return this.nativeObject.pageScroll; }
  set pageScroll(value: number) { this.nativeObject.pageScroll = value; }
  get scrollsDynamically(): boolean { return this.nativeObject.scrollsDynamically; }
  set scrollsDynamically(value: boolean) { this.nativeObject.scrollsDynamically = value; }
  get scrollerStyle(): interop.Enum<typeof NSScrollerStyle> { return this.nativeObject.scrollerStyle; }
  set scrollerStyle(value: interop.Enum<typeof NSScrollerStyle>) { this.nativeObject.scrollerStyle = value; }
  get scrollerKnobStyle(): interop.Enum<typeof NSScrollerKnobStyle> { return this.nativeObject.scrollerKnobStyle; }
  set scrollerKnobStyle(value: interop.Enum<typeof NSScrollerKnobStyle>) { this.nativeObject.scrollerKnobStyle = value; }
  get horizontalScrollElasticity(): interop.Enum<typeof NSScrollElasticity> { return this.nativeObject.horizontalScrollElasticity; }
  set horizontalScrollElasticity(value: interop.Enum<typeof NSScrollElasticity>) { this.nativeObject.horizontalScrollElasticity = value; }
  get verticalScrollElasticity(): interop.Enum<typeof NSScrollElasticity> { return this.nativeObject.verticalScrollElasticity; }
  set verticalScrollElasticity(value: interop.Enum<typeof NSScrollElasticity>) { this.nativeObject.verticalScrollElasticity = value; }
  get usesPredominantAxisScrolling(): boolean { return this.nativeObject.usesPredominantAxisScrolling; }
  set usesPredominantAxisScrolling(value: boolean) { this.nativeObject.usesPredominantAxisScrolling = value; }
  get allowsMagnification(): boolean { return this.nativeObject.allowsMagnification; }
  set allowsMagnification(value: boolean) { this.nativeObject.allowsMagnification = value; }
  get magnification(): number { return this.nativeObject.magnification; }
  set magnification(value: number) { this.nativeObject.magnification = value; }
  get maxMagnification(): number { return this.nativeObject.maxMagnification; }
  set maxMagnification(value: number) { this.nativeObject.maxMagnification = value; }
  get minMagnification(): number { return this.nativeObject.minMagnification; }
  set minMagnification(value: number) { this.nativeObject.minMagnification = value; }
  get automaticallyAdjustsContentInsets(): boolean { return this.nativeObject.automaticallyAdjustsContentInsets; }
  set automaticallyAdjustsContentInsets(value: boolean) { this.nativeObject.automaticallyAdjustsContentInsets = value; }
  get contentInsets(): NSEdgeInsets { return this.nativeObject.contentInsets; }
  set contentInsets(value: NSEdgeInsets) { this.nativeObject.contentInsets = value; }
  get scrollerInsets(): NSEdgeInsets { return this.nativeObject.scrollerInsets; }
  set scrollerInsets(value: NSEdgeInsets) { this.nativeObject.scrollerInsets = value; }
  get rulersVisible(): boolean { return this.nativeObject.rulersVisible; }
  set rulersVisible(value: boolean) { this.nativeObject.rulersVisible = value; }
  get hasHorizontalRuler(): boolean { return this.nativeObject.hasHorizontalRuler; }
  set hasHorizontalRuler(value: boolean) { this.nativeObject.hasHorizontalRuler = value; }
  get hasVerticalRuler(): boolean { return this.nativeObject.hasVerticalRuler; }
  set hasVerticalRuler(value: boolean) { this.nativeObject.hasVerticalRuler = value; }
  get horizontalRulerView(): NSRulerView { return this.nativeObject.horizontalRulerView; }
  set horizontalRulerView(value: NSRulerView) { this.nativeObject.horizontalRulerView = value; }
  get verticalRulerView(): NSRulerView { return this.nativeObject.verticalRulerView; }
  set verticalRulerView(value: NSRulerView) { this.nativeObject.verticalRulerView = value; }
  get findBarPosition(): interop.Enum<typeof NSScrollViewFindBarPosition> { return this.nativeObject.findBarPosition; }
  set findBarPosition(value: interop.Enum<typeof NSScrollViewFindBarPosition>) { this.nativeObject.findBarPosition = value; }
  get findBarView(): NSView { return this.nativeObject.findBarView; }
  set findBarView(value: NSView) { this.nativeObject.findBarView = value; }
  get isFindBarVisible(): boolean { return this.nativeObject.isFindBarVisible; }
  set isFindBarVisible(value: boolean) { this.nativeObject.isFindBarVisible = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLNSATSTypesetterElement extends HTMLNSTypesetterElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSATSTypesetter.new();

  get usesFontLeading(): boolean { return this.nativeObject.usesFontLeading; }
  set usesFontLeading(value: boolean) { this.nativeObject.usesFontLeading = value; }
  get typesetterBehavior(): interop.Enum<typeof NSTypesetterBehavior> { return this.nativeObject.typesetterBehavior; }
  set typesetterBehavior(value: interop.Enum<typeof NSTypesetterBehavior>) { this.nativeObject.typesetterBehavior = value; }
  get hyphenationFactor(): number { return this.nativeObject.hyphenationFactor; }
  set hyphenationFactor(value: number) { this.nativeObject.hyphenationFactor = value; }
  get lineFragmentPadding(): number { return this.nativeObject.lineFragmentPadding; }
  set lineFragmentPadding(value: number) { this.nativeObject.lineFragmentPadding = value; }
  get bidiProcessingEnabled(): boolean { return this.nativeObject.bidiProcessingEnabled; }
  set bidiProcessingEnabled(value: boolean) { this.nativeObject.bidiProcessingEnabled = value; }
  get attributedString(): NSAttributedString { return this.nativeObject.attributedString; }
  set attributedString(value: NSAttributedString) { this.nativeObject.attributedString = value; }
  get paragraphGlyphRange(): _NSRange { return this.nativeObject.paragraphGlyphRange; }
  get paragraphSeparatorGlyphRange(): _NSRange { return this.nativeObject.paragraphSeparatorGlyphRange; }
  get layoutManager(): NSLayoutManager { return this.nativeObject.layoutManager; }
  get currentTextContainer(): NSTextContainer { return this.nativeObject.currentTextContainer; }
}

export class HTMLNSTableCellViewElement extends HTMLNSViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTableCellView.new();

  get objectValue(): interop.Object { return this.nativeObject.objectValue; }
  set objectValue(value: interop.Object) { this.nativeObject.objectValue = value; }
  get textField(): NSTextField { return this.nativeObject.textField; }
  set textField(value: NSTextField) { this.nativeObject.textField = value; }
  get imageView(): NSImageView { return this.nativeObject.imageView; }
  set imageView(value: NSImageView) { this.nativeObject.imageView = value; }
  get backgroundStyle(): interop.Enum<typeof NSBackgroundStyle> { return this.nativeObject.backgroundStyle; }
  set backgroundStyle(value: interop.Enum<typeof NSBackgroundStyle>) { this.nativeObject.backgroundStyle = value; }
  get rowSizeStyle(): interop.Enum<typeof NSTableViewRowSizeStyle> { return this.nativeObject.rowSizeStyle; }
  set rowSizeStyle(value: interop.Enum<typeof NSTableViewRowSizeStyle>) { this.nativeObject.rowSizeStyle = value; }
  get draggingImageComponents(): NSArray { return this.nativeObject.draggingImageComponents; }
}

export class HTMLNSVisualEffectViewElement extends HTMLNSViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSVisualEffectView.new();

  get material(): interop.Enum<typeof NSVisualEffectMaterial> { return this.nativeObject.material; }
  set material(value: interop.Enum<typeof NSVisualEffectMaterial>) { this.nativeObject.material = value; }
  get interiorBackgroundStyle(): interop.Enum<typeof NSBackgroundStyle> { return this.nativeObject.interiorBackgroundStyle; }
  get blendingMode(): interop.Enum<typeof NSVisualEffectBlendingMode> { return this.nativeObject.blendingMode; }
  set blendingMode(value: interop.Enum<typeof NSVisualEffectBlendingMode>) { this.nativeObject.blendingMode = value; }
  get state(): interop.Enum<typeof NSVisualEffectState> { return this.nativeObject.state; }
  set state(value: interop.Enum<typeof NSVisualEffectState>) { this.nativeObject.state = value; }
  get maskImage(): NSImage { return this.nativeObject.maskImage; }
  set maskImage(value: NSImage) { this.nativeObject.maskImage = value; }
  get isEmphasized(): boolean { return this.nativeObject.isEmphasized; }
  set isEmphasized(value: boolean) { this.nativeObject.isEmphasized = value; }
}

export class HTMLNSTableRowViewElement extends HTMLNSViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTableRowView.new();

  get selectionHighlightStyle(): interop.Enum<typeof NSTableViewSelectionHighlightStyle> { return this.nativeObject.selectionHighlightStyle; }
  set selectionHighlightStyle(value: interop.Enum<typeof NSTableViewSelectionHighlightStyle>) { this.nativeObject.selectionHighlightStyle = value; }
  get isEmphasized(): boolean { return this.nativeObject.isEmphasized; }
  set isEmphasized(value: boolean) { this.nativeObject.isEmphasized = value; }
  get isGroupRowStyle(): boolean { return this.nativeObject.isGroupRowStyle; }
  set isGroupRowStyle(value: boolean) { this.nativeObject.isGroupRowStyle = value; }
  get isSelected(): boolean { return this.nativeObject.isSelected; }
  set isSelected(value: boolean) { this.nativeObject.isSelected = value; }
  get isPreviousRowSelected(): boolean { return this.nativeObject.isPreviousRowSelected; }
  set isPreviousRowSelected(value: boolean) { this.nativeObject.isPreviousRowSelected = value; }
  get isNextRowSelected(): boolean { return this.nativeObject.isNextRowSelected; }
  set isNextRowSelected(value: boolean) { this.nativeObject.isNextRowSelected = value; }
  get isFloating(): boolean { return this.nativeObject.isFloating; }
  set isFloating(value: boolean) { this.nativeObject.isFloating = value; }
  get isTargetForDropOperation(): boolean { return this.nativeObject.isTargetForDropOperation; }
  set isTargetForDropOperation(value: boolean) { this.nativeObject.isTargetForDropOperation = value; }
  get draggingDestinationFeedbackStyle(): interop.Enum<typeof NSTableViewDraggingDestinationFeedbackStyle> { return this.nativeObject.draggingDestinationFeedbackStyle; }
  set draggingDestinationFeedbackStyle(value: interop.Enum<typeof NSTableViewDraggingDestinationFeedbackStyle>) { this.nativeObject.draggingDestinationFeedbackStyle = value; }
  get indentationForDropOperation(): number { return this.nativeObject.indentationForDropOperation; }
  set indentationForDropOperation(value: number) { this.nativeObject.indentationForDropOperation = value; }
  get interiorBackgroundStyle(): interop.Enum<typeof NSBackgroundStyle> { return this.nativeObject.interiorBackgroundStyle; }
  get backgroundColor(): NSColor { return this.nativeObject.backgroundColor; }
  set backgroundColor(value: NSColor) { this.nativeObject.backgroundColor = value; }
  get numberOfColumns(): number { return this.nativeObject.numberOfColumns; }
  get accessibilityIndex(): number { return this.nativeObject.accessibilityIndex; }
  set accessibilityIndex(value: number) { this.nativeObject.accessibilityIndex = value; }
  get accessibilityDisclosureLevel(): number { return this.nativeObject.accessibilityDisclosureLevel; }
  set accessibilityDisclosureLevel(value: number) { this.nativeObject.accessibilityDisclosureLevel = value; }
  get accessibilityFrame(): CGRect { return this.nativeObject.accessibilityFrame; }
  set accessibilityFrame(value: CGRect) { this.nativeObject.accessibilityFrame = value; }
  get accessibilityParent(): interop.Object { return this.nativeObject.accessibilityParent; }
  set accessibilityParent(value: interop.Object) { this.nativeObject.accessibilityParent = value; }
  get isAccessibilityFocused(): boolean { return this.nativeObject.isAccessibilityFocused; }
  set isAccessibilityFocused(value: boolean) { this.nativeObject.isAccessibilityFocused = value; }
  get accessibilityIdentifier(): string { return this.nativeObject.accessibilityIdentifier; }
  set accessibilityIdentifier(value: string) { this.nativeObject.accessibilityIdentifier = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLNSCollectionViewGridLayoutElement extends HTMLNSCollectionViewLayoutElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSCollectionViewGridLayout.new();

  get margins(): NSEdgeInsets { return this.nativeObject.margins; }
  set margins(value: NSEdgeInsets) { this.nativeObject.margins = value; }
  get minimumInteritemSpacing(): number { return this.nativeObject.minimumInteritemSpacing; }
  set minimumInteritemSpacing(value: number) { this.nativeObject.minimumInteritemSpacing = value; }
  get minimumLineSpacing(): number { return this.nativeObject.minimumLineSpacing; }
  set minimumLineSpacing(value: number) { this.nativeObject.minimumLineSpacing = value; }
  get maximumNumberOfRows(): number { return this.nativeObject.maximumNumberOfRows; }
  set maximumNumberOfRows(value: number) { this.nativeObject.maximumNumberOfRows = value; }
  get maximumNumberOfColumns(): number { return this.nativeObject.maximumNumberOfColumns; }
  set maximumNumberOfColumns(value: number) { this.nativeObject.maximumNumberOfColumns = value; }
  get minimumItemSize(): CGSize { return this.nativeObject.minimumItemSize; }
  set minimumItemSize(value: CGSize) { this.nativeObject.minimumItemSize = value; }
  get maximumItemSize(): CGSize { return this.nativeObject.maximumItemSize; }
  set maximumItemSize(value: CGSize) { this.nativeObject.maximumItemSize = value; }
  get backgroundColors(): NSArray { return this.nativeObject.backgroundColors; }
  set backgroundColors(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.backgroundColors = value; }
}

export class HTMLNSCollectionLayoutSpacingElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSCollectionLayoutSpacing.new();

  get spacing(): number { return this.nativeObject.spacing; }
  get isFlexibleSpacing(): boolean { return this.nativeObject.isFlexibleSpacing; }
  get isFixedSpacing(): boolean { return this.nativeObject.isFixedSpacing; }
}

export class HTMLNSCachedImageRepElement extends HTMLNSImageRepElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSCachedImageRep.new();

}

export class HTMLNSDockTileElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSDockTile.new();

  get size(): CGSize { return this.nativeObject.size; }
  get contentView(): NSView { return this.nativeObject.contentView; }
  set contentView(value: NSView) { this.nativeObject.contentView = value; }
  get showsApplicationBadge(): boolean { return this.nativeObject.showsApplicationBadge; }
  set showsApplicationBadge(value: boolean) { this.nativeObject.showsApplicationBadge = value; }
  get badgeLabel(): string { return this.nativeObject.badgeLabel; }
  set badgeLabel(value: string) { this.nativeObject.badgeLabel = value; }
  get owner(): interop.Object | null { return this.nativeObject.owner; }
}

export class HTMLNSAlertElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSAlert.new();
  get delegate(): NSAlertDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSAlertDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSAlertDelegateImpl;
  }

  get messageText(): string { return this.nativeObject.messageText; }
  set messageText(value: string) { this.nativeObject.messageText = value; }
  get informativeText(): string { return this.nativeObject.informativeText; }
  set informativeText(value: string) { this.nativeObject.informativeText = value; }
  get icon(): NSImage { return this.nativeObject.icon; }
  set icon(value: NSImage) { this.nativeObject.icon = value; }
  get buttons(): NSArray { return this.nativeObject.buttons; }
  get alertStyle(): interop.Enum<typeof NSAlertStyle> { return this.nativeObject.alertStyle; }
  set alertStyle(value: interop.Enum<typeof NSAlertStyle>) { this.nativeObject.alertStyle = value; }
  get showsHelp(): boolean { return this.nativeObject.showsHelp; }
  set showsHelp(value: boolean) { this.nativeObject.showsHelp = value; }
  get helpAnchor(): string { return this.nativeObject.helpAnchor; }
  set helpAnchor(value: string) { this.nativeObject.helpAnchor = value; }
  get accessoryView(): NSView { return this.nativeObject.accessoryView; }
  set accessoryView(value: NSView) { this.nativeObject.accessoryView = value; }
  get showsSuppressionButton(): boolean { return this.nativeObject.showsSuppressionButton; }
  set showsSuppressionButton(value: boolean) { this.nativeObject.showsSuppressionButton = value; }
  get suppressionButton(): NSButton { return this.nativeObject.suppressionButton; }
  get window(): NSWindow { return this.nativeObject.window; }

  set alertShowHelp(value: (alert: NSAlert) => boolean) {
    this.delegate.alertShowHelp = value;
  }
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

export class HTMLNSAlignmentFeedbackFilterElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSAlignmentFeedbackFilter.new();

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
  get allowsDefaultTighteningForTruncation(): boolean { return this.nativeObject.allowsDefaultTighteningForTruncation; }
  get tighteningFactorForTruncation(): number { return this.nativeObject.tighteningFactorForTruncation; }
  get textBlocks(): NSArray { return this.nativeObject.textBlocks; }
  get textLists(): NSArray { return this.nativeObject.textLists; }
  get headerLevel(): number { return this.nativeObject.headerLevel; }
  get lineBreakStrategy(): interop.Enum<typeof NSLineBreakStrategy> { return this.nativeObject.lineBreakStrategy; }
}

export class HTMLNSDictionaryControllerKeyValuePairElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSDictionaryControllerKeyValuePair.new();

  get key(): string { return this.nativeObject.key; }
  set key(value: string) { this.nativeObject.key = value; }
  get value(): interop.Object { return this.nativeObject.value; }
  set value(value: interop.Object) { this.nativeObject.value = value; }
  get localizedKey(): string { return this.nativeObject.localizedKey; }
  set localizedKey(value: string) { this.nativeObject.localizedKey = value; }
  get isExplicitlyIncluded(): boolean { return this.nativeObject.isExplicitlyIncluded; }
}

export class HTMLNSOpenGLViewElement extends HTMLNSViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSOpenGLView.new();

  get openGLContext(): NSOpenGLContext { return this.nativeObject.openGLContext; }
  set openGLContext(value: NSOpenGLContext) { this.nativeObject.openGLContext = value; }
  get pixelFormat(): NSOpenGLPixelFormat { return this.nativeObject.pixelFormat; }
  set pixelFormat(value: NSOpenGLPixelFormat) { this.nativeObject.pixelFormat = value; }
  get wantsBestResolutionOpenGLSurface(): boolean { return this.nativeObject.wantsBestResolutionOpenGLSurface; }
  set wantsBestResolutionOpenGLSurface(value: boolean) { this.nativeObject.wantsBestResolutionOpenGLSurface = value; }
  get wantsExtendedDynamicRangeOpenGLSurface(): boolean { return this.nativeObject.wantsExtendedDynamicRangeOpenGLSurface; }
  set wantsExtendedDynamicRangeOpenGLSurface(value: boolean) { this.nativeObject.wantsExtendedDynamicRangeOpenGLSurface = value; }
}

export class HTMLNSMovieElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSMovie.new();

}

export class HTMLNSDataAssetElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSDataAsset.new();

  get name(): string { return this.nativeObject.name; }
  get data(): NSData { return this.nativeObject.data; }
  get typeIdentifier(): string { return this.nativeObject.typeIdentifier; }
}

export class HTMLNSTableHeaderViewElement extends HTMLNSViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTableHeaderView.new();

  get tableView(): NSTableView { return this.nativeObject.tableView; }
  set tableView(value: NSTableView) { this.nativeObject.tableView = value; }
  get draggedColumn(): number { return this.nativeObject.draggedColumn; }
  get draggedDistance(): number { return this.nativeObject.draggedDistance; }
  get resizedColumn(): number { return this.nativeObject.resizedColumn; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLNSTextInsertionIndicatorElement extends HTMLNSViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTextInsertionIndicator.new();

  get displayMode(): interop.Enum<typeof NSTextInsertionIndicatorDisplayMode> { return this.nativeObject.displayMode; }
  set displayMode(value: interop.Enum<typeof NSTextInsertionIndicatorDisplayMode>) { this.nativeObject.displayMode = value; }
  get color(): NSColor { return this.nativeObject.color; }
  set color(value: NSColor) { this.nativeObject.color = value; }
  get automaticModeOptions(): interop.Enum<typeof NSTextInsertionIndicatorAutomaticModeOptions> { return this.nativeObject.automaticModeOptions; }
  set automaticModeOptions(value: interop.Enum<typeof NSTextInsertionIndicatorAutomaticModeOptions>) { this.nativeObject.automaticModeOptions = value; }
  get effectsViewInserter(): (p1: NSView) => void { return this.nativeObject.effectsViewInserter; }
  set effectsViewInserter(value: (p1: NSView) => void) { this.nativeObject.effectsViewInserter = value; }
}

export class HTMLNSSegmentedCellElement extends HTMLNSActionCellElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSSegmentedCell.new();

  get segmentCount(): number { return this.nativeObject.segmentCount; }
  set segmentCount(value: number) { this.nativeObject.segmentCount = value; }
  get selectedSegment(): number { return this.nativeObject.selectedSegment; }
  set selectedSegment(value: number) { this.nativeObject.selectedSegment = value; }
  get trackingMode(): interop.Enum<typeof NSSegmentSwitchTracking> { return this.nativeObject.trackingMode; }
  set trackingMode(value: interop.Enum<typeof NSSegmentSwitchTracking>) { this.nativeObject.trackingMode = value; }
  get segmentStyle(): interop.Enum<typeof NSSegmentStyle> { return this.nativeObject.segmentStyle; }
  set segmentStyle(value: interop.Enum<typeof NSSegmentStyle>) { this.nativeObject.segmentStyle = value; }
}

export class HTMLNSSliderAccessoryBehaviorElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSSliderAccessoryBehavior.new();

}

export class HTMLNSInputServerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSInputServer.new();

}

export class HTMLNSFormCellElement extends HTMLNSActionCellElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSFormCell.new();

  get titleWidth(): number { return this.nativeObject.titleWidth; }
  set titleWidth(value: number) { this.nativeObject.titleWidth = value; }
  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get titleFont(): NSFont { return this.nativeObject.titleFont; }
  set titleFont(value: NSFont) { this.nativeObject.titleFont = value; }
  get isOpaque(): boolean { return this.nativeObject.isOpaque; }
  get placeholderString(): string { return this.nativeObject.placeholderString; }
  set placeholderString(value: string) { this.nativeObject.placeholderString = value; }
  get placeholderAttributedString(): NSAttributedString { return this.nativeObject.placeholderAttributedString; }
  set placeholderAttributedString(value: NSAttributedString) { this.nativeObject.placeholderAttributedString = value; }
  get titleAlignment(): interop.Enum<typeof NSTextAlignment> { return this.nativeObject.titleAlignment; }
  set titleAlignment(value: interop.Enum<typeof NSTextAlignment>) { this.nativeObject.titleAlignment = value; }
  get titleBaseWritingDirection(): interop.Enum<typeof NSWritingDirection> { return this.nativeObject.titleBaseWritingDirection; }
  set titleBaseWritingDirection(value: interop.Enum<typeof NSWritingDirection>) { this.nativeObject.titleBaseWritingDirection = value; }
  get preferredTextFieldWidth(): number { return this.nativeObject.preferredTextFieldWidth; }
  set preferredTextFieldWidth(value: number) { this.nativeObject.preferredTextFieldWidth = value; }
  get attributedTitle(): NSAttributedString { return this.nativeObject.attributedTitle; }
  set attributedTitle(value: NSAttributedString) { this.nativeObject.attributedTitle = value; }
}

export class HTMLNSFontElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSFont.new();

  get fontName(): string { return this.nativeObject.fontName; }
  get pointSize(): number { return this.nativeObject.pointSize; }
  get matrix(): interop.Pointer { return this.nativeObject.matrix; }
  get familyName(): string { return this.nativeObject.familyName; }
  get displayName(): string { return this.nativeObject.displayName; }
  get fontDescriptor(): NSFontDescriptor { return this.nativeObject.fontDescriptor; }
  get textTransform(): NSAffineTransform { return this.nativeObject.textTransform; }
  get numberOfGlyphs(): number { return this.nativeObject.numberOfGlyphs; }
  get mostCompatibleStringEncoding(): number { return this.nativeObject.mostCompatibleStringEncoding; }
  get coveredCharacterSet(): NSCharacterSet { return this.nativeObject.coveredCharacterSet; }
  get boundingRectForFont(): CGRect { return this.nativeObject.boundingRectForFont; }
  get maximumAdvancement(): CGSize { return this.nativeObject.maximumAdvancement; }
  get ascender(): number { return this.nativeObject.ascender; }
  get descender(): number { return this.nativeObject.descender; }
  get leading(): number { return this.nativeObject.leading; }
  get underlinePosition(): number { return this.nativeObject.underlinePosition; }
  get underlineThickness(): number { return this.nativeObject.underlineThickness; }
  get italicAngle(): number { return this.nativeObject.italicAngle; }
  get capHeight(): number { return this.nativeObject.capHeight; }
  get xHeight(): number { return this.nativeObject.xHeight; }
  get isFixedPitch(): boolean { return this.nativeObject.isFixedPitch; }
  get verticalFont(): NSFont { return this.nativeObject.verticalFont; }
  get isVertical(): boolean { return this.nativeObject.isVertical; }
  get printerFont(): NSFont { return this.nativeObject.printerFont; }
  get screenFont(): NSFont { return this.nativeObject.screenFont; }
  get renderingMode(): interop.Enum<typeof NSFontRenderingMode> { return this.nativeObject.renderingMode; }
}

export class HTMLNSLayoutAnchorElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSLayoutAnchor.new();

  get name(): string { return this.nativeObject.name; }
  get item(): interop.Object { return this.nativeObject.item; }
  get hasAmbiguousLayout(): boolean { return this.nativeObject.hasAmbiguousLayout; }
  get constraintsAffectingLayout(): NSArray { return this.nativeObject.constraintsAffectingLayout; }
}

export class HTMLNSCollectionLayoutDimensionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSCollectionLayoutDimension.new();

  get isFractionalWidth(): boolean { return this.nativeObject.isFractionalWidth; }
  get isFractionalHeight(): boolean { return this.nativeObject.isFractionalHeight; }
  get isAbsolute(): boolean { return this.nativeObject.isAbsolute; }
  get isEstimated(): boolean { return this.nativeObject.isEstimated; }
  get dimension(): number { return this.nativeObject.dimension; }
}

export class HTMLNSCollectionViewLayoutAttributesElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSCollectionViewLayoutAttributes.new();

  get frame(): CGRect { return this.nativeObject.frame; }
  set frame(value: CGRect) { this.nativeObject.frame = value; }
  get size(): CGSize { return this.nativeObject.size; }
  set size(value: CGSize) { this.nativeObject.size = value; }
  get alpha(): number { return this.nativeObject.alpha; }
  set alpha(value: number) { this.nativeObject.alpha = value; }
  get zIndex(): number { return this.nativeObject.zIndex; }
  set zIndex(value: number) { this.nativeObject.zIndex = value; }
  get isHidden(): boolean { return this.nativeObject.isHidden; }
  set isHidden(value: boolean) { this.nativeObject.isHidden = value; }
  get indexPath(): NSIndexPath { return this.nativeObject.indexPath; }
  set indexPath(value: NSIndexPath) { this.nativeObject.indexPath = value; }
  get representedElementCategory(): interop.Enum<typeof NSCollectionElementCategory> { return this.nativeObject.representedElementCategory; }
  get representedElementKind(): string { return this.nativeObject.representedElementKind; }
}

export class HTMLNSUserInterfaceCompressionOptionsElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSUserInterfaceCompressionOptions.new();

  get isEmpty(): boolean { return this.nativeObject.isEmpty; }
}

export class HTMLNSTextAttachmentCellElement extends HTMLNSCellElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSTextAttachmentCell.new();

  get cellSize(): CGSize { return this.nativeObject.cellSize; }
  get attachment(): NSTextAttachment { return this.nativeObject.attachment; }
  set attachment(value: NSTextAttachment) { this.nativeObject.attachment = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLNSMenuItemElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSMenuItem.new();

  get menu(): NSMenu { return this.nativeObject.menu; }
  set menu(value: NSMenu) { this.nativeObject.menu = value; }
  get hasSubmenu(): boolean { return this.nativeObject.hasSubmenu; }
  get submenu(): NSMenu { return this.nativeObject.submenu; }
  set submenu(value: NSMenu) { this.nativeObject.submenu = value; }
  get parentItem(): NSMenuItem { return this.nativeObject.parentItem; }
  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get attributedTitle(): NSAttributedString { return this.nativeObject.attributedTitle; }
  set attributedTitle(value: NSAttributedString) { this.nativeObject.attributedTitle = value; }
  get isSeparatorItem(): boolean { return this.nativeObject.isSeparatorItem; }
  get isSectionHeader(): boolean { return this.nativeObject.isSectionHeader; }
  get keyEquivalent(): string { return this.nativeObject.keyEquivalent; }
  set keyEquivalent(value: string) { this.nativeObject.keyEquivalent = value; }
  get keyEquivalentModifierMask(): interop.Enum<typeof NSEventModifierFlags> { return this.nativeObject.keyEquivalentModifierMask; }
  set keyEquivalentModifierMask(value: interop.Enum<typeof NSEventModifierFlags>) { this.nativeObject.keyEquivalentModifierMask = value; }
  get userKeyEquivalent(): string { return this.nativeObject.userKeyEquivalent; }
  get allowsKeyEquivalentWhenHidden(): boolean { return this.nativeObject.allowsKeyEquivalentWhenHidden; }
  set allowsKeyEquivalentWhenHidden(value: boolean) { this.nativeObject.allowsKeyEquivalentWhenHidden = value; }
  get allowsAutomaticKeyEquivalentLocalization(): boolean { return this.nativeObject.allowsAutomaticKeyEquivalentLocalization; }
  set allowsAutomaticKeyEquivalentLocalization(value: boolean) { this.nativeObject.allowsAutomaticKeyEquivalentLocalization = value; }
  get allowsAutomaticKeyEquivalentMirroring(): boolean { return this.nativeObject.allowsAutomaticKeyEquivalentMirroring; }
  set allowsAutomaticKeyEquivalentMirroring(value: boolean) { this.nativeObject.allowsAutomaticKeyEquivalentMirroring = value; }
  get image(): NSImage { return this.nativeObject.image; }
  set image(value: NSImage) { this.nativeObject.image = value; }
  get state(): number { return this.nativeObject.state; }
  set state(value: number) { this.nativeObject.state = value; }
  get onStateImage(): NSImage { return this.nativeObject.onStateImage; }
  set onStateImage(value: NSImage) { this.nativeObject.onStateImage = value; }
  get offStateImage(): NSImage { return this.nativeObject.offStateImage; }
  set offStateImage(value: NSImage) { this.nativeObject.offStateImage = value; }
  get mixedStateImage(): NSImage { return this.nativeObject.mixedStateImage; }
  set mixedStateImage(value: NSImage) { this.nativeObject.mixedStateImage = value; }
  get isEnabled(): boolean { return this.nativeObject.isEnabled; }
  set isEnabled(value: boolean) { this.nativeObject.isEnabled = value; }
  get isAlternate(): boolean { return this.nativeObject.isAlternate; }
  set isAlternate(value: boolean) { this.nativeObject.isAlternate = value; }
  get indentationLevel(): number { return this.nativeObject.indentationLevel; }
  set indentationLevel(value: number) { this.nativeObject.indentationLevel = value; }
  get target(): interop.Object { return this.nativeObject.target; }
  set target(value: interop.Object) { this.nativeObject.target = value; }
  get action(): string { return this.nativeObject.action; }
  set action(value: string) { this.nativeObject.action = value; }
  get tag(): number { return this.nativeObject.tag; }
  set tag(value: number) { this.nativeObject.tag = value; }
  get representedObject(): interop.Object { return this.nativeObject.representedObject; }
  set representedObject(value: interop.Object) { this.nativeObject.representedObject = value; }
  get view(): NSView { return this.nativeObject.view; }
  set view(value: NSView) { this.nativeObject.view = value; }
  get isHighlighted(): boolean { return this.nativeObject.isHighlighted; }
  get isHidden(): boolean { return this.nativeObject.isHidden; }
  set isHidden(value: boolean) { this.nativeObject.isHidden = value; }
  get isHiddenOrHasHiddenAncestor(): boolean { return this.nativeObject.isHiddenOrHasHiddenAncestor; }
  get toolTip(): string { return this.nativeObject.toolTip; }
  set toolTip(value: string) { this.nativeObject.toolTip = value; }
  get badge(): NSMenuItemBadge { return this.nativeObject.badge; }
  set badge(value: NSMenuItemBadge) { this.nativeObject.badge = value; }
  get identifier(): string { return this.nativeObject.identifier; }
  set identifier(value: string) { this.nativeObject.identifier = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
  get isAccessibilityElement(): boolean { return this.nativeObject.isAccessibilityElement; }
  set isAccessibilityElement(value: boolean) { this.nativeObject.isAccessibilityElement = value; }
  get accessibilityFrame(): CGRect { return this.nativeObject.accessibilityFrame; }
  set accessibilityFrame(value: CGRect) { this.nativeObject.accessibilityFrame = value; }
  get isAccessibilityFocused(): boolean { return this.nativeObject.isAccessibilityFocused; }
  set isAccessibilityFocused(value: boolean) { this.nativeObject.isAccessibilityFocused = value; }
  get accessibilityActivationPoint(): CGPoint { return this.nativeObject.accessibilityActivationPoint; }
  set accessibilityActivationPoint(value: CGPoint) { this.nativeObject.accessibilityActivationPoint = value; }
  get accessibilityTopLevelUIElement(): interop.Object { return this.nativeObject.accessibilityTopLevelUIElement; }
  set accessibilityTopLevelUIElement(value: interop.Object) { this.nativeObject.accessibilityTopLevelUIElement = value; }
  get accessibilityURL(): NSURL { return this.nativeObject.accessibilityURL; }
  set accessibilityURL(value: NSURL) { this.nativeObject.accessibilityURL = value; }
  get accessibilityValue(): interop.Object { return this.nativeObject.accessibilityValue; }
  set accessibilityValue(value: interop.Object) { this.nativeObject.accessibilityValue = value; }
  get accessibilityValueDescription(): string { return this.nativeObject.accessibilityValueDescription; }
  set accessibilityValueDescription(value: string) { this.nativeObject.accessibilityValueDescription = value; }
  get accessibilityVisibleChildren(): NSArray { return this.nativeObject.accessibilityVisibleChildren; }
  set accessibilityVisibleChildren(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleChildren = value; }
  get accessibilitySubrole(): string { return this.nativeObject.accessibilitySubrole; }
  set accessibilitySubrole(value: string) { this.nativeObject.accessibilitySubrole = value; }
  get accessibilityTitle(): string { return this.nativeObject.accessibilityTitle; }
  set accessibilityTitle(value: string) { this.nativeObject.accessibilityTitle = value; }
  get accessibilityTitleUIElement(): interop.Object { return this.nativeObject.accessibilityTitleUIElement; }
  set accessibilityTitleUIElement(value: interop.Object) { this.nativeObject.accessibilityTitleUIElement = value; }
  get accessibilityNextContents(): NSArray { return this.nativeObject.accessibilityNextContents; }
  set accessibilityNextContents(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityNextContents = value; }
  get accessibilityOrientation(): interop.Enum<typeof NSAccessibilityOrientation> { return this.nativeObject.accessibilityOrientation; }
  set accessibilityOrientation(value: interop.Enum<typeof NSAccessibilityOrientation>) { this.nativeObject.accessibilityOrientation = value; }
  get accessibilityOverflowButton(): interop.Object { return this.nativeObject.accessibilityOverflowButton; }
  set accessibilityOverflowButton(value: interop.Object) { this.nativeObject.accessibilityOverflowButton = value; }
  get accessibilityParent(): interop.Object { return this.nativeObject.accessibilityParent; }
  set accessibilityParent(value: interop.Object) { this.nativeObject.accessibilityParent = value; }
  get accessibilityPlaceholderValue(): string { return this.nativeObject.accessibilityPlaceholderValue; }
  set accessibilityPlaceholderValue(value: string) { this.nativeObject.accessibilityPlaceholderValue = value; }
  get accessibilityPreviousContents(): NSArray { return this.nativeObject.accessibilityPreviousContents; }
  set accessibilityPreviousContents(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityPreviousContents = value; }
  get accessibilityRole(): string { return this.nativeObject.accessibilityRole; }
  set accessibilityRole(value: string) { this.nativeObject.accessibilityRole = value; }
  get accessibilityRoleDescription(): string { return this.nativeObject.accessibilityRoleDescription; }
  set accessibilityRoleDescription(value: string) { this.nativeObject.accessibilityRoleDescription = value; }
  get accessibilitySearchButton(): interop.Object { return this.nativeObject.accessibilitySearchButton; }
  set accessibilitySearchButton(value: interop.Object) { this.nativeObject.accessibilitySearchButton = value; }
  get accessibilitySearchMenu(): interop.Object { return this.nativeObject.accessibilitySearchMenu; }
  set accessibilitySearchMenu(value: interop.Object) { this.nativeObject.accessibilitySearchMenu = value; }
  get isAccessibilitySelected(): boolean { return this.nativeObject.isAccessibilitySelected; }
  set isAccessibilitySelected(value: boolean) { this.nativeObject.isAccessibilitySelected = value; }
  get accessibilitySelectedChildren(): NSArray { return this.nativeObject.accessibilitySelectedChildren; }
  set accessibilitySelectedChildren(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedChildren = value; }
  get accessibilityServesAsTitleForUIElements(): NSArray { return this.nativeObject.accessibilityServesAsTitleForUIElements; }
  set accessibilityServesAsTitleForUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityServesAsTitleForUIElements = value; }
  get accessibilityShownMenu(): interop.Object { return this.nativeObject.accessibilityShownMenu; }
  set accessibilityShownMenu(value: interop.Object) { this.nativeObject.accessibilityShownMenu = value; }
  get accessibilityMinValue(): interop.Object { return this.nativeObject.accessibilityMinValue; }
  set accessibilityMinValue(value: interop.Object) { this.nativeObject.accessibilityMinValue = value; }
  get accessibilityMaxValue(): interop.Object { return this.nativeObject.accessibilityMaxValue; }
  set accessibilityMaxValue(value: interop.Object) { this.nativeObject.accessibilityMaxValue = value; }
  get accessibilityLinkedUIElements(): NSArray { return this.nativeObject.accessibilityLinkedUIElements; }
  set accessibilityLinkedUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityLinkedUIElements = value; }
  get accessibilityWindow(): interop.Object { return this.nativeObject.accessibilityWindow; }
  set accessibilityWindow(value: interop.Object) { this.nativeObject.accessibilityWindow = value; }
  get accessibilityIdentifier(): string { return this.nativeObject.accessibilityIdentifier; }
  set accessibilityIdentifier(value: string) { this.nativeObject.accessibilityIdentifier = value; }
  get accessibilityHelp(): string { return this.nativeObject.accessibilityHelp; }
  set accessibilityHelp(value: string) { this.nativeObject.accessibilityHelp = value; }
  get accessibilityFilename(): string { return this.nativeObject.accessibilityFilename; }
  set accessibilityFilename(value: string) { this.nativeObject.accessibilityFilename = value; }
  get isAccessibilityExpanded(): boolean { return this.nativeObject.isAccessibilityExpanded; }
  set isAccessibilityExpanded(value: boolean) { this.nativeObject.isAccessibilityExpanded = value; }
  get isAccessibilityEdited(): boolean { return this.nativeObject.isAccessibilityEdited; }
  set isAccessibilityEdited(value: boolean) { this.nativeObject.isAccessibilityEdited = value; }
  get isAccessibilityEnabled(): boolean { return this.nativeObject.isAccessibilityEnabled; }
  set isAccessibilityEnabled(value: boolean) { this.nativeObject.isAccessibilityEnabled = value; }
  get accessibilityChildren(): NSArray { return this.nativeObject.accessibilityChildren; }
  set accessibilityChildren(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityChildren = value; }
  get accessibilityChildrenInNavigationOrder(): NSArray { return this.nativeObject.accessibilityChildrenInNavigationOrder; }
  set accessibilityChildrenInNavigationOrder(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityChildrenInNavigationOrder = value; }
  get accessibilityClearButton(): interop.Object { return this.nativeObject.accessibilityClearButton; }
  set accessibilityClearButton(value: interop.Object) { this.nativeObject.accessibilityClearButton = value; }
  get accessibilityCancelButton(): interop.Object { return this.nativeObject.accessibilityCancelButton; }
  set accessibilityCancelButton(value: interop.Object) { this.nativeObject.accessibilityCancelButton = value; }
  get isAccessibilityProtectedContent(): boolean { return this.nativeObject.isAccessibilityProtectedContent; }
  set isAccessibilityProtectedContent(value: boolean) { this.nativeObject.isAccessibilityProtectedContent = value; }
  get accessibilityContents(): NSArray { return this.nativeObject.accessibilityContents; }
  set accessibilityContents(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityContents = value; }
  get accessibilityLabel(): string { return this.nativeObject.accessibilityLabel; }
  set accessibilityLabel(value: string) { this.nativeObject.accessibilityLabel = value; }
  get isAccessibilityAlternateUIVisible(): boolean { return this.nativeObject.isAccessibilityAlternateUIVisible; }
  set isAccessibilityAlternateUIVisible(value: boolean) { this.nativeObject.isAccessibilityAlternateUIVisible = value; }
  get accessibilitySharedFocusElements(): NSArray { return this.nativeObject.accessibilitySharedFocusElements; }
  set accessibilitySharedFocusElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySharedFocusElements = value; }
  get isAccessibilityRequired(): boolean { return this.nativeObject.isAccessibilityRequired; }
  set isAccessibilityRequired(value: boolean) { this.nativeObject.isAccessibilityRequired = value; }
  get accessibilityCustomRotors(): NSArray { return this.nativeObject.accessibilityCustomRotors; }
  set accessibilityCustomRotors(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityCustomRotors = value; }
  get accessibilityUserInputLabels(): NSArray { return this.nativeObject.accessibilityUserInputLabels; }
  set accessibilityUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityUserInputLabels = value; }
  get accessibilityAttributedUserInputLabels(): NSArray { return this.nativeObject.accessibilityAttributedUserInputLabels; }
  set accessibilityAttributedUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityAttributedUserInputLabels = value; }
  get accessibilityApplicationFocusedUIElement(): interop.Object { return this.nativeObject.accessibilityApplicationFocusedUIElement; }
  set accessibilityApplicationFocusedUIElement(value: interop.Object) { this.nativeObject.accessibilityApplicationFocusedUIElement = value; }
  get accessibilityMainWindow(): interop.Object { return this.nativeObject.accessibilityMainWindow; }
  set accessibilityMainWindow(value: interop.Object) { this.nativeObject.accessibilityMainWindow = value; }
  get isAccessibilityHidden(): boolean { return this.nativeObject.isAccessibilityHidden; }
  set isAccessibilityHidden(value: boolean) { this.nativeObject.isAccessibilityHidden = value; }
  get isAccessibilityFrontmost(): boolean { return this.nativeObject.isAccessibilityFrontmost; }
  set isAccessibilityFrontmost(value: boolean) { this.nativeObject.isAccessibilityFrontmost = value; }
  get accessibilityFocusedWindow(): interop.Object { return this.nativeObject.accessibilityFocusedWindow; }
  set accessibilityFocusedWindow(value: interop.Object) { this.nativeObject.accessibilityFocusedWindow = value; }
  get accessibilityWindows(): NSArray { return this.nativeObject.accessibilityWindows; }
  set accessibilityWindows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityWindows = value; }
  get accessibilityExtrasMenuBar(): interop.Object { return this.nativeObject.accessibilityExtrasMenuBar; }
  set accessibilityExtrasMenuBar(value: interop.Object) { this.nativeObject.accessibilityExtrasMenuBar = value; }
  get accessibilityMenuBar(): interop.Object { return this.nativeObject.accessibilityMenuBar; }
  set accessibilityMenuBar(value: interop.Object) { this.nativeObject.accessibilityMenuBar = value; }
  get accessibilityColumnTitles(): NSArray { return this.nativeObject.accessibilityColumnTitles; }
  set accessibilityColumnTitles(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityColumnTitles = value; }
  get isAccessibilityOrderedByRow(): boolean { return this.nativeObject.isAccessibilityOrderedByRow; }
  set isAccessibilityOrderedByRow(value: boolean) { this.nativeObject.isAccessibilityOrderedByRow = value; }
  get accessibilityHorizontalUnits(): interop.Enum<typeof NSAccessibilityUnits> { return this.nativeObject.accessibilityHorizontalUnits; }
  set accessibilityHorizontalUnits(value: interop.Enum<typeof NSAccessibilityUnits>) { this.nativeObject.accessibilityHorizontalUnits = value; }
  get accessibilityVerticalUnits(): interop.Enum<typeof NSAccessibilityUnits> { return this.nativeObject.accessibilityVerticalUnits; }
  set accessibilityVerticalUnits(value: interop.Enum<typeof NSAccessibilityUnits>) { this.nativeObject.accessibilityVerticalUnits = value; }
  get accessibilityHorizontalUnitDescription(): string { return this.nativeObject.accessibilityHorizontalUnitDescription; }
  set accessibilityHorizontalUnitDescription(value: string) { this.nativeObject.accessibilityHorizontalUnitDescription = value; }
  get accessibilityVerticalUnitDescription(): string { return this.nativeObject.accessibilityVerticalUnitDescription; }
  set accessibilityVerticalUnitDescription(value: string) { this.nativeObject.accessibilityVerticalUnitDescription = value; }
  get accessibilityHandles(): NSArray { return this.nativeObject.accessibilityHandles; }
  set accessibilityHandles(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityHandles = value; }
  get accessibilityWarningValue(): interop.Object { return this.nativeObject.accessibilityWarningValue; }
  set accessibilityWarningValue(value: interop.Object) { this.nativeObject.accessibilityWarningValue = value; }
  get accessibilityCriticalValue(): interop.Object { return this.nativeObject.accessibilityCriticalValue; }
  set accessibilityCriticalValue(value: interop.Object) { this.nativeObject.accessibilityCriticalValue = value; }
  get isAccessibilityDisclosed(): boolean { return this.nativeObject.isAccessibilityDisclosed; }
  set isAccessibilityDisclosed(value: boolean) { this.nativeObject.isAccessibilityDisclosed = value; }
  get accessibilityDisclosedByRow(): interop.Object { return this.nativeObject.accessibilityDisclosedByRow; }
  set accessibilityDisclosedByRow(value: interop.Object) { this.nativeObject.accessibilityDisclosedByRow = value; }
  get accessibilityDisclosedRows(): interop.Object { return this.nativeObject.accessibilityDisclosedRows; }
  set accessibilityDisclosedRows(value: interop.Object) { this.nativeObject.accessibilityDisclosedRows = value; }
  get accessibilityDisclosureLevel(): number { return this.nativeObject.accessibilityDisclosureLevel; }
  set accessibilityDisclosureLevel(value: number) { this.nativeObject.accessibilityDisclosureLevel = value; }
  get accessibilityMarkerUIElements(): NSArray { return this.nativeObject.accessibilityMarkerUIElements; }
  set accessibilityMarkerUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityMarkerUIElements = value; }
  get accessibilityMarkerValues(): interop.Object { return this.nativeObject.accessibilityMarkerValues; }
  set accessibilityMarkerValues(value: interop.Object) { this.nativeObject.accessibilityMarkerValues = value; }
  get accessibilityMarkerGroupUIElement(): interop.Object { return this.nativeObject.accessibilityMarkerGroupUIElement; }
  set accessibilityMarkerGroupUIElement(value: interop.Object) { this.nativeObject.accessibilityMarkerGroupUIElement = value; }
  get accessibilityUnits(): interop.Enum<typeof NSAccessibilityUnits> { return this.nativeObject.accessibilityUnits; }
  set accessibilityUnits(value: interop.Enum<typeof NSAccessibilityUnits>) { this.nativeObject.accessibilityUnits = value; }
  get accessibilityUnitDescription(): string { return this.nativeObject.accessibilityUnitDescription; }
  set accessibilityUnitDescription(value: string) { this.nativeObject.accessibilityUnitDescription = value; }
  get accessibilityRulerMarkerType(): interop.Enum<typeof NSAccessibilityRulerMarkerType> { return this.nativeObject.accessibilityRulerMarkerType; }
  set accessibilityRulerMarkerType(value: interop.Enum<typeof NSAccessibilityRulerMarkerType>) { this.nativeObject.accessibilityRulerMarkerType = value; }
  get accessibilityMarkerTypeDescription(): string { return this.nativeObject.accessibilityMarkerTypeDescription; }
  set accessibilityMarkerTypeDescription(value: string) { this.nativeObject.accessibilityMarkerTypeDescription = value; }
  get accessibilityHorizontalScrollBar(): interop.Object { return this.nativeObject.accessibilityHorizontalScrollBar; }
  set accessibilityHorizontalScrollBar(value: interop.Object) { this.nativeObject.accessibilityHorizontalScrollBar = value; }
  get accessibilityVerticalScrollBar(): interop.Object { return this.nativeObject.accessibilityVerticalScrollBar; }
  set accessibilityVerticalScrollBar(value: interop.Object) { this.nativeObject.accessibilityVerticalScrollBar = value; }
  get accessibilityAllowedValues(): NSArray { return this.nativeObject.accessibilityAllowedValues; }
  set accessibilityAllowedValues(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityAllowedValues = value; }
  get accessibilityLabelUIElements(): NSArray { return this.nativeObject.accessibilityLabelUIElements; }
  set accessibilityLabelUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityLabelUIElements = value; }
  get accessibilityLabelValue(): number { return this.nativeObject.accessibilityLabelValue; }
  set accessibilityLabelValue(value: number) { this.nativeObject.accessibilityLabelValue = value; }
  get accessibilitySplitters(): NSArray { return this.nativeObject.accessibilitySplitters; }
  set accessibilitySplitters(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySplitters = value; }
  get accessibilityDecrementButton(): interop.Object { return this.nativeObject.accessibilityDecrementButton; }
  set accessibilityDecrementButton(value: interop.Object) { this.nativeObject.accessibilityDecrementButton = value; }
  get accessibilityIncrementButton(): interop.Object { return this.nativeObject.accessibilityIncrementButton; }
  set accessibilityIncrementButton(value: interop.Object) { this.nativeObject.accessibilityIncrementButton = value; }
  get accessibilityTabs(): NSArray { return this.nativeObject.accessibilityTabs; }
  set accessibilityTabs(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityTabs = value; }
  get accessibilityHeader(): interop.Object { return this.nativeObject.accessibilityHeader; }
  set accessibilityHeader(value: interop.Object) { this.nativeObject.accessibilityHeader = value; }
  get accessibilityColumnCount(): number { return this.nativeObject.accessibilityColumnCount; }
  set accessibilityColumnCount(value: number) { this.nativeObject.accessibilityColumnCount = value; }
  get accessibilityRowCount(): number { return this.nativeObject.accessibilityRowCount; }
  set accessibilityRowCount(value: number) { this.nativeObject.accessibilityRowCount = value; }
  get accessibilityIndex(): number { return this.nativeObject.accessibilityIndex; }
  set accessibilityIndex(value: number) { this.nativeObject.accessibilityIndex = value; }
  get accessibilityColumns(): NSArray { return this.nativeObject.accessibilityColumns; }
  set accessibilityColumns(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityColumns = value; }
  get accessibilityRows(): NSArray { return this.nativeObject.accessibilityRows; }
  set accessibilityRows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityRows = value; }
  get accessibilityVisibleRows(): NSArray { return this.nativeObject.accessibilityVisibleRows; }
  set accessibilityVisibleRows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleRows = value; }
  get accessibilitySelectedRows(): NSArray { return this.nativeObject.accessibilitySelectedRows; }
  set accessibilitySelectedRows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedRows = value; }
  get accessibilityVisibleColumns(): NSArray { return this.nativeObject.accessibilityVisibleColumns; }
  set accessibilityVisibleColumns(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleColumns = value; }
  get accessibilitySelectedColumns(): NSArray { return this.nativeObject.accessibilitySelectedColumns; }
  set accessibilitySelectedColumns(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedColumns = value; }
  get accessibilitySortDirection(): interop.Enum<typeof NSAccessibilitySortDirection> { return this.nativeObject.accessibilitySortDirection; }
  set accessibilitySortDirection(value: interop.Enum<typeof NSAccessibilitySortDirection>) { this.nativeObject.accessibilitySortDirection = value; }
  get accessibilityRowHeaderUIElements(): NSArray { return this.nativeObject.accessibilityRowHeaderUIElements; }
  set accessibilityRowHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityRowHeaderUIElements = value; }
  get accessibilitySelectedCells(): NSArray { return this.nativeObject.accessibilitySelectedCells; }
  set accessibilitySelectedCells(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedCells = value; }
  get accessibilityVisibleCells(): NSArray { return this.nativeObject.accessibilityVisibleCells; }
  set accessibilityVisibleCells(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleCells = value; }
  get accessibilityColumnHeaderUIElements(): NSArray { return this.nativeObject.accessibilityColumnHeaderUIElements; }
  set accessibilityColumnHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityColumnHeaderUIElements = value; }
  get accessibilityRowIndexRange(): _NSRange { return this.nativeObject.accessibilityRowIndexRange; }
  set accessibilityRowIndexRange(value: _NSRange) { this.nativeObject.accessibilityRowIndexRange = value; }
  get accessibilityColumnIndexRange(): _NSRange { return this.nativeObject.accessibilityColumnIndexRange; }
  set accessibilityColumnIndexRange(value: _NSRange) { this.nativeObject.accessibilityColumnIndexRange = value; }
  get accessibilityInsertionPointLineNumber(): number { return this.nativeObject.accessibilityInsertionPointLineNumber; }
  set accessibilityInsertionPointLineNumber(value: number) { this.nativeObject.accessibilityInsertionPointLineNumber = value; }
  get accessibilitySharedCharacterRange(): _NSRange { return this.nativeObject.accessibilitySharedCharacterRange; }
  set accessibilitySharedCharacterRange(value: _NSRange) { this.nativeObject.accessibilitySharedCharacterRange = value; }
  get accessibilitySharedTextUIElements(): NSArray { return this.nativeObject.accessibilitySharedTextUIElements; }
  set accessibilitySharedTextUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySharedTextUIElements = value; }
  get accessibilityVisibleCharacterRange(): _NSRange { return this.nativeObject.accessibilityVisibleCharacterRange; }
  set accessibilityVisibleCharacterRange(value: _NSRange) { this.nativeObject.accessibilityVisibleCharacterRange = value; }
  get accessibilityNumberOfCharacters(): number { return this.nativeObject.accessibilityNumberOfCharacters; }
  set accessibilityNumberOfCharacters(value: number) { this.nativeObject.accessibilityNumberOfCharacters = value; }
  get accessibilitySelectedText(): string { return this.nativeObject.accessibilitySelectedText; }
  set accessibilitySelectedText(value: string) { this.nativeObject.accessibilitySelectedText = value; }
  get accessibilitySelectedTextRange(): _NSRange { return this.nativeObject.accessibilitySelectedTextRange; }
  set accessibilitySelectedTextRange(value: _NSRange) { this.nativeObject.accessibilitySelectedTextRange = value; }
  get accessibilitySelectedTextRanges(): NSArray { return this.nativeObject.accessibilitySelectedTextRanges; }
  set accessibilitySelectedTextRanges(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedTextRanges = value; }
  get accessibilityToolbarButton(): interop.Object { return this.nativeObject.accessibilityToolbarButton; }
  set accessibilityToolbarButton(value: interop.Object) { this.nativeObject.accessibilityToolbarButton = value; }
  get isAccessibilityModal(): boolean { return this.nativeObject.isAccessibilityModal; }
  set isAccessibilityModal(value: boolean) { this.nativeObject.isAccessibilityModal = value; }
  get accessibilityProxy(): interop.Object { return this.nativeObject.accessibilityProxy; }
  set accessibilityProxy(value: interop.Object) { this.nativeObject.accessibilityProxy = value; }
  get isAccessibilityMain(): boolean { return this.nativeObject.isAccessibilityMain; }
  set isAccessibilityMain(value: boolean) { this.nativeObject.isAccessibilityMain = value; }
  get accessibilityFullScreenButton(): interop.Object { return this.nativeObject.accessibilityFullScreenButton; }
  set accessibilityFullScreenButton(value: interop.Object) { this.nativeObject.accessibilityFullScreenButton = value; }
  get accessibilityGrowArea(): interop.Object { return this.nativeObject.accessibilityGrowArea; }
  set accessibilityGrowArea(value: interop.Object) { this.nativeObject.accessibilityGrowArea = value; }
  get accessibilityDocument(): string { return this.nativeObject.accessibilityDocument; }
  set accessibilityDocument(value: string) { this.nativeObject.accessibilityDocument = value; }
  get accessibilityDefaultButton(): interop.Object { return this.nativeObject.accessibilityDefaultButton; }
  set accessibilityDefaultButton(value: interop.Object) { this.nativeObject.accessibilityDefaultButton = value; }
  get accessibilityCloseButton(): interop.Object { return this.nativeObject.accessibilityCloseButton; }
  set accessibilityCloseButton(value: interop.Object) { this.nativeObject.accessibilityCloseButton = value; }
  get accessibilityZoomButton(): interop.Object { return this.nativeObject.accessibilityZoomButton; }
  set accessibilityZoomButton(value: interop.Object) { this.nativeObject.accessibilityZoomButton = value; }
  get accessibilityMinimizeButton(): interop.Object { return this.nativeObject.accessibilityMinimizeButton; }
  set accessibilityMinimizeButton(value: interop.Object) { this.nativeObject.accessibilityMinimizeButton = value; }
  get isAccessibilityMinimized(): boolean { return this.nativeObject.isAccessibilityMinimized; }
  set isAccessibilityMinimized(value: boolean) { this.nativeObject.isAccessibilityMinimized = value; }
  get accessibilityCustomActions(): NSArray { return this.nativeObject.accessibilityCustomActions; }
  set accessibilityCustomActions(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityCustomActions = value; }
}

export class HTMLNSPrintOperationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSPrintOperation.new();

  get isCopyingOperation(): boolean { return this.nativeObject.isCopyingOperation; }
  get preferredRenderingQuality(): interop.Enum<typeof NSPrintRenderingQuality> { return this.nativeObject.preferredRenderingQuality; }
  get jobTitle(): string { return this.nativeObject.jobTitle; }
  set jobTitle(value: string) { this.nativeObject.jobTitle = value; }
  get showsPrintPanel(): boolean { return this.nativeObject.showsPrintPanel; }
  set showsPrintPanel(value: boolean) { this.nativeObject.showsPrintPanel = value; }
  get showsProgressPanel(): boolean { return this.nativeObject.showsProgressPanel; }
  set showsProgressPanel(value: boolean) { this.nativeObject.showsProgressPanel = value; }
  get printPanel(): NSPrintPanel { return this.nativeObject.printPanel; }
  set printPanel(value: NSPrintPanel) { this.nativeObject.printPanel = value; }
  get PDFPanel(): NSPDFPanel { return this.nativeObject.PDFPanel; }
  set PDFPanel(value: NSPDFPanel) { this.nativeObject.PDFPanel = value; }
  get canSpawnSeparateThread(): boolean { return this.nativeObject.canSpawnSeparateThread; }
  set canSpawnSeparateThread(value: boolean) { this.nativeObject.canSpawnSeparateThread = value; }
  get pageOrder(): interop.Enum<typeof NSPrintingPageOrder> { return this.nativeObject.pageOrder; }
  set pageOrder(value: interop.Enum<typeof NSPrintingPageOrder>) { this.nativeObject.pageOrder = value; }
  get view(): NSView { return this.nativeObject.view; }
  get printInfo(): NSPrintInfo { return this.nativeObject.printInfo; }
  set printInfo(value: NSPrintInfo) { this.nativeObject.printInfo = value; }
  get context(): NSGraphicsContext { return this.nativeObject.context; }
  get pageRange(): _NSRange { return this.nativeObject.pageRange; }
  get currentPage(): number { return this.nativeObject.currentPage; }
}

export class HTMLNSAccessibilityCustomRotorElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSAccessibilityCustomRotor.new();

  get type(): interop.Enum<typeof NSAccessibilityCustomRotorType> { return this.nativeObject.type; }
  set type(value: interop.Enum<typeof NSAccessibilityCustomRotorType>) { this.nativeObject.type = value; }
  get label(): string { return this.nativeObject.label; }
  set label(value: string) { this.nativeObject.label = value; }
  get itemSearchDelegate(): NSAccessibilityCustomRotorItemSearchDelegate | null { return this.nativeObject.itemSearchDelegate; }
  set itemSearchDelegate(value: NSAccessibilityCustomRotorItemSearchDelegate | null) { this.nativeObject.itemSearchDelegate = value; }
  get itemLoadingDelegate(): NSAccessibilityElementLoading { return this.nativeObject.itemLoadingDelegate; }
  set itemLoadingDelegate(value: NSAccessibilityElementLoading) { this.nativeObject.itemLoadingDelegate = value; }
}

export class HTMLNSClipViewElement extends HTMLNSViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSClipView.new();

  get backgroundColor(): NSColor { return this.nativeObject.backgroundColor; }
  set backgroundColor(value: NSColor) { this.nativeObject.backgroundColor = value; }
  get drawsBackground(): boolean { return this.nativeObject.drawsBackground; }
  set drawsBackground(value: boolean) { this.nativeObject.drawsBackground = value; }
  get documentView(): NSView { return this.nativeObject.documentView; }
  set documentView(value: NSView) { this.nativeObject.documentView = value; }
  get documentRect(): CGRect { return this.nativeObject.documentRect; }
  get documentCursor(): NSCursor { return this.nativeObject.documentCursor; }
  set documentCursor(value: NSCursor) { this.nativeObject.documentCursor = value; }
  get documentVisibleRect(): CGRect { return this.nativeObject.documentVisibleRect; }
  get contentInsets(): NSEdgeInsets { return this.nativeObject.contentInsets; }
  set contentInsets(value: NSEdgeInsets) { this.nativeObject.contentInsets = value; }
  get automaticallyAdjustsContentInsets(): boolean { return this.nativeObject.automaticallyAdjustsContentInsets; }
  set automaticallyAdjustsContentInsets(value: boolean) { this.nativeObject.automaticallyAdjustsContentInsets = value; }
  get copiesOnScroll(): boolean { return this.nativeObject.copiesOnScroll; }
  set copiesOnScroll(value: boolean) { this.nativeObject.copiesOnScroll = value; }
}

export class HTMLNSPopoverElement extends HTMLNSResponderElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSPopover.new();
  get delegate(): NSPopoverDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSPopoverDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSPopoverDelegateImpl;
  }

  get appearance(): NSAppearance { return this.nativeObject.appearance; }
  set appearance(value: NSAppearance) { this.nativeObject.appearance = value; }
  get effectiveAppearance(): NSAppearance { return this.nativeObject.effectiveAppearance; }
  get behavior(): interop.Enum<typeof NSPopoverBehavior> { return this.nativeObject.behavior; }
  set behavior(value: interop.Enum<typeof NSPopoverBehavior>) { this.nativeObject.behavior = value; }
  get animates(): boolean { return this.nativeObject.animates; }
  set animates(value: boolean) { this.nativeObject.animates = value; }
  get contentViewController(): NSViewController { return this.nativeObject.contentViewController; }
  set contentViewController(value: NSViewController) { this.nativeObject.contentViewController = value; }
  get contentSize(): CGSize { return this.nativeObject.contentSize; }
  set contentSize(value: CGSize) { this.nativeObject.contentSize = value; }
  get isShown(): boolean { return this.nativeObject.isShown; }
  get isDetached(): boolean { return this.nativeObject.isDetached; }
  get positioningRect(): CGRect { return this.nativeObject.positioningRect; }
  set positioningRect(value: CGRect) { this.nativeObject.positioningRect = value; }
  get hasFullSizeContent(): boolean { return this.nativeObject.hasFullSizeContent; }
  set hasFullSizeContent(value: boolean) { this.nativeObject.hasFullSizeContent = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
  get isAccessibilityElement(): boolean { return this.nativeObject.isAccessibilityElement; }
  set isAccessibilityElement(value: boolean) { this.nativeObject.isAccessibilityElement = value; }
  get accessibilityFrame(): CGRect { return this.nativeObject.accessibilityFrame; }
  set accessibilityFrame(value: CGRect) { this.nativeObject.accessibilityFrame = value; }
  get isAccessibilityFocused(): boolean { return this.nativeObject.isAccessibilityFocused; }
  set isAccessibilityFocused(value: boolean) { this.nativeObject.isAccessibilityFocused = value; }
  get accessibilityActivationPoint(): CGPoint { return this.nativeObject.accessibilityActivationPoint; }
  set accessibilityActivationPoint(value: CGPoint) { this.nativeObject.accessibilityActivationPoint = value; }
  get accessibilityTopLevelUIElement(): interop.Object { return this.nativeObject.accessibilityTopLevelUIElement; }
  set accessibilityTopLevelUIElement(value: interop.Object) { this.nativeObject.accessibilityTopLevelUIElement = value; }
  get accessibilityURL(): NSURL { return this.nativeObject.accessibilityURL; }
  set accessibilityURL(value: NSURL) { this.nativeObject.accessibilityURL = value; }
  get accessibilityValue(): interop.Object { return this.nativeObject.accessibilityValue; }
  set accessibilityValue(value: interop.Object) { this.nativeObject.accessibilityValue = value; }
  get accessibilityValueDescription(): string { return this.nativeObject.accessibilityValueDescription; }
  set accessibilityValueDescription(value: string) { this.nativeObject.accessibilityValueDescription = value; }
  get accessibilityVisibleChildren(): NSArray { return this.nativeObject.accessibilityVisibleChildren; }
  set accessibilityVisibleChildren(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleChildren = value; }
  get accessibilitySubrole(): string { return this.nativeObject.accessibilitySubrole; }
  set accessibilitySubrole(value: string) { this.nativeObject.accessibilitySubrole = value; }
  get accessibilityTitle(): string { return this.nativeObject.accessibilityTitle; }
  set accessibilityTitle(value: string) { this.nativeObject.accessibilityTitle = value; }
  get accessibilityTitleUIElement(): interop.Object { return this.nativeObject.accessibilityTitleUIElement; }
  set accessibilityTitleUIElement(value: interop.Object) { this.nativeObject.accessibilityTitleUIElement = value; }
  get accessibilityNextContents(): NSArray { return this.nativeObject.accessibilityNextContents; }
  set accessibilityNextContents(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityNextContents = value; }
  get accessibilityOrientation(): interop.Enum<typeof NSAccessibilityOrientation> { return this.nativeObject.accessibilityOrientation; }
  set accessibilityOrientation(value: interop.Enum<typeof NSAccessibilityOrientation>) { this.nativeObject.accessibilityOrientation = value; }
  get accessibilityOverflowButton(): interop.Object { return this.nativeObject.accessibilityOverflowButton; }
  set accessibilityOverflowButton(value: interop.Object) { this.nativeObject.accessibilityOverflowButton = value; }
  get accessibilityParent(): interop.Object { return this.nativeObject.accessibilityParent; }
  set accessibilityParent(value: interop.Object) { this.nativeObject.accessibilityParent = value; }
  get accessibilityPlaceholderValue(): string { return this.nativeObject.accessibilityPlaceholderValue; }
  set accessibilityPlaceholderValue(value: string) { this.nativeObject.accessibilityPlaceholderValue = value; }
  get accessibilityPreviousContents(): NSArray { return this.nativeObject.accessibilityPreviousContents; }
  set accessibilityPreviousContents(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityPreviousContents = value; }
  get accessibilityRole(): string { return this.nativeObject.accessibilityRole; }
  set accessibilityRole(value: string) { this.nativeObject.accessibilityRole = value; }
  get accessibilityRoleDescription(): string { return this.nativeObject.accessibilityRoleDescription; }
  set accessibilityRoleDescription(value: string) { this.nativeObject.accessibilityRoleDescription = value; }
  get accessibilitySearchButton(): interop.Object { return this.nativeObject.accessibilitySearchButton; }
  set accessibilitySearchButton(value: interop.Object) { this.nativeObject.accessibilitySearchButton = value; }
  get accessibilitySearchMenu(): interop.Object { return this.nativeObject.accessibilitySearchMenu; }
  set accessibilitySearchMenu(value: interop.Object) { this.nativeObject.accessibilitySearchMenu = value; }
  get isAccessibilitySelected(): boolean { return this.nativeObject.isAccessibilitySelected; }
  set isAccessibilitySelected(value: boolean) { this.nativeObject.isAccessibilitySelected = value; }
  get accessibilitySelectedChildren(): NSArray { return this.nativeObject.accessibilitySelectedChildren; }
  set accessibilitySelectedChildren(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedChildren = value; }
  get accessibilityServesAsTitleForUIElements(): NSArray { return this.nativeObject.accessibilityServesAsTitleForUIElements; }
  set accessibilityServesAsTitleForUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityServesAsTitleForUIElements = value; }
  get accessibilityShownMenu(): interop.Object { return this.nativeObject.accessibilityShownMenu; }
  set accessibilityShownMenu(value: interop.Object) { this.nativeObject.accessibilityShownMenu = value; }
  get accessibilityMinValue(): interop.Object { return this.nativeObject.accessibilityMinValue; }
  set accessibilityMinValue(value: interop.Object) { this.nativeObject.accessibilityMinValue = value; }
  get accessibilityMaxValue(): interop.Object { return this.nativeObject.accessibilityMaxValue; }
  set accessibilityMaxValue(value: interop.Object) { this.nativeObject.accessibilityMaxValue = value; }
  get accessibilityLinkedUIElements(): NSArray { return this.nativeObject.accessibilityLinkedUIElements; }
  set accessibilityLinkedUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityLinkedUIElements = value; }
  get accessibilityWindow(): interop.Object { return this.nativeObject.accessibilityWindow; }
  set accessibilityWindow(value: interop.Object) { this.nativeObject.accessibilityWindow = value; }
  get accessibilityIdentifier(): string { return this.nativeObject.accessibilityIdentifier; }
  set accessibilityIdentifier(value: string) { this.nativeObject.accessibilityIdentifier = value; }
  get accessibilityHelp(): string { return this.nativeObject.accessibilityHelp; }
  set accessibilityHelp(value: string) { this.nativeObject.accessibilityHelp = value; }
  get accessibilityFilename(): string { return this.nativeObject.accessibilityFilename; }
  set accessibilityFilename(value: string) { this.nativeObject.accessibilityFilename = value; }
  get isAccessibilityExpanded(): boolean { return this.nativeObject.isAccessibilityExpanded; }
  set isAccessibilityExpanded(value: boolean) { this.nativeObject.isAccessibilityExpanded = value; }
  get isAccessibilityEdited(): boolean { return this.nativeObject.isAccessibilityEdited; }
  set isAccessibilityEdited(value: boolean) { this.nativeObject.isAccessibilityEdited = value; }
  get isAccessibilityEnabled(): boolean { return this.nativeObject.isAccessibilityEnabled; }
  set isAccessibilityEnabled(value: boolean) { this.nativeObject.isAccessibilityEnabled = value; }
  get accessibilityChildren(): NSArray { return this.nativeObject.accessibilityChildren; }
  set accessibilityChildren(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityChildren = value; }
  get accessibilityChildrenInNavigationOrder(): NSArray { return this.nativeObject.accessibilityChildrenInNavigationOrder; }
  set accessibilityChildrenInNavigationOrder(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityChildrenInNavigationOrder = value; }
  get accessibilityClearButton(): interop.Object { return this.nativeObject.accessibilityClearButton; }
  set accessibilityClearButton(value: interop.Object) { this.nativeObject.accessibilityClearButton = value; }
  get accessibilityCancelButton(): interop.Object { return this.nativeObject.accessibilityCancelButton; }
  set accessibilityCancelButton(value: interop.Object) { this.nativeObject.accessibilityCancelButton = value; }
  get isAccessibilityProtectedContent(): boolean { return this.nativeObject.isAccessibilityProtectedContent; }
  set isAccessibilityProtectedContent(value: boolean) { this.nativeObject.isAccessibilityProtectedContent = value; }
  get accessibilityContents(): NSArray { return this.nativeObject.accessibilityContents; }
  set accessibilityContents(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityContents = value; }
  get accessibilityLabel(): string { return this.nativeObject.accessibilityLabel; }
  set accessibilityLabel(value: string) { this.nativeObject.accessibilityLabel = value; }
  get isAccessibilityAlternateUIVisible(): boolean { return this.nativeObject.isAccessibilityAlternateUIVisible; }
  set isAccessibilityAlternateUIVisible(value: boolean) { this.nativeObject.isAccessibilityAlternateUIVisible = value; }
  get accessibilitySharedFocusElements(): NSArray { return this.nativeObject.accessibilitySharedFocusElements; }
  set accessibilitySharedFocusElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySharedFocusElements = value; }
  get isAccessibilityRequired(): boolean { return this.nativeObject.isAccessibilityRequired; }
  set isAccessibilityRequired(value: boolean) { this.nativeObject.isAccessibilityRequired = value; }
  get accessibilityCustomRotors(): NSArray { return this.nativeObject.accessibilityCustomRotors; }
  set accessibilityCustomRotors(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityCustomRotors = value; }
  get accessibilityUserInputLabels(): NSArray { return this.nativeObject.accessibilityUserInputLabels; }
  set accessibilityUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityUserInputLabels = value; }
  get accessibilityAttributedUserInputLabels(): NSArray { return this.nativeObject.accessibilityAttributedUserInputLabels; }
  set accessibilityAttributedUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityAttributedUserInputLabels = value; }
  get accessibilityApplicationFocusedUIElement(): interop.Object { return this.nativeObject.accessibilityApplicationFocusedUIElement; }
  set accessibilityApplicationFocusedUIElement(value: interop.Object) { this.nativeObject.accessibilityApplicationFocusedUIElement = value; }
  get accessibilityMainWindow(): interop.Object { return this.nativeObject.accessibilityMainWindow; }
  set accessibilityMainWindow(value: interop.Object) { this.nativeObject.accessibilityMainWindow = value; }
  get isAccessibilityHidden(): boolean { return this.nativeObject.isAccessibilityHidden; }
  set isAccessibilityHidden(value: boolean) { this.nativeObject.isAccessibilityHidden = value; }
  get isAccessibilityFrontmost(): boolean { return this.nativeObject.isAccessibilityFrontmost; }
  set isAccessibilityFrontmost(value: boolean) { this.nativeObject.isAccessibilityFrontmost = value; }
  get accessibilityFocusedWindow(): interop.Object { return this.nativeObject.accessibilityFocusedWindow; }
  set accessibilityFocusedWindow(value: interop.Object) { this.nativeObject.accessibilityFocusedWindow = value; }
  get accessibilityWindows(): NSArray { return this.nativeObject.accessibilityWindows; }
  set accessibilityWindows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityWindows = value; }
  get accessibilityExtrasMenuBar(): interop.Object { return this.nativeObject.accessibilityExtrasMenuBar; }
  set accessibilityExtrasMenuBar(value: interop.Object) { this.nativeObject.accessibilityExtrasMenuBar = value; }
  get accessibilityMenuBar(): interop.Object { return this.nativeObject.accessibilityMenuBar; }
  set accessibilityMenuBar(value: interop.Object) { this.nativeObject.accessibilityMenuBar = value; }
  get accessibilityColumnTitles(): NSArray { return this.nativeObject.accessibilityColumnTitles; }
  set accessibilityColumnTitles(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityColumnTitles = value; }
  get isAccessibilityOrderedByRow(): boolean { return this.nativeObject.isAccessibilityOrderedByRow; }
  set isAccessibilityOrderedByRow(value: boolean) { this.nativeObject.isAccessibilityOrderedByRow = value; }
  get accessibilityHorizontalUnits(): interop.Enum<typeof NSAccessibilityUnits> { return this.nativeObject.accessibilityHorizontalUnits; }
  set accessibilityHorizontalUnits(value: interop.Enum<typeof NSAccessibilityUnits>) { this.nativeObject.accessibilityHorizontalUnits = value; }
  get accessibilityVerticalUnits(): interop.Enum<typeof NSAccessibilityUnits> { return this.nativeObject.accessibilityVerticalUnits; }
  set accessibilityVerticalUnits(value: interop.Enum<typeof NSAccessibilityUnits>) { this.nativeObject.accessibilityVerticalUnits = value; }
  get accessibilityHorizontalUnitDescription(): string { return this.nativeObject.accessibilityHorizontalUnitDescription; }
  set accessibilityHorizontalUnitDescription(value: string) { this.nativeObject.accessibilityHorizontalUnitDescription = value; }
  get accessibilityVerticalUnitDescription(): string { return this.nativeObject.accessibilityVerticalUnitDescription; }
  set accessibilityVerticalUnitDescription(value: string) { this.nativeObject.accessibilityVerticalUnitDescription = value; }
  get accessibilityHandles(): NSArray { return this.nativeObject.accessibilityHandles; }
  set accessibilityHandles(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityHandles = value; }
  get accessibilityWarningValue(): interop.Object { return this.nativeObject.accessibilityWarningValue; }
  set accessibilityWarningValue(value: interop.Object) { this.nativeObject.accessibilityWarningValue = value; }
  get accessibilityCriticalValue(): interop.Object { return this.nativeObject.accessibilityCriticalValue; }
  set accessibilityCriticalValue(value: interop.Object) { this.nativeObject.accessibilityCriticalValue = value; }
  get isAccessibilityDisclosed(): boolean { return this.nativeObject.isAccessibilityDisclosed; }
  set isAccessibilityDisclosed(value: boolean) { this.nativeObject.isAccessibilityDisclosed = value; }
  get accessibilityDisclosedByRow(): interop.Object { return this.nativeObject.accessibilityDisclosedByRow; }
  set accessibilityDisclosedByRow(value: interop.Object) { this.nativeObject.accessibilityDisclosedByRow = value; }
  get accessibilityDisclosedRows(): interop.Object { return this.nativeObject.accessibilityDisclosedRows; }
  set accessibilityDisclosedRows(value: interop.Object) { this.nativeObject.accessibilityDisclosedRows = value; }
  get accessibilityDisclosureLevel(): number { return this.nativeObject.accessibilityDisclosureLevel; }
  set accessibilityDisclosureLevel(value: number) { this.nativeObject.accessibilityDisclosureLevel = value; }
  get accessibilityMarkerUIElements(): NSArray { return this.nativeObject.accessibilityMarkerUIElements; }
  set accessibilityMarkerUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityMarkerUIElements = value; }
  get accessibilityMarkerValues(): interop.Object { return this.nativeObject.accessibilityMarkerValues; }
  set accessibilityMarkerValues(value: interop.Object) { this.nativeObject.accessibilityMarkerValues = value; }
  get accessibilityMarkerGroupUIElement(): interop.Object { return this.nativeObject.accessibilityMarkerGroupUIElement; }
  set accessibilityMarkerGroupUIElement(value: interop.Object) { this.nativeObject.accessibilityMarkerGroupUIElement = value; }
  get accessibilityUnits(): interop.Enum<typeof NSAccessibilityUnits> { return this.nativeObject.accessibilityUnits; }
  set accessibilityUnits(value: interop.Enum<typeof NSAccessibilityUnits>) { this.nativeObject.accessibilityUnits = value; }
  get accessibilityUnitDescription(): string { return this.nativeObject.accessibilityUnitDescription; }
  set accessibilityUnitDescription(value: string) { this.nativeObject.accessibilityUnitDescription = value; }
  get accessibilityRulerMarkerType(): interop.Enum<typeof NSAccessibilityRulerMarkerType> { return this.nativeObject.accessibilityRulerMarkerType; }
  set accessibilityRulerMarkerType(value: interop.Enum<typeof NSAccessibilityRulerMarkerType>) { this.nativeObject.accessibilityRulerMarkerType = value; }
  get accessibilityMarkerTypeDescription(): string { return this.nativeObject.accessibilityMarkerTypeDescription; }
  set accessibilityMarkerTypeDescription(value: string) { this.nativeObject.accessibilityMarkerTypeDescription = value; }
  get accessibilityHorizontalScrollBar(): interop.Object { return this.nativeObject.accessibilityHorizontalScrollBar; }
  set accessibilityHorizontalScrollBar(value: interop.Object) { this.nativeObject.accessibilityHorizontalScrollBar = value; }
  get accessibilityVerticalScrollBar(): interop.Object { return this.nativeObject.accessibilityVerticalScrollBar; }
  set accessibilityVerticalScrollBar(value: interop.Object) { this.nativeObject.accessibilityVerticalScrollBar = value; }
  get accessibilityAllowedValues(): NSArray { return this.nativeObject.accessibilityAllowedValues; }
  set accessibilityAllowedValues(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityAllowedValues = value; }
  get accessibilityLabelUIElements(): NSArray { return this.nativeObject.accessibilityLabelUIElements; }
  set accessibilityLabelUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityLabelUIElements = value; }
  get accessibilityLabelValue(): number { return this.nativeObject.accessibilityLabelValue; }
  set accessibilityLabelValue(value: number) { this.nativeObject.accessibilityLabelValue = value; }
  get accessibilitySplitters(): NSArray { return this.nativeObject.accessibilitySplitters; }
  set accessibilitySplitters(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySplitters = value; }
  get accessibilityDecrementButton(): interop.Object { return this.nativeObject.accessibilityDecrementButton; }
  set accessibilityDecrementButton(value: interop.Object) { this.nativeObject.accessibilityDecrementButton = value; }
  get accessibilityIncrementButton(): interop.Object { return this.nativeObject.accessibilityIncrementButton; }
  set accessibilityIncrementButton(value: interop.Object) { this.nativeObject.accessibilityIncrementButton = value; }
  get accessibilityTabs(): NSArray { return this.nativeObject.accessibilityTabs; }
  set accessibilityTabs(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityTabs = value; }
  get accessibilityHeader(): interop.Object { return this.nativeObject.accessibilityHeader; }
  set accessibilityHeader(value: interop.Object) { this.nativeObject.accessibilityHeader = value; }
  get accessibilityColumnCount(): number { return this.nativeObject.accessibilityColumnCount; }
  set accessibilityColumnCount(value: number) { this.nativeObject.accessibilityColumnCount = value; }
  get accessibilityRowCount(): number { return this.nativeObject.accessibilityRowCount; }
  set accessibilityRowCount(value: number) { this.nativeObject.accessibilityRowCount = value; }
  get accessibilityIndex(): number { return this.nativeObject.accessibilityIndex; }
  set accessibilityIndex(value: number) { this.nativeObject.accessibilityIndex = value; }
  get accessibilityColumns(): NSArray { return this.nativeObject.accessibilityColumns; }
  set accessibilityColumns(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityColumns = value; }
  get accessibilityRows(): NSArray { return this.nativeObject.accessibilityRows; }
  set accessibilityRows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityRows = value; }
  get accessibilityVisibleRows(): NSArray { return this.nativeObject.accessibilityVisibleRows; }
  set accessibilityVisibleRows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleRows = value; }
  get accessibilitySelectedRows(): NSArray { return this.nativeObject.accessibilitySelectedRows; }
  set accessibilitySelectedRows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedRows = value; }
  get accessibilityVisibleColumns(): NSArray { return this.nativeObject.accessibilityVisibleColumns; }
  set accessibilityVisibleColumns(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleColumns = value; }
  get accessibilitySelectedColumns(): NSArray { return this.nativeObject.accessibilitySelectedColumns; }
  set accessibilitySelectedColumns(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedColumns = value; }
  get accessibilitySortDirection(): interop.Enum<typeof NSAccessibilitySortDirection> { return this.nativeObject.accessibilitySortDirection; }
  set accessibilitySortDirection(value: interop.Enum<typeof NSAccessibilitySortDirection>) { this.nativeObject.accessibilitySortDirection = value; }
  get accessibilityRowHeaderUIElements(): NSArray { return this.nativeObject.accessibilityRowHeaderUIElements; }
  set accessibilityRowHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityRowHeaderUIElements = value; }
  get accessibilitySelectedCells(): NSArray { return this.nativeObject.accessibilitySelectedCells; }
  set accessibilitySelectedCells(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedCells = value; }
  get accessibilityVisibleCells(): NSArray { return this.nativeObject.accessibilityVisibleCells; }
  set accessibilityVisibleCells(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleCells = value; }
  get accessibilityColumnHeaderUIElements(): NSArray { return this.nativeObject.accessibilityColumnHeaderUIElements; }
  set accessibilityColumnHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityColumnHeaderUIElements = value; }
  get accessibilityRowIndexRange(): _NSRange { return this.nativeObject.accessibilityRowIndexRange; }
  set accessibilityRowIndexRange(value: _NSRange) { this.nativeObject.accessibilityRowIndexRange = value; }
  get accessibilityColumnIndexRange(): _NSRange { return this.nativeObject.accessibilityColumnIndexRange; }
  set accessibilityColumnIndexRange(value: _NSRange) { this.nativeObject.accessibilityColumnIndexRange = value; }
  get accessibilityInsertionPointLineNumber(): number { return this.nativeObject.accessibilityInsertionPointLineNumber; }
  set accessibilityInsertionPointLineNumber(value: number) { this.nativeObject.accessibilityInsertionPointLineNumber = value; }
  get accessibilitySharedCharacterRange(): _NSRange { return this.nativeObject.accessibilitySharedCharacterRange; }
  set accessibilitySharedCharacterRange(value: _NSRange) { this.nativeObject.accessibilitySharedCharacterRange = value; }
  get accessibilitySharedTextUIElements(): NSArray { return this.nativeObject.accessibilitySharedTextUIElements; }
  set accessibilitySharedTextUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySharedTextUIElements = value; }
  get accessibilityVisibleCharacterRange(): _NSRange { return this.nativeObject.accessibilityVisibleCharacterRange; }
  set accessibilityVisibleCharacterRange(value: _NSRange) { this.nativeObject.accessibilityVisibleCharacterRange = value; }
  get accessibilityNumberOfCharacters(): number { return this.nativeObject.accessibilityNumberOfCharacters; }
  set accessibilityNumberOfCharacters(value: number) { this.nativeObject.accessibilityNumberOfCharacters = value; }
  get accessibilitySelectedText(): string { return this.nativeObject.accessibilitySelectedText; }
  set accessibilitySelectedText(value: string) { this.nativeObject.accessibilitySelectedText = value; }
  get accessibilitySelectedTextRange(): _NSRange { return this.nativeObject.accessibilitySelectedTextRange; }
  set accessibilitySelectedTextRange(value: _NSRange) { this.nativeObject.accessibilitySelectedTextRange = value; }
  get accessibilitySelectedTextRanges(): NSArray { return this.nativeObject.accessibilitySelectedTextRanges; }
  set accessibilitySelectedTextRanges(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedTextRanges = value; }
  get accessibilityToolbarButton(): interop.Object { return this.nativeObject.accessibilityToolbarButton; }
  set accessibilityToolbarButton(value: interop.Object) { this.nativeObject.accessibilityToolbarButton = value; }
  get isAccessibilityModal(): boolean { return this.nativeObject.isAccessibilityModal; }
  set isAccessibilityModal(value: boolean) { this.nativeObject.isAccessibilityModal = value; }
  get accessibilityProxy(): interop.Object { return this.nativeObject.accessibilityProxy; }
  set accessibilityProxy(value: interop.Object) { this.nativeObject.accessibilityProxy = value; }
  get isAccessibilityMain(): boolean { return this.nativeObject.isAccessibilityMain; }
  set isAccessibilityMain(value: boolean) { this.nativeObject.isAccessibilityMain = value; }
  get accessibilityFullScreenButton(): interop.Object { return this.nativeObject.accessibilityFullScreenButton; }
  set accessibilityFullScreenButton(value: interop.Object) { this.nativeObject.accessibilityFullScreenButton = value; }
  get accessibilityGrowArea(): interop.Object { return this.nativeObject.accessibilityGrowArea; }
  set accessibilityGrowArea(value: interop.Object) { this.nativeObject.accessibilityGrowArea = value; }
  get accessibilityDocument(): string { return this.nativeObject.accessibilityDocument; }
  set accessibilityDocument(value: string) { this.nativeObject.accessibilityDocument = value; }
  get accessibilityDefaultButton(): interop.Object { return this.nativeObject.accessibilityDefaultButton; }
  set accessibilityDefaultButton(value: interop.Object) { this.nativeObject.accessibilityDefaultButton = value; }
  get accessibilityCloseButton(): interop.Object { return this.nativeObject.accessibilityCloseButton; }
  set accessibilityCloseButton(value: interop.Object) { this.nativeObject.accessibilityCloseButton = value; }
  get accessibilityZoomButton(): interop.Object { return this.nativeObject.accessibilityZoomButton; }
  set accessibilityZoomButton(value: interop.Object) { this.nativeObject.accessibilityZoomButton = value; }
  get accessibilityMinimizeButton(): interop.Object { return this.nativeObject.accessibilityMinimizeButton; }
  set accessibilityMinimizeButton(value: interop.Object) { this.nativeObject.accessibilityMinimizeButton = value; }
  get isAccessibilityMinimized(): boolean { return this.nativeObject.isAccessibilityMinimized; }
  set isAccessibilityMinimized(value: boolean) { this.nativeObject.isAccessibilityMinimized = value; }
  get accessibilityCustomActions(): NSArray { return this.nativeObject.accessibilityCustomActions; }
  set accessibilityCustomActions(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityCustomActions = value; }

  set popoverShouldClose(value: (popover: NSPopover) => boolean) {
    this.delegate.popoverShouldClose = value;
  }
  set popoverShouldDetach(value: (popover: NSPopover) => boolean) {
    this.delegate.popoverShouldDetach = value;
  }
  set popoverDidDetach(value: (popover: NSPopover) => void) {
    this.delegate.popoverDidDetach = value;
  }
  set detachableWindowForPopover(value: (popover: NSPopover) => NSWindow) {
    this.delegate.detachableWindowForPopover = value;
  }
  set popoverWillShow(value: (notification: NSNotification) => void) {
    this.delegate.popoverWillShow = value;
  }
  set popoverDidShow(value: (notification: NSNotification) => void) {
    this.delegate.popoverDidShow = value;
  }
  set popoverWillClose(value: (notification: NSNotification) => void) {
    this.delegate.popoverWillClose = value;
  }
  set popoverDidClose(value: (notification: NSNotification) => void) {
    this.delegate.popoverDidClose = value;
  }
}

export class HTMLNSCustomTouchBarItemElement extends HTMLNSTouchBarItemElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSCustomTouchBarItem.new();

  get view(): NSView { return this.nativeObject.view; }
  set view(value: NSView) { this.nativeObject.view = value; }
  get viewController(): NSViewController { return this.nativeObject.viewController; }
  set viewController(value: NSViewController) { this.nativeObject.viewController = value; }
  get customizationLabel(): string { return this.nativeObject.customizationLabel; }
  set customizationLabel(value: string) { this.nativeObject.customizationLabel = value; }
}

export class HTMLNSGestureRecognizerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSGestureRecognizer.new();
  get delegate(): NSGestureRecognizerDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSGestureRecognizerDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSGestureRecognizerDelegateImpl;
  }

  get target(): interop.Object { return this.nativeObject.target; }
  set target(value: interop.Object) { this.nativeObject.target = value; }
  get action(): string { return this.nativeObject.action; }
  set action(value: string) { this.nativeObject.action = value; }
  get state(): interop.Enum<typeof NSGestureRecognizerState> { return this.nativeObject.state; }
  get isEnabled(): boolean { return this.nativeObject.isEnabled; }
  set isEnabled(value: boolean) { this.nativeObject.isEnabled = value; }
  get view(): NSView { return this.nativeObject.view; }
  get pressureConfiguration(): NSPressureConfiguration { return this.nativeObject.pressureConfiguration; }
  set pressureConfiguration(value: NSPressureConfiguration) { this.nativeObject.pressureConfiguration = value; }
  get delaysPrimaryMouseButtonEvents(): boolean { return this.nativeObject.delaysPrimaryMouseButtonEvents; }
  set delaysPrimaryMouseButtonEvents(value: boolean) { this.nativeObject.delaysPrimaryMouseButtonEvents = value; }
  get delaysSecondaryMouseButtonEvents(): boolean { return this.nativeObject.delaysSecondaryMouseButtonEvents; }
  set delaysSecondaryMouseButtonEvents(value: boolean) { this.nativeObject.delaysSecondaryMouseButtonEvents = value; }
  get delaysOtherMouseButtonEvents(): boolean { return this.nativeObject.delaysOtherMouseButtonEvents; }
  set delaysOtherMouseButtonEvents(value: boolean) { this.nativeObject.delaysOtherMouseButtonEvents = value; }
  get delaysKeyEvents(): boolean { return this.nativeObject.delaysKeyEvents; }
  set delaysKeyEvents(value: boolean) { this.nativeObject.delaysKeyEvents = value; }
  get delaysMagnificationEvents(): boolean { return this.nativeObject.delaysMagnificationEvents; }
  set delaysMagnificationEvents(value: boolean) { this.nativeObject.delaysMagnificationEvents = value; }
  get delaysRotationEvents(): boolean { return this.nativeObject.delaysRotationEvents; }
  set delaysRotationEvents(value: boolean) { this.nativeObject.delaysRotationEvents = value; }
  get allowedTouchTypes(): interop.Enum<typeof NSTouchTypeMask> { return this.nativeObject.allowedTouchTypes; }
  set allowedTouchTypes(value: interop.Enum<typeof NSTouchTypeMask>) { this.nativeObject.allowedTouchTypes = value; }

  set gestureRecognizerShouldAttemptToRecognizeWithEvent(value: (gestureRecognizer: NSGestureRecognizer, event: NSEvent) => boolean) {
    this.delegate.gestureRecognizerShouldAttemptToRecognizeWithEvent = value;
  }
  set gestureRecognizerShouldBegin(value: (gestureRecognizer: NSGestureRecognizer) => boolean) {
    this.delegate.gestureRecognizerShouldBegin = value;
  }
  set gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer(value: (gestureRecognizer: NSGestureRecognizer, otherGestureRecognizer: NSGestureRecognizer) => boolean) {
    this.delegate.gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer = value;
  }
  set gestureRecognizerShouldRequireFailureOfGestureRecognizer(value: (gestureRecognizer: NSGestureRecognizer, otherGestureRecognizer: NSGestureRecognizer) => boolean) {
    this.delegate.gestureRecognizerShouldRequireFailureOfGestureRecognizer = value;
  }
  set gestureRecognizerShouldBeRequiredToFailByGestureRecognizer(value: (gestureRecognizer: NSGestureRecognizer, otherGestureRecognizer: NSGestureRecognizer) => boolean) {
    this.delegate.gestureRecognizerShouldBeRequiredToFailByGestureRecognizer = value;
  }
  set gestureRecognizerShouldReceiveTouch(value: (gestureRecognizer: NSGestureRecognizer, touch: NSTouch) => boolean) {
    this.delegate.gestureRecognizerShouldReceiveTouch = value;
  }
}

export class HTMLNSStatusBarElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSStatusBar.new();

  get isVertical(): boolean { return this.nativeObject.isVertical; }
  get thickness(): number { return this.nativeObject.thickness; }
}

export class HTMLNSPDFInfoElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSPDFInfo.new();

  get URL(): NSURL { return this.nativeObject.URL; }
  set URL(value: NSURL) { this.nativeObject.URL = value; }
  get isFileExtensionHidden(): boolean { return this.nativeObject.isFileExtensionHidden; }
  set isFileExtensionHidden(value: boolean) { this.nativeObject.isFileExtensionHidden = value; }
  get tagNames(): NSArray { return this.nativeObject.tagNames; }
  set tagNames(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.tagNames = value; }
  get orientation(): interop.Enum<typeof NSPaperOrientation> { return this.nativeObject.orientation; }
  set orientation(value: interop.Enum<typeof NSPaperOrientation>) { this.nativeObject.orientation = value; }
  get paperSize(): CGSize { return this.nativeObject.paperSize; }
  set paperSize(value: CGSize) { this.nativeObject.paperSize = value; }
}

export class HTMLNSTextTableElement extends HTMLNSTextBlockElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTextTable.new();

  get numberOfColumns(): number { return this.nativeObject.numberOfColumns; }
  set numberOfColumns(value: number) { this.nativeObject.numberOfColumns = value; }
  get layoutAlgorithm(): interop.Enum<typeof NSTextTableLayoutAlgorithm> { return this.nativeObject.layoutAlgorithm; }
  set layoutAlgorithm(value: interop.Enum<typeof NSTextTableLayoutAlgorithm>) { this.nativeObject.layoutAlgorithm = value; }
  get collapsesBorders(): boolean { return this.nativeObject.collapsesBorders; }
  set collapsesBorders(value: boolean) { this.nativeObject.collapsesBorders = value; }
  get hidesEmptyCells(): boolean { return this.nativeObject.hidesEmptyCells; }
  set hidesEmptyCells(value: boolean) { this.nativeObject.hidesEmptyCells = value; }
}

export class HTMLNSCollectionViewFlowLayoutInvalidationContextElement extends HTMLNSCollectionViewLayoutInvalidationContextElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSCollectionViewFlowLayoutInvalidationContext.new();

  get invalidateFlowLayoutDelegateMetrics(): boolean { return this.nativeObject.invalidateFlowLayoutDelegateMetrics; }
  set invalidateFlowLayoutDelegateMetrics(value: boolean) { this.nativeObject.invalidateFlowLayoutDelegateMetrics = value; }
  get invalidateFlowLayoutAttributes(): boolean { return this.nativeObject.invalidateFlowLayoutAttributes; }
  set invalidateFlowLayoutAttributes(value: boolean) { this.nativeObject.invalidateFlowLayoutAttributes = value; }
}

export class HTMLNSPrintPanelElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSPrintPanel.new();

  get accessoryControllers(): NSArray { return this.nativeObject.accessoryControllers; }
  get options(): interop.Enum<typeof NSPrintPanelOptions> { return this.nativeObject.options; }
  set options(value: interop.Enum<typeof NSPrintPanelOptions>) { this.nativeObject.options = value; }
  get helpAnchor(): string { return this.nativeObject.helpAnchor; }
  set helpAnchor(value: string) { this.nativeObject.helpAnchor = value; }
  get jobStyleHint(): string { return this.nativeObject.jobStyleHint; }
  set jobStyleHint(value: string) { this.nativeObject.jobStyleHint = value; }
  get printInfo(): NSPrintInfo { return this.nativeObject.printInfo; }
}

export class HTMLNSDocumentControllerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSDocumentController.new();

  get documents(): NSArray { return this.nativeObject.documents; }
  get currentDocument(): NSDocument { return this.nativeObject.currentDocument; }
  get currentDirectory(): string { return this.nativeObject.currentDirectory; }
  get autosavingDelay(): number { return this.nativeObject.autosavingDelay; }
  set autosavingDelay(value: number) { this.nativeObject.autosavingDelay = value; }
  get hasEditedDocuments(): boolean { return this.nativeObject.hasEditedDocuments; }
  get allowsAutomaticShareMenu(): boolean { return this.nativeObject.allowsAutomaticShareMenu; }
  get maximumRecentDocumentCount(): number { return this.nativeObject.maximumRecentDocumentCount; }
  get recentDocumentURLs(): NSArray { return this.nativeObject.recentDocumentURLs; }
  get defaultType(): string { return this.nativeObject.defaultType; }
  get documentClassNames(): NSArray { return this.nativeObject.documentClassNames; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLNSStepperTouchBarItemElement extends HTMLNSTouchBarItemElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSStepperTouchBarItem.new();

  get maxValue(): number { return this.nativeObject.maxValue; }
  set maxValue(value: number) { this.nativeObject.maxValue = value; }
  get minValue(): number { return this.nativeObject.minValue; }
  set minValue(value: number) { this.nativeObject.minValue = value; }
  get increment(): number { return this.nativeObject.increment; }
  set increment(value: number) { this.nativeObject.increment = value; }
  get value(): number { return this.nativeObject.value; }
  set value(value: number) { this.nativeObject.value = value; }
  get target(): interop.Object { return this.nativeObject.target; }
  set target(value: interop.Object) { this.nativeObject.target = value; }
  get action(): string { return this.nativeObject.action; }
  set action(value: string) { this.nativeObject.action = value; }
  get customizationLabel(): string { return this.nativeObject.customizationLabel; }
  set customizationLabel(value: string) { this.nativeObject.customizationLabel = value; }
}

export class HTMLNSPrintInfoElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSPrintInfo.new();

  get paperName(): string { return this.nativeObject.paperName; }
  set paperName(value: string) { this.nativeObject.paperName = value; }
  get paperSize(): CGSize { return this.nativeObject.paperSize; }
  set paperSize(value: CGSize) { this.nativeObject.paperSize = value; }
  get orientation(): interop.Enum<typeof NSPaperOrientation> { return this.nativeObject.orientation; }
  set orientation(value: interop.Enum<typeof NSPaperOrientation>) { this.nativeObject.orientation = value; }
  get scalingFactor(): number { return this.nativeObject.scalingFactor; }
  set scalingFactor(value: number) { this.nativeObject.scalingFactor = value; }
  get leftMargin(): number { return this.nativeObject.leftMargin; }
  set leftMargin(value: number) { this.nativeObject.leftMargin = value; }
  get rightMargin(): number { return this.nativeObject.rightMargin; }
  set rightMargin(value: number) { this.nativeObject.rightMargin = value; }
  get topMargin(): number { return this.nativeObject.topMargin; }
  set topMargin(value: number) { this.nativeObject.topMargin = value; }
  get bottomMargin(): number { return this.nativeObject.bottomMargin; }
  set bottomMargin(value: number) { this.nativeObject.bottomMargin = value; }
  get isHorizontallyCentered(): boolean { return this.nativeObject.isHorizontallyCentered; }
  set isHorizontallyCentered(value: boolean) { this.nativeObject.isHorizontallyCentered = value; }
  get isVerticallyCentered(): boolean { return this.nativeObject.isVerticallyCentered; }
  set isVerticallyCentered(value: boolean) { this.nativeObject.isVerticallyCentered = value; }
  get horizontalPagination(): interop.Enum<typeof NSPrintingPaginationMode> { return this.nativeObject.horizontalPagination; }
  set horizontalPagination(value: interop.Enum<typeof NSPrintingPaginationMode>) { this.nativeObject.horizontalPagination = value; }
  get verticalPagination(): interop.Enum<typeof NSPrintingPaginationMode> { return this.nativeObject.verticalPagination; }
  set verticalPagination(value: interop.Enum<typeof NSPrintingPaginationMode>) { this.nativeObject.verticalPagination = value; }
  get jobDisposition(): string { return this.nativeObject.jobDisposition; }
  set jobDisposition(value: string) { this.nativeObject.jobDisposition = value; }
  get printer(): NSPrinter { return this.nativeObject.printer; }
  set printer(value: NSPrinter) { this.nativeObject.printer = value; }
  get imageablePageBounds(): CGRect { return this.nativeObject.imageablePageBounds; }
  get localizedPaperName(): string { return this.nativeObject.localizedPaperName; }
  get printSettings(): NSMutableDictionary { return this.nativeObject.printSettings; }
  get isSelectionOnly(): boolean { return this.nativeObject.isSelectionOnly; }
  set isSelectionOnly(value: boolean) { this.nativeObject.isSelectionOnly = value; }
}

export class HTMLNSTextFinderElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTextFinder.new();

  get client(): NSTextFinderClient { return this.nativeObject.client; }
  set client(value: NSTextFinderClient) { this.nativeObject.client = value; }
  get findBarContainer(): NSTextFinderBarContainer { return this.nativeObject.findBarContainer; }
  set findBarContainer(value: NSTextFinderBarContainer) { this.nativeObject.findBarContainer = value; }
  get findIndicatorNeedsUpdate(): boolean { return this.nativeObject.findIndicatorNeedsUpdate; }
  set findIndicatorNeedsUpdate(value: boolean) { this.nativeObject.findIndicatorNeedsUpdate = value; }
  get isIncrementalSearchingEnabled(): boolean { return this.nativeObject.isIncrementalSearchingEnabled; }
  set isIncrementalSearchingEnabled(value: boolean) { this.nativeObject.isIncrementalSearchingEnabled = value; }
  get incrementalSearchingShouldDimContentView(): boolean { return this.nativeObject.incrementalSearchingShouldDimContentView; }
  set incrementalSearchingShouldDimContentView(value: boolean) { this.nativeObject.incrementalSearchingShouldDimContentView = value; }
  get incrementalMatchRanges(): NSArray { return this.nativeObject.incrementalMatchRanges; }
}

export class HTMLNSCollectionViewTransitionLayoutElement extends HTMLNSCollectionViewLayoutElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSCollectionViewTransitionLayout.new();

  get transitionProgress(): number { return this.nativeObject.transitionProgress; }
  set transitionProgress(value: number) { this.nativeObject.transitionProgress = value; }
  get currentLayout(): NSCollectionViewLayout { return this.nativeObject.currentLayout; }
  get nextLayout(): NSCollectionViewLayout { return this.nativeObject.nextLayout; }
}

export class HTMLNSToolbarItemGroupElement extends HTMLNSToolbarItemElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSToolbarItemGroup.new();

  get subitems(): NSArray { return this.nativeObject.subitems; }
  set subitems(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.subitems = value; }
  get controlRepresentation(): interop.Enum<typeof NSToolbarItemGroupControlRepresentation> { return this.nativeObject.controlRepresentation; }
  set controlRepresentation(value: interop.Enum<typeof NSToolbarItemGroupControlRepresentation>) { this.nativeObject.controlRepresentation = value; }
  get selectionMode(): interop.Enum<typeof NSToolbarItemGroupSelectionMode> { return this.nativeObject.selectionMode; }
  set selectionMode(value: interop.Enum<typeof NSToolbarItemGroupSelectionMode>) { this.nativeObject.selectionMode = value; }
  get selectedIndex(): number { return this.nativeObject.selectedIndex; }
  set selectedIndex(value: number) { this.nativeObject.selectedIndex = value; }
}

export class HTMLNSTableColumnElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTableColumn.new();

  get identifier(): string { return this.nativeObject.identifier; }
  set identifier(value: string) { this.nativeObject.identifier = value; }
  get tableView(): NSTableView { return this.nativeObject.tableView; }
  set tableView(value: NSTableView) { this.nativeObject.tableView = value; }
  get width(): number { return this.nativeObject.width; }
  set width(value: number) { this.nativeObject.width = value; }
  get minWidth(): number { return this.nativeObject.minWidth; }
  set minWidth(value: number) { this.nativeObject.minWidth = value; }
  get maxWidth(): number { return this.nativeObject.maxWidth; }
  set maxWidth(value: number) { this.nativeObject.maxWidth = value; }
  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get headerCell(): NSTableHeaderCell { return this.nativeObject.headerCell; }
  set headerCell(value: NSTableHeaderCell) { this.nativeObject.headerCell = value; }
  get isEditable(): boolean { return this.nativeObject.isEditable; }
  set isEditable(value: boolean) { this.nativeObject.isEditable = value; }
  get sortDescriptorPrototype(): NSSortDescriptor { return this.nativeObject.sortDescriptorPrototype; }
  set sortDescriptorPrototype(value: NSSortDescriptor) { this.nativeObject.sortDescriptorPrototype = value; }
  get resizingMask(): interop.Enum<typeof NSTableColumnResizingOptions> { return this.nativeObject.resizingMask; }
  set resizingMask(value: interop.Enum<typeof NSTableColumnResizingOptions>) { this.nativeObject.resizingMask = value; }
  get headerToolTip(): string { return this.nativeObject.headerToolTip; }
  set headerToolTip(value: string) { this.nativeObject.headerToolTip = value; }
  get isHidden(): boolean { return this.nativeObject.isHidden; }
  set isHidden(value: boolean) { this.nativeObject.isHidden = value; }
  get dataCell(): interop.Object { return this.nativeObject.dataCell; }
  set dataCell(value: interop.Object) { this.nativeObject.dataCell = value; }
}

export class HTMLNSPICTImageRepElement extends HTMLNSImageRepElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSPICTImageRep.new();

  get PICTRepresentation(): NSData { return this.nativeObject.PICTRepresentation; }
  get boundingBox(): CGRect { return this.nativeObject.boundingBox; }
}

export class HTMLNSWorkspaceOpenConfigurationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSWorkspaceOpenConfiguration.new();

  get promptsUserIfNeeded(): boolean { return this.nativeObject.promptsUserIfNeeded; }
  set promptsUserIfNeeded(value: boolean) { this.nativeObject.promptsUserIfNeeded = value; }
  get addsToRecentItems(): boolean { return this.nativeObject.addsToRecentItems; }
  set addsToRecentItems(value: boolean) { this.nativeObject.addsToRecentItems = value; }
  get activates(): boolean { return this.nativeObject.activates; }
  set activates(value: boolean) { this.nativeObject.activates = value; }
  get hides(): boolean { return this.nativeObject.hides; }
  set hides(value: boolean) { this.nativeObject.hides = value; }
  get hidesOthers(): boolean { return this.nativeObject.hidesOthers; }
  set hidesOthers(value: boolean) { this.nativeObject.hidesOthers = value; }
  get isForPrinting(): boolean { return this.nativeObject.isForPrinting; }
  set isForPrinting(value: boolean) { this.nativeObject.isForPrinting = value; }
  get createsNewApplicationInstance(): boolean { return this.nativeObject.createsNewApplicationInstance; }
  set createsNewApplicationInstance(value: boolean) { this.nativeObject.createsNewApplicationInstance = value; }
  get allowsRunningApplicationSubstitution(): boolean { return this.nativeObject.allowsRunningApplicationSubstitution; }
  set allowsRunningApplicationSubstitution(value: boolean) { this.nativeObject.allowsRunningApplicationSubstitution = value; }
  get arguments(): NSArray { return this.nativeObject.arguments; }
  set arguments(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.arguments = value; }
  get environment(): NSDictionary { return this.nativeObject.environment; }
  set environment(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) { this.nativeObject.environment = value; }
  get appleEvent(): NSAppleEventDescriptor { return this.nativeObject.appleEvent; }
  set appleEvent(value: NSAppleEventDescriptor) { this.nativeObject.appleEvent = value; }
  get architecture(): number { return this.nativeObject.architecture; }
  set architecture(value: number) { this.nativeObject.architecture = value; }
  get requiresUniversalLinks(): boolean { return this.nativeObject.requiresUniversalLinks; }
  set requiresUniversalLinks(value: boolean) { this.nativeObject.requiresUniversalLinks = value; }
}

export class HTMLNSPredicateEditorRowTemplateElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSPredicateEditorRowTemplate.new();

  get templateViews(): NSArray { return this.nativeObject.templateViews; }
  get leftExpressions(): NSArray { return this.nativeObject.leftExpressions; }
  get rightExpressions(): NSArray { return this.nativeObject.rightExpressions; }
  get rightExpressionAttributeType(): interop.Enum<typeof NSAttributeType> { return this.nativeObject.rightExpressionAttributeType; }
  get modifier(): interop.Enum<typeof NSComparisonPredicateModifier> { return this.nativeObject.modifier; }
  get operators(): NSArray { return this.nativeObject.operators; }
  get options(): number { return this.nativeObject.options; }
  get compoundTypes(): NSArray { return this.nativeObject.compoundTypes; }
}

export class HTMLNSMediaLibraryBrowserControllerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSMediaLibraryBrowserController.new();

  get isVisible(): boolean { return this.nativeObject.isVisible; }
  set isVisible(value: boolean) { this.nativeObject.isVisible = value; }
  get frame(): CGRect { return this.nativeObject.frame; }
  set frame(value: CGRect) { this.nativeObject.frame = value; }
  get mediaLibraries(): interop.Enum<typeof NSMediaLibrary> { return this.nativeObject.mediaLibraries; }
  set mediaLibraries(value: interop.Enum<typeof NSMediaLibrary>) { this.nativeObject.mediaLibraries = value; }
}

export class HTMLNSPathControlItemElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSPathControlItem.new();

  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get attributedTitle(): NSAttributedString { return this.nativeObject.attributedTitle; }
  set attributedTitle(value: NSAttributedString) { this.nativeObject.attributedTitle = value; }
  get image(): NSImage { return this.nativeObject.image; }
  set image(value: NSImage) { this.nativeObject.image = value; }
  get URL(): NSURL { return this.nativeObject.URL; }
}

export class HTMLNSSliderTouchBarItemElement extends HTMLNSTouchBarItemElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSSliderTouchBarItem.new();

  get view(): NSView { return this.nativeObject.view; }
  get slider(): NSSlider { return this.nativeObject.slider; }
  set slider(value: NSSlider) { this.nativeObject.slider = value; }
  get doubleValue(): number { return this.nativeObject.doubleValue; }
  set doubleValue(value: number) { this.nativeObject.doubleValue = value; }
  get minimumSliderWidth(): number { return this.nativeObject.minimumSliderWidth; }
  set minimumSliderWidth(value: number) { this.nativeObject.minimumSliderWidth = value; }
  get maximumSliderWidth(): number { return this.nativeObject.maximumSliderWidth; }
  set maximumSliderWidth(value: number) { this.nativeObject.maximumSliderWidth = value; }
  get label(): string { return this.nativeObject.label; }
  set label(value: string) { this.nativeObject.label = value; }
  get minimumValueAccessory(): NSSliderAccessory { return this.nativeObject.minimumValueAccessory; }
  set minimumValueAccessory(value: NSSliderAccessory) { this.nativeObject.minimumValueAccessory = value; }
  get maximumValueAccessory(): NSSliderAccessory { return this.nativeObject.maximumValueAccessory; }
  set maximumValueAccessory(value: NSSliderAccessory) { this.nativeObject.maximumValueAccessory = value; }
  get valueAccessoryWidth(): number { return this.nativeObject.valueAccessoryWidth; }
  set valueAccessoryWidth(value: number) { this.nativeObject.valueAccessoryWidth = value; }
  get target(): interop.Object { return this.nativeObject.target; }
  set target(value: interop.Object) { this.nativeObject.target = value; }
  get action(): string { return this.nativeObject.action; }
  set action(value: string) { this.nativeObject.action = value; }
  get customizationLabel(): string { return this.nativeObject.customizationLabel; }
  set customizationLabel(value: string) { this.nativeObject.customizationLabel = value; }
}

export class HTMLNSTableHeaderCellElement extends HTMLNSTextFieldCellElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTableHeaderCell.new();

}

export class HTMLNSMenuItemCellElement extends HTMLNSButtonCellElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSMenuItemCell.new();

  get menuItem(): NSMenuItem { return this.nativeObject.menuItem; }
  set menuItem(value: NSMenuItem) { this.nativeObject.menuItem = value; }
  get needsSizing(): boolean { return this.nativeObject.needsSizing; }
  set needsSizing(value: boolean) { this.nativeObject.needsSizing = value; }
  get needsDisplay(): boolean { return this.nativeObject.needsDisplay; }
  set needsDisplay(value: boolean) { this.nativeObject.needsDisplay = value; }
  get stateImageWidth(): number { return this.nativeObject.stateImageWidth; }
  get imageWidth(): number { return this.nativeObject.imageWidth; }
  get titleWidth(): number { return this.nativeObject.titleWidth; }
  get keyEquivalentWidth(): number { return this.nativeObject.keyEquivalentWidth; }
  get tag(): number { return this.nativeObject.tag; }
  set tag(value: number) { this.nativeObject.tag = value; }
}

export class HTMLNSPanGestureRecognizerElement extends HTMLNSGestureRecognizerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSPanGestureRecognizer.new();

  get buttonMask(): number { return this.nativeObject.buttonMask; }
  set buttonMask(value: number) { this.nativeObject.buttonMask = value; }
  get numberOfTouchesRequired(): number { return this.nativeObject.numberOfTouchesRequired; }
  set numberOfTouchesRequired(value: number) { this.nativeObject.numberOfTouchesRequired = value; }
}

export class HTMLNSClickGestureRecognizerElement extends HTMLNSGestureRecognizerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSClickGestureRecognizer.new();

  get buttonMask(): number { return this.nativeObject.buttonMask; }
  set buttonMask(value: number) { this.nativeObject.buttonMask = value; }
  get numberOfClicksRequired(): number { return this.nativeObject.numberOfClicksRequired; }
  set numberOfClicksRequired(value: number) { this.nativeObject.numberOfClicksRequired = value; }
  get numberOfTouchesRequired(): number { return this.nativeObject.numberOfTouchesRequired; }
  set numberOfTouchesRequired(value: number) { this.nativeObject.numberOfTouchesRequired = value; }
}

export class HTMLNSLayoutYAxisAnchorElement extends HTMLNSLayoutAnchorElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSLayoutYAxisAnchor.new();

}

export class HTMLNSMagnificationGestureRecognizerElement extends HTMLNSGestureRecognizerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSMagnificationGestureRecognizer.new();

  get magnification(): number { return this.nativeObject.magnification; }
  set magnification(value: number) { this.nativeObject.magnification = value; }
}

export class HTMLNSImageCellElement extends HTMLNSCellElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSImageCell.new();

  get imageAlignment(): interop.Enum<typeof NSImageAlignment> { return this.nativeObject.imageAlignment; }
  set imageAlignment(value: interop.Enum<typeof NSImageAlignment>) { this.nativeObject.imageAlignment = value; }
  get imageScaling(): interop.Enum<typeof NSImageScaling> { return this.nativeObject.imageScaling; }
  set imageScaling(value: interop.Enum<typeof NSImageScaling>) { this.nativeObject.imageScaling = value; }
  get imageFrameStyle(): interop.Enum<typeof NSImageFrameStyle> { return this.nativeObject.imageFrameStyle; }
  set imageFrameStyle(value: interop.Enum<typeof NSImageFrameStyle>) { this.nativeObject.imageFrameStyle = value; }
}

export class HTMLNSSearchToolbarItemElement extends HTMLNSToolbarItemElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSSearchToolbarItem.new();

  get searchField(): NSSearchField { return this.nativeObject.searchField; }
  set searchField(value: NSSearchField) { this.nativeObject.searchField = value; }
  get resignsFirstResponderWithCancel(): boolean { return this.nativeObject.resignsFirstResponderWithCancel; }
  set resignsFirstResponderWithCancel(value: boolean) { this.nativeObject.resignsFirstResponderWithCancel = value; }
  get preferredWidthForSearchField(): number { return this.nativeObject.preferredWidthForSearchField; }
  set preferredWidthForSearchField(value: number) { this.nativeObject.preferredWidthForSearchField = value; }
}

export class HTMLNSPickerTouchBarItemElement extends HTMLNSTouchBarItemElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSPickerTouchBarItem.new();

  get controlRepresentation(): interop.Enum<typeof NSPickerTouchBarItemControlRepresentation> { return this.nativeObject.controlRepresentation; }
  set controlRepresentation(value: interop.Enum<typeof NSPickerTouchBarItemControlRepresentation>) { this.nativeObject.controlRepresentation = value; }
  get collapsedRepresentationLabel(): string { return this.nativeObject.collapsedRepresentationLabel; }
  set collapsedRepresentationLabel(value: string) { this.nativeObject.collapsedRepresentationLabel = value; }
  get collapsedRepresentationImage(): NSImage { return this.nativeObject.collapsedRepresentationImage; }
  set collapsedRepresentationImage(value: NSImage) { this.nativeObject.collapsedRepresentationImage = value; }
  get selectedIndex(): number { return this.nativeObject.selectedIndex; }
  set selectedIndex(value: number) { this.nativeObject.selectedIndex = value; }
  get selectionColor(): NSColor { return this.nativeObject.selectionColor; }
  set selectionColor(value: NSColor) { this.nativeObject.selectionColor = value; }
  get selectionMode(): interop.Enum<typeof NSPickerTouchBarItemSelectionMode> { return this.nativeObject.selectionMode; }
  set selectionMode(value: interop.Enum<typeof NSPickerTouchBarItemSelectionMode>) { this.nativeObject.selectionMode = value; }
  get numberOfOptions(): number { return this.nativeObject.numberOfOptions; }
  set numberOfOptions(value: number) { this.nativeObject.numberOfOptions = value; }
  get target(): interop.Object { return this.nativeObject.target; }
  set target(value: interop.Object) { this.nativeObject.target = value; }
  get action(): string { return this.nativeObject.action; }
  set action(value: string) { this.nativeObject.action = value; }
  get isEnabled(): boolean { return this.nativeObject.isEnabled; }
  set isEnabled(value: boolean) { this.nativeObject.isEnabled = value; }
  get customizationLabel(): string { return this.nativeObject.customizationLabel; }
  set customizationLabel(value: string) { this.nativeObject.customizationLabel = value; }
}

export class HTMLNSArrayControllerElement extends HTMLNSObjectControllerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSArrayController.new();

  get automaticallyRearrangesObjects(): boolean { return this.nativeObject.automaticallyRearrangesObjects; }
  set automaticallyRearrangesObjects(value: boolean) { this.nativeObject.automaticallyRearrangesObjects = value; }
  get automaticRearrangementKeyPaths(): NSArray { return this.nativeObject.automaticRearrangementKeyPaths; }
  get sortDescriptors(): NSArray { return this.nativeObject.sortDescriptors; }
  set sortDescriptors(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.sortDescriptors = value; }
  get filterPredicate(): NSPredicate { return this.nativeObject.filterPredicate; }
  set filterPredicate(value: NSPredicate) { this.nativeObject.filterPredicate = value; }
  get clearsFilterPredicateOnInsertion(): boolean { return this.nativeObject.clearsFilterPredicateOnInsertion; }
  set clearsFilterPredicateOnInsertion(value: boolean) { this.nativeObject.clearsFilterPredicateOnInsertion = value; }
  get arrangedObjects(): interop.Object { return this.nativeObject.arrangedObjects; }
  get avoidsEmptySelection(): boolean { return this.nativeObject.avoidsEmptySelection; }
  set avoidsEmptySelection(value: boolean) { this.nativeObject.avoidsEmptySelection = value; }
  get preservesSelection(): boolean { return this.nativeObject.preservesSelection; }
  set preservesSelection(value: boolean) { this.nativeObject.preservesSelection = value; }
  get selectsInsertedObjects(): boolean { return this.nativeObject.selectsInsertedObjects; }
  set selectsInsertedObjects(value: boolean) { this.nativeObject.selectsInsertedObjects = value; }
  get alwaysUsesMultipleValuesMarker(): boolean { return this.nativeObject.alwaysUsesMultipleValuesMarker; }
  set alwaysUsesMultipleValuesMarker(value: boolean) { this.nativeObject.alwaysUsesMultipleValuesMarker = value; }
  get selectionIndexes(): NSIndexSet { return this.nativeObject.selectionIndexes; }
  get selectionIndex(): number { return this.nativeObject.selectionIndex; }
  get selectedObjects(): NSArray { return this.nativeObject.selectedObjects; }
  get canInsert(): boolean { return this.nativeObject.canInsert; }
  get canSelectNext(): boolean { return this.nativeObject.canSelectNext; }
  get canSelectPrevious(): boolean { return this.nativeObject.canSelectPrevious; }
}

export class HTMLNSGridViewElement extends HTMLNSViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSGridView.new();

  get numberOfRows(): number { return this.nativeObject.numberOfRows; }
  get numberOfColumns(): number { return this.nativeObject.numberOfColumns; }
  get xPlacement(): interop.Enum<typeof NSGridCellPlacement> { return this.nativeObject.xPlacement; }
  set xPlacement(value: interop.Enum<typeof NSGridCellPlacement>) { this.nativeObject.xPlacement = value; }
  get yPlacement(): interop.Enum<typeof NSGridCellPlacement> { return this.nativeObject.yPlacement; }
  set yPlacement(value: interop.Enum<typeof NSGridCellPlacement>) { this.nativeObject.yPlacement = value; }
  get rowAlignment(): interop.Enum<typeof NSGridRowAlignment> { return this.nativeObject.rowAlignment; }
  set rowAlignment(value: interop.Enum<typeof NSGridRowAlignment>) { this.nativeObject.rowAlignment = value; }
  get rowSpacing(): number { return this.nativeObject.rowSpacing; }
  set rowSpacing(value: number) { this.nativeObject.rowSpacing = value; }
  get columnSpacing(): number { return this.nativeObject.columnSpacing; }
  set columnSpacing(value: number) { this.nativeObject.columnSpacing = value; }
}

export class HTMLNSSplitViewElement extends HTMLNSViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSSplitView.new();
  get delegate(): NSSplitViewDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSSplitViewDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSSplitViewDelegateImpl;
  }

  get isVertical(): boolean { return this.nativeObject.isVertical; }
  set isVertical(value: boolean) { this.nativeObject.isVertical = value; }
  get dividerStyle(): interop.Enum<typeof NSSplitViewDividerStyle> { return this.nativeObject.dividerStyle; }
  set dividerStyle(value: interop.Enum<typeof NSSplitViewDividerStyle>) { this.nativeObject.dividerStyle = value; }
  get autosaveName(): string { return this.nativeObject.autosaveName; }
  set autosaveName(value: string) { this.nativeObject.autosaveName = value; }
  get dividerColor(): NSColor { return this.nativeObject.dividerColor; }
  get dividerThickness(): number { return this.nativeObject.dividerThickness; }
  get arrangesAllSubviews(): boolean { return this.nativeObject.arrangesAllSubviews; }
  set arrangesAllSubviews(value: boolean) { this.nativeObject.arrangesAllSubviews = value; }
  get arrangedSubviews(): NSArray { return this.nativeObject.arrangedSubviews; }

  set splitViewCanCollapseSubview(value: (splitView: NSSplitView, subview: NSView) => boolean) {
    this.delegate.splitViewCanCollapseSubview = value;
  }
  set splitViewShouldCollapseSubviewForDoubleClickOnDividerAtIndex(value: (splitView: NSSplitView, subview: NSView, dividerIndex: number) => boolean) {
    this.delegate.splitViewShouldCollapseSubviewForDoubleClickOnDividerAtIndex = value;
  }
  set splitViewConstrainMinCoordinateOfSubviewAt(value: (splitView: NSSplitView, proposedMinimumPosition: number, dividerIndex: number) => number) {
    this.delegate.splitViewConstrainMinCoordinateOfSubviewAt = value;
  }
  set splitViewConstrainMaxCoordinateOfSubviewAt(value: (splitView: NSSplitView, proposedMaximumPosition: number, dividerIndex: number) => number) {
    this.delegate.splitViewConstrainMaxCoordinateOfSubviewAt = value;
  }
  set splitViewConstrainSplitPositionOfSubviewAt(value: (splitView: NSSplitView, proposedPosition: number, dividerIndex: number) => number) {
    this.delegate.splitViewConstrainSplitPositionOfSubviewAt = value;
  }
  set splitViewResizeSubviewsWithOldSize(value: (splitView: NSSplitView, oldSize: CGSize) => void) {
    this.delegate.splitViewResizeSubviewsWithOldSize = value;
  }
  set splitViewShouldAdjustSizeOfSubview(value: (splitView: NSSplitView, view: NSView) => boolean) {
    this.delegate.splitViewShouldAdjustSizeOfSubview = value;
  }
  set splitViewShouldHideDividerAtIndex(value: (splitView: NSSplitView, dividerIndex: number) => boolean) {
    this.delegate.splitViewShouldHideDividerAtIndex = value;
  }
  set splitViewEffectiveRectForDrawnRectOfDividerAtIndex(value: (splitView: NSSplitView, proposedEffectiveRect: CGRect, drawnRect: CGRect, dividerIndex: number) => CGRect) {
    this.delegate.splitViewEffectiveRectForDrawnRectOfDividerAtIndex = value;
  }
  set splitViewAdditionalEffectiveRectOfDividerAtIndex(value: (splitView: NSSplitView, dividerIndex: number) => CGRect) {
    this.delegate.splitViewAdditionalEffectiveRectOfDividerAtIndex = value;
  }
  set splitViewWillResizeSubviews(value: (notification: NSNotification) => void) {
    this.delegate.splitViewWillResizeSubviews = value;
  }
  set splitViewDidResizeSubviews(value: (notification: NSNotification) => void) {
    this.delegate.splitViewDidResizeSubviews = value;
  }
}

export class HTMLNSLayoutDimensionElement extends HTMLNSLayoutAnchorElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSLayoutDimension.new();

}

export class HTMLNSDatePickerCellElement extends HTMLNSActionCellElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSDatePickerCell.new();
  get delegate(): NSDatePickerCellDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSDatePickerCellDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSDatePickerCellDelegateImpl;
  }

  get datePickerStyle(): interop.Enum<typeof NSDatePickerStyle> { return this.nativeObject.datePickerStyle; }
  set datePickerStyle(value: interop.Enum<typeof NSDatePickerStyle>) { this.nativeObject.datePickerStyle = value; }
  get drawsBackground(): boolean { return this.nativeObject.drawsBackground; }
  set drawsBackground(value: boolean) { this.nativeObject.drawsBackground = value; }
  get backgroundColor(): NSColor { return this.nativeObject.backgroundColor; }
  set backgroundColor(value: NSColor) { this.nativeObject.backgroundColor = value; }
  get textColor(): NSColor { return this.nativeObject.textColor; }
  set textColor(value: NSColor) { this.nativeObject.textColor = value; }
  get datePickerMode(): interop.Enum<typeof NSDatePickerMode> { return this.nativeObject.datePickerMode; }
  set datePickerMode(value: interop.Enum<typeof NSDatePickerMode>) { this.nativeObject.datePickerMode = value; }
  get datePickerElements(): interop.Enum<typeof NSDatePickerElementFlags> { return this.nativeObject.datePickerElements; }
  set datePickerElements(value: interop.Enum<typeof NSDatePickerElementFlags>) { this.nativeObject.datePickerElements = value; }
  get calendar(): NSCalendar { return this.nativeObject.calendar; }
  set calendar(value: NSCalendar) { this.nativeObject.calendar = value; }
  get locale(): NSLocale { return this.nativeObject.locale; }
  set locale(value: NSLocale) { this.nativeObject.locale = value; }
  get timeZone(): NSTimeZone { return this.nativeObject.timeZone; }
  set timeZone(value: NSTimeZone) { this.nativeObject.timeZone = value; }
  get dateValue(): NSDate { return this.nativeObject.dateValue; }
  set dateValue(value: NSDate) { this.nativeObject.dateValue = value; }
  get timeInterval(): number { return this.nativeObject.timeInterval; }
  set timeInterval(value: number) { this.nativeObject.timeInterval = value; }
  get minDate(): NSDate { return this.nativeObject.minDate; }
  set minDate(value: NSDate) { this.nativeObject.minDate = value; }
  get maxDate(): NSDate { return this.nativeObject.maxDate; }
  set maxDate(value: NSDate) { this.nativeObject.maxDate = value; }

  set datePickerCellValidateProposedDateValueTimeInterval(value: (datePickerCell: NSDatePickerCell, proposedDateValue: interop.PointerConvertible, proposedTimeInterval: interop.PointerConvertible) => void) {
    this.delegate.datePickerCellValidateProposedDateValueTimeInterval = value;
  }
}

export class HTMLNSViewControllerElement extends HTMLNSResponderElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSViewController.new();

  get nibName(): string { return this.nativeObject.nibName; }
  get nibBundle(): NSBundle { return this.nativeObject.nibBundle; }
  get representedObject(): interop.Object { return this.nativeObject.representedObject; }
  set representedObject(value: interop.Object) { this.nativeObject.representedObject = value; }
  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get view(): NSView { return this.nativeObject.view; }
  set view(value: NSView) { this.nativeObject.view = value; }
  get viewIfLoaded(): NSView { return this.nativeObject.viewIfLoaded; }
  get isViewLoaded(): boolean { return this.nativeObject.isViewLoaded; }
  get preferredContentSize(): CGSize { return this.nativeObject.preferredContentSize; }
  set preferredContentSize(value: CGSize) { this.nativeObject.preferredContentSize = value; }
  get presentedViewControllers(): NSArray { return this.nativeObject.presentedViewControllers; }
  get presentingViewController(): NSViewController { return this.nativeObject.presentingViewController; }
  get parentViewController(): NSViewController { return this.nativeObject.parentViewController; }
  get childViewControllers(): NSArray { return this.nativeObject.childViewControllers; }
  set childViewControllers(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.childViewControllers = value; }
  get storyboard(): NSStoryboard { return this.nativeObject.storyboard; }
  get extensionContext(): NSExtensionContext { return this.nativeObject.extensionContext; }
  get sourceItemView(): NSView { return this.nativeObject.sourceItemView; }
  set sourceItemView(value: NSView) { this.nativeObject.sourceItemView = value; }
  get preferredScreenOrigin(): CGPoint { return this.nativeObject.preferredScreenOrigin; }
  set preferredScreenOrigin(value: CGPoint) { this.nativeObject.preferredScreenOrigin = value; }
  get preferredMinimumSize(): CGSize { return this.nativeObject.preferredMinimumSize; }
  get preferredMaximumSize(): CGSize { return this.nativeObject.preferredMaximumSize; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
  get identifier(): string { return this.nativeObject.identifier; }
  set identifier(value: string) { this.nativeObject.identifier = value; }
}

export class HTMLNSPressGestureRecognizerElement extends HTMLNSGestureRecognizerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSPressGestureRecognizer.new();

  get buttonMask(): number { return this.nativeObject.buttonMask; }
  set buttonMask(value: number) { this.nativeObject.buttonMask = value; }
  get minimumPressDuration(): number { return this.nativeObject.minimumPressDuration; }
  set minimumPressDuration(value: number) { this.nativeObject.minimumPressDuration = value; }
  get allowableMovement(): number { return this.nativeObject.allowableMovement; }
  set allowableMovement(value: number) { this.nativeObject.allowableMovement = value; }
  get numberOfTouchesRequired(): number { return this.nativeObject.numberOfTouchesRequired; }
  set numberOfTouchesRequired(value: number) { this.nativeObject.numberOfTouchesRequired = value; }
}

export class HTMLNSPopUpButtonCellElement extends HTMLNSMenuItemCellElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSPopUpButtonCell.new();

  get menu(): NSMenu { return this.nativeObject.menu; }
  set menu(value: NSMenu) { this.nativeObject.menu = value; }
  get pullsDown(): boolean { return this.nativeObject.pullsDown; }
  set pullsDown(value: boolean) { this.nativeObject.pullsDown = value; }
  get autoenablesItems(): boolean { return this.nativeObject.autoenablesItems; }
  set autoenablesItems(value: boolean) { this.nativeObject.autoenablesItems = value; }
  get preferredEdge(): interop.Enum<typeof NSRectEdge> { return this.nativeObject.preferredEdge; }
  set preferredEdge(value: interop.Enum<typeof NSRectEdge>) { this.nativeObject.preferredEdge = value; }
  get usesItemFromMenu(): boolean { return this.nativeObject.usesItemFromMenu; }
  set usesItemFromMenu(value: boolean) { this.nativeObject.usesItemFromMenu = value; }
  get altersStateOfSelectedItem(): boolean { return this.nativeObject.altersStateOfSelectedItem; }
  set altersStateOfSelectedItem(value: boolean) { this.nativeObject.altersStateOfSelectedItem = value; }
  get itemArray(): NSArray { return this.nativeObject.itemArray; }
  get numberOfItems(): number { return this.nativeObject.numberOfItems; }
  get lastItem(): NSMenuItem { return this.nativeObject.lastItem; }
  get selectedItem(): NSMenuItem { return this.nativeObject.selectedItem; }
  get indexOfSelectedItem(): number { return this.nativeObject.indexOfSelectedItem; }
  get itemTitles(): NSArray { return this.nativeObject.itemTitles; }
  get titleOfSelectedItem(): string { return this.nativeObject.titleOfSelectedItem; }
  get arrowPosition(): interop.Enum<typeof NSPopUpArrowPosition> { return this.nativeObject.arrowPosition; }
  set arrowPosition(value: interop.Enum<typeof NSPopUpArrowPosition>) { this.nativeObject.arrowPosition = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLNSTextElement extends HTMLNSViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSText.new();
  get delegate(): NSTextDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSTextDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSTextDelegateImpl;
  }

  get string(): string { return this.nativeObject.string; }
  set string(value: string) { this.nativeObject.string = value; }
  get isEditable(): boolean { return this.nativeObject.isEditable; }
  set isEditable(value: boolean) { this.nativeObject.isEditable = value; }
  get isSelectable(): boolean { return this.nativeObject.isSelectable; }
  set isSelectable(value: boolean) { this.nativeObject.isSelectable = value; }
  get isRichText(): boolean { return this.nativeObject.isRichText; }
  set isRichText(value: boolean) { this.nativeObject.isRichText = value; }
  get importsGraphics(): boolean { return this.nativeObject.importsGraphics; }
  set importsGraphics(value: boolean) { this.nativeObject.importsGraphics = value; }
  get isFieldEditor(): boolean { return this.nativeObject.isFieldEditor; }
  set isFieldEditor(value: boolean) { this.nativeObject.isFieldEditor = value; }
  get usesFontPanel(): boolean { return this.nativeObject.usesFontPanel; }
  set usesFontPanel(value: boolean) { this.nativeObject.usesFontPanel = value; }
  get drawsBackground(): boolean { return this.nativeObject.drawsBackground; }
  set drawsBackground(value: boolean) { this.nativeObject.drawsBackground = value; }
  get backgroundColor(): NSColor { return this.nativeObject.backgroundColor; }
  set backgroundColor(value: NSColor) { this.nativeObject.backgroundColor = value; }
  get isRulerVisible(): boolean { return this.nativeObject.isRulerVisible; }
  get selectedRange(): _NSRange { return this.nativeObject.selectedRange; }
  set selectedRange(value: _NSRange) { this.nativeObject.selectedRange = value; }
  get font(): NSFont { return this.nativeObject.font; }
  set font(value: NSFont) { this.nativeObject.font = value; }
  get textColor(): NSColor { return this.nativeObject.textColor; }
  set textColor(value: NSColor) { this.nativeObject.textColor = value; }
  get alignment(): interop.Enum<typeof NSTextAlignment> { return this.nativeObject.alignment; }
  set alignment(value: interop.Enum<typeof NSTextAlignment>) { this.nativeObject.alignment = value; }
  get baseWritingDirection(): interop.Enum<typeof NSWritingDirection> { return this.nativeObject.baseWritingDirection; }
  set baseWritingDirection(value: interop.Enum<typeof NSWritingDirection>) { this.nativeObject.baseWritingDirection = value; }
  get maxSize(): CGSize { return this.nativeObject.maxSize; }
  set maxSize(value: CGSize) { this.nativeObject.maxSize = value; }
  get minSize(): CGSize { return this.nativeObject.minSize; }
  set minSize(value: CGSize) { this.nativeObject.minSize = value; }
  get isHorizontallyResizable(): boolean { return this.nativeObject.isHorizontallyResizable; }
  set isHorizontallyResizable(value: boolean) { this.nativeObject.isHorizontallyResizable = value; }
  get isVerticallyResizable(): boolean { return this.nativeObject.isVerticallyResizable; }
  set isVerticallyResizable(value: boolean) { this.nativeObject.isVerticallyResizable = value; }

  set textShouldBeginEditing(value: (textObject: NSText) => boolean) {
    this.delegate.textShouldBeginEditing = value;
  }
  set textShouldEndEditing(value: (textObject: NSText) => boolean) {
    this.delegate.textShouldEndEditing = value;
  }
  set textDidBeginEditing(value: (notification: NSNotification) => void) {
    this.delegate.textDidBeginEditing = value;
  }
  set textDidEndEditing(value: (notification: NSNotification) => void) {
    this.delegate.textDidEndEditing = value;
  }
  set textDidChange(value: (notification: NSNotification) => void) {
    this.delegate.textDidChange = value;
  }
}

export class HTMLNSDiffableDataSourceSnapshotElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSDiffableDataSourceSnapshot.new();

  get numberOfItems(): number { return this.nativeObject.numberOfItems; }
  get numberOfSections(): number { return this.nativeObject.numberOfSections; }
  get sectionIdentifiers(): NSArray { return this.nativeObject.sectionIdentifiers; }
  get itemIdentifiers(): NSArray { return this.nativeObject.itemIdentifiers; }
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

export class HTMLNSTintConfigurationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTintConfiguration.new();

  get baseTintColor(): NSColor { return this.nativeObject.baseTintColor; }
  get equivalentContentTintColor(): NSColor { return this.nativeObject.equivalentContentTintColor; }
  get adaptsToUserAccentColor(): boolean { return this.nativeObject.adaptsToUserAccentColor; }
}

export class HTMLNSUserDefaultsControllerElement extends HTMLNSControllerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSUserDefaultsController.new();

  get defaults(): NSUserDefaults { return this.nativeObject.defaults; }
  get initialValues(): NSDictionary { return this.nativeObject.initialValues; }
  set initialValues(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) { this.nativeObject.initialValues = value; }
  get appliesImmediately(): boolean { return this.nativeObject.appliesImmediately; }
  set appliesImmediately(value: boolean) { this.nativeObject.appliesImmediately = value; }
  get hasUnappliedChanges(): boolean { return this.nativeObject.hasUnappliedChanges; }
  get values(): interop.Object { return this.nativeObject.values; }
}

export class HTMLNSOpenGLContextElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSOpenGLContext.new();

  get pixelFormat(): NSOpenGLPixelFormat { return this.nativeObject.pixelFormat; }
  get view(): NSView { return this.nativeObject.view; }
  set view(value: NSView) { this.nativeObject.view = value; }
  get currentVirtualScreen(): number { return this.nativeObject.currentVirtualScreen; }
  set currentVirtualScreen(value: number) { this.nativeObject.currentVirtualScreen = value; }
  get CGLContextObj(): interop.Pointer { return this.nativeObject.CGLContextObj; }
}

export class HTMLNSProgressIndicatorElement extends HTMLNSViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSProgressIndicator.new();

  get isIndeterminate(): boolean { return this.nativeObject.isIndeterminate; }
  set isIndeterminate(value: boolean) { this.nativeObject.isIndeterminate = value; }
  get controlSize(): interop.Enum<typeof NSControlSize> { return this.nativeObject.controlSize; }
  set controlSize(value: interop.Enum<typeof NSControlSize>) { this.nativeObject.controlSize = value; }
  get doubleValue(): number { return this.nativeObject.doubleValue; }
  set doubleValue(value: number) { this.nativeObject.doubleValue = value; }
  get minValue(): number { return this.nativeObject.minValue; }
  set minValue(value: number) { this.nativeObject.minValue = value; }
  get maxValue(): number { return this.nativeObject.maxValue; }
  set maxValue(value: number) { this.nativeObject.maxValue = value; }
  get observedProgress(): NSProgress { return this.nativeObject.observedProgress; }
  set observedProgress(value: NSProgress) { this.nativeObject.observedProgress = value; }
  get usesThreadedAnimation(): boolean { return this.nativeObject.usesThreadedAnimation; }
  set usesThreadedAnimation(value: boolean) { this.nativeObject.usesThreadedAnimation = value; }
  get isDisplayedWhenStopped(): boolean { return this.nativeObject.isDisplayedWhenStopped; }
  set isDisplayedWhenStopped(value: boolean) { this.nativeObject.isDisplayedWhenStopped = value; }
  get isBezeled(): boolean { return this.nativeObject.isBezeled; }
  set isBezeled(value: boolean) { this.nativeObject.isBezeled = value; }
  get controlTint(): interop.Enum<typeof NSControlTint> { return this.nativeObject.controlTint; }
  set controlTint(value: interop.Enum<typeof NSControlTint>) { this.nativeObject.controlTint = value; }
  get accessibilityValue(): NSNumber { return this.nativeObject.accessibilityValue; }
  set accessibilityValue(value: NSNumber) { this.nativeObject.accessibilityValue = value; }
  get accessibilityFrame(): CGRect { return this.nativeObject.accessibilityFrame; }
  set accessibilityFrame(value: CGRect) { this.nativeObject.accessibilityFrame = value; }
  get accessibilityParent(): interop.Object { return this.nativeObject.accessibilityParent; }
  set accessibilityParent(value: interop.Object) { this.nativeObject.accessibilityParent = value; }
  get isAccessibilityFocused(): boolean { return this.nativeObject.isAccessibilityFocused; }
  set isAccessibilityFocused(value: boolean) { this.nativeObject.isAccessibilityFocused = value; }
  get accessibilityIdentifier(): string { return this.nativeObject.accessibilityIdentifier; }
  set accessibilityIdentifier(value: string) { this.nativeObject.accessibilityIdentifier = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLNSScrubberArrangedViewElement extends HTMLNSViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSScrubberArrangedView.new();

  get isSelected(): boolean { return this.nativeObject.isSelected; }
  set isSelected(value: boolean) { this.nativeObject.isSelected = value; }
  get isHighlighted(): boolean { return this.nativeObject.isHighlighted; }
  set isHighlighted(value: boolean) { this.nativeObject.isHighlighted = value; }
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

export class HTMLNSSpeechSynthesizerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSSpeechSynthesizer.new();
  get delegate(): NSSpeechSynthesizerDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSSpeechSynthesizerDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSSpeechSynthesizerDelegateImpl;
  }

  get isSpeaking(): boolean { return this.nativeObject.isSpeaking; }
  get rate(): number { return this.nativeObject.rate; }
  set rate(value: number) { this.nativeObject.rate = value; }
  get volume(): number { return this.nativeObject.volume; }
  set volume(value: number) { this.nativeObject.volume = value; }
  get usesFeedbackWindow(): boolean { return this.nativeObject.usesFeedbackWindow; }
  set usesFeedbackWindow(value: boolean) { this.nativeObject.usesFeedbackWindow = value; }

  set speechSynthesizerDidFinishSpeaking(value: (sender: NSSpeechSynthesizer, finishedSpeaking: boolean) => void) {
    this.delegate.speechSynthesizerDidFinishSpeaking = value;
  }
  set speechSynthesizerWillSpeakWordOfString(value: (sender: NSSpeechSynthesizer, characterRange: _NSRange, string: string) => void) {
    this.delegate.speechSynthesizerWillSpeakWordOfString = value;
  }
  set speechSynthesizerWillSpeakPhoneme(value: (sender: NSSpeechSynthesizer, phonemeOpcode: number) => void) {
    this.delegate.speechSynthesizerWillSpeakPhoneme = value;
  }
  set speechSynthesizerDidEncounterErrorAtIndexOfStringMessage(value: (sender: NSSpeechSynthesizer, characterIndex: number, string: string, message: string) => void) {
    this.delegate.speechSynthesizerDidEncounterErrorAtIndexOfStringMessage = value;
  }
  set speechSynthesizerDidEncounterSyncMessage(value: (sender: NSSpeechSynthesizer, message: string) => void) {
    this.delegate.speechSynthesizerDidEncounterSyncMessage = value;
  }
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
  get tighteningFactorForTruncation(): number { return this.nativeObject.tighteningFactorForTruncation; }
  set tighteningFactorForTruncation(value: number) { this.nativeObject.tighteningFactorForTruncation = value; }
  get textBlocks(): NSArray { return this.nativeObject.textBlocks; }
  set textBlocks(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.textBlocks = value; }
  get textLists(): NSArray { return this.nativeObject.textLists; }
  set textLists(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.textLists = value; }
  get headerLevel(): number { return this.nativeObject.headerLevel; }
  set headerLevel(value: number) { this.nativeObject.headerLevel = value; }
  get lineBreakStrategy(): interop.Enum<typeof NSLineBreakStrategy> { return this.nativeObject.lineBreakStrategy; }
  set lineBreakStrategy(value: interop.Enum<typeof NSLineBreakStrategy>) { this.nativeObject.lineBreakStrategy = value; }
}

export class HTMLNSStoryboardElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSStoryboard.new();

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

export class HTMLNSCollectionLayoutSectionElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSCollectionLayoutSection.new();

  get contentInsets(): NSDirectionalEdgeInsets { return this.nativeObject.contentInsets; }
  set contentInsets(value: NSDirectionalEdgeInsets) { this.nativeObject.contentInsets = value; }
  get interGroupSpacing(): number { return this.nativeObject.interGroupSpacing; }
  set interGroupSpacing(value: number) { this.nativeObject.interGroupSpacing = value; }
  get orthogonalScrollingBehavior(): interop.Enum<typeof NSCollectionLayoutSectionOrthogonalScrollingBehavior> { return this.nativeObject.orthogonalScrollingBehavior; }
  set orthogonalScrollingBehavior(value: interop.Enum<typeof NSCollectionLayoutSectionOrthogonalScrollingBehavior>) { this.nativeObject.orthogonalScrollingBehavior = value; }
  get boundarySupplementaryItems(): NSArray { return this.nativeObject.boundarySupplementaryItems; }
  set boundarySupplementaryItems(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.boundarySupplementaryItems = value; }
  get supplementariesFollowContentInsets(): boolean { return this.nativeObject.supplementariesFollowContentInsets; }
  set supplementariesFollowContentInsets(value: boolean) { this.nativeObject.supplementariesFollowContentInsets = value; }
  get visibleItemsInvalidationHandler(): (p1: NSArray<interop.Object> | Array<interop.Object>, p2: CGPoint, p3: NSCollectionLayoutEnvironment) => void { return this.nativeObject.visibleItemsInvalidationHandler; }
  set visibleItemsInvalidationHandler(value: (p1: NSArray<interop.Object> | Array<interop.Object>, p2: CGPoint, p3: NSCollectionLayoutEnvironment) => void) { this.nativeObject.visibleItemsInvalidationHandler = value; }
  get decorationItems(): NSArray { return this.nativeObject.decorationItems; }
  set decorationItems(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.decorationItems = value; }
}

export class HTMLNSGroupTouchBarItemElement extends HTMLNSTouchBarItemElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSGroupTouchBarItem.new();

  get groupTouchBar(): NSTouchBar { return this.nativeObject.groupTouchBar; }
  set groupTouchBar(value: NSTouchBar) { this.nativeObject.groupTouchBar = value; }
  get customizationLabel(): string { return this.nativeObject.customizationLabel; }
  set customizationLabel(value: string) { this.nativeObject.customizationLabel = value; }
  get groupUserInterfaceLayoutDirection(): interop.Enum<typeof NSUserInterfaceLayoutDirection> { return this.nativeObject.groupUserInterfaceLayoutDirection; }
  set groupUserInterfaceLayoutDirection(value: interop.Enum<typeof NSUserInterfaceLayoutDirection>) { this.nativeObject.groupUserInterfaceLayoutDirection = value; }
  get prefersEqualWidths(): boolean { return this.nativeObject.prefersEqualWidths; }
  set prefersEqualWidths(value: boolean) { this.nativeObject.prefersEqualWidths = value; }
  get preferredItemWidth(): number { return this.nativeObject.preferredItemWidth; }
  set preferredItemWidth(value: number) { this.nativeObject.preferredItemWidth = value; }
  get effectiveCompressionOptions(): NSUserInterfaceCompressionOptions { return this.nativeObject.effectiveCompressionOptions; }
  get prioritizedCompressionOptions(): NSArray { return this.nativeObject.prioritizedCompressionOptions; }
  set prioritizedCompressionOptions(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.prioritizedCompressionOptions = value; }
}

export class HTMLNSMenuElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSMenu.new();
  get delegate(): NSMenuDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSMenuDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSMenuDelegateImpl;
  }

  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get supermenu(): NSMenu { return this.nativeObject.supermenu; }
  set supermenu(value: NSMenu) { this.nativeObject.supermenu = value; }
  get itemArray(): NSArray { return this.nativeObject.itemArray; }
  set itemArray(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.itemArray = value; }
  get numberOfItems(): number { return this.nativeObject.numberOfItems; }
  get autoenablesItems(): boolean { return this.nativeObject.autoenablesItems; }
  set autoenablesItems(value: boolean) { this.nativeObject.autoenablesItems = value; }
  get menuBarHeight(): number { return this.nativeObject.menuBarHeight; }
  get highlightedItem(): NSMenuItem { return this.nativeObject.highlightedItem; }
  get minimumWidth(): number { return this.nativeObject.minimumWidth; }
  set minimumWidth(value: number) { this.nativeObject.minimumWidth = value; }
  get size(): CGSize { return this.nativeObject.size; }
  get font(): NSFont { return this.nativeObject.font; }
  set font(value: NSFont) { this.nativeObject.font = value; }
  get allowsContextMenuPlugIns(): boolean { return this.nativeObject.allowsContextMenuPlugIns; }
  set allowsContextMenuPlugIns(value: boolean) { this.nativeObject.allowsContextMenuPlugIns = value; }
  get showsStateColumn(): boolean { return this.nativeObject.showsStateColumn; }
  set showsStateColumn(value: boolean) { this.nativeObject.showsStateColumn = value; }
  get userInterfaceLayoutDirection(): interop.Enum<typeof NSUserInterfaceLayoutDirection> { return this.nativeObject.userInterfaceLayoutDirection; }
  set userInterfaceLayoutDirection(value: interop.Enum<typeof NSUserInterfaceLayoutDirection>) { this.nativeObject.userInterfaceLayoutDirection = value; }
  get presentationStyle(): interop.Enum<typeof NSMenuPresentationStyle> { return this.nativeObject.presentationStyle; }
  set presentationStyle(value: interop.Enum<typeof NSMenuPresentationStyle>) { this.nativeObject.presentationStyle = value; }
  get selectionMode(): interop.Enum<typeof NSMenuSelectionMode> { return this.nativeObject.selectionMode; }
  set selectionMode(value: interop.Enum<typeof NSMenuSelectionMode>) { this.nativeObject.selectionMode = value; }
  get selectedItems(): NSArray { return this.nativeObject.selectedItems; }
  set selectedItems(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.selectedItems = value; }
  get propertiesToUpdate(): interop.Enum<typeof NSMenuProperties> { return this.nativeObject.propertiesToUpdate; }
  get menuChangedMessagesEnabled(): boolean { return this.nativeObject.menuChangedMessagesEnabled; }
  set menuChangedMessagesEnabled(value: boolean) { this.nativeObject.menuChangedMessagesEnabled = value; }
  get isTornOff(): boolean { return this.nativeObject.isTornOff; }
  get identifier(): string { return this.nativeObject.identifier; }
  set identifier(value: string) { this.nativeObject.identifier = value; }
  get appearance(): NSAppearance { return this.nativeObject.appearance; }
  set appearance(value: NSAppearance) { this.nativeObject.appearance = value; }
  get effectiveAppearance(): NSAppearance { return this.nativeObject.effectiveAppearance; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
  get isAccessibilityElement(): boolean { return this.nativeObject.isAccessibilityElement; }
  set isAccessibilityElement(value: boolean) { this.nativeObject.isAccessibilityElement = value; }
  get accessibilityFrame(): CGRect { return this.nativeObject.accessibilityFrame; }
  set accessibilityFrame(value: CGRect) { this.nativeObject.accessibilityFrame = value; }
  get isAccessibilityFocused(): boolean { return this.nativeObject.isAccessibilityFocused; }
  set isAccessibilityFocused(value: boolean) { this.nativeObject.isAccessibilityFocused = value; }
  get accessibilityActivationPoint(): CGPoint { return this.nativeObject.accessibilityActivationPoint; }
  set accessibilityActivationPoint(value: CGPoint) { this.nativeObject.accessibilityActivationPoint = value; }
  get accessibilityTopLevelUIElement(): interop.Object { return this.nativeObject.accessibilityTopLevelUIElement; }
  set accessibilityTopLevelUIElement(value: interop.Object) { this.nativeObject.accessibilityTopLevelUIElement = value; }
  get accessibilityURL(): NSURL { return this.nativeObject.accessibilityURL; }
  set accessibilityURL(value: NSURL) { this.nativeObject.accessibilityURL = value; }
  get accessibilityValue(): interop.Object { return this.nativeObject.accessibilityValue; }
  set accessibilityValue(value: interop.Object) { this.nativeObject.accessibilityValue = value; }
  get accessibilityValueDescription(): string { return this.nativeObject.accessibilityValueDescription; }
  set accessibilityValueDescription(value: string) { this.nativeObject.accessibilityValueDescription = value; }
  get accessibilityVisibleChildren(): NSArray { return this.nativeObject.accessibilityVisibleChildren; }
  set accessibilityVisibleChildren(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleChildren = value; }
  get accessibilitySubrole(): string { return this.nativeObject.accessibilitySubrole; }
  set accessibilitySubrole(value: string) { this.nativeObject.accessibilitySubrole = value; }
  get accessibilityTitle(): string { return this.nativeObject.accessibilityTitle; }
  set accessibilityTitle(value: string) { this.nativeObject.accessibilityTitle = value; }
  get accessibilityTitleUIElement(): interop.Object { return this.nativeObject.accessibilityTitleUIElement; }
  set accessibilityTitleUIElement(value: interop.Object) { this.nativeObject.accessibilityTitleUIElement = value; }
  get accessibilityNextContents(): NSArray { return this.nativeObject.accessibilityNextContents; }
  set accessibilityNextContents(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityNextContents = value; }
  get accessibilityOrientation(): interop.Enum<typeof NSAccessibilityOrientation> { return this.nativeObject.accessibilityOrientation; }
  set accessibilityOrientation(value: interop.Enum<typeof NSAccessibilityOrientation>) { this.nativeObject.accessibilityOrientation = value; }
  get accessibilityOverflowButton(): interop.Object { return this.nativeObject.accessibilityOverflowButton; }
  set accessibilityOverflowButton(value: interop.Object) { this.nativeObject.accessibilityOverflowButton = value; }
  get accessibilityParent(): interop.Object { return this.nativeObject.accessibilityParent; }
  set accessibilityParent(value: interop.Object) { this.nativeObject.accessibilityParent = value; }
  get accessibilityPlaceholderValue(): string { return this.nativeObject.accessibilityPlaceholderValue; }
  set accessibilityPlaceholderValue(value: string) { this.nativeObject.accessibilityPlaceholderValue = value; }
  get accessibilityPreviousContents(): NSArray { return this.nativeObject.accessibilityPreviousContents; }
  set accessibilityPreviousContents(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityPreviousContents = value; }
  get accessibilityRole(): string { return this.nativeObject.accessibilityRole; }
  set accessibilityRole(value: string) { this.nativeObject.accessibilityRole = value; }
  get accessibilityRoleDescription(): string { return this.nativeObject.accessibilityRoleDescription; }
  set accessibilityRoleDescription(value: string) { this.nativeObject.accessibilityRoleDescription = value; }
  get accessibilitySearchButton(): interop.Object { return this.nativeObject.accessibilitySearchButton; }
  set accessibilitySearchButton(value: interop.Object) { this.nativeObject.accessibilitySearchButton = value; }
  get accessibilitySearchMenu(): interop.Object { return this.nativeObject.accessibilitySearchMenu; }
  set accessibilitySearchMenu(value: interop.Object) { this.nativeObject.accessibilitySearchMenu = value; }
  get isAccessibilitySelected(): boolean { return this.nativeObject.isAccessibilitySelected; }
  set isAccessibilitySelected(value: boolean) { this.nativeObject.isAccessibilitySelected = value; }
  get accessibilitySelectedChildren(): NSArray { return this.nativeObject.accessibilitySelectedChildren; }
  set accessibilitySelectedChildren(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedChildren = value; }
  get accessibilityServesAsTitleForUIElements(): NSArray { return this.nativeObject.accessibilityServesAsTitleForUIElements; }
  set accessibilityServesAsTitleForUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityServesAsTitleForUIElements = value; }
  get accessibilityShownMenu(): interop.Object { return this.nativeObject.accessibilityShownMenu; }
  set accessibilityShownMenu(value: interop.Object) { this.nativeObject.accessibilityShownMenu = value; }
  get accessibilityMinValue(): interop.Object { return this.nativeObject.accessibilityMinValue; }
  set accessibilityMinValue(value: interop.Object) { this.nativeObject.accessibilityMinValue = value; }
  get accessibilityMaxValue(): interop.Object { return this.nativeObject.accessibilityMaxValue; }
  set accessibilityMaxValue(value: interop.Object) { this.nativeObject.accessibilityMaxValue = value; }
  get accessibilityLinkedUIElements(): NSArray { return this.nativeObject.accessibilityLinkedUIElements; }
  set accessibilityLinkedUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityLinkedUIElements = value; }
  get accessibilityWindow(): interop.Object { return this.nativeObject.accessibilityWindow; }
  set accessibilityWindow(value: interop.Object) { this.nativeObject.accessibilityWindow = value; }
  get accessibilityIdentifier(): string { return this.nativeObject.accessibilityIdentifier; }
  set accessibilityIdentifier(value: string) { this.nativeObject.accessibilityIdentifier = value; }
  get accessibilityHelp(): string { return this.nativeObject.accessibilityHelp; }
  set accessibilityHelp(value: string) { this.nativeObject.accessibilityHelp = value; }
  get accessibilityFilename(): string { return this.nativeObject.accessibilityFilename; }
  set accessibilityFilename(value: string) { this.nativeObject.accessibilityFilename = value; }
  get isAccessibilityExpanded(): boolean { return this.nativeObject.isAccessibilityExpanded; }
  set isAccessibilityExpanded(value: boolean) { this.nativeObject.isAccessibilityExpanded = value; }
  get isAccessibilityEdited(): boolean { return this.nativeObject.isAccessibilityEdited; }
  set isAccessibilityEdited(value: boolean) { this.nativeObject.isAccessibilityEdited = value; }
  get isAccessibilityEnabled(): boolean { return this.nativeObject.isAccessibilityEnabled; }
  set isAccessibilityEnabled(value: boolean) { this.nativeObject.isAccessibilityEnabled = value; }
  get accessibilityChildren(): NSArray { return this.nativeObject.accessibilityChildren; }
  set accessibilityChildren(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityChildren = value; }
  get accessibilityChildrenInNavigationOrder(): NSArray { return this.nativeObject.accessibilityChildrenInNavigationOrder; }
  set accessibilityChildrenInNavigationOrder(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityChildrenInNavigationOrder = value; }
  get accessibilityClearButton(): interop.Object { return this.nativeObject.accessibilityClearButton; }
  set accessibilityClearButton(value: interop.Object) { this.nativeObject.accessibilityClearButton = value; }
  get accessibilityCancelButton(): interop.Object { return this.nativeObject.accessibilityCancelButton; }
  set accessibilityCancelButton(value: interop.Object) { this.nativeObject.accessibilityCancelButton = value; }
  get isAccessibilityProtectedContent(): boolean { return this.nativeObject.isAccessibilityProtectedContent; }
  set isAccessibilityProtectedContent(value: boolean) { this.nativeObject.isAccessibilityProtectedContent = value; }
  get accessibilityContents(): NSArray { return this.nativeObject.accessibilityContents; }
  set accessibilityContents(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityContents = value; }
  get accessibilityLabel(): string { return this.nativeObject.accessibilityLabel; }
  set accessibilityLabel(value: string) { this.nativeObject.accessibilityLabel = value; }
  get isAccessibilityAlternateUIVisible(): boolean { return this.nativeObject.isAccessibilityAlternateUIVisible; }
  set isAccessibilityAlternateUIVisible(value: boolean) { this.nativeObject.isAccessibilityAlternateUIVisible = value; }
  get accessibilitySharedFocusElements(): NSArray { return this.nativeObject.accessibilitySharedFocusElements; }
  set accessibilitySharedFocusElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySharedFocusElements = value; }
  get isAccessibilityRequired(): boolean { return this.nativeObject.isAccessibilityRequired; }
  set isAccessibilityRequired(value: boolean) { this.nativeObject.isAccessibilityRequired = value; }
  get accessibilityCustomRotors(): NSArray { return this.nativeObject.accessibilityCustomRotors; }
  set accessibilityCustomRotors(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityCustomRotors = value; }
  get accessibilityUserInputLabels(): NSArray { return this.nativeObject.accessibilityUserInputLabels; }
  set accessibilityUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityUserInputLabels = value; }
  get accessibilityAttributedUserInputLabels(): NSArray { return this.nativeObject.accessibilityAttributedUserInputLabels; }
  set accessibilityAttributedUserInputLabels(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityAttributedUserInputLabels = value; }
  get accessibilityApplicationFocusedUIElement(): interop.Object { return this.nativeObject.accessibilityApplicationFocusedUIElement; }
  set accessibilityApplicationFocusedUIElement(value: interop.Object) { this.nativeObject.accessibilityApplicationFocusedUIElement = value; }
  get accessibilityMainWindow(): interop.Object { return this.nativeObject.accessibilityMainWindow; }
  set accessibilityMainWindow(value: interop.Object) { this.nativeObject.accessibilityMainWindow = value; }
  get isAccessibilityHidden(): boolean { return this.nativeObject.isAccessibilityHidden; }
  set isAccessibilityHidden(value: boolean) { this.nativeObject.isAccessibilityHidden = value; }
  get isAccessibilityFrontmost(): boolean { return this.nativeObject.isAccessibilityFrontmost; }
  set isAccessibilityFrontmost(value: boolean) { this.nativeObject.isAccessibilityFrontmost = value; }
  get accessibilityFocusedWindow(): interop.Object { return this.nativeObject.accessibilityFocusedWindow; }
  set accessibilityFocusedWindow(value: interop.Object) { this.nativeObject.accessibilityFocusedWindow = value; }
  get accessibilityWindows(): NSArray { return this.nativeObject.accessibilityWindows; }
  set accessibilityWindows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityWindows = value; }
  get accessibilityExtrasMenuBar(): interop.Object { return this.nativeObject.accessibilityExtrasMenuBar; }
  set accessibilityExtrasMenuBar(value: interop.Object) { this.nativeObject.accessibilityExtrasMenuBar = value; }
  get accessibilityMenuBar(): interop.Object { return this.nativeObject.accessibilityMenuBar; }
  set accessibilityMenuBar(value: interop.Object) { this.nativeObject.accessibilityMenuBar = value; }
  get accessibilityColumnTitles(): NSArray { return this.nativeObject.accessibilityColumnTitles; }
  set accessibilityColumnTitles(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityColumnTitles = value; }
  get isAccessibilityOrderedByRow(): boolean { return this.nativeObject.isAccessibilityOrderedByRow; }
  set isAccessibilityOrderedByRow(value: boolean) { this.nativeObject.isAccessibilityOrderedByRow = value; }
  get accessibilityHorizontalUnits(): interop.Enum<typeof NSAccessibilityUnits> { return this.nativeObject.accessibilityHorizontalUnits; }
  set accessibilityHorizontalUnits(value: interop.Enum<typeof NSAccessibilityUnits>) { this.nativeObject.accessibilityHorizontalUnits = value; }
  get accessibilityVerticalUnits(): interop.Enum<typeof NSAccessibilityUnits> { return this.nativeObject.accessibilityVerticalUnits; }
  set accessibilityVerticalUnits(value: interop.Enum<typeof NSAccessibilityUnits>) { this.nativeObject.accessibilityVerticalUnits = value; }
  get accessibilityHorizontalUnitDescription(): string { return this.nativeObject.accessibilityHorizontalUnitDescription; }
  set accessibilityHorizontalUnitDescription(value: string) { this.nativeObject.accessibilityHorizontalUnitDescription = value; }
  get accessibilityVerticalUnitDescription(): string { return this.nativeObject.accessibilityVerticalUnitDescription; }
  set accessibilityVerticalUnitDescription(value: string) { this.nativeObject.accessibilityVerticalUnitDescription = value; }
  get accessibilityHandles(): NSArray { return this.nativeObject.accessibilityHandles; }
  set accessibilityHandles(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityHandles = value; }
  get accessibilityWarningValue(): interop.Object { return this.nativeObject.accessibilityWarningValue; }
  set accessibilityWarningValue(value: interop.Object) { this.nativeObject.accessibilityWarningValue = value; }
  get accessibilityCriticalValue(): interop.Object { return this.nativeObject.accessibilityCriticalValue; }
  set accessibilityCriticalValue(value: interop.Object) { this.nativeObject.accessibilityCriticalValue = value; }
  get isAccessibilityDisclosed(): boolean { return this.nativeObject.isAccessibilityDisclosed; }
  set isAccessibilityDisclosed(value: boolean) { this.nativeObject.isAccessibilityDisclosed = value; }
  get accessibilityDisclosedByRow(): interop.Object { return this.nativeObject.accessibilityDisclosedByRow; }
  set accessibilityDisclosedByRow(value: interop.Object) { this.nativeObject.accessibilityDisclosedByRow = value; }
  get accessibilityDisclosedRows(): interop.Object { return this.nativeObject.accessibilityDisclosedRows; }
  set accessibilityDisclosedRows(value: interop.Object) { this.nativeObject.accessibilityDisclosedRows = value; }
  get accessibilityDisclosureLevel(): number { return this.nativeObject.accessibilityDisclosureLevel; }
  set accessibilityDisclosureLevel(value: number) { this.nativeObject.accessibilityDisclosureLevel = value; }
  get accessibilityMarkerUIElements(): NSArray { return this.nativeObject.accessibilityMarkerUIElements; }
  set accessibilityMarkerUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityMarkerUIElements = value; }
  get accessibilityMarkerValues(): interop.Object { return this.nativeObject.accessibilityMarkerValues; }
  set accessibilityMarkerValues(value: interop.Object) { this.nativeObject.accessibilityMarkerValues = value; }
  get accessibilityMarkerGroupUIElement(): interop.Object { return this.nativeObject.accessibilityMarkerGroupUIElement; }
  set accessibilityMarkerGroupUIElement(value: interop.Object) { this.nativeObject.accessibilityMarkerGroupUIElement = value; }
  get accessibilityUnits(): interop.Enum<typeof NSAccessibilityUnits> { return this.nativeObject.accessibilityUnits; }
  set accessibilityUnits(value: interop.Enum<typeof NSAccessibilityUnits>) { this.nativeObject.accessibilityUnits = value; }
  get accessibilityUnitDescription(): string { return this.nativeObject.accessibilityUnitDescription; }
  set accessibilityUnitDescription(value: string) { this.nativeObject.accessibilityUnitDescription = value; }
  get accessibilityRulerMarkerType(): interop.Enum<typeof NSAccessibilityRulerMarkerType> { return this.nativeObject.accessibilityRulerMarkerType; }
  set accessibilityRulerMarkerType(value: interop.Enum<typeof NSAccessibilityRulerMarkerType>) { this.nativeObject.accessibilityRulerMarkerType = value; }
  get accessibilityMarkerTypeDescription(): string { return this.nativeObject.accessibilityMarkerTypeDescription; }
  set accessibilityMarkerTypeDescription(value: string) { this.nativeObject.accessibilityMarkerTypeDescription = value; }
  get accessibilityHorizontalScrollBar(): interop.Object { return this.nativeObject.accessibilityHorizontalScrollBar; }
  set accessibilityHorizontalScrollBar(value: interop.Object) { this.nativeObject.accessibilityHorizontalScrollBar = value; }
  get accessibilityVerticalScrollBar(): interop.Object { return this.nativeObject.accessibilityVerticalScrollBar; }
  set accessibilityVerticalScrollBar(value: interop.Object) { this.nativeObject.accessibilityVerticalScrollBar = value; }
  get accessibilityAllowedValues(): NSArray { return this.nativeObject.accessibilityAllowedValues; }
  set accessibilityAllowedValues(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityAllowedValues = value; }
  get accessibilityLabelUIElements(): NSArray { return this.nativeObject.accessibilityLabelUIElements; }
  set accessibilityLabelUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityLabelUIElements = value; }
  get accessibilityLabelValue(): number { return this.nativeObject.accessibilityLabelValue; }
  set accessibilityLabelValue(value: number) { this.nativeObject.accessibilityLabelValue = value; }
  get accessibilitySplitters(): NSArray { return this.nativeObject.accessibilitySplitters; }
  set accessibilitySplitters(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySplitters = value; }
  get accessibilityDecrementButton(): interop.Object { return this.nativeObject.accessibilityDecrementButton; }
  set accessibilityDecrementButton(value: interop.Object) { this.nativeObject.accessibilityDecrementButton = value; }
  get accessibilityIncrementButton(): interop.Object { return this.nativeObject.accessibilityIncrementButton; }
  set accessibilityIncrementButton(value: interop.Object) { this.nativeObject.accessibilityIncrementButton = value; }
  get accessibilityTabs(): NSArray { return this.nativeObject.accessibilityTabs; }
  set accessibilityTabs(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityTabs = value; }
  get accessibilityHeader(): interop.Object { return this.nativeObject.accessibilityHeader; }
  set accessibilityHeader(value: interop.Object) { this.nativeObject.accessibilityHeader = value; }
  get accessibilityColumnCount(): number { return this.nativeObject.accessibilityColumnCount; }
  set accessibilityColumnCount(value: number) { this.nativeObject.accessibilityColumnCount = value; }
  get accessibilityRowCount(): number { return this.nativeObject.accessibilityRowCount; }
  set accessibilityRowCount(value: number) { this.nativeObject.accessibilityRowCount = value; }
  get accessibilityIndex(): number { return this.nativeObject.accessibilityIndex; }
  set accessibilityIndex(value: number) { this.nativeObject.accessibilityIndex = value; }
  get accessibilityColumns(): NSArray { return this.nativeObject.accessibilityColumns; }
  set accessibilityColumns(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityColumns = value; }
  get accessibilityRows(): NSArray { return this.nativeObject.accessibilityRows; }
  set accessibilityRows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityRows = value; }
  get accessibilityVisibleRows(): NSArray { return this.nativeObject.accessibilityVisibleRows; }
  set accessibilityVisibleRows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleRows = value; }
  get accessibilitySelectedRows(): NSArray { return this.nativeObject.accessibilitySelectedRows; }
  set accessibilitySelectedRows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedRows = value; }
  get accessibilityVisibleColumns(): NSArray { return this.nativeObject.accessibilityVisibleColumns; }
  set accessibilityVisibleColumns(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleColumns = value; }
  get accessibilitySelectedColumns(): NSArray { return this.nativeObject.accessibilitySelectedColumns; }
  set accessibilitySelectedColumns(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedColumns = value; }
  get accessibilitySortDirection(): interop.Enum<typeof NSAccessibilitySortDirection> { return this.nativeObject.accessibilitySortDirection; }
  set accessibilitySortDirection(value: interop.Enum<typeof NSAccessibilitySortDirection>) { this.nativeObject.accessibilitySortDirection = value; }
  get accessibilityRowHeaderUIElements(): NSArray { return this.nativeObject.accessibilityRowHeaderUIElements; }
  set accessibilityRowHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityRowHeaderUIElements = value; }
  get accessibilitySelectedCells(): NSArray { return this.nativeObject.accessibilitySelectedCells; }
  set accessibilitySelectedCells(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedCells = value; }
  get accessibilityVisibleCells(): NSArray { return this.nativeObject.accessibilityVisibleCells; }
  set accessibilityVisibleCells(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleCells = value; }
  get accessibilityColumnHeaderUIElements(): NSArray { return this.nativeObject.accessibilityColumnHeaderUIElements; }
  set accessibilityColumnHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityColumnHeaderUIElements = value; }
  get accessibilityRowIndexRange(): _NSRange { return this.nativeObject.accessibilityRowIndexRange; }
  set accessibilityRowIndexRange(value: _NSRange) { this.nativeObject.accessibilityRowIndexRange = value; }
  get accessibilityColumnIndexRange(): _NSRange { return this.nativeObject.accessibilityColumnIndexRange; }
  set accessibilityColumnIndexRange(value: _NSRange) { this.nativeObject.accessibilityColumnIndexRange = value; }
  get accessibilityInsertionPointLineNumber(): number { return this.nativeObject.accessibilityInsertionPointLineNumber; }
  set accessibilityInsertionPointLineNumber(value: number) { this.nativeObject.accessibilityInsertionPointLineNumber = value; }
  get accessibilitySharedCharacterRange(): _NSRange { return this.nativeObject.accessibilitySharedCharacterRange; }
  set accessibilitySharedCharacterRange(value: _NSRange) { this.nativeObject.accessibilitySharedCharacterRange = value; }
  get accessibilitySharedTextUIElements(): NSArray { return this.nativeObject.accessibilitySharedTextUIElements; }
  set accessibilitySharedTextUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySharedTextUIElements = value; }
  get accessibilityVisibleCharacterRange(): _NSRange { return this.nativeObject.accessibilityVisibleCharacterRange; }
  set accessibilityVisibleCharacterRange(value: _NSRange) { this.nativeObject.accessibilityVisibleCharacterRange = value; }
  get accessibilityNumberOfCharacters(): number { return this.nativeObject.accessibilityNumberOfCharacters; }
  set accessibilityNumberOfCharacters(value: number) { this.nativeObject.accessibilityNumberOfCharacters = value; }
  get accessibilitySelectedText(): string { return this.nativeObject.accessibilitySelectedText; }
  set accessibilitySelectedText(value: string) { this.nativeObject.accessibilitySelectedText = value; }
  get accessibilitySelectedTextRange(): _NSRange { return this.nativeObject.accessibilitySelectedTextRange; }
  set accessibilitySelectedTextRange(value: _NSRange) { this.nativeObject.accessibilitySelectedTextRange = value; }
  get accessibilitySelectedTextRanges(): NSArray { return this.nativeObject.accessibilitySelectedTextRanges; }
  set accessibilitySelectedTextRanges(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedTextRanges = value; }
  get accessibilityToolbarButton(): interop.Object { return this.nativeObject.accessibilityToolbarButton; }
  set accessibilityToolbarButton(value: interop.Object) { this.nativeObject.accessibilityToolbarButton = value; }
  get isAccessibilityModal(): boolean { return this.nativeObject.isAccessibilityModal; }
  set isAccessibilityModal(value: boolean) { this.nativeObject.isAccessibilityModal = value; }
  get accessibilityProxy(): interop.Object { return this.nativeObject.accessibilityProxy; }
  set accessibilityProxy(value: interop.Object) { this.nativeObject.accessibilityProxy = value; }
  get isAccessibilityMain(): boolean { return this.nativeObject.isAccessibilityMain; }
  set isAccessibilityMain(value: boolean) { this.nativeObject.isAccessibilityMain = value; }
  get accessibilityFullScreenButton(): interop.Object { return this.nativeObject.accessibilityFullScreenButton; }
  set accessibilityFullScreenButton(value: interop.Object) { this.nativeObject.accessibilityFullScreenButton = value; }
  get accessibilityGrowArea(): interop.Object { return this.nativeObject.accessibilityGrowArea; }
  set accessibilityGrowArea(value: interop.Object) { this.nativeObject.accessibilityGrowArea = value; }
  get accessibilityDocument(): string { return this.nativeObject.accessibilityDocument; }
  set accessibilityDocument(value: string) { this.nativeObject.accessibilityDocument = value; }
  get accessibilityDefaultButton(): interop.Object { return this.nativeObject.accessibilityDefaultButton; }
  set accessibilityDefaultButton(value: interop.Object) { this.nativeObject.accessibilityDefaultButton = value; }
  get accessibilityCloseButton(): interop.Object { return this.nativeObject.accessibilityCloseButton; }
  set accessibilityCloseButton(value: interop.Object) { this.nativeObject.accessibilityCloseButton = value; }
  get accessibilityZoomButton(): interop.Object { return this.nativeObject.accessibilityZoomButton; }
  set accessibilityZoomButton(value: interop.Object) { this.nativeObject.accessibilityZoomButton = value; }
  get accessibilityMinimizeButton(): interop.Object { return this.nativeObject.accessibilityMinimizeButton; }
  set accessibilityMinimizeButton(value: interop.Object) { this.nativeObject.accessibilityMinimizeButton = value; }
  get isAccessibilityMinimized(): boolean { return this.nativeObject.isAccessibilityMinimized; }
  set isAccessibilityMinimized(value: boolean) { this.nativeObject.isAccessibilityMinimized = value; }
  get accessibilityCustomActions(): NSArray { return this.nativeObject.accessibilityCustomActions; }
  set accessibilityCustomActions(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityCustomActions = value; }

  set menuNeedsUpdate(value: (menu: NSMenu) => void) {
    this.delegate.menuNeedsUpdate = value;
  }
  set numberOfItemsInMenu(value: (menu: NSMenu) => number) {
    this.delegate.numberOfItemsInMenu = value;
  }
  set menuUpdateItemAtIndexShouldCancel(value: (menu: NSMenu, item: NSMenuItem, index: number, shouldCancel: boolean) => boolean) {
    this.delegate.menuUpdateItemAtIndexShouldCancel = value;
  }
  set menuHasKeyEquivalentForEventTargetAction(value: (menu: NSMenu, event: NSEvent, target: interop.PointerConvertible, action: interop.PointerConvertible) => boolean) {
    this.delegate.menuHasKeyEquivalentForEventTargetAction = value;
  }
  set menuWillOpen(value: (menu: NSMenu) => void) {
    this.delegate.menuWillOpen = value;
  }
  set menuDidClose(value: (menu: NSMenu) => void) {
    this.delegate.menuDidClose = value;
  }
  set menuWillHighlightItem(value: (menu: NSMenu, item: NSMenuItem | null) => void) {
    this.delegate.menuWillHighlightItem = value;
  }
  set confinementRectForMenuOnScreen(value: (menu: NSMenu, screen: NSScreen | null) => CGRect) {
    this.delegate.confinementRectForMenuOnScreen = value;
  }
}

export class HTMLNSScrubberProportionalLayoutElement extends HTMLNSScrubberLayoutElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSScrubberProportionalLayout.new();

  get numberOfVisibleItems(): number { return this.nativeObject.numberOfVisibleItems; }
  set numberOfVisibleItems(value: number) { this.nativeObject.numberOfVisibleItems = value; }
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
  get textView(): NSTextView { return this.nativeObject.textView; }
  set textView(value: NSTextView) { this.nativeObject.textView = value; }
  get containerSize(): CGSize { return this.nativeObject.containerSize; }
  set containerSize(value: CGSize) { this.nativeObject.containerSize = value; }
  get layoutOrientation(): interop.Enum<typeof NSTextLayoutOrientation> { return this.nativeObject.layoutOrientation; }
}

export class HTMLNSPanelElement extends HTMLNSWindowElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSPanel.new();

  get isFloatingPanel(): boolean { return this.nativeObject.isFloatingPanel; }
  set isFloatingPanel(value: boolean) { this.nativeObject.isFloatingPanel = value; }
  get becomesKeyOnlyIfNeeded(): boolean { return this.nativeObject.becomesKeyOnlyIfNeeded; }
  set becomesKeyOnlyIfNeeded(value: boolean) { this.nativeObject.becomesKeyOnlyIfNeeded = value; }
  get worksWhenModal(): boolean { return this.nativeObject.worksWhenModal; }
  set worksWhenModal(value: boolean) { this.nativeObject.worksWhenModal = value; }
}

export class HTMLNSTitlebarAccessoryViewControllerElement extends HTMLNSViewControllerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTitlebarAccessoryViewController.new();

  get layoutAttribute(): interop.Enum<typeof NSLayoutAttribute> { return this.nativeObject.layoutAttribute; }
  set layoutAttribute(value: interop.Enum<typeof NSLayoutAttribute>) { this.nativeObject.layoutAttribute = value; }
  get fullScreenMinHeight(): number { return this.nativeObject.fullScreenMinHeight; }
  set fullScreenMinHeight(value: number) { this.nativeObject.fullScreenMinHeight = value; }
  get isHidden(): boolean { return this.nativeObject.isHidden; }
  set isHidden(value: boolean) { this.nativeObject.isHidden = value; }
  get automaticallyAdjustsSize(): boolean { return this.nativeObject.automaticallyAdjustsSize; }
  set automaticallyAdjustsSize(value: boolean) { this.nativeObject.automaticallyAdjustsSize = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
  get animations(): NSDictionary { return this.nativeObject.animations; }
  set animations(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) { this.nativeObject.animations = value; }
}

export class HTMLNSRotationGestureRecognizerElement extends HTMLNSGestureRecognizerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSRotationGestureRecognizer.new();

  get rotation(): number { return this.nativeObject.rotation; }
  set rotation(value: number) { this.nativeObject.rotation = value; }
  get rotationInDegrees(): number { return this.nativeObject.rotationInDegrees; }
  set rotationInDegrees(value: number) { this.nativeObject.rotationInDegrees = value; }
}

export class HTMLNSDraggingItemElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSDraggingItem.new();

  get item(): interop.Object { return this.nativeObject.item; }
  get draggingFrame(): CGRect { return this.nativeObject.draggingFrame; }
  set draggingFrame(value: CGRect) { this.nativeObject.draggingFrame = value; }
  get imageComponentsProvider(): () => NSArray { return this.nativeObject.imageComponentsProvider; }
  set imageComponentsProvider(value: () => NSArray) { this.nativeObject.imageComponentsProvider = value; }
  get imageComponents(): NSArray { return this.nativeObject.imageComponents; }
}

export class HTMLNSCollectionViewCompositionalLayoutElement extends HTMLNSCollectionViewLayoutElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSCollectionViewCompositionalLayout.new();

  get configuration(): NSCollectionViewCompositionalLayoutConfiguration { return this.nativeObject.configuration; }
  set configuration(value: NSCollectionViewCompositionalLayoutConfiguration) { this.nativeObject.configuration = value; }
}

export class HTMLNSTrackingAreaElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTrackingArea.new();

  get rect(): CGRect { return this.nativeObject.rect; }
  get options(): interop.Enum<typeof NSTrackingAreaOptions> { return this.nativeObject.options; }
  get owner(): interop.Object { return this.nativeObject.owner; }
  get userInfo(): NSDictionary { return this.nativeObject.userInfo; }
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

export class HTMLNSCollectionViewItemElement extends HTMLNSViewControllerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSCollectionViewItem.new();

  get collectionView(): NSCollectionView { return this.nativeObject.collectionView; }
  get isSelected(): boolean { return this.nativeObject.isSelected; }
  set isSelected(value: boolean) { this.nativeObject.isSelected = value; }
  get highlightState(): interop.Enum<typeof NSCollectionViewItemHighlightState> { return this.nativeObject.highlightState; }
  set highlightState(value: interop.Enum<typeof NSCollectionViewItemHighlightState>) { this.nativeObject.highlightState = value; }
  get imageView(): NSImageView { return this.nativeObject.imageView; }
  set imageView(value: NSImageView) { this.nativeObject.imageView = value; }
  get textField(): NSTextField { return this.nativeObject.textField; }
  set textField(value: NSTextField) { this.nativeObject.textField = value; }
  get draggingImageComponents(): NSArray { return this.nativeObject.draggingImageComponents; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
  get identifier(): string { return this.nativeObject.identifier; }
  set identifier(value: string) { this.nativeObject.identifier = value; }
}

export class HTMLNSDictionaryControllerElement extends HTMLNSArrayControllerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSDictionaryController.new();

  get initialKey(): string { return this.nativeObject.initialKey; }
  set initialKey(value: string) { this.nativeObject.initialKey = value; }
  get initialValue(): interop.Object { return this.nativeObject.initialValue; }
  set initialValue(value: interop.Object) { this.nativeObject.initialValue = value; }
  get includedKeys(): NSArray { return this.nativeObject.includedKeys; }
  set includedKeys(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.includedKeys = value; }
  get excludedKeys(): NSArray { return this.nativeObject.excludedKeys; }
  set excludedKeys(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.excludedKeys = value; }
  get localizedKeyDictionary(): NSDictionary { return this.nativeObject.localizedKeyDictionary; }
  set localizedKeyDictionary(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) { this.nativeObject.localizedKeyDictionary = value; }
  get localizedKeyTable(): string { return this.nativeObject.localizedKeyTable; }
  set localizedKeyTable(value: string) { this.nativeObject.localizedKeyTable = value; }
}

export class HTMLNSSavePanelElement extends HTMLNSPanelElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSSavePanel.new();
  get delegate(): NSOpenSavePanelDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSOpenSavePanelDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSOpenSavePanelDelegateImpl;
  }

  get URL(): NSURL { return this.nativeObject.URL; }
  get identifier(): string { return this.nativeObject.identifier; }
  set identifier(value: string) { this.nativeObject.identifier = value; }
  get directoryURL(): NSURL { return this.nativeObject.directoryURL; }
  set directoryURL(value: NSURL) { this.nativeObject.directoryURL = value; }
  get allowedContentTypes(): NSArray { return this.nativeObject.allowedContentTypes; }
  set allowedContentTypes(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.allowedContentTypes = value; }
  get allowsOtherFileTypes(): boolean { return this.nativeObject.allowsOtherFileTypes; }
  set allowsOtherFileTypes(value: boolean) { this.nativeObject.allowsOtherFileTypes = value; }
  get accessoryView(): NSView { return this.nativeObject.accessoryView; }
  set accessoryView(value: NSView) { this.nativeObject.accessoryView = value; }
  get isExpanded(): boolean { return this.nativeObject.isExpanded; }
  get canCreateDirectories(): boolean { return this.nativeObject.canCreateDirectories; }
  set canCreateDirectories(value: boolean) { this.nativeObject.canCreateDirectories = value; }
  get canSelectHiddenExtension(): boolean { return this.nativeObject.canSelectHiddenExtension; }
  set canSelectHiddenExtension(value: boolean) { this.nativeObject.canSelectHiddenExtension = value; }
  get isExtensionHidden(): boolean { return this.nativeObject.isExtensionHidden; }
  set isExtensionHidden(value: boolean) { this.nativeObject.isExtensionHidden = value; }
  get treatsFilePackagesAsDirectories(): boolean { return this.nativeObject.treatsFilePackagesAsDirectories; }
  set treatsFilePackagesAsDirectories(value: boolean) { this.nativeObject.treatsFilePackagesAsDirectories = value; }
  get prompt(): string { return this.nativeObject.prompt; }
  set prompt(value: string) { this.nativeObject.prompt = value; }
  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get nameFieldLabel(): string { return this.nativeObject.nameFieldLabel; }
  set nameFieldLabel(value: string) { this.nativeObject.nameFieldLabel = value; }
  get nameFieldStringValue(): string { return this.nativeObject.nameFieldStringValue; }
  set nameFieldStringValue(value: string) { this.nativeObject.nameFieldStringValue = value; }
  get message(): string { return this.nativeObject.message; }
  set message(value: string) { this.nativeObject.message = value; }
  get showsHiddenFiles(): boolean { return this.nativeObject.showsHiddenFiles; }
  set showsHiddenFiles(value: boolean) { this.nativeObject.showsHiddenFiles = value; }
  get showsTagField(): boolean { return this.nativeObject.showsTagField; }
  set showsTagField(value: boolean) { this.nativeObject.showsTagField = value; }
  get tagNames(): NSArray { return this.nativeObject.tagNames; }
  set tagNames(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.tagNames = value; }
  get allowedFileTypes(): NSArray { return this.nativeObject.allowedFileTypes; }
  set allowedFileTypes(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.allowedFileTypes = value; }

  set panelShouldEnableURL(value: (sender: interop.Object, url: NSURL) => boolean) {
    this.delegate.panelShouldEnableURL = value;
  }
  set panelValidateURLError(value: (sender: interop.Object, url: NSURL, outError: interop.PointerConvertible) => boolean) {
    this.delegate.panelValidateURLError = value;
  }
  set panelDidChangeToDirectoryURL(value: (sender: interop.Object, url: NSURL | null) => void) {
    this.delegate.panelDidChangeToDirectoryURL = value;
  }
  set panelUserEnteredFilenameConfirmed(value: (sender: interop.Object, filename: string, okFlag: boolean) => string) {
    this.delegate.panelUserEnteredFilenameConfirmed = value;
  }
  set panelWillExpand(value: (sender: interop.Object, expanding: boolean) => void) {
    this.delegate.panelWillExpand = value;
  }
  set panelSelectionDidChange(value: (sender: interop.Object | null) => void) {
    this.delegate.panelSelectionDidChange = value;
  }
}

export class HTMLNSCollectionLayoutDecorationItemElement extends HTMLNSCollectionLayoutItemElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSCollectionLayoutDecorationItem.new();

  get zIndex(): number { return this.nativeObject.zIndex; }
  set zIndex(value: number) { this.nativeObject.zIndex = value; }
  get elementKind(): string { return this.nativeObject.elementKind; }
}

export class HTMLNSSplitViewControllerElement extends HTMLNSViewControllerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSSplitViewController.new();

  get splitView(): NSSplitView { return this.nativeObject.splitView; }
  set splitView(value: NSSplitView) { this.nativeObject.splitView = value; }
  get splitViewItems(): NSArray { return this.nativeObject.splitViewItems; }
  set splitViewItems(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.splitViewItems = value; }
  get minimumThicknessForInlineSidebars(): number { return this.nativeObject.minimumThicknessForInlineSidebars; }
  set minimumThicknessForInlineSidebars(value: number) { this.nativeObject.minimumThicknessForInlineSidebars = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLNSFontPanelElement extends HTMLNSPanelElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSFontPanel.new();

  get accessoryView(): NSView { return this.nativeObject.accessoryView; }
  set accessoryView(value: NSView) { this.nativeObject.accessoryView = value; }
  get worksWhenModal(): boolean { return this.nativeObject.worksWhenModal; }
  set worksWhenModal(value: boolean) { this.nativeObject.worksWhenModal = value; }
  get isEnabled(): boolean { return this.nativeObject.isEnabled; }
  set isEnabled(value: boolean) { this.nativeObject.isEnabled = value; }
}

export class HTMLNSScrubberItemViewElement extends HTMLNSScrubberArrangedViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSScrubberItemView.new();

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

export class HTMLNSCollectionViewFlowLayoutElement extends HTMLNSCollectionViewLayoutElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSCollectionViewFlowLayout.new();

  get minimumLineSpacing(): number { return this.nativeObject.minimumLineSpacing; }
  set minimumLineSpacing(value: number) { this.nativeObject.minimumLineSpacing = value; }
  get minimumInteritemSpacing(): number { return this.nativeObject.minimumInteritemSpacing; }
  set minimumInteritemSpacing(value: number) { this.nativeObject.minimumInteritemSpacing = value; }
  get itemSize(): CGSize { return this.nativeObject.itemSize; }
  set itemSize(value: CGSize) { this.nativeObject.itemSize = value; }
  get estimatedItemSize(): CGSize { return this.nativeObject.estimatedItemSize; }
  set estimatedItemSize(value: CGSize) { this.nativeObject.estimatedItemSize = value; }
  get scrollDirection(): interop.Enum<typeof NSCollectionViewScrollDirection> { return this.nativeObject.scrollDirection; }
  set scrollDirection(value: interop.Enum<typeof NSCollectionViewScrollDirection>) { this.nativeObject.scrollDirection = value; }
  get headerReferenceSize(): CGSize { return this.nativeObject.headerReferenceSize; }
  set headerReferenceSize(value: CGSize) { this.nativeObject.headerReferenceSize = value; }
  get footerReferenceSize(): CGSize { return this.nativeObject.footerReferenceSize; }
  set footerReferenceSize(value: CGSize) { this.nativeObject.footerReferenceSize = value; }
  get sectionInset(): NSEdgeInsets { return this.nativeObject.sectionInset; }
  set sectionInset(value: NSEdgeInsets) { this.nativeObject.sectionInset = value; }
  get sectionHeadersPinToVisibleBounds(): boolean { return this.nativeObject.sectionHeadersPinToVisibleBounds; }
  set sectionHeadersPinToVisibleBounds(value: boolean) { this.nativeObject.sectionHeadersPinToVisibleBounds = value; }
  get sectionFootersPinToVisibleBounds(): boolean { return this.nativeObject.sectionFootersPinToVisibleBounds; }
  set sectionFootersPinToVisibleBounds(value: boolean) { this.nativeObject.sectionFootersPinToVisibleBounds = value; }
}

export class HTMLNSPathComponentCellElement extends HTMLNSTextFieldCellElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSPathComponentCell.new();

  get image(): NSImage { return this.nativeObject.image; }
  set image(value: NSImage) { this.nativeObject.image = value; }
  get URL(): NSURL { return this.nativeObject.URL; }
  set URL(value: NSURL) { this.nativeObject.URL = value; }
}

export class HTMLNSScrubberElement extends HTMLNSViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSScrubber.new();
  get delegate(): NSScrubberDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSScrubberDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSScrubberDelegateImpl;
  }

  get dataSource(): NSScrubberDataSource { return this.nativeObject.dataSource; }
  set dataSource(value: NSScrubberDataSource) { this.nativeObject.dataSource = value; }
  get scrubberLayout(): NSScrubberLayout { return this.nativeObject.scrubberLayout; }
  set scrubberLayout(value: NSScrubberLayout) { this.nativeObject.scrubberLayout = value; }
  get numberOfItems(): number { return this.nativeObject.numberOfItems; }
  get highlightedIndex(): number { return this.nativeObject.highlightedIndex; }
  get selectedIndex(): number { return this.nativeObject.selectedIndex; }
  set selectedIndex(value: number) { this.nativeObject.selectedIndex = value; }
  get mode(): interop.Enum<typeof NSScrubberMode> { return this.nativeObject.mode; }
  set mode(value: interop.Enum<typeof NSScrubberMode>) { this.nativeObject.mode = value; }
  get itemAlignment(): interop.Enum<typeof NSScrubberAlignment> { return this.nativeObject.itemAlignment; }
  set itemAlignment(value: interop.Enum<typeof NSScrubberAlignment>) { this.nativeObject.itemAlignment = value; }
  get isContinuous(): boolean { return this.nativeObject.isContinuous; }
  set isContinuous(value: boolean) { this.nativeObject.isContinuous = value; }
  get floatsSelectionViews(): boolean { return this.nativeObject.floatsSelectionViews; }
  set floatsSelectionViews(value: boolean) { this.nativeObject.floatsSelectionViews = value; }
  get selectionBackgroundStyle(): NSScrubberSelectionStyle { return this.nativeObject.selectionBackgroundStyle; }
  set selectionBackgroundStyle(value: NSScrubberSelectionStyle) { this.nativeObject.selectionBackgroundStyle = value; }
  get selectionOverlayStyle(): NSScrubberSelectionStyle { return this.nativeObject.selectionOverlayStyle; }
  set selectionOverlayStyle(value: NSScrubberSelectionStyle) { this.nativeObject.selectionOverlayStyle = value; }
  get showsArrowButtons(): boolean { return this.nativeObject.showsArrowButtons; }
  set showsArrowButtons(value: boolean) { this.nativeObject.showsArrowButtons = value; }
  get showsAdditionalContentIndicators(): boolean { return this.nativeObject.showsAdditionalContentIndicators; }
  set showsAdditionalContentIndicators(value: boolean) { this.nativeObject.showsAdditionalContentIndicators = value; }
  get backgroundColor(): NSColor { return this.nativeObject.backgroundColor; }
  set backgroundColor(value: NSColor) { this.nativeObject.backgroundColor = value; }
  get backgroundView(): NSView { return this.nativeObject.backgroundView; }
  set backgroundView(value: NSView) { this.nativeObject.backgroundView = value; }

  set scrubberDidSelectItemAtIndex(value: (scrubber: NSScrubber, selectedIndex: number) => void) {
    this.delegate.scrubberDidSelectItemAtIndex = value;
  }
  set scrubberDidHighlightItemAtIndex(value: (scrubber: NSScrubber, highlightedIndex: number) => void) {
    this.delegate.scrubberDidHighlightItemAtIndex = value;
  }
  set scrubberDidChangeVisibleRange(value: (scrubber: NSScrubber, visibleRange: _NSRange) => void) {
    this.delegate.scrubberDidChangeVisibleRange = value;
  }
  set didBeginInteractingWithScrubber(value: (scrubber: NSScrubber) => void) {
    this.delegate.didBeginInteractingWithScrubber = value;
  }
  set didFinishInteractingWithScrubber(value: (scrubber: NSScrubber) => void) {
    this.delegate.didFinishInteractingWithScrubber = value;
  }
  set didCancelInteractingWithScrubber(value: (scrubber: NSScrubber) => void) {
    this.delegate.didCancelInteractingWithScrubber = value;
  }
}

export class HTMLNSControlElement extends HTMLNSViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSControl.new();

  get target(): interop.Object { return this.nativeObject.target; }
  set target(value: interop.Object) { this.nativeObject.target = value; }
  get action(): string { return this.nativeObject.action; }
  set action(value: string) { this.nativeObject.action = value; }
  get tag(): number { return this.nativeObject.tag; }
  set tag(value: number) { this.nativeObject.tag = value; }
  get ignoresMultiClick(): boolean { return this.nativeObject.ignoresMultiClick; }
  set ignoresMultiClick(value: boolean) { this.nativeObject.ignoresMultiClick = value; }
  get isContinuous(): boolean { return this.nativeObject.isContinuous; }
  set isContinuous(value: boolean) { this.nativeObject.isContinuous = value; }
  get isEnabled(): boolean { return this.nativeObject.isEnabled; }
  set isEnabled(value: boolean) { this.nativeObject.isEnabled = value; }
  get refusesFirstResponder(): boolean { return this.nativeObject.refusesFirstResponder; }
  set refusesFirstResponder(value: boolean) { this.nativeObject.refusesFirstResponder = value; }
  get isHighlighted(): boolean { return this.nativeObject.isHighlighted; }
  set isHighlighted(value: boolean) { this.nativeObject.isHighlighted = value; }
  get controlSize(): interop.Enum<typeof NSControlSize> { return this.nativeObject.controlSize; }
  set controlSize(value: interop.Enum<typeof NSControlSize>) { this.nativeObject.controlSize = value; }
  get formatter(): NSFormatter { return this.nativeObject.formatter; }
  set formatter(value: NSFormatter) { this.nativeObject.formatter = value; }
  get objectValue(): interop.Object { return this.nativeObject.objectValue; }
  set objectValue(value: interop.Object) { this.nativeObject.objectValue = value; }
  get stringValue(): string { return this.nativeObject.stringValue; }
  set stringValue(value: string) { this.nativeObject.stringValue = value; }
  get attributedStringValue(): NSAttributedString { return this.nativeObject.attributedStringValue; }
  set attributedStringValue(value: NSAttributedString) { this.nativeObject.attributedStringValue = value; }
  get intValue(): number { return this.nativeObject.intValue; }
  set intValue(value: number) { this.nativeObject.intValue = value; }
  get integerValue(): number { return this.nativeObject.integerValue; }
  set integerValue(value: number) { this.nativeObject.integerValue = value; }
  get floatValue(): number { return this.nativeObject.floatValue; }
  set floatValue(value: number) { this.nativeObject.floatValue = value; }
  get doubleValue(): number { return this.nativeObject.doubleValue; }
  set doubleValue(value: number) { this.nativeObject.doubleValue = value; }
  get font(): NSFont { return this.nativeObject.font; }
  set font(value: NSFont) { this.nativeObject.font = value; }
  get usesSingleLineMode(): boolean { return this.nativeObject.usesSingleLineMode; }
  set usesSingleLineMode(value: boolean) { this.nativeObject.usesSingleLineMode = value; }
  get lineBreakMode(): interop.Enum<typeof NSLineBreakMode> { return this.nativeObject.lineBreakMode; }
  set lineBreakMode(value: interop.Enum<typeof NSLineBreakMode>) { this.nativeObject.lineBreakMode = value; }
  get alignment(): interop.Enum<typeof NSTextAlignment> { return this.nativeObject.alignment; }
  set alignment(value: interop.Enum<typeof NSTextAlignment>) { this.nativeObject.alignment = value; }
  get baseWritingDirection(): interop.Enum<typeof NSWritingDirection> { return this.nativeObject.baseWritingDirection; }
  set baseWritingDirection(value: interop.Enum<typeof NSWritingDirection>) { this.nativeObject.baseWritingDirection = value; }
  get allowsExpansionToolTips(): boolean { return this.nativeObject.allowsExpansionToolTips; }
  set allowsExpansionToolTips(value: boolean) { this.nativeObject.allowsExpansionToolTips = value; }
  get cell(): NSCell { return this.nativeObject.cell; }
  set cell(value: NSCell) { this.nativeObject.cell = value; }
  get selectedCell(): NSCell { return this.nativeObject.selectedCell; }
  get selectedTag(): number { return this.nativeObject.selectedTag; }
}

export class HTMLNSStackViewElement extends HTMLNSViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSStackView.new();
  get delegate(): NSStackViewDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSStackViewDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSStackViewDelegateImpl;
  }

  get orientation(): interop.Enum<typeof NSUserInterfaceLayoutOrientation> { return this.nativeObject.orientation; }
  set orientation(value: interop.Enum<typeof NSUserInterfaceLayoutOrientation>) { this.nativeObject.orientation = value; }
  get alignment(): interop.Enum<typeof NSLayoutAttribute> { return this.nativeObject.alignment; }
  set alignment(value: interop.Enum<typeof NSLayoutAttribute>) { this.nativeObject.alignment = value; }
  get edgeInsets(): NSEdgeInsets { return this.nativeObject.edgeInsets; }
  set edgeInsets(value: NSEdgeInsets) { this.nativeObject.edgeInsets = value; }
  get distribution(): interop.Enum<typeof NSStackViewDistribution> { return this.nativeObject.distribution; }
  set distribution(value: interop.Enum<typeof NSStackViewDistribution>) { this.nativeObject.distribution = value; }
  get spacing(): number { return this.nativeObject.spacing; }
  set spacing(value: number) { this.nativeObject.spacing = value; }
  get detachesHiddenViews(): boolean { return this.nativeObject.detachesHiddenViews; }
  set detachesHiddenViews(value: boolean) { this.nativeObject.detachesHiddenViews = value; }
  get arrangedSubviews(): NSArray { return this.nativeObject.arrangedSubviews; }
  get detachedViews(): NSArray { return this.nativeObject.detachedViews; }
  get views(): NSArray { return this.nativeObject.views; }
  get hasEqualSpacing(): boolean { return this.nativeObject.hasEqualSpacing; }
  set hasEqualSpacing(value: boolean) { this.nativeObject.hasEqualSpacing = value; }

  set stackViewWillDetachViews(value: (stackView: NSStackView, views: NSArray<interop.Object> | Array<interop.Object>) => void) {
    this.delegate.stackViewWillDetachViews = value;
  }
  set stackViewDidReattachViews(value: (stackView: NSStackView, views: NSArray<interop.Object> | Array<interop.Object>) => void) {
    this.delegate.stackViewDidReattachViews = value;
  }
}

export class HTMLNSRulerViewElement extends HTMLNSViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSRulerView.new();

  get scrollView(): NSScrollView { return this.nativeObject.scrollView; }
  set scrollView(value: NSScrollView) { this.nativeObject.scrollView = value; }
  get orientation(): interop.Enum<typeof NSRulerOrientation> { return this.nativeObject.orientation; }
  set orientation(value: interop.Enum<typeof NSRulerOrientation>) { this.nativeObject.orientation = value; }
  get baselineLocation(): number { return this.nativeObject.baselineLocation; }
  get requiredThickness(): number { return this.nativeObject.requiredThickness; }
  get ruleThickness(): number { return this.nativeObject.ruleThickness; }
  set ruleThickness(value: number) { this.nativeObject.ruleThickness = value; }
  get reservedThicknessForMarkers(): number { return this.nativeObject.reservedThicknessForMarkers; }
  set reservedThicknessForMarkers(value: number) { this.nativeObject.reservedThicknessForMarkers = value; }
  get reservedThicknessForAccessoryView(): number { return this.nativeObject.reservedThicknessForAccessoryView; }
  set reservedThicknessForAccessoryView(value: number) { this.nativeObject.reservedThicknessForAccessoryView = value; }
  get measurementUnits(): string { return this.nativeObject.measurementUnits; }
  set measurementUnits(value: string) { this.nativeObject.measurementUnits = value; }
  get originOffset(): number { return this.nativeObject.originOffset; }
  set originOffset(value: number) { this.nativeObject.originOffset = value; }
  get clientView(): NSView { return this.nativeObject.clientView; }
  set clientView(value: NSView) { this.nativeObject.clientView = value; }
  get markers(): NSArray { return this.nativeObject.markers; }
  set markers(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.markers = value; }
  get accessoryView(): NSView { return this.nativeObject.accessoryView; }
  set accessoryView(value: NSView) { this.nativeObject.accessoryView = value; }
  get isFlipped(): boolean { return this.nativeObject.isFlipped; }
}

export class HTMLNSTextAlternativesElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTextAlternatives.new();

  get primaryString(): string { return this.nativeObject.primaryString; }
  get alternativeStrings(): NSArray { return this.nativeObject.alternativeStrings; }
}

export class HTMLNSSoundElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSSound.new();
  get delegate(): NSSoundDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSSoundDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSSoundDelegateImpl;
  }

  get name(): string { return this.nativeObject.name; }
  get isPlaying(): boolean { return this.nativeObject.isPlaying; }
  get duration(): number { return this.nativeObject.duration; }
  get volume(): number { return this.nativeObject.volume; }
  set volume(value: number) { this.nativeObject.volume = value; }
  get currentTime(): number { return this.nativeObject.currentTime; }
  set currentTime(value: number) { this.nativeObject.currentTime = value; }
  get loops(): boolean { return this.nativeObject.loops; }
  set loops(value: boolean) { this.nativeObject.loops = value; }
  get playbackDeviceIdentifier(): string { return this.nativeObject.playbackDeviceIdentifier; }
  set playbackDeviceIdentifier(value: string) { this.nativeObject.playbackDeviceIdentifier = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }

  set soundDidFinishPlaying(value: (sound: NSSound, flag: boolean) => void) {
    this.delegate.soundDidFinishPlaying = value;
  }
}

export class HTMLNSGridRowElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSGridRow.new();

  get gridView(): NSGridView | null { return this.nativeObject.gridView; }
  get numberOfCells(): number { return this.nativeObject.numberOfCells; }
  get yPlacement(): interop.Enum<typeof NSGridCellPlacement> { return this.nativeObject.yPlacement; }
  set yPlacement(value: interop.Enum<typeof NSGridCellPlacement>) { this.nativeObject.yPlacement = value; }
  get rowAlignment(): interop.Enum<typeof NSGridRowAlignment> { return this.nativeObject.rowAlignment; }
  set rowAlignment(value: interop.Enum<typeof NSGridRowAlignment>) { this.nativeObject.rowAlignment = value; }
  get height(): number { return this.nativeObject.height; }
  set height(value: number) { this.nativeObject.height = value; }
  get topPadding(): number { return this.nativeObject.topPadding; }
  set topPadding(value: number) { this.nativeObject.topPadding = value; }
  get bottomPadding(): number { return this.nativeObject.bottomPadding; }
  set bottomPadding(value: number) { this.nativeObject.bottomPadding = value; }
  get isHidden(): boolean { return this.nativeObject.isHidden; }
  set isHidden(value: boolean) { this.nativeObject.isHidden = value; }
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

export class HTMLNSColorElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSColor.new();

  get type(): interop.Enum<typeof NSColorType> { return this.nativeObject.type; }
  get catalogNameComponent(): string { return this.nativeObject.catalogNameComponent; }
  get colorNameComponent(): string { return this.nativeObject.colorNameComponent; }
  get localizedCatalogNameComponent(): string { return this.nativeObject.localizedCatalogNameComponent; }
  get localizedColorNameComponent(): string { return this.nativeObject.localizedColorNameComponent; }
  get redComponent(): number { return this.nativeObject.redComponent; }
  get greenComponent(): number { return this.nativeObject.greenComponent; }
  get blueComponent(): number { return this.nativeObject.blueComponent; }
  get hueComponent(): number { return this.nativeObject.hueComponent; }
  get saturationComponent(): number { return this.nativeObject.saturationComponent; }
  get brightnessComponent(): number { return this.nativeObject.brightnessComponent; }
  get whiteComponent(): number { return this.nativeObject.whiteComponent; }
  get cyanComponent(): number { return this.nativeObject.cyanComponent; }
  get magentaComponent(): number { return this.nativeObject.magentaComponent; }
  get yellowComponent(): number { return this.nativeObject.yellowComponent; }
  get blackComponent(): number { return this.nativeObject.blackComponent; }
  get colorSpace(): NSColorSpace { return this.nativeObject.colorSpace; }
  get numberOfComponents(): number { return this.nativeObject.numberOfComponents; }
  get patternImage(): NSImage { return this.nativeObject.patternImage; }
  get alphaComponent(): number { return this.nativeObject.alphaComponent; }
  get CGColor(): interop.Pointer { return this.nativeObject.CGColor; }
  get colorSpaceName(): string { return this.nativeObject.colorSpaceName; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLNSGraphicsContextElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSGraphicsContext.new();

  get isDrawingToScreen(): boolean { return this.nativeObject.isDrawingToScreen; }
  get CGContext(): interop.Pointer { return this.nativeObject.CGContext; }
  get isFlipped(): boolean { return this.nativeObject.isFlipped; }
  get shouldAntialias(): boolean { return this.nativeObject.shouldAntialias; }
  set shouldAntialias(value: boolean) { this.nativeObject.shouldAntialias = value; }
  get imageInterpolation(): interop.Enum<typeof NSImageInterpolation> { return this.nativeObject.imageInterpolation; }
  set imageInterpolation(value: interop.Enum<typeof NSImageInterpolation>) { this.nativeObject.imageInterpolation = value; }
  get patternPhase(): CGPoint { return this.nativeObject.patternPhase; }
  set patternPhase(value: CGPoint) { this.nativeObject.patternPhase = value; }
  get compositingOperation(): interop.Enum<typeof NSCompositingOperation> { return this.nativeObject.compositingOperation; }
  set compositingOperation(value: interop.Enum<typeof NSCompositingOperation>) { this.nativeObject.compositingOperation = value; }
  get colorRenderingIntent(): interop.Enum<typeof NSColorRenderingIntent> { return this.nativeObject.colorRenderingIntent; }
  set colorRenderingIntent(value: interop.Enum<typeof NSColorRenderingIntent>) { this.nativeObject.colorRenderingIntent = value; }
  get CIContext(): CIContext { return this.nativeObject.CIContext; }
  get graphicsPort(): interop.Pointer { return this.nativeObject.graphicsPort; }
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

export class HTMLNSLayoutGuideElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSLayoutGuide.new();

  get frame(): CGRect { return this.nativeObject.frame; }
  get owningView(): NSView { return this.nativeObject.owningView; }
  set owningView(value: NSView) { this.nativeObject.owningView = value; }
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

export class HTMLNSFilePromiseProviderElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSFilePromiseProvider.new();
  get delegate(): NSFilePromiseProviderDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSFilePromiseProviderDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSFilePromiseProviderDelegateImpl;
  }

  get fileType(): string { return this.nativeObject.fileType; }
  set fileType(value: string) { this.nativeObject.fileType = value; }
  get userInfo(): interop.Object { return this.nativeObject.userInfo; }
  set userInfo(value: interop.Object) { this.nativeObject.userInfo = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }

  set filePromiseProviderFileNameForType(value: (filePromiseProvider: NSFilePromiseProvider, fileType: string) => string) {
    this.delegate.filePromiseProviderFileNameForType = value;
  }
  set filePromiseProviderWritePromiseToURLCompletionHandler(value: (filePromiseProvider: NSFilePromiseProvider, url: NSURL, completionHandler: (p1: NSError) => void | null) => void) {
    this.delegate.filePromiseProviderWritePromiseToURLCompletionHandler = value;
  }
  set operationQueueForFilePromiseProvider(value: (filePromiseProvider: NSFilePromiseProvider) => NSOperationQueue) {
    this.delegate.operationQueueForFilePromiseProvider = value;
  }
}

export class HTMLNSLevelIndicatorCellElement extends HTMLNSActionCellElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSLevelIndicatorCell.new();

  get levelIndicatorStyle(): interop.Enum<typeof NSLevelIndicatorStyle> { return this.nativeObject.levelIndicatorStyle; }
  set levelIndicatorStyle(value: interop.Enum<typeof NSLevelIndicatorStyle>) { this.nativeObject.levelIndicatorStyle = value; }
  get minValue(): number { return this.nativeObject.minValue; }
  set minValue(value: number) { this.nativeObject.minValue = value; }
  get maxValue(): number { return this.nativeObject.maxValue; }
  set maxValue(value: number) { this.nativeObject.maxValue = value; }
  get warningValue(): number { return this.nativeObject.warningValue; }
  set warningValue(value: number) { this.nativeObject.warningValue = value; }
  get criticalValue(): number { return this.nativeObject.criticalValue; }
  set criticalValue(value: number) { this.nativeObject.criticalValue = value; }
  get tickMarkPosition(): interop.Enum<typeof NSTickMarkPosition> { return this.nativeObject.tickMarkPosition; }
  set tickMarkPosition(value: interop.Enum<typeof NSTickMarkPosition>) { this.nativeObject.tickMarkPosition = value; }
  get numberOfTickMarks(): number { return this.nativeObject.numberOfTickMarks; }
  set numberOfTickMarks(value: number) { this.nativeObject.numberOfTickMarks = value; }
  get numberOfMajorTickMarks(): number { return this.nativeObject.numberOfMajorTickMarks; }
  set numberOfMajorTickMarks(value: number) { this.nativeObject.numberOfMajorTickMarks = value; }
}

export class HTMLNSDatePickerElement extends HTMLNSControlElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSDatePicker.new();
  get delegate(): NSDatePickerCellDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSDatePickerCellDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSDatePickerCellDelegateImpl;
  }

  get datePickerStyle(): interop.Enum<typeof NSDatePickerStyle> { return this.nativeObject.datePickerStyle; }
  set datePickerStyle(value: interop.Enum<typeof NSDatePickerStyle>) { this.nativeObject.datePickerStyle = value; }
  get isBezeled(): boolean { return this.nativeObject.isBezeled; }
  set isBezeled(value: boolean) { this.nativeObject.isBezeled = value; }
  get isBordered(): boolean { return this.nativeObject.isBordered; }
  set isBordered(value: boolean) { this.nativeObject.isBordered = value; }
  get drawsBackground(): boolean { return this.nativeObject.drawsBackground; }
  set drawsBackground(value: boolean) { this.nativeObject.drawsBackground = value; }
  get backgroundColor(): NSColor { return this.nativeObject.backgroundColor; }
  set backgroundColor(value: NSColor) { this.nativeObject.backgroundColor = value; }
  get textColor(): NSColor { return this.nativeObject.textColor; }
  set textColor(value: NSColor) { this.nativeObject.textColor = value; }
  get datePickerMode(): interop.Enum<typeof NSDatePickerMode> { return this.nativeObject.datePickerMode; }
  set datePickerMode(value: interop.Enum<typeof NSDatePickerMode>) { this.nativeObject.datePickerMode = value; }
  get datePickerElements(): interop.Enum<typeof NSDatePickerElementFlags> { return this.nativeObject.datePickerElements; }
  set datePickerElements(value: interop.Enum<typeof NSDatePickerElementFlags>) { this.nativeObject.datePickerElements = value; }
  get calendar(): NSCalendar { return this.nativeObject.calendar; }
  set calendar(value: NSCalendar) { this.nativeObject.calendar = value; }
  get locale(): NSLocale { return this.nativeObject.locale; }
  set locale(value: NSLocale) { this.nativeObject.locale = value; }
  get timeZone(): NSTimeZone { return this.nativeObject.timeZone; }
  set timeZone(value: NSTimeZone) { this.nativeObject.timeZone = value; }
  get dateValue(): NSDate { return this.nativeObject.dateValue; }
  set dateValue(value: NSDate) { this.nativeObject.dateValue = value; }
  get timeInterval(): number { return this.nativeObject.timeInterval; }
  set timeInterval(value: number) { this.nativeObject.timeInterval = value; }
  get minDate(): NSDate { return this.nativeObject.minDate; }
  set minDate(value: NSDate) { this.nativeObject.minDate = value; }
  get maxDate(): NSDate { return this.nativeObject.maxDate; }
  set maxDate(value: NSDate) { this.nativeObject.maxDate = value; }
  get presentsCalendarOverlay(): boolean { return this.nativeObject.presentsCalendarOverlay; }
  set presentsCalendarOverlay(value: boolean) { this.nativeObject.presentsCalendarOverlay = value; }

  set datePickerCellValidateProposedDateValueTimeInterval(value: (datePickerCell: NSDatePickerCell, proposedDateValue: interop.PointerConvertible, proposedTimeInterval: interop.PointerConvertible) => void) {
    this.delegate.datePickerCellValidateProposedDateValueTimeInterval = value;
  }
}

export class HTMLNSScrubberImageItemViewElement extends HTMLNSScrubberItemViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSScrubberImageItemView.new();

  get imageView(): NSImageView { return this.nativeObject.imageView; }
  get image(): NSImage { return this.nativeObject.image; }
  set image(value: NSImage) { this.nativeObject.image = value; }
  get imageAlignment(): interop.Enum<typeof NSImageAlignment> { return this.nativeObject.imageAlignment; }
  set imageAlignment(value: interop.Enum<typeof NSImageAlignment>) { this.nativeObject.imageAlignment = value; }
}

export class HTMLNSMatrixElement extends HTMLNSControlElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSMatrix.new();
  get delegate(): NSMatrixDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSMatrixDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSMatrixDelegateImpl;
  }

  get cellClass(): interop.Object { return this.nativeObject.cellClass; }
  set cellClass(value: interop.Object) { this.nativeObject.cellClass = value; }
  get prototype(): NSCell { return this.nativeObject.prototype; }
  set prototype(value: NSCell) { this.nativeObject.prototype = value; }
  get mode(): interop.Enum<typeof NSMatrixMode> { return this.nativeObject.mode; }
  set mode(value: interop.Enum<typeof NSMatrixMode>) { this.nativeObject.mode = value; }
  get allowsEmptySelection(): boolean { return this.nativeObject.allowsEmptySelection; }
  set allowsEmptySelection(value: boolean) { this.nativeObject.allowsEmptySelection = value; }
  get cells(): NSArray { return this.nativeObject.cells; }
  get selectedCell(): NSCell { return this.nativeObject.selectedCell; }
  get selectedCells(): NSArray { return this.nativeObject.selectedCells; }
  get selectedRow(): number { return this.nativeObject.selectedRow; }
  get selectedColumn(): number { return this.nativeObject.selectedColumn; }
  get isSelectionByRect(): boolean { return this.nativeObject.isSelectionByRect; }
  set isSelectionByRect(value: boolean) { this.nativeObject.isSelectionByRect = value; }
  get cellSize(): CGSize { return this.nativeObject.cellSize; }
  set cellSize(value: CGSize) { this.nativeObject.cellSize = value; }
  get intercellSpacing(): CGSize { return this.nativeObject.intercellSpacing; }
  set intercellSpacing(value: CGSize) { this.nativeObject.intercellSpacing = value; }
  get backgroundColor(): NSColor { return this.nativeObject.backgroundColor; }
  set backgroundColor(value: NSColor) { this.nativeObject.backgroundColor = value; }
  get cellBackgroundColor(): NSColor { return this.nativeObject.cellBackgroundColor; }
  set cellBackgroundColor(value: NSColor) { this.nativeObject.cellBackgroundColor = value; }
  get drawsCellBackground(): boolean { return this.nativeObject.drawsCellBackground; }
  set drawsCellBackground(value: boolean) { this.nativeObject.drawsCellBackground = value; }
  get drawsBackground(): boolean { return this.nativeObject.drawsBackground; }
  set drawsBackground(value: boolean) { this.nativeObject.drawsBackground = value; }
  get numberOfRows(): number { return this.nativeObject.numberOfRows; }
  get numberOfColumns(): number { return this.nativeObject.numberOfColumns; }
  get doubleAction(): string { return this.nativeObject.doubleAction; }
  set doubleAction(value: string) { this.nativeObject.doubleAction = value; }
  get autosizesCells(): boolean { return this.nativeObject.autosizesCells; }
  set autosizesCells(value: boolean) { this.nativeObject.autosizesCells = value; }
  get isAutoscroll(): boolean { return this.nativeObject.isAutoscroll; }
  set isAutoscroll(value: boolean) { this.nativeObject.isAutoscroll = value; }
  get mouseDownFlags(): number { return this.nativeObject.mouseDownFlags; }
  get autorecalculatesCellSize(): boolean { return this.nativeObject.autorecalculatesCellSize; }
  set autorecalculatesCellSize(value: boolean) { this.nativeObject.autorecalculatesCellSize = value; }
  get tabKeyTraversesCells(): boolean { return this.nativeObject.tabKeyTraversesCells; }
  set tabKeyTraversesCells(value: boolean) { this.nativeObject.tabKeyTraversesCells = value; }
  get keyCell(): NSCell { return this.nativeObject.keyCell; }
  set keyCell(value: NSCell) { this.nativeObject.keyCell = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLNSRuleEditorElement extends HTMLNSControlElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSRuleEditor.new();
  get delegate(): NSRuleEditorDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSRuleEditorDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSRuleEditorDelegateImpl;
  }

  get formattingStringsFilename(): string { return this.nativeObject.formattingStringsFilename; }
  set formattingStringsFilename(value: string) { this.nativeObject.formattingStringsFilename = value; }
  get formattingDictionary(): NSDictionary { return this.nativeObject.formattingDictionary; }
  set formattingDictionary(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) { this.nativeObject.formattingDictionary = value; }
  get nestingMode(): interop.Enum<typeof NSRuleEditorNestingMode> { return this.nativeObject.nestingMode; }
  set nestingMode(value: interop.Enum<typeof NSRuleEditorNestingMode>) { this.nativeObject.nestingMode = value; }
  get rowHeight(): number { return this.nativeObject.rowHeight; }
  set rowHeight(value: number) { this.nativeObject.rowHeight = value; }
  get isEditable(): boolean { return this.nativeObject.isEditable; }
  set isEditable(value: boolean) { this.nativeObject.isEditable = value; }
  get canRemoveAllRows(): boolean { return this.nativeObject.canRemoveAllRows; }
  set canRemoveAllRows(value: boolean) { this.nativeObject.canRemoveAllRows = value; }
  get predicate(): NSPredicate { return this.nativeObject.predicate; }
  get numberOfRows(): number { return this.nativeObject.numberOfRows; }
  get selectedRowIndexes(): NSIndexSet { return this.nativeObject.selectedRowIndexes; }
  get rowClass(): interop.Object { return this.nativeObject.rowClass; }
  set rowClass(value: interop.Object) { this.nativeObject.rowClass = value; }
  get rowTypeKeyPath(): string { return this.nativeObject.rowTypeKeyPath; }
  set rowTypeKeyPath(value: string) { this.nativeObject.rowTypeKeyPath = value; }
  get subrowsKeyPath(): string { return this.nativeObject.subrowsKeyPath; }
  set subrowsKeyPath(value: string) { this.nativeObject.subrowsKeyPath = value; }
  get criteriaKeyPath(): string { return this.nativeObject.criteriaKeyPath; }
  set criteriaKeyPath(value: string) { this.nativeObject.criteriaKeyPath = value; }
  get displayValuesKeyPath(): string { return this.nativeObject.displayValuesKeyPath; }
  set displayValuesKeyPath(value: string) { this.nativeObject.displayValuesKeyPath = value; }

  set ruleEditorNumberOfChildrenForCriterionWithRowType(value: (editor: NSRuleEditor, criterion: interop.Object | null, rowType: interop.Enum<typeof NSRuleEditorRowType>) => number) {
    this.delegate.ruleEditorNumberOfChildrenForCriterionWithRowType = value;
  }
  set ruleEditorChildForCriterionWithRowType(value: (editor: NSRuleEditor, index: number, criterion: interop.Object | null, rowType: interop.Enum<typeof NSRuleEditorRowType>) => interop.Object) {
    this.delegate.ruleEditorChildForCriterionWithRowType = value;
  }
  set ruleEditorDisplayValueForCriterionInRow(value: (editor: NSRuleEditor, criterion: interop.Object, row: number) => interop.Object) {
    this.delegate.ruleEditorDisplayValueForCriterionInRow = value;
  }
  set ruleEditorPredicatePartsForCriterionWithDisplayValueInRow(value: (editor: NSRuleEditor, criterion: interop.Object, value: interop.Object, row: number) => NSDictionary) {
    this.delegate.ruleEditorPredicatePartsForCriterionWithDisplayValueInRow = value;
  }
  set ruleEditorRowsDidChange(value: (notification: NSNotification) => void) {
    this.delegate.ruleEditorRowsDidChange = value;
  }
}

export class HTMLNSSegmentedControlElement extends HTMLNSControlElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSSegmentedControl.new();

  get segmentCount(): number { return this.nativeObject.segmentCount; }
  set segmentCount(value: number) { this.nativeObject.segmentCount = value; }
  get selectedSegment(): number { return this.nativeObject.selectedSegment; }
  set selectedSegment(value: number) { this.nativeObject.selectedSegment = value; }
  get segmentStyle(): interop.Enum<typeof NSSegmentStyle> { return this.nativeObject.segmentStyle; }
  set segmentStyle(value: interop.Enum<typeof NSSegmentStyle>) { this.nativeObject.segmentStyle = value; }
  get isSpringLoaded(): boolean { return this.nativeObject.isSpringLoaded; }
  set isSpringLoaded(value: boolean) { this.nativeObject.isSpringLoaded = value; }
  get trackingMode(): interop.Enum<typeof NSSegmentSwitchTracking> { return this.nativeObject.trackingMode; }
  set trackingMode(value: interop.Enum<typeof NSSegmentSwitchTracking>) { this.nativeObject.trackingMode = value; }
  get doubleValueForSelectedSegment(): number { return this.nativeObject.doubleValueForSelectedSegment; }
  get selectedSegmentBezelColor(): NSColor { return this.nativeObject.selectedSegmentBezelColor; }
  set selectedSegmentBezelColor(value: NSColor) { this.nativeObject.selectedSegmentBezelColor = value; }
  get indexOfSelectedItem(): number { return this.nativeObject.indexOfSelectedItem; }
  get segmentDistribution(): interop.Enum<typeof NSSegmentDistribution> { return this.nativeObject.segmentDistribution; }
  set segmentDistribution(value: interop.Enum<typeof NSSegmentDistribution>) { this.nativeObject.segmentDistribution = value; }
  get activeCompressionOptions(): NSUserInterfaceCompressionOptions { return this.nativeObject.activeCompressionOptions; }
}

export class HTMLNSStepperElement extends HTMLNSControlElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSStepper.new();

  get minValue(): number { return this.nativeObject.minValue; }
  set minValue(value: number) { this.nativeObject.minValue = value; }
  get maxValue(): number { return this.nativeObject.maxValue; }
  set maxValue(value: number) { this.nativeObject.maxValue = value; }
  get increment(): number { return this.nativeObject.increment; }
  set increment(value: number) { this.nativeObject.increment = value; }
  get valueWraps(): boolean { return this.nativeObject.valueWraps; }
  set valueWraps(value: boolean) { this.nativeObject.valueWraps = value; }
  get autorepeat(): boolean { return this.nativeObject.autorepeat; }
  set autorepeat(value: boolean) { this.nativeObject.autorepeat = value; }
  get accessibilityLabel(): string { return this.nativeObject.accessibilityLabel; }
  set accessibilityLabel(value: string) { this.nativeObject.accessibilityLabel = value; }
  get accessibilityValue(): interop.Object { return this.nativeObject.accessibilityValue; }
  set accessibilityValue(value: interop.Object) { this.nativeObject.accessibilityValue = value; }
  get accessibilityFrame(): CGRect { return this.nativeObject.accessibilityFrame; }
  set accessibilityFrame(value: CGRect) { this.nativeObject.accessibilityFrame = value; }
  get accessibilityParent(): interop.Object { return this.nativeObject.accessibilityParent; }
  set accessibilityParent(value: interop.Object) { this.nativeObject.accessibilityParent = value; }
  get isAccessibilityFocused(): boolean { return this.nativeObject.isAccessibilityFocused; }
  set isAccessibilityFocused(value: boolean) { this.nativeObject.isAccessibilityFocused = value; }
  get accessibilityIdentifier(): string { return this.nativeObject.accessibilityIdentifier; }
  set accessibilityIdentifier(value: string) { this.nativeObject.accessibilityIdentifier = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLNSBrowserElement extends HTMLNSControlElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSBrowser.new();
  get delegate(): NSBrowserDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSBrowserDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSBrowserDelegateImpl;
  }

  get isLoaded(): boolean { return this.nativeObject.isLoaded; }
  get doubleAction(): string { return this.nativeObject.doubleAction; }
  set doubleAction(value: string) { this.nativeObject.doubleAction = value; }
  get cellPrototype(): interop.Object { return this.nativeObject.cellPrototype; }
  set cellPrototype(value: interop.Object) { this.nativeObject.cellPrototype = value; }
  get reusesColumns(): boolean { return this.nativeObject.reusesColumns; }
  set reusesColumns(value: boolean) { this.nativeObject.reusesColumns = value; }
  get hasHorizontalScroller(): boolean { return this.nativeObject.hasHorizontalScroller; }
  set hasHorizontalScroller(value: boolean) { this.nativeObject.hasHorizontalScroller = value; }
  get autohidesScroller(): boolean { return this.nativeObject.autohidesScroller; }
  set autohidesScroller(value: boolean) { this.nativeObject.autohidesScroller = value; }
  get separatesColumns(): boolean { return this.nativeObject.separatesColumns; }
  set separatesColumns(value: boolean) { this.nativeObject.separatesColumns = value; }
  get isTitled(): boolean { return this.nativeObject.isTitled; }
  set isTitled(value: boolean) { this.nativeObject.isTitled = value; }
  get minColumnWidth(): number { return this.nativeObject.minColumnWidth; }
  set minColumnWidth(value: number) { this.nativeObject.minColumnWidth = value; }
  get maxVisibleColumns(): number { return this.nativeObject.maxVisibleColumns; }
  set maxVisibleColumns(value: number) { this.nativeObject.maxVisibleColumns = value; }
  get allowsMultipleSelection(): boolean { return this.nativeObject.allowsMultipleSelection; }
  set allowsMultipleSelection(value: boolean) { this.nativeObject.allowsMultipleSelection = value; }
  get allowsBranchSelection(): boolean { return this.nativeObject.allowsBranchSelection; }
  set allowsBranchSelection(value: boolean) { this.nativeObject.allowsBranchSelection = value; }
  get allowsEmptySelection(): boolean { return this.nativeObject.allowsEmptySelection; }
  set allowsEmptySelection(value: boolean) { this.nativeObject.allowsEmptySelection = value; }
  get takesTitleFromPreviousColumn(): boolean { return this.nativeObject.takesTitleFromPreviousColumn; }
  set takesTitleFromPreviousColumn(value: boolean) { this.nativeObject.takesTitleFromPreviousColumn = value; }
  get sendsActionOnArrowKeys(): boolean { return this.nativeObject.sendsActionOnArrowKeys; }
  set sendsActionOnArrowKeys(value: boolean) { this.nativeObject.sendsActionOnArrowKeys = value; }
  get pathSeparator(): string { return this.nativeObject.pathSeparator; }
  set pathSeparator(value: string) { this.nativeObject.pathSeparator = value; }
  get clickedColumn(): number { return this.nativeObject.clickedColumn; }
  get clickedRow(): number { return this.nativeObject.clickedRow; }
  get selectedColumn(): number { return this.nativeObject.selectedColumn; }
  get selectedCell(): interop.Object { return this.nativeObject.selectedCell; }
  get selectedCells(): NSArray { return this.nativeObject.selectedCells; }
  get selectionIndexPath(): NSIndexPath { return this.nativeObject.selectionIndexPath; }
  set selectionIndexPath(value: NSIndexPath) { this.nativeObject.selectionIndexPath = value; }
  get selectionIndexPaths(): NSArray { return this.nativeObject.selectionIndexPaths; }
  set selectionIndexPaths(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.selectionIndexPaths = value; }
  get lastColumn(): number { return this.nativeObject.lastColumn; }
  set lastColumn(value: number) { this.nativeObject.lastColumn = value; }
  get numberOfVisibleColumns(): number { return this.nativeObject.numberOfVisibleColumns; }
  get firstVisibleColumn(): number { return this.nativeObject.firstVisibleColumn; }
  get lastVisibleColumn(): number { return this.nativeObject.lastVisibleColumn; }
  get titleHeight(): number { return this.nativeObject.titleHeight; }
  get columnResizingType(): interop.Enum<typeof NSBrowserColumnResizingType> { return this.nativeObject.columnResizingType; }
  set columnResizingType(value: interop.Enum<typeof NSBrowserColumnResizingType>) { this.nativeObject.columnResizingType = value; }
  get prefersAllColumnUserResizing(): boolean { return this.nativeObject.prefersAllColumnUserResizing; }
  set prefersAllColumnUserResizing(value: boolean) { this.nativeObject.prefersAllColumnUserResizing = value; }
  get rowHeight(): number { return this.nativeObject.rowHeight; }
  set rowHeight(value: number) { this.nativeObject.rowHeight = value; }
  get columnsAutosaveName(): string { return this.nativeObject.columnsAutosaveName; }
  set columnsAutosaveName(value: string) { this.nativeObject.columnsAutosaveName = value; }
  get allowsTypeSelect(): boolean { return this.nativeObject.allowsTypeSelect; }
  set allowsTypeSelect(value: boolean) { this.nativeObject.allowsTypeSelect = value; }
  get backgroundColor(): NSColor { return this.nativeObject.backgroundColor; }
  set backgroundColor(value: NSColor) { this.nativeObject.backgroundColor = value; }

  set browserNumberOfRowsInColumn(value: (sender: NSBrowser, column: number) => number) {
    this.delegate.browserNumberOfRowsInColumn = value;
  }
  set browserCreateRowsForColumnInMatrix(value: (sender: NSBrowser, column: number, matrix: NSMatrix) => void) {
    this.delegate.browserCreateRowsForColumnInMatrix = value;
  }
  set browserNumberOfChildrenOfItem(value: (browser: NSBrowser, item: interop.Object | null) => number) {
    this.delegate.browserNumberOfChildrenOfItem = value;
  }
  set browserChildOfItem(value: (browser: NSBrowser, index: number, item: interop.Object | null) => interop.Object) {
    this.delegate.browserChildOfItem = value;
  }
  set browserIsLeafItem(value: (browser: NSBrowser, item: interop.Object | null) => boolean) {
    this.delegate.browserIsLeafItem = value;
  }
  set browserObjectValueForItem(value: (browser: NSBrowser, item: interop.Object | null) => interop.Object) {
    this.delegate.browserObjectValueForItem = value;
  }
  set browserHeightOfRowInColumn(value: (browser: NSBrowser, row: number, columnIndex: number) => number) {
    this.delegate.browserHeightOfRowInColumn = value;
  }
  set rootItemForBrowser(value: (browser: NSBrowser) => interop.Object) {
    this.delegate.rootItemForBrowser = value;
  }
  set browserSetObjectValueForItem(value: (browser: NSBrowser, object: interop.Object | null, item: interop.Object | null) => void) {
    this.delegate.browserSetObjectValueForItem = value;
  }
  set browserShouldEditItem(value: (browser: NSBrowser, item: interop.Object | null) => boolean) {
    this.delegate.browserShouldEditItem = value;
  }
  set browserWillDisplayCellAtRowColumn(value: (sender: NSBrowser, cell: interop.Object, row: number, column: number) => void) {
    this.delegate.browserWillDisplayCellAtRowColumn = value;
  }
  set browserTitleOfColumn(value: (sender: NSBrowser, column: number) => string) {
    this.delegate.browserTitleOfColumn = value;
  }
  set browserSelectCellWithStringInColumn(value: (sender: NSBrowser, title: string, column: number) => boolean) {
    this.delegate.browserSelectCellWithStringInColumn = value;
  }
  set browserSelectRowInColumn(value: (sender: NSBrowser, row: number, column: number) => boolean) {
    this.delegate.browserSelectRowInColumn = value;
  }
  set browserIsColumnValid(value: (sender: NSBrowser, column: number) => boolean) {
    this.delegate.browserIsColumnValid = value;
  }
  set browserWillScroll(value: (sender: NSBrowser) => void) {
    this.delegate.browserWillScroll = value;
  }
  set browserDidScroll(value: (sender: NSBrowser) => void) {
    this.delegate.browserDidScroll = value;
  }
  set browserShouldSizeColumnForUserResizeToWidth(value: (browser: NSBrowser, columnIndex: number, forUserResize: boolean, suggestedWidth: number) => number) {
    this.delegate.browserShouldSizeColumnForUserResizeToWidth = value;
  }
  set browserSizeToFitWidthOfColumn(value: (browser: NSBrowser, columnIndex: number) => number) {
    this.delegate.browserSizeToFitWidthOfColumn = value;
  }
  set browserColumnConfigurationDidChange(value: (notification: NSNotification) => void) {
    this.delegate.browserColumnConfigurationDidChange = value;
  }
  set browserShouldShowCellExpansionForRowColumn(value: (browser: NSBrowser, row: number, column: number) => boolean) {
    this.delegate.browserShouldShowCellExpansionForRowColumn = value;
  }
  set browserWriteRowsWithIndexesInColumnToPasteboard(value: (browser: NSBrowser, rowIndexes: NSIndexSet, column: number, pasteboard: NSPasteboard) => boolean) {
    this.delegate.browserWriteRowsWithIndexesInColumnToPasteboard = value;
  }
  set browserNamesOfPromisedFilesDroppedAtDestinationForDraggedRowsWithIndexesInColumn(value: (browser: NSBrowser, dropDestination: NSURL, rowIndexes: NSIndexSet, column: number) => NSArray) {
    this.delegate.browserNamesOfPromisedFilesDroppedAtDestinationForDraggedRowsWithIndexesInColumn = value;
  }
  set browserCanDragRowsWithIndexesInColumnWithEvent(value: (browser: NSBrowser, rowIndexes: NSIndexSet, column: number, event: NSEvent) => boolean) {
    this.delegate.browserCanDragRowsWithIndexesInColumnWithEvent = value;
  }
  set browserDraggingImageForRowsWithIndexesInColumnWithEventOffset(value: (browser: NSBrowser, rowIndexes: NSIndexSet, column: number, event: NSEvent, dragImageOffset: interop.PointerConvertible) => NSImage) {
    this.delegate.browserDraggingImageForRowsWithIndexesInColumnWithEventOffset = value;
  }
  set browserValidateDropProposedRowColumnDropOperation(value: (browser: NSBrowser, info: NSDraggingInfo, row: interop.PointerConvertible, column: interop.PointerConvertible, dropOperation: interop.PointerConvertible) => interop.Enum<typeof NSDragOperation>) {
    this.delegate.browserValidateDropProposedRowColumnDropOperation = value;
  }
  set browserAcceptDropAtRowColumnDropOperation(value: (browser: NSBrowser, info: NSDraggingInfo, row: number, column: number, dropOperation: interop.Enum<typeof NSBrowserDropOperation>) => boolean) {
    this.delegate.browserAcceptDropAtRowColumnDropOperation = value;
  }
  set browserTypeSelectStringForRowInColumn(value: (browser: NSBrowser, row: number, column: number) => string) {
    this.delegate.browserTypeSelectStringForRowInColumn = value;
  }
  set browserShouldTypeSelectForEventWithCurrentSearchString(value: (browser: NSBrowser, event: NSEvent, searchString: string | null) => boolean) {
    this.delegate.browserShouldTypeSelectForEventWithCurrentSearchString = value;
  }
  set browserNextTypeSelectMatchFromRowToRowInColumnForString(value: (browser: NSBrowser, startRow: number, endRow: number, column: number, searchString: string | null) => number) {
    this.delegate.browserNextTypeSelectMatchFromRowToRowInColumnForString = value;
  }
  set browserPreviewViewControllerForLeafItem(value: (browser: NSBrowser, item: interop.Object) => NSViewController) {
    this.delegate.browserPreviewViewControllerForLeafItem = value;
  }
  set browserHeaderViewControllerForItem(value: (browser: NSBrowser, item: interop.Object | null) => NSViewController) {
    this.delegate.browserHeaderViewControllerForItem = value;
  }
  set browserDidChangeLastColumnToColumn(value: (browser: NSBrowser, oldLastColumn: number, column: number) => void) {
    this.delegate.browserDidChangeLastColumnToColumn = value;
  }
  set browserSelectionIndexesForProposedSelectionInColumn(value: (browser: NSBrowser, proposedSelectionIndexes: NSIndexSet, column: number) => NSIndexSet) {
    this.delegate.browserSelectionIndexesForProposedSelectionInColumn = value;
  }
}

export class HTMLNSTextFieldElement extends HTMLNSControlElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSTextField.new();
  get delegate(): NSTextFieldDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSTextFieldDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSTextFieldDelegateImpl;
  }

  get placeholderString(): string { return this.nativeObject.placeholderString; }
  set placeholderString(value: string) { this.nativeObject.placeholderString = value; }
  get placeholderAttributedString(): NSAttributedString { return this.nativeObject.placeholderAttributedString; }
  set placeholderAttributedString(value: NSAttributedString) { this.nativeObject.placeholderAttributedString = value; }
  get backgroundColor(): NSColor { return this.nativeObject.backgroundColor; }
  set backgroundColor(value: NSColor) { this.nativeObject.backgroundColor = value; }
  get drawsBackground(): boolean { return this.nativeObject.drawsBackground; }
  set drawsBackground(value: boolean) { this.nativeObject.drawsBackground = value; }
  get textColor(): NSColor { return this.nativeObject.textColor; }
  set textColor(value: NSColor) { this.nativeObject.textColor = value; }
  get isBordered(): boolean { return this.nativeObject.isBordered; }
  set isBordered(value: boolean) { this.nativeObject.isBordered = value; }
  get isBezeled(): boolean { return this.nativeObject.isBezeled; }
  set isBezeled(value: boolean) { this.nativeObject.isBezeled = value; }
  get isEditable(): boolean { return this.nativeObject.isEditable; }
  set isEditable(value: boolean) { this.nativeObject.isEditable = value; }
  get isSelectable(): boolean { return this.nativeObject.isSelectable; }
  set isSelectable(value: boolean) { this.nativeObject.isSelectable = value; }
  get acceptsFirstResponder(): boolean { return this.nativeObject.acceptsFirstResponder; }
  get bezelStyle(): interop.Enum<typeof NSTextFieldBezelStyle> { return this.nativeObject.bezelStyle; }
  set bezelStyle(value: interop.Enum<typeof NSTextFieldBezelStyle>) { this.nativeObject.bezelStyle = value; }
  get preferredMaxLayoutWidth(): number { return this.nativeObject.preferredMaxLayoutWidth; }
  set preferredMaxLayoutWidth(value: number) { this.nativeObject.preferredMaxLayoutWidth = value; }
  get maximumNumberOfLines(): number { return this.nativeObject.maximumNumberOfLines; }
  set maximumNumberOfLines(value: number) { this.nativeObject.maximumNumberOfLines = value; }
  get allowsDefaultTighteningForTruncation(): boolean { return this.nativeObject.allowsDefaultTighteningForTruncation; }
  set allowsDefaultTighteningForTruncation(value: boolean) { this.nativeObject.allowsDefaultTighteningForTruncation = value; }
  get lineBreakStrategy(): interop.Enum<typeof NSLineBreakStrategy> { return this.nativeObject.lineBreakStrategy; }
  set lineBreakStrategy(value: interop.Enum<typeof NSLineBreakStrategy>) { this.nativeObject.lineBreakStrategy = value; }
  get isAutomaticTextCompletionEnabled(): boolean { return this.nativeObject.isAutomaticTextCompletionEnabled; }
  set isAutomaticTextCompletionEnabled(value: boolean) { this.nativeObject.isAutomaticTextCompletionEnabled = value; }
  get allowsCharacterPickerTouchBarItem(): boolean { return this.nativeObject.allowsCharacterPickerTouchBarItem; }
  set allowsCharacterPickerTouchBarItem(value: boolean) { this.nativeObject.allowsCharacterPickerTouchBarItem = value; }
  get allowsEditingTextAttributes(): boolean { return this.nativeObject.allowsEditingTextAttributes; }
  set allowsEditingTextAttributes(value: boolean) { this.nativeObject.allowsEditingTextAttributes = value; }
  get importsGraphics(): boolean { return this.nativeObject.importsGraphics; }
  set importsGraphics(value: boolean) { this.nativeObject.importsGraphics = value; }
  get accessibilityValue(): string { return this.nativeObject.accessibilityValue; }
  set accessibilityValue(value: string) { this.nativeObject.accessibilityValue = value; }
  get accessibilityVisibleCharacterRange(): _NSRange { return this.nativeObject.accessibilityVisibleCharacterRange; }
  set accessibilityVisibleCharacterRange(value: _NSRange) { this.nativeObject.accessibilityVisibleCharacterRange = value; }
  get accessibilityFrame(): CGRect { return this.nativeObject.accessibilityFrame; }
  set accessibilityFrame(value: CGRect) { this.nativeObject.accessibilityFrame = value; }
  get accessibilityParent(): interop.Object { return this.nativeObject.accessibilityParent; }
  set accessibilityParent(value: interop.Object) { this.nativeObject.accessibilityParent = value; }
  get isAccessibilityFocused(): boolean { return this.nativeObject.isAccessibilityFocused; }
  set isAccessibilityFocused(value: boolean) { this.nativeObject.isAccessibilityFocused = value; }
  get accessibilityIdentifier(): string { return this.nativeObject.accessibilityIdentifier; }
  set accessibilityIdentifier(value: string) { this.nativeObject.accessibilityIdentifier = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
  get contentType(): string { return this.nativeObject.contentType; }
  set contentType(value: string) { this.nativeObject.contentType = value; }

  set textFieldTextViewCandidatesForSelectedRange(value: (textField: NSTextField, textView: NSTextView, selectedRange: _NSRange) => NSArray) {
    this.delegate.textFieldTextViewCandidatesForSelectedRange = value;
  }
  set textFieldTextViewShouldSelectCandidateAtIndex(value: (textField: NSTextField, textView: NSTextView, index: number) => boolean) {
    this.delegate.textFieldTextViewShouldSelectCandidateAtIndex = value;
  }
}

export class HTMLNSLevelIndicatorElement extends HTMLNSControlElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSLevelIndicator.new();

  get levelIndicatorStyle(): interop.Enum<typeof NSLevelIndicatorStyle> { return this.nativeObject.levelIndicatorStyle; }
  set levelIndicatorStyle(value: interop.Enum<typeof NSLevelIndicatorStyle>) { this.nativeObject.levelIndicatorStyle = value; }
  get isEditable(): boolean { return this.nativeObject.isEditable; }
  set isEditable(value: boolean) { this.nativeObject.isEditable = value; }
  get minValue(): number { return this.nativeObject.minValue; }
  set minValue(value: number) { this.nativeObject.minValue = value; }
  get maxValue(): number { return this.nativeObject.maxValue; }
  set maxValue(value: number) { this.nativeObject.maxValue = value; }
  get warningValue(): number { return this.nativeObject.warningValue; }
  set warningValue(value: number) { this.nativeObject.warningValue = value; }
  get criticalValue(): number { return this.nativeObject.criticalValue; }
  set criticalValue(value: number) { this.nativeObject.criticalValue = value; }
  get tickMarkPosition(): interop.Enum<typeof NSTickMarkPosition> { return this.nativeObject.tickMarkPosition; }
  set tickMarkPosition(value: interop.Enum<typeof NSTickMarkPosition>) { this.nativeObject.tickMarkPosition = value; }
  get numberOfTickMarks(): number { return this.nativeObject.numberOfTickMarks; }
  set numberOfTickMarks(value: number) { this.nativeObject.numberOfTickMarks = value; }
  get numberOfMajorTickMarks(): number { return this.nativeObject.numberOfMajorTickMarks; }
  set numberOfMajorTickMarks(value: number) { this.nativeObject.numberOfMajorTickMarks = value; }
  get fillColor(): NSColor { return this.nativeObject.fillColor; }
  set fillColor(value: NSColor) { this.nativeObject.fillColor = value; }
  get warningFillColor(): NSColor { return this.nativeObject.warningFillColor; }
  set warningFillColor(value: NSColor) { this.nativeObject.warningFillColor = value; }
  get criticalFillColor(): NSColor { return this.nativeObject.criticalFillColor; }
  set criticalFillColor(value: NSColor) { this.nativeObject.criticalFillColor = value; }
  get drawsTieredCapacityLevels(): boolean { return this.nativeObject.drawsTieredCapacityLevels; }
  set drawsTieredCapacityLevels(value: boolean) { this.nativeObject.drawsTieredCapacityLevels = value; }
  get placeholderVisibility(): interop.Enum<typeof NSLevelIndicatorPlaceholderVisibility> { return this.nativeObject.placeholderVisibility; }
  set placeholderVisibility(value: interop.Enum<typeof NSLevelIndicatorPlaceholderVisibility>) { this.nativeObject.placeholderVisibility = value; }
  get ratingImage(): NSImage { return this.nativeObject.ratingImage; }
  set ratingImage(value: NSImage) { this.nativeObject.ratingImage = value; }
  get ratingPlaceholderImage(): NSImage { return this.nativeObject.ratingPlaceholderImage; }
  set ratingPlaceholderImage(value: NSImage) { this.nativeObject.ratingPlaceholderImage = value; }
}

export class HTMLNSFormElement extends HTMLNSMatrixElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSForm.new();

}

export class HTMLNSImageViewElement extends HTMLNSControlElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSImageView.new();

  get image(): NSImage { return this.nativeObject.image; }
  set image(value: NSImage) { this.nativeObject.image = value; }
  get isEditable(): boolean { return this.nativeObject.isEditable; }
  set isEditable(value: boolean) { this.nativeObject.isEditable = value; }
  get imageAlignment(): interop.Enum<typeof NSImageAlignment> { return this.nativeObject.imageAlignment; }
  set imageAlignment(value: interop.Enum<typeof NSImageAlignment>) { this.nativeObject.imageAlignment = value; }
  get imageScaling(): interop.Enum<typeof NSImageScaling> { return this.nativeObject.imageScaling; }
  set imageScaling(value: interop.Enum<typeof NSImageScaling>) { this.nativeObject.imageScaling = value; }
  get imageFrameStyle(): interop.Enum<typeof NSImageFrameStyle> { return this.nativeObject.imageFrameStyle; }
  set imageFrameStyle(value: interop.Enum<typeof NSImageFrameStyle>) { this.nativeObject.imageFrameStyle = value; }
  get symbolConfiguration(): NSImageSymbolConfiguration { return this.nativeObject.symbolConfiguration; }
  set symbolConfiguration(value: NSImageSymbolConfiguration) { this.nativeObject.symbolConfiguration = value; }
  get contentTintColor(): NSColor { return this.nativeObject.contentTintColor; }
  set contentTintColor(value: NSColor) { this.nativeObject.contentTintColor = value; }
  get animates(): boolean { return this.nativeObject.animates; }
  set animates(value: boolean) { this.nativeObject.animates = value; }
  get allowsCutCopyPaste(): boolean { return this.nativeObject.allowsCutCopyPaste; }
  set allowsCutCopyPaste(value: boolean) { this.nativeObject.allowsCutCopyPaste = value; }
  get preferredImageDynamicRange(): interop.Enum<typeof NSImageDynamicRange> { return this.nativeObject.preferredImageDynamicRange; }
  set preferredImageDynamicRange(value: interop.Enum<typeof NSImageDynamicRange>) { this.nativeObject.preferredImageDynamicRange = value; }
  get imageDynamicRange(): interop.Enum<typeof NSImageDynamicRange> { return this.nativeObject.imageDynamicRange; }
  get accessibilityLabel(): string { return this.nativeObject.accessibilityLabel; }
  set accessibilityLabel(value: string) { this.nativeObject.accessibilityLabel = value; }
  get accessibilityFrame(): CGRect { return this.nativeObject.accessibilityFrame; }
  set accessibilityFrame(value: CGRect) { this.nativeObject.accessibilityFrame = value; }
  get accessibilityParent(): interop.Object { return this.nativeObject.accessibilityParent; }
  set accessibilityParent(value: interop.Object) { this.nativeObject.accessibilityParent = value; }
  get isAccessibilityFocused(): boolean { return this.nativeObject.isAccessibilityFocused; }
  set isAccessibilityFocused(value: boolean) { this.nativeObject.isAccessibilityFocused = value; }
  get accessibilityIdentifier(): string { return this.nativeObject.accessibilityIdentifier; }
  set accessibilityIdentifier(value: string) { this.nativeObject.accessibilityIdentifier = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLNSSecureTextFieldElement extends HTMLNSTextFieldElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSSecureTextField.new();

}

export class HTMLNSTextViewElement extends HTMLNSTextElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSTextView.new();
  get delegate(): NSTextViewDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSTextViewDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSTextViewDelegateImpl;
  }

  get textContainer(): NSTextContainer { return this.nativeObject.textContainer; }
  set textContainer(value: NSTextContainer) { this.nativeObject.textContainer = value; }
  get textContainerInset(): CGSize { return this.nativeObject.textContainerInset; }
  set textContainerInset(value: CGSize) { this.nativeObject.textContainerInset = value; }
  get textContainerOrigin(): CGPoint { return this.nativeObject.textContainerOrigin; }
  get layoutManager(): NSLayoutManager { return this.nativeObject.layoutManager; }
  get textStorage(): NSTextStorage { return this.nativeObject.textStorage; }
  get textLayoutManager(): NSTextLayoutManager { return this.nativeObject.textLayoutManager; }
  get textContentStorage(): NSTextContentStorage { return this.nativeObject.textContentStorage; }
  get shouldDrawInsertionPoint(): boolean { return this.nativeObject.shouldDrawInsertionPoint; }
  get usesAdaptiveColorMappingForDarkAppearance(): boolean { return this.nativeObject.usesAdaptiveColorMappingForDarkAppearance; }
  set usesAdaptiveColorMappingForDarkAppearance(value: boolean) { this.nativeObject.usesAdaptiveColorMappingForDarkAppearance = value; }
  get rangeForUserCompletion(): _NSRange { return this.nativeObject.rangeForUserCompletion; }
  get writablePasteboardTypes(): NSArray { return this.nativeObject.writablePasteboardTypes; }
  get readablePasteboardTypes(): NSArray { return this.nativeObject.readablePasteboardTypes; }
  get acceptableDragTypes(): NSArray { return this.nativeObject.acceptableDragTypes; }
  get selectedRanges(): NSArray { return this.nativeObject.selectedRanges; }
  set selectedRanges(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.selectedRanges = value; }
  get selectionAffinity(): interop.Enum<typeof NSSelectionAffinity> { return this.nativeObject.selectionAffinity; }
  get selectionGranularity(): interop.Enum<typeof NSSelectionGranularity> { return this.nativeObject.selectionGranularity; }
  set selectionGranularity(value: interop.Enum<typeof NSSelectionGranularity>) { this.nativeObject.selectionGranularity = value; }
  get selectedTextAttributes(): NSDictionary { return this.nativeObject.selectedTextAttributes; }
  set selectedTextAttributes(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) { this.nativeObject.selectedTextAttributes = value; }
  get insertionPointColor(): NSColor { return this.nativeObject.insertionPointColor; }
  set insertionPointColor(value: NSColor) { this.nativeObject.insertionPointColor = value; }
  get markedTextAttributes(): NSDictionary { return this.nativeObject.markedTextAttributes; }
  set markedTextAttributes(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) { this.nativeObject.markedTextAttributes = value; }
  get linkTextAttributes(): NSDictionary { return this.nativeObject.linkTextAttributes; }
  set linkTextAttributes(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) { this.nativeObject.linkTextAttributes = value; }
  get displaysLinkToolTips(): boolean { return this.nativeObject.displaysLinkToolTips; }
  set displaysLinkToolTips(value: boolean) { this.nativeObject.displaysLinkToolTips = value; }
  get acceptsGlyphInfo(): boolean { return this.nativeObject.acceptsGlyphInfo; }
  set acceptsGlyphInfo(value: boolean) { this.nativeObject.acceptsGlyphInfo = value; }
  get usesRuler(): boolean { return this.nativeObject.usesRuler; }
  set usesRuler(value: boolean) { this.nativeObject.usesRuler = value; }
  get usesInspectorBar(): boolean { return this.nativeObject.usesInspectorBar; }
  set usesInspectorBar(value: boolean) { this.nativeObject.usesInspectorBar = value; }
  get isContinuousSpellCheckingEnabled(): boolean { return this.nativeObject.isContinuousSpellCheckingEnabled; }
  set isContinuousSpellCheckingEnabled(value: boolean) { this.nativeObject.isContinuousSpellCheckingEnabled = value; }
  get spellCheckerDocumentTag(): number { return this.nativeObject.spellCheckerDocumentTag; }
  get isGrammarCheckingEnabled(): boolean { return this.nativeObject.isGrammarCheckingEnabled; }
  set isGrammarCheckingEnabled(value: boolean) { this.nativeObject.isGrammarCheckingEnabled = value; }
  get typingAttributes(): NSDictionary { return this.nativeObject.typingAttributes; }
  set typingAttributes(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) { this.nativeObject.typingAttributes = value; }
  get rangesForUserTextChange(): NSArray { return this.nativeObject.rangesForUserTextChange; }
  get rangesForUserCharacterAttributeChange(): NSArray { return this.nativeObject.rangesForUserCharacterAttributeChange; }
  get rangesForUserParagraphAttributeChange(): NSArray { return this.nativeObject.rangesForUserParagraphAttributeChange; }
  get rangeForUserTextChange(): _NSRange { return this.nativeObject.rangeForUserTextChange; }
  get rangeForUserCharacterAttributeChange(): _NSRange { return this.nativeObject.rangeForUserCharacterAttributeChange; }
  get rangeForUserParagraphAttributeChange(): _NSRange { return this.nativeObject.rangeForUserParagraphAttributeChange; }
  get allowsDocumentBackgroundColorChange(): boolean { return this.nativeObject.allowsDocumentBackgroundColorChange; }
  set allowsDocumentBackgroundColorChange(value: boolean) { this.nativeObject.allowsDocumentBackgroundColorChange = value; }
  get defaultParagraphStyle(): NSParagraphStyle { return this.nativeObject.defaultParagraphStyle; }
  set defaultParagraphStyle(value: NSParagraphStyle) { this.nativeObject.defaultParagraphStyle = value; }
  get allowsUndo(): boolean { return this.nativeObject.allowsUndo; }
  set allowsUndo(value: boolean) { this.nativeObject.allowsUndo = value; }
  get isCoalescingUndo(): boolean { return this.nativeObject.isCoalescingUndo; }
  get allowsImageEditing(): boolean { return this.nativeObject.allowsImageEditing; }
  set allowsImageEditing(value: boolean) { this.nativeObject.allowsImageEditing = value; }
  get usesRolloverButtonForSelection(): boolean { return this.nativeObject.usesRolloverButtonForSelection; }
  set usesRolloverButtonForSelection(value: boolean) { this.nativeObject.usesRolloverButtonForSelection = value; }
  get isEditable(): boolean { return this.nativeObject.isEditable; }
  set isEditable(value: boolean) { this.nativeObject.isEditable = value; }
  get isSelectable(): boolean { return this.nativeObject.isSelectable; }
  set isSelectable(value: boolean) { this.nativeObject.isSelectable = value; }
  get isRichText(): boolean { return this.nativeObject.isRichText; }
  set isRichText(value: boolean) { this.nativeObject.isRichText = value; }
  get importsGraphics(): boolean { return this.nativeObject.importsGraphics; }
  set importsGraphics(value: boolean) { this.nativeObject.importsGraphics = value; }
  get drawsBackground(): boolean { return this.nativeObject.drawsBackground; }
  set drawsBackground(value: boolean) { this.nativeObject.drawsBackground = value; }
  get backgroundColor(): NSColor { return this.nativeObject.backgroundColor; }
  set backgroundColor(value: NSColor) { this.nativeObject.backgroundColor = value; }
  get isFieldEditor(): boolean { return this.nativeObject.isFieldEditor; }
  set isFieldEditor(value: boolean) { this.nativeObject.isFieldEditor = value; }
  get usesFontPanel(): boolean { return this.nativeObject.usesFontPanel; }
  set usesFontPanel(value: boolean) { this.nativeObject.usesFontPanel = value; }
  get isRulerVisible(): boolean { return this.nativeObject.isRulerVisible; }
  set isRulerVisible(value: boolean) { this.nativeObject.isRulerVisible = value; }
  get allowedInputSourceLocales(): NSArray { return this.nativeObject.allowedInputSourceLocales; }
  set allowedInputSourceLocales(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.allowedInputSourceLocales = value; }
  get smartInsertDeleteEnabled(): boolean { return this.nativeObject.smartInsertDeleteEnabled; }
  set smartInsertDeleteEnabled(value: boolean) { this.nativeObject.smartInsertDeleteEnabled = value; }
  get isAutomaticQuoteSubstitutionEnabled(): boolean { return this.nativeObject.isAutomaticQuoteSubstitutionEnabled; }
  set isAutomaticQuoteSubstitutionEnabled(value: boolean) { this.nativeObject.isAutomaticQuoteSubstitutionEnabled = value; }
  get isAutomaticLinkDetectionEnabled(): boolean { return this.nativeObject.isAutomaticLinkDetectionEnabled; }
  set isAutomaticLinkDetectionEnabled(value: boolean) { this.nativeObject.isAutomaticLinkDetectionEnabled = value; }
  get isAutomaticDataDetectionEnabled(): boolean { return this.nativeObject.isAutomaticDataDetectionEnabled; }
  set isAutomaticDataDetectionEnabled(value: boolean) { this.nativeObject.isAutomaticDataDetectionEnabled = value; }
  get isAutomaticDashSubstitutionEnabled(): boolean { return this.nativeObject.isAutomaticDashSubstitutionEnabled; }
  set isAutomaticDashSubstitutionEnabled(value: boolean) { this.nativeObject.isAutomaticDashSubstitutionEnabled = value; }
  get isAutomaticTextReplacementEnabled(): boolean { return this.nativeObject.isAutomaticTextReplacementEnabled; }
  set isAutomaticTextReplacementEnabled(value: boolean) { this.nativeObject.isAutomaticTextReplacementEnabled = value; }
  get isAutomaticSpellingCorrectionEnabled(): boolean { return this.nativeObject.isAutomaticSpellingCorrectionEnabled; }
  set isAutomaticSpellingCorrectionEnabled(value: boolean) { this.nativeObject.isAutomaticSpellingCorrectionEnabled = value; }
  get enabledTextCheckingTypes(): number { return this.nativeObject.enabledTextCheckingTypes; }
  set enabledTextCheckingTypes(value: number) { this.nativeObject.enabledTextCheckingTypes = value; }
  get usesFindPanel(): boolean { return this.nativeObject.usesFindPanel; }
  set usesFindPanel(value: boolean) { this.nativeObject.usesFindPanel = value; }
  get usesFindBar(): boolean { return this.nativeObject.usesFindBar; }
  set usesFindBar(value: boolean) { this.nativeObject.usesFindBar = value; }
  get isIncrementalSearchingEnabled(): boolean { return this.nativeObject.isIncrementalSearchingEnabled; }
  set isIncrementalSearchingEnabled(value: boolean) { this.nativeObject.isIncrementalSearchingEnabled = value; }
  get inlinePredictionType(): interop.Enum<typeof NSTextInputTraitType> { return this.nativeObject.inlinePredictionType; }
  set inlinePredictionType(value: interop.Enum<typeof NSTextInputTraitType>) { this.nativeObject.inlinePredictionType = value; }
  get isAutomaticTextCompletionEnabled(): boolean { return this.nativeObject.isAutomaticTextCompletionEnabled; }
  set isAutomaticTextCompletionEnabled(value: boolean) { this.nativeObject.isAutomaticTextCompletionEnabled = value; }
  get allowsCharacterPickerTouchBarItem(): boolean { return this.nativeObject.allowsCharacterPickerTouchBarItem; }
  set allowsCharacterPickerTouchBarItem(value: boolean) { this.nativeObject.allowsCharacterPickerTouchBarItem = value; }
  get candidateListTouchBarItem(): NSCandidateListTouchBarItem { return this.nativeObject.candidateListTouchBarItem; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
  get selectedRange(): _NSRange { return this.nativeObject.selectedRange; }
  set selectedRange(value: _NSRange) { this.nativeObject.selectedRange = value; }
  get unionRectInVisibleSelectedRange(): CGRect { return this.nativeObject.unionRectInVisibleSelectedRange; }
  get documentVisibleRect(): CGRect { return this.nativeObject.documentVisibleRect; }
  get layoutOrientation(): interop.Enum<typeof NSTextLayoutOrientation> { return this.nativeObject.layoutOrientation; }
  get accessibilityValue(): string { return this.nativeObject.accessibilityValue; }
  set accessibilityValue(value: string) { this.nativeObject.accessibilityValue = value; }
  get accessibilityVisibleCharacterRange(): _NSRange { return this.nativeObject.accessibilityVisibleCharacterRange; }
  set accessibilityVisibleCharacterRange(value: _NSRange) { this.nativeObject.accessibilityVisibleCharacterRange = value; }
  get accessibilityFrame(): CGRect { return this.nativeObject.accessibilityFrame; }
  set accessibilityFrame(value: CGRect) { this.nativeObject.accessibilityFrame = value; }
  get accessibilityParent(): interop.Object { return this.nativeObject.accessibilityParent; }
  set accessibilityParent(value: interop.Object) { this.nativeObject.accessibilityParent = value; }
  get isAccessibilityFocused(): boolean { return this.nativeObject.isAccessibilityFocused; }
  set isAccessibilityFocused(value: boolean) { this.nativeObject.isAccessibilityFocused = value; }
  get accessibilityIdentifier(): string { return this.nativeObject.accessibilityIdentifier; }
  set accessibilityIdentifier(value: string) { this.nativeObject.accessibilityIdentifier = value; }
  get contentType(): string { return this.nativeObject.contentType; }
  set contentType(value: string) { this.nativeObject.contentType = value; }

  set textViewClickedOnLinkAtIndex(value: (textView: NSTextView, link: interop.Object, charIndex: number) => boolean) {
    this.delegate.textViewClickedOnLinkAtIndex = value;
  }
  set textViewClickedOnCellInRectAtIndex(value: (textView: NSTextView, cell: NSTextAttachmentCell, cellFrame: CGRect, charIndex: number) => void) {
    this.delegate.textViewClickedOnCellInRectAtIndex = value;
  }
  set textViewDoubleClickedOnCellInRectAtIndex(value: (textView: NSTextView, cell: NSTextAttachmentCell, cellFrame: CGRect, charIndex: number) => void) {
    this.delegate.textViewDoubleClickedOnCellInRectAtIndex = value;
  }
  set textViewDraggedCellInRectEventAtIndex(value: (view: NSTextView, cell: NSTextAttachmentCell, rect: CGRect, event: NSEvent, charIndex: number) => void) {
    this.delegate.textViewDraggedCellInRectEventAtIndex = value;
  }
  set textViewWritablePasteboardTypesForCellAtIndex(value: (view: NSTextView, cell: NSTextAttachmentCell, charIndex: number) => NSArray) {
    this.delegate.textViewWritablePasteboardTypesForCellAtIndex = value;
  }
  set textViewWriteCellAtIndexToPasteboardType(value: (view: NSTextView, cell: NSTextAttachmentCell, charIndex: number, pboard: NSPasteboard, type: string) => boolean) {
    this.delegate.textViewWriteCellAtIndexToPasteboardType = value;
  }
  set textViewWillChangeSelectionFromCharacterRangeToCharacterRange(value: (textView: NSTextView, oldSelectedCharRange: _NSRange, newSelectedCharRange: _NSRange) => _NSRange) {
    this.delegate.textViewWillChangeSelectionFromCharacterRangeToCharacterRange = value;
  }
  set textViewWillChangeSelectionFromCharacterRangesToCharacterRanges(value: (textView: NSTextView, oldSelectedCharRanges: NSArray<interop.Object> | Array<interop.Object>, newSelectedCharRanges: NSArray<interop.Object> | Array<interop.Object>) => NSArray) {
    this.delegate.textViewWillChangeSelectionFromCharacterRangesToCharacterRanges = value;
  }
  set textViewShouldChangeTextInRangesReplacementStrings(value: (textView: NSTextView, affectedRanges: NSArray<interop.Object> | Array<interop.Object>, replacementStrings: NSArray<interop.Object> | Array<interop.Object> | null) => boolean) {
    this.delegate.textViewShouldChangeTextInRangesReplacementStrings = value;
  }
  set textViewShouldChangeTypingAttributesToAttributes(value: (textView: NSTextView, oldTypingAttributes: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, newTypingAttributes: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) => NSDictionary) {
    this.delegate.textViewShouldChangeTypingAttributesToAttributes = value;
  }
  set textViewDidChangeSelection(value: (notification: NSNotification) => void) {
    this.delegate.textViewDidChangeSelection = value;
  }
  set textViewDidChangeTypingAttributes(value: (notification: NSNotification) => void) {
    this.delegate.textViewDidChangeTypingAttributes = value;
  }
  set textViewWillDisplayToolTipForCharacterAtIndex(value: (textView: NSTextView, tooltip: string, characterIndex: number) => string) {
    this.delegate.textViewWillDisplayToolTipForCharacterAtIndex = value;
  }
  set textViewCompletionsForPartialWordRangeIndexOfSelectedItem(value: (textView: NSTextView, words: NSArray<interop.Object> | Array<interop.Object>, charRange: _NSRange, index: interop.PointerConvertible) => NSArray) {
    this.delegate.textViewCompletionsForPartialWordRangeIndexOfSelectedItem = value;
  }
  set textViewShouldChangeTextInRangeReplacementString(value: (textView: NSTextView, affectedCharRange: _NSRange, replacementString: string | null) => boolean) {
    this.delegate.textViewShouldChangeTextInRangeReplacementString = value;
  }
  set textViewDoCommandBySelector(value: (textView: NSTextView, commandSelector: string) => boolean) {
    this.delegate.textViewDoCommandBySelector = value;
  }
  set textViewShouldSetSpellingStateRange(value: (textView: NSTextView, value: number, affectedCharRange: _NSRange) => number) {
    this.delegate.textViewShouldSetSpellingStateRange = value;
  }
  set textViewMenuForEventAtIndex(value: (view: NSTextView, menu: NSMenu, event: NSEvent, charIndex: number) => NSMenu) {
    this.delegate.textViewMenuForEventAtIndex = value;
  }
  set textViewWillCheckTextInRangeOptionsTypes(value: (view: NSTextView, range: _NSRange, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, checkingTypes: interop.PointerConvertible) => NSDictionary) {
    this.delegate.textViewWillCheckTextInRangeOptionsTypes = value;
  }
  set textViewDidCheckTextInRangeTypesOptionsResultsOrthographyWordCount(value: (view: NSTextView, range: _NSRange, checkingTypes: number, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, results: NSArray<interop.Object> | Array<interop.Object>, orthography: NSOrthography, wordCount: number) => NSArray) {
    this.delegate.textViewDidCheckTextInRangeTypesOptionsResultsOrthographyWordCount = value;
  }
  set textViewURLForContentsOfTextAttachmentAtIndex(value: (textView: NSTextView, textAttachment: NSTextAttachment, charIndex: number) => NSURL) {
    this.delegate.textViewURLForContentsOfTextAttachmentAtIndex = value;
  }
  set textViewWillShowSharingServicePickerForItems(value: (textView: NSTextView, servicePicker: NSSharingServicePicker, items: NSArray<interop.Object> | Array<interop.Object>) => NSSharingServicePicker) {
    this.delegate.textViewWillShowSharingServicePickerForItems = value;
  }
  set undoManagerForTextView(value: (view: NSTextView) => NSUndoManager) {
    this.delegate.undoManagerForTextView = value;
  }
  set textViewShouldUpdateTouchBarItemIdentifiers(value: (textView: NSTextView, identifiers: NSArray<interop.Object> | Array<interop.Object>) => NSArray) {
    this.delegate.textViewShouldUpdateTouchBarItemIdentifiers = value;
  }
  set textViewCandidatesForSelectedRange(value: (textView: NSTextView, selectedRange: _NSRange) => NSArray) {
    this.delegate.textViewCandidatesForSelectedRange = value;
  }
  set textViewShouldSelectCandidateAtIndex(value: (textView: NSTextView, index: number) => boolean) {
    this.delegate.textViewShouldSelectCandidateAtIndex = value;
  }
  set textViewClickedOnLink(value: (textView: NSTextView, link: interop.Object) => boolean) {
    this.delegate.textViewClickedOnLink = value;
  }
  set textViewClickedOnCellInRect(value: (textView: NSTextView, cell: NSTextAttachmentCell, cellFrame: CGRect) => void) {
    this.delegate.textViewClickedOnCellInRect = value;
  }
  set textViewDoubleClickedOnCellInRect(value: (textView: NSTextView, cell: NSTextAttachmentCell, cellFrame: CGRect) => void) {
    this.delegate.textViewDoubleClickedOnCellInRect = value;
  }
  set textViewDraggedCellInRectEvent(value: (view: NSTextView, cell: NSTextAttachmentCell, rect: CGRect, event: NSEvent) => void) {
    this.delegate.textViewDraggedCellInRectEvent = value;
  }
}

export class HTMLNSColorWellElement extends HTMLNSControlElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSColorWell.new();

  get isActive(): boolean { return this.nativeObject.isActive; }
  get isBordered(): boolean { return this.nativeObject.isBordered; }
  set isBordered(value: boolean) { this.nativeObject.isBordered = value; }
  get color(): NSColor { return this.nativeObject.color; }
  set color(value: NSColor) { this.nativeObject.color = value; }
  get colorWellStyle(): interop.Enum<typeof NSColorWellStyle> { return this.nativeObject.colorWellStyle; }
  set colorWellStyle(value: interop.Enum<typeof NSColorWellStyle>) { this.nativeObject.colorWellStyle = value; }
  get image(): NSImage { return this.nativeObject.image; }
  set image(value: NSImage) { this.nativeObject.image = value; }
  get pulldownTarget(): interop.Object { return this.nativeObject.pulldownTarget; }
  set pulldownTarget(value: interop.Object) { this.nativeObject.pulldownTarget = value; }
  get pulldownAction(): string { return this.nativeObject.pulldownAction; }
  set pulldownAction(value: string) { this.nativeObject.pulldownAction = value; }
  get supportsAlpha(): boolean { return this.nativeObject.supportsAlpha; }
  set supportsAlpha(value: boolean) { this.nativeObject.supportsAlpha = value; }
}

export class HTMLNSLayoutXAxisAnchorElement extends HTMLNSLayoutAnchorElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSLayoutXAxisAnchor.new();

}

export class HTMLNSTabViewControllerElement extends HTMLNSViewControllerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTabViewController.new();

  get tabStyle(): interop.Enum<typeof NSTabViewControllerTabStyle> { return this.nativeObject.tabStyle; }
  set tabStyle(value: interop.Enum<typeof NSTabViewControllerTabStyle>) { this.nativeObject.tabStyle = value; }
  get tabView(): NSTabView { return this.nativeObject.tabView; }
  set tabView(value: NSTabView) { this.nativeObject.tabView = value; }
  get transitionOptions(): interop.Enum<typeof NSViewControllerTransitionOptions> { return this.nativeObject.transitionOptions; }
  set transitionOptions(value: interop.Enum<typeof NSViewControllerTransitionOptions>) { this.nativeObject.transitionOptions = value; }
  get canPropagateSelectedChildViewControllerTitle(): boolean { return this.nativeObject.canPropagateSelectedChildViewControllerTitle; }
  set canPropagateSelectedChildViewControllerTitle(value: boolean) { this.nativeObject.canPropagateSelectedChildViewControllerTitle = value; }
  get tabViewItems(): NSArray { return this.nativeObject.tabViewItems; }
  set tabViewItems(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.tabViewItems = value; }
  get selectedTabViewItemIndex(): number { return this.nativeObject.selectedTabViewItemIndex; }
  set selectedTabViewItemIndex(value: number) { this.nativeObject.selectedTabViewItemIndex = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLNSSharingServicePickerTouchBarItemElement extends HTMLNSTouchBarItemElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSSharingServicePickerTouchBarItem.new();

  get delegate(): NSSharingServicePickerTouchBarItemDelegate | null { return this.nativeObject.delegate; }
  set delegate(value: NSSharingServicePickerTouchBarItemDelegate | null) { this.nativeObject.delegate = value; }
  get isEnabled(): boolean { return this.nativeObject.isEnabled; }
  set isEnabled(value: boolean) { this.nativeObject.isEnabled = value; }
  get buttonTitle(): string { return this.nativeObject.buttonTitle; }
  set buttonTitle(value: string) { this.nativeObject.buttonTitle = value; }
  get buttonImage(): NSImage { return this.nativeObject.buttonImage; }
  set buttonImage(value: NSImage) { this.nativeObject.buttonImage = value; }
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

export class HTMLNSSwitchElement extends HTMLNSControlElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSSwitch.new();

  get state(): number { return this.nativeObject.state; }
  set state(value: number) { this.nativeObject.state = value; }
  get accessibilityValue(): string { return this.nativeObject.accessibilityValue; }
  set accessibilityValue(value: string) { this.nativeObject.accessibilityValue = value; }
  get accessibilityLabel(): string { return this.nativeObject.accessibilityLabel; }
  set accessibilityLabel(value: string) { this.nativeObject.accessibilityLabel = value; }
  get accessibilityFrame(): CGRect { return this.nativeObject.accessibilityFrame; }
  set accessibilityFrame(value: CGRect) { this.nativeObject.accessibilityFrame = value; }
  get accessibilityParent(): interop.Object { return this.nativeObject.accessibilityParent; }
  set accessibilityParent(value: interop.Object) { this.nativeObject.accessibilityParent = value; }
  get isAccessibilityFocused(): boolean { return this.nativeObject.isAccessibilityFocused; }
  set isAccessibilityFocused(value: boolean) { this.nativeObject.isAccessibilityFocused = value; }
  get accessibilityIdentifier(): string { return this.nativeObject.accessibilityIdentifier; }
  set accessibilityIdentifier(value: string) { this.nativeObject.accessibilityIdentifier = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLNSOpenPanelElement extends HTMLNSSavePanelElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSOpenPanel.new();

  get URLs(): NSArray { return this.nativeObject.URLs; }
  get resolvesAliases(): boolean { return this.nativeObject.resolvesAliases; }
  set resolvesAliases(value: boolean) { this.nativeObject.resolvesAliases = value; }
  get canChooseDirectories(): boolean { return this.nativeObject.canChooseDirectories; }
  set canChooseDirectories(value: boolean) { this.nativeObject.canChooseDirectories = value; }
  get allowsMultipleSelection(): boolean { return this.nativeObject.allowsMultipleSelection; }
  set allowsMultipleSelection(value: boolean) { this.nativeObject.allowsMultipleSelection = value; }
  get canChooseFiles(): boolean { return this.nativeObject.canChooseFiles; }
  set canChooseFiles(value: boolean) { this.nativeObject.canChooseFiles = value; }
  get canResolveUbiquitousConflicts(): boolean { return this.nativeObject.canResolveUbiquitousConflicts; }
  set canResolveUbiquitousConflicts(value: boolean) { this.nativeObject.canResolveUbiquitousConflicts = value; }
  get canDownloadUbiquitousContents(): boolean { return this.nativeObject.canDownloadUbiquitousContents; }
  set canDownloadUbiquitousContents(value: boolean) { this.nativeObject.canDownloadUbiquitousContents = value; }
  get isAccessoryViewDisclosed(): boolean { return this.nativeObject.isAccessoryViewDisclosed; }
  set isAccessoryViewDisclosed(value: boolean) { this.nativeObject.isAccessoryViewDisclosed = value; }
}

export class HTMLNSTextParagraphElement extends HTMLNSTextElementElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSTextParagraph.new();

  get attributedString(): NSAttributedString { return this.nativeObject.attributedString; }
  get paragraphContentRange(): NSTextRange { return this.nativeObject.paragraphContentRange; }
  get paragraphSeparatorRange(): NSTextRange { return this.nativeObject.paragraphSeparatorRange; }
}

export class HTMLNSPDFImageRepElement extends HTMLNSImageRepElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSPDFImageRep.new();

  get PDFRepresentation(): NSData { return this.nativeObject.PDFRepresentation; }
  get bounds(): CGRect { return this.nativeObject.bounds; }
  get currentPage(): number { return this.nativeObject.currentPage; }
  set currentPage(value: number) { this.nativeObject.currentPage = value; }
  get pageCount(): number { return this.nativeObject.pageCount; }
}

export class HTMLNSPageControllerElement extends HTMLNSViewControllerElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSPageController.new();
  get delegate(): NSPageControllerDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSPageControllerDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSPageControllerDelegateImpl;
  }

  get selectedViewController(): NSViewController { return this.nativeObject.selectedViewController; }
  get transitionStyle(): interop.Enum<typeof NSPageControllerTransitionStyle> { return this.nativeObject.transitionStyle; }
  set transitionStyle(value: interop.Enum<typeof NSPageControllerTransitionStyle>) { this.nativeObject.transitionStyle = value; }
  get arrangedObjects(): NSArray { return this.nativeObject.arrangedObjects; }
  set arrangedObjects(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.arrangedObjects = value; }
  get selectedIndex(): number { return this.nativeObject.selectedIndex; }
  set selectedIndex(value: number) { this.nativeObject.selectedIndex = value; }
  get animations(): NSDictionary { return this.nativeObject.animations; }
  set animations(value: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>) { this.nativeObject.animations = value; }

  set pageControllerIdentifierForObject(value: (pageController: NSPageController, object: interop.Object) => string) {
    this.delegate.pageControllerIdentifierForObject = value;
  }
  set pageControllerViewControllerForIdentifier(value: (pageController: NSPageController, identifier: string) => NSViewController) {
    this.delegate.pageControllerViewControllerForIdentifier = value;
  }
  set pageControllerFrameForObject(value: (pageController: NSPageController, object: interop.Object | null) => CGRect) {
    this.delegate.pageControllerFrameForObject = value;
  }
  set pageControllerPrepareViewControllerWithObject(value: (pageController: NSPageController, viewController: NSViewController, object: interop.Object | null) => void) {
    this.delegate.pageControllerPrepareViewControllerWithObject = value;
  }
  set pageControllerDidTransitionToObject(value: (pageController: NSPageController, object: interop.Object) => void) {
    this.delegate.pageControllerDidTransitionToObject = value;
  }
  set pageControllerWillStartLiveTransition(value: (pageController: NSPageController) => void) {
    this.delegate.pageControllerWillStartLiveTransition = value;
  }
  set pageControllerDidEndLiveTransition(value: (pageController: NSPageController) => void) {
    this.delegate.pageControllerDidEndLiveTransition = value;
  }
}

export class HTMLNSComboBoxElement extends HTMLNSTextFieldElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSComboBox.new();
  get delegate(): NSComboBoxDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSComboBoxDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSComboBoxDelegateImpl;
  }

  get hasVerticalScroller(): boolean { return this.nativeObject.hasVerticalScroller; }
  set hasVerticalScroller(value: boolean) { this.nativeObject.hasVerticalScroller = value; }
  get intercellSpacing(): CGSize { return this.nativeObject.intercellSpacing; }
  set intercellSpacing(value: CGSize) { this.nativeObject.intercellSpacing = value; }
  get itemHeight(): number { return this.nativeObject.itemHeight; }
  set itemHeight(value: number) { this.nativeObject.itemHeight = value; }
  get numberOfVisibleItems(): number { return this.nativeObject.numberOfVisibleItems; }
  set numberOfVisibleItems(value: number) { this.nativeObject.numberOfVisibleItems = value; }
  get isButtonBordered(): boolean { return this.nativeObject.isButtonBordered; }
  set isButtonBordered(value: boolean) { this.nativeObject.isButtonBordered = value; }
  get usesDataSource(): boolean { return this.nativeObject.usesDataSource; }
  set usesDataSource(value: boolean) { this.nativeObject.usesDataSource = value; }
  get indexOfSelectedItem(): number { return this.nativeObject.indexOfSelectedItem; }
  get numberOfItems(): number { return this.nativeObject.numberOfItems; }
  get completes(): boolean { return this.nativeObject.completes; }
  set completes(value: boolean) { this.nativeObject.completes = value; }
  get dataSource(): NSComboBoxDataSource { return this.nativeObject.dataSource; }
  set dataSource(value: NSComboBoxDataSource) { this.nativeObject.dataSource = value; }
  get objectValueOfSelectedItem(): interop.Object { return this.nativeObject.objectValueOfSelectedItem; }
  get objectValues(): NSArray { return this.nativeObject.objectValues; }

  set comboBoxWillPopUp(value: (notification: NSNotification) => void) {
    this.delegate.comboBoxWillPopUp = value;
  }
  set comboBoxWillDismiss(value: (notification: NSNotification) => void) {
    this.delegate.comboBoxWillDismiss = value;
  }
  set comboBoxSelectionDidChange(value: (notification: NSNotification) => void) {
    this.delegate.comboBoxSelectionDidChange = value;
  }
  set comboBoxSelectionIsChanging(value: (notification: NSNotification) => void) {
    this.delegate.comboBoxSelectionIsChanging = value;
  }
}

export class HTMLNSSliderElement extends HTMLNSControlElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSSlider.new();

  get sliderType(): interop.Enum<typeof NSSliderType> { return this.nativeObject.sliderType; }
  set sliderType(value: interop.Enum<typeof NSSliderType>) { this.nativeObject.sliderType = value; }
  get minValue(): number { return this.nativeObject.minValue; }
  set minValue(value: number) { this.nativeObject.minValue = value; }
  get maxValue(): number { return this.nativeObject.maxValue; }
  set maxValue(value: number) { this.nativeObject.maxValue = value; }
  get altIncrementValue(): number { return this.nativeObject.altIncrementValue; }
  set altIncrementValue(value: number) { this.nativeObject.altIncrementValue = value; }
  get knobThickness(): number { return this.nativeObject.knobThickness; }
  get isVertical(): boolean { return this.nativeObject.isVertical; }
  set isVertical(value: boolean) { this.nativeObject.isVertical = value; }
  get trackFillColor(): NSColor { return this.nativeObject.trackFillColor; }
  set trackFillColor(value: NSColor) { this.nativeObject.trackFillColor = value; }
  get numberOfTickMarks(): number { return this.nativeObject.numberOfTickMarks; }
  set numberOfTickMarks(value: number) { this.nativeObject.numberOfTickMarks = value; }
  get tickMarkPosition(): interop.Enum<typeof NSTickMarkPosition> { return this.nativeObject.tickMarkPosition; }
  set tickMarkPosition(value: interop.Enum<typeof NSTickMarkPosition>) { this.nativeObject.tickMarkPosition = value; }
  get allowsTickMarkValuesOnly(): boolean { return this.nativeObject.allowsTickMarkValuesOnly; }
  set allowsTickMarkValuesOnly(value: boolean) { this.nativeObject.allowsTickMarkValuesOnly = value; }
  get accessibilityLabel(): string { return this.nativeObject.accessibilityLabel; }
  set accessibilityLabel(value: string) { this.nativeObject.accessibilityLabel = value; }
  get accessibilityValue(): interop.Object { return this.nativeObject.accessibilityValue; }
  set accessibilityValue(value: interop.Object) { this.nativeObject.accessibilityValue = value; }
  get accessibilityFrame(): CGRect { return this.nativeObject.accessibilityFrame; }
  set accessibilityFrame(value: CGRect) { this.nativeObject.accessibilityFrame = value; }
  get accessibilityParent(): interop.Object { return this.nativeObject.accessibilityParent; }
  set accessibilityParent(value: interop.Object) { this.nativeObject.accessibilityParent = value; }
  get isAccessibilityFocused(): boolean { return this.nativeObject.isAccessibilityFocused; }
  set isAccessibilityFocused(value: boolean) { this.nativeObject.isAccessibilityFocused = value; }
  get accessibilityIdentifier(): string { return this.nativeObject.accessibilityIdentifier; }
  set accessibilityIdentifier(value: string) { this.nativeObject.accessibilityIdentifier = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLNSSearchFieldElement extends HTMLNSTextFieldElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSSearchField.new();
  get delegate(): NSSearchFieldDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSSearchFieldDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSSearchFieldDelegateImpl;
  }

  get searchTextBounds(): CGRect { return this.nativeObject.searchTextBounds; }
  get searchButtonBounds(): CGRect { return this.nativeObject.searchButtonBounds; }
  get cancelButtonBounds(): CGRect { return this.nativeObject.cancelButtonBounds; }
  get recentSearches(): NSArray { return this.nativeObject.recentSearches; }
  set recentSearches(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.recentSearches = value; }
  get recentsAutosaveName(): string { return this.nativeObject.recentsAutosaveName; }
  set recentsAutosaveName(value: string) { this.nativeObject.recentsAutosaveName = value; }
  get searchMenuTemplate(): NSMenu { return this.nativeObject.searchMenuTemplate; }
  set searchMenuTemplate(value: NSMenu) { this.nativeObject.searchMenuTemplate = value; }
  get sendsWholeSearchString(): boolean { return this.nativeObject.sendsWholeSearchString; }
  set sendsWholeSearchString(value: boolean) { this.nativeObject.sendsWholeSearchString = value; }
  get maximumRecents(): number { return this.nativeObject.maximumRecents; }
  set maximumRecents(value: number) { this.nativeObject.maximumRecents = value; }
  get sendsSearchStringImmediately(): boolean { return this.nativeObject.sendsSearchStringImmediately; }
  set sendsSearchStringImmediately(value: boolean) { this.nativeObject.sendsSearchStringImmediately = value; }
  get centersPlaceholder(): boolean { return this.nativeObject.centersPlaceholder; }
  set centersPlaceholder(value: boolean) { this.nativeObject.centersPlaceholder = value; }

  set searchFieldDidStartSearching(value: (sender: NSSearchField) => void) {
    this.delegate.searchFieldDidStartSearching = value;
  }
  set searchFieldDidEndSearching(value: (sender: NSSearchField) => void) {
    this.delegate.searchFieldDidEndSearching = value;
  }
}

export class HTMLNSTokenFieldElement extends HTMLNSTextFieldElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSTokenField.new();
  get delegate(): NSTokenFieldDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSTokenFieldDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSTokenFieldDelegateImpl;
  }

  get tokenStyle(): interop.Enum<typeof NSTokenStyle> { return this.nativeObject.tokenStyle; }
  set tokenStyle(value: interop.Enum<typeof NSTokenStyle>) { this.nativeObject.tokenStyle = value; }
  get completionDelay(): number { return this.nativeObject.completionDelay; }
  set completionDelay(value: number) { this.nativeObject.completionDelay = value; }
  get tokenizingCharacterSet(): NSCharacterSet { return this.nativeObject.tokenizingCharacterSet; }
  set tokenizingCharacterSet(value: NSCharacterSet) { this.nativeObject.tokenizingCharacterSet = value; }

  set tokenFieldCompletionsForSubstringIndexOfTokenIndexOfSelectedItem(value: (tokenField: NSTokenField, substring: string, tokenIndex: number, selectedIndex: interop.PointerConvertible) => NSArray) {
    this.delegate.tokenFieldCompletionsForSubstringIndexOfTokenIndexOfSelectedItem = value;
  }
  set tokenFieldShouldAddObjectsAtIndex(value: (tokenField: NSTokenField, tokens: NSArray<interop.Object> | Array<interop.Object>, index: number) => NSArray) {
    this.delegate.tokenFieldShouldAddObjectsAtIndex = value;
  }
  set tokenFieldDisplayStringForRepresentedObject(value: (tokenField: NSTokenField, representedObject: interop.Object) => string) {
    this.delegate.tokenFieldDisplayStringForRepresentedObject = value;
  }
  set tokenFieldEditingStringForRepresentedObject(value: (tokenField: NSTokenField, representedObject: interop.Object) => string) {
    this.delegate.tokenFieldEditingStringForRepresentedObject = value;
  }
  set tokenFieldRepresentedObjectForEditingString(value: (tokenField: NSTokenField, editingString: string) => interop.Object) {
    this.delegate.tokenFieldRepresentedObjectForEditingString = value;
  }
  set tokenFieldWriteRepresentedObjectsToPasteboard(value: (tokenField: NSTokenField, objects: NSArray<interop.Object> | Array<interop.Object>, pboard: NSPasteboard) => boolean) {
    this.delegate.tokenFieldWriteRepresentedObjectsToPasteboard = value;
  }
  set tokenFieldReadFromPasteboard(value: (tokenField: NSTokenField, pboard: NSPasteboard) => NSArray) {
    this.delegate.tokenFieldReadFromPasteboard = value;
  }
  set tokenFieldMenuForRepresentedObject(value: (tokenField: NSTokenField, representedObject: interop.Object) => NSMenu) {
    this.delegate.tokenFieldMenuForRepresentedObject = value;
  }
  set tokenFieldHasMenuForRepresentedObject(value: (tokenField: NSTokenField, representedObject: interop.Object) => boolean) {
    this.delegate.tokenFieldHasMenuForRepresentedObject = value;
  }
  set tokenFieldStyleForRepresentedObject(value: (tokenField: NSTokenField, representedObject: interop.Object) => interop.Enum<typeof NSTokenStyle>) {
    this.delegate.tokenFieldStyleForRepresentedObject = value;
  }
}

export class HTMLNSTableViewElement extends HTMLNSControlElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSTableView.new();
  get delegate(): NSTableViewDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSTableViewDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSTableViewDelegateImpl;
  }

  get dataSource(): NSTableViewDataSource { return this.nativeObject.dataSource; }
  set dataSource(value: NSTableViewDataSource) { this.nativeObject.dataSource = value; }
  get headerView(): NSTableHeaderView { return this.nativeObject.headerView; }
  set headerView(value: NSTableHeaderView) { this.nativeObject.headerView = value; }
  get cornerView(): NSView { return this.nativeObject.cornerView; }
  set cornerView(value: NSView) { this.nativeObject.cornerView = value; }
  get allowsColumnReordering(): boolean { return this.nativeObject.allowsColumnReordering; }
  set allowsColumnReordering(value: boolean) { this.nativeObject.allowsColumnReordering = value; }
  get allowsColumnResizing(): boolean { return this.nativeObject.allowsColumnResizing; }
  set allowsColumnResizing(value: boolean) { this.nativeObject.allowsColumnResizing = value; }
  get columnAutoresizingStyle(): interop.Enum<typeof NSTableViewColumnAutoresizingStyle> { return this.nativeObject.columnAutoresizingStyle; }
  set columnAutoresizingStyle(value: interop.Enum<typeof NSTableViewColumnAutoresizingStyle>) { this.nativeObject.columnAutoresizingStyle = value; }
  get gridStyleMask(): interop.Enum<typeof NSTableViewGridLineStyle> { return this.nativeObject.gridStyleMask; }
  set gridStyleMask(value: interop.Enum<typeof NSTableViewGridLineStyle>) { this.nativeObject.gridStyleMask = value; }
  get intercellSpacing(): CGSize { return this.nativeObject.intercellSpacing; }
  set intercellSpacing(value: CGSize) { this.nativeObject.intercellSpacing = value; }
  get usesAlternatingRowBackgroundColors(): boolean { return this.nativeObject.usesAlternatingRowBackgroundColors; }
  set usesAlternatingRowBackgroundColors(value: boolean) { this.nativeObject.usesAlternatingRowBackgroundColors = value; }
  get backgroundColor(): NSColor { return this.nativeObject.backgroundColor; }
  set backgroundColor(value: NSColor) { this.nativeObject.backgroundColor = value; }
  get gridColor(): NSColor { return this.nativeObject.gridColor; }
  set gridColor(value: NSColor) { this.nativeObject.gridColor = value; }
  get rowSizeStyle(): interop.Enum<typeof NSTableViewRowSizeStyle> { return this.nativeObject.rowSizeStyle; }
  set rowSizeStyle(value: interop.Enum<typeof NSTableViewRowSizeStyle>) { this.nativeObject.rowSizeStyle = value; }
  get effectiveRowSizeStyle(): interop.Enum<typeof NSTableViewRowSizeStyle> { return this.nativeObject.effectiveRowSizeStyle; }
  get rowHeight(): number { return this.nativeObject.rowHeight; }
  set rowHeight(value: number) { this.nativeObject.rowHeight = value; }
  get tableColumns(): NSArray { return this.nativeObject.tableColumns; }
  get numberOfColumns(): number { return this.nativeObject.numberOfColumns; }
  get numberOfRows(): number { return this.nativeObject.numberOfRows; }
  get editedColumn(): number { return this.nativeObject.editedColumn; }
  get editedRow(): number { return this.nativeObject.editedRow; }
  get clickedColumn(): number { return this.nativeObject.clickedColumn; }
  get clickedRow(): number { return this.nativeObject.clickedRow; }
  get doubleAction(): string { return this.nativeObject.doubleAction; }
  set doubleAction(value: string) { this.nativeObject.doubleAction = value; }
  get sortDescriptors(): NSArray { return this.nativeObject.sortDescriptors; }
  set sortDescriptors(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.sortDescriptors = value; }
  get highlightedTableColumn(): NSTableColumn { return this.nativeObject.highlightedTableColumn; }
  set highlightedTableColumn(value: NSTableColumn) { this.nativeObject.highlightedTableColumn = value; }
  get verticalMotionCanBeginDrag(): boolean { return this.nativeObject.verticalMotionCanBeginDrag; }
  set verticalMotionCanBeginDrag(value: boolean) { this.nativeObject.verticalMotionCanBeginDrag = value; }
  get allowsMultipleSelection(): boolean { return this.nativeObject.allowsMultipleSelection; }
  set allowsMultipleSelection(value: boolean) { this.nativeObject.allowsMultipleSelection = value; }
  get allowsEmptySelection(): boolean { return this.nativeObject.allowsEmptySelection; }
  set allowsEmptySelection(value: boolean) { this.nativeObject.allowsEmptySelection = value; }
  get allowsColumnSelection(): boolean { return this.nativeObject.allowsColumnSelection; }
  set allowsColumnSelection(value: boolean) { this.nativeObject.allowsColumnSelection = value; }
  get selectedColumnIndexes(): NSIndexSet { return this.nativeObject.selectedColumnIndexes; }
  get selectedRowIndexes(): NSIndexSet { return this.nativeObject.selectedRowIndexes; }
  get selectedColumn(): number { return this.nativeObject.selectedColumn; }
  get selectedRow(): number { return this.nativeObject.selectedRow; }
  get numberOfSelectedColumns(): number { return this.nativeObject.numberOfSelectedColumns; }
  get numberOfSelectedRows(): number { return this.nativeObject.numberOfSelectedRows; }
  get allowsTypeSelect(): boolean { return this.nativeObject.allowsTypeSelect; }
  set allowsTypeSelect(value: boolean) { this.nativeObject.allowsTypeSelect = value; }
  get effectiveStyle(): interop.Enum<typeof NSTableViewStyle> { return this.nativeObject.effectiveStyle; }
  get selectionHighlightStyle(): interop.Enum<typeof NSTableViewSelectionHighlightStyle> { return this.nativeObject.selectionHighlightStyle; }
  set selectionHighlightStyle(value: interop.Enum<typeof NSTableViewSelectionHighlightStyle>) { this.nativeObject.selectionHighlightStyle = value; }
  get draggingDestinationFeedbackStyle(): interop.Enum<typeof NSTableViewDraggingDestinationFeedbackStyle> { return this.nativeObject.draggingDestinationFeedbackStyle; }
  set draggingDestinationFeedbackStyle(value: interop.Enum<typeof NSTableViewDraggingDestinationFeedbackStyle>) { this.nativeObject.draggingDestinationFeedbackStyle = value; }
  get autosaveName(): string { return this.nativeObject.autosaveName; }
  set autosaveName(value: string) { this.nativeObject.autosaveName = value; }
  get autosaveTableColumns(): boolean { return this.nativeObject.autosaveTableColumns; }
  set autosaveTableColumns(value: boolean) { this.nativeObject.autosaveTableColumns = value; }
  get floatsGroupRows(): boolean { return this.nativeObject.floatsGroupRows; }
  set floatsGroupRows(value: boolean) { this.nativeObject.floatsGroupRows = value; }
  get rowActionsVisible(): boolean { return this.nativeObject.rowActionsVisible; }
  set rowActionsVisible(value: boolean) { this.nativeObject.rowActionsVisible = value; }
  get hiddenRowIndexes(): NSIndexSet { return this.nativeObject.hiddenRowIndexes; }
  get registeredNibsByIdentifier(): NSDictionary { return this.nativeObject.registeredNibsByIdentifier; }
  get usesStaticContents(): boolean { return this.nativeObject.usesStaticContents; }
  set usesStaticContents(value: boolean) { this.nativeObject.usesStaticContents = value; }
  get userInterfaceLayoutDirection(): interop.Enum<typeof NSUserInterfaceLayoutDirection> { return this.nativeObject.userInterfaceLayoutDirection; }
  set userInterfaceLayoutDirection(value: interop.Enum<typeof NSUserInterfaceLayoutDirection>) { this.nativeObject.userInterfaceLayoutDirection = value; }
  get usesAutomaticRowHeights(): boolean { return this.nativeObject.usesAutomaticRowHeights; }
  set usesAutomaticRowHeights(value: boolean) { this.nativeObject.usesAutomaticRowHeights = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
  get accessibilityLabel(): string { return this.nativeObject.accessibilityLabel; }
  set accessibilityLabel(value: string) { this.nativeObject.accessibilityLabel = value; }
  get accessibilityRows(): NSArray { return this.nativeObject.accessibilityRows; }
  set accessibilityRows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityRows = value; }
  get accessibilitySelectedRows(): NSArray { return this.nativeObject.accessibilitySelectedRows; }
  set accessibilitySelectedRows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedRows = value; }
  get accessibilityVisibleRows(): NSArray { return this.nativeObject.accessibilityVisibleRows; }
  set accessibilityVisibleRows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleRows = value; }
  get accessibilityColumns(): NSArray { return this.nativeObject.accessibilityColumns; }
  set accessibilityColumns(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityColumns = value; }
  get accessibilityVisibleColumns(): NSArray { return this.nativeObject.accessibilityVisibleColumns; }
  set accessibilityVisibleColumns(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleColumns = value; }
  get accessibilitySelectedColumns(): NSArray { return this.nativeObject.accessibilitySelectedColumns; }
  set accessibilitySelectedColumns(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedColumns = value; }
  get accessibilitySelectedCells(): NSArray { return this.nativeObject.accessibilitySelectedCells; }
  set accessibilitySelectedCells(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedCells = value; }
  get accessibilityVisibleCells(): NSArray { return this.nativeObject.accessibilityVisibleCells; }
  set accessibilityVisibleCells(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleCells = value; }
  get accessibilityRowHeaderUIElements(): NSArray { return this.nativeObject.accessibilityRowHeaderUIElements; }
  set accessibilityRowHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityRowHeaderUIElements = value; }
  get accessibilityColumnHeaderUIElements(): NSArray { return this.nativeObject.accessibilityColumnHeaderUIElements; }
  set accessibilityColumnHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityColumnHeaderUIElements = value; }
  get accessibilityFrame(): CGRect { return this.nativeObject.accessibilityFrame; }
  set accessibilityFrame(value: CGRect) { this.nativeObject.accessibilityFrame = value; }
  get accessibilityParent(): interop.Object { return this.nativeObject.accessibilityParent; }
  set accessibilityParent(value: interop.Object) { this.nativeObject.accessibilityParent = value; }
  get isAccessibilityFocused(): boolean { return this.nativeObject.isAccessibilityFocused; }
  set isAccessibilityFocused(value: boolean) { this.nativeObject.isAccessibilityFocused = value; }
  get accessibilityIdentifier(): string { return this.nativeObject.accessibilityIdentifier; }
  set accessibilityIdentifier(value: string) { this.nativeObject.accessibilityIdentifier = value; }

  set tableViewViewForTableColumnRow(value: (tableView: NSTableView, tableColumn: NSTableColumn | null, row: number) => NSView) {
    this.delegate.tableViewViewForTableColumnRow = value;
  }
  set tableViewRowViewForRow(value: (tableView: NSTableView, row: number) => NSTableRowView) {
    this.delegate.tableViewRowViewForRow = value;
  }
  set tableViewDidAddRowViewForRow(value: (tableView: NSTableView, rowView: NSTableRowView, row: number) => void) {
    this.delegate.tableViewDidAddRowViewForRow = value;
  }
  set tableViewDidRemoveRowViewForRow(value: (tableView: NSTableView, rowView: NSTableRowView, row: number) => void) {
    this.delegate.tableViewDidRemoveRowViewForRow = value;
  }
  set tableViewWillDisplayCellForTableColumnRow(value: (tableView: NSTableView, cell: interop.Object, tableColumn: NSTableColumn | null, row: number) => void) {
    this.delegate.tableViewWillDisplayCellForTableColumnRow = value;
  }
  set tableViewShouldEditTableColumnRow(value: (tableView: NSTableView, tableColumn: NSTableColumn | null, row: number) => boolean) {
    this.delegate.tableViewShouldEditTableColumnRow = value;
  }
  set tableViewToolTipForCellRectTableColumnRowMouseLocation(value: (tableView: NSTableView, cell: NSCell, rect: interop.PointerConvertible, tableColumn: NSTableColumn | null, row: number, mouseLocation: CGPoint) => string) {
    this.delegate.tableViewToolTipForCellRectTableColumnRowMouseLocation = value;
  }
  set tableViewShouldShowCellExpansionForTableColumnRow(value: (tableView: NSTableView, tableColumn: NSTableColumn | null, row: number) => boolean) {
    this.delegate.tableViewShouldShowCellExpansionForTableColumnRow = value;
  }
  set tableViewShouldTrackCellForTableColumnRow(value: (tableView: NSTableView, cell: NSCell, tableColumn: NSTableColumn | null, row: number) => boolean) {
    this.delegate.tableViewShouldTrackCellForTableColumnRow = value;
  }
  set tableViewDataCellForTableColumnRow(value: (tableView: NSTableView, tableColumn: NSTableColumn | null, row: number) => NSCell) {
    this.delegate.tableViewDataCellForTableColumnRow = value;
  }
  set selectionShouldChangeInTableView(value: (tableView: NSTableView) => boolean) {
    this.delegate.selectionShouldChangeInTableView = value;
  }
  set tableViewShouldSelectRow(value: (tableView: NSTableView, row: number) => boolean) {
    this.delegate.tableViewShouldSelectRow = value;
  }
  set tableViewSelectionIndexesForProposedSelection(value: (tableView: NSTableView, proposedSelectionIndexes: NSIndexSet) => NSIndexSet) {
    this.delegate.tableViewSelectionIndexesForProposedSelection = value;
  }
  set tableViewShouldSelectTableColumn(value: (tableView: NSTableView, tableColumn: NSTableColumn | null) => boolean) {
    this.delegate.tableViewShouldSelectTableColumn = value;
  }
  set tableViewMouseDownInHeaderOfTableColumn(value: (tableView: NSTableView, tableColumn: NSTableColumn) => void) {
    this.delegate.tableViewMouseDownInHeaderOfTableColumn = value;
  }
  set tableViewDidClickTableColumn(value: (tableView: NSTableView, tableColumn: NSTableColumn) => void) {
    this.delegate.tableViewDidClickTableColumn = value;
  }
  set tableViewDidDragTableColumn(value: (tableView: NSTableView, tableColumn: NSTableColumn) => void) {
    this.delegate.tableViewDidDragTableColumn = value;
  }
  set tableViewHeightOfRow(value: (tableView: NSTableView, row: number) => number) {
    this.delegate.tableViewHeightOfRow = value;
  }
  set tableViewTypeSelectStringForTableColumnRow(value: (tableView: NSTableView, tableColumn: NSTableColumn | null, row: number) => string) {
    this.delegate.tableViewTypeSelectStringForTableColumnRow = value;
  }
  set tableViewNextTypeSelectMatchFromRowToRowForString(value: (tableView: NSTableView, startRow: number, endRow: number, searchString: string) => number) {
    this.delegate.tableViewNextTypeSelectMatchFromRowToRowForString = value;
  }
  set tableViewShouldTypeSelectForEventWithCurrentSearchString(value: (tableView: NSTableView, event: NSEvent, searchString: string | null) => boolean) {
    this.delegate.tableViewShouldTypeSelectForEventWithCurrentSearchString = value;
  }
  set tableViewIsGroupRow(value: (tableView: NSTableView, row: number) => boolean) {
    this.delegate.tableViewIsGroupRow = value;
  }
  set tableViewSizeToFitWidthOfColumn(value: (tableView: NSTableView, column: number) => number) {
    this.delegate.tableViewSizeToFitWidthOfColumn = value;
  }
  set tableViewShouldReorderColumnToColumn(value: (tableView: NSTableView, columnIndex: number, newColumnIndex: number) => boolean) {
    this.delegate.tableViewShouldReorderColumnToColumn = value;
  }
  set tableViewRowActionsForRowEdge(value: (tableView: NSTableView, row: number, edge: interop.Enum<typeof NSTableRowActionEdge>) => NSArray) {
    this.delegate.tableViewRowActionsForRowEdge = value;
  }
  set tableViewUserCanChangeVisibilityOfTableColumn(value: (tableView: NSTableView, column: NSTableColumn) => boolean) {
    this.delegate.tableViewUserCanChangeVisibilityOfTableColumn = value;
  }
  set tableViewUserDidChangeVisibilityOfTableColumns(value: (tableView: NSTableView, columns: NSArray<interop.Object> | Array<interop.Object>) => void) {
    this.delegate.tableViewUserDidChangeVisibilityOfTableColumns = value;
  }
  set tableViewSelectionDidChange(value: (notification: NSNotification) => void) {
    this.delegate.tableViewSelectionDidChange = value;
  }
  set tableViewColumnDidMove(value: (notification: NSNotification) => void) {
    this.delegate.tableViewColumnDidMove = value;
  }
  set tableViewColumnDidResize(value: (notification: NSNotification) => void) {
    this.delegate.tableViewColumnDidResize = value;
  }
  set tableViewSelectionIsChanging(value: (notification: NSNotification) => void) {
    this.delegate.tableViewSelectionIsChanging = value;
  }
}

export class HTMLNSScrubberTextItemViewElement extends HTMLNSScrubberItemViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSScrubberTextItemView.new();

  get textField(): NSTextField { return this.nativeObject.textField; }
  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
}

export class HTMLNSButtonElement extends HTMLNSControlElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSButton.new();

  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get attributedTitle(): NSAttributedString { return this.nativeObject.attributedTitle; }
  set attributedTitle(value: NSAttributedString) { this.nativeObject.attributedTitle = value; }
  get alternateTitle(): string { return this.nativeObject.alternateTitle; }
  set alternateTitle(value: string) { this.nativeObject.alternateTitle = value; }
  get attributedAlternateTitle(): NSAttributedString { return this.nativeObject.attributedAlternateTitle; }
  set attributedAlternateTitle(value: NSAttributedString) { this.nativeObject.attributedAlternateTitle = value; }
  get hasDestructiveAction(): boolean { return this.nativeObject.hasDestructiveAction; }
  set hasDestructiveAction(value: boolean) { this.nativeObject.hasDestructiveAction = value; }
  get sound(): NSSound { return this.nativeObject.sound; }
  set sound(value: NSSound) { this.nativeObject.sound = value; }
  get isSpringLoaded(): boolean { return this.nativeObject.isSpringLoaded; }
  set isSpringLoaded(value: boolean) { this.nativeObject.isSpringLoaded = value; }
  get maxAcceleratorLevel(): number { return this.nativeObject.maxAcceleratorLevel; }
  set maxAcceleratorLevel(value: number) { this.nativeObject.maxAcceleratorLevel = value; }
  get bezelStyle(): interop.Enum<typeof NSBezelStyle> { return this.nativeObject.bezelStyle; }
  set bezelStyle(value: interop.Enum<typeof NSBezelStyle>) { this.nativeObject.bezelStyle = value; }
  get isBordered(): boolean { return this.nativeObject.isBordered; }
  set isBordered(value: boolean) { this.nativeObject.isBordered = value; }
  get isTransparent(): boolean { return this.nativeObject.isTransparent; }
  set isTransparent(value: boolean) { this.nativeObject.isTransparent = value; }
  get showsBorderOnlyWhileMouseInside(): boolean { return this.nativeObject.showsBorderOnlyWhileMouseInside; }
  set showsBorderOnlyWhileMouseInside(value: boolean) { this.nativeObject.showsBorderOnlyWhileMouseInside = value; }
  get bezelColor(): NSColor { return this.nativeObject.bezelColor; }
  set bezelColor(value: NSColor) { this.nativeObject.bezelColor = value; }
  get contentTintColor(): NSColor { return this.nativeObject.contentTintColor; }
  set contentTintColor(value: NSColor) { this.nativeObject.contentTintColor = value; }
  get image(): NSImage { return this.nativeObject.image; }
  set image(value: NSImage) { this.nativeObject.image = value; }
  get alternateImage(): NSImage { return this.nativeObject.alternateImage; }
  set alternateImage(value: NSImage) { this.nativeObject.alternateImage = value; }
  get imagePosition(): interop.Enum<typeof NSCellImagePosition> { return this.nativeObject.imagePosition; }
  set imagePosition(value: interop.Enum<typeof NSCellImagePosition>) { this.nativeObject.imagePosition = value; }
  get imageScaling(): interop.Enum<typeof NSImageScaling> { return this.nativeObject.imageScaling; }
  set imageScaling(value: interop.Enum<typeof NSImageScaling>) { this.nativeObject.imageScaling = value; }
  get imageHugsTitle(): boolean { return this.nativeObject.imageHugsTitle; }
  set imageHugsTitle(value: boolean) { this.nativeObject.imageHugsTitle = value; }
  get symbolConfiguration(): NSImageSymbolConfiguration { return this.nativeObject.symbolConfiguration; }
  set symbolConfiguration(value: NSImageSymbolConfiguration) { this.nativeObject.symbolConfiguration = value; }
  get state(): number { return this.nativeObject.state; }
  set state(value: number) { this.nativeObject.state = value; }
  get allowsMixedState(): boolean { return this.nativeObject.allowsMixedState; }
  set allowsMixedState(value: boolean) { this.nativeObject.allowsMixedState = value; }
  get keyEquivalent(): string { return this.nativeObject.keyEquivalent; }
  set keyEquivalent(value: string) { this.nativeObject.keyEquivalent = value; }
  get keyEquivalentModifierMask(): interop.Enum<typeof NSEventModifierFlags> { return this.nativeObject.keyEquivalentModifierMask; }
  set keyEquivalentModifierMask(value: interop.Enum<typeof NSEventModifierFlags>) { this.nativeObject.keyEquivalentModifierMask = value; }
  get activeCompressionOptions(): NSUserInterfaceCompressionOptions { return this.nativeObject.activeCompressionOptions; }
  get accessibilityLabel(): string { return this.nativeObject.accessibilityLabel; }
  set accessibilityLabel(value: string) { this.nativeObject.accessibilityLabel = value; }
  get accessibilityFrame(): CGRect { return this.nativeObject.accessibilityFrame; }
  set accessibilityFrame(value: CGRect) { this.nativeObject.accessibilityFrame = value; }
  get accessibilityParent(): interop.Object { return this.nativeObject.accessibilityParent; }
  set accessibilityParent(value: interop.Object) { this.nativeObject.accessibilityParent = value; }
  get isAccessibilityFocused(): boolean { return this.nativeObject.isAccessibilityFocused; }
  set isAccessibilityFocused(value: boolean) { this.nativeObject.isAccessibilityFocused = value; }
  get accessibilityIdentifier(): string { return this.nativeObject.accessibilityIdentifier; }
  set accessibilityIdentifier(value: string) { this.nativeObject.accessibilityIdentifier = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }
}

export class HTMLNSScrubberSelectionViewElement extends HTMLNSScrubberArrangedViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSScrubberSelectionView.new();

}

export class HTMLNSSearchFieldCellElement extends HTMLNSTextFieldCellElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSSearchFieldCell.new();

  get searchButtonCell(): NSButtonCell { return this.nativeObject.searchButtonCell; }
  set searchButtonCell(value: NSButtonCell) { this.nativeObject.searchButtonCell = value; }
  get cancelButtonCell(): NSButtonCell { return this.nativeObject.cancelButtonCell; }
  set cancelButtonCell(value: NSButtonCell) { this.nativeObject.cancelButtonCell = value; }
  get searchMenuTemplate(): NSMenu { return this.nativeObject.searchMenuTemplate; }
  set searchMenuTemplate(value: NSMenu) { this.nativeObject.searchMenuTemplate = value; }
  get sendsWholeSearchString(): boolean { return this.nativeObject.sendsWholeSearchString; }
  set sendsWholeSearchString(value: boolean) { this.nativeObject.sendsWholeSearchString = value; }
  get maximumRecents(): number { return this.nativeObject.maximumRecents; }
  set maximumRecents(value: number) { this.nativeObject.maximumRecents = value; }
  get recentSearches(): NSArray { return this.nativeObject.recentSearches; }
  set recentSearches(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.recentSearches = value; }
  get recentsAutosaveName(): string { return this.nativeObject.recentsAutosaveName; }
  set recentsAutosaveName(value: string) { this.nativeObject.recentsAutosaveName = value; }
  get sendsSearchStringImmediately(): boolean { return this.nativeObject.sendsSearchStringImmediately; }
  set sendsSearchStringImmediately(value: boolean) { this.nativeObject.sendsSearchStringImmediately = value; }
}

export class HTMLNSRunningApplicationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSRunningApplication.new();

  get isTerminated(): boolean { return this.nativeObject.isTerminated; }
  get isFinishedLaunching(): boolean { return this.nativeObject.isFinishedLaunching; }
  get isHidden(): boolean { return this.nativeObject.isHidden; }
  get isActive(): boolean { return this.nativeObject.isActive; }
  get ownsMenuBar(): boolean { return this.nativeObject.ownsMenuBar; }
  get activationPolicy(): interop.Enum<typeof NSApplicationActivationPolicy> { return this.nativeObject.activationPolicy; }
  get localizedName(): string { return this.nativeObject.localizedName; }
  get bundleIdentifier(): string { return this.nativeObject.bundleIdentifier; }
  get bundleURL(): NSURL { return this.nativeObject.bundleURL; }
  get executableURL(): NSURL { return this.nativeObject.executableURL; }
  get processIdentifier(): number { return this.nativeObject.processIdentifier; }
  get launchDate(): NSDate { return this.nativeObject.launchDate; }
  get icon(): NSImage { return this.nativeObject.icon; }
  get executableArchitecture(): number { return this.nativeObject.executableArchitecture; }
}

export class HTMLNSSpellCheckerElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSSpellChecker.new();

  get userReplacementsDictionary(): NSDictionary { return this.nativeObject.userReplacementsDictionary; }
  get spellingPanel(): NSPanel { return this.nativeObject.spellingPanel; }
  get accessoryView(): NSView { return this.nativeObject.accessoryView; }
  set accessoryView(value: NSView) { this.nativeObject.accessoryView = value; }
  get substitutionsPanel(): NSPanel { return this.nativeObject.substitutionsPanel; }
  get substitutionsPanelAccessoryViewController(): NSViewController { return this.nativeObject.substitutionsPanelAccessoryViewController; }
  set substitutionsPanelAccessoryViewController(value: NSViewController) { this.nativeObject.substitutionsPanelAccessoryViewController = value; }
  get availableLanguages(): NSArray { return this.nativeObject.availableLanguages; }
  get userPreferredLanguages(): NSArray { return this.nativeObject.userPreferredLanguages; }
  get automaticallyIdentifiesLanguages(): boolean { return this.nativeObject.automaticallyIdentifiesLanguages; }
  set automaticallyIdentifiesLanguages(value: boolean) { this.nativeObject.automaticallyIdentifiesLanguages = value; }
}

export class HTMLNSPopUpButtonElement extends HTMLNSButtonElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSPopUpButton.new();

  get menu(): NSMenu { return this.nativeObject.menu; }
  set menu(value: NSMenu) { this.nativeObject.menu = value; }
  get pullsDown(): boolean { return this.nativeObject.pullsDown; }
  set pullsDown(value: boolean) { this.nativeObject.pullsDown = value; }
  get autoenablesItems(): boolean { return this.nativeObject.autoenablesItems; }
  set autoenablesItems(value: boolean) { this.nativeObject.autoenablesItems = value; }
  get preferredEdge(): interop.Enum<typeof NSRectEdge> { return this.nativeObject.preferredEdge; }
  set preferredEdge(value: interop.Enum<typeof NSRectEdge>) { this.nativeObject.preferredEdge = value; }
  get itemArray(): NSArray { return this.nativeObject.itemArray; }
  get numberOfItems(): number { return this.nativeObject.numberOfItems; }
  get lastItem(): NSMenuItem { return this.nativeObject.lastItem; }
  get selectedItem(): NSMenuItem { return this.nativeObject.selectedItem; }
  get indexOfSelectedItem(): number { return this.nativeObject.indexOfSelectedItem; }
  get selectedTag(): number { return this.nativeObject.selectedTag; }
  get itemTitles(): NSArray { return this.nativeObject.itemTitles; }
  get titleOfSelectedItem(): string { return this.nativeObject.titleOfSelectedItem; }
}

export class HTMLNSStatusBarButtonElement extends HTMLNSButtonElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSStatusBarButton.new();

  get appearsDisabled(): boolean { return this.nativeObject.appearsDisabled; }
  set appearsDisabled(value: boolean) { this.nativeObject.appearsDisabled = value; }
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

export class HTMLNSPredicateEditorElement extends HTMLNSRuleEditorElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSPredicateEditor.new();

  get rowTemplates(): NSArray { return this.nativeObject.rowTemplates; }
  set rowTemplates(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.rowTemplates = value; }
}

export class HTMLNSColorPanelElement extends HTMLNSPanelElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSColorPanel.new();

  get accessoryView(): NSView { return this.nativeObject.accessoryView; }
  set accessoryView(value: NSView) { this.nativeObject.accessoryView = value; }
  get isContinuous(): boolean { return this.nativeObject.isContinuous; }
  set isContinuous(value: boolean) { this.nativeObject.isContinuous = value; }
  get showsAlpha(): boolean { return this.nativeObject.showsAlpha; }
  set showsAlpha(value: boolean) { this.nativeObject.showsAlpha = value; }
  get mode(): interop.Enum<typeof NSColorPanelMode> { return this.nativeObject.mode; }
  set mode(value: interop.Enum<typeof NSColorPanelMode>) { this.nativeObject.mode = value; }
  get color(): NSColor { return this.nativeObject.color; }
  set color(value: NSColor) { this.nativeObject.color = value; }
  get alpha(): number { return this.nativeObject.alpha; }
}

export class HTMLNSPathControlElement extends HTMLNSControlElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSPathControl.new();
  get delegate(): NSPathControlDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSPathControlDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSPathControlDelegateImpl;
  }

  get isEditable(): boolean { return this.nativeObject.isEditable; }
  set isEditable(value: boolean) { this.nativeObject.isEditable = value; }
  get allowedTypes(): NSArray { return this.nativeObject.allowedTypes; }
  set allowedTypes(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.allowedTypes = value; }
  get placeholderString(): string { return this.nativeObject.placeholderString; }
  set placeholderString(value: string) { this.nativeObject.placeholderString = value; }
  get placeholderAttributedString(): NSAttributedString { return this.nativeObject.placeholderAttributedString; }
  set placeholderAttributedString(value: NSAttributedString) { this.nativeObject.placeholderAttributedString = value; }
  get URL(): NSURL { return this.nativeObject.URL; }
  set URL(value: NSURL) { this.nativeObject.URL = value; }
  get doubleAction(): string { return this.nativeObject.doubleAction; }
  set doubleAction(value: string) { this.nativeObject.doubleAction = value; }
  get pathStyle(): interop.Enum<typeof NSPathStyle> { return this.nativeObject.pathStyle; }
  set pathStyle(value: interop.Enum<typeof NSPathStyle>) { this.nativeObject.pathStyle = value; }
  get clickedPathItem(): NSPathControlItem { return this.nativeObject.clickedPathItem; }
  get pathItems(): NSArray { return this.nativeObject.pathItems; }
  set pathItems(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.pathItems = value; }
  get backgroundColor(): NSColor { return this.nativeObject.backgroundColor; }
  set backgroundColor(value: NSColor) { this.nativeObject.backgroundColor = value; }
  get menu(): NSMenu { return this.nativeObject.menu; }
  set menu(value: NSMenu) { this.nativeObject.menu = value; }

  set pathControlShouldDragItemWithPasteboard(value: (pathControl: NSPathControl, pathItem: NSPathControlItem, pasteboard: NSPasteboard) => boolean) {
    this.delegate.pathControlShouldDragItemWithPasteboard = value;
  }
  set pathControlShouldDragPathComponentCellWithPasteboard(value: (pathControl: NSPathControl, pathComponentCell: NSPathComponentCell, pasteboard: NSPasteboard) => boolean) {
    this.delegate.pathControlShouldDragPathComponentCellWithPasteboard = value;
  }
  set pathControlValidateDrop(value: (pathControl: NSPathControl, info: NSDraggingInfo) => interop.Enum<typeof NSDragOperation>) {
    this.delegate.pathControlValidateDrop = value;
  }
  set pathControlAcceptDrop(value: (pathControl: NSPathControl, info: NSDraggingInfo) => boolean) {
    this.delegate.pathControlAcceptDrop = value;
  }
  set pathControlWillDisplayOpenPanel(value: (pathControl: NSPathControl, openPanel: NSOpenPanel) => void) {
    this.delegate.pathControlWillDisplayOpenPanel = value;
  }
  set pathControlWillPopUpMenu(value: (pathControl: NSPathControl, menu: NSMenu) => void) {
    this.delegate.pathControlWillPopUpMenu = value;
  }
}

export class HTMLNSAnimationElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSAnimation.new();
  get delegate(): NSAnimationDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSAnimationDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSAnimationDelegateImpl;
  }

  get isAnimating(): boolean { return this.nativeObject.isAnimating; }
  get currentProgress(): number { return this.nativeObject.currentProgress; }
  set currentProgress(value: number) { this.nativeObject.currentProgress = value; }
  get duration(): number { return this.nativeObject.duration; }
  set duration(value: number) { this.nativeObject.duration = value; }
  get animationBlockingMode(): interop.Enum<typeof NSAnimationBlockingMode> { return this.nativeObject.animationBlockingMode; }
  set animationBlockingMode(value: interop.Enum<typeof NSAnimationBlockingMode>) { this.nativeObject.animationBlockingMode = value; }
  get frameRate(): number { return this.nativeObject.frameRate; }
  set frameRate(value: number) { this.nativeObject.frameRate = value; }
  get animationCurve(): interop.Enum<typeof NSAnimationCurve> { return this.nativeObject.animationCurve; }
  set animationCurve(value: interop.Enum<typeof NSAnimationCurve>) { this.nativeObject.animationCurve = value; }
  get currentValue(): number { return this.nativeObject.currentValue; }
  get progressMarks(): NSArray { return this.nativeObject.progressMarks; }
  set progressMarks(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.progressMarks = value; }
  get runLoopModesForAnimating(): NSArray { return this.nativeObject.runLoopModesForAnimating; }

  set animationShouldStart(value: (animation: NSAnimation) => boolean) {
    this.delegate.animationShouldStart = value;
  }
  set animationDidStop(value: (animation: NSAnimation) => void) {
    this.delegate.animationDidStop = value;
  }
  set animationDidEnd(value: (animation: NSAnimation) => void) {
    this.delegate.animationDidEnd = value;
  }
  set animationValueForProgress(value: (animation: NSAnimation, progress: number) => number) {
    this.delegate.animationValueForProgress = value;
  }
  set animationDidReachProgressMark(value: (animation: NSAnimation, progress: number) => void) {
    this.delegate.animationDidReachProgressMark = value;
  }
}

export class HTMLNSViewAnimationElement extends HTMLNSAnimationElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSViewAnimation.new();

  get viewAnimations(): NSArray { return this.nativeObject.viewAnimations; }
  set viewAnimations(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.viewAnimations = value; }
}

export class HTMLNSScrollerElement extends HTMLNSControlElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSScroller.new();

  get scrollerStyle(): interop.Enum<typeof NSScrollerStyle> { return this.nativeObject.scrollerStyle; }
  set scrollerStyle(value: interop.Enum<typeof NSScrollerStyle>) { this.nativeObject.scrollerStyle = value; }
  get knobStyle(): interop.Enum<typeof NSScrollerKnobStyle> { return this.nativeObject.knobStyle; }
  set knobStyle(value: interop.Enum<typeof NSScrollerKnobStyle>) { this.nativeObject.knobStyle = value; }
  get usableParts(): interop.Enum<typeof NSUsableScrollerParts> { return this.nativeObject.usableParts; }
  get controlSize(): interop.Enum<typeof NSControlSize> { return this.nativeObject.controlSize; }
  set controlSize(value: interop.Enum<typeof NSControlSize>) { this.nativeObject.controlSize = value; }
  get hitPart(): interop.Enum<typeof NSScrollerPart> { return this.nativeObject.hitPart; }
  get knobProportion(): number { return this.nativeObject.knobProportion; }
  set knobProportion(value: number) { this.nativeObject.knobProportion = value; }
  get arrowsPosition(): interop.Enum<typeof NSScrollArrowPosition> { return this.nativeObject.arrowsPosition; }
  set arrowsPosition(value: interop.Enum<typeof NSScrollArrowPosition>) { this.nativeObject.arrowsPosition = value; }
  get controlTint(): interop.Enum<typeof NSControlTint> { return this.nativeObject.controlTint; }
  set controlTint(value: interop.Enum<typeof NSControlTint>) { this.nativeObject.controlTint = value; }
}

export class HTMLNSComboButtonElement extends HTMLNSControlElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSComboButton.new();

  get title(): string { return this.nativeObject.title; }
  set title(value: string) { this.nativeObject.title = value; }
  get image(): NSImage { return this.nativeObject.image; }
  set image(value: NSImage) { this.nativeObject.image = value; }
  get imageScaling(): interop.Enum<typeof NSImageScaling> { return this.nativeObject.imageScaling; }
  set imageScaling(value: interop.Enum<typeof NSImageScaling>) { this.nativeObject.imageScaling = value; }
  get menu(): NSMenu { return this.nativeObject.menu; }
  set menu(value: NSMenu) { this.nativeObject.menu = value; }
}

export class HTMLNSOutlineViewElement extends HTMLNSTableViewElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  // @ts-ignore
  readonly nativeObject = NSOutlineView.new();
  get delegate(): NSOutlineViewDelegateImpl {
    if(!this.nativeObject.delegate){
      this.nativeObject.delegate = NSOutlineViewDelegateImpl.new();
    }
    return this.nativeObject.delegate as NSOutlineViewDelegateImpl;
  }

  get dataSource(): NSOutlineViewDataSource { return this.nativeObject.dataSource; }
  set dataSource(value: NSOutlineViewDataSource) { this.nativeObject.dataSource = value; }
  get outlineTableColumn(): NSTableColumn { return this.nativeObject.outlineTableColumn; }
  set outlineTableColumn(value: NSTableColumn) { this.nativeObject.outlineTableColumn = value; }
  get indentationPerLevel(): number { return this.nativeObject.indentationPerLevel; }
  set indentationPerLevel(value: number) { this.nativeObject.indentationPerLevel = value; }
  get indentationMarkerFollowsCell(): boolean { return this.nativeObject.indentationMarkerFollowsCell; }
  set indentationMarkerFollowsCell(value: boolean) { this.nativeObject.indentationMarkerFollowsCell = value; }
  get autoresizesOutlineColumn(): boolean { return this.nativeObject.autoresizesOutlineColumn; }
  set autoresizesOutlineColumn(value: boolean) { this.nativeObject.autoresizesOutlineColumn = value; }
  get autosaveExpandedItems(): boolean { return this.nativeObject.autosaveExpandedItems; }
  set autosaveExpandedItems(value: boolean) { this.nativeObject.autosaveExpandedItems = value; }
  get userInterfaceLayoutDirection(): interop.Enum<typeof NSUserInterfaceLayoutDirection> { return this.nativeObject.userInterfaceLayoutDirection; }
  set userInterfaceLayoutDirection(value: interop.Enum<typeof NSUserInterfaceLayoutDirection>) { this.nativeObject.userInterfaceLayoutDirection = value; }
  get stronglyReferencesItems(): boolean { return this.nativeObject.stronglyReferencesItems; }
  set stronglyReferencesItems(value: boolean) { this.nativeObject.stronglyReferencesItems = value; }
  get accessibilityLabel(): string { return this.nativeObject.accessibilityLabel; }
  set accessibilityLabel(value: string) { this.nativeObject.accessibilityLabel = value; }
  get accessibilityRows(): NSArray { return this.nativeObject.accessibilityRows; }
  set accessibilityRows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityRows = value; }
  get accessibilitySelectedRows(): NSArray { return this.nativeObject.accessibilitySelectedRows; }
  set accessibilitySelectedRows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedRows = value; }
  get accessibilityVisibleRows(): NSArray { return this.nativeObject.accessibilityVisibleRows; }
  set accessibilityVisibleRows(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleRows = value; }
  get accessibilityColumns(): NSArray { return this.nativeObject.accessibilityColumns; }
  set accessibilityColumns(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityColumns = value; }
  get accessibilityVisibleColumns(): NSArray { return this.nativeObject.accessibilityVisibleColumns; }
  set accessibilityVisibleColumns(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleColumns = value; }
  get accessibilitySelectedColumns(): NSArray { return this.nativeObject.accessibilitySelectedColumns; }
  set accessibilitySelectedColumns(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedColumns = value; }
  get accessibilitySelectedCells(): NSArray { return this.nativeObject.accessibilitySelectedCells; }
  set accessibilitySelectedCells(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilitySelectedCells = value; }
  get accessibilityVisibleCells(): NSArray { return this.nativeObject.accessibilityVisibleCells; }
  set accessibilityVisibleCells(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityVisibleCells = value; }
  get accessibilityRowHeaderUIElements(): NSArray { return this.nativeObject.accessibilityRowHeaderUIElements; }
  set accessibilityRowHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityRowHeaderUIElements = value; }
  get accessibilityColumnHeaderUIElements(): NSArray { return this.nativeObject.accessibilityColumnHeaderUIElements; }
  set accessibilityColumnHeaderUIElements(value: NSArray<interop.Object> | Array<interop.Object>) { this.nativeObject.accessibilityColumnHeaderUIElements = value; }
  get accessibilityFrame(): CGRect { return this.nativeObject.accessibilityFrame; }
  set accessibilityFrame(value: CGRect) { this.nativeObject.accessibilityFrame = value; }
  get accessibilityParent(): interop.Object { return this.nativeObject.accessibilityParent; }
  set accessibilityParent(value: interop.Object) { this.nativeObject.accessibilityParent = value; }
  get isAccessibilityFocused(): boolean { return this.nativeObject.isAccessibilityFocused; }
  set isAccessibilityFocused(value: boolean) { this.nativeObject.isAccessibilityFocused = value; }
  get accessibilityIdentifier(): string { return this.nativeObject.accessibilityIdentifier; }
  set accessibilityIdentifier(value: string) { this.nativeObject.accessibilityIdentifier = value; }
  get hash(): number { return this.nativeObject.hash; }
  get superclass(): interop.Object { return this.nativeObject.superclass; }
  get isProxy(): boolean { return this.nativeObject.isProxy; }
  get zone(): interop.Pointer { return this.nativeObject.zone; }
  get description(): string { return this.nativeObject.description; }
  get debugDescription(): string { return this.nativeObject.debugDescription; }

  set outlineViewViewForTableColumnItem(value: (outlineView: NSOutlineView, tableColumn: NSTableColumn | null, item: interop.Object) => NSView) {
    this.delegate.outlineViewViewForTableColumnItem = value;
  }
  set outlineViewRowViewForItem(value: (outlineView: NSOutlineView, item: interop.Object) => NSTableRowView) {
    this.delegate.outlineViewRowViewForItem = value;
  }
  set outlineViewDidAddRowViewForRow(value: (outlineView: NSOutlineView, rowView: NSTableRowView, row: number) => void) {
    this.delegate.outlineViewDidAddRowViewForRow = value;
  }
  set outlineViewDidRemoveRowViewForRow(value: (outlineView: NSOutlineView, rowView: NSTableRowView, row: number) => void) {
    this.delegate.outlineViewDidRemoveRowViewForRow = value;
  }
  set outlineViewWillDisplayCellForTableColumnItem(value: (outlineView: NSOutlineView, cell: interop.Object, tableColumn: NSTableColumn | null, item: interop.Object) => void) {
    this.delegate.outlineViewWillDisplayCellForTableColumnItem = value;
  }
  set outlineViewShouldEditTableColumnItem(value: (outlineView: NSOutlineView, tableColumn: NSTableColumn | null, item: interop.Object) => boolean) {
    this.delegate.outlineViewShouldEditTableColumnItem = value;
  }
  set selectionShouldChangeInOutlineView(value: (outlineView: NSOutlineView) => boolean) {
    this.delegate.selectionShouldChangeInOutlineView = value;
  }
  set outlineViewShouldSelectItem(value: (outlineView: NSOutlineView, item: interop.Object) => boolean) {
    this.delegate.outlineViewShouldSelectItem = value;
  }
  set outlineViewSelectionIndexesForProposedSelection(value: (outlineView: NSOutlineView, proposedSelectionIndexes: NSIndexSet) => NSIndexSet) {
    this.delegate.outlineViewSelectionIndexesForProposedSelection = value;
  }
  set outlineViewShouldSelectTableColumn(value: (outlineView: NSOutlineView, tableColumn: NSTableColumn | null) => boolean) {
    this.delegate.outlineViewShouldSelectTableColumn = value;
  }
  set outlineViewMouseDownInHeaderOfTableColumn(value: (outlineView: NSOutlineView, tableColumn: NSTableColumn) => void) {
    this.delegate.outlineViewMouseDownInHeaderOfTableColumn = value;
  }
  set outlineViewDidClickTableColumn(value: (outlineView: NSOutlineView, tableColumn: NSTableColumn) => void) {
    this.delegate.outlineViewDidClickTableColumn = value;
  }
  set outlineViewDidDragTableColumn(value: (outlineView: NSOutlineView, tableColumn: NSTableColumn) => void) {
    this.delegate.outlineViewDidDragTableColumn = value;
  }
  set outlineViewToolTipForCellRectTableColumnItemMouseLocation(value: (outlineView: NSOutlineView, cell: NSCell, rect: interop.PointerConvertible, tableColumn: NSTableColumn | null, item: interop.Object, mouseLocation: CGPoint) => string) {
    this.delegate.outlineViewToolTipForCellRectTableColumnItemMouseLocation = value;
  }
  set outlineViewHeightOfRowByItem(value: (outlineView: NSOutlineView, item: interop.Object) => number) {
    this.delegate.outlineViewHeightOfRowByItem = value;
  }
  set outlineViewTintConfigurationForItem(value: (outlineView: NSOutlineView, item: interop.Object) => NSTintConfiguration) {
    this.delegate.outlineViewTintConfigurationForItem = value;
  }
  set outlineViewTypeSelectStringForTableColumnItem(value: (outlineView: NSOutlineView, tableColumn: NSTableColumn | null, item: interop.Object) => string) {
    this.delegate.outlineViewTypeSelectStringForTableColumnItem = value;
  }
  set outlineViewNextTypeSelectMatchFromItemToItemForString(value: (outlineView: NSOutlineView, startItem: interop.Object, endItem: interop.Object, searchString: string) => interop.Object) {
    this.delegate.outlineViewNextTypeSelectMatchFromItemToItemForString = value;
  }
  set outlineViewShouldTypeSelectForEventWithCurrentSearchString(value: (outlineView: NSOutlineView, event: NSEvent, searchString: string | null) => boolean) {
    this.delegate.outlineViewShouldTypeSelectForEventWithCurrentSearchString = value;
  }
  set outlineViewShouldShowCellExpansionForTableColumnItem(value: (outlineView: NSOutlineView, tableColumn: NSTableColumn | null, item: interop.Object) => boolean) {
    this.delegate.outlineViewShouldShowCellExpansionForTableColumnItem = value;
  }
  set outlineViewShouldTrackCellForTableColumnItem(value: (outlineView: NSOutlineView, cell: NSCell, tableColumn: NSTableColumn | null, item: interop.Object) => boolean) {
    this.delegate.outlineViewShouldTrackCellForTableColumnItem = value;
  }
  set outlineViewDataCellForTableColumnItem(value: (outlineView: NSOutlineView, tableColumn: NSTableColumn | null, item: interop.Object) => NSCell) {
    this.delegate.outlineViewDataCellForTableColumnItem = value;
  }
  set outlineViewIsGroupItem(value: (outlineView: NSOutlineView, item: interop.Object) => boolean) {
    this.delegate.outlineViewIsGroupItem = value;
  }
  set outlineViewShouldExpandItem(value: (outlineView: NSOutlineView, item: interop.Object) => boolean) {
    this.delegate.outlineViewShouldExpandItem = value;
  }
  set outlineViewShouldCollapseItem(value: (outlineView: NSOutlineView, item: interop.Object) => boolean) {
    this.delegate.outlineViewShouldCollapseItem = value;
  }
  set outlineViewWillDisplayOutlineCellForTableColumnItem(value: (outlineView: NSOutlineView, cell: interop.Object, tableColumn: NSTableColumn | null, item: interop.Object) => void) {
    this.delegate.outlineViewWillDisplayOutlineCellForTableColumnItem = value;
  }
  set outlineViewSizeToFitWidthOfColumn(value: (outlineView: NSOutlineView, column: number) => number) {
    this.delegate.outlineViewSizeToFitWidthOfColumn = value;
  }
  set outlineViewShouldReorderColumnToColumn(value: (outlineView: NSOutlineView, columnIndex: number, newColumnIndex: number) => boolean) {
    this.delegate.outlineViewShouldReorderColumnToColumn = value;
  }
  set outlineViewShouldShowOutlineCellForItem(value: (outlineView: NSOutlineView, item: interop.Object) => boolean) {
    this.delegate.outlineViewShouldShowOutlineCellForItem = value;
  }
  set outlineViewUserCanChangeVisibilityOfTableColumn(value: (outlineView: NSOutlineView, column: NSTableColumn) => boolean) {
    this.delegate.outlineViewUserCanChangeVisibilityOfTableColumn = value;
  }
  set outlineViewUserDidChangeVisibilityOfTableColumns(value: (outlineView: NSOutlineView, columns: NSArray<interop.Object> | Array<interop.Object>) => void) {
    this.delegate.outlineViewUserDidChangeVisibilityOfTableColumns = value;
  }
  set outlineViewSelectionDidChange(value: (notification: NSNotification) => void) {
    this.delegate.outlineViewSelectionDidChange = value;
  }
  set outlineViewColumnDidMove(value: (notification: NSNotification) => void) {
    this.delegate.outlineViewColumnDidMove = value;
  }
  set outlineViewColumnDidResize(value: (notification: NSNotification) => void) {
    this.delegate.outlineViewColumnDidResize = value;
  }
  set outlineViewSelectionIsChanging(value: (notification: NSNotification) => void) {
    this.delegate.outlineViewSelectionIsChanging = value;
  }
  set outlineViewItemWillExpand(value: (notification: NSNotification) => void) {
    this.delegate.outlineViewItemWillExpand = value;
  }
  set outlineViewItemDidExpand(value: (notification: NSNotification) => void) {
    this.delegate.outlineViewItemDidExpand = value;
  }
  set outlineViewItemWillCollapse(value: (notification: NSNotification) => void) {
    this.delegate.outlineViewItemWillCollapse = value;
  }
  set outlineViewItemDidCollapse(value: (notification: NSNotification) => void) {
    this.delegate.outlineViewItemDidCollapse = value;
  }
}

export class HTMLNSDraggingImageComponentElement extends HTMLNSObjectElement {
  protected static readonly nativeAttributes = { ...super.nativeAttributes, ...this.getOwnNativeAttributes() };
  protected static readonly observedAttributes = Object.keys(this.nativeAttributes);
  readonly nativeObject = NSDraggingImageComponent.new();

  get key(): string { return this.nativeObject.key; }
  set key(value: string) { this.nativeObject.key = value; }
  get contents(): interop.Object { return this.nativeObject.contents; }
  set contents(value: interop.Object) { this.nativeObject.contents = value; }
  get frame(): CGRect { return this.nativeObject.frame; }
  set frame(value: CGRect) { this.nativeObject.frame = value; }
}

// Delegates

export class NSScrubberDelegateImpl extends NSObject implements NSScrubberDelegate {
  static ObjCProtocols = [NSScrubberDelegate];
  static {
    NativeClass(this);
  }

  scrubberDidSelectItemAtIndex?(scrubber: NSScrubber, selectedIndex: number): void;
  scrubberDidHighlightItemAtIndex?(scrubber: NSScrubber, highlightedIndex: number): void;
  scrubberDidChangeVisibleRange?(scrubber: NSScrubber, visibleRange: _NSRange): void;
  didBeginInteractingWithScrubber?(scrubber: NSScrubber): void;
  didFinishInteractingWithScrubber?(scrubber: NSScrubber): void;
  didCancelInteractingWithScrubber?(scrubber: NSScrubber): void;
}

export class NSTableViewDelegateImpl extends NSObject implements NSTableViewDelegate {
  static ObjCProtocols = [NSTableViewDelegate];
  static {
    NativeClass(this);
  }

  tableViewViewForTableColumnRow?(tableView: NSTableView, tableColumn: NSTableColumn | null, row: number): NSView;
  tableViewRowViewForRow?(tableView: NSTableView, row: number): NSTableRowView;
  tableViewDidAddRowViewForRow?(tableView: NSTableView, rowView: NSTableRowView, row: number): void;
  tableViewDidRemoveRowViewForRow?(tableView: NSTableView, rowView: NSTableRowView, row: number): void;
  tableViewWillDisplayCellForTableColumnRow?(tableView: NSTableView, cell: interop.Object, tableColumn: NSTableColumn | null, row: number): void;
  tableViewShouldEditTableColumnRow?(tableView: NSTableView, tableColumn: NSTableColumn | null, row: number): boolean;
  tableViewToolTipForCellRectTableColumnRowMouseLocation?(tableView: NSTableView, cell: NSCell, rect: interop.PointerConvertible, tableColumn: NSTableColumn | null, row: number, mouseLocation: CGPoint): string;
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
  tableViewTypeSelectStringForTableColumnRow?(tableView: NSTableView, tableColumn: NSTableColumn | null, row: number): string;
  tableViewNextTypeSelectMatchFromRowToRowForString?(tableView: NSTableView, startRow: number, endRow: number, searchString: string): number;
  tableViewShouldTypeSelectForEventWithCurrentSearchString?(tableView: NSTableView, event: NSEvent, searchString: string | null): boolean;
  tableViewIsGroupRow?(tableView: NSTableView, row: number): boolean;
  tableViewSizeToFitWidthOfColumn?(tableView: NSTableView, column: number): number;
  tableViewShouldReorderColumnToColumn?(tableView: NSTableView, columnIndex: number, newColumnIndex: number): boolean;
  tableViewRowActionsForRowEdge?(tableView: NSTableView, row: number, edge: interop.Enum<typeof NSTableRowActionEdge>): NSArray;
  tableViewUserCanChangeVisibilityOfTableColumn?(tableView: NSTableView, column: NSTableColumn): boolean;
  tableViewUserDidChangeVisibilityOfTableColumns?(tableView: NSTableView, columns: NSArray<interop.Object> | Array<interop.Object>): void;
  tableViewSelectionDidChange?(notification: NSNotification): void;
  tableViewColumnDidMove?(notification: NSNotification): void;
  tableViewColumnDidResize?(notification: NSNotification): void;
  tableViewSelectionIsChanging?(notification: NSNotification): void;
}

export class NSSharingServicePickerTouchBarItemDelegateImpl extends NSObject implements NSSharingServicePickerTouchBarItemDelegate {
  static ObjCProtocols = [NSSharingServicePickerTouchBarItemDelegate];
  static {
    NativeClass(this);
  }

  itemsForSharingServicePickerTouchBarItem(pickerTouchBarItem: NSSharingServicePickerTouchBarItem): NSArray {
    throw new Error("Please provide implementation for: NSSharingServicePickerTouchBarItemDelegate > itemsForSharingServicePickerTouchBarItem");
  }
}

export class NSDrawerDelegateImpl extends NSObject implements NSDrawerDelegate {
  static ObjCProtocols = [NSDrawerDelegate];
  static {
    NativeClass(this);
  }

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
  static {
    NativeClass(this);
  }

  imageDidNotDrawInRect?(sender: NSImage, rect: CGRect): NSImage;
  imageWillLoadRepresentation?(image: NSImage, rep: NSImageRep): void;
  imageDidLoadRepresentationHeader?(image: NSImage, rep: NSImageRep): void;
  imageDidLoadPartOfRepresentationWithValidRows?(image: NSImage, rep: NSImageRep, rows: number): void;
  imageDidLoadRepresentationWithStatus?(image: NSImage, rep: NSImageRep, status: interop.Enum<typeof NSImageLoadStatus>): void;
}

export class NSMenuDelegateImpl extends NSObject implements NSMenuDelegate {
  static ObjCProtocols = [NSMenuDelegate];
  static {
    NativeClass(this);
  }

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
  static {
    NativeClass(this);
  }

  stackViewWillDetachViews?(stackView: NSStackView, views: NSArray<interop.Object> | Array<interop.Object>): void;
  stackViewDidReattachViews?(stackView: NSStackView, views: NSArray<interop.Object> | Array<interop.Object>): void;
}

export class NSViewLayerContentScaleDelegateImpl extends NSObject implements NSViewLayerContentScaleDelegate {
  static ObjCProtocols = [NSViewLayerContentScaleDelegate];
  static {
    NativeClass(this);
  }
}

export class NSTextContentStorageDelegateImpl extends NSObject implements NSTextContentStorageDelegate {
  static ObjCProtocols = [NSTextContentStorageDelegate];
  static {
    NativeClass(this);
  }

  textContentStorageTextParagraphWithRange?(textContentStorage: NSTextContentStorage, range: _NSRange): NSTextParagraph;
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

export class NSRuleEditorDelegateImpl extends NSObject implements NSRuleEditorDelegate {
  static ObjCProtocols = [NSRuleEditorDelegate];
  static {
    NativeClass(this);
  }

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
  static {
    NativeClass(this);
  }

  pageControllerIdentifierForObject?(pageController: NSPageController, object: interop.Object): string;
  pageControllerViewControllerForIdentifier?(pageController: NSPageController, identifier: string): NSViewController;
  pageControllerFrameForObject?(pageController: NSPageController, object: interop.Object | null): CGRect;
  pageControllerPrepareViewControllerWithObject?(pageController: NSPageController, viewController: NSViewController, object: interop.Object | null): void;
  pageControllerDidTransitionToObject?(pageController: NSPageController, object: interop.Object): void;
  pageControllerWillStartLiveTransition?(pageController: NSPageController): void;
  pageControllerDidEndLiveTransition?(pageController: NSPageController): void;
}

export class NSDatePickerCellDelegateImpl extends NSObject implements NSDatePickerCellDelegate {
  static ObjCProtocols = [NSDatePickerCellDelegate];
  static {
    NativeClass(this);
  }

  datePickerCellValidateProposedDateValueTimeInterval?(datePickerCell: NSDatePickerCell, proposedDateValue: interop.PointerConvertible, proposedTimeInterval: interop.PointerConvertible): void;
}

export class NSSoundDelegateImpl extends NSObject implements NSSoundDelegate {
  static ObjCProtocols = [NSSoundDelegate];
  static {
    NativeClass(this);
  }

  soundDidFinishPlaying?(sound: NSSound, flag: boolean): void;
}

export class NSTabViewDelegateImpl extends NSObject implements NSTabViewDelegate {
  static ObjCProtocols = [NSTabViewDelegate];
  static {
    NativeClass(this);
  }

  tabViewShouldSelectTabViewItem?(tabView: NSTabView, tabViewItem: NSTabViewItem | null): boolean;
  tabViewWillSelectTabViewItem?(tabView: NSTabView, tabViewItem: NSTabViewItem | null): void;
  tabViewDidSelectTabViewItem?(tabView: NSTabView, tabViewItem: NSTabViewItem | null): void;
  tabViewDidChangeNumberOfTabViewItems?(tabView: NSTabView): void;
}

export class NSTextViewDelegateImpl extends NSObject implements NSTextViewDelegate {
  static ObjCProtocols = [NSTextViewDelegate];
  static {
    NativeClass(this);
  }

  textViewClickedOnLinkAtIndex?(textView: NSTextView, link: interop.Object, charIndex: number): boolean;
  textViewClickedOnCellInRectAtIndex?(textView: NSTextView, cell: NSTextAttachmentCell, cellFrame: CGRect, charIndex: number): void;
  textViewDoubleClickedOnCellInRectAtIndex?(textView: NSTextView, cell: NSTextAttachmentCell, cellFrame: CGRect, charIndex: number): void;
  textViewDraggedCellInRectEventAtIndex?(view: NSTextView, cell: NSTextAttachmentCell, rect: CGRect, event: NSEvent, charIndex: number): void;
  textViewWritablePasteboardTypesForCellAtIndex?(view: NSTextView, cell: NSTextAttachmentCell, charIndex: number): NSArray;
  textViewWriteCellAtIndexToPasteboardType?(view: NSTextView, cell: NSTextAttachmentCell, charIndex: number, pboard: NSPasteboard, type: string): boolean;
  textViewWillChangeSelectionFromCharacterRangeToCharacterRange?(textView: NSTextView, oldSelectedCharRange: _NSRange, newSelectedCharRange: _NSRange): _NSRange;
  textViewWillChangeSelectionFromCharacterRangesToCharacterRanges?(textView: NSTextView, oldSelectedCharRanges: NSArray<interop.Object> | Array<interop.Object>, newSelectedCharRanges: NSArray<interop.Object> | Array<interop.Object>): NSArray;
  textViewShouldChangeTextInRangesReplacementStrings?(textView: NSTextView, affectedRanges: NSArray<interop.Object> | Array<interop.Object>, replacementStrings: NSArray<interop.Object> | Array<interop.Object> | null): boolean;
  textViewShouldChangeTypingAttributesToAttributes?(textView: NSTextView, oldTypingAttributes: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, newTypingAttributes: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): NSDictionary;
  textViewDidChangeSelection?(notification: NSNotification): void;
  textViewDidChangeTypingAttributes?(notification: NSNotification): void;
  textViewWillDisplayToolTipForCharacterAtIndex?(textView: NSTextView, tooltip: string, characterIndex: number): string;
  textViewCompletionsForPartialWordRangeIndexOfSelectedItem?(textView: NSTextView, words: NSArray<interop.Object> | Array<interop.Object>, charRange: _NSRange, index: interop.PointerConvertible): NSArray;
  textViewShouldChangeTextInRangeReplacementString?(textView: NSTextView, affectedCharRange: _NSRange, replacementString: string | null): boolean;
  textViewDoCommandBySelector?(textView: NSTextView, commandSelector: string): boolean;
  textViewShouldSetSpellingStateRange?(textView: NSTextView, value: number, affectedCharRange: _NSRange): number;
  textViewMenuForEventAtIndex?(view: NSTextView, menu: NSMenu, event: NSEvent, charIndex: number): NSMenu;
  textViewWillCheckTextInRangeOptionsTypes?(view: NSTextView, range: _NSRange, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, checkingTypes: interop.PointerConvertible): NSDictionary;
  textViewDidCheckTextInRangeTypesOptionsResultsOrthographyWordCount?(view: NSTextView, range: _NSRange, checkingTypes: number, options: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, results: NSArray<interop.Object> | Array<interop.Object>, orthography: NSOrthography, wordCount: number): NSArray;
  textViewURLForContentsOfTextAttachmentAtIndex?(textView: NSTextView, textAttachment: NSTextAttachment, charIndex: number): NSURL;
  textViewWillShowSharingServicePickerForItems?(textView: NSTextView, servicePicker: NSSharingServicePicker, items: NSArray<interop.Object> | Array<interop.Object>): NSSharingServicePicker;
  undoManagerForTextView?(view: NSTextView): NSUndoManager;
  textViewShouldUpdateTouchBarItemIdentifiers?(textView: NSTextView, identifiers: NSArray<interop.Object> | Array<interop.Object>): NSArray;
  textViewCandidatesForSelectedRange?(textView: NSTextView, selectedRange: _NSRange): NSArray;
  textViewShouldSelectCandidateAtIndex?(textView: NSTextView, index: number): boolean;
  textViewClickedOnLink?(textView: NSTextView, link: interop.Object): boolean;
  textViewClickedOnCellInRect?(textView: NSTextView, cell: NSTextAttachmentCell, cellFrame: CGRect): void;
  textViewDoubleClickedOnCellInRect?(textView: NSTextView, cell: NSTextAttachmentCell, cellFrame: CGRect): void;
  textViewDraggedCellInRectEvent?(view: NSTextView, cell: NSTextAttachmentCell, rect: CGRect, event: NSEvent): void;
}

export class NSSharingServiceDelegateImpl extends NSObject implements NSSharingServiceDelegate {
  static ObjCProtocols = [NSSharingServiceDelegate];
  static {
    NativeClass(this);
  }

  sharingServiceWillShareItems?(sharingService: NSSharingService, items: NSArray<interop.Object> | Array<interop.Object>): void;
  sharingServiceDidFailToShareItemsError?(sharingService: NSSharingService, items: NSArray<interop.Object> | Array<interop.Object>, error: NSError): void;
  sharingServiceDidShareItems?(sharingService: NSSharingService, items: NSArray<interop.Object> | Array<interop.Object>): void;
  sharingServiceSourceFrameOnScreenForShareItem?(sharingService: NSSharingService, item: interop.Object): CGRect;
  sharingServiceTransitionImageForShareItemContentRect?(sharingService: NSSharingService, item: interop.Object, contentRect: interop.PointerConvertible): NSImage;
  sharingServiceSourceWindowForShareItemsSharingContentScope?(sharingService: NSSharingService, items: NSArray<interop.Object> | Array<interop.Object>, sharingContentScope: interop.PointerConvertible): NSWindow;
  anchoringViewForSharingServiceShowRelativeToRectPreferredEdge?(sharingService: NSSharingService, positioningRect: interop.PointerConvertible, preferredEdge: interop.PointerConvertible): NSView;
}

export class NSTextStorageDelegateImpl extends NSObject implements NSTextStorageDelegate {
  static ObjCProtocols = [NSTextStorageDelegate];
  static {
    NativeClass(this);
  }

  textStorageWillProcessEditingRangeChangeInLength?(textStorage: NSTextStorage, editedMask: interop.Enum<typeof NSTextStorageEditActions>, editedRange: _NSRange, delta: number): void;
  textStorageDidProcessEditingRangeChangeInLength?(textStorage: NSTextStorage, editedMask: interop.Enum<typeof NSTextStorageEditActions>, editedRange: _NSRange, delta: number): void;
}

export class NSControlTextEditingDelegateImpl extends NSObject implements NSControlTextEditingDelegate {
  static ObjCProtocols = [NSControlTextEditingDelegate];
  static {
    NativeClass(this);
  }

  controlTextShouldBeginEditing?(control: NSControl, fieldEditor: NSText): boolean;
  controlTextShouldEndEditing?(control: NSControl, fieldEditor: NSText): boolean;
  controlDidFailToFormatStringErrorDescription?(control: NSControl, string: string, error: string | null): boolean;
  controlDidFailToValidatePartialStringErrorDescription?(control: NSControl, string: string, error: string | null): void;
  controlIsValidObject?(control: NSControl, obj: interop.Object | null): boolean;
  controlTextViewDoCommandBySelector?(control: NSControl, textView: NSTextView, commandSelector: string): boolean;
  controlTextViewCompletionsForPartialWordRangeIndexOfSelectedItem?(control: NSControl, textView: NSTextView, words: NSArray<interop.Object> | Array<interop.Object>, charRange: _NSRange, index: interop.PointerConvertible): NSArray;
}

export class NSTextFieldDelegateImpl extends NSObject implements NSTextFieldDelegate {
  static ObjCProtocols = [NSTextFieldDelegate];
  static {
    NativeClass(this);
  }

  textFieldTextViewCandidatesForSelectedRange?(textField: NSTextField, textView: NSTextView, selectedRange: _NSRange): NSArray;
  textFieldTextViewShouldSelectCandidateAtIndex?(textField: NSTextField, textView: NSTextView, index: number): boolean;
}

export class NSOpenSavePanelDelegateImpl extends NSObject implements NSOpenSavePanelDelegate {
  static ObjCProtocols = [NSOpenSavePanelDelegate];
  static {
    NativeClass(this);
  }

  panelShouldEnableURL?(sender: interop.Object, url: NSURL): boolean;
  panelValidateURLError?(sender: interop.Object, url: NSURL, outError: interop.PointerConvertible): boolean;
  panelDidChangeToDirectoryURL?(sender: interop.Object, url: NSURL | null): void;
  panelUserEnteredFilenameConfirmed?(sender: interop.Object, filename: string, okFlag: boolean): string;
  panelWillExpand?(sender: interop.Object, expanding: boolean): void;
  panelSelectionDidChange?(sender: interop.Object | null): void;
}

export class NSSpeechRecognizerDelegateImpl extends NSObject implements NSSpeechRecognizerDelegate {
  static ObjCProtocols = [NSSpeechRecognizerDelegate];
  static {
    NativeClass(this);
  }

  speechRecognizerDidRecognizeCommand?(sender: NSSpeechRecognizer, command: string): void;
}

export class NSCloudSharingServiceDelegateImpl extends NSObject implements NSCloudSharingServiceDelegate {
  static ObjCProtocols = [NSCloudSharingServiceDelegate];
  static {
    NativeClass(this);
  }

  sharingServiceDidCompleteForItemsError?(sharingService: NSSharingService, items: NSArray<interop.Object> | Array<interop.Object>, error: NSError | null): void;
  optionsForSharingServiceShareProvider?(cloudKitSharingService: NSSharingService, provider: NSItemProvider): interop.Enum<typeof NSCloudKitSharingServiceOptions>;
  sharingServiceDidSaveShare?(sharingService: NSSharingService, share: CKShare): void;
  sharingServiceDidStopSharing?(sharingService: NSSharingService, share: CKShare): void;
}

export class NSScrubberFlowLayoutDelegateImpl extends NSObject implements NSScrubberFlowLayoutDelegate {
  static ObjCProtocols = [NSScrubberFlowLayoutDelegate];
  static {
    NativeClass(this);
  }

  scrubberLayoutSizeForItemAtIndex?(scrubber: NSScrubber, layout: NSScrubberFlowLayout, itemIndex: number): CGSize;
}

export class NSSpeechSynthesizerDelegateImpl extends NSObject implements NSSpeechSynthesizerDelegate {
  static ObjCProtocols = [NSSpeechSynthesizerDelegate];
  static {
    NativeClass(this);
  }

  speechSynthesizerDidFinishSpeaking?(sender: NSSpeechSynthesizer, finishedSpeaking: boolean): void;
  speechSynthesizerWillSpeakWordOfString?(sender: NSSpeechSynthesizer, characterRange: _NSRange, string: string): void;
  speechSynthesizerWillSpeakPhoneme?(sender: NSSpeechSynthesizer, phonemeOpcode: number): void;
  speechSynthesizerDidEncounterErrorAtIndexOfStringMessage?(sender: NSSpeechSynthesizer, characterIndex: number, string: string, message: string): void;
  speechSynthesizerDidEncounterSyncMessage?(sender: NSSpeechSynthesizer, message: string): void;
}

export class NSCandidateListTouchBarItemDelegateImpl extends NSObject implements NSCandidateListTouchBarItemDelegate {
  static ObjCProtocols = [NSCandidateListTouchBarItemDelegate];
  static {
    NativeClass(this);
  }

  candidateListTouchBarItemBeginSelectingCandidateAtIndex?(anItem: NSCandidateListTouchBarItem, index: number): void;
  candidateListTouchBarItemChangeSelectionFromCandidateAtIndexToIndex?(anItem: NSCandidateListTouchBarItem, previousIndex: number, index: number): void;
  candidateListTouchBarItemEndSelectingCandidateAtIndex?(anItem: NSCandidateListTouchBarItem, index: number): void;
  candidateListTouchBarItemChangedCandidateListVisibility?(anItem: NSCandidateListTouchBarItem, isVisible: boolean): void;
}

export class NSBrowserDelegateImpl extends NSObject implements NSBrowserDelegate {
  static ObjCProtocols = [NSBrowserDelegate];
  static {
    NativeClass(this);
  }

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
  browserTitleOfColumn?(sender: NSBrowser, column: number): string;
  browserSelectCellWithStringInColumn?(sender: NSBrowser, title: string, column: number): boolean;
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
  browserTypeSelectStringForRowInColumn?(browser: NSBrowser, row: number, column: number): string;
  browserShouldTypeSelectForEventWithCurrentSearchString?(browser: NSBrowser, event: NSEvent, searchString: string | null): boolean;
  browserNextTypeSelectMatchFromRowToRowInColumnForString?(browser: NSBrowser, startRow: number, endRow: number, column: number, searchString: string | null): number;
  browserPreviewViewControllerForLeafItem?(browser: NSBrowser, item: interop.Object): NSViewController;
  browserHeaderViewControllerForItem?(browser: NSBrowser, item: interop.Object | null): NSViewController;
  browserDidChangeLastColumnToColumn?(browser: NSBrowser, oldLastColumn: number, column: number): void;
  browserSelectionIndexesForProposedSelectionInColumn?(browser: NSBrowser, proposedSelectionIndexes: NSIndexSet, column: number): NSIndexSet;
}

export class NSWindowDelegateImpl extends NSObject implements NSWindowDelegate {
  static ObjCProtocols = [NSWindowDelegate];
  static {
    NativeClass(this);
  }

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
  static {
    NativeClass(this);
  }

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
  collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath?(collectionView: NSCollectionView, view: NSView, elementKind: string, indexPath: NSIndexPath): void;
  collectionViewDidEndDisplayingItemForRepresentedObjectAtIndexPath?(collectionView: NSCollectionView, item: NSCollectionViewItem, indexPath: NSIndexPath): void;
  collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath?(collectionView: NSCollectionView, view: NSView, elementKind: string, indexPath: NSIndexPath): void;
  collectionViewTransitionLayoutForOldLayoutNewLayout?(collectionView: NSCollectionView, fromLayout: NSCollectionViewLayout, toLayout: NSCollectionViewLayout): NSCollectionViewTransitionLayout;
}

export class NSAlertDelegateImpl extends NSObject implements NSAlertDelegate {
  static ObjCProtocols = [NSAlertDelegate];
  static {
    NativeClass(this);
  }

  alertShowHelp?(alert: NSAlert): boolean;
}

export class NSTextDelegateImpl extends NSObject implements NSTextDelegate {
  static ObjCProtocols = [NSTextDelegate];
  static {
    NativeClass(this);
  }

  textShouldBeginEditing?(textObject: NSText): boolean;
  textShouldEndEditing?(textObject: NSText): boolean;
  textDidBeginEditing?(notification: NSNotification): void;
  textDidEndEditing?(notification: NSNotification): void;
  textDidChange?(notification: NSNotification): void;
}

export class NSGestureRecognizerDelegateImpl extends NSObject implements NSGestureRecognizerDelegate {
  static ObjCProtocols = [NSGestureRecognizerDelegate];
  static {
    NativeClass(this);
  }

  gestureRecognizerShouldAttemptToRecognizeWithEvent?(gestureRecognizer: NSGestureRecognizer, event: NSEvent): boolean;
  gestureRecognizerShouldBegin?(gestureRecognizer: NSGestureRecognizer): boolean;
  gestureRecognizerShouldRecognizeSimultaneouslyWithGestureRecognizer?(gestureRecognizer: NSGestureRecognizer, otherGestureRecognizer: NSGestureRecognizer): boolean;
  gestureRecognizerShouldRequireFailureOfGestureRecognizer?(gestureRecognizer: NSGestureRecognizer, otherGestureRecognizer: NSGestureRecognizer): boolean;
  gestureRecognizerShouldBeRequiredToFailByGestureRecognizer?(gestureRecognizer: NSGestureRecognizer, otherGestureRecognizer: NSGestureRecognizer): boolean;
  gestureRecognizerShouldReceiveTouch?(gestureRecognizer: NSGestureRecognizer, touch: NSTouch): boolean;
}

export class NSTextContentManagerDelegateImpl extends NSObject implements NSTextContentManagerDelegate {
  static ObjCProtocols = [NSTextContentManagerDelegate];
  static {
    NativeClass(this);
  }

  textContentManagerTextElementAtLocation?(textContentManager: NSTextContentManager, location: NSTextLocation): NSTextElement;
  textContentManagerShouldEnumerateTextElementOptions?(textContentManager: NSTextContentManager, textElement: NSTextElement, options: interop.Enum<typeof NSTextContentManagerEnumerationOptions>): boolean;
}

export class NSTouchBarDelegateImpl extends NSObject implements NSTouchBarDelegate {
  static ObjCProtocols = [NSTouchBarDelegate];
  static {
    NativeClass(this);
  }

  touchBarMakeItemForIdentifier?(touchBar: NSTouchBar, identifier: string): NSTouchBarItem;
}

export class NSPopoverDelegateImpl extends NSObject implements NSPopoverDelegate {
  static ObjCProtocols = [NSPopoverDelegate];
  static {
    NativeClass(this);
  }

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
  static {
    NativeClass(this);
  }

  pathCellWillDisplayOpenPanel?(pathCell: NSPathCell, openPanel: NSOpenPanel): void;
  pathCellWillPopUpMenu?(pathCell: NSPathCell, menu: NSMenu): void;
}

export class NSAccessibilityCustomRotorItemSearchDelegateImpl extends NSObject implements NSAccessibilityCustomRotorItemSearchDelegate {
  static ObjCProtocols = [NSAccessibilityCustomRotorItemSearchDelegate];
  static {
    NativeClass(this);
  }

  rotorResultForSearchParameters(rotor: NSAccessibilityCustomRotor, searchParameters: NSAccessibilityCustomRotorSearchParameters): NSAccessibilityCustomRotorItemResult {
    throw new Error("Please provide implementation for: NSAccessibilityCustomRotorItemSearchDelegate > rotorResultForSearchParameters");
  }
}

export class NSTokenFieldCellDelegateImpl extends NSObject implements NSTokenFieldCellDelegate {
  static ObjCProtocols = [NSTokenFieldCellDelegate];
  static {
    NativeClass(this);
  }

  tokenFieldCellCompletionsForSubstringIndexOfTokenIndexOfSelectedItem?(tokenFieldCell: NSTokenFieldCell, substring: string, tokenIndex: number, selectedIndex: interop.PointerConvertible): NSArray;
  tokenFieldCellShouldAddObjectsAtIndex?(tokenFieldCell: NSTokenFieldCell, tokens: NSArray<interop.Object> | Array<interop.Object>, index: number): NSArray;
  tokenFieldCellDisplayStringForRepresentedObject?(tokenFieldCell: NSTokenFieldCell, representedObject: interop.Object): string;
  tokenFieldCellEditingStringForRepresentedObject?(tokenFieldCell: NSTokenFieldCell, representedObject: interop.Object): string;
  tokenFieldCellRepresentedObjectForEditingString?(tokenFieldCell: NSTokenFieldCell, editingString: string): interop.Object;
  tokenFieldCellWriteRepresentedObjectsToPasteboard?(tokenFieldCell: NSTokenFieldCell, objects: NSArray<interop.Object> | Array<interop.Object>, pboard: NSPasteboard): boolean;
  tokenFieldCellReadFromPasteboard?(tokenFieldCell: NSTokenFieldCell, pboard: NSPasteboard): NSArray;
  tokenFieldCellMenuForRepresentedObject?(tokenFieldCell: NSTokenFieldCell, representedObject: interop.Object): NSMenu;
  tokenFieldCellHasMenuForRepresentedObject?(tokenFieldCell: NSTokenFieldCell, representedObject: interop.Object): boolean;
  tokenFieldCellStyleForRepresentedObject?(tokenFieldCell: NSTokenFieldCell, representedObject: interop.Object): interop.Enum<typeof NSTokenStyle>;
}

export class NSPathControlDelegateImpl extends NSObject implements NSPathControlDelegate {
  static ObjCProtocols = [NSPathControlDelegate];
  static {
    NativeClass(this);
  }

  pathControlShouldDragItemWithPasteboard?(pathControl: NSPathControl, pathItem: NSPathControlItem, pasteboard: NSPasteboard): boolean;
  pathControlShouldDragPathComponentCellWithPasteboard?(pathControl: NSPathControl, pathComponentCell: NSPathComponentCell, pasteboard: NSPasteboard): boolean;
  pathControlValidateDrop?(pathControl: NSPathControl, info: NSDraggingInfo): interop.Enum<typeof NSDragOperation>;
  pathControlAcceptDrop?(pathControl: NSPathControl, info: NSDraggingInfo): boolean;
  pathControlWillDisplayOpenPanel?(pathControl: NSPathControl, openPanel: NSOpenPanel): void;
  pathControlWillPopUpMenu?(pathControl: NSPathControl, menu: NSMenu): void;
}

export class NSFilePromiseProviderDelegateImpl extends NSObject implements NSFilePromiseProviderDelegate {
  static ObjCProtocols = [NSFilePromiseProviderDelegate];
  static {
    NativeClass(this);
  }

  filePromiseProviderFileNameForType(filePromiseProvider: NSFilePromiseProvider, fileType: string): string {
    throw new Error("Please provide implementation for: NSFilePromiseProviderDelegate > filePromiseProviderFileNameForType");
  }
  filePromiseProviderWritePromiseToURLCompletionHandler(filePromiseProvider: NSFilePromiseProvider, url: NSURL, completionHandler: (p1: NSError) => void | null): void {
    throw new Error("Please provide implementation for: NSFilePromiseProviderDelegate > filePromiseProviderWritePromiseToURLCompletionHandler");
  }
  operationQueueForFilePromiseProvider?(filePromiseProvider: NSFilePromiseProvider): NSOperationQueue;
}

export class NSApplicationDelegateImpl extends NSObject implements NSApplicationDelegate {
  static ObjCProtocols = [NSApplicationDelegate];
  static {
    NativeClass(this);
  }

  applicationShouldTerminate?(sender: NSApplication): interop.Enum<typeof NSApplicationTerminateReply>;
  applicationOpenURLs?(application: NSApplication, urls: NSArray<interop.Object> | Array<interop.Object>): void;
  applicationOpenFile?(sender: NSApplication, filename: string): boolean;
  applicationOpenFiles?(sender: NSApplication, filenames: NSArray<interop.Object> | Array<interop.Object>): void;
  applicationOpenTempFile?(sender: NSApplication, filename: string): boolean;
  applicationShouldOpenUntitledFile?(sender: NSApplication): boolean;
  applicationOpenUntitledFile?(sender: NSApplication): boolean;
  applicationOpenFileWithoutUI?(sender: interop.Object, filename: string): boolean;
  applicationPrintFile?(sender: NSApplication, filename: string): boolean;
  applicationPrintFilesWithSettingsShowPrintPanels?(application: NSApplication, fileNames: NSArray<interop.Object> | Array<interop.Object>, printSettings: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, showPrintPanels: boolean): interop.Enum<typeof NSApplicationPrintReply>;
  applicationShouldTerminateAfterLastWindowClosed?(sender: NSApplication): boolean;
  applicationShouldHandleReopenHasVisibleWindows?(sender: NSApplication, flag: boolean): boolean;
  applicationDockMenu?(sender: NSApplication): NSMenu;
  applicationWillPresentError?(application: NSApplication, error: NSError): NSError;
  applicationDidRegisterForRemoteNotificationsWithDeviceToken?(application: NSApplication, deviceToken: NSData): void;
  applicationDidFailToRegisterForRemoteNotificationsWithError?(application: NSApplication, error: NSError): void;
  applicationDidReceiveRemoteNotification?(application: NSApplication, userInfo: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>): void;
  applicationSupportsSecureRestorableState?(app: NSApplication): boolean;
  applicationHandlerForIntent?(application: NSApplication, intent: INIntent): interop.Object;
  applicationWillEncodeRestorableState?(app: NSApplication, coder: NSCoder): void;
  applicationDidDecodeRestorableState?(app: NSApplication, coder: NSCoder): void;
  applicationWillContinueUserActivityWithType?(application: NSApplication, userActivityType: string): boolean;
  applicationContinueUserActivityRestorationHandler?(application: NSApplication, userActivity: NSUserActivity, restorationHandler: (p1: NSArray<interop.Object> | Array<interop.Object>) => void): boolean;
  applicationDidFailToContinueUserActivityWithTypeError?(application: NSApplication, userActivityType: string, error: NSError): void;
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
  static {
    NativeClass(this);
  }

  animationShouldStart?(animation: NSAnimation): boolean;
  animationDidStop?(animation: NSAnimation): void;
  animationDidEnd?(animation: NSAnimation): void;
  animationValueForProgress?(animation: NSAnimation, progress: number): number;
  animationDidReachProgressMark?(animation: NSAnimation, progress: number): void;
}

export class NSSharingServicePickerToolbarItemDelegateImpl extends NSObject implements NSSharingServicePickerToolbarItemDelegate {
  static ObjCProtocols = [NSSharingServicePickerToolbarItemDelegate];
  static {
    NativeClass(this);
  }

  itemsForSharingServicePickerToolbarItem(pickerToolbarItem: NSSharingServicePickerToolbarItem): NSArray {
    throw new Error("Please provide implementation for: NSSharingServicePickerToolbarItemDelegate > itemsForSharingServicePickerToolbarItem");
  }
}

export class NSOutlineViewDelegateImpl extends NSObject implements NSOutlineViewDelegate {
  static ObjCProtocols = [NSOutlineViewDelegate];
  static {
    NativeClass(this);
  }

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
  outlineViewToolTipForCellRectTableColumnItemMouseLocation?(outlineView: NSOutlineView, cell: NSCell, rect: interop.PointerConvertible, tableColumn: NSTableColumn | null, item: interop.Object, mouseLocation: CGPoint): string;
  outlineViewHeightOfRowByItem?(outlineView: NSOutlineView, item: interop.Object): number;
  outlineViewTintConfigurationForItem?(outlineView: NSOutlineView, item: interop.Object): NSTintConfiguration;
  outlineViewTypeSelectStringForTableColumnItem?(outlineView: NSOutlineView, tableColumn: NSTableColumn | null, item: interop.Object): string;
  outlineViewNextTypeSelectMatchFromItemToItemForString?(outlineView: NSOutlineView, startItem: interop.Object, endItem: interop.Object, searchString: string): interop.Object;
  outlineViewShouldTypeSelectForEventWithCurrentSearchString?(outlineView: NSOutlineView, event: NSEvent, searchString: string | null): boolean;
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
  outlineViewUserDidChangeVisibilityOfTableColumns?(outlineView: NSOutlineView, columns: NSArray<interop.Object> | Array<interop.Object>): void;
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
  static {
    NativeClass(this);
  }
}

export class NSSharingServicePickerDelegateImpl extends NSObject implements NSSharingServicePickerDelegate {
  static ObjCProtocols = [NSSharingServicePickerDelegate];
  static {
    NativeClass(this);
  }

  sharingServicePickerSharingServicesForItemsProposedSharingServices?(sharingServicePicker: NSSharingServicePicker, items: NSArray<interop.Object> | Array<interop.Object>, proposedServices: NSArray<interop.Object> | Array<interop.Object>): NSArray;
  sharingServicePickerDelegateForSharingService?(sharingServicePicker: NSSharingServicePicker, sharingService: NSSharingService): NSSharingServiceDelegate;
  sharingServicePickerDidChooseSharingService?(sharingServicePicker: NSSharingServicePicker, service: NSSharingService | null): void;
}

export class NSSplitViewDelegateImpl extends NSObject implements NSSplitViewDelegate {
  static ObjCProtocols = [NSSplitViewDelegate];
  static {
    NativeClass(this);
  }

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
  static {
    NativeClass(this);
  }

  comboBoxWillPopUp?(notification: NSNotification): void;
  comboBoxWillDismiss?(notification: NSNotification): void;
  comboBoxSelectionDidChange?(notification: NSNotification): void;
  comboBoxSelectionIsChanging?(notification: NSNotification): void;
}

export class NSToolbarDelegateImpl extends NSObject implements NSToolbarDelegate {
  static ObjCProtocols = [NSToolbarDelegate];
  static {
    NativeClass(this);
  }

  toolbarItemForItemIdentifierWillBeInsertedIntoToolbar?(toolbar: NSToolbar, itemIdentifier: string, flag: boolean): NSToolbarItem;
  toolbarDefaultItemIdentifiers?(toolbar: NSToolbar): NSArray;
  toolbarAllowedItemIdentifiers?(toolbar: NSToolbar): NSArray;
  toolbarSelectableItemIdentifiers?(toolbar: NSToolbar): NSArray;
  toolbarImmovableItemIdentifiers?(toolbar: NSToolbar): NSSet;
  toolbarItemIdentifierCanBeInsertedAtIndex?(toolbar: NSToolbar, itemIdentifier: string, index: number): boolean;
  toolbarWillAddItem?(notification: NSNotification): void;
  toolbarDidRemoveItem?(notification: NSNotification): void;
}

export class NSTokenFieldDelegateImpl extends NSObject implements NSTokenFieldDelegate {
  static ObjCProtocols = [NSTokenFieldDelegate];
  static {
    NativeClass(this);
  }

  tokenFieldCompletionsForSubstringIndexOfTokenIndexOfSelectedItem?(tokenField: NSTokenField, substring: string, tokenIndex: number, selectedIndex: interop.PointerConvertible): NSArray;
  tokenFieldShouldAddObjectsAtIndex?(tokenField: NSTokenField, tokens: NSArray<interop.Object> | Array<interop.Object>, index: number): NSArray;
  tokenFieldDisplayStringForRepresentedObject?(tokenField: NSTokenField, representedObject: interop.Object): string;
  tokenFieldEditingStringForRepresentedObject?(tokenField: NSTokenField, representedObject: interop.Object): string;
  tokenFieldRepresentedObjectForEditingString?(tokenField: NSTokenField, editingString: string): interop.Object;
  tokenFieldWriteRepresentedObjectsToPasteboard?(tokenField: NSTokenField, objects: NSArray<interop.Object> | Array<interop.Object>, pboard: NSPasteboard): boolean;
  tokenFieldReadFromPasteboard?(tokenField: NSTokenField, pboard: NSPasteboard): NSArray;
  tokenFieldMenuForRepresentedObject?(tokenField: NSTokenField, representedObject: interop.Object): NSMenu;
  tokenFieldHasMenuForRepresentedObject?(tokenField: NSTokenField, representedObject: interop.Object): boolean;
  tokenFieldStyleForRepresentedObject?(tokenField: NSTokenField, representedObject: interop.Object): interop.Enum<typeof NSTokenStyle>;
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

export class NSLayoutManagerDelegateImpl extends NSObject implements NSLayoutManagerDelegate {
  static ObjCProtocols = [NSLayoutManagerDelegate];
  static {
    NativeClass(this);
  }

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
  layoutManagerShouldUseTemporaryAttributesForDrawingToScreenAtCharacterIndexEffectiveRange?(layoutManager: NSLayoutManager, attrs: NSDictionary<interop.Object, interop.Object> | Record<interop.Object, interop.Object>, toScreen: boolean, charIndex: number, effectiveCharRange: interop.PointerConvertible): NSDictionary;
}

export class NSSearchFieldDelegateImpl extends NSObject implements NSSearchFieldDelegate {
  static ObjCProtocols = [NSSearchFieldDelegate];
  static {
    NativeClass(this);
  }

  searchFieldDidStartSearching?(sender: NSSearchField): void;
  searchFieldDidEndSearching?(sender: NSSearchField): void;
}