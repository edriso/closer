import { AnimatePresence, m, useIsPresent } from 'motion/react'
import { useEffect, useRef, type ReactNode } from 'react'
import { useI18n } from '../../i18n/useI18n'
import styles from './Game.module.css'

interface GameStageProps {
  round: number
  total: number
  /** Changes whenever the visible step changes, to animate between steps. */
  stepKey: string
  children: ReactNode
}

/** Round counter plus an animated card that slides between steps. */
export function GameStage({ round, total, stepKey, children }: GameStageProps) {
  const { t } = useI18n()
  return (
    <div className={styles.stage}>
      <div className={styles.progress}>
        <span>{t('roundOf', { current: round, total })}</span>
        <div className={styles.bar} aria-hidden="true">
          <span style={{ inlineSize: `${(round / total) * 100}%` }} />
        </div>
      </div>
      <AnimatePresence mode="wait" initial={false}>
        <StagePanel key={stepKey}>{children}</StagePanel>
      </AnimatePresence>
    </div>
  )
}

function StagePanel({ children }: { children: ReactNode }) {
  const { dir } = useI18n()
  const isPresent = useIsPresent()
  const ref = useRef<HTMLDivElement>(null)
  const slide = dir === 'rtl' ? -24 : 24

  // The clicked button unmounts with the old panel, so move focus to the new one.
  useEffect(() => {
    const active = document.activeElement
    if (!active || active === document.body) ref.current?.focus({ preventScroll: true })
  }, [])

  return (
    <m.div
      ref={ref}
      tabIndex={-1}
      // While animating out, the old panel must not accept clicks (no double-counting).
      inert={!isPresent}
      className={styles.panel}
      initial={{ opacity: 0, x: slide }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -slide }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  )
}
