import { describe, expect, it } from 'vitest'
import { coercePreferences, defaultPreferences } from './preferences'

describe('coercePreferences', () => {
  it('falls back to defaults for garbage', () => {
    for (const raw of [undefined, null, 42, 'x', [], { lang: 'fr', theme: 7, players: null }]) {
      expect(coercePreferences(raw)).toEqual(defaultPreferences)
    }
  })

  it('keeps valid values and trims names', () => {
    expect(
      coercePreferences({
        lang: 'en',
        theme: 'dark',
        mode: 'call',
        players: ['Sara', 'x'.repeat(40)],
      }),
    ).toEqual({ lang: 'en', theme: 'dark', mode: 'call', players: ['Sara', 'x'.repeat(24)] })
  })

  it('replaces non-string names', () => {
    expect(coercePreferences({ players: [1, { a: 1 }] }).players).toEqual(['', ''])
  })
})
