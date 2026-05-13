import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Tracker5 } from '../pages/Tracker5'


vi.mock('../components/common/CountryChart', () => ({
  CountryChart: ({ country, metric }) => (
    <div data-testid="chart" data-country={country} data-metric={metric} />
  ),
}))

describe('Tracker5 — filtro de métrica', () => {
  it('al cambiar el filtro, todas las gráficas reciben la métrica seleccionada', async () => {
    const user = userEvent.setup()
    render(<Tracker5 />)

    const filtro = screen.getByLabelText('Filter by metric')

    await user.selectOptions(filtro, 'confirmed')

    const charts = screen.getAllByTestId('chart')
    expect(charts).toHaveLength(4)
    charts.forEach((chart) => {
      expect(chart.dataset.metric).toBe('confirmed')
    })
  })
})
