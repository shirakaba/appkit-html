import 'objc/index.js';
import { NSViewElement } from './NSView.js';

declare var NSTextField: any;

export class NSTextFieldElement extends NSViewElement {
  readonly view = NSTextField.new();

  // TODO: support setAttribute() and getAttribute()
  get textColor(): any {
    return this.view.textColor;
  }
  set textColor(value: any) {
    this.view.textColor = value;
  }

  appendChild<T extends Node>(node: T): T {
    // Instead of super.appendChild(), we'll climb up to HTMLElement and use
    // that implementation.
    const HTMLElementProto = (() => {
      let proto = Object.getPrototypeOf(this);
      while (proto.constructor !== HTMLElement) {
        proto = Object.getPrototypeOf(proto);
      }
      return proto;
    })();
    const appended = HTMLElementProto.appendChild(node);

    // TODO: decide how to handle Text nodes and native nodes

    return appended;
  }

  removeChild<T extends Node>(child: T): T {
    // Instead of super.removeChild(), we'll climb up to HTMLElement and use
    // that implementation.
    const HTMLElementProto = (() => {
      let proto = Object.getPrototypeOf(this);
      while (proto.constructor !== HTMLElement) {
        proto = Object.getPrototypeOf(proto);
      }
      return proto;
    })();
    const removed = HTMLElementProto.removeChild(child);

    // TODO: decide how to handle Text nodes and native nodes

    return removed;
  }
}
