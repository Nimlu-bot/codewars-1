function positiveSum(arr) {

	let arrSumm = arr.filter((element) => element > 0)
	if (arrSumm[0] == undefined) return 0;

	return arrSumm.reduce((a, b) => a + b);



}
console.log(positiveSum([]))
