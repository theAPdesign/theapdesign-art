import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BarChart3,
  BookOpenText,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  Download,
  ExternalLink,
  Hand,
  Images,
  LayoutTemplate,
  LockKeyhole,
  Mail,
  MoveHorizontal,
  ShieldCheck,
  Sparkles,
  Trash2,
  UsersRound,
  Video,
} from 'lucide-react';
import {
  blogCategories,
  getBlogPostBySlug,
  getPostsByCategory,
  getPublishedBlogPosts,
} from './blog-data.js';
import './styles.css';

const product = {
  title: 'Del-it',
  description: 'Benzer fotoğrafları bulur, gereksiz kareleri ayıklamayı kolaylaştırır ve depolama alanı kazandırır.',
  summary: 'Galeriyi sakin, temiz ve daha akıllı tutan ürün.',
  logo: '/del-it-logo.jpg',
};

const delitAppStoreUrl = 'https://apps.apple.com/tr/app/del-it/id6780890586?l=tr';
const delitPhoneTr = '/del-it-phone-tr.png';

const xoxProduct = {
  title: 'XOX Taktik Arena',
  description: 'Klasik X-O hissini 3 taş limitiyle hızlandıran, beraberliksiz ve kısa turlu 3x3 strateji oyunu.',
  summary: 'Dinamik X-O kuralları, yapay zeka ve iki kişilik hızlı maçlar.',
  logo: '/xox-taktik-arena-logo.png',
};

const translations = {
  tr: {
    navHome: 'Anasayfa',
    navDelit: 'Del-It',
    navXox: 'XOX',
    navBlog: 'Blog',
    navContact: 'İletişim',
    expandMenu: 'Menüyü genişlet',
    collapseMenu: 'Menüyü daralt',
    languageLabel: 'Dil seçimi',
    studioTag: 'Uygulama stüdyosu',
    heroLine1: 'Eğlenceli, Çözümlü',
    heroLine2: 'Fikirler',
    heroText: 'Biz, eğlenceli ve ilgi çekici mini oyunlar ile pratik mobil deneyimler geliştirmeye odaklanan yaratıcı bir stüdyoyuz. Yeniliği, yaratıcılığı ve kullanıcı geri bildirimlerini birleştirerek kolay öğrenilen, bırakması zor ve herkes için keyifli uygulamalar tasarlıyoruz.',
    viewApps: 'Uygulamaları Gör',
    contact: 'İletişim',
    appsTag: 'Uygulamalarımız',
    appsTitlePrefix: 'Her uygulama kendi',
    appsTitleAccent: 'küçük dünyasını',
    appsTitleSuffix: 'taşır.',
    appsDescription: 'Kısa sürede anlaşılır, tekrar açıldığında yine keyif verir. Oyunlardan pratik araçlara kadar ürünleri sade, canlı ve mobil öncelikli tasarlıyoruz.',
    carouselLabel: 'Uygulamalarımız',
    showSlide: 'bölümünü göster',
    delitSubtitle: 'iPhone için galeri düzenleme',
    delitTitle1: 'Galerini temizle',
    delitTitle2: 'anılarını koru',
    delitDescription: 'Fotoğraf ve videolarını hızlıca gözden geçir, gereksiz olanları güvenli çöp kutusuna ayır. Medya kasası, rehber temizliği, kolaj ve istatistikler tek yerde.',
    quickClean: 'Hızlı temizlik',
    quickCleanText: 'Kaydırarak karar ver',
    safeTrash: 'Güvenli çöp kutusu',
    safeTrashText: 'Silmeden önce kontrol et',
    mediaVault: 'Medya kasası',
    mediaVaultText: 'Face ID ile koru',
    contactsCollage: 'Rehber ve kolaj',
    contactsCollageText: 'Galerinden fazlasını düzenle',
    onDeviceTag: 'On-device güvenlik',
    onDeviceTitle: 'İçeriklerin cihazında kalır.',
    onDeviceText: 'Fotoğraf, video, rehber ve kasa içerikleri Del-It sunucularına yüklenmez.',
    noAccount: 'Hesap gerekmez',
    finalDecision: 'Son karar senin',
    localProcess: 'Yerel işlem',
    more: 'Daha fazla',
    appStore: 'App Store',
    xoxSubtitle: 'Beraberliksiz 3x3 strateji',
    xoxTitle1: 'Klasik X-O',
    xoxTitle2: 'daha taktik',
    xoxDescription: '3 taş limiti, eski taş silinme mekaniği ve beraberliksiz akışla her hamle daha değerli hale gelir. Kısa turlarda hızlı düşün, doğru köşeyi tut ve çizgiyi tamamla.',
    threeStone: '3 taş limiti',
    threeStoneText: 'Tahtada her oyuncunun en fazla 3 taşı kalır.',
    noDraw: 'Beraberlik yok',
    noDrawText: 'Eski taş silindiği için oyun sürekli karar ister.',
    shortRounds: 'Kısa turlar',
    shortRoundsText: 'Hızlı, taktik ve tekrar oynanabilir maçlar.',
    tacticalTempo: 'Taktik tempo',
    tacticalTempoText: 'Her hamlede tahtanın ritmi değişir.',
    footerDescription: 'Mobil uygulamalar, mini oyunlar ve sade dijital deneyimler geliştiriyoruz.',
    supportEmail: 'Destek e-postası',
    contactTitle: 'Kısa bir mesaj bırak.',
    contactText: 'Burada footer yok. Doğrudan formu kullanıp bize ulaşabilirsin.',
    fullName: 'Ad Soyad',
    email: 'E-posta',
    subject: 'Konu',
    message: 'Mesaj',
    messagePlaceholder: 'Mesajınızı yazın',
    send: 'Gönder',
    delitHeroTitle1: 'Tek Uygulamada',
    delitHeroAccent: 'Onlarca',
    delitHeroTitle2: 'Çözüm',
    delitHeroText1: 'Fotoğraflarınızı, videolarınızı, kişilerinizi ve daha fazlasını temizleyin.',
    delitHeroText2: "Her şey güvenli. Her şey iPhone'unuzda.",
    photoClean: 'Fotoğraf Temizleme',
    videoClean: 'Video Temizleme',
    privateVault: 'Özel Kasa',
    trashBox: 'Çöp Kutusu',
    contactClean: 'Rehber Temizleme',
    collageCreate: 'Kolaj Oluşturma',
    features: 'Özellikler',
    delitFeatureTitle1: 'Temizlik, düzen ve gizlilik',
    delitFeatureTitle2: 'aynı yerde',
    galleryView: 'Galeri Görünümü',
    galleryViewText: 'Fotoğraf, video ve ekran görüntülerini düzenli bir görünümde daha kolay incele.',
    privacyPolicy: 'Gizlilik Politikası',
    terms: 'Kullanım Şartları',
    securityPrivacy: 'Güvenlik ve gizlilik',
    securityTitle: 'Bilgileriniz cihazında kalır',
    securityText: 'Del-It, fotoğraf, video, rehber ve Kasa içeriklerini sunucuya yüklemez. Kişisel içeriklerin reklam hedefleme amacıyla kullanılmaz.',
    deviceProcessing: 'Cihaz içi işleme',
    deviceProcessingText: 'Temel medya işlemleri iPhone üzerinde gerçekleşir.',
    noUpload: 'Sunucuya yükleme yok',
    noUploadText: 'Fotoğraf, video, rehber ve kasa içeriklerin Del-It sunucularına gönderilmez.',
    transparentPermissions: 'Şeffaf izin akışı',
    transparentPermissionsText: 'Hangi izinleri verdiğini ve neye onay verdiğini açıkça görürsün.',
    fullControl: 'Kontrol tamamen sende',
    fullControlText: 'Kalıcı silme ve rehber işlemleri yalnızca açık onayınla başlar.',
    finalCtaTitle: 'Daha ferah bir galeri birkaç kaydırma uzağında.',
    finalCtaText: 'Galerini kendi hızında gözden geçir, gereksizleri güvenle ayır ve iPhone’unda yeniden yer aç.',
    appStoreDownload: 'App Store’dan İndir',
    screens: 'Ekranlar',
    screensTitle: 'Del-It deneyimine yakından bak',
    screensText: 'Temizlik, kasa, rehber, kolaj ve istatistik akışlarını gerçek uygulama ekranlarıyla keşfet.',
    faq: 'SSS',
    faqTitle: 'Merak ettikleriniz',
    xoxHeroTitle1: 'Beraberliksiz',
    xoxHeroTitle2: 'X-O-X stratejisi.',
    xoxHeroText: 'Klasik X-O hissini koruyan, 3 taş limiti ve eski taş silinme mekaniğiyle her turu daha hızlı, dinamik ve taktik hale getiren 3x3 mobil strateji oyunu.',
    neonThemes: 'Neon temalar',
    gameLogic: 'Oyun Mantığı',
    xoxRulesTitle: 'Klasik X-O, daha hızlı.',
    xoxRulesText: 'Eski taş silinme mekaniği oyunu tıkamaz, beraberliği ortadan kaldırır ve her turda kazanan üretir.',
    singlePlayer: 'Tek Oyunculu Mod',
    singlePlayerText: 'Kolay, orta ve zor zorluk seçenekleriyle yapay zekaya karşı hızlı maçlar.',
    twoPlayer: 'İki Kişilik Mod',
    twoPlayerText: 'Aynı cihazda iki oyuncu, oyuncu isimleri ve hedef skor seçimiyle karşılıklı oynar.',
    themesSound: 'Tema ve Ses Sistemi',
    themesSoundText: 'Neon, Klasik, Kırmızı, Mavi ve Yeşil tema seçenekleri; ses, müzik ve hamle efektleri.',
    footerDelitTitle: 'Galerini daha sade, güvenli ve yönetilebilir hale getiren iOS araçları.',
    footerDelitText: 'Galerini daha sade, güvenli ve yönetilebilir hale getiren iOS araçları geliştiriyoruz.',
    footerDefaultTitle: 'Kısa, eğlenceli ve tekrar oynanabilir deneyimler.',
    footerDefaultText: 'Mobil uygulamalar ve mini oyunlar geliştiriyoruz. Amacımız öğrenmesi kolay, geri dönmesi keyifli ürünler üretmek.',
    blogTag: 'Blog',
    blogHeroTitle: 'Ürün, tasarım ve mobil deneyim notları.',
    blogHeroText: 'AP Design’da geliştirdiğimiz uygulamalardan, kullanıcı deneyimi kararlarından ve mobil ürün üretim sürecinden kısa, okunabilir yazılar.',
    latestPosts: 'Son yazılar',
    blogGridTitle: 'Yeni fikirler, küçük notlar ve ürün hikayeleri.',
    readMore: 'Daha fazla',
    readTime: 'okuma',
    backToBlog: 'Bloga dön',
    effectiveDate: 'Yürürlük tarihi',
    lastUpdate: 'Son güncelleme',
    appLabel: 'Uygulama',
  },
  en: {
    navHome: 'Home',
    navDelit: 'Del-It',
    navXox: 'XOX',
    navBlog: 'Blog',
    navContact: 'Contact',
    expandMenu: 'Expand menu',
    collapseMenu: 'Collapse menu',
    languageLabel: 'Language',
    studioTag: 'App studio',
    heroLine1: 'Playful, Useful',
    heroLine2: 'Ideas',
    heroText: 'We are a creative studio focused on building playful mini games and practical mobile experiences. We combine innovation, creativity, and user feedback to design apps that are easy to learn, hard to put down, and enjoyable for everyone.',
    viewApps: 'View Apps',
    contact: 'Contact',
    appsTag: 'Our Apps',
    appsTitlePrefix: 'Every app carries',
    appsTitleAccent: 'its own little',
    appsTitleSuffix: 'world.',
    appsDescription: 'Easy to understand quickly, enjoyable when opened again. From games to practical tools, we design simple, lively, mobile-first products.',
    carouselLabel: 'Our apps',
    showSlide: 'slide',
    delitSubtitle: 'Gallery organizer for iPhone',
    delitTitle1: 'Clean your gallery',
    delitTitle2: 'keep your memories',
    delitDescription: 'Review photos and videos quickly, move unnecessary items into a safe trash flow, and manage vault, contacts, collage, and statistics in one place.',
    quickClean: 'Quick clean',
    quickCleanText: 'Decide by swiping',
    safeTrash: 'Safe trash',
    safeTrashText: 'Review before deleting',
    mediaVault: 'Media vault',
    mediaVaultText: 'Protect with Face ID',
    contactsCollage: 'Contacts and collage',
    contactsCollageText: 'Organize more than your gallery',
    onDeviceTag: 'On-device security',
    onDeviceTitle: 'Your content stays on your device.',
    onDeviceText: 'Photos, videos, contacts, and vault content are not uploaded to Del-It servers.',
    noAccount: 'No account needed',
    finalDecision: 'Your final decision',
    localProcess: 'Local processing',
    more: 'Learn more',
    appStore: 'App Store',
    xoxSubtitle: 'Draw-free 3x3 strategy',
    xoxTitle1: 'Classic X-O',
    xoxTitle2: 'more tactical',
    xoxDescription: 'With the 3-stone limit, oldest-stone removal, and a draw-free flow, every move matters more. Think fast, control the right corner, and complete the line.',
    threeStone: '3-stone limit',
    threeStoneText: 'Each player can keep at most 3 pieces on the board.',
    noDraw: 'No draws',
    noDrawText: 'Because old pieces disappear, the game keeps asking for decisions.',
    shortRounds: 'Short rounds',
    shortRoundsText: 'Fast, tactical, and easy to replay.',
    tacticalTempo: 'Tactical tempo',
    tacticalTempoText: 'The rhythm of the board changes with every move.',
    footerDescription: 'We build mobile apps, mini games, and simple digital experiences.',
    supportEmail: 'Support email',
    contactTitle: 'Leave a quick message.',
    contactText: 'No footer here. Use the form directly to reach us.',
    fullName: 'Full name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    messagePlaceholder: 'Write your message',
    send: 'Send',
    delitHeroTitle1: 'One App',
    delitHeroAccent: 'Dozens',
    delitHeroTitle2: 'of Solutions',
    delitHeroText1: 'Clean your photos, videos, contacts, and more.',
    delitHeroText2: 'Everything is safe. Everything stays on your iPhone.',
    photoClean: 'Photo Cleaning',
    videoClean: 'Video Cleaning',
    privateVault: 'Private Vault',
    trashBox: 'Trash Box',
    contactClean: 'Contact Cleaning',
    collageCreate: 'Create Collage',
    features: 'Features',
    delitFeatureTitle1: 'Cleaning, order, and privacy',
    delitFeatureTitle2: 'in one place',
    galleryView: 'Gallery View',
    galleryViewText: 'Review photos, videos, and screenshots more easily in an organized view.',
    privacyPolicy: 'Privacy Policy',
    terms: 'Terms of Use',
    securityPrivacy: 'Security and privacy',
    securityTitle: 'Your data stays on your device',
    securityText: 'Del-It does not upload photo, video, contact, or Vault content to servers. Personal content is not used for ad targeting.',
    deviceProcessing: 'On-device processing',
    deviceProcessingText: 'Core media operations happen on your iPhone.',
    noUpload: 'No server upload',
    noUploadText: 'Your photos, videos, contacts, and vault content are not sent to Del-It servers.',
    transparentPermissions: 'Transparent permissions',
    transparentPermissionsText: 'Clearly see which permissions you grant and what you approve.',
    fullControl: 'You stay in control',
    fullControlText: 'Permanent deletion and contact actions only start with your explicit approval.',
    finalCtaTitle: 'A lighter gallery is only a few swipes away.',
    finalCtaText: 'Review your gallery at your own pace, safely separate what you no longer need, and free up space on your iPhone.',
    appStoreDownload: 'Download on the App Store',
    screens: 'Screens',
    screensTitle: 'Take a closer look at Del-It',
    screensText: 'Explore cleaning, vault, contacts, collage, and statistics flows with real app screens.',
    faq: 'FAQ',
    faqTitle: 'Questions you may have',
    xoxHeroTitle1: 'Draw-Free',
    xoxHeroTitle2: 'X-O-X Strategy.',
    xoxHeroText: 'A 3x3 mobile strategy game that keeps the classic X-O feel while making every round faster, more dynamic, and more tactical with the 3-stone limit and oldest-piece removal.',
    neonThemes: 'Neon themes',
    gameLogic: 'Game Logic',
    xoxRulesTitle: 'Classic X-O, faster.',
    xoxRulesText: 'The oldest-piece removal mechanic keeps the game moving, removes draws, and produces a winner every round.',
    singlePlayer: 'Single Player Mode',
    singlePlayerText: 'Quick matches against AI with easy, medium, and hard difficulty options.',
    twoPlayer: 'Two Player Mode',
    twoPlayerText: 'Two players on the same device with player names and target score selection.',
    themesSound: 'Themes and Sound',
    themesSoundText: 'Neon, Classic, Red, Blue, and Green themes plus sound, music, and move effects.',
    footerDelitTitle: 'iOS tools that make your gallery simpler, safer, and easier to manage.',
    footerDelitText: 'We build iOS tools that make your gallery simpler, safer, and easier to manage.',
    footerDefaultTitle: 'Short, playful, and replayable experiences.',
    footerDefaultText: 'We build mobile apps and mini games. Our goal is to create products that are easy to learn and enjoyable to return to.',
    blogTag: 'Blog',
    blogHeroTitle: 'Notes on products, design, and mobile experiences.',
    blogHeroText: 'Short, readable posts from AP Design about the apps we build, user experience decisions, and mobile product craft.',
    latestPosts: 'Latest posts',
    blogGridTitle: 'Fresh ideas, compact notes, and product stories.',
    readMore: 'Read more',
    readTime: 'read',
    backToBlog: 'Back to blog',
    effectiveDate: 'Effective date',
    lastUpdate: 'Last updated',
    appLabel: 'App',
  },
};

