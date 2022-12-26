// Write a Javascript function that takes an array of numbers and returns a new array of prime numbers filtered from the old array.

// Note: if looping is needed, use only primitive for loop ( forearch, map, etc are not allowed).

function reverseArray(array) {
  for (let i = 0; i < array.length / 2; i++) {
    let temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
  return array;
}
console.assert(
  reverseArray([1, 2, 3, 4, 5]).join("") == [5, 4, 3, 2, 1].join(""),
  "array reversed"
);
console.assert(
  [1, 2, 3].join("") == reverseArray([3, 2, 1]).join(""),
  "Another reversed all"
);
console.assert(
  [1, 2].join("") == reverseArray([2, 1]).join(""),
  "Another reversed all"
);
