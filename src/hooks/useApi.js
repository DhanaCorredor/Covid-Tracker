import { useState, useEffect } from 'react'
import axios from 'axios'

// Hook genérico para cualquier llamada a la API.
// asyncFn: función que recibe un AbortSignal y devuelve una promesa con datos.
// deps: dependencias del useEffect (re-ejecuta la llamada cuando cambian).
// options.skip: si true, no ejecuta la llamada (útil cuando falta un parámetro).
// options.initialData: valor inicial de data (null por defecto, [] si esperas un array).
export function useApi(asyncFn, deps = [], { skip = false, initialData = null } = {}) {
  const [data, setData]       = useState(initialData)
  const [loading, setLoading] = useState(!skip)
  const [error, setError]     = useState(null)

  useEffect(() => {
    if (skip) return // no tocamos estado; lo derivamos en el return

    const controller = new AbortController()

    async function run() {
      try {
        setLoading(true)
        setError(null)
        const result = await asyncFn(controller.signal)
        setData(result)
      } catch (err) {
        if (axios.isCancel(err)) return // request cancelado, ignorar
        if (err.response) {
          setError(`Error del servidor: ${err.response.status}`)
        } else if (err.request) {
          setError('Sin conexión: no se pudo contactar con el servidor')
        } else {
          setError(err.message || 'Error desconocido')
        }
      } finally {
        // si fue cancelado no tocamos el estado: el componente ya no lo necesita
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    run()

    return () => controller.abort()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  // Si skip=true, loading siempre es false aunque internamente quedara true por una cancelación
  return { data, loading: skip ? false : loading, error }
}
