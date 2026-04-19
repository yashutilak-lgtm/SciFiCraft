import { ArrowRight, BadgeCheck, Boxes, Crown, Rocket } from 'lucide-react'
import { Link } from 'react-router-dom'
import { MotionSection } from '../components/ui/MotionSection'
import { useQuote } from '../context/QuoteContext'
import { useSeo } from '../hooks/useSeo'

const tiers = [
  {
    name: 'Prototype printing',
    icon: Rocket,
    price: 'From ₹399',
    desc: 'Fast, affordable iterations for fit & function.',
    bullets: ['24–72 hrs typical dispatch', 'PLA/PETG/ABS options', 'Basic QC + packing'],
    cta: 'Order prototype',
  },
  {
    name: 'Production printing',
    icon: Boxes,
    price: 'Volume pricing',
    desc: 'Predictable batches with documented parameters.',
    bullets: ['Batch QC + repeatability', 'Bulk discounts', 'Dedicated support window'],
    cta: 'Get bulk quote',
    highlight: true,
  },
  {
    name: 'Premium finishing',
    icon: Crown,
    price: 'From ₹999',
    desc: 'Client-ready parts with surface + paint options.',
    bullets: ['Sanding + smoothing', 'Primer/paint (mock)', 'Assembly & inserts optional'],
    cta: 'Add finishing',
  },
]

export function Pricing() {
  useSeo(
    'Pricing | Nirmaan3D — Prototype, Production & Finishing',
    'Transparent pricing tiers for 3D printing in India: prototypes, production runs, premium finishing, and custom quotes.',
  )
  const { openQuote } = useQuote()

  return (
    <MotionSection className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-purple">Pricing</p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Choose the speed & finish you need
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Straightforward tiers for most orders, plus custom quotes for complex geometry and large batches.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/products"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-neon-cyan/40"
          >
            Shop products
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <button
            type="button"
            onClick={openQuote}
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue px-5 py-2.5 text-sm font-semibold text-bg shadow-lg transition hover:brightness-110"
          >
            Get custom quote
            <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <section
            key={t.name}
            className={[
              'relative overflow-hidden rounded-2xl border bg-surface/55 p-6',
              t.highlight ? 'border-neon-cyan/35 shadow-glow-cyan' : 'border-border',
            ].join(' ')}
          >
            {t.highlight && (
              <div className="absolute right-6 top-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-bg/70 px-3 py-1 text-[11px] font-semibold text-foreground/90">
                <BadgeCheck className="h-3.5 w-3.5 text-neon-cyan" aria-hidden />
                Most popular
              </div>
            )}
            <t.icon className="h-8 w-8 text-neon-purple" aria-hidden />
            <h2 className="mt-4 font-display text-xl font-semibold text-foreground">{t.name}</h2>
            <p className="mt-2 text-sm text-muted">{t.desc}</p>
            <div className="mt-5 text-2xl font-semibold text-foreground">{t.price}</div>
            <ul className="mt-5 space-y-2 text-sm text-muted">
              {t.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neon-cyan/70" aria-hidden />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link
                to="/services"
                className="focus-ring inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue px-5 py-2.5 text-sm font-semibold text-bg transition hover:brightness-110"
              >
                {t.cta}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-border bg-bg-elevated/40 p-6">
        <h2 className="font-display text-lg font-semibold text-foreground">Large orders & enterprise</h2>
        <p className="mt-2 text-sm text-muted">
          Need \(500+\) parts, strict QA docs, or scheduled deliveries? We’ll build a custom quote with lead time and QC plan.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={openQuote}
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-neon-cyan/40"
          >
            Request enterprise quote
            <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
          <Link
            to="/faq"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-border bg-bg/30 px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-neon-cyan/40"
          >
            FAQ & materials
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </MotionSection>
  )
}

