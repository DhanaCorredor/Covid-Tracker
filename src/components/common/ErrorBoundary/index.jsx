import { Component } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icon } from '@iconify/react'

function ErrorFallback({ message, onRetry }) {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-bg-dashboard p-lg">
      <div
        role="alert"
        className="w-full max-w-130 rounded-xl border border-border-default bg-neutral-0 shadow-sm p-2xl flex flex-col items-center gap-lg text-center"
      >
        <div className="flex items-center justify-center w-24 h-24 rounded-full bg-purple-50">
          <Icon icon="mdi:virus-off-outline" width={56} height={56} className="text-purple-700" />
        </div>

        <span className="inline-flex items-center gap-xs px-md py-xs rounded-full bg-status-cases-bg text-status-cases text-label-sm font-semibold">
          <Icon icon="mdi:alert-circle-outline" width={14} height={14} />
          Algo se rompió
        </span>

        <div className="flex flex-col gap-sm">
          <h2 className="text-heading-xl font-semibold text-text-primary">
            ¡Uy! Parece que perdimos <span className="text-purple-700">el rastro</span>
          </h2>
          <p className="text-body-md text-text-secondary">
            Algo no salió como esperábamos mientras cargábamos los datos. Intenta de nuevo o vuelve al inicio para seguir explorando el tracker.
          </p>
          {message && (
            <p className="text-label-sm text-text-secondary italic">
              {message}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-md w-full sm:w-auto">
          <button
            type="button"
            className="inline-flex items-center justify-center gap-xs px-lg py-sm rounded-md bg-purple-700 text-neutral-0 font-semibold hover:bg-purple-900 transition-colors cursor-pointer"
            onClick={onRetry}
          >
            <Icon icon="mdi:refresh" width={18} height={18} />
            Reintentar
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center gap-xs px-lg py-sm rounded-md border border-border-default text-text-primary font-semibold hover:bg-purple-50 transition-colors cursor-pointer"
            onClick={() => navigate('/')}
          >
            <Icon icon="mdi:home-outline" width={18} height={18} />
            Volver al inicio
          </button>
        </div>
      </div>
    </div>
  )
}

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, message: '' }
  }

  static getDerivedStateFromError(err) {
    return { hasError: true, message: err.message || 'Error inesperado' }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <ErrorFallback
          message={this.state.message}
          onRetry={() => this.setState({ hasError: false, message: '' })}
        />
      )
    }

    return this.props.children
  }
}
