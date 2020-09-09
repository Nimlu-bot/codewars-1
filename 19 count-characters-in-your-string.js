function count(string) {
	let obj = {}
	let i = 0;
	let key;
	for (i = 0; i <= string.length - 1; i++) {
		console.log(i);
		if (obj.hasOwnProperty(string[i])) {
			obj[string[i]] = obj[string[i]] + 1
		}
		else obj[string[i]] = 1;

	}
	return obj;
}


console.log(count("qywerty"));