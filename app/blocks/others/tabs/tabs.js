app.tabs = {
  name: 'tabs',
  init() {
    const tabNav = document.querySelector('.tabsNav');

    if (tabNav === null) return;

    tabNav.addEventListener('click', (e) => {
      const { target } = e;

      if (target.tagName !== 'LI') return;

      const tabNavItemActive = tabNav.querySelector('.tabs__nav-item.is-active');

      if (tabNavItemActive === null) return;

      tabNavItemActive.classList.remove('is-active');

      target.classList.add('is-active');

      const tabsContent = document.querySelectorAll('.tabs__content-item');

      tabsContent.forEach((tabContent) => {
        if (tabContent.dataset.tabContent === target.dataset.tab) {
          tabContent.classList.add('show');
        } else {
          tabContent.classList.remove('show');
        }
      });
    });

    const tabBtns = document.querySelectorAll('.tabs__btn');

    tabBtns.forEach((tabBtn) => {
      tabBtn.addEventListener('click', function () {
        const closestEl = tabBtn.closest('.tabs__content-item');
        const imgWrap = closestEl.lastElementChild;

        if (this.innerText === 'Показать еще статистику') {
          imgWrap.style.maxHeight = `${imgWrap.scrollHeight}px`;
          this.innerText = 'Скрыть статистику';
        } else {
          imgWrap.style.maxHeight = '';
          this.innerText = 'Показать еще статистику';
        }
      });
    });
  },
};
