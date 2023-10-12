/// <reference types="objc/types" />

import 'objc/index.js';
import { isNativeElement } from '../utils/isNativeElement.js';

export class NSViewElement extends HTMLElement implements NSView {
  initWithFrame(frameRect: CGRect): this {
    throw new Error('Method not implemented.');
  }
  initWithCoder(coder: NSCoder): this {
    throw new Error('Method not implemented.');
  }
  window: NSWindow;
  superview: NSView;
  subviews: NSArray;
  isDescendantOf(view: NSView): boolean {
    throw new Error('Method not implemented.');
  }
  ancestorSharedWithView(view: NSView): NSView {
    throw new Error('Method not implemented.');
  }
  opaqueAncestor: NSView;
  isHidden: boolean;
  isHiddenOrHasHiddenAncestor: boolean;
  getRectsBeingDrawnCount(
    rects: interop.Pointer,
    count: interop.Pointer
  ): void {
    throw new Error('Method not implemented.');
  }
  needsToDrawRect(rect: CGRect): boolean {
    throw new Error('Method not implemented.');
  }
  wantsDefaultClipping: boolean;
  viewDidHide(): void {
    throw new Error('Method not implemented.');
  }
  viewDidUnhide(): void {
    throw new Error('Method not implemented.');
  }
  addSubview(view: NSView): void {
    throw new Error('Method not implemented.');
  }
  addSubviewPositionedRelativeTo(
    view: NSView,
    place: number,
    otherView: NSView | null
  ): void {
    throw new Error('Method not implemented.');
  }
  sortSubviewsUsingFunctionContext(
    compare: interop.Pointer,
    context: interop.Pointer
  ): void {
    throw new Error('Method not implemented.');
  }
  viewWillMoveToWindow(newWindow: NSWindow | null): void {
    throw new Error('Method not implemented.');
  }
  viewDidMoveToWindow(): void {
    throw new Error('Method not implemented.');
  }
  viewWillMoveToSuperview(newSuperview: NSView | null): void {
    throw new Error('Method not implemented.');
  }
  viewDidMoveToSuperview(): void {
    throw new Error('Method not implemented.');
  }
  didAddSubview(subview: NSView): void {
    throw new Error('Method not implemented.');
  }
  willRemoveSubview(subview: NSView): void {
    throw new Error('Method not implemented.');
  }
  removeFromSuperview(): void {
    throw new Error('Method not implemented.');
  }
  replaceSubviewWith(oldView: NSView, newView: NSView): void {
    throw new Error('Method not implemented.');
  }
  removeFromSuperviewWithoutNeedingDisplay(): void {
    throw new Error('Method not implemented.');
  }
  viewDidChangeBackingProperties(): void {
    throw new Error('Method not implemented.');
  }
  postsFrameChangedNotifications: boolean;
  resizeSubviewsWithOldSize(oldSize: CGSize): void {
    throw new Error('Method not implemented.');
  }
  resizeWithOldSuperviewSize(oldSize: CGSize): void {
    throw new Error('Method not implemented.');
  }
  autoresizesSubviews: boolean;
  autoresizingMask: number;
  setFrameOrigin(newOrigin: CGPoint): void {
    throw new Error('Method not implemented.');
  }
  setFrameSize(newSize: CGSize): void {
    throw new Error('Method not implemented.');
  }
  frame: CGRect;
  frameRotation: number;
  frameCenterRotation: number;
  setBoundsOrigin(newOrigin: CGPoint): void {
    throw new Error('Method not implemented.');
  }
  setBoundsSize(newSize: CGSize): void {
    throw new Error('Method not implemented.');
  }
  boundsRotation: number;
  translateOriginToPoint(translation: CGPoint): void {
    throw new Error('Method not implemented.');
  }
  scaleUnitSquareToSize(newUnitSize: CGSize): void {
    throw new Error('Method not implemented.');
  }
  rotateByAngle(angle: number): void {
    throw new Error('Method not implemented.');
  }
  bounds: CGRect;
  isFlipped: boolean;
  isRotatedFromBase: boolean;
  isRotatedOrScaledFromBase: boolean;
  isOpaque: boolean;
  convertPointFromView(point: CGPoint, view: NSView | null) {
    throw new Error('Method not implemented.');
  }
  convertPointToView(point: CGPoint, view: NSView | null) {
    throw new Error('Method not implemented.');
  }
  convertSizeFromView(size: CGSize, view: NSView | null) {
    throw new Error('Method not implemented.');
  }
  convertSizeToView(size: CGSize, view: NSView | null) {
    throw new Error('Method not implemented.');
  }
  convertRectFromView(rect: CGRect, view: NSView | null) {
    throw new Error('Method not implemented.');
  }
  convertRectToView(rect: CGRect, view: NSView | null) {
    throw new Error('Method not implemented.');
  }
  backingAlignedRectOptions(rect: CGRect, options: number) {
    throw new Error('Method not implemented.');
  }
  centerScanRect(rect: CGRect) {
    throw new Error('Method not implemented.');
  }
  convertPointToBacking(point: CGPoint) {
    throw new Error('Method not implemented.');
  }
  convertPointFromBacking(point: CGPoint) {
    throw new Error('Method not implemented.');
  }
  convertSizeToBacking(size: CGSize) {
    throw new Error('Method not implemented.');
  }
  convertSizeFromBacking(size: CGSize) {
    throw new Error('Method not implemented.');
  }
  convertRectToBacking(rect: CGRect) {
    throw new Error('Method not implemented.');
  }
  convertRectFromBacking(rect: CGRect) {
    throw new Error('Method not implemented.');
  }
  convertPointToLayer(point: CGPoint) {
    throw new Error('Method not implemented.');
  }
  convertPointFromLayer(point: CGPoint) {
    throw new Error('Method not implemented.');
  }
  convertSizeToLayer(size: CGSize) {
    throw new Error('Method not implemented.');
  }
  convertSizeFromLayer(size: CGSize) {
    throw new Error('Method not implemented.');
  }
  convertRectToLayer(rect: CGRect) {
    throw new Error('Method not implemented.');
  }
  convertRectFromLayer(rect: CGRect) {
    throw new Error('Method not implemented.');
  }
  canDrawConcurrently: boolean;
  canDraw: boolean;
  setNeedsDisplayInRect(invalidRect: CGRect): void {
    throw new Error('Method not implemented.');
  }
  needsDisplay: boolean;
  lockFocus(): void {
    throw new Error('Method not implemented.');
  }
  unlockFocus(): void {
    throw new Error('Method not implemented.');
  }
  lockFocusIfCanDraw(): boolean {
    throw new Error('Method not implemented.');
  }
  lockFocusIfCanDrawInContext(context: NSGraphicsContext): boolean {
    throw new Error('Method not implemented.');
  }
  visibleRect: CGRect;
  display(): void {
    throw new Error('Method not implemented.');
  }
  displayIfNeeded(): void {
    throw new Error('Method not implemented.');
  }
  displayIfNeededIgnoringOpacity(): void {
    throw new Error('Method not implemented.');
  }
  displayRect(rect: CGRect): void {
    throw new Error('Method not implemented.');
  }
  displayIfNeededInRect(rect: CGRect): void {
    throw new Error('Method not implemented.');
  }
  displayRectIgnoringOpacity(rect: CGRect): void {
    throw new Error('Method not implemented.');
  }
  displayIfNeededInRectIgnoringOpacity(rect: CGRect): void {
    throw new Error('Method not implemented.');
  }
  drawRect(dirtyRect: CGRect): void {
    throw new Error('Method not implemented.');
  }
  displayRectIgnoringOpacityInContext(
    rect: CGRect,
    context: NSGraphicsContext
  ): void {
    throw new Error('Method not implemented.');
  }
  bitmapImageRepForCachingDisplayInRect(rect: CGRect): NSBitmapImageRep {
    throw new Error('Method not implemented.');
  }
  cacheDisplayInRectToBitmapImageRep(
    rect: CGRect,
    bitmapImageRep: NSBitmapImageRep
  ): void {
    throw new Error('Method not implemented.');
  }
  viewWillDraw(): void {
    throw new Error('Method not implemented.');
  }
  scrollPoint(point: CGPoint): void {
    throw new Error('Method not implemented.');
  }
  scrollRectToVisible(rect: CGRect): boolean {
    throw new Error('Method not implemented.');
  }
  autoscroll(event: NSEvent): boolean {
    throw new Error('Method not implemented.');
  }
  adjustScroll(newVisible: CGRect) {
    throw new Error('Method not implemented.');
  }
  scrollRectBy(rect: CGRect, delta: CGSize): void {
    throw new Error('Method not implemented.');
  }
  translateRectsNeedingDisplayInRectBy(clipRect: CGRect, delta: CGSize): void {
    throw new Error('Method not implemented.');
  }
  hitTest(point: CGPoint): NSView {
    throw new Error('Method not implemented.');
  }
  mouseInRect(point: CGPoint, rect: CGRect): boolean {
    throw new Error('Method not implemented.');
  }
  viewWithTag(tag: number): NSView {
    throw new Error('Method not implemented.');
  }
  tag: number;
  performKeyEquivalent(event: NSEvent): boolean {
    throw new Error('Method not implemented.');
  }
  acceptsFirstMouse(event: NSEvent | null): boolean {
    throw new Error('Method not implemented.');
  }
  shouldDelayWindowOrderingForEvent(event: NSEvent): boolean {
    throw new Error('Method not implemented.');
  }
  needsPanelToBecomeKey: boolean;
  mouseDownCanMoveWindow: boolean;
  acceptsTouchEvents: boolean;
  wantsRestingTouches: boolean;
  makeBackingLayer(): CALayer {
    throw new Error('Method not implemented.');
  }
  layerContentsRedrawPolicy: number;
  layerContentsPlacement: number;
  wantsLayer: boolean;
  layer: CALayer;
  wantsUpdateLayer: boolean;
  updateLayer(): void {
    throw new Error('Method not implemented.');
  }
  canDrawSubviewsIntoLayer: boolean;
  layoutSubtreeIfNeeded(): void {
    throw new Error('Method not implemented.');
  }
  layout(): void {
    throw new Error('Method not implemented.');
  }
  needsLayout: boolean;
  alphaValue: number;
  layerUsesCoreImageFilters: boolean;
  backgroundFilters: NSArray;
  compositingFilter: CIFilter;
  contentFilters: NSArray;
  shadow: NSShadow;
  clipsToBounds: boolean;
  postsBoundsChangedNotifications: boolean;
  enclosingScrollView: NSScrollView;
  menuForEvent(event: NSEvent): NSMenu {
    throw new Error('Method not implemented.');
  }
  willOpenMenuWithEvent(menu: NSMenu, event: NSEvent): void {
    throw new Error('Method not implemented.');
  }
  didCloseMenuWithEvent(menu: NSMenu, event: NSEvent | null): void {
    throw new Error('Method not implemented.');
  }
  toolTip: string;
  addToolTipRectOwnerUserData(
    rect: CGRect,
    owner: any,
    data: interop.Pointer
  ): number {
    throw new Error('Method not implemented.');
  }
  removeToolTip(tag: number): void {
    throw new Error('Method not implemented.');
  }
  removeAllToolTips(): void {
    throw new Error('Method not implemented.');
  }
  viewWillStartLiveResize(): void {
    throw new Error('Method not implemented.');
  }
  viewDidEndLiveResize(): void {
    throw new Error('Method not implemented.');
  }
  inLiveResize: boolean;
  preservesContentDuringLiveResize: boolean;
  rectPreservedDuringLiveResize: CGRect;
  getRectsExposedDuringLiveResizeCount(
    exposedRects: interop.Pointer,
    count: interop.Pointer
  ): void {
    throw new Error('Method not implemented.');
  }
  inputContext: NSTextInputContext;
  rectForSmartMagnificationAtPointInRect(
    location: CGPoint,
    visibleRect: CGRect
  ) {
    throw new Error('Method not implemented.');
  }
  userInterfaceLayoutDirection: number;
  prepareForReuse(): void {
    throw new Error('Method not implemented.');
  }
  prepareContentInRect(rect: CGRect): void {
    throw new Error('Method not implemented.');
  }
  preparedContentRect: CGRect;
  allowsVibrancy: boolean;
  viewDidChangeEffectiveAppearance(): void {
    throw new Error('Method not implemented.');
  }
  setSubviews(subviews: NSArray): void {
    throw new Error('Method not implemented.');
  }
  setHidden(hidden: boolean): void {
    throw new Error('Method not implemented.');
  }
  setPostsFrameChangedNotifications(
    postsFrameChangedNotifications: boolean
  ): void {
    throw new Error('Method not implemented.');
  }
  setAutoresizesSubviews(autoresizesSubviews: boolean): void {
    throw new Error('Method not implemented.');
  }
  setAutoresizingMask(autoresizingMask: number): void {
    throw new Error('Method not implemented.');
  }
  setFrame(frame: CGRect): void {
    throw new Error('Method not implemented.');
  }
  setFrameRotation(frameRotation: number): void {
    throw new Error('Method not implemented.');
  }
  setFrameCenterRotation(frameCenterRotation: number): void {
    throw new Error('Method not implemented.');
  }
  setBoundsRotation(boundsRotation: number): void {
    throw new Error('Method not implemented.');
  }
  setBounds(bounds: CGRect): void {
    throw new Error('Method not implemented.');
  }
  setCanDrawConcurrently(canDrawConcurrently: boolean): void {
    throw new Error('Method not implemented.');
  }
  setNeedsDisplay(needsDisplay: boolean): void {
    throw new Error('Method not implemented.');
  }
  setAcceptsTouchEvents(acceptsTouchEvents: boolean): void {
    throw new Error('Method not implemented.');
  }
  setWantsRestingTouches(wantsRestingTouches: boolean): void {
    throw new Error('Method not implemented.');
  }
  setLayerContentsRedrawPolicy(layerContentsRedrawPolicy: number): void {
    throw new Error('Method not implemented.');
  }
  setLayerContentsPlacement(layerContentsPlacement: number): void {
    throw new Error('Method not implemented.');
  }
  setWantsLayer(wantsLayer: boolean): void {
    throw new Error('Method not implemented.');
  }
  setLayer(layer: CALayer): void {
    throw new Error('Method not implemented.');
  }
  setCanDrawSubviewsIntoLayer(canDrawSubviewsIntoLayer: boolean): void {
    throw new Error('Method not implemented.');
  }
  setNeedsLayout(needsLayout: boolean): void {
    throw new Error('Method not implemented.');
  }
  setAlphaValue(alphaValue: number): void {
    throw new Error('Method not implemented.');
  }
  setLayerUsesCoreImageFilters(layerUsesCoreImageFilters: boolean): void {
    throw new Error('Method not implemented.');
  }
  setBackgroundFilters(backgroundFilters: NSArray): void {
    throw new Error('Method not implemented.');
  }
  setCompositingFilter(compositingFilter: CIFilter): void {
    throw new Error('Method not implemented.');
  }
  setContentFilters(contentFilters: NSArray): void {
    throw new Error('Method not implemented.');
  }
  setShadow(shadow: NSShadow): void {
    throw new Error('Method not implemented.');
  }
  setClipsToBounds(clipsToBounds: boolean): void {
    throw new Error('Method not implemented.');
  }
  setPostsBoundsChangedNotifications(
    postsBoundsChangedNotifications: boolean
  ): void {
    throw new Error('Method not implemented.');
  }
  setToolTip(toolTip: string | null): void {
    throw new Error('Method not implemented.');
  }
  setUserInterfaceLayoutDirection(userInterfaceLayoutDirection: number): void {
    throw new Error('Method not implemented.');
  }
  setPreparedContentRect(preparedContentRect: CGRect): void {
    throw new Error('Method not implemented.');
  }
  pressureConfiguration: NSPressureConfiguration;
  setPressureConfiguration(
    pressureConfiguration: NSPressureConfiguration
  ): void {
    throw new Error('Method not implemented.');
  }
  wantsBestResolutionOpenGLSurface: boolean;
  setWantsBestResolutionOpenGLSurface(
    wantsBestResolutionOpenGLSurface: boolean
  ): void {
    throw new Error('Method not implemented.');
  }
  translatesAutoresizingMaskIntoConstraints: boolean;
  setTranslatesAutoresizingMaskIntoConstraints(
    translatesAutoresizingMaskIntoConstraints: boolean
  ): void {
    throw new Error('Method not implemented.');
  }
  reflectScrolledClipView(clipView: NSClipView): void {
    throw new Error('Method not implemented.');
  }
  scrollClipViewToPoint(clipView: NSClipView, point: CGPoint): void {
    throw new Error('Method not implemented.');
  }
  enclosingMenuItem: NSMenuItem;
  addTrackingArea(trackingArea: NSTrackingArea): void {
    throw new Error('Method not implemented.');
  }
  removeTrackingArea(trackingArea: NSTrackingArea): void {
    throw new Error('Method not implemented.');
  }
  trackingAreas: NSArray;
  updateTrackingAreas(): void {
    throw new Error('Method not implemented.');
  }
  addCursorRectCursor(rect: CGRect, object: NSCursor): void {
    throw new Error('Method not implemented.');
  }
  removeCursorRectCursor(rect: CGRect, object: NSCursor): void {
    throw new Error('Method not implemented.');
  }
  discardCursorRects(): void {
    throw new Error('Method not implemented.');
  }
  resetCursorRects(): void {
    throw new Error('Method not implemented.');
  }
  addTrackingRectOwnerUserDataAssumeInside(
    rect: CGRect,
    owner: any,
    data: interop.Pointer,
    flag: boolean
  ): number {
    throw new Error('Method not implemented.');
  }
  removeTrackingRect(tag: number): void {
    throw new Error('Method not implemented.');
  }
  gestureRecognizers: NSArray;
  addGestureRecognizer(gestureRecognizer: NSGestureRecognizer): void {
    throw new Error('Method not implemented.');
  }
  removeGestureRecognizer(gestureRecognizer: NSGestureRecognizer): void {
    throw new Error('Method not implemented.');
  }
  setGestureRecognizers(gestureRecognizers: NSArray): void {
    throw new Error('Method not implemented.');
  }
  showDefinitionForAttributedStringAtPoint(
    attrString: NSAttributedString | null,
    textBaselineOrigin: CGPoint
  ): void {
    throw new Error('Method not implemented.');
  }
  showDefinitionForAttributedStringRangeOptionsBaselineOriginProvider(
    attrString: NSAttributedString | null,
    targetRange: _NSRange,
    options: NSDictionary | null,
    originProvider: (p0: _NSRange) => any
  ): void {
    throw new Error('Method not implemented.');
  }
  leadingAnchor: NSLayoutXAxisAnchor;
  trailingAnchor: NSLayoutXAxisAnchor;
  leftAnchor: NSLayoutXAxisAnchor;
  rightAnchor: NSLayoutXAxisAnchor;
  topAnchor: NSLayoutYAxisAnchor;
  bottomAnchor: NSLayoutYAxisAnchor;
  widthAnchor: NSLayoutDimension;
  heightAnchor: NSLayoutDimension;
  centerXAnchor: NSLayoutXAxisAnchor;
  centerYAnchor: NSLayoutYAxisAnchor;
  firstBaselineAnchor: NSLayoutYAxisAnchor;
  lastBaselineAnchor: NSLayoutYAxisAnchor;
  constraints: NSArray;
  addConstraint(constraint: NSLayoutConstraint): void {
    throw new Error('Method not implemented.');
  }
  addConstraints(constraints: NSArray): void {
    throw new Error('Method not implemented.');
  }
  removeConstraint(constraint: NSLayoutConstraint): void {
    throw new Error('Method not implemented.');
  }
  removeConstraints(constraints: NSArray): void {
    throw new Error('Method not implemented.');
  }
  candidateListTouchBarItem: NSCandidateListTouchBarItem;
  fittingSize: CGSize;
  addLayoutGuide(guide: NSLayoutGuide): void {
    throw new Error('Method not implemented.');
  }
  removeLayoutGuide(guide: NSLayoutGuide): void {
    throw new Error('Method not implemented.');
  }
  layoutGuides: NSArray;
  wantsExtendedDynamicRangeOpenGLSurface: boolean;
  setWantsExtendedDynamicRangeOpenGLSurface(
    wantsExtendedDynamicRangeOpenGLSurface: boolean
  ): void {
    throw new Error('Method not implemented.');
  }
  isDrawingFindIndicator: boolean;
  updateConstraintsForSubtreeIfNeeded(): void {
    throw new Error('Method not implemented.');
  }
  updateConstraints(): void {
    throw new Error('Method not implemented.');
  }
  needsUpdateConstraints: boolean;
  setNeedsUpdateConstraints(needsUpdateConstraints: boolean): void {
    throw new Error('Method not implemented.');
  }
  writeEPSInsideRectToPasteboard(rect: CGRect, pasteboard: NSPasteboard): void {
    throw new Error('Method not implemented.');
  }
  dataWithEPSInsideRect(rect: CGRect): NSData {
    throw new Error('Method not implemented.');
  }
  writePDFInsideRectToPasteboard(rect: CGRect, pasteboard: NSPasteboard): void {
    throw new Error('Method not implemented.');
  }
  dataWithPDFInsideRect(rect: CGRect): NSData {
    throw new Error('Method not implemented.');
  }
  print(sender: any): void {
    throw new Error('Method not implemented.');
  }
  knowsPageRange(range: interop.Pointer): boolean {
    throw new Error('Method not implemented.');
  }
  heightAdjustLimit: number;
  widthAdjustLimit: number;
  adjustPageWidthNewLeftRightLimit(
    newRight: interop.Pointer,
    oldLeft: number,
    oldRight: number,
    rightLimit: number
  ): void {
    throw new Error('Method not implemented.');
  }
  adjustPageHeightNewTopBottomLimit(
    newBottom: interop.Pointer,
    oldTop: number,
    oldBottom: number,
    bottomLimit: number
  ): void {
    throw new Error('Method not implemented.');
  }
  rectForPage(page: number) {
    throw new Error('Method not implemented.');
  }
  locationOfPrintRect(rect: CGRect) {
    throw new Error('Method not implemented.');
  }
  drawPageBorderWithSize(borderSize: CGSize): void {
    throw new Error('Method not implemented.');
  }
  pageHeader: NSAttributedString;
  pageFooter: NSAttributedString;
  drawSheetBorderWithSize(borderSize: CGSize): void {
    throw new Error('Method not implemented.');
  }
  printJobTitle: string;
  beginDocument(): void {
    throw new Error('Method not implemented.');
  }
  endDocument(): void {
    throw new Error('Method not implemented.');
  }
  beginPageInRectAtPlacement(rect: CGRect, location: CGPoint): void {
    throw new Error('Method not implemented.');
  }
  endPage(): void {
    throw new Error('Method not implemented.');
  }
  rulerViewShouldMoveMarker(
    ruler: NSRulerView,
    marker: NSRulerMarker
  ): boolean {
    throw new Error('Method not implemented.');
  }
  rulerViewWillMoveMarkerToLocation(
    ruler: NSRulerView,
    marker: NSRulerMarker,
    location: number
  ): number {
    throw new Error('Method not implemented.');
  }
  rulerViewDidMoveMarker(ruler: NSRulerView, marker: NSRulerMarker): void {
    throw new Error('Method not implemented.');
  }
  rulerViewShouldRemoveMarker(
    ruler: NSRulerView,
    marker: NSRulerMarker
  ): boolean {
    throw new Error('Method not implemented.');
  }
  rulerViewDidRemoveMarker(ruler: NSRulerView, marker: NSRulerMarker): void {
    throw new Error('Method not implemented.');
  }
  rulerViewShouldAddMarker(ruler: NSRulerView, marker: NSRulerMarker): boolean {
    throw new Error('Method not implemented.');
  }
  rulerViewWillAddMarkerAtLocation(
    ruler: NSRulerView,
    marker: NSRulerMarker,
    location: number
  ): number {
    throw new Error('Method not implemented.');
  }
  rulerViewDidAddMarker(ruler: NSRulerView, marker: NSRulerMarker): void {
    throw new Error('Method not implemented.');
  }
  rulerViewHandleMouseDown(ruler: NSRulerView, event: NSEvent): void {
    throw new Error('Method not implemented.');
  }
  rulerViewWillSetClientView(ruler: NSRulerView, newClient: NSView): void {
    throw new Error('Method not implemented.');
  }
  rulerViewLocationForPoint(ruler: NSRulerView, point: CGPoint): number {
    throw new Error('Method not implemented.');
  }
  rulerViewPointForLocation(ruler: NSRulerView, point: number) {
    throw new Error('Method not implemented.');
  }
  enterFullScreenModeWithOptions(
    screen: NSScreen,
    options: NSDictionary | null
  ): boolean {
    throw new Error('Method not implemented.');
  }
  exitFullScreenModeWithOptions(options: NSDictionary | null): void {
    throw new Error('Method not implemented.');
  }
  isInFullScreenMode: boolean;
  safeAreaInsets: NSEdgeInsets;
  additionalSafeAreaInsets: NSEdgeInsets;
  safeAreaLayoutGuide: NSLayoutGuide;
  safeAreaRect: CGRect;
  layoutMarginsGuide: NSLayoutGuide;
  setAdditionalSafeAreaInsets(additionalSafeAreaInsets: NSEdgeInsets): void {
    throw new Error('Method not implemented.');
  }
  animator(): this {
    throw new Error('Method not implemented.');
  }
  animations: NSDictionary;
  animationForKey(key: string) {
    throw new Error('Method not implemented.');
  }
  setAnimations(animations: NSDictionary): void {
    throw new Error('Method not implemented.');
  }
  identifier: string;
  setIdentifier(identifier: string | null): void {
    throw new Error('Method not implemented.');
  }
  draggingEntered(sender: NativeObject): number {
    throw new Error('Method not implemented.');
  }
  draggingUpdated(sender: NativeObject): number {
    throw new Error('Method not implemented.');
  }
  draggingExited(sender: NativeObject | null): void {
    throw new Error('Method not implemented.');
  }
  prepareForDragOperation(sender: NativeObject): boolean {
    throw new Error('Method not implemented.');
  }
  performDragOperation(sender: NativeObject): boolean {
    throw new Error('Method not implemented.');
  }
  concludeDragOperation(sender: NativeObject | null): void {
    throw new Error('Method not implemented.');
  }
  draggingEnded(sender: NativeObject): void {
    throw new Error('Method not implemented.');
  }
  wantsPeriodicDraggingUpdates(): boolean {
    throw new Error('Method not implemented.');
  }
  updateDraggingItemsForDrag(sender: NativeObject | null): void {
    throw new Error('Method not implemented.');
  }
  isEqual(object: any): boolean {
    throw new Error('Method not implemented.');
  }
  hash: number;
  superclass: any;
  class() {
    throw new Error('Method not implemented.');
  }
  self(): this {
    throw new Error('Method not implemented.');
  }
  performSelector(aSelector: string) {
    throw new Error('Method not implemented.');
  }
  performSelectorWithObject(aSelector: string, object: any) {
    throw new Error('Method not implemented.');
  }
  performSelectorWithObjectWithObject(
    aSelector: string,
    object1: any,
    object2: any
  ) {
    throw new Error('Method not implemented.');
  }
  isProxy: boolean;
  isKindOfClass(aClass: any): boolean {
    throw new Error('Method not implemented.');
  }
  isMemberOfClass(aClass: any): boolean {
    throw new Error('Method not implemented.');
  }
  conformsToProtocol(aProtocol: interop.Pointer): boolean {
    throw new Error('Method not implemented.');
  }
  respondsToSelector(aSelector: string): boolean {
    throw new Error('Method not implemented.');
  }
  retain(): this {
    throw new Error('Method not implemented.');
  }
  release(): void {
    throw new Error('Method not implemented.');
  }
  autorelease(): this {
    throw new Error('Method not implemented.');
  }
  retainCount(): number {
    throw new Error('Method not implemented.');
  }
  zone: interop.Pointer;
  description: string;
  debugDescription: string;
  appearance: NSAppearance;
  effectiveAppearance: NSAppearance;
  setAppearance(appearance: NSAppearance): void {
    throw new Error('Method not implemented.');
  }
  accessibilityFrame: CGRect;
  accessibilityParent: any;
  isAccessibilityFocused: boolean;
  accessibilityIdentifier: string;
  isAccessibilityElement: boolean;
  accessibilityActivationPoint: CGPoint;
  accessibilityTopLevelUIElement: any;
  accessibilityURL: NSURL;
  accessibilityValue: any;
  accessibilityValueDescription: string;
  accessibilityVisibleChildren: NSArray;
  accessibilitySubrole: string;
  accessibilityTitle: string;
  accessibilityTitleUIElement: any;
  accessibilityNextContents: NSArray;
  accessibilityOrientation: number;
  accessibilityOverflowButton: any;
  accessibilityPlaceholderValue: string;
  accessibilityPreviousContents: NSArray;
  accessibilityRole: string;
  accessibilityRoleDescription: string;
  accessibilitySearchButton: any;
  accessibilitySearchMenu: any;
  isAccessibilitySelected: boolean;
  accessibilitySelectedChildren: NSArray;
  accessibilityServesAsTitleForUIElements: NSArray;
  accessibilityShownMenu: any;
  accessibilityMinValue: any;
  accessibilityMaxValue: any;
  accessibilityLinkedUIElements: NSArray;
  accessibilityWindow: any;
  accessibilityHelp: string;
  accessibilityFilename: string;
  isAccessibilityExpanded: boolean;
  isAccessibilityEdited: boolean;
  isAccessibilityEnabled: boolean;
  accessibilityChildren: NSArray;
  accessibilityChildrenInNavigationOrder: NSArray;
  accessibilityClearButton: any;
  accessibilityCancelButton: any;
  isAccessibilityProtectedContent: boolean;
  accessibilityContents: NSArray;
  accessibilityLabel: string;
  isAccessibilityAlternateUIVisible: boolean;
  accessibilitySharedFocusElements: NSArray;
  isAccessibilityRequired: boolean;
  accessibilityCustomRotors: NSArray;
  accessibilityUserInputLabels: NSArray;
  accessibilityAttributedUserInputLabels: NSArray;
  accessibilityApplicationFocusedUIElement: any;
  accessibilityMainWindow: any;
  isAccessibilityHidden: boolean;
  isAccessibilityFrontmost: boolean;
  accessibilityFocusedWindow: any;
  accessibilityWindows: NSArray;
  accessibilityExtrasMenuBar: any;
  accessibilityMenuBar: any;
  accessibilityColumnTitles: NSArray;
  isAccessibilityOrderedByRow: boolean;
  accessibilityHorizontalUnits: number;
  accessibilityVerticalUnits: number;
  accessibilityHorizontalUnitDescription: string;
  accessibilityVerticalUnitDescription: string;
  accessibilityLayoutPointForScreenPoint(point: CGPoint) {
    throw new Error('Method not implemented.');
  }
  accessibilityLayoutSizeForScreenSize(size: CGSize) {
    throw new Error('Method not implemented.');
  }
  accessibilityScreenPointForLayoutPoint(point: CGPoint) {
    throw new Error('Method not implemented.');
  }
  accessibilityScreenSizeForLayoutSize(size: CGSize) {
    throw new Error('Method not implemented.');
  }
  accessibilityHandles: NSArray;
  accessibilityWarningValue: any;
  accessibilityCriticalValue: any;
  isAccessibilityDisclosed: boolean;
  accessibilityDisclosedByRow: any;
  accessibilityDisclosedRows: any;
  accessibilityDisclosureLevel: number;
  accessibilityMarkerUIElements: NSArray;
  accessibilityMarkerValues: any;
  accessibilityMarkerGroupUIElement: any;
  accessibilityUnits: number;
  accessibilityUnitDescription: string;
  accessibilityRulerMarkerType: number;
  accessibilityMarkerTypeDescription: string;
  accessibilityHorizontalScrollBar: any;
  accessibilityVerticalScrollBar: any;
  accessibilityAllowedValues: NSArray;
  accessibilityLabelUIElements: NSArray;
  accessibilityLabelValue: number;
  accessibilitySplitters: NSArray;
  accessibilityDecrementButton: any;
  accessibilityIncrementButton: any;
  accessibilityTabs: NSArray;
  accessibilityHeader: any;
  accessibilityColumnCount: number;
  accessibilityRowCount: number;
  accessibilityIndex: number;
  accessibilityColumns: NSArray;
  accessibilityRows: NSArray;
  accessibilityVisibleRows: NSArray;
  accessibilitySelectedRows: NSArray;
  accessibilityVisibleColumns: NSArray;
  accessibilitySelectedColumns: NSArray;
  accessibilitySortDirection: number;
  accessibilityRowHeaderUIElements: NSArray;
  accessibilitySelectedCells: NSArray;
  accessibilityVisibleCells: NSArray;
  accessibilityColumnHeaderUIElements: NSArray;
  accessibilityCellForColumnRow(column: number, row: number) {
    throw new Error('Method not implemented.');
  }
  accessibilityRowIndexRange: _NSRange;
  accessibilityColumnIndexRange: _NSRange;
  accessibilityInsertionPointLineNumber: number;
  accessibilitySharedCharacterRange: _NSRange;
  accessibilitySharedTextUIElements: NSArray;
  accessibilityVisibleCharacterRange: _NSRange;
  accessibilityNumberOfCharacters: number;
  accessibilitySelectedText: string;
  accessibilitySelectedTextRange: _NSRange;
  accessibilitySelectedTextRanges: NSArray;
  accessibilityAttributedStringForRange(range: _NSRange): NSAttributedString {
    throw new Error('Method not implemented.');
  }
  accessibilityRangeForLine(line: number): _NSRange {
    throw new Error('Method not implemented.');
  }
  accessibilityStringForRange(range: _NSRange): string {
    throw new Error('Method not implemented.');
  }
  accessibilityRangeForPosition(point: CGPoint): _NSRange {
    throw new Error('Method not implemented.');
  }
  accessibilityRangeForIndex(index: number): _NSRange {
    throw new Error('Method not implemented.');
  }
  accessibilityFrameForRange(range: _NSRange) {
    throw new Error('Method not implemented.');
  }
  accessibilityRTFForRange(range: _NSRange): NSData {
    throw new Error('Method not implemented.');
  }
  accessibilityStyleRangeForIndex(index: number): _NSRange {
    throw new Error('Method not implemented.');
  }
  accessibilityLineForIndex(index: number): number {
    throw new Error('Method not implemented.');
  }
  accessibilityToolbarButton: any;
  isAccessibilityModal: boolean;
  accessibilityProxy: any;
  isAccessibilityMain: boolean;
  accessibilityFullScreenButton: any;
  accessibilityGrowArea: any;
  accessibilityDocument: string;
  accessibilityDefaultButton: any;
  accessibilityCloseButton: any;
  accessibilityZoomButton: any;
  accessibilityMinimizeButton: any;
  isAccessibilityMinimized: boolean;
  accessibilityCustomActions: NSArray;
  accessibilityPerformCancel(): boolean {
    throw new Error('Method not implemented.');
  }
  accessibilityPerformConfirm(): boolean {
    throw new Error('Method not implemented.');
  }
  accessibilityPerformDecrement(): boolean {
    throw new Error('Method not implemented.');
  }
  accessibilityPerformDelete(): boolean {
    throw new Error('Method not implemented.');
  }
  accessibilityPerformIncrement(): boolean {
    throw new Error('Method not implemented.');
  }
  accessibilityPerformPick(): boolean {
    throw new Error('Method not implemented.');
  }
  accessibilityPerformPress(): boolean {
    throw new Error('Method not implemented.');
  }
  accessibilityPerformRaise(): boolean {
    throw new Error('Method not implemented.');
  }
  accessibilityPerformShowAlternateUI(): boolean {
    throw new Error('Method not implemented.');
  }
  accessibilityPerformShowDefaultUI(): boolean {
    throw new Error('Method not implemented.');
  }
  accessibilityPerformShowMenu(): boolean {
    throw new Error('Method not implemented.');
  }
  isAccessibilitySelectorAllowed(selector: string): boolean {
    throw new Error('Method not implemented.');
  }
  setAccessibilityElement(accessibilityElement: boolean): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityFrame(accessibilityFrame: CGRect): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityFocused(accessibilityFocused: boolean): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityActivationPoint(accessibilityActivationPoint: CGPoint): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityTopLevelUIElement(accessibilityTopLevelUIElement: any): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityURL(accessibilityURL: NSURL): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityValue(accessibilityValue: any): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityValueDescription(
    accessibilityValueDescription: string
  ): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityVisibleChildren(accessibilityVisibleChildren: NSArray): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilitySubrole(accessibilitySubrole: string): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityTitle(accessibilityTitle: string): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityTitleUIElement(accessibilityTitleUIElement: any): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityNextContents(accessibilityNextContents: NSArray): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityOrientation(accessibilityOrientation: number): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityOverflowButton(accessibilityOverflowButton: any): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityParent(accessibilityParent: any): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityPlaceholderValue(
    accessibilityPlaceholderValue: string
  ): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityPreviousContents(
    accessibilityPreviousContents: NSArray
  ): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityRole(accessibilityRole: string): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityRoleDescription(accessibilityRoleDescription: string): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilitySearchButton(accessibilitySearchButton: any): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilitySearchMenu(accessibilitySearchMenu: any): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilitySelected(accessibilitySelected: boolean): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilitySelectedChildren(
    accessibilitySelectedChildren: NSArray
  ): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityServesAsTitleForUIElements(
    accessibilityServesAsTitleForUIElements: NSArray
  ): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityShownMenu(accessibilityShownMenu: any): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityMinValue(accessibilityMinValue: any): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityMaxValue(accessibilityMaxValue: any): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityLinkedUIElements(
    accessibilityLinkedUIElements: NSArray
  ): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityWindow(accessibilityWindow: any): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityIdentifier(accessibilityIdentifier: string): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityHelp(accessibilityHelp: string): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityFilename(accessibilityFilename: string): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityExpanded(accessibilityExpanded: boolean): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityEdited(accessibilityEdited: boolean): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityEnabled(accessibilityEnabled: boolean): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityChildren(accessibilityChildren: NSArray): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityChildrenInNavigationOrder(
    accessibilityChildrenInNavigationOrder: NSArray
  ): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityClearButton(accessibilityClearButton: any): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityCancelButton(accessibilityCancelButton: any): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityProtectedContent(
    accessibilityProtectedContent: boolean
  ): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityContents(accessibilityContents: NSArray): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityLabel(accessibilityLabel: string): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityAlternateUIVisible(
    accessibilityAlternateUIVisible: boolean
  ): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilitySharedFocusElements(
    accessibilitySharedFocusElements: NSArray
  ): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityRequired(accessibilityRequired: boolean): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityCustomRotors(accessibilityCustomRotors: NSArray): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityUserInputLabels(accessibilityUserInputLabels: NSArray): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityAttributedUserInputLabels(
    accessibilityAttributedUserInputLabels: NSArray
  ): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityApplicationFocusedUIElement(
    accessibilityApplicationFocusedUIElement: any
  ): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityMainWindow(accessibilityMainWindow: any): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityHidden(accessibilityHidden: boolean): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityFrontmost(accessibilityFrontmost: boolean): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityFocusedWindow(accessibilityFocusedWindow: any): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityWindows(accessibilityWindows: NSArray): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityExtrasMenuBar(accessibilityExtrasMenuBar: any): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityMenuBar(accessibilityMenuBar: any): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityColumnTitles(accessibilityColumnTitles: NSArray): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityOrderedByRow(accessibilityOrderedByRow: boolean): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityHorizontalUnits(accessibilityHorizontalUnits: number): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityVerticalUnits(accessibilityVerticalUnits: number): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityHorizontalUnitDescription(
    accessibilityHorizontalUnitDescription: string
  ): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityVerticalUnitDescription(
    accessibilityVerticalUnitDescription: string
  ): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityHandles(accessibilityHandles: NSArray): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityWarningValue(accessibilityWarningValue: any): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityCriticalValue(accessibilityCriticalValue: any): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityDisclosed(accessibilityDisclosed: boolean): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityDisclosedByRow(accessibilityDisclosedByRow: any): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityDisclosedRows(accessibilityDisclosedRows: any): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityDisclosureLevel(accessibilityDisclosureLevel: number): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityMarkerUIElements(
    accessibilityMarkerUIElements: NSArray
  ): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityMarkerValues(accessibilityMarkerValues: any): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityMarkerGroupUIElement(
    accessibilityMarkerGroupUIElement: any
  ): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityUnits(accessibilityUnits: number): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityUnitDescription(accessibilityUnitDescription: string): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityRulerMarkerType(accessibilityRulerMarkerType: number): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityMarkerTypeDescription(
    accessibilityMarkerTypeDescription: string
  ): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityHorizontalScrollBar(
    accessibilityHorizontalScrollBar: any
  ): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityVerticalScrollBar(accessibilityVerticalScrollBar: any): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityAllowedValues(accessibilityAllowedValues: NSArray): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityLabelUIElements(accessibilityLabelUIElements: NSArray): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityLabelValue(accessibilityLabelValue: number): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilitySplitters(accessibilitySplitters: NSArray): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityDecrementButton(accessibilityDecrementButton: any): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityIncrementButton(accessibilityIncrementButton: any): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityTabs(accessibilityTabs: NSArray): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityHeader(accessibilityHeader: any): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityColumnCount(accessibilityColumnCount: number): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityRowCount(accessibilityRowCount: number): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityIndex(accessibilityIndex: number): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityColumns(accessibilityColumns: NSArray): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityRows(accessibilityRows: NSArray): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityVisibleRows(accessibilityVisibleRows: NSArray): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilitySelectedRows(accessibilitySelectedRows: NSArray): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityVisibleColumns(accessibilityVisibleColumns: NSArray): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilitySelectedColumns(accessibilitySelectedColumns: NSArray): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilitySortDirection(accessibilitySortDirection: number): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityRowHeaderUIElements(
    accessibilityRowHeaderUIElements: NSArray
  ): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilitySelectedCells(accessibilitySelectedCells: NSArray): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityVisibleCells(accessibilityVisibleCells: NSArray): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityColumnHeaderUIElements(
    accessibilityColumnHeaderUIElements: NSArray
  ): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityRowIndexRange(accessibilityRowIndexRange: _NSRange): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityColumnIndexRange(
    accessibilityColumnIndexRange: _NSRange
  ): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityInsertionPointLineNumber(
    accessibilityInsertionPointLineNumber: number
  ): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilitySharedCharacterRange(
    accessibilitySharedCharacterRange: _NSRange
  ): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilitySharedTextUIElements(
    accessibilitySharedTextUIElements: NSArray
  ): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityVisibleCharacterRange(
    accessibilityVisibleCharacterRange: _NSRange
  ): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityNumberOfCharacters(
    accessibilityNumberOfCharacters: number
  ): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilitySelectedText(accessibilitySelectedText: string): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilitySelectedTextRange(
    accessibilitySelectedTextRange: _NSRange
  ): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilitySelectedTextRanges(
    accessibilitySelectedTextRanges: NSArray
  ): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityToolbarButton(accessibilityToolbarButton: any): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityModal(accessibilityModal: boolean): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityProxy(accessibilityProxy: any): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityMain(accessibilityMain: boolean): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityFullScreenButton(accessibilityFullScreenButton: any): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityGrowArea(accessibilityGrowArea: any): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityDocument(accessibilityDocument: string): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityDefaultButton(accessibilityDefaultButton: any): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityCloseButton(accessibilityCloseButton: any): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityZoomButton(accessibilityZoomButton: any): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityMinimizeButton(accessibilityMinimizeButton: any): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityMinimized(accessibilityMinimized: boolean): void {
    throw new Error('Method not implemented.');
  }
  setAccessibilityCustomActions(accessibilityCustomActions: NSArray): void {
    throw new Error('Method not implemented.');
  }
  init(): this {
    throw new Error('Method not implemented.');
  }
  nextResponder: NSResponder;
  tryToPerformWith(action: string, object: any): boolean {
    throw new Error('Method not implemented.');
  }
  validRequestorForSendTypeReturnType(
    sendType: string | null,
    returnType: string | null
  ) {
    throw new Error('Method not implemented.');
  }
  mouseDown(event: NSEvent): void {
    throw new Error('Method not implemented.');
  }
  rightMouseDown(event: NSEvent): void {
    throw new Error('Method not implemented.');
  }
  otherMouseDown(event: NSEvent): void {
    throw new Error('Method not implemented.');
  }
  mouseUp(event: NSEvent): void {
    throw new Error('Method not implemented.');
  }
  rightMouseUp(event: NSEvent): void {
    throw new Error('Method not implemented.');
  }
  otherMouseUp(event: NSEvent): void {
    throw new Error('Method not implemented.');
  }
  mouseMoved(event: NSEvent): void {
    throw new Error('Method not implemented.');
  }
  mouseDragged(event: NSEvent): void {
    throw new Error('Method not implemented.');
  }
  scrollWheel(event: NSEvent): void {
    throw new Error('Method not implemented.');
  }
  rightMouseDragged(event: NSEvent): void {
    throw new Error('Method not implemented.');
  }
  otherMouseDragged(event: NSEvent): void {
    throw new Error('Method not implemented.');
  }
  mouseEntered(event: NSEvent): void {
    throw new Error('Method not implemented.');
  }
  mouseExited(event: NSEvent): void {
    throw new Error('Method not implemented.');
  }
  keyDown(event: NSEvent): void {
    throw new Error('Method not implemented.');
  }
  keyUp(event: NSEvent): void {
    throw new Error('Method not implemented.');
  }
  flagsChanged(event: NSEvent): void {
    throw new Error('Method not implemented.');
  }
  tabletPoint(event: NSEvent): void {
    throw new Error('Method not implemented.');
  }
  tabletProximity(event: NSEvent): void {
    throw new Error('Method not implemented.');
  }
  cursorUpdate(event: NSEvent): void {
    throw new Error('Method not implemented.');
  }
  magnifyWithEvent(event: NSEvent): void {
    throw new Error('Method not implemented.');
  }
  rotateWithEvent(event: NSEvent): void {
    throw new Error('Method not implemented.');
  }
  swipeWithEvent(event: NSEvent): void {
    throw new Error('Method not implemented.');
  }
  beginGestureWithEvent(event: NSEvent): void {
    throw new Error('Method not implemented.');
  }
  endGestureWithEvent(event: NSEvent): void {
    throw new Error('Method not implemented.');
  }
  smartMagnifyWithEvent(event: NSEvent): void {
    throw new Error('Method not implemented.');
  }
  changeModeWithEvent(event: NSEvent): void {
    throw new Error('Method not implemented.');
  }
  touchesBeganWithEvent(event: NSEvent): void {
    throw new Error('Method not implemented.');
  }
  touchesMovedWithEvent(event: NSEvent): void {
    throw new Error('Method not implemented.');
  }
  touchesEndedWithEvent(event: NSEvent): void {
    throw new Error('Method not implemented.');
  }
  touchesCancelledWithEvent(event: NSEvent): void {
    throw new Error('Method not implemented.');
  }
  quickLookWithEvent(event: NSEvent): void {
    throw new Error('Method not implemented.');
  }
  pressureChangeWithEvent(event: NSEvent): void {
    throw new Error('Method not implemented.');
  }
  noResponderFor(eventSelector: string): void {
    throw new Error('Method not implemented.');
  }
  acceptsFirstResponder: boolean;
  becomeFirstResponder(): boolean {
    throw new Error('Method not implemented.');
  }
  resignFirstResponder(): boolean {
    throw new Error('Method not implemented.');
  }
  interpretKeyEvents(eventArray: NSArray): void {
    throw new Error('Method not implemented.');
  }
  flushBufferedKeyEvents(): void {
    throw new Error('Method not implemented.');
  }
  menu: NSMenu;
  showContextHelp(sender: any): void {
    throw new Error('Method not implemented.');
  }
  helpRequested(eventPtr: NSEvent): void {
    throw new Error('Method not implemented.');
  }
  shouldBeTreatedAsInkEvent(event: NSEvent): boolean {
    throw new Error('Method not implemented.');
  }
  wantsScrollEventsForSwipeTrackingOnAxis(axis: number): boolean {
    throw new Error('Method not implemented.');
  }
  wantsForwardedScrollEventsForAxis(axis: number): boolean {
    throw new Error('Method not implemented.');
  }
  supplementalTargetForActionSender(action: string, sender: any) {
    throw new Error('Method not implemented.');
  }
  setNextResponder(nextResponder: NSResponder | null): void {
    throw new Error('Method not implemented.');
  }
  setMenu(menu: NSMenu | null): void {
    throw new Error('Method not implemented.');
  }
  touchBar: NSTouchBar;
  makeTouchBar(): NSTouchBar {
    throw new Error('Method not implemented.');
  }
  setTouchBar(touchBar: NSTouchBar): void {
    throw new Error('Method not implemented.');
  }
  newWindowForTab(sender: any): void {
    throw new Error('Method not implemented.');
  }
  undoManager: NSUndoManager;
  performTextFinderAction(sender: any): void {
    throw new Error('Method not implemented.');
  }
  validateProposedFirstResponderForEvent(
    responder: NSResponder,
    event: NSEvent | null
  ): boolean {
    throw new Error('Method not implemented.');
  }
  presentErrorModalForWindowDelegateDidPresentSelectorContextInfo(
    error: NSError,
    window: NSWindow,
    delegate: any,
    didPresentSelector: string | null,
    contextInfo: interop.Pointer
  ): void {
    throw new Error('Method not implemented.');
  }
  presentError(error: NSError): boolean {
    throw new Error('Method not implemented.');
  }
  willPresentError(error: NSError): NSError {
    throw new Error('Method not implemented.');
  }
  interfaceStyle(): number {
    throw new Error('Method not implemented.');
  }
  setInterfaceStyle(interfaceStyle: number): void {
    throw new Error('Method not implemented.');
  }
  encodeWithCoder(coder: NSCoder): void {
    throw new Error('Method not implemented.');
  }
  dealloc(): void {
    throw new Error('Method not implemented.');
  }
  finalize(): void {
    throw new Error('Method not implemented.');
  }
  copy() {
    throw new Error('Method not implemented.');
  }
  mutableCopy() {
    throw new Error('Method not implemented.');
  }
  methodForSelector(aSelector: string): interop.Pointer {
    throw new Error('Method not implemented.');
  }
  doesNotRecognizeSelector(aSelector: string): void {
    throw new Error('Method not implemented.');
  }
  forwardingTargetForSelector(aSelector: string) {
    throw new Error('Method not implemented.');
  }
  forwardInvocation(anInvocation: NSInvocation): void {
    throw new Error('Method not implemented.');
  }
  methodSignatureForSelector(aSelector: string): NSMethodSignature {
    throw new Error('Method not implemented.');
  }
  invokeUndefinedMethodFromWebScriptWithArguments(
    name: string,
    arguments$: NSArray
  ) {
    throw new Error('Method not implemented.');
  }
  invokeDefaultMethodWithArguments(arguments$: NSArray) {
    throw new Error('Method not implemented.');
  }
  finalizeForWebScript(): void {
    throw new Error('Method not implemented.');
  }
  applicationDelegateHandlesKey(sender: NSApplication, key: string): boolean {
    throw new Error('Method not implemented.');
  }
  panelIsValidFilename(sender: any, filename: string): boolean {
    throw new Error('Method not implemented.');
  }
  panelDirectoryDidChange(sender: any, path: string): void {
    throw new Error('Method not implemented.');
  }
  panelCompareFilenameWithCaseSensitive(
    sender: any,
    name1: string,
    name2: string,
    caseSensitive: boolean
  ): number {
    throw new Error('Method not implemented.');
  }
  panelShouldShowFilename(sender: any, filename: string): boolean {
    throw new Error('Method not implemented.');
  }
  textStorageWillProcessEditing(notification: NSNotification): void {
    throw new Error('Method not implemented.');
  }
  textStorageDidProcessEditing(notification: NSNotification): void {
    throw new Error('Method not implemented.');
  }
  fontManagerWillIncludeFont(sender: any, fontName: string): boolean {
    throw new Error('Method not implemented.');
  }
  objectDidBeginEditing(editor: NativeObject): void {
    throw new Error('Method not implemented.');
  }
  objectDidEndEditing(editor: NativeObject): void {
    throw new Error('Method not implemented.');
  }
  viewStringForToolTipPointUserData(
    view: NSView,
    tag: number,
    point: CGPoint,
    data: interop.Pointer
  ): string {
    throw new Error('Method not implemented.');
  }
  layerShouldInheritContentsScaleFromWindow(
    layer: CALayer,
    newScale: number,
    window: NSWindow
  ): boolean {
    throw new Error('Method not implemented.');
  }
  webPlugInInitialize(): void {
    throw new Error('Method not implemented.');
  }
  webPlugInStart(): void {
    throw new Error('Method not implemented.');
  }
  webPlugInStop(): void {
    throw new Error('Method not implemented.');
  }
  webPlugInDestroy(): void {
    throw new Error('Method not implemented.');
  }
  webPlugInSetIsSelected(isSelected: boolean): void {
    throw new Error('Method not implemented.');
  }
  objectForWebScript: any;
  webPlugInMainResourceDidReceiveResponse(response: NSURLResponse): void {
    throw new Error('Method not implemented.');
  }
  webPlugInMainResourceDidReceiveData(data: NSData): void {
    throw new Error('Method not implemented.');
  }
  webPlugInMainResourceDidFailWithError(error: NSError): void {
    throw new Error('Method not implemented.');
  }
  webPlugInMainResourceDidFinishLoading(): void {
    throw new Error('Method not implemented.');
  }
  validateToolbarItem(item: NSToolbarItem): boolean {
    throw new Error('Method not implemented.');
  }
  accessibilitySetOverrideValueForAttribute(
    value: any,
    attribute: string
  ): boolean {
    throw new Error('Method not implemented.');
  }
  attemptRecoveryFromErrorOptionIndexDelegateDidRecoverSelectorContextInfo(
    error: NSError,
    recoveryOptionIndex: number,
    delegate: any,
    didRecoverSelector: string | null,
    contextInfo: interop.Pointer
  ): void {
    throw new Error('Method not implemented.');
  }
  attemptRecoveryFromErrorOptionIndex(
    error: NSError,
    recoveryOptionIndex: number
  ): boolean {
    throw new Error('Method not implemented.');
  }
  valueAtIndexInPropertyWithKey(index: number, key: string) {
    throw new Error('Method not implemented.');
  }
  valueWithNameInPropertyWithKey(name: string, key: string) {
    throw new Error('Method not implemented.');
  }
  valueWithUniqueIDInPropertyWithKey(uniqueID: any, key: string) {
    throw new Error('Method not implemented.');
  }
  insertValueAtIndexInPropertyWithKey(
    value: any,
    index: number,
    key: string
  ): void {
    throw new Error('Method not implemented.');
  }
  removeValueAtIndexFromPropertyWithKey(index: number, key: string): void {
    throw new Error('Method not implemented.');
  }
  replaceValueAtIndexInPropertyWithKeyWithValue(
    index: number,
    key: string,
    value: any
  ): void {
    throw new Error('Method not implemented.');
  }
  insertValueInPropertyWithKey(value: any, key: string): void {
    throw new Error('Method not implemented.');
  }
  coerceValueForKey(value: any, key: string) {
    throw new Error('Method not implemented.');
  }
  changeColor(sender: any): void {
    throw new Error('Method not implemented.');
  }
  webPlugInContainerLoadRequestInFrame(
    request: NSURLRequest,
    target: string
  ): void {
    throw new Error('Method not implemented.');
  }
  webPlugInContainerShowStatus(message: string): void {
    throw new Error('Method not implemented.');
  }
  webPlugInContainerSelectionColor: NSColor;
  webFrame: WebFrame;
  validModesForFontPanel(fontPanel: NSFontPanel): number {
    throw new Error('Method not implemented.');
  }
  observeValueForKeyPathOfObjectChangeContext(
    keyPath: string | null,
    object: any,
    change: NSDictionary | null,
    context: interop.Pointer
  ): void {
    throw new Error('Method not implemented.');
  }
  tableViewWriteRowsToPasteboard(
    tableView: NSTableView,
    rows: NSArray,
    pboard: NSPasteboard
  ): boolean {
    throw new Error('Method not implemented.');
  }
  discardEditing(): void {
    throw new Error('Method not implemented.');
  }
  commitEditing(): boolean {
    throw new Error('Method not implemented.');
  }
  commitEditingWithDelegateDidCommitSelectorContextInfo(
    delegate: any,
    didCommitSelector: string | null,
    contextInfo: interop.Pointer
  ): void {
    throw new Error('Method not implemented.');
  }
  commitEditingAndReturnError(error: interop.Pointer): boolean {
    throw new Error('Method not implemented.');
  }
  provideImageDataBytesPerRowOriginSizeUserInfo(
    data: interop.Pointer,
    rowbytes: number,
    x: number,
    y: number,
    width: number,
    height: number,
    info: any
  ): void {
    throw new Error('Method not implemented.');
  }
  scriptingIsEqualTo(object: any): boolean {
    throw new Error('Method not implemented.');
  }
  scriptingIsLessThanOrEqualTo(object: any): boolean {
    throw new Error('Method not implemented.');
  }
  scriptingIsLessThan(object: any): boolean {
    throw new Error('Method not implemented.');
  }
  scriptingIsGreaterThanOrEqualTo(object: any): boolean {
    throw new Error('Method not implemented.');
  }
  scriptingIsGreaterThan(object: any): boolean {
    throw new Error('Method not implemented.');
  }
  scriptingBeginsWith(object: any): boolean {
    throw new Error('Method not implemented.');
  }
  scriptingEndsWith(object: any): boolean {
    throw new Error('Method not implemented.');
  }
  scriptingContains(object: any): boolean {
    throw new Error('Method not implemented.');
  }
  validateMenuItem(menuItem: NSMenuItem): boolean {
    throw new Error('Method not implemented.');
  }
  awakeFromNib(): void {
    throw new Error('Method not implemented.');
  }
  prepareForInterfaceBuilder(): void {
    throw new Error('Method not implemented.');
  }
  pasteboardProvideDataForType(sender: NSPasteboard, type: string): void {
    throw new Error('Method not implemented.');
  }
  pasteboardChangedOwner(sender: NSPasteboard): void {
    throw new Error('Method not implemented.');
  }
  exposedBindings: NSArray;
  valueClassForBinding(binding: string) {
    throw new Error('Method not implemented.');
  }
  bindToObjectWithKeyPathOptions(
    binding: string,
    observable: any,
    keyPath: string,
    options: NSDictionary | null
  ): void {
    throw new Error('Method not implemented.');
  }
  unbind(binding: string): void {
    throw new Error('Method not implemented.');
  }
  infoForBinding(binding: string): NSDictionary {
    throw new Error('Method not implemented.');
  }
  optionDescriptionsForBinding(binding: string): NSArray {
    throw new Error('Method not implemented.');
  }
  classForCoder: any;
  replacementObjectForCoder(coder: NSCoder) {
    throw new Error('Method not implemented.');
  }
  awakeAfterUsingCoder(coder: NSCoder) {
    throw new Error('Method not implemented.');
  }
  performSelectorWithObjectAfterDelayInModes(
    aSelector: string,
    anArgument: any,
    delay: number,
    modes: NSArray
  ): void {
    throw new Error('Method not implemented.');
  }
  performSelectorWithObjectAfterDelay(
    aSelector: string,
    anArgument: any,
    delay: number
  ): void {
    throw new Error('Method not implemented.');
  }
  classCode: number;
  classForArchiver: any;
  replacementObjectForArchiver(archiver: NSArchiver) {
    throw new Error('Method not implemented.');
  }
  performSelectorOnMainThreadWithObjectWaitUntilDoneModes(
    aSelector: string,
    arg: any,
    wait: boolean,
    array: NSArray | null
  ): void {
    throw new Error('Method not implemented.');
  }
  performSelectorOnMainThreadWithObjectWaitUntilDone(
    aSelector: string,
    arg: any,
    wait: boolean
  ): void {
    throw new Error('Method not implemented.');
  }
  performSelectorOnThreadWithObjectWaitUntilDoneModes(
    aSelector: string,
    thr: NSThread,
    arg: any,
    wait: boolean,
    array: NSArray | null
  ): void {
    throw new Error('Method not implemented.');
  }
  performSelectorOnThreadWithObjectWaitUntilDone(
    aSelector: string,
    thr: NSThread,
    arg: any,
    wait: boolean
  ): void {
    throw new Error('Method not implemented.');
  }
  performSelectorInBackgroundWithObject(aSelector: string, arg: any): void {
    throw new Error('Method not implemented.');
  }
  objectSpecifier: NSScriptObjectSpecifier;
  indicesOfObjectsByEvaluatingObjectSpecifier(
    specifier: NSScriptObjectSpecifier
  ): NSArray {
    throw new Error('Method not implemented.');
  }
  controlTextDidBeginEditing(obj: NSNotification): void {
    throw new Error('Method not implemented.');
  }
  controlTextDidEndEditing(obj: NSNotification): void {
    throw new Error('Method not implemented.');
  }
  controlTextDidChange(obj: NSNotification): void {
    throw new Error('Method not implemented.');
  }
  classForPortCoder: any;
  replacementObjectForPortCoder(coder: NSPortCoder) {
    throw new Error('Method not implemented.');
  }
  isEqualTo(object: any): boolean {
    throw new Error('Method not implemented.');
  }
  isLessThanOrEqualTo(object: any): boolean {
    throw new Error('Method not implemented.');
  }
  isLessThan(object: any): boolean {
    throw new Error('Method not implemented.');
  }
  isGreaterThanOrEqualTo(object: any): boolean {
    throw new Error('Method not implemented.');
  }
  isGreaterThan(object: any): boolean {
    throw new Error('Method not implemented.');
  }
  isNotEqualTo(object: any): boolean {
    throw new Error('Method not implemented.');
  }
  doesContain(object: any): boolean {
    throw new Error('Method not implemented.');
  }
  isLike(object: string): boolean {
    throw new Error('Method not implemented.');
  }
  isCaseInsensitiveLike(object: string): boolean {
    throw new Error('Method not implemented.');
  }
  changeFont(sender: any): void {
    throw new Error('Method not implemented.');
  }
  classForKeyedArchiver: any;
  replacementObjectForKeyedArchiver(archiver: NSKeyedArchiver) {
    throw new Error('Method not implemented.');
  }
  namesOfPromisedFilesDroppedAtDestination(dropDestination: NSURL): NSArray {
    throw new Error('Method not implemented.');
  }
  draggingSourceOperationMaskForLocal(flag: boolean): number {
    throw new Error('Method not implemented.');
  }
  draggedImageBeganAt(image: NSImage, screenPoint: CGPoint): void {
    throw new Error('Method not implemented.');
  }
  draggedImageEndedAtOperation(
    image: NSImage,
    screenPoint: CGPoint,
    operation: number
  ): void {
    throw new Error('Method not implemented.');
  }
  draggedImageMovedTo(image: NSImage, screenPoint: CGPoint): void {
    throw new Error('Method not implemented.');
  }
  ignoreModifierKeysWhileDragging(): boolean {
    throw new Error('Method not implemented.');
  }
  draggedImageEndedAtDeposited(
    image: NSImage,
    screenPoint: CGPoint,
    flag: boolean
  ): void {
    throw new Error('Method not implemented.');
  }
  classDescription: NSClassDescription;
  attributeKeys: NSArray;
  toOneRelationshipKeys: NSArray;
  toManyRelationshipKeys: NSArray;
  inverseForRelationshipKey(relationshipKey: string): string {
    throw new Error('Method not implemented.');
  }
  willChangeValueForKey(key: string): void {
    throw new Error('Method not implemented.');
  }
  didChangeValueForKey(key: string): void {
    throw new Error('Method not implemented.');
  }
  willChangeValuesAtIndexesForKey(
    changeKind: number,
    indexes: NSIndexSet,
    key: string
  ): void {
    throw new Error('Method not implemented.');
  }
  didChangeValuesAtIndexesForKey(
    changeKind: number,
    indexes: NSIndexSet,
    key: string
  ): void {
    throw new Error('Method not implemented.');
  }
  willChangeValueForKeyWithSetMutationUsingObjects(
    key: string,
    mutationKind: number,
    objects: NSSet
  ): void {
    throw new Error('Method not implemented.');
  }
  didChangeValueForKeyWithSetMutationUsingObjects(
    key: string,
    mutationKind: number,
    objects: NSSet
  ): void {
    throw new Error('Method not implemented.');
  }
  URLResourceDataDidBecomeAvailable(sender: NSURL, newBytes: NSData): void {
    throw new Error('Method not implemented.');
  }
  URLResourceDidFinishLoading(sender: NSURL): void {
    throw new Error('Method not implemented.');
  }
  URLResourceDidCancelLoading(sender: NSURL): void {
    throw new Error('Method not implemented.');
  }
  URLResourceDidFailLoadingWithReason(sender: NSURL, reason: string): void {
    throw new Error('Method not implemented.');
  }
  storedValueForKey(key: string) {
    throw new Error('Method not implemented.');
  }
  takeStoredValueForKey(value: any, key: string): void {
    throw new Error('Method not implemented.');
  }
  takeValueForKey(value: any, key: string): void {
    throw new Error('Method not implemented.');
  }
  takeValueForKeyPath(value: any, keyPath: string): void {
    throw new Error('Method not implemented.');
  }
  handleQueryWithUnboundKey(key: string) {
    throw new Error('Method not implemented.');
  }
  handleTakeValueForUnboundKey(value: any, key: string): void {
    throw new Error('Method not implemented.');
  }
  unableToSetNilForKey(key: string): void {
    throw new Error('Method not implemented.');
  }
  valuesForKeys(keys: NSArray): NSDictionary {
    throw new Error('Method not implemented.');
  }
  takeValuesFromDictionary(properties: NSDictionary): void {
    throw new Error('Method not implemented.');
  }
  observationInfo: interop.Pointer;
  setObservationInfo(observationInfo: interop.Pointer): void {
    throw new Error('Method not implemented.');
  }
  fileManagerShouldProceedAfterError(
    fm: NSFileManager,
    errorInfo: NSDictionary
  ): boolean {
    throw new Error('Method not implemented.');
  }
  fileManagerWillProcessPath(fm: NSFileManager, path: string): void {
    throw new Error('Method not implemented.');
  }
  autoContentAccessingProxy: any;
  __brand__: interop.PointerObject['__brand__'];
  readonly view = NSView.new();

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
