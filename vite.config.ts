import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Leading dot = wildcard subdomain match. Every Titan preview sandbox gets a
    // fresh `<port>-<randomId>.e2b.app` hostname, so we can't enumerate them.
    // Keep localhost entries for running `vite` locally outside the sandbox.
    allowedHosts: ['.e2b.app', 'localhost', '127.0.0.1'],
  },
})
