import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useState } from 'react'
import { GameEnd } from '../../components/game/GameEnd'
import { GameStage } from '../../components/game/GameStage'
import styles from '../../components/game/Game.module.css'
import { PlayersSetup } from '../../components/game/PlayersSetup'
import { usePlayers } from '../../components/game/usePlayers'
import { Button } from '../../components/ui/Button'
import { PageHeader } from '../../components/ui/PageHeader'
import { wouldYouRather } from '../../content'
import { useI18n } from '../../i18n/useI18n'
import { takeFromDeck } from '../../lib/deck'
import type { WouldYouRatherItem } from '../../types/content'

const ROUNDS = 8
type Choice = 'a' | 'b'

function newRounds(): WouldYouRatherItem[] {
  const ids = takeFromDeck(
    'play/wyr',
    wouldYouRather.map((x) => x.id),
    ROUNDS,
  )
  return ids.map((id) => wouldYouRather.find((x) => x.id === id)!)
}

export function WouldYouRatherGame() {
  const { t } = useI18n()
  const [firstRounds, setFirstRounds] = useState<WouldYouRatherItem[]>()
  return (
    <>
      <title>{`${t('wyrTitle')} · ${t('brand')}`}</title>
      <PageHeader
        narrow
        title={t('wyrTitle')}
        lead={t('wyrDescription')}
        backTo="/play"
        backLabel={t('gamesBack')}
        tone="sky"
      />
      <div className={styles.wrap}>
        {firstRounds ? (
          <Game firstRounds={firstRounds} />
        ) : (
          <PlayersSetup onStart={() => setFirstRounds(newRounds())} />
        )}
      </div>
    </>
  )
}

function Game({ firstRounds }: { firstRounds: WouldYouRatherItem[] }) {
  const { t, l, dir } = useI18n()
  const players = usePlayers()
  const [rounds, setRounds] = useState(firstRounds)
  const [round, setRound] = useState(0)
  const [picks, setPicks] = useState<Choice[]>([])
  const [matches, setMatches] = useState(0)

  if (round >= rounds.length) {
    return (
      <GameEnd
        gameKey="wyr"
        summary={<p>{t('wyrMatched', { n: matches, total: rounds.length })}</p>}
        onAgain={() => {
          setRounds(newRounds())
          setRound(0)
          setPicks([])
          setMatches(0)
        }}
      />
    )
  }

  const item = rounds[round]
  const turn = picks.length // 0 → first player picks, 1 → second, 2 → reveal
  const revealed = turn === 2
  const NextIcon = dir === 'rtl' ? ArrowLeft : ArrowRight

  const pick = (choice: Choice) => {
    const next = [...picks, choice]
    setPicks(next)
    if (next.length === 2 && next[0] === next[1]) setMatches((m) => m + 1)
  }

  const nextRound = () => {
    setPicks([])
    setRound((r) => r + 1)
  }

  return (
    <GameStage round={round + 1} total={rounds.length} stepKey={item.id}>
      <p className={styles.eyebrow}>
        {revealed ? t('wyrTitle') : t('wyrPickFor', { name: players[turn] })}
      </p>
      <div className={styles.options} data-tone="sky">
        {(['a', 'b'] as const).map((choice, i) => (
          <OptionButton
            key={choice}
            label={l(item[choice])}
            pickedBy={revealed ? players.filter((_, p) => picks[p] === choice) : []}
            disabled={revealed}
            onPick={() => pick(choice)}
            orLabel={i === 0 ? t('wyrOr') : undefined}
          />
        ))}
      </div>
      <div aria-live="polite">
        {revealed && (
          <div className={styles.verdict}>
            <p className={styles.verdictTitle}>
              {picks[0] === picks[1] ? t('wyrSame') : t('wyrDifferent')}
            </p>
            <p className={styles.hint}>{t('wyrWhy')}</p>
          </div>
        )}
      </div>
      {revealed && (
        <div className={styles.row}>
          <Button onClick={nextRound} trailingIcon={<NextIcon aria-hidden="true" />}>
            {t('next')}
          </Button>
        </div>
      )}
    </GameStage>
  )
}

interface OptionButtonProps {
  label: string
  pickedBy: string[]
  disabled: boolean
  onPick: () => void
  orLabel?: string
}

function OptionButton({ label, pickedBy, disabled, onPick, orLabel }: OptionButtonProps) {
  return (
    <>
      <button
        type="button"
        className={styles.option}
        data-picked={pickedBy.length > 0}
        disabled={disabled}
        onClick={onPick}
      >
        <span>{label}</span>
        <span className={styles.pickers}>
          {pickedBy.map((name) => (
            <span key={name} className={styles.picker}>
              {name}
            </span>
          ))}
        </span>
      </button>
      {orLabel && (
        <span className={styles.or} aria-hidden="true">
          {orLabel}
        </span>
      )}
    </>
  )
}
