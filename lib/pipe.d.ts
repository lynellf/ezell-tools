declare type PipeAny<A, B> = (input: A) => B;
declare type VoidOne<T> = (input: T) => void;
export declare function pipe<T>(input: T, ...fns: PipeAny<T, any>[]): T;
export declare function tap<T>(input: T, ...fns: VoidOne<T>[]): T;
export {};
//# sourceMappingURL=pipe.d.ts.map