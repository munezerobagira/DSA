// Write a Javascript function that takes an array of numbers and returns a new array of prime numbers filtered from the old array.

// Note: if looping is needed, use only primitive for loop ( forearch, map, etc are not allowed).

function isPrime(number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}

// test if prime function works
console.assert(isPrime(2) == true, "2 is a prime number");
console.assert(isPrime(3) == true, "3 is  a prime number");
console.assert(isPrime(4) == false, "4 is not a prime number");
console.assert(isPrime(5) == true, "5 is a prime number");
console.assert(isPrime(31) == true, "31 is a prime number");



function nonPrimeArray(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (isPrime(array[i]) == false) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
console.assert(
  nonPrimeArray([2, 4, 5, 31]).join("") == [4].join(""),
  "All prime flittered out"
);
console.assert(
  nonPrimeArray([2, 4, 5, 31, 7, 9]).join("") == [4, 9].join(""),
  "All prime flittered out"
);
