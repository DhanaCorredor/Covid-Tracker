import { useApi } from './useApi'
import { getCountry } from '../services/disease.service'

export function useCountry(country) {
  return useApi(
    (signal) => getCountry(country, { signal }),
    [country],
    { skip: !country },
  )
}
