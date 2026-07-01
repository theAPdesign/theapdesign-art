import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Check, ChevronRight, Mail, Sparkles } from 'lucide-react';
import './styles.css';

const product = {
  title: 'Del-it',
  description: 'Benzer fotoğrafları bulur, gereksiz kareleri ayıklamayı kolaylaştırır ve depolama alanı kazandırır.',
  summary: 'Galeriyi sakin, temiz ve daha akıllı tutan ürün.',
  logo: '/del-it-logo.jpg',
};

const xoxProduct = {
  title: 'XOX Taktik Arena',
  description: 'Klasik X-O hissini 3 taş limitiyle hızlandıran, beraberliksiz ve kısa turlu 3x3 strateji oyunu.',
  summary: 'Dinamik X-O kuralları, yapay zeka ve iki kişilik hızlı maçlar.',
  logo: '/xox-taktik-arena-logo.png',
};

const gameboxProduct = {
  title: 'Gamebox',
  description: 'Tek uygulama içinde Sky Bird, Air Hockey, Peak, Memory Flip ve daha fazlasını taşıyan pastel mini oyun kutusu.',
  summary: 'Mini oyunlar, coin sistemi, ayarlar ve StoreKit altyapısıyla oyun merkezi.',
  logo: '/gamebox/gamebox-icon.svg',
  fullLogo: '/gamebox/gamebox-logo-light.svg',
  darkLogo: '/gamebox/gamebox-logo-dark.svg',
};

const gameboxGames = [
  ['Sky Bird', '/gamebox/sky-bird-cover.png', 'Refleks ve ritim odaklı uçuş oyunu'],
  ['Air Hockey', '/gamebox/air-hockey-cover.png', 'Aynı cihazda hızlı arcade düellosu'],
  ['Peak', '/gamebox/peak-cover.png', 'Zamanlama ve hamle hesabı isteyen tırmanış'],
  ['Slider Puzzle', '/gamebox/slider-puzzle-cover.png', 'Klasik sürükle-bırak bulmaca'],
  ['Memory Flip', '/gamebox/memory-flip-cover.png', 'Eşleşen kartları hatırlama oyunu'],
  ['Quick Tap', '/gamebox/quick-tap-cover.png', 'Hızlı tepki ve doğru hedef seçimi'],
  ['Numbers', '/gamebox/numbers-cover.png', 'Sayıları birleştiren sakin zeka oyunu'],
  ['Word Hunt', '/gamebox/word-hunt-cover.png', 'Harflerden kelime avı'],
  ['Sand Party', '/gamebox/sand-party-cover.png', 'Renkli blok ve kum hissi'],
  ['Chess', '/gamebox/chess-cover.png', 'Klasik strateji molası'],
  ['Fruit Catch', '/gamebox/fruit-catch-cover.png', 'Meyveleri yakala, bombalardan kaç'],
];

function App() {
  useScrollReveal();

  const path = normalizePath(window.location.pathname);

  if (path === '/products') {
    return <ProductsPage />;
  }

  if (path === '/contact') {
    return <ContactPage />;
  }

  if (path === '/del-it') {
    return <DelitPage />;
  }

  if (path === '/del-it/gizlilik-politikasi') {
    return <DelitPrivacyPage />;
  }

  if (path === '/del-it/kullanim-sartlari') {
    return <DelitTermsPage />;
  }

  if (path === '/xox-taktik-arena') {
    return <XoxPage />;
  }

  if (path === '/xox-taktik-arena/gizlilik-politikasi') {
    return <XoxPrivacyPage />;
  }

  if (path === '/xox-taktik-arena/kullanim-sartlari') {
    return <XoxTermsPage />;
  }

  if (path === '/gamebox') {
    return <GameboxPage />;
  }

  if (path === '/gamebox/gizlilik-politikasi') {
    return <GameboxPrivacyPage />;
  }

  if (path === '/gamebox/kullanim-sartlari') {
    return <GameboxTermsPage />;
  }

  return <HomePage />;
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
      <DelitAppStoreCta />
      <DelitDetails />
      <DelitGallery />
      <DelitFaq />
      <DelitLegalLinks />
      <Footer />
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
  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-white/75 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="/" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full border border-black/8 bg-white shadow-soft">
            <img src="/ap-logo.svg" alt="AP Design logosu" className="h-8 w-8 object-contain" />
          </span>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.28em] text-ink">
            AP Design
          </span>
        </a>
        <div className="hidden items-center gap-7 text-sm font-medium text-ink/65 md:flex">
          <a href="/" className="transition hover:text-ink">Anasayfa</a>
          <a href="/products" className="transition hover:text-ink">Uygulamalar</a>
          <a href="/contact" className="transition hover:text-ink">İletişim</a>
        </div>
      </nav>
    </header>
  );
}

