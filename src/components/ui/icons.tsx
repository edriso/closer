import {
  Brain,
  Coffee,
  Compass,
  Dices,
  Footprints,
  Gem,
  HandHeart,
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
  Timer,
  WandSparkles,
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
  personality: Brain,
  values: Gem,
  communication: MessageCircleHeart,
  expectations: House,
  habits: Coffee,
  goals: Mountain,
  journey: Compass,
  mix: Shuffle,
  // Moments categories
  quick: Timer,
  date: Star,
  challenge: Dices,
  memory: HandHeart,
  dream: WandSparkles,
  random: Sprout,
}

export function TopicIcon({ id }: { id: string }) {
  const Icon = topicIcons[id] ?? Sparkles
  return <Icon aria-hidden="true" />
}
