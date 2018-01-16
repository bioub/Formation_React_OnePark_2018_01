// des objets existants au niveau du langage
console.log(Math.PI);
console.log(typeof Math); // object
console.log(typeof JSON); // object

// au niveau de Node.js
console.log(typeof exports); // object
console.log(typeof process); // object
console.log(typeof global); // object

// au niveau du navigateur
console.log(typeof document); // object
console.log(typeof navigator); // object
console.log(typeof window); // object

// au niveau du Node + navigateur
console.log(typeof console); // object

// les objets sont extensibles
console.log(typeof Math.sum); // undefined
Math.sum = (a, b) => a + b; // ajouter
console.log(Math.sum(1, 2)); // 3
Math.sum = (a, b) => Number(a) + Number(b); // modifier
console.log(Math.sum('1', '2')); // 3
delete Math.sum // supprimer

// Monkey Patch
const pileOuFace = () => Math.random() > 0.5 ? 'pile' : 'face';
const randomBk = Math.random;
Math.random = () => 0.75;
console.log(pileOuFace()); // pile
Math.random = () => 0.25;
console.log(pileOuFace()); // face
Math.random = randomBk;

// Pour accéder au contenu (clés)
console.log(Math.PI);
// ou []
console['log'](Math['PI']);
const method = 'log';
const key = 'PI';
console[method](Math[key]);

// si besoin de nouveau objets 3 cas
// 1 - object literal : créé une seule fois (ou si très simple à créer)
// 2 - factory function : créé plusieurs fois (sans méthodes)
// 3 - constructor function : créé plusieurs fois (avec méthodes)

const config = {
  host: 'localhost',
  port: '8080',
  get apiUrl() { // ES5
    return 'http://' + this.host + ':' + this.port
  }
};

for (let key in config) {
  console.log('key : ', key);
  const value = config[key];
  console.log('value : ', value)
}

const json = JSON.stringify(config);
// .... réseau ....
const configFromJson = JSON.parse(json);

console.log(config.apiUrl); // http://localhost:8080

// 2 - factory
function getCoords(x, y, z) {
  x = x || 0;
  y = y || 0;
  z = z || 0;
  return {
    x: x,
    y: y,
    z: z,
    sum() { // Mauvaise pratique
      return this.x + this.y + this.z;
    },
  };
}

const getCoordsES6 = (x = 0, y = 0, z = 0) => ({x, y, z});

const coords1 = getCoords(10, 20);
console.log(coords1.x); // 10
console.log(coords1.y); // 20
console.log(coords1.z); // 0

const coords2 = getCoords(10, 20);
console.log(coords2.x); // 10
console.log(coords2.y); // 20
console.log(coords2.z); // 0

console.log(coords1.sum() === coords2.sum()); // true
console.log(coords1.sum === coords2.sum); // false

// 3 - constructor
// function Contact(prenom) {
//   new.target === Contact // ES6
//   this._prenom = prenom;
// }

// Contact.prototype.hello = function() {
//   return 'Bonjour je suis ' + this._prenom;
// };

// en ES6
class Contact {
  constructor(prenom) {
    this._prenom = prenom;
  }
  hello() {
    return 'Bonjour je suis ' + this._prenom;
  }
}

Contact.prototype.bye = function() {

};

const romain = new Contact('Romain');
console.log(typeof romain); // object
console.log(romain.hello());
console.log(romain.hasOwnProperty('_prenom')); // true
console.log(romain.hasOwnProperty('hello')); // false
