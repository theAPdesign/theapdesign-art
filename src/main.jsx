import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  AppWindow,
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  Check,
  ChevronRight,
  Database,
  FolderOpen,
  Image as ImageIcon,
  Layers3,
  Mail,
  MonitorSmartphone,
  PenTool,
  Search,
  ShieldCheck,
  Sparkles,
  Wand2,
} from 'lucide-react';
import './styles.css';

const services = [
  { title: 'UI/UX Tasarımı', icon: Layers3 },
  { title: 'Web Sitesi Tasarımı', icon: MonitorSmartphone },
  { title: 'Uygulama Tasarımı', icon: PenTool },
  { title: 'Marka Kimliği', icon: BadgeCheck },
  { title: 'Sosyal Medya Tasarımı', icon: Sparkles },
  { title: 'Yapay Zeka Destekli Kreatif Tasarım', icon: Wand2 },
];

const works = [
  ['Arayüz Sistemi', 'SaaS panel konsepti', 'from-electric/70 via-white to-violet/80'],
  ['Marka Lansmanı', 'Kimlik ve sosyal yönlendirme', 'from-violet/75 via-white to-zinc-300'],
  ['Mobil Akış', 'Premium uygulama deneyimi', 'from-zinc-900 via-electric/70 to-white'],
  ['Stüdyo Web Sitesi', 'Editoryal web görünümü', 'from-white via-zinc-300 to-electric/60'],
  ['İçerik Üretici Kiti', 'Kampanya görselleri ve şablonlar', 'from-violet/70 via-zinc-950 to-electric/70'],
  ['Dijital Ürün', 'UX, görsel sistem ve lansman varlıkları', 'from-zinc-200 via-white to-violet/70'],
];

const process = ['Keşif', 'Tasarım', 'İyileştirme', 'Teslim'];

const delitFeatures = [
  {
    title: 'Benzer Fotoğraf Bulma',
    description: 'Galeri içindeki benzer kareleri akıllı eşleştirme ile gruplayarak kararsızlığı azaltır.',
    icon: Search,
  },
  {
    title: 'Gereksiz Fotoğrafları Temizleme',
    description: 'Tekrar eden, bulanık veya düşük değer taşıyan kareleri hızlı karar kartlarıyla ayıklamayı kolaylaştırır.',
    icon: ImageIcon,
  },
  {
    title: 'Depolama Alanı Kazandırma',
    description: 'Silinebilir içerikleri görünür hale getirerek cihaz hafızasında gerçek alan açılmasına yardımcı olur.',
    icon: FolderOpen,
  },
  {
    title: 'Akıllı Analiz Sistemi',
    description: 'Fotoğraf yoğunluğu, tekrar oranı ve temizlik potansiyeli gibi verileri anlaşılır içgörülere dönüştürür.',
    icon: Database,
  },
];

const delitGallery = [
  {
    title: 'Akıllı Tarama',
    label: 'Analiz',
    accent: 'from-electric/65 via-white/35 to-white/10',
    stats: ['1.248 fotoğraf tarandı', '284 benzer kare', '7.2 GB potansiyel alan'],
  },
  {
    title: 'Karşılaştırma Görünümü',
    label: 'Karar',
    accent: 'from-violet/60 via-electric/30 to-white/10',
    stats: ['Yan yana önizleme', 'Net kalite ipuçları', 'Tek dokunuşla eleme'],
  },
  {
    title: 'Temizleme Özeti',
    label: 'Sonuç',
    accent: 'from-white/50 via-electric/25 to-violet/35',
    stats: ['Silinen kümeler', 'Kazanılan depolama', 'Haftalık ilerleme'],
  },
];

const delitFaqs = [
  {
    question: 'Del-it fotoğrafları otomatik olarak siliyor mu?',
    answer: 'Hayır. Del-it öneriler sunar; son karar her zaman kullanıcıya aittir.',
  },
  {
    question: 'Benzer fotoğraflar nasıl bulunuyor?',
    answer: 'Görsel benzerlik, tekrar eden kompozisyonlar ve kalite sinyalleri birlikte değerlendirilir.',
  },
  {
    question: 'İnternet bağlantısı gerekli mi?',
    answer: 'Uygulamanın temel tarama deneyimi çevrimdışı senaryolara uygun olacak şekilde düşünülmüştür. Bazı servisler için bağlantı gerekebilir.',
  },
  {
    question: 'Silinen fotoğrafları geri almak mümkün mü?',
    answer: 'Silme davranışı cihazın galeri ve çöp kutusu mantığına göre ilerler. Son aşamadan önce onay akışı bulunur.',
  },
];

const supportFaqs = [
  {
    question: 'Tarama neden uzun sürüyor?',
    answer: 'İlk analiz, galeri boyutuna ve cihaz performansına göre daha uzun sürebilir. Uygulamayı açık tutup işlemin tamamlanmasını bekleyin.',
  },
  {
    question: 'Benzer fotoğraflar görünmüyorsa ne yapmalıyım?',
    answer: 'Uygulamaya galeri erişimi verdiğinizden emin olun ve yeni bir tarama başlatın.',
  },
  {
    question: 'Depolama alanı değişimi hemen görünmüyorsa?',
    answer: 'Bazı cihazlar alan bilgisini kısa bir gecikmeyle günceller. Uygulamayı ve galeriyi yeniden açmak yardımcı olabilir.',
  },
];

