import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { hardware, partners } from '../data/site'
import './Catalog.css'

export default function Hardware() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Hardware' }]}
        eyebrow="Hardware Supply"
        title="Enterprise hardware, procured and delivered."
        lead={hardware.intro}
      />
      <section className="cat-lede">
        <div className="wrap">
          <Reveal className="section-head" style={{ marginBottom: 40 }}>
            <span className="eyebrow">Product lines</span>
            <h2 style={{ fontSize: 34 }}>Specified against the workload, not a catalogue</h2>
            <p>Hardware is sourced from our technology partners and specified for the system it's actually being deployed to support — sized, delivered, and installed as part of the wider engagement.</p>
          </Reveal>
        </div>
      </section>

      {hardware.categories.map((c) => (
        <section className="cat-group" id={c.slug} key={c.slug} style={{ scrollMarginTop: 90 }}>
          <div className="wrap">
            <Reveal className="cat-group-head">
              <h3>{c.title}</h3>
              <span className="cg-count">Product line</span>
            </Reveal>
            <Reveal className="cat-tile" style={{ maxWidth: 'none' }}>
              <div><p style={{ fontSize: 15, lineHeight: 1.7, flex: 'none', marginBottom: 18 }}>{c.note}</p></div>
              <div className="brand-chips" style={{ marginTop: 2 }}>
                {c.brands.map((b) => <span className="brand-chip" key={b}>{b}</span>)}
              </div>
            </Reveal>
          </div>
        </section>
      ))}

      <section className="detail-band" id="brands" style={{ scrollMarginTop: 90 }}>
        <div className="wrap">
          <Reveal><span className="detail-sub">Partner brands we supply &amp; support</span></Reveal>
          <Reveal className="mission-list" style={{ gridTemplateColumns: 'repeat(3, 1fr)', display: 'grid' }}>
            {partners.map((p) => (
              <div className="mission-item" key={p} style={{ justifyContent: 'center', textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--f-display)', fontWeight: 600, fontSize: 15, color: 'var(--blueprint)' }}>{p}</p>
              </div>
            ))}
          </Reveal>
          <Reveal style={{ marginTop: 16 }}>
            <span className="note-flag" style={{ textTransform: 'none', letterSpacing: 0 }}>Whitelist note: hardware brands shown reflect the partners listed on Syntex's official site; availability is confirmed at quotation.</span>
          </Reveal>
        </div>
      </section>

      <section className="detail-band">
        <div className="wrap">
          <div className="rl-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <Link to="/services/business-technology-consulting" className="cat-tile">
              <div><h4>Keep hardware in step with software</h4><p>Hardware supply is coordinated with the software rollout so servers, workstations, and print hardware arrive ready for the system being deployed.</p></div>
              <span className="ct-foot"><span className="ct-tag">Services</span><span className="sc-link">Find out more →</span></span>
            </Link>
            <Link to="/services" className="cat-tile">
              <div><h4>All solution areas</h4><p>Hardware is one of Syntex's six core solution areas — the others cover software, security, and consulting.</p></div>
              <span className="ct-foot"><span className="ct-tag">Services</span><span className="sc-link">View all services →</span></span>
            </Link>
          </div>
        </div>
      </section>
      <CtaBand heading="Need hardware specified and delivered with your system?" />
    </>
  )
}