import { useMemo } from 'react'
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
    <div className="rounded-md border border-border-default bg-neutral-0 p-sm text-body-sm shadow-md">
      <p className="mb-xs font-medium text-text-primary">{label}</p>
      {payload.map((p) => (
        <p key={p.dataKey} className="flex justify-between gap-md">
          <span style={{ color: p.color }}>{p.name}</span>
          <span className="font-medium text-text-primary">{formatCompact(p.value)}</span>
        </p>
      ))}
    </div>
  )
}

export function CountryChart({
  country,
  days = 1400,
  showTitle = true,
  metric = 'all',
  fillHeight = false,
}) {
  const { data, loading, error } = useHistoricalData(country, days)
  const series = useMemo(() => buildSeries(data?.timeline), [data])
  const visibleSeries = useMemo(
    () => (metric === 'all' ? SERIES : SERIES.filter((s) => s.key === metric)),
    [metric],
  )

  return (
    <div className={`rounded-lg bg-neutral-0 p-md shadow-sm ${fillHeight ? 'flex h-full min-h-0 flex-col' : ''}`}>
      <div className="mb-sm flex flex-col gap-sm sm:flex-row sm:items-center sm:justify-between">
        {showTitle && (
          <h3 className="text-heading-sm text-text-primary">{country}</h3>
        )}
        <ul className="m-0 flex shrink-0 list-none flex-wrap gap-md p-0 text-body-sm text-text-secondary">
          {visibleSeries.map((s) => (
            <li key={s.key} className="flex items-center gap-xs">
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

      <div className={`w-full ${fillHeight ? 'min-h-0 flex-1' : 'h-64'}`}>
        {loading && <p className="text-body-md text-text-secondary">Loading…</p>}
        {error && <p className="text-body-md text-status-cases">{error.message}</p>}
        {!loading && !error && series.length > 0 && (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={series} margin={{ top: 8, right: 12, bottom: 8, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-strong)" />
              <XAxis
                dataKey="date"
                tick={{ fontSize: 10 }}
                tickFormatter={formatTickDate}
                interval={Math.max(1, Math.floor(series.length / 6))}
                height={24}
              />
              <YAxis tick={{ fontSize: 10 }} tickFormatter={formatCompact} width={40} />
              <Tooltip content={<CustomTooltip />} />
              {visibleSeries.map((s) => (
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
