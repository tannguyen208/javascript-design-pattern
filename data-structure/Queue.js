// enqueue: Enter queue, add an element at the end.
// dequeue: Leave queue, remove the front element and return it.
// front: Get the first element.
// isEmpty: Determine whether the queue is empty.
// size: Get the number of element(s) in queue.

// Queue class implementation
class Queue {
  // Constructor to initialize an empty queue
  constructor() {
    this.collection = [];
  }

  // Method to print the queue contents
  print() {
    console.log(this.collection);
  }

  // Method to add an element to the queue
  enqueue(element) {
    this.collection.push(element);
  }

  // Method to remove and return the first element from the queue
  dequeue() {
    return this.collection.shift();
  }

  // Method to get the first element without removing it
  front() {
    return this.collection[0];
  }

  // Method to check if the queue is empty
  isEmpty() {
    return this.collection.length === 0;
  }

  // Method to get the number of elements in the queue
  size() {
    return this.collection.length;
  }
}
