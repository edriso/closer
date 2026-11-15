import { SectionArt } from '../components/art/SectionArt'
import card from '../components/ui/Card.module.css'
import { FeatureCard } from '../components/ui/FeatureCard'
import { ModePicker } from '../components/ui/ModePicker'
import { PageHeader } from '../components/ui/PageHeader'
import { TopicIcon } from '../components/ui/icons'
import { TopicCard } from '../components/ui/TopicCard'
import { discoverTopics, journeyTopic } from '../content'
import { plural } from '../i18n/plural'
import { useI18n } from '../i18n/useI18n'
import styles from './SectionPage.module.css'

export function DiscoverPage() {
  const { t, l, lang } = useI18n()
  return (
    <>
      <title>{`${t('discoverTitle')} · ${t('brand')}`}</title>
      <PageHeader
        title={t('discoverTitle')}
        lead={t('discoverLead')}
        tone="indigo"
        art={<SectionArt section="discover" />}
      />
      <div className={styles.toolbar}>
        <ModePicker />
      </div>

      <FeatureCard
        to="/discover/journey"
        tone={journeyTopic.tone}
        icon={<TopicIcon id="journey" />}
        eyebrow={`${t('featured')} · ${plural('question', journeyTopic.questions.length, lang)}`}
        title={l(journeyTopic.title)}
        description={l(journeyTopic.description)}
        cta={t('startJourney')}
      />

      <div className={card.grid}>
        {discoverTopics.map((topic) => (
          <TopicCard
            key={topic.id}
            to={`/discover/${topic.id}`}
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
