import { Component } from 'react'

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
        <div className="flex flex-col items-center justify-center h-screen gap-lg">
          <p className="text-heading-md font-semibold text-status-cases">Algo salió mal</p>
          <p className="text-body-md text-neutral-500">{this.state.message}</p>
          <button
            className="px-lg py-sm bg-purple-500 text-neutral-0 rounded-md"
            onClick={() => this.setState({ hasError: false, message: '' })}
          >
            Reintentar
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
