import { useState } from 'react'
import { useI18n } from '../../i18n/useI18n'
import { readJSON, writeJSON } from '../../lib/storage'
import styles from './Feedback.module.css'

type Rating = 'loved' | 'nice' | 'meh'

const options: {
  value: Rating
  emoji: string
  key: 'feedbackLoved' | 'feedbackNice' | 'feedbackMeh'
}[] = [
  { value: 'loved', emoji: '💜', key: 'feedbackLoved' },
  { value: 'nice', emoji: '🙂', key: 'feedbackNice' },
  { value: 'meh', emoji: '😐', key: 'feedbackMeh' },
]

/** "Did you enjoy this?" Stored locally only; nothing is sent anywhere. */
export function Feedback({ activityKey }: { activityKey: string }) {
  const { t } = useI18n()
  const [rating, setRating] = useState<Rating | undefined>(
    () => readJSON<Record<string, Rating>>('feedback', {})[activityKey],
  )

  const choose = (value: Rating) => {
    setRating(value)
    writeJSON('feedback', {
      ...readJSON<Record<string, Rating>>('feedback', {}),
      [activityKey]: value,
    })
  }

  return (
    <div className={styles.feedback}>
      <p className={styles.question}>{t('feedbackQuestion')}</p>
      <div className={styles.options} role="group" aria-label={t('feedbackQuestion')}>
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            className={styles.option}
            aria-pressed={rating === o.value}
            onClick={() => choose(o.value)}
          >
            <span aria-hidden="true">{o.emoji}</span>
            {t(o.key)}
          </button>
        ))}
      </div>
      <p className={styles.thanks} aria-live="polite">
        {rating ? t('feedbackThanks') : ''}
      </p>
    </div>
  )
}
