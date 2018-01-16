const firstNames = ['Romain', 'Edouard', 'Jean'];

// forEach apparue en ES5.1 (IE9+)
firstNames.forEach(function feCb(elt, i) {
  console.log(elt, i);
});

Array.prototype.each = function(cb) {
  for (let i=0; i<this.length; i++) {
    cb(this[i], i, this);
  }
};

firstNames.each(function feCb(elt, i) {
  console.log(elt, i);
});

// Programmation fonctionnelle (ES5)
firstNames.filter((elt, i) => elt.length < 7)
          .map((elt) => elt.toUpperCase())
          .forEach((elt) => console.log(elt));

console.log('end');

// pile d'appels
// ^
// |
// |
// |
// |
// |feCb-feCb-feCb =>     =>  =>-=>
// |forEach        filter-map-forEach clEnd
// +---------------------------------------------------------> temps
