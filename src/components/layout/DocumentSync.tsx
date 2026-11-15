import { useEffect } from 'react'
import { usePreferences } from '../../hooks/usePreferences'
import { useI18n } from '../../i18n/useI18n'
import { useResolvedTheme } from './useResolvedTheme'

/** Keeps <html lang dir data-theme> and the browser UI color in sync with preferences. */
export function DocumentSync() {
  const { lang, dir, t } = useI18n()
  const { theme } = usePreferences()
  const resolved = useResolvedTheme()

  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = dir
    if (theme === 'system') delete root.dataset.theme
    else root.dataset.theme = theme
  }, [lang, dir, theme])

  useEffect(() => {
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', resolved === 'dark' ? '#0e0d24' : '#f7f6fd')
  }, [resolved])

  useEffect(() => {
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', t('metaDescription'))
  }, [t])

  return null
}
