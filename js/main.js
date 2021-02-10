const getRandomNumber = (min , max) => {
  if (!(typeof min === 'number') || !(typeof max === 'number')) {
    return 'Введите число';
  }
  if (min < 0 || max <= 0 || max < min) {
    return 'Неверный диапазон чисел'
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
}
getRandomNumber(0, 100);
// console.log(getRandomNumber(0, 100));

// function with floating point
const getFloatRandomNumber = (min, max, point) => {
  if (!(typeof min === 'number') || !(typeof max === 'number') || !(typeof point === 'number')) {
    return 'Введите число';
  }
  if (min < 0 || max <= 0 || max < min) {
    return 'Неверный диапазон чисел'
  }
  return +(Math.random() * (max - min) + min).toFixed(point);
}
// getFloatRandomNumber(0, 100, 2);
// console.log(getFloatRandomNumber(0, 100, 2));

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

const announcement = () => {
  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomNumber(1, 8) + '.png',
    },
    offer: {
      TITLE: getRandomArrayElement(TITLE),
      ADDRESS: [location.x, location.y],
      PRICE: getRandomArrayElement(PRICE),
      TYPE: getRandomArrayElement(TYPE),
      ROOMS: getRandomArrayElement(ROOMS),
      GUESTS: getRandomArrayElement(GUESTS),
      CHECK_IN: getRandomArrayElement(CHECK_IN),
      CHECK_OUT: getRandomArrayElement(CHECK_OUT),
      FEATURES: getRandomArrayElement(FEATURES),
      DESCRIPTION: getRandomArrayElement(DESCRIPTION),
      PHOTOS: getRandomArrayElement(PHOTOS),
    },
    location: {
      x: +getFloatRandomNumber(35.65, 35.7, 5),
      y: +getFloatRandomNumber(139.7, 139.8, 5),
    },
  };
};
announcement();

const similarAnnouncement = new Array(OFFERS_COUNT).fill(null).map(() => announcement());
similarAnnouncement;
// console.log(similarAnnouncement);

