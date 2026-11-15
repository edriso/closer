import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { useI18n } from '../../i18n/useI18n'
import styles from './PageHeader.module.css'

interface PageHeaderProps {
  title: string
  lead?: string
  eyebrow?: string
  backTo?: string
  backLabel?: string
  art?: ReactNode
  tone?: string
  children?: ReactNode
  /** Align with narrow, centered content such as a question deck or game. */
  narrow?: boolean
}

export function PageHeader(props: PageHeaderProps) {
  const { title, lead, eyebrow, backTo, backLabel, art, tone, children, narrow } = props
  const { t, dir } = useI18n()
  const BackIcon = dir === 'rtl' ? ArrowRight : ArrowLeft
  return (
    <header
      className={narrow ? `${styles.header} ${styles.narrow}` : styles.header}
      data-tone={tone}
    >
      <div className={styles.text}>
        {backTo && (
          <Link to={backTo} className={styles.back}>
            <BackIcon aria-hidden="true" />
            <span>{backLabel ?? t('back')}</span>
          </Link>
        )}
        {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
        <h1 className={styles.title}>{title}</h1>
        {lead && <p className={styles.lead}>{lead}</p>}
        {children}
      </div>
      {art && <div className={styles.art}>{art}</div>}
    </header>
  )
}
