// helper is MDN Web Docs

// let getRandomNumber = Math.round(Math.random() * 4);

// console.log(getRandomNumber);

// includes all numbers

const getRandomNumber = function(min , max) {
// Comparison of numbers
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
const getFloatRandomNumber = function(min, max, point) {
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

const All_OFFERS = 10;
const author = {
  avatar: 'img/avatars/user0' + getRandomNumber(1, 8) + '.png',
};
// author;
// console.log(author);
const OFFER = {
  title: 'Проживание',
  price: 6500,
  type: 'house',
  rooms: 2,
  guests: 4,
  checkin: '14:00',
  checkout: '12:00',
  features: [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditioner'],
  description: 'Прекрасный дом отдыха',
  photos: [
    'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg']
};

const locationOffer = function() {
  return {
    x: +getFloatRandomNumber(35.65, 35.7, 5),
    y: +getFloatRandomNumber(139.7, 139.8, 5),
  };
};
// console.log(locationOffer());

