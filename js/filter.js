const DEFAULT_VALUE = 'any';

const Price = {
  LOW: 10000,
  HIGH: 50000,
};

const mapFilters = document.querySelector('.map__filters');
const housingType = mapFilters.querySelector('#housing-type');
const housingRooms = mapFilters.querySelector('#housing-rooms');
const housingPrice = mapFilters.querySelector('#housing-price');
const housingGuests = mapFilters.querySelector('#housing-guests');
const housingFeatures = mapFilters.querySelector('#housing-features');

const filterFeatures = (data) => {
  const checkedFeatures = housingFeatures.querySelectorAll('input:checked');

  return Array.from(checkedFeatures).every((input) => {
    return data.offer.features.includes(input.value);
  });
};

const filterPrice = (data) => {
  switch (housingPrice.value) {
    case 'low':
      return data.offer.price < Price.LOW;
    case 'middle':
      return data.offer.price >= Price.LOW && data.offer.price < Price.HIGH;
    case 'high':
      return data.offer.price >= Price.HIGH;
    default:
      return true;
  }
};

const getFilter = (data) => {

  if ((data.offer.type === housingType.value || housingType.value === DEFAULT_VALUE)
  && (data.offer.rooms === +housingRooms.value || housingRooms.value === DEFAULT_VALUE)
  && (filterPrice(data) || housingPrice.value === DEFAULT_VALUE)
  && (data.offer.guests === +housingGuests.value || housingGuests.value === DEFAULT_VALUE)
  && (filterFeatures(data))
  ) {
    return data;
  }
  return false;
};

const changeFilter = (filterAd) => {
  mapFilters.addEventListener('change', () => {
    filterAd();
  });
};

export {getFilter, changeFilter};
