function findShort(s) {

	let arr = s.split(" ").sort(function (a, b) {
		return a.length - b.length;
	});
	return arr[0].length;
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));