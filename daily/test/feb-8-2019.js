const UnitTest = require("../../test/unit-test");
const taskScheduler = require("../feb-8-2019");

const test = new UnitTest(taskScheduler);
// test.createTestCase({
//   description: "this is an example",
//   input: ["arg1", "arg2"],
//   output: "test"
// });

test.runTests();
