# Architecture

Closer is a static, client-only React app. There is no backend, no account system and no analytics. Everything below is designed to keep it that way while staying easy to extend.

## Data flow

```
src/content/**  ──►  src/content/index.ts  ──►  pages/*  ──►  components/*
 (typed data)        (aggregates, lookups)      (routes)       (UI)
                                    ▲
src/lib/store.ts ── persistent stores (prefs, favorites) ── hooks/use*.ts
src/lib/deck.ts  ── session decks (order + cursor in sessionStorage)
```

- **Content is data.** Every question, game prompt and activity is a typed object with `{ ar, en }` text. Pages never import individual content files: they use `src/content/index.ts`, which also builds ID lookups (`getQuestion`, `getActivity`, …).
- **UI strings** live in `src/i18n/strings.ts`, also as `{ ar, en }` pairs. `useI18n()` returns `t(key, vars)` for UI strings, `l(localized)` for content and `n(number)` for numbers (Arabic uses Arabic-Indic digits). `plural()` uses `Intl.PluralRules`, so Arabic gets its six plural forms right.

## State & persistence

| What                                | Where                                  | Why                                          |
| ----------------------------------- | -------------------------------------- | -------------------------------------------- |
| Language, theme, mode, player names | `localStorage` → `closer:prefs`        | Survives reloads and visits                  |
| Favorites (IDs, newest first)       | `localStorage` → `closer:favorites`    | Survives reloads                             |
| Activity feedback                   | `localStorage` → `closer:feedback`     | Local only, never sent                       |
| Deck order + position               | `sessionStorage` → `closer:deck:<key>` | No repeats within a session; refresh resumes |

`createPersistentStore(key, coerce)` (`src/lib/store.ts`) is a tiny external store used through `useSyncExternalStore`, so every component stays in sync, including across tabs (via the `storage` event, including a full clear). Stored data is treated as untrusted: every read passes through `coerce`, so a stale, corrupted or hand-edited value falls back to valid defaults, and session decks are shape-checked the same way. All storage access is wrapped in `try/catch`, so the app keeps working in private mode.

## Decks (no-repeat engine)

`src/lib/deck.ts`:

- `loadDeck(key, ids, ordered)` resumes a saved deck if it holds exactly the same IDs. Otherwise it creates a fresh Fisher–Yates shuffle (or keeps the authored order for the Journey).
- The deck key encodes the topic **and** its filters (`talk/love|appreciation|deep`), so each filter combination has its own position.
- `takeFromDeck(key, ids, n)` is used by the games, Surprise and "Pick one for us". It walks one session-long shuffled order, so a prompt returns only after the whole pool has been seen.

Topic filters (`?sub=` and `?depth=`) live in the URL, so a filtered deck can be shared or bookmarked.

## Internationalization & RTL

- Arabic is the default. `<html lang dir>` is set before first paint by an inline script in `index.html` (no flash), then kept in sync by `DocumentSync`.
- Styles use **logical properties** (`margin-inline-start`, `inset-inline-end`, `padding-block`) throughout, so RTL needs no overrides. Directional icons (arrows) swap based on `dir`, and arrow-key navigation follows the reading direction (`useArrowKeys`).
- `--font-display` switches to Fraunces for English via `:root:lang(en)`. Arabic uses Readex Pro for everything.

## Theming

`src/styles/tokens.css` defines the **day sky** (light) and **night sky** (dark) tokens. The theme comes from the OS unless the user picks one with the toggle, which sets `data-theme` on `<html>`. Topic tints use `data-tone="lilac|sky|rose|mint|peach|indigo"`, which maps to `--tone-bg` / `--tone-ink`.

## Fonts (no flash)

- `preloadFonts` (`vite.config.ts`) injects `<link rel="preload">` for the Readex Pro Arabic and Latin subsets.
- `src/app/fonts.ts` holds the first render until the on-screen fonts are loaded, capped at 1.2s. The app is client-rendered, so this costs nothing visible, and text paints once in the right typeface. Fraunces (English headings) is warmed up in idle time so switching language never flashes.
- An inline `<style>` in `index.html` paints the theme's background before the stylesheet arrives.

## Illustrations & motion

- Illustrations are inline SVG React components in `src/components/art/`. They take their colors from CSS variables, so they adapt to the theme and the surrounding tone.
- SVG animation uses shared CSS classes (`art-float`, `art-drift`, `art-twinkle`, `art-pulse`, …) from `global.css`. **Gotcha:** never put an animation class on an element that also has a `transform` attribute, because the CSS transform replaces it. Wrap the element in a `<g>` instead (see `Cloud` in `shapes.tsx`).
- Card and page transitions use `motion` with `LazyMotion` (strict, `domMax`, which is needed for drag) and `m.*` components. Question cards can be swiped: toward the reading direction's start means next. With reduced motion, cards cross-fade in place. `MotionConfig reducedMotion="user"` plus a global CSS rule honor `prefers-reduced-motion`.

## Routing & hosting

- `createBrowserRouter` with `basename: import.meta.env.BASE_URL` (`/closer/`, set in `vite.config.ts`).
- GitHub Pages has no SPA fallback, so the `staticPages` build plugin (`vite.config.ts`) writes the app shell to every known route (`talk/love/index.html`, …) and generates `sitemap.xml`. Deep links return HTTP 200 and are indexable. For unknown paths, `public/404.html` saves the requested path to `sessionStorage` and redirects to `/closer/`, and then an inline script in `index.html` puts the path back before any module (and the router) loads.
- Build output is split into `react`, `motion`, `content` and app chunks for better long-term caching.

## Offline (service worker)

- `src/service-worker.js` is a template. The `serviceWorker` build plugin (`vite.config.ts`) fills in the list of files to cache (the shell, everything in `assets/`, icons and manifest) and a version hashed from their contents, then writes `dist/sw.js`. `src/app/serviceWorker.ts` registers it in production builds only.
- Pages are network-first so a new release appears right away; offline, or if the site returns an error, the cached shell is served (every route uses the same shell). Assets are cache-first because their names are content-hashed.
- Each release gets a new cache, and old `closer-*` caches are deleted on activation. The worker only handles same-origin requests within `/closer/`, so it doesn't change the no-third-party-requests rule.
- The per-route `index.html` copies, `404.html`, `sitemap.xml` and `og-image.png` are not cached. If you add a file under `public/` that the app needs offline, it's picked up automatically.

## Testing

- `src/content/content.test.ts` checks content integrity: translations present, the right script per language, unique IDs, valid subtopics, `؟`/`?` endings, banned gendered wording and minimum volume.
- `src/lib/*.test.ts` covers the shuffle fairness, the stable "of the day" pick and the deck engine (no repeats, resume, reshuffle).
- `src/i18n/plural.test.ts` covers Arabic plural agreement.
