import { httpClient } from '../api/http.client'
import { ENDPOINTS } from '../constants/endpoints'

export async function getGlobalTotals({ signal } = {}) {
  const { data } = await httpClient.get(ENDPOINTS.ALL, { signal })
  return data
}

export async function getCountries(sortBy = 'cases', { signal } = {}) {
  const { data } = await httpClient.get(ENDPOINTS.COUNTRIES, {
    params: { sort: sortBy },
    signal,
  })
  return data
}

export async function getCountry(country, { signal } = {}) {
  const { data } = await httpClient.get(ENDPOINTS.COUNTRY(country), { signal })
  return data
}

export async function getHistoricalData(country, days = 30, { signal } = {}) {
  const { data } = await httpClient.get(ENDPOINTS.HISTORICAL(country), {
    params: { lastdays: days },
    signal,
  })
  return data
}
