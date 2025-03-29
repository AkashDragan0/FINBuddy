import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  // server: {
  //   host: true,
  //   hmr: {
  //     protocol: "wss",
  //     port: 443, // Ensure WebSocket uses HTTPS/WSS in cloud environments
  //   }
  // }
})
