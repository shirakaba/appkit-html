/// <reference types="objc/types" />

import 'objc/index.js';
import { isNativeElement } from '../utils/isNativeElement.js';

export class NSViewElement extends HTMLElement {
  readonly view = NSView.new();

  get window(): NSWindow { return this.view.window; }
  set window(value: NSWindow) { this.view.window = value; }
  get superview(): NSView { return this.view.superview; }
  set superview(value: NSView) { this.view.superview = value; }
  get subviews(): NSArray { return this.view.subviews; }
  set subviews(value: NSArray) { this.view.subviews = value; }
  get opaqueAncestor(): NSView { return this.view.opaqueAncestor; }
  set opaqueAncestor(value: NSView) { this.view.opaqueAncestor = value; }
  get isHidden(): boolean { return this.view.isHidden; }
  set isHidden(value: boolean) { this.view.isHidden = value; }
  get isHiddenOrHasHiddenAncestor(): boolean { return this.view.isHiddenOrHasHiddenAncestor; }
  set isHiddenOrHasHiddenAncestor(value: boolean) { this.view.isHiddenOrHasHiddenAncestor = value; }
  get wantsDefaultClipping(): boolean { return this.view.wantsDefaultClipping; }
  set wantsDefaultClipping(value: boolean) { this.view.wantsDefaultClipping = value; }
  get postsFrameChangedNotifications(): boolean { return this.view.postsFrameChangedNotifications; }
  set postsFrameChangedNotifications(value: boolean) { this.view.postsFrameChangedNotifications = value; }
  get autoresizesSubviews(): boolean { return this.view.autoresizesSubviews; }
  set autoresizesSubviews(value: boolean) { this.view.autoresizesSubviews = value; }
  get autoresizingMask(): number { return this.view.autoresizingMask; }
  set autoresizingMask(value: number) { this.view.autoresizingMask = value; }
  get frame(): CGRect { return this.view.frame; }
  set frame(value: CGRect) { this.view.frame = value; }
  get frameRotation(): number { return this.view.frameRotation; }
  set frameRotation(value: number) { this.view.frameRotation = value; }
  get frameCenterRotation(): number { return this.view.frameCenterRotation; }
  set frameCenterRotation(value: number) { this.view.frameCenterRotation = value; }
  get boundsRotation(): number { return this.view.boundsRotation; }
  set boundsRotation(value: number) { this.view.boundsRotation = value; }
  get bounds(): CGRect { return this.view.bounds; }
  set bounds(value: CGRect) { this.view.bounds = value; }
  get isFlipped(): boolean { return this.view.isFlipped; }
  set isFlipped(value: boolean) { this.view.isFlipped = value; }
  get isRotatedFromBase(): boolean { return this.view.isRotatedFromBase; }
  set isRotatedFromBase(value: boolean) { this.view.isRotatedFromBase = value; }
  get isRotatedOrScaledFromBase(): boolean { return this.view.isRotatedOrScaledFromBase; }
  set isRotatedOrScaledFromBase(value: boolean) { this.view.isRotatedOrScaledFromBase = value; }
  get isOpaque(): boolean { return this.view.isOpaque; }
  set isOpaque(value: boolean) { this.view.isOpaque = value; }
  get canDrawConcurrently(): boolean { return this.view.canDrawConcurrently; }
  set canDrawConcurrently(value: boolean) { this.view.canDrawConcurrently = value; }
  get canDraw(): boolean { return this.view.canDraw; }
  set canDraw(value: boolean) { this.view.canDraw = value; }
  get needsDisplay(): boolean { return this.view.needsDisplay; }
  set needsDisplay(value: boolean) { this.view.needsDisplay = value; }
  get visibleRect(): CGRect { return this.view.visibleRect; }
  set visibleRect(value: CGRect) { this.view.visibleRect = value; }
  get tag(): number { return this.view.tag; }
  set tag(value: number) { this.view.tag = value; }
  get needsPanelToBecomeKey(): boolean { return this.view.needsPanelToBecomeKey; }
  set needsPanelToBecomeKey(value: boolean) { this.view.needsPanelToBecomeKey = value; }
  get mouseDownCanMoveWindow(): boolean { return this.view.mouseDownCanMoveWindow; }
  set mouseDownCanMoveWindow(value: boolean) { this.view.mouseDownCanMoveWindow = value; }
  get acceptsTouchEvents(): boolean { return this.view.acceptsTouchEvents; }
  set acceptsTouchEvents(value: boolean) { this.view.acceptsTouchEvents = value; }
  get wantsRestingTouches(): boolean { return this.view.wantsRestingTouches; }
  set wantsRestingTouches(value: boolean) { this.view.wantsRestingTouches = value; }
  get layerContentsRedrawPolicy(): number { return this.view.layerContentsRedrawPolicy; }
  set layerContentsRedrawPolicy(value: number) { this.view.layerContentsRedrawPolicy = value; }
  get layerContentsPlacement(): number { return this.view.layerContentsPlacement; }
  set layerContentsPlacement(value: number) { this.view.layerContentsPlacement = value; }
  get wantsLayer(): boolean { return this.view.wantsLayer; }
  set wantsLayer(value: boolean) { this.view.wantsLayer = value; }
  get layer(): CALayer { return this.view.layer; }
  set layer(value: CALayer) { this.view.layer = value; }
  get wantsUpdateLayer(): boolean { return this.view.wantsUpdateLayer; }
  set wantsUpdateLayer(value: boolean) { this.view.wantsUpdateLayer = value; }
  get canDrawSubviewsIntoLayer(): boolean { return this.view.canDrawSubviewsIntoLayer; }
  set canDrawSubviewsIntoLayer(value: boolean) { this.view.canDrawSubviewsIntoLayer = value; }
  get needsLayout(): boolean { return this.view.needsLayout; }
  set needsLayout(value: boolean) { this.view.needsLayout = value; }
  get alphaValue(): number { return this.view.alphaValue; }
  set alphaValue(value: number) { this.view.alphaValue = value; }
  get layerUsesCoreImageFilters(): boolean { return this.view.layerUsesCoreImageFilters; }
  set layerUsesCoreImageFilters(value: boolean) { this.view.layerUsesCoreImageFilters = value; }
  get backgroundFilters(): NSArray { return this.view.backgroundFilters; }
  set backgroundFilters(value: NSArray) { this.view.backgroundFilters = value; }
  get compositingFilter(): CIFilter { return this.view.compositingFilter; }
  set compositingFilter(value: CIFilter) { this.view.compositingFilter = value; }
  get contentFilters(): NSArray { return this.view.contentFilters; }
  set contentFilters(value: NSArray) { this.view.contentFilters = value; }
  get shadow(): NSShadow { return this.view.shadow; }
  set shadow(value: NSShadow) { this.view.shadow = value; }
  get clipsToBounds(): boolean { return this.view.clipsToBounds; }
  set clipsToBounds(value: boolean) { this.view.clipsToBounds = value; }
  get postsBoundsChangedNotifications(): boolean { return this.view.postsBoundsChangedNotifications; }
  set postsBoundsChangedNotifications(value: boolean) { this.view.postsBoundsChangedNotifications = value; }
  get enclosingScrollView(): NSScrollView { return this.view.enclosingScrollView; }
  set enclosingScrollView(value: NSScrollView) { this.view.enclosingScrollView = value; }
  get toolTip(): string { return this.view.toolTip; }
  set toolTip(value: string) { this.view.toolTip = value; }
  get inLiveResize(): boolean { return this.view.inLiveResize; }
  set inLiveResize(value: boolean) { this.view.inLiveResize = value; }
  get preservesContentDuringLiveResize(): boolean { return this.view.preservesContentDuringLiveResize; }
  set preservesContentDuringLiveResize(value: boolean) { this.view.preservesContentDuringLiveResize = value; }
  get rectPreservedDuringLiveResize(): CGRect { return this.view.rectPreservedDuringLiveResize; }
  set rectPreservedDuringLiveResize(value: CGRect) { this.view.rectPreservedDuringLiveResize = value; }
  get inputContext(): NSTextInputContext { return this.view.inputContext; }
  set inputContext(value: NSTextInputContext) { this.view.inputContext = value; }
  get userInterfaceLayoutDirection(): number { return this.view.userInterfaceLayoutDirection; }
  set userInterfaceLayoutDirection(value: number) { this.view.userInterfaceLayoutDirection = value; }
  get preparedContentRect(): CGRect { return this.view.preparedContentRect; }
  set preparedContentRect(value: CGRect) { this.view.preparedContentRect = value; }
  get allowsVibrancy(): boolean { return this.view.allowsVibrancy; }
  set allowsVibrancy(value: boolean) { this.view.allowsVibrancy = value; }
  get pressureConfiguration(): NSPressureConfiguration { return this.view.pressureConfiguration; }
  set pressureConfiguration(value: NSPressureConfiguration) { this.view.pressureConfiguration = value; }
  get wantsBestResolutionOpenGLSurface(): boolean { return this.view.wantsBestResolutionOpenGLSurface; }
  set wantsBestResolutionOpenGLSurface(value: boolean) { this.view.wantsBestResolutionOpenGLSurface = value; }
  get translatesAutoresizingMaskIntoConstraints(): boolean { return this.view.translatesAutoresizingMaskIntoConstraints; }
  set translatesAutoresizingMaskIntoConstraints(value: boolean) { this.view.translatesAutoresizingMaskIntoConstraints = value; }
  get enclosingMenuItem(): NSMenuItem { return this.view.enclosingMenuItem; }
  set enclosingMenuItem(value: NSMenuItem) { this.view.enclosingMenuItem = value; }
  get trackingAreas(): NSArray { return this.view.trackingAreas; }
  set trackingAreas(value: NSArray) { this.view.trackingAreas = value; }
  get gestureRecognizers(): NSArray { return this.view.gestureRecognizers; }
  set gestureRecognizers(value: NSArray) { this.view.gestureRecognizers = value; }
  get leadingAnchor(): NSLayoutXAxisAnchor { return this.view.leadingAnchor; }
  set leadingAnchor(value: NSLayoutXAxisAnchor) { this.view.leadingAnchor = value; }
  get trailingAnchor(): NSLayoutXAxisAnchor { return this.view.trailingAnchor; }
  set trailingAnchor(value: NSLayoutXAxisAnchor) { this.view.trailingAnchor = value; }
  get leftAnchor(): NSLayoutXAxisAnchor { return this.view.leftAnchor; }
  set leftAnchor(value: NSLayoutXAxisAnchor) { this.view.leftAnchor = value; }
  get rightAnchor(): NSLayoutXAxisAnchor { return this.view.rightAnchor; }
  set rightAnchor(value: NSLayoutXAxisAnchor) { this.view.rightAnchor = value; }
  get topAnchor(): NSLayoutYAxisAnchor { return this.view.topAnchor; }
  set topAnchor(value: NSLayoutYAxisAnchor) { this.view.topAnchor = value; }
  get bottomAnchor(): NSLayoutYAxisAnchor { return this.view.bottomAnchor; }
  set bottomAnchor(value: NSLayoutYAxisAnchor) { this.view.bottomAnchor = value; }
  get widthAnchor(): NSLayoutDimension { return this.view.widthAnchor; }
  set widthAnchor(value: NSLayoutDimension) { this.view.widthAnchor = value; }
  get heightAnchor(): NSLayoutDimension { return this.view.heightAnchor; }
  set heightAnchor(value: NSLayoutDimension) { this.view.heightAnchor = value; }
  get centerXAnchor(): NSLayoutXAxisAnchor { return this.view.centerXAnchor; }
  set centerXAnchor(value: NSLayoutXAxisAnchor) { this.view.centerXAnchor = value; }
  get centerYAnchor(): NSLayoutYAxisAnchor { return this.view.centerYAnchor; }
  set centerYAnchor(value: NSLayoutYAxisAnchor) { this.view.centerYAnchor = value; }
  get firstBaselineAnchor(): NSLayoutYAxisAnchor { return this.view.firstBaselineAnchor; }
  set firstBaselineAnchor(value: NSLayoutYAxisAnchor) { this.view.firstBaselineAnchor = value; }
  get lastBaselineAnchor(): NSLayoutYAxisAnchor { return this.view.lastBaselineAnchor; }
  set lastBaselineAnchor(value: NSLayoutYAxisAnchor) { this.view.lastBaselineAnchor = value; }
  get constraints(): NSArray { return this.view.constraints; }
  set constraints(value: NSArray) { this.view.constraints = value; }
  get candidateListTouchBarItem(): NSCandidateListTouchBarItem { return this.view.candidateListTouchBarItem; }
  set candidateListTouchBarItem(value: NSCandidateListTouchBarItem) { this.view.candidateListTouchBarItem = value; }
  get fittingSize(): CGSize { return this.view.fittingSize; }
  set fittingSize(value: CGSize) { this.view.fittingSize = value; }
  get layoutGuides(): NSArray { return this.view.layoutGuides; }
  set layoutGuides(value: NSArray) { this.view.layoutGuides = value; }
  get wantsExtendedDynamicRangeOpenGLSurface(): boolean { return this.view.wantsExtendedDynamicRangeOpenGLSurface; }
  set wantsExtendedDynamicRangeOpenGLSurface(value: boolean) { this.view.wantsExtendedDynamicRangeOpenGLSurface = value; }
  get isDrawingFindIndicator(): boolean { return this.view.isDrawingFindIndicator; }
  set isDrawingFindIndicator(value: boolean) { this.view.isDrawingFindIndicator = value; }
  get needsUpdateConstraints(): boolean { return this.view.needsUpdateConstraints; }
  set needsUpdateConstraints(value: boolean) { this.view.needsUpdateConstraints = value; }
  get heightAdjustLimit(): number { return this.view.heightAdjustLimit; }
  set heightAdjustLimit(value: number) { this.view.heightAdjustLimit = value; }
  get widthAdjustLimit(): number { return this.view.widthAdjustLimit; }
  set widthAdjustLimit(value: number) { this.view.widthAdjustLimit = value; }
  get pageHeader(): NSAttributedString { return this.view.pageHeader; }
  set pageHeader(value: NSAttributedString) { this.view.pageHeader = value; }
  get pageFooter(): NSAttributedString { return this.view.pageFooter; }
  set pageFooter(value: NSAttributedString) { this.view.pageFooter = value; }
  get printJobTitle(): string { return this.view.printJobTitle; }
  set printJobTitle(value: string) { this.view.printJobTitle = value; }
  get isInFullScreenMode(): boolean { return this.view.isInFullScreenMode; }
  set isInFullScreenMode(value: boolean) { this.view.isInFullScreenMode = value; }
  get safeAreaInsets(): NSEdgeInsets { return this.view.safeAreaInsets; }
  set safeAreaInsets(value: NSEdgeInsets) { this.view.safeAreaInsets = value; }
  get additionalSafeAreaInsets(): NSEdgeInsets { return this.view.additionalSafeAreaInsets; }
  set additionalSafeAreaInsets(value: NSEdgeInsets) { this.view.additionalSafeAreaInsets = value; }
  get safeAreaLayoutGuide(): NSLayoutGuide { return this.view.safeAreaLayoutGuide; }
  set safeAreaLayoutGuide(value: NSLayoutGuide) { this.view.safeAreaLayoutGuide = value; }
  get safeAreaRect(): CGRect { return this.view.safeAreaRect; }
  set safeAreaRect(value: CGRect) { this.view.safeAreaRect = value; }
  get layoutMarginsGuide(): NSLayoutGuide { return this.view.layoutMarginsGuide; }
  set layoutMarginsGuide(value: NSLayoutGuide) { this.view.layoutMarginsGuide = value; }
  get animations(): NSDictionary { return this.view.animations; }
  set animations(value: NSDictionary) { this.view.animations = value; }
  get identifier(): string { return this.view.identifier; }
  set identifier(value: string) { this.view.identifier = value; }
  get hash(): number { return this.view.hash; }
  set hash(value: number) { this.view.hash = value; }
  get superclass(): any { return this.view.superclass; }
  set superclass(value: any) { this.view.superclass = value; }
  get isProxy(): boolean { return this.view.isProxy; }
  set isProxy(value: boolean) { this.view.isProxy = value; }
  get zone(): interop.Pointer { return this.view.zone; }
  set zone(value: interop.Pointer) { this.view.zone = value; }
  get description(): string { return this.view.description; }
  set description(value: string) { this.view.description = value; }
  get debugDescription(): string { return this.view.debugDescription; }
  set debugDescription(value: string) { this.view.debugDescription = value; }
  get appearance(): NSAppearance { return this.view.appearance; }
  set appearance(value: NSAppearance) { this.view.appearance = value; }
  get effectiveAppearance(): NSAppearance { return this.view.effectiveAppearance; }
  set effectiveAppearance(value: NSAppearance) { this.view.effectiveAppearance = value; }
  get accessibilityFrame(): CGRect { return this.view.accessibilityFrame; }
  set accessibilityFrame(value: CGRect) { this.view.accessibilityFrame = value; }
  get accessibilityParent(): any { return this.view.accessibilityParent; }
  set accessibilityParent(value: any) { this.view.accessibilityParent = value; }
  get isAccessibilityFocused(): boolean { return this.view.isAccessibilityFocused; }
  set isAccessibilityFocused(value: boolean) { this.view.isAccessibilityFocused = value; }
  get accessibilityIdentifier(): string { return this.view.accessibilityIdentifier; }
  set accessibilityIdentifier(value: string) { this.view.accessibilityIdentifier = value; }
  get isAccessibilityElement(): boolean { return this.view.isAccessibilityElement; }
  set isAccessibilityElement(value: boolean) { this.view.isAccessibilityElement = value; }
  get accessibilityActivationPoint(): CGPoint { return this.view.accessibilityActivationPoint; }
  set accessibilityActivationPoint(value: CGPoint) { this.view.accessibilityActivationPoint = value; }
  get accessibilityTopLevelUIElement(): any { return this.view.accessibilityTopLevelUIElement; }
  set accessibilityTopLevelUIElement(value: any) { this.view.accessibilityTopLevelUIElement = value; }
  get accessibilityURL(): NSURL { return this.view.accessibilityURL; }
  set accessibilityURL(value: NSURL) { this.view.accessibilityURL = value; }
  get accessibilityValue(): any { return this.view.accessibilityValue; }
  set accessibilityValue(value: any) { this.view.accessibilityValue = value; }
  get accessibilityValueDescription(): string { return this.view.accessibilityValueDescription; }
  set accessibilityValueDescription(value: string) { this.view.accessibilityValueDescription = value; }
  get accessibilityVisibleChildren(): NSArray { return this.view.accessibilityVisibleChildren; }
  set accessibilityVisibleChildren(value: NSArray) { this.view.accessibilityVisibleChildren = value; }
  get accessibilitySubrole(): string { return this.view.accessibilitySubrole; }
  set accessibilitySubrole(value: string) { this.view.accessibilitySubrole = value; }
  get accessibilityTitle(): string { return this.view.accessibilityTitle; }
  set accessibilityTitle(value: string) { this.view.accessibilityTitle = value; }
  get accessibilityTitleUIElement(): any { return this.view.accessibilityTitleUIElement; }
  set accessibilityTitleUIElement(value: any) { this.view.accessibilityTitleUIElement = value; }
  get accessibilityNextContents(): NSArray { return this.view.accessibilityNextContents; }
  set accessibilityNextContents(value: NSArray) { this.view.accessibilityNextContents = value; }
  get accessibilityOrientation(): number { return this.view.accessibilityOrientation; }
  set accessibilityOrientation(value: number) { this.view.accessibilityOrientation = value; }
  get accessibilityOverflowButton(): any { return this.view.accessibilityOverflowButton; }
  set accessibilityOverflowButton(value: any) { this.view.accessibilityOverflowButton = value; }
  get accessibilityPlaceholderValue(): string { return this.view.accessibilityPlaceholderValue; }
  set accessibilityPlaceholderValue(value: string) { this.view.accessibilityPlaceholderValue = value; }
  get accessibilityPreviousContents(): NSArray { return this.view.accessibilityPreviousContents; }
  set accessibilityPreviousContents(value: NSArray) { this.view.accessibilityPreviousContents = value; }
  get accessibilityRole(): string { return this.view.accessibilityRole; }
  set accessibilityRole(value: string) { this.view.accessibilityRole = value; }
  get accessibilityRoleDescription(): string { return this.view.accessibilityRoleDescription; }
  set accessibilityRoleDescription(value: string) { this.view.accessibilityRoleDescription = value; }
  get accessibilitySearchButton(): any { return this.view.accessibilitySearchButton; }
  set accessibilitySearchButton(value: any) { this.view.accessibilitySearchButton = value; }
  get accessibilitySearchMenu(): any { return this.view.accessibilitySearchMenu; }
  set accessibilitySearchMenu(value: any) { this.view.accessibilitySearchMenu = value; }
  get isAccessibilitySelected(): boolean { return this.view.isAccessibilitySelected; }
  set isAccessibilitySelected(value: boolean) { this.view.isAccessibilitySelected = value; }
  get accessibilitySelectedChildren(): NSArray { return this.view.accessibilitySelectedChildren; }
  set accessibilitySelectedChildren(value: NSArray) { this.view.accessibilitySelectedChildren = value; }
  get accessibilityServesAsTitleForUIElements(): NSArray { return this.view.accessibilityServesAsTitleForUIElements; }
  set accessibilityServesAsTitleForUIElements(value: NSArray) { this.view.accessibilityServesAsTitleForUIElements = value; }
  get accessibilityShownMenu(): any { return this.view.accessibilityShownMenu; }
  set accessibilityShownMenu(value: any) { this.view.accessibilityShownMenu = value; }
  get accessibilityMinValue(): any { return this.view.accessibilityMinValue; }
  set accessibilityMinValue(value: any) { this.view.accessibilityMinValue = value; }
  get accessibilityMaxValue(): any { return this.view.accessibilityMaxValue; }
  set accessibilityMaxValue(value: any) { this.view.accessibilityMaxValue = value; }
  get accessibilityLinkedUIElements(): NSArray { return this.view.accessibilityLinkedUIElements; }
  set accessibilityLinkedUIElements(value: NSArray) { this.view.accessibilityLinkedUIElements = value; }
  get accessibilityWindow(): any { return this.view.accessibilityWindow; }
  set accessibilityWindow(value: any) { this.view.accessibilityWindow = value; }
  get accessibilityHelp(): string { return this.view.accessibilityHelp; }
  set accessibilityHelp(value: string) { this.view.accessibilityHelp = value; }
  get accessibilityFilename(): string { return this.view.accessibilityFilename; }
  set accessibilityFilename(value: string) { this.view.accessibilityFilename = value; }
  get isAccessibilityExpanded(): boolean { return this.view.isAccessibilityExpanded; }
  set isAccessibilityExpanded(value: boolean) { this.view.isAccessibilityExpanded = value; }
  get isAccessibilityEdited(): boolean { return this.view.isAccessibilityEdited; }
  set isAccessibilityEdited(value: boolean) { this.view.isAccessibilityEdited = value; }
  get isAccessibilityEnabled(): boolean { return this.view.isAccessibilityEnabled; }
  set isAccessibilityEnabled(value: boolean) { this.view.isAccessibilityEnabled = value; }
  get accessibilityChildren(): NSArray { return this.view.accessibilityChildren; }
  set accessibilityChildren(value: NSArray) { this.view.accessibilityChildren = value; }
  get accessibilityChildrenInNavigationOrder(): NSArray { return this.view.accessibilityChildrenInNavigationOrder; }
  set accessibilityChildrenInNavigationOrder(value: NSArray) { this.view.accessibilityChildrenInNavigationOrder = value; }
  get accessibilityClearButton(): any { return this.view.accessibilityClearButton; }
  set accessibilityClearButton(value: any) { this.view.accessibilityClearButton = value; }
  get accessibilityCancelButton(): any { return this.view.accessibilityCancelButton; }
  set accessibilityCancelButton(value: any) { this.view.accessibilityCancelButton = value; }
  get isAccessibilityProtectedContent(): boolean { return this.view.isAccessibilityProtectedContent; }
  set isAccessibilityProtectedContent(value: boolean) { this.view.isAccessibilityProtectedContent = value; }
  get accessibilityContents(): NSArray { return this.view.accessibilityContents; }
  set accessibilityContents(value: NSArray) { this.view.accessibilityContents = value; }
  get accessibilityLabel(): string { return this.view.accessibilityLabel; }
  set accessibilityLabel(value: string) { this.view.accessibilityLabel = value; }
  get isAccessibilityAlternateUIVisible(): boolean { return this.view.isAccessibilityAlternateUIVisible; }
  set isAccessibilityAlternateUIVisible(value: boolean) { this.view.isAccessibilityAlternateUIVisible = value; }
  get accessibilitySharedFocusElements(): NSArray { return this.view.accessibilitySharedFocusElements; }
  set accessibilitySharedFocusElements(value: NSArray) { this.view.accessibilitySharedFocusElements = value; }
  get isAccessibilityRequired(): boolean { return this.view.isAccessibilityRequired; }
  set isAccessibilityRequired(value: boolean) { this.view.isAccessibilityRequired = value; }
  get accessibilityCustomRotors(): NSArray { return this.view.accessibilityCustomRotors; }
  set accessibilityCustomRotors(value: NSArray) { this.view.accessibilityCustomRotors = value; }
  get accessibilityUserInputLabels(): NSArray { return this.view.accessibilityUserInputLabels; }
  set accessibilityUserInputLabels(value: NSArray) { this.view.accessibilityUserInputLabels = value; }
  get accessibilityAttributedUserInputLabels(): NSArray { return this.view.accessibilityAttributedUserInputLabels; }
  set accessibilityAttributedUserInputLabels(value: NSArray) { this.view.accessibilityAttributedUserInputLabels = value; }
  get accessibilityApplicationFocusedUIElement(): any { return this.view.accessibilityApplicationFocusedUIElement; }
  set accessibilityApplicationFocusedUIElement(value: any) { this.view.accessibilityApplicationFocusedUIElement = value; }
  get accessibilityMainWindow(): any { return this.view.accessibilityMainWindow; }
  set accessibilityMainWindow(value: any) { this.view.accessibilityMainWindow = value; }
  get isAccessibilityHidden(): boolean { return this.view.isAccessibilityHidden; }
  set isAccessibilityHidden(value: boolean) { this.view.isAccessibilityHidden = value; }
  get isAccessibilityFrontmost(): boolean { return this.view.isAccessibilityFrontmost; }
  set isAccessibilityFrontmost(value: boolean) { this.view.isAccessibilityFrontmost = value; }
  get accessibilityFocusedWindow(): any { return this.view.accessibilityFocusedWindow; }
  set accessibilityFocusedWindow(value: any) { this.view.accessibilityFocusedWindow = value; }
  get accessibilityWindows(): NSArray { return this.view.accessibilityWindows; }
  set accessibilityWindows(value: NSArray) { this.view.accessibilityWindows = value; }
  get accessibilityExtrasMenuBar(): any { return this.view.accessibilityExtrasMenuBar; }
  set accessibilityExtrasMenuBar(value: any) { this.view.accessibilityExtrasMenuBar = value; }
  get accessibilityMenuBar(): any { return this.view.accessibilityMenuBar; }
  set accessibilityMenuBar(value: any) { this.view.accessibilityMenuBar = value; }
  get accessibilityColumnTitles(): NSArray { return this.view.accessibilityColumnTitles; }
  set accessibilityColumnTitles(value: NSArray) { this.view.accessibilityColumnTitles = value; }
  get isAccessibilityOrderedByRow(): boolean { return this.view.isAccessibilityOrderedByRow; }
  set isAccessibilityOrderedByRow(value: boolean) { this.view.isAccessibilityOrderedByRow = value; }
  get accessibilityHorizontalUnits(): number { return this.view.accessibilityHorizontalUnits; }
  set accessibilityHorizontalUnits(value: number) { this.view.accessibilityHorizontalUnits = value; }
  get accessibilityVerticalUnits(): number { return this.view.accessibilityVerticalUnits; }
  set accessibilityVerticalUnits(value: number) { this.view.accessibilityVerticalUnits = value; }
  get accessibilityHorizontalUnitDescription(): string { return this.view.accessibilityHorizontalUnitDescription; }
  set accessibilityHorizontalUnitDescription(value: string) { this.view.accessibilityHorizontalUnitDescription = value; }
  get accessibilityVerticalUnitDescription(): string { return this.view.accessibilityVerticalUnitDescription; }
  set accessibilityVerticalUnitDescription(value: string) { this.view.accessibilityVerticalUnitDescription = value; }
  get accessibilityHandles(): NSArray { return this.view.accessibilityHandles; }
  set accessibilityHandles(value: NSArray) { this.view.accessibilityHandles = value; }
  get accessibilityWarningValue(): any { return this.view.accessibilityWarningValue; }
  set accessibilityWarningValue(value: any) { this.view.accessibilityWarningValue = value; }
  get accessibilityCriticalValue(): any { return this.view.accessibilityCriticalValue; }
  set accessibilityCriticalValue(value: any) { this.view.accessibilityCriticalValue = value; }
  get isAccessibilityDisclosed(): boolean { return this.view.isAccessibilityDisclosed; }
  set isAccessibilityDisclosed(value: boolean) { this.view.isAccessibilityDisclosed = value; }
  get accessibilityDisclosedByRow(): any { return this.view.accessibilityDisclosedByRow; }
  set accessibilityDisclosedByRow(value: any) { this.view.accessibilityDisclosedByRow = value; }
  get accessibilityDisclosedRows(): any { return this.view.accessibilityDisclosedRows; }
  set accessibilityDisclosedRows(value: any) { this.view.accessibilityDisclosedRows = value; }
  get accessibilityDisclosureLevel(): number { return this.view.accessibilityDisclosureLevel; }
  set accessibilityDisclosureLevel(value: number) { this.view.accessibilityDisclosureLevel = value; }
  get accessibilityMarkerUIElements(): NSArray { return this.view.accessibilityMarkerUIElements; }
  set accessibilityMarkerUIElements(value: NSArray) { this.view.accessibilityMarkerUIElements = value; }
  get accessibilityMarkerValues(): any { return this.view.accessibilityMarkerValues; }
  set accessibilityMarkerValues(value: any) { this.view.accessibilityMarkerValues = value; }
  get accessibilityMarkerGroupUIElement(): any { return this.view.accessibilityMarkerGroupUIElement; }
  set accessibilityMarkerGroupUIElement(value: any) { this.view.accessibilityMarkerGroupUIElement = value; }
  get accessibilityUnits(): number { return this.view.accessibilityUnits; }
  set accessibilityUnits(value: number) { this.view.accessibilityUnits = value; }
  get accessibilityUnitDescription(): string { return this.view.accessibilityUnitDescription; }
  set accessibilityUnitDescription(value: string) { this.view.accessibilityUnitDescription = value; }
  get accessibilityRulerMarkerType(): number { return this.view.accessibilityRulerMarkerType; }
  set accessibilityRulerMarkerType(value: number) { this.view.accessibilityRulerMarkerType = value; }
  get accessibilityMarkerTypeDescription(): string { return this.view.accessibilityMarkerTypeDescription; }
  set accessibilityMarkerTypeDescription(value: string) { this.view.accessibilityMarkerTypeDescription = value; }
  get accessibilityHorizontalScrollBar(): any { return this.view.accessibilityHorizontalScrollBar; }
  set accessibilityHorizontalScrollBar(value: any) { this.view.accessibilityHorizontalScrollBar = value; }
  get accessibilityVerticalScrollBar(): any { return this.view.accessibilityVerticalScrollBar; }
  set accessibilityVerticalScrollBar(value: any) { this.view.accessibilityVerticalScrollBar = value; }
  get accessibilityAllowedValues(): NSArray { return this.view.accessibilityAllowedValues; }
  set accessibilityAllowedValues(value: NSArray) { this.view.accessibilityAllowedValues = value; }
  get accessibilityLabelUIElements(): NSArray { return this.view.accessibilityLabelUIElements; }
  set accessibilityLabelUIElements(value: NSArray) { this.view.accessibilityLabelUIElements = value; }
  get accessibilityLabelValue(): number { return this.view.accessibilityLabelValue; }
  set accessibilityLabelValue(value: number) { this.view.accessibilityLabelValue = value; }
  get accessibilitySplitters(): NSArray { return this.view.accessibilitySplitters; }
  set accessibilitySplitters(value: NSArray) { this.view.accessibilitySplitters = value; }
  get accessibilityDecrementButton(): any { return this.view.accessibilityDecrementButton; }
  set accessibilityDecrementButton(value: any) { this.view.accessibilityDecrementButton = value; }
  get accessibilityIncrementButton(): any { return this.view.accessibilityIncrementButton; }
  set accessibilityIncrementButton(value: any) { this.view.accessibilityIncrementButton = value; }
  get accessibilityTabs(): NSArray { return this.view.accessibilityTabs; }
  set accessibilityTabs(value: NSArray) { this.view.accessibilityTabs = value; }
  get accessibilityHeader(): any { return this.view.accessibilityHeader; }
  set accessibilityHeader(value: any) { this.view.accessibilityHeader = value; }
  get accessibilityColumnCount(): number { return this.view.accessibilityColumnCount; }
  set accessibilityColumnCount(value: number) { this.view.accessibilityColumnCount = value; }
  get accessibilityRowCount(): number { return this.view.accessibilityRowCount; }
  set accessibilityRowCount(value: number) { this.view.accessibilityRowCount = value; }
  get accessibilityIndex(): number { return this.view.accessibilityIndex; }
  set accessibilityIndex(value: number) { this.view.accessibilityIndex = value; }
  get accessibilityColumns(): NSArray { return this.view.accessibilityColumns; }
  set accessibilityColumns(value: NSArray) { this.view.accessibilityColumns = value; }
  get accessibilityRows(): NSArray { return this.view.accessibilityRows; }
  set accessibilityRows(value: NSArray) { this.view.accessibilityRows = value; }
  get accessibilityVisibleRows(): NSArray { return this.view.accessibilityVisibleRows; }
  set accessibilityVisibleRows(value: NSArray) { this.view.accessibilityVisibleRows = value; }
  get accessibilitySelectedRows(): NSArray { return this.view.accessibilitySelectedRows; }
  set accessibilitySelectedRows(value: NSArray) { this.view.accessibilitySelectedRows = value; }
  get accessibilityVisibleColumns(): NSArray { return this.view.accessibilityVisibleColumns; }
  set accessibilityVisibleColumns(value: NSArray) { this.view.accessibilityVisibleColumns = value; }
  get accessibilitySelectedColumns(): NSArray { return this.view.accessibilitySelectedColumns; }
  set accessibilitySelectedColumns(value: NSArray) { this.view.accessibilitySelectedColumns = value; }
  get accessibilitySortDirection(): number { return this.view.accessibilitySortDirection; }
  set accessibilitySortDirection(value: number) { this.view.accessibilitySortDirection = value; }
  get accessibilityRowHeaderUIElements(): NSArray { return this.view.accessibilityRowHeaderUIElements; }
  set accessibilityRowHeaderUIElements(value: NSArray) { this.view.accessibilityRowHeaderUIElements = value; }
  get accessibilitySelectedCells(): NSArray { return this.view.accessibilitySelectedCells; }
  set accessibilitySelectedCells(value: NSArray) { this.view.accessibilitySelectedCells = value; }
  get accessibilityVisibleCells(): NSArray { return this.view.accessibilityVisibleCells; }
  set accessibilityVisibleCells(value: NSArray) { this.view.accessibilityVisibleCells = value; }
  get accessibilityColumnHeaderUIElements(): NSArray { return this.view.accessibilityColumnHeaderUIElements; }
  set accessibilityColumnHeaderUIElements(value: NSArray) { this.view.accessibilityColumnHeaderUIElements = value; }
  get accessibilityRowIndexRange(): _NSRange { return this.view.accessibilityRowIndexRange; }
  set accessibilityRowIndexRange(value: _NSRange) { this.view.accessibilityRowIndexRange = value; }
  get accessibilityColumnIndexRange(): _NSRange { return this.view.accessibilityColumnIndexRange; }
  set accessibilityColumnIndexRange(value: _NSRange) { this.view.accessibilityColumnIndexRange = value; }
  get accessibilityInsertionPointLineNumber(): number { return this.view.accessibilityInsertionPointLineNumber; }
  set accessibilityInsertionPointLineNumber(value: number) { this.view.accessibilityInsertionPointLineNumber = value; }
  get accessibilitySharedCharacterRange(): _NSRange { return this.view.accessibilitySharedCharacterRange; }
  set accessibilitySharedCharacterRange(value: _NSRange) { this.view.accessibilitySharedCharacterRange = value; }
  get accessibilitySharedTextUIElements(): NSArray { return this.view.accessibilitySharedTextUIElements; }
  set accessibilitySharedTextUIElements(value: NSArray) { this.view.accessibilitySharedTextUIElements = value; }
  get accessibilityVisibleCharacterRange(): _NSRange { return this.view.accessibilityVisibleCharacterRange; }
  set accessibilityVisibleCharacterRange(value: _NSRange) { this.view.accessibilityVisibleCharacterRange = value; }
  get accessibilityNumberOfCharacters(): number { return this.view.accessibilityNumberOfCharacters; }
  set accessibilityNumberOfCharacters(value: number) { this.view.accessibilityNumberOfCharacters = value; }
  get accessibilitySelectedText(): string { return this.view.accessibilitySelectedText; }
  set accessibilitySelectedText(value: string) { this.view.accessibilitySelectedText = value; }
  get accessibilitySelectedTextRange(): _NSRange { return this.view.accessibilitySelectedTextRange; }
  set accessibilitySelectedTextRange(value: _NSRange) { this.view.accessibilitySelectedTextRange = value; }
  get accessibilitySelectedTextRanges(): NSArray { return this.view.accessibilitySelectedTextRanges; }
  set accessibilitySelectedTextRanges(value: NSArray) { this.view.accessibilitySelectedTextRanges = value; }
  get accessibilityToolbarButton(): any { return this.view.accessibilityToolbarButton; }
  set accessibilityToolbarButton(value: any) { this.view.accessibilityToolbarButton = value; }
  get isAccessibilityModal(): boolean { return this.view.isAccessibilityModal; }
  set isAccessibilityModal(value: boolean) { this.view.isAccessibilityModal = value; }
  get accessibilityProxy(): any { return this.view.accessibilityProxy; }
  set accessibilityProxy(value: any) { this.view.accessibilityProxy = value; }
  get isAccessibilityMain(): boolean { return this.view.isAccessibilityMain; }
  set isAccessibilityMain(value: boolean) { this.view.isAccessibilityMain = value; }
  get accessibilityFullScreenButton(): any { return this.view.accessibilityFullScreenButton; }
  set accessibilityFullScreenButton(value: any) { this.view.accessibilityFullScreenButton = value; }
  get accessibilityGrowArea(): any { return this.view.accessibilityGrowArea; }
  set accessibilityGrowArea(value: any) { this.view.accessibilityGrowArea = value; }
  get accessibilityDocument(): string { return this.view.accessibilityDocument; }
  set accessibilityDocument(value: string) { this.view.accessibilityDocument = value; }
  get accessibilityDefaultButton(): any { return this.view.accessibilityDefaultButton; }
  set accessibilityDefaultButton(value: any) { this.view.accessibilityDefaultButton = value; }
  get accessibilityCloseButton(): any { return this.view.accessibilityCloseButton; }
  set accessibilityCloseButton(value: any) { this.view.accessibilityCloseButton = value; }
  get accessibilityZoomButton(): any { return this.view.accessibilityZoomButton; }
  set accessibilityZoomButton(value: any) { this.view.accessibilityZoomButton = value; }
  get accessibilityMinimizeButton(): any { return this.view.accessibilityMinimizeButton; }
  set accessibilityMinimizeButton(value: any) { this.view.accessibilityMinimizeButton = value; }
  get isAccessibilityMinimized(): boolean { return this.view.isAccessibilityMinimized; }
  set isAccessibilityMinimized(value: boolean) { this.view.isAccessibilityMinimized = value; }
  get accessibilityCustomActions(): NSArray { return this.view.accessibilityCustomActions; }
  set accessibilityCustomActions(value: NSArray) { this.view.accessibilityCustomActions = value; }
  get nextResponder(): NSResponder { return this.view.nextResponder; }
  set nextResponder(value: NSResponder) { this.view.nextResponder = value; }
  get acceptsFirstResponder(): boolean { return this.view.acceptsFirstResponder; }
  set acceptsFirstResponder(value: boolean) { this.view.acceptsFirstResponder = value; }
  get menu(): NSMenu { return this.view.menu; }
  set menu(value: NSMenu) { this.view.menu = value; }
  get touchBar(): NSTouchBar { return this.view.touchBar; }
  set touchBar(value: NSTouchBar) { this.view.touchBar = value; }
  get undoManager(): NSUndoManager { return this.view.undoManager; }
  set undoManager(value: NSUndoManager) { this.view.undoManager = value; }
  get objectForWebScript(): any { return this.view.objectForWebScript; }
  set objectForWebScript(value: any) { this.view.objectForWebScript = value; }
  get webPlugInContainerSelectionColor(): NSColor { return this.view.webPlugInContainerSelectionColor; }
  set webPlugInContainerSelectionColor(value: NSColor) { this.view.webPlugInContainerSelectionColor = value; }
  get webFrame(): WebFrame { return this.view.webFrame; }
  set webFrame(value: WebFrame) { this.view.webFrame = value; }
  get exposedBindings(): NSArray { return this.view.exposedBindings; }
  set exposedBindings(value: NSArray) { this.view.exposedBindings = value; }
  get classForCoder(): any { return this.view.classForCoder; }
  set classForCoder(value: any) { this.view.classForCoder = value; }
  get classCode(): number { return this.view.classCode; }
  set classCode(value: number) { this.view.classCode = value; }
  get classForArchiver(): any { return this.view.classForArchiver; }
  set classForArchiver(value: any) { this.view.classForArchiver = value; }
  get objectSpecifier(): NSScriptObjectSpecifier { return this.view.objectSpecifier; }
  set objectSpecifier(value: NSScriptObjectSpecifier) { this.view.objectSpecifier = value; }
  get classForPortCoder(): any { return this.view.classForPortCoder; }
  set classForPortCoder(value: any) { this.view.classForPortCoder = value; }
  get classForKeyedArchiver(): any { return this.view.classForKeyedArchiver; }
  set classForKeyedArchiver(value: any) { this.view.classForKeyedArchiver = value; }
  get classDescription(): NSClassDescription { return this.view.classDescription; }
  set classDescription(value: NSClassDescription) { this.view.classDescription = value; }
  get attributeKeys(): NSArray { return this.view.attributeKeys; }
  set attributeKeys(value: NSArray) { this.view.attributeKeys = value; }
  get toOneRelationshipKeys(): NSArray { return this.view.toOneRelationshipKeys; }
  set toOneRelationshipKeys(value: NSArray) { this.view.toOneRelationshipKeys = value; }
  get toManyRelationshipKeys(): NSArray { return this.view.toManyRelationshipKeys; }
  set toManyRelationshipKeys(value: NSArray) { this.view.toManyRelationshipKeys = value; }
  get observationInfo(): interop.Pointer { return this.view.observationInfo; }
  set observationInfo(value: interop.Pointer) { this.view.observationInfo = value; }
  get autoContentAccessingProxy(): any { return this.view.autoContentAccessingProxy; }
  set autoContentAccessingProxy(value: any) { this.view.autoContentAccessingProxy = value; }
  get __brand__(): interop.PointerObject['__brand__'] { return this.view.__brand__; }
  set __brand__(value: interop).PointerObject[_brand__'] { return this.view.__brand__ = value; }

  appendChild<T extends Node>(node: T): T {
    const appended = super.appendChild(node);

    if (isNativeElement(node)) {
      if (node.view instanceof NSView) {
        this.view.addSubview(node.view);
      }
    }

    return appended;
  }

  removeChild<T extends Node>(child: T): T {
    const removed = super.removeChild(child);

    if (isNativeElement(child)) {
      if (child.view instanceof NSView) {
        child.view.removeFromSuperview();
      }
    }

    return removed;
  }
}

// We should probably consider as attributes only values that can be typed in
// the Web Inspector, so strings and *maybe* booleans.
//
// https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes#content_versus_idl_attributes
//
// function testAutoplay(value){
//   const values = [];
//
//   $0.autoplay = true; // Initialize as true
//   $0.autoplay = value; // Set IDL attribute (JS property)
//   values.push($0.getAttribute('autoplay'), $0.autoplay);
//
//   $0.autoplay = true; // Re-initialize as true
//   $0.setAttribute('autoplay', value); // Set content attribute (HTML)
//   values.push($0.getAttribute('autoplay'), $0.autoplay);
//
//   return values;
// }
//
// Interestingly, all cases of setAttribute() coerce the JS value to true. It
// must only be removeAttribute() that can negate it.
//
// testAutoplay(true);       // ["",   true,  "true",            true]
// testAutoplay(false);      // [null, false, "false",           true]
// testAutoplay('');         // [null, false, "",                true]
// testAutoplay(null);       // [null, false, "null",            true]
// testAutoplay('autoplay'); // ["",   true,  "autoplay",        true]
// testAutoplay('hi');       // ["",   true,  "hi",              true]
// testAutoplay(undefined);  // [null, false, "undefined",       true]
// testAutoplay(123);        // ["",   true,  "123",             true]
// testAutoplay({});         // ["",   true,  "[object Object]", true]
//
// - element.setAttribute(value);
//   - sets boolean values as true
//   - sets the attribute as `${value}`
// - element.value = value;
//   - sets boolean values as !!value
//   - sets the attribute as value ? '' : null
