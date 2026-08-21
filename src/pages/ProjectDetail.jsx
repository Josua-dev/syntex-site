import { useParams, Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import Unverified from '../components/Unverified'
import { projects, serviceAreas } from '../data/site'
import './Catalog.css'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <>
        <PageHeader
          crumbs={[{ label: 'Projects', path: '/projects' }, { label: 'Project' }]}
          eyebrow="Project"
          title="This project record is still being drafted."
          lead="The project you followed isn't in the verified content set yet."
        />
        <section className="block">
          <div className="wrap">
            <Reveal>
              <Unverified
                title={`Project record — "${slug}"`}
                body="This URL is part of the projects information architecture, but doesn't yet hold a verified record. It will be filled from official sources when available — no client names or statistics have been invented."
              />
            </Reveal>
            <Reveal style={{ marginTop: 28 }}>
              <Link to="/projects" className="btn btn-outline">Back to all projects →</Link>
            </Reveal>
          </div>
        </section>
      </>
    )
  }

  const services = project.services.map((idx) => serviceAreas[idx]).filter(Boolean)

  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Projects', path: '/projects' }, { label: project.category }]}
        eyebrow="Project Record"
        title={project.title}
        lead={project.overview}
      />
      <section className="detail-lede">
        <div className="wrap detail-lede-grid">
          <Reveal>
            <p className="lead-p">{project.overview}</p>
            <p className="dl">{project.status} — {project.meta.join(', ')}.</p>
            <p className="dl">This record reflects how the deployment is documented in Syntex's public material: the delivery category and sector are shown, while client identities are kept anonymous. Any additional detail will be added only from verified sources.</p>
            {project.verified === false && (
              <span className="note-flag">Draft — outcomes not yet publicly confirmed</span>
            )}
          </Reveal>
          <Reveal>
            <div className="detail-meta">
              <div className="dm-label">Delivery record</div>
              <ul>
                <li>{project.status}</li>
                {project.meta.map((m) => <li key={m}>{m}</li>)}
                <li>Category: {project.category}</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {services.length > 0 && (
        <section className="detail-band">
          <div className="wrap">
            <Reveal><span className="detail-sub">Related service areas</span></Reveal>
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
      <CtaBand heading="Deliver a similar project with us?" />
    </>
  )
}