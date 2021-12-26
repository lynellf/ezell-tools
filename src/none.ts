import type { None as TNone } from './types'
export function None<T>(x: T): TNone<T> {
  return {
    type: 'None',
    value: undefined,
    map: (_fn) => None(x),
    // @ts-ignore
    flatMap: (_fn) => None(x),
    tap: (_fn) => None(x)
  }
}
