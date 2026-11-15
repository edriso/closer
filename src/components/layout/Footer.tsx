import { Link } from 'react-router'
import { useI18n } from '../../i18n/useI18n'
import { HEART_PATH } from '../art/shapes'
import styles from './Footer.module.css'

export function Footer() {
  const { t } = useI18n()
  return (
    <footer className={styles.footer}>
      <p className={styles.note}>{t('footerNote')}</p>
      <p className={styles.links}>
        <span className={styles.made}>
          {t('footerMade')}
          <svg viewBox="-20 -20 40 36" aria-hidden="true" className={styles.heart}>
            <path d={HEART_PATH} />
          </svg>
        </span>
        <span aria-hidden="true">·</span>
        <Link to="/about">{t('navAbout')}</Link>
        <span aria-hidden="true">·</span>
        <Link to="/favorites">{t('navFavorites')}</Link>
      </p>
    </footer>
  )
}
