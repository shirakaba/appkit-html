import 'objc/index.js';
import { NSResponderElement } from './NSResponder.js';
import { NSObjectElement } from './NSObject.js';
import { EventTargetDelegate } from '../utils/event-target-delegate.js';
import { dom0EventMixin } from '../utils/dom-0-events.js';

// TODO: implement all events in NSWindowDelegate
const events = ['windowwillclose'] as const;

export class NSWindowElement extends NSResponderElement {
  readonly nativeObject = NSWindow.new();

  static {
    for (const event of events) {
      dom0EventMixin(this.prototype, event);
    }
  }

  // TODO: getAttribute() and setAttribute()
  set title(value: string) {
    this.nativeObject.title = value;
  }
  get title() {
    return this.nativeObject.title;
  }

  constructor() {
    super();

    const windowDelegate = WindowDelegate.new();
    windowDelegate.eventTargetDelegate = new WeakRef(this);

    this.nativeObject.delegate = windowDelegate;
  }

  appendChild<T extends Node>(node: T): T {
    const appended = super.appendChild(node);

    if (node instanceof NSObjectElement) {
      if (node.nativeObject instanceof NSView) {
        this.nativeObject.contentView = node.nativeObject;
      } else if (node.nativeObject instanceof NSViewController) {
        this.nativeObject.contentViewController = node.nativeObject;
      }
    }

    return appended;
  }

  removeChild<T extends Node>(child: T): T {
    const removed = super.removeChild(child);

    if (child instanceof NSObjectElement) {
      if (child.nativeObject instanceof NSView) {
        // @ts-ignore
        this.nativeObject.contentView = null;
      } else if (child.nativeObject instanceof NSViewController) {
        // @ts-ignore
        this.nativeObject.contentViewController = null;
      }
    }

    return removed;
  }

  declare onwindowwillclose: (
    evt: CustomEvent<[notification: NSNotification]>
  ) => void | null;
}

class WindowDelegate
  extends NSObject
  implements NSWindowDelegate, EventTargetDelegate
{
  static ObjCProtocols = [NSWindowDelegate];

  eventTargetDelegate: WeakRef<EventTarget> | null = null;

  readonly listeners = {};

  static {
    NativeClass(this);
  }

  dispatchEvent(type: Lowercase<string>, detail?: any): boolean {
    return (
      this.eventTargetDelegate?.deref()?.dispatchEvent(
        new CustomEvent(type, {
          detail,
          bubbles: false,
          cancelable: true,
        })
      ) ?? false
    );
  }

  windowWillClose(_notification: NSNotification) {
    if (this.dispatchEvent('windowwillclose', [...arguments])) {
      return;
    }
  }
}
