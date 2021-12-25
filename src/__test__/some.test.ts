import { Some } from '../some'

describe('some', () => {
  it('should return a value', () => {
    const result = Some(1)
    expect(result.value).toBe(1)
  })
})
