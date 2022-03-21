app.select = {
  name: 'select',
  init() {
    const selects = document.querySelectorAll('.select');

    if (selects.length === 0) return;

    function toggleSelect(select) {
      select.classList.toggle('is-active');
    }

    selects.forEach((select) => {
      select.addEventListener('click', (e) => {
        // эта проверка нужна, чтобы выпадающий список не закрывался при клике на пустую область в нем
        if (e.target.classList.contains('select__dropdown-inner')) return;

        const selectActive = document.querySelector('.select.is-active');

        if (selectActive && selectActive !== select) {
          toggleSelect(selectActive);
        }

        toggleSelect(select);
      });
    });

    const selectWraps = document.querySelectorAll('.select__dropdown-inner');

    selectWraps.forEach((selectWrap) => {
      selectWrap.addEventListener('click', (e) => {
        const { target } = e;

        if (!target.dataset.type) return;

        const attr = target.getAttribute('data-type');

        const closestEl = target.closest('.select');

        closestEl.firstElementChild.setAttribute('data-type', attr);
        closestEl.firstElementChild.innerText = attr;
      });
    });
  },
};
