function reverseArray(array) {
	var reversed = [];
	for (var i = array.length - 1; i >= 0; i--) {
		reversed.push(array[i]); 
	}
	return reversed;
}
//different version :
function reverseArray(array) {
	var reversed = [];
	for (var i = 0; i < array.length; i++) {
		reversed.unshift(array[i]);
	}
	return reversed;
}


//reverse array in place (author's code)
function reverseArrayInPlace(array) {
    for (var i = 0; i < array.length / 2; i++) {
        var temp = array[i];
        array[i] = array[array.length - 1 -i];
        array[array.length - 1 -i ] = temp;
    }
    return array;
}
