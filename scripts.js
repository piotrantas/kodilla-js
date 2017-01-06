//dodaj lista



var list = document.getElementById('Lista');
var add = document.getElementById('addElem');
var wiersz = document.getElementsByTagName('li');


add.addEventListener('click', 
	function() { 
		list.innerHTML += '<li>item ' + wiersz.length + '</li>' ;
		
	 })

	

