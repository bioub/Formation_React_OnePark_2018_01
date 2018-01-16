
setTimeout(function st1() {
  console.log('Hello 1');
  setTimeout(function st3() {
    console.log('Hello 3');
  }, 1000);
}, 1000);

setTimeout(function st2() {
  console.log('Hello 2');
}, 1000);

Array.prototype.eachAsync = function(cb) {
  for (let i=0; i<this.length; i++) {
    setTimeout(cb, 0, this[i], i, this);
  }
};

console.log('end');

// pile d'appels
// ^
// |
// |
// |
// |
// |                             idle  cl1-setTimeout cl2        cl3
// |setTimeout-setTimeout-clEnd ...... st1            st2 ...... st3
// +--------------------------------------------------------------------> temps
//
// file d'attente  :
