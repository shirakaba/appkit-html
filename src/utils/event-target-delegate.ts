/**
 * Not a native delegate. A rare case of the delegate pattern in JS.
 */
export interface EventTargetDelegate {
  eventTargetDelegate: WeakRef<EventTarget> | null;
}
