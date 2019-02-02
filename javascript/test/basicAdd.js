const UnitTest = require("../../test/unit-test");
const basicAdd = require("../basicAdd");

const test = new UnitTest(basicAdd);
test.createTestCase({
  output: 4,
  input: [3, 1],
  description: "3 + 1 = 4"
});
test.createTestCase({
  output: 5,
  input: [3, 1, 1],
  description: "3 + 1 + 1 = 5"
});
test.createTestCase({
  output: 0,
  input: [],
  description: "should return '0' with an empty array"
});

test.runTests();
