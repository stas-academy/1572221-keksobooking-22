import './form.js'
import {setUserFormSubmit, getProcessingForm, typeChange} from './form.js';
import './map.js'
import {createMarkers} from './map.js';
import {getData} from './api.js';
import {changeFilter} from './filter.js';
import {debounce} from './util.js';

const DEBOUNSE_DELAY  = 500;

getProcessingForm();
typeChange();
setUserFormSubmit();

getData((data) => {
  createMarkers(data);
  changeFilter(debounce(
    () => createMarkers(data),
    DEBOUNSE_DELAY ,
  ));
});
