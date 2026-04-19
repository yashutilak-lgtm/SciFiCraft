import { Link } from 'react-router-dom'

const social = [
  {
    href: 'https://www.linkedin.com/',
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: 'https://www.instagram.com/',
    label: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    href: 'https://twitter.com/',
    label: 'X',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: 'https://www.youtube.com/',
    label: 'YouTube',
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden>
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136c.502-1.884.502-5.814.502-5.814s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-elevated/50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-display text-xl font-semibold tracking-tight text-foreground">
              Nirmaan<span className="text-neon-cyan">3D</span>
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
              SciFi Craft LLP — precision additive manufacturing for India&apos;s builders. From rapid
              prototypes to batch runs, we ship quality you can measure.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {social.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface/60 text-muted transition hover:border-neon-cyan/40 hover:text-foreground"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Explore</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/products" className="text-muted transition hover:text-foreground">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted transition hover:text-foreground">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-muted transition hover:text-foreground">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted transition hover:text-foreground">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted transition hover:text-foreground">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted transition hover:text-foreground">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Legal</p>
            <p className="mt-4 text-sm text-muted">
              SciFi Craft LLP
              <br />
              India
            </p>
            <p className="mt-3 text-xs text-muted/80">
              Replace social URLs and contact details with your live channels before launch.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border/80 pt-8 text-xs text-muted sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} SciFi Craft LLP. All rights reserved.</p>
          <a
            href="https://www.nirmaan3d.com/"
            className="text-neon-cyan/90 hover:text-neon-cyan"
            rel="canonical"
          >
            www.nirmaan3d.com
          </a>
        </div>
      </div>
    </footer>
  )
}
