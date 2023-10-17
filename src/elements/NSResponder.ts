/// <reference types="objc/types" />

import 'objc/index.js';
import { NSObjectElement } from './NSObject.js';

export abstract class NSResponderElement extends NSObjectElement {
  abstract readonly nativeObject: NSResponder;
}
