const UnitTest = require("../../test/unit-test");
const autoComplete = require("../feb-9-2019");

const test = new UnitTest(autoComplete);
// test.createTestCase({
//   description: "this is an example",
//   input: ["arg1", "arg2"],
//   output: "test"
// });

test.runTests();
