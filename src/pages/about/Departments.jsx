import PageHeader from '../../components/PageHeader'
import Reveal from '../../components/Reveal'
import CtaBand from '../../components/CtaBand'
import Unverified from '../../components/Unverified'

export default function Departments() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'About', path: '/about' }, { label: 'Departments' }]}
        eyebrow="Departments"
        title="How the organisation is structured."
        lead="Department details are not yet publicly published on the official site."
      />
      <section className="block">
        <div className="wrap">
          <Reveal>
            <Unverified
              title="Department structure"
              body="Syntex's official site does not yet publish a department-by-department breakdown of its team. Rather than inventing internal structures, this page will present verified department information — responsibilities, related services, and related projects — once it is available from official sources."
            />
          </Reveal>

          <Reveal className="section-head" style={{ marginTop: 72 }}>
            <span className="eyebrow">Capability Areas</span>
            <h2>Disciplines already visible in the public record</h2>
            <p>These are the delivery disciplines the official site describes, not an internal org chart.</p>
          </Reveal>
          <div className="arch-grid reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              'Security Management Systems',
              'Enterprise Resource Planning',
              'HR & Payroll',
              'Utility & Billing',
              'Business & Technology Consulting',
              'Hardware Supply & Delivery',
            ].map((d) => (
              <div className="link-tile" key={d}>
                <div><h3>{d}</h3><p>One of the six core solution areas Syntex delivers, per its official record.</p></div>
                <span className="lt-footer"><span className="lt-tag">Capability</span></span>
              </div>
            ))}
          </div>
          <Reveal style={{ marginTop: 32 }}>
            <a href="/services" className="btn btn-outline">View all services →</a>
          </Reveal>
        </div>
      </section>
    </>
  )
}