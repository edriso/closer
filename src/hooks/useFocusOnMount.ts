import { useEffect, useRef } from 'react'

/**
 * Focus an element (usually a heading with tabIndex={-1}) when it appears,
 * so keyboard and screen-reader users land on the new content.
 */
export function useFocusOnMount<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  useEffect(() => {
    ref.current?.focus({ preventScroll: false })
  }, [])
  return ref
}
