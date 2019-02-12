const UnitTest = require("../../test/unit-test");
const magicIndex = require("../magicIndex");

const test = new UnitTest(magicIndex);
test.createTestCase({
  description: "returns the magic index of an array",
  input: [[-4, -2, 1, 6, 6, 6, 6, 10]],
  output: 6
});
test.createTestCase({
  description: "returns the left most magic index if more than one exists",
  input: [[-4, -2, 2, 6, 6, 6, 6, 10]],
  output: 2
});
test.createTestCase({
  description: "finds correct answer for very long array",
  input: [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 13, 14, 14, 15, 16, 17, 18]
  ],
  output: 13
});
test.createTestCase({
  description: "returns -1 if no magic index exists",
  input: [[-4, -2, 1, 6, 6, 6, 7, 10]],
  output: -1
});

test.runTests();
