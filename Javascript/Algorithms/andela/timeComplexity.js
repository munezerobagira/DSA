//[Optiona] We would like to know if a particular array contains a majority element. An array has a majority element if there is at least one element that counts more than half of the size.

function hasMajorityElement(array) {
  let elementCounter = {},
    highCount = 0;

  for (let i = 0; i < array.length; i++) {
    if (elementCounter[array[i]]) {
      ++elementCounter[array[i]];
      if (elementCounter[array[i]] > highCount)
        highCount = elementCounter[array[i]];
    } else {
      elementCounter[array[i]] = 1;
    }
  }
  if (highCount > array.length / 2) return true;
  return false;
}
console.assert(
  hasMajorityElement([3, 1, 3, 4, 4, 5, 3, 5, 3, 3, 3, 6, 3]) == true
);
console.assert(hasMajorityElement([3, 1, 3, 4, 4]) == false);
