import { useState } from 'react'
import { CountryChart } from '../components/common/CountryChart'
import { Select } from '../components/common/Select'
import { FilterBar } from '../components/common/FilterBar'
import { COUNTRIES, METRIC_FILTER_OPTIONS } from '../constants/historicalChart'

export function Tracker5() {
  const [metric, setMetric] = useState('all')

  return (
    <section className="w-full px-md pb-md">
      <FilterBar>
        <Select
          value={metric}
          onChange={setMetric}
          options={METRIC_FILTER_OPTIONS}
          ariaLabel="Filtrar por métrica"
          className="md:max-w-60"
        />
      </FilterBar>

      <div className="grid grid-cols-1 gap-md md:grid-cols-2 mt-sm">
        {COUNTRIES.map((country) => (
          <CountryChart key={country} country={country} metric={metric} />
        ))}
      </div>
    </section>
  )
}
