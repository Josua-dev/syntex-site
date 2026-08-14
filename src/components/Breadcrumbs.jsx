import { Link } from 'react-router-dom'
import { ArrowIcon } from './BrandMark'
import Reveal from './Reveal'

// Accessible breadcrumb:  Home / Crumb / Current
export default function Breadcrumbs({ items }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <Link to="/">Home</Link>
      {items.map((it, i) => {
        const last = i === items.length - 1
        return (
          <span key={it.label}>
            <span className="sep">/</span>
            {it.path && !last ? (
              <Link to={it.path}>{it.label}</Link>
            ) : (
              <span aria-current={last ? 'page' : undefined}>{it.label}</span>
            )}
          </span>
        )
      })}
    </nav>
  )
}