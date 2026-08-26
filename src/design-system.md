# Syntex Technologies Design System Capture

## Purpose & Audience
Capture the visual design decisions for the Syntex Technologies website in a single source of truth. This document serves:

- **Designers** – to maintain visual consistency across pages.
- **Developers** – to reference tokens when building components.
- **Content authors** – to ensure any new UI copy aligns with the established visual language.

## Anchor Choice
The site follows a **Technical / Schematic** anchor, borrowing visual language from engineering blueprints and spec sheets. This choice emphasizes:

- **Clarity over decoration** – clear hierarchy, precise spacing, and functional colour use.
- **Technical credibility** – use of monospace type, muted accent colors, and structured grids.
- **Systems thinking** – every visual decision maps to a design token, ensuring themability and consistency.

> *Anchor rationale*: The technical anchor best matches the site’s audience (systems integrators, enterprise clients) and its content (diagrams, specs, process documentation). It avoids ornamental styles that would dilute the message.

## Token Layers

### 1. Primitives (CSS Custom Properties)
All visual tokens are defined as CSS variables in `:root`. These map directly to design tokens.

| Category | Token | Value | Usage |
|----------|-------|-------|-------|
| **Colour – Primary** | `--navy` | `#0e0e0e` | Primary dark surface |
| **Colour – Secondary** | `--bronze` | `#141414` | Dark accent |
| **Colour – Accent** | `--orange` | `#575554` | Action accent |
| **Colour – Light** | `--paper` | `#FAFAF8` | Page background |
| **Colour – Ink** | `--ink` | `#1A1A1A` | Body text |
| **Colour – Link** | `--link` | `#3B6FA0` | Inline links |
| **Radius** | `--r-sm` | `10px` | Small radius |
| **Radius – Medium** | `--r-md` | `14px` | Default radius |
| **Radius – Large** | `--r-lg` | `18px` | Large radius |
| **Radius – Pill** | `--r-pill` | `999px` | Fully pill-shaped |
| **Motion – Ease** | `--ease` | `cubic-bezier(.22,.61,.36,1)` | Standard transition |
| **Typography – Display** | `--f-display` | `'Source Serif 4', Georgia, Times New Roman, serif` | Headings, hero titles |
| **Typography – Body** | `--f-body` | `'Source Sans 3', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` | Paragraphs, list items |
| **Typography – Mono** | `--f-mono` | `'IBM Plex Mono', Menlo, monospace` | Code, monospace UI |
| **Spacing** | `--nav-h` | `78px` | Main navigation height |
| **Spacing – Nav Scrolled** | `--nav-h-scrolled` | `60px` | Scrolled nav height |
| **Shadow – Bronze** | `--shadow-bronze` | `0 12px 28px -10px rgba(249,249,249,.45)` | Card shadows |
| **Shadow – Soft** | `--shadow-soft` | `0 1px 2px rgba(15,27,45,.04), 0 8px 24px -12px rgba(15,27,45,.10)` | Subtle elevation |

### 2. Semantic Tokens
Semantic tokens map primitives to meaningful roles, allowing a single theme swap to propagate across the UI.

| Semantic Token | Maps To |
|----------------|---------|
| `color/bg/surface` | `--paper` |
| `color/bg/primary` | `--navy` |
| `color/bg/secondary` | `--bronze` |
| `color/accent/primary` | `--orange` |
| `color/text/primary` | `--ink` |
| `color/text/secondary` | `--ink-soft` |
| `color/border/subtle` | `--line` |
| `radius/base` | `--r-md` |
| `radius/large` | `--r-lg` |
| `radius/pill` | `--r-pill` |
| `motion/duration/default` | `200ms` (derived from `--ease`) |
| `font/base` | `--f-body` |
| `font/heading` | `--f-display` |
| `font/mono` | `--f-mono` |

### 3. Component Recipes
Components use only semantic tokens, ensuring consistency and themability.

