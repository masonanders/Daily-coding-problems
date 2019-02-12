const UnitTest = require("../../test/unit-test");
const missingNumber = require("../missingNumber");

const test = new UnitTest(missingNumber);
test.createTestCase({
  description: "returns the missing number of an unsorted array",
  input: [[4, 2, 7, 6, 3, 1], 1, 7],
  output: 5
});
test.createTestCase({
  description: "returns the missing number of an unsorted array",
  input: [[4, 2, 7, 6, 3, 1, 5, 9], 1, 9],
  output: 8
});
test.createTestCase({
  description: "returns the missing number of an unsorted array",
  input: [[4, 8, 7, 6, 3, 5, 9, 11], 3, 11],
  output: 10
});

test.runTests();
