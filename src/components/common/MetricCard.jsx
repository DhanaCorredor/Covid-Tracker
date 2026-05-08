import { METRIC_VARIANTS } from '../../constants/dashboardMetrics'
import { formatNumber } from '../../utils/format'

export const MetricCard = ({ title, value, variant = 'default' }) => {
  const { colorClass, iconSrc } = METRIC_VARIANTS[variant] ?? METRIC_VARIANTS.default

  return (
    <div className="relative overflow-hidden flex flex-col gap-md rounded-lg bg-white shadow-sm">
      <p className="text-heading-sm px-lg pt-lg">{title}</p>
      <hr className="border-t border-border-strong" />
      <p className={`text-display-xl font-bold leading-none ${colorClass} px-lg pb-lg`}>
        {formatNumber(value)}
      </p>
      <img
        src={iconSrc}
        alt=""
        aria-hidden="true"
        className="absolute -right-7 -top-7 w-33 h-33 opacity-10 pointer-events-none select-none"
      />
    </div>
  )
}
