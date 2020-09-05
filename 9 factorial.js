function factorial(n) {
	if ((n < 0) || (n > 12)) throw "RangeError";
	var result = 1;
	while (n) {
		result *= n--;
	}
	return result;
}