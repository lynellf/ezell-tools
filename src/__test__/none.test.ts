import { None } from '../none'

describe('none', () => {
  it('should return undefined', () => {
    const result = None(4)
    expect(result.value).toBe(undefined)
  })
})
