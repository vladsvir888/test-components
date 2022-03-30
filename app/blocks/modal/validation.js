app.validation = {
  name: 'validation',
  init() {
    const forms = document.querySelectorAll('.form');

    if (forms.length === 0) return;

    const name = document.getElementById('name');
    const phone = document.getElementById('phone');
    const email = document.getElementById('email');

    if (phone) {
      IMask(phone, {
        mask: '(+{56} 0) 0000 0000',
      });
    }

    function showError(input) {
      input.closest('.form-wrap__input').classList.add('error');
    }

    function showSuccess(input) {
      input.closest('.form-wrap__input').classList.remove('error');
    }

    function isEmail(input) {
      if (input === '') return true;

      // eslint-disable-next-line max-len
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input);
    }

    function checkInputs() {
      if (name.value.trim() === '') {
        showError(name);
      } else {
        showSuccess(name);
      }

      if (phone.value.trim() === '' || phone.value.length < 17) {
        showError(phone);
      } else {
        showSuccess(phone);
      }

      if (!isEmail(email.value.trim())) {
        showError(email);
      } else {
        showSuccess(email);
      }
    }

    forms.forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();

        checkInputs();
      });
    });

    name.addEventListener('input', () => {
      if (!/^[A-Za-z\s]*$/.test(name.value)) {
        name.value = name.value.replace(/[0-9]/g, '');
      }
    });
  },
};
