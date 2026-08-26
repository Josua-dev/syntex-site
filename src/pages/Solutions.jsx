import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import { solutions } from '../data/site'
import './Catalog.css'

const LENSES = ['By Capability', 'By Function']
const byLens = (lens) => solutions.filter((s) => s.lens === lens)

export default function Solutions() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Solutions' }]}
        eyebrow="Solutions"
        title="Problems we solve, by capability and by function."
        lead="Cross-cutting views over our service areas — the operational and technical problems Syntex is built to solve, whatever industry you work in."
      />

      <section className="cat-lede">
        <div className="wrap">
          <Reveal className="section-head" style={{ marginBottom: 40 }}>
            <span className="eyebrow">Read the map</span>
            <h2 style={{ fontSize: 34 }}>Pick a lens, then a problem</h2>
            <p>Each solution groups the verified service areas that together deliver a business or technical outcome. Choose by capability — what technology does the job — or by function — what operation it powers.</p>
          </Reveal>
        </div>
      </section>

      {LENSES.map((lens) => {
        const items = byLens(lens)
        return (
          <section className="cat-group" key={lens}>
            <div className="wrap">
              <Reveal className="cat-group-head">
                <h3>{lens}</h3>
                <span className="cg-count">{String(items.length).padStart(2, '0')}</span>
              </Reveal>
              <div className="cat-grid reveal" style={{ gridTemplateColumns: `repeat(${Math.max(2, items.length)}, 1fr)` }}>
                {items.map((s) => (
                  <Link to={`/solutions/${s.slug}`} className="cat-tile" key={s.slug}>
                    <div>
                      <h4>{s.title}</h4>
                      <p>{s.intro}</p>
                    </div>
                    <span className="ct-foot"><span className="ct-tag">Solution</span><span className="sc-link">Explore →</span></span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )
      })}
      <CtaBand heading="Not sure which lens fits your problem? Talk to us." />
    </>
  )
}