import { Some } from './some'

export function Pipeline<T>(x: NonNullable<T>) {
  return Some(x)
}
