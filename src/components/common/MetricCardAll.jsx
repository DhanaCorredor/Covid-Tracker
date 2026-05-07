import { METRIC_VARIANTS } from '../../constants/dashboardMetrics'
import { formatNumber } from '../../utils/format'

export const MetricCardAll = ({ title, value, variant = 'default' }) => {
  const { iconSrc } = METRIC_VARIANTS[variant] ?? METRIC_VARIANTS.default

  return (
    <div className="flex items-center gap-md rounded-lg bg-white p-md shadow-sm">
      <img
        src={iconSrc}
        alt=""
        aria-hidden="true"
        className="w-11 h-11 shrink-0 select-none pointer-events-none"
      />
      <div className="flex flex-col">
        <p className="text-body-sm text-text-secondary">{title}</p>
        <p className="text-heading-md font-bold text-text-primary leading-none">
          {formatNumber(value)}
        </p>
      </div>
    </div>
  )
}
