const UnitTest = require("../../test/unit-test");
const minimumBuildCost = require("../feb-17-2019");

const test = new UnitTest(minimumBuildCost);
// test.createTestCase({
//   description: "this is an example",
//   input: ["arg1", "arg2"],
//   output: "test"
// });

test.runTests();
