import { map } from './map'
import { tap } from './tap'
import { flatMap } from './flatmap'
import type { Some as TSome } from './types'

function unwrap<T>(x: NonNullable<T> | TSome<NonNullable<T>>): NonNullable<T> {
  const isSome = (x as TSome<NonNullable<T>>)?.type === 'Some'
  const value = (x as TSome<NonNullable<T>>)?.value
  const hasValue = value !== undefined

  if (!isSome) return x as NonNullable<T>
  if (!hasValue) return x as NonNullable<T>

  return hasValue ? value : unwrap(x)
}

export function Some<T>(x: NonNullable<T>): TSome<T> {
  return {
    type: 'Some',
    map: map(x),
    flatMap: flatMap(x),
    tap: tap(x),
    get value() {
      return unwrap(x)
    }
  }
}
