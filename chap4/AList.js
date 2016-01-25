function arrayToList (array) {
    var list = {
        value: array[array.length-1],
        rest: null
    }
    
    for (var i = array.length - 2; i >= 0; i--) {
        list = {
            value: array[i],
            rest: list
        }
    }
    
    return list;
}

function listToArray(list) {
    var array = []; 
    
    while(true) {
    	//unshift the value in the array and delete the last element of the list
        array.push(list.value);
        list = list.rest;
        //if rest is null we reached the first element of the list, we do the unshift for the last time
        if (list.rest === null) {
            array.push(list.value);
            break;
        }
    }
    
    return array;
}
//author version (it exactly the same operation but shorter wat of coding it)
function listToArray(list) {
    var array = [];
    
    for (var node = list; node; node = node.rest) {
        array.push(node.value);
    }
    
    return array;
}


function prepend(element, list) {
	var newList = {
		value: element,
		rest: list
	}
	return newList;
}

//basandoci su listToArray
function nth(list, number) {
    var array = [];
    
    for (var node = list; node; node = node.rest) {
        array.push(node.value);
    }
    
    return array[number];
}

//versione ricorsiva
function nthR(list, number) {
    if (number == 0) {
        return list.value;
    }
    else {
        list = list.rest;
        number--;
        return nthR(list, number);
    }
}
//author's version
function nth(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}
