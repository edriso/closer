/**
 * Tiny, crash-proof wrappers around Web Storage.
 * Storage can throw (private mode, blocked cookies, quota), and the app must
 * keep working without it, so every access is guarded.
 */

const PREFIX = 'closer:'

type Area = 'local' | 'session'

function area(kind: Area): Storage | null {
  try {
    return kind === 'local' ? window.localStorage : window.sessionStorage
  } catch {
    return null
  }
}

export function readJSON<T>(key: string, fallback: T, kind: Area = 'local'): T {
  try {
    const raw = area(kind)?.getItem(PREFIX + key)
    return raw == null ? fallback : (JSON.parse(raw) as T)
  } catch {
    return fallback
  }
}

export function writeJSON(key: string, value: unknown, kind: Area = 'local'): void {
  try {
    area(kind)?.setItem(PREFIX + key, JSON.stringify(value))
  } catch {
    /* storage unavailable or full: ignore */
  }
}

export function removeKey(key: string, kind: Area = 'local'): void {
  try {
    area(kind)?.removeItem(PREFIX + key)
  } catch {
    /* ignore */
  }
}
