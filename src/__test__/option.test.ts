import { Option } from '../option'

describe('option type', () => {
  it('should return undefined', () => {
    const result = Option(null)
    expect(result.value).toBe(undefined)
  })

  it('should return a value', () => {
    const result = Option(1)
    expect(result.value).toBe(1)
  })
})
