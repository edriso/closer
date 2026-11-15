import { QuestionDeck } from '../components/deck/QuestionDeck'
import { ModePicker } from '../components/ui/ModePicker'
import { PageHeader } from '../components/ui/PageHeader'
import { talkQuestions } from '../content'
import { useI18n } from '../i18n/useI18n'
import styles from './TopicPage.module.css'

export function MixPage() {
  const { t } = useI18n()
  return (
    <>
      <title>{`${t('mixTitle')} · ${t('brand')}`}</title>
      <PageHeader
        narrow
        title={t('mixTitle')}
        lead={t('mixDescription')}
        backTo="/talk"
        backLabel={t('talkTitle')}
        tone="lilac"
      />
      <div className={styles.filters}>
        <ModePicker />
      </div>
      <QuestionDeck deckKey="talk/mix" items={talkQuestions} showTopic moreHref="/talk" />
    </>
  )
}
