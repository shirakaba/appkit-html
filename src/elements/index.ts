import { DOMWindow } from 'jsdom';
import { _NSWindow as NSWindow } from './NSWindow.js';

export function defineElements(win: DOMWindow): void {
  win.customElements.define('ns-window', NSWindow);
}
