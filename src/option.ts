import { None } from './none'
import { Some } from './some'
import type { Pipeline } from './types'

export function Option<T>(x: T): Pipeline<T> {
  return x === undefined || x === null ? None(x) : Some(x as NonNullable<T>)
}
