//papugi i słonie

var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.'
var animal = 'Zielone słonie'
var animalUpperCased = animal.toUpperCase();

console.log(text, animalUpperCased)

var textCharsAfter = text.replace('Papugi', animalUpperCased);

console.log(textCharsAfter)

console.log(textCharsAfter.substr(0, 45))

