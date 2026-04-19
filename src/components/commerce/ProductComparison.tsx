import { ArrowRight, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import type { Product } from '../../data/products'
import { formatInr } from '../../data/products'

export function ProductComparison({ products }: { products: Product[] }) {
  const [selected, setSelected] = useState<string[]>([])
  const [open, setOpen] = useState(false)

  const selectedProducts = useMemo(
    () => products.filter((p) => selected.includes(p.id)).slice(0, 3),
    [products, selected],
  )

  const toggle = (id: string) => {
    setSelected((prev) => {
      if (prev.includes(id)) return prev.filter((x) => x !== id)
      if (prev.length >= 3) return prev
      return [...prev, id]
    })
  }

  return (
    <section className="mt-12 overflow-hidden rounded-[2rem] border border-border bg-bg-elevated/35">
      <div className="flex flex-col gap-4 border-b border-border/70 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-purple">Compare</div>
          <h2 className="mt-2 font-display text-2xl font-semibold text-foreground">Product comparison tool</h2>
          <p className="mt-2 text-sm text-muted">Select up to 3 products to compare price, turnaround, and features.</p>
        </div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={[
            'focus-ring inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition',
            selectedProducts.length >= 2
              ? 'bg-gradient-to-r from-neon-cyan to-neon-blue text-bg shadow-lg hover:brightness-110'
              : 'bg-white/10 text-muted',
          ].join(' ')}
          disabled={selectedProducts.length < 2}
        >
          Compare {selectedProducts.length}/3
          <ArrowRight className="h-4 w-4" aria-hidden />
        </button>
      </div>

      <div className="grid gap-3 p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
        {products.map((p) => (
          <label
            key={p.id}
            className={[
              'flex cursor-pointer items-start justify-between gap-3 rounded-2xl border p-4 transition',
              selected.includes(p.id) ? 'border-neon-cyan/35 bg-surface/60' : 'border-border bg-bg/20 hover:border-neon-cyan/20',
            ].join(' ')}
          >
            <div>
              <div className="font-semibold text-foreground">{p.name}</div>
              <div className="mt-1 text-xs text-muted">From {formatInr(p.priceInr)} • {p.turnaround}</div>
            </div>
            <input
              type="checkbox"
              checked={selected.includes(p.id)}
              onChange={() => toggle(p.id)}
              aria-label={`Select ${p.name} for comparison`}
              className="mt-1 h-4 w-4 accent-[#22d3ee]"
            />
          </label>
        ))}
      </div>

      {open && (
        <div className="fixed inset-0 z-[95] flex items-end justify-center p-4 sm:items-center">
          <button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-label="Close comparison backdrop"
            onClick={() => setOpen(false)}
          />
          <div className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-border bg-bg-elevated shadow-2xl">
            <div className="flex items-start justify-between gap-4 border-b border-border/70 p-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-neon-cyan">Comparison</div>
                <div className="mt-2 font-display text-xl font-semibold text-foreground">Side-by-side</div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="focus-ring rounded-xl border border-border p-2 text-muted transition hover:text-foreground"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-6">
              {selectedProducts.length < 2 ? (
                <div className="text-sm text-muted">Select at least 2 products to compare.</div>
              ) : (
                <div className="grid gap-4 md:grid-cols-3">
                  {selectedProducts.map((p) => (
                    <div key={p.id} className="rounded-2xl border border-border bg-surface/50 p-5">
                      <div className="font-display text-lg font-semibold text-foreground">{p.name}</div>
                      <div className="mt-2 text-sm text-muted">From {formatInr(p.priceInr)}</div>
                      <div className="mt-1 text-sm text-muted">Turnaround: {p.turnaround}</div>
                      <div className="mt-3 text-sm text-muted">Rating: {p.rating.toFixed(1)} / 5</div>
                      <div className="mt-4 text-xs font-semibold uppercase tracking-widest text-neon-purple">Key features</div>
                      <ul className="mt-2 space-y-2 text-sm text-muted">
                        {p.keyFeatures.slice(0, 4).map((f) => (
                          <li key={f} className="flex gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neon-cyan/70" aria-hidden />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

