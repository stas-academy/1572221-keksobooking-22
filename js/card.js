const TypeOfHousing = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
};

const cardTemplate = document.querySelector('#card').content.querySelector('.popup');

const createCard = (cardAds) => {
  const addElement = cardTemplate.cloneNode(true);
  const cardPhotos = addElement.querySelector('.popup__photos');
  const photo = addElement.querySelector('.popup__photo');

  const basicPhotos = () => {
    cardPhotos.innerHTML = '';
    cardAds.offer.photos.forEach((item, i) => {
      photo.src = cardAds.offer.photos[i];
      cardPhotos.appendChild(photo.cloneNode(true));
    });
  };

  addElement.querySelector('.popup__title').textContent = cardAds.offer.title;
  addElement.querySelector('.popup__text--address').textContent = cardAds.offer.address;
  addElement.querySelector('.popup__text--price').textContent = cardAds.offer.price + ' р/ночь';
  addElement.querySelector('.popup__type').textContent = TypeOfHousing[cardAds.offer.type];
  addElement.querySelector('.popup__text--capacity').textContent = cardAds.offer.rooms + '  комнаты для ' + cardAds.offer.guests + '  гостей';
  addElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + cardAds.offer.checkin + ', выезд до ' + cardAds.offer.checkout;
  addElement.querySelector('.popup__description').textContent = cardAds.offer.description;
  addElement.querySelector('.popup__avatar').src = cardAds.author.avatar;

  basicPhotos();

  return addElement;
};

export {createCard};
