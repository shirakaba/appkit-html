import {
  type HTMLNativeObjectElement,
  HTMLUIViewElement,
} from './generated-elements.js';

export class HTMLUIViewElementPatched extends HTMLUIViewElement {
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
