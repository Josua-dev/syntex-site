import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Reveal from '../components/Reveal'
import Unverified from '../components/Unverified'
import FindUsMap from '../components/FindUsMap'
import { identity } from '../data/site'
import { ArrowIcon } from '../components/BrandMark'
import './Contact.css'

const TOPICS = [
  { key: 'consultation', label: 'Request a Consultation' },
  { key: 'sales', label: 'Sales' },
  { key: 'support', label: 'Support' },
]

export default function Contact() {
  const [params] = useSearchParams()
  const intent = params.get('intent') || params.get('topic') || ''

  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', organization: '', email: '', topic: intent || TOPICS[0].key, message: '' })

  const topicLabel = TOPICS.find((t) => t.key === intent)?.label

  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Contact' }]}
        eyebrow="Contact Syntex"
        title="Talk to the team that scopes, builds, and supports your systems."
        lead={topicLabel ? `You're reaching out about: ${topicLabel}.` : "Phone, email, or a quick message — the right route in below."}
      />

      <section className="contact-lede">
        <div className="wrap contact-grid">
          <Reveal>
            <span className="eyebrow">General enquiries</span>
            <ul className="contact-list">
              <li>
                <span className="cl-label">Phone</span>
                <a href={`tel:${identity.phoneHref}`}>{identity.phone}</a>
              </li>
              <li>
                <span className="cl-label">Sales</span>
                <a href={`mailto:${identity.emailSales}`}>{identity.emailSales}</a>
              </li>
              <li>
                <span className="cl-label">Support</span>
                <a href={`mailto:${identity.emailSupport}`}>{identity.emailSupport}</a>
              </li>
            </ul>

            <div id="locations" style={{ marginTop: 28, scrollMarginTop: 90 }}>
              <FindUsMap />
            </div>
          </Reveal>

          <Reveal>
            <div className="contact-form">
              <div aria-live="polite">
              {sent ? (
                <div className="form-success">
                  <h3>Thanks — we've received your message.</h3>
                  <p>This is a demonstration form; in production it would reach {identity.emailSales}. For now, please use the phone or email details alongside this page.</p>
                  <button className="btn btn-outline" onClick={() => setSent(false)}>Send another message</button>
                </div>
              ) : (
                <form onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
                  <div className="f-grid">
                    <label>Name<input name="name" autoComplete="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" /></label>
                    <label>Organisation<input name="organization" autoComplete="organization" value={form.organization} onChange={(e) => setForm({ ...form, organization: e.target.value })} placeholder="Company or department" /></label>
                  </div>
                  <label>Email<input type="email" name="email" autoComplete="email" inputMode="email" spellCheck={false} required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@organisation.com" /></label>
                  <label>Topic
                    <select name="topic" autoComplete="off" value={form.topic} onChange={(e) => setForm({ ...form, topic: e.target.value })}>
                      {TOPICS.map((t) => <option key={t.key} value={t.key}>{t.label}</option>)}
                    </select>
                  </label>
                  <label>How can we help?<textarea name="message" rows={4} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your requirement…" /></label>
                  <button type="submit" className="btn btn-signal btn-block">Send message <ArrowIcon /></button>
                </form>
              )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="detail-band" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <Reveal>
            <Unverified
              title="More contact channels"
              body="The phone and email channels shown are taken directly from Syntex's official public record. Any additional regional offices or department- level channels will be added here only once they're confirmed against official sources."
            />
          </Reveal>
          <Reveal style={{ marginTop: 28 }}>
            <Link to="/about" className="btn btn-outline">Learn more about Syntex →</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}