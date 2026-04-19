import { motion } from 'framer-motion'
import {
  Boxes,
  Cpu,
  Factory,
  PenTool,
  Ruler,
  Settings2,
  Shield,
  Timer,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { ServiceCustomizer } from '../components/commerce/ServiceCustomizer'
import { MotionSection } from '../components/ui/MotionSection'
import { useQuote } from '../context/QuoteContext'
import { useSeo } from '../hooks/useSeo'

const items = [
  {
    title: 'Rapid prototyping',
    blurb: 'Iterate weekly, not monthly — print complex geometries that machining cannot justify yet.',
    icon: Cpu,
    uses: ['Fit checks', 'Investor demos', 'Thermal / flow experiments'],
  },
  {
    title: 'Custom 3D printing',
    blurb: 'One-offs or short runs with material selection guided by your environment and loads.',
    icon: Boxes,
    uses: ['Replacement parts', 'Jigs', 'Custom enclosures'],
  },
  {
    title: 'CAD design',
    blurb: 'We translate requirements into robust solids — draft angles, tolerances, and printability baked in.',
    icon: PenTool,
    uses: ['Concept to STEP', 'Design for AM', 'File repair'],
  },
  {
    title: 'Batch production',
    blurb: 'Repeatable process control for small and mid batches without traditional tooling lead times.',
    icon: Factory,
    uses: ['Kickstarter fulfilment', 'Spare part programs', 'Pilot manufacturing'],
  },
]

export function Services() {
  useSeo(
    'Services | Nirmaan3D — Rapid Prototyping & 3D Printing',
    'Rapid prototyping, custom 3D printing, CAD design, and batch production for teams in India.',
  )
  const { openQuote } = useQuote()

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="bg-grid absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-cyan">Services</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Engineering-first <span className="text-gradient">D2C printing</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Configure, estimate, and order in minutes — then we review for strength, tolerance, and finish before we print.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/products"
              className="focus-ring inline-flex rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue px-7 py-3 text-sm font-semibold text-bg shadow-lg transition hover:brightness-110"
            >
              Order now
            </Link>
            <button
              type="button"
              onClick={openQuote}
              className="focus-ring inline-flex rounded-full border border-border bg-surface/70 px-7 py-3 text-sm font-semibold text-foreground transition hover:border-neon-cyan/40 hover:shadow-glow-cyan"
            >
              Get quote (upload)
            </button>
          </div>
        </div>
      </section>

      <MotionSection className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <ServiceCustomizer />
      </MotionSection>

      <MotionSection className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {items.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-panel group relative overflow-hidden rounded-3xl p-8"
            >
              <div className="pointer-events-none absolute -right-16 top-0 h-40 w-40 rounded-full bg-neon-purple/15 blur-3xl transition group-hover:bg-neon-cyan/15" />
              <div className="flex items-start gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-surface/80 text-neon-cyan shadow-[0_0_30px_rgba(34,211,238,0.15)]">
                  <item.icon className="h-7 w-7" aria-hidden />
                </span>
                <div>
                  <h2 className="font-display text-xl font-semibold text-foreground">{item.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.blurb}</p>
                  <p className="mt-5 text-xs font-semibold uppercase tracking-widest text-neon-purple/90">
                    Use cases
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-foreground/90">
                    {item.uses.map((u) => (
                      <li key={u} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-neon-cyan" aria-hidden />
                        {u}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </MotionSection>

      <section className="border-t border-border/70 bg-bg-elevated/40">
        <MotionSection className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-3">
            {[
              { icon: Ruler, title: 'Precision', body: 'Calibrated machines, documented nozzle & bed health.' },
              { icon: Timer, title: 'Speed', body: 'Parallel capacity so your timeline stays aggressive.' },
              { icon: Shield, title: 'Reliability', body: 'QC checkpoints before anything leaves the lab.' },
              { icon: Settings2, title: 'DFAM', body: 'Orientation and infill tuned to your failure mode.' },
            ].map((b) => (
              <div key={b.title} className="rounded-2xl border border-border/80 bg-surface/40 p-6">
                <b.icon className="h-8 w-8 text-neon-blue" aria-hidden />
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{b.title}</h3>
                <p className="mt-2 text-sm text-muted">{b.body}</p>
              </div>
            ))}
          </div>
        </MotionSection>
      </section>

      <section id="pricing-tiers" className="border-t border-border/70">
        <MotionSection className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-purple">Pricing tiers</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Prototype → Production → Premium finish
              </h2>
              <p className="mt-4 max-w-2xl text-muted">
                Use the configurator for instant estimates. For large batches, we’ll confirm a volume plan and QC checklist.
              </p>
            </div>
            <Link
              to="/pricing"
              className="focus-ring inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-neon-cyan/40"
            >
              See full pricing
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Prototype printing',
                body: 'Fast iterations for fit, function, and assembly checks.',
                cta: 'Estimate + add to cart',
              },
              {
                title: 'Production printing',
                body: 'Bulk orders with repeatability and predictable unit cost.',
                cta: 'Request bulk quote',
                highlight: true,
              },
              {
                title: 'Premium finishing',
                body: 'Client-ready parts with surface treatment options.',
                cta: 'Add finishing at checkout',
              },
            ].map((t) => (
              <div
                key={t.title}
                className={[
                  'rounded-2xl border p-6',
                  t.highlight ? 'border-neon-cyan/35 bg-surface/65 shadow-glow-cyan' : 'border-border bg-surface/55',
                ].join(' ')}
              >
                <h3 className="font-display text-lg font-semibold text-foreground">{t.title}</h3>
                <p className="mt-2 text-sm text-muted">{t.body}</p>
                <div className="mt-6 flex gap-3">
                  {t.highlight ? (
                    <button
                      type="button"
                      onClick={openQuote}
                      className="focus-ring inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue px-6 py-3 text-sm font-semibold text-bg transition hover:brightness-110"
                    >
                      {t.cta}
                    </button>
                  ) : (
                    <Link
                      to="/cart"
                      className="focus-ring inline-flex w-full items-center justify-center rounded-full border border-border bg-bg/20 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-neon-cyan/40"
                    >
                      {t.cta}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </MotionSection>
      </section>
    </>
  )
}
