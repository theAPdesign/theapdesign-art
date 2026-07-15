import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { blogCategories, getAllPublishedBlogPosts, getPostsByCategory } from './src/blog-data.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const blogInputs = Object.fromEntries(
  getAllPublishedBlogPosts().map((post) => [
    `blog-${post.slug}`,
    resolve(__dirname, `${post.language === 'en' ? 'en/blog' : 'blog'}/${post.slug}/index.html`),
  ]),
);
const categoryInputs = Object.fromEntries(
  Object.keys(blogCategories)
    .filter((slug) => getPostsByCategory(slug, blogCategories[slug].language).length > 0)
    .map((slug) => [
      `blog-category-${slug}`,
      resolve(__dirname, `${blogCategories[slug].language === 'en' ? 'en/blog/category' : 'blog/kategori'}/${slug}/index.html`),
    ]),
);

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
        xox: resolve(__dirname, 'xox-taktik-arena/index.html'),
        xoxPrivacy: resolve(__dirname, 'xox-taktik-arena/gizlilik-politikasi/index.html'),
        xoxTerms: resolve(__dirname, 'xox-taktik-arena/kullanim-sartlari/index.html'),
        blog: resolve(__dirname, 'blog/index.html'),
        blogEn: resolve(__dirname, 'en/blog/index.html'),
        ...blogInputs,
        ...categoryInputs,
      },
    },
  },
});
