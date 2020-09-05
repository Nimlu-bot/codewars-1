function cake(x, y) {
	let count = 0;
	let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
	for (i = 0; i < y.length; i++) {
		if (i % 2) count += alphabet.indexOf(y[i].toLowerCase()) + 1;
		else count += y.charCodeAt(i);

	}
	if (Math.ceil(0.7 * x) > count) return ("That was close!");
	return ("Fire!")
}

cake(799, "skespccfi");