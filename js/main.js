import './data.js';
import { generateData } from './data.js';
import './card.js';
import {showOffers} from './card.js';

const data = generateData();
showOffers(data);


