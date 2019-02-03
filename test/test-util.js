class TestUtil {
  static isMatch(testCase, result) {
    const { output, unordered } = testCase;
    switch (this.getType(result)) {
      case "array":
        return this.compareArrays(result, output, unordered);
      default:
        return result === output;
    }
  }

  static displayError(error, testCase) {
    const { description, hideError } = testCase;
    console.log(
      "\x1b[31m",
      `ERROR: Could not run "${description || JSON.stringify(testCase)}"`
    );
    console.log(
      hideError
        ? '   To see error, remove or falsify "hideError" in this test case.'
        : `  ${error}`
    );
  }

  static compareArrays(arr1, arr2, unordered) {
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

  static getType(data) {
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
      case "number":
        type = data === data ? "number" : "nan";
      default:
        null;
    }
    return type;
  }

  static stringify(...elements) {
    const strings = [];
    elements.forEach(data => {
      const type = this.getType(data);
      switch (type) {
        case "array":
          strings.push(`[${this.stringify(...data)}]`);
          break;
        case "nan":
          strings.push("NaN");
          break;
        case "undefined":
          strings.push("undefined");
          break;
        default:
          strings.push(JSON.stringify(data));
      }
    });
    return strings.join(", ");
  }

  static validateTestCase(testCase) {
    const keys = Object.keys(testCase);
    const valid = keys.includes("input") && keys.includes("output");
    if (!valid)
      throw ' Invalid test case!\n   Must include "input" and "output"';
  }
}

module.exports = TestUtil;
