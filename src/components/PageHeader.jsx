import Breadcrumbs from './Breadcrumbs'
import PhotoBg from './PhotoBg'

const Crosshatch = () => (
  <svg className="crosshatch" viewBox="0 0 340 340" fill="none" aria-hidden="true">
    <circle cx="170" cy="170" r="130" stroke="rgba(87,85,84,.45)" strokeWidth="1" />
    <circle cx="170" cy="170" r="90" stroke="rgba(244,245,240,.15)" strokeWidth="1" />
    <path d="M170 10V330M10 170H330" stroke="rgba(244,245,240,.1)" strokeWidth="1" />
  </svg>
)

export default function PageHeader({ crumbs, eyebrow, title, lead }) {
  return (
    <header className="page-header">
      <PhotoBg overlay={0.86} />
      <Crosshatch />
      <div className="wrap">
        {crumbs && <Breadcrumbs items={crumbs} />}
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {lead && <p>{lead}</p>}
      </div>
    </header>
  )
}