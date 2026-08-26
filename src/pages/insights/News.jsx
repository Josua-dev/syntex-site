import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import Reveal from '../../components/Reveal'
import CtaBand from '../../components/CtaBand'
import Unverified from '../../components/Unverified'
import '../Catalog.css'

export default function News() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Insights', path: '/insights' }, { label: 'News & Announcements' }]}
        eyebrow="News"
        title="Announcements from Syntex."
        lead="Company announcements as they are published through official channels."
      />
      <section className="block">
        <div className="wrap">
          <Reveal>
            <Unverified
              title="News feed"
              body="No news items have been published in the verified source set yet. When official announcements appear, they'll be listed here with a publication date and a link back to the source. Nothing has been written that can't be traced to the public record."
            />
          </Reveal>
          <Reveal style={{ marginTop: 28 }}>
            <Link to="/insights" className="btn btn-outline">Back to Insights →</Link>
          </Reveal>
        </div>
      </section>
    </>
  )
}