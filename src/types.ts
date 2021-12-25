export interface None<T> {
  value: undefined
  map: (fn: Function) => None<T>
  flatMap: (fn: Function) => None<T>
  tap: (fn: Function) => None<T>
}

export interface Some<T> {
  value: T
  map: <U>(fn: (x: T) => NonNullable<U>) => Some<U>
  flatMap: <U>(fn: (x: NonNullable<T>) => U) => Option<U>
  tap: (fn: (x: T) => void) => Some<T>
}

export type Option<T> = None<T> | Some<T>
