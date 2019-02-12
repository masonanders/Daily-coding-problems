const UnitTest = require("../../test/unit-test");
const balancedParentheses = require("../balancedParentheses");

const test = new UnitTest(balancedParentheses);
test.createTestCase({
  description: "returns true when parentheses are balanced",
  input: ["(((((())))))"],
  output: true
});
test.createTestCase({
  description: "returns false when parentheses are not balanced",
  input: ["(((((())))"],
  output: false
});
test.createTestCase({
  description: "returns true when mixed brackets are balanced",
  input: ["[{()()}([])]"],
  output: true
});
test.createTestCase({
  description: "returns false when mixed brackets are not balanced",
  input: ["[{()}([)]"],
  output: false
});
test.createTestCase({
  description: "works when other characters are present",
  input: ["[{(this)}is(a[test]!)]"],
  output: true
});

test.runTests();