| Component | Semantic Tokens Used | Example |
|-----------|----------------------|---------|
| **Button** | `background`, `color`, `border-color`, `border-radius`, `font-weight`, `font-size` | `.btn-primary` → `background: var(--navy); color: var(--paper); border-radius: var(--r-md);` |
| **CTA Band** | `background`, `color`, `gap`, `padding`, `border-radius` | `.cta-panel` → `background: linear-gradient(...), var(--navy);` |
| **Link Tile** | `background`, `border`, `border-radius`, `font-family`, `font-size` | `.link-tile` → `background: var(--white); border: 1px solid var(--line); border-radius: var(--r-lg);` |
| **Reveal** | `opacity`, `transform`, `transition` | `.reveal` → `opacity:0; transform:translateY(18px); transition:opacity .6s var(--ease-out), transform .6s var(--ease-out);` |

## Visual Specifications

### Colour Palette
- **Primary Dark**: `#0e0e0e` (`--navy`)
- **Secondary Dark**: `#141414` (`--bronze`)
- **Accent**: `#575554` (`--orange`)
- **Background (Light)**: `#FAFAF8` (`--paper`)
- **Text**: `#1A1A1A` (`--ink`)
- **Muted Text**: `#8B9096` (`--ink-faint`)
- **Border / Line**: `#E5E7EB` (`--line`)
- **Link Accent**: `#3B6FA0` (`--link`)

### Typography
| Role | Font Family | Weight | Size (mobile → desktop) |
|------|-------------|--------|--------------------------|
| Display | `var(--f-display)` | 600 | `clamp(30px,3.8vw,44px)` |
| Heading (H2) | `var(--f-display)` | 600 | `clamp(28px,3.2vw,38px)` |
| Body | `var(--f-body)` | 400 | `16.5px` |
| Monospace | `var(--f-mono)` | 400‑500 | `12px` (breadcrumbs), `11px` (node labels) |

### Spacing & Layout
- **Container Width**: `max-width:1240px; margin:auto; padding:0 40px;` (`.wrap`)
- **Grid Gaps**: `gap: 16px` (`.values-full-grid`), `gap: 12px` (`.arch-grid`)
- **Navigation Height**: `--nav-h: 78px;` (sticks at top, collapses to `--nav-h-scrolled: 60px;` when scrolled)

### Motion & Animation
- **Default Easing**: `var(--ease)` – `cubic-bezier(.22,.61,.36,1)`
- **Reveal Animation**: Fade‑in + slide‑up over `600ms` using `var(--ease-out)`.
- **Reduced Motion**: `prefers-reduced-motion: reduce` disables transitions.

### Component States
| Component | Default | Hover | Focus (visible) | Active |
|-----------|---------|-------|----------------|--------|
| **Button** | `background: var(--navy); color: var(--paper)` | `background: var(--bronze-dark); transform: translateY(-2px)` | `outline: 2px solid var(--signal); outline-offset: 3px` | `transform: translateY(-2px)` |
| **CTA Button** | `background: var(--orange); color: var(--paper)` | `background: var(--orange-dark); transform: translateY(-2px)` | Same as hover | Same as hover |
| **Outline Button** | `background: var(--white); color: var(--navy); border-color: var(--border)` | `border-color: var(--ink-soft); transform: translateY(-2px)` | Same as hover | Same as hover |
| **Link Tile** | `border: 1px solid var(--line); transform: none` | `transform: translateY(-3px); box-shadow: var(--shadow-soft); border-color: var(--blueprint-mid)` | — | — |

## Guardrails & Best Practices
1. **Never hard‑code hex values** in component CSS; always reference a semantic token.
2. **Promote repeated values** (e.g., a colour used for both primary and accent) to a semantic token.
3. **Maintain a single source of truth** – all design decisions live in `src/design-system.md` and the CSS variables in `styles/global.css`.
4. **Component‑only styling** – components may only import tokens from the semantic layer; ad‑hoc styles are prohibited.
5. **Theming** – swapping the theme consists solely of updating the primitive variables; no component code changes required.

## System Check
- **Token Fidelity**: All rendered values match the primitive tokens defined above.
- **Content Discipline**: All copy in UI components is either real data (e.g., navigation labels) or deliberately authored content; no filler or fabricated data is present.
- **Differentiator Visibility**: The technical/blue‑print aesthetic (monospace labels, crisp borders, technical accent) is consistently applied across headings, diagrams, and interactive elements.

---

*Prepared by the Syntex Design Team – 2026‑08‑26*