const pageMeta = {
  '/': {
    title: 'The AP Design | Premium Kreatif Stüdyo',
    description:
      'The AP Design; modern web siteleri, uygulama arayüzleri, marka görselleri ve dijital deneyimler tasarlayan premium bir kreatif stüdyodur.',
    ogTitle: 'The AP Design | Premium Kreatif Stüdyo',
    ogDescription:
      'Modern web siteleri, uygulama arayüzleri, marka görselleri ve dijital deneyimler detayla tasarlanır.',
    image: 'https://theapdesign.art/og-image.svg',
  },
  '/del-it': {
    title: 'Del-it | Akıllı Fotoğraf Temizleme Deneyimi',
    description:
      'Del-it; benzer fotoğrafları bulan, gereksiz kareleri ayıklamayı kolaylaştıran ve depolama alanı kazandıran modern bir galeri deneyimidir.',
    ogTitle: 'Del-it | Akıllı Fotoğraf Temizleme Deneyimi',
    ogDescription:
      'Benzer fotoğrafları bulun, gereksiz kareleri temizleyin ve galerinizi akıllı analizlerle düzenleyin.',
    image: 'https://theapdesign.art/del-it-og.svg',
  },
  '/privacy-policy': {
    title: 'Del-it Privacy Policy | Veri ve Reklam Kullanımı',
    description:
      'Del-it uygulamasının gizlilik politikası: işlenen veriler, Google AdMob kullanımı, üçüncü taraf servisler ve kullanıcı hakları.',
    ogTitle: 'Del-it Privacy Policy',
    ogDescription:
      'Del-it uygulamasında veri işleme, reklam servisleri, güvenlik ve kullanıcı hakları hakkında bilgiler.',
    image: 'https://theapdesign.art/del-it-og.svg',
  },
  '/support': {
    title: 'Del-it Support | Yardım ve İletişim',
    description:
      'Del-it destek sayfası: yardım metinleri, sorun giderme adımları, sık sorulan sorular ve iletişim formu.',
    ogTitle: 'Del-it Support',
    ogDescription:
      'Del-it için yardım, destek, sorun giderme ve iletişim formuna bu sayfadan ulaşın.',
    image: 'https://theapdesign.art/del-it-og.svg',
  },
};

function App() {
  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onPopState = () => setRoute(getRoute());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    updateMeta(route);

    if (window.location.hash) {
      requestAnimationFrame(() => {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
      return;
    }

    window.scrollTo(0, 0);
  }, [route]);

  const navigate = (href) => {
    if (!href.startsWith('/')) {
      return;
    }

    if (href === `${window.location.pathname}${window.location.hash}`) {
      return;
    }

    window.history.pushState({}, '', href);
    setRoute(getRoute());
  };

  const pageProps = { route, navigate };

  return (
    <main className="min-h-screen overflow-hidden bg-ink text-white">
      <BackgroundGrid />
      {route === '/' && <HomePage {...pageProps} />}
      {route === '/del-it' && <DelitPage {...pageProps} />}
      {route === '/privacy-policy' && <PrivacyPolicyPage {...pageProps} />}
      {route === '/support' && <SupportPage {...pageProps} />}
    </main>
  );
}

function HomePage({ navigate }) {
  return (
    <>
      <Header navigate={navigate} />
      <Hero navigate={navigate} />
      <Marquee />
      <About />
      <Services />
      <Portfolio />
      <DelitHighlight navigate={navigate} />
      <Process />
      <ContactFooter navigate={navigate} />
    </>
  );
}

function DelitPage({ navigate }) {
  return (
    <>
      <Header navigate={navigate} />
      <PageShell>
        <DelitHero navigate={navigate} />
        <DelitProblem />
        <DelitFeatures />
        <DelitGallery />
        <FaqSection
          eyebrow="FAQ"
          title="Sık sorulan sorular."
          items={delitFaqs}
          className="px-5 py-24 sm:px-8"
        />
      </PageShell>
      <ContactFooter navigate={navigate} />
    </>
  );
}

function PrivacyPolicyPage({ navigate }) {
  return (
    <>
      <Header navigate={navigate} />
      <PageShell>
        <PolicyHero />
        <PrivacyPolicyContent />
      </PageShell>
      <ContactFooter navigate={navigate} />
    </>
  );
}

function SupportPage({ navigate }) {
  return (
    <>
      <Header navigate={navigate} />
      <PageShell>
        <SupportHero />
        <SupportContent />
      </PageShell>
      <ContactFooter navigate={navigate} />
    </>
  );
}

function PageShell({ children }) {
  return <div className="relative z-10 pt-24">{children}</div>;
}

function BackgroundGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(47,107,255,0.18),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.07),transparent_22%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
    </div>
  );
}

