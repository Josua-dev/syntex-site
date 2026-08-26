import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import Unverified from '../components/Unverified'
import { vision, partners, identity } from '../data/site'
import './About.css'

const companyLinks = [
  { to: '/about/story', title: 'Our Story', text: 'How Syntex was incorporated in 2008 and grew in Windhoek.', verified: true },
  { to: '/about/vision-mission', title: 'Vision & Mission', text: 'Where the company is headed, and what it commits to.', verified: true },
  { to: '/about/values', title: 'Core Values', text: 'Innovation, accountability, and consistency.', verified: true },
]
const peopleLinks = [
  { to: '/about/leadership', title: 'Leadership', text: 'The people who lead Syntex.', verified: false },
  { to: '/about/departments', title: 'Departments', text: 'How the organisation is structured.', verified: false },
  { to: '/about/team', title: 'Our Team', text: 'An interactive team directory.', verified: false },
  { to: '/about/careers', title: 'Careers', text: 'Join the team.', verified: false },
]

export default function About() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'About' }]}
        eyebrow="About Syntex"
        title="A Namibian systems integrator, built since 2008."
        lead="We're a Windhoek-headquartered ICT company that has spent close to two decades solving the operational systems problems of government, utility, and enterprise clients."
      />

      <section className="about-lede">
        <div className="wrap about-lede-grid">
          <Reveal>
            <h2>Who we are</h2>
            <p>{identity.legal} is a Namibian ICT company incorporated in {identity.incorporated}, and a subsidiary of {identity.parent}. We excel at solving complex operational and systems challenges, and at providing solutions that genuinely fit each customer's needs, rather than off-the-shelf answers stretched to fit.</p>
            <p>Our project delivery is built around structured process: project management, change management, business process re-engineering, and knowledge transfer are run as part of every engagement, not offered as separate add-ons.</p>
          </Reveal>
          <Reveal>
            <h2>Where we work from</h2>
            <p>The company is headquartered in Klein Windhoek, at {identity.hq.line1}, with a team sized to stay close to every engagement rather than hand clients off to a call centre.</p>
            <p>That structure means the people who scope a project are generally the people accountable for its outcome, from the first ICT and security audit through to post-deployment support.</p>
          </Reveal>
        </div>

        <div className="wrap">
          <Reveal className="vision-panel">
            <span className="eyebrow">Vision</span>
            <p>{vision.text}</p>
          </Reveal>
        </div>
      </section>

      {/* Company + People architecture */}
      <section className="about-arch">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Explore</span>
            <h2>Dive deeper into Syntex</h2>
          </Reveal>

          <div className="arch-row">
            <div className="arch-col">
              <h3 className="arch-label">Company</h3>
              <div className="arch-grid">
                {companyLinks.map((l) => (
                  <Link to={l.to} className="link-tile" key={l.title}>
                    <div>
                      <h3>{l.title}</h3>
                      <p>{l.text}</p>
                    </div>
                    <span className="lt-footer"><span className="lt-tag">Company</span> View →</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="arch-col">
              <h3 className="arch-label">People</h3>
              <div className="arch-grid">
                {peopleLinks.map((l) => (
                  <Link to={l.to} className="link-tile" key={l.title}>
                    <div>
                      <h3>{l.title} {l.verified === false && <span className="note-flag" style={{ marginLeft: 8 }}>Soon</span>}</h3>
                      <p>{l.text}</p>
                    </div>
                    <span className="lt-footer"><span className="lt-tag">People</span> View →</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission focus (verified) */}
      <section className="mission-section">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Focus Areas</span>
            <h2>What we're built to deliver</h2>
            <p>Our specialties, as registered with our professional network.</p>
          </Reveal>
          <div className="mission-list reveal">
            <div className="mission-item"><span className="mnum">01</span><p><strong>Security Management Systems</strong> — access control, biometric systems, and border control management, including ICT and security audit.</p></div>
            <div className="mission-item"><span className="mnum">02</span><p><strong>Enterprise Resource Planning</strong> — unified systems for planning, monitoring, and decision-making across core business operations.</p></div>
            <div className="mission-item"><span className="mnum">03</span><p><strong>Business &amp; Technology Consulting</strong> — project management, change management, and business process re-engineering.</p></div>
            <div className="mission-item"><span className="mnum">04</span><p><strong>Hardware Supply &amp; Delivery</strong> — servers, laptops, desktops, and printers sourced from our technology partners and delivered to site.</p></div>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="capabilities" id="partners">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Capabilities</span>
            <h2>Technology partners behind our delivery</h2>
            <p>Our engineers hold certifications and partner status across the following platforms.</p>
          </Reveal>
          <div className="cap-grid reveal">
            {partners.map((p) => <div className="cap-item" key={p}>{p}</div>)}
          </div>
        </div>
      </section>

      <CtaBand heading="Want to work with the team behind these systems?" />
    </>
  )
}