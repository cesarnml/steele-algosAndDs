function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let result = true;
  const freq = {};
  for (let ele of arr2) {
    freq[ele] = (freq[ele] ?? 0) + 1;
  }

  arr1.forEach((num) => {
    if (freq[num] >= 1) {
      freq[num]--;
    } else {
      result = false;
    }
  });
  return result;
}

const value = same([1, 2, 3], [4, 1, 9]);
console.log("value:", value);
const value2 = same([1, 2, 3], [1, 9]);
const value3 = same([1, 2, 1], [4, 4, 1]);
console.log("value3:", value3);
console.log("value2:", value2);
