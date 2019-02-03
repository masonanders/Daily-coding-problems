const UnitTest = require("../../test/unit-test");
const productExceptI = require("../jan-31-2019");

const test = new UnitTest(productExceptI);
test.createTestCase({
  description:
    "each index should be the product of the value at all other indicies",
  input: [[1, 2, 3]],
  output: [6, 3, 2]
});
test.createTestCase({
  description:
    "the value at the index of the original array should not be included in the product",
  input: [[2, 3, 4, 5]],
  output: [60, 40, 30, 24]
});
test.createTestCase({
  description: 'should handle one zero',
  input: [[0, 5, 3, 8, 9]],
  output: [1080, 0, 0, 0, 0]
});
test.createTestCase({
  description: 'should handle multiple zeros',
  input: [[0, 5, 3, 0, 9]],
  output: [0, 0, 0, 0, 0]
});
test.createTestCase({
  description: 'should return an empty array if given one',
  input: [[]],
  output: []
});

test.runTests();
