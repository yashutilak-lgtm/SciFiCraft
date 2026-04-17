import { motion } from 'framer-motion'
import { Mail, MapPin, Paperclip, Phone, Send } from 'lucide-react'
import { useState } from 'react'
import { MotionSection } from '../components/ui/MotionSection'
import { useSeo } from '../hooks/useSeo'

function FormSuccess({ message }: { message: string }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-sm font-medium text-emerald-300"
      role="status"
    >
      {message}
    </motion.p>
  )
}

export function Contact() {
  useSeo(
    'Contact | Nirmaan3D — Request a Quote',
    'Contact SciFi Craft LLP / Nirmaan3D for 3D printing quotes, CAD support, and batch production in India.',
  )

  const [contactSent, setContactSent] = useState(false)
  const [quoteSent, setQuoteSent] = useState(false)

  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neon-cyan">Contact</p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Let&apos;s talk <span className="text-gradient">hardware</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Replace placeholders with your live email and phone. Forms are frontend-only — connect to Formspree, Netlify
            Forms, or your API.
          </p>
        </div>
      </section>

      <MotionSection className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-3">
          <aside className="space-y-6 rounded-3xl border border-border bg-surface/50 p-6 lg:col-span-1">
            <h2 className="font-display text-lg font-semibold text-foreground">Studio</h2>
            <ul className="space-y-4 text-sm text-muted">
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-neon-cyan" aria-hidden />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted">Email</p>
                  <p className="mt-1 text-foreground">hello@nirmaan3d.com</p>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-neon-cyan" aria-hidden />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted">Phone</p>
                  <p className="mt-1 text-foreground">+91 80722 68414 </p>
                </div>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-neon-cyan" aria-hidden />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted">Location</p>
                  <p className="mt-1 text-foreground">India</p>
                </div>
              </li>
            </ul>
          </aside>

          <div className="lg:col-span-2 space-y-12">
            <section aria-labelledby="contact-form-title">
              <div className="flex items-center justify-between gap-4">
                <h2 id="contact-form-title" className="font-display text-xl font-semibold text-foreground">
                  General inquiry
                </h2>
                {contactSent && <FormSuccess message="Thanks — we’ll get back shortly (demo)." />}
              </div>
              <form
                className="mt-6 grid gap-4 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault()
                  setContactSent(true)
                }}
              >
                <label className="sm:col-span-1 block text-sm">
                  <span className="text-muted">Name</span>
                  <input
                    required
                    name="name"
                    autoComplete="name"
                    className="mt-1.5 w-full rounded-xl border border-border bg-bg/60 px-3 py-2.5 text-foreground outline-none focus:border-neon-cyan/50"
                    placeholder="Your name"
                  />
                </label>
                <label className="sm:col-span-1 block text-sm">
                  <span className="text-muted">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="mt-1.5 w-full rounded-xl border border-border bg-bg/60 px-3 py-2.5 text-foreground outline-none focus:border-neon-cyan/50"
                    placeholder="you@company.com"
                  />
                </label>
                <label className="sm:col-span-2 block text-sm">
                  <span className="text-muted">Phone</span>
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    className="mt-1.5 w-full rounded-xl border border-border bg-bg/60 px-3 py-2.5 text-foreground outline-none focus:border-neon-cyan/50"
                    placeholder="+91 …"
                  />
                </label>
                <label className="sm:col-span-2 block text-sm">
                  <span className="text-muted">Message</span>
                  <textarea
                    required
                    name="message"
                    rows={4}
                    className="mt-1.5 w-full resize-none rounded-xl border border-border bg-bg/60 px-3 py-2.5 text-foreground outline-none focus:border-neon-cyan/50"
                    placeholder="Project context, timeline, quantities…"
                  />
                </label>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-cyan to-neon-blue px-6 py-3 text-sm font-semibold text-bg shadow-lg"
                  >
                    <Send className="h-4 w-4" aria-hidden />
                    Send message
                  </button>
                </div>
              </form>
            </section>

            <section aria-labelledby="quote-form-title" className="border-t border-border/70 pt-12">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h2 id="quote-form-title" className="font-display text-xl font-semibold text-foreground">
                  Request a quote
                </h2>
                {quoteSent && <FormSuccess message="Quote request captured (demo) — attach pipeline next." />}
              </div>
              <p className="mt-2 text-sm text-muted">
                Upload UI only — wire <code className="rounded bg-surface px-1.5 py-0.5 text-xs">input type=&quot;file&quot;</code>{' '}
                to storage when you deploy.
              </p>
              <form
                className="mt-6 grid gap-4 sm:grid-cols-2"
                onSubmit={(e) => {
                  e.preventDefault()
                  setQuoteSent(true)
                }}
              >
                <label className="sm:col-span-1 block text-sm">
                  <span className="text-muted">Name</span>
                  <input
                    required
                    name="q_name"
                    className="mt-1.5 w-full rounded-xl border border-border bg-bg/60 px-3 py-2.5 text-foreground outline-none focus:border-neon-cyan/50"
                    placeholder="Your name"
                  />
                </label>
                <label className="sm:col-span-1 block text-sm">
                  <span className="text-muted">Email</span>
                  <input
                    required
                    type="email"
                    name="q_email"
                    className="mt-1.5 w-full rounded-xl border border-border bg-bg/60 px-3 py-2.5 text-foreground outline-none focus:border-neon-cyan/50"
                    placeholder="you@company.com"
                  />
                </label>
                <label className="sm:col-span-2 block text-sm">
                  <span className="text-muted">Phone</span>
                  <input
                    type="tel"
                    name="q_phone"
                    className="mt-1.5 w-full rounded-xl border border-border bg-bg/60 px-3 py-2.5 text-foreground outline-none focus:border-neon-cyan/50"
                    placeholder="+91 …"
                  />
                </label>
                <label className="sm:col-span-2 block text-sm">
                  <span className="text-muted">Project notes</span>
                  <textarea
                    name="q_notes"
                    rows={4}
                    className="mt-1.5 w-full resize-none rounded-xl border border-border bg-bg/60 px-3 py-2.5 text-foreground outline-none focus:border-neon-cyan/50"
                    placeholder="Material, quantity, deadline…"
                  />
                </label>
                <div className="sm:col-span-2">
                  <span className="text-sm text-muted">Design files</span>
                  <label className="mt-2 flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-surface/40 px-6 py-10 text-center transition hover:border-neon-cyan/40">
                    <input type="file" className="sr-only" multiple accept=".stl,.step,.stp,.3mf,.obj,.zip" />
                    <Paperclip className="h-8 w-8 text-neon-purple" aria-hidden />
                    <span className="mt-3 text-sm font-medium text-foreground">Drop STL / STEP / 3MF or click to browse</span>
                    <span className="mt-1 text-xs text-muted">Max size depends on your hosting — configure on deploy.</span>
                  </label>
                </div>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-foreground transition hover:border-neon-cyan/40"
                  >
                    <Paperclip className="h-4 w-4" aria-hidden />
                    Submit quote request
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </MotionSection>
    </>
  )
}
