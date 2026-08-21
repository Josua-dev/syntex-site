# Syntex Site

A modern, accessible web presence for **Syntex Technologies**, showcasing our innovative ICT solutions and enterprise services.

## Features

- **React Router v6** with route‑level code splitting (`React.lazy`) for faster initial load.
- **Reduced motion** support via Framer Motion's `reducedMotion="user"` to respect OS-level accessibility settings.
- **Enhanced form accessibility** in the Contact page (proper `name`, `autoComplete`, `inputMode`, and ARIA live regions).
- **Improved focus styling** using native `:focus-visible` rings for better keyboard navigation.
- **Mobile‑friendly navigation** – accordion arrows are now real `<button>` elements with `aria-expanded` and `aria-controls`.
- **Explicit logo dimensions** (`width="241" height="82"`) to prevent layout shifts.
- **Responsive design** built with CSS variables and modern layout techniques.

## Repository Structure

```
/src
  /components      # Reusable UI components (e.g., Footer, MegaNav, SearchModal)
  /pages           # Route components (e.g., Contact, About, Services)
  /data            # Static data (nav.js, site.js)
  /styles          # Global CSS and theming variables
  App.jsx          # Route tree wrapped in <Suspense> and <RouteFallback>
  main.jsx         # ReactDOM render entry point with reduced‑motion detection
/public
  /img           # Logos and assets
  _redirects       # Netlify/Vercel redirect rules
  index.html       # Entry HTML template
package.json       # Scripts: dev, build, preview
```

## Scripts

- `npm run dev` — Start development server with hot reload
- `npm run build` — Production build (outputs to `dist/`)
- `npm run preview` — Preview the production build locally

## Accessibility & Performance

- **Reduced motion**: Detects `(prefers-reduced-motion: reduce)` and applies a `no-motion` class.
- **Focus-visible**: Native focus ring applied to form inputs and interactive elements.
- **Code splitting**: Lazy‑loads all route components for optimal initial payload.
- **Semantic HTML**: Proper button semantics for accordion controls and form elements.

## Deploy

The site is configured for common static hosting platforms (Netlify, Vercel, Cloudflare Pages). The build output (`dist/`) is ready for direct upload.

---

**© 2026 Syntex Technologies – All rights reserved.**