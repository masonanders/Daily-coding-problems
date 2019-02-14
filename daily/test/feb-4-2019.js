const UnitTest = require("../../test/unit-test");
const testXORLinkedList = require("../feb-4-2019");

const test = new UnitTest(testXORLinkedList);
// test.createTestCase({
//   description: "this is an example",
//   input: ["arg1", "arg2"],
//   output: "test"
// });

test.runTests();
