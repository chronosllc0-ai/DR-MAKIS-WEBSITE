import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        checkout: resolve(__dirname, 'checkout/index.html'),
        supplements: resolve(__dirname, 'supplements.html'),
      },
    },
  },
})
