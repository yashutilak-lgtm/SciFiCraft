import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useQuote } from '../../context/QuoteContext'

const nav = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function desktopLinkClass({ isActive }: { isActive: boolean }) {
  return [
    'relative rounded-lg px-3 py-2 text-sm font-medium transition-colors',
    isActive ? 'bg-white/[0.06] text-foreground shadow-[0_0_0_1px_rgba(34,211,238,0.12)]' : 'text-muted hover:text-foreground',
  ].join(' ')
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { openQuote } = useQuote()

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <NavLink to="/" className="group flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/25 ring-1 ring-white/10">
            <span className="font-display text-lg font-bold tracking-tight text-gradient">N</span>
          </span>
          <span className="font-display text-base font-semibold tracking-tight text-foreground sm:text-lg">
            Nirmaan<span className="text-neon-cyan">3D</span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} className={desktopLinkClass} end={item.to === '/'}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={openQuote}
            className="focus-ring rounded-full border border-border bg-surface/80 px-4 py-2 text-sm font-medium text-foreground transition hover:border-neon-cyan/40 hover:shadow-glow-cyan"
          >
            Instant quote
          </button>
          <NavLink
            to="/contact"
            className="focus-ring rounded-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple px-4 py-2 text-sm font-semibold text-bg shadow-lg shadow-neon-purple/20 transition hover:brightness-110"
          >
            Get a quote
          </NavLink>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex rounded-lg border border-border p-2 text-foreground md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-border/60 md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setOpen(false)}
                  className={() =>
                    [
                      'rounded-lg px-3 py-2.5 text-sm font-medium',
                      pathname === item.to ? 'bg-white/[0.06] text-foreground' : 'text-muted',
                    ].join(' ')
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <button
                type="button"
                onClick={() => {
                  setOpen(false)
                  openQuote()
                }}
                className="mt-2 rounded-full border border-border px-4 py-2.5 text-left text-sm font-medium"
              >
                Instant quote
              </button>
              <NavLink
                to="/contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple px-4 py-2.5 text-center text-sm font-semibold text-bg"
              >
                Get a quote
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
