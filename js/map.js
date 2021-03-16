/*eslint-disable */

import { createCard } from './card.js';

const PRIMARY_LAT = 35.66650;
const PRIMARY_LNG = 139.79650;
const LOCATION_FLOAT = 5;
const ZOOM = 12;

const adForm = document.querySelector('.ad-form');
const fieldsetsFormAd = adForm.querySelectorAll('fieldset');
const addressForm = document.querySelector('#address');
const mapFilters = document.querySelector('.map__filters');
const filters = mapFilters.querySelectorAll('select, fieldset');

const deactivateForm = () => {
  adForm.classList.add('ad-form--disabled');

  fieldsetsFormAd.forEach((element) => {
    element.disabled = true;
  });
};

deactivateForm();

const activateForm = () => {
  adForm.classList.remove('ad-form--disabled');

  fieldsetsFormAd.forEach((element) => {
    element.disabled = false;
  });
};

const deactivateFilters = () => {
  mapFilters.classList.add('map__filters--disabled');

  filters.forEach((element) => {
    element.disabled = true;
  });
};

deactivateFilters();

const activateFilters = () => {
  mapFilters.classList.remove('map__filters--disabled');

  filters.forEach((element) => {
    element.disabled = false;
  });
};

const map = L.map('map-canvas')
  .on('load', deactivateForm, deactivateFilters)
  .setView({
    lat: PRIMARY_LAT,
    lng: PRIMARY_LNG,
  }, ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon (
  {
    iconUrl: './img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  },
);

const mainMarker = L.marker(
  {
    lat: PRIMARY_LAT,
    lng: PRIMARY_LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainMarker.addTo(map);

mainMarker.on('moveend', () => {
  const lat = mainMarker.getLatLng().lat.toFixed(LOCATION_FLOAT);
  const lng = mainMarker.getLatLng().lng.toFixed(LOCATION_FLOAT);
  addressForm.value = lat + ' , ' + lng;
});

const pinIcon = L.icon(
  {
    iconUrl: './img/pin.svg',
    iconSize: [42, 42],
    iconAnchor: [21, 42],
  },
);
const markersLayer = new L.LayerGroup();

const createMarkers = (data) => {
  markersLayer.clearLayers();
  data
    .slice()
    .forEach((element) => {
      const marker = L.marker(
        {
          lat: element.location.lat,
          lng: element.location.lng,
        },
        {
          icon: pinIcon,
        },
      );
      marker
        .addTo(map)
        .bindPopup(
          createCard(element),
        );
      markersLayer.addLayer(marker);
    });
  markersLayer.addTo(map);
  activateFilters();
  activateForm();
};

export{createMarkers, mainMarker, PRIMARY_LAT, PRIMARY_LNG};
