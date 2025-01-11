import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Exposes the server to the network (use '0.0.0.0' for explicit binding)
    port: 5173, // Default port, you can specify a different one
  },
})
