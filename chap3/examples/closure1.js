function wrapValue(n) {
    var localVariable = n;
    return function() {return(localVariable);};
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);

console.log(wrap1());
//-> 1
console.log(wrap2());
//-> 2



//a paramenter is itself a local variable:
function wrapValue(n) {
    return function() {return n;};
}

var wrap1 = wrapValue(1);
wrap1();
//-> 1
