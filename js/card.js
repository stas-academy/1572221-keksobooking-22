// const mapElement = document.querySelector('#map-canvas');
const TYPES = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
};

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const createCard = (({offer,author}) => {
  const addElement = cardTemplate.cloneNode(true);

  addElement.querySelector('.popup__title').textContent = offer.title;
  addElement.querySelector('.popup__text--address').textContent = offer.address;
  addElement.querySelector('.popup__text--price').textContent = offer.price + ' р/ночь';
  addElement.querySelector('.popup__type').textContent = TYPES[offer.type];
  addElement.querySelector('.popup__text--capacity').textContent = offer.rooms + '  комнаты для ' + offer.guests + '  гостей';
  addElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + offer.check_in + ', выезд до ' + offer.check_out;
  addElement.querySelector('.popup__features').textContent = offer.features;
  addElement.querySelector('.popup__description').textContent = offer.description;
  addElement.querySelector('.popup__photos').textContent = offer.photos;
  addElement.querySelector('.popup__avatar').src = author.avatar;

  return addElement;
});

const showOffers = (data) => {
  const similarListFragment = document.createDocumentFragment();

  data.forEach((element) => {
    const component = createCard(element);
    similarListFragment.appendChild(component);
  });
  // mapElement.appendChild(similarListFragment);
}
export {showOffers, createCard};
