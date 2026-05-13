export const COUNTRIES = ['USA', 'Spain', 'Italy', 'Germany']

export const DEFAULT_HISTORY_DAYS = 1400

export const SERIES = [
  { key: 'confirmed', label: 'Confirmed', color: '#3b82f6' },
  { key: 'deaths',    label: 'Deaths',    color: '#ef4444' },
  { key: 'recovered', label: 'Recovered', color: '#22c55e' },
]

export const DEFAULT_METRIC = 'all'

export const METRIC_FILTER_OPTIONS = [
  { value: DEFAULT_METRIC, label: 'All metrics' },
  ...SERIES.map((s) => ({ value: s.key, label: s.label })),
]
