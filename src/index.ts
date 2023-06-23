import dominimal from 'dominimal';
const JSDOM = dominimal.JSDOM;

export function polyfill() {
  const jsdom = new JSDOM('', { pretendToBeVisual: true });

  return jsdom.window;
}
