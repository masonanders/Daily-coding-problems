const UnitTest = require("./unit-test");

const addNumbers = (...nums) => nums.reduce((num, acc) => num + acc);
const makeSentence = (...strings) =>
  strings.reduce((string, acc) => string + " " + acc);
const throwError = () => {
  throw "Errored Successfully!";
};
const returnArray = arr => arr;

const addTest = new UnitTest(addNumbers);
const sentenceTest = new UnitTest(makeSentence, "show passed messages");
const errorTest = new UnitTest(throwError);
const arrayTest = new UnitTest(returnArray, true);

// Add Test
addTest.createTestCase({
  description: "this first test should fail",
  output: "FAIL",
  input: [1, 2, 3]
});
addTest.createTestCase({
  description: "this second test should pass",
  output: 10,
  input: [1, 2, 3, 4]
});
addTest.createTestCase({
  description: "this third test should fail",
  output: "FAIL",
  input: [1, 2, 3, 4]
});

// Sentence Test
sentenceTest.createTestCase({
  description: "show passed messages when indicated",
  output: "this is a test",
  input: ["this", "is", "a", "test"]
});
sentenceTest.createTestCase({
  description: "should display green message when all tests passed",
  output: "this is another test",
  input: ["this", "is", "another", "test"]
});

// Error Test
errorTest.createTestCase({
  description: "this test should throw and error"
});
errorTest.createTestCase({
  description: "this test should hide the error",
  hideError: true
});

// Array Test
arrayTest.createTestCase({
  description: "should compare unordered arrays",
  output: [1, 2, 3, 4, 5],
  input: [[5, 4, 3, 2, 1]],
  unordered: true
});
arrayTest.createTestCase({
  description: "should compare ordered arrays",
  output: [1, 2, 3, 4, 5],
  input: [[1, 2, 3, 4, 5]]
});
arrayTest.createTestCase({
  description: "should fail when ordered arrays don't match",
  output: [1, 2, 3, 4, 5],
  input: [[5, 4, 3, 2, 1]]
});

addTest.runTests();
console.log();
sentenceTest.runTests();
console.log();
errorTest.runTests();
console.log();
arrayTest.runTests();
