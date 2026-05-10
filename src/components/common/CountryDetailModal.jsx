import { Modal } from './Modal'
import { CountryChart } from './CountryChart'
import { useCountry } from '../../hooks/useCountry'
import { formatNumber } from '../../utils/format'

const CHIP_VARIANTS = {
  confirmed: 'text-status-cases',
  deaths: 'text-status-death',
  recovered: 'text-status-recovered',
}

const StatChip = ({ label, value, variant }) => (
  <div className="flex flex-col gap-xs rounded-md bg-neutral-50 p-md">
    <span className="text-label-sm text-text-secondary">{label}</span>
    <span className={`text-heading-md ${CHIP_VARIANTS[variant]}`}>
      {formatNumber(value ?? 0)}
    </span>
  </div>
)

const StatColumn = ({ title, confirmed, deaths, recovered }) => (
  <div className="flex flex-col gap-md">
    <h3 className="text-heading-sm text-text-primary">{title}</h3>
    <StatChip label="Confirmed" value={confirmed} variant="confirmed" />
    <StatChip label="Deaths" value={deaths} variant="deaths" />
    <StatChip label="Recovered" value={recovered} variant="recovered" />
  </div>
)

export const CountryDetailModal = ({ country, isOpen, onClose }) => {
  const { data, loading, error } = useCountry(isOpen ? country : null)

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={country ?? ''}>
      <div className="p-lg flex flex-col gap-lg">
        <CountryChart country={country} days={1400} showTitle={false} />

        {error && <p className="text-status-cases text-body-sm">{error}</p>}

        <div className="grid grid-cols-2 gap-lg">
          <StatColumn
            title="New"
            confirmed={loading ? 0 : data?.todayCases}
            deaths={loading ? 0 : data?.todayDeaths}
            recovered={loading ? 0 : data?.todayRecovered}
          />
          <StatColumn
            title="Total"
            confirmed={loading ? 0 : data?.cases}
            deaths={loading ? 0 : data?.deaths}
            recovered={loading ? 0 : data?.recovered}
          />
        </div>
      </div>
    </Modal>
  )
}
