import { Check, RefreshCw, X } from 'lucide-react'
import { useState } from 'react'
import { GameEnd, Scoreboard } from '../../components/game/GameEnd'
import { GameStage } from '../../components/game/GameStage'
import styles from '../../components/game/Game.module.css'
import { PlayersSetup } from '../../components/game/PlayersSetup'
import { usePlayers } from '../../components/game/usePlayers'
import { Button } from '../../components/ui/Button'
import { PageHeader } from '../../components/ui/PageHeader'
import { truthsThemes } from '../../content'
import { useI18n } from '../../i18n/useI18n'
import { takeFromDeck } from '../../lib/deck'
import type { TruthsTheme } from '../../types/content'

const ROUNDS = 6
const themeIds = truthsThemes.map((x) => x.id)
const byId = (id: string) => truthsThemes.find((x) => x.id === id)!

function nextTheme(): TruthsTheme {
  return byId(takeFromDeck('play/truths', themeIds, 1)[0])
}

export function TwoTruthsGame() {
  const { t } = useI18n()
  const [firstTheme, setFirstTheme] = useState<TruthsTheme>()
  return (
    <>
      <title>{`${t('truthsTitle')} · ${t('brand')}`}</title>
      <PageHeader
        title={t('truthsTitle')}
        lead={t('truthsDescription')}
        backTo="/play"
        backLabel={t('gamesBack')}
        tone="mint"
      />
      <div className={styles.wrap}>
        {firstTheme ? (
          <Game firstTheme={firstTheme} onChangeNames={() => setFirstTheme(undefined)} />
        ) : (
          <PlayersSetup onStart={() => setFirstTheme(nextTheme())} />
        )}
      </div>
    </>
  )
}

function Game({
  firstTheme,
  onChangeNames,
}: {
  firstTheme: TruthsTheme
  onChangeNames: () => void
}) {
  const { t, l } = useI18n()
  const players = usePlayers()
  const [round, setRound] = useState(0)
  const [theme, setTheme] = useState(firstTheme)
  const [spotted, setSpotted] = useState<[number, number]>([0, 0])

  if (round >= ROUNDS) {
    return (
      <GameEnd
        gameKey="truths"
        summary={
          <>
            <p>{t('truthsScore')}</p>
            <Scoreboard
              scores={[
                [players[0], spotted[0]],
                [players[1], spotted[1]],
              ]}
            />
          </>
        }
        onChangeNames={onChangeNames}
        onAgain={() => {
          setRound(0)
          setSpotted([0, 0])
          setTheme(nextTheme())
        }}
      />
    )
  }

  const teller = round % 2
  const guesser = 1 - teller

  const finishRound = (found: boolean) => {
    if (found) setSpotted((s) => (guesser === 0 ? [s[0] + 1, s[1]] : [s[0], s[1] + 1]))
    setRound((r) => r + 1)
    setTheme(nextTheme())
  }

  return (
    <GameStage round={round + 1} total={ROUNDS} stepKey={`${round}-${theme.id}`}>
      <p className={styles.eyebrow}>{t('turnOf', { name: players[teller] })}</p>
      <div className={styles.verdict}>
        <p className={styles.hint}>{t('truthsTheme')}</p>
        <p className={styles.prompt}>{l(theme.title)}</p>
        <p className={styles.instructions}>{l(theme.hint)}</p>
      </div>
      <div className={styles.verdict}>
        <p className={styles.instructions}>{t('truthsTell', { name: players[teller] })}</p>
        <p className={styles.instructions}>{t('truthsGuess', { name: players[guesser] })}</p>
        <p className={styles.hint}>{t('truthsThink')}</p>
      </div>
      <div className={styles.row}>
        <Button onClick={() => finishRound(true)} icon={<Check aria-hidden="true" />}>
          {t('truthsSpotted')}
        </Button>
        <Button
          variant="secondary"
          onClick={() => finishRound(false)}
          icon={<X aria-hidden="true" />}
        >
          {t('truthsSurvived')}
        </Button>
      </div>
      <div className={styles.row}>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setTheme(nextTheme())}
          icon={<RefreshCw aria-hidden="true" />}
        >
          {t('truthsAnotherTheme')}
        </Button>
      </div>
    </GameStage>
  )
}
