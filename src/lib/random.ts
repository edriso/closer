/** Unbiased Fisher–Yates shuffle. Returns a new array. */
export function shuffle<T>(items: readonly T[], random: () => number = Math.random): T[] {
  const out = items.slice()
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

export function pickRandom<T>(items: readonly T[], random: () => number = Math.random): T {
  if (items.length === 0) throw new Error('pickRandom: empty list')
  return items[Math.floor(random() * items.length)]
}

/** Deterministic 32-bit hash of a string (FNV-1a). */
export function hashString(value: string): number {
  let hash = 0x811c9dc5
  for (let i = 0; i < value.length; i++) {
    hash ^= value.charCodeAt(i)
    hash = Math.imul(hash, 0x01000193)
  }
  return hash >>> 0
}

/** Small seeded PRNG (mulberry32), handy for stable "of the day" picks. */
export function seededRandom(seed: number): () => number {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** Local calendar date as YYYY-MM-DD (not UTC), so "today" matches the user's day. */
export function localDateKey(date: Date = new Date()): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

/** Same item for everyone all day, a different one tomorrow. */
export function pickOfTheDay<T>(items: readonly T[], date: Date = new Date()): T {
  const random = seededRandom(hashString(localDateKey(date)))
  return pickRandom(items, random)
}
