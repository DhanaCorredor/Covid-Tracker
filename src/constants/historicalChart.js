export const COUNTRIES = ['USA', 'Spain', 'Italy', 'Germany']

export const DEFAULT_HISTORY_DAYS = 1400

export const SERIES = [
<<<<<<< HEAD
  { key: 'confirmed', label: 'Confirmed', color: 'var(--color-total-active)' },
  { key: 'deaths',    label: 'Death',     color: 'var(--color-map-red-3)' },
  { key: 'recovered', label: 'Recovered', color: 'var(--color-status-recovered)' },
]

export const METRIC_FILTER_OPTIONS = [
  { value: 'all',       label: 'All metrics' },
  { value: 'confirmed', label: 'Cases' },
  { value: 'deaths',    label: 'Deaths' },
  { value: 'recovered', label: 'Recovered' },
=======
  { key: 'confirmed', label: 'Confirmed', color: '#3b82f6' },
  { key: 'deaths',    label: 'Deaths',    color: '#ef4444' },
  { key: 'recovered', label: 'Recovered', color: '#22c55e' },
]

export const METRIC_FILTER_OPTIONS = [
  { value: 'all', label: 'All metrics' },
  ...SERIES.map((s) => ({ value: s.key, label: s.label })),
>>>>>>> 09ebb51807a95f248b8f7e3064a67b0d77a05634
]
