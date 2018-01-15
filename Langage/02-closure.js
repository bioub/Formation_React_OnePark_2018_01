function externe(msg) {
  // Portée de closure (sauvegardée)
  // 1 / Une fonction dans une portée (block ou function externe)
  // 2 / La fonction interne peut être appelée en dehors
  function interne() {
    console.log(msg);
  }
  return interne;
}

const helloFct = externe('Hello');

helloFct();

// Dans 1s : 3 3 3
for (var i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// Dans 1s : 0 1 2
for (var i=0; i<3; i++) {
  setTimeout(externe(i), 1000);
}

// Dans 1s : 0 1 2
for (let i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}
