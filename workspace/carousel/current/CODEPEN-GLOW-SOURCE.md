# CodePen glow integration

Reference: https://codepen.io/hathibelagal-dev/pen/raaaLyG
Title: Glowing Cards using threejs

Technique reused/adapted:
- bright emissive/HDR edge source
- EffectComposer + RenderPass
- UnrealBloomPass
- OutputPass

AI Ultra adaptation:
- same V35.10.2 geometry and carousel/funnel mechanics
- one shared bloom post-process for the scene
- only the 7 active foreground cards get a dedicated hot LED edge line
- vertical left/right edges are strongest
- corners receive extra intensity
- horizontal top/bottom edges stay intentionally weak
- hero uses stronger shared edge material than support cards
- no per-card bloom pass or per-card animation
