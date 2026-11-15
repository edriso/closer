import { useCallback } from 'react'
import { favoritesStore, toggleFavorite } from '../lib/favorites'
import { usePersistentStore } from './usePersistentStore'

export function useFavorites() {
  const [ids] = usePersistentStore(favoritesStore)
  const isFavorite = useCallback((id: string) => ids.includes(id), [ids])
  return { ids, isFavorite, toggle: toggleFavorite }
}
