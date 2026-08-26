import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { searchIndex } from '../data/nav'
import './SearchModal.css'

let activeSearchInstance = 0

export default function SearchModal({ open, onClose }) {
  const [q, setQ] = useState('')
  const [highlight, setHighlight] = useState(0)
  const inputRef = useRef(null)
  const navigate = useNavigate()
  const instanceId = ++activeSearchInstance

  useEffect(() => {
    if (open) {
      setQ(''); setHighlight(0)
      requestAnimationFrame(() => inputRef.current && inputRef.current.focus())
    }
  }, [open])

  const results = useMemo(() => {
    const query = q.trim().toLowerCase()
    if (!query) return searchIndex
    return searchIndex.filter((it) => it.label.toLowerCase().includes(query))
  }, [q])

  const go = (path) => {
    onClose()
    navigate(path)
  }

  // keyboard: arrows + enter + escape
  const onKeyDown = (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); setHighlight((h) => Math.min(h + 1, results.length - 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setHighlight((h) => Math.max(h - 1, 0)) }
    else if (e.key === 'Enter' && results[highlight]) { go(results[highlight].path) }
    else if (e.key === 'Escape') { onClose() }
  }

  // Keep only this modal's escape handler active.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  // recovery: if a stale instance mounted, refocus ours
  useEffect(() => {
    if (open && inputRef.current && instanceId === activeSearchInstance) {
      inputRef.current.focus()
    }
  }, [open, instanceId])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="search-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.16 }}
          onMouseDown={onClose}
        >
          <motion.div
            className="search-palette"
            role="dialog"
            aria-modal="true"
            aria-label="Search"
            onMouseDown={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: -16, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.99 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
          >
            <div className="search-input-row">
              <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" width="20" height="20" className="search-ico">
                <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
                <path d="M14 14l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                placeholder="Search services, solutions, projects, about, contact…"
                value={q}
                onChange={(e) => { setQ(e.target.value); setHighlight(0) }}
                onKeyDown={onKeyDown}
                aria-label="Search the site"
              />
              <kbd>ESC</kbd>
            </div>

            <div className="search-results" role="listbox">
              {results.length === 0 ? (
                <div className="search-empty">
                  No pages match <em>“{q}”</em>.
                  <span className="search-suggestion">Try “security”, “ERP”, “contact”, “projects”.</span>
                </div>
              ) : (
                results.slice(0, 9).map((it, i) => (
                  <button
                    key={it.id}
                    type="button"
                    role="option"
                    aria-selected={i === highlight}
                    className={`search-result ${i === highlight ? 'is-hl' : ''}`}
                    onMouseEnter={() => setHighlight(i)}
                    onClick={() => go(it.path)}
                  >
                    <span className="sr-label">{it.label}</span>
                    <span className="sr-path">{it.path}</span>
                  </button>
                ))
              )}
            </div>

            <div className="search-footer">
              <span><b>↑↓</b> navigate</span>
              <span><b>↵</b> open</span>
              <span><b>esc</b> close</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}