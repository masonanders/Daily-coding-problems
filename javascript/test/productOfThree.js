const UnitTest = require("../../test/unit-test");
const productOfThree = require("../productOfThree");

const test = new UnitTest(productOfThree);
test.createTestCase({
  description: "finds the largest product of three in an array",
  input: [[1, 2, 3, 4, 5]],
  output: 60
});
test.createTestCase({
  description: "with a single negative",
  input: [[1, 2, 3, 4, -5]],
  output: 24
});
test.createTestCase({
  description: "with multiple negatives",
  input: [[1, 2, 3, -4, -5]],
  output: 60
});
test.createTestCase({
  description: "when multiple negatives don't result in largest product",
  input: [[1, 25, 30, -4, -5]],
  output: 750
});
test.createTestCase({
  description: "returns null when given an array too small",
  input: [[]],
  output: null
});

test.runTests();
