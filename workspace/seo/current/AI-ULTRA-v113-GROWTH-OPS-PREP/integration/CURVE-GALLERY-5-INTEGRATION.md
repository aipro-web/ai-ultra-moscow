# AI ULTRA v107 — Curve Gallery 5 integration contract

Цель: Curve Gallery 5 остаётся source of truth для wheel/scroll/drag/swipe/inertia/damping/camera/card transforms. SEO CORE не переносится в WebGL и не рисуется в CanvasTexture.

## Склейка
1. Оставить весь существующий engine Curve Gallery 5 без рефакторинга.
2. Подключить `curve-gallery-5.routes.json` как единственный mapping `cardId -> URL`.
3. На карточке хранить `cardId`; визуальный raster/texture живёт в сцене, SEO-текст — в HTML страницах.
4. Клик/тап CTA вызывает route navigation, а сцена может сначала ускорить поток/сфокусировать нужную карточку и только затем менять History API URL.
5. Swipe/drag никогда не открывает route: tap threshold остаётся ответственностью interaction state machine сцены.
6. Для прямого захода поисковика/пользователя каждый URL уже имеет самостоятельный `index.html`; WebGL не является условием индексации.
7. Не дублировать H1/FAQ/длинные SEO-тексты в WebGL. В сцене — короткий UI copy; canonical content — HTML.
8. Все overlay/decor layers сцены: `pointer-events:none`; интерактивные CTA: `pointer-events:auto`.

## Событие
Adapter отправляет `aiultra:route` с `{cardId, route}`. Scene/router может слушать его для синхронизации focused card и URL.

## Файлы
- `curve-gallery-5.routes.json` — curated cards + полный реестр SEO routes.
- `curve-gallery-5.adapter.js` — маленький optional ES-module adapter, не подключён к SEO страницам.
- SEO HTML помечен `data-seo-route` и `data-page-id` на `<body>` для deterministic hydration/mount.
