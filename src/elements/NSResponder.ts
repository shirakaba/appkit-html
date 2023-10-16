/// <reference types="objc/types" />

import 'objc/index.js';
import { isNativeElement } from '../utils/isNativeElement.js';
import { NSObjectElement } from './NSObject.js';

export abstract class NSResponderElement extends NSObjectElement {
  abstract readonly nativeObject: NSResponder;
}
