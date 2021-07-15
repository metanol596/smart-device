const phoneInputs = document.querySelectorAll(`input[type='tel']`);

const maskOptions = {
  mask: '{+7}(000)000-00-00',
  lazy: true
};

phoneInputs.forEach((item) => {
  const mask = new IMask(item, maskOptions);
})
