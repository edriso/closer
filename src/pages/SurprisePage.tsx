import { AnimatePresence, m } from 'motion/react'
import { ArrowLeft, ArrowRight, Shuffle } from 'lucide-react'
import { useState, type ReactNode } from 'react'
import { ActivityCard } from '../components/ui/ActivityCard'
import { Button, ButtonLink } from '../components/ui/Button'
import { FavoriteButton } from '../components/ui/FavoriteButton'
import { PageHeader } from '../components/ui/PageHeader'
import {
  activities,
  allTopics,
  getActivityCategory,
  getQuestion,
  wouldYouRather,
  type QuestionRef,
} from '../content'
import { useI18n } from '../i18n/useI18n'
import { takeFromDeck } from '../lib/deck'
import { pickRandom } from '../lib/random'
import type { Activity, WouldYouRatherItem } from '../types/content'
import styles from './SurprisePage.module.css'

type Surprise =
  | { kind: 'question'; ref: QuestionRef }
  | { kind: 'wyr'; item: WouldYouRatherItem }
  | { kind: 'moment'; activity: Activity }

const questionIds = allTopics.filter((t) => !t.ordered).flatMap((t) => t.questions.map((q) => q.id))

/**
 * Weighted pick: mostly questions, sometimes a moment or a quick "would you rather".
 * `draw` returns one id from a pool; the first render uses a pure random pick
 * (render must stay side-effect free), and clicks walk the no-repeat decks.
 */
type Draw = (deckKey: string, ids: string[]) => string

const fromDeck: Draw = (deckKey, ids) => takeFromDeck(deckKey, ids, 1)[0]
const atRandom: Draw = (_deckKey, ids) => pickRandom(ids)

function nextSurprise(draw: Draw = fromDeck): Surprise {
  const roll = Math.random()
  if (roll < 0.55) {
    const id = draw('surprise/questions', questionIds)
    return { kind: 'question', ref: getQuestion(id)! }
  }
  if (roll < 0.8) {
    const id = draw(
      'surprise/moments',
      activities.map((a) => a.id),
    )
    return { kind: 'moment', activity: activities.find((a) => a.id === id)! }
  }
  const id = draw(
    'surprise/wyr',
    wouldYouRather.map((w) => w.id),
  )
  return { kind: 'wyr', item: wouldYouRather.find((w) => w.id === id)! }
}

export function SurprisePage() {
  const { t, dir } = useI18n()
  const [surprise, setSurprise] = useState(() => nextSurprise(atRandom))
  const [count, setCount] = useState(0)
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight

  const again = () => {
    setSurprise(nextSurprise())
    setCount((c) => c + 1)
  }

  return (
    <>
      <title>{`${t('surpriseTitle')} · ${t('brand')}`}</title>
      <PageHeader
        title={t('surpriseTitle')}
        lead={t('surpriseLead')}
        backTo="/"
        backLabel={t('navHome')}
      />
      <div className={styles.wrap}>
        <AnimatePresence mode="wait" initial={false}>
          <m.div
            key={count}
            initial={{ opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <SurpriseCard surprise={surprise} />
          </m.div>
        </AnimatePresence>
        <div className={styles.actions}>
          <Button size="lg" onClick={again} icon={<Shuffle aria-hidden="true" />}>
            {t('surpriseAgain')}
          </Button>
          <SurpriseLink surprise={surprise} icon={<Arrow aria-hidden="true" />} />
        </div>
      </div>
    </>
  )
}

function SurpriseCard({ surprise }: { surprise: Surprise }) {
  const { t, l } = useI18n()

  if (surprise.kind === 'moment') {
    const tone = getActivityCategory(surprise.activity.category)?.tone ?? 'rose'
    return (
      <div className={styles.labeled}>
        <span className={styles.kind}>{t('kindMoment')}</span>
        <ActivityCard activity={surprise.activity} tone={tone} expanded />
      </div>
    )
  }

  if (surprise.kind === 'wyr') {
    return (
      <article className={styles.card} data-tone="sky">
        <header className={styles.header}>
          <span className={styles.kind}>{t('kindWyr')}</span>
        </header>
        <div className={styles.versus}>
          <p>{l(surprise.item.a)}</p>
          <span>{t('wyrOr')}</span>
          <p>{l(surprise.item.b)}</p>
        </div>
      </article>
    )
  }

  const { question, topic } = surprise.ref
  return (
    <article className={styles.card} data-tone={topic.tone}>
      <header className={styles.header}>
        <span className={styles.kind}>
          {t('kindQuestion')} · {l(topic.title)}
        </span>
        <FavoriteButton id={question.id} size="sm" />
      </header>
      <h2 className={styles.question}>{l(question.text)}</h2>
      {question.followUps?.[0] && <p className={styles.followUp}>{l(question.followUps[0])}</p>}
    </article>
  )
}

function SurpriseLink({ surprise, icon }: { surprise: Surprise; icon: ReactNode }) {
  const { t } = useI18n()
  const link =
    surprise.kind === 'question'
      ? { to: `/${surprise.ref.topic.section}/${surprise.ref.topic.id}`, label: t('openTopic') }
      : surprise.kind === 'wyr'
        ? { to: '/play/would-you-rather', label: t('playThisGame') }
        : { to: `/moments/${surprise.activity.category}`, label: t('seeMoreMoments') }
  return (
    <ButtonLink to={link.to} variant="ghost" trailingIcon={icon}>
      {link.label}
    </ButtonLink>
  )
}
