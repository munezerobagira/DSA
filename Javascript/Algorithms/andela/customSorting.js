// Write a function that sorts an array in a descending order. The exception is that if it encounters a prime number, it should erase it from the array.

// Note: this should be entirely from scratch no inbuilt sorting functions allowed.

// Note: no String function or processing is allowed.
// Only use raw mathematical operations, loops and conditional statements.
function isPrime(number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

// solution using insertion sorting
function sortDescending(arr) {
  let sortedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!isPrime(arr[i])) {
      sortedArr.push(arr[i]);
      let j = sortedArr.length - 2;
      while (j >= 0 && arr[i] > sortedArr[j]) {
        sortedArr[j + 1] = sortedArr[j];
        sortedArr[j] = arr[i];
        j--;
      }
    }
  }
  return sortedArr;
}
console.assert(sortDescending([2]).join("") == [].join(""));
console.assert(sortDescending([4]).join("") == [4].join(""));
console.assert(sortDescending([4, 8]).join("") == [8, 4].join(""));
console.assert(sortDescending([4, 8, 2]).join("") == [8, 4].join(""));
