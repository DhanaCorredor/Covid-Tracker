import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Tracker5 } from '../pages/Tracker5'

// Mockeamos CountryChart para que el test no dependa
// de la API ni de la librería de gráficas (recharts).
// El mock pinta un <div> con la métrica y el país que recibe,
// para que desde el test podamos comprobar qué props le llegaron.
vi.mock('../components/common/CountryChart', () => ({
  CountryChart: ({ country, metric }) => (
    <div data-testid="chart" data-country={country} data-metric={metric} />
  ),
}))

describe('Tracker5 — filtro de métrica', () => {
  it('al cambiar el filtro, todas las gráficas reciben la métrica seleccionada', async () => {
    const user = userEvent.setup()
    render(<Tracker5 />)

    // 1) Buscamos el <select> por su aria-label
    const filtro = screen.getByLabelText('Filter by metric')

    // 2) Simulamos que el usuario selecciona "Cases"
    //    (su value en METRIC_FILTER_OPTIONS es 'confirmed')
    await user.selectOptions(filtro, 'confirmed')

    // 3) Comprobamos que las 4 gráficas (una por país) recibieron metric="confirmed"
    const charts = screen.getAllByTestId('chart')
    expect(charts).toHaveLength(4)
    charts.forEach((chart) => {
      expect(chart.dataset.metric).toBe('confirmed')
    })
  })
})
