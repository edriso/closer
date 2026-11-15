import { SectionArt } from '../components/art/SectionArt'
import { FeatureCard } from '../components/ui/FeatureCard'
import { List, ListRow } from '../components/ui/List'
import { PageHeader } from '../components/ui/PageHeader'
import { TopicIcon } from '../components/ui/icons'
import { discoverTopics, journeyTopic } from '../content'
import { plural } from '../i18n/plural'
import { useI18n } from '../i18n/useI18n'

export function DiscoverPage() {
  const { t, l, lang, n } = useI18n()
  return (
    <>
      <title>{`${t('discoverTitle')} · ${t('brand')}`}</title>
      <PageHeader
        title={t('discoverTitle')}
        lead={t('discoverLead')}
        tone="indigo"
        art={<SectionArt section="discover" />}
      />
      <FeatureCard
        to="/discover/journey"
        tone={journeyTopic.tone}
        icon={<TopicIcon id="journey" />}
        eyebrow={plural('question', journeyTopic.questions.length, lang)}
        title={l(journeyTopic.title)}
        description={l(journeyTopic.description)}
      />
      <List label={t('discoverTitle')}>
        {discoverTopics.map((topic) => (
          <ListRow
            key={topic.id}
            to={`/discover/${topic.id}`}
            tone={topic.tone}
            icon={<TopicIcon id={topic.id} />}
            title={l(topic.title)}
            meta={n(topic.questions.length)}
          />
        ))}
      </List>
    </>
  )
}
