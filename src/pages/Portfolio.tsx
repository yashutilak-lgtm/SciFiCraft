import { motion } from 'framer-motion'
import { Filter, Sparkles } from 'lucide-react'
import { useMemo, useState } from 'react'
import { BeforeAfterCarousel } from '../components/gallery/BeforeAfterCarousel'
import { PortfolioModal } from '../components/gallery/PortfolioModal'
import { AnimatedStats } from '../components/conversion/AnimatedStats'
import { MotionSection } from '../components/ui/MotionSection'
import { portfolioCategories, portfolioItems, type PortfolioCategory, type PortfolioItem } from '../data/portfolio'
import { useSeo } from '../hooks/useSeo'
import { MaterialShowcase } from '../components/three/MaterialShowcase'
import { MultiAngleViewer } from '../components/three/MultiAngleViewer'
import { Spin360Viewer } from '../components/three/Spin360Viewer'

type Cat = 'All' | PortfolioCategory
const categories: Cat[] = ['All', ...portfolioCategories]

export function Portfolio() {
  useSeo(
    'Portfolio | Nirmaan3D — 3D Printed Projects',
    'A visually rich portfolio of engineering parts, prototypes, decorative items, functional products, and custom client prints.',
  )
  const [active, setActive] = useState<Cat>('All')
  const [selected, setSelected] = useState<PortfolioItem | null>(null)

  const filtered = useMemo(() => {
    if (active === 'All') return portfolioItems
    return portfolioItems.filter((g) => g.category === active)
  }, [active])

  return (
    <>
      <section className="border-b border-border/60 bg-bg-elevated/30">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-neon-cyan">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            3D Model Gallery
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Wow-worthy prints — from CAD to <span className="text-gradient">reality</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Explore categories, open any project for an interactive 3D viewer, multi-angle photos, specs, and an “Order Similar” CTA.
          </p>
        </div>
      </section>

      <MotionSection className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="inline-flex items-center gap-2 text-sm text-muted">
            <Filter className="h-4 w-4 text-neon-cyan" aria-hidden />
            Filter by category
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => {
              const isOn = c === active
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  className={[
                    'rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-widest transition',
                    isOn
                      ? 'bg-gradient-to-r from-neon-cyan/90 to-neon-blue/90 text-bg shadow-lg shadow-neon-cyan/20'
                      : 'border border-border bg-surface/60 text-muted hover:border-neon-cyan/30 hover:text-foreground',
                  ].join(' ')}
                >
                  {c}
                </button>
              )
            })}
          </div>
        </div>

        {/* Category blocks (4–6 items each) */}
        <div className="mt-10 space-y-10">
          {portfolioCategories.map((cat) => {
            const rows = portfolioItems.filter((p) => p.category === cat).slice(0, 6)
            return (
              <section key={cat} className="rounded-[2rem] border border-border bg-surface/40 p-6 sm:p-8">
                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-purple">{cat}</div>
                    <div className="mt-2 font-display text-2xl font-semibold text-foreground">
                      {cat === 'Engineering Parts'
                        ? 'Brackets, gears, fixtures'
                        : cat === 'Prototypes'
                          ? 'Fast design iterations'
                          : cat === 'Decorative Items'
                            ? 'Miniatures & art prints'
                            : cat === 'Functional Products'
                              ? 'Everyday useful parts'
                              : 'Client showcases'}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActive(cat)}
                    className="text-sm font-semibold text-neon-cyan hover:text-neon-cyan/90"
                  >
                    View all →
                  </button>
                </div>

                <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {rows.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelected(item)}
                      className="group text-left overflow-hidden rounded-2xl border border-border bg-bg/20 transition hover:border-neon-cyan/30 hover:shadow-glow-cyan"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={item.imageSrcs[0]}
                          alt={`${item.title} preview`}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" />
                        <div className="absolute bottom-3 left-3 rounded-full bg-bg/70 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground ring-1 ring-white/10 backdrop-blur">
                          {item.material}
                        </div>
                        <div className="absolute bottom-3 right-3 rounded-full bg-bg/70 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground ring-1 ring-white/10 backdrop-blur">
                          {item.turnaround}
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="font-display text-base font-semibold text-foreground">{item.title}</div>
                            <div className="mt-1 text-xs text-muted">{item.dimensions}</div>
                          </div>
                          <div className="text-right text-xs text-muted">
                            <div className="font-semibold text-foreground/90">{item.priceRange}</div>
                            <div className="mt-1">Tap to view</div>
                          </div>
                        </div>
                        <div className="mt-4 grid gap-1 text-xs text-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                          <div>
                            <span className="font-semibold text-foreground/80">Material:</span> {item.material}
                          </div>
                          <div>
                            <span className="font-semibold text-foreground/80">Turnaround:</span> {item.turnaround}
                          </div>
                          <div>
                            <span className="font-semibold text-foreground/80">Price:</span> {item.priceRange}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </section>
            )
          })}
        </div>

        <div className="mt-12 space-y-10">
          <MultiAngleViewer title="Engineering part — inspect from all sides" src="/models/sample.glb" />
          <MaterialShowcase title="Same model, different materials" modelSrc="/models/sample.glb" />
          <Spin360Viewer title="Luxury 360° spin — premium preview" src="/models/sample.glb" fallbackImg={portfolioItems[0]?.imageSrcs?.[0]} />
          <BeforeAfterCarousel items={portfolioItems} />
          <AnimatedStats />
        </div>

        {/* Masonry-ish grid (20–30) */}
        <div className="mt-12">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-cyan">Portfolio grid</div>
              <div className="mt-2 font-display text-2xl font-semibold text-foreground">20+ stunning prints</div>
              <div className="mt-2 text-sm text-muted">
                Hover to see material, dimensions, turnaround, and price range. Click for full 3D view.
              </div>
            </div>
            <div className="text-xs text-muted">Tip: replace data URIs with WebP photos</div>
          </div>

          <div className="mt-6 columns-1 gap-5 sm:columns-2 lg:columns-3">
            {filtered.map((item, idx) => (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setSelected(item)}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.35, delay: (idx % 6) * 0.03 }}
                className="group mb-5 w-full break-inside-avoid overflow-hidden rounded-2xl border border-border bg-bg/20 text-left transition hover:border-neon-cyan/30 hover:shadow-glow-cyan"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.imageSrcs[0]}
                    alt={`${item.title} — ${item.material}`}
                    loading="lazy"
                    className={[
                      'h-auto w-full object-cover transition duration-500 group-hover:scale-[1.04]',
                      idx % 3 === 0 ? 'aspect-[4/5]' : idx % 3 === 1 ? 'aspect-[4/3]' : 'aspect-[3/4]',
                    ].join(' ')}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent opacity-90" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="font-display text-lg font-semibold text-foreground">{item.title}</div>
                    <div className="mt-1 text-xs text-muted">
                      {item.category} • {item.material} • {item.dimensions}
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-2 text-[11px] text-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                      <div>
                        <span className="font-semibold text-foreground/90">Turnaround:</span> {item.turnaround}
                      </div>
                      <div className="text-right">
                        <span className="font-semibold text-foreground/90">Price:</span> {item.priceRange}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </MotionSection>

      <PortfolioModal item={selected} onClose={() => setSelected(null)} />
    </>
  )
}
