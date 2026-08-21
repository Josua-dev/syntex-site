import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { MotionConfig } from 'framer-motion'
import App from './App'
import './styles/global.css'

// Respect reduced-motion at the document level.
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('no-motion')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* reducedMotion="user" makes every Framer Motion animation in the tree
        (mega nav, mobile menu, page transitions, search modal, hero photo zoom)
        collapse to opacity-only crossfades when the OS asks for reduced motion.
        The .no-motion class above only ever covered scroll-behavior — it never
        touched these JS-driven animations, so this was previously not respected. */}
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MotionConfig>
  </React.StrictMode>
)