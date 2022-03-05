type PipeAny<A, B> = (input: A) => B
type VoidOne<T> = (input: T) => void

export function pipe<T>(input: T, ...fns: PipeAny<T, any>[]) {
  return fns.reduce((nextInput, fn) => fn(nextInput), input)
}

export function tap<T>(input: T, ...fns: VoidOne<T>[]) {
  fns.forEach((fn) => fn(input))
  return input
}
