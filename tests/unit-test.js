class UnitTest {
  constructor(testSubject, showPassedTestMessages) {
    this.testSubject = testSubject;
    this.testCases = [];
    this.showPassedTestMessages = showPassedTestMessages;
  }

  createTestCase(testCase) {
    this.testCases.push(testCase);
  }

  runTests() {
    console.log("\x1b[36m", `${this.testSubject.name}`);
    let passedTests = 0;
    this.testCases.forEach(testCase => {
      try {
        const testPassed = this.runIndividualTest(testCase);
        if (testPassed) passedTests += 1;
      } catch (error) {
        this.displayError(error, testCase);
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
    const { output, args, description } = testCase;
    let result = this.testSubject(...args);
    if (result !== output) {
      let input = `(${args})`;
      console.log(
        "\x1b[31m",
        `Input ${input}: Expected "${output}" but got "${result}".`
      );
      return false;
    }
    if (this.showPassedTestMessages) {
      console.log("\x1b[32m", `Passed: "${description}".`);
    }
    return true;
  }

  displayError(error, testCase) {
    console.log(
      "\x1b[31m",
      "\n",
      `ERROR: Could not run "${testCase.description ||
        JSON.stringify(testCase)}".\n`,
      testCase.showError
        ? error
        : "To see full error, include { showError: true } in your test case."
    );
  }
}

module.exports = UnitTest;
