// @ts-check

import 'objc';

import { polyfill } from '../dist/index.js';

polyfill(globalThis);

const { registerAllElements } = await import(
  '../dist/generated-elements/register-all-elements.js'
);

await registerAllElements();

const { NSApplicationDelegateImpl } = await import(
  '../dist/generated-elements/index.js'
);

console.log(document.documentElement.outerHTML);

const nsApplication = document.createElement('ns-application');
const NSApp = nsApplication.nativeObject;
console.log('delegate', NSApp.delegate);

let running = false;
nsApplication.nativeObject.delegate = NSApplicationDelegateImpl.new();
nsApplication.nativeObject.delegate.applicationDidFinishLaunching = (
  /** @type {NSNotification} */ notification
) => {
  console.log('applicationDidFinishLaunching', notification);

  running = true;

  NSApp.activateIgnoringOtherApps(false);
  NSApp.stop(NSApp.delegate);

  const loop = () => {
    const event = NSApp.nextEventMatchingMaskUntilDateInModeDequeue(
      NSEventMask.Any,
      null,
      'kCFRunLoopDefaultMode',
      true
    );

    if (event != null) {
      NSApp.sendEvent(event);
    }

    if (running) {
      setTimeout(loop, 10);
    }
  };

  setTimeout(loop, 0);
};
console.log('delegate', NSApp.delegate);
console.log(
  'delegate.applicationDidFinishLaunching',
  NSApp.delegate.applicationDidFinishLaunching
);
console.log('still alive');
nsApplication.applicationWillTerminate = () => {
  running = false;
};

const nsWindow = document.createElement('ns-window');
nsWindow.title = 'NativeScript for macOS';
nsWindow.windowWillClose = () => {
  NSApp.terminate(this);
};
nsWindow.nativeObject.makeKeyAndOrderFront(NSApp);
nsWindow.nativeObject.isReleasedWhenClosed = false;
nsWindow.nativeObject.center();
nsWindow.nativeObject.backgroundColor = NSColor.colorWithSRGBRedGreenBlueAlpha(
  118 / 255,
  171 / 255,
  235 / 255,
  1
);

NSApp.setActivationPolicy(NSApplicationActivationPolicy.Regular);
NSApp.run();
