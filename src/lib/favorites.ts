import { createPersistentStore } from './store'

/** Favorite content IDs, newest first. IDs are globally unique across content types. */
export const favoritesStore = createPersistentStore<string[]>('favorites', [])

export function toggleFavorite(id: string): void {
  favoritesStore.set((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [id, ...prev]))
}
