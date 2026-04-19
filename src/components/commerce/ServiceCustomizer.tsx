import { ArrowRight, Calculator, Check, ShoppingCart } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useCart } from '../../context/CartContext'
import { formatInr } from '../../data/products'

type Material = 'PLA' | 'ABS' | 'Resin' | 'Nylon'
type Finish = 'Standard' | 'Premium finishing'

const materialMultiplier: Record<Material, number> = {
  PLA: 1,
  ABS: 1.2,
  Resin: 1.55,
  Nylon: 1.75,
}

const materialLead: Record<Material, string> = {
  PLA: '24–72 hrs',
  ABS: '2–4 days',
  Resin: '2–5 days',
  Nylon: '3–6 days',
}

const colorOptions = ['Black', 'White', 'Grey', 'Blue', 'Custom'] as const

function clamp(n: number, min: number, max: number) {
  if (!Number.isFinite(n)) return min
  return Math.min(max, Math.max(min, n))
}

function estimateInr({
  material,
  finish,
  qty,
  x,
  y,
  z,
}: {
  material: Material
  finish: Finish
  qty: number
  x: number
  y: number
  z: number
}) {
  // Very rough frontend-only estimate, designed for UX. Replace with backend + volume/weight later.
  const volumeCm3 = (x * y * z) / 1000
  const base = 180
  const perCm3 = 5.4
  const finishAdd = finish === 'Premium finishing' ? 350 : 0
  const unit = (base + perCm3 * volumeCm3) * materialMultiplier[material] + finishAdd
  const q = clamp(qty, 1, 999)
  const total = Math.round(unit * q)
  return { unit: Math.max(199, Math.round(unit)), total }
}

export function ServiceCustomizer() {
  const { addServiceQuote } = useCart()
  const [material, setMaterial] = useState<Material>('PLA')
  const [color, setColor] = useState<(typeof colorOptions)[number]>('Black')
  const [finish, setFinish] = useState<Finish>('Standard')
  const [qty, setQty] = useState(1)
  const [x, setX] = useState(80)
  const [y, setY] = useState(60)
  const [z, setZ] = useState(30)
  const [added, setAdded] = useState(false)

  const est = useMemo(() => estimateInr({ material, finish, qty, x, y, z }), [material, finish, qty, x, y, z])
  const turnaround = materialLead[material]

  const add = () => {
    addServiceQuote({
      title: 'Custom 3D print (instant estimate)',
      unitPriceInr: est.unit,
      qty,
      meta: {
        Material: material,
        Color: color,
        Finish: finish,
        Dimensions: `${x}×${y}×${z} mm`,
        Turnaround: turnaround,
      },
    })
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1200)
  }

  return (
    <section className="overflow-hidden rounded-[2rem] border border-border bg-surface/55">
      <div className="flex flex-col gap-2 border-b border-border/70 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-bg/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-neon-cyan">
            <Calculator className="h-3.5 w-3.5" aria-hidden />
            Instant estimate
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground">
            Configure your print
          </h2>
          <p className="mt-2 text-sm text-muted">
            Choose material, color, and dimensions to get a quick estimate. Final pricing is confirmed after file review.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-bg/30 px-5 py-4">
          <div className="text-xs text-muted">Estimated total</div>
          <div className="mt-1 text-2xl font-semibold text-foreground">{formatInr(est.total)}</div>
          <div className="mt-1 text-xs text-muted">Unit approx: {formatInr(est.unit)} • Turnaround: {turnaround}</div>
        </div>
      </div>

      <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-3">
        <div className="grid gap-4 lg:col-span-2 sm:grid-cols-2">
          <label className="block text-sm">
            <span className="text-muted">Material</span>
            <select
              value={material}
              onChange={(e) => setMaterial(e.target.value as Material)}
              className="mt-1.5 w-full rounded-xl border border-border bg-bg/30 px-3 py-2.5 text-foreground outline-none focus:border-neon-cyan/50"
            >
              {(['PLA', 'ABS', 'Resin', 'Nylon'] as const).map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </label>

          <label className="block text-sm">
            <span className="text-muted">Color</span>
            <select
              value={color}
              onChange={(e) => setColor(e.target.value as (typeof colorOptions)[number])}
              className="mt-1.5 w-full rounded-xl border border-border bg-bg/30 px-3 py-2.5 text-foreground outline-none focus:border-neon-cyan/50"
            >
              {colorOptions.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>

          <label className="block text-sm">
            <span className="text-muted">Finish</span>
            <select
              value={finish}
              onChange={(e) => setFinish(e.target.value as Finish)}
              className="mt-1.5 w-full rounded-xl border border-border bg-bg/30 px-3 py-2.5 text-foreground outline-none focus:border-neon-cyan/50"
            >
              {(['Standard', 'Premium finishing'] as const).map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </label>

          <label className="block text-sm">
            <span className="text-muted">Quantity</span>
            <input
              type="number"
              min={1}
              max={999}
              value={qty}
              onChange={(e) => setQty(clamp(Number(e.target.value), 1, 999))}
              className="mt-1.5 w-full rounded-xl border border-border bg-bg/30 px-3 py-2.5 text-foreground outline-none focus:border-neon-cyan/50"
            />
          </label>

          <label className="block text-sm">
            <span className="text-muted">X (mm)</span>
            <input
              type="number"
              min={10}
              max={300}
              value={x}
              onChange={(e) => setX(clamp(Number(e.target.value), 10, 300))}
              className="mt-1.5 w-full rounded-xl border border-border bg-bg/30 px-3 py-2.5 text-foreground outline-none focus:border-neon-cyan/50"
            />
          </label>
          <label className="block text-sm">
            <span className="text-muted">Y (mm)</span>
            <input
              type="number"
              min={10}
              max={300}
              value={y}
              onChange={(e) => setY(clamp(Number(e.target.value), 10, 300))}
              className="mt-1.5 w-full rounded-xl border border-border bg-bg/30 px-3 py-2.5 text-foreground outline-none focus:border-neon-cyan/50"
            />
          </label>
          <label className="block text-sm">
            <span className="text-muted">Z (mm)</span>
            <input
              type="number"
              min={10}
              max={300}
              value={z}
              onChange={(e) => setZ(clamp(Number(e.target.value), 10, 300))}
              className="mt-1.5 w-full rounded-xl border border-border bg-bg/30 px-3 py-2.5 text-foreground outline-none focus:border-neon-cyan/50"
            />
          </label>
        </div>

        <div className="rounded-2xl border border-border bg-bg-elevated/40 p-5">
          <h3 className="font-display text-lg font-semibold text-foreground">What you get</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {[
              'Instant estimate + add to cart',
              'Turnaround shown before checkout',
              'Material guidance after review',
              'QC + safe packing',
            ].map((b) => (
              <li key={b} className="flex gap-2">
                <Check className="mt-0.5 h-4 w-4 text-neon-cyan" aria-hidden />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-2">
            <button
              type="button"
              onClick={add}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue px-6 py-3 text-sm font-semibold text-bg shadow-lg transition hover:brightness-110"
            >
              <ShoppingCart className="h-4 w-4" aria-hidden />
              {added ? 'Added to cart' : 'Add estimate to cart'}
            </button>
            <LinkButton />
          </div>
        </div>
      </div>
    </section>
  )
}

function LinkButton() {
  return (
    <a
      href="#pricing-tiers"
      className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-border bg-bg/20 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-neon-cyan/40"
    >
      View pricing tiers
      <ArrowRight className="h-4 w-4" aria-hidden />
    </a>
  )
}

