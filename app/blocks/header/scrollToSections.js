app.scrollToSections = {
  name: 'scroll to sections',
  init() {
    const menuLinks = document.querySelectorAll('.menu__link');

    if (menuLinks.length === 0) return;

    menuLinks.forEach((menuLink) => {
      menuLink.addEventListener('click', (e) => {
        e.preventDefault();

        const href = menuLink.getAttribute('href');

        const targetSection = document.querySelector(href);

        if (targetSection === null) return;

        targetSection.scrollIntoView({
          block: 'start',
          behavior: 'smooth',
        });
      });
    });
  },
};
