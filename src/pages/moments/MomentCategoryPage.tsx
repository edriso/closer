import { useParams } from 'react-router'
import { ActivityRow } from '../../components/ui/ActivityRow'
import { PageHeader } from '../../components/ui/PageHeader'
import { activitiesIn, getActivityCategory } from '../../content'
import { useI18n } from '../../i18n/useI18n'
import { NotFound } from '../NotFound'
import styles from '../SectionPage.module.css'

export function MomentCategoryPage() {
  const { categoryId } = useParams()
  const { t, l } = useI18n()
  const category = getActivityCategory(categoryId)
  if (!category) return <NotFound />

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
      <ul className={styles.group} aria-label={l(category.title)}>
        {activitiesIn(category.id).map((a) => (
          <ActivityRow key={a.id} activity={a} />
        ))}
      </ul>
    </>
  )
}
