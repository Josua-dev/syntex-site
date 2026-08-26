import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { serviceAreas, process } from '../data/site'
import './Catalog.css'

// Group verified services by their category, preserving a stable display order.
const ORDER = ['Security', 'Enterprise Systems', 'Utility & Billing', 'Consulting']
const byCategory = (cat) => serviceAreas.filter((s) => s.category === cat)

export default function Services() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Services' }]}
        eyebrow="Solutions & Services"
        title="What Syntex does."
        lead="Technology solutions, each designed to transform complex business operations — from national border security to enterprise planning, HR & payroll, and utility billing."
      />

      <section className="cat-lede">
        <div className="wrap cat-lede-grid">
          <Reveal>
            <h2>Six solution areas, one disciplined process</h2>
            <p>Every engagement concentrates on solutions that genuinely fit the customer's needs rather than off-the-shelf answers stretched to fit. We design for the client's actual constraints and infrastructure before we build.</p>
          </Reveal>
          <Reveal>
            <h2>Built to last past go-live</h2>
            <p>Delivery is underpinned by structured project and change management, business process re-engineering, and knowledge transfer — so your team can operate the system independently once it is live.</p>
          </Reveal>
        </div>
      </section>

      {ORDER.map((cat, ci) => {
        const items = byCategory(cat)
        if (!items.length) return null
        return (
          <section className="cat-group" key={cat}>
            <div className="wrap">
              <Reveal className="cat-group-head">
                <h3>{cat}</h3>
                <span className="cg-count">{String(items.length).padStart(2, '0')}</span>
              </Reveal>
              <div className="cat-grid reveal">
                {items.map((s) => (
                  <Link to={s.url} className="cat-tile" key={s.slug}>
                    <div>
                      <h4>{s.title}</h4>
                      <p>{s.intro}</p>
                    </div>
                    <span className="ct-foot"><span className="ct-tag">Service</span><span className="sc-link">Explore →</span></span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )
      })}

      {/* Delivery process (verified) */}
      <section className="block-dim" style={{ padding: '84px 0' }}>
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">How we deliver</span>
            <h2>A five-stage process, end to end</h2>
            <p>From the first audit through to knowledge transfer, every deployment shares the same discipline.</p>
          </Reveal>
          <div className="mission-list reveal" style={{ gridTemplateColumns: 'repeat(5,1fr)', display: 'grid' }}>
            {process.map((p) => (
              <div className="mission-item" key={p.n} style={{ flexDirection: 'column', gap: 12 }}>
                <span className="mnum">{p.n}</span>
                <p><strong>{p.title}</strong><br /><span style={{ fontSize: 13 }}>{p.text}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand heading="Need a specific system built for your operation?" />
    </>
  )
}