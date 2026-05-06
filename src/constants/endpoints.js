export const ENDPOINTS = {
  ALL: '/all',
  COUNTRIES: '/countries',
  COUNTRY: (name) => `/countries/${name}`,
  HISTORICAL: (name) => `/historical/${name}`,
}