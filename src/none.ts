import type { None as TNone } from './types'
export function None<T>(x: T): TNone<T> {
  return {
    value: undefined,
    map: (_fn) => None(x),
    flatMap: (_fn) => None(x),
    tap: (_fn) => None(x)
  }
}
