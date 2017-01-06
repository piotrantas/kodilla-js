//choinka


function rysuj(p) {
for ( var i = 1 ; i <= p ; i++) {
  var star = ' ';
  for (var n = 1; n <= i * 2 - 1; n++) {
  	star += ' *';
  }
  console.log(star);
}
}
rysuj(3)
