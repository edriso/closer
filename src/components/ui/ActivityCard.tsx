import { ChevronDown, Clock, Phone, Users } from 'lucide-react'
import { useId, useState } from 'react'
import { plural } from '../../i18n/plural'
import { useI18n } from '../../i18n/useI18n'
import type { Activity, Tone } from '../../types/content'
import styles from './ActivityCard.module.css'
import { FavoriteButton } from './FavoriteButton'

interface ActivityCardProps {
  activity: Activity
  tone: Tone
  /** Show steps expanded (used when a single activity is featured). */
  expanded?: boolean
  /** Heading level for the title, so the outline stays valid on each page. */
  headingLevel?: 2 | 3
}

export function ActivityCard({
  activity,
  tone,
  expanded = false,
  headingLevel = 3,
}: ActivityCardProps) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3'
  const { t, l, lang } = useI18n()
  const [open, setOpen] = useState(expanded)
  const stepsId = useId()
  const steps = activity.steps ?? []

  return (
    <article className={styles.card} data-tone={tone}>
      <header className={styles.header}>
        <Heading className={styles.title}>{l(activity.title)}</Heading>
        <FavoriteButton id={activity.id} size="sm" />
      </header>
      <p className={styles.description}>{l(activity.description)}</p>

      <ul className={styles.meta}>
        <li>
          <Clock aria-hidden="true" />
          {plural('minute', activity.minutes, lang)}
        </li>
        {activity.modes.includes('call') && (
          <li>
            <Phone aria-hidden="true" />
            {t('worksOnCall')}
          </li>
        )}
        {!activity.modes.includes('call') && (
          <li>
            <Users aria-hidden="true" />
            {t('samePlace')}
          </li>
        )}
      </ul>

      {steps.length > 0 && (
        <div className={styles.steps}>
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls={stepsId}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? t('hideSteps') : t('showSteps')}
            <ChevronDown aria-hidden="true" />
          </button>
          <ol id={stepsId} hidden={!open} className={styles.list}>
            {steps.map((step, i) => (
              <li key={i}>{l(step)}</li>
            ))}
          </ol>
        </div>
      )}
    </article>
  )
}
