# Icerik ve Teslim Kontrol Listesi

## Website Genel

- [x] Marka adi dogru: The AP Design
- [x] Domain dogru: `theapdesign.art`
- [x] Logo guncel AP logosu ile kullaniliyor
- [x] Del-It logo asset'i mevcut
- [x] XOX Taktik Arena logo asset'i mevcut
- [x] Tum gorunen ana navigasyon metinleri Turkce
- [x] Iletisim maili guncel: `theapdesign26@gmail.com`
- [x] Google Analytics etiketi mevcut: `G-W219ZBJWH0`
- [x] Build basarili: `npm run build`

## Sayfa Kontrolleri

- [x] Ana sayfa mevcut
- [x] Urunler sayfasi mevcut
- [x] Del-It urun sayfasi mevcut
- [x] XOX Taktik Arena urun sayfasi mevcut
- [x] Iletisim sayfasi mevcut
- [x] Del-It gizlilik politikasi mevcut
- [x] Del-It kullanim sartlari mevcut
- [x] XOX gizlilik politikasi mevcut
- [x] XOX kullanim sartlari mevcut
- [x] Contact gorunen metinleri `Iletisim` olarak guncellendi
- [x] Iletisim sayfasinda footer yok

## Del-It Urun Sayfasi

- [x] Del-It logosu gorunuyor
- [x] Urun tanitimi mevcut
- [x] App Store CTA mevcut
- [x] App Store linki dogru:
  `https://apps.apple.com/us/app/del-it/id6780890586`
- [x] CTA yeni sekmede aciliyor
- [x] CTA `aria-label` mevcut
- [x] Guven metni mevcut: `Fotograflarin cihazinda kalir.`
- [x] FAQ mevcut
- [x] Gizlilik Politikasi ve Kullanim Sartlari linkleri FAQ ile footer arasinda

## XOX Taktik Arena Urun Sayfasi

- [x] XOX logo asset'i gorunuyor
- [x] Urun tanitimi mevcut
- [x] 3x3 tahta ve 3 tas limiti anlatiliyor
- [x] En eski tasin otomatik silinmesi mekanigi anlatiliyor
- [x] Tek oyunculu ve iki kisilik modlar mevcut
- [x] Gizlilik Politikasi ve Kullanim Sartlari linkleri urun sayfasinda mevcut

## AdMob Kontrolu

- [x] `public/app-ads.txt` mevcut
- [x] `dist/app-ads.txt` build sonrasi olusuyor
- [x] Canli URL dogru:
  `https://theapdesign.art/app-ads.txt`
- [x] Publisher ID dogru:
  `pub-5911219580546074`
- [x] Icerik tek satir:

```text
google.com, pub-5911219580546074, DIRECT, f08c47fec0942fa0
```

- [x] HTML template donmuyor
- [x] `content-type: text/plain`

## SEO ve Metadata

- [x] Ana sayfa title ve description mevcut
- [x] Urunler sayfasi title ve description mevcut
- [x] Iletisim sayfasi title ve description mevcut
- [x] Del-It sayfasi title ve description mevcut
- [x] XOX Taktik Arena sayfasi title ve description mevcut
- [x] Gizlilik Politikasi metadata mevcut
- [x] Kullanim Sartlari metadata mevcut
- [x] Open Graph ve Twitter Card etiketleri mevcut

## Teslim Oncesi Komutlar

```bash
npm run build
git status --short --branch
```

Canli app-ads kontrolu:

```bash
curl -i https://theapdesign.art/app-ads.txt
```

## Bekleyen / Sonraki Isler

- [x] XOX Taktik Arena yeni urun olarak eklendi
- [ ] Del-It App Store badge'i resmi Apple badge ile degistirilebilir
- [ ] App Store urun metinleri degisirse Del-It CTA ve yasal metinler tekrar kontrol edilecek
