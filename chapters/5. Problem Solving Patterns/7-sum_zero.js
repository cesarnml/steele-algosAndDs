function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (right > left) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
}

console.log("1", sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log("2", sumZero([-2, 0, 1, 3]));
console.log("3", sumZero([1, 2, 3]));
