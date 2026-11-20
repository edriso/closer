import { HeartHandshake, Lightbulb, Scale } from 'lucide-react'
import { SectionArt } from '../../components/art/SectionArt'
import { List, ListRow } from '../../components/ui/List'
import { PageHeader } from '../../components/ui/PageHeader'
import { useI18n } from '../../i18n/useI18n'

export function PlayPage() {
  const { t } = useI18n()
  return (
    <>
      <title>{`${t('playTitle')} · ${t('brand')}`}</title>
      <PageHeader
        title={t('playTitle')}
        lead={t('playLead')}
        tone="sky"
        art={<SectionArt section="play" />}
      />
      <List label={t('playTitle')}>
        <ListRow
          to="/play/would-you-rather"
          tone="sky"
          icon={<Scale />}
          title={t('wyrTitle')}
          subtitle={t('wyrDescription')}
        />
        <ListRow
          to="/play/who-knows"
          tone="rose"
          icon={<HeartHandshake />}
          title={t('whoTitle')}
          subtitle={t('whoDescription')}
        />
        <ListRow
          to="/play/two-truths"
          tone="mint"
          icon={<Lightbulb />}
          title={t('truthsTitle')}
          subtitle={t('truthsDescription')}
        />
      </List>
    </>
  )
}
