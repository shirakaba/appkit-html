# Appkit HTML

Render AppKit with DOM and HTML!

## Installation

We assume you are using a NativeScript AppKit project in Node.js (though Deno might work, too).

```sh
npm install --save appkit-html
```

## Usage

TODO

## Contributing

This project's example app depends upon NativeScript AppKit, so you'll need to have that set up. NativeScript AppKit lives at https://github.com/DjDeveloperr/objc_bridge/tree/main but has not been published to npm yet, so you'll need to link it as a local package.

```sh
# Inside objc_bridge (after having followed its build instructions)
npm link

# Inside appkit-html
npm link objc
```
