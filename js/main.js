import './form.js'
import {setUserFormSubmit, processingForm, typeChange} from './form.js';
import './map.js'
import {createMarkers} from './map.js';
import {getData} from './api.js';

processingForm();
typeChange();
setUserFormSubmit();

getData((data) => {
  createMarkers(data);
});
