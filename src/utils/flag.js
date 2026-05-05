const FLAG_BASE_URL = import.meta.env.VITE_FLAG_BASE_URL

export function getFlagUrl(iso2) {
  if (!iso2) return ''
  return `${FLAG_BASE_URL}/${iso2.toLowerCase()}.png`
}
