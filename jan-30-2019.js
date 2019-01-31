const UnitTest = require("./tests/unit-test");

// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.

function twoNumsEqual(arr, k) {
  const previousNums = new Set();
  for (let i in arr) {
    if (previousNums[k - arr[i]]) return true;
    previousNums.add(arr[i]);
  }
  return false;
}

const test = new UnitTest(twoNumsEqual);
test.createTestCase({ output: true, args: [[10, 15, 3, 7], 10] });
test.createTestCase({ output: false, args: [[10, 15, 3, 7], 11] });
test.createTestCase({ output: false, args: [[99, 50, 1, 70], 150] });
test.createTestCase({ output: true, args: [[100, 1, 50, 70], 150] });
test.createTestCase({ output: true, args: [[5, 1, 20, 10], 21] });
test.createTestCase({ output: true, args: [[5, 1, 20, 10], -5] });
test.runTests();
