// A unival tree (which stands for "universal value") is a tree where
// all nodes under it have the same value.
// Given the root to a binary tree, count the number of unival subtrees.

// function univalTreeCount(root) {
//   let count = 0;
//   const recHelper = function(node, value) {
//     if (!node) return true;
//     if (value === undefined) {
//       const child = node.left || node.right;
//       if (child) value = child.value;
//     }
//     if (
//       (!node.left || node.left.value === value) &&
//       (!node.right || node.right.value === value)
//     ) {
//       if (recHelper(node.left, value) && recHelper(node.right, value))
//         count += 1;
//       return true;
//     } else {
//       const child = node.left || node.right;
//       value = child ? child.value : undefined;
//       if (
//         recHelper(node.left, value) &&
//         recHelper(node.right, value) &&
//         (!node.left || node.left.value === value) &&
//         (!node.right || node.right.value === value)
//       ) {
//         count += 1;
//       }
//     }
//     return false;
//   };
//   recHelper(root);
//   return count;
// }

function univalTreeCount(root) {
  function recHelper(node) {
    if (!node) return [0, true];

    const [leftCount, leftIsUnival] = recHelper(node.left);
    const [rightCount, rightIsUnival] = recHelper(node.right);
    let [count, isUnival] = [0, false];
    const child = node.left || node.right;

    if (
      (!node.left || node.left.value === child.value) &&
      (!node.right || node.right.value === child.value) &&
      leftIsUnival &&
      rightIsUnival
    ) {
      count += 1;
      if (!child || node.value === child.value) isUnival = true;
    }
    return [leftCount + rightCount + count, isUnival];
  }
  return recHelper(root)[0];
}
// Time: O(N)
// Space: average (logN) | worst-case O(N)

module.exports = univalTreeCount;
