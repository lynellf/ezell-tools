export interface None<T> {
  type: 'None'
  value: undefined
  map: (fn: Function) => None<T>
  flatMap: <U>(fn: (x: T) => U) => Option<U>
  tap: (fn: Function) => None<T>
}

export interface Some<T> {
  type: 'Some'
  value: T
  map: <U>(fn: (x: T) => NonNullable<U>) => Some<U>
  flatMap: <U>(fn: (x: NonNullable<T>) => U) => Option<U>
  tap: (fn: (x: T) => void) => Some<T>
}

export type Option<T> = None<T> | Some<T>
