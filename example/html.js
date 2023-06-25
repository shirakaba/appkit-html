import { polyfill } from '../dist/index.js';

const window = await polyfill();
console.log(window.document.documentElement.outerHTML);
