import { Sparkles, X } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router'
import { MoonArt } from '../components/art/MoonArt'
import { ActivityRow } from '../components/ui/ActivityRow'
import { Button, ButtonLink } from '../components/ui/Button'
import { PageHeader } from '../components/ui/PageHeader'
import { getActivity, getQuestion } from '../content'
import { useFavorites } from '../hooks/useFavorites'
import { useI18n } from '../i18n/useI18n'
import styles from './FavoritesPage.module.css'

export function FavoritesPage() {
  const { t, l } = useI18n()
  const { ids, toggle } = useFavorites()
  const page = useRef<HTMLDivElement>(null)
  const refocusIndex = useRef<number | null>(null)

  // After removing a question, keep focus on the next one (or the page title).
  useEffect(() => {
    const index = refocusIndex.current
    if (index === null) return
    refocusIndex.current = null
    const buttons = page.current?.querySelectorAll<HTMLButtonElement>('[data-remove]') ?? []
    const target = buttons[Math.min(index, buttons.length - 1)]
    if (target) target.focus()
    else page.current?.querySelector<HTMLElement>('h1')?.focus()
  })

  const remove = (id: string, index: number) => {
    refocusIndex.current = index
    toggle(id)
  }

  // Unknown IDs (content retired since saving) are skipped silently.
  const questions = ids.map(getQuestion).filter((x) => x !== undefined)
  const moments = ids.map(getActivity).filter((x) => x !== undefined)
  const empty = questions.length === 0 && moments.length === 0

  return (
    <div ref={page}>
      <title>{`${t('favoritesTitle')} · ${t('brand')}`}</title>
      <PageHeader title={t('favoritesTitle')} lead={t('favoritesLead')} />

      {empty && (
        <div className={styles.empty}>
          <MoonArt className={styles.emptyArt} />
          <p>{t('favoritesEmpty')}</p>
          <ButtonLink to="/talk" icon={<Sparkles aria-hidden="true" />}>
            {t('explore')}
          </ButtonLink>
        </div>
      )}

      {questions.length > 0 && (
        <section className={styles.group}>
          <h2 className={styles.groupTitle}>{t('favoritesQuestions')}</h2>
          <ul className={styles.questions}>
            {questions.map(({ question, topic }, index) => (
              <li key={question.id} className={styles.question} data-tone={topic.tone}>
                <div className={styles.questionText}>
                  <Link to={`/${topic.section}/${topic.id}`} className={styles.topic}>
                    {l(topic.title)}
                  </Link>
                  <p>{l(question.text)}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  iconOnly
                  aria-label={t('removeFavorite')}
                  title={t('removeFavorite')}
                  data-remove
                  onClick={() => remove(question.id, index)}
                  icon={<X aria-hidden="true" />}
                />
              </li>
            ))}
          </ul>
        </section>
      )}

      {moments.length > 0 && (
        <section className={styles.group}>
          <h2 className={styles.groupTitle}>{t('favoritesMoments')}</h2>
          <ul className={styles.moments}>
            {moments.map((a) => (
              <ActivityRow key={a.id} activity={a} />
            ))}
          </ul>
        </section>
      )}
    </div>
  )
}
