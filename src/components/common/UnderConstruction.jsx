import { Icon } from '@iconify/react'
import { UNDER_CONSTRUCTION } from '../../constants/placeholders'

export const UnderConstruction = ({ name }) => {
  const { icon, iconSize, title, subtitle } = UNDER_CONSTRUCTION

  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-3 p-8 text-center">
      <Icon icon={icon} width={iconSize} height={iconSize} className="text-gray-400" />
      <h1 className="text-2xl font-semibold text-gray-700">{title}</h1>
      {name && (
        <p className="text-sm text-gray-500">{subtitle(name)}</p>
      )}
    </section>
  )
}
