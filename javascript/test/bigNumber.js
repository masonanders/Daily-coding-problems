const UnitTest = require("../../test/unit-test");
const bigNumber = require("../bigNumber");

const test = new UnitTest(bigNumber);
test.createTestCase({
  description: "returns the largest number possible with one switch",
  input: [54312],
  output: 54321
});
test.createTestCase({
  description: "makes the right switch between two options",
  input: [53412],
  output: 54312
});
test.createTestCase({
  description: "returns the number if it is already the highest possible",
  input: [54321],
  output: 54321
});
test.createTestCase({
  description: "returns the number if it is a single digit",
  input: [9],
  output: 9
});
test.createTestCase({
  description: "returns null if not positive",
  input: [0],
  output: null
});

test.runTests();
