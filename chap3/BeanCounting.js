function countBs(string) {
	var counter = 0;
	for (var i = 0; i < string.length; i++) {
		if (string.charAt(i) === "B")
			counter++;
	}
	return counter;
}

function countChar(string, letter) {
	var counter = 0; 
	for (var i = 0; i < string.length; i++) {
		if (string.charAt(i) === letter)
			counter++;
	}
	return counter;
}

//WE CAN REWRITE COUNTBS USING THIS LAST FUNCTION
function countBs(string) {
       return countChar(string, "B");
}
