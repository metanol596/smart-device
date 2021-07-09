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

const MOBILE_ONLY_WIDTH = 767;
const CONSULTATION_BUTTON_TEXT = 'Получить бесплатную консультацию';
const CONSULTATION_BUTTON_TEXT_MOBILE = 'Бесплатная консультация';
const consultaionButton = document.querySelector('.promo a');

if (document.documentElement.clientWidth <= MOBILE_ONLY_WIDTH) {
  consultaionButton.textContent = CONSULTATION_BUTTON_TEXT_MOBILE;
} else {
  consultaionButton.textContent = CONSULTATION_BUTTON_TEXT;
}