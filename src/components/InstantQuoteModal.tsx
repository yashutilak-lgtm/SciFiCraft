import { AnimatePresence, motion } from 'framer-motion'
import { Cpu, Sparkles, X } from 'lucide-react'
import { useId, useState } from 'react'
import { useQuote } from '../context/QuoteContext'

/** Frontend-only “instant quote” flow — wire to your backend or form service later. */
export function InstantQuoteModal() {
  const { isOpen, closeQuote } = useQuote()
  const formId = useId()
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    window.setTimeout(() => {
      setSubmitted(false)
      closeQuote()
    }, 1600)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-end justify-center p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${formId}-title`}
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            aria-label="Close dialog backdrop"
            onClick={closeQuote}
          />
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 24, opacity: 0, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-border bg-bg-elevated shadow-2xl shadow-neon-purple/10"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-neon-purple/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-neon-cyan/20 blur-3xl" />

            <div className="relative flex items-start justify-between gap-4 border-b border-border/80 p-6 sm:p-8">
              <div>
                <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-neon-cyan">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden />
                  Instant estimate
                </p>
                <h2 id={`${formId}-title`} className="mt-3 font-display text-2xl font-semibold tracking-tight text-foreground">
                  Tell us what you&apos;re building
                </h2>
                <p className="mt-2 text-sm text-muted">
                  Mock UI — connects to your CRM or email service when you&apos;re ready.
                </p>
              </div>
              <button
                type="button"
                onClick={closeQuote}
                className="focus-ring rounded-xl border border-border p-2 text-muted transition hover:text-foreground"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={onSubmit} className="relative space-y-4 p-6 sm:p-8 sm:pt-2">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="text-muted">Material</span>
                  <select
                    name="material"
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface/80 px-3 py-2.5 text-foreground outline-none ring-0 focus:border-neon-cyan/50"
                    defaultValue="pla"
                  >
                    <option value="pla">PLA</option>
                    <option value="petg">PETG</option>
                    <option value="abs">ABS</option>
                    <option value="resin">Resin</option>
                  </select>
                </label>
                <label className="block text-sm">
                  <span className="text-muted">Quantity</span>
                  <input
                    name="qty"
                    type="number"
                    min={1}
                    defaultValue={1}
                    className="mt-1.5 w-full rounded-xl border border-border bg-surface/80 px-3 py-2.5 text-foreground outline-none focus:border-neon-cyan/50"
                  />
                </label>
              </div>
              <label className="block text-sm">
                <span className="text-muted">Approx. dimensions (mm)</span>
                <input
                  name="dims"
                  placeholder="e.g. 120 × 80 × 40"
                  className="mt-1.5 w-full rounded-xl border border-border bg-surface/80 px-3 py-2.5 text-foreground placeholder:text-muted/60 outline-none focus:border-neon-cyan/50"
                />
              </label>
              <label className="block text-sm">
                <span className="text-muted">Notes</span>
                <textarea
                  name="notes"
                  rows={3}
                  placeholder="Tolerance, finish, deadline…"
                  className="mt-1.5 w-full resize-none rounded-xl border border-border bg-surface/80 px-3 py-2.5 text-foreground placeholder:text-muted/60 outline-none focus:border-neon-cyan/50"
                />
              </label>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2 text-xs text-muted">
                  <Cpu className="h-4 w-4 text-neon-purple" aria-hidden />
                  Est. turnaround shown after review
                </div>
                <button
                  type="submit"
                  className="focus-ring inline-flex items-center justify-center rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue px-6 py-3 text-sm font-semibold text-bg shadow-lg transition hover:brightness-110 disabled:opacity-60"
                  disabled={submitted}
                >
                  {submitted ? 'Received — we’ll follow up' : 'Generate preview'}
                </button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
