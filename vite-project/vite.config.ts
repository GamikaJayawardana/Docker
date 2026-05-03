import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    host: true,    // Export to network so Docker can pick it up
    port: 5173,
    watch: {
      usePolling: true, // <--- THIS IS THE KEY
    },
  },
})