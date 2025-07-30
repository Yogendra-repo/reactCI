import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/reactCI/', // 👈 this is required for GitHub Pages
  plugins: [react()],
})
