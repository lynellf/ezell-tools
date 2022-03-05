export interface None<T> {
    type: 'None';
    value: T;
    map: <U>(fn: (x: NonNullable<T>) => U) => Pipeline<U>;
    tap: (fn: (x: T) => void) => Pipeline<T>;
}
export interface Some<T> {
    type: 'Some';
    value: T;
    map: <U>(fn: (x: T) => U) => Pipeline<U>;
    tap: (fn: (x: T) => void) => Pipeline<T>;
}
export interface Pipeline<T> {
    type: 'Some' | 'None';
    value: T;
    map: <U>(fn: (x: NonNullable<T>) => U) => Pipeline<U>;
    tap: (fn: (x: T) => void) => Pipeline<T>;
}
export declare type Option<T> = Pipeline<T>;
//# sourceMappingURL=types.d.ts.map