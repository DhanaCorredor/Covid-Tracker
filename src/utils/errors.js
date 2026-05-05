const STATUS_MESSAGES = {
  400: 'Solicitud incorrecta',
  404: 'No encontrado',
  429: 'Demasiadas peticiones, espera un momento',
  500: 'Error interno del servidor, intenta más tarde',
  503: 'Servicio temporalmente no disponible',
}

export function parseApiError(err) {
  if (err.response) {
    return STATUS_MESSAGES[err.response.status] ?? `Error del servidor: ${err.response.status}`
  }
  if (err.request) {
    return 'Sin conexión: no se pudo contactar con el servidor'
  }
  return err.message || 'Error desconocido'
}
