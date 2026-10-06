# AI Ultra — PROJECT LOCK

Status date: 2026-09-20
Branch: `drive-sync`

## Purpose

This registry defines the approved baseline and the parts of the project that may still be edited.

## Mandatory workflow

1. Read this file before making project changes.
2. Read `workspace/_LOCKS.json` for machine-readable status.
3. Do **not** fully re-audit or rewrite anything marked `LOCKED / APPROVED`.
4. Work only on files/modules touched by the user's requested change.
5. When a change can affect a locked dependency, run only a local regression check.
6. A full project-wide review is allowed only after explicit command: **FULL CHECK**.
7. A locked module may be changed only after explicit command: **UNLOCK <module>**.
8. After approval, use **LOCK <module>** and update both lock registries.
9. Preserve Git history; never silently replace an approved baseline.

## Current approved baseline

### SEO — LOCKED / APPROVED BASELINE

Current synchronized SEO archive:

- Archive: `06_AI-ULTRA-v114-SEO-CAROUSEL-MERGE.zip`
- Fingerprint: `1789905605602:3970538:06_AI-ULTRA-v114-SEO-CAROUSEL-MERGE.zip`
- Scope locked: current SEO architecture, collected semantic baseline, Moscow / Moscow Region / Russia targeting logic.
- Allowed without UNLOCK: adding semantic clusters, landing pages, industry pages, articles, cases, FAQ, conversion improvements and new content.
- Forbidden by default: rebuilding the approved SEO foundation from zero.

### Carousel — IN REVIEW

Current synchronized carousel archive:

- Archive: `AI-ULTRA-CAROUSEL-PURE-CORE-v1.zip`
- Fingerprint: `1789910044370:25012:AI-ULTRA-CAROUSEL-PURE-CORE-v1.zip`

Current module status:

| Module | Status |
|---|---|
| Carousel engine | IN REVIEW |
| Geometry / camera / spacing | IN REVIEW |
| Scroll / drag / swipe | IN REVIEW |
| Card navigation | IN REVIEW |
| Button system | IN REVIEW |
| Card layout | IN REVIEW |
| Raster / glass / LED skins | EDITABLE |
| Card content | EDITABLE |
| Background / particles / atmosphere | EDITABLE |
| Mobile adaptation | IN REVIEW |

The carousel core must be frozen module-by-module after final verification, not all at once.

## Commands

- **LOCK <module>** — approve and freeze the current state.
- **UNLOCK <module>** — allow modification of a frozen module.
- **PATCH <scope>** — change only the named scope; preserve everything else.
- **FULL CHECK** — explicitly perform full project-wide re-audit.

## Default principle

**Approved once → LOCKED → untouched unless the requested change directly affects it.**

For each new task:
1. Determine the requested scope.
2. Compare only affected files/modules.
3. Patch only those files.
4. Run local regression checks on direct dependencies.
5. Leave all other approved files untouched.
