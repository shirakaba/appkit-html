/// <reference types="objc/types" />

import 'objc/index.js';
import { NSResponderElement } from './NSResponder.js';

let instanceCount = 0;

export class NSApplicationElement extends NSResponderElement {
  readonly nativeObject = NSApplication.sharedApplication;

  constructor() {
    super();

    instanceCount++;
    if (instanceCount > 1) {
      throw new Error('NSApplicationElement must be a singleton.');
    }

    const appDelegate = ApplicationDelegate.new();
    appDelegate.eventTargetDelegate = this;
    this.nativeObject.delegate = appDelegate;
  }

  declare onapplicationwillpresenterror:
    | ((this: GlobalEventHandlers, ev: CustomEvent) => any)
    | null;
  declare onapplicationwillencoderestorablestate:
    | ((this: GlobalEventHandlers, ev: CustomEvent) => any)
    | null;
  declare onapplicationwillcontinueuseractivitywithtype:
    | ((this: GlobalEventHandlers, ev: CustomEvent) => any)
    | null;
  declare onapplicationwillfinishlaunching:
    | ((this: GlobalEventHandlers, ev: CustomEvent) => any)
    | null;
  declare onapplicationwillhide:
    | ((this: GlobalEventHandlers, ev: CustomEvent) => any)
    | null;
  declare onapplicationwillunhide:
    | ((this: GlobalEventHandlers, ev: CustomEvent) => any)
    | null;
  declare onapplicationwillbecomeactive:
    | ((this: GlobalEventHandlers, ev: CustomEvent) => any)
    | null;
  declare onapplicationwillresignactive:
    | ((this: GlobalEventHandlers, ev: CustomEvent) => any)
    | null;
  declare onapplicationwillupdate:
    | ((this: GlobalEventHandlers, ev: CustomEvent) => any)
    | null;
  declare onapplicationwillterminate:
    | ((this: GlobalEventHandlers, ev: CustomEvent) => any)
    | null;
  declare onapplicationdidregisterforremotenotificationswithdevicetoken:
    | ((this: GlobalEventHandlers, ev: CustomEvent) => any)
    | null;
  declare onapplicationdidfailtoregisterforremotenotificationswitherror:
    | ((this: GlobalEventHandlers, ev: CustomEvent) => any)
    | null;
  declare onapplicationdidreceiveremotenotification:
    | ((this: GlobalEventHandlers, ev: CustomEvent) => any)
    | null;
  declare onapplicationdiddecoderestorablestate:
    | ((this: GlobalEventHandlers, ev: CustomEvent) => any)
    | null;
  declare onapplicationdidfailtocontinueuseractivitywithtypeerror:
    | ((this: GlobalEventHandlers, ev: CustomEvent) => any)
    | null;
  declare onapplicationdidupdateuseractivity:
    | ((this: GlobalEventHandlers, ev: CustomEvent) => any)
    | null;
  declare onapplicationdidfinishlaunching:
    | ((this: GlobalEventHandlers, ev: CustomEvent) => any)
    | null;
  declare onapplicationdidhide:
    | ((this: GlobalEventHandlers, ev: CustomEvent) => any)
    | null;
  declare onapplicationdidunhide:
    | ((this: GlobalEventHandlers, ev: CustomEvent) => any)
    | null;
  declare onapplicationdidbecomeactive:
    | ((this: GlobalEventHandlers, ev: CustomEvent) => any)
    | null;
  declare onapplicationdidresignactive:
    | ((this: GlobalEventHandlers, ev: CustomEvent) => any)
    | null;
  declare onapplicationdidupdate:
    | ((this: GlobalEventHandlers, ev: CustomEvent) => any)
    | null;
  declare onapplicationdidchangescreenparameters:
    | ((this: GlobalEventHandlers, ev: CustomEvent) => any)
    | null;
  declare onapplicationdidchangeocclusionstate:
    | ((this: GlobalEventHandlers, ev: CustomEvent) => any)
    | null;
}

/**
 * Not a native delegate. A rare case of the delegate pattern in JS.
 */
type EventTargetDelegate = {
  eventTargetDelegate: EventTarget | null;
};
// TODO: maybe augment GlobalEventHandlers in dom.d.ts instead.
type DOM0EventTarget = {
  [Property in `on${string}`]:
    | ((this: GlobalEventHandlers, ev: CustomEvent) => any)
    | null;
};

class ApplicationDelegate
  extends NSObject
  implements NSApplicationDelegate, EventTargetDelegate
{
  static ObjCProtocols = [NSApplicationDelegate];

  // Unlike typical Obj-C delegates, this is a strong ref, so we should ideally
  // null it upon deconstruction. However I'm being lax here because this
  // particular class is tied to the app lifecycle and shouldn't ever need
  // deconstruction in practice.
  eventTargetDelegate: EventTarget | null = null;

  readonly listeners = {};

  static {
    NativeClass(this);
  }

  running = true;

  dispatchEvent(type: Lowercase<string>, detail?: any) {
    if (!this.eventTargetDelegate) {
      return false;
    }

    // This is definitely wrong at the moment. We shouldn't have to create two
    // events at all; this should be handled by registering the event as a
    // global.
    // ... however, may only be possible by forking JSDOM, and not via the
    // Custom Elements APIs: https://stackoverflow.com/a/67835107/5951226
    //
    // It's tempting to just call the DOM0 event manually, but then we have two
    // events and thus two sources of truth for state like defaultPrevented. And
    // also I think the DOM0 event is supposed to be fired once the DOM2 event
    // propagates to target phase, which may not be possible to arrange for
    // short of forking JSDOM.
    //
    // See also: https://html.spec.whatwg.org/multipage/webappapis.html#event-handler-content-attributes
    (this.eventTargetDelegate as unknown as DOM0EventTarget)[`on${type}`]?.call(
      (this.eventTargetDelegate as Element).ownerDocument,
      new CustomEvent(type, {
        detail,
        bubbles: false,
        cancelable: true,
      })
    );

    return (
      this.eventTargetDelegate.dispatchEvent(
        new CustomEvent(type, {
          detail,
          bubbles: false,
          cancelable: true,
        })
      ) ?? true
    );
  }

  applicationDidFinishLaunching(_notification: NSNotification) {
    console.log('[ApplicationDelegate] applicationDidFinishLaunching');
    if (this.dispatchEvent('applicationdidfinishlaunching', [...arguments])) {
      return;
    }

    // this.window = nsWindow.nativeObject;

    // NSApp.activateIgnoringOtherApps(false);

    // NSApp.stop(this);

    // const loop = () => {
    //   const event = NSApp.nextEventMatchingMaskUntilDateInModeDequeue(
    //     NSEventMask.Any,
    //     null,
    //     'kCFRunLoopDefaultMode',
    //     true
    //   );

    //   if (event != null) {
    //     NSApp.sendEvent(event);
    //   }

    //   if (this.running) {
    //     setTimeout(loop, 10);
    //   }
    // };

    // setTimeout(loop, 0);
  }

  applicationWillTerminate(_notification: NSNotification) {
    if (this.dispatchEvent('applicationwillterminate', [...arguments])) {
      return;
    }
    // this.running = false;
  }
}
