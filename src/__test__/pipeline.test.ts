import { Pipeline } from '../pipeline'

const divide = (y: number) => (x: number) => y === 0 ? null : x / y
const divideByTwo = divide(2)
const divideByZero = divide(0)

describe('method chaining', () => {
  it('should return a new instance of Container<T>', () => {
    const result = Pipeline(1).map((x) => x + 1)
    expect(result.value).toBe(2)
  })

  it('should return undefined', () => {
    const result = Pipeline(4)
      .map((x) => divideByTwo(x))
      .map((x) => divideByZero(x))
      .map((x) => divideByTwo(x))

    expect(result.value).toBe(undefined)
  })
})
