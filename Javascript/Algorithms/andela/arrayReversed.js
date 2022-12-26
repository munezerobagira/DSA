function reverseArray(array) {
  return array.reverse();
}
console.assert(
  reverseArray([1, 2, 3, 4, 5]).join("") == [5, 4, 3, 2, 1].join(""),
  "array reversed"
);
console.assert(
  [1, 2, 3].join("") == reverseArray([3, 2, 1]).join(""),
  "ANother reversed all"
);
