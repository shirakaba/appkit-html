import { polyfill } from '../dist/index.js';

const window = polyfill();
console.log(window.document.documentElement.outerHTML);
