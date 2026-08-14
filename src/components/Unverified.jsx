// Honest placeholder for content areas with no verified public source.
// Renders a clear "not publicly published" panel — never fabricated facts.
export default function Unverified({ title, body }) {
  return (
    <div className="unverified-panel">
      <span className="note-flag">Not publicly published</span>
      <h3 className="uv-title">{title}</h3>
      <p>{body}</p>
    </div>
  )
}