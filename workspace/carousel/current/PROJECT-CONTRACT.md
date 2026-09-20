# PROJECT CONTRACT — V35

Base: V33 DESKTOP GRAB + FLIP FIX.

## Frozen visual motion
Do not alter these V33/source-Pass-4 lines:
- `const SENSITIVITY=0.8/(window.innerHeight*4);`
- `const setCamT=gsap.quickTo(camProxy,'t',{duration:1,ease:'power3.out'});`
- `targetT-=self.deltaY*SENSITIVITY;`
- `setCamT(targetT);`

Logical numbering MUST NOT be derived from camera distance or scroll velocity.

## Logical group sequencing
- Initial hero = 1.
- Initial group size = 5, therefore visible logical group is 1..5.
- After a completed forward scroll: `nextHero = currentHero + currentGroupSize`.
- After a completed backward scroll: `nextHero = currentHero - currentGroupSize`.
- Wrap is 1..500.
- Current gesture decides only next group size (1..7).
- Numbering commits only when the visual quickTo tween has actually stopped (or hard timeout safety fires).

## Preserved V33 interaction
- Raster cards 1..5.
- Hero flip front/back.
- Mouse grab/play on face-on visible card.
- Wheel does not move scene while grab is active.
- No visible coded catalog button.
