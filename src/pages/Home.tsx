import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router'
import { SectionArt } from '../components/art/SectionArt'
import { SkyHero } from '../components/art/SkyHero'
import { sections } from '../components/layout/sections'
import { ButtonLink } from '../components/ui/Button'
import { FavoriteButton } from '../components/ui/FavoriteButton'
import { talkQuestions } from '../content'
import { useI18n } from '../i18n/useI18n'
import { pickOfTheDay } from '../lib/random'
import styles from './Home.module.css'

export function Home() {
  const { t, l, dir } = useI18n()
  const today = pickOfTheDay(talkQuestions)
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight

  return (
    <>
      <title>{`${t('brand')} · ${t('tagline')}`}</title>

      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1 className={styles.greeting}>{t('homeGreeting')}</h1>
          <p className={styles.lead}>{t('homeLead')}</p>
          <div className={styles.heroActions}>
            <ButtonLink to="/surprise" size="lg" icon={<Sparkles aria-hidden="true" />}>
              {t('surpriseUs')}
            </ButtonLink>
          </div>
        </div>
        <SkyHero className={styles.heroArt} />
      </section>

      <div className={styles.sections}>
        {sections.map((s, i) => (
          <Link
            key={s.id}
            to={`/${s.id}`}
            className={styles.section}
            data-tone={s.tone}
            style={{ animationDelay: `${i * 70}ms` }}
          >
            <SectionArt section={s.id} className={styles.sectionArt} />
            <span className={styles.sectionText}>
              <span className={styles.sectionTitle}>{t(s.titleKey)}</span>
              <span className={styles.sectionBlurb}>{t(s.blurbKey)}</span>
            </span>
            <Arrow className={styles.sectionArrow} aria-hidden="true" />
          </Link>
        ))}
      </div>

      <section className={styles.daily} data-tone={today.topic.tone}>
        <div className={styles.dailyHeader}>
          <h2 className={styles.dailyTitle}>{t('questionOfTheDay')}</h2>
          <FavoriteButton id={today.question.id} />
        </div>
        <p className={styles.dailyQuestion}>{l(today.question.text)}</p>
        <Link to={`/talk/${today.topic.id}`} className={styles.dailyLink}>
          {l(today.topic.title)}
          <Arrow aria-hidden="true" />
        </Link>
      </section>
    </>
  )
}
