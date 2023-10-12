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
  pressureConfiguration: NSPressureConfiguration;
  wantsBestResolutionOpenGLSurface: boolean;
  translatesAutoresizingMaskIntoConstraints: boolean;
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
  nextResponder: NSResponder;
  acceptsFirstResponder: boolean;
  menu: NSMenu;
  touchBar: NSTouchBar;
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
