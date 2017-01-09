//choinka


function rysuj(p) {
for ( var i = 1 ; i <= p ; i++) { 
	var star = ''; 
	for (var n = 1; n <= i * 2 - 1; n++) { 
	star += '*'; 
}
	var space = ''; 
	for (var k = 1; k <= p - i; k++) {
	space += ' ';
}
console.log(space + star); 
}
}

rysuj(10)
