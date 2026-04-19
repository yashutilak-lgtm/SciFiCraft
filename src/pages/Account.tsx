import { ArrowRight, User } from 'lucide-react'
import { Link } from 'react-router-dom'
import { MotionSection } from '../components/ui/MotionSection'
import { useSeo } from '../hooks/useSeo'

export function Account() {
  useSeo('Account | Nirmaan3D', 'Account and reorders (placeholder).')

  return (
    <MotionSection className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-cyan">Account</p>
        <h1 className="mt-3 flex items-center gap-3 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          <User className="h-7 w-7 text-neon-purple" aria-hidden />
          Sign in / orders
        </h1>
        <p className="mt-4 text-muted">
          Placeholder for D2C accounts, reorders, saved addresses, and order tracking. Hook to your auth + OMS later.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            to="/cart"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue px-6 py-3 text-sm font-semibold text-bg shadow-lg transition hover:brightness-110"
          >
            View cart
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <Link
            to="/products"
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-6 py-3 text-sm font-semibold text-foreground transition hover:border-neon-cyan/40"
          >
            Shop products
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
      </div>
    </MotionSection>
  )
}

