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
    	//push the first value in the array and delete the element of the list
        array.push(list.value);
        list = list.rest;
        //if rest is null we reached the last element of the list
        if (list.rest === null) {
            array.push(list.value);
            break;
        }
    }
    
    return array;
}
//Author's version (exactly the same operation but shorter way of coding it)
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

//On the grounds of listToArray
function nth(list, number) {
    var array = [];
    
    for (var node = list; node; node = node.rest) {
        array.push(node.value);
    }
    
    return array[number];
}

//Recursive version
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
//Author's version
function nth(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}
