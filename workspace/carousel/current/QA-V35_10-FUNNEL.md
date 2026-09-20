# QA — V35.10 Funnel Step On Stop

Validated against clean V35 base.

- Visual scroll core unchanged:
  - `SENSITIVITY = 0.8 / (window.innerHeight * 4)`
  - `gsap.quickTo(... duration: 1, ease: 'power3.out')`
  - `targetT -= self.deltaY * SENSITIVITY`
  - `setCamT(targetT)`
- No camera snap/rewind was added for normal wheel/touch scroll.
- Funnel number stays frozen while camera is easing.
- One fully settled gesture changes logical hero by exactly one.
- Forward sequence model: 1 -> 2 -> 3.
- Reverse sequence model: 3 -> 2 -> 1.
- Reverse at 1 stays at 1; no wrap to 500.
- Visible-card count remains visual-only and cannot change logical step size.
- Grab/flip/navigation code untouched apart from version string/comments.
- Module syntax: PASS.
- ZIP integrity: PASS.
- Source/ZIP `index.html` SHA-256: matching.

Visual browser/WebGL rendering was not certified in the container environment.
