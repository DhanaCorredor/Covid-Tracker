import { useState } from 'react'
import { CountryChart } from '../components/common/CountryChart'
import { Select } from '../components/common/Select'
import { FilterBar } from '../components/common/FilterBar'
import { COUNTRIES, DEFAULT_METRIC, METRIC_FILTER_OPTIONS } from '../constants/historicalChart'

export function Tracker5() {
  const [metric, setMetric] = useState(DEFAULT_METRIC)

  return (
    <section className="flex h-[calc(100svh-3rem)] w-full flex-col px-md pb-md">
      <FilterBar>
        <Select
          value={metric}
          onChange={setMetric}
          options={METRIC_FILTER_OPTIONS}
          ariaLabel="Filter by metric"
          className="md:max-w-60"
        />
      </FilterBar>

      <div className="mt-sm grid min-h-0 flex-1 grid-cols-1 gap-md md:grid-cols-2">
        {COUNTRIES.map((country) => (
          <CountryChart key={country} country={country} metric={metric} fillHeight />
        ))}
      </div>
    </section>
  )
}
