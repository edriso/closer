import { Compass, Dices, MessageCircleHeart, Sparkles, type LucideIcon } from 'lucide-react'
import type { StringKey } from '../../i18n/strings'
import type { SectionId, Tone } from '../../types/content'

export interface SectionInfo {
  id: SectionId
  titleKey: StringKey
  blurbKey: StringKey
  tone: Tone
  icon: LucideIcon
}

export const sections: SectionInfo[] = [
  {
    id: 'talk',
    titleKey: 'talkTitle',
    blurbKey: 'talkBlurb',
    tone: 'lilac',
    icon: MessageCircleHeart,
  },
  { id: 'play', titleKey: 'playTitle', blurbKey: 'playBlurb', tone: 'sky', icon: Dices },
  {
    id: 'discover',
    titleKey: 'discoverTitle',
    blurbKey: 'discoverBlurb',
    tone: 'indigo',
    icon: Compass,
  },
  {
    id: 'moments',
    titleKey: 'momentsTitle',
    blurbKey: 'momentsBlurb',
    tone: 'rose',
    icon: Sparkles,
  },
]
