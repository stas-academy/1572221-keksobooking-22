import './data.js';
import { generateData } from './data.js';
import './card.js';
import {showOffers} from './card.js';
const data = generateData();
showOffers(data);
import './form.js';
import {processingForm, typeChange} from './form.js';
processingForm();
typeChange();


