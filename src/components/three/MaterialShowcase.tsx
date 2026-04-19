import { Info } from 'lucide-react'
import { useMemo, useState } from 'react'
import { ModelViewer } from './ModelViewer'

type MaterialKey = 'PLA' | 'ABS' | 'Resin' | 'Metal'

const presets: Record<MaterialKey, { preset: 'matte' | 'glossy' | 'metallic'; note: string }> = {
  PLA: { preset: 'matte', note: 'Affordable, great for prototypes and fixtures. Nice matte look.' },
  ABS: { preset: 'matte', note: 'Tougher, better heat resistance. Great for functional parts.' },
  Resin: { preset: 'glossy', note: 'High detail, smoother surfaces. Best for miniatures and cosmetics.' },
  Metal: { preset: 'metallic', note: 'Metal-like appearance (visual preset). Real metal printing is quote-based.' },
}

export function MaterialShowcase({
  title = 'Material showcase',
  modelSrc,
}: {
  title?: string
  modelSrc?: string
}) {
  const [active, setActive] = useState<MaterialKey>('PLA')
  const tooltip = useMemo(() => presets[active].note, [active])

  return (
    <section className="overflow-hidden rounded-[2rem] border border-border bg-surface/55">
      <div className="flex flex-col gap-4 border-b border-border/70 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-cyan">Materials</div>
          <h2 className="mt-2 font-display text-2xl font-semibold text-foreground">{title}</h2>
          <p className="mt-2 text-sm text-muted">
            Same model, different finishes. Hover/tap a material to preview and compare.
          </p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-2xl border border-border bg-bg/20 px-4 py-3 text-xs text-muted">
          <Info className="h-4 w-4 text-neon-purple" aria-hidden />
          <span title={tooltip}>{tooltip}</span>
        </div>
      </div>

      <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_320px]">
        <ModelViewer title={`${active} finish preview`} src={modelSrc} materialPreset={presets[active].preset} />

        <aside className="rounded-2xl border border-border bg-bg-elevated/35 p-5">
          <div className="text-xs font-semibold uppercase tracking-widest text-neon-purple">Choose material</div>
          <div className="mt-4 grid gap-3">
            {(['PLA', 'ABS', 'Resin', 'Metal'] as const).map((m) => {
              const on = m === active
              return (
                <button
                  key={m}
                  type="button"
                  onMouseEnter={() => setActive(m)}
                  onFocus={() => setActive(m)}
                  onClick={() => setActive(m)}
                  className={[
                    'focus-ring flex items-start justify-between rounded-2xl border px-4 py-3 text-left transition',
                    on ? 'border-neon-cyan/35 bg-surface/70' : 'border-border bg-bg/20 hover:border-neon-cyan/25',
                  ].join(' ')}
                >
                  <div>
                    <div className="text-sm font-semibold text-foreground">{m}</div>
                    <div className="mt-1 text-xs text-muted">{presets[m].note}</div>
                  </div>
                  <div className="text-xs text-muted">{on ? 'Selected' : 'Preview'}</div>
                </button>
              )
            })}
          </div>
          <div className="mt-4 text-xs text-muted">
            Tooltips are built-in; replace notes with real specs (density, heat deflection, finish options).
          </div>
        </aside>
      </div>
    </section>
  )
}

