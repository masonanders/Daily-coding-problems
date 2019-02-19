// Given a list of integers, write a function that returns the largest
// sum of non-adjacent numbers. Numbers can be 0 or negative.

// 0
// 0
// [10, 50, 45, 20, 300];

function largestNonAdjacentSum(array) {
  function sumNonAdjacent(startIdx) {
    let sum = array[startIdx] > 0 ? array[startIdx] : 0;
    for (let i = startIdx + 2; i < array.length; i++) {
      if (array[i] <= 0) continue;
      const [num1, num2, num3] = positiveOrZero(
        array[i],
        array[i + 1],
        array[i + 2]
      );
      if (num1 + num3 > num2) {
        sum += num1;
        i++;
      }
    }
    function positiveOrZero(...nums) {
      return nums.map(num => (num && num > 0 ? num : 0));
    }
    return sum;
  }
  return Math.max(sumNonAdjacent(0), sumNonAdjacent(1));
}

// Time: O(n)
// Space: O(1)

module.exports = largestNonAdjacentSum;
