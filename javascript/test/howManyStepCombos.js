const UnitTest = require("../../test/unit-test");
const howManyStepCombos = require("../howManyStepCombos");

const test = new UnitTest(howManyStepCombos);
// test.createTestCase({
//   output: "test",
//   args: ["arg1", "arg2"],
//   description: "this is an example"
// });

test.runTests();
