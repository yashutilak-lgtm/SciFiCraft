import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useMemo, useState } from 'react'
import type { PortfolioItem } from '../../data/portfolio'

export function BeforeAfterCarousel({ items }: { items: PortfolioItem[] }) {
  const slides = useMemo(() => items.filter((i) => i.cadBeforeSrc && i.printAfterSrc).slice(0, 8), [items])
  const [idx, setIdx] = useState(0)
  const [split, setSplit] = useState(50)

  const current = slides[idx]
  if (!current) return null

  return (
    <section className="overflow-hidden rounded-[2rem] border border-border bg-surface/55">
      <div className="flex flex-col gap-4 border-b border-border/70 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-cyan">Before & after</div>
          <h2 className="mt-2 font-display text-2xl font-semibold text-foreground">CAD → printed reality</h2>
          <p className="mt-2 text-sm text-muted">Drag the slider to compare, then switch projects.</p>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-border bg-bg/20 px-4 py-2 text-xs font-semibold text-foreground transition hover:border-neon-cyan/35"
            onClick={() => setIdx((p) => (p - 1 + slides.length) % slides.length)}
            aria-label="Previous project"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden />
            Prev
          </button>
          <button
            type="button"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-border bg-bg/20 px-4 py-2 text-xs font-semibold text-foreground transition hover:border-neon-cyan/35"
            onClick={() => setIdx((p) => (p + 1) % slides.length)}
            aria-label="Next project"
          >
            Next
            <ChevronRight className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>

      <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_260px]">
        <div className="relative overflow-hidden rounded-2xl border border-border bg-bg/20">
          <div className="absolute inset-0">
            <img
              src={current.cadBeforeSrc!}
              alt={`${current.title} CAD before`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}>
            <img
              src={current.printAfterSrc!}
              alt={`${current.title} printed after`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

          <div className="absolute left-4 top-4 rounded-full bg-bg/70 px-3 py-1 text-[11px] font-semibold text-foreground ring-1 ring-white/10 backdrop-blur">
            Left: CAD
          </div>
          <div className="absolute right-4 top-4 rounded-full bg-bg/70 px-3 py-1 text-[11px] font-semibold text-foreground ring-1 ring-white/10 backdrop-blur">
            Right: Printed
          </div>

          <motion.div
            className="absolute bottom-0 left-0 right-0 p-4"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="font-display text-lg font-semibold text-foreground">{current.title}</div>
            <div className="mt-1 text-xs text-muted">
              {current.material} • {current.dimensions} • {current.turnaround} • {current.priceRange}
            </div>
          </motion.div>

          <div className="absolute bottom-4 left-1/2 w-[min(520px,90%)] -translate-x-1/2">
            <label className="sr-only" htmlFor="before-after-split">
              Split position
            </label>
            <input
              id="before-after-split"
              type="range"
              min={5}
              max={95}
              value={split}
              onChange={(e) => setSplit(Number(e.target.value))}
              className="w-full accent-[#22d3ee]"
            />
          </div>
        </div>

        <aside className="rounded-2xl border border-border bg-bg-elevated/35 p-5">
          <div className="text-xs font-semibold uppercase tracking-widest text-neon-purple">Specs</div>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {current.specs.slice(0, 4).map((s) => (
              <li key={s} className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neon-cyan/70" aria-hidden />
                <span>{s}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 text-xs text-muted">
            Smooth slide transitions are implemented; swap in real CAD renders + studio photos for maximum impact.
          </div>
        </aside>
      </div>
    </section>
  )
}

