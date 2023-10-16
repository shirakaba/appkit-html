/// <reference types="objc/types" />

import 'objc/index.js';
import { NSResponderElement } from './NSResponder.js';
import { NSObjectElement } from './NSObject.js';

export class NSViewElement extends NSResponderElement {
  readonly nativeObject = NSView.new();

  appendChild<T extends Node>(node: T): T {
    const appended = super.appendChild(node);

    if (node instanceof NSObjectElement) {
      if (node.nativeObject instanceof NSView) {
        this.nativeObject.addSubview(node.nativeObject);
      }
    }

    return appended;
  }

  removeChild<T extends Node>(child: T): T {
    const removed = super.removeChild(child);

    if (child instanceof NSObjectElement) {
      if (child.nativeObject instanceof NSView) {
        child.nativeObject.removeFromSuperview();
      }
    }

    return removed;
  }
}
