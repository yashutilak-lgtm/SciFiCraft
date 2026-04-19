export type PortfolioCategory =
  | 'Engineering Parts'
  | 'Prototypes'
  | 'Decorative Items'
  | 'Functional Products'
  | 'Custom Projects'

export type PortfolioItem = {
  id: string
  title: string
  category: PortfolioCategory
  material: string
  dimensions: string
  turnaround: string
  priceRange: string
  testimonial: { quote: string; name: string; role: string }
  modelSrc?: string
  imageSrcs: string[]
  cadBeforeSrc?: string
  printAfterSrc?: string
  specs: string[]
}

const ph = (seed: string) =>
  `data:image/svg+xml,` +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#22d3ee" stop-opacity="0.35"/>
          <stop offset="0.55" stop-color="#6366f1" stop-opacity="0.22"/>
          <stop offset="1" stop-color="#a855f7" stop-opacity="0.32"/>
        </linearGradient>
        <radialGradient id="r" cx="30%" cy="20%" r="80%">
          <stop offset="0" stop-color="#ffffff" stop-opacity="0.14"/>
          <stop offset="1" stop-color="#000000" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="1200" height="900" fill="#07080d"/>
      <rect width="1200" height="900" fill="url(#g)"/>
      <rect width="1200" height="900" fill="url(#r)"/>
      <g fill="none" stroke="#f1f5f9" stroke-opacity="0.10">
        <path d="M210 230 C360 90, 560 70, 740 150 C930 235, 1010 430, 920 590 C820 765, 580 820, 390 720 C210 625, 115 380, 210 230 Z"/>
      </g>
      <text x="64" y="96" fill="#f1f5f9" fill-opacity="0.92" font-family="ui-sans-serif,system-ui" font-size="34" font-weight="700">Nirmaan3D Visual Placeholder</text>
      <text x="64" y="142" fill="#94a3b8" fill-opacity="0.95" font-family="ui-sans-serif,system-ui" font-size="18">${seed}</text>
      <text x="64" y="182" fill="#94a3b8" fill-opacity="0.8" font-family="ui-sans-serif,system-ui" font-size="14">Replace with real studio photos / renders (WebP)</text>
    </svg>`,
  )

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'eng-bracket-01',
    title: 'Machine Mount Bracket',
    category: 'Engineering Parts',
    material: 'ABS',
    dimensions: '120×80×18 mm',
    turnaround: '48 hrs',
    priceRange: '₹700–₹1,200',
    modelSrc: '/models/sample.glb',
    imageSrcs: [ph('Mount Bracket — angle 1'), ph('Mount Bracket — angle 2'), ph('Mount Bracket — detail'), ph('Mount Bracket — back')],
    cadBeforeSrc: ph('CAD: bracket STEP render'),
    printAfterSrc: ph('Printed: bracket studio photo'),
    specs: ['Tight tolerance fit', 'Heat-set inserts optional', 'Strength-first orientation'],
    testimonial: {
      quote: 'Bracket fit first try. Saved us two weeks of iteration.',
      name: 'Vikram S.',
      role: 'Mechatronics engineer',
    },
  },
  {
    id: 'eng-gear-01',
    title: 'Functional Gear Pair',
    category: 'Engineering Parts',
    material: 'Nylon',
    dimensions: 'Ø70 mm',
    turnaround: '3–5 days',
    priceRange: '₹900–₹1,800',
    imageSrcs: [ph('Gears — angle 1'), ph('Gears — angle 2'), ph('Gears — macro'), ph('Gears — top')],
    specs: ['Wear-focused material selection', 'Post-processed teeth (optional)', 'Backlash tuned for application'],
    testimonial: { quote: 'Noise dropped noticeably vs. our previous prototype.', name: 'Studio Rotor', role: 'Robotics lab' },
  },
  {
    id: 'proto-shell-01',
    title: 'Consumer Device Shell',
    category: 'Prototypes',
    material: 'PLA',
    dimensions: '160×78×22 mm',
    turnaround: '24–72 hrs',
    priceRange: '₹800–₹1,500',
    imageSrcs: [ph('Device shell — angle 1'), ph('Device shell — angle 2'), ph('Device shell — seam'), ph('Device shell — inside')],
    cadBeforeSrc: ph('CAD: device shell render'),
    printAfterSrc: ph('Printed: device shell photo'),
    specs: ['Snap-fit validation', 'Surface-ready finishing', 'Fit-check for PCB standoffs'],
    testimonial: { quote: 'Looked “retail-ready” for our demo day.', name: 'Ananya K.', role: 'Hardware lead' },
  },
  {
    id: 'decor-mini-01',
    title: 'Miniature Sculpture',
    category: 'Decorative Items',
    material: 'Resin',
    dimensions: '95×60×55 mm',
    turnaround: '2–5 days',
    priceRange: '₹1,200–₹2,800',
    imageSrcs: [ph('Miniature — angle 1'), ph('Miniature — angle 2'), ph('Miniature — macro'), ph('Miniature — back')],
    specs: ['High-detail layers', 'Support cleanup option', 'Paint-ready surface'],
    testimonial: { quote: 'Detail was insane. No visible layer lines after prime.', name: 'Riya P.', role: 'Miniatures artist' },
  },
  {
    id: 'func-stand-01',
    title: 'Phone Stand',
    category: 'Functional Products',
    material: 'PLA',
    dimensions: '110×75×95 mm',
    turnaround: '24–48 hrs',
    priceRange: '₹399–₹699',
    imageSrcs: [ph('Phone stand — angle 1'), ph('Phone stand — angle 2'), ph('Phone stand — detail'), ph('Phone stand — bottom')],
    specs: ['Stable base', 'Cable pass-through', 'Multiple angle variants'],
    testimonial: { quote: 'Simple, sturdy, shipped super fast.', name: 'Karthik R.', role: 'Customer' },
  },
  {
    id: 'custom-jig-01',
    title: 'Assembly Jig (Client)',
    category: 'Custom Projects',
    material: 'PETG',
    dimensions: '220×140×40 mm',
    turnaround: '3–6 days',
    priceRange: '₹2,500–₹6,500',
    imageSrcs: [ph('Assembly jig — angle 1'), ph('Assembly jig — angle 2'), ph('Assembly jig — detail'), ph('Assembly jig — workstation')],
    cadBeforeSrc: ph('CAD: jig render'),
    printAfterSrc: ph('Printed: jig in use'),
    specs: ['Ergonomics tuned', 'Repeatability', 'Batch production-ready'],
    testimonial: { quote: 'Throughput improved immediately—worth every rupee.', name: 'Ops Team', role: 'Manufacturing (Pune)' },
  },
  // Add more items (20–30) — placeholders kept lightweight; swap with real photos/models.
  ...Array.from({ length: 18 }).map((_, i) => {
    const idx = i + 1
    const cat: PortfolioCategory =
      idx % 5 === 0
        ? 'Custom Projects'
        : idx % 4 === 0
          ? 'Functional Products'
          : idx % 3 === 0
            ? 'Decorative Items'
            : idx % 2 === 0
              ? 'Prototypes'
              : 'Engineering Parts'
    return {
      id: `auto-${idx}`,
      title: `${cat} Showcase #${idx}`,
      category: cat,
      material: cat === 'Decorative Items' ? 'Resin' : cat === 'Engineering Parts' ? 'ABS' : 'PLA',
      dimensions: idx % 2 === 0 ? '120×80×30 mm' : '90×60×40 mm',
      turnaround: idx % 2 === 0 ? '48 hrs' : '2–4 days',
      priceRange: idx % 2 === 0 ? '₹900–₹2,500' : '₹500–₹1,600',
      modelSrc: idx % 6 === 0 ? '/models/sample.glb' : undefined,
      imageSrcs: [ph(`${cat} #${idx} — angle 1`), ph(`${cat} #${idx} — angle 2`), ph(`${cat} #${idx} — detail`), ph(`${cat} #${idx} — back`)],
      specs: ['Optimized orientation', 'QC before packing', 'Pan‑India shipping'],
      testimonial: { quote: 'Fast and consistent quality.', name: 'Verified buyer', role: 'India' },
    } satisfies PortfolioItem
  }),
]

export const portfolioCategories: PortfolioCategory[] = [
  'Engineering Parts',
  'Prototypes',
  'Decorative Items',
  'Functional Products',
  'Custom Projects',
]

