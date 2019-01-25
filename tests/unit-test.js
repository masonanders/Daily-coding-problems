class UnitTest {
  constructor(testSubject) {
    this.testSubject = testSubject;
    this.testCases = [];
  }

  createTestCase(expectedOutput, ...args) {
    this.testCases.push({ expectedOutput, args });
  }

  runTests() {
    console.log(`${this.testSubject.name}`);
    let passedTests = 0;
    this.testCases.forEach(testCase => {
      const testPassed = this.runIndividualTest(
        testCase.expectedOutput,
        testCase.args
      );
      if (testPassed) passedTests += 1;
    });
    console.log(
      `Passed ${passedTests} of ${this.testCases.length} tests!`
    );
  }

  runIndividualTest(expected, args) {
    let result = this.testSubject(...args);
    if (result !== expected) {
      let input = `(${args})`;
      expected = JSON.stringify(expected);
      result = JSON.stringify(result);
      console.log(
        `Input ${input}: Expected "${expected}" but got "${result}".`
      );
      return false;
    }
    return true;
  }
}

module.exports = UnitTest;