function HomeHero() {
  return (
    <section className="relative z-10 flex min-h-[calc(100svh-5rem)] items-center overflow-hidden px-5 py-10 sm:px-8 lg:py-14">
      <HomeHeroFloaters />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-6 inline-flex rounded-full border border-black/8 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-ink/65 shadow-soft">
            Uygulama stüdyosu
          </p>
          <h1 className="font-display text-[clamp(2.8rem,6vw,6.8rem)] font-black leading-[0.88] tracking-tight">
            <span className="block whitespace-nowrap">Eğlenceli, Çözümlü</span>
            <span className="block bg-gradient-to-r from-[#00c8ff] via-[#3f7cff] to-[#9b35ff] bg-clip-text text-transparent">
              Fikirler
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-ink/66 sm:text-xl">
            Biz, eğlenceli ve ilgi çekici mini oyunlar ile pratik mobil deneyimler geliştirmeye odaklanan
            yaratıcı bir stüdyoyuz. Yeniliği, yaratıcılığı ve kullanıcı geri bildirimlerini birleştirerek
            kolay öğrenilen, bırakması zor ve herkes için keyifli uygulamalar tasarlıyoruz.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/products"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-ink px-7 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-black/85"
            >
              Uygulamaları Gör
              <ArrowRight size={18} />
            </a>
            <a
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-full border border-black/8 bg-white px-7 text-sm font-bold text-ink transition hover:-translate-y-1 hover:bg-[#fbfaf7]"
            >
              İletişim
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
    { src: gameboxProduct.logo, alt: 'Gamebox uygulama ikonu', className: 'left-[13%] bottom-[12%] h-14 w-14 sm:h-[4.5rem] sm:w-[4.5rem]', delay: '-3.2s', fit: 'contain' },
    { src: '/gamebox/memory-flip-cover.png', alt: 'Memory Flip oyun görseli', className: 'right-[17%] bottom-[16%] h-14 w-14 sm:h-16 sm:w-16', delay: '-0.9s', fit: 'cover' },
    { src: '/gamebox/air-hockey-cover.png', alt: 'Air Hockey oyun görseli', className: 'left-[3%] top-[48%] hidden h-14 w-14 sm:block', delay: '-2.4s', fit: 'cover' },
    { src: '/gamebox/sky-bird-cover.png', alt: 'Sky Bird oyun görseli', className: 'right-[4%] top-[52%] hidden h-14 w-14 sm:block', delay: '-4.1s', fit: 'cover' },
    { src: '/gamebox/quick-tap-cover.png', alt: 'Quick Tap oyun görseli', className: 'left-[29%] top-[7%] hidden h-12 w-12 lg:block', delay: '-1.1s', fit: 'cover' },
    { src: '/gamebox/fruit-catch-cover.png', alt: 'Fruit Catch oyun görseli', className: 'right-[30%] top-[9%] hidden h-12 w-12 lg:block', delay: '-3.7s', fit: 'cover' },
    { src: '/gamebox/word-hunt-cover.png', alt: 'Word Hunt oyun görseli', className: 'left-[32%] bottom-[5%] hidden h-12 w-12 lg:block', delay: '-2.9s', fit: 'cover' },
    { src: '/gamebox/numbers-cover.png', alt: 'Numbers oyun görseli', className: 'right-[32%] bottom-[6%] hidden h-12 w-12 lg:block', delay: '-4.8s', fit: 'cover' },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-0 opacity-75 [mask-image:radial-gradient(circle_at_center,transparent_0%,black_58%)]">
      {floaters.map((item) => (
        <span
          key={item.alt}
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
  return (
    <section className="relative z-10 px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="scroll-reveal mx-auto mb-8 max-w-3xl text-center">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.28em] text-ink/45">Uygulamalarımız</p>
            <h2 className="font-display text-4xl font-black leading-none sm:text-5xl">
              Her uygulama kendi <span className="bg-gradient-to-r from-[#00c8ff] via-[#3f7cff] to-[#9b35ff] bg-clip-text text-transparent">küçük dünyasını</span> taşır.
            </h2>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-ink/62">
            Kısa sürede anlaşılır, tekrar açıldığında yine keyif verir. Oyunlardan pratik araçlara kadar
            ürünleri sade, canlı ve mobil öncelikli tasarlıyoruz.
          </p>
        </div>
        <HomeApplicationShowcase />
      </div>
    </section>
  );
}

function HomeApplicationShowcase() {
  const homeApps = [
    {
      href: '/del-it',
      logo: product.logo,
      logoAlt: 'Del-it uygulama logosu',
      title: 'Del-it',
      status: 'App Store’da',
      description: 'Fotoğraflarını hızlıca gözden geçir, gereksizleri güvenli Del-It çöp kutusuna ekle.',
      appStoreUrl: 'https://apps.apple.com/us/app/del-it/id6780890586',
      background: 'from-pink-100 via-white to-violet-100',
    },
    {
      href: '/xox-taktik-arena',
      logo: xoxProduct.logo,
      logoAlt: 'XOX Taktik Arena logosu',
      title: 'XOX Taktik Arena',
      status: 'App Store’da',
      description: '3 taş limitiyle hızlanan, beraberliksiz ve kısa turlu strateji oyunu.',
      appStoreUrl: 'https://apps.apple.com/us/app/xox-arena/id6783572878',
      background: 'from-sky-100 via-white to-fuchsia-100',
    },
    {
      href: '/gamebox',
      logo: gameboxProduct.logo,
      logoAlt: 'Gamebox logosu',
      title: 'Gamebox',
      status: 'Yakında',
      description: 'Sky Bird, Air Hockey, Peak, Memory Flip ve daha fazlasını taşıyan mini oyun kutusu.',
      appStoreUrl: '',
      background: 'from-emerald-100 via-white to-amber-100',
    },
  ];

  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {homeApps.map((app, index) => (
        <HomeAppFeatureCard key={app.title} {...app} delay={`${index * 120}ms`} />
      ))}
    </div>
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
          Del-it, XOX Taktik Arena ve Gamebox burada. Kartlardan uygulamaların iç sayfalarına geçebilirsin.
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

function ApplicationsGrid() {
  const productCards = [
    {
      href: '/del-it',
      logo: product.logo,
      logoAlt: 'Del-it logosu',
      eyebrow: 'Del-it',
      title: 'Fotoğraf temizliği',
      description: 'Benzer fotoğrafları bulur, gereksiz kareleri ayıklamayı kolaylaştırır ve depolama alanı kazandırır.',
      appStoreUrl: 'https://apps.apple.com/us/app/del-it/id6780890586',
      tone: 'soft',
    },
    {
      href: '/xox-taktik-arena',
      logo: xoxProduct.logo,
      logoAlt: 'XOX Taktik Arena logosu',
      eyebrow: 'XOX Taktik Arena',
      title: 'Beraberliksiz 3x3 strateji',
      description: 'Klasik X-O oyununu 3 taş limiti, eski taş silinme mekaniği ve hızlı skor hedefleriyle daha taktik hale getirir.',
      appStoreUrl: 'https://apps.apple.com/us/app/xox-arena/id6783572878',
      tone: 'neon',
    },
    {
      href: '/gamebox',
      logo: gameboxProduct.logo,
      logoAlt: 'Gamebox logosu',
      eyebrow: 'Gamebox',
      title: 'Mini oyun kutusu',
      description: 'Tek uygulama içinde kısa turlu, renkli ve farklı türlerde mini oyunları toplayan pastel arcade merkezi.',
      appStoreUrl: '',
      tone: 'gamebox',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {productCards.map((item, index) => (
        <ProductCard
          key={item.href}
          {...item}
          className={index === 0 ? 'xl:col-start-2' : ''}
        />
      ))}
    </div>
  );
}

function ProductCard({ href, logo, logoAlt, eyebrow, title, description, appStoreUrl, tone, className = '' }) {
  const mediaClass = {
    gamebox: 'bg-white',
    neon: 'bg-white',
    soft: 'bg-white',
  }[tone] || 'bg-white';

  return (
    <article className={`group flex min-h-[24rem] flex-col overflow-hidden rounded-[1.5rem] border border-black/8 bg-white p-3 shadow-soft transition duration-300 hover:-translate-y-2 hover:shadow-glow ${className}`}>
      <div className="flex h-full flex-col">
        <div className={`grid aspect-square place-items-center rounded-[1.2rem] p-5 ${mediaClass}`}>
          <img src={logo} alt={logoAlt} className="max-h-full max-w-full object-contain" />
        </div>
        <div className="flex flex-1 flex-col px-1 pb-2 pt-5">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.24em] text-ink/45">{eyebrow}</p>
          <h2 className="mt-3 font-display text-2xl font-black leading-tight">{title}</h2>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-ink/62">{description}</p>
          <div className="mt-auto space-y-3 pt-6">
            <a
              href={href}
              className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-black/10 bg-white px-4 py-3 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-[#fbfaf7]"
            >
              Daha fazla
              <ChevronRight size={17} />
            </a>
            {appStoreUrl ? (
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${eyebrow} uygulamasını App Store’da aç`}
                className="flex min-h-14 items-center gap-3 rounded-[0.9rem] bg-black px-4 py-3 text-white transition hover:-translate-y-0.5 hover:bg-black/85"
              >
                <span className="text-3xl leading-none" aria-hidden="true"></span>
                <span>
                  <span className="block text-xl font-semibold leading-none tracking-tight">App Store’dan</span>
                  <span className="block text-base font-semibold leading-tight">indirin</span>
                </span>
              </a>
            ) : (
              <div className="flex min-h-14 items-center justify-between rounded-[1rem] border border-black/8 bg-[#fbfaf7] px-4 py-3 text-ink/62">
                <span>
                  <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-ink/38">App Store</span>
                  <span className="block text-sm font-black">Yakında</span>
                </span>
                <Sparkles size={17} />
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function ContactHero() {
  return (
    <section className="relative z-10 px-5 pb-8 pt-12 sm:px-8 lg:pt-16">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-ink/45">İletişim</p>
        <h1 className="font-display text-[clamp(3rem,7vw,7rem)] font-black leading-[0.92]">
          Kısa bir mesaj bırak.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/62">
          Burada footer yok. Doğrudan formu kullanıp bize ulaşabilirsin.
        </p>
      </div>
    </section>
  );
}

function ContactForm() {
  return (
    <section className="relative z-10 px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-black/8 bg-white p-7 shadow-soft sm:p-10">
        <form className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Ad Soyad" />
            <Field label="E-posta" type="email" />
          </div>
          <Field label="Konu" />
          <label className="grid gap-2 text-sm font-semibold text-ink/70">
            <span>Mesaj</span>
            <textarea
              rows="7"
              className="rounded-[1.2rem] border border-black/8 bg-[#fbfaf7] px-4 py-4 text-base text-ink outline-none transition placeholder:text-ink/28 focus:border-black/20"
              placeholder="Mesajınızı yazın"
            />
          </label>
          <button
            type="submit"
            className="mt-2 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-ink px-7 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-black/85"
          >
            Gönder
            <ArrowRight size={16} />
          </button>
        </form>
      </div>
    </section>
  );
}

function DelitHero() {
  return (
    <section className="relative z-10 px-5 pb-10 pt-12 sm:px-8 lg:pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-black/8 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-ink/55 shadow-soft">
            Del-it
          </p>
          <h1 className="font-display text-[clamp(3.2rem,7vw,7.8rem)] font-black leading-[0.9]">
            Fotoğraf temizliğini
            <span className="block bg-gradient-to-r from-sky-500 via-rose-500 to-violet-500 bg-clip-text text-transparent">
              daha akıllı yap.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/65">
            Del-it, galeride biriken benzer fotoğrafları bulur, gereksiz kareleri görünür kılar ve depolama
            alanı kazanmayı sakin bir akışla hissettirir.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {['Soft UI', 'Akıllı analiz', 'Temiz galeri'].map((item) => (
              <span key={item} className="rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-semibold text-ink/65 shadow-soft">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="absolute inset-x-12 top-12 h-44 rounded-full bg-gradient-to-r from-sky-200/70 via-rose-200/60 to-violet-200/70 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-black/8 bg-white p-5 shadow-glow">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-sky-100 via-white to-rose-100 p-5">
              <div className="rounded-[1.3rem] border border-black/8 bg-white/90 p-5 shadow-soft">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={product.logo} alt="Del-it logosu" className="h-16 w-16 rounded-[1rem] object-cover" />
                    <div>
                      <p className="font-display text-2xl font-black">Del-it</p>
                      <p className="text-sm text-ink/55">Photo cleanup</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-black/8 bg-white px-3 py-1 text-xs font-semibold text-ink/55">
                    product
                  </span>
                </div>
                <div className="mt-5 grid gap-3">
                  {['Benzer kare tarama', 'Alan kazanımı', 'Akıllı seçim önerileri'].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-full border border-black/8 bg-[#fbfaf7] px-4 py-3 text-sm text-ink/72">
                      <Check size={16} className="text-violet-500" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DelitAppStoreCta() {
  return (
    <section className="relative z-10 px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] border border-black/8 bg-white p-4 shadow-glow">
          <div className="grid gap-6 rounded-[1.6rem] bg-gradient-to-br from-sky-100 via-white to-rose-100 p-6 sm:p-8 lg:grid-cols-[auto_1fr_auto] lg:items-center">
            <div className="mx-auto grid h-24 w-24 place-items-center rounded-[1.5rem] bg-white shadow-soft lg:mx-0">
              <img
                src={product.logo}
                alt="Del-It uygulama logosu"
                className="h-20 w-20 rounded-[1.25rem] object-cover"
              />
            </div>
            <div className="text-center lg:text-left">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-ink/45">App Store</p>
              <h2 className="mt-3 font-display text-3xl font-black leading-tight sm:text-4xl">
                Del-It App Store’da yayında
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-ink/65 sm:text-lg">
                Fotoğraflarını hızlıca gözden geçir, gereksizleri güvenli Del-It çöp kutusuna ekle ve son
                onayla temizle.
              </p>
              <p className="mt-4 inline-flex rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-semibold text-ink/65">
                Fotoğrafların cihazında kalır.
              </p>
            </div>
            <a
              href="https://apps.apple.com/us/app/del-it/id6780890586"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Del-It uygulamasını App Store’da aç"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-ink px-7 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-black/85"
            >
              App Store’da İndir
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function DelitDetails() {
  const features = [
    'Benzer fotoğrafları otomatik gruplar.',
    'Gereksiz kareleri görünür hale getirir.',
    'Depolama kazanımını anlaşılır özetlerle sunar.',
  ];

  return (
    <section className="relative z-10 px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-7xl grid gap-5 md:grid-cols-3">
        {features.map((feature, index) => (
          <article key={feature} className="rounded-[1.4rem] border border-black/8 bg-white p-6 shadow-soft">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-white">
              <span className="text-sm font-bold">{String(index + 1).padStart(2, '0')}</span>
            </div>
            <p className="mt-8 text-base leading-7 text-ink/72">{feature}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function DelitGallery() {
  const cards = [
    ['Tarama', 'Akıllı analiz başlıyor'],
    ['Karşılaştırma', 'Benzer kareler yan yana'],
    ['Sonuç', 'Kazanılan alan özeti'],
  ];

  return (
    <section className="relative z-10 px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-ink/45">Galeri</p>
            <h2 className="font-display text-4xl font-black leading-none sm:text-6xl">
              Ürünün ekran hissi.
            </h2>
          </div>
          <p className="max-w-xl text-ink/58">
            Logo, renkler ve kart dili ürünün yumuşak hissini koruyacak şekilde kurgulandı.
          </p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {cards.map(([title, note]) => (
            <article key={title} className="overflow-hidden rounded-[1.5rem] border border-black/8 bg-white p-4 shadow-soft">
              <div className="relative aspect-[0.82] overflow-hidden rounded-[1.25rem] bg-gradient-to-br from-sky-100 via-white to-rose-100">
                <div className="absolute inset-5 rounded-[1.2rem] border border-black/8 bg-white/80 p-5 backdrop-blur-md">
                  <div className="flex h-full flex-col justify-between rounded-[1rem] border border-black/8 bg-white p-4 shadow-soft">
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-ink/45">
                      <span>{title}</span>
                      <Sparkles size={16} />
                    </div>
                    <div className="rounded-[1rem] border border-black/8 bg-[#fbfaf7] p-4">
                      <p className="text-sm font-semibold text-ink">{note}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DelitFaq() {
  const faqs = [
    ['Del-it fotoğrafları otomatik siliyor mu?', 'Hayır. Uygulama önerir, son karar kullanıcıya aittir.'],
    ['Benzer kareler nasıl bulunuyor?', 'Görsel benzerlik, tekrar ve kalite sinyalleri birlikte değerlendirilir.'],
    ['Bu ürün ne çözüyor?', 'Dağınık galeri içinden gereksiz kareleri ayıklamayı kolaylaştırıyor.'],
  ];

  return (
    <section className="relative z-10 px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-ink/45">FAQ</p>
        <div className="grid gap-4">
          {faqs.map(([q, a]) => (
            <details key={q} className="group rounded-[1.4rem] border border-black/8 bg-white p-6 shadow-soft">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl font-black text-ink">
                <span>{q}</span>
                <ChevronRight className="transition duration-300 group-open:rotate-90" size={20} />
              </summary>
              <p className="mt-4 max-w-4xl text-base leading-8 text-ink/62">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function DelitLegalLinks() {
  return (
    <section className="relative z-10 px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-[1.6rem] border border-black/8 bg-white p-5 shadow-soft">
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/del-it/gizlilik-politikasi"
              className="inline-flex h-12 items-center justify-center rounded-full border border-black/8 bg-white px-5 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-[#fbfaf7]"
            >
              Gizlilik Politikası
            </a>
            <a
              href="/del-it/kullanim-sartlari"
              className="inline-flex h-12 items-center justify-center rounded-full border border-black/8 bg-[#fbfaf7] px-5 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-white"
            >
              Kullanım Şartları
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function DelitPrivacyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-paper text-ink">
      <Background />
      <Header />
      <LegalHero
        eyebrow="Gizlilik Politikası"
        title="Del-It Gizlilik Politikası"
        description="Son güncelleme: 19 Haziran 2026. Uygulama: Del-It. İletişim: theapdesign26@gmail.com"
      />
      <LegalContent sections={privacySections} />
      <DelitLegalLinks />
      <Footer />
    </main>
  );
}

function DelitTermsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-paper text-ink">
      <Background />
      <Header />
      <LegalHero
        eyebrow="Kullanım Şartları"
        title="Del-It Kullanım Şartları"
        description="Son güncelleme: 19 Haziran 2026. Uygulama: Del-It. İletişim: theapdesign26@gmail.com"
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
  return (
    <section className="relative z-10 px-5 pb-10 pt-12 sm:px-8 lg:pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-black/8 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-ink/55 shadow-soft">
            XOX Taktik Arena
          </p>
          <h1 className="font-display text-[clamp(3.2rem,7vw,7.8rem)] font-black leading-[0.9]">
            Beraberliksiz
            <span className="block bg-gradient-to-r from-sky-500 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
              X-O-X stratejisi.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/65">
            Klasik X-O hissini koruyan, 3 taş limiti ve eski taş silinme mekaniğiyle her turu daha hızlı,
            dinamik ve taktik hale getiren 3x3 mobil strateji oyunu.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {['3 taş limiti', 'Beraberlik yok', 'Neon temalar'].map((item) => (
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
  const rules = [
    'Tahta 3x3’tür ve oyuncular sırayla boş hücrelere X veya O koyar.',
    'Her oyuncunun tahtada aynı anda en fazla 3 taşı bulunabilir.',
    '4. taş koyulduğunda, aynı oyuncunun en eski taşı otomatik olarak silinir.',
    'Yatay, dikey veya çapraz 3’lü çizgi yapan oyuncu turu kazanır.',
  ];

  return (
    <section className="relative z-10 px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-ink/45">Oyun Mantığı</p>
            <h2 className="font-display text-4xl font-black leading-none sm:text-6xl">
              Klasik X-O, daha hızlı.
            </h2>
          </div>
          <p className="max-w-xl text-ink/58">
            Eski taş silinme mekaniği oyunu tıkamaz, beraberliği ortadan kaldırır ve her turda kazanan üretir.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {rules.map((rule, index) => (
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
  const modes = [
    ['Tek Oyunculu Mod', 'Kolay, orta ve zor zorluk seçenekleriyle yapay zekaya karşı hızlı maçlar.'],
    ['İki Kişilik Mod', 'Aynı cihazda iki oyuncu, oyuncu isimleri ve hedef skor seçimiyle karşılıklı oynar.'],
    ['Tema ve Ses Sistemi', 'Neon, Klasik, Kırmızı, Mavi ve Yeşil tema seçenekleri; ses, müzik ve hamle efektleri.'],
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
  return (
    <section className="relative z-10 px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-[1.6rem] border border-black/8 bg-white p-5 shadow-soft">
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/xox-taktik-arena/gizlilik-politikasi"
              className="inline-flex h-12 items-center justify-center rounded-full border border-black/8 bg-white px-5 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-[#fbfaf7]"
            >
              Gizlilik Politikası
            </a>
            <a
              href="/xox-taktik-arena/kullanim-sartlari"
              className="inline-flex h-12 items-center justify-center rounded-full border border-black/8 bg-[#fbfaf7] px-5 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-white"
            >
              Kullanım Şartları
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function XoxPrivacyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-paper text-ink">
      <Background />
      <Header />
      <LegalHero
        eyebrow="Gizlilik Politikası"
        title="X-O-X Gizlilik Politikası"
        description="Yürürlük Tarihi: 24 Haziran 2026. Geliştirici: AP Design. İletişim: theapdesign26@gmail.com"
      />
      <LegalContent sections={xoxPrivacySections} />
      <XoxLegalLinks />
      <Footer />
    </main>
  );
}

function XoxTermsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-paper text-ink">
      <Background />
      <Header />
      <LegalHero
        eyebrow="Kullanım Şartları"
        title="X-O-X Kullanım Şartları"
        description="Yürürlük Tarihi: 24 Haziran 2026. Geliştirici: AP Design. İletişim: theapdesign26@gmail.com"
      />
      <LegalContent sections={xoxTermsSections} />
      <XoxLegalLinks />
      <Footer />
    </main>
  );
}

function GameboxPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-paper text-ink">
      <Background />
      <Header />
      <GameboxHero />
      <GameboxGames />
      <GameboxSystems />
      <GameboxLegalLinks />
      <Footer />
    </main>
  );
}

function GameboxHero() {
  return (
    <section className="relative z-10 px-5 pb-10 pt-12 sm:px-8 lg:pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-black/8 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-ink/55 shadow-soft">
            Gamebox
          </p>
          <h1 className="font-display text-[clamp(3.2rem,7vw,7.8rem)] font-black leading-[0.9]">
            Tek kutuda
            <span className="block bg-gradient-to-r from-emerald-500 via-amber-400 to-rose-500 bg-clip-text text-transparent">
              mini oyunlar.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/65">
            Gamebox, iOS için hazırlanan pastel arcade hissinde bir mini oyun merkezidir. Kısa turlu oyunlar,
            coin sistemi, ayarlar, ödüllü reklamlar ve uygulama içi satın alma altyapısı tek uygulamada buluşur.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {['11 mini oyun', 'Coin sistemi', 'Türkçe / İngilizce', 'App Store hazırlığında'].map((item) => (
              <span key={item} className="rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-semibold text-ink/65 shadow-soft">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[620px]">
          <div className="absolute inset-x-8 top-10 h-48 rounded-full bg-gradient-to-r from-emerald-300/70 via-amber-200/70 to-rose-300/70 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-black/8 bg-white p-4 shadow-glow">
            <div className="rounded-[1.6rem] bg-gradient-to-br from-[#13192a] via-[#1d2a54] to-[#4b59f6] p-6">
              <div className="mx-auto grid max-w-[22rem] place-items-center rounded-[1.4rem] border border-white/15 bg-white/10 p-8 shadow-soft backdrop-blur-md">
                <img src={gameboxProduct.darkLogo} alt="Gamebox logosu" className="h-auto w-full max-w-[16rem]" />
              </div>
              <div className="mt-5 grid grid-cols-4 gap-3">
                {gameboxGames.slice(0, 8).map(([title, image]) => (
                  <div key={title} className="overflow-hidden rounded-[1rem] border border-white/15 bg-white/10 p-1">
                    <img src={image} alt={`${title} oyun kapağı`} className="aspect-square h-full w-full rounded-[0.8rem] object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GameboxGames() {
  return (
    <section className="relative z-10 px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-ink/45">Oyunlar</p>
            <h2 className="font-display text-4xl font-black leading-none sm:text-6xl">
              Kare kare oyun vitrini.
            </h2>
          </div>
          <p className="max-w-xl text-ink/58">
            Kapaklar ürün sayfasında kare mockup olarak kırpıldı; tek bakışta Gamebox’ın oyun kutusu hissini verir.
          </p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gameboxGames.map(([title, image, description]) => (
            <article key={title} className="group overflow-hidden rounded-[1.5rem] border border-black/8 bg-white p-3 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-glow">
              <div className="overflow-hidden rounded-[1.2rem] bg-[#fbfaf7]">
                <img src={image} alt={`${title} oyun kapağı`} className="aspect-square h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-3">
                <h3 className="font-display text-2xl font-black">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/62">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GameboxSystems() {
  const systems = [
    ['Pastel arcade hub', 'Beyaz ve koyu tema, yumuşak gradientler, büyük dokunma alanları ve kısa oyun akışları.'],
    ['Coin ve StoreKit', 'Coin paketleri, reklam kaldırma satın alımı ve satın alma geri yükleme akışı App Store altyapısına göre hazırlanır.'],
    ['Reklam dengesi', 'Geçiş reklamları uygun anlarda sınırlandırılır; ödüllü reklamlar kullanıcı isteğiyle yardımcı seçenekler için kullanılabilir.'],
    ['Ayarlar', 'Dil, tema, müzik, ses efekti, FPS tercihi, gizlilik politikası ve kullanım şartları tek ayar ekranında toplanır.'],
  ];

  return (
    <section className="relative z-10 px-5 py-10 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
        {systems.map(([title, text], index) => (
          <article key={title} className="rounded-[1.5rem] border border-black/8 bg-white p-6 shadow-soft">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-emerald-400 via-amber-300 to-rose-400 text-sm font-black text-white">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="font-display text-2xl font-black">{title}</h3>
            </div>
            <p className="mt-5 text-base leading-7 text-ink/65">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function GameboxLegalLinks() {
  return (
    <section className="relative z-10 px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-[1.6rem] border border-black/8 bg-white p-5 shadow-soft">
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/gamebox/gizlilik-politikasi"
              className="inline-flex h-12 items-center justify-center rounded-full border border-black/8 bg-white px-5 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-[#fbfaf7]"
            >
              Gizlilik Politikası
            </a>
            <a
              href="/gamebox/kullanim-sartlari"
              className="inline-flex h-12 items-center justify-center rounded-full border border-black/8 bg-[#fbfaf7] px-5 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:bg-white"
            >
              Kullanım Şartları
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function GameboxPrivacyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-paper text-ink">
      <Background />
      <Header />
      <LegalHero
        eyebrow="Gizlilik Politikası"
        title="Gamebox Gizlilik Politikası"
        description="Son güncelleme: 1 Temmuz 2026. Geliştirici: AP Design. İletişim: theapdesign26@gmail.com"
      />
      <LegalContent sections={gameboxPrivacySections} />
      <GameboxLegalLinks />
      <Footer />
    </main>
  );
}

function GameboxTermsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-paper text-ink">
      <Background />
      <Header />
      <LegalHero
        eyebrow="Kullanım Şartları"
        title="Gamebox Kullanım Şartları"
        description="Son güncelleme: 1 Temmuz 2026. Geliştirici: AP Design. İletişim: theapdesign26@gmail.com"
      />
      <LegalContent sections={gameboxTermsSections} />
      <GameboxLegalLinks />
      <Footer />
    </main>
  );
}

function LegalHero({ eyebrow, title, description }) {
  return (
    <section className="relative z-10 px-5 pb-6 pt-12 sm:px-8 lg:pt-16">
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

function Footer() {
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
              Kısa, eğlenceli ve tekrar oynanabilir deneyimler.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-ink/62">
              Mobil uygulamalar ve mini oyunlar geliştiriyoruz. Amacımız öğrenmesi kolay, geri dönmesi keyifli ürünler üretmek.
            </p>
          </div>

          <div className="grid gap-5 lg:justify-items-end">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-ink/45">İletişim</p>
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
              <a href="/" className="rounded-full border border-black/8 bg-white px-4 py-2 transition hover:bg-[#fbfaf7]">Anasayfa</a>
              <a href="/products" className="rounded-full border border-black/8 bg-white px-4 py-2 transition hover:bg-[#fbfaf7]">Uygulamalar</a>
              <a href="/contact" className="rounded-full border border-black/8 bg-white px-4 py-2 transition hover:bg-[#fbfaf7]">İletişim</a>
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
    title: '1. Fotoğraf ve video erişimi',
    paragraphs: [
      'Del-It, fotoğraf ve videolarını gösterebilmek için iOS Fotoğraflar erişimi ister. Bu izin yalnızca sen onay verdiğinde kullanılır.',
      'Del-It fotoğraf ve videolarını cihaz içinde işler. Fotoğraf ve video içeriklerin Del-It sunucularına yüklenmez. Del-It, fotoğraflarını reklam hedefleme için kullanmaz ve üçüncü taraflarla paylaşmaz.',
      'iOS’un “Sınırlı Fotoğraf Erişimi” özelliğini kullanırsan Del-It yalnızca seçtiğin fotoğraf ve videolara erişebilir. Fotoğraf erişimini istediğin zaman iOS Ayarlar uygulamasından değiştirebilirsin.',
    ],
  },
  {
    title: '2. Del-It çöp kutusu ve silme işlemi',
    paragraphs: [
      'Sola kaydırdığın veya “Çöpe Ekle” dediğin fotoğraf ve videolar hemen sistemden silinmez. Bu öğeler önce uygulama içindeki Del-It çöp kutusuna eklenir.',
      'Kalıcı silme işlemi yalnızca Del-It çöp kutusunda açıkça onay verdiğinde başlatılır. Silme işlemi iOS PhotoKit sistemi üzerinden yapılır. Bu işlemden sonra iOS Photos’un kendi sistem davranışları geçerli olabilir.',
      'Del-It çöp kutusu, iOS Fotoğraflar uygulamasındaki “Son Silinenler” alanıyla aynı şey değildir. Del-It çöp kutusu, uygulama içinde son kararını vermen için kullanılan güvenli bir bekleme alanıdır.',
    ],
  },
  {
    title: '3. Yerel olarak saklanan bilgiler',
    paragraphs: [
      'Del-It, çöp kutusuna eklediğin öğeleri takip edebilmek için yalnızca gerekli yerel tanımlayıcıları cihazında saklayabilir. Fotoğraf veya video dosyalarının kopyası uygulama içine kalıcı olarak kaydedilmez.',
      'Uygulama deneyimini sürdürebilmek için bazı ayarlar, istatistikler, kullanım hakları, onboarding durumu ve abonelik durumu gibi bilgiler cihazında yerel olarak saklanabilir.',
    ],
  },
  {
    title: '4. Analitik ve kişisel galeri bilgileri',
    paragraphs: [
      'Del-It, fotoğraf içeriği, dosya adı, EXIF konumu, yüz bilgisi, nesne tanıma sonucu veya kişisel galeri detaylarını analitik amaçla kullanmaz.',
      'Fotoğrafların ve videoların reklam hedefleme için kullanılmaz.',
    ],
  },
  {
    title: '5. Reklamlar',
    paragraphs: [
      'Del-It’in ücretsiz sürümünde Google AdMob üzerinden ödüllü reklamlar veya native reklam alanları gösterilebilir.',
      'Reklamlar, ücretsiz kullanım haklarını desteklemek ve uygulamanın sürdürülebilirliğini sağlamak için kullanılır. Örneğin, ücretsiz temizlik hakkın bittiğinde ödüllü reklam izleyerek ek hak kazanabilirsin.',
      'Del-It, fotoğraf içeriğini, dosya adlarını, EXIF konumunu veya kişisel galeri bilgilerini AdMob’a göndermez. Ancak Google Mobile Ads SDK, reklam gösterimi, güvenlik, ölçüm, hata ayıklama veya sahtekârlık önleme gibi amaçlarla bazı teknik verileri işleyebilir.',
      'Del-It Plus kullanıcısıysan reklam gösterilmez ve reklam isteği yapılmaz.',
    ],
  },
  {
    title: '6. Uygulama içi satın almalar ve abonelikler',
    paragraphs: [
      'Del-It Plus abonelikleri Apple App Store üzerinden yönetilir. Satın alma, yenileme, iptal ve geri yükleme işlemleri Apple hesabın üzerinden yapılır.',
      'Del-It, premium durumunu doğrulamak için Apple StoreKit altyapısından gelen abonelik yetkisini kontrol eder. Ödeme bilgilerin Del-It tarafından işlenmez veya saklanmaz.',
      'Otomatik yenilenen abonelikler, Apple hesabın üzerinden iptal edilmediği sürece yenilenebilir. Abonelik fiyatları, dönemleri ve koşulları satın alma ekranında veya App Store’da gösterilir.',
    ],
  },
  {
    title: '7. Bildirim izni',
    paragraphs: [
      'Del-It, isteğe bağlı olarak bildirim izni isteyebilir. Bildirim izni vermezsen temel fotoğraf temizleme özelliklerini kullanmaya devam edebilirsin.',
      'Bildirim iznini istediğin zaman iOS Ayarlar uygulamasından kapatabilirsin.',
    ],
  },
  {
    title: '8. Çocukların gizliliği',
    paragraphs: ['Del-It genel kullanıcılar için tasarlanmıştır. Uygulama bilerek çocuklardan kişisel veri toplamayı hedeflemez.'],
  },
  {
    title: '9. Üçüncü taraf servisler',
    paragraphs: [
      'Del-It aşağıdaki üçüncü taraf servislerden yararlanabilir: Apple StoreKit: Uygulama içi satın almalar ve abonelikler için. Google AdMob: Ücretsiz kullanıcılar için reklam gösterimi için.',
      'Bu servislerin kendi gizlilik politikaları ve veri işleme kuralları geçerli olabilir.',
    ],
  },
  {
    title: '10. Kullanıcı hakları',
    paragraphs: [
      'Fotoğraf erişimini iOS Ayarlar üzerinden her zaman değiştirebilirsin. Del-It hesabı oluşturmayı gerektirmediği için uygulama içinde ayrı bir hesap silme işlemi bulunmaz.',
      'Uygulamayı cihazından kaldırdığında uygulamaya ait yerel veriler de iOS sistem davranışına göre silinebilir.',
      'Gizlilik veya güvenlik hakkında soru sormak için bizimle iletişime geçebilirsin: theapdesign26@gmail.com',
    ],
  },
  {
    title: '11. Politika değişiklikleri',
    paragraphs: ['Bu Gizlilik Politikası zaman zaman güncellenebilir. Önemli değişikliklerde uygulama içinde veya web sitemizde güncel metin yayınlanabilir.'],
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

const gameboxPrivacySections = [
  {
    title: 'Genel bilgi',
    paragraphs: [
      'Bu Gizlilik Politikası, Gamebox mobil uygulamasını (“Gamebox”, “uygulama”, “biz”) kullandığınızda hangi bilgilerin işlenebileceğini, bu bilgilerin nasıl kullanıldığını ve kullanıcı haklarınızı açıklar.',
      'Gamebox, iOS için geliştirilmiş bir mini oyun merkezidir. Uygulama; mini oyunlar, ayarlar, coin dengesi, uygulama içi satın almalar, reklam kaldırma seçeneği, ödüllü reklamlar, dil seçenekleri ve tema tercihleri gibi özellikler sunar.',
    ],
  },
  {
    title: '1. Topladığımız veya işlediğimiz bilgiler',
    paragraphs: [
      'Gamebox doğrudan adınız, e-posta adresiniz, telefon numaranız veya açık adresiniz gibi kişisel bilgileri istemez.',
      'Ancak uygulamanın çalışması için bazı bilgiler cihazınızda veya kullanılan üçüncü taraf hizmetler aracılığıyla işlenebilir.',
    ],
  },
  {
    title: '1.1. Cihazda saklanan uygulama tercihleri',
    paragraphs: [
      'Gamebox; dil tercihi, açık/koyu tema tercihi, müzik ve ses efekti seviyeleri, FPS tercihi, coin bakiyesi, reklamların kaldırılıp kaldırılmadığı bilgisi ve gelecekte açılabilecek oyun kimlikleri veya kilit durumları gibi tercihleri cihazınızda saklayabilir.',
      'Bu bilgiler, uygulama deneyiminizin korunması ve uygulamayı tekrar açtığınızda tercihlerinizin devam etmesi için kullanılır. Gamebox’ta bu kalıcı veriler PersistenceService üzerinden yönetilir ve mevcut durumda UserDefaults altyapısı ile saklanır.',
    ],
  },
  {
    title: '1.2. Uygulama içi satın alma bilgileri',
    paragraphs: [
      'Gamebox, App Store üzerinden uygulama içi satın almalar sunabilir. Satın alma işlemleri Apple’ın StoreKit altyapısı üzerinden gerçekleştirilir.',
      'Gamebox içinde coin paketleri ve reklamları kaldırma satın alımı bulunabilir. Coin paketleri tüketilebilir ürünlerdir; reklam kaldırma ise geri yüklenebilir, tüketilemeyen bir satın alımdır.',
      'Satın alma işlemlerinin ödeme ve faturalandırma kısmı Apple tarafından yürütülür. Gamebox, kredi kartı bilgilerinizi veya ödeme yöntemlerinizi doğrudan görmez, toplamaz veya saklamaz.',
    ],
  },
  {
    title: '1.3. Reklamlarla ilgili bilgiler',
    paragraphs: [
      'Gamebox’ta geçiş reklamları ve ödüllü reklamlar bulunabilir. Reklamlar üçüncü taraf reklam sağlayıcıları aracılığıyla gösterilebilir.',
      'Reklam sağlayıcıları; reklam gösterimi, reklam performansı, sahtekarlık önleme, reklam sıklığı, cihaz bilgileri veya reklam tanımlayıcıları gibi bilgileri kendi gizlilik politikalarına göre işleyebilir.',
      'Oyun sonu ekranlarında geçiş reklamı gösterilmez. Duraklatma veya oyundan çıkış gibi uygun anlarda geçiş reklamı gösterilebilir. Geçiş reklamları belirli bir sıklık kuralına bağlıdır.',
      '“Reklamları Kaldır” satın alımı geçiş reklamlarını devre dışı bırakır. Ödüllü reklamlar, reklam kaldırma satın alınmış olsa bile kullanıcı tarafından isteğe bağlı olarak kullanılabilir.',
    ],
  },
  {
    title: '1.4. Coin sistemi',
    paragraphs: [
      'Gamebox, oyun içi coin bakiyesi kullanabilir. Coinler; satın alma sonrası eklenebilir, oyun içi bazı yardımcı işlemler için harcanabilir veya gelecekte oyun kilidi açma gibi özelliklerde kullanılabilir.',
      'Coin bakiyesi cihazda saklanabilir ve uygulama içindeki deneyimi yönetmek için kullanılır.',
    ],
  },
  {
    title: '1.5. Oyun ve ayar bilgileri',
    paragraphs: [
      'Gamebox, uygulama deneyiminizi yönetmek için ayarlarınızı kullanır. Bunlar arasında tema, ses seviyesi, dil, FPS tercihi, reklam kaldırma durumu, gizlilik politikası ve kullanım şartları bağlantıları bulunabilir.',
    ],
  },
  {
    title: '2. Bilgileri hangi amaçlarla kullanıyoruz?',
    paragraphs: [
      'Bilgiler; uygulamayı çalıştırmak, oyun deneyiminizi sunmak, tercihlerinizi hatırlamak, dil/tema/ses/FPS ayarlarınızı korumak, coin bakiyenizi yönetmek, satın alımları doğrulamak ve geri yüklemek için kullanılabilir.',
      'Bilgiler ayrıca reklamları göstermek veya reklam kaldırma satın alımını uygulamak, ödüllü reklamlar karşılığında uygulama içi avantajlar sunmak, uygulama performansını ve güvenliğini iyileştirmek, App Store gerekliliklerine ve yasal yükümlülüklere uymak için kullanılabilir.',
    ],
  },
  {
    title: '3. Üçüncü taraf hizmetler',
    paragraphs: [
      'Gamebox; uygulama içi satın almalar ve satın alımların geri yüklenmesi için Apple App Store / StoreKit, reklam gösterimi ve ödüllü reklamlar için Google Mobile Ads veya benzeri reklam sağlayıcıları kullanabilir.',
      'Bu üçüncü taraflar, kendi hizmetlerini sunmak amacıyla belirli bilgileri işleyebilir. Üçüncü taraf hizmetlerin veri işleme faaliyetleri, ilgili hizmet sağlayıcıların kendi gizlilik politikalarına tabidir.',
    ],
  },
  {
    title: '4. Çocukların gizliliği',
    paragraphs: [
      'Gamebox genel kullanıcı kitlesine yönelik eğlence amaçlı bir mini oyun uygulamasıdır. Uygulama bilerek çocuklardan ad, e-posta, telefon numarası veya adres gibi kişisel bilgiler toplamaz.',
      'Uygulamanın çocuklara yönelik olarak yayınlanması veya çocukların yoğun şekilde kullanabileceği bir kategoriye alınması halinde, App Store gizlilik beyanları, reklam ayarları ve geçerli çocuk gizliliği kuralları ayrıca dikkatle değerlendirilmelidir.',
    ],
  },
  {
    title: '5. Verilerin saklanması',
    paragraphs: [
      'Cihazda saklanan ayarlar ve uygulama içi durum bilgileri, uygulama cihazda kaldığı veya ilgili bilgiler kullanıcı tarafından sıfırlanmadığı sürece saklanabilir.',
      'Satın alma geçmişi ve ödeme bilgileri Apple tarafından kendi sistemlerinde saklanır. Gamebox yalnızca satın alım durumunu uygulama özelliklerini etkinleştirmek için kullanır.',
    ],
  },
  {
    title: '6. Verilerin paylaşılması',
    paragraphs: [
      'Gamebox, kişisel bilgilerinizi satmaz.',
      'Ancak reklam gösterimi için reklam sağlayıcılarıyla, satın alma doğrulaması için Apple altyapısıyla, yasal yükümlülüklerin yerine getirilmesi gerektiğinde veya uygulama güvenliğini ve kötüye kullanım önlemeyi sağlamak için gerekli olduğunda bazı bilgiler işlenebilir veya paylaşılabilir.',
    ],
  },
  {
    title: '7. Kullanıcı hakları',
    paragraphs: [
      'Bulunduğunuz ülke veya bölgeye bağlı olarak hakkınızda işlenen bilgilere erişme, yanlış bilgilerin düzeltilmesini isteme, belirli bilgilerin silinmesini isteme, veri işlemeye itiraz etme ve rızaya dayalı işlemlerde rızanızı geri çekme haklarına sahip olabilirsiniz.',
      'Gamebox çoğu kullanıcı tercihini cihaz üzerinde sakladığı için, uygulamayı silmek veya cihaz ayarlarından uygulama verilerini temizlemek bazı yerel bilgileri kaldırabilir.',
    ],
  },
  {
    title: '8. Reklam takibi ve cihaz ayarları',
    paragraphs: [
      'iOS cihazınızda reklam takip tercihlerinizi Apple’ın gizlilik ayarları üzerinden yönetebilirsiniz. Reklam tanımlayıcıları ve takip izinleri, cihazınızın işletim sistemi ayarlarına ve üçüncü taraf reklam sağlayıcının uygulamalarına bağlıdır.',
    ],
  },
  {
    title: '9. Güvenlik',
    paragraphs: [
      'Gamebox, uygulama içindeki bilgilerin korunması için makul teknik ve organizasyonel önlemler almaya çalışır. Ancak hiçbir elektronik saklama veya iletim yöntemi tamamen güvenli değildir.',
    ],
  },
  {
    title: '10. Uluslararası veri aktarımları',
    paragraphs: [
      'Üçüncü taraf hizmet sağlayıcıları, bilgileri bulunduğunuz ülke dışında işleyebilir. Bu durum, reklam sağlayıcıları veya Apple hizmetleri gibi küresel altyapılar için geçerli olabilir.',
    ],
  },
  {
    title: '11. Bu politikadaki değişiklikler',
    paragraphs: [
      'Bu Gizlilik Politikası zaman zaman güncellenebilir. Güncel sürüm uygulama içinde veya ilgili web sayfasında yayınlanır. Politikanın güncellenmesinden sonra uygulamayı kullanmaya devam etmeniz, güncel politikayı kabul ettiğiniz anlamına gelebilir.',
    ],
  },
  {
    title: '12. İletişim',
    paragraphs: [
      'Geliştirici / Şirket Adı: AP Design',
      'E-posta: theapdesign26@gmail.com',
      'Ülke: Türkiye',
    ],
  },
];

const gameboxTermsSections = [
  {
    title: 'Genel bilgi',
    paragraphs: [
      'Bu Kullanım Şartları, Gamebox mobil uygulamasını (“Gamebox”, “uygulama”, “biz”) kullanımınıza ilişkin kuralları ve koşulları açıklar. Uygulamayı indirerek, açarak veya kullanarak bu şartları kabul etmiş olursunuz.',
      'Bu şartları kabul etmiyorsanız Gamebox’ı kullanmamalısınız.',
    ],
  },
  {
    title: '1. Hizmetin tanımı',
    paragraphs: [
      'Gamebox, iOS için geliştirilmiş bir mini oyun merkezidir. Uygulama içinde birden fazla bağımsız mini oyun, ana ekran oyun listesi, oyun detay ekranları, ayarlar, coin bakiyesi, reklamlar, ödüllü reklamlar, uygulama içi satın almalar ve reklam kaldırma seçeneği bulunabilir.',
      'Gamebox’ın mevcut oynanabilir oyunları arasında Sky Bird, Air Hockey, Peak, Slider Puzzle, Memory Flip, Quick Tap, Numbers, Word Hunt, Sand Party, Chess ve Fruit Catch gibi mini oyunlar yer alabilir.',
    ],
  },
  {
    title: '2. Uygun kullanım',
    paragraphs: [
      'Gamebox’ı yalnızca yasal, kişisel ve eğlence amaçlı kullanabilirsiniz.',
      'Uygulamayı yasa dışı amaçlarla kullanmak, tersine mühendislik yapmak, kopyalamak, değiştirmek, izinsiz dağıtmak, güvenlik/reklam/satın alma/coin sistemini kötüye kullanmak, hile veya bot kullanmak, uygulamanın normal çalışmasını bozmak, üçüncü taraf haklarını ihlal etmek ve uygulama içeriğini izinsiz ticari amaçlarla kullanmak yasaktır.',
    ],
  },
  {
    title: '3. Kullanıcı hesabı',
    paragraphs: [
      'Gamebox mevcut yapısı itibarıyla kullanıcıdan hesap oluşturmasını gerektirmeyebilir. Bazı ayarlar, coin bakiyesi, reklam kaldırma durumu ve oyun tercihleri cihaz üzerinde saklanabilir.',
      'Cihaz değişikliği, uygulamanın silinmesi veya cihaz verilerinin temizlenmesi durumunda yerel olarak saklanan bazı bilgiler kaybolabilir. Satın alımların geri yüklenmesi Apple App Store altyapısı üzerinden yapılabilir.',
    ],
  },
  {
    title: '4. Uygulama içi satın almalar',
    paragraphs: [
      'Gamebox, Apple App Store üzerinden uygulama içi satın almalar sunabilir. Satın alınabilecek ürünler küçük coin paketi, orta coin paketi, büyük coin paketi, mega coin paketi ve reklamları kaldırma satın alımını içerebilir.',
      'Coin paketleri tüketilebilir ürünlerdir. Reklam kaldırma satın alımı tüketilemeyen bir üründür ve desteklenen durumlarda geri yüklenebilir. Satın alma işlemleri StoreKit 2 altyapısı üzerinden yönetilir.',
      'Satın alma işlemlerinde ödeme, faturalandırma, iade süreçleri ve ödeme yöntemi Apple’ın App Store kurallarına tabidir. Gamebox, Apple tarafından onaylanan ve doğrulanan satın alımlara göre uygulama içi hakları etkinleştirir.',
    ],
  },
  {
    title: '5. Coinler ve sanal öğeler',
    paragraphs: [
      'Gamebox içinde coin sistemi bulunabilir. Coinler uygulama içinde yardımcı işlemler, oyun içi avantajlar, gelecekte oyun kilidi açma veya benzeri özellikler için kullanılabilir.',
      'Coinler gerçek para, elektronik para, kripto varlık veya finansal değer temsil etmez. Coinler yalnızca Gamebox içinde kullanılabilir. Coinler nakde çevrilemez, başka kullanıcılara devredilemez ve uygulama dışında herhangi bir değere sahip değildir.',
      'Gamebox, teknik, dengeleme, güvenlik veya ürün geliştirme nedenleriyle coin kullanım kurallarını, coin gerektiren özellikleri veya oyun içi ekonomiyi değiştirebilir.',
    ],
  },
  {
    title: '6. Reklamlar',
    paragraphs: [
      'Gamebox’ta reklamlar gösterilebilir. Bu reklamlar geçiş reklamları veya kullanıcı tarafından başlatılan ödüllü reklamlar olabilir.',
      '“Reklamları Kaldır” satın alımı, geçiş reklamlarını devre dışı bırakabilir. Ancak ödüllü reklamlar, kullanıcı tarafından isteğe bağlı olarak başlatılan yardımcı seçenekler olduğu için kullanılabilir kalabilir.',
      'Reklam içerikleri üçüncü taraf reklam sağlayıcıları tarafından sunulabilir. Reklamların içeriği, hedeflemesi veya gösterimi üzerinde her zaman tam kontrolümüz olmayabilir.',
    ],
  },
  {
    title: '7. Oyun kuralları ve adil kullanım',
    paragraphs: [
      'Gamebox içindeki oyunlar eğlence amaçlıdır. Oyun skorları, ilerleme, coin harcamaları veya oyun içi avantajlar, uygulamanın teknik kurallarına göre çalışır.',
      'Hile, açık kötüye kullanımı, sistem manipülasyonu, sahte satın alma, reklam ödülü manipülasyonu veya oyun dengesini bozacak davranışlar yasaktır.',
      'Bu tür davranışların tespit edilmesi halinde, ilgili uygulama içi haklar sınırlandırılabilir, coin bakiyesi düzeltilebilir veya uygulama erişimi kısıtlanabilir.',
    ],
  },
  {
    title: '8. Fikri mülkiyet hakları',
    paragraphs: [
      'Gamebox’a ait tasarım, yazılım, oyun yapısı, görseller, arayüz, marka unsurları, metinler ve diğer içerikler ilgili hak sahiplerine aittir.',
      'Uygulamayı kullanmanız, size yalnızca kişisel, sınırlı, devredilemez ve münhasır olmayan bir kullanım hakkı verir. Uygulama veya içerikleri üzerinde mülkiyet hakkı kazanmazsınız.',
    ],
  },
  {
    title: '9. Güncellemeler ve değişiklikler',
    paragraphs: [
      'Gamebox zaman zaman güncellenebilir. Yeni oyunlar eklenebilir, mevcut oyunlar değiştirilebilir, bazı özellikler kaldırılabilir veya uygulama içi sistemler yenilenebilir.',
      'Gamebox’ın yol haritasında oyun kilidi açma kuralları, başarımlar, reklamlar, liderlik tabloları ve daha zengin ilerleme sistemleri gibi gelecekte geliştirilebilecek özellikler yer alabilir.',
      'Uygulamanın bazı özellikleri internet bağlantısı, App Store hizmetleri veya üçüncü taraf reklam hizmetlerinin çalışmasına bağlı olabilir.',
    ],
  },
  {
    title: '10. Garanti reddi',
    paragraphs: [
      'Gamebox “olduğu gibi” ve “mevcut olduğu şekilde” sunulur. Uygulamanın kesintisiz, hatasız, güvenli veya her cihazda tam uyumlu çalışacağını garanti etmeyiz.',
      'Uygulama içindeki oyunlar, skorlar, coinler, reklam ödülleri veya diğer özellikler teknik hatalardan, cihaz ayarlarından, internet bağlantısından, App Store hizmetlerinden veya üçüncü taraf hizmetlerden etkilenebilir.',
    ],
  },
  {
    title: '11. Sorumluluğun sınırlandırılması',
    paragraphs: [
      'Yürürlükteki yasaların izin verdiği ölçüde, Gamebox’ın kullanımından veya kullanılamamasından doğan dolaylı, arızi, özel, sonuçsal veya cezai zararlardan sorumlu olmayız.',
      'Bu kapsam; veri kaybı, uygulama içi ilerleme kaybı, coin kaybı, cihaz sorunları, hizmet kesintisi veya üçüncü taraf hizmetlerden kaynaklanan sorunları içerebilir.',
    ],
  },
  {
    title: '12. Üçüncü taraf hizmetler',
    paragraphs: [
      'Gamebox; Apple App Store, StoreKit, reklam sağlayıcıları ve benzeri üçüncü taraf hizmetlerle entegre olabilir. Bu hizmetlerin kullanımı ilgili üçüncü tarafların kendi şartlarına ve politikalarına tabidir.',
      'Üçüncü taraf hizmetlerin kesintileri, değişiklikleri, reklam içerikleri, ödeme süreçleri veya veri işleme uygulamalarından sorumlu değiliz.',
    ],
  },
  {
    title: '13. Gizlilik',
    paragraphs: [
      'Gamebox’ın bilgi işleme uygulamaları Gizlilik Politikası’nda açıklanır. Uygulamayı kullanarak Gizlilik Politikası’nı da okuduğunuzu ve kabul ettiğinizi beyan edersiniz.',
    ],
  },
  {
    title: '14. Kullanımın sonlandırılması',
    paragraphs: [
      'Bu şartları ihlal etmeniz, uygulamayı kötüye kullanmanız veya güvenlik riski oluşturmanız halinde Gamebox’a erişiminiz sınırlandırılabilir veya uygulama içi bazı özellikleri kullanmanız engellenebilir.',
      'Uygulamayı kullanmayı dilediğiniz zaman bırakabilir ve cihazınızdan silebilirsiniz.',
    ],
  },
  {
    title: '15. Şartlardaki değişiklikler',
    paragraphs: [
      'Bu Kullanım Şartları zaman zaman güncellenebilir. Güncel sürüm uygulama içinde veya ilgili web sayfasında yayınlanır.',
      'Değişikliklerden sonra Gamebox’ı kullanmaya devam etmeniz, güncellenmiş şartları kabul ettiğiniz anlamına gelir.',
    ],
  },
  {
    title: '16. Geçerli hukuk',
    paragraphs: [
      'Bu şartlar, aksi zorunlu yasal kurallar gerektirmedikçe Türkiye yasalarına tabi olacaktır.',
      'Tüketici hakları, bulunduğunuz ülkedeki emredici yasal düzenlemeler kapsamında saklıdır.',
    ],
  },
  {
    title: '17. İletişim',
    paragraphs: [
      'Geliştirici / Şirket Adı: AP Design',
      'E-posta: theapdesign26@gmail.com',
      'Ülke: Türkiye',
    ],
  },
];

createRoot(document.getElementById('root')).render(<App />);
