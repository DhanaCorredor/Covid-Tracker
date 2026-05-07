import { useState } from 'react'
import { MetricCard } from '../components/common/MetricCard'
import { useCountry } from '../hooks/useCountry'
import { DASHBOARD_METRICS } from '../constants/dashboardMetrics'

export const Tracker1 = () => {
  const [country] = useState('Colombia')
  const { data, loading, error } = useCountry(country)

  if (error) {
    return <p className="text-status-cases">{error}</p>
  }

  return (
    <div>
      <h1 className="text-heading-xl">Tracker 1</h1>
      <div className="grid grid-cols-2 gap-xl mt-lg">
        {DASHBOARD_METRICS.map(({ key, title, variant }) => (
          <MetricCard
            key={key}
            title={title}
            value={loading ? '' : data?.[key]}
            variant={variant}
          />
        ))}
      </div>
    </div>
  )
}
