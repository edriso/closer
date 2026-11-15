import { defaultPreferences, preferencesStore, updatePreferences } from '../lib/preferences'
import { usePersistentStore } from './usePersistentStore'

export function usePreferences() {
  const [stored] = usePersistentStore(preferencesStore)
  return { ...defaultPreferences, ...stored, update: updatePreferences }
}
