import { useState, useEffect } from 'react'
import { getHistoricalData } from '../services/disease.service'

// country = nombre del país ('Spain') o 'all' para datos mundiales.
// days = número de días hacia atrás (30 por defecto).
export function useHistoricalData(country, days = 30) {
  const [data, setData]       = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState(null)

  useEffect(() => {
    if (!country) return // si no hay país, no hacer nada

    async function fetchData() {
      try {
        setLoading(true)
        setError(null)
        const result = await getHistoricalData(country, days)
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
  }, [country, days]) // re-ejecuta si cambia el país o el número de días

  return { data, loading, error }
}
