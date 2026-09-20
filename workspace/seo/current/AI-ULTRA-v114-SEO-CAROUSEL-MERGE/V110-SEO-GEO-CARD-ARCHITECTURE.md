# AI ULTRA v110 — GEO / SEO / CARD ARCHITECTURE

## Strategy
- Remote-first business. No fabricated Moscow office or address.
- Moscow is the priority commercial market.
- Russia and CIS are the real service area.
- Organic acquisition: Google Search / AI features + Yandex Search.
- Paid acquisition for the Russian market: Yandex Ads; Google Ads is not treated as the Moscow paid-search foundation.
- One strong page per real intent. No mass city doorway pages.

## Google-aligned rules
- Helpful, reliable, people-first content.
- AI Overviews / AI Mode use the same core Search eligibility; no special AI markup is required.
- Avoid substantially similar location/query pages that funnel users to the same service.
- Semantic HTML remains the source of essential text and links. Raster/card rendering is the presentation layer.

## Card-only visual architecture
All visible site content in the final 3D experience belongs to cards. A card may have front and back faces. The essential words, headings, lists and CTA labels must remain live DOM/HTML, visually attached to the card. Raster assets are backgrounds/illustrations, not the only copy source.

### Front
Short promise: eyebrow, title, short body, primary CTA.

### Back
Useful decision content: what we solve, who it is for, expected result/process, limitations/format, CTA.

## Raster + glass
The Curve Gallery glass should remain real 3D geometry/material. Put raster artwork on an inset plane or texture layer inside the card; keep the glass/reflection/border material above or around it. Do not replace the whole 3D card with a flat image unless intentionally switching to a 2D fallback. Live HTML text should be synchronized with the card transform.

## Legacy consolidation
- 60 near-duplicate `*-for-business` routes consolidated to their base intent.
- 3 city-clone routes retired from indexable sitemap.
- `_redirects` contains 301 rules for compatible hosts; legacy HTML files also contain canonical/noindex/instant fallback redirects.

## Production launch
Before public indexing, replace the temporary chatgpt.site host consistently in canonical, sitemap, robots, JSON-LD, OG and llms.txt, then rerun QA.
