import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  Check,
  ChevronRight,
  Mail,
  Sparkles,
} from 'lucide-react';
import './styles.css';

const products = [
  {
    slug: 'del-it',
    title: 'Del-it',
    status: 'Yayında',
    eyebrow: 'Fotoğraf temizliği',
    description: 'Benzer kareleri bulur, gereksiz fotoğrafları ayıklamayı kolaylaştırır ve depolama alanı kazandırır.',
    summary: 'Galeriyi sade tutan, akıllı ve sakin bir fotoğraf düzenleme deneyimi.',
    accent: 'from-sky-100 via-white to-rose-100',
    badge: 'Smart cleanup',
    metrics: ['Benzer kare tarama', 'Alan kazanımı', 'Akıllı seçim önerileri'],
    features: [
      'Benzer fotoğrafları otomatik gruplar.',
      'Gereksiz kareleri hızlıca görünür kılar.',
      'Depolama kazanımını anlaşılır özetlerle gösterir.',
    ],
    gallery: [
      { title: 'Tarama', note: 'Akıllı analiz başlıyor' },
      { title: 'Karşılaştırma', note: 'Benzer kareler yan yana' },
      { title: 'Sonuç', note: 'Kazanılan alan özeti' },
    ],
    faqs: [
      { q: 'Del-it fotoğrafları otomatik olarak siliyor mu?', a: 'Hayır. Uygulama öneriler sunar, son karar kullanıcıya aittir.' },
      { q: 'Benzer kareler nasıl bulunuyor?', a: 'Görsel benzerlik, tekrar eden kompozisyon ve kalite sinyalleri birlikte değerlendirilir.' },
      { q: 'İnternet gerekir mi?', a: 'Temel tarama akışı mümkün olduğunca sade ve hızlı olacak şekilde kurgulanmıştır.' },
    ],
    ctaLabel: 'App Store',
    ctaHref: 'https://apps.apple.com',
  },
  {
    slug: 'launch-kit',
    title: 'Launch Kit',
    status: 'Yakında',
    eyebrow: 'Lansman aracı',
    description: 'Uygulama yayın hazırlığını, ekran görsellerini ve store checklist’ini düzenleyen ürün yardımcısı.',
    summary: 'Store hazırlığını ve lansman akışını tek yerde toplayan hafif bir araç.',
    accent: 'from-amber-100 via-white to-lime-100',
    badge: 'Launch system',
    metrics: ['Store görselleri', 'Yayın checklist’i', 'Sürüm notları'],
    features: [
      'Ekran görüntüsü setlerini bir araya getirir.',
      'Yayın öncesi kontrol listesini sadeleştirir.',
      'Store metinlerini tek bir akışta toparlar.',
    ],
    gallery: [
      { title: 'Checklist', note: 'Hazırlık adımları' },
      { title: 'Assets', note: 'Store görselleri' },
      { title: 'Release', note: 'Yayın notları' },
    ],
    faqs: [
      { q: 'Bu ürün canlı mı?', a: 'Şu an tasarım ve yapı aşamasında, ürün dili hazırlanıyor.' },
      { q: 'Kimler için?', a: 'Uygulama yayınlayan ekipler ve küçük ürün takımları için.' },
      { q: 'Ne zaman gelir?', a: 'Hazırlık tamamlandığında duyurulacak.' },
    ],
    ctaLabel: 'Bize yazın',
    ctaHref: '#contact',
  },
  {
    slug: 'sparkflow',
    title: 'Sparkflow',
    status: 'Yakında',
    eyebrow: 'Akış yönetimi',
    description: 'Brief, revize ve teslim sürecini tek akışta toparlayan hafif ekip aracı.',
    summary: 'Fikirden teslimata kadar akışı netleştiren pratik bir proje yardımcısı.',
    accent: 'from-violet-100 via-white to-sky-100',
    badge: 'Flow system',
    metrics: ['Brief toplama', 'Revize akışı', 'Teslim takibi'],
    features: [
      'İş başlangıcı için kısa ve net brief alanı sunar.',
      'Revize döngülerini tek yerde toplar.',
      'Teslim sürecini görünür ve sakin hale getirir.',
    ],
    gallery: [
      { title: 'Brief', note: 'İlk bilgi toplama' },
      { title: 'Revize', note: 'Değişiklik akışı' },
      { title: 'Teslim', note: 'Final durum özeti' },
    ],
    faqs: [
      { q: 'Bu bir iç araç mı?', a: 'Evet, ürün akışını sadeleştirmeyi hedefleyen bir ekip aracı.' },
      { q: 'Neyi çözüyor?', a: 'Dağınık brief, revize ve teslim süreçlerini toparlıyor.' },
      { q: 'Canlı sürüm var mı?', a: 'Şimdilik tasarım dili hazırlanıyor.' },
    ],
    ctaLabel: 'Bize yazın',
    ctaHref: '#contact',
  },
];

