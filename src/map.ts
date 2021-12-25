import { Some } from './some'
export function map<T>(x: NonNullable<T>) {
  return <U>(fn: (x: T) => NonNullable<U>) => {
    return Some(fn(x))
  }
}
