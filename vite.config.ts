/// <reference types="vitest/config" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Served from https://edriso.github.io/closer/ on GitHub Pages.
export default defineConfig({
  base: '/closer/',
  plugins: [react()],
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
