var isAnagram = function (test, original) {
	return test.toUpperCase().split("").sort().join("") === original.toUpperCase().split("").sort().join("");

};
isAnagram("Buckethead", "DeathCubeK");