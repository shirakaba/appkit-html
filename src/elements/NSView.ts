import 'objc/index.js';
import { isNativeElement } from '../utils/isNativeElement.js';

declare var NSView: any;
declare var NSObject: any;

export class NSViewElement extends HTMLElement {
  /**
   * key: attribute (lowercase)
   * value: prop (camelCase)
   */
  static attributesMap = new Map(
    [...getNativeProps(NSView)]
      .filter((prop): prop is string => typeof prop === 'string')
      .map((prop) => [prop.toLowerCase(), prop])
  );
  readonly view = NSView.new();

  constructor() {
    super();

    return new Proxy(this, {
      get(target: NSViewElement, p: string | symbol, receiver: any) {
        if (typeof p !== 'string') {
          return Reflect.get(target, p, receiver);
        }

        // If the prop is a known native prop, proxy it through.
        const nativeProp = getPropertyDescriptor(target.view, p);
        if (
          nativeProp &&
          (nativeProp.get || typeof nativeProp.value !== 'function')
        ) {
          return target.view[p];
        }

        return Reflect.get(target, p, receiver);
      },
      set(
        target: NSViewElement,
        p: string | symbol,
        newValue: any,
        receiver: any
      ) {
        if (typeof p !== 'string') {
          return Reflect.set(target, p, newValue, receiver);
        }

        // If the prop is a known native prop, proxy it through.
        const nativeProp = getPropertyDescriptor(target.view, p);
        if (nativeProp?.set) {
          target.view[p] = newValue;
          // TODO: although this keeps IDL attributes in sync with content
          // attributes, we still need a way to do the reverse as well.
          if (typeof p === 'string') {
            target.setAttribute(p.toLowerCase(), newValue);
          }
          return true;
        }

        return Reflect.set(target, p, newValue, receiver);
      },
    });
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

// Seems to crash when p is a Symbol
function getPropertyDescriptor(obj: {}, p: string) {
  let proto = Object.getPrototypeOf(obj);

  while (proto) {
    const descriptor = Object.getOwnPropertyDescriptor(proto, p);
    if (descriptor) {
      return descriptor;
    }
    proto = Object.getPrototypeOf(obj);
  }
}

function getNativeProps(clazz: any) {
  const nativeProps = new Set<string | symbol>();
  let proto = clazz.prototype;
  while (true) {
    for (const prop of Object.getOwnPropertyNames(proto)) {
      if (prop === 'constructor') {
        continue;
      }
      nativeProps.add(prop);
    }

    for (const prop of Object.getOwnPropertySymbols(proto)) {
      nativeProps.add(prop);
    }

    if (proto.constructor === NSObject) {
      break;
    }
    proto = Object.getPrototypeOf(proto);
  }

  return nativeProps;
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
