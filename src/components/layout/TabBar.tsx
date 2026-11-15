import { House } from 'lucide-react'
import { NavLink } from 'react-router'
import { useI18n } from '../../i18n/useI18n'
import { sections } from './sections'
import styles from './TabBar.module.css'

/** App-style bottom navigation, shown on small screens only. */
export function TabBar() {
  const { t } = useI18n()
  const items = [
    { to: '/', label: t('navHome'), Icon: House, end: true },
    ...sections.map((s) => ({ to: `/${s.id}`, label: t(s.titleKey), Icon: s.icon, end: false })),
  ]
  return (
    <nav aria-label={t('navMain')} className={styles.tabbar}>
      {items.map(({ to, label, Icon, end }) => (
        <NavLink key={to} to={to} end={end} className={styles.tab}>
          <Icon aria-hidden="true" />
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  )
}
