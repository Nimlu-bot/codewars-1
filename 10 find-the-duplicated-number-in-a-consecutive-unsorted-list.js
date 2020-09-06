function findDup(arr) {

	duplicateValue = +arr.filter((item, index) => arr.indexOf(item) !== index);


	return duplicateValue;
}

findDup([1, 7, 24, 3, 5, 2, 4, 7, 9, 33]);

