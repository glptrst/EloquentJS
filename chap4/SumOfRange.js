function range(start, end) {
	var array = [];
	for (var i = start; i <= end; i++) {
		array.push(i);
	}
	return array;
}

function sum(array) {
	var sum = 0;
	for (var i = 0; i < array.length; i++) {
		sum += array[i];
	}
	return sum;
}

//BONUS ASSIGNMENT
function range2 (start, end, step) {
    var arr = [];

    if (step === undefined)
        step = 1;

    if (step > 0) {
        for (var i = start; i <= end; i += step) {
            arr.push(i);
        }
    }

    if (step < 0) {
        for (var i = start; i >= end; i += step) {
            arr.push(i);
        }
    }

    return arr;
}
// alternatively
var range2 = function (start, end) {
  var arr = [];

  if (arguments[2] !== undefined) {
      for (var i = start; i >= end; i += arguments[2])
          arr.push(i);
  } else {
      for (var i = start; i <= end; i++)
	  arr.push(i);
  }
  return arr;
}
