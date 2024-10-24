function mergeSort(arr) {
	if (arr.length === 1) return arr;
	const midPoint = Math.floor(arr.length / 2);
	const leftArr = mergeSort(arr.slice(0, midPoint));
	const rightArr = mergeSort(arr.slice(midPoint, arr.length));
	return merge(leftArr, rightArr);
}

function merge(leftArray, rightArray) {
	const result = [];
	let x = 0,
		y = 0;
	while (x < leftArray.length && y < rightArray.length) {
		if (leftArray[x] < rightArray[y]) {
			result.push(leftArray[x]);
			x += 1;
		} else {
			result.push(rightArray[y]);
			y += 1;
		}
	}

	while (x < leftArray.length) {
		result.push(leftArray[x]);
		x += 1;
	}

	while (y < rightArray.length) {
		result.push(rightArray[y]);
		y += 1;
	}

	return result;
}

console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
