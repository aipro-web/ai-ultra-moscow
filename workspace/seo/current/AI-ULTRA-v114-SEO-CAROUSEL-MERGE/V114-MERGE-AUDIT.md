# AI ULTRA v114 — SEO + CAROUSEL MERGE

## Sources
- SEO: `AI-ULTRA-v113-GROWTH-OPS-PREP`
- Carousel: `AI-ULTRA-PASS4-MASTER-V35_10_8-ORBITAL-FREE-SLOTS-FLOW-SQUARES`

## Merge boundary
- All v113 SEO route folders preserved.
- `sitemap.xml`, production sitemap/robots templates, redirects, JSON-LD and article pages preserved.
- Root `index.html` replaced by the Pass 4 carousel presentation layer.
- SEO title/description/canonical/robots/OG/JSON-LD for `/` preserved in the new root.
- Original v113 homepage body preserved verbatim in the user-openable content panel.
- 14 curated card intents from `integration/curve-gallery-5.card-content.json` mapped cyclically onto the 500-step visual flow.
- Five raster visual styles repeat across curated content; route identity stays semantic and independent of texture.
- Card CTA clicks navigate to the real static SEO route.
- Pass 4 motion constants and wheel target lines were not modified.
- No WebGL dependency for crawlability: without JS/WebGL, curated semantic cards and the full v113 homepage content remain readable.

## Still intentionally external
- Three.js / GSAP modules are loaded from `esm.sh`.
- Curve path4 data is loaded from the original public GitHub raw URL.

## Pre-production gate
- Run `python release-production.py https://YOUR-DOMAIN` only after the production domain is approved.
- Then re-run canonical/sitemap/robots/internal-link QA.
