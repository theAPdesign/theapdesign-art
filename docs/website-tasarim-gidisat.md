# Website Tasarimi Gidisat Dokumani

## Proje Bilgileri

- Proje adi: The AP Design Website
- Domain: `https://theapdesign.art`
- Repo: `theAPdesign/theapdesign-art`
- Teknoloji: React + Vite + Tailwind CSS
- Durum: Yayinda, urun odakli yapi aktif
- Son guncelleme: 24 Haziran 2026

## Amac

Site artik hizmet anlatan bir ajans sayfasi degil; The AP Design tarafindan gelistirilen uygulamalari gosteren sade bir urun vitrini olarak konumlandi.

Ana hedefler:

- Uygulamalari net sekilde gostermek
- Del-It ve XOX Taktik Arena icin guven veren urun sayfalari sunmak
- App Store indirme aksiyonunu gorunur yapmak
- Gizlilik politikasi, kullanim sartlari ve AdMob gereksinimlerini karsilamak
- Mobilde temiz, masaustunde dengeli bir beyaz tema korumak

## Sayfa Yapisi

| Sayfa | URL | Durum | Not |
| --- | --- | --- | --- |
| Ana sayfa | `/` | Aktif | Ortali hero, urun tanitim alani, iletisim footer'i |
| Urunler | `/products` | Aktif | Del-It ve XOX Taktik Arena kartlari |
| Del-It | `/del-it/` | Aktif | Hero, App Store CTA, ozellikler, galeri, FAQ, yasal linkler |
| XOX Taktik Arena | `/xox-taktik-arena/` | Aktif | Hero, oyun kurallari, modlar, yasal linkler |
| Iletisim | `/contact` | Aktif | Footer yok, dogrudan form akisi |
| Del-It Gizlilik Politikasi | `/del-it/gizlilik-politikasi` | Aktif | Del-It iOS veri/reklam politikasi |
| Del-It Kullanim Sartlari | `/del-it/kullanim-sartlari` | Aktif | Del-It kullanim sartlari |
| XOX Gizlilik Politikasi | `/xox-taktik-arena/gizlilik-politikasi` | Aktif | XOX reklam, consent ve satin alma politikasi |
| XOX Kullanim Sartlari | `/xox-taktik-arena/kullanim-sartlari` | Aktif | XOX oyun, reklam ve satin alma sartlari |
| app-ads.txt | `/app-ads.txt` | Aktif | AdMob dogrulama dosyasi |

## Tasarim Kararlari

- Tema: beyaz zemin, soft mavi/pembe/mor vurgular
- Tipografi: buyuk, net, urun odakli basliklar
- Navigasyon: Anasayfa, Urunler, Iletisim
- Ana sayfa hero: ustte ortali baslik ve alt metin; altinda Del-It icin genis yatay urun alani
- Del-It urun sayfasi: App Store CTA hero yakininda gorunur
- XOX Taktik Arena sayfasi: neon oyun hissi, 3 tas limiti ve mod anlatimi
- Iletisim sayfasi: footer olmadan sade form deneyimi
- Yasal linkler: ilgili urun sayfasinda icerik ile footer arasinda konumlanir

## Del-It App Store Alani

Del-It sayfasina App Store indirme alani eklendi.

Icerik:

- Baslik: `Del-It App Store'da yayinda`
- Aciklama: `Fotograflarini hizlica gozden gecir, gereksizleri guvenli Del-It cop kutusuna ekle ve son onayla temizle.`
- Guven metni: `Fotograflarin cihazinda kalir.`
- CTA: `App Store'da Indir`
- Link: `https://apps.apple.com/us/app/del-it/id6780890586`

## SEO ve Metadata

Her ana entry HTML dosyasinda title, description, canonical, Open Graph ve Twitter Card bilgileri bulunur.

Onemli entry dosyalari:

- `index.html`
- `products/index.html`
- `contact/index.html`
- `del-it/index.html`
- `del-it/gizlilik-politikasi/index.html`
- `del-it/kullanim-sartlari/index.html`
- `xox-taktik-arena/index.html`
- `xox-taktik-arena/gizlilik-politikasi/index.html`
- `xox-taktik-arena/kullanim-sartlari/index.html`

## AdMob app-ads.txt

`public/app-ads.txt` dosyasi eklendi ve root seviyesinde yayinlaniyor:

```text
https://theapdesign.art/app-ads.txt
```

Icerik:

```text
google.com, pub-5911219580546074, DIRECT, f08c47fec0942fa0
```

Canli kontrol sonucu:

- HTTP 200
- `content-type: text/plain`
- Body sadece AdMob satiri

## Guncel Kontrol Durumu

| Alan | Durum | Not |
| --- | --- | --- |
| Ana sayfa hero | Tamam | Ortali baslik, daha yakin alt metin |
| Del-It logo asset'i | Tamam | `public/del-it-logo.jpg` |
| App Store CTA | Tamam | Del-It sayfasinda hero altinda |
| XOX urun sayfasi | Tamam | Oyun kurallari ve modlar eklendi |
| Privacy / Terms | Tamam | Del-It sayfasinda FAQ ile footer arasinda linkli |
| XOX Privacy / Terms | Tamam | XOX sayfasinda legal linkler mevcut |
| Iletisim maili | Tamam | `theapdesign26@gmail.com` |
| Google Analytics | Tamam | `G-W219ZBJWH0` |
| AdMob app-ads.txt | Tamam | Root seviyesinde text/plain |
| Build | Tamam | `npm run build` basarili |

## Sonraki Notlar

- Yeni urun eklendiginde `ProductsGrid` ve sayfa entry yapisi genisletilmeli.
- Del-It App Store linki degisirse `src/main.jsx` icindeki CTA guncellenmeli.
- AdMob publisher ID degismedigi surece `public/app-ads.txt` dosyasina dokunulmamali.
