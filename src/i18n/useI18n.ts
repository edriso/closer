import { useCallback, useMemo } from 'react'
import { usePreferences } from '../hooks/usePreferences'
import type { Lang, Localized } from '../types/content'
import { strings, type StringKey } from './strings'

type Vars = Record<string, string | number>

const numberFormats: Record<Lang, Intl.NumberFormat> = {
  ar: new Intl.NumberFormat('ar-EG'),
  en: new Intl.NumberFormat('en'),
}

export function formatNumber(n: number, lang: Lang): string {
  return numberFormats[lang].format(n)
}

export function interpolate(template: string, vars: Vars | undefined, lang: Lang): string {
  if (!vars) return template
  return template.replace(/\{(\w+)\}/g, (match, key: string) => {
    const value = vars[key]
    if (value === undefined) return match
    return typeof value === 'number' ? formatNumber(value, lang) : value
  })
}

export function useI18n() {
  const { lang } = usePreferences()
  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  const t = useCallback(
    (key: StringKey, vars?: Vars) => interpolate(strings[key][lang], vars, lang),
    [lang],
  )
  /** Pick the current language from a content `Localized` value. */
  const l = useCallback((value: Localized) => value[lang], [lang])
  const n = useCallback((value: number) => formatNumber(value, lang), [lang])

  return useMemo(() => ({ lang, dir, t, l, n }) as const, [lang, dir, t, l, n])
}
