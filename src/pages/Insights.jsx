import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import CtaBand from '../components/CtaBand'
import './Catalog.css'

const CHANNELS = [
  {
    to: '/insights/news',
    title: 'News & Announcements',
    text: 'Official announcements and updates from Syntex, as they are published.',
    tag: 'News',
    verified: true,
  },
  {
    to: '/insights/approach',
    title: 'Approach',
    text: 'How Syntex thinks about systems — the process and principles behind every engagement.',
    tag: 'Perspective',
    verified: true,
  },
  {
    to: '/insights/resources',
    title: 'Resources',
    text: 'Reference material and guidance drawn from the verified public record.',
    tag: 'Library',
    verified: false,
  },
  {
    to: '/insights/case-studies',
    title: 'Case Studies',
    text: 'Structured write-ups of delivered projects and their outcomes.',
    tag: 'Track Record',
    verified: false,
  },
]

export default function Insights() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Insights' }]}
        eyebrow="Insights"
        title="News, notes, and resources from Syntex."
        lead="Four channels into how the company thinks, works, and reports — each grounded in the verified public record."
      />

      <section className="cat-lede">
        <div className="wrap">
          <Reveal className="section-head" style={{ marginBottom: 40 }}>
            <span className="eyebrow">Library</span>
            <h2 style={{ fontSize: 34 }}>Choose a channel</h2>
            <p>Content is only published here once it's confirmed against official sources — channels without confirmed material carry an honest placeholder rather than invented articles.</p>
          </Reveal>
          <div className="cat-grid reveal" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {CHANNELS.map((c) => (
              <Link to={c.to} className="cat-tile" key={c.to}>
                <div>
                  <h4>{c.title}</h4>
                  <p>{c.text}</p>
                </div>
                <span className="ct-foot">
                  <span className="ct-tag">{c.tag}</span>
                  {c.verified === false && <span className="note-flag" style={{ fontSize: 9 }}>Soon</span>}
                  <span className="sc-link">Open →</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaBand heading="Care to talk through a topic we cover?" />
    </>
  )
}