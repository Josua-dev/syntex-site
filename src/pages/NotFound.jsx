import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import { ArrowIcon } from '../components/BrandMark'

export default function NotFound() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Not found' }]}
        eyebrow="404"
        title="This page isn't on the map."
        lead="The route you followed doesn't exist — or its content hasn't been added yet."
      />
      <section className="block">
        <div className="wrap">
          <Reveal className="vision-panel" style={{ background: 'var(--ink)', padding: '48px 40px' }}>
            <span className="eyebrow on-dark">You're off-grid</span>
            <h2 style={{ color: 'var(--paper)', fontSize: 'clamp(24px,3vw,32px)', fontWeight: 600, margin: '12px 0 18px' }}>Let's get you back to firm ground.</h2>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link to="/" className="btn btn-signal">Back to Home <ArrowIcon /></Link>
              <Link to="/services" className="btn btn-ghost-light">Browse Services</Link>
              <Link to="/contact" className="btn btn-ghost-light">Contact Us</Link>
            </div>
          </Reveal>
          <Reveal style={{ marginTop: 32 }}>
            <p style={{ color: 'var(--ink-soft)', fontSize: 14.5, maxWidth: 600, lineHeight: 1.7 }}>
              If you reached this via the site's own navigation, it may point at a page whose content is still being drafted under the no-fabrication rule — the destination exists in the information architecture, but its verified content isn't published yet. The design keeps honest placeholders until official material confirms what belongs there.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}