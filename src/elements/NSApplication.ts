/// <reference types="objc/types" />

import 'objc/index.js';
import { NSResponderElement } from './NSResponder.js';

const events = [
  'applicationwillpresenterror',
  'applicationwillencoderestorablestate',
  'applicationwillcontinueuseractivitywithtype',
  'applicationwillfinishlaunching',
  'applicationwillhide',
  'applicationwillunhide',
  'applicationwillbecomeactive',
  'applicationwillresignactive',
  'applicationwillupdate',
  'applicationwillterminate',
  'applicationdidregisterforremotenotificationswithdevicetoken',
  'applicationdidfailtoregisterforremotenotificationswitherror',
  'applicationdidreceiveremotenotification',
  'applicationdiddecoderestorablestate',
  'applicationdidfailtocontinueuseractivitywithtypeerror',
  'applicationdidupdateuseractivity',
  'applicationdidfinishlaunching',
  'applicationdidhide',
  'applicationdidunhide',
  'applicationdidbecomeactive',
  'applicationdidresignactive',
  'applicationdidupdate',
  'applicationdidchangescreenparameters',
  'applicationdidchangeocclusionstate',
];

let instanceCount = 0;

export class NSApplicationElement extends NSResponderElement {
  readonly nativeObject = NSApplication.sharedApplication;

  // We use two underlines so as not to clash with JSDOM's equivalent.
  private __eventHandlers?: Record<
    string,
    EventListenerOrEventListenerObject | null
  >;

  static {
    // We synthesise DOM Level 0 event handlers by adding a non-capturing
    // singleton listener
    for (const event of events) {
      Object.defineProperty(this.prototype, 'on' + event, {
        configurable: true,
        enumerable: true,
        get() {
          return (
            (this as NSApplicationElement).__eventHandlers?.[event] ?? null
          );
        },
        set(val: EventListenerOrEventListenerObject | null) {
          const t = this as NSApplicationElement;

          if (!t.__eventHandlers) {
            t.__eventHandlers = {};
          }

          const existingHandler = t.__eventHandlers[event];
          if (existingHandler) {
            t.removeEventListener(event, existingHandler, {
              capture: false,
            });
          }

          t.__eventHandlers[event] = val;
          if (val) {
            t.addEventListener(event, val, { capture: false });
          }
        },
      });
    }
  }

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

  declare onapplicationwillpresenterror: EventListenerOrEventListenerObject | null;
  declare onapplicationwillencoderestorablestate: EventListenerOrEventListenerObject | null;
  declare onapplicationwillcontinueuseractivitywithtype: EventListenerOrEventListenerObject | null;
  declare onapplicationwillfinishlaunching: EventListenerOrEventListenerObject | null;
  declare onapplicationwillhide: EventListenerOrEventListenerObject | null;
  declare onapplicationwillunhide: EventListenerOrEventListenerObject | null;
  declare onapplicationwillbecomeactive: EventListenerOrEventListenerObject | null;
  declare onapplicationwillresignactive: EventListenerOrEventListenerObject | null;
  declare onapplicationwillupdate: EventListenerOrEventListenerObject | null;
  declare onapplicationwillterminate: EventListenerOrEventListenerObject | null;
  declare onapplicationdidregisterforremotenotificationswithdevicetoken: EventListenerOrEventListenerObject | null;
  declare onapplicationdidfailtoregisterforremotenotificationswitherror: EventListenerOrEventListenerObject | null;
  declare onapplicationdidreceiveremotenotification: EventListenerOrEventListenerObject | null;
  declare onapplicationdiddecoderestorablestate: EventListenerOrEventListenerObject | null;
  declare onapplicationdidfailtocontinueuseractivitywithtypeerror: EventListenerOrEventListenerObject | null;
  declare onapplicationdidupdateuseractivity: EventListenerOrEventListenerObject | null;
  declare onapplicationdidfinishlaunching: EventListenerOrEventListenerObject | null;
  declare onapplicationdidhide: EventListenerOrEventListenerObject | null;
  declare onapplicationdidunhide: EventListenerOrEventListenerObject | null;
  declare onapplicationdidbecomeactive: EventListenerOrEventListenerObject | null;
  declare onapplicationdidresignactive: EventListenerOrEventListenerObject | null;
  declare onapplicationdidupdate: EventListenerOrEventListenerObject | null;
  declare onapplicationdidchangescreenparameters: EventListenerOrEventListenerObject | null;
  declare onapplicationdidchangeocclusionstate: EventListenerOrEventListenerObject | null;
}

/**
 * Not a native delegate. A rare case of the delegate pattern in JS.
 */
type EventTargetDelegate = {
  eventTargetDelegate: EventTarget | null;
};
// TODO: maybe augment GlobalEventHandlers in dom.d.ts instead.
type DOM0EventTarget = {
  [Property in `on${string}`]: EventListenerOrEventListenerObject | null;
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

  dispatchEvent(type: Lowercase<string>, detail?: any): boolean {
    return (
      this.eventTargetDelegate?.dispatchEvent(
        new CustomEvent(type, {
          detail,
          bubbles: false,
          cancelable: true,
        })
      ) ?? false
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
