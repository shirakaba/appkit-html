// Manual patches to the runtime declarations (when the NSObject declarations
// from both the iOS and macOS SDKs are imported, we end up with the
// intersection, so iOS ends up losing out).
declare interface NSObject {
  get accessibilityElements(): NSArray;
  set accessibilityElements(
    value: NSArray<interop.Object> | Array<interop.Object>
  );

  accessibilityContainerType: interop.Enum<typeof UIAccessibilityContainerType>;

  get automationElements(): NSArray;
  set automationElements(
    value: NSArray<interop.Object> | Array<interop.Object>
  );

  get automationElements(): NSArray;
  set automationElements(
    value: NSArray<interop.Object> | Array<interop.Object>
  );

  get accessibilityCustomRotors(): NSArray;
  set accessibilityCustomRotors(
    value: NSArray<interop.Object> | Array<interop.Object>
  );

  accessibilityCustomRotorsBlock: () => NSArray;

  isAccessibilityElement: boolean;

  accessibilityLabel: string;

  accessibilityAttributedLabel: NSAttributedString;

  accessibilityHint: string;

  accessibilityAttributedHint: NSAttributedString;

  accessibilityValue: string;

  accessibilityAttributedValue: NSAttributedString;

  accessibilityTraits: number;

  accessibilityFrame: CGRect;

  accessibilityPath: UIBezierPath;

  accessibilityActivationPoint: CGPoint;

  accessibilityLanguage: string;

  accessibilityElementsHidden: boolean;

  accessibilityViewIsModal: boolean;

  shouldGroupAccessibilityChildren: boolean;

  accessibilityNavigationStyle: interop.Enum<
    typeof UIAccessibilityNavigationStyle
  >;

  accessibilityRespondsToUserInteraction: boolean;

  get accessibilityUserInputLabels(): NSArray;
  set accessibilityUserInputLabels(
    value: NSArray<interop.Object> | Array<interop.Object>
  );

  get accessibilityAttributedUserInputLabels(): NSArray;
  set accessibilityAttributedUserInputLabels(
    value: NSArray<interop.Object> | Array<interop.Object>
  );

  accessibilityTextualContext: string;

  accessibilityDirectTouchOptions: interop.Enum<
    typeof UIAccessibilityDirectTouchOptions
  >;

  isAccessibilityElementBlock: () => boolean;

  accessibilityLabelBlock: () => string;

  accessibilityValueBlock: () => string;

  accessibilityHintBlock: () => string;

  accessibilityTraitsBlock: () => number;

  accessibilityIdentifierBlock: () => string;

  accessibilityHeaderElementsBlock: () => NSArray;

  accessibilityAttributedLabelBlock: () => NSAttributedString;

  accessibilityAttributedHintBlock: () => NSAttributedString;

  accessibilityLanguageBlock: () => string;

  accessibilityTextualContextBlock: () => string;

  accessibilityUserInputLabelsBlock: () => NSArray;

  accessibilityAttributedUserInputLabelsBlock: () => NSArray;

  accessibilityAttributedValueBlock: () => NSAttributedString;

  accessibilityElementsHiddenBlock: () => boolean;

  accessibilityRespondsToUserInteractionBlock: () => boolean;

  accessibilityViewIsModalBlock: () => boolean;

  accessibilityShouldGroupAccessibilityChildrenBlock: () => boolean;

  accessibilityElementsBlock: () => NSArray;

  automationElementsBlock: () => NSArray;

  accessibilityContainerTypeBlock: () => interop.Enum<
    typeof UIAccessibilityContainerType
  >;

  accessibilityActivationPointBlock: () => CGPoint;

  accessibilityFrameBlock: () => CGRect;

  accessibilityNavigationStyleBlock: () => interop.Enum<
    typeof UIAccessibilityNavigationStyle
  >;

  accessibilityPathBlock: () => UIBezierPath;

  accessibilityActivateBlock: () => boolean;

  accessibilityIncrementBlock: () => void;

  accessibilityDecrementBlock: () => void;

  accessibilityPerformEscapeBlock: () => boolean;

  accessibilityMagicTapBlock: () => boolean;

  accessibilityCustomActionsBlock: () => NSArray;

  accessibilityElementDidBecomeFocused(): void;

  accessibilityElementDidLoseFocus(): void;

  accessibilityElementIsFocused(): boolean;

  accessibilityAssistiveTechnologyFocusedIdentifiers(): NSSet;

  accessibilityActivate(): boolean;

  accessibilityIncrement(): void;

  accessibilityDecrement(): void;

  accessibilityZoomInAtPoint(point: CGPoint): boolean;

  accessibilityZoomOutAtPoint(point: CGPoint): boolean;

  accessibilityScroll(
    direction: interop.Enum<typeof UIAccessibilityScrollDirection>
  ): boolean;

  accessibilityPerformEscape(): boolean;

  accessibilityPerformMagicTap(): boolean;

  get accessibilityCustomActions(): NSArray;
  set accessibilityCustomActions(
    value: NSArray<interop.Object> | Array<interop.Object>
  );

  get accessibilityDragSourceDescriptors(): NSArray;
  set accessibilityDragSourceDescriptors(
    value: NSArray<interop.Object> | Array<interop.Object>
  );

  get accessibilityDropPointDescriptors(): NSArray;
  set accessibilityDropPointDescriptors(
    value: NSArray<interop.Object> | Array<interop.Object>
  );
}
