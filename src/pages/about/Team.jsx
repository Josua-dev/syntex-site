import PageHeader from '../../components/PageHeader'
import Reveal from '../../components/Reveal'
import CtaBand from '../../components/CtaBand'
import Unverified from '../../components/Unverified'

export default function Team() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'About', path: '/about' }, { label: 'Our Team' }]}
        eyebrow="Our Team"
        title="The people who deliver Syntex's systems."
        lead="Individual team profiles are not yet publicly published on the official site or official public sources."
      />
      <section className="block">
        <div className="wrap">
          <Reveal>
            <Unverified
              title="Team profiles"
              body="No names, titles, photos, or biographies have been invented here. When official Syntex sources publish team and leadership details, this page will present them — verified, and attributed to the source."
            />
          </Reveal>
          <Reveal style={{ marginTop: 36 }}>
            <div className="section-head" style={{ marginBottom: 24 }}>
              <span className="eyebrow">How we work</span>
              <h2 style={{ fontSize: 28 }}>A delivery model we can speak to honestly</h2>
            </div>
          </Reveal>
          <Reveal>
            <div className="arch-grid">
              {[
                { t: 'Integrated delivery teams', p: 'Security, ERP, HR & payroll, and utility engagements each pull in the hardware and consulting disciplines the official record lists as core services.' },
                { t: 'Local expertise', p: 'Syntex describes itself as a Namibian systems integrator, tying every implementation to on-the-ground regulatory and business context.' },
                { t: 'Partner ecosystem', p: 'Delivery rides on the technology partners the official site lists — the products and platforms behind each solution.' },
              ].map((x) => (
                <div className="link-tile" key={x.t}>
                  <div><h3>{x.t}</h3><p>{x.p}</p></div>
                  <span className="lt-footer"><span className="lt-tag">Operations</span></span>
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