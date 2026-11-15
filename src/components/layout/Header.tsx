import { Heart, Moon, Sun } from 'lucide-react'
import { Link, NavLink, useLocation } from 'react-router'
import { usePreferences } from '../../hooks/usePreferences'
import { useI18n } from '../../i18n/useI18n'
import { LogoMark } from '../art/LogoMark'
import { Button, ButtonLink } from '../ui/Button'
import styles from './Header.module.css'
import { sections } from './sections'
import { useResolvedTheme } from './useResolvedTheme'

export function Header() {
  const { t, lang } = useI18n()
  const { update } = usePreferences()
  const theme = useResolvedTheme()
  const { pathname } = useLocation()
  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand} aria-label={t('navHome')}>
          <LogoMark size={34} />
          <span className={styles.wordmark}>{t('brand')}</span>
        </Link>

        <nav aria-label={t('navMain')} className={styles.nav}>
          {sections.map((s) => (
            <NavLink key={s.id} to={`/${s.id}`} className={styles.navLink}>
              {t(s.titleKey)}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <ButtonLink
            to="/favorites"
            aria-current={pathname === '/favorites' ? 'page' : undefined}
            variant="ghost"
            size="sm"
            iconOnly
            aria-label={t('navFavorites')}
            title={t('navFavorites')}
            icon={<Heart aria-hidden="true" />}
          />
          <Button
            variant="ghost"
            size="sm"
            iconOnly
            aria-label={nextTheme === 'dark' ? t('themeToDark') : t('themeToLight')}
            title={nextTheme === 'dark' ? t('themeToDark') : t('themeToLight')}
            onClick={() => update({ theme: nextTheme })}
            icon={theme === 'dark' ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
          />
          <Button
            variant="secondary"
            size="sm"
            className={styles.lang}
            lang={lang === 'ar' ? 'en' : 'ar'}
            aria-label={t('switchLanguageLabel')}
            onClick={() => update({ lang: lang === 'ar' ? 'en' : 'ar' })}
          >
            {t('switchLanguage')}
          </Button>
        </div>
      </div>
    </header>
  )
}
