

//nameTab

var womensNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var mensNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = womensNames.concat(mensNames);

console.log(allNames)

var newName = prompt('podaj imię')

if (allNames.indexOf(newName) == -1) {
	allNames.push(newName)
} else if (allNames.indexOf(newName) != -1) {
	console.log('to imię już jest podane');
	prompt('to imię jest już podane; podaj inne imie')
}

console.log(allNames)
