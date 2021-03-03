/*eslint-disable */

// import { showOffers } from './card.js';
// import './card.js';
import { generateData } from './data.js';

const generateMap = generateData();

const PRIMARY_LAT = 35.66650;
const PRIMARY_LNG = 139.79650;

const map = L.map('map-canvas')
  .on('load', () => {
    // console.log('Карта инициализирована');
  })
  .setView({
    lat: PRIMARY_LAT,
    lng: PRIMARY_LNG,
  }, 10);

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

  marker.addTo(map).bindPopup(offersItem), {
    keepInView: true,
  };

  // marker.addTo(map).bindPopup(showOffers(offersItem), {
  //   keepInView: true,
  // });
});











// const points = [
//   {
//     title: 'Футура',
//     lat: 35.76925,
//     lng: 139.71730,
//   },
//   {
//     title: 'Шаверма',
//     lat: 35.76783,
//     lng: 139.61258,
//   },
//   {
//     title: 'Франк',
//     lat: 35.75958,
//     lng: 139.80228,
//   },
//   {
//     title: 'Ginza',
//     lat: 35.77292,
//     lng: 139.91982,
//   },
// ];
// points.forEach(({lat, lng, title}) => {
//   const icon = L.icon({
//     iconUrl: 'img/pin.svg',
//     iconSize: [40, 40],
//     iconAnchor: [20, 40],
//   });

//   const marker = L.marker(
//     {
//       lat,
//       lng,
//     },
//     {
//       icon,
//     },
//   );

//   marker.addTo(map).bindPopup(title);

// });

