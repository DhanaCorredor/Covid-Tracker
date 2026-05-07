import { METRIC_VARIANTS } from '../../constants/dashboardMetrics'
import { formatNumber } from '../../utils/format'

export const MetricCard = ({ title, value, variant = 'default' }) => {
  const { colorClass, iconSrc } = METRIC_VARIANTS[variant] ?? METRIC_VARIANTS.default

  return (
    <div className="relative overflow-hidden flex flex-col gap-sm rounded-sm bg-yellow-600 shadow-sm min-w-52.5 min-h-23.75">
      <p className="text-label-md px-md pt-sm">{title}</p>
      <hr className="border-t border-border-strong" />
      <p className={`text-heading-xl font-medium leading-none ${colorClass} px-md pb-sm mt-xs`}>
        {formatNumber(value)}
      </p>
      <img
        src={iconSrc}
        alt=""
        aria-hidden="true"
        className="absolute -right-6 -top-6 w-28 h-28 opacity-10 pointer-events-none select-none"
      />
    </div>
  )
}
