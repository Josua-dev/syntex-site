import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { nav } from '../data/nav'
import { ArrowIcon } from './BrandMark'
import './MegaNav.css'

export default function MegaNav({ onOpenSearch }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [shrunk, setShrunk] = useState(false) // nav reduces height slightly when near top + scrolling
  const location = useLocation()
  const navigate = useNavigate()

  // Transparent-over-hero → solid/blurred on scroll; shrink after a bit more scroll.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      setShrunk(y > 340)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change.
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname, location.search])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.documentElement.classList.toggle('page-locked', mobileOpen)
    return () => document.documentElement.classList.remove('page-locked')
  }, [mobileOpen])

  // Escape closes any open menu.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    // strip query for match
    const base = path.split('?')[0]
    return location.pathname.startsWith(base)
  }

  return (
    <>
      <header className={`meganav ${scrolled ? 'is-scrolled' : ''} ${shrunk ? 'is-shrunk' : ''}`}>
        <div className="wrap meganav-inner">
          <Link to="/" className="brand" aria-label="Syntex Technologies, home">
            <span className="mark" />
            <span className="brand-word">Syntex Technologies<small>(Pty) Ltd</small></span>
          </Link>

          <div className="meganav-navigable">
            <nav className="meganav-links" aria-label="Primary">
              {nav.map((top) => (
                <DesktopItem key={top.label} top={top} active={isActive(top.path)} />
              ))}
            </nav>

            <div className="meganav-actions">
              <button type="button" className="nav-search-toggle" onClick={onOpenSearch} aria-label="Open search" title="Search (Ctrl/Cmd + K)">
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="18" height="18">
                  <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M14 14l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <kbd>⌘K</kbd>
              </button>
              <Link to="/contact" className="btn btn-primary nav-cta-btn">Talk to Our Team</Link>
            </div>
          </div>

          <button
            type="button"
            className="nav-burger"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobileNav"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile full-screen accordion nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobileNav"
            className="mobile-menu"
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <div className="mobile-nav-inner">
              {nav.map((top, ti) => (
                <MobileItem key={top.label} top={top} index={ti} onNavigate={() => setMobileOpen(false)} />
              ))}
              <Link to="/contact" className="btn btn-primary btn-block mm-cta" onClick={() => setMobileOpen(false)}>
                Talk to Our Team <ArrowIcon />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

// ---------- Desktop item with hover mega-panel ----------
function DesktopItem({ top, active }) {
  const [open, setOpen] = useState(false)
  const openTimer = useRef(null)
  const closeTimer = useRef(null)

  const enter = () => { clearTimeout(closeTimer.current); setOpen(true) }
  const leave = () => { closeTimer.current = setTimeout(() => setOpen(false), 120) }

  const topHref = top.label === 'Home' ? '/' : top.path

  return (
    <div
      className="meganav-item"
      onMouseEnter={enter}
      onMouseLeave={leave}
      onFocus={enter}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) leave() }}
    >
      <Link
        to={topHref}
        className={`meganav-toplink ${active ? 'is-active' : ''}`}
        aria-current={active ? 'page' : undefined}
        aria-expanded={open}
      >
        {top.label}
      </Link>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mega-panel"
            role="menu"
            onMouseEnter={() => { clearTimeout(closeTimer.current) }}
            onMouseLeave={leave}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            <div className="mega-grid">
              <div className="mega-lede">
                <div className="mega-heading">
                  <span className="note-flag" style={{ marginBottom: 12 }}>{top.label}</span>
                  <h4>{top.heading}</h4>
                </div>
                <p>{top.description}</p>
                <Link to={topHref} className="mega-explore">
                  Explore all <ArrowIcon />
                </Link>
              </div>

              {top.groups.map((g, gi) => (
                <div className="mega-group" key={g.title}>
                  <div className="mega-group-title">{g.title}</div>
                  <ul className="mega-group-list">
                    {g.items.map((it, ii) => (
                      <li key={it.label}>
                        <Link
                          to={it.path}
                          role="menuitem"
                          className="mega-link"
                          style={{ animationDelay: `${gi * 60 + ii * 45}ms` }}
                        >
                          <span className="mega-link-label">{it.label}</span>
                          {it.verified === false && (
                            <span className="mega-unverified" title="Details not yet publicly published">Soon</span>
                          )}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ---------- Mobile accordion item ----------
function MobileItem({ top, index, onNavigate }) {
  const [open, setOpen] = useState(index < 2) // first two open by default
  const isHome = top.label === 'Home'
  return (
    <div className="mm-group">
      <div className="mm-group-head">
        <Link to={(isHome ? '/' : top.path)} className="mm-group-link" onClick={onNavigate}>
          {top.label}
          <span className="mm-arrow" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setOpen((v) => !v) }}>
            <ArrowIcon />
          </span>
        </Link>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            className="mm-sub"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
          >
            {top.groups.map((g) => (
              <div className="mm-sub-group" key={g.title}>
                <div className="mm-sub-title">{g.title}</div>
                {g.items.map((it) => (
                  <Link key={it.label} to={it.path} className="mm-sub-link" onClick={onNavigate}>
                    {it.label}
                    {it.verified === false && <span className="mm-unverified">Soon</span>}
                  </Link>
                ))}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}