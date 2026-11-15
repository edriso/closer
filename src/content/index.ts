/**
 * Single entry point for all content. Pages import from here, never from
 * individual content files, so adding a topic is a one-line change.
 */
import type { Activity, ActivityCategoryId, Question, Topic } from '../types/content'
import { communication } from './discover/communication'
import { expectations } from './discover/expectations'
import { goals } from './discover/goals'
import { habits } from './discover/habits'
import { journey } from './discover/journey'
import { personality } from './discover/personality'
import { values } from './discover/values'
import { activities } from './moments/activities'
import { activityCategories } from './moments/categories'
import { guessPrompts } from './play/guess'
import { truthsThemes } from './play/truths'
import { wouldYouRather } from './play/would-you-rather'
import { deep } from './talk/deep'
import { dreams } from './talk/dreams'
import { funny } from './talk/funny'
import { light } from './talk/light'
import { love } from './talk/love'
import { memories } from './talk/memories'

export const talkTopics: Topic[] = [light, funny, deep, memories, dreams, love]
export const discoverTopics: Topic[] = [
  personality,
  values,
  communication,
  expectations,
  habits,
  goals,
]
/** Shown as a featured card on Discover; lives at /discover/journey. */
export const journeyTopic: Topic = journey
export const allTopics: Topic[] = [...talkTopics, ...discoverTopics, journeyTopic]

export { activities, activityCategories, guessPrompts, truthsThemes, wouldYouRather }

export interface QuestionRef {
  question: Question
  topic: Topic
}

const questionIndex = new Map<string, QuestionRef>()
for (const topic of allTopics) {
  for (const question of topic.questions) questionIndex.set(question.id, { question, topic })
}

const activityIndex = new Map<string, Activity>(activities.map((a) => [a.id, a]))

export function getTopic(section: Topic['section'], id: string | undefined): Topic | undefined {
  return allTopics.find((t) => t.section === section && t.id === id)
}

export function getQuestion(id: string): QuestionRef | undefined {
  return questionIndex.get(id)
}

export function getActivity(id: string): Activity | undefined {
  return activityIndex.get(id)
}

export function getActivityCategory(id: string | undefined) {
  return activityCategories.find((c) => c.id === id)
}

export function activitiesIn(category: ActivityCategoryId): Activity[] {
  return activities.filter((a) => a.category === category)
}

/** Every Talk question, used by the "mix" deck, question of the day and surprises. */
export const talkQuestions: QuestionRef[] = talkTopics.flatMap((topic) =>
  topic.questions.map((question) => ({ question, topic })),
)
