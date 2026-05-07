import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { useHistoricalData } from '../../hooks/useHistoricalData'

const COUNTRIES = ['USA', 'Spain', 'Italy', 'Germany']

const SERIES = [
  { key: 'confirmed', label: 'Confirmed', color: '#3b82f6' },
  { key: 'deaths',    label: 'Death',     color: '#ef4444' },
  { key: 'recovered', label: 'Recovered', color: '#22c55e' },
]

// La API devuelve timeline = { cases: {date: n}, deaths: {...}, recovered: {...} }
// Recharts necesita un array: [{ date, confirmed, deaths, recovered }, ...]
function buildSeries(timeline) {
  if (!timeline) return []
  const dates = Object.keys(timeline.cases ?? {})
  return dates.map((date) => ({
    date,
    confirmed: timeline.cases?.[date] ?? 0,
    deaths: timeline.deaths?.[date] ?? 0,
    recovered: timeline.recovered?.[date] ?? 0,
  }))
}

function CountryChart({ country, days = 30 }) {
  const { data, loading, error } = useHistoricalData(country, days)
  const series = buildSeries(data?.timeline)

  return (
    <div className="rounded-xl bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800">{country}</h3>
        <ul className="m-0 flex list-none gap-3 p-0 text-xs text-gray-600">
          {SERIES.map((s) => (
            <li key={s.key} className="flex items-center gap-1.5">
              <span
                aria-hidden="true"
                className="inline-block h-2.5 w-2.5 rounded-full"
                style={{ background: s.color }}
              />
              {s.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="h-64 w-full min-w-[300px]">
        {loading && <p className="text-sm text-gray-500">Loading…</p>}
        {error && <p className="text-sm text-red-500">{error.message}</p>}
        {!loading && !error && series.length > 0 && (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={series} margin={{ top: 8, right: 12, bottom: 8, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 10 }}
                angle={-45}
                textAnchor="end"
                height={50}
              />
              <YAxis tick={{ fontSize: 10 }} />
              <Tooltip />
              {SERIES.map((s) => (
                <Line
                  key={s.key}
                  type="natural"
                  dataKey={s.key}
                  stroke={s.color}
                  strokeWidth={2}
                  dot={{ r: 2, fill: s.color }}
                  activeDot={{ r: 4 }}
                  isAnimationActive={false}
                  connectNulls
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  )
}

export function Tracker5() {
  return (
    <section className="w-full p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {COUNTRIES.map((country) => (
          <CountryChart key={country} country={country} />
        ))}
      </div>
    </section>
  )
}
