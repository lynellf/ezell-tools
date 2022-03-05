import { Option } from './option'
import type { Pipeline } from './types'

export function map<T>(x: T) {
  return <U>(fn: (x: NonNullable<T>) => U): Pipeline<U> => {
    return Option(fn(x as NonNullable<T>))
  }
}
