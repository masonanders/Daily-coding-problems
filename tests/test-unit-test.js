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

const addTest = new UnitTest(addNumbers);
const sentenceTest = new UnitTest(makeSentence);
const punctuationSentenceTest = new UnitTest(makeSentenceWithPunctuation);

addTest.createTestCase(6, 1, 2, 3);
addTest.createTestCase(10, 1, 2, 3, 4);
addTest.createTestCase("This test should fail! (1 of 3)", 1, 2, 3, 4);

sentenceTest.createTestCase("this is a test", "this", "is", "a", "test");
sentenceTest.createTestCase(
  "This test should fail! (2 of 3)",
  "this",
  "is",
  "a",
  "test"
);

punctuationSentenceTest.createTestCase(
  "This is a test!",
  ["this", "is", "a", "test"],
  "!"
);
punctuationSentenceTest.createTestCase("This is a test.", [
  "this",
  "is",
  "a",
  "test"
]);
punctuationSentenceTest.createTestCase("This test should fail! (3 of 3)", [
  "this",
  "is",
  "a",
  "test"
]);

addTest.runTests();
sentenceTest.runTests();
punctuationSentenceTest.runTests();
