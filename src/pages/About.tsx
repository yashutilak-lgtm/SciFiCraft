import { Award, Gauge, IndianRupee, Sparkles, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import { MotionSection } from '../components/ui/MotionSection'
import { useSeo } from '../hooks/useSeo'

const reasons = [
  {
    title: 'High precision',
    body: 'Dimensional discipline and process logs — not “it looks fine” hand-waving.',
    icon: Gauge,
  },
  {
    title: 'Fast delivery',
    body: 'Parallel print capacity and realistic ETAs — we respect your demo dates.',
    icon: Sparkles,
  },
  {
    title: 'Affordable pricing',
    body: 'Transparent quotes: material, time, risk — optimized for startups, not surprises.',
    icon: IndianRupee,
  },
]

export function About() {
  useSeo(
    'About | SciFi Craft LLP — Nirmaan3D',
    'Our story, mission, and why teams choose Nirmaan3D for 3D printing in India.',
  )

  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-cyan">About</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            SciFi Craft LLP
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
            Nirmaan3D is the customer-facing studio of <strong className="text-foreground">SciFi Craft LLP</strong> — a
            team obsessed with making advanced manufacturing feel approachable. We started with a simple belief:
            India&apos;s builders deserve prototype quality that matches global labs, without the global price tag or
            lead times.
          </p>
        </div>
      </section>

      <MotionSection className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-neon-purple">
              <Target className="h-3.5 w-3.5" aria-hidden />
              Mission
            </div>
            <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight text-foreground">
              Innovation through 3D printing
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              We help you compress the distance between CAD and reality — with materials guidance, design for additive
              manufacturing, and QC that respects your downstream assembly. Whether you are a student team, a venture-backed
              startup, or a plant engineer, we speak your language: tolerances, timelines, and trade-offs.
            </p>
            <p className="mt-4 text-muted leading-relaxed">
              Based in India, shipping nationwide — built for the pace of hardware iteration.
            </p>
          </div>
          <div className="glass-panel relative overflow-hidden rounded-3xl p-8">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-neon-cyan/20 blur-3xl" />
            <Award className="relative h-10 w-10 text-neon-cyan" aria-hidden />
            <p className="relative mt-6 text-sm leading-relaxed text-foreground/90">
              We treat every order like a reputation contract — because in hardware, trust is the real product.
            </p>
            <p className="relative mt-4 text-xs uppercase tracking-widest text-muted">SciFi Craft LLP · Nirmaan3D</p>
          </div>
        </div>
      </MotionSection>

      <section className="border-y border-border/70 bg-bg-elevated/40">
        <MotionSection className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Why teams choose us
            </h2>
            <p className="mt-3 text-muted">Operational rigor you can feel in the first delivery.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-2xl border border-border bg-surface/50 p-6">
                <r.icon className="h-9 w-9 text-neon-purple" aria-hidden />
                <h3 className="mt-4 font-display text-lg font-semibold text-foreground">{r.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </MotionSection>
      </section>

      <MotionSection className="mx-auto max-w-6xl px-4 pb-24 pt-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-border bg-gradient-to-br from-surface/80 to-bg p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="font-display text-2xl font-semibold text-foreground">Let&apos;s build the next revision.</h2>
            <p className="mt-2 text-sm text-muted">Share your files — we&apos;ll respond with a clear path to parts.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple px-8 py-3 text-sm font-semibold text-bg shadow-lg"
          >
            Contact studio
          </Link>
        </div>
      </MotionSection>
    </>
  )
}
