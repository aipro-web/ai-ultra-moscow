# AI ULTRA SEO CORE — Freeze Contract (v109)

SEO CORE is frozen for Curve Gallery 5 integration.

## Do not modify during 3D integration
- existing SEO route paths / folder names
- title, meta description, canonical path, H1/H2 article structure
- JSON-LD semantics
- robots/noindex decisions
- sitemap membership
- internal article/service links
- visible article copy

## 3D integration boundary
Curve Gallery 5 is a presentation/navigation layer. Card copy comes from `integration/curve-gallery-5.card-content.json`; route mapping comes from `integration/curve-gallery-5.routes.json`. Do not move full SEO article text into WebGL/canvas and do not hide SEO text behind the 3D scene solely for crawlers.

## Production-domain migration
The current temporary `chatgpt.site` host is intentionally retained until the owner approves the production domain. Before launch, replace that base host consistently in canonical URLs, JSON-LD URLs, sitemap.xml, robots.txt, llms.txt and other absolute internal references; then run the full QA again.
