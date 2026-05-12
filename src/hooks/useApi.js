import { useReducer, useEffect } from 'react'
import axios from 'axios'
import { parseApiError } from '../utils/errors'

// Hook genérico para cualquier llamada a la API.
// asyncFn: función que recibe un AbortSignal y devuelve una promesa con datos.
// deps: dependencias del useEffect (re-ejecuta la llamada cuando cambian).
// options.skip: si true, no ejecuta la llamada (útil cuando falta un parámetro).
// options.initialData: valor inicial de data (null por defecto, [] si esperas un array).

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

  useEffect(() => {
    if (skip) return // no tocamos estado; lo derivamos en el return

    const controller = new AbortController()

    async function run() {
      dispatch({ type: 'fetch/start' })
      try {
        const result = await asyncFn(controller.signal)
        if (!controller.signal.aborted) {
          dispatch({ type: 'fetch/success', payload: result })
        }
      } catch (err) {
        if (axios.isCancel(err)) return // request cancelado, ignorar
        if (!controller.signal.aborted) {
          dispatch({ type: 'fetch/error', payload: parseApiError(err) })
        }
      }
    }

    run()

    return () => controller.abort()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  // Si skip=true, loading siempre es false aunque internamente quedara true por una cancelación
  return {
    data: state.data,
    loading: skip ? false : state.loading,
    error: state.error,
  }
}
