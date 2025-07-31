// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/dvp-portfolio-/', // <-- just the repo name with leading & trailing slash
  plugins: [react()],
})
