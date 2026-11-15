/**
 * Register the offline service worker (built from src/service-worker.js).
 * Production only: the dev server has no sw.js. Failure just means no offline mode.
 */
export function registerServiceWorker(): void {
  if (!import.meta.env.PROD || !('serviceWorker' in navigator)) return
  const register = () =>
    void navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`).catch(() => {})
  if (document.readyState === 'complete') register()
  else window.addEventListener('load', register, { once: true })
}
