interface NativeElement extends HTMLElement {
  /**
   * TODO: NSView
   */
  view: any;
}

export function isNativeElement(node: Node): node is NativeElement {
  return !!(node as NativeElement).view;
}
