const phoneInput = document.querySelector('#phone');

const maskOptions = {
  mask: '{+7}(000)000-00-00',
  lazy: true,
  placeholderChar: '_'
};

const mask = new IMask(phoneInput, maskOptions);
