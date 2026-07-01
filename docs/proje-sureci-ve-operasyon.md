# Proje Sureci ve Operasyon

## Repo ve Deploy

- Repo: `https://github.com/theAPdesign/theapdesign-art`
- Branch: `main`
- Domain: `https://theapdesign.art`
- Build: `npm run build`
- Output: `dist`
- Deploy: GitHub push sonrasi Cloudflare tarafinda otomatik yayin

## Lokal Is Akisi

```bash
npm install
npm run dev
npm run build
```

Vite lokal adresi genelde:

```text
http://127.0.0.1:5173/
```

Port doluysa Vite farkli port secebilir.

## Git Is Akisi

1. Degisiklik yap.
2. Build al.
3. `git status --short --branch` ile kontrol et.
4. Anlamli commit mesaji yaz.
5. `git push origin main` ile deploy'u tetikle.

Son basarili push'larda HTTPS remote kullanildi:

```text
https://theAPdesign@github.com/theAPdesign/theapdesign-art.git
```

## Dikkat Edilecek Dosyalar

- `src/main.jsx`: sayfa component'leri, Del-It CTA, urun detaylari, legal sayfa icerikleri
- `vite.config.js`: multi-page build inputlari
- `public/app-ads.txt`: AdMob dogrulama dosyasi
- `public/del-it-logo.jpg`: Del-It logo asset'i
- `public/xox-taktik-arena-logo.png`: XOX Taktik Arena logo asset'i
- `public/gamebox/`: Gamebox logo ve mini oyun kapak asset'leri
- `index.html` ve alt sayfa `index.html` dosyalari: SEO ve analytics metadata

## Deploy Sonrasi Kontroller

Website:

```bash
curl -I https://theapdesign.art/
```

Del-It:

```bash
curl -I https://theapdesign.art/del-it/
```

XOX Taktik Arena:

```bash
curl -I https://theapdesign.art/xox-taktik-arena/
```

Gamebox:

```bash
curl -I https://theapdesign.art/gamebox/
```

App ads:

```bash
curl -i https://theapdesign.art/app-ads.txt
```

Beklenen app-ads sonucu:

- HTTP 200
- `content-type: text/plain`
- Body tek satir:

```text
google.com, pub-5911219580546074, DIRECT, f08c47fec0942fa0
```

## GitHub Token Guvenligi

GitHub personal access token sohbet, not veya dosya icinde tutulmamalidir. Token paylasildiysa GitHub uzerinden revoke edilip yenisi uretilmelidir.

Gerekli izin:

- Repository access: `theAPdesign/theapdesign-art`
- Contents: Read and write

## Cloudflare Notlari

Bu proje Vite static build uretir. `_redirects` dosyasi kullanilmamali. SPA fallback gerekiyorsa Cloudflare Worker Static Assets ayariyla yonetilmeli.

`app-ads.txt` gibi root text dosyalari `public/` klasorunde tutulur ve build sonrasi `dist/` root'una kopyalanir.

## Revize Kaydi

| Tarih | Konu | Durum |
| --- | --- | --- |
| 2026-06-19 | Site 3 ana sayfa + Del-It urun sayfasi yapisina tasindi | Tamam |
| 2026-06-19 | Del-It gizlilik politikasi ve kullanim sartlari eklendi | Tamam |
| 2026-06-21 | AdMob `app-ads.txt` root seviyesine eklendi | Tamam |
| 2026-06-23 | Del-It App Store indirme CTA'i eklendi | Tamam |
| 2026-06-24 | XOX Taktik Arena urun ve yasal sayfalari eklendi | Tamam |
| 2026-07-01 | Gamebox urun, mini oyun vitrini ve yasal sayfalari eklendi | Tamam |
