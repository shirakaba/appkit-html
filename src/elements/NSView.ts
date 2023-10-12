/// <reference types="objc/types" />

import 'objc/index.js';
import { isNativeElement } from '../utils/isNativeElement.js';

export class NSViewElement extends HTMLElement {
  window: NSWindow;
  superview: NSView;
  subviews: NSArray;
  opaqueAncestor: NSView;
  isHidden: boolean;
  isHiddenOrHasHiddenAncestor: boolean;
  wantsDefaultClipping: boolean;
  postsFrameChangedNotifications: boolean;
  autoresizesSubviews: boolean;
  autoresizingMask: number;
  frame: CGRect;
  frameRotation: number;
  frameCenterRotation: number;
  boundsRotation: number;
  bounds: CGRect;
  isFlipped: boolean;
  isRotatedFromBase: boolean;
  isRotatedOrScaledFromBase: boolean;
  isOpaque: boolean;
  canDrawConcurrently: boolean;
  canDraw: boolean;
  needsDisplay: boolean;
  visibleRect: CGRect;
  tag: number;
  needsPanelToBecomeKey: boolean;
  mouseDownCanMoveWindow: boolean;
  acceptsTouchEvents: boolean;
  wantsRestingTouches: boolean;
  layerContentsRedrawPolicy: number;
  layerContentsPlacement: number;
  wantsLayer: boolean;
  layer: CALayer;
  wantsUpdateLayer: boolean;
  canDrawSubviewsIntoLayer: boolean;
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
  toolTip: string;
  inLiveResize: boolean;
  preservesContentDuringLiveResize: boolean;
  rectPreservedDuringLiveResize: CGRect;
  inputContext: NSTextInputContext;
  userInterfaceLayoutDirection: number;
  preparedContentRect: CGRect;
  allowsVibrancy: boolean;
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
  enclosingMenuItem: NSMenuItem;
  trackingAreas: NSArray;
  gestureRecognizers: NSArray;
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
  candidateListTouchBarItem: NSCandidateListTouchBarItem;
  fittingSize: CGSize;
  layoutGuides: NSArray;
  wantsExtendedDynamicRangeOpenGLSurface: boolean;
  isDrawingFindIndicator: boolean;
  needsUpdateConstraints: boolean;
  heightAdjustLimit: number;
  widthAdjustLimit: number;
  pageHeader: NSAttributedString;
  pageFooter: NSAttributedString;
  printJobTitle: string;
  isInFullScreenMode: boolean;
  safeAreaInsets: NSEdgeInsets;
  additionalSafeAreaInsets: NSEdgeInsets;
  safeAreaLayoutGuide: NSLayoutGuide;
  safeAreaRect: CGRect;
  layoutMarginsGuide: NSLayoutGuide;
  animations: NSDictionary;
  identifier: string;
  hash: number;
  superclass: any;
  isProxy: boolean;
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
  nextResponder: NSResponder;
  acceptsFirstResponder: boolean;
  menu: NSMenu;
  setNextResponder(nextResponder: NSResponder | null): void {
    throw new Error('Method not implemented.');
  }
  setMenu(menu: NSMenu | null): void {
    throw new Error('Method not implemented.');
  }
  touchBar: NSTouchBar;
  setTouchBar(touchBar: NSTouchBar): void {
    throw new Error('Method not implemented.');
  }
  undoManager: NSUndoManager;
  objectForWebScript: any;
  webPlugInContainerSelectionColor: NSColor;
  webFrame: WebFrame;
  exposedBindings: NSArray;
  classForCoder: any;
  classCode: number;
  classForArchiver: any;
  objectSpecifier: NSScriptObjectSpecifier;
  classForPortCoder: any;
  classForKeyedArchiver: any;
  classDescription: NSClassDescription;
  attributeKeys: NSArray;
  toOneRelationshipKeys: NSArray;
  toManyRelationshipKeys: NSArray;
  observationInfo: interop.Pointer;
  setObservationInfo(observationInfo: interop.Pointer): void {
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
