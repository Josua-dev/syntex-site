'use client'

/* This layout uses client-side hooks (useState, useEffect, useLocation)
   and framer-motion for animations, so it must be marked as a client component. */
import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import MegaNav from './components/MegaNav'
import Footer from './components/Footer'
import SearchModal from './components/SearchModal'
import { ScrollToTop } from './ScrollToTop'

export default function Layout() {
  const [searchOpen, setSearchOpen] = useState(false)
  const location = useLocation()

  // Global Cmd/Ctrl + K to open search.
  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setSearchOpen((v) => !v)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="site">
      <a className="skip-link" href="#main">Skip to content</a>
      <ScrollToTop />
      <MegaNav onOpenSearch={() => setSearchOpen(true)} />

      {/* Page transitions — keyed by path so each route change fades/slides */}
      <motion.main
        key={location.pathname}
        className="site-main"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        preserveState
      >
        <Outlet />
      </motion.main>

      <Footer />
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  )
}