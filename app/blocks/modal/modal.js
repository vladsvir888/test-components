app.modal = {
  name: 'modal',
  init() {
    const modalBtns = document.querySelectorAll('[data-modal]');
    const closeBtns = document.querySelectorAll('.closeBtn');
    const modalOverlays = document.querySelectorAll('.modal-overlay');

    function pressedEscHandler(e) {
      if (e.key === 'Escape') {
        document.querySelector('.modal-overlay.is-active').classList.remove('is-active');
        document.body.classList.remove('no-scroll');
      }

      document.body.removeEventListener('keydown', pressedEscHandler);
    }

    function openModal(modal) {
      if (modal === null) return;

      modal.classList.add('is-active');
      document.body.classList.add('no-scroll');

      document.body.addEventListener('keydown', pressedEscHandler);
    }

    function closeModal(modal) {
      if (modal === null) return;

      modal.classList.remove('is-active');
      document.body.classList.remove('no-scroll');

      document.body.removeEventListener('keydown', pressedEscHandler);
    }

    modalBtns.forEach((modalBtn) => {
      modalBtn.addEventListener('click', (e) => {
        e.preventDefault();

        const modal = document.querySelector(modalBtn.dataset.modal); // '#modalOrder'

        openModal(modal);
      });
    });

    closeBtns.forEach((closeBtn) => {
      closeBtn.addEventListener('click', () => {
        const modal = closeBtn.closest('.modal-overlay');

        closeModal(modal);
      });
    });

    modalOverlays.forEach((modalOverlay) => {
      modalOverlay.addEventListener('click', (e) => {
        if (e.target.classList.contains('is-active')) {
          closeModal(e.target);
        }
      });
    });
  },
};
