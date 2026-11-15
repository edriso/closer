import { usePreferences } from '../../hooks/usePreferences'
import { useI18n } from '../../i18n/useI18n'

/** Player display names, falling back to friendly defaults when left blank. */
export function usePlayers(): [string, string] {
  const { players } = usePreferences()
  const { t } = useI18n()
  return [players[0].trim() || t('playerOneDefault'), players[1].trim() || t('playerTwoDefault')]
}
