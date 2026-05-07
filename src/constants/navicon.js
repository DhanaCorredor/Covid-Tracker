/**
 * @typedef {Object} NavItem
 * @property {string} label  Texto accesible del item (aria-label/title).
 * @property {string} icon   ID de Iconify (ej. "mdi:chart-pie").
 * @property {string} path   Ruta absoluta de React Router.
 */

/** @type {NavItem[]} */
export const navItems = [
  { label: 'Dashboard', icon: 'mdi:chart-pie',       path: '/dashboard' },
  { label: 'Reports',   icon: 'mdi:server',          path: '/dashboard/reports' },
  { label: 'Apps',      icon: 'mdi:view-grid',       path: '/dashboard/apps' },
  { label: 'Projects',  icon: 'mdi:folder-outline',  path: '/dashboard/projects' },
  { label: 'Files',     icon: 'mdi:content-copy',    path: '/dashboard/files' },
  { label: 'Analytics', icon: 'mdi:trending-up',     path: '/dashboard/analytics' },
  { label: 'World',     icon: 'mdi:earth',           path: '/dashboard/world' },
  { label: 'Messages',  icon: 'mdi:message-outline', path: '/dashboard/messages' },
]
