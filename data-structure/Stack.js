// push: Input a new element.
// pop : Remove the top element, return the removed element.
// peek : Return the top element.
// length : Return the number of element(s) in the stack.

// This is a class definition for a stack data structure
class Stack {
  // This constructor initializes the count and storage properties
  constructor() {
    this.count = 0;
    this.storage = {};
  }

  // This method adds an item to the top of the stack
  push(value) {
    // Store the value at the current count index
    this.storage[this.count] = value;
    // Increment the count to indicate a new item has been added
    this.count++;
  }

  // This method removes and returns the top item from the stack
  pop() {
    // If the stack is empty, return undefined
    if (this.count === 0) {
      return undefined;
    }
    // Decrement the count to get the index of the top item
    this.count--;
    // Get the value of the top item
    const result = this.storage[this.count];
    // Remove the top item from the stack
    delete this.storage[this.count];
    // Return the removed item
    return result;
  }

  // This method returns the value of the top item without removing it
  peek() {
    return this.storage[this.count - 1];
  }

  // This method returns the number of items in the stack
  size() {
    return this.count;
  }
}
