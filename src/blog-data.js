export const siteUrl = 'https://theapdesign.art';

export const blogCategories = {
  'mobil-uygulamalar': {
    title: 'Mobil Uygulamalar',
    description: 'iOS, mobil ürün geliştirme ve uygulama deneyimi üzerine yazılar.',
  },
};

const appStoreUrl = 'https://apps.apple.com/tr/app/del-it/id6780890586?l=tr';

export const blogPosts = [
  {
    title: 'iPhone Depolama Alanı Nasıl Açılır? 8 Etkili Yöntem',
    slug: 'iphone-depolama-alani-nasil-acilir',
    description: 'iPhone’unuzda yer açmak için fotoğraflardan kullanılmayan uygulamalara kadar kontrol edebileceğiniz tüm alanları adım adım inceleyin.',
    publishedAt: '2026-07-16T00:10:00+03:00',
    updatedAt: '2026-07-16T00:10:00+03:00',
    author: 'The AP Design',
    category: 'mobil-uygulamalar',
    tags: ['iPhone', 'depolama alanı', 'galeri temizleme', 'fotoğraf temizleme', 'iOS'],
    coverImage: '/blog/iphone-depolama-alani-nasil-acilir.png',
    coverImageAlt: 'iPhone galeri temizliği ve depolama alanı açma konulu görsel',
    canonicalUrl: `${siteUrl}/blog/iphone-depolama-alani-nasil-acilir`,
    draft: false,
    featured: true,
    relatedPosts: [],
    seoTitle: 'iPhone Depolama Alanı Nasıl Açılır? 8 Etkili Yöntem | The AP Design',
    seoDescription: 'iPhone depolama alanı dolduysa fotoğrafları, videoları, uygulamaları ve gereksiz dosyaları güvenli şekilde temizlemek için uygulayabileceğiniz yöntemleri keşfedin.',
    socialImage: '/blog/iphone-depolama-alani-nasil-acilir.png',
    accent: 'from-[#d9e8ff] via-[#f3e9ff] to-[#ffe7f7]',
    iconKey: 'images',
    content: [
      {
        blocks: [
          {
            type: 'paragraph',
            text: 'iPhone depolama alanı açmak için öncelikle hangi içeriklerin en fazla yer kapladığını kontrol edin. Ardından büyük videoları, gereksiz fotoğrafları, yinelenen medyaları, kullanılmayan uygulamaları ve mesaj eklerini temizleyin. iCloud Fotoğrafları kullanıyorsanız aygıt saklama alanını optimize etme seçeneğini de etkinleştirebilirsiniz.',
          },
          {
            type: 'paragraph',
            text: 'Depolama alanının dolması yalnızca yeni fotoğraf çekmenizi engellemez. Uygulama yükleme, iOS güncelleme ve dosya indirme gibi günlük işlemleri de zorlaştırabilir. Bu nedenle rastgele dosya silmek yerine, en fazla alanı kullanan bölümlerden başlayarak kontrollü ilerlemek daha sağlıklıdır.',
          },
        ],
      },
      {
        heading: 'Önce iPhone saklama alanını kontrol edin',
        blocks: [
          {
            type: 'paragraph',
            text: 'Temizliğe başlamadan önce depolama alanını hangi uygulamaların ve içeriklerin kullandığını öğrenin:',
          },
          {
            type: 'steps',
            items: [
              'Ayarlar uygulamasını açın.',
              'Genel bölümüne girin.',
              'iPhone Saklama Alanı seçeneğine dokunun.',
              'Uygulamaların ve içerik türlerinin kullandığı alanı inceleyin.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Bu ekranda Fotoğraflar, Mesajlar ve yüklü uygulamaların ne kadar yer kapladığını görebilirsiniz. iPhone ayrıca mevcut kullanıma göre bazı saklama alanı önerileri gösterebilir.',
          },
          {
            type: 'links',
            links: [
              {
                href: 'https://support.apple.com/tr-tr/108429',
                label: 'Apple’ın iPhone saklama alanı önerileri rehberi',
              },
            ],
          },
          {
            type: 'paragraph',
            text: 'En fazla alanı kullanan bölüm Fotoğraflar ise galerinizi; uygulamalarsa uzun süredir kullanmadığınız uygulamaları temizlemek daha hızlı sonuç verir.',
          },
        ],
      },
      {
        heading: '1. Gereksiz fotoğraf ve videoları temizleyin',
        blocks: [
          {
            type: 'paragraph',
            text: 'Fotoğraf arşivleri genellikle zaman içerisinde fark edilmeden büyür. Aynı ortamda çekilmiş çok sayıda kare, unutulan ekran görüntüleri, sosyal medyadan kaydedilen görseller ve uzun videolar önemli miktarda yer kaplayabilir.',
          },
          {
            type: 'paragraph',
            text: 'Galerinizi temizlerken şu sırayı kullanabilirsiniz:',
          },
          {
            type: 'list',
            items: [
              'Gereksiz ekran görüntülerini kontrol edin.',
              'Bulanık veya yanlışlıkla çekilen fotoğrafları silin.',
              'Aynı anın birbirine çok benzeyen kareleri arasından seçim yapın.',
              'Artık ihtiyacınız olmayan ekran kayıtlarını inceleyin.',
              'Büyük ve uzun videolara öncelik verin.',
              'Sosyal medya uygulamalarından kaydedilen içerikleri kontrol edin.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Binlerce fotoğraf arasından seçim yapmak yorucu olabilir. Bu nedenle tüm galeriyi tek seferde bitirmeye çalışmak yerine, her gün küçük bir bölümü gözden geçirmek daha sürdürülebilir bir yöntemdir.',
          },
        ],
      },
      {
        heading: '2. Galeri temizliğini Del-It ile daha kontrollü yapın',
        blocks: [
          {
            type: 'paragraph',
            text: 'Fotoğraf arşivini klasik bir ızgara üzerinden temizlerken hangi görüntüleri saklayacağınıza karar vermek zorlaşabilir. The AP Design tarafından geliştirilen Del-It, fotoğraf ve videoları sırayla gözden geçirmenize yardımcı olur.',
          },
          {
            type: 'paragraph',
            text: 'Kaydırma hareketleriyle saklamak veya silmek istediğiniz içeriklere karar verebilir, silmek üzere ayırdığınız öğeleri çöp kutusunda tekrar kontrol edebilirsiniz. Kalıcı silme işlemi yalnızca son onayınızdan sonra başlar.',
          },
          {
            type: 'paragraph',
            text: 'Del-It ayrıca galeri temizleme işlemlerini cihaz üzerinde gerçekleştirir; fotoğraf ve videolar Del-It sunucularına yüklenmez. Böylece galerinizi daha düzenli hâle getirirken içerikleriniz üzerindeki kontrol sizde kalır.',
          },
          {
            type: 'cta',
            label: 'Del-It’i App Store’da inceleyin',
            href: appStoreUrl,
          },
        ],
      },
      {
        heading: '3. Son Silinenler albümünü kontrol edin',
        blocks: [
          {
            type: 'paragraph',
            text: 'Fotoğraflar uygulamasında sildiğiniz medya dosyaları hemen tamamen ortadan kalkmaz. Silinen fotoğraf ve videolar Son Silinenler albümünde 30 gün tutulur. Bu süre içerisinde kurtarılabilir veya beklemeden kalıcı olarak silinebilir.',
          },
          {
            type: 'paragraph',
            text: 'Son Silinenler albümünü kontrol etmek için:',
          },
          {
            type: 'steps',
            items: [
              'Fotoğraflar uygulamasını açın.',
              'Koleksiyonlar bölümüne girin.',
              'Yukarı kaydırarak Son Silinenler albümünü bulun.',
              'Face ID veya parolanızla albümün kilidini açın.',
              'İhtiyacınız olmayan öğeleri kalıcı olarak silin.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Depolama alanına hemen ihtiyacınız varsa yalnızca fotoğrafları galeriden silmek yeterli olmayabilir; Son Silinenler albümünün de temizlenmesi gerekebilir.',
          },
          {
            type: 'callout',
            text: 'Kalıcı olarak sildiğiniz fotoğraf ve videoları daha sonra geri getiremeyebilirsiniz. İşleme başlamadan önce saklamak istediğiniz içerikleri dikkatlice kontrol edin.',
          },
          {
            type: 'links',
            links: [
              {
                href: 'https://support.apple.com/tr-tr/104967',
                label: 'Apple’ın Son Silinenler albümü ve kalıcı silme rehberi',
              },
            ],
          },
        ],
      },
      {
        heading: '4. Yinelenen fotoğraf ve videoları birleştirin',
        blocks: [
          {
            type: 'paragraph',
            text: 'Aynı fotoğrafın birden fazla kopyası zamanla gereksiz alan kullanımına neden olabilir. iPhone’un yerleşik Yinelenenler özelliğini kullanarak tespit edilen kopyaları birleştirebilirsiniz:',
          },
          {
            type: 'steps',
            items: [
              'Fotoğraflar uygulamasını açın.',
              'Koleksiyonlar bölümüne girin.',
              'Diğer altında bulunan Yinelenenler seçeneğine dokunun.',
              'İlgili grubun yanındaki Birleştir seçeneğini kullanın.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Arşivinizde tespit edilen yinelenen bir içerik bulunmuyorsa bu bölüm görünmeyebilir.',
          },
          {
            type: 'paragraph',
            text: 'Bu özellik birebir kopyaları bulmak için kullanışlıdır. Ancak birbirine benzeyen fakat tamamen aynı olmayan fotoğraflar arasında seçim yapmak için arşivinizi ayrıca gözden geçirmeniz gerekebilir.',
          },
          {
            type: 'links',
            links: [
              {
                href: 'https://support.apple.com/tr-tr/guide/iphone/iph1978d9c23/ios',
                label: 'Apple’ın iPhone’da yinelenen fotoğraf ve videoları birleştirme rehberi',
              },
            ],
          },
        ],
      },
      {
        heading: '5. Kullanmadığınız uygulamaları kaldırın',
        blocks: [
          {
            type: 'paragraph',
            text: 'Uzun süredir açmadığınız uygulamalar, kendi boyutlarının yanında oluşturdukları belgeler ve verilerle de saklama alanı kullanabilir.',
          },
          {
            type: 'paragraph',
            text: 'İki farklı yöntemden birini tercih edebilirsiniz:',
          },
          {
            type: 'list',
            items: [
              'Uygulamayı Sil: Uygulama ve ilişkili verileri kaldırır.',
              'Uygulamayı Kaldır: Uygulamayı kaldırırken belge ve verilerin korunmasına imkân tanır.',
            ],
          },
          {
            type: 'paragraph',
            text: 'iPhone’un kullanılmayan uygulamaları otomatik kaldırmasını sağlamak için:',
          },
          {
            type: 'steps',
            items: [
              'Ayarlar uygulamasına girin.',
              'Uygulamalar bölümünü açın.',
              'App Store seçeneğine dokunun.',
              'Kullanılmayanları Kaldır özelliğini etkinleştirin.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Bu seçenek, sık kullanmadığınız uygulamaların kapladığı alanı azaltırken uygulama verilerinin korunmasına yardımcı olur.',
          },
          {
            type: 'links',
            links: [
              {
                href: 'https://support.apple.com/tr-tr/guide/iphone/iph47c931112/ios',
                label: 'Apple’ın iPhone’da kullanılmayan uygulamaları kaldırma rehberi',
              },
            ],
          },
        ],
      },
      {
        heading: '6. Mesaj eklerini gözden geçirin',
        blocks: [
          {
            type: 'paragraph',
            text: 'Mesajlaşmalarda gönderilen yüksek çözünürlüklü fotoğraflar, videolar ve diğer dosyalar zaman içerisinde önemli miktarda alan kullanabilir.',
          },
          {
            type: 'paragraph',
            text: 'Ayarlar → Genel → iPhone Saklama Alanı bölümünden Mesajlar uygulamasını açarak büyük ekleri ve içerik kategorilerini inceleyebilirsiniz.',
          },
          {
            type: 'paragraph',
            text: 'Silmeden önce:',
          },
          {
            type: 'list',
            items: [
              'Önemli belgeleri kaydedin.',
              'Aile veya iş görüşmelerindeki gerekli dosyaları kontrol edin.',
              'Yalnızca dosya boyutuna bakarak toplu silme yapmayın.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Özellikle uzun videoların bulunduğu eski konuşmaların temizlenmesi kısa sürede belirgin alan kazandırabilir.',
          },
        ],
      },
      {
        heading: '7. iCloud Fotoğrafları saklama alanını optimize edin',
        blocks: [
          {
            type: 'paragraph',
            text: 'iCloud Fotoğrafları kullanıyorsanız özgün fotoğraf ve videoları iCloud’da saklayıp iPhone’da aygıta uygun daha küçük sürümler bulundurabilirsiniz.',
          },
          {
            type: 'paragraph',
            text: 'Bunun için:',
          },
          {
            type: 'steps',
            items: [
              'Ayarlar uygulamasını açın.',
              'Üst bölümdeki adınıza dokunun.',
              'iCloud → Fotoğraflar yolunu izleyin.',
              'Bu iPhone’u Eşzamanla seçeneğini açın.',
              'iPhone’da En İyi Saklama seçeneğini etkinleştirin.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Bu özellikten yararlanmak için yeterli iCloud saklama alanına ve eşzamanlama için internet bağlantısına ihtiyaç duyabilirsiniz.',
          },
          {
            type: 'callout',
            text: 'iCloud Fotoğrafları eşzamanlaması açıksa bir fotoğrafı iPhone’dan silmeniz, aynı Apple Hesabı ile eşzamanlanan diğer aygıtlardan da silinmesine neden olabilir. Bu nedenle iCloud eşzamanlamasını tek başına ayrı bir yedekleme sistemi gibi düşünmeyin.',
          },
          {
            type: 'links',
            links: [
              {
                href: 'https://support.apple.com/tr-tr/105061',
                label: 'Apple’ın iCloud Fotoğrafları ayarları rehberi',
              },
              {
                href: 'https://support.apple.com/tr-tr/108782',
                label: 'Apple’ın iCloud Fotoğrafları ve saklama alanı rehberi',
              },
            ],
          },
        ],
      },
      {
        heading: '8. İndirilen dosyaları ve çevrimdışı içerikleri temizleyin',
        blocks: [
          {
            type: 'paragraph',
            text: 'Netflix, Spotify, YouTube, podcast ve harita uygulamalarındaki çevrimdışı içerikler de saklama alanını doldurabilir.',
          },
          {
            type: 'paragraph',
            text: 'Şunları kontrol edin:',
          },
          {
            type: 'list',
            items: [
              'Çevrimdışı indirilen dizi ve filmler',
              'İndirilen müzikler',
              'Podcast bölümleri',
              'Harita indirmeleri',
              'Safari üzerinden indirilen dosyalar',
              'Dosyalar uygulamasındaki büyük belgeler',
            ],
          },
          {
            type: 'paragraph',
            text: 'Bu içeriklerin çoğu ihtiyaç duyduğunuzda tekrar indirilebildiği için güvenli bir başlangıç noktası olabilir.',
          },
        ],
      },
      {
        heading: 'iPhone depolama alanı temizlerken nelere dikkat edilmeli?',
        blocks: [
          {
            type: 'paragraph',
            text: 'Temizlik yaparken veri kaybetmemek için:',
          },
          {
            type: 'list',
            items: [
              'Önemli içeriklerin yedeğini kontrol edin.',
              'iCloud Fotoğrafları ile iPhone saklama alanının farklı kavramlar olduğunu unutmayın.',
              'Çok sayıda öğeyi silmeden önce son bir önizleme yapın.',
              'Son Silinenler albümünü temizlemeden önce dikkatlice kontrol edin.',
              'Güvenmediğiniz uygulamalara tam fotoğraf erişimi vermeyin.',
              'Uygulamaların gizlilik açıklamalarını inceleyin.',
              'Temizliği tek seferde bitirmek yerine düzenli aralıklarla yapın.',
            ],
          },
        ],
      },
      {
        heading: 'Sık sorulan sorular',
        blocks: [
          {
            type: 'faq',
          },
        ],
      },
      {
        heading: 'Sonuç',
        blocks: [
          {
            type: 'paragraph',
            text: 'iPhone’da yer açmanın en etkili yolu, en fazla alanı kullanan içerikleri belirleyerek kontrollü bir temizlik yapmaktır. Büyük videoları, gereksiz fotoğrafları, yinelenen içerikleri, kullanılmayan uygulamaları ve eski indirmeleri düzenli olarak kontrol etmek depolama alanının yeniden hızla dolmasını önleyebilir.',
          },
          {
            type: 'paragraph',
            text: 'Galeriniz temizliğin büyük bölümünü oluşturuyorsa Del-It ile fotoğraf ve videolarınızı adım adım gözden geçirebilir, silmek üzere ayırdığınız içeriklere son onaydan önce tekrar bakabilirsiniz. Böylece neyi saklayacağınıza karar verirken kontrol tamamen sizde kalır.',
          },
        ],
      },
    ],
    faq: [
      {
        question: 'iPhone depolama alanı neden hızla doluyor?',
        answer: 'Yüksek çözünürlüklü fotoğraf ve videolar, uygulama verileri, mesaj ekleri, indirilen dosyalar ve çevrimdışı medya içerikleri depolama alanının hızla dolmasına neden olabilir.',
      },
      {
        question: 'Fotoğrafları sildiğim hâlde neden alan açılmadı?',
        answer: 'Silinen fotoğraf ve videolar Son Silinenler albümünde tutulmaya devam ediyor olabilir. Hemen alan açmak istiyorsanız bu albümü kontrol ederek öğeleri kalıcı şekilde silmeniz gerekir.',
      },
      {
        question: 'iCloud satın almak iPhone’un depolama kapasitesini artırır mı?',
        answer: 'Hayır. iCloud saklama alanı ile iPhone’un fiziksel depolama alanı farklıdır. Ancak iCloud Fotoğrafları ve iPhone’da En İyi Saklama özelliği, aygıtta kullanılan alanı azaltmaya yardımcı olabilir.',
      },
      {
        question: 'Uygulamayı kaldırmak ile silmek aynı şey mi?',
        answer: 'Hayır. Uygulamayı kaldırmak uygulamanın kendisini kaldırırken belge ve verileri koruyabilir. Uygulamayı silmek ise uygulama ile ilişkili verileri de kaldırabilir.',
      },
      {
        question: 'Galeri temizleme uygulaması kullanmak güvenli mi?',
        answer: 'Bu, uygulamanın çalışma biçimine ve gizlilik politikasına bağlıdır. Fotoğrafların sunucuya gönderilip gönderilmediğini, hangi izinlerin istendiğini ve kalıcı silme öncesinde onay sunulup sunulmadığını kontrol edin.',
      },
    ],
    internalLinks: [
      {
        href: '/del-it',
        label: 'Del-It ürün sayfasını incele',
      },
    ],
  },
];

export const legacyBlogRedirects = [
  {
    from: '/blog/del-it-ile-galerini-daha-sakin-yonet',
    to: '/blog/iphone-depolama-alani-nasil-acilir',
  },
];

function collectTextFromBlocks(blocks, faq = []) {
  const values = [];

  blocks.forEach((section) => {
    if (section.heading) values.push(section.heading);
    section.blocks.forEach((block) => {
      if (block.text) values.push(block.text);
      if (block.items) values.push(...block.items);
      if (block.links) values.push(...block.links.map((link) => link.label));
    });
  });

  faq.forEach((item) => {
    values.push(item.question, item.answer);
  });

  return values.join(' ');
}

export function getReadingTime(post) {
  const text = [
    post.title,
    post.description,
    collectTextFromBlocks(post.content, post.faq || []),
  ].join(' ');
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(wordCount / 220))} dk`;
}

export function getPublishedBlogPosts() {
  return blogPosts
    .filter((post) => !post.draft)
    .map((post) => ({ ...post, readingTime: getReadingTime(post) }))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getBlogPostBySlug(slug) {
  const post = blogPosts.find((item) => item.slug === slug && !item.draft);
  return post ? { ...post, readingTime: getReadingTime(post) } : undefined;
}

export function getCategoryBySlug(slug) {
  return blogCategories[slug] || null;
}

export function getPostsByCategory(slug) {
  return getPublishedBlogPosts().filter((post) => post.category === slug);
}
