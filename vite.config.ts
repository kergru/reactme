/**
 * Configures Vite for React development and Vitest for jsdom-based component
 * tests that share the same transformation pipeline.
 */
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setupTests.js',
    globals: false,
  },
})
