import { PerspectiveCamera } from '@react-three/drei'
import { LazyCanvas } from './LazyCanvas'
import { Model3D } from './Model3D'
import { useReducedMotionPref } from '../../hooks/useReducedMotionPref'

const angles = [
  { label: 'Front', cam: [1.6, 0.9, 1.6] as const },
  { label: 'Left', cam: [-1.8, 0.8, 1.2] as const },
  { label: 'Top', cam: [0.1, 2.3, 0.2] as const },
  { label: 'Back', cam: [-1.6, 0.8, -1.6] as const },
]

function Scene({ src, autoRotate, materialPreset }: { src?: string; autoRotate: boolean; materialPreset: 'matte' | 'glossy' | 'metallic' }) {
  return (
    <>
      <Model3D src={src} autoRotate={autoRotate} controls={false} materialPreset={materialPreset} />
    </>
  )
}

export function MultiAngleViewer({
  title,
  src,
  materialPreset = 'glossy',
}: {
  title: string
  src?: string
  materialPreset?: 'matte' | 'glossy' | 'metallic'
}) {
  const reduced = useReducedMotionPref()
  const autoRotate = !reduced

  return (
    <section className="overflow-hidden rounded-[2rem] border border-border bg-surface/55">
      <div className="border-b border-border/70 p-6 sm:p-8">
        <div className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-purple">Multiple angles</div>
        <h2 className="mt-2 font-display text-2xl font-semibold text-foreground">{title}</h2>
        <p className="mt-2 text-sm text-muted">
          Four synchronized angles at once. Auto-rotation respects reduced-motion preference.
        </p>
      </div>
      <div className="grid gap-4 p-6 sm:grid-cols-2 sm:p-8">
        {angles.map((a) => (
          <div key={a.label} className="overflow-hidden rounded-2xl border border-border bg-bg/20">
            <div className="flex items-center justify-between border-b border-border/70 px-4 py-3">
              <div className="text-xs font-semibold uppercase tracking-widest text-muted">{a.label}</div>
              <div className="text-[11px] text-muted">3D</div>
            </div>
            <div className="aspect-[16/10]">
              <LazyCanvas
                label={`${title} ${a.label} angle`}
                className="h-full w-full"
              >
                <PerspectiveCamera makeDefault position={[...a.cam]} fov={45} />
                <Scene src={src} autoRotate={autoRotate} materialPreset={materialPreset} />
              </LazyCanvas>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

