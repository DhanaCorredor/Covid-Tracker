export function formatNumber(value) {
  if (value == null) return ''
  return String(value).replace(/[.,]/g, '')
}

export function formatDate(timestamp) {
  if (timestamp == null) return ''
  const date = new Date(timestamp)
  if (Number.isNaN(date.getTime())) return ''
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
