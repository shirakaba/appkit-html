import { polyfill } from '../dist/index.js';

await polyfill(globalThis);
console.log(document.documentElement.outerHTML);

const nsWindow = document.createElement('ns-window');
console.log(nsWindow.outerHTML);
console.log(nsWindow.view);
