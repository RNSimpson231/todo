import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default {
  plugins: [
    tailwindcss(),
    react()
  ],
  server: {
    host: '0.0.0.0',      // Listen on all interfaces
    port: 5173,           // Or your preferred port
    strictPort: true,     // Or any port you prefer
  },
};

