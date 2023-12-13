import {
  HTMLUIViewElement as HTMLUIViewElementGenerated,
  HTMLUIStackViewElement as HTMLUIStackViewElementGenerated,
  HTMLNativeObjectElement,
} from './generated-elements.js';

// This file contains all our manual patches to generated elements. The
// philosophy is to use mixins so that patching one class benefits all
// subclasses.
//
// We resort to manual patching whenever we find something in UIKit that is
// impossible to automatically implement using static analysis alone. A typical
// case of this is parent-child handling. Some views like UIScrollView do not
// treat all children equally, and so require a lot of special-casing.

class HTMLUIViewElement extends HTMLUIViewElementGenerated {
  static {
    applyMixins(super.prototype.constructor, this);
  }

  protected get nativeChildNodesImpl(): NSArray<UIView> {
    return this.nativeObject.subviews;
  }

  protected nativeAppendChildImpl<T extends HTMLNativeObjectElement>(
    node: T
  ): void {
    const view = node.nativeView;
    if (!(view instanceof UIView)) {
      throw new Error('Expected UIView');
    }
    this.nativeObject.addSubview(view);
  }

  protected nativeRemoveChildImpl<T extends HTMLNativeObjectElement>(
    child: T
  ): void {
    const view = child.nativeView;
    if (!(view instanceof UIView)) {
      throw new Error('Expected UIView');
    }
    view.removeFromSuperview();
  }
}

class HTMLUIStackViewElement extends HTMLUIStackViewElementGenerated {
  static {
    applyMixins(super.prototype.constructor, this);
  }

  protected get nativeChildNodesImpl(): NSArray {
    return this.nativeObject.arrangedSubviews;
  }

  protected nativeAppendChildImpl<T extends HTMLNativeObjectElement>(
    node: T
  ): void {
    if (!(node.nativeObject instanceof UIView)) {
      throw new Error('Expected UIView');
    }
    this.nativeObject.addArrangedSubview(node.nativeObject);
  }

  protected nativeRemoveChildImpl<T extends HTMLNativeObjectElement>(
    child: T
  ): void {
    if (!(child.nativeObject instanceof UIView)) {
      throw new Error('Expected UIView');
    }
    this.nativeObject.removeArrangedSubview(child.nativeObject);
  }

  protected nativeInsertAtIndexImpl<T extends HTMLNativeObjectElement>(
    newNode: T,
    index: number
  ): void {
    if (!(newNode.nativeObject instanceof UIView)) {
      throw new Error('Expected UIView');
    }
    this.nativeObject.insertArrangedSubviewAtIndex(newNode.nativeObject, index);
  }
}

// https://www.typescriptlang.org/docs/handbook/mixins.html#alternative-pattern
function applyMixins(derivedCtor: any, baseCtor: any): void {
  for (const name of Object.getOwnPropertyNames(baseCtor.prototype)) {
    // It seems that attempting to replace the constructor doesn't work as
    // expected, so we can't have class instance fields.
    if (name === 'constructor') {
      continue;
    }

    Object.defineProperty(
      derivedCtor.prototype,
      name,
      Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ??
        Object.create(null)
    );
  }
}
