app.slider = {
  name: 'Слайдер',
  init() {
    const slider = document.querySelector('.slider');
    const slides = slider.querySelectorAll('.slider__slide');
    const prev = document.querySelector('.slider__btn--prev');
    const next = document.querySelector('.slider__btn--next');
    let currSlide = 0;
    const maxSlide = slides.length;

    /* Function to go to slide based on index number provided as argument  */
    const goToSlide = function (slide = 1) {
      slides.forEach((s, i) => {
        s.style.transform = `translatex(${100 * (i - slide)}%)`;
      });
    };

    const nextSlide = function () {
      if (currSlide === maxSlide - 1) {
        currSlide = 0;
      } else {
        currSlide++;
      }

      goToSlide(currSlide);
    };

    const prevSlide = function () {
      if (currSlide === 0) {
        currSlide = maxSlide - 1;
      } else {
        currSlide--;
      }
      goToSlide(currSlide);
    };

    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);

    const init = function () {
      goToSlide(0);
    };

    init();
  },
};
