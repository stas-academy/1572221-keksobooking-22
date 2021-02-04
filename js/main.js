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
getFloatRandomNumber(0, 100, 2);
// console.log(getFloatRandomNumber(0, 100, 2));
