import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import Reveal from '../../components/Reveal'
import CtaBand from '../../components/CtaBand'
import Unverified from '../../components/Unverified'
import { projects } from '../../data/site'
import '../Catalog.css'

export default function CaseStudies() {
  // Verified project records (border control has a published, verified outcome).
  const verified = projects.filter((p) => p.verified === true)

  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Insights', path: '/insights' }, { label: 'Case Studies' }]}
        eyebrow="Track Record"
        title="Structured write-ups of delivered work."
        lead="Case studies are only given here once a project outcome is confirmed against official sources."
      />
      <section className="block">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Published records</span>
            <h2 style={{ fontSize: 34 }}>Outcomes we can verify</h2>
            <p>The official record publishes the deepest verified account of our border control work (deployed in more than ten countries). That record sits behind a project detail page; a full narrative case study will follow when more is confirmed.</p>
          </Reveal>

          {verified.length > 0 ? (
            <div className="cat-grid reveal" style={{ gridTemplateColumns: '2fr' }}>
              {verified.map((p) => (
                <Link to={`/projects/${p.slug}`} className="cat-tile" key={p.slug}>
                  <div><h4>{p.title}</h4><p>{p.overview} — {p.status}.</p></div>
                  <span className="ct-foot"><span className="ct-tag">Verified record</span><span className="sc-link">Open →</span></span>
                </Link>
              ))}
            </div>
          ) : (
            <Reveal>
              <Unverified
                title="No verified case studies yet"
                body="Once project outcomes are confirmed against official sources, they'll appear here as structured, attributed case studies."
              />
            </Reveal>
          )}

          <Reveal style={{ marginTop: 32 }}>
            <Link to="/projects" className="btn btn-outline">Browse all project records →</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}