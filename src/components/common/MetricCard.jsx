import { METRIC_VARIANTS } from '../../constants/dashboardMetrics'
import { formatNumber } from '../../utils/format'

export const MetricCard = ({ title, value, variant = 'default' }) => {
  const { colorClass, iconSrc } = METRIC_VARIANTS[variant] ?? METRIC_VARIANTS.default

  return (
<<<<<<< HEAD
    <div className="relative overflow-hidden flex flex-col gap-md rounded-lg bg-white shadow-sm">
      <p className="text-heading-sm px-lg pt-lg">{title}</p>
      <hr className="border-t border-border-strong" />
      <p className={`text-display-xl font-bold leading-none ${colorClass} px-lg pb-lg`}>
=======
    <div className="group relative overflow-hidden flex flex-col gap-sm rounded-sm bg-neutral-0 shadow-sm min-w-52.5 min-h-23.75 transition-transform duration-300 ease-out motion-safe:hover:-translate-y-xs hover:shadow-md">
      <p className="text-label-md px-md pt-sm">{title}</p>
      <hr className="border-t border-border-strong" />
      <p className={`text-heading-xl font-medium leading-none ${colorClass} px-md pb-sm mt-xs`}>
>>>>>>> 40784e514065816877ea5fc4332eafc7acc27f95
        {formatNumber(value)}
      </p>
      <img
        src={iconSrc}
        alt=""
        aria-hidden="true"
<<<<<<< HEAD
        className="absolute -right-7 -top-7 w-33 h-33 opacity-10 pointer-events-none select-none"
=======
        className="metric-icon-spin absolute -right-6 -top-6 w-28 h-28 opacity-10 pointer-events-none select-none transform-gpu"
>>>>>>> 40784e514065816877ea5fc4332eafc7acc27f95
      />
    </div>
  )
}
