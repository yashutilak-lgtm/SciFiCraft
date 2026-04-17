import { AnimatePresence, motion } from 'framer-motion'
import { Filter } from 'lucide-react'
import { useMemo, useState } from 'react'
import { MotionSection } from '../components/ui/MotionSection'
import { useSeo } from '../hooks/useSeo'

type Cat = 'All' | 'Industrial' | 'Prototype' | 'Art' | 'Product'

const gallery: { id: string; title: string; cat: Exclude<Cat, 'All'>; detail: string; gradient: string }[] = [
  {
    id: '1',
    title: 'Impeller housing',
    cat: 'Industrial',
    detail: 'PETG · Watertight shell for pump test rig.',
    gradient: 'from-cyan-500/25 to-blue-600/10',
  },
  {
    id: '2',
    title: 'Wearable shell',
    cat: 'Product',
    detail: 'PLA+ · Smooth curves, soft-touch paint ready.',
    gradient: 'from-fuchsia-500/20 to-purple-600/15',
  },
  {
    id: '3',
    title: 'Gripper fingers',
    cat: 'Prototype',
    detail: 'TPU · Compliant mechanism, 12h print.',
    gradient: 'from-emerald-400/15 to-cyan-500/15',
  },
  {
    id: '4',
    title: 'Lattice sculpture',
    cat: 'Art',
    detail: 'PLA · Large-format aesthetic piece.',
    gradient: 'from-amber-400/15 to-rose-500/15',
  },
  {
    id: '5',
    title: 'Drone arm',
    cat: 'Prototype',
    detail: 'CF nylon · Stiffness-first layups.',
    gradient: 'from-sky-400/20 to-indigo-600/15',
  },
  {
    id: '6',
    title: 'Machine bracket',
    cat: 'Industrial',
    detail: 'ABS · Vibration-resistant mount.',
    gradient: 'from-slate-400/20 to-cyan-400/10',
  },
  {
    id: '7',
    title: 'Lamp shade',
    cat: 'Product',
    detail: 'PLA · Diffused light pattern.',
    gradient: 'from-violet-500/20 to-pink-500/15',
  },
  {
    id: '8',
    title: 'Architectural study',
    cat: 'Art',
    detail: 'PLA · Facade module mock-up.',
    gradient: 'from-orange-300/15 to-amber-600/15',
  },
]

const categories: Cat[] = ['All', 'Industrial', 'Prototype', 'Art', 'Product']

export function Portfolio() {
  useSeo(
    'Portfolio | Nirmaan3D — 3D Printed Projects',
    'Gallery of industrial, product, prototype, and art prints — placeholders ready for your photography.',
  )
  const [active, setActive] = useState<Cat>('All')

  const filtered = useMemo(() => {
    if (active === 'All') return gallery
    return gallery.filter((g) => g.cat === active)
  }, [active])

  return (
    <>
      <section className="border-b border-border/60 bg-bg-elevated/30">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-purple">Gallery</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Work that <span className="text-gradient">ships</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Placeholder tiles — drop in renders or studio shots when ready. Filters are wired for your catalog.
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

        <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.article
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface/40"
              >
                <div className={`relative aspect-square bg-gradient-to-br ${item.gradient}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.18),transparent_50%)]" />
                  <div className="absolute inset-8 rounded-2xl border border-white/10 bg-bg/25 shadow-inner backdrop-blur-[2px]" />
                  <div className="absolute bottom-4 left-4 rounded-full bg-bg/70 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground ring-1 ring-white/10 backdrop-blur">
                    {item.cat}
                  </div>
                </div>
                <div className="p-5">
                  <h2 className="font-display text-base font-semibold text-foreground">{item.title}</h2>
                  <p className="mt-2 text-sm text-muted">{item.detail}</p>
                  <p className="mt-3 text-xs text-neon-cyan/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Specs slot — layer height, machine, lead time (add on hover for desktop).
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </MotionSection>
    </>
  )
}
