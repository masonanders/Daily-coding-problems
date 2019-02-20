const UnitTest = require("../../test/unit-test");
const howManyStepCombos = require("../howManyStepCombos");

const test = new UnitTest(howManyStepCombos);
test.createTestCase({
  description: "with one or two steps and four total",
  input: [[1, 2], 4],
  output: [[1, 1, 1, 1], [1, 1, 2], [1, 2, 1], [2, 1, 1], [2, 2]],
  unordered: true
});
test.createTestCase({
  description: "with one through three steps and four total",
  input: [[1, 2, 3], 4],
  output: [
    [1, 1, 1, 1],
    [1, 1, 2],
    [1, 2, 1],
    [2, 1, 1],
    [2, 2],
    [1, 3],
    [3, 1]
  ],
  unordered: true
});
test.createTestCase({
  description: "with one through 3 steps and five total",
  input: [[1, 2, 3], 5],
  output: [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 2],
    [1, 1, 2, 1],
    [1, 2, 1, 1],
    [2, 1, 1, 1],
    [2, 2, 1],
    [2, 1, 2],
    [1, 2, 2],
    [1, 1, 3],
    [1, 3, 1],
    [3, 1, 1],
    [3, 2],
    [2, 3]
  ],
  unordered: true
});

test.runTests();
