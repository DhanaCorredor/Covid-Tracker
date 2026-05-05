import { useGlobalTotals } from './hooks/useGlobalTotals'
import { useCountries } from './hooks/useCountries'

// ARCHIVO TEMPORAL DE VERIFICACIÓN — borrar este contenido una vez confirmado que funciona.
// Abre la consola del navegador (F12 → Console) para ver los datos.
function App() {
  const totals    = useGlobalTotals()
  const countries = useCountries()

  console.log('TOTALES MUNDIALES:', totals)
  console.log('PAÍSES (primeros 3):', countries.data?.slice(0, 3))

  return (
    <div style={{ padding: '2rem', fontFamily: 'monospace' }}>
      <h1>COVID Tracker — verificación de API</h1>
      <p>Abre la consola del navegador (F12) para ver los datos.</p>

      <h2>Totales mundiales</h2>
      {totals.loading && <p>Cargando...</p>}
      {totals.error   && <p style={{ color: 'red' }}>Error: {totals.error}</p>}
      {totals.data    && (
        <ul>
          <li>Casos: {totals.data.cases?.toLocaleString()}</li>
          <li>Muertes: {totals.data.deaths?.toLocaleString()}</li>
          <li>Recuperados: {totals.data.recovered?.toLocaleString()}</li>
        </ul>
      )}

      <h2>Top 3 países</h2>
      {countries.loading && <p>Cargando...</p>}
      {countries.error   && <p style={{ color: 'red' }}>Error: {countries.error}</p>}
      {countries.data.slice(0, 3).map((c) => (
        <p key={c.country}>
          {c.country}: {c.cases?.toLocaleString()} casos
        </p>
      ))}
    </div>
  )
}

export default App
