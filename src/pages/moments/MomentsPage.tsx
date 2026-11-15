import { Sparkles } from 'lucide-react'
import { useState } from 'react'
import { SectionArt } from '../../components/art/SectionArt'
import { ActivityCard } from '../../components/ui/ActivityCard'
import { Button } from '../../components/ui/Button'
import { List, ListRow } from '../../components/ui/List'
import { PageHeader } from '../../components/ui/PageHeader'
import { TopicIcon } from '../../components/ui/icons'
import { activities, activitiesIn, activityCategories, getActivityCategory } from '../../content'
import { useI18n } from '../../i18n/useI18n'
import { takeFromDeck } from '../../lib/deck'
import type { Activity } from '../../types/content'
import styles from '../SectionPage.module.css'

export function MomentsPage() {
  const { t, l, n } = useI18n()
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
        <div className={styles.headerAction}>
          <Button size="sm" variant="soft" onClick={pick} icon={<Sparkles aria-hidden="true" />}>
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
              headingLevel={2}
            />
          </div>
        )}
      </div>

      <List label={t('momentsTitle')}>
        {activityCategories.map((c) => (
          <ListRow
            key={c.id}
            to={`/moments/${c.id}`}
            tone={c.tone}
            icon={<TopicIcon id={c.id} />}
            title={l(c.title)}
            meta={n(activitiesIn(c.id).length)}
          />
        ))}
      </List>
    </>
  )
}
