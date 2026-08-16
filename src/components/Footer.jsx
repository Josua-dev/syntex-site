import { Link } from 'react-router-dom'
import { identity } from '../data/site'
import { nav } from '../data/nav'
import PhotoBg from './PhotoBg'
import './Footer.css'

export default function Footer() {
  const year = 2026
  return (
    <footer>
      <PhotoBg overlay={0.9} />
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <a href="/" className="brand on-dark">
              <img src="/img/syntex-logo.png" alt="Syntex Technologies (Pty) Ltd" className="brand-logo" />
            </a>
            <p>
              {identity.legal}, a Namibian ICT company incorporated in {identity.incorporated},
              delivering enterprise technology solutions from {identity.region}, {identity.country}.
            </p>
          </div>

          <div className="foot-col">
            <h5>Company</h5>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/insights/approach">Our Approach</Link></li>
              <li><Link to="/about">Partners</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="foot-col">
            <h5>Explore</h5>
            <ul>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/solutions">Solutions</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/industries">Industries</Link></li>
              <li><Link to="/hardware">Hardware</Link></li>
            </ul>
          </div>

          <div className="foot-col">
            <h5>Contact</h5>
            <ul>
              <li><a href={`mailto:${identity.emailSales}`}>{identity.emailSales}</a></li>
              <li><a href={`tel:${identity.phoneHref}`}>{identity.phone}</a></li>
              <li><a href="/contact#locations">{identity.hq.line1}, {identity.hq.line2}</a></li>
            </ul>
          </div>
        </div>

        <div className="foot-sitemap" aria-label="Site map">
          {nav.map((top) => (
            <div className="fs-col" key={top.label}>
              <Link to={top.path === '/home' ? '/' : top.path} className="fs-title">{top.label}</Link>
              {top.groups.map((g) => (
                <span className="fs-group" key={g.title}>
                  {g.title}
                  {g.items.slice(0, 4).map((it) => (
                    <Link key={it.label} to={it.path} className="fs-link">{it.label}</Link>
                  ))}
                </span>
              ))}
            </div>
          ))}
        </div>

        <div className="foot-bottom">
          <span>© {year} {identity.legal} · A subsidiary of {identity.parent}. All rights reserved.</span>
          <span>{identity.region}, {identity.country}</span>
        </div>
      </div>
    </footer>
  )
}