import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        delit: resolve(__dirname, 'del-it/index.html'),
        privacyPolicy: resolve(__dirname, 'privacy-policy/index.html'),
        support: resolve(__dirname, 'support/index.html'),
      },
    },
  },
});
