const STATUS_MESSAGES = {
  400: 'Bad request',
  404: 'Not found',
  429: 'Too many requests, please wait a moment',
  500: 'Internal server error, please try again later',
  503: 'Service temporarily unavailable',
}

export function parseApiError(err) {
  if (err.response) {
    return STATUS_MESSAGES[err.response.status] ?? `Server error: ${err.response.status}`
  }
  if (err.request) {
    return 'No connection: could not reach the server'
  }
  return err.message || 'Unknown error'
}
