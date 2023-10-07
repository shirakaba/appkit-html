import 'objc/index.js';
import { isNativeElement } from '../utils/isNativeElement.js';

declare var NSView: any;

export class NSViewElement extends HTMLElement {
  readonly view = NSView.new();

  static get observedAttributes() {
    return ['background-color'] as const;
  }

  // TODO: should we use a Proxy to proxy each observedAttribute?
  // Would still have to solve TS typings.
  //
  // Interestingly, this resource says to consider skipping attributes
  // altogether for rich (non-string) properties:
  // https://thomaswilburn.github.io/wc-book/ce-attributes.html
  get backgroundColor(): any {
    return this.getAttribute('background-color');
  }
  set backgroundColor(value: any) {
    this.setAttribute('background-color', value);
  }

  attributeChangedCallback(name: string, oldValue: any, newValue: any) {
    // TODO: should this parse string values to rich values?
    // TODO: should attributes like background-color be relegated to CSS?

    // With reference to HTMLVideoElement:
    // - For boolean properties like `autoplay`, we should set !!newValue.
    // - For string properties like `preload`, we should preserve the string.
    // - For rich properties like `srcObject`, we should preserve the value.
    // ... that said, rich properties aren't attributes in the first place.
    switch (name) {
      case 'background-color':
        this.view.backgroundColor = newValue;
        break;
    }
  }

  appendChild<T extends Node>(node: T): T {
    const appended = super.appendChild(node);

    if (isNativeElement(node)) {
      if (node.view instanceof NSView) {
        this.view.addSubview(node.view);
      }
    }

    return appended;
  }

  removeChild<T extends Node>(child: T): T {
    const removed = super.removeChild(child);

    if (isNativeElement(child)) {
      if (child.view instanceof NSView) {
        child.view.removeFromSuperview();
      }
    }

    return removed;
  }
}

// We should probably consider as attributes only values that can be typed in
// the Web Inspector, so strings and *maybe* booleans.
//
// https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes#content_versus_idl_attributes
//
// function testAutoplay(value){
//   const values = [];
//
//   $0.autoplay = true; // Initialize as true
//   $0.autoplay = value; // Set IDL attribute (JS property)
//   values.push($0.getAttribute('autoplay'), $0.autoplay);
//
//   $0.autoplay = true; // Re-initialize as true
//   $0.setAttribute('autoplay', value); // Set content attribute (HTML)
//   values.push($0.getAttribute('autoplay'), $0.autoplay);
//
//   return values;
// }
//
// Interestingly, all cases of setAttribute() coerce the JS value to true. It
// must only be removeAttribute() that can negate it.
//
// testAutoplay(true);       // ["",   true,  "true",            true]
// testAutoplay(false);      // [null, false, "false",           true]
// testAutoplay('');         // [null, false, "",                true]
// testAutoplay(null);       // [null, false, "null",            true]
// testAutoplay('autoplay'); // ["",   true,  "autoplay",        true]
// testAutoplay('hi');       // ["",   true,  "hi",              true]
// testAutoplay(undefined);  // [null, false, "undefined",       true]
// testAutoplay(123);        // ["",   true,  "123",             true]
// testAutoplay({});         // ["",   true,  "[object Object]", true]
//
// - element.setAttribute(value);
//   - sets boolean values as true
//   - sets the attribute as `${value}`
// - element.value = value;
//   - sets boolean values as !!value
//   - sets the attribute as value ? '' : null
