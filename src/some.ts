import { map } from './map'
import { tap } from './tap'
import type { Pipeline } from './types'

function unwrap<T>(x: T | Pipeline<NonNullable<T>>): NonNullable<T> {
  const isSome = (x as Pipeline<NonNullable<T>>)?.type === 'Some'
  const value = (x as Pipeline<NonNullable<T>>)?.value
  const hasValue = value !== undefined

  if (!isSome) return x as NonNullable<T>
  if (!hasValue) return x as NonNullable<T>

  return hasValue ? value : unwrap(x)
}

export function Some<T>(x: T): Pipeline<T> {
  return {
    type: 'Some',
    map: map(x as NonNullable<T>),
    tap: tap(x as NonNullable<T>),
    get value() {
      return unwrap(x as NonNullable<T>)
    }
  }
}
