import { createPersistentStore } from './store'

/** Favorite content IDs, newest first. IDs are globally unique across content types. */
export const favoritesStore = createPersistentStore('favorites', (raw): string[] =>
  Array.isArray(raw) ? [...new Set(raw.filter((x): x is string => typeof x === 'string'))] : [],
)

export function toggleFavorite(id: string): void {
  favoritesStore.set((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [id, ...prev]))
}
