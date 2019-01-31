// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

function twoNumsEqual(arr, k) {
  const previousNums = new Set();
  for (let i in arr) {
    const currNum = arr[i];
    const pairNum = k - currNum;
    if (previousNums.has(pairNum)) return true;
    previousNums.add(currNum);
  }
  return false;
}

// Time: O(n)
// Space: O(n)

module.exports = twoNumsEqual;
