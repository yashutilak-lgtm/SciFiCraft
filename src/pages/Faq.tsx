import { ChevronDown, Clock, Package, ShieldCheck } from 'lucide-react'
import { useId, useState } from 'react'
import { MotionSection } from '../components/ui/MotionSection'
import { useSeo } from '../hooks/useSeo'

const items = [
  {
    q: 'Which materials do you offer?',
    a: 'PLA, PETG, ABS for FDM and Resin for high-detail parts (more options like Nylon are available on request). Material choice depends on strength, heat resistance, and surface finish requirements.',
    icon: ShieldCheck,
  },
  {
    q: 'What is the typical turnaround time?',
    a: 'Most prototype jobs ship in 24–72 hours after file approval. Production runs and premium finishing take longer depending on quantity and post-processing.',
    icon: Clock,
  },
  {
    q: 'Do you ship across India?',
    a: 'Yes. We pack parts with QC and ship pan‑India. Delivery time depends on your location and courier network.',
    icon: Package,
  },
  {
    q: 'How do you ensure quality and fit?',
    a: 'We validate orientation and support strategy, use calibrated printers, and run a basic QC check for warping and dimensional issues. For production, we can add documented print parameters and batch QC (integration-ready).',
    icon: ShieldCheck,
  },
  {
    q: 'Can you print from STEP/IGES or only STL?',
    a: 'We accept STL for direct printing and can also work from STEP/IGES for design adjustments. If you only have a concept, share sketches and we can help with CAD.',
    icon: Package,
  },
]

export function Faq() {
  useSeo(
    'FAQ | Nirmaan3D — Materials, Turnaround & Shipping',
    'Answers to common questions about 3D printing materials, turnaround time, shipping, quality assurance, and file formats.',
  )
  const id = useId()
  const [open, setOpen] = useState<number>(0)

  return (
    <MotionSection className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-cyan">Help</p>
        <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          FAQ — quick answers
        </h1>
        <p className="mt-4 text-muted">
          If you’re unsure about material or finish, start with the configurator and we’ll review before printing.
        </p>
      </div>

      <div className="mt-10 grid gap-4">
        {items.map((it, idx) => {
          const isOpen = open === idx
          const panelId = `${id}-panel-${idx}`
          const btnId = `${id}-btn-${idx}`
          return (
            <section key={it.q} className="overflow-hidden rounded-2xl border border-border bg-surface/55">
              <button
                id={btnId}
                type="button"
                className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen((p) => (p === idx ? -1 : idx))}
              >
                <div className="flex items-center gap-3">
                  <it.icon className="h-5 w-5 text-neon-purple" aria-hidden />
                  <span className="font-medium text-foreground">{it.q}</span>
                </div>
                <ChevronDown
                  className={[
                    'h-5 w-5 text-muted transition',
                    isOpen ? 'rotate-180 text-foreground' : '',
                  ].join(' ')}
                  aria-hidden
                />
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={btnId}
                className={[isOpen ? 'block' : 'hidden', 'px-5 pb-5 text-sm text-muted'].join(' ')}
              >
                {it.a}
              </div>
            </section>
          )
        })}
      </div>
    </MotionSection>
  )
}

