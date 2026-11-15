import { useId } from 'react'

/** useId() output is not always valid inside url(#…), so keep only safe characters. */
export function useSvgId(prefix: string): string {
  return `${prefix}-${useId().replace(/[^a-zA-Z0-9_-]/g, '')}`
}
