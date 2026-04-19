import { useMemo, useState } from 'react'
import { ModelViewer } from './ModelViewer'

/** Luxury ecommerce-style 360° spin (3D canvas version). */
export function Spin360Viewer({
  title,
  src,
  fallbackImg,
}: {
  title: string
  src?: string
  fallbackImg?: string
}) {
  const [enabled, setEnabled] = useState(true)
  const isTouch = useMemo(() => 'ontouchstart' in window || navigator.maxTouchPoints > 0, [])

  return (
    <section className="overflow-hidden rounded-[2rem] border border-border bg-surface/55">
      <div className="flex flex-col gap-4 border-b border-border/70 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-purple">360° spin</div>
          <h2 className="mt-2 font-display text-2xl font-semibold text-foreground">{title}</h2>
          <p className="mt-2 text-sm text-muted">
            Auto-rotates like premium ecommerce. Drag to rotate at your pace; zoom for detail.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setEnabled((v) => !v)}
          className="focus-ring rounded-full border border-border bg-bg/20 px-5 py-2.5 text-xs font-semibold text-foreground transition hover:border-neon-cyan/35"
        >
          {enabled ? 'Disable auto spin' : 'Enable auto spin'}
        </button>
      </div>

      <div className="p-6 sm:p-8">
        {enabled ? (
          <ModelViewer title={title} src={src} initialAutoRotate={!isTouch} materialPreset="glossy" />
        ) : fallbackImg ? (
          <img
            src={fallbackImg}
            alt={`${title} static fallback`}
            className="aspect-[16/10] w-full rounded-2xl border border-border object-cover"
            loading="lazy"
          />
        ) : (
          <ModelViewer title={title} src={src} initialAutoRotate={false} materialPreset="glossy" />
        )}
      </div>
    </section>
  )
}

