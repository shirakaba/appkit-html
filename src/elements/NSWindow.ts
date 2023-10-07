import 'objc/index.js';
import { isNativeElement } from '../utils/isNativeElement.js';

declare var NSWindow: any;
declare var NSView: any;
declare var NSViewController: any;

export class NSWindowElement extends HTMLElement {
  readonly view = NSWindow.new();

  appendChild<T extends Node>(node: T): T {
    const appended = super.appendChild(node);

    if (isNativeElement(node)) {
      if (node.view instanceof NSView) {
        this.view.contentView = node.view;
      } else if (node.view instanceof NSViewController) {
        this.view.contentViewController = node.view;
      }
    }

    return appended;
  }

  removeChild<T extends Node>(child: T): T {
    const removed = super.removeChild(child);

    if (isNativeElement(child)) {
      if (child.view instanceof NSView) {
        this.view.contentView = null;
      } else if (child.view instanceof NSViewController) {
        this.view.contentViewController = null;
      }
    }

    return removed;
  }
}
