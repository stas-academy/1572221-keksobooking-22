import {sendData} from './api.js'
import {isEscEvent, isClickEvent} from './util.js';
import {mainMarker, PRIMARY_LAT, PRIMARY_LNG} from './map.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;
const MAX_ROOMS = 100;
const MIN_GUESTS = 0;

const adForm = document.querySelector('.ad-form');
const typeOfHousing = adForm.querySelector('#type');
const pricePlaceholder = adForm.querySelector('#price');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');
const titleForm = adForm.querySelector('#title');
const numberOfRooms = adForm.querySelector('#room_number');
const capacityRooms = adForm.querySelector('#capacity');
const buttonReset = adForm.querySelector('.ad-form__reset');
const main = document.querySelector('main');
const successMessage = document.querySelector('#success').content.querySelector('.success');
const errorMessage = document.querySelector('#error').content.querySelector('.error');
const mapFilters = document.querySelector('.map__filters');
const formAd = document.querySelector('.ad-form');
const addressForm = formAd.querySelector('#address');

const PriceOfHousing = {
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
  pricePlaceholder.min = PriceOfHousing[typeOfHousing.value];
  pricePlaceholder.placeholder = PriceOfHousing[typeOfHousing.value];
}

const processingForm = () => {
  typeOfHousing.addEventListener('input', typeChange);
  timeIn.addEventListener('input', checkChange);
  timeOut.addEventListener('input', checkChange);
}

//Валидация

titleForm.addEventListener('input', () => {
  const valueLength = titleForm.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    titleForm.setCustomValidity('Введите еще ' + (MIN_TITLE_LENGTH - valueLength) + ' симв.');
  }
  else if (valueLength > MAX_TITLE_LENGTH) {
    titleForm.setCustomValidity('Удалите ' + (valueLength - MAX_TITLE_LENGTH) +  ' симв.');
  }
  else {
    titleForm.setCustomValidity('');
  }
  titleForm.reportValidity();
});

pricePlaceholder.addEventListener('input', () => {
  if (pricePlaceholder.value > MAX_PRICE) {
    pricePlaceholder.setCustomValidity('Максимальное значение — 1 000 000');
    pricePlaceholder.value = pricePlaceholder.value - (pricePlaceholder.value - MAX_PRICE);
  } else {
    pricePlaceholder.setCustomValidity('');
  }
  pricePlaceholder.reportValidity();
});

const changeCapacity = () => {
  if (numberOfRooms.value < capacityRooms.value && numberOfRooms.value !== MAX_ROOMS && capacityRooms.value !== MIN_GUESTS) {
    numberOfRooms.setCustomValidity('');
    capacityRooms.setCustomValidity('Не может быть гостей больше чем комнат');
  }
  else if (numberOfRooms.value === MAX_ROOMS && capacityRooms.value !== MIN_GUESTS) {
    numberOfRooms.setCustomValidity('');
    capacityRooms.setCustomValidity('Не для гостей');
  }
  else if (capacityRooms.value === MIN_GUESTS && numberOfRooms.value !== MAX_ROOMS) {
    numberOfRooms.setCustomValidity('Только для 100 комнат');
    capacityRooms.setCustomValidity('');
  }
  else {
    numberOfRooms.setCustomValidity('');
    capacityRooms.setCustomValidity('');
  }
  numberOfRooms.reportValidity();
  capacityRooms.reportValidity();
};

numberOfRooms.addEventListener('input', changeCapacity);
capacityRooms.addEventListener('input', changeCapacity);

const resetFormAd = () => {
  formAd.reset();
  mapFilters.reset();
  mainMarker.setLatLng({lat: PRIMARY_LAT, lng: PRIMARY_LNG});
  addressForm.value = PRIMARY_LAT + ' , ' + PRIMARY_LNG;
};

buttonReset.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetFormAd();
});

const closeMessage = (evt) => {
  if (isEscEvent(evt) || isClickEvent(evt)) {
    successMessage.remove();
    errorMessage.remove();
    document.removeEventListener('keydown', closeMessage);
    document.removeEventListener('mousedown', closeMessage);
  }
};

const showSuccessMessage = () => {
  main.append(successMessage);
  resetFormAd();
  document.addEventListener('keydown', closeMessage);
  document.addEventListener('click', closeMessage);
};

const showErrorMessage = () => {
  main.append(errorMessage);
  document.addEventListener('keydown', closeMessage);
  document.addEventListener('click', closeMessage);
}

const setUserFormSubmit = () => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(
      () => showSuccessMessage(),
      () => showErrorMessage(),
      new FormData(evt.target),
    );
  });
};

export {processingForm, typeChange, setUserFormSubmit};
