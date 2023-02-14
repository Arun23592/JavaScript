const array = [2, 5, 1, 9, 6, 7];
console.log(array[4]);

//Insert to tail
console.log(array.push(4));

// Insert/update values anywhere
console.log((array[8] = 3));

// Insert to head, changes every index
console.log(array.unshift(0)); // array: [0, 2, 5, 1, 9, 6, 7, 4, empty, 3];
