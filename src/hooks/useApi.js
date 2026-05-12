import { useReducer, useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import { parseApiError } from '../utils/errors'

const reducer = (state, action) => {
  switch (action.type) {
    case 'fetch/start':
      return { ...state, loading: true, error: null }
    case 'fetch/success':
      return { data: action.payload, loading: false, error: null }
    case 'fetch/error':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

export function useApi(asyncFn, deps = [], { skip = false, initialData = null } = {}) {
  const [state, dispatch] = useReducer(reducer, {
    data: initialData,
    loading: !skip,
    error: null,
  })
  const [refetchTick, setRefetchTick] = useState(0)

  useEffect(() => {
    if (skip) return

    const controller = new AbortController()

    async function run() {
      dispatch({ type: 'fetch/start' })
      try {
        const result = await asyncFn(controller.signal)
        if (!controller.signal.aborted) {
          dispatch({ type: 'fetch/success', payload: result })
        }
      } catch (err) {
        if (axios.isCancel(err)) return
        if (!controller.signal.aborted) {
          dispatch({ type: 'fetch/error', payload: parseApiError(err) })
        }
      }
    }

    run()

    return () => controller.abort()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, refetchTick])

  const refetch = useCallback(() => setRefetchTick((t) => t + 1), [])

  return {
    data: state.data,
    loading: skip ? false : state.loading,
    error: state.error,
    refetch,
  }
}
