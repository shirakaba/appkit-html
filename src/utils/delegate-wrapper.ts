const DelegateWrapperCache = new Map<
  typeof NSObjectProtocol,
  typeof DelegateWrapper
>();

/**
 * Superclass properties are often redeclared on subclasses; we ignore any that
 * are clearly not delegate methods.
 *
 * Lazy-initialized.
 */
const excludedMethods = new Set<string>();

interface IDelegateWrapper {
  eventTargetDelegate?: WeakRef<EventTarget>;
}
declare class DelegateWrapper implements IDelegateWrapper {
  static new(): DelegateWrapper;
  eventTargetDelegate?: WeakRef<EventTarget>;
}

export function DelegateWrapperFactory(
  Delegate: typeof NSObjectProtocol
): typeof DelegateWrapper {
  const existing = DelegateWrapperCache.get(Delegate);
  if (existing) {
    return existing;
  }

  if (!excludedMethods.size) {
    const NativeObject = Object.getPrototypeOf(NSObjectProtocol);
    for (const key of [
      ...Object.getOwnPropertyNames(NSObjectProtocol),
      ...Object.getOwnPropertyNames(NSObject),
      ...Object.getOwnPropertyNames(NativeObject),
      // It seems some of these aren't actually on the NSObjectProtocol
      // prototype, so we'll just have to define them manually.
      ...[
        'constructor',
        'isEqual',
        'self',
        'performSelector',
        'performSelectorWithObject',
        'performSelectorWithObjectWithObject',
        'isProxy',
        'isKindOfClass',
        'isMemberOfClass',
        'respondsToSelector',
        'retain',
        'release',
        'autorelease',
        'retainCount',
        'zone',
      ],
    ]) {
      // console.log(`to skip: "${key}"`);
      excludedMethods.add(key);
    }
  }

  // Maybe `implements DelegateWrapper` would be just as good?
  class DelegateWrapperImpl extends NSObject implements IDelegateWrapper {
    static ObjCProtocols = [Delegate];

    private __eventHandlers?: Record<
      string,
      EventListenerOrEventListenerObject | null
    >;
    eventTargetDelegate?: WeakRef<EventTarget>;

    static {
      // For each method on the delegate, implement the method to fire a DOM
      // Event upon the method call, and synthesize a corresponding DOM Level 0
      // event handler.
      const descriptors = getDelegatePropertyDescriptors(Delegate);
      for (const key of Object.keys(descriptors)) {
        if (excludedMethods.has(key)) {
          // console.log(`skipping "${key}"`);
          // It's an overridden prop from NSObjectProtocol, not a delegate
          // method, so skip it.
          continue;
        }

        const descriptor = descriptors[key];
        if (typeof descriptor.value !== 'function') {
          continue;
        }

        const eventName = key.toLowerCase() as Lowercase<string>;
        console.log(`Defining event "${key}"...`);

        // Implement the method.
        try {
          Object.defineProperty(this.prototype, key, {
            enumerable: true,
            value: function (this: DelegateWrapperImpl) {
              console.log('called', eventName);
              if (this.dispatchEvent(eventName, [...arguments])) {
                return;
              }
            },
          });
        } catch (error) {
          console.log('failed to define method', eventName);
        }

        // Synthesize the DOM Level 0 event handler.
        try {
          Object.defineProperty(this.prototype, `on${eventName}`, {
            configurable: true,
            enumerable: true,
            get(this: DelegateWrapperImpl) {
              return this.__eventHandlers?.[eventName] ?? null;
            },
            set(
              this: DelegateWrapperImpl,
              val: EventListenerOrEventListenerObject | null
            ) {
              console.log('setting', eventName);
              if (!this.__eventHandlers) {
                this.__eventHandlers = {};
              }

              const existingHandler = this.__eventHandlers[eventName];
              if (existingHandler) {
                this.eventTargetDelegate
                  ?.deref()
                  ?.removeEventListener(eventName, existingHandler, {
                    capture: false,
                  });
              }

              this.__eventHandlers[eventName] = val;
              if (val) {
                this.eventTargetDelegate
                  ?.deref()
                  ?.addEventListener(eventName, val, { capture: false });
              }
            },
          });
        } catch (error) {
          console.log(
            'failed to synthesize DOM Level 0 event handler',
            eventName
          );
        }
      }

      console.log(this);
      // console.log(this.prototype);

      NativeClass(this);
    }

    private dispatchEvent(type: Lowercase<string>, detail?: any): boolean {
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
  }

  DelegateWrapperCache.set(Delegate, DelegateWrapperImpl);

  return DelegateWrapperImpl;
}

function getDelegatePropertyDescriptors(clazz: any) {
  const acc: ReturnType<typeof Object.getOwnPropertyDescriptors> = {};
  for (const proto of climbPrototypes(clazz)) {
    Object.assign(acc, Object.getOwnPropertyDescriptors(proto));

    // console.log('proto.constructor.name', proto.constructor.name);

    // Don't climb past the delegates. Still working out the inheritance chain,
    // so assessing each of NSObjectProtocol, NativeObject, and Object.
    if (proto.constructor.name === 'NativeObject') {
      break;
    }
  }
  return acc;
}

function* climbPrototypes(clazz: any) {
  let proto = clazz.prototype;
  while (proto) {
    yield proto;
    proto = Object.getPrototypeOf(proto);
  }
}
