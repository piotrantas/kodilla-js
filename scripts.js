//papugi i słonie

var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';
var animalUpperCased = animal.toUpperCase();

console.log(text, animalUpperCased);

var textToTab = text.split(' '); 

textToTab.splice(0, 1, animalUpperCased); 

var fromTabToString = textToTab.join(' '); 

console.log(fromTabToString);

console.log(fromTabToString.substr(0, fromTabToString.length/2));