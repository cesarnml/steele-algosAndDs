// Divide and Conquer - countZeroes
// Given an array of 1s and 0s which has all 1s first followed by all 0s,
// write a function called countZeroes, which returns the number of zeroes in the array.

// Time Complexity - O(log n)
function countZeroes(arr) {
  if (arr.length === 0) return 0;

  let low = 0;
  console.log("low:", low);
  let high = arr.length - 1;
  console.log("high:", high);

  while (high > low) {
    console.log("low:", low);
    console.log("high:", high);
    let middle = Math.floor((high - low) / 2);
    console.log("middle:", middle);
    if (arr[middle] === 0) {
      high = middle - 1;
      console.log("low:", low);
    } else {
      low = middle + 1;
      console.log("high:", high);
    }
  }
  console.log(low, high);
  if (arr[low] === 0) {
    return arr.length - low + 1;
  }
}

console.log(countZeroes([1, 1, 1, 1, 1, 0])); // 1
// console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
// console.log(countZeroes([1, 1, 1, 0, 0, 0])); // 3
// console.log(countZeroes([1, 1, 0, 0, 0, 0])); // 4
// console.log(countZeroes([1, 0, 0, 0, 0, 0])); // 5
// console.log(countZeroes([0, 0, 0])); // 3
// console.log(countZeroes([1, 1, 1, 1])); // 0
// console.log(countZeroes([1, 0])); // 1
// console.log(countZeroes([0])); // 1
// console.log(countZeroes([])); // 0
