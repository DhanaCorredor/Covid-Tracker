import { METRIC_VARIANTS } from '../../constants/metricVariants'
import { formatNumber } from '../../utils/format'

export const MetricCard = ({ title, value, variant = 'default' }) => {
  const { colorClass, iconSrc } = METRIC_VARIANTS[variant] ?? METRIC_VARIANTS.default

  return (
    <div className="relative overflow-hidden rounded-lg bg-white p-lg shadow-sm">
      <p className="text-body-md text-text-secondary">{title}</p>
      <p className={`text-display-xl font-bold ${colorClass}`}>
        {formatNumber(value)}
      </p>
      <img
        src={iconSrc}
        alt=""
        aria-hidden="true"
        className="absolute right-lg top-1/2 -translate-y-1/2 w-24 h-24 opacity-30 pointer-events-none select-none"
      />
    </div>
  )
}
