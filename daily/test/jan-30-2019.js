const UnitTest = require("../../test/unit-test");
const twoNumsEqual = require("../jan-30-2019");

const test = new UnitTest(twoNumsEqual);
test.createTestCase({ output: true, input: [[10, 15, 3, 7], 10] });
test.createTestCase({ output: false, input: [[10, 15, 3, 7], 11] });
test.createTestCase({ output: false, input: [[99, 50, 1, 70], 150] });
test.createTestCase({ output: true, input: [[100, 1, 50, 70], 150] });
test.createTestCase({ output: true, input: [[5, 1, 20, 10], 21] });
test.createTestCase({
  output: true,
  input: [[5, 1, 20, -10], -5],
  description: "works with negative numbers"
});
test.runTests();
