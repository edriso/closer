import { Play } from 'lucide-react'
import { useId, useState, type FormEvent } from 'react'
import { usePreferences } from '../../hooks/usePreferences'
import { useI18n } from '../../i18n/useI18n'
import { Button } from '../ui/Button'
import styles from './Game.module.css'

/** "Who's playing?" Optional names, remembered on this device only. */
export function PlayersSetup({ onStart }: { onStart: () => void }) {
  const { t } = useI18n()
  const { players, update } = usePreferences()
  const [names, setNames] = useState<[string, string]>(players)
  const id = useId()

  const submit = (event: FormEvent) => {
    event.preventDefault()
    update({ players: [names[0].trim(), names[1].trim()] })
    onStart()
  }

  return (
    <form className={styles.panel} onSubmit={submit}>
      <h2 className={styles.panelTitle}>{t('playersTitle')}</h2>
      <div className={styles.fields}>
        {([0, 1] as const).map((i) => (
          <label key={i} className={styles.field} htmlFor={`${id}-${i}`}>
            <span>{i === 0 ? t('playerOne') : t('playerTwo')}</span>
            <input
              id={`${id}-${i}`}
              value={names[i]}
              maxLength={24}
              autoComplete="off"
              dir="auto"
              placeholder={i === 0 ? t('playerOneDefault') : t('playerTwoDefault')}
              onChange={(e) =>
                setNames((prev) =>
                  i === 0 ? [e.target.value, prev[1]] : [prev[0], e.target.value],
                )
              }
            />
          </label>
        ))}
      </div>
      <p className={styles.hint}>{t('playersHint')}</p>
      <Button type="submit" size="lg" icon={<Play aria-hidden="true" />}>
        {t('letsStart')}
      </Button>
    </form>
  )
}