const LanguageContext = React.createContext(null);

function useLanguage() {
  return React.useContext(LanguageContext);
}

function App() {
  useScrollReveal();
  const [language, setLanguageState] = React.useState(() => {
    if (typeof window === 'undefined') return 'tr';
    return window.localStorage.getItem('ap-language') || 'tr';
  });
  const setLanguage = (nextLanguage) => {
    window.localStorage.setItem('ap-language', nextLanguage);
    setLanguageState(nextLanguage);
  };
  const t = (key) => translations[language]?.[key] || translations.tr[key] || key;

  const path = normalizePath(window.location.pathname);
  let page;

  if (path === '/products') {
    page = <RedirectHome />;
  } else if (path === '/contact') {
    page = <ContactPage />;
  } else if (path === '/del-it') {
    page = <DelitPage />;
  } else if (path === '/del-it/gizlilik-politikasi') {
    page = <DelitPrivacyPage />;
  } else if (path === '/del-it/kullanim-sartlari') {
    page = <DelitTermsPage />;
  } else if (path === '/blog') {
    page = <BlogPage />;
  } else if (path.startsWith('/blog/kategori/')) {
    page = <BlogCategoryPage slug={path.replace('/blog/kategori/', '')} />;
  } else if (path.startsWith('/blog/')) {
    page = <BlogPostPage slug={path.replace('/blog/', '')} />;
  } else if (path === '/xox-taktik-arena') {
    page = <XoxPage />;
  } else if (path === '/xox-taktik-arena/gizlilik-politikasi') {
    page = <XoxPrivacyPage />;
  } else if (path === '/xox-taktik-arena/kullanim-sartlari') {
    page = <XoxTermsPage />;
  } else {
    page = <HomePage />;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {page}
    </LanguageContext.Provider>
  );
}

function useScrollReveal() {
  React.useEffect(() => {
    const elements = document.querySelectorAll('.scroll-reveal');

    if (!elements.length) {
      return undefined;
    }

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);
}

function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-paper text-ink">
      <Background />
      <Header />
      <HomeHero />
      <HomeApplications />
      <Footer />
    </main>
  );
}

function RedirectHome() {
  React.useEffect(() => {
    window.history.replaceState(null, '', '/');
  }, []);

  return <HomePage />;
}

