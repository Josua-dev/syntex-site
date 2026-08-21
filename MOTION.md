# Motion & Animation Design Guidelines

## Purpose
Motion should **clarify hierarchy**, **guide attention**, and **signal state changes** without being merely decorative. Every animation must be **purposeful**, **performant**, and **respectful** of user preferences.

## Core Principles
| Guideline | Detail |
|-----------|--------|
| **Purpose over decoration** | Ask: *What information does this movement convey?* If the answer is “it looks nice”, reconsider. |
| **Consistent timing** | Use a shared palette of easing curves, durations, and delays (e.g., `ease-out` for actions, `cubic-bezier(0.4, 0, 0.2, 1)` for subtle feedback, `steps(2, end)` for discrete transitions). |
| **Respect reduced‑motion** | Guard all animations with `@media (prefers-reduced-motion: no-preference)` and provide an explicit “animation‑off” toggle for critical interactions. |
| **Performance guardrails** | Animate only `transform` and `opacity` on compositable layers; avoid layout‑changing properties on large elements. Use `will-change` sparingly—only after profiling confirms a gain. |
| **Dynamic content safety** | Reserve space (`min-height`, container queries) before content loads to prevent layout shift. Show skeletons that match the final size. |

## Tool‑agnostic Checklist
- **Entry & exit** – Fade‑in/out for content changes; pair with ARIA live regions for dynamic updates.  
- **Micro‑interactions** – Distinct states (idle, hover, pressed, focus) with subtle visual/aural feedback; response time < 150 ms.  
- **Delays & sequencing** – Stagger only when they aid comprehension; avoid cascading delays that make the UI feel sluggish.  
- **Space reservation** – Prevent CLS by reserving space for async content before it renders.  
- **Testing** – Verify with Lighthouse, “Reduced motion” setting, and on low‑end devices.

## Implementation Patterns
- **Loading skeletons** – Match final layout dimensions; preserve CLS while indicating progress.  
- **Animated routes** – Slide/fade navigation changes; keep exits reversible; preserve focus order.  
- **Feedback cues** – Success sparkles, error shakes, progress rings; combine color with icon/symbol for accessibility.  
- **3‑D depth & parallax** – Reserve for hero sections; maintain high frame‑rates; provide an easy “Disable motion” escape.  
- **Gesture‑linked motion** – Map swipe/drag to natural curves; always provide keyboard fallbacks.

> **Animation is a language.** When used with restraint and intention, it makes interfaces feel alive, trustworthy, and human.

---

**Next Steps**
1. Review all existing UI animations (Footer, MegaNav, SearchModal, route transitions) against the checklist.  
2. Apply the shared timing palette to new motions (e.g., `cubic-bezier(0.4, 0, 0.2, 1)` for micro‑interactions).  
3. Add `prefers-reduced-motion` guards to all `@keyframes` and transition rules.  
4. Document any motion‑related configuration in `MOTION.md` and reference it in the style guide.  
5. Run a Lighthouse audit to verify performance and CLS after changes.