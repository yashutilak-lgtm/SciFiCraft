import { ArrowRight, ShoppingCart } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import type { Product } from '../../data/products'
import { formatInr } from '../../data/products'
import { useCart } from '../../context/CartContext'
import { ProductImage } from './ProductImage'
import { Rating } from './Rating'

export function ProductCard({ product }: { product: Product }) {
  const { addProduct } = useCart()
  const [viewIdx, setViewIdx] = useState(0)
  const view = product.views[viewIdx] ?? 'front'

  const badge = useMemo(() => product.badges?.[0], [product.badges])

  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-surface/50 transition hover:border-neon-cyan/30 hover:shadow-glow-cyan">
      <div className="relative p-4">
        {badge && (
          <span className="absolute left-6 top-6 z-10 rounded-full border border-white/10 bg-bg/70 px-3 py-1 text-[11px] font-semibold text-foreground/90 backdrop-blur">
            {badge}
          </span>
        )}

        <ProductImage productName={product.name} view={view} className="aspect-[4/3]" />

        <div className="mt-3 flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            {product.views.map((v, idx) => (
              <button
                key={v}
                type="button"
                className={[
                  'focus-ring h-2.5 w-2.5 rounded-full border transition',
                  idx === viewIdx ? 'border-neon-cyan bg-neon-cyan/70' : 'border-white/15 bg-white/5 hover:bg-white/10',
                ].join(' ')}
                onClick={() => setViewIdx(idx)}
                aria-label={`View ${v}`}
              />
            ))}
          </div>
          <span className="text-xs font-semibold text-muted">Turnaround: {product.turnaround}</span>
        </div>
      </div>

      <div className="border-t border-border/70 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">{product.name}</h3>
            <p className="mt-1 text-sm text-muted">{product.tagline}</p>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted">From</div>
            <div className="text-xl font-semibold text-foreground">{formatInr(product.priceInr)}</div>
          </div>
        </div>

        <div className="mt-3">
          <Rating value={product.rating} count={product.reviewCount} />
        </div>

        <ul className="mt-4 space-y-2 text-sm text-muted">
          {product.keyFeatures.slice(0, 3).map((f) => (
            <li key={f} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-neon-cyan/70" aria-hidden />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => addProduct(product, 1)}
            className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue px-4 py-2.5 text-sm font-semibold text-bg shadow-lg transition hover:brightness-110"
          >
            <ShoppingCart className="h-4 w-4" aria-hidden />
            Add to cart
          </button>

          <Link
            to="/services"
            className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-border bg-bg/30 px-4 py-2.5 text-sm font-semibold text-foreground transition hover:border-neon-cyan/40"
          >
            Customize
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  )
}

