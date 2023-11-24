function maxSum(arr, num) {
  if (arr.length < num) {
    return null;
  }

  let left = 0;
  let right = num - 1;
  let maxSum = 0;
  let tempSum = 0;

  for (let i = left; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  const finalLeftIndex = arr.length - num;

  while (left < finalLeftIndex) {
    left++;
    right++;
    console.log("left:", left);
    console.log("right:", right);
    tempSum = tempSum - arr[left - 1] + arr[right];
    console.log("tempSum:", tempSum);
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
