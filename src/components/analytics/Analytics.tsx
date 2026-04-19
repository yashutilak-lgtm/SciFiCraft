import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

/** SPA analytics hook-point; wire GA/ads conversion here. */
export function Analytics() {
  const { pathname, search, hash } = useLocation()

  useEffect(() => {
    const page_path = `${pathname}${search}${hash}`
    // If GA is installed, send a page_view. Safe no-op otherwise.
    window.gtag?.('event', 'page_view', { page_path })
  }, [pathname, search, hash])

  return null
}

