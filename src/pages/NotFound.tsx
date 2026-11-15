import { MoonArt } from '../components/art/MoonArt'
import { ButtonLink } from '../components/ui/Button'
import { useI18n } from '../i18n/useI18n'
import styles from './FavoritesPage.module.css'

export function NotFound() {
  const { t } = useI18n()
  return (
    <>
      <title>{`${t('notFoundTitle')} · ${t('brand')}`}</title>
      <div className={styles.empty} style={{ paddingBlock: 'var(--space-8)' }}>
        <MoonArt className={styles.emptyArt} />
        <h1>{t('notFoundTitle')}</h1>
        <p>{t('notFoundBody')}</p>
        <ButtonLink to="/">{t('backHome')}</ButtonLink>
      </div>
    </>
  )
}
