import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import Reveal from '../../components/Reveal'
import CtaBand from '../../components/CtaBand'
import { process, vision } from '../../data/site'
import '../Catalog.css'

export default function Approach() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Insights', path: '/insights' }, { label: 'Approach' }]}
        eyebrow="Perspective"
        title="How we think about systems."
        lead="The process and principles that shape every engagement — grounded in Syntex's stated vision and delivery discipline."
      />

      <section className="detail-lede">
        <div className="wrap detail-lede-grid">
          <Reveal>
            <p className="lead-p">Solutions matched to the problem, not stretched to fit.</p>
            <p className="dl">Syntex's own language is consistent: concentrate on solutions that genuinely fit each customer's needs, rather than off-the-shelf answers stretched to fit. That starting point drives the whole approach — design around the client's actual constraints and infrastructure.</p>
            <p className="dl">This is supported by a three-part operating standard — innovation, accountability, and consistency — applied whether the engagement is a single hardware order or a multi-year systems rollout.</p>
          </Reveal>
          <Reveal>
            <div className="detail-meta" style={{ background: 'var(--blueprint)', borderColor: 'var(--blueprint)', color: 'var(--paper)' }}>
              <div className="dm-label" style={{ color: 'var(--signal)' }}>Our vision</div>
              <p style={{ fontFamily: 'var(--f-display)', fontSize: 17, lineHeight: 1.5, margin: 0 }}>{vision.text}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="block-dim" style={{ padding: '84px 0' }}>
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">The delivery process</span>
            <h2>Five stages, run in sequence</h2>
            <p>From the first audit to knowledge transfer, delivery follows a defined, repeatable path.</p>
          </Reveal>
          <div className="mission-list reveal" style={{ display: 'grid' }}>
            {process.map((p) => (
              <div className="mission-item" key={p.n} style={{ flexDirection: 'column', gap: 10 }}>
                <span className="mnum">{p.n}</span>
                <p><strong style={{ fontSize: 16 }}>{p.title}</strong><br /><span>{p.text}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="detail-band" style={{ paddingTop: 70 }}>
        <div className="wrap">
          <div className="rl-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <Link to="/about/values" className="cat-tile">
              <div><h4>Core Values</h4><p>Innovation, accountability, and consistency — the principles behind this approach.</p></div>
              <span className="ct-foot"><span className="ct-tag">About</span><span className="sc-link">Read →</span></span>
            </Link>
            <Link to="/services" className="cat-tile">
              <div><h4>The services</h4><p>How this process is applied across security, enterprise, utility, and consulting delivery.</p></div>
              <span className="ct-foot"><span className="ct-tag">Services</span><span className="sc-link">View →</span></span>
            </Link>
          </div>
        </div>
      </section>
      <CtaBand heading="This is how we'd run your project too." />
    </>
  )
}