import { useState } from 'react'
import {
  Activity,
  PieChart,
  Database,
  LayoutGrid,
  Folder,
  Files,
  TrendingUp,
  Globe,
  MessageSquare,
  MoreHorizontal,
} from 'lucide-react'
import './Sidebar.css'

const navItems = [
  { id: 'dashboard', label: 'Dashboard', Icon: PieChart, badge: 'orange' },
  { id: 'reports', label: 'Reports', Icon: Database, badge: 'red' },
  { id: 'apps', label: 'Apps', Icon: LayoutGrid },
  { id: 'projects', label: 'Projects', Icon: Folder },
  { id: 'files', label: 'Files', Icon: Files },
  { id: 'analytics', label: 'Analytics', Icon: TrendingUp },
  { id: 'world', label: 'World', Icon: Globe },
  { id: 'messages', label: 'Messages', Icon: MessageSquare },
]

function Sidebar() {
  const [active, setActive] = useState('apps')

  return (
    <aside className="sidebar" aria-label="Main navigation">
      <div className="sidebar__logo" aria-label="Covid Tracker">
        <Activity size={24} strokeWidth={2.2} />
      </div>

      <nav className="sidebar__nav">
        <ul>
          {navItems.map(({ id, label, Icon, badge }) => (
            <li key={id}>
              <button
                type="button"
                className={`sidebar__item ${active === id ? 'is-active' : ''}`}
                onClick={() => setActive(id)}
                aria-label={label}
                aria-current={active === id ? 'page' : undefined}
                title={label}
              >
                <Icon size={22} strokeWidth={1.8} />
                {badge && (
                  <span className={`sidebar__badge sidebar__badge--${badge}`} />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <button type="button" className="sidebar__more" aria-label="More options" title="More">
        <MoreHorizontal size={20} />
      </button>
    </aside>
  )
}

export default Sidebar
