import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { useI18n } from '../../i18n/useI18n'
import type { Tone } from '../../types/content'
import styles from './List.module.css'

/** A calm, grouped list: denser and quieter than a grid of cards. */
export function List({ children, label }: { children: ReactNode; label?: string }) {
  return (
    <ul className={styles.list} aria-label={label}>
      {children}
    </ul>
  )
}

interface ListRowProps {
  to: string
  tone: Tone
  icon: ReactNode
  title: string
  /** Optional one-liner under the title. Keep it short. */
  subtitle?: string
  /** Quiet trailing text, e.g. a count. */
  meta?: string
}

export function ListRow({ to, tone, icon, title, subtitle, meta }: ListRowProps) {
  const { dir } = useI18n()
  const Chevron = dir === 'rtl' ? ChevronLeft : ChevronRight
  return (
    <li>
      <Link to={to} className={styles.row} data-tone={tone}>
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
        <span className={styles.text}>
          <span className={styles.title}>{title}</span>
          {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
        </span>
        {meta && <span className={styles.meta}>{meta}</span>}
        <Chevron className={styles.chevron} aria-hidden="true" />
      </Link>
    </li>
  )
}
