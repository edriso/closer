import { useEffect, useRef } from 'react'
import { Outlet, ScrollRestoration, useLocation } from 'react-router'
import { useI18n } from '../../i18n/useI18n'
import { DocumentSync } from './DocumentSync'
import { Footer } from './Footer'
import { Header } from './Header'
import styles from './Layout.module.css'
import { TabBar } from './TabBar'

export function Layout() {
  const { t } = useI18n()
  const { pathname } = useLocation()
  const main = useRef<HTMLElement>(null)
  const firstRender = useRef(true)
  const isHome = pathname === '/'

  // On client-side navigation, move focus to the new page so keyboard and
  // screen-reader users start at the content, not wherever the old link was.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    main.current?.focus({ preventScroll: true })
  }, [pathname])

  return (
    <>
      <DocumentSync />
      <a href="#main" className="skip-link">
        {t('skipToContent')}
      </a>
      <div className={styles.sky} aria-hidden="true" />
      <Header />
      <main
        id="main"
        ref={main}
        className={isHome ? styles.main : `${styles.main} ${styles.narrow}`}
        tabIndex={-1}
      >
        <Outlet />
      </main>
      {isHome && <Footer />}
      <TabBar />
      <ScrollRestoration />
    </>
  )
}
