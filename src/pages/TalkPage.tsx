import { SectionArt } from '../components/art/SectionArt'
import { FeatureCard } from '../components/ui/FeatureCard'
import { List, ListRow } from '../components/ui/List'
import { PageHeader } from '../components/ui/PageHeader'
import { TopicIcon } from '../components/ui/icons'
import { talkQuestions, talkTopics } from '../content'
import { plural } from '../i18n/plural'
import { useI18n } from '../i18n/useI18n'

export function TalkPage() {
  const { t, l, lang, n } = useI18n()
  return (
    <>
      <title>{`${t('talkTitle')} · ${t('brand')}`}</title>
      <PageHeader
        title={t('talkTitle')}
        lead={t('talkLead')}
        tone="lilac"
        art={<SectionArt section="talk" />}
      />
      <FeatureCard
        to="/talk/mix"
        tone="lilac"
        icon={<TopicIcon id="mix" />}
        eyebrow={plural('question', talkQuestions.length, lang)}
        title={t('mixTitle')}
        description={t('mixDescription')}
      />
      <List label={t('talkTitle')}>
        {talkTopics.map((topic) => (
          <ListRow
            key={topic.id}
            to={`/talk/${topic.id}`}
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
