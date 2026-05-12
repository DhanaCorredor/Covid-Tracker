export const COUNTRIES = ['USA', 'Spain', 'Italy', 'Germany']

export const SERIES = [
  { key: 'confirmed', label: 'Confirmed', color: 'var(--color-total-active)' },
  { key: 'deaths',    label: 'Death',     color: 'var(--color-map-red-3)' },
  { key: 'recovered', label: 'Recovered', color: 'var(--color-status-recovered)' },
]

export const METRIC_FILTER_OPTIONS = [
  { value: 'all',       label: 'All metrics' },
  { value: 'confirmed', label: 'Cases' },
  { value: 'deaths',    label: 'Deaths' },
  { value: 'recovered', label: 'Recovered' },
]
