const UnitTest = require("../../test/unit-test");
const howManyRooms = require("../feb-19-2019");

const test = new UnitTest(howManyRooms);
// test.createTestCase({
//   description: "this is an example",
//   input: ["arg1", "arg2"],
//   output: "test"
// });

test.runTests();
