# V35.10 Funnel Stop Contract

Base: clean V35 GROUP-SEQUENCE-ON-STOP.

## Non-negotiable behavior
- Visual camera scroll is the original V35 / Pass 4 motion and must not be slowed, quantized, snapped, or linked to content numbering.
- During one continuous wheel/touch scroll session, the logical hero number is frozen even if many physical cards cross the screen.
- Only after the visual motion fully settles does the logical funnel move exactly one step in the completed gesture direction.
- Forward: 1 -> 2 -> 3 -> 4 ...
- Reverse: 4 -> 3 -> 2 -> 1.
- Card 1 is the lower funnel boundary: reverse scrolling at 1 keeps hero at 1 (no wrap to 500).
- Card 500 is the upper funnel boundary: forward scrolling at 500 keeps hero at 500 (no wrap to 1).
- Support cards are numbered sequentially from the logical hero.
- Visible support count remains visual-only and never changes the logical step size.

## Protected motion core
Do not change the V35 Observer visual update:
`targetT -= self.deltaY * SENSITIVITY;`
`setCamT(targetT);`

Do not change `SENSITIVITY`, `quickTo` duration/ease, path, camera, grab, flip, or wheel/touch input behavior when editing funnel logic.


## V35.10.4 ring seam
Logical sequence is circular: down 1→2→…→500→1; reverse 1→500→499→…→1. The visual path remains independent.
