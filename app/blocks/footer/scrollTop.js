app.scrollTop = {
  name: 'scroll top',
  init() {
    document.getElementById('topBtn').addEventListener('click', () => {
      window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth',
      });
    });
  },
};
