// You are given a 2D array of random integers. Your goal is to calculate the
// checksum of these integers. For each row, determine the difference between
// the largest value and the smallest value; the checksum is the sum of all
// these differences.

function findMaxAndMin(array) {
  let min = array[0],
    max = array[0];
  for (let i in array) {
    const int = array[i];
    if (int > max) max = int;
    if (int < min) min = int;
  }
  return [max, min];
}

function checksum(tdArray) {
  let sum = 0;
  tdArray.forEach(row => {
    if (row.length) {
      let [max, min] = findMaxAndMin(row);
      sum += max - min;
    }
  });
  return sum;
}

// Time: O(N)
// Space: O(1)

module.exports = checksum;
