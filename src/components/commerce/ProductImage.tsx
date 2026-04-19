import type { ProductImageView } from '../../data/products'

const viewLabel: Record<ProductImageView, string> = {
  front: 'Front view',
  side: 'Side view',
  back: 'Back view',
  top: 'Top view',
}

export function ProductImage({
  productName,
  view,
  className,
}: {
  productName: string
  view: ProductImageView
  className?: string
}) {
  const aria = `${productName} — ${viewLabel[view]}`
  const label = view.toUpperCase()

  return (
    <div
      role="img"
      aria-label={aria}
      className={[
        'relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-neon-cyan/10 via-white/[0.03] to-neon-purple/10',
        className ?? '',
      ].join(' ')}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(34,211,238,0.18),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.18),transparent_55%)]" />
      <svg viewBox="0 0 480 360" className="relative h-full w-full">
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="rgba(34,211,238,0.55)" />
            <stop offset="0.55" stopColor="rgba(99,102,241,0.25)" />
            <stop offset="1" stopColor="rgba(168,85,247,0.5)" />
          </linearGradient>
          <filter id="s" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="14" stdDeviation="18" floodColor="rgba(0,0,0,0.55)" />
          </filter>
        </defs>

        <g filter="url(#s)">
          <path
            d="M115 106 C155 64, 224 52, 286 70 C352 89, 382 144, 356 210 C330 278, 240 306, 164 276 C92 248, 76 152, 115 106 Z"
            fill="url(#g)"
            opacity="0.9"
          />
          <path
            d="M170 118 C205 90, 260 90, 296 115 C330 140, 338 188, 314 224 C288 264, 230 276, 186 252 C144 228, 136 146, 170 118 Z"
            fill="rgba(7,8,13,0.55)"
            stroke="rgba(241,245,249,0.08)"
            strokeWidth="2"
          />
        </g>

        <text x="24" y="44" fill="rgba(241,245,249,0.85)" fontSize="18" fontFamily="ui-sans-serif, system-ui">
          {label}
        </text>
        <text x="24" y="72" fill="rgba(148,163,184,0.9)" fontSize="12" fontFamily="ui-sans-serif, system-ui">
          3D render placeholder — replace with photography
        </text>

        <g opacity="0.6">
          <circle cx="404" cy="64" r="6" fill="rgba(34,211,238,0.8)" />
          <circle cx="428" cy="64" r="6" fill="rgba(168,85,247,0.8)" />
          <circle cx="452" cy="64" r="6" fill="rgba(59,130,246,0.8)" />
        </g>
      </svg>
    </div>
  )
}

