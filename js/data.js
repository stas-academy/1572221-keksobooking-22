import {getRandomNumber, getFloatRandomNumber} from './util.js'

const TITLE = [
  'Дома',
  'Апартаменты',
  'Отель',
];

const PRICE =[
  4500,
  7800,
  9900,
];

const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const ROOMS = [
  1,
  2,
  3,
];

const GUESTS =[
  1,
  2,
  3,
  4,
  5,
  6,
];

const CHECK_IN = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECK_OUT = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES =[
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTION =[
  'Прекрасный вид на море',
  'Прекрасный вид на сад',
  'Прекрасный вид на горы',
];

const PHOTOS =[
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const OFFERS_COUNT = 10;

const getRandomArrayElement = (elements) => {
  return elements[getRandomNumber(0, elements.length - 1)];
};

const getAnnouncement = () => {
  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomNumber(1, 8) + '.png',
    },
    offer: {
      title: getRandomArrayElement(TITLE),
      address: [location.x, location.y],
      price: getRandomArrayElement(PRICE),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomArrayElement(ROOMS),
      guests: getRandomArrayElement(GUESTS),
      check_in: getRandomArrayElement(CHECK_IN),
      check_out: getRandomArrayElement(CHECK_OUT),
      features: getRandomArrayElement(FEATURES),
      description: getRandomArrayElement(DESCRIPTION),
      photos: getRandomArrayElement(PHOTOS),
    },
    location: {
      x: getFloatRandomNumber(35.65, 35.7, 5),
      y: getFloatRandomNumber(139.7, 139.8, 5),
    },
  };
};

const similarAnnouncement = new Array(OFFERS_COUNT).fill(null).map(() => getAnnouncement());
similarAnnouncement;

