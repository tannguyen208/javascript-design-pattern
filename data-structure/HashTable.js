// add: Add a key-value pair.
// remove: Delete a key-value pair.
// lookup: Find a corresponding value using a key.
// Define a function to hash a string and return a value between 0 and max
function hash(string, max) {
  var hash = 0;

  // Loop through each character in the string and add its unicode value to the hash
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }

  // Return the hash modulo max to ensure it is within the desired range
  return hash % max;
}

// Define a HashTable class
function HashTable() {
  let storage = [];
  const storageLimit = 4;

  // Define the add method to insert a key-value pair into the table
  this.add = function (key, value) {
    // Get the index of the key-value pair using the hash function
    var index = hash(key, storageLimit);

    // If the index is empty, create a new array with the key-value pair
    if (storage[index] === undefined) {
      storage[index] = [[key, value]];
    } else {
      // Otherwise, iterate over all key-value pairs at the index and try to find the matching key
      var inserted = false;
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          // If the key already exists, update its value
          storage[index][i][1] = value;
          inserted = true;
        }
      }

      // If the key doesn't exist, add a new key-value pair to the array
      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  };

  // Define the remove method to delete a key-value pair from the table
  this.remove = function (key) {
    // Get the index of the key-value pair using the hash function
    var index = hash(key, storageLimit);

    // If the index only has one key-value pair and it matches the provided key, delete the entire index
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      // Otherwise, iterate over all key-value pairs at the index and try to find the matching key
      for (var i = 0; i < storage[index]; i++) {
        if (storage[index][i][0] === key) {
          // If the key is found, delete the key-value pair
          delete storage[index][i];
        }
      }
    }
  };

  // Define the lookup method to find the value associated with a given key in the table
  this.lookup = function (key) {
    // Get the index of the key-value pair using the hash function
    var index = hash(key, storageLimit);

    // If the index is empty, return undefined
    if (storage[index] === undefined) {
      return undefined;
    } else {
      // Otherwise, iterate over all key-value pairs at the index and try to find the matching key
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          // If the key is found, return its associated value
          return storage[index][i][1];
        }
      }
    }
  };
}
