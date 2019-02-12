// You are given an unsorted array, and are told that this array contains
// (n - 1) of n consecutive numbers (where the bounds are defined).
// Write a method, findMissingNumber, that finds the missing number in O(N) time

function findSum(min, max) {
  if (max <= min) return min;
  return max + findSum(min, max - 1);
}

function missingNumber(array, min, max) {
  const fullSum = findSum(min, max);
  const arraySum = array.reduce((int, acc) => int + acc);
  return fullSum - arraySum;
}

// Time: O(N)
// Space: O(N)

module.exports = missingNumber;
