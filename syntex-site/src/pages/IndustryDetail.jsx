import { useParams, Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import Unverified from '../components/Unverified'
import { industries, serviceAreas, projects } from '../data/site'
import './Catalog.css'

export default function IndustryDetail() {
  const { slug } = useParams()
  const industry = industries.find((i) => i.slug === slug)

  if (!industry) {
    return (
      <>
        <PageHeader
          crumbs={[{ label: 'Industries', path: '/industries' }, { label: 'Sector' }]}
          eyebrow="Sector"
          title="This sector page is still being drafted."
          lead="The sector you followed isn't in the verified content set yet."
        />
        <section className="block">
          <div className="wrap">
            <Reveal>
              <Unverified
                title={`Sector draft — "${slug}"`}
                body="This URL is part of the navigation's information architecture, but doesn't yet resolve to a verified sector entry. It will be wired to full content once confirmed against official sources."
              />
            </Reveal>
            <Reveal style={{ marginTop: 28 }}>
              <Link to="/industries" className="btn btn-outline">Browse all sectors →</Link>
            </Reveal>
          </div>
        </section>
      </>
    )
  }

  // Services relevant to this sector: those whose delivery notes reference it,
  // falling back to the sector's "short" name match.
  const relevant = serviceAreas.filter((s) => s.keywords.some((k) => industry.note.toLowerCase().includes(k)) || s.category.toLowerCase().includes('consulting'))
  const sectorProjects = projects.filter((p) => p.industry === industry.slug)

  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Industries', path: '/industries' }, { label: industry.short }]}
        eyebrow={`Sector — ${industry.short}`}
        title={industry.title}
        lead={industry.intro}
      />
      <section className="detail-lede">
        <div className="wrap detail-lede-grid">
          <Reveal>
            <p className="lead-p">{industry.intro}</p>
            <p className="dl">{industry.note}</p>
            <p className="dl">Syntex concentrates on solutions that genuinely fit each environment's constraints. For this sector, that means the solution areas described below, scoped and delivered by the same accountable team.</p>
          </Reveal>
          <Reveal>
            <div className="detail-meta">
              <div className="dm-label">Sector profile</div>
              <ul>
                <li>{industry.short}</li>
                <li>Delivered under Syntex's six core solution areas</li>
                <li>Scoped around the sector's actual infrastructure &amp; constraints</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {relevant.length > 0 && (
        <section className="detail-band">
          <div className="wrap">
            <Reveal><span className="detail-sub">Solution areas for this sector</span></Reveal>
            <div className="rl-grid reveal">
              {relevant.map((s) => (
                <Link to={s.url} className="cat-tile" key={s.slug}>
                  <div><h4>{s.title}</h4><p>{s.intro}</p></div>
                  <span className="ct-foot"><span className="ct-tag">Service</span><span className="sc-link">Explore →</span></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {sectorProjects.length > 0 && (
        <section className="detail-band">
          <div className="wrap">
            <Reveal><span className="detail-sub">Delivery record in this sector</span></Reveal>
            <div className="rl-grid reveal">
              {sectorProjects.map((p) => (
                <Link to={`/projects/${p.slug}`} className="cat-tile" key={p.slug}>
                  <div><h4>{p.title}</h4><p>{p.overview}</p></div>
                  <span className="ct-foot"><span className="ct-tag">{p.status}</span><span className="sc-link">View →</span></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <CtaBand heading={`Planning a project in ${industry.short.toLowerCase()}?`} />
    </>
  )
}