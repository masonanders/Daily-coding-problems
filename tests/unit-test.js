class UnitTest {
  constructor(testSubject) {
    this.testSubject = testSubject;
    this.testCases = [];
  }

  createTestCase(expectedOutput, ...args) {
    this.testCases.push({ expectedOutput, args });
  }

  runTests() {
    console.log("\x1b[36m", `${this.testSubject.name}`);
    let passedTests = 0;
    this.testCases.forEach(testCase => {
      const testPassed = this.runIndividualTest(
        testCase.expectedOutput,
        testCase.args
      );
      if (testPassed) passedTests += 1;
    });
    const color =
      passedTests === this.testCases.length ? "\x1b[32m" : "\x1b[33m";
    console.log(
      color,
      `Passed ${passedTests} of ${this.testCases.length} tests!`
    );
    console.log("\x1b[0m", "");
  }

  runIndividualTest(expected, args) {
    let result = this.testSubject(...args);
    if (result !== expected) {
      let input = `(${args})`;
      expected = JSON.stringify(expected);
      result = JSON.stringify(result);
      console.log(
        "\x1b[31m",
        `Input ${input}: Expected "${expected}" but got "${result}".`
      );
      return false;
    }
    return true;
  }
}

module.exports = UnitTest;
