/**
 * Wait (briefly) for the fonts the first screen uses, so text paints once in
 * the right typeface instead of flashing a fallback font and then swapping.
 * The app is client-rendered, so the page is blank until React mounts anyway:
 * holding the first render a few milliseconds costs nothing visible.
 */
const READEX = '"Readex Pro Variable"'
const FRAUNCES = '"Fraunces Variable"'

/** Never block longer than this, e.g. on a very slow connection. */
const MAX_WAIT_MS = 1200

export async function fontsReady(lang: string): Promise<void> {
  if (!document.fonts?.load) return
  // Load each unicode-range subset that is on screen: the UI always shows both
  // scripts (e.g. the "English" / "العربية" switch), and English headings use Fraunces.
  const loads = [
    document.fonts.load(`400 1em ${READEX}`, 'أقرب'),
    document.fonts.load(`400 1em ${READEX}`, 'Closer'),
  ]
  if (lang === 'en') loads.push(document.fonts.load(`600 1em ${FRAUNCES}`, 'Closer'))
  await Promise.race([
    Promise.allSettled(loads),
    new Promise((resolve) => setTimeout(resolve, MAX_WAIT_MS)),
  ])
}

/** Warm up the other language's display font so switching language never flashes. */
export function warmUpFonts(): void {
  const load = () => void document.fonts?.load(`600 1em ${FRAUNCES}`, 'Closer').catch(() => {})
  if ('requestIdleCallback' in window) window.requestIdleCallback(load, { timeout: 4000 })
  else setTimeout(load, 2000)
}
