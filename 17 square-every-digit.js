function squareDigits(num) {
	return Number(String(num).split("").map((num) => num * num).join(""))

}

console.log(squareDigits(9119))