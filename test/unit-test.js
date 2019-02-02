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
    console.log("\x1b[36m", `\n${this.testSubject.name}`);
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
    if (!this.validateTestCase(testCase))
      throw 'Invalid test case!\n   Must include "args" and "output"';
    let { output, args, description } = testCase;
    let result = this.testSubject(...args);
    let match;
    switch (this.getType(result)) {
      case "array":
        match = this.compareArrays(result, output, testCase.unordered);
        break;
      default:
        match = result === output;
    }
    if (!match) {
      const input = this.stringify(args);
      if (typeof output !== "string") output = JSON.stringify(output);
      if (typeof result !== "string") result = JSON.stringify(result);
      console.log(
        "\x1b[31m",
        `FAILED: ${testCase.description || JSON.stringify(testCase)}\n`,
        `  Input (${input}): Expected "${output}" but got "${result}".`
      );
      return false;
    } else if (this.showPassedTestMessages) {
      console.log(
        "\x1b[32m",
        `PASSED: "${description || JSON.stringify(testCase)}".`
      );
    }
    return true;
  }
  // TODO: display description with details

  displayError(error, testCase) {
    console.log(
      "\x1b[31m",
      `ERROR: Could not run "${testCase.description ||
        JSON.stringify(testCase)}".\n`,
      testCase.hideError
        ? "  To see error, remove or falsify \"hideError\" in this test case."
        : `  ${error}`
    );
  }

  compareArrays(arr1, arr2, unordered) {
    if (arr1.length !== arr2.length) return false;
    if (unordered) {
      arr1 = arr1.sort();
      arr2 = arr2.sort();
    }
    for (let i in arr1) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
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

  stringify(arr) {
    let elsToStrings = [];
    arr.forEach(el => elsToStrings.push(JSON.stringify(el)));
    return elsToStrings.join(", ");
  }

  validateTestCase(testCase) {
    const keys = Object.keys(testCase);
    return keys.includes("args") && keys.includes("output");
  }
}

module.exports = UnitTest;
