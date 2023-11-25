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
# Inside objc_bridge:

# Build the runtime (and metadata generator)
deno task build

# Optional: generate the metadata (or just use the ready-committed metadata)
deno task metagen macos

# Create a tarball of the package and move it into this repo, under lib/.
pnpm pack
mv objc-1.1.0.tgz objc-html/lib

# The rest of the steps take place inside appkit-html:

# Install deps
pnpm install

# Generate the TS for our HTML Custom Elements
node scripts/classgen.js

# Transpile our library (including those HTML Custom Elements) to JS
npm run build

# Run the demo
node example/html.js
```
