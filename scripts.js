// plik scripts.js

var a = prompt ("podaj wartość a"),
var b = prompt('podaj wartość b'),
var wynik = a*a + 2 * a * b - b*b

console.log(wynik);

if (wynik > 0) {
	console.log('dodatni')
} 
else
{
	console.log('ujemny')
}

switch (wynik) {
	case 0:
		console.log('wynik równy zero');
		break;
	default:
		console.log('wynik rózny od zera')
}


/*
if (wynik > 0) {
	console.log('dodatni')
} 
else if (wynik < 0) 
{
	console.log('ujemny')
}
else {
	console.log ('wynik jest 0')
}
*/