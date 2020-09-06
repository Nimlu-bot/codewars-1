function isPrime(num) {
	const max = Math.sqrt(num);
	for (let i = 2; i <= max; i++) {
		if (num % i === 0) {
			return false;
		}
	}
	return num > 1;
}

console.log(isPrime(-5099));