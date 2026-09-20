(() => {
  const toast = document.createElement('div');
  toast.className = 'core-toast';
  document.body.appendChild(toast);
  let toastTimer = 0;

  const search = document.createElement('div');
  search.className = 'core-overlay core-search';
  search.innerHTML = `
    <section class="core-search-panel" role="dialog" aria-modal="true" aria-label="Поиск">
      <div class="core-search-row">
        <span class="core-search-icon" aria-hidden="true">⌕</span>
        <input class="core-search-input" autocomplete="off" spellcheck="false"
          placeholder="Поиск — индекс подключим после финальной склейки">
        <button class="core-close" type="button" aria-label="Закрыть">×</button>
      </div>
      <div class="core-empty">Сейчас это чистый Carousel Core. Контент и индекс поиска будут подключены после приёмки карусели.</div>
    </section>`;
  document.body.appendChild(search);

  const menu = document.createElement('div');
  menu.className = 'core-overlay core-menu';
  menu.innerHTML = `
    <section class="core-menu-panel" role="dialog" aria-modal="true" aria-label="Меню">
      <div class="core-menu-head"><strong>CAROUSEL CORE</strong><button class="core-close" type="button" aria-label="Закрыть">×</button></div>
      <div class="core-menu-body">
        <button type="button" data-go="1">К карточке 1</button>
        <button type="button" data-go="2">К карточке 2</button>
        <button type="button" data-go="3">К карточке 3</button>
        <button type="button" data-go="4">К карточке 4</button>
        <button type="button" data-go="5">К карточке 5</button>
      </div>
    </section>`;
  document.body.appendChild(menu);

  const showToast = message => {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 1200);
  };
  const closeSearch = () => document.body.classList.remove('core-search-open');
  const closeMenu = () => document.body.classList.remove('core-menu-open');

  window.addEventListener('aiultra:search-request', () => {
    closeMenu();
    document.body.classList.add('core-search-open');
    requestAnimationFrame(() => search.querySelector('input')?.focus());
  });
  window.addEventListener('aiultra:menu-request', () => {
    closeSearch();
    document.body.classList.toggle('core-menu-open');
  });
  window.addEventListener('aiultra:music-toggle', event => {
    showToast(event.detail?.muted ? 'Музыка выключена' : 'Музыка включена');
  });
  window.addEventListener('aiultra:satellite-click', event => {
    if (!event.detail?.action) showToast(`Кнопка ${event.detail?.index || ''} готова к назначению`);
  });

  search.querySelector('.core-close')?.addEventListener('click', closeSearch);
  menu.querySelector('.core-close')?.addEventListener('click', closeMenu);
  search.addEventListener('pointerdown', e => { if (e.target === search) closeSearch(); });
  menu.addEventListener('pointerdown', e => { if (e.target === menu) closeMenu(); });
  menu.querySelectorAll('[data-go]').forEach(button => {
    button.addEventListener('click', () => {
      window.AIUltraScene?.goToSequence?.(Number(button.dataset.go), {source:'core-menu'});
      closeMenu();
    });
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') { closeSearch(); closeMenu(); }
  });
})();