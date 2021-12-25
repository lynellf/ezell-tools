import { None } from './none'
import { Some } from './some'
import type { Option as TOption } from './types'

export function Option<T>(x: T): TOption<T> {
  return x === undefined || x === null ? None(x) : Some(x as NonNullable<T>)
}
