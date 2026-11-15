import { Link } from 'react-router'
import { useI18n } from '../../i18n/useI18n'
import styles from './Footer.module.css'

/** A single quiet link, shown on the home page only. */
export function Footer() {
  const { t } = useI18n()
  return (
    <footer className={styles.footer}>
      <Link to="/about" className={styles.link}>
        {t('navAbout')}
      </Link>
    </footer>
  )
}
