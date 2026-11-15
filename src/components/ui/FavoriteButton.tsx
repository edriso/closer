import { Heart } from 'lucide-react'
import { useFavorites } from '../../hooks/useFavorites'
import { useI18n } from '../../i18n/useI18n'
import { Button } from './Button'
import styles from './FavoriteButton.module.css'

export function FavoriteButton({ id, size = 'md' }: { id: string; size?: 'sm' | 'md' }) {
  const { t } = useI18n()
  const { isFavorite, toggle } = useFavorites()
  const active = isFavorite(id)
  return (
    <Button
      variant="ghost"
      size={size}
      iconOnly
      className={styles.favorite}
      data-active={active}
      aria-pressed={active}
      aria-label={active ? t('removeFavorite') : t('saveFavorite')}
      title={active ? t('removeFavorite') : t('saveFavorite')}
      onClick={() => toggle(id)}
      icon={<Heart aria-hidden="true" />}
    />
  )
}
