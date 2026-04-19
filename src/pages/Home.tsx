import { motion } from 'framer-motion'
import {
  ArrowRight,
  Box,
  Cpu,
  Layers,
  Percent,
  Rocket,
  ShieldCheck,
  Sparkles,
  Truck,
  Upload,
  Zap,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProductCard } from '../components/commerce/ProductCard'
import { ParticleField } from '../components/effects/ParticleField'
import { MotionSection } from '../components/ui/MotionSection'
import { HeroShowcase3D } from '../components/three/HeroShowcase3D'
import { useQuote } from '../context/QuoteContext'
import { products } from '../data/products'
import { useSeo } from '../hooks/useSeo'

const services = [
  {
    title: 'Rapid prototyping',
    desc: 'Validate ergonomics and fit before you cut steel.',
    icon: Rocket,
  },
  {
    title: 'Production runs',
    desc: 'Consistent batches with documented print parameters.',
    icon: Layers,
  },
  {
    title: 'CAD & design',
    desc: 'From napkin sketch to print-ready solid models.',
    icon: Box,
  },
  {
    title: 'Engineering-grade',
    desc: 'Tight tolerances and materials matched to your load case.',
    icon: Cpu,
  },
]

const steps = [
  { title: 'Upload', body: 'Send STL/STEP or brief us on what you need.', icon: Upload },
  { title: 'Print', body: 'We orient, slice, and run on calibrated farm printers.', icon: Zap },
  { title: 'Deliver', body: 'QC, pack, and ship across India — fast.', icon: Truck },
]

const projects = [
  { title: 'Aerospace duct prototype', cat: 'Industrial', tone: 'from-neon-cyan/30 to-neon-blue/10' },
  { title: 'Robotics end-effector', cat: 'Prototype', tone: 'from-neon-purple/30 to-neon-pink/10' },
  { title: 'Consumer product shell', cat: 'Product', tone: 'from-neon-blue/25 to-neon-cyan/10' },
  { title: 'Medical jig & fixture', cat: 'Industrial', tone: 'from-emerald-400/20 to-neon-cyan/10' },
  { title: 'Drone chassis', cat: 'Prototype', tone: 'from-fuchsia-500/20 to-neon-purple/10' },
  { title: 'Architectural maquette', cat: 'Art', tone: 'from-amber-400/15 to-neon-pink/10' },
]

const testimonials = [
  {
    quote: 'Turnaround was absurdly fast. Parts snapped together first try — rare with outsourced prints.',
    name: 'Ananya K.',
    role: 'Hardware lead, Bangalore',
  },
  {
    quote: 'Clear communication on orientation and material trade-offs. Feels like an in-house lab.',
    name: 'Rahul M.',
    role: 'Indie robotics founder',
  },
  {
    quote: 'Batch pricing stayed predictable as we scaled from 5 to 200 units.',
    name: 'Studio Northwind',
    role: 'Product design collective',
  },
]

