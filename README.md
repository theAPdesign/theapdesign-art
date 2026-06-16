# The AP Design

`theapdesign.art` için modern, premium, tek sayfalık kreatif stüdyo portfolyosu.

## Teknoloji

- React + Vite
- Tailwind CSS
- Statik deploy uyumlu
- Responsive tek sayfa yapı

## Lokal Geliştirme

```bash
npm install
npm run dev
```

## Build Alma

```bash
npm run build
```

Production çıktısı `dist/` klasöründe oluşur.

## Cloudflare Pages

1. Projeyi GitHub reposuna pushla.
2. Cloudflare Dashboard içinde **Workers & Pages** bölümünü aç.
3. **Create application** → **Pages** → **Connect to Git** adımlarını seç.
4. Repoyu seç.
5. Build ayarlarını şöyle yap:
   - Framework preset: `Vite`
   - Build command: `npm run build`
   - Build output directory: `dist`
6. Projeyi deploy et.
7. **Custom domains** bölümünden `theapdesign.art` domainini ekle.

## Vercel

1. Projeyi GitHub reposuna pushla.
2. Vercel içinde **Add New** → **Project** seç.
3. Repoyu import et.
4. Vercel Vite projesini otomatik algılamalı.
5. Ayarları şöyle doğrula:
   - Build command: `npm run build`
   - Output directory: `dist`
6. Projeyi deploy et.
7. **Project Settings** → **Domains** bölümünden `theapdesign.art` domainini ekle.

## GitHub Pages

1. Projeyi build et:

```bash
npm run build
```

2. `dist/` klasörünü tercih ettiğin GitHub Pages workflow'u ile deploy et.
3. Özel domain için repo Pages ayarlarında `theapdesign.art` ekle.
