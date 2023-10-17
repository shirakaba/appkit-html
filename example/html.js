import 'objc';

import { polyfill } from '../dist/index.js';

await polyfill(globalThis);

const nsApplication = document.createElement('ns-application');
nsApplication.onapplicationdidfinishlaunching = (e) => {
  console.log('[DOM0] applicationdidfinishlaunching', e);
};
nsApplication.addEventListener('applicationdidfinishlaunching', (e) => {
  console.log('[DOM2] applicationdidfinishlaunching', e);
});
nsApplication.nativeObject.run();

// const nsWindow = document.createElement('ns-window');
// const nsView = document.createElement('ns-view');
// nsWindow.appendChild(nsView);

// /**
//  * @implements {NSApplicationDelegate}
//  */
// class ApplicationDelegate extends NSObject {
//   static ObjCProtocols = [NSApplicationDelegate];

//   static {
//     NativeClass(this);
//   }

//   running = true;

//   /**
//    * @param {NSNotification} _notification
//    */
//   // eslint-disable-next-line no-unused-vars
//   applicationDidFinishLaunching(_notification) {
//     this.window = nsWindow.nativeObject;

//     NSApp.activateIgnoringOtherApps(false);

//     NSApp.stop(this);

//     const loop = () => {
//       const event = NSApp.nextEventMatchingMaskUntilDateInModeDequeue(
//         NSEventMask.Any,
//         null,
//         'kCFRunLoopDefaultMode',
//         true
//       );

//       if (event != null) {
//         NSApp.sendEvent(event);
//       }

//       if (this.running) {
//         setTimeout(loop, 10);
//       }
//     };

//     setTimeout(loop, 0);
//   }

//   /**
//    * @param {NSNotification} _notification
//    */
//   // eslint-disable-next-line no-unused-vars
//   applicationWillTerminate(_notification) {
//     this.running = false;
//   }
// }

// // Given that the AppKit fashion is to create class extensions to achieve just
// // about everything, we'll need to think how on earth to map this to HTML.

// /**
//  * @implements {NSWindowDelegate}
//  */
// // eslint-disable-next-line no-unused-vars
// class Window extends NSWindow {
//   static ObjCProtocols = [NSWindowDelegate];

//   static {
//     NativeClass(this);
//   }

//   init() {
//     this.title = 'NativeScript for macOS';
//     this.delegate = this;

//     this.makeKeyAndOrderFront(NSApp);

//     return this;
//   }

//   /**
//    * @param {NSNotification} _notification
//    */
//   // eslint-disable-next-line no-unused-vars
//   windowWillClose(_notification) {
//     NSApp.terminate(this);
//   }
// }

// const NSApp = NSApplication.sharedApplication;

// NSApp.setActivationPolicy(NSApplicationActivationPolicy.Regular);
// NSApp.delegate = ApplicationDelegate.new();
// NSApp.run();
