import './data.js';
import { generateData } from './data.js';
import './card.js';
import {showOffers} from './card.js';
const data = generateData();
showOffers(data);
import './form.js';
import {processingForm, typeChange, buttonReset, setUserFormSubmit, adForm} from './form.js';
processingForm();
typeChange();

import { showAlert, resetForm, ERROR_GETTING_DATA } from './util.js'
import { showMessageSuccsess } from './message.js'
import { getData } from './api.js'
import { generateMap, resetMap} from './map.js'

getData(
  (data) => generateMap(data),
  () => {
    showAlert(ERROR_GETTING_DATA)
  });

const resetData = () => {
  resetForm(adForm);
  resetMap();
}
buttonReset.addEventListener('click', resetData);
setUserFormSubmit(showMessageSuccsess);
setUserFormSubmit(resetData);
