/**
 * Offline support. Closer is fully static, so once these files are cached the
 * whole app works with no connection, and keeps working even if the site is
 * ever taken down. Only same-origin requests are touched; nothing is sent anywhere.
 *
 * This file is a template: the `serviceWorker` plugin in vite.config.ts fills in
 * VERSION and PRECACHE at build time and writes the result to dist/sw.js.
 */

const VERSION = /* version */ 'dev'
const PRECACHE = /* precache */ []

const PREFIX = 'closer-'
const CACHE = `${PREFIX}${VERSION}`
const SCOPE = new URL(self.registration.scope)
const SHELL = new URL('index.html', SCOPE).href

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      // Bypass the HTTP cache so the shell and its assets always match.
      .then((cache) =>
        cache.addAll(
          PRECACHE.map((path) => new Request(new URL(path, SCOPE), { cache: 'reload' })),
        ),
      )
      .then(() => self.skipWaiting()),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => key.startsWith(PREFIX) && key !== CACHE)
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  if (request.method !== 'GET' || !request.url.startsWith(SCOPE.href)) return
  event.respondWith(request.mode === 'navigate' ? page(request) : asset(request))
})

/**
 * Pages: prefer the network so a new release shows up right away. Every route
 * serves the same app shell, so offline (or if the site is gone) use the cached one.
 */
async function page(request) {
  try {
    const response = await fetch(request)
    if (response.ok || response.type === 'opaqueredirect') return response
    return (await caches.match(SHELL)) ?? response
  } catch (error) {
    const shell = await caches.match(SHELL)
    if (shell) return shell
    throw error
  }
}

/** Assets: file names are content-hashed, so a cached copy is always correct. */
async function asset(request) {
  const cached = await caches.match(request)
  if (cached) return cached
  const response = await fetch(request)
  if (response.ok) {
    const copy = response.clone()
    void caches.open(CACHE).then((cache) => cache.put(request, copy))
  }
  return response
}
