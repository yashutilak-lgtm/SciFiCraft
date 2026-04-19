import { Suspense, type ReactNode } from 'react'
import { Canvas } from '@react-three/fiber'

function Fallback({ label }: { label: string }) {
  return (
    <div
      className="flex h-full w-full items-center justify-center rounded-2xl border border-border bg-bg/30 text-sm text-muted"
      role="status"
      aria-label={label}
    >
      Loading 3D…
    </div>
  )
}

export function LazyCanvas({
  children,
  className,
  label,
  dpr = [1, 1.5],
}: {
  children: ReactNode
  className?: string
  label: string
  dpr?: number | [number, number]
}) {
  return (
    <div className={className}>
      <Canvas
        dpr={dpr}
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [1.6, 1.1, 1.6], fov: 45 }}
      >
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
      <noscript>
        <Fallback label={label} />
      </noscript>
    </div>
  )
}

