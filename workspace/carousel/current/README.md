V35.10.1 — FUNNEL FIX / ASSETS RESTORED

Fix only: restored the five raster assets from clean V35 that index.html already expects at ./assets/card-1.jpg … card-5.jpg.
No funnel/scroll logic changed from V35.10.

# AI ULTRA PASS 4 — V35 GROUP SEQUENCE ON STOP

Built directly from V33.

Core rule:
- Visual wheel/touch motion is unchanged from V33 / source Pass 4.
- Initial logical group: 1,2,3,4,5. Hero: 1.
- One continuous scroll session may visually travel any distance.
- Only after the visual tween fully stops does numbering advance once.
- Forward: next hero = current hero + current visible group size.
- Backward: next hero = current hero - current visible group size.
- The gesture energy determines only the NEXT group's visible size (1..7), not how many logical groups are skipped.

Examples:
- Start 1..5 => after any forward scroll+full stop => hero 6.
- If the group at hero 6 contains 4 visible cards, next forward stop => hero 10.
- If hero 5 has group 5,4,3,2 (size 4), backward stop => hero 1.

V33 grab/flip/raster behavior is preserved.

## V35.10 Funnel Step On Stop
Logical funnel numbering is now independent from visual scroll distance. One fully settled continuous scroll session changes the hero by exactly one card (+1/-1). See `FUNNEL-STOP-CONTRACT.md`.

## V35.10.2 — Big card numbers
Large, high-contrast logical card numbers are overlaid in the upper-left corner for funnel QA. Hero number is intentionally larger. Motion/funnel code is unchanged from V35.10.1.

## V35.10.4
Logical funnel numbering now wraps at the seam: 500 ↔ 1. Scroll-down advances +1; reverse scroll decrements -1. Visual Pass 4 motion is unchanged.

## V35.10.5 clockwise ambient flow

The dense background carousel now runs continuously clockwise at a 14-second revolution. The motion is implemented in the shared instanced vertex shader by orbiting instance centers around the Path 4 XY bounds center while keeping the card plane axes fixed. This preserves the face-on look and avoids per-instance JS animation. Foreground funnel cards remain stable/readable; funnel and scroll mechanics are unchanged.

## V35.10.8 — enlarged free-slot orbital squares + blue squares in the live flow
- The 10 orbital squares are 2.5× larger than V35.10.7.
- They remain face-on and rotate clockwise while the carousel is moving.
- Each frame uses projected screen-space collision checks against every visible hero/support card and against already placed squares.
- A square searches nearby angular/radial slots and occupies a free place around the cards instead of hiding behind them.
- The blue square language now also exists inside the dense moving stream as 180 instanced square elements.
- Stream squares use the same Path 4 curve offset, clockwise timing, face-on orientation, and focus-scale response as the background cards.
- Funnel numbering, 500↔1 ring wrap, grab/flip, CTA, bloom and LED logic are unchanged.
