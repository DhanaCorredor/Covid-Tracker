import { useState, useEffect } from 'react'
import { getCountry } from '../services/disease.service'

// country = nombre del país ('Spain') o código iso2 ('ES').
// Cada vez que el valor de country cambia, React vuelve a llamar a la API.
export function useCountry(country) {
  const [data, setData]       = useState(null)
  const [loading, setLoading] = useState(false) // false porque al inicio no hay país seleccionado
  const [error, setError]     = useState(null)

  useEffect(() => {
    if (!country) return // si no hay país, no hacer nada

    async function fetchData() {
      try {
        setLoading(true)
        setError(null)
        const result = await getCountry(country)
        setData(result)
      } catch (err) {
        if (err.response && err.response.status === 404) {
          setError(`País "${country}" no encontrado`)
        } else if (err.response) {
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
  }, [country]) // re-ejecuta cada vez que cambia el país seleccionado

  return { data, loading, error }
}
