import { useMemo, useState } from 'react'
import { LazyCanvas } from './LazyCanvas'
import { Model3D } from './Model3D'
import { useReducedMotionPref } from '../../hooks/useReducedMotionPref'

export function ModelViewer({
  title,
  src,
  className,
  initialAutoRotate = true,
  materialPreset = 'matte',
}: {
  title: string
  src?: string
  className?: string
  initialAutoRotate?: boolean
  materialPreset?: 'matte' | 'glossy' | 'metallic'
}) {
  const reduced = useReducedMotionPref()
  const [autoRotate, setAutoRotate] = useState(initialAutoRotate && !reduced)
  const label = useMemo(() => `${title} interactive 3D viewer`, [title])

  return (
    <div className={['relative overflow-hidden rounded-2xl border border-border bg-bg/20', className ?? ''].join(' ')}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_15%,rgba(34,211,238,0.16),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.14),transparent_55%)]" />
      <div className="relative aspect-[16/10]">
        <LazyCanvas label={label} className="h-full w-full">
          <Model3D src={src} autoRotate={autoRotate} controls materialPreset={materialPreset} />
        </LazyCanvas>
      </div>

      <div className="relative flex flex-col gap-2 border-t border-border/70 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-widest text-muted">3D viewer</div>
          <div className="mt-1 font-semibold text-foreground">{title}</div>
          <div className="mt-1 text-xs text-muted">Rotate • Zoom • Pan • GLB/GLTF/OBJ supported</div>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setAutoRotate(false)}
            className={[
              'focus-ring rounded-full border px-4 py-2 text-xs font-semibold transition',
              autoRotate ? 'border-border bg-bg/20 text-foreground hover:border-neon-cyan/30' : 'border-neon-cyan/35 bg-surface/70 text-foreground',
            ].join(' ')}
          >
            Auto-rotate: Off
          </button>
          <button
            type="button"
            onClick={() => setAutoRotate(true)}
            className={[
              'focus-ring rounded-full border px-4 py-2 text-xs font-semibold transition',
              autoRotate ? 'border-neon-cyan/35 bg-surface/70 text-foreground' : 'border-border bg-bg/20 text-foreground hover:border-neon-cyan/30',
            ].join(' ')}
            disabled={reduced}
            aria-disabled={reduced}
            title={reduced ? 'Disabled due to reduced motion preference' : undefined}
          >
            Auto-rotate: On
          </button>
        </div>
      </div>
    </div>
  )
}

