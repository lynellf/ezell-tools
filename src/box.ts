import { Option } from './option'

export function Box<T>(x: NonNullable<T>) {
  return Option(x)
}
