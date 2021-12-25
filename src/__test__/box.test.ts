import { Box } from '../box'

const divide = (y: number) => (x: number) => y === 0 ? null : x / y
const divideByTwo = divide(2)
const divideByZero = divide(0)

describe('method chaining', () => {
  it('should return a new instance of Container<T>', () => {
    const result = Box(1).flatMap((x) => x + 1)
    expect(result.value).toBe(2)
  })

  it('should return undefined', () => {
    const result = Box(4)
      .flatMap(divideByTwo)
      .flatMap(divideByZero)
      .flatMap(divideByTwo)

    expect(result.value).toBe(undefined)
  })
})
