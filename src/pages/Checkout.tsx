import { ArrowRight, BadgeCheck, CreditCard, MapPin, PackageSearch } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { MotionSection } from '../components/ui/MotionSection'
import { useCart } from '../context/CartContext'
import { formatInr } from '../data/products'
import { useSeo } from '../hooks/useSeo'

function isEmail(v: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
}

export function Checkout() {
  useSeo('Checkout | Nirmaan3D', 'Guest checkout for 3D printing products and services (payment integration-ready).')
  const { lines, subtotalInr, clear } = useCart()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [gateway, setGateway] = useState<'razorpay' | 'payu'>('razorpay')
  const [placedId, setPlacedId] = useState<string | null>(null)

  const canPlace = useMemo(() => {
    if (lines.length === 0) return false
    if (!name.trim()) return false
    if (!isEmail(email.trim())) return false
    if (!phone.trim()) return false
    if (!address.trim()) return false
    return true
  }, [lines.length, name, email, phone, address])

  const placeOrder = () => {
    if (!canPlace) return
    // Integration-ready: replace with server-side order creation + gateway checkout.
    const id = `N3D-${Math.random().toString(16).slice(2, 6).toUpperCase()}-${Date.now().toString().slice(-5)}`
    setPlacedId(id)
    clear()
  }

  return (
    <MotionSection className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-purple">Checkout</p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Guest checkout
          </h1>
          <p className="mt-4 text-muted">Payment + email notifications are integration-ready placeholders.</p>
        </div>
        <Link
          to="/cart"
          className="focus-ring inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-neon-cyan/40"
        >
          Back to cart
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>

      {placedId && (
        <div className="mt-8 rounded-2xl border border-neon-cyan/30 bg-surface/50 p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-bg/40 px-3 py-1 text-[11px] font-semibold text-foreground/90">
                <BadgeCheck className="h-4 w-4 text-neon-cyan" aria-hidden />
                Order placed (mock)
              </div>
              <div className="mt-3 font-display text-xl font-semibold text-foreground">Order ID: {placedId}</div>
              <div className="mt-1 text-sm text-muted">
                Track this order from the tracking box below (UI placeholder).
              </div>
            </div>
            <Link
              to="/products"
              className="focus-ring inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue px-6 py-3 text-sm font-semibold text-bg shadow-lg transition hover:brightness-110"
            >
              Keep shopping
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </div>
      )}

      <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_360px]">
        <section className="rounded-2xl border border-border bg-surface/55 p-6">
          <h2 className="font-display text-lg font-semibold text-foreground">Delivery details</h2>

          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="text-muted">Full name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-border bg-bg/30 px-3 py-2.5 text-foreground outline-none focus:border-neon-cyan/50"
                placeholder="Your name"
                autoComplete="name"
              />
            </label>
            <label className="block text-sm">
              <span className="text-muted">Email</span>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-border bg-bg/30 px-3 py-2.5 text-foreground outline-none focus:border-neon-cyan/50"
                placeholder="you@company.com"
                autoComplete="email"
              />
            </label>
            <label className="block text-sm">
              <span className="text-muted">Phone</span>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1.5 w-full rounded-xl border border-border bg-bg/30 px-3 py-2.5 text-foreground outline-none focus:border-neon-cyan/50"
                placeholder="+91…"
                autoComplete="tel"
              />
            </label>
            <label className="block text-sm sm:col-span-2">
              <span className="text-muted">Address</span>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                rows={3}
                className="mt-1.5 w-full resize-none rounded-xl border border-border bg-bg/30 px-3 py-2.5 text-foreground outline-none focus:border-neon-cyan/50"
                placeholder="House / Street / City / PIN"
                autoComplete="street-address"
              />
            </label>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-bg-elevated/40 p-5">
            <h3 className="flex items-center gap-2 font-display text-base font-semibold text-foreground">
              <CreditCard className="h-5 w-5 text-neon-purple" aria-hidden />
              Payment gateway
            </h3>
            <p className="mt-1 text-sm text-muted">Select a gateway (UI placeholder).</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                { id: 'razorpay' as const, label: 'Razorpay (India)' },
                { id: 'payu' as const, label: 'PayU (India)' },
              ].map((g) => (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => setGateway(g.id)}
                  className={[
                    'focus-ring flex items-center justify-between rounded-2xl border px-4 py-3 text-left transition',
                    gateway === g.id ? 'border-neon-cyan/40 bg-surface/70' : 'border-border bg-bg/20 hover:border-neon-cyan/25',
                  ].join(' ')}
                >
                  <span className="text-sm font-semibold text-foreground">{g.label}</span>
                  <span className="text-xs text-muted">{gateway === g.id ? 'Selected' : 'Select'}</span>
                </button>
              ))}
            </div>
            <div className="mt-4 text-xs text-muted">
              Integration-ready: create order server-side → open gateway checkout → verify signature → send email + tracking.
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-bg/20 p-5">
            <h3 className="flex items-center gap-2 font-display text-base font-semibold text-foreground">
              <PackageSearch className="h-5 w-5 text-neon-cyan" aria-hidden />
              Order tracking
            </h3>
            <p className="mt-1 text-sm text-muted">Enter an order ID to fetch status (UI placeholder).</p>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <input
                className="flex-1 rounded-xl border border-border bg-bg/30 px-3 py-2.5 text-foreground outline-none focus:border-neon-cyan/50"
                placeholder="e.g. N3D-AB12-12345"
                defaultValue={placedId ?? ''}
              />
              <button
                type="button"
                className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-border bg-surface/70 px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-neon-cyan/40"
              >
                Check status
                <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs text-muted">
              <MapPin className="h-4 w-4 text-neon-purple" aria-hidden />
              “In production → QC → Packed → Shipped” status timeline (hook up to backend later)
            </div>
          </div>
        </section>

        <aside className="h-fit rounded-2xl border border-border bg-bg-elevated/40 p-6">
          <h2 className="font-display text-lg font-semibold text-foreground">Your order</h2>
          <ul className="mt-4 space-y-3">
            {lines.map((l) => (
              <li key={l.id} className="flex items-start justify-between gap-3 text-sm">
                <div>
                  <div className="font-semibold text-foreground">{l.title}</div>
                  <div className="text-xs text-muted">Qty {l.qty}</div>
                </div>
                <div className="font-semibold text-foreground">{formatInr(l.qty * l.unitPriceInr)}</div>
              </li>
            ))}
            {lines.length === 0 && <li className="text-sm text-muted">Cart is empty.</li>}
          </ul>
          <div className="mt-5 flex items-center justify-between text-sm">
            <span className="text-muted">Subtotal</span>
            <span className="font-semibold text-foreground">{formatInr(subtotalInr)}</span>
          </div>
          <button
            type="button"
            onClick={placeOrder}
            disabled={!canPlace}
            className={[
              'focus-ring mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition',
              canPlace
                ? 'bg-gradient-to-r from-neon-cyan to-neon-blue text-bg shadow-lg hover:brightness-110'
                : 'bg-white/10 text-muted shadow-none',
            ].join(' ')}
          >
            Place order (mock)
            <ArrowRight className="h-4 w-4" aria-hidden />
          </button>
          <div className="mt-3 text-xs text-muted">
            By placing your order, you agree to quality checks and standard tolerances for the selected process.
          </div>
        </aside>
      </div>
    </MotionSection>
  )
}

