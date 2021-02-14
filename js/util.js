const getRandomNumber = (min , max) => {
  if (!(typeof min === 'number') || !(typeof max === 'number')) {
    return 'Введите число';
  }
  if (min < 0 || max <= 0 || max < min) {
    return 'Неверный диапазон чисел'
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getFloatRandomNumber = (min, max, point) => {
  if (!(typeof min === 'number') || !(typeof max === 'number') || !(typeof point === 'number')) {
    return 'Введите число';
  }
  if (min < 0 || max <= 0 || max < min) {
    return 'Неверный диапазон чисел'
  }
  return +(Math.random() * (max - min) + min).toFixed(point);
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomNumber(0, elements.length - 1)];
};

export {getRandomNumber, getFloatRandomNumber, getRandomArrayElement};
