import { DOMWindow } from 'jsdom';
import { NSWindowElement } from './NSWindow.js';
import { NSViewElement } from './NSView.js';

const mappings = {
  'ns-window': NSWindowElement,
  'ns-view': NSViewElement,
} as const;

export function defineElements(win: DOMWindow): void {
  for (const key in mappings) {
    win.customElements.define(
      key as keyof typeof mappings,
      mappings[key as keyof typeof mappings]
    );
  }
}

declare global {
  type HTMLCustomElementTagNameMap = {
    -readonly [Property in keyof typeof mappings]: (typeof mappings)[Property]['prototype'];
  };

  interface Document {
    createElement<K extends keyof HTMLCustomElementTagNameMap>(
      tagName: K,
      options?: ElementCreationOptions
    ): HTMLCustomElementTagNameMap[K];
  }
}
