// cons(a, b) constructs a pair, and car(pair) and cdr(pair) returns
// the first and last element of that pair. For example, car(cons(3, 4))
// returns 3, and cdr(cons(3, 4)) returns 4.

// Given this implementation of cons:
function cons(a, b) {
  function pair(cb) {
    return cb(a, b);
  }
  return pair;
}

function car(pair) {
  return pair((...args) => args[0]);
}
function cdr(pair) {
  return pair((...args) => args[1]);
}

function pairFirstAndLast(carOrCdrAsString, pairAsArray) {
  switch (carOrCdrAsString) {
    case "car":
      return car(cons(...pairAsArray));
    case "cdr":
      return cdr(cons(...pairAsArray));
    default:
      return "invalid";
  }
}

// Time: O(?)
// Space: O(?)

module.exports = pairFirstAndLast;
