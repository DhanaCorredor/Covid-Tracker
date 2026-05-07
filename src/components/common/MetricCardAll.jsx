import { METRIC_VARIANTS } from '../../constants/dashboardMetrics'
import { formatNumber } from '../../utils/format'

export const MetricCardAll = ({ title, value, variant = 'default' }) => {
  const { iconSrc } = METRIC_VARIANTS[variant] ?? METRIC_VARIANTS.default

  return (
    <div className="flex items-center gap-xs bg-neutral-0 p-md shadow-sm">
      <img
        src={iconSrc}
        alt=""
        aria-hidden="true"
        className="w-9 h-9 shrink-0 select-none pointer-events-none"
      />
      <div className="flex flex-col gap-xs">
        <p className="text-body-sm text-text-secondary">{title}</p>
        <p className="text-heading-lg font-medium text-text-primary leading-none">
          {formatNumber(value)}
        </p>
      </div>
    </div>
  )
}
