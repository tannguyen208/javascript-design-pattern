class Node {
  // constructor
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // adds an element at the end
  // of list
  add(element) {
    // creates a new node
    var node = new Node(element);

    // to store current node
    var current;

    // if list is Empty add the
    // element and make it head
    if (this.head == null) this.head = node;
    else {
      current = this.head;

      // iterate to the end of the
      // list
      while (current.next) {
        current = current.next;
      }

      // add node
      current.next = node;
    }
    this.size++;
  }

  // insert element at the position index
  // of the list
  insertAt(element, index) {
    if (index < 0 || index > this.size)
      return console.log('Please enter a valid index.');
    else {
      // creates a new node
      var node = new Node(element);
      var curr, prev;

      curr = this.head;

      // add the element to the
      // first index
      if (index == 0) {
        node.next = this.head;
        this.head = node;
      } else {
        curr = this.head;
        var it = 0;

        // iterate over the list to find
        // the position to insert
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        // adding an element
        node.next = curr;
        prev.next = node;
      }
      this.size++;
    }
  }

  // removes an element from the
  // specified location
  removeFrom(index) {
    if (index < 0 || index >= this.size)
      return console.log('Please Enter a valid index');
    else {
      var curr,
        prev,
        it = 0;
      curr = this.head;
      prev = curr;

      // deleting first element
      if (index === 0) {
        this.head = curr.next;
      } else {
        // iterate over the list to the
        // position to removce an element
        while (it < index) {
          it++;
          prev = curr;
          curr = curr.next;
        }

        // remove the element
        prev.next = curr.next;
      }
      this.size--;

      // return the remove element
      return curr.element;
    }
  }

  // removes a given element from the
  // list
  removeElement(element) {
    var current = this.head;
    var prev = null;

    // iterate over the list
    while (current != null) {
      // comparing element with current
      // element if found then remove the
      // and return true
      if (current.element === element) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        this.size--;
        return current.element;
      }
      prev = current;
      current = current.next;
    }
    return -1;
  }

  // finds the index of element
  indexOf(element) {
    var count = 0;
    var current = this.head;

    // iterae over the list
    while (current != null) {
      // compare each element of the list
      // with given element
      if (current.element === element) return count;
      count++;
      current = current.next;
    }

    // not found
    return -1;
  }

  // checks the list for empty
  isEmpty() {
    return this.size == 0;
  }

  // gives the size of the list
  getSize() {
    return this.size;
  }
}

var ll = new LinkedList();

// testing isEmpty on an empty list
// returns true
console.log(ll.isEmpty());

// adding element to the list
ll.add(10);

console.log(ll.getSize());

ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

console.log('is element removed ?' + ll.removeElement(20));

console.log('Index of 40 ' + ll.indexOf(40));

ll.insertAt(60, 2);
console.log(ll.head);

console.log('is List Empty ? ' + ll.isEmpty());

console.log(ll.removeFrom(3));
