function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let val of arr1) {
    if (!frequencyCounter2[val ** 2]) {
      return false;
    }
    if (frequencyCounter1[val] !== frequencyCounter2[val ** 2]) {
      return false;
    }
  }
  return true;
}

const value = same([1, 2, 3], [4, 1, 9]);
console.log("value:", value);
const value2 = same([1, 2, 3], [1, 9]);
const value3 = same([1, 2, 1], [4, 4, 1]);
console.log("value3:", value3);
console.log("value2:", value2);
