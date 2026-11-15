import { useSyncExternalStore } from 'react'
import { usePreferences } from '../../hooks/usePreferences'

const query = '(prefers-color-scheme: dark)'

function subscribe(onChange: () => void) {
  const mql = window.matchMedia(query)
  mql.addEventListener('change', onChange)
  return () => mql.removeEventListener('change', onChange)
}

/** The theme actually on screen: the explicit choice, or the OS setting. */
export function useResolvedTheme(): 'light' | 'dark' {
  const { theme } = usePreferences()
  const systemDark = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  )
  if (theme === 'system') return systemDark ? 'dark' : 'light'
  return theme
}
