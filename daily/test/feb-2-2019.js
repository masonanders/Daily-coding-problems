const UnitTest = require("../../test/unit-test");
const firstMissingPosInt = require("../feb-2-2019");

const test = new UnitTest(firstMissingPosInt);
test.createTestCase({
  description: "finds the first positive integer in an array",
  input: [3, 4, -1, 1],
  output: 2
});
test.createTestCase({
  description: "can contain duplicates",
  input: [1, 2, 2, 0],
  output: 3
});
test.createTestCase({
  description: "can contain negatives",
  input: [-2, 5, 3, 0, -1, 1, 2],
  output: 4
});
test.createTestCase({
  description: "with all negative integers",
  input: [-1],
  output: 1
});
test.createTestCase({
  description: "with an empty array",
  input: [],
  output: 1
});

test.runTests();