const featuredTags = ['Soft color system', 'Mobile-first', 'Playful UI'];

function App() {
  const pathname = normalizePath(window.location.pathname);
  const product = products.find((item) => item.slug === pathname.replace(/^\//, ''));

  if (product) {
    return <ProductPage product={product} />;
  }

  return <HomePage />;
}

function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-paper text-ink">
      <Background />
      <Header />
      <Hero />
      <ProductsSection />
      <ApproachSection />
      <Footer />
    </main>
  );
}

function ProductPage({ product }) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-paper text-ink">
      <Background />
      <Header />
      <ProductHero product={product} />
      <ProductDetails product={product} />
      <ProductGallery product={product} />
      <FaqSection product={product} />
      <Footer />
    </main>
  );
}

function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,214,221,0.55),transparent_28%),radial-gradient(circle_at_85%_12%,rgba(214,233,255,0.66),transparent_24%),radial-gradient(circle_at_55%_80%,rgba(223,244,226,0.6),transparent_26%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(17,17,17,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(17,17,17,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/8 bg-white/70 backdrop-blur-2xl">
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
          <a href="#products" className="transition hover:text-ink">Ürünler</a>
          <a href="#contact" className="transition hover:text-ink">İletişim</a>
        </div>
        <a
          href="#products"
          className="inline-flex h-11 items-center gap-2 rounded-full border border-black/8 bg-ink px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-black/85"
        >
          Ürünler
          <ArrowRight size={16} />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative z-10 px-5 pb-14 pt-12 sm:px-8 lg:pt-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="mb-6 inline-flex rounded-full border border-black/8 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-ink/65 shadow-soft">
            Uygulama stüdyosu
          </p>
          <h1 className="font-display text-[clamp(3.4rem,8vw,8.8rem)] font-black leading-[0.9] tracking-tight">
            Uygulamalar yapıyoruz,
            <span className="block bg-gradient-to-r from-sky-500 via-rose-500 to-violet-500 bg-clip-text text-transparent">
              tema da yumuşak.
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/66 sm:text-xl">
            Ürünlerimizi sergileyen, renkli ama temiz bir vitrin kuruyoruz. Şirket hikayesi yok,
            ürün var. Kartların altında uygulamaları görebilir, kendi sayfalarına gidebilirsiniz.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#products"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-ink px-7 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-black/85"
            >
              Ürünleri Gör
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex h-14 items-center justify-center rounded-full border border-black/8 bg-white px-7 text-sm font-bold text-ink transition hover:-translate-y-1 hover:bg-[#fbfaf7]"
            >
              İletişim
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {featuredTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-black/8 bg-white px-4 py-2 text-sm font-semibold text-ink/70 shadow-soft"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="absolute -left-6 top-10 h-36 w-36 rounded-full bg-rose-200/70 blur-3xl" />
          <div className="absolute -right-6 bottom-0 h-44 w-44 rounded-full bg-sky-200/70 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-black/8 bg-white p-5 shadow-glow">
            <div className="grid gap-4 sm:grid-cols-[0.98fr_1.02fr]">
              <div className="rounded-[1.5rem] bg-gradient-to-br from-sky-100 via-white to-rose-100 p-5">
                <div className="flex h-full min-h-[260px] flex-col justify-between rounded-[1.25rem] border border-black/6 bg-white p-5">
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-white">
                      <img src="/del-it-mark.svg" alt="Del-it logosu" className="h-8 w-8 object-contain" />
                    </div>
                    <div>
                      <p className="font-display text-2xl font-black">Del-it</p>
                      <p className="text-sm text-ink/55">Photo cleanup</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {['Benzer kareler', 'Alan kazanımı', 'Akıllı seçim'].map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-full border border-black/8 bg-white px-4 py-3 text-sm text-ink/75">
                        <Check size={16} className="text-violet-500" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid gap-4">
                <MiniStat title="Ürünler" value="03" note="Sade katalog" />
                <MiniStat title="Tema" value="Soft" note="Beyaz ve pastel" />
                <MiniStat title="Odak" value="Apps" note="Kendi sayfaları" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  return (
    <section id="products" className="relative z-10 px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-ink/45">Ürünler</p>
            <h2 className="max-w-3xl font-display text-4xl font-black leading-none sm:text-6xl">
              Uygulamaları burada gör.
            </h2>
          </div>
          <p className="max-w-xl text-ink/58">
            Her kart bir ürüne gidiyor. Yapı sade, renkler yumuşak, dil ürün odaklı.
          </p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {products.map((product, index) => (
            <a
              key={product.slug}
              href={`/${product.slug}`}
              className="group overflow-hidden rounded-[1.6rem] border border-black/8 bg-white p-4 shadow-soft transition duration-300 hover:-translate-y-2 hover:shadow-glow"
            >
              <div className={`relative overflow-hidden rounded-[1.25rem] bg-gradient-to-br ${product.accent} p-5`}>
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-black/8 bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-ink/60">
                    {product.status}
                  </span>
                  <span className="text-sm font-semibold text-ink/45">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="mt-10 rounded-[1.25rem] border border-black/8 bg-white/85 p-4 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/45">{product.eyebrow}</p>
                      <h3 className="mt-2 font-display text-3xl font-black">{product.title}</h3>
                    </div>
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-white">
                      <Sparkles size={18} />
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-ink/60">{product.description}</p>
                </div>
              </div>
              <div className="px-1 pb-1 pt-5">
                <p className="text-sm leading-7 text-ink/62">{product.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.metrics.map((metric) => (
                    <span key={metric} className="rounded-full border border-black/8 bg-[#fbfaf7] px-3 py-2 text-xs font-semibold text-ink/65">
                      {metric}
                    </span>
                  ))}
                </div>
                <div className="mt-6 inline-flex items-center gap-2 font-semibold text-ink">
                  İncele
                  <ChevronRight size={18} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  const cards = [
    ['Sade akış', 'İlk bakışta anlaşılır ekranlar kurarız.'],
    ['Soft renkler', 'Beyaz taban üstüne yumuşak pastel katmanlar ekleriz.'],
    ['Kendi sayfası', 'Her ürünün ayrı hikayesi ve ayrı iç sayfası olur.'],
  ];

  return (
    <section className="relative z-10 px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 md:grid-cols-3">
          {cards.map(([title, description]) => (
            <article key={title} className="rounded-[1.4rem] border border-black/8 bg-white p-6 shadow-soft">
              <h3 className="font-display text-2xl font-black">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/60">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductHero({ product }) {
  return (
    <section className="relative z-10 px-5 pb-12 pt-12 sm:px-8 lg:pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-black/8 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-ink/55 shadow-soft">
            {product.eyebrow}
          </p>
          <h1 className="font-display text-[clamp(3.2rem,7vw,7.8rem)] font-black leading-[0.9] tracking-tight">
            {product.title}
            <span className="block bg-gradient-to-r from-rose-500 via-sky-500 to-violet-500 bg-clip-text text-transparent">
              {product.summary}
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/65">
            {product.description}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {product.ctaHref.startsWith('#') ? (
              <a
                href={product.ctaHref}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-ink px-7 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-black/85"
              >
                {product.ctaLabel}
                <ArrowRight size={18} />
              </a>
            ) : (
              <a
                href={product.ctaHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-ink px-7 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-black/85"
              >
                {product.ctaLabel}
                <ArrowRight size={18} />
              </a>
            )}
            <a
              href="/"
              className="inline-flex h-14 items-center justify-center rounded-full border border-black/8 bg-white px-7 text-sm font-bold text-ink transition hover:-translate-y-1 hover:bg-[#fbfaf7]"
            >
              Ürünlere Dön
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[560px]">
          <div className={`absolute inset-x-12 top-12 h-44 rounded-full bg-gradient-to-r ${product.accent} blur-3xl`} />
          <div className="relative overflow-hidden rounded-[2rem] border border-black/8 bg-white p-5 shadow-glow">
            <div className={`rounded-[1.5rem] bg-gradient-to-br ${product.accent} p-5`}>
              <div className="rounded-[1.3rem] border border-black/8 bg-white/90 p-5 shadow-soft">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/45">{product.badge}</p>
                    <p className="mt-2 font-display text-3xl font-black">{product.title}</p>
                  </div>
                  <span className="rounded-full border border-black/8 bg-white px-3 py-1 text-xs font-semibold text-ink/55">
                    {product.status}
                  </span>
                </div>
                <div className="mt-5 grid gap-3">
                  {product.metrics.map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-full border border-black/8 bg-[#fbfaf7] px-4 py-3 text-sm text-ink/72">
                      <Check size={16} className="text-sky-500" />
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

function ProductDetails({ product }) {
  return (
    <section className="relative z-10 px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 md:grid-cols-3">
          {product.features.map((feature, index) => (
            <article key={feature} className="rounded-[1.4rem] border border-black/8 bg-white p-6 shadow-soft">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-ink text-white">
                <span className="text-sm font-bold">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <p className="mt-8 text-base leading-7 text-ink/72">{feature}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductGallery({ product }) {
  return (
    <section className="relative z-10 px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-ink/45">Galeri</p>
            <h2 className="font-display text-4xl font-black leading-none sm:text-6xl">
              Ürünün ekran hissi.
            </h2>
          </div>
          <p className="max-w-xl text-ink/58">
            Soft renkli mockup alanları, ürünün sayfada daha canlı görünmesi için hazırlandı.
          </p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {product.gallery.map((item, index) => (
            <article key={item.title} className="overflow-hidden rounded-[1.5rem] border border-black/8 bg-white p-4 shadow-soft">
              <div className={`relative aspect-[0.82] overflow-hidden rounded-[1.25rem] bg-gradient-to-br ${product.accent}`}>
                <div className="absolute inset-5 rounded-[1.2rem] border border-black/8 bg-white/80 p-5 backdrop-blur-md">
                  <div className="flex h-full flex-col justify-between rounded-[1rem] border border-black/8 bg-white p-4 shadow-soft">
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.18em] text-ink/45">
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <span>{item.title}</span>
                    </div>
                    <div className="rounded-[1rem] border border-black/8 bg-[#fbfaf7] p-4">
                      <p className="text-sm font-semibold text-ink">{item.title}</p>
                      <p className="mt-1 text-xs text-ink/55">{item.note}</p>
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

function FaqSection({ product }) {
  return (
    <section className="relative z-10 px-5 py-12 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-ink/45">FAQ</p>
        <div className="grid gap-4">
          {product.faqs.map((item) => (
            <details key={item.q} className="group rounded-[1.4rem] border border-black/8 bg-white p-6 shadow-soft">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl font-black text-ink">
                <span>{item.q}</span>
                <ChevronRight className="transition duration-300 group-open:rotate-90" size={20} />
              </summary>
              <p className="mt-4 max-w-4xl text-base leading-8 text-ink/62">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="relative z-10 px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-black/8 bg-white p-7 shadow-soft sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-ink/45">İletişim</p>
            <h2 className="font-display text-[clamp(2.6rem,6vw,6rem)] font-black leading-[0.92]">
              Yeni ürünler için konuşalım.
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-ink/60">
              Ürün, uygulama ve tasarım dili için kısa bir mesaj yeterli.
            </p>
          </div>
          <div className="space-y-4">
            <a
              href="mailto:hello@theapdesign.art"
              className="flex items-center justify-between rounded-full border border-black/8 bg-[#fbfaf7] px-5 py-4 font-semibold text-ink transition hover:bg-white"
            >
              <span className="flex items-center gap-3">
                <Mail size={19} />
                hello@theapdesign.art
              </span>
              <ArrowRight size={18} />
            </a>
            <div className="flex flex-wrap gap-3 text-sm font-semibold text-ink/70">
              <a href="/" className="rounded-full border border-black/8 bg-white px-4 py-2 transition hover:bg-[#fbfaf7]">Ürünler</a>
              <a href="#products" className="rounded-full border border-black/8 bg-white px-4 py-2 transition hover:bg-[#fbfaf7]">Katalog</a>
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

function normalizePath(pathname) {
  const clean = pathname.replace(/\/+$/, '') || '/';
  return clean === '' ? '/' : clean;
}

createRoot(document.getElementById('root')).render(<App />);
