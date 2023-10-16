/// <reference types="objc/types" />

import 'objc/index.js';

export abstract class NSObjectElement extends HTMLElement {
  abstract readonly nativeObject: NSObject;
}
