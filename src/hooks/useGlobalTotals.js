import { useState, useEffect } from 'react'
import { getGlobalTotals } from '../services/disease.service'

export function useGlobalTotals() {
  const [data, setData]       = useState(null)  // null = todavía no hay datos
  const [loading, setLoading] = useState(true)  // true = empieza cargando
  const [error, setError]     = useState(null)  // null = sin error

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        setError(null)           // limpia cualquier error anterior
        const result = await getGlobalTotals()
        setData(result)
      } catch (err) {
        if (err.response) {
          // El servidor respondió con un código de error (4xx, 5xx)
          setError(`Error del servidor: ${err.response.status}`)
        } else if (err.request) {
          // La petición salió pero no llegó respuesta (sin internet, servidor caído)
          setError('Sin conexión: no se pudo contactar con el servidor')
        } else {
          // Otro tipo de error (bug en el código)
          setError(err.message || 'Error desconocido')
        }
      } finally {
        // finally se ejecuta SIEMPRE, haya error o no.
        // Sin esto, el spinner nunca desaparecería si hay un error.
        setLoading(false)
      }
    }

    fetchData()
  }, []) // [] = ejecutar solo una vez, cuando el componente aparece en pantalla

  return { data, loading, error }
}
