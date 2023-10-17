/// <reference path="./elements/index.ts" />
import dominimal from 'dominimal';
const JSDOM = dominimal.JSDOM;

export async function polyfill(_globalThis: typeof globalThis) {
  const jsdom = new JSDOM('', { pretendToBeVisual: true });
  const window = jsdom.window;

  Object.defineProperty(_globalThis, 'window', { value: window });

  // These cause a DOMException if accessed (not available for opaque origins);
  const skipProps = new Set([
    'localStorage',
    'sessionStorage',
    'setTimeout',
    'clearTimeout',
    'setInterval',
    'clearInterval',
  ]);

  for (const prop of Object.getOwnPropertyNames(jsdom.window)) {
    if (skipProps.has(prop)) {
      continue;
    }
    Object.defineProperty(_globalThis, prop, { value: jsdom.window[prop] });
  }

  const { defineElements } = await import('./elements/index.js');
  defineElements(window);
}
