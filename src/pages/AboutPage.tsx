import { HeartHandshake, MessageCircleHeart, ShieldCheck, Sparkles } from 'lucide-react'
import { ButtonLink } from '../components/ui/Button'
import card from '../components/ui/Card.module.css'
import { PageHeader } from '../components/ui/PageHeader'
import { useI18n } from '../i18n/useI18n'
import styles from './AboutPage.module.css'

const REPO_URL = 'https://github.com/edriso/closer'

export function AboutPage() {
  const { t } = useI18n()
  const principles = [
    { Icon: MessageCircleHeart, tone: 'lilac', title: t('aboutP1Title'), body: t('aboutP1') },
    { Icon: HeartHandshake, tone: 'rose', title: t('aboutP2Title'), body: t('aboutP2') },
    { Icon: ShieldCheck, tone: 'mint', title: t('aboutP3Title'), body: t('aboutP3') },
    { Icon: Sparkles, tone: 'sky', title: t('aboutP4Title'), body: t('aboutP4') },
  ] as const

  return (
    <>
      <title>{`${t('aboutTitle')} · ${t('brand')}`}</title>
      <PageHeader title={t('aboutTitle')} lead={t('aboutLead')} />

      <section className={styles.section}>
        <h2 className={styles.title}>{t('aboutPrinciplesTitle')}</h2>
        <div className={card.grid}>
          {principles.map(({ Icon, tone, title, body }) => (
            <div key={title} className={card.card} data-tone={tone}>
              <span className={card.badge} aria-hidden="true">
                <Icon />
              </span>
              <h3 className={card.title}>{title}</h3>
              <p className={card.description}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.title}>{t('aboutInspirationTitle')}</h2>
        <p className={styles.prose}>{t('aboutInspiration')}</p>
        <p className={styles.prose}>{t('aboutOpenSource')}</p>
        <ButtonLink
          to={REPO_URL}
          target="_blank"
          rel="noreferrer"
          variant="secondary"
          className={styles.repo}
        >
          {t('viewOnGithub')}
        </ButtonLink>
      </section>
    </>
  )
}
