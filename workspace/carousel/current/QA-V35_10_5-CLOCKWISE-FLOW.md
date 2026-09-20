# QA — V35.10.5 CLOCKWISE FLOW

Static/runtime-contract checks performed before packaging:

- `node --check` on extracted module script: PASS.
- `Observer.create(...)` block SHA-256 exactly matches V35.10.4.
- `registerLogicalGroupGesture(...)` block SHA-256 exactly matches V35.10.4.
- `commitLogicalGroupIfStopped(...)` block SHA-256 exactly matches V35.10.4.
- Protected signatures preserved: `SENSITIVITY`, `type:'wheel,touch'`, `targetT-=self.deltaY*SENSITIVITY`, `setCamT(targetT)`, sequence total 500.
- All five raster assets remain present.
- Orbit is one shared shader uniform, not 2160 JS transforms.
- Card quad orientation is not rotated with the orbit; only each instance center is rotated around the shared pivot.
- Clockwise direction uses a negative Z-plane angle in screen/world XY coordinates.
- Full orbit period is 14 seconds.

Visual WebGL frame verification is not claimed in this container environment.
