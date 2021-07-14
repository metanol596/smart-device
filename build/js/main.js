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
"use strict";

const popupButton = document.querySelector('.page-header__order-call-button');
const popup = document.querySelector('.popup');
const popupShadowBg = document.querySelector('.page-body__shadow');
const popupCloseButton = popup.querySelector('.popup__close-button');
const popupNameInput = popup.querySelector('.popup__form-name-input');
const popupInputs = popup.querySelectorAll('.for-storage');
const popupForm = popup.querySelector('.popup__form');

const onPopupCloseButtonClick = () => {
  popup.classList.remove('active');
  popupShadowBg.classList.remove('active');
};

const onEscButtonClick = evt => {
  if (evt.key === ('Escape' || 'Esc')) {
    if (popup.classList.contains('active')) {
      evt.preventDefault();
      popup.classList.remove('active');
      popupShadowBg.classList.remove('active');
    }
  }
};

const onPopupClick = evt => {
  if (evt.target && evt.target.closest('.popup') && !evt.target.closest('.popup *')) {
    popup.classList.remove('active');
    popupShadowBg.classList.remove('active');
  }
};

const onPopupButtonClick = () => {
  if (!popup.classList.contains('active')) {
    popup.classList.add('active');
    popupShadowBg.classList.add('active');
    popupNameInput.focus();
    popupInputs.forEach(item => {
      localStorage.setItem(`${item.name}`, `${item.value}`);
      console.log(localStorage.getItem(`${item.placeholder}`));
    });
  } else {
    popupShadowBg.classList.remove('active');
  }
};

for (let key, i = 0; i < localStorage.length; i++) key = localStorage.key(i), console.log(key, ':', localStorage.getItem(key));

popupButton.addEventListener('click', onPopupButtonClick);
popupCloseButton.addEventListener('click', onPopupCloseButtonClick);
popup.addEventListener('click', onPopupClick);
window.addEventListener('keydown', onEscButtonClick);