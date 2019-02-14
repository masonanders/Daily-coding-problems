const UnitTest = require("../../test/unit-test");
const univalTreeCount = require("../feb-6-2019");

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
const uniTree1 = new Node(0);
const uniTree5 = new Node(
  0,
  new Node(1),
  new Node(0, new Node(1, new Node(1), new Node(1)), new Node(0))
);
const uniTree6 = new Node(
  0,
  new Node(1),
  new Node(0, new Node(1, new Node(1), new Node(1)), new Node(1))
);
const uniTree8 = new Node(
  0,
  new Node(1),
  new Node(
    0,
    new Node(1, new Node(1), new Node(1)),
    new Node(1, new Node(0), new Node(0, new Node(0)))
  )
);

const test = new UnitTest(univalTreeCount);
test.createTestCase({
  description: "should return number of unival trees",
  input: [uniTree5],
  output: 5
});
test.createTestCase({
  description: "should count a unival trees children as well as itself",
  input: [uniTree6],
  output: 6
});
test.createTestCase({
  description:
    "should count a tree as unival even if the root value does not match the children",
  input: [uniTree8],
  output: 8
});
test.createTestCase({
  description: "should return 1 if node has no children",
  input: [uniTree1],
  output: 1
});

test.runTests();
