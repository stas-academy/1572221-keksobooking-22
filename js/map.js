/*eslint-disable */

import { showOffers, createCard } from './card.js';
import './card.js';
import { generateData } from './data.js';

const generateMap = generateData();

const PRIMARY_LAT = 35.66650;
const PRIMARY_LNG = 139.79650;

const adForm = document.querySelector('.ad-form');
const adFieldset = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const filterForm = mapFilters.childNodes;

const disableForm = () => {
  adForm.classList.add('ad-form--disabled');
  adFieldset.forEach((fieldset) => fieldset.disabled = true);

  mapFilters.classList.add('map__filters--disabled');
  filterForm.forEach((fieldset) => fieldset.disabled = true);
};
disableForm();

const map = L.map('map-canvas')
  .on('load', () => {
    // console.log('Карта инициализирована');
  })
  .setView({
    lat: PRIMARY_LAT,
    lng: PRIMARY_LNG,
  }, 12);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: 'img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: PRIMARY_LAT,
    lng: PRIMARY_LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

// mainPinMarker.on('moveend', (evt) => {
//   console.log(evt.target.getLatLng());
// });

// mainPinMarker.remove();

generateMap.forEach((offersItem) => {
  const pinIcon = L.icon({
    iconUrl: './img/pin.svg',
    iconSize: [42, 42],
    iconAnchor: [21, 42],
  });
  const marker = L.marker(
    {
      lat: offersItem.location.x,
      lng: offersItem.location.y,
    },
    {
      icon: pinIcon,
    },
  );

  marker.addTo(map).bindPopup(createCard(offersItem), {
    keepInView: true,
  });
});





