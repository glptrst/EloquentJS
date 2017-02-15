function isEven(number) {
    if (number < 0)
	number = -number; //alternatively it could be used Math.abs() method

    if (number === 0)
	return true;
    else if (number === 1)
	return false;
    else
	return isEven(number -2);
}
