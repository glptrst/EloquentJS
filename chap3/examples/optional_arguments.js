/* In JavaScript if you pass too many arguments, the extra arguments
   are ignored.
   If you pass too few arguments, the missing parameters get assigned
   the value undefined.
   This allows to use "optional arguments".
*/
function power (base, exponent) {
    if (exponent == undefined)
	exponent == 2;
    var result = 1;
    for (var count = 0; count < exponent; count++)
	result *= base;
    return result;
}

console.log(power(4));
//-> 16
console.log(power(4,3));
//-> 64
