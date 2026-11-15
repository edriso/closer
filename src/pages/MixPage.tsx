import { useId, useState } from 'react'
import { OptionsButton, OptionsPanel } from '../components/deck/DeckOptions'
import { QuestionDeck } from '../components/deck/QuestionDeck'
import { PageHeader } from '../components/ui/PageHeader'
import { talkQuestions } from '../content'
import { useI18n } from '../i18n/useI18n'

export function MixPage() {
  const { t } = useI18n()
  const panelId = useId()
  const [open, setOpen] = useState(false)
  return (
    <>
      <title>{`${t('mixTitle')} · ${t('brand')}`}</title>
      <PageHeader
        title={t('mixTitle')}
        lead={t('mixDescription')}
        backTo="/talk"
        backLabel={t('talkTitle')}
        tone="lilac"
        action={<OptionsButton open={open} onToggle={() => setOpen((o) => !o)} panelId={panelId} />}
      />
      <OptionsPanel id={panelId} open={open} />
      <QuestionDeck deckKey="talk/mix" items={talkQuestions} showTopic moreHref="/talk" />
    </>
  )
}
