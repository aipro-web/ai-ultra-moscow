# V35.10.8 — Orbital Squares + Flow Squares Contract

- Exactly 10 foreground orbital squares remain separate from the 4..7 readable carousel cards.
- Foreground orbital squares are 2.5× larger than V35.10.7.
- They remain face-on; no self-spin.
- During wheel/touch/camera motion they rotate clockwise around the readable carousel.
- At full stop they finish to the aligned clockwise anchor phase.
- Foreground squares must not sit behind or overlap visible readable cards. Their placement is resolved in projected screen space against all visible card bounds.
- Foreground squares also avoid each other and search nearby angular/radial slots when their preferred orbit position is occupied.
- Blue square elements are also present inside the moving Path 4 stream.
- Stream squares use the same shared clockwise flow offset as the 2160 background cards, remain face-on, and use the same focus-scale response near camera focus.
- Stream squares are implemented as a separate InstancedMesh so the added density stays mobile-friendly.
- Funnel numbering, ring wrap 500↔1, grab/flip, CTA, bloom and side-LED behavior remain untouched.
