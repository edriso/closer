import { RotateCcw, UserPen } from 'lucide-react'
import type { ReactNode } from 'react'
import { useFocusOnMount } from '../../hooks/useFocusOnMount'
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
  /** Go back to the "Who's playing?" step. */
  onChangeNames: () => void
}

export function GameEnd({ gameKey, summary, onAgain, onChangeNames }: GameEndProps) {
  const { t } = useI18n()
  const heading = useFocusOnMount<HTMLHeadingElement>()
  return (
    <section className={`${styles.panel} ${styles.center}`}>
      <MoonArt className={styles.endArt} />
      <h2 ref={heading} tabIndex={-1} className={styles.panelTitle}>
        {t('results')}
      </h2>
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
      <Button
        variant="ghost"
        size="sm"
        onClick={onChangeNames}
        icon={<UserPen aria-hidden="true" />}
      >
        {t('changeNames')}
      </Button>
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
