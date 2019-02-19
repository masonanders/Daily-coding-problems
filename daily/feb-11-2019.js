// Given an integer k and a string s, find the length of the longest
// substring that contains at most k distinct characters.

function longestDistinctSubstring(string, distChars) {
  const subs = substrings(string);
  const subsOfLengthN = [];
  subs.forEach(sub => {
    if (uniqueChars(sub) === distChars) subsOfLengthN.push(sub);
  });
  return subsOfLengthN.reduce((next, acc) =>
    next.length > acc.length ? next : acc
  );
}

function uniqueChars(string) {
  const chars = new Set();
  for (let i in string) {
    chars.add(string[i]);
  }
  return chars.size;
}

function substrings(string) {
  const subs = new Set();
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j <= string.length; j++) {
      subs.add(string.slice(i, j));
    }
  }
  return subs;
}

// Time: O(N^2 * K)
// Space: O(N^2)

function longestDistinctSubstring(string, distChars) {
  let longestSub = "";
  let minIdx = 0;
  const chars = {};
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    chars[char] = i;
    if (Object.keys(chars).length > distChars) {
      delete chars[lowestValue(chars)[0]];
      minIdx = lowestValue(chars)[1];
    }
    const currentSub = string.slice(minIdx, i + 1);
    longestSub =
      currentSub.length > longestSub.length ? currentSub : longestSub;
  }
  return longestSub;
}

function lowestValue(object) {
  const entries = Object.entries(object);
  const lowestEntry = entries.reduce((entry, acc) =>
    entry[1] < acc[1] ? entry : acc
  );
  return lowestEntry;
}
// Time: O(N * K)
// Space: O(N)

module.exports = longestDistinctSubstring;
