const firstNames = ['Romain', 'Edouard', 'Jean'];

// forEach apparue en ES5.1 (IE9+)
firstNames.forEach(function feCb(elt, i) {
  console.log(elt, i);
});

// Programmation fonctionnelle
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
