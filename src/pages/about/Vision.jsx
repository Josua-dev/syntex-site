import PageHeader from '../../components/PageHeader'
import Reveal from '../../components/Reveal'
import CtaBand from '../../components/CtaBand'
import { vision } from '../../data/site'

export default function Vision() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'About', path: '/about' }, { label: 'Vision & Mission' }]}
        eyebrow="Vision & Mission"
        title="The direction we measure ourselves against."
        lead="Syntex's stated vision and the operating principles that commit us to it."
      />
      <section className="about-lede">
        <div className="wrap">
          <Reveal className="vision-panel">
            <span className="eyebrow">Vision</span>
            <p>{vision.text}</p>
          </Reveal>
        </div>
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Operating Principles</span>
            <h2>What our vision commits us to</h2>
            <p>These three principles sit at the centre of Syntex's own stated vision, and shape how every engagement is scoped, staffed, and delivered.</p>
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
      <CtaBand />
    </>
  )
}