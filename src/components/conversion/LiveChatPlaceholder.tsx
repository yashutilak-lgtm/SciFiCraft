import { Headset } from 'lucide-react'
import { useState } from 'react'

export function LiveChatPlaceholder() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="focus-ring fixed bottom-6 left-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full border border-border bg-surface/80 text-foreground shadow-[0_16px_60px_rgba(34,211,238,0.14)] transition hover:border-neon-cyan/40 hover:shadow-glow-cyan md:bottom-8 md:left-8"
        aria-label="Open live chat (placeholder)"
      >
        <Headset className="h-7 w-7 text-neon-cyan" strokeWidth={1.75} />
      </button>

      {open && (
        <div className="fixed inset-0 z-[95] flex items-end justify-center p-4 sm:items-center">
          <button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-label="Close live chat backdrop"
            onClick={() => setOpen(false)}
          />
          <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-border bg-bg-elevated p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-neon-purple">Live chat</div>
                <div className="mt-2 font-display text-xl font-semibold text-foreground">Chat widget placeholder</div>
                <p className="mt-2 text-sm text-muted">
                  Swap this with Intercom, Crisp, Tawk, or your preferred widget.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="focus-ring rounded-xl border border-border px-3 py-2 text-sm font-semibold text-foreground"
              >
                Close
              </button>
            </div>
            <div className="mt-5 rounded-2xl border border-white/10 bg-bg/40 p-4 text-sm text-muted">
              Suggested prompt: “Share your material, quantity, and deadline — we’ll respond with the best option.”
            </div>
          </div>
        </div>
      )}
    </>
  )
}

