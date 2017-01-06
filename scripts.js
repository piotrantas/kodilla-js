// plik scripts.js

var name = prompt('Wpisz swoje imię');
alert('Witaj ' + name + ', obliczmy pole trójkąta ');
console.log('Witaj ' + name + ', obliczmy pole trójkąta ');


var a = prompt('Podaj długość podstawy trójkąta'),
	h = prompt('Podaj długość wysokości trójkąta'),
	triangleArea = a * h / 2

console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);

alert('Wynik: ' + triangleArea);

