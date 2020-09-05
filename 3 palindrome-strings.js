function isPalindrome(line) {
	line = String(line);
	if (line.length == 1) return true;
	for (i = 0; i < line.length / 2; i++) {
		console.log(line[i]);
		console.log(line[line.length - i - 1]);
		if (line[i] != line[line.length - i - 1]) return false;
	}
	return true;
}
console.log(isPalindrome(5432112345));