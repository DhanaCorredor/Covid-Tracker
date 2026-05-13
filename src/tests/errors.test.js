import { describe, it, expect } from 'vitest'
import { parseApiError } from '../utils/errors'

describe('parseApiError', () => {
  describe('when the API responds with an error status', () => {
    it('returns the specific message for a 500', () => {
      const err = { response: { status: 500 } }

      const result = parseApiError(err)

      expect(result).toBe('Internal server error, please try again later')
    })

    it('returns the specific message for a 404', () => {
      const err = { response: { status: 404 } }
      expect(parseApiError(err)).toBe('Not found')
    })

    it('returns a generic message when the status is not mapped', () => {
      const err = { response: { status: 502 } }
      expect(parseApiError(err)).toBe('Server error: 502')
    })
  })

  describe('when there is no response from the server', () => {
    it('returns the "no connection" message', () => {
      const err = { request: {} }
      expect(parseApiError(err)).toBe(
        'No connection: could not reach the server',
      )
    })
  })

  describe('when the error is of another kind', () => {
    it("returns the error's own message when present", () => {
      const err = { message: 'something weird' }
      expect(parseApiError(err)).toBe('something weird')
    })

    it('returns "Unknown error" when the error carries nothing', () => {
      const err = {}
      expect(parseApiError(err)).toBe('Unknown error')
    })
  })
})
