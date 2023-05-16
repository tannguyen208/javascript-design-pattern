// size: Return the number of node(s).
// head: Return the element of the head.
// add: Add another node in the tail.
// remove: Remove a certain node.
// indexOf: Return the index of a node.
// elementAt: Return the node of an index.
// addAt: Insert a node at a specific index.
// removeAt: Delete a node at a specific index.
class LinkedList {
  constructor() {
    this._head = null;
    this._size = 0;
  }

  size() {
    return this._size;
  }

  head() {
    return this._head;
  }

  add(element) {
    const node = new Node(element);
    if (!this._head) {
      this._head = node;
    } else {
      let currentNode = this._head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this._size++;
  }

  remove(element) {
    let currentNode = this._head;
    let previousNode = null;
    if (currentNode.element === element) {
      this._head = currentNode.next;
    } else {
      while (currentNode && currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      if (currentNode) {
        previousNode.next = currentNode.next;
      }
    }
    if (currentNode) {
      this._size--;
    }
  }

  isEmpty() {
    return this._size === 0;
  }

  indexOf(element) {
    let currentNode = this._head;
    let index = -1;
    while (currentNode) {
      index++;
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }
    return -1;
  }

  elementAt(index) {
    let currentNode = this._head;
    let count = 0;
    while (count < index && currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode ? currentNode.element : undefined;
  }

  addAt(index, element) {
    const node = new Node(element);
    let currentNode = this._head;
    let previousNode = null;
    let currentIndex = 0;
    if (index > this._size) {
      return false;
    }
    if (index === 0) {
      node.next = currentNode;
      this._head = node;
    } else {
      while (currentIndex < index && currentNode) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    this._size++;
    return true;
  }

  removeAt(index) {
    let currentNode = this._head;
    let previousNode = null;
    let currentIndex = 0;
    if (index < 0 || index >= this._size) {
      return null;
    }
    if (index === 0) {
      this._head = currentNode.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    this._size--;
    return currentNode.element;
  }
}

class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}
