QA FIX

Root cause of black screen: V35.10 ZIP omitted the assets/ directory while index.html still awaited five raster textures during boot. The loader caught the missing files, showed «Не удалось загрузить тестовые растровые карточки.» and returned before scene initialization.

Fix: copied the original V35 card-1.jpg … card-5.jpg into assets/. index.html is unchanged from V35.10.
