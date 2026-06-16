import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowRight,
  BadgeCheck,
  Layers3,
  Mail,
  MonitorSmartphone,
  PenTool,
  Sparkles,
  Wand2,
} from 'lucide-react';
import './styles.css';

const services = [
  { title: 'UI/UX Design', icon: Layers3 },
  { title: 'Website Design', icon: MonitorSmartphone },
  { title: 'App Design', icon: PenTool },
  { title: 'Brand Identity', icon: BadgeCheck },
  { title: 'Social Media Design', icon: Sparkles },
  { title: 'AI-assisted Creative Design', icon: Wand2 },
];

const works = [
  ['Interface System', 'SaaS dashboard concept', 'from-electric/70 via-white to-violet/80'],
  ['Brand Launch', 'Identity and social direction', 'from-violet/75 via-white to-zinc-300'],
  ['Mobile Flow', 'Premium app experience', 'from-zinc-900 via-electric/70 to-white'],
  ['Studio Website', 'Editorial web presence', 'from-white via-zinc-300 to-electric/60'],
  ['Creator Kit', 'Campaign visuals and templates', 'from-violet/70 via-zinc-950 to-electric/70'],
  ['Digital Product', 'UX, visuals and launch assets', 'from-zinc-200 via-white to-violet/70'],
];

const process = ['Discover', 'Design', 'Refine', 'Deliver'];

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-ink text-white">
      <BackgroundGrid />
      <Header />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <Contact />
    </main>
  );
}

function BackgroundGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(47,107,255,0.18),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.07),transparent_22%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
    </div>
  );
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-ink/70 backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex items-center gap-3" aria-label="The AP Design home">
          <span className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white shadow-soft">
            <img src="/ap-logo.svg" alt="AP Design logo" className="h-8 w-8 object-contain" />
          </span>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.26em] text-white">
            AP Design
          </span>
        </a>
        <div className="hidden items-center gap-8 text-sm text-white/64 md:flex">
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#services" className="transition hover:text-white">Services</a>
          <a href="#works" className="transition hover:text-white">Works</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </div>
        <a
          href="#contact"
          className="inline-flex h-11 items-center gap-2 rounded-full border border-white/15 bg-white px-5 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-smoke"
        >
          Contact
          <ArrowRight size={16} />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative z-10 min-h-[92vh] px-5 pt-32 sm:px-8 lg:pt-36">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="max-w-4xl">
          <p className="mb-7 inline-flex rounded-full border border-white/12 bg-white/7 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/68">
            theapdesign.art
          </p>
          <h1 className="font-display text-[clamp(3.8rem,9vw,9.8rem)] font-black leading-[0.86] tracking-normal">
            Design that feels{' '}
            <span className="animate-sheen bg-gradient-to-r from-white via-electric to-violet bg-[length:220%_220%] bg-clip-text text-transparent">
              premium.
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
            Modern websites, app interfaces, brand visuals and digital experiences crafted with
            detail.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#works"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-bold text-ink transition hover:-translate-y-1 hover:bg-smoke"
            >
              View Works
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/15 px-7 text-sm font-bold text-white transition hover:-translate-y-1 hover:border-white/40 hover:bg-white/8"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[520px] lg:mr-0">
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-electric/40 to-violet/35 blur-3xl" />
          <div className="relative animate-float rounded-[2rem] border border-white/12 bg-white/[0.04] p-8 shadow-glow backdrop-blur-xl">
            <div className="aspect-square rounded-[1.6rem] border border-white/12 bg-smoke p-10">
              <img src="/ap-logo.svg" alt="AP Design monogram" className="h-full w-full object-contain" />
            </div>
            <div className="mt-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-white/45">Creative Studio</p>
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
  const items = ['UI/UX', 'Websites', 'Brand Visuals', 'Creative Direction', 'App Interfaces'];
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
        <SectionLabel eyebrow="About" title="A digital studio for crisp, premium visuals." />
        <div className="text-balance text-2xl font-medium leading-tight text-white/82 sm:text-4xl">
          The AP Design focuses on digital design, UI/UX, brand visuals and creative direction for
          brands that want their online presence to feel sharp, intentional and memorable.
          <p className="mt-8 text-lg leading-8 text-white/58">
            Every detail is shaped for clarity: clean interfaces, refined visual systems, responsive
            web experiences and launch-ready creative assets.
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
        <SectionLabel eyebrow="Services" title="Design systems for digital presence." dark />
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
          <SectionLabel eyebrow="Portfolio" title="Selected visual directions." />
          <p className="max-w-md text-white/58">
            Gradient mockups preview the range: interfaces, digital launches, identity systems and
            social-first creative campaigns.
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
                  <span className="text-xs font-bold uppercase tracking-[0.22em]">Project {index + 1}</span>
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

function Process() {
  return (
    <section className="relative z-10 bg-white px-5 py-24 text-ink sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionLabel eyebrow="Process" title="Simple steps, precise execution." dark />
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

function Contact() {
  return (
    <footer id="contact" className="relative z-10 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-electric">Contact</p>
            <h2 className="font-display text-[clamp(2.6rem,6vw,6.8rem)] font-black leading-[0.9]">
              Let&apos;s create something premium.
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
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row">
          <span>© 2026 The AP Design</span>
          <span>theapdesign.art</span>
        </div>
      </div>
    </footer>
  );
}

function SectionLabel({ eyebrow, title, dark = false }) {
  return (
    <div>
      <p className={`mb-4 text-sm font-bold uppercase tracking-[0.28em] ${dark ? 'text-electric' : 'text-electric'}`}>
        {eyebrow}
      </p>
      <h2 className={`max-w-3xl font-display text-4xl font-black leading-none sm:text-6xl ${dark ? 'text-ink' : 'text-white'}`}>
        {title}
      </h2>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
