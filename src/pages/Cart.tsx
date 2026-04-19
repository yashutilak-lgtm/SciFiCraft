import { ArrowRight, Trash2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ProductCard } from '../components/commerce/ProductCard'
import { MotionSection } from '../components/ui/MotionSection'
import { formatInr } from '../data/products'
import { products } from '../data/products'
import { useCart } from '../context/CartContext'
import { useSeo } from '../hooks/useSeo'

export function Cart() {
  useSeo('Cart | Nirmaan3D', 'Review your cart and proceed to checkout.')
  const { lines, subtotalInr, setQty, removeLine, clear } = useCart()

  return (
    <MotionSection className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-cyan">Cart</p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Order summary
          </h1>
          <p className="mt-4 text-muted">Guest checkout supported. Taxes/shipping shown at checkout (mock).</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/products"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-neon-cyan/40"
          >
            Continue shopping
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <button
            type="button"
            onClick={clear}
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-border bg-bg/30 px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-neon-cyan/40"
            disabled={lines.length === 0}
          >
            Clear cart
            <Trash2 className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_360px]">
        <section className="rounded-2xl border border-border bg-surface/55">
          {lines.length === 0 ? (
            <div className="p-8 text-muted">
              Your cart is empty. Browse products or create a custom print estimate.
              <div className="mt-5 flex flex-wrap gap-3">
                <Link
                  to="/products"
                  className="focus-ring inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue px-6 py-3 text-sm font-semibold text-bg shadow-lg transition hover:brightness-110"
                >
                  Shop products
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  to="/services"
                  className="focus-ring inline-flex items-center gap-2 rounded-full border border-border bg-bg/30 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-neon-cyan/40"
                >
                  Customize a print
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          ) : (
            <ul className="divide-y divide-border/70">
              {lines.map((l) => (
                <li key={l.id} className="p-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-widest text-muted">{l.kind}</div>
                      <div className="mt-1 font-display text-lg font-semibold text-foreground">{l.title}</div>
                      {l.meta && (
                        <div className="mt-2 grid gap-1 text-xs text-muted sm:grid-cols-2">
                          {Object.entries(l.meta).map(([k, v]) => (
                            <div key={k}>
                              <span className="font-semibold text-foreground/80">{k}:</span> {v}
                            </div>
                          ))}
                        </div>
                      )}
                      <div className="mt-2 text-sm text-muted">Unit: {formatInr(l.unitPriceInr)}</div>
                    </div>

                    <div className="flex items-center justify-between gap-3 sm:flex-col sm:items-end">
                      <label className="flex items-center gap-2 text-sm">
                        <span className="text-muted">Qty</span>
                        <input
                          type="number"
                          min={1}
                          max={999}
                          value={l.qty}
                          onChange={(e) => setQty(l.id, Number(e.target.value))}
                          className="w-20 rounded-xl border border-border bg-bg/30 px-3 py-2 text-foreground outline-none focus:border-neon-cyan/50"
                        />
                      </label>
                      <div className="text-right">
                        <div className="text-sm text-muted">Line</div>
                        <div className="text-lg font-semibold text-foreground">{formatInr(l.qty * l.unitPriceInr)}</div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeLine(l.id)}
                        className="focus-ring inline-flex items-center gap-2 rounded-full border border-border bg-bg/20 px-4 py-2 text-sm font-semibold text-foreground transition hover:border-neon-cyan/40"
                      >
                        Remove
                        <Trash2 className="h-4 w-4" aria-hidden />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        <aside className="h-fit rounded-2xl border border-border bg-bg-elevated/40 p-6">
          <h2 className="font-display text-lg font-semibold text-foreground">Checkout</h2>
          <div className="mt-4 flex items-center justify-between text-sm">
            <span className="text-muted">Subtotal</span>
            <span className="font-semibold text-foreground">{formatInr(subtotalInr)}</span>
          </div>
          <div className="mt-2 text-xs text-muted">Shipping & taxes calculated at checkout (mock).</div>
          <Link
            to="/checkout"
            className={[
              'focus-ring mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-bg shadow-lg transition',
              lines.length === 0
                ? 'pointer-events-none bg-white/10 text-muted shadow-none'
                : 'bg-gradient-to-r from-neon-cyan to-neon-blue hover:brightness-110',
            ].join(' ')}
            aria-disabled={lines.length === 0}
          >
            Proceed to checkout
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <div className="mt-4 text-xs text-muted">
            Payment gateways: Razorpay / PayU (integration-ready placeholder)
          </div>
        </aside>
      </div>

      <div className="mt-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-purple">Recommended for you</div>
            <div className="mt-2 font-display text-2xl font-semibold text-foreground">Popular picks</div>
          </div>
          <Link to="/products" className="text-sm font-semibold text-neon-cyan hover:text-neon-cyan/90">
            Browse all →
          </Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.slice(0, 3).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </MotionSection>
  )
}

