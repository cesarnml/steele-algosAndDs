function uniqueValues(arr) {
  let first = 0;
  let second = 1;

  if (arr.length <= 1) {
    return arr.length;
  }

  while (second <= arr.length - 1) {
    if (arr[first] === arr[second]) {
      second++;
    } else {
      first++;
      arr[first] = arr[second];
      second++;
    }
  }
  return first + 1;
}

console.log(uniqueValues([-1, -1, 0, 1, 1, 1, 2, 3, 3, 4, 4, 4, 5]));
console.log(uniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(uniqueValues([]));
console.log(uniqueValues([1]));
console.log(uniqueValues([-2, -1, -1, 0, 1]));
