// Write a function that determines whether a string of opening and closing parentheses, square brackets,
// and curly brackets is valid. Other characters may be present
// Valid: '{(this)([is](valid))}'
// Invalid: '{(this){[is]{not}(valid)]}'

class Stack {
  constructor(...args) {
    this.stack = new Array(...args);
    this.length = this.stack.length;
  }

  push(...args) {
    this.stack = this.stack.concat(args);
    this._resetLength();
    return this.stack;
  }

  pop(quantity = 1) {
    const result =
      quantity > 1
        ? this.stack.splice(this.length - quantity, quantity)
        : this.stack.pop();
    this._resetLength();
    return result;
  }

  last() {
    return this.stack[this.length - 1];
  }

  _resetLength() {
    return (this.length = this.stack.length);
  }
}

function balancedParentheses(string) {
  const parenPairs = {
    "(": ")",
    "[": "]",
    "{": "}"
  };
  const parentheses = new Stack();
  for (let i in string) {
    const char = string[i];
    switch (char) {
      case "(":
      case "[":
      case "{":
        parentheses.push(char);
        break;
      case ")":
      case "]":
      case "}":
        if (parenPairs[parentheses.last()] === char) {
          parentheses.pop();
          break;
        } else {
          return false;
        }
      default:
        null;
    }
  }
  return parentheses.length === 0;
}

// Time: O(N)
// Space: O(N)

module.exports = balancedParentheses;
