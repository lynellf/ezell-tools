import { map } from './map'
import { tap } from './tap'
import { flatMap } from './flatmap'
import type { Some as TSome } from './types'

export function Some<T>(x: NonNullable<T>): TSome<T> {
  return {
    value: x,
    map: map(x),
    flatMap: flatMap(x),
    tap: tap(x)
  }
}
