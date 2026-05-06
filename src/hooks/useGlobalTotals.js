import { useApi } from './useApi'
import { getGlobalTotals } from '../services/disease.service'

export function useGlobalTotals() {
  return useApi(
    (signal) => getGlobalTotals({ signal }),
    [],
  )
}
