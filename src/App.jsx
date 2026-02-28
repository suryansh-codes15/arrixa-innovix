'use client'

import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './views/Home'
import About from './views/About'
import Certification from './views/Certification'
import Terms from './views/Terms'
import Privacy from './views/Privacy'
import Refund from './views/Refund'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <ErrorBoundary>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/certification" element={<Certification />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </ErrorBoundary>
  )
}

export default App
