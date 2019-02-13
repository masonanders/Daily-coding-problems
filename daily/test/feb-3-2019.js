const UnitTest = require("../../test/unit-test");
const pairFirstAndLast = require("../feb-3-2019");

const test = new UnitTest(pairFirstAndLast);
test.createTestCase({
  description: "car should return first element in the pair",
  input: ["car", [5, 6]],
  output: 5
});
test.createTestCase({
  description: "cdr should return last element in the pair",
  input: ["cdr", [5, 6]],
  output: 6
});

test.runTests();
