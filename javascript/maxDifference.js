// Find the max difference of any two integers in an array where the smaller
// comes before the larger of the two

function maxDifference(array) {
  let largestDifference = null;
  let smallestInt = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] === smallestInt) {
      continue;
    } else if (array[i] < smallestInt) {
      smallestInt = array[i];
    } else {
      largestDifference = Math.max(largestDifference, array[i] - smallestInt);
    }
  }
  return largestDifference;
}

// Time: O(N)
// Space: O(1)

module.exports = maxDifference;
