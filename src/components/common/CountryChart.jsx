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
import { SERIES } from '../../constants/historicalChart'

const compactFormatter = new Intl.NumberFormat('en', {
  notation: 'compact',
  maximumFractionDigits: 1,
})
const formatCompact = (n) => compactFormatter.format(n ?? 0)

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
function formatTickDate(d) {
  const [m, , y] = d.split('/')
  return `${MONTHS[Number(m) - 1]} '${y}`
}

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

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-2 text-xs shadow-md">
      <p className="mb-1 font-medium text-gray-700">{label}</p>
      {payload.map((p) => (
        <p key={p.dataKey} className="flex justify-between gap-3">
          <span style={{ color: p.color }}>{p.name}</span>
          <span className="font-medium text-gray-800">{formatCompact(p.value)}</span>
        </p>
      ))}
    </div>
  )
}

export function CountryChart({ country, days = 1400 }) {
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
                tickFormatter={formatTickDate}
                interval={Math.max(1, Math.floor(series.length / 6))}
                height={24}
              />
              <YAxis tick={{ fontSize: 10 }} tickFormatter={formatCompact} width={40} />
              <Tooltip content={<CustomTooltip />} />
              {SERIES.map((s) => (
                <Line
                  key={s.key}
                  type="natural"
                  dataKey={s.key}
                  name={s.label}
                  stroke={s.color}
                  strokeWidth={1.5}
                  dot={false}
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
