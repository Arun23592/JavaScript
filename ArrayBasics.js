const array = [2, 5, 1, 9, 6, 7];
console.log(array[4]);

//Insert to tail
console.log(array.push(4));

// Insert/update values anywhere
console.log((array[8] = 3));

// Insert to head, changes every index
console.log(array.unshift(0)); // array: [0, 2, 5, 1, 9, 6, 7, 4, empty, 3];

// Deleting could change all the indexes
// on the position 4, delete 2 elements
console.log(array.splice(4, 2)); // array: [0, 2, 5, 1, 7, 4, empty, 3]

// Inserting element sin the middle
console.log(array.splice(1, 0, 111)); // at the postion 1, delete 0 elements and insert 111
//=> array: [2, 111, 5, 1, 9, 6, 7]

// Deleting from the beginning of the array.
console.log(array.shift()); //=> [5, 1, 9, 6, 7]

// Deleting from the middle
console.log(array.splice(2, 1)); // delete 1 element at position 2
// => array: [2, 5, 9, 6, 7]

// Deleting last element from the array
console.log(array.pop(6)); // => array: [2, 5, 1, 9, 6]
