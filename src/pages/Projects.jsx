import { useSearchParams, Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import Unverified from '../components/Unverified'
import { projects } from '../data/site'
import './Catalog.css'

const CATS = [
  { key: '', label: 'All' },
  { key: 'security', label: 'Security' },
  { key: 'enterprise', label: 'Enterprise Systems' },
  { key: 'utility', label: 'Utility' },
  { key: 'government', label: 'Government' },
  { key: 'consulting', label: 'Consulting' },
]

// Match a project to a category key (name match on category/industry slug).
const matches = (p, key) => {
  if (!key) return true
  return p.category.toLowerCase().includes(key) || (p.industry && p.industry.includes(key)) || p.meta.join(' ').toLowerCase().includes(key)
}

export default function Projects() {
  const [params, setParams] = useSearchParams()
  const active = params.get('cat') || ''

  const list = active ? projects.filter((p) => matches(p, active)) : projects

  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Projects' }]}
        eyebrow="Projects & Track Record"
        title="A selection of what our teams have delivered."
        lead="Solution categories our delivery teams have taken into production — border control, access control, utility billing, ERP, HR & payroll, and ICT audit."
      />

      {/* Honesty note: no named clients invented */}
      <section className="cat-lede">
        <div className="wrap">
          <Reveal className="unverified-panel" style={{ marginBottom: 8 }}>
            <span className="note-flag">About this record</span>
            <h3 className="uv-title" style={{ fontSize: 16 }}>Clients are described, never named</h3>
            <p>The official public record credits specific deployments (such as border control in 10+ countries) but does not name or list individual clients. This record reflects that honestly — sectors and delivery categories are shown, client identities are not.</p>
          </Reveal>
        </div>
      </section>

      {/* Category filter (mirrors mega-nav ?cat= links) */}
      <section className="cat-group" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <Reveal className="cat-group-head">
            <h3>Browse by category</h3>
            <div className="filter-chips" style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {CATS.map((c) => (
                <button
                  key={c.key}
                  className={`brand-chip${active === c.key ? ' is-active' : ''}`}
                  style={active === c.key ? { borderColor: 'var(--signal)', color: 'var(--signal-deep)', background: 'var(--signal-tint)' } : {}}
                  onClick={() => (c.key ? setParams({ cat: c.key }) : setParams({}))}
                >
                  {c.label}
                </button>
              ))}
            </div>
          </Reveal>

          {list.length === 0 ? (
            <Reveal>
              <Unverified
                title="No verified projects in this category yet"
                body={`No published project record matches "${active}" at the moment. Every category in the navigation links here, but the underlying content is only shown once it's confirmed against official sources.`}
              />
            </Reveal>
          ) : (
            <div className="cat-grid reveal" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              {list.map((p) => (
                <Link to={`/projects/${p.slug}`} className="cat-tile" key={p.slug}>
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.overview}</p>
                    <p style={{ fontSize: 12.5, color: 'var(--ink-faint)' }}>{p.meta.join(' · ')}</p>
                  </div>
                  <span className="ct-foot">
                    <span className="ct-tag">{p.status}</span>
                    {p.verified === false && <span className="note-flag" style={{ fontSize: 9 }}>Draft</span>}
                    {p.verified === true && <span className="checkmark" style={{ fontSize: 9, color: 'var(--signal)' }}>✓</span>}
                    <span className="sc-link">View →</span>
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      <CtaBand heading="Have a project in mind that's not listed here?" />
    </>
  )
}