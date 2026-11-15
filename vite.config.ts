/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
import { createHash } from 'node:crypto'
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join, relative, sep } from 'node:path'
import { defineConfig, type Plugin } from 'vite'

const SITE = 'https://edriso.github.io/closer/'

/**
 * Preload the fonts every page needs, so they download in parallel with the
 * JavaScript instead of after the CSS is parsed. Paired with the font gate in
 * src/main.tsx, this removes the fallback-font flash on load.
 */
function preloadFonts(patterns: RegExp[]): Plugin {
  let base = '/'
  return {
    name: 'closer:preload-fonts',
    apply: 'build',
    configResolved(config) {
      base = config.base
    },
    transformIndexHtml: {
      order: 'post',
      handler(_html, ctx) {
        return Object.keys(ctx.bundle ?? {})
          .filter((file) => file.endsWith('.woff2') && patterns.some((p) => p.test(file)))
          .map((file) => ({
            tag: 'link',
            attrs: {
              rel: 'preload',
              as: 'font',
              type: 'font/woff2',
              href: base + file,
              crossorigin: '',
            },
            injectTo: 'head-prepend' as const,
          }))
      },
    },
  }
}

/** Every static route, derived from the content files so new topics are picked up. */
function staticRoutes(): string[] {
  const slugs = (dir: string) =>
    readdirSync(join('src/content', dir))
      .filter((f) => f.endsWith('.ts') && !f.endsWith('.test.ts'))
      .map((f) => f.replace(/\.ts$/, ''))
  const categories = [
    ...readFileSync('src/content/moments/categories.ts', 'utf8').matchAll(/id: '([a-z-]+)'/g),
  ].map((m) => m[1])
  return [
    '',
    'surprise',
    'talk',
    'talk/mix',
    ...slugs('talk').map((s) => `talk/${s}`),
    'discover',
    ...slugs('discover').map((s) => `discover/${s}`),
    'play',
    'play/would-you-rather',
    'play/who-knows',
    'play/two-truths',
    'moments',
    ...categories.map((c) => `moments/${c}`),
    'favorites',
    'about',
  ]
}

/**
 * GitHub Pages has no SPA fallback. Writing the app shell to every known route
 * makes deep links load directly with HTTP 200 (indexable, no redirect hop), and
 * a sitemap lists them. Unknown paths still fall back to public/404.html.
 */
function staticPages(): Plugin {
  let outDir = 'dist'
  return {
    name: 'closer:static-pages',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir
    },
    closeBundle() {
      const shell = readFileSync(join(outDir, 'index.html'), 'utf8')
      const routes = staticRoutes()
      for (const route of routes.filter(Boolean)) {
        mkdirSync(join(outDir, route), { recursive: true })
        writeFileSync(join(outDir, route, 'index.html'), shell)
      }
      const urls = routes.map((r) => `  <url><loc>${SITE}${r ? `${r}/` : ''}</loc></url>`)
      writeFileSync(
        join(outDir, 'sitemap.xml'),
        `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`,
      )
    },
  }
}

/** Files the service worker never caches: crawler/redirect helpers and the share image. */
const NOT_PRECACHED = new Set(['404.html', 'sitemap.xml', 'og-image.png', 'sw.js'])

/**
 * Write dist/sw.js from src/service-worker.js, filled in with every file the app
 * needs (the shell, hashed assets, icons, manifest) and a version derived from
 * their contents, so each release replaces the previous offline copy.
 * The per-route index.html copies are skipped: they are identical to the shell.
 */
function serviceWorker(): Plugin {
  let outDir = 'dist'
  return {
    name: 'closer:service-worker',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir
    },
    closeBundle() {
      const files = readdirSync(outDir, { recursive: true, withFileTypes: true })
        .filter((entry) => entry.isFile())
        .map((entry) => relative(outDir, join(entry.parentPath, entry.name)).split(sep).join('/'))
        .filter((file) => !NOT_PRECACHED.has(file))
        .filter((file) => !file.includes('/') || file.startsWith('assets/'))
        .sort()
      const hash = createHash('sha256')
      for (const file of files) hash.update(file).update(readFileSync(join(outDir, file)))
      const version = hash.digest('hex').slice(0, 12)
      const template = readFileSync('src/service-worker.js', 'utf8')
      const sw = template
        .replace("/* version */ 'dev'", JSON.stringify(version))
        .replace('/* precache */ []', JSON.stringify(files))
      if (sw.includes('/* version */') || sw.includes('/* precache */')) {
        throw new Error('service-worker.js: VERSION/PRECACHE placeholders not found')
      }
      writeFileSync(join(outDir, 'sw.js'), sw)
    },
  }
}

// Served from https://edriso.github.io/closer/ on GitHub Pages.
export default defineConfig({
  base: '/closer/',
  plugins: [
    react(),
    // Readex Pro covers Arabic and Latin UI text in both languages.
    preloadFonts([/readex-pro-arabic-wght/, /readex-pro-latin-wght/]),
    staticPages(),
    serviceWorker(),
  ],
  build: {
    rolldownOptions: {
      output: {
        // Split rarely-changing code from content so returning visitors
        // only re-download what actually changed.
        codeSplitting: {
          groups: [
            {
              name: 'react',
              test: /node_modules[\\/](react|react-dom|react-router|scheduler)[\\/]/,
            },
            {
              name: 'motion',
              test: /node_modules[\\/](motion|framer-motion|motion-dom|motion-utils)[\\/]/,
            },
            { name: 'content', test: /src[\\/]content[\\/]/ },
          ],
        },
      },
    },
  },
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
})
