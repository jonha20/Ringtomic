import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // ya está bien
    emptyOutDir: true,
  },
   resolve: {
    alias: {
       '@': path.resolve(__dirname),
    },
  },
  base: '/', 
});