const UnitTest = require("./unit-test");

const addNumbers = (...nums) => nums.reduce((num, acc) => num + acc);
const makeSentence = (...strings) =>
  strings.reduce((string, acc) => string + " " + acc);
const makeSentenceWithPunctuation = (stringsAsArray, endPunctuation = ".") => {
  let sentence = stringsAsArray
    .reduce((string, acc) => string + " " + acc)
    .toLowerCase();
  const splitSentence = sentence.split("");
  splitSentence[0] = splitSentence[0].toUpperCase();
  return splitSentence.join("") + endPunctuation;
};

const addTest = new UnitTest(addNumbers, "show passed messages");
const sentenceTest = new UnitTest(makeSentence);
const punctuationSentenceTest = new UnitTest(makeSentenceWithPunctuation);

addTest.createTestCase({
  output: 6,
  args: [1, 2, 3],
  description: "should add numbers and show passed messages"
});
addTest.createTestCase({
  output: 10,
  args: [1, 2, 3, 4],
  description: "should add an arbitrary amount of numbers"
});
addTest.createTestCase({
  output: "FAIL",
  args: [1, 2, 3, 4],
  description: "should fail (1 of 2)"
});

sentenceTest.createTestCase({
  output: "this is a test",
  args: ["this", "is", "a", "test"],
  description: "should add strings with a space between them"
});
sentenceTest.createTestCase({
  output: "this is another test",
  args: ["this", "is", "another", "test"],
  description: "should display green message when all tests passed"
});

punctuationSentenceTest.createTestCase({
  output: "This is a test!",
  args: [["this", "is", "a", "test"], "!"],
  description:
    "should capitalize the first letter and append optional punctuation to the end"
});
punctuationSentenceTest.createTestCase({
  output: "This is a test.",
  args: [["this", "is", "a", "test"]],
  description: "should add a '.' if no punctuation is given"
});
punctuationSentenceTest.createTestCase({
  output: "This test should fail! (2 of 2)",
  args: [["this", "is", "a", "test"]],
  description: "should fail (2 of 2)"
});

punctuationSentenceTest.createTestCase({
  description: "this test should throw and error"
});

punctuationSentenceTest.createTestCase({
  description: "this test should show an error",
  showError: true
});

addTest.runTests();
sentenceTest.runTests();
punctuationSentenceTest.runTests();
