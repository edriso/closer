// @vitest-environment jsdom
import { beforeEach, describe, expect, it } from 'vitest'
import { createDeck, loadDeck, saveDeck, takeFromDeck } from './deck'

const ids = Array.from({ length: 20 }, (_, i) => `q-${i}`)

describe('deck', () => {
  beforeEach(() => sessionStorage.clear())

  it('contains every id once', () => {
    const deck = createDeck('t', ids)
    expect([...deck.order].sort()).toEqual([...ids].sort())
  })

  it('keeps authored order when asked', () => {
    expect(createDeck('t', ids, true).order).toEqual(ids)
  })

  it('resumes a saved deck within the session', () => {
    const deck = createDeck('t', ids)
    saveDeck('t', { ...deck, index: 7 })
    const again = loadDeck('t', ids)
    expect(again.order).toEqual(deck.order)
    expect(again.index).toBe(7)
  })

  it('starts fresh when the pool changes', () => {
    createDeck('t', ids)
    const deck = loadDeck('t', ids.slice(0, 5))
    expect(deck.order).toHaveLength(5)
    expect(deck.index).toBe(0)
  })

  it('takes without repeats until the pool is exhausted', () => {
    const seen = [
      ...takeFromDeck('g', ids, 8),
      ...takeFromDeck('g', ids, 8),
      ...takeFromDeck('g', ids, 4),
    ]
    expect(new Set(seen).size).toBe(20)
  })

  it('never returns duplicates within one take', () => {
    takeFromDeck('g', ids, 18)
    const next = takeFromDeck('g', ids, 10)
    expect(new Set(next).size).toBe(10)
  })
})
