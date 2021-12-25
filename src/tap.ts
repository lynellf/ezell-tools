import { Some } from './some'
export function tap<T>(x: NonNullable<T>) {
  return (f: (x: T) => void) => {
    f(x)
    return Some(x)
  }
}
