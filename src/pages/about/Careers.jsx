import PageHeader from '../../components/PageHeader'
import Reveal from '../../components/Reveal'
import CtaBand from '../../components/CtaBand'
import Unverified from '../../components/Unverified'

export default function Careers() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'About', path: '/about' }, { label: 'Careers' }]}
        eyebrow="Careers"
        title="Build your career in systems integration."
        lead="Open roles are not yet published on the official site; this page will list verified vacancies as they become available."
      />
      <section className="block">
        <div className="wrap">
          <Reveal>
            <Unverified
              title="Career opportunities"
              body="We will not post openings that cannot be verified against official Syntex sources — email addresses, job titles, or salaries are never invented, in line with the effort's no-fabrication rule. When the official site lists roles, they will appear here with a link back to the source."
            />
          </Reveal>
          <Reveal style={{ marginTop: 36 }}>
            <div className="section-head" style={{ marginBottom: 24 }}>
              <span className="eyebrow">Getting in touch</span>
              <h2 style={{ fontSize: 28 }}>The official channels are live</h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="arch-grid">
              {[
                { t: 'General enquiries', p: 'The official contact details below are the correct route for any question about working with or joining Syntex.' },
                { t: 'Contact page', p: 'Phone and email for the company sit on the contact page and are kept verified against the official record.' },
              ].map((x) => (
                <div className="link-tile" key={x.t}>
                  <div><h3>{x.t}</h3><p>{x.p}</p></div>
                  <span className="lt-footer"><a href="/contact" className="sc-link">Go to Contact →</a><span className="lt-tag">Careers</span></span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal style={{ marginTop: 32 }}>
            <a href="/about" className="btn btn-outline">Back to About →</a>
          </Reveal>
        </div>
      </section>
    </>
  )
}