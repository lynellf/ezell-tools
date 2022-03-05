import type { None as TNone, Pipeline } from './types';
export declare function tapNone<T>(x: T): (f: (x: T) => void) => TNone<T>;
export declare function mapNone<T>(x: T): <U>(fn: (x: NonNullable<T>) => U) => Pipeline<U>;
export declare function None<T>(_: T): TNone<T>;
//# sourceMappingURL=none.d.ts.map