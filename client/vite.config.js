import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  test: {
    environment: 'jsdom', 
    setupFiles: ['/src/setupTest.js'],
  },
  server: {
    proxy: {
      host: '127.0.0.1', 
      port: 8080
    },
  },
})
