import { Option } from './option'
import type { Option as TOption } from './types'

export function flatMap<T>(x: NonNullable<T>) {
  return <U>(fn: (x: NonNullable<T>) => U): TOption<U> => {
    return Option(fn(x))
  }
}
