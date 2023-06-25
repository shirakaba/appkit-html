import dominimal from 'dominimal';
const JSDOM = dominimal.JSDOM;

export async function polyfill() {
  const jsdom = new JSDOM('', { pretendToBeVisual: true });
  const window = jsdom.window;

  const { defineElements } = await import('./elements/index.js');

  defineElements(window);

  return window;
}
