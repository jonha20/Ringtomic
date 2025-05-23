import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // ya está bien
    emptyOutDir: true,
  },
  base: '/', 
});