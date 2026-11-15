import type { ActivityCategory } from '../../types/content'

export const activityCategories: ActivityCategory[] = [
  {
    id: 'quick',
    tone: 'sky',
    title: { ar: 'خمس دقائق', en: '5-minute moments' },
    description: {
      ar: 'لحظات صغيرة تتسع لها أكثر الأيام انشغالًا، وتترك فيها أثرًا دافئًا.',
      en: 'Tiny moments that fit into the busiest day and still leave it warmer.',
    },
  },
  {
    id: 'date',
    tone: 'rose',
    title: { ar: 'أفكار لموعد', en: 'Date ideas' },
    description: {
      ar: 'مواعيد جاهزة في المكان نفسه أو عبر مكالمة، بلا تحضير ولا تكلفة كبيرة.',
      en: 'Ready-made dates side by side or over a call, with no planning and little cost.',
    },
  },
  {
    id: 'challenge',
    tone: 'peach',
    title: { ar: 'تحديات صغيرة', en: 'Mini challenges' },
    description: {
      ar: 'تحديات خفيفة ومرحة تضحكان فيها وتجرّبان شيئًا جديدًا معًا.',
      en: 'Light, playful challenges to laugh at and try something new together.',
    },
  },
  {
    id: 'memory',
    tone: 'mint',
    title: { ar: 'ذكرياتنا', en: 'Memory lane' },
    description: {
      ar: 'عودا معًا إلى اللحظات التي صنعت قصتكما، وتذكّرا تفاصيلها الجميلة.',
      en: 'Wander back together through the moments that made your story.',
    },
  },
  {
    id: 'dream',
    tone: 'lilac',
    title: { ar: 'يومنا المثالي', en: 'Plan your dream day' },
    description: {
      ar: 'احلما وخطّطا معًا: يومًا أو رحلة أو ركنًا صغيرًا يشبهكما.',
      en: 'Dream and plan together: a day, a trip or a little corner that feels like you.',
    },
  },
  {
    id: 'random',
    tone: 'indigo',
    title: { ar: 'شيء عشوائي لطيف', en: 'Something random & fun' },
    description: {
      ar: 'أفكار غير متوقعة لتلك الأوقات التي تريدان فيها شيئًا مختلفًا.',
      en: 'Unexpected little ideas for when you just want something different.',
    },
  },
]
