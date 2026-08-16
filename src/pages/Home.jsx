import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import PhotoBg from '../components/PhotoBg'
import { ArrowIcon } from '../components/BrandMark'
import { serviceAreas, partners, process, identity, vision } from '../data/site'
import './Home.css'

export default function Home() {
  return (
    <>
      <header className="hero" id="top">
        <PhotoBg overlay={0.86} />
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">Namibian ICT Systems Integrator · Est. {identity.incorporated}</span>
            <h1>We bring <span className="accent">clarity</span> to complex business systems.</h1>
            <p className="lead">
              Syntex Technologies designs, builds, and supports the security, enterprise, and utility
              systems that mid-market and government organisations across Namibia run on.
            </p>
            <div className="hero-actions">
              <Link to="/services" className="btn btn-outline">
                View Our Solutions <ArrowIcon />
              </Link>
              <Link to="/contact" className="btn btn-primary">
                Talk to Our Team <ArrowIcon />
              </Link>
            </div>
            <div className="hero-facts">
              <div className="fact"><b>{identity.incorporated}</b><span>Incorporated in Namibia</span></div>
              <div className="fact"><b>Windhoek</b><span>Klein Windhoek head office</span></div>
              <div className="fact"><b>6</b><span>Core solution categories</span></div>
              <div className="fact"><b>12+</b><span>Global technology partners</span></div>
            </div>
          </div>

          <div className="hero-diagram reveal" role="img" aria-label="Schematic diagram: Syntex at the centre of six connected solution areas — security, ERP, HR and payroll, utility billing, border control, and hardware supply">
            <svg viewBox="0 0 560 560" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <defs>
                <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
                  <path d="M 28 0 L 0 0 0 28" fill="none" stroke="rgba(244,245,240,.06)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="560" height="560" fill="url(#grid)" />
              <g stroke="#9E9991" strokeWidth="1.2" fill="none" opacity=".85">
                <path className="draw-path" d="M280 280 L280 120" style={{ animationDelay: '.05s' }} />
                <path className="draw-path" d="M280 280 L440 170" style={{ animationDelay: '.15s' }} />
                <path className="draw-path" d="M280 280 L470 320" style={{ animationDelay: '.25s' }} />
                <path className="draw-path" d="M280 280 L380 450" style={{ animationDelay: '.35s' }} />
                <path className="draw-path" d="M280 280 L170 450" style={{ animationDelay: '.45s' }} />
                <path className="draw-path" d="M280 280 L100 320" style={{ animationDelay: '.55s' }} />
                <path className="draw-path" d="M280 280 L120 170" style={{ animationDelay: '.65s' }} />
              </g>
              <g fontFamily="IBM Plex Mono, monospace" fontSize="11" fill="rgba(237,237,235,.82)">
                <g className="node-pulse" style={{ animationDelay: '.2s' }}>
                  <circle cx="280" cy="120" r="5" fill="#EDEDEB" />
                  <circle cx="280" cy="120" r="10" stroke="#9E9991" strokeWidth="1" fill="none" opacity=".5" />
                </g>
                <text x="280" y="98" textAnchor="middle">SECURITY</text>
                <g className="node-pulse" style={{ animationDelay: '.4s' }}>
                  <circle cx="440" cy="170" r="5" fill="#EDEDEB" />
                  <circle cx="440" cy="170" r="10" stroke="#9E9991" strokeWidth="1" fill="none" opacity=".5" />
                </g>
                <text x="461" y="164" textAnchor="start">ERP</text>
                <g className="node-pulse" style={{ animationDelay: '.6s' }}>
                  <circle cx="470" cy="320" r="5" fill="#EDEDEB" />
                  <circle cx="470" cy="320" r="10" stroke="#9E9991" strokeWidth="1" fill="none" opacity=".5" />
                </g>
                <text x="491" y="325" textAnchor="start">HR &amp; PAYROLL</text>
                <g className="node-pulse" style={{ animationDelay: '.8s' }}>
                  <circle cx="380" cy="450" r="5" fill="#EDEDEB" />
                  <circle cx="380" cy="450" r="10" stroke="#9E9991" strokeWidth="1" fill="none" opacity=".5" />
                </g>
                <text x="380" y="478" textAnchor="middle">UTILITY</text>
                <g className="node-pulse" style={{ animationDelay: '1s' }}>
                  <circle cx="170" cy="450" r="5" fill="#EDEDEB" />
                  <circle cx="170" cy="450" r="10" stroke="#9E9991" strokeWidth="1" fill="none" opacity=".5" />
                </g>
                <text x="170" y="478" textAnchor="middle">BORDER CONTROL</text>
                <g className="node-pulse" style={{ animationDelay: '1.2s' }}>
                  <circle cx="100" cy="320" r="5" fill="#EDEDEB" />
                  <circle cx="100" cy="320" r="10" stroke="#9E9991" strokeWidth="1" fill="none" opacity=".5" />
                </g>
                <text x="79" y="325" textAnchor="end">HARDWARE</text>
                <g className="node-pulse" style={{ animationDelay: '1.4s' }}>
                  <circle cx="120" cy="170" r="5" fill="#EDEDEB" />
                  <circle cx="120" cy="170" r="10" stroke="#9E9991" strokeWidth="1" fill="none" opacity=".5" />
                </g>
                <text x="99" y="164" textAnchor="end">CONSULTING</text>
              </g>
              <circle cx="280" cy="280" r="46" fill="#0F2436" stroke="#9E9991" strokeWidth="1.4" />
              <circle cx="280" cy="280" r="34" fill="none" stroke="rgba(237,237,235,.25)" strokeWidth="1" />
              <text x="280" y="284" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontSize="14" fontWeight="600" fill="#EDEDEB">SYNTEX</text>
            </svg>
            <div className="diagram-caption">
              <span>SYS-CLARITY.001</span>
              <span><b>6</b> integrated solution areas</span>
            </div>
          </div>
        </div>
      </header>

      <section className="sectors">
        <div className="wrap">
          <span className="label">Sectors We Serve</span>
          <ul className="sector-list">
            <li>Government &amp; Border Control</li>
            <li>Municipalities &amp; Utilities</li>
            <li>Financial Services</li>
            <li>Enterprise &amp; Mid-Market</li>
          </ul>
        </div>
      </section>

      <section className="values" id="values">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">How We Work</span>
            <h2>The standards we build every system around</h2>
            <p>{identity.legal} applies the same operating values to every engagement, regardless of client size or sector.</p>
          </Reveal>
          <div className="values-grid reveal">
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

      <section className="services">
        <div className="wrap services-inner">
          <Reveal className="section-head">
            <span className="eyebrow">What We Do</span>
            <h2>Solutions across the enterprise technology stack</h2>
            <p>A full range of products, services, and solutions designed for mid-market and large enterprise customers, tailored to their industry.</p>
          </Reveal>
          <div className="service-grid reveal">
            {serviceAreas.filter((s) => s.category !== 'Consulting').slice(0, 6).map((s) => (
              <div className="service-card" key={s.slug}>
                <span className="service-tag">{s.category}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <Link to={s.url} className="sc-link">View solution area →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process" id="process">
        <div className="wrap process-layout">
          <div className="process-copy reveal">
            <span className="eyebrow">Our Approach</span>
            <h2 style={{ fontSize: 'clamp(28px,3.4vw,38px)', fontWeight: 600, margin: '14px 0 20px', lineHeight: 1.12 }}>Solving complex systems problems with proven process</h2>
            <p>Syntex Technologies excels at solving complex business and systems problems using proven process and development skills, built on best practices and international standards.</p>
            <p>We offer complete end-to-end services and solutions, including project management, change management, business process re-engineering, and knowledge transfer.</p>
            <p className="quote">“We consistently demonstrate our ability to identify and deliver on the promise of the best technological solution.”</p>
            <Link to="/insights/approach" className="btn btn-outline" style={{ marginTop: 24 }}>Read the full approach <ArrowIcon /></Link>
          </div>
          <div className="steps reveal">
            {process.map((st) => (
              <div className="step" key={st.n}>
                <span className="snum">{st.n}</span>
                <div><h4>{st.title}</h4><p>{st.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="capabilities" id="partners">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Capabilities</span>
            <h2>Backed by global technology partners</h2>
            <p>Our core skills span the platforms our clients already depend on.</p>
          </Reveal>
          <div className="cap-grid reveal">
            {partners.map((p) => <div className="cap-item" key={p}>{p}</div>)}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}