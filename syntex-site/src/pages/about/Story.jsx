import PageHeader from '../../components/PageHeader'
import Reveal from '../../components/Reveal'
import CtaBand from '../../components/CtaBand'
import { identity } from '../../data/site'

export default function Story() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'About', path: '/about' }, { label: 'Our Story' }]}
        eyebrow="Our Story"
        title="Built in Namibia, since 2008."
        lead={`The journey of ${identity.legal}, from incorporation to a systems integrator trusted by government and enterprise clients.`}
      />
      <section className="about-lede">
        <div className="wrap about-lede-grid">
          <Reveal>
            <h2>Incorporated in {identity.incorporated}</h2>
            <p>{identity.legal} was incorporated in Namibia in {identity.incorporated}. As a subsidiary of {identity.parent}, the company set out to solve complex operational and systems challenges — concentrating on solutions that genuinely fit each customer's needs rather than off-the-shelf answers stretched to fit.</p>
            <p>The company grew around a handful of disciplines: security management systems, enterprise resource planning, business and technology consulting, and hardware supply.</p>
          </Reveal>
          <Reveal>
            <h2>Headquartered in Klein Windhoek</h2>
            <p>The company is headquartered at {identity.hq.line1}, {identity.hq.line2}, {identity.hq.line3}. From here it delivers systems across Namibia and, through its border control technology, deployments that span more than ten countries.</p>
          </Reveal>
        </div>
      </section>
      <CtaBand heading="Want to know more about how we work?" secondary={{ to: '/about', label: 'More About Syntex' }} />
    </>
  )
}