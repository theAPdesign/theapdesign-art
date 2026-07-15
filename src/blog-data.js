export const siteUrl = 'https://theapdesign.art';

export const blogCategories = {
  'mobil-uygulamalar': {
    title: 'Mobil Uygulamalar',
    description: 'iOS, mobil ürün geliştirme ve uygulama deneyimi üzerine yazılar.',
    language: 'tr',
  },
  'mobile-apps': {
    title: 'Mobile Apps',
    description: 'Articles about iOS, mobile product development, and app experiences.',
    language: 'en',
  },
};

const appStoreUrl = 'https://apps.apple.com/tr/app/del-it/id6780890586?l=tr';
const appStoreUrlEn = 'https://apps.apple.com/app/del-it/id6780890586';

export const blogPosts = [
  {
    title: 'iPhone Depolama Alanı Nasıl Açılır? 8 Etkili Yöntem',
    slug: 'iphone-depolama-alani-nasil-acilir',
    description: 'iPhone’unuzda yer açmak için fotoğraflardan kullanılmayan uygulamalara kadar kontrol edebileceğiniz tüm alanları adım adım inceleyin.',
    publishedAt: '2026-07-16T00:10:00+03:00',
    updatedAt: '2026-07-16T00:10:00+03:00',
    author: 'The AP Design',
    language: 'tr',
    translationKey: 'iphone-storage-guide',
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
  {
    title: 'How to Free Up Storage on iPhone: 8 Effective Methods',
    slug: 'how-to-free-up-storage-on-iphone',
    description: 'Learn how to free up storage on your iPhone by reviewing photos, videos, unused apps, downloads, and other space-consuming content.',
    publishedAt: '2026-07-16T00:35:00+03:00',
    updatedAt: '2026-07-16T00:35:00+03:00',
    author: 'The AP Design',
    language: 'en',
    translationKey: 'iphone-storage-guide',
    category: 'mobile-apps',
    tags: ['iPhone', 'iPhone storage', 'free up storage', 'gallery cleanup', 'photo cleanup', 'iOS'],
    coverImage: '/blog/iphone-depolama-alani-nasil-acilir.png',
    coverImageAlt: 'iPhone gallery and storage cleanup illustration',
    canonicalUrl: `${siteUrl}/en/blog/how-to-free-up-storage-on-iphone`,
    draft: false,
    featured: true,
    relatedPosts: [],
    seoTitle: 'How to Free Up Storage on iPhone: 8 Effective Methods | The AP Design',
    seoDescription: 'Is your iPhone storage full? Learn how to safely free up space by reviewing photos, videos, unused apps, downloads, duplicate media, and other unnecessary files.',
    socialImage: '/blog/iphone-depolama-alani-nasil-acilir.png',
    accent: 'from-[#d9e8ff] via-[#f3e9ff] to-[#ffe7f7]',
    iconKey: 'images',
    content: [
      {
        blocks: [
          {
            type: 'paragraph',
            text: 'To free up storage on your iPhone, first check which content is using the most space. Then review large videos, unnecessary photos, duplicate media, unused apps, message attachments, downloads, and other files you no longer need. If you use iCloud Photos, you can also turn on Optimize iPhone Storage.',
          },
          {
            type: 'paragraph',
            text: 'A full iPhone does more than stop you from taking new photos. It can also make everyday tasks such as installing apps, updating iOS, and downloading files more difficult. Instead of deleting random items, it is healthier to start with the areas that use the most storage and move through them carefully.',
          },
        ],
      },
      {
        heading: 'Check iPhone Storage First',
        blocks: [
          {
            type: 'paragraph',
            text: 'Before you start cleaning up, check which apps and content types are using your storage:',
          },
          {
            type: 'steps',
            items: [
              'Open the Settings app.',
              'Go to General.',
              'Tap iPhone Storage.',
              'Review how much space your apps and content types are using.',
            ],
          },
          {
            type: 'paragraph',
            text: 'On this screen, you can see how much space Photos, Messages, installed apps, and other categories are using. Your iPhone may also show storage recommendations based on your current usage.',
          },
          {
            type: 'links',
            links: [
              {
                href: 'https://support.apple.com/en-us/108429',
                label: 'Apple’s guide to checking iPhone storage',
              },
            ],
          },
          {
            type: 'paragraph',
            text: 'If Photos is taking up the most space, start with your gallery. If apps are the main issue, removing or offloading apps you rarely use can give faster results.',
          },
        ],
      },
      {
        heading: '1. Delete Unnecessary Photos and Videos',
        blocks: [
          {
            type: 'paragraph',
            text: 'Photo libraries usually grow quietly over time. Multiple shots of the same moment, forgotten screenshots, images saved from social media, screen recordings, and long videos can take up a significant amount of storage.',
          },
          {
            type: 'paragraph',
            text: 'When cleaning up your gallery, you can use this order:',
          },
          {
            type: 'list',
            items: [
              'Review unnecessary screenshots.',
              'Delete blurry or accidental photos.',
              'Choose between similar shots of the same moment.',
              'Check screen recordings you no longer need.',
              'Prioritize large and long videos.',
              'Review media saved from social media apps.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Choosing between thousands of photos can feel tiring. Instead of trying to finish your entire gallery in one session, reviewing a small section each day is usually more sustainable.',
          },
        ],
      },
      {
        heading: '2. Review Your Gallery More Efficiently with Del-It',
        blocks: [
          {
            type: 'paragraph',
            text: 'When you clean a photo library from a traditional grid, deciding what to keep can become harder than expected. Del-It, developed by The AP Design, helps you review photos and videos one by one.',
          },
          {
            type: 'paragraph',
            text: 'You can use swipe gestures to decide what to keep or set aside for deletion, then review the items in the Del-It trash before deleting them permanently. Permanent deletion only starts after your final confirmation.',
          },
          {
            type: 'paragraph',
            text: 'Del-It also handles core gallery cleanup actions on your device; your photos and videos are not uploaded to Del-It servers. This helps you organize your gallery while keeping control over your own content.',
          },
          {
            type: 'cta',
            label: 'Explore Del-It on the App Store',
            href: appStoreUrlEn,
          },
        ],
      },
      {
        heading: '3. Check the Recently Deleted Album',
        blocks: [
          {
            type: 'paragraph',
            text: 'Media you delete in the Photos app does not disappear completely right away. Deleted photos and videos stay in the Recently Deleted album for 30 days. During that period, they can be recovered or permanently deleted sooner.',
          },
          {
            type: 'paragraph',
            text: 'To check the Recently Deleted album:',
          },
          {
            type: 'steps',
            items: [
              'Open the Photos app.',
              'Go to Collections.',
              'Scroll down and find Recently Deleted.',
              'Unlock the album with Face ID or your passcode.',
              'Permanently delete items you no longer need.',
            ],
          },
          {
            type: 'paragraph',
            text: 'If you need storage immediately, deleting photos from your library may not be enough; you may also need to empty Recently Deleted.',
          },
          {
            type: 'callout',
            text: 'You may not be able to recover photos and videos after permanently deleting them. Check carefully before starting the final delete action.',
          },
          {
            type: 'links',
            links: [
              {
                href: 'https://support.apple.com/en-us/104967',
                label: 'Apple’s guide to Recently Deleted and permanent deletion',
              },
            ],
          },
        ],
      },
      {
        heading: '4. Merge Duplicate Photos and Videos',
        blocks: [
          {
            type: 'paragraph',
            text: 'Multiple copies of the same photo can cause unnecessary storage use over time. You can use the built-in Duplicates feature on iPhone to merge detected duplicate photos and videos:',
          },
          {
            type: 'steps',
            items: [
              'Open the Photos app.',
              'Go to Collections.',
              'Under Utilities, tap Duplicates.',
              'Use Merge next to the duplicate group you want to combine.',
            ],
          },
          {
            type: 'paragraph',
            text: 'If your library does not contain detected duplicates, this section may not appear.',
          },
          {
            type: 'paragraph',
            text: 'This feature is helpful for identical copies. For similar but not identical photos, you may still need to review your library manually and decide which shots to keep.',
          },
          {
            type: 'links',
            links: [
              {
                href: 'https://support.apple.com/guide/iphone/iph1978d9c23/ios',
                label: 'Apple’s iPhone guide to merging duplicate photos and videos',
              },
            ],
          },
        ],
      },
      {
        heading: '5. Offload or Delete Unused Apps',
        blocks: [
          {
            type: 'paragraph',
            text: 'Apps you have not opened in a long time can use storage through both the app itself and the documents and data they create.',
          },
          {
            type: 'paragraph',
            text: 'You can choose between two approaches:',
          },
          {
            type: 'list',
            items: [
              'Delete App: Removes the app and its related data.',
              'Offload App: Removes the app while keeping its documents and data.',
            ],
          },
          {
            type: 'paragraph',
            text: 'To let iPhone automatically offload unused apps:',
          },
          {
            type: 'steps',
            items: [
              'Open Settings.',
              'Go to Apps.',
              'Tap App Store.',
              'Turn on Offload Unused Apps.',
            ],
          },
          {
            type: 'paragraph',
            text: 'This option can reduce the storage used by apps you rarely open while helping preserve their data.',
          },
          {
            type: 'links',
            links: [
              {
                href: 'https://support.apple.com/guide/iphone/iph47c931112/ios',
                label: 'Apple’s iPhone guide to offloading unused apps',
              },
            ],
          },
        ],
      },
      {
        heading: '6. Review Large Messages Attachments',
        blocks: [
          {
            type: 'paragraph',
            text: 'High-resolution photos, videos, and other files sent through messages can use a lot of storage over time.',
          },
          {
            type: 'paragraph',
            text: 'Open Settings > General > iPhone Storage, then review the Messages section to inspect large attachments and content categories.',
          },
          {
            type: 'paragraph',
            text: 'Before deleting attachments:',
          },
          {
            type: 'list',
            items: [
              'Save important documents.',
              'Check files from family or work conversations.',
              'Do not bulk delete items only because they are large.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Older conversations that include long videos can often free up noticeable space quickly when reviewed carefully.',
          },
        ],
      },
      {
        heading: '7. Optimize Storage with iCloud Photos',
        blocks: [
          {
            type: 'paragraph',
            text: 'If you use iCloud Photos, you can keep original photos and videos in iCloud while storing smaller device-optimized versions on your iPhone.',
          },
          {
            type: 'paragraph',
            text: 'To do this:',
          },
          {
            type: 'steps',
            items: [
              'Open Settings.',
              'Tap your name at the top.',
              'Go to iCloud > Photos.',
              'Turn on Sync this iPhone.',
              'Select Optimize iPhone Storage.',
            ],
          },
          {
            type: 'paragraph',
            text: 'To use this feature, you may need enough iCloud storage and an internet connection for syncing.',
          },
          {
            type: 'callout',
            text: 'If iCloud Photos syncing is on, deleting a photo from your iPhone may also delete it from other devices synced with the same Apple Account. Do not treat iCloud Photos as a separate backup system by itself.',
          },
          {
            type: 'links',
            links: [
              {
                href: 'https://support.apple.com/en-us/105061',
                label: 'Apple’s guide to setting up iCloud Photos',
              },
              {
                href: 'https://support.apple.com/en-us/108782',
                label: 'Apple’s guide to iCloud Photos and device storage',
              },
            ],
          },
        ],
      },
      {
        heading: '8. Remove Downloads and Offline Content',
        blocks: [
          {
            type: 'paragraph',
            text: 'Offline content from apps such as Netflix, Spotify, YouTube, podcasts, and map apps can also fill up your iPhone storage.',
          },
          {
            type: 'paragraph',
            text: 'Check these areas:',
          },
          {
            type: 'list',
            items: [
              'Downloaded TV shows and movies',
              'Downloaded music',
              'Podcast episodes',
              'Offline maps',
              'Files downloaded through Safari',
              'Large documents in the Files app',
            ],
          },
          {
            type: 'paragraph',
            text: 'Because most of this content can be downloaded again when needed, it can be a safe place to start.',
          },
        ],
      },
      {
        heading: 'Important Precautions Before Cleaning iPhone Storage',
        blocks: [
          {
            type: 'paragraph',
            text: 'To avoid losing data while cleaning up:',
          },
          {
            type: 'list',
            items: [
              'Check that important content is backed up.',
              'Remember that iCloud Photos storage and iPhone device storage are different concepts.',
              'Preview items one last time before deleting many of them.',
              'Review Recently Deleted carefully before emptying it.',
              'Do not give full photo access to apps you do not trust.',
              'Read the privacy explanations of cleanup apps.',
              'Clean up regularly instead of trying to finish everything at once.',
            ],
          },
        ],
      },
      {
        heading: 'Frequently Asked Questions',
        blocks: [
          {
            type: 'faq',
          },
        ],
      },
      {
        heading: 'Conclusion',
        blocks: [
          {
            type: 'paragraph',
            text: 'The most effective way to free up storage on iPhone is to identify which content uses the most space and clean it up carefully. Reviewing large videos, unnecessary photos, duplicate content, unused apps, and old downloads on a regular schedule can help prevent your storage from filling up again too quickly.',
          },
          {
            type: 'paragraph',
            text: 'If your gallery makes up a large part of the cleanup, Del-It can help you review photos and videos step by step, then check the items you set aside before final deletion. That way, you stay in control of what you keep.',
          },
        ],
      },
    ],
    faq: [
      {
        question: 'Why does iPhone storage fill up so quickly?',
        answer: 'High-resolution photos and videos, app data, message attachments, downloaded files, and offline media can all cause iPhone storage to fill up quickly.',
      },
      {
        question: 'Why did deleting photos not free up space?',
        answer: 'Deleted photos and videos may still be stored in the Recently Deleted album. If you need space right away, check that album and permanently delete items you no longer need.',
      },
      {
        question: 'Does buying iCloud storage increase my iPhone storage capacity?',
        answer: 'No. iCloud storage and your iPhone’s physical storage are different. However, iCloud Photos and Optimize iPhone Storage can help reduce the space used on your device.',
      },
      {
        question: 'Is offloading an app the same as deleting it?',
        answer: 'No. Offloading removes the app while keeping its documents and data. Deleting an app can remove the app and its related data.',
      },
      {
        question: 'Is it safe to use a gallery cleanup app?',
        answer: 'It depends on how the app works and how it handles privacy. Check whether photos are uploaded to servers, which permissions are requested, and whether the app asks for confirmation before permanent deletion.',
      },
    ],
    internalLinks: [
      {
        href: '/del-it',
        label: 'Explore the Del-It product page',
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
  const minutes = Math.max(1, Math.ceil(wordCount / 220));
  return post.language === 'en' ? `${minutes} min` : `${minutes} dk`;
}

export function getPublishedBlogPosts(language = 'tr') {
  return blogPosts
    .filter((post) => !post.draft && post.language === language)
    .map((post) => ({ ...post, readingTime: getReadingTime(post) }))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getAllPublishedBlogPosts() {
  return blogPosts
    .filter((post) => !post.draft)
    .map((post) => ({ ...post, readingTime: getReadingTime(post) }))
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getBlogPostBySlug(slug, language) {
  const post = blogPosts.find((item) => item.slug === slug && !item.draft && (!language || item.language === language));
  return post ? { ...post, readingTime: getReadingTime(post) } : undefined;
}

export function getCategoryBySlug(slug) {
  return blogCategories[slug] || null;
}

export function getPostsByCategory(slug, language) {
  return getAllPublishedBlogPosts().filter((post) => post.category === slug && (!language || post.language === language));
}

export function getTranslatedPost(post, targetLanguage) {
  if (!post?.translationKey) return undefined;
  const translated = blogPosts.find((item) => (
    item.translationKey === post.translationKey
    && item.language === targetLanguage
    && !item.draft
  ));
  return translated ? { ...translated, readingTime: getReadingTime(translated) } : undefined;
}

export function getPostPath(post) {
  if (!post) return '/blog';
  return post.language === 'en' ? `/en/blog/${post.slug}` : `/blog/${post.slug}`;
}

export function getBlogIndexPath(language = 'tr') {
  return language === 'en' ? '/en/blog' : '/blog';
}

export function getCategoryPath(categorySlug, language = 'tr') {
  return language === 'en' ? `/en/blog/category/${categorySlug}` : `/blog/kategori/${categorySlug}`;
}
