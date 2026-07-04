# Website Tasarim Gidisat

Son guncelleme: 4 Temmuz 2026

## Hedef

`theapdesign.art`, AP Design'in uygulamalarini sade, beyaz temali ve mobil oncelikli bir vitrinle gosteren web sitesidir.

## Aktif Sayfalar

| Sayfa | URL | Durum | Not |
| --- | --- | --- | --- |
| Ana sayfa | `/` | Aktif | Tam ekran hero, hareketli ikonlar, uygulama kartlari |
| Uygulamalar | `/products` | Aktif | Del-It ve XOX Taktik Arena kartlari |
| Iletisim | `/contact` | Aktif | Footer olmayan iletisim formu |
| Del-It | `/del-it/` | Aktif | App Store CTA, ozellikler, galeri, FAQ, legal linkler |
| Del-It Gizlilik Politikasi | `/del-it/gizlilik-politikasi` | Aktif | App Store / AdMob uyumlu metin |
| Del-It Kullanim Sartlari | `/del-it/kullanim-sartlari` | Aktif | Uygulama kullanim kosullari |
| XOX Taktik Arena | `/xox-taktik-arena/` | Aktif | Oyun kurallari, modlar, App Store CTA |
| XOX Gizlilik Politikasi | `/xox-taktik-arena/gizlilik-politikasi` | Aktif | Reklam ve StoreKit odakli politika |
| XOX Kullanim Sartlari | `/xox-taktik-arena/kullanim-sartlari` | Aktif | Oyun ve satin alma sartlari |

## Tasarim Kararlari

- Beyaz zemin, yumuşak pastel arka plan ve hafif grid dokusu korunur.
- Ana sayfa hero alanı ilk ekrani kaplar; alt bolumler scroll ile yumuşak animasyonla gelir.
- Uygulama kartlari ana sayfa ve Uygulamalar sayfasinda ayni component yapisini kullanir.
- Footer tum ana ve urun sayfalarinda ayni tasarimla kullanilir; Iletisim sayfasi footersiz kalir.
- Gecici olarak yayinlanmayacak urunler web sitesinden kaldirildi.

## Teknik Durum

- React + Vite + Tailwind CSS
- Multi-page static build
- `wrangler.jsonc` ile Cloudflare Worker Static Assets uyumu
- `_redirects` kullanilmaz
- `public/app-ads.txt` root seviyesinde yayinlanir

## Son Kontrol

- `npm run build` basarili
- Kaldirilan urunlerin route ve public assetleri temizlendi
- Uygulamalar listesi Del-It ve XOX ile sinirlandi
