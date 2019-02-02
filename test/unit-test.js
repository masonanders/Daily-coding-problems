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
      passedTests === this.testCases.length && this.testCases.length > 0
        ? "\x1b[32m"
        : "\x1b[33m";
    console.log(
      numPassedTestsColor,
      `Passed ${passedTests} of ${this.testCases.length} tests!`,
      "\x1b[0m"
    );
  }
  // TODO: change message if 0 test cases

  runIndividualTest(testCase) {
    const { output, args, description } = testCase;
    let result = this.testSubject(...args);
    const resultType = getType(result);
    if (result !== output) {
      let input = `(${args})`;
      console.log(
        "\x1b[31m",
        `Input ${input}: Expected "${output}" but got "${result}".`
      );
      return false;
    }
    if (this.showPassedTestMessages) {
      console.log(
        "\x1b[32m",
        `Passed: "${description || JSON.stringify(testCase)}".`
      );
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

  getType(data) {
    let type = typeof data;
    switch (type) {
      case "object":
        if (data.type) {
          type = data.type;
        } else if (Array.isArray(data)) {
          type = "array";
        } else if (!data) {
          type = "null";
        }
        break;
      default:
        null;
    }
    return type;
  }
}

module.exports = UnitTest;
