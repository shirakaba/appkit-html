import { classes } from 'objc/index.js';
const { NSWindow } = classes;

// FIXME: set window as global and reference window.HTMLElement instead?
export class _NSWindow extends HTMLElement {
  readonly view = new NSWindow();

  appendChild<T extends Node>(node: T): T {
    super.appendChild(node);

    console.log(`TODO: implement appendChild for NSWindow`);

    return node;
  }
}
