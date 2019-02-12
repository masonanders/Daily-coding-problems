const UnitTest = require("../../test/unit-test");
const checksum = require("../checksum");

const test = new UnitTest(checksum);
test.createTestCase({
  description: "returns the checksum",
  input: [[[5, 1, 9, 5], [7, 3], [2, 6, 8]]],
  output: 18
});
test.createTestCase({
  description: "returns 0 when given empty arrays",
  input: [[[], [], []]],
  output: 0
});
test.createTestCase({
  description: "works with a mix of empty and populated arrays",
  input: [[[5, 2], [], [9, 5, 1]]],
  output: 11
});

test.runTests();
