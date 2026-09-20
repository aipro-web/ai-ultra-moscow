# QA — V35.10.2 BIG CARD NUMBERS

Based on V35.10.1 FIX-ASSETS.

Changes in this build are intentionally limited to the visible card-number overlay and one stale explanatory comment:
- larger readable numbers in the upper-left corner of each visible active card;
- hero number is larger than support-card numbers;
- no changes to camera motion, wheel sensitivity, GSAP quickTo easing, funnel stop logic, group sizing logic, raster loading, flip, grab or CTA behavior.

Validation performed before packaging:
- JavaScript syntax check: PASS
- all five raster card assets present: PASS
- relative local asset references exist: PASS
- protected scroll signature unchanged from V35.10.1: PASS
- funnel contract remains one logical step per fully settled scroll session: PASS
- ZIP integrity: PASS
- packed index.html SHA-256 matches source index.html: PASS

Browser/WebGL visual QA is not claimed from the container environment.
