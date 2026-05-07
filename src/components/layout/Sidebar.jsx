import { Link, NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { navItems } from '../../constants/navicon'

const itemBase =
  'grid h-11 w-11 place-items-center rounded-xl transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500'

const itemClass = ({ isActive }) =>
  `${itemBase} ${isActive ? 'bg-purple-500 text-white' : 'bg-transparent text-purple-700 hover:bg-purple-50'}`

export function Sidebar () {
  return (
    <aside
      aria-label="Main navigation"
      className="flex w-[72px] min-h-[100svh] flex-col items-center gap-1.5 bg-neutral-100 py-[18px] box-border"
    >
      <Link to="/dashboard" aria-label="Covid Tracker — go to dashboard" className="grid h-11 w-11 place-items-center">
        <img src="/images/coronavirus.png" alt="Covid Tracker" className="block h-8 w-8 object-contain" />
      </Link>

      <nav className="w-full flex-1">
        <ul className="m-0 flex list-none flex-col items-center gap-1.5 p-0">
          {navItems.map(({ label, icon, path }) => (
            <li key={path}>
              <NavLink to={path} end aria-label={label} title={label} className={itemClass}>
                <Icon icon={icon} width={22} height={22} />
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <button
        type="button"
        aria-label="More options"
        title="More"
        className="grid h-11 w-11 cursor-pointer place-items-center rounded-full border-0 bg-purple-500 text-white transition-opacity hover:opacity-90"
      >
        <Icon icon="mdi:dots-horizontal" width={20} height={20} />
      </button>
    </aside>
  )
}
