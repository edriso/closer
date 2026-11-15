import { AnimatePresence, m, useReducedMotion, type PanInfo, type Variants } from 'motion/react'
import { ArrowLeft, ArrowRight, Check, Share2, Sparkles } from 'lucide-react'
import { useState } from 'react'
import type { QuestionRef } from '../../content'
import { useArrowKeys } from '../../hooks/useArrowKeys'
import { useI18n } from '../../i18n/useI18n'
import { createDeck, loadDeck, saveDeck, type DeckState } from '../../lib/deck'
import { shareText, siteUrl } from '../../lib/share'
import { Button } from '../ui/Button'
import { FavoriteButton } from '../ui/FavoriteButton'
import { DeckDone } from './DeckDone'
import styles from './QuestionDeck.module.css'

interface QuestionDeckProps {
  /** Identifies this deck (topic + filters) for session persistence. */
  deckKey: string
  items: QuestionRef[]
  ordered?: boolean
  /** Show the topic name on each card (used by mixed decks). */
  showTopic?: boolean
  /** Where "Other topics" leads when the deck is finished. */
  moreHref: string
}

export function QuestionDeck({ deckKey, items, ordered, showTopic, moreHref }: QuestionDeckProps) {
  const { t, l, dir } = useI18n()
  const [deck, setDeck] = useState<DeckState>(() =>
    loadDeck(
      deckKey,
      items.map((i) => i.question.id),
      ordered,
    ),
  )
  const [direction, setDirection] = useState<1 | -1>(1)
  const [revealed, setRevealed] = useState(0)
  const [copied, setCopied] = useState(false)
  const reduceMotion = useReducedMotion()

  const byId = new Map(items.map((i) => [i.question.id, i]))
  const total = deck.order.length
  const current = deck.index < total ? byId.get(deck.order[deck.index]) : undefined

  const go = (step: 1 | -1) => {
    const index = Math.min(Math.max(deck.index + step, 0), deck.order.length)
    if (index === deck.index) return
    const next = { ...deck, index }
    saveDeck(deckKey, next)
    setDeck(next)
    setDirection(step)
    setRevealed(0)
    setCopied(false)
  }

  const reshuffle = () => {
    setDirection(1)
    setRevealed(0)
    setDeck(
      createDeck(
        deckKey,
        items.map((i) => i.question.id),
        ordered,
      ),
    )
  }

  useArrowKeys(
    dir,
    () => go(1),
    () => go(-1),
  )

  if (!current) {
    return <DeckDone deckKey={deckKey} onReshuffle={reshuffle} moreHref={moreHref} />
  }

  const { question, topic } = current
  const followUps = question.followUps ?? []
  const subtopic = topic.subtopics.find((s) => s.id === question.subtopic)
  // With reduced motion, cards simply cross-fade in place.
  const slide = reduceMotion ? 0 : (dir === 'rtl' ? -1 : 1) * 36

  const onShare = async () => {
    const result = await shareText(l(question.text), siteUrl(`/${topic.section}/${topic.id}`))
    if (result === 'copied') {
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    }
  }

  // Swipe like a deck of cards: toward the reading direction's start = next.
  const onDragEnd = (_: unknown, info: PanInfo) => {
    const forward = dir === 'rtl' ? 1 : -1
    const travel = info.offset.x * forward
    const speed = info.velocity.x * forward
    if (travel > 80 || speed > 500) go(1)
    else if (travel < -80 || speed < -500) go(-1)
  }

  const BackIcon = dir === 'rtl' ? ArrowRight : ArrowLeft
  const NextIcon = dir === 'rtl' ? ArrowLeft : ArrowRight

  return (
    <section className={styles.deck} aria-label={l(topic.title)}>
      <div className={styles.progress}>
        <span>{t('progress', { current: deck.index + 1, total })}</span>
        <div className={styles.bar} aria-hidden="true">
          <span style={{ inlineSize: `${((deck.index + 1) / total) * 100}%` }} />
        </div>
      </div>

      {/* A stable live region: screen readers announce each new question. */}
      <p className="visually-hidden" aria-live="polite">
        {l(question.text)}
      </p>

      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <m.article
          key={question.id}
          className={styles.card}
          data-tone={topic.tone}
          custom={direction}
          variants={cardVariants(slide, !reduceMotion)}
          initial="enter"
          animate="center"
          exit="exit"
          drag="x"
          dragSnapToOrigin
          dragElastic={0.35}
          onDragEnd={onDragEnd}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <header className={styles.cardHeader}>
            <span className={styles.label}>
              {showTopic ? l(topic.title) : subtopic ? l(subtopic.title) : l(topic.title)}
            </span>
            <div className={styles.cardActions}>
              <Button
                variant="ghost"
                size="sm"
                iconOnly
                onClick={onShare}
                aria-label={copied ? t('copied') : t('share')}
                title={copied ? t('copied') : t('share')}
                icon={copied ? <Check aria-hidden="true" /> : <Share2 aria-hidden="true" />}
              />
              <FavoriteButton id={question.id} size="sm" />
            </div>
          </header>

          <div className={styles.body}>
            <h2 className={styles.question}>{l(question.text)}</h2>

            {revealed > 0 && (
              <ul className={styles.followUps}>
                {followUps.slice(0, revealed).map((f, i) => (
                  <m.li
                    key={i}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {l(f)}
                  </m.li>
                ))}
              </ul>
            )}

            {revealed < followUps.length && (
              <Button
                variant="soft"
                size="sm"
                className={styles.deeper}
                icon={<Sparkles aria-hidden="true" />}
                onClick={() => setRevealed((n) => n + 1)}
              >
                {revealed === 0 ? t('goDeeper') : t('anotherFollowUp')}
              </Button>
            )}
          </div>
        </m.article>
      </AnimatePresence>

      <div className={styles.controls}>
        <Button
          variant="ghost"
          iconOnly
          onClick={() => go(-1)}
          disabled={deck.index === 0}
          aria-label={t('previous')}
          title={t('previous')}
          icon={<BackIcon aria-hidden="true" />}
        />
        <Button
          variant="primary"
          size="lg"
          onClick={() => go(1)}
          trailingIcon={<NextIcon aria-hidden="true" />}
        >
          {t('next')}
        </Button>
      </div>
    </section>
  )
}

/**
 * Card slide variants. `custom` is the travel direction (1 forward, -1 back), so
 * the exiting card also uses the *latest* direction when the user reverses.
 */
function cardVariants(slide: number, scaleEffect: boolean): Variants {
  const scale = scaleEffect ? 0.98 : 1
  return {
    enter: (d: number) => ({ opacity: 0, x: slide * d, scale }),
    center: { opacity: 1, x: 0, scale: 1 },
    exit: (d: number) => ({
      opacity: 0,
      x: -slide * d,
      scale,
      transition: { duration: 0.16, ease: 'easeIn' },
    }),
  }
}
