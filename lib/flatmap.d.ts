import type { Option as TOption } from './types';
export declare function flatMap<T>(x: NonNullable<T>): <U>(fn: (x: NonNullable<T>) => U) => TOption<U>;
//# sourceMappingURL=flatmap.d.ts.map