import type { None as TNone, Pipeline } from './types'

export function tapNone<T>(x: T) {
  return (f: (x: T) => void) => {
    f(x)
    return None(x)
  }
}

export function mapNone<T>(x: T) {
  return <U>(fn: (x: NonNullable<T>) => U): Pipeline<U> => {
    return None(fn(x as NonNullable<T>))
  }
}

export function None<T>(_: T): TNone<T> {
  return {
    type: 'None',
    value: undefined as unknown as T,
    map: mapNone(undefined as unknown as T),
    tap: tapNone(undefined as unknown as T)
  }
}
