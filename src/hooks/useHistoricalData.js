import { useApi } from './useApi'
import { getHistoricalData } from '../services/disease.service'

export function useHistoricalData(country, days = 30) {
  return useApi(
    (signal) => getHistoricalData(country, days, { signal }),
    [country, days],
    { skip: !country },
  )
}
