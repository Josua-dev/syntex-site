import { useEffect, useState } from 'react'
import { identity } from '../data/site'
import './FindUsMap.css'

// Embeds an OpenStreetMap view centered on the company head office.
//
// Geocoding strategy (tiered, so a map renders in almost every case without
// ever baking a fabricated coordinate):
//   1. Try the full verified address through Nominatim (public geocoder, no key).
//   2. If that street match fails, retry the suburb "Klein Windhoek" — a much
//      more reliably-indexed place from the verified address — so we still get
//      a useful regional map rather than nothing.
//   3. Regardless, the verified address text is always shown, and the last
//      resort is an honest "view on OSM" search link.
// Coordinate values always come from the geocoder's response, never hardcoded.
// Nominatim's usage policy is respected: no API key, low volume, accept-language
// unscrambled; we do not run an automated high-frequency loop.

// Layer order of place-labels to try, most specific first. All are derived from
// the verified `identity.hq` address — nothing invented.
function candidateQueries() {
  const full = [identity.hq.line1, identity.hq.line2, identity.hq.line3]
    .filter(Boolean)
    .join(', ')
  const suburb = identity.hq.line2 // e.g. "Klein Windhoek, Windhoek"
  const region = identity.hq.line3 // e.g. "Khomas Region, Namibia"
  return [[full, true], [suburb, false], [region, false]]
}

async function geocode(q) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(q)}`
  const res = await fetch(url, { headers: { 'Accept-Language': 'en' } })
  if (!res.ok) throw new Error(`geocode ${res.status}`)
  const rows = await res.json()
  return rows && rows[0] ? rows[0] : null
}

export default function FindUsMap() {
  const [state, setState] = useState({ status: 'loading', embed: null, label: null })

  useEffect(() => {
    let cancelled = false

    async function load() {
      // Walk through candidate queries (street -> suburb -> region) until one
      // returns a geocoded match. Guarantees a map whenever any part of the
      // verified address is indexable.
      for (const [q, precise] of candidateQueries()) {
        try {
          const hit = await geocode(`${q}, Namibia`)
          if (cancelled) return
          if (hit) {
            const lat = parseFloat(hit.lat)
            const lon = parseFloat(hit.lon)
            const bb = hit.boundingbox ? hit.boundingbox.map(parseFloat) : null
            const bbox = bb
              ? `?bbox=${bb[2]}%2C${bb[0]}%2C${bb[3]}%2C${bb[1]}`
              : `?bbox=${lon - 0.004}%2C${lat - 0.003}%2C${lon + 0.004}%2C${lat + 0.003}`
            setState({
              status: 'ok',
              embed: `https://www.openstreetmap.org/export/embed.html${bbox}&layer=mapnik&marker=${lat}%2C${lon}`,
              label: precise ? hit.display_name : null,
            })
            return
          }
        } catch {
          // Continue to the next, broader query; do not abort on one failure.
        }
      }
      if (!cancelled) setState((s) => ({ ...s, status: 'unavailable' }))
    }

    load()
    return () => { cancelled = true }
  }, [])

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
            title={`Map showing Syntex Technologies head office — ${state.label || 'Windhoek'}`}
            src={state.embed}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        )}
        {(state.status === 'unavailable') && (
          <div className="findus-unavailable">
            <p>Map preview unavailable right now.</p>
            <a
              href={`https://www.openstreetmap.org/search?query=${encodeURIComponent(
                [identity.hq.line1, identity.hq.line2, identity.hq.line3].filter(Boolean).join(', '),
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              View address on OpenStreetMap →
            </a>
          </div>
        )}
      </div>
    </div>
  )
}