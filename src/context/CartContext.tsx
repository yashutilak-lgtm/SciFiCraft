/* Context + hook live together; Fast Refresh rule is overly strict here. */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Product } from '../data/products'

export type CartLine = {
  id: string
  kind: 'product' | 'service'
  title: string
  unitPriceInr: number
  qty: number
  meta?: Record<string, string>
  productId?: string
}

type CartState = {
  lines: CartLine[]
}

type CartContextValue = {
  lines: CartLine[]
  itemCount: number
  subtotalInr: number
  addProduct: (p: Product, qty?: number) => void
  addServiceQuote: (line: Omit<CartLine, 'id' | 'kind'> & { kind?: 'service' }) => void
  setQty: (lineId: string, qty: number) => void
  removeLine: (lineId: string) => void
  clear: () => void
}

const CartContext = createContext<CartContextValue | null>(null)
const STORAGE_KEY = 'nirmaan3d.cart.v1'

function safeParse(json: string | null): CartState | null {
  if (!json) return null
  try {
    const parsed = JSON.parse(json) as unknown
    if (!parsed || typeof parsed !== 'object') return null
    const obj = parsed as { lines?: unknown }
    if (!Array.isArray(obj.lines)) return null
    return { lines: obj.lines as CartLine[] }
  } catch {
    return null
  }
}

function clampQty(qty: number) {
  if (!Number.isFinite(qty)) return 1
  return Math.max(1, Math.min(999, Math.floor(qty)))
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(() => {
    const stored = safeParse(window.localStorage?.getItem(STORAGE_KEY) ?? null)
    return stored?.lines ?? []
  })

  useEffect(() => {
    window.localStorage?.setItem(STORAGE_KEY, JSON.stringify({ lines } satisfies CartState))
  }, [lines])

  const addProduct = useCallback((p: Product, qty = 1) => {
    const q = clampQty(qty)
    setLines((prev) => {
      const existing = prev.find((l) => l.kind === 'product' && l.productId === p.id && l.unitPriceInr === p.priceInr)
      if (!existing) {
        return [
          ...prev,
          {
            id: crypto.randomUUID(),
            kind: 'product',
            title: p.name,
            unitPriceInr: p.priceInr,
            qty: q,
            productId: p.id,
          },
        ]
      }
      return prev.map((l) => (l.id === existing.id ? { ...l, qty: clampQty(l.qty + q) } : l))
    })
  }, [])

  const addServiceQuote = useCallback((line: Omit<CartLine, 'id' | 'kind'> & { kind?: 'service' }) => {
    setLines((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        kind: 'service',
        title: line.title,
        unitPriceInr: line.unitPriceInr,
        qty: clampQty(line.qty),
        meta: line.meta,
      },
    ])
  }, [])

  const setQty = useCallback((lineId: string, qty: number) => {
    const q = clampQty(qty)
    setLines((prev) => prev.map((l) => (l.id === lineId ? { ...l, qty: q } : l)))
  }, [])

  const removeLine = useCallback((lineId: string) => {
    setLines((prev) => prev.filter((l) => l.id !== lineId))
  }, [])

  const clear = useCallback(() => setLines([]), [])

  const itemCount = useMemo(() => lines.reduce((acc, l) => acc + l.qty, 0), [lines])
  const subtotalInr = useMemo(() => lines.reduce((acc, l) => acc + l.qty * l.unitPriceInr, 0), [lines])

  const value = useMemo(
    () => ({ lines, itemCount, subtotalInr, addProduct, addServiceQuote, setQty, removeLine, clear }),
    [lines, itemCount, subtotalInr, addProduct, addServiceQuote, setQty, removeLine, clear],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}

