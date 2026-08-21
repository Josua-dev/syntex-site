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
            <img src="/img/syntex-logo.png" alt="Syntex Technologies (Pty) Ltd" className="brand-logo" width="241" height="82" />
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

// ---------- Desktop item with DIRECTIONAL hover mega-panel ----------
// The panel enters from the side of the cursor that crossed the trigger,
// so the motion feels physically directional rather than always sliding up.

const DIR_VECTORS = {
  top:    { x: 0,  y: -14 },
  bottom: { x: 0,  y: 14 },
  left:   { x: -16, y: 0 },
  right:  { x: 16,  y: 0 },
}

function readDir(e, el) {
  const b = el.getBoundingClientRect()
  const x = e.clientX - (b.left + b.width / 2)
  const y = e.clientY - (b.top + b.height / 2)
  // Strongest axis wins; diagonal resolved to the dominant axis.
  if (Math.abs(x) > Math.abs(y)) return x > 0 ? 'right' : 'left'
  return y > 0 ? 'bottom' : 'top'
}

function DesktopItem({ top, active }) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef(null)
  const triggerRef = useRef(null)
  const dirRef = useRef('bottom')
  const [from, setFrom] = useState('bottom')

  const setDir = (e) => {
    if (triggerRef.current) dirRef.current = readDir(e, triggerRef.current)
    setFrom(dirRef.current)
  }
  const enter = (e) => { setDir(e); clearTimeout(closeTimer.current); setOpen(true) }
  const leave = () => { closeTimer.current = setTimeout(() => setOpen(false), 120) }

  const v = DIR_VECTORS[from] || DIR_VECTORS.bottom
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
        ref={triggerRef}
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
            initial={{ opacity: 0, x: v.x, y: v.y }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: v.x, y: v.y }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
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
        </Link>
        <button
          type="button"
          className="mm-arrow"
          aria-expanded={open}
          aria-controls={`mm-sub-${top.label}`}
          aria-label={open ? `Collapse ${top.label} submenu` : `Expand ${top.label} submenu`}
          onClick={() => setOpen((v) => !v)}
        >
          <ArrowIcon />
        </button>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`mm-sub-${top.label}`}
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