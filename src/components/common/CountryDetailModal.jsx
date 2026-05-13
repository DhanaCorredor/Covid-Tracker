import { Modal } from './Modal'
import { CountryChart } from './CountryChart'
import { ErrorState } from './ErrorState'
import { useCountry } from '../../hooks/useCountry'
import { formatNumber } from '../../utils/format'

const CHIP_VARIANTS = {
  confirmed: { text: 'text-status-active',    bg: 'bg-status-active-bg' },
  deaths:    { text: 'text-status-cases',     bg: 'bg-status-cases-bg' },
  recovered: { text: 'text-status-recovered', bg: 'bg-status-recovered-bg' },
}

const StatChip = ({ label, value, variant }) => {
  const { text, bg } = CHIP_VARIANTS[variant]
  return (
    <div className={`flex flex-col gap-xs rounded-md ${bg} p-md`}>
      <span className="text-label-sm text-text-secondary">{label}</span>
      <span className={`text-heading-md ${text}`}>
        {formatNumber(value ?? 0)}
      </span>
    </div>
  )
}

const StatColumn = ({ title, data, loading }) => {
  const val = (key) => (loading ? 0 : data?.[key] ?? 0)
  return (
    <div className="flex flex-col gap-sm">
      <h3 className="text-heading-sm text-text-primary">{title}</h3>
      <StatChip label="Confirmed" value={val('cases')}     variant="confirmed" />
      <StatChip label="Deaths"    value={val('deaths')}    variant="deaths" />
      <StatChip label="Recovered" value={val('recovered')} variant="recovered" />
    </div>
  )
}

export const CountryDetailModal = ({ country, isOpen, onClose }) => {
  const { data, loading, error, refetch } = useCountry(isOpen ? country : null)

  const todayData = {
    cases:     data?.todayCases,
    deaths:    data?.todayDeaths,
    recovered: data?.todayRecovered,
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={country ?? ''}>
      <div className="px-lg py-md flex flex-col gap-sm">
        {error ? (
          <ErrorState message={error} onRetry={refetch} />
        ) : (
          <>
            <CountryChart country={country} days={1400} showTitle={false} />
            <div className="grid grid-cols-2 gap-lg">
              <StatColumn title="New"   data={todayData} loading={loading} />
              <StatColumn title="Total" data={data}      loading={loading} />
            </div>
          </>
        )}
      </div>
    </Modal>
  )
}
