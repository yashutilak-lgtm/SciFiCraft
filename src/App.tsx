import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PageLoader } from './components/effects/PageLoader'
import { InstantQuoteModal } from './components/InstantQuoteModal'
import { Layout } from './components/layout/Layout'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { WhatsAppButton } from './components/WhatsAppButton'
import { QuoteProvider } from './context/QuoteContext'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Portfolio } from './pages/Portfolio'
import { Services } from './pages/Services'

export default function App() {
  return (
    <QuoteProvider>
      <BrowserRouter>
        <PageLoader />
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
        <WhatsAppButton />
        <InstantQuoteModal />
      </BrowserRouter>
    </QuoteProvider>
  )
}
