const UnitTest = require("../../test/unit-test");
const waysToDecode = require("../feb-5-2019");

const test = new UnitTest(waysToDecode);
test.createTestCase({
  description: "finds ways to decode a small string of ones",
  input: ["111"],
  output: ["aaa", "ka", "ak"],
  unordered: true
});
test.createTestCase({
  description: "finds ways to decode a larger string of ones",
  input: ["111111"],
  output: [
    "aaaaaa",
    "aaaak",
    "aaaka",
    "aakaa",
    "akaaa",
    "kaaaa",
    "aakk",
    "akak",
    "kaak",
    "akka",
    "kaka",
    "kkaa",
    "kkk"
  ],
  unordered: true
});

test.runTests();
