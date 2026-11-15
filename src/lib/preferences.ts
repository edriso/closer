import type { Lang, Mode } from '../types/content'
import { createPersistentStore, isRecord } from './store'

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

const oneOf = <T extends string>(value: unknown, allowed: readonly T[], fallback: T): T =>
  allowed.includes(value as T) ? (value as T) : fallback

const name = (value: unknown) => (typeof value === 'string' ? value.slice(0, 24) : '')

/** Accept anything from storage and return valid preferences (unknown fields dropped). */
export function coercePreferences(raw: unknown): Preferences {
  const p = isRecord(raw) ? raw : {}
  const players = Array.isArray(p.players) ? p.players : []
  return {
    lang: oneOf(p.lang, ['ar', 'en'], defaultPreferences.lang),
    theme: oneOf(p.theme, ['system', 'light', 'dark'], defaultPreferences.theme),
    mode: oneOf(p.mode, ['together', 'call'], defaultPreferences.mode),
    players: [name(players[0]), name(players[1])],
  }
}

export const preferencesStore = createPersistentStore('prefs', coercePreferences)

export function updatePreferences(patch: Partial<Preferences>): void {
  preferencesStore.set((prev) => ({ ...prev, ...patch }))
}
