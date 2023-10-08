import { polyfill } from '../dist/index.js';

await polyfill(globalThis);
console.log(document.documentElement.outerHTML);

const nsWindow = document.createElement('ns-window');
const nsView = document.createElement('ns-view');

// nsView.setAttribute('background-color', 'abc');
nsView.backgroundColor = 'abc';
nsWindow.appendChild(nsView);
console.log(nsWindow.outerHTML);
