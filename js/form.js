const adForm = document.querySelector('.ad-form');
const typeOfHousing = adForm.querySelector('#type');
const pricePlaceholder = adForm.querySelector('#price');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');

const priceOfHousing = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
}

const checkChange = (evt) => {
  timeOut.value = evt.target.value;
  timeIn.value = evt.target.value;
}

const typeChange = () => {
  pricePlaceholder.min = priceOfHousing[typeOfHousing.value];
  pricePlaceholder.placeholder = priceOfHousing[typeOfHousing.value];
}

const processingForm = () => {
  typeOfHousing.addEventListener('input', typeChange);
  timeIn.addEventListener('input', checkChange);
  timeOut.addEventListener('input', checkChange);
}

export {processingForm, typeChange};
