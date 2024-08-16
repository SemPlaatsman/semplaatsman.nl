import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          about: ['./src/pages/About'],
          resume: ['./src/pages/Resume'],
          projects: ['./src/pages/Projects'],
          contact: ['./src/pages/Contact'],
        },
      },
    },
  },
});
