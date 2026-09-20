# AI ULTRA v111 — Yandex / Moscow launch checklist

## Architecture already prepared
- Remote-first: no fabricated Moscow office/address.
- Site region strategy: Russia; Moscow is the priority commercial market.
- One substantial Moscow hub, not mass city doorway pages.
- Separate Yandex Direct service page and Russia/CIS geography page.
- Thin production pages are temporarily noindex until they receive unique useful content.
- Staging stays noindex; production release script restores only pages whose data-production-robots is index.

## After production domain is chosen
1. Run `python release-production.py https://REAL-DOMAIN`.
2. Verify canonical, robots.txt, sitemap.xml and JSON-LD.
3. Add the site to Yandex Webmaster and verify ownership.
4. Set desired site region to `Россия`; keep the Moscow hub as explicit evidence of Moscow priority.
5. Submit sitemap.xml and request recrawl for the home page, /moscow/, /agents/, /ai-automation/, /ai-seo/, /yandex-direct/ and /contact/.
6. Register AI ULTRA in Yandex Business as an ONLINE company, not a fabricated physical office; set real service territory.
7. Create Yandex Metrica counter, install on all pages, define meaningful goals, and connect the counter to Yandex Direct.
8. Verify that URLs with `yclid` and UTM parameters load without errors and preserve canonical URLs.
9. Watch Webmaster diagnostics, indexing, search queries, crawl errors and site quality.

## Search quality rule
Do not reopen a thin page just to increase URL count. Reopen it only after it has distinct intent, useful copy, clear internal links, accurate metadata and a reason to exist independently.

## v112 content freeze update
- 212 production URLs form the release corpus.
- 0 orphan production URLs after thematic hub linking.
- 0 high-similarity production pairs at the QA threshold.
- AI call-center and AI sales-agent are now full production pillars.
- Blog expanded to 40 indexable materials with five cornerstone guides.
- Legacy redirects now terminate only on indexable pages.

Before real launch: run the production release script with the final domain, add the domain to Yandex Webmaster, set/confirm region strategy, submit the production sitemap, install Metrica and configure meaningful goals. After indexing, use Webmaster/Metrica data to decide which pages deserve further expansion, consolidation or new case evidence.
