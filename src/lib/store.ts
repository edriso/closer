import { readJSON, writeJSON } from './storage'

/**
 * A minimal persisted store: one value, saved to localStorage, shared by every
 * component that subscribes (via `usePersistentStore`). It also syncs across tabs.
 *
 * Stored data is untrusted (old versions, manual edits, other tabs), so every
 * read goes through `coerce`, which must return a valid value no matter what.
 */
export interface PersistentStore<T> {
  get: () => T
  set: (next: T | ((prev: T) => T)) => void
  subscribe: (listener: () => void) => () => void
}

export function createPersistentStore<T>(
  key: string,
  coerce: (raw: unknown) => T,
): PersistentStore<T> {
  const read = () => coerce(readJSON<unknown>(key, undefined))
  let value: T = read()
  const listeners = new Set<() => void>()
  const emit = () => listeners.forEach((l) => l())

  if (typeof window !== 'undefined') {
    window.addEventListener('storage', (event) => {
      // `key === null` means the other tab cleared all storage.
      if (event.key === null || event.key === `closer:${key}`) {
        value = read()
        emit()
      }
    })
  }

  return {
    get: () => value,
    set: (next) => {
      value = coerce(typeof next === 'function' ? (next as (prev: T) => T)(value) : next)
      writeJSON(key, value)
      emit()
    },
    subscribe: (listener) => {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
  }
}

export const isRecord = (v: unknown): v is Record<string, unknown> =>
  typeof v === 'object' && v !== null && !Array.isArray(v)
