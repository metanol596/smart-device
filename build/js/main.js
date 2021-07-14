"use strict";

const accordionItems = document.querySelectorAll('.page-footer__accordion-item');
accordionItems.forEach(item => {
  item.addEventListener('click', () => {
    const activeAccordionItem = document.querySelector('.page-footer__accordion-item.active');

    if (activeAccordionItem && activeAccordionItem !== item) {
      activeAccordionItem.classList.toggle('active');
    }

    item.classList.toggle('active');
  });
});
"use strict";

const phoneInput = document.querySelector('#phone');
const maskOptions = {
  mask: '{+7}(000)000-00-00',
  lazy: true,
  placeholderChar: '_'
};
const mask = new IMask(phoneInput, maskOptions);