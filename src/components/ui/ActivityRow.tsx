import { ChevronDown, Phone } from 'lucide-react'
import { plural } from '../../i18n/plural'
import { useI18n } from '../../i18n/useI18n'
import type { Activity } from '../../types/content'
import styles from './ActivityRow.module.css'
import { FavoriteButton } from './FavoriteButton'

/**
 * One activity as a quiet, expandable row: the title and duration up front,
 * with details and steps one tap away (native <details>, so it's accessible).
 */
export function ActivityRow({ activity }: { activity: Activity }) {
  const { t, l, lang } = useI18n()
  const steps = activity.steps ?? []
  const onCall = activity.modes.includes('call')
  return (
    <li className={styles.item}>
      <details className={styles.details}>
        <summary className={styles.summary}>
          <span className={styles.title}>{l(activity.title)}</span>
          <span className={styles.meta}>
            {onCall && <Phone aria-label={t('worksOnCall')} role="img" />}
            {plural('minute', activity.minutes, lang)}
          </span>
          <ChevronDown className={styles.chevron} aria-hidden="true" />
        </summary>
        <div className={styles.body}>
          <p className={styles.description}>{l(activity.description)}</p>
          {steps.length > 0 && (
            <ol className={styles.steps} aria-label={t('steps')}>
              {steps.map((step, i) => (
                <li key={i}>{l(step)}</li>
              ))}
            </ol>
          )}
          <div className={styles.footer}>
            <span className={styles.hint}>{onCall ? t('worksOnCall') : t('samePlace')}</span>
            <FavoriteButton id={activity.id} size="sm" />
          </div>
        </div>
      </details>
    </li>
  )
}
