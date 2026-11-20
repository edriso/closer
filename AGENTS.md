# AGENTS.md

Guidance for AI coding agents working on **Closer** (أقرب): a static, bilingual (Arabic-first + English), halal conversation and games site for Muslim married couples, built with React 19, TypeScript 7 and Vite 8, and deployed to GitHub Pages at `https://edriso.github.io/closer/`.

Read `README.md` for the product, `docs/ARCHITECTURE.md` for the internals, and both `docs/ISLAMIC_GUIDELINES.md` and `docs/CONTENT_GUIDE.md` before touching any content.

## Commands

```bash
npm install
npm run dev      # dev server at http://localhost:5173/closer/
npm run check    # typecheck + oxlint + vitest + prettier --check (CI runs exactly this)
npm run build    # production build to dist/
npm run format   # prettier --write .
```

Always finish with `npm run check` and `npm run build`. Both must pass.

## Non-negotiables

1. **Arabic is primary.** Every user-facing string exists in both `ar` and `en`. Never hardcode UI text in components: add it to `src/i18n/strings.ts` and use `t()`. Content text goes in `src/content/**` as `Localized` (`{ ar, en }`) and is read with `l()`.
2. **Gender-neutral Arabic.** UI and content may be read to a man or a woman. Use the dual for the couple (تبادلا), the ـك suffix, third-person verbs, nouns and names. Avoid تحب/تحبين-style verbs, singular imperatives and شريكك/حبيبك. Cards are read aloud by one partner, so the asker speaks in the first person (فيّ، مني، رأيي / "me"), never "your other half". Details are in `docs/CONTENT_GUIDE.md`.
3. **RTL-safe CSS.** Use logical properties only (`margin-inline-*`, `padding-block-*`, `inset-inline-*`, `text-align: start`). Swap directional icons with `dir` from `useI18n()`.
4. **Privacy.** There is no backend, no analytics, no third-party requests and no external fonts or CDNs. Persist only via `src/lib/storage.ts` (always guarded).
5. **Content IDs are permanent.** Favorites are stored by ID. Never renumber, reuse or rename an ID; to retire an item, delete it.
6. **Halal, always.** Every question, follow-up, game, activity and UI string follows `docs/ISLAMIC_GUIDELINES.md`. In short, never: birthdays or other non-Islamic festivals, music or dancing, lying even as a joke, bets or stakes, horoscopes, luck or magic, exes, crushes or confessing past sins, anything intimate, immodesty, alcohol or haram food, movie nights, backbiting or mockery, portraits of people, dogs as pets, mixed-gender socialising, riba-normal money, or showing off. When in doubt, leave it out.
7. **Know who each section is for.** Talk, Play, Moments and the Journey are for spouses: warm and affectionate, never sexual. Discover topics must also suit two people considering marriage (non-mahram, family aware), so no romance, flirting or anything physical there. Assume a Muslim couple, but never assume children, wealth, living parents or health. No guilt or pressure.
8. **Minimal and accessible.** Respect `prefers-reduced-motion`, keep visible focus states and tap targets of at least 40px, and label icon-only buttons with `aria-label`. When a focused control disappears, move focus somewhere sensible (see `useFocusOnMount`, and use `aria-disabled` rather than `disabled` on buttons that can hold focus).
9. **Calm, uncluttered UI.** One primary action per screen. Inner pages use a single narrow column. Navigation uses a featured card plus grouped list rows, not grids of cards. Secondary controls hide behind progressive disclosure (the deck's "Options", expandable activity rows). The footer appears on Home only. Before adding UI, ask whether it can be removed instead.

## Conventions

- **Styling:** CSS Modules next to components (`Foo.tsx` + `Foo.module.css`). Use the design tokens in `src/styles/tokens.css`; don't hardcode colors. Tint with `data-tone`.
- **Components:** function components with named exports. Reuse `Button`/`ButtonLink`, `Chips`, `PageHeader`, `FeatureCard`, `List`/`ListRow`, `ActivityRow`, `ActivityCard`, `FavoriteButton` and `DeckOptions` before making new ones.
- **Page titles:** render `<title>{`${pageTitle} · ${t('brand')}`}</title>` inside the page (React 19 hoists it).
- **Motion:** use `m.*` from `motion/react` (LazyMotion is strict, so `motion.*` will throw). For SVG, use the `art-*` CSS classes and never animate an element that has a `transform` attribute.
- **State:** persistent cross-component state uses `createPersistentStore(key, coerce)` + `usePersistentStore`. The `coerce` function must turn any stored value (old, corrupted, hand-edited) into a valid one. Don't add a state library.
- **Formatting:** Prettier (no semicolons, single quotes, 100 columns).
- **Dependencies:** keep them few. Ask before adding anything heavy.

## Common tasks

### Add questions to a topic

Append items to `src/content/<section>/<topic>.ts` with the next free ID (e.g. `love-021`), a valid `subtopic`, a `depth` and 1–3 `followUps`. Check each one against `docs/ISLAMIC_GUIDELINES.md`, then run `npm test` (its off-limits word list catches only obvious slips).

### Add a new topic

1. Create `src/content/talk/<id>.ts` (or `discover/`) exporting a `Topic`.
2. Register it in `src/content/index.ts` (`talkTopics` / `discoverTopics`).
3. Add an icon for its `id` in `src/components/ui/icons.tsx`.
4. Run `npm run check`. Routing (`/talk/:topicId`) picks it up automatically.

### Add a game

1. Check the idea against `docs/ISLAMIC_GUIDELINES.md`: no game may need a lie (even a playful one), a wager, a stake or chance for a prize.
2. Add a typed data file in `src/content/play/` and export it from `src/content/index.ts`.
3. Build the page in `src/pages/play/` using `PlayersSetup`, `GameStage`, `GameEnd`/`Scoreboard` and `takeFromDeck` for no-repeat prompts.
4. Add a route in `src/app/router.tsx` and the path in `vite.config.ts` (`staticPages`), a card in `PlayPage.tsx` and strings in `strings.ts`.

### Add a UI string

Add `{ ar, en }` to `src/i18n/strings.ts` (Arabic first, gender-neutral) and use `t('key')`, or `t('key', { name })` for `{placeholders}`. For counted nouns, add forms to `src/i18n/plural.ts`.

## Verifying UI changes

Run `npm run build && npm run preview` and check:

- Arabic (RTL) and English (LTR), using the language button in the header
- The light and dark themes
- Mobile at 360–390px width (the bottom tab bar appears below 760px) and desktop
- The browser console is free of errors

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`: check → build → deploy to GitHub Pages. The Vite `base` is `/closer/`. The build writes an `index.html` copy for every known route plus `sitemap.xml` (the `staticPages` plugin in `vite.config.ts`, with routes derived from the content files). The `serviceWorker` plugin then writes `sw.js` from `src/service-worker.js` so the app works offline (see `docs/ARCHITECTURE.md`). If the repo is renamed, update `base` and `SITE` in `vite.config.ts`, the paths in `public/404.html` and `public/manifest.webmanifest`, and the absolute URLs in `index.html`.
