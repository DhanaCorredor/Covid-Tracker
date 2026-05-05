import { useApi } from './useApi'
import { getCountries } from '../services/disease.service'

export function useCountries(sortBy = 'cases') {
  return useApi(
    (signal) => getCountries(sortBy, { signal }),
    [sortBy],
    { initialData: [] },
  )
}
