# Proje Sureci ve Operasyon

Son guncelleme: 4 Temmuz 2026

## Repo

- Repo: `theAPdesign/theapdesign-art`
- Branch: `main`
- Proje tipi: React + Vite + Tailwind static site

## Onemli Dosyalar

- `src/main.jsx`: route ve component yapisi
- `src/styles.css`: global animasyon ve yardimci stiller
- `vite.config.js`: multi-page build inputlari
- `wrangler.jsonc`: Cloudflare Worker Static Assets ayari
- `public/app-ads.txt`: AdMob dogrulama dosyasi

## Aktif Route'lar

- `/`
- `/products`
- `/contact`
- `/del-it/`
- `/del-it/gizlilik-politikasi`
- `/del-it/kullanim-sartlari`
- `/xox-taktik-arena/`
- `/xox-taktik-arena/gizlilik-politikasi`
- `/xox-taktik-arena/kullanim-sartlari`

## Lokal Calisma

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy Notlari

- Cloudflare otomatik deploy build sonrasinda `npx wrangler deploy` calistirir.
- `_redirects` dosyasi kullanılmaz.
- SPA fallback `wrangler.jsonc` icindeki `assets.not_found_handling` ile yonetilir.
- `dist` commitlenmez.

## Guncel Operasyon Notu

4 Temmuz 2026 itibariyla simdilik yayinlanmayacak urun web sitesinden kaldirildi. Route inputlari, public assetleri ve gorunur kartlari temizlendi.
