# V35.10.4 — Ring Wrap Sequence

Only logical numbering semantics were changed on top of V35.10.3.

Contract:
- wheel/touch down: 1 → 2 → 3 → … → 500 → 1
- reverse direction: 1 → 500 → 499 → … → 2 → 1
- one fully settled scroll session changes the logical hero by exactly one
- visual camera distance/speed remains independent of logical numbering
- visible support-card numbers wrap across the 500 ↔ 1 seam in the same direction as the latest committed gesture
- no changes to Pass 4 SENSITIVITY / quickTo / Observer camera movement / bloom / assets / grab / flip