function BlogPage() {
  const { t } = useLanguage();
  const posts = getPublishedBlogPosts();
  const featuredPost = posts.find((post) => post.featured) || posts[0];

  return (
    <main className="relative min-h-screen overflow-hidden bg-paper text-ink">
      <Background />
      <Header />
      <section className="relative z-10 flex min-h-[100svh] items-center overflow-hidden px-5 pb-10 pt-24 sm:px-8 sm:pb-12 lg:pt-28">
        <div className="pointer-events-none absolute left-[8%] top-[22%] h-48 w-48 rounded-full bg-pink-200/45 blur-3xl" />
        <div className="pointer-events-none absolute right-[10%] top-[20%] h-56 w-56 rounded-full bg-sky-200/55 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[12%] left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-violet-200/45 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <p className="inline-flex rounded-full border border-black/8 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-ink/58 shadow-soft">
            {t('blogTag')}
          </p>
          <h1 className="mx-auto mt-6 max-w-5xl font-display text-[clamp(3rem,7vw,7.4rem)] font-black leading-[0.9] tracking-tight">
            {t('blogHeroTitle')}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-ink/64 sm:text-xl">
            {t('blogHeroText')}
          </p>
        </div>
      </section>

      <section className="relative z-10 bg-white px-5 py-16 sm:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="scroll-reveal flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-violet-600">
                {t('latestPosts')}
              </p>
              <h2 className="mt-5 max-w-4xl font-display text-[clamp(2.2rem,5vw,5rem)] font-black leading-[0.96] tracking-tight">
                {t('blogGridTitle')}
              </h2>
            </div>
          </div>
          {featuredPost ? (
            <article className="scroll-reveal mt-10 grid overflow-hidden rounded-[2rem] border border-black/8 bg-[#fbfaf7] shadow-soft lg:grid-cols-[0.95fr_1.05fr]">
              <BlogVisual post={featuredPost} title={featuredPost.title} />
              <div className="flex flex-col justify-center p-6 sm:p-8">
                <a href={`/blog/kategori/${featuredPost.category}`} className="w-fit rounded-full border border-black/8 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-ink/50 transition hover:bg-[#f3f1ec]">
                  {blogCategories[featuredPost.category]?.title}
                </a>
                <h2 className="mt-5 font-display text-[clamp(2rem,4vw,4rem)] font-black leading-[0.96] tracking-tight">
                  {featuredPost.title}
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-ink/62">
                  {featuredPost.description}
                </p>
                <BlogMeta post={featuredPost} className="mt-5" />
                <a href={`/blog/${featuredPost.slug}`} className="mt-7 inline-flex h-12 w-fit items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-black/85">
                  {t('readMore')}
                  <ChevronRight size={16} />
                </a>
              </div>
            </article>
          ) : null}
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function BlogCategoryPage({ slug }) {
  const { t } = useLanguage();
  const category = blogCategories[slug];
  const posts = getPostsByCategory(slug);

  if (!category || !posts.length) {
    return <NotFoundPage />;
  }

  return (
    <main className="relative min-h-screen overflow-hidden bg-paper text-ink">
      <Background />
      <Header />
      <section className="relative z-10 px-5 pb-12 pt-24 sm:px-8 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <a href="/blog" className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-bold text-ink shadow-soft transition hover:bg-[#fbfaf7]">
            <ChevronRight className="rotate-180" size={16} />
            {t('backToBlog')}
          </a>
          <p className="mt-8 inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-violet-600">
            {t('blogTag')}
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-[clamp(2.6rem,6vw,6rem)] font-black leading-[0.94] tracking-tight">
            {category.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/62">{category.description}</p>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function BlogCard({ post }) {
  const { t } = useLanguage();

  return (
    <article className="scroll-reveal group flex h-full flex-col overflow-hidden rounded-[1.7rem] border border-black/8 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(60,44,125,0.13)]">
      <BlogVisual post={post} title={post.title} />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <a href={`/blog/kategori/${post.category}`} className="mb-3 w-fit rounded-full bg-[#f3f1ec] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-ink/48 transition hover:bg-violet-50 hover:text-violet-600">
          {blogCategories[post.category]?.title}
        </a>
        <h3 className="font-display text-2xl font-black leading-tight tracking-tight text-ink">
          {post.title}
        </h3>
        <p className="mt-3 text-base leading-7 text-ink/62">
          {post.description}
        </p>
        <BlogMeta post={post} className="mt-5" />
        <a
          href={`/blog/${post.slug}`}
          className="mt-auto inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-black/85"
          aria-label={`${post.title} yazısını oku`}
        >
          {t('readMore')}
          <ChevronRight size={16} />
        </a>
      </div>
    </article>
  );
}

function BlogMeta({ post, className = '' }) {
  const { t } = useLanguage();
  const published = new Date(post.publishedAt);

  return (
    <div className={`flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-ink/42 ${className}`}>
      <time dateTime={post.publishedAt} className="inline-flex items-center gap-1.5">
        <CalendarDays size={15} />
        {published.toLocaleDateString('tr-TR', { day: '2-digit', month: 'long', year: 'numeric' })}
      </time>
      <span className="inline-flex items-center gap-1.5">
        <Clock3 size={15} />
        {post.readingTime} {t('readTime')}
      </span>
    </div>
  );
}

function BlogVisual({ post, title }) {
  const icons = {
    images: Images,
    shield: ShieldCheck,
    sparkles: Sparkles,
  };
  const Icon = icons[post.iconKey] || BookOpenText;

  return (
    <figure className={`relative min-h-56 overflow-hidden bg-gradient-to-br ${post.accent}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,255,255,0.72),transparent_28%),radial-gradient(circle_at_78%_82%,rgba(255,255,255,0.38),transparent_30%)]" />
      <div className="absolute -left-10 bottom-5 h-32 w-32 rounded-full border border-white/45 bg-white/14 backdrop-blur" />
      <div className="absolute right-5 top-5 grid h-16 w-16 place-items-center rounded-[1.25rem] border border-white/55 bg-white/35 text-white shadow-[0_18px_44px_rgba(22,16,60,0.16)] backdrop-blur-xl">
        <Icon size={30} strokeWidth={2.4} />
      </div>
      <div className="absolute inset-x-5 bottom-5 rounded-[1.35rem] border border-white/55 bg-white/42 p-4 shadow-[0_18px_46px_rgba(22,16,60,0.16)] backdrop-blur-xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">AP Design</p>
        <p className="mt-2 font-display text-2xl font-black leading-tight text-white drop-shadow-sm">
          {title}
        </p>
      </div>
    </figure>
  );
}

function BlogPostPage({ slug }) {
  const { t } = useLanguage();
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return <NotFoundPage />;
  }

  const relatedPosts = post.relatedPosts
    .map((relatedSlug) => getBlogPostBySlug(relatedSlug))
    .filter(Boolean);

  return (
    <main className="relative min-h-screen overflow-hidden bg-paper text-ink">
      <Background />
      <Header />
      <article className="relative z-10 px-5 pb-12 pt-24 sm:px-8 lg:pt-28">
        <div className="mx-auto max-w-5xl">
          <a href="/blog" className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-bold text-ink shadow-soft transition hover:bg-[#fbfaf7]">
            <ChevronRight className="rotate-180" size={16} />
            {t('backToBlog')}
          </a>
          <div className="mt-8 overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-soft">
            <BlogVisual post={post} title={post.title} />
            <div className="p-6 sm:p-10 lg:p-12">
              <a href={`/blog/kategori/${post.category}`} className="inline-flex rounded-full bg-[#f3f1ec] px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-ink/48 transition hover:bg-violet-50 hover:text-violet-600">
                {blogCategories[post.category]?.title}
              </a>
              <BlogMeta post={post} className="mt-5" />
              <h1 className="mt-5 font-display text-[clamp(2.5rem,6vw,5.8rem)] font-black leading-[0.95] tracking-tight">
                {post.title}
              </h1>
              <p className="mt-6 max-w-3xl text-xl leading-8 text-ink/62">
                {post.description}
              </p>
              <aside className="mt-8 rounded-[1.4rem] border border-black/8 bg-[#fbfaf7] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/42">Yazar</p>
                <p className="mt-2 font-display text-xl font-black">{post.author}</p>
                <p className="mt-1 text-sm text-ink/55">
                  Güncellendi: <time dateTime={post.updatedAt}>{new Date(post.updatedAt).toLocaleDateString('tr-TR', { day: '2-digit', month: 'long', year: 'numeric' })}</time>
                </p>
              </aside>
              <div className="mt-10 space-y-10 text-lg leading-9 text-ink/72">
                {post.content.map((section) => (
                  <section key={section.heading}>
                    <h2 className="font-display text-3xl font-black leading-tight text-ink">{section.heading}</h2>
                    <div className="mt-4 space-y-5">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
              {post.internalLinks.length ? (
                <aside className="mt-10 rounded-[1.5rem] border border-black/8 bg-[#fbfaf7] p-5">
                  <h2 className="font-display text-2xl font-black">İlgili bağlantılar</h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {post.internalLinks.map((link) => (
                      <a key={link.href} href={link.href} className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-bold text-ink transition hover:bg-[#f3f1ec]">
                        {link.label}
                        <ArrowRight size={15} />
                      </a>
                    ))}
                  </div>
                </aside>
              ) : null}
              {relatedPosts.length ? (
                <aside className="mt-10">
                  <h2 className="font-display text-2xl font-black">İlgili yazılar</h2>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {relatedPosts.map((relatedPost) => (
                      <a key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="rounded-[1.2rem] border border-black/8 bg-[#fbfaf7] p-4 font-bold text-ink transition hover:bg-white">
                        {relatedPost.title}
                      </a>
                    ))}
                  </div>
                </aside>
              ) : null}
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}

function NotFoundPage() {
  const { t } = useLanguage();

  return (
    <main className="relative min-h-screen overflow-hidden bg-paper text-ink">
      <Background />
      <Header />
      <section className="relative z-10 flex min-h-[100svh] items-center px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-black/8 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-ink/58 shadow-soft">
            404
          </p>
          <h1 className="mt-6 font-display text-[clamp(3rem,8vw,7rem)] font-black leading-[0.9]">
            Sayfa bulunamadı
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-ink/62">
            Aradığın blog yazısı yayınlanmamış, taşınmış ya da kaldırılmış olabilir.
          </p>
          <a href="/blog" className="mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-ink px-7 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-black/85">
            {t('backToBlog')}
            <ArrowRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}

function ProductsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-paper text-ink">
      <Background />
      <Header />
      <ProductsHero />
      <ProductsGrid />
      <Footer />
    </main>
  );
}

function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-paper text-ink">
      <Background />
      <Header />
      <ContactHero />
      <ContactForm />
    </main>
  );
}

function DelitPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-paper text-ink">
      <Background />
      <Header />
      <DelitHero />
      <DelitProblem />
      <DelitScreens />
      <DelitHowItWorks />
      <DelitFaq />
      <Footer variant="delit" />
    </main>
  );
}

function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,214,221,0.6),transparent_28%),radial-gradient(circle_at_85%_12%,rgba(214,233,255,0.7),transparent_24%),radial-gradient(circle_at_55%_80%,rgba(223,244,226,0.65),transparent_26%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(17,17,17,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
    </div>
  );
}

function Header() {
  const { language, setLanguage, t } = useLanguage();
  const path = normalizePath(window.location.pathname);
  const logoRef = React.useRef(null);
  const centerNavRef = React.useRef(null);
  const rightNavRef = React.useRef(null);
  const animationTimerRef = React.useRef(null);
  const [compactWidth, setCompactWidth] = React.useState(null);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [isExpanded, setIsExpanded] = React.useState(() => {
    if (typeof window === 'undefined') return false;
    return window.localStorage.getItem('ap-header-expanded') === 'true';
  });
  const navLinks = [
    [t('navHome'), '/'],
    [t('navDelit'), '/del-it'],
    [t('navXox'), '/xox-taktik-arena'],
    [t('navBlog'), '/blog'],
  ];
  const contactLink = [t('navContact'), '/contact'];
  const isActive = (href) => {
    if (href === '/') {
      return path === '/' || path === '/products';
    }

    return path === href || path.startsWith(`${href}/`);
  };
  const toggleExpanded = () => {
    if (animationTimerRef.current) {
      window.clearTimeout(animationTimerRef.current);
    }

    setIsAnimating(true);

    if (isExpanded) {
      setIsClosing(true);
      setIsExpanded(false);
      window.localStorage.setItem('ap-header-expanded', 'false');
      animationTimerRef.current = window.setTimeout(() => {
        setIsAnimating(false);
        setIsClosing(false);
        animationTimerRef.current = null;
      }, 620);
      return;
    }

    setIsClosing(false);
    setIsExpanded(true);
    window.localStorage.setItem('ap-header-expanded', 'true');
    animationTimerRef.current = window.setTimeout(() => {
      setIsAnimating(false);
      animationTimerRef.current = null;
    }, 620);
  };
  const useWideLayout = isExpanded || isClosing;
  const navLinkClass = (href, compact = false) => (
    `whitespace-nowrap rounded-full ${compact ? 'px-3' : 'px-4'} py-2 transition ${isActive(href) ? 'bg-ink font-bold text-white shadow-soft hover:text-white' : 'hover:bg-[#f3f1ec] hover:text-ink'}`
  );

  React.useEffect(() => (
    () => {
      if (animationTimerRef.current) {
        window.clearTimeout(animationTimerRef.current);
      }
    }
  ), []);

  React.useLayoutEffect(() => {
    const measureCompactWidth = () => {
      const logoWidth = logoRef.current?.scrollWidth || logoRef.current?.getBoundingClientRect().width || 0;
      const centerWidth = centerNavRef.current && window.getComputedStyle(centerNavRef.current).display !== 'none'
        ? centerNavRef.current.scrollWidth
        : 0;
      const rightWidth = rightNavRef.current?.scrollWidth || rightNavRef.current?.getBoundingClientRect().width || 0;
      const visibleGroups = [logoWidth, centerWidth, rightWidth].filter(Boolean).length;
      const gap = window.matchMedia('(min-width: 768px)').matches ? 8 : 12;
      const padding = 16;
      const border = 2;
      const measuredWidth = logoWidth + centerWidth + rightWidth + Math.max(0, visibleGroups - 1) * gap + padding + border;
      const maxWidth = window.innerWidth - (window.matchMedia('(min-width: 768px)').matches ? 64 : 40);

      setCompactWidth(Math.ceil(Math.min(measuredWidth, maxWidth)));
    };

    measureCompactWidth();
    window.addEventListener('resize', measureCompactWidth);

    return () => window.removeEventListener('resize', measureCompactWidth);
  }, [language, path]);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-center px-5 sm:px-8">
        <div
          className={`site-nav-card ${isExpanded ? 'site-nav-card-expanded' : ''} ${useWideLayout ? 'md:grid-cols-[1fr_auto_1fr]' : 'md:grid-cols-[auto_auto_auto]'} ${isAnimating ? 'site-nav-card-animating' : ''} pointer-events-auto grid grid-cols-[auto_auto] items-center justify-center gap-3 rounded-full border border-black/8 bg-white/78 p-2 shadow-soft backdrop-blur-xl md:gap-2`}
          style={compactWidth ? { '--nav-compact-width': `${compactWidth}px` } : undefined}
        >
          <a ref={logoRef} href="/" className="flex items-center md:justify-self-start" aria-label="AP Design anasayfa">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-black/8 bg-white shadow-soft">
              <img src="/ap-logo.svg" alt="AP Design logosu" className="h-8 w-8 object-contain" />
            </span>
          </a>
          <div ref={centerNavRef} className="hidden items-center justify-center gap-2 text-sm font-medium text-ink/65 md:flex">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className={navLinkClass(href)}
              >
                {label}
              </a>
            ))}
          </div>
          <div ref={rightNavRef} className="flex items-center justify-end gap-1 md:gap-2">
            <a href={contactLink[1]} className={`hidden text-sm font-medium md:inline-flex ${navLinkClass(contactLink[1], true)}`}>
              {contactLink[0]}
            </a>
            <div className="flex items-center rounded-full border border-black/8 bg-white/55 p-1" aria-label={t('languageLabel')}>
              {[
                ['tr', '🇹🇷', 'Türkçe'],
                ['en', '🇬🇧', 'English'],
              ].map(([code, flag, label]) => (
                <button
                  key={code}
                  type="button"
                  className={`grid h-8 w-8 place-items-center rounded-full text-base transition ${language === code ? 'bg-ink shadow-soft' : 'hover:bg-[#f3f1ec]'}`}
                  aria-label={label}
                  aria-pressed={language === code}
                  onClick={() => setLanguage(code)}
                >
                  <span aria-hidden="true">{flag}</span>
                </button>
              ))}
            </div>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full text-ink/60 transition hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-electric/50 active:bg-transparent"
              aria-label={isExpanded ? t('collapseMenu') : t('expandMenu')}
              aria-pressed={isExpanded}
              onClick={toggleExpanded}
            >
              <ChevronRight className={`transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isExpanded ? 'rotate-180' : ''}`} size={18} />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

function HomeHero() {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 flex min-h-[100svh] items-center overflow-hidden px-5 pb-10 pt-24 sm:px-8 sm:pb-12 lg:pb-14 lg:pt-28">
      <HomeHeroFloaters />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-6 inline-flex rounded-full border border-black/8 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-ink/65 shadow-soft">
            {t('studioTag')}
          </p>
          <h1 className="font-display text-[clamp(2.8rem,6vw,6.8rem)] font-black leading-[0.88] tracking-tight">
            <span className="block whitespace-nowrap">{t('heroLine1')}</span>
            <span className="block bg-gradient-to-r from-[#00c8ff] via-[#3f7cff] to-[#9b35ff] bg-clip-text text-transparent">
              {t('heroLine2')}
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-ink/66 sm:text-xl">
            {t('heroText')}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#uygulamalar"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-ink px-7 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-black/85"
            >
              {t('viewApps')}
              <ArrowRight size={18} />
            </a>
            <a
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-full border border-black/8 bg-white px-7 text-sm font-bold text-ink transition hover:-translate-y-1 hover:bg-[#fbfaf7]"
            >
              {t('contact')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeHeroFloaters() {
  const floaters = [
    { src: product.logo, alt: 'Del-it uygulama ikonu', className: 'left-[8%] top-[14%] h-16 w-16 sm:h-20 sm:w-20', delay: '0s', fit: 'contain' },
    { src: xoxProduct.logo, alt: 'XOX Taktik Arena uygulama ikonu', className: 'right-[9%] top-[18%] h-16 w-16 sm:h-20 sm:w-20', delay: '-1.8s', fit: 'contain' },
    { src: product.logo, alt: 'Del-it uygulama ikonu', className: 'left-[18%] bottom-[14%] h-14 w-14 sm:h-[4.5rem] sm:w-[4.5rem]', delay: '-3.2s', fit: 'contain' },
    { src: xoxProduct.logo, alt: 'XOX Taktik Arena uygulama ikonu', className: 'right-[18%] bottom-[16%] h-14 w-14 sm:h-16 sm:w-16', delay: '-0.9s', fit: 'contain' },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-0 opacity-75 [mask-image:radial-gradient(circle_at_center,transparent_0%,black_58%)]">
      {floaters.map((item, index) => (
        <span
          key={`${item.alt}-${index}`}
          className={`home-floater absolute overflow-hidden rounded-[1.1rem] border border-black/8 bg-white/85 p-2 shadow-soft backdrop-blur ${item.className}`}
          style={{ animationDelay: item.delay }}
        >
          <span className="relative block aspect-square h-full w-full overflow-hidden rounded-[0.85rem] bg-white">
            <img
              src={item.src}
              alt={item.alt}
              className={`absolute inset-0 h-full w-full ${item.fit === 'cover' ? 'object-cover' : 'object-contain'}`}
            />
          </span>
        </span>
      ))}
    </div>
  );
}

function HomeApplications() {
  const { t } = useLanguage();

  return (
    <section id="uygulamalar" className="relative z-10 scroll-mt-28 px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="scroll-reveal mx-auto mb-8 max-w-3xl text-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-ink/45">{t('appsTag')}</p>
            <h2 className="font-display text-4xl font-black leading-none sm:text-5xl">
              {t('appsTitlePrefix')} <span className="bg-gradient-to-r from-[#00c8ff] via-[#3f7cff] to-[#9b35ff] bg-clip-text text-transparent">{t('appsTitleAccent')}</span> {t('appsTitleSuffix')}
            </h2>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-ink/62">
            {t('appsDescription')}
          </p>
        </div>
        <HomeApplicationShowcase />
      </div>
    </section>
  );
}

function HomeApplicationShowcase() {
  const { t } = useLanguage();
  const slides = [
    { id: 'delit', label: 'Del-It', content: <HomeDelitOverview /> },
    { id: 'xox', label: 'XOX', content: <HomeXoxOverview /> },
  ];
  const duration = 3000;
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const timerRef = React.useRef(null);
  const startedAtRef = React.useRef(0);
  const remainingRef = React.useRef(duration);

  React.useEffect(() => {
    window.clearTimeout(timerRef.current);

    if (!isPaused) {
      startedAtRef.current = Date.now();
      timerRef.current = window.setTimeout(() => {
        remainingRef.current = duration;
        setActiveIndex((current) => (current + 1) % slides.length);
      }, remainingRef.current);
    }

    return () => window.clearTimeout(timerRef.current);
  }, [activeIndex, isPaused, slides.length]);

  const pauseCarousel = () => {
    if (isPaused) return;
    window.clearTimeout(timerRef.current);
    remainingRef.current = Math.max(0, remainingRef.current - (Date.now() - startedAtRef.current));
    setIsPaused(true);
  };

  const resumeCarousel = () => {
    if (!isPaused) return;
    setIsPaused(false);
  };

  const selectSlide = (index) => {
    remainingRef.current = duration;
    setActiveIndex(index);
  };

  return (
    <div
      className="mx-auto max-w-6xl"
      onMouseEnter={pauseCarousel}
      onMouseLeave={resumeCarousel}
      onFocus={pauseCarousel}
      onBlur={resumeCarousel}
      aria-roledescription="carousel"
      aria-label={t('carouselLabel')}
    >
      <div className="home-app-carousel-slide" key={slides[activeIndex].id}>
        {slides[activeIndex].content}
      </div>
      <div className="mt-5 flex items-center justify-center gap-2" aria-label={t('carouselLabel')}>
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === index ? 'w-9 bg-ink' : 'w-2.5 bg-ink/18 hover:bg-ink/35'}`}
            aria-label={`${slide.label} ${t('showSlide')}`}
            aria-current={activeIndex === index}
            onClick={() => selectSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}

function HomeDelitOverview() {
  const { t } = useLanguage();
  const featureItems = [
    [t('quickClean'), Hand, t('quickCleanText')],
    [t('safeTrash'), Trash2, t('safeTrashText')],
    [t('mediaVault'), LockKeyhole, t('mediaVaultText')],
    [t('contactsCollage'), LayoutTemplate, t('contactsCollageText')],
  ];
  return (
    <article className="overflow-hidden rounded-[2.25rem] border border-black/8 bg-white shadow-soft">
      <div className="grid gap-8 bg-gradient-to-br from-[#fff7fb] via-white to-[#eee9ff] p-5 sm:p-7 lg:grid-cols-[1fr_0.92fr] lg:p-8">
        <div className="flex flex-col">
          <div className="flex items-center gap-3">
            <img src={product.logo} alt="Del-It uygulama ikonu" className="h-14 w-14 rounded-[1rem] object-cover shadow-soft" loading="lazy" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-ink/45">Del-It</p>
              <p className="text-sm font-semibold text-ink/58">{t('delitSubtitle')}</p>
            </div>
          </div>
          <h3 className="mt-7 font-display text-[clamp(2.15rem,5vw,4.8rem)] font-black leading-[0.92] tracking-tight">
            {t('delitTitle1')}
            <span className="block bg-gradient-to-r from-[#ef55b8] via-[#9b52f5] to-[#4388ff] bg-clip-text text-transparent">
              {t('delitTitle2')}
            </span>
          </h3>
          <p className="mt-5 max-w-2xl text-base leading-7 text-ink/64">
            {t('delitDescription')}
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {featureItems.map(([label, Icon, text]) => (
              <div key={label} className="rounded-[1.25rem] border border-white/70 bg-white/70 p-4 shadow-[0_18px_42px_rgba(52,43,92,0.08)] backdrop-blur">
                <div className="mb-3 grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-[#f0e7ff] to-[#e5f4ff] text-[#7b45f3]">
                  <Icon size={21} />
                </div>
                <p className="font-display text-lg font-black leading-tight">{label}</p>
                <p className="mt-1 text-sm leading-5 text-ink/58">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-full min-h-[32rem] overflow-hidden rounded-[1.75rem] border border-white/70 bg-[#eee9ff] shadow-[0_24px_64px_rgba(80,64,150,0.12)] backdrop-blur">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_92%,rgba(123,98,255,0.22),transparent_32%),radial-gradient(circle_at_84%_88%,rgba(255,95,223,0.18),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.35),rgba(238,233,255,0.92)_46%,rgba(255,231,250,0.82))]" />
          <div className="pointer-events-none absolute inset-x-10 bottom-0 h-52 rounded-t-full bg-white/32 blur-3xl" />
          <div className="relative flex h-full min-h-[32rem] items-end justify-center overflow-hidden px-4 pt-6">
            <div className="absolute inset-x-5 top-7 z-20 mx-auto max-w-[27rem] rounded-[1.45rem] border border-white/70 bg-white/72 p-4 shadow-[0_20px_48px_rgba(54,45,105,0.14)] backdrop-blur-xl sm:top-8 sm:p-5">
              <div className="flex items-start gap-3">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#f0e7ff] to-[#dff4ff] text-[#7b45f3]">
                  <ShieldCheck size={24} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-ink/42">{t('onDeviceTag')}</p>
                  <h4 className="mt-1 font-display text-xl font-black leading-tight text-ink">{t('onDeviceTitle')}</h4>
                  <p className="mt-2 text-sm leading-6 text-ink/62">
                    {t('onDeviceText')}
                  </p>
                </div>
              </div>
              <div className="mt-4 grid gap-2 text-xs font-bold text-ink/58 sm:grid-cols-3">
                <span className="rounded-full bg-white/70 px-3 py-2 text-center">{t('noAccount')}</span>
                <span className="rounded-full bg-white/70 px-3 py-2 text-center">{t('finalDecision')}</span>
                <span className="rounded-full bg-white/70 px-3 py-2 text-center">{t('localProcess')}</span>
              </div>
            </div>
            <img
              src={delitPhoneTr}
              alt="Del-It ana ekranı"
              className="relative z-10 mb-[-6.5rem] h-auto max-h-[35rem] w-[min(84vw,31rem)] object-contain object-bottom drop-shadow-[0_28px_55px_rgba(44,36,88,0.20)]"
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 pt-1 sm:flex-row lg:col-span-2">
          <a href="/del-it" className="inline-flex h-14 min-w-44 items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-black/85">
            {t('more')}
            <ChevronRight size={17} />
          </a>
          <a
            href={delitAppStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Del-It uygulamasını App Store’da aç"
            className="inline-flex h-14 min-w-44 items-center justify-center gap-2 rounded-full border border-black/8 bg-white px-6 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-[#f3f1ec]"
          >
            {t('appStore')}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}

function HomeXoxOverview() {
  const { t } = useLanguage();
  const xoxFeatures = [
    [t('threeStone'), MoveHorizontal, t('threeStoneText')],
    [t('noDraw'), Check, t('noDrawText')],
    [t('shortRounds'), Sparkles, t('shortRoundsText')],
    [t('tacticalTempo'), BarChart3, t('tacticalTempoText')],
  ];
  const board = ['X', '', 'O', '', 'X', '', 'O', '', 'X'];

  return (
    <article className="h-full overflow-hidden rounded-[2.25rem] border border-black/8 bg-white shadow-soft">
      <div className="grid h-full gap-8 bg-gradient-to-br from-[#eef7ff] via-white to-[#ffeef8] p-5 sm:p-7 lg:grid-cols-[0.95fr_1fr] lg:p-8">
        <div className="order-2 flex h-full flex-col lg:order-1">
          <div className="flex items-center gap-3">
            <img src={xoxProduct.logo} alt="XOX Taktik Arena uygulama ikonu" className="h-14 w-14 rounded-[1rem] object-cover shadow-soft" loading="lazy" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-ink/45">XOX Taktik Arena</p>
              <p className="text-sm font-semibold text-ink/58">{t('xoxSubtitle')}</p>
            </div>
          </div>
          <h3 className="mt-7 font-display text-[clamp(2.15rem,5vw,4.6rem)] font-black leading-[0.92] tracking-tight">
            {t('xoxTitle1')}
            <span className="block bg-gradient-to-r from-[#0ea5e9] via-[#8b5cf6] to-[#f43f8f] bg-clip-text text-transparent">
              {t('xoxTitle2')}
            </span>
          </h3>
          <p className="mt-5 max-w-2xl text-base leading-7 text-ink/64">
            {t('xoxDescription')}
          </p>
          <div className="mt-6 grid gap-3">
            {xoxFeatures.map(([label, Icon, text]) => (
              <div key={label} className="flex items-start gap-3 rounded-[1.25rem] border border-white/70 bg-white/72 p-4 shadow-[0_18px_42px_rgba(52,43,92,0.08)] backdrop-blur">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#e3f5ff] to-[#ffe3f4] text-[#7b45f3]">
                  <Icon size={21} />
                </span>
                <div>
                  <p className="font-display text-lg font-black leading-tight">{label}</p>
                  <p className="mt-1 text-sm leading-5 text-ink/58">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 relative min-h-[34rem] overflow-hidden rounded-[1.75rem] border border-white/70 bg-[#101426] shadow-[0_24px_64px_rgba(38,32,82,0.16)] lg:order-2 lg:min-h-full">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_24%_22%,rgba(14,165,233,0.34),transparent_34%),radial-gradient(circle_at_78%_76%,rgba(244,63,143,0.34),transparent_34%),linear-gradient(135deg,#070a18,#141c3a_48%,#351044)]" />
          <div className="pointer-events-none absolute inset-8 rounded-[2rem] border border-white/10" />
          <div className="relative flex min-h-[34rem] h-full items-center justify-center p-6">
            <div className="absolute left-6 top-6 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/70 backdrop-blur">
              {t('threeStone')}
            </div>
            <div className="absolute bottom-6 right-6 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white/70 backdrop-blur">
              {t('noDraw')}
            </div>
            <div className="grid w-[min(72vw,20rem)] grid-cols-3 gap-3 rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur">
              {board.map((mark, index) => (
                <div key={index} className="grid aspect-square place-items-center rounded-[1.1rem] border border-white/12 bg-white/10 text-5xl font-black text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
                  <span className={mark === 'X' ? 'bg-gradient-to-r from-sky-300 to-cyan-100 bg-clip-text text-transparent' : 'bg-gradient-to-r from-fuchsia-300 to-rose-200 bg-clip-text text-transparent'}>
                    {mark}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="order-3 flex flex-col items-center justify-center gap-3 pt-1 sm:flex-row lg:col-span-2">
          <a href="/xox-taktik-arena" className="inline-flex h-14 min-w-44 items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-black/85">
            {t('more')}
            <ChevronRight size={17} />
          </a>
          <a
            href="https://apps.apple.com/us/app/xox-arena/id6783572878"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="XOX Taktik Arena uygulamasını App Store’da aç"
            className="inline-flex h-14 min-w-44 items-center justify-center gap-2 rounded-full border border-black/8 bg-white px-6 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-[#f3f1ec]"
          >
            {t('appStore')}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}

function HomeAppFeatureCard({ href, logo, logoAlt, title, status, description, appStoreUrl, background, delay = '0ms' }) {
  return (
    <article className="scroll-reveal group flex h-full flex-col overflow-hidden rounded-[2rem] border border-black/8 bg-white p-4 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-glow" style={{ transitionDelay: delay }}>
      <div className={`grid min-h-[14rem] place-items-center rounded-[1.5rem] bg-gradient-to-br ${background} p-8`}>
        <img src={logo} alt={logoAlt} className="h-28 w-28 object-contain transition duration-300 group-hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col px-2 pb-2 pt-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-3xl font-black leading-none">{title}</h3>
          <span className="shrink-0 rounded-full border border-black/8 bg-[#fbfaf7] px-3 py-1.5 text-xs font-bold text-ink/55">
            {status}
          </span>
        </div>
        <p className="mt-4 min-h-[5.25rem] text-sm leading-6 text-ink/62">{description}</p>
        <div className="mt-auto grid gap-3 pt-6">
          <a href={href} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-[#fbfaf7]">
            Daha fazla
            <ChevronRight size={17} />
          </a>
          {appStoreUrl ? (
            <a
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} uygulamasını App Store’da aç`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-black px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-black/85"
            >
              App Store
              <ArrowRight size={16} />
            </a>
          ) : (
            <span className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/8 bg-[#fbfaf7] px-5 py-3 text-sm font-bold text-ink/55">
              Yakında
              <Sparkles size={16} />
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

function ProductsHero() {
  return (
    <section className="relative z-10 px-5 pb-6 pt-12 sm:px-8 lg:pt-14">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-ink/45">Uygulamalar</p>
        <h1 className="font-display text-[clamp(2.8rem,5vw,5rem)] font-black leading-[0.95]">
          Uygulamalar
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-ink/62">
          Del-it ve XOX Taktik Arena burada. Kartlardan uygulamaların iç sayfalarına geçebilirsin.
        </p>
      </div>
    </section>
  );
}

function ProductsGrid() {
  return (
    <section className="relative z-10 px-5 py-8 sm:px-8 lg:pb-12">
      <div className="mx-auto max-w-7xl">
        <HomeApplicationShowcase />
      </div>
    </section>
  );
}

function ContactHero() {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 px-5 pb-8 pt-12 sm:px-8 lg:pt-16">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-ink/45">{t('contact')}</p>
        <h1 className="font-display text-[clamp(3rem,7vw,7rem)] font-black leading-[0.92]">
          {t('contactTitle')}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/62">
          {t('contactText')}
        </p>
      </div>
    </section>
  );
}

function ContactForm() {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-black/8 bg-white p-7 shadow-soft sm:p-10">
        <form className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label={t('fullName')} />
            <Field label={t('email')} type="email" />
          </div>
          <Field label={t('subject')} />
          <label className="grid gap-2 text-sm font-semibold text-ink/70">
            <span>{t('message')}</span>
            <textarea
              rows="7"
              className="rounded-[1.2rem] border border-black/8 bg-[#fbfaf7] px-4 py-4 text-base text-ink outline-none transition placeholder:text-ink/28 focus:border-black/20"
              placeholder={t('messagePlaceholder')}
            />
          </label>
          <button
            type="submit"
            className="mt-2 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-ink px-7 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-black/85"
          >
            {t('send')}
            <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}

function DelitPageNav() {
  const links = [
    ['Özellikler', '#features'],
    ['Nasıl Çalışır?', '#how-it-works'],
    ['Gizlilik', '#privacy'],
    ['SSS', '#faq'],
  ];

  return (
    <nav className="sticky top-20 z-40 border-b border-black/8 bg-[#faf8f5]/80 px-5 py-3 backdrop-blur-2xl sm:px-8" aria-label="Del-It sayfa navigasyonu">
      <div className="mx-auto flex max-w-7xl items-center gap-2 overflow-x-auto">
        {links.map(([label, href]) => (
          <a key={href} href={href} className="shrink-0 rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-bold text-ink/65 shadow-soft transition hover:-translate-y-0.5 hover:text-ink focus:outline-none focus:ring-2 focus:ring-electric/60">
            {label}
          </a>
        ))}
        <a href={delitAppStoreUrl} target="_blank" rel="noopener noreferrer" className="ml-auto inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-black/85 focus:outline-none focus:ring-2 focus:ring-electric/60" aria-label="Del-It uygulamasını App Store’da aç">
          App Store’da İndir
          <ExternalLink size={15} />
        </a>
      </div>
    </nav>
  );
}

function DelitHero() {
  const { t } = useLanguage();
  const heroCards = [
    [t('photoClean'), Images, 'left-1/2 top-8 -translate-x-[300px]', 'h-[4.6rem] w-[4.6rem]', 'rgba(186,230,253,0.46)', '#0ea5e9', '-6deg', '0s', 'left', '4.6rem', '15rem'],
    [t('videoClean'), Video, 'left-1/2 top-36 -translate-x-[390px]', 'h-20 w-20', 'rgba(221,214,254,0.48)', '#8b5cf6', '3deg', '-1.1s', 'left', '5rem', '14rem'],
    [t('privateVault'), LockKeyhole, 'left-1/2 top-64 -translate-x-[315px]', 'h-[4.35rem] w-[4.35rem]', 'rgba(254,215,170,0.46)', '#f97316', '-4deg', '-2.2s', 'left', '4.35rem', '11.5rem'],
    [t('trashBox'), Trash2, 'left-1/2 top-8 translate-x-[225px]', 'h-[4.8rem] w-[4.8rem]', 'rgba(254,205,211,0.48)', '#f43f5e', '5deg', '-0.6s', 'right', '4.8rem', '11.5rem'],
    [t('contactClean'), UsersRound, 'left-1/2 top-36 translate-x-[315px]', 'h-[5.1rem] w-[5.1rem]', 'rgba(167,243,208,0.46)', '#10b981', '-3deg', '-1.7s', 'right', '5.1rem', '15rem'],
    [t('collageCreate'), LayoutTemplate, 'left-1/2 top-64 translate-x-[240px]', 'h-[4.5rem] w-[4.5rem]', 'rgba(165,243,252,0.46)', '#06b6d4', '4deg', '-2.8s', 'right', '4.5rem', '14rem'],
  ];

  return (
    <section className="relative z-10 flex min-h-[100svh] overflow-hidden bg-[#eee9ff] px-5 pb-0 pt-24 sm:px-8 sm:pt-24 lg:pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_100%,rgba(123,98,255,0.22),transparent_32%),radial-gradient(circle_at_82%_90%,rgba(255,95,223,0.18),transparent_28%)]" />
      <div className="scroll-reveal relative z-10 mx-auto flex min-h-[calc(100svh-6rem)] w-full max-w-5xl flex-col items-center text-center">
        <span className="grid h-[4.5rem] w-[4.5rem] place-items-center rounded-[1.1rem] bg-white shadow-[0_14px_36px_rgba(80,64,150,0.12)] sm:h-20 sm:w-20">
          <img src={product.logo} alt="Del-It uygulama ikonu" className="h-12 w-12 rounded-[0.85rem] object-cover sm:h-14 sm:w-14" />
        </span>
        <h1 className="mt-5 font-display text-[clamp(2.45rem,7.2vw,6.35rem)] font-black leading-[0.95] tracking-tight text-black">
          <span className="block">{t('delitHeroTitle1')}</span>
          <span className="block">
            <span className="bg-gradient-to-r from-[#ef55b8] via-[#9b52f5] to-[#4388ff] bg-clip-text text-transparent">{t('delitHeroAccent')}</span>{' '}
            {t('delitHeroTitle2')}
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-sm font-normal leading-6 text-[#6f6a78] sm:text-base sm:leading-7">
          {t('delitHeroText1')}
          <span className="block">{t('delitHeroText2')}</span>
        </p>
        <div className="relative mt-auto flex w-full max-w-5xl justify-center overflow-visible pt-6 sm:pt-8">
          {heroCards.map(([label, Icon, position, size, background, color, rotate, delay, side, base, hoverWidth]) => (
            <div
              key={label}
              className={`absolute z-30 hidden md:block ${position}`}
            >
              <div className="delit-hero-card-float" style={{ '--hero-rotate': rotate, '--hero-delay': delay }}>
                <div
                  className={`delit-hero-card delit-hero-card-${side} flex items-center justify-center rounded-[1.35rem] border border-white/55 px-5 shadow-[0_18px_42px_rgba(60,44,125,0.12)] backdrop-blur-xl ${size}`}
                  style={{ background, color, '--hero-base': base, '--hero-hover': hoverWidth }}
                  aria-label={label}
                >
                  <Icon className="shrink-0" size={30} strokeWidth={2.25} aria-hidden="true" />
                  <span className="delit-hero-card-label">{label}</span>
                </div>
              </div>
            </div>
          ))}
          <div className="relative z-0 w-[min(270px,68vw)] sm:w-[min(360px,52vw)] lg:w-[min(470px,34vw)]">
            <img
              src={delitPhoneTr}
              alt="Del-It ana ekranını gösteren iPhone"
              className="delit-phone-image mx-auto h-auto max-h-[40svh] w-auto max-w-full drop-shadow-[0_24px_54px_rgba(40,28,90,0.18)] sm:max-h-[46svh] lg:max-h-[52svh]"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function DelitProblem() {
  const { t } = useLanguage();
  const features = [
    [t('quickClean'), t('quickCleanText'), Hand, 'rgba(186,230,253,0.7)', '#0ea5e9'],
    [t('safeTrash'), t('safeTrashText'), Trash2, 'rgba(254,205,211,0.72)', '#f43f5e'],
    [t('galleryView'), t('galleryViewText'), Images, 'rgba(221,214,254,0.72)', '#8b5cf6'],
    [t('contactClean'), t('contactClean'), UsersRound, 'rgba(191,219,254,0.72)', '#3b82f6'],
    [t('mediaVault'), t('mediaVaultText'), LockKeyhole, 'rgba(245,208,254,0.72)', '#d946ef'],
    [t('collageCreate'), t('contactsCollageText'), LayoutTemplate, 'rgba(251,207,232,0.72)', '#ec4899'],
  ];

  return (
    <section className="relative z-10 bg-white px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="scroll-reveal mx-auto max-w-4xl text-center">
          <p className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-violet-600">
            {t('features')}
          </p>
          <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.6rem)] font-black leading-[1.08] tracking-tight text-ink">
            <span className="block">{t('delitFeatureTitle1')}</span>
            <span className="block bg-gradient-to-r from-[#ef55b8] via-[#9b52f5] to-[#4388ff] bg-clip-text text-transparent">
              {t('delitFeatureTitle2')}
            </span>
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {features.map(([title, description, Icon, iconBg, iconColor], index) => (
            <article key={title} className={`scroll-reveal rounded-[1.55rem] border bg-white p-6 shadow-[0_18px_52px_rgba(31,38,70,0.07)] transition hover:-translate-y-1 hover:shadow-[0_22px_64px_rgba(90,64,160,0.12)] ${index === 0 ? 'border-sky-200' : 'border-black/8'}`}>
              <div className="grid h-12 w-12 place-items-center rounded-[1rem]" style={{ backgroundColor: iconBg, color: iconColor }}>
                <Icon size={21} strokeWidth={2.35} />
              </div>
              <h3 className="mt-7 font-display text-xl font-black leading-tight text-ink sm:text-2xl">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/58 sm:text-base">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DelitHowItWorks() {
  const { t } = useLanguage();
  const cards = [
    [t('deviceProcessing'), t('deviceProcessingText'), '/del-it-privacy/device-processing-white.png', 'from-sky-100 via-white to-violet-100'],
    [t('noUpload'), t('noUploadText'), '/del-it-privacy/no-upload-white.png', 'from-violet-100 via-white to-fuchsia-100'],
    [t('transparentPermissions'), t('transparentPermissionsText'), '/del-it-privacy/permissions-white.png', 'from-rose-100 via-white to-sky-100'],
    [t('fullControl'), t('fullControlText'), '/del-it-privacy/control-white.png', 'from-emerald-100 via-white to-sky-100'],
  ];

  return (
    <section id="security-privacy" className="relative z-10 overflow-hidden bg-[#eee9ff] px-5 py-16 sm:px-8 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_100%,rgba(123,98,255,0.22),transparent_32%),radial-gradient(circle_at_82%_90%,rgba(255,95,223,0.18),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="scroll-reveal mx-auto max-w-4xl text-center">
          <p className="inline-flex rounded-full border border-white/65 bg-white/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-violet-600 shadow-soft backdrop-blur-xl">
            {t('securityPrivacy')}
          </p>
          <h2 className="mt-5 font-display text-[clamp(2.15rem,4.6vw,4.4rem)] font-black leading-[1.02] tracking-tight text-ink">
            {t('securityTitle')}
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-ink/62 sm:text-lg">
            {t('securityText')}
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {cards.map(([title, description, image, gradient]) => (
            <article key={title} className={`scroll-reveal overflow-hidden rounded-[1.8rem] border border-white/70 bg-white/78 p-5 shadow-[0_22px_70px_rgba(80,64,150,0.1)] backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white ${gradient}`}>
              <div className="grid aspect-square place-items-center rounded-[1.45rem] bg-white shadow-[inset_0_0_0_1px_rgba(17,17,17,0.04)]">
                <img
                  src={image}
                  alt={`${title} illüstrasyonu`}
                  className="h-full w-full rounded-[1.45rem] object-contain p-5"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-6 font-display text-xl font-black leading-tight text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/58">{description}</p>
            </article>
          ))}
        </div>
        <div className="scroll-reveal mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="/del-it/gizlilik-politikasi" className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-bold text-white shadow-soft transition hover:-translate-y-1 hover:bg-black/85 focus:outline-none focus:ring-2 focus:ring-electric/60">
            {t('privacyPolicy')}
            <ArrowRight size={17} />
          </a>
          <a href="/del-it/kullanim-sartlari" className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-black/8 bg-white/78 px-6 text-sm font-bold text-ink shadow-soft backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white focus:outline-none focus:ring-2 focus:ring-electric/60">
            {t('terms')}
            <ArrowRight size={17} />
          </a>
        </div>
        <div className="scroll-reveal mt-12 overflow-hidden rounded-[2rem] border border-white/70 bg-white/72 p-5 shadow-[0_26px_80px_rgba(80,64,150,0.12)] backdrop-blur-xl">
          <div className="grid gap-6 rounded-[1.6rem] bg-white/70 p-6 text-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.75)] sm:p-10 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:text-left">
            <div className="mx-auto grid h-24 w-24 place-items-center rounded-[1.5rem] bg-white shadow-soft lg:mx-0">
              <img src={product.logo} alt="Del-It uygulama ikonu" className="h-20 w-20 rounded-[1.25rem] object-cover" loading="lazy" />
            </div>
            <div>
              <h2 className="font-display text-4xl font-black leading-tight sm:text-5xl">
                {t('finalCtaTitle')}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-ink/65 sm:text-lg">
                {t('finalCtaText')}
              </p>
            </div>
            <a href={delitAppStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-ink px-7 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-black/85 focus:outline-none focus:ring-2 focus:ring-electric/60" aria-label="Del-It uygulamasını App Store’dan indir">
              {t('appStoreDownload')}
              <Download size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function DelitFeatures() {
  const features = [
    ['Hızlı Temizlik', 'Fotoğraf ve videolarını kaydırarak hızlıca gözden geçir. Gereksizleri ayırırken önemli anılarını koru.', MoveHorizontal, 'lg:col-span-2', 'from-sky-100 via-white to-violet-100', 'bg-sky-500'],
    ['Güvenli Çöp Kutusu', 'Sola kaydırdığın öğeler hemen silinmez. Son kararını vermeden önce hepsini yeniden kontrol edebilirsin.', Trash2, '', 'from-rose-100 via-white to-violet-100', 'bg-rose-500'],
    ['Galeri Görünümü', 'Fotoğraf ve videolarını düzenli bir görünümde incele ve ihtiyacın olan içeriklere daha kolay ulaş.', Images, '', 'from-white via-sky-50 to-white', 'bg-violet-500'],
    ['Temizlik İstatistikleri', 'Bugün ve toplamda kaç öğe temizlediğini, ne kadar depolama alanı kazandığını takip et.', BarChart3, 'lg:col-span-2', 'from-violet-100 via-white to-rose-100', 'bg-ink'],
  ];

  return (
    <section id="features" className="relative z-10 scroll-mt-36 px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Temel özellikler" title="Galerini kendi hızında düzenle." />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {features.map(([title, description, Icon, className, gradient, iconBg]) => (
            <article key={title} className={`scroll-reveal rounded-[1.7rem] border border-black/8 bg-gradient-to-br ${gradient} p-6 shadow-soft ${className}`}>
              <div className={`grid h-12 w-12 place-items-center rounded-2xl ${iconBg} text-white shadow-soft`}>
                <Icon size={22} />
              </div>
              <h3 className="mt-8 font-display text-3xl font-black leading-tight">{title}</h3>
              <p className="mt-3 max-w-2xl text-base leading-7 text-ink/64">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DelitMoreFeatures() {
  const cards = [
    ['Medya Kasası', 'Özel fotoğraf ve videolarını cihazında tutulan, Face ID ile korunabilen ayrı bir alanda sakla.', 'Kasa içerikleri sunucuya yüklenmez. Uygulama silinirse kasadaki içerikler kaybolabilir.', LockKeyhole, 'from-violet-100 via-white to-fuchsia-100', 'text-violet-600'],
    ['Rehber Temizliği', 'Yinelenen veya düzenlenmesi gereken kişileri incele, rehberindeki karmaşayı kendi onayınla düzenle.', 'Rehber işlemleri kullanıcının açık onayıyla gerçekleştirilir.', UsersRound, 'from-sky-100 via-white to-blue-100', 'text-sky-600'],
    ['Kolaj', 'Fotoğraflarını farklı şablonlarla bir araya getir, kişiselleştir ve galerine kaydet.', 'Oluşturduğun kolajı galerine kaydedebilirsin.', LayoutTemplate, 'from-rose-100 via-white to-orange-100', 'text-rose-500'],
  ];

  return (
    <section className="relative z-10 px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionIntro eyebrow="Daha fazlası" title="Galerinden fazlasını düzenle." />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {cards.map(([title, description, note, Icon, gradient, iconColor]) => (
            <article key={title} className={`scroll-reveal overflow-hidden rounded-[1.7rem] border border-black/8 bg-gradient-to-br ${gradient} p-6 shadow-soft`}>
              <div className={`grid h-12 w-12 place-items-center rounded-2xl border border-black/8 bg-white ${iconColor}`}>
                <Icon size={24} />
              </div>
              <h3 className="mt-8 font-display text-3xl font-black leading-tight">{title}</h3>
              <p className="mt-3 text-base leading-7 text-ink/66">{description}</p>
              <p className="mt-5 rounded-[1.1rem] border border-black/8 bg-white/72 px-4 py-3 text-sm font-semibold leading-6 text-ink/58">
                {note}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DelitPrivacy() {
  const points = [
    'Medya içerikleri sunucuya yüklenmez',
    'Hesap oluşturmak zorunlu değildir',
    'Kalıcı silme için son onay gerekir',
    'Face ID doğrulaması iOS tarafından gerçekleştirilir',
  ];

  return (
    <section id="privacy" className="relative z-10 scroll-mt-36 px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="scroll-reveal overflow-hidden rounded-[2rem] border border-black/8 bg-white p-5 shadow-glow">
          <div className="grid gap-8 rounded-[1.6rem] bg-gradient-to-br from-sky-100 via-white to-violet-100 p-6 sm:p-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-ink/45">Gizlilik önce gelir</p>
              <h2 className="font-display text-4xl font-black leading-none sm:text-6xl">
                Fotoğrafların sana ait. Öyle de kalır.
              </h2>
              <p className="mt-5 text-base leading-8 text-ink/66 sm:text-lg">
                Del-It’in temel işlemleri cihazında gerçekleşir. Fotoğraf, video ve rehber içeriklerin Del-It
                sunucularına yüklenmez. Ne temizleyeceğine ve hangi izinleri vereceğine yalnızca sen karar verirsin.
              </p>
              <a href="/del-it/gizlilik-politikasi" className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full border border-black/8 bg-white px-6 text-sm font-bold text-ink transition hover:-translate-y-1 hover:bg-[#fbfaf7] focus:outline-none focus:ring-2 focus:ring-electric/60">
                Gizlilik Politikası
                <ArrowRight size={17} />
              </a>
            </div>
            <div className="grid gap-3">
              {points.map((point) => (
                <div key={point} className="flex items-center gap-3 rounded-[1.2rem] border border-black/8 bg-white/80 px-4 py-4 text-sm font-bold text-ink/70 shadow-soft">
                  <ShieldCheck size={19} className="shrink-0 text-violet-500" />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DelitPlus() {
  const benefits = ['Reklamsız kullanım', 'Sınırsız temizlik hakkı', 'Gelişmiş galeri filtreleri'];

  return (
    <section className="relative z-10 px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="scroll-reveal grid gap-6 overflow-hidden rounded-[1.8rem] border border-black/8 bg-gradient-to-br from-violet-100 via-white to-sky-100 p-6 shadow-soft sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-ink/45">Del-It Plus</p>
            <h2 className="font-display text-4xl font-black leading-tight sm:text-5xl">Daha özgür bir Del-It deneyimi.</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-ink/64">
              Daha geniş kullanım hakları ve reklamsız bir deneyimle galerini kesintisiz düzenle.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {benefits.map((benefit) => (
                <span key={benefit} className="inline-flex items-center gap-2 rounded-full border border-black/8 bg-[#fbfaf7] px-4 py-2 text-sm font-bold text-ink/65">
                  <Check size={15} className="text-violet-500" />
                  {benefit}
                </span>
              ))}
            </div>
          </div>
          <a href={delitAppStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-ink px-7 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-black/85 focus:outline-none focus:ring-2 focus:ring-electric/60" aria-label="Del-It uygulamasını App Store’da incele">
            App Store’da İncele
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function DelitScreens() {
  const { t } = useLanguage();
  const screens = [
    [t('trashBox'), '/del-it-screens/cope-at.png'],
    [t('quickClean'), '/del-it-screens/sakla.png'],
    [t('trashBox'), '/del-it-screens/cop-kutusu.png'],
    [t('mediaVault'), '/del-it-screens/kasa.png'],
    [t('contactClean'), '/del-it-screens/takvim.png'],
    [t('collageCreate'), '/del-it-screens/kolaj.png'],
    [t('screens'), '/del-it-screens/istatistik.png'],
  ];
  const marqueeScreens = [...screens, ...screens];

  return (
    <section className="relative z-10 overflow-hidden bg-[#0d0b16] px-5 py-16 text-white sm:px-8 lg:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(139,92,246,0.28),transparent_30%),radial-gradient(circle_at_82%_12%,rgba(236,72,153,0.22),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(14,165,233,0.18),transparent_34%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="scroll-reveal mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-white/72 backdrop-blur-xl">
            {t('screens')}
          </p>
          <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.7rem)] font-black leading-[1.04] tracking-tight">
            {t('screensTitle')}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/58 sm:text-base">
            {t('screensText')}
          </p>
        </div>
      </div>
      <div className="delit-screen-marquee scroll-reveal relative mt-12">
        <div className="delit-screen-track flex w-max gap-5 pr-5">
          {marqueeScreens.map(([title, src], index) => (
            <article key={`${title}-${index}`} className="delit-screen-card group w-[210px] shrink-0 transition duration-300 ease-in-out hover:z-20 sm:w-[240px] lg:w-[270px]">
              <img
                src={src}
                alt={`Del-It ${title} ekranı`}
                className="aspect-[934/1960] w-full object-contain drop-shadow-[0_24px_70px_rgba(0,0,0,0.35)]"
                loading="lazy"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DelitFaq() {
  const { language, t } = useLanguage();
  const faqs = [
    ['Del-It fotoğraflarımı otomatik olarak siliyor mu?', 'Hayır. Hangi fotoğraf veya videonun silineceğine sen karar verirsin. Kalıcı silme işlemi yalnızca son onayından sonra başlatılır.'],
    ['Sola kaydırdığım fotoğraflar hemen silinir mi?', 'Hayır. Sola kaydırdığın öğeler önce Del-It Çöp Kutusu’na eklenir. Buradan geri alabilir veya son kontrolünden sonra silebilirsin.'],
    ['Fotoğraf ve videolarım sunucuya yükleniyor mu?', 'Hayır. Del-It’in temel medya işlemleri cihazında gerçekleşir ve galeri içeriklerin Del-It sunucularına yüklenmez.'],
    ['Medya Kasası nasıl korunuyor?', 'Kasa içerikleri cihazında yerel olarak saklanır. Face ID korumasını etkinleştirdiğinde doğrulama iOS tarafından gerçekleştirilir.'],
    ['Uygulamayı silersem kasadaki içerikler ne olur?', 'Kasa içerikleri cihazda ve uygulamaya bağlı olarak saklandığı için Del-It’i silersen kasadaki içerikler de kaybolabilir. Uygulamayı silmeden önce önemli içeriklerini dışarı aktarmalısın.'],
    ['Rehber temizliği kişilerimi otomatik olarak değiştirir mi?', 'Hayır. Rehberde birleştirme, düzenleme veya silme gibi işlemler kullanıcının açık onayıyla gerçekleştirilir.'],
    ['Del-It ücretsiz mi?', 'Del-It temel özellikleriyle ücretsiz olarak kullanılabilir. Kullanım limitleri ve Del-It Plus avantajları uygulama içinde gösterilir.'],
    ['Del-It için hesap oluşturmam gerekiyor mu?', 'Hayır. Del-It’i kullanmak için zorunlu bir hesap sistemi bulunmaz.'],
  ];
  const enFaqs = [
    ['Does Del-It delete my photos automatically?', 'No. You decide which photo or video should be deleted. Permanent deletion only starts after your final approval.'],
    ['Are photos deleted immediately when I swipe left?', 'No. Items you swipe left are first added to the Del-It Trash. You can restore them or delete them after a final review.'],
    ['Are my photos and videos uploaded to a server?', 'No. Del-It’s core media operations happen on your device and your gallery content is not uploaded to Del-It servers.'],
    ['How is Media Vault protected?', 'Vault content is stored locally on your device. When Face ID protection is enabled, authentication is handled by iOS.'],
    ['What happens to vault content if I delete the app?', 'Vault content is stored locally and tied to the app, so deleting Del-It may also remove vault content. Export important items before deleting the app.'],
    ['Does contact cleaning change my contacts automatically?', 'No. Merge, edit, or delete operations happen only with your explicit approval.'],
    ['Is Del-It free?', 'Del-It can be used with its core features for free. Usage limits and Del-It Plus benefits are shown inside the app.'],
    ['Do I need to create an account for Del-It?', 'No. Del-It does not require an account system.'],
  ];
  const visibleFaqs = language === 'en' ? enFaqs : faqs;

  return (
    <section id="faq" className="relative z-10 scroll-mt-36 bg-white px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="scroll-reveal mx-auto max-w-4xl text-center">
          <p className="inline-flex rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-violet-600">
            {t('faq')}
          </p>
          <h2 className="mt-5 font-display text-[clamp(2rem,4vw,3.6rem)] font-black leading-[1.08] tracking-tight text-ink">
            {t('faqTitle')}
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl gap-4">
          {visibleFaqs.map(([q, a]) => (
            <details key={q} className="group rounded-[1.45rem] border border-black/8 bg-white p-5 shadow-[0_16px_48px_rgba(31,38,70,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_58px_rgba(90,64,160,0.1)]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-black text-ink focus:outline-none focus:ring-2 focus:ring-electric/60 sm:text-xl">
                <span>{q}</span>
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-violet-50 text-violet-600 transition duration-300 group-open:rotate-90">
                  <ChevronRight size={18} />
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-ink/60 sm:text-base">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function DelitLegalLinks({ variant = 'compact' }) {
  const { t } = useLanguage();

  if (variant === 'compact') {
    return (
      <section className="relative z-10 px-5 py-10 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-[1.6rem] border border-black/8 bg-white p-5 shadow-soft">
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/del-it/gizlilik-politikasi"
                className="inline-flex h-12 items-center justify-center rounded-full border border-black/8 bg-white px-5 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-[#fbfaf7]"
              >
                {t('privacyPolicy')}
              </a>
              <a
                href="/del-it/kullanim-sartlari"
                className="inline-flex h-12 items-center justify-center rounded-full border border-black/8 bg-[#fbfaf7] px-5 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-white"
              >
                {t('terms')}
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative z-10 px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[1.6rem] border border-black/8 bg-white p-5 shadow-soft">
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            <p className="text-center text-sm font-semibold text-ink/58 lg:text-left">
              Del-It
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <a href={delitAppStoreUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-black/8 bg-[#fbfaf7] px-4 py-2 text-sm font-bold text-ink transition hover:bg-white">App Store</a>
              <a href="/del-it/gizlilik-politikasi" className="rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-bold text-ink transition hover:bg-[#fbfaf7]">{t('privacyPolicy')}</a>
              <a href="/del-it/kullanim-sartlari" className="rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-bold text-ink transition hover:bg-[#fbfaf7]">{t('terms')}</a>
              <a href="mailto:theapdesign26@gmail.com" className="rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-bold text-ink transition hover:bg-[#fbfaf7]">{t('supportEmail')}</a>
              <a href="/" className="rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-bold text-ink transition hover:bg-[#fbfaf7]">AP Design</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionIntro({ eyebrow, title, description }) {
  return (
    <div className="scroll-reveal max-w-4xl">
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-ink/45">{eyebrow}</p>
      <h2 className="font-display text-4xl font-black leading-none sm:text-6xl">{title}</h2>
      {description && <p className="mt-5 max-w-3xl text-base leading-8 text-ink/62 sm:text-lg">{description}</p>}
    </div>
  );
}

function ScreenshotPlaceholder({ title, note, accent, large = false }) {
  return (
    <div className={`relative mx-auto aspect-[9/16] ${large ? 'max-w-[310px]' : 'w-full'} overflow-hidden rounded-[2rem] border border-black/10 bg-ink p-2 shadow-soft`}>
      <div className={`flex h-full flex-col rounded-[1.55rem] bg-gradient-to-br ${accent} p-4`}>
        <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-ink/18" />
        <div className="flex items-center gap-3 rounded-[1.1rem] border border-black/8 bg-white/78 p-3">
          <img src={product.logo} alt="" className="h-10 w-10 rounded-xl object-cover" loading="lazy" />
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/38">Placeholder</p>
            <p className="font-display text-lg font-black leading-tight">{title}</p>
          </div>
        </div>
        <div className="mt-auto rounded-[1.2rem] border border-black/8 bg-white/78 p-4">
          <p className="text-sm font-semibold leading-6 text-ink/62">{note}</p>
        </div>
      </div>
    </div>
  );
}

function DelitPrivacyPage() {
  const { t } = useLanguage();

  return (
    <main className="relative min-h-screen overflow-hidden bg-paper text-ink">
      <Background />
      <Header />
      <LegalHero
        eyebrow={t('privacyPolicy')}
        title={`Del-It ${t('privacyPolicy')}`}
        description={`${t('effectiveDate')}: 05.07.2026. ${t('appLabel')}: Del-It.`}
      />
      <LegalContent sections={privacySections} />
      <DelitLegalLinks />
      <Footer />
    </main>
  );
}

function DelitTermsPage() {
  const { t } = useLanguage();

  return (
    <main className="relative min-h-screen overflow-hidden bg-paper text-ink">
      <Background />
      <Header />
      <LegalHero
        eyebrow={t('terms')}
        title={`Del-It ${t('terms')}`}
        description={`${t('lastUpdate')}: 19 Haziran 2026. ${t('appLabel')}: Del-It. ${t('contact')}: theapdesign26@gmail.com`}
      />
      <LegalContent sections={termsSections} />
      <DelitLegalLinks />
      <Footer />
    </main>
  );
}

function XoxPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-paper text-ink">
      <Background />
      <Header />
      <XoxHero />
      <XoxRules />
      <XoxModes />
      <XoxLegalLinks />
      <Footer />
    </main>
  );
}

function XoxHero() {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 px-5 pb-10 pt-24 sm:px-8 lg:pt-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-black/8 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-ink/55 shadow-soft">
            XOX Taktik Arena
          </p>
          <h1 className="font-display text-[clamp(3.2rem,7vw,7.8rem)] font-black leading-[0.9]">
            {t('xoxHeroTitle1')}
            <span className="block bg-gradient-to-r from-sky-500 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
              {t('xoxHeroTitle2')}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/65">
            {t('xoxHeroText')}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {[t('threeStone'), t('noDraw'), t('neonThemes')].map((item) => (
              <span key={item} className="rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-semibold text-ink/65 shadow-soft">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="absolute inset-x-12 top-12 h-44 rounded-full bg-gradient-to-r from-sky-300/70 via-fuchsia-300/60 to-rose-300/70 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-black/8 bg-white p-5 shadow-glow">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-[#070a18] via-[#111936] to-[#ff4fc8] p-5">
              <div className="rounded-[1.3rem] border border-white/20 bg-white p-5 shadow-soft">
                <img src={xoxProduct.logo} alt="XOX Taktik Arena logosu" className="h-auto w-full rounded-[1rem] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function XoxRules() {
  const { language, t } = useLanguage();
  const rules = [
    'Tahta 3x3’tür ve oyuncular sırayla boş hücrelere X veya O koyar.',
    'Her oyuncunun tahtada aynı anda en fazla 3 taşı bulunabilir.',
    '4. taş koyulduğunda, aynı oyuncunun en eski taşı otomatik olarak silinir.',
    'Yatay, dikey veya çapraz 3’lü çizgi yapan oyuncu turu kazanır.',
  ];
  const enRules = [
    'The board is 3x3 and players take turns placing X or O on empty cells.',
    'Each player can have at most 3 pieces on the board at the same time.',
    'When a 4th piece is placed, that player’s oldest piece is automatically removed.',
    'The player who completes a horizontal, vertical, or diagonal line wins the round.',
  ];
  const visibleRules = language === 'en' ? enRules : rules;

  return (
    <section className="relative z-10 px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-ink/45">{t('gameLogic')}</p>
            <h2 className="font-display text-4xl font-black leading-none sm:text-6xl">
              {t('xoxRulesTitle')}
            </h2>
          </div>
          <p className="max-w-xl text-ink/58">
            {t('xoxRulesText')}
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {visibleRules.map((rule, index) => (
            <article key={rule} className="rounded-[1.4rem] border border-black/8 bg-white p-6 shadow-soft">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-white">
                <span className="text-sm font-bold">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <p className="mt-8 text-base leading-7 text-ink/72">{rule}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function XoxModes() {
  const { t } = useLanguage();
  const modes = [
    [t('singlePlayer'), t('singlePlayerText')],
    [t('twoPlayer'), t('twoPlayerText')],
    [t('themesSound'), t('themesSoundText')],
  ];

  return (
    <section className="relative z-10 px-5 py-10 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
        {modes.map(([title, text]) => (
          <article key={title} className="rounded-[1.5rem] border border-black/8 bg-white p-6 shadow-soft">
            <Sparkles size={22} className="text-fuchsia-500" />
            <h3 className="mt-6 font-display text-2xl font-black">{title}</h3>
            <p className="mt-4 text-base leading-7 text-ink/65">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function XoxLegalLinks() {
  const { t } = useLanguage();

  return (
    <section className="relative z-10 px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-[1.6rem] border border-black/8 bg-white p-5 shadow-soft">
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/xox-taktik-arena/gizlilik-politikasi"
              className="inline-flex h-12 items-center justify-center rounded-full border border-black/8 bg-white px-5 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-[#fbfaf7]"
            >
              {t('privacyPolicy')}
            </a>
            <a
              href="/xox-taktik-arena/kullanim-sartlari"
              className="inline-flex h-12 items-center justify-center rounded-full border border-black/8 bg-[#fbfaf7] px-5 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-white"
            >
              {t('terms')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function XoxPrivacyPage() {
  const { t } = useLanguage();

  return (
    <main className="relative min-h-screen overflow-hidden bg-paper text-ink">
      <Background />
      <Header />
      <LegalHero
        eyebrow={t('privacyPolicy')}
        title={`X-O-X ${t('privacyPolicy')}`}
        description={`${t('effectiveDate')}: 24 Haziran 2026. AP Design. ${t('contact')}: theapdesign26@gmail.com`}
      />
      <LegalContent sections={xoxPrivacySections} />
      <XoxLegalLinks />
      <Footer />
    </main>
  );
}

function XoxTermsPage() {
  const { t } = useLanguage();

  return (
    <main className="relative min-h-screen overflow-hidden bg-paper text-ink">
      <Background />
      <Header />
      <LegalHero
        eyebrow={t('terms')}
        title={`X-O-X ${t('terms')}`}
        description={`${t('effectiveDate')}: 24 Haziran 2026. AP Design. ${t('contact')}: theapdesign26@gmail.com`}
      />
      <LegalContent sections={xoxTermsSections} />
      <XoxLegalLinks />
      <Footer />
    </main>
  );
}

function LegalHero({ eyebrow, title, description }) {
  return (
    <section className="relative z-10 px-5 pb-6 pt-24 sm:px-8 lg:pt-28">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-ink/45">{eyebrow}</p>
        <h1 className="font-display text-[clamp(2.8rem,6vw,6.5rem)] font-black leading-[0.94]">{title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/62">{description}</p>
      </div>
    </section>
  );
}

function LegalContent({ sections }) {
  return (
    <section className="relative z-10 px-5 py-8 sm:px-8">
      <div className="mx-auto grid max-w-5xl gap-4">
        {sections.map((section) => (
          <article key={section.title} className="rounded-[1.5rem] border border-black/8 bg-white p-6 shadow-soft sm:p-7">
            <h2 className="font-display text-2xl font-black">{section.title}</h2>
            <div className="mt-4 space-y-4 text-base leading-8 text-ink/70">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer({ variant = 'default' }) {
  const { t } = useLanguage();
  const isDelit = variant === 'delit';

  return (
    <footer className="scroll-reveal relative z-10 px-5 pb-8 pt-14 sm:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-black/8 bg-white shadow-soft">
        <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <a href="/" className="inline-flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-full border border-black/8 bg-white shadow-soft">
                <img src="/ap-logo.svg" alt="AP Design logosu" className="h-8 w-8 object-contain" />
              </span>
              <span className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-ink">
                AP Design
              </span>
            </a>
            <h2 className="mt-7 font-display text-4xl font-black leading-none sm:text-5xl">
              {isDelit ? t('footerDelitTitle') : t('footerDefaultTitle')}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-ink/62">
              {isDelit ? t('footerDelitText') : t('footerDefaultText')}
            </p>
          </div>

          <div className="grid gap-5 lg:justify-items-end">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-ink/45">{t('contact')}</p>
            <a
              href="mailto:theapdesign26@gmail.com"
              className="flex w-full items-center justify-between rounded-[1.2rem] border border-black/8 bg-[#fbfaf7] px-5 py-4 font-semibold text-ink transition hover:bg-white lg:max-w-md"
            >
              <span className="flex min-w-0 items-center gap-3">
                <Mail size={19} className="shrink-0" />
                <span className="truncate">theapdesign26@gmail.com</span>
              </span>
              <ArrowRight size={18} className="shrink-0" />
            </a>
            <div className="flex flex-wrap gap-2 text-sm font-semibold text-ink/70 lg:justify-end">
              {isDelit ? (
                <>
                  <a href={delitAppStoreUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-black/8 bg-white px-4 py-2 transition hover:bg-[#fbfaf7]">App Store</a>
                  <a href="/del-it/gizlilik-politikasi" className="rounded-full border border-black/8 bg-white px-4 py-2 transition hover:bg-[#fbfaf7]">{t('privacyPolicy')}</a>
                  <a href="/del-it/kullanim-sartlari" className="rounded-full border border-black/8 bg-white px-4 py-2 transition hover:bg-[#fbfaf7]">{t('terms')}</a>
                  <a href="/" className="rounded-full border border-black/8 bg-white px-4 py-2 transition hover:bg-[#fbfaf7]">AP Design</a>
                </>
              ) : (
                <>
                  <a href="/" className="rounded-full border border-black/8 bg-white px-4 py-2 transition hover:bg-[#fbfaf7]">{t('navHome')}</a>
                  <a href="/blog" className="rounded-full border border-black/8 bg-white px-4 py-2 transition hover:bg-[#fbfaf7]">{t('navBlog')}</a>
                  <a href="/contact" className="rounded-full border border-black/8 bg-white px-4 py-2 transition hover:bg-[#fbfaf7]">{t('navContact')}</a>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t border-black/8 px-7 py-5 text-xs font-semibold uppercase tracking-[0.18em] text-ink/38 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <span>AP Design</span>
          <span>theapdesign.art</span>
        </div>
      </div>
    </footer>
  );
}

function MiniStat({ title, value, note }) {
  return (
    <div className="rounded-[1.4rem] border border-black/8 bg-white p-5 shadow-soft">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/45">{title}</p>
      <p className="mt-3 font-display text-4xl font-black">{value}</p>
      <p className="mt-2 text-sm text-ink/55">{note}</p>
    </div>
  );
}

function Field({ label, type = 'text' }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-ink/70">
      <span>{label}</span>
      <input
        type={type}
        className="h-14 rounded-[1.2rem] border border-black/8 bg-[#fbfaf7] px-4 text-base text-ink outline-none transition placeholder:text-ink/28 focus:border-black/20"
        placeholder={label}
      />
    </label>
  );
}

function normalizePath(pathname) {
  const clean = pathname.replace(/\/+$/, '') || '/';
  return clean === '' ? '/' : clean;
}

const privacySections = [
  {
    title: 'Giriş',
    paragraphs: [
      'Yürürlük Tarihi: 05.07.2026',
      'Del-It olarak kullanıcı gizliliğine önem veriyoruz. Bu Gizlilik Politikası, Del-It mobil uygulamasını kullandığınızda hangi verilerin işlendiğini, bu verilerin hangi amaçlarla kullanıldığını ve kullanıcı tercihlerinizi açıklamak amacıyla hazırlanmıştır.',
      'Del-It; fotoğraf ve videoları hızlıca gözden geçirme, gereksiz içerikleri güvenli şekilde ayıklama, medya kasası, rehber temizliği ve kolaj gibi özellikler sunan gizlilik odaklı bir iOS uygulamasıdır. Uygulamanın temel akışları cihaz üzerinde çalışır. Del-It, fotoğraf, video veya rehber içeriklerinizi sunucuya yüklemez.',
    ],
  },
  {
    title: '1. Topladığımız veya İşlediğimiz Veriler',
    paragraphs: [
      'Del-It, uygulamanın çalışması, performansın ölçülmesi, hataların giderilmesi, reklamların gösterilmesi ve kullanıcı deneyiminin iyileştirilmesi amacıyla bazı teknik ve kullanım verilerini işleyebilir.',
      'İşlenebilecek veri türleri; uygulama kullanım verileri, uygulama içi etkileşimler, cihaz ve işletim sistemi bilgileri, uygulama sürümü, performans ve hata/tanı verileri, reklam gösterimi ve reklam etkileşim verileri, reklam tanımlayıcıları, izin verilmesi halinde IDFA gibi tanımlayıcılar, satın alma ve abonelik durumu gibi uygulama içi satın alma bilgileri, yerel hak sayaçları ve kullanıcı tercihlerini içerebilir.',
      'Del-It; fotoğraf, video veya rehber içeriklerinizi reklam amacıyla işlemez, analiz etmez veya üçüncü taraf reklam/analitik servislerine göndermez.',
    ],
  },
  {
    title: '2. Fotoğraf ve Video Gizliliği',
    paragraphs: [
      'Del-It’in temel amacı, cihazınızdaki fotoğraf ve videoları daha kolay gözden geçirmenize ve gereksiz içerikleri ayıklamanıza yardımcı olmaktır.',
      'Fotoğraf ve video içerikleriniz Del-It sunucularına yüklenmez. Temizlik ve gözden geçirme akışı cihaz üzerinde çalışır.',
      'Del-It, fotoğraf veya video içeriklerinizi reklam hedefleme amacıyla kullanmaz. Del-It, galeri içeriklerinizi üçüncü taraf reklam veya analiz servislerine göndermez.',
      'Uygulama, sadece çalışması için gerekli izinler kapsamında cihazınızdaki medya içeriklerine erişebilir.',
      'iOS üzerinde fotoğraflara erişim izni, Apple’ın sunduğu sistem izinleri üzerinden kullanıcı kontrolündedir. Bu izni cihaz ayarlarınızdan dilediğiniz zaman değiştirebilirsiniz.',
    ],
  },
  {
    title: '3. Del-It Çöp Kutusu ve Silme İşlemleri',
    paragraphs: [
      'Del-It içinde çöpe eklenen fotoğraf ve videolar hemen sistem galerisinden silinmez. Bu öğeler önce uygulama içindeki Del-It çöp kutusuna eklenir.',
      'Kalıcı silme işlemi yalnızca kullanıcının son onayıyla başlatılır. Silme işlemi iOS PhotoKit sistemi üzerinden yapılır ve iOS sistem davranışları geçerli olabilir.',
      'Del-It çöp kutusu, iOS Fotoğraflar uygulamasındaki “Son Silinenler” alanıyla aynı şey değildir. Bu alan, uygulama içinde son kararınızı vermeniz için kullanılan güvenli bir bekleme alanıdır.',
    ],
  },
  {
    title: '4. Medya Kasası',
    paragraphs: [
      'Medya Kasası, kullanıcının seçtiği fotoğraf ve videoları uygulama içinde ayrı bir alanda saklamasını sağlayan bir özelliktir. Kasaya eklenen öğeler cihaz üzerinde yerel olarak saklanır ve şifreli tutulur. Backend veya sunucu senkronizasyonu kullanılmaz.',
      'Kasaya eklenen öğeler kullanıcının cihazında kalır. Del-It bu öğeleri sunucuya yüklemez.',
      'Kasadaki öğeler uygulama silindiğinde kaybolabilir. Uygulamayı silmeden önce gerekli öğeleri dışarı aktarmak kullanıcının sorumluluğundadır.',
      'Face ID koruması etkinleştirilirse kimlik doğrulama iOS LocalAuthentication sistemiyle yapılır. Del-It biyometrik veriyi görmez, kaydetmez veya işlemez.',
      'Kasa içindeki dışarı aktarma işlemleri kullanıcının açık isteğiyle yapılır.',
    ],
  },
  {
    title: '5. Rehber Erişimi',
    paragraphs: [
      'Del-It, kullanıcı izin verdiğinde rehber kayıtlarını cihaz üzerinde analiz edebilir. Bu analizler tüm kişileri listeleme, aynı isimli kayıtları bulma, aynı numaraya sahip kayıtları bulma, isimsiz veya anlamsız isimli kayıtları ayırma, numarasız kayıtları gösterme ve kullanıcının seçtiği özel filtrelere göre rehber sonuçları oluşturma gibi işlemleri kapsayabilir.',
      'Kullanıcının açık onayı ile kişiler birleştirilebilir veya silinebilir.',
      'Del-It rehber içeriklerini sunucuya yüklemez ve reklam/analitik hedefleme için kullanmaz. Rehberde yapılan birleştirme, silme veya düzenleme işlemleri kullanıcının açık onayı olmadan gerçekleşmez.',
    ],
  },
  {
    title: '6. Kolaj Özelliği',
    paragraphs: [
      'Kolaj özelliği, kullanıcının seçtiği fotoğraf veya videolardan cihaz üzerinde görsel tasarım oluşturmasını sağlar. Kolaj projeleri varsayılan olarak kalıcı bir bulut projesi şeklinde saklanmaz.',
      'Kullanıcı kaydetme veya dışarı aktarma işlemi yaptığında sonuç iOS izinleri ve sistem davranışına uygun şekilde kullanıcının seçtiği alana aktarılır.',
      'Kolaj oluştururken kullanılan fotoğraf ve videolar reklam hedefleme veya analitik amacıyla gönderilmez.',
    ],
  },
  {
    title: '7. Reklamlar ve Takip İzni',
    paragraphs: [
      'Del-It ücretsiz kullanıcılara reklam gösterebilir. Reklamlar Yandex Mobile Ads SDK üzerinden sunulabilir. Reklam türleri banner, native, geçiş reklamı ve ödüllü reklam olabilir. Del-It Plus kullanıcılarına reklam gösterilmemesi hedeflenir.',
      'Ödüllü reklamlar, kullanıcının açık şekilde reklam izlemeyi seçmesi halinde ek hak veya deneme hakkı vermek için kullanılır. Reklam tamamlanmadan hak verilmez.',
      'Uygulama, App Tracking Transparency (ATT) kapsamında kullanıcıdan takip izni isteyebilir. Kullanıcı izin verirse reklam deneyimi daha kişiselleştirilmiş olabilir. Kullanıcı izin vermezse uygulama çalışmaya devam eder ve reklamlar kişiselleştirilmemiş veya bağlamsal şekilde sunulabilir.',
      'Del-It fotoğraf, video veya rehber içeriklerini reklam hedefleme için kullanmaz.',
    ],
  },
  {
    title: '8. Analitik Servisleri',
    paragraphs: [
      'Del-It, uygulamanın nasıl kullanıldığını anlamak, hataları iyileştirmek ve ürün deneyimini geliştirmek için AppMetrica ve Google Analytics gibi analitik servisleri kullanabilir.',
      'Analitik olaylar uygulama açılışı, ekran görüntüleme, özellik kullanımı, abonelik veya reklam akışlarına ait teknik durumlar, hata ve performans sinyalleri gibi teknik bilgilerden oluşabilir.',
      'Analitik kapsamında fotoğraf/video içeriği, dosya adı, EXIF konum bilgisi, thumbnail, medya local identifier, rehber içeriği, kişi adı, telefon numarası veya kişisel galeri bilgisi gönderilmez.',
    ],
  },
  {
    title: '9. Satın Almalar ve Abonelikler',
    paragraphs: [
      'Del-It Plus abonelikleri Apple App Store üzerinden yönetilir. Ödeme işlemleri Apple tarafından gerçekleştirilir. Del-It kredi kartı, banka kartı veya ödeme yöntemi detaylarını görmez ve saklamaz.',
      'Uygulama, kullanıcının Del-It Plus yetkisini doğrulamak için StoreKit üzerinden abonelik durumunu okuyabilir. Abonelik iptali, yenileme ve iade süreçleri Apple kurallarına tabidir.',
    ],
  },
  {
    title: '10. Yerel Saklama ve Hak Sayaçları',
    paragraphs: [
      'Del-It, uygulama tercihlerini, ücretsiz hak sayaçlarını, ödüllü reklam haklarını, bazı istatistikleri ve kullanıcının yerel seçimlerini cihazda saklayabilir.',
      'Kötüye kullanımı önlemek için bazı ücretsiz hak bilgileri Keychain’de saklanabilir. Keychain verisi uygulama silinip yeniden yüklendiğinde aynı cihazda kalabilir.',
      'Bu bilgiler fotoğraf, video, rehber içeriği veya kişisel medya verisi içermez; yalnızca hak/limit sayaçları gibi teknik kullanım verileridir.',
    ],
  },
  {
    title: '11. Verilerin Saklanma Süresi',
    paragraphs: [
      'Fotoğraf/video ve rehber içerikleri Del-It sunucularına yüklenmez.',
      'Kasa içerikleri cihazda saklanır ve uygulama silindiğinde kaybolabilir.',
      'Çöp kutusu kayıtları ve istatistikler kullanıcı temizleyene, sistem güncellenene veya uygulama silinene kadar cihazda kalabilir.',
      'Analitik ve reklam servislerinin saklama süreleri ilgili üçüncü taraf servislerin politikalarına tabidir.',
      'Satın alma kayıtları Apple tarafından saklanır.',
    ],
  },
  {
    title: '12. Üçüncü Taraf Servisler',
    paragraphs: [
      'Del-It aşağıdaki üçüncü taraf servisleri kullanabilir: Apple PhotoKit, Apple Contacts, Apple StoreKit, Apple LocalAuthentication, Yandex Mobile Ads, AppMetrica ve Google Analytics / Firebase Analytics.',
      'Apple PhotoKit fotoğraf ve video izinleri, listeleme ve silme işlemleri için; Apple Contacts rehber izinleri ve kullanıcı onaylı rehber işlemleri için; Apple StoreKit abonelik ve satın alma doğrulama için; Apple LocalAuthentication Face ID / cihaz kimlik doğrulaması için kullanılabilir.',
      'Yandex Mobile Ads reklam gösterimi ve reklam performansı için; AppMetrica ve Google Analytics / Firebase Analytics uygulama analitiği için kullanılabilir.',
      'Bu servislerin veri işleme pratikleri kendi gizlilik politikalarına tabidir. Del-It, fotoğraf/video veya rehber içeriğini bu servislerle paylaşmamak üzere tasarlanmıştır.',
    ],
  },
  {
    title: '13. Çocukların Gizliliği',
    paragraphs: [
      'Del-It, bilerek çocuklardan kişisel veri toplamayı hedeflemez. Uygulama çocuklara yönelik reklam hedefleme veya çocuk profilleme amacıyla tasarlanmamıştır.',
      'Bir ebeveyn veya yasal temsilci gizlilikle ilgili bir endişe taşıyorsa bizimle iletişime geçebilir.',
    ],
  },
  {
    title: '14. Kullanıcı Hakları ve Kontroller',
    paragraphs: [
      'Kullanıcı iOS Ayarlar üzerinden fotoğraf erişimini, rehber erişimini ve takip iznini değiştirebilir.',
      'Kullanıcı uygulama içinden Del-It Plus abonelik ekranına ulaşabilir ve Apple App Store üzerinden aboneliklerini yönetebilir.',
      'Kullanıcı kasa içeriklerini dışarı aktarabilir veya kasadan çıkarabilir. Çöp kutusundaki öğeleri geri alabilir veya son onayla kalıcı silebilir.',
      'Del-It’te zorunlu hesap sistemi yoktur. Bu nedenle hesap silme akışına gerek yoktur. Gelecekte hesap sistemi eklenirse uygulama içinden hesap silme akışı sağlanmalıdır.',
    ],
  },
  {
    title: '15. Güvenlik',
    paragraphs: [
      'Del-It, gereksiz veri toplamamayı ve hassas içerikleri cihaz içinde tutmayı temel alır. Kasa içerikleri yerel olarak şifreli saklanır. Face ID kullanıldığında biyometrik doğrulama iOS tarafından yapılır; Del-It biyometrik veriyi işlemez.',
      'Buna rağmen hiçbir dijital sistem mutlak güvenlik garantisi veremez. Kullanıcı, silme ve dışarı aktarma işlemlerinde onay ekranlarını dikkatle kontrol etmelidir.',
    ],
  },
  {
    title: '16. App Store Gizlilik Beyanları İçin Not',
    paragraphs: [
      'App Store Connect gizlilik formu ve PrivacyInfo.xcprivacy dosyası, uygulamada kullanılan SDK’lar ve gerçek veri işleme pratikleriyle tutarlı olmalıdır. Reklam SDK’si, analitik SDK’si veya takip izni kullanılıyorsa App Store gizlilik beyanları buna göre güncellenmelidir.',
      'Mevcut uygulama davranışına göre fotoğraf ve video erişimi cihaz içinde özellik sağlamak içindir. Rehber erişimi cihaz içinde rehber temizliği içindir. Reklam SDK’si teknik reklam verileri işleyebilir. AppMetrica ve Google Analytics teknik analitik olayları işleyebilir. ATT izni isteniyorsa takip/kişiselleştirilmiş reklam beyanları App Store Connect ile uyumlu olmalıdır.',
    ],
  },
  {
    title: '17. Politika Güncellemeleri',
    paragraphs: [
      'Bu politika zaman zaman güncellenebilir. Uygulamanın veri işleme pratiklerinde, kullanılan SDK’larda, reklam/analitik yapısında veya yeni özelliklerde önemli değişiklik olursa bu metin de güncellenmelidir.',
    ],
  },
  {
    title: '18. İletişim',
    paragraphs: [
      'Gizlilikle ilgili sorularınız için bizimle iletişime geçebilirsiniz.',
      'E-posta: theapdesign26@gmail.com',
    ],
  },
];

const termsSections = [
  {
    title: '1. Del-It’in amacı',
    paragraphs: [
      'Del-It, iPhone galerisindeki fotoğraf ve videoları daha hızlı incelemene, gereksiz gördüklerini uygulama içindeki güvenli çöp kutusuna eklemene ve son onayından sonra silmene yardımcı olan bir fotoğraf temizleme uygulamasıdır.',
      'Del-It, tüm iPhone’u temizleyen, diğer uygulamaların önbelleğini silen, mesajlarını veya e-postalarını temizleyen bir sistem temizleme aracı değildir.',
    ],
  },
  {
    title: '2. Kullanıcı sorumluluğu',
    paragraphs: [
      'Del-It içinde yaptığın seçimlerden sen sorumlusun. Bir fotoğrafı veya videoyu çöp kutusuna eklemeden ve özellikle kalıcı silme onayı vermeden önce seçimini dikkatlice kontrol etmelisin.',
      'Del-It, yanlışlıkla silinen veya kullanıcının kendi onayıyla silinen fotoğraf ve videolardan sorumlu tutulamaz.',
    ],
  },
  {
    title: '3. Güvenli çöp kutusu',
    paragraphs: [
      'Sola kaydırılan veya “Çöpe Ekle” butonuyla seçilen öğeler hemen sistemden silinmez. Önce Del-It çöp kutusuna eklenir.',
      'Kalıcı silme işlemi yalnızca çöp kutusunda açık onay verdiğinde başlatılır. Onay verdiğinde Del-It, iOS PhotoKit sistemi üzerinden seçili öğeleri silmeye çalışır.',
      'Silme işlemi iOS sistem izinlerine, fotoğraf erişim durumuna, iCloud durumuna veya cihaz ayarlarına bağlı olarak başarısız olabilir. Böyle bir durumda uygulama sana uygun bir hata mesajı gösterebilir.',
    ],
  },
  {
    title: '4. Fotoğraf erişimi',
    paragraphs: [
      'Del-It’in çalışabilmesi için fotoğraf erişimi gerekir. Fotoğraf erişimi vermezsen veya sınırlı erişim verirsen bazı özellikler çalışmayabilir ya da yalnızca izin verdiğin öğeler gösterilebilir.',
      'Fotoğraf erişimini iOS Ayarlar uygulamasından istediğin zaman değiştirebilirsin.',
    ],
  },
  {
    title: '5. Ücretsiz kullanım',
    paragraphs: [
      'Del-It temel özellikleri ücretsiz olarak sunabilir. Ücretsiz sürümde temizlik hakkı, reklam izleyerek ek hak kazanma veya bazı özelliklerin sınırlı kullanımı gibi limitler bulunabilir.',
      'Ücretsiz kullanım koşulları uygulamanın sürümüne göre değişebilir.',
    ],
  },
  {
    title: '6. Del-It Plus',
    paragraphs: [
      'Del-It Plus; sınırsız temizlik hakkı, gelişmiş galeri filtreleri ve reklamsız kullanım gibi ek avantajlar sağlayabilir.',
      'Del-It Plus özellikleri satın alma ekranında açıklanır. Fiyatlar ve abonelik koşulları Apple App Store üzerinden gösterilir.',
    ],
  },
  {
    title: '7. Abonelikler ve satın almalar',
    paragraphs: [
      'Del-It Plus abonelikleri Apple App Store üzerinden satın alınır ve Apple hesabın üzerinden yönetilir.',
      'Abonelikler otomatik olarak yenilenebilir. İptal, yenileme ve ödeme işlemleri Apple’ın App Store abonelik yönetimi üzerinden yapılır.',
      'Del-It ödeme bilgilerini görmez, işlemez veya saklamaz. Satın alma yetkin StoreKit üzerinden doğrulanır.',
      'Satın alımlarını geri yükleme işlemi uygulama içindeki Plus veya ödeme ekranından yapılabilir.',
    ],
  },
  {
    title: '8. Reklamlar',
    paragraphs: [
      'Del-It’in ücretsiz sürümünde reklam gösterilebilir. Reklamlar açıkça reklam alanı olarak sunulur ve gerçek fotoğraf ya da video öğesi gibi gösterilmez.',
      'Ödüllü reklam izlediğinde ek temizlik hakkı kazanabilirsin. Reklam tamamlanmadan kapatılırsa ödül verilmeyebilir.',
      'Del-It Plus kullanıcılarına reklam gösterilmez.',
    ],
  },
  {
    title: '9. Yasaklı kullanım',
    paragraphs: [
      'Del-It’i tersine mühendislik yapmak, güvenlik veya ödeme kontrollerini aşmaya çalışmak, reklam/abonelik/hak sistemini kötüye kullanmak, yasa dışı veya yanıltıcı amaçlarla kullanmak ya da uygulamanın çalışmasını bozacak otomasyon ve bot araçlarıyla müdahale etmek için kullanamazsın.',
    ],
  },
  {
    title: '10. Hizmetin değişmesi veya durması',
    paragraphs: [
      'Del-It zaman içinde güncellenebilir, bazı özellikler değiştirilebilir veya kaldırılabilir. Uygulamanın her zaman kesintisiz, hatasız veya tüm cihazlarda aynı şekilde çalışacağı garanti edilmez.',
      'iOS sürümü, cihaz modeli, fotoğraf izinleri, iCloud durumu, App Store durumu veya üçüncü taraf servislerdeki değişiklikler uygulamanın çalışmasını etkileyebilir.',
    ],
  },
  {
    title: '11. Sorumluluğun sınırlandırılması',
    paragraphs: [
      'Del-It, fotoğraf temizleme sürecini daha kolay ve güvenli hale getirmek için tasarlanmıştır; ancak kullanıcı kararlarının sonuçlarından kullanıcı sorumludur.',
      'Uygulama, veri kaybı, yanlış seçim, kullanıcı onayıyla yapılan silme işlemi, cihaz veya sistem kaynaklı hatalar, üçüncü taraf servis kesintileri ya da App Store ödeme süreçlerinden doğabilecek sorunlardan kanunen izin verilen ölçüde sorumlu değildir.',
    ],
  },
  {
    title: '12. Fikri mülkiyet',
    paragraphs: [
      'Del-It adı, tasarımı, arayüzü, metinleri, görsel öğeleri ve yazılım bileşenleri ilgili hak sahiplerine aittir. Uygulama izinsiz kopyalanamaz, dağıtılamaz veya türev çalışma oluşturmak için kullanılamaz.',
    ],
  },
  {
    title: '13. Gizlilik',
    paragraphs: ['Del-It’in veri işleme yaklaşımı Gizlilik Politikası’nda açıklanır. Uygulamayı kullanarak Gizlilik Politikası’nı da kabul etmiş olursun.'],
  },
  {
    title: '14. Değişiklikler',
    paragraphs: ['Bu Kullanım Şartları zaman zaman güncellenebilir. Güncel metin uygulama içinde veya web sitemizde yayınlanabilir.'],
  },
  {
    title: '15. İletişim',
    paragraphs: ['Kullanım Şartları, Gizlilik Politikası veya uygulamayla ilgili soruların için bize ulaşabilirsin: theapdesign26@gmail.com'],
  },
];

const xoxPrivacySections = [
  {
    title: '1. Genel bilgi',
    paragraphs: [
      'X-O-X, kısa turlu 3x3 strateji oyunudur. Uygulama, kullanıcıdan hesap oluşturma, üyelik veya doğrudan kişisel profil bilgisi istemez.',
    ],
  },
  {
    title: '2. Cihazda saklanan tercihler',
    paragraphs: [
      'Uygulama; oyun deneyimini sürdürebilmek için bazı tercihleri cihaz üzerinde saklayabilir. Bunlar ses, müzik, tema tercihleri ve reklam kaldırma satın alma durumudur. Ses, müzik ve tema ayarları uygulamada kalıcı olarak tutulabilir.',
    ],
  },
  {
    title: '3. Reklamlar ve consent',
    paragraphs: [
      'X-O-X’ta maç sonlarında geçiş reklamları gösterilebilir. Reklam gösterimi için Google Mobile Ads / AdMob kullanılmaktadır.',
      'Gerekli bölgelerde Google UMP consent akışı reklam SDK başlamadan önce çalışır ve kullanıcıya gizlilik veya izin formu gösterilebilir.',
      'Uygulamada bölge veya reklam ayarları gerektirirse Ayarlar ekranında “Reklam Gizlilik Seçenekleri” bölümü görünebilir.',
    ],
  },
  {
    title: '4. Uygulama içi satın alma',
    paragraphs: [
      'Uygulama içinde reklamları kaldırmak için tek seferlik uygulama içi satın alma sunulabilir. Bu satın alma işlemleri Apple App Store altyapısı üzerinden yürütülür. X-O-X ödeme kartı bilgilerinizi işlemez veya saklamaz.',
      'Satın alma sonrası reklam kaldırma durumu cihazda saklanabilir. Reklam kaldırma satın alımı aktifse geçiş reklamları gösterilmez.',
    ],
  },
  {
    title: '5. Politika güncellemeleri',
    paragraphs: ['Bu gizlilik politikası zaman zaman güncellenebilir. Güncellemeler uygulama içinde veya web sitesi üzerinden yayınlanabilir.'],
  },
  {
    title: '6. İletişim',
    paragraphs: ['Sorularınız için bizimle iletişime geçebilirsiniz: theapdesign26@gmail.com', 'Web Sitesi: theapdesign.art'],
  },
];

const xoxTermsSections = [
  {
    title: '1. Kabul',
    paragraphs: ['X-O-X uygulamasını kullanarak bu kullanım şartlarını kabul etmiş olursunuz.'],
  },
  {
    title: '2. Oyun kuralları',
    paragraphs: [
      'X-O-X, klasik X-O’dan farklı çalışan 3x3 bir strateji oyunudur. Her oyuncu tahtada en fazla 3 taş tutar.',
      'Bir oyuncu 4. taşını koyduğunda, aynı oyuncunun ilk koyduğu taş tahtadan silinir. Bu döngü sayesinde oyun tıkanmaz ve her tur bir kazananla biter.',
    ],
  },
  {
    title: '3. Kullanıcı sorumluluğu',
    paragraphs: ['Uygulama eğlence amaçlıdır. Kullanıcılar uygulamayı yasalara uygun, adil ve uygulamanın normal işleyişini bozmayacak şekilde kullanmalıdır.'],
  },
  {
    title: '4. Reklamlar ve satın alma',
    paragraphs: [
      'X-O-X’ta maç sonunda geçiş reklamı gösterilebilir. Kullanıcı isterse reklamları kaldırmak için tek seferlik uygulama içi satın alma yapabilir.',
      'Reklam kaldırma satın alımı yalnızca reklamları kaldırır. Oyuncuya skor avantajı, oyun içi güç, ekstra özellik veya rekabet avantajı sağlamaz.',
      'Satın alma geri yükleme işlemi Ayarlar ekranındaki Geri Yükle butonu ile yapılabilir.',
    ],
  },
  {
    title: '5. Güncellemeler ve hizmet durumu',
    paragraphs: [
      'AP Design, uygulamada zaman zaman güncelleme yapabilir. Oyun kuralları, görsel tasarım, reklam davranışı, teknik altyapı veya uygulama özellikleri değiştirilebilir.',
      'Uygulamanın kesintisiz, hatasız veya her cihazda aynı performansla çalışacağı garanti edilmez. Ancak AP Design, kullanıcı deneyimini iyileştirmek için gerekli güncellemeleri yapabilir.',
    ],
  },
  {
    title: '6. İletişim',
    paragraphs: ['Sorularınız için bizimle iletişime geçebilirsiniz: theapdesign26@gmail.com', 'Web Sitesi: theapdesign.art'],
  },
];

createRoot(document.getElementById('root')).render(<App />);
