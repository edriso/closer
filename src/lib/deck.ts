import { shuffle } from './random'
import { readJSON, removeKey, writeJSON } from './storage'

/**
 * A deck is an ordered list of IDs plus a cursor, kept in sessionStorage.
 * - No repeats within a session: the order is shuffled once and walked through.
 * - Refreshing the page resumes where you were.
 * - "Shuffle again" starts a fresh order.
 */
export interface DeckState {
  order: string[]
  index: number
}

const storageKey = (deckKey: string) => `deck:${deckKey}`

export function loadDeck(deckKey: string, ids: readonly string[], ordered = false): DeckState {
  const saved = readJSON<unknown>(storageKey(deckKey), null, 'session')
  if (isDeckState(saved) && sameMembers(saved.order, ids)) {
    return { order: saved.order, index: clamp(saved.index, 0, saved.order.length) }
  }
  return createDeck(deckKey, ids, ordered)
}

export function createDeck(deckKey: string, ids: readonly string[], ordered = false): DeckState {
  const state = { order: ordered ? ids.slice() : shuffle(ids), index: 0 }
  saveDeck(deckKey, state)
  return state
}

export function saveDeck(deckKey: string, state: DeckState): void {
  writeJSON(storageKey(deckKey), state, 'session')
}

export function clearDeck(deckKey: string): void {
  removeKey(storageKey(deckKey), 'session')
}

/** Session data is untrusted: only accept a well-formed deck. */
function isDeckState(value: unknown): value is DeckState {
  if (typeof value !== 'object' || value === null) return false
  const { order, index } = value as Partial<DeckState>
  return (
    Array.isArray(order) &&
    order.every((id) => typeof id === 'string') &&
    typeof index === 'number' &&
    Number.isInteger(index)
  )
}

function sameMembers(a: readonly string[], b: readonly string[]): boolean {
  if (a.length !== b.length) return false
  const set = new Set(b)
  return a.every((id) => set.has(id))
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

/**
 * Take the next `count` IDs from a session deck, reshuffling when it runs out.
 * Games use this so a prompt doesn't come back until the whole pool has been seen.
 */
export function takeFromDeck(deckKey: string, ids: readonly string[], count: number): string[] {
  let state = loadDeck(deckKey, ids)
  const taken: string[] = []
  const wanted = Math.min(count, ids.length)
  while (taken.length < wanted) {
    if (state.index >= state.order.length) state = createDeck(deckKey, ids)
    const id = state.order[state.index++]
    if (!taken.includes(id)) taken.push(id)
  }
  saveDeck(deckKey, state)
  return taken
}
