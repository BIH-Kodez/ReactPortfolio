import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'; // 👈 import Node's path module

// https://vite.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE_PATH || "/ReactPortfolio",

  plugins: [
    tailwindcss(),
    react()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') 
    }
  }
});
