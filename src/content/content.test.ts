/**
 * Content integrity checks. These run in CI so a content edit can never ship
 * a missing translation, a duplicate ID or a broken subtopic reference.
 */
import { describe, expect, it } from 'vitest'
import type { Localized } from '../types/content'
import {
  activities,
  activityCategories,
  allTopics,
  discoverTopics,
  guessPrompts,
  journeyTopic,
  talkTopics,
  truthsThemes,
  wouldYouRather,
} from './index'

const ARABIC = /[؀-ۿ]/
/** Gendered words the content guide asks us to avoid. */
const AVOID = /(شريكك|شريكتك|حبيبك|حبيبتك|تحبين|تفضلين|تفضّلين)/

function checkLocalized(value: Localized, where: string) {
  expect(value.ar.trim(), `${where} (ar) is empty`).not.toBe('')
  expect(value.en.trim(), `${where} (en) is empty`).not.toBe('')
  expect(ARABIC.test(value.ar), `${where} (ar) has no Arabic`).toBe(true)
  expect(ARABIC.test(value.en), `${where} (en) contains Arabic`).toBe(false)
  expect(AVOID.test(value.ar), `${where} (ar) uses gendered wording: ${value.ar}`).toBe(false)
  expect(value.ar, `${where} (ar) has stray whitespace`).toBe(value.ar.trim())
  expect(value.en, `${where} (en) has stray whitespace`).toBe(value.en.trim())
}

describe('content', () => {
  it('has unique IDs everywhere', () => {
    const ids = [
      ...allTopics.flatMap((t) => t.questions.map((q) => q.id)),
      ...wouldYouRather.map((x) => x.id),
      ...guessPrompts.map((x) => x.id),
      ...truthsThemes.map((x) => x.id),
      ...activities.map((x) => x.id),
    ]
    const dupes = ids.filter((id, i) => ids.indexOf(id) !== i)
    expect(dupes).toEqual([])
  })

  it('has unique topic slugs per section', () => {
    const slugs = allTopics.map((t) => `${t.section}/${t.id}`)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('meets the planned volume', () => {
    const talk = talkTopics.reduce((sum, t) => sum + t.questions.length, 0)
    const discover = discoverTopics.reduce((sum, t) => sum + t.questions.length, 0)
    expect(talk).toBeGreaterThanOrEqual(130)
    expect(discover).toBeGreaterThanOrEqual(90)
    expect(journeyTopic.questions).toHaveLength(36)
    expect(wouldYouRather.length).toBeGreaterThanOrEqual(50)
    expect(guessPrompts.length).toBeGreaterThanOrEqual(40)
    expect(truthsThemes.length).toBeGreaterThanOrEqual(25)
    expect(activities.length).toBeGreaterThanOrEqual(48)
  })

  for (const topic of allTopics) {
    describe(`topic ${topic.section}/${topic.id}`, () => {
      it('is fully translated', () => {
        checkLocalized(topic.title, `${topic.id} title`)
        checkLocalized(topic.description, `${topic.id} description`)
        topic.subtopics.forEach((s) => checkLocalized(s.title, `${topic.id}/${s.id} title`))
      })

      it('has well-formed questions', () => {
        const subtopicIds = new Set(topic.subtopics.map((s) => s.id))
        for (const q of topic.questions) {
          expect(q.id.startsWith(`${topic.id}-`), `${q.id} prefix`).toBe(true)
          expect(subtopicIds.has(q.subtopic), `${q.id} subtopic "${q.subtopic}"`).toBe(true)
          checkLocalized(q.text, q.id)
          expect(q.text.ar.endsWith('؟'), `${q.id} (ar) should end with ؟`).toBe(true)
          expect(q.text.en.endsWith('?'), `${q.id} (en) should end with ?`).toBe(true)
          q.followUps?.forEach((f, i) => checkLocalized(f, `${q.id} follow-up ${i + 1}`))
        }
      })

      it('uses every subtopic', () => {
        for (const s of topic.subtopics) {
          expect(
            topic.questions.some((q) => q.subtopic === s.id),
            `${topic.id}/${s.id} is empty`,
          ).toBe(true)
        }
      })
    })
  }

  it('has well-formed games', () => {
    wouldYouRather.forEach((x) => {
      checkLocalized(x.a, `${x.id} a`)
      checkLocalized(x.b, `${x.id} b`)
    })
    guessPrompts.forEach((x) => checkLocalized(x.text, x.id))
    truthsThemes.forEach((x) => {
      checkLocalized(x.title, `${x.id} title`)
      checkLocalized(x.hint, `${x.id} hint`)
    })
  })

  it('has well-formed moments', () => {
    const categoryIds = new Set(activityCategories.map((c) => c.id))
    activityCategories.forEach((c) => {
      checkLocalized(c.title, `${c.id} title`)
      checkLocalized(c.description, `${c.id} description`)
    })
    for (const a of activities) {
      expect(categoryIds.has(a.category), `${a.id} category`).toBe(true)
      expect(a.modes.length, `${a.id} modes`).toBeGreaterThan(0)
      expect(a.minutes, `${a.id} minutes`).toBeGreaterThan(0)
      checkLocalized(a.title, `${a.id} title`)
      checkLocalized(a.description, `${a.id} description`)
      a.steps?.forEach((s, i) => checkLocalized(s, `${a.id} step ${i + 1}`))
    }
    for (const c of activityCategories) {
      expect(
        activities.some((a) => a.category === c.id),
        `${c.id} is empty`,
      ).toBe(true)
    }
  })
})
