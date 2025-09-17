import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default {
  plugins: [react()],
  server: {
    host: '0.0.0.0',      // Listen on all interfaces
    port: 5173,           // Or your preferred port
    strictPort: true,     // Or any port you prefer
  },
};

