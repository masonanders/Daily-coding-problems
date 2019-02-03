// Given an array of integers, find the first missing positive integer in
// linear time and constant space. In other words, find the lowest positive
// integer that does not exist in the array. The array can contain duplicates
// and negative numbers as well.

function firstMissingPosIntWithoutDups(array) {
  let sumOfPositives = 0;
  let maxInt = array[0];
  for (let i in array) {
    if (array[i] > 0) sumOfPositives += array[i];
    if (array[i] > maxInt) maxInt = array[i];
  }
  return sumFromOneToN(maxInt) - sumOfPositives || 1;
}

function sumFromOneToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

function firstMissingPosInt(array) {
  let missingInt = 1;
  let maxInt = array[0];
}

// Time: O(?)
// Space: O(?)

module.exports = firstMissingPosIntWithoutDups;
