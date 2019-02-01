// A very basic adding function for testing my system

function basicAdd(...nums) {
  return nums.reduce((num, accum) => num + accum, 0);
}

// Time: O(n)
// Space: O(1)

module.exports = basicAdd;
