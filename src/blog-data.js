export const siteUrl = 'https://theapdesign.art';

export const blogCategories = {
  'mobil-uygulama-gelistirme': {
    title: 'Mobil Uygulama Geliştirme',
    description: 'iOS, App Store süreçleri ve mobil ürün geliştirme üzerine yazılar.',
  },
  'ui-ux-tasarim': {
    title: 'UI/UX Tasarım',
    description: 'Dijital ürünlerde arayüz, akış ve kullanıcı deneyimi kararları.',
  },
  'vaka-calismalari': {
    title: 'Vaka Çalışmaları',
    description: 'The AP Design ürünleri üzerinden ürün ve tasarım notları.',
  },
};

export const blogPosts = [
  {
    title: 'Del-It ile galerini daha sakin yönet',
    slug: 'del-it-ile-galerini-daha-sakin-yonet',
    description: 'Fotoğraf ve videoları hızlıca gözden geçirmek, güvenli çöp kutusu ve son onay akışıyla daha kontrollü hale gelir.',
    publishedAt: '2026-07-15T10:30:00+03:00',
    updatedAt: '2026-07-15T10:30:00+03:00',
    author: 'The AP Design',
    category: 'vaka-calismalari',
    tags: ['Del-It', 'iOS', 'Galeri düzenleme', 'Gizlilik'],
    coverImage: '/og-image.svg',
    coverImageAlt: 'Del-It galeri düzenleme yazısı için pastel ürün illüstrasyonu',
    canonicalUrl: `${siteUrl}/blog/del-it-ile-galerini-daha-sakin-yonet`,
    draft: false,
    featured: true,
    readingTime: '4 dk',
    relatedPosts: ['mobil-uygulamalarda-gizlilik-hissi'],
    seoTitle: 'Del-It ile Galerini Daha Sakin Yönet | The AP Design Blog',
    seoDescription: 'Del-It’in güvenli çöp kutusu, kaydırarak karar verme ve son onay yaklaşımıyla galeri düzenleme deneyimini nasıl sakinleştirdiğini okuyun.',
    socialImage: '/og-image.svg',
    accent: 'from-[#ef55b8] via-[#9b52f5] to-[#4388ff]',
    iconKey: 'images',
    content: [
      {
        heading: 'Galeri karmaşası küçük kararlardan oluşur',
        paragraphs: [
          'Telefon galerileri zamanla küçük kararların biriktiği yerlere dönüşür. Aynı kareden birkaç tane, unutulmuş ekran görüntüleri, kısa videolar ve artık ihtiyaç duyulmayan dosyalar görünmez bir kalabalık oluşturur.',
          'Del-It bu kalabalığı tek hamlede silmeye çalışan agresif bir araç gibi davranmaz. Kullanıcı fotoğraf ve videolarını tam ekran inceler, sola kaydırdıklarını Del-It Çöp Kutusu’na ayırır, sağa kaydırdıklarını saklar.',
        ],
      },
      {
        heading: 'Son karar kullanıcıda kalır',
        paragraphs: [
          'Sola kaydırılan öğeler hemen kalıcı olarak silinmez. Kullanıcı çöp kutusunu son kez kontrol eder ve kalıcı silme işlemi yalnızca açık onaydan sonra başlar.',
          'Bu yaklaşım, hızlı temizlik hissini güvenli bir karar akışıyla birleştirir. Galeri daha sade hale gelirken son karar her zaman kullanıcıda kalır.',
        ],
      },
    ],
    internalLinks: [
      {
        href: '/del-it',
        label: 'Del-It ürün sayfasını incele',
      },
    ],
  },
  {
    title: 'Mobil uygulamalarda gizlilik hissi',
    slug: 'mobil-uygulamalarda-gizlilik-hissi',
    description: 'Kullanıcıya güven veren deneyimler, yalnızca metinlerle değil izin akışı ve karar anlarıyla kurulur.',
    publishedAt: '2026-07-16T14:00:00+03:00',
    updatedAt: '2026-07-16T14:00:00+03:00',
    author: 'The AP Design',
    category: 'ui-ux-tasarim',
    tags: ['Gizlilik', 'UI/UX', 'Mobil ürün'],
    coverImage: '/og-image.svg',
    coverImageAlt: 'Mobil uygulama gizlilik deneyimi için pastel güvenlik illüstrasyonu',
    canonicalUrl: `${siteUrl}/blog/mobil-uygulamalarda-gizlilik-hissi`,
    draft: true,
    featured: false,
    readingTime: '3 dk',
    relatedPosts: ['del-it-ile-galerini-daha-sakin-yonet'],
    seoTitle: 'Mobil Uygulamalarda Gizlilik Hissi | The AP Design Blog',
    seoDescription: 'Mobil uygulamalarda güven duygusunun izin akışı, son onay ve arayüz diliyle nasıl kurulabileceğine dair kısa ürün notu.',
    socialImage: '/og-image.svg',
    accent: 'from-[#67d7ff] via-[#8f7bff] to-[#ef7bdc]',
    iconKey: 'shield',
    content: [
      {
        heading: 'Gizlilik deneyimin içinde anlaşılır olmalı',
        paragraphs: [
          'Gizlilik çoğu zaman uzun politika metinleriyle anlatılır, fakat kullanıcı güveni asıl ürün deneyiminin içinde oluşur.',
          'Bir uygulama hangi izni neden istediğini açıkça gösterdiğinde, kalıcı işlemlerden önce son onay aldığında ve içerikleri gereksiz yere sunucuya taşımadığında daha anlaşılır bir güven alanı yaratır.',
        ],
      },
      {
        heading: 'Güven bir tasarım kararıdır',
        paragraphs: [
          'İyi gizlilik tasarımı sadece teknik bir konu değildir. Arayüz dili, butonların konumu, uyarıların tonu ve geri alma hissi de bu deneyimin parçasıdır.',
        ],
      },
    ],
    internalLinks: [
      {
        href: '/del-it/gizlilik-politikasi',
        label: 'Del-It gizlilik politikasını oku',
      },
    ],
  },
  {
    title: 'XOX Taktik Arena neden beraberliksiz?',
    slug: 'xox-taktik-arena-neden-beraberliksiz',
    description: '3 taş limiti, klasik X-O akışını kilitlenmeden ilerleyen daha taktik bir oyuna dönüştürür.',
    publishedAt: '2026-07-17T09:15:00+03:00',
    updatedAt: '2026-07-17T09:15:00+03:00',
    author: 'The AP Design',
    category: 'mobil-uygulama-gelistirme',
    tags: ['XOX', 'Oyun tasarımı', 'Mobil oyun'],
    coverImage: '/og-image.svg',
    coverImageAlt: 'XOX Taktik Arena oyun tasarımı yazısı için neon 3x3 tahta illüstrasyonu',
    canonicalUrl: `${siteUrl}/blog/xox-taktik-arena-neden-beraberliksiz`,
    draft: true,
    featured: false,
    readingTime: '3 dk',
    relatedPosts: ['del-it-ile-galerini-daha-sakin-yonet'],
    seoTitle: 'XOX Taktik Arena Neden Beraberliksiz? | The AP Design Blog',
    seoDescription: 'XOX Taktik Arena’da 3 taş limitinin klasik X-O akışını nasıl daha hareketli ve beraberliksiz hale getirdiğini okuyun.',
    socialImage: '/og-image.svg',
    accent: 'from-[#39d6c7] via-[#5266ff] to-[#f251b8]',
    iconKey: 'sparkles',
    content: [
      {
        heading: 'Klasik X-O hızlı öğrenilir ama çabuk kilitlenir',
        paragraphs: [
          'Klasik X-O çok hızlı öğrenilir, fakat çoğu tur birkaç hamle sonra beraberliğe gider. Bu durum oyunu sade tutarken tekrar oynama isteğini azaltabilir.',
          'XOX Taktik Arena’da her oyuncunun tahtada en fazla üç taşı bulunur. Dördüncü taş geldiğinde en eski taş silinir ve tahta yeniden hareket kazanır.',
        ],
      },
      {
        heading: 'Küçük kural değişikliği daha taktik kararlar üretir',
        paragraphs: [
          'Bu küçük kural değişikliği oyunu tıkamaz. Her hamle hem mevcut çizgiyi hem de birazdan kaybolacak taşı düşünmeyi gerektirir.',
        ],
      },
    ],
    internalLinks: [
      {
        href: '/xox-taktik-arena',
        label: 'XOX Taktik Arena ürün sayfasını incele',
      },
    ],
  },
];

export function getPublishedBlogPosts() {
  return blogPosts
    .filter((post) => !post.draft)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug && !post.draft);
}

export function getCategoryBySlug(slug) {
  return blogCategories[slug] || null;
}

export function getPostsByCategory(slug) {
  return getPublishedBlogPosts().filter((post) => post.category === slug);
}
