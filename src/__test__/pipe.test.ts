import { pipe, tap } from '../pipe'

const plusOne = (num: number) => num + 1

describe('pipe operator fn', () => {
  it('pipes the number one through three functions', () => {
    const four = pipe(1, plusOne, plusOne, plusOne)
    expect(four).toBe(4)
  })

  it('modifies a variable three times', () => {
    let count = 1
    const addOne = () => count++

    tap(count, addOne, addOne, addOne)

    expect(count).toBe(4)
  })
})
