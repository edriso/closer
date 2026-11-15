/**
 * Content model for Closer.
 *
 * Every piece of user-facing content carries both languages side by side
 * (`Localized`), so a translation can never drift out of sync with its source.
 * IDs are stable forever: favorites are stored by ID in the user's browser.
 */

export type Lang = 'ar' | 'en'

export type Localized = Record<Lang, string>

/** How intense a question feels. Used by the depth filter. */
export type Depth = 'light' | 'medium' | 'deep'

/** How the couple is spending time together right now. */
export type Mode = 'call' | 'together'

/** Soft color family used to tint a topic or category card. */
export type Tone = 'lilac' | 'sky' | 'rose' | 'mint' | 'peach' | 'indigo'

export type SectionId = 'talk' | 'play' | 'discover' | 'moments'

export interface Subtopic {
  id: string
  title: Localized
}

export interface Question {
  /** Stable, unique across the whole site, e.g. `light-001`. */
  id: string
  /** Must match one of the parent topic's `subtopics[].id`. */
  subtopic: string
  depth: Depth
  text: Localized
  /** "Tell me more": gentle follow-ups that keep the conversation going. */
  followUps?: Localized[]
}

export interface Topic {
  /** URL slug, e.g. `light` → /talk/light */
  id: string
  section: 'talk' | 'discover'
  tone: Tone
  title: Localized
  description: Localized
  subtopics: Subtopic[]
  /** When true, questions are shown in authored order instead of shuffled. */
  ordered?: boolean
  questions: Question[]
}

/* ---------- Play ---------- */

export interface WouldYouRatherItem {
  id: string
  /** Short noun phrases (no gendered verbs), e.g. "A cabin in the mountains". */
  a: Localized
  b: Localized
}

/** A noun-phrase prompt about the other person, e.g. "Comfort food after a long day". */
export interface GuessItem {
  id: string
  text: Localized
}

export interface TruthsTheme {
  id: string
  title: Localized
  /** One-line nudge to help the player come up with statements. */
  hint: Localized
}

/* ---------- Moments ---------- */

export type ActivityCategoryId = 'quick' | 'date' | 'challenge' | 'memory' | 'dream' | 'random'

export interface ActivityCategory {
  id: ActivityCategoryId
  tone: Tone
  title: Localized
  description: Localized
}

export interface Activity {
  id: string
  category: ActivityCategoryId
  title: Localized
  description: Localized
  /** Optional short steps, written to the couple (Arabic dual form). */
  steps?: Localized[]
  /** Rough duration in minutes. */
  minutes: number
  /** Which ways of spending time this works for. */
  modes: Mode[]
}
