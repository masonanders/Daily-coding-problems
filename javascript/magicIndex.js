// The magic index of an array occurs when the element at that index is the
// same as the index itself. More simply, the magic index is when array[i] === i.
// Write a recursive method, findMagicIndex, that takes in an array and returns
// the index that is the magic index.

function magicIndex(array, offset = 0) {
  if (!array.length) return -1;
  if (array.length === 1 && array[0] !== 0 + offset) return -1;
  const middleIndex = Math.floor(array.length / 2);
  if (array[middleIndex] === middleIndex + offset) return array[middleIndex];
  const left = magicIndex(array.slice(0, middleIndex), offset);
  if (left >= 0) return left;
  return magicIndex(array.slice(middleIndex), middleIndex + offset);
}

// Time: Average O(logN), Worst-Case: O(N)
// Space: O(logN)

module.exports = magicIndex;
