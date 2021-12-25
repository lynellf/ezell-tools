import { tap } from '../tap'

describe('tap', () => {
  it('should return a value', () => {
    const state = { value: 0 }
    tap(state.value)((x) => (state.value = x + 1))
    expect(state.value).toBe(1)
  })
})
