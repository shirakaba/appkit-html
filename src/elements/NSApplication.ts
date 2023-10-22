/// <reference types="objc/types" />

import 'objc/index.js';
import { NSResponderElement } from './NSResponder.js';
import { dom0EventMixin } from '../utils/dom-0-events.js';
import { EventTargetDelegate } from '../utils/event-target-delegate.js';

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
] as const;

let instanceCount = 0;

export class NSApplicationElement extends NSResponderElement {
  readonly nativeObject = NSApplication.sharedApplication;

  static {
    for (const event of events) {
      dom0EventMixin(this.prototype, event);
    }
  }

  constructor() {
    super();

    instanceCount++;
    if (instanceCount > 1) {
      throw new Error('NSApplicationElement must be a singleton.');
    }

    const appDelegate = ApplicationDelegate.new();
    appDelegate.eventTargetDelegate = new WeakRef(this);

    this.nativeObject.delegate = appDelegate;
  }

  declare onapplicationwillpresenterror: (
    evt: CustomEvent<[application: NSApplication, error: NSError]>
  ) => void | null;
  declare onapplicationwillencoderestorablestate: (
    evt: CustomEvent<[app: NSApplication, coder: NSCoder]>
  ) => void | null;
  declare onapplicationwillcontinueuseractivitywithtype: (
    evt: CustomEvent<[application: NSApplication, userActivityType: string]>
  ) => void | null;
  declare onapplicationwillfinishlaunching: (
    evt: CustomEvent<[notification: NSNotification]>
  ) => void | null;
  declare onapplicationwillhide: (
    evt: CustomEvent<[notification: NSNotification]>
  ) => void | null;
  declare onapplicationwillunhide: (
    evt: CustomEvent<[notification: NSNotification]>
  ) => void | null;
  declare onapplicationwillbecomeactive: (
    evt: CustomEvent<[notification: NSNotification]>
  ) => void | null;
  declare onapplicationwillresignactive: (
    evt: CustomEvent<[notification: NSNotification]>
  ) => void | null;
  declare onapplicationwillupdate: (
    evt: CustomEvent<[notification: NSNotification]>
  ) => void | null;
  declare onapplicationwillterminate: (
    evt: CustomEvent<[notification: NSNotification]>
  ) => void | null;
  declare onapplicationdidregisterforremotenotificationswithdevicetoken: (
    evt: CustomEvent<[application: NSApplication, deviceToken: NSData]>
  ) => void | null;
  declare onapplicationdidfailtoregisterforremotenotificationswitherror: (
    evt: CustomEvent<[application: NSApplication, error: NSError]>
  ) => void | null;
  declare onapplicationdidreceiveremotenotification: (
    evt: CustomEvent<[application: NSApplication, userInfo: NSDictionary]>
  ) => void | null;
  declare onapplicationdiddecoderestorablestate: (
    evt: CustomEvent<[app: NSApplication, coder: NSCoder]>
  ) => void | null;
  declare onapplicationdidfailtocontinueuseractivitywithtypeerror: (
    evt: CustomEvent<
      [application: NSApplication, userActivityType: string, error: NSError]
    >
  ) => void | null;
  declare onapplicationdidupdateuseractivity: (
    evt: CustomEvent<[application: NSApplication, userActivity: NSUserActivity]>
  ) => void | null;
  declare onapplicationdidfinishlaunching: (
    evt: CustomEvent<[notification: NSNotification]>
  ) => void | null;
  declare onapplicationdidhide: (
    evt: CustomEvent<[notification: NSNotification]>
  ) => void | null;
  declare onapplicationdidunhide: (
    evt: CustomEvent<[notification: NSNotification]>
  ) => void | null;
  declare onapplicationdidbecomeactive: (
    evt: CustomEvent<[notification: NSNotification]>
  ) => void | null;
  declare onapplicationdidresignactive: (
    evt: CustomEvent<[notification: NSNotification]>
  ) => void | null;
  declare onapplicationdidupdate: (
    evt: CustomEvent<[notification: NSNotification]>
  ) => void | null;
  declare onapplicationdidchangescreenparameters: (
    evt: CustomEvent<[notification: NSNotification]>
  ) => void | null;
  declare onapplicationdidchangeocclusionstate: (
    evt: CustomEvent<[notification: NSNotification]>
  ) => void | null;
}

class ApplicationDelegate
  extends NSObject
  implements NSApplicationDelegate, EventTargetDelegate
{
  static ObjCProtocols = [NSApplicationDelegate];

  // Unlike typical Obj-C delegates, this is a strong ref, so we should ideally
  // null it upon deconstruction. However I'm being lax here because this
  // particular class is tied to the app lifecycle and shouldn't ever need
  // deconstruction in practice.
  eventTargetDelegate: WeakRef<EventTarget> | null = null;

  readonly listeners = {};

  static {
    NativeClass(this);
  }

  running = true;

  dispatchEvent(type: Lowercase<string>, detail?: any): boolean {
    return (
      this.eventTargetDelegate?.deref()?.dispatchEvent(
        new CustomEvent(type, {
          detail,
          bubbles: false,
          cancelable: true,
        })
      ) ?? false
    );
  }

  // TODO: proxy each delegate method.
  applicationDidFinishLaunching(_notification: NSNotification) {
    // console.log('[ApplicationDelegate] applicationDidFinishLaunching');
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
