const UnitTest = require("./unit-test");

const basicTest = (...nums) => nums.reduce((num, acc) => num + acc);
const hidePassedMessages = (...strings) =>
  strings.reduce((string, acc) => string + " " + acc);
const throwError = () => {
  throw "Errored Successfully!";
};
const compareArrays = (arr, nestAndShuffle) => {
  if (nestAndShuffle) {
    const result = [];
    for (let i in arr) {
      result.push([arr[i]]);
    }
    return result;
  } else {
    return arr;
  }
};

const addTest = new UnitTest(basicTest);
const sentenceTest = new UnitTest(hidePassedMessages, true);
const errorTest = new UnitTest(throwError);
const arrayTest = new UnitTest(compareArrays);

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
  description: "hide passed messages when indicated",
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
  input: [[5, 4, 3, 2, 1]],
  output: [1, 2, 3, 4, 5],
  unordered: true
});
arrayTest.createTestCase({
  description: "should compare ordered arrays",
  input: [[1, 2, 3, 4, 5]],
  output: [1, 2, 3, 4, 5]
});
arrayTest.createTestCase({
  description: "should fail when ordered arrays don't match",
  input: [[5, 4, 3, 2, 1]],
  output: [1, 2, 3, 4, 5]
});
arrayTest.createTestCase({
  description: "should compare unordered nested arrays",
  input: [[5, 4, 3, 2, 1], true],
  output: [[1], [2], [3], [4], [5]],
  unordered: true
});

addTest.runTests();
console.log();
sentenceTest.runTests();
console.log();
errorTest.runTests();
console.log();
arrayTest.runTests();
