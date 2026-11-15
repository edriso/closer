import { readJSON, writeJSON } from './storage'

/**
 * A minimal persisted store: one value, saved to localStorage, shared by every
 * component that subscribes (via `usePersistentStore`). It also syncs across tabs.
 */
export interface PersistentStore<T> {
  get: () => T
  set: (next: T | ((prev: T) => T)) => void
  subscribe: (listener: () => void) => () => void
}

export function createPersistentStore<T>(key: string, initial: T): PersistentStore<T> {
  let value: T = readJSON(key, initial)
  const listeners = new Set<() => void>()
  const emit = () => listeners.forEach((l) => l())

  if (typeof window !== 'undefined') {
    window.addEventListener('storage', (event) => {
      if (event.key === `closer:${key}`) {
        value = readJSON(key, initial)
        emit()
      }
    })
  }

  return {
    get: () => value,
    set: (next) => {
      value = typeof next === 'function' ? (next as (prev: T) => T)(value) : next
      writeJSON(key, value)
      emit()
    },
    subscribe: (listener) => {
      listeners.add(listener)
      return () => listeners.delete(listener)
    },
  }
}
