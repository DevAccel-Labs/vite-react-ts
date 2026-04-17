import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['3000-iqcm2gzhhz79abjnjv8qj.e2b.app'],
  },
})
