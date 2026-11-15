import { useEffect, useRef } from 'react'

/**
 * Arrow-key navigation that respects reading direction: in RTL, ← moves forward.
 * Ignored while typing in a field or when a modifier key is held.
 */
export function useArrowKeys(dir: 'rtl' | 'ltr', onNext: () => void, onPrev: () => void) {
  const handlers = useRef({ onNext, onPrev })
  useEffect(() => {
    handlers.current = { onNext, onPrev }
  })

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return
      const target = event.target as HTMLElement | null
      if (target?.closest('input, textarea, select, [contenteditable="true"]')) return
      const forward = dir === 'rtl' ? 'ArrowLeft' : 'ArrowRight'
      const backward = dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft'
      if (event.key === forward) handlers.current.onNext()
      else if (event.key === backward) handlers.current.onPrev()
      else return
      event.preventDefault()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [dir])
}
