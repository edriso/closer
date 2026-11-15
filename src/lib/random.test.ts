import { describe, expect, it } from 'vitest'
import { hashString, localDateKey, pickOfTheDay, seededRandom, shuffle } from './random'

describe('shuffle', () => {
  it('keeps every item exactly once', () => {
    const input = Array.from({ length: 50 }, (_, i) => i)
    const out = shuffle(input)
    expect(out).toHaveLength(50)
    expect([...out].sort((a, b) => a - b)).toEqual(input)
  })

  it('does not mutate the input', () => {
    const input = [1, 2, 3]
    shuffle(input)
    expect(input).toEqual([1, 2, 3])
  })

  it('is roughly uniform', () => {
    const counts = [0, 0, 0]
    const random = seededRandom(42)
    for (let i = 0; i < 30_000; i++) counts[shuffle([0, 1, 2], random)[0]]++
    for (const c of counts) expect(c).toBeGreaterThan(9_000)
  })
})

describe('of the day', () => {
  it('formats local dates', () => {
    expect(localDateKey(new Date(2026, 0, 5))).toBe('2026-01-05')
  })

  it('is stable for a given day and varies across days', () => {
    const items = Array.from({ length: 100 }, (_, i) => i)
    const a = pickOfTheDay(items, new Date(2026, 4, 1, 9))
    const b = pickOfTheDay(items, new Date(2026, 4, 1, 22))
    expect(a).toBe(b)
    const week = new Set(
      Array.from({ length: 7 }, (_, d) => pickOfTheDay(items, new Date(2026, 4, 1 + d))),
    )
    expect(week.size).toBeGreaterThan(3)
  })

  it('hashes deterministically', () => {
    expect(hashString('closer')).toBe(hashString('closer'))
    expect(hashString('closer')).not.toBe(hashString('closer!'))
  })
})
