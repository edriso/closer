import {
  BookOpen,
  Brain,
  CalendarHeart,
  Coffee,
  Compass,
  Footprints,
  Gem,
  HandHeart,
  Handshake,
  HeartHandshake,
  House,
  MessageCircleHeart,
  Moon,
  Mountain,
  PartyPopper,
  Rocket,
  Shuffle,
  Sparkles,
  Sprout,
  Star,
  Sun,
  Sunrise,
  Target,
  Timer,
  UsersRound,
  type LucideIcon,
} from 'lucide-react'

/**
 * Icon per content id. Kept out of the content files so content stays pure data.
 * Unknown ids fall back to Sparkles.
 */
const topicIcons: Record<string, LucideIcon> = {
  light: Sun,
  funny: PartyPopper,
  deep: Moon,
  memories: Footprints,
  dreams: Rocket,
  love: HeartHandshake,
  faith: Sunrise,
  personality: Brain,
  values: Gem,
  communication: MessageCircleHeart,
  expectations: House,
  habits: Coffee,
  goals: Mountain,
  deen: BookOpen,
  family: UsersRound,
  marriage: Handshake,
  journey: Compass,
  mix: Shuffle,
  // Moments categories
  quick: Timer,
  date: Star,
  challenge: Target,
  memory: HandHeart,
  dream: CalendarHeart,
  random: Sprout,
}

export function TopicIcon({ id }: { id: string }) {
  const Icon = topicIcons[id] ?? Sparkles
  return <Icon aria-hidden="true" />
}
