// root: Root node of a tree; no parent node for root.
// parent node: Direct node of the upper layer; only has one
// child node: Direct node(s) of the lower layer; can have multiple
// siblings: Share the same parent node
// leaf: Node with no child
// Edge: Branch or link between nodes
// Path: The edges from a starting node to the target node
// Height of Node: Number of edges of the longest path of a specific node to leaf node
// Height of Tree: Number of edges of the longest path of the root node to the leaf node
// Depth of Node: Number of edges from root node to specific node
// Degree of Node: Number of child nodes
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add = (data) => {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    }
    const searchTree = (node) => {
      if (data < node.data) {
        if (node.left === null) {
          node.left = new Node(data);
          return;
        }
        return searchTree(node.left);
      }
      if (node.right === null) {
        node.right = new Node(data);
        return;
      }
      return searchTree(node.right);
    };
    return searchTree(node);
  };

  findMin = () => {
    let current = this.root;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  };

  findMax = () => {
    let current = this.root;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  };

  find = (data) => {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return current;
      }
      current = data < current.data ? current.left : current.right;
    }
    return null;
  };

  isPresent = (data) => {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      current = data < current.data ? current.left : current.right;
    }
    return false;
  };

  remove = (data) => {
    const removeNode = (node, data) => {
      if (node == null) {
        return null;
      }
      if (data === node.data) {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          return node.right;
        }
        if (!node.right) {
          return node.left;
        }
        let tempNode = node.right;
        while (tempNode.left) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      }
      node.right = removeNode(node.right, data);
      return node;
    };
    this.root = removeNode(this.root, data);
  };
}

const bst = new BST();
bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);
bst.remove(4);
console.log(bst.findMin());
console.log(bst.findMax());
bst.remove(7);
console.log(bst.findMax());
console.log(bst.isPresent(4));

// 1
// 7
// 6
// false