export function Home() {
  useSeo(
    'Nirmaan3D | Precision 3D Printing — SciFi Craft LLP',
    'From idea to reality — fast, affordable, high-quality 3D printing, rapid prototyping, and CAD for India.',
  )
  const { openQuote } = useQuote()
  const heroFallback =
    'data:image/svg+xml,' +
    encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="1200" viewBox="0 0 1200 1200">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#22d3ee" stop-opacity="0.32"/>
            <stop offset="0.55" stop-color="#6366f1" stop-opacity="0.18"/>
            <stop offset="1" stop-color="#a855f7" stop-opacity="0.28"/>
          </linearGradient>
          <radialGradient id="r" cx="30%" cy="20%" r="80%">
            <stop offset="0" stop-color="#ffffff" stop-opacity="0.12"/>
            <stop offset="1" stop-color="#000000" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="1200" height="1200" fill="#07080d"/>
        <rect width="1200" height="1200" fill="url(#g)"/>
        <rect width="1200" height="1200" fill="url(#r)"/>
        <g fill="none" stroke="#f1f5f9" stroke-opacity="0.10">
          <path d="M250 310 C420 120, 650 90, 850 210 C1050 340, 1120 590, 1000 820 C860 1080, 520 1120, 320 960 C140 820, 120 520, 250 310 Z"/>
        </g>
        <text x="72" y="120" fill="#f1f5f9" fill-opacity="0.92" font-family="ui-sans-serif,system-ui" font-size="34" font-weight="700">Rotating 3D hero (fallback)</text>
        <text x="72" y="168" fill="#94a3b8" fill-opacity="0.95" font-family="ui-sans-serif,system-ui" font-size="18">Static image for mobile/slow devices</text>
      </svg>`,
    )

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="bg-grid bg-noise absolute inset-0 opacity-90" />
        <ParticleField className="opacity-80" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 pb-24 pt-16 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:pt-24">
          <div className="flex-1">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-neon-cyan"
            >
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              SciFi Craft LLP
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              From Idea to Reality —{' '}
              <span className="text-gradient">Precision 3D Printing</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-6 max-w-xl text-lg text-muted"
            >
              Fast, affordable, and high-quality 3D printing solutions for engineers, startups, students,
              and manufacturing teams across India.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/products"
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple px-7 py-3.5 text-sm font-semibold text-bg shadow-xl shadow-neon-purple/25 transition hover:brightness-110"
              >
                Order now
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <button
                type="button"
                onClick={openQuote}
                className="focus-ring inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-7 py-3.5 text-sm font-semibold text-foreground transition hover:border-neon-cyan/40 hover:shadow-glow-cyan"
              >
                Get quote (upload)
                <Upload className="h-4 w-4" aria-hidden />
              </button>
              <Link
                to="/pricing"
                className="focus-ring inline-flex items-center gap-2 rounded-full border border-border bg-bg/30 px-7 py-3.5 text-sm font-semibold text-foreground transition hover:border-neon-cyan/40"
              >
                Bulk pricing
                <Percent className="h-4 w-4" aria-hidden />
              </Link>
            </motion.div>
            <dl className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-3">
              {[
                { k: 'Tolerance', v: '±0.2 mm*' },
                { k: 'Materials', v: 'PLA · PETG · ABS · Resin' },
                { k: 'Shipping', v: 'Pan-India' },
              ].map((row) => (
                <div key={row.k} className="rounded-2xl border border-border/80 bg-surface/40 p-4">
                  <dt className="text-xs font-semibold uppercase tracking-widest text-muted">{row.k}</dt>
                  <dd className="mt-2 text-sm font-medium text-foreground">{row.v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-[11px] text-muted/70">*Typical FDM; varies by geometry and material.</p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="relative flex-1"
          >
            <div className="glass-panel relative max-w-md overflow-hidden rounded-[2rem] p-1 lg:ml-auto">
              <HeroShowcase3D title="Nirmaan3D hero model" modelSrc="/models/sample.glb" fallbackImg={heroFallback} />
              <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-bg/70 px-3 py-1 text-[11px] font-semibold text-foreground/90 backdrop-blur">
                Live 3D preview
              </div>
              <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3 text-center">
                {['Rotate', 'Zoom', 'Inspect'].map((label, i) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-bg/40 px-2 py-3 text-xs font-medium text-foreground"
                  >
                    <motion.span
                      animate={{ opacity: [0.55, 1, 0.55] }}
                      transition={{ duration: 2.2, delay: i * 0.2, repeat: Infinity }}
                    >
                      {label}
                    </motion.span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <MotionSection className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-surface/50 p-4 sm:p-5">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-foreground">
              <span className="font-semibold text-neon-cyan">Limited-time</span> prototype tier from ₹399 (mock).
            </div>
            <div className="text-xs text-muted">Fast dispatch • Pan‑India shipping • QC before packing</div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="mx-auto max-w-6xl px-4 pb-8 pt-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-purple">Shop</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Ready-to-ship products
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              Browse proven designs with transparent pricing, 4‑angle previews, and clear turnaround times.
            </p>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neon-cyan hover:text-neon-cyan/90"
          >
            View all products
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </MotionSection>

      <MotionSection className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-purple">Capabilities</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Built for serious prototypes
            </h2>
            <p className="mt-4 max-w-xl text-muted">
              End-to-end support from design intent to packaged parts — without the factory MOQ headache.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neon-cyan hover:text-neon-cyan/90"
          >
            View all services
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
              whileHover={{ y: -4 }}
              className="glass-panel group relative overflow-hidden rounded-2xl p-6 transition hover:border-neon-cyan/30"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-neon-cyan/10 blur-2xl transition group-hover:bg-neon-purple/20" />
              <s.icon className="h-8 w-8 text-neon-cyan" aria-hidden />
              <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
            </motion.article>
          ))}
        </div>
      </MotionSection>

      <section className="border-y border-border/70 bg-bg-elevated/40">
        <MotionSection className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-cyan">How it works</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Upload → Print → Deliver
            </h2>
            <p className="mt-4 text-muted">A calm, predictable workflow — so you can stay focused on the product.</p>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title} className="relative text-center">
                {i < steps.length - 1 && (
                  <div
                    className="absolute left-1/2 top-10 hidden h-px w-full bg-gradient-to-r from-transparent via-neon-cyan/40 to-transparent md:block"
                    style={{ width: 'calc(100% - 4rem)', transform: 'translateX(1.5rem)' }}
                    aria-hidden
                  />
                )}
                <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-border bg-surface/80 shadow-[0_0_40px_rgba(99,102,241,0.12)]">
                  <step.icon className="h-9 w-9 text-neon-purple" aria-hidden />
                  <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-bg text-xs font-bold text-neon-cyan ring-2 ring-border">
                    {i + 1}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.body}</p>
              </div>
            ))}
          </div>
        </MotionSection>
      </section>

      <MotionSection className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-purple">Selected work</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Featured projects
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neon-cyan hover:text-neon-cyan/90"
          >
            Open gallery
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <motion.article
              key={p.title}
              whileHover={{ y: -3 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface/50"
            >
              <div className={`relative aspect-[4/3] bg-gradient-to-br ${p.tone}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_55%)]" />
                <div className="absolute inset-6 rounded-xl border border-white/10 bg-bg/20 backdrop-blur-sm" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-semibold uppercase tracking-widest text-foreground/90">
                  <span>{p.cat}</span>
                  <ShieldCheck className="h-4 w-4 text-emerald-300" aria-hidden />
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-semibold text-foreground">{p.title}</h3>
                <p className="mt-1 text-sm text-muted">Placeholder visual — swap with photography.</p>
              </div>
            </motion.article>
          ))}
        </div>
      </MotionSection>

      <section className="border-t border-border/70 bg-gradient-to-b from-bg to-bg-elevated/80">
        <MotionSection className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-cyan">Proof</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Teams that ship with us
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {[
              { k: 'Avg rating', v: '4.7 / 5' },
              { k: 'Reviews', v: '500+ (mock)' },
              { k: 'Dispatch', v: '24–72 hrs' },
              { k: 'Warranty', v: 'Fit/defect policy (mock)' },
            ].map((t) => (
              <div key={t.k} className="rounded-2xl border border-border/80 bg-surface/40 p-5 text-center">
                <div className="text-xs font-semibold uppercase tracking-widest text-muted">{t.k}</div>
                <div className="mt-2 font-display text-xl font-semibold text-foreground">{t.v}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="glass-panel rounded-2xl p-6"
              >
                <p className="text-sm leading-relaxed text-foreground/90">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-5 text-sm">
                  <cite className="not-italic font-semibold text-foreground">{t.name}</cite>
                  <p className="text-xs text-muted">{t.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </MotionSection>
      </section>

      <section className="border-t border-border/70 bg-bg-elevated/30">
        <MotionSection className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-cyan">FAQ</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Materials, shipping, turnaround
              </h2>
              <p className="mt-4 max-w-2xl text-muted">
                Clear answers so you can order confidently — and spend less time in back-and-forth.
              </p>
            </div>
            <Link
              to="/faq"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-neon-cyan/40"
            >
              Open FAQ
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { q: 'Which material should I choose?', a: 'Pick based on strength, heat, and finish. Use the configurator for a quick estimate.' },
              { q: 'How fast can you ship?', a: 'Many prototypes dispatch in 24–72 hrs after review; finishing and production take longer.' },
              { q: 'Do you ship pan‑India?', a: 'Yes. We pack after QC and ship across India. Delivery depends on courier and location.' },
            ].map((f) => (
              <div key={f.q} className="rounded-2xl border border-border bg-surface/50 p-6">
                <h3 className="font-display text-lg font-semibold text-foreground">{f.q}</h3>
                <p className="mt-2 text-sm text-muted">{f.a}</p>
                <div className="mt-4">
                  <Link to="/services" className="text-sm font-semibold text-neon-cyan hover:text-neon-cyan/90">
                    Get instant estimate →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </MotionSection>
      </section>

      <MotionSection className="mx-auto max-w-6xl px-4 pb-6 pt-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-border bg-surface/60 px-8 py-10 sm:px-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-purple">Newsletter</p>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground">
                Get DFM tips + offers
              </h2>
              <p className="mt-2 text-sm text-muted">
                Monthly. No spam. Learn which materials and tolerances work best for functional parts.
              </p>
            </div>
            <form
              className="flex w-full max-w-md flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter signup"
            >
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="flex-1 rounded-full border border-border bg-bg/30 px-5 py-3 text-sm text-foreground outline-none focus:border-neon-cyan/50"
              />
              <button
                type="submit"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue px-6 py-3 text-sm font-semibold text-bg shadow-lg transition hover:brightness-110"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="mt-4 text-xs text-muted">Email capture is frontend-only placeholder (wire to Mailchimp/Resend/etc.).</div>
        </div>
      </MotionSection>

      <MotionSection className="mx-auto max-w-6xl px-4 pb-24 pt-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface/60 px-8 py-14 text-center shadow-[0_0_80px_rgba(34,211,238,0.12)] sm:px-14">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-neon-cyan/10 via-transparent to-neon-purple/15" />
          <h2 className="relative font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Ready when your CAD is.
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-muted">
            Share files today — we&apos;ll reply with orientation notes, material options, and a clear quote.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue px-8 py-3.5 text-sm font-semibold text-bg shadow-lg transition hover:brightness-110"
            >
              Start an order
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <button
              type="button"
              onClick={openQuote}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-bg/40 px-8 py-3.5 text-sm font-semibold text-foreground transition hover:border-neon-cyan/40"
            >
              Instant quote
            </button>
          </div>
        </div>
      </MotionSection>
    </>
  )
}
