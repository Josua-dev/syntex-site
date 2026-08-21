import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import Unverified from '../components/Unverified'
import { identity } from '../data/site'
import './Catalog.css'

export default function Global() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Industries', path: '/industries' }, { label: 'Global Reach' }]}
        eyebrow="Coverage"
        title="Beyond one country's borders."
        lead="Syntex is headquartered in Windhoek, Namibia — and its border control technology has been deployed across national borders in more than ten countries."
      />

      <section className="detail-lede">
        <div className="wrap detail-lede-grid">
          <Reveal>
            <p className="lead-p">Headquartered in {identity.region}, serving Southern Africa.</p>
            <p className="dl">Syntex's base is Klein Windhoek, Windhoek — {identity.region} region, Namibia. Its vision is to be a trusted provider of technology solutions across Southern Africa, and its capability extends beyond national borders against that ambition.</p>
          </Reveal>
          <Reveal>
            <div className="detail-meta">
              <div className="dm-label">Verified global footprint</div>
              <ul>
                <li>Border control deployed in 10+ countries</li>
                <li>Headquarters — Windhoek, Namibia</li>
                <li>Vision — trusted across Southern Africa</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="detail-band">
        <div className="wrap">
          <Reveal><span className="detail-sub">Related sectors &amp; work</span></Reveal>
          <div className="rl-grid reveal">
            <Link to="/industries/government" className="cat-tile">
              <div><h4>Government &amp; Border Control</h4><p>The sector that carries Syntex's international deployments.</p></div>
              <span className="ct-foot"><span className="ct-tag">Sector</span><span className="sc-link">Explore →</span></span>
            </Link>
            <Link to="/projects/border-control-management" className="cat-tile">
              <div><h4>Border Control Management</h4><p>The verified 10+-country delivery record, shown in detail.</p></div>
              <span className="ct-foot"><span className="ct-tag">Project</span><span className="sc-link">Open →</span></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="detail-band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal>
            <Unverified
              title="Country-level detail"
              body="The official record confirms that border control deployments span more than ten countries, but does not list the individual countries. This page deliberately does not name or map specific countries, so nothing is claimed beyond what the public source verifies."
            />
          </Reveal>
        </div>
      </section>
      <CtaBand heading="Have an operation that spans borders?" />
    </>
  )
}