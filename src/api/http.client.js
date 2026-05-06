import axios from 'axios'

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_DISEASE_API_URL,
  timeout: 10000,
})
