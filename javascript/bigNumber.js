// Take a positive integer and with the option to make one switch between any
// two of it's digits return the largest possible integer

function bigNumber(number) {
  if (number < 1) return null;
  const digits = String(number)
    .split("")
    .map(string => Number(string));
  let switchNum;
  for (let i = 1; i < digits.length; i++) {
    const currentNum = digits[i];
    if (switchNum && currentNum >= switchNum[0]) {
      switchNum = [currentNum, i];
    } else if (!switchNum) {
      const prevNum = digits[i - 1];
      if (currentNum > prevNum) switchNum = [currentNum, i];
    }
  }
  if (!switchNum) return Number(digits.join(""));
  for (let i in digits) {
    if (switchNum[0] > digits[i]) {
      digits[switchNum[1]] = digits[i];
      digits[i] = switchNum[0];
      return Number(digits.join(""));
    }
  }
}

// Time: O(N)
// Space: O(1)

module.exports = bigNumber;
