import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:"/Mood_Player_SR2/",
  plugins: [react()],
    build: { outDir: 'docs' },
})
