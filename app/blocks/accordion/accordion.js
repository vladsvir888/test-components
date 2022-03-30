app.accordion = {
  name: 'Accordion',
  init() {
    const accordionItems = document.querySelectorAll('.accordionItem');

    if (accordionItems.length === 0) return;

    function toggleContent(item) {
      item.classList.toggle('is-active');

      // находим последний дочерний элемент в родителе (то есть контент)
      const accordionContent = item.lastElementChild;

      // если у контента есть max-height, то обнуляем, в ином случае вычисляем его высоту через scrollHeight и добавляем инлайном
      if (accordionContent.style.maxHeight) {
        accordionContent.style.maxHeight = null;
      } else {
        accordionContent.style.maxHeight = `${accordionContent.scrollHeight}px`;
      }
    }

    accordionItems.forEach((accordionItem) => {
      accordionItem.addEventListener('click', () => {
        // находим активный элемент
        const accordionItemActive = document.querySelector('.accordionItem.is-active');

        // если он есть и он не равен текущему (тому, на который произошел клик)
        if (accordionItemActive && accordionItemActive !== accordionItem) {
          // то скрываем
          toggleContent(accordionItemActive);
        }

        toggleContent(accordionItem);
      });
    });
  },
};
