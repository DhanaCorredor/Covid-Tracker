import { useGlobalTotals } from "../../../hooks/useGlobalTotals";
import { useCountries } from "../../../hooks/useCountries";
import { useCountry } from "../../../hooks/useCountry";
import { useHistoricalData } from "../../../hooks/useHistoricalData";

function Row({ label, state }) {
  if (state.loading)
    return (
      <tr>
        <td>{label}</td>
        <td>⏳ cargando...</td>
      </tr>
    );
  if (state.error)
    return (
      <tr>
        <td>{label}</td>
        <td style={{ color: "red" }}>❌ {state.error}</td>
      </tr>
    );
  return (
    <tr>
      <td>{label}</td>
      <td style={{ color: "green" }}>✅ OK</td>
    </tr>
  );
}

// Componente temporal — borrar una vez verificado que todos los endpoints funcionan.
export function ApiTest() {
  const globales = useGlobalTotals();
  const paises = useCountries();
  const spain = useCountry("Spain");
  const historico = useHistoricalData("Spain", 7);

  return (
    <div
      style={{
        padding: "1.5rem",
        fontFamily: "monospace",
        fontSize: "0.85rem",
      }}
    >
      <h2 style={{ marginBottom: "1rem" }}>🔌 Verificación de endpoints</h2>

      <table
        border="1"
        cellPadding="8"
        style={{ borderCollapse: "collapse", marginBottom: "2rem" }}
      >
        <thead>
          <tr>
            <th>Endpoint</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <Row label="GET /all (totales mundiales)" state={globales} />
          <Row label="GET /countries (lista de países)" state={paises} />
          <Row label="GET /countries/Spain (un país)" state={spain} />
          <Row label="GET /historical/Spain?lastdays=7" state={historico} />
        </tbody>
      </table>

      {globales.data && (
        <section>
          <h3>Totales mundiales</h3>
          <ul>
            <li>Casos: {globales.data.cases?.toLocaleString()}</li>
            <li>Muertes: {globales.data.deaths?.toLocaleString()}</li>
            <li>Recuperados: {globales.data.recovered?.toLocaleString()}</li>
            <li>Activos: {globales.data.active?.toLocaleString()}</li>
          </ul>
        </section>
      )}

      {paises.data.length > 0 && (
        <section>
          <h3>Top 3 países (ordenados por casos)</h3>
          {paises.data.slice(0, 3).map((c) => (
            <div
              key={c.country}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "0.25rem",
              }}
            >
              <img src={c.countryInfo?.flag} alt={c.country} width={24} />
              <span>
                {c.country}: {c.cases?.toLocaleString()} casos
              </span>
            </div>
          ))}
        </section>
      )}

      {spain.data && (
        <section>
          <h3>Spain (datos del país)</h3>
          <ul>
            <li>Casos: {spain.data.cases?.toLocaleString()}</li>
            <li>Muertes: {spain.data.deaths?.toLocaleString()}</li>
            <li>Recuperados: {spain.data.recovered?.toLocaleString()}</li>
          </ul>
        </section>
      )}

      {historico.data && (
        <section>
          <h3>Spain histórico (últimos 7 días) — primeras 3 entradas</h3>
          <ul>
            {Object.entries(historico.data.timeline?.cases ?? {})
              .slice(0, 3)
              .map(([fecha, valor]) => (
                <li key={fecha}>
                  {fecha}: {valor?.toLocaleString()} casos
                </li>
              ))}
          </ul>
        </section>
      )}
    </div>
  );
}
