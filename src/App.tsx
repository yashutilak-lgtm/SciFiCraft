import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Analytics } from './components/analytics/Analytics'
import { PageLoader } from './components/effects/PageLoader'
import { InstantQuoteModal } from './components/InstantQuoteModal'
import { Layout } from './components/layout/Layout'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { WhatsAppButton } from './components/WhatsAppButton'
import { LiveChatPlaceholder } from './components/conversion/LiveChatPlaceholder'
import { CartProvider } from './context/CartContext'
import { QuoteProvider } from './context/QuoteContext'
import { Account } from './pages/Account'
import { About } from './pages/About'
import { Blog } from './pages/Blog'
import { Cart } from './pages/Cart'
import { Checkout } from './pages/Checkout'
import { Contact } from './pages/Contact'
import { Faq } from './pages/Faq'
import { Home } from './pages/Home'
import { Portfolio } from './pages/Portfolio'
import { Pricing } from './pages/Pricing'
import { Products } from './pages/Products'
import { Services } from './pages/Services'

export default function App() {
  return (
    <QuoteProvider>
      <CartProvider>
        <BrowserRouter>
          <Analytics />
          <PageLoader />
          <ScrollToTop />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Portfolio />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/account" element={<Account />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
          <WhatsAppButton />
          <LiveChatPlaceholder />
          <InstantQuoteModal />
        </BrowserRouter>
      </CartProvider>
    </QuoteProvider>
  )
}
