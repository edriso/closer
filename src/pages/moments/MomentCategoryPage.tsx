import { useParams } from 'react-router'
import { ActivityCard } from '../../components/ui/ActivityCard'
import { Chips } from '../../components/ui/Chips'
import { PageHeader } from '../../components/ui/PageHeader'
import { activitiesIn, getActivityCategory } from '../../content'
import { usePreferences } from '../../hooks/usePreferences'
import { useI18n } from '../../i18n/useI18n'
import type { Mode } from '../../types/content'
import { NotFound } from '../NotFound'
import styles from '../SectionPage.module.css'

type ModeFilter = Mode | 'all'

export function MomentCategoryPage() {
  const { categoryId } = useParams()
  const { t, l } = useI18n()
  const { mode, update } = usePreferences()
  const category = getActivityCategory(categoryId)
  if (!category) return <NotFound />

  // The filter starts from the remembered mode only when it narrows things down.
  const filter: ModeFilter = mode === 'call' ? 'call' : 'all'
  const items = activitiesIn(category.id).filter(
    (a) => filter === 'all' || a.modes.includes(filter),
  )

  return (
    <>
      <title>{`${l(category.title)} · ${t('brand')}`}</title>
      <PageHeader
        title={l(category.title)}
        lead={l(category.description)}
        backTo="/moments"
        backLabel={t('momentsTitle')}
        tone={category.tone}
      />
      <div className={styles.toolbar}>
        <Chips<ModeFilter>
          label={t('modeQuestion')}
          value={filter}
          onChange={(v) => update({ mode: v === 'call' ? 'call' : 'together' })}
          options={[
            { value: 'all', label: t('filterAll') },
            { value: 'call', label: t('worksOnCall') },
          ]}
        />
      </div>
      <div className={styles.list}>
        {items.map((a) => (
          <ActivityCard key={a.id} activity={a} tone={category.tone} />
        ))}
      </div>
    </>
  )
}
