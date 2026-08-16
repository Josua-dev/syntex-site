import { motion } from 'framer-motion'
import './PhotoBg.css'

// Full-bleed photo background with a subtle zoom-in effect.
// Place this as the first child inside any dark section — it sits
// behind content via z-index:-1.
export default function PhotoBg({ src = '/img/syntex_front.jpg', overlay = 0.58, className = '' }) {
  return (
    <div className={`photobg ${className}`} aria-hidden="true">
      <motion.img
        src={src}
        alt=""
        className="photobg-img"
        initial={{ scale: 1 }}
        animate={{ scale: 1.12 }}
        transition={{ duration: 8, ease: [0.22, 0.61, 0.36, 1] }}
      />
      <div className="photobg-overlay" style={{ opacity: overlay }} />
    </div>
  )
}
