import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        products: resolve(__dirname, 'products/index.html'),
        contact: resolve(__dirname, 'contact/index.html'),
        delit: resolve(__dirname, 'del-it/index.html'),
        delitPrivacy: resolve(__dirname, 'del-it/gizlilik-politikasi/index.html'),
        delitTerms: resolve(__dirname, 'del-it/kullanim-sartlari/index.html'),
      },
    },
  },
});
