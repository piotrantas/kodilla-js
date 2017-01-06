

//getTriangleArea

	function getTriangleArea (a, h) {
		if ((a === 0) || (h === 0)) {
			return "nieprawidłowe dane"
		}
		else {
			var result = a*h/2;
			return result;
		}
	}

		
console.log( getTriangleArea(10,6) );
console.log( getTriangleArea(10,15) );
console.log( getTriangleArea(10,0) );



