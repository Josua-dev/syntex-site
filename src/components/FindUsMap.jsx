import { useEffect, useState } from 'react'
import { identity } from '../data/site'
import './FindUsMap.css'

// Embeds an OpenStreetMap view centered on the company head office.
// The address is a verified value from the official public record; the
// coordinates are resolved at runtime in the visitor's own browser via
// Nominatim (free public geocoder, no API key), so no fixed coordinates
// are baked into the code. If geocoding is unavailable the card falls
// back to the verified address text with an honest "view on OSM" link.
export default function FindUsMap() {
  const [state, setState] = useState({ status: 'loading', embed: null, lat: null, lon: null, label: null })

  const address = [identity.hq.line1, identity.hq.line2, identity.hq.line3]
    .filter(Boolean)
    .join(', ')

  useEffect(() => {
    let cancelled = false
    const q = encodeURIComponent(address + ', Namibia')
    fetch(
      `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${q}`,
      { headers: { 'Accept-Language': 'en' } }
    )
      .then((r) => r.json())
      .then((rows) => {
        if (cancelled) return
        if (rows && rows[0]) {
          const lat = parseFloat(rows[0].lat)
          const lon = parseFloat(rows[0].lon)
          const bbox = rows[0].boundingbox ? rows[0].boundingbox.map(parseFloat) : null
          const bboxStr = bbox
            ? `?bbox=${bbox[2]}%2C${bbox[0]}%2C${bbox[3]}%2C${bbox[1]}&layer=mapnik&marker=${lat}%2C${lon}`
            : `?bbox=${lon - 0.004}%2C${lat - 0.003}%2C${lon + 0.004}%2C${lat + 0.003}&layer=mapnik&marker=${lat}%2C${lon}`
          setState({
            status: 'ok',
            embed: `https://www.openstreetmap.org/export/embed.html${bboxStr}`,
            lat,
            lon,
            label: rows[0].display_name,
          })
        } else {
          setState({ status: 'notfound', embed: null, lat: null, lon: null, label: null })
        }
      })
      .catch(() => {
        if (!cancelled) setState({ status: 'error', embed: null, lat: null, lon: null, label: null })
      })
    return () => { cancelled = true }
  }, [address])

  return (
    <div className="findus">
      <div className="findus-address">
        <span className="eyebrow">Find us</span>
        <h3>Head office</h3>
        {[identity.hq.line1, identity.hq.line2, identity.hq.line3].map((l) => (
          <p key={l} style={{ margin: '0 0 4px' }}>{l}</p>
        ))}
        <a href={`tel:${identity.phoneHref}`} className="findus-phone">{identity.phone}</a>
      </div>

      <div className="findus-map">
        {state.status === 'loading' && (
          <p className="findus-note">Locating on map…</p>
        )}
        {state.status === 'ok' && (
          <iframe
            title={`Map showing Syntex Technologies head office — ${address}`}
            src={state.embed}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        )}
        {(state.status === 'error' || state.status === 'notfound') && (
          <div className="findus-unavailable">
            <p>Map preview unavailable right now.</p>
            <a
              href={`https://www.openstreetmap.org/search?query=${encodeURIComponent(address)}`}
              target="_blank"
              rel="noreferrer"
            >
              View {address} on OpenStreetMap →
            </a>
          </div>
        )}
      </div>
    </div>
  )
}