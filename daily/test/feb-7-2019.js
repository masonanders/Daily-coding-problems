const UnitTest = require("../../test/unit-test");
const largestNonAdjacentSum = require("../feb-7-2019");

const test = new UnitTest(largestNonAdjacentSum);
test.createTestCase({
  description: "finds the largest sum of non-adjacent numbers",
  input: [[2, 4, 6, 2, 5]],
  output: 13
});
test.createTestCase({
  description: "when numbers are mixed between positive and negative indices",
  input: [[5, 1, 1, 5]],
  output: 10
});
test.createTestCase({
  description: "works with 0s in the array",
  input: [[0, 6, 3, 2, 0, 0, 9]],
  output: 17
});
test.createTestCase({
  description: "works with negatives in the array",
  input: [[0, 6, 3, -2, 0, 0, 9]],
  output: 15
});

test.runTests();
