/** Share text with the native share sheet, falling back to the clipboard. */
export async function shareText(
  text: string,
  url: string,
): Promise<'shared' | 'copied' | 'failed'> {
  try {
    if (navigator.share) {
      await navigator.share({ text, url })
      return 'shared'
    }
    await navigator.clipboard.writeText(`${text}\n${url}`)
    return 'copied'
  } catch (error) {
    // The user closing the share sheet is not a failure worth surfacing.
    if (error instanceof DOMException && error.name === 'AbortError') return 'shared'
    return 'failed'
  }
}

export function siteUrl(path = ''): string {
  return new URL(path.replace(/^\//, ''), window.location.origin + import.meta.env.BASE_URL).href
}
