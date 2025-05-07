import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // Optional & non-standard

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Keep as per your request, but not required normally
  ],
  build: {
    outDir: 'dist',
  },
})
