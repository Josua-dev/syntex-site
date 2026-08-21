import PageHeader from '../../components/PageHeader'
import Reveal from '../../components/Reveal'
import CtaBand from '../../components/CtaBand'
import Unverified from '../../components/Unverified'

export default function Leadership() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'About', path: '/about' }, { label: 'Leadership' }]}
        eyebrow="Leadership"
        title="The people who lead Syntex."
        lead="Leadership profiles are not yet publicly published on the official site or official public sources."
      />
      <section className="block">
        <div className="wrap">
          <Reveal>
            <Unverified
              title="Leadership profiles"
              body="We will publish verified leadership information — names, positions, and official biographies — as soon as it appears in official Syntex sources. No names or profiles have been invented here, in line with the company's own public record."
            />
          </Reveal>
          <Reveal style={{ marginTop: 32 }}>
            <div className="link-tile" style={{ border: '1px solid var(--line)' }}>
              <div>
                <h3>Meanwhile, explore the organisation</h3>
                <p>The About hub links the four focus areas and values that already sit in Syntex's official record.</p>
              </div>
              <span className="lt-footer">
                <a href="/about" className="sc-link">Back to About →</a>
                <span className="lt-tag">Leadership</span>
              </span>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}