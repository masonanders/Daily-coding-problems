const UnitTest = require("../../test/unit-test");
const serializeTree = require("../feb-1-2019.js");

const test = new UnitTest(serializeTree);
// test.createTestCase({
//   description: "this is an example",
//   input: ["arg1", "arg2"],
//   output: "test"
// });

test.runTests();
