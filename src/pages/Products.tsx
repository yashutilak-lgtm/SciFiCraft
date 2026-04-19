import { ArrowRight, Percent, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProductCard } from '../components/commerce/ProductCard'
import { ProductComparison } from '../components/commerce/ProductComparison'
import { MotionSection } from '../components/ui/MotionSection'
import { products } from '../data/products'
import { useSeo } from '../hooks/useSeo'

export function Products() {
  useSeo(
    'Products | Nirmaan3D — 3D Printed Products & Kits',
    'Shop ready-to-ship 3D printed products and customizable kits. Add to cart or configure materials and finishing.',
  )

  return (
    <>
      <section className="border-b border-border/70 bg-gradient-to-b from-bg to-bg-elevated/70">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-neon-cyan">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                D2C Storefront
              </p>
              <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Shop 3D‑printed products
              </h1>
              <p className="mt-3 max-w-2xl text-muted">
                Fast dispatch, consistent QC, and transparent pricing. Need a specific material, color, or finish? Use the
                instant configurator.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/services"
                className="focus-ring inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue px-5 py-2.5 text-sm font-semibold text-bg shadow-lg transition hover:brightness-110"
              >
                Get instant estimate
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                to="/pricing"
                className="focus-ring inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-neon-cyan/40"
              >
                <Percent className="h-4 w-4" aria-hidden />
                Bulk discounts
              </Link>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-surface/50 p-4 sm:p-5">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-foreground">
                <span className="font-semibold text-neon-cyan">Limited-time</span> finishing add‑on at checkout (mock).
              </div>
              <div className="text-xs text-muted">Ends soon • Pan‑India shipping • Easy reorders</div>
            </div>
          </div>
        </div>
      </section>

      <MotionSection className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <ProductComparison products={products} />

        <div className="mt-14 overflow-hidden rounded-[2rem] border border-border bg-surface/60 p-8 sm:p-10">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground">
                Not seeing what you need?
              </h2>
              <p className="mt-2 text-muted">
                Upload STL/STEP for a fast quote, or configure material + dimensions for an instant estimate.
              </p>
            </div>
            <Link
              to="/services"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple px-6 py-3 text-sm font-semibold text-bg shadow-lg transition hover:brightness-110"
            >
              Customize a print
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      </MotionSection>
    </>
  )
}

