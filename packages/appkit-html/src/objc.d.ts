declare module 'objc/index.js' {
  type Class = new (...args: any[]) => any;

  export const classes: Record<string, Class>;

  export const objc: {
    getClass(name: string): Class;
    registerClass(clazz: Class): void;
  };

  export function NSMakeRect(
    x: number,
    y: number,
    width: number,
    height: number
  ): Float64Array;

  export function NSMakeSize(width: number, height: number): Float64Array;
}
