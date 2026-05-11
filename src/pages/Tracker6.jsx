import { useState } from 'react'
import { WorldMap } from '../components/common/WorldMap'
import { MetricCard } from '../components/common/MetricCard'
import { useCountries } from '../hooks/useCountries'
import { useCountry } from '../hooks/useCountry'
import { TRACKER6_METRICS } from '../constants/dashboardMetrics'

// Bucketea log10(cases) en 5 tramos → 5 tonos de rojo.
// Log evita que USA/India aplasten el resto del rango.
const RED_SHADES = [
  'var(--color-map-red-1)',
  'var(--color-map-red-2)',
  'var(--color-map-red-3)',
  'var(--color-map-red-4)',
  'var(--color-map-red-5)',
]
function casesToRed(cases) {
  if (!cases || cases < 1) return RED_SHADES[0]
  const t = Math.min(Math.log10(cases) / 8, 1) // 10^8 ≈ 100M como tope
  const idx = Math.min(Math.floor(t * RED_SHADES.length), RED_SHADES.length - 1)
  return RED_SHADES[idx]
}

const CountryTooltipRich = ({ datum }) => (
  <div className="flex flex-col gap-xs min-w-40">
    <div className="flex items-center gap-sm">
      <img src={datum.countryInfo?.flag} alt="" className="w-5 h-auto rounded-sm" />
      <span className="text-label-md">{datum.country}</span>
    </div>
    <span>Cases: {datum.cases}</span>
    <span>Death: {datum.deaths}</span>
    <span>Active: {datum.active}</span>
    <span>Recovered: {datum.recovered}</span>
  </div>
)

export const Tracker6 = () => {
  const [selectedCountry, setSelectedCountry] = useState('USA')
  const { data: countries } = useCountries()
  const { data: countryData, loading } = useCountry(selectedCountry)

  return (
    <div className="flex gap-lg">
      {/* Columna central: mapa */}
      <div className="flex-1 min-h-105 bg-neutral-0 rounded-sm shadow-sm">
        <WorldMap
          data={countries ?? []}
          title="World"
          showTitle
          enableZoom={false}
          getFill={(_, datum) => casesToRed(datum?.cases)}
          tooltipContent={(c) => <CountryTooltipRich datum={c} />}
          onCountryClick={(c) => setSelectedCountry(c.country)}
        />
      </div>

      {/* Columna derecha: header + 8 cards */}
      <div className="w-80 flex flex-col gap-md">
        <div className="flex items-center gap-sm">
          <img
            src={countryData?.countryInfo?.flag}
            alt=""
            className="w-8 h-auto rounded-sm"
          />
          <h2 className="text-heading-lg text-text-primary">{selectedCountry}</h2>
        </div>

        <div className="grid grid-cols-2 gap-md">
          {TRACKER6_METRICS.map(({ key, title, variant }) => (
            <MetricCard
              key={key}
              title={title}
              value={loading ? '' : countryData?.[key]}
              variant={variant}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
