// A unival tree (which stands for "universal value") is a tree where
// all nodes under it have the same value.
// Given the root to a binary tree, count the number of unival subtrees.

function univalTreeCount(root) {
  let count = 0;
  const recHelper = function(node, value) {
    if (!node) return true;
    if (value === undefined) {
      const child = node.left || node.right;
      if (child) value = child.value;
    }
    if (
      (!node.left || node.left.value === value) &&
      (!node.right || node.right.value === value)
    ) {
      if (recHelper(node.left, value) && recHelper(node.right, value))
        count += 1;
      return true;
    } else {
      const child = node.left || node.right;
      value = child ? child.value : undefined;
      if (
        recHelper(node.left, value) &&
        recHelper(node.right, value) &&
        (!node.left || node.left.value === value) &&
        (!node.right || node.right.value === value)
      ) {
        count += 1;
      }
    }
    return false;
  };
  recHelper(root);
  return count;
}
// Time: O(N)
// Space: average (logN) | worst-case O(N)

module.exports = univalTreeCount;
