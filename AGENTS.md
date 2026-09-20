# AI Ultra agent instructions

Before any code or content work:

1. Read `PROJECT_LOCK.md`.
2. Read `workspace/_LOCKS.json`.
3. Treat all LOCKED/APPROVED scopes as immutable unless the user explicitly says `UNLOCK`.
4. For ordinary requests, use PATCH behavior: inspect and modify only the requested scope and its direct dependencies.
5. Do not perform a whole-project re-audit unless the user explicitly says `FULL CHECK`.
6. Preserve the current approved SEO baseline.
7. Carousel modules are frozen individually after verification; do not assume the whole carousel is approved.
8. Update the lock registry when the user explicitly approves or unlocks a module.
