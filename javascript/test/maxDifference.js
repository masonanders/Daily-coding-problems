const UnitTest = require("../../test/unit-test");
const maxDifference = require("../maxDifference");

const test = new UnitTest(maxDifference);
test.createTestCase({
  description:
    "finds the largest difference of two numbers where the smaller comes first",
  input: [[1, 2, 3, 4, 5]],
  output: 4
});
test.createTestCase({
  description: "with an unordered array",
  input: [[6, 2, 4, 3, 7, 1]],
  output: 5
});
test.createTestCase({
  description: "with some negative numbers",
  input: [[6, -2, 4, 3, -7, 1]],
  output: 8
});
test.createTestCase({
  description: "with all negative numbers",
  input: [[-5, -3, -4, -1, -7]],
  output: 4
});
test.createTestCase({
  description: "return null when array is too small",
  input: [[1]],
  output: null
});
test.createTestCase({
  description: "return null when array is is in descending order",
  input: [[5, 4, 3, 2, 1]],
  output: null
});
test.createTestCase({
  description: "return null when all numbers are equal",
  input: [[2, 2, 2, 2, 2]],
  output: null
});

test.runTests();
