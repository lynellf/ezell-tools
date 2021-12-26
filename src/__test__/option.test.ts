import { Option } from '../option'

function toSet<T>(iterable: Iterable<T>): Set<T> {
  return new Set(iterable)
}

function toArray<T>(iterable: Iterable<T>): T[] {
  return Array.from(iterable)
}

function divideBy(y: number) {
  return (x: number) => Option(y === 0 ? null : x / y)
}

describe('option type', () => {
  it('should return undefined', () => {
    const result = Option(null)
    expect(result.value).toBe(undefined)
  })

  it('should return a value', () => {
    const result = Option(1)
    expect(result.value).toBe(1)
  })

  it('unwraps a nested option value', () => {
    const divideByFour = divideBy(4)
    const five = Option(20).flatMap(divideByFour).value
    expect(five).toBe(5)
  })

  it('can map an option type', () => {
    const divideByFour = divideBy(4)
    const six = divideByFour(20).map((x) => x! + 1).value
    expect(six).toBe(6)
  })

  it('maintains type through the chain', () => {
    const arr = Option([1, 2, 3, 3])
    const result = arr.flatMap(toSet).flatMap(toArray).value
    expect(result).toStrictEqual([1, 2, 3])
  })
})
