import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { ArrowIcon } from './BrandMark'
import PhotoBg from './PhotoBg'

export default function CtaBand({ heading = 'Have a systems problem to solve?', primary = '/contact', primaryLabel = 'Talk to Our Team', secondary = null }) {
  return (
    <section className="cta-band">
      <div className="wrap">
        <Reveal className="cta-panel">
          <PhotoBg overlay={0.66} />
          <h2>{heading}</h2>
          <div className="cta-actions">
            <Link to={primary} className="btn btn-signal">
              {primaryLabel}
              <ArrowIcon />
            </Link>
            {secondary && (
              <Link to={secondary.to} className="btn btn-ghost-light">
                {secondary.label}
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}