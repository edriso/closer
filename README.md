<div align="center">

<img src="public/favicon.svg" width="72" height="72" alt="" />

# أقرب · Closer

**أقرب قليلًا، مع كل حديث.**
_A little closer, every conversation._

A cozy, bilingual (Arabic-first and English) space for couples, engaged or married, to talk, play and get to know each other better.
No accounts. No tracking. No AI. Just good time together.

</div>

---

## What's inside

| Section               | What it offers                                                                                                                                                                                                                     |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Talk** · لنتحدّث     | 130 conversation questions across 6 topics (Light, Funny, Deep, Memories, Dreams, Love), each with subtopics, a depth filter and "Tell me more" follow-ups. There's also a shuffled mix of everything.                             |
| **Discover** · لنتعرّف | 95 deeper questions on personality, values, communication, expectations (premarital-style: money, families, home, children), habits and life goals. Also **The closeness journey**: 36 questions in three gently deepening stages. |
| **Play** · لنلعب      | Three games for two: _Would you rather?_ (60 pairs), _Who knows who better?_ (50 prompts) and _Two truths and a lie_ (30 themes).                                                                                                  |
| **Moments** · لحظات   | 54 small ready-made activities in 6 categories: 5-minute moments, date ideas, mini challenges, memory lane, plan your dream day and something random. Most work on a call too.                                                     |

Plus: **Surprise us** (a random question, game or moment), **Question of the day**, **Favorites**, an _On a call / Together_ mode, a day-sky and night-sky theme, and full RTL/LTR support.

### Product principles

- **Conversation, not interrogation.** Nothing is mandatory, skipping is always one tap away, and deep questions are optional.
- **Connection, not competition.** Games keep score lightly. The point is laughing and learning.
- **Privacy first.** No accounts, no analytics, no servers. Favorites, names and preferences live in the browser's `localStorage`.
- **Quality over quantity.** Every item is written originally in both languages and checked by automated content tests. See [docs/CONTENT_GUIDE.md](docs/CONTENT_GUIDE.md).

## Tech stack

| Layer     | Choice                                                                                   |
| --------- | ---------------------------------------------------------------------------------------- |
| Framework | React 19 + TypeScript 7                                                                  |
| Build     | Vite 8 (Rolldown)                                                                        |
| Routing   | React Router 8 (`createBrowserRouter`)                                                   |
| Styling   | CSS Modules + design tokens (CSS custom properties), logical properties for RTL          |
| Motion    | `motion` (LazyMotion, respects reduced motion) + CSS keyframes for the SVG illustrations |
| Icons     | `lucide-react` + hand-made animated SVG illustrations                                    |
| Fonts     | Readex Pro (Arabic + Latin) and Fraunces (English display), self-hosted via Fontsource   |
| Quality   | Vitest (unit + content-integrity tests), oxlint, Prettier                                |
| Hosting   | GitHub Pages via GitHub Actions                                                          |

## Getting started

Requires Node.js 22+.

```bash
npm install
npm run dev        # http://localhost:5173/closer/
```

| Script                            | Does                                                      |
| --------------------------------- | --------------------------------------------------------- |
| `npm run dev`                     | Start the dev server                                      |
| `npm run build`                   | Typecheck and build to `dist/`                            |
| `npm run preview`                 | Serve the production build                                |
| `npm run check`                   | Typecheck, lint, test and check formatting (what CI runs) |
| `npm test` / `npm run test:watch` | Run the Vitest suites                                     |
| `npm run format`                  | Format everything with Prettier                           |

## Project structure

```
src/
├── app/            Router
├── components/
│   ├── art/        Animated SVG illustrations (hero, section art, moon, logo)
│   ├── deck/       The question deck (cards, follow-ups, done state)
│   ├── game/       Shared game pieces (players setup, stage, results)
│   ├── layout/     Header, bottom tab bar, home footer, theme/lang sync
│   └── ui/         Buttons, chips, cards, mode picker, favorites, feedback
├── content/        All content as typed data, plus integrity tests
├── hooks/          Persistent stores, preferences, favorites, arrow keys
├── i18n/           UI strings (ar/en), the t() hook, Arabic plural rules
├── lib/            Storage, shuffling, decks, sharing
├── pages/          Route components
├── styles/         Design tokens and global styles
└── types/          The content model
```

Read [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for how the pieces fit together.

## Contributing content

Content lives in `src/content/` as typed TypeScript. Every item carries Arabic and English side by side:

```ts
{
  id: 'love-021',           // permanent: favorites are stored by ID
  subtopic: 'appreciation',
  depth: 'medium',
  text: {
    ar: 'ما أكثر ما يُشعرك بالتقدير؟',
    en: 'What makes you feel most appreciated?',
  },
  followUps: [{ ar: 'هل يحضرك موقف معيّن؟', en: 'Does a moment come to mind?' }],
}
```

Before writing, read the [content guide](docs/CONTENT_GUIDE.md). Arabic is easy Modern Standard Arabic and is **gender-neutral by construction**. Then run `npm test`: the content tests catch missing translations, duplicate IDs, broken subtopics and some gendered wording.

## Deployment

Every push to `main` runs `npm run check` and `npm run build`, then deploys `dist/` to GitHub Pages (`.github/workflows/deploy.yml`). The site is served from `/closer/`. The build writes a page for every route, so deep links such as `/closer/talk/love/` load directly, and it also generates `sitemap.xml`. Unknown paths fall back to `public/404.html`, which redirects into the app.

The build also writes a service worker (`sw.js`). After the first visit the whole app is cached, so it works offline and can be installed to the home screen on Android and iOS. Each release replaces the offline copy automatically.

## Roadmap

- [x] **Phase 1 (core):** four sections, bilingual RTL/LTR, modes, decks with follow-ups, three games, responsive design
- [x] **Phase 2 (personal):** favorites, no repeats within a session, question of the day, Surprise us, depth filter, light/dark themes
- [ ] **Phase 3 (shared):** shared sessions with a code, syncing two devices, custom question lists, weekly challenges
- [x] An installable PWA that works fully offline
- [ ] More content, guided by what couples favorite most

## License

Closer is free and open source under the [MIT License](LICENSE), covering both the code and the written content. You're welcome to use it, translate it, adapt it for your own community or host your own copy. If you do, please keep the copyright notice.

## Credits

The gently deepening arc of _The closeness journey_ is inspired by Aron et al. (1997), _The Experimental Generation of Interpersonal Closeness_ (popularized as the "36 Questions"). The premarital topics are informed by family-counseling questionnaires. All the content itself is written originally for Closer.
