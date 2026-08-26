import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { industries } from '../data/site'
import './Catalog.css'

export default function Industries() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Industries' }]}
        eyebrow="Industries"
        title="The sectors we operate in."
        lead="The environments and operations Syntex serves — from national border control to municipal utilities, financial services, and enterprise."
      />

      <section className="cat-lede">
        <div className="wrap">
          <Reveal className="section-head" style={{ marginBottom: 40 }}>
            <span className="eyebrow">Sector coverage</span>
            <h2 style={{ fontSize: 34 }}>Built for the operations that matter</h2>
            <p>Each sector maps to the solution areas we deliver, so you can see which capabilities apply to your environment at a glance.</p>
          </Reveal>
          <div className="cat-grid reveal" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {industries.map((ind) => (
              <Link to={`/industries/${ind.slug}`} className="cat-tile" key={ind.slug}>
                <div>
                  <h4>{ind.title}</h4>
                  <p>{ind.intro}</p>
                </div>
                <span className="ct-foot"><span className="ct-tag">Sector</span><span className="sc-link">Explore →</span></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cat-group">
        <div className="wrap">
          <Reveal className="cat-group-head">
            <h3>Beyond sectors</h3>
            <span className="cg-count">01</span>
          </Reveal>
          <div className="cat-grid reveal" style={{ gridTemplateColumns: '1fr' }}>
            <Link to="/global" className="cat-tile">
              <div>
                <h4>Global Reach</h4>
                <p>Border control technology deployed in more than ten countries — a view of Syntex beyond Namibia.</p>
              </div>
              <span className="ct-foot"><span className="ct-tag">Coverage</span><span className="sc-link">Explore →</span></span>
            </Link>
          </div>
        </div>
      </section>
      <CtaBand heading="Want to see how we serve your industry?" />
    </>
  )
}