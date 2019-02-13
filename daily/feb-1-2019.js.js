// Given the root to a binary tree, implement serialize(root), which
// serializes the tree into a string, and deserialize(s), which deserializes
// the string back into the tree.

// root = Node()

class Node {
  constructor(value, ...children) {
    this.value = value;
    this.children = children;
  }
  serialize() {
    
  }
  static deserialize(string) {}
}

class BinaryNode extends Node {
  constructor(value, left = null, right = null) {
    super(value, left, right);
    this.left = left;
    this.right = right;
  }

  changeLeft(node) {
    this.left = node;
    this.children[0] = node;
  }

  changeRight(node) {
    this.right = node;
    this.children[1] = node;
  }
}

function serializeTree(/*arguments*/) {
  // code here
}

// Time: O(?)
// Space: O(?)

module.exports = serializeTree;
