// Given an array of integers, return a new array such that each element at
// index i of the new array is the product of all the numbers in the original
// array except the one at i.

function productExceptIQuad(array) {
  const resultArr = [];
  for (let i in array) {
    resultArr[i] = 1;
    for (let j in array) {
      if (i === j) continue;
      resultArr[i] *= array[j];
    }
  }
  return resultArr;
}

function productExceptILin(array) {
  const resultArr = [];
  let totalProduct = 1;
  let zeroCount = 0;
  let zeroIndex;
  for (let i in array) {
    if (array[i]) {
      totalProduct *= array[i];
    } else {
      zeroCount++;
      zeroIndex = i;
    }
  }
  for (let i in array) {
    if (zeroCount === 1) {
      resultArr.push(i === zeroIndex ? totalProduct : 0);
    } else if (zeroCount > 1) {
      resultArr.push(0);
    } else {
      resultArr.push(totalProduct / array[i]);
    }
  }
  return resultArr;
}

function productExceptILinWithoutDiv() {
  // without division
}

// Time: O(N)
// Space: O(N)

module.exports = productExceptILin;
