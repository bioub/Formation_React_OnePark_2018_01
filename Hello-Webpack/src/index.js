// Module CommonJS
// const Clock = require('./Horloge');
// Module ES6
import { Horloge } from './Horloge';

const divElts = Array.from(document.body.querySelectorAll('.horloge'));
const horloges = divElts.map((divElt) => new Horloge(divElt));