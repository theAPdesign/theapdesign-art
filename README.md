# The AP Design

`theapdesign.art`, The AP Design tarafindan gelistirilen uygulamalari gosteren sade, beyaz temali ve urun odakli web sitesidir.

## Mevcut Yapi

- Ana sayfa: urun odakli karsilama, urun tanitim kartlari ve iletisim footer'i
- Urunler: Del-It ve XOX Taktik Arena urun listesi
- Del-It: urun detay sayfasi, App Store indirme CTA'i, ozellikler, galeri, FAQ, gizlilik politikasi ve kullanim sartlari linkleri
- XOX Taktik Arena: urun detay sayfasi, oyun kurallari, modlar, gizlilik politikasi ve kullanim sartlari linkleri
- Iletisim: footer olmayan iletisim formu sayfasi
- AdMob dogrulama: root seviyesinde `app-ads.txt`

## Canli Linkler

- Website: `https://theapdesign.art`
- Del-It urun sayfasi: `https://theapdesign.art/del-it/`
- Del-It App Store: `https://apps.apple.com/us/app/del-it/id6780890586`
- Del-It Gizlilik Politikasi: `https://theapdesign.art/del-it/gizlilik-politikasi`
- Del-It Kullanim Sartlari: `https://theapdesign.art/del-it/kullanim-sartlari`
- XOX Taktik Arena urun sayfasi: `https://theapdesign.art/xox-taktik-arena/`
- XOX Gizlilik Politikasi: `https://theapdesign.art/xox-taktik-arena/gizlilik-politikasi`
- XOX Kullanim Sartlari: `https://theapdesign.art/xox-taktik-arena/kullanim-sartlari`
- AdMob app-ads: `https://theapdesign.art/app-ads.txt`

## Teknoloji

- React + Vite
- Tailwind CSS
- Static multi-page build
- Cloudflare Workers/Pages uyumlu

## Lokal Gelistirme

```bash
npm install
npm run dev
```

Vite port doluysa otomatik baska porta gecebilir. Varsayilan lokal adres genelde:

```text
http://127.0.0.1:5173/
```

## Build Alma

```bash
npm run build
```

Production ciktisi `dist/` klasorunde olusur.

## Kritik Dosyalar

- `src/main.jsx`: tum sayfa component'leri ve route bazli render mantigi
- `vite.config.js`: multi-page Vite build girisleri
- `public/del-it-logo.jpg`: Del-It logo asset'i
- `public/xox-taktik-arena-logo.png`: XOX Taktik Arena logo asset'i
- `public/app-ads.txt`: AdMob app-ads dogrulama dosyasi
- `del-it/gizlilik-politikasi/index.html`: Del-It gizlilik politikasi entry dosyasi
- `del-it/kullanim-sartlari/index.html`: Del-It kullanim sartlari entry dosyasi
- `xox-taktik-arena/gizlilik-politikasi/index.html`: XOX gizlilik politikasi entry dosyasi
- `xox-taktik-arena/kullanim-sartlari/index.html`: XOX kullanim sartlari entry dosyasi

## AdMob app-ads.txt

Dosya `public/app-ads.txt` icindedir ve build sonrasi root seviyesine `dist/app-ads.txt` olarak kopyalanir.

Icerik tek satir olmalidir:

```text
google.com, pub-5911219580546074, DIRECT, f08c47fec0942fa0
```

Canli kontrol:

```bash
curl -i https://theapdesign.art/app-ads.txt
```

Beklenen:

- HTTP 200
- `content-type: text/plain`
- Body sadece yukaridaki tek satir

## Deploy

Cloudflare tarafinda build ayarlari:

- Framework preset: `Vite`
- Build command: `npm run build`
- Build output directory: `dist`

Deploy GitHub `main` branch push'u ile tetiklenir.
