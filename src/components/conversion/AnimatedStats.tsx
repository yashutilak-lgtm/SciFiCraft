import { motion, useInView } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'

type Stat = { label: string; value: number; suffix?: string }

function useCountUp(target: number, start: boolean, durationMs = 900) {
  const [v, setV] = useState(0)
  const raf = useRef<number | null>(null)

  useEffect(() => {
    if (!start) return
    const t0 = performance.now()
    const from = 0
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / durationMs)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - p, 3)
      setV(Math.round(from + (target - from) * eased))
      if (p < 1) raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [target, start, durationMs])

  return v
}

export function AnimatedStats() {
  const stats: Stat[] = useMemo(
    () => [
      { label: 'Models Printed', value: 1000, suffix: '+' },
      { label: 'Materials Available', value: 50, suffix: '+' },
      { label: 'Turnaround (hrs)', value: 48, suffix: '' },
      { label: 'Quality Rating', value: 992, suffix: '‰' }, // 99.2% as per-mille for a “3D number” vibe
    ],
    [],
  )

  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="overflow-hidden rounded-[2rem] border border-border bg-bg-elevated/35">
      <div className="p-6 sm:p-8">
        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-cyan">Stats</div>
        <h2 className="mt-2 font-display text-2xl font-semibold text-foreground">Numbers that feel unreal</h2>
        <p className="mt-2 text-sm text-muted">
          Animated counters are lightweight (SVG + motion). Replace values with live analytics later.
        </p>
      </div>

      <div className="grid gap-4 p-6 pt-0 sm:grid-cols-2 sm:p-8 sm:pt-0 lg:grid-cols-4">
      {stats.map((s, i) => (
        <StatCard key={s.label} stat={s} start={inView} delay={i * 0.06} />
      ))}
      </div>
    </section>
  )
}

function StatCard({ stat, start, delay }: { stat: Stat; start: boolean; delay: number }) {
  const val = useCountUp(stat.value, start, 950)
  const display = stat.suffix === '‰' ? (val / 10).toFixed(1) : val.toLocaleString('en-IN')
  const suffix = stat.suffix === '‰' ? '%' : stat.suffix ?? ''

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={start ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay }}
      className="relative overflow-hidden rounded-2xl border border-border bg-surface/55 p-5"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-neon-cyan/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-16 h-44 w-44 rounded-full bg-neon-purple/10 blur-3xl" />
      <div className="relative">
        <div className="text-xs font-semibold uppercase tracking-widest text-muted">{stat.label}</div>
        <div className="mt-3 flex items-baseline gap-2">
          <div className="font-display text-4xl font-semibold tracking-tight text-foreground">
            {display}
          </div>
          <div className="text-sm font-semibold text-neon-cyan">{suffix}</div>
        </div>
        <div className="mt-2 text-xs text-muted">Animated “3D number” effect (lightweight).</div>
      </div>
    </motion.div>
  )
}

