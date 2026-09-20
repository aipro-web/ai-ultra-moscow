# V35.10.5 — CLOCKWISE FLOW CONTRACT

Visual-only motion layer on top of V35.10.4.

- The dense 2160-card background flow continuously orbits clockwise.
- One full orbit: 14 seconds.
- Motion is GPU-driven through shared shader uniforms; no per-card JS animation loop is added.
- Only instance centers orbit. Card local axes are not rotated, so the card faces stay visually front-facing instead of spinning with the carousel.
- Orbit pivot is computed from the runtime Path 4 XY bounds.
- Foreground funnel/hero cards are intentionally not put into the ambient orbit so they remain readable and interactive.
- Scroll, wheel/touch Observer behavior, ring-wrap numbering, logical stop stepping, grab, flip, CTA/navigation and bloom are unchanged.
