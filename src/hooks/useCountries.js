import { useState, useEffect } from 'react'
import { getCountries } from '../services/disease.service'

// sortBy controla cómo viene ordenado el array de la API.
// Por defecto 'cases', pero puede ser 'deaths', 'recovered' o 'active'.
export function useCountries(sortBy = 'cases') {
  const [data, setData]       = useState([])    // [] = array vacío mientras carga
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        setError(null)
        const result = await getCountries(sortBy)
        setData(result)
      } catch (err) {
        if (err.response) {
          setError(`Error del servidor: ${err.response.status}`)
        } else if (err.request) {
          setError('Sin conexión: no se pudo contactar con el servidor')
        } else {
          setError(err.message || 'Error desconocido')
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [sortBy]) // re-ejecuta si alguien cambia el criterio de ordenación

  return { data, loading, error }
}
