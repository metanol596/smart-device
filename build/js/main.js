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