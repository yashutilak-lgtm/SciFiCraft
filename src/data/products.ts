export type ProductImageView = 'front' | 'side' | 'back' | 'top'

export type Product = {
  id: string
  name: string
  tagline: string
  description: string
  keyFeatures: string[]
  priceInr: number
  rating: number
  reviewCount: number
  views: ProductImageView[]
  badges?: string[]
  turnaround: string
}

export const products: Product[] = [
  {
    id: 'p-precision-bracket',
    name: 'Precision Mount Bracket',
    tagline: 'Rigid, dimensional, and ready for hardware.',
    description:
      'A high-strength functional bracket printed for robotics and enclosures. Great for quick assembly checks and field iterations.',
    keyFeatures: ['±0.2 mm typical tolerance', 'Heat-set insert ready', 'Optimized infill for stiffness'],
    priceInr: 899,
    rating: 4.8,
    reviewCount: 214,
    views: ['front', 'side', 'back', 'top'],
    badges: ['Bestseller', 'Ships in 48h'],
    turnaround: '24–48 hrs',
  },
  {
    id: 'p-mini-drone-frame',
    name: 'Mini Drone Frame (Kit)',
    tagline: 'Lightweight frame for rapid flight tests.',
    description:
      'A tuned frame kit with vibration-friendly geometry. Perfect for quick prop/motor iterations before carbon fiber.',
    keyFeatures: ['Lightweight lattice', 'Cable-routing channels', 'Crash-friendly spares'],
    priceInr: 1499,
    rating: 4.6,
    reviewCount: 97,
    views: ['front', 'side', 'back', 'top'],
    badges: ['New', 'Recommended'],
    turnaround: '2–3 days',
  },
  {
    id: 'p-architectural-maquette',
    name: 'Architectural Maquette',
    tagline: 'Clean details for client-ready presentations.',
    description:
      'A high-detail maquette sample showing crisp edges and smooth surfaces. Ideal for exhibitions and design reviews.',
    keyFeatures: ['Fine layers', 'Smooth finish options', 'Assembly-friendly'],
    priceInr: 2499,
    rating: 4.7,
    reviewCount: 58,
    views: ['front', 'side', 'back', 'top'],
    badges: ['Premium finish'],
    turnaround: '3–5 days',
  },
  {
    id: 'p-custom-enclosure',
    name: 'Custom Electronics Enclosure',
    tagline: 'Snap-fit + screws, engineered for fit.',
    description:
      'A configurable enclosure for PCBs and sensors. Choose material, color, and finishing for your environment.',
    keyFeatures: ['Snap-fit validated', 'Threaded inserts optional', 'EMI gasket groove option'],
    priceInr: 1799,
    rating: 4.5,
    reviewCount: 131,
    views: ['front', 'side', 'back', 'top'],
    badges: ['Customize'],
    turnaround: '2–4 days',
  },
]

export function formatInr(amount: number) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount)
}

