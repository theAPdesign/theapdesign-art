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
  ];

  return (
    <div className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-2">
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
        description="Yürürlük tarihi: 05.07.2026. Uygulama: Del-It."
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
