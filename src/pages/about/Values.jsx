import PageHeader from '../../components/PageHeader'
import Reveal from '../../components/Reveal'
import CtaBand from '../../components/CtaBand'
import { vision } from '../../data/site'

export default function Values() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'About', path: '/about' }, { label: 'Core Values' }]}
        eyebrow="Core Values"
        title="The standards we build every system around."
        lead="Innovation, accountability, and consistency — applied to every engagement, at any scale."
      />
      <section className="about-lede">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Operating Principles</span>
            <h2>What our vision commits us to</h2>
          </Reveal>
          <div className="values-full-grid reveal">
            {vision.values.map((v) => (
              <div className="value-card" key={v.n}>
                <span className="vnum">{v.n}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand heading="See these values in action." secondary={{ to: '/projects', label: 'View Our Projects' }} />
    </>
  )
}