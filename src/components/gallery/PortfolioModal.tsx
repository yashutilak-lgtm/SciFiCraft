import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { PortfolioItem } from '../../data/portfolio'
import { ModelViewer } from '../three/ModelViewer'

export function PortfolioModal({
  item,
  onClose,
}: {
  item: PortfolioItem | null
  onClose: () => void
}) {
  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-[95] flex items-end justify-center p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${item.title} details`}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-label="Close portfolio details backdrop"
            onClick={onClose}
          />

          <motion.div
            initial={{ y: 30, opacity: 0, scale: 0.985 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 18, opacity: 0, scale: 0.985 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-border bg-bg-elevated shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-border/70 p-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">{item.category}</div>
                <h2 className="mt-2 font-display text-2xl font-semibold text-foreground">{item.title}</h2>
                <p className="mt-2 text-sm text-muted">
                  Material: <span className="text-foreground/90">{item.material}</span> • Dimensions:{' '}
                  <span className="text-foreground/90">{item.dimensions}</span> • Turnaround:{' '}
                  <span className="text-foreground/90">{item.turnaround}</span> • Price:{' '}
                  <span className="text-foreground/90">{item.priceRange}</span>
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="focus-ring rounded-xl border border-border p-2 text-muted transition hover:text-foreground"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid gap-6 p-6 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="space-y-5">
                <ModelViewer title={item.title} src={item.modelSrc} materialPreset="glossy" />
                <div className="grid gap-3 sm:grid-cols-2">
                  {item.imageSrcs.slice(0, 4).map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt={`${item.title} photo angle ${i + 1}`}
                      loading="lazy"
                      className="aspect-[4/3] w-full rounded-2xl border border-border object-cover"
                    />
                  ))}
                </div>
              </div>

              <aside className="space-y-5">
                <section className="rounded-2xl border border-border bg-surface/55 p-5">
                  <div className="text-xs font-semibold uppercase tracking-widest text-neon-purple">Specifications</div>
                  <ul className="mt-3 space-y-2 text-sm text-muted">
                    {item.specs.map((s) => (
                      <li key={s} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neon-cyan/70" aria-hidden />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="rounded-2xl border border-border bg-bg/20 p-5">
                  <div className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">Customer note</div>
                  <blockquote className="mt-3 text-sm text-foreground/90">
                    “{item.testimonial.quote}”
                    <footer className="mt-3 text-xs text-muted">
                      — {item.testimonial.name}, {item.testimonial.role}
                    </footer>
                  </blockquote>
                </section>

                <div className="rounded-2xl border border-neon-cyan/25 bg-surface/60 p-5">
                  <div className="text-sm text-foreground">
                    Want something similar? We’ll match material, tolerance, and finish.
                  </div>
                  <div className="mt-4 flex flex-col gap-2">
                    <Link
                      to="/services"
                      className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue px-6 py-3 text-sm font-semibold text-bg shadow-lg transition hover:brightness-110"
                      onClick={onClose}
                    >
                      Order similar
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                    <Link
                      to="/products"
                      className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-border bg-bg/20 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-neon-cyan/40"
                      onClick={onClose}
                    >
                      Shop products
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

