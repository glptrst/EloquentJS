var size = 10; 
//create string for Even rows
stringEven = "";
for (var i = 0; i < size; i++) {
	stringEven += "# ";
}
//create string for Odd rows
stringOdd = ""; 
for (var i = 0; i < size; i++) {
	stringOdd += " #";
}
//print 
for (var i = 0; i < size; i++) {
	if ( i % 2 != 0) {
		console.log(stringOdd);
	}
	else { 
		console.log(stringEven);
	}
}
