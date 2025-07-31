// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: 'dvp-portfolio-', // Only repo name here (must match GitHub repo name exactly)
  plugins: [react()],
})
