import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import Reveal from '../../components/Reveal'
import CtaBand from '../../components/CtaBand'
import Unverified from '../../components/Unverified'
import '../Catalog.css'

export default function Resources() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Insights', path: '/insights' }, { label: 'Resources' }]}
        eyebrow="Library"
        title="Reference material from Syntex."
        lead="Guides and reference material drawn from the verified public record — kept honest until more is published."
      />
      <section className="block">
        <div className="wrap">
          <Reveal>
            <Unverified
              title="Resource library"
              body="No standalone resources have been published in the verified source set yet. This channel is part of the information architecture and will carry guides, datasheets, and reference material once they're confirmed against official sources."
            />
          </Reveal>
          <Reveal style={{ marginTop: 28 }}>
            <div className="rl-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
              <Link to="/insights/approach" className="cat-tile">
                <div><h4>Read our approach instead</h4><p>A verified account of how Syntex scopes and delivers systems.</p></div>
                <span className="ct-foot"><span className="ct-tag">Perspective</span><span className="sc-link">Open →</span></span>
              </Link>
              <Link to="/hardware" className="cat-tile">
                <div><h4>Hardware product lines</h4><p>Verified partner brands we supply and support.</p></div>
                <span className="ct-foot"><span className="ct-tag">Hardware</span><span className="sc-link">View →</span></span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}