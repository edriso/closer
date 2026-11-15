import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { useI18n } from '../../i18n/useI18n'
import styles from './PageHeader.module.css'

interface PageHeaderProps {
  title: string
  lead?: string
  backTo?: string
  backLabel?: string
  /** One quiet action shown opposite the back link, e.g. an "Options" toggle. */
  action?: ReactNode
  art?: ReactNode
  tone?: string
  children?: ReactNode
}

export function PageHeader(props: PageHeaderProps) {
  const { title, lead, backTo, backLabel, action, art, tone, children } = props
  const { t, dir } = useI18n()
  const BackIcon = dir === 'rtl' ? ArrowRight : ArrowLeft
  return (
    <header className={styles.header} data-tone={tone}>
      {(backTo || action) && (
        <div className={styles.topRow}>
          {backTo && (
            <Link to={backTo} className={styles.back}>
              <BackIcon aria-hidden="true" />
              <span>{backLabel ?? t('back')}</span>
            </Link>
          )}
          {action && <div className={styles.action}>{action}</div>}
        </div>
      )}
      <div className={styles.main}>
        <div className={styles.text}>
          <h1 className={styles.title}>{title}</h1>
          {lead && <p className={styles.lead}>{lead}</p>}
          {children}
        </div>
        {art && <div className={styles.art}>{art}</div>}
      </div>
    </header>
  )
}
