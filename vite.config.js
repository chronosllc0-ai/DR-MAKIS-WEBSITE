import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        checkout: resolve(__dirname, 'checkout/index.html'),
        consultations: resolve(__dirname, 'consultations/index.html'),
        supplements: resolve(__dirname, 'supplements.html'),
        protocols: resolve(__dirname, 'protocols.html'),
      },
    },
  },
})
