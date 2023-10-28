/// <reference types="objc/lib/types.d.ts" />
/// <reference types="objc/types/Runtime.d.ts" />
/// <reference types="objc/types/QuartzCore.d.ts" />
/// <reference types="objc/types/Foundation.d.ts" />

export abstract class HTMLNativeObjectElement extends HTMLElement {
  /**
   * The native object from the Obj-C runtime that this HTML Element wraps.
   */
  abstract readonly nativeObject: NativeObject;

  protected static readonly attributesMap: Record<string, string> = {};
}

export class HTMLNSObjectElement extends HTMLNativeObjectElement {
  readonly nativeObject = NSObject.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    accessibilityactiondescription: 'accessibilityActionDescription',
    accessibilityactionnames: 'accessibilityActionNames',
    accessibilityarrayattributecount: 'accessibilityArrayAttributeCount',
    accessibilityarrayattributevaluesindexmaxcount: 'accessibilityArrayAttributeValuesIndexMaxCount',
    accessibilityattributenames: 'accessibilityAttributeNames',
    accessibilityattributevalue: 'accessibilityAttributeValue',
    accessibilityattributevalueforparameter: 'accessibilityAttributeValueForParameter',
    accessibilityfocuseduielement: 'accessibilityFocusedUIElement',
    accessibilityhittest: 'accessibilityHitTest',
    accessibilityindexofchild: 'accessibilityIndexOfChild',
    accessibilityisattributesettable: 'accessibilityIsAttributeSettable',
    accessibilityisignored: 'accessibilityIsIgnored',
    accessibilitynotifieswhendestroyed: 'accessibilityNotifiesWhenDestroyed',
    accessibilityparameterizedattributenames: 'accessibilityParameterizedAttributeNames',
    accessibilityperformaction: 'accessibilityPerformAction',
    accessibilitysetoverridevalueforattribute: 'accessibilitySetOverrideValueForAttribute',
    accessibilitysetvalueforattribute: 'accessibilitySetValueForAttribute',
    accessinstancevariablesdirectly: 'accessInstanceVariablesDirectly',
    addobserverforkeypathoptionscontext: 'addObserverForKeyPathOptionsContext',
    alloc: 'alloc',
    allocwithzone: 'allocWithZone',
    applicationdelegatehandleskey: 'applicationDelegateHandlesKey',
    attemptrecoveryfromerroroptionindex: 'attemptRecoveryFromErrorOptionIndex',
    attemptrecoveryfromerroroptionindexdelegatedidrecoverselectorcontextinfo: 'attemptRecoveryFromErrorOptionIndexDelegateDidRecoverSelectorContextInfo',
    attributekeys: 'attributeKeys',
    autocontentaccessingproxy: 'autoContentAccessingProxy',
    automaticallynotifiesobserversforkey: 'automaticallyNotifiesObserversForKey',
    autorelease: 'autorelease',
    awakeafterusingcoder: 'awakeAfterUsingCoder',
    awakefromnib: 'awakeFromNib',
    bindtoobjectwithkeypathoptions: 'bindToObjectWithKeyPathOptions',
    cancelpreviousperformrequestswithtarget: 'cancelPreviousPerformRequestsWithTarget',
    cancelpreviousperformrequestswithtargetselectorobject: 'cancelPreviousPerformRequestsWithTargetSelectorObject',
    changecolor: 'changeColor',
    changefont: 'changeFont',
    class: 'class',
    classcode: 'classCode',
    classdescription: 'classDescription',
    classfallbacksforkeyedarchiver: 'classFallbacksForKeyedArchiver',
    classforarchiver: 'classForArchiver',
    classforcoder: 'classForCoder',
    classforkeyedarchiver: 'classForKeyedArchiver',
    classforkeyedunarchiver: 'classForKeyedUnarchiver',
    classforportcoder: 'classForPortCoder',
    classname: 'className',
    coercevalueforkey: 'coerceValueForKey',
    commitediting: 'commitEditing',
    commiteditingandreturnerror: 'commitEditingAndReturnError',
    commiteditingwithdelegatedidcommitselectorcontextinfo: 'commitEditingWithDelegateDidCommitSelectorContextInfo',
    conformstoprotocol: 'conformsToProtocol',
    controltextdidbeginediting: 'controlTextDidBeginEditing',
    controltextdidchange: 'controlTextDidChange',
    controltextdidendediting: 'controlTextDidEndEditing',
    copy: 'copy',
    copyscriptingvalueforkeywithproperties: 'copyScriptingValueForKeyWithProperties',
    copywithzone: 'copyWithZone',
    dealloc: 'dealloc',
    debugdescription: 'debugDescription',
    defaultplaceholderformarkerwithbinding: 'defaultPlaceholderForMarkerWithBinding',
    description: 'description',
    dictionarywithvaluesforkeys: 'dictionaryWithValuesForKeys',
    didchangevalueforkey: 'didChangeValueForKey',
    didchangevalueforkeywithsetmutationusingobjects: 'didChangeValueForKeyWithSetMutationUsingObjects',
    didchangevaluesatindexesforkey: 'didChangeValuesAtIndexesForKey',
    discardediting: 'discardEditing',
    doescontain: 'doesContain',
    doesnotrecognizeselector: 'doesNotRecognizeSelector',
    draggedimagebeganat: 'draggedImageBeganAt',
    draggedimageendedatdeposited: 'draggedImageEndedAtDeposited',
    draggedimageendedatoperation: 'draggedImageEndedAtOperation',
    draggedimagemovedto: 'draggedImageMovedTo',
    draggingsourceoperationmaskforlocal: 'draggingSourceOperationMaskForLocal',
    exposebinding: 'exposeBinding',
    exposedbindings: 'exposedBindings',
    filemanagershouldproceedaftererror: 'fileManagerShouldProceedAfterError',
    filemanagerwillprocesspath: 'fileManagerWillProcessPath',
    finalize: 'finalize',
    finalizeforwebscript: 'finalizeForWebScript',
    fontmanagerwillincludefont: 'fontManagerWillIncludeFont',
    forwardingtargetforselector: 'forwardingTargetForSelector',
    forwardinvocation: 'forwardInvocation',
    handlequerywithunboundkey: 'handleQueryWithUnboundKey',
    handletakevalueforunboundkey: 'handleTakeValueForUnboundKey',
    hash: 'hash',
    ignoremodifierkeyswhiledragging: 'ignoreModifierKeysWhileDragging',
    indicesofobjectsbyevaluatingobjectspecifier: 'indicesOfObjectsByEvaluatingObjectSpecifier',
    infoforbinding: 'infoForBinding',
    init: 'init',
    initialize: 'initialize',
    insertvalueatindexinpropertywithkey: 'insertValueAtIndexInPropertyWithKey',
    insertvalueinpropertywithkey: 'insertValueInPropertyWithKey',
    instancemethodforselector: 'instanceMethodForSelector',
    instancemethodsignatureforselector: 'instanceMethodSignatureForSelector',
    instancesrespondtoselector: 'instancesRespondToSelector',
    inverseforrelationshipkey: 'inverseForRelationshipKey',
    invokedefaultmethodwitharguments: 'invokeDefaultMethodWithArguments',
    invokeundefinedmethodfromwebscriptwitharguments: 'invokeUndefinedMethodFromWebScriptWithArguments',
    iscaseinsensitivelike: 'isCaseInsensitiveLike',
    isequal: 'isEqual',
    isequalto: 'isEqualTo',
    isgreaterthan: 'isGreaterThan',
    isgreaterthanorequalto: 'isGreaterThanOrEqualTo',
    iskeyexcludedfromwebscript: 'isKeyExcludedFromWebScript',
    iskindofclass: 'isKindOfClass',
    islessthan: 'isLessThan',
    islessthanorequalto: 'isLessThanOrEqualTo',
    islike: 'isLike',
    ismemberofclass: 'isMemberOfClass',
    isnotequalto: 'isNotEqualTo',
    isproxy: 'isProxy',
    isselectorexcludedfromwebscript: 'isSelectorExcludedFromWebScript',
    issubclassofclass: 'isSubclassOfClass',
    keypathsforvaluesaffectingvalueforkey: 'keyPathsForValuesAffectingValueForKey',
    layershouldinheritcontentsscalefromwindow: 'layerShouldInheritContentsScaleFromWindow',
    load: 'load',
    methodforselector: 'methodForSelector',
    methodsignatureforselector: 'methodSignatureForSelector',
    mutablearrayvalueforkey: 'mutableArrayValueForKey',
    mutablearrayvalueforkeypath: 'mutableArrayValueForKeyPath',
    mutablecopy: 'mutableCopy',
    mutablecopywithzone: 'mutableCopyWithZone',
    mutableorderedsetvalueforkey: 'mutableOrderedSetValueForKey',
    mutableorderedsetvalueforkeypath: 'mutableOrderedSetValueForKeyPath',
    mutablesetvalueforkey: 'mutableSetValueForKey',
    mutablesetvalueforkeypath: 'mutableSetValueForKeyPath',
    namesofpromisedfilesdroppedatdestination: 'namesOfPromisedFilesDroppedAtDestination',
    new: 'new',
    newscriptingobjectofclassforvalueforkeywithcontentsvalueproperties: 'newScriptingObjectOfClassForValueForKeyWithContentsValueProperties',
    objectdidbeginediting: 'objectDidBeginEditing',
    objectdidendediting: 'objectDidEndEditing',
    objectforwebscript: 'objectForWebScript',
    objectspecifier: 'objectSpecifier',
    observationinfo: 'observationInfo',
    observevalueforkeypathofobjectchangecontext: 'observeValueForKeyPathOfObjectChangeContext',
    optiondescriptionsforbinding: 'optionDescriptionsForBinding',
    panelcomparefilenamewithcasesensitive: 'panelCompareFilenameWithCaseSensitive',
    paneldirectorydidchange: 'panelDirectoryDidChange',
    panelisvalidfilename: 'panelIsValidFilename',
    panelshouldshowfilename: 'panelShouldShowFilename',
    pasteboardchangedowner: 'pasteboardChangedOwner',
    pasteboardprovidedatafortype: 'pasteboardProvideDataForType',
    performselector: 'performSelector',
    performselectorinbackgroundwithobject: 'performSelectorInBackgroundWithObject',
    performselectoronmainthreadwithobjectwaituntildone: 'performSelectorOnMainThreadWithObjectWaitUntilDone',
    performselectoronmainthreadwithobjectwaituntildonemodes: 'performSelectorOnMainThreadWithObjectWaitUntilDoneModes',
    performselectoronthreadwithobjectwaituntildone: 'performSelectorOnThreadWithObjectWaitUntilDone',
    performselectoronthreadwithobjectwaituntildonemodes: 'performSelectorOnThreadWithObjectWaitUntilDoneModes',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectafterdelay: 'performSelectorWithObjectAfterDelay',
    performselectorwithobjectafterdelayinmodes: 'performSelectorWithObjectAfterDelayInModes',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    prepareforinterfacebuilder: 'prepareForInterfaceBuilder',
    provideimagedatabytesperroworiginsizeuserinfo: 'provideImageDataBytesPerRowOriginSizeUserInfo',
    release: 'release',
    removeobserverforkeypath: 'removeObserverForKeyPath',
    removeobserverforkeypathcontext: 'removeObserverForKeyPathContext',
    removevalueatindexfrompropertywithkey: 'removeValueAtIndexFromPropertyWithKey',
    replacementobjectforarchiver: 'replacementObjectForArchiver',
    replacementobjectforcoder: 'replacementObjectForCoder',
    replacementobjectforkeyedarchiver: 'replacementObjectForKeyedArchiver',
    replacementobjectforportcoder: 'replacementObjectForPortCoder',
    replacevalueatindexinpropertywithkeywithvalue: 'replaceValueAtIndexInPropertyWithKeyWithValue',
    resolveclassmethod: 'resolveClassMethod',
    resolveinstancemethod: 'resolveInstanceMethod',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    scriptingbeginswith: 'scriptingBeginsWith',
    scriptingcontains: 'scriptingContains',
    scriptingendswith: 'scriptingEndsWith',
    scriptingisequalto: 'scriptingIsEqualTo',
    scriptingisgreaterthan: 'scriptingIsGreaterThan',
    scriptingisgreaterthanorequalto: 'scriptingIsGreaterThanOrEqualTo',
    scriptingislessthan: 'scriptingIsLessThan',
    scriptingislessthanorequalto: 'scriptingIsLessThanOrEqualTo',
    scriptingproperties: 'scriptingProperties',
    scriptingvalueforspecifier: 'scriptingValueForSpecifier',
    self: 'self',
    setdefaultplaceholderformarkerwithbinding: 'setDefaultPlaceholderForMarkerWithBinding',
    setkeystriggerchangenotificationsfordependentkey: 'setKeysTriggerChangeNotificationsForDependentKey',
    setnilvalueforkey: 'setNilValueForKey',
    setvalueforkey: 'setValueForKey',
    setvalueforkeypath: 'setValueForKeyPath',
    setvalueforundefinedkey: 'setValueForUndefinedKey',
    setvaluesforkeyswithdictionary: 'setValuesForKeysWithDictionary',
    setversion: 'setVersion',
    storedvalueforkey: 'storedValueForKey',
    superclass: 'superclass',
    tableviewwriterowstopasteboard: 'tableViewWriteRowsToPasteboard',
    takestoredvalueforkey: 'takeStoredValueForKey',
    takevalueforkey: 'takeValueForKey',
    takevalueforkeypath: 'takeValueForKeyPath',
    takevaluesfromdictionary: 'takeValuesFromDictionary',
    textstoragedidprocessediting: 'textStorageDidProcessEditing',
    textstoragewillprocessediting: 'textStorageWillProcessEditing',
    tomanyrelationshipkeys: 'toManyRelationshipKeys',
    toonerelationshipkeys: 'toOneRelationshipKeys',
    unabletosetnilforkey: 'unableToSetNilForKey',
    unbind: 'unbind',
    urlresourcedatadidbecomeavailable: 'URLResourceDataDidBecomeAvailable',
    urlresourcedidcancelloading: 'URLResourceDidCancelLoading',
    urlresourcedidfailloadingwithreason: 'URLResourceDidFailLoadingWithReason',
    urlresourcedidfinishloading: 'URLResourceDidFinishLoading',
    usestoredaccessor: 'useStoredAccessor',
    validatemenuitem: 'validateMenuItem',
    validatetoolbaritem: 'validateToolbarItem',
    validatevalueforkeyerror: 'validateValueForKeyError',
    validatevalueforkeypatherror: 'validateValueForKeyPathError',
    validmodesforfontpanel: 'validModesForFontPanel',
    valueatindexinpropertywithkey: 'valueAtIndexInPropertyWithKey',
    valueclassforbinding: 'valueClassForBinding',
    valueforkey: 'valueForKey',
    valueforkeypath: 'valueForKeyPath',
    valueforundefinedkey: 'valueForUndefinedKey',
    valuesforkeys: 'valuesForKeys',
    valuewithnameinpropertywithkey: 'valueWithNameInPropertyWithKey',
    valuewithuniqueidinpropertywithkey: 'valueWithUniqueIDInPropertyWithKey',
    version: 'version',
    viewstringfortooltippointuserdata: 'viewStringForToolTipPointUserData',
    webframe: 'webFrame',
    webplugincontainerloadrequestinframe: 'webPlugInContainerLoadRequestInFrame',
    webplugincontainerselectioncolor: 'webPlugInContainerSelectionColor',
    webplugincontainershowstatus: 'webPlugInContainerShowStatus',
    webplugindestroy: 'webPlugInDestroy',
    webplugininitialize: 'webPlugInInitialize',
    webpluginmainresourcedidfailwitherror: 'webPlugInMainResourceDidFailWithError',
    webpluginmainresourcedidfinishloading: 'webPlugInMainResourceDidFinishLoading',
    webpluginmainresourcedidreceivedata: 'webPlugInMainResourceDidReceiveData',
    webpluginmainresourcedidreceiveresponse: 'webPlugInMainResourceDidReceiveResponse',
    webpluginsetisselected: 'webPlugInSetIsSelected',
    webpluginstart: 'webPlugInStart',
    webpluginstop: 'webPlugInStop',
    webscriptnameforkey: 'webScriptNameForKey',
    webscriptnameforselector: 'webScriptNameForSelector',
    willchangevalueforkey: 'willChangeValueForKey',
    willchangevalueforkeywithsetmutationusingobjects: 'willChangeValueForKeyWithSetMutationUsingObjects',
    willchangevaluesatindexesforkey: 'willChangeValuesAtIndexesForKey',
    zone: 'zone',
  }

  // readonly accessibilityFocusedUIElement: interop.Object;
  // readonly accessibilityNotifiesWhenDestroyed: boolean;
  // accessInstanceVariablesDirectly: boolean;
  // readonly attributeKeys: NSArray;
  // readonly autoContentAccessingProxy: interop.Object;
  // readonly classCode: number;
  // readonly classDescription: NSClassDescription;
  // readonly classForArchiver: interop.Object;
  // readonly classForCoder: interop.Object;
  // readonly classForKeyedArchiver: interop.Object;
  // readonly classForPortCoder: interop.Object;
  // readonly className: NSString;
  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // readonly exposedBindings: NSArray;
  // readonly hash: number;
  // readonly isProxy: boolean;
  // readonly objectForWebScript: interop.Object;
  // readonly objectSpecifier: NSScriptObjectSpecifier;
  // readonly superclass: interop.Object;
  // readonly toManyRelationshipKeys: NSArray;
  // readonly toOneRelationshipKeys: NSArray;
  // readonly webFrame: WebFrame;
  // readonly webPlugInContainerSelectionColor: NSColor;
  // readonly zone: interop.Pointer;
}

export class HTMLNSWindowTabGroupElement extends HTMLNSObjectElement {
  readonly nativeObject = NSWindowTabGroup.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    addwindow: 'addWindow',
    identifier: 'identifier',
    insertwindowatindex: 'insertWindowAtIndex',
    isoverviewvisible: 'isOverviewVisible',
    istabbarvisible: 'isTabBarVisible',
    removewindow: 'removeWindow',
    selectedwindow: 'selectedWindow',
    windows: 'windows',
  }

  // readonly identifier: NSString;
  // isOverviewVisible: boolean;
  // readonly isTabBarVisible: boolean;
  // selectedWindow: NSWindow | null;
  // readonly windows: NSArray;
}

export class HTMLNSAccessibilityCustomRotorSearchParametersElement extends HTMLNSObjectElement {
  readonly nativeObject = NSAccessibilityCustomRotorSearchParameters.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    currentitem: 'currentItem',
    filterstring: 'filterString',
    searchdirection: 'searchDirection',
  }

  // currentItem: NSAccessibilityCustomRotorItemResult;
  // searchDirection: interop.Enum<typeof NSAccessibilityCustomRotorSearchDirection>;
}

export class HTMLNSFontManagerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSFontManager.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    action: 'action',
    addcollectionoptions: 'addCollectionOptions',
    addfontdescriptorstocollection: 'addFontDescriptorsToCollection',
    addfonttrait: 'addFontTrait',
    autorelease: 'autorelease',
    availablefontfamilies: 'availableFontFamilies',
    availablefontnamesmatchingfontdescriptor: 'availableFontNamesMatchingFontDescriptor',
    availablefontnameswithtraits: 'availableFontNamesWithTraits',
    availablefonts: 'availableFonts',
    availablemembersoffontfamily: 'availableMembersOfFontFamily',
    class: 'class',
    collectionnames: 'collectionNames',
    conformstoprotocol: 'conformsToProtocol',
    convertattributes: 'convertAttributes',
    convertfont: 'convertFont',
    convertfonttoface: 'convertFontToFace',
    convertfonttofamily: 'convertFontToFamily',
    convertfonttohavetrait: 'convertFontToHaveTrait',
    convertfonttonothavetrait: 'convertFontToNotHaveTrait',
    convertfonttosize: 'convertFontToSize',
    convertfonttraits: 'convertFontTraits',
    convertweightoffont: 'convertWeightOfFont',
    currentfontaction: 'currentFontAction',
    debugdescription: 'debugDescription',
    delegate: 'delegate',
    description: 'description',
    fontdescriptorsincollection: 'fontDescriptorsInCollection',
    fontmenu: 'fontMenu',
    fontnamedhastraits: 'fontNamedHasTraits',
    fontpanel: 'fontPanel',
    fontwithfamilytraitsweightsize: 'fontWithFamilyTraitsWeightSize',
    hash: 'hash',
    isenabled: 'isEnabled',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    ismultiple: 'isMultiple',
    isproxy: 'isProxy',
    localizednameforfamilyface: 'localizedNameForFamilyFace',
    modifyfont: 'modifyFont',
    modifyfontviapanel: 'modifyFontViaPanel',
    orderfrontfontpanel: 'orderFrontFontPanel',
    orderfrontstylespanel: 'orderFrontStylesPanel',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    release: 'release',
    removecollection: 'removeCollection',
    removefontdescriptorfromcollection: 'removeFontDescriptorFromCollection',
    removefonttrait: 'removeFontTrait',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    selectedfont: 'selectedFont',
    self: 'self',
    sendaction: 'sendAction',
    setfontmanagerfactory: 'setFontManagerFactory',
    setfontmenu: 'setFontMenu',
    setfontpanelfactory: 'setFontPanelFactory',
    setselectedattributesismultiple: 'setSelectedAttributesIsMultiple',
    setselectedfontismultiple: 'setSelectedFontIsMultiple',
    sharedfontmanager: 'sharedFontManager',
    superclass: 'superclass',
    target: 'target',
    traitsoffont: 'traitsOfFont',
    validatemenuitem: 'validateMenuItem',
    weightoffont: 'weightOfFont',
    zone: 'zone',
  }

  // action: string;
  // readonly availableFontFamilies: NSArray;
  // readonly availableFonts: NSArray;
  // readonly collectionNames: NSArray;
  // readonly currentFontAction: interop.Enum<typeof NSFontAction>;
  // readonly debugDescription: NSString;
  // delegate: interop.Object;
  // readonly description: NSString;
  // readonly hash: number;
  // isEnabled: boolean;
  // readonly isMultiple: boolean;
  // readonly isProxy: boolean;
  // readonly selectedFont: NSFont;
  // sharedFontManager: NSFontManager;
  // readonly superclass: interop.Object;
  // target: interop.Object;
  // readonly zone: interop.Pointer;
}

export class HTMLNSScrubberLayoutElement extends HTMLNSObjectElement {
  readonly nativeObject = NSScrubberLayout.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    automaticallymirrorsinrighttoleftlayout: 'automaticallyMirrorsInRightToLeftLayout',
    encodewithcoder: 'encodeWithCoder',
    init: 'init',
    initwithcoder: 'initWithCoder',
    invalidatelayout: 'invalidateLayout',
    layoutattributesclass: 'layoutAttributesClass',
    layoutattributesforitematindex: 'layoutAttributesForItemAtIndex',
    layoutattributesforitemsinrect: 'layoutAttributesForItemsInRect',
    preparelayout: 'prepareLayout',
    scrubber: 'scrubber',
    scrubbercontentsize: 'scrubberContentSize',
    shouldinvalidatelayoutforchangefromvisiblerecttovisiblerect: 'shouldInvalidateLayoutForChangeFromVisibleRectToVisibleRect',
    shouldinvalidatelayoutforhighlightchange: 'shouldInvalidateLayoutForHighlightChange',
    shouldinvalidatelayoutforselectionchange: 'shouldInvalidateLayoutForSelectionChange',
    visiblerect: 'visibleRect',
  }

  // readonly automaticallyMirrorsInRightToLeftLayout: boolean;
  // layoutAttributesClass: interop.Object;
  // readonly scrubber: NSScrubber;
  // readonly scrubberContentSize: CGSize;
  // readonly shouldInvalidateLayoutForHighlightChange: boolean;
  // readonly shouldInvalidateLayoutForSelectionChange: boolean;
  // readonly visibleRect: CGRect;
}

export class HTMLNSCollectionViewUpdateItemElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCollectionViewUpdateItem.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    indexpathafterupdate: 'indexPathAfterUpdate',
    indexpathbeforeupdate: 'indexPathBeforeUpdate',
    updateaction: 'updateAction',
  }

  // readonly indexPathAfterUpdate: NSIndexPath;
  // readonly indexPathBeforeUpdate: NSIndexPath;
  // readonly updateAction: interop.Enum<typeof NSCollectionUpdateAction>;
}

export class HTMLNSControllerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSController.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    autorelease: 'autorelease',
    class: 'class',
    commitediting: 'commitEditing',
    commiteditingandreturnerror: 'commitEditingAndReturnError',
    commiteditingwithdelegatedidcommitselectorcontextinfo: 'commitEditingWithDelegateDidCommitSelectorContextInfo',
    conformstoprotocol: 'conformsToProtocol',
    debugdescription: 'debugDescription',
    description: 'description',
    discardediting: 'discardEditing',
    encodewithcoder: 'encodeWithCoder',
    hash: 'hash',
    init: 'init',
    initwithcoder: 'initWithCoder',
    isediting: 'isEditing',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    objectdidbeginediting: 'objectDidBeginEditing',
    objectdidendediting: 'objectDidEndEditing',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    release: 'release',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    self: 'self',
    superclass: 'superclass',
    zone: 'zone',
  }

  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // readonly hash: number;
  // readonly isEditing: boolean;
  // readonly isProxy: boolean;
  // readonly superclass: interop.Object;
  // readonly zone: interop.Pointer;
}

export class HTMLNSHelpManagerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSHelpManager.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    contexthelpforobject: 'contextHelpForObject',
    findstringinbook: 'findStringInBook',
    iscontexthelpmodeactive: 'isContextHelpModeActive',
    openhelpanchorinbook: 'openHelpAnchorInBook',
    registerbooksinbundle: 'registerBooksInBundle',
    removecontexthelpforobject: 'removeContextHelpForObject',
    setcontexthelpforobject: 'setContextHelpForObject',
    sharedhelpmanager: 'sharedHelpManager',
    showcontexthelpforobjectlocationhint: 'showContextHelpForObjectLocationHint',
  }

  // isContextHelpModeActive: boolean;
  // sharedHelpManager: NSHelpManager;
}

export class HTMLNSOpenGLPixelFormatElement extends HTMLNSObjectElement {
  readonly nativeObject = NSOpenGLPixelFormat.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    attributes: 'attributes',
    cglpixelformatobj: 'CGLPixelFormatObj',
    encodewithcoder: 'encodeWithCoder',
    getvaluesforattributeforvirtualscreen: 'getValuesForAttributeForVirtualScreen',
    initwithattributes: 'initWithAttributes',
    initwithcglpixelformatobj: 'initWithCGLPixelFormatObj',
    initwithcoder: 'initWithCoder',
    initwithdata: 'initWithData',
    numberofvirtualscreens: 'numberOfVirtualScreens',
    setattributes: 'setAttributes',
  }

  // readonly CGLPixelFormatObj: interop.Pointer;
  // readonly numberOfVirtualScreens: number;
}

export class HTMLNSTextAttachmentElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextAttachment.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    allowstextattachmentview: 'allowsTextAttachmentView',
    attachmentboundsforattributeslocationtextcontainerproposedlinefragmentposition: 'attachmentBoundsForAttributesLocationTextContainerProposedLineFragmentPosition',
    attachmentboundsfortextcontainerproposedlinefragmentglyphpositioncharacterindex: 'attachmentBoundsForTextContainerProposedLineFragmentGlyphPositionCharacterIndex',
    attachmentcell: 'attachmentCell',
    autorelease: 'autorelease',
    bounds: 'bounds',
    class: 'class',
    conformstoprotocol: 'conformsToProtocol',
    contents: 'contents',
    debugdescription: 'debugDescription',
    description: 'description',
    encodewithcoder: 'encodeWithCoder',
    filetype: 'fileType',
    filewrapper: 'fileWrapper',
    hash: 'hash',
    image: 'image',
    imageforboundsattributeslocationtextcontainer: 'imageForBoundsAttributesLocationTextContainer',
    imageforboundstextcontainercharacterindex: 'imageForBoundsTextContainerCharacterIndex',
    initwithcoder: 'initWithCoder',
    initwithdataoftype: 'initWithDataOfType',
    initwithfilewrapper: 'initWithFileWrapper',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    linelayoutpadding: 'lineLayoutPadding',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    registertextattachmentviewproviderclassforfiletype: 'registerTextAttachmentViewProviderClassForFileType',
    release: 'release',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    self: 'self',
    superclass: 'superclass',
    supportssecurecoding: 'supportsSecureCoding',
    textattachmentviewproviderclassforfiletype: 'textAttachmentViewProviderClassForFileType',
    usestextattachmentview: 'usesTextAttachmentView',
    viewproviderforparentviewlocationtextcontainer: 'viewProviderForParentViewLocationTextContainer',
    zone: 'zone',
  }

  // allowsTextAttachmentView: boolean;
  // attachmentCell: NSTextAttachmentCell;
  // bounds: CGRect;
  // contents: NSData;
  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // fileWrapper: NSFileWrapper;
  // readonly hash: number;
  // image: NSImage;
  // readonly isProxy: boolean;
  // lineLayoutPadding: number;
  // readonly superclass: interop.Object;
  // supportsSecureCoding: boolean;
  // readonly usesTextAttachmentView: boolean;
  // readonly zone: interop.Pointer;
}

export class HTMLNSCollectionViewLayoutElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCollectionViewLayout.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    collectionview: 'collectionView',
    collectionviewcontentsize: 'collectionViewContentSize',
    encodewithcoder: 'encodeWithCoder',
    finalizeanimatedboundschange: 'finalizeAnimatedBoundsChange',
    finalizecollectionviewupdates: 'finalizeCollectionViewUpdates',
    finalizelayouttransition: 'finalizeLayoutTransition',
    finallayoutattributesfordisappearingdecorationelementofkindatindexpath: 'finalLayoutAttributesForDisappearingDecorationElementOfKindAtIndexPath',
    finallayoutattributesfordisappearingitematindexpath: 'finalLayoutAttributesForDisappearingItemAtIndexPath',
    finallayoutattributesfordisappearingsupplementaryelementofkindatindexpath: 'finalLayoutAttributesForDisappearingSupplementaryElementOfKindAtIndexPath',
    indexpathstodeletefordecorationviewofkind: 'indexPathsToDeleteForDecorationViewOfKind',
    indexpathstodeleteforsupplementaryviewofkind: 'indexPathsToDeleteForSupplementaryViewOfKind',
    indexpathstoinsertfordecorationviewofkind: 'indexPathsToInsertForDecorationViewOfKind',
    indexpathstoinsertforsupplementaryviewofkind: 'indexPathsToInsertForSupplementaryViewOfKind',
    initiallayoutattributesforappearingdecorationelementofkindatindexpath: 'initialLayoutAttributesForAppearingDecorationElementOfKindAtIndexPath',
    initiallayoutattributesforappearingitematindexpath: 'initialLayoutAttributesForAppearingItemAtIndexPath',
    initiallayoutattributesforappearingsupplementaryelementofkindatindexpath: 'initialLayoutAttributesForAppearingSupplementaryElementOfKindAtIndexPath',
    initwithcoder: 'initWithCoder',
    invalidatelayout: 'invalidateLayout',
    invalidatelayoutwithcontext: 'invalidateLayoutWithContext',
    invalidationcontextclass: 'invalidationContextClass',
    invalidationcontextforboundschange: 'invalidationContextForBoundsChange',
    invalidationcontextforpreferredlayoutattributeswithoriginalattributes: 'invalidationContextForPreferredLayoutAttributesWithOriginalAttributes',
    layoutattributesclass: 'layoutAttributesClass',
    layoutattributesfordecorationviewofkindatindexpath: 'layoutAttributesForDecorationViewOfKindAtIndexPath',
    layoutattributesfordroptargetatpoint: 'layoutAttributesForDropTargetAtPoint',
    layoutattributesforelementsinrect: 'layoutAttributesForElementsInRect',
    layoutattributesforinteritemgapbeforeindexpath: 'layoutAttributesForInterItemGapBeforeIndexPath',
    layoutattributesforitematindexpath: 'layoutAttributesForItemAtIndexPath',
    layoutattributesforsupplementaryviewofkindatindexpath: 'layoutAttributesForSupplementaryViewOfKindAtIndexPath',
    prepareforanimatedboundschange: 'prepareForAnimatedBoundsChange',
    prepareforcollectionviewupdates: 'prepareForCollectionViewUpdates',
    preparefortransitionfromlayout: 'prepareForTransitionFromLayout',
    preparefortransitiontolayout: 'prepareForTransitionToLayout',
    preparelayout: 'prepareLayout',
    registerclassfordecorationviewofkind: 'registerClassForDecorationViewOfKind',
    registernibfordecorationviewofkind: 'registerNibForDecorationViewOfKind',
    shouldinvalidatelayoutforboundschange: 'shouldInvalidateLayoutForBoundsChange',
    shouldinvalidatelayoutforpreferredlayoutattributeswithoriginalattributes: 'shouldInvalidateLayoutForPreferredLayoutAttributesWithOriginalAttributes',
    targetcontentoffsetforproposedcontentoffset: 'targetContentOffsetForProposedContentOffset',
    targetcontentoffsetforproposedcontentoffsetwithscrollingvelocity: 'targetContentOffsetForProposedContentOffsetWithScrollingVelocity',
  }

  // readonly collectionView: NSCollectionView;
  // readonly collectionViewContentSize: CGSize;
  // invalidationContextClass: interop.Object;
  // layoutAttributesClass: interop.Object;
}

export class HTMLNSPasteboardItemElement extends HTMLNSObjectElement {
  readonly nativeObject = NSPasteboardItem.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    autorelease: 'autorelease',
    availabletypefromarray: 'availableTypeFromArray',
    class: 'class',
    conformstoprotocol: 'conformsToProtocol',
    datafortype: 'dataForType',
    debugdescription: 'debugDescription',
    description: 'description',
    hash: 'hash',
    initwithpasteboardpropertylistoftype: 'initWithPasteboardPropertyListOfType',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    pasteboardpropertylistfortype: 'pasteboardPropertyListForType',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    propertylistfortype: 'propertyListForType',
    readabletypesforpasteboard: 'readableTypesForPasteboard',
    readingoptionsfortypepasteboard: 'readingOptionsForTypePasteboard',
    release: 'release',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    self: 'self',
    setdatafortype: 'setDataForType',
    setdataproviderfortypes: 'setDataProviderForTypes',
    setpropertylistfortype: 'setPropertyListForType',
    setstringfortype: 'setStringForType',
    stringfortype: 'stringForType',
    superclass: 'superclass',
    types: 'types',
    writabletypesforpasteboard: 'writableTypesForPasteboard',
    writingoptionsfortypepasteboard: 'writingOptionsForTypePasteboard',
    zone: 'zone',
  }

  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // readonly hash: number;
  // readonly isProxy: boolean;
  // readonly superclass: interop.Object;
  // readonly types: NSArray;
  // readonly zone: interop.Pointer;
}

export class HTMLNSScrubberFlowLayoutElement extends HTMLNSScrubberLayoutElement {
  readonly nativeObject = NSScrubberFlowLayout.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    invalidatelayoutforitemsatindexes: 'invalidateLayoutForItemsAtIndexes',
    itemsize: 'itemSize',
    itemspacing: 'itemSpacing',
  }

  // itemSize: CGSize;
  // itemSpacing: number;
}

export class HTMLNSTextElementElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextElement.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    childelements: 'childElements',
    elementrange: 'elementRange',
    initwithtextcontentmanager: 'initWithTextContentManager',
    isrepresentedelement: 'isRepresentedElement',
    parentelement: 'parentElement',
    textcontentmanager: 'textContentManager',
  }

  // readonly childElements: NSArray;
  // elementRange: NSTextRange;
  // readonly isRepresentedElement: boolean;
  // readonly parentElement: NSTextElement;
  // textContentManager: NSTextContentManager;
}

export class HTMLNSTextSelectionNavigationElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextSelectionNavigation.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    allowsnoncontiguousranges: 'allowsNonContiguousRanges',
    deletionrangesfortextselectiondirectiondestinationallowsdecomposition: 'deletionRangesForTextSelectionDirectionDestinationAllowsDecomposition',
    destinationselectionfortextselectiondirectiondestinationextendingconfined: 'destinationSelectionForTextSelectionDirectionDestinationExtendingConfined',
    flushlayoutcache: 'flushLayoutCache',
    initwithdatasource: 'initWithDataSource',
    resolvedinsertionlocationfortextselectionwritingdirection: 'resolvedInsertionLocationForTextSelectionWritingDirection',
    rotatescoordinatesystemforlayoutorientation: 'rotatesCoordinateSystemForLayoutOrientation',
    textselectiondatasource: 'textSelectionDataSource',
    textselectionforselectiongranularityenclosingpointincontaineratlocation: 'textSelectionForSelectionGranularityEnclosingPointInContainerAtLocation',
    textselectionforselectiongranularityenclosingtextselection: 'textSelectionForSelectionGranularityEnclosingTextSelection',
    textselectionsinteractingatpointincontaineratlocationanchorsmodifiersselectingbounds: 'textSelectionsInteractingAtPointInContainerAtLocationAnchorsModifiersSelectingBounds',
  }

  // allowsNonContiguousRanges: boolean;
  // rotatesCoordinateSystemForLayoutOrientation: boolean;
  // readonly textSelectionDataSource: NSTextSelectionDataSource | null;
}

export class HTMLNSTextRangeElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextRange.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    containslocation: 'containsLocation',
    containsrange: 'containsRange',
    endlocation: 'endLocation',
    initwithlocation: 'initWithLocation',
    initwithlocationendlocation: 'initWithLocationEndLocation',
    intersectswithtextrange: 'intersectsWithTextRange',
    isempty: 'isEmpty',
    isequaltotextrange: 'isEqualToTextRange',
    location: 'location',
    textrangebyformingunionwithtextrange: 'textRangeByFormingUnionWithTextRange',
    textrangebyintersectingwithtextrange: 'textRangeByIntersectingWithTextRange',
  }

  // readonly endLocation: NSTextLocation;
  // readonly isEmpty: boolean;
  // readonly location: NSTextLocation;
}

export class HTMLNSPressureConfigurationElement extends HTMLNSObjectElement {
  readonly nativeObject = NSPressureConfiguration.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    initwithpressurebehavior: 'initWithPressureBehavior',
    pressurebehavior: 'pressureBehavior',
    set: 'set',
  }

  // readonly pressureBehavior: interop.Enum<typeof NSPressureBehavior>;
}

export class HTMLNSHapticFeedbackManagerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSHapticFeedbackManager.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    defaultperformer: 'defaultPerformer',
  }

  // defaultPerformer: NSHapticFeedbackPerformer;
}

export class HTMLNSTextBlockElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextBlock.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    backgroundcolor: 'backgroundColor',
    bordercolorforedge: 'borderColorForEdge',
    boundsrectforcontentrectinrecttextcontainercharacterrange: 'boundsRectForContentRectInRectTextContainerCharacterRange',
    contentwidth: 'contentWidth',
    contentwidthvaluetype: 'contentWidthValueType',
    copywithzone: 'copyWithZone',
    drawbackgroundwithframeinviewcharacterrangelayoutmanager: 'drawBackgroundWithFrameInViewCharacterRangeLayoutManager',
    encodewithcoder: 'encodeWithCoder',
    init: 'init',
    initwithcoder: 'initWithCoder',
    rectforlayoutatpointinrecttextcontainercharacterrange: 'rectForLayoutAtPointInRectTextContainerCharacterRange',
    setbordercolor: 'setBorderColor',
    setbordercolorforedge: 'setBorderColorForEdge',
    setcontentwidthtype: 'setContentWidthType',
    setvaluetypefordimension: 'setValueTypeForDimension',
    setwidthtypeforlayer: 'setWidthTypeForLayer',
    setwidthtypeforlayeredge: 'setWidthTypeForLayerEdge',
    supportssecurecoding: 'supportsSecureCoding',
    valuefordimension: 'valueForDimension',
    valuetypefordimension: 'valueTypeForDimension',
    verticalalignment: 'verticalAlignment',
    widthforlayeredge: 'widthForLayerEdge',
    widthvaluetypeforlayeredge: 'widthValueTypeForLayerEdge',
  }

  // backgroundColor: NSColor;
  // readonly contentWidth: number;
  // readonly contentWidthValueType: interop.Enum<typeof NSTextBlockValueType>;
  // supportsSecureCoding: boolean;
  // verticalAlignment: interop.Enum<typeof NSTextBlockVerticalAlignment>;
}

export class HTMLNSTextListElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextList.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    copywithzone: 'copyWithZone',
    encodewithcoder: 'encodeWithCoder',
    initwithcoder: 'initWithCoder',
    initwithmarkerformatoptions: 'initWithMarkerFormatOptions',
    initwithmarkerformatoptionsstartingitemnumber: 'initWithMarkerFormatOptionsStartingItemNumber',
    isordered: 'isOrdered',
    listoptions: 'listOptions',
    markerforitemnumber: 'markerForItemNumber',
    markerformat: 'markerFormat',
    startingitemnumber: 'startingItemNumber',
    supportssecurecoding: 'supportsSecureCoding',
  }

  // readonly isOrdered: boolean;
  // readonly listOptions: interop.Enum<typeof NSTextListOptions>;
  // readonly markerFormat: NSString;
  // startingItemNumber: number;
  // supportsSecureCoding: boolean;
}

export class HTMLNSTreeNodeElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTreeNode.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    childnodes: 'childNodes',
    descendantnodeatindexpath: 'descendantNodeAtIndexPath',
    indexpath: 'indexPath',
    initwithrepresentedobject: 'initWithRepresentedObject',
    isleaf: 'isLeaf',
    mutablechildnodes: 'mutableChildNodes',
    parentnode: 'parentNode',
    representedobject: 'representedObject',
    sortwithsortdescriptorsrecursively: 'sortWithSortDescriptorsRecursively',
    treenodewithrepresentedobject: 'treeNodeWithRepresentedObject',
  }

  // readonly childNodes: NSArray;
  // readonly indexPath: NSIndexPath;
  // readonly isLeaf: boolean;
  // readonly mutableChildNodes: NSMutableArray;
  // readonly parentNode: NSTreeNode;
  // readonly representedObject: interop.Object;
}

export class HTMLNSObjectControllerElement extends HTMLNSControllerElement {
  readonly nativeObject = NSObjectController.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    add: 'add',
    addobject: 'addObject',
    automaticallypreparescontent: 'automaticallyPreparesContent',
    canadd: 'canAdd',
    canremove: 'canRemove',
    content: 'content',
    defaultfetchrequest: 'defaultFetchRequest',
    entityname: 'entityName',
    fetch: 'fetch',
    fetchpredicate: 'fetchPredicate',
    fetchwithrequestmergeerror: 'fetchWithRequestMergeError',
    initwithcoder: 'initWithCoder',
    initwithcontent: 'initWithContent',
    iseditable: 'isEditable',
    managedobjectcontext: 'managedObjectContext',
    newobject: 'newObject',
    objectclass: 'objectClass',
    preparecontent: 'prepareContent',
    remove: 'remove',
    removeobject: 'removeObject',
    selectedobjects: 'selectedObjects',
    selection: 'selection',
    useslazyfetching: 'usesLazyFetching',
    validateuserinterfaceitem: 'validateUserInterfaceItem',
  }

  // automaticallyPreparesContent: boolean;
  // readonly canAdd: boolean;
  // readonly canRemove: boolean;
  // content: interop.Object;
  // fetchPredicate: NSPredicate;
  // isEditable: boolean;
  // managedObjectContext: NSManagedObjectContext;
  // objectClass: interop.Object;
  // readonly selectedObjects: NSArray;
  // readonly selection: interop.Object;
  // usesLazyFetching: boolean;
}

export class HTMLNSGlyphInfoElement extends HTMLNSObjectElement {
  readonly nativeObject = NSGlyphInfo.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    basestring: 'baseString',
    charactercollection: 'characterCollection',
    characteridentifier: 'characterIdentifier',
    copywithzone: 'copyWithZone',
    encodewithcoder: 'encodeWithCoder',
    glyphid: 'glyphID',
    glyphinfowithcgglyphforfontbasestring: 'glyphInfoWithCGGlyphForFontBaseString',
    glyphinfowithcharacteridentifiercollectionbasestring: 'glyphInfoWithCharacterIdentifierCollectionBaseString',
    glyphinfowithglyphforfontbasestring: 'glyphInfoWithGlyphForFontBaseString',
    glyphinfowithglyphnameforfontbasestring: 'glyphInfoWithGlyphNameForFontBaseString',
    glyphname: 'glyphName',
    initwithcoder: 'initWithCoder',
    supportssecurecoding: 'supportsSecureCoding',
  }

  // readonly baseString: NSString;
  // readonly characterCollection: interop.Enum<typeof NSCharacterCollection>;
  // readonly characterIdentifier: number;
  // readonly glyphID: number;
  // readonly glyphName: NSString;
  // supportsSecureCoding: boolean;
}

export class HTMLNSTableViewDiffableDataSourceElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTableViewDiffableDataSource.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    applysnapshotanimatingdifferences: 'applySnapshotAnimatingDifferences',
    applysnapshotanimatingdifferencescompletion: 'applySnapshotAnimatingDifferencesCompletion',
    autorelease: 'autorelease',
    class: 'class',
    conformstoprotocol: 'conformsToProtocol',
    debugdescription: 'debugDescription',
    defaultrowanimation: 'defaultRowAnimation',
    description: 'description',
    hash: 'hash',
    initwithtableviewcellprovider: 'initWithTableViewCellProvider',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    itemidentifierforrow: 'itemIdentifierForRow',
    numberofrowsintableview: 'numberOfRowsInTableView',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    release: 'release',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    rowforitemidentifier: 'rowForItemIdentifier',
    rowforsectionidentifier: 'rowForSectionIdentifier',
    rowviewprovider: 'rowViewProvider',
    sectionheaderviewprovider: 'sectionHeaderViewProvider',
    sectionidentifierforrow: 'sectionIdentifierForRow',
    self: 'self',
    snapshot: 'snapshot',
    superclass: 'superclass',
    tableviewacceptdroprowdropoperation: 'tableViewAcceptDropRowDropOperation',
    tableviewdraggingsessionendedatpointoperation: 'tableViewDraggingSessionEndedAtPointOperation',
    tableviewdraggingsessionwillbeginatpointforrowindexes: 'tableViewDraggingSessionWillBeginAtPointForRowIndexes',
    tableviewnamesofpromisedfilesdroppedatdestinationfordraggedrowswithindexes: 'tableViewNamesOfPromisedFilesDroppedAtDestinationForDraggedRowsWithIndexes',
    tableviewobjectvaluefortablecolumnrow: 'tableViewObjectValueForTableColumnRow',
    tableviewpasteboardwriterforrow: 'tableViewPasteboardWriterForRow',
    tableviewsetobjectvaluefortablecolumnrow: 'tableViewSetObjectValueForTableColumnRow',
    tableviewsortdescriptorsdidchange: 'tableViewSortDescriptorsDidChange',
    tableviewupdatedraggingitemsfordrag: 'tableViewUpdateDraggingItemsForDrag',
    tableviewvalidatedropproposedrowproposeddropoperation: 'tableViewValidateDropProposedRowProposedDropOperation',
    tableviewwriterowswithindexestopasteboard: 'tableViewWriteRowsWithIndexesToPasteboard',
    zone: 'zone',
  }

  // readonly debugDescription: NSString;
  // defaultRowAnimation: interop.Enum<typeof NSTableViewAnimationOptions>;
  // readonly description: NSString;
  // readonly hash: number;
  // readonly isProxy: boolean;
  // rowViewProvider: (p1: NSTableView, p2: number, p3: interop.Object) => NSTableRowView;
  // sectionHeaderViewProvider: (p1: NSTableView, p2: number, p3: interop.Object) => NSView;
  // readonly superclass: interop.Object;
  // readonly zone: interop.Pointer;
}

export class HTMLNSOpenGLPixelBufferElement extends HTMLNSObjectElement {
  readonly nativeObject = NSOpenGLPixelBuffer.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    cglpbufferobj: 'CGLPBufferObj',
    initwithcglpbufferobj: 'initWithCGLPBufferObj',
    initwithtexturetargettextureinternalformattexturemaxmipmaplevelpixelswidepixelshigh: 'initWithTextureTargetTextureInternalFormatTextureMaxMipMapLevelPixelsWidePixelsHigh',
    pixelshigh: 'pixelsHigh',
    pixelswide: 'pixelsWide',
    textureinternalformat: 'textureInternalFormat',
    texturemaxmipmaplevel: 'textureMaxMipMapLevel',
    texturetarget: 'textureTarget',
  }

  // readonly CGLPBufferObj: interop.Pointer;
  // readonly pixelsHigh: number;
  // readonly pixelsWide: number;
  // readonly textureInternalFormat: number;
  // readonly textureMaxMipMapLevel: number;
  // readonly textureTarget: number;
}

export class HTMLNSCellElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCell.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    acceptsfirstresponder: 'acceptsFirstResponder',
    accessibilityactivationpoint: 'accessibilityActivationPoint',
    accessibilityallowedvalues: 'accessibilityAllowedValues',
    accessibilityapplicationfocuseduielement: 'accessibilityApplicationFocusedUIElement',
    accessibilityattributedstringforrange: 'accessibilityAttributedStringForRange',
    accessibilityattributeduserinputlabels: 'accessibilityAttributedUserInputLabels',
    accessibilitycancelbutton: 'accessibilityCancelButton',
    accessibilitycellforcolumnrow: 'accessibilityCellForColumnRow',
    accessibilitychildren: 'accessibilityChildren',
    accessibilitychildreninnavigationorder: 'accessibilityChildrenInNavigationOrder',
    accessibilityclearbutton: 'accessibilityClearButton',
    accessibilityclosebutton: 'accessibilityCloseButton',
    accessibilitycolumncount: 'accessibilityColumnCount',
    accessibilitycolumnheaderuielements: 'accessibilityColumnHeaderUIElements',
    accessibilitycolumnindexrange: 'accessibilityColumnIndexRange',
    accessibilitycolumns: 'accessibilityColumns',
    accessibilitycolumntitles: 'accessibilityColumnTitles',
    accessibilitycontents: 'accessibilityContents',
    accessibilitycriticalvalue: 'accessibilityCriticalValue',
    accessibilitycustomactions: 'accessibilityCustomActions',
    accessibilitycustomrotors: 'accessibilityCustomRotors',
    accessibilitydecrementbutton: 'accessibilityDecrementButton',
    accessibilitydefaultbutton: 'accessibilityDefaultButton',
    accessibilitydisclosedbyrow: 'accessibilityDisclosedByRow',
    accessibilitydisclosedrows: 'accessibilityDisclosedRows',
    accessibilitydisclosurelevel: 'accessibilityDisclosureLevel',
    accessibilitydocument: 'accessibilityDocument',
    accessibilityextrasmenubar: 'accessibilityExtrasMenuBar',
    accessibilityfilename: 'accessibilityFilename',
    accessibilityfocusedwindow: 'accessibilityFocusedWindow',
    accessibilityframe: 'accessibilityFrame',
    accessibilityframeforrange: 'accessibilityFrameForRange',
    accessibilityfullscreenbutton: 'accessibilityFullScreenButton',
    accessibilitygrowarea: 'accessibilityGrowArea',
    accessibilityhandles: 'accessibilityHandles',
    accessibilityheader: 'accessibilityHeader',
    accessibilityhelp: 'accessibilityHelp',
    accessibilityhorizontalscrollbar: 'accessibilityHorizontalScrollBar',
    accessibilityhorizontalunitdescription: 'accessibilityHorizontalUnitDescription',
    accessibilityhorizontalunits: 'accessibilityHorizontalUnits',
    accessibilityidentifier: 'accessibilityIdentifier',
    accessibilityincrementbutton: 'accessibilityIncrementButton',
    accessibilityindex: 'accessibilityIndex',
    accessibilityinsertionpointlinenumber: 'accessibilityInsertionPointLineNumber',
    accessibilitylabel: 'accessibilityLabel',
    accessibilitylabeluielements: 'accessibilityLabelUIElements',
    accessibilitylabelvalue: 'accessibilityLabelValue',
    accessibilitylayoutpointforscreenpoint: 'accessibilityLayoutPointForScreenPoint',
    accessibilitylayoutsizeforscreensize: 'accessibilityLayoutSizeForScreenSize',
    accessibilitylineforindex: 'accessibilityLineForIndex',
    accessibilitylinkeduielements: 'accessibilityLinkedUIElements',
    accessibilitymainwindow: 'accessibilityMainWindow',
    accessibilitymarkergroupuielement: 'accessibilityMarkerGroupUIElement',
    accessibilitymarkertypedescription: 'accessibilityMarkerTypeDescription',
    accessibilitymarkeruielements: 'accessibilityMarkerUIElements',
    accessibilitymarkervalues: 'accessibilityMarkerValues',
    accessibilitymaxvalue: 'accessibilityMaxValue',
    accessibilitymenubar: 'accessibilityMenuBar',
    accessibilityminimizebutton: 'accessibilityMinimizeButton',
    accessibilityminvalue: 'accessibilityMinValue',
    accessibilitynextcontents: 'accessibilityNextContents',
    accessibilitynumberofcharacters: 'accessibilityNumberOfCharacters',
    accessibilityorientation: 'accessibilityOrientation',
    accessibilityoverflowbutton: 'accessibilityOverflowButton',
    accessibilityparent: 'accessibilityParent',
    accessibilityperformcancel: 'accessibilityPerformCancel',
    accessibilityperformconfirm: 'accessibilityPerformConfirm',
    accessibilityperformdecrement: 'accessibilityPerformDecrement',
    accessibilityperformdelete: 'accessibilityPerformDelete',
    accessibilityperformincrement: 'accessibilityPerformIncrement',
    accessibilityperformpick: 'accessibilityPerformPick',
    accessibilityperformpress: 'accessibilityPerformPress',
    accessibilityperformraise: 'accessibilityPerformRaise',
    accessibilityperformshowalternateui: 'accessibilityPerformShowAlternateUI',
    accessibilityperformshowdefaultui: 'accessibilityPerformShowDefaultUI',
    accessibilityperformshowmenu: 'accessibilityPerformShowMenu',
    accessibilityplaceholdervalue: 'accessibilityPlaceholderValue',
    accessibilitypreviouscontents: 'accessibilityPreviousContents',
    accessibilityproxy: 'accessibilityProxy',
    accessibilityrangeforindex: 'accessibilityRangeForIndex',
    accessibilityrangeforline: 'accessibilityRangeForLine',
    accessibilityrangeforposition: 'accessibilityRangeForPosition',
    accessibilityrole: 'accessibilityRole',
    accessibilityroledescription: 'accessibilityRoleDescription',
    accessibilityrowcount: 'accessibilityRowCount',
    accessibilityrowheaderuielements: 'accessibilityRowHeaderUIElements',
    accessibilityrowindexrange: 'accessibilityRowIndexRange',
    accessibilityrows: 'accessibilityRows',
    accessibilityrtfforrange: 'accessibilityRTFForRange',
    accessibilityrulermarkertype: 'accessibilityRulerMarkerType',
    accessibilityscreenpointforlayoutpoint: 'accessibilityScreenPointForLayoutPoint',
    accessibilityscreensizeforlayoutsize: 'accessibilityScreenSizeForLayoutSize',
    accessibilitysearchbutton: 'accessibilitySearchButton',
    accessibilitysearchmenu: 'accessibilitySearchMenu',
    accessibilityselectedcells: 'accessibilitySelectedCells',
    accessibilityselectedchildren: 'accessibilitySelectedChildren',
    accessibilityselectedcolumns: 'accessibilitySelectedColumns',
    accessibilityselectedrows: 'accessibilitySelectedRows',
    accessibilityselectedtext: 'accessibilitySelectedText',
    accessibilityselectedtextrange: 'accessibilitySelectedTextRange',
    accessibilityselectedtextranges: 'accessibilitySelectedTextRanges',
    accessibilityservesastitleforuielements: 'accessibilityServesAsTitleForUIElements',
    accessibilitysharedcharacterrange: 'accessibilitySharedCharacterRange',
    accessibilitysharedfocuselements: 'accessibilitySharedFocusElements',
    accessibilitysharedtextuielements: 'accessibilitySharedTextUIElements',
    accessibilityshownmenu: 'accessibilityShownMenu',
    accessibilitysortdirection: 'accessibilitySortDirection',
    accessibilitysplitters: 'accessibilitySplitters',
    accessibilitystringforrange: 'accessibilityStringForRange',
    accessibilitystylerangeforindex: 'accessibilityStyleRangeForIndex',
    accessibilitysubrole: 'accessibilitySubrole',
    accessibilitytabs: 'accessibilityTabs',
    accessibilitytitle: 'accessibilityTitle',
    accessibilitytitleuielement: 'accessibilityTitleUIElement',
    accessibilitytoolbarbutton: 'accessibilityToolbarButton',
    accessibilitytopleveluielement: 'accessibilityTopLevelUIElement',
    accessibilityunitdescription: 'accessibilityUnitDescription',
    accessibilityunits: 'accessibilityUnits',
    accessibilityurl: 'accessibilityURL',
    accessibilityuserinputlabels: 'accessibilityUserInputLabels',
    accessibilityvalue: 'accessibilityValue',
    accessibilityvaluedescription: 'accessibilityValueDescription',
    accessibilityverticalscrollbar: 'accessibilityVerticalScrollBar',
    accessibilityverticalunitdescription: 'accessibilityVerticalUnitDescription',
    accessibilityverticalunits: 'accessibilityVerticalUnits',
    accessibilityvisiblecells: 'accessibilityVisibleCells',
    accessibilityvisiblecharacterrange: 'accessibilityVisibleCharacterRange',
    accessibilityvisiblechildren: 'accessibilityVisibleChildren',
    accessibilityvisiblecolumns: 'accessibilityVisibleColumns',
    accessibilityvisiblerows: 'accessibilityVisibleRows',
    accessibilitywarningvalue: 'accessibilityWarningValue',
    accessibilitywindow: 'accessibilityWindow',
    accessibilitywindows: 'accessibilityWindows',
    accessibilityzoombutton: 'accessibilityZoomButton',
    action: 'action',
    alignment: 'alignment',
    allowseditingtextattributes: 'allowsEditingTextAttributes',
    allowsmixedstate: 'allowsMixedState',
    allowsundo: 'allowsUndo',
    attributedstringvalue: 'attributedStringValue',
    autorelease: 'autorelease',
    backgroundstyle: 'backgroundStyle',
    basewritingdirection: 'baseWritingDirection',
    calcdrawinfo: 'calcDrawInfo',
    cellattribute: 'cellAttribute',
    cellsize: 'cellSize',
    cellsizeforbounds: 'cellSizeForBounds',
    class: 'class',
    compare: 'compare',
    conformstoprotocol: 'conformsToProtocol',
    continuetrackingatinview: 'continueTrackingAtInView',
    controlsize: 'controlSize',
    controltint: 'controlTint',
    controlview: 'controlView',
    copywithzone: 'copyWithZone',
    debugdescription: 'debugDescription',
    defaultfocusringtype: 'defaultFocusRingType',
    defaultmenu: 'defaultMenu',
    description: 'description',
    doublevalue: 'doubleValue',
    draggingimagecomponentswithframeinview: 'draggingImageComponentsWithFrameInView',
    drawfocusringmaskwithframeinview: 'drawFocusRingMaskWithFrameInView',
    drawingrectforbounds: 'drawingRectForBounds',
    drawinteriorwithframeinview: 'drawInteriorWithFrameInView',
    drawwithexpansionframeinview: 'drawWithExpansionFrameInView',
    drawwithframeinview: 'drawWithFrameInView',
    editwithframeinvieweditordelegateevent: 'editWithFrameInViewEditorDelegateEvent',
    encodewithcoder: 'encodeWithCoder',
    endediting: 'endEditing',
    entrytype: 'entryType',
    expansionframewithframeinview: 'expansionFrameWithFrameInView',
    fieldeditorforview: 'fieldEditorForView',
    floatvalue: 'floatValue',
    focusringmaskboundsforframeinview: 'focusRingMaskBoundsForFrameInView',
    focusringtype: 'focusRingType',
    font: 'font',
    formatter: 'formatter',
    getperiodicdelayinterval: 'getPeriodicDelayInterval',
    hash: 'hash',
    hasvalidobjectvalue: 'hasValidObjectValue',
    highlightcolorwithframeinview: 'highlightColorWithFrameInView',
    highlightwithframeinview: 'highlightWithFrameInView',
    hittestforeventinrectofview: 'hitTestForEventInRectOfView',
    identifier: 'identifier',
    image: 'image',
    imagerectforbounds: 'imageRectForBounds',
    importsgraphics: 'importsGraphics',
    init: 'init',
    initimagecell: 'initImageCell',
    inittextcell: 'initTextCell',
    initwithcoder: 'initWithCoder',
    integervalue: 'integerValue',
    interiorbackgroundstyle: 'interiorBackgroundStyle',
    intvalue: 'intValue',
    isaccessibilityalternateuivisible: 'isAccessibilityAlternateUIVisible',
    isaccessibilitydisclosed: 'isAccessibilityDisclosed',
    isaccessibilityedited: 'isAccessibilityEdited',
    isaccessibilityelement: 'isAccessibilityElement',
    isaccessibilityenabled: 'isAccessibilityEnabled',
    isaccessibilityexpanded: 'isAccessibilityExpanded',
    isaccessibilityfocused: 'isAccessibilityFocused',
    isaccessibilityfrontmost: 'isAccessibilityFrontmost',
    isaccessibilityhidden: 'isAccessibilityHidden',
    isaccessibilitymain: 'isAccessibilityMain',
    isaccessibilityminimized: 'isAccessibilityMinimized',
    isaccessibilitymodal: 'isAccessibilityModal',
    isaccessibilityorderedbyrow: 'isAccessibilityOrderedByRow',
    isaccessibilityprotectedcontent: 'isAccessibilityProtectedContent',
    isaccessibilityrequired: 'isAccessibilityRequired',
    isaccessibilityselected: 'isAccessibilitySelected',
    isaccessibilityselectorallowed: 'isAccessibilitySelectorAllowed',
    isbezeled: 'isBezeled',
    isbordered: 'isBordered',
    iscontinuous: 'isContinuous',
    iseditable: 'isEditable',
    isenabled: 'isEnabled',
    isentryacceptable: 'isEntryAcceptable',
    isequal: 'isEqual',
    ishighlighted: 'isHighlighted',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isopaque: 'isOpaque',
    isproxy: 'isProxy',
    isscrollable: 'isScrollable',
    isselectable: 'isSelectable',
    keyequivalent: 'keyEquivalent',
    linebreakmode: 'lineBreakMode',
    menu: 'menu',
    menuforeventinrectofview: 'menuForEventInRectOfView',
    mnemonic: 'mnemonic',
    mnemoniclocation: 'mnemonicLocation',
    mousedownflags: 'mouseDownFlags',
    nextstate: 'nextState',
    objectvalue: 'objectValue',
    performclick: 'performClick',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    preferstrackinguntilmouseup: 'prefersTrackingUntilMouseUp',
    refusesfirstresponder: 'refusesFirstResponder',
    release: 'release',
    representedobject: 'representedObject',
    resetcursorrectinview: 'resetCursorRectInView',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    selectwithframeinvieweditordelegatestartlength: 'selectWithFrameInViewEditorDelegateStartLength',
    self: 'self',
    sendactionon: 'sendActionOn',
    sendsactiononendediting: 'sendsActionOnEndEditing',
    setcellattributeto: 'setCellAttributeTo',
    setentrytype: 'setEntryType',
    setfloatingpointformatleftright: 'setFloatingPointFormatLeftRight',
    setmnemoniclocation: 'setMnemonicLocation',
    settitlewithmnemonic: 'setTitleWithMnemonic',
    setupfieldeditorattributes: 'setUpFieldEditorAttributes',
    showsfirstresponder: 'showsFirstResponder',
    starttrackingatinview: 'startTrackingAtInView',
    state: 'state',
    stoptrackingatinviewmouseisup: 'stopTrackingAtInViewMouseIsUp',
    stringvalue: 'stringValue',
    superclass: 'superclass',
    tag: 'tag',
    takedoublevaluefrom: 'takeDoubleValueFrom',
    takefloatvaluefrom: 'takeFloatValueFrom',
    takeintegervaluefrom: 'takeIntegerValueFrom',
    takeintvaluefrom: 'takeIntValueFrom',
    takeobjectvaluefrom: 'takeObjectValueFrom',
    takestringvaluefrom: 'takeStringValueFrom',
    target: 'target',
    title: 'title',
    titlerectforbounds: 'titleRectForBounds',
    trackmouseinrectofviewuntilmouseup: 'trackMouseInRectOfViewUntilMouseUp',
    truncateslastvisibleline: 'truncatesLastVisibleLine',
    type: 'type',
    userinterfacelayoutdirection: 'userInterfaceLayoutDirection',
    usessinglelinemode: 'usesSingleLineMode',
    wantsnotificationformarkedtext: 'wantsNotificationForMarkedText',
    wraps: 'wraps',
    zone: 'zone',
  }

  // readonly acceptsFirstResponder: boolean;
  // accessibilityActivationPoint: CGPoint;
  // accessibilityApplicationFocusedUIElement: interop.Object;
  // accessibilityCancelButton: interop.Object;
  // accessibilityClearButton: interop.Object;
  // accessibilityCloseButton: interop.Object;
  // accessibilityColumnCount: number;
  // accessibilityColumnIndexRange: _NSRange;
  // accessibilityCriticalValue: interop.Object;
  // accessibilityDecrementButton: interop.Object;
  // accessibilityDefaultButton: interop.Object;
  // accessibilityDisclosedByRow: interop.Object;
  // accessibilityDisclosedRows: interop.Object;
  // accessibilityDisclosureLevel: number;
  // accessibilityExtrasMenuBar: interop.Object;
  // accessibilityFocusedWindow: interop.Object;
  // accessibilityFrame: CGRect;
  // accessibilityFullScreenButton: interop.Object;
  // accessibilityGrowArea: interop.Object;
  // accessibilityHeader: interop.Object;
  // accessibilityHorizontalScrollBar: interop.Object;
  // accessibilityHorizontalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityIncrementButton: interop.Object;
  // accessibilityIndex: number;
  // accessibilityInsertionPointLineNumber: number;
  // accessibilityLabelValue: number;
  // accessibilityMainWindow: interop.Object;
  // accessibilityMarkerGroupUIElement: interop.Object;
  // accessibilityMarkerValues: interop.Object;
  // accessibilityMaxValue: interop.Object;
  // accessibilityMenuBar: interop.Object;
  // accessibilityMinimizeButton: interop.Object;
  // accessibilityMinValue: interop.Object;
  // accessibilityNumberOfCharacters: number;
  // accessibilityOrientation: interop.Enum<typeof NSAccessibilityOrientation>;
  // accessibilityOverflowButton: interop.Object;
  // accessibilityParent: interop.Object;
  // accessibilityProxy: interop.Object;
  // accessibilityRowCount: number;
  // accessibilityRowIndexRange: _NSRange;
  // accessibilityRulerMarkerType: interop.Enum<typeof NSAccessibilityRulerMarkerType>;
  // accessibilitySearchButton: interop.Object;
  // accessibilitySearchMenu: interop.Object;
  // accessibilitySelectedTextRange: _NSRange;
  // accessibilitySharedCharacterRange: _NSRange;
  // accessibilityShownMenu: interop.Object;
  // accessibilitySortDirection: interop.Enum<typeof NSAccessibilitySortDirection>;
  // accessibilityTitleUIElement: interop.Object;
  // accessibilityToolbarButton: interop.Object;
  // accessibilityTopLevelUIElement: interop.Object;
  // accessibilityUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityURL: NSURL;
  // accessibilityValue: interop.Object;
  // accessibilityVerticalScrollBar: interop.Object;
  // accessibilityVerticalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityVisibleCharacterRange: _NSRange;
  // accessibilityWarningValue: interop.Object;
  // accessibilityWindow: interop.Object;
  // accessibilityZoomButton: interop.Object;
  // action: string;
  // alignment: interop.Enum<typeof NSTextAlignment>;
  // allowsEditingTextAttributes: boolean;
  // allowsMixedState: boolean;
  // allowsUndo: boolean;
  // attributedStringValue: NSAttributedString;
  // backgroundStyle: interop.Enum<typeof NSBackgroundStyle>;
  // baseWritingDirection: interop.Enum<typeof NSWritingDirection>;
  // readonly cellSize: CGSize;
  // controlSize: interop.Enum<typeof NSControlSize>;
  // controlTint: interop.Enum<typeof NSControlTint>;
  // controlView: NSView;
  // readonly debugDescription: NSString;
  // defaultFocusRingType: interop.Enum<typeof NSFocusRingType>;
  // defaultMenu: NSMenu;
  // readonly description: NSString;
  // doubleValue: number;
  // floatValue: number;
  // focusRingType: interop.Enum<typeof NSFocusRingType>;
  // font: NSFont;
  // formatter: NSFormatter;
  // readonly hash: number;
  // readonly hasValidObjectValue: boolean;
  // image: NSImage;
  // importsGraphics: boolean;
  // integerValue: number;
  // readonly interiorBackgroundStyle: interop.Enum<typeof NSBackgroundStyle>;
  // intValue: number;
  // isAccessibilityAlternateUIVisible: boolean;
  // isAccessibilityDisclosed: boolean;
  // isAccessibilityEdited: boolean;
  // isAccessibilityElement: boolean;
  // isAccessibilityEnabled: boolean;
  // isAccessibilityExpanded: boolean;
  // isAccessibilityFocused: boolean;
  // isAccessibilityFrontmost: boolean;
  // isAccessibilityHidden: boolean;
  // isAccessibilityMain: boolean;
  // isAccessibilityMinimized: boolean;
  // isAccessibilityModal: boolean;
  // isAccessibilityOrderedByRow: boolean;
  // isAccessibilityProtectedContent: boolean;
  // isAccessibilityRequired: boolean;
  // isAccessibilitySelected: boolean;
  // isBezeled: boolean;
  // isBordered: boolean;
  // isContinuous: boolean;
  // isEditable: boolean;
  // isEnabled: boolean;
  // isHighlighted: boolean;
  // readonly isOpaque: boolean;
  // readonly isProxy: boolean;
  // isScrollable: boolean;
  // isSelectable: boolean;
  // readonly keyEquivalent: NSString;
  // lineBreakMode: interop.Enum<typeof NSLineBreakMode>;
  // menu: NSMenu;
  // readonly mouseDownFlags: number;
  // readonly nextState: number;
  // objectValue: interop.Object;
  // prefersTrackingUntilMouseUp: boolean;
  // refusesFirstResponder: boolean;
  // representedObject: interop.Object;
  // sendsActionOnEndEditing: boolean;
  // showsFirstResponder: boolean;
  // state: number;
  // readonly superclass: interop.Object;
  // tag: number;
  // target: interop.Object;
  // truncatesLastVisibleLine: boolean;
  // type: interop.Enum<typeof NSCellType>;
  // userInterfaceLayoutDirection: interop.Enum<typeof NSUserInterfaceLayoutDirection>;
  // usesSingleLineMode: boolean;
  // readonly wantsNotificationForMarkedText: boolean;
  // wraps: boolean;
  // readonly zone: interop.Pointer;
}

export class HTMLNSStatusItemElement extends HTMLNSObjectElement {
  readonly nativeObject = NSStatusItem.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    action: 'action',
    alternateimage: 'alternateImage',
    attributedtitle: 'attributedTitle',
    autosavename: 'autosaveName',
    behavior: 'behavior',
    button: 'button',
    doubleaction: 'doubleAction',
    drawstatusbarbackgroundinrectwithhighlight: 'drawStatusBarBackgroundInRectWithHighlight',
    highlightmode: 'highlightMode',
    image: 'image',
    isenabled: 'isEnabled',
    isvisible: 'isVisible',
    length: 'length',
    menu: 'menu',
    popupstatusitemmenu: 'popUpStatusItemMenu',
    sendactionon: 'sendActionOn',
    statusbar: 'statusBar',
    target: 'target',
    title: 'title',
    tooltip: 'toolTip',
    view: 'view',
  }

  // action: string;
  // alternateImage: NSImage;
  // attributedTitle: NSAttributedString;
  // behavior: interop.Enum<typeof NSStatusItemBehavior>;
  // readonly button: NSStatusBarButton;
  // doubleAction: string;
  // highlightMode: boolean;
  // image: NSImage;
  // isEnabled: boolean;
  // isVisible: boolean;
  // length: number;
  // menu: NSMenu;
  // readonly statusBar: NSStatusBar | null;
  // target: interop.Object;
  // view: NSView;
}

export class HTMLNSSpeechRecognizerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSSpeechRecognizer.new();
  get delegate(): NSSpeechRecognizerDelegateImpl {
    return (this.nativeObject.delegate ??= NSSpeechRecognizerDelegateImpl.new()) as NSSpeechRecognizerDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    blocksotherrecognizers: 'blocksOtherRecognizers',
    commands: 'commands',
    delegate: 'delegate',
    displayedcommandstitle: 'displayedCommandsTitle',
    init: 'init',
    listensinforegroundonly: 'listensInForegroundOnly',
    startlistening: 'startListening',
    stoplistening: 'stopListening',
  }

  // blocksOtherRecognizers: boolean;
  // listensInForegroundOnly: boolean;

  set speechrecognizerdidrecognizecommand(value: (sender: NSSpeechRecognizer, command: NSString | string) => void) {
    this.delegate.speechRecognizerDidRecognizeCommand = value;
  }
}

export class HTMLNSCollectionLayoutGroupCustomItemElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCollectionLayoutGroupCustomItem.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    copywithzone: 'copyWithZone',
    customitemwithframe: 'customItemWithFrame',
    customitemwithframezindex: 'customItemWithFrameZIndex',
    frame: 'frame',
    zindex: 'zIndex',
  }

  // readonly frame: CGRect;
  // readonly zIndex: number;
}

export class HTMLNSTableViewRowActionElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTableViewRowAction.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    backgroundcolor: 'backgroundColor',
    copywithzone: 'copyWithZone',
    image: 'image',
    rowactionwithstyletitlehandler: 'rowActionWithStyleTitleHandler',
    style: 'style',
    title: 'title',
  }

  // backgroundColor: NSColor;
  // image: NSImage;
  // readonly style: interop.Enum<typeof NSTableViewRowActionStyle>;
}

export class HTMLNSTextAttachmentViewProviderElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextAttachmentViewProvider.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    attachmentboundsforattributeslocationtextcontainerproposedlinefragmentposition: 'attachmentBoundsForAttributesLocationTextContainerProposedLineFragmentPosition',
    initwithtextattachmentparentviewtextlayoutmanagerlocation: 'initWithTextAttachmentParentViewTextLayoutManagerLocation',
    loadview: 'loadView',
    location: 'location',
    textattachment: 'textAttachment',
    textlayoutmanager: 'textLayoutManager',
    trackstextattachmentviewbounds: 'tracksTextAttachmentViewBounds',
    view: 'view',
  }

  // readonly location: NSTextLocation;
  // readonly textAttachment: NSTextAttachment | null;
  // readonly textLayoutManager: NSTextLayoutManager;
  // tracksTextAttachmentViewBounds: boolean;
  // view: NSView;
}

export class HTMLNSToolbarItemElement extends HTMLNSObjectElement {
  readonly nativeObject = NSToolbarItem.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    action: 'action',
    allowsduplicatesintoolbar: 'allowsDuplicatesInToolbar',
    autovalidates: 'autovalidates',
    copywithzone: 'copyWithZone',
    image: 'image',
    initwithitemidentifier: 'initWithItemIdentifier',
    isbordered: 'isBordered',
    isenabled: 'isEnabled',
    isnavigational: 'isNavigational',
    isvisible: 'isVisible',
    itemidentifier: 'itemIdentifier',
    label: 'label',
    maxsize: 'maxSize',
    menuformrepresentation: 'menuFormRepresentation',
    minsize: 'minSize',
    palettelabel: 'paletteLabel',
    possiblelabels: 'possibleLabels',
    tag: 'tag',
    target: 'target',
    title: 'title',
    toolbar: 'toolbar',
    tooltip: 'toolTip',
    validate: 'validate',
    view: 'view',
    visibilitypriority: 'visibilityPriority',
  }

  // action: string;
  // readonly allowsDuplicatesInToolbar: boolean;
  // autovalidates: boolean;
  // image: NSImage;
  // isBordered: boolean;
  // isEnabled: boolean;
  // isNavigational: boolean;
  // readonly isVisible: boolean;
  // readonly itemIdentifier: NSString;
  // maxSize: CGSize;
  // menuFormRepresentation: NSMenuItem;
  // minSize: CGSize;
  // possibleLabels: NSSet;
  // tag: number;
  // target: interop.Object;
  // readonly toolbar: NSToolbar;
  // view: NSView;
  // visibilityPriority: number;
}

export class HTMLNSGlyphGeneratorElement extends HTMLNSObjectElement {
  readonly nativeObject = NSGlyphGenerator.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    generateglyphsforglyphstoragedesirednumberofcharactersglyphindexcharacterindex: 'generateGlyphsForGlyphStorageDesiredNumberOfCharactersGlyphIndexCharacterIndex',
    sharedglyphgenerator: 'sharedGlyphGenerator',
  }

  // sharedGlyphGenerator: NSGlyphGenerator;
}

export class HTMLNSGridCellElement extends HTMLNSObjectElement {
  readonly nativeObject = NSGridCell.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    column: 'column',
    contentview: 'contentView',
    customplacementconstraints: 'customPlacementConstraints',
    emptycontentview: 'emptyContentView',
    encodewithcoder: 'encodeWithCoder',
    initwithcoder: 'initWithCoder',
    row: 'row',
    rowalignment: 'rowAlignment',
    xplacement: 'xPlacement',
    yplacement: 'yPlacement',
  }

  // readonly column: NSGridColumn | null;
  // contentView: NSView;
  // emptyContentView: NSView;
  // readonly row: NSGridRow | null;
  // rowAlignment: interop.Enum<typeof NSGridRowAlignment>;
  // xPlacement: interop.Enum<typeof NSGridCellPlacement>;
  // yPlacement: interop.Enum<typeof NSGridCellPlacement>;
}

export class HTMLNSColorSamplerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSColorSampler.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    showsamplerwithselectionhandler: 'showSamplerWithSelectionHandler',
  }

}

export class HTMLNSPDFPanelElement extends HTMLNSObjectElement {
  readonly nativeObject = NSPDFPanel.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    accessorycontroller: 'accessoryController',
    beginsheetwithpdfinfomodalforwindowcompletionhandler: 'beginSheetWithPDFInfoModalForWindowCompletionHandler',
    defaultfilename: 'defaultFileName',
    options: 'options',
    panel: 'panel',
  }

  // accessoryController: NSViewController;
  // options: interop.Enum<typeof NSPDFPanelOptions>;
}

export class HTMLNSPageLayoutElement extends HTMLNSObjectElement {
  readonly nativeObject = NSPageLayout.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    accessorycontrollers: 'accessoryControllers',
    accessoryview: 'accessoryView',
    addaccessorycontroller: 'addAccessoryController',
    beginsheetusingprintinfoonwindowcompletionhandler: 'beginSheetUsingPrintInfoOnWindowCompletionHandler',
    beginsheetwithprintinfomodalforwindowdelegatedidendselectorcontextinfo: 'beginSheetWithPrintInfoModalForWindowDelegateDidEndSelectorContextInfo',
    pagelayout: 'pageLayout',
    printinfo: 'printInfo',
    readprintinfo: 'readPrintInfo',
    removeaccessorycontroller: 'removeAccessoryController',
    runmodal: 'runModal',
    runmodalwithprintinfo: 'runModalWithPrintInfo',
    setaccessoryview: 'setAccessoryView',
    writeprintinfo: 'writePrintInfo',
  }

  // readonly accessoryControllers: NSArray;
  // readonly printInfo: NSPrintInfo;
}

export class HTMLNSScreenElement extends HTMLNSObjectElement {
  readonly nativeObject = NSScreen.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    auxiliarytopleftarea: 'auxiliaryTopLeftArea',
    auxiliarytoprightarea: 'auxiliaryTopRightArea',
    backingalignedrectoptions: 'backingAlignedRectOptions',
    backingscalefactor: 'backingScaleFactor',
    canrepresentdisplaygamut: 'canRepresentDisplayGamut',
    colorspace: 'colorSpace',
    convertrectfrombacking: 'convertRectFromBacking',
    convertrecttobacking: 'convertRectToBacking',
    deepestscreen: 'deepestScreen',
    depth: 'depth',
    devicedescription: 'deviceDescription',
    displaylinkwithtargetselector: 'displayLinkWithTargetSelector',
    displayupdategranularity: 'displayUpdateGranularity',
    frame: 'frame',
    lastdisplayupdatetimestamp: 'lastDisplayUpdateTimestamp',
    localizedname: 'localizedName',
    mainscreen: 'mainScreen',
    maximumextendeddynamicrangecolorcomponentvalue: 'maximumExtendedDynamicRangeColorComponentValue',
    maximumframespersecond: 'maximumFramesPerSecond',
    maximumpotentialextendeddynamicrangecolorcomponentvalue: 'maximumPotentialExtendedDynamicRangeColorComponentValue',
    maximumreferenceextendeddynamicrangecolorcomponentvalue: 'maximumReferenceExtendedDynamicRangeColorComponentValue',
    maximumrefreshinterval: 'maximumRefreshInterval',
    minimumrefreshinterval: 'minimumRefreshInterval',
    safeareainsets: 'safeAreaInsets',
    screens: 'screens',
    screenshaveseparatespaces: 'screensHaveSeparateSpaces',
    supportedwindowdepths: 'supportedWindowDepths',
    userspacescalefactor: 'userSpaceScaleFactor',
    visibleframe: 'visibleFrame',
  }

  // readonly auxiliaryTopLeftArea: CGRect;
  // readonly auxiliaryTopRightArea: CGRect;
  // readonly backingScaleFactor: number;
  // readonly colorSpace: NSColorSpace;
  // deepestScreen: NSScreen;
  // readonly depth: interop.Enum<typeof NSWindowDepth>;
  // readonly deviceDescription: NSDictionary;
  // readonly displayUpdateGranularity: number;
  // readonly frame: CGRect;
  // readonly lastDisplayUpdateTimestamp: number;
  // readonly localizedName: NSString;
  // mainScreen: NSScreen;
  // readonly maximumExtendedDynamicRangeColorComponentValue: number;
  // readonly maximumFramesPerSecond: number;
  // readonly maximumPotentialExtendedDynamicRangeColorComponentValue: number;
  // readonly maximumReferenceExtendedDynamicRangeColorComponentValue: number;
  // readonly maximumRefreshInterval: number;
  // readonly minimumRefreshInterval: number;
  // readonly safeAreaInsets: NSEdgeInsets;
  // screens: NSArray;
  // screensHaveSeparateSpaces: boolean;
  // readonly supportedWindowDepths: interop.Pointer;
  // readonly visibleFrame: CGRect;
}

export class HTMLNSImageSymbolConfigurationElement extends HTMLNSObjectElement {
  readonly nativeObject = NSImageSymbolConfiguration.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    configurationbyapplyingconfiguration: 'configurationByApplyingConfiguration',
    configurationpreferringhierarchical: 'configurationPreferringHierarchical',
    configurationpreferringmonochrome: 'configurationPreferringMonochrome',
    configurationpreferringmulticolor: 'configurationPreferringMulticolor',
    configurationwithhierarchicalcolor: 'configurationWithHierarchicalColor',
    configurationwithpalettecolors: 'configurationWithPaletteColors',
    configurationwithpointsizeweight: 'configurationWithPointSizeWeight',
    configurationwithpointsizeweightscale: 'configurationWithPointSizeWeightScale',
    configurationwithscale: 'configurationWithScale',
    configurationwithtextstyle: 'configurationWithTextStyle',
    configurationwithtextstylescale: 'configurationWithTextStyleScale',
    copywithzone: 'copyWithZone',
    encodewithcoder: 'encodeWithCoder',
    initwithcoder: 'initWithCoder',
    supportssecurecoding: 'supportsSecureCoding',
  }

  // supportsSecureCoding: boolean;
}

export class HTMLNSRulerMarkerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSRulerMarker.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    copywithzone: 'copyWithZone',
    drawrect: 'drawRect',
    encodewithcoder: 'encodeWithCoder',
    image: 'image',
    imageorigin: 'imageOrigin',
    imagerectinruler: 'imageRectInRuler',
    initwithcoder: 'initWithCoder',
    initwithrulerviewmarkerlocationimageimageorigin: 'initWithRulerViewMarkerLocationImageImageOrigin',
    isdragging: 'isDragging',
    ismovable: 'isMovable',
    isremovable: 'isRemovable',
    markerlocation: 'markerLocation',
    representedobject: 'representedObject',
    ruler: 'ruler',
    thicknessrequiredinruler: 'thicknessRequiredInRuler',
    trackmouseadding: 'trackMouseAdding',
  }

  // image: NSImage;
  // imageOrigin: CGPoint;
  // readonly imageRectInRuler: CGRect;
  // readonly isDragging: boolean;
  // isMovable: boolean;
  // isRemovable: boolean;
  // markerLocation: number;
  // representedObject: NSCopying;
  // readonly ruler: NSRulerView | null;
  // readonly thicknessRequiredInRuler: number;
}

export class HTMLNSFilePromiseReceiverElement extends HTMLNSObjectElement {
  readonly nativeObject = NSFilePromiseReceiver.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    autorelease: 'autorelease',
    class: 'class',
    conformstoprotocol: 'conformsToProtocol',
    debugdescription: 'debugDescription',
    description: 'description',
    filenames: 'fileNames',
    filetypes: 'fileTypes',
    hash: 'hash',
    initwithpasteboardpropertylistoftype: 'initWithPasteboardPropertyListOfType',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    readabledraggedtypes: 'readableDraggedTypes',
    readabletypesforpasteboard: 'readableTypesForPasteboard',
    readingoptionsfortypepasteboard: 'readingOptionsForTypePasteboard',
    receivepromisedfilesatdestinationoptionsoperationqueuereader: 'receivePromisedFilesAtDestinationOptionsOperationQueueReader',
    release: 'release',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    self: 'self',
    superclass: 'superclass',
    zone: 'zone',
  }

  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // readonly fileNames: NSArray;
  // readonly fileTypes: NSArray;
  // readonly hash: number;
  // readonly isProxy: boolean;
  // readableDraggedTypes: NSArray;
  // readonly superclass: interop.Object;
  // readonly zone: interop.Pointer;
}

export class HTMLNSColorPickerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSColorPicker.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    alphacontroladdedorremoved: 'alphaControlAddedOrRemoved',
    attachcolorlist: 'attachColorList',
    buttontooltip: 'buttonToolTip',
    colorpanel: 'colorPanel',
    detachcolorlist: 'detachColorList',
    initwithpickermaskcolorpanel: 'initWithPickerMaskColorPanel',
    insertnewbuttonimagein: 'insertNewButtonImageIn',
    mincontentsize: 'minContentSize',
    providenewbuttonimage: 'provideNewButtonImage',
    setmode: 'setMode',
    viewsizechanged: 'viewSizeChanged',
  }

  // readonly buttonToolTip: NSString;
  // readonly colorPanel: NSColorPanel;
  // readonly minContentSize: CGSize;
  // readonly provideNewButtonImage: NSImage;
}

export class HTMLNSBrowserCellElement extends HTMLNSCellElement {
  readonly nativeObject = NSBrowserCell.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    alternateimage: 'alternateImage',
    branchimage: 'branchImage',
    highlightcolorinview: 'highlightColorInView',
    highlightedbranchimage: 'highlightedBranchImage',
    image: 'image',
    initimagecell: 'initImageCell',
    inittextcell: 'initTextCell',
    initwithcoder: 'initWithCoder',
    isleaf: 'isLeaf',
    isloaded: 'isLoaded',
    reset: 'reset',
    set: 'set',
  }

  // alternateImage: NSImage;
  // branchImage: NSImage;
  // highlightedBranchImage: NSImage;
  // image: NSImage;
  // isLeaf: boolean;
  // isLoaded: boolean;
}

export class HTMLNSImageRepElement extends HTMLNSObjectElement {
  readonly nativeObject = NSImageRep.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    bitspersample: 'bitsPerSample',
    caninitwithdata: 'canInitWithData',
    caninitwithpasteboard: 'canInitWithPasteboard',
    cgimageforproposedrectcontexthints: 'CGImageForProposedRectContextHints',
    colorspacename: 'colorSpaceName',
    copywithzone: 'copyWithZone',
    draw: 'draw',
    drawatpoint: 'drawAtPoint',
    drawinrect: 'drawInRect',
    drawinrectfromrectoperationfractionrespectflippedhints: 'drawInRectFromRectOperationFractionRespectFlippedHints',
    encodewithcoder: 'encodeWithCoder',
    hasalpha: 'hasAlpha',
    imagefiletypes: 'imageFileTypes',
    imagepasteboardtypes: 'imagePasteboardTypes',
    imagerepclassfordata: 'imageRepClassForData',
    imagerepclassforfiletype: 'imageRepClassForFileType',
    imagerepclassforpasteboardtype: 'imageRepClassForPasteboardType',
    imagerepclassfortype: 'imageRepClassForType',
    imagerepswithcontentsoffile: 'imageRepsWithContentsOfFile',
    imagerepswithcontentsofurl: 'imageRepsWithContentsOfURL',
    imagerepswithpasteboard: 'imageRepsWithPasteboard',
    imagerepwithcontentsoffile: 'imageRepWithContentsOfFile',
    imagerepwithcontentsofurl: 'imageRepWithContentsOfURL',
    imagerepwithpasteboard: 'imageRepWithPasteboard',
    imagetypes: 'imageTypes',
    imageunfilteredfiletypes: 'imageUnfilteredFileTypes',
    imageunfilteredpasteboardtypes: 'imageUnfilteredPasteboardTypes',
    imageunfilteredtypes: 'imageUnfilteredTypes',
    init: 'init',
    initwithcoder: 'initWithCoder',
    isopaque: 'isOpaque',
    layoutdirection: 'layoutDirection',
    pixelshigh: 'pixelsHigh',
    pixelswide: 'pixelsWide',
    registeredimagerepclasses: 'registeredImageRepClasses',
    registerimagerepclass: 'registerImageRepClass',
    size: 'size',
    unregisterimagerepclass: 'unregisterImageRepClass',
  }

  // bitsPerSample: number;
  // hasAlpha: boolean;
  // imageTypes: NSArray;
  // imageUnfilteredTypes: NSArray;
  // isOpaque: boolean;
  // layoutDirection: interop.Enum<typeof NSImageLayoutDirection>;
  // pixelsHigh: number;
  // pixelsWide: number;
  // registeredImageRepClasses: NSArray;
  // size: CGSize;
}

export class HTMLNSFontCollectionElement extends HTMLNSObjectElement {
  readonly nativeObject = NSFontCollection.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    allfontcollectionnames: 'allFontCollectionNames',
    copywithzone: 'copyWithZone',
    encodewithcoder: 'encodeWithCoder',
    exclusiondescriptors: 'exclusionDescriptors',
    fontcollectionwithallavailabledescriptors: 'fontCollectionWithAllAvailableDescriptors',
    fontcollectionwithdescriptors: 'fontCollectionWithDescriptors',
    fontcollectionwithlocale: 'fontCollectionWithLocale',
    fontcollectionwithname: 'fontCollectionWithName',
    fontcollectionwithnamevisibility: 'fontCollectionWithNameVisibility',
    hidefontcollectionwithnamevisibilityerror: 'hideFontCollectionWithNameVisibilityError',
    initwithcoder: 'initWithCoder',
    matchingdescriptors: 'matchingDescriptors',
    matchingdescriptorsforfamily: 'matchingDescriptorsForFamily',
    matchingdescriptorsforfamilyoptions: 'matchingDescriptorsForFamilyOptions',
    matchingdescriptorswithoptions: 'matchingDescriptorsWithOptions',
    mutablecopywithzone: 'mutableCopyWithZone',
    querydescriptors: 'queryDescriptors',
    renamefontcollectionwithnamevisibilitytonameerror: 'renameFontCollectionWithNameVisibilityToNameError',
    showfontcollectionwithnamevisibilityerror: 'showFontCollectionWithNameVisibilityError',
  }

  // allFontCollectionNames: NSArray;
  // readonly exclusionDescriptors: NSArray;
  // fontCollectionWithAllAvailableDescriptors: NSFontCollection;
  // readonly matchingDescriptors: NSArray;
  // readonly queryDescriptors: NSArray;
}

export class HTMLNSFontAssetRequestElement extends HTMLNSObjectElement {
  readonly nativeObject = NSFontAssetRequest.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    autorelease: 'autorelease',
    class: 'class',
    conformstoprotocol: 'conformsToProtocol',
    debugdescription: 'debugDescription',
    description: 'description',
    downloadedfontdescriptors: 'downloadedFontDescriptors',
    downloadfontassetswithcompletionhandler: 'downloadFontAssetsWithCompletionHandler',
    hash: 'hash',
    initwithfontdescriptorsoptions: 'initWithFontDescriptorsOptions',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    progress: 'progress',
    release: 'release',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    self: 'self',
    superclass: 'superclass',
    zone: 'zone',
  }

  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // readonly downloadedFontDescriptors: NSArray;
  // readonly hash: number;
  // readonly isProxy: boolean;
  // readonly progress: NSProgress;
  // readonly superclass: interop.Object;
  // readonly zone: interop.Pointer;
}

export class HTMLNSFontDescriptorElement extends HTMLNSObjectElement {
  readonly nativeObject = NSFontDescriptor.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    copywithzone: 'copyWithZone',
    encodewithcoder: 'encodeWithCoder',
    fontattributes: 'fontAttributes',
    fontdescriptorbyaddingattributes: 'fontDescriptorByAddingAttributes',
    fontdescriptorwithdesign: 'fontDescriptorWithDesign',
    fontdescriptorwithface: 'fontDescriptorWithFace',
    fontdescriptorwithfamily: 'fontDescriptorWithFamily',
    fontdescriptorwithfontattributes: 'fontDescriptorWithFontAttributes',
    fontdescriptorwithmatrix: 'fontDescriptorWithMatrix',
    fontdescriptorwithnamematrix: 'fontDescriptorWithNameMatrix',
    fontdescriptorwithnamesize: 'fontDescriptorWithNameSize',
    fontdescriptorwithsize: 'fontDescriptorWithSize',
    fontdescriptorwithsymbolictraits: 'fontDescriptorWithSymbolicTraits',
    initwithcoder: 'initWithCoder',
    initwithfontattributes: 'initWithFontAttributes',
    matchingfontdescriptorswithmandatorykeys: 'matchingFontDescriptorsWithMandatoryKeys',
    matchingfontdescriptorwithmandatorykeys: 'matchingFontDescriptorWithMandatoryKeys',
    matrix: 'matrix',
    objectforkey: 'objectForKey',
    pointsize: 'pointSize',
    postscriptname: 'postscriptName',
    preferredfontdescriptorfortextstyleoptions: 'preferredFontDescriptorForTextStyleOptions',
    requiresfontassetrequest: 'requiresFontAssetRequest',
    supportssecurecoding: 'supportsSecureCoding',
    symbolictraits: 'symbolicTraits',
  }

  // readonly fontAttributes: NSDictionary;
  // readonly matrix: NSAffineTransform;
  // readonly pointSize: number;
  // readonly postscriptName: NSString;
  // readonly requiresFontAssetRequest: boolean;
  // supportsSecureCoding: boolean;
  // readonly symbolicTraits: interop.Enum<typeof NSFontDescriptorSymbolicTraits>;
}

export class HTMLNSGradientElement extends HTMLNSObjectElement {
  readonly nativeObject = NSGradient.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    colorspace: 'colorSpace',
    copywithzone: 'copyWithZone',
    drawfromcenterradiustocenterradiusoptions: 'drawFromCenterRadiusToCenterRadiusOptions',
    drawfrompointtopointoptions: 'drawFromPointToPointOptions',
    drawinbezierpathangle: 'drawInBezierPathAngle',
    drawinbezierpathrelativecenterposition: 'drawInBezierPathRelativeCenterPosition',
    drawinrectangle: 'drawInRectAngle',
    drawinrectrelativecenterposition: 'drawInRectRelativeCenterPosition',
    encodewithcoder: 'encodeWithCoder',
    getcolorlocationatindex: 'getColorLocationAtIndex',
    initwithcoder: 'initWithCoder',
    initwithcolors: 'initWithColors',
    initwithcolorsandlocations: 'initWithColorsAndLocations',
    initwithcolorsatlocationscolorspace: 'initWithColorsAtLocationsColorSpace',
    initwithstartingcolorendingcolor: 'initWithStartingColorEndingColor',
    interpolatedcoloratlocation: 'interpolatedColorAtLocation',
    numberofcolorstops: 'numberOfColorStops',
    supportssecurecoding: 'supportsSecureCoding',
  }

  // readonly colorSpace: NSColorSpace;
  // readonly numberOfColorStops: number;
  // supportsSecureCoding: boolean;
}

export class HTMLNSCollectionLayoutEdgeSpacingElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCollectionLayoutEdgeSpacing.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    bottom: 'bottom',
    copywithzone: 'copyWithZone',
    leading: 'leading',
    spacingforleadingtoptrailingbottom: 'spacingForLeadingTopTrailingBottom',
    top: 'top',
    trailing: 'trailing',
  }

  // readonly bottom: NSCollectionLayoutSpacing;
  // readonly leading: NSCollectionLayoutSpacing;
  // readonly top: NSCollectionLayoutSpacing;
  // readonly trailing: NSCollectionLayoutSpacing;
}

export class HTMLNSCollectionLayoutSizeElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCollectionLayoutSize.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    copywithzone: 'copyWithZone',
    heightdimension: 'heightDimension',
    sizewithwidthdimensionheightdimension: 'sizeWithWidthDimensionHeightDimension',
    widthdimension: 'widthDimension',
  }

  // readonly heightDimension: NSCollectionLayoutDimension;
  // readonly widthDimension: NSCollectionLayoutDimension;
}

export class HTMLNSSharingServicePickerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSSharingServicePicker.new();
  get delegate(): NSSharingServicePickerDelegateImpl {
    return (this.nativeObject.delegate ??= NSSharingServicePickerDelegateImpl.new()) as NSSharingServicePickerDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    close: 'close',
    delegate: 'delegate',
    initwithitems: 'initWithItems',
    showrelativetorectofviewpreferrededge: 'showRelativeToRectOfViewPreferredEdge',
    standardsharemenuitem: 'standardShareMenuItem',
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
  readonly nativeObject = NSCollectionViewCompositionalLayoutConfiguration.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    boundarysupplementaryitems: 'boundarySupplementaryItems',
    copywithzone: 'copyWithZone',
    intersectionspacing: 'interSectionSpacing',
    scrolldirection: 'scrollDirection',
  }

  // interSectionSpacing: number;
  // scrollDirection: interop.Enum<typeof NSCollectionViewScrollDirection>;
}

export class HTMLNSCollectionViewLayoutInvalidationContextElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCollectionViewLayoutInvalidationContext.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    contentoffsetadjustment: 'contentOffsetAdjustment',
    contentsizeadjustment: 'contentSizeAdjustment',
    invalidatedatasourcecounts: 'invalidateDataSourceCounts',
    invalidateddecorationindexpaths: 'invalidatedDecorationIndexPaths',
    invalidatedecorationelementsofkindatindexpaths: 'invalidateDecorationElementsOfKindAtIndexPaths',
    invalidateditemindexpaths: 'invalidatedItemIndexPaths',
    invalidatedsupplementaryindexpaths: 'invalidatedSupplementaryIndexPaths',
    invalidateeverything: 'invalidateEverything',
    invalidateitemsatindexpaths: 'invalidateItemsAtIndexPaths',
    invalidatesupplementaryelementsofkindatindexpaths: 'invalidateSupplementaryElementsOfKindAtIndexPaths',
  }

  // contentOffsetAdjustment: CGPoint;
  // contentSizeAdjustment: CGSize;
  // readonly invalidateDataSourceCounts: boolean;
  // readonly invalidatedDecorationIndexPaths: NSDictionary;
  // readonly invalidatedItemIndexPaths: NSSet;
  // readonly invalidatedSupplementaryIndexPaths: NSDictionary;
  // readonly invalidateEverything: boolean;
}

export class HTMLNSStoryboardSegueElement extends HTMLNSObjectElement {
  readonly nativeObject = NSStoryboardSegue.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    destinationcontroller: 'destinationController',
    identifier: 'identifier',
    initwithidentifiersourcedestination: 'initWithIdentifierSourceDestination',
    perform: 'perform',
    seguewithidentifiersourcedestinationperformhandler: 'segueWithIdentifierSourceDestinationPerformHandler',
    sourcecontroller: 'sourceController',
  }

  // readonly destinationController: interop.Object;
  // readonly identifier: NSString;
  // readonly sourceController: interop.Object;
}

export class HTMLNSTouchBarElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTouchBar.new();
  get delegate(): NSTouchBarDelegateImpl {
    return (this.nativeObject.delegate ??= NSTouchBarDelegateImpl.new()) as NSTouchBarDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    customizationalloweditemidentifiers: 'customizationAllowedItemIdentifiers',
    customizationidentifier: 'customizationIdentifier',
    customizationrequireditemidentifiers: 'customizationRequiredItemIdentifiers',
    defaultitemidentifiers: 'defaultItemIdentifiers',
    delegate: 'delegate',
    encodewithcoder: 'encodeWithCoder',
    escapekeyreplacementitemidentifier: 'escapeKeyReplacementItemIdentifier',
    init: 'init',
    initwithcoder: 'initWithCoder',
    isautomaticcustomizetouchbarmenuitemenabled: 'isAutomaticCustomizeTouchBarMenuItemEnabled',
    isvisible: 'isVisible',
    itemforidentifier: 'itemForIdentifier',
    itemidentifiers: 'itemIdentifiers',
    principalitemidentifier: 'principalItemIdentifier',
    templateitems: 'templateItems',
  }

  // isAutomaticCustomizeTouchBarMenuItemEnabled: boolean;
  // readonly isVisible: boolean;
  // readonly itemIdentifiers: NSArray;
  // templateItems: NSSet;

  set touchbarmakeitemforidentifier(value: (touchBar: NSTouchBar, identifier: NSString | string) => NSTouchBarItem) {
    this.delegate.touchBarMakeItemForIdentifier = value;
  }
}

export class HTMLNSActionCellElement extends HTMLNSCellElement {
  readonly nativeObject = NSActionCell.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    action: 'action',
    tag: 'tag',
    target: 'target',
  }

  // action: string;
  // tag: number;
  // target: interop.Object;
}

export class HTMLNSColorListElement extends HTMLNSObjectElement {
  readonly nativeObject = NSColorList.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    allkeys: 'allKeys',
    availablecolorlists: 'availableColorLists',
    colorlistnamed: 'colorListNamed',
    colorwithkey: 'colorWithKey',
    encodewithcoder: 'encodeWithCoder',
    initwithcoder: 'initWithCoder',
    initwithname: 'initWithName',
    initwithnamefromfile: 'initWithNameFromFile',
    insertcolorkeyatindex: 'insertColorKeyAtIndex',
    iseditable: 'isEditable',
    name: 'name',
    removecolorwithkey: 'removeColorWithKey',
    removefile: 'removeFile',
    setcolorforkey: 'setColorForKey',
    supportssecurecoding: 'supportsSecureCoding',
    writetofile: 'writeToFile',
    writetourlerror: 'writeToURLError',
  }

  // readonly allKeys: NSArray;
  // availableColorLists: NSArray;
  // readonly isEditable: boolean;
  // readonly name: NSString;
  // supportsSecureCoding: boolean;
}

export class HTMLNSDocumentElement extends HTMLNSObjectElement {
  readonly nativeObject = NSDocument.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    accommodatepresenteditemdeletionwithcompletionhandler: 'accommodatePresentedItemDeletionWithCompletionHandler',
    accommodatepresentedsubitemdeletionaturlcompletionhandler: 'accommodatePresentedSubitemDeletionAtURLCompletionHandler',
    addwindowcontroller: 'addWindowController',
    allowedclassesforrestorablestatekeypath: 'allowedClassesForRestorableStateKeyPath',
    allowsdocumentsharing: 'allowsDocumentSharing',
    autorelease: 'autorelease',
    autosavedcontentsfileurl: 'autosavedContentsFileURL',
    autosavedocumentwithdelegatedidautosaveselectorcontextinfo: 'autosaveDocumentWithDelegateDidAutosaveSelectorContextInfo',
    autosavesdrafts: 'autosavesDrafts',
    autosavesinplace: 'autosavesInPlace',
    autosavewithimplicitcancellabilitycompletionhandler: 'autosaveWithImplicitCancellabilityCompletionHandler',
    autosavingfiletype: 'autosavingFileType',
    autosavingisimplicitlycancellable: 'autosavingIsImplicitlyCancellable',
    backupfileurl: 'backupFileURL',
    browsedocumentversions: 'browseDocumentVersions',
    canasynchronouslywritetourloftypeforsaveoperation: 'canAsynchronouslyWriteToURLOfTypeForSaveOperation',
    canclosedocumentwithdelegateshouldcloseselectorcontextinfo: 'canCloseDocumentWithDelegateShouldCloseSelectorContextInfo',
    canconcurrentlyreaddocumentsoftype: 'canConcurrentlyReadDocumentsOfType',
    changecounttokenforsaveoperation: 'changeCountTokenForSaveOperation',
    checkautosavingsafetyandreturnerror: 'checkAutosavingSafetyAndReturnError',
    class: 'class',
    close: 'close',
    conformstoprotocol: 'conformsToProtocol',
    continueactivityusingblock: 'continueActivityUsingBlock',
    continueasynchronousworkonmainthreadusingblock: 'continueAsynchronousWorkOnMainThreadUsingBlock',
    dataoftypeerror: 'dataOfTypeError',
    datarepresentationoftype: 'dataRepresentationOfType',
    debugdescription: 'debugDescription',
    defaultdraftname: 'defaultDraftName',
    description: 'description',
    displayname: 'displayName',
    duplicateandreturnerror: 'duplicateAndReturnError',
    duplicatedocument: 'duplicateDocument',
    duplicatedocumentwithdelegatedidduplicateselectorcontextinfo: 'duplicateDocumentWithDelegateDidDuplicateSelectorContextInfo',
    encoderestorablestatewithcoder: 'encodeRestorableStateWithCoder',
    encoderestorablestatewithcoderbackgroundqueue: 'encodeRestorableStateWithCoderBackgroundQueue',
    fileattributestowritetofileoftypesaveoperation: 'fileAttributesToWriteToFileOfTypeSaveOperation',
    fileattributestowritetourloftypeforsaveoperationoriginalcontentsurlerror: 'fileAttributesToWriteToURLOfTypeForSaveOperationOriginalContentsURLError',
    filemodificationdate: 'fileModificationDate',
    filename: 'fileName',
    filenameextensionfortypesaveoperation: 'fileNameExtensionForTypeSaveOperation',
    filenameextensionwashiddeninlastrunsavepanel: 'fileNameExtensionWasHiddenInLastRunSavePanel',
    filetype: 'fileType',
    filetypefromlastrunsavepanel: 'fileTypeFromLastRunSavePanel',
    fileurl: 'fileURL',
    filewrapperoftypeerror: 'fileWrapperOfTypeError',
    filewrapperrepresentationoftype: 'fileWrapperRepresentationOfType',
    handleclosescriptcommand: 'handleCloseScriptCommand',
    handleprintscriptcommand: 'handlePrintScriptCommand',
    handlesavescriptcommand: 'handleSaveScriptCommand',
    hash: 'hash',
    hasunautosavedchanges: 'hasUnautosavedChanges',
    hasundomanager: 'hasUndoManager',
    init: 'init',
    initforurlwithcontentsofurloftypeerror: 'initForURLWithContentsOfURLOfTypeError',
    initwithcontentsoffileoftype: 'initWithContentsOfFileOfType',
    initwithcontentsofurloftype: 'initWithContentsOfURLOfType',
    initwithcontentsofurloftypeerror: 'initWithContentsOfURLOfTypeError',
    initwithtypeerror: 'initWithTypeError',
    invalidaterestorablestate: 'invalidateRestorableState',
    isbrowsingversions: 'isBrowsingVersions',
    isdocumentedited: 'isDocumentEdited',
    isdraft: 'isDraft',
    isentirefileloaded: 'isEntireFileLoaded',
    isequal: 'isEqual',
    isinviewingmode: 'isInViewingMode',
    iskindofclass: 'isKindOfClass',
    islocked: 'isLocked',
    ismemberofclass: 'isMemberOfClass',
    isnativetype: 'isNativeType',
    isproxy: 'isProxy',
    keepbackupfile: 'keepBackupFile',
    lastcomponentoffilename: 'lastComponentOfFileName',
    loaddatarepresentationoftype: 'loadDataRepresentationOfType',
    loadfilewrapperrepresentationoftype: 'loadFileWrapperRepresentationOfType',
    lockdocument: 'lockDocument',
    lockdocumentwithcompletionhandler: 'lockDocumentWithCompletionHandler',
    lockwithcompletionhandler: 'lockWithCompletionHandler',
    makewindowcontrollers: 'makeWindowControllers',
    movedocument: 'moveDocument',
    movedocumenttoubiquitycontainer: 'moveDocumentToUbiquityContainer',
    movedocumentwithcompletionhandler: 'moveDocumentWithCompletionHandler',
    movetourlcompletionhandler: 'moveToURLCompletionHandler',
    objectdidbeginediting: 'objectDidBeginEditing',
    objectdidendediting: 'objectDidEndEditing',
    objectspecifier: 'objectSpecifier',
    observedpresenteditemubiquityattributes: 'observedPresentedItemUbiquityAttributes',
    pdfprintoperation: 'PDFPrintOperation',
    performactivitywithsynchronouswaitingusingblock: 'performActivityWithSynchronousWaitingUsingBlock',
    performasynchronousfileaccessusingblock: 'performAsynchronousFileAccessUsingBlock',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    performsynchronousfileaccessusingblock: 'performSynchronousFileAccessUsingBlock',
    preparepagelayout: 'preparePageLayout',
    preparesavepanel: 'prepareSavePanel',
    preparesharingservicepicker: 'prepareSharingServicePicker',
    presenteditemdidchange: 'presentedItemDidChange',
    presenteditemdidchangeubiquityattributes: 'presentedItemDidChangeUbiquityAttributes',
    presenteditemdidgainversion: 'presentedItemDidGainVersion',
    presenteditemdidloseversion: 'presentedItemDidLoseVersion',
    presenteditemdidmovetourl: 'presentedItemDidMoveToURL',
    presenteditemdidresolveconflictversion: 'presentedItemDidResolveConflictVersion',
    presenteditemoperationqueue: 'presentedItemOperationQueue',
    presenteditemurl: 'presentedItemURL',
    presentedsubitematurldidgainversion: 'presentedSubitemAtURLDidGainVersion',
    presentedsubitematurldidloseversion: 'presentedSubitemAtURLDidLoseVersion',
    presentedsubitematurldidmovetourl: 'presentedSubitemAtURLDidMoveToURL',
    presentedsubitematurldidresolveconflictversion: 'presentedSubitemAtURLDidResolveConflictVersion',
    presentedsubitemdidappearaturl: 'presentedSubitemDidAppearAtURL',
    presentedsubitemdidchangeaturl: 'presentedSubitemDidChangeAtURL',
    presenterror: 'presentError',
    presenterrormodalforwindowdelegatedidpresentselectorcontextinfo: 'presentErrorModalForWindowDelegateDidPresentSelectorContextInfo',
    preservesversions: 'preservesVersions',
    previewrepresentableactivityitems: 'previewRepresentableActivityItems',
    primarypresenteditemurl: 'primaryPresentedItemURL',
    printdocument: 'printDocument',
    printdocumentwithsettingsshowprintpaneldelegatedidprintselectorcontextinfo: 'printDocumentWithSettingsShowPrintPanelDelegateDidPrintSelectorContextInfo',
    printinfo: 'printInfo',
    printoperationwithsettingserror: 'printOperationWithSettingsError',
    printshowingprintpanel: 'printShowingPrintPanel',
    readabletypes: 'readableTypes',
    readfromdataoftypeerror: 'readFromDataOfTypeError',
    readfromfileoftype: 'readFromFileOfType',
    readfromfilewrapperoftypeerror: 'readFromFileWrapperOfTypeError',
    readfromurloftype: 'readFromURLOfType',
    readfromurloftypeerror: 'readFromURLOfTypeError',
    release: 'release',
    relinquishpresenteditemtoreader: 'relinquishPresentedItemToReader',
    relinquishpresenteditemtowriter: 'relinquishPresentedItemToWriter',
    removewindowcontroller: 'removeWindowController',
    renamedocument: 'renameDocument',
    respondstoselector: 'respondsToSelector',
    restorablestatekeypaths: 'restorableStateKeyPaths',
    restoredocumentwindowwithidentifierstatecompletionhandler: 'restoreDocumentWindowWithIdentifierStateCompletionHandler',
    restorestatewithcoder: 'restoreStateWithCoder',
    retain: 'retain',
    retaincount: 'retainCount',
    revertdocumenttosaved: 'revertDocumentToSaved',
    reverttocontentsofurloftypeerror: 'revertToContentsOfURLOfTypeError',
    reverttosavedfromfileoftype: 'revertToSavedFromFileOfType',
    reverttosavedfromurloftype: 'revertToSavedFromURLOfType',
    runmodalpagelayoutwithprintinfo: 'runModalPageLayoutWithPrintInfo',
    runmodalpagelayoutwithprintinfodelegatedidrunselectorcontextinfo: 'runModalPageLayoutWithPrintInfoDelegateDidRunSelectorContextInfo',
    runmodalprintoperationdelegatedidrunselectorcontextinfo: 'runModalPrintOperationDelegateDidRunSelectorContextInfo',
    runmodalsavepanelforsaveoperationdelegatedidsaveselectorcontextinfo: 'runModalSavePanelForSaveOperationDelegateDidSaveSelectorContextInfo',
    runpagelayout: 'runPageLayout',
    savedocument: 'saveDocument',
    savedocumentas: 'saveDocumentAs',
    savedocumentto: 'saveDocumentTo',
    savedocumenttopdf: 'saveDocumentToPDF',
    savedocumentwithdelegatedidsaveselectorcontextinfo: 'saveDocumentWithDelegateDidSaveSelectorContextInfo',
    savepresenteditemchangeswithcompletionhandler: 'savePresentedItemChangesWithCompletionHandler',
    savetofilesaveoperationdelegatedidsaveselectorcontextinfo: 'saveToFileSaveOperationDelegateDidSaveSelectorContextInfo',
    savetourloftypeforsaveoperationcompletionhandler: 'saveToURLOfTypeForSaveOperationCompletionHandler',
    savetourloftypeforsaveoperationdelegatedidsaveselectorcontextinfo: 'saveToURLOfTypeForSaveOperationDelegateDidSaveSelectorContextInfo',
    savetourloftypeforsaveoperationerror: 'saveToURLOfTypeForSaveOperationError',
    scheduleautosaving: 'scheduleAutosaving',
    self: 'self',
    setfilename: 'setFileName',
    setwindow: 'setWindow',
    sharedocumentwithsharingservicecompletionhandler: 'shareDocumentWithSharingServiceCompletionHandler',
    shouldchangeprintinfo: 'shouldChangePrintInfo',
    shouldclosewindowcontrollerdelegateshouldcloseselectorcontextinfo: 'shouldCloseWindowControllerDelegateShouldCloseSelectorContextInfo',
    shouldrunsavepanelwithaccessoryview: 'shouldRunSavePanelWithAccessoryView',
    showwindows: 'showWindows',
    stopbrowsingversionswithcompletionhandler: 'stopBrowsingVersionsWithCompletionHandler',
    superclass: 'superclass',
    unblockuserinteraction: 'unblockUserInteraction',
    undomanager: 'undoManager',
    unlockdocument: 'unlockDocument',
    unlockdocumentwithcompletionhandler: 'unlockDocumentWithCompletionHandler',
    unlockwithcompletionhandler: 'unlockWithCompletionHandler',
    updatechangecount: 'updateChangeCount',
    updatechangecountwithtokenforsaveoperation: 'updateChangeCountWithTokenForSaveOperation',
    updateuseractivitystate: 'updateUserActivityState',
    useractivity: 'userActivity',
    usesubiquitousstorage: 'usesUbiquitousStorage',
    validatemenuitem: 'validateMenuItem',
    validateuserinterfaceitem: 'validateUserInterfaceItem',
    willnotpresenterror: 'willNotPresentError',
    willpresenterror: 'willPresentError',
    windowcontrollerdidloadnib: 'windowControllerDidLoadNib',
    windowcontrollers: 'windowControllers',
    windowcontrollerwillloadnib: 'windowControllerWillLoadNib',
    windowforsheet: 'windowForSheet',
    windownibname: 'windowNibName',
    writabletypes: 'writableTypes',
    writabletypesforsaveoperation: 'writableTypesForSaveOperation',
    writesafelytourloftypeforsaveoperationerror: 'writeSafelyToURLOfTypeForSaveOperationError',
    writetofileoftype: 'writeToFileOfType',
    writetofileoftypeoriginalfilesaveoperation: 'writeToFileOfTypeOriginalFileSaveOperation',
    writetourloftype: 'writeToURLOfType',
    writetourloftypeerror: 'writeToURLOfTypeError',
    writetourloftypeforsaveoperationoriginalcontentsurlerror: 'writeToURLOfTypeForSaveOperationOriginalContentsURLError',
    writewithbackuptofileoftypesaveoperation: 'writeWithBackupToFileOfTypeSaveOperation',
    zone: 'zone',
  }

  // readonly allowsDocumentSharing: boolean;
  // autosavedContentsFileURL: NSURL;
  // autosavesDrafts: boolean;
  // autosavesInPlace: boolean;
  // readonly autosavingFileType: NSString;
  // readonly autosavingIsImplicitlyCancellable: boolean;
  // readonly backupFileURL: NSURL;
  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // fileModificationDate: NSDate;
  // readonly fileNameExtensionWasHiddenInLastRunSavePanel: boolean;
  // readonly fileTypeFromLastRunSavePanel: NSString;
  // fileURL: NSURL;
  // readonly hash: number;
  // readonly hasUnautosavedChanges: boolean;
  // hasUndoManager: boolean;
  // readonly isBrowsingVersions: boolean;
  // readonly isDocumentEdited: boolean;
  // isDraft: boolean;
  // readonly isEntireFileLoaded: boolean;
  // readonly isInViewingMode: boolean;
  // readonly isLocked: boolean;
  // readonly isProxy: boolean;
  // readonly keepBackupFile: boolean;
  // readonly objectSpecifier: NSScriptObjectSpecifier;
  // readonly observedPresentedItemUbiquityAttributes: NSSet;
  // readonly PDFPrintOperation: NSPrintOperation;
  // readonly presentedItemOperationQueue: NSOperationQueue;
  // readonly presentedItemURL: NSURL;
  // preservesVersions: boolean;
  // readonly primaryPresentedItemURL: NSURL;
  // printInfo: NSPrintInfo;
  // readableTypes: NSArray;
  // restorableStateKeyPaths: NSArray;
  // readonly shouldRunSavePanelWithAccessoryView: boolean;
  // readonly superclass: interop.Object;
  // undoManager: NSUndoManager;
  // userActivity: NSUserActivity;
  // usesUbiquitousStorage: boolean;
  // readonly windowControllers: NSArray;
  // readonly windowForSheet: NSWindow;
  // readonly windowNibName: NSString;
  // writableTypes: NSArray;
  // readonly zone: interop.Pointer;
}

export class HTMLNSBindingSelectionMarkerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSBindingSelectionMarker.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    copywithzone: 'copyWithZone',
    defaultplaceholderformarkeronclasswithbinding: 'defaultPlaceholderForMarkerOnClassWithBinding',
    multiplevaluesselectionmarker: 'multipleValuesSelectionMarker',
    noselectionmarker: 'noSelectionMarker',
    notapplicableselectionmarker: 'notApplicableSelectionMarker',
    setdefaultplaceholderformarkeronclasswithbinding: 'setDefaultPlaceholderForMarkerOnClassWithBinding',
  }

  // multipleValuesSelectionMarker: NSBindingSelectionMarker;
  // noSelectionMarker: NSBindingSelectionMarker;
  // notApplicableSelectionMarker: NSBindingSelectionMarker;
}

export class HTMLNSTextTabElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextTab.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    alignment: 'alignment',
    columnterminatorsforlocale: 'columnTerminatorsForLocale',
    copywithzone: 'copyWithZone',
    encodewithcoder: 'encodeWithCoder',
    initwithcoder: 'initWithCoder',
    initwithtextalignmentlocationoptions: 'initWithTextAlignmentLocationOptions',
    initwithtypelocation: 'initWithTypeLocation',
    location: 'location',
    options: 'options',
    supportssecurecoding: 'supportsSecureCoding',
    tabstoptype: 'tabStopType',
  }

  // readonly alignment: interop.Enum<typeof NSTextAlignment>;
  // readonly location: number;
  // readonly options: NSDictionary;
  // supportsSecureCoding: boolean;
  // readonly tabStopType: interop.Enum<typeof NSTextTabType>;
}

export class HTMLNSResponderElement extends HTMLNSObjectElement {
  readonly nativeObject = NSResponder.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    acceptsfirstresponder: 'acceptsFirstResponder',
    allowedclassesforrestorablestatekeypath: 'allowedClassesForRestorableStateKeyPath',
    becomefirstresponder: 'becomeFirstResponder',
    begingesturewithevent: 'beginGestureWithEvent',
    changemodewithevent: 'changeModeWithEvent',
    cursorupdate: 'cursorUpdate',
    encoderestorablestatewithcoder: 'encodeRestorableStateWithCoder',
    encoderestorablestatewithcoderbackgroundqueue: 'encodeRestorableStateWithCoderBackgroundQueue',
    encodewithcoder: 'encodeWithCoder',
    endgesturewithevent: 'endGestureWithEvent',
    flagschanged: 'flagsChanged',
    flushbufferedkeyevents: 'flushBufferedKeyEvents',
    helprequested: 'helpRequested',
    init: 'init',
    initwithcoder: 'initWithCoder',
    interfacestyle: 'interfaceStyle',
    interpretkeyevents: 'interpretKeyEvents',
    invalidaterestorablestate: 'invalidateRestorableState',
    keydown: 'keyDown',
    keyup: 'keyUp',
    magnifywithevent: 'magnifyWithEvent',
    maketouchbar: 'makeTouchBar',
    menu: 'menu',
    mousedown: 'mouseDown',
    mousedragged: 'mouseDragged',
    mouseentered: 'mouseEntered',
    mouseexited: 'mouseExited',
    mousemoved: 'mouseMoved',
    mouseup: 'mouseUp',
    newwindowfortab: 'newWindowForTab',
    nextresponder: 'nextResponder',
    noresponderfor: 'noResponderFor',
    othermousedown: 'otherMouseDown',
    othermousedragged: 'otherMouseDragged',
    othermouseup: 'otherMouseUp',
    performkeyequivalent: 'performKeyEquivalent',
    performmnemonic: 'performMnemonic',
    performtextfinderaction: 'performTextFinderAction',
    presenterror: 'presentError',
    presenterrormodalforwindowdelegatedidpresentselectorcontextinfo: 'presentErrorModalForWindowDelegateDidPresentSelectorContextInfo',
    pressurechangewithevent: 'pressureChangeWithEvent',
    quicklookwithevent: 'quickLookWithEvent',
    resignfirstresponder: 'resignFirstResponder',
    restorablestatekeypaths: 'restorableStateKeyPaths',
    restorestatewithcoder: 'restoreStateWithCoder',
    rightmousedown: 'rightMouseDown',
    rightmousedragged: 'rightMouseDragged',
    rightmouseup: 'rightMouseUp',
    rotatewithevent: 'rotateWithEvent',
    scrollwheel: 'scrollWheel',
    setinterfacestyle: 'setInterfaceStyle',
    shouldbetreatedasinkevent: 'shouldBeTreatedAsInkEvent',
    showcontexthelp: 'showContextHelp',
    smartmagnifywithevent: 'smartMagnifyWithEvent',
    supplementaltargetforactionsender: 'supplementalTargetForActionSender',
    swipewithevent: 'swipeWithEvent',
    tabletpoint: 'tabletPoint',
    tabletproximity: 'tabletProximity',
    touchbar: 'touchBar',
    touchesbeganwithevent: 'touchesBeganWithEvent',
    touchescancelledwithevent: 'touchesCancelledWithEvent',
    touchesendedwithevent: 'touchesEndedWithEvent',
    touchesmovedwithevent: 'touchesMovedWithEvent',
    trytoperformwith: 'tryToPerformWith',
    undomanager: 'undoManager',
    updateuseractivitystate: 'updateUserActivityState',
    useractivity: 'userActivity',
    validateproposedfirstresponderforevent: 'validateProposedFirstResponderForEvent',
    validrequestorforsendtypereturntype: 'validRequestorForSendTypeReturnType',
    wantsforwardedscrolleventsforaxis: 'wantsForwardedScrollEventsForAxis',
    wantsscrolleventsforswipetrackingonaxis: 'wantsScrollEventsForSwipeTrackingOnAxis',
    willpresenterror: 'willPresentError',
  }

  // readonly acceptsFirstResponder: boolean;
  // menu: NSMenu;
  // nextResponder: NSResponder;
  // restorableStateKeyPaths: NSArray;
  // touchBar: NSTouchBar;
  // readonly undoManager: NSUndoManager;
  // userActivity: NSUserActivity;
}

export class HTMLNSTouchElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTouch.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    copywithzone: 'copyWithZone',
    device: 'device',
    devicesize: 'deviceSize',
    identity: 'identity',
    isresting: 'isResting',
    locationinview: 'locationInView',
    normalizedposition: 'normalizedPosition',
    phase: 'phase',
    previouslocationinview: 'previousLocationInView',
    type: 'type',
  }

  // readonly device: interop.Object;
  // readonly deviceSize: CGSize;
  // readonly identity: NSCopying;
  // readonly isResting: boolean;
  // readonly normalizedPosition: CGPoint;
  // readonly phase: interop.Enum<typeof NSTouchPhase>;
  // readonly type: interop.Enum<typeof NSTouchType>;
}

export class HTMLNSWorkspaceElement extends HTMLNSObjectElement {
  readonly nativeObject = NSWorkspace.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    absolutepathforappbundlewithidentifier: 'absolutePathForAppBundleWithIdentifier',
    accessibilitydisplayshoulddifferentiatewithoutcolor: 'accessibilityDisplayShouldDifferentiateWithoutColor',
    accessibilitydisplayshouldincreasecontrast: 'accessibilityDisplayShouldIncreaseContrast',
    accessibilitydisplayshouldinvertcolors: 'accessibilityDisplayShouldInvertColors',
    accessibilitydisplayshouldreducemotion: 'accessibilityDisplayShouldReduceMotion',
    accessibilitydisplayshouldreducetransparency: 'accessibilityDisplayShouldReduceTransparency',
    activatefileviewerselectingurls: 'activateFileViewerSelectingURLs',
    activeapplication: 'activeApplication',
    checkforremovablemedia: 'checkForRemovableMedia',
    desktopimageoptionsforscreen: 'desktopImageOptionsForScreen',
    desktopimageurlforscreen: 'desktopImageURLForScreen',
    duplicateurlscompletionhandler: 'duplicateURLsCompletionHandler',
    extendpoweroffby: 'extendPowerOffBy',
    filelabelcolors: 'fileLabelColors',
    filelabels: 'fileLabels',
    filenameextensionisvalidfortype: 'filenameExtensionIsValidForType',
    filesystemchanged: 'fileSystemChanged',
    findapplications: 'findApplications',
    frontmostapplication: 'frontmostApplication',
    fullpathforapplication: 'fullPathForApplication',
    getfilesysteminfoforpathisremovableiswritableisunmountabledescriptiontype: 'getFileSystemInfoForPathIsRemovableIsWritableIsUnmountableDescriptionType',
    getinfoforfileapplicationtype: 'getInfoForFileApplicationType',
    hideotherapplications: 'hideOtherApplications',
    iconforcontenttype: 'iconForContentType',
    iconforfile: 'iconForFile',
    iconforfiles: 'iconForFiles',
    iconforfiletype: 'iconForFileType',
    isfilepackageatpath: 'isFilePackageAtPath',
    isswitchcontrolenabled: 'isSwitchControlEnabled',
    isvoiceoverenabled: 'isVoiceOverEnabled',
    launchapplication: 'launchApplication',
    launchapplicationaturloptionsconfigurationerror: 'launchApplicationAtURLOptionsConfigurationError',
    launchapplicationshowiconautolaunch: 'launchApplicationShowIconAutolaunch',
    launchappwithbundleidentifieroptionsadditionaleventparamdescriptorlaunchidentifier: 'launchAppWithBundleIdentifierOptionsAdditionalEventParamDescriptorLaunchIdentifier',
    launchedapplications: 'launchedApplications',
    localizeddescriptionfortype: 'localizedDescriptionForType',
    menubarowningapplication: 'menuBarOwningApplication',
    mountedlocalvolumepaths: 'mountedLocalVolumePaths',
    mountedremovablemedia: 'mountedRemovableMedia',
    mountnewremovablemedia: 'mountNewRemovableMedia',
    notefilesystemchanged: 'noteFileSystemChanged',
    noteuserdefaultschanged: 'noteUserDefaultsChanged',
    notificationcenter: 'notificationCenter',
    openapplicationaturlconfigurationcompletionhandler: 'openApplicationAtURLConfigurationCompletionHandler',
    openfile: 'openFile',
    openfilefromimageatinview: 'openFileFromImageAtInView',
    openfilewithapplication: 'openFileWithApplication',
    openfilewithapplicationanddeactivate: 'openFileWithApplicationAndDeactivate',
    opentempfile: 'openTempFile',
    openurl: 'openURL',
    openurlconfigurationcompletionhandler: 'openURLConfigurationCompletionHandler',
    openurloptionsconfigurationerror: 'openURLOptionsConfigurationError',
    openurlswithappbundleidentifieroptionsadditionaleventparamdescriptorlaunchidentifiers: 'openURLsWithAppBundleIdentifierOptionsAdditionalEventParamDescriptorLaunchIdentifiers',
    openurlswithapplicationaturlconfigurationcompletionhandler: 'openURLsWithApplicationAtURLConfigurationCompletionHandler',
    openurlswithapplicationaturloptionsconfigurationerror: 'openURLsWithApplicationAtURLOptionsConfigurationError',
    performfileoperationsourcedestinationfilestag: 'performFileOperationSourceDestinationFilesTag',
    preferredfilenameextensionfortype: 'preferredFilenameExtensionForType',
    recycleurlscompletionhandler: 'recycleURLsCompletionHandler',
    requestauthorizationoftypecompletionhandler: 'requestAuthorizationOfTypeCompletionHandler',
    runningapplications: 'runningApplications',
    selectfileinfileviewerrootedatpath: 'selectFileInFileViewerRootedAtPath',
    setdefaultapplicationaturltoopencontenttypecompletionhandler: 'setDefaultApplicationAtURLToOpenContentTypeCompletionHandler',
    setdefaultapplicationaturltoopencontenttypeoffileaturlcompletionhandler: 'setDefaultApplicationAtURLToOpenContentTypeOfFileAtURLCompletionHandler',
    setdefaultapplicationaturltoopenfileaturlcompletionhandler: 'setDefaultApplicationAtURLToOpenFileAtURLCompletionHandler',
    setdefaultapplicationaturltoopenurlswithschemecompletionhandler: 'setDefaultApplicationAtURLToOpenURLsWithSchemeCompletionHandler',
    setdesktopimageurlforscreenoptionserror: 'setDesktopImageURLForScreenOptionsError',
    seticonforfileoptions: 'setIconForFileOptions',
    sharedworkspace: 'sharedWorkspace',
    showsearchresultsforquerystring: 'showSearchResultsForQueryString',
    slideimagefromto: 'slideImageFromTo',
    typeconformstotype: 'typeConformsToType',
    typeoffileerror: 'typeOfFileError',
    unmountandejectdeviceatpath: 'unmountAndEjectDeviceAtPath',
    unmountandejectdeviceaturlerror: 'unmountAndEjectDeviceAtURLError',
    urlforapplicationtoopencontenttype: 'URLForApplicationToOpenContentType',
    urlforapplicationtoopenurl: 'URLForApplicationToOpenURL',
    urlforapplicationwithbundleidentifier: 'URLForApplicationWithBundleIdentifier',
    urlsforapplicationstoopencontenttype: 'URLsForApplicationsToOpenContentType',
    urlsforapplicationstoopenurl: 'URLsForApplicationsToOpenURL',
    urlsforapplicationswithbundleidentifier: 'URLsForApplicationsWithBundleIdentifier',
    userdefaultschanged: 'userDefaultsChanged',
  }

  // readonly accessibilityDisplayShouldDifferentiateWithoutColor: boolean;
  // readonly accessibilityDisplayShouldIncreaseContrast: boolean;
  // readonly accessibilityDisplayShouldInvertColors: boolean;
  // readonly accessibilityDisplayShouldReduceMotion: boolean;
  // readonly accessibilityDisplayShouldReduceTransparency: boolean;
  // readonly fileLabelColors: NSArray;
  // readonly fileLabels: NSArray;
  // readonly frontmostApplication: NSRunningApplication;
  // readonly isSwitchControlEnabled: boolean;
  // readonly isVoiceOverEnabled: boolean;
  // readonly menuBarOwningApplication: NSRunningApplication;
  // readonly notificationCenter: NSNotificationCenter;
  // readonly runningApplications: NSArray;
  // sharedWorkspace: NSWorkspace;
}

export class HTMLNSAccessibilityElementElement extends HTMLNSObjectElement {
  readonly nativeObject = NSAccessibilityElement.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    accessibilityactivationpoint: 'accessibilityActivationPoint',
    accessibilityaddchildelement: 'accessibilityAddChildElement',
    accessibilityallowedvalues: 'accessibilityAllowedValues',
    accessibilityapplicationfocuseduielement: 'accessibilityApplicationFocusedUIElement',
    accessibilityattributedstringforrange: 'accessibilityAttributedStringForRange',
    accessibilityattributeduserinputlabels: 'accessibilityAttributedUserInputLabels',
    accessibilitycancelbutton: 'accessibilityCancelButton',
    accessibilitycellforcolumnrow: 'accessibilityCellForColumnRow',
    accessibilitychildren: 'accessibilityChildren',
    accessibilitychildreninnavigationorder: 'accessibilityChildrenInNavigationOrder',
    accessibilityclearbutton: 'accessibilityClearButton',
    accessibilityclosebutton: 'accessibilityCloseButton',
    accessibilitycolumncount: 'accessibilityColumnCount',
    accessibilitycolumnheaderuielements: 'accessibilityColumnHeaderUIElements',
    accessibilitycolumnindexrange: 'accessibilityColumnIndexRange',
    accessibilitycolumns: 'accessibilityColumns',
    accessibilitycolumntitles: 'accessibilityColumnTitles',
    accessibilitycontents: 'accessibilityContents',
    accessibilitycriticalvalue: 'accessibilityCriticalValue',
    accessibilitycustomactions: 'accessibilityCustomActions',
    accessibilitycustomrotors: 'accessibilityCustomRotors',
    accessibilitydecrementbutton: 'accessibilityDecrementButton',
    accessibilitydefaultbutton: 'accessibilityDefaultButton',
    accessibilitydisclosedbyrow: 'accessibilityDisclosedByRow',
    accessibilitydisclosedrows: 'accessibilityDisclosedRows',
    accessibilitydisclosurelevel: 'accessibilityDisclosureLevel',
    accessibilitydocument: 'accessibilityDocument',
    accessibilityelementwithroleframelabelparent: 'accessibilityElementWithRoleFrameLabelParent',
    accessibilityextrasmenubar: 'accessibilityExtrasMenuBar',
    accessibilityfilename: 'accessibilityFilename',
    accessibilityfocusedwindow: 'accessibilityFocusedWindow',
    accessibilityframe: 'accessibilityFrame',
    accessibilityframeforrange: 'accessibilityFrameForRange',
    accessibilityframeinparentspace: 'accessibilityFrameInParentSpace',
    accessibilityfullscreenbutton: 'accessibilityFullScreenButton',
    accessibilitygrowarea: 'accessibilityGrowArea',
    accessibilityhandles: 'accessibilityHandles',
    accessibilityheader: 'accessibilityHeader',
    accessibilityhelp: 'accessibilityHelp',
    accessibilityhorizontalscrollbar: 'accessibilityHorizontalScrollBar',
    accessibilityhorizontalunitdescription: 'accessibilityHorizontalUnitDescription',
    accessibilityhorizontalunits: 'accessibilityHorizontalUnits',
    accessibilityidentifier: 'accessibilityIdentifier',
    accessibilityincrementbutton: 'accessibilityIncrementButton',
    accessibilityindex: 'accessibilityIndex',
    accessibilityinsertionpointlinenumber: 'accessibilityInsertionPointLineNumber',
    accessibilitylabel: 'accessibilityLabel',
    accessibilitylabeluielements: 'accessibilityLabelUIElements',
    accessibilitylabelvalue: 'accessibilityLabelValue',
    accessibilitylayoutpointforscreenpoint: 'accessibilityLayoutPointForScreenPoint',
    accessibilitylayoutsizeforscreensize: 'accessibilityLayoutSizeForScreenSize',
    accessibilitylineforindex: 'accessibilityLineForIndex',
    accessibilitylinkeduielements: 'accessibilityLinkedUIElements',
    accessibilitymainwindow: 'accessibilityMainWindow',
    accessibilitymarkergroupuielement: 'accessibilityMarkerGroupUIElement',
    accessibilitymarkertypedescription: 'accessibilityMarkerTypeDescription',
    accessibilitymarkeruielements: 'accessibilityMarkerUIElements',
    accessibilitymarkervalues: 'accessibilityMarkerValues',
    accessibilitymaxvalue: 'accessibilityMaxValue',
    accessibilitymenubar: 'accessibilityMenuBar',
    accessibilityminimizebutton: 'accessibilityMinimizeButton',
    accessibilityminvalue: 'accessibilityMinValue',
    accessibilitynextcontents: 'accessibilityNextContents',
    accessibilitynumberofcharacters: 'accessibilityNumberOfCharacters',
    accessibilityorientation: 'accessibilityOrientation',
    accessibilityoverflowbutton: 'accessibilityOverflowButton',
    accessibilityparent: 'accessibilityParent',
    accessibilityperformcancel: 'accessibilityPerformCancel',
    accessibilityperformconfirm: 'accessibilityPerformConfirm',
    accessibilityperformdecrement: 'accessibilityPerformDecrement',
    accessibilityperformdelete: 'accessibilityPerformDelete',
    accessibilityperformincrement: 'accessibilityPerformIncrement',
    accessibilityperformpick: 'accessibilityPerformPick',
    accessibilityperformpress: 'accessibilityPerformPress',
    accessibilityperformraise: 'accessibilityPerformRaise',
    accessibilityperformshowalternateui: 'accessibilityPerformShowAlternateUI',
    accessibilityperformshowdefaultui: 'accessibilityPerformShowDefaultUI',
    accessibilityperformshowmenu: 'accessibilityPerformShowMenu',
    accessibilityplaceholdervalue: 'accessibilityPlaceholderValue',
    accessibilitypreviouscontents: 'accessibilityPreviousContents',
    accessibilityproxy: 'accessibilityProxy',
    accessibilityrangeforindex: 'accessibilityRangeForIndex',
    accessibilityrangeforline: 'accessibilityRangeForLine',
    accessibilityrangeforposition: 'accessibilityRangeForPosition',
    accessibilityrole: 'accessibilityRole',
    accessibilityroledescription: 'accessibilityRoleDescription',
    accessibilityrowcount: 'accessibilityRowCount',
    accessibilityrowheaderuielements: 'accessibilityRowHeaderUIElements',
    accessibilityrowindexrange: 'accessibilityRowIndexRange',
    accessibilityrows: 'accessibilityRows',
    accessibilityrtfforrange: 'accessibilityRTFForRange',
    accessibilityrulermarkertype: 'accessibilityRulerMarkerType',
    accessibilityscreenpointforlayoutpoint: 'accessibilityScreenPointForLayoutPoint',
    accessibilityscreensizeforlayoutsize: 'accessibilityScreenSizeForLayoutSize',
    accessibilitysearchbutton: 'accessibilitySearchButton',
    accessibilitysearchmenu: 'accessibilitySearchMenu',
    accessibilityselectedcells: 'accessibilitySelectedCells',
    accessibilityselectedchildren: 'accessibilitySelectedChildren',
    accessibilityselectedcolumns: 'accessibilitySelectedColumns',
    accessibilityselectedrows: 'accessibilitySelectedRows',
    accessibilityselectedtext: 'accessibilitySelectedText',
    accessibilityselectedtextrange: 'accessibilitySelectedTextRange',
    accessibilityselectedtextranges: 'accessibilitySelectedTextRanges',
    accessibilityservesastitleforuielements: 'accessibilityServesAsTitleForUIElements',
    accessibilitysharedcharacterrange: 'accessibilitySharedCharacterRange',
    accessibilitysharedfocuselements: 'accessibilitySharedFocusElements',
    accessibilitysharedtextuielements: 'accessibilitySharedTextUIElements',
    accessibilityshownmenu: 'accessibilityShownMenu',
    accessibilitysortdirection: 'accessibilitySortDirection',
    accessibilitysplitters: 'accessibilitySplitters',
    accessibilitystringforrange: 'accessibilityStringForRange',
    accessibilitystylerangeforindex: 'accessibilityStyleRangeForIndex',
    accessibilitysubrole: 'accessibilitySubrole',
    accessibilitytabs: 'accessibilityTabs',
    accessibilitytitle: 'accessibilityTitle',
    accessibilitytitleuielement: 'accessibilityTitleUIElement',
    accessibilitytoolbarbutton: 'accessibilityToolbarButton',
    accessibilitytopleveluielement: 'accessibilityTopLevelUIElement',
    accessibilityunitdescription: 'accessibilityUnitDescription',
    accessibilityunits: 'accessibilityUnits',
    accessibilityurl: 'accessibilityURL',
    accessibilityuserinputlabels: 'accessibilityUserInputLabels',
    accessibilityvalue: 'accessibilityValue',
    accessibilityvaluedescription: 'accessibilityValueDescription',
    accessibilityverticalscrollbar: 'accessibilityVerticalScrollBar',
    accessibilityverticalunitdescription: 'accessibilityVerticalUnitDescription',
    accessibilityverticalunits: 'accessibilityVerticalUnits',
    accessibilityvisiblecells: 'accessibilityVisibleCells',
    accessibilityvisiblecharacterrange: 'accessibilityVisibleCharacterRange',
    accessibilityvisiblechildren: 'accessibilityVisibleChildren',
    accessibilityvisiblecolumns: 'accessibilityVisibleColumns',
    accessibilityvisiblerows: 'accessibilityVisibleRows',
    accessibilitywarningvalue: 'accessibilityWarningValue',
    accessibilitywindow: 'accessibilityWindow',
    accessibilitywindows: 'accessibilityWindows',
    accessibilityzoombutton: 'accessibilityZoomButton',
    autorelease: 'autorelease',
    class: 'class',
    conformstoprotocol: 'conformsToProtocol',
    debugdescription: 'debugDescription',
    description: 'description',
    hash: 'hash',
    isaccessibilityalternateuivisible: 'isAccessibilityAlternateUIVisible',
    isaccessibilitydisclosed: 'isAccessibilityDisclosed',
    isaccessibilityedited: 'isAccessibilityEdited',
    isaccessibilityelement: 'isAccessibilityElement',
    isaccessibilityenabled: 'isAccessibilityEnabled',
    isaccessibilityexpanded: 'isAccessibilityExpanded',
    isaccessibilityfocused: 'isAccessibilityFocused',
    isaccessibilityfrontmost: 'isAccessibilityFrontmost',
    isaccessibilityhidden: 'isAccessibilityHidden',
    isaccessibilitymain: 'isAccessibilityMain',
    isaccessibilityminimized: 'isAccessibilityMinimized',
    isaccessibilitymodal: 'isAccessibilityModal',
    isaccessibilityorderedbyrow: 'isAccessibilityOrderedByRow',
    isaccessibilityprotectedcontent: 'isAccessibilityProtectedContent',
    isaccessibilityrequired: 'isAccessibilityRequired',
    isaccessibilityselected: 'isAccessibilitySelected',
    isaccessibilityselectorallowed: 'isAccessibilitySelectorAllowed',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    release: 'release',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    self: 'self',
    superclass: 'superclass',
    zone: 'zone',
  }

  // accessibilityActivationPoint: CGPoint;
  // accessibilityApplicationFocusedUIElement: interop.Object;
  // accessibilityCancelButton: interop.Object;
  // accessibilityClearButton: interop.Object;
  // accessibilityCloseButton: interop.Object;
  // accessibilityColumnCount: number;
  // accessibilityColumnIndexRange: _NSRange;
  // accessibilityCriticalValue: interop.Object;
  // accessibilityDecrementButton: interop.Object;
  // accessibilityDefaultButton: interop.Object;
  // accessibilityDisclosedByRow: interop.Object;
  // accessibilityDisclosedRows: interop.Object;
  // accessibilityDisclosureLevel: number;
  // accessibilityExtrasMenuBar: interop.Object;
  // accessibilityFocusedWindow: interop.Object;
  // accessibilityFrame: CGRect;
  // accessibilityFrameInParentSpace: CGRect;
  // accessibilityFullScreenButton: interop.Object;
  // accessibilityGrowArea: interop.Object;
  // accessibilityHeader: interop.Object;
  // accessibilityHorizontalScrollBar: interop.Object;
  // accessibilityHorizontalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityIncrementButton: interop.Object;
  // accessibilityIndex: number;
  // accessibilityInsertionPointLineNumber: number;
  // accessibilityLabelValue: number;
  // accessibilityMainWindow: interop.Object;
  // accessibilityMarkerGroupUIElement: interop.Object;
  // accessibilityMarkerValues: interop.Object;
  // accessibilityMaxValue: interop.Object;
  // accessibilityMenuBar: interop.Object;
  // accessibilityMinimizeButton: interop.Object;
  // accessibilityMinValue: interop.Object;
  // accessibilityNumberOfCharacters: number;
  // accessibilityOrientation: interop.Enum<typeof NSAccessibilityOrientation>;
  // accessibilityOverflowButton: interop.Object;
  // accessibilityParent: interop.Object;
  // accessibilityProxy: interop.Object;
  // accessibilityRowCount: number;
  // accessibilityRowIndexRange: _NSRange;
  // accessibilityRulerMarkerType: interop.Enum<typeof NSAccessibilityRulerMarkerType>;
  // accessibilitySearchButton: interop.Object;
  // accessibilitySearchMenu: interop.Object;
  // accessibilitySelectedTextRange: _NSRange;
  // accessibilitySharedCharacterRange: _NSRange;
  // accessibilityShownMenu: interop.Object;
  // accessibilitySortDirection: interop.Enum<typeof NSAccessibilitySortDirection>;
  // accessibilityTitleUIElement: interop.Object;
  // accessibilityToolbarButton: interop.Object;
  // accessibilityTopLevelUIElement: interop.Object;
  // accessibilityUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityURL: NSURL;
  // accessibilityValue: interop.Object;
  // accessibilityVerticalScrollBar: interop.Object;
  // accessibilityVerticalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityVisibleCharacterRange: _NSRange;
  // accessibilityWarningValue: interop.Object;
  // accessibilityWindow: interop.Object;
  // accessibilityZoomButton: interop.Object;
  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // readonly hash: number;
  // isAccessibilityAlternateUIVisible: boolean;
  // isAccessibilityDisclosed: boolean;
  // isAccessibilityEdited: boolean;
  // isAccessibilityElement: boolean;
  // isAccessibilityEnabled: boolean;
  // isAccessibilityExpanded: boolean;
  // isAccessibilityFocused: boolean;
  // isAccessibilityFrontmost: boolean;
  // isAccessibilityHidden: boolean;
  // isAccessibilityMain: boolean;
  // isAccessibilityMinimized: boolean;
  // isAccessibilityModal: boolean;
  // isAccessibilityOrderedByRow: boolean;
  // isAccessibilityProtectedContent: boolean;
  // isAccessibilityRequired: boolean;
  // isAccessibilitySelected: boolean;
  // readonly isProxy: boolean;
  // readonly superclass: interop.Object;
  // readonly zone: interop.Pointer;
}

export class HTMLNSNibElement extends HTMLNSObjectElement {
  readonly nativeObject = NSNib.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    encodewithcoder: 'encodeWithCoder',
    initwithcoder: 'initWithCoder',
    initwithcontentsofurl: 'initWithContentsOfURL',
    initwithnibdatabundle: 'initWithNibDataBundle',
    initwithnibnamedbundle: 'initWithNibNamedBundle',
    instantiatenibwithexternalnametable: 'instantiateNibWithExternalNameTable',
    instantiatenibwithownertoplevelobjects: 'instantiateNibWithOwnerTopLevelObjects',
    instantiatewithownertoplevelobjects: 'instantiateWithOwnerTopLevelObjects',
  }

}

export class HTMLNSMenuToolbarItemElement extends HTMLNSToolbarItemElement {
  readonly nativeObject = NSMenuToolbarItem.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    menu: 'menu',
    showsindicator: 'showsIndicator',
  }

  // menu: NSMenu;
  // showsIndicator: boolean;
}

export class HTMLNSSplitViewItemElement extends HTMLNSObjectElement {
  readonly nativeObject = NSSplitViewItem.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    allowsfullheightlayout: 'allowsFullHeightLayout',
    animationforkey: 'animationForKey',
    animations: 'animations',
    animator: 'animator',
    automaticmaximumthickness: 'automaticMaximumThickness',
    behavior: 'behavior',
    cancollapse: 'canCollapse',
    cancollapsefromwindowresize: 'canCollapseFromWindowResize',
    collapsebehavior: 'collapseBehavior',
    contentlistwithviewcontroller: 'contentListWithViewController',
    defaultanimationforkey: 'defaultAnimationForKey',
    encodewithcoder: 'encodeWithCoder',
    holdingpriority: 'holdingPriority',
    initwithcoder: 'initWithCoder',
    inspectorwithviewcontroller: 'inspectorWithViewController',
    iscollapsed: 'isCollapsed',
    isspringloaded: 'isSpringLoaded',
    maximumthickness: 'maximumThickness',
    minimumthickness: 'minimumThickness',
    preferredthicknessfraction: 'preferredThicknessFraction',
    sidebarwithviewcontroller: 'sidebarWithViewController',
    splitviewitemwithviewcontroller: 'splitViewItemWithViewController',
    titlebarseparatorstyle: 'titlebarSeparatorStyle',
    viewcontroller: 'viewController',
  }

  // allowsFullHeightLayout: boolean;
  // automaticMaximumThickness: number;
  // readonly behavior: interop.Enum<typeof NSSplitViewItemBehavior>;
  // canCollapse: boolean;
  // canCollapseFromWindowResize: boolean;
  // collapseBehavior: interop.Enum<typeof NSSplitViewItemCollapseBehavior>;
  // holdingPriority: number;
  // isCollapsed: boolean;
  // isSpringLoaded: boolean;
  // maximumThickness: number;
  // minimumThickness: number;
  // preferredThicknessFraction: number;
  // titlebarSeparatorStyle: interop.Enum<typeof NSTitlebarSeparatorStyle>;
  // viewController: NSViewController;
}

export class HTMLNSShadowElement extends HTMLNSObjectElement {
  readonly nativeObject = NSShadow.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    copywithzone: 'copyWithZone',
    encodewithcoder: 'encodeWithCoder',
    init: 'init',
    initwithcoder: 'initWithCoder',
    set: 'set',
    shadowblurradius: 'shadowBlurRadius',
    shadowcolor: 'shadowColor',
    shadowoffset: 'shadowOffset',
    supportssecurecoding: 'supportsSecureCoding',
  }

  // shadowBlurRadius: number;
  // shadowColor: NSColor;
  // shadowOffset: CGSize;
  // supportsSecureCoding: boolean;
}

export class HTMLNSInputManagerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSInputManager.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    attributedsubstringfromrange: 'attributedSubstringFromRange',
    characterindexforpoint: 'characterIndexForPoint',
    conversationidentifier: 'conversationIdentifier',
    currentinputmanager: 'currentInputManager',
    cycletonextinputlanguage: 'cycleToNextInputLanguage',
    cycletonextinputserverinlanguage: 'cycleToNextInputServerInLanguage',
    docommandbyselector: 'doCommandBySelector',
    firstrectforcharacterrange: 'firstRectForCharacterRange',
    handlemouseevent: 'handleMouseEvent',
    hasmarkedtext: 'hasMarkedText',
    image: 'image',
    initwithnamehost: 'initWithNameHost',
    inserttext: 'insertText',
    language: 'language',
    localizedinputmanagername: 'localizedInputManagerName',
    markedrange: 'markedRange',
    markedtextabandoned: 'markedTextAbandoned',
    markedtextselectionchangedclient: 'markedTextSelectionChangedClient',
    selectedrange: 'selectedRange',
    server: 'server',
    setmarkedtextselectedrange: 'setMarkedTextSelectedRange',
    unmarktext: 'unmarkText',
    validattributesformarkedtext: 'validAttributesForMarkedText',
    wantstodelaytextchangenotifications: 'wantsToDelayTextChangeNotifications',
    wantstohandlemouseevents: 'wantsToHandleMouseEvents',
    wantstointerpretallkeystrokes: 'wantsToInterpretAllKeystrokes',
  }

  // selectedRange: _NSRange;
}

export class HTMLNSEventElement extends HTMLNSObjectElement {
  readonly nativeObject = NSEvent.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    absolutex: 'absoluteX',
    absolutey: 'absoluteY',
    absolutez: 'absoluteZ',
    addglobalmonitorforeventsmatchingmaskhandler: 'addGlobalMonitorForEventsMatchingMaskHandler',
    addlocalmonitorforeventsmatchingmaskhandler: 'addLocalMonitorForEventsMatchingMaskHandler',
    alltouches: 'allTouches',
    associatedeventsmask: 'associatedEventsMask',
    buttonmask: 'buttonMask',
    buttonnumber: 'buttonNumber',
    capabilitymask: 'capabilityMask',
    cgevent: 'CGEvent',
    characters: 'characters',
    charactersbyapplyingmodifiers: 'charactersByApplyingModifiers',
    charactersignoringmodifiers: 'charactersIgnoringModifiers',
    clickcount: 'clickCount',
    coalescedtouchesfortouch: 'coalescedTouchesForTouch',
    context: 'context',
    copywithzone: 'copyWithZone',
    data1: 'data1',
    data2: 'data2',
    deltax: 'deltaX',
    deltay: 'deltaY',
    deltaz: 'deltaZ',
    deviceid: 'deviceID',
    doubleclickinterval: 'doubleClickInterval',
    encodewithcoder: 'encodeWithCoder',
    enterexiteventwithtypelocationmodifierflagstimestampwindownumbercontexteventnumbertrackingnumberuserdata: 'enterExitEventWithTypeLocationModifierFlagsTimestampWindowNumberContextEventNumberTrackingNumberUserData',
    eventnumber: 'eventNumber',
    eventref: 'eventRef',
    eventwithcgevent: 'eventWithCGEvent',
    eventwitheventref: 'eventWithEventRef',
    hasprecisescrollingdeltas: 'hasPreciseScrollingDeltas',
    initwithcoder: 'initWithCoder',
    isarepeat: 'isARepeat',
    isdirectioninvertedfromdevice: 'isDirectionInvertedFromDevice',
    isenteringproximity: 'isEnteringProximity',
    ismousecoalescingenabled: 'isMouseCoalescingEnabled',
    isswipetrackingfromscrolleventsenabled: 'isSwipeTrackingFromScrollEventsEnabled',
    keycode: 'keyCode',
    keyeventwithtypelocationmodifierflagstimestampwindownumbercontextcharacterscharactersignoringmodifiersisarepeatkeycode: 'keyEventWithTypeLocationModifierFlagsTimestampWindowNumberContextCharactersCharactersIgnoringModifiersIsARepeatKeyCode',
    keyrepeatdelay: 'keyRepeatDelay',
    keyrepeatinterval: 'keyRepeatInterval',
    locationinnode: 'locationInNode',
    locationinwindow: 'locationInWindow',
    magnification: 'magnification',
    modifierflags: 'modifierFlags',
    momentumphase: 'momentumPhase',
    mouseeventwithtypelocationmodifierflagstimestampwindownumbercontexteventnumberclickcountpressure: 'mouseEventWithTypeLocationModifierFlagsTimestampWindowNumberContextEventNumberClickCountPressure',
    mouselocation: 'mouseLocation',
    othereventwithtypelocationmodifierflagstimestampwindownumbercontextsubtypedata1data2: 'otherEventWithTypeLocationModifierFlagsTimestampWindowNumberContextSubtypeData1Data2',
    phase: 'phase',
    pointingdeviceid: 'pointingDeviceID',
    pointingdeviceserialnumber: 'pointingDeviceSerialNumber',
    pointingdevicetype: 'pointingDeviceType',
    pressedmousebuttons: 'pressedMouseButtons',
    pressure: 'pressure',
    pressurebehavior: 'pressureBehavior',
    removemonitor: 'removeMonitor',
    rotation: 'rotation',
    scrollingdeltax: 'scrollingDeltaX',
    scrollingdeltay: 'scrollingDeltaY',
    stage: 'stage',
    stagetransition: 'stageTransition',
    startperiodiceventsafterdelaywithperiod: 'startPeriodicEventsAfterDelayWithPeriod',
    stopperiodicevents: 'stopPeriodicEvents',
    subtype: 'subtype',
    systemtabletid: 'systemTabletID',
    tabletid: 'tabletID',
    tangentialpressure: 'tangentialPressure',
    tilt: 'tilt',
    timestamp: 'timestamp',
    touchesforview: 'touchesForView',
    touchesmatchingphaseinview: 'touchesMatchingPhaseInView',
    trackingarea: 'trackingArea',
    trackingnumber: 'trackingNumber',
    trackswipeeventwithoptionsdampenamountthresholdminmaxusinghandler: 'trackSwipeEventWithOptionsDampenAmountThresholdMinMaxUsingHandler',
    type: 'type',
    uniqueid: 'uniqueID',
    userdata: 'userData',
    vendordefined: 'vendorDefined',
    vendorid: 'vendorID',
    vendorpointingdevicetype: 'vendorPointingDeviceType',
    window: 'window',
    windownumber: 'windowNumber',
  }

  // readonly absoluteX: number;
  // readonly absoluteY: number;
  // readonly absoluteZ: number;
  // readonly associatedEventsMask: interop.Enum<typeof NSEventMask>;
  // readonly buttonMask: interop.Enum<typeof NSEventButtonMask>;
  // readonly buttonNumber: number;
  // readonly capabilityMask: number;
  // readonly CGEvent: interop.Pointer;
  // readonly characters: NSString;
  // readonly charactersIgnoringModifiers: NSString;
  // readonly clickCount: number;
  // readonly context: NSGraphicsContext;
  // readonly data1: number;
  // readonly data2: number;
  // readonly deltaX: number;
  // readonly deltaY: number;
  // readonly deltaZ: number;
  // readonly deviceID: number;
  // doubleClickInterval: number;
  // readonly eventNumber: number;
  // readonly eventRef: interop.Pointer;
  // readonly hasPreciseScrollingDeltas: boolean;
  // readonly isARepeat: boolean;
  // readonly isDirectionInvertedFromDevice: boolean;
  // readonly isEnteringProximity: boolean;
  // isMouseCoalescingEnabled: boolean;
  // isSwipeTrackingFromScrollEventsEnabled: boolean;
  // readonly keyCode: number;
  // keyRepeatDelay: number;
  // keyRepeatInterval: number;
  // readonly locationInWindow: CGPoint;
  // readonly magnification: number;
  // readonly modifierFlags: interop.Enum<typeof NSEventModifierFlags>;
  // modifierFlags: interop.Enum<typeof NSEventModifierFlags>;
  // readonly momentumPhase: interop.Enum<typeof NSEventPhase>;
  // mouseLocation: CGPoint;
  // readonly phase: interop.Enum<typeof NSEventPhase>;
  // readonly pointingDeviceID: number;
  // readonly pointingDeviceSerialNumber: number;
  // readonly pointingDeviceType: interop.Enum<typeof NSPointingDeviceType>;
  // pressedMouseButtons: number;
  // readonly pressure: number;
  // readonly pressureBehavior: interop.Enum<typeof NSPressureBehavior>;
  // readonly rotation: number;
  // readonly scrollingDeltaX: number;
  // readonly scrollingDeltaY: number;
  // readonly stage: number;
  // readonly stageTransition: number;
  // readonly subtype: interop.Enum<typeof NSEventSubtype>;
  // readonly systemTabletID: number;
  // readonly tabletID: number;
  // readonly tangentialPressure: number;
  // readonly tilt: CGPoint;
  // readonly timestamp: number;
  // readonly trackingArea: NSTrackingArea;
  // readonly trackingNumber: number;
  // readonly type: interop.Enum<typeof NSEventType>;
  // readonly uniqueID: number;
  // readonly userData: interop.Pointer;
  // readonly vendorDefined: interop.Object;
  // readonly vendorID: number;
  // readonly vendorPointingDeviceType: number;
  // readonly window: NSWindow;
  // readonly windowNumber: number;
}

export class HTMLNSSliderAccessoryElement extends HTMLNSObjectElement {
  readonly nativeObject = NSSliderAccessory.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    accessorywithimage: 'accessoryWithImage',
    behavior: 'behavior',
    encodewithcoder: 'encodeWithCoder',
    initwithcoder: 'initWithCoder',
    isenabled: 'isEnabled',
  }

  // behavior: NSSliderAccessoryBehavior;
  // isEnabled: boolean;
}

export class HTMLNSAccessibilityCustomRotorItemResultElement extends HTMLNSObjectElement {
  readonly nativeObject = NSAccessibilityCustomRotorItemResult.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    customlabel: 'customLabel',
    initwithitemloadingtokencustomlabel: 'initWithItemLoadingTokenCustomLabel',
    initwithtargetelement: 'initWithTargetElement',
    itemloadingtoken: 'itemLoadingToken',
    targetelement: 'targetElement',
    targetrange: 'targetRange',
  }

  // readonly itemLoadingToken: NSObject;
  // readonly targetElement: NSAccessibilityElement;
  // targetRange: _NSRange;
}

export class HTMLNSPasteboardElement extends HTMLNSObjectElement {
  readonly nativeObject = NSPasteboard.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    addtypesowner: 'addTypesOwner',
    availabletypefromarray: 'availableTypeFromArray',
    canreaditemwithdataconformingtotypes: 'canReadItemWithDataConformingToTypes',
    canreadobjectforclassesoptions: 'canReadObjectForClassesOptions',
    changecount: 'changeCount',
    clearcontents: 'clearContents',
    datafortype: 'dataForType',
    declaretypesowner: 'declareTypesOwner',
    generalpasteboard: 'generalPasteboard',
    indexofpasteboarditem: 'indexOfPasteboardItem',
    name: 'name',
    pasteboardbyfilteringdataoftype: 'pasteboardByFilteringDataOfType',
    pasteboardbyfilteringfile: 'pasteboardByFilteringFile',
    pasteboardbyfilteringtypesinpasteboard: 'pasteboardByFilteringTypesInPasteboard',
    pasteboarditems: 'pasteboardItems',
    pasteboardwithname: 'pasteboardWithName',
    pasteboardwithuniquename: 'pasteboardWithUniqueName',
    preparefornewcontentswithoptions: 'prepareForNewContentsWithOptions',
    propertylistfortype: 'propertyListForType',
    readfilecontentstypetofile: 'readFileContentsTypeToFile',
    readfilewrapper: 'readFileWrapper',
    readobjectsforclassesoptions: 'readObjectsForClassesOptions',
    releaseglobally: 'releaseGlobally',
    setdatafortype: 'setDataForType',
    setpropertylistfortype: 'setPropertyListForType',
    setstringfortype: 'setStringForType',
    stringfortype: 'stringForType',
    types: 'types',
    typesfilterableto: 'typesFilterableTo',
    writefilecontents: 'writeFileContents',
    writefilewrapper: 'writeFileWrapper',
    writeobjects: 'writeObjects',
  }

  // readonly changeCount: number;
  // generalPasteboard: NSPasteboard;
  // readonly name: NSString;
  // readonly pasteboardItems: NSArray;
  // readonly types: NSArray;
}

export class HTMLNSWindowElement extends HTMLNSResponderElement {
  readonly nativeObject = NSWindow.new();
  get delegate(): NSWindowDelegateImpl {
    return (this.nativeObject.delegate ??= NSWindowDelegateImpl.new()) as NSWindowDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    acceptsmousemovedevents: 'acceptsMouseMovedEvents',
    accessibilityactivationpoint: 'accessibilityActivationPoint',
    accessibilityallowedvalues: 'accessibilityAllowedValues',
    accessibilityapplicationfocuseduielement: 'accessibilityApplicationFocusedUIElement',
    accessibilityattributedstringforrange: 'accessibilityAttributedStringForRange',
    accessibilityattributeduserinputlabels: 'accessibilityAttributedUserInputLabels',
    accessibilitycancelbutton: 'accessibilityCancelButton',
    accessibilitycellforcolumnrow: 'accessibilityCellForColumnRow',
    accessibilitychildren: 'accessibilityChildren',
    accessibilitychildreninnavigationorder: 'accessibilityChildrenInNavigationOrder',
    accessibilityclearbutton: 'accessibilityClearButton',
    accessibilityclosebutton: 'accessibilityCloseButton',
    accessibilitycolumncount: 'accessibilityColumnCount',
    accessibilitycolumnheaderuielements: 'accessibilityColumnHeaderUIElements',
    accessibilitycolumnindexrange: 'accessibilityColumnIndexRange',
    accessibilitycolumns: 'accessibilityColumns',
    accessibilitycolumntitles: 'accessibilityColumnTitles',
    accessibilitycontents: 'accessibilityContents',
    accessibilitycriticalvalue: 'accessibilityCriticalValue',
    accessibilitycustomactions: 'accessibilityCustomActions',
    accessibilitycustomrotors: 'accessibilityCustomRotors',
    accessibilitydecrementbutton: 'accessibilityDecrementButton',
    accessibilitydefaultbutton: 'accessibilityDefaultButton',
    accessibilitydisclosedbyrow: 'accessibilityDisclosedByRow',
    accessibilitydisclosedrows: 'accessibilityDisclosedRows',
    accessibilitydisclosurelevel: 'accessibilityDisclosureLevel',
    accessibilitydocument: 'accessibilityDocument',
    accessibilityextrasmenubar: 'accessibilityExtrasMenuBar',
    accessibilityfilename: 'accessibilityFilename',
    accessibilityfocusedwindow: 'accessibilityFocusedWindow',
    accessibilityframe: 'accessibilityFrame',
    accessibilityframeforrange: 'accessibilityFrameForRange',
    accessibilityfullscreenbutton: 'accessibilityFullScreenButton',
    accessibilitygrowarea: 'accessibilityGrowArea',
    accessibilityhandles: 'accessibilityHandles',
    accessibilityheader: 'accessibilityHeader',
    accessibilityhelp: 'accessibilityHelp',
    accessibilityhorizontalscrollbar: 'accessibilityHorizontalScrollBar',
    accessibilityhorizontalunitdescription: 'accessibilityHorizontalUnitDescription',
    accessibilityhorizontalunits: 'accessibilityHorizontalUnits',
    accessibilityidentifier: 'accessibilityIdentifier',
    accessibilityincrementbutton: 'accessibilityIncrementButton',
    accessibilityindex: 'accessibilityIndex',
    accessibilityinsertionpointlinenumber: 'accessibilityInsertionPointLineNumber',
    accessibilitylabel: 'accessibilityLabel',
    accessibilitylabeluielements: 'accessibilityLabelUIElements',
    accessibilitylabelvalue: 'accessibilityLabelValue',
    accessibilitylayoutpointforscreenpoint: 'accessibilityLayoutPointForScreenPoint',
    accessibilitylayoutsizeforscreensize: 'accessibilityLayoutSizeForScreenSize',
    accessibilitylineforindex: 'accessibilityLineForIndex',
    accessibilitylinkeduielements: 'accessibilityLinkedUIElements',
    accessibilitymainwindow: 'accessibilityMainWindow',
    accessibilitymarkergroupuielement: 'accessibilityMarkerGroupUIElement',
    accessibilitymarkertypedescription: 'accessibilityMarkerTypeDescription',
    accessibilitymarkeruielements: 'accessibilityMarkerUIElements',
    accessibilitymarkervalues: 'accessibilityMarkerValues',
    accessibilitymaxvalue: 'accessibilityMaxValue',
    accessibilitymenubar: 'accessibilityMenuBar',
    accessibilityminimizebutton: 'accessibilityMinimizeButton',
    accessibilityminvalue: 'accessibilityMinValue',
    accessibilitynextcontents: 'accessibilityNextContents',
    accessibilitynumberofcharacters: 'accessibilityNumberOfCharacters',
    accessibilityorientation: 'accessibilityOrientation',
    accessibilityoverflowbutton: 'accessibilityOverflowButton',
    accessibilityparent: 'accessibilityParent',
    accessibilityperformcancel: 'accessibilityPerformCancel',
    accessibilityperformconfirm: 'accessibilityPerformConfirm',
    accessibilityperformdecrement: 'accessibilityPerformDecrement',
    accessibilityperformdelete: 'accessibilityPerformDelete',
    accessibilityperformincrement: 'accessibilityPerformIncrement',
    accessibilityperformpick: 'accessibilityPerformPick',
    accessibilityperformpress: 'accessibilityPerformPress',
    accessibilityperformraise: 'accessibilityPerformRaise',
    accessibilityperformshowalternateui: 'accessibilityPerformShowAlternateUI',
    accessibilityperformshowdefaultui: 'accessibilityPerformShowDefaultUI',
    accessibilityperformshowmenu: 'accessibilityPerformShowMenu',
    accessibilityplaceholdervalue: 'accessibilityPlaceholderValue',
    accessibilitypreviouscontents: 'accessibilityPreviousContents',
    accessibilityproxy: 'accessibilityProxy',
    accessibilityrangeforindex: 'accessibilityRangeForIndex',
    accessibilityrangeforline: 'accessibilityRangeForLine',
    accessibilityrangeforposition: 'accessibilityRangeForPosition',
    accessibilityrole: 'accessibilityRole',
    accessibilityroledescription: 'accessibilityRoleDescription',
    accessibilityrowcount: 'accessibilityRowCount',
    accessibilityrowheaderuielements: 'accessibilityRowHeaderUIElements',
    accessibilityrowindexrange: 'accessibilityRowIndexRange',
    accessibilityrows: 'accessibilityRows',
    accessibilityrtfforrange: 'accessibilityRTFForRange',
    accessibilityrulermarkertype: 'accessibilityRulerMarkerType',
    accessibilityscreenpointforlayoutpoint: 'accessibilityScreenPointForLayoutPoint',
    accessibilityscreensizeforlayoutsize: 'accessibilityScreenSizeForLayoutSize',
    accessibilitysearchbutton: 'accessibilitySearchButton',
    accessibilitysearchmenu: 'accessibilitySearchMenu',
    accessibilityselectedcells: 'accessibilitySelectedCells',
    accessibilityselectedchildren: 'accessibilitySelectedChildren',
    accessibilityselectedcolumns: 'accessibilitySelectedColumns',
    accessibilityselectedrows: 'accessibilitySelectedRows',
    accessibilityselectedtext: 'accessibilitySelectedText',
    accessibilityselectedtextrange: 'accessibilitySelectedTextRange',
    accessibilityselectedtextranges: 'accessibilitySelectedTextRanges',
    accessibilityservesastitleforuielements: 'accessibilityServesAsTitleForUIElements',
    accessibilitysharedcharacterrange: 'accessibilitySharedCharacterRange',
    accessibilitysharedfocuselements: 'accessibilitySharedFocusElements',
    accessibilitysharedtextuielements: 'accessibilitySharedTextUIElements',
    accessibilityshownmenu: 'accessibilityShownMenu',
    accessibilitysortdirection: 'accessibilitySortDirection',
    accessibilitysplitters: 'accessibilitySplitters',
    accessibilitystringforrange: 'accessibilityStringForRange',
    accessibilitystylerangeforindex: 'accessibilityStyleRangeForIndex',
    accessibilitysubrole: 'accessibilitySubrole',
    accessibilitytabs: 'accessibilityTabs',
    accessibilitytitle: 'accessibilityTitle',
    accessibilitytitleuielement: 'accessibilityTitleUIElement',
    accessibilitytoolbarbutton: 'accessibilityToolbarButton',
    accessibilitytopleveluielement: 'accessibilityTopLevelUIElement',
    accessibilityunitdescription: 'accessibilityUnitDescription',
    accessibilityunits: 'accessibilityUnits',
    accessibilityurl: 'accessibilityURL',
    accessibilityuserinputlabels: 'accessibilityUserInputLabels',
    accessibilityvalue: 'accessibilityValue',
    accessibilityvaluedescription: 'accessibilityValueDescription',
    accessibilityverticalscrollbar: 'accessibilityVerticalScrollBar',
    accessibilityverticalunitdescription: 'accessibilityVerticalUnitDescription',
    accessibilityverticalunits: 'accessibilityVerticalUnits',
    accessibilityvisiblecells: 'accessibilityVisibleCells',
    accessibilityvisiblecharacterrange: 'accessibilityVisibleCharacterRange',
    accessibilityvisiblechildren: 'accessibilityVisibleChildren',
    accessibilityvisiblecolumns: 'accessibilityVisibleColumns',
    accessibilityvisiblerows: 'accessibilityVisibleRows',
    accessibilitywarningvalue: 'accessibilityWarningValue',
    accessibilitywindow: 'accessibilityWindow',
    accessibilitywindows: 'accessibilityWindows',
    accessibilityzoombutton: 'accessibilityZoomButton',
    addchildwindowordered: 'addChildWindowOrdered',
    addtabbedwindowordered: 'addTabbedWindowOrdered',
    addtitlebaraccessoryviewcontroller: 'addTitlebarAccessoryViewController',
    allowsautomaticwindowtabbing: 'allowsAutomaticWindowTabbing',
    allowsconcurrentviewdrawing: 'allowsConcurrentViewDrawing',
    allowstooltipswhenapplicationisinactive: 'allowsToolTipsWhenApplicationIsInactive',
    alphavalue: 'alphaValue',
    anchorattributefororientation: 'anchorAttributeForOrientation',
    animationbehavior: 'animationBehavior',
    animationforkey: 'animationForKey',
    animationresizetime: 'animationResizeTime',
    animations: 'animations',
    animator: 'animator',
    appearance: 'appearance',
    appearancesource: 'appearanceSource',
    arecursorrectsenabled: 'areCursorRectsEnabled',
    aspectratio: 'aspectRatio',
    attachedsheet: 'attachedSheet',
    autorecalculatescontentborderthicknessforedge: 'autorecalculatesContentBorderThicknessForEdge',
    autorecalculateskeyviewloop: 'autorecalculatesKeyViewLoop',
    autorelease: 'autorelease',
    backgroundcolor: 'backgroundColor',
    backingalignedrectoptions: 'backingAlignedRectOptions',
    backinglocation: 'backingLocation',
    backingscalefactor: 'backingScaleFactor',
    backingtype: 'backingType',
    becomekeywindow: 'becomeKeyWindow',
    becomemainwindow: 'becomeMainWindow',
    begincriticalsheetcompletionhandler: 'beginCriticalSheetCompletionHandler',
    beginsheetcompletionhandler: 'beginSheetCompletionHandler',
    cacheimageinrect: 'cacheImageInRect',
    canbecomekeywindow: 'canBecomeKeyWindow',
    canbecomemainwindow: 'canBecomeMainWindow',
    canbecomevisiblewithoutlogin: 'canBecomeVisibleWithoutLogin',
    canhide: 'canHide',
    canrepresentdisplaygamut: 'canRepresentDisplayGamut',
    canstorecolor: 'canStoreColor',
    cascadetopleftfrompoint: 'cascadeTopLeftFromPoint',
    center: 'center',
    childwindows: 'childWindows',
    class: 'class',
    close: 'close',
    collectionbehavior: 'collectionBehavior',
    colorspace: 'colorSpace',
    conformstoprotocol: 'conformsToProtocol',
    constrainframerecttoscreen: 'constrainFrameRectToScreen',
    contentaspectratio: 'contentAspectRatio',
    contentborderthicknessforedge: 'contentBorderThicknessForEdge',
    contentlayoutguide: 'contentLayoutGuide',
    contentlayoutrect: 'contentLayoutRect',
    contentmaxsize: 'contentMaxSize',
    contentminsize: 'contentMinSize',
    contentrectforframerect: 'contentRectForFrameRect',
    contentrectforframerectstylemask: 'contentRectForFrameRectStyleMask',
    contentresizeincrements: 'contentResizeIncrements',
    contentview: 'contentView',
    contentviewcontroller: 'contentViewController',
    convertbasetoscreen: 'convertBaseToScreen',
    convertpointfrombacking: 'convertPointFromBacking',
    convertpointfromscreen: 'convertPointFromScreen',
    convertpointtobacking: 'convertPointToBacking',
    convertpointtoscreen: 'convertPointToScreen',
    convertrectfrombacking: 'convertRectFromBacking',
    convertrectfromscreen: 'convertRectFromScreen',
    convertrecttobacking: 'convertRectToBacking',
    convertrecttoscreen: 'convertRectToScreen',
    convertscreentobase: 'convertScreenToBase',
    currentevent: 'currentEvent',
    datawithepsinsiderect: 'dataWithEPSInsideRect',
    datawithpdfinsiderect: 'dataWithPDFInsideRect',
    debugdescription: 'debugDescription',
    deepestscreen: 'deepestScreen',
    defaultanimationforkey: 'defaultAnimationForKey',
    defaultbuttoncell: 'defaultButtonCell',
    defaultdepthlimit: 'defaultDepthLimit',
    delegate: 'delegate',
    deminiaturize: 'deminiaturize',
    depthlimit: 'depthLimit',
    description: 'description',
    devicedescription: 'deviceDescription',
    disablecursorrects: 'disableCursorRects',
    disableflushwindow: 'disableFlushWindow',
    disablekeyequivalentfordefaultbuttoncell: 'disableKeyEquivalentForDefaultButtonCell',
    disablescreenupdatesuntilflush: 'disableScreenUpdatesUntilFlush',
    disablesnapshotrestoration: 'disableSnapshotRestoration',
    discardcachedimage: 'discardCachedImage',
    discardcursorrects: 'discardCursorRects',
    discardeventsmatchingmaskbeforeevent: 'discardEventsMatchingMaskBeforeEvent',
    display: 'display',
    displayifneeded: 'displayIfNeeded',
    displaylinkwithtargetselector: 'displayLinkWithTargetSelector',
    displayswhenscreenprofilechanges: 'displaysWhenScreenProfileChanges',
    docktile: 'dockTile',
    dragimageatoffseteventpasteboardsourceslideback: 'dragImageAtOffsetEventPasteboardSourceSlideBack',
    drawers: 'drawers',
    effectiveappearance: 'effectiveAppearance',
    enablecursorrects: 'enableCursorRects',
    enableflushwindow: 'enableFlushWindow',
    enablekeyequivalentfordefaultbuttoncell: 'enableKeyEquivalentForDefaultButtonCell',
    enablesnapshotrestoration: 'enableSnapshotRestoration',
    endeditingfor: 'endEditingFor',
    endsheet: 'endSheet',
    endsheetreturncode: 'endSheetReturnCode',
    fieldeditorforobject: 'fieldEditorForObject',
    firstresponder: 'firstResponder',
    flushwindow: 'flushWindow',
    flushwindowifneeded: 'flushWindowIfNeeded',
    frame: 'frame',
    frameautosavename: 'frameAutosaveName',
    framerectforcontentrect: 'frameRectForContentRect',
    framerectforcontentrectstylemask: 'frameRectForContentRectStyleMask',
    graphicscontext: 'graphicsContext',
    gstate: 'gState',
    handleclosescriptcommand: 'handleCloseScriptCommand',
    handleprintscriptcommand: 'handlePrintScriptCommand',
    handlesavescriptcommand: 'handleSaveScriptCommand',
    hasactivewindowsharingsession: 'hasActiveWindowSharingSession',
    hasclosebox: 'hasCloseBox',
    hasdynamicdepthlimit: 'hasDynamicDepthLimit',
    hash: 'hash',
    hasshadow: 'hasShadow',
    hastitlebar: 'hasTitleBar',
    hidesondeactivate: 'hidesOnDeactivate',
    identifier: 'identifier',
    ignoresmouseevents: 'ignoresMouseEvents',
    initialfirstresponder: 'initialFirstResponder',
    initwithcontentrectstylemaskbackingdefer: 'initWithContentRectStyleMaskBackingDefer',
    initwithcontentrectstylemaskbackingdeferscreen: 'initWithContentRectStyleMaskBackingDeferScreen',
    initwithwindowref: 'initWithWindowRef',
    inliveresize: 'inLiveResize',
    inserttitlebaraccessoryviewcontrolleratindex: 'insertTitlebarAccessoryViewControllerAtIndex',
    invalidatecursorrectsforview: 'invalidateCursorRectsForView',
    invalidateshadow: 'invalidateShadow',
    isaccessibilityalternateuivisible: 'isAccessibilityAlternateUIVisible',
    isaccessibilitydisclosed: 'isAccessibilityDisclosed',
    isaccessibilityedited: 'isAccessibilityEdited',
    isaccessibilityelement: 'isAccessibilityElement',
    isaccessibilityenabled: 'isAccessibilityEnabled',
    isaccessibilityexpanded: 'isAccessibilityExpanded',
    isaccessibilityfocused: 'isAccessibilityFocused',
    isaccessibilityfrontmost: 'isAccessibilityFrontmost',
    isaccessibilityhidden: 'isAccessibilityHidden',
    isaccessibilitymain: 'isAccessibilityMain',
    isaccessibilityminimized: 'isAccessibilityMinimized',
    isaccessibilitymodal: 'isAccessibilityModal',
    isaccessibilityorderedbyrow: 'isAccessibilityOrderedByRow',
    isaccessibilityprotectedcontent: 'isAccessibilityProtectedContent',
    isaccessibilityrequired: 'isAccessibilityRequired',
    isaccessibilityselected: 'isAccessibilitySelected',
    isaccessibilityselectorallowed: 'isAccessibilitySelectorAllowed',
    isautodisplay: 'isAutodisplay',
    isdocumentedited: 'isDocumentEdited',
    isequal: 'isEqual',
    isexcludedfromwindowsmenu: 'isExcludedFromWindowsMenu',
    isfloatingpanel: 'isFloatingPanel',
    isflushwindowdisabled: 'isFlushWindowDisabled',
    iskeywindow: 'isKeyWindow',
    iskindofclass: 'isKindOfClass',
    ismainwindow: 'isMainWindow',
    ismemberofclass: 'isMemberOfClass',
    isminiaturizable: 'isMiniaturizable',
    isminiaturized: 'isMiniaturized',
    ismodalpanel: 'isModalPanel',
    ismovable: 'isMovable',
    ismovablebywindowbackground: 'isMovableByWindowBackground',
    isonactivespace: 'isOnActiveSpace',
    isoneshot: 'isOneShot',
    isopaque: 'isOpaque',
    isproxy: 'isProxy',
    isreleasedwhenclosed: 'isReleasedWhenClosed',
    isresizable: 'isResizable',
    isrestorable: 'isRestorable',
    issheet: 'isSheet',
    isvisible: 'isVisible',
    iszoomable: 'isZoomable',
    iszoomed: 'isZoomed',
    keyviewselectiondirection: 'keyViewSelectionDirection',
    layoutifneeded: 'layoutIfNeeded',
    level: 'level',
    makefirstresponder: 'makeFirstResponder',
    makekeyandorderfront: 'makeKeyAndOrderFront',
    makekeywindow: 'makeKeyWindow',
    makemainwindow: 'makeMainWindow',
    maxfullscreencontentsize: 'maxFullScreenContentSize',
    maxsize: 'maxSize',
    menuchanged: 'menuChanged',
    mergeallwindows: 'mergeAllWindows',
    minframewidthwithtitlestylemask: 'minFrameWidthWithTitleStyleMask',
    minfullscreencontentsize: 'minFullScreenContentSize',
    miniaturize: 'miniaturize',
    miniwindowimage: 'miniwindowImage',
    miniwindowtitle: 'miniwindowTitle',
    minsize: 'minSize',
    mouselocationoutsideofeventstream: 'mouseLocationOutsideOfEventStream',
    movetabtonewwindow: 'moveTabToNewWindow',
    nexteventmatchingmask: 'nextEventMatchingMask',
    nexteventmatchingmaskuntildateinmodedequeue: 'nextEventMatchingMaskUntilDateInModeDequeue',
    occlusionstate: 'occlusionState',
    orderback: 'orderBack',
    orderedindex: 'orderedIndex',
    orderfront: 'orderFront',
    orderfrontregardless: 'orderFrontRegardless',
    orderout: 'orderOut',
    orderwindowrelativeto: 'orderWindowRelativeTo',
    parentwindow: 'parentWindow',
    performclose: 'performClose',
    performminiaturize: 'performMiniaturize',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    performwindowdragwithevent: 'performWindowDragWithEvent',
    performzoom: 'performZoom',
    posteventatstart: 'postEventAtStart',
    preferredbackinglocation: 'preferredBackingLocation',
    preservescontentduringliveresize: 'preservesContentDuringLiveResize',
    preventsapplicationterminationwhenmodal: 'preventsApplicationTerminationWhenModal',
    print: 'print',
    recalculatekeyviewloop: 'recalculateKeyViewLoop',
    registerfordraggedtypes: 'registerForDraggedTypes',
    release: 'release',
    removechildwindow: 'removeChildWindow',
    removeframeusingname: 'removeFrameUsingName',
    removetitlebaraccessoryviewcontrolleratindex: 'removeTitlebarAccessoryViewControllerAtIndex',
    representedfilename: 'representedFilename',
    representedurl: 'representedURL',
    resetcursorrects: 'resetCursorRects',
    resignkeywindow: 'resignKeyWindow',
    resignmainwindow: 'resignMainWindow',
    resizeflags: 'resizeFlags',
    resizeincrements: 'resizeIncrements',
    respondstoselector: 'respondsToSelector',
    restorationclass: 'restorationClass',
    restorecachedimage: 'restoreCachedImage',
    retain: 'retain',
    retaincount: 'retainCount',
    runtoolbarcustomizationpalette: 'runToolbarCustomizationPalette',
    saveframeusingname: 'saveFrameUsingName',
    screen: 'screen',
    selectkeyviewfollowingview: 'selectKeyViewFollowingView',
    selectkeyviewprecedingview: 'selectKeyViewPrecedingView',
    selectnextkeyview: 'selectNextKeyView',
    selectnexttab: 'selectNextTab',
    selectpreviouskeyview: 'selectPreviousKeyView',
    selectprevioustab: 'selectPreviousTab',
    self: 'self',
    sendevent: 'sendEvent',
    setanchorattributefororientation: 'setAnchorAttributeForOrientation',
    setautorecalculatescontentborderthicknessforedge: 'setAutorecalculatesContentBorderThicknessForEdge',
    setcontentborderthicknessforedge: 'setContentBorderThicknessForEdge',
    setcontentsize: 'setContentSize',
    setdynamicdepthlimit: 'setDynamicDepthLimit',
    setframedisplay: 'setFrameDisplay',
    setframedisplayanimate: 'setFrameDisplayAnimate',
    setframefromstring: 'setFrameFromString',
    setframeorigin: 'setFrameOrigin',
    setframetopleftpoint: 'setFrameTopLeftPoint',
    setframeusingname: 'setFrameUsingName',
    setframeusingnameforce: 'setFrameUsingNameForce',
    setisminiaturized: 'setIsMiniaturized',
    setisvisible: 'setIsVisible',
    setiszoomed: 'setIsZoomed',
    settitlewithrepresentedfilename: 'setTitleWithRepresentedFilename',
    sharingtype: 'sharingType',
    sheetparent: 'sheetParent',
    sheets: 'sheets',
    showsresizeindicator: 'showsResizeIndicator',
    showstoolbarbutton: 'showsToolbarButton',
    standardwindowbutton: 'standardWindowButton',
    standardwindowbuttonforstylemask: 'standardWindowButtonForStyleMask',
    stringwithsavedframe: 'stringWithSavedFrame',
    stylemask: 'styleMask',
    subtitle: 'subtitle',
    superclass: 'superclass',
    tab: 'tab',
    tabbedwindows: 'tabbedWindows',
    tabbingidentifier: 'tabbingIdentifier',
    tabbingmode: 'tabbingMode',
    tabgroup: 'tabGroup',
    title: 'title',
    titlebaraccessoryviewcontrollers: 'titlebarAccessoryViewControllers',
    titlebarappearstransparent: 'titlebarAppearsTransparent',
    titlebarseparatorstyle: 'titlebarSeparatorStyle',
    titlevisibility: 'titleVisibility',
    togglefullscreen: 'toggleFullScreen',
    toggletabbar: 'toggleTabBar',
    toggletaboverview: 'toggleTabOverview',
    toggletoolbarshown: 'toggleToolbarShown',
    toolbar: 'toolbar',
    toolbarstyle: 'toolbarStyle',
    trackeventsmatchingmasktimeoutmodehandler: 'trackEventsMatchingMaskTimeoutModeHandler',
    transferwindowsharingtowindowcompletionhandler: 'transferWindowSharingToWindowCompletionHandler',
    trytoperformwith: 'tryToPerformWith',
    unregisterdraggedtypes: 'unregisterDraggedTypes',
    update: 'update',
    updateconstraintsifneeded: 'updateConstraintsIfNeeded',
    useoptimizeddrawing: 'useOptimizedDrawing',
    userspacescalefactor: 'userSpaceScaleFactor',
    usertabbingpreference: 'userTabbingPreference',
    validatemenuitem: 'validateMenuItem',
    validateuserinterfaceitem: 'validateUserInterfaceItem',
    validrequestorforsendtypereturntype: 'validRequestorForSendTypeReturnType',
    viewsneeddisplay: 'viewsNeedDisplay',
    visualizeconstraints: 'visualizeConstraints',
    windowcontroller: 'windowController',
    windownumber: 'windowNumber',
    windownumberatpointbelowwindowwithwindownumber: 'windowNumberAtPointBelowWindowWithWindowNumber',
    windownumberswithoptions: 'windowNumbersWithOptions',
    windowref: 'windowRef',
    windowtitlebarlayoutdirection: 'windowTitlebarLayoutDirection',
    windowwithcontentviewcontroller: 'windowWithContentViewController',
    workswhenmodal: 'worksWhenModal',
    zone: 'zone',
    zoom: 'zoom',
  }

  // acceptsMouseMovedEvents: boolean;
  // accessibilityActivationPoint: CGPoint;
  // accessibilityApplicationFocusedUIElement: interop.Object;
  // accessibilityCancelButton: interop.Object;
  // accessibilityClearButton: interop.Object;
  // accessibilityCloseButton: interop.Object;
  // accessibilityColumnCount: number;
  // accessibilityColumnIndexRange: _NSRange;
  // accessibilityCriticalValue: interop.Object;
  // accessibilityDecrementButton: interop.Object;
  // accessibilityDefaultButton: interop.Object;
  // accessibilityDisclosedByRow: interop.Object;
  // accessibilityDisclosedRows: interop.Object;
  // accessibilityDisclosureLevel: number;
  // accessibilityExtrasMenuBar: interop.Object;
  // accessibilityFocusedWindow: interop.Object;
  // accessibilityFrame: CGRect;
  // accessibilityFullScreenButton: interop.Object;
  // accessibilityGrowArea: interop.Object;
  // accessibilityHeader: interop.Object;
  // accessibilityHorizontalScrollBar: interop.Object;
  // accessibilityHorizontalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityIncrementButton: interop.Object;
  // accessibilityIndex: number;
  // accessibilityInsertionPointLineNumber: number;
  // accessibilityLabelValue: number;
  // accessibilityMainWindow: interop.Object;
  // accessibilityMarkerGroupUIElement: interop.Object;
  // accessibilityMarkerValues: interop.Object;
  // accessibilityMaxValue: interop.Object;
  // accessibilityMenuBar: interop.Object;
  // accessibilityMinimizeButton: interop.Object;
  // accessibilityMinValue: interop.Object;
  // accessibilityNumberOfCharacters: number;
  // accessibilityOrientation: interop.Enum<typeof NSAccessibilityOrientation>;
  // accessibilityOverflowButton: interop.Object;
  // accessibilityParent: interop.Object;
  // accessibilityProxy: interop.Object;
  // accessibilityRowCount: number;
  // accessibilityRowIndexRange: _NSRange;
  // accessibilityRulerMarkerType: interop.Enum<typeof NSAccessibilityRulerMarkerType>;
  // accessibilitySearchButton: interop.Object;
  // accessibilitySearchMenu: interop.Object;
  // accessibilitySelectedTextRange: _NSRange;
  // accessibilitySharedCharacterRange: _NSRange;
  // accessibilityShownMenu: interop.Object;
  // accessibilitySortDirection: interop.Enum<typeof NSAccessibilitySortDirection>;
  // accessibilityTitleUIElement: interop.Object;
  // accessibilityToolbarButton: interop.Object;
  // accessibilityTopLevelUIElement: interop.Object;
  // accessibilityUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityURL: NSURL;
  // accessibilityValue: interop.Object;
  // accessibilityVerticalScrollBar: interop.Object;
  // accessibilityVerticalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityVisibleCharacterRange: _NSRange;
  // accessibilityWarningValue: interop.Object;
  // accessibilityWindow: interop.Object;
  // accessibilityZoomButton: interop.Object;
  // allowsAutomaticWindowTabbing: boolean;
  // allowsConcurrentViewDrawing: boolean;
  // allowsToolTipsWhenApplicationIsInactive: boolean;
  // alphaValue: number;
  // animationBehavior: interop.Enum<typeof NSWindowAnimationBehavior>;
  // appearance: NSAppearance;
  // appearanceSource: NSObject;
  // readonly areCursorRectsEnabled: boolean;
  // aspectRatio: CGSize;
  // readonly attachedSheet: NSWindow;
  // autorecalculatesKeyViewLoop: boolean;
  // backgroundColor: NSColor;
  // readonly backingLocation: interop.Enum<typeof NSWindowBackingLocation>;
  // readonly backingScaleFactor: number;
  // backingType: interop.Enum<typeof NSBackingStoreType>;
  // readonly canBecomeKeyWindow: boolean;
  // readonly canBecomeMainWindow: boolean;
  // canBecomeVisibleWithoutLogin: boolean;
  // canHide: boolean;
  // readonly childWindows: NSArray;
  // collectionBehavior: interop.Enum<typeof NSWindowCollectionBehavior>;
  // colorSpace: NSColorSpace;
  // contentAspectRatio: CGSize;
  // readonly contentLayoutGuide: interop.Object;
  // readonly contentLayoutRect: CGRect;
  // contentMaxSize: CGSize;
  // contentMinSize: CGSize;
  // contentResizeIncrements: CGSize;
  // contentView: NSView;
  // contentViewController: NSViewController;
  // readonly currentEvent: NSEvent;
  // readonly debugDescription: NSString;
  // readonly deepestScreen: NSScreen;
  // defaultButtonCell: NSButtonCell;
  // defaultDepthLimit: interop.Enum<typeof NSWindowDepth>;
  // depthLimit: interop.Enum<typeof NSWindowDepth>;
  // readonly description: NSString;
  // readonly deviceDescription: NSDictionary;
  // displaysWhenScreenProfileChanges: boolean;
  // readonly dockTile: NSDockTile;
  // readonly drawers: NSArray;
  // readonly effectiveAppearance: NSAppearance;
  // readonly firstResponder: NSResponder | null;
  // readonly frame: CGRect;
  // readonly frameAutosaveName: NSString;
  // readonly graphicsContext: NSGraphicsContext;
  // readonly hasActiveWindowSharingSession: boolean;
  // readonly hasCloseBox: boolean;
  // readonly hasDynamicDepthLimit: boolean;
  // readonly hash: number;
  // hasShadow: boolean;
  // readonly hasTitleBar: boolean;
  // hidesOnDeactivate: boolean;
  // ignoresMouseEvents: boolean;
  // initialFirstResponder: NSView;
  // readonly inLiveResize: boolean;
  // isAccessibilityAlternateUIVisible: boolean;
  // isAccessibilityDisclosed: boolean;
  // isAccessibilityEdited: boolean;
  // isAccessibilityElement: boolean;
  // isAccessibilityEnabled: boolean;
  // isAccessibilityExpanded: boolean;
  // isAccessibilityFocused: boolean;
  // isAccessibilityFrontmost: boolean;
  // isAccessibilityHidden: boolean;
  // isAccessibilityMain: boolean;
  // isAccessibilityMinimized: boolean;
  // isAccessibilityModal: boolean;
  // isAccessibilityOrderedByRow: boolean;
  // isAccessibilityProtectedContent: boolean;
  // isAccessibilityRequired: boolean;
  // isAccessibilitySelected: boolean;
  // isAutodisplay: boolean;
  // isDocumentEdited: boolean;
  // isExcludedFromWindowsMenu: boolean;
  // readonly isFloatingPanel: boolean;
  // readonly isFlushWindowDisabled: boolean;
  // readonly isKeyWindow: boolean;
  // readonly isMainWindow: boolean;
  // readonly isMiniaturizable: boolean;
  // readonly isMiniaturized: boolean;
  // readonly isModalPanel: boolean;
  // isMovable: boolean;
  // isMovableByWindowBackground: boolean;
  // readonly isOnActiveSpace: boolean;
  // isOneShot: boolean;
  // isOpaque: boolean;
  // readonly isProxy: boolean;
  // isReleasedWhenClosed: boolean;
  // readonly isResizable: boolean;
  // isRestorable: boolean;
  // readonly isSheet: boolean;
  // readonly isVisible: boolean;
  // readonly isZoomable: boolean;
  // readonly isZoomed: boolean;
  // readonly keyViewSelectionDirection: interop.Enum<typeof NSSelectionDirection>;
  // level: number;
  // maxFullScreenContentSize: CGSize;
  // maxSize: CGSize;
  // minFullScreenContentSize: CGSize;
  // miniwindowImage: NSImage;
  // minSize: CGSize;
  // readonly mouseLocationOutsideOfEventStream: CGPoint;
  // readonly occlusionState: interop.Enum<typeof NSWindowOcclusionState>;
  // orderedIndex: number;
  // parentWindow: NSWindow;
  // preferredBackingLocation: interop.Enum<typeof NSWindowBackingLocation>;
  // preservesContentDuringLiveResize: boolean;
  // preventsApplicationTerminationWhenModal: boolean;
  // representedURL: NSURL;
  // readonly resizeFlags: interop.Enum<typeof NSEventModifierFlags>;
  // resizeIncrements: CGSize;
  // restorationClass: NSWindowRestoration;
  // readonly screen: NSScreen;
  // sharingType: interop.Enum<typeof NSWindowSharingType>;
  // readonly sheetParent: NSWindow;
  // readonly sheets: NSArray;
  // showsResizeIndicator: boolean;
  // showsToolbarButton: boolean;
  // readonly stringWithSavedFrame: NSString;
  // styleMask: interop.Enum<typeof NSWindowStyleMask>;
  // readonly superclass: interop.Object;
  // readonly tab: NSWindowTab;
  // readonly tabbedWindows: NSArray;
  // tabbingMode: interop.Enum<typeof NSWindowTabbingMode>;
  // readonly tabGroup: NSWindowTabGroup;
  // titlebarAppearsTransparent: boolean;
  // titlebarSeparatorStyle: interop.Enum<typeof NSTitlebarSeparatorStyle>;
  // titleVisibility: interop.Enum<typeof NSWindowTitleVisibility>;
  // toolbar: NSToolbar;
  // toolbarStyle: interop.Enum<typeof NSWindowToolbarStyle>;
  // userTabbingPreference: interop.Enum<typeof NSWindowUserTabbingPreference>;
  // viewsNeedDisplay: boolean;
  // windowController: NSWindowController;
  // readonly windowNumber: number;
  // readonly windowRef: interop.Pointer;
  // readonly windowTitlebarLayoutDirection: interop.Enum<typeof NSUserInterfaceLayoutDirection>;
  // readonly worksWhenModal: boolean;
  // readonly zone: interop.Pointer;

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
  readonly nativeObject = NSScrubberLayoutAttributes.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    alpha: 'alpha',
    copywithzone: 'copyWithZone',
    frame: 'frame',
    itemindex: 'itemIndex',
    layoutattributesforitematindex: 'layoutAttributesForItemAtIndex',
  }

  // alpha: number;
  // frame: CGRect;
  // itemIndex: number;
}

export class HTMLNSTextLayoutFragmentElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextLayoutFragment.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    bottommargin: 'bottomMargin',
    drawatpointincontext: 'drawAtPointInContext',
    encodewithcoder: 'encodeWithCoder',
    framefortextattachmentatlocation: 'frameForTextAttachmentAtLocation',
    initwithcoder: 'initWithCoder',
    initwithtextelementrange: 'initWithTextElementRange',
    invalidatelayout: 'invalidateLayout',
    layoutfragmentframe: 'layoutFragmentFrame',
    layoutqueue: 'layoutQueue',
    leadingpadding: 'leadingPadding',
    rangeinelement: 'rangeInElement',
    renderingsurfacebounds: 'renderingSurfaceBounds',
    state: 'state',
    supportssecurecoding: 'supportsSecureCoding',
    textattachmentviewproviders: 'textAttachmentViewProviders',
    textelement: 'textElement',
    textlayoutmanager: 'textLayoutManager',
    textlinefragmentfortextlocationisupstreamaffinity: 'textLineFragmentForTextLocationIsUpstreamAffinity',
    textlinefragmentforverticaloffsetrequiresexactmatch: 'textLineFragmentForVerticalOffsetRequiresExactMatch',
    textlinefragments: 'textLineFragments',
    topmargin: 'topMargin',
    trailingpadding: 'trailingPadding',
  }

  // readonly bottomMargin: number;
  // readonly layoutFragmentFrame: CGRect;
  // layoutQueue: NSOperationQueue;
  // readonly leadingPadding: number;
  // readonly rangeInElement: NSTextRange;
  // readonly renderingSurfaceBounds: CGRect;
  // readonly state: interop.Enum<typeof NSTextLayoutFragmentState>;
  // supportsSecureCoding: boolean;
  // readonly textAttachmentViewProviders: NSArray;
  // readonly textElement: NSTextElement | null;
  // readonly textLayoutManager: NSTextLayoutManager;
  // readonly textLineFragments: NSArray;
  // readonly topMargin: number;
  // readonly trailingPadding: number;
}

export class HTMLNSCursorElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCursor.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    arrowcursor: 'arrowCursor',
    closedhandcursor: 'closedHandCursor',
    contextualmenucursor: 'contextualMenuCursor',
    crosshaircursor: 'crosshairCursor',
    currentcursor: 'currentCursor',
    currentsystemcursor: 'currentSystemCursor',
    disappearingitemcursor: 'disappearingItemCursor',
    dragcopycursor: 'dragCopyCursor',
    draglinkcursor: 'dragLinkCursor',
    encodewithcoder: 'encodeWithCoder',
    hide: 'hide',
    hotspot: 'hotSpot',
    ibeamcursor: 'IBeamCursor',
    ibeamcursorforverticallayout: 'IBeamCursorForVerticalLayout',
    image: 'image',
    initwithcoder: 'initWithCoder',
    initwithimageforegroundcolorhintbackgroundcolorhinthotspot: 'initWithImageForegroundColorHintBackgroundColorHintHotSpot',
    initwithimagehotspot: 'initWithImageHotSpot',
    issetonmouseentered: 'isSetOnMouseEntered',
    issetonmouseexited: 'isSetOnMouseExited',
    mouseentered: 'mouseEntered',
    mouseexited: 'mouseExited',
    openhandcursor: 'openHandCursor',
    operationnotallowedcursor: 'operationNotAllowedCursor',
    pointinghandcursor: 'pointingHandCursor',
    pop: 'pop',
    push: 'push',
    resizedowncursor: 'resizeDownCursor',
    resizeleftcursor: 'resizeLeftCursor',
    resizeleftrightcursor: 'resizeLeftRightCursor',
    resizerightcursor: 'resizeRightCursor',
    resizeupcursor: 'resizeUpCursor',
    resizeupdowncursor: 'resizeUpDownCursor',
    set: 'set',
    sethiddenuntilmousemoves: 'setHiddenUntilMouseMoves',
    setonmouseentered: 'setOnMouseEntered',
    setonmouseexited: 'setOnMouseExited',
    supportssecurecoding: 'supportsSecureCoding',
    unhide: 'unhide',
  }

  // arrowCursor: NSCursor;
  // closedHandCursor: NSCursor;
  // contextualMenuCursor: NSCursor;
  // crosshairCursor: NSCursor;
  // currentCursor: NSCursor;
  // currentSystemCursor: NSCursor;
  // disappearingItemCursor: NSCursor;
  // dragCopyCursor: NSCursor;
  // dragLinkCursor: NSCursor;
  // readonly hotSpot: CGPoint;
  // IBeamCursor: NSCursor;
  // IBeamCursorForVerticalLayout: NSCursor;
  // readonly image: NSImage;
  // readonly isSetOnMouseEntered: boolean;
  // readonly isSetOnMouseExited: boolean;
  // openHandCursor: NSCursor;
  // operationNotAllowedCursor: NSCursor;
  // pointingHandCursor: NSCursor;
  // resizeDownCursor: NSCursor;
  // resizeLeftCursor: NSCursor;
  // resizeLeftRightCursor: NSCursor;
  // resizeRightCursor: NSCursor;
  // resizeUpCursor: NSCursor;
  // resizeUpDownCursor: NSCursor;
  // supportsSecureCoding: boolean;
}

export class HTMLNSTabViewItemElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTabViewItem.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    color: 'color',
    drawlabelinrect: 'drawLabelInRect',
    encodewithcoder: 'encodeWithCoder',
    identifier: 'identifier',
    image: 'image',
    initialfirstresponder: 'initialFirstResponder',
    initwithcoder: 'initWithCoder',
    initwithidentifier: 'initWithIdentifier',
    label: 'label',
    sizeoflabel: 'sizeOfLabel',
    tabstate: 'tabState',
    tabview: 'tabView',
    tabviewitemwithviewcontroller: 'tabViewItemWithViewController',
    tooltip: 'toolTip',
    view: 'view',
    viewcontroller: 'viewController',
  }

  // color: NSColor;
  // identifier: interop.Object;
  // image: NSImage;
  // initialFirstResponder: NSView;
  // readonly tabState: interop.Enum<typeof NSTabState>;
  // readonly tabView: NSTabView;
  // view: NSView;
  // viewController: NSViewController;
}

export class HTMLNSMenuItemBadgeElement extends HTMLNSObjectElement {
  readonly nativeObject = NSMenuItemBadge.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    alertswithcount: 'alertsWithCount',
    copywithzone: 'copyWithZone',
    initwithcount: 'initWithCount',
    initwithcounttype: 'initWithCountType',
    initwithstring: 'initWithString',
    itemcount: 'itemCount',
    newitemswithcount: 'newItemsWithCount',
    stringvalue: 'stringValue',
    type: 'type',
    updateswithcount: 'updatesWithCount',
  }

  // readonly itemCount: number;
  // readonly stringValue: NSString;
  // readonly type: interop.Enum<typeof NSMenuItemBadgeType>;
}

export class HTMLNSGridColumnElement extends HTMLNSObjectElement {
  readonly nativeObject = NSGridColumn.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    cellatindex: 'cellAtIndex',
    encodewithcoder: 'encodeWithCoder',
    gridview: 'gridView',
    initwithcoder: 'initWithCoder',
    ishidden: 'isHidden',
    leadingpadding: 'leadingPadding',
    mergecellsinrange: 'mergeCellsInRange',
    numberofcells: 'numberOfCells',
    trailingpadding: 'trailingPadding',
    width: 'width',
    xplacement: 'xPlacement',
  }

  // readonly gridView: NSGridView | null;
  // isHidden: boolean;
  // leadingPadding: number;
  // readonly numberOfCells: number;
  // trailingPadding: number;
  // width: number;
  // xPlacement: interop.Enum<typeof NSGridCellPlacement>;
}

export class HTMLNSPathCellElement extends HTMLNSActionCellElement {
  readonly nativeObject = NSPathCell.new();
  get delegate(): NSPathCellDelegateImpl {
    return (this.nativeObject.delegate ??= NSPathCellDelegateImpl.new()) as NSPathCellDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    allowedtypes: 'allowedTypes',
    autorelease: 'autorelease',
    backgroundcolor: 'backgroundColor',
    class: 'class',
    clickedpathcomponentcell: 'clickedPathComponentCell',
    conformstoprotocol: 'conformsToProtocol',
    debugdescription: 'debugDescription',
    delegate: 'delegate',
    description: 'description',
    doubleaction: 'doubleAction',
    hash: 'hash',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    mouseenteredwithframeinview: 'mouseEnteredWithFrameInView',
    mouseexitedwithframeinview: 'mouseExitedWithFrameInView',
    paneldidchangetodirectoryurl: 'panelDidChangeToDirectoryURL',
    panelselectiondidchange: 'panelSelectionDidChange',
    panelshouldenableurl: 'panelShouldEnableURL',
    paneluserenteredfilenameconfirmed: 'panelUserEnteredFilenameConfirmed',
    panelvalidateurlerror: 'panelValidateURLError',
    panelwillexpand: 'panelWillExpand',
    pathcomponentcellatpointwithframeinview: 'pathComponentCellAtPointWithFrameInView',
    pathcomponentcellclass: 'pathComponentCellClass',
    pathcomponentcells: 'pathComponentCells',
    pathstyle: 'pathStyle',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    placeholderattributedstring: 'placeholderAttributedString',
    placeholderstring: 'placeholderString',
    rectofpathcomponentcellwithframeinview: 'rectOfPathComponentCellWithFrameInView',
    release: 'release',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    self: 'self',
    setobjectvalue: 'setObjectValue',
    superclass: 'superclass',
    url: 'URL',
    validatemenuitem: 'validateMenuItem',
    zone: 'zone',
  }

  // backgroundColor: NSColor;
  // readonly clickedPathComponentCell: NSPathComponentCell;
  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // doubleAction: string;
  // readonly hash: number;
  // readonly isProxy: boolean;
  // pathComponentCellClass: interop.Object;
  // pathStyle: interop.Enum<typeof NSPathStyle>;
  // placeholderAttributedString: NSAttributedString;
  // readonly superclass: interop.Object;
  // URL: NSURL;
  // readonly zone: interop.Pointer;

  set pathcellwilldisplayopenpanel(value: (pathCell: NSPathCell, openPanel: NSOpenPanel) => void) {
    this.delegate.pathCellWillDisplayOpenPanel = value;
  }
  set pathcellwillpopupmenu(value: (pathCell: NSPathCell, menu: NSMenu) => void) {
    this.delegate.pathCellWillPopUpMenu = value;
  }
}

export class HTMLNSWorkspaceAuthorizationElement extends HTMLNSObjectElement {
  readonly nativeObject = NSWorkspaceAuthorization.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
  }

}

export class HTMLNSTextLayoutManagerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextLayoutManager.new();
  get delegate(): NSTextLayoutManagerDelegateImpl {
    return (this.nativeObject.delegate ??= NSTextLayoutManagerDelegateImpl.new()) as NSTextLayoutManagerDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    addrenderingattributevaluefortextrange: 'addRenderingAttributeValueForTextRange',
    autorelease: 'autorelease',
    basewritingdirectionatlocation: 'baseWritingDirectionAtLocation',
    class: 'class',
    conformstoprotocol: 'conformsToProtocol',
    debugdescription: 'debugDescription',
    delegate: 'delegate',
    description: 'description',
    documentrange: 'documentRange',
    encodewithcoder: 'encodeWithCoder',
    ensurelayoutforbounds: 'ensureLayoutForBounds',
    ensurelayoutforrange: 'ensureLayoutForRange',
    enumeratecaretoffsetsinlinefragmentatlocationusingblock: 'enumerateCaretOffsetsInLineFragmentAtLocationUsingBlock',
    enumeratecontainerboundariesfromlocationreverseusingblock: 'enumerateContainerBoundariesFromLocationReverseUsingBlock',
    enumeraterenderingattributesfromlocationreverseusingblock: 'enumerateRenderingAttributesFromLocationReverseUsingBlock',
    enumeratesubstringsfromlocationoptionsusingblock: 'enumerateSubstringsFromLocationOptionsUsingBlock',
    enumeratetextlayoutfragmentsfromlocationoptionsusingblock: 'enumerateTextLayoutFragmentsFromLocationOptionsUsingBlock',
    enumeratetextsegmentsinrangetypeoptionsusingblock: 'enumerateTextSegmentsInRangeTypeOptionsUsingBlock',
    hash: 'hash',
    init: 'init',
    initwithcoder: 'initWithCoder',
    invalidatelayoutforrange: 'invalidateLayoutForRange',
    invalidaterenderingattributesfortextrange: 'invalidateRenderingAttributesForTextRange',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    layoutqueue: 'layoutQueue',
    limitslayoutforsuspiciouscontents: 'limitsLayoutForSuspiciousContents',
    linefragmentrangeforpointincontaineratlocation: 'lineFragmentRangeForPointInContainerAtLocation',
    linkrenderingattributes: 'linkRenderingAttributes',
    locationfromlocationwithoffset: 'locationFromLocationWithOffset',
    offsetfromlocationtolocation: 'offsetFromLocationToLocation',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    release: 'release',
    removerenderingattributefortextrange: 'removeRenderingAttributeForTextRange',
    renderingattributesforlinkatlocation: 'renderingAttributesForLinkAtLocation',
    renderingattributesvalidator: 'renderingAttributesValidator',
    replacecontentsinrangewithattributedstring: 'replaceContentsInRangeWithAttributedString',
    replacecontentsinrangewithtextelements: 'replaceContentsInRangeWithTextElements',
    replacetextcontentmanager: 'replaceTextContentManager',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    self: 'self',
    setrenderingattributesfortextrange: 'setRenderingAttributesForTextRange',
    superclass: 'superclass',
    supportssecurecoding: 'supportsSecureCoding',
    textcontainer: 'textContainer',
    textcontentmanager: 'textContentManager',
    textlayoutfragmentforlocation: 'textLayoutFragmentForLocation',
    textlayoutfragmentforposition: 'textLayoutFragmentForPosition',
    textlayoutorientationatlocation: 'textLayoutOrientationAtLocation',
    textrangeforselectiongranularityenclosinglocation: 'textRangeForSelectionGranularityEnclosingLocation',
    textselectionnavigation: 'textSelectionNavigation',
    textselections: 'textSelections',
    textviewportlayoutcontroller: 'textViewportLayoutController',
    usageboundsfortextcontainer: 'usageBoundsForTextContainer',
    usesfontleading: 'usesFontLeading',
    useshyphenation: 'usesHyphenation',
    zone: 'zone',
  }

  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // readonly documentRange: NSTextRange;
  // readonly hash: number;
  // readonly isProxy: boolean;
  // layoutQueue: NSOperationQueue;
  // limitsLayoutForSuspiciousContents: boolean;
  // linkRenderingAttributes: NSDictionary;
  // renderingAttributesValidator: (p1: NSTextLayoutManager, p2: NSTextLayoutFragment) => void;
  // readonly superclass: interop.Object;
  // supportsSecureCoding: boolean;
  // textContainer: NSTextContainer;
  // readonly textContentManager: NSTextContentManager;
  // textSelectionNavigation: NSTextSelectionNavigation;
  // readonly textViewportLayoutController: NSTextViewportLayoutController;
  // readonly usageBoundsForTextContainer: CGRect;
  // usesFontLeading: boolean;
  // usesHyphenation: boolean;
  // readonly zone: interop.Pointer;

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
  readonly nativeObject = NSWindowTab.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    accessoryview: 'accessoryView',
    attributedtitle: 'attributedTitle',
    title: 'title',
    tooltip: 'toolTip',
  }

  // accessoryView: NSView;
  // attributedTitle: NSAttributedString;
}

export class HTMLNSDrawerElement extends HTMLNSResponderElement {
  readonly nativeObject = NSDrawer.new();
  get delegate(): NSDrawerDelegateImpl {
    return (this.nativeObject.delegate ??= NSDrawerDelegateImpl.new()) as NSDrawerDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    accessibilityactivationpoint: 'accessibilityActivationPoint',
    accessibilityallowedvalues: 'accessibilityAllowedValues',
    accessibilityapplicationfocuseduielement: 'accessibilityApplicationFocusedUIElement',
    accessibilityattributedstringforrange: 'accessibilityAttributedStringForRange',
    accessibilityattributeduserinputlabels: 'accessibilityAttributedUserInputLabels',
    accessibilitycancelbutton: 'accessibilityCancelButton',
    accessibilitycellforcolumnrow: 'accessibilityCellForColumnRow',
    accessibilitychildren: 'accessibilityChildren',
    accessibilitychildreninnavigationorder: 'accessibilityChildrenInNavigationOrder',
    accessibilityclearbutton: 'accessibilityClearButton',
    accessibilityclosebutton: 'accessibilityCloseButton',
    accessibilitycolumncount: 'accessibilityColumnCount',
    accessibilitycolumnheaderuielements: 'accessibilityColumnHeaderUIElements',
    accessibilitycolumnindexrange: 'accessibilityColumnIndexRange',
    accessibilitycolumns: 'accessibilityColumns',
    accessibilitycolumntitles: 'accessibilityColumnTitles',
    accessibilitycontents: 'accessibilityContents',
    accessibilitycriticalvalue: 'accessibilityCriticalValue',
    accessibilitycustomactions: 'accessibilityCustomActions',
    accessibilitycustomrotors: 'accessibilityCustomRotors',
    accessibilitydecrementbutton: 'accessibilityDecrementButton',
    accessibilitydefaultbutton: 'accessibilityDefaultButton',
    accessibilitydisclosedbyrow: 'accessibilityDisclosedByRow',
    accessibilitydisclosedrows: 'accessibilityDisclosedRows',
    accessibilitydisclosurelevel: 'accessibilityDisclosureLevel',
    accessibilitydocument: 'accessibilityDocument',
    accessibilityextrasmenubar: 'accessibilityExtrasMenuBar',
    accessibilityfilename: 'accessibilityFilename',
    accessibilityfocusedwindow: 'accessibilityFocusedWindow',
    accessibilityframe: 'accessibilityFrame',
    accessibilityframeforrange: 'accessibilityFrameForRange',
    accessibilityfullscreenbutton: 'accessibilityFullScreenButton',
    accessibilitygrowarea: 'accessibilityGrowArea',
    accessibilityhandles: 'accessibilityHandles',
    accessibilityheader: 'accessibilityHeader',
    accessibilityhelp: 'accessibilityHelp',
    accessibilityhorizontalscrollbar: 'accessibilityHorizontalScrollBar',
    accessibilityhorizontalunitdescription: 'accessibilityHorizontalUnitDescription',
    accessibilityhorizontalunits: 'accessibilityHorizontalUnits',
    accessibilityidentifier: 'accessibilityIdentifier',
    accessibilityincrementbutton: 'accessibilityIncrementButton',
    accessibilityindex: 'accessibilityIndex',
    accessibilityinsertionpointlinenumber: 'accessibilityInsertionPointLineNumber',
    accessibilitylabel: 'accessibilityLabel',
    accessibilitylabeluielements: 'accessibilityLabelUIElements',
    accessibilitylabelvalue: 'accessibilityLabelValue',
    accessibilitylayoutpointforscreenpoint: 'accessibilityLayoutPointForScreenPoint',
    accessibilitylayoutsizeforscreensize: 'accessibilityLayoutSizeForScreenSize',
    accessibilitylineforindex: 'accessibilityLineForIndex',
    accessibilitylinkeduielements: 'accessibilityLinkedUIElements',
    accessibilitymainwindow: 'accessibilityMainWindow',
    accessibilitymarkergroupuielement: 'accessibilityMarkerGroupUIElement',
    accessibilitymarkertypedescription: 'accessibilityMarkerTypeDescription',
    accessibilitymarkeruielements: 'accessibilityMarkerUIElements',
    accessibilitymarkervalues: 'accessibilityMarkerValues',
    accessibilitymaxvalue: 'accessibilityMaxValue',
    accessibilitymenubar: 'accessibilityMenuBar',
    accessibilityminimizebutton: 'accessibilityMinimizeButton',
    accessibilityminvalue: 'accessibilityMinValue',
    accessibilitynextcontents: 'accessibilityNextContents',
    accessibilitynumberofcharacters: 'accessibilityNumberOfCharacters',
    accessibilityorientation: 'accessibilityOrientation',
    accessibilityoverflowbutton: 'accessibilityOverflowButton',
    accessibilityparent: 'accessibilityParent',
    accessibilityperformcancel: 'accessibilityPerformCancel',
    accessibilityperformconfirm: 'accessibilityPerformConfirm',
    accessibilityperformdecrement: 'accessibilityPerformDecrement',
    accessibilityperformdelete: 'accessibilityPerformDelete',
    accessibilityperformincrement: 'accessibilityPerformIncrement',
    accessibilityperformpick: 'accessibilityPerformPick',
    accessibilityperformpress: 'accessibilityPerformPress',
    accessibilityperformraise: 'accessibilityPerformRaise',
    accessibilityperformshowalternateui: 'accessibilityPerformShowAlternateUI',
    accessibilityperformshowdefaultui: 'accessibilityPerformShowDefaultUI',
    accessibilityperformshowmenu: 'accessibilityPerformShowMenu',
    accessibilityplaceholdervalue: 'accessibilityPlaceholderValue',
    accessibilitypreviouscontents: 'accessibilityPreviousContents',
    accessibilityproxy: 'accessibilityProxy',
    accessibilityrangeforindex: 'accessibilityRangeForIndex',
    accessibilityrangeforline: 'accessibilityRangeForLine',
    accessibilityrangeforposition: 'accessibilityRangeForPosition',
    accessibilityrole: 'accessibilityRole',
    accessibilityroledescription: 'accessibilityRoleDescription',
    accessibilityrowcount: 'accessibilityRowCount',
    accessibilityrowheaderuielements: 'accessibilityRowHeaderUIElements',
    accessibilityrowindexrange: 'accessibilityRowIndexRange',
    accessibilityrows: 'accessibilityRows',
    accessibilityrtfforrange: 'accessibilityRTFForRange',
    accessibilityrulermarkertype: 'accessibilityRulerMarkerType',
    accessibilityscreenpointforlayoutpoint: 'accessibilityScreenPointForLayoutPoint',
    accessibilityscreensizeforlayoutsize: 'accessibilityScreenSizeForLayoutSize',
    accessibilitysearchbutton: 'accessibilitySearchButton',
    accessibilitysearchmenu: 'accessibilitySearchMenu',
    accessibilityselectedcells: 'accessibilitySelectedCells',
    accessibilityselectedchildren: 'accessibilitySelectedChildren',
    accessibilityselectedcolumns: 'accessibilitySelectedColumns',
    accessibilityselectedrows: 'accessibilitySelectedRows',
    accessibilityselectedtext: 'accessibilitySelectedText',
    accessibilityselectedtextrange: 'accessibilitySelectedTextRange',
    accessibilityselectedtextranges: 'accessibilitySelectedTextRanges',
    accessibilityservesastitleforuielements: 'accessibilityServesAsTitleForUIElements',
    accessibilitysharedcharacterrange: 'accessibilitySharedCharacterRange',
    accessibilitysharedfocuselements: 'accessibilitySharedFocusElements',
    accessibilitysharedtextuielements: 'accessibilitySharedTextUIElements',
    accessibilityshownmenu: 'accessibilityShownMenu',
    accessibilitysortdirection: 'accessibilitySortDirection',
    accessibilitysplitters: 'accessibilitySplitters',
    accessibilitystringforrange: 'accessibilityStringForRange',
    accessibilitystylerangeforindex: 'accessibilityStyleRangeForIndex',
    accessibilitysubrole: 'accessibilitySubrole',
    accessibilitytabs: 'accessibilityTabs',
    accessibilitytitle: 'accessibilityTitle',
    accessibilitytitleuielement: 'accessibilityTitleUIElement',
    accessibilitytoolbarbutton: 'accessibilityToolbarButton',
    accessibilitytopleveluielement: 'accessibilityTopLevelUIElement',
    accessibilityunitdescription: 'accessibilityUnitDescription',
    accessibilityunits: 'accessibilityUnits',
    accessibilityurl: 'accessibilityURL',
    accessibilityuserinputlabels: 'accessibilityUserInputLabels',
    accessibilityvalue: 'accessibilityValue',
    accessibilityvaluedescription: 'accessibilityValueDescription',
    accessibilityverticalscrollbar: 'accessibilityVerticalScrollBar',
    accessibilityverticalunitdescription: 'accessibilityVerticalUnitDescription',
    accessibilityverticalunits: 'accessibilityVerticalUnits',
    accessibilityvisiblecells: 'accessibilityVisibleCells',
    accessibilityvisiblecharacterrange: 'accessibilityVisibleCharacterRange',
    accessibilityvisiblechildren: 'accessibilityVisibleChildren',
    accessibilityvisiblecolumns: 'accessibilityVisibleColumns',
    accessibilityvisiblerows: 'accessibilityVisibleRows',
    accessibilitywarningvalue: 'accessibilityWarningValue',
    accessibilitywindow: 'accessibilityWindow',
    accessibilitywindows: 'accessibilityWindows',
    accessibilityzoombutton: 'accessibilityZoomButton',
    autorelease: 'autorelease',
    class: 'class',
    close: 'close',
    conformstoprotocol: 'conformsToProtocol',
    contentsize: 'contentSize',
    contentview: 'contentView',
    debugdescription: 'debugDescription',
    delegate: 'delegate',
    description: 'description',
    edge: 'edge',
    hash: 'hash',
    initwithcontentsizepreferrededge: 'initWithContentSizePreferredEdge',
    isaccessibilityalternateuivisible: 'isAccessibilityAlternateUIVisible',
    isaccessibilitydisclosed: 'isAccessibilityDisclosed',
    isaccessibilityedited: 'isAccessibilityEdited',
    isaccessibilityelement: 'isAccessibilityElement',
    isaccessibilityenabled: 'isAccessibilityEnabled',
    isaccessibilityexpanded: 'isAccessibilityExpanded',
    isaccessibilityfocused: 'isAccessibilityFocused',
    isaccessibilityfrontmost: 'isAccessibilityFrontmost',
    isaccessibilityhidden: 'isAccessibilityHidden',
    isaccessibilitymain: 'isAccessibilityMain',
    isaccessibilityminimized: 'isAccessibilityMinimized',
    isaccessibilitymodal: 'isAccessibilityModal',
    isaccessibilityorderedbyrow: 'isAccessibilityOrderedByRow',
    isaccessibilityprotectedcontent: 'isAccessibilityProtectedContent',
    isaccessibilityrequired: 'isAccessibilityRequired',
    isaccessibilityselected: 'isAccessibilitySelected',
    isaccessibilityselectorallowed: 'isAccessibilitySelectorAllowed',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    leadingoffset: 'leadingOffset',
    maxcontentsize: 'maxContentSize',
    mincontentsize: 'minContentSize',
    open: 'open',
    openonedge: 'openOnEdge',
    parentwindow: 'parentWindow',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    preferrededge: 'preferredEdge',
    release: 'release',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    self: 'self',
    state: 'state',
    superclass: 'superclass',
    toggle: 'toggle',
    trailingoffset: 'trailingOffset',
    zone: 'zone',
  }

  // accessibilityActivationPoint: CGPoint;
  // accessibilityApplicationFocusedUIElement: interop.Object;
  // accessibilityCancelButton: interop.Object;
  // accessibilityClearButton: interop.Object;
  // accessibilityCloseButton: interop.Object;
  // accessibilityColumnCount: number;
  // accessibilityColumnIndexRange: _NSRange;
  // accessibilityCriticalValue: interop.Object;
  // accessibilityDecrementButton: interop.Object;
  // accessibilityDefaultButton: interop.Object;
  // accessibilityDisclosedByRow: interop.Object;
  // accessibilityDisclosedRows: interop.Object;
  // accessibilityDisclosureLevel: number;
  // accessibilityExtrasMenuBar: interop.Object;
  // accessibilityFocusedWindow: interop.Object;
  // accessibilityFrame: CGRect;
  // accessibilityFullScreenButton: interop.Object;
  // accessibilityGrowArea: interop.Object;
  // accessibilityHeader: interop.Object;
  // accessibilityHorizontalScrollBar: interop.Object;
  // accessibilityHorizontalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityIncrementButton: interop.Object;
  // accessibilityIndex: number;
  // accessibilityInsertionPointLineNumber: number;
  // accessibilityLabelValue: number;
  // accessibilityMainWindow: interop.Object;
  // accessibilityMarkerGroupUIElement: interop.Object;
  // accessibilityMarkerValues: interop.Object;
  // accessibilityMaxValue: interop.Object;
  // accessibilityMenuBar: interop.Object;
  // accessibilityMinimizeButton: interop.Object;
  // accessibilityMinValue: interop.Object;
  // accessibilityNumberOfCharacters: number;
  // accessibilityOrientation: interop.Enum<typeof NSAccessibilityOrientation>;
  // accessibilityOverflowButton: interop.Object;
  // accessibilityParent: interop.Object;
  // accessibilityProxy: interop.Object;
  // accessibilityRowCount: number;
  // accessibilityRowIndexRange: _NSRange;
  // accessibilityRulerMarkerType: interop.Enum<typeof NSAccessibilityRulerMarkerType>;
  // accessibilitySearchButton: interop.Object;
  // accessibilitySearchMenu: interop.Object;
  // accessibilitySelectedTextRange: _NSRange;
  // accessibilitySharedCharacterRange: _NSRange;
  // accessibilityShownMenu: interop.Object;
  // accessibilitySortDirection: interop.Enum<typeof NSAccessibilitySortDirection>;
  // accessibilityTitleUIElement: interop.Object;
  // accessibilityToolbarButton: interop.Object;
  // accessibilityTopLevelUIElement: interop.Object;
  // accessibilityUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityURL: NSURL;
  // accessibilityValue: interop.Object;
  // accessibilityVerticalScrollBar: interop.Object;
  // accessibilityVerticalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityVisibleCharacterRange: _NSRange;
  // accessibilityWarningValue: interop.Object;
  // accessibilityWindow: interop.Object;
  // accessibilityZoomButton: interop.Object;
  // contentSize: CGSize;
  // contentView: NSView;
  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // readonly edge: interop.Enum<typeof NSRectEdge>;
  // readonly hash: number;
  // isAccessibilityAlternateUIVisible: boolean;
  // isAccessibilityDisclosed: boolean;
  // isAccessibilityEdited: boolean;
  // isAccessibilityElement: boolean;
  // isAccessibilityEnabled: boolean;
  // isAccessibilityExpanded: boolean;
  // isAccessibilityFocused: boolean;
  // isAccessibilityFrontmost: boolean;
  // isAccessibilityHidden: boolean;
  // isAccessibilityMain: boolean;
  // isAccessibilityMinimized: boolean;
  // isAccessibilityModal: boolean;
  // isAccessibilityOrderedByRow: boolean;
  // isAccessibilityProtectedContent: boolean;
  // isAccessibilityRequired: boolean;
  // isAccessibilitySelected: boolean;
  // readonly isProxy: boolean;
  // leadingOffset: number;
  // maxContentSize: CGSize;
  // minContentSize: CGSize;
  // parentWindow: NSWindow;
  // preferredEdge: interop.Enum<typeof NSRectEdge>;
  // readonly state: number;
  // readonly superclass: interop.Object;
  // trailingOffset: number;
  // readonly zone: interop.Pointer;

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
  readonly nativeObject = NSLayoutManager.new();
  get delegate(): NSLayoutManagerDelegateImpl {
    return (this.nativeObject.delegate ??= NSLayoutManagerDelegateImpl.new()) as NSLayoutManagerDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    addtemporaryattributesforcharacterrange: 'addTemporaryAttributesForCharacterRange',
    addtemporaryattributevalueforcharacterrange: 'addTemporaryAttributeValueForCharacterRange',
    addtextcontainer: 'addTextContainer',
    allowsnoncontiguouslayout: 'allowsNonContiguousLayout',
    attachmentsizeforglyphatindex: 'attachmentSizeForGlyphAtIndex',
    backgroundlayoutenabled: 'backgroundLayoutEnabled',
    boundingrectforglyphrangeintextcontainer: 'boundingRectForGlyphRangeInTextContainer',
    boundsrectfortextblockatindexeffectiverange: 'boundsRectForTextBlockAtIndexEffectiveRange',
    boundsrectfortextblockglyphrange: 'boundsRectForTextBlockGlyphRange',
    cgglyphatindex: 'CGGlyphAtIndex',
    cgglyphatindexisvalidindex: 'CGGlyphAtIndexIsValidIndex',
    characterindexforglyphatindex: 'characterIndexForGlyphAtIndex',
    characterindexforpointintextcontainerfractionofdistancebetweeninsertionpoints: 'characterIndexForPointInTextContainerFractionOfDistanceBetweenInsertionPoints',
    characterrangeforglyphrangeactualglyphrange: 'characterRangeForGlyphRangeActualGlyphRange',
    defaultattachmentscaling: 'defaultAttachmentScaling',
    defaultbaselineoffsetforfont: 'defaultBaselineOffsetForFont',
    defaultlineheightforfont: 'defaultLineHeightForFont',
    delegate: 'delegate',
    deleteglyphsinrange: 'deleteGlyphsInRange',
    drawbackgroundforglyphrangeatpoint: 'drawBackgroundForGlyphRangeAtPoint',
    drawglyphsforglyphrangeatpoint: 'drawGlyphsForGlyphRangeAtPoint',
    drawsoutsidelinefragmentforglyphatindex: 'drawsOutsideLineFragmentForGlyphAtIndex',
    drawstrikethroughforglyphrangestrikethroughtypebaselineoffsetlinefragmentrectlinefragmentglyphrangecontainerorigin: 'drawStrikethroughForGlyphRangeStrikethroughTypeBaselineOffsetLineFragmentRectLineFragmentGlyphRangeContainerOrigin',
    drawunderlineforglyphrangeunderlinetypebaselineoffsetlinefragmentrectlinefragmentglyphrangecontainerorigin: 'drawUnderlineForGlyphRangeUnderlineTypeBaselineOffsetLineFragmentRectLineFragmentGlyphRangeContainerOrigin',
    encodewithcoder: 'encodeWithCoder',
    ensureglyphsforcharacterrange: 'ensureGlyphsForCharacterRange',
    ensureglyphsforglyphrange: 'ensureGlyphsForGlyphRange',
    ensurelayoutforboundingrectintextcontainer: 'ensureLayoutForBoundingRectInTextContainer',
    ensurelayoutforcharacterrange: 'ensureLayoutForCharacterRange',
    ensurelayoutforglyphrange: 'ensureLayoutForGlyphRange',
    ensurelayoutfortextcontainer: 'ensureLayoutForTextContainer',
    enumerateenclosingrectsforglyphrangewithinselectedglyphrangeintextcontainerusingblock: 'enumerateEnclosingRectsForGlyphRangeWithinSelectedGlyphRangeInTextContainerUsingBlock',
    enumeratelinefragmentsforglyphrangeusingblock: 'enumerateLineFragmentsForGlyphRangeUsingBlock',
    extralinefragmentrect: 'extraLineFragmentRect',
    extralinefragmenttextcontainer: 'extraLineFragmentTextContainer',
    extralinefragmentusedrect: 'extraLineFragmentUsedRect',
    fillbackgroundrectarraycountforcharacterrangecolor: 'fillBackgroundRectArrayCountForCharacterRangeColor',
    firsttextview: 'firstTextView',
    firstunlaidcharacterindex: 'firstUnlaidCharacterIndex',
    firstunlaidglyphindex: 'firstUnlaidGlyphIndex',
    fractionofdistancethroughglyphforpointintextcontainer: 'fractionOfDistanceThroughGlyphForPointInTextContainer',
    getfirstunlaidcharacterindexglyphindex: 'getFirstUnlaidCharacterIndexGlyphIndex',
    getglyphsinrangeglyphscharacterindexesglyphinscriptionselasticbits: 'getGlyphsInRangeGlyphsCharacterIndexesGlyphInscriptionsElasticBits',
    getglyphsinrangeglyphscharacterindexesglyphinscriptionselasticbitsbidilevels: 'getGlyphsInRangeGlyphsCharacterIndexesGlyphInscriptionsElasticBitsBidiLevels',
    getglyphsinrangeglyphspropertiescharacterindexesbidilevels: 'getGlyphsInRangeGlyphsPropertiesCharacterIndexesBidiLevels',
    getglyphsrange: 'getGlyphsRange',
    getlinefragmentinsertionpointsforcharacteratindexalternatepositionsindisplayorderpositionscharacterindexes: 'getLineFragmentInsertionPointsForCharacterAtIndexAlternatePositionsInDisplayOrderPositionsCharacterIndexes',
    glyphatindex: 'glyphAtIndex',
    glyphatindexisvalidindex: 'glyphAtIndexIsValidIndex',
    glyphgenerator: 'glyphGenerator',
    glyphindexforcharacteratindex: 'glyphIndexForCharacterAtIndex',
    glyphindexforpointintextcontainer: 'glyphIndexForPointInTextContainer',
    glyphindexforpointintextcontainerfractionofdistancethroughglyph: 'glyphIndexForPointInTextContainerFractionOfDistanceThroughGlyph',
    glyphrangeforboundingrectintextcontainer: 'glyphRangeForBoundingRectInTextContainer',
    glyphrangeforboundingrectwithoutadditionallayoutintextcontainer: 'glyphRangeForBoundingRectWithoutAdditionalLayoutInTextContainer',
    glyphrangeforcharacterrangeactualcharacterrange: 'glyphRangeForCharacterRangeActualCharacterRange',
    glyphrangefortextcontainer: 'glyphRangeForTextContainer',
    hasnoncontiguouslayout: 'hasNonContiguousLayout',
    hyphenationfactor: 'hyphenationFactor',
    init: 'init',
    initwithcoder: 'initWithCoder',
    insertglyphatglyphindexcharacterindex: 'insertGlyphAtGlyphIndexCharacterIndex',
    insertglyphslengthforstartingglyphatindexcharacterindex: 'insertGlyphsLengthForStartingGlyphAtIndexCharacterIndex',
    inserttextcontaineratindex: 'insertTextContainerAtIndex',
    intattributeforglyphatindex: 'intAttributeForGlyphAtIndex',
    invalidatedisplayforcharacterrange: 'invalidateDisplayForCharacterRange',
    invalidatedisplayforglyphrange: 'invalidateDisplayForGlyphRange',
    invalidateglyphsforcharacterrangechangeinlengthactualcharacterrange: 'invalidateGlyphsForCharacterRangeChangeInLengthActualCharacterRange',
    invalidateglyphsonlayoutinvalidationforglyphrange: 'invalidateGlyphsOnLayoutInvalidationForGlyphRange',
    invalidatelayoutforcharacterrangeactualcharacterrange: 'invalidateLayoutForCharacterRangeActualCharacterRange',
    invalidatelayoutforcharacterrangeissoftactualcharacterrange: 'invalidateLayoutForCharacterRangeIsSoftActualCharacterRange',
    isvalidglyphindex: 'isValidGlyphIndex',
    layoutmanagerownsfirstresponderinwindow: 'layoutManagerOwnsFirstResponderInWindow',
    layoutrectfortextblockatindexeffectiverange: 'layoutRectForTextBlockAtIndexEffectiveRange',
    layoutrectfortextblockglyphrange: 'layoutRectForTextBlockGlyphRange',
    limitslayoutforsuspiciouscontents: 'limitsLayoutForSuspiciousContents',
    linefragmentrectforglyphatindexeffectiverange: 'lineFragmentRectForGlyphAtIndexEffectiveRange',
    linefragmentrectforglyphatindexeffectiverangewithoutadditionallayout: 'lineFragmentRectForGlyphAtIndexEffectiveRangeWithoutAdditionalLayout',
    linefragmentusedrectforglyphatindexeffectiverange: 'lineFragmentUsedRectForGlyphAtIndexEffectiveRange',
    linefragmentusedrectforglyphatindexeffectiverangewithoutadditionallayout: 'lineFragmentUsedRectForGlyphAtIndexEffectiveRangeWithoutAdditionalLayout',
    locationforglyphatindex: 'locationForGlyphAtIndex',
    notshownattributeforglyphatindex: 'notShownAttributeForGlyphAtIndex',
    numberofglyphs: 'numberOfGlyphs',
    processeditingfortextstorageeditedrangechangeinlengthinvalidatedrange: 'processEditingForTextStorageEditedRangeChangeInLengthInvalidatedRange',
    propertyforglyphatindex: 'propertyForGlyphAtIndex',
    rangeofnominallyspacedglyphscontainingindex: 'rangeOfNominallySpacedGlyphsContainingIndex',
    rectarrayforcharacterrangewithinselectedcharacterrangeintextcontainerrectcount: 'rectArrayForCharacterRangeWithinSelectedCharacterRangeInTextContainerRectCount',
    rectarrayforglyphrangewithinselectedglyphrangeintextcontainerrectcount: 'rectArrayForGlyphRangeWithinSelectedGlyphRangeInTextContainerRectCount',
    removetemporaryattributeforcharacterrange: 'removeTemporaryAttributeForCharacterRange',
    removetextcontaineratindex: 'removeTextContainerAtIndex',
    replaceglyphatindexwithglyph: 'replaceGlyphAtIndexWithGlyph',
    replacetextstorage: 'replaceTextStorage',
    ruleraccessoryviewfortextviewparagraphstylerulerenabled: 'rulerAccessoryViewForTextViewParagraphStyleRulerEnabled',
    rulermarkersfortextviewparagraphstyleruler: 'rulerMarkersForTextViewParagraphStyleRuler',
    setattachmentsizeforglyphrange: 'setAttachmentSizeForGlyphRange',
    setboundsrectfortextblockglyphrange: 'setBoundsRectForTextBlockGlyphRange',
    setcharacterindexforglyphatindex: 'setCharacterIndexForGlyphAtIndex',
    setdrawsoutsidelinefragmentforglyphatindex: 'setDrawsOutsideLineFragmentForGlyphAtIndex',
    setextralinefragmentrectusedrecttextcontainer: 'setExtraLineFragmentRectUsedRectTextContainer',
    setglyphspropertiescharacterindexesfontforglyphrange: 'setGlyphsPropertiesCharacterIndexesFontForGlyphRange',
    setintattributevalueforglyphatindex: 'setIntAttributeValueForGlyphAtIndex',
    setlayoutrectfortextblockglyphrange: 'setLayoutRectForTextBlockGlyphRange',
    setlinefragmentrectforglyphrangeusedrect: 'setLineFragmentRectForGlyphRangeUsedRect',
    setlocationforstartofglyphrange: 'setLocationForStartOfGlyphRange',
    setlocationsstartingglyphindexescountforglyphrange: 'setLocationsStartingGlyphIndexesCountForGlyphRange',
    setnotshownattributeforglyphatindex: 'setNotShownAttributeForGlyphAtIndex',
    settemporaryattributesforcharacterrange: 'setTemporaryAttributesForCharacterRange',
    settextcontainerforglyphrange: 'setTextContainerForGlyphRange',
    showattachmentcellinrectcharacterindex: 'showAttachmentCellInRectCharacterIndex',
    showcgglyphspositionscountfontmatrixattributesincontext: 'showCGGlyphsPositionsCountFontMatrixAttributesInContext',
    showcgglyphspositionscountfonttextmatrixattributesincontext: 'showCGGlyphsPositionsCountFontTextMatrixAttributesInContext',
    showpackedglyphslengthglyphrangeatpointfontcolorprintingadjustment: 'showPackedGlyphsLengthGlyphRangeAtPointFontColorPrintingAdjustment',
    showscontrolcharacters: 'showsControlCharacters',
    showsinvisiblecharacters: 'showsInvisibleCharacters',
    strikethroughglyphrangestrikethroughtypelinefragmentrectlinefragmentglyphrangecontainerorigin: 'strikethroughGlyphRangeStrikethroughTypeLineFragmentRectLineFragmentGlyphRangeContainerOrigin',
    substitutefontforfont: 'substituteFontForFont',
    supportssecurecoding: 'supportsSecureCoding',
    temporaryattributeatcharacterindexeffectiverange: 'temporaryAttributeAtCharacterIndexEffectiveRange',
    temporaryattributeatcharacterindexlongesteffectiverangeinrange: 'temporaryAttributeAtCharacterIndexLongestEffectiveRangeInRange',
    temporaryattributesatcharacterindexeffectiverange: 'temporaryAttributesAtCharacterIndexEffectiveRange',
    temporaryattributesatcharacterindexlongesteffectiverangeinrange: 'temporaryAttributesAtCharacterIndexLongestEffectiveRangeInRange',
    textcontainerchangedgeometry: 'textContainerChangedGeometry',
    textcontainerchangedtextview: 'textContainerChangedTextView',
    textcontainerforglyphatindexeffectiverange: 'textContainerForGlyphAtIndexEffectiveRange',
    textcontainerforglyphatindexeffectiverangewithoutadditionallayout: 'textContainerForGlyphAtIndexEffectiveRangeWithoutAdditionalLayout',
    textcontainers: 'textContainers',
    textstorage: 'textStorage',
    textstorageeditedrangechangeinlengthinvalidatedrange: 'textStorageEditedRangeChangeInLengthInvalidatedRange',
    textviewforbeginningofselection: 'textViewForBeginningOfSelection',
    truncatedglyphrangeinlinefragmentforglyphatindex: 'truncatedGlyphRangeInLineFragmentForGlyphAtIndex',
    typesetter: 'typesetter',
    typesetterbehavior: 'typesetterBehavior',
    underlineglyphrangeunderlinetypelinefragmentrectlinefragmentglyphrangecontainerorigin: 'underlineGlyphRangeUnderlineTypeLineFragmentRectLineFragmentGlyphRangeContainerOrigin',
    usedrectfortextcontainer: 'usedRectForTextContainer',
    usesdefaulthyphenation: 'usesDefaultHyphenation',
    usesfontleading: 'usesFontLeading',
    usesscreenfonts: 'usesScreenFonts',
  }

  // allowsNonContiguousLayout: boolean;
  // backgroundLayoutEnabled: boolean;
  // defaultAttachmentScaling: interop.Enum<typeof NSImageScaling>;
  // readonly extraLineFragmentRect: CGRect;
  // readonly extraLineFragmentTextContainer: NSTextContainer;
  // readonly extraLineFragmentUsedRect: CGRect;
  // readonly firstTextView: NSTextView;
  // glyphGenerator: NSGlyphGenerator;
  // readonly hasNonContiguousLayout: boolean;
  // hyphenationFactor: number;
  // limitsLayoutForSuspiciousContents: boolean;
  // readonly numberOfGlyphs: number;
  // showsControlCharacters: boolean;
  // showsInvisibleCharacters: boolean;
  // supportsSecureCoding: boolean;
  // readonly textContainers: NSArray;
  // textStorage: NSTextStorage;
  // readonly textViewForBeginningOfSelection: NSTextView;
  // typesetter: NSTypesetter;
  // typesetterBehavior: interop.Enum<typeof NSTypesetterBehavior>;
  // usesDefaultHyphenation: boolean;
  // usesFontLeading: boolean;
  // usesScreenFonts: boolean;

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
  readonly nativeObject = NSSharingService.new();
  get delegate(): NSSharingServiceDelegateImpl {
    return (this.nativeObject.delegate ??= NSSharingServiceDelegateImpl.new()) as NSSharingServiceDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    accountname: 'accountName',
    alternateimage: 'alternateImage',
    attachmentfileurls: 'attachmentFileURLs',
    canperformwithitems: 'canPerformWithItems',
    delegate: 'delegate',
    image: 'image',
    initwithtitleimagealternateimagehandler: 'initWithTitleImageAlternateImageHandler',
    menuitemtitle: 'menuItemTitle',
    messagebody: 'messageBody',
    performwithitems: 'performWithItems',
    permanentlink: 'permanentLink',
    recipients: 'recipients',
    sharingservicenamed: 'sharingServiceNamed',
    sharingservicesforitems: 'sharingServicesForItems',
    subject: 'subject',
    title: 'title',
  }

  // readonly accountName: NSString;
  // readonly alternateImage: NSImage;
  // readonly attachmentFileURLs: NSArray;
  // readonly image: NSImage;
  // readonly messageBody: NSString;
  // readonly permanentLink: NSURL;
  // readonly title: NSString;

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
  readonly nativeObject = NSTreeController.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    add: 'add',
    addchild: 'addChild',
    addselectionindexpaths: 'addSelectionIndexPaths',
    alwaysusesmultiplevaluesmarker: 'alwaysUsesMultipleValuesMarker',
    arrangedobjects: 'arrangedObjects',
    avoidsemptyselection: 'avoidsEmptySelection',
    canaddchild: 'canAddChild',
    caninsert: 'canInsert',
    caninsertchild: 'canInsertChild',
    childrenkeypath: 'childrenKeyPath',
    childrenkeypathfornode: 'childrenKeyPathForNode',
    content: 'content',
    countkeypath: 'countKeyPath',
    countkeypathfornode: 'countKeyPathForNode',
    insert: 'insert',
    insertchild: 'insertChild',
    insertobjectatarrangedobjectindexpath: 'insertObjectAtArrangedObjectIndexPath',
    insertobjectsatarrangedobjectindexpaths: 'insertObjectsAtArrangedObjectIndexPaths',
    leafkeypath: 'leafKeyPath',
    leafkeypathfornode: 'leafKeyPathForNode',
    movenodestoindexpath: 'moveNodesToIndexPath',
    movenodetoindexpath: 'moveNodeToIndexPath',
    preservesselection: 'preservesSelection',
    rearrangeobjects: 'rearrangeObjects',
    remove: 'remove',
    removeobjectatarrangedobjectindexpath: 'removeObjectAtArrangedObjectIndexPath',
    removeobjectsatarrangedobjectindexpaths: 'removeObjectsAtArrangedObjectIndexPaths',
    removeselectionindexpaths: 'removeSelectionIndexPaths',
    selectednodes: 'selectedNodes',
    selectedobjects: 'selectedObjects',
    selectionindexpath: 'selectionIndexPath',
    selectionindexpaths: 'selectionIndexPaths',
    selectsinsertedobjects: 'selectsInsertedObjects',
    sortdescriptors: 'sortDescriptors',
  }

  // alwaysUsesMultipleValuesMarker: boolean;
  // readonly arrangedObjects: NSTreeNode;
  // avoidsEmptySelection: boolean;
  // readonly canAddChild: boolean;
  // readonly canInsert: boolean;
  // readonly canInsertChild: boolean;
  // content: interop.Object;
  // preservesSelection: boolean;
  // readonly selectedNodes: NSArray;
  // readonly selectedObjects: NSArray;
  // readonly selectionIndexPath: NSIndexPath;
  // readonly selectionIndexPaths: NSArray;
  // selectsInsertedObjects: boolean;
}

export class HTMLNSTypesetterElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTypesetter.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    actionforcontrolcharacteratindex: 'actionForControlCharacterAtIndex',
    attributedstring: 'attributedString',
    attributesforextralinefragment: 'attributesForExtraLineFragment',
    baselineoffsetinlayoutmanagerglyphindex: 'baselineOffsetInLayoutManagerGlyphIndex',
    beginlinewithglyphatindex: 'beginLineWithGlyphAtIndex',
    beginparagraph: 'beginParagraph',
    bidiprocessingenabled: 'bidiProcessingEnabled',
    boundingboxforcontrolglyphatindexfortextcontainerproposedlinefragmentglyphpositioncharacterindex: 'boundingBoxForControlGlyphAtIndexForTextContainerProposedLineFragmentGlyphPositionCharacterIndex',
    characterrangeforglyphrangeactualglyphrange: 'characterRangeForGlyphRangeActualGlyphRange',
    currentparagraphstyle: 'currentParagraphStyle',
    currenttextcontainer: 'currentTextContainer',
    defaulttypesetterbehavior: 'defaultTypesetterBehavior',
    deleteglyphsinrange: 'deleteGlyphsInRange',
    endlinewithglyphrange: 'endLineWithGlyphRange',
    endparagraph: 'endParagraph',
    getglyphsinrangeglyphscharacterindexesglyphinscriptionselasticbitsbidilevels: 'getGlyphsInRangeGlyphsCharacterIndexesGlyphInscriptionsElasticBitsBidiLevels',
    getlinefragmentrectusedrectforparagraphseparatorglyphrangeatproposedorigin: 'getLineFragmentRectUsedRectForParagraphSeparatorGlyphRangeAtProposedOrigin',
    getlinefragmentrectusedrectremainingrectforstartingglyphatindexproposedrectlinespacingparagraphspacingbeforeparagraphspacingafter: 'getLineFragmentRectUsedRectRemainingRectForStartingGlyphAtIndexProposedRectLineSpacingParagraphSpacingBeforeParagraphSpacingAfter',
    glyphrangeforcharacterrangeactualcharacterrange: 'glyphRangeForCharacterRangeActualCharacterRange',
    hyphenationfactor: 'hyphenationFactor',
    hyphenationfactorforglyphatindex: 'hyphenationFactorForGlyphAtIndex',
    hyphencharacterforglyphatindex: 'hyphenCharacterForGlyphAtIndex',
    insertglyphatglyphindexcharacterindex: 'insertGlyphAtGlyphIndexCharacterIndex',
    layoutcharactersinrangeforlayoutmanagermaximumnumberoflinefragments: 'layoutCharactersInRangeForLayoutManagerMaximumNumberOfLineFragments',
    layoutglyphsinlayoutmanagerstartingatglyphindexmaxnumberoflinefragmentsnextglyphindex: 'layoutGlyphsInLayoutManagerStartingAtGlyphIndexMaxNumberOfLineFragmentsNextGlyphIndex',
    layoutmanager: 'layoutManager',
    layoutparagraphatpoint: 'layoutParagraphAtPoint',
    linefragmentpadding: 'lineFragmentPadding',
    linespacingafterglyphatindexwithproposedlinefragmentrect: 'lineSpacingAfterGlyphAtIndexWithProposedLineFragmentRect',
    paragraphcharacterrange: 'paragraphCharacterRange',
    paragraphglyphrange: 'paragraphGlyphRange',
    paragraphseparatorcharacterrange: 'paragraphSeparatorCharacterRange',
    paragraphseparatorglyphrange: 'paragraphSeparatorGlyphRange',
    paragraphspacingafterglyphatindexwithproposedlinefragmentrect: 'paragraphSpacingAfterGlyphAtIndexWithProposedLineFragmentRect',
    paragraphspacingbeforeglyphatindexwithproposedlinefragmentrect: 'paragraphSpacingBeforeGlyphAtIndexWithProposedLineFragmentRect',
    printingadjustmentinlayoutmanagerfornominallyspacedglyphrangepackedglyphscount: 'printingAdjustmentInLayoutManagerForNominallySpacedGlyphRangePackedGlyphsCount',
    setattachmentsizeforglyphrange: 'setAttachmentSizeForGlyphRange',
    setbidilevelsforglyphrange: 'setBidiLevelsForGlyphRange',
    setdrawsoutsidelinefragmentforglyphrange: 'setDrawsOutsideLineFragmentForGlyphRange',
    sethardinvalidationforglyphrange: 'setHardInvalidationForGlyphRange',
    setlinefragmentrectforglyphrangeusedrectbaselineoffset: 'setLineFragmentRectForGlyphRangeUsedRectBaselineOffset',
    setlocationwithadvancementsforstartofglyphrange: 'setLocationWithAdvancementsForStartOfGlyphRange',
    setnotshownattributeforglyphrange: 'setNotShownAttributeForGlyphRange',
    setparagraphglyphrangeseparatorglyphrange: 'setParagraphGlyphRangeSeparatorGlyphRange',
    sharedsystemtypesetter: 'sharedSystemTypesetter',
    sharedsystemtypesetterforbehavior: 'sharedSystemTypesetterForBehavior',
    shouldbreaklinebyhyphenatingbeforecharacteratindex: 'shouldBreakLineByHyphenatingBeforeCharacterAtIndex',
    shouldbreaklinebywordbeforecharacteratindex: 'shouldBreakLineByWordBeforeCharacterAtIndex',
    substitutefontforfont: 'substituteFontForFont',
    substituteglyphsinrangewithglyphs: 'substituteGlyphsInRangeWithGlyphs',
    textcontainers: 'textContainers',
    texttabforglyphlocationwritingdirectionmaxlocation: 'textTabForGlyphLocationWritingDirectionMaxLocation',
    typesetterbehavior: 'typesetterBehavior',
    usesfontleading: 'usesFontLeading',
    willsetlinefragmentrectforglyphrangeusedrectbaselineoffset: 'willSetLineFragmentRectForGlyphRangeUsedRectBaselineOffset',
  }

  // attributedString: NSAttributedString;
  // readonly attributesForExtraLineFragment: NSDictionary;
  // bidiProcessingEnabled: boolean;
  // readonly currentParagraphStyle: NSParagraphStyle;
  // readonly currentTextContainer: NSTextContainer;
  // defaultTypesetterBehavior: interop.Enum<typeof NSTypesetterBehavior>;
  // hyphenationFactor: number;
  // readonly layoutManager: NSLayoutManager;
  // lineFragmentPadding: number;
  // readonly paragraphCharacterRange: _NSRange;
  // readonly paragraphGlyphRange: _NSRange;
  // readonly paragraphSeparatorCharacterRange: _NSRange;
  // readonly paragraphSeparatorGlyphRange: _NSRange;
  // sharedSystemTypesetter: NSTypesetter;
  // readonly textContainers: NSArray;
  // typesetterBehavior: interop.Enum<typeof NSTypesetterBehavior>;
  // usesFontLeading: boolean;
}

export class HTMLNSScrubberSelectionStyleElement extends HTMLNSObjectElement {
  readonly nativeObject = NSScrubberSelectionStyle.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    encodewithcoder: 'encodeWithCoder',
    init: 'init',
    initwithcoder: 'initWithCoder',
    makeselectionview: 'makeSelectionView',
    outlineoverlaystyle: 'outlineOverlayStyle',
    roundedbackgroundstyle: 'roundedBackgroundStyle',
  }

  // outlineOverlayStyle: NSScrubberSelectionStyle;
  // roundedBackgroundStyle: NSScrubberSelectionStyle;
}

export class HTMLNSPreviewRepresentingActivityItemElement extends HTMLNSObjectElement {
  readonly nativeObject = NSPreviewRepresentingActivityItem.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    autorelease: 'autorelease',
    class: 'class',
    conformstoprotocol: 'conformsToProtocol',
    debugdescription: 'debugDescription',
    description: 'description',
    hash: 'hash',
    iconprovider: 'iconProvider',
    imageprovider: 'imageProvider',
    initwithitemtitleimageicon: 'initWithItemTitleImageIcon',
    initwithitemtitleimageprovidericonprovider: 'initWithItemTitleImageProviderIconProvider',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    item: 'item',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    release: 'release',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    self: 'self',
    superclass: 'superclass',
    title: 'title',
    zone: 'zone',
  }

  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // readonly hash: number;
  // readonly iconProvider: NSItemProvider;
  // readonly imageProvider: NSItemProvider;
  // readonly isProxy: boolean;
  // readonly item: interop.Object;
  // readonly superclass: interop.Object;
  // readonly title: NSString;
  // readonly zone: interop.Pointer;
}

export class HTMLNSDraggingSessionElement extends HTMLNSObjectElement {
  readonly nativeObject = NSDraggingSession.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    animatestostartingpositionsoncancelorfail: 'animatesToStartingPositionsOnCancelOrFail',
    draggingformation: 'draggingFormation',
    draggingleaderindex: 'draggingLeaderIndex',
    dragginglocation: 'draggingLocation',
    draggingpasteboard: 'draggingPasteboard',
    draggingsequencenumber: 'draggingSequenceNumber',
    enumeratedraggingitemswithoptionsforviewclassessearchoptionsusingblock: 'enumerateDraggingItemsWithOptionsForViewClassesSearchOptionsUsingBlock',
  }

  // animatesToStartingPositionsOnCancelOrFail: boolean;
  // draggingFormation: interop.Enum<typeof NSDraggingFormation>;
  // draggingLeaderIndex: number;
  // readonly draggingLocation: CGPoint;
  // readonly draggingPasteboard: NSPasteboard;
  // readonly draggingSequenceNumber: number;
}

export class HTMLNSCollectionViewDiffableDataSourceElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCollectionViewDiffableDataSource.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    applysnapshotanimatingdifferences: 'applySnapshotAnimatingDifferences',
    autorelease: 'autorelease',
    class: 'class',
    collectionviewitemforrepresentedobjectatindexpath: 'collectionViewItemForRepresentedObjectAtIndexPath',
    collectionviewnumberofitemsinsection: 'collectionViewNumberOfItemsInSection',
    collectionviewviewforsupplementaryelementofkindatindexpath: 'collectionViewViewForSupplementaryElementOfKindAtIndexPath',
    conformstoprotocol: 'conformsToProtocol',
    debugdescription: 'debugDescription',
    description: 'description',
    hash: 'hash',
    indexpathforitemidentifier: 'indexPathForItemIdentifier',
    initwithcollectionviewitemprovider: 'initWithCollectionViewItemProvider',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    itemidentifierforindexpath: 'itemIdentifierForIndexPath',
    numberofsectionsincollectionview: 'numberOfSectionsInCollectionView',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    release: 'release',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    self: 'self',
    snapshot: 'snapshot',
    superclass: 'superclass',
    supplementaryviewprovider: 'supplementaryViewProvider',
    zone: 'zone',
  }

  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // readonly hash: number;
  // readonly isProxy: boolean;
  // readonly superclass: interop.Object;
  // supplementaryViewProvider: (p1: NSCollectionView, p2: NSString | string, p3: NSIndexPath) => NSView;
  // readonly zone: interop.Pointer;
}

export class HTMLNSTextContentManagerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextContentManager.new();
  get delegate(): NSTextContentManagerDelegateImpl {
    return (this.nativeObject.delegate ??= NSTextContentManagerDelegateImpl.new()) as NSTextContentManagerDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    addtextlayoutmanager: 'addTextLayoutManager',
    adjustedrangefromrangeforeditingtextselection: 'adjustedRangeFromRangeForEditingTextSelection',
    automaticallysynchronizestextlayoutmanagers: 'automaticallySynchronizesTextLayoutManagers',
    automaticallysynchronizestobackingstore: 'automaticallySynchronizesToBackingStore',
    autorelease: 'autorelease',
    class: 'class',
    conformstoprotocol: 'conformsToProtocol',
    debugdescription: 'debugDescription',
    delegate: 'delegate',
    description: 'description',
    documentrange: 'documentRange',
    encodewithcoder: 'encodeWithCoder',
    enumeratetextelementsfromlocationoptionsusingblock: 'enumerateTextElementsFromLocationOptionsUsingBlock',
    haseditingtransaction: 'hasEditingTransaction',
    hash: 'hash',
    init: 'init',
    initwithcoder: 'initWithCoder',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    locationfromlocationwithoffset: 'locationFromLocationWithOffset',
    offsetfromlocationtolocation: 'offsetFromLocationToLocation',
    performeditingtransactionusingblock: 'performEditingTransactionUsingBlock',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    primarytextlayoutmanager: 'primaryTextLayoutManager',
    recordeditactioninrangenewtextrange: 'recordEditActionInRangeNewTextRange',
    release: 'release',
    removetextlayoutmanager: 'removeTextLayoutManager',
    replacecontentsinrangewithtextelements: 'replaceContentsInRangeWithTextElements',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    self: 'self',
    superclass: 'superclass',
    supportssecurecoding: 'supportsSecureCoding',
    synchronizetextlayoutmanagers: 'synchronizeTextLayoutManagers',
    synchronizetobackingstore: 'synchronizeToBackingStore',
    textelementsforrange: 'textElementsForRange',
    textlayoutmanagers: 'textLayoutManagers',
    zone: 'zone',
  }

  // automaticallySynchronizesTextLayoutManagers: boolean;
  // automaticallySynchronizesToBackingStore: boolean;
  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // readonly documentRange: NSTextRange;
  // readonly hasEditingTransaction: boolean;
  // readonly hash: number;
  // readonly isProxy: boolean;
  // primaryTextLayoutManager: NSTextLayoutManager;
  // readonly superclass: interop.Object;
  // supportsSecureCoding: boolean;
  // readonly textLayoutManagers: NSArray;
  // readonly zone: interop.Pointer;

  set textcontentmanagertextelementatlocation(value: (textContentManager: NSTextContentManager, location: NSTextLocation) => NSTextElement) {
    this.delegate.textContentManagerTextElementAtLocation = value;
  }
  set textcontentmanagershouldenumeratetextelementoptions(value: (textContentManager: NSTextContentManager, textElement: NSTextElement, options: interop.Enum<typeof NSTextContentManagerEnumerationOptions>) => boolean) {
    this.delegate.textContentManagerShouldEnumerateTextElementOptions = value;
  }
}

export class HTMLNSPrinterElement extends HTMLNSObjectElement {
  readonly nativeObject = NSPrinter.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    acceptsbinary: 'acceptsBinary',
    booleanforkeyintable: 'booleanForKeyInTable',
    copywithzone: 'copyWithZone',
    devicedescription: 'deviceDescription',
    domain: 'domain',
    encodewithcoder: 'encodeWithCoder',
    floatforkeyintable: 'floatForKeyInTable',
    host: 'host',
    imagerectforpaper: 'imageRectForPaper',
    initwithcoder: 'initWithCoder',
    intforkeyintable: 'intForKeyInTable',
    iscolor: 'isColor',
    isfontavailable: 'isFontAvailable',
    iskeyintable: 'isKeyInTable',
    isoutputstackinreverseorder: 'isOutputStackInReverseOrder',
    languagelevel: 'languageLevel',
    name: 'name',
    note: 'note',
    pagesizeforpaper: 'pageSizeForPaper',
    printernames: 'printerNames',
    printertypes: 'printerTypes',
    printerwithname: 'printerWithName',
    printerwithnamedomainincludeunavailable: 'printerWithNameDomainIncludeUnavailable',
    printerwithtype: 'printerWithType',
    rectforkeyintable: 'rectForKeyInTable',
    sizeforkeyintable: 'sizeForKeyInTable',
    statusfortable: 'statusForTable',
    stringforkeyintable: 'stringForKeyInTable',
    stringlistforkeyintable: 'stringListForKeyInTable',
    type: 'type',
  }

  // readonly deviceDescription: NSDictionary;
  // readonly languageLevel: number;
  // readonly name: NSString;
  // printerNames: NSArray;
  // printerTypes: NSArray;
  // readonly type: NSString;
}

export class HTMLNSAppearanceElement extends HTMLNSObjectElement {
  readonly nativeObject = NSAppearance.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    allowsvibrancy: 'allowsVibrancy',
    appearancenamed: 'appearanceNamed',
    bestmatchfromappearanceswithnames: 'bestMatchFromAppearancesWithNames',
    currentappearance: 'currentAppearance',
    currentdrawingappearance: 'currentDrawingAppearance',
    encodewithcoder: 'encodeWithCoder',
    initwithappearancenamedbundle: 'initWithAppearanceNamedBundle',
    initwithcoder: 'initWithCoder',
    name: 'name',
    performascurrentdrawingappearance: 'performAsCurrentDrawingAppearance',
    supportssecurecoding: 'supportsSecureCoding',
  }

  // readonly allowsVibrancy: boolean;
  // currentAppearance: NSAppearance;
  // currentDrawingAppearance: NSAppearance;
  // readonly name: NSString;
  // supportsSecureCoding: boolean;
}

export class HTMLNSTextInputContextElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextInputContext.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    acceptsglyphinfo: 'acceptsGlyphInfo',
    activate: 'activate',
    allowedinputsourcelocales: 'allowedInputSourceLocales',
    client: 'client',
    currentinputcontext: 'currentInputContext',
    deactivate: 'deactivate',
    discardmarkedtext: 'discardMarkedText',
    handleevent: 'handleEvent',
    initwithclient: 'initWithClient',
    invalidatecharactercoordinates: 'invalidateCharacterCoordinates',
    keyboardinputsources: 'keyboardInputSources',
    localizednameforinputsource: 'localizedNameForInputSource',
    selectedkeyboardinputsource: 'selectedKeyboardInputSource',
    textinputclientdidendscrollingorzooming: 'textInputClientDidEndScrollingOrZooming',
    textinputclientwillstartscrollingorzooming: 'textInputClientWillStartScrollingOrZooming',
  }

  // acceptsGlyphInfo: boolean;
  // readonly client: NSTextInputClient;
  // currentInputContext: NSTextInputContext;
  // readonly keyboardInputSources: NSArray;
}

export class HTMLNSCustomImageRepElement extends HTMLNSImageRepElement {
  readonly nativeObject = NSCustomImageRep.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    delegate: 'delegate',
    drawinghandler: 'drawingHandler',
    drawselector: 'drawSelector',
    initwithdrawselectordelegate: 'initWithDrawSelectorDelegate',
    initwithsizeflippeddrawinghandler: 'initWithSizeFlippedDrawingHandler',
  }

  // readonly delegate: interop.Object;
  // readonly drawingHandler: (p1: CGRect) => boolean;
  // readonly drawSelector: string;
}

export class HTMLNSTextCheckingControllerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextCheckingController.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    changespelling: 'changeSpelling',
    checkspelling: 'checkSpelling',
    checktextindocument: 'checkTextInDocument',
    checktextinrangetypesoptions: 'checkTextInRangeTypesOptions',
    checktextinselection: 'checkTextInSelection',
    client: 'client',
    considertextcheckingforrange: 'considerTextCheckingForRange',
    didchangeselectedrange: 'didChangeSelectedRange',
    didchangetextinrange: 'didChangeTextInRange',
    ignorespelling: 'ignoreSpelling',
    initwithclient: 'initWithClient',
    insertedtextinrange: 'insertedTextInRange',
    invalidate: 'invalidate',
    menuatindexclickedonselectioneffectiverange: 'menuAtIndexClickedOnSelectionEffectiveRange',
    orderfrontsubstitutionspanel: 'orderFrontSubstitutionsPanel',
    showguesspanel: 'showGuessPanel',
    spellcheckerdocumenttag: 'spellCheckerDocumentTag',
    updatecandidates: 'updateCandidates',
    validannotations: 'validAnnotations',
  }

  // readonly client: NSTextCheckingClient;
  // spellCheckerDocumentTag: number;
}

export class HTMLNSColorSpaceElement extends HTMLNSObjectElement {
  readonly nativeObject = NSColorSpace.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    adobergb1998colorspace: 'adobeRGB1998ColorSpace',
    availablecolorspaceswithmodel: 'availableColorSpacesWithModel',
    cgcolorspace: 'CGColorSpace',
    colorspacemodel: 'colorSpaceModel',
    colorsyncprofile: 'colorSyncProfile',
    devicecmykcolorspace: 'deviceCMYKColorSpace',
    devicegraycolorspace: 'deviceGrayColorSpace',
    devicergbcolorspace: 'deviceRGBColorSpace',
    displayp3colorspace: 'displayP3ColorSpace',
    encodewithcoder: 'encodeWithCoder',
    extendedgenericgamma22graycolorspace: 'extendedGenericGamma22GrayColorSpace',
    extendedsrgbcolorspace: 'extendedSRGBColorSpace',
    genericcmykcolorspace: 'genericCMYKColorSpace',
    genericgamma22graycolorspace: 'genericGamma22GrayColorSpace',
    genericgraycolorspace: 'genericGrayColorSpace',
    genericrgbcolorspace: 'genericRGBColorSpace',
    iccprofiledata: 'ICCProfileData',
    initwithcgcolorspace: 'initWithCGColorSpace',
    initwithcoder: 'initWithCoder',
    initwithcolorsyncprofile: 'initWithColorSyncProfile',
    initwithiccprofiledata: 'initWithICCProfileData',
    localizedname: 'localizedName',
    numberofcolorcomponents: 'numberOfColorComponents',
    srgbcolorspace: 'sRGBColorSpace',
    supportssecurecoding: 'supportsSecureCoding',
  }

  // adobeRGB1998ColorSpace: NSColorSpace;
  // readonly CGColorSpace: interop.Pointer;
  // readonly colorSpaceModel: interop.Enum<typeof NSColorSpaceModel>;
  // readonly colorSyncProfile: interop.Pointer;
  // deviceCMYKColorSpace: NSColorSpace;
  // deviceGrayColorSpace: NSColorSpace;
  // deviceRGBColorSpace: NSColorSpace;
  // displayP3ColorSpace: NSColorSpace;
  // extendedGenericGamma22GrayColorSpace: NSColorSpace;
  // extendedSRGBColorSpace: NSColorSpace;
  // genericCMYKColorSpace: NSColorSpace;
  // genericGamma22GrayColorSpace: NSColorSpace;
  // genericGrayColorSpace: NSColorSpace;
  // genericRGBColorSpace: NSColorSpace;
  // readonly ICCProfileData: NSData;
  // readonly localizedName: NSString;
  // readonly numberOfColorComponents: number;
  // sRGBColorSpace: NSColorSpace;
  // supportsSecureCoding: boolean;
}

export class HTMLNSAnimationContextElement extends HTMLNSObjectElement {
  readonly nativeObject = NSAnimationContext.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    allowsimplicitanimation: 'allowsImplicitAnimation',
    begingrouping: 'beginGrouping',
    completionhandler: 'completionHandler',
    currentcontext: 'currentContext',
    duration: 'duration',
    endgrouping: 'endGrouping',
    runanimationgroup: 'runAnimationGroup',
    runanimationgroupcompletionhandler: 'runAnimationGroupCompletionHandler',
    timingfunction: 'timingFunction',
  }

  // allowsImplicitAnimation: boolean;
  // completionHandler: () => void;
  // currentContext: NSAnimationContext;
  // duration: number;
  // timingFunction: CAMediaTimingFunction;
}

export class HTMLNSStringDrawingContextElement extends HTMLNSObjectElement {
  readonly nativeObject = NSStringDrawingContext.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    actualscalefactor: 'actualScaleFactor',
    minimumscalefactor: 'minimumScaleFactor',
    totalbounds: 'totalBounds',
  }

  // readonly actualScaleFactor: number;
  // minimumScaleFactor: number;
  // readonly totalBounds: CGRect;
}

export class HTMLNSBezierPathElement extends HTMLNSObjectElement {
  readonly nativeObject = NSBezierPath.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    addclip: 'addClip',
    appendbezierpath: 'appendBezierPath',
    appendbezierpathwitharcfrompointtopointradius: 'appendBezierPathWithArcFromPointToPointRadius',
    appendbezierpathwitharcwithcenterradiusstartangleendangle: 'appendBezierPathWithArcWithCenterRadiusStartAngleEndAngle',
    appendbezierpathwitharcwithcenterradiusstartangleendangleclockwise: 'appendBezierPathWithArcWithCenterRadiusStartAngleEndAngleClockwise',
    appendbezierpathwithcgglyphinfont: 'appendBezierPathWithCGGlyphInFont',
    appendbezierpathwithcgglyphscountinfont: 'appendBezierPathWithCGGlyphsCountInFont',
    appendbezierpathwithglyphinfont: 'appendBezierPathWithGlyphInFont',
    appendbezierpathwithglyphscountinfont: 'appendBezierPathWithGlyphsCountInFont',
    appendbezierpathwithovalinrect: 'appendBezierPathWithOvalInRect',
    appendbezierpathwithpackedglyphs: 'appendBezierPathWithPackedGlyphs',
    appendbezierpathwithpointscount: 'appendBezierPathWithPointsCount',
    appendbezierpathwithrect: 'appendBezierPathWithRect',
    appendbezierpathwithroundedrectxradiusyradius: 'appendBezierPathWithRoundedRectXRadiusYRadius',
    bezierpath: 'bezierPath',
    bezierpathbyflatteningpath: 'bezierPathByFlatteningPath',
    bezierpathbyreversingpath: 'bezierPathByReversingPath',
    bezierpathwithcgpath: 'bezierPathWithCGPath',
    bezierpathwithovalinrect: 'bezierPathWithOvalInRect',
    bezierpathwithrect: 'bezierPathWithRect',
    bezierpathwithroundedrectxradiusyradius: 'bezierPathWithRoundedRectXRadiusYRadius',
    bounds: 'bounds',
    cachesbezierpath: 'cachesBezierPath',
    cgpath: 'CGPath',
    cliprect: 'clipRect',
    closepath: 'closePath',
    containspoint: 'containsPoint',
    controlpointbounds: 'controlPointBounds',
    copywithzone: 'copyWithZone',
    currentpoint: 'currentPoint',
    curvetopointcontrolpoint: 'curveToPointControlPoint',
    curvetopointcontrolpoint1controlpoint2: 'curveToPointControlPoint1ControlPoint2',
    defaultflatness: 'defaultFlatness',
    defaultlinecapstyle: 'defaultLineCapStyle',
    defaultlinejoinstyle: 'defaultLineJoinStyle',
    defaultlinewidth: 'defaultLineWidth',
    defaultmiterlimit: 'defaultMiterLimit',
    defaultwindingrule: 'defaultWindingRule',
    drawpackedglyphsatpoint: 'drawPackedGlyphsAtPoint',
    elementatindex: 'elementAtIndex',
    elementatindexassociatedpoints: 'elementAtIndexAssociatedPoints',
    elementcount: 'elementCount',
    encodewithcoder: 'encodeWithCoder',
    fill: 'fill',
    fillrect: 'fillRect',
    flatness: 'flatness',
    getlinedashcountphase: 'getLineDashCountPhase',
    initwithcoder: 'initWithCoder',
    isempty: 'isEmpty',
    linecapstyle: 'lineCapStyle',
    linejoinstyle: 'lineJoinStyle',
    linetopoint: 'lineToPoint',
    linewidth: 'lineWidth',
    miterlimit: 'miterLimit',
    movetopoint: 'moveToPoint',
    relativecurvetopointcontrolpoint: 'relativeCurveToPointControlPoint',
    relativecurvetopointcontrolpoint1controlpoint2: 'relativeCurveToPointControlPoint1ControlPoint2',
    relativelinetopoint: 'relativeLineToPoint',
    relativemovetopoint: 'relativeMoveToPoint',
    removeallpoints: 'removeAllPoints',
    setassociatedpointsatindex: 'setAssociatedPointsAtIndex',
    setcachesbezierpath: 'setCachesBezierPath',
    setclip: 'setClip',
    setlinedashcountphase: 'setLineDashCountPhase',
    stroke: 'stroke',
    strokelinefrompointtopoint: 'strokeLineFromPointToPoint',
    strokerect: 'strokeRect',
    supportssecurecoding: 'supportsSecureCoding',
    transformusingaffinetransform: 'transformUsingAffineTransform',
    windingrule: 'windingRule',
  }

  // readonly bezierPathByFlatteningPath: NSBezierPath;
  // readonly bezierPathByReversingPath: NSBezierPath;
  // readonly bounds: CGRect;
  // readonly controlPointBounds: CGRect;
  // readonly currentPoint: CGPoint;
  // defaultFlatness: number;
  // defaultLineCapStyle: interop.Enum<typeof NSLineCapStyle>;
  // defaultLineJoinStyle: interop.Enum<typeof NSLineJoinStyle>;
  // defaultLineWidth: number;
  // defaultMiterLimit: number;
  // defaultWindingRule: interop.Enum<typeof NSWindingRule>;
  // readonly elementCount: number;
  // flatness: number;
  // readonly isEmpty: boolean;
  // lineCapStyle: interop.Enum<typeof NSLineCapStyle>;
  // lineJoinStyle: interop.Enum<typeof NSLineJoinStyle>;
  // lineWidth: number;
  // miterLimit: number;
  // supportsSecureCoding: boolean;
  // windingRule: interop.Enum<typeof NSWindingRule>;
}

export class HTMLNSAccessibilityCustomActionElement extends HTMLNSObjectElement {
  readonly nativeObject = NSAccessibilityCustomAction.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    handler: 'handler',
    initwithnamehandler: 'initWithNameHandler',
    initwithnametargetselector: 'initWithNameTargetSelector',
    name: 'name',
    selector: 'selector',
    target: 'target',
  }

  // handler: () => boolean;
  // selector: string;
  // target: NSObject;
}

export class HTMLNSViewElement extends HTMLNSResponderElement {
  readonly nativeObject = NSView.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    acceptsfirstmouse: 'acceptsFirstMouse',
    acceptstouchevents: 'acceptsTouchEvents',
    accessibilityactivationpoint: 'accessibilityActivationPoint',
    accessibilityallowedvalues: 'accessibilityAllowedValues',
    accessibilityapplicationfocuseduielement: 'accessibilityApplicationFocusedUIElement',
    accessibilityattributedstringforrange: 'accessibilityAttributedStringForRange',
    accessibilityattributeduserinputlabels: 'accessibilityAttributedUserInputLabels',
    accessibilitycancelbutton: 'accessibilityCancelButton',
    accessibilitycellforcolumnrow: 'accessibilityCellForColumnRow',
    accessibilitychildren: 'accessibilityChildren',
    accessibilitychildreninnavigationorder: 'accessibilityChildrenInNavigationOrder',
    accessibilityclearbutton: 'accessibilityClearButton',
    accessibilityclosebutton: 'accessibilityCloseButton',
    accessibilitycolumncount: 'accessibilityColumnCount',
    accessibilitycolumnheaderuielements: 'accessibilityColumnHeaderUIElements',
    accessibilitycolumnindexrange: 'accessibilityColumnIndexRange',
    accessibilitycolumns: 'accessibilityColumns',
    accessibilitycolumntitles: 'accessibilityColumnTitles',
    accessibilitycontents: 'accessibilityContents',
    accessibilitycriticalvalue: 'accessibilityCriticalValue',
    accessibilitycustomactions: 'accessibilityCustomActions',
    accessibilitycustomrotors: 'accessibilityCustomRotors',
    accessibilitydecrementbutton: 'accessibilityDecrementButton',
    accessibilitydefaultbutton: 'accessibilityDefaultButton',
    accessibilitydisclosedbyrow: 'accessibilityDisclosedByRow',
    accessibilitydisclosedrows: 'accessibilityDisclosedRows',
    accessibilitydisclosurelevel: 'accessibilityDisclosureLevel',
    accessibilitydocument: 'accessibilityDocument',
    accessibilityextrasmenubar: 'accessibilityExtrasMenuBar',
    accessibilityfilename: 'accessibilityFilename',
    accessibilityfocusedwindow: 'accessibilityFocusedWindow',
    accessibilityframe: 'accessibilityFrame',
    accessibilityframeforrange: 'accessibilityFrameForRange',
    accessibilityfullscreenbutton: 'accessibilityFullScreenButton',
    accessibilitygrowarea: 'accessibilityGrowArea',
    accessibilityhandles: 'accessibilityHandles',
    accessibilityheader: 'accessibilityHeader',
    accessibilityhelp: 'accessibilityHelp',
    accessibilityhorizontalscrollbar: 'accessibilityHorizontalScrollBar',
    accessibilityhorizontalunitdescription: 'accessibilityHorizontalUnitDescription',
    accessibilityhorizontalunits: 'accessibilityHorizontalUnits',
    accessibilityidentifier: 'accessibilityIdentifier',
    accessibilityincrementbutton: 'accessibilityIncrementButton',
    accessibilityindex: 'accessibilityIndex',
    accessibilityinsertionpointlinenumber: 'accessibilityInsertionPointLineNumber',
    accessibilitylabel: 'accessibilityLabel',
    accessibilitylabeluielements: 'accessibilityLabelUIElements',
    accessibilitylabelvalue: 'accessibilityLabelValue',
    accessibilitylayoutpointforscreenpoint: 'accessibilityLayoutPointForScreenPoint',
    accessibilitylayoutsizeforscreensize: 'accessibilityLayoutSizeForScreenSize',
    accessibilitylineforindex: 'accessibilityLineForIndex',
    accessibilitylinkeduielements: 'accessibilityLinkedUIElements',
    accessibilitymainwindow: 'accessibilityMainWindow',
    accessibilitymarkergroupuielement: 'accessibilityMarkerGroupUIElement',
    accessibilitymarkertypedescription: 'accessibilityMarkerTypeDescription',
    accessibilitymarkeruielements: 'accessibilityMarkerUIElements',
    accessibilitymarkervalues: 'accessibilityMarkerValues',
    accessibilitymaxvalue: 'accessibilityMaxValue',
    accessibilitymenubar: 'accessibilityMenuBar',
    accessibilityminimizebutton: 'accessibilityMinimizeButton',
    accessibilityminvalue: 'accessibilityMinValue',
    accessibilitynextcontents: 'accessibilityNextContents',
    accessibilitynumberofcharacters: 'accessibilityNumberOfCharacters',
    accessibilityorientation: 'accessibilityOrientation',
    accessibilityoverflowbutton: 'accessibilityOverflowButton',
    accessibilityparent: 'accessibilityParent',
    accessibilityperformcancel: 'accessibilityPerformCancel',
    accessibilityperformconfirm: 'accessibilityPerformConfirm',
    accessibilityperformdecrement: 'accessibilityPerformDecrement',
    accessibilityperformdelete: 'accessibilityPerformDelete',
    accessibilityperformincrement: 'accessibilityPerformIncrement',
    accessibilityperformpick: 'accessibilityPerformPick',
    accessibilityperformpress: 'accessibilityPerformPress',
    accessibilityperformraise: 'accessibilityPerformRaise',
    accessibilityperformshowalternateui: 'accessibilityPerformShowAlternateUI',
    accessibilityperformshowdefaultui: 'accessibilityPerformShowDefaultUI',
    accessibilityperformshowmenu: 'accessibilityPerformShowMenu',
    accessibilityplaceholdervalue: 'accessibilityPlaceholderValue',
    accessibilitypreviouscontents: 'accessibilityPreviousContents',
    accessibilityproxy: 'accessibilityProxy',
    accessibilityrangeforindex: 'accessibilityRangeForIndex',
    accessibilityrangeforline: 'accessibilityRangeForLine',
    accessibilityrangeforposition: 'accessibilityRangeForPosition',
    accessibilityrole: 'accessibilityRole',
    accessibilityroledescription: 'accessibilityRoleDescription',
    accessibilityrowcount: 'accessibilityRowCount',
    accessibilityrowheaderuielements: 'accessibilityRowHeaderUIElements',
    accessibilityrowindexrange: 'accessibilityRowIndexRange',
    accessibilityrows: 'accessibilityRows',
    accessibilityrtfforrange: 'accessibilityRTFForRange',
    accessibilityrulermarkertype: 'accessibilityRulerMarkerType',
    accessibilityscreenpointforlayoutpoint: 'accessibilityScreenPointForLayoutPoint',
    accessibilityscreensizeforlayoutsize: 'accessibilityScreenSizeForLayoutSize',
    accessibilitysearchbutton: 'accessibilitySearchButton',
    accessibilitysearchmenu: 'accessibilitySearchMenu',
    accessibilityselectedcells: 'accessibilitySelectedCells',
    accessibilityselectedchildren: 'accessibilitySelectedChildren',
    accessibilityselectedcolumns: 'accessibilitySelectedColumns',
    accessibilityselectedrows: 'accessibilitySelectedRows',
    accessibilityselectedtext: 'accessibilitySelectedText',
    accessibilityselectedtextrange: 'accessibilitySelectedTextRange',
    accessibilityselectedtextranges: 'accessibilitySelectedTextRanges',
    accessibilityservesastitleforuielements: 'accessibilityServesAsTitleForUIElements',
    accessibilitysharedcharacterrange: 'accessibilitySharedCharacterRange',
    accessibilitysharedfocuselements: 'accessibilitySharedFocusElements',
    accessibilitysharedtextuielements: 'accessibilitySharedTextUIElements',
    accessibilityshownmenu: 'accessibilityShownMenu',
    accessibilitysortdirection: 'accessibilitySortDirection',
    accessibilitysplitters: 'accessibilitySplitters',
    accessibilitystringforrange: 'accessibilityStringForRange',
    accessibilitystylerangeforindex: 'accessibilityStyleRangeForIndex',
    accessibilitysubrole: 'accessibilitySubrole',
    accessibilitytabs: 'accessibilityTabs',
    accessibilitytitle: 'accessibilityTitle',
    accessibilitytitleuielement: 'accessibilityTitleUIElement',
    accessibilitytoolbarbutton: 'accessibilityToolbarButton',
    accessibilitytopleveluielement: 'accessibilityTopLevelUIElement',
    accessibilityunitdescription: 'accessibilityUnitDescription',
    accessibilityunits: 'accessibilityUnits',
    accessibilityurl: 'accessibilityURL',
    accessibilityuserinputlabels: 'accessibilityUserInputLabels',
    accessibilityvalue: 'accessibilityValue',
    accessibilityvaluedescription: 'accessibilityValueDescription',
    accessibilityverticalscrollbar: 'accessibilityVerticalScrollBar',
    accessibilityverticalunitdescription: 'accessibilityVerticalUnitDescription',
    accessibilityverticalunits: 'accessibilityVerticalUnits',
    accessibilityvisiblecells: 'accessibilityVisibleCells',
    accessibilityvisiblecharacterrange: 'accessibilityVisibleCharacterRange',
    accessibilityvisiblechildren: 'accessibilityVisibleChildren',
    accessibilityvisiblecolumns: 'accessibilityVisibleColumns',
    accessibilityvisiblerows: 'accessibilityVisibleRows',
    accessibilitywarningvalue: 'accessibilityWarningValue',
    accessibilitywindow: 'accessibilityWindow',
    accessibilitywindows: 'accessibilityWindows',
    accessibilityzoombutton: 'accessibilityZoomButton',
    addconstraint: 'addConstraint',
    addconstraints: 'addConstraints',
    addcursorrectcursor: 'addCursorRectCursor',
    addgesturerecognizer: 'addGestureRecognizer',
    additionalsafeareainsets: 'additionalSafeAreaInsets',
    addlayoutguide: 'addLayoutGuide',
    addsubview: 'addSubview',
    addsubviewpositionedrelativeto: 'addSubviewPositionedRelativeTo',
    addtooltiprectowneruserdata: 'addToolTipRectOwnerUserData',
    addtrackingarea: 'addTrackingArea',
    addtrackingrectowneruserdataassumeinside: 'addTrackingRectOwnerUserDataAssumeInside',
    adjustpageheightnewtopbottomlimit: 'adjustPageHeightNewTopBottomLimit',
    adjustpagewidthnewleftrightlimit: 'adjustPageWidthNewLeftRightLimit',
    adjustscroll: 'adjustScroll',
    alignmentrectforframe: 'alignmentRectForFrame',
    alignmentrectinsets: 'alignmentRectInsets',
    allocategstate: 'allocateGState',
    allowedtouchtypes: 'allowedTouchTypes',
    allowsvibrancy: 'allowsVibrancy',
    alphavalue: 'alphaValue',
    ancestorsharedwithview: 'ancestorSharedWithView',
    animationforkey: 'animationForKey',
    animations: 'animations',
    animator: 'animator',
    appearance: 'appearance',
    autorelease: 'autorelease',
    autoresizessubviews: 'autoresizesSubviews',
    autoresizingmask: 'autoresizingMask',
    autoscroll: 'autoscroll',
    backgroundfilters: 'backgroundFilters',
    backingalignedrectoptions: 'backingAlignedRectOptions',
    baselineoffsetfrombottom: 'baselineOffsetFromBottom',
    begindocument: 'beginDocument',
    begindraggingsessionwithitemseventsource: 'beginDraggingSessionWithItemsEventSource',
    beginpageinrectatplacement: 'beginPageInRectAtPlacement',
    bitmapimagerepforcachingdisplayinrect: 'bitmapImageRepForCachingDisplayInRect',
    bottomanchor: 'bottomAnchor',
    bounds: 'bounds',
    boundsrotation: 'boundsRotation',
    cachedisplayinrecttobitmapimagerep: 'cacheDisplayInRectToBitmapImageRep',
    canbecomekeyview: 'canBecomeKeyView',
    candidatelisttouchbaritem: 'candidateListTouchBarItem',
    candraw: 'canDraw',
    candrawconcurrently: 'canDrawConcurrently',
    candrawsubviewsintolayer: 'canDrawSubviewsIntoLayer',
    centerscanrect: 'centerScanRect',
    centerxanchor: 'centerXAnchor',
    centeryanchor: 'centerYAnchor',
    class: 'class',
    clipstobounds: 'clipsToBounds',
    compositingfilter: 'compositingFilter',
    concludedragoperation: 'concludeDragOperation',
    conformstoprotocol: 'conformsToProtocol',
    constraints: 'constraints',
    constraintsaffectinglayoutfororientation: 'constraintsAffectingLayoutForOrientation',
    contentcompressionresistancepriorityfororientation: 'contentCompressionResistancePriorityForOrientation',
    contentfilters: 'contentFilters',
    contenthuggingpriorityfororientation: 'contentHuggingPriorityForOrientation',
    convertpointfrombacking: 'convertPointFromBacking',
    convertpointfrombase: 'convertPointFromBase',
    convertpointfromlayer: 'convertPointFromLayer',
    convertpointfromview: 'convertPointFromView',
    convertpointtobacking: 'convertPointToBacking',
    convertpointtobase: 'convertPointToBase',
    convertpointtolayer: 'convertPointToLayer',
    convertpointtoview: 'convertPointToView',
    convertrectfrombacking: 'convertRectFromBacking',
    convertrectfrombase: 'convertRectFromBase',
    convertrectfromlayer: 'convertRectFromLayer',
    convertrectfromview: 'convertRectFromView',
    convertrecttobacking: 'convertRectToBacking',
    convertrecttobase: 'convertRectToBase',
    convertrecttolayer: 'convertRectToLayer',
    convertrecttoview: 'convertRectToView',
    convertsizefrombacking: 'convertSizeFromBacking',
    convertsizefrombase: 'convertSizeFromBase',
    convertsizefromlayer: 'convertSizeFromLayer',
    convertsizefromview: 'convertSizeFromView',
    convertsizetobacking: 'convertSizeToBacking',
    convertsizetobase: 'convertSizeToBase',
    convertsizetolayer: 'convertSizeToLayer',
    convertsizetoview: 'convertSizeToView',
    datawithepsinsiderect: 'dataWithEPSInsideRect',
    datawithpdfinsiderect: 'dataWithPDFInsideRect',
    debugdescription: 'debugDescription',
    defaultanimationforkey: 'defaultAnimationForKey',
    defaultfocusringtype: 'defaultFocusRingType',
    defaultmenu: 'defaultMenu',
    description: 'description',
    didaddsubview: 'didAddSubview',
    didclosemenuwithevent: 'didCloseMenuWithEvent',
    discardcursorrects: 'discardCursorRects',
    display: 'display',
    displayifneeded: 'displayIfNeeded',
    displayifneededignoringopacity: 'displayIfNeededIgnoringOpacity',
    displayifneededinrect: 'displayIfNeededInRect',
    displayifneededinrectignoringopacity: 'displayIfNeededInRectIgnoringOpacity',
    displaylinkwithtargetselector: 'displayLinkWithTargetSelector',
    displayrect: 'displayRect',
    displayrectignoringopacity: 'displayRectIgnoringOpacity',
    displayrectignoringopacityincontext: 'displayRectIgnoringOpacityInContext',
    dragfilefromrectslidebackevent: 'dragFileFromRectSlideBackEvent',
    draggingended: 'draggingEnded',
    draggingentered: 'draggingEntered',
    draggingexited: 'draggingExited',
    draggingupdated: 'draggingUpdated',
    dragimageatoffseteventpasteboardsourceslideback: 'dragImageAtOffsetEventPasteboardSourceSlideBack',
    dragpromisedfilesoftypesfromrectsourceslidebackevent: 'dragPromisedFilesOfTypesFromRectSourceSlideBackEvent',
    drawfocusringmask: 'drawFocusRingMask',
    drawpageborderwithsize: 'drawPageBorderWithSize',
    drawrect: 'drawRect',
    drawsheetborderwithsize: 'drawSheetBorderWithSize',
    effectiveappearance: 'effectiveAppearance',
    enclosingmenuitem: 'enclosingMenuItem',
    enclosingscrollview: 'enclosingScrollView',
    enddocument: 'endDocument',
    endpage: 'endPage',
    enterfullscreenmodewithoptions: 'enterFullScreenModeWithOptions',
    exerciseambiguityinlayout: 'exerciseAmbiguityInLayout',
    exitfullscreenmodewithoptions: 'exitFullScreenModeWithOptions',
    firstbaselineanchor: 'firstBaselineAnchor',
    firstbaselineoffsetfromtop: 'firstBaselineOffsetFromTop',
    fittingsize: 'fittingSize',
    focusringmaskbounds: 'focusRingMaskBounds',
    focusringtype: 'focusRingType',
    focusview: 'focusView',
    frame: 'frame',
    framecenterrotation: 'frameCenterRotation',
    frameforalignmentrect: 'frameForAlignmentRect',
    framerotation: 'frameRotation',
    gesturerecognizers: 'gestureRecognizers',
    getrectsbeingdrawncount: 'getRectsBeingDrawnCount',
    getrectsexposedduringliveresizecount: 'getRectsExposedDuringLiveResizeCount',
    gstate: 'gState',
    hasambiguouslayout: 'hasAmbiguousLayout',
    hash: 'hash',
    heightadjustlimit: 'heightAdjustLimit',
    heightanchor: 'heightAnchor',
    hittest: 'hitTest',
    identifier: 'identifier',
    initwithcoder: 'initWithCoder',
    initwithframe: 'initWithFrame',
    inliveresize: 'inLiveResize',
    inputcontext: 'inputContext',
    intrinsiccontentsize: 'intrinsicContentSize',
    invalidateintrinsiccontentsize: 'invalidateIntrinsicContentSize',
    isaccessibilityalternateuivisible: 'isAccessibilityAlternateUIVisible',
    isaccessibilitydisclosed: 'isAccessibilityDisclosed',
    isaccessibilityedited: 'isAccessibilityEdited',
    isaccessibilityelement: 'isAccessibilityElement',
    isaccessibilityenabled: 'isAccessibilityEnabled',
    isaccessibilityexpanded: 'isAccessibilityExpanded',
    isaccessibilityfocused: 'isAccessibilityFocused',
    isaccessibilityfrontmost: 'isAccessibilityFrontmost',
    isaccessibilityhidden: 'isAccessibilityHidden',
    isaccessibilitymain: 'isAccessibilityMain',
    isaccessibilityminimized: 'isAccessibilityMinimized',
    isaccessibilitymodal: 'isAccessibilityModal',
    isaccessibilityorderedbyrow: 'isAccessibilityOrderedByRow',
    isaccessibilityprotectedcontent: 'isAccessibilityProtectedContent',
    isaccessibilityrequired: 'isAccessibilityRequired',
    isaccessibilityselected: 'isAccessibilitySelected',
    isaccessibilityselectorallowed: 'isAccessibilitySelectorAllowed',
    iscompatiblewithresponsivescrolling: 'isCompatibleWithResponsiveScrolling',
    isdescendantof: 'isDescendantOf',
    isdrawingfindindicator: 'isDrawingFindIndicator',
    isequal: 'isEqual',
    isflipped: 'isFlipped',
    ishidden: 'isHidden',
    ishiddenorhashiddenancestor: 'isHiddenOrHasHiddenAncestor',
    ishorizontalcontentsizeconstraintactive: 'isHorizontalContentSizeConstraintActive',
    isinfullscreenmode: 'isInFullScreenMode',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isopaque: 'isOpaque',
    isproxy: 'isProxy',
    isrotatedfrombase: 'isRotatedFromBase',
    isrotatedorscaledfrombase: 'isRotatedOrScaledFromBase',
    isverticalcontentsizeconstraintactive: 'isVerticalContentSizeConstraintActive',
    knowspagerange: 'knowsPageRange',
    lastbaselineanchor: 'lastBaselineAnchor',
    lastbaselineoffsetfrombottom: 'lastBaselineOffsetFromBottom',
    layer: 'layer',
    layercontentsplacement: 'layerContentsPlacement',
    layercontentsredrawpolicy: 'layerContentsRedrawPolicy',
    layerusescoreimagefilters: 'layerUsesCoreImageFilters',
    layout: 'layout',
    layoutguides: 'layoutGuides',
    layoutmarginsguide: 'layoutMarginsGuide',
    layoutsubtreeifneeded: 'layoutSubtreeIfNeeded',
    leadinganchor: 'leadingAnchor',
    leftanchor: 'leftAnchor',
    locationofprintrect: 'locationOfPrintRect',
    lockfocus: 'lockFocus',
    lockfocusifcandraw: 'lockFocusIfCanDraw',
    lockfocusifcandrawincontext: 'lockFocusIfCanDrawInContext',
    makebackinglayer: 'makeBackingLayer',
    menuforevent: 'menuForEvent',
    mousedowncanmovewindow: 'mouseDownCanMoveWindow',
    mouseinrect: 'mouseInRect',
    needsdisplay: 'needsDisplay',
    needslayout: 'needsLayout',
    needspaneltobecomekey: 'needsPanelToBecomeKey',
    needstodrawrect: 'needsToDrawRect',
    needsupdateconstraints: 'needsUpdateConstraints',
    nextkeyview: 'nextKeyView',
    nextvalidkeyview: 'nextValidKeyView',
    notefocusringmaskchanged: 'noteFocusRingMaskChanged',
    opaqueancestor: 'opaqueAncestor',
    pagefooter: 'pageFooter',
    pageheader: 'pageHeader',
    performdragoperation: 'performDragOperation',
    performkeyequivalent: 'performKeyEquivalent',
    performmnemonic: 'performMnemonic',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    postsboundschangednotifications: 'postsBoundsChangedNotifications',
    postsframechangednotifications: 'postsFrameChangedNotifications',
    preparecontentinrect: 'prepareContentInRect',
    preparedcontentrect: 'preparedContentRect',
    preparefordragoperation: 'prepareForDragOperation',
    prepareforreuse: 'prepareForReuse',
    preservescontentduringliveresize: 'preservesContentDuringLiveResize',
    pressureconfiguration: 'pressureConfiguration',
    previouskeyview: 'previousKeyView',
    previousvalidkeyview: 'previousValidKeyView',
    print: 'print',
    printjobtitle: 'printJobTitle',
    rectforpage: 'rectForPage',
    rectforsmartmagnificationatpointinrect: 'rectForSmartMagnificationAtPointInRect',
    rectpreservedduringliveresize: 'rectPreservedDuringLiveResize',
    reflectscrolledclipview: 'reflectScrolledClipView',
    registereddraggedtypes: 'registeredDraggedTypes',
    registerfordraggedtypes: 'registerForDraggedTypes',
    release: 'release',
    releasegstate: 'releaseGState',
    removealltooltips: 'removeAllToolTips',
    removeconstraint: 'removeConstraint',
    removeconstraints: 'removeConstraints',
    removecursorrectcursor: 'removeCursorRectCursor',
    removefromsuperview: 'removeFromSuperview',
    removefromsuperviewwithoutneedingdisplay: 'removeFromSuperviewWithoutNeedingDisplay',
    removegesturerecognizer: 'removeGestureRecognizer',
    removelayoutguide: 'removeLayoutGuide',
    removetooltip: 'removeToolTip',
    removetrackingarea: 'removeTrackingArea',
    removetrackingrect: 'removeTrackingRect',
    renewgstate: 'renewGState',
    replacesubviewwith: 'replaceSubviewWith',
    requiresconstraintbasedlayout: 'requiresConstraintBasedLayout',
    resetcursorrects: 'resetCursorRects',
    resizesubviewswitholdsize: 'resizeSubviewsWithOldSize',
    resizewitholdsuperviewsize: 'resizeWithOldSuperviewSize',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    rightanchor: 'rightAnchor',
    rotatebyangle: 'rotateByAngle',
    rulerviewdidaddmarker: 'rulerViewDidAddMarker',
    rulerviewdidmovemarker: 'rulerViewDidMoveMarker',
    rulerviewdidremovemarker: 'rulerViewDidRemoveMarker',
    rulerviewhandlemousedown: 'rulerViewHandleMouseDown',
    rulerviewlocationforpoint: 'rulerViewLocationForPoint',
    rulerviewpointforlocation: 'rulerViewPointForLocation',
    rulerviewshouldaddmarker: 'rulerViewShouldAddMarker',
    rulerviewshouldmovemarker: 'rulerViewShouldMoveMarker',
    rulerviewshouldremovemarker: 'rulerViewShouldRemoveMarker',
    rulerviewwilladdmarkeratlocation: 'rulerViewWillAddMarkerAtLocation',
    rulerviewwillmovemarkertolocation: 'rulerViewWillMoveMarkerToLocation',
    rulerviewwillsetclientview: 'rulerViewWillSetClientView',
    safeareainsets: 'safeAreaInsets',
    safearealayoutguide: 'safeAreaLayoutGuide',
    safearearect: 'safeAreaRect',
    scaleunitsquaretosize: 'scaleUnitSquareToSize',
    scrollclipviewtopoint: 'scrollClipViewToPoint',
    scrollpoint: 'scrollPoint',
    scrollrectby: 'scrollRectBy',
    scrollrecttovisible: 'scrollRectToVisible',
    self: 'self',
    setboundsorigin: 'setBoundsOrigin',
    setboundssize: 'setBoundsSize',
    setcontentcompressionresistancepriorityfororientation: 'setContentCompressionResistancePriorityForOrientation',
    setcontenthuggingpriorityfororientation: 'setContentHuggingPriorityForOrientation',
    setframeorigin: 'setFrameOrigin',
    setframesize: 'setFrameSize',
    setkeyboardfocusringneedsdisplayinrect: 'setKeyboardFocusRingNeedsDisplayInRect',
    setneedsdisplayinrect: 'setNeedsDisplayInRect',
    setupgstate: 'setUpGState',
    shadow: 'shadow',
    shoulddelaywindoworderingforevent: 'shouldDelayWindowOrderingForEvent',
    shoulddrawcolor: 'shouldDrawColor',
    showdefinitionforattributedstringatpoint: 'showDefinitionForAttributedStringAtPoint',
    showdefinitionforattributedstringrangeoptionsbaselineoriginprovider: 'showDefinitionForAttributedStringRangeOptionsBaselineOriginProvider',
    sortsubviewsusingfunctioncontext: 'sortSubviewsUsingFunctionContext',
    subviews: 'subviews',
    superclass: 'superclass',
    superview: 'superview',
    tag: 'tag',
    tooltip: 'toolTip',
    topanchor: 'topAnchor',
    trackingareas: 'trackingAreas',
    trailinganchor: 'trailingAnchor',
    translateorigintopoint: 'translateOriginToPoint',
    translaterectsneedingdisplayinrectby: 'translateRectsNeedingDisplayInRectBy',
    translatesautoresizingmaskintoconstraints: 'translatesAutoresizingMaskIntoConstraints',
    unlockfocus: 'unlockFocus',
    unregisterdraggedtypes: 'unregisterDraggedTypes',
    updateconstraints: 'updateConstraints',
    updateconstraintsforsubtreeifneeded: 'updateConstraintsForSubtreeIfNeeded',
    updatedraggingitemsfordrag: 'updateDraggingItemsForDrag',
    updatelayer: 'updateLayer',
    updatetrackingareas: 'updateTrackingAreas',
    userinterfacelayoutdirection: 'userInterfaceLayoutDirection',
    viewdidchangebackingproperties: 'viewDidChangeBackingProperties',
    viewdidchangeeffectiveappearance: 'viewDidChangeEffectiveAppearance',
    viewdidendliveresize: 'viewDidEndLiveResize',
    viewdidhide: 'viewDidHide',
    viewdidmovetosuperview: 'viewDidMoveToSuperview',
    viewdidmovetowindow: 'viewDidMoveToWindow',
    viewdidunhide: 'viewDidUnhide',
    viewwilldraw: 'viewWillDraw',
    viewwillmovetosuperview: 'viewWillMoveToSuperview',
    viewwillmovetowindow: 'viewWillMoveToWindow',
    viewwillstartliveresize: 'viewWillStartLiveResize',
    viewwithtag: 'viewWithTag',
    visiblerect: 'visibleRect',
    wantsbestresolutionopenglsurface: 'wantsBestResolutionOpenGLSurface',
    wantsdefaultclipping: 'wantsDefaultClipping',
    wantsextendeddynamicrangeopenglsurface: 'wantsExtendedDynamicRangeOpenGLSurface',
    wantslayer: 'wantsLayer',
    wantsperiodicdraggingupdates: 'wantsPeriodicDraggingUpdates',
    wantsrestingtouches: 'wantsRestingTouches',
    wantsupdatelayer: 'wantsUpdateLayer',
    widthadjustlimit: 'widthAdjustLimit',
    widthanchor: 'widthAnchor',
    willopenmenuwithevent: 'willOpenMenuWithEvent',
    willremovesubview: 'willRemoveSubview',
    window: 'window',
    writeepsinsiderecttopasteboard: 'writeEPSInsideRectToPasteboard',
    writepdfinsiderecttopasteboard: 'writePDFInsideRectToPasteboard',
    zone: 'zone',
  }

  // acceptsTouchEvents: boolean;
  // accessibilityActivationPoint: CGPoint;
  // accessibilityApplicationFocusedUIElement: interop.Object;
  // accessibilityCancelButton: interop.Object;
  // accessibilityClearButton: interop.Object;
  // accessibilityCloseButton: interop.Object;
  // accessibilityColumnCount: number;
  // accessibilityColumnIndexRange: _NSRange;
  // accessibilityCriticalValue: interop.Object;
  // accessibilityDecrementButton: interop.Object;
  // accessibilityDefaultButton: interop.Object;
  // accessibilityDisclosedByRow: interop.Object;
  // accessibilityDisclosedRows: interop.Object;
  // accessibilityDisclosureLevel: number;
  // accessibilityExtrasMenuBar: interop.Object;
  // accessibilityFocusedWindow: interop.Object;
  // accessibilityFrame: CGRect;
  // accessibilityFullScreenButton: interop.Object;
  // accessibilityGrowArea: interop.Object;
  // accessibilityHeader: interop.Object;
  // accessibilityHorizontalScrollBar: interop.Object;
  // accessibilityHorizontalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityIncrementButton: interop.Object;
  // accessibilityIndex: number;
  // accessibilityInsertionPointLineNumber: number;
  // accessibilityLabelValue: number;
  // accessibilityMainWindow: interop.Object;
  // accessibilityMarkerGroupUIElement: interop.Object;
  // accessibilityMarkerValues: interop.Object;
  // accessibilityMaxValue: interop.Object;
  // accessibilityMenuBar: interop.Object;
  // accessibilityMinimizeButton: interop.Object;
  // accessibilityMinValue: interop.Object;
  // accessibilityNumberOfCharacters: number;
  // accessibilityOrientation: interop.Enum<typeof NSAccessibilityOrientation>;
  // accessibilityOverflowButton: interop.Object;
  // accessibilityParent: interop.Object;
  // accessibilityProxy: interop.Object;
  // accessibilityRowCount: number;
  // accessibilityRowIndexRange: _NSRange;
  // accessibilityRulerMarkerType: interop.Enum<typeof NSAccessibilityRulerMarkerType>;
  // accessibilitySearchButton: interop.Object;
  // accessibilitySearchMenu: interop.Object;
  // accessibilitySelectedTextRange: _NSRange;
  // accessibilitySharedCharacterRange: _NSRange;
  // accessibilityShownMenu: interop.Object;
  // accessibilitySortDirection: interop.Enum<typeof NSAccessibilitySortDirection>;
  // accessibilityTitleUIElement: interop.Object;
  // accessibilityToolbarButton: interop.Object;
  // accessibilityTopLevelUIElement: interop.Object;
  // accessibilityUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityURL: NSURL;
  // accessibilityValue: interop.Object;
  // accessibilityVerticalScrollBar: interop.Object;
  // accessibilityVerticalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityVisibleCharacterRange: _NSRange;
  // accessibilityWarningValue: interop.Object;
  // accessibilityWindow: interop.Object;
  // accessibilityZoomButton: interop.Object;
  // additionalSafeAreaInsets: NSEdgeInsets;
  // readonly alignmentRectInsets: NSEdgeInsets;
  // allowedTouchTypes: interop.Enum<typeof NSTouchTypeMask>;
  // readonly allowsVibrancy: boolean;
  // alphaValue: number;
  // appearance: NSAppearance;
  // autoresizesSubviews: boolean;
  // autoresizingMask: interop.Enum<typeof NSAutoresizingMaskOptions>;
  // readonly baselineOffsetFromBottom: number;
  // readonly bottomAnchor: NSLayoutYAxisAnchor;
  // bounds: CGRect;
  // boundsRotation: number;
  // readonly canBecomeKeyView: boolean;
  // readonly candidateListTouchBarItem: NSCandidateListTouchBarItem;
  // readonly canDraw: boolean;
  // canDrawConcurrently: boolean;
  // canDrawSubviewsIntoLayer: boolean;
  // readonly centerXAnchor: NSLayoutXAxisAnchor;
  // readonly centerYAnchor: NSLayoutYAxisAnchor;
  // clipsToBounds: boolean;
  // compositingFilter: CIFilter;
  // readonly constraints: NSArray;
  // readonly debugDescription: NSString;
  // defaultFocusRingType: interop.Enum<typeof NSFocusRingType>;
  // defaultMenu: NSMenu;
  // readonly description: NSString;
  // readonly effectiveAppearance: NSAppearance;
  // readonly enclosingMenuItem: NSMenuItem;
  // readonly enclosingScrollView: NSScrollView;
  // readonly firstBaselineAnchor: NSLayoutYAxisAnchor;
  // readonly firstBaselineOffsetFromTop: number;
  // readonly fittingSize: CGSize;
  // readonly focusRingMaskBounds: CGRect;
  // focusRingType: interop.Enum<typeof NSFocusRingType>;
  // focusView: NSView;
  // frame: CGRect;
  // frameCenterRotation: number;
  // frameRotation: number;
  // readonly hasAmbiguousLayout: boolean;
  // readonly hash: number;
  // readonly heightAdjustLimit: number;
  // readonly heightAnchor: NSLayoutDimension;
  // readonly inLiveResize: boolean;
  // readonly inputContext: NSTextInputContext;
  // readonly intrinsicContentSize: CGSize;
  // isAccessibilityAlternateUIVisible: boolean;
  // isAccessibilityDisclosed: boolean;
  // isAccessibilityEdited: boolean;
  // isAccessibilityElement: boolean;
  // isAccessibilityEnabled: boolean;
  // isAccessibilityExpanded: boolean;
  // isAccessibilityFocused: boolean;
  // isAccessibilityFrontmost: boolean;
  // isAccessibilityHidden: boolean;
  // isAccessibilityMain: boolean;
  // isAccessibilityMinimized: boolean;
  // isAccessibilityModal: boolean;
  // isAccessibilityOrderedByRow: boolean;
  // isAccessibilityProtectedContent: boolean;
  // isAccessibilityRequired: boolean;
  // isAccessibilitySelected: boolean;
  // isCompatibleWithResponsiveScrolling: boolean;
  // readonly isDrawingFindIndicator: boolean;
  // readonly isFlipped: boolean;
  // isHidden: boolean;
  // readonly isHiddenOrHasHiddenAncestor: boolean;
  // isHorizontalContentSizeConstraintActive: boolean;
  // readonly isInFullScreenMode: boolean;
  // readonly isOpaque: boolean;
  // readonly isProxy: boolean;
  // readonly isRotatedFromBase: boolean;
  // readonly isRotatedOrScaledFromBase: boolean;
  // isVerticalContentSizeConstraintActive: boolean;
  // readonly lastBaselineAnchor: NSLayoutYAxisAnchor;
  // readonly lastBaselineOffsetFromBottom: number;
  // layer: CALayer;
  // layerContentsPlacement: interop.Enum<typeof NSViewLayerContentsPlacement>;
  // layerContentsRedrawPolicy: interop.Enum<typeof NSViewLayerContentsRedrawPolicy>;
  // layerUsesCoreImageFilters: boolean;
  // readonly layoutGuides: NSArray;
  // readonly layoutMarginsGuide: NSLayoutGuide;
  // readonly leadingAnchor: NSLayoutXAxisAnchor;
  // readonly leftAnchor: NSLayoutXAxisAnchor;
  // readonly mouseDownCanMoveWindow: boolean;
  // needsDisplay: boolean;
  // needsLayout: boolean;
  // readonly needsPanelToBecomeKey: boolean;
  // needsUpdateConstraints: boolean;
  // nextKeyView: NSView;
  // readonly nextValidKeyView: NSView;
  // readonly opaqueAncestor: NSView;
  // readonly pageFooter: NSAttributedString;
  // readonly pageHeader: NSAttributedString;
  // postsBoundsChangedNotifications: boolean;
  // postsFrameChangedNotifications: boolean;
  // preparedContentRect: CGRect;
  // readonly preservesContentDuringLiveResize: boolean;
  // pressureConfiguration: NSPressureConfiguration;
  // readonly previousKeyView: NSView;
  // readonly previousValidKeyView: NSView;
  // readonly printJobTitle: NSString;
  // readonly rectPreservedDuringLiveResize: CGRect;
  // readonly registeredDraggedTypes: NSArray;
  // requiresConstraintBasedLayout: boolean;
  // readonly rightAnchor: NSLayoutXAxisAnchor;
  // readonly safeAreaInsets: NSEdgeInsets;
  // readonly safeAreaLayoutGuide: NSLayoutGuide;
  // readonly safeAreaRect: CGRect;
  // shadow: NSShadow;
  // readonly superclass: interop.Object;
  // readonly superview: NSView;
  // readonly tag: number;
  // readonly topAnchor: NSLayoutYAxisAnchor;
  // readonly trackingAreas: NSArray;
  // readonly trailingAnchor: NSLayoutXAxisAnchor;
  // translatesAutoresizingMaskIntoConstraints: boolean;
  // userInterfaceLayoutDirection: interop.Enum<typeof NSUserInterfaceLayoutDirection>;
  // readonly visibleRect: CGRect;
  // wantsBestResolutionOpenGLSurface: boolean;
  // readonly wantsDefaultClipping: boolean;
  // wantsExtendedDynamicRangeOpenGLSurface: boolean;
  // wantsLayer: boolean;
  // wantsRestingTouches: boolean;
  // readonly wantsUpdateLayer: boolean;
  // readonly widthAdjustLimit: number;
  // readonly widthAnchor: NSLayoutDimension;
  // readonly window: NSWindow;
  // readonly zone: interop.Pointer;
}

export class HTMLNSImageElement extends HTMLNSObjectElement {
  readonly nativeObject = NSImage.new();
  get delegate(): NSImageDelegateImpl {
    return (this.nativeObject.delegate ??= NSImageDelegateImpl.new()) as NSImageDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    accessibilitydescription: 'accessibilityDescription',
    addrepresentation: 'addRepresentation',
    addrepresentations: 'addRepresentations',
    alignmentrect: 'alignmentRect',
    backgroundcolor: 'backgroundColor',
    bestrepresentationfordevice: 'bestRepresentationForDevice',
    bestrepresentationforrectcontexthints: 'bestRepresentationForRectContextHints',
    cachedepthmatchesimagedepth: 'cacheDepthMatchesImageDepth',
    cachemode: 'cacheMode',
    cancelincrementalload: 'cancelIncrementalLoad',
    caninitwithpasteboard: 'canInitWithPasteboard',
    capinsets: 'capInsets',
    cgimageforproposedrectcontexthints: 'CGImageForProposedRectContextHints',
    compositetopointfromrectoperation: 'compositeToPointFromRectOperation',
    compositetopointfromrectoperationfraction: 'compositeToPointFromRectOperationFraction',
    compositetopointoperation: 'compositeToPointOperation',
    compositetopointoperationfraction: 'compositeToPointOperationFraction',
    delegate: 'delegate',
    dissolvetopointfraction: 'dissolveToPointFraction',
    dissolvetopointfromrectfraction: 'dissolveToPointFromRectFraction',
    drawatpointfromrectoperationfraction: 'drawAtPointFromRectOperationFraction',
    drawinrect: 'drawInRect',
    drawinrectfromrectoperationfraction: 'drawInRectFromRectOperationFraction',
    drawinrectfromrectoperationfractionrespectflippedhints: 'drawInRectFromRectOperationFractionRespectFlippedHints',
    drawrepresentationinrect: 'drawRepresentationInRect',
    hittestrectwithimagedestinationrectcontexthintsflipped: 'hitTestRectWithImageDestinationRectContextHintsFlipped',
    imagefiletypes: 'imageFileTypes',
    imagenamed: 'imageNamed',
    imagepasteboardtypes: 'imagePasteboardTypes',
    imagetypes: 'imageTypes',
    imageunfilteredfiletypes: 'imageUnfilteredFileTypes',
    imageunfilteredpasteboardtypes: 'imageUnfilteredPasteboardTypes',
    imageunfilteredtypes: 'imageUnfilteredTypes',
    imagewithlocale: 'imageWithLocale',
    imagewithsizeflippeddrawinghandler: 'imageWithSizeFlippedDrawingHandler',
    imagewithsymbolconfiguration: 'imageWithSymbolConfiguration',
    imagewithsymbolnamebundlevariablevalue: 'imageWithSymbolNameBundleVariableValue',
    imagewithsymbolnamevariablevalue: 'imageWithSymbolNameVariableValue',
    imagewithsystemsymbolnameaccessibilitydescription: 'imageWithSystemSymbolNameAccessibilityDescription',
    imagewithsystemsymbolnamevariablevalueaccessibilitydescription: 'imageWithSystemSymbolNameVariableValueAccessibilityDescription',
    initbyreferencingfile: 'initByReferencingFile',
    initbyreferencingurl: 'initByReferencingURL',
    initwithcgimagesize: 'initWithCGImageSize',
    initwithcoder: 'initWithCoder',
    initwithcontentsoffile: 'initWithContentsOfFile',
    initwithcontentsofurl: 'initWithContentsOfURL',
    initwithdata: 'initWithData',
    initwithdataignoringorientation: 'initWithDataIgnoringOrientation',
    initwithiconref: 'initWithIconRef',
    initwithpasteboard: 'initWithPasteboard',
    initwithsize: 'initWithSize',
    iscachedseparately: 'isCachedSeparately',
    isdataretained: 'isDataRetained',
    isflipped: 'isFlipped',
    istemplate: 'isTemplate',
    isvalid: 'isValid',
    layercontentsforcontentsscale: 'layerContentsForContentsScale',
    locale: 'locale',
    lockfocus: 'lockFocus',
    lockfocusflipped: 'lockFocusFlipped',
    lockfocusonrepresentation: 'lockFocusOnRepresentation',
    matchesonlyonbestfittingaxis: 'matchesOnlyOnBestFittingAxis',
    matchesonmultipleresolution: 'matchesOnMultipleResolution',
    name: 'name',
    preferscolormatch: 'prefersColorMatch',
    recache: 'recache',
    recommendedlayercontentsscale: 'recommendedLayerContentsScale',
    removerepresentation: 'removeRepresentation',
    representations: 'representations',
    resizingmode: 'resizingMode',
    scaleswhenresized: 'scalesWhenResized',
    setcachedepthmatchesimagedepth: 'setCacheDepthMatchesImageDepth',
    setcachedseparately: 'setCachedSeparately',
    setdataretained: 'setDataRetained',
    setflipped: 'setFlipped',
    setname: 'setName',
    setscaleswhenresized: 'setScalesWhenResized',
    size: 'size',
    symbolconfiguration: 'symbolConfiguration',
    tiffrepresentation: 'TIFFRepresentation',
    tiffrepresentationusingcompressionfactor: 'TIFFRepresentationUsingCompressionFactor',
    unlockfocus: 'unlockFocus',
    usesepsonresolutionmismatch: 'usesEPSOnResolutionMismatch',
  }

  // alignmentRect: CGRect;
  // backgroundColor: NSColor;
  // cacheMode: interop.Enum<typeof NSImageCacheMode>;
  // capInsets: NSEdgeInsets;
  // imageTypes: NSArray;
  // imageUnfilteredTypes: NSArray;
  // isTemplate: boolean;
  // readonly isValid: boolean;
  // readonly locale: NSLocale;
  // matchesOnlyOnBestFittingAxis: boolean;
  // matchesOnMultipleResolution: boolean;
  // prefersColorMatch: boolean;
  // readonly representations: NSArray;
  // resizingMode: interop.Enum<typeof NSImageResizingMode>;
  // size: CGSize;
  // readonly symbolConfiguration: NSImageSymbolConfiguration;
  // readonly TIFFRepresentation: NSData;
  // usesEPSOnResolutionMismatch: boolean;

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
  readonly nativeObject = NSToolbar.new();
  get delegate(): NSToolbarDelegateImpl {
    return (this.nativeObject.delegate ??= NSToolbarDelegateImpl.new()) as NSToolbarDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    allowsextensionitems: 'allowsExtensionItems',
    allowsusercustomization: 'allowsUserCustomization',
    autosavesconfiguration: 'autosavesConfiguration',
    centereditemidentifier: 'centeredItemIdentifier',
    centereditemidentifiers: 'centeredItemIdentifiers',
    configurationdictionary: 'configurationDictionary',
    customizationpaletteisrunning: 'customizationPaletteIsRunning',
    delegate: 'delegate',
    displaymode: 'displayMode',
    fullscreenaccessoryview: 'fullScreenAccessoryView',
    fullscreenaccessoryviewmaxheight: 'fullScreenAccessoryViewMaxHeight',
    fullscreenaccessoryviewminheight: 'fullScreenAccessoryViewMinHeight',
    identifier: 'identifier',
    init: 'init',
    initwithidentifier: 'initWithIdentifier',
    insertitemwithitemidentifieratindex: 'insertItemWithItemIdentifierAtIndex',
    isvisible: 'isVisible',
    items: 'items',
    removeitematindex: 'removeItemAtIndex',
    runcustomizationpalette: 'runCustomizationPalette',
    selecteditemidentifier: 'selectedItemIdentifier',
    setconfigurationfromdictionary: 'setConfigurationFromDictionary',
    showsbaselineseparator: 'showsBaselineSeparator',
    sizemode: 'sizeMode',
    validatevisibleitems: 'validateVisibleItems',
    visibleitems: 'visibleItems',
  }

  // allowsExtensionItems: boolean;
  // allowsUserCustomization: boolean;
  // autosavesConfiguration: boolean;
  // centeredItemIdentifiers: NSSet;
  // readonly configurationDictionary: NSDictionary;
  // readonly customizationPaletteIsRunning: boolean;
  // displayMode: interop.Enum<typeof NSToolbarDisplayMode>;
  // fullScreenAccessoryView: NSView;
  // fullScreenAccessoryViewMaxHeight: number;
  // fullScreenAccessoryViewMinHeight: number;
  // readonly identifier: NSString;
  // isVisible: boolean;
  // readonly items: NSArray;
  // showsBaselineSeparator: boolean;
  // sizeMode: interop.Enum<typeof NSToolbarSizeMode>;
  // readonly visibleItems: NSArray;

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
  readonly nativeObject = NSTabView.new();
  get delegate(): NSTabViewDelegateImpl {
    return (this.nativeObject.delegate ??= NSTabViewDelegateImpl.new()) as NSTabViewDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    addtabviewitem: 'addTabViewItem',
    allowstruncatedlabels: 'allowsTruncatedLabels',
    contentrect: 'contentRect',
    controlsize: 'controlSize',
    controltint: 'controlTint',
    delegate: 'delegate',
    drawsbackground: 'drawsBackground',
    font: 'font',
    indexoftabviewitem: 'indexOfTabViewItem',
    indexoftabviewitemwithidentifier: 'indexOfTabViewItemWithIdentifier',
    inserttabviewitematindex: 'insertTabViewItemAtIndex',
    minimumsize: 'minimumSize',
    numberoftabviewitems: 'numberOfTabViewItems',
    removetabviewitem: 'removeTabViewItem',
    selectedtabviewitem: 'selectedTabViewItem',
    selectfirsttabviewitem: 'selectFirstTabViewItem',
    selectlasttabviewitem: 'selectLastTabViewItem',
    selectnexttabviewitem: 'selectNextTabViewItem',
    selectprevioustabviewitem: 'selectPreviousTabViewItem',
    selecttabviewitem: 'selectTabViewItem',
    selecttabviewitematindex: 'selectTabViewItemAtIndex',
    selecttabviewitemwithidentifier: 'selectTabViewItemWithIdentifier',
    tabposition: 'tabPosition',
    tabviewbordertype: 'tabViewBorderType',
    tabviewitematindex: 'tabViewItemAtIndex',
    tabviewitematpoint: 'tabViewItemAtPoint',
    tabviewitems: 'tabViewItems',
    tabviewtype: 'tabViewType',
    takeselectedtabviewitemfromsender: 'takeSelectedTabViewItemFromSender',
  }

  // allowsTruncatedLabels: boolean;
  // readonly contentRect: CGRect;
  // controlSize: interop.Enum<typeof NSControlSize>;
  // controlTint: interop.Enum<typeof NSControlTint>;
  // drawsBackground: boolean;
  // font: NSFont;
  // readonly minimumSize: CGSize;
  // readonly numberOfTabViewItems: number;
  // readonly selectedTabViewItem: NSTabViewItem;
  // tabPosition: interop.Enum<typeof NSTabPosition>;
  // tabViewBorderType: interop.Enum<typeof NSTabViewBorderType>;
  // tabViewType: interop.Enum<typeof NSTabViewType>;

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
  readonly nativeObject = NSApplication.sharedApplication;
  get delegate(): NSApplicationDelegateImpl {
    return (this.nativeObject.delegate ??= NSApplicationDelegateImpl.new()) as NSApplicationDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    abortmodal: 'abortModal',
    accessibilityactivationpoint: 'accessibilityActivationPoint',
    accessibilityallowedvalues: 'accessibilityAllowedValues',
    accessibilityapplicationfocuseduielement: 'accessibilityApplicationFocusedUIElement',
    accessibilityattributedstringforrange: 'accessibilityAttributedStringForRange',
    accessibilityattributeduserinputlabels: 'accessibilityAttributedUserInputLabels',
    accessibilitycancelbutton: 'accessibilityCancelButton',
    accessibilitycellforcolumnrow: 'accessibilityCellForColumnRow',
    accessibilitychildren: 'accessibilityChildren',
    accessibilitychildreninnavigationorder: 'accessibilityChildrenInNavigationOrder',
    accessibilityclearbutton: 'accessibilityClearButton',
    accessibilityclosebutton: 'accessibilityCloseButton',
    accessibilitycolumncount: 'accessibilityColumnCount',
    accessibilitycolumnheaderuielements: 'accessibilityColumnHeaderUIElements',
    accessibilitycolumnindexrange: 'accessibilityColumnIndexRange',
    accessibilitycolumns: 'accessibilityColumns',
    accessibilitycolumntitles: 'accessibilityColumnTitles',
    accessibilitycontents: 'accessibilityContents',
    accessibilitycriticalvalue: 'accessibilityCriticalValue',
    accessibilitycustomactions: 'accessibilityCustomActions',
    accessibilitycustomrotors: 'accessibilityCustomRotors',
    accessibilitydecrementbutton: 'accessibilityDecrementButton',
    accessibilitydefaultbutton: 'accessibilityDefaultButton',
    accessibilitydisclosedbyrow: 'accessibilityDisclosedByRow',
    accessibilitydisclosedrows: 'accessibilityDisclosedRows',
    accessibilitydisclosurelevel: 'accessibilityDisclosureLevel',
    accessibilitydocument: 'accessibilityDocument',
    accessibilityextrasmenubar: 'accessibilityExtrasMenuBar',
    accessibilityfilename: 'accessibilityFilename',
    accessibilityfocusedwindow: 'accessibilityFocusedWindow',
    accessibilityframe: 'accessibilityFrame',
    accessibilityframeforrange: 'accessibilityFrameForRange',
    accessibilityfullscreenbutton: 'accessibilityFullScreenButton',
    accessibilitygrowarea: 'accessibilityGrowArea',
    accessibilityhandles: 'accessibilityHandles',
    accessibilityheader: 'accessibilityHeader',
    accessibilityhelp: 'accessibilityHelp',
    accessibilityhorizontalscrollbar: 'accessibilityHorizontalScrollBar',
    accessibilityhorizontalunitdescription: 'accessibilityHorizontalUnitDescription',
    accessibilityhorizontalunits: 'accessibilityHorizontalUnits',
    accessibilityidentifier: 'accessibilityIdentifier',
    accessibilityincrementbutton: 'accessibilityIncrementButton',
    accessibilityindex: 'accessibilityIndex',
    accessibilityinsertionpointlinenumber: 'accessibilityInsertionPointLineNumber',
    accessibilitylabel: 'accessibilityLabel',
    accessibilitylabeluielements: 'accessibilityLabelUIElements',
    accessibilitylabelvalue: 'accessibilityLabelValue',
    accessibilitylayoutpointforscreenpoint: 'accessibilityLayoutPointForScreenPoint',
    accessibilitylayoutsizeforscreensize: 'accessibilityLayoutSizeForScreenSize',
    accessibilitylineforindex: 'accessibilityLineForIndex',
    accessibilitylinkeduielements: 'accessibilityLinkedUIElements',
    accessibilitymainwindow: 'accessibilityMainWindow',
    accessibilitymarkergroupuielement: 'accessibilityMarkerGroupUIElement',
    accessibilitymarkertypedescription: 'accessibilityMarkerTypeDescription',
    accessibilitymarkeruielements: 'accessibilityMarkerUIElements',
    accessibilitymarkervalues: 'accessibilityMarkerValues',
    accessibilitymaxvalue: 'accessibilityMaxValue',
    accessibilitymenubar: 'accessibilityMenuBar',
    accessibilityminimizebutton: 'accessibilityMinimizeButton',
    accessibilityminvalue: 'accessibilityMinValue',
    accessibilitynextcontents: 'accessibilityNextContents',
    accessibilitynumberofcharacters: 'accessibilityNumberOfCharacters',
    accessibilityorientation: 'accessibilityOrientation',
    accessibilityoverflowbutton: 'accessibilityOverflowButton',
    accessibilityparent: 'accessibilityParent',
    accessibilityperformcancel: 'accessibilityPerformCancel',
    accessibilityperformconfirm: 'accessibilityPerformConfirm',
    accessibilityperformdecrement: 'accessibilityPerformDecrement',
    accessibilityperformdelete: 'accessibilityPerformDelete',
    accessibilityperformincrement: 'accessibilityPerformIncrement',
    accessibilityperformpick: 'accessibilityPerformPick',
    accessibilityperformpress: 'accessibilityPerformPress',
    accessibilityperformraise: 'accessibilityPerformRaise',
    accessibilityperformshowalternateui: 'accessibilityPerformShowAlternateUI',
    accessibilityperformshowdefaultui: 'accessibilityPerformShowDefaultUI',
    accessibilityperformshowmenu: 'accessibilityPerformShowMenu',
    accessibilityplaceholdervalue: 'accessibilityPlaceholderValue',
    accessibilitypreviouscontents: 'accessibilityPreviousContents',
    accessibilityproxy: 'accessibilityProxy',
    accessibilityrangeforindex: 'accessibilityRangeForIndex',
    accessibilityrangeforline: 'accessibilityRangeForLine',
    accessibilityrangeforposition: 'accessibilityRangeForPosition',
    accessibilityrole: 'accessibilityRole',
    accessibilityroledescription: 'accessibilityRoleDescription',
    accessibilityrowcount: 'accessibilityRowCount',
    accessibilityrowheaderuielements: 'accessibilityRowHeaderUIElements',
    accessibilityrowindexrange: 'accessibilityRowIndexRange',
    accessibilityrows: 'accessibilityRows',
    accessibilityrtfforrange: 'accessibilityRTFForRange',
    accessibilityrulermarkertype: 'accessibilityRulerMarkerType',
    accessibilityscreenpointforlayoutpoint: 'accessibilityScreenPointForLayoutPoint',
    accessibilityscreensizeforlayoutsize: 'accessibilityScreenSizeForLayoutSize',
    accessibilitysearchbutton: 'accessibilitySearchButton',
    accessibilitysearchmenu: 'accessibilitySearchMenu',
    accessibilityselectedcells: 'accessibilitySelectedCells',
    accessibilityselectedchildren: 'accessibilitySelectedChildren',
    accessibilityselectedcolumns: 'accessibilitySelectedColumns',
    accessibilityselectedrows: 'accessibilitySelectedRows',
    accessibilityselectedtext: 'accessibilitySelectedText',
    accessibilityselectedtextrange: 'accessibilitySelectedTextRange',
    accessibilityselectedtextranges: 'accessibilitySelectedTextRanges',
    accessibilityservesastitleforuielements: 'accessibilityServesAsTitleForUIElements',
    accessibilitysharedcharacterrange: 'accessibilitySharedCharacterRange',
    accessibilitysharedfocuselements: 'accessibilitySharedFocusElements',
    accessibilitysharedtextuielements: 'accessibilitySharedTextUIElements',
    accessibilityshownmenu: 'accessibilityShownMenu',
    accessibilitysortdirection: 'accessibilitySortDirection',
    accessibilitysplitters: 'accessibilitySplitters',
    accessibilitystringforrange: 'accessibilityStringForRange',
    accessibilitystylerangeforindex: 'accessibilityStyleRangeForIndex',
    accessibilitysubrole: 'accessibilitySubrole',
    accessibilitytabs: 'accessibilityTabs',
    accessibilitytitle: 'accessibilityTitle',
    accessibilitytitleuielement: 'accessibilityTitleUIElement',
    accessibilitytoolbarbutton: 'accessibilityToolbarButton',
    accessibilitytopleveluielement: 'accessibilityTopLevelUIElement',
    accessibilityunitdescription: 'accessibilityUnitDescription',
    accessibilityunits: 'accessibilityUnits',
    accessibilityurl: 'accessibilityURL',
    accessibilityuserinputlabels: 'accessibilityUserInputLabels',
    accessibilityvalue: 'accessibilityValue',
    accessibilityvaluedescription: 'accessibilityValueDescription',
    accessibilityverticalscrollbar: 'accessibilityVerticalScrollBar',
    accessibilityverticalunitdescription: 'accessibilityVerticalUnitDescription',
    accessibilityverticalunits: 'accessibilityVerticalUnits',
    accessibilityvisiblecells: 'accessibilityVisibleCells',
    accessibilityvisiblecharacterrange: 'accessibilityVisibleCharacterRange',
    accessibilityvisiblechildren: 'accessibilityVisibleChildren',
    accessibilityvisiblecolumns: 'accessibilityVisibleColumns',
    accessibilityvisiblerows: 'accessibilityVisibleRows',
    accessibilitywarningvalue: 'accessibilityWarningValue',
    accessibilitywindow: 'accessibilityWindow',
    accessibilitywindows: 'accessibilityWindows',
    accessibilityzoombutton: 'accessibilityZoomButton',
    activate: 'activate',
    activatecontexthelpmode: 'activateContextHelpMode',
    activateignoringotherapps: 'activateIgnoringOtherApps',
    activationpolicy: 'activationPolicy',
    addwindowsitemtitlefilename: 'addWindowsItemTitleFilename',
    appearance: 'appearance',
    applicationiconimage: 'applicationIconImage',
    applicationprintfiles: 'applicationPrintFiles',
    arrangeinfront: 'arrangeInFront',
    autorelease: 'autorelease',
    beginmodalsessionforwindow: 'beginModalSessionForWindow',
    beginmodalsessionforwindowrelativetowindow: 'beginModalSessionForWindowRelativeToWindow',
    beginsheetmodalforwindowmodaldelegatedidendselectorcontextinfo: 'beginSheetModalForWindowModalDelegateDidEndSelectorContextInfo',
    canceluserattentionrequest: 'cancelUserAttentionRequest',
    changewindowsitemtitlefilename: 'changeWindowsItemTitleFilename',
    class: 'class',
    completestaterestoration: 'completeStateRestoration',
    conformstoprotocol: 'conformsToProtocol',
    context: 'context',
    currentevent: 'currentEvent',
    currentsystempresentationoptions: 'currentSystemPresentationOptions',
    deactivate: 'deactivate',
    debugdescription: 'debugDescription',
    delegate: 'delegate',
    description: 'description',
    detachdrawingthreadtotargetwithobject: 'detachDrawingThreadToTargetWithObject',
    disablerelaunchonlogin: 'disableRelaunchOnLogin',
    discardeventsmatchingmaskbeforeevent: 'discardEventsMatchingMaskBeforeEvent',
    docktile: 'dockTile',
    effectiveappearance: 'effectiveAppearance',
    enabledremotenotificationtypes: 'enabledRemoteNotificationTypes',
    enablerelaunchonlogin: 'enableRelaunchOnLogin',
    endmodalsession: 'endModalSession',
    endsheet: 'endSheet',
    endsheetreturncode: 'endSheetReturnCode',
    enumeratewindowswithoptionsusingblock: 'enumerateWindowsWithOptionsUsingBlock',
    extendstaterestoration: 'extendStateRestoration',
    finishlaunching: 'finishLaunching',
    hash: 'hash',
    helpmenu: 'helpMenu',
    hide: 'hide',
    hideotherapplications: 'hideOtherApplications',
    isaccessibilityalternateuivisible: 'isAccessibilityAlternateUIVisible',
    isaccessibilitydisclosed: 'isAccessibilityDisclosed',
    isaccessibilityedited: 'isAccessibilityEdited',
    isaccessibilityelement: 'isAccessibilityElement',
    isaccessibilityenabled: 'isAccessibilityEnabled',
    isaccessibilityexpanded: 'isAccessibilityExpanded',
    isaccessibilityfocused: 'isAccessibilityFocused',
    isaccessibilityfrontmost: 'isAccessibilityFrontmost',
    isaccessibilityhidden: 'isAccessibilityHidden',
    isaccessibilitymain: 'isAccessibilityMain',
    isaccessibilityminimized: 'isAccessibilityMinimized',
    isaccessibilitymodal: 'isAccessibilityModal',
    isaccessibilityorderedbyrow: 'isAccessibilityOrderedByRow',
    isaccessibilityprotectedcontent: 'isAccessibilityProtectedContent',
    isaccessibilityrequired: 'isAccessibilityRequired',
    isaccessibilityselected: 'isAccessibilitySelected',
    isaccessibilityselectorallowed: 'isAccessibilitySelectorAllowed',
    isactive: 'isActive',
    isautomaticcustomizetouchbarmenuitemenabled: 'isAutomaticCustomizeTouchBarMenuItemEnabled',
    isequal: 'isEqual',
    isfullkeyboardaccessenabled: 'isFullKeyboardAccessEnabled',
    ishidden: 'isHidden',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isprotecteddataavailable: 'isProtectedDataAvailable',
    isproxy: 'isProxy',
    isregisteredforremotenotifications: 'isRegisteredForRemoteNotifications',
    isrunning: 'isRunning',
    keywindow: 'keyWindow',
    mainmenu: 'mainMenu',
    mainwindow: 'mainWindow',
    makewindowsperforminorder: 'makeWindowsPerformInOrder',
    miniaturizeall: 'miniaturizeAll',
    modalwindow: 'modalWindow',
    nexteventmatchingmaskuntildateinmodedequeue: 'nextEventMatchingMaskUntilDateInModeDequeue',
    occlusionstate: 'occlusionState',
    ordereddocuments: 'orderedDocuments',
    orderedwindows: 'orderedWindows',
    orderfrontcharacterpalette: 'orderFrontCharacterPalette',
    orderfrontcolorpanel: 'orderFrontColorPanel',
    orderfrontstandardaboutpanel: 'orderFrontStandardAboutPanel',
    orderfrontstandardaboutpanelwithoptions: 'orderFrontStandardAboutPanelWithOptions',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    posteventatstart: 'postEventAtStart',
    presentationoptions: 'presentationOptions',
    preventwindowordering: 'preventWindowOrdering',
    registerforremotenotifications: 'registerForRemoteNotifications',
    registerforremotenotificationtypes: 'registerForRemoteNotificationTypes',
    registerservicesmenusendtypesreturntypes: 'registerServicesMenuSendTypesReturnTypes',
    registeruserinterfaceitemsearchhandler: 'registerUserInterfaceItemSearchHandler',
    release: 'release',
    removewindowsitem: 'removeWindowsItem',
    replytoapplicationshouldterminate: 'replyToApplicationShouldTerminate',
    replytoopenorprint: 'replyToOpenOrPrint',
    reportexception: 'reportException',
    requestuserattention: 'requestUserAttention',
    respondstoselector: 'respondsToSelector',
    restorewindowwithidentifierstatecompletionhandler: 'restoreWindowWithIdentifierStateCompletionHandler',
    retain: 'retain',
    retaincount: 'retainCount',
    run: 'run',
    runmodalforwindow: 'runModalForWindow',
    runmodalforwindowrelativetowindow: 'runModalForWindowRelativeToWindow',
    runmodalsession: 'runModalSession',
    runpagelayout: 'runPageLayout',
    searchstringinuserinterfaceitemstringsearchrangefoundrange: 'searchStringInUserInterfaceItemStringSearchRangeFoundRange',
    self: 'self',
    sendactiontofrom: 'sendActionToFrom',
    sendevent: 'sendEvent',
    servicesmenu: 'servicesMenu',
    servicesprovider: 'servicesProvider',
    setactivationpolicy: 'setActivationPolicy',
    setwindowsneedupdate: 'setWindowsNeedUpdate',
    sharedapplication: 'sharedApplication',
    showhelp: 'showHelp',
    stop: 'stop',
    stopmodal: 'stopModal',
    stopmodalwithcode: 'stopModalWithCode',
    superclass: 'superclass',
    targetforaction: 'targetForAction',
    targetforactiontofrom: 'targetForActionToFrom',
    terminate: 'terminate',
    toggletouchbarcustomizationpalette: 'toggleTouchBarCustomizationPalette',
    trytoperformwith: 'tryToPerformWith',
    unhide: 'unhide',
    unhideallapplications: 'unhideAllApplications',
    unhidewithoutactivation: 'unhideWithoutActivation',
    unregisterforremotenotifications: 'unregisterForRemoteNotifications',
    unregisteruserinterfaceitemsearchhandler: 'unregisterUserInterfaceItemSearchHandler',
    updatewindows: 'updateWindows',
    updatewindowsitem: 'updateWindowsItem',
    userinterfacelayoutdirection: 'userInterfaceLayoutDirection',
    validatemenuitem: 'validateMenuItem',
    validateuserinterfaceitem: 'validateUserInterfaceItem',
    validrequestorforsendtypereturntype: 'validRequestorForSendTypeReturnType',
    windows: 'windows',
    windowsmenu: 'windowsMenu',
    windowwithwindownumber: 'windowWithWindowNumber',
    yieldactivationtoapplication: 'yieldActivationToApplication',
    yieldactivationtoapplicationwithbundleidentifier: 'yieldActivationToApplicationWithBundleIdentifier',
    zone: 'zone',
  }

  // accessibilityActivationPoint: CGPoint;
  // accessibilityApplicationFocusedUIElement: interop.Object;
  // accessibilityCancelButton: interop.Object;
  // accessibilityClearButton: interop.Object;
  // accessibilityCloseButton: interop.Object;
  // accessibilityColumnCount: number;
  // accessibilityColumnIndexRange: _NSRange;
  // accessibilityCriticalValue: interop.Object;
  // accessibilityDecrementButton: interop.Object;
  // accessibilityDefaultButton: interop.Object;
  // accessibilityDisclosedByRow: interop.Object;
  // accessibilityDisclosedRows: interop.Object;
  // accessibilityDisclosureLevel: number;
  // accessibilityExtrasMenuBar: interop.Object;
  // accessibilityFocusedWindow: interop.Object;
  // accessibilityFrame: CGRect;
  // accessibilityFullScreenButton: interop.Object;
  // accessibilityGrowArea: interop.Object;
  // accessibilityHeader: interop.Object;
  // accessibilityHorizontalScrollBar: interop.Object;
  // accessibilityHorizontalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityIncrementButton: interop.Object;
  // accessibilityIndex: number;
  // accessibilityInsertionPointLineNumber: number;
  // accessibilityLabelValue: number;
  // accessibilityMainWindow: interop.Object;
  // accessibilityMarkerGroupUIElement: interop.Object;
  // accessibilityMarkerValues: interop.Object;
  // accessibilityMaxValue: interop.Object;
  // accessibilityMenuBar: interop.Object;
  // accessibilityMinimizeButton: interop.Object;
  // accessibilityMinValue: interop.Object;
  // accessibilityNumberOfCharacters: number;
  // accessibilityOrientation: interop.Enum<typeof NSAccessibilityOrientation>;
  // accessibilityOverflowButton: interop.Object;
  // accessibilityParent: interop.Object;
  // accessibilityProxy: interop.Object;
  // accessibilityRowCount: number;
  // accessibilityRowIndexRange: _NSRange;
  // accessibilityRulerMarkerType: interop.Enum<typeof NSAccessibilityRulerMarkerType>;
  // accessibilitySearchButton: interop.Object;
  // accessibilitySearchMenu: interop.Object;
  // accessibilitySelectedTextRange: _NSRange;
  // accessibilitySharedCharacterRange: _NSRange;
  // accessibilityShownMenu: interop.Object;
  // accessibilitySortDirection: interop.Enum<typeof NSAccessibilitySortDirection>;
  // accessibilityTitleUIElement: interop.Object;
  // accessibilityToolbarButton: interop.Object;
  // accessibilityTopLevelUIElement: interop.Object;
  // accessibilityUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityURL: NSURL;
  // accessibilityValue: interop.Object;
  // accessibilityVerticalScrollBar: interop.Object;
  // accessibilityVerticalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityVisibleCharacterRange: _NSRange;
  // accessibilityWarningValue: interop.Object;
  // accessibilityWindow: interop.Object;
  // accessibilityZoomButton: interop.Object;
  // appearance: NSAppearance;
  // applicationIconImage: NSImage;
  // readonly context: NSGraphicsContext;
  // readonly currentEvent: NSEvent;
  // readonly currentSystemPresentationOptions: interop.Enum<typeof NSApplicationPresentationOptions>;
  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // readonly dockTile: NSDockTile;
  // readonly effectiveAppearance: NSAppearance;
  // readonly enabledRemoteNotificationTypes: interop.Enum<typeof NSRemoteNotificationType>;
  // readonly hash: number;
  // helpMenu: NSMenu;
  // isAccessibilityAlternateUIVisible: boolean;
  // isAccessibilityDisclosed: boolean;
  // isAccessibilityEdited: boolean;
  // isAccessibilityElement: boolean;
  // isAccessibilityEnabled: boolean;
  // isAccessibilityExpanded: boolean;
  // isAccessibilityFocused: boolean;
  // isAccessibilityFrontmost: boolean;
  // isAccessibilityHidden: boolean;
  // isAccessibilityMain: boolean;
  // isAccessibilityMinimized: boolean;
  // isAccessibilityModal: boolean;
  // isAccessibilityOrderedByRow: boolean;
  // isAccessibilityProtectedContent: boolean;
  // isAccessibilityRequired: boolean;
  // isAccessibilitySelected: boolean;
  // readonly isActive: boolean;
  // isAutomaticCustomizeTouchBarMenuItemEnabled: boolean;
  // readonly isFullKeyboardAccessEnabled: boolean;
  // readonly isHidden: boolean;
  // readonly isProtectedDataAvailable: boolean;
  // readonly isProxy: boolean;
  // readonly isRegisteredForRemoteNotifications: boolean;
  // readonly isRunning: boolean;
  // readonly keyWindow: NSWindow;
  // mainMenu: NSMenu;
  // readonly mainWindow: NSWindow;
  // readonly modalWindow: NSWindow;
  // readonly occlusionState: interop.Enum<typeof NSApplicationOcclusionState>;
  // readonly orderedDocuments: NSArray;
  // readonly orderedWindows: NSArray;
  // presentationOptions: interop.Enum<typeof NSApplicationPresentationOptions>;
  // servicesMenu: NSMenu;
  // servicesProvider: interop.Object;
  // sharedApplication: NSApplication;
  // readonly superclass: interop.Object;
  // readonly userInterfaceLayoutDirection: interop.Enum<typeof NSUserInterfaceLayoutDirection>;
  // readonly windows: NSArray;
  // windowsMenu: NSMenu;
  // readonly zone: interop.Pointer;

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
  readonly nativeObject = NSTouchBarItem.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    customizationlabel: 'customizationLabel',
    encodewithcoder: 'encodeWithCoder',
    identifier: 'identifier',
    initwithcoder: 'initWithCoder',
    initwithidentifier: 'initWithIdentifier',
    isvisible: 'isVisible',
    view: 'view',
    viewcontroller: 'viewController',
    visibilitypriority: 'visibilityPriority',
  }

  // readonly customizationLabel: NSString;
  // readonly identifier: NSString;
  // readonly isVisible: boolean;
  // readonly view: NSView;
  // readonly viewController: NSViewController;
  // visibilityPriority: number;
}

export class HTMLNSCandidateListTouchBarItemElement extends HTMLNSTouchBarItemElement {
  // @ts-ignore
  readonly nativeObject = NSCandidateListTouchBarItem.new();
  get delegate(): NSCandidateListTouchBarItemDelegateImpl {
    return (this.nativeObject.delegate ??= NSCandidateListTouchBarItemDelegateImpl.new()) as NSCandidateListTouchBarItemDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    allowscollapsing: 'allowsCollapsing',
    allowstextinputcontextcandidates: 'allowsTextInputContextCandidates',
    attributedstringforcandidate: 'attributedStringForCandidate',
    candidates: 'candidates',
    client: 'client',
    customizationlabel: 'customizationLabel',
    delegate: 'delegate',
    iscandidatelistvisible: 'isCandidateListVisible',
    iscollapsed: 'isCollapsed',
    setcandidatesforselectedrangeinstring: 'setCandidatesForSelectedRangeInString',
    updatewithinsertionpointvisibility: 'updateWithInsertionPointVisibility',
  }

  // allowsCollapsing: boolean;
  // allowsTextInputContextCandidates: boolean;
  // attributedStringForCandidate: (p1: interop.Object, p2: number) => NSAttributedString;
  // readonly candidates: NSArray;
  // client: NSView;
  // readonly isCandidateListVisible: boolean;
  // isCollapsed: boolean;

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
  readonly nativeObject = NSWindowController.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    autorelease: 'autorelease',
    class: 'class',
    close: 'close',
    conformstoprotocol: 'conformsToProtocol',
    contentviewcontroller: 'contentViewController',
    debugdescription: 'debugDescription',
    description: 'description',
    dismisscontroller: 'dismissController',
    document: 'document',
    hash: 'hash',
    initwithcoder: 'initWithCoder',
    initwithwindow: 'initWithWindow',
    initwithwindownibname: 'initWithWindowNibName',
    initwithwindownibnameowner: 'initWithWindowNibNameOwner',
    initwithwindownibpathowner: 'initWithWindowNibPathOwner',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    iswindowloaded: 'isWindowLoaded',
    loadwindow: 'loadWindow',
    owner: 'owner',
    performseguewithidentifiersender: 'performSegueWithIdentifierSender',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    prepareforseguesender: 'prepareForSegueSender',
    previewrepresentableactivityitems: 'previewRepresentableActivityItems',
    release: 'release',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    self: 'self',
    setdocumentedited: 'setDocumentEdited',
    shouldcascadewindows: 'shouldCascadeWindows',
    shouldclosedocument: 'shouldCloseDocument',
    shouldperformseguewithidentifiersender: 'shouldPerformSegueWithIdentifierSender',
    showwindow: 'showWindow',
    storyboard: 'storyboard',
    superclass: 'superclass',
    synchronizewindowtitlewithdocumentname: 'synchronizeWindowTitleWithDocumentName',
    window: 'window',
    windowdidload: 'windowDidLoad',
    windowframeautosavename: 'windowFrameAutosaveName',
    windownibname: 'windowNibName',
    windownibpath: 'windowNibPath',
    windowtitlefordocumentdisplayname: 'windowTitleForDocumentDisplayName',
    windowwillload: 'windowWillLoad',
    zone: 'zone',
  }

  // contentViewController: NSViewController;
  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // document: interop.Object;
  // readonly hash: number;
  // readonly isProxy: boolean;
  // readonly isWindowLoaded: boolean;
  // readonly owner: interop.Object | null;
  // shouldCascadeWindows: boolean;
  // shouldCloseDocument: boolean;
  // readonly storyboard: NSStoryboard;
  // readonly superclass: interop.Object;
  // window: NSWindow;
  // readonly windowNibName: NSString;
  // readonly windowNibPath: NSString;
  // readonly zone: interop.Pointer;
}

export class HTMLNSTextFieldCellElement extends HTMLNSActionCellElement {
  readonly nativeObject = NSTextFieldCell.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    allowedinputsourcelocales: 'allowedInputSourceLocales',
    backgroundcolor: 'backgroundColor',
    bezelstyle: 'bezelStyle',
    drawsbackground: 'drawsBackground',
    inittextcell: 'initTextCell',
    initwithcoder: 'initWithCoder',
    placeholderattributedstring: 'placeholderAttributedString',
    placeholderstring: 'placeholderString',
    setupfieldeditorattributes: 'setUpFieldEditorAttributes',
    setwantsnotificationformarkedtext: 'setWantsNotificationForMarkedText',
    textcolor: 'textColor',
  }

  // backgroundColor: NSColor;
  // bezelStyle: interop.Enum<typeof NSTextFieldBezelStyle>;
  // drawsBackground: boolean;
  // placeholderAttributedString: NSAttributedString;
  // textColor: NSColor;
}

export class HTMLNSSliderCellElement extends HTMLNSActionCellElement {
  // @ts-ignore
  readonly nativeObject = NSSliderCell.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    allowstickmarkvaluesonly: 'allowsTickMarkValuesOnly',
    altincrementvalue: 'altIncrementValue',
    barrectflipped: 'barRectFlipped',
    closesttickmarkvaluetovalue: 'closestTickMarkValueToValue',
    drawbarinsideflipped: 'drawBarInsideFlipped',
    drawknob: 'drawKnob',
    drawtickmarks: 'drawTickMarks',
    image: 'image',
    indexoftickmarkatpoint: 'indexOfTickMarkAtPoint',
    isvertical: 'isVertical',
    knobrectflipped: 'knobRectFlipped',
    knobthickness: 'knobThickness',
    maxvalue: 'maxValue',
    minvalue: 'minValue',
    numberoftickmarks: 'numberOfTickMarks',
    preferstrackinguntilmouseup: 'prefersTrackingUntilMouseUp',
    rectoftickmarkatindex: 'rectOfTickMarkAtIndex',
    setimage: 'setImage',
    settitle: 'setTitle',
    settitlecell: 'setTitleCell',
    settitlecolor: 'setTitleColor',
    settitlefont: 'setTitleFont',
    slidertype: 'sliderType',
    tickmarkposition: 'tickMarkPosition',
    tickmarkvalueatindex: 'tickMarkValueAtIndex',
    title: 'title',
    titlecell: 'titleCell',
    titlecolor: 'titleColor',
    titlefont: 'titleFont',
    trackrect: 'trackRect',
  }

  // allowsTickMarkValuesOnly: boolean;
  // altIncrementValue: number;
  // image: NSImage;
  // isVertical: boolean;
  // readonly knobThickness: number;
  // maxValue: number;
  // minValue: number;
  // numberOfTickMarks: number;
  // prefersTrackingUntilMouseUp: boolean;
  // sliderType: interop.Enum<typeof NSSliderType>;
  // tickMarkPosition: interop.Enum<typeof NSTickMarkPosition>;
  // readonly trackRect: CGRect;
}

export class HTMLNSTokenFieldCellElement extends HTMLNSTextFieldCellElement {
  readonly nativeObject = NSTokenFieldCell.new();
  get delegate(): NSTokenFieldCellDelegateImpl {
    return (this.nativeObject.delegate ??= NSTokenFieldCellDelegateImpl.new()) as NSTokenFieldCellDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    completiondelay: 'completionDelay',
    defaultcompletiondelay: 'defaultCompletionDelay',
    defaulttokenizingcharacterset: 'defaultTokenizingCharacterSet',
    delegate: 'delegate',
    tokenizingcharacterset: 'tokenizingCharacterSet',
    tokenstyle: 'tokenStyle',
  }

  // completionDelay: number;
  // defaultCompletionDelay: number;
  // defaultTokenizingCharacterSet: NSCharacterSet;
  // tokenizingCharacterSet: NSCharacterSet;
  // tokenStyle: interop.Enum<typeof NSTokenStyle>;

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
  readonly nativeObject = NSSharingServicePickerToolbarItem.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    delegate: 'delegate',
  }

  // delegate: NSSharingServicePickerToolbarItemDelegate | null;
}

export class HTMLNSButtonTouchBarItemElement extends HTMLNSTouchBarItemElement {
  // @ts-ignore
  readonly nativeObject = NSButtonTouchBarItem.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    action: 'action',
    bezelcolor: 'bezelColor',
    buttontouchbaritemwithidentifierimagetargetaction: 'buttonTouchBarItemWithIdentifierImageTargetAction',
    buttontouchbaritemwithidentifiertitleimagetargetaction: 'buttonTouchBarItemWithIdentifierTitleImageTargetAction',
    buttontouchbaritemwithidentifiertitletargetaction: 'buttonTouchBarItemWithIdentifierTitleTargetAction',
    customizationlabel: 'customizationLabel',
    image: 'image',
    isenabled: 'isEnabled',
    target: 'target',
    title: 'title',
  }

  // action: string;
  // bezelColor: NSColor;
  // image: NSImage;
  // isEnabled: boolean;
  // target: interop.Object;
}

export class HTMLNSTextTableBlockElement extends HTMLNSTextBlockElement {
  readonly nativeObject = NSTextTableBlock.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    columnspan: 'columnSpan',
    initwithtablestartingrowrowspanstartingcolumncolumnspan: 'initWithTableStartingRowRowSpanStartingColumnColumnSpan',
    rowspan: 'rowSpan',
    startingcolumn: 'startingColumn',
    startingrow: 'startingRow',
    table: 'table',
  }

  // readonly columnSpan: number;
  // readonly rowSpan: number;
  // readonly startingColumn: number;
  // readonly startingRow: number;
  // readonly table: NSTextTable;
}

export class HTMLNSComboBoxCellElement extends HTMLNSTextFieldCellElement {
  readonly nativeObject = NSComboBoxCell.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    additemswithobjectvalues: 'addItemsWithObjectValues',
    additemwithobjectvalue: 'addItemWithObjectValue',
    completedstring: 'completedString',
    completes: 'completes',
    datasource: 'dataSource',
    deselectitematindex: 'deselectItemAtIndex',
    hasverticalscroller: 'hasVerticalScroller',
    indexofitemwithobjectvalue: 'indexOfItemWithObjectValue',
    indexofselecteditem: 'indexOfSelectedItem',
    insertitemwithobjectvalueatindex: 'insertItemWithObjectValueAtIndex',
    intercellspacing: 'intercellSpacing',
    isbuttonbordered: 'isButtonBordered',
    itemheight: 'itemHeight',
    itemobjectvalueatindex: 'itemObjectValueAtIndex',
    notenumberofitemschanged: 'noteNumberOfItemsChanged',
    numberofitems: 'numberOfItems',
    numberofvisibleitems: 'numberOfVisibleItems',
    objectvalueofselecteditem: 'objectValueOfSelectedItem',
    objectvalues: 'objectValues',
    reloaddata: 'reloadData',
    removeallitems: 'removeAllItems',
    removeitematindex: 'removeItemAtIndex',
    removeitemwithobjectvalue: 'removeItemWithObjectValue',
    scrollitematindextotop: 'scrollItemAtIndexToTop',
    scrollitematindextovisible: 'scrollItemAtIndexToVisible',
    selectitematindex: 'selectItemAtIndex',
    selectitemwithobjectvalue: 'selectItemWithObjectValue',
    usesdatasource: 'usesDataSource',
  }

  // completes: boolean;
  // dataSource: NSComboBoxCellDataSource;
  // hasVerticalScroller: boolean;
  // readonly indexOfSelectedItem: number;
  // intercellSpacing: CGSize;
  // isButtonBordered: boolean;
  // itemHeight: number;
  // readonly numberOfItems: number;
  // numberOfVisibleItems: number;
  // readonly objectValueOfSelectedItem: interop.Object;
  // readonly objectValues: NSArray;
  // usesDataSource: boolean;
}

export class HTMLNSSecureTextFieldCellElement extends HTMLNSTextFieldCellElement {
  readonly nativeObject = NSSecureTextFieldCell.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    echosbullets: 'echosBullets',
  }

  // echosBullets: boolean;
}

export class HTMLNSTrackingSeparatorToolbarItemElement extends HTMLNSToolbarItemElement {
  readonly nativeObject = NSTrackingSeparatorToolbarItem.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    dividerindex: 'dividerIndex',
    splitview: 'splitView',
    trackingseparatortoolbaritemwithidentifiersplitviewdividerindex: 'trackingSeparatorToolbarItemWithIdentifierSplitViewDividerIndex',
  }

  // dividerIndex: number;
  // splitView: NSSplitView;
}

export class HTMLNSStepperCellElement extends HTMLNSActionCellElement {
  readonly nativeObject = NSStepperCell.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    autorepeat: 'autorepeat',
    increment: 'increment',
    maxvalue: 'maxValue',
    minvalue: 'minValue',
    valuewraps: 'valueWraps',
  }

  // autorepeat: boolean;
  // increment: number;
  // maxValue: number;
  // minValue: number;
  // valueWraps: boolean;
}

export class HTMLNSPopoverTouchBarItemElement extends HTMLNSTouchBarItemElement {
  // @ts-ignore
  readonly nativeObject = NSPopoverTouchBarItem.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    collapsedrepresentation: 'collapsedRepresentation',
    collapsedrepresentationimage: 'collapsedRepresentationImage',
    collapsedrepresentationlabel: 'collapsedRepresentationLabel',
    customizationlabel: 'customizationLabel',
    dismisspopover: 'dismissPopover',
    makestandardactivatepopovergesturerecognizer: 'makeStandardActivatePopoverGestureRecognizer',
    popovertouchbar: 'popoverTouchBar',
    pressandholdtouchbar: 'pressAndHoldTouchBar',
    showpopover: 'showPopover',
    showsclosebutton: 'showsCloseButton',
  }

  // collapsedRepresentation: NSView;
  // collapsedRepresentationImage: NSImage;
  // popoverTouchBar: NSTouchBar;
  // pressAndHoldTouchBar: NSTouchBar;
  // showsCloseButton: boolean;
}

export class HTMLNSPersistentDocumentElement extends HTMLNSDocumentElement {
  // @ts-ignore
  readonly nativeObject = NSPersistentDocument.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    configurepersistentstorecoordinatorforurloftypeerror: 'configurePersistentStoreCoordinatorForURLOfTypeError',
    configurepersistentstorecoordinatorforurloftypemodelconfigurationstoreoptionserror: 'configurePersistentStoreCoordinatorForURLOfTypeModelConfigurationStoreOptionsError',
    managedobjectcontext: 'managedObjectContext',
    managedobjectmodel: 'managedObjectModel',
    persistentstoretypeforfiletype: 'persistentStoreTypeForFileType',
    readfromurloftypeerror: 'readFromURLOfTypeError',
    reverttocontentsofurloftypeerror: 'revertToContentsOfURLOfTypeError',
    writetourloftypeforsaveoperationoriginalcontentsurlerror: 'writeToURLOfTypeForSaveOperationOriginalContentsURLError',
  }

  // managedObjectContext: NSManagedObjectContext;
  // readonly managedObjectModel: NSManagedObjectModel;
}

export class HTMLNSColorPickerTouchBarItemElement extends HTMLNSTouchBarItemElement {
  // @ts-ignore
  readonly nativeObject = NSColorPickerTouchBarItem.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    action: 'action',
    allowedcolorspaces: 'allowedColorSpaces',
    color: 'color',
    colorlist: 'colorList',
    colorpickerwithidentifier: 'colorPickerWithIdentifier',
    colorpickerwithidentifierbuttonimage: 'colorPickerWithIdentifierButtonImage',
    customizationlabel: 'customizationLabel',
    isenabled: 'isEnabled',
    showsalpha: 'showsAlpha',
    strokecolorpickerwithidentifier: 'strokeColorPickerWithIdentifier',
    target: 'target',
    textcolorpickerwithidentifier: 'textColorPickerWithIdentifier',
  }

  // action: string;
  // color: NSColor;
  // colorList: NSColorList;
  // isEnabled: boolean;
  // showsAlpha: boolean;
  // target: interop.Object;
}

export class HTMLNSEPSImageRepElement extends HTMLNSImageRepElement {
  readonly nativeObject = NSEPSImageRep.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    boundingbox: 'boundingBox',
    epsrepresentation: 'EPSRepresentation',
    imagerepwithdata: 'imageRepWithData',
    initwithdata: 'initWithData',
    preparegstate: 'prepareGState',
  }

  // readonly boundingBox: CGRect;
  // readonly EPSRepresentation: NSData;
}

export class HTMLNSCIImageRepElement extends HTMLNSImageRepElement {
  readonly nativeObject = NSCIImageRep.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    ciimage: 'CIImage',
    imagerepwithciimage: 'imageRepWithCIImage',
    initwithciimage: 'initWithCIImage',
  }

  // readonly CIImage: CIImage;
}

export class HTMLNSBitmapImageRepElement extends HTMLNSImageRepElement {
  readonly nativeObject = NSBitmapImageRep.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    bitmapdata: 'bitmapData',
    bitmapformat: 'bitmapFormat',
    bitmapimagerepbyconvertingtocolorspacerenderingintent: 'bitmapImageRepByConvertingToColorSpaceRenderingIntent',
    bitmapimagerepbyretaggingwithcolorspace: 'bitmapImageRepByRetaggingWithColorSpace',
    bitsperpixel: 'bitsPerPixel',
    bytesperplane: 'bytesPerPlane',
    bytesperrow: 'bytesPerRow',
    canbecompressedusing: 'canBeCompressedUsing',
    cgimage: 'CGImage',
    coloratxy: 'colorAtXY',
    colorizebymappinggraytocolorblackmappingwhitemapping: 'colorizeByMappingGrayToColorBlackMappingWhiteMapping',
    colorspace: 'colorSpace',
    encodewithcoder: 'encodeWithCoder',
    getbitmapdataplanes: 'getBitmapDataPlanes',
    getcompressionfactor: 'getCompressionFactor',
    getpixelatxy: 'getPixelAtXY',
    gettiffcompressiontypescount: 'getTIFFCompressionTypesCount',
    imagerepswithdata: 'imageRepsWithData',
    imagerepwithdata: 'imageRepWithData',
    incrementalloadfromdatacomplete: 'incrementalLoadFromDataComplete',
    initforincrementalload: 'initForIncrementalLoad',
    initwithbitmapdataplanespixelswidepixelshighbitspersamplesamplesperpixelhasalphaisplanarcolorspacenamebitmapformatbytesperrowbitsperpixel: 'initWithBitmapDataPlanesPixelsWidePixelsHighBitsPerSampleSamplesPerPixelHasAlphaIsPlanarColorSpaceNameBitmapFormatBytesPerRowBitsPerPixel',
    initwithbitmapdataplanespixelswidepixelshighbitspersamplesamplesperpixelhasalphaisplanarcolorspacenamebytesperrowbitsperpixel: 'initWithBitmapDataPlanesPixelsWidePixelsHighBitsPerSampleSamplesPerPixelHasAlphaIsPlanarColorSpaceNameBytesPerRowBitsPerPixel',
    initwithcgimage: 'initWithCGImage',
    initwithciimage: 'initWithCIImage',
    initwithcoder: 'initWithCoder',
    initwithdata: 'initWithData',
    initwithfocusedviewrect: 'initWithFocusedViewRect',
    isplanar: 'isPlanar',
    localizednamefortiffcompressiontype: 'localizedNameForTIFFCompressionType',
    numberofplanes: 'numberOfPlanes',
    representationofimagerepsinarrayusingtypeproperties: 'representationOfImageRepsInArrayUsingTypeProperties',
    representationusingtypeproperties: 'representationUsingTypeProperties',
    samplesperpixel: 'samplesPerPixel',
    setcoloratxy: 'setColorAtXY',
    setcompressionfactor: 'setCompressionFactor',
    setpixelatxy: 'setPixelAtXY',
    setpropertywithvalue: 'setPropertyWithValue',
    supportssecurecoding: 'supportsSecureCoding',
    tiffrepresentation: 'TIFFRepresentation',
    tiffrepresentationofimagerepsinarray: 'TIFFRepresentationOfImageRepsInArray',
    tiffrepresentationofimagerepsinarrayusingcompressionfactor: 'TIFFRepresentationOfImageRepsInArrayUsingCompressionFactor',
    tiffrepresentationusingcompressionfactor: 'TIFFRepresentationUsingCompressionFactor',
    valueforproperty: 'valueForProperty',
  }

  // readonly bitmapData: interop.Pointer;
  // readonly bitmapFormat: interop.Enum<typeof NSBitmapFormat>;
  // readonly bitsPerPixel: number;
  // readonly bytesPerPlane: number;
  // readonly bytesPerRow: number;
  // readonly CGImage: interop.Pointer;
  // readonly colorSpace: NSColorSpace;
  // readonly isPlanar: boolean;
  // readonly numberOfPlanes: number;
  // readonly samplesPerPixel: number;
  // supportsSecureCoding: boolean;
  // readonly TIFFRepresentation: NSData;
}

export class HTMLNSMutableFontCollectionElement extends HTMLNSFontCollectionElement {
  // @ts-ignore
  readonly nativeObject = NSMutableFontCollection.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    addqueryfordescriptors: 'addQueryForDescriptors',
    exclusiondescriptors: 'exclusionDescriptors',
    fontcollectionwithallavailabledescriptors: 'fontCollectionWithAllAvailableDescriptors',
    fontcollectionwithdescriptors: 'fontCollectionWithDescriptors',
    fontcollectionwithlocale: 'fontCollectionWithLocale',
    fontcollectionwithname: 'fontCollectionWithName',
    fontcollectionwithnamevisibility: 'fontCollectionWithNameVisibility',
    querydescriptors: 'queryDescriptors',
    removequeryfordescriptors: 'removeQueryForDescriptors',
  }

  // fontCollectionWithAllAvailableDescriptors: NSMutableFontCollection;
}

export class HTMLNSCollectionViewElement extends HTMLNSViewElement {
  readonly nativeObject = NSCollectionView.new();
  get delegate(): NSCollectionViewDelegateImpl {
    return (this.nativeObject.delegate ??= NSCollectionViewDelegateImpl.new()) as NSCollectionViewDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    allowsemptyselection: 'allowsEmptySelection',
    allowsmultipleselection: 'allowsMultipleSelection',
    autorelease: 'autorelease',
    backgroundcolors: 'backgroundColors',
    backgroundview: 'backgroundView',
    backgroundviewscrollswithcontent: 'backgroundViewScrollsWithContent',
    class: 'class',
    collectionviewlayout: 'collectionViewLayout',
    concludedragoperation: 'concludeDragOperation',
    conformstoprotocol: 'conformsToProtocol',
    content: 'content',
    datasource: 'dataSource',
    debugdescription: 'debugDescription',
    delegate: 'delegate',
    deleteitemsatindexpaths: 'deleteItemsAtIndexPaths',
    deletesections: 'deleteSections',
    description: 'description',
    deselectall: 'deselectAll',
    deselectitemsatindexpaths: 'deselectItemsAtIndexPaths',
    draggingended: 'draggingEnded',
    draggingentered: 'draggingEntered',
    draggingexited: 'draggingExited',
    draggingimageforitemsatindexeswitheventoffset: 'draggingImageForItemsAtIndexesWithEventOffset',
    draggingimageforitemsatindexpathswitheventoffset: 'draggingImageForItemsAtIndexPathsWithEventOffset',
    draggingsessionendedatpointoperation: 'draggingSessionEndedAtPointOperation',
    draggingsessionmovedtopoint: 'draggingSessionMovedToPoint',
    draggingsessionsourceoperationmaskfordraggingcontext: 'draggingSessionSourceOperationMaskForDraggingContext',
    draggingsessionwillbeginatpoint: 'draggingSessionWillBeginAtPoint',
    draggingupdated: 'draggingUpdated',
    frameforitematindex: 'frameForItemAtIndex',
    frameforitematindexwithnumberofitems: 'frameForItemAtIndexWithNumberOfItems',
    hash: 'hash',
    ignoremodifierkeysfordraggingsession: 'ignoreModifierKeysForDraggingSession',
    indexpathforitem: 'indexPathForItem',
    indexpathforitematpoint: 'indexPathForItemAtPoint',
    indexpathsforvisibleitems: 'indexPathsForVisibleItems',
    indexpathsforvisiblesupplementaryelementsofkind: 'indexPathsForVisibleSupplementaryElementsOfKind',
    insertitemsatindexpaths: 'insertItemsAtIndexPaths',
    insertsections: 'insertSections',
    isequal: 'isEqual',
    isfirstresponder: 'isFirstResponder',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    isselectable: 'isSelectable',
    itematindex: 'itemAtIndex',
    itematindexpath: 'itemAtIndexPath',
    itemprototype: 'itemPrototype',
    layoutattributesforitematindexpath: 'layoutAttributesForItemAtIndexPath',
    layoutattributesforsupplementaryelementofkindatindexpath: 'layoutAttributesForSupplementaryElementOfKindAtIndexPath',
    makeitemwithidentifierforindexpath: 'makeItemWithIdentifierForIndexPath',
    makesupplementaryviewofkindwithidentifierforindexpath: 'makeSupplementaryViewOfKindWithIdentifierForIndexPath',
    maxitemsize: 'maxItemSize',
    maxnumberofcolumns: 'maxNumberOfColumns',
    maxnumberofrows: 'maxNumberOfRows',
    minitemsize: 'minItemSize',
    moveitematindexpathtoindexpath: 'moveItemAtIndexPathToIndexPath',
    movesectiontosection: 'moveSectionToSection',
    newitemforrepresentedobject: 'newItemForRepresentedObject',
    numberofitemsinsection: 'numberOfItemsInSection',
    numberofsections: 'numberOfSections',
    performbatchupdatescompletionhandler: 'performBatchUpdatesCompletionHandler',
    performdragoperation: 'performDragOperation',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    prefetchdatasource: 'prefetchDataSource',
    preparefordragoperation: 'prepareForDragOperation',
    registerclassforitemwithidentifier: 'registerClassForItemWithIdentifier',
    registerclassforsupplementaryviewofkindwithidentifier: 'registerClassForSupplementaryViewOfKindWithIdentifier',
    registernibforitemwithidentifier: 'registerNibForItemWithIdentifier',
    registernibforsupplementaryviewofkindwithidentifier: 'registerNibForSupplementaryViewOfKindWithIdentifier',
    release: 'release',
    reloaddata: 'reloadData',
    reloaditemsatindexpaths: 'reloadItemsAtIndexPaths',
    reloadsections: 'reloadSections',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    scrolltoitemsatindexpathsscrollposition: 'scrollToItemsAtIndexPathsScrollPosition',
    selectall: 'selectAll',
    selectionindexes: 'selectionIndexes',
    selectionindexpaths: 'selectionIndexPaths',
    selectitemsatindexpathsscrollposition: 'selectItemsAtIndexPathsScrollPosition',
    self: 'self',
    setdraggingsourceoperationmaskforlocal: 'setDraggingSourceOperationMaskForLocal',
    superclass: 'superclass',
    supplementaryviewforelementkindatindexpath: 'supplementaryViewForElementKindAtIndexPath',
    togglesectioncollapse: 'toggleSectionCollapse',
    updatedraggingitemsfordrag: 'updateDraggingItemsForDrag',
    visibleitems: 'visibleItems',
    visiblesupplementaryviewsofkind: 'visibleSupplementaryViewsOfKind',
    wantsperiodicdraggingupdates: 'wantsPeriodicDraggingUpdates',
    zone: 'zone',
  }

  // allowsEmptySelection: boolean;
  // allowsMultipleSelection: boolean;
  // backgroundView: NSView;
  // backgroundViewScrollsWithContent: boolean;
  // collectionViewLayout: NSCollectionViewLayout;
  // dataSource: NSCollectionViewDataSource;
  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // readonly hash: number;
  // readonly isFirstResponder: boolean;
  // readonly isProxy: boolean;
  // isSelectable: boolean;
  // itemPrototype: NSCollectionViewItem;
  // maxItemSize: CGSize;
  // maxNumberOfColumns: number;
  // maxNumberOfRows: number;
  // minItemSize: CGSize;
  // readonly numberOfSections: number;
  // prefetchDataSource: NSCollectionViewPrefetching;
  // selectionIndexes: NSIndexSet;
  // selectionIndexPaths: NSSet;
  // readonly superclass: interop.Object;
  // readonly zone: interop.Pointer;

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
  // @ts-ignore
  readonly nativeObject = NSButtonCell.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    alternateimage: 'alternateImage',
    alternatemnemonic: 'alternateMnemonic',
    alternatemnemoniclocation: 'alternateMnemonicLocation',
    alternatetitle: 'alternateTitle',
    attributedalternatetitle: 'attributedAlternateTitle',
    attributedtitle: 'attributedTitle',
    backgroundcolor: 'backgroundColor',
    bezelstyle: 'bezelStyle',
    drawbezelwithframeinview: 'drawBezelWithFrameInView',
    drawimagewithframeinview: 'drawImageWithFrameInView',
    drawtitlewithframeinview: 'drawTitleWithFrameInView',
    getperiodicdelayinterval: 'getPeriodicDelayInterval',
    gradienttype: 'gradientType',
    highlightsby: 'highlightsBy',
    imagedimswhendisabled: 'imageDimsWhenDisabled',
    imageposition: 'imagePosition',
    imagescaling: 'imageScaling',
    initimagecell: 'initImageCell',
    inittextcell: 'initTextCell',
    initwithcoder: 'initWithCoder',
    isopaque: 'isOpaque',
    istransparent: 'isTransparent',
    keyequivalent: 'keyEquivalent',
    keyequivalentfont: 'keyEquivalentFont',
    keyequivalentmodifiermask: 'keyEquivalentModifierMask',
    mouseentered: 'mouseEntered',
    mouseexited: 'mouseExited',
    performclick: 'performClick',
    setalternatemnemoniclocation: 'setAlternateMnemonicLocation',
    setalternatetitlewithmnemonic: 'setAlternateTitleWithMnemonic',
    setbuttontype: 'setButtonType',
    setkeyequivalentfontsize: 'setKeyEquivalentFontSize',
    setperiodicdelayinterval: 'setPeriodicDelayInterval',
    settitlewithmnemonic: 'setTitleWithMnemonic',
    showsborderonlywhilemouseinside: 'showsBorderOnlyWhileMouseInside',
    showsstateby: 'showsStateBy',
    sound: 'sound',
    title: 'title',
  }

  // alternateImage: NSImage;
  // attributedAlternateTitle: NSAttributedString;
  // attributedTitle: NSAttributedString;
  // backgroundColor: NSColor;
  // bezelStyle: interop.Enum<typeof NSBezelStyle>;
  // gradientType: interop.Enum<typeof NSGradientType>;
  // highlightsBy: interop.Enum<typeof NSCellStyleMask>;
  // imageDimsWhenDisabled: boolean;
  // imagePosition: interop.Enum<typeof NSCellImagePosition>;
  // imageScaling: interop.Enum<typeof NSImageScaling>;
  // readonly isOpaque: boolean;
  // isTransparent: boolean;
  // keyEquivalentFont: NSFont;
  // keyEquivalentModifierMask: interop.Enum<typeof NSEventModifierFlags>;
  // showsBorderOnlyWhileMouseInside: boolean;
  // showsStateBy: interop.Enum<typeof NSCellStyleMask>;
  // sound: NSSound;
}

export class HTMLNSBoxElement extends HTMLNSViewElement {
  readonly nativeObject = NSBox.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    bordercolor: 'borderColor',
    borderrect: 'borderRect',
    bordertype: 'borderType',
    borderwidth: 'borderWidth',
    boxtype: 'boxType',
    contentview: 'contentView',
    contentviewmargins: 'contentViewMargins',
    cornerradius: 'cornerRadius',
    fillcolor: 'fillColor',
    istransparent: 'isTransparent',
    setframefromcontentframe: 'setFrameFromContentFrame',
    settitlewithmnemonic: 'setTitleWithMnemonic',
    sizetofit: 'sizeToFit',
    title: 'title',
    titlecell: 'titleCell',
    titlefont: 'titleFont',
    titleposition: 'titlePosition',
    titlerect: 'titleRect',
  }

  // borderColor: NSColor;
  // readonly borderRect: CGRect;
  // borderType: interop.Enum<typeof NSBorderType>;
  // borderWidth: number;
  // boxType: interop.Enum<typeof NSBoxType>;
  // contentView: NSView;
  // contentViewMargins: CGSize;
  // cornerRadius: number;
  // fillColor: NSColor;
  // isTransparent: boolean;
  // readonly titleCell: interop.Object;
  // titleFont: NSFont;
  // titlePosition: interop.Enum<typeof NSTitlePosition>;
  // readonly titleRect: CGRect;
}

export class HTMLNSScrollViewElement extends HTMLNSViewElement {
  // @ts-ignore
  readonly nativeObject = NSScrollView.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    addfloatingsubviewforaxis: 'addFloatingSubviewForAxis',
    allowsmagnification: 'allowsMagnification',
    autohidesscrollers: 'autohidesScrollers',
    automaticallyadjustscontentinsets: 'automaticallyAdjustsContentInsets',
    autorelease: 'autorelease',
    backgroundcolor: 'backgroundColor',
    bordertype: 'borderType',
    class: 'class',
    conformstoprotocol: 'conformsToProtocol',
    contentinsets: 'contentInsets',
    contentsize: 'contentSize',
    contentsizeforframesizehashorizontalscrollerhasverticalscrollerbordertype: 'contentSizeForFrameSizeHasHorizontalScrollerHasVerticalScrollerBorderType',
    contentsizeforframesizehorizontalscrollerclassverticalscrollerclassbordertypecontrolsizescrollerstyle: 'contentSizeForFrameSizeHorizontalScrollerClassVerticalScrollerClassBorderTypeControlSizeScrollerStyle',
    contentview: 'contentView',
    debugdescription: 'debugDescription',
    description: 'description',
    documentcursor: 'documentCursor',
    documentview: 'documentView',
    documentvisiblerect: 'documentVisibleRect',
    drawsbackground: 'drawsBackground',
    findbarposition: 'findBarPosition',
    findbarview: 'findBarView',
    findbarviewdidchangeheight: 'findBarViewDidChangeHeight',
    flashscrollers: 'flashScrollers',
    framesizeforcontentsizehashorizontalscrollerhasverticalscrollerbordertype: 'frameSizeForContentSizeHasHorizontalScrollerHasVerticalScrollerBorderType',
    framesizeforcontentsizehorizontalscrollerclassverticalscrollerclassbordertypecontrolsizescrollerstyle: 'frameSizeForContentSizeHorizontalScrollerClassVerticalScrollerClassBorderTypeControlSizeScrollerStyle',
    hash: 'hash',
    hashorizontalruler: 'hasHorizontalRuler',
    hashorizontalscroller: 'hasHorizontalScroller',
    hasverticalruler: 'hasVerticalRuler',
    hasverticalscroller: 'hasVerticalScroller',
    horizontallinescroll: 'horizontalLineScroll',
    horizontalpagescroll: 'horizontalPageScroll',
    horizontalrulerview: 'horizontalRulerView',
    horizontalscrollelasticity: 'horizontalScrollElasticity',
    horizontalscroller: 'horizontalScroller',
    initwithcoder: 'initWithCoder',
    initwithframe: 'initWithFrame',
    isequal: 'isEqual',
    isfindbarvisible: 'isFindBarVisible',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    linescroll: 'lineScroll',
    magnification: 'magnification',
    magnifytofitrect: 'magnifyToFitRect',
    maxmagnification: 'maxMagnification',
    minmagnification: 'minMagnification',
    pagescroll: 'pageScroll',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    reflectscrolledclipview: 'reflectScrolledClipView',
    release: 'release',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    rulersvisible: 'rulersVisible',
    rulerviewclass: 'rulerViewClass',
    scrollerinsets: 'scrollerInsets',
    scrollerknobstyle: 'scrollerKnobStyle',
    scrollerstyle: 'scrollerStyle',
    scrollsdynamically: 'scrollsDynamically',
    scrollwheel: 'scrollWheel',
    self: 'self',
    setmagnificationcenteredatpoint: 'setMagnificationCenteredAtPoint',
    superclass: 'superclass',
    tile: 'tile',
    usespredominantaxisscrolling: 'usesPredominantAxisScrolling',
    verticallinescroll: 'verticalLineScroll',
    verticalpagescroll: 'verticalPageScroll',
    verticalrulerview: 'verticalRulerView',
    verticalscrollelasticity: 'verticalScrollElasticity',
    verticalscroller: 'verticalScroller',
    zone: 'zone',
  }

  // allowsMagnification: boolean;
  // autohidesScrollers: boolean;
  // automaticallyAdjustsContentInsets: boolean;
  // backgroundColor: NSColor;
  // borderType: interop.Enum<typeof NSBorderType>;
  // contentInsets: NSEdgeInsets;
  // readonly contentSize: CGSize;
  // contentView: NSClipView;
  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // documentCursor: NSCursor;
  // documentView: NSView;
  // readonly documentVisibleRect: CGRect;
  // drawsBackground: boolean;
  // findBarPosition: interop.Enum<typeof NSScrollViewFindBarPosition>;
  // findBarView: NSView;
  // readonly hash: number;
  // hasHorizontalRuler: boolean;
  // hasHorizontalScroller: boolean;
  // hasVerticalRuler: boolean;
  // hasVerticalScroller: boolean;
  // horizontalLineScroll: number;
  // horizontalPageScroll: number;
  // horizontalRulerView: NSRulerView;
  // horizontalScrollElasticity: interop.Enum<typeof NSScrollElasticity>;
  // horizontalScroller: NSScroller;
  // isFindBarVisible: boolean;
  // readonly isProxy: boolean;
  // lineScroll: number;
  // magnification: number;
  // maxMagnification: number;
  // minMagnification: number;
  // pageScroll: number;
  // rulersVisible: boolean;
  // rulerViewClass: interop.Object;
  // scrollerInsets: NSEdgeInsets;
  // scrollerKnobStyle: interop.Enum<typeof NSScrollerKnobStyle>;
  // scrollerStyle: interop.Enum<typeof NSScrollerStyle>;
  // scrollsDynamically: boolean;
  // readonly superclass: interop.Object;
  // usesPredominantAxisScrolling: boolean;
  // verticalLineScroll: number;
  // verticalPageScroll: number;
  // verticalRulerView: NSRulerView;
  // verticalScrollElasticity: interop.Enum<typeof NSScrollElasticity>;
  // verticalScroller: NSScroller;
  // readonly zone: interop.Pointer;
}

export class HTMLNSATSTypesetterElement extends HTMLNSTypesetterElement {
  readonly nativeObject = NSATSTypesetter.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    attributedstring: 'attributedString',
    bidiprocessingenabled: 'bidiProcessingEnabled',
    boundingboxforcontrolglyphatindexfortextcontainerproposedlinefragmentglyphpositioncharacterindex: 'boundingBoxForControlGlyphAtIndexForTextContainerProposedLineFragmentGlyphPositionCharacterIndex',
    currenttextcontainer: 'currentTextContainer',
    getglyphsinrangeglyphscharacterindexesglyphinscriptionselasticbits: 'getGlyphsInRangeGlyphsCharacterIndexesGlyphInscriptionsElasticBits',
    getlinefragmentrectusedrectforparagraphseparatorglyphrangeatproposedorigin: 'getLineFragmentRectUsedRectForParagraphSeparatorGlyphRangeAtProposedOrigin',
    hyphenationfactor: 'hyphenationFactor',
    hyphenationfactorforglyphatindex: 'hyphenationFactorForGlyphAtIndex',
    hyphencharacterforglyphatindex: 'hyphenCharacterForGlyphAtIndex',
    layoutmanager: 'layoutManager',
    layoutparagraphatpoint: 'layoutParagraphAtPoint',
    linefragmentpadding: 'lineFragmentPadding',
    linefragmentrectforproposedrectremainingrect: 'lineFragmentRectForProposedRectRemainingRect',
    linespacingafterglyphatindexwithproposedlinefragmentrect: 'lineSpacingAfterGlyphAtIndexWithProposedLineFragmentRect',
    paragraphglyphrange: 'paragraphGlyphRange',
    paragraphseparatorglyphrange: 'paragraphSeparatorGlyphRange',
    paragraphspacingafterglyphatindexwithproposedlinefragmentrect: 'paragraphSpacingAfterGlyphAtIndexWithProposedLineFragmentRect',
    paragraphspacingbeforeglyphatindexwithproposedlinefragmentrect: 'paragraphSpacingBeforeGlyphAtIndexWithProposedLineFragmentRect',
    sethardinvalidationforglyphrange: 'setHardInvalidationForGlyphRange',
    setparagraphglyphrangeseparatorglyphrange: 'setParagraphGlyphRangeSeparatorGlyphRange',
    sharedtypesetter: 'sharedTypesetter',
    shouldbreaklinebyhyphenatingbeforecharacteratindex: 'shouldBreakLineByHyphenatingBeforeCharacterAtIndex',
    shouldbreaklinebywordbeforecharacteratindex: 'shouldBreakLineByWordBeforeCharacterAtIndex',
    substitutefontforfont: 'substituteFontForFont',
    texttabforglyphlocationwritingdirectionmaxlocation: 'textTabForGlyphLocationWritingDirectionMaxLocation',
    typesetterbehavior: 'typesetterBehavior',
    usesfontleading: 'usesFontLeading',
    willsetlinefragmentrectforglyphrangeusedrectbaselineoffset: 'willSetLineFragmentRectForGlyphRangeUsedRectBaselineOffset',
  }

  // attributedString: NSAttributedString;
  // bidiProcessingEnabled: boolean;
  // readonly currentTextContainer: NSTextContainer;
  // hyphenationFactor: number;
  // readonly layoutManager: NSLayoutManager;
  // lineFragmentPadding: number;
  // readonly paragraphGlyphRange: _NSRange;
  // readonly paragraphSeparatorGlyphRange: _NSRange;
  // sharedTypesetter: NSATSTypesetter;
  // typesetterBehavior: interop.Enum<typeof NSTypesetterBehavior>;
  // usesFontLeading: boolean;
}

export class HTMLNSTableCellViewElement extends HTMLNSViewElement {
  readonly nativeObject = NSTableCellView.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    backgroundstyle: 'backgroundStyle',
    draggingimagecomponents: 'draggingImageComponents',
    imageview: 'imageView',
    objectvalue: 'objectValue',
    rowsizestyle: 'rowSizeStyle',
    textfield: 'textField',
  }

  // backgroundStyle: interop.Enum<typeof NSBackgroundStyle>;
  // readonly draggingImageComponents: NSArray;
  // imageView: NSImageView;
  // objectValue: interop.Object;
  // rowSizeStyle: interop.Enum<typeof NSTableViewRowSizeStyle>;
  // textField: NSTextField;
}

export class HTMLNSVisualEffectViewElement extends HTMLNSViewElement {
  readonly nativeObject = NSVisualEffectView.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    blendingmode: 'blendingMode',
    interiorbackgroundstyle: 'interiorBackgroundStyle',
    isemphasized: 'isEmphasized',
    maskimage: 'maskImage',
    material: 'material',
    state: 'state',
    viewdidmovetowindow: 'viewDidMoveToWindow',
    viewwillmovetowindow: 'viewWillMoveToWindow',
  }

  // blendingMode: interop.Enum<typeof NSVisualEffectBlendingMode>;
  // readonly interiorBackgroundStyle: interop.Enum<typeof NSBackgroundStyle>;
  // isEmphasized: boolean;
  // maskImage: NSImage;
  // material: interop.Enum<typeof NSVisualEffectMaterial>;
  // state: interop.Enum<typeof NSVisualEffectState>;
}

export class HTMLNSTableRowViewElement extends HTMLNSViewElement {
  readonly nativeObject = NSTableRowView.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    accessibilitydisclosurelevel: 'accessibilityDisclosureLevel',
    accessibilityframe: 'accessibilityFrame',
    accessibilityidentifier: 'accessibilityIdentifier',
    accessibilityindex: 'accessibilityIndex',
    accessibilityparent: 'accessibilityParent',
    autorelease: 'autorelease',
    backgroundcolor: 'backgroundColor',
    class: 'class',
    conformstoprotocol: 'conformsToProtocol',
    debugdescription: 'debugDescription',
    description: 'description',
    draggingdestinationfeedbackstyle: 'draggingDestinationFeedbackStyle',
    drawbackgroundinrect: 'drawBackgroundInRect',
    drawdraggingdestinationfeedbackinrect: 'drawDraggingDestinationFeedbackInRect',
    drawselectioninrect: 'drawSelectionInRect',
    drawseparatorinrect: 'drawSeparatorInRect',
    hash: 'hash',
    indentationfordropoperation: 'indentationForDropOperation',
    interiorbackgroundstyle: 'interiorBackgroundStyle',
    isaccessibilityfocused: 'isAccessibilityFocused',
    isemphasized: 'isEmphasized',
    isequal: 'isEqual',
    isfloating: 'isFloating',
    isgrouprowstyle: 'isGroupRowStyle',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isnextrowselected: 'isNextRowSelected',
    ispreviousrowselected: 'isPreviousRowSelected',
    isproxy: 'isProxy',
    isselected: 'isSelected',
    istargetfordropoperation: 'isTargetForDropOperation',
    numberofcolumns: 'numberOfColumns',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    release: 'release',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    selectionhighlightstyle: 'selectionHighlightStyle',
    self: 'self',
    superclass: 'superclass',
    viewatcolumn: 'viewAtColumn',
    zone: 'zone',
  }

  // accessibilityDisclosureLevel: number;
  // accessibilityFrame: CGRect;
  // accessibilityIndex: number;
  // accessibilityParent: interop.Object;
  // backgroundColor: NSColor;
  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // draggingDestinationFeedbackStyle: interop.Enum<typeof NSTableViewDraggingDestinationFeedbackStyle>;
  // readonly hash: number;
  // indentationForDropOperation: number;
  // readonly interiorBackgroundStyle: interop.Enum<typeof NSBackgroundStyle>;
  // isAccessibilityFocused: boolean;
  // isEmphasized: boolean;
  // isFloating: boolean;
  // isGroupRowStyle: boolean;
  // isNextRowSelected: boolean;
  // isPreviousRowSelected: boolean;
  // readonly isProxy: boolean;
  // isSelected: boolean;
  // isTargetForDropOperation: boolean;
  // readonly numberOfColumns: number;
  // selectionHighlightStyle: interop.Enum<typeof NSTableViewSelectionHighlightStyle>;
  // readonly superclass: interop.Object;
  // readonly zone: interop.Pointer;
}

export class HTMLNSCollectionViewGridLayoutElement extends HTMLNSCollectionViewLayoutElement {
  readonly nativeObject = NSCollectionViewGridLayout.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    backgroundcolors: 'backgroundColors',
    margins: 'margins',
    maximumitemsize: 'maximumItemSize',
    maximumnumberofcolumns: 'maximumNumberOfColumns',
    maximumnumberofrows: 'maximumNumberOfRows',
    minimuminteritemspacing: 'minimumInteritemSpacing',
    minimumitemsize: 'minimumItemSize',
    minimumlinespacing: 'minimumLineSpacing',
  }

  // margins: NSEdgeInsets;
  // maximumItemSize: CGSize;
  // maximumNumberOfColumns: number;
  // maximumNumberOfRows: number;
  // minimumInteritemSpacing: number;
  // minimumItemSize: CGSize;
  // minimumLineSpacing: number;
}

export class HTMLNSCollectionLayoutSpacingElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCollectionLayoutSpacing.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    copywithzone: 'copyWithZone',
    fixedspacing: 'fixedSpacing',
    flexiblespacing: 'flexibleSpacing',
    isfixedspacing: 'isFixedSpacing',
    isflexiblespacing: 'isFlexibleSpacing',
    spacing: 'spacing',
  }

  // readonly isFixedSpacing: boolean;
  // readonly isFlexibleSpacing: boolean;
  // readonly spacing: number;
}

export class HTMLNSCachedImageRepElement extends HTMLNSImageRepElement {
  readonly nativeObject = NSCachedImageRep.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    initwithsizedepthseparatealpha: 'initWithSizeDepthSeparateAlpha',
    initwithwindowrect: 'initWithWindowRect',
    rect: 'rect',
    window: 'window',
  }

}

export class HTMLNSDockTileElement extends HTMLNSObjectElement {
  readonly nativeObject = NSDockTile.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    badgelabel: 'badgeLabel',
    contentview: 'contentView',
    display: 'display',
    owner: 'owner',
    showsapplicationbadge: 'showsApplicationBadge',
    size: 'size',
  }

  // contentView: NSView;
  // readonly owner: interop.Object | null;
  // showsApplicationBadge: boolean;
  // readonly size: CGSize;
}

export class HTMLNSAlertElement extends HTMLNSObjectElement {
  readonly nativeObject = NSAlert.new();
  get delegate(): NSAlertDelegateImpl {
    return (this.nativeObject.delegate ??= NSAlertDelegateImpl.new()) as NSAlertDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    accessoryview: 'accessoryView',
    addbuttonwithtitle: 'addButtonWithTitle',
    alertstyle: 'alertStyle',
    alertwitherror: 'alertWithError',
    alertwithmessagetextdefaultbuttonalternatebuttonotherbuttoninformativetextwithformat: 'alertWithMessageTextDefaultButtonAlternateButtonOtherButtonInformativeTextWithFormat',
    beginsheetmodalforwindowcompletionhandler: 'beginSheetModalForWindowCompletionHandler',
    beginsheetmodalforwindowmodaldelegatedidendselectorcontextinfo: 'beginSheetModalForWindowModalDelegateDidEndSelectorContextInfo',
    buttons: 'buttons',
    delegate: 'delegate',
    helpanchor: 'helpAnchor',
    icon: 'icon',
    informativetext: 'informativeText',
    layout: 'layout',
    messagetext: 'messageText',
    runmodal: 'runModal',
    showshelp: 'showsHelp',
    showssuppressionbutton: 'showsSuppressionButton',
    suppressionbutton: 'suppressionButton',
    window: 'window',
  }

  // accessoryView: NSView;
  // alertStyle: interop.Enum<typeof NSAlertStyle>;
  // readonly buttons: NSArray;
  // icon: NSImage;
  // showsHelp: boolean;
  // showsSuppressionButton: boolean;
  // readonly suppressionButton: NSButton;
  // readonly window: NSWindow;

  set alertshowhelp(value: (alert: NSAlert) => boolean) {
    this.delegate.alertShowHelp = value;
  }
}

export class HTMLNSTextLineFragmentElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextLineFragment.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    attributedstring: 'attributedString',
    characterindexforpoint: 'characterIndexForPoint',
    characterrange: 'characterRange',
    drawatpointincontext: 'drawAtPointInContext',
    encodewithcoder: 'encodeWithCoder',
    fractionofdistancethroughglyphforpoint: 'fractionOfDistanceThroughGlyphForPoint',
    glyphorigin: 'glyphOrigin',
    initwithattributedstringrange: 'initWithAttributedStringRange',
    initwithcoder: 'initWithCoder',
    initwithstringattributesrange: 'initWithStringAttributesRange',
    locationforcharacteratindex: 'locationForCharacterAtIndex',
    supportssecurecoding: 'supportsSecureCoding',
    typographicbounds: 'typographicBounds',
  }

  // readonly attributedString: NSAttributedString;
  // readonly characterRange: _NSRange;
  // readonly glyphOrigin: CGPoint;
  // supportsSecureCoding: boolean;
  // readonly typographicBounds: CGRect;
}

export class HTMLNSTextSelectionElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextSelection.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    affinity: 'affinity',
    anchorpositionoffset: 'anchorPositionOffset',
    encodewithcoder: 'encodeWithCoder',
    granularity: 'granularity',
    initwithcoder: 'initWithCoder',
    initwithlocationaffinity: 'initWithLocationAffinity',
    initwithrangeaffinitygranularity: 'initWithRangeAffinityGranularity',
    initwithrangesaffinitygranularity: 'initWithRangesAffinityGranularity',
    islogical: 'isLogical',
    istransient: 'isTransient',
    secondaryselectionlocation: 'secondarySelectionLocation',
    supportssecurecoding: 'supportsSecureCoding',
    textranges: 'textRanges',
    textselectionwithtextranges: 'textSelectionWithTextRanges',
    typingattributes: 'typingAttributes',
  }

  // readonly affinity: interop.Enum<typeof NSTextSelectionAffinity>;
  // anchorPositionOffset: number;
  // readonly granularity: interop.Enum<typeof NSTextSelectionGranularity>;
  // isLogical: boolean;
  // readonly isTransient: boolean;
  // secondarySelectionLocation: NSTextLocation;
  // supportsSecureCoding: boolean;
  // readonly textRanges: NSArray;
}

export class HTMLNSAlignmentFeedbackFilterElement extends HTMLNSObjectElement {
  readonly nativeObject = NSAlignmentFeedbackFilter.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    alignmentfeedbacktokenforhorizontalmovementinviewpreviousxalignedxdefaultx: 'alignmentFeedbackTokenForHorizontalMovementInViewPreviousXAlignedXDefaultX',
    alignmentfeedbacktokenformovementinviewpreviouspointalignedpointdefaultpoint: 'alignmentFeedbackTokenForMovementInViewPreviousPointAlignedPointDefaultPoint',
    alignmentfeedbacktokenforverticalmovementinviewpreviousyalignedydefaulty: 'alignmentFeedbackTokenForVerticalMovementInViewPreviousYAlignedYDefaultY',
    inputeventmask: 'inputEventMask',
    performfeedbackperformancetime: 'performFeedbackPerformanceTime',
    updatewithevent: 'updateWithEvent',
    updatewithpanrecognizer: 'updateWithPanRecognizer',
  }

  // inputEventMask: interop.Enum<typeof NSEventMask>;
}

export class HTMLNSParagraphStyleElement extends HTMLNSObjectElement {
  readonly nativeObject = NSParagraphStyle.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    alignment: 'alignment',
    allowsdefaulttighteningfortruncation: 'allowsDefaultTighteningForTruncation',
    basewritingdirection: 'baseWritingDirection',
    copywithzone: 'copyWithZone',
    defaultparagraphstyle: 'defaultParagraphStyle',
    defaulttabinterval: 'defaultTabInterval',
    defaultwritingdirectionforlanguage: 'defaultWritingDirectionForLanguage',
    encodewithcoder: 'encodeWithCoder',
    firstlineheadindent: 'firstLineHeadIndent',
    headerlevel: 'headerLevel',
    headindent: 'headIndent',
    hyphenationfactor: 'hyphenationFactor',
    initwithcoder: 'initWithCoder',
    linebreakmode: 'lineBreakMode',
    linebreakstrategy: 'lineBreakStrategy',
    lineheightmultiple: 'lineHeightMultiple',
    linespacing: 'lineSpacing',
    maximumlineheight: 'maximumLineHeight',
    minimumlineheight: 'minimumLineHeight',
    mutablecopywithzone: 'mutableCopyWithZone',
    paragraphspacing: 'paragraphSpacing',
    paragraphspacingbefore: 'paragraphSpacingBefore',
    supportssecurecoding: 'supportsSecureCoding',
    tabstops: 'tabStops',
    tailindent: 'tailIndent',
    textblocks: 'textBlocks',
    textlists: 'textLists',
    tighteningfactorfortruncation: 'tighteningFactorForTruncation',
    usesdefaulthyphenation: 'usesDefaultHyphenation',
  }

  // readonly alignment: interop.Enum<typeof NSTextAlignment>;
  // readonly allowsDefaultTighteningForTruncation: boolean;
  // readonly baseWritingDirection: interop.Enum<typeof NSWritingDirection>;
  // defaultParagraphStyle: NSParagraphStyle;
  // readonly defaultTabInterval: number;
  // readonly firstLineHeadIndent: number;
  // readonly headerLevel: number;
  // readonly headIndent: number;
  // readonly hyphenationFactor: number;
  // readonly lineBreakMode: interop.Enum<typeof NSLineBreakMode>;
  // readonly lineBreakStrategy: interop.Enum<typeof NSLineBreakStrategy>;
  // readonly lineHeightMultiple: number;
  // readonly lineSpacing: number;
  // readonly maximumLineHeight: number;
  // readonly minimumLineHeight: number;
  // readonly paragraphSpacing: number;
  // readonly paragraphSpacingBefore: number;
  // supportsSecureCoding: boolean;
  // readonly tabStops: NSArray;
  // readonly tailIndent: number;
  // readonly textBlocks: NSArray;
  // readonly textLists: NSArray;
  // readonly tighteningFactorForTruncation: number;
  // readonly usesDefaultHyphenation: boolean;
}

export class HTMLNSDictionaryControllerKeyValuePairElement extends HTMLNSObjectElement {
  readonly nativeObject = NSDictionaryControllerKeyValuePair.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    isexplicitlyincluded: 'isExplicitlyIncluded',
    key: 'key',
    localizedkey: 'localizedKey',
    value: 'value',
  }

  // readonly isExplicitlyIncluded: boolean;
  // value: interop.Object;
}

export class HTMLNSOpenGLViewElement extends HTMLNSViewElement {
  readonly nativeObject = NSOpenGLView.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    clearglcontext: 'clearGLContext',
    defaultpixelformat: 'defaultPixelFormat',
    initwithframepixelformat: 'initWithFramePixelFormat',
    openglcontext: 'openGLContext',
    pixelformat: 'pixelFormat',
    prepareopengl: 'prepareOpenGL',
    reshape: 'reshape',
    update: 'update',
    wantsbestresolutionopenglsurface: 'wantsBestResolutionOpenGLSurface',
    wantsextendeddynamicrangeopenglsurface: 'wantsExtendedDynamicRangeOpenGLSurface',
  }

  // openGLContext: NSOpenGLContext;
  // pixelFormat: NSOpenGLPixelFormat;
  // wantsBestResolutionOpenGLSurface: boolean;
  // wantsExtendedDynamicRangeOpenGLSurface: boolean;
}

export class HTMLNSMovieElement extends HTMLNSObjectElement {
  readonly nativeObject = NSMovie.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    encodewithcoder: 'encodeWithCoder',
    init: 'init',
    initwithcoder: 'initWithCoder',
    initwithmovie: 'initWithMovie',
    qtmovie: 'QTMovie',
  }

}

export class HTMLNSDataAssetElement extends HTMLNSObjectElement {
  readonly nativeObject = NSDataAsset.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    copywithzone: 'copyWithZone',
    data: 'data',
    initwithname: 'initWithName',
    initwithnamebundle: 'initWithNameBundle',
    name: 'name',
    typeidentifier: 'typeIdentifier',
  }

  // readonly data: NSData;
  // readonly name: NSString;
  // readonly typeIdentifier: NSString;
}

export class HTMLNSTableHeaderViewElement extends HTMLNSViewElement {
  readonly nativeObject = NSTableHeaderView.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    autorelease: 'autorelease',
    class: 'class',
    columnatpoint: 'columnAtPoint',
    conformstoprotocol: 'conformsToProtocol',
    debugdescription: 'debugDescription',
    description: 'description',
    draggedcolumn: 'draggedColumn',
    draggeddistance: 'draggedDistance',
    hash: 'hash',
    headerrectofcolumn: 'headerRectOfColumn',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    release: 'release',
    resizedcolumn: 'resizedColumn',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    self: 'self',
    superclass: 'superclass',
    tableview: 'tableView',
    viewstringfortooltippointuserdata: 'viewStringForToolTipPointUserData',
    zone: 'zone',
  }

  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // readonly draggedColumn: number;
  // readonly draggedDistance: number;
  // readonly hash: number;
  // readonly isProxy: boolean;
  // readonly resizedColumn: number;
  // readonly superclass: interop.Object;
  // tableView: NSTableView;
  // readonly zone: interop.Pointer;
}

export class HTMLNSTextInsertionIndicatorElement extends HTMLNSViewElement {
  readonly nativeObject = NSTextInsertionIndicator.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    automaticmodeoptions: 'automaticModeOptions',
    color: 'color',
    displaymode: 'displayMode',
    effectsviewinserter: 'effectsViewInserter',
  }

  // automaticModeOptions: interop.Enum<typeof NSTextInsertionIndicatorAutomaticModeOptions>;
  // color: NSColor;
  // displayMode: interop.Enum<typeof NSTextInsertionIndicatorDisplayMode>;
  // effectsViewInserter: (p1: NSView) => void;
}

export class HTMLNSSegmentedCellElement extends HTMLNSActionCellElement {
  readonly nativeObject = NSSegmentedCell.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    drawsegmentinframewithview: 'drawSegmentInFrameWithView',
    imageforsegment: 'imageForSegment',
    imagescalingforsegment: 'imageScalingForSegment',
    interiorbackgroundstyleforsegment: 'interiorBackgroundStyleForSegment',
    isenabledforsegment: 'isEnabledForSegment',
    isselectedforsegment: 'isSelectedForSegment',
    labelforsegment: 'labelForSegment',
    makenextsegmentkey: 'makeNextSegmentKey',
    makeprevioussegmentkey: 'makePreviousSegmentKey',
    menuforsegment: 'menuForSegment',
    segmentcount: 'segmentCount',
    segmentstyle: 'segmentStyle',
    selectedsegment: 'selectedSegment',
    selectsegmentwithtag: 'selectSegmentWithTag',
    setenabledforsegment: 'setEnabledForSegment',
    setimageforsegment: 'setImageForSegment',
    setimagescalingforsegment: 'setImageScalingForSegment',
    setlabelforsegment: 'setLabelForSegment',
    setmenuforsegment: 'setMenuForSegment',
    setselectedforsegment: 'setSelectedForSegment',
    settagforsegment: 'setTagForSegment',
    settooltipforsegment: 'setToolTipForSegment',
    setwidthforsegment: 'setWidthForSegment',
    tagforsegment: 'tagForSegment',
    tooltipforsegment: 'toolTipForSegment',
    trackingmode: 'trackingMode',
    widthforsegment: 'widthForSegment',
  }

  // segmentCount: number;
  // segmentStyle: interop.Enum<typeof NSSegmentStyle>;
  // selectedSegment: number;
  // trackingMode: interop.Enum<typeof NSSegmentSwitchTracking>;
}

export class HTMLNSSliderAccessoryBehaviorElement extends HTMLNSObjectElement {
  readonly nativeObject = NSSliderAccessoryBehavior.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    automaticbehavior: 'automaticBehavior',
    behaviorwithhandler: 'behaviorWithHandler',
    behaviorwithtargetaction: 'behaviorWithTargetAction',
    copywithzone: 'copyWithZone',
    encodewithcoder: 'encodeWithCoder',
    handleaction: 'handleAction',
    initwithcoder: 'initWithCoder',
    valueresetbehavior: 'valueResetBehavior',
    valuestepbehavior: 'valueStepBehavior',
  }

  // automaticBehavior: NSSliderAccessoryBehavior;
  // valueResetBehavior: NSSliderAccessoryBehavior;
  // valueStepBehavior: NSSliderAccessoryBehavior;
}

export class HTMLNSInputServerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSInputServer.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    activeconversationchangedtonewconversation: 'activeConversationChangedToNewConversation',
    activeconversationwillchangefromoldconversation: 'activeConversationWillChangeFromOldConversation',
    canbedisabled: 'canBeDisabled',
    docommandbyselectorclient: 'doCommandBySelectorClient',
    initwithdelegatename: 'initWithDelegateName',
    inputclientbecomeactive: 'inputClientBecomeActive',
    inputclientdisabled: 'inputClientDisabled',
    inputclientenabled: 'inputClientEnabled',
    inputclientresignactive: 'inputClientResignActive',
    inserttextclient: 'insertTextClient',
    markedtextabandoned: 'markedTextAbandoned',
    markedtextselectionchangedclient: 'markedTextSelectionChangedClient',
    mousedownoncharacterindexatcoordinatewithmodifierclient: 'mouseDownOnCharacterIndexAtCoordinateWithModifierClient',
    mousedraggedoncharacterindexatcoordinatewithmodifierclient: 'mouseDraggedOnCharacterIndexAtCoordinateWithModifierClient',
    mouseuponcharacterindexatcoordinatewithmodifierclient: 'mouseUpOnCharacterIndexAtCoordinateWithModifierClient',
    terminate: 'terminate',
    wantstodelaytextchangenotifications: 'wantsToDelayTextChangeNotifications',
    wantstohandlemouseevents: 'wantsToHandleMouseEvents',
    wantstointerpretallkeystrokes: 'wantsToInterpretAllKeystrokes',
  }

}

export class HTMLNSFormCellElement extends HTMLNSActionCellElement {
  // @ts-ignore
  readonly nativeObject = NSFormCell.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    attributedtitle: 'attributedTitle',
    inittextcell: 'initTextCell',
    initwithcoder: 'initWithCoder',
    isopaque: 'isOpaque',
    placeholderattributedstring: 'placeholderAttributedString',
    placeholderstring: 'placeholderString',
    preferredtextfieldwidth: 'preferredTextFieldWidth',
    settitlewithmnemonic: 'setTitleWithMnemonic',
    title: 'title',
    titlealignment: 'titleAlignment',
    titlebasewritingdirection: 'titleBaseWritingDirection',
    titlefont: 'titleFont',
    titlewidth: 'titleWidth',
  }

  // attributedTitle: NSAttributedString;
  // readonly isOpaque: boolean;
  // placeholderAttributedString: NSAttributedString;
  // preferredTextFieldWidth: number;
  // titleAlignment: interop.Enum<typeof NSTextAlignment>;
  // titleBaseWritingDirection: interop.Enum<typeof NSWritingDirection>;
  // titleFont: NSFont;
  // titleWidth: number;
}

export class HTMLNSFontElement extends HTMLNSObjectElement {
  readonly nativeObject = NSFont.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    advancementforcgglyph: 'advancementForCGGlyph',
    advancementforglyph: 'advancementForGlyph',
    ascender: 'ascender',
    boldsystemfontofsize: 'boldSystemFontOfSize',
    boundingrectforcgglyph: 'boundingRectForCGGlyph',
    boundingrectforfont: 'boundingRectForFont',
    boundingrectforglyph: 'boundingRectForGlyph',
    capheight: 'capHeight',
    controlcontentfontofsize: 'controlContentFontOfSize',
    copywithzone: 'copyWithZone',
    coveredcharacterset: 'coveredCharacterSet',
    descender: 'descender',
    displayname: 'displayName',
    encodewithcoder: 'encodeWithCoder',
    familyname: 'familyName',
    fontdescriptor: 'fontDescriptor',
    fontname: 'fontName',
    fontwithdescriptorsize: 'fontWithDescriptorSize',
    fontwithdescriptortexttransform: 'fontWithDescriptorTextTransform',
    fontwithnamematrix: 'fontWithNameMatrix',
    fontwithnamesize: 'fontWithNameSize',
    fontwithsize: 'fontWithSize',
    getadvancementsforcgglyphscount: 'getAdvancementsForCGGlyphsCount',
    getadvancementsforglyphscount: 'getAdvancementsForGlyphsCount',
    getadvancementsforpackedglyphslength: 'getAdvancementsForPackedGlyphsLength',
    getboundingrectsforcgglyphscount: 'getBoundingRectsForCGGlyphsCount',
    getboundingrectsforglyphscount: 'getBoundingRectsForGlyphsCount',
    glyphwithname: 'glyphWithName',
    initwithcoder: 'initWithCoder',
    isfixedpitch: 'isFixedPitch',
    isvertical: 'isVertical',
    italicangle: 'italicAngle',
    labelfontofsize: 'labelFontOfSize',
    labelfontsize: 'labelFontSize',
    leading: 'leading',
    matrix: 'matrix',
    maximumadvancement: 'maximumAdvancement',
    menubarfontofsize: 'menuBarFontOfSize',
    menufontofsize: 'menuFontOfSize',
    messagefontofsize: 'messageFontOfSize',
    monospaceddigitsystemfontofsizeweight: 'monospacedDigitSystemFontOfSizeWeight',
    monospacedsystemfontofsizeweight: 'monospacedSystemFontOfSizeWeight',
    mostcompatiblestringencoding: 'mostCompatibleStringEncoding',
    numberofglyphs: 'numberOfGlyphs',
    palettefontofsize: 'paletteFontOfSize',
    pointsize: 'pointSize',
    preferredfontfortextstyleoptions: 'preferredFontForTextStyleOptions',
    printerfont: 'printerFont',
    renderingmode: 'renderingMode',
    screenfont: 'screenFont',
    screenfontwithrenderingmode: 'screenFontWithRenderingMode',
    set: 'set',
    setincontext: 'setInContext',
    setuserfixedpitchfont: 'setUserFixedPitchFont',
    setuserfont: 'setUserFont',
    smallsystemfontsize: 'smallSystemFontSize',
    supportssecurecoding: 'supportsSecureCoding',
    systemfontofsize: 'systemFontOfSize',
    systemfontofsizeweight: 'systemFontOfSizeWeight',
    systemfontofsizeweightwidth: 'systemFontOfSizeWeightWidth',
    systemfontsize: 'systemFontSize',
    systemfontsizeforcontrolsize: 'systemFontSizeForControlSize',
    texttransform: 'textTransform',
    titlebarfontofsize: 'titleBarFontOfSize',
    tooltipsfontofsize: 'toolTipsFontOfSize',
    underlineposition: 'underlinePosition',
    underlinethickness: 'underlineThickness',
    userfixedpitchfontofsize: 'userFixedPitchFontOfSize',
    userfontofsize: 'userFontOfSize',
    verticalfont: 'verticalFont',
    xheight: 'xHeight',
  }

  // readonly ascender: number;
  // readonly boundingRectForFont: CGRect;
  // readonly capHeight: number;
  // readonly coveredCharacterSet: NSCharacterSet;
  // readonly descender: number;
  // readonly displayName: NSString;
  // readonly familyName: NSString;
  // readonly fontDescriptor: NSFontDescriptor;
  // readonly fontName: NSString;
  // readonly isFixedPitch: boolean;
  // readonly isVertical: boolean;
  // readonly italicAngle: number;
  // labelFontSize: number;
  // readonly leading: number;
  // readonly matrix: interop.Pointer;
  // readonly maximumAdvancement: CGSize;
  // readonly mostCompatibleStringEncoding: number;
  // readonly numberOfGlyphs: number;
  // readonly pointSize: number;
  // readonly printerFont: NSFont;
  // readonly renderingMode: interop.Enum<typeof NSFontRenderingMode>;
  // readonly screenFont: NSFont;
  // smallSystemFontSize: number;
  // supportsSecureCoding: boolean;
  // systemFontSize: number;
  // readonly textTransform: NSAffineTransform;
  // readonly underlinePosition: number;
  // readonly underlineThickness: number;
  // readonly verticalFont: NSFont;
  // readonly xHeight: number;
}

export class HTMLNSLayoutAnchorElement extends HTMLNSObjectElement {
  readonly nativeObject = NSLayoutAnchor.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    constraintequaltoanchor: 'constraintEqualToAnchor',
    constraintequaltoanchorconstant: 'constraintEqualToAnchorConstant',
    constraintgreaterthanorequaltoanchor: 'constraintGreaterThanOrEqualToAnchor',
    constraintgreaterthanorequaltoanchorconstant: 'constraintGreaterThanOrEqualToAnchorConstant',
    constraintlessthanorequaltoanchor: 'constraintLessThanOrEqualToAnchor',
    constraintlessthanorequaltoanchorconstant: 'constraintLessThanOrEqualToAnchorConstant',
    constraintsaffectinglayout: 'constraintsAffectingLayout',
    copywithzone: 'copyWithZone',
    encodewithcoder: 'encodeWithCoder',
    hasambiguouslayout: 'hasAmbiguousLayout',
    initwithcoder: 'initWithCoder',
    item: 'item',
    name: 'name',
  }

  // readonly constraintsAffectingLayout: NSArray;
  // readonly hasAmbiguousLayout: boolean;
  // readonly item: interop.Object;
  // readonly name: NSString;
}

export class HTMLNSCollectionLayoutDimensionElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCollectionLayoutDimension.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    absolutedimension: 'absoluteDimension',
    copywithzone: 'copyWithZone',
    dimension: 'dimension',
    estimateddimension: 'estimatedDimension',
    fractionalheightdimension: 'fractionalHeightDimension',
    fractionalwidthdimension: 'fractionalWidthDimension',
    isabsolute: 'isAbsolute',
    isestimated: 'isEstimated',
    isfractionalheight: 'isFractionalHeight',
    isfractionalwidth: 'isFractionalWidth',
  }

  // readonly dimension: number;
  // readonly isAbsolute: boolean;
  // readonly isEstimated: boolean;
  // readonly isFractionalHeight: boolean;
  // readonly isFractionalWidth: boolean;
}

export class HTMLNSCollectionViewLayoutAttributesElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCollectionViewLayoutAttributes.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    alpha: 'alpha',
    copywithzone: 'copyWithZone',
    frame: 'frame',
    indexpath: 'indexPath',
    ishidden: 'isHidden',
    layoutattributesfordecorationviewofkindwithindexpath: 'layoutAttributesForDecorationViewOfKindWithIndexPath',
    layoutattributesforinteritemgapbeforeindexpath: 'layoutAttributesForInterItemGapBeforeIndexPath',
    layoutattributesforitemwithindexpath: 'layoutAttributesForItemWithIndexPath',
    layoutattributesforsupplementaryviewofkindwithindexpath: 'layoutAttributesForSupplementaryViewOfKindWithIndexPath',
    representedelementcategory: 'representedElementCategory',
    representedelementkind: 'representedElementKind',
    size: 'size',
    zindex: 'zIndex',
  }

  // alpha: number;
  // frame: CGRect;
  // indexPath: NSIndexPath;
  // isHidden: boolean;
  // readonly representedElementCategory: interop.Enum<typeof NSCollectionElementCategory>;
  // readonly representedElementKind: NSString;
  // size: CGSize;
  // zIndex: number;
}

export class HTMLNSUserInterfaceCompressionOptionsElement extends HTMLNSObjectElement {
  readonly nativeObject = NSUserInterfaceCompressionOptions.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    breakequalwidthsoption: 'breakEqualWidthsOption',
    containsoptions: 'containsOptions',
    copywithzone: 'copyWithZone',
    encodewithcoder: 'encodeWithCoder',
    hideimagesoption: 'hideImagesOption',
    hidetextoption: 'hideTextOption',
    init: 'init',
    initwithcoder: 'initWithCoder',
    initwithcompressionoptions: 'initWithCompressionOptions',
    initwithidentifier: 'initWithIdentifier',
    intersectsoptions: 'intersectsOptions',
    isempty: 'isEmpty',
    optionsbyaddingoptions: 'optionsByAddingOptions',
    optionsbyremovingoptions: 'optionsByRemovingOptions',
    reducemetricsoption: 'reduceMetricsOption',
    standardoptions: 'standardOptions',
  }

  // breakEqualWidthsOption: NSUserInterfaceCompressionOptions;
  // hideImagesOption: NSUserInterfaceCompressionOptions;
  // hideTextOption: NSUserInterfaceCompressionOptions;
  // readonly isEmpty: boolean;
  // reduceMetricsOption: NSUserInterfaceCompressionOptions;
  // standardOptions: NSUserInterfaceCompressionOptions;
}

export class HTMLNSTextAttachmentCellElement extends HTMLNSCellElement {
  // @ts-ignore
  readonly nativeObject = NSTextAttachmentCell.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    attachment: 'attachment',
    autorelease: 'autorelease',
    cellbaselineoffset: 'cellBaselineOffset',
    cellframefortextcontainerproposedlinefragmentglyphpositioncharacterindex: 'cellFrameForTextContainerProposedLineFragmentGlyphPositionCharacterIndex',
    cellsize: 'cellSize',
    class: 'class',
    conformstoprotocol: 'conformsToProtocol',
    debugdescription: 'debugDescription',
    description: 'description',
    drawwithframeinview: 'drawWithFrameInView',
    drawwithframeinviewcharacterindex: 'drawWithFrameInViewCharacterIndex',
    drawwithframeinviewcharacterindexlayoutmanager: 'drawWithFrameInViewCharacterIndexLayoutManager',
    hash: 'hash',
    highlightwithframeinview: 'highlightWithFrameInView',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    release: 'release',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    self: 'self',
    superclass: 'superclass',
    trackmouseinrectofviewatcharacterindexuntilmouseup: 'trackMouseInRectOfViewAtCharacterIndexUntilMouseUp',
    trackmouseinrectofviewuntilmouseup: 'trackMouseInRectOfViewUntilMouseUp',
    wantstotrackmouse: 'wantsToTrackMouse',
    wantstotrackmouseforeventinrectofviewatcharacterindex: 'wantsToTrackMouseForEventInRectOfViewAtCharacterIndex',
    zone: 'zone',
  }

  // attachment: NSTextAttachment;
  // readonly cellSize: CGSize;
  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // readonly hash: number;
  // readonly isProxy: boolean;
  // readonly superclass: interop.Object;
  // readonly zone: interop.Pointer;
}

export class HTMLNSMenuItemElement extends HTMLNSObjectElement {
  readonly nativeObject = NSMenuItem.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    accessibilityactivationpoint: 'accessibilityActivationPoint',
    accessibilityallowedvalues: 'accessibilityAllowedValues',
    accessibilityapplicationfocuseduielement: 'accessibilityApplicationFocusedUIElement',
    accessibilityattributedstringforrange: 'accessibilityAttributedStringForRange',
    accessibilityattributeduserinputlabels: 'accessibilityAttributedUserInputLabels',
    accessibilitycancelbutton: 'accessibilityCancelButton',
    accessibilitycellforcolumnrow: 'accessibilityCellForColumnRow',
    accessibilitychildren: 'accessibilityChildren',
    accessibilitychildreninnavigationorder: 'accessibilityChildrenInNavigationOrder',
    accessibilityclearbutton: 'accessibilityClearButton',
    accessibilityclosebutton: 'accessibilityCloseButton',
    accessibilitycolumncount: 'accessibilityColumnCount',
    accessibilitycolumnheaderuielements: 'accessibilityColumnHeaderUIElements',
    accessibilitycolumnindexrange: 'accessibilityColumnIndexRange',
    accessibilitycolumns: 'accessibilityColumns',
    accessibilitycolumntitles: 'accessibilityColumnTitles',
    accessibilitycontents: 'accessibilityContents',
    accessibilitycriticalvalue: 'accessibilityCriticalValue',
    accessibilitycustomactions: 'accessibilityCustomActions',
    accessibilitycustomrotors: 'accessibilityCustomRotors',
    accessibilitydecrementbutton: 'accessibilityDecrementButton',
    accessibilitydefaultbutton: 'accessibilityDefaultButton',
    accessibilitydisclosedbyrow: 'accessibilityDisclosedByRow',
    accessibilitydisclosedrows: 'accessibilityDisclosedRows',
    accessibilitydisclosurelevel: 'accessibilityDisclosureLevel',
    accessibilitydocument: 'accessibilityDocument',
    accessibilityextrasmenubar: 'accessibilityExtrasMenuBar',
    accessibilityfilename: 'accessibilityFilename',
    accessibilityfocusedwindow: 'accessibilityFocusedWindow',
    accessibilityframe: 'accessibilityFrame',
    accessibilityframeforrange: 'accessibilityFrameForRange',
    accessibilityfullscreenbutton: 'accessibilityFullScreenButton',
    accessibilitygrowarea: 'accessibilityGrowArea',
    accessibilityhandles: 'accessibilityHandles',
    accessibilityheader: 'accessibilityHeader',
    accessibilityhelp: 'accessibilityHelp',
    accessibilityhorizontalscrollbar: 'accessibilityHorizontalScrollBar',
    accessibilityhorizontalunitdescription: 'accessibilityHorizontalUnitDescription',
    accessibilityhorizontalunits: 'accessibilityHorizontalUnits',
    accessibilityidentifier: 'accessibilityIdentifier',
    accessibilityincrementbutton: 'accessibilityIncrementButton',
    accessibilityindex: 'accessibilityIndex',
    accessibilityinsertionpointlinenumber: 'accessibilityInsertionPointLineNumber',
    accessibilitylabel: 'accessibilityLabel',
    accessibilitylabeluielements: 'accessibilityLabelUIElements',
    accessibilitylabelvalue: 'accessibilityLabelValue',
    accessibilitylayoutpointforscreenpoint: 'accessibilityLayoutPointForScreenPoint',
    accessibilitylayoutsizeforscreensize: 'accessibilityLayoutSizeForScreenSize',
    accessibilitylineforindex: 'accessibilityLineForIndex',
    accessibilitylinkeduielements: 'accessibilityLinkedUIElements',
    accessibilitymainwindow: 'accessibilityMainWindow',
    accessibilitymarkergroupuielement: 'accessibilityMarkerGroupUIElement',
    accessibilitymarkertypedescription: 'accessibilityMarkerTypeDescription',
    accessibilitymarkeruielements: 'accessibilityMarkerUIElements',
    accessibilitymarkervalues: 'accessibilityMarkerValues',
    accessibilitymaxvalue: 'accessibilityMaxValue',
    accessibilitymenubar: 'accessibilityMenuBar',
    accessibilityminimizebutton: 'accessibilityMinimizeButton',
    accessibilityminvalue: 'accessibilityMinValue',
    accessibilitynextcontents: 'accessibilityNextContents',
    accessibilitynumberofcharacters: 'accessibilityNumberOfCharacters',
    accessibilityorientation: 'accessibilityOrientation',
    accessibilityoverflowbutton: 'accessibilityOverflowButton',
    accessibilityparent: 'accessibilityParent',
    accessibilityperformcancel: 'accessibilityPerformCancel',
    accessibilityperformconfirm: 'accessibilityPerformConfirm',
    accessibilityperformdecrement: 'accessibilityPerformDecrement',
    accessibilityperformdelete: 'accessibilityPerformDelete',
    accessibilityperformincrement: 'accessibilityPerformIncrement',
    accessibilityperformpick: 'accessibilityPerformPick',
    accessibilityperformpress: 'accessibilityPerformPress',
    accessibilityperformraise: 'accessibilityPerformRaise',
    accessibilityperformshowalternateui: 'accessibilityPerformShowAlternateUI',
    accessibilityperformshowdefaultui: 'accessibilityPerformShowDefaultUI',
    accessibilityperformshowmenu: 'accessibilityPerformShowMenu',
    accessibilityplaceholdervalue: 'accessibilityPlaceholderValue',
    accessibilitypreviouscontents: 'accessibilityPreviousContents',
    accessibilityproxy: 'accessibilityProxy',
    accessibilityrangeforindex: 'accessibilityRangeForIndex',
    accessibilityrangeforline: 'accessibilityRangeForLine',
    accessibilityrangeforposition: 'accessibilityRangeForPosition',
    accessibilityrole: 'accessibilityRole',
    accessibilityroledescription: 'accessibilityRoleDescription',
    accessibilityrowcount: 'accessibilityRowCount',
    accessibilityrowheaderuielements: 'accessibilityRowHeaderUIElements',
    accessibilityrowindexrange: 'accessibilityRowIndexRange',
    accessibilityrows: 'accessibilityRows',
    accessibilityrtfforrange: 'accessibilityRTFForRange',
    accessibilityrulermarkertype: 'accessibilityRulerMarkerType',
    accessibilityscreenpointforlayoutpoint: 'accessibilityScreenPointForLayoutPoint',
    accessibilityscreensizeforlayoutsize: 'accessibilityScreenSizeForLayoutSize',
    accessibilitysearchbutton: 'accessibilitySearchButton',
    accessibilitysearchmenu: 'accessibilitySearchMenu',
    accessibilityselectedcells: 'accessibilitySelectedCells',
    accessibilityselectedchildren: 'accessibilitySelectedChildren',
    accessibilityselectedcolumns: 'accessibilitySelectedColumns',
    accessibilityselectedrows: 'accessibilitySelectedRows',
    accessibilityselectedtext: 'accessibilitySelectedText',
    accessibilityselectedtextrange: 'accessibilitySelectedTextRange',
    accessibilityselectedtextranges: 'accessibilitySelectedTextRanges',
    accessibilityservesastitleforuielements: 'accessibilityServesAsTitleForUIElements',
    accessibilitysharedcharacterrange: 'accessibilitySharedCharacterRange',
    accessibilitysharedfocuselements: 'accessibilitySharedFocusElements',
    accessibilitysharedtextuielements: 'accessibilitySharedTextUIElements',
    accessibilityshownmenu: 'accessibilityShownMenu',
    accessibilitysortdirection: 'accessibilitySortDirection',
    accessibilitysplitters: 'accessibilitySplitters',
    accessibilitystringforrange: 'accessibilityStringForRange',
    accessibilitystylerangeforindex: 'accessibilityStyleRangeForIndex',
    accessibilitysubrole: 'accessibilitySubrole',
    accessibilitytabs: 'accessibilityTabs',
    accessibilitytitle: 'accessibilityTitle',
    accessibilitytitleuielement: 'accessibilityTitleUIElement',
    accessibilitytoolbarbutton: 'accessibilityToolbarButton',
    accessibilitytopleveluielement: 'accessibilityTopLevelUIElement',
    accessibilityunitdescription: 'accessibilityUnitDescription',
    accessibilityunits: 'accessibilityUnits',
    accessibilityurl: 'accessibilityURL',
    accessibilityuserinputlabels: 'accessibilityUserInputLabels',
    accessibilityvalue: 'accessibilityValue',
    accessibilityvaluedescription: 'accessibilityValueDescription',
    accessibilityverticalscrollbar: 'accessibilityVerticalScrollBar',
    accessibilityverticalunitdescription: 'accessibilityVerticalUnitDescription',
    accessibilityverticalunits: 'accessibilityVerticalUnits',
    accessibilityvisiblecells: 'accessibilityVisibleCells',
    accessibilityvisiblecharacterrange: 'accessibilityVisibleCharacterRange',
    accessibilityvisiblechildren: 'accessibilityVisibleChildren',
    accessibilityvisiblecolumns: 'accessibilityVisibleColumns',
    accessibilityvisiblerows: 'accessibilityVisibleRows',
    accessibilitywarningvalue: 'accessibilityWarningValue',
    accessibilitywindow: 'accessibilityWindow',
    accessibilitywindows: 'accessibilityWindows',
    accessibilityzoombutton: 'accessibilityZoomButton',
    action: 'action',
    allowsautomatickeyequivalentlocalization: 'allowsAutomaticKeyEquivalentLocalization',
    allowsautomatickeyequivalentmirroring: 'allowsAutomaticKeyEquivalentMirroring',
    allowskeyequivalentwhenhidden: 'allowsKeyEquivalentWhenHidden',
    attributedtitle: 'attributedTitle',
    autorelease: 'autorelease',
    badge: 'badge',
    class: 'class',
    conformstoprotocol: 'conformsToProtocol',
    copywithzone: 'copyWithZone',
    debugdescription: 'debugDescription',
    description: 'description',
    encodewithcoder: 'encodeWithCoder',
    hash: 'hash',
    hassubmenu: 'hasSubmenu',
    identifier: 'identifier',
    image: 'image',
    indentationlevel: 'indentationLevel',
    initwithcoder: 'initWithCoder',
    initwithtitleactionkeyequivalent: 'initWithTitleActionKeyEquivalent',
    isaccessibilityalternateuivisible: 'isAccessibilityAlternateUIVisible',
    isaccessibilitydisclosed: 'isAccessibilityDisclosed',
    isaccessibilityedited: 'isAccessibilityEdited',
    isaccessibilityelement: 'isAccessibilityElement',
    isaccessibilityenabled: 'isAccessibilityEnabled',
    isaccessibilityexpanded: 'isAccessibilityExpanded',
    isaccessibilityfocused: 'isAccessibilityFocused',
    isaccessibilityfrontmost: 'isAccessibilityFrontmost',
    isaccessibilityhidden: 'isAccessibilityHidden',
    isaccessibilitymain: 'isAccessibilityMain',
    isaccessibilityminimized: 'isAccessibilityMinimized',
    isaccessibilitymodal: 'isAccessibilityModal',
    isaccessibilityorderedbyrow: 'isAccessibilityOrderedByRow',
    isaccessibilityprotectedcontent: 'isAccessibilityProtectedContent',
    isaccessibilityrequired: 'isAccessibilityRequired',
    isaccessibilityselected: 'isAccessibilitySelected',
    isaccessibilityselectorallowed: 'isAccessibilitySelectorAllowed',
    isalternate: 'isAlternate',
    isenabled: 'isEnabled',
    isequal: 'isEqual',
    ishidden: 'isHidden',
    ishiddenorhashiddenancestor: 'isHiddenOrHasHiddenAncestor',
    ishighlighted: 'isHighlighted',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    issectionheader: 'isSectionHeader',
    isseparatoritem: 'isSeparatorItem',
    keyequivalent: 'keyEquivalent',
    keyequivalentmodifiermask: 'keyEquivalentModifierMask',
    menu: 'menu',
    mixedstateimage: 'mixedStateImage',
    mnemonic: 'mnemonic',
    mnemoniclocation: 'mnemonicLocation',
    offstateimage: 'offStateImage',
    onstateimage: 'onStateImage',
    parentitem: 'parentItem',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    release: 'release',
    representedobject: 'representedObject',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    sectionheaderwithtitle: 'sectionHeaderWithTitle',
    self: 'self',
    separatoritem: 'separatorItem',
    setmnemoniclocation: 'setMnemonicLocation',
    settitlewithmnemonic: 'setTitleWithMnemonic',
    state: 'state',
    submenu: 'submenu',
    superclass: 'superclass',
    tag: 'tag',
    target: 'target',
    title: 'title',
    tooltip: 'toolTip',
    userkeyequivalent: 'userKeyEquivalent',
    usesuserkeyequivalents: 'usesUserKeyEquivalents',
    view: 'view',
    zone: 'zone',
  }

  // accessibilityActivationPoint: CGPoint;
  // accessibilityApplicationFocusedUIElement: interop.Object;
  // accessibilityCancelButton: interop.Object;
  // accessibilityClearButton: interop.Object;
  // accessibilityCloseButton: interop.Object;
  // accessibilityColumnCount: number;
  // accessibilityColumnIndexRange: _NSRange;
  // accessibilityCriticalValue: interop.Object;
  // accessibilityDecrementButton: interop.Object;
  // accessibilityDefaultButton: interop.Object;
  // accessibilityDisclosedByRow: interop.Object;
  // accessibilityDisclosedRows: interop.Object;
  // accessibilityDisclosureLevel: number;
  // accessibilityExtrasMenuBar: interop.Object;
  // accessibilityFocusedWindow: interop.Object;
  // accessibilityFrame: CGRect;
  // accessibilityFullScreenButton: interop.Object;
  // accessibilityGrowArea: interop.Object;
  // accessibilityHeader: interop.Object;
  // accessibilityHorizontalScrollBar: interop.Object;
  // accessibilityHorizontalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityIncrementButton: interop.Object;
  // accessibilityIndex: number;
  // accessibilityInsertionPointLineNumber: number;
  // accessibilityLabelValue: number;
  // accessibilityMainWindow: interop.Object;
  // accessibilityMarkerGroupUIElement: interop.Object;
  // accessibilityMarkerValues: interop.Object;
  // accessibilityMaxValue: interop.Object;
  // accessibilityMenuBar: interop.Object;
  // accessibilityMinimizeButton: interop.Object;
  // accessibilityMinValue: interop.Object;
  // accessibilityNumberOfCharacters: number;
  // accessibilityOrientation: interop.Enum<typeof NSAccessibilityOrientation>;
  // accessibilityOverflowButton: interop.Object;
  // accessibilityParent: interop.Object;
  // accessibilityProxy: interop.Object;
  // accessibilityRowCount: number;
  // accessibilityRowIndexRange: _NSRange;
  // accessibilityRulerMarkerType: interop.Enum<typeof NSAccessibilityRulerMarkerType>;
  // accessibilitySearchButton: interop.Object;
  // accessibilitySearchMenu: interop.Object;
  // accessibilitySelectedTextRange: _NSRange;
  // accessibilitySharedCharacterRange: _NSRange;
  // accessibilityShownMenu: interop.Object;
  // accessibilitySortDirection: interop.Enum<typeof NSAccessibilitySortDirection>;
  // accessibilityTitleUIElement: interop.Object;
  // accessibilityToolbarButton: interop.Object;
  // accessibilityTopLevelUIElement: interop.Object;
  // accessibilityUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityURL: NSURL;
  // accessibilityValue: interop.Object;
  // accessibilityVerticalScrollBar: interop.Object;
  // accessibilityVerticalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityVisibleCharacterRange: _NSRange;
  // accessibilityWarningValue: interop.Object;
  // accessibilityWindow: interop.Object;
  // accessibilityZoomButton: interop.Object;
  // action: string;
  // allowsAutomaticKeyEquivalentLocalization: boolean;
  // allowsAutomaticKeyEquivalentMirroring: boolean;
  // allowsKeyEquivalentWhenHidden: boolean;
  // attributedTitle: NSAttributedString;
  // badge: NSMenuItemBadge;
  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // readonly hash: number;
  // readonly hasSubmenu: boolean;
  // image: NSImage;
  // indentationLevel: number;
  // isAccessibilityAlternateUIVisible: boolean;
  // isAccessibilityDisclosed: boolean;
  // isAccessibilityEdited: boolean;
  // isAccessibilityElement: boolean;
  // isAccessibilityEnabled: boolean;
  // isAccessibilityExpanded: boolean;
  // isAccessibilityFocused: boolean;
  // isAccessibilityFrontmost: boolean;
  // isAccessibilityHidden: boolean;
  // isAccessibilityMain: boolean;
  // isAccessibilityMinimized: boolean;
  // isAccessibilityModal: boolean;
  // isAccessibilityOrderedByRow: boolean;
  // isAccessibilityProtectedContent: boolean;
  // isAccessibilityRequired: boolean;
  // isAccessibilitySelected: boolean;
  // isAlternate: boolean;
  // isEnabled: boolean;
  // isHidden: boolean;
  // readonly isHiddenOrHasHiddenAncestor: boolean;
  // readonly isHighlighted: boolean;
  // readonly isProxy: boolean;
  // readonly isSectionHeader: boolean;
  // readonly isSeparatorItem: boolean;
  // keyEquivalentModifierMask: interop.Enum<typeof NSEventModifierFlags>;
  // menu: NSMenu;
  // mixedStateImage: NSImage;
  // offStateImage: NSImage;
  // onStateImage: NSImage;
  // readonly parentItem: NSMenuItem;
  // representedObject: interop.Object;
  // state: number;
  // submenu: NSMenu;
  // readonly superclass: interop.Object;
  // tag: number;
  // target: interop.Object;
  // readonly userKeyEquivalent: NSString;
  // usesUserKeyEquivalents: boolean;
  // view: NSView;
  // readonly zone: interop.Pointer;
}

export class HTMLNSPrintOperationElement extends HTMLNSObjectElement {
  readonly nativeObject = NSPrintOperation.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    accessoryview: 'accessoryView',
    canspawnseparatethread: 'canSpawnSeparateThread',
    cleanupoperation: 'cleanUpOperation',
    context: 'context',
    createcontext: 'createContext',
    currentoperation: 'currentOperation',
    currentpage: 'currentPage',
    deliverresult: 'deliverResult',
    destroycontext: 'destroyContext',
    epsoperationwithviewinsiderecttodata: 'EPSOperationWithViewInsideRectToData',
    epsoperationwithviewinsiderecttodataprintinfo: 'EPSOperationWithViewInsideRectToDataPrintInfo',
    epsoperationwithviewinsiderecttopathprintinfo: 'EPSOperationWithViewInsideRectToPathPrintInfo',
    iscopyingoperation: 'isCopyingOperation',
    jobstylehint: 'jobStyleHint',
    jobtitle: 'jobTitle',
    pageorder: 'pageOrder',
    pagerange: 'pageRange',
    pdfoperationwithviewinsiderecttodata: 'PDFOperationWithViewInsideRectToData',
    pdfoperationwithviewinsiderecttodataprintinfo: 'PDFOperationWithViewInsideRectToDataPrintInfo',
    pdfoperationwithviewinsiderecttopathprintinfo: 'PDFOperationWithViewInsideRectToPathPrintInfo',
    pdfpanel: 'PDFPanel',
    preferredrenderingquality: 'preferredRenderingQuality',
    printinfo: 'printInfo',
    printoperationwithview: 'printOperationWithView',
    printoperationwithviewprintinfo: 'printOperationWithViewPrintInfo',
    printpanel: 'printPanel',
    runoperation: 'runOperation',
    runoperationmodalforwindowdelegatedidrunselectorcontextinfo: 'runOperationModalForWindowDelegateDidRunSelectorContextInfo',
    setaccessoryview: 'setAccessoryView',
    setjobstylehint: 'setJobStyleHint',
    setshowpanels: 'setShowPanels',
    showpanels: 'showPanels',
    showsprintpanel: 'showsPrintPanel',
    showsprogresspanel: 'showsProgressPanel',
    view: 'view',
  }

  // canSpawnSeparateThread: boolean;
  // readonly context: NSGraphicsContext;
  // currentOperation: NSPrintOperation;
  // readonly currentPage: number;
  // readonly isCopyingOperation: boolean;
  // pageOrder: interop.Enum<typeof NSPrintingPageOrder>;
  // readonly pageRange: _NSRange;
  // PDFPanel: NSPDFPanel;
  // readonly preferredRenderingQuality: interop.Enum<typeof NSPrintRenderingQuality>;
  // printInfo: NSPrintInfo;
  // printPanel: NSPrintPanel;
  // showsPrintPanel: boolean;
  // showsProgressPanel: boolean;
  // readonly view: NSView;
}

export class HTMLNSAccessibilityCustomRotorElement extends HTMLNSObjectElement {
  readonly nativeObject = NSAccessibilityCustomRotor.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    initwithlabelitemsearchdelegate: 'initWithLabelItemSearchDelegate',
    initwithrotortypeitemsearchdelegate: 'initWithRotorTypeItemSearchDelegate',
    itemloadingdelegate: 'itemLoadingDelegate',
    itemsearchdelegate: 'itemSearchDelegate',
    label: 'label',
    type: 'type',
  }

  // itemLoadingDelegate: NSAccessibilityElementLoading;
  // itemSearchDelegate: NSAccessibilityCustomRotorItemSearchDelegate | null;
  // type: interop.Enum<typeof NSAccessibilityCustomRotorType>;
}

export class HTMLNSClipViewElement extends HTMLNSViewElement {
  readonly nativeObject = NSClipView.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    automaticallyadjustscontentinsets: 'automaticallyAdjustsContentInsets',
    autoscroll: 'autoscroll',
    backgroundcolor: 'backgroundColor',
    constrainboundsrect: 'constrainBoundsRect',
    constrainscrollpoint: 'constrainScrollPoint',
    contentinsets: 'contentInsets',
    copiesonscroll: 'copiesOnScroll',
    documentcursor: 'documentCursor',
    documentrect: 'documentRect',
    documentview: 'documentView',
    documentvisiblerect: 'documentVisibleRect',
    drawsbackground: 'drawsBackground',
    scrolltopoint: 'scrollToPoint',
    viewboundschanged: 'viewBoundsChanged',
    viewframechanged: 'viewFrameChanged',
  }

  // automaticallyAdjustsContentInsets: boolean;
  // backgroundColor: NSColor;
  // contentInsets: NSEdgeInsets;
  // copiesOnScroll: boolean;
  // documentCursor: NSCursor;
  // readonly documentRect: CGRect;
  // documentView: NSView;
  // readonly documentVisibleRect: CGRect;
  // drawsBackground: boolean;
}

export class HTMLNSPopoverElement extends HTMLNSResponderElement {
  readonly nativeObject = NSPopover.new();
  get delegate(): NSPopoverDelegateImpl {
    return (this.nativeObject.delegate ??= NSPopoverDelegateImpl.new()) as NSPopoverDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    accessibilityactivationpoint: 'accessibilityActivationPoint',
    accessibilityallowedvalues: 'accessibilityAllowedValues',
    accessibilityapplicationfocuseduielement: 'accessibilityApplicationFocusedUIElement',
    accessibilityattributedstringforrange: 'accessibilityAttributedStringForRange',
    accessibilityattributeduserinputlabels: 'accessibilityAttributedUserInputLabels',
    accessibilitycancelbutton: 'accessibilityCancelButton',
    accessibilitycellforcolumnrow: 'accessibilityCellForColumnRow',
    accessibilitychildren: 'accessibilityChildren',
    accessibilitychildreninnavigationorder: 'accessibilityChildrenInNavigationOrder',
    accessibilityclearbutton: 'accessibilityClearButton',
    accessibilityclosebutton: 'accessibilityCloseButton',
    accessibilitycolumncount: 'accessibilityColumnCount',
    accessibilitycolumnheaderuielements: 'accessibilityColumnHeaderUIElements',
    accessibilitycolumnindexrange: 'accessibilityColumnIndexRange',
    accessibilitycolumns: 'accessibilityColumns',
    accessibilitycolumntitles: 'accessibilityColumnTitles',
    accessibilitycontents: 'accessibilityContents',
    accessibilitycriticalvalue: 'accessibilityCriticalValue',
    accessibilitycustomactions: 'accessibilityCustomActions',
    accessibilitycustomrotors: 'accessibilityCustomRotors',
    accessibilitydecrementbutton: 'accessibilityDecrementButton',
    accessibilitydefaultbutton: 'accessibilityDefaultButton',
    accessibilitydisclosedbyrow: 'accessibilityDisclosedByRow',
    accessibilitydisclosedrows: 'accessibilityDisclosedRows',
    accessibilitydisclosurelevel: 'accessibilityDisclosureLevel',
    accessibilitydocument: 'accessibilityDocument',
    accessibilityextrasmenubar: 'accessibilityExtrasMenuBar',
    accessibilityfilename: 'accessibilityFilename',
    accessibilityfocusedwindow: 'accessibilityFocusedWindow',
    accessibilityframe: 'accessibilityFrame',
    accessibilityframeforrange: 'accessibilityFrameForRange',
    accessibilityfullscreenbutton: 'accessibilityFullScreenButton',
    accessibilitygrowarea: 'accessibilityGrowArea',
    accessibilityhandles: 'accessibilityHandles',
    accessibilityheader: 'accessibilityHeader',
    accessibilityhelp: 'accessibilityHelp',
    accessibilityhorizontalscrollbar: 'accessibilityHorizontalScrollBar',
    accessibilityhorizontalunitdescription: 'accessibilityHorizontalUnitDescription',
    accessibilityhorizontalunits: 'accessibilityHorizontalUnits',
    accessibilityidentifier: 'accessibilityIdentifier',
    accessibilityincrementbutton: 'accessibilityIncrementButton',
    accessibilityindex: 'accessibilityIndex',
    accessibilityinsertionpointlinenumber: 'accessibilityInsertionPointLineNumber',
    accessibilitylabel: 'accessibilityLabel',
    accessibilitylabeluielements: 'accessibilityLabelUIElements',
    accessibilitylabelvalue: 'accessibilityLabelValue',
    accessibilitylayoutpointforscreenpoint: 'accessibilityLayoutPointForScreenPoint',
    accessibilitylayoutsizeforscreensize: 'accessibilityLayoutSizeForScreenSize',
    accessibilitylineforindex: 'accessibilityLineForIndex',
    accessibilitylinkeduielements: 'accessibilityLinkedUIElements',
    accessibilitymainwindow: 'accessibilityMainWindow',
    accessibilitymarkergroupuielement: 'accessibilityMarkerGroupUIElement',
    accessibilitymarkertypedescription: 'accessibilityMarkerTypeDescription',
    accessibilitymarkeruielements: 'accessibilityMarkerUIElements',
    accessibilitymarkervalues: 'accessibilityMarkerValues',
    accessibilitymaxvalue: 'accessibilityMaxValue',
    accessibilitymenubar: 'accessibilityMenuBar',
    accessibilityminimizebutton: 'accessibilityMinimizeButton',
    accessibilityminvalue: 'accessibilityMinValue',
    accessibilitynextcontents: 'accessibilityNextContents',
    accessibilitynumberofcharacters: 'accessibilityNumberOfCharacters',
    accessibilityorientation: 'accessibilityOrientation',
    accessibilityoverflowbutton: 'accessibilityOverflowButton',
    accessibilityparent: 'accessibilityParent',
    accessibilityperformcancel: 'accessibilityPerformCancel',
    accessibilityperformconfirm: 'accessibilityPerformConfirm',
    accessibilityperformdecrement: 'accessibilityPerformDecrement',
    accessibilityperformdelete: 'accessibilityPerformDelete',
    accessibilityperformincrement: 'accessibilityPerformIncrement',
    accessibilityperformpick: 'accessibilityPerformPick',
    accessibilityperformpress: 'accessibilityPerformPress',
    accessibilityperformraise: 'accessibilityPerformRaise',
    accessibilityperformshowalternateui: 'accessibilityPerformShowAlternateUI',
    accessibilityperformshowdefaultui: 'accessibilityPerformShowDefaultUI',
    accessibilityperformshowmenu: 'accessibilityPerformShowMenu',
    accessibilityplaceholdervalue: 'accessibilityPlaceholderValue',
    accessibilitypreviouscontents: 'accessibilityPreviousContents',
    accessibilityproxy: 'accessibilityProxy',
    accessibilityrangeforindex: 'accessibilityRangeForIndex',
    accessibilityrangeforline: 'accessibilityRangeForLine',
    accessibilityrangeforposition: 'accessibilityRangeForPosition',
    accessibilityrole: 'accessibilityRole',
    accessibilityroledescription: 'accessibilityRoleDescription',
    accessibilityrowcount: 'accessibilityRowCount',
    accessibilityrowheaderuielements: 'accessibilityRowHeaderUIElements',
    accessibilityrowindexrange: 'accessibilityRowIndexRange',
    accessibilityrows: 'accessibilityRows',
    accessibilityrtfforrange: 'accessibilityRTFForRange',
    accessibilityrulermarkertype: 'accessibilityRulerMarkerType',
    accessibilityscreenpointforlayoutpoint: 'accessibilityScreenPointForLayoutPoint',
    accessibilityscreensizeforlayoutsize: 'accessibilityScreenSizeForLayoutSize',
    accessibilitysearchbutton: 'accessibilitySearchButton',
    accessibilitysearchmenu: 'accessibilitySearchMenu',
    accessibilityselectedcells: 'accessibilitySelectedCells',
    accessibilityselectedchildren: 'accessibilitySelectedChildren',
    accessibilityselectedcolumns: 'accessibilitySelectedColumns',
    accessibilityselectedrows: 'accessibilitySelectedRows',
    accessibilityselectedtext: 'accessibilitySelectedText',
    accessibilityselectedtextrange: 'accessibilitySelectedTextRange',
    accessibilityselectedtextranges: 'accessibilitySelectedTextRanges',
    accessibilityservesastitleforuielements: 'accessibilityServesAsTitleForUIElements',
    accessibilitysharedcharacterrange: 'accessibilitySharedCharacterRange',
    accessibilitysharedfocuselements: 'accessibilitySharedFocusElements',
    accessibilitysharedtextuielements: 'accessibilitySharedTextUIElements',
    accessibilityshownmenu: 'accessibilityShownMenu',
    accessibilitysortdirection: 'accessibilitySortDirection',
    accessibilitysplitters: 'accessibilitySplitters',
    accessibilitystringforrange: 'accessibilityStringForRange',
    accessibilitystylerangeforindex: 'accessibilityStyleRangeForIndex',
    accessibilitysubrole: 'accessibilitySubrole',
    accessibilitytabs: 'accessibilityTabs',
    accessibilitytitle: 'accessibilityTitle',
    accessibilitytitleuielement: 'accessibilityTitleUIElement',
    accessibilitytoolbarbutton: 'accessibilityToolbarButton',
    accessibilitytopleveluielement: 'accessibilityTopLevelUIElement',
    accessibilityunitdescription: 'accessibilityUnitDescription',
    accessibilityunits: 'accessibilityUnits',
    accessibilityurl: 'accessibilityURL',
    accessibilityuserinputlabels: 'accessibilityUserInputLabels',
    accessibilityvalue: 'accessibilityValue',
    accessibilityvaluedescription: 'accessibilityValueDescription',
    accessibilityverticalscrollbar: 'accessibilityVerticalScrollBar',
    accessibilityverticalunitdescription: 'accessibilityVerticalUnitDescription',
    accessibilityverticalunits: 'accessibilityVerticalUnits',
    accessibilityvisiblecells: 'accessibilityVisibleCells',
    accessibilityvisiblecharacterrange: 'accessibilityVisibleCharacterRange',
    accessibilityvisiblechildren: 'accessibilityVisibleChildren',
    accessibilityvisiblecolumns: 'accessibilityVisibleColumns',
    accessibilityvisiblerows: 'accessibilityVisibleRows',
    accessibilitywarningvalue: 'accessibilityWarningValue',
    accessibilitywindow: 'accessibilityWindow',
    accessibilitywindows: 'accessibilityWindows',
    accessibilityzoombutton: 'accessibilityZoomButton',
    animates: 'animates',
    appearance: 'appearance',
    autorelease: 'autorelease',
    behavior: 'behavior',
    class: 'class',
    close: 'close',
    conformstoprotocol: 'conformsToProtocol',
    contentsize: 'contentSize',
    contentviewcontroller: 'contentViewController',
    debugdescription: 'debugDescription',
    delegate: 'delegate',
    description: 'description',
    effectiveappearance: 'effectiveAppearance',
    hasfullsizecontent: 'hasFullSizeContent',
    hash: 'hash',
    init: 'init',
    initwithcoder: 'initWithCoder',
    isaccessibilityalternateuivisible: 'isAccessibilityAlternateUIVisible',
    isaccessibilitydisclosed: 'isAccessibilityDisclosed',
    isaccessibilityedited: 'isAccessibilityEdited',
    isaccessibilityelement: 'isAccessibilityElement',
    isaccessibilityenabled: 'isAccessibilityEnabled',
    isaccessibilityexpanded: 'isAccessibilityExpanded',
    isaccessibilityfocused: 'isAccessibilityFocused',
    isaccessibilityfrontmost: 'isAccessibilityFrontmost',
    isaccessibilityhidden: 'isAccessibilityHidden',
    isaccessibilitymain: 'isAccessibilityMain',
    isaccessibilityminimized: 'isAccessibilityMinimized',
    isaccessibilitymodal: 'isAccessibilityModal',
    isaccessibilityorderedbyrow: 'isAccessibilityOrderedByRow',
    isaccessibilityprotectedcontent: 'isAccessibilityProtectedContent',
    isaccessibilityrequired: 'isAccessibilityRequired',
    isaccessibilityselected: 'isAccessibilitySelected',
    isaccessibilityselectorallowed: 'isAccessibilitySelectorAllowed',
    isdetached: 'isDetached',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    isshown: 'isShown',
    performclose: 'performClose',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    positioningrect: 'positioningRect',
    release: 'release',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    self: 'self',
    showrelativetorectofviewpreferrededge: 'showRelativeToRectOfViewPreferredEdge',
    showrelativetotoolbaritem: 'showRelativeToToolbarItem',
    superclass: 'superclass',
    zone: 'zone',
  }

  // accessibilityActivationPoint: CGPoint;
  // accessibilityApplicationFocusedUIElement: interop.Object;
  // accessibilityCancelButton: interop.Object;
  // accessibilityClearButton: interop.Object;
  // accessibilityCloseButton: interop.Object;
  // accessibilityColumnCount: number;
  // accessibilityColumnIndexRange: _NSRange;
  // accessibilityCriticalValue: interop.Object;
  // accessibilityDecrementButton: interop.Object;
  // accessibilityDefaultButton: interop.Object;
  // accessibilityDisclosedByRow: interop.Object;
  // accessibilityDisclosedRows: interop.Object;
  // accessibilityDisclosureLevel: number;
  // accessibilityExtrasMenuBar: interop.Object;
  // accessibilityFocusedWindow: interop.Object;
  // accessibilityFrame: CGRect;
  // accessibilityFullScreenButton: interop.Object;
  // accessibilityGrowArea: interop.Object;
  // accessibilityHeader: interop.Object;
  // accessibilityHorizontalScrollBar: interop.Object;
  // accessibilityHorizontalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityIncrementButton: interop.Object;
  // accessibilityIndex: number;
  // accessibilityInsertionPointLineNumber: number;
  // accessibilityLabelValue: number;
  // accessibilityMainWindow: interop.Object;
  // accessibilityMarkerGroupUIElement: interop.Object;
  // accessibilityMarkerValues: interop.Object;
  // accessibilityMaxValue: interop.Object;
  // accessibilityMenuBar: interop.Object;
  // accessibilityMinimizeButton: interop.Object;
  // accessibilityMinValue: interop.Object;
  // accessibilityNumberOfCharacters: number;
  // accessibilityOrientation: interop.Enum<typeof NSAccessibilityOrientation>;
  // accessibilityOverflowButton: interop.Object;
  // accessibilityParent: interop.Object;
  // accessibilityProxy: interop.Object;
  // accessibilityRowCount: number;
  // accessibilityRowIndexRange: _NSRange;
  // accessibilityRulerMarkerType: interop.Enum<typeof NSAccessibilityRulerMarkerType>;
  // accessibilitySearchButton: interop.Object;
  // accessibilitySearchMenu: interop.Object;
  // accessibilitySelectedTextRange: _NSRange;
  // accessibilitySharedCharacterRange: _NSRange;
  // accessibilityShownMenu: interop.Object;
  // accessibilitySortDirection: interop.Enum<typeof NSAccessibilitySortDirection>;
  // accessibilityTitleUIElement: interop.Object;
  // accessibilityToolbarButton: interop.Object;
  // accessibilityTopLevelUIElement: interop.Object;
  // accessibilityUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityURL: NSURL;
  // accessibilityValue: interop.Object;
  // accessibilityVerticalScrollBar: interop.Object;
  // accessibilityVerticalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityVisibleCharacterRange: _NSRange;
  // accessibilityWarningValue: interop.Object;
  // accessibilityWindow: interop.Object;
  // accessibilityZoomButton: interop.Object;
  // animates: boolean;
  // appearance: NSAppearance;
  // behavior: interop.Enum<typeof NSPopoverBehavior>;
  // contentSize: CGSize;
  // contentViewController: NSViewController;
  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // readonly effectiveAppearance: NSAppearance;
  // hasFullSizeContent: boolean;
  // readonly hash: number;
  // isAccessibilityAlternateUIVisible: boolean;
  // isAccessibilityDisclosed: boolean;
  // isAccessibilityEdited: boolean;
  // isAccessibilityElement: boolean;
  // isAccessibilityEnabled: boolean;
  // isAccessibilityExpanded: boolean;
  // isAccessibilityFocused: boolean;
  // isAccessibilityFrontmost: boolean;
  // isAccessibilityHidden: boolean;
  // isAccessibilityMain: boolean;
  // isAccessibilityMinimized: boolean;
  // isAccessibilityModal: boolean;
  // isAccessibilityOrderedByRow: boolean;
  // isAccessibilityProtectedContent: boolean;
  // isAccessibilityRequired: boolean;
  // isAccessibilitySelected: boolean;
  // readonly isDetached: boolean;
  // readonly isProxy: boolean;
  // readonly isShown: boolean;
  // positioningRect: CGRect;
  // readonly superclass: interop.Object;
  // readonly zone: interop.Pointer;

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
  // @ts-ignore
  readonly nativeObject = NSCustomTouchBarItem.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    customizationlabel: 'customizationLabel',
    view: 'view',
    viewcontroller: 'viewController',
  }

  // view: NSView;
  // viewController: NSViewController;
}

export class HTMLNSGestureRecognizerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSGestureRecognizer.new();
  get delegate(): NSGestureRecognizerDelegateImpl {
    return (this.nativeObject.delegate ??= NSGestureRecognizerDelegateImpl.new()) as NSGestureRecognizerDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    action: 'action',
    allowedtouchtypes: 'allowedTouchTypes',
    canbepreventedbygesturerecognizer: 'canBePreventedByGestureRecognizer',
    canpreventgesturerecognizer: 'canPreventGestureRecognizer',
    delayskeyevents: 'delaysKeyEvents',
    delaysmagnificationevents: 'delaysMagnificationEvents',
    delaysothermousebuttonevents: 'delaysOtherMouseButtonEvents',
    delaysprimarymousebuttonevents: 'delaysPrimaryMouseButtonEvents',
    delaysrotationevents: 'delaysRotationEvents',
    delayssecondarymousebuttonevents: 'delaysSecondaryMouseButtonEvents',
    delegate: 'delegate',
    encodewithcoder: 'encodeWithCoder',
    flagschanged: 'flagsChanged',
    initwithcoder: 'initWithCoder',
    initwithtargetaction: 'initWithTargetAction',
    isenabled: 'isEnabled',
    keydown: 'keyDown',
    keyup: 'keyUp',
    locationinview: 'locationInView',
    magnifywithevent: 'magnifyWithEvent',
    mousedown: 'mouseDown',
    mousedragged: 'mouseDragged',
    mouseup: 'mouseUp',
    othermousedown: 'otherMouseDown',
    othermousedragged: 'otherMouseDragged',
    othermouseup: 'otherMouseUp',
    pressurechangewithevent: 'pressureChangeWithEvent',
    pressureconfiguration: 'pressureConfiguration',
    reset: 'reset',
    rightmousedown: 'rightMouseDown',
    rightmousedragged: 'rightMouseDragged',
    rightmouseup: 'rightMouseUp',
    rotatewithevent: 'rotateWithEvent',
    shouldberequiredtofailbygesturerecognizer: 'shouldBeRequiredToFailByGestureRecognizer',
    shouldrequirefailureofgesturerecognizer: 'shouldRequireFailureOfGestureRecognizer',
    state: 'state',
    tabletpoint: 'tabletPoint',
    target: 'target',
    touchesbeganwithevent: 'touchesBeganWithEvent',
    touchescancelledwithevent: 'touchesCancelledWithEvent',
    touchesendedwithevent: 'touchesEndedWithEvent',
    touchesmovedwithevent: 'touchesMovedWithEvent',
    view: 'view',
  }

  // action: string;
  // allowedTouchTypes: interop.Enum<typeof NSTouchTypeMask>;
  // delaysKeyEvents: boolean;
  // delaysMagnificationEvents: boolean;
  // delaysOtherMouseButtonEvents: boolean;
  // delaysPrimaryMouseButtonEvents: boolean;
  // delaysRotationEvents: boolean;
  // delaysSecondaryMouseButtonEvents: boolean;
  // isEnabled: boolean;
  // pressureConfiguration: NSPressureConfiguration;
  // readonly state: interop.Enum<typeof NSGestureRecognizerState>;
  // target: interop.Object;
  // readonly view: NSView;

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
  readonly nativeObject = NSStatusBar.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    isvertical: 'isVertical',
    removestatusitem: 'removeStatusItem',
    statusitemwithlength: 'statusItemWithLength',
    systemstatusbar: 'systemStatusBar',
    thickness: 'thickness',
  }

  // readonly isVertical: boolean;
  // systemStatusBar: NSStatusBar;
  // readonly thickness: number;
}

export class HTMLNSPDFInfoElement extends HTMLNSObjectElement {
  readonly nativeObject = NSPDFInfo.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    attributes: 'attributes',
    copywithzone: 'copyWithZone',
    encodewithcoder: 'encodeWithCoder',
    initwithcoder: 'initWithCoder',
    isfileextensionhidden: 'isFileExtensionHidden',
    orientation: 'orientation',
    papersize: 'paperSize',
    tagnames: 'tagNames',
    url: 'URL',
  }

  // readonly attributes: NSMutableDictionary;
  // isFileExtensionHidden: boolean;
  // orientation: interop.Enum<typeof NSPaperOrientation>;
  // paperSize: CGSize;
  // URL: NSURL;
}

export class HTMLNSTextTableElement extends HTMLNSTextBlockElement {
  readonly nativeObject = NSTextTable.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    boundsrectforblockcontentrectinrecttextcontainercharacterrange: 'boundsRectForBlockContentRectInRectTextContainerCharacterRange',
    collapsesborders: 'collapsesBorders',
    drawbackgroundforblockwithframeinviewcharacterrangelayoutmanager: 'drawBackgroundForBlockWithFrameInViewCharacterRangeLayoutManager',
    hidesemptycells: 'hidesEmptyCells',
    layoutalgorithm: 'layoutAlgorithm',
    numberofcolumns: 'numberOfColumns',
    rectforblocklayoutatpointinrecttextcontainercharacterrange: 'rectForBlockLayoutAtPointInRectTextContainerCharacterRange',
  }

  // collapsesBorders: boolean;
  // hidesEmptyCells: boolean;
  // layoutAlgorithm: interop.Enum<typeof NSTextTableLayoutAlgorithm>;
  // numberOfColumns: number;
}

export class HTMLNSCollectionViewFlowLayoutInvalidationContextElement extends HTMLNSCollectionViewLayoutInvalidationContextElement {
  readonly nativeObject = NSCollectionViewFlowLayoutInvalidationContext.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    invalidateflowlayoutattributes: 'invalidateFlowLayoutAttributes',
    invalidateflowlayoutdelegatemetrics: 'invalidateFlowLayoutDelegateMetrics',
  }

  // invalidateFlowLayoutAttributes: boolean;
  // invalidateFlowLayoutDelegateMetrics: boolean;
}

export class HTMLNSPrintPanelElement extends HTMLNSObjectElement {
  readonly nativeObject = NSPrintPanel.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    accessorycontrollers: 'accessoryControllers',
    accessoryview: 'accessoryView',
    addaccessorycontroller: 'addAccessoryController',
    beginsheetusingprintinfoonwindowcompletionhandler: 'beginSheetUsingPrintInfoOnWindowCompletionHandler',
    beginsheetwithprintinfomodalforwindowdelegatedidendselectorcontextinfo: 'beginSheetWithPrintInfoModalForWindowDelegateDidEndSelectorContextInfo',
    defaultbuttontitle: 'defaultButtonTitle',
    finalwriteprintinfo: 'finalWritePrintInfo',
    helpanchor: 'helpAnchor',
    jobstylehint: 'jobStyleHint',
    options: 'options',
    printinfo: 'printInfo',
    printpanel: 'printPanel',
    removeaccessorycontroller: 'removeAccessoryController',
    runmodal: 'runModal',
    runmodalwithprintinfo: 'runModalWithPrintInfo',
    setaccessoryview: 'setAccessoryView',
    setdefaultbuttontitle: 'setDefaultButtonTitle',
    updatefromprintinfo: 'updateFromPrintInfo',
  }

  // readonly accessoryControllers: NSArray;
  // options: interop.Enum<typeof NSPrintPanelOptions>;
  // readonly printInfo: NSPrintInfo;
}

export class HTMLNSDocumentControllerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSDocumentController.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    adddocument: 'addDocument',
    allowsautomaticsharemenu: 'allowsAutomaticShareMenu',
    autorelease: 'autorelease',
    autosavingdelay: 'autosavingDelay',
    beginopenpanelfortypescompletionhandler: 'beginOpenPanelForTypesCompletionHandler',
    beginopenpanelwithcompletionhandler: 'beginOpenPanelWithCompletionHandler',
    class: 'class',
    clearrecentdocuments: 'clearRecentDocuments',
    closealldocumentswithdelegatedidcloseallselectorcontextinfo: 'closeAllDocumentsWithDelegateDidCloseAllSelectorContextInfo',
    conformstoprotocol: 'conformsToProtocol',
    currentdirectory: 'currentDirectory',
    currentdocument: 'currentDocument',
    debugdescription: 'debugDescription',
    defaulttype: 'defaultType',
    description: 'description',
    displaynamefortype: 'displayNameForType',
    documentclassfortype: 'documentClassForType',
    documentclassnames: 'documentClassNames',
    documentforfilename: 'documentForFileName',
    documentforurl: 'documentForURL',
    documentforwindow: 'documentForWindow',
    documents: 'documents',
    duplicatedocumentwithcontentsofurlcopyingdisplaynameerror: 'duplicateDocumentWithContentsOfURLCopyingDisplayNameError',
    encodewithcoder: 'encodeWithCoder',
    fileextensionsfromtype: 'fileExtensionsFromType',
    filenamesfromrunningopenpanel: 'fileNamesFromRunningOpenPanel',
    hasediteddocuments: 'hasEditedDocuments',
    hash: 'hash',
    init: 'init',
    initwithcoder: 'initWithCoder',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    makedocumentforurlwithcontentsofurloftypeerror: 'makeDocumentForURLWithContentsOfURLOfTypeError',
    makedocumentwithcontentsoffileoftype: 'makeDocumentWithContentsOfFileOfType',
    makedocumentwithcontentsofurloftype: 'makeDocumentWithContentsOfURLOfType',
    makedocumentwithcontentsofurloftypeerror: 'makeDocumentWithContentsOfURLOfTypeError',
    makeuntitleddocumentoftype: 'makeUntitledDocumentOfType',
    makeuntitleddocumentoftypeerror: 'makeUntitledDocumentOfTypeError',
    maximumrecentdocumentcount: 'maximumRecentDocumentCount',
    newdocument: 'newDocument',
    notenewrecentdocument: 'noteNewRecentDocument',
    notenewrecentdocumenturl: 'noteNewRecentDocumentURL',
    opendocument: 'openDocument',
    opendocumentwithcontentsoffiledisplay: 'openDocumentWithContentsOfFileDisplay',
    opendocumentwithcontentsofurldisplay: 'openDocumentWithContentsOfURLDisplay',
    opendocumentwithcontentsofurldisplaycompletionhandler: 'openDocumentWithContentsOfURLDisplayCompletionHandler',
    opendocumentwithcontentsofurldisplayerror: 'openDocumentWithContentsOfURLDisplayError',
    openuntitleddocumentanddisplayerror: 'openUntitledDocumentAndDisplayError',
    openuntitleddocumentoftypedisplay: 'openUntitledDocumentOfTypeDisplay',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    presenterror: 'presentError',
    presenterrormodalforwindowdelegatedidpresentselectorcontextinfo: 'presentErrorModalForWindowDelegateDidPresentSelectorContextInfo',
    recentdocumenturls: 'recentDocumentURLs',
    release: 'release',
    removedocument: 'removeDocument',
    reopendocumentforurlwithcontentsofurldisplaycompletionhandler: 'reopenDocumentForURLWithContentsOfURLDisplayCompletionHandler',
    reopendocumentforurlwithcontentsofurlerror: 'reopenDocumentForURLWithContentsOfURLError',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    reviewunsaveddocumentswithalerttitlecancellabledelegatedidreviewallselectorcontextinfo: 'reviewUnsavedDocumentsWithAlertTitleCancellableDelegateDidReviewAllSelectorContextInfo',
    runmodalopenpanelfortypes: 'runModalOpenPanelForTypes',
    savealldocuments: 'saveAllDocuments',
    self: 'self',
    setshouldcreateui: 'setShouldCreateUI',
    shareddocumentcontroller: 'sharedDocumentController',
    shouldcreateui: 'shouldCreateUI',
    standardsharemenuitem: 'standardShareMenuItem',
    superclass: 'superclass',
    typeforcontentsofurlerror: 'typeForContentsOfURLError',
    typefromfileextension: 'typeFromFileExtension',
    urlsfromrunningopenpanel: 'URLsFromRunningOpenPanel',
    validatemenuitem: 'validateMenuItem',
    validateuserinterfaceitem: 'validateUserInterfaceItem',
    willpresenterror: 'willPresentError',
    zone: 'zone',
  }

  // readonly allowsAutomaticShareMenu: boolean;
  // autosavingDelay: number;
  // readonly currentDirectory: NSString;
  // readonly currentDocument: NSDocument;
  // readonly debugDescription: NSString;
  // readonly defaultType: NSString;
  // readonly description: NSString;
  // readonly documentClassNames: NSArray;
  // readonly documents: NSArray;
  // readonly hasEditedDocuments: boolean;
  // readonly hash: number;
  // readonly isProxy: boolean;
  // readonly maximumRecentDocumentCount: number;
  // readonly recentDocumentURLs: NSArray;
  // sharedDocumentController: NSDocumentController;
  // readonly superclass: interop.Object;
  // readonly zone: interop.Pointer;
}

export class HTMLNSStepperTouchBarItemElement extends HTMLNSTouchBarItemElement {
  // @ts-ignore
  readonly nativeObject = NSStepperTouchBarItem.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    action: 'action',
    customizationlabel: 'customizationLabel',
    increment: 'increment',
    maxvalue: 'maxValue',
    minvalue: 'minValue',
    steppertouchbaritemwithidentifierdrawinghandler: 'stepperTouchBarItemWithIdentifierDrawingHandler',
    steppertouchbaritemwithidentifierformatter: 'stepperTouchBarItemWithIdentifierFormatter',
    target: 'target',
    value: 'value',
  }

  // action: string;
  // increment: number;
  // maxValue: number;
  // minValue: number;
  // target: interop.Object;
  // value: number;
}

export class HTMLNSPrintInfoElement extends HTMLNSObjectElement {
  readonly nativeObject = NSPrintInfo.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    bottommargin: 'bottomMargin',
    copywithzone: 'copyWithZone',
    defaultprinter: 'defaultPrinter',
    dictionary: 'dictionary',
    encodewithcoder: 'encodeWithCoder',
    horizontalpagination: 'horizontalPagination',
    imageablepagebounds: 'imageablePageBounds',
    init: 'init',
    initwithcoder: 'initWithCoder',
    initwithdictionary: 'initWithDictionary',
    ishorizontallycentered: 'isHorizontallyCentered',
    isselectiononly: 'isSelectionOnly',
    isverticallycentered: 'isVerticallyCentered',
    jobdisposition: 'jobDisposition',
    leftmargin: 'leftMargin',
    localizedpapername: 'localizedPaperName',
    orientation: 'orientation',
    papername: 'paperName',
    papersize: 'paperSize',
    pmpageformat: 'PMPageFormat',
    pmprintsession: 'PMPrintSession',
    pmprintsettings: 'PMPrintSettings',
    printer: 'printer',
    printsettings: 'printSettings',
    rightmargin: 'rightMargin',
    scalingfactor: 'scalingFactor',
    setupprintoperationdefaultvalues: 'setUpPrintOperationDefaultValues',
    sharedprintinfo: 'sharedPrintInfo',
    sizeforpapername: 'sizeForPaperName',
    takesettingsfrompdfinfo: 'takeSettingsFromPDFInfo',
    topmargin: 'topMargin',
    updatefrompmpageformat: 'updateFromPMPageFormat',
    updatefrompmprintsettings: 'updateFromPMPrintSettings',
    verticalpagination: 'verticalPagination',
  }

  // bottomMargin: number;
  // defaultPrinter: NSPrinter;
  // horizontalPagination: interop.Enum<typeof NSPrintingPaginationMode>;
  // readonly imageablePageBounds: CGRect;
  // isHorizontallyCentered: boolean;
  // isSelectionOnly: boolean;
  // isVerticallyCentered: boolean;
  // leftMargin: number;
  // readonly localizedPaperName: NSString;
  // orientation: interop.Enum<typeof NSPaperOrientation>;
  // paperSize: CGSize;
  // printer: NSPrinter;
  // readonly printSettings: NSMutableDictionary;
  // rightMargin: number;
  // scalingFactor: number;
  // sharedPrintInfo: NSPrintInfo;
  // topMargin: number;
  // verticalPagination: interop.Enum<typeof NSPrintingPaginationMode>;
}

export class HTMLNSTextFinderElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextFinder.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    cancelfindindicator: 'cancelFindIndicator',
    client: 'client',
    drawincrementalmatchhighlightinrect: 'drawIncrementalMatchHighlightInRect',
    encodewithcoder: 'encodeWithCoder',
    findbarcontainer: 'findBarContainer',
    findindicatorneedsupdate: 'findIndicatorNeedsUpdate',
    incrementalmatchranges: 'incrementalMatchRanges',
    incrementalsearchingshoulddimcontentview: 'incrementalSearchingShouldDimContentView',
    init: 'init',
    initwithcoder: 'initWithCoder',
    isincrementalsearchingenabled: 'isIncrementalSearchingEnabled',
    noteclientstringwillchange: 'noteClientStringWillChange',
    performaction: 'performAction',
    validateaction: 'validateAction',
  }

  // client: NSTextFinderClient;
  // findBarContainer: NSTextFinderBarContainer;
  // findIndicatorNeedsUpdate: boolean;
  // readonly incrementalMatchRanges: NSArray;
  // incrementalSearchingShouldDimContentView: boolean;
  // isIncrementalSearchingEnabled: boolean;
}

export class HTMLNSCollectionViewTransitionLayoutElement extends HTMLNSCollectionViewLayoutElement {
  readonly nativeObject = NSCollectionViewTransitionLayout.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    currentlayout: 'currentLayout',
    initwithcurrentlayoutnextlayout: 'initWithCurrentLayoutNextLayout',
    nextlayout: 'nextLayout',
    transitionprogress: 'transitionProgress',
    updatevalueforanimatedkey: 'updateValueForAnimatedKey',
    valueforanimatedkey: 'valueForAnimatedKey',
  }

  // readonly currentLayout: NSCollectionViewLayout;
  // readonly nextLayout: NSCollectionViewLayout;
  // transitionProgress: number;
}

export class HTMLNSToolbarItemGroupElement extends HTMLNSToolbarItemElement {
  readonly nativeObject = NSToolbarItemGroup.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    controlrepresentation: 'controlRepresentation',
    groupwithitemidentifierimagesselectionmodelabelstargetaction: 'groupWithItemIdentifierImagesSelectionModeLabelsTargetAction',
    groupwithitemidentifiertitlesselectionmodelabelstargetaction: 'groupWithItemIdentifierTitlesSelectionModeLabelsTargetAction',
    isselectedatindex: 'isSelectedAtIndex',
    selectedindex: 'selectedIndex',
    selectionmode: 'selectionMode',
    setselectedatindex: 'setSelectedAtIndex',
    subitems: 'subitems',
  }

  // controlRepresentation: interop.Enum<typeof NSToolbarItemGroupControlRepresentation>;
  // selectedIndex: number;
  // selectionMode: interop.Enum<typeof NSToolbarItemGroupSelectionMode>;
}

export class HTMLNSTableColumnElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTableColumn.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    datacell: 'dataCell',
    datacellforrow: 'dataCellForRow',
    encodewithcoder: 'encodeWithCoder',
    headercell: 'headerCell',
    headertooltip: 'headerToolTip',
    identifier: 'identifier',
    initwithcoder: 'initWithCoder',
    initwithidentifier: 'initWithIdentifier',
    iseditable: 'isEditable',
    ishidden: 'isHidden',
    isresizable: 'isResizable',
    maxwidth: 'maxWidth',
    minwidth: 'minWidth',
    resizingmask: 'resizingMask',
    setresizable: 'setResizable',
    sizetofit: 'sizeToFit',
    sortdescriptorprototype: 'sortDescriptorPrototype',
    tableview: 'tableView',
    title: 'title',
    width: 'width',
  }

  // dataCell: interop.Object;
  // headerCell: NSTableHeaderCell;
  // isEditable: boolean;
  // isHidden: boolean;
  // maxWidth: number;
  // minWidth: number;
  // resizingMask: interop.Enum<typeof NSTableColumnResizingOptions>;
  // sortDescriptorPrototype: NSSortDescriptor;
  // tableView: NSTableView;
  // width: number;
}

export class HTMLNSPICTImageRepElement extends HTMLNSImageRepElement {
  readonly nativeObject = NSPICTImageRep.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    boundingbox: 'boundingBox',
    imagerepwithdata: 'imageRepWithData',
    initwithdata: 'initWithData',
    pictrepresentation: 'PICTRepresentation',
  }

  // readonly boundingBox: CGRect;
  // readonly PICTRepresentation: NSData;
}

export class HTMLNSWorkspaceOpenConfigurationElement extends HTMLNSObjectElement {
  readonly nativeObject = NSWorkspaceOpenConfiguration.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    activates: 'activates',
    addstorecentitems: 'addsToRecentItems',
    allowsrunningapplicationsubstitution: 'allowsRunningApplicationSubstitution',
    appleevent: 'appleEvent',
    architecture: 'architecture',
    arguments: 'arguments',
    configuration: 'configuration',
    copywithzone: 'copyWithZone',
    createsnewapplicationinstance: 'createsNewApplicationInstance',
    environment: 'environment',
    hides: 'hides',
    hidesothers: 'hidesOthers',
    isforprinting: 'isForPrinting',
    promptsuserifneeded: 'promptsUserIfNeeded',
    requiresuniversallinks: 'requiresUniversalLinks',
  }

  // activates: boolean;
  // addsToRecentItems: boolean;
  // allowsRunningApplicationSubstitution: boolean;
  // appleEvent: NSAppleEventDescriptor;
  // architecture: number;
  // createsNewApplicationInstance: boolean;
  // hides: boolean;
  // hidesOthers: boolean;
  // isForPrinting: boolean;
  // promptsUserIfNeeded: boolean;
  // requiresUniversalLinks: boolean;
}

export class HTMLNSPredicateEditorRowTemplateElement extends HTMLNSObjectElement {
  readonly nativeObject = NSPredicateEditorRowTemplate.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    compoundtypes: 'compoundTypes',
    copywithzone: 'copyWithZone',
    displayablesubpredicatesofpredicate: 'displayableSubpredicatesOfPredicate',
    encodewithcoder: 'encodeWithCoder',
    initwithcoder: 'initWithCoder',
    initwithcompoundtypes: 'initWithCompoundTypes',
    initwithleftexpressionsrightexpressionattributetypemodifieroperatorsoptions: 'initWithLeftExpressionsRightExpressionAttributeTypeModifierOperatorsOptions',
    initwithleftexpressionsrightexpressionsmodifieroperatorsoptions: 'initWithLeftExpressionsRightExpressionsModifierOperatorsOptions',
    leftexpressions: 'leftExpressions',
    matchforpredicate: 'matchForPredicate',
    modifier: 'modifier',
    operators: 'operators',
    options: 'options',
    predicatewithsubpredicates: 'predicateWithSubpredicates',
    rightexpressionattributetype: 'rightExpressionAttributeType',
    rightexpressions: 'rightExpressions',
    setpredicate: 'setPredicate',
    templateswithattributekeypathsinentitydescription: 'templatesWithAttributeKeyPathsInEntityDescription',
    templateviews: 'templateViews',
  }

  // readonly compoundTypes: NSArray;
  // readonly leftExpressions: NSArray;
  // readonly modifier: interop.Enum<typeof NSComparisonPredicateModifier>;
  // readonly operators: NSArray;
  // readonly options: number;
  // readonly rightExpressionAttributeType: interop.Enum<typeof NSAttributeType>;
  // readonly rightExpressions: NSArray;
  // readonly templateViews: NSArray;
}

export class HTMLNSMediaLibraryBrowserControllerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSMediaLibraryBrowserController.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    frame: 'frame',
    isvisible: 'isVisible',
    medialibraries: 'mediaLibraries',
    sharedmedialibrarybrowsercontroller: 'sharedMediaLibraryBrowserController',
    togglepanel: 'togglePanel',
  }

  // frame: CGRect;
  // isVisible: boolean;
  // mediaLibraries: interop.Enum<typeof NSMediaLibrary>;
  // sharedMediaLibraryBrowserController: NSMediaLibraryBrowserController;
}

export class HTMLNSPathControlItemElement extends HTMLNSObjectElement {
  readonly nativeObject = NSPathControlItem.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    attributedtitle: 'attributedTitle',
    image: 'image',
    title: 'title',
    url: 'URL',
  }

  // attributedTitle: NSAttributedString;
  // image: NSImage;
  // readonly URL: NSURL;
}

export class HTMLNSSliderTouchBarItemElement extends HTMLNSTouchBarItemElement {
  // @ts-ignore
  readonly nativeObject = NSSliderTouchBarItem.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    action: 'action',
    customizationlabel: 'customizationLabel',
    doublevalue: 'doubleValue',
    label: 'label',
    maximumsliderwidth: 'maximumSliderWidth',
    maximumvalueaccessory: 'maximumValueAccessory',
    minimumsliderwidth: 'minimumSliderWidth',
    minimumvalueaccessory: 'minimumValueAccessory',
    slider: 'slider',
    target: 'target',
    valueaccessorywidth: 'valueAccessoryWidth',
    view: 'view',
  }

  // action: string;
  // doubleValue: number;
  // maximumSliderWidth: number;
  // maximumValueAccessory: NSSliderAccessory;
  // minimumSliderWidth: number;
  // minimumValueAccessory: NSSliderAccessory;
  // slider: NSSlider;
  // target: interop.Object;
  // valueAccessoryWidth: number;
  // readonly view: NSView;
}

export class HTMLNSTableHeaderCellElement extends HTMLNSTextFieldCellElement {
  readonly nativeObject = NSTableHeaderCell.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    drawsortindicatorwithframeinviewascendingpriority: 'drawSortIndicatorWithFrameInViewAscendingPriority',
    sortindicatorrectforbounds: 'sortIndicatorRectForBounds',
  }

}

export class HTMLNSMenuItemCellElement extends HTMLNSButtonCellElement {
  // @ts-ignore
  readonly nativeObject = NSMenuItemCell.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    calcsize: 'calcSize',
    drawborderandbackgroundwithframeinview: 'drawBorderAndBackgroundWithFrameInView',
    drawimagewithframeinview: 'drawImageWithFrameInView',
    drawkeyequivalentwithframeinview: 'drawKeyEquivalentWithFrameInView',
    drawseparatoritemwithframeinview: 'drawSeparatorItemWithFrameInView',
    drawstateimagewithframeinview: 'drawStateImageWithFrameInView',
    drawtitlewithframeinview: 'drawTitleWithFrameInView',
    imagewidth: 'imageWidth',
    inittextcell: 'initTextCell',
    initwithcoder: 'initWithCoder',
    keyequivalentrectforbounds: 'keyEquivalentRectForBounds',
    keyequivalentwidth: 'keyEquivalentWidth',
    menuitem: 'menuItem',
    needsdisplay: 'needsDisplay',
    needssizing: 'needsSizing',
    stateimagerectforbounds: 'stateImageRectForBounds',
    stateimagewidth: 'stateImageWidth',
    tag: 'tag',
    titlerectforbounds: 'titleRectForBounds',
    titlewidth: 'titleWidth',
  }

  // readonly imageWidth: number;
  // readonly keyEquivalentWidth: number;
  // menuItem: NSMenuItem;
  // needsDisplay: boolean;
  // needsSizing: boolean;
  // readonly stateImageWidth: number;
  // tag: number;
  // readonly titleWidth: number;
}

export class HTMLNSPanGestureRecognizerElement extends HTMLNSGestureRecognizerElement {
  readonly nativeObject = NSPanGestureRecognizer.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    buttonmask: 'buttonMask',
    encodewithcoder: 'encodeWithCoder',
    initwithcoder: 'initWithCoder',
    numberoftouchesrequired: 'numberOfTouchesRequired',
    settranslationinview: 'setTranslationInView',
    translationinview: 'translationInView',
    velocityinview: 'velocityInView',
  }

  // buttonMask: number;
  // numberOfTouchesRequired: number;
}

export class HTMLNSClickGestureRecognizerElement extends HTMLNSGestureRecognizerElement {
  readonly nativeObject = NSClickGestureRecognizer.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    buttonmask: 'buttonMask',
    encodewithcoder: 'encodeWithCoder',
    initwithcoder: 'initWithCoder',
    numberofclicksrequired: 'numberOfClicksRequired',
    numberoftouchesrequired: 'numberOfTouchesRequired',
  }

  // buttonMask: number;
  // numberOfClicksRequired: number;
  // numberOfTouchesRequired: number;
}

export class HTMLNSLayoutYAxisAnchorElement extends HTMLNSLayoutAnchorElement {
  readonly nativeObject = NSLayoutYAxisAnchor.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    anchorwithoffsettoanchor: 'anchorWithOffsetToAnchor',
    constraintequaltosystemspacingbelowanchormultiplier: 'constraintEqualToSystemSpacingBelowAnchorMultiplier',
    constraintgreaterthanorequaltosystemspacingbelowanchormultiplier: 'constraintGreaterThanOrEqualToSystemSpacingBelowAnchorMultiplier',
    constraintlessthanorequaltosystemspacingbelowanchormultiplier: 'constraintLessThanOrEqualToSystemSpacingBelowAnchorMultiplier',
  }

}

export class HTMLNSMagnificationGestureRecognizerElement extends HTMLNSGestureRecognizerElement {
  readonly nativeObject = NSMagnificationGestureRecognizer.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    magnification: 'magnification',
  }

  // magnification: number;
}

export class HTMLNSImageCellElement extends HTMLNSCellElement {
  readonly nativeObject = NSImageCell.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    copywithzone: 'copyWithZone',
    encodewithcoder: 'encodeWithCoder',
    imagealignment: 'imageAlignment',
    imageframestyle: 'imageFrameStyle',
    imagescaling: 'imageScaling',
    initwithcoder: 'initWithCoder',
  }

  // imageAlignment: interop.Enum<typeof NSImageAlignment>;
  // imageFrameStyle: interop.Enum<typeof NSImageFrameStyle>;
  // imageScaling: interop.Enum<typeof NSImageScaling>;
}

export class HTMLNSSearchToolbarItemElement extends HTMLNSToolbarItemElement {
  readonly nativeObject = NSSearchToolbarItem.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    beginsearchinteraction: 'beginSearchInteraction',
    endsearchinteraction: 'endSearchInteraction',
    preferredwidthforsearchfield: 'preferredWidthForSearchField',
    resignsfirstresponderwithcancel: 'resignsFirstResponderWithCancel',
    searchfield: 'searchField',
  }

  // preferredWidthForSearchField: number;
  // resignsFirstResponderWithCancel: boolean;
  // searchField: NSSearchField;
}

export class HTMLNSPickerTouchBarItemElement extends HTMLNSTouchBarItemElement {
  // @ts-ignore
  readonly nativeObject = NSPickerTouchBarItem.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    action: 'action',
    collapsedrepresentationimage: 'collapsedRepresentationImage',
    collapsedrepresentationlabel: 'collapsedRepresentationLabel',
    controlrepresentation: 'controlRepresentation',
    customizationlabel: 'customizationLabel',
    imageatindex: 'imageAtIndex',
    isenabled: 'isEnabled',
    isenabledatindex: 'isEnabledAtIndex',
    labelatindex: 'labelAtIndex',
    numberofoptions: 'numberOfOptions',
    pickertouchbaritemwithidentifierimagesselectionmodetargetaction: 'pickerTouchBarItemWithIdentifierImagesSelectionModeTargetAction',
    pickertouchbaritemwithidentifierlabelsselectionmodetargetaction: 'pickerTouchBarItemWithIdentifierLabelsSelectionModeTargetAction',
    selectedindex: 'selectedIndex',
    selectioncolor: 'selectionColor',
    selectionmode: 'selectionMode',
    setenabledatindex: 'setEnabledAtIndex',
    setimageatindex: 'setImageAtIndex',
    setlabelatindex: 'setLabelAtIndex',
    target: 'target',
  }

  // action: string;
  // collapsedRepresentationImage: NSImage;
  // controlRepresentation: interop.Enum<typeof NSPickerTouchBarItemControlRepresentation>;
  // isEnabled: boolean;
  // numberOfOptions: number;
  // selectedIndex: number;
  // selectionColor: NSColor;
  // selectionMode: interop.Enum<typeof NSPickerTouchBarItemSelectionMode>;
  // target: interop.Object;
}

export class HTMLNSArrayControllerElement extends HTMLNSObjectControllerElement {
  readonly nativeObject = NSArrayController.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    add: 'add',
    addobject: 'addObject',
    addobjects: 'addObjects',
    addselectedobjects: 'addSelectedObjects',
    addselectionindexes: 'addSelectionIndexes',
    alwaysusesmultiplevaluesmarker: 'alwaysUsesMultipleValuesMarker',
    arrangedobjects: 'arrangedObjects',
    arrangeobjects: 'arrangeObjects',
    automaticallyrearrangesobjects: 'automaticallyRearrangesObjects',
    automaticrearrangementkeypaths: 'automaticRearrangementKeyPaths',
    avoidsemptyselection: 'avoidsEmptySelection',
    caninsert: 'canInsert',
    canselectnext: 'canSelectNext',
    canselectprevious: 'canSelectPrevious',
    clearsfilterpredicateoninsertion: 'clearsFilterPredicateOnInsertion',
    didchangearrangementcriteria: 'didChangeArrangementCriteria',
    filterpredicate: 'filterPredicate',
    insert: 'insert',
    insertobjectatarrangedobjectindex: 'insertObjectAtArrangedObjectIndex',
    insertobjectsatarrangedobjectindexes: 'insertObjectsAtArrangedObjectIndexes',
    preservesselection: 'preservesSelection',
    rearrangeobjects: 'rearrangeObjects',
    remove: 'remove',
    removeobject: 'removeObject',
    removeobjectatarrangedobjectindex: 'removeObjectAtArrangedObjectIndex',
    removeobjects: 'removeObjects',
    removeobjectsatarrangedobjectindexes: 'removeObjectsAtArrangedObjectIndexes',
    removeselectedobjects: 'removeSelectedObjects',
    removeselectionindexes: 'removeSelectionIndexes',
    selectedobjects: 'selectedObjects',
    selectionindex: 'selectionIndex',
    selectionindexes: 'selectionIndexes',
    selectnext: 'selectNext',
    selectprevious: 'selectPrevious',
    selectsinsertedobjects: 'selectsInsertedObjects',
    sortdescriptors: 'sortDescriptors',
  }

  // alwaysUsesMultipleValuesMarker: boolean;
  // readonly arrangedObjects: interop.Object;
  // automaticallyRearrangesObjects: boolean;
  // readonly automaticRearrangementKeyPaths: NSArray;
  // avoidsEmptySelection: boolean;
  // readonly canInsert: boolean;
  // readonly canSelectNext: boolean;
  // readonly canSelectPrevious: boolean;
  // clearsFilterPredicateOnInsertion: boolean;
  // filterPredicate: NSPredicate;
  // preservesSelection: boolean;
  // readonly selectedObjects: NSArray;
  // readonly selectionIndex: number;
  // readonly selectionIndexes: NSIndexSet;
  // selectsInsertedObjects: boolean;
}

export class HTMLNSGridViewElement extends HTMLNSViewElement {
  readonly nativeObject = NSGridView.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    addcolumnwithviews: 'addColumnWithViews',
    addrowwithviews: 'addRowWithViews',
    cellatcolumnindexrowindex: 'cellAtColumnIndexRowIndex',
    cellforview: 'cellForView',
    columnatindex: 'columnAtIndex',
    columnspacing: 'columnSpacing',
    gridviewwithnumberofcolumnsrows: 'gridViewWithNumberOfColumnsRows',
    gridviewwithviews: 'gridViewWithViews',
    indexofcolumn: 'indexOfColumn',
    indexofrow: 'indexOfRow',
    initwithcoder: 'initWithCoder',
    initwithframe: 'initWithFrame',
    insertcolumnatindexwithviews: 'insertColumnAtIndexWithViews',
    insertrowatindexwithviews: 'insertRowAtIndexWithViews',
    mergecellsinhorizontalrangeverticalrange: 'mergeCellsInHorizontalRangeVerticalRange',
    movecolumnatindextoindex: 'moveColumnAtIndexToIndex',
    moverowatindextoindex: 'moveRowAtIndexToIndex',
    numberofcolumns: 'numberOfColumns',
    numberofrows: 'numberOfRows',
    removecolumnatindex: 'removeColumnAtIndex',
    removerowatindex: 'removeRowAtIndex',
    rowalignment: 'rowAlignment',
    rowatindex: 'rowAtIndex',
    rowspacing: 'rowSpacing',
    xplacement: 'xPlacement',
    yplacement: 'yPlacement',
  }

  // columnSpacing: number;
  // readonly numberOfColumns: number;
  // readonly numberOfRows: number;
  // rowAlignment: interop.Enum<typeof NSGridRowAlignment>;
  // rowSpacing: number;
  // xPlacement: interop.Enum<typeof NSGridCellPlacement>;
  // yPlacement: interop.Enum<typeof NSGridCellPlacement>;
}

export class HTMLNSSplitViewElement extends HTMLNSViewElement {
  readonly nativeObject = NSSplitView.new();
  get delegate(): NSSplitViewDelegateImpl {
    return (this.nativeObject.delegate ??= NSSplitViewDelegateImpl.new()) as NSSplitViewDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    addarrangedsubview: 'addArrangedSubview',
    adjustsubviews: 'adjustSubviews',
    arrangedsubviews: 'arrangedSubviews',
    arrangesallsubviews: 'arrangesAllSubviews',
    autosavename: 'autosaveName',
    delegate: 'delegate',
    dividercolor: 'dividerColor',
    dividerstyle: 'dividerStyle',
    dividerthickness: 'dividerThickness',
    drawdividerinrect: 'drawDividerInRect',
    holdingpriorityforsubviewatindex: 'holdingPriorityForSubviewAtIndex',
    insertarrangedsubviewatindex: 'insertArrangedSubviewAtIndex',
    ispanesplitter: 'isPaneSplitter',
    issubviewcollapsed: 'isSubviewCollapsed',
    isvertical: 'isVertical',
    maxpossiblepositionofdivideratindex: 'maxPossiblePositionOfDividerAtIndex',
    minpossiblepositionofdivideratindex: 'minPossiblePositionOfDividerAtIndex',
    removearrangedsubview: 'removeArrangedSubview',
    setholdingpriorityforsubviewatindex: 'setHoldingPriorityForSubviewAtIndex',
    setispanesplitter: 'setIsPaneSplitter',
    setpositionofdivideratindex: 'setPositionOfDividerAtIndex',
  }

  // readonly arrangedSubviews: NSArray;
  // arrangesAllSubviews: boolean;
  // readonly dividerColor: NSColor;
  // dividerStyle: interop.Enum<typeof NSSplitViewDividerStyle>;
  // readonly dividerThickness: number;
  // isVertical: boolean;

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
  readonly nativeObject = NSLayoutDimension.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    constraintequaltoanchormultiplier: 'constraintEqualToAnchorMultiplier',
    constraintequaltoanchormultiplierconstant: 'constraintEqualToAnchorMultiplierConstant',
    constraintequaltoconstant: 'constraintEqualToConstant',
    constraintgreaterthanorequaltoanchormultiplier: 'constraintGreaterThanOrEqualToAnchorMultiplier',
    constraintgreaterthanorequaltoanchormultiplierconstant: 'constraintGreaterThanOrEqualToAnchorMultiplierConstant',
    constraintgreaterthanorequaltoconstant: 'constraintGreaterThanOrEqualToConstant',
    constraintlessthanorequaltoanchormultiplier: 'constraintLessThanOrEqualToAnchorMultiplier',
    constraintlessthanorequaltoanchormultiplierconstant: 'constraintLessThanOrEqualToAnchorMultiplierConstant',
    constraintlessthanorequaltoconstant: 'constraintLessThanOrEqualToConstant',
  }

}

export class HTMLNSDatePickerCellElement extends HTMLNSActionCellElement {
  readonly nativeObject = NSDatePickerCell.new();
  get delegate(): NSDatePickerCellDelegateImpl {
    return (this.nativeObject.delegate ??= NSDatePickerCellDelegateImpl.new()) as NSDatePickerCellDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    backgroundcolor: 'backgroundColor',
    calendar: 'calendar',
    datepickerelements: 'datePickerElements',
    datepickermode: 'datePickerMode',
    datepickerstyle: 'datePickerStyle',
    datevalue: 'dateValue',
    delegate: 'delegate',
    drawsbackground: 'drawsBackground',
    inittextcell: 'initTextCell',
    initwithcoder: 'initWithCoder',
    locale: 'locale',
    maxdate: 'maxDate',
    mindate: 'minDate',
    textcolor: 'textColor',
    timeinterval: 'timeInterval',
    timezone: 'timeZone',
  }

  // backgroundColor: NSColor;
  // calendar: NSCalendar;
  // datePickerElements: interop.Enum<typeof NSDatePickerElementFlags>;
  // datePickerMode: interop.Enum<typeof NSDatePickerMode>;
  // datePickerStyle: interop.Enum<typeof NSDatePickerStyle>;
  // dateValue: NSDate;
  // drawsBackground: boolean;
  // locale: NSLocale;
  // maxDate: NSDate;
  // minDate: NSDate;
  // textColor: NSColor;
  // timeInterval: number;
  // timeZone: NSTimeZone;

  set datepickercellvalidateproposeddatevaluetimeinterval(value: (datePickerCell: NSDatePickerCell, proposedDateValue: interop.PointerConvertible, proposedTimeInterval: interop.PointerConvertible) => void) {
    this.delegate.datePickerCellValidateProposedDateValueTimeInterval = value;
  }
}

export class HTMLNSViewControllerElement extends HTMLNSResponderElement {
  readonly nativeObject = NSViewController.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    addchildviewcontroller: 'addChildViewController',
    autorelease: 'autorelease',
    childviewcontrollers: 'childViewControllers',
    class: 'class',
    commitediting: 'commitEditing',
    commiteditingandreturnerror: 'commitEditingAndReturnError',
    commiteditingwithdelegatedidcommitselectorcontextinfo: 'commitEditingWithDelegateDidCommitSelectorContextInfo',
    conformstoprotocol: 'conformsToProtocol',
    debugdescription: 'debugDescription',
    description: 'description',
    discardediting: 'discardEditing',
    dismisscontroller: 'dismissController',
    dismissviewcontroller: 'dismissViewController',
    extensioncontext: 'extensionContext',
    hash: 'hash',
    identifier: 'identifier',
    initwithcoder: 'initWithCoder',
    initwithnibnamebundle: 'initWithNibNameBundle',
    insertchildviewcontrolleratindex: 'insertChildViewControllerAtIndex',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    isviewloaded: 'isViewLoaded',
    loadview: 'loadView',
    loadviewifneeded: 'loadViewIfNeeded',
    nibbundle: 'nibBundle',
    nibname: 'nibName',
    parentviewcontroller: 'parentViewController',
    performseguewithidentifiersender: 'performSegueWithIdentifierSender',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    preferredcontentsize: 'preferredContentSize',
    preferredcontentsizedidchangeforviewcontroller: 'preferredContentSizeDidChangeForViewController',
    preferredmaximumsize: 'preferredMaximumSize',
    preferredminimumsize: 'preferredMinimumSize',
    preferredscreenorigin: 'preferredScreenOrigin',
    prepareforseguesender: 'prepareForSegueSender',
    presentedviewcontrollers: 'presentedViewControllers',
    presentingviewcontroller: 'presentingViewController',
    presentviewcontrolleranimator: 'presentViewControllerAnimator',
    presentviewcontrollerasmodalwindow: 'presentViewControllerAsModalWindow',
    presentviewcontrolleraspopoverrelativetorectofviewpreferrededgebehavior: 'presentViewControllerAsPopoverRelativeToRectOfViewPreferredEdgeBehavior',
    presentviewcontrolleraspopoverrelativetorectofviewpreferrededgebehaviorhasfullsizecontent: 'presentViewControllerAsPopoverRelativeToRectOfViewPreferredEdgeBehaviorHasFullSizeContent',
    presentviewcontrollerassheet: 'presentViewControllerAsSheet',
    release: 'release',
    removechildviewcontrolleratindex: 'removeChildViewControllerAtIndex',
    removefromparentviewcontroller: 'removeFromParentViewController',
    representedobject: 'representedObject',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    self: 'self',
    shouldperformseguewithidentifiersender: 'shouldPerformSegueWithIdentifierSender',
    sourceitemview: 'sourceItemView',
    storyboard: 'storyboard',
    superclass: 'superclass',
    title: 'title',
    transitionfromviewcontrollertoviewcontrolleroptionscompletionhandler: 'transitionFromViewControllerToViewControllerOptionsCompletionHandler',
    updateviewconstraints: 'updateViewConstraints',
    view: 'view',
    viewdidappear: 'viewDidAppear',
    viewdiddisappear: 'viewDidDisappear',
    viewdidlayout: 'viewDidLayout',
    viewdidload: 'viewDidLoad',
    viewifloaded: 'viewIfLoaded',
    viewwillappear: 'viewWillAppear',
    viewwilldisappear: 'viewWillDisappear',
    viewwilllayout: 'viewWillLayout',
    viewwilltransitiontosize: 'viewWillTransitionToSize',
    zone: 'zone',
  }

  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // readonly extensionContext: NSExtensionContext;
  // readonly hash: number;
  // readonly isProxy: boolean;
  // readonly isViewLoaded: boolean;
  // readonly nibBundle: NSBundle;
  // readonly nibName: NSString;
  // readonly parentViewController: NSViewController;
  // preferredContentSize: CGSize;
  // readonly preferredMaximumSize: CGSize;
  // readonly preferredMinimumSize: CGSize;
  // preferredScreenOrigin: CGPoint;
  // readonly presentedViewControllers: NSArray;
  // readonly presentingViewController: NSViewController;
  // representedObject: interop.Object;
  // sourceItemView: NSView;
  // readonly storyboard: NSStoryboard;
  // readonly superclass: interop.Object;
  // view: NSView;
  // readonly viewIfLoaded: NSView;
  // readonly zone: interop.Pointer;
}

export class HTMLNSPressGestureRecognizerElement extends HTMLNSGestureRecognizerElement {
  readonly nativeObject = NSPressGestureRecognizer.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    allowablemovement: 'allowableMovement',
    buttonmask: 'buttonMask',
    encodewithcoder: 'encodeWithCoder',
    initwithcoder: 'initWithCoder',
    minimumpressduration: 'minimumPressDuration',
    numberoftouchesrequired: 'numberOfTouchesRequired',
  }

  // allowableMovement: number;
  // buttonMask: number;
  // minimumPressDuration: number;
  // numberOfTouchesRequired: number;
}

export class HTMLNSPopUpButtonCellElement extends HTMLNSMenuItemCellElement {
  readonly nativeObject = NSPopUpButtonCell.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    additemswithtitles: 'addItemsWithTitles',
    additemwithtitle: 'addItemWithTitle',
    altersstateofselecteditem: 'altersStateOfSelectedItem',
    arrowposition: 'arrowPosition',
    attachpopupwithframeinview: 'attachPopUpWithFrameInView',
    autoenablesitems: 'autoenablesItems',
    autorelease: 'autorelease',
    class: 'class',
    conformstoprotocol: 'conformsToProtocol',
    debugdescription: 'debugDescription',
    description: 'description',
    dismisspopup: 'dismissPopUp',
    hash: 'hash',
    indexofitem: 'indexOfItem',
    indexofitemwithrepresentedobject: 'indexOfItemWithRepresentedObject',
    indexofitemwithtag: 'indexOfItemWithTag',
    indexofitemwithtargetandaction: 'indexOfItemWithTargetAndAction',
    indexofitemwithtitle: 'indexOfItemWithTitle',
    indexofselecteditem: 'indexOfSelectedItem',
    inittextcellpullsdown: 'initTextCellPullsDown',
    initwithcoder: 'initWithCoder',
    insertitemwithtitleatindex: 'insertItemWithTitleAtIndex',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    itemarray: 'itemArray',
    itematindex: 'itemAtIndex',
    itemtitleatindex: 'itemTitleAtIndex',
    itemtitles: 'itemTitles',
    itemwithtitle: 'itemWithTitle',
    lastitem: 'lastItem',
    menu: 'menu',
    numberofitems: 'numberOfItems',
    performclickwithframeinview: 'performClickWithFrameInView',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    preferrededge: 'preferredEdge',
    pullsdown: 'pullsDown',
    release: 'release',
    removeallitems: 'removeAllItems',
    removeitematindex: 'removeItemAtIndex',
    removeitemwithtitle: 'removeItemWithTitle',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    selecteditem: 'selectedItem',
    selectitem: 'selectItem',
    selectitematindex: 'selectItemAtIndex',
    selectitemwithtag: 'selectItemWithTag',
    selectitemwithtitle: 'selectItemWithTitle',
    self: 'self',
    settitle: 'setTitle',
    superclass: 'superclass',
    synchronizetitleandselecteditem: 'synchronizeTitleAndSelectedItem',
    titleofselecteditem: 'titleOfSelectedItem',
    usesitemfrommenu: 'usesItemFromMenu',
    validatemenuitem: 'validateMenuItem',
    zone: 'zone',
  }

  // altersStateOfSelectedItem: boolean;
  // arrowPosition: interop.Enum<typeof NSPopUpArrowPosition>;
  // autoenablesItems: boolean;
  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // readonly hash: number;
  // readonly indexOfSelectedItem: number;
  // readonly isProxy: boolean;
  // readonly itemArray: NSArray;
  // readonly itemTitles: NSArray;
  // readonly lastItem: NSMenuItem;
  // menu: NSMenu;
  // readonly numberOfItems: number;
  // preferredEdge: interop.Enum<typeof NSRectEdge>;
  // pullsDown: boolean;
  // readonly selectedItem: NSMenuItem;
  // readonly superclass: interop.Object;
  // readonly titleOfSelectedItem: NSString;
  // usesItemFromMenu: boolean;
  // readonly zone: interop.Pointer;
}

export class HTMLNSTextElement extends HTMLNSViewElement {
  // @ts-ignore
  readonly nativeObject = NSText.new();
  get delegate(): NSTextDelegateImpl {
    return (this.nativeObject.delegate ??= NSTextDelegateImpl.new()) as NSTextDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    aligncenter: 'alignCenter',
    alignleft: 'alignLeft',
    alignment: 'alignment',
    alignright: 'alignRight',
    backgroundcolor: 'backgroundColor',
    basewritingdirection: 'baseWritingDirection',
    changefont: 'changeFont',
    changespelling: 'changeSpelling',
    checkspelling: 'checkSpelling',
    copy: 'copy',
    copyfont: 'copyFont',
    copyruler: 'copyRuler',
    cut: 'cut',
    delegate: 'delegate',
    delete: 'delete',
    drawsbackground: 'drawsBackground',
    font: 'font',
    ignorespelling: 'ignoreSpelling',
    importsgraphics: 'importsGraphics',
    initwithcoder: 'initWithCoder',
    initwithframe: 'initWithFrame',
    iseditable: 'isEditable',
    isfieldeditor: 'isFieldEditor',
    ishorizontallyresizable: 'isHorizontallyResizable',
    isrichtext: 'isRichText',
    isrulervisible: 'isRulerVisible',
    isselectable: 'isSelectable',
    isverticallyresizable: 'isVerticallyResizable',
    maxsize: 'maxSize',
    minsize: 'minSize',
    paste: 'paste',
    pastefont: 'pasteFont',
    pasteruler: 'pasteRuler',
    readrtfdfromfile: 'readRTFDFromFile',
    replacecharactersinrangewithrtf: 'replaceCharactersInRangeWithRTF',
    replacecharactersinrangewithrtfd: 'replaceCharactersInRangeWithRTFD',
    replacecharactersinrangewithstring: 'replaceCharactersInRangeWithString',
    rtfdfromrange: 'RTFDFromRange',
    rtffromrange: 'RTFFromRange',
    scrollrangetovisible: 'scrollRangeToVisible',
    selectall: 'selectAll',
    selectedrange: 'selectedRange',
    setfontrange: 'setFontRange',
    settextcolorrange: 'setTextColorRange',
    showguesspanel: 'showGuessPanel',
    sizetofit: 'sizeToFit',
    string: 'string',
    subscript: 'subscript',
    superscript: 'superscript',
    textcolor: 'textColor',
    toggleruler: 'toggleRuler',
    underline: 'underline',
    unscript: 'unscript',
    usesfontpanel: 'usesFontPanel',
    writertfdtofileatomically: 'writeRTFDToFileAtomically',
  }

  // alignment: interop.Enum<typeof NSTextAlignment>;
  // backgroundColor: NSColor;
  // baseWritingDirection: interop.Enum<typeof NSWritingDirection>;
  // drawsBackground: boolean;
  // font: NSFont;
  // importsGraphics: boolean;
  // isEditable: boolean;
  // isFieldEditor: boolean;
  // isHorizontallyResizable: boolean;
  // isRichText: boolean;
  // readonly isRulerVisible: boolean;
  // isSelectable: boolean;
  // isVerticallyResizable: boolean;
  // maxSize: CGSize;
  // minSize: CGSize;
  // selectedRange: _NSRange;
  // textColor: NSColor;
  // usesFontPanel: boolean;

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
  readonly nativeObject = NSDiffableDataSourceSnapshot.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    appenditemswithidentifiers: 'appendItemsWithIdentifiers',
    appenditemswithidentifiersintosectionwithidentifier: 'appendItemsWithIdentifiersIntoSectionWithIdentifier',
    appendsectionswithidentifiers: 'appendSectionsWithIdentifiers',
    copywithzone: 'copyWithZone',
    deleteallitems: 'deleteAllItems',
    deleteitemswithidentifiers: 'deleteItemsWithIdentifiers',
    deletesectionswithidentifiers: 'deleteSectionsWithIdentifiers',
    indexofitemidentifier: 'indexOfItemIdentifier',
    indexofsectionidentifier: 'indexOfSectionIdentifier',
    insertitemswithidentifiersafteritemwithidentifier: 'insertItemsWithIdentifiersAfterItemWithIdentifier',
    insertitemswithidentifiersbeforeitemwithidentifier: 'insertItemsWithIdentifiersBeforeItemWithIdentifier',
    insertsectionswithidentifiersaftersectionwithidentifier: 'insertSectionsWithIdentifiersAfterSectionWithIdentifier',
    insertsectionswithidentifiersbeforesectionwithidentifier: 'insertSectionsWithIdentifiersBeforeSectionWithIdentifier',
    itemidentifiers: 'itemIdentifiers',
    itemidentifiersinsectionwithidentifier: 'itemIdentifiersInSectionWithIdentifier',
    moveitemwithidentifierafteritemwithidentifier: 'moveItemWithIdentifierAfterItemWithIdentifier',
    moveitemwithidentifierbeforeitemwithidentifier: 'moveItemWithIdentifierBeforeItemWithIdentifier',
    movesectionwithidentifieraftersectionwithidentifier: 'moveSectionWithIdentifierAfterSectionWithIdentifier',
    movesectionwithidentifierbeforesectionwithidentifier: 'moveSectionWithIdentifierBeforeSectionWithIdentifier',
    numberofitems: 'numberOfItems',
    numberofitemsinsection: 'numberOfItemsInSection',
    numberofsections: 'numberOfSections',
    reloaditemswithidentifiers: 'reloadItemsWithIdentifiers',
    reloadsectionswithidentifiers: 'reloadSectionsWithIdentifiers',
    sectionidentifierforsectioncontainingitemidentifier: 'sectionIdentifierForSectionContainingItemIdentifier',
    sectionidentifiers: 'sectionIdentifiers',
  }

  // readonly itemIdentifiers: NSArray;
  // readonly numberOfItems: number;
  // readonly numberOfSections: number;
  // readonly sectionIdentifiers: NSArray;
}

export class HTMLNSTextViewportLayoutControllerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextViewportLayoutController.new();
  get delegate(): NSTextViewportLayoutControllerDelegateImpl {
    return (this.nativeObject.delegate ??= NSTextViewportLayoutControllerDelegateImpl.new()) as NSTextViewportLayoutControllerDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    adjustviewportbyverticaloffset: 'adjustViewportByVerticalOffset',
    delegate: 'delegate',
    initwithtextlayoutmanager: 'initWithTextLayoutManager',
    layoutviewport: 'layoutViewport',
    relocateviewporttotextlocation: 'relocateViewportToTextLocation',
    textlayoutmanager: 'textLayoutManager',
    viewportbounds: 'viewportBounds',
    viewportrange: 'viewportRange',
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
  readonly nativeObject = NSTintConfiguration.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    adaptstouseraccentcolor: 'adaptsToUserAccentColor',
    basetintcolor: 'baseTintColor',
    copywithzone: 'copyWithZone',
    defaulttintconfiguration: 'defaultTintConfiguration',
    encodewithcoder: 'encodeWithCoder',
    equivalentcontenttintcolor: 'equivalentContentTintColor',
    initwithcoder: 'initWithCoder',
    monochrometintconfiguration: 'monochromeTintConfiguration',
    supportssecurecoding: 'supportsSecureCoding',
    tintconfigurationwithfixedcolor: 'tintConfigurationWithFixedColor',
    tintconfigurationwithpreferredcolor: 'tintConfigurationWithPreferredColor',
  }

  // readonly adaptsToUserAccentColor: boolean;
  // readonly baseTintColor: NSColor;
  // defaultTintConfiguration: NSTintConfiguration;
  // readonly equivalentContentTintColor: NSColor;
  // monochromeTintConfiguration: NSTintConfiguration;
  // supportsSecureCoding: boolean;
}

export class HTMLNSUserDefaultsControllerElement extends HTMLNSControllerElement {
  readonly nativeObject = NSUserDefaultsController.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    appliesimmediately: 'appliesImmediately',
    defaults: 'defaults',
    hasunappliedchanges: 'hasUnappliedChanges',
    initialvalues: 'initialValues',
    initwithcoder: 'initWithCoder',
    initwithdefaultsinitialvalues: 'initWithDefaultsInitialValues',
    revert: 'revert',
    reverttoinitialvalues: 'revertToInitialValues',
    save: 'save',
    shareduserdefaultscontroller: 'sharedUserDefaultsController',
    values: 'values',
  }

  // appliesImmediately: boolean;
  // readonly defaults: NSUserDefaults;
  // readonly hasUnappliedChanges: boolean;
  // sharedUserDefaultsController: NSUserDefaultsController;
  // readonly values: interop.Object;
}

export class HTMLNSOpenGLContextElement extends HTMLNSObjectElement {
  readonly nativeObject = NSOpenGLContext.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    cglcontextobj: 'CGLContextObj',
    clearcurrentcontext: 'clearCurrentContext',
    cleardrawable: 'clearDrawable',
    copyattributesfromcontextwithmask: 'copyAttributesFromContextWithMask',
    createtexturefromviewinternalformat: 'createTextureFromViewInternalFormat',
    currentcontext: 'currentContext',
    currentvirtualscreen: 'currentVirtualScreen',
    flushbuffer: 'flushBuffer',
    getvaluesforparameter: 'getValuesForParameter',
    initwithcglcontextobj: 'initWithCGLContextObj',
    initwithformatsharecontext: 'initWithFormatShareContext',
    lock: 'lock',
    makecurrentcontext: 'makeCurrentContext',
    pixelbuffer: 'pixelBuffer',
    pixelbuffercubemapface: 'pixelBufferCubeMapFace',
    pixelbuffermipmaplevel: 'pixelBufferMipMapLevel',
    pixelformat: 'pixelFormat',
    setfullscreen: 'setFullScreen',
    setoffscreenwidthheightrowbytes: 'setOffScreenWidthHeightRowbytes',
    setpixelbuffercubemapfacemipmaplevelcurrentvirtualscreen: 'setPixelBufferCubeMapFaceMipMapLevelCurrentVirtualScreen',
    settextureimagetopixelbuffercolorbuffer: 'setTextureImageToPixelBufferColorBuffer',
    setvaluesforparameter: 'setValuesForParameter',
    unlock: 'unlock',
    update: 'update',
    view: 'view',
  }

  // readonly CGLContextObj: interop.Pointer;
  // currentContext: NSOpenGLContext;
  // currentVirtualScreen: number;
  // readonly pixelFormat: NSOpenGLPixelFormat;
  // view: NSView;
}

export class HTMLNSProgressIndicatorElement extends HTMLNSViewElement {
  // @ts-ignore
  readonly nativeObject = NSProgressIndicator.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    accessibilityframe: 'accessibilityFrame',
    accessibilityidentifier: 'accessibilityIdentifier',
    accessibilityparent: 'accessibilityParent',
    accessibilityvalue: 'accessibilityValue',
    animate: 'animate',
    animationdelay: 'animationDelay',
    autorelease: 'autorelease',
    class: 'class',
    conformstoprotocol: 'conformsToProtocol',
    controlsize: 'controlSize',
    controltint: 'controlTint',
    debugdescription: 'debugDescription',
    description: 'description',
    doublevalue: 'doubleValue',
    hash: 'hash',
    incrementby: 'incrementBy',
    isaccessibilityfocused: 'isAccessibilityFocused',
    isbezeled: 'isBezeled',
    isdisplayedwhenstopped: 'isDisplayedWhenStopped',
    isequal: 'isEqual',
    isindeterminate: 'isIndeterminate',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    maxvalue: 'maxValue',
    minvalue: 'minValue',
    observedprogress: 'observedProgress',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    release: 'release',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    self: 'self',
    setanimationdelay: 'setAnimationDelay',
    sizetofit: 'sizeToFit',
    startanimation: 'startAnimation',
    stopanimation: 'stopAnimation',
    style: 'style',
    superclass: 'superclass',
    usesthreadedanimation: 'usesThreadedAnimation',
    zone: 'zone',
  }

  // accessibilityFrame: CGRect;
  // accessibilityParent: interop.Object;
  // accessibilityValue: NSNumber;
  // controlSize: interop.Enum<typeof NSControlSize>;
  // controlTint: interop.Enum<typeof NSControlTint>;
  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // doubleValue: number;
  // readonly hash: number;
  // isAccessibilityFocused: boolean;
  // isBezeled: boolean;
  // isDisplayedWhenStopped: boolean;
  // isIndeterminate: boolean;
  // readonly isProxy: boolean;
  // maxValue: number;
  // minValue: number;
  // observedProgress: NSProgress;
  // style: interop.Enum<typeof NSProgressIndicatorStyle>;
  // readonly superclass: interop.Object;
  // usesThreadedAnimation: boolean;
  // readonly zone: interop.Pointer;
}

export class HTMLNSScrubberArrangedViewElement extends HTMLNSViewElement {
  readonly nativeObject = NSScrubberArrangedView.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    applylayoutattributes: 'applyLayoutAttributes',
    ishighlighted: 'isHighlighted',
    isselected: 'isSelected',
  }

  // isHighlighted: boolean;
  // isSelected: boolean;
}

export class HTMLNSLayoutConstraintElement extends HTMLNSObjectElement {
  readonly nativeObject = NSLayoutConstraint.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    activateconstraints: 'activateConstraints',
    constant: 'constant',
    constraintswithvisualformatoptionsmetricsviews: 'constraintsWithVisualFormatOptionsMetricsViews',
    constraintwithitemattributerelatedbytoitemattributemultiplierconstant: 'constraintWithItemAttributeRelatedByToItemAttributeMultiplierConstant',
    deactivateconstraints: 'deactivateConstraints',
    firstanchor: 'firstAnchor',
    firstattribute: 'firstAttribute',
    firstitem: 'firstItem',
    identifier: 'identifier',
    isactive: 'isActive',
    multiplier: 'multiplier',
    priority: 'priority',
    relation: 'relation',
    secondanchor: 'secondAnchor',
    secondattribute: 'secondAttribute',
    seconditem: 'secondItem',
    shouldbearchived: 'shouldBeArchived',
  }

  // constant: number;
  // readonly firstAnchor: NSLayoutAnchor;
  // readonly firstAttribute: interop.Enum<typeof NSLayoutAttribute>;
  // readonly firstItem: interop.Object;
  // isActive: boolean;
  // readonly multiplier: number;
  // priority: number;
  // readonly relation: interop.Enum<typeof NSLayoutRelation>;
  // readonly secondAnchor: NSLayoutAnchor;
  // readonly secondAttribute: interop.Enum<typeof NSLayoutAttribute>;
  // readonly secondItem: interop.Object;
  // shouldBeArchived: boolean;
}

export class HTMLNSSpeechSynthesizerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSSpeechSynthesizer.new();
  get delegate(): NSSpeechSynthesizerDelegateImpl {
    return (this.nativeObject.delegate ??= NSSpeechSynthesizerDelegateImpl.new()) as NSSpeechSynthesizerDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    addspeechdictionary: 'addSpeechDictionary',
    attributesforvoice: 'attributesForVoice',
    availablevoices: 'availableVoices',
    continuespeaking: 'continueSpeaking',
    defaultvoice: 'defaultVoice',
    delegate: 'delegate',
    initwithvoice: 'initWithVoice',
    isanyapplicationspeaking: 'isAnyApplicationSpeaking',
    isspeaking: 'isSpeaking',
    objectforpropertyerror: 'objectForPropertyError',
    pausespeakingatboundary: 'pauseSpeakingAtBoundary',
    phonemesfromtext: 'phonemesFromText',
    rate: 'rate',
    setobjectforpropertyerror: 'setObjectForPropertyError',
    setvoice: 'setVoice',
    startspeakingstring: 'startSpeakingString',
    startspeakingstringtourl: 'startSpeakingStringToURL',
    stopspeaking: 'stopSpeaking',
    stopspeakingatboundary: 'stopSpeakingAtBoundary',
    usesfeedbackwindow: 'usesFeedbackWindow',
    voice: 'voice',
    volume: 'volume',
  }

  // availableVoices: NSArray;
  // defaultVoice: NSString;
  // isAnyApplicationSpeaking: boolean;
  // readonly isSpeaking: boolean;
  // rate: number;
  // usesFeedbackWindow: boolean;
  // volume: number;

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
  // @ts-ignore
  readonly nativeObject = NSMutableParagraphStyle.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    addtabstop: 'addTabStop',
    alignment: 'alignment',
    allowsdefaulttighteningfortruncation: 'allowsDefaultTighteningForTruncation',
    basewritingdirection: 'baseWritingDirection',
    defaulttabinterval: 'defaultTabInterval',
    firstlineheadindent: 'firstLineHeadIndent',
    headerlevel: 'headerLevel',
    headindent: 'headIndent',
    hyphenationfactor: 'hyphenationFactor',
    linebreakmode: 'lineBreakMode',
    linebreakstrategy: 'lineBreakStrategy',
    lineheightmultiple: 'lineHeightMultiple',
    linespacing: 'lineSpacing',
    maximumlineheight: 'maximumLineHeight',
    minimumlineheight: 'minimumLineHeight',
    paragraphspacing: 'paragraphSpacing',
    paragraphspacingbefore: 'paragraphSpacingBefore',
    removetabstop: 'removeTabStop',
    setparagraphstyle: 'setParagraphStyle',
    tabstops: 'tabStops',
    tailindent: 'tailIndent',
    textblocks: 'textBlocks',
    textlists: 'textLists',
    tighteningfactorfortruncation: 'tighteningFactorForTruncation',
    usesdefaulthyphenation: 'usesDefaultHyphenation',
  }

  // alignment: interop.Enum<typeof NSTextAlignment>;
  // allowsDefaultTighteningForTruncation: boolean;
  // baseWritingDirection: interop.Enum<typeof NSWritingDirection>;
  // defaultTabInterval: number;
  // firstLineHeadIndent: number;
  // headerLevel: number;
  // headIndent: number;
  // hyphenationFactor: number;
  // lineBreakMode: interop.Enum<typeof NSLineBreakMode>;
  // lineBreakStrategy: interop.Enum<typeof NSLineBreakStrategy>;
  // lineHeightMultiple: number;
  // lineSpacing: number;
  // maximumLineHeight: number;
  // minimumLineHeight: number;
  // paragraphSpacing: number;
  // paragraphSpacingBefore: number;
  // tailIndent: number;
  // tighteningFactorForTruncation: number;
  // usesDefaultHyphenation: boolean;
}

export class HTMLNSStoryboardElement extends HTMLNSObjectElement {
  readonly nativeObject = NSStoryboard.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    instantiatecontrollerwithidentifier: 'instantiateControllerWithIdentifier',
    instantiatecontrollerwithidentifiercreator: 'instantiateControllerWithIdentifierCreator',
    instantiateinitialcontroller: 'instantiateInitialController',
    instantiateinitialcontrollerwithcreator: 'instantiateInitialControllerWithCreator',
    mainstoryboard: 'mainStoryboard',
    storyboardwithnamebundle: 'storyboardWithNameBundle',
  }

  // mainStoryboard: NSStoryboard;
}

export class HTMLNSCollectionLayoutItemElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCollectionLayoutItem.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    contentinsets: 'contentInsets',
    copywithzone: 'copyWithZone',
    edgespacing: 'edgeSpacing',
    itemwithlayoutsize: 'itemWithLayoutSize',
    itemwithlayoutsizesupplementaryitems: 'itemWithLayoutSizeSupplementaryItems',
    layoutsize: 'layoutSize',
    supplementaryitems: 'supplementaryItems',
  }

  // contentInsets: NSDirectionalEdgeInsets;
  // edgeSpacing: NSCollectionLayoutEdgeSpacing;
  // readonly layoutSize: NSCollectionLayoutSize;
  // readonly supplementaryItems: NSArray;
}

export class HTMLNSCollectionLayoutSectionElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCollectionLayoutSection.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    boundarysupplementaryitems: 'boundarySupplementaryItems',
    contentinsets: 'contentInsets',
    copywithzone: 'copyWithZone',
    decorationitems: 'decorationItems',
    intergroupspacing: 'interGroupSpacing',
    orthogonalscrollingbehavior: 'orthogonalScrollingBehavior',
    sectionwithgroup: 'sectionWithGroup',
    supplementariesfollowcontentinsets: 'supplementariesFollowContentInsets',
    visibleitemsinvalidationhandler: 'visibleItemsInvalidationHandler',
  }

  // contentInsets: NSDirectionalEdgeInsets;
  // interGroupSpacing: number;
  // orthogonalScrollingBehavior: interop.Enum<typeof NSCollectionLayoutSectionOrthogonalScrollingBehavior>;
  // supplementariesFollowContentInsets: boolean;
  // visibleItemsInvalidationHandler: (p1: NSArray | unknown[], p2: CGPoint, p3: NSCollectionLayoutEnvironment) => void;
}

export class HTMLNSGroupTouchBarItemElement extends HTMLNSTouchBarItemElement {
  // @ts-ignore
  readonly nativeObject = NSGroupTouchBarItem.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    alertstylegroupitemwithidentifier: 'alertStyleGroupItemWithIdentifier',
    customizationlabel: 'customizationLabel',
    effectivecompressionoptions: 'effectiveCompressionOptions',
    groupitemwithidentifieritems: 'groupItemWithIdentifierItems',
    groupitemwithidentifieritemsallowedcompressionoptions: 'groupItemWithIdentifierItemsAllowedCompressionOptions',
    grouptouchbar: 'groupTouchBar',
    groupuserinterfacelayoutdirection: 'groupUserInterfaceLayoutDirection',
    preferreditemwidth: 'preferredItemWidth',
    prefersequalwidths: 'prefersEqualWidths',
    prioritizedcompressionoptions: 'prioritizedCompressionOptions',
  }

  // readonly effectiveCompressionOptions: NSUserInterfaceCompressionOptions;
  // groupTouchBar: NSTouchBar;
  // groupUserInterfaceLayoutDirection: interop.Enum<typeof NSUserInterfaceLayoutDirection>;
  // preferredItemWidth: number;
  // prefersEqualWidths: boolean;
}

export class HTMLNSMenuElement extends HTMLNSObjectElement {
  readonly nativeObject = NSMenu.new();
  get delegate(): NSMenuDelegateImpl {
    return (this.nativeObject.delegate ??= NSMenuDelegateImpl.new()) as NSMenuDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    accessibilityactivationpoint: 'accessibilityActivationPoint',
    accessibilityallowedvalues: 'accessibilityAllowedValues',
    accessibilityapplicationfocuseduielement: 'accessibilityApplicationFocusedUIElement',
    accessibilityattributedstringforrange: 'accessibilityAttributedStringForRange',
    accessibilityattributeduserinputlabels: 'accessibilityAttributedUserInputLabels',
    accessibilitycancelbutton: 'accessibilityCancelButton',
    accessibilitycellforcolumnrow: 'accessibilityCellForColumnRow',
    accessibilitychildren: 'accessibilityChildren',
    accessibilitychildreninnavigationorder: 'accessibilityChildrenInNavigationOrder',
    accessibilityclearbutton: 'accessibilityClearButton',
    accessibilityclosebutton: 'accessibilityCloseButton',
    accessibilitycolumncount: 'accessibilityColumnCount',
    accessibilitycolumnheaderuielements: 'accessibilityColumnHeaderUIElements',
    accessibilitycolumnindexrange: 'accessibilityColumnIndexRange',
    accessibilitycolumns: 'accessibilityColumns',
    accessibilitycolumntitles: 'accessibilityColumnTitles',
    accessibilitycontents: 'accessibilityContents',
    accessibilitycriticalvalue: 'accessibilityCriticalValue',
    accessibilitycustomactions: 'accessibilityCustomActions',
    accessibilitycustomrotors: 'accessibilityCustomRotors',
    accessibilitydecrementbutton: 'accessibilityDecrementButton',
    accessibilitydefaultbutton: 'accessibilityDefaultButton',
    accessibilitydisclosedbyrow: 'accessibilityDisclosedByRow',
    accessibilitydisclosedrows: 'accessibilityDisclosedRows',
    accessibilitydisclosurelevel: 'accessibilityDisclosureLevel',
    accessibilitydocument: 'accessibilityDocument',
    accessibilityextrasmenubar: 'accessibilityExtrasMenuBar',
    accessibilityfilename: 'accessibilityFilename',
    accessibilityfocusedwindow: 'accessibilityFocusedWindow',
    accessibilityframe: 'accessibilityFrame',
    accessibilityframeforrange: 'accessibilityFrameForRange',
    accessibilityfullscreenbutton: 'accessibilityFullScreenButton',
    accessibilitygrowarea: 'accessibilityGrowArea',
    accessibilityhandles: 'accessibilityHandles',
    accessibilityheader: 'accessibilityHeader',
    accessibilityhelp: 'accessibilityHelp',
    accessibilityhorizontalscrollbar: 'accessibilityHorizontalScrollBar',
    accessibilityhorizontalunitdescription: 'accessibilityHorizontalUnitDescription',
    accessibilityhorizontalunits: 'accessibilityHorizontalUnits',
    accessibilityidentifier: 'accessibilityIdentifier',
    accessibilityincrementbutton: 'accessibilityIncrementButton',
    accessibilityindex: 'accessibilityIndex',
    accessibilityinsertionpointlinenumber: 'accessibilityInsertionPointLineNumber',
    accessibilitylabel: 'accessibilityLabel',
    accessibilitylabeluielements: 'accessibilityLabelUIElements',
    accessibilitylabelvalue: 'accessibilityLabelValue',
    accessibilitylayoutpointforscreenpoint: 'accessibilityLayoutPointForScreenPoint',
    accessibilitylayoutsizeforscreensize: 'accessibilityLayoutSizeForScreenSize',
    accessibilitylineforindex: 'accessibilityLineForIndex',
    accessibilitylinkeduielements: 'accessibilityLinkedUIElements',
    accessibilitymainwindow: 'accessibilityMainWindow',
    accessibilitymarkergroupuielement: 'accessibilityMarkerGroupUIElement',
    accessibilitymarkertypedescription: 'accessibilityMarkerTypeDescription',
    accessibilitymarkeruielements: 'accessibilityMarkerUIElements',
    accessibilitymarkervalues: 'accessibilityMarkerValues',
    accessibilitymaxvalue: 'accessibilityMaxValue',
    accessibilitymenubar: 'accessibilityMenuBar',
    accessibilityminimizebutton: 'accessibilityMinimizeButton',
    accessibilityminvalue: 'accessibilityMinValue',
    accessibilitynextcontents: 'accessibilityNextContents',
    accessibilitynumberofcharacters: 'accessibilityNumberOfCharacters',
    accessibilityorientation: 'accessibilityOrientation',
    accessibilityoverflowbutton: 'accessibilityOverflowButton',
    accessibilityparent: 'accessibilityParent',
    accessibilityperformcancel: 'accessibilityPerformCancel',
    accessibilityperformconfirm: 'accessibilityPerformConfirm',
    accessibilityperformdecrement: 'accessibilityPerformDecrement',
    accessibilityperformdelete: 'accessibilityPerformDelete',
    accessibilityperformincrement: 'accessibilityPerformIncrement',
    accessibilityperformpick: 'accessibilityPerformPick',
    accessibilityperformpress: 'accessibilityPerformPress',
    accessibilityperformraise: 'accessibilityPerformRaise',
    accessibilityperformshowalternateui: 'accessibilityPerformShowAlternateUI',
    accessibilityperformshowdefaultui: 'accessibilityPerformShowDefaultUI',
    accessibilityperformshowmenu: 'accessibilityPerformShowMenu',
    accessibilityplaceholdervalue: 'accessibilityPlaceholderValue',
    accessibilitypreviouscontents: 'accessibilityPreviousContents',
    accessibilityproxy: 'accessibilityProxy',
    accessibilityrangeforindex: 'accessibilityRangeForIndex',
    accessibilityrangeforline: 'accessibilityRangeForLine',
    accessibilityrangeforposition: 'accessibilityRangeForPosition',
    accessibilityrole: 'accessibilityRole',
    accessibilityroledescription: 'accessibilityRoleDescription',
    accessibilityrowcount: 'accessibilityRowCount',
    accessibilityrowheaderuielements: 'accessibilityRowHeaderUIElements',
    accessibilityrowindexrange: 'accessibilityRowIndexRange',
    accessibilityrows: 'accessibilityRows',
    accessibilityrtfforrange: 'accessibilityRTFForRange',
    accessibilityrulermarkertype: 'accessibilityRulerMarkerType',
    accessibilityscreenpointforlayoutpoint: 'accessibilityScreenPointForLayoutPoint',
    accessibilityscreensizeforlayoutsize: 'accessibilityScreenSizeForLayoutSize',
    accessibilitysearchbutton: 'accessibilitySearchButton',
    accessibilitysearchmenu: 'accessibilitySearchMenu',
    accessibilityselectedcells: 'accessibilitySelectedCells',
    accessibilityselectedchildren: 'accessibilitySelectedChildren',
    accessibilityselectedcolumns: 'accessibilitySelectedColumns',
    accessibilityselectedrows: 'accessibilitySelectedRows',
    accessibilityselectedtext: 'accessibilitySelectedText',
    accessibilityselectedtextrange: 'accessibilitySelectedTextRange',
    accessibilityselectedtextranges: 'accessibilitySelectedTextRanges',
    accessibilityservesastitleforuielements: 'accessibilityServesAsTitleForUIElements',
    accessibilitysharedcharacterrange: 'accessibilitySharedCharacterRange',
    accessibilitysharedfocuselements: 'accessibilitySharedFocusElements',
    accessibilitysharedtextuielements: 'accessibilitySharedTextUIElements',
    accessibilityshownmenu: 'accessibilityShownMenu',
    accessibilitysortdirection: 'accessibilitySortDirection',
    accessibilitysplitters: 'accessibilitySplitters',
    accessibilitystringforrange: 'accessibilityStringForRange',
    accessibilitystylerangeforindex: 'accessibilityStyleRangeForIndex',
    accessibilitysubrole: 'accessibilitySubrole',
    accessibilitytabs: 'accessibilityTabs',
    accessibilitytitle: 'accessibilityTitle',
    accessibilitytitleuielement: 'accessibilityTitleUIElement',
    accessibilitytoolbarbutton: 'accessibilityToolbarButton',
    accessibilitytopleveluielement: 'accessibilityTopLevelUIElement',
    accessibilityunitdescription: 'accessibilityUnitDescription',
    accessibilityunits: 'accessibilityUnits',
    accessibilityurl: 'accessibilityURL',
    accessibilityuserinputlabels: 'accessibilityUserInputLabels',
    accessibilityvalue: 'accessibilityValue',
    accessibilityvaluedescription: 'accessibilityValueDescription',
    accessibilityverticalscrollbar: 'accessibilityVerticalScrollBar',
    accessibilityverticalunitdescription: 'accessibilityVerticalUnitDescription',
    accessibilityverticalunits: 'accessibilityVerticalUnits',
    accessibilityvisiblecells: 'accessibilityVisibleCells',
    accessibilityvisiblecharacterrange: 'accessibilityVisibleCharacterRange',
    accessibilityvisiblechildren: 'accessibilityVisibleChildren',
    accessibilityvisiblecolumns: 'accessibilityVisibleColumns',
    accessibilityvisiblerows: 'accessibilityVisibleRows',
    accessibilitywarningvalue: 'accessibilityWarningValue',
    accessibilitywindow: 'accessibilityWindow',
    accessibilitywindows: 'accessibilityWindows',
    accessibilityzoombutton: 'accessibilityZoomButton',
    additem: 'addItem',
    additemwithtitleactionkeyequivalent: 'addItemWithTitleActionKeyEquivalent',
    allowscontextmenuplugins: 'allowsContextMenuPlugIns',
    appearance: 'appearance',
    attachedmenu: 'attachedMenu',
    autoenablesitems: 'autoenablesItems',
    autorelease: 'autorelease',
    canceltracking: 'cancelTracking',
    canceltrackingwithoutanimation: 'cancelTrackingWithoutAnimation',
    class: 'class',
    conformstoprotocol: 'conformsToProtocol',
    contextmenurepresentation: 'contextMenuRepresentation',
    copywithzone: 'copyWithZone',
    debugdescription: 'debugDescription',
    delegate: 'delegate',
    description: 'description',
    effectiveappearance: 'effectiveAppearance',
    encodewithcoder: 'encodeWithCoder',
    font: 'font',
    hash: 'hash',
    helprequested: 'helpRequested',
    highlighteditem: 'highlightedItem',
    identifier: 'identifier',
    indexofitem: 'indexOfItem',
    indexofitemwithrepresentedobject: 'indexOfItemWithRepresentedObject',
    indexofitemwithsubmenu: 'indexOfItemWithSubmenu',
    indexofitemwithtag: 'indexOfItemWithTag',
    indexofitemwithtargetandaction: 'indexOfItemWithTargetAndAction',
    indexofitemwithtitle: 'indexOfItemWithTitle',
    initwithcoder: 'initWithCoder',
    initwithtitle: 'initWithTitle',
    insertitematindex: 'insertItemAtIndex',
    insertitemwithtitleactionkeyequivalentatindex: 'insertItemWithTitleActionKeyEquivalentAtIndex',
    isaccessibilityalternateuivisible: 'isAccessibilityAlternateUIVisible',
    isaccessibilitydisclosed: 'isAccessibilityDisclosed',
    isaccessibilityedited: 'isAccessibilityEdited',
    isaccessibilityelement: 'isAccessibilityElement',
    isaccessibilityenabled: 'isAccessibilityEnabled',
    isaccessibilityexpanded: 'isAccessibilityExpanded',
    isaccessibilityfocused: 'isAccessibilityFocused',
    isaccessibilityfrontmost: 'isAccessibilityFrontmost',
    isaccessibilityhidden: 'isAccessibilityHidden',
    isaccessibilitymain: 'isAccessibilityMain',
    isaccessibilityminimized: 'isAccessibilityMinimized',
    isaccessibilitymodal: 'isAccessibilityModal',
    isaccessibilityorderedbyrow: 'isAccessibilityOrderedByRow',
    isaccessibilityprotectedcontent: 'isAccessibilityProtectedContent',
    isaccessibilityrequired: 'isAccessibilityRequired',
    isaccessibilityselected: 'isAccessibilitySelected',
    isaccessibilityselectorallowed: 'isAccessibilitySelectorAllowed',
    isattached: 'isAttached',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    istornoff: 'isTornOff',
    itemarray: 'itemArray',
    itematindex: 'itemAtIndex',
    itemchanged: 'itemChanged',
    itemwithtag: 'itemWithTag',
    itemwithtitle: 'itemWithTitle',
    locationforsubmenu: 'locationForSubmenu',
    menubarheight: 'menuBarHeight',
    menubarvisible: 'menuBarVisible',
    menuchangedmessagesenabled: 'menuChangedMessagesEnabled',
    menurepresentation: 'menuRepresentation',
    menuzone: 'menuZone',
    minimumwidth: 'minimumWidth',
    numberofitems: 'numberOfItems',
    palettemenuwithcolorstitlesselectionhandler: 'paletteMenuWithColorsTitlesSelectionHandler',
    palettemenuwithcolorstitlestemplateimageselectionhandler: 'paletteMenuWithColorsTitlesTemplateImageSelectionHandler',
    performactionforitematindex: 'performActionForItemAtIndex',
    performkeyequivalent: 'performKeyEquivalent',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    popupcontextmenuwitheventforview: 'popUpContextMenuWithEventForView',
    popupcontextmenuwitheventforviewwithfont: 'popUpContextMenuWithEventForViewWithFont',
    popupmenupositioningitematlocationinview: 'popUpMenuPositioningItemAtLocationInView',
    presentationstyle: 'presentationStyle',
    propertiestoupdate: 'propertiesToUpdate',
    release: 'release',
    removeallitems: 'removeAllItems',
    removeitem: 'removeItem',
    removeitematindex: 'removeItemAtIndex',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    selecteditems: 'selectedItems',
    selectionmode: 'selectionMode',
    self: 'self',
    setcontextmenurepresentation: 'setContextMenuRepresentation',
    setmenubarvisible: 'setMenuBarVisible',
    setmenurepresentation: 'setMenuRepresentation',
    setmenuzone: 'setMenuZone',
    setsubmenuforitem: 'setSubmenuForItem',
    settearoffmenurepresentation: 'setTearOffMenuRepresentation',
    showsstatecolumn: 'showsStateColumn',
    size: 'size',
    sizetofit: 'sizeToFit',
    submenuaction: 'submenuAction',
    superclass: 'superclass',
    supermenu: 'supermenu',
    tearoffmenurepresentation: 'tearOffMenuRepresentation',
    title: 'title',
    update: 'update',
    userinterfacelayoutdirection: 'userInterfaceLayoutDirection',
    zone: 'zone',
  }

  // accessibilityActivationPoint: CGPoint;
  // accessibilityApplicationFocusedUIElement: interop.Object;
  // accessibilityCancelButton: interop.Object;
  // accessibilityClearButton: interop.Object;
  // accessibilityCloseButton: interop.Object;
  // accessibilityColumnCount: number;
  // accessibilityColumnIndexRange: _NSRange;
  // accessibilityCriticalValue: interop.Object;
  // accessibilityDecrementButton: interop.Object;
  // accessibilityDefaultButton: interop.Object;
  // accessibilityDisclosedByRow: interop.Object;
  // accessibilityDisclosedRows: interop.Object;
  // accessibilityDisclosureLevel: number;
  // accessibilityExtrasMenuBar: interop.Object;
  // accessibilityFocusedWindow: interop.Object;
  // accessibilityFrame: CGRect;
  // accessibilityFullScreenButton: interop.Object;
  // accessibilityGrowArea: interop.Object;
  // accessibilityHeader: interop.Object;
  // accessibilityHorizontalScrollBar: interop.Object;
  // accessibilityHorizontalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityIncrementButton: interop.Object;
  // accessibilityIndex: number;
  // accessibilityInsertionPointLineNumber: number;
  // accessibilityLabelValue: number;
  // accessibilityMainWindow: interop.Object;
  // accessibilityMarkerGroupUIElement: interop.Object;
  // accessibilityMarkerValues: interop.Object;
  // accessibilityMaxValue: interop.Object;
  // accessibilityMenuBar: interop.Object;
  // accessibilityMinimizeButton: interop.Object;
  // accessibilityMinValue: interop.Object;
  // accessibilityNumberOfCharacters: number;
  // accessibilityOrientation: interop.Enum<typeof NSAccessibilityOrientation>;
  // accessibilityOverflowButton: interop.Object;
  // accessibilityParent: interop.Object;
  // accessibilityProxy: interop.Object;
  // accessibilityRowCount: number;
  // accessibilityRowIndexRange: _NSRange;
  // accessibilityRulerMarkerType: interop.Enum<typeof NSAccessibilityRulerMarkerType>;
  // accessibilitySearchButton: interop.Object;
  // accessibilitySearchMenu: interop.Object;
  // accessibilitySelectedTextRange: _NSRange;
  // accessibilitySharedCharacterRange: _NSRange;
  // accessibilityShownMenu: interop.Object;
  // accessibilitySortDirection: interop.Enum<typeof NSAccessibilitySortDirection>;
  // accessibilityTitleUIElement: interop.Object;
  // accessibilityToolbarButton: interop.Object;
  // accessibilityTopLevelUIElement: interop.Object;
  // accessibilityUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityURL: NSURL;
  // accessibilityValue: interop.Object;
  // accessibilityVerticalScrollBar: interop.Object;
  // accessibilityVerticalUnits: interop.Enum<typeof NSAccessibilityUnits>;
  // accessibilityVisibleCharacterRange: _NSRange;
  // accessibilityWarningValue: interop.Object;
  // accessibilityWindow: interop.Object;
  // accessibilityZoomButton: interop.Object;
  // allowsContextMenuPlugIns: boolean;
  // appearance: NSAppearance;
  // autoenablesItems: boolean;
  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // readonly effectiveAppearance: NSAppearance;
  // font: NSFont;
  // readonly hash: number;
  // readonly highlightedItem: NSMenuItem;
  // isAccessibilityAlternateUIVisible: boolean;
  // isAccessibilityDisclosed: boolean;
  // isAccessibilityEdited: boolean;
  // isAccessibilityElement: boolean;
  // isAccessibilityEnabled: boolean;
  // isAccessibilityExpanded: boolean;
  // isAccessibilityFocused: boolean;
  // isAccessibilityFrontmost: boolean;
  // isAccessibilityHidden: boolean;
  // isAccessibilityMain: boolean;
  // isAccessibilityMinimized: boolean;
  // isAccessibilityModal: boolean;
  // isAccessibilityOrderedByRow: boolean;
  // isAccessibilityProtectedContent: boolean;
  // isAccessibilityRequired: boolean;
  // isAccessibilitySelected: boolean;
  // readonly isProxy: boolean;
  // readonly isTornOff: boolean;
  // readonly menuBarHeight: number;
  // menuChangedMessagesEnabled: boolean;
  // minimumWidth: number;
  // readonly numberOfItems: number;
  // presentationStyle: interop.Enum<typeof NSMenuPresentationStyle>;
  // readonly propertiesToUpdate: interop.Enum<typeof NSMenuProperties>;
  // selectionMode: interop.Enum<typeof NSMenuSelectionMode>;
  // showsStateColumn: boolean;
  // readonly size: CGSize;
  // readonly superclass: interop.Object;
  // supermenu: NSMenu;
  // userInterfaceLayoutDirection: interop.Enum<typeof NSUserInterfaceLayoutDirection>;
  // readonly zone: interop.Pointer;

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
  readonly nativeObject = NSScrubberProportionalLayout.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    initwithcoder: 'initWithCoder',
    initwithnumberofvisibleitems: 'initWithNumberOfVisibleItems',
    numberofvisibleitems: 'numberOfVisibleItems',
  }

  // numberOfVisibleItems: number;
}

export class HTMLNSTextContainerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextContainer.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    containersize: 'containerSize',
    containspoint: 'containsPoint',
    encodewithcoder: 'encodeWithCoder',
    exclusionpaths: 'exclusionPaths',
    heighttrackstextview: 'heightTracksTextView',
    initwithcoder: 'initWithCoder',
    initwithcontainersize: 'initWithContainerSize',
    initwithsize: 'initWithSize',
    issimplerectangulartextcontainer: 'isSimpleRectangularTextContainer',
    layoutmanager: 'layoutManager',
    layoutorientation: 'layoutOrientation',
    linebreakmode: 'lineBreakMode',
    linefragmentpadding: 'lineFragmentPadding',
    linefragmentrectforproposedrectatindexwritingdirectionremainingrect: 'lineFragmentRectForProposedRectAtIndexWritingDirectionRemainingRect',
    linefragmentrectforproposedrectsweepdirectionmovementdirectionremainingrect: 'lineFragmentRectForProposedRectSweepDirectionMovementDirectionRemainingRect',
    maximumnumberoflines: 'maximumNumberOfLines',
    replacelayoutmanager: 'replaceLayoutManager',
    size: 'size',
    supportssecurecoding: 'supportsSecureCoding',
    textlayoutmanager: 'textLayoutManager',
    textview: 'textView',
    widthtrackstextview: 'widthTracksTextView',
  }

  // containerSize: CGSize;
  // heightTracksTextView: boolean;
  // readonly isSimpleRectangularTextContainer: boolean;
  // layoutManager: NSLayoutManager;
  // readonly layoutOrientation: interop.Enum<typeof NSTextLayoutOrientation>;
  // lineBreakMode: interop.Enum<typeof NSLineBreakMode>;
  // lineFragmentPadding: number;
  // maximumNumberOfLines: number;
  // size: CGSize;
  // supportsSecureCoding: boolean;
  // readonly textLayoutManager: NSTextLayoutManager;
  // textView: NSTextView;
  // widthTracksTextView: boolean;
}

export class HTMLNSPanelElement extends HTMLNSWindowElement {
  // @ts-ignore
  readonly nativeObject = NSPanel.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    becomeskeyonlyifneeded: 'becomesKeyOnlyIfNeeded',
    isfloatingpanel: 'isFloatingPanel',
    workswhenmodal: 'worksWhenModal',
  }

  // becomesKeyOnlyIfNeeded: boolean;
  // isFloatingPanel: boolean;
  // worksWhenModal: boolean;
}

export class HTMLNSTitlebarAccessoryViewControllerElement extends HTMLNSViewControllerElement {
  readonly nativeObject = NSTitlebarAccessoryViewController.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    animationdidend: 'animationDidEnd',
    animationdidreachprogressmark: 'animationDidReachProgressMark',
    animationdidstop: 'animationDidStop',
    animationforkey: 'animationForKey',
    animations: 'animations',
    animationshouldstart: 'animationShouldStart',
    animationvalueforprogress: 'animationValueForProgress',
    animator: 'animator',
    automaticallyadjustssize: 'automaticallyAdjustsSize',
    autorelease: 'autorelease',
    class: 'class',
    conformstoprotocol: 'conformsToProtocol',
    debugdescription: 'debugDescription',
    defaultanimationforkey: 'defaultAnimationForKey',
    description: 'description',
    fullscreenminheight: 'fullScreenMinHeight',
    hash: 'hash',
    isequal: 'isEqual',
    ishidden: 'isHidden',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    layoutattribute: 'layoutAttribute',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    release: 'release',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    self: 'self',
    superclass: 'superclass',
    viewdidappear: 'viewDidAppear',
    viewdiddisappear: 'viewDidDisappear',
    viewwillappear: 'viewWillAppear',
    zone: 'zone',
  }

  // automaticallyAdjustsSize: boolean;
  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // fullScreenMinHeight: number;
  // readonly hash: number;
  // isHidden: boolean;
  // readonly isProxy: boolean;
  // layoutAttribute: interop.Enum<typeof NSLayoutAttribute>;
  // readonly superclass: interop.Object;
  // readonly zone: interop.Pointer;
}

export class HTMLNSRotationGestureRecognizerElement extends HTMLNSGestureRecognizerElement {
  readonly nativeObject = NSRotationGestureRecognizer.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    rotation: 'rotation',
    rotationindegrees: 'rotationInDegrees',
  }

  // rotation: number;
  // rotationInDegrees: number;
}

export class HTMLNSDraggingItemElement extends HTMLNSObjectElement {
  readonly nativeObject = NSDraggingItem.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    draggingframe: 'draggingFrame',
    imagecomponents: 'imageComponents',
    imagecomponentsprovider: 'imageComponentsProvider',
    initwithpasteboardwriter: 'initWithPasteboardWriter',
    item: 'item',
    setdraggingframecontents: 'setDraggingFrameContents',
  }

  // draggingFrame: CGRect;
  // readonly imageComponents: NSArray;
  // imageComponentsProvider: () => NSArray;
  // readonly item: interop.Object;
}

export class HTMLNSCollectionViewCompositionalLayoutElement extends HTMLNSCollectionViewLayoutElement {
  readonly nativeObject = NSCollectionViewCompositionalLayout.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    configuration: 'configuration',
    initwithsection: 'initWithSection',
    initwithsectionconfiguration: 'initWithSectionConfiguration',
    initwithsectionprovider: 'initWithSectionProvider',
    initwithsectionproviderconfiguration: 'initWithSectionProviderConfiguration',
  }

  // configuration: NSCollectionViewCompositionalLayoutConfiguration;
}

export class HTMLNSTrackingAreaElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTrackingArea.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    copywithzone: 'copyWithZone',
    encodewithcoder: 'encodeWithCoder',
    initwithcoder: 'initWithCoder',
    initwithrectoptionsowneruserinfo: 'initWithRectOptionsOwnerUserInfo',
    options: 'options',
    owner: 'owner',
    rect: 'rect',
    userinfo: 'userInfo',
  }

  // readonly options: interop.Enum<typeof NSTrackingAreaOptions>;
  // readonly owner: interop.Object;
  // readonly rect: CGRect;
  // readonly userInfo: NSDictionary;
}

export class HTMLNSCollectionLayoutSupplementaryItemElement extends HTMLNSCollectionLayoutItemElement {
  readonly nativeObject = NSCollectionLayoutSupplementaryItem.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    containeranchor: 'containerAnchor',
    copywithzone: 'copyWithZone',
    elementkind: 'elementKind',
    itemanchor: 'itemAnchor',
    supplementaryitemwithlayoutsizeelementkindcontaineranchor: 'supplementaryItemWithLayoutSizeElementKindContainerAnchor',
    supplementaryitemwithlayoutsizeelementkindcontaineranchoritemanchor: 'supplementaryItemWithLayoutSizeElementKindContainerAnchorItemAnchor',
    zindex: 'zIndex',
  }

  // readonly containerAnchor: NSCollectionLayoutAnchor;
  // readonly elementKind: NSString;
  // readonly itemAnchor: NSCollectionLayoutAnchor;
  // zIndex: number;
}

export class HTMLNSCollectionViewItemElement extends HTMLNSViewControllerElement {
  readonly nativeObject = NSCollectionViewItem.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    applylayoutattributes: 'applyLayoutAttributes',
    autorelease: 'autorelease',
    class: 'class',
    collectionview: 'collectionView',
    conformstoprotocol: 'conformsToProtocol',
    copywithzone: 'copyWithZone',
    debugdescription: 'debugDescription',
    description: 'description',
    didtransitionfromlayouttolayout: 'didTransitionFromLayoutToLayout',
    draggingimagecomponents: 'draggingImageComponents',
    hash: 'hash',
    highlightstate: 'highlightState',
    identifier: 'identifier',
    imageview: 'imageView',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    isselected: 'isSelected',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    preferredlayoutattributesfittingattributes: 'preferredLayoutAttributesFittingAttributes',
    prepareforreuse: 'prepareForReuse',
    release: 'release',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    self: 'self',
    superclass: 'superclass',
    textfield: 'textField',
    willtransitionfromlayouttolayout: 'willTransitionFromLayoutToLayout',
    zone: 'zone',
  }

  // readonly collectionView: NSCollectionView;
  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // readonly draggingImageComponents: NSArray;
  // readonly hash: number;
  // highlightState: interop.Enum<typeof NSCollectionViewItemHighlightState>;
  // imageView: NSImageView;
  // readonly isProxy: boolean;
  // isSelected: boolean;
  // readonly superclass: interop.Object;
  // textField: NSTextField;
  // readonly zone: interop.Pointer;
}

export class HTMLNSDictionaryControllerElement extends HTMLNSArrayControllerElement {
  // @ts-ignore
  readonly nativeObject = NSDictionaryController.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    excludedkeys: 'excludedKeys',
    includedkeys: 'includedKeys',
    initialkey: 'initialKey',
    initialvalue: 'initialValue',
    localizedkeydictionary: 'localizedKeyDictionary',
    localizedkeytable: 'localizedKeyTable',
    newobject: 'newObject',
  }

  // initialValue: interop.Object;
}

export class HTMLNSSavePanelElement extends HTMLNSPanelElement {
  // @ts-ignore
  readonly nativeObject = NSSavePanel.new();
  get delegate(): NSOpenSavePanelDelegateImpl {
    return (this.nativeObject.delegate ??= NSOpenSavePanelDelegateImpl.new()) as NSOpenSavePanelDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    accessoryview: 'accessoryView',
    allowedcontenttypes: 'allowedContentTypes',
    allowedfiletypes: 'allowedFileTypes',
    allowsotherfiletypes: 'allowsOtherFileTypes',
    beginsheetfordirectoryfilemodalforwindowmodaldelegatedidendselectorcontextinfo: 'beginSheetForDirectoryFileModalForWindowModalDelegateDidEndSelectorContextInfo',
    beginsheetmodalforwindowcompletionhandler: 'beginSheetModalForWindowCompletionHandler',
    beginwithcompletionhandler: 'beginWithCompletionHandler',
    cancel: 'cancel',
    cancreatedirectories: 'canCreateDirectories',
    canselecthiddenextension: 'canSelectHiddenExtension',
    delegate: 'delegate',
    directory: 'directory',
    directoryurl: 'directoryURL',
    filename: 'filename',
    identifier: 'identifier',
    isexpanded: 'isExpanded',
    isextensionhidden: 'isExtensionHidden',
    message: 'message',
    namefieldlabel: 'nameFieldLabel',
    namefieldstringvalue: 'nameFieldStringValue',
    ok: 'ok',
    prompt: 'prompt',
    requiredfiletype: 'requiredFileType',
    runmodal: 'runModal',
    runmodalfordirectoryfile: 'runModalForDirectoryFile',
    savepanel: 'savePanel',
    selecttext: 'selectText',
    setdirectory: 'setDirectory',
    setrequiredfiletype: 'setRequiredFileType',
    showshiddenfiles: 'showsHiddenFiles',
    showstagfield: 'showsTagField',
    tagnames: 'tagNames',
    title: 'title',
    treatsfilepackagesasdirectories: 'treatsFilePackagesAsDirectories',
    url: 'URL',
    validatevisiblecolumns: 'validateVisibleColumns',
  }

  // accessoryView: NSView;
  // allowsOtherFileTypes: boolean;
  // canCreateDirectories: boolean;
  // canSelectHiddenExtension: boolean;
  // directoryURL: NSURL;
  // readonly isExpanded: boolean;
  // isExtensionHidden: boolean;
  // showsHiddenFiles: boolean;
  // showsTagField: boolean;
  // treatsFilePackagesAsDirectories: boolean;
  // readonly URL: NSURL;

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
  readonly nativeObject = NSCollectionLayoutDecorationItem.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    backgrounddecorationitemwithelementkind: 'backgroundDecorationItemWithElementKind',
    copywithzone: 'copyWithZone',
    elementkind: 'elementKind',
    zindex: 'zIndex',
  }

  // readonly elementKind: NSString;
  // zIndex: number;
}

export class HTMLNSSplitViewControllerElement extends HTMLNSViewControllerElement {
  readonly nativeObject = NSSplitViewController.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    addsplitviewitem: 'addSplitViewItem',
    autorelease: 'autorelease',
    class: 'class',
    conformstoprotocol: 'conformsToProtocol',
    debugdescription: 'debugDescription',
    description: 'description',
    hash: 'hash',
    insertsplitviewitematindex: 'insertSplitViewItemAtIndex',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    minimumthicknessforinlinesidebars: 'minimumThicknessForInlineSidebars',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    release: 'release',
    removesplitviewitem: 'removeSplitViewItem',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    self: 'self',
    splitview: 'splitView',
    splitviewadditionaleffectiverectofdivideratindex: 'splitViewAdditionalEffectiveRectOfDividerAtIndex',
    splitviewcancollapsesubview: 'splitViewCanCollapseSubview',
    splitviewconstrainmaxcoordinateofsubviewat: 'splitViewConstrainMaxCoordinateOfSubviewAt',
    splitviewconstrainmincoordinateofsubviewat: 'splitViewConstrainMinCoordinateOfSubviewAt',
    splitviewconstrainsplitpositionofsubviewat: 'splitViewConstrainSplitPositionOfSubviewAt',
    splitviewdidresizesubviews: 'splitViewDidResizeSubviews',
    splitvieweffectiverectfordrawnrectofdivideratindex: 'splitViewEffectiveRectForDrawnRectOfDividerAtIndex',
    splitviewitemforviewcontroller: 'splitViewItemForViewController',
    splitviewitems: 'splitViewItems',
    splitviewresizesubviewswitholdsize: 'splitViewResizeSubviewsWithOldSize',
    splitviewshouldadjustsizeofsubview: 'splitViewShouldAdjustSizeOfSubview',
    splitviewshouldcollapsesubviewfordoubleclickondivideratindex: 'splitViewShouldCollapseSubviewForDoubleClickOnDividerAtIndex',
    splitviewshouldhidedivideratindex: 'splitViewShouldHideDividerAtIndex',
    splitviewwillresizesubviews: 'splitViewWillResizeSubviews',
    superclass: 'superclass',
    toggleinspector: 'toggleInspector',
    togglesidebar: 'toggleSidebar',
    validateuserinterfaceitem: 'validateUserInterfaceItem',
    viewdidload: 'viewDidLoad',
    zone: 'zone',
  }

  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // readonly hash: number;
  // readonly isProxy: boolean;
  // minimumThicknessForInlineSidebars: number;
  // splitView: NSSplitView;
  // readonly superclass: interop.Object;
  // readonly zone: interop.Pointer;
}

export class HTMLNSFontPanelElement extends HTMLNSPanelElement {
  // @ts-ignore
  readonly nativeObject = NSFontPanel.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    accessoryview: 'accessoryView',
    isenabled: 'isEnabled',
    panelconvertfont: 'panelConvertFont',
    reloaddefaultfontfamilies: 'reloadDefaultFontFamilies',
    setpanelfontismultiple: 'setPanelFontIsMultiple',
    sharedfontpanel: 'sharedFontPanel',
    sharedfontpanelexists: 'sharedFontPanelExists',
    workswhenmodal: 'worksWhenModal',
  }

  // accessoryView: NSView;
  // isEnabled: boolean;
  // sharedFontPanel: NSFontPanel;
  // sharedFontPanelExists: boolean;
  // worksWhenModal: boolean;
}

export class HTMLNSScrubberItemViewElement extends HTMLNSScrubberArrangedViewElement {
  readonly nativeObject = NSScrubberItemView.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
  }

}

export class HTMLNSCollectionLayoutBoundarySupplementaryItemElement extends HTMLNSCollectionLayoutSupplementaryItemElement {
  readonly nativeObject = NSCollectionLayoutBoundarySupplementaryItem.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    alignment: 'alignment',
    boundarysupplementaryitemwithlayoutsizeelementkindalignment: 'boundarySupplementaryItemWithLayoutSizeElementKindAlignment',
    boundarysupplementaryitemwithlayoutsizeelementkindalignmentabsoluteoffset: 'boundarySupplementaryItemWithLayoutSizeElementKindAlignmentAbsoluteOffset',
    copywithzone: 'copyWithZone',
    extendsboundary: 'extendsBoundary',
    offset: 'offset',
    pintovisiblebounds: 'pinToVisibleBounds',
  }

  // readonly alignment: interop.Enum<typeof NSRectAlignment>;
  // extendsBoundary: boolean;
  // readonly offset: CGPoint;
  // pinToVisibleBounds: boolean;
}

export class HTMLNSCollectionViewFlowLayoutElement extends HTMLNSCollectionViewLayoutElement {
  readonly nativeObject = NSCollectionViewFlowLayout.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    collapsesectionatindex: 'collapseSectionAtIndex',
    estimateditemsize: 'estimatedItemSize',
    expandsectionatindex: 'expandSectionAtIndex',
    footerreferencesize: 'footerReferenceSize',
    headerreferencesize: 'headerReferenceSize',
    itemsize: 'itemSize',
    minimuminteritemspacing: 'minimumInteritemSpacing',
    minimumlinespacing: 'minimumLineSpacing',
    scrolldirection: 'scrollDirection',
    sectionatindexiscollapsed: 'sectionAtIndexIsCollapsed',
    sectionfooterspintovisiblebounds: 'sectionFootersPinToVisibleBounds',
    sectionheaderspintovisiblebounds: 'sectionHeadersPinToVisibleBounds',
    sectioninset: 'sectionInset',
  }

  // estimatedItemSize: CGSize;
  // footerReferenceSize: CGSize;
  // headerReferenceSize: CGSize;
  // itemSize: CGSize;
  // minimumInteritemSpacing: number;
  // minimumLineSpacing: number;
  // scrollDirection: interop.Enum<typeof NSCollectionViewScrollDirection>;
  // sectionFootersPinToVisibleBounds: boolean;
  // sectionHeadersPinToVisibleBounds: boolean;
  // sectionInset: NSEdgeInsets;
}

export class HTMLNSPathComponentCellElement extends HTMLNSTextFieldCellElement {
  readonly nativeObject = NSPathComponentCell.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    image: 'image',
    url: 'URL',
  }

  // image: NSImage;
  // URL: NSURL;
}

export class HTMLNSScrubberElement extends HTMLNSViewElement {
  readonly nativeObject = NSScrubber.new();
  get delegate(): NSScrubberDelegateImpl {
    return (this.nativeObject.delegate ??= NSScrubberDelegateImpl.new()) as NSScrubberDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    backgroundcolor: 'backgroundColor',
    backgroundview: 'backgroundView',
    datasource: 'dataSource',
    delegate: 'delegate',
    floatsselectionviews: 'floatsSelectionViews',
    highlightedindex: 'highlightedIndex',
    initwithcoder: 'initWithCoder',
    initwithframe: 'initWithFrame',
    insertitemsatindexes: 'insertItemsAtIndexes',
    iscontinuous: 'isContinuous',
    itemalignment: 'itemAlignment',
    itemviewforitematindex: 'itemViewForItemAtIndex',
    makeitemwithidentifierowner: 'makeItemWithIdentifierOwner',
    mode: 'mode',
    moveitematindextoindex: 'moveItemAtIndexToIndex',
    numberofitems: 'numberOfItems',
    performsequentialbatchupdates: 'performSequentialBatchUpdates',
    registerclassforitemidentifier: 'registerClassForItemIdentifier',
    registernibforitemidentifier: 'registerNibForItemIdentifier',
    reloaddata: 'reloadData',
    reloaditemsatindexes: 'reloadItemsAtIndexes',
    removeitemsatindexes: 'removeItemsAtIndexes',
    scrollitematindextoalignment: 'scrollItemAtIndexToAlignment',
    scrubberlayout: 'scrubberLayout',
    selectedindex: 'selectedIndex',
    selectionbackgroundstyle: 'selectionBackgroundStyle',
    selectionoverlaystyle: 'selectionOverlayStyle',
    showsadditionalcontentindicators: 'showsAdditionalContentIndicators',
    showsarrowbuttons: 'showsArrowButtons',
  }

  // backgroundColor: NSColor;
  // backgroundView: NSView;
  // dataSource: NSScrubberDataSource;
  // floatsSelectionViews: boolean;
  // readonly highlightedIndex: number;
  // isContinuous: boolean;
  // itemAlignment: interop.Enum<typeof NSScrubberAlignment>;
  // mode: interop.Enum<typeof NSScrubberMode>;
  // readonly numberOfItems: number;
  // scrubberLayout: NSScrubberLayout;
  // selectedIndex: number;
  // selectionBackgroundStyle: NSScrubberSelectionStyle;
  // selectionOverlayStyle: NSScrubberSelectionStyle;
  // showsAdditionalContentIndicators: boolean;
  // showsArrowButtons: boolean;

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
  // @ts-ignore
  readonly nativeObject = NSControl.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    abortediting: 'abortEditing',
    action: 'action',
    alignment: 'alignment',
    allowsexpansiontooltips: 'allowsExpansionToolTips',
    attributedstringvalue: 'attributedStringValue',
    basewritingdirection: 'baseWritingDirection',
    calcsize: 'calcSize',
    cell: 'cell',
    cellclass: 'cellClass',
    controlsize: 'controlSize',
    currenteditor: 'currentEditor',
    doublevalue: 'doubleValue',
    drawcell: 'drawCell',
    drawcellinside: 'drawCellInside',
    drawwithexpansionframeinview: 'drawWithExpansionFrameInView',
    editwithframeeditordelegateevent: 'editWithFrameEditorDelegateEvent',
    endediting: 'endEditing',
    expansionframewithframe: 'expansionFrameWithFrame',
    floatvalue: 'floatValue',
    font: 'font',
    formatter: 'formatter',
    ignoresmulticlick: 'ignoresMultiClick',
    initwithcoder: 'initWithCoder',
    initwithframe: 'initWithFrame',
    integervalue: 'integerValue',
    intvalue: 'intValue',
    invalidateintrinsiccontentsizeforcell: 'invalidateIntrinsicContentSizeForCell',
    iscontinuous: 'isContinuous',
    isenabled: 'isEnabled',
    ishighlighted: 'isHighlighted',
    linebreakmode: 'lineBreakMode',
    mousedown: 'mouseDown',
    objectvalue: 'objectValue',
    performclick: 'performClick',
    refusesfirstresponder: 'refusesFirstResponder',
    selectcell: 'selectCell',
    selectedcell: 'selectedCell',
    selectedtag: 'selectedTag',
    selectwithframeeditordelegatestartlength: 'selectWithFrameEditorDelegateStartLength',
    sendactionon: 'sendActionOn',
    sendactionto: 'sendActionTo',
    setfloatingpointformatleftright: 'setFloatingPointFormatLeftRight',
    setneedsdisplay: 'setNeedsDisplay',
    sizethatfits: 'sizeThatFits',
    sizetofit: 'sizeToFit',
    stringvalue: 'stringValue',
    tag: 'tag',
    takedoublevaluefrom: 'takeDoubleValueFrom',
    takefloatvaluefrom: 'takeFloatValueFrom',
    takeintegervaluefrom: 'takeIntegerValueFrom',
    takeintvaluefrom: 'takeIntValueFrom',
    takeobjectvaluefrom: 'takeObjectValueFrom',
    takestringvaluefrom: 'takeStringValueFrom',
    target: 'target',
    updatecell: 'updateCell',
    updatecellinside: 'updateCellInside',
    usessinglelinemode: 'usesSingleLineMode',
    validateediting: 'validateEditing',
  }

  // action: string;
  // alignment: interop.Enum<typeof NSTextAlignment>;
  // allowsExpansionToolTips: boolean;
  // attributedStringValue: NSAttributedString;
  // baseWritingDirection: interop.Enum<typeof NSWritingDirection>;
  // cell: NSCell;
  // cellClass: interop.Object;
  // controlSize: interop.Enum<typeof NSControlSize>;
  // doubleValue: number;
  // floatValue: number;
  // font: NSFont;
  // formatter: NSFormatter;
  // ignoresMultiClick: boolean;
  // integerValue: number;
  // intValue: number;
  // isContinuous: boolean;
  // isEnabled: boolean;
  // isHighlighted: boolean;
  // lineBreakMode: interop.Enum<typeof NSLineBreakMode>;
  // objectValue: interop.Object;
  // refusesFirstResponder: boolean;
  // readonly selectedCell: NSCell;
  // readonly selectedTag: number;
  // tag: number;
  // target: interop.Object;
  // usesSingleLineMode: boolean;
}

export class HTMLNSStackViewElement extends HTMLNSViewElement {
  readonly nativeObject = NSStackView.new();
  get delegate(): NSStackViewDelegateImpl {
    return (this.nativeObject.delegate ??= NSStackViewDelegateImpl.new()) as NSStackViewDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    addarrangedsubview: 'addArrangedSubview',
    addviewingravity: 'addViewInGravity',
    alignment: 'alignment',
    arrangedsubviews: 'arrangedSubviews',
    clippingresistancepriorityfororientation: 'clippingResistancePriorityForOrientation',
    customspacingafterview: 'customSpacingAfterView',
    delegate: 'delegate',
    detachedviews: 'detachedViews',
    detacheshiddenviews: 'detachesHiddenViews',
    distribution: 'distribution',
    edgeinsets: 'edgeInsets',
    hasequalspacing: 'hasEqualSpacing',
    huggingpriorityfororientation: 'huggingPriorityForOrientation',
    insertarrangedsubviewatindex: 'insertArrangedSubviewAtIndex',
    insertviewatindexingravity: 'insertViewAtIndexInGravity',
    orientation: 'orientation',
    removearrangedsubview: 'removeArrangedSubview',
    removeview: 'removeView',
    setclippingresistancepriorityfororientation: 'setClippingResistancePriorityForOrientation',
    setcustomspacingafterview: 'setCustomSpacingAfterView',
    sethuggingpriorityfororientation: 'setHuggingPriorityForOrientation',
    setviewsingravity: 'setViewsInGravity',
    setvisibilitypriorityforview: 'setVisibilityPriorityForView',
    spacing: 'spacing',
    stackviewwithviews: 'stackViewWithViews',
    views: 'views',
    viewsingravity: 'viewsInGravity',
    visibilitypriorityforview: 'visibilityPriorityForView',
  }

  // alignment: interop.Enum<typeof NSLayoutAttribute>;
  // readonly arrangedSubviews: NSArray;
  // readonly detachedViews: NSArray;
  // detachesHiddenViews: boolean;
  // distribution: interop.Enum<typeof NSStackViewDistribution>;
  // edgeInsets: NSEdgeInsets;
  // hasEqualSpacing: boolean;
  // orientation: interop.Enum<typeof NSUserInterfaceLayoutOrientation>;
  // spacing: number;
  // readonly views: NSArray;

  set stackviewwilldetachviews(value: (stackView: NSStackView, views: NSArray | unknown[]) => void) {
    this.delegate.stackViewWillDetachViews = value;
  }
  set stackviewdidreattachviews(value: (stackView: NSStackView, views: NSArray | unknown[]) => void) {
    this.delegate.stackViewDidReattachViews = value;
  }
}

export class HTMLNSRulerViewElement extends HTMLNSViewElement {
  readonly nativeObject = NSRulerView.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    accessoryview: 'accessoryView',
    addmarker: 'addMarker',
    baselinelocation: 'baselineLocation',
    clientview: 'clientView',
    drawhashmarksandlabelsinrect: 'drawHashMarksAndLabelsInRect',
    drawmarkersinrect: 'drawMarkersInRect',
    initwithcoder: 'initWithCoder',
    initwithscrollvieworientation: 'initWithScrollViewOrientation',
    invalidatehashmarks: 'invalidateHashMarks',
    isflipped: 'isFlipped',
    markers: 'markers',
    measurementunits: 'measurementUnits',
    moverulerlinefromlocationtolocation: 'moveRulerlineFromLocationToLocation',
    orientation: 'orientation',
    originoffset: 'originOffset',
    registerunitwithnameabbreviationunittopointsconversionfactorstepupcyclestepdowncycle: 'registerUnitWithNameAbbreviationUnitToPointsConversionFactorStepUpCycleStepDownCycle',
    removemarker: 'removeMarker',
    requiredthickness: 'requiredThickness',
    reservedthicknessforaccessoryview: 'reservedThicknessForAccessoryView',
    reservedthicknessformarkers: 'reservedThicknessForMarkers',
    rulethickness: 'ruleThickness',
    scrollview: 'scrollView',
    trackmarkerwithmouseevent: 'trackMarkerWithMouseEvent',
  }

  // accessoryView: NSView;
  // readonly baselineLocation: number;
  // clientView: NSView;
  // readonly isFlipped: boolean;
  // orientation: interop.Enum<typeof NSRulerOrientation>;
  // originOffset: number;
  // readonly requiredThickness: number;
  // reservedThicknessForAccessoryView: number;
  // reservedThicknessForMarkers: number;
  // ruleThickness: number;
  // scrollView: NSScrollView;
}

export class HTMLNSTextAlternativesElement extends HTMLNSObjectElement {
  readonly nativeObject = NSTextAlternatives.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    alternativestrings: 'alternativeStrings',
    encodewithcoder: 'encodeWithCoder',
    initwithcoder: 'initWithCoder',
    initwithprimarystringalternativestrings: 'initWithPrimaryStringAlternativeStrings',
    noteselectedalternativestring: 'noteSelectedAlternativeString',
    primarystring: 'primaryString',
    supportssecurecoding: 'supportsSecureCoding',
  }

  // readonly alternativeStrings: NSArray;
  // readonly primaryString: NSString;
  // supportsSecureCoding: boolean;
}

export class HTMLNSSoundElement extends HTMLNSObjectElement {
  readonly nativeObject = NSSound.new();
  get delegate(): NSSoundDelegateImpl {
    return (this.nativeObject.delegate ??= NSSoundDelegateImpl.new()) as NSSoundDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    autorelease: 'autorelease',
    caninitwithpasteboard: 'canInitWithPasteboard',
    channelmapping: 'channelMapping',
    class: 'class',
    conformstoprotocol: 'conformsToProtocol',
    copywithzone: 'copyWithZone',
    currenttime: 'currentTime',
    debugdescription: 'debugDescription',
    delegate: 'delegate',
    description: 'description',
    duration: 'duration',
    encodewithcoder: 'encodeWithCoder',
    hash: 'hash',
    initwithcoder: 'initWithCoder',
    initwithcontentsoffilebyreference: 'initWithContentsOfFileByReference',
    initwithcontentsofurlbyreference: 'initWithContentsOfURLByReference',
    initwithdata: 'initWithData',
    initwithpasteboard: 'initWithPasteboard',
    initwithpasteboardpropertylistoftype: 'initWithPasteboardPropertyListOfType',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isplaying: 'isPlaying',
    isproxy: 'isProxy',
    loops: 'loops',
    name: 'name',
    pasteboardpropertylistfortype: 'pasteboardPropertyListForType',
    pause: 'pause',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    play: 'play',
    playbackdeviceidentifier: 'playbackDeviceIdentifier',
    readabletypesforpasteboard: 'readableTypesForPasteboard',
    readingoptionsfortypepasteboard: 'readingOptionsForTypePasteboard',
    release: 'release',
    respondstoselector: 'respondsToSelector',
    resume: 'resume',
    retain: 'retain',
    retaincount: 'retainCount',
    self: 'self',
    setchannelmapping: 'setChannelMapping',
    soundnamed: 'soundNamed',
    soundunfilteredfiletypes: 'soundUnfilteredFileTypes',
    soundunfilteredpasteboardtypes: 'soundUnfilteredPasteboardTypes',
    soundunfilteredtypes: 'soundUnfilteredTypes',
    stop: 'stop',
    superclass: 'superclass',
    supportssecurecoding: 'supportsSecureCoding',
    volume: 'volume',
    writabletypesforpasteboard: 'writableTypesForPasteboard',
    writetopasteboard: 'writeToPasteboard',
    writingoptionsfortypepasteboard: 'writingOptionsForTypePasteboard',
    zone: 'zone',
  }

  // currentTime: number;
  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // readonly duration: number;
  // readonly hash: number;
  // readonly isPlaying: boolean;
  // readonly isProxy: boolean;
  // loops: boolean;
  // readonly name: NSString;
  // soundUnfilteredTypes: NSArray;
  // readonly superclass: interop.Object;
  // supportsSecureCoding: boolean;
  // volume: number;
  // readonly zone: interop.Pointer;

  set sounddidfinishplaying(value: (sound: NSSound, flag: boolean) => void) {
    this.delegate.soundDidFinishPlaying = value;
  }
}

export class HTMLNSGridRowElement extends HTMLNSObjectElement {
  readonly nativeObject = NSGridRow.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    bottompadding: 'bottomPadding',
    cellatindex: 'cellAtIndex',
    encodewithcoder: 'encodeWithCoder',
    gridview: 'gridView',
    height: 'height',
    initwithcoder: 'initWithCoder',
    ishidden: 'isHidden',
    mergecellsinrange: 'mergeCellsInRange',
    numberofcells: 'numberOfCells',
    rowalignment: 'rowAlignment',
    toppadding: 'topPadding',
    yplacement: 'yPlacement',
  }

  // bottomPadding: number;
  // readonly gridView: NSGridView | null;
  // height: number;
  // isHidden: boolean;
  // readonly numberOfCells: number;
  // rowAlignment: interop.Enum<typeof NSGridRowAlignment>;
  // topPadding: number;
  // yPlacement: interop.Enum<typeof NSGridCellPlacement>;
}

export class HTMLNSCollectionLayoutAnchorElement extends HTMLNSObjectElement {
  readonly nativeObject = NSCollectionLayoutAnchor.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    copywithzone: 'copyWithZone',
    edges: 'edges',
    isabsoluteoffset: 'isAbsoluteOffset',
    isfractionaloffset: 'isFractionalOffset',
    layoutanchorwithedges: 'layoutAnchorWithEdges',
    layoutanchorwithedgesabsoluteoffset: 'layoutAnchorWithEdgesAbsoluteOffset',
    layoutanchorwithedgesfractionaloffset: 'layoutAnchorWithEdgesFractionalOffset',
    offset: 'offset',
  }

  // readonly edges: interop.Enum<typeof NSDirectionalRectEdge>;
  // readonly isAbsoluteOffset: boolean;
  // readonly isFractionalOffset: boolean;
  // readonly offset: CGPoint;
}

export class HTMLNSColorElement extends HTMLNSObjectElement {
  readonly nativeObject = NSColor.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    alphacomponent: 'alphaComponent',
    alternateselectedcontrolcolor: 'alternateSelectedControlColor',
    alternateselectedcontroltextcolor: 'alternateSelectedControlTextColor',
    alternatingcontentbackgroundcolors: 'alternatingContentBackgroundColors',
    autorelease: 'autorelease',
    blackcolor: 'blackColor',
    blackcomponent: 'blackComponent',
    blendedcolorwithfractionofcolor: 'blendedColorWithFractionOfColor',
    bluecolor: 'blueColor',
    bluecomponent: 'blueComponent',
    brightnesscomponent: 'brightnessComponent',
    browncolor: 'brownColor',
    catalognamecomponent: 'catalogNameComponent',
    cgcolor: 'CGColor',
    class: 'class',
    clearcolor: 'clearColor',
    colorforcontroltint: 'colorForControlTint',
    colorfrompasteboard: 'colorFromPasteboard',
    colornamecomponent: 'colorNameComponent',
    colornamed: 'colorNamed',
    colornamedbundle: 'colorNamedBundle',
    colorspace: 'colorSpace',
    colorspacename: 'colorSpaceName',
    colorusingcolorspace: 'colorUsingColorSpace',
    colorusingcolorspacename: 'colorUsingColorSpaceName',
    colorusingcolorspacenamedevice: 'colorUsingColorSpaceNameDevice',
    colorusingtype: 'colorUsingType',
    colorwithalphacomponent: 'colorWithAlphaComponent',
    colorwithcalibratedhuesaturationbrightnessalpha: 'colorWithCalibratedHueSaturationBrightnessAlpha',
    colorwithcalibratedredgreenbluealpha: 'colorWithCalibratedRedGreenBlueAlpha',
    colorwithcalibratedwhitealpha: 'colorWithCalibratedWhiteAlpha',
    colorwithcatalognamecolorname: 'colorWithCatalogNameColorName',
    colorwithcgcolor: 'colorWithCGColor',
    colorwithcicolor: 'colorWithCIColor',
    colorwithcolorspacecomponentscount: 'colorWithColorSpaceComponentsCount',
    colorwithcolorspacehuesaturationbrightnessalpha: 'colorWithColorSpaceHueSaturationBrightnessAlpha',
    colorwithdevicecyanmagentayellowblackalpha: 'colorWithDeviceCyanMagentaYellowBlackAlpha',
    colorwithdevicehuesaturationbrightnessalpha: 'colorWithDeviceHueSaturationBrightnessAlpha',
    colorwithdeviceredgreenbluealpha: 'colorWithDeviceRedGreenBlueAlpha',
    colorwithdevicewhitealpha: 'colorWithDeviceWhiteAlpha',
    colorwithdisplayp3redgreenbluealpha: 'colorWithDisplayP3RedGreenBlueAlpha',
    colorwithgenericgamma22whitealpha: 'colorWithGenericGamma22WhiteAlpha',
    colorwithhuesaturationbrightnessalpha: 'colorWithHueSaturationBrightnessAlpha',
    colorwithnamedynamicprovider: 'colorWithNameDynamicProvider',
    colorwithpatternimage: 'colorWithPatternImage',
    colorwithredgreenbluealpha: 'colorWithRedGreenBlueAlpha',
    colorwithsrgbredgreenbluealpha: 'colorWithSRGBRedGreenBlueAlpha',
    colorwithsystemeffect: 'colorWithSystemEffect',
    colorwithwhitealpha: 'colorWithWhiteAlpha',
    conformstoprotocol: 'conformsToProtocol',
    controlaccentcolor: 'controlAccentColor',
    controlalternatingrowbackgroundcolors: 'controlAlternatingRowBackgroundColors',
    controlbackgroundcolor: 'controlBackgroundColor',
    controlcolor: 'controlColor',
    controldarkshadowcolor: 'controlDarkShadowColor',
    controlhighlightcolor: 'controlHighlightColor',
    controllighthighlightcolor: 'controlLightHighlightColor',
    controlshadowcolor: 'controlShadowColor',
    controltextcolor: 'controlTextColor',
    copywithzone: 'copyWithZone',
    currentcontroltint: 'currentControlTint',
    cyancolor: 'cyanColor',
    cyancomponent: 'cyanComponent',
    darkgraycolor: 'darkGrayColor',
    debugdescription: 'debugDescription',
    description: 'description',
    disabledcontroltextcolor: 'disabledControlTextColor',
    drawswatchinrect: 'drawSwatchInRect',
    encodewithcoder: 'encodeWithCoder',
    findhighlightcolor: 'findHighlightColor',
    getcomponents: 'getComponents',
    getcyanmagentayellowblackalpha: 'getCyanMagentaYellowBlackAlpha',
    gethuesaturationbrightnessalpha: 'getHueSaturationBrightnessAlpha',
    getredgreenbluealpha: 'getRedGreenBlueAlpha',
    getwhitealpha: 'getWhiteAlpha',
    graycolor: 'grayColor',
    greencolor: 'greenColor',
    greencomponent: 'greenComponent',
    gridcolor: 'gridColor',
    hash: 'hash',
    headercolor: 'headerColor',
    headertextcolor: 'headerTextColor',
    highlightcolor: 'highlightColor',
    highlightwithlevel: 'highlightWithLevel',
    huecomponent: 'hueComponent',
    ignoresalpha: 'ignoresAlpha',
    init: 'init',
    initwithcoder: 'initWithCoder',
    initwithpasteboardpropertylistoftype: 'initWithPasteboardPropertyListOfType',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    keyboardfocusindicatorcolor: 'keyboardFocusIndicatorColor',
    knobcolor: 'knobColor',
    labelcolor: 'labelColor',
    lightgraycolor: 'lightGrayColor',
    linkcolor: 'linkColor',
    localizedcatalognamecomponent: 'localizedCatalogNameComponent',
    localizedcolornamecomponent: 'localizedColorNameComponent',
    magentacolor: 'magentaColor',
    magentacomponent: 'magentaComponent',
    numberofcomponents: 'numberOfComponents',
    orangecolor: 'orangeColor',
    pasteboardpropertylistfortype: 'pasteboardPropertyListForType',
    patternimage: 'patternImage',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    placeholdertextcolor: 'placeholderTextColor',
    purplecolor: 'purpleColor',
    quaternarylabelcolor: 'quaternaryLabelColor',
    quaternarysystemfillcolor: 'quaternarySystemFillColor',
    quinarylabelcolor: 'quinaryLabelColor',
    quinarysystemfillcolor: 'quinarySystemFillColor',
    readabletypesforpasteboard: 'readableTypesForPasteboard',
    readingoptionsfortypepasteboard: 'readingOptionsForTypePasteboard',
    redcolor: 'redColor',
    redcomponent: 'redComponent',
    release: 'release',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    saturationcomponent: 'saturationComponent',
    scrollbarcolor: 'scrollBarColor',
    scrubbertexturedbackgroundcolor: 'scrubberTexturedBackgroundColor',
    secondarylabelcolor: 'secondaryLabelColor',
    secondaryselectedcontrolcolor: 'secondarySelectedControlColor',
    secondarysystemfillcolor: 'secondarySystemFillColor',
    selectedcontentbackgroundcolor: 'selectedContentBackgroundColor',
    selectedcontrolcolor: 'selectedControlColor',
    selectedcontroltextcolor: 'selectedControlTextColor',
    selectedknobcolor: 'selectedKnobColor',
    selectedmenuitemcolor: 'selectedMenuItemColor',
    selectedmenuitemtextcolor: 'selectedMenuItemTextColor',
    selectedtextbackgroundcolor: 'selectedTextBackgroundColor',
    selectedtextcolor: 'selectedTextColor',
    self: 'self',
    separatorcolor: 'separatorColor',
    set: 'set',
    setfill: 'setFill',
    setstroke: 'setStroke',
    shadowcolor: 'shadowColor',
    shadowwithlevel: 'shadowWithLevel',
    superclass: 'superclass',
    supportssecurecoding: 'supportsSecureCoding',
    systembluecolor: 'systemBlueColor',
    systembrowncolor: 'systemBrownColor',
    systemcyancolor: 'systemCyanColor',
    systemfillcolor: 'systemFillColor',
    systemgraycolor: 'systemGrayColor',
    systemgreencolor: 'systemGreenColor',
    systemindigocolor: 'systemIndigoColor',
    systemmintcolor: 'systemMintColor',
    systemorangecolor: 'systemOrangeColor',
    systempinkcolor: 'systemPinkColor',
    systempurplecolor: 'systemPurpleColor',
    systemredcolor: 'systemRedColor',
    systemtealcolor: 'systemTealColor',
    systemyellowcolor: 'systemYellowColor',
    tertiarylabelcolor: 'tertiaryLabelColor',
    tertiarysystemfillcolor: 'tertiarySystemFillColor',
    textbackgroundcolor: 'textBackgroundColor',
    textcolor: 'textColor',
    textinsertionpointcolor: 'textInsertionPointColor',
    type: 'type',
    underpagebackgroundcolor: 'underPageBackgroundColor',
    unemphasizedselectedcontentbackgroundcolor: 'unemphasizedSelectedContentBackgroundColor',
    unemphasizedselectedtextbackgroundcolor: 'unemphasizedSelectedTextBackgroundColor',
    unemphasizedselectedtextcolor: 'unemphasizedSelectedTextColor',
    whitecolor: 'whiteColor',
    whitecomponent: 'whiteComponent',
    windowbackgroundcolor: 'windowBackgroundColor',
    windowframecolor: 'windowFrameColor',
    windowframetextcolor: 'windowFrameTextColor',
    writabletypesforpasteboard: 'writableTypesForPasteboard',
    writetopasteboard: 'writeToPasteboard',
    writingoptionsfortypepasteboard: 'writingOptionsForTypePasteboard',
    yellowcolor: 'yellowColor',
    yellowcomponent: 'yellowComponent',
    zone: 'zone',
  }

  // readonly alphaComponent: number;
  // alternateSelectedControlColor: NSColor;
  // alternateSelectedControlTextColor: NSColor;
  // alternatingContentBackgroundColors: NSArray;
  // blackColor: NSColor;
  // readonly blackComponent: number;
  // blueColor: NSColor;
  // readonly blueComponent: number;
  // readonly brightnessComponent: number;
  // brownColor: NSColor;
  // readonly catalogNameComponent: NSString;
  // readonly CGColor: interop.Pointer;
  // clearColor: NSColor;
  // readonly colorNameComponent: NSString;
  // readonly colorSpace: NSColorSpace;
  // readonly colorSpaceName: NSString;
  // controlAccentColor: NSColor;
  // controlAlternatingRowBackgroundColors: NSArray;
  // controlBackgroundColor: NSColor;
  // controlColor: NSColor;
  // controlDarkShadowColor: NSColor;
  // controlHighlightColor: NSColor;
  // controlLightHighlightColor: NSColor;
  // controlShadowColor: NSColor;
  // controlTextColor: NSColor;
  // currentControlTint: interop.Enum<typeof NSControlTint>;
  // cyanColor: NSColor;
  // readonly cyanComponent: number;
  // darkGrayColor: NSColor;
  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // disabledControlTextColor: NSColor;
  // findHighlightColor: NSColor;
  // grayColor: NSColor;
  // greenColor: NSColor;
  // readonly greenComponent: number;
  // gridColor: NSColor;
  // readonly hash: number;
  // headerColor: NSColor;
  // headerTextColor: NSColor;
  // highlightColor: NSColor;
  // readonly hueComponent: number;
  // ignoresAlpha: boolean;
  // readonly isProxy: boolean;
  // keyboardFocusIndicatorColor: NSColor;
  // knobColor: NSColor;
  // labelColor: NSColor;
  // lightGrayColor: NSColor;
  // linkColor: NSColor;
  // readonly localizedCatalogNameComponent: NSString;
  // readonly localizedColorNameComponent: NSString;
  // magentaColor: NSColor;
  // readonly magentaComponent: number;
  // readonly numberOfComponents: number;
  // orangeColor: NSColor;
  // readonly patternImage: NSImage;
  // placeholderTextColor: NSColor;
  // purpleColor: NSColor;
  // quaternaryLabelColor: NSColor;
  // quaternarySystemFillColor: NSColor;
  // quinaryLabelColor: NSColor;
  // quinarySystemFillColor: NSColor;
  // redColor: NSColor;
  // readonly redComponent: number;
  // readonly saturationComponent: number;
  // scrollBarColor: NSColor;
  // scrubberTexturedBackgroundColor: NSColor;
  // secondaryLabelColor: NSColor;
  // secondarySelectedControlColor: NSColor;
  // secondarySystemFillColor: NSColor;
  // selectedContentBackgroundColor: NSColor;
  // selectedControlColor: NSColor;
  // selectedControlTextColor: NSColor;
  // selectedKnobColor: NSColor;
  // selectedMenuItemColor: NSColor;
  // selectedMenuItemTextColor: NSColor;
  // selectedTextBackgroundColor: NSColor;
  // selectedTextColor: NSColor;
  // separatorColor: NSColor;
  // shadowColor: NSColor;
  // readonly superclass: interop.Object;
  // supportsSecureCoding: boolean;
  // systemBlueColor: NSColor;
  // systemBrownColor: NSColor;
  // systemCyanColor: NSColor;
  // systemFillColor: NSColor;
  // systemGrayColor: NSColor;
  // systemGreenColor: NSColor;
  // systemIndigoColor: NSColor;
  // systemMintColor: NSColor;
  // systemOrangeColor: NSColor;
  // systemPinkColor: NSColor;
  // systemPurpleColor: NSColor;
  // systemRedColor: NSColor;
  // systemTealColor: NSColor;
  // systemYellowColor: NSColor;
  // tertiaryLabelColor: NSColor;
  // tertiarySystemFillColor: NSColor;
  // textBackgroundColor: NSColor;
  // textColor: NSColor;
  // textInsertionPointColor: NSColor;
  // readonly type: interop.Enum<typeof NSColorType>;
  // underPageBackgroundColor: NSColor;
  // unemphasizedSelectedContentBackgroundColor: NSColor;
  // unemphasizedSelectedTextBackgroundColor: NSColor;
  // unemphasizedSelectedTextColor: NSColor;
  // whiteColor: NSColor;
  // readonly whiteComponent: number;
  // windowBackgroundColor: NSColor;
  // windowFrameColor: NSColor;
  // windowFrameTextColor: NSColor;
  // yellowColor: NSColor;
  // readonly yellowComponent: number;
  // readonly zone: interop.Pointer;
}

export class HTMLNSGraphicsContextElement extends HTMLNSObjectElement {
  readonly nativeObject = NSGraphicsContext.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    attributes: 'attributes',
    cgcontext: 'CGContext',
    cicontext: 'CIContext',
    colorrenderingintent: 'colorRenderingIntent',
    compositingoperation: 'compositingOperation',
    currentcontext: 'currentContext',
    currentcontextdrawingtoscreen: 'currentContextDrawingToScreen',
    flushgraphics: 'flushGraphics',
    focusstack: 'focusStack',
    graphicscontextwithattributes: 'graphicsContextWithAttributes',
    graphicscontextwithbitmapimagerep: 'graphicsContextWithBitmapImageRep',
    graphicscontextwithcgcontextflipped: 'graphicsContextWithCGContextFlipped',
    graphicscontextwithgraphicsportflipped: 'graphicsContextWithGraphicsPortFlipped',
    graphicscontextwithwindow: 'graphicsContextWithWindow',
    graphicsport: 'graphicsPort',
    imageinterpolation: 'imageInterpolation',
    isdrawingtoscreen: 'isDrawingToScreen',
    isflipped: 'isFlipped',
    patternphase: 'patternPhase',
    restoregraphicsstate: 'restoreGraphicsState',
    savegraphicsstate: 'saveGraphicsState',
    setfocusstack: 'setFocusStack',
    setgraphicsstate: 'setGraphicsState',
    shouldantialias: 'shouldAntialias',
  }

  // readonly attributes: NSDictionary;
  // readonly CGContext: interop.Pointer;
  // readonly CIContext: CIContext;
  // colorRenderingIntent: interop.Enum<typeof NSColorRenderingIntent>;
  // compositingOperation: interop.Enum<typeof NSCompositingOperation>;
  // currentContext: NSGraphicsContext;
  // readonly graphicsPort: interop.Pointer;
  // imageInterpolation: interop.Enum<typeof NSImageInterpolation>;
  // readonly isDrawingToScreen: boolean;
  // readonly isFlipped: boolean;
  // patternPhase: CGPoint;
  // shouldAntialias: boolean;
}

export class HTMLNSCollectionLayoutGroupElement extends HTMLNSCollectionLayoutItemElement {
  // @ts-ignore
  readonly nativeObject = NSCollectionLayoutGroup.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    copywithzone: 'copyWithZone',
    customgroupwithlayoutsizeitemprovider: 'customGroupWithLayoutSizeItemProvider',
    horizontalgroupwithlayoutsizesubitemcount: 'horizontalGroupWithLayoutSizeSubitemCount',
    horizontalgroupwithlayoutsizesubitems: 'horizontalGroupWithLayoutSizeSubitems',
    interitemspacing: 'interItemSpacing',
    subitems: 'subitems',
    supplementaryitems: 'supplementaryItems',
    verticalgroupwithlayoutsizesubitemcount: 'verticalGroupWithLayoutSizeSubitemCount',
    verticalgroupwithlayoutsizesubitems: 'verticalGroupWithLayoutSizeSubitems',
    visualdescription: 'visualDescription',
  }

  // interItemSpacing: NSCollectionLayoutSpacing;
  // readonly subitems: NSArray;
}

export class HTMLNSLayoutGuideElement extends HTMLNSObjectElement {
  readonly nativeObject = NSLayoutGuide.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    bottomanchor: 'bottomAnchor',
    centerxanchor: 'centerXAnchor',
    centeryanchor: 'centerYAnchor',
    constraintsaffectinglayoutfororientation: 'constraintsAffectingLayoutForOrientation',
    encodewithcoder: 'encodeWithCoder',
    frame: 'frame',
    hasambiguouslayout: 'hasAmbiguousLayout',
    heightanchor: 'heightAnchor',
    identifier: 'identifier',
    initwithcoder: 'initWithCoder',
    leadinganchor: 'leadingAnchor',
    leftanchor: 'leftAnchor',
    owningview: 'owningView',
    rightanchor: 'rightAnchor',
    topanchor: 'topAnchor',
    trailinganchor: 'trailingAnchor',
    widthanchor: 'widthAnchor',
  }

  // readonly bottomAnchor: NSLayoutYAxisAnchor;
  // readonly centerXAnchor: NSLayoutXAxisAnchor;
  // readonly centerYAnchor: NSLayoutYAxisAnchor;
  // readonly frame: CGRect;
  // readonly hasAmbiguousLayout: boolean;
  // readonly heightAnchor: NSLayoutDimension;
  // readonly leadingAnchor: NSLayoutXAxisAnchor;
  // readonly leftAnchor: NSLayoutXAxisAnchor;
  // owningView: NSView;
  // readonly rightAnchor: NSLayoutXAxisAnchor;
  // readonly topAnchor: NSLayoutYAxisAnchor;
  // readonly trailingAnchor: NSLayoutXAxisAnchor;
  // readonly widthAnchor: NSLayoutDimension;
}

export class HTMLNSFilePromiseProviderElement extends HTMLNSObjectElement {
  readonly nativeObject = NSFilePromiseProvider.new();
  get delegate(): NSFilePromiseProviderDelegateImpl {
    return (this.nativeObject.delegate ??= NSFilePromiseProviderDelegateImpl.new()) as NSFilePromiseProviderDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    autorelease: 'autorelease',
    class: 'class',
    conformstoprotocol: 'conformsToProtocol',
    debugdescription: 'debugDescription',
    delegate: 'delegate',
    description: 'description',
    filetype: 'fileType',
    hash: 'hash',
    init: 'init',
    initwithfiletypedelegate: 'initWithFileTypeDelegate',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    pasteboardpropertylistfortype: 'pasteboardPropertyListForType',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    release: 'release',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    self: 'self',
    superclass: 'superclass',
    userinfo: 'userInfo',
    writabletypesforpasteboard: 'writableTypesForPasteboard',
    writingoptionsfortypepasteboard: 'writingOptionsForTypePasteboard',
    zone: 'zone',
  }

  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // readonly hash: number;
  // readonly isProxy: boolean;
  // readonly superclass: interop.Object;
  // userInfo: interop.Object;
  // readonly zone: interop.Pointer;

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
  readonly nativeObject = NSLevelIndicatorCell.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    criticalvalue: 'criticalValue',
    initwithlevelindicatorstyle: 'initWithLevelIndicatorStyle',
    levelindicatorstyle: 'levelIndicatorStyle',
    maxvalue: 'maxValue',
    minvalue: 'minValue',
    numberofmajortickmarks: 'numberOfMajorTickMarks',
    numberoftickmarks: 'numberOfTickMarks',
    rectoftickmarkatindex: 'rectOfTickMarkAtIndex',
    tickmarkposition: 'tickMarkPosition',
    tickmarkvalueatindex: 'tickMarkValueAtIndex',
    warningvalue: 'warningValue',
  }

  // criticalValue: number;
  // levelIndicatorStyle: interop.Enum<typeof NSLevelIndicatorStyle>;
  // maxValue: number;
  // minValue: number;
  // numberOfMajorTickMarks: number;
  // numberOfTickMarks: number;
  // tickMarkPosition: interop.Enum<typeof NSTickMarkPosition>;
  // warningValue: number;
}

export class HTMLNSDatePickerElement extends HTMLNSControlElement {
  readonly nativeObject = NSDatePicker.new();
  get delegate(): NSDatePickerCellDelegateImpl {
    return (this.nativeObject.delegate ??= NSDatePickerCellDelegateImpl.new()) as NSDatePickerCellDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    backgroundcolor: 'backgroundColor',
    calendar: 'calendar',
    datepickerelements: 'datePickerElements',
    datepickermode: 'datePickerMode',
    datepickerstyle: 'datePickerStyle',
    datevalue: 'dateValue',
    delegate: 'delegate',
    drawsbackground: 'drawsBackground',
    isbezeled: 'isBezeled',
    isbordered: 'isBordered',
    locale: 'locale',
    maxdate: 'maxDate',
    mindate: 'minDate',
    presentscalendaroverlay: 'presentsCalendarOverlay',
    textcolor: 'textColor',
    timeinterval: 'timeInterval',
    timezone: 'timeZone',
  }

  // backgroundColor: NSColor;
  // calendar: NSCalendar;
  // datePickerElements: interop.Enum<typeof NSDatePickerElementFlags>;
  // datePickerMode: interop.Enum<typeof NSDatePickerMode>;
  // datePickerStyle: interop.Enum<typeof NSDatePickerStyle>;
  // dateValue: NSDate;
  // drawsBackground: boolean;
  // isBezeled: boolean;
  // isBordered: boolean;
  // locale: NSLocale;
  // maxDate: NSDate;
  // minDate: NSDate;
  // presentsCalendarOverlay: boolean;
  // textColor: NSColor;
  // timeInterval: number;
  // timeZone: NSTimeZone;

  set datepickercellvalidateproposeddatevaluetimeinterval(value: (datePickerCell: NSDatePickerCell, proposedDateValue: interop.PointerConvertible, proposedTimeInterval: interop.PointerConvertible) => void) {
    this.delegate.datePickerCellValidateProposedDateValueTimeInterval = value;
  }
}

export class HTMLNSScrubberImageItemViewElement extends HTMLNSScrubberItemViewElement {
  readonly nativeObject = NSScrubberImageItemView.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    image: 'image',
    imagealignment: 'imageAlignment',
    imageview: 'imageView',
  }

  // image: NSImage;
  // imageAlignment: interop.Enum<typeof NSImageAlignment>;
  // readonly imageView: NSImageView;
}

export class HTMLNSMatrixElement extends HTMLNSControlElement {
  readonly nativeObject = NSMatrix.new();
  get delegate(): NSMatrixDelegateImpl {
    return (this.nativeObject.delegate ??= NSMatrixDelegateImpl.new()) as NSMatrixDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    acceptsfirstmouse: 'acceptsFirstMouse',
    addcolumn: 'addColumn',
    addcolumnwithcells: 'addColumnWithCells',
    addrow: 'addRow',
    addrowwithcells: 'addRowWithCells',
    allowsemptyselection: 'allowsEmptySelection',
    autorecalculatescellsize: 'autorecalculatesCellSize',
    autorelease: 'autorelease',
    autosizescells: 'autosizesCells',
    backgroundcolor: 'backgroundColor',
    cellatrowcolumn: 'cellAtRowColumn',
    cellbackgroundcolor: 'cellBackgroundColor',
    cellclass: 'cellClass',
    cellframeatrowcolumn: 'cellFrameAtRowColumn',
    cells: 'cells',
    cellsize: 'cellSize',
    cellwithtag: 'cellWithTag',
    class: 'class',
    conformstoprotocol: 'conformsToProtocol',
    debugdescription: 'debugDescription',
    delegate: 'delegate',
    description: 'description',
    deselectallcells: 'deselectAllCells',
    deselectselectedcell: 'deselectSelectedCell',
    doubleaction: 'doubleAction',
    drawcellatrowcolumn: 'drawCellAtRowColumn',
    drawsbackground: 'drawsBackground',
    drawscellbackground: 'drawsCellBackground',
    getnumberofrowscolumns: 'getNumberOfRowsColumns',
    getrowcolumnforpoint: 'getRowColumnForPoint',
    getrowcolumnofcell: 'getRowColumnOfCell',
    hash: 'hash',
    highlightcellatrowcolumn: 'highlightCellAtRowColumn',
    initwithframe: 'initWithFrame',
    initwithframemodecellclassnumberofrowsnumberofcolumns: 'initWithFrameModeCellClassNumberOfRowsNumberOfColumns',
    initwithframemodeprototypenumberofrowsnumberofcolumns: 'initWithFrameModePrototypeNumberOfRowsNumberOfColumns',
    insertcolumn: 'insertColumn',
    insertcolumnwithcells: 'insertColumnWithCells',
    insertrow: 'insertRow',
    insertrowwithcells: 'insertRowWithCells',
    intercellspacing: 'intercellSpacing',
    isautoscroll: 'isAutoscroll',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    isselectionbyrect: 'isSelectionByRect',
    keycell: 'keyCell',
    makecellatrowcolumn: 'makeCellAtRowColumn',
    mode: 'mode',
    mousedown: 'mouseDown',
    mousedownflags: 'mouseDownFlags',
    numberofcolumns: 'numberOfColumns',
    numberofrows: 'numberOfRows',
    performkeyequivalent: 'performKeyEquivalent',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    prototype: 'prototype',
    putcellatrowcolumn: 'putCellAtRowColumn',
    release: 'release',
    removecolumn: 'removeColumn',
    removerow: 'removeRow',
    renewrowscolumns: 'renewRowsColumns',
    resetcursorrects: 'resetCursorRects',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    scrollcelltovisibleatrowcolumn: 'scrollCellToVisibleAtRowColumn',
    selectall: 'selectAll',
    selectcellatrowcolumn: 'selectCellAtRowColumn',
    selectcellwithtag: 'selectCellWithTag',
    selectedcell: 'selectedCell',
    selectedcells: 'selectedCells',
    selectedcolumn: 'selectedColumn',
    selectedrow: 'selectedRow',
    selecttext: 'selectText',
    selecttextatrowcolumn: 'selectTextAtRowColumn',
    self: 'self',
    sendaction: 'sendAction',
    sendactiontoforallcells: 'sendActionToForAllCells',
    senddoubleaction: 'sendDoubleAction',
    setscrollable: 'setScrollable',
    setselectionfromtoanchorhighlight: 'setSelectionFromToAnchorHighlight',
    setstateatrowcolumn: 'setStateAtRowColumn',
    settooltipforcell: 'setToolTipForCell',
    setvalidatesize: 'setValidateSize',
    sizetocells: 'sizeToCells',
    sortusingfunctioncontext: 'sortUsingFunctionContext',
    sortusingselector: 'sortUsingSelector',
    superclass: 'superclass',
    tabkeytraversescells: 'tabKeyTraversesCells',
    textdidbeginediting: 'textDidBeginEditing',
    textdidchange: 'textDidChange',
    textdidendediting: 'textDidEndEditing',
    textshouldbeginediting: 'textShouldBeginEditing',
    textshouldendediting: 'textShouldEndEditing',
    tooltipforcell: 'toolTipForCell',
    validateuserinterfaceitem: 'validateUserInterfaceItem',
    viewstringfortooltippointuserdata: 'viewStringForToolTipPointUserData',
    zone: 'zone',
  }

  // allowsEmptySelection: boolean;
  // autorecalculatesCellSize: boolean;
  // autosizesCells: boolean;
  // backgroundColor: NSColor;
  // cellBackgroundColor: NSColor;
  // cellClass: interop.Object;
  // readonly cells: NSArray;
  // cellSize: CGSize;
  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // doubleAction: string;
  // drawsBackground: boolean;
  // drawsCellBackground: boolean;
  // readonly hash: number;
  // intercellSpacing: CGSize;
  // isAutoscroll: boolean;
  // readonly isProxy: boolean;
  // isSelectionByRect: boolean;
  // keyCell: NSCell;
  // mode: interop.Enum<typeof NSMatrixMode>;
  // readonly mouseDownFlags: number;
  // readonly numberOfColumns: number;
  // readonly numberOfRows: number;
  // prototype: NSCell;
  // readonly selectedCell: NSCell;
  // readonly selectedCells: NSArray;
  // readonly selectedColumn: number;
  // readonly selectedRow: number;
  // readonly superclass: interop.Object;
  // tabKeyTraversesCells: boolean;
  // readonly zone: interop.Pointer;
}

export class HTMLNSRuleEditorElement extends HTMLNSControlElement {
  readonly nativeObject = NSRuleEditor.new();
  get delegate(): NSRuleEditorDelegateImpl {
    return (this.nativeObject.delegate ??= NSRuleEditorDelegateImpl.new()) as NSRuleEditorDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    addrow: 'addRow',
    canremoveallrows: 'canRemoveAllRows',
    criteriaforrow: 'criteriaForRow',
    criteriakeypath: 'criteriaKeyPath',
    delegate: 'delegate',
    displayvaluesforrow: 'displayValuesForRow',
    displayvalueskeypath: 'displayValuesKeyPath',
    formattingdictionary: 'formattingDictionary',
    formattingstringsfilename: 'formattingStringsFilename',
    insertrowatindexwithtypeassubrowofrowanimate: 'insertRowAtIndexWithTypeAsSubrowOfRowAnimate',
    iseditable: 'isEditable',
    nestingmode: 'nestingMode',
    numberofrows: 'numberOfRows',
    parentrowforrow: 'parentRowForRow',
    predicate: 'predicate',
    predicateforrow: 'predicateForRow',
    reloadcriteria: 'reloadCriteria',
    reloadpredicate: 'reloadPredicate',
    removerowatindex: 'removeRowAtIndex',
    removerowsatindexesincludesubrows: 'removeRowsAtIndexesIncludeSubrows',
    rowclass: 'rowClass',
    rowfordisplayvalue: 'rowForDisplayValue',
    rowheight: 'rowHeight',
    rowtypeforrow: 'rowTypeForRow',
    rowtypekeypath: 'rowTypeKeyPath',
    selectedrowindexes: 'selectedRowIndexes',
    selectrowindexesbyextendingselection: 'selectRowIndexesByExtendingSelection',
    setcriteriaanddisplayvaluesforrowatindex: 'setCriteriaAndDisplayValuesForRowAtIndex',
    subrowindexesforrow: 'subrowIndexesForRow',
    subrowskeypath: 'subrowsKeyPath',
  }

  // canRemoveAllRows: boolean;
  // isEditable: boolean;
  // nestingMode: interop.Enum<typeof NSRuleEditorNestingMode>;
  // readonly numberOfRows: number;
  // readonly predicate: NSPredicate;
  // rowClass: interop.Object;
  // rowHeight: number;
  // readonly selectedRowIndexes: NSIndexSet;

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
  readonly nativeObject = NSSegmentedControl.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    activecompressionoptions: 'activeCompressionOptions',
    alignmentforsegment: 'alignmentForSegment',
    compresswithprioritizedcompressionoptions: 'compressWithPrioritizedCompressionOptions',
    doublevalueforselectedsegment: 'doubleValueForSelectedSegment',
    imageforsegment: 'imageForSegment',
    imagescalingforsegment: 'imageScalingForSegment',
    indexofselecteditem: 'indexOfSelectedItem',
    isenabledforsegment: 'isEnabledForSegment',
    isselectedforsegment: 'isSelectedForSegment',
    isspringloaded: 'isSpringLoaded',
    labelforsegment: 'labelForSegment',
    menuforsegment: 'menuForSegment',
    minimumsizewithprioritizedcompressionoptions: 'minimumSizeWithPrioritizedCompressionOptions',
    segmentcount: 'segmentCount',
    segmentdistribution: 'segmentDistribution',
    segmentedcontrolwithimagestrackingmodetargetaction: 'segmentedControlWithImagesTrackingModeTargetAction',
    segmentedcontrolwithlabelstrackingmodetargetaction: 'segmentedControlWithLabelsTrackingModeTargetAction',
    segmentstyle: 'segmentStyle',
    selectedsegment: 'selectedSegment',
    selectedsegmentbezelcolor: 'selectedSegmentBezelColor',
    selectsegmentwithtag: 'selectSegmentWithTag',
    setalignmentforsegment: 'setAlignmentForSegment',
    setenabledforsegment: 'setEnabledForSegment',
    setimageforsegment: 'setImageForSegment',
    setimagescalingforsegment: 'setImageScalingForSegment',
    setlabelforsegment: 'setLabelForSegment',
    setmenuforsegment: 'setMenuForSegment',
    setselectedforsegment: 'setSelectedForSegment',
    setshowsmenuindicatorforsegment: 'setShowsMenuIndicatorForSegment',
    settagforsegment: 'setTagForSegment',
    settooltipforsegment: 'setToolTipForSegment',
    setwidthforsegment: 'setWidthForSegment',
    showsmenuindicatorforsegment: 'showsMenuIndicatorForSegment',
    tagforsegment: 'tagForSegment',
    tooltipforsegment: 'toolTipForSegment',
    trackingmode: 'trackingMode',
    widthforsegment: 'widthForSegment',
  }

  // readonly activeCompressionOptions: NSUserInterfaceCompressionOptions;
  // readonly doubleValueForSelectedSegment: number;
  // readonly indexOfSelectedItem: number;
  // isSpringLoaded: boolean;
  // segmentCount: number;
  // segmentDistribution: interop.Enum<typeof NSSegmentDistribution>;
  // segmentStyle: interop.Enum<typeof NSSegmentStyle>;
  // selectedSegment: number;
  // selectedSegmentBezelColor: NSColor;
  // trackingMode: interop.Enum<typeof NSSegmentSwitchTracking>;
}

export class HTMLNSStepperElement extends HTMLNSControlElement {
  readonly nativeObject = NSStepper.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    accessibilityframe: 'accessibilityFrame',
    accessibilityidentifier: 'accessibilityIdentifier',
    accessibilitylabel: 'accessibilityLabel',
    accessibilityparent: 'accessibilityParent',
    accessibilityperformdecrement: 'accessibilityPerformDecrement',
    accessibilityperformincrement: 'accessibilityPerformIncrement',
    accessibilityvalue: 'accessibilityValue',
    autorelease: 'autorelease',
    autorepeat: 'autorepeat',
    class: 'class',
    conformstoprotocol: 'conformsToProtocol',
    debugdescription: 'debugDescription',
    description: 'description',
    hash: 'hash',
    increment: 'increment',
    isaccessibilityfocused: 'isAccessibilityFocused',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    maxvalue: 'maxValue',
    minvalue: 'minValue',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    release: 'release',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    self: 'self',
    superclass: 'superclass',
    valuewraps: 'valueWraps',
    zone: 'zone',
  }

  // accessibilityFrame: CGRect;
  // accessibilityParent: interop.Object;
  // accessibilityValue: interop.Object;
  // autorepeat: boolean;
  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // readonly hash: number;
  // increment: number;
  // isAccessibilityFocused: boolean;
  // readonly isProxy: boolean;
  // maxValue: number;
  // minValue: number;
  // readonly superclass: interop.Object;
  // valueWraps: boolean;
  // readonly zone: interop.Pointer;
}

export class HTMLNSBrowserElement extends HTMLNSControlElement {
  // @ts-ignore
  readonly nativeObject = NSBrowser.new();
  get delegate(): NSBrowserDelegateImpl {
    return (this.nativeObject.delegate ??= NSBrowserDelegateImpl.new()) as NSBrowserDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    acceptsarrowkeys: 'acceptsArrowKeys',
    addcolumn: 'addColumn',
    allowsbranchselection: 'allowsBranchSelection',
    allowsemptyselection: 'allowsEmptySelection',
    allowsmultipleselection: 'allowsMultipleSelection',
    allowstypeselect: 'allowsTypeSelect',
    autohidesscroller: 'autohidesScroller',
    backgroundcolor: 'backgroundColor',
    candragrowswithindexesincolumnwithevent: 'canDragRowsWithIndexesInColumnWithEvent',
    cellclass: 'cellClass',
    cellprototype: 'cellPrototype',
    clickedcolumn: 'clickedColumn',
    clickedrow: 'clickedRow',
    columncontentwidthforcolumnwidth: 'columnContentWidthForColumnWidth',
    columnofmatrix: 'columnOfMatrix',
    columnresizingtype: 'columnResizingType',
    columnsautosavename: 'columnsAutosaveName',
    columnwidthforcolumncontentwidth: 'columnWidthForColumnContentWidth',
    defaultcolumnwidth: 'defaultColumnWidth',
    delegate: 'delegate',
    displayallcolumns: 'displayAllColumns',
    displaycolumn: 'displayColumn',
    doclick: 'doClick',
    dodoubleclick: 'doDoubleClick',
    doubleaction: 'doubleAction',
    draggingimageforrowswithindexesincolumnwitheventoffset: 'draggingImageForRowsWithIndexesInColumnWithEventOffset',
    drawtitleofcolumninrect: 'drawTitleOfColumnInRect',
    edititematindexpathwitheventselect: 'editItemAtIndexPathWithEventSelect',
    firstvisiblecolumn: 'firstVisibleColumn',
    frameofcolumn: 'frameOfColumn',
    frameofinsideofcolumn: 'frameOfInsideOfColumn',
    frameofrowincolumn: 'frameOfRowInColumn',
    getrowcolumnforpoint: 'getRowColumnForPoint',
    hashorizontalscroller: 'hasHorizontalScroller',
    indexpathforcolumn: 'indexPathForColumn',
    isleafitem: 'isLeafItem',
    isloaded: 'isLoaded',
    istitled: 'isTitled',
    itematindexpath: 'itemAtIndexPath',
    itematrowincolumn: 'itemAtRowInColumn',
    lastcolumn: 'lastColumn',
    lastvisiblecolumn: 'lastVisibleColumn',
    loadcolumnzero: 'loadColumnZero',
    loadedcellatrowcolumn: 'loadedCellAtRowColumn',
    matrixclass: 'matrixClass',
    matrixincolumn: 'matrixInColumn',
    maxvisiblecolumns: 'maxVisibleColumns',
    mincolumnwidth: 'minColumnWidth',
    noteheightofrowswithindexeschangedincolumn: 'noteHeightOfRowsWithIndexesChangedInColumn',
    numberofvisiblecolumns: 'numberOfVisibleColumns',
    parentforitemsincolumn: 'parentForItemsInColumn',
    path: 'path',
    pathseparator: 'pathSeparator',
    pathtocolumn: 'pathToColumn',
    prefersallcolumnuserresizing: 'prefersAllColumnUserResizing',
    reloadcolumn: 'reloadColumn',
    reloaddataforrowindexesincolumn: 'reloadDataForRowIndexesInColumn',
    removesavedcolumnswithautosavename: 'removeSavedColumnsWithAutosaveName',
    reusescolumns: 'reusesColumns',
    rowheight: 'rowHeight',
    scrollcolumnsleftby: 'scrollColumnsLeftBy',
    scrollcolumnsrightby: 'scrollColumnsRightBy',
    scrollcolumntovisible: 'scrollColumnToVisible',
    scrollrowtovisibleincolumn: 'scrollRowToVisibleInColumn',
    scrollviascroller: 'scrollViaScroller',
    selectall: 'selectAll',
    selectedcell: 'selectedCell',
    selectedcellincolumn: 'selectedCellInColumn',
    selectedcells: 'selectedCells',
    selectedcolumn: 'selectedColumn',
    selectedrowincolumn: 'selectedRowInColumn',
    selectedrowindexesincolumn: 'selectedRowIndexesInColumn',
    selectionindexpath: 'selectionIndexPath',
    selectionindexpaths: 'selectionIndexPaths',
    selectrowincolumn: 'selectRowInColumn',
    selectrowindexesincolumn: 'selectRowIndexesInColumn',
    sendaction: 'sendAction',
    sendsactiononarrowkeys: 'sendsActionOnArrowKeys',
    separatescolumns: 'separatesColumns',
    setacceptsarrowkeys: 'setAcceptsArrowKeys',
    setcellclass: 'setCellClass',
    setdefaultcolumnwidth: 'setDefaultColumnWidth',
    setdraggingsourceoperationmaskforlocal: 'setDraggingSourceOperationMaskForLocal',
    setmatrixclass: 'setMatrixClass',
    setpath: 'setPath',
    settitleofcolumn: 'setTitleOfColumn',
    setwidthofcolumn: 'setWidthOfColumn',
    takestitlefrompreviouscolumn: 'takesTitleFromPreviousColumn',
    tile: 'tile',
    titleframeofcolumn: 'titleFrameOfColumn',
    titleheight: 'titleHeight',
    titleofcolumn: 'titleOfColumn',
    updatescroller: 'updateScroller',
    validatevisiblecolumns: 'validateVisibleColumns',
    widthofcolumn: 'widthOfColumn',
  }

  // allowsBranchSelection: boolean;
  // allowsEmptySelection: boolean;
  // allowsMultipleSelection: boolean;
  // allowsTypeSelect: boolean;
  // autohidesScroller: boolean;
  // backgroundColor: NSColor;
  // cellClass: interop.Object;
  // cellPrototype: interop.Object;
  // readonly clickedColumn: number;
  // readonly clickedRow: number;
  // columnResizingType: interop.Enum<typeof NSBrowserColumnResizingType>;
  // doubleAction: string;
  // readonly firstVisibleColumn: number;
  // hasHorizontalScroller: boolean;
  // readonly isLoaded: boolean;
  // isTitled: boolean;
  // lastColumn: number;
  // readonly lastVisibleColumn: number;
  // maxVisibleColumns: number;
  // minColumnWidth: number;
  // readonly numberOfVisibleColumns: number;
  // prefersAllColumnUserResizing: boolean;
  // reusesColumns: boolean;
  // rowHeight: number;
  // readonly selectedCell: interop.Object;
  // readonly selectedCells: NSArray;
  // readonly selectedColumn: number;
  // selectionIndexPath: NSIndexPath;
  // sendsActionOnArrowKeys: boolean;
  // separatesColumns: boolean;
  // takesTitleFromPreviousColumn: boolean;
  // readonly titleHeight: number;

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
  // @ts-ignore
  readonly nativeObject = NSTextField.new();
  get delegate(): NSTextFieldDelegateImpl {
    return (this.nativeObject.delegate ??= NSTextFieldDelegateImpl.new()) as NSTextFieldDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    acceptsfirstresponder: 'acceptsFirstResponder',
    accessibilityattributedstringforrange: 'accessibilityAttributedStringForRange',
    accessibilityframe: 'accessibilityFrame',
    accessibilityframeforrange: 'accessibilityFrameForRange',
    accessibilityidentifier: 'accessibilityIdentifier',
    accessibilitylineforindex: 'accessibilityLineForIndex',
    accessibilityparent: 'accessibilityParent',
    accessibilityrangeforline: 'accessibilityRangeForLine',
    accessibilitystringforrange: 'accessibilityStringForRange',
    accessibilityvalue: 'accessibilityValue',
    accessibilityvisiblecharacterrange: 'accessibilityVisibleCharacterRange',
    allowscharacterpickertouchbaritem: 'allowsCharacterPickerTouchBarItem',
    allowsdefaulttighteningfortruncation: 'allowsDefaultTighteningForTruncation',
    allowseditingtextattributes: 'allowsEditingTextAttributes',
    autorelease: 'autorelease',
    backgroundcolor: 'backgroundColor',
    bezelstyle: 'bezelStyle',
    class: 'class',
    conformstoprotocol: 'conformsToProtocol',
    contenttype: 'contentType',
    debugdescription: 'debugDescription',
    delegate: 'delegate',
    description: 'description',
    drawsbackground: 'drawsBackground',
    hash: 'hash',
    importsgraphics: 'importsGraphics',
    isaccessibilityfocused: 'isAccessibilityFocused',
    isautomatictextcompletionenabled: 'isAutomaticTextCompletionEnabled',
    isbezeled: 'isBezeled',
    isbordered: 'isBordered',
    iseditable: 'isEditable',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    isselectable: 'isSelectable',
    labelwithattributedstring: 'labelWithAttributedString',
    labelwithstring: 'labelWithString',
    linebreakstrategy: 'lineBreakStrategy',
    maximumnumberoflines: 'maximumNumberOfLines',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    placeholderattributedstring: 'placeholderAttributedString',
    placeholderstring: 'placeholderString',
    preferredmaxlayoutwidth: 'preferredMaxLayoutWidth',
    release: 'release',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    selecttext: 'selectText',
    self: 'self',
    settitlewithmnemonic: 'setTitleWithMnemonic',
    superclass: 'superclass',
    textcolor: 'textColor',
    textdidbeginediting: 'textDidBeginEditing',
    textdidchange: 'textDidChange',
    textdidendediting: 'textDidEndEditing',
    textfieldwithstring: 'textFieldWithString',
    textshouldbeginediting: 'textShouldBeginEditing',
    textshouldendediting: 'textShouldEndEditing',
    validateuserinterfaceitem: 'validateUserInterfaceItem',
    wrappinglabelwithstring: 'wrappingLabelWithString',
    zone: 'zone',
  }

  // readonly acceptsFirstResponder: boolean;
  // accessibilityFrame: CGRect;
  // accessibilityParent: interop.Object;
  // accessibilityVisibleCharacterRange: _NSRange;
  // allowsCharacterPickerTouchBarItem: boolean;
  // allowsDefaultTighteningForTruncation: boolean;
  // allowsEditingTextAttributes: boolean;
  // backgroundColor: NSColor;
  // bezelStyle: interop.Enum<typeof NSTextFieldBezelStyle>;
  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // drawsBackground: boolean;
  // readonly hash: number;
  // importsGraphics: boolean;
  // isAccessibilityFocused: boolean;
  // isAutomaticTextCompletionEnabled: boolean;
  // isBezeled: boolean;
  // isBordered: boolean;
  // isEditable: boolean;
  // readonly isProxy: boolean;
  // isSelectable: boolean;
  // lineBreakStrategy: interop.Enum<typeof NSLineBreakStrategy>;
  // maximumNumberOfLines: number;
  // placeholderAttributedString: NSAttributedString;
  // preferredMaxLayoutWidth: number;
  // readonly superclass: interop.Object;
  // textColor: NSColor;
  // readonly zone: interop.Pointer;

  set textfieldtextviewcandidatesforselectedrange(value: (textField: NSTextField, textView: NSTextView, selectedRange: _NSRange) => NSArray) {
    this.delegate.textFieldTextViewCandidatesForSelectedRange = value;
  }
  set textfieldtextviewshouldselectcandidateatindex(value: (textField: NSTextField, textView: NSTextView, index: number) => boolean) {
    this.delegate.textFieldTextViewShouldSelectCandidateAtIndex = value;
  }
}

export class HTMLNSLevelIndicatorElement extends HTMLNSControlElement {
  readonly nativeObject = NSLevelIndicator.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    criticalfillcolor: 'criticalFillColor',
    criticalvalue: 'criticalValue',
    drawstieredcapacitylevels: 'drawsTieredCapacityLevels',
    fillcolor: 'fillColor',
    iseditable: 'isEditable',
    levelindicatorstyle: 'levelIndicatorStyle',
    maxvalue: 'maxValue',
    minvalue: 'minValue',
    numberofmajortickmarks: 'numberOfMajorTickMarks',
    numberoftickmarks: 'numberOfTickMarks',
    placeholdervisibility: 'placeholderVisibility',
    ratingimage: 'ratingImage',
    ratingplaceholderimage: 'ratingPlaceholderImage',
    rectoftickmarkatindex: 'rectOfTickMarkAtIndex',
    tickmarkposition: 'tickMarkPosition',
    tickmarkvalueatindex: 'tickMarkValueAtIndex',
    warningfillcolor: 'warningFillColor',
    warningvalue: 'warningValue',
  }

  // criticalFillColor: NSColor;
  // criticalValue: number;
  // drawsTieredCapacityLevels: boolean;
  // fillColor: NSColor;
  // isEditable: boolean;
  // levelIndicatorStyle: interop.Enum<typeof NSLevelIndicatorStyle>;
  // maxValue: number;
  // minValue: number;
  // numberOfMajorTickMarks: number;
  // numberOfTickMarks: number;
  // placeholderVisibility: interop.Enum<typeof NSLevelIndicatorPlaceholderVisibility>;
  // ratingImage: NSImage;
  // ratingPlaceholderImage: NSImage;
  // tickMarkPosition: interop.Enum<typeof NSTickMarkPosition>;
  // warningFillColor: NSColor;
  // warningValue: number;
}

export class HTMLNSFormElement extends HTMLNSMatrixElement {
  readonly nativeObject = NSForm.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    addentry: 'addEntry',
    cellatindex: 'cellAtIndex',
    drawcellatindex: 'drawCellAtIndex',
    indexofcellwithtag: 'indexOfCellWithTag',
    indexofselecteditem: 'indexOfSelectedItem',
    insertentryatindex: 'insertEntryAtIndex',
    preferredtextfieldwidth: 'preferredTextFieldWidth',
    removeentryatindex: 'removeEntryAtIndex',
    selecttextatindex: 'selectTextAtIndex',
    setbezeled: 'setBezeled',
    setbordered: 'setBordered',
    setentrywidth: 'setEntryWidth',
    setframesize: 'setFrameSize',
    setinterlinespacing: 'setInterlineSpacing',
    setpreferredtextfieldwidth: 'setPreferredTextFieldWidth',
    settextalignment: 'setTextAlignment',
    settextbasewritingdirection: 'setTextBaseWritingDirection',
    settextfont: 'setTextFont',
    settitlealignment: 'setTitleAlignment',
    settitlebasewritingdirection: 'setTitleBaseWritingDirection',
    settitlefont: 'setTitleFont',
  }

}

export class HTMLNSImageViewElement extends HTMLNSControlElement {
  readonly nativeObject = NSImageView.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    accessibilityframe: 'accessibilityFrame',
    accessibilityidentifier: 'accessibilityIdentifier',
    accessibilitylabel: 'accessibilityLabel',
    accessibilityparent: 'accessibilityParent',
    addsymboleffect: 'addSymbolEffect',
    addsymboleffectoptions: 'addSymbolEffectOptions',
    addsymboleffectoptionsanimated: 'addSymbolEffectOptionsAnimated',
    allowscutcopypaste: 'allowsCutCopyPaste',
    animates: 'animates',
    autorelease: 'autorelease',
    class: 'class',
    conformstoprotocol: 'conformsToProtocol',
    contenttintcolor: 'contentTintColor',
    debugdescription: 'debugDescription',
    defaultpreferredimagedynamicrange: 'defaultPreferredImageDynamicRange',
    description: 'description',
    hash: 'hash',
    image: 'image',
    imagealignment: 'imageAlignment',
    imagedynamicrange: 'imageDynamicRange',
    imageframestyle: 'imageFrameStyle',
    imagescaling: 'imageScaling',
    imageviewwithimage: 'imageViewWithImage',
    isaccessibilityfocused: 'isAccessibilityFocused',
    iseditable: 'isEditable',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    preferredimagedynamicrange: 'preferredImageDynamicRange',
    release: 'release',
    removeallsymboleffects: 'removeAllSymbolEffects',
    removeallsymboleffectswithoptions: 'removeAllSymbolEffectsWithOptions',
    removeallsymboleffectswithoptionsanimated: 'removeAllSymbolEffectsWithOptionsAnimated',
    removesymboleffectoftype: 'removeSymbolEffectOfType',
    removesymboleffectoftypeoptions: 'removeSymbolEffectOfTypeOptions',
    removesymboleffectoftypeoptionsanimated: 'removeSymbolEffectOfTypeOptionsAnimated',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    self: 'self',
    setsymbolimagewithcontenttransition: 'setSymbolImageWithContentTransition',
    setsymbolimagewithcontenttransitionoptions: 'setSymbolImageWithContentTransitionOptions',
    superclass: 'superclass',
    symbolconfiguration: 'symbolConfiguration',
    validatemenuitem: 'validateMenuItem',
    zone: 'zone',
  }

  // accessibilityFrame: CGRect;
  // accessibilityParent: interop.Object;
  // allowsCutCopyPaste: boolean;
  // animates: boolean;
  // contentTintColor: NSColor;
  // readonly debugDescription: NSString;
  // defaultPreferredImageDynamicRange: interop.Enum<typeof NSImageDynamicRange>;
  // readonly description: NSString;
  // readonly hash: number;
  // image: NSImage;
  // imageAlignment: interop.Enum<typeof NSImageAlignment>;
  // readonly imageDynamicRange: interop.Enum<typeof NSImageDynamicRange>;
  // imageFrameStyle: interop.Enum<typeof NSImageFrameStyle>;
  // imageScaling: interop.Enum<typeof NSImageScaling>;
  // isAccessibilityFocused: boolean;
  // isEditable: boolean;
  // readonly isProxy: boolean;
  // preferredImageDynamicRange: interop.Enum<typeof NSImageDynamicRange>;
  // readonly superclass: interop.Object;
  // symbolConfiguration: NSImageSymbolConfiguration;
  // readonly zone: interop.Pointer;
}

export class HTMLNSSecureTextFieldElement extends HTMLNSTextFieldElement {
  readonly nativeObject = NSSecureTextField.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
  }

}

export class HTMLNSTextViewElement extends HTMLNSTextElement {
  // @ts-ignore
  readonly nativeObject = NSTextView.new();
  get delegate(): NSTextViewDelegateImpl {
    return (this.nativeObject.delegate ??= NSTextViewDelegateImpl.new()) as NSTextViewDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    acceptabledragtypes: 'acceptableDragTypes',
    acceptsglyphinfo: 'acceptsGlyphInfo',
    accessibilityattributedstringforrange: 'accessibilityAttributedStringForRange',
    accessibilityframe: 'accessibilityFrame',
    accessibilityframeforrange: 'accessibilityFrameForRange',
    accessibilityidentifier: 'accessibilityIdentifier',
    accessibilitylineforindex: 'accessibilityLineForIndex',
    accessibilityparent: 'accessibilityParent',
    accessibilityrangeforline: 'accessibilityRangeForLine',
    accessibilitystringforrange: 'accessibilityStringForRange',
    accessibilityvalue: 'accessibilityValue',
    accessibilityvisiblecharacterrange: 'accessibilityVisibleCharacterRange',
    alignjustified: 'alignJustified',
    allowedinputsourcelocales: 'allowedInputSourceLocales',
    allowscharacterpickertouchbaritem: 'allowsCharacterPickerTouchBarItem',
    allowsdocumentbackgroundcolorchange: 'allowsDocumentBackgroundColorChange',
    allowsimageediting: 'allowsImageEditing',
    allowsundo: 'allowsUndo',
    attributedstring: 'attributedString',
    attributedsubstringforproposedrangeactualrange: 'attributedSubstringForProposedRangeActualRange',
    attributedsubstringfromrange: 'attributedSubstringFromRange',
    autorelease: 'autorelease',
    backgroundcolor: 'backgroundColor',
    baselinedeltaforcharacteratindex: 'baselineDeltaForCharacterAtIndex',
    breakundocoalescing: 'breakUndoCoalescing',
    canceloperation: 'cancelOperation',
    candidatelisttouchbaritem: 'candidateListTouchBarItem',
    capitalizeword: 'capitalizeWord',
    centerselectioninvisiblearea: 'centerSelectionInVisibleArea',
    changeattributes: 'changeAttributes',
    changecaseofletter: 'changeCaseOfLetter',
    changecolor: 'changeColor',
    changedocumentbackgroundcolor: 'changeDocumentBackgroundColor',
    changelayoutorientation: 'changeLayoutOrientation',
    characterindexforinsertionatpoint: 'characterIndexForInsertionAtPoint',
    characterindexforpoint: 'characterIndexForPoint',
    checktextindocument: 'checkTextInDocument',
    checktextinrangetypesoptions: 'checkTextInRangeTypesOptions',
    checktextinselection: 'checkTextInSelection',
    class: 'class',
    cleanupafterdragoperation: 'cleanUpAfterDragOperation',
    clickedonlinkatindex: 'clickedOnLinkAtIndex',
    complete: 'complete',
    completionsforpartialwordrangeindexofselecteditem: 'completionsForPartialWordRangeIndexOfSelectedItem',
    conformstoprotocol: 'conformsToProtocol',
    contenttype: 'contentType',
    conversationidentifier: 'conversationIdentifier',
    debugdescription: 'debugDescription',
    defaultparagraphstyle: 'defaultParagraphStyle',
    delegate: 'delegate',
    deletebackward: 'deleteBackward',
    deletebackwardbydecomposingpreviouscharacter: 'deleteBackwardByDecomposingPreviousCharacter',
    deleteforward: 'deleteForward',
    deletetobeginningofline: 'deleteToBeginningOfLine',
    deletetobeginningofparagraph: 'deleteToBeginningOfParagraph',
    deletetoendofline: 'deleteToEndOfLine',
    deletetoendofparagraph: 'deleteToEndOfParagraph',
    deletetomark: 'deleteToMark',
    deletewordbackward: 'deleteWordBackward',
    deletewordforward: 'deleteWordForward',
    description: 'description',
    didchangetext: 'didChangeText',
    displayslinktooltips: 'displaysLinkToolTips',
    docommandbyselector: 'doCommandBySelector',
    documentvisiblerect: 'documentVisibleRect',
    draggingsessionendedatpointoperation: 'draggingSessionEndedAtPointOperation',
    draggingsessionmovedtopoint: 'draggingSessionMovedToPoint',
    draggingsessionsourceoperationmaskfordraggingcontext: 'draggingSessionSourceOperationMaskForDraggingContext',
    draggingsessionwillbeginatpoint: 'draggingSessionWillBeginAtPoint',
    dragimageforselectionwitheventorigin: 'dragImageForSelectionWithEventOrigin',
    dragoperationfordragginginfotype: 'dragOperationForDraggingInfoType',
    dragselectionwitheventoffsetslideback: 'dragSelectionWithEventOffsetSlideBack',
    drawinsertionpointinrectcolorturnedon: 'drawInsertionPointInRectColorTurnedOn',
    drawsbackground: 'drawsBackground',
    drawsverticallyforcharacteratindex: 'drawsVerticallyForCharacterAtIndex',
    drawviewbackgroundinrect: 'drawViewBackgroundInRect',
    enabledtextcheckingtypes: 'enabledTextCheckingTypes',
    fieldeditor: 'fieldEditor',
    firstrectforcharacterrange: 'firstRectForCharacterRange',
    firstrectforcharacterrangeactualrange: 'firstRectForCharacterRangeActualRange',
    fractionofdistancethroughglyphforpoint: 'fractionOfDistanceThroughGlyphForPoint',
    handletextcheckingresultsforrangetypesoptionsorthographywordcount: 'handleTextCheckingResultsForRangeTypesOptionsOrthographyWordCount',
    hash: 'hash',
    hasmarkedtext: 'hasMarkedText',
    ignoremodifierkeysfordraggingsession: 'ignoreModifierKeysForDraggingSession',
    importsgraphics: 'importsGraphics',
    indent: 'indent',
    initusingtextlayoutmanager: 'initUsingTextLayoutManager',
    initwithcoder: 'initWithCoder',
    initwithframe: 'initWithFrame',
    initwithframetextcontainer: 'initWithFrameTextContainer',
    inlinepredictiontype: 'inlinePredictionType',
    insertbacktab: 'insertBacktab',
    insertcompletionforpartialwordrangemovementisfinal: 'insertCompletionForPartialWordRangeMovementIsFinal',
    insertcontainerbreak: 'insertContainerBreak',
    insertdoublequoteignoringsubstitution: 'insertDoubleQuoteIgnoringSubstitution',
    insertionpointcolor: 'insertionPointColor',
    insertlinebreak: 'insertLineBreak',
    insertnewline: 'insertNewline',
    insertnewlineignoringfieldeditor: 'insertNewlineIgnoringFieldEditor',
    insertparagraphseparator: 'insertParagraphSeparator',
    insertsinglequoteignoringsubstitution: 'insertSingleQuoteIgnoringSubstitution',
    inserttab: 'insertTab',
    inserttabignoringfieldeditor: 'insertTabIgnoringFieldEditor',
    inserttext: 'insertText',
    inserttextreplacementrange: 'insertTextReplacementRange',
    invalidatetextcontainerorigin: 'invalidateTextContainerOrigin',
    isaccessibilityfocused: 'isAccessibilityFocused',
    isautomaticdashsubstitutionenabled: 'isAutomaticDashSubstitutionEnabled',
    isautomaticdatadetectionenabled: 'isAutomaticDataDetectionEnabled',
    isautomaticlinkdetectionenabled: 'isAutomaticLinkDetectionEnabled',
    isautomaticquotesubstitutionenabled: 'isAutomaticQuoteSubstitutionEnabled',
    isautomaticspellingcorrectionenabled: 'isAutomaticSpellingCorrectionEnabled',
    isautomatictextcompletionenabled: 'isAutomaticTextCompletionEnabled',
    isautomatictextreplacementenabled: 'isAutomaticTextReplacementEnabled',
    iscoalescingundo: 'isCoalescingUndo',
    iscontinuousspellcheckingenabled: 'isContinuousSpellCheckingEnabled',
    iseditable: 'isEditable',
    isequal: 'isEqual',
    isfieldeditor: 'isFieldEditor',
    isgrammarcheckingenabled: 'isGrammarCheckingEnabled',
    isincrementalsearchingenabled: 'isIncrementalSearchingEnabled',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    isrichtext: 'isRichText',
    isrulervisible: 'isRulerVisible',
    isselectable: 'isSelectable',
    layoutmanager: 'layoutManager',
    layoutorientation: 'layoutOrientation',
    linktextattributes: 'linkTextAttributes',
    loosenkerning: 'loosenKerning',
    lowerbaseline: 'lowerBaseline',
    lowercaseword: 'lowercaseWord',
    makebasewritingdirectionlefttoright: 'makeBaseWritingDirectionLeftToRight',
    makebasewritingdirectionnatural: 'makeBaseWritingDirectionNatural',
    makebasewritingdirectionrighttoleft: 'makeBaseWritingDirectionRightToLeft',
    maketextwritingdirectionlefttoright: 'makeTextWritingDirectionLeftToRight',
    maketextwritingdirectionnatural: 'makeTextWritingDirectionNatural',
    maketextwritingdirectionrighttoleft: 'makeTextWritingDirectionRightToLeft',
    markedrange: 'markedRange',
    markedtextattributes: 'markedTextAttributes',
    movebackward: 'moveBackward',
    movebackwardandmodifyselection: 'moveBackwardAndModifySelection',
    movedown: 'moveDown',
    movedownandmodifyselection: 'moveDownAndModifySelection',
    moveforward: 'moveForward',
    moveforwardandmodifyselection: 'moveForwardAndModifySelection',
    moveleft: 'moveLeft',
    moveleftandmodifyselection: 'moveLeftAndModifySelection',
    moveparagraphbackwardandmodifyselection: 'moveParagraphBackwardAndModifySelection',
    moveparagraphforwardandmodifyselection: 'moveParagraphForwardAndModifySelection',
    moveright: 'moveRight',
    moverightandmodifyselection: 'moveRightAndModifySelection',
    movetobeginningofdocument: 'moveToBeginningOfDocument',
    movetobeginningofdocumentandmodifyselection: 'moveToBeginningOfDocumentAndModifySelection',
    movetobeginningofline: 'moveToBeginningOfLine',
    movetobeginningoflineandmodifyselection: 'moveToBeginningOfLineAndModifySelection',
    movetobeginningofparagraph: 'moveToBeginningOfParagraph',
    movetobeginningofparagraphandmodifyselection: 'moveToBeginningOfParagraphAndModifySelection',
    movetoendofdocument: 'moveToEndOfDocument',
    movetoendofdocumentandmodifyselection: 'moveToEndOfDocumentAndModifySelection',
    movetoendofline: 'moveToEndOfLine',
    movetoendoflineandmodifyselection: 'moveToEndOfLineAndModifySelection',
    movetoendofparagraph: 'moveToEndOfParagraph',
    movetoendofparagraphandmodifyselection: 'moveToEndOfParagraphAndModifySelection',
    movetoleftendofline: 'moveToLeftEndOfLine',
    movetoleftendoflineandmodifyselection: 'moveToLeftEndOfLineAndModifySelection',
    movetorightendofline: 'moveToRightEndOfLine',
    movetorightendoflineandmodifyselection: 'moveToRightEndOfLineAndModifySelection',
    moveup: 'moveUp',
    moveupandmodifyselection: 'moveUpAndModifySelection',
    movewordbackward: 'moveWordBackward',
    movewordbackwardandmodifyselection: 'moveWordBackwardAndModifySelection',
    movewordforward: 'moveWordForward',
    movewordforwardandmodifyselection: 'moveWordForwardAndModifySelection',
    movewordleft: 'moveWordLeft',
    movewordleftandmodifyselection: 'moveWordLeftAndModifySelection',
    movewordright: 'moveWordRight',
    movewordrightandmodifyselection: 'moveWordRightAndModifySelection',
    orderfrontlinkpanel: 'orderFrontLinkPanel',
    orderfrontlistpanel: 'orderFrontListPanel',
    orderfrontsharingservicepicker: 'orderFrontSharingServicePicker',
    orderfrontspacingpanel: 'orderFrontSpacingPanel',
    orderfrontsubstitutionspanel: 'orderFrontSubstitutionsPanel',
    orderfronttablepanel: 'orderFrontTablePanel',
    outline: 'outline',
    pagedown: 'pageDown',
    pagedownandmodifyselection: 'pageDownAndModifySelection',
    pageup: 'pageUp',
    pageupandmodifyselection: 'pageUpAndModifySelection',
    pasteasplaintext: 'pasteAsPlainText',
    pasteasrichtext: 'pasteAsRichText',
    performfindpanelaction: 'performFindPanelAction',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    performvalidatedreplacementinrangewithattributedstring: 'performValidatedReplacementInRangeWithAttributedString',
    preferredpasteboardtypefromarrayrestrictedtotypesfromarray: 'preferredPasteboardTypeFromArrayRestrictedToTypesFromArray',
    preferredtextaccessoryplacement: 'preferredTextAccessoryPlacement',
    quicklookpreviewableitemsinranges: 'quickLookPreviewableItemsInRanges',
    quicklookpreviewitems: 'quickLookPreviewItems',
    raisebaseline: 'raiseBaseline',
    rangeforusercharacterattributechange: 'rangeForUserCharacterAttributeChange',
    rangeforusercompletion: 'rangeForUserCompletion',
    rangeforuserparagraphattributechange: 'rangeForUserParagraphAttributeChange',
    rangeforusertextchange: 'rangeForUserTextChange',
    rangesforusercharacterattributechange: 'rangesForUserCharacterAttributeChange',
    rangesforuserparagraphattributechange: 'rangesForUserParagraphAttributeChange',
    rangesforusertextchange: 'rangesForUserTextChange',
    readablepasteboardtypes: 'readablePasteboardTypes',
    readselectionfrompasteboard: 'readSelectionFromPasteboard',
    readselectionfrompasteboardtype: 'readSelectionFromPasteboardType',
    registerforservices: 'registerForServices',
    release: 'release',
    replacetextcontainer: 'replaceTextContainer',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    rulerviewdidaddmarker: 'rulerViewDidAddMarker',
    rulerviewdidmovemarker: 'rulerViewDidMoveMarker',
    rulerviewdidremovemarker: 'rulerViewDidRemoveMarker',
    rulerviewhandlemousedown: 'rulerViewHandleMouseDown',
    rulerviewshouldaddmarker: 'rulerViewShouldAddMarker',
    rulerviewshouldmovemarker: 'rulerViewShouldMoveMarker',
    rulerviewshouldremovemarker: 'rulerViewShouldRemoveMarker',
    rulerviewwilladdmarkeratlocation: 'rulerViewWillAddMarkerAtLocation',
    rulerviewwillmovemarkertolocation: 'rulerViewWillMoveMarkerToLocation',
    scrollabledocumentcontenttextview: 'scrollableDocumentContentTextView',
    scrollableplaindocumentcontenttextview: 'scrollablePlainDocumentContentTextView',
    scrollabletextview: 'scrollableTextView',
    scrolllinedown: 'scrollLineDown',
    scrolllineup: 'scrollLineUp',
    scrollpagedown: 'scrollPageDown',
    scrollpageup: 'scrollPageUp',
    scrolltobeginningofdocument: 'scrollToBeginningOfDocument',
    scrolltoendofdocument: 'scrollToEndOfDocument',
    selectall: 'selectAll',
    selectedrange: 'selectedRange',
    selectedranges: 'selectedRanges',
    selectedtextattributes: 'selectedTextAttributes',
    selectionaffinity: 'selectionAffinity',
    selectiongranularity: 'selectionGranularity',
    selectionrangeforproposedrangegranularity: 'selectionRangeForProposedRangeGranularity',
    selectline: 'selectLine',
    selectparagraph: 'selectParagraph',
    selecttomark: 'selectToMark',
    selectword: 'selectWord',
    self: 'self',
    setalignmentrange: 'setAlignmentRange',
    setbasewritingdirectionrange: 'setBaseWritingDirectionRange',
    setconstrainedframesize: 'setConstrainedFrameSize',
    setmark: 'setMark',
    setmarkedtextselectedrange: 'setMarkedTextSelectedRange',
    setmarkedtextselectedrangereplacementrange: 'setMarkedTextSelectedRangeReplacementRange',
    setneedsdisplayinrectavoidadditionallayout: 'setNeedsDisplayInRectAvoidAdditionalLayout',
    setselectedrange: 'setSelectedRange',
    setselectedrangeaffinitystillselecting: 'setSelectedRangeAffinityStillSelecting',
    setselectedrangesaffinitystillselecting: 'setSelectedRangesAffinityStillSelecting',
    setspellingstaterange: 'setSpellingStateRange',
    shouldchangetextinrangereplacementstring: 'shouldChangeTextInRangeReplacementString',
    shouldchangetextinrangesreplacementstrings: 'shouldChangeTextInRangesReplacementStrings',
    shoulddrawinsertionpoint: 'shouldDrawInsertionPoint',
    showfindindicatorforrange: 'showFindIndicatorForRange',
    smartdeleterangeforproposedrange: 'smartDeleteRangeForProposedRange',
    smartinsertafterstringforstringreplacingrange: 'smartInsertAfterStringForStringReplacingRange',
    smartinsertbeforestringforstringreplacingrange: 'smartInsertBeforeStringForStringReplacingRange',
    smartinsertdeleteenabled: 'smartInsertDeleteEnabled',
    smartinsertforstringreplacingrangebeforestringafterstring: 'smartInsertForStringReplacingRangeBeforeStringAfterString',
    spellcheckerdocumenttag: 'spellCheckerDocumentTag',
    startspeaking: 'startSpeaking',
    stopspeaking: 'stopSpeaking',
    stronglyreferencestextstorage: 'stronglyReferencesTextStorage',
    superclass: 'superclass',
    swapwithmark: 'swapWithMark',
    textcontainer: 'textContainer',
    textcontainerinset: 'textContainerInset',
    textcontainerorigin: 'textContainerOrigin',
    textcontentstorage: 'textContentStorage',
    textlayoutmanager: 'textLayoutManager',
    textstorage: 'textStorage',
    textviewusingtextlayoutmanager: 'textViewUsingTextLayoutManager',
    tightenkerning: 'tightenKerning',
    toggleautomaticdashsubstitution: 'toggleAutomaticDashSubstitution',
    toggleautomaticdatadetection: 'toggleAutomaticDataDetection',
    toggleautomaticlinkdetection: 'toggleAutomaticLinkDetection',
    toggleautomaticquotesubstitution: 'toggleAutomaticQuoteSubstitution',
    toggleautomaticspellingcorrection: 'toggleAutomaticSpellingCorrection',
    toggleautomatictextcompletion: 'toggleAutomaticTextCompletion',
    toggleautomatictextreplacement: 'toggleAutomaticTextReplacement',
    togglebasewritingdirection: 'toggleBaseWritingDirection',
    togglecontinuousspellchecking: 'toggleContinuousSpellChecking',
    togglegrammarchecking: 'toggleGrammarChecking',
    togglequicklookpreviewpanel: 'toggleQuickLookPreviewPanel',
    togglesmartinsertdelete: 'toggleSmartInsertDelete',
    toggletraditionalcharactershape: 'toggleTraditionalCharacterShape',
    transpose: 'transpose',
    transposewords: 'transposeWords',
    turnoffkerning: 'turnOffKerning',
    turnoffligatures: 'turnOffLigatures',
    typingattributes: 'typingAttributes',
    unionrectinvisibleselectedrange: 'unionRectInVisibleSelectedRange',
    unmarktext: 'unmarkText',
    updatecandidates: 'updateCandidates',
    updatedragtyperegistration: 'updateDragTypeRegistration',
    updatefontpanel: 'updateFontPanel',
    updateinsertionpointstateandrestarttimer: 'updateInsertionPointStateAndRestartTimer',
    updatequicklookpreviewpanel: 'updateQuickLookPreviewPanel',
    updateruler: 'updateRuler',
    updatetexttouchbaritems: 'updateTextTouchBarItems',
    updatetouchbaritemidentifiers: 'updateTouchBarItemIdentifiers',
    uppercaseword: 'uppercaseWord',
    useallligatures: 'useAllLigatures',
    usesadaptivecolormappingfordarkappearance: 'usesAdaptiveColorMappingForDarkAppearance',
    usesfindbar: 'usesFindBar',
    usesfindpanel: 'usesFindPanel',
    usesfontpanel: 'usesFontPanel',
    usesinspectorbar: 'usesInspectorBar',
    usesrolloverbuttonforselection: 'usesRolloverButtonForSelection',
    usesruler: 'usesRuler',
    usestandardkerning: 'useStandardKerning',
    usestandardligatures: 'useStandardLigatures',
    validatemenuitem: 'validateMenuItem',
    validateuserinterfaceitem: 'validateUserInterfaceItem',
    validattributesformarkedtext: 'validAttributesForMarkedText',
    validrequestorforsendtypereturntype: 'validRequestorForSendTypeReturnType',
    windowlevel: 'windowLevel',
    writablepasteboardtypes: 'writablePasteboardTypes',
    writeselectiontopasteboardtype: 'writeSelectionToPasteboardType',
    writeselectiontopasteboardtypes: 'writeSelectionToPasteboardTypes',
    yank: 'yank',
    zone: 'zone',
  }

  // readonly acceptableDragTypes: NSArray;
  // acceptsGlyphInfo: boolean;
  // accessibilityFrame: CGRect;
  // accessibilityParent: interop.Object;
  // accessibilityVisibleCharacterRange: _NSRange;
  // allowsCharacterPickerTouchBarItem: boolean;
  // allowsDocumentBackgroundColorChange: boolean;
  // allowsImageEditing: boolean;
  // allowsUndo: boolean;
  // backgroundColor: NSColor;
  // readonly candidateListTouchBarItem: NSCandidateListTouchBarItem;
  // readonly debugDescription: NSString;
  // defaultParagraphStyle: NSParagraphStyle;
  // readonly description: NSString;
  // displaysLinkToolTips: boolean;
  // readonly documentVisibleRect: CGRect;
  // drawsBackground: boolean;
  // enabledTextCheckingTypes: number;
  // readonly hash: number;
  // importsGraphics: boolean;
  // inlinePredictionType: interop.Enum<typeof NSTextInputTraitType>;
  // insertionPointColor: NSColor;
  // isAccessibilityFocused: boolean;
  // isAutomaticDashSubstitutionEnabled: boolean;
  // isAutomaticDataDetectionEnabled: boolean;
  // isAutomaticLinkDetectionEnabled: boolean;
  // isAutomaticQuoteSubstitutionEnabled: boolean;
  // isAutomaticSpellingCorrectionEnabled: boolean;
  // isAutomaticTextCompletionEnabled: boolean;
  // isAutomaticTextReplacementEnabled: boolean;
  // readonly isCoalescingUndo: boolean;
  // isContinuousSpellCheckingEnabled: boolean;
  // isEditable: boolean;
  // isFieldEditor: boolean;
  // isGrammarCheckingEnabled: boolean;
  // isIncrementalSearchingEnabled: boolean;
  // readonly isProxy: boolean;
  // isRichText: boolean;
  // isRulerVisible: boolean;
  // isSelectable: boolean;
  // readonly layoutManager: NSLayoutManager;
  // readonly layoutOrientation: interop.Enum<typeof NSTextLayoutOrientation>;
  // readonly rangeForUserCharacterAttributeChange: _NSRange;
  // readonly rangeForUserCompletion: _NSRange;
  // readonly rangeForUserParagraphAttributeChange: _NSRange;
  // readonly rangeForUserTextChange: _NSRange;
  // readonly rangesForUserCharacterAttributeChange: NSArray;
  // readonly rangesForUserParagraphAttributeChange: NSArray;
  // readonly rangesForUserTextChange: NSArray;
  // readonly readablePasteboardTypes: NSArray;
  // selectedRange: _NSRange;
  // readonly selectionAffinity: interop.Enum<typeof NSSelectionAffinity>;
  // selectionGranularity: interop.Enum<typeof NSSelectionGranularity>;
  // readonly shouldDrawInsertionPoint: boolean;
  // smartInsertDeleteEnabled: boolean;
  // readonly spellCheckerDocumentTag: number;
  // stronglyReferencesTextStorage: boolean;
  // readonly superclass: interop.Object;
  // textContainer: NSTextContainer;
  // textContainerInset: CGSize;
  // readonly textContainerOrigin: CGPoint;
  // readonly textContentStorage: NSTextContentStorage;
  // readonly textLayoutManager: NSTextLayoutManager;
  // readonly textStorage: NSTextStorage;
  // readonly unionRectInVisibleSelectedRange: CGRect;
  // usesAdaptiveColorMappingForDarkAppearance: boolean;
  // usesFindBar: boolean;
  // usesFindPanel: boolean;
  // usesFontPanel: boolean;
  // usesInspectorBar: boolean;
  // usesRolloverButtonForSelection: boolean;
  // usesRuler: boolean;
  // readonly writablePasteboardTypes: NSArray;
  // readonly zone: interop.Pointer;

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
  readonly nativeObject = NSColorWell.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    activate: 'activate',
    color: 'color',
    colorwellstyle: 'colorWellStyle',
    colorwellwithstyle: 'colorWellWithStyle',
    deactivate: 'deactivate',
    drawwellinside: 'drawWellInside',
    image: 'image',
    isactive: 'isActive',
    isbordered: 'isBordered',
    pulldownaction: 'pulldownAction',
    pulldowntarget: 'pulldownTarget',
    supportsalpha: 'supportsAlpha',
    takecolorfrom: 'takeColorFrom',
  }

  // color: NSColor;
  // colorWellStyle: interop.Enum<typeof NSColorWellStyle>;
  // image: NSImage;
  // readonly isActive: boolean;
  // isBordered: boolean;
  // pulldownAction: string;
  // pulldownTarget: interop.Object;
  // supportsAlpha: boolean;
}

export class HTMLNSLayoutXAxisAnchorElement extends HTMLNSLayoutAnchorElement {
  readonly nativeObject = NSLayoutXAxisAnchor.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    anchorwithoffsettoanchor: 'anchorWithOffsetToAnchor',
    constraintequaltosystemspacingafteranchormultiplier: 'constraintEqualToSystemSpacingAfterAnchorMultiplier',
    constraintgreaterthanorequaltosystemspacingafteranchormultiplier: 'constraintGreaterThanOrEqualToSystemSpacingAfterAnchorMultiplier',
    constraintlessthanorequaltosystemspacingafteranchormultiplier: 'constraintLessThanOrEqualToSystemSpacingAfterAnchorMultiplier',
  }

}

export class HTMLNSTabViewControllerElement extends HTMLNSViewControllerElement {
  readonly nativeObject = NSTabViewController.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    addtabviewitem: 'addTabViewItem',
    autorelease: 'autorelease',
    canpropagateselectedchildviewcontrollertitle: 'canPropagateSelectedChildViewControllerTitle',
    class: 'class',
    conformstoprotocol: 'conformsToProtocol',
    debugdescription: 'debugDescription',
    description: 'description',
    hash: 'hash',
    inserttabviewitematindex: 'insertTabViewItemAtIndex',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    release: 'release',
    removetabviewitem: 'removeTabViewItem',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    selectedtabviewitemindex: 'selectedTabViewItemIndex',
    self: 'self',
    superclass: 'superclass',
    tabstyle: 'tabStyle',
    tabview: 'tabView',
    tabviewdidchangenumberoftabviewitems: 'tabViewDidChangeNumberOfTabViewItems',
    tabviewdidselecttabviewitem: 'tabViewDidSelectTabViewItem',
    tabviewitemforviewcontroller: 'tabViewItemForViewController',
    tabviewitems: 'tabViewItems',
    tabviewshouldselecttabviewitem: 'tabViewShouldSelectTabViewItem',
    tabviewwillselecttabviewitem: 'tabViewWillSelectTabViewItem',
    toolbaralloweditemidentifiers: 'toolbarAllowedItemIdentifiers',
    toolbardefaultitemidentifiers: 'toolbarDefaultItemIdentifiers',
    toolbardidremoveitem: 'toolbarDidRemoveItem',
    toolbarimmovableitemidentifiers: 'toolbarImmovableItemIdentifiers',
    toolbaritemforitemidentifierwillbeinsertedintotoolbar: 'toolbarItemForItemIdentifierWillBeInsertedIntoToolbar',
    toolbaritemidentifiercanbeinsertedatindex: 'toolbarItemIdentifierCanBeInsertedAtIndex',
    toolbarselectableitemidentifiers: 'toolbarSelectableItemIdentifiers',
    toolbarwilladditem: 'toolbarWillAddItem',
    transitionoptions: 'transitionOptions',
    viewdidload: 'viewDidLoad',
    zone: 'zone',
  }

  // canPropagateSelectedChildViewControllerTitle: boolean;
  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // readonly hash: number;
  // readonly isProxy: boolean;
  // selectedTabViewItemIndex: number;
  // readonly superclass: interop.Object;
  // tabStyle: interop.Enum<typeof NSTabViewControllerTabStyle>;
  // tabView: NSTabView;
  // transitionOptions: interop.Enum<typeof NSViewControllerTransitionOptions>;
  // readonly zone: interop.Pointer;
}

export class HTMLNSSharingServicePickerTouchBarItemElement extends HTMLNSTouchBarItemElement {
  readonly nativeObject = NSSharingServicePickerTouchBarItem.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    buttonimage: 'buttonImage',
    buttontitle: 'buttonTitle',
    delegate: 'delegate',
    isenabled: 'isEnabled',
  }

  // buttonImage: NSImage;
  // delegate: NSSharingServicePickerTouchBarItemDelegate | null;
  // isEnabled: boolean;
}

export class HTMLNSTextContentStorageElement extends HTMLNSTextContentManagerElement {
  // @ts-ignore
  readonly nativeObject = NSTextContentStorage.new();
  get delegate(): NSTextContentStorageDelegateImpl {
    return (this.nativeObject.delegate ??= NSTextContentStorageDelegateImpl.new()) as NSTextContentStorageDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    adjustedrangefromrangeforeditingtextselection: 'adjustedRangeFromRangeForEditingTextSelection',
    attributedstring: 'attributedString',
    attributedstringfortextelement: 'attributedStringForTextElement',
    autorelease: 'autorelease',
    class: 'class',
    conformstoprotocol: 'conformsToProtocol',
    debugdescription: 'debugDescription',
    delegate: 'delegate',
    description: 'description',
    hash: 'hash',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    locationfromlocationwithoffset: 'locationFromLocationWithOffset',
    offsetfromlocationtolocation: 'offsetFromLocationToLocation',
    performeditingtransactionfortextstorageusingblock: 'performEditingTransactionForTextStorageUsingBlock',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    processeditingfortextstorageeditedrangechangeinlengthinvalidatedrange: 'processEditingForTextStorageEditedRangeChangeInLengthInvalidatedRange',
    release: 'release',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    self: 'self',
    superclass: 'superclass',
    textelementforattributedstring: 'textElementForAttributedString',
    textstorage: 'textStorage',
    zone: 'zone',
  }

  // attributedString: NSAttributedString;
  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // readonly hash: number;
  // readonly isProxy: boolean;
  // readonly superclass: interop.Object;
  // textStorage: NSTextStorage;
  // readonly zone: interop.Pointer;

  set textcontentstoragetextparagraphwithrange(value: (textContentStorage: NSTextContentStorage, range: _NSRange) => NSTextParagraph) {
    this.delegate.textContentStorageTextParagraphWithRange = value;
  }
}

export class HTMLNSSwitchElement extends HTMLNSControlElement {
  // @ts-ignore
  readonly nativeObject = NSSwitch.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    accessibilityframe: 'accessibilityFrame',
    accessibilityidentifier: 'accessibilityIdentifier',
    accessibilitylabel: 'accessibilityLabel',
    accessibilityparent: 'accessibilityParent',
    accessibilityperformdecrement: 'accessibilityPerformDecrement',
    accessibilityperformincrement: 'accessibilityPerformIncrement',
    accessibilityperformpress: 'accessibilityPerformPress',
    accessibilityvalue: 'accessibilityValue',
    autorelease: 'autorelease',
    class: 'class',
    conformstoprotocol: 'conformsToProtocol',
    debugdescription: 'debugDescription',
    description: 'description',
    hash: 'hash',
    isaccessibilityfocused: 'isAccessibilityFocused',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    release: 'release',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    self: 'self',
    state: 'state',
    superclass: 'superclass',
    zone: 'zone',
  }

  // accessibilityFrame: CGRect;
  // accessibilityParent: interop.Object;
  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // readonly hash: number;
  // isAccessibilityFocused: boolean;
  // readonly isProxy: boolean;
  // state: number;
  // readonly superclass: interop.Object;
  // readonly zone: interop.Pointer;
}

export class HTMLNSOpenPanelElement extends HTMLNSSavePanelElement {
  readonly nativeObject = NSOpenPanel.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    allowsmultipleselection: 'allowsMultipleSelection',
    beginfordirectoryfiletypesmodelessdelegatedidendselectorcontextinfo: 'beginForDirectoryFileTypesModelessDelegateDidEndSelectorContextInfo',
    beginsheetfordirectoryfiletypesmodalforwindowmodaldelegatedidendselectorcontextinfo: 'beginSheetForDirectoryFileTypesModalForWindowModalDelegateDidEndSelectorContextInfo',
    canchoosedirectories: 'canChooseDirectories',
    canchoosefiles: 'canChooseFiles',
    candownloadubiquitouscontents: 'canDownloadUbiquitousContents',
    canresolveubiquitousconflicts: 'canResolveUbiquitousConflicts',
    filenames: 'filenames',
    isaccessoryviewdisclosed: 'isAccessoryViewDisclosed',
    openpanel: 'openPanel',
    resolvesaliases: 'resolvesAliases',
    runmodalfordirectoryfiletypes: 'runModalForDirectoryFileTypes',
    runmodalfortypes: 'runModalForTypes',
    urls: 'URLs',
  }

  // allowsMultipleSelection: boolean;
  // canChooseDirectories: boolean;
  // canChooseFiles: boolean;
  // canDownloadUbiquitousContents: boolean;
  // canResolveUbiquitousConflicts: boolean;
  // isAccessoryViewDisclosed: boolean;
  // resolvesAliases: boolean;
  // readonly URLs: NSArray;
}

export class HTMLNSTextParagraphElement extends HTMLNSTextElementElement {
  readonly nativeObject = NSTextParagraph.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    attributedstring: 'attributedString',
    initwithattributedstring: 'initWithAttributedString',
    paragraphcontentrange: 'paragraphContentRange',
    paragraphseparatorrange: 'paragraphSeparatorRange',
  }

  // readonly attributedString: NSAttributedString;
  // readonly paragraphContentRange: NSTextRange;
  // readonly paragraphSeparatorRange: NSTextRange;
}

export class HTMLNSPDFImageRepElement extends HTMLNSImageRepElement {
  readonly nativeObject = NSPDFImageRep.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    bounds: 'bounds',
    currentpage: 'currentPage',
    imagerepwithdata: 'imageRepWithData',
    initwithdata: 'initWithData',
    pagecount: 'pageCount',
    pdfrepresentation: 'PDFRepresentation',
  }

  // readonly bounds: CGRect;
  // currentPage: number;
  // readonly pageCount: number;
  // readonly PDFRepresentation: NSData;
}

export class HTMLNSPageControllerElement extends HTMLNSViewControllerElement {
  readonly nativeObject = NSPageController.new();
  get delegate(): NSPageControllerDelegateImpl {
    return (this.nativeObject.delegate ??= NSPageControllerDelegateImpl.new()) as NSPageControllerDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    animationforkey: 'animationForKey',
    animations: 'animations',
    animator: 'animator',
    arrangedobjects: 'arrangedObjects',
    completetransition: 'completeTransition',
    defaultanimationforkey: 'defaultAnimationForKey',
    delegate: 'delegate',
    encodewithcoder: 'encodeWithCoder',
    initwithcoder: 'initWithCoder',
    navigateback: 'navigateBack',
    navigateforward: 'navigateForward',
    navigateforwardtoobject: 'navigateForwardToObject',
    selectedindex: 'selectedIndex',
    selectedviewcontroller: 'selectedViewController',
    takeselectedindexfrom: 'takeSelectedIndexFrom',
    transitionstyle: 'transitionStyle',
  }

  // selectedIndex: number;
  // readonly selectedViewController: NSViewController;
  // transitionStyle: interop.Enum<typeof NSPageControllerTransitionStyle>;

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
  // @ts-ignore
  readonly nativeObject = NSComboBox.new();
  get delegate(): NSComboBoxDelegateImpl {
    return (this.nativeObject.delegate ??= NSComboBoxDelegateImpl.new()) as NSComboBoxDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    additemswithobjectvalues: 'addItemsWithObjectValues',
    additemwithobjectvalue: 'addItemWithObjectValue',
    completes: 'completes',
    datasource: 'dataSource',
    delegate: 'delegate',
    deselectitematindex: 'deselectItemAtIndex',
    hasverticalscroller: 'hasVerticalScroller',
    indexofitemwithobjectvalue: 'indexOfItemWithObjectValue',
    indexofselecteditem: 'indexOfSelectedItem',
    insertitemwithobjectvalueatindex: 'insertItemWithObjectValueAtIndex',
    intercellspacing: 'intercellSpacing',
    isbuttonbordered: 'isButtonBordered',
    itemheight: 'itemHeight',
    itemobjectvalueatindex: 'itemObjectValueAtIndex',
    notenumberofitemschanged: 'noteNumberOfItemsChanged',
    numberofitems: 'numberOfItems',
    numberofvisibleitems: 'numberOfVisibleItems',
    objectvalueofselecteditem: 'objectValueOfSelectedItem',
    objectvalues: 'objectValues',
    reloaddata: 'reloadData',
    removeallitems: 'removeAllItems',
    removeitematindex: 'removeItemAtIndex',
    removeitemwithobjectvalue: 'removeItemWithObjectValue',
    scrollitematindextotop: 'scrollItemAtIndexToTop',
    scrollitematindextovisible: 'scrollItemAtIndexToVisible',
    selectitematindex: 'selectItemAtIndex',
    selectitemwithobjectvalue: 'selectItemWithObjectValue',
    usesdatasource: 'usesDataSource',
  }

  // completes: boolean;
  // dataSource: NSComboBoxDataSource;
  // hasVerticalScroller: boolean;
  // readonly indexOfSelectedItem: number;
  // intercellSpacing: CGSize;
  // isButtonBordered: boolean;
  // itemHeight: number;
  // readonly numberOfItems: number;
  // numberOfVisibleItems: number;
  // readonly objectValueOfSelectedItem: interop.Object;
  // readonly objectValues: NSArray;
  // usesDataSource: boolean;

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
  readonly nativeObject = NSSlider.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    acceptsfirstmouse: 'acceptsFirstMouse',
    accessibilityframe: 'accessibilityFrame',
    accessibilityidentifier: 'accessibilityIdentifier',
    accessibilitylabel: 'accessibilityLabel',
    accessibilityparent: 'accessibilityParent',
    accessibilityperformdecrement: 'accessibilityPerformDecrement',
    accessibilityperformincrement: 'accessibilityPerformIncrement',
    accessibilityvalue: 'accessibilityValue',
    allowstickmarkvaluesonly: 'allowsTickMarkValuesOnly',
    altincrementvalue: 'altIncrementValue',
    autorelease: 'autorelease',
    class: 'class',
    closesttickmarkvaluetovalue: 'closestTickMarkValueToValue',
    conformstoprotocol: 'conformsToProtocol',
    debugdescription: 'debugDescription',
    description: 'description',
    hash: 'hash',
    image: 'image',
    indexoftickmarkatpoint: 'indexOfTickMarkAtPoint',
    isaccessibilityfocused: 'isAccessibilityFocused',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    isvertical: 'isVertical',
    knobthickness: 'knobThickness',
    maxvalue: 'maxValue',
    minvalue: 'minValue',
    numberoftickmarks: 'numberOfTickMarks',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    rectoftickmarkatindex: 'rectOfTickMarkAtIndex',
    release: 'release',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    self: 'self',
    setimage: 'setImage',
    settitle: 'setTitle',
    settitlecell: 'setTitleCell',
    settitlecolor: 'setTitleColor',
    settitlefont: 'setTitleFont',
    slidertype: 'sliderType',
    sliderwithtargetaction: 'sliderWithTargetAction',
    sliderwithvalueminvaluemaxvaluetargetaction: 'sliderWithValueMinValueMaxValueTargetAction',
    superclass: 'superclass',
    tickmarkposition: 'tickMarkPosition',
    tickmarkvalueatindex: 'tickMarkValueAtIndex',
    title: 'title',
    titlecell: 'titleCell',
    titlecolor: 'titleColor',
    titlefont: 'titleFont',
    trackfillcolor: 'trackFillColor',
    zone: 'zone',
  }

  // accessibilityFrame: CGRect;
  // accessibilityParent: interop.Object;
  // accessibilityValue: interop.Object;
  // allowsTickMarkValuesOnly: boolean;
  // altIncrementValue: number;
  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // readonly hash: number;
  // isAccessibilityFocused: boolean;
  // readonly isProxy: boolean;
  // isVertical: boolean;
  // readonly knobThickness: number;
  // maxValue: number;
  // minValue: number;
  // numberOfTickMarks: number;
  // sliderType: interop.Enum<typeof NSSliderType>;
  // readonly superclass: interop.Object;
  // tickMarkPosition: interop.Enum<typeof NSTickMarkPosition>;
  // trackFillColor: NSColor;
  // readonly zone: interop.Pointer;
}

export class HTMLNSSearchFieldElement extends HTMLNSTextFieldElement {
  // @ts-ignore
  readonly nativeObject = NSSearchField.new();
  get delegate(): NSSearchFieldDelegateImpl {
    return (this.nativeObject.delegate ??= NSSearchFieldDelegateImpl.new()) as NSSearchFieldDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    cancelbuttonbounds: 'cancelButtonBounds',
    centersplaceholder: 'centersPlaceholder',
    delegate: 'delegate',
    maximumrecents: 'maximumRecents',
    recentsautosavename: 'recentsAutosaveName',
    recentsearches: 'recentSearches',
    rectforcancelbuttonwhencentered: 'rectForCancelButtonWhenCentered',
    rectforsearchbuttonwhencentered: 'rectForSearchButtonWhenCentered',
    rectforsearchtextwhencentered: 'rectForSearchTextWhenCentered',
    searchbuttonbounds: 'searchButtonBounds',
    searchmenutemplate: 'searchMenuTemplate',
    searchtextbounds: 'searchTextBounds',
    sendssearchstringimmediately: 'sendsSearchStringImmediately',
    sendswholesearchstring: 'sendsWholeSearchString',
  }

  // readonly cancelButtonBounds: CGRect;
  // centersPlaceholder: boolean;
  // maximumRecents: number;
  // readonly searchButtonBounds: CGRect;
  // searchMenuTemplate: NSMenu;
  // readonly searchTextBounds: CGRect;
  // sendsSearchStringImmediately: boolean;
  // sendsWholeSearchString: boolean;

  set searchfielddidstartsearching(value: (sender: NSSearchField) => void) {
    this.delegate.searchFieldDidStartSearching = value;
  }
  set searchfielddidendsearching(value: (sender: NSSearchField) => void) {
    this.delegate.searchFieldDidEndSearching = value;
  }
}

export class HTMLNSTokenFieldElement extends HTMLNSTextFieldElement {
  // @ts-ignore
  readonly nativeObject = NSTokenField.new();
  get delegate(): NSTokenFieldDelegateImpl {
    return (this.nativeObject.delegate ??= NSTokenFieldDelegateImpl.new()) as NSTokenFieldDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    completiondelay: 'completionDelay',
    defaultcompletiondelay: 'defaultCompletionDelay',
    defaulttokenizingcharacterset: 'defaultTokenizingCharacterSet',
    delegate: 'delegate',
    tokenizingcharacterset: 'tokenizingCharacterSet',
    tokenstyle: 'tokenStyle',
  }

  // completionDelay: number;
  // defaultCompletionDelay: number;
  // defaultTokenizingCharacterSet: NSCharacterSet;
  // tokenizingCharacterSet: NSCharacterSet;
  // tokenStyle: interop.Enum<typeof NSTokenStyle>;

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
  // @ts-ignore
  readonly nativeObject = NSTableView.new();
  get delegate(): NSTableViewDelegateImpl {
    return (this.nativeObject.delegate ??= NSTableViewDelegateImpl.new()) as NSTableViewDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    accessibilitycolumnheaderuielements: 'accessibilityColumnHeaderUIElements',
    accessibilitycolumns: 'accessibilityColumns',
    accessibilityframe: 'accessibilityFrame',
    accessibilityheadergroup: 'accessibilityHeaderGroup',
    accessibilityidentifier: 'accessibilityIdentifier',
    accessibilitylabel: 'accessibilityLabel',
    accessibilityparent: 'accessibilityParent',
    accessibilityrowheaderuielements: 'accessibilityRowHeaderUIElements',
    accessibilityrows: 'accessibilityRows',
    accessibilityselectedcells: 'accessibilitySelectedCells',
    accessibilityselectedcolumns: 'accessibilitySelectedColumns',
    accessibilityselectedrows: 'accessibilitySelectedRows',
    accessibilityvisiblecells: 'accessibilityVisibleCells',
    accessibilityvisiblecolumns: 'accessibilityVisibleColumns',
    accessibilityvisiblerows: 'accessibilityVisibleRows',
    addtablecolumn: 'addTableColumn',
    allowscolumnreordering: 'allowsColumnReordering',
    allowscolumnresizing: 'allowsColumnResizing',
    allowscolumnselection: 'allowsColumnSelection',
    allowsemptyselection: 'allowsEmptySelection',
    allowsmultipleselection: 'allowsMultipleSelection',
    allowstypeselect: 'allowsTypeSelect',
    autorelease: 'autorelease',
    autoresizesallcolumnstofit: 'autoresizesAllColumnsToFit',
    autosavename: 'autosaveName',
    autosavetablecolumns: 'autosaveTableColumns',
    backgroundcolor: 'backgroundColor',
    beginupdates: 'beginUpdates',
    candragrowswithindexesatpoint: 'canDragRowsWithIndexesAtPoint',
    class: 'class',
    clickedcolumn: 'clickedColumn',
    clickedrow: 'clickedRow',
    columnatpoint: 'columnAtPoint',
    columnautoresizingstyle: 'columnAutoresizingStyle',
    columnforview: 'columnForView',
    columnindexesinrect: 'columnIndexesInRect',
    columnsinrect: 'columnsInRect',
    columnwithidentifier: 'columnWithIdentifier',
    conformstoprotocol: 'conformsToProtocol',
    cornerview: 'cornerView',
    datasource: 'dataSource',
    debugdescription: 'debugDescription',
    delegate: 'delegate',
    description: 'description',
    deselectall: 'deselectAll',
    deselectcolumn: 'deselectColumn',
    deselectrow: 'deselectRow',
    didaddrowviewforrow: 'didAddRowViewForRow',
    didremoverowviewforrow: 'didRemoveRowViewForRow',
    doubleaction: 'doubleAction',
    draggingdestinationfeedbackstyle: 'draggingDestinationFeedbackStyle',
    draggingsessionendedatpointoperation: 'draggingSessionEndedAtPointOperation',
    draggingsessionmovedtopoint: 'draggingSessionMovedToPoint',
    draggingsessionsourceoperationmaskfordraggingcontext: 'draggingSessionSourceOperationMaskForDraggingContext',
    draggingsessionwillbeginatpoint: 'draggingSessionWillBeginAtPoint',
    dragimageforrowseventdragimageoffset: 'dragImageForRowsEventDragImageOffset',
    dragimageforrowswithindexestablecolumnseventoffset: 'dragImageForRowsWithIndexesTableColumnsEventOffset',
    drawbackgroundincliprect: 'drawBackgroundInClipRect',
    drawgridincliprect: 'drawGridInClipRect',
    drawrowcliprect: 'drawRowClipRect',
    drawsgrid: 'drawsGrid',
    editcolumnrowwitheventselect: 'editColumnRowWithEventSelect',
    editedcolumn: 'editedColumn',
    editedrow: 'editedRow',
    effectiverowsizestyle: 'effectiveRowSizeStyle',
    effectivestyle: 'effectiveStyle',
    endupdates: 'endUpdates',
    enumerateavailablerowviewsusingblock: 'enumerateAvailableRowViewsUsingBlock',
    floatsgrouprows: 'floatsGroupRows',
    focusedcolumn: 'focusedColumn',
    frameofcellatcolumnrow: 'frameOfCellAtColumnRow',
    gridcolor: 'gridColor',
    gridstylemask: 'gridStyleMask',
    hash: 'hash',
    headerview: 'headerView',
    hiddenrowindexes: 'hiddenRowIndexes',
    hiderowsatindexeswithanimation: 'hideRowsAtIndexesWithAnimation',
    highlightedtablecolumn: 'highlightedTableColumn',
    highlightselectionincliprect: 'highlightSelectionInClipRect',
    ignoremodifierkeysfordraggingsession: 'ignoreModifierKeysForDraggingSession',
    indicatorimageintablecolumn: 'indicatorImageInTableColumn',
    initwithcoder: 'initWithCoder',
    initwithframe: 'initWithFrame',
    insertrowsatindexeswithanimation: 'insertRowsAtIndexesWithAnimation',
    intercellspacing: 'intercellSpacing',
    isaccessibilityfocused: 'isAccessibilityFocused',
    iscolumnselected: 'isColumnSelected',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    isrowselected: 'isRowSelected',
    makeviewwithidentifierowner: 'makeViewWithIdentifierOwner',
    movecolumntocolumn: 'moveColumnToColumn',
    moverowatindextoindex: 'moveRowAtIndexToIndex',
    noteheightofrowswithindexeschanged: 'noteHeightOfRowsWithIndexesChanged',
    notenumberofrowschanged: 'noteNumberOfRowsChanged',
    numberofcolumns: 'numberOfColumns',
    numberofrows: 'numberOfRows',
    numberofselectedcolumns: 'numberOfSelectedColumns',
    numberofselectedrows: 'numberOfSelectedRows',
    performclickoncellatcolumnrow: 'performClickOnCellAtColumnRow',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    preparedcellatcolumnrow: 'preparedCellAtColumnRow',
    rectofcolumn: 'rectOfColumn',
    rectofrow: 'rectOfRow',
    registerednibsbyidentifier: 'registeredNibsByIdentifier',
    registernibforidentifier: 'registerNibForIdentifier',
    release: 'release',
    reloaddata: 'reloadData',
    reloaddataforrowindexescolumnindexes: 'reloadDataForRowIndexesColumnIndexes',
    removerowsatindexeswithanimation: 'removeRowsAtIndexesWithAnimation',
    removetablecolumn: 'removeTableColumn',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    rowactionsvisible: 'rowActionsVisible',
    rowatpoint: 'rowAtPoint',
    rowforview: 'rowForView',
    rowheight: 'rowHeight',
    rowsinrect: 'rowsInRect',
    rowsizestyle: 'rowSizeStyle',
    rowviewatrowmakeifnecessary: 'rowViewAtRowMakeIfNecessary',
    scrollcolumntovisible: 'scrollColumnToVisible',
    scrollrowtovisible: 'scrollRowToVisible',
    selectall: 'selectAll',
    selectcolumnbyextendingselection: 'selectColumnByExtendingSelection',
    selectcolumnindexesbyextendingselection: 'selectColumnIndexesByExtendingSelection',
    selectedcolumn: 'selectedColumn',
    selectedcolumnenumerator: 'selectedColumnEnumerator',
    selectedcolumnindexes: 'selectedColumnIndexes',
    selectedrow: 'selectedRow',
    selectedrowenumerator: 'selectedRowEnumerator',
    selectedrowindexes: 'selectedRowIndexes',
    selectionhighlightstyle: 'selectionHighlightStyle',
    selectrowbyextendingselection: 'selectRowByExtendingSelection',
    selectrowindexesbyextendingselection: 'selectRowIndexesByExtendingSelection',
    self: 'self',
    setaccessibilityselectedrows: 'setAccessibilitySelectedRows',
    setautoresizesallcolumnstofit: 'setAutoresizesAllColumnsToFit',
    setdraggingsourceoperationmaskforlocal: 'setDraggingSourceOperationMaskForLocal',
    setdrawsgrid: 'setDrawsGrid',
    setdroprowdropoperation: 'setDropRowDropOperation',
    setfocusedcolumn: 'setFocusedColumn',
    setindicatorimageintablecolumn: 'setIndicatorImageInTableColumn',
    shouldfocuscellatcolumnrow: 'shouldFocusCellAtColumnRow',
    sizelastcolumntofit: 'sizeLastColumnToFit',
    sizetofit: 'sizeToFit',
    sortdescriptors: 'sortDescriptors',
    style: 'style',
    superclass: 'superclass',
    tablecolumns: 'tableColumns',
    tablecolumnwithidentifier: 'tableColumnWithIdentifier',
    textdidbeginediting: 'textDidBeginEditing',
    textdidchange: 'textDidChange',
    textdidendediting: 'textDidEndEditing',
    textshouldbeginediting: 'textShouldBeginEditing',
    textshouldendediting: 'textShouldEndEditing',
    textviewcandidatesforselectedrange: 'textViewCandidatesForSelectedRange',
    textviewclickedoncellinrect: 'textViewClickedOnCellInRect',
    textviewclickedoncellinrectatindex: 'textViewClickedOnCellInRectAtIndex',
    textviewclickedonlink: 'textViewClickedOnLink',
    textviewclickedonlinkatindex: 'textViewClickedOnLinkAtIndex',
    textviewcompletionsforpartialwordrangeindexofselecteditem: 'textViewCompletionsForPartialWordRangeIndexOfSelectedItem',
    textviewdidchangeselection: 'textViewDidChangeSelection',
    textviewdidchangetypingattributes: 'textViewDidChangeTypingAttributes',
    textviewdidchecktextinrangetypesoptionsresultsorthographywordcount: 'textViewDidCheckTextInRangeTypesOptionsResultsOrthographyWordCount',
    textviewdocommandbyselector: 'textViewDoCommandBySelector',
    textviewdoubleclickedoncellinrect: 'textViewDoubleClickedOnCellInRect',
    textviewdoubleclickedoncellinrectatindex: 'textViewDoubleClickedOnCellInRectAtIndex',
    textviewdraggedcellinrectevent: 'textViewDraggedCellInRectEvent',
    textviewdraggedcellinrecteventatindex: 'textViewDraggedCellInRectEventAtIndex',
    textviewmenuforeventatindex: 'textViewMenuForEventAtIndex',
    textviewshouldchangetextinrangereplacementstring: 'textViewShouldChangeTextInRangeReplacementString',
    textviewshouldchangetextinrangesreplacementstrings: 'textViewShouldChangeTextInRangesReplacementStrings',
    textviewshouldchangetypingattributestoattributes: 'textViewShouldChangeTypingAttributesToAttributes',
    textviewshouldselectcandidateatindex: 'textViewShouldSelectCandidateAtIndex',
    textviewshouldsetspellingstaterange: 'textViewShouldSetSpellingStateRange',
    textviewshouldupdatetouchbaritemidentifiers: 'textViewShouldUpdateTouchBarItemIdentifiers',
    textviewurlforcontentsoftextattachmentatindex: 'textViewURLForContentsOfTextAttachmentAtIndex',
    textviewwillchangeselectionfromcharacterrangestocharacterranges: 'textViewWillChangeSelectionFromCharacterRangesToCharacterRanges',
    textviewwillchangeselectionfromcharacterrangetocharacterrange: 'textViewWillChangeSelectionFromCharacterRangeToCharacterRange',
    textviewwillchecktextinrangeoptionstypes: 'textViewWillCheckTextInRangeOptionsTypes',
    textviewwilldisplaytooltipforcharacteratindex: 'textViewWillDisplayToolTipForCharacterAtIndex',
    textviewwillshowsharingservicepickerforitems: 'textViewWillShowSharingServicePickerForItems',
    textviewwritablepasteboardtypesforcellatindex: 'textViewWritablePasteboardTypesForCellAtIndex',
    textviewwritecellatindextopasteboardtype: 'textViewWriteCellAtIndexToPasteboardType',
    tile: 'tile',
    undomanagerfortextview: 'undoManagerForTextView',
    unhiderowsatindexeswithanimation: 'unhideRowsAtIndexesWithAnimation',
    userinterfacelayoutdirection: 'userInterfaceLayoutDirection',
    usesalternatingrowbackgroundcolors: 'usesAlternatingRowBackgroundColors',
    usesautomaticrowheights: 'usesAutomaticRowHeights',
    usesstaticcontents: 'usesStaticContents',
    validateuserinterfaceitem: 'validateUserInterfaceItem',
    verticalmotioncanbegindrag: 'verticalMotionCanBeginDrag',
    viewatcolumnrowmakeifnecessary: 'viewAtColumnRowMakeIfNecessary',
    zone: 'zone',
  }

  // accessibilityFrame: CGRect;
  // accessibilityParent: interop.Object;
  // allowsColumnReordering: boolean;
  // allowsColumnResizing: boolean;
  // allowsColumnSelection: boolean;
  // allowsEmptySelection: boolean;
  // allowsMultipleSelection: boolean;
  // allowsTypeSelect: boolean;
  // autosaveTableColumns: boolean;
  // backgroundColor: NSColor;
  // readonly clickedColumn: number;
  // readonly clickedRow: number;
  // columnAutoresizingStyle: interop.Enum<typeof NSTableViewColumnAutoresizingStyle>;
  // cornerView: NSView;
  // dataSource: NSTableViewDataSource;
  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // doubleAction: string;
  // draggingDestinationFeedbackStyle: interop.Enum<typeof NSTableViewDraggingDestinationFeedbackStyle>;
  // readonly editedColumn: number;
  // readonly editedRow: number;
  // readonly effectiveRowSizeStyle: interop.Enum<typeof NSTableViewRowSizeStyle>;
  // readonly effectiveStyle: interop.Enum<typeof NSTableViewStyle>;
  // floatsGroupRows: boolean;
  // gridColor: NSColor;
  // gridStyleMask: interop.Enum<typeof NSTableViewGridLineStyle>;
  // readonly hash: number;
  // headerView: NSTableHeaderView;
  // readonly hiddenRowIndexes: NSIndexSet;
  // highlightedTableColumn: NSTableColumn;
  // intercellSpacing: CGSize;
  // isAccessibilityFocused: boolean;
  // readonly isProxy: boolean;
  // readonly numberOfColumns: number;
  // readonly numberOfRows: number;
  // readonly numberOfSelectedColumns: number;
  // readonly numberOfSelectedRows: number;
  // readonly registeredNibsByIdentifier: NSDictionary;
  // rowActionsVisible: boolean;
  // rowHeight: number;
  // rowSizeStyle: interop.Enum<typeof NSTableViewRowSizeStyle>;
  // readonly selectedColumn: number;
  // readonly selectedColumnIndexes: NSIndexSet;
  // readonly selectedRow: number;
  // readonly selectedRowIndexes: NSIndexSet;
  // selectionHighlightStyle: interop.Enum<typeof NSTableViewSelectionHighlightStyle>;
  // style: interop.Enum<typeof NSTableViewStyle>;
  // readonly superclass: interop.Object;
  // readonly tableColumns: NSArray;
  // userInterfaceLayoutDirection: interop.Enum<typeof NSUserInterfaceLayoutDirection>;
  // usesAlternatingRowBackgroundColors: boolean;
  // usesAutomaticRowHeights: boolean;
  // usesStaticContents: boolean;
  // verticalMotionCanBeginDrag: boolean;
  // readonly zone: interop.Pointer;

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
  readonly nativeObject = NSScrubberTextItemView.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    textfield: 'textField',
    title: 'title',
  }

  // readonly textField: NSTextField;
}

export class HTMLNSButtonElement extends HTMLNSControlElement {
  // @ts-ignore
  readonly nativeObject = NSButton.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    accessibilityframe: 'accessibilityFrame',
    accessibilityidentifier: 'accessibilityIdentifier',
    accessibilitylabel: 'accessibilityLabel',
    accessibilityparent: 'accessibilityParent',
    accessibilityperformpress: 'accessibilityPerformPress',
    activecompressionoptions: 'activeCompressionOptions',
    allowsmixedstate: 'allowsMixedState',
    alternateimage: 'alternateImage',
    alternatetitle: 'alternateTitle',
    attributedalternatetitle: 'attributedAlternateTitle',
    attributedtitle: 'attributedTitle',
    autorelease: 'autorelease',
    bezelcolor: 'bezelColor',
    bezelstyle: 'bezelStyle',
    buttonwithimagetargetaction: 'buttonWithImageTargetAction',
    buttonwithtitleimagetargetaction: 'buttonWithTitleImageTargetAction',
    buttonwithtitletargetaction: 'buttonWithTitleTargetAction',
    checkboxwithtitletargetaction: 'checkboxWithTitleTargetAction',
    class: 'class',
    compresswithprioritizedcompressionoptions: 'compressWithPrioritizedCompressionOptions',
    conformstoprotocol: 'conformsToProtocol',
    contenttintcolor: 'contentTintColor',
    debugdescription: 'debugDescription',
    description: 'description',
    getperiodicdelayinterval: 'getPeriodicDelayInterval',
    hasdestructiveaction: 'hasDestructiveAction',
    hash: 'hash',
    highlight: 'highlight',
    image: 'image',
    imagehugstitle: 'imageHugsTitle',
    imageposition: 'imagePosition',
    imagescaling: 'imageScaling',
    isaccessibilityfocused: 'isAccessibilityFocused',
    isbordered: 'isBordered',
    isequal: 'isEqual',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    isspringloaded: 'isSpringLoaded',
    istransparent: 'isTransparent',
    keyequivalent: 'keyEquivalent',
    keyequivalentmodifiermask: 'keyEquivalentModifierMask',
    maxacceleratorlevel: 'maxAcceleratorLevel',
    minimumsizewithprioritizedcompressionoptions: 'minimumSizeWithPrioritizedCompressionOptions',
    performkeyequivalent: 'performKeyEquivalent',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    radiobuttonwithtitletargetaction: 'radioButtonWithTitleTargetAction',
    release: 'release',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    self: 'self',
    setbuttontype: 'setButtonType',
    setnextstate: 'setNextState',
    setperiodicdelayinterval: 'setPeriodicDelayInterval',
    settitlewithmnemonic: 'setTitleWithMnemonic',
    showsborderonlywhilemouseinside: 'showsBorderOnlyWhileMouseInside',
    sound: 'sound',
    state: 'state',
    superclass: 'superclass',
    symbolconfiguration: 'symbolConfiguration',
    title: 'title',
    validateuserinterfaceitem: 'validateUserInterfaceItem',
    zone: 'zone',
  }

  // accessibilityFrame: CGRect;
  // accessibilityParent: interop.Object;
  // readonly activeCompressionOptions: NSUserInterfaceCompressionOptions;
  // allowsMixedState: boolean;
  // alternateImage: NSImage;
  // attributedAlternateTitle: NSAttributedString;
  // attributedTitle: NSAttributedString;
  // bezelColor: NSColor;
  // bezelStyle: interop.Enum<typeof NSBezelStyle>;
  // contentTintColor: NSColor;
  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // hasDestructiveAction: boolean;
  // readonly hash: number;
  // image: NSImage;
  // imageHugsTitle: boolean;
  // imagePosition: interop.Enum<typeof NSCellImagePosition>;
  // imageScaling: interop.Enum<typeof NSImageScaling>;
  // isAccessibilityFocused: boolean;
  // isBordered: boolean;
  // readonly isProxy: boolean;
  // isSpringLoaded: boolean;
  // isTransparent: boolean;
  // keyEquivalentModifierMask: interop.Enum<typeof NSEventModifierFlags>;
  // maxAcceleratorLevel: number;
  // showsBorderOnlyWhileMouseInside: boolean;
  // sound: NSSound;
  // state: number;
  // readonly superclass: interop.Object;
  // symbolConfiguration: NSImageSymbolConfiguration;
  // readonly zone: interop.Pointer;
}

export class HTMLNSScrubberSelectionViewElement extends HTMLNSScrubberArrangedViewElement {
  readonly nativeObject = NSScrubberSelectionView.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
  }

}

export class HTMLNSSearchFieldCellElement extends HTMLNSTextFieldCellElement {
  readonly nativeObject = NSSearchFieldCell.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    cancelbuttoncell: 'cancelButtonCell',
    cancelbuttonrectforbounds: 'cancelButtonRectForBounds',
    inittextcell: 'initTextCell',
    initwithcoder: 'initWithCoder',
    maximumrecents: 'maximumRecents',
    recentsautosavename: 'recentsAutosaveName',
    recentsearches: 'recentSearches',
    resetcancelbuttoncell: 'resetCancelButtonCell',
    resetsearchbuttoncell: 'resetSearchButtonCell',
    searchbuttoncell: 'searchButtonCell',
    searchbuttonrectforbounds: 'searchButtonRectForBounds',
    searchmenutemplate: 'searchMenuTemplate',
    searchtextrectforbounds: 'searchTextRectForBounds',
    sendssearchstringimmediately: 'sendsSearchStringImmediately',
    sendswholesearchstring: 'sendsWholeSearchString',
  }

  // cancelButtonCell: NSButtonCell;
  // maximumRecents: number;
  // searchButtonCell: NSButtonCell;
  // searchMenuTemplate: NSMenu;
  // sendsSearchStringImmediately: boolean;
  // sendsWholeSearchString: boolean;
}

export class HTMLNSRunningApplicationElement extends HTMLNSObjectElement {
  readonly nativeObject = NSRunningApplication.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    activatefromapplicationoptions: 'activateFromApplicationOptions',
    activatewithoptions: 'activateWithOptions',
    activationpolicy: 'activationPolicy',
    bundleidentifier: 'bundleIdentifier',
    bundleurl: 'bundleURL',
    currentapplication: 'currentApplication',
    executablearchitecture: 'executableArchitecture',
    executableurl: 'executableURL',
    forceterminate: 'forceTerminate',
    hide: 'hide',
    icon: 'icon',
    isactive: 'isActive',
    isfinishedlaunching: 'isFinishedLaunching',
    ishidden: 'isHidden',
    isterminated: 'isTerminated',
    launchdate: 'launchDate',
    localizedname: 'localizedName',
    ownsmenubar: 'ownsMenuBar',
    processidentifier: 'processIdentifier',
    runningapplicationswithbundleidentifier: 'runningApplicationsWithBundleIdentifier',
    runningapplicationwithprocessidentifier: 'runningApplicationWithProcessIdentifier',
    terminate: 'terminate',
    terminateautomaticallyterminableapplications: 'terminateAutomaticallyTerminableApplications',
    unhide: 'unhide',
  }

  // readonly activationPolicy: interop.Enum<typeof NSApplicationActivationPolicy>;
  // readonly bundleIdentifier: NSString;
  // readonly bundleURL: NSURL;
  // currentApplication: NSRunningApplication;
  // readonly executableArchitecture: number;
  // readonly executableURL: NSURL;
  // readonly icon: NSImage;
  // readonly isActive: boolean;
  // readonly isFinishedLaunching: boolean;
  // readonly isHidden: boolean;
  // readonly isTerminated: boolean;
  // readonly launchDate: NSDate;
  // readonly localizedName: NSString;
  // readonly ownsMenuBar: boolean;
  // readonly processIdentifier: number;
}

export class HTMLNSSpellCheckerElement extends HTMLNSObjectElement {
  readonly nativeObject = NSSpellChecker.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    accessoryview: 'accessoryView',
    automaticallyidentifieslanguages: 'automaticallyIdentifiesLanguages',
    availablelanguages: 'availableLanguages',
    checkgrammarofstringstartingatlanguagewrapinspelldocumentwithtagdetails: 'checkGrammarOfStringStartingAtLanguageWrapInSpellDocumentWithTagDetails',
    checkspellingofstringstartingat: 'checkSpellingOfStringStartingAt',
    checkspellingofstringstartingatlanguagewrapinspelldocumentwithtagwordcount: 'checkSpellingOfStringStartingAtLanguageWrapInSpellDocumentWithTagWordCount',
    checkstringrangetypesoptionsinspelldocumentwithtagorthographywordcount: 'checkStringRangeTypesOptionsInSpellDocumentWithTagOrthographyWordCount',
    closespelldocumentwithtag: 'closeSpellDocumentWithTag',
    completionsforpartialwordrangeinstringlanguageinspelldocumentwithtag: 'completionsForPartialWordRangeInStringLanguageInSpellDocumentWithTag',
    correctionforwordrangeinstringlanguageinspelldocumentwithtag: 'correctionForWordRangeInStringLanguageInSpellDocumentWithTag',
    countwordsinstringlanguage: 'countWordsInStringLanguage',
    deletesautospacebetweenstringandstringlanguage: 'deletesAutospaceBetweenStringAndStringLanguage',
    dismisscorrectionindicatorforview: 'dismissCorrectionIndicatorForView',
    forgetword: 'forgetWord',
    guessesforword: 'guessesForWord',
    guessesforwordrangeinstringlanguageinspelldocumentwithtag: 'guessesForWordRangeInStringLanguageInSpellDocumentWithTag',
    haslearnedword: 'hasLearnedWord',
    ignoredwordsinspelldocumentwithtag: 'ignoredWordsInSpellDocumentWithTag',
    ignorewordinspelldocumentwithtag: 'ignoreWordInSpellDocumentWithTag',
    isautomaticcapitalizationenabled: 'isAutomaticCapitalizationEnabled',
    isautomaticdashsubstitutionenabled: 'isAutomaticDashSubstitutionEnabled',
    isautomaticinlinepredictionenabled: 'isAutomaticInlinePredictionEnabled',
    isautomaticperiodsubstitutionenabled: 'isAutomaticPeriodSubstitutionEnabled',
    isautomaticquotesubstitutionenabled: 'isAutomaticQuoteSubstitutionEnabled',
    isautomaticspellingcorrectionenabled: 'isAutomaticSpellingCorrectionEnabled',
    isautomatictextcompletionenabled: 'isAutomaticTextCompletionEnabled',
    isautomatictextreplacementenabled: 'isAutomaticTextReplacementEnabled',
    language: 'language',
    languageforwordrangeinstringorthography: 'languageForWordRangeInStringOrthography',
    learnword: 'learnWord',
    menuforresultstringoptionsatlocationinview: 'menuForResultStringOptionsAtLocationInView',
    preventsautocorrectionbeforestringlanguage: 'preventsAutocorrectionBeforeStringLanguage',
    recordresponsetocorrectionforwordlanguageinspelldocumentwithtag: 'recordResponseToCorrectionForWordLanguageInSpellDocumentWithTag',
    requestcandidatesforselectedrangeinstringtypesoptionsinspelldocumentwithtagcompletionhandler: 'requestCandidatesForSelectedRangeInStringTypesOptionsInSpellDocumentWithTagCompletionHandler',
    requestcheckingofstringrangetypesoptionsinspelldocumentwithtagcompletionhandler: 'requestCheckingOfStringRangeTypesOptionsInSpellDocumentWithTagCompletionHandler',
    setignoredwordsinspelldocumentwithtag: 'setIgnoredWordsInSpellDocumentWithTag',
    setlanguage: 'setLanguage',
    setwordfieldstringvalue: 'setWordFieldStringValue',
    sharedspellchecker: 'sharedSpellChecker',
    sharedspellcheckerexists: 'sharedSpellCheckerExists',
    showcorrectionindicatoroftypeprimarystringalternativestringsforstringinrectviewcompletionhandler: 'showCorrectionIndicatorOfTypePrimaryStringAlternativeStringsForStringInRectViewCompletionHandler',
    showinlinepredictionforcandidatesclient: 'showInlinePredictionForCandidatesClient',
    spellingpanel: 'spellingPanel',
    substitutionspanel: 'substitutionsPanel',
    substitutionspanelaccessoryviewcontroller: 'substitutionsPanelAccessoryViewController',
    uniquespelldocumenttag: 'uniqueSpellDocumentTag',
    unlearnword: 'unlearnWord',
    updatepanels: 'updatePanels',
    updatespellingpanelwithgrammarstringdetail: 'updateSpellingPanelWithGrammarStringDetail',
    updatespellingpanelwithmisspelledword: 'updateSpellingPanelWithMisspelledWord',
    userpreferredlanguages: 'userPreferredLanguages',
    userquotesarrayforlanguage: 'userQuotesArrayForLanguage',
    userreplacementsdictionary: 'userReplacementsDictionary',
  }

  // accessoryView: NSView;
  // automaticallyIdentifiesLanguages: boolean;
  // readonly availableLanguages: NSArray;
  // isAutomaticCapitalizationEnabled: boolean;
  // isAutomaticDashSubstitutionEnabled: boolean;
  // isAutomaticInlinePredictionEnabled: boolean;
  // isAutomaticPeriodSubstitutionEnabled: boolean;
  // isAutomaticQuoteSubstitutionEnabled: boolean;
  // isAutomaticSpellingCorrectionEnabled: boolean;
  // isAutomaticTextCompletionEnabled: boolean;
  // isAutomaticTextReplacementEnabled: boolean;
  // sharedSpellChecker: NSSpellChecker;
  // sharedSpellCheckerExists: boolean;
  // readonly spellingPanel: NSPanel;
  // readonly substitutionsPanel: NSPanel;
  // substitutionsPanelAccessoryViewController: NSViewController;
  // readonly userPreferredLanguages: NSArray;
  // readonly userReplacementsDictionary: NSDictionary;
}

export class HTMLNSPopUpButtonElement extends HTMLNSButtonElement {
  // @ts-ignore
  readonly nativeObject = NSPopUpButton.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    additemswithtitles: 'addItemsWithTitles',
    additemwithtitle: 'addItemWithTitle',
    autoenablesitems: 'autoenablesItems',
    indexofitem: 'indexOfItem',
    indexofitemwithrepresentedobject: 'indexOfItemWithRepresentedObject',
    indexofitemwithtag: 'indexOfItemWithTag',
    indexofitemwithtargetandaction: 'indexOfItemWithTargetAndAction',
    indexofitemwithtitle: 'indexOfItemWithTitle',
    indexofselecteditem: 'indexOfSelectedItem',
    initwithframepullsdown: 'initWithFramePullsDown',
    insertitemwithtitleatindex: 'insertItemWithTitleAtIndex',
    itemarray: 'itemArray',
    itematindex: 'itemAtIndex',
    itemtitleatindex: 'itemTitleAtIndex',
    itemtitles: 'itemTitles',
    itemwithtitle: 'itemWithTitle',
    lastitem: 'lastItem',
    menu: 'menu',
    numberofitems: 'numberOfItems',
    preferrededge: 'preferredEdge',
    pullsdown: 'pullsDown',
    removeallitems: 'removeAllItems',
    removeitematindex: 'removeItemAtIndex',
    removeitemwithtitle: 'removeItemWithTitle',
    selecteditem: 'selectedItem',
    selectedtag: 'selectedTag',
    selectitem: 'selectItem',
    selectitematindex: 'selectItemAtIndex',
    selectitemwithtag: 'selectItemWithTag',
    selectitemwithtitle: 'selectItemWithTitle',
    settitle: 'setTitle',
    synchronizetitleandselecteditem: 'synchronizeTitleAndSelectedItem',
    titleofselecteditem: 'titleOfSelectedItem',
  }

  // autoenablesItems: boolean;
  // readonly indexOfSelectedItem: number;
  // readonly itemArray: NSArray;
  // readonly itemTitles: NSArray;
  // readonly lastItem: NSMenuItem;
  // menu: NSMenu;
  // readonly numberOfItems: number;
  // preferredEdge: interop.Enum<typeof NSRectEdge>;
  // pullsDown: boolean;
  // readonly selectedItem: NSMenuItem;
  // readonly selectedTag: number;
  // readonly titleOfSelectedItem: NSString;
}

export class HTMLNSStatusBarButtonElement extends HTMLNSButtonElement {
  readonly nativeObject = NSStatusBarButton.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    appearsdisabled: 'appearsDisabled',
  }

  // appearsDisabled: boolean;
}

export class HTMLNSTextListElementElement extends HTMLNSTextParagraphElement {
  // @ts-ignore
  readonly nativeObject = NSTextListElement.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    attributedstring: 'attributedString',
    childelements: 'childElements',
    contents: 'contents',
    initwithparentelementtextlistcontentsmarkerattributeschildelements: 'initWithParentElementTextListContentsMarkerAttributesChildElements',
    markerattributes: 'markerAttributes',
    parentelement: 'parentElement',
    textlist: 'textList',
    textlistelementwithchildelementstextlistnestinglevel: 'textListElementWithChildElementsTextListNestingLevel',
    textlistelementwithcontentsmarkerattributestextlistchildelements: 'textListElementWithContentsMarkerAttributesTextListChildElements',
  }

  // readonly attributedString: NSAttributedString;
  // readonly childElements: NSArray;
  // readonly contents: NSAttributedString;
  // readonly markerAttributes: NSDictionary;
  // readonly parentElement: NSTextListElement;
  // readonly textList: NSTextList;
}

export class HTMLNSPredicateEditorElement extends HTMLNSRuleEditorElement {
  readonly nativeObject = NSPredicateEditor.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    rowtemplates: 'rowTemplates',
  }

}

export class HTMLNSColorPanelElement extends HTMLNSPanelElement {
  readonly nativeObject = NSColorPanel.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    accessoryview: 'accessoryView',
    alpha: 'alpha',
    attachcolorlist: 'attachColorList',
    color: 'color',
    detachcolorlist: 'detachColorList',
    dragcolorwitheventfromview: 'dragColorWithEventFromView',
    iscontinuous: 'isContinuous',
    mode: 'mode',
    setaction: 'setAction',
    setpickermask: 'setPickerMask',
    setpickermode: 'setPickerMode',
    settarget: 'setTarget',
    sharedcolorpanel: 'sharedColorPanel',
    sharedcolorpanelexists: 'sharedColorPanelExists',
    showsalpha: 'showsAlpha',
  }

  // accessoryView: NSView;
  // readonly alpha: number;
  // color: NSColor;
  // isContinuous: boolean;
  // mode: interop.Enum<typeof NSColorPanelMode>;
  // sharedColorPanel: NSColorPanel;
  // sharedColorPanelExists: boolean;
  // showsAlpha: boolean;
}

export class HTMLNSPathControlElement extends HTMLNSControlElement {
  readonly nativeObject = NSPathControl.new();
  get delegate(): NSPathControlDelegateImpl {
    return (this.nativeObject.delegate ??= NSPathControlDelegateImpl.new()) as NSPathControlDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    allowedtypes: 'allowedTypes',
    backgroundcolor: 'backgroundColor',
    clickedpathcomponentcell: 'clickedPathComponentCell',
    clickedpathitem: 'clickedPathItem',
    delegate: 'delegate',
    doubleaction: 'doubleAction',
    iseditable: 'isEditable',
    menu: 'menu',
    pathcomponentcells: 'pathComponentCells',
    pathitems: 'pathItems',
    pathstyle: 'pathStyle',
    placeholderattributedstring: 'placeholderAttributedString',
    placeholderstring: 'placeholderString',
    setdraggingsourceoperationmaskforlocal: 'setDraggingSourceOperationMaskForLocal',
    setpathcomponentcells: 'setPathComponentCells',
    url: 'URL',
  }

  // backgroundColor: NSColor;
  // readonly clickedPathItem: NSPathControlItem;
  // doubleAction: string;
  // isEditable: boolean;
  // menu: NSMenu;
  // pathStyle: interop.Enum<typeof NSPathStyle>;
  // placeholderAttributedString: NSAttributedString;
  // URL: NSURL;

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
  readonly nativeObject = NSAnimation.new();
  get delegate(): NSAnimationDelegateImpl {
    return (this.nativeObject.delegate ??= NSAnimationDelegateImpl.new()) as NSAnimationDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    addprogressmark: 'addProgressMark',
    animationblockingmode: 'animationBlockingMode',
    animationcurve: 'animationCurve',
    clearstartanimation: 'clearStartAnimation',
    clearstopanimation: 'clearStopAnimation',
    copywithzone: 'copyWithZone',
    currentprogress: 'currentProgress',
    currentvalue: 'currentValue',
    delegate: 'delegate',
    duration: 'duration',
    encodewithcoder: 'encodeWithCoder',
    framerate: 'frameRate',
    initwithcoder: 'initWithCoder',
    initwithdurationanimationcurve: 'initWithDurationAnimationCurve',
    isanimating: 'isAnimating',
    progressmarks: 'progressMarks',
    removeprogressmark: 'removeProgressMark',
    runloopmodesforanimating: 'runLoopModesForAnimating',
    startanimation: 'startAnimation',
    startwhenanimationreachesprogress: 'startWhenAnimationReachesProgress',
    stopanimation: 'stopAnimation',
    stopwhenanimationreachesprogress: 'stopWhenAnimationReachesProgress',
  }

  // animationBlockingMode: interop.Enum<typeof NSAnimationBlockingMode>;
  // animationCurve: interop.Enum<typeof NSAnimationCurve>;
  // currentProgress: number;
  // readonly currentValue: number;
  // duration: number;
  // frameRate: number;
  // readonly isAnimating: boolean;
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
  readonly nativeObject = NSViewAnimation.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    initwithviewanimations: 'initWithViewAnimations',
    viewanimations: 'viewAnimations',
  }

}

export class HTMLNSScrollerElement extends HTMLNSControlElement {
  readonly nativeObject = NSScroller.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    arrowsposition: 'arrowsPosition',
    checkspaceforparts: 'checkSpaceForParts',
    controlsize: 'controlSize',
    controltint: 'controlTint',
    drawarrowhighlight: 'drawArrowHighlight',
    drawknob: 'drawKnob',
    drawknobslotinrecthighlight: 'drawKnobSlotInRectHighlight',
    drawparts: 'drawParts',
    highlight: 'highlight',
    hitpart: 'hitPart',
    iscompatiblewithoverlayscrollers: 'isCompatibleWithOverlayScrollers',
    knobproportion: 'knobProportion',
    knobstyle: 'knobStyle',
    preferredscrollerstyle: 'preferredScrollerStyle',
    rectforpart: 'rectForPart',
    scrollerstyle: 'scrollerStyle',
    scrollerwidth: 'scrollerWidth',
    scrollerwidthforcontrolsize: 'scrollerWidthForControlSize',
    scrollerwidthforcontrolsizescrollerstyle: 'scrollerWidthForControlSizeScrollerStyle',
    setfloatvalueknobproportion: 'setFloatValueKnobProportion',
    testpart: 'testPart',
    trackknob: 'trackKnob',
    trackscrollbuttons: 'trackScrollButtons',
    usableparts: 'usableParts',
  }

  // arrowsPosition: interop.Enum<typeof NSScrollArrowPosition>;
  // controlSize: interop.Enum<typeof NSControlSize>;
  // controlTint: interop.Enum<typeof NSControlTint>;
  // readonly hitPart: interop.Enum<typeof NSScrollerPart>;
  // isCompatibleWithOverlayScrollers: boolean;
  // knobProportion: number;
  // knobStyle: interop.Enum<typeof NSScrollerKnobStyle>;
  // preferredScrollerStyle: interop.Enum<typeof NSScrollerStyle>;
  // scrollerStyle: interop.Enum<typeof NSScrollerStyle>;
  // readonly usableParts: interop.Enum<typeof NSUsableScrollerParts>;
}

export class HTMLNSComboButtonElement extends HTMLNSControlElement {
  readonly nativeObject = NSComboButton.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    combobuttonwithimagemenutargetaction: 'comboButtonWithImageMenuTargetAction',
    combobuttonwithtitleimagemenutargetaction: 'comboButtonWithTitleImageMenuTargetAction',
    combobuttonwithtitlemenutargetaction: 'comboButtonWithTitleMenuTargetAction',
    image: 'image',
    imagescaling: 'imageScaling',
    menu: 'menu',
    style: 'style',
    title: 'title',
  }

  // image: NSImage;
  // imageScaling: interop.Enum<typeof NSImageScaling>;
  // menu: NSMenu;
  // style: interop.Enum<typeof NSComboButtonStyle>;
}

export class HTMLNSOutlineViewElement extends HTMLNSTableViewElement {
  // @ts-ignore
  readonly nativeObject = NSOutlineView.new();
  get delegate(): NSOutlineViewDelegateImpl {
    return (this.nativeObject.delegate ??= NSOutlineViewDelegateImpl.new()) as NSOutlineViewDelegateImpl;
  }
  protected static readonly attributesMap = {
    ...super.attributesMap,
    accessibilitycolumnheaderuielements: 'accessibilityColumnHeaderUIElements',
    accessibilitycolumns: 'accessibilityColumns',
    accessibilityframe: 'accessibilityFrame',
    accessibilityheadergroup: 'accessibilityHeaderGroup',
    accessibilityidentifier: 'accessibilityIdentifier',
    accessibilitylabel: 'accessibilityLabel',
    accessibilityparent: 'accessibilityParent',
    accessibilityrowheaderuielements: 'accessibilityRowHeaderUIElements',
    accessibilityrows: 'accessibilityRows',
    accessibilityselectedcells: 'accessibilitySelectedCells',
    accessibilityselectedcolumns: 'accessibilitySelectedColumns',
    accessibilityselectedrows: 'accessibilitySelectedRows',
    accessibilityvisiblecells: 'accessibilityVisibleCells',
    accessibilityvisiblecolumns: 'accessibilityVisibleColumns',
    accessibilityvisiblerows: 'accessibilityVisibleRows',
    autorelease: 'autorelease',
    autoresizesoutlinecolumn: 'autoresizesOutlineColumn',
    autosaveexpandeditems: 'autosaveExpandedItems',
    childindexforitem: 'childIndexForItem',
    childofitem: 'childOfItem',
    class: 'class',
    collapseitem: 'collapseItem',
    collapseitemcollapsechildren: 'collapseItemCollapseChildren',
    conformstoprotocol: 'conformsToProtocol',
    datasource: 'dataSource',
    debugdescription: 'debugDescription',
    delegate: 'delegate',
    description: 'description',
    expanditem: 'expandItem',
    expanditemexpandchildren: 'expandItemExpandChildren',
    frameofoutlinecellatrow: 'frameOfOutlineCellAtRow',
    hash: 'hash',
    indentationmarkerfollowscell: 'indentationMarkerFollowsCell',
    indentationperlevel: 'indentationPerLevel',
    insertitemsatindexesinparentwithanimation: 'insertItemsAtIndexesInParentWithAnimation',
    isaccessibilityfocused: 'isAccessibilityFocused',
    isequal: 'isEqual',
    isexpandable: 'isExpandable',
    isitemexpanded: 'isItemExpanded',
    iskindofclass: 'isKindOfClass',
    ismemberofclass: 'isMemberOfClass',
    isproxy: 'isProxy',
    itematrow: 'itemAtRow',
    levelforitem: 'levelForItem',
    levelforrow: 'levelForRow',
    moveitematindexinparenttoindexinparent: 'moveItemAtIndexInParentToIndexInParent',
    numberofchildrenofitem: 'numberOfChildrenOfItem',
    outlinetablecolumn: 'outlineTableColumn',
    parentforitem: 'parentForItem',
    performselector: 'performSelector',
    performselectorwithobject: 'performSelectorWithObject',
    performselectorwithobjectwithobject: 'performSelectorWithObjectWithObject',
    release: 'release',
    reloaditem: 'reloadItem',
    reloaditemreloadchildren: 'reloadItemReloadChildren',
    removeitemsatindexesinparentwithanimation: 'removeItemsAtIndexesInParentWithAnimation',
    respondstoselector: 'respondsToSelector',
    retain: 'retain',
    retaincount: 'retainCount',
    rowforitem: 'rowForItem',
    self: 'self',
    setaccessibilityselectedrows: 'setAccessibilitySelectedRows',
    setdropitemdropchildindex: 'setDropItemDropChildIndex',
    shouldcollapseautoexpandeditemsfordeposited: 'shouldCollapseAutoExpandedItemsForDeposited',
    stronglyreferencesitems: 'stronglyReferencesItems',
    superclass: 'superclass',
    userinterfacelayoutdirection: 'userInterfaceLayoutDirection',
    zone: 'zone',
  }

  // accessibilityFrame: CGRect;
  // accessibilityParent: interop.Object;
  // autoresizesOutlineColumn: boolean;
  // autosaveExpandedItems: boolean;
  // dataSource: NSOutlineViewDataSource;
  // readonly debugDescription: NSString;
  // readonly description: NSString;
  // readonly hash: number;
  // indentationMarkerFollowsCell: boolean;
  // indentationPerLevel: number;
  // isAccessibilityFocused: boolean;
  // readonly isProxy: boolean;
  // outlineTableColumn: NSTableColumn;
  // stronglyReferencesItems: boolean;
  // readonly superclass: interop.Object;
  // userInterfaceLayoutDirection: interop.Enum<typeof NSUserInterfaceLayoutDirection>;
  // readonly zone: interop.Pointer;

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
  readonly nativeObject = NSDraggingImageComponent.new();
  protected static readonly attributesMap = {
    ...super.attributesMap,
    contents: 'contents',
    draggingimagecomponentwithkey: 'draggingImageComponentWithKey',
    frame: 'frame',
    initwithkey: 'initWithKey',
    key: 'key',
  }

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