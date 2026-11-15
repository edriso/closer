import { Phone, Users } from 'lucide-react'
import { usePreferences } from '../../hooks/usePreferences'
import { useI18n } from '../../i18n/useI18n'
import type { Mode } from '../../types/content'
import styles from './ModePicker.module.css'

/** "On a call" vs "Together". Remembered across visits; tailors the instructions. */
export function ModePicker() {
  const { t } = useI18n()
  const { mode, update } = usePreferences()
  const options: { value: Mode; label: string; Icon: typeof Phone }[] = [
    { value: 'together', label: t('modeTogether'), Icon: Users },
    { value: 'call', label: t('modeCall'), Icon: Phone },
  ]
  return (
    <div className={styles.picker}>
      <div role="group" aria-label={t('modeQuestion')} className={styles.segmented}>
        {options.map(({ value, label, Icon }) => (
          <button
            key={value}
            type="button"
            aria-pressed={mode === value}
            className={styles.option}
            onClick={() => update({ mode: value })}
          >
            <Icon aria-hidden="true" />
            {label}
          </button>
        ))}
      </div>
      <p className={styles.hint}>{mode === 'call' ? t('modeCallHint') : t('modeTogetherHint')}</p>
    </div>
  )
}
