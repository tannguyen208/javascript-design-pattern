// Defining a new function constructor for the priority queue
class PriorityQueue {
  constructor() {
    // Initializing an empty array that will hold the collection of elements in the queue
    let collection = [];

    // Defining a method to add an element to the queue
    this.enqueue = function (element) {
      // Initializing a variable to track if the element was inserted into the queue
      let inserted = false;

      // Looping through the queue to determine where to insert the new element based on priority value (the second item in each element)
      for (let i = 0; i < collection.length; i++) {
        // If the priority value of the new element is less than the priority value of the current collection element being looped over,
        // we insert the new element before the higher-priority element
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element);
          inserted = true;
          break;
        }
      }

      // If the element was not inserted into the queue, it has the lowest priority and we simply push it onto the end of the array
      if (!inserted) {
        collection.push(element);
      }
    };

    // Defining a method to check if the queue is empty
    this.isEmpty = function () {
      return collection.length === 0;
    };
  }
}

let pQ = new PriorityQueue();
pQ.enqueue([gannicus, 3]);
pQ.enqueue([spartacus, 1]);
pQ.enqueue([crixus, 2]);
pQ.enqueue([oenomaus, 4]);

// [
//   [  spartacus , 1 ],
//   [  crixus , 2 ],
//   [  gannicus , 3 ],
//   [  oenomaus , 4 ]
// ]
