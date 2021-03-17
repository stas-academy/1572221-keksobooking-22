const ALERT_SHOW_TIME = 5000;

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

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

const isEscEvent = (evt) => {
  return evt.key === ('Escape' || 'Esc');
};

const isClickEvent = (evt) => {
  return evt.type === 'click';
};

const debounce = (callback, timeout) => {
  let timeWait;
  return () => {
    const context = this;
    const through = function () {
      timeWait = null;
      callback.apply(context)
    }

    clearTimeout(timeWait);

    timeWait = setTimeout(through, timeout);
  };
};

export { showAlert, isEscEvent, isClickEvent, getRandomNumber, getFloatRandomNumber, getRandomArrayElement, debounce };






