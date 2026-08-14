import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Resets scroll to top on every route change (respecting hash anchors).
export function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // wait a tick for the page to render
      const id = hash.slice(1)
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' })
      }, 120)
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  return null
}