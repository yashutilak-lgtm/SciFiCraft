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
import { MotionSection } from '../components/ui/MotionSection'
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

  return (
    <>
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="bg-grid absolute inset-0 opacity-50" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-cyan">Services</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Engineering-first <span className="text-gradient">additive</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Every engagement starts with how your part will be used — not just how it will be printed.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple px-7 py-3 text-sm font-semibold text-bg shadow-lg"
            >
              Request a quote
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex rounded-full border border-border px-7 py-3 text-sm font-semibold text-foreground hover:border-neon-cyan/40"
            >
              See work
            </Link>
          </div>
        </div>
      </section>

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
    </>
  )
}
