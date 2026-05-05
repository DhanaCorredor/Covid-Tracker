import { useState } from 'react'
import { Icon } from '@iconify/react'
import './Sidebar.css'

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: 'mdi:chart-pie' },
  { id: 'reports', label: 'Reports', icon: 'mdi:server' },
  { id: 'apps', label: 'Apps', icon: 'mdi:view-grid' },
  { id: 'projects', label: 'Projects', icon: 'mdi:folder-outline' },
  { id: 'files', label: 'Files', icon: 'mdi:content-copy' },
  { id: 'analytics', label: 'Analytics', icon: 'mdi:trending-up' },
  { id: 'world', label: 'World', icon: 'mdi:earth' },
  { id: 'messages', label: 'Messages', icon: 'mdi:message-outline' },
]

function Sidebar() {
  const [active, setActive] = useState('apps')

  return (
    <aside className="sidebar" aria-label="Main navigation">
      <div className="sidebar__logo" aria-label="Covid Tracker">
        <Icon icon="mdi:virus" width={26} height={26} />
      </div>

      <nav className="sidebar__nav">
        <ul>
          {navItems.map(({ id, label, icon }) => (
            <li key={id}>
              <button
                type="button"
                className={`sidebar__item ${active === id ? 'is-active' : ''}`}
                onClick={() => setActive(id)}
                aria-label={label}
                aria-current={active === id ? 'page' : undefined}
                title={label}
              >
                <Icon icon={icon} width={22} height={22} />
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <button type="button" className="sidebar__more" aria-label="More options" title="More">
        <Icon icon="mdi:dots-horizontal" width={20} height={20} />
      </button>
    </aside>
  )
}

export default Sidebar