function Header({ navigate }) {
  const navItems = [
    { label: 'Hakkında', href: '/#about' },
    { label: 'Hizmetler', href: '/#services' },
    { label: 'İşler', href: '/#works' },
    { label: 'Del-it', href: '/del-it' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Support', href: '/support' },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-2xl">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <nav className="flex h-20 items-center justify-between">
          <button
            type="button"
            onClick={() => navigate('/')}
            className="group flex items-center gap-3"
            aria-label="The AP Design ana sayfa"
          >
            <span className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white shadow-soft">
              <img src="/ap-logo.svg" alt="AP Design logosu" className="h-8 w-8 object-contain" />
            </span>
            <span className="font-display text-left text-sm font-semibold uppercase tracking-[0.26em] text-white">
              AP Design
            </span>
          </button>
          <div className="hidden items-center gap-6 text-sm text-white/64 lg:flex">
            {navItems.map((item) => (
              <InternalLink key={item.href} href={item.href} navigate={navigate} className="transition hover:text-white">
                {item.label}
              </InternalLink>
            ))}
          </div>
          <InternalLink
            href="/#contact"
            navigate={navigate}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-white/15 bg-white px-5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-smoke"
          >
            İletişim
            <ArrowRight size={16} />
          </InternalLink>
        </nav>
        <div className="flex gap-2 overflow-x-auto pb-4 lg:hidden">
          {navItems.map((item) => (
            <InternalLink
              key={item.href}
              href={item.href}
              navigate={navigate}
              className="shrink-0 rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/68 transition hover:border-white/30 hover:text-white"
            >
              {item.label}
            </InternalLink>
          ))}
        </div>
      </div>
    </header>
  );
}

function Hero({ navigate }) {
  return (
    <section id="top" className="relative z-10 min-h-[92vh] px-5 pt-32 sm:px-8 lg:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="max-w-4xl">
          <p className="mb-7 inline-flex rounded-full border border-white/12 bg-white/7 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/68">
            theapdesign.art
          </p>
          <h1 className="font-display text-[clamp(3.8rem,9vw,9.8rem)] font-black leading-[0.86] tracking-normal">
            Premium hissettiren{' '}
            <span className="animate-sheen bg-gradient-to-r from-white via-electric to-violet bg-[length:220%_220%] bg-clip-text text-transparent">
              tasarım.
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
            Modern web siteleri, uygulama arayüzleri, marka görselleri ve dijital deneyimler detayla
            tasarlanır.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <InternalLink
              href="/#works"
              navigate={navigate}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-bold text-ink transition hover:-translate-y-1 hover:bg-smoke"
            >
              İşleri Gör
              <ArrowRight size={18} />
            </InternalLink>
            <InternalLink
              href="/del-it"
              navigate={navigate}
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/15 px-7 text-sm font-bold text-white transition hover:-translate-y-1 hover:border-white/40 hover:bg-white/8"
            >
              Del-it’i Keşfet
            </InternalLink>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[520px] lg:mr-0">
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-electric/40 to-violet/35 blur-3xl" />
          <div className="relative animate-float rounded-[2rem] border border-white/12 bg-white/[0.04] p-8 shadow-glow backdrop-blur-xl">
            <div className="aspect-square rounded-[1.6rem] border border-white/12 bg-smoke p-10">
              <img src="/ap-logo.svg" alt="AP Design monogramı" className="h-full w-full object-contain" />
            </div>
            <div className="mt-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-white/45">Kreatif Stüdyo</p>
                <p className="mt-2 font-display text-2xl font-bold">The AP Design</p>
              </div>
              <span className="rounded-full border border-white/12 px-3 py-1 text-xs text-white/60">
                2026
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ['UI/UX', 'Web Siteleri', 'Marka Görselleri', 'Kreatif Yön', 'Uygulama Arayüzleri'];
  return (
    <div className="relative z-10 border-y border-white/10 bg-white/[0.03] py-5">
      <div className="flex w-[200%] animate-marquee gap-8 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.24em] text-white/50">
        {[...items, ...items, ...items, ...items].map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-8">
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-electric" />
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative z-10 px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionLabel eyebrow="Hakkında" title="Net, modern ve premium görseller için dijital stüdyo." />
        <div className="text-balance text-2xl font-medium leading-tight text-white/82 sm:text-4xl">
          The AP Design; dijital tasarım, UI/UX, marka görselleri ve kreatif yön alanlarında çalışan
          modern bir tasarım stüdyosudur.
          <p className="mt-8 text-lg leading-8 text-white/58">
            Her detay netlik ve premium algı için şekillenir: temiz arayüzler, güçlü görsel sistemler,
            duyarlı web deneyimleri ve yayına hazır kreatif varlıklar.
          </p>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative z-10 bg-smoke px-5 py-24 text-ink sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionLabel eyebrow="Hizmetler" title="Dijital görünürlük için tasarım sistemleri." dark />
        <div className="mt-12 grid gap-px overflow-hidden rounded-[1.6rem] border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, icon: Icon }) => (
            <article key={title} className="group bg-smoke p-7 transition hover:bg-white">
              <div className="mb-16 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white transition group-hover:bg-gradient-to-br group-hover:from-electric group-hover:to-violet">
                <Icon size={21} />
              </div>
              <h3 className="font-display text-2xl font-bold">{title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="works" className="relative z-10 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionLabel eyebrow="Portfolyo" title="Seçilmiş görsel yönler." />
          <p className="max-w-md text-white/58">
            Gradient mockup kartları; arayüz, dijital lansman, kimlik sistemi ve sosyal medya odaklı
            kreatif çalışmaların genel hissini gösterir.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {works.map(([title, subtitle, gradient], index) => (
            <article
              key={title}
              className="group overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:-translate-y-2 hover:border-white/24"
            >
              <div className={`relative aspect-[1.18] overflow-hidden rounded-[1rem] bg-gradient-to-br ${gradient}`}>
                <div className="absolute inset-6 rounded-[1.1rem] border border-white/35 bg-white/18 backdrop-blur-md transition group-hover:scale-[1.03]" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-full border border-white/30 bg-black/20 px-4 py-3 text-white backdrop-blur-xl">
                  <span className="text-xs font-bold uppercase tracking-[0.22em]">Proje {index + 1}</span>
                  <ArrowRight size={16} />
                </div>
              </div>
              <div className="px-2 pb-2 pt-5">
                <h3 className="font-display text-2xl font-bold">{title}</h3>
                <p className="mt-2 text-sm text-white/52">{subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DelitHighlight({ navigate }) {
  return (
    <section className="relative z-10 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 shadow-glow backdrop-blur-xl sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="max-w-xl">
            <p className="mb-5 inline-flex rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/65">
              Del-it
            </p>
            <h2 className="font-display text-4xl font-black leading-none sm:text-6xl">
              Galeriyi akıllıca sadeleştiren premium ürün deneyimi.
            </h2>
            <p className="mt-6 text-lg leading-8 text-white/62">
              Del-it; benzer kareleri bulan, gereksiz fotoğrafları ayıklamayı kolaylaştıran ve depolama
              alanı kazandıran modern bir mobil ürün fikridir.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <InternalLink
                href="/del-it"
                navigate={navigate}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-bold text-ink transition hover:-translate-y-1 hover:bg-smoke"
              >
                Detayları İncele
                <ArrowRight size={16} />
              </InternalLink>
              <InternalLink
                href="/support"
                navigate={navigate}
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-bold text-white transition hover:-translate-y-1 hover:border-white/40 hover:bg-white/8"
              >
                Destek
              </InternalLink>
              <InternalLink
                href="/privacy-policy"
                navigate={navigate}
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 px-6 text-sm font-bold text-white/78 transition hover:-translate-y-1 hover:border-white/40 hover:bg-white/8 hover:text-white"
              >
                Gizlilik Politikası
              </InternalLink>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[580px]">
            <div className="absolute -right-6 top-10 h-44 w-44 rounded-full bg-electric/25 blur-3xl" />
            <div className="absolute -left-6 bottom-0 h-44 w-44 rounded-full bg-violet/25 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/12 bg-gradient-to-br from-white/10 via-white/[0.03] to-transparent p-5">
              <div className="rounded-[1.7rem] border border-white/12 bg-[#0c111d] p-5 shadow-soft">
                <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/68">
                  <span className="font-semibold uppercase tracking-[0.18em]">Del-it Preview</span>
                  <span>iOS Product</span>
                </div>
                <div className="mt-5 grid gap-4 md:grid-cols-[0.88fr_1.12fr]">
                  <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-electric/30 to-violet/25 p-5">
                    <div className="flex h-full min-h-[240px] flex-col justify-between rounded-[1.2rem] border border-white/15 bg-ink/65 p-5">
                      <div className="flex items-center gap-3">
                        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-ink">
                          <img src="/del-it-mark.svg" alt="Del-it logosu" className="h-8 w-8 object-contain" />
                        </div>
                        <div>
                          <p className="font-display text-2xl font-black">Del-it</p>
                          <p className="text-sm text-white/55">Smart photo cleanup</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        {['Benzer kareler', 'Akıllı seçim önerileri', 'Kazanılan alan özeti'].map((item) => (
                          <div key={item} className="flex items-center gap-3 rounded-full border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/70">
                            <Check size={16} className="text-electric" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-4">
                    <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                      <div className="mb-4 flex items-center justify-between">
                        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white/55">Bugün</span>
                        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/60">
                          7.2 GB potansiyel
                        </span>
                      </div>
                      <div className="grid gap-3">
                        <MetricRow label="Benzer kümeler" value="284" />
                        <MetricRow label="Gözden geçirilecek" value="142" />
                        <MetricRow label="Önerilen seçimler" value="89" />
                      </div>
                    </div>
                    <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                      <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
                        <Sparkles size={16} className="text-electric" />
                        Akıllı analiz
                      </div>
                      <div className="grid gap-3 sm:grid-cols-3">
                        {['Portre', 'Ekran Görüntüsü', 'Tekrar'].map((tag) => (
                          <div key={tag} className="rounded-[1rem] border border-white/10 bg-white/6 px-4 py-6 text-center text-sm text-white/72">
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="relative z-10 bg-white px-5 py-24 text-ink sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionLabel eyebrow="Süreç" title="Sade adımlar, detaylı uygulama." dark />
        <div className="mt-12 grid gap-4 md:grid-cols-4">
          {process.map((step, index) => (
            <article key={step} className="rounded-[1.2rem] border border-black/10 p-6">
              <span className="text-sm font-bold text-electric">{String(index + 1).padStart(2, '0')}</span>
              <h3 className="mt-12 font-display text-3xl font-black">{step}</h3>
              {index < process.length - 1 && (
                <ArrowRight className="mt-6 text-black/30" size={22} aria-hidden="true" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DelitHero({ navigate }) {
  return (
    <section className="px-5 pb-18 pt-12 sm:px-8 lg:pt-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-white/12 bg-white/7 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/68">
            Del-it
          </p>
          <h1 className="font-display text-[clamp(3.4rem,8vw,8.8rem)] font-black leading-[0.88]">
            Fotoğraf temizliğini
            <span className="block animate-sheen bg-gradient-to-r from-white via-electric to-violet bg-[length:220%_220%] bg-clip-text text-transparent">
              daha akıllı yap.
            </span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
            Del-it, galeride biriken benzer fotoğrafları bulur, gereksiz kareleri görünür kılar ve
            depolama alanı kazanmayı sade bir akışla hissettirir.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-bold text-ink transition hover:-translate-y-1 hover:bg-smoke"
            >
              App Store
              <ArrowRight size={18} />
            </a>
            <InternalLink
              href="/support"
              navigate={navigate}
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/15 px-7 text-sm font-bold text-white transition hover:-translate-y-1 hover:border-white/40 hover:bg-white/8"
            >
              Destek
            </InternalLink>
            <InternalLink
              href="/privacy-policy"
              navigate={navigate}
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/15 px-7 text-sm font-bold text-white/80 transition hover:-translate-y-1 hover:border-white/40 hover:bg-white/8 hover:text-white"
            >
              Gizlilik Politikası
            </InternalLink>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[560px]">
          <div className="absolute inset-x-10 top-12 h-48 rounded-full bg-electric/25 blur-3xl" />
          <div className="grid grid-cols-[0.78fr_1fr] gap-4">
            <PhoneMockup variant="left" />
            <PhoneMockup variant="right" />
          </div>
        </div>
      </div>
    </section>
  );
}

function DelitProblem() {
  return (
    <section className="px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <SectionLabel eyebrow="Problem" title="Galeri şiştikçe karar vermek zorlaşır." />
        <div className="grid gap-5 md:grid-cols-2">
          <InfoCard
            icon={ImageIcon}
            title="Benzer kare yükü"
            description="Aynı anın onlarca versiyonu galeri içinde görünürlüğü düşürür ve ayıklamayı yorucu hale getirir."
          />
          <InfoCard
            icon={FolderOpen}
            title="Dağınık depolama"
            description="Hangi içerik gerçekten yer kaplıyor, hangisi değer taşıyor sorusu çoğu kullanıcı için görünmez kalır."
          />
          <InfoCard
            icon={AppWindow}
            title="Yavaş karar akışı"
            description="Tek tek seçme deneyimi yeterince rehberlik etmediğinde temizleme süreci ertelenir."
          />
          <InfoCard
            icon={Sparkles}
            title="Anlamsız karmaşa"
            description="Kullanıcılar yalnızca silme aracı değil, neyi neden temizlediğini anlatan premium bir deneyim ister."
          />
        </div>
      </div>
    </section>
  );
}

function DelitFeatures() {
  return (
    <section className="bg-smoke px-5 py-24 text-ink sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionLabel eyebrow="Özellikler" title="Temiz, hızlı ve ikna edici ürün akışı." dark />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {delitFeatures.map(({ title, description, icon: Icon }) => (
            <article key={title} className="rounded-[1.6rem] border border-black/10 bg-white p-7 shadow-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white">
                <Icon size={21} />
              </div>
              <h3 className="mt-8 font-display text-3xl font-black">{title}</h3>
              <p className="mt-4 text-base leading-7 text-black/62">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DelitGallery() {
  return (
    <section className="px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionLabel eyebrow="Galeri" title="Modern ekran görselleriyle ürün hissi." />
          <p className="max-w-xl text-white/58">
            Bu alan, ürünün Apple seviyesinde berrak ve güven veren görünmesini sağlayan örnek ekran
            kompozisyonları için hazırlandı.
          </p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {delitGallery.map((item, index) => (
            <article
              key={item.title}
              className="group overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:-translate-y-2 hover:border-white/24"
            >
              <div className={`relative aspect-[0.82] overflow-hidden rounded-[1.2rem] bg-gradient-to-br ${item.accent}`}>
                <div className="absolute inset-5 rounded-[1.3rem] border border-white/20 bg-ink/75 p-5 backdrop-blur-xl">
                  <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.2em] text-white/52">
                    <span>{item.label}</span>
                    <span>{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="mt-5 rounded-[1.2rem] border border-white/10 bg-white/5 p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <p className="font-display text-2xl font-black text-white">{item.title}</p>
                        <p className="text-sm text-white/50">Del-it interface</p>
                      </div>
                      <img src="/del-it-mark.svg" alt="Del-it" className="h-8 w-8 opacity-90" />
                    </div>
                    <div className="space-y-3">
                      {item.stats.map((stat) => (
                        <div key={stat} className="rounded-full border border-white/10 bg-white/6 px-4 py-3 text-sm text-white/72">
                          {stat}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    <div className="rounded-[1rem] border border-white/10 bg-white/6 px-3 py-5" />
                    <div className="rounded-[1rem] border border-white/10 bg-white/8 px-3 py-5" />
                    <div className="rounded-[1rem] border border-white/10 bg-white/6 px-3 py-5" />
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

function PolicyHero() {
  return (
    <section className="px-5 pb-14 pt-12 sm:px-8 lg:pt-16">
      <div className="mx-auto max-w-5xl">
        <p className="mb-5 inline-flex rounded-full border border-white/12 bg-white/7 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/68">
          Privacy Policy
        </p>
        <h1 className="font-display text-[clamp(3rem,7vw,6.8rem)] font-black leading-[0.92]">
          Del-it için gizlilik ve veri kullanımı.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/66">
          Bu politika; Del-it uygulamasında işlenen veriler, reklam servisleri, üçüncü taraf araçlar ve
          kullanıcı hakları konusunda temel çerçeveyi açıklar.
        </p>
      </div>
    </section>
  );
}

function PrivacyPolicyContent() {
  const sections = [
    {
      title: '1. İşlenen Veriler',
      body:
        'Del-it; uygulama performansını iyileştirmek, destek taleplerini yönetmek ve ürün deneyimini anlamak amacıyla kullanım verileri, tanılama verileri ve kullanıcı tarafından sağlanan iletişim bilgilerini işleyebilir.',
    },
    {
      title: '2. Google AdMob Kullanımı',
      body:
        'Uygulama içinde Google AdMob kullanılabilir. Bu kapsamda reklamların sunulması, performans ölçümü ve kişiselleştirme amacıyla belirli teknik veriler işlenebilir.',
    },
    {
      title: '3. Cihaz Tanımlayıcıları',
      body:
        'Reklam ve analiz amaçlarıyla cihaz tanımlayıcıları veya benzeri teknolojiler kullanılabilir. Bu veriler reklam ölçümü, dolandırıcılık önleme ve kampanya performansı için değerlendirilebilir.',
    },
    {
      title: '4. Üçüncü Taraf Servisler',
      body:
        'Del-it, Google AdMob, analiz araçları ve destek formu altyapısı gibi üçüncü taraf servislerden yararlanabilir. Bu servislerin kendi gizlilik politikaları ayrıca geçerlidir.',
    },
    {
      title: '5. Kullanıcı Hakları',
      body:
        'Kullanıcılar; kendileriyle ilgili veriler hakkında bilgi talep etme, düzeltme isteme, silme talebinde bulunma veya belirli veri işleme faaliyetlerine itiraz etme hakkına sahip olabilir.',
    },
    {
      title: '6. Veri Güvenliği',
      body:
        'Makbul teknik ve organizasyonel önlemler uygulanır; ancak internet üzerinden veri iletiminde mutlak güvenlik garanti edilemez.',
    },
    {
      title: '7. Çocukların Gizliliği',
      body:
        'Del-it, 13 yaş altındaki çocuklardan bilerek kişisel veri toplama amacı taşımaz. Böyle bir durum fark edilirse ilgili veriler makul süre içinde silinir.',
    },
    {
      title: '8. Politika Güncellemeleri',
      body:
        'Bu politika zaman zaman güncellenebilir. Önemli değişiklikler uygulama içinde veya ilgili dijital kanallarda duyurulabilir.',
    },
  ];

  return (
    <section className="px-5 py-10 sm:px-8">
      <div className="mx-auto grid max-w-5xl gap-5">
        {sections.map((section) => (
          <article key={section.title} className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <h2 className="font-display text-2xl font-black sm:text-3xl">{section.title}</h2>
            <p className="mt-4 text-base leading-8 text-white/66">{section.body}</p>
          </article>
        ))}
        <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-6 text-sm leading-7 text-white/55 sm:p-8">
          Bu politika, ürün ve servis güncellemelerine göre zaman zaman revize edilebilir.
        </div>
      </div>
    </section>
  );
}

function SupportHero() {
  return (
    <section className="px-5 pb-14 pt-12 sm:px-8 lg:pt-16">
      <div className="mx-auto max-w-5xl">
        <p className="mb-5 inline-flex rounded-full border border-white/12 bg-white/7 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/68">
          Support
        </p>
        <h1 className="font-display text-[clamp(3rem,7vw,6.8rem)] font-black leading-[0.92]">
          Yardım, sorun giderme ve hızlı iletişim.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/66">
          Del-it ile ilgili temel yardım başlıkları, sık sorulan sorular ve destek formu bu sayfada
          bir araya getirildi.
        </p>
      </div>
    </section>
  );
}

function SupportContent() {
  return (
    <>
      <section className="px-5 py-10 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionLabel eyebrow="Yardım" title="Ürünü daha rahat kullanmanız için net destek akışı." />
          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard
              icon={BookOpenText}
              title="Başlangıç yardımı"
              description="Galeri izni verildikten sonra ilk taramanın tamamlanmasını bekleyin ve önerilen kümeleri sırayla gözden geçirin."
            />
            <InfoCard
              icon={ShieldCheck}
              title="Güvenli karar"
              description="Öneriler yalnızca yardımcı olur; temizleme işlemleri onay ekranları üzerinden ilerler."
            />
            <InfoCard
              icon={Sparkles}
              title="Daha iyi sonuç"
              description="Tarama sonrası kümeleri kalite, tekrar ve alan kazanımı sırasına göre incelemek en iyi akışı sağlar."
            />
            <InfoCard
              icon={AppWindow}
              title="Destek akışı"
              description="Sorun devam ediyorsa form üzerinden bize iletin; konu ve cihaz detayları çözümü hızlandırır."
            />
          </div>
        </div>
      </section>
      <FaqSection
        eyebrow="FAQ"
        title="Sık sorulan destek başlıkları."
        items={supportFaqs}
        className="px-5 py-24 sm:px-8"
      />
      <section className="bg-smoke px-5 py-24 text-ink sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.84fr_1.16fr]">
          <SectionLabel eyebrow="Sorun Giderme" title="Önce bu kısa adımları deneyin." dark />
          <div className="grid gap-4">
            {[
              'Galeri erişim izninin açık olduğundan emin olun.',
              'Uygulamayı tamamen kapatıp yeniden açın.',
              'Yeni bir tarama başlatın ve işlemin tamamlanmasını bekleyin.',
              'Cihazınızda yeterli boş alan ve güncel işletim sistemi olduğuna bakın.',
            ].map((item) => (
              <div key={item} className="rounded-[1.2rem] border border-black/10 bg-white p-5 text-base leading-7 shadow-soft">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 sm:p-10">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-electric">İletişim Formu</p>
            <h2 className="font-display text-4xl font-black leading-none sm:text-5xl">
              Destek talebinizi doğrudan iletin.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/62">
              Mesajınız destek akışına iletilir. Dilerseniz kullandığınız cihaz ve sorunun oluştuğu adımı
              detaylı yazın.
            </p>
          </div>
          <form
            action="https://formsubmit.co/abd.pacal@gmail.com"
            method="POST"
            className="mt-10 grid gap-4"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="Del-it Support Form" />
            <input type="hidden" name="_template" value="table" />
            <div className="grid gap-4 sm:grid-cols-2">
              <FormField label="Ad Soyad" name="adSoyad" type="text" autoComplete="name" />
              <FormField label="E-posta" name="email" type="email" autoComplete="email" />
            </div>
            <FormField label="Konu" name="konu" type="text" />
            <label className="grid gap-2 text-sm font-semibold text-white/70">
              <span>Mesaj</span>
              <textarea
                name="mesaj"
                rows="6"
                required
                className="rounded-[1.2rem] border border-white/10 bg-white/5 px-4 py-4 text-base text-white outline-none transition placeholder:text-white/28 focus:border-white/30 focus:bg-white/7"
                placeholder="Mesajınızı yazın"
              />
            </label>
            <button
              type="submit"
              className="mt-2 inline-flex h-13 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-bold text-ink transition hover:-translate-y-1 hover:bg-smoke"
            >
              Gönder
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function ContactFooter({ navigate }) {
  return (
    <footer id="contact" className="relative z-10 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-electric">İletişim</p>
            <h2 className="font-display text-[clamp(2.6rem,6vw,6.8rem)] font-black leading-[0.9]">
              Premium bir şey tasarlayalım.
            </h2>
          </div>
          <div className="space-y-4">
            <a
              href="mailto:hello@theapdesign.art"
              className="flex items-center justify-between rounded-full border border-white/12 bg-white px-5 py-4 font-semibold text-ink transition hover:bg-smoke"
            >
              <span className="flex items-center gap-3">
                <Mail size={19} />
                hello@theapdesign.art
              </span>
              <ArrowRight size={18} />
            </a>
            <div className="grid grid-cols-2 gap-3 text-sm font-semibold text-white/70">
              <a href="https://instagram.com/" className="rounded-full border border-white/12 px-5 py-4 text-center transition hover:border-white/35 hover:text-white">
                Instagram
              </a>
              <a href="https://behance.net/" className="rounded-full border border-white/12 px-5 py-4 text-center transition hover:border-white/35 hover:text-white">
                Behance
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 The AP Design</span>
          <div className="flex flex-wrap gap-4 text-white/55">
            <InternalLink href="/del-it" navigate={navigate} className="transition hover:text-white">
              Del-it
            </InternalLink>
            <InternalLink href="/privacy-policy" navigate={navigate} className="transition hover:text-white">
              Privacy Policy
            </InternalLink>
            <InternalLink href="/support" navigate={navigate} className="transition hover:text-white">
              Support
            </InternalLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SectionLabel({ eyebrow, title, dark = false }) {
  return (
    <div>
      <p className={`mb-4 text-sm font-bold uppercase tracking-[0.28em] text-electric`}>
        {eyebrow}
      </p>
      <h2 className={`max-w-3xl font-display text-4xl font-black leading-none sm:text-6xl ${dark ? 'text-ink' : 'text-white'}`}>
        {title}
      </h2>
    </div>
  );
}

function InfoCard({ icon: Icon, title, description }) {
  return (
    <article className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink">
        <Icon size={20} />
      </div>
      <h3 className="mt-8 font-display text-2xl font-black">{title}</h3>
      <p className="mt-3 text-base leading-7 text-white/62">{description}</p>
    </article>
  );
}

function FaqSection({ eyebrow, title, items, className = '' }) {
  return (
    <section className={className}>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionLabel eyebrow={eyebrow} title={title} />
        </div>
        <div className="mt-12 grid gap-4">
          {items.map((item) => (
            <details key={item.question} className="group rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-6 open:border-white/20">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-xl font-black text-white">
                <span>{item.question}</span>
                <ChevronRight className="transition duration-300 group-open:rotate-90" size={20} />
              </summary>
              <p className="mt-4 max-w-4xl text-base leading-8 text-white/62">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricRow({ label, value }) {
  return (
    <div className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm">
      <span className="text-white/60">{label}</span>
      <span className="font-semibold text-white">{value}</span>
    </div>
  );
}

function PhoneMockup({ variant }) {
  const isRight = variant === 'right';

  return (
    <div className={`relative ${isRight ? 'pt-12' : 'pt-2'}`}>
      <div className="rounded-[2rem] border border-white/12 bg-white/[0.04] p-3 shadow-glow backdrop-blur-xl">
        <div className={`rounded-[1.75rem] border border-white/10 p-4 ${isRight ? 'bg-[#0f1627]' : 'bg-[#10141f]'}`}>
          <div className="mb-4 flex justify-center">
            <span className="h-1.5 w-16 rounded-full bg-white/20" />
          </div>
          <div className={`rounded-[1.4rem] border border-white/10 bg-gradient-to-br ${isRight ? 'from-violet/35 via-electric/10 to-transparent' : 'from-electric/35 via-white/6 to-transparent'} p-4`}>
            <div className="rounded-[1.1rem] border border-white/10 bg-ink/70 p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-white/48">{isRight ? 'Temizleme özeti' : 'Benzer fotoğraflar'}</p>
                  <p className="font-display text-2xl font-black">{isRight ? '6.8 GB' : '142 küme'}</p>
                </div>
                <img src="/del-it-mark.svg" alt="Del-it" className="h-8 w-8 opacity-90" />
              </div>
              <div className="mt-5 grid gap-3">
                {[0, 1, 2].map((item) => (
                  <div key={item} className="rounded-[1rem] border border-white/10 bg-white/6 px-4 py-4">
                    <div className="mb-2 h-20 rounded-[0.85rem] bg-gradient-to-br from-white/18 to-white/5" />
                    <div className="flex items-center justify-between text-xs text-white/55">
                      <span>{isRight ? 'Seçilenler' : 'Benzer seri'}</span>
                      <span>{isRight ? `${item + 8} fotoğraf` : `${item + 3} öneri`}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FormField({ label, name, type, autoComplete }) {
  return (
    <label className="grid gap-2 text-sm font-semibold text-white/70">
      <span>{label}</span>
      <input
        name={name}
        type={type}
        autoComplete={autoComplete}
        required
        className="h-14 rounded-[1.2rem] border border-white/10 bg-white/5 px-4 text-base text-white outline-none transition placeholder:text-white/28 focus:border-white/30 focus:bg-white/7"
        placeholder={label}
      />
    </label>
  );
}

function InternalLink({ href, navigate, className, children }) {
  const handleClick = (event) => {
    event.preventDefault();
    navigate(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

function getRoute() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  return pageMeta[path] ? path : '/';
}

function updateMeta(route) {
  const meta = pageMeta[route] || pageMeta['/'];
  const url = `https://theapdesign.art${route}`;

  document.title = meta.title;
  setMetaTag('name', 'description', meta.description);
  setMetaTag('property', 'og:type', 'website');
  setMetaTag('property', 'og:url', url);
  setMetaTag('property', 'og:title', meta.ogTitle);
  setMetaTag('property', 'og:description', meta.ogDescription);
  setMetaTag('property', 'og:site_name', 'The AP Design');
  setMetaTag('property', 'og:image', meta.image);
  setMetaTag('name', 'twitter:card', 'summary_large_image');
  setMetaTag('name', 'twitter:title', meta.ogTitle);
  setMetaTag('name', 'twitter:description', meta.ogDescription);
  setMetaTag('name', 'twitter:image', meta.image);
  setCanonical(url);
  trackPageView(route, url);
}

function setMetaTag(attribute, key, content) {
  let tag = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
}

function setCanonical(url) {
  let link = document.head.querySelector('link[rel="canonical"]');

  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }

  link.setAttribute('href', url);
}

function trackPageView(route, url) {
  if (typeof window.gtag === 'function') {
    window.gtag('config', 'G-W219ZBJWH0', {
      page_path: route,
      page_location: url,
      page_title: document.title,
    });
  }
}

createRoot(document.getElementById('root')).render(<App />);
