import { ArrowRight, NotebookPen } from 'lucide-react'
import { Link } from 'react-router-dom'
import { MotionSection } from '../components/ui/MotionSection'
import { useSeo } from '../hooks/useSeo'

const posts = [
  {
    title: 'PLA vs ABS vs Resin: which one for your part?',
    desc: 'A practical guide to strength, finish, and heat resistance — and what we recommend for common use cases.',
    tag: 'Materials',
  },
  {
    title: 'Design for 3D printing: 7 fixes that prevent failed prints',
    desc: 'Wall thickness, overhangs, support strategy, and tolerance tips for snap-fits and assemblies.',
    tag: 'DFM',
  },
  {
    title: 'From prototype to production: scaling 3D prints to 200+ units',
    desc: 'How batch QC, parameter lock-in, and finishing workflows keep quality stable as volume grows.',
    tag: 'Production',
  },
]

export function Blog() {
  useSeo('Blog | Nirmaan3D — 3D Printing Guides', 'Articles on materials, DFM tips, finishing, and production workflows.')

  return (
    <MotionSection className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-purple">Blog</p>
          <h1 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Learn what prints best
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Helpful reads that reduce iteration time and help you pick the right material and finish.
          </p>
        </div>
        <Link
          to="/services"
          className="focus-ring inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue px-5 py-2.5 text-sm font-semibold text-bg shadow-lg transition hover:brightness-110"
        >
          Get instant estimate
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {posts.map((p) => (
          <article key={p.title} className="overflow-hidden rounded-2xl border border-border bg-surface/55 p-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-bg/40 px-3 py-1 text-[11px] font-semibold text-muted">
              <NotebookPen className="h-3.5 w-3.5 text-neon-cyan" aria-hidden />
              {p.tag}
            </p>
            <h2 className="mt-4 font-display text-lg font-semibold text-foreground">{p.title}</h2>
            <p className="mt-2 text-sm text-muted">{p.desc}</p>
            <div className="mt-5 text-xs text-muted">Publishing pipeline placeholder (CMS-ready).</div>
          </article>
        ))}
      </div>
    </MotionSection>
  )
}

