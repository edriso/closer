import { RotateCcw } from 'lucide-react'
import type { ReactNode } from 'react'
import { useI18n } from '../../i18n/useI18n'
import { MoonArt } from '../art/MoonArt'
import { Button, ButtonLink } from '../ui/Button'
import { Feedback } from '../ui/Feedback'
import styles from './Game.module.css'

interface GameEndProps {
  gameKey: string
  /** e.g. "You matched on 5 of 8", or per-player scores. */
  summary: ReactNode
  onAgain: () => void
}

export function GameEnd({ gameKey, summary, onAgain }: GameEndProps) {
  const { t } = useI18n()
  return (
    <section className={`${styles.panel} ${styles.center}`}>
      <MoonArt className={styles.endArt} />
      <h2 className={styles.panelTitle}>{t('results')}</h2>
      <div className={styles.summary}>{summary}</div>
      <p className={styles.hint}>{t('gameClosing')}</p>
      <div className={styles.row}>
        <Button onClick={onAgain} icon={<RotateCcw aria-hidden="true" />}>
          {t('playAgain')}
        </Button>
        <ButtonLink to="/play" variant="secondary">
          {t('gamesBack')}
        </ButtonLink>
      </div>
      <Feedback activityKey={`play/${gameKey}`} />
    </section>
  )
}

export function Scoreboard({ scores }: { scores: [string, number][] }) {
  const { n } = useI18n()
  return (
    <dl className={styles.scoreboard}>
      {scores.map(([name, score]) => (
        <div key={name} className={styles.score}>
          <dt>{name}</dt>
          <dd>{n(score)}</dd>
        </div>
      ))}
    </dl>
  )
}
