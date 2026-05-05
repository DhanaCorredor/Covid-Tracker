import { httpClient } from '../api/http.client'
import { ENDPOINTS } from '../constants/endpoints'

export async function getGlobalTotals() {
  const { data } = await httpClient.get(ENDPOINTS.ALL)
  return data
}

export async function getCountries(sortBy = 'cases') {
  const { data } = await httpClient.get(ENDPOINTS.COUNTRIES, {
    params: { sort: sortBy },
  })
  return data
}

export async function getCountry(country) {
  const { data } = await httpClient.get(ENDPOINTS.COUNTRY(country))
  return data
}

export async function getHistoricalData(country, days = 30) {
  const { data } = await httpClient.get(ENDPOINTS.HISTORICAL(country), {
    params: { lastdays: days },
  })
  return data
}

export async function getHistoricalAll(days = 30) {
  const { data } = await httpClient.get(ENDPOINTS.HISTORICAL_ALL, {
    params: { lastdays: days },
  })
  return data
}
