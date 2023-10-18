export function dom0EventMixin(
  prototype: (typeof HTMLElement)['prototype'],
  event: string
) {
  // We synthesise DOM Level 0 event handlers by adding a non-capturing
  // singleton listener
  Object.defineProperty(prototype, `on${event}`, {
    configurable: true,
    enumerable: true,
    get() {
      return (this as Dom0EventTarget).__eventHandlers?.[event] ?? null;
    },
    set(val: EventListenerOrEventListenerObject | null) {
      const t = this as Dom0EventTarget;

      if (!t.__eventHandlers) {
        t.__eventHandlers = {};
      }

      const existingHandler = t.__eventHandlers[event];
      if (existingHandler) {
        t.removeEventListener(event, existingHandler, { capture: false });
      }

      t.__eventHandlers[event] = val;
      if (val) {
        t.addEventListener(event, val, { capture: false });
      }
    },
  });
}

interface Dom0EventTarget extends EventTarget {
  __eventHandlers?: Record<string, EventListenerOrEventListenerObject | null>;
}
