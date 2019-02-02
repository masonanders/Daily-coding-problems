// TODO: Make a UnitTestUtil class to separate private methods
class UnitTest {
  constructor(testSubject, showPassedTestMessages) {
    this.function = testSubject;
    this.testCases = [];
    this.showPassedTestMessages = showPassedTestMessages;
  }

  createTestCase(testCase) {
    this.testCases.push(testCase);
  }

  // TODO: change message if 0 test cases
  runTests() {
    console.log("\x1b[36m", `${this.function.name}`);
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
    this.validateTestCase(testCase);
    let { output: expected, input: args, description } = testCase;
    let result = this.function(...args);
    const match = this.isMatch(testCase, result);
    if (!match) {
      const input = this.stringifyArr(args);
      if (typeof expected !== "string") expected = JSON.stringify(expected);
      if (typeof result !== "string") result = JSON.stringify(result);
      console.log(
        "\x1b[31m",
        `FAILED: ${description || JSON.stringify(testCase)}\n`,
        `  Input (${input}): Expected "${expected}" but got "${result}".`
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

  isMatch(testCase, result) {
    const { output, unordered } = testCase;
    switch (this.getType(result)) {
      case "array":
        return this.compareArrays(result, output, unordered);
      default:
        return result === output;
    }
  }

  displayError(error, testCase) {
    const { description, hideError } = testCase;
    console.log(
      "\x1b[31m",
      `ERROR: Could not run "${description || JSON.stringify(testCase)}".`
    );
    console.log(
      hideError
        ? '   To see error, remove or falsify "hideError" in this test case.'
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

  stringifyArr(arr) {
    let elsToStrings = [];
    arr.forEach(el => elsToStrings.push(JSON.stringify(el)));
    return elsToStrings.join(", ");
  }

  validateTestCase(testCase) {
    const keys = Object.keys(testCase);
    const valid = keys.includes("input") && keys.includes("output");
    if (!valid)
      throw ' Invalid test case!\n   Must include "input" and "output"';
  }
}

module.exports = UnitTest;
