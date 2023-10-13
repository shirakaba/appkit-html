import { polyfill } from '../dist/index.js';

await polyfill(globalThis);

const nsView = document.createElement('ns-view');

// nsView.setAttribute('alphaValue', 1);
nsView.setAttribute('needsLayout', false);
// nsView.setAttribute('toolTip', 'A view');
console.log(nsView.outerHTML);
