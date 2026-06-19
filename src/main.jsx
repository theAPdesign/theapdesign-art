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

function App() {
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

  return <HomePage />;
}

function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-paper text-ink">
      <Background />
      <Header />
      <HomeHero />
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
          <a href="/products" className="transition hover:text-ink">Ürünler</a>
          <a href="/contact" className="transition hover:text-ink">İletişim</a>
        </div>
      </nav>
    </header>
  );
}

function HomeHero() {
  return (
    <section className="relative z-10 px-5 pb-14 pt-12 sm:px-8 lg:pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-6 inline-flex rounded-full border border-black/8 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-ink/65 shadow-soft">
            Uygulama stüdyosu
          </p>
          <h1 className="font-display text-[clamp(3.2rem,7vw,7.4rem)] font-black leading-[0.86] tracking-tight">
            Ürünlerimiz var,
            <span className="block bg-gradient-to-r from-sky-500 via-rose-500 to-violet-500 bg-clip-text text-transparent">
              teması yumuşak.
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-ink/66 sm:text-xl">
            Şirket hikayesinden çok ürünlere odaklanan sade bir vitrin. Burada uygulamalarımızı,
            ürün detaylarını ve iletişim yolunu net biçimde görürsünüz.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/products"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-ink px-7 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-black/85"
            >
              Ürünleri Gör
              <ArrowRight size={18} />
            </a>
            <a
              href="/contact"
              className="inline-flex h-14 items-center justify-center rounded-full border border-black/8 bg-white px-7 text-sm font-bold text-ink transition hover:-translate-y-1 hover:bg-[#fbfaf7]"
            >
              İletişim
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {['Soft color system', 'Mobile-first', 'Product led'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-semibold text-ink/70 shadow-soft"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-12 overflow-hidden rounded-[2.2rem] border border-black/8 bg-white p-4 text-left shadow-glow">
            <div className="flex min-h-[300px] items-center gap-6 rounded-[1.6rem] bg-gradient-to-br from-sky-100 via-white to-rose-100 p-6 sm:p-8">
              <img src="/del-it-logo.jpg" alt="Del-it logosu" className="h-24 w-24 rounded-[1.5rem] object-cover shadow-soft sm:h-28 sm:w-28" />
              <div className="max-w-3xl">
                <p className="font-display text-3xl font-black sm:text-4xl">Del-it</p>
                <p className="mt-3 text-base leading-7 text-ink/62 sm:text-lg">
                  Benzer fotoğrafları bulur, gereksiz kareleri ayıklar, alan kazandırır.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['Clean gallery', 'Smart review', 'Soft UI'].map((item) => (
                    <span key={item} className="rounded-full border border-black/8 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink/55">
                      {item}
                    </span>
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

function ProductsHero() {
  return (
    <section className="relative z-10 px-5 pb-8 pt-12 sm:px-8 lg:pt-16">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-ink/45">Ürünler</p>
        <h1 className="font-display text-[clamp(3rem,7vw,7rem)] font-black leading-[0.92]">
          Uygulamaları burada gösteriyoruz.
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/62">
          Şu anda vitrinde Del-it yer alıyor. Karttan ürünün iç sayfasına geçebilirsin.
        </p>
      </div>
    </section>
  );
}

function ProductsGrid() {
  return (
    <section className="relative z-10 px-5 py-10 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-5">
        <a
          href="/del-it"
          className="group overflow-hidden rounded-[1.8rem] border border-black/8 bg-white p-4 shadow-soft transition duration-300 hover:-translate-y-2 hover:shadow-glow"
        >
          <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-[1.4rem] bg-gradient-to-br from-sky-100 via-white to-rose-100 p-5">
              <div className="rounded-[1.2rem] border border-black/8 bg-white p-5">
                <img src="/del-it-logo.jpg" alt="Del-it logosu" className="h-auto w-full rounded-[1rem] object-cover" />
              </div>
            </div>
            <div className="px-2 pb-2">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-ink/45">Del-it</p>
              <h2 className="mt-4 font-display text-4xl font-black">Fotoğraf temizliği</h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-ink/62">
                Benzer fotoğrafları bulur, gereksiz kareleri ayıklamayı kolaylaştırır ve depolama alanı kazandırır.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Benzer kare tarama', 'Alan kazanımı', 'Akıllı seçim önerileri'].map((item) => (
                  <span key={item} className="rounded-full border border-black/8 bg-[#fbfaf7] px-3 py-2 text-xs font-semibold text-ink/65">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-7 inline-flex items-center gap-2 font-semibold text-ink">
                İç sayfayı aç
                <ChevronRight size={18} />
              </div>
            </div>
          </div>
        </a>
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
    <footer className="relative z-10 px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-black/8 bg-white p-7 shadow-soft sm:p-10">
        <div className="mx-auto grid max-w-3xl gap-8 text-center">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-ink/45">İletişim</p>
            <h2 className="font-display text-[clamp(2.6rem,6vw,6rem)] font-black leading-[0.92]">
              Yeni ürünler için konuşalım.
            </h2>
          </div>
          <div className="space-y-4">
            <a
              href="mailto:theapdesign26@gmail.com"
              className="mx-auto flex max-w-[34rem] items-center justify-between rounded-full border border-black/8 bg-[#fbfaf7] px-5 py-4 font-semibold text-ink transition hover:bg-white"
            >
              <span className="flex items-center gap-3">
                <Mail size={19} />
                theapdesign26@gmail.com
              </span>
              <ArrowRight size={18} />
            </a>
            <div className="flex flex-wrap justify-center gap-3 text-sm font-semibold text-ink/70">
              <a href="/" className="rounded-full border border-black/8 bg-white px-4 py-2 transition hover:bg-[#fbfaf7]">Anasayfa</a>
              <a href="/products" className="rounded-full border border-black/8 bg-white px-4 py-2 transition hover:bg-[#fbfaf7]">Ürünler</a>
              <a href="/contact" className="rounded-full border border-black/8 bg-white px-4 py-2 transition hover:bg-[#fbfaf7]">İletişim</a>
            </div>
          </div>
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

createRoot(document.getElementById('root')).render(<App />);
