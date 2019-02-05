const TestUtil = require("./test-util.js");

class UnitTest {
  constructor(testSubject, hidePassedMessages) {
    this.function = testSubject;
    this.testCases = [];
    this.hidePassedMessages = hidePassedMessages;
  }

  createTestCase(testCase) {
    this.testCases.push(testCase);
  }

  // TODO: change message if 0 test cases
  // TODO: move try/catch to individual test
  runTests() {
    console.log("\x1b[36m", `${this.function.name}`);
    let passedTests = 0;
    this.testCases.forEach(testCase => {
      try {
        const testPassed = this.runIndividualTest(testCase);
        if (testPassed) passedTests += 1;
      } catch (error) {
        TestUtil.displayError(error, testCase);
      }
    });
    const numPassedTestsColor =
      passedTests === this.testCases.length ? "\x1b[32m" : "\x1b[33m";
    console.log(
      numPassedTestsColor,
      `Passed ${passedTests} of ${this.testCases.length} tests!`,
      "\x1b[0m"
    );
  }

  runIndividualTest(testCase) {
    TestUtil.validateTestCase(testCase);
    let { output: expected, input: args, description } = testCase;
    let result = this.function(...args);
    const match = TestUtil.isMatch(testCase, result);
    if (!match) {
      const input = TestUtil.stringify(...args);
      expected = TestUtil.stringify(expected);
      result = TestUtil.stringify(result);
      console.log(
        "\x1b[31m",
        `FAILED: ${description || JSON.stringify(testCase)}\n`,
        `  Input (${input}): Expected "${expected}" but got "${result}".`
      );
      return false;
    } else if (!this.hidePassedMessages) {
      console.log(
        "\x1b[32m",
        `PASSED: ${description || JSON.stringify(testCase)}`
      );
    }
    return true;
  }
}

module.exports = UnitTest;
