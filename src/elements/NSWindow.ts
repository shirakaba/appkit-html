import 'objc/index.js';

declare var NSWindow: any;

export class _NSWindow extends HTMLElement {
  readonly view = NSWindow.new();

  appendChild<T extends Node>(node: T): T {
    super.appendChild(node);

    console.log(`TODO: implement appendChild for NSWindow`);

    return node;
  }
}
