function mygcd(x, y) {
	const min = Math.min(x, y);
	let div = 0;
	for (i = 1; i <= min; i++) {
		if (!(x % i) && !(y % i)) div = i
	}
	console.log(div);
}
mygcd(200, 456)