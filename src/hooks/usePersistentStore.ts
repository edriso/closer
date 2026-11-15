import { useSyncExternalStore } from 'react'
import type { PersistentStore } from '../lib/store'

export function usePersistentStore<T>(store: PersistentStore<T>): [T, PersistentStore<T>['set']] {
  const value = useSyncExternalStore(store.subscribe, store.get, store.get)
  return [value, store.set]
}
