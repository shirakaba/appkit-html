/// <reference types="objc/types" />

import 'objc/index.js';
import { NSResponderElement } from './NSResponder.js';
import { dom0EventMixin } from '../utils/dom-0-events.js';
import { DelegateWrapperFactory } from '../utils/delegate-wrapper.js';

let instanceCount = 0;

export class NSApplicationElement extends NSResponderElement {
  readonly nativeObject = NSApplication.sharedApplication;

  constructor() {
    super();

    instanceCount++;
    if (instanceCount > 1) {
      throw new Error('NSApplicationElement must be a singleton.');
    }

    const MyDelegateWrapper = DelegateWrapperFactory(NSApplicationDelegate);
    // const appDelegate = new MyDelegateWrapper();
    const appDelegate = MyDelegateWrapper.new();
    console.log('appDelegate', appDelegate);
    console.log('appDelegate proto', Object.getPrototypeOf(appDelegate));

    appDelegate.eventTargetDelegate = new WeakRef(this);

    // TODO: generic?
    this.nativeObject.delegate = appDelegate as NSApplicationDelegate;
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
