import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    port: 4003,
  },
  build: {
    outDir: 'dist',
  },
  // La base doit correspondre exactement à l'URL où le site est déployé
  base: mode === 'development' ? '/' : '/yannblanc75.github.io/MyWebSite/',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  }
}));