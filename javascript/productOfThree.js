// Find the largest product of three numbers in an array

function storeNumbers(quantity, comparator) {
  const nums = new Array(quantity);
  return function(newNum) {
    if (newNum || newNum === 0) {
      for (let i = 0; i < quantity; i++) {
        if (nums[i] === 0 || !nums[i] || comparator(newNum, nums[i])) {
          nums.splice(i, 0, newNum);
          nums.pop();
          return nums;
        }
      }
    }
    return nums;
  };
}

function productOfThree(array) {
  if (array.length < 3) return null;
  const largestThree = storeNumbers(3, (newNum, oldNum) => newNum > oldNum);
  const smallestTwo = storeNumbers(2, (newNum, oldNum) => newNum < oldNum);
  for (let i in array) {
    largestThree(array[i]);
    smallestTwo(array[i]);
  }
  return Math.max(
    largestThree().reduce((num, acc) => num * acc),
    smallestTwo().reduce((num, acc) => num * acc) * largestThree()[0]
  );
}

// Time: O(N)
// Space: O(1)

module.exports = productOfThree;
