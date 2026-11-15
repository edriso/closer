import { Dices, HeartHandshake, VenetianMask } from 'lucide-react'
import { SectionArt } from '../../components/art/SectionArt'
import card from '../../components/ui/Card.module.css'
import { PageHeader } from '../../components/ui/PageHeader'
import { TopicCard } from '../../components/ui/TopicCard'
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
      <div className={card.grid}>
        <TopicCard
          to="/play/would-you-rather"
          tone="sky"
          icon={<Dices />}
          title={t('wyrTitle')}
          description={t('wyrDescription')}
        />
        <TopicCard
          to="/play/who-knows"
          tone="rose"
          icon={<HeartHandshake />}
          title={t('whoTitle')}
          description={t('whoDescription')}
        />
        <TopicCard
          to="/play/two-truths"
          tone="mint"
          icon={<VenetianMask />}
          title={t('truthsTitle')}
          description={t('truthsDescription')}
        />
      </div>
    </>
  )
}
