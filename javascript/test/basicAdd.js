const UnitTest = require("../../test/unit-test");
const basicAdd = require("../basicAdd");

const test = new UnitTest(basicAdd);
test.createTestCase({
  output: 4,
  args: [3, 1],
  description: "3 + 1 = 4"
});
test.createTestCase({
  output: 5,
  args: [3, 1, 1],
  description: "3 + 1 + 1 = 5"
});
test.createTestCase({
  output: 0,
  args: [],
  description: "should return '0' with an empty array",
});

test.runTests();
