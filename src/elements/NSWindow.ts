import 'objc/index.js';
import { NSResponderElement } from './NSResponder.js';
import { NSObjectElement } from './NSObject.js';

export class NSWindowElement extends NSResponderElement {
  readonly nativeObject = NSWindow.new();

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
}
