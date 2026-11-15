import { SlidersHorizontal } from 'lucide-react'
import type { ReactNode } from 'react'
import { plural } from '../../i18n/plural'
import { useI18n } from '../../i18n/useI18n'
import { ModePicker } from '../ui/ModePicker'
import styles from './DeckOptions.module.css'

interface OptionsButtonProps {
  open: boolean
  onToggle: () => void
  panelId: string
  /** Number of active filters, shown as a small badge. */
  active?: number
}

/** A single quiet toggle that hides the mode and filters until they're wanted. */
export function OptionsButton({ open, onToggle, panelId, active = 0 }: OptionsButtonProps) {
  const { t, n, lang } = useI18n()
  return (
    <button
      type="button"
      className={styles.button}
      aria-expanded={open}
      aria-controls={panelId}
      onClick={onToggle}
    >
      <SlidersHorizontal aria-hidden="true" />
      <span>{t('options')}</span>
      {active > 0 && (
        <>
          <span className={styles.badge} aria-hidden="true">
            {n(active)}
          </span>
          <span className="visually-hidden">{plural('filter', active, lang)}</span>
        </>
      )}
    </button>
  )
}

/** Mode first (it changes the instructions), then any filters. */
export function OptionsPanel({
  id,
  open,
  children,
}: {
  id: string
  open: boolean
  children?: ReactNode
}) {
  return (
    <div id={id} className={styles.panel} hidden={!open}>
      <ModePicker />
      {children}
    </div>
  )
}
