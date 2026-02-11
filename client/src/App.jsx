import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import ServiceDetail from './pages/ServiceDetail'
import ComingSoon from './pages/ComingSoon'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services/:id" element={<ServiceDetail />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          {/* Redirect unknown routes to Home for SPA behavior */}
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default App
