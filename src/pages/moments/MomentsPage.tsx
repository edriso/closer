import { Sparkles } from 'lucide-react'
import { useState } from 'react'
import { SectionArt } from '../../components/art/SectionArt'
import { ActivityCard } from '../../components/ui/ActivityCard'
import { Button } from '../../components/ui/Button'
import card from '../../components/ui/Card.module.css'
import { PageHeader } from '../../components/ui/PageHeader'
import { TopicIcon } from '../../components/ui/icons'
import { TopicCard } from '../../components/ui/TopicCard'
import { activities, activitiesIn, activityCategories, getActivityCategory } from '../../content'
import { plural } from '../../i18n/plural'
import { useI18n } from '../../i18n/useI18n'
import { takeFromDeck } from '../../lib/deck'
import type { Activity } from '../../types/content'
import styles from '../SectionPage.module.css'

export function MomentsPage() {
  const { t, l, lang } = useI18n()
  const [picked, setPicked] = useState<Activity>()

  const pick = () => {
    const [id] = takeFromDeck(
      'moments/random',
      activities.map((a) => a.id),
      1,
    )
    setPicked(activities.find((a) => a.id === id))
  }

  return (
    <>
      <title>{`${t('momentsTitle')} · ${t('brand')}`}</title>
      <PageHeader
        title={t('momentsTitle')}
        lead={t('momentsLead')}
        tone="rose"
        art={<SectionArt section="moments" />}
      >
        <div className={styles.toolbar}>
          <Button onClick={pick} icon={<Sparkles aria-hidden="true" />}>
            {t('pickForUs')}
          </Button>
        </div>
      </PageHeader>

      <div aria-live="polite">
        {picked && (
          <div className={styles.picked}>
            <ActivityCard
              key={picked.id}
              activity={picked}
              tone={getActivityCategory(picked.category)?.tone ?? 'lilac'}
              expanded
            />
          </div>
        )}
      </div>

      <div className={card.grid}>
        {activityCategories.map((c) => (
          <TopicCard
            key={c.id}
            to={`/moments/${c.id}`}
            tone={c.tone}
            icon={<TopicIcon id={c.id} />}
            title={l(c.title)}
            description={l(c.description)}
            meta={plural('idea', activitiesIn(c.id).length, lang)}
          />
        ))}
      </div>
    </>
  )
}
