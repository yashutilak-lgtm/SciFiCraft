import { Star } from 'lucide-react'

export function Rating({ value, count }: { value: number; count: number }) {
  const full = Math.floor(value)
  const half = value - full >= 0.5
  const stars = Array.from({ length: 5 }, (_, i) => {
    const filled = i < full
    const isHalf = i === full && half
    return { filled, isHalf }
  })

  return (
    <div className="flex items-center gap-2" aria-label={`Rated ${value.toFixed(1)} out of 5 from ${count} reviews`}>
      <div className="flex items-center">
        {stars.map((s, i) => (
          <span key={i} className="relative">
            <Star
              className={[
                'h-4 w-4',
                s.filled ? 'fill-neon-cyan text-neon-cyan' : 'text-white/20',
              ].join(' ')}
              aria-hidden
            />
            {s.isHalf && (
              <span className="absolute inset-0 overflow-hidden" style={{ width: '50%' }} aria-hidden>
                <Star className="h-4 w-4 fill-neon-cyan text-neon-cyan" />
              </span>
            )}
          </span>
        ))}
      </div>
      <span className="text-xs font-semibold text-foreground/90">{value.toFixed(1)}</span>
      <span className="text-xs text-muted">({count.toLocaleString('en-IN')})</span>
    </div>
  )
}

