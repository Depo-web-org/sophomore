import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // base: '/sophomore',
  // logLevel: 'silent',  
  plugins: [react()],
  esbuild: {
    drop: ['console'],
  },
});

