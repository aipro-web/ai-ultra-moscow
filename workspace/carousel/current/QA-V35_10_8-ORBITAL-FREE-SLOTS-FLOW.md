# QA V35.10.8

Static acceptance targets:
- ORBITAL_SQUARE_COUNT = 10.
- ORBITAL_SQUARE_SCREEN_SIZE = .145 (2.5× .058).
- ORBITAL_FLOW_SQUARE_COUNT = 180.
- Foreground squares are not included in activeCards and cannot affect funnel numbering.
- Clockwise foreground motion still uses desiredAngle = baseAngle - phase.
- Foreground square placement checks projected NDC card bounds and already occupied square bounds.
- Candidate placement searches multiple angular offsets and radial levels before falling back.
- Stream squares are an InstancedMesh and update from the exact same flowOffsetT used by the background card stream.
- Stream squares remain face-on (rotation 0,0,0) and share the dynamic focus-scale shader behavior.
- Observer visual scroll, funnel sequence, 500↔1 wrap, grab/flip and CTA code remain unchanged.
- index.html JavaScript module parses successfully with node --check.
