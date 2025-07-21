import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Use relative paths
  server: {
    port: 3000,
    open: true
  },
  build: {
    cssMinify: true,
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  }
})