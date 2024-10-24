function fibs(len) {
	if (len <= 0) return [];
	else if (len == 1) return [0];
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

function fibsRec(len, arr = [0, 1]) {
	if (arr.length >= len) {
		return arr.splice(0, len);
	}

	arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
	return fibsRec(len, arr);
}

// console.log(fibs(1));
// console.log(fibs(2));
// console.log(fibs(8));
// console.log(fibs(15));
// console.log(fibs(7));

console.log(fibsRec(8));
// console.log(fibsRec(1));
// console.log(fibsRec(2));
console.log(fibsRec(3));
// console.log(fibsRec(4));
