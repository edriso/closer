import type { Lang, Mode } from '../types/content'
import { createPersistentStore } from './store'

export type ThemePreference = 'system' | 'light' | 'dark'

export interface Preferences {
  lang: Lang
  theme: ThemePreference
  mode: Mode
  /** Optional first names used by the games. Never leaves the device. */
  players: [string, string]
}

export const defaultPreferences: Preferences = {
  lang: 'ar',
  theme: 'system',
  mode: 'together',
  players: ['', ''],
}

export const preferencesStore = createPersistentStore<Preferences>('prefs', defaultPreferences)

/** Fill in fields added in later versions so old saved prefs keep working. */
export function readPreferences(): Preferences {
  return { ...defaultPreferences, ...preferencesStore.get() }
}

export function updatePreferences(patch: Partial<Preferences>): void {
  preferencesStore.set((prev) => ({ ...defaultPreferences, ...prev, ...patch }))
}
