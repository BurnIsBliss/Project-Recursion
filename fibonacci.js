function fibs(len) {
	if (len == 1) return [0];
	else if (len == 2) return [0, 1];
	else {
		let fibArray = [0, 1];
		while (fibArray.length < len) {
			let lengthOfArray = fibArray.length;
			fibArray.push(
				fibArray[lengthOfArray - 1] + fibArray[lengthOfArray - 2]
			);
		}
		return fibArray;
	}
}

console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(8));
console.log(fibs(15));
console.log(fibs(7));
