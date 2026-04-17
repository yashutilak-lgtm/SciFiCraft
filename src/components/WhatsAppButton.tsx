import { MessageCircle } from 'lucide-react'

/** Floating WhatsApp — update `href` with your business number (E.164, no + in wa.me). */
const WHATSAPP_URL = 'https://wa.me/919876543210?text=Hi%20Nirmaan3D%2C%20I%27d%20like%20a%20quote%20for%203D%20printing.'

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noreferrer noopener"
      className="focus-ring fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_40px_rgba(37,211,102,0.45)] transition hover:scale-105 hover:shadow-[0_16px_48px_rgba(37,211,102,0.55)] md:bottom-8 md:right-8"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-7 w-7" strokeWidth={1.75} />
    </a>
  )
}
