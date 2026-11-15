import { Check, X } from 'lucide-react'
import { useState } from 'react'
import { GameEnd, Scoreboard } from '../../components/game/GameEnd'
import { GameStage } from '../../components/game/GameStage'
import styles from '../../components/game/Game.module.css'
import { PlayersSetup } from '../../components/game/PlayersSetup'
import { usePlayers } from '../../components/game/usePlayers'
import { Button } from '../../components/ui/Button'
import { PageHeader } from '../../components/ui/PageHeader'
import { guessPrompts } from '../../content'
import { useI18n } from '../../i18n/useI18n'
import { takeFromDeck } from '../../lib/deck'
import type { GuessItem } from '../../types/content'

const ROUNDS = 10

function newRounds(): GuessItem[] {
  const ids = takeFromDeck(
    'play/who',
    guessPrompts.map((x) => x.id),
    ROUNDS,
  )
  return ids.map((id) => guessPrompts.find((x) => x.id === id)!)
}

export function WhoKnowsGame() {
  const { t } = useI18n()
  const [firstRounds, setFirstRounds] = useState<GuessItem[]>()
  return (
    <>
      <title>{`${t('whoTitle')} · ${t('brand')}`}</title>
      <PageHeader
        narrow
        title={t('whoTitle')}
        lead={t('whoDescription')}
        backTo="/play"
        backLabel={t('gamesBack')}
        tone="rose"
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

function Game({ firstRounds }: { firstRounds: GuessItem[] }) {
  const { t, l } = useI18n()
  const players = usePlayers()
  const [rounds, setRounds] = useState(firstRounds)
  const [round, setRound] = useState(0)
  const [scores, setScores] = useState<[number, number]>([0, 0])

  if (round >= rounds.length) {
    return (
      <GameEnd
        gameKey="who"
        summary={
          <>
            <p>{t('whoScore')}</p>
            <Scoreboard
              scores={[
                [players[0], scores[0]],
                [players[1], scores[1]],
              ]}
            />
          </>
        }
        onAgain={() => {
          setRounds(newRounds())
          setRound(0)
          setScores([0, 0])
        }}
      />
    )
  }

  // Alternate: round 0 is about player two (player one guesses), and so on.
  const guesser = round % 2
  const subject = 1 - guesser
  const item = rounds[round]

  const answer = (correct: boolean) => {
    if (correct) setScores((s) => (guesser === 0 ? [s[0] + 1, s[1]] : [s[0], s[1] + 1]))
    setRound((r) => r + 1)
  }

  return (
    <GameStage round={round + 1} total={rounds.length} stepKey={item.id}>
      <p className={styles.eyebrow}>{t('whoAbout', { name: players[subject] })}</p>
      <p className={styles.prompt}>{l(item.text)}</p>
      <p className={styles.instructions}>
        {t('whoInstructions', { guesser: players[guesser], subject: players[subject] })}
      </p>
      <div className={styles.row}>
        <Button onClick={() => answer(true)} icon={<Check aria-hidden="true" />}>
          {t('whoRight')}
        </Button>
        <Button variant="secondary" onClick={() => answer(false)} icon={<X aria-hidden="true" />}>
          {t('whoWrong')}
        </Button>
      </div>
    </GameStage>
  )
}
