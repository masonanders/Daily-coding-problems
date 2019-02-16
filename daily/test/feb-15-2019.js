const UnitTest = require("../../test/unit-test");
const longestAbsolutePath = require("../feb-15-2019");

const test = new UnitTest(longestAbsolutePath);
// test.createTestCase({
//   description: "this is an example",
//   input: ["arg1", "arg2"],
//   output: "test"
// });

test.runTests();
