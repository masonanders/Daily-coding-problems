class Node {
  constructor(value, ...children) {
    this.value = value;
    this.children = children;
  }
}

class BinaryNode extends Node {
  constructor(value, left, right) {
    super(value, left, right);
    this.left = left;
    this.right = right;
  }
}
