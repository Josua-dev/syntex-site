import { useParams, Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import Unverified from '../components/Unverified'
import { serviceAreas } from '../data/site'
import './Catalog.css'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = serviceAreas.find((s) => s.slug === slug)

  if (!service) {
    return (
      <>
        <PageHeader
          crumbs={[{ label: 'Services', path: '/services' }, { label: 'Service' }]}
          eyebrow="Service"
          title="This service page is part of the information architecture."
          lead="This URL is linked from the navigation but doesn't yet resolve to a verified service entry."
        />
        <section className="block">
          <div className="wrap">
            <Reveal>
              <Unverified
                title={`Service — "${slug}"`}
                body="This URL is part of the information architecture and will be wired to full content once confirmed against official sources. No content has been fabricated in the meantime."
              />
            </Reveal>
            <Reveal style={{ marginTop: 28 }}>
              <Link to="/services" className="btn btn-outline">Browse all services →</Link>
            </Reveal>
          </div>
        </section>
      </>
    )
  }

  const related = serviceAreas.filter(
    (s) => s.category === service.category && s.slug !== service.slug
  )

  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Services', path: '/services' }, { label: service.category }, { label: service.title }]}
        eyebrow={service.category}
        title={service.title}
        lead={service.intro}
      />
      <section className="detail-lede">
        <div className="wrap detail-lede-grid">
          <Reveal>
            <p className="lead-p">{service.intro}</p>
            <p className="dl">{service.body}</p>
            <p className="dl">Delivered as part of a wider engagement — scoped, built, and supported by the same accountable team, and procured from our technology partners where hardware is involved.</p>
          </Reveal>
          <Reveal>
            <div className="detail-meta">
              <div className="dm-label">Keywords / coverage</div>
              <ul>
                {service.keywords.map((k) => <li key={k}>{k}</li>)}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="detail-band">
          <div className="wrap">
            <Reveal>
              <span className="detail-sub">Related in {service.category}</span>
            </Reveal>
            <div className="rl-grid reveal">
              {related.map((r) => (
                <Link to={r.url} className="cat-tile" key={r.slug}>
                  <div><h4>{r.title}</h4><p>{r.intro}</p></div>
                  <span className="ct-foot"><span className="ct-tag">Service</span><span className="sc-link">Explore →</span></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      <CtaBand heading={`Want to scope a ${service.category.toLowerCase()} deployment like this?`} />
    </>
  )
}