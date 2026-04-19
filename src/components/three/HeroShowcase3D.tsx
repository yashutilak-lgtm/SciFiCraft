import { useMemo } from 'react'
import { useReducedMotionPref } from '../../hooks/useReducedMotionPref'
import { LazyCanvas } from './LazyCanvas'
import { Model3D } from './Model3D'

export function HeroShowcase3D({
  title,
  modelSrc,
  fallbackImg,
}: {
  title: string
  modelSrc?: string
  fallbackImg: string
}) {
  const reduced = useReducedMotionPref()
  const shouldUse3d = useMemo(() => {
    const isMobile = window.matchMedia?.('(max-width: 640px)')?.matches ?? false
    // On mobile, prefer static unless user explicitly wants 3D (future setting).
    return !isMobile && !reduced
  }, [reduced])

  if (!shouldUse3d) {
    return (
      <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface/50">
        <img
          src={fallbackImg}
          alt={`${title} hero visual`}
          className="aspect-square w-full object-cover"
          loading="eager"
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.22),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.20),transparent_60%)]" />
      </div>
    )
  }

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-border bg-surface/50">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.22),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.20),transparent_60%)]" />
      <div className="absolute inset-0 opacity-80">
        <LazyCanvas label={`${title} rotating 3D hero`} className="h-full w-full" dpr={[1, 1.5]}>
          <Model3D src={modelSrc} autoRotate controls={false} materialPreset="glossy" />
        </LazyCanvas>
      </div>
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-full bg-neon-cyan/10 blur-3xl" />
      <div className="relative aspect-square" aria-hidden />
    </div>
  )
}

