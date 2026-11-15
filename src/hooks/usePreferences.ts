import { preferencesStore, updatePreferences } from '../lib/preferences'
import { usePersistentStore } from './usePersistentStore'

export function usePreferences() {
  const [prefs] = usePersistentStore(preferencesStore)
  return { ...prefs, update: updatePreferences }
}
