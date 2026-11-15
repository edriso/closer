import { SectionArt } from '../components/art/SectionArt'
import card from '../components/ui/Card.module.css'
import { FeatureCard } from '../components/ui/FeatureCard'
import { ModePicker } from '../components/ui/ModePicker'
import { PageHeader } from '../components/ui/PageHeader'
import { TopicIcon } from '../components/ui/icons'
import { TopicCard } from '../components/ui/TopicCard'
import { talkQuestions, talkTopics } from '../content'
import { plural } from '../i18n/plural'
import { useI18n } from '../i18n/useI18n'
import styles from './SectionPage.module.css'

export function TalkPage() {
  const { t, l, lang } = useI18n()
  return (
    <>
      <title>{`${t('talkTitle')} · ${t('brand')}`}</title>
      <PageHeader
        title={t('talkTitle')}
        lead={t('talkLead')}
        tone="lilac"
        art={<SectionArt section="talk" />}
      />
      <div className={styles.toolbar}>
        <ModePicker />
      </div>
      <FeatureCard
        to="/talk/mix"
        tone="lilac"
        icon={<TopicIcon id="mix" />}
        eyebrow={plural('question', talkQuestions.length, lang)}
        title={t('mixTitle')}
        description={t('mixDescription')}
        cta={t('mixCta')}
      />
      <div className={card.grid}>
        {talkTopics.map((topic) => (
          <TopicCard
            key={topic.id}
            to={`/talk/${topic.id}`}
            tone={topic.tone}
            icon={<TopicIcon id={topic.id} />}
            title={l(topic.title)}
            description={l(topic.description)}
            meta={plural('question', topic.questions.length, lang)}
          />
        ))}
      </div>
    </>
  )
}
