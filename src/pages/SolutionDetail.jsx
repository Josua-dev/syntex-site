import { useParams, Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import Unverified from '../components/Unverified'
import { solutions, serviceAreas } from '../data/site'
import './Catalog.css'

export default function SolutionDetail() {
  const { slug } = useParams()
  const solution = solutions.find((s) => s.slug === slug)

  if (!solution) {
    return (
      <>
        <PageHeader
          crumbs={[{ label: 'Solutions', path: '/solutions' }, { label: 'Solution' }]}
          eyebrow="Solution"
          title="This solution page is still being drafted."
          lead="The solution you followed isn't in the verified content set yet."
        />
        <section className="block">
          <div className="wrap">
            <Reveal>
              <Unverified
                title={`Solution draft — "${slug}"`}
                body="This URL is part of the navigation's information architecture, but doesn't yet resolve to a verified solution entry. It will be wired to full content once confirmed against official sources — nothing here has been invented."
              />
            </Reveal>
            <Reveal style={{ marginTop: 28 }}>
              <Link to="/solutions" className="btn btn-outline">Browse all solutions →</Link>
            </Reveal>
          </div>
        </section>
      </>
    )
  }

  // Pull the verified service areas this solution is built on.
  const services = serviceAreas.filter((s) => solution.services.includes(s.slug))

  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Solutions', path: '/solutions' }, { label: solution.title }]}
        eyebrow={`Solution — ${solution.lens}`}
        title={solution.title}
        lead={solution.intro}
      />
      <section className="detail-lede">
        <div className="wrap detail-lede-grid">
          <Reveal>
            <p className="lead-p">{solution.intro}</p>
            <p className="dl">{solution.body}</p>
            <p className="dl">This solution is delivered through the service areas shown alongside, each scoped, built, and supported by the same accountable team.</p>
            <Link to="/services" className="btn btn-primary">See the underlying services →</Link>
          </Reveal>
          <Reveal>
            <div className="detail-meta">
              <div className="dm-label">{solution.lens}</div>
              <ul>
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link to={s.url} style={{ color: 'inherit' }}>{s.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {services.length > 0 && (
        <section className="detail-band">
          <div className="wrap">
            <Reveal><span className="detail-sub">Service areas behind this solution</span></Reveal>
            <div className="rl-grid reveal">
              {services.map((s) => (
                <Link to={s.url} className="cat-tile" key={s.slug}>
                  <div><h4>{s.title}</h4><p>{s.intro}</p></div>
                  <span className="ct-foot"><span className="ct-tag">Service</span><span className="sc-link">Explore →</span></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <CtaBand heading={`Need a ${solution.title.toLowerCase()} solution scoped for your organisation?`} />
    </>
  )
}