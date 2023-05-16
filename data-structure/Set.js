// values: Return all elements in a set.
// size: Return the number of elements.
// has: Determine whether an element exists.
// add: Insert elements into a set.
// remove: Delete elements from a set.
// union: Return the intersection of two sets.
// difference: Return the difference of two sets.
// subset: Determine whether a certain set is a subset of another set.
// Define a class MySet
class MySet {
  constructor() {
    // Initialize a collection array to hold set elements
    var collection = [];

    // Define the has method to check if an element exists in the set
    this.has = function (element) {
      return collection.indexOf(element) !== -1;
    };

    // Define the values method to return all elements of the set
    this.values = function () {
      return collection;
    };

    // Define the size method to return the number of elements in the set
    this.size = function () {
      return collection.length;
    };

    // Define the add method to add a new element to the set
    this.add = function (element) {
      if (!this.has(element)) {
        collection.push(element);
        return true;
      }
      return false;
    };

    // Define the remove method to remove an element from the set
    this.remove = function (element) {
      if (this.has(element)) {
        index = collection.indexOf(element);
        collection.splice(index, 1);
        return true;
      }
      return false;
    };

    // Define the union method to create a new set that contains all elements from two sets
    this.union = function (otherSet) {
      var unionSet = new MySet();
      var firstSet = this.values();
      var secondSet = otherSet.values();

      // Add all elements from the first set to the union set
      firstSet.forEach(function (e) {
        unionSet.add(e);
      });

      // Add all elements from the second set to the union set
      secondSet.forEach(function (e) {
        unionSet.add(e);
      });

      // Return the union set
      return unionSet;
    };

    // Define the intersection method to create a new set that contains only common elements from two sets
    this.intersection = function (otherSet) {
      var intersectionSet = new MySet();
      var firstSet = this.values();

      // For each element in the first set, add to the intersection set if it exists in the other set
      firstSet.forEach(function (e) {
        if (otherSet.has(e)) {
          intersectionSet.add(e);
        }
      });

      // Return the intersection set
      return intersectionSet;
    };

    // Define the difference method to create a new set that contains all elements of the first set that are not in the second set
    this.difference = function (otherSet) {
      var differenceSet = new MySet();
      var firstSet = this.values();

      // For each element in the first set, add to the difference set if it does not exist in the other set
      firstSet.forEach(function (e) {
        if (!otherSet.has(e)) {
          differenceSet.add(e);
        }
      });

      // Return the difference set
      return differenceSet;
    };

    // Define the subset method to check if the current set is a subset of another set
    this.subset = function (otherSet) {
      var firstSet = this.values();

      // Check if every element in the first set exists in the other set
      return firstSet.every(function (value) {
        return otherSet.has(value);
      });
    };
  }
}
