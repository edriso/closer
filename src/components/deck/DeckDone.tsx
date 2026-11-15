import { m } from 'motion/react'
import { Shuffle } from 'lucide-react'
import { useI18n } from '../../i18n/useI18n'
import { MoonArt } from '../art/MoonArt'
import { Button, ButtonLink } from '../ui/Button'
import { Feedback } from '../ui/Feedback'
import styles from './DeckDone.module.css'

interface DeckDoneProps {
  deckKey: string
  moreHref: string
  onReshuffle: () => void
}

export function DeckDone({ deckKey, moreHref, onReshuffle }: DeckDoneProps) {
  const { t } = useI18n()
  return (
    <m.section
      className={styles.done}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <MoonArt className={styles.art} />
      <h2 className={styles.title}>{t('deckDoneTitle')}</h2>
      <p className={styles.body}>{t('deckDoneBody')}</p>
      <div className={styles.actions}>
        <Button onClick={onReshuffle} icon={<Shuffle aria-hidden="true" />}>
          {t('reshuffle')}
        </Button>
        <ButtonLink to={moreHref} variant="secondary">
          {t('otherTopics')}
        </ButtonLink>
      </div>
      <Feedback activityKey={deckKey.split('|')[0]} />
    </m.section>
  )
}
