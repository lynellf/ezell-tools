import { Option } from './option'
export function tap<T>(x: T) {
  return (f: (x: T) => void) => {
    f(x)
    return Option(x)
  }
}
