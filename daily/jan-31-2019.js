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

function productExceptILinWithoutDiv(array) {
  const result = [];
  const recProd = (arr, left = 1, i = 0) => {
    if (i === arr.length) return 1;
    left = arr[i - 1] !== undefined ? left * arr[i - 1] : left;
    const right = recProd(arr, left, i + 1);
    result[i] = left * right;
    return right * arr[i];
  };
  recProd(array);
  return result;
}

// Time: O(N)
// Space: O(N)

module.exports = productExceptILinWithoutDiv;
