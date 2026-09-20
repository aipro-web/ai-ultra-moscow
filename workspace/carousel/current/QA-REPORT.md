# QA REPORT — V35

Passed:
- Module JS syntax: `node --check`.
- HTML parser check.
- Behavioral group model:
  - initial size 5 => forward hero 1 -> 6 regardless gesture energy;
  - next hero uses current group size;
  - reverse example hero 5 with size 4 -> hero 1;
  - 1..500 seam wrap checked.
- Static source comparison confirms V33 visual scroll core remains:
  - `targetT-=self.deltaY*SENSITIVITY;`
  - `setCamT(targetT);`

Not claimed:
- pixel-perfect WebGL/browser interaction test in this container.
