/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'

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

// Served from https://edriso.github.io/closer/ on GitHub Pages.
export default defineConfig({
  base: '/closer/',
  plugins: [
    react(),
    // Readex Pro covers Arabic and Latin UI text in both languages.
    preloadFonts([/readex-pro-arabic-wght/, /readex-pro-latin-wght/]),
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
