import { METRIC_VARIANTS } from '../../constants/dashboardMetrics'
import { formatNumber } from '../../utils/format'

export const MetricCard = ({ title, value, variant = 'default' }) => {
  const { colorClass, iconSrc } = METRIC_VARIANTS[variant] ?? METRIC_VARIANTS.default

  return (
    <div className="group relative overflow-hidden flex flex-col gap-sm rounded-sm max-h-fit bg-neutral-0 shadow-sm transition-transform duration-300 ease-out motion-safe:hover:-translate-y-xs hover:shadow-md">
      <p className="text-label-md px-md pt-md">{title}</p>
      <hr className="border-t border-border-strong" />
      <p className={`text-heading-xl font-medium leading-none ${colorClass} px-md pb-md mt-xs`}>
        {formatNumber(value)}
      </p>
      <img
        src={iconSrc}
        alt=""
        aria-hidden="true"
        className="metric-icon-spin absolute -right-6 -top-6 w-28 h-28 opacity-10 pointer-events-none select-none transform-gpu"
      />
    </div>
  )
